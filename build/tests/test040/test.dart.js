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
a[c]=function(){a[c]=function(){H.pS(b)}
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
if(a[b]!==s)H.pT(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.l5(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kF:function kF(){},
kH:function(a){return new H.cR("Field '"+a+"' has been assigned during initialization.")},
ka:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
j_:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nS:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pw:function(a,b,c){return a},
nu:function(a,b,c,d){if(t.gw.b(a))return new H.cG(a,b,c.L("@<0>").ba(d).L("cG<1,2>"))
return new H.aQ(a,b,c.L("@<0>").ba(d).L("aQ<1,2>"))},
lr:function(){return new P.f2("No element")},
nP:function(a,b){H.eY(a,0,J.b6(a)-1,b)},
eY:function(a,b,c,d){if(c-b<=32)H.nO(a,b,c,d)
else H.nN(a,b,c,d)},
nO:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cs(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aw()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
nN:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a2(a4+a5,2),f=g-j,e=g+j,d=J.cs(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.H(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.eY(a3,a4,r-2,a6)
H.eY(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.H(a6.$2(d.h(a3,r),b),0);)++r
for(;J.H(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.eY(a3,r,q,a6)}else H.eY(a3,r,q,a6)},
cR:function cR(a){this.a=a},
Q:function Q(a){this.a=a},
m:function m(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
ez:function ez(a,b){this.a=null
this.b=a
this.c=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
fu:function fu(a,b){this.a=a
this.b=b},
cI:function cI(){},
fo:function fo(){},
cc:function cc(){},
nf:function(){throw H.d(P.B("Cannot modify unmodifiable Map"))},
mH:function(a){var s,r=H.mG(a)
if(r!=null)return r
s="minified:"+a
return s},
my:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.e6(a)
return s},
d7:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lB:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.d(P.a5(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.I(q,o)|32)>r)return n}return parseInt(a,b)},
d8:function(a){return H.ny(a)},
ny:function(a){var s,r,q,p
if(a instanceof P.N)return H.an(H.b2(a),null)
if(J.e0(a)===C.Q||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.an(H.b2(a),null)},
nz:function(){if(!!self.location)return self.location.href
return null},
lA:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nH:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.hy(q))throw H.d(H.e_(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aW(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.d(H.e_(q))}return H.lA(p)},
lC:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.hy(q))throw H.d(H.e_(q))
if(q<0)throw H.d(H.e_(q))
if(q>65535)return H.nH(a)}return H.lA(a)},
nI:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aX:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aW(s,10)|55296)>>>0,s&1023|56320)}}throw H.d(P.a5(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nG:function(a){var s=H.c4(a).getFullYear()+0
return s},
nE:function(a){var s=H.c4(a).getMonth()+1
return s},
nA:function(a){var s=H.c4(a).getDate()+0
return s},
nB:function(a){var s=H.c4(a).getHours()+0
return s},
nD:function(a){var s=H.c4(a).getMinutes()+0
return s},
nF:function(a){var s=H.c4(a).getSeconds()+0
return s},
nC:function(a){var s=H.c4(a).getMilliseconds()+0
return s},
mw:function(a){throw H.d(H.e_(a))},
c:function(a,b){if(a==null)J.b6(a)
throw H.d(H.cq(a,b))},
cq:function(a,b){var s,r="index"
if(!H.hy(b))return new P.aI(!0,b,r,null)
s=J.b6(a)
if(b<0||b>=s)return P.K(b,a,r,null,s)
return P.eT(b,r)},
pA:function(a,b,c){if(a>c)return P.a5(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a5(b,a,c,"end",null)
return new P.aI(!0,b,"end",null)},
e_:function(a){return new P.aI(!0,a,null,null)},
d:function(a){var s,r
if(a==null)a=new P.eK()
s=new Error()
s.dartException=a
r=H.pU
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pU:function(){return J.e6(this.dartException)},
h:function(a){throw H.d(a)},
q:function(a){throw H.d(P.b9(a))},
aZ:function(a){var s,r,q,p,o,n
a=H.mB(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jb(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jc:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lO:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kG:function(a,b){var s=b==null,r=s?null:b.method
return new H.et(a,r,s?null:b.receiver)},
bp:function(a){if(a==null)return new H.iJ(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bL(a,a.dartException)
return H.ps(a)},
bL:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ps:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aW(r,16)&8191)===10)switch(q){case 438:return H.bL(a,H.kG(H.w(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.w(s)+" (Error "+q+")"
return H.bL(a,new H.d6(p,e))}}if(a instanceof TypeError){o=$.mL()
n=$.mM()
m=$.mN()
l=$.mO()
k=$.mR()
j=$.mS()
i=$.mQ()
$.mP()
h=$.mU()
g=$.mT()
f=o.ar(s)
if(f!=null)return H.bL(a,H.kG(s,f))
else{f=n.ar(s)
if(f!=null){f.method="call"
return H.bL(a,H.kG(s,f))}else{f=m.ar(s)
if(f==null){f=l.ar(s)
if(f==null){f=k.ar(s)
if(f==null){f=j.ar(s)
if(f==null){f=i.ar(s)
if(f==null){f=l.ar(s)
if(f==null){f=h.ar(s)
if(f==null){f=g.ar(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bL(a,new H.d6(s,f==null?e:f.method))}}return H.bL(a,new H.fn(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dd()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bL(a,new P.aI(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dd()
return a},
l7:function(a){var s
if(a==null)return new H.h8(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.h8(a)},
pC:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
pJ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.f("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pJ)
a.$identity=s
return s},
ne:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iY().constructor.prototype):Object.create(new H.ct(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aK
if(typeof r!=="number")return r.Y()
$.aK=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lj(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.na(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lj(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
na:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mv,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
s=c?H.n8:H.n7
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.d("Error in functionType of tearoff")},
nb:function(a,b,c,d){var s=H.li
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lj:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nd(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nb(r,!p,s,b)
if(r===0){p=$.aK
if(typeof p!=="number")return p.Y()
$.aK=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cu
return new Function(p+(o==null?$.cu=H.hJ("self"):o)+";return "+n+"."+H.w(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aK
if(typeof p!=="number")return p.Y()
$.aK=p+1
m+=p
p="return function("+m+"){return this."
o=$.cu
return new Function(p+(o==null?$.cu=H.hJ("self"):o)+"."+H.w(s)+"("+m+");}")()},
nc:function(a,b,c,d){var s=H.li,r=H.n9
switch(b?-1:a){case 0:throw H.d(new H.eW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nd:function(a,b){var s,r,q,p,o,n,m,l=$.cu
if(l==null)l=$.cu=H.hJ("self")
s=$.lh
if(s==null)s=$.lh=H.hJ("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nc(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.w(r)+"(this."+s+");"
n=$.aK
if(typeof n!=="number")return n.Y()
$.aK=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.w(r)+"(this."+s+", "+m+");"
n=$.aK
if(typeof n!=="number")return n.Y()
$.aK=n+1
return new Function(o+n+"}")()},
l5:function(a,b,c,d,e,f,g){return H.ne(a,b,c,d,!!e,!!f,g)},
n7:function(a,b){return H.hk(v.typeUniverse,H.b2(a.a),b)},
n8:function(a,b){return H.hk(v.typeUniverse,H.b2(a.c),b)},
li:function(a){return a.a},
n9:function(a){return a.c},
hJ:function(a){var s,r,q,p=new H.ct("self","target","receiver","name"),o=J.kE(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.d(P.bN("Field name "+a+" not found."))},
pS:function(a){throw H.d(new P.eh(a))},
pE:function(a){return v.getIsolateTag(a)},
pT:function(a){return H.h(new H.cR(a))},
r_:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pL:function(a){var s,r,q,p,o,n=$.mu.$1(a),m=$.k5[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kf[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mr.$2(a,n)
if(q!=null){m=$.k5[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kf[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kn(s)
$.k5[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kf[n]=s
return s}if(p==="-"){o=H.kn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mz(a,s)
if(p==="*")throw H.d(P.jf(n))
if(v.leafTags[n]===true){o=H.kn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mz(a,s)},
mz:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.la(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kn:function(a){return J.la(a,!1,null,!!a.$iA)},
pN:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kn(s)
else return J.la(s,c,null,null)},
pH:function(){if(!0===$.l8)return
$.l8=!0
H.pI()},
pI:function(){var s,r,q,p,o,n,m,l
$.k5=Object.create(null)
$.kf=Object.create(null)
H.pG()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mA.$1(o)
if(n!=null){m=H.pN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pG:function(){var s,r,q,p,o,n,m=C.F()
m=H.co(C.G,H.co(C.H,H.co(C.u,H.co(C.u,H.co(C.I,H.co(C.J,H.co(C.K(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mu=new H.kb(p)
$.mr=new H.kc(o)
$.mA=new H.kd(n)},
co:function(a,b){return a(b)||b},
np:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.d(P.a6("Illegal RegExp pattern ("+String(n)+")",a,null))},
mD:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pB:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mB:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mE:function(a,b,c){var s=H.pR(a,b,c)
return s},
pR:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mB(b),'g'),H.pB(c))},
cz:function cz(){},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jb:function jb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d6:function d6(a,b){this.a=a
this.b=b},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
iJ:function iJ(a){this.a=a},
h8:function h8(a){this.a=a
this.b=null},
bQ:function bQ(){},
j1:function j1(){},
iY:function iY(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
T:function T(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ie:function ie(a){this.a=a},
ii:function ii(a,b){this.a=a
this.b=b
this.c=null},
cT:function cT(a,b){this.a=a
this.$ti=b},
ex:function ex(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
es:function es(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function(a){return a},
nw:function(a){return new Int8Array(a)},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cq(b,a))},
oG:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.d(H.pA(a,b,c))
return b},
d2:function d2(){},
a_:function a_(){},
c1:function c1(){},
bA:function bA(){},
d3:function d3(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
d4:function d4(){},
bB:function bB(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
lH:function(a,b){var s=b.c
return s==null?b.c=H.kV(a,b.z,!0):s},
lG:function(a,b){var s=b.c
return s==null?b.c=H.dQ(a,"lo",[b.z]):s},
lI:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lI(a.z)
return s===11||s===12},
nL:function(a){return a.cy},
l6:function(a){return H.kW(v.typeUniverse,a,!1)},
bm:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bm(a,s,a0,a1)
if(r===s)return b
return H.ma(a,r,!0)
case 7:s=b.z
r=H.bm(a,s,a0,a1)
if(r===s)return b
return H.kV(a,r,!0)
case 8:s=b.z
r=H.bm(a,s,a0,a1)
if(r===s)return b
return H.m9(a,r,!0)
case 9:q=b.Q
p=H.dZ(a,q,a0,a1)
if(p===q)return b
return H.dQ(a,b.z,p)
case 10:o=b.z
n=H.bm(a,o,a0,a1)
m=b.Q
l=H.dZ(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kT(a,n,l)
case 11:k=b.z
j=H.bm(a,k,a0,a1)
i=b.Q
h=H.pp(a,i,a0,a1)
if(j===k&&h===i)return b
return H.m8(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dZ(a,g,a0,a1)
o=b.z
n=H.bm(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kU(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.d(P.hB("Attempted to substitute unexpected RTI kind "+c))}},
dZ:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bm(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pq:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bm(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pp:function(a,b,c,d){var s,r=b.a,q=H.dZ(a,r,c,d),p=b.b,o=H.dZ(a,p,c,d),n=b.c,m=H.pq(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fL()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
px:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mv(s)
return a.$S()}return null},
mx:function(a,b){var s
if(H.lI(b))if(a instanceof H.bQ){s=H.px(a)
if(s!=null)return s}return H.b2(a)},
b2:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.l1(a)}if(Array.isArray(a))return H.hw(a)
return H.l1(J.e0(a))},
hw:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
P:function(a){var s=a.$ti
return s!=null?s:H.l1(a)},
l1:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.oO(a,s)},
oO:function(a,b){var s=a instanceof H.bQ?a.__proto__.__proto__.constructor:b,r=H.on(v.typeUniverse,s.name)
b.$ccache=r
return r},
mv:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kW(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oN:function(a){var s,r,q,p=this
if(p===t.K)return H.dW(p,a,H.oS)
if(!H.b3(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dW(p,a,H.oV)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hy
else if(r===t.gR||r===t.H)q=H.oR
else if(r===t.N)q=H.oT
else q=r===t.cJ?H.k0:null
if(q!=null)return H.dW(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.pK)){p.r="$i"+s
return H.dW(p,a,H.oU)}}else if(s===7)return H.dW(p,a,H.oL)
return H.dW(p,a,H.oJ)},
dW:function(a,b,c){a.b=c
return a.b(b)},
oM:function(a){var s,r=this,q=H.oI
if(!H.b3(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.oF
else if(r===t.K)q=H.oD
else{s=H.e1(r)
if(s)q=H.oK}r.a=q
return r.a(a)},
l4:function(a){var s,r=a.y
if(!H.b3(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.l4(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oJ:function(a){var s=this
if(a==null)return H.l4(s)
return H.O(v.typeUniverse,H.mx(a,s),null,s,null)},
oL:function(a){if(a==null)return!0
return this.z.b(a)},
oU:function(a){var s,r=this
if(a==null)return H.l4(r)
s=r.r
if(a instanceof P.N)return!!a[s]
return!!J.e0(a)[s]},
oI:function(a){var s,r=this
if(a==null){s=H.e1(r)
if(s)return a}else if(r.b(a))return a
H.ml(a,r)},
oK:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ml(a,s)},
ml:function(a,b){throw H.d(H.od(H.m3(a,H.mx(a,b),H.an(b,null))))},
m3:function(a,b,c){var s=P.i2(a),r=H.an(b==null?H.b2(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
od:function(a){return new H.dO("TypeError: "+a)},
a8:function(a,b){return new H.dO("TypeError: "+H.m3(a,null,b))},
oS:function(a){return a!=null},
oD:function(a){if(a!=null)return a
throw H.d(H.a8(a,"Object"))},
oV:function(a){return!0},
oF:function(a){return a},
k0:function(a){return!0===a||!1===a},
mj:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.a8(a,"bool"))},
qO:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.a8(a,"bool"))},
qN:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.a8(a,"bool?"))},
qP:function(a){if(typeof a=="number")return a
throw H.d(H.a8(a,"double"))},
qR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"double"))},
qQ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"double?"))},
hy:function(a){return typeof a=="number"&&Math.floor(a)===a},
hx:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.a8(a,"int"))},
qT:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.a8(a,"int"))},
qS:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.a8(a,"int?"))},
oR:function(a){return typeof a=="number"},
qU:function(a){if(typeof a=="number")return a
throw H.d(H.a8(a,"num"))},
qW:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"num"))},
qV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"num?"))},
oT:function(a){return typeof a=="string"},
oE:function(a){if(typeof a=="string")return a
throw H.d(H.a8(a,"String"))},
qY:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.a8(a,"String"))},
qX:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.a8(a,"String?"))},
pl:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.an(a[q],b)
return s},
mm:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.c(a5,j)
m=C.a.Y(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.an(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.an(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.an(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.an(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.an(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
an:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.an(a.z,b)
return s}if(l===7){r=a.z
s=H.an(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.an(a.z,b)+">"
if(l===9){p=H.pr(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pl(o,b)+">"):p}if(l===11)return H.mm(a,b,null)
if(l===12)return H.mm(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
pr:function(a){var s,r=H.mG(a)
if(r!=null)return r
s="minified:"+a
return s},
mb:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
on:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kW(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dR(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dQ(a,b,q)
n[b]=o
return o}else return m},
ol:function(a,b){return H.mi(a.tR,b)},
ok:function(a,b){return H.mi(a.eT,b)},
kW:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.m7(H.m5(a,null,b,c))
r.set(b,s)
return s},
hk:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.m7(H.m5(a,b,c,!0))
q.set(c,r)
return r},
om:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kT(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bl:function(a,b){b.a=H.oM
b.b=H.oN
return b},
dR:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.as(null,null)
s.y=b
s.cy=c
r=H.bl(a,s)
a.eC.set(c,r)
return r},
ma:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oi(a,b,r,c)
a.eC.set(r,s)
return s},
oi:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b3(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.as(null,null)
q.y=6
q.z=b
q.cy=c
return H.bl(a,q)},
kV:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oh(a,b,r,c)
a.eC.set(r,s)
return s},
oh:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b3(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.e1(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.e1(q.z))return q
else return H.lH(a,b)}}p=new H.as(null,null)
p.y=7
p.z=b
p.cy=c
return H.bl(a,p)},
m9:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.of(a,b,r,c)
a.eC.set(r,s)
return s},
of:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b3(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dQ(a,"lo",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.as(null,null)
q.y=8
q.z=b
q.cy=c
return H.bl(a,q)},
oj:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.as(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bl(a,s)
a.eC.set(q,r)
return r},
hj:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oe:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dQ:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.as(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bl(a,r)
a.eC.set(p,q)
return q},
kT:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bl(a,o)
a.eC.set(q,n)
return n},
m8:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hj(m)
if(j>0){s=l>0?",":""
r=H.hj(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oe(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bl(a,o)
a.eC.set(q,r)
return r},
kU:function(a,b,c,d){var s,r=b.cy+("<"+H.hj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.og(a,b,c,r,d)
a.eC.set(r,s)
return s},
og:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bm(a,b,r,0)
m=H.dZ(a,c,r,0)
return H.kU(a,n,m,c!==m)}}l=new H.as(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bl(a,l)},
m5:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
m7:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.o7(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.m6(a,r,h,g,!1)
else if(q===46)r=H.m6(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bk(a.u,a.e,g.pop()))
break
case 94:g.push(H.oj(a.u,g.pop()))
break
case 35:g.push(H.dR(a.u,5,"#"))
break
case 64:g.push(H.dR(a.u,2,"@"))
break
case 126:g.push(H.dR(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kS(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dQ(p,n,o))
else{m=H.bk(p,a.e,n)
switch(m.y){case 11:g.push(H.kU(p,m,o,a.n))
break
default:g.push(H.kT(p,m,o))
break}}break
case 38:H.o8(a,g)
break
case 42:p=a.u
g.push(H.ma(p,H.bk(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kV(p,H.bk(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.m9(p,H.bk(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fL()
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
H.kS(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.m8(p,H.bk(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kS(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oa(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bk(a.u,a.e,i)},
o7:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
m6:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mb(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.nL(o)+'"')
d.push(H.hk(s,o,n))}else d.push(p)
return m},
o8:function(a,b){var s=b.pop()
if(0===s){b.push(H.dR(a.u,1,"0&"))
return}if(1===s){b.push(H.dR(a.u,4,"1&"))
return}throw H.d(P.hB("Unexpected extended operation "+H.w(s)))},
bk:function(a,b,c){if(typeof c=="string")return H.dQ(a,c,a.sEA)
else if(typeof c=="number")return H.o9(a,b,c)
else return c},
kS:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bk(a,b,c[s])},
oa:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bk(a,b,c[s])},
o9:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.d(P.hB("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.d(P.hB("Bad index "+c+" for "+b.i(0)))},
O:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b3(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b3(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.O(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.O(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.O(a,b.z,c,d,e)
if(r===6)return H.O(a,b.z,c,d,e)
return r!==7}if(r===6)return H.O(a,b.z,c,d,e)
if(p===6){s=H.lH(a,d)
return H.O(a,b,c,s,e)}if(r===8){if(!H.O(a,b.z,c,d,e))return!1
return H.O(a,H.lG(a,b),c,d,e)}if(r===7){s=H.O(a,t.P,c,d,e)
return s&&H.O(a,b.z,c,d,e)}if(p===8){if(H.O(a,b,c,d.z,e))return!0
return H.O(a,b,c,H.lG(a,d),e)}if(p===7){s=H.O(a,b,c,t.P,e)
return s||H.O(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b8)return!0
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
if(!H.O(a,k,c,j,e)||!H.O(a,j,e,k,c))return!1}return H.mn(a,b.z,c,d.z,e)}if(p===11){if(b===t.O)return!0
if(s)return!1
return H.mn(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oQ(a,b,c,d,e)}return!1},
mn:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.O(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.O(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.O(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.O(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.O(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.O(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mb(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.O(a,H.hk(a,b,l[p]),c,r[p],e))return!1
return!0},
e1:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b3(a))if(r!==7)if(!(r===6&&H.e1(a.z)))s=r===8&&H.e1(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pK:function(a){var s
if(!H.b3(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b3:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mi:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
as:function as(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fL:function fL(){this.c=this.b=this.a=null},
fH:function fH(){},
dO:function dO(a){this.a=a},
mG:function(a){return v.mangledGlobalNames[a]},
pO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
la:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k7:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.l8==null){H.pH()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.d(P.jf("Return interceptor for "+H.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jE
if(o==null)o=$.jE=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.pL(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.y
if(s===Object.prototype)return C.y
if(typeof q=="function"){o=$.jE
if(o==null)o=$.jE=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
nm:function(a,b){if(a<0||a>4294967295)throw H.d(P.a5(a,0,4294967295,"length",null))
return J.nn(new Array(a),b)},
kD:function(a,b){if(a<0)throw H.d(P.bN("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.L("u<0>"))},
nn:function(a,b){return J.kE(H.b(a,b.L("u<0>")))},
kE:function(a){a.fixed$length=Array
return a},
no:function(a,b){return J.n2(a,b)},
e0:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.er.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.cQ.prototype
if(typeof a=="boolean")return J.eq.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.N)return a
return J.k7(a)},
cs:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.N)return a
return J.k7(a)},
k6:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.N)return a
return J.k7(a)},
pD:function(a){if(typeof a=="number")return J.bX.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.cb.prototype
return a},
bo:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.N)return a
return J.k7(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e0(a).n(a,b)},
lf:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.my(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cs(a).h(a,b)},
ks:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.my(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.k6(a).k(a,b,c)},
n0:function(a,b,c){return J.bo(a).hg(a,b,c)},
n1:function(a,b,c,d){return J.bo(a).hz(a,b,c,d)},
n2:function(a,b){return J.pD(a).am(a,b)},
kt:function(a,b){return J.k6(a).K(a,b)},
e5:function(a,b){return J.k6(a).F(a,b)},
n3:function(a){return J.bo(a).gbz(a)},
n4:function(a){return J.bo(a).gdz(a)},
ku:function(a){return J.e0(a).gD(a)},
aH:function(a){return J.k6(a).gS(a)},
b6:function(a){return J.cs(a).gj(a)},
n5:function(a,b){return J.bo(a).it(a,b)},
e6:function(a){return J.e0(a).i(a)},
a:function a(){},
eq:function eq(){},
cQ:function cQ(){},
bc:function bc(){},
eP:function eP(){},
cb:function cb(){},
aO:function aO(){},
u:function u(a){this.$ti=a},
id:function id(a){this.$ti=a},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bX:function bX(){},
cP:function cP(){},
er:function er(){},
bx:function bx(){}},P={
o0:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pt()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cp(new P.jA(q),1)).observe(s,{childList:true})
return new P.jz(q,s,r)}else if(self.setImmediate!=null)return P.pu()
return P.pv()},
o1:function(a){self.scheduleImmediate(H.cp(new P.jB(a),0))},
o2:function(a){self.setImmediate(H.cp(new P.jC(a),0))},
o3:function(a){P.kM(C.o,a)},
kM:function(a,b){var s=C.c.a2(a.a,1000)
return P.ob(s<0?0:s,b)},
lN:function(a,b){var s=C.c.a2(a.a,1000)
return P.oc(s<0?0:s,b)},
ob:function(a,b){var s=new P.dN()
s.eL(a,b)
return s},
oc:function(a,b){var s=new P.dN()
s.eM(a,b)
return s},
qL:function(a){return new P.cj(a,1)},
o4:function(){return C.a1},
o5:function(a){return new P.cj(a,3)},
oX:function(a,b){return new P.dK(a,b.L("dK<0>"))},
pi:function(){var s,r
for(s=$.cn;s!=null;s=$.cn){$.dY=null
r=s.b
$.cn=r
if(r==null)$.dX=null
s.a.$0()}},
po:function(){$.l2=!0
try{P.pi()}finally{$.dY=null
$.l2=!1
if($.cn!=null)$.le().$1(P.ms())}},
pm:function(a){var s=new P.fv(a),r=$.dX
if(r==null){$.cn=$.dX=s
if(!$.l2)$.le().$1(P.ms())}else $.dX=r.b=s},
pn:function(a){var s,r,q,p=$.cn
if(p==null){P.pm(a)
$.dY=$.dX
return}s=new P.fv(a)
r=$.dY
if(r==null){s.b=p
$.cn=$.dY=s}else{q=r.b
s.b=q
$.dY=r.b=s
if(q==null)$.dX=s}},
lM:function(a,b){var s=$.aF
if(s===C.f)return P.kM(a,b)
return P.kM(a,s.hH(b))},
nV:function(a,b){var s=$.aF
if(s===C.f)return P.lN(a,b)
return P.lN(a,s.dr(b,t.aF))},
mo:function(a,b,c,d,e){P.pn(new P.k3(d,e))},
pj:function(a,b,c,d){var s,r=$.aF
if(r===c)return d.$0()
$.aF=c
s=r
try{r=d.$0()
return r}finally{$.aF=s}},
pk:function(a,b,c,d,e){var s,r=$.aF
if(r===c)return d.$1(e)
$.aF=c
s=r
try{r=d.$1(e)
return r}finally{$.aF=s}},
jA:function jA(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
dN:function dN(){this.c=0},
jP:function jP(a,b){this.a=a
this.b=b},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b){this.a=a
this.b=b},
ck:function ck(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dK:function dK(a,b){this.a=a
this.$ti=b},
fv:function fv(a){this.a=a
this.b=null},
c7:function c7(){},
f4:function f4(){},
jU:function jU(){},
k3:function k3(a,b){this.a=a
this.b=b},
jH:function jH(){},
jI:function jI(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
nq:function(a,b){return new H.T(a.L("@<0>").ba(b).L("T<1,2>"))},
nr:function(a,b,c){return H.pC(a,new H.T(b.L("@<0>").ba(c).L("T<1,2>")))},
R:function(a,b){return new H.T(a.L("@<0>").ba(b).L("T<1,2>"))},
lt:function(a){return new P.dz(a.L("dz<0>"))},
kR:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
o6:function(a,b){var s=new P.dA(a,b)
s.c=a.e
return s},
nl:function(a,b,c){var s,r
if(P.l3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ah.push(a)
try{P.oW(a,s)}finally{if(0>=$.ah.length)return H.c($.ah,-1)
$.ah.pop()}r=P.lJ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kC:function(a,b,c){var s,r
if(P.l3(a))return b+"..."+c
s=new P.Z(b)
$.ah.push(a)
try{r=s
r.a=P.lJ(r.a,a,", ")}finally{if(0>=$.ah.length)return H.c($.ah,-1)
$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
l3:function(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
oW:function(a,b){var s,r,q,p,o,n,m,l=a.gS(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.w(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.t()){if(j<=4){b.push(H.w(p))
return}r=H.w(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.t();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.w(p)
r=H.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ns:function(a,b,c){var s=P.nq(b,c)
a.F(0,new P.ij(s,b,c))
return s},
kI:function(a){var s,r={}
if(P.l3(a))return"{...}"
s=new P.Z("")
try{$.ah.push(a)
s.a+="{"
r.a=!0
J.e5(a,new P.io(r,s))
s.a+="}"}finally{if(0>=$.ah.length)return H.c($.ah,-1)
$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dz:function dz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jG:function jG(a){this.a=a
this.c=this.b=null},
dA:function dA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cO:function cO(){},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(){},
i:function i(){},
cW:function cW(){},
io:function io(a,b){this.a=a
this.b=b},
M:function M(){},
hl:function hl(){},
cX:function cX(){},
cd:function cd(a,b){this.a=a
this.$ti=b},
db:function db(){},
dH:function dH(){},
dB:function dB(){},
dS:function dS(){},
dU:function dU(){},
nY:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nZ(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nZ:function(a,b,c,d){var s=a?$.mW():$.mV()
if(s==null)return null
if(0===c&&d===b.length)return P.lS(s,b)
return P.lS(s,b.subarray(c,P.be(c,d,b.length)))},
lS:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.bp(r)}return null},
lg:function(a,b,c,d,e,f){if(C.c.aC(f,4)!==0)throw H.d(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
oC:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oB:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cs(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jp:function jp(){},
jo:function jo(){},
hG:function hG(){},
hH:function hH(){},
ee:function ee(){},
eg:function eg(){},
i_:function i_(){},
jm:function jm(){},
jq:function jq(){},
jT:function jT(a){this.b=0
this.c=a},
jn:function jn(a){this.a=a},
jS:function jS(a){this.a=a
this.b=16
this.c=0},
ke:function(a,b){var s=H.lB(a,b)
if(s!=null)return s
throw H.d(P.a6(a,null,null))},
nj:function(a){if(a instanceof H.bQ)return a.i(0)
return"Instance of '"+H.d8(a)+"'"},
ey:function(a,b,c,d){var s,r=c?J.kD(a,d):J.nm(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ik:function(a,b,c){var s,r=H.b([],c.L("u<0>"))
for(s=J.aH(a);s.t();)r.push(s.gC(s))
if(b)return r
return J.kE(r)},
nt:function(a,b,c){var s,r,q=J.kD(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
f6:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.be(b,c,r)
return H.lC(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.nI(a,b,P.be(b,c,a.length))
return P.nR(a,b,c)},
nR:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.d(P.a5(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.d(P.a5(c,b,a.length,o,o))
r=J.aH(a)
for(q=0;q<b;++q)if(!r.t())throw H.d(P.a5(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gC(r))
else for(q=b;q<c;++q){if(!r.t())throw H.d(P.a5(c,b,q,o,o))
p.push(r.gC(r))}return H.lC(p)},
nJ:function(a){return new H.es(a,H.np(a,!1,!0,!1,!1,!1))},
lJ:function(a,b,c){var s=J.aH(b)
if(!s.t())return a
if(c.length===0){do a+=H.w(s.gC(s))
while(s.t())}else{a+=H.w(s.gC(s))
for(;s.t();)a=a+c+H.w(s.gC(s))}return a},
kO:function(){var s=H.nz()
if(s!=null)return P.nX(s)
throw H.d(P.B("'Uri.base' is not supported"))},
l0:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mZ().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghU().cl(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aX(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
ng:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ei:function(a){if(a>=10)return""+a
return"0"+a},
lm:function(a){return new P.bt(1000*a)},
i2:function(a){if(typeof a=="number"||H.k0(a)||null==a)return J.e6(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nj(a)},
hB:function(a){return new P.ea(a)},
bN:function(a){return new P.aI(!1,null,null,a)},
eT:function(a,b){return new P.d9(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.d9(b,c,!0,a,d,"Invalid value")},
be:function(a,b,c){if(0>a||a>c)throw H.d(P.a5(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.a5(b,a,c,"end",null))
return b}return c},
lD:function(a,b){if(a<0)throw H.d(P.a5(a,0,null,b,null))
return a},
K:function(a,b,c,d,e){var s=e==null?J.b6(b):e
return new P.eo(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fp(a)},
jf:function(a){return new P.fm(a)},
b9:function(a){return new P.ef(a)},
f:function(a){return new P.fI(a)},
a6:function(a,b,c){return new P.i8(a,b,c)},
lb:function(a){H.pO(a)},
nX:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.I(a5,4)^58)*3|C.a.I(a5,0)^100|C.a.I(a5,1)^97|C.a.I(a5,2)^116|C.a.I(a5,3)^97)>>>0
if(s===0)return P.lP(a4<a4?C.a.q(a5,0,a4):a5,5,a3).gep()
else if(s===32)return P.lP(C.a.q(a5,5,a4),0,a3).gep()}r=P.ey(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mp(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mp(a5,0,q,20,r)===20)r[7]=q
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
a5=C.a.b4(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ag(a5,"http",0)){if(i&&o+3===n&&C.a.ag(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ag(a5,"https",0)){if(i&&o+4===n&&C.a.ag(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.q(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.h2(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.ov(a5,0,q)
else{if(q===0)P.cl(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.ow(a5,d,p-1):""
b=P.os(a5,p,o,!1)
i=o+1
if(i<n){a=H.lB(C.a.q(a5,i,n),a3)
a0=P.ou(a==null?H.h(P.a6("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.ot(a5,n,m,a3,j,b!=null)
a2=m<l?P.kY(a5,m+1,l,a3):a3
return new P.bK(j,c,b,a0,a1,a2,l<a4?P.or(a5,l+1,a4):a3)},
lR:function(a){var s=t.N
return C.b.hZ(H.b(a.split("&"),t.s),P.R(s,s),new P.jk(C.e))},
nW:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jh(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.X(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.ke(C.a.q(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.c(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.ke(C.a.q(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.c(j,q)
j[q]=o
return j},
lQ:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.ji(a),c=new P.jj(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.X(a,r)
if(n===58){if(r===b){++r
if(C.a.X(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaN(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.nW(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.c(j,h)
j[h]=0
e=h+1
if(e>=16)return H.c(j,e)
j[e]=0
h+=2}else{e=C.c.aW(g,8)
if(h<0||h>=16)return H.c(j,h)
j[h]=e
e=h+1
if(e>=16)return H.c(j,e)
j[e]=g&255
h+=2}}return j},
mc:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cl:function(a,b,c){throw H.d(P.a6(c,a,b))},
ou:function(a,b){if(a!=null&&a===P.mc(b))return null
return a},
os:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.X(a,b)===91){s=c-1
if(C.a.X(a,s)!==93)P.cl(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.op(a,r,s)
if(q<s){p=q+1
o=P.mh(a,C.a.ag(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lQ(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.X(a,n)===58){q=C.a.bB(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mh(a,C.a.ag(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lQ(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.oy(a,b,c)},
op:function(a,b,c){var s=C.a.bB(a,"%",b)
return s>=b&&s<c?s:c},
mh:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.Z(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.X(a,s)
if(p===37){o=P.kZ(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.Z("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.cl(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.Z("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.X(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.Z("")
n=i}else n=i
n.a+=j
n.a+=P.kX(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oy:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.X(a,s)
if(o===37){n=P.kZ(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.Z("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.v,m)
m=(C.v[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.Z("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cl(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.X(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.Z("")
m=q}else m=q
m.a+=l
m.a+=P.kX(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
ov:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.me(C.a.I(a,b)))P.cl(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.I(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cl(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.oo(r?a.toLowerCase():a)},
oo:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ow:function(a,b,c){return P.dT(a,b,c,C.U,!1)},
ot:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dT(a,b,c,C.w,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.af(s,"/"))s="/"+s
return P.ox(s,e,f)},
ox:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.af(a,"/"))return P.oz(a,!s||c)
return P.oA(a)},
kY:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.d(P.bN("Both query and queryParameters specified"))
return P.dT(a,b,c,C.l,!0)}if(d==null)return null
s=new P.Z("")
r.a=""
d.F(0,new P.jQ(new P.jR(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
or:function(a,b,c){return P.dT(a,b,c,C.l,!0)},
kZ:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.X(a,b+1)
r=C.a.X(a,n)
q=H.ka(s)
p=H.ka(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aW(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aX(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
kX:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.I(k,a>>>4)
s[2]=C.a.I(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hp(a,6*q)&63|r
if(o>=p)return H.c(s,o)
s[o]=37
m=o+1
l=C.a.I(k,n>>>4)
if(m>=p)return H.c(s,m)
s[m]=l
l=o+2
m=C.a.I(k,n&15)
if(l>=p)return H.c(s,l)
s[l]=m
o+=3}}return P.f6(s,0,null)},
dT:function(a,b,c,d,e){var s=P.mg(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
mg:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.X(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kZ(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cl(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.X(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.kX(o)}}if(p==null){p=new P.Z("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.w(m)
if(typeof l!=="number")return H.mw(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mf:function(a){if(C.a.af(a,"."))return!0
return C.a.dY(a,"/.")!==-1},
oA:function(a){var s,r,q,p,o,n,m
if(!P.mf(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.H(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.p(s,"/")},
oz:function(a,b){var s,r,q,p,o,n
if(!P.mf(a))return!b?P.md(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaN(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaN(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.md(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.p(s,"/")},
md:function(a){var s,r,q,p=a.length
if(p>=2&&P.me(C.a.I(a,0)))for(s=1;s<p;++s){r=C.a.I(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.al(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oq:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.I(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.d(P.bN("Invalid URL encoding"))}}return s},
l_:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.I(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.Q(C.a.q(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.I(a,o)
if(r>127)throw H.d(P.bN("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.d(P.bN("Truncated URI"))
p.push(P.oq(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a0.cl(p)},
me:function(a){var s=a|32
return 97<=s&&s<=122},
lP:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.I(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.d(P.a6(k,a,r))}}if(q<0&&r>b)throw H.d(P.a6(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.I(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaN(j)
if(p!==44||r!==n+7||!C.a.ag(a,"base64",n+1))throw H.d(P.a6("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.E.i7(0,a,m,s)
else{l=P.mg(a,m,s,C.l,!0)
if(l!=null)a=C.a.b4(a,m,s,l)}return new P.jg(a,j,c)},
oH:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jY(h)
q=new P.jZ()
p=new P.k_()
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
mp:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.n_()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.c(m,d)
q=m[d]
p=C.a.I(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.c(e,n)
e[n]=r}return d},
X:function X(a,b){this.a=a
this.b=b},
bt:function bt(a){this.a=a},
hX:function hX(){},
hY:function hY(){},
I:function I(){},
ea:function ea(a){this.a=a},
fg:function fg(){},
eK:function eK(){},
aI:function aI(a,b,c,d){var _=this
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
eo:function eo(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fp:function fp(a){this.a=a},
fm:function fm(a){this.a=a},
f2:function f2(a){this.a=a},
ef:function ef(a){this.a=a},
eN:function eN(){},
dd:function dd(){},
eh:function eh(a){this.a=a},
fI:function fI(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
ep:function ep(){},
af:function af(){},
N:function N(){},
Z:function Z(a){this.a=a},
jk:function jk(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a,b){this.a=a
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
jR:function jR(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a){this.a=a},
jZ:function jZ(){},
k_:function k_(){},
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
fB:function fB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
pz:function(a){var s,r,q,p
if(t.x.b(a)){s=J.n4(a)
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
return new P.dP(r,q,p)},
py:function(a){if(a instanceof P.dP)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var s,r,q,p,o
if(a==null)return null
s=P.R(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
mk:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.k0(a))return a
if(t.f.b(a))return P.mt(a)
if(t.r.b(a)){s=[]
J.e5(a,new P.jW(s))
a=s}return a},
mt:function(a){var s={}
J.e5(a,new P.k4(s))
return s},
jK:function jK(){},
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a){this.a=a},
k4:function k4(a){this.a=a},
jL:function jL(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
i6:function i6(){},
i7:function i7(){},
h0:function h0(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aP:function aP(){},
ev:function ev(){},
aU:function aU(){},
eL:function eL(){},
iK:function iK(){},
f5:function f5(){},
n:function n(){},
aY:function aY(){},
ff:function ff(){},
fP:function fP(){},
fQ:function fQ(){},
fX:function fX(){},
fY:function fY(){},
ha:function ha(){},
hb:function hb(){},
hh:function hh(){},
hi:function hi(){},
hD:function hD(){},
ec:function ec(){},
hE:function hE(a){this.a=a},
ed:function ed(){},
b8:function b8(){},
eM:function eM(){},
fw:function fw(){},
c5:function c5(){},
f0:function f0(){},
h6:function h6(){},
h7:function h7(){}},W={
kw:function(){var s=document.createElement("canvas")
s.toString
return s},
hZ:function(a){return"wheel"},
nk:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.bp(s)}return q},
jF:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
m4:function(a,b,c,d){var s=W.jF(W.jF(W.jF(W.jF(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a3:function(a,b,c,d){var s=new W.dy(a,b,c==null?null:W.mq(new W.jD(c),t.aD),!1)
s.hw()
return s},
mq:function(a,b){var s=$.aF
if(s===C.f)return a
return s.dr(a,b)},
o:function o(){},
hA:function hA(){},
e8:function e8(){},
e9:function e9(){},
br:function br(){},
bs:function bs(){},
cw:function cw(){},
ay:function ay(){},
hQ:function hQ(){},
F:function F(){},
cC:function cC(){},
hR:function hR(){},
ap:function ap(){},
aL:function aL(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
cE:function cE(){},
cF:function cF(){},
ek:function ek(){},
hW:function hW(){},
fy:function fy(a,b){this.a=a
this.b=b},
D:function D(){},
l:function l(){},
e:function e(){},
aj:function aj(){},
bS:function bS(){},
el:function el(){},
en:function en(){},
az:function az(){},
ib:function ib(){},
bv:function bv(){},
bw:function bw(){},
bU:function bU(){},
bW:function bW(){},
by:function by(){},
il:function il(){},
iE:function iE(){},
bZ:function bZ(){},
eC:function eC(){},
iF:function iF(a){this.a=a},
eD:function eD(){},
iG:function iG(a){this.a=a},
aA:function aA(){},
eE:function eE(){},
ak:function ak(){},
fx:function fx(a){this.a=a},
v:function v(){},
d5:function d5(){},
aB:function aB(){},
eQ:function eQ(){},
eV:function eV(){},
iR:function iR(a){this.a=a},
eX:function eX(){},
at:function at(){},
eZ:function eZ(){},
aC:function aC(){},
f_:function f_(){},
aD:function aD(){},
f3:function f3(){},
iZ:function iZ(a){this.a=a},
am:function am(){},
bh:function bh(){},
au:function au(){},
ag:function ag(){},
f7:function f7(){},
f8:function f8(){},
j6:function j6(){},
av:function av(){},
bD:function bD(){},
fe:function fe(){},
ja:function ja(){},
b_:function b_(){},
jl:function jl(){},
fs:function fs(){},
bj:function bj(){},
ci:function ci(){},
fz:function fz(){},
dx:function dx(){},
fM:function fM(){},
dC:function dC(){},
h5:function h5(){},
hc:function hc(){},
kA:function kA(a,b){this.a=a
this.$ti=b},
dy:function dy(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jD:function jD(a){this.a=a},
kQ:function kQ(a){this.$ti=a},
J:function J(){},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fA:function fA(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
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
dI:function dI(){},
dJ:function dJ(){},
h3:function h3(){},
h4:function h4(){},
h9:function h9(){},
hd:function hd(){},
he:function he(){},
dL:function dL(){},
dM:function dM(){},
hf:function hf(){},
hg:function hg(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){}},K={e7:function e7(){},cN:function cN(){},aT:function aT(a){this.a=a},Y:function Y(a){this.a=a},
pM:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="controls",b3="modifiers",b4={},b5=V.nM("Test 040"),b6=W.kw()
b6.className="pageLargeCanvas"
b6.id=b0
b5.a.appendChild(b6).toString
s=t.s
b5.dn(H.b(["A combination of bump mapping with height map and specular map."],s))
b5.hy(H.b(["controls"],s))
b5.dn(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b0)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.nU(r,!0,!0,!0,!1)
b5=q.f
p=b5.bF("../resources/gravel/colorLarge.png")
o=b5.bF("../resources/gravel/bumpLarge.png")
n=b5.bF("../resources/gravel/specularSmall.png")
m=b5.bF("../resources/gravel/heightSmall.png")
b5=U.ll(V.ly(0,0,2))
l=new U.da(V.ad())
l.seu(0)
l.seh(0,0)
l.sel(0)
k=l.d
$.z().toString
if(!(Math.abs(k-0.6)<1e-9)){l.d=0.6
l.N(new D.t("deltaYaw",k,0.6))}k=l.e
$.z().toString
if(!(Math.abs(k-0.1)<1e-9)){l.e=0.1
l.N(new D.t("deltaPitch",k,0.1))}k=l.f
$.z().toString
if(!(Math.abs(k-0)<1e-9)){l.f=0
l.N(new D.t("deltaRoll",k,0))}k=t.M
j=U.lq(H.b([b5,l],k))
i=E.kz(F.pQ(0.03))
i.sbl(j)
l=O.lu()
b5=l.gdE()
b5.sb_(0,new V.W(1,1,1))
i.sau(l)
h=new V.W(1,1,1)
g=new D.c3(V.ad(),new V.W(1,1,1))
f=g.b
g.b=j
j.gm().l(0,g.geH())
g.aj(new D.t("mover",f,g.b))
if(!g.c.n(0,h)){f=g.c
g.c=h
g.aj(new D.t("color",f,h))}e=$.lZ
if(e==null){e=new V.bJ(1,0.00390625,0.0000152587890625,0)
$.lZ=e}if(!J.H(g.f,e)){f=g.f
g.f=e
g.aj(new D.t("shadowAdjust",f,e))}b5=g.r
$.z().toString
if(!(Math.abs(b5-0.5)<1e-9)){g.r=0.5
g.aj(new D.t("attenuation0",b5,0.5))}b5=g.x
$.z().toString
if(!(Math.abs(b5-0.1)<1e-9)){g.x=0.1
g.aj(new D.t("attenuation1",b5,0.1))}b5=g.y
$.z().toString
if(!(Math.abs(b5-0)<1e-9)){g.y=0
g.aj(new D.t("attenuation2",b5,0))}d=F.mC()
c=E.kz(d)
b4.a=null
m.gm().l(0,new K.kg(b4,q,m))
b=X.lz()
b5=q.x
l=U.lk()
a=U.lk()
a0=$.bI
if(a0==null)a0=$.bI=new V.a2(0,0)
a0=new U.ds(l,a,new X.ae(!1,!1,!1),a0,V.ad())
l.ses(0,!0)
l.se5(6.283185307179586)
l.se7(0)
l.sac(0,0)
l.se6(100)
l.sae(0)
l.sdw(0.5)
a1=a0.gbt()
l.gm().l(0,a1)
a.ses(0,!0)
a.se5(6.283185307179586)
a.se7(0)
a.sac(0,0)
a.se6(100)
a.sae(0)
a.sdw(0.5)
a.gm().l(0,a1)
l=new X.ae(!1,!1,!1)
if(!a0.d.n(0,l)){f=a0.d
a0.d=l
a0.N(new D.t(b3,f,l))}a0.cc(b5)
l=new X.ae(!1,!1,!1)
a=new U.dt(l,V.ad())
a1=new X.ae(!1,!1,!1)
if(!l.n(0,a1)){a.b=a1
a.N(new D.t(b3,l,a1))}a.cc(b5)
b.sbl(U.lq(H.b([a0,a,U.ll(V.ly(0,0,5))],k)))
a2=O.lu()
a2.ge3().l(0,g)
b5=a2.gcb()
b5.sb_(0,new V.W(0.3,0.3,0.3))
a2.gcn().sb_(0,new V.W(1,1,1))
b5=a2.gbQ()
b5.bu(new A.ai(!0,b5.c.b,!1))
b5.df(40)
a3=X.kv(!0,1,1,!0)
b5=t.hh
a4=M.ln(H.b([c,i],b5))
a4.sau(a2)
a4.scj(b)
a4.saO(0,a3)
a5=X.kv(!0,0.5,0.5,!0)
a6=M.ln(H.b([c,i],b5))
a6.scj(b)
a6.saO(0,a5)
b5=new O.ej()
$.z().toString
if(!(Math.abs(0.5)<1e-9)){b5.b=0.5
b5.E(new D.t("start",1,0.5))}l=b5.c
$.z().toString
if(!(Math.abs(l-5.5)<1e-9)){b5.c=5.5
b5.E(new D.t("stop",l,5.5))}a6.sau(b5)
b5=new V.bJ(-1,0,0,1)
l=a3.ch
k=a5.ch
a=X.kv(!0,1,1,!1)
a7=new M.cK(a)
a0=O.lp(b1,b1)
a1=a7.gV()
a0.gm().l(0,a1)
a7.d=a0
a7.e=M.ky(a,a0)
a0=$.lT
if(a0==null)a0=$.lT=new V.a2(0,1)
a=O.lp(a0,a.ch)
a.gm().l(0,a1)
a7.f=a
a7.r=M.ky(b1,a)
a=a7.d
if(a!=null)a.sce(0)
a=a7.f
if(a!=null)a.sce(0)
a=a7.d
if(a!=null)a.sdv(l)
a7.saY(k)
a=a7.d
if(a!=null)a.scd(b5)
a=a7.f
if(a!=null)a.scd(b5)
b5=a7.r
if(b5!=null)b5.saO(0,b1)
b5=O.hN(t.gb)
a8=new O.de(new V.ao(0,0,0,0),b5,C.n,C.n)
b5.aP(a8.gfC(),a8.gfE())
a=a8.e
if(a!==C.i){a8.e=C.i
a8.E(new D.t("blend",a,C.i))}b5.l(0,O.lK(V.iL(0,0.8,0.2,0.2),k))
b5.l(0,O.lK(V.iL(0,0.6,0.2,0.2),l))
a9=M.ky(b1,b1)
a9.saO(0,X.kB(!1,b1))
a9.sau(a8)
b5=t.ba
l=H.b([a4,a6,a7,a9],b5)
b5=new M.cx(H.b([],b5))
b5.aP(b5.gh3(),b5.gh5())
b5.aX(0,l)
l=q.d
if(l!==b5){if(l!=null)l.gm().B(0,q.gcS())
q.d=b5
b5.gm().l(0,q.gcS())
q.cT()}r=s.getElementById(b2)
if(r==null)H.h(P.f("Failed to find controls for CheckGroup"))
b5=new V.hL(b2,!0,r,H.b([],t.dh))
b5.dm(0,"Color",new K.kh(a2,p),!0)
b5.be(0,"Specular",new K.ki(a2,n))
b5.be(0,"Bump",new K.kj(a2,o))
b5.be(0,"Height",new K.kk(b4,c,d))
b5.be(0,"Blur",new K.kl(a7,a5))
b5.be(0,"Passes",new K.km(a9,a8))
V.pP(q)},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a,b){this.a=a
this.b=b},
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b}},L={f1:function f1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},fd:function fd(a,b){this.b=a
this.c=b},j8:function j8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},dh:function dh(a,b){this.b=a
this.c=!1
this.a=b}},O={
hN:function(a){return new O.ab(H.b([],a.L("u<0>")),a.L("ab<0>"))},
ab:function ab(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d1:function d1(a){this.a=a
this.b=null},
lp:function(a,b){var s,r=V.kJ(),q=V.m0(),p=$.bI
r=new O.cM(r,q,p==null?$.bI=new V.a2(0,0):p)
q=V.kJ()
r.siz(q)
q=V.m0()
r.scd(q)
if(a==null){q=$.bI
if(q==null){q=new V.a2(0,0)
$.bI=q}}else q=a
if(!r.d.n(0,q)){s=r.d
r.d=q
r.E(new D.t("blurDirection",s,q))}r.sdv(b)
r.saY(null)
r.sce(0)
return r},
lu:function(){var s=O.hN(t.gc),r=new O.cZ(s)
s.aP(r.gfj(),r.gfl())
s=r.ge3()
s.gm().l(0,r.gd9())
s.ge2().l(0,r.ga9())
return r},
eA:function(a,b){return new O.d0(new V.W(0,0,0),a,b,new A.ai(!1,!1,!1))},
lK:function(a,b){var s=V.ad(),r=V.iM()
return new O.c9(b,s,r,a)},
ej:function ej(){var _=this
_.a=null
_.b=1
_.c=10
_.f=_.e=_.d=!1
_.r=null},
cM:function cM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.f=_.e=null
_.r=0
_.x=null},
cZ:function cZ(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){},
ip:function ip(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d_:function d_(){},
iq:function iq(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d0:function d0(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
is:function is(a){this.b=a},
it:function it(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iu:function iu(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
bi:function bi(){},
de:function de(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=null},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=null}},E={
kz:function(a){var s=O.hN(t.l),r=new E.bb(s)
s.aP(r.gi8(),r.gib())
r.sbP(0,a)
r.sau(null)
r.sbl(null)
return r},
m1:function(){var s=window.navigator.vendor
s.toString
if(C.a.P(s,"Google"))return C.C
s=window.navigator.userAgent
s.toString
if(C.a.P(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.P(s,"Trident")||C.a.P(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.P(s,"Microsoft"))return C.r
return C.D},
m2:function(){var s=window.navigator.appVersion
s.toString
if(C.a.P(s,"Win"))return C.Y
if(C.a.P(s,"Mac"))return C.x
if(C.a.P(s,"Linux"))return C.Z
return C.a_},
nK:function(a,b){var s
Date.now()
s=t.fA
s=new E.iN(a,new P.X(Date.now(),!1),new P.X(Date.now(),!1),new O.d1(H.b([],s)),new O.d1(H.b([],s)),new O.d1(H.b([],s)),H.b([null],t.bc),P.R(t.N,t.fg))
s.eF(a,b)
return s},
nU:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.lL(a,!0,!0,!0,!1)
s=W.kw()
r=s.style
r.width="100%"
r.height="100%"
J.n3(a).l(0,s)
return E.lL(s,!0,!0,!0,!1)},
lL:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.gW.a(C.j.cK(a,"webgl2",P.nr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.d(P.f("Failed to get the rendering context for WebGL."))
s=E.nK(l,a)
m=H.hx(l.getParameter(3379))
H.hx(l.getParameter(34076))
r=H.b([],t.g9)
q=$.i0
p=new X.fr(a,r,(q==null?$.i0=new E.fG(E.m1(),E.m2()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a3(o,"contextmenu",p.gfu(),!1))
r.push(W.a3(a,"focus",p.gfG(),!1))
r.push(W.a3(a,"blur",p.gfn(),!1))
r.push(W.a3(o,"keyup",p.gfK(),!1))
r.push(W.a3(o,"keydown",p.gfI(),!1))
r.push(W.a3(a,"mousedown",p.gfO(),!1))
r.push(W.a3(a,"mouseup",p.gfS(),!1))
r.push(W.a3(a,n,p.gfQ(),!1))
W.hZ(a)
W.hZ(a)
r.push(W.a3(a,W.hZ(a),p.gfU(),!1))
r.push(W.a3(o,n,p.gfw(),!1))
r.push(W.a3(o,"mouseup",p.gfA(),!1))
r.push(W.a3(o,"pointerlockchange",p.gfW(),!1))
r.push(W.a3(a,"touchstart",p.ghb(),!1))
r.push(W.a3(a,"touchend",p.gh7(),!1))
r.push(W.a3(a,"touchmove",p.gh9(),!1))
m=new E.fb(a,s,new T.j2(l,m),p,new P.X(Date.now(),!1))
m.dc()
return m},
hI:function hI(){},
bb:function bb(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bO:function bO(a){this.b=a},
c2:function c2(a){this.b=a},
fG:function fG(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c,d,e,f,g,h){var _=this
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
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
fb:function fb(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
j5:function j5(a){this.a=a}},Z={
kP:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cm(c)),35044)
a.bindBuffer(b,null)
return new Z.ft(b,s)},
aw:function(a){return new Z.aE(a)},
ft:function ft(a,b){this.a=a
this.b=b},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ch:function ch(a){this.a=a},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a}},D={
C:function(){return new D.bu()},
hK:function hK(){},
bu:function bu(){var _=this
_.c=_.b=_.a=null
_.d=0},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
S:function S(){},
aM:function aM(){},
aN:function aN(){},
t:function t(a,b,c){this.c=a
this.d=b
this.e=c},
cS:function cS(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null},
c3:function c3(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.f=_.e=_.d=null
_.r=1
_.y=_.x=0
_.z=!0
_.Q=null}},X={cv:function cv(a,b){this.a=a
this.b=b},eu:function eu(a,b){this.a=a
this.b=b},ig:function ig(a,b){this.c=a
this.d=b},cV:function cV(a,b,c){this.x=a
this.c=b
this.d=c},im:function im(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},c_:function c_(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},iH:function iH(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c0:function c0(a,b,c){this.x=a
this.c=b
this.d=c},eS:function eS(){},dg:function dg(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},j9:function j9(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fr:function fr(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
kv:function(a,b,c,d){var s,r,q,p,o=T.kL(null)
o=new X.hF(o,new V.ao(0,0,0,1),V.iM())
o.sav(0,512)
o.sao(0,512)
s=new V.ao(0,0,0,1)
if(!o.cx.n(0,s)){r=o.cx
o.cx=s
o.a1(new D.t("color",r,s))}if(o.cy!==d){o.cy=d
o.a1(new D.t("clearColor",!d,d))}q=o.db
$.z().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
o.a1(new D.t("depth",q,2000))}if(!o.f){o.f=!0
o.a1(new D.t("autoResize",!1,!0))}q=o.r
$.z().toString
if(!(Math.abs(q-b)<1e-9)){o.r=b
o.a1(new D.t("autoResizeScalarX",q,b))}q=o.x
$.z().toString
if(!(Math.abs(q-c)<1e-9)){o.x=c
o.a1(new D.t("autoResizeScalarY",q,c))}p=V.iM()
if(!o.dy.n(0,p)){r=o.dy
o.dy=p
o.a1(new D.t("region",r,p))}return o},
kB:function(a,b){var s=new V.ao(0,0,0,1),r=V.iM()
return new X.i9(s,a,r)},
lz:function(){var s,r=new X.eO(1.0471975511965976,0.1)
r.sbl(null)
s=r.c
$.z().toString
if(!(Math.abs(s-1.0471975511965976)<1e-9)){r.c=1.0471975511965976
r.a1(new D.t("fov",s,1.0471975511965976))}s=r.d
$.z().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
r.a1(new D.t("near",s,0.1))}s=r.e
$.z().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
r.a1(new D.t("far",s,2000))}return r},
hF:function hF(a,b,c){var _=this
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
i9:function i9(a,b,c){var _=this
_.a=a
_.b=b
_.r=c
_.x=null},
ic:function ic(){this.b=null},
eO:function eO(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
j0:function j0(){}},V={
hO:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.ao(s,r,q,p)},
l9:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
kr:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.aC(a-b,s)
return(a<0?a+s:a)+b},
x:function(a,b,c){$.z().toString
return C.a.at(C.d.cJ(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cr:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.z().toString
n=C.a.at(C.d.cJ(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.c(l,m)
s=C.a.at(l[m],q)
r=l.length
if(m>=r)return H.c(l,m)
l[m]=s}return l},
e2:function(a){return C.d.iA(Math.pow(2,C.d.bh(Math.log(a)/Math.log(2))))},
kJ:function(){var s=$.lv
return s==null?$.lv=new V.eB(1,0,0,0,1,0,0,0,1):s},
ad:function(){var s=$.iD
return s==null?$.iD=V.aS(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aS:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ly:function(a,b,c){return V.aS(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lw:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aS(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lx:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aS(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
nx:function(){var s=$.aV
return s==null?$.aV=new V.V(0,0,0):s},
iM:function(){var s=$.lF
return s==null?$.lF=V.iL(0,0,1,1):s},
iL:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eU(a,b,c,d)},
du:function(){var s=$.lY
return s==null?$.lY=new V.E(0,0,0):s},
lU:function(a,b,c){return new V.E(a,b,c)},
o_:function(a){return new V.E(a.a,a.b,a.c)},
m0:function(){var s=$.m_
return s==null?$.m_=new V.bJ(0,0,0,0):s},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(){},
eB:function eB(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pP:function(a){P.nV(C.P,new V.ko(a))},
nM:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.d(P.f("The html document body was null."))
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
W.a3(n,"scroll",new V.iW(s),!1)
return new V.iU(o)},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a){this.a=a},
iU:function iU(a){this.a=a
this.b=null},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a}},U={
lk:function(){return new U.hP()},
ll:function(a){var s=V.ad(),r=new U.cy(s)
if(!s.n(0,a))r.a=a
return r},
lq:function(a){var s=new U.bT(V.ad(),H.b([],t.M))
s.aP(s.geJ(),s.gh_())
s.aX(0,a)
return s},
hP:function hP(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cy:function cy(a){this.a=a
this.b=null},
bT:function bT(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a1:function a1(){},
da:function da(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
ds:function ds(a,b,c,d,e){var _=this
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
dt:function dt(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={
ky:function(a,b){var s,r,q=E.kz(null),p=new M.cB(q)
q.sbP(0,F.mC())
s=new X.ic()
r=p.b
p.b=s
s.gm().l(0,p.gV())
p.T(new D.t("camera",r,p.b))
p.saO(0,a)
p.sau(b)
return p},
ln:function(a){var s,r=O.hN(t.l),q=new M.cH(r)
r.aP(q.gfp(),q.gfs())
s=X.kB(!0,null)
q.scj(null)
q.saO(0,s)
q.sau(null)
r.aX(0,a)
return q},
cx:function cx(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cB:function cB(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
cH:function cH(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
cK:function cK(a){var _=this
_.b=null
_.c=a
_.r=_.f=_.e=_.d=null}},A={
nv:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gaA(a5)+a6.gaA(a6)+a7.gaA(a7)+a8.gaA(a8)+a9.gaA(a9)+b0.gaA(b0)+b1.gaA(b1)+b2.gaA(b2)+b3.gaA(b3)+"_"
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
b=$.a9()
if(h){s=$.aG()
b=new Z.aE(b.a|s.a)}if(g)b=new Z.aE(b.a|$.b5().a)
if(f)b=new Z.aE(b.a|$.ax().a)
if(e)b=new Z.aE(b.a|$.b4().a)
return new A.ir(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
k1:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k2:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.k1(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hz(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
p1:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.k1(b,r,"emission")
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
oY:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.k2(b,r,"ambient")
b.a+="\n"},
p_:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.k2(b,r,"diffuse")
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
p2:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.k2(b,r,"invDiffuse")
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
p8:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.k2(b,r,"specular")
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
p4:function(a,b){var s,r,q
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
p6:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.k1(b,r,"reflect")
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
p7:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.k1(b,r,"refract")
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
oZ:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hz(r)
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
s=c.a+="   return "+C.b.p(o," * ")+";\n"
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
p0:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hz(r)
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
c.a+="      highLight = intensity*("+C.b.p(k," + ")+");\n"}else c.a+="   highLight = "+C.b.p(k," + ")+";\n"
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
p5:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hz(r)
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
m=c.a+="   return "+C.b.p(j," * ")+";\n"
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
p9:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hz(r)
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
if(m){s=$.i0
if(s==null)s=$.i0=new E.fG(E.m1(),E.m2())
p=c.a
if(s.b===C.x){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.b.p(h," * ")+";\n"
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
p3:function(a,b){var s,r
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
s=b.a+="   return "+C.b.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pa:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.Z(""),j=""+"precision mediump float;\n"
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
A.p1(a,k)
A.oY(a,k)
A.p_(a,k)
A.p2(a,k)
A.p8(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.p6(a,k)
A.p7(a,k)}A.p4(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.oZ(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.p0(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.p5(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.p9(a,p[n],k)
A.p3(a,k)}p=k.a+="// === Main ===\n"
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
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
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
pb:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b0+"];\n"
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
pd:function(a,b){var s
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
pc:function(a,b){var s
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
pf:function(a,b){var s,r
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
pg:function(a,b){var s,r
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
pe:function(a,b){var s
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
ph:function(a,b){var s
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
hz:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.al(a,1)},
nT:function(a,b){var s,r,q,p=""+"precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n"
for(s=0;s<a;++s)p=p+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
p+="\nvec4 clrAccum;\n"
r=b===C.O
p=(r||b===C.i?p+"float colorCount;\n":p)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.N)p+="      clrAccum += color;\n"
else if(b===C.n)p+="      clrAccum = mix(clrAccum, color, color.a);\n"
else p=r?p+"      clrAccum += color;\n      colorCount += 1.0;\n":p+"      clrAccum = color;\n      colorCount = 1.0;\n"
p+="   }\n}\n\nvoid layoutAll()\n{\n"
q=b===C.i
if(q)for(s=a-1;s>=0;--s)p=p+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)p=p+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
p+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(r)p+="   colorCount = 1.0;\n"
else if(q)p+="   colorCount = 0.0;\n"
p+="   layoutAll();\n"
p=(r?p+"   clrAccum = clrAccum/colorCount;\n":p)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return p.charCodeAt(0)==0?p:p},
kN:function(a,b,c,d,e){var s=new A.fh(H.b([],t.t),a,c,e)
s.f=d
s.e=P.ey(d,0,!1,t.S)
return s},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a,b){var _=this
_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cL:function cL(a,b,c){var _=this
_.x=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.a=b
_.b=c
_.d=_.c=""
_.r=_.f=_.e=null},
ia:function ia(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iT=_.dS=_.dR=_.iS=_.dQ=_.dP=_.dO=_.iR=_.dN=_.dM=_.dL=_.iQ=_.dK=_.dJ=_.iP=_.dI=_.dH=_.dG=_.b1=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.co=c
_.cp=d
_.cq=e
_.cr=f
_.cs=g
_.ct=h
_.cu=i
_.cv=j
_.iW=_.iV=_.iU=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b7:function b7(a,b){this.a=a
this.b=b},
ba:function ba(a,b){this.a=a
this.b=b},
bd:function bd(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b0=b5
_.b1=b6
_.dG=b7},
dl:function dl(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dm:function dm(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dp:function dp(a,b,c,d,e,f,g,h,i,j){var _=this
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
dr:function dr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bf:function bf(){},
bR:function bR(a,b){this.a=a
this.b=b},
df:function df(a,b,c,d,e,f,g,h,i){var _=this
_.z=_.y=_.x=null
_.Q=a
_.ch=b
_.cx=c
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.a=h
_.b=i
_.d=_.c=""
_.r=_.f=_.e=null},
a0:function a0(){},
je:function je(a){this.a=a},
bE:function bE(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c},
fh:function fh(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
di:function di(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c},
dj:function dj(a,b,c){this.a=a
this.c=b
this.d=c},
dk:function dk(a,b,c){this.a=a
this.c=b
this.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c},
dn:function dn(a,b,c){this.a=a
this.c=b
this.d=c},
bG:function bG(a,b,c){this.a=a
this.c=b
this.d=c},
bH:function bH(a,b,c){this.a=a
this.c=b
this.d=c},
dq:function dq(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mC:function(){var s,r,q,p,o=null,n=F.kK(),m=n.gU(),l=new V.E(-1,-1,1).M(),k=m.bw(new V.aW(1,2,4,6),V.hO(255,0,0,255),new V.V(-1,-1,0),new V.U(0,1),l,o)
l=n.gU()
m=new V.E(1,-1,1).M()
s=l.bw(new V.aW(0,3,4,6),V.hO(0,0,255,255),new V.V(1,-1,0),new V.U(1,1),m,o)
m=n.gU()
l=new V.E(1,1,1).M()
r=m.bw(new V.aW(0,2,5,6),V.hO(0,128,0,255),new V.V(1,1,0),new V.U(1,0),l,o)
l=n.gU()
m=$.a7
if(m==null)m=$.a7=new V.U(0,0)
q=new V.E(-1,1,1).M()
p=l.bw(new V.aW(0,2,4,7),V.hO(255,255,0,255),new V.V(-1,1,0),m,q,o)
n.gR().hA(H.b([k,s,r,p],t.k))
n.ay()
return n},
jX:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dV:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.E(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.E(s+a4,r+a2,q+a3)
o=new V.E(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.E(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jX(h)
j=F.jX(g)
a.cB(F.mF(a0,a1,new F.jV(i,F.jX(f),F.jX(e),j,k,c),b))},
pQ:function(a){var s=null,r=new F.kp(a,new F.kq()),q=F.kK()
F.dV(q,s,r,8,8,1,0,0,1)
F.dV(q,s,r,8,8,0,1,0,3)
F.dV(q,s,r,8,8,0,0,1,2)
F.dV(q,s,r,8,8,-1,0,0,0)
F.dV(q,s,r,8,8,0,-1,0,0)
F.dV(q,s,r,8,8,0,0,-1,3)
q.ay()
q.i6(new F.ju(),new F.iI())
return q},
pF:function(a,b){return F.mF(b,a,new F.k8(new F.k9()),null)},
mF:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.d(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.d(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.kK()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.jr(d,d,new V.ao(m,0,0,1),d,d,new V.U(o,1),d,d,0)
n.l(0,l)
c.$3(l,o,0)
q.push(l.cm(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.jr(d,d,new V.ao(g,f,e,1),d,d,new V.U(o,j),d,d,0)
h.l(0,l)
c.$3(l,o,k)
q.push(l.cm(a0))}}s.gR().hB(a+1,b+1,q)
return s},
kK:function(){return new F.iS()},
jr:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.ce()
h=$.lc()
s=$.a9()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.aG().a)!==0)q.r=e
if((r&$.b5().a)!==0)q.x=b
if((r&$.ax().a)!==0)q.y=f
if((r&$.bq().a)!==0)q.z=g
if((r&$.ld().a)!==0)q.Q=c
if((r&$.bM().a)!==0)q.ch=i
if((r&$.b4().a)!==0)q.cx=a
return q},
jV:function jV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kq:function kq(){},
kp:function kp(a,b){this.a=a
this.b=b},
k9:function k9(){},
k8:function k8(a){this.a=a},
aq:function aq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(){},
iX:function iX(){},
ew:function ew(){this.b=this.a=null},
ih:function ih(){},
jd:function jd(){},
eR:function eR(){this.a=null},
iS:function iS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iT:function iT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c6:function c6(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
ce:function ce(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jy:function jy(a){this.a=a},
jx:function jx(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
cf:function cf(a,b,c){this.b=a
this.c=b
this.d=c},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.b=a
this.c=b},
jv:function jv(){},
ju:function ju(){},
jw:function jw(){},
iI:function iI(){},
dv:function dv(a){this.b=a}},T={
kL:function(a){return new T.fa(a)},
c8:function c8(){},
f9:function f9(){},
fa:function fa(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
j2:function j2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kF.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gD:function(a){return H.d7(a)},
i:function(a){return"Instance of '"+H.d8(a)+"'"}}
J.eq.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$ib1:1}
J.cQ.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0}}
J.bc.prototype={
gD:function(a){return 0},
i:function(a){return String(a)},
$ils:1}
J.eP.prototype={}
J.cb.prototype={}
J.aO.prototype={
i:function(a){var s=a[$.mJ()]
if(s==null)return this.eB(a)
return"JavaScript function for "+J.e6(s)}}
J.u.prototype={
cG:function(a,b){if(!!a.fixed$length)H.h(P.B("removeAt"))
if(b<0||b>=a.length)throw H.d(P.eT(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var s
if(!!a.fixed$length)H.h(P.B("remove"))
for(s=0;s<a.length;++s)if(J.H(a[s],b)){a.splice(s,1)
return!0}return!1},
aX:function(a,b){if(!!a.fixed$length)H.h(P.B("addAll"))
this.eP(a,b)
return},
eP:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.d(P.b9(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.d(P.b9(a))}},
p:function(a,b){var s,r,q=a.length,p=P.ey(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.w(a[s])
if(s>=q)return H.c(p,s)
p[s]=r}return p.join(b)},
i4:function(a){return this.p(a,"")},
hY:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.d(P.b9(a))}return s},
hZ:function(a,b,c){return this.hY(a,b,c,t.z)},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
cP:function(a,b){var s=a.length
if(b>s)throw H.d(P.a5(b,0,s,"start",null))
if(b===s)return H.b([],H.hw(a))
return H.b(a.slice(b,s),H.hw(a))},
ghX:function(a){if(a.length>0)return a[0]
throw H.d(H.lr())},
gaN:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.d(H.lr())},
b8:function(a,b){if(!!a.immutable$list)H.h(P.B("sort"))
H.nP(a,b==null?J.oP():b)},
ey:function(a){return this.b8(a,null)},
P:function(a,b){var s
for(s=0;s<a.length;++s)if(J.H(a[s],b))return!0
return!1},
i:function(a){return P.kC(a,"[","]")},
gS:function(a){return new J.aa(a,a.length)},
gD:function(a){return H.d7(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.h(P.B("set length"))
if(b>a.length)H.hw(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.cq(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.h(P.B("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cq(a,b))
a[b]=c},
$im:1,
$ik:1,
$ip:1}
J.id.prototype={}
J.aa.prototype={
gC:function(a){return H.P(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.d(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bX.prototype={
am:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbD(b)
if(this.gbD(a)===s)return 0
if(this.gbD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbD:function(a){return a===0?1/a<0:a<0},
iA:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.d(P.B(""+a+".toInt()"))},
bh:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.d(P.B(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.B(""+a+".round()"))},
cJ:function(a,b){var s
if(b>20)throw H.d(P.a5(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbD(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
A:function(a,b){return a*b},
aC:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dh(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.d(P.B("Result of truncating division is "+H.w(s)+": "+H.w(a)+" ~/ "+b))},
aW:function(a,b){var s
if(a>0)s=this.dg(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hp:function(a,b){if(b<0)throw H.d(H.e_(b))
return this.dg(a,b)},
dg:function(a,b){return b>31?0:a>>>b},
$iL:1,
$ia4:1}
J.cP.prototype={$ij:1}
J.er.prototype={}
J.bx.prototype={
X:function(a,b){if(b<0)throw H.d(H.cq(a,b))
if(b>=a.length)H.h(H.cq(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.d(H.cq(a,b))
return a.charCodeAt(b)},
Y:function(a,b){return a+b},
b4:function(a,b,c,d){var s=P.be(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ag:function(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a5(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
af:function(a,b){return this.ag(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.eT(b,null))
if(b>c)throw H.d(P.eT(b,null))
if(c>a.length)throw H.d(P.eT(c,null))
return a.substring(b,c)},
al:function(a,b){return this.q(a,b,null)},
A:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
at:function(a,b){var s=b-a.length
if(s<=0)return a
return this.A(" ",s)+a},
ii:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.A(c,s)},
bB:function(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a5(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dY:function(a,b){return this.bB(a,b,0)},
hK:function(a,b,c){var s=a.length
if(c>s)throw H.d(P.a5(c,0,s,null,null))
return H.mD(a,b,c)},
P:function(a,b){return this.hK(a,b,0)},
am:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gD:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$ir:1}
H.cR.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.Q.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)}}
H.m.prototype={}
H.bY.prototype={
gC:function(a){return H.P(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.cs(q),o=p.gj(q)
if(r.b!==o)throw H.d(P.b9(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.K(q,s);++r.c
return!0}}
H.aQ.prototype={
gS:function(a){return new H.ez(J.aH(this.a),this.b)},
gj:function(a){return J.b6(this.a)},
K:function(a,b){return this.b.$1(J.kt(this.a,b))}}
H.cG.prototype={$im:1}
H.ez.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.P(this).Q[1].a(this.a)}}
H.dw.prototype={
gS:function(a){return new H.fu(J.aH(this.a),this.b)}}
H.fu.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cI.prototype={}
H.fo.prototype={
k:function(a,b,c){throw H.d(P.B("Cannot modify an unmodifiable list"))}}
H.cc.prototype={}
H.cz.prototype={
i:function(a){return P.kI(this)},
k:function(a,b,c){H.nf()},
$iG:1}
H.cA.prototype={
gj:function(a){return this.a},
ck:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.ck(0,b))return null
return this.d1(b)},
d1:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d1(q))}}}
H.jb.prototype={
ar:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.et.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fn.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iJ.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.h8.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bQ.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mH(r==null?"unknown":r)+"'"},
giI:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.j1.prototype={}
H.iY.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mH(s)+"'"}}
H.ct.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.ct))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gD:function(a){var s,r=this.c
if(r==null)s=H.d7(this.a)
else s=typeof r!=="object"?J.ku(r):H.d7(r)
return(s^H.d7(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.w(this.d)+"' of "+("Instance of '"+H.d8(s)+"'")}}
H.eW.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.T.prototype={
gj:function(a){return this.a},
gap:function(a){return new H.cT(this,H.P(this).L("cT<1>"))},
giH:function(a){var s=this,r=H.P(s)
return H.nu(s.gap(s),new H.ie(s),r.c,r.Q[1])},
ck:function(a,b){var s=this.b
if(s==null)return!1
return this.eY(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bs(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bs(p,b)
q=r==null?n:r.b
return q}else return o.i1(b)},
i1:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d2(p,q.dZ(a))
r=q.e_(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cW(s==null?q.b=q.c0():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cW(r==null?q.c=q.c0():r,b,c)}else q.i2(b,c)},
i2:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c0()
s=p.dZ(a)
r=p.d2(o,s)
if(r==null)p.c5(o,s,[p.c1(a,b)])
else{q=p.e_(r,a)
if(q>=0)r[q].b=b
else r.push(p.c1(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.d(P.b9(s))
r=r.c}},
cW:function(a,b,c){var s=this.bs(a,b)
if(s==null)this.c5(a,b,this.c1(b,c))
else s.b=c},
c1:function(a,b){var s=this,r=new H.ii(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dZ:function(a){return J.ku(a)&0x3ffffff},
e_:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1},
i:function(a){return P.kI(this)},
bs:function(a,b){return a[b]},
d2:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
f0:function(a,b){delete a[b]},
eY:function(a,b){return this.bs(a,b)!=null},
c0:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c5(r,s,r)
this.f0(r,s)
return r}}
H.ie.prototype={
$1:function(a){var s=this.a
return H.P(s).Q[1].a(s.h(0,a))},
$S:function(){return H.P(this.a).L("2(1)")}}
H.ii.prototype={}
H.cT.prototype={
gj:function(a){return this.a.a},
gS:function(a){var s=this.a,r=new H.ex(s,s.r)
r.c=s.e
return r}}
H.ex.prototype={
gC:function(a){return H.P(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.d(P.b9(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kb.prototype={
$1:function(a){return this.a(a)},
$S:33}
H.kc.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kd.prototype={
$1:function(a){return this.a(a)},
$S:51}
H.es.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilE:1}
H.d2.prototype={$id2:1}
H.a_.prototype={$ia_:1}
H.c1.prototype={
gj:function(a){return a.length},
$iA:1}
H.bA.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]},
k:function(a,b,c){H.b0(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.d3.prototype={
k:function(a,b,c){H.b0(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.eF.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eG.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eH.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eI.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eJ.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.d4.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.bB.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b0(b,a,a.length)
return a[b]},
$ibB:1,
$ica:1}
H.dD.prototype={}
H.dE.prototype={}
H.dF.prototype={}
H.dG.prototype={}
H.as.prototype={
L:function(a){return H.hk(v.typeUniverse,this,a)},
ba:function(a){return H.om(v.typeUniverse,this,a)}}
H.fL.prototype={}
H.fH.prototype={
i:function(a){return this.a}}
H.dO.prototype={}
P.jA.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:49}
P.jz.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:44}
P.jB.prototype={
$0:function(){this.a.$0()},
$S:11}
P.jC.prototype={
$0:function(){this.a.$0()},
$S:11}
P.dN.prototype={
eL:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.jP(this,b),0),a)
else throw H.d(P.B("`setTimeout()` not found."))},
eM:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.jO(this,a,Date.now(),b),0),a)
else throw H.d(P.B("Periodic timer."))},
$ij7:1}
P.jP.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:4}
P.jO.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eC(s,o)}q.c=p
r.d.$1(q)},
$S:11}
P.cj.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.w(this.a)+")"}}
P.ck.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cj){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aH(s)
if(o instanceof P.ck){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dK.prototype={
gS:function(a){return new P.ck(this.a())}}
P.fv.prototype={}
P.c7.prototype={}
P.f4.prototype={}
P.jU.prototype={}
P.k3.prototype={
$0:function(){var s=H.d(this.a)
s.stack=this.b.i(0)
throw s},
$S:4}
P.jH.prototype={
iv:function(a){var s,r,q,p=null
try{if(C.f===$.aF){a.$0()
return}P.pj(p,p,this,a)}catch(q){s=H.bp(q)
r=H.l7(q)
P.mo(p,p,this,s,r)}},
iw:function(a,b){var s,r,q,p=null
try{if(C.f===$.aF){a.$1(b)
return}P.pk(p,p,this,a,b)}catch(q){s=H.bp(q)
r=H.l7(q)
P.mo(p,p,this,s,r)}},
ix:function(a,b){return this.iw(a,b,t.z)},
hH:function(a){return new P.jI(this,a)},
dr:function(a,b){return new P.jJ(this,a,b)}}
P.jI.prototype={
$0:function(){return this.a.iv(this.b)},
$S:4}
P.jJ.prototype={
$1:function(a){return this.a.ix(this.b,a)},
$S:function(){return this.c.L("~(0)")}}
P.dz.prototype={
gS:function(a){var s=new P.dA(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
P:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eV(b)
return r}},
eV:function(a){var s=this.d
if(s==null)return!1
return this.bY(s[this.bU(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cY(s==null?q.b=P.kR():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cY(r==null?q.c=P.kR():r,b)}else return q.eO(0,b)},
eO:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kR()
s=q.bU(b)
r=p[s]
if(r==null)p[s]=[q.bT(b)]
else{if(q.bY(r,b)>=0)return!1
r.push(q.bT(b))}return!0},
B:function(a,b){if((b&1073741823)===b)return this.he(this.c,b)
else return this.hd(0,b)},
hd:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bU(b)
r=n[s]
q=o.bY(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dj(p)
return!0},
cY:function(a,b){if(a[b]!=null)return!1
a[b]=this.bT(b)
return!0},
he:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dj(s)
delete a[b]
return!0},
d4:function(){this.r=this.r+1&1073741823},
bT:function(a){var s,r=this,q=new P.jG(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d4()
return q},
dj:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d4()},
bU:function(a){return J.ku(a)&1073741823},
bY:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1}}
P.jG.prototype={}
P.dA.prototype={
gC:function(a){return H.P(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.d(P.b9(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cO.prototype={}
P.ij.prototype={
$2:function(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:14}
P.cU.prototype={$im:1,$ik:1,$ip:1}
P.i.prototype={
gS:function(a){return new H.bY(a,this.gj(a))},
K:function(a,b){return this.h(a,b)},
F:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.d(P.b9(a))}},
ge0:function(a){return this.gj(a)===0},
iC:function(a,b){var s,r,q,p,o=this
if(o.ge0(a)){s=J.kD(0,H.b2(a).L("i.E"))
return s}r=o.h(a,0)
q=P.ey(o.gj(a),r,!0,H.b2(a).L("i.E"))
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s}return q},
iB:function(a){return this.iC(a,!0)},
hV:function(a,b,c,d){var s
H.b2(a).L("i.E").a(d)
P.be(b,c,this.gj(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.kC(a,"[","]")}}
P.cW.prototype={}
P.io.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.w(a)
r.a=s+": "
r.a+=H.w(b)},
$S:43}
P.M.prototype={
F:function(a,b){var s,r,q
for(s=J.aH(this.gap(a)),r=H.b2(a).L("M.V");s.t();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.b6(this.gap(a))},
i:function(a){return P.kI(a)},
$iG:1}
P.hl.prototype={
k:function(a,b,c){throw H.d(P.B("Cannot modify unmodifiable map"))}}
P.cX.prototype={
h:function(a,b){return J.lf(this.a,b)},
k:function(a,b,c){J.ks(this.a,b,c)},
F:function(a,b){J.e5(this.a,b)},
gj:function(a){return J.b6(this.a)},
i:function(a){return J.e6(this.a)},
$iG:1}
P.cd.prototype={}
P.db.prototype={
i:function(a){return P.kC(this,"{","}")},
K:function(a,b){var s,r,q,p,o="index"
H.pw(b,o,t.S)
P.lD(b,o)
for(s=P.o6(this,this.r),r=H.P(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.d(P.K(b,this,o,null,q))}}
P.dH.prototype={$im:1,$ik:1}
P.dB.prototype={}
P.dS.prototype={}
P.dU.prototype={}
P.jp.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.bp(r)}return null},
$S:26}
P.jo.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.bp(r)}return null},
$S:26}
P.hG.prototype={
i7:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.be(a3,a4,a2.length)
s=$.mY()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.I(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.ka(C.a.I(a2,k))
g=H.ka(C.a.I(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.c(s,f)
e=s[f]
if(e>=0){f=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.Z("")
d=o}else d=o
c=d.a+=C.a.q(a2,p,q)
d.a=c+H.aX(j)
p=k
continue}}throw H.d(P.a6("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.q(a2,p,a4)
d=r.length
if(n>=0)P.lg(a2,m,a4,n,l,d)
else{b=C.c.aC(d-1,4)+1
if(b===1)throw H.d(P.a6(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b4(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lg(a2,m,a4,n,l,a)
else{b=C.c.aC(a,4)
if(b===1)throw H.d(P.a6(a0,a2,a4))
if(b>1)a2=C.a.b4(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hH.prototype={}
P.ee.prototype={}
P.eg.prototype={}
P.i_.prototype={}
P.jm.prototype={
ghU:function(){return C.M}}
P.jq.prototype={
cl:function(a){var s,r,q,p=P.be(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jT(r)
if(q.f2(a,0,p)!==p){C.a.X(a,p-1)
q.ca()}return new Uint8Array(r.subarray(0,H.oG(0,q.b,s)))}}
P.jT.prototype={
ca:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
hx:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.c(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.c(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s&63|128
return!0}else{n.ca()
return!1}},
f2:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.I(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hx(p,C.a.I(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.ca()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.c(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.c(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p&63|128}}}return q}}
P.jn.prototype={
cl:function(a){var s=this.a,r=P.nY(s,a,0,null)
if(r!=null)return r
return new P.jS(s).hL(a,0,null,!0)}}
P.jS.prototype={
hL:function(a,b,c,d){var s,r,q,p,o=this,n=P.be(b,c,J.b6(a))
if(b===n)return""
s=P.oB(a,b,n)
r=o.bV(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.oC(q)
o.b=0
throw H.d(P.a6(p,a,b+o.c))}return r},
bV:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a2(b+c,2)
r=q.bV(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bV(a,s,c,d)}return q.hP(a,b,c,d)},
hP:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.Z(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.I("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.I(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aX(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aX(j)
break
case 65:g.a+=H.aX(j);--f
break
default:p=g.a+=H.aX(j)
g.a=p+H.aX(j)
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
g.a+=H.aX(a[l])}else g.a+=P.f6(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aX(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.X.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.X&&this.a===b.a&&!0},
am:function(a,b){return C.c.am(this.a,b.a)},
gD:function(a){var s=this.a
return(s^C.c.aW(s,30))&1073741823},
i:function(a){var s=this,r=P.ng(H.nG(s)),q=P.ei(H.nE(s)),p=P.ei(H.nA(s)),o=P.ei(H.nB(s)),n=P.ei(H.nD(s)),m=P.ei(H.nF(s)),l=P.nh(H.nC(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bt.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bt&&this.a===b.a},
gD:function(a){return C.c.gD(this.a)},
am:function(a,b){return C.c.am(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hY(),o=this.a
if(o<0)return"-"+new P.bt(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.hX().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+s+":"+r+"."+q}}
P.hX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:25}
P.hY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:25}
P.I.prototype={}
P.ea.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i2(s)
return"Assertion failed"}}
P.fg.prototype={}
P.eK.prototype={
i:function(a){return"Throw of null."}}
P.aI.prototype={
gbX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbW:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbX()+o+m
if(!q.a)return l
s=q.gbW()
r=P.i2(q.b)
return l+s+": "+r}}
P.d9.prototype={
gbX:function(){return"RangeError"},
gbW:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.w(q):""
else if(q==null)s=": Not greater than or equal to "+H.w(r)
else if(q>r)s=": Not in inclusive range "+H.w(r)+".."+H.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.w(r)
return s}}
P.eo.prototype={
gbX:function(){return"RangeError"},
gbW:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.fp.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fm.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.f2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ef.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i2(s)+"."}}
P.eN.prototype={
i:function(a){return"Out of Memory"},
$iI:1}
P.dd.prototype={
i:function(a){return"Stack Overflow"},
$iI:1}
P.eh.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fI.prototype={
i:function(a){return"Exception: "+this.a}}
P.i8.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.q(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.I(d,o)
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
return f+j+h+i+"\n"+C.a.A(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.w(e)+")"):f}}
P.k.prototype={
gj:function(a){var s,r=this.gS(this)
for(s=0;r.t();)++s
return s},
K:function(a,b){var s,r,q
P.lD(b,"index")
for(s=this.gS(this),r=0;s.t();){q=s.gC(s)
if(b===r)return q;++r}throw H.d(P.K(b,this,"index",null,r))},
i:function(a){return P.nl(this,"(",")")}}
P.ep.prototype={}
P.af.prototype={
gD:function(a){return P.N.prototype.gD.call(C.R,this)},
i:function(a){return"null"}}
P.N.prototype={constructor:P.N,$iN:1,
n:function(a,b){return this===b},
gD:function(a){return H.d7(this)},
i:function(a){return"Instance of '"+H.d8(this)+"'"},
toString:function(){return this.i(this)}}
P.Z.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jk.prototype={
$2:function(a,b){var s,r,q,p=C.a.dY(b,"=")
if(p===-1){if(b!=="")J.ks(a,P.l_(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.al(b,p+1)
q=this.a
J.ks(a,P.l_(s,0,s.length,q,!0),P.l_(r,0,r.length,q,!0))}return a},
$S:42}
P.jh.prototype={
$2:function(a,b){throw H.d(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.ji.prototype={
$2:function(a,b){throw H.d(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:39}
P.jj.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.ke(C.a.q(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:38}
P.bK.prototype={
gc9:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.w(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.kH("_text"))}return o},
gD:function(a){var s=this,r=s.z
if(r==null){r=C.a.gD(s.gc9())
if(s.z==null)s.z=r
else r=H.h(H.kH("hashCode"))}return r},
gbI:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cd(P.lR(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.kH("queryParameters"))}return r},
geq:function(){return this.b},
gcz:function(a){var s=this.c
if(s==null)return""
if(C.a.af(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbG:function(a){var s=this.d
return s==null?P.mc(this.a):s},
gcF:function(a){var s=this.f
return s==null?"":s},
gdT:function(){var s=this.r
return s==null?"":s},
ej:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.af(s,"/"))s="/"+s
q=s
p=P.kY(null,0,0,b)
return new P.bK(n,l,j,k,q,p,o.r)},
gdU:function(){return this.c!=null},
gdX:function(){return this.f!=null},
gdV:function(){return this.r!=null},
i:function(a){return this.gc9()},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbO())if(q.c!=null===b.gdU())if(q.b===b.geq())if(q.gcz(q)===b.gcz(b))if(q.gbG(q)===b.gbG(b))if(q.e===b.geg(b)){s=q.f
r=s==null
if(!r===b.gdX()){if(r)s=""
if(s===b.gcF(b)){s=q.r
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
$ifq:1,
gbO:function(){return this.a},
geg:function(a){return this.e}}
P.jR.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.l0(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.l0(C.h,b,C.e,!0)}},
$S:37}
P.jQ.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aH(b),r=this.a;s.t();)r.$2(a,s.gC(s))},
$S:6}
P.jg.prototype={
gep:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bB(s,"?",m)
q=s.length
if(r>=0){p=P.dT(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fB("data","",n,n,P.dT(s,m,q,C.w,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jY.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
C.X.hV(s,0,96,b)
return s},
$S:35}
P.jZ.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.I(b,r)^96
if(q>=96)return H.c(a,q)
a[q]=c}},
$S:24}
P.k_.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.I(b,0),r=C.a.I(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.c(a,q)
a[q]=c}},
$S:24}
P.h2.prototype={
gdU:function(){return this.c>0},
gdW:function(){return this.c>0&&this.d+1<this.e},
gdX:function(){return this.f<this.r},
gdV:function(){return this.r<this.a.length},
gbO:function(){var s=this.x
return s==null?this.x=this.eW():s},
eW:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.af(r.a,"http"))return"http"
if(q===5&&C.a.af(r.a,"https"))return"https"
if(s&&C.a.af(r.a,"file"))return"file"
if(q===7&&C.a.af(r.a,"package"))return"package"
return C.a.q(r.a,0,q)},
geq:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcz:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbG:function(a){var s,r=this
if(r.gdW())return P.ke(C.a.q(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.af(r.a,"http"))return 80
if(s===5&&C.a.af(r.a,"https"))return 443
return 0},
geg:function(a){return C.a.q(this.a,this.e,this.f)},
gcF:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
gdT:function(){var s=this.r,r=this.a
return s<r.length?C.a.al(r,s+1):""},
gbI:function(){var s=this
if(s.f>=s.r)return C.W
return new P.cd(P.lR(s.gcF(s)),t.dw)},
ej:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbO(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.gdW()?n.gbG(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.af(r,"/"))r="/"+r
p=P.kY(m,0,0,b)
q=n.r
o=q<j.length?C.a.al(j,q+1):m
return new P.bK(l,i,s,h,r,p,o)},
gD:function(a){var s=this.y
return s==null?this.y=C.a.gD(this.a):s},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifq:1}
P.fB.prototype={}
W.o.prototype={}
W.hA.prototype={
gj:function(a){return a.length}}
W.e8.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.e9.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.br.prototype={$ibr:1}
W.bs.prototype={
cK:function(a,b,c){if(c!=null)return a.getContext(b,P.mt(c))
return a.getContext(b)},
ev:function(a,b){return this.cK(a,b,null)},
$ibs:1}
W.cw.prototype={$icw:1}
W.ay.prototype={
gj:function(a){return a.length}}
W.hQ.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cC.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hR.prototype={}
W.ap.prototype={}
W.aL.prototype={}
W.hS.prototype={
gj:function(a){return a.length}}
W.hT.prototype={
gj:function(a){return a.length}}
W.hU.prototype={
gj:function(a){return a.length}}
W.hV.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cE.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.cF.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.w(r)+", "
s=a.top
s.toString
return r+H.w(s)+") "+H.w(this.gav(a))+" x "+H.w(this.gao(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bo(b)
if(s===r.gbE(b)){s=a.top
s.toString
s=s===r.gbM(b)&&this.gav(a)===r.gav(b)&&this.gao(a)===r.gao(b)}else s=!1}else s=!1
return s},
gD:function(a){var s,r=a.left
r.toString
r=C.d.gD(r)
s=a.top
s.toString
return W.m4(r,C.d.gD(s),C.d.gD(this.gav(a)),C.d.gD(this.gao(a)))},
gds:function(a){var s=a.bottom
s.toString
return s},
gd3:function(a){return a.height},
gao:function(a){var s=this.gd3(a)
s.toString
return s},
gbE:function(a){var s=a.left
s.toString
return s},
gbK:function(a){var s=a.right
s.toString
return s},
gbM:function(a){var s=a.top
s.toString
return s},
gdl:function(a){return a.width},
gav:function(a){var s=this.gdl(a)
s.toString
return s},
$iac:1}
W.ek.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.hW.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fy.prototype={
ge0:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gS:function(a){var s=this.iB(this)
return new J.aa(s,s.length)}}
W.D.prototype={
gbz:function(a){var s=a.children
s.toString
return new W.fy(a,s)},
gdu:function(a){var s,r,q,p=a.clientLeft
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
$iD:1}
W.l.prototype={$il:1}
W.e.prototype={
hz:function(a,b,c,d){if(c!=null)this.eQ(a,b,c,!1)},
eQ:function(a,b,c,d){return a.addEventListener(b,H.cp(c,1),!1)},
$ie:1}
W.aj.prototype={$iaj:1}
W.bS.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1,
$ibS:1}
W.el.prototype={
gj:function(a){return a.length}}
W.en.prototype={
gj:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.ib.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.bv.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.bw.prototype={
gdz:function(a){var s=a.data
s.toString
return s},
$ibw:1}
W.bU.prototype={$ibU:1}
W.bW.prototype={$ibW:1,$ikx:1}
W.by.prototype={$iby:1}
W.il.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iE.prototype={
gj:function(a){return a.length}}
W.bZ.prototype={$ibZ:1}
W.eC.prototype={
h:function(a,b){return P.bn(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bn(s.value[1]))}},
gap:function(a){var s=H.b([],t.s)
this.F(a,new W.iF(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
W.iF.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eD.prototype={
h:function(a,b){return P.bn(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bn(s.value[1]))}},
gap:function(a){var s=H.b([],t.s)
this.F(a,new W.iG(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
W.iG.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.aA.prototype={$iaA:1}
W.eE.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.ak.prototype={$iak:1}
W.fx.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b]).toString},
gS:function(a){var s=this.a.childNodes
return new W.cJ(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.v.prototype={
it:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.n0(s,b,a)}catch(q){H.bp(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eA(a):s},
hg:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iv:1}
W.d5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.aB.prototype={
gj:function(a){return a.length},
$iaB:1}
W.eQ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.eV.prototype={
h:function(a,b){return P.bn(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bn(s.value[1]))}},
gap:function(a){var s=H.b([],t.s)
this.F(a,new W.iR(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
W.iR.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eX.prototype={
gj:function(a){return a.length}}
W.at.prototype={$iat:1}
W.eZ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.aC.prototype={$iaC:1}
W.f_.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.aD.prototype={
gj:function(a){return a.length},
$iaD:1}
W.f3.prototype={
h:function(a,b){return a.getItem(H.oE(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gap:function(a){var s=H.b([],t.s)
this.F(a,new W.iZ(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iG:1}
W.iZ.prototype={
$2:function(a,b){return this.a.push(a)},
$S:31}
W.am.prototype={$iam:1}
W.bh.prototype={$ibh:1}
W.au.prototype={$iau:1}
W.ag.prototype={$iag:1}
W.f7.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.f8.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.j6.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.av.prototype={$iav:1}
W.bD.prototype={$ibD:1}
W.fe.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.ja.prototype={
gj:function(a){return a.length}}
W.b_.prototype={}
W.jl.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fs.prototype={
gj:function(a){return a.length}}
W.bj.prototype={
ghR:function(a){var s=a.deltaY
if(s!=null)return s
throw H.d(P.B("deltaY is not supported"))},
ghQ:function(a){var s=a.deltaX
if(s!=null)return s
throw H.d(P.B("deltaX is not supported"))},
$ibj:1}
W.ci.prototype={
hh:function(a,b){var s=a.requestAnimationFrame(H.cp(b,1))
s.toString
return s},
f1:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fz.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.dx.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.w(r)+", "
s=a.top
s.toString
s=r+H.w(s)+") "
r=a.width
r.toString
r=s+H.w(r)+" x "
s=a.height
s.toString
return r+H.w(s)},
n:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bo(b)
if(s===r.gbE(b)){s=a.top
s.toString
if(s===r.gbM(b)){s=a.width
s.toString
if(s===r.gav(b)){s=a.height
s.toString
r=s===r.gao(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gD:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gD(p)
s=a.top
s.toString
s=C.d.gD(s)
r=a.width
r.toString
r=C.d.gD(r)
q=a.height
q.toString
return W.m4(p,s,r,C.d.gD(q))},
gd3:function(a){return a.height},
gao:function(a){var s=a.height
s.toString
return s},
gdl:function(a){return a.width},
gav:function(a){var s=a.width
s.toString
return s}}
W.fM.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.dC.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.h5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.hc.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iA:1,
$ik:1,
$ip:1}
W.kA.prototype={}
W.dy.prototype={
hw:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.n1(s,this.c,r,!1)}}}
W.jD.prototype={
$1:function(a){return this.a.$1(a)},
$S:2}
W.kQ.prototype={}
W.J.prototype={
gS:function(a){return new W.cJ(a,this.gj(a))}}
W.cJ.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lf(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.P(this).c.a(this.d)}}
W.fA.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
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
W.dI.prototype={}
W.dJ.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h9.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
P.jK.prototype={
cw:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bN:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.k0(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.X)return new Date(a.a)
if(t.fJ.b(a))throw H.d(P.jf("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cw(a)
r=n.b
q=r.length
if(s>=q)return H.c(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.e5(a,new P.jM(m,n))
return m.a}if(t.r.b(a)){s=n.cw(a)
m=n.b
if(s>=m.length)return H.c(m,s)
p=m[s]
if(p!=null)return p
return n.hN(a,s)}if(t.eH.b(a)){s=n.cw(a)
r=n.b
q=r.length
if(s>=q)return H.c(r,s)
p=m.b=r[s]
if(p!=null)return p
o={}
o.toString
m.b=o
if(s>=q)return H.c(r,s)
r[s]=o
n.i_(a,new P.jN(m,n))
return m.b}throw H.d(P.jf("structured clone of other type"))},
hN:function(a,b){var s,r,q=J.cs(a),p=q.gj(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.c(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bN(q.h(a,r))
if(r>=o.length)return H.c(o,r)
o[r]=s}return o}}
P.jM.prototype={
$2:function(a,b){this.a.a[a]=this.b.bN(b)},
$S:14}
P.jN.prototype={
$2:function(a,b){this.a.b[a]=this.b.bN(b)},
$S:30}
P.dP.prototype={$ibw:1,
gdz:function(a){return this.a}}
P.jW.prototype={
$1:function(a){this.a.push(P.mk(a))},
$S:29}
P.k4.prototype={
$2:function(a,b){this.a[a]=P.mk(b)},
$S:14}
P.jL.prototype={
i_:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.em.prototype={
gbc:function(){var s=this.b,r=H.P(s)
return new H.aQ(new H.dw(s,new P.i6(),r.L("dw<i.E>")),new P.i7(),r.L("aQ<i.E,D>"))},
F:function(a,b){C.b.F(P.ik(this.gbc(),!1,t.h),b)},
k:function(a,b,c){var s=this.gbc()
J.n5(s.b.$1(J.kt(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.b6(this.gbc().a)},
h:function(a,b){var s=this.gbc()
return s.b.$1(J.kt(s.a,b))},
gS:function(a){var s=P.ik(this.gbc(),!1,t.h)
return new J.aa(s,s.length)}}
P.i6.prototype={
$1:function(a){return t.h.b(a)},
$S:27}
P.i7.prototype={
$1:function(a){return t.h.a(a)},
$S:54}
P.h0.prototype={
gbK:function(a){return this.$ti.c.a(this.a+this.c)},
gds:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.bo(b)
if(s===r.gbE(b)){q=o.b
if(q===r.gbM(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbK(b)&&p.a(q+o.d)===r.gds(b)}else s=!1}else s=!1}else s=!1
return s},
gD:function(a){var s=this,r=s.a,q=C.c.gD(r),p=s.b,o=C.c.gD(p),n=s.$ti.c
r=C.c.gD(n.a(r+s.c))
p=C.c.gD(n.a(p+s.d))
return H.nS(H.j_(H.j_(H.j_(H.j_(0,q),o),r),p))}}
P.ac.prototype={
gbE:function(a){return this.a},
gbM:function(a){return this.b},
gav:function(a){return this.c},
gao:function(a){return this.d}}
P.aP.prototype={$iaP:1}
P.ev.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.aU.prototype={$iaU:1}
P.eL.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.iK.prototype={
gj:function(a){return a.length}}
P.f5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.n.prototype={
gbz:function(a){return new P.em(a,new W.fx(a))}}
P.aY.prototype={$iaY:1}
P.ff.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fP.prototype={}
P.fQ.prototype={}
P.fX.prototype={}
P.fY.prototype={}
P.ha.prototype={}
P.hb.prototype={}
P.hh.prototype={}
P.hi.prototype={}
P.hD.prototype={
gj:function(a){return a.length}}
P.ec.prototype={
h:function(a,b){return P.bn(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bn(s.value[1]))}},
gap:function(a){var s=H.b([],t.s)
this.F(a,new P.hE(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
P.hE.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.ed.prototype={
gj:function(a){return a.length}}
P.b8.prototype={}
P.eM.prototype={
gj:function(a){return a.length}}
P.fw.prototype={}
P.c5.prototype={
em:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.hy(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.x.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.py(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.bN("Incorrect number or type of arguments"))},
iy:function(a,b,c,d,e,f,g){return this.em(a,b,c,d,e,f,g,null,null,null)},
$ic5:1}
P.f0.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.K(b,a,null,null,null))
s=P.bn(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.h6.prototype={}
P.h7.prototype={}
K.e7.prototype={
b2:function(a,b){return!0},
i:function(a){return"all"},
$ibz:1}
K.cN.prototype={
b2:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].b2(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibz:1}
K.aT.prototype={
b2:function(a,b){return!this.ez(0,b)},
i:function(a){return"!["+this.bR(0)+"]"}}
K.Y.prototype={
a0:function(a){var s,r,q,p
if(a.a.length<=0)throw H.d(P.f("May not create a Set with zero characters."))
s=new H.T(t.fX)
for(r=new H.bY(a,a.gj(a)),q=H.P(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.ik(s.gap(s),!0,t.S)
C.b.ey(p)
this.a=p},
b2:function(a,b){return C.b.P(this.a,b)},
i:function(a){return P.f6(this.a,0,null)},
$ibz:1}
L.f1.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dh(this.a.O(0,b),H.b([],t.B))
s.push(p)
return p},
hW:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.b2(0,a))return p}return null},
i:function(a){return this.b},
di:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.P(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gap(s)}s=J.aH(s==null?H.b([],t.s):s)
for(;s.t();){r=s.gC(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.P(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.q)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bR(0))}return m.charCodeAt(0)==0?m:m}}
L.fc.prototype={
i:function(a){var s=H.mE(this.b,"\n","\\n"),r=H.mE(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fd.prototype={
i:function(a){return this.b}}
L.j8.prototype={
O:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.f1(this,b,H.b([],t.ab))
s.k(0,b,r)}return r},
bq:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fd(a,P.R(s,s))
r.k(0,a,q)}return q},
eo:function(a){return this.iD(a)},
iD:function(a){var s=this
return P.oX(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$eo(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.P(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.b.cG(a1,0)
else{if(!r.t()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=d==null
f=g?null:d.hW(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.f6(a0,0,null)
throw H.d(P.f("Untokenizable string [state: "+H.w(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.B("removeRange"))
P.be(0,i,a0.length)
a0.splice(0,i-0)
C.b.aX(a1,a0)
a0=H.b([],c)
b=H.b([],c)
d=s.d
q=!m.P(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(h)
d=f.b
g=d.d
if(g!=null){e=P.f6(b,0,null)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.fc(g,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.P(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.o4()
case 1:return P.o5(o)}}},t.bJ)},
i:function(a){var s,r=new P.Z(""),q=this.d
if(q!=null)r.a=""+(q.di()+"\n")
for(q=this.a,q=q.giH(q),q=q.gS(q);q.t();){s=q.gC(q)
if(s!=this.d)r.a+=H.w(s==null?null:s.di())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dh.prototype={
i:function(a){return this.b.b+": "+this.bR(0)}}
O.ab.prototype={
cL:function(a,b,c){this.b=b
this.c=a},
aP:function(a,b){return this.cL(a,null,b)},
d8:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
d5:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gS:function(a){var s=this.a
return new J.aa(s,s.length)},
K:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.P(q).L("u<ab.T>")
if(q.d8(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.d5(r,H.b([b],p))}},
aX:function(a,b){var s,r
if(this.d8(b)){s=this.a
r=s.length
C.b.aX(s,b)
this.d5(r,b)}},
$ik:1}
O.d1.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.C():s},
aR:function(){var s=this.b
return s==null?null:s.w(null)},
ga7:function(a){var s=this.a
if(s.length>0)return C.b.gaN(s)
else return V.ad()},
bH:function(a){this.a.push(a)
this.aR()},
bp:function(){var s=this.a
if(s.length>0){s.pop()
this.aR()}}}
E.hI.prototype={}
E.bb.prototype={
cX:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.aa(s,s.length),r=H.P(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.cX()}},
sbP:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().B(0,s.gec())
if(b!=null)b.gm().l(0,s.gec())
s.az(new D.t("shape",r,b))}},
sau:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gm().B(0,s.gee())
if(a!=null)a.gm().l(0,s.gee())
s.cX()
s.az(new D.t("technique",r,a))}},
sbl:function(a){var s,r,q=this
if(!J.H(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gm().B(0,q.gea())
if(a!=null)a.gm().l(0,q.gea())
r=q.r
q.az(new D.t("mover",s,r))}},
ad:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aG(0,b,q)
if(!J.H(o,q.x)){s=q.x
q.x=o
q.az(new D.t("matrix",s,o))}p=q.f
if(p!=null)p.ad(0,b)
for(p=q.y.a,p=new J.aa(p,p.length),r=H.P(p).c;p.t();)r.a(p.d).ad(0,b)},
a3:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga7(q))
else o.push(p.A(0,q.ga7(q)))
q.aR()
a.cE(r.f)
s=C.b.gaN(a.dy)
if(r.d!=null)if(s!=null)s.bJ(a,r)
for(p=r.y.a,p=new J.aa(p,p.length),o=H.P(p).c;p.t();)o.a(p.d).a3(a)
a.cD()
q.bp()},
az:function(a){var s=this.z
return s==null?null:s.w(a)},
a5:function(){return this.az(null)},
ed:function(a){this.e=null
this.az(a)},
ig:function(){return this.ed(null)},
ef:function(a){return this.az(a)},
ih:function(){return this.ef(null)},
eb:function(a){return this.az(a)},
ie:function(){return this.eb(null)},
e9:function(a){return this.az(a)},
ia:function(){return this.e9(null)},
i9:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge8(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bu()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a5()},
ic:function(a,b){var s,r
for(s=b.gS(b),r=this.ge8();s.t();)s.gC(s).gm().B(0,r)
this.a5()},
i:function(a){return"Unnamed entity"}}
E.bO.prototype={
i:function(a){return this.b}}
E.c2.prototype={
i:function(a){return this.b}}
E.fG.prototype={}
E.iN.prototype={
eF:function(a,b){var s=this
s.cy.gm().l(0,new E.iO(s))
s.db.gm().l(0,new E.iP(s))
s.dx.gm().l(0,new E.iQ(s))},
giq:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga7(q).A(0,s.ga7(s))
q=s}return q},
gei:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.giq().A(0,r.ga7(r))}return r},
ger:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
s=r.dx
s=r.cx=q.ga7(q).A(0,s.ga7(s))
q=s}return q},
cE:function(a){var s=this.dy
return s.push(a==null?C.b.gaN(s):a)},
cD:function(){var s=this.dy
if(s.length>1)s.pop()},
bx:function(a){var s,r=a.b
if(r.length===0)throw H.d(P.f("May not cache a shader with no name."))
s=this.fr
if(s.ck(0,r))throw H.d(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.k(0,r,a)}}
E.iO.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.iP.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.iQ.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.fb.prototype={
cU:function(a){this.ek()},
cT:function(){return this.cU(null)},
gi0:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.lm(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.X(q,!1)
return s/p},
dc:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bh(r*o)
r=s.clientHeight
r.toString
p=C.d.bh(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.lM(C.o,this.giu())}},
ek:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.B.f1(s)
r=W.mq(new E.j5(this),t.H)
r.toString
C.B.hh(s,r)}},
is:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dc()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.X(p,!1)
q.y=P.lm(p-q.r.a).a*0.000001
p=q.cy
C.b.sj(p.a,0)
p.aR()
p=q.db
C.b.sj(p.a,0)
p.aR()
p=q.dx
C.b.sj(p.a,0)
p.aR()
p=q.dy
C.b.sj(p,0)
p.push(null)
m.a3(q)}}catch(o){s=H.bp(o)
r=H.l7(o)
P.lb("Error: "+H.w(s))
P.lb("Stack: "+H.w(r))
throw H.d(s)}}}
E.j5.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.is()}},
$S:28}
Z.ft.prototype={}
Z.bP.prototype={
W:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.bp(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.w(s))
throw H.d(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.ch.prototype={}
Z.aJ.prototype={
an:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
W:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.c(r,s)
r[s].W(a)}},
aF:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.c(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a3:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.c(n,r)
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
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.p(l,", ")+"\nAttrs:   "+C.b.p(o,", ")}}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d8(this.c)+"'")+"]"}}
Z.aE.prototype={
gcO:function(a){var s=this.a,r=(s&$.a9().a)!==0?3:0
if((s&$.aG().a)!==0)r+=3
if((s&$.b5().a)!==0)r+=3
if((s&$.ax().a)!==0)r+=2
if((s&$.bq().a)!==0)r+=3
if((s&$.e3().a)!==0)r+=3
if((s&$.e4().a)!==0)r+=4
if((s&$.bM().a)!==0)++r
return(s&$.b4().a)!==0?r+4:r},
hD:function(a){var s,r=$.a9(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ax()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e3()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b4()
if((q&r.a)!==0)if(s===a)return r
return $.mX()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aE))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.a9().a)!==0)s.push("Pos")
if((r&$.aG().a)!==0)s.push("Norm")
if((r&$.b5().a)!==0)s.push("Binm")
if((r&$.ax().a)!==0)s.push("Txt2D")
if((r&$.bq().a)!==0)s.push("TxtCube")
if((r&$.e3().a)!==0)s.push("Clr3")
if((r&$.e4().a)!==0)s.push("Clr4")
if((r&$.bM().a)!==0)s.push("Weight")
if((r&$.b4().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.p(s,"|")}}
D.hK.prototype={}
D.bu.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
B:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.P(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.B(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.P(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.B(p,b)
s=p===!0||s}return s},
w:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.S():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.F(P.ik(p,!0,t.h2),new D.i3(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.F(r,new D.i4(s))}return!0},
dF:function(){return this.w(null)},
ai:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.w(s)}}}}
D.i3.prototype={
$1:function(a){a.$1(this.a)},
$S:23}
D.i4.prototype={
$1:function(a){a.$1(this.a)},
$S:23}
D.S.prototype={}
D.aM.prototype={}
D.aN.prototype={}
D.t.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.w(this.d)+" => "+H.w(this.e)}}
X.cv.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cv))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eu.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eu))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ig.prototype={}
X.cV.prototype={}
X.im.prototype={
bb:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.U(o.a+b.a,o.b+b.b)
o=q.a.gaZ()
s=$.a7
if(s==null)s=$.a7=new V.U(0,0)
r=q.x
q.z=new P.X(p,!1)
q.x=n
return new X.c_(a,s,r,o,n)},
cC:function(a,b){this.r=a.a
return!1},
bn:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bm:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.bb(a,b))
return!0},
im:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaZ()
r=this.x
Date.now()
q.w(new X.c0(new V.a2(a.a,a.b),s,r))
return!0},
fN:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.w(new X.cV(c,q.a.gaZ(),b))
q.y=new P.X(s,!1)
s=$.a7
q.x=s==null?$.a7=new V.U(0,0):s}}
X.ae.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ae))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.p(s,"+")}}
X.c_.prototype={}
X.iH.prototype={
bZ:function(a,b,c){var s=this,r=new P.X(Date.now(),!1),q=s.a.gaZ(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c_(a,p,o,q,b)},
cC:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.w(this.bZ(a,b,!0))
return!0},
bn:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.w(r.bZ(a,b,!0))
return!0},
bm:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.bZ(a,b,!1))
return!0},
io:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaZ()
Date.now()
r.w(new X.c0(new V.a2(a.a,a.b),s,b))
return!0}}
X.c0.prototype={}
X.eS.prototype={}
X.dg.prototype={}
X.j9.prototype={
bb:function(a,b){var s,r,q,p,o=this,n=new P.X(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a7
if(r==null){r=new V.U(0,0)
$.a7=r
s=r}else s=r}r=o.a.gaZ()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dg(q,p,r,s)},
il:function(a){var s=this.b
if(s==null)return!1
s.w(this.bb(a,!0))
return!0},
ij:function(a){var s=this.c
if(s==null)return!1
s.w(this.bb(a,!0))
return!0},
ik:function(a){var s=this.d
if(s==null)return!1
s.w(this.bb(a,!1))
return!0}}
X.fr.prototype={
gbi:function(a){var s=this.b
return s==null?this.b=new X.ig(new X.ae(!1,!1,!1),P.lt(t.S)):s},
gas:function(){var s,r=this.c
if(r==null){r=$.a7
if(r==null){r=$.a7=new V.U(0,0)
s=r}else s=r
r=this.c=new X.iH(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gaq:function(){var s=this.d
if(s==null){s=$.a7
if(s==null)s=$.a7=new V.U(0,0)
s=this.d=new X.im(this,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return s},
gb6:function(){var s,r=this.e
if(r==null){r=$.a7
if(r==null){r=$.a7=new V.U(0,0)
s=r}else s=r
r=this.e=new X.j9(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gaZ:function(){var s=this.a
return V.iL(0,0,C.j.gdu(s).c,C.j.gdu(s).d)},
d_:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eu(p,new X.ae(s,r,q))},
aV:function(a){var s,r,q=this.gbi(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.ae(p,s,r)},
c6:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gbi(this)
r=a.altKey
q=a.shiftKey
p.c=new X.ae(s,r===!0,q===!0)},
aM:function(a){var s,r,q,p
if(a==null){s=$.a7
return s==null?$.a7=new V.U(0,0):s}s=this.a.getBoundingClientRect()
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
bd:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a2(r,s)},
c2:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.a_(n)
m=o.pageY
m.toString
C.d.a_(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.a_(l)
l=o.pageY
l.toString
l=C.d.a_(l)
k=j.top
k.toString
s.push(new V.U(n-m,l-k))}return s},
aJ:function(a){var s,r,q,p
if(a==null)return new X.cv(0,new X.ae(!1,!1,!1))
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
return new X.cv(s,new X.ae(r,q,p))},
c_:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fH:function(a){return this.f=!0},
fo:function(a){return this.f=!1},
fv:function(a){if(this.f&&this.c_(a))a.preventDefault()},
fL:function(a){var s,r,q=this
if(!q.f)return
s=q.d_(a)
r=q.gbi(q)
r.c=s.b
r.d.l(0,s.a)},
fJ:function(a){var s,r,q=this
if(!q.f)return
s=q.d_(a)
r=q.gbi(q)
r.c=s.b
r.d.B(0,s.a)},
fP:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aV(a)
if(p.x){s=p.aJ(a)
r=p.bd(a)
if(p.gaq().cC(s,r))a.preventDefault()
return}s=p.aJ(a)
q=p.aM(a)
if(p.gas().cC(s,q))a.preventDefault()},
fT:function(a){var s,r,q,p=this
p.aV(a)
s=p.aJ(a)
if(p.x){r=p.bd(a)
if(p.gaq().bn(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gas().bn(s,q))a.preventDefault()},
fB:function(a){var s,r,q,p=this
if(!p.c_(a)){p.aV(a)
s=p.aJ(a)
if(p.x){r=p.bd(a)
if(p.gaq().bn(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gas().bn(s,q))a.preventDefault()}},
fR:function(a){var s,r,q,p=this
p.aV(a)
s=p.aJ(a)
if(p.x){r=p.bd(a)
if(p.gaq().bm(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gas().bm(s,q))a.preventDefault()},
fz:function(a){var s,r,q,p=this
if(!p.c_(a)){p.aV(a)
s=p.aJ(a)
if(p.x){r=p.bd(a)
if(p.gaq().bm(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gas().bm(s,q))a.preventDefault()}},
fV:function(a){var s,r,q=this
q.aV(a)
s=new V.a2(C.A.ghQ(a),C.A.ghR(a)).A(0,q.Q)
if(q.x){if(q.gaq().im(s))a.preventDefault()
return}r=q.aM(a)
if(q.gas().io(s,r))a.preventDefault()},
fX:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aJ(q.y)
r=q.aM(q.y)
q.gaq().fN(s,r,p)}},
hc:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c6(a)
s=r.c2(a)
if(r.gb6().il(s))a.preventDefault()},
h8:function(a){var s
this.c6(a)
s=this.c2(a)
if(this.gb6().ij(s))a.preventDefault()},
ha:function(a){var s
this.c6(a)
s=this.c2(a)
if(this.gb6().ik(s))a.preventDefault()}}
D.cS.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.C():s},
ge2:function(){var s=this.z
return s==null?this.z=D.C():s},
aj:function(a){var s=this.y
return s==null?null:s.w(a)},
d7:function(a){var s=this.z
return s==null?null:s.w(a)},
fM:function(){return this.d7(null)},
fZ:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eX(a[r]))return!1
return!0},
fi:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gd6(),q=this.r,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.Q
if(m==null)m=n.Q=new D.bu()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aj(new D.aM())},
h2:function(a,b){var s,r,q,p
for(s=b.gS(b),r=this.gd6(),q=this.e;s.t();){p=s.gC(s)
C.b.B(q,p)
p.gm().B(0,r)}this.aj(new D.aN())},
eX:function(a){var s=C.b.P(this.r,a)
return s}}
D.c3.prototype={
aj:function(a){var s=this.Q
return s==null?null:s.w(a)},
eI:function(){return this.aj(null)},
$iar:1}
V.W.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.ao.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ao))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.i1.prototype={}
V.eB.prototype={
a6:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eB))return!1
s=b.a
$.z().toString
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
V.aR.prototype={
a6:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
i3:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.z().toString
if(Math.abs(b3-0)<1e-9)return V.ad()
s=1/b3
r=-l
q=-a2
return V.aS((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
A:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aS(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
br:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.V(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aR))return!1
s=b.a
$.z().toString
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
i:function(a){return this.v()},
G:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cr(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cr(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cr(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cr(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
v:function(){return this.G("")}}
V.U.prototype={
aH:function(a){return new V.a2(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
v:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.V.prototype={
Y:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
b9:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
v:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.aW.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aW))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.eU.prototype={
gb3:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eU))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.a2.prototype={
bj:function(a){return Math.sqrt(this.ak(this))},
ak:function(a){return this.a*a.a+this.b*a.b},
A:function(a,b){return new V.a2(this.a*b,this.b*b)},
aB:function(a,b){var s
$.z().toString
if(Math.abs(b-0)<1e-9){s=$.bI
return s==null?$.bI=new V.a2(0,0):s}return new V.a2(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.E.prototype={
bj:function(a){return Math.sqrt(this.ak(this))},
ak:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cA:function(a,b){return new V.E(V.l9(this.a,a.a,b),V.l9(this.b,a.b,b),V.l9(this.c,a.c,b))},
M:function(){var s=this,r=Math.sqrt(s.ak(s))
if(r===1)return s
return s.aB(0,r)},
bf:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
Y:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
b7:function(a){return new V.E(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
aB:function(a,b){$.z().toString
if(Math.abs(b-0)<1e-9)return V.du()
return new V.E(this.a/b,this.b/b,this.c/b)},
e1:function(){$.z().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
v:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.bJ.prototype={
bj:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bJ))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
U.hP.prototype={
bS:function(a){var s=V.kr(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.C():s},
N:function(a){var s=this.y
return s==null?null:s.w(a)},
ses:function(a,b){},
se5:function(a){var s,r=this,q=r.b
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bS(s)}r.N(new D.t("maximumLocation",q,r.b))}},
se7:function(a){var s,r=this,q=r.c
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bS(s)}r.N(new D.t("minimumLocation",q,r.c))}},
sac:function(a,b){var s,r=this
b=r.bS(b)
s=r.d
$.z().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.N(new D.t("location",s,b))}},
se6:function(a){var s,r,q=this,p=q.e
$.z().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.N(new D.t("maximumVelocity",p,a))}},
sae:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.N(new D.t("velocity",r,a))}},
sdw:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.N(new D.t("dampening",s,a))}},
ad:function(a,b){var s,r,q,p=this,o=p.f
$.z().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sac(0,p.d+s*b)
o=p.x
$.z().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sae(s)}}}
U.cy.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.C():s},
aG:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bT.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.C():s},
N:function(a){var s=this.e
return s==null?null:s.w(a)},
aD:function(){return this.N(null)},
eK:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbt(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gm()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.N(new D.aM())},
h0:function(a,b){var s,r
for(s=b.gS(b),r=this.gbt();s.t();)s.gC(s).gm().B(0,r)
this.N(new D.aN())},
aG:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.aa(o,o.length),n=H.P(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aG(0,b,c)
s=s==null?q:q.A(0,s)}}p.f=s==null?V.ad():s
o=p.e
if(o!=null)o.ai(0)}return p.f},
n:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(p>=q.length)return H.c(q,p)
if(!J.H(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia1:1}
U.a1.prototype={}
U.da.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.C():s},
N:function(a){var s=this.y
return s==null?null:s.w(a)},
seu:function(a){var s
a=V.kr(a,0,6.283185307179586)
s=this.a
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.N(new D.t("yaw",s,a))}},
seh:function(a,b){var s
b=V.kr(b,0,6.283185307179586)
s=this.b
$.z().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.N(new D.t("pitch",s,b))}},
sel:function(a){var s
a=V.kr(a,0,6.283185307179586)
s=this.c
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.N(new D.t("roll",s,a))}},
aG:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.seu(q.a+q.d*b.y)
q.seh(0,q.b+q.e*b.y)
q.sel(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.aS(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).A(0,V.lx(q.b)).A(0,V.lw(q.a))
p=q.y
if(p!=null)p.ai(0)}return q.x},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.da))return!1
s=q.a
r=b.a
$.z().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+"], ["+V.x(s.d,3,0)+", "+V.x(s.e,3,0)+", "+V.x(s.f,3,0)+"]"}}
U.ds.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.C():s},
N:function(a){var s=this.fx
return s==null?null:s.w(a)},
aD:function(){return this.N(null)},
cc:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gas()
r=s.b
s=r==null?s.b=D.C():r
s.l(0,q.gf9())
s=a.gas()
r=s.d
s=r==null?s.d=D.C():r
s.l(0,q.gfb())
s=a.gas()
r=s.c
s=r==null?s.c=D.C():r
s.l(0,q.gfd())
s=a.gaq()
r=s.f
s=r==null?s.f=D.C():r
s.l(0,q.gf5())
s=a.gaq()
r=s.d
s=r==null?s.d=D.C():r
s.l(0,q.gf7())
s=a.gb6()
r=s.b
s=r==null?s.b=D.C():r
s.l(0,q.ghu())
s=a.gb6()
r=s.d
s=r==null?s.d=D.C():r
s.l(0,q.ghs())
s=a.gb6()
r=s.c
s=r==null?s.c=D.C():r
s.l(0,q.ghq())
return!0},
aU:function(a){return new V.a2(a.a,a.b)},
fa:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fc:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aH(a.d)
if(s.ak(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aU(a.y.aH(r).A(0,2).aB(0,s.gb3()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sae(0)
p.sae(0)
n.dx=n.aU(a.z.aH(r).A(0,2).aB(0,s.gb3()))
n.aD()},
fe:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ak(s)>0.0001){r.c.sae(-r.dx.a*10*2.5)
r.b.sae(-r.dx.b*10*2.5)
r.aD()}},
f6:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f8:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aU(a.y.aH(r).A(0,2).aB(0,s.gb3()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sae(0)
p.sae(0)
n.dx=n.aU(a.z.aH(r).A(0,2).aB(0,s.gb3()))
n.aD()},
hv:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ht:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aH(a.d)
if(s.ak(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aU(a.y.aH(r).A(0,2).aB(0,s.gb3()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sae(0)
p.sae(0)
n.dx=n.aU(a.z.aH(r).A(0,2).aB(0,s.gb3()))
n.aD()},
hr:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ak(s)>0.0001){r.c.sae(-r.dx.a*10*2.5)
r.b.sae(-r.dx.b*10*2.5)
r.aD()}},
aG:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.ad(0,s)
p=r.b
p.ad(0,s)
r.fr=V.lw(p.d).A(0,V.lx(q.d))}return r.fr},
$ia1:1}
U.dt.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.C():s},
N:function(a){var s=this.r
return s==null?null:s.w(a)},
cc:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gas()
r=s.e
s=r==null?s.e=D.C():r
r=this.gff()
s.l(0,r)
s=a.gaq()
q=s.e;(q==null?s.e=D.C():q).l(0,r)
return!0},
fg:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gbi(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.N(new D.t("zoom",r,q))}},
aG:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aS(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia1:1}
M.cx.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.C():s},
T:function(a){var s=this.r
return s==null?null:s.w(a)},
aI:function(){return this.T(null)},
h4:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gV(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p].gm()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.T(new D.aM())},
h6:function(a,b){var s,r
for(s=b.gS(b),r=this.gV();s.t();)s.gC(s).gm().B(0,r)
this.T(new D.aN())},
a3:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.aa(s,s.length),r=H.P(s).c;s.t();)r.a(s.d).a3(a)
q.f=!1},
$ial:1}
M.cB.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.C():s},
T:function(a){var s=this.r
return s==null?null:s.w(a)},
aI:function(){return this.T(null)},
saO:function(a,b){var s,r,q=this
if(b==null)b=X.kB(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().B(0,q.gV())
r=q.c
q.c=b
b.gm().l(0,q.gV())
q.T(new D.t("target",r,q.c))}},
sau:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().B(0,r.gV())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gV())
r.T(new D.t("technique",s,r.d))}},
a3:function(a){var s,r,q=this
a.cE(q.d)
s=q.c
if(s!=null)s.W(a)
if(q.b!=null){a.cy.bH(V.ad())
r=V.ad()
a.db.bH(r)}s=q.d
if(s!=null)s.ad(0,a)
s=q.e
s.ad(0,a)
s.a3(a)
if(q.b!=null){a.cy.bp()
a.db.bp()}s=q.c
if(s!=null)s.aF(a)
a.cD()},
$ial:1}
M.cH.prototype={
T:function(a){var s=this.y
return s==null?null:s.w(a)},
aI:function(){return this.T(null)},
fq:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gV(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bu()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.T(new D.aM())},
ft:function(a,b){var s,r
for(s=b.gS(b),r=this.gV();s.t();)s.gC(s).gm().B(0,r)
this.T(new D.aN())},
scj:function(a){var s,r,q=this
if(a==null)a=X.lz()
s=q.b
if(s!==a){if(s!=null)s.gm().B(0,q.gV())
r=q.b
q.b=a
a.gm().l(0,q.gV())
q.T(new D.t("camera",r,q.b))}},
saO:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().B(0,r.gV())
s=r.c
r.c=b
b.gm().l(0,r.gV())
r.T(new D.t("target",s,r.c))}},
sau:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().B(0,r.gV())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gV())
r.T(new D.t("technique",s,r.d))}},
gm:function(){var s=this.y
return s==null?this.y=D.C():s},
a3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
a.cE(h.d)
s=h.c
if(s!=null)s.W(a)
s=h.b
if(s!=null){r=a.c
q=a.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.aS(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bH(k)
j=$.mK()
i=s.b
if(i!=null)j=i.aG(0,a,s).A(0,j)
a.db.bH(j)}s=h.d
if(s!=null)s.ad(0,a)
for(s=h.e.a,r=new J.aa(s,s.length),q=H.P(r).c;r.t();)q.a(r.d).ad(0,a)
for(s=new J.aa(s,s.length),r=H.P(s).c;s.t();)r.a(s.d).a3(a)
if(h.b!=null){a.cy.bp()
a.db.bp()}s=h.c
if(s!=null)s.aF(a)
a.cD()},
$ial:1}
M.cK.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.C():s},
T:function(a){var s=this.b
return s==null?null:s.w(a)},
aI:function(){return this.T(null)},
saY:function(a){var s
if(a!=null){s=this.d
if(s!=null)s.saY(a)
s=this.f
if(s!=null)s.saY(a)}},
a3:function(a){var s=this.e
if(s!=null)s.a3(a)
s=this.r
if(s!=null)s.a3(a)},
$ial:1}
A.eb.prototype={}
A.hC.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hS:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
bA:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ai.prototype={
gaA:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.ai))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.cD.prototype={}
A.cL.prototype={
ah:function(a,b){if(b!=null&&b.d)if(a!=null)a.cM(b)}}
A.ia.prototype={
aS:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.c(c,0)
s=c[0]
$.z().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.c(d,0)
q=d[0]
d=C.b.cP(d,1)
c=C.b.cP(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.w(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.c(c,p)
a.a+="  offset = blurScale * "+H.w(c[p])+";\n"
if(p>=d.length)return H.c(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.w(d[p])+";\n"
if(p>=d.length)return H.c(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.w(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.cY.prototype={
eE:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.Z(""),d1=c9.fr
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
A.pb(c9,d0)
A.pd(c9,d0)
A.pc(c9,d0)
A.pf(c9,d0)
A.pg(c9,d0)
A.pe(c9,d0)
A.ph(c9,d0)
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
c4.bC(0,s.charCodeAt(0)==0?s:s,A.pa(c9))
c4.y=c4.ga4(c4).h(0,"posAttr")
c4.Q=c4.ga4(c4).h(0,"normAttr")
c4.z=c4.ga4(c4).h(0,"binmAttr")
c4.ch=c4.ga4(c4).h(0,"txt2DAttr")
c4.cx=c4.ga4(c4).h(0,"txtCubeAttr")
c4.cy=c4.ga4(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gu().J(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gu().J(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gu().J(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gu().J(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gu().J(0,"viewMat"))
if(c9.x1)c4.go=t.Q.a(c4.gu().J(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gu().J(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gu().J(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b0
if(s>0){c4.k2=t.y.a(c4.gu().J(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.f(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gu().J(0,"emissionClr"))
if(d1.b)c4.r1=t.G.a(c4.gu().J(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gu().J(0,"ambientClr"))
if(d1.b)c4.ry=t.G.a(c4.gu().J(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gu().J(0,"diffuseClr"))
if(d1.b)c4.y1=t.G.a(c4.gu().J(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.b0=t.g.a(c4.gu().J(0,"invDiffuseClr"))
if(d1.b)c4.b1=t.G.a(c4.gu().J(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(s||d1.b||!1){c4.dJ=t.v.a(c4.gu().J(0,"shininess"))
if(s)c4.dH=t.g.a(c4.gu().J(0,"specularClr"))
if(d1.b)c4.dI=t.G.a(c4.gu().J(0,"specularTxt"))}if(c9.f.b)c4.dK=t.G.a(c4.gu().J(0,"bumpTxt"))
if(c9.db){c4.dL=t.bz.a(c4.gu().J(0,"envSampler"))
d1=c9.r
if(d1.a)c4.dM=t.g.a(c4.gu().J(0,"reflectClr"))
if(d1.b)c4.dN=t.G.a(c4.gu().J(0,"reflectTxt"))
d1=c9.x
s=d1.a
if(s||d1.b||!1){c4.dO=t.v.a(c4.gu().J(0,"refraction"))
if(s)c4.dP=t.g.a(c4.gu().J(0,"refractClr"))
if(d1.b)c4.dQ=t.G.a(c4.gu().J(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.dR=t.v.a(c4.gu().J(0,"alpha"))
if(d1.b)c4.dS=t.G.a(c4.gu().J(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.co=P.R(r,t.W)
c4.cp=P.R(r,t.b)
for(r=t.y,q=t.g,p=t.v,o=t.Y,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.dl(l,c,b,a4,a3,a2))}c4.cp.k(0,i,g)
f=c4.co
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.k(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cq=P.R(r,t.W)
c4.cr=P.R(r,t.c)
for(r=t.y,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
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
g.push(new A.dm(a7,a6,a5,l,c,a8))}c4.cr.k(0,i,g)
f=c4.cq
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.k(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cs=P.R(r,t.W)
c4.ct=P.R(r,t.m)
for(r=t.y,q=t.g,p=t.Q,o=t.bz,f=t.F,e=t.v,d=t.E,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.dp(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.ct.k(0,i,g)
a9=c4.cs
m=c4.r
if(m==null)H.h(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.f(c7+b0+c8))
a9.k(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cu=P.R(s,t.W)
c4.cv=P.R(s,t.R)
for(s=t.y,r=t.g,q=t.v,p=t.F,o=t.G,f=t.J,k=0;k<c9.length;c9.length===d1||(0,H.q)(c9),++k){j=c9[k]
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
g.push(new A.dr(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cv.k(0,i,g)
e=c4.cu
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
e.k(0,i,s.a(l))}}}},
ah:function(a,b){if(b!=null&&b.d)if(a!=null)a.cM(b)},
hk:function(a,b){}}
A.b7.prototype={
i:function(a){return"barLight"+this.a}}
A.ba.prototype={
i:function(a){return"dirLight"+this.a}}
A.bd.prototype={
i:function(a){return"pointLight"+this.a}}
A.bg.prototype={
i:function(a){return"spotLight"+this.a}}
A.ir.prototype={
i:function(a){return this.b1}}
A.dl.prototype={}
A.dm.prototype={}
A.dp.prototype={}
A.dr.prototype={}
A.bf.prototype={
bC:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.d0(b,35633)
r=n.d0(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaK(),s)
q.attachShader(n.gaK(),r)
q.linkProgram(n.gaK())
if(!H.mj(q.getProgramParameter(n.gaK(),35714))){o=q.getProgramInfoLog(n.gaK())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.f("Failed to link shader: "+o))}n.hm()
n.ho()},
ga4:function(a){var s=this.f
if(s==null)throw H.d(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gu:function(){var s=this.r
if(s==null)throw H.d(P.f(u.C))
return s},
gaK:function(){var s=this.e
if(s==null)throw H.d(P.f(u.F))
return s},
W:function(a){a.a.useProgram(this.e)
this.ga4(this).hS()},
d0:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mj(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.d(P.f('Error compiling shader "'+H.w(q)+'": '+s))}return q},
hm:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.hx(l.getProgramParameter(o.gaK(),35721))
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
m.push(new A.eb(l,q,p))}o.f=new A.hC(m)},
ho:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.hx(j.getProgramParameter(m.gaK(),35718))
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
k.push(m.hO(o,n,q,p))}m.r=new A.je(k)},
aT:function(a,b,c){var s=this.a
if(a===1)return new A.bE(s,b,c)
else return A.kN(s,this.e,b,a,c)},
eZ:function(a,b,c){var s=this.a
if(a===1)return new A.bH(s,b,c)
else return A.kN(s,this.e,b,a,c)},
f_:function(a,b,c){var s=this.a
if(a===1)return new A.dq(s,b,c)
else return A.kN(s,this.e,b,a,c)},
bv:function(a,b){return new P.fI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hO:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aT(b,c,d)
case 5121:return s.aT(b,c,d)
case 5122:return s.aT(b,c,d)
case 5123:return s.aT(b,c,d)
case 5124:return s.aT(b,c,d)
case 5125:return s.aT(b,c,d)
case 5126:return new A.di(s.a,c,d)
case 35664:return new A.bF(s.a,c,d)
case 35665:return new A.dj(s.a,c,d)
case 35666:return new A.dk(s.a,c,d)
case 35667:return new A.fi(s.a,c,d)
case 35668:return new A.fj(s.a,c,d)
case 35669:return new A.fk(s.a,c,d)
case 35674:return new A.fl(s.a,c,d)
case 35675:return new A.dn(s.a,c,d)
case 35676:return new A.bG(s.a,c,d)
case 35678:return s.eZ(b,c,d)
case 35680:return s.f_(b,c,d)
case 35670:throw H.d(s.bv("BOOL",c))
case 35671:throw H.d(s.bv("BOOL_VEC2",c))
case 35672:throw H.d(s.bv("BOOL_VEC3",c))
case 35673:throw H.d(s.bv("BOOL_VEC4",c))
default:throw H.d(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.bR.prototype={
i:function(a){return this.b}}
A.df.prototype={
eG:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.C,b="Required uniform value, ",a=", was not defined or used in shader."
""+"attribute vec3 posAttr;\n"
""+"attribute vec3 posAttr;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n"
s=""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"
d.bC(0,s.charCodeAt(0)==0?s:s,A.nT(a0,a1))
d.x=d.ga4(d).h(0,"posAttr")
d.y=t.y.a(d.gu().J(0,"txtCount"))
d.z=t.F.a(d.gu().J(0,"backClr"))
for(s=t.W,r=t.ch,q=d.dy,p=d.dx,o=d.db,n=d.cy,m=t.em,l=d.cx,k=t.cI,j=d.ch,i=d.Q,h=0;h<a0;++h){g=d.r
if(g==null)H.h(P.f(c))
f="txt"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
i.push(k.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="clrMat"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
j.push(m.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="srcLoc"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
l.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="srcSize"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
n.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="destLoc"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
o.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="destSize"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
p.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="flip"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
q.push(s.a(e))}}}
A.a0.prototype={}
A.je.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
J:function(a,b){var s=this.h(0,b)
if(s==null)throw H.d(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.v()},
v:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.bE.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fi.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fj.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fk.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fh.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.di.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.bF.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dj.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dk.prototype={
ex:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
ew:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.fl.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dn.prototype={
a8:function(a){var s=new Float32Array(H.cm(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.bG.prototype={
a8:function(a){var s=new Float32Array(H.cm(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.bH.prototype={
cM:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dq.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jV.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cA(q.b,b).cA(q.d.cA(q.c,b),c)
a.sac(0,new V.V(p.a,p.b,p.c))
a.sen(p.M())
q=1-b
s=1-c
a.sdq(new V.aW(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
r.f.$3(a,b,c)},
$S:12}
F.kq.prototype={
$2:function(a,b){return 0},
$S:16}
F.kp.prototype={
$3:function(a,b,c){var s,r,q,p=this.b.$2(b,c)
if(typeof p!=="number")return H.mw(p)
s=a.f
if(s!=null)r=new V.E(s.a,s.b,s.c)
else{q=$.lX
if(q==null){q=new V.E(0,0,1)
$.lX=q
r=q}else r=q}p=r.M().A(0,this.a+p)
a.sac(0,new V.V(p.a,p.b,p.c))},
$S:12}
F.k9.prototype={
$2:function(a,b){return 0},
$S:16}
F.k8.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sac(0,new V.V(q,p,this.a.$2(b,c)))
a.sen(new V.E(q,p,1).M())
s=1-b
r=1-c
a.sdq(new V.aW(b*c,2+s*c,4+b*r,6+s*r))},
$S:12}
F.aq.prototype={
aQ:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.d(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.d(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.c7(a)
s.c8(b)
s.hl(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a5()}},
bg:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.B(r.gR().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a5()}}s.c3()
s.c4()
s.hf()},
c7:function(a){this.a=a
a.gR().b.push(this)},
c8:function(a){this.b=a
a.gR().c.push(this)},
hl:function(a){this.c=a
a.gR().d.push(this)},
c3:function(){var s=this.a
if(s!=null)C.b.B(s.gR().b,this)
this.a=null},
c4:function(){var s=this.b
if(s!=null)C.b.B(s.gR().c,this)
this.b=null},
hf:function(){var s=this.c
if(s!=null)C.b.B(s.gR().d,this)
this.c=null},
eS:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.du()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.e1())return p
return q.M()},
eU:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b9(0,n)
q=new V.E(o.a,o.b,o.c).M()
o=r.b9(0,n)
return q.bf(new V.E(o.a,o.b,o.c).M()).M()},
ci:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eS()
if(s==null){s=q.eU()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a5()}return!0},
eR:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.du()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.e1())return p
return q.M()},
eT:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.z().toString
if(Math.abs(p-0)<1e-9){j=b.b9(0,e)
o=new V.E(j.a,j.b,j.c).M()
if(q.a-r.a<0)o=o.b7(0)}else{n=(j-s.b)/p
j=b.b9(0,e)
j=new V.V(j.a*n,j.b*n,j.c*n).Y(0,e).b9(0,h)
o=new V.E(j.a,j.b,j.c).M()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b7(0)}m=l.d
if(m!=null){m=m.M()
o=m.bf(o).M().bf(m).M()}return o},
cf:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eR()
if(s==null){s=q.eT()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a5()}return!0},
ghJ:function(a){var s=this
if(J.H(s.a,s.b))return!0
if(J.H(s.b,s.c))return!0
if(J.H(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
G:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gH(p)
p=a+C.a.at(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gH(o)
p=p+C.a.at(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gH(o)
s=p+C.a.at(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.v()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.v()
return s+((p==null?"-":p)+"}")},
v:function(){return this.G("")}}
F.i5.prototype={}
F.iX.prototype={
bk:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gH(q)
s=c.a
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.b
if(q==(s==null?r:s.gH(s))){q=b.c
q=q==null?r:q.gH(q)
s=c.c
q=q==(s==null?r:s.gH(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gH(q)
s=c.b
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.c
if(q==(s==null?r:s.gH(s))){q=b.c
q=q==null?r:q.gH(q)
s=c.a
q=q==(s==null?r:s.gH(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gH(q)
s=c.c
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.a
if(q==(s==null?r:s.gH(s))){q=b.c
q=q==null?r:q.gH(q)
s=c.b
q=q==(s==null?r:s.gH(s))}else q=!1
return q}else return!1}}}}
F.ew.prototype={
eD:function(a,b){var s=this,r=a.a
if(r==null)throw H.d(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.d(P.f("May not create a line with vertices attached to different shapes."))
s.c7(a)
s.c8(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gab(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a5()}},
bg:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.B(r.gab(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a5()}}s.c3()
s.c4()},
c7:function(a){this.a=a
a.gab(a).b.push(this)},
c8:function(a){this.b=a
a.gab(a).c.push(this)},
c3:function(){var s=this.a
if(s!=null)C.b.B(s.gab(s).b,this)
this.a=null},
c4:function(){var s=this.b
if(s!=null)C.b.B(s.gab(s).c,this)
this.b=null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
G:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gH(s)
s=a+C.a.at(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gH(r)
return s+C.a.at(C.c.i(r==null?-1:r),0)},
v:function(){return this.G("")}}
F.ih.prototype={}
F.jd.prototype={
bk:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gH(q)
s=c.a
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.b
return q==(s==null?r:s.gH(s))}else{q=b.a
q=q==null?r:q.gH(q)
s=c.b
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.a
return q==(s==null?r:s.gH(s))}else return!1}}}
F.eR.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gH(s)
return a+C.a.at(C.c.i(s),0)},
v:function(){return this.G("")}}
F.iS.prototype={
gU:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbo:function(a){var s=this.b
return s==null?this.b=new F.bC(this,H.b([],t.q)):s},
gab:function(a){var s=this.c
return s==null?this.c=new F.dc(this,H.b([],t.L)):s},
gR:function(){var s=this.d
return s==null?this.d=new F.c6(this,H.b([],t.u)):s},
gm:function(){var s=this.e
return s==null?this.e=D.C():s},
cB:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gU().Z()
s=b.gU().c.length
for(a0=a1.gU().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.l(0,o.hM())}b.gU().Z()
for(a0=a1.gbo(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Z()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bC(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).l(0,h)
l=new F.eR()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dv(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bC(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.w(a)}}}for(a0=a1.gab(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Z()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Z()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dc(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).l(0,e)
new F.ew().eD(f,e)}for(a0=a1.gR().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Z()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Z()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Z()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.c6(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).l(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).l(0,c)
new F.aq().aQ(f,e,c)}a0=b.e
if(a0!=null)a0.ai(0)},
ay:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gR().ay()||!1
if(!r.gU().ay())s=!1
q=r.e
if(q!=null)q.ai(0)
return s},
hC:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.e
if(a1!=null)++a1.d
for(s=a0.gU().c.length-1,a1=t.k,r=a2.b,q=a2.a,p=q.length,o=a2.c,n=r-1,m=o-1;s>=0;--s){l=a0.a
l=(l==null?a0.a=new F.y(a0,H.b([],a1)):l).c
if(s>=l.length)return H.c(l,s)
k=l[s]
j=k.f
i=k.r
h=k.y
if(j!=null&&i!=null&&h!=null){g=C.d.bh(h.a*n)
f=C.d.bh(h.b*m)
g=g>=0?C.c.aC(g,r):r+C.c.aC(g,r)
e=(g+(f>=0?C.c.aC(f,o):o+C.c.aC(f,o))*r)*4
if(e<0||e>=p)return H.c(q,e)
l=q[e]
d=e+1
if(d>=p)return H.c(q,d)
d=q[d]
c=e+2
if(c>=p)return H.c(q,c)
c=q[c]
b=e+3
if(b>=p)return H.c(q,b)
l/=255
d/=255
c/=255
b=q[b]/255
if(l<0)l=0
else if(l>1)l=1
if(d<0)d=0
else if(d>1)d=1
if(c<0)c=0
else if(c>1)c=1
if(!(b<0))if(b>1)b=1
a=(l+d+c)*a3/3
l=i.a
d=i.b
c=i.c
c=new V.V(j.a+l*a,j.b+d*a,j.c+c*a)
if(!J.H(k.f,c)){k.f=c
l=k.a
if(l!=null){l=l.e
if(l!=null)l.w(null)}}}}a1=a0.e
if(a1!=null)a1.ai(0)},
iF:function(a){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
for(s=p.gU().c.length-1,o=a.a,r=t.k;s>=0;--s){q=p.a
q=(q==null?p.a=new F.y(p,H.b([],r)):q).c
if(s>=q.length)return H.c(q,s)
q=q[s]
if((o&$.a9().a)===0)q.f=null
if((o&$.aG().a)===0)q.r=null
if((o&$.b5().a)===0)q.x=null
if((o&$.ax().a)===0)q.y=null
if((o&$.bq().a)===0)q.z=null
if((o&$.ld().a)===0)q.Q=null
if((o&$.bM().a)===0)q.ch=0
if((o&$.b4().a)===0)q.cx=null}o=p.e
if(o!=null)o.ai(0)},
iE:function(a){var s,r,q=this,p=q.e
if(p!=null)++p.d
for(s=q.gR().b.length-1,p=t.u;s>=0;--s){r=q.d
r=(r==null?q.d=new F.c6(q,H.b([],p)):r).b
if(s>=r.length)return H.c(r,s)
r[s].d=null}p=q.e
if(p!=null)p.ai(0)},
i6:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gU().c
s=H.b(m.slice(0),H.hw(m))
for(m=t.k;s.length!==0;){r=C.b.ghX(s)
C.b.cG(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(a.bk(0,r,o)){q.push(o)
C.b.cG(s,p)}}if(q.length>1)b.cB(q)}n.gU().Z()
n.gab(n).cH()
n.gR().cH()
n.gbo(n).ir()
n.gab(n).cI(new F.jd())
n.gR().cI(new F.iX())
m=n.e
if(m!=null)m.ai(0)},
by:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.gU().c.length,a=$.a9(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.aG().a)!==0)++a1
if((a0&$.b5().a)!==0)++a1
if((a0&$.ax().a)!==0)++a1
if((a0&$.bq().a)!==0)++a1
if((a0&$.e3().a)!==0)++a1
if((a0&$.e4().a)!==0)++a1
if((a0&$.bM().a)!==0)++a1
if((a0&$.b4().a)!==0)++a1
s=a3.gcO(a3)
r=P.ey(b*s,0,!1,t.gR)
c.a=0
q=P.nt(a1,new F.iT(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cm(r)),35044)
a.bindBuffer(d,e)
p=new Z.aJ(new Z.ft(d,a0),H.b([],t.fv),q,a3)
if(f.gbo(f).b.length!==0){o=H.b([],t.t)
a0=t.q
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.bC(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.c(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).Z()}l=l.e}o.push(l==null?0:l);++m}i=Z.kP(a,34963,o)
p.b.push(new Z.bV(0,o.length,i))}if(f.gab(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.dc(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.c(l,m)
h=l[m]
l=h.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).Z()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).Z()}l=l.e}o.push(l==null?0:l);++m}i=Z.kP(a,34963,o)
p.b.push(new Z.bV(1,o.length,i))}if(f.gR().b.length!==0){o=H.b([],t.t)
a0=t.u
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.c6(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.c(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).Z()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).Z()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).Z()}l=l.e}o.push(l==null?0:l);++m}i=Z.kP(a,34963,o)
p.b.push(new Z.bV(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gU().c.length!==0){q.push("Vertices:")
q.push(s.gU().G(r))}if(s.gbo(s).b.length!==0){q.push("Points:")
q.push(s.gbo(s).G(r))}if(s.gab(s).b.length!==0){q.push("Lines:")
q.push(s.gab(s).G(r))}if(s.gR().b.length!==0){q.push("Faces:")
q.push(s.gR().G(r))}return C.b.p(q,"\n")},
a5:function(){var s=this.e
return s==null?null:s.w(null)}}
F.iT.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hD(a),e=f.gcO(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.c(l,m)
k=l[m].i5(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.c(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bP(f,e,c*4,g.d)},
$S:41}
F.c6.prototype={
hA:function(a){var s,r,q,p,o,n,m,l=H.b([],t.u),k=a[0]
for(s=this.a,r=t.k,q=2;q<4;++q){p=a[q-1]
o=a[q]
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).l(0,k)
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).l(0,p)
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).l(0,o)
m=new F.aq()
m.aQ(k,p,o)
l.push(m)}return l},
hB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
for(s=this.a,r=t.k,q=b,p=0,o=!1,n=1;n<a;++n,++p,++q){for(m=o,l=1;l<b;++l,q=h){k=c.length
if(p<0||p>=k)return H.c(c,p)
j=c[p];++p
if(p>=k)return H.c(c,p)
i=c[p]
h=q+1
if(h<0||h>=k)return H.c(c,h)
g=c[h]
if(q<0||q>=k)return H.c(c,q)
f=c[q]
k=s.a
if(m){(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,g)
e=new F.aq()
e.aQ(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,f)
e=new F.aq()
e.aQ(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,f)
e=new F.aq()
e.aQ(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).l(0,j)
e=new F.aq()
e.aQ(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gj:function(a){return this.b.length},
cI:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gU().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.c(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.cf(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.cf(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bk(0,l,(o==null?n.d=new F.cf(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bg()
break}}}}},
cH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.c(s,r)
q=s[r]
if(q.ghJ(q))q.bg()}},
ay:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].ci())q=!1
return q},
cg:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cf())q=!1
return q},
i:function(a){return this.v()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.p(p,"\n")},
v:function(){return this.G("")}}
F.dc.prototype={
gj:function(a){return this.b.length},
cI:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gU().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.c(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.cg(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.cg(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bk(0,l,(o==null?n.c=new F.cg(H.b([],q),H.b([],q)):o).h(0,j))){l.bg()
break}}}}},
cH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.c(s,r)
q=s[r]
if(J.H(q.a,q.b))q.bg()}},
i:function(a){return this.v()},
G:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.c(q,s)
r.push(q[s].G(a+(""+s+". ")))}return C.b.p(r,"\n")},
v:function(){return this.G("")}}
F.bC.prototype={
gj:function(a){return this.b.length},
ir:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.c(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dv(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.c(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.B((n==null?p.b=new F.bC(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.w(null)}}}p=m.a
if(p!=null){n=p.b
C.b.B((n==null?p.b=new F.dv(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.v()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.p(p,"\n")},
v:function(){return this.G("")}}
F.ce.prototype={
cm:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jr(s.cx,p,m,r,q,o,n,a,l)},
hM:function(){return this.cm(null)},
gab:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.cg(H.b([],s),H.b([],s))}return s},
gR:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.cf(H.b([],s),H.b([],s),H.b([],s))}return s},
gH:function(a){var s=this.a
if(s!=null)s.gU().Z()
return this.e},
sac:function(a,b){var s
if(!J.H(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a5()}},
sen:function(a){var s
if(!J.H(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a5()}},
sdq:function(a){var s
if(!J.H(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a5()}},
i5:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.a9())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.n(0,$.aG())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.n(0,$.b5())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.n(0,$.ax())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.n(0,$.bq())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.n(0,$.e3())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.n(0,$.e4())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.n(0,$.bM()))return H.b([o.ch],t.n)
else if(a.n(0,$.b4())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
ci:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.du()
p.gR().F(0,new F.jy(o))
p.r=o.a.M()
if(r){s.a5()
o=s.e
if(o!=null)o.ai(0)}return!0},
cf:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.du()
p.gR().F(0,new F.jx(o))
p.x=o.a.M()
if(r){s.a5()
o=s.e
if(o!=null)o.ai(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
G:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.at(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.v()
n.push(s==null?o:s)
n.push(V.x(q.ch,3,0))
s=q.cx
s=s==null?p:s.v()
n.push(s==null?o:s)
r=C.b.p(n,", ")
return a+"{"+r+"}"},
v:function(){return this.G("")}}
F.jy.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:8}
F.jx.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:8}
F.y.prototype={
Z:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.d(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a5()
return!0},
bw:function(a,b,c,d,e,f){var s=F.jr(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
ay:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].ci()
return!0},
cg:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cf()
return!0},
hI:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.M()
if(!J.H(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.w(null)}}}}}return!0},
i:function(a){return this.v()},
G:function(a){var s,r,q,p
this.Z()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].G(a))
return C.b.p(s,"\n")},
v:function(){return this.G("")}}
F.cf.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
C.b.F(s.c,new F.js(s,b))
C.b.F(s.d,new F.jt(s,b))},
i:function(a){return this.v()},
v:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.p(p,"\n")}}
F.js.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)},
$S:8}
F.jt.prototype={
$1:function(a){var s=this.a
if(!J.H(a.a,s)&&!J.H(a.b,s))this.b.$1(a)},
$S:8}
F.cg.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.v()},
v:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.p(p,"\n")}}
F.jv.prototype={}
F.ju.prototype={
bk:function(a,b,c){return J.H(b.f,c.f)}}
F.jw.prototype={}
F.iI.prototype={
cB:function(a){var s,r,q,p,o,n=V.du()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.E(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.M()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.M()
if(!J.H(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}return null}}
F.dv.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.p(p,"\n")}}
O.ej.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.C():s},
E:function(a){var s=this.r
return s==null?null:s.w(a)},
ad:function(a,b){},
bJ:function(a,b){var s,r,q,p=this,o=null,n="GreyViewDepth",m=p.a
if(m==null){m=t.gO.a(a.fr.h(0,n))
if(m==null){m=new A.cD(a.a,n)
""+"uniform mat4 viewObjMat;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n"
s=""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
""+"precision mediump float;\n"
""+"precision mediump float;\n\n"
""+"precision mediump float;\n\nuniform float width;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n"
r=""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
m.bC(0,s.charCodeAt(0)==0?s:s,r.charCodeAt(0)==0?r:r)
m.x=m.ga4(m).h(0,"posAttr")
r=t.v
m.y=r.a(m.gu().h(0,"width"))
m.z=r.a(m.gu().h(0,"stop"))
r=t.j
m.Q=r.a(m.gu().h(0,"viewObjMat"))
m.ch=r.a(m.gu().h(0,"projMat"))
a.bx(m)}m=p.a=m}s=b.e
if((!(s instanceof Z.aJ)?b.e=null:s)==null){s=b.d
s=s==null?o:s.by(new Z.ch(a.a),$.a9())
if(s==null)s=o
else{r=s.an($.a9())
if(r!=null){q=m.x
q=q==null?o:q.c
r.e=q==null?0:q}}b.e=s}m.W(a)
s=p.b
r=p.c
q=m.y
if(q!=null)q.a.uniform1f(q.d,s-r)
s=p.c
r=m.z
if(r!=null)r.a.uniform1f(r.d,s)
s=a.cy
s=s.ga7(s)
r=m.ch
if(r!=null)r.a8(s.a6(0,!0))
s=a.ger()
r=m.Q
if(r!=null)r.a8(s.a6(0,!0))
s=t.C.a(b.e)
s.W(a)
s.a3(a)
s.aF(a)
a.a.useProgram(o)
m.ga4(m).bA()}}
O.cM.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.C():s},
E:function(a){var s=this.x
return s==null?null:s.w(a)},
ax:function(){return this.E(null)},
sce:function(a){var s=this.r
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
this.E(new D.t("blurValue",s,a))}},
sdv:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gm().B(0,r.ga9())
s=r.e
r.e=a
if(a!=null)a.gm().l(0,r.ga9())
r.E(new D.t("colorTexture",s,r.e))}},
saY:function(a){var s,r=this,q=r.f
if(q!=a){if(q!=null)q.gm().B(0,r.ga9())
s=r.f
r.f=a
if(a!=null)a.gm().l(0,r.ga9())
r.E(new D.t("blurTexture",s,r.f))
q=r.f==null
if(!(q&&s!=null))q=!q&&s==null
else q=!0
if(q){r.a=null
r.E(null)}}},
siz:function(a){var s,r=this
if(!r.b.n(0,a)){s=r.b
r.b=a
r.E(new D.t("textureMatrix",s,a))}},
scd:function(a){var s,r=this
if(!r.c.n(0,a)){s=r.c
r.c=a
r.E(new D.t("blurAdjust",s,a))}},
ad:function(a,b){},
aa:function(a,b){if(b!=null)if(!C.b.P(a,b)){b.a=a.length
a.push(b)}},
bJ:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a
if(e==null){s=g.f!=null
e=""+"GaussianBlur_"
e+=s?"1":"0"
r=e.charCodeAt(0)==0?e:e
q=new A.ia(s,r)
p=t.bF.a(a.fr.h(0,r))
if(p==null){p=new A.cL(q,a.a,r)
e=""+"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=new P.Z("")
n=""+"precision mediump float;\n"
o.a=n
n+="\n"
o.a=n
n=o.a=n+"uniform sampler2D colorTxt;\n"
if(s){n+="uniform sampler2D blurTxt;\n"
o.a=n
n=o.a=n+"uniform vec4 blurAdj;\n"}else n=o.a=n+"uniform float blurValue;\n"
n+="uniform vec2 blurScale;\n"
o.a=n
n+="\n"
o.a=n
n+="varying vec2 txt2D;\n"
o.a=n
o.a=n+"\n"
n=t.n
q.aS(o,3,H.b([0.75],n),H.b([0.5],n))
q.aS(o,6,H.b([0.42857,2.14286],n),H.b([0.41667,0.08333],n))
q.aS(o,9,H.b([0,1.8],n),H.b([0.5122,0.2439],n))
q.aS(o,12,H.b([0,1.38462,3.23077],n),H.b([0.22703,0.31622,0.07027],n))
q.aS(o,15,H.b([0.9375,2.8125],n),H.b([0.36184,0.13816],n))
q.aS(o,18,H.b([0.47368,2.36842,4.26316],n),H.b([0.29916,0.16318,0.03766],n))
n=o.a+="void main()\n"
n=o.a=n+"{\n"
n=(s?o.a=n+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":n)+"   float blurOffset = abs(blurValue);\n"
o.a=n
n+="\n"
o.a=n
n+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
o.a=n
n+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
o.a=n
n+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
o.a=n
n+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
o.a=n
n+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
o.a=n
n+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
o.a=n
n+="   else                       gl_FragColor = blur18();\n"
o.a=n
n=o.a=n+"}\n"
p.bC(0,e.charCodeAt(0)==0?e:e,n.charCodeAt(0)==0?n:n)
p.y=p.ga4(p).h(0,"posAttr")
p.z=p.ga4(p).h(0,"txtAttr")
p.Q=t.j.a(p.gu().h(0,"projViewObjMat"))
p.ch=t.Q.a(p.gu().h(0,"txt2DMat"))
n=t.G
p.db=n.a(p.gu().h(0,"colorTxt"))
p.cy=t.fp.a(p.gu().h(0,"blurScale"))
if(s){p.dx=n.a(p.gu().h(0,"blurTxt"))
p.cx=t.F.a(p.gu().h(0,"blurAdj"))}else p.dy=t.v.a(p.gu().h(0,"blurValue"))
a.bx(p)}e=g.a=p
b.e=null}n=b.e
if((!(n instanceof Z.aJ)?b.e=null:n)==null){n=b.d
if(n==null)n=f
else{m=$.a9()
l=$.ax()
l=n.by(new Z.ch(a.a),new Z.aE(m.a|l.a))
n=l}if(n==null)n=f
else{m=n.an($.a9())
if(m!=null){l=g.a
if(l==null)l=f
else{l=l.y
l=l==null?f:l.c}m.e=l==null?0:l}m=n.an($.ax())
if(m!=null){l=g.a
if(l==null)l=f
else{l=l.z
l=l==null?f:l.c}m.e=l==null?1:l}}b.e=n}k=H.b([],t.d)
g.aa(k,g.e)
e=e.x.a
if(e)g.aa(k,g.f)
if(k.length<=0)return
for(j=0;j<k.length;++j)k[j].W(a)
n=g.a
if(n!=null){n.W(a)
m=g.e
n.ah(n.db,m)
m=g.b
l=n.ch
if(l!=null)l.a8(m.a6(0,!0))
m=g.d
l=a.c
i=a.d
h=n.cy
if(h!=null)h.a.uniform2f(h.d,m.a/l,m.b/i)
m=a.gei()
n=n.Q
if(n!=null)n.a8(m.a6(0,!0))}n=g.a
if(e){if(n!=null){e=g.f
n.ah(n.dx,e)
e=g.c
n=n.cx
if(n!=null)n.ex(e)}}else if(n!=null){e=g.r
n=n.dy
if(n!=null)n.a.uniform1f(n.d,e)}e=b.e
if(e instanceof Z.aJ){e.W(a)
e.a3(a)
e.aF(a)}else b.e=null
e=g.a
if(e!=null){a.a.useProgram(f)
e.ga4(e).bA()}for(e=a.a,j=0;j<k.length;++j){n=k[j]
if(n.c){n.c=!1
e.activeTexture(33984+n.a)
e.bindTexture(3553,f)}}}}
O.cZ.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.C():s},
E:function(a){var s=this.fr
return s==null?null:s.w(a)},
ax:function(){return this.E(null)},
da:function(a){this.a=null
this.E(a)},
hi:function(){return this.da(null)},
fk:function(a,b){return this.E(new D.aM())},
fm:function(a,b){return this.E(new D.aN())},
ge3:function(){var s=this,r=s.dx
if(r==null){r=new D.cS(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cL(r.gfh(),r.gfY(),r.gh1())
r.gm().l(0,s.gd9())
r.ge2().l(0,s.ga9())
s.dx=r}return r},
gdE:function(){var s=this.f
return s==null?this.f=O.eA(this,"emission"):s},
gcb:function(){var s=this.r
return s==null?this.r=O.eA(this,"ambient"):s},
gcn:function(){var s=this.x
return s==null?this.x=O.eA(this,"diffuse"):s},
gbQ:function(){var s=this.z
return s==null?this.z=new O.iu(new V.W(0,0,0),this,"specular",new A.ai(!1,!1,!1)):s},
gdt:function(){var s=this.Q
return s==null?this.Q=new O.iq(this,"bump",new A.ai(!1,!1,!1)):s},
cZ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.w,a1=new H.T(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaE()
o=a1.h(0,q.gaE())
a1.k(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.F(0,new O.iv(b,n))
C.b.b8(n,new O.iw())
m=new H.T(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaE()
o=m.h(0,q.gaE())
m.k(0,p,o==null?1:o)}l=H.b([],t.fD)
m.F(0,new O.ix(b,l))
C.b.b8(l,new O.iy())
k=new H.T(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=k.h(0,4)
k.k(0,4,p==null?1:p)}j=H.b([],t.eg)
k.F(0,new O.iz(b,j))
C.b.b8(j,new O.iA())
i=new H.T(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gaE()
p=i.h(0,q.gaE())
i.k(0,s,p==null?1:p)}h=H.b([],t.c3)
i.F(0,new O.iB(b,h))
C.b.b8(h,new O.iC())
a0=C.c.a2(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.is(new V.ao(0,0,0,0))
a2=b.gdE().c
s=b.gcb().c
p=b.gcn().c
o=b.y
o=(o==null?b.y=O.eA(b,"invDiffuse"):o).c
g=b.gbQ().c
f=b.gdt().c
e=b.cx
e=(e==null?b.cx=O.eA(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.it(new V.W(0,0,0),b,"refract",new A.ai(!1,!1,!1)):d).c
c=b.db
return A.nv(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.ip(b,"alpha",new A.ai(!1,!1,!1)):c).c,n,l,j,h)},
aa:function(a,b){if(b!=null)if(!C.b.P(a,b)){b.a=a.length
a.push(b)}},
ad:function(a,b){var s,r,q,p=this.dx
p=J.aH(p==null?H.b([],t.e):p)
s=H.P(p).c
for(;p.t();){r=s.a(p.d)
q=r.b
q=q==null?null:q.aG(0,b,r)
if(q==null){q=$.iD
if(q==null){q=new V.aR(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.iD=q}}r.a=q}},
bJ:function(b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=b6.a
if(b8==null){s=b6.cZ()
r=s.b1
b8=t.eI.a(b9.fr.h(0,r))
if(b8==null){q=b9.a
p=t.S
o=t.W
b8=new A.cY(s,H.b([],t.p),P.R(p,o),P.R(p,t.b),P.R(p,o),P.R(p,t.c),P.R(p,o),P.R(p,t.m),P.R(p,o),P.R(p,t.R),q,r)
b8.eE(s,q)
b9.bx(b8)}b8=b6.a=b8
c0.e=null}n=b8.x
m=n.dG
s=c0.e
if(!(s instanceof Z.aJ))s=c0.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=c0.d
if(r!=null)r.ay()}r=n.r1
if(r){q=c0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gR().cg()
q.gU().cg()
q=q.e
if(q!=null)q.ai(0)}}q=n.rx
if(q){p=c0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gU().hI()
p=p.e
if(p!=null)p.ai(0)}}p=c0.d
l=p==null?b7:p.by(new Z.ch(b9.a),m)
if(l==null)return
p=l.an($.a9())
if(p!=null){o=b8.y
o=o==null?b7:o.c
p.e=o==null?0:o}if(s){s=l.an($.aG())
if(s!=null){p=b8.Q
p=p==null?b7:p.c
s.e=p==null?1:p}}if(r){s=l.an($.b5())
if(s!=null){r=b8.z
r=r==null?b7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.an($.ax())
if(s!=null){r=b8.ch
r=r==null?b7:r.c
s.e=r==null?3:r}}if(q){s=l.an($.bq())
if(s!=null){r=b8.cx
r=r==null?b7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.an($.b4())
if(s!=null){r=b8.cy
r=r==null?b7:r.c
s.e=r==null?5:r}}c0.e=l}k=H.b([],t.d)
b8.W(b9)
if(n.fr){s=b9.dx
s=s.ga7(s)
r=b8.db
if(r!=null)r.a8(s.a6(0,!0))}if(n.fx){s=b9.ger()
r=b8.dx
if(r!=null)r.a8(s.a6(0,!0))}s=b9.gei()
r=b8.fr
if(r!=null)r.a8(s.a6(0,!0))
if(n.go){s=b9.db
s=s.ga7(s)
r=b8.dy
if(r!=null)r.a8(s.a6(0,!0))}if(n.x1){s=V.kJ()
r=b8.go
if(r!=null)r.a8(s.a6(0,!0))}if(n.x2){s=V.ad()
r=b8.id
if(r!=null)r.a8(s.a6(0,!0))}if(n.y1){s=V.ad()
r=b8.k1
if(r!=null)r.a8(s.a6(0,!0))}if(n.b0>0){s=b6.e.a
j=s.length
r=b8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.c(s,i)
r=s[i]
q=b8.k3
if(i>=q.length)return H.c(q,i)
q=q[i]
h=new Float32Array(H.cm(r.a6(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=b6.f
r=r==null?b7:r.f
if(r==null)r=new V.W(0,0,0)
q=b8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.f
b6.aa(k,s==null?b7:s.d)
s=b6.f
s=s==null?b7:s.d
b8.ah(b8.r1,s)}if(n.k1){s=n.b
if(s.a){r=b6.r
r=r==null?b7:r.f
if(r==null)r=new V.W(0,0,0)
q=b8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.r
b6.aa(k,s==null?b7:s.d)
s=b6.r
s=s==null?b7:s.d
b8.ah(b8.ry,s)}s=n.c
if(s.a){r=b6.x
r=r==null?b7:r.f
if(r==null)r=new V.W(0,0,0)
q=b8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.x
b6.aa(k,s==null?b7:s.d)
s=b6.x
s=s==null?b7:s.d
b8.ah(b8.y1,s)}s=n.d
if(s.a){r=b6.y
r=r==null?b7:r.f
if(r==null)r=new V.W(0,0,0)
q=b8.b0
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.y
b6.aa(k,s==null?b7:s.d)
s=b6.y
s=s==null?b7:s.d
b8.ah(b8.b1,s)}s=n.e
r=s.a
if(r||s.b||!1){q=b6.z
q=q==null?b7:q.ch
if(q==null)q=100
p=b8.dJ
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b6.z
r=r==null?b7:r.f
if(r==null)r=new V.W(1,1,1)
q=b8.dH
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.z
b6.aa(k,s==null?b7:s.d)
s=b6.z
s=s==null?b7:s.d
b8.ah(b8.dI,s)}s=n.z
if(s.length>0){g=new H.T(t.w)
r=b6.dx
r=r==null?b7:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.Y
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaE()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
o=b8.cp.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.c(o,c)
b=o[c]
o=e.giK()
a=$.aV
o=o.br(a==null?$.aV=new V.V(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giO()
a=$.aV
o=o.br(a==null?$.aV=new V.V(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb_(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.ghT()){o=e.ghE()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghF()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghG()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=b8.co.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b9.db
a0=r.ga7(r)
a1=new H.T(t.w)
r=b6.dx
r=r==null?b7:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=a0.a
o=a0.b
a=a0.c
a2=a0.e
a3=a0.f
a4=a0.r
a5=a0.y
a6=a0.z
a7=a0.Q
a8=t.V
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaE()
c=a1.h(0,d)
if(c==null)c=0
a1.k(0,d,c+1)
a9=b8.cr.h(0,d)
if(a9==null)a9=H.b([],a8)
if(c>>>0!==c||c>=a9.length)return H.c(a9,c)
b=a9[c]
a9=e.gdA(e)
a9=new V.E(C.d.A(p,a9.gdB(a9))+C.d.A(o,a9.gdC(a9))+C.d.A(a,a9.gdD()),C.d.A(a2,a9.gdB(a9))+C.d.A(a3,a9.gdC(a9))+C.d.A(a4,a9.gdD()),C.d.A(a5,a9.gdB(a9))+C.d.A(a6,a9.gdC(a9))+C.d.A(a7,a9.gdD())).M()
b0=b.e
b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.gb_(e)
b0=b.f
b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
e.gb5()
a9=e.gdA(e)
b0=b.d
if(b0!=null)b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.giG()
b0=b.b
if(b0!=null)b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.gbK(e)
b0=b.c
if(b0!=null)b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.gb5()
if(!C.b.P(k,a9)){a9.a=k.length
k.push(a9)}a9=e.gb5()
b0=a9.ge4(a9)
if(b0){b0=b.r
if(b0!=null){b1=a9.d
b2=b0.a
b0=b0.d
if(!b1)b2.uniform1i(b0,0)
else b2.uniform1i(b0,a9.a)}}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=b8.cq.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b9.db
a0=r.ga7(r)
b3=new H.T(t.w)
r=b6.dx
r=r==null?b7:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.E
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
c=b3.h(0,4)
if(c==null)c=0
b3.k(0,4,c+1)
o=b8.ct.h(0,4)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.c(o,c)
b=o[c]
b4=a0.A(0,e.a)
o=e.a
a=$.aV
o=o.br(a==null?$.aV=new V.V(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.aV
o=b4.br(o==null?$.aV=new V.V(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.c
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.r
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.x
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.y
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=b3.h(0,q)
if(j==null)j=0
q=b8.cs.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b9.db
a0=r.ga7(r)
b5=new H.T(t.w)
r=b6.dx
r=r==null?b7:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.J
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaE()
c=b5.h(0,d)
if(c==null)c=0
b5.k(0,d,c+1)
o=b8.cv.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.c(o,c)
b=o[c]
o=e.gip(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gdA(e).M()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.br(e.gip(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb_(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gb5()
o=e.giG()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gbK(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giX()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giY()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gb5()
o=e.gb5()
if(!C.b.P(k,o)){o.a=k.length
k.push(o)}o=e.gb5()
a=o.ge4(o)
if(a){a=b.dx
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}e.gcN()
o=e.giJ()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gcN()
if(!C.b.P(k,o)){o.a=k.length
k.push(o)}o=e.gcN()
a=o.ge4(o)
if(a){a=b.dy
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}if(e.giN()){o=e.giM()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giL()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.ghT()){o=e.ghE()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghF()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghG()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=b5.h(0,q)
if(j==null)j=0
q=b8.cu.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=b6.Q
b6.aa(k,s==null?b7:s.d)
s=b6.Q
s=s==null?b7:s.d
b8.ah(b8.dK,s)}if(n.dy){s=b9.Q
if(s==null){s=b9.db
s=b9.Q=s.ga7(s).i3(0)}r=b8.fy
if(r!=null)r.a8(s.a6(0,!0))}if(n.db){b6.aa(k,b7)
b8.hk(b8.dL,b7)
s=n.r
if(s.a){r=b6.cx
r=r==null?b7:r.f
if(r==null)r=new V.W(1,1,1)
q=b8.dM
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.cx
b6.aa(k,s==null?b7:s.d)
s=b6.cx
s=s==null?b7:s.d
b8.ah(b8.dN,s)}s=n.x
r=s.a
if(r||s.b||!1){q=b6.cy
q=q==null?b7:q.ch
if(q==null)q=0
p=b8.dO
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b6.cy
r=r==null?b7:r.f
if(r==null)r=new V.W(1,1,1)
q=b8.dP
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.cy
b6.aa(k,s==null?b7:s.d)
s=b6.cy
s=s==null?b7:s.d
b8.ah(b8.dQ,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=b6.db
r=r==null?b7:r.f
if(r==null)r=1
p=b8.dR
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=b6.db
b6.aa(k,r==null?b7:r.d)
r=b6.db
r=r==null?b7:r.d
b8.ah(b8.dS,r)}r=b9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].W(b9)
r=t.C.a(c0.e)
r.W(b9)
r.a3(b9)
r.aF(b9)
if(!q||s.b||!1)b9.a.disable(3042)
for(s=b9.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,b7)}}s.useProgram(b7)
b8.ga4(b8).bA()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cZ().b1}}
O.iv.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.a2(b+3,4)*4))},
$S:7}
O.iw.prototype={
$2:function(a,b){return C.c.am(a.a,b.a)},
$S:45}
O.ix.prototype={
$2:function(a,b){return this.b.push(new A.ba(a,C.c.a2(b+3,4)*4))},
$S:7}
O.iy.prototype={
$2:function(a,b){return C.c.am(a.a,b.a)},
$S:46}
O.iz.prototype={
$2:function(a,b){return this.b.push(new A.bd(a,C.c.a2(b+3,4)*4))},
$S:7}
O.iA.prototype={
$2:function(a,b){return C.c.am(a.a,b.a)},
$S:47}
O.iB.prototype={
$2:function(a,b){return this.b.push(new A.bg(a,C.c.a2(b+3,4)*4))},
$S:7}
O.iC.prototype={
$2:function(a,b){return C.c.am(a.a,b.a)},
$S:48}
O.ip.prototype={
aL:function(){var s,r=this
r.cQ()
s=r.f
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.E(new D.t(r.b,s,1))}}}
O.d_.prototype={
E:function(a){return this.a.E(a)},
ax:function(){return this.E(null)},
aL:function(){},
bu:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aL()
s=q.a
s.a=null
s.E(null)}},
sbL:function(a){var s,r,q=this,p=a==null
if(p){s=q.c
q.bu(new A.ai(s.a,!1,!1))}else{s=q.c
if(!s.b)q.bu(new A.ai(s.a,!0,!1))}s=q.d
if(s!=a){if(s!=null)s.gm().B(0,q.ga9())
r=q.d
q.d=a
if(!p)a.gm().l(0,q.ga9())
q.a.E(new D.t(q.b+".texture2D",r,q.d))}}}
O.iq.prototype={}
O.d0.prototype={
dd:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.E(new D.t(r.b+".color",s,a))}},
aL:function(){this.cQ()
this.dd(new V.W(1,1,1))},
sb_:function(a,b){this.bu(new A.ai(!0,this.c.b,!1))
this.dd(b)}}
O.is.prototype={}
O.it.prototype={
aL:function(){var s,r=this
r.cR()
s=r.ch
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.E(new D.t(r.b+".refraction",s,1))}}}
O.iu.prototype={
df:function(a){var s=this,r=s.ch
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.E(new D.t(s.b+".shininess",r,a))}},
aL:function(){this.cR()
this.df(100)}}
O.bi.prototype={}
O.de.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.C():s},
E:function(a){var s=this.r
return s==null?null:s.w(a)},
ax:function(){return this.E(null)},
fD:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ga9(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.f
if(n==null)n=o.f=new D.bu()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.ax()},
fF:function(a,b){var s,r
for(s=b.gS(b),r=this.ga9();s.t();)s.gC(s).gm().B(0,r)
this.ax()},
ad:function(a,b){},
f4:function(a){a=C.c.a2(a+3,4)*4
if(a<=0)return 4
return a},
bJ:function(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.c.a,a2=a.f4(a1.length)
if(a2!==a.d||a.e!==a.f){a.d=a2
a.f=a.e
a.a=null}s=a.a
if(s==null){r=a.e
q=r.a
s=t.fB.a(a3.fr.h(0,"TextureLayout_"+a2+"_"+C.c.i(q)))
if(s==null){p=a3.a
o=t.bT
s=new A.df(H.b([],t.h4),H.b([],t.p),H.b([],o),H.b([],o),H.b([],o),H.b([],o),H.b([],t.fL),p,"TextureLayout_"+a2+"_"+C.c.i(q))
s.eG(a2,r,p)
a3.bx(s)}s=a.a=s}if(a4.e==null){r=a4.d
r=r==null?a0:r.by(new Z.ch(a3.a),$.a9())
if(r==null)r=a0
else{q=r.an($.a9())
if(q!=null){p=s.x
p=p==null?a0:p.c
q.e=p==null?0:p}}a4.e=r}s.W(a3)
n=H.b([],t.d)
for(r=s.dy,q=s.dx,p=s.db,o=s.cy,m=s.cx,l=s.ch,k=s.Q,j=0,i=0;i<a1.length;++i){h=a1[i]
g=h.a
if(!C.b.P(n,g)){g.a=n.length
n.push(g)}if(j<0||j>=k.length)return H.c(k,j)
f=k[j]
e=g.d
d=f.a
f=f.d
if(!e)d.uniform1i(f,0)
else d.uniform1i(f,g.a)
f=h.b
if(j>=l.length)return H.c(l,j)
e=l[j]
c=new Float32Array(H.cm(f.a6(0,!0)))
e.a.uniformMatrix4fv(e.d,!1,c)
b=h.c
if(j>=m.length)return H.c(m,j)
f=m[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=o.length)return H.c(o,j)
f=o[j]
f.a.uniform2f(f.d,b.c,b.d)
b=h.d
if(j>=p.length)return H.c(p,j)
f=p[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=q.length)return H.c(q,j)
f=q[j]
f.a.uniform2f(f.d,b.c,b.d)
if(j>=r.length)return H.c(r,j)
f=r[j]
f.a.uniform1i(f.d,0);++j}a1=s.y
if(a1!=null)a1.a.uniform1i(a1.d,j)
a1=s.z
if(a1!=null)a1.ew(a.b)
for(i=0;i<n.length;++i)n[i].W(a3)
a1=a4.e
if(a1 instanceof Z.aJ){a1.W(a3)
a1.a3(a3)
a1.aF(a3)}else a4.e=null
a1=a3.a
a1.useProgram(a0)
s.ga4(s).bA()
for(i=0;i<n.length;++i){r=n[i]
if(r.c){r.c=!1
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,a0)}}}}
O.c9.prototype={}
T.c8.prototype={}
T.f9.prototype={}
T.fa.prototype={
de:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.dF()}},
gm:function(){var s=this.y
return s==null?this.y=D.C():s},
W:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.j2.prototype={
bF:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=T.kL(o)
W.a3(s,"load",new T.j3(this,r,s,!1,o,!1,!1),!1)
return r},
hj:function(a,b,c){var s,r,q,p,o,n
b=V.e2(b)
s=a.width
r=V.e2(s==null?512:s)
s=a.height
q=V.e2(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.kw()
p.width=r
p.height=q
o=t.ar.a(C.j.ev(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.pz(o.getImageData(0,0,s,n==null?512:n))}}}
T.j3.prototype={
$1:function(a){var s,r,q=this,p=q.b,o=q.c,n=o.width
p.e=n==null?512:n
n=o.height
p.f=n==null?512:n
n=q.a
s=n.hj(o,n.b,q.d)
r=o.width
p.r=r==null?512:r
o=o.height
p.x=o==null?512:o
o=n.a
o.bindTexture(3553,q.e)
o.pixelStorei(37440,0)
C.z.iy(o,3553,0,6408,6408,5121,s)
o.bindTexture(3553,null)
p.de();++n.e},
$S:2}
T.j4.prototype={
f3:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.c,r=C.c.a2(s,2),q=this.b,p=this.a,o=p.length,n=q*4,--s;r>=0;--r){m=n*r
l=n*(s-r)
for(k=0;k<q;++k){j=4*k
i=m+j
h=l+j
for(g=0;g<4;++g){f=i+g
e=h+g
if(f<0||f>=o)return H.c(p,f)
d=p[f]
if(e<0||e>=o)return H.c(p,e)
p[f]=p[e]
p[e]=d}}}}}
X.hF.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.C():s},
a1:function(a){var s=this.fr
return s==null?null:s.w(a)},
sav:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a1(new D.t("width",s,b))}},
sao:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a1(new D.t("height",s,b))}},
W:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
g.sav(0,C.d.a_(r*g.r))
s=s.drawingBufferHeight
if(s==null)s=512
g.sao(0,C.d.a_(s*g.x))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=H.hx(s.getParameter(3379))
n=V.e2(q)
m=V.e2(p)
o=V.e2(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.z.em(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.kL(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.de()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.dF()
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
a.c=C.d.a_(r*g.a)
q=j.d
a.d=C.d.a_(q*g.b)
p=g.c
i=C.d.a_(j.a*p)
l=g.d
s.viewport(i,C.d.a_(j.b*l),C.d.a_(r*p),C.d.a_(q*l))
s.clearDepth(g.db)
if(g.cy){r=g.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
h=16640}else h=256
if(h>0)s.clear(h)},
aF:function(a){a.a.bindFramebuffer(36160,null)}}
X.i9.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.C():s},
W:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.a_(q.a*s)
o=C.d.a_(q.b*r)
n=C.d.a_(q.c*s)
a.c=n
q=C.d.a_(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)},
aF:function(a){}}
X.ic.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.C():s}}
X.eO.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.C():s},
a1:function(a){var s=this.f
return s==null?null:s.w(a)},
eN:function(){return this.a1(null)},
sbl:function(a){var s,r,q=this
if(!J.H(q.b,a)){s=q.b
if(s!=null)s.gm().B(0,q.gcV())
r=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gcV())
q.a1(new D.t("mover",r,q.b))}}}
X.j0.prototype={}
V.hL.prototype={
dm:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=k.d,i=j.length,h=P.kO().gbI().h(0,k.a)
if(h==null||h.length<=i){s=d
r=!0}else{if(i>=h.length)return H.c(h,i)
s=h[i]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
o=k.c
n=J.bo(o)
n.gbz(o).l(0,p)
m=W.nk("checkbox")
m.checked=s
W.a3(m,"change",new V.hM(k,m,c,i),!1)
p.children.toString
p.appendChild(m).toString
l=q.createElement("span")
l.textContent=b
p.appendChild(l).toString
o=n.gbz(o)
q=q.createElement("br")
q.toString
o.l(0,q)
j.push(m)
if(r)k.dk(i,s)},
be:function(a,b,c){return this.dm(a,b,c,!1)},
dk:function(a,b){var s,r,q,p,o,n=this.a,m=P.kO().gbI().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.ii(m,a-s+1,"0")
r=a>0?C.a.q(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.al(m,s)
q=P.kO()
s=t.N
p=P.ns(q.gbI(),s,s)
p.k(0,n,r)
o=q.ej(0,p)
n=window.history
n.toString
s=o.gc9()
n.replaceState(new P.jL([],[]).bN(""),"",s)}}
V.hM.prototype={
$1:function(a){var s=this,r=s.b.checked,q=r===!0
s.c.$1(q)
s.a.dk(s.d,q)},
$S:2}
V.ko.prototype={
$1:function(a){var s=C.d.cJ(this.a.gi0(),2)
if(s!=="0.00")P.lb(s+" fps")},
$S:50}
V.iU.prototype={
dn:function(a){var s,r,q,p,o,n,m=this.hn(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.Q(C.b.i4(a)),s=new P.ck(m.eo(new H.bY(s,s.gj(s))).a());s.t();){r=s.gC(s)
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
if(H.mD(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.c(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.l0(C.V,r,C.e,!1)
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
s=t.N
f=new L.j8(P.R(s,t.dl),P.R(s,t.f7),P.lt(s))
f.d=f.O(0,o)
s=f.O(0,o).p(0,n)
r=t.t
q=new K.Y(H.b([],r))
q.a0(new H.Q("*"))
s.a.push(q)
s.c=!0
s=f.O(0,n).p(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.aT(p))
s=new K.Y(H.b([],r))
s.a0(new H.Q("*"))
p.push(s)
s=f.O(0,n).p(0,"BoldEnd")
p=new K.Y(H.b([],r))
p.a0(new H.Q("*"))
s.a.push(p)
s.c=!0
s=f.O(0,o).p(0,m)
p=new K.Y(H.b([],r))
p.a0(new H.Q("_"))
s.a.push(p)
s.c=!0
s=f.O(0,m).p(0,m)
p=H.b([],q)
s.a.push(new K.aT(p))
s=new K.Y(H.b([],r))
s.a0(new H.Q("_"))
p.push(s)
s=f.O(0,m).p(0,l)
p=new K.Y(H.b([],r))
p.a0(new H.Q("_"))
s.a.push(p)
s.c=!0
s=f.O(0,o).p(0,k)
p=new K.Y(H.b([],r))
p.a0(new H.Q("`"))
s.a.push(p)
s.c=!0
s=f.O(0,k).p(0,k)
p=H.b([],q)
s.a.push(new K.aT(p))
s=new K.Y(H.b([],r))
s.a0(new H.Q("`"))
p.push(s)
s=f.O(0,k).p(0,"CodeEnd")
p=new K.Y(H.b([],r))
p.a0(new H.Q("`"))
s.a.push(p)
s.c=!0
s=f.O(0,o).p(0,j)
p=new K.Y(H.b([],r))
p.a0(new H.Q("["))
s.a.push(p)
s.c=!0
s=f.O(0,j).p(0,i)
p=new K.Y(H.b([],r))
p.a0(new H.Q("|"))
s.a.push(p)
p=f.O(0,j).p(0,h)
s=new K.Y(H.b([],r))
s.a0(new H.Q("]"))
p.a.push(s)
p.c=!0
p=f.O(0,j).p(0,j)
s=H.b([],q)
p.a.push(new K.aT(s))
p=new K.Y(H.b([],r))
p.a0(new H.Q("|]"))
s.push(p)
p=f.O(0,i).p(0,h)
s=new K.Y(H.b([],r))
s.a0(new H.Q("]"))
p.a.push(s)
p.c=!0
p=f.O(0,i).p(0,i)
s=H.b([],q)
p.a.push(new K.aT(s))
p=new K.Y(H.b([],r))
p.a0(new H.Q("|]"))
s.push(p)
f.O(0,o).p(0,g).a.push(new K.e7())
p=f.O(0,g).p(0,g)
q=H.b([],q)
p.a.push(new K.aT(q))
r=new K.Y(H.b([],r))
r.a0(new H.Q("*_`["))
q.push(r)
r=f.O(0,"BoldEnd")
r.d=r.a.bq(n)
r=f.O(0,l)
r.d=r.a.bq(m)
r=f.O(0,"CodeEnd")
r.d=r.a.bq(k)
r=f.O(0,h)
r.d=r.a.bq("Link")
r=f.O(0,g)
r.d=r.a.bq(g)
return this.b=f}}
V.iW.prototype={
$1:function(a){P.lM(C.o,new V.iV(this.a))},
$S:2}
V.iV.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.a_(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.w(-0.01*s)+"px"
q.top=r},
$S:4}
K.kg.prototype={
$1:function(a){var s,r,q,p=this.c,o=this.b.f.a,n=p.r,m=p.x,l=o.createFramebuffer()
l.toString
o.bindFramebuffer(36160,l)
o.readBuffer(36064)
o.framebufferTexture2D(36160,36064,3553,p.b,0)
s=new Uint8Array(n*m*4)
o.readPixels(0,m-m-0,n,m,6408,5121,s)
o.bindFramebuffer(36160,null)
r=new T.j4(s,n,m)
r.f3()
q=F.pF(150,150)
q.ay()
q.hC(r,0.05)
p=$.aG()
q.iF(new Z.aE($.lc().a&~p.a))
q.iE(!1)
q.ay()
this.a.a=q},
$S:1}
K.kh.prototype={
$1:function(a){var s=this.a,r=s.gcb()
r.sbL(a?this.b:null)
s=s.gcn()
s.sbL(a?this.b:null)},
$S:3}
K.ki.prototype={
$1:function(a){var s=this.a.gbQ()
s.sbL(a?this.b:null)},
$S:3}
K.kj.prototype={
$1:function(a){var s=this.a.gdt()
s.sbL(a?this.b:null)},
$S:3}
K.kk.prototype={
$1:function(a){var s=a?this.a.a:this.c
this.b.sbP(0,s)},
$S:3}
K.kl.prototype={
$1:function(a){var s=a?this.b.ch:null
this.a.saY(s)},
$S:3}
K.km.prototype={
$1:function(a){var s=a?this.b:null
this.a.sau(s)},
$S:3};(function aliases(){var s=J.a.prototype
s.eA=s.i
s=J.bc.prototype
s.eB=s.i
s=K.cN.prototype
s.ez=s.b2
s.bR=s.i
s=O.d_.prototype
s.cQ=s.aL
s=O.d0.prototype
s.cR=s.aL})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"oP","no",52)
r(P,"pt","o1",15)
r(P,"pu","o2",15)
r(P,"pv","o3",15)
q(P,"ms","po",4)
r(W,"r0","hZ",36)
var k
p(k=E.bb.prototype,"gec",0,0,null,["$1","$0"],["ed","ig"],0,0)
p(k,"gee",0,0,null,["$1","$0"],["ef","ih"],0,0)
p(k,"gea",0,0,null,["$1","$0"],["eb","ie"],0,0)
p(k,"ge8",0,0,null,["$1","$0"],["e9","ia"],0,0)
o(k,"gi8","i9",9)
o(k,"gib","ic",9)
p(k=E.fb.prototype,"gcS",0,0,null,["$1","$0"],["cU","cT"],0,0)
n(k,"giu","ek",4)
m(k=X.fr.prototype,"gfG","fH",2)
m(k,"gfn","fo",2)
m(k,"gfu","fv",5)
m(k,"gfK","fL",21)
m(k,"gfI","fJ",21)
m(k,"gfO","fP",5)
m(k,"gfS","fT",5)
m(k,"gfA","fB",5)
m(k,"gfQ","fR",5)
m(k,"gfw","fz",5)
m(k,"gfU","fV",32)
m(k,"gfW","fX",2)
m(k,"ghb","hc",13)
m(k,"gh7","h8",13)
m(k,"gh9","ha",13)
p(k=D.cS.prototype,"gd6",0,0,null,["$1","$0"],["d7","fM"],0,0)
m(k,"gfY","fZ",34)
o(k,"gfh","fi",20)
o(k,"gh1","h2",20)
p(D.c3.prototype,"geH",0,0,null,["$1","$0"],["aj","eI"],0,0)
l(V.a2.prototype,"gj","bj",10)
l(V.E.prototype,"gj","bj",10)
l(V.bJ.prototype,"gj","bj",10)
p(k=U.bT.prototype,"gbt",0,0,null,["$1","$0"],["N","aD"],0,0)
o(k,"geJ","eK",18)
o(k,"gh_","h0",18)
p(k=U.ds.prototype,"gbt",0,0,null,["$1","$0"],["N","aD"],0,0)
m(k,"gf9","fa",1)
m(k,"gfb","fc",1)
m(k,"gfd","fe",1)
m(k,"gf5","f6",1)
m(k,"gf7","f8",1)
m(k,"ghu","hv",1)
m(k,"ghs","ht",1)
m(k,"ghq","hr",1)
m(U.dt.prototype,"gff","fg",1)
p(k=M.cx.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],0,0)
o(k,"gh3","h4",17)
o(k,"gh5","h6",17)
p(M.cB.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],0,0)
p(k=M.cH.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],0,0)
o(k,"gfp","fq",9)
o(k,"gfs","ft",9)
p(M.cK.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],0,0)
p(O.cM.prototype,"ga9",0,0,null,["$1","$0"],["E","ax"],0,0)
p(k=O.cZ.prototype,"ga9",0,0,null,["$1","$0"],["E","ax"],0,0)
p(k,"gd9",0,0,null,["$1","$0"],["da","hi"],0,0)
o(k,"gfj","fk",22)
o(k,"gfl","fm",22)
p(O.d_.prototype,"ga9",0,0,null,["$1","$0"],["E","ax"],0,0)
p(k=O.de.prototype,"ga9",0,0,null,["$1","$0"],["E","ax"],0,0)
o(k,"gfC","fD",19)
o(k,"gfE","fF",19)
p(X.eO.prototype,"gcV",0,0,null,["$1","$0"],["a1","eN"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.kF,J.a,J.aa,P.I,P.dB,P.k,H.bY,P.ep,H.cI,H.fo,H.cz,H.jb,H.iJ,H.h8,H.bQ,P.M,H.ii,H.ex,H.es,H.as,H.fL,P.dN,P.cj,P.ck,P.fv,P.c7,P.f4,P.jU,P.dU,P.jG,P.dA,P.i,P.hl,P.cX,P.db,P.ee,P.jT,P.jS,P.X,P.bt,P.eN,P.dd,P.fI,P.i8,P.af,P.Z,P.bK,P.jg,P.h2,W.hR,W.kA,W.kQ,W.J,W.cJ,P.jK,P.dP,P.h0,K.e7,K.cN,K.Y,L.f1,L.fc,L.fd,L.j8,O.ab,O.d1,E.hI,E.bb,E.bO,E.c2,E.fG,E.iN,E.fb,Z.ft,Z.ch,Z.aJ,Z.bV,Z.aE,D.hK,D.bu,D.S,X.cv,X.eu,X.ig,X.im,X.ae,X.iH,X.j9,X.fr,D.c3,V.W,V.ao,V.i1,V.eB,V.aR,V.U,V.V,V.aW,V.eU,V.a2,V.E,V.bJ,U.ds,U.dt,M.cB,M.cH,M.cK,A.eb,A.hC,A.ai,A.ia,A.b7,A.ba,A.bd,A.bg,A.ir,A.dl,A.dm,A.dp,A.dr,A.bR,A.a0,A.je,F.aq,F.i5,F.ew,F.ih,F.eR,F.iS,F.c6,F.dc,F.bC,F.ce,F.y,F.cf,F.cg,F.jv,F.jw,F.dv,O.bi,O.d_,O.is,O.c9,T.j2,T.j4,X.j0,X.ic,X.eO,V.hL,V.iU])
q(J.a,[J.eq,J.cQ,J.bc,J.u,J.bX,J.bx,H.d2,H.a_,W.e,W.hA,W.br,W.cw,W.aL,W.F,W.fA,W.ap,W.hU,W.hV,W.fC,W.cF,W.fE,W.hW,W.l,W.fJ,W.az,W.ib,W.fN,W.bw,W.il,W.iE,W.fR,W.fS,W.aA,W.fT,W.fV,W.aB,W.fZ,W.h1,W.aC,W.h3,W.aD,W.h9,W.am,W.hd,W.j6,W.av,W.hf,W.ja,W.jl,W.hm,W.ho,W.hq,W.hs,W.hu,P.aP,P.fP,P.aU,P.fX,P.iK,P.ha,P.aY,P.hh,P.hD,P.fw,P.c5,P.h6])
q(J.bc,[J.eP,J.cb,J.aO])
r(J.id,J.u)
q(J.bX,[J.cP,J.er])
q(P.I,[H.cR,P.fg,H.et,H.fn,H.eW,H.fH,P.ea,P.eK,P.aI,P.fp,P.fm,P.f2,P.ef,P.eh])
r(P.cU,P.dB)
q(P.cU,[H.cc,W.fy,W.fx,P.em])
r(H.Q,H.cc)
q(P.k,[H.m,H.aQ,H.dw,P.cO])
r(H.cG,H.aQ)
q(P.ep,[H.ez,H.fu])
r(H.cA,H.cz)
r(H.d6,P.fg)
q(H.bQ,[H.j1,H.ie,H.kb,H.kc,H.kd,P.jA,P.jz,P.jB,P.jC,P.jP,P.jO,P.k3,P.jI,P.jJ,P.ij,P.io,P.jp,P.jo,P.hX,P.hY,P.jk,P.jh,P.ji,P.jj,P.jR,P.jQ,P.jY,P.jZ,P.k_,W.iF,W.iG,W.iR,W.iZ,W.jD,P.jM,P.jN,P.jW,P.k4,P.i6,P.i7,P.hE,E.iO,E.iP,E.iQ,E.j5,D.i3,D.i4,F.jV,F.kq,F.kp,F.k9,F.k8,F.iT,F.jy,F.jx,F.js,F.jt,O.iv,O.iw,O.ix,O.iy,O.iz,O.iA,O.iB,O.iC,T.j3,V.hM,V.ko,V.iW,V.iV,K.kg,K.kh,K.ki,K.kj,K.kk,K.kl,K.km])
q(H.j1,[H.iY,H.ct])
r(P.cW,P.M)
r(H.T,P.cW)
r(H.cT,H.m)
r(H.c1,H.a_)
q(H.c1,[H.dD,H.dF])
r(H.dE,H.dD)
r(H.bA,H.dE)
r(H.dG,H.dF)
r(H.d3,H.dG)
q(H.d3,[H.eF,H.eG,H.eH,H.eI,H.eJ,H.d4,H.bB])
r(H.dO,H.fH)
r(P.dK,P.cO)
r(P.jH,P.jU)
r(P.dH,P.dU)
r(P.dz,P.dH)
r(P.dS,P.cX)
r(P.cd,P.dS)
q(P.ee,[P.hG,P.i_])
r(P.eg,P.f4)
q(P.eg,[P.hH,P.jq,P.jn])
r(P.jm,P.i_)
q(P.aI,[P.d9,P.eo])
r(P.fB,P.bK)
q(W.e,[W.v,W.el,W.bZ,W.at,W.dI,W.au,W.ag,W.dL,W.fs,W.ci,P.ed,P.b8])
q(W.v,[W.D,W.ay])
q(W.D,[W.o,P.n])
q(W.o,[W.e8,W.e9,W.bs,W.en,W.bU,W.bW,W.eX,W.bh])
r(W.hQ,W.aL)
r(W.cC,W.fA)
q(W.ap,[W.hS,W.hT])
r(W.fD,W.fC)
r(W.cE,W.fD)
r(W.fF,W.fE)
r(W.ek,W.fF)
r(W.aj,W.br)
r(W.fK,W.fJ)
r(W.bS,W.fK)
r(W.fO,W.fN)
r(W.bv,W.fO)
r(W.b_,W.l)
q(W.b_,[W.by,W.ak,W.bD])
r(W.eC,W.fR)
r(W.eD,W.fS)
r(W.fU,W.fT)
r(W.eE,W.fU)
r(W.fW,W.fV)
r(W.d5,W.fW)
r(W.h_,W.fZ)
r(W.eQ,W.h_)
r(W.eV,W.h1)
r(W.dJ,W.dI)
r(W.eZ,W.dJ)
r(W.h4,W.h3)
r(W.f_,W.h4)
r(W.f3,W.h9)
r(W.he,W.hd)
r(W.f7,W.he)
r(W.dM,W.dL)
r(W.f8,W.dM)
r(W.hg,W.hf)
r(W.fe,W.hg)
r(W.bj,W.ak)
r(W.hn,W.hm)
r(W.fz,W.hn)
r(W.dx,W.cF)
r(W.hp,W.ho)
r(W.fM,W.hp)
r(W.hr,W.hq)
r(W.dC,W.hr)
r(W.ht,W.hs)
r(W.h5,W.ht)
r(W.hv,W.hu)
r(W.hc,W.hv)
r(W.dy,P.c7)
r(P.jL,P.jK)
r(P.ac,P.h0)
r(P.fQ,P.fP)
r(P.ev,P.fQ)
r(P.fY,P.fX)
r(P.eL,P.fY)
r(P.hb,P.ha)
r(P.f5,P.hb)
r(P.hi,P.hh)
r(P.ff,P.hi)
r(P.ec,P.fw)
r(P.eM,P.b8)
r(P.h7,P.h6)
r(P.f0,P.h7)
q(K.cN,[K.aT,L.dh])
q(E.hI,[Z.bP,A.bf,T.c8])
q(D.S,[D.aM,D.aN,D.t,X.eS])
q(X.eS,[X.cV,X.c_,X.c0,X.dg])
q(O.ab,[D.cS,U.bT,M.cx])
q(D.hK,[U.hP,U.a1])
q(U.a1,[U.cy,U.da])
q(A.bf,[A.cD,A.cL,A.cY,A.df])
q(A.a0,[A.bE,A.fi,A.fj,A.fk,A.fh,A.di,A.bF,A.dj,A.dk,A.fl,A.dn,A.bG,A.bH,A.dq])
r(F.iX,F.i5)
r(F.jd,F.ih)
r(F.ju,F.jv)
r(F.iI,F.jw)
q(O.bi,[O.ej,O.cM,O.cZ,O.de])
q(O.d_,[O.ip,O.iq,O.d0])
q(O.d0,[O.it,O.iu])
r(T.f9,T.c8)
r(T.fa,T.f9)
q(X.j0,[X.hF,X.i9])
s(H.cc,H.fo)
s(H.dD,P.i)
s(H.dE,H.cI)
s(H.dF,P.i)
s(H.dG,H.cI)
s(P.dB,P.i)
s(P.dS,P.hl)
s(P.dU,P.db)
s(W.fA,W.hR)
s(W.fC,P.i)
s(W.fD,W.J)
s(W.fE,P.i)
s(W.fF,W.J)
s(W.fJ,P.i)
s(W.fK,W.J)
s(W.fN,P.i)
s(W.fO,W.J)
s(W.fR,P.M)
s(W.fS,P.M)
s(W.fT,P.i)
s(W.fU,W.J)
s(W.fV,P.i)
s(W.fW,W.J)
s(W.fZ,P.i)
s(W.h_,W.J)
s(W.h1,P.M)
s(W.dI,P.i)
s(W.dJ,W.J)
s(W.h3,P.i)
s(W.h4,W.J)
s(W.h9,P.M)
s(W.hd,P.i)
s(W.he,W.J)
s(W.dL,P.i)
s(W.dM,W.J)
s(W.hf,P.i)
s(W.hg,W.J)
s(W.hm,P.i)
s(W.hn,W.J)
s(W.ho,P.i)
s(W.hp,W.J)
s(W.hq,P.i)
s(W.hr,W.J)
s(W.hs,P.i)
s(W.ht,W.J)
s(W.hu,P.i)
s(W.hv,W.J)
s(P.fP,P.i)
s(P.fQ,W.J)
s(P.fX,P.i)
s(P.fY,W.J)
s(P.ha,P.i)
s(P.hb,W.J)
s(P.hh,P.i)
s(P.hi,W.J)
s(P.fw,P.M)
s(P.h6,P.i)
s(P.h7,W.J)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",L:"double",a4:"num",r:"String",b1:"bool",af:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([S?])","~(S)","~(l)","~(b1)","~()","~(ak)","~(r,@)","~(j,j)","~(aq)","~(j,k<bb>)","L()","af()","~(ce,L,L)","~(bD)","~(@,@)","~(~())","L(L,L)","~(j,k<al>)","~(j,k<a1?>)","~(j,k<c9>)","~(j,k<ar>)","~(by)","~(j,k<aR>)","~(~(S))","~(ca,r,j)","r(j)","@()","b1(v)","~(a4)","~(@)","af(@,@)","~(r,r)","~(bj)","@(@)","b1(k<ar>)","ca(@,@)","r(e)","~(r,r?)","j(j,j)","~(r[@])","~(r,j)","bP(j)","G<r,r>(G<r,r>,r)","~(N?,N?)","af(~())","j(b7,b7)","j(ba,ba)","j(bd,bd)","j(bg,bg)","af(@)","~(j7)","@(r)","j(@,@)","@(@,r)","D(v)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.ol(v.typeUniverse,JSON.parse('{"eP":"bc","cb":"bc","aO":"bc","pW":"l","q7":"l","pY":"b8","pX":"e","qf":"e","qi":"e","pV":"n","q9":"n","pZ":"o","qc":"o","qa":"v","q6":"v","qI":"ag","q2":"b_","q_":"ay","qj":"ay","qh":"ak","qb":"bv","q3":"F","q4":"am","qe":"bA","qd":"a_","eq":{"b1":[]},"bc":{"ls":[]},"u":{"p":["1"],"m":["1"],"k":["1"]},"id":{"u":["1"],"p":["1"],"m":["1"],"k":["1"]},"bX":{"L":[],"a4":[]},"cP":{"L":[],"j":[],"a4":[]},"er":{"L":[],"a4":[]},"bx":{"r":[]},"cR":{"I":[]},"Q":{"i":["j"],"p":["j"],"m":["j"],"k":["j"],"i.E":"j"},"m":{"k":["1"]},"aQ":{"k":["2"]},"cG":{"aQ":["1","2"],"m":["2"],"k":["2"]},"dw":{"k":["1"]},"cc":{"i":["1"],"p":["1"],"m":["1"],"k":["1"]},"cz":{"G":["1","2"]},"cA":{"G":["1","2"]},"d6":{"I":[]},"et":{"I":[]},"fn":{"I":[]},"eW":{"I":[]},"T":{"M":["1","2"],"G":["1","2"],"M.V":"2"},"cT":{"m":["1"],"k":["1"]},"es":{"lE":[]},"c1":{"A":["1"],"a_":[]},"bA":{"i":["L"],"A":["L"],"p":["L"],"a_":[],"m":["L"],"k":["L"],"i.E":"L"},"d3":{"i":["j"],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"]},"eF":{"i":["j"],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"eG":{"i":["j"],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"eH":{"i":["j"],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"eI":{"i":["j"],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"eJ":{"i":["j"],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"d4":{"i":["j"],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"bB":{"i":["j"],"ca":[],"A":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"fH":{"I":[]},"dO":{"I":[]},"dN":{"j7":[]},"dK":{"k":["1"]},"dz":{"db":["1"],"m":["1"],"k":["1"]},"cO":{"k":["1"]},"cU":{"i":["1"],"p":["1"],"m":["1"],"k":["1"]},"cW":{"M":["1","2"],"G":["1","2"]},"M":{"G":["1","2"]},"cX":{"G":["1","2"]},"cd":{"G":["1","2"]},"dH":{"db":["1"],"m":["1"],"k":["1"]},"L":{"a4":[]},"j":{"a4":[]},"p":{"m":["1"],"k":["1"]},"ea":{"I":[]},"fg":{"I":[]},"eK":{"I":[]},"aI":{"I":[]},"d9":{"I":[]},"eo":{"I":[]},"fp":{"I":[]},"fm":{"I":[]},"f2":{"I":[]},"ef":{"I":[]},"eN":{"I":[]},"dd":{"I":[]},"eh":{"I":[]},"bK":{"fq":[]},"h2":{"fq":[]},"fB":{"fq":[]},"D":{"v":[],"e":[]},"aj":{"br":[]},"kx":{"D":[],"v":[],"e":[]},"by":{"l":[]},"ak":{"l":[]},"v":{"e":[]},"at":{"e":[]},"au":{"e":[]},"ag":{"e":[]},"bD":{"l":[]},"b_":{"l":[]},"bj":{"ak":[],"l":[]},"o":{"D":[],"v":[],"e":[]},"e8":{"D":[],"v":[],"e":[]},"e9":{"D":[],"v":[],"e":[]},"bs":{"D":[],"v":[],"e":[]},"ay":{"v":[],"e":[]},"cE":{"i":["ac<a4>"],"p":["ac<a4>"],"A":["ac<a4>"],"m":["ac<a4>"],"k":["ac<a4>"],"i.E":"ac<a4>"},"cF":{"ac":["a4"]},"ek":{"i":["r"],"p":["r"],"A":["r"],"m":["r"],"k":["r"],"i.E":"r"},"fy":{"i":["D"],"p":["D"],"m":["D"],"k":["D"],"i.E":"D"},"bS":{"i":["aj"],"p":["aj"],"A":["aj"],"m":["aj"],"k":["aj"],"i.E":"aj"},"el":{"e":[]},"en":{"D":[],"v":[],"e":[]},"bv":{"i":["v"],"p":["v"],"A":["v"],"m":["v"],"k":["v"],"i.E":"v"},"bU":{"D":[],"v":[],"e":[]},"bW":{"kx":[],"D":[],"v":[],"e":[]},"bZ":{"e":[]},"eC":{"M":["r","@"],"G":["r","@"],"M.V":"@"},"eD":{"M":["r","@"],"G":["r","@"],"M.V":"@"},"eE":{"i":["aA"],"p":["aA"],"A":["aA"],"m":["aA"],"k":["aA"],"i.E":"aA"},"fx":{"i":["v"],"p":["v"],"m":["v"],"k":["v"],"i.E":"v"},"d5":{"i":["v"],"p":["v"],"A":["v"],"m":["v"],"k":["v"],"i.E":"v"},"eQ":{"i":["aB"],"p":["aB"],"A":["aB"],"m":["aB"],"k":["aB"],"i.E":"aB"},"eV":{"M":["r","@"],"G":["r","@"],"M.V":"@"},"eX":{"D":[],"v":[],"e":[]},"eZ":{"i":["at"],"p":["at"],"A":["at"],"e":[],"m":["at"],"k":["at"],"i.E":"at"},"f_":{"i":["aC"],"p":["aC"],"A":["aC"],"m":["aC"],"k":["aC"],"i.E":"aC"},"f3":{"M":["r","r"],"G":["r","r"],"M.V":"r"},"bh":{"D":[],"v":[],"e":[]},"f7":{"i":["ag"],"p":["ag"],"A":["ag"],"m":["ag"],"k":["ag"],"i.E":"ag"},"f8":{"i":["au"],"p":["au"],"A":["au"],"e":[],"m":["au"],"k":["au"],"i.E":"au"},"fe":{"i":["av"],"p":["av"],"A":["av"],"m":["av"],"k":["av"],"i.E":"av"},"fs":{"e":[]},"ci":{"e":[]},"fz":{"i":["F"],"p":["F"],"A":["F"],"m":["F"],"k":["F"],"i.E":"F"},"dx":{"ac":["a4"]},"fM":{"i":["az?"],"p":["az?"],"A":["az?"],"m":["az?"],"k":["az?"],"i.E":"az?"},"dC":{"i":["v"],"p":["v"],"A":["v"],"m":["v"],"k":["v"],"i.E":"v"},"h5":{"i":["aD"],"p":["aD"],"A":["aD"],"m":["aD"],"k":["aD"],"i.E":"aD"},"hc":{"i":["am"],"p":["am"],"A":["am"],"m":["am"],"k":["am"],"i.E":"am"},"dy":{"c7":["1"]},"dP":{"bw":[]},"em":{"i":["D"],"p":["D"],"m":["D"],"k":["D"],"i.E":"D"},"ac":{"h0":["1"]},"ev":{"i":["aP"],"p":["aP"],"m":["aP"],"k":["aP"],"i.E":"aP"},"eL":{"i":["aU"],"p":["aU"],"m":["aU"],"k":["aU"],"i.E":"aU"},"f5":{"i":["r"],"p":["r"],"m":["r"],"k":["r"],"i.E":"r"},"n":{"D":[],"v":[],"e":[]},"ff":{"i":["aY"],"p":["aY"],"m":["aY"],"k":["aY"],"i.E":"aY"},"ec":{"M":["r","@"],"G":["r","@"],"M.V":"@"},"ed":{"e":[]},"b8":{"e":[]},"eM":{"e":[]},"f0":{"i":["G<@,@>"],"p":["G<@,@>"],"m":["G<@,@>"],"k":["G<@,@>"],"i.E":"G<@,@>"},"cN":{"bz":[]},"e7":{"bz":[]},"aT":{"bz":[]},"Y":{"bz":[]},"dh":{"bz":[]},"ab":{"k":["1"],"ab.T":"1"},"aM":{"S":[]},"aN":{"S":[]},"t":{"S":[]},"cV":{"S":[]},"c_":{"S":[]},"c0":{"S":[]},"eS":{"S":[]},"dg":{"S":[]},"n6":{"ar":[]},"ni":{"ar":[]},"c3":{"ar":[]},"nQ":{"ar":[]},"cS":{"ab":["ar"],"k":["ar"],"ab.T":"ar"},"cy":{"a1":[]},"bT":{"ab":["a1?"],"a1":[],"k":["a1?"],"ab.T":"a1?"},"da":{"a1":[]},"ds":{"a1":[]},"dt":{"a1":[]},"cx":{"ab":["al"],"al":[],"k":["al"],"ab.T":"al"},"cB":{"al":[]},"cH":{"al":[]},"cK":{"al":[]},"bE":{"a0":[]},"bF":{"a0":[]},"bG":{"a0":[]},"bH":{"a0":[]},"cD":{"bf":[]},"cL":{"bf":[]},"cY":{"bf":[]},"df":{"bf":[]},"fi":{"a0":[]},"fj":{"a0":[]},"fk":{"a0":[]},"fh":{"a0":[]},"di":{"a0":[]},"dj":{"a0":[]},"dk":{"a0":[]},"fl":{"a0":[]},"dn":{"a0":[]},"dq":{"a0":[]},"ej":{"bi":[]},"cM":{"bi":[]},"cZ":{"bi":[]},"de":{"bi":[]},"f9":{"c8":[]},"fa":{"c8":[]},"ca":{"p":["j"],"m":["j"],"k":["j"]}}'))
H.ok(v.typeUniverse,JSON.parse('{"aa":1,"m":1,"bY":1,"ez":2,"fu":1,"cI":1,"fo":1,"cc":1,"cz":2,"ex":1,"c1":1,"c7":1,"ck":1,"f4":2,"dA":1,"cO":1,"cU":1,"cW":2,"hl":2,"cX":2,"dH":1,"dB":1,"dS":2,"dU":1,"ee":2,"eg":2,"ep":1,"dy":1,"J":1,"cJ":1,"aM":1,"aN":1,"t":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.l6
return{fK:s("br"),eT:s("bP"),C:s("aJ"),gA:s("bs"),ar:s("cw"),gw:s("m<@>"),h:s("D"),l:s("bb"),bU:s("I"),aD:s("l"),c8:s("aj"),bX:s("bS"),b8:s("q8"),x:s("bw"),fS:s("bU"),gk:s("bW"),eu:s("u<eb>"),i:s("u<n6>"),cn:s("u<b7>"),dh:s("u<kx>"),U:s("u<ni>"),fD:s("u<ba>"),hh:s("u<bb>"),u:s("u<aq>"),fv:s("u<bV>"),e:s("u<ar>"),L:s("u<ew>"),B:s("u<bz>"),fA:s("u<aR>"),q:s("u<eR>"),cG:s("u<U>"),eg:s("u<bd>"),o:s("u<c3>"),ba:s("u<al>"),D:s("u<nQ>"),c3:s("u<bg>"),g9:s("u<c7<N>>"),s:s("u<r>"),d:s("u<c8>"),gT:s("u<av>"),ab:s("u<dh>"),gN:s("u<ca>"),dC:s("u<a0>"),Y:s("u<dl>"),V:s("u<dm>"),E:s("u<dp>"),J:s("u<dr>"),k:s("u<ce>"),n:s("u<L>"),gn:s("u<@>"),t:s("u<j>"),M:s("u<a1?>"),bc:s("u<bi?>"),fL:s("u<bE?>"),bT:s("u<bF?>"),p:s("u<bG?>"),h4:s("u<bH?>"),a:s("u<~(S)>"),T:s("cQ"),eH:s("ls"),O:s("aO"),aU:s("A<@>"),fX:s("T<j,b1>"),w:s("T<j,j>"),b:s("p<dl>"),c:s("p<dm>"),m:s("p<dp>"),R:s("p<dr>"),r:s("p<@>"),bv:s("cV"),f:s("G<@,@>"),gc:s("aR"),bK:s("bZ"),Z:s("c_"),bZ:s("c0"),cH:s("d2"),dE:s("a_"),bm:s("bB"),P:s("af"),K:s("N"),I:s("ac<a4>"),fJ:s("lE"),fg:s("bf"),N:s("r"),bY:s("bh"),gb:s("c9"),aF:s("j7"),bJ:s("fc"),dr:s("dg"),v:s("di"),y:s("bE"),fp:s("bF"),g:s("dj"),F:s("dk"),Q:s("dn"),j:s("bG"),G:s("bH"),bz:s("dq"),ak:s("cb"),dw:s("cd<r,r>"),dD:s("fq"),cJ:s("b1"),gR:s("L"),z:s("@"),S:s("j"),A:s("0&*"),_:s("N*"),gO:s("cD?"),bG:s("lo<af>?"),bF:s("cL?"),eI:s("cY?"),X:s("N?"),gW:s("c5?"),dl:s("f1?"),fB:s("df?"),f7:s("fd?"),W:s("bE?"),ch:s("bF?"),em:s("bG?"),cI:s("bH?"),H:s("a4"),h2:s("~(S)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.j=W.bs.prototype
C.Q=J.a.prototype
C.b=J.u.prototype
C.c=J.cP.prototype
C.R=J.cQ.prototype
C.d=J.bX.prototype
C.a=J.bx.prototype
C.S=J.aO.prototype
C.X=H.bB.prototype
C.y=J.eP.prototype
C.z=P.c5.prototype
C.p=J.cb.prototype
C.A=W.bj.prototype
C.B=W.ci.prototype
C.C=new E.bO("Browser.chrome")
C.q=new E.bO("Browser.firefox")
C.r=new E.bO("Browser.edge")
C.D=new E.bO("Browser.other")
C.a2=new P.hH()
C.E=new P.hG()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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

C.L=new P.eN()
C.e=new P.jm()
C.M=new P.jq()
C.f=new P.jH()
C.i=new A.bR(0,"ColorBlendType.Overwrite")
C.N=new A.bR(1,"ColorBlendType.Additive")
C.O=new A.bR(2,"ColorBlendType.Average")
C.n=new A.bR(3,"ColorBlendType.AlphaBlend")
C.o=new P.bt(0)
C.P=new P.bt(5e6)
C.k=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.l=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.m=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.U=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.V=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.v=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.w=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.T=H.b(s([]),t.s)
C.W=new H.cA(0,{},C.T,H.l6("cA<r,r>"))
C.Y=new E.c2("OperatingSystem.windows")
C.x=new E.c2("OperatingSystem.mac")
C.Z=new E.c2("OperatingSystem.linux")
C.a_=new E.c2("OperatingSystem.other")
C.a0=new P.jn(!1)
C.a1=new P.cj(null,2)})();(function staticFields(){$.jE=null
$.aK=0
$.cu=null
$.lh=null
$.mu=null
$.mr=null
$.mA=null
$.k5=null
$.kf=null
$.l8=null
$.cn=null
$.dX=null
$.dY=null
$.l2=!1
$.aF=C.f
$.ah=H.b([],H.l6("u<N>"))
$.i0=null
$.lv=null
$.iD=null
$.a7=null
$.aV=null
$.lF=null
$.bI=null
$.lT=null
$.lY=null
$.lW=null
$.lX=null
$.lV=null
$.m_=null
$.lZ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"q5","mJ",function(){return H.pE("_$dart_dartClosure")})
s($,"qk","mL",function(){return H.aZ(H.jc({
toString:function(){return"$receiver$"}}))})
s($,"ql","mM",function(){return H.aZ(H.jc({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qm","mN",function(){return H.aZ(H.jc(null))})
s($,"qn","mO",function(){return H.aZ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qq","mR",function(){return H.aZ(H.jc(void 0))})
s($,"qr","mS",function(){return H.aZ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qp","mQ",function(){return H.aZ(H.lO(null))})
s($,"qo","mP",function(){return H.aZ(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"qt","mU",function(){return H.aZ(H.lO(void 0))})
s($,"qs","mT",function(){return H.aZ(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"qJ","le",function(){return P.o0()})
s($,"qu","mV",function(){return new P.jp().$0()})
s($,"qv","mW",function(){return new P.jo().$0()})
s($,"qK","mY",function(){return H.nw(H.cm(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qM","mZ",function(){return P.nJ("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qZ","n_",function(){return P.oH()})
s($,"qC","mX",function(){return Z.aw(0)})
s($,"qw","lc",function(){return Z.aw(511)})
s($,"qE","a9",function(){return Z.aw(1)})
s($,"qD","aG",function(){return Z.aw(2)})
s($,"qy","b5",function(){return Z.aw(4)})
s($,"qF","ax",function(){return Z.aw(8)})
s($,"qG","bq",function(){return Z.aw(16)})
s($,"qz","e3",function(){return Z.aw(32)})
s($,"qA","e4",function(){return Z.aw(64)})
s($,"qB","ld",function(){return Z.aw(96)})
s($,"qH","bM",function(){return Z.aw(128)})
s($,"qx","b4",function(){return Z.aw(256)})
s($,"q1","mI",function(){return new V.i1()})
r($,"q0","z",function(){return $.mI()})
r($,"qg","mK",function(){var q,p,o,n,m,l=V.nx(),k=$.lW
if(k==null)k=$.lW=V.lU(0,1,0)
q=$.lV
p=(q==null?$.lV=V.lU(0,0,-1):q).M()
o=k.bf(p).M()
n=p.bf(o)
m=V.o_(l)
return V.aS(o.a,n.a,p.a,o.b7(0).ak(m),o.b,n.b,p.b,n.b7(0).ak(m),o.c,n.c,p.c,p.b7(0).ak(m),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.d2,DataView:H.a_,ArrayBufferView:H.a_,Float32Array:H.bA,Float64Array:H.bA,Int16Array:H.eF,Int32Array:H.eG,Int8Array:H.eH,Uint16Array:H.eI,Uint32Array:H.eJ,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.bB,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.hA,HTMLAnchorElement:W.e8,HTMLAreaElement:W.e9,Blob:W.br,HTMLCanvasElement:W.bs,CanvasRenderingContext2D:W.cw,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.hQ,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cC,MSStyleCSSProperties:W.cC,CSS2Properties:W.cC,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.hS,CSSUnparsedValue:W.hT,DataTransferItemList:W.hU,DOMException:W.hV,ClientRectList:W.cE,DOMRectList:W.cE,DOMRectReadOnly:W.cF,DOMStringList:W.ek,DOMTokenList:W.hW,Element:W.D,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aj,FileList:W.bS,FileWriter:W.el,HTMLFormElement:W.en,Gamepad:W.az,History:W.ib,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,ImageData:W.bw,HTMLImageElement:W.bU,HTMLInputElement:W.bW,KeyboardEvent:W.by,Location:W.il,MediaList:W.iE,MessagePort:W.bZ,MIDIInputMap:W.eC,MIDIOutputMap:W.eD,MimeType:W.aA,MimeTypeArray:W.eE,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.d5,RadioNodeList:W.d5,Plugin:W.aB,PluginArray:W.eQ,RTCStatsReport:W.eV,HTMLSelectElement:W.eX,SourceBuffer:W.at,SourceBufferList:W.eZ,SpeechGrammar:W.aC,SpeechGrammarList:W.f_,SpeechRecognitionResult:W.aD,Storage:W.f3,CSSStyleSheet:W.am,StyleSheet:W.am,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,TextTrack:W.au,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.f7,TextTrackList:W.f8,TimeRanges:W.j6,Touch:W.av,TouchEvent:W.bD,TouchList:W.fe,TrackDefaultList:W.ja,CompositionEvent:W.b_,FocusEvent:W.b_,TextEvent:W.b_,UIEvent:W.b_,URL:W.jl,VideoTrackList:W.fs,WheelEvent:W.bj,Window:W.ci,DOMWindow:W.ci,CSSRuleList:W.fz,ClientRect:W.dx,DOMRect:W.dx,GamepadList:W.fM,NamedNodeMap:W.dC,MozNamedAttrMap:W.dC,SpeechRecognitionResultList:W.h5,StyleSheetList:W.hc,SVGLength:P.aP,SVGLengthList:P.ev,SVGNumber:P.aU,SVGNumberList:P.eL,SVGPointList:P.iK,SVGStringList:P.f5,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aY,SVGTransformList:P.ff,AudioBuffer:P.hD,AudioParamMap:P.ec,AudioTrackList:P.ed,AudioContext:P.b8,webkitAudioContext:P.b8,BaseAudioContext:P.b8,OfflineAudioContext:P.eM,WebGL2RenderingContext:P.c5,SQLResultSetRowList:P.f0})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.dD.$nativeSuperclassTag="ArrayBufferView"
H.dE.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.dF.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.dI.$nativeSuperclassTag="EventTarget"
W.dJ.$nativeSuperclassTag="EventTarget"
W.dL.$nativeSuperclassTag="EventTarget"
W.dM.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=K.pM
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
