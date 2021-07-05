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
a[c]=function(){a[c]=function(){H.pM(b)}
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
if(a[b]!==s)H.pN(b)
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
if(w[s][a])return w[s][a]}}var C={},H={kE:function kE(){},
kG:function(a){return new H.cC("Field '"+a+"' has been assigned during initialization.")},
k1:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
iG:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nK:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
po:function(a,b,c){return a},
nn:function(a,b,c,d){if(t.gw.b(a))return new H.cv(a,b,c.I("@<0>").b3(d).I("cv<1,2>"))
return new H.aJ(a,b,c.I("@<0>").b3(d).I("aJ<1,2>"))},
ls:function(){return new P.eP("No element")},
nH:function(a,b){H.eK(a,0,J.aZ(a)-1,b)},
eK:function(a,b,c,d){if(c-b<=32)H.nG(a,b,c,d)
else H.nF(a,b,c,d)},
nG:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bB(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aj()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
nF:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.Z(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.Z(a4+a5,2),f=g-j,e=g+j,d=J.bB(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.J(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.eK(a3,a4,r-2,a6)
H.eK(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.J(a6.$2(d.h(a3,r),b),0);)++r
for(;J.J(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.eK(a3,r,q,a6)}else H.eK(a3,r,q,a6)},
cC:function cC(a){this.a=a},
S:function S(a){this.a=a},
m:function m(){},
bQ:function bQ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b){this.a=null
this.b=a
this.c=b},
di:function di(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b){this.a=a
this.b=b},
cw:function cw(){},
fb:function fb(){},
c5:function c5(){},
n9:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
mC:function(a){var s,r=H.mB(a)
if(r!=null)return r
s="minified:"+a
return s},
mv:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dT(a)
return s},
cT:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lB:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a9(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
cU:function(a){return H.nq(a)},
nq:function(a){var s,r,q,p
if(a instanceof P.O)return H.an(H.aU(a),null)
if(J.dO(a)===C.L||t.ak.b(a)){s=C.q(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.an(H.aU(a),null)},
nr:function(){if(!!self.location)return self.location.href
return null},
lA:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nz:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.jP(q))throw H.c(H.dN(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aP(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.dN(q))}return H.lA(p)},
lC:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jP(q))throw H.c(H.dN(q))
if(q<0)throw H.c(H.dN(q))
if(q>65535)return H.nz(a)}return H.lA(a)},
nA:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aO:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aP(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a9(a,0,1114111,null,null))},
bX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ny:function(a){var s=H.bX(a).getFullYear()+0
return s},
nw:function(a){var s=H.bX(a).getMonth()+1
return s},
ns:function(a){var s=H.bX(a).getDate()+0
return s},
nt:function(a){var s=H.bX(a).getHours()+0
return s},
nv:function(a){var s=H.bX(a).getMinutes()+0
return s},
nx:function(a){var s=H.bX(a).getSeconds()+0
return s},
nu:function(a){var s=H.bX(a).getMilliseconds()+0
return s},
mt:function(a){throw H.c(H.dN(a))},
d:function(a,b){if(a==null)J.aZ(a)
throw H.c(H.ci(a,b))},
ci:function(a,b){var s,r="index"
if(!H.jP(b))return new P.aE(!0,b,r,null)
s=J.aZ(a)
if(b<0||b>=s)return P.M(b,a,r,null,s)
return P.eF(b,r)},
pv:function(a,b,c){if(a>c)return P.a9(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a9(b,a,c,"end",null)
return new P.aE(!0,b,"end",null)},
dN:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.ew()
s=new Error()
s.dartException=a
r=H.pO
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pO:function(){return J.dT(this.dartException)},
h:function(a){throw H.c(a)},
r:function(a){throw H.c(P.b1(a))},
aQ:function(a){var s,r,q,p,o,n
a=H.my(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iV(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iW:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lP:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kF:function(a,b){var s=b==null,r=s?null:b.method
return new H.ef(a,r,s?null:b.receiver)},
bh:function(a){if(a==null)return new H.iq(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bC(a,a.dartException)
return H.pk(a)},
bC:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pk:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aP(r,16)&8191)===10)switch(q){case 438:return H.bC(a,H.kF(H.w(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.w(s)+" (Error "+q+")"
return H.bC(a,new H.cS(p,e))}}if(a instanceof TypeError){o=$.mG()
n=$.mH()
m=$.mI()
l=$.mJ()
k=$.mM()
j=$.mN()
i=$.mL()
$.mK()
h=$.mP()
g=$.mO()
f=o.ah(s)
if(f!=null)return H.bC(a,H.kF(s,f))
else{f=n.ah(s)
if(f!=null){f.method="call"
return H.bC(a,H.kF(s,f))}else{f=m.ah(s)
if(f==null){f=l.ah(s)
if(f==null){f=k.ah(s)
if(f==null){f=j.ah(s)
if(f==null){f=i.ah(s)
if(f==null){f=l.ah(s)
if(f==null){f=h.ah(s)
if(f==null){f=g.ah(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bC(a,new H.cS(s,f==null?e:f.method))}}return H.bC(a,new H.fa(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.d_()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bC(a,new P.aE(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.d_()
return a},
l7:function(a){var s
if(a==null)return new H.fW(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fW(a)},
px:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
pC:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
ch:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pC)
a.$identity=s
return s},
n8:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iE().constructor.prototype):Object.create(new H.ck(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aF
if(typeof r!=="number")return r.T()
$.aF=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lm(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.n4(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lm(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
n4:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ms,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.n2:H.n1
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
n5:function(a,b,c,d){var s=H.ll
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lm:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.n7(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.n5(r,!p,s,b)
if(r===0){p=$.aF
if(typeof p!=="number")return p.T()
$.aF=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cl
return new Function(p+(o==null?$.cl=H.hw("self"):o)+";return "+n+"."+H.w(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aF
if(typeof p!=="number")return p.T()
$.aF=p+1
m+=p
p="return function("+m+"){return this."
o=$.cl
return new Function(p+(o==null?$.cl=H.hw("self"):o)+"."+H.w(s)+"("+m+");}")()},
n6:function(a,b,c,d){var s=H.ll,r=H.n3
switch(b?-1:a){case 0:throw H.c(new H.eI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
n7:function(a,b){var s,r,q,p,o,n,m,l=$.cl
if(l==null)l=$.cl=H.hw("self")
s=$.lk
if(s==null)s=$.lk=H.hw("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.n6(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.w(r)+"(this."+s+");"
n=$.aF
if(typeof n!=="number")return n.T()
$.aF=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.w(r)+"(this."+s+", "+m+");"
n=$.aF
if(typeof n!=="number")return n.T()
$.aF=n+1
return new Function(o+n+"}")()},
l5:function(a,b,c,d,e,f,g){return H.n8(a,b,c,d,!!e,!!f,g)},
n1:function(a,b){return H.h8(v.typeUniverse,H.aU(a.a),b)},
n2:function(a,b){return H.h8(v.typeUniverse,H.aU(a.c),b)},
ll:function(a){return a.a},
n3:function(a){return a.c},
hw:function(a){var s,r,q,p=new H.ck("self","target","receiver","name"),o=J.kD(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bE("Field name "+a+" not found."))},
pM:function(a){throw H.c(new P.e3(a))},
py:function(a){return v.getIsolateTag(a)},
pN:function(a){return H.h(new H.cC(a))},
qW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pF:function(a){var s,r,q,p,o,n=$.mr.$1(a),m=$.jX[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mm.$2(a,n)
if(q!=null){m=$.jX[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kq(s)
$.jX[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.k5[n]=s
return s}if(p==="-"){o=H.kq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mw(a,s)
if(p==="*")throw H.c(P.iZ(n))
if(v.leafTags[n]===true){o=H.kq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mw(a,s)},
mw:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.la(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kq:function(a){return J.la(a,!1,null,!!a.$iy)},
pH:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kq(s)
else return J.la(s,c,null,null)},
pA:function(){if(!0===$.l9)return
$.l9=!0
H.pB()},
pB:function(){var s,r,q,p,o,n,m,l
$.jX=Object.create(null)
$.k5=Object.create(null)
H.pz()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mx.$1(o)
if(n!=null){m=H.pH(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pz:function(){var s,r,q,p,o,n,m=C.C()
m=H.cg(C.D,H.cg(C.E,H.cg(C.r,H.cg(C.r,H.cg(C.F,H.cg(C.G,H.cg(C.H(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mr=new H.k2(p)
$.mm=new H.k3(o)
$.mx=new H.k4(n)},
cg:function(a,b){return a(b)||b},
nj:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
mz:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pw:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
my:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mA:function(a,b,c){var s=H.pL(a,b,c)
return s},
pL:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.my(b),'g'),H.pw(c))},
cq:function cq(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cS:function cS(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a){this.a=a},
iq:function iq(a){this.a=a},
fW:function fW(a){this.a=a
this.b=null},
bH:function bH(){},
iI:function iI(){},
iE:function iE(){},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a){this.a=a},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hX:function hX(a){this.a=a},
i_:function i_(a,b){this.a=a
this.b=b
this.c=null},
cE:function cE(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bB(a)
r=s.gj(a)
q=P.cG(r,null,!1,t.z)
for(p=0;p<s.gj(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aS:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ci(b,a))},
oy:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pv(a,b,c))
return b},
cO:function cO(){},
a0:function a0(){},
bU:function bU(){},
bu:function bu(){},
cP:function cP(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
cQ:function cQ(){},
bv:function bv(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
lJ:function(a,b){var s=b.c
return s==null?b.c=H.kU(a,b.z,!0):s},
lI:function(a,b){var s=b.c
return s==null?b.c=H.dD(a,"lq",[b.z]):s},
lK:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lK(a.z)
return s===11||s===12},
nD:function(a){return a.cy},
l6:function(a){return H.kV(v.typeUniverse,a,!1)},
bf:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bf(a,s,a0,a1)
if(r===s)return b
return H.m5(a,r,!0)
case 7:s=b.z
r=H.bf(a,s,a0,a1)
if(r===s)return b
return H.kU(a,r,!0)
case 8:s=b.z
r=H.bf(a,s,a0,a1)
if(r===s)return b
return H.m4(a,r,!0)
case 9:q=b.Q
p=H.dM(a,q,a0,a1)
if(p===q)return b
return H.dD(a,b.z,p)
case 10:o=b.z
n=H.bf(a,o,a0,a1)
m=b.Q
l=H.dM(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kS(a,n,l)
case 11:k=b.z
j=H.bf(a,k,a0,a1)
i=b.Q
h=H.ph(a,i,a0,a1)
if(j===k&&h===i)return b
return H.m3(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dM(a,g,a0,a1)
o=b.z
n=H.bf(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kT(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hp("Attempted to substitute unexpected RTI kind "+c))}},
dM:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bf(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pi:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bf(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
ph:function(a,b,c,d){var s,r=b.a,q=H.dM(a,r,c,d),p=b.b,o=H.dM(a,p,c,d),n=b.c,m=H.pi(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fy()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
pp:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ms(s)
return a.$S()}return null},
mu:function(a,b){var s
if(H.lK(b))if(a instanceof H.bH){s=H.pp(a)
if(s!=null)return s}return H.aU(a)},
aU:function(a){var s
if(a instanceof P.O){s=a.$ti
return s!=null?s:H.l1(a)}if(Array.isArray(a))return H.l0(a)
return H.l1(J.dO(a))},
l0:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U:function(a){var s=a.$ti
return s!=null?s:H.l1(a)},
l1:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.oG(a,s)},
oG:function(a,b){var s=a instanceof H.bH?a.__proto__.__proto__.constructor:b,r=H.of(v.typeUniverse,s.name)
b.$ccache=r
return r},
ms:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kV(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oF:function(a){var s,r,q,p=this
if(p===t.K)return H.dJ(p,a,H.oK)
if(!H.aV(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dJ(p,a,H.oN)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jP
else if(r===t.gR||r===t.H)q=H.oJ
else if(r===t.N)q=H.oL
else q=r===t.cJ?H.jO:null
if(q!=null)return H.dJ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.pD)){p.r="$i"+s
return H.dJ(p,a,H.oM)}}else if(s===7)return H.dJ(p,a,H.oD)
return H.dJ(p,a,H.oB)},
dJ:function(a,b,c){a.b=c
return a.b(b)},
oE:function(a){var s,r=this,q=H.oA
if(!H.aV(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.ox
else if(r===t.K)q=H.ov
else{s=H.dP(r)
if(s)q=H.oC}r.a=q
return r.a(a)},
l4:function(a){var s,r=a.y
if(!H.aV(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.l4(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oB:function(a){var s=this
if(a==null)return H.l4(s)
return H.P(v.typeUniverse,H.mu(a,s),null,s,null)},
oD:function(a){if(a==null)return!0
return this.z.b(a)},
oM:function(a){var s,r=this
if(a==null)return H.l4(r)
s=r.r
if(a instanceof P.O)return!!a[s]
return!!J.dO(a)[s]},
oA:function(a){var s,r=this
if(a==null){s=H.dP(r)
if(s)return a}else if(r.b(a))return a
H.mg(a,r)},
oC:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mg(a,s)},
mg:function(a,b){throw H.c(H.o5(H.lZ(a,H.mu(a,b),H.an(b,null))))},
lZ:function(a,b,c){var s=P.hN(a),r=H.an(b==null?H.aU(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
o5:function(a){return new H.dB("TypeError: "+a)},
ab:function(a,b){return new H.dB("TypeError: "+H.lZ(a,null,b))},
oK:function(a){return a!=null},
ov:function(a){if(a!=null)return a
throw H.c(H.ab(a,"Object"))},
oN:function(a){return!0},
ox:function(a){return a},
jO:function(a){return!0===a||!1===a},
me:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
qK:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
qJ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
qL:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
qN:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
qM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
jP:function(a){return typeof a=="number"&&Math.floor(a)===a},
jI:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
qP:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
qO:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
oJ:function(a){return typeof a=="number"},
qQ:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
qS:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
qR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
oL:function(a){return typeof a=="string"},
ow:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
qU:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
qT:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
pd:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.an(a[q],b)
return s},
mh:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
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
if(l===9){p=H.pj(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pd(o,b)+">"):p}if(l===11)return H.mh(a,b,null)
if(l===12)return H.mh(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
pj:function(a){var s,r=H.mB(a)
if(r!=null)return r
s="minified:"+a
return s},
m6:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
of:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kV(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dE(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dD(a,b,q)
n[b]=o
return o}else return m},
od:function(a,b){return H.md(a.tR,b)},
oc:function(a,b){return H.md(a.eT,b)},
kV:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.m2(H.m0(a,null,b,c))
r.set(b,s)
return s},
h8:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.m2(H.m0(a,b,c,!0))
q.set(c,r)
return r},
oe:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kS(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
be:function(a,b){b.a=H.oE
b.b=H.oF
return b},
dE:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.at(null,null)
s.y=b
s.cy=c
r=H.be(a,s)
a.eC.set(c,r)
return r},
m5:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oa(a,b,r,c)
a.eC.set(r,s)
return s},
oa:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.at(null,null)
q.y=6
q.z=b
q.cy=c
return H.be(a,q)},
kU:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.o9(a,b,r,c)
a.eC.set(r,s)
return s},
o9:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aV(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dP(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dP(q.z))return q
else return H.lJ(a,b)}}p=new H.at(null,null)
p.y=7
p.z=b
p.cy=c
return H.be(a,p)},
m4:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.o7(a,b,r,c)
a.eC.set(r,s)
return s},
o7:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dD(a,"lq",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.at(null,null)
q.y=8
q.z=b
q.cy=c
return H.be(a,q)},
ob:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.at(null,null)
s.y=13
s.z=b
s.cy=q
r=H.be(a,s)
a.eC.set(q,r)
return r},
h7:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
o6:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dD:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h7(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.at(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.be(a,r)
a.eC.set(p,q)
return q},
kS:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h7(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.at(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.be(a,o)
a.eC.set(q,n)
return n},
m3:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h7(m)
if(j>0){s=l>0?",":""
r=H.h7(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.o6(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.at(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.be(a,o)
a.eC.set(q,r)
return r},
kT:function(a,b,c,d){var s,r=b.cy+("<"+H.h7(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.o8(a,b,c,r,d)
a.eC.set(r,s)
return s},
o8:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bf(a,b,r,0)
m=H.dM(a,c,r,0)
return H.kT(a,n,m,c!==m)}}l=new H.at(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.be(a,l)},
m0:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
m2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.o_(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.m1(a,r,h,g,!1)
else if(q===46)r=H.m1(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bd(a.u,a.e,g.pop()))
break
case 94:g.push(H.ob(a.u,g.pop()))
break
case 35:g.push(H.dE(a.u,5,"#"))
break
case 64:g.push(H.dE(a.u,2,"@"))
break
case 126:g.push(H.dE(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kR(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dD(p,n,o))
else{m=H.bd(p,a.e,n)
switch(m.y){case 11:g.push(H.kT(p,m,o,a.n))
break
default:g.push(H.kS(p,m,o))
break}}break
case 38:H.o0(a,g)
break
case 42:p=a.u
g.push(H.m5(p,H.bd(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kU(p,H.bd(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.m4(p,H.bd(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fy()
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
H.kR(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.m3(p,H.bd(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kR(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.o2(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bd(a.u,a.e,i)},
o_:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
m1:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.m6(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.nD(o)+'"')
d.push(H.h8(s,o,n))}else d.push(p)
return m},
o0:function(a,b){var s=b.pop()
if(0===s){b.push(H.dE(a.u,1,"0&"))
return}if(1===s){b.push(H.dE(a.u,4,"1&"))
return}throw H.c(P.hp("Unexpected extended operation "+H.w(s)))},
bd:function(a,b,c){if(typeof c=="string")return H.dD(a,c,a.sEA)
else if(typeof c=="number")return H.o1(a,b,c)
else return c},
kR:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bd(a,b,c[s])},
o2:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bd(a,b,c[s])},
o1:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hp("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hp("Bad index "+c+" for "+b.i(0)))},
P:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aV(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aV(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.P(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.P(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.P(a,b.z,c,d,e)
if(r===6)return H.P(a,b.z,c,d,e)
return r!==7}if(r===6)return H.P(a,b.z,c,d,e)
if(p===6){s=H.lJ(a,d)
return H.P(a,b,c,s,e)}if(r===8){if(!H.P(a,b.z,c,d,e))return!1
return H.P(a,H.lI(a,b),c,d,e)}if(r===7){s=H.P(a,t.P,c,d,e)
return s&&H.P(a,b.z,c,d,e)}if(p===8){if(H.P(a,b,c,d.z,e))return!0
return H.P(a,b,c,H.lI(a,d),e)}if(p===7){s=H.P(a,b,c,t.P,e)
return s||H.P(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b8)return!0
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
if(!H.P(a,k,c,j,e)||!H.P(a,j,e,k,c))return!1}return H.mi(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mi(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oI(a,b,c,d,e)}return!1},
mi:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.P(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.P(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.P(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.P(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.P(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oI:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.P(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.m6(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.P(a,H.h8(a,b,l[p]),c,r[p],e))return!1
return!0},
dP:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aV(a))if(r!==7)if(!(r===6&&H.dP(a.z)))s=r===8&&H.dP(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pD:function(a){var s
if(!H.aV(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aV:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
md:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
at:function at(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fy:function fy(){this.c=this.b=this.a=null},
fu:function fu(){},
dB:function dB(a){this.a=a},
mB:function(a){return v.mangledGlobalNames[a]},
pI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
la:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jZ:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.l9==null){H.pA()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.iZ("Return interceptor for "+H.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jr
if(o==null)o=$.jr=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.pF(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){o=$.jr
if(o==null)o=$.jr=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
ng:function(a,b){if(a<0||a>4294967295)throw H.c(P.a9(a,0,4294967295,"length",null))
return J.nh(new Array(a),b)},
kC:function(a,b){if(a<0)throw H.c(P.bE("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.I("u<0>"))},
nh:function(a,b){return J.kD(H.b(a,b.I("u<0>")))},
kD:function(a){a.fixed$length=Array
return a},
ni:function(a,b){return J.mY(a,b)},
dO:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.ed.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.ec.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.O)return a
return J.jZ(a)},
bB:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.O)return a
return J.jZ(a)},
jY:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.O)return a
return J.jZ(a)},
mq:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c4.prototype
return a},
aT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.O)return a
return J.jZ(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dO(a).m(a,b)},
lg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mq(a).H(a,b)},
lh:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bB(a).h(a,b)},
kv:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mv(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jY(a).k(a,b,c)},
mW:function(a,b,c){return J.aT(a).fE(a,b,c)},
mX:function(a,b,c,d){return J.aT(a).fY(a,b,c,d)},
mY:function(a,b){return J.mq(a).ae(a,b)},
kw:function(a,b){return J.jY(a).G(a,b)},
dS:function(a,b){return J.jY(a).w(a,b)},
li:function(a){return J.aT(a).gaz(a)},
mZ:function(a){return J.aT(a).gdi(a)},
kx:function(a){return J.dO(a).gA(a)},
aD:function(a){return J.jY(a).gO(a)},
aZ:function(a){return J.bB(a).gj(a)},
n_:function(a,b){return J.aT(a).hN(a,b)},
dT:function(a){return J.dO(a).i(a)},
a:function a(){},
ec:function ec(){},
cB:function cB(){},
b5:function b5(){},
eB:function eB(){},
c4:function c4(){},
aH:function aH(){},
u:function u(a){this.$ti=a},
hW:function hW(a){this.$ti=a},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bP:function bP(){},
cA:function cA(){},
ed:function ed(){},
br:function br(){}},P={
nT:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pl()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ch(new P.jn(q),1)).observe(s,{childList:true})
return new P.jm(q,s,r)}else if(self.setImmediate!=null)return P.pm()
return P.pn()},
nU:function(a){self.scheduleImmediate(H.ch(new P.jo(a),0))},
nV:function(a){self.setImmediate(H.ch(new P.jp(a),0))},
nW:function(a){P.kJ(C.m,a)},
kJ:function(a,b){var s=C.c.Z(a.a,1000)
return P.o3(s<0?0:s,b)},
lO:function(a,b){var s=C.c.Z(a.a,1000)
return P.o4(s<0?0:s,b)},
o3:function(a,b){var s=new P.dA()
s.eh(a,b)
return s},
o4:function(a,b){var s=new P.dA()
s.ei(a,b)
return s},
qH:function(a){return new P.cb(a,1)},
nX:function(){return C.Y},
nY:function(a){return new P.cb(a,3)},
oP:function(a,b){return new P.dx(a,b.I("dx<0>"))},
pa:function(){var s,r
for(s=$.cf;s!=null;s=$.cf){$.dL=null
r=s.b
$.cf=r
if(r==null)$.dK=null
s.a.$0()}},
pg:function(){$.l2=!0
try{P.pa()}finally{$.dL=null
$.l2=!1
if($.cf!=null)$.lf().$1(P.mn())}},
pe:function(a){var s=new P.fi(a),r=$.dK
if(r==null){$.cf=$.dK=s
if(!$.l2)$.lf().$1(P.mn())}else $.dK=r.b=s},
pf:function(a){var s,r,q,p=$.cf
if(p==null){P.pe(a)
$.dL=$.dK
return}s=new P.fi(a)
r=$.dL
if(r==null){s.b=p
$.cf=$.dL=s}else{q=r.b
s.b=q
$.dL=r.b=s
if(q==null)$.dK=s}},
lN:function(a,b){var s=$.aB
if(s===C.f)return P.kJ(a,b)
return P.kJ(a,s.h1(b))},
nM:function(a,b){var s=$.aB
if(s===C.f)return P.lO(a,b)
return P.lO(a,s.df(b,t.aF))},
mj:function(a,b,c,d,e){P.pf(new P.jS(d,e))},
pb:function(a,b,c,d){var s,r=$.aB
if(r===c)return d.$0()
$.aB=c
s=r
try{r=d.$0()
return r}finally{$.aB=s}},
pc:function(a,b,c,d,e){var s,r=$.aB
if(r===c)return d.$1(e)
$.aB=c
s=r
try{r=d.$1(e)
return r}finally{$.aB=s}},
jn:function jn(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
dA:function dA(){this.c=0},
jB:function jB(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b){this.a=a
this.b=b},
cc:function cc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dx:function dx(a,b){this.a=a
this.$ti=b},
fi:function fi(a){this.a=a
this.b=null},
c_:function c_(){},
eR:function eR(){},
jG:function jG(){},
jS:function jS(a,b){this.a=a
this.b=b},
ju:function ju(){},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
nk:function(a,b){return new H.V(a.I("@<0>").b3(b).I("V<1,2>"))},
nl:function(a,b,c){return H.px(a,new H.V(b.I("@<0>").b3(c).I("V<1,2>")))},
T:function(a,b){return new H.V(a.I("@<0>").b3(b).I("V<1,2>"))},
lv:function(a){return new P.dl(a.I("dl<0>"))},
kQ:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nZ:function(a,b){var s=new P.dm(a,b)
s.c=a.e
return s},
nf:function(a,b,c){var s,r
if(P.l3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ah.push(a)
try{P.oO(a,s)}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=P.lL(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kB:function(a,b,c){var s,r
if(P.l3(a))return b+"..."+c
s=new P.a1(b)
$.ah.push(a)
try{r=s
r.a=P.lL(r.a,a,", ")}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
l3:function(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
oO:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.w(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.q()){if(j<=4){b.push(H.w(p))
return}r=H.w(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.q();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.w(p)
r=H.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
lu:function(a,b,c){var s=P.nk(b,c)
a.w(0,new P.i0(s,b,c))
return s},
kH:function(a){var s,r={}
if(P.l3(a))return"{...}"
s=new P.a1("")
try{$.ah.push(a)
s.a+="{"
r.a=!0
J.dS(a,new P.i4(r,s))
s.a+="}"}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dl:function dl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jt:function jt(a){this.a=a
this.c=this.b=null},
dm:function dm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cz:function cz(){},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(){},
j:function j(){},
cI:function cI(){},
i4:function i4(a,b){this.a=a
this.b=b},
N:function N(){},
h9:function h9(){},
cJ:function cJ(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
cW:function cW(){},
du:function du(){},
dn:function dn(){},
dF:function dF(){},
dH:function dH(){},
nP:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nQ(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nQ:function(a,b,c,d){var s=a?$.mR():$.mQ()
if(s==null)return null
if(0===c&&d===b.length)return P.lT(s,b)
return P.lT(s,b.subarray(c,P.b8(c,d,b.length)))},
lT:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.bh(r)}return null},
lj:function(a,b,c,d,e,f){if(C.c.ap(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
ou:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ot:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bB(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
j9:function j9(){},
j8:function j8(){},
ht:function ht(){},
hu:function hu(){},
e0:function e0(){},
e2:function e2(){},
hK:function hK(){},
j6:function j6(){},
ja:function ja(){},
jF:function jF(a){this.b=0
this.c=a},
j7:function j7(a){this.a=a},
jE:function jE(a){this.a=a
this.b=16
this.c=0},
hk:function(a,b){var s=H.lB(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
nc:function(a){if(a instanceof H.bH)return a.i(0)
return"Instance of '"+H.cU(a)+"'"},
cG:function(a,b,c,d){var s,r=c?J.kC(a,d):J.ng(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
i1:function(a,b,c){var s,r=H.b([],c.I("u<0>"))
for(s=J.aD(a);s.q();)r.push(s.gD(s))
if(b)return r
return J.kD(r)},
nm:function(a,b,c){var s,r,q=J.kC(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
eT:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.b8(b,c,r)
return H.lC(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.nA(a,b,P.b8(b,c,a.length))
return P.nJ(a,b,c)},
nJ:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a9(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a9(c,b,a.length,o,o))
r=J.aD(a)
for(q=0;q<b;++q)if(!r.q())throw H.c(P.a9(b,0,q,o,o))
p=[]
if(s)for(;r.q();)p.push(r.gD(r))
else for(q=b;q<c;++q){if(!r.q())throw H.c(P.a9(c,b,q,o,o))
p.push(r.gD(r))}return H.lC(p)},
nB:function(a){return new H.ee(a,H.nj(a,!1,!0,!1,!1,!1))},
lL:function(a,b,c){var s=J.aD(b)
if(!s.q())return a
if(c.length===0){do a+=H.w(s.gD(s))
while(s.q())}else{a+=H.w(s.gD(s))
for(;s.q();)a=a+c+H.w(s.gD(s))}return a},
j1:function(){var s=H.nr()
if(s!=null)return P.nO(s)
throw H.c(P.z("'Uri.base' is not supported"))},
l_:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mU().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghg().c6(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aO(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
na:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e4:function(a){if(a>=10)return""+a
return"0"+a},
lo:function(a){return new P.bn(1000*a)},
hN:function(a){if(typeof a=="number"||H.jO(a)||null==a)return J.dT(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nc(a)},
hp:function(a){return new P.dX(a)},
bE:function(a){return new P.aE(!1,null,null,a)},
eF:function(a,b){return new P.cV(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.cV(b,c,!0,a,d,"Invalid value")},
b8:function(a,b,c){if(0>a||a>c)throw H.c(P.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a9(b,a,c,"end",null))
return b}return c},
lE:function(a,b){if(a<0)throw H.c(P.a9(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aZ(b):e
return new P.ea(s,!0,a,c,"Index out of range")},
z:function(a){return new P.fc(a)},
iZ:function(a){return new P.f9(a)},
b1:function(a){return new P.e1(a)},
f:function(a){return new P.fv(a)},
a7:function(a,b,c){return new P.hT(a,b,c)},
lc:function(a){H.pI(a)},
nO:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.lQ(a4<a4?C.a.p(a5,0,a4):a5,5,a3).ge1()
else if(s===32)return P.lQ(C.a.p(a5,5,a4),0,a3).ge1()}r=P.cG(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mk(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mk(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a6(a5,"..",n)))h=m>n+2&&C.a.a6(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a6(a5,"file",0)){if(p<=0){if(!C.a.a6(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.p(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.aX(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a6(a5,"http",0)){if(i&&o+3===n&&C.a.a6(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.aX(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a6(a5,"https",0)){if(i&&o+4===n&&C.a.a6(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.aX(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.p(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.fQ(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.on(a5,0,q)
else{if(q===0)P.cd(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.oo(a5,d,p-1):""
b=P.ok(a5,p,o,!1)
i=o+1
if(i<n){a=H.lB(C.a.p(a5,i,n),a3)
a0=P.om(a==null?H.h(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.ol(a5,n,m,a3,j,b!=null)
a2=m<l?P.kX(a5,m+1,l,a3):a3
return new P.bz(j,c,b,a0,a1,a2,l<a4?P.oj(a5,l+1,a4):a3)},
lS:function(a){var s=t.N
return C.b.hl(H.b(a.split("&"),t.s),P.T(s,s),new P.j4(C.e))},
nN:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j0(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.S(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.hk(C.a.p(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.hk(C.a.p(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
lR:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.j2(a),c=new P.j3(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.S(a,r)
if(n===58){if(r===b){++r
if(C.a.S(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaC(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.nN(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aP(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
m7:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cd:function(a,b,c){throw H.c(P.a7(c,a,b))},
om:function(a,b){if(a!=null&&a===P.m7(b))return null
return a},
ok:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.S(a,b)===91){s=c-1
if(C.a.S(a,s)!==93)P.cd(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oh(a,r,s)
if(q<s){p=q+1
o=P.mc(a,C.a.a6(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lR(a,r,q)
return C.a.p(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.S(a,n)===58){q=C.a.br(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mc(a,C.a.a6(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lR(a,b,q)
return"["+C.a.p(a,b,q)+o+"]"}return P.oq(a,b,c)},
oh:function(a,b,c){var s=C.a.br(a,"%",b)
return s>=b&&s<c?s:c},
mc:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a1(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.S(a,s)
if(p===37){o=P.kY(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a1("")
m=i.a+=C.a.p(a,r,s)
if(n)o=C.a.p(a,s,s+3)
else if(o==="%")P.cd(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a1("")
if(r<s){i.a+=C.a.p(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.S(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.p(a,r,s)
if(i==null){i=new P.a1("")
n=i}else n=i
n.a+=j
n.a+=P.kW(p)
s+=k
r=s}}}if(i==null)return C.a.p(a,b,c)
if(r<c)i.a+=C.a.p(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.S(a,s)
if(o===37){n=P.kY(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a1("")
l=C.a.p(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.p(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.t,m)
m=(C.t[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a1("")
if(r<s){q.a+=C.a.p(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cd(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.S(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.p(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a1("")
m=q}else m=q
m.a+=l
m.a+=P.kW(o)
s+=j
r=s}}}}if(q==null)return C.a.p(a,b,c)
if(r<c){l=C.a.p(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
on:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.m9(C.a.C(a,b)))P.cd(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cd(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.p(a,b,c)
return P.og(r?a.toLowerCase():a)},
og:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oo:function(a,b,c){return P.dG(a,b,c,C.P,!1)},
ol:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dG(a,b,c,C.u,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a5(s,"/"))s="/"+s
return P.op(s,e,f)},
op:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a5(a,"/"))return P.or(a,!s||c)
return P.os(a)},
kX:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bE("Both query and queryParameters specified"))
return P.dG(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a1("")
r.a=""
d.w(0,new P.jC(new P.jD(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oj:function(a,b,c){return P.dG(a,b,c,C.k,!0)},
kY:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.S(a,b+1)
r=C.a.S(a,n)
q=H.k1(s)
p=H.k1(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aP(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aO(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.p(a,b,b+3).toUpperCase()
return null},
kW:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.C(k,a>>>4)
s[2]=C.a.C(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.fN(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.C(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.C(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.eT(s,0,null)},
dG:function(a,b,c,d,e){var s=P.mb(a,b,c,d,e)
return s==null?C.a.p(a,b,c):s},
mb:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.S(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kY(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cd(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.S(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.kW(o)}}if(p==null){p=new P.a1("")
n=p}else n=p
n.a+=C.a.p(a,q,r)
n.a+=H.w(m)
if(typeof l!=="number")return H.mt(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.p(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
ma:function(a){if(C.a.a5(a,"."))return!0
return C.a.dD(a,"/.")!==-1},
os:function(a){var s,r,q,p,o,n,m
if(!P.ma(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.J(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.n(s,"/")},
or:function(a,b){var s,r,q,p,o,n
if(!P.ma(a))return!b?P.m8(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaC(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaC(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.m8(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.n(s,"/")},
m8:function(a){var s,r,q,p=a.length
if(p>=2&&P.m9(C.a.C(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.p(a,0,s)+"%3A"+C.a.al(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oi:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bE("Invalid URL encoding"))}}return s},
kZ:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.p(a,b,c)
else p=new H.S(C.a.p(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.c(P.bE("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bE("Truncated URI"))
p.push(P.oi(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.X.c6(p)},
m9:function(a){var s=a|32
return 97<=s&&s<=122},
lQ:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaC(j)
if(p!==44||r!==n+7||!C.a.a6(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.B.hu(0,a,m,s)
else{l=P.mb(a,m,s,C.k,!0)
if(l!=null)a=C.a.aX(a,m,s,l)}return new P.j_(a,j,c)},
oz:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jL(h)
q=new P.jM()
p=new P.jN()
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
mk:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.mV()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.C(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
X:function X(a,b){this.a=a
this.b=b},
bn:function bn(a){this.a=a},
hH:function hH(){},
hI:function hI(){},
I:function I(){},
dX:function dX(a){this.a=a},
f2:function f2(){},
ew:function ew(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d,e,f){var _=this
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
fc:function fc(a){this.a=a},
f9:function f9(a){this.a=a},
eP:function eP(a){this.a=a},
e1:function e1(a){this.a=a},
ez:function ez(){},
d_:function d_(){},
e3:function e3(a){this.a=a},
fv:function fv(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
eb:function eb(){},
Y:function Y(){},
O:function O(){},
a1:function a1(a){this.a=a},
j4:function j4(a){this.a=a},
j0:function j0(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jD:function jD(a,b){this.a=a
this.b=b},
jC:function jC(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a){this.a=a},
jM:function jM(){},
jN:function jN(){},
fQ:function fQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fo:function fo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
pr:function(a){var s,r,q,p
if(t.x.b(a)){s=J.mZ(a)
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
return new P.dC(r,q,p)},
pq:function(a){if(a instanceof P.dC)return{data:a.a,height:a.b,width:a.c}
return a},
bg:function(a){var s,r,q,p,o
if(a==null)return null
s=P.T(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
mf:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jO(a))return a
if(t.f.b(a))return P.mo(a)
if(t.c.b(a)){s=[]
J.dS(a,new P.jJ(s))
a=s}return a},
mo:function(a){var s={}
J.dS(a,new P.jT(s))
return s},
jx:function jx(){},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a){this.a=a},
jT:function jT(a){this.a=a},
h_:function h_(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(){},
fO:function fO(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aI:function aI(){},
eh:function eh(){},
aM:function aM(){},
ex:function ex(){},
ir:function ir(){},
eS:function eS(){},
n:function n(){},
aP:function aP(){},
f1:function f1(){},
fC:function fC(){},
fD:function fD(){},
fK:function fK(){},
fL:function fL(){},
fY:function fY(){},
fZ:function fZ(){},
h5:function h5(){},
h6:function h6(){},
hr:function hr(){},
dZ:function dZ(){},
hs:function hs(a){this.a=a},
e_:function e_(){},
b0:function b0(){},
ey:function ey(){},
fj:function fj(){},
bY:function bY(){},
eN:function eN(){},
fU:function fU(){},
fV:function fV(){}},W={
ky:function(){var s=document.createElement("canvas")
s.toString
return s},
hJ:function(a){return"wheel"},
lr:function(a){var s=document.createElement("img")
s.toString
if(a!=null)s.src=a
return s},
ne:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.bh(s)}return q},
js:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
m_:function(a,b,c,d){var s=W.js(W.js(W.js(W.js(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a3:function(a,b,c,d){var s=new W.dk(a,b,c==null?null:W.ml(new W.jq(c),t.aD),!1)
s.fU()
return s},
ml:function(a,b){var s=$.aB
if(s===C.f)return a
return s.df(a,b)},
o:function o(){},
ho:function ho(){},
dV:function dV(){},
dW:function dW(){},
bk:function bk(){},
bl:function bl(){},
co:function co(){},
ax:function ax(){},
hA:function hA(){},
F:function F(){},
cs:function cs(){},
hB:function hB(){},
ao:function ao(){},
aG:function aG(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
ct:function ct(){},
cu:function cu(){},
e5:function e5(){},
hG:function hG(){},
fl:function fl(a,b){this.a=a
this.b=b},
C:function C(){},
l:function l(){},
e:function e(){},
ae:function ae(){},
bK:function bK(){},
e7:function e7(){},
e9:function e9(){},
ap:function ap(){},
hV:function hV(){},
bp:function bp(){},
bq:function bq(){},
bM:function bM(){},
bO:function bO(){},
bs:function bs(){},
i2:function i2(){},
ik:function ik(){},
bR:function bR(){},
eo:function eo(){},
il:function il(a){this.a=a},
ep:function ep(){},
im:function im(a){this.a=a},
ar:function ar(){},
eq:function eq(){},
aj:function aj(){},
fk:function fk(a){this.a=a},
t:function t(){},
cR:function cR(){},
as:function as(){},
eC:function eC(){},
eH:function eH(){},
iy:function iy(a){this.a=a},
eJ:function eJ(){},
ak:function ak(){},
eL:function eL(){},
au:function au(){},
eM:function eM(){},
av:function av(){},
eQ:function eQ(){},
iF:function iF(a){this.a=a},
ag:function ag(){},
ba:function ba(){},
al:function al(){},
ac:function ac(){},
eU:function eU(){},
eV:function eV(){},
iQ:function iQ(){},
am:function am(){},
bx:function bx(){},
f0:function f0(){},
iU:function iU(){},
aR:function aR(){},
j5:function j5(){},
ff:function ff(){},
bc:function bc(){},
ca:function ca(){},
fm:function fm(){},
dj:function dj(){},
fz:function fz(){},
dp:function dp(){},
fT:function fT(){},
h0:function h0(){},
kA:function kA(a,b){this.a=a
this.$ti=b},
dk:function dk(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jq:function jq(a){this.a=a},
kP:function kP(a){this.$ti=a},
K:function K(){},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fn:function fn(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
fw:function fw(){},
fx:function fx(){},
fA:function fA(){},
fB:function fB(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fP:function fP(){},
dv:function dv(){},
dw:function dw(){},
fR:function fR(){},
fS:function fS(){},
fX:function fX(){},
h1:function h1(){},
h2:function h2(){},
dy:function dy(){},
dz:function dz(){},
h3:function h3(){},
h4:function h4(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){}},K={dU:function dU(){},cy:function cy(){},aL:function aL(a){this.a=a},Z:function Z(a){this.a=a},
pG:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0="heightMaps",a1="modifiers",a2={},a3=V.nE("Test 037"),a4=W.ky()
a4.className="pageLargeCanvas"
a4.id=a
a3.a.appendChild(a4).toString
s=t.s
a3.d9(H.b(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],s))
a3.fX(H.b(["heightMaps","shapes","scalars"],s))
a3.d9(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.nL(r,!0,!0,!0,!1)
a3=O.kz(t.gc)
p=new O.cK(a3)
a3.bk(p.geN(),p.geP())
a3=p.gdK()
a3.gt().l(0,p.gcZ())
a3.gdJ().l(0,p.gcW())
a3=p.gdK()
o=V.kL()
n=U.ln(V.lx(V.lz(),o,new V.B(1,1,-3)))
m=new V.W(1,1,1)
l=new D.bI(new V.W(1,1,1),V.kM(),V.kL(),V.nS())
k=l.a
l.a=n
n.gt().l(0,l.gee())
l.au(new D.E("mover",k,l.a))
if(!l.b.m(0,m)){k=l.b
l.b=m
l.au(new D.E("color",k,m))}a3.l(0,l)
a3=p.gda()
a3.saR(0,new V.W(0,0,1))
a3=p.gdj()
a3.saR(0,new V.W(0,1,0))
a3=p.gbA()
a3.saR(0,new V.W(1,0,0))
a3=p.gbA()
a3.d2(new A.ay(!0,!1,!1))
a3.d3(10)
j=E.lp()
j.sdZ(p)
i=E.lp()
i.y.l(0,j)
a3=new U.bL(V.aA(),H.b([],t.eJ))
a3.bk(a3.geJ(),a3.gfo())
n=q.x
m=U.hz()
l=U.hz()
h=$.by
if(h==null)h=$.by=new V.a6(0,0)
h=new U.de(m,l,new X.a8(!1,!1,!1),h,V.aA())
m.scB(0,!0)
m.scm(6.283185307179586)
m.sco(0)
m.sU(0,0)
m.scn(100)
m.sY(0)
m.sc8(0.5)
g=h.gaI()
m.gt().l(0,g)
l.scB(0,!0)
l.scm(6.283185307179586)
l.sco(0)
l.sU(0,0)
l.scn(100)
l.sY(0)
l.sc8(0.5)
l.gt().l(0,g)
m=new X.a8(!1,!1,!1)
if(!h.d.m(0,m)){k=h.d
h.d=m
h.L(new D.E(a1,k,m))}h.b8(n)
a3.l(0,h)
U.hz()
if($.by==null)$.by=new V.a6(0,0)
V.aA()
m=U.hz()
l=$.by
if(l==null)l=$.by=new V.a6(0,0)
l=new U.dd(m,new X.a8(!1,!1,!1),l,V.aA())
m.scB(0,!0)
m.scm(6.283185307179586)
m.sco(0)
m.sU(0,0)
m.scn(100)
m.sY(0)
m.sc8(0.2)
m.gt().l(0,l.gaI())
m=new X.a8(!0,!1,!1)
if(!l.c.m(0,m)){k=l.c
l.c=m
l.L(new D.E(a1,k,m))}l.b8(n)
a3.l(0,l)
m=new X.a8(!1,!1,!1)
l=new U.df(m,V.aA())
h=new X.a8(!1,!1,!1)
if(!m.m(0,h)){l.b=h
l.L(new D.E(a1,m,h))}l.b8(n)
a3.l(0,l)
i.sbc(a3)
a3=O.kz(t.l)
n=new M.e6(a3)
a3.bk(n.geU(),n.geW())
f=X.nd(null)
e=new X.eA(1.0471975511965976,0.1)
e.sbc(null)
m=e.c
$.D().toString
if(!(Math.abs(m-1.0471975511965976)<1e-9)){e.c=1.0471975511965976
e.aL(new D.E("fov",m,1.0471975511965976))}m=e.d
$.D().toString
if(!(Math.abs(m-0.1)<1e-9)){e.d=0.1
e.aL(new D.E("near",m,0.1))}m=e.e
$.D().toString
if(!(Math.abs(m-2000)<1e-9)){e.e=2000
e.aL(new D.E("far",m,2000))}m=n.b
if(m!==e){if(m!=null)m.gt().J(0,n.gaJ())
k=n.b
n.b=e
e.gt().l(0,n.gaJ())
n.aK(new D.E("camera",k,n.b))}m=n.c
if(m!==f){if(m!=null)m.gt().J(0,n.gaJ())
k=n.c
n.c=f
f.gt().l(0,n.gaJ())
n.aK(new D.E("target",k,n.c))}a3.l(0,i)
a3=n.b
if(a3!=null)a3.sbc(U.ln(V.aK(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a3=q.d
if(a3!==n){if(a3!=null)a3.gt().J(0,q.gcI())
q.d=n
n.gt().l(0,q.gcI())
q.cJ()}a2.a=null
a2.b=""
a2.c=1
d=new K.k8(a2,q,j)
r=s.getElementById(a0)
if(r==null)H.h(P.f("Failed to find heightMaps for Texture2DGroup"))
a3=new V.iJ(a0,!0,r,new K.k9(a2,d))
a3.a_(0,"../resources/HeightMap1.png",!0)
a3.l(0,"../resources/HeightMap2.png")
a3.l(0,"../resources/HeightMap3.png")
a3.l(0,"../resources/HeightMap4.png")
a3.l(0,"../resources/ScrewHeightMap.png")
c=new K.ka(a2,d)
a3=V.lD("shapes")
a3.a_(0,"Cuboid",new K.ki(c))
a3.a_(0,"Cylinder",new K.kj(c))
a3.a_(0,"LatLonSphere",new K.kk(c))
a3.a_(0,"Sphere",new K.kl(c))
a3.a_(0,"Toroid",new K.km(c))
a3.a_(0,"Grid Small",new K.kn(c))
a3.c0(0,"Grid Medium",new K.ko(c),!0)
a3.a_(0,"Grid Large",new K.kp(c))
b=new K.kb(a2,d)
a2=V.lD("scalars")
a2.a_(0,"0.1",new K.kc(b))
a2.a_(0,"0.2",new K.kd(b))
a2.a_(0,"0.4",new K.ke(b))
a2.c0(0,"0.6",new K.kf(b),!0)
a2.a_(0,"0.8",new K.kg(b))
a2.a_(0,"1.0",new K.kh(b))
V.pJ(q)},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a}},L={eO:function eO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},f_:function f_(a,b){this.b=a
this.c=b},iS:function iS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},d2:function d2(a,b){this.b=a
this.c=!1
this.a=b}},O={
kz:function(a){return new O.ai(H.b([],a.I("u<0>")),a.I("ai<0>"))},
ai:function ai(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
cN:function cN(a){this.a=a
this.b=null},
en:function(a,b){return new O.cL(new V.W(0,0,0),a,b,new A.ay(!1,!1,!1))},
cK:function cK(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(){},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(){},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(){},
i5:function i5(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
em:function em(){},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
i8:function i8(a){this.b=a},
i9:function i9(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
ia:function ia(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
d0:function d0(){}},E={
lp:function(){var s=O.kz(t.l),r=new E.bo(s)
s.bk(r.ghv(),r.ghy())
r.scE(0,null)
r.sdZ(null)
r.sbc(null)
return r},
lX:function(){var s=window.navigator.vendor
s.toString
if(C.a.M(s,"Google"))return C.z
s=window.navigator.userAgent
s.toString
if(C.a.M(s,"Firefox"))return C.o
s=window.navigator.appVersion
s.toString
if(C.a.M(s,"Trident")||C.a.M(s,"Edge"))return C.p
s=window.navigator.appName
s.toString
if(C.a.M(s,"Microsoft"))return C.p
return C.A},
lY:function(){var s=window.navigator.appVersion
s.toString
if(C.a.M(s,"Win"))return C.T
if(C.a.M(s,"Mac"))return C.v
if(C.a.M(s,"Linux"))return C.U
return C.V},
nC:function(a,b){var s
Date.now()
s=t.fA
s=new E.iu(a,new P.X(Date.now(),!1),new P.X(Date.now(),!1),new O.cN(H.b([],s)),new O.cN(H.b([],s)),new O.cN(H.b([],s)),H.b([null],t.bc),P.T(t.N,t.fg))
s.ec(a,b)
return s},
nL:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.lM(a,!0,!0,!0,!1)
s=W.ky()
r=s.style
r.width="100%"
r.height="100%"
J.li(a).l(0,s)
return E.lM(s,!0,!0,!0,!1)},
lM:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.gW.a(C.i.cC(a,"webgl2",P.nl(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.nC(l,a)
m=H.jI(l.getParameter(3379))
H.jI(l.getParameter(34076))
r=H.b([],t.g9)
q=$.hL
p=new X.fe(a,r,(q==null?$.hL=new E.ft(E.lX(),E.lY()):q).a===C.o?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a3(o,"contextmenu",p.geY(),!1))
r.push(W.a3(a,"focus",p.gf3(),!1))
r.push(W.a3(a,"blur",p.geR(),!1))
r.push(W.a3(o,"keyup",p.gf7(),!1))
r.push(W.a3(o,"keydown",p.gf5(),!1))
r.push(W.a3(a,"mousedown",p.gfb(),!1))
r.push(W.a3(a,"mouseup",p.gff(),!1))
r.push(W.a3(a,n,p.gfd(),!1))
W.hJ(a)
W.hJ(a)
r.push(W.a3(a,W.hJ(a),p.gfh(),!1))
r.push(W.a3(o,n,p.gf_(),!1))
r.push(W.a3(o,"mouseup",p.gf1(),!1))
r.push(W.a3(o,"pointerlockchange",p.gfj(),!1))
r.push(W.a3(a,"touchstart",p.gfz(),!1))
r.push(W.a3(a,"touchend",p.gft(),!1))
r.push(W.a3(a,"touchmove",p.gfv(),!1))
m=new E.eY(a,s,new T.iM(l,m),p,new P.X(Date.now(),!1))
m.d0()
return m},
hv:function hv(){},
bo:function bo(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bF:function bF(a){this.b=a},
bV:function bV(a){this.b=a},
ft:function ft(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c,d,e,f,g,h){var _=this
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
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
eY:function eY(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
iP:function iP(a){this.a=a}},Z={
kO:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,s)},
aw:function(a){return new Z.bb(a)},
fg:function fg(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jl:function jl(a){this.a=a},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a){this.a=a}},D={
L:function(){return new D.bJ()},
hx:function hx(){},
bJ:function bJ(){var _=this
_.c=_.b=_.a=null
_.d=0},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
Q:function Q(){},
b3:function b3(){},
b4:function b4(){},
E:function E(a,b,c){this.c=a
this.d=b
this.e=c},
bI:function bI(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cD:function cD(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cn:function cn(a,b){this.a=a
this.b=b},eg:function eg(a,b){this.a=a
this.b=b},hY:function hY(a,b){this.c=a
this.d=b},cH:function cH(a,b,c){this.x=a
this.c=b
this.d=c},i3:function i3(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},bS:function bS(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},io:function io(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bT:function bT(a,b,c){this.x=a
this.c=b
this.d=c},eE:function eE(){},d1:function d1(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iT:function iT(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fe:function fe(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nd:function(a){var s=new V.bm(0,0,0,1),r=$.lH
if(r==null){r=V.lG(0,0,1,1)
$.lH=r}return new X.hU(s,r)},
hU:function hU(a,b){this.a=a
this.r=b
this.x=null},
eA:function eA(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iH:function iH(){}},V={
hl:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
pQ:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.ap(a-b,s)
return(a<0?a+s:a)+b},
A:function(a,b,c){$.D().toString
return C.a.ai(C.d.cz(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cj:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.r)(a),++p){o=a[p]
$.D().toString
n=C.a.ai(C.d.cz(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.ai(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
lb:function(a){return C.d.hT(Math.pow(2,C.d.ba(Math.log(a)/Math.log(2))))},
aA:function(){var s=$.ly
return s==null?$.ly=V.aK(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aK:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lx:function(a,b,c){var s=c.F(),r=b.aA(s).F(),q=s.aA(r),p=new V.B(a.a,a.b,a.c)
return V.aK(r.a,q.a,s.a,r.b_(0).a2(p),r.b,q.b,s.b,q.b_(0).a2(p),r.c,q.c,s.c,s.b_(0).a2(p),0,0,0,1)},
lz:function(){var s=$.aN
return s==null?$.aN=new V.R(0,0,0):s},
lG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eG(a,b,c,d)},
dg:function(){var s=$.lW
return s==null?$.lW=new V.B(0,0,0):s},
nS:function(){var s=$.jb
return s==null?$.jb=new V.B(-1,0,0):s},
kL:function(){var s=$.jc
return s==null?$.jc=new V.B(0,1,0):s},
kM:function(){var s=$.jd
return s==null?$.jd=new V.B(0,0,1):s},
nR:function(a,b,c){return new V.B(a,b,c)},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(){},
cM:function cM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b6:function b6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function(a){P.nM(C.K,new V.kr(a))},
lD:function(a){var s=document.getElementById(a)
if(s==null)throw H.c(P.f("Failed to find "+a+" for RadioGroup"))
return new V.is(a,!0,s)},
nE:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a3(n,"scroll",new V.iC(s),!1)
return new V.iA(o)},
kr:function kr(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a){this.a=a
this.b=null},
iC:function iC(a){this.a=a},
iB:function iB(a){this.a=a},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(){}},U={
hz:function(){return new U.hy()},
ln:function(a){var s=V.aA(),r=new U.cp(s)
if(!s.m(0,a))r.a=a
return r},
hy:function hy(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cp:function cp(a){this.a=a
this.b=null},
bL:function bL(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a_:function a_(){},
dd:function dd(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
de:function de(a,b,c,d,e){var _=this
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
df:function df(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={e6:function e6(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
no:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gao(a4)+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+b0.gao(b0)+b1.gao(b1)+b2.gao(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.r)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.r)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.aY()
if(h){s=$.aC()
c=new Z.bb(c.a|s.a)}if(g)c=new Z.bb(c.a|$.aX().a)
if(f)c=new Z.bb(c.a|$.aW().a)
return new A.i7(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jQ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jR:function(a,b,c){var s
A.jQ(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hn(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
oU:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jQ(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
oQ:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jR(b,r,"ambient")
b.a+="\n"},
oS:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jR(b,r,"diffuse")
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
oV:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jR(b,r,"invDiffuse")
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
p0:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jR(b,r,"specular")
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
oX:function(a,b){var s,r,q
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
oZ:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jQ(b,r,"reflect")
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
p_:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jQ(b,r,"refract")
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
oR:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hn(r)
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
s=c.a+="   return "+C.b.n(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.b.n(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.n(o," + ")+");\n"
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
oT:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hn(r)
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
c.a+="      highLight = intensity*("+C.b.n(k," + ")+");\n"}else c.a+="   highLight = "+C.b.n(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.n(m," + ")+");\n"
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
oY:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hn(r)
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
m=c.a+="   return "+C.b.n(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.b.n(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.n(j," + ")+");\n"
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
p1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hn(r)
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
if(m){s=$.hL
if(s==null)s=$.hL=new E.ft(E.lX(),E.lY())
p=c.a
if(s.b===C.v){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.b.n(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.b.n(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.n(h," + ")+");\n"
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
oW:function(a,b){var s,r
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
s=b.a+="   return "+C.b.n(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
p2:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a1(""),j=""+"precision mediump float;\n"
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
A.oU(a,k)
A.oQ(a,k)
A.oS(a,k)
A.oV(a,k)
A.p0(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.oZ(a,k)
A.p_(a,k)}A.oX(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.oR(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.oT(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.oY(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.p1(a,p[n],k)
A.oW(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.n(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
p3:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aS+"];\n"
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
p5:function(a,b){var s
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
p4:function(a,b){var s
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
p7:function(a,b){var s,r
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
p8:function(a,b){var s,r
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
p6:function(a,b){var s
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
p9:function(a,b){var s
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
hn:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.al(a,1)},
kK:function(a,b,c,d,e){var s=new A.f3(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cG(d,0,!1,t.S)
return s},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a){this.a=a},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.ih=_.ig=_.dv=_.ie=_.ic=_.du=_.dt=_.ib=_.ia=_.ds=_.dr=_.i9=_.i8=_.dq=_.i7=_.i6=_.dn=_.dm=_.bq=_.aS=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.c9=c
_.ca=d
_.cb=e
_.cc=f
_.cd=g
_.ce=h
_.cf=i
_.cg=j
_.ik=_.ij=_.ii=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b_:function b_(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aS=b5
_.bq=b6
_.dm=b7},
d6:function d6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d7:function d7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d9:function d9(a,b,c,d,e,f,g,h,i,j){var _=this
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
dc:function dc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cX:function cX(){},
a2:function a2(){},
iY:function iY(a){this.a=a},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
f5:function f5(a,b,c){this.a=a
this.c=b
this.d=c},
f6:function f6(a,b,c){this.a=a
this.c=b
this.d=c},
f7:function f7(a,b,c){this.a=a
this.c=b
this.d=c},
f3:function f3(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
d3:function d3(a,b,c){this.a=a
this.c=b
this.d=c},
f4:function f4(a,b,c){this.a=a
this.c=b
this.d=c},
d4:function d4(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
f8:function f8(a,b,c){this.a=a
this.c=b
this.d=c},
d8:function d8(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
da:function da(a,b,c){this.a=a
this.c=b
this.d=c},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mp:function(a,b,c){var s=null,r=F.kI()
F.dI(r,s,b,c,a,1,0,0,1)
F.dI(r,s,b,c,a,0,1,0,3)
F.dI(r,s,b,c,a,0,0,1,2)
F.dI(r,s,b,c,a,-1,0,0,0)
F.dI(r,s,b,c,a,0,-1,0,0)
F.dI(r,s,b,c,a,0,0,-1,3)
r.a8()
return r},
jK:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dI:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.B(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.B(s+a4,r+a2,q+a3)
o=new V.B(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.B(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jK(h)
j=F.jK(g)
a.bu(F.hm(a0,a1,new F.jH(i,F.jK(f),F.jK(e),j,k,c),b))},
ps:function(a,b,c,d){return F.pt(!1,!1,c,new F.jU(1,1),d)},
pt:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.hm(c,e,new F.jW(d),null)
s.a8()
s.bo()
return s},
pE:function(a,b){var s=F.hm(a,b,new F.k6(),null)
s.gN().bw()
s.a8()
s.bo()
return s},
pK:function(a,b){var s=F.mp(a,new F.ks(1,new F.kt()),b)
s.bo()
return s},
pP:function(a,b){return F.pu(b,a,0.5,1,new F.ku())},
pu:function(a,b,c,d,e){var s=F.hm(a,b,new F.jV(e,d,b,c),null)
s.a8()
s.bo()
return s},
l8:function(a,b){return F.hm(b,a,new F.k_(new F.k0()),null)},
hm:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.kI()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.x(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.kN(d,d,new V.bm(m,0,0,1),d,d,new V.a5(o,1),d,d,0)
n.l(0,l)
c.$3(l,o,0)
q.push(l.c7(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.x(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.kN(d,d,new V.bm(g,f,e,1),d,d,new V.a5(o,j),d,d,0)
h.l(0,l)
c.$3(l,o,k)
q.push(l.c7(a0))}}s.gN().fZ(a+1,b+1,q)
return s},
kI:function(){return new F.cY()},
kN:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.c7()
h=$.ld()
s=$.aY()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.aC().a)!==0)q.r=e
if((r&$.aX().a)!==0)q.x=b
if((r&$.bi().a)!==0)q.y=f
if((r&$.bj().a)!==0)q.z=g
if((r&$.le().a)!==0)q.Q=c
if((r&$.bD().a)!==0)q.ch=i
if((r&$.aW().a)!==0)q.cx=a
return q},
jH:function jH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
k6:function k6(){},
kt:function kt(){},
ks:function ks(a,b){this.a=a
this.b=b},
ku:function ku(){},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(){},
k_:function k_(a){this.a=a},
az:function az(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(){},
iD:function iD(){},
ei:function ei(){this.b=this.a=null},
hZ:function hZ(){},
iX:function iX(){},
eD:function eD(){this.a=null},
cY:function cY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iz:function iz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bZ:function bZ(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
bw:function bw(a,b){this.a=a
this.b=b},
c7:function c7(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jk:function jk(a){this.a=a},
jj:function jj(a){this.a=a},
x:function x(a,b){this.a=a
this.b=!1
this.c=b},
c8:function c8(a,b,c){this.b=a
this.c=b
this.d=c},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.b=a
this.c=b},
jh:function jh(){},
jg:function jg(){},
ji:function ji(){},
ip:function ip(){},
dh:function dh(a){this.b=a}},T={c0:function c0(){},eW:function eW(){},eX:function eX(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=0
_.y=null},iM:function iM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},iN:function iN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kE.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gA:function(a){return H.cT(a)},
i:function(a){return"Instance of '"+H.cU(a)+"'"}}
J.ec.prototype={
i:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$ibA:1}
J.cB.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gA:function(a){return 0}}
J.b5.prototype={
gA:function(a){return 0},
i:function(a){return String(a)},
$ilt:1}
J.eB.prototype={}
J.c4.prototype={}
J.aH.prototype={
i:function(a){var s=a[$.mE()]
if(s==null)return this.e8(a)
return"JavaScript function for "+J.dT(s)}}
J.u.prototype={
cs:function(a,b){if(!!a.fixed$length)H.h(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eF(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.h(P.z("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
fW:function(a,b){if(!!a.fixed$length)H.h(P.z("addAll"))
this.el(a,b)
return},
el:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.b1(a))
for(s=0;s<r;++s)a.push(b[s])},
w:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b1(a))}},
n:function(a,b){var s,r,q=a.length,p=P.cG(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.w(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hq:function(a){return this.n(a,"")},
hk:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.b1(a))}return s},
hl:function(a,b,c){return this.hk(a,b,c,t.z)},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghj:function(a){if(a.length>0)return a[0]
throw H.c(H.ls())},
gaC:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.ls())},
b1:function(a,b){if(!!a.immutable$list)H.h(P.z("sort"))
H.nH(a,b==null?J.oH():b)},
e5:function(a){return this.b1(a,null)},
M:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.kB(a,"[","]")},
gO:function(a){return new J.ad(a,a.length)},
gA:function(a){return H.cT(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.h(P.z("set length"))
if(b>a.length)H.l0(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.ci(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.h(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ci(a,b))
a[b]=c},
$iv:1,
$im:1,
$ik:1,
$ip:1}
J.hW.prototype={}
J.ad.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bP.prototype={
ae:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbs(b)
if(this.gbs(a)===s)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
hT:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
ba:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
cz:function(a,b){var s
if(b>20)throw H.c(P.a9(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ap:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.w(s)+": "+H.w(a)+" ~/ "+b))},
aP:function(a,b){var s
if(a>0)s=this.d4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fN:function(a,b){if(b<0)throw H.c(H.dN(b))
return this.d4(a,b)},
d4:function(a,b){return b>31?0:a>>>b},
$iG:1,
$ia4:1}
J.cA.prototype={$ii:1}
J.ed.prototype={}
J.br.prototype={
S:function(a,b){if(b<0)throw H.c(H.ci(a,b))
if(b>=a.length)H.h(H.ci(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.ci(a,b))
return a.charCodeAt(b)},
T:function(a,b){return a+b},
aX:function(a,b,c,d){var s=P.b8(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a6:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a5:function(a,b){return this.a6(a,b,0)},
p:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eF(b,null))
if(b>c)throw H.c(P.eF(b,null))
if(c>a.length)throw H.c(P.eF(c,null))
return a.substring(b,c)},
al:function(a,b){return this.p(a,b,null)},
H:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.I)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ai:function(a,b){var s=b-a.length
if(s<=0)return a
return this.H(" ",s)+a},
br:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dD:function(a,b){return this.br(a,b,0)},
h5:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a9(c,0,s,null,null))
return H.mz(a,b,c)},
M:function(a,b){return this.h5(a,b,0)},
ae:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gA:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$iv:1,
$iq:1}
H.cC.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.S.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.S(this.a,b)}}
H.m.prototype={}
H.bQ.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=J.bB(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.b1(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.G(q,s);++r.c
return!0}}
H.aJ.prototype={
gO:function(a){return new H.ek(J.aD(this.a),this.b)},
gj:function(a){return J.aZ(this.a)},
G:function(a,b){return this.b.$1(J.kw(this.a,b))}}
H.cv.prototype={$im:1}
H.ek.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){return H.U(this).Q[1].a(this.a)}}
H.di.prototype={
gO:function(a){return new H.fh(J.aD(this.a),this.b)}}
H.fh.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.cw.prototype={}
H.fb.prototype={
k:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.c5.prototype={}
H.cq.prototype={
i:function(a){return P.kH(this)},
k:function(a,b,c){H.n9()},
$iH:1}
H.cr.prototype={
gj:function(a){return this.a},
c5:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c5(0,b))return null
return this.cS(b)},
cS:function(a){return this.b[a]},
w:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cS(q))}}}
H.iV.prototype={
ah:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cS.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ef.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fa.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iq.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fW.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bH.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mC(r==null?"unknown":r)+"'"},
gi_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iI.prototype={}
H.iE.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mC(s)+"'"}}
H.ck.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.ck))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gA:function(a){var s,r=this.c
if(r==null)s=H.cT(this.a)
else s=typeof r!=="object"?J.kx(r):H.cT(r)
return(s^H.cT(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.w(this.d)+"' of "+("Instance of '"+H.cU(s)+"'")}}
H.eI.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.V.prototype={
gj:function(a){return this.a},
gaf:function(a){return new H.cE(this,H.U(this).I("cE<1>"))},
ghZ:function(a){var s=this,r=H.U(s)
return H.nn(s.gaf(s),new H.hX(s),r.c,r.Q[1])},
c5:function(a,b){var s=this.b
if(s==null)return!1
return this.ew(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bl(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bl(p,b)
q=r==null?n:r.b
return q}else return o.ho(b)},
ho:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cT(p,q.dE(a))
r=q.dF(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cM(s==null?q.b=q.bR():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cM(r==null?q.c=q.bR():r,b,c)}else q.hp(b,c)},
hp:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bR()
s=p.dE(a)
r=p.cT(o,s)
if(r==null)p.bW(o,s,[p.bS(a,b)])
else{q=p.dF(r,a)
if(q>=0)r[q].b=b
else r.push(p.bS(a,b))}},
w:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b1(s))
r=r.c}},
cM:function(a,b,c){var s=this.bl(a,b)
if(s==null)this.bW(a,b,this.bS(b,c))
else s.b=c},
bS:function(a,b){var s=this,r=new H.i_(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dE:function(a){return J.kx(a)&0x3ffffff},
dF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.kH(this)},
bl:function(a,b){return a[b]},
cT:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
ez:function(a,b){delete a[b]},
ew:function(a,b){return this.bl(a,b)!=null},
bR:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bW(r,s,r)
this.ez(r,s)
return r}}
H.hX.prototype={
$1:function(a){var s=this.a
return H.U(s).Q[1].a(s.h(0,a))},
$S:function(){return H.U(this.a).I("2(1)")}}
H.i_.prototype={}
H.cE.prototype={
gj:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.ej(s,s.r)
r.c=s.e
return r}}
H.ej.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b1(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.k2.prototype={
$1:function(a){return this.a(a)},
$S:44}
H.k3.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.k4.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.ee.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilF:1}
H.cO.prototype={$icO:1}
H.a0.prototype={$ia0:1}
H.bU.prototype={
gj:function(a){return a.length},
$iv:1,
$iy:1}
H.bu.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aS(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.cP.prototype={
k:function(a,b,c){H.aS(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.er.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.cQ.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.bv.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aS(b,a,a.length)
return a[b]},
$ibv:1,
$ic1:1}
H.dq.prototype={}
H.dr.prototype={}
H.ds.prototype={}
H.dt.prototype={}
H.at.prototype={
I:function(a){return H.h8(v.typeUniverse,this,a)},
b3:function(a){return H.oe(v.typeUniverse,this,a)}}
H.fy.prototype={}
H.fu.prototype={
i:function(a){return this.a}}
H.dB.prototype={}
P.jn.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:26}
P.jm.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:42}
P.jo.prototype={
$0:function(){this.a.$0()},
$S:7}
P.jp.prototype={
$0:function(){this.a.$0()},
$S:7}
P.dA.prototype={
eh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ch(new P.jB(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
ei:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ch(new P.jA(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$iiR:1}
P.jB.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.jA.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e9(s,o)}q.c=p
r.d.$1(q)},
$S:7}
P.cb.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.w(this.a)+")"}}
P.cc.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cb){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aD(s)
if(o instanceof P.cc){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dx.prototype={
gO:function(a){return new P.cc(this.a())}}
P.fi.prototype={}
P.c_.prototype={}
P.eR.prototype={}
P.jG.prototype={}
P.jS.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:0}
P.ju.prototype={
hP:function(a){var s,r,q,p=null
try{if(C.f===$.aB){a.$0()
return}P.pb(p,p,this,a)}catch(q){s=H.bh(q)
r=H.l7(q)
P.mj(p,p,this,s,r)}},
hQ:function(a,b){var s,r,q,p=null
try{if(C.f===$.aB){a.$1(b)
return}P.pc(p,p,this,a,b)}catch(q){s=H.bh(q)
r=H.l7(q)
P.mj(p,p,this,s,r)}},
hR:function(a,b){return this.hQ(a,b,t.z)},
h1:function(a){return new P.jv(this,a)},
df:function(a,b){return new P.jw(this,a,b)}}
P.jv.prototype={
$0:function(){return this.a.hP(this.b)},
$S:0}
P.jw.prototype={
$1:function(a){return this.a.hR(this.b,a)},
$S:function(){return this.c.I("~(0)")}}
P.dl.prototype={
gO:function(a){var s=new P.dm(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
M:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.es(b)
return r}},
es:function(a){var s=this.d
if(s==null)return!1
return this.bI(s[this.bE(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cO(s==null?q.b=P.kQ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cO(r==null?q.c=P.kQ():r,b)}else return q.ek(0,b)},
ek:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kQ()
s=q.bE(b)
r=p[s]
if(r==null)p[s]=[q.bD(b)]
else{if(q.bI(r,b)>=0)return!1
r.push(q.bD(b))}return!0},
J:function(a,b){if((b&1073741823)===b)return this.fC(this.c,b)
else return this.fB(0,b)},
fB:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bE(b)
r=n[s]
q=o.bI(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d7(p)
return!0},
cO:function(a,b){if(a[b]!=null)return!1
a[b]=this.bD(b)
return!0},
fC:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d7(s)
delete a[b]
return!0},
cV:function(){this.r=this.r+1&1073741823},
bD:function(a){var s,r=this,q=new P.jt(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cV()
return q},
d7:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cV()},
bE:function(a){return J.kx(a)&1073741823},
bI:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.jt.prototype={}
P.dm.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b1(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cz.prototype={}
P.i0.prototype={
$2:function(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:12}
P.cF.prototype={$im:1,$ik:1,$ip:1}
P.j.prototype={
gO:function(a){return new H.bQ(a,this.gj(a))},
G:function(a,b){return this.h(a,b)},
w:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.b1(a))}},
gdH:function(a){return this.gj(a)===0},
hV:function(a,b){var s,r,q,p,o=this
if(o.gdH(a)){s=J.kC(0,H.aU(a).I("j.E"))
return s}r=o.h(a,0)
q=P.cG(o.gj(a),r,!0,H.aU(a).I("j.E"))
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hU:function(a){return this.hV(a,!0)},
hh:function(a,b,c,d){var s
H.aU(a).I("j.E").a(d)
P.b8(b,c,this.gj(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.kB(a,"[","]")}}
P.cI.prototype={}
P.i4.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.w(a)
r.a=s+": "
r.a+=H.w(b)},
$S:27}
P.N.prototype={
w:function(a,b){var s,r,q
for(s=J.aD(this.gaf(a)),r=H.aU(a).I("N.V");s.q();){q=s.gD(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.aZ(this.gaf(a))},
i:function(a){return P.kH(a)},
$iH:1}
P.h9.prototype={
k:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.cJ.prototype={
h:function(a,b){return J.lh(this.a,b)},
k:function(a,b,c){J.kv(this.a,b,c)},
w:function(a,b){J.dS(this.a,b)},
gj:function(a){return J.aZ(this.a)},
i:function(a){return J.dT(this.a)},
$iH:1}
P.c6.prototype={}
P.cW.prototype={
i:function(a){return P.kB(this,"{","}")},
G:function(a,b){var s,r,q,p,o="index"
H.po(b,o,t.S)
P.lE(b,o)
for(s=P.nZ(this,this.r),r=H.U(s).c,q=0;s.q();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.M(b,this,o,null,q))}}
P.du.prototype={$im:1,$ik:1}
P.dn.prototype={}
P.dF.prototype={}
P.dH.prototype={}
P.j9.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.bh(r)}return null},
$S:19}
P.j8.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.bh(r)}return null},
$S:19}
P.ht.prototype={
hu:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.b8(a3,a4,a2.length)
s=$.mT()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.C(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.k1(C.a.C(a2,k))
g=H.k1(C.a.C(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a1("")
d=o}else d=o
c=d.a+=C.a.p(a2,p,q)
d.a=c+H.aO(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.p(a2,p,a4)
d=r.length
if(n>=0)P.lj(a2,m,a4,n,l,d)
else{b=C.c.ap(d-1,4)+1
if(b===1)throw H.c(P.a7(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.aX(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lj(a2,m,a4,n,l,a)
else{b=C.c.ap(a,4)
if(b===1)throw H.c(P.a7(a0,a2,a4))
if(b>1)a2=C.a.aX(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hu.prototype={}
P.e0.prototype={}
P.e2.prototype={}
P.hK.prototype={}
P.j6.prototype={
ghg:function(){return C.J}}
P.ja.prototype={
c6:function(a){var s,r,q,p=P.b8(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jF(r)
if(q.eB(a,0,p)!==p){C.a.S(a,p-1)
q.c_()}return new Uint8Array(r.subarray(0,H.oy(0,q.b,s)))}}
P.jF.prototype={
c_:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fV:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c_()
return!1}},
eB:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.S(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fV(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c_()}else if(p<=2047){o=l.b
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
P.j7.prototype={
c6:function(a){var s=this.a,r=P.nP(s,a,0,null)
if(r!=null)return r
return new P.jE(s).h6(a,0,null,!0)}}
P.jE.prototype={
h6:function(a,b,c,d){var s,r,q,p,o=this,n=P.b8(b,c,J.aZ(a))
if(b===n)return""
s=P.ot(a,b,n)
r=o.bF(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.ou(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
bF:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.Z(b+c,2)
r=q.bF(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bF(a,s,c,d)}return q.ha(a,b,c,d)},
ha:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a1(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aO(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aO(j)
break
case 65:g.a+=H.aO(j);--f
break
default:p=g.a+=H.aO(j)
g.a=p+H.aO(j)
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
g.a+=H.aO(a[l])}else g.a+=P.eT(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aO(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.X.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.X&&this.a===b.a&&!0},
ae:function(a,b){return C.c.ae(this.a,b.a)},
gA:function(a){var s=this.a
return(s^C.c.aP(s,30))&1073741823},
i:function(a){var s=this,r=P.na(H.ny(s)),q=P.e4(H.nw(s)),p=P.e4(H.ns(s)),o=P.e4(H.nt(s)),n=P.e4(H.nv(s)),m=P.e4(H.nx(s)),l=P.nb(H.nu(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bn.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bn&&this.a===b.a},
gA:function(a){return C.c.gA(this.a)},
ae:function(a,b){return C.c.ae(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hI(),o=this.a
if(o<0)return"-"+new P.bn(0-o).i(0)
s=p.$1(C.c.Z(o,6e7)%60)
r=p.$1(C.c.Z(o,1e6)%60)
q=new P.hH().$1(o%1e6)
return""+C.c.Z(o,36e8)+":"+s+":"+r+"."+q}}
P.hH.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.hI.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.I.prototype={}
P.dX.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hN(s)
return"Assertion failed"}}
P.f2.prototype={}
P.ew.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbH()+o+m
if(!q.a)return l
s=q.gbG()
r=P.hN(q.b)
return l+s+": "+r}}
P.cV.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.w(q):""
else if(q==null)s=": Not greater than or equal to "+H.w(r)
else if(q>r)s=": Not in inclusive range "+H.w(r)+".."+H.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.w(r)
return s}}
P.ea.prototype={
gbH:function(){return"RangeError"},
gbG:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.fc.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f9.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e1.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hN(s)+"."}}
P.ez.prototype={
i:function(a){return"Out of Memory"},
$iI:1}
P.d_.prototype={
i:function(a){return"Stack Overflow"},
$iI:1}
P.e3.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fv.prototype={
i:function(a){return"Exception: "+this.a}}
P.hT.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.p(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.S(d,o)
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
i=""}h=C.a.p(d,k,l)
return f+j+h+i+"\n"+C.a.H(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.w(e)+")"):f}}
P.k.prototype={
gj:function(a){var s,r=this.gO(this)
for(s=0;r.q();)++s
return s},
G:function(a,b){var s,r,q
P.lE(b,"index")
for(s=this.gO(this),r=0;s.q();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.nf(this,"(",")")}}
P.eb.prototype={}
P.Y.prototype={
gA:function(a){return P.O.prototype.gA.call(C.M,this)},
i:function(a){return"null"}}
P.O.prototype={constructor:P.O,$iO:1,
m:function(a,b){return this===b},
gA:function(a){return H.cT(this)},
i:function(a){return"Instance of '"+H.cU(this)+"'"},
toString:function(){return this.i(this)}}
P.a1.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.j4.prototype={
$2:function(a,b){var s,r,q,p=C.a.dD(b,"=")
if(p===-1){if(b!=="")J.kv(a,P.kZ(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.p(b,0,p)
r=C.a.al(b,p+1)
q=this.a
J.kv(a,P.kZ(s,0,s.length,q,!0),P.kZ(r,0,r.length,q,!0))}return a},
$S:38}
P.j0.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:39}
P.j2.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:40}
P.j3.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.hk(C.a.p(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:43}
P.bz.prototype={
gbm:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.kG("_text"))}return o},
gA:function(a){var s=this,r=s.z
if(r==null){r=C.a.gA(s.gbm())
if(s.z==null)s.z=r
else r=H.h(H.kG("hashCode"))}return r},
gbg:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.c6(P.lS(r==null?"":r),t.E)
if(s.Q==null)s.Q=r
else r=H.h(H.kG("queryParameters"))}return r},
ge2:function(){return this.b},
gcj:function(a){var s=this.c
if(s==null)return""
if(C.a.a5(s,"["))return C.a.p(s,1,s.length-1)
return s},
gbv:function(a){var s=this.d
return s==null?P.m7(this.a):s},
gcr:function(a){var s=this.f
return s==null?"":s},
gdw:function(){var s=this.r
return s==null?"":s},
cu:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a5(s,"/"))s="/"+s
q=s
p=P.kX(null,0,0,b)
return new P.bz(n,l,j,k,q,p,o.r)},
gdz:function(){return this.c!=null},
gdC:function(){return this.f!=null},
gdA:function(){return this.r!=null},
i:function(a){return this.gbm()},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbz())if(q.c!=null===b.gdz())if(q.b===b.ge2())if(q.gcj(q)===b.gcj(b))if(q.gbv(q)===b.gbv(b))if(q.e===b.gdU(b)){s=q.f
r=s==null
if(!r===b.gdC()){if(r)s=""
if(s===b.gcr(b)){s=q.r
r=s==null
if(!r===b.gdA()){if(r)s=""
s=s===b.gdw()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifd:1,
gbz:function(){return this.a},
gdU:function(a){return this.e}}
P.jD.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.l_(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.l_(C.h,b,C.e,!0)}},
$S:45}
P.jC.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aD(b),r=this.a;s.q();)r.$2(a,s.gD(s))},
$S:6}
P.j_.prototype={
ge1:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.br(s,"?",m)
q=s.length
if(r>=0){p=P.dG(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fo("data","",n,n,P.dG(s,m,q,C.u,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jL.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.S.hh(s,0,96,b)
return s},
$S:30}
P.jM.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.C(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:18}
P.jN.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.C(b,0),r=C.a.C(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:18}
P.fQ.prototype={
gdz:function(){return this.c>0},
gdB:function(){return this.c>0&&this.d+1<this.e},
gdC:function(){return this.f<this.r},
gdA:function(){return this.r<this.a.length},
gbz:function(){var s=this.x
return s==null?this.x=this.eu():s},
eu:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a5(r.a,"http"))return"http"
if(q===5&&C.a.a5(r.a,"https"))return"https"
if(s&&C.a.a5(r.a,"file"))return"file"
if(q===7&&C.a.a5(r.a,"package"))return"package"
return C.a.p(r.a,0,q)},
ge2:function(){var s=this.c,r=this.b+3
return s>r?C.a.p(this.a,r,s-1):""},
gcj:function(a){var s=this.c
return s>0?C.a.p(this.a,s,this.d):""},
gbv:function(a){var s,r=this
if(r.gdB())return P.hk(C.a.p(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a5(r.a,"http"))return 80
if(s===5&&C.a.a5(r.a,"https"))return 443
return 0},
gdU:function(a){return C.a.p(this.a,this.e,this.f)},
gcr:function(a){var s=this.f,r=this.r
return s<r?C.a.p(this.a,s+1,r):""},
gdw:function(){var s=this.r,r=this.a
return s<r.length?C.a.al(r,s+1):""},
gbg:function(){var s=this
if(s.f>=s.r)return C.R
return new P.c6(P.lS(s.gcr(s)),t.E)},
cu:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbz(),k=l==="file",j=n.c,i=j>0?C.a.p(n.a,n.b+3,j):"",h=n.gdB()?n.gbv(n):m
j=n.c
if(j>0)s=C.a.p(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.p(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a5(r,"/"))r="/"+r
p=P.kX(m,0,0,b)
q=n.r
o=q<j.length?C.a.al(j,q+1):m
return new P.bz(l,i,s,h,r,p,o)},
gA:function(a){var s=this.y
return s==null?this.y=C.a.gA(this.a):s},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifd:1}
P.fo.prototype={}
W.o.prototype={}
W.ho.prototype={
gj:function(a){return a.length}}
W.dV.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dW.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bk.prototype={$ibk:1}
W.bl.prototype={
cC:function(a,b,c){if(c!=null)return a.getContext(b,P.mo(c))
return a.getContext(b)},
e3:function(a,b){return this.cC(a,b,null)},
$ibl:1}
W.co.prototype={$ico:1}
W.ax.prototype={
gj:function(a){return a.length}}
W.hA.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cs.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hB.prototype={}
W.ao.prototype={}
W.aG.prototype={}
W.hC.prototype={
gj:function(a){return a.length}}
W.hD.prototype={
gj:function(a){return a.length}}
W.hE.prototype={
gj:function(a){return a.length}}
W.hF.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ct.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.cu.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.w(r)+", "
s=a.top
s.toString
return r+H.w(s)+") "+H.w(this.gaF(a))+" x "+H.w(this.gaB(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aT(b)
if(s===r.gbt(b)){s=a.top
s.toString
s=s===r.gbx(b)&&this.gaF(a)===r.gaF(b)&&this.gaB(a)===r.gaB(b)}else s=!1}else s=!1
return s},
gA:function(a){var s,r=a.left
r.toString
r=C.d.gA(r)
s=a.top
s.toString
return W.m_(r,C.d.gA(s),C.d.gA(this.gaF(a)),C.d.gA(this.gaB(a)))},
gdg:function(a){var s=a.bottom
s.toString
return s},
gcU:function(a){return a.height},
gaB:function(a){var s=this.gcU(a)
s.toString
return s},
gbt:function(a){var s=a.left
s.toString
return s},
gcv:function(a){var s=a.right
s.toString
return s},
gbx:function(a){var s=a.top
s.toString
return s},
gd8:function(a){return a.width},
gaF:function(a){var s=this.gd8(a)
s.toString
return s},
$iaa:1}
W.e5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.hG.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fl.prototype={
gdH:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gO:function(a){var s=this.hU(this)
return new J.ad(s,s.length)}}
W.C.prototype={
gaz:function(a){var s=a.children
s.toString
return new W.fl(a,s)},
gdh:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.aa(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
$iC:1}
W.l.prototype={$il:1}
W.e.prototype={
fY:function(a,b,c,d){if(c!=null)this.em(a,b,c,!1)},
em:function(a,b,c,d){return a.addEventListener(b,H.ch(c,1),!1)},
$ie:1}
W.ae.prototype={$iae:1}
W.bK.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1,
$ibK:1}
W.e7.prototype={
gj:function(a){return a.length}}
W.e9.prototype={
gj:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.hV.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.bp.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.bq.prototype={
gdi:function(a){var s=a.data
s.toString
return s},
$ibq:1}
W.bM.prototype={$ibM:1}
W.bO.prototype={$ibO:1}
W.bs.prototype={$ibs:1}
W.i2.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ik.prototype={
gj:function(a){return a.length}}
W.bR.prototype={$ibR:1}
W.eo.prototype={
h:function(a,b){return P.bg(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bg(s.value[1]))}},
gaf:function(a){var s=H.b([],t.s)
this.w(a,new W.il(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
W.il.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.ep.prototype={
h:function(a,b){return P.bg(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bg(s.value[1]))}},
gaf:function(a){var s=H.b([],t.s)
this.w(a,new W.im(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
W.im.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.ar.prototype={$iar:1}
W.eq.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.aj.prototype={$iaj:1}
W.fk.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gO:function(a){var s=this.a.childNodes
return new W.cx(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
hN:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mW(s,b,a)}catch(q){H.bh(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e7(a):s},
fE:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.cR.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.as.prototype={
gj:function(a){return a.length},
$ias:1}
W.eC.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.eH.prototype={
h:function(a,b){return P.bg(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bg(s.value[1]))}},
gaf:function(a){var s=H.b([],t.s)
this.w(a,new W.iy(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
W.iy.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eJ.prototype={
gj:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.eL.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.au.prototype={$iau:1}
W.eM.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.av.prototype={
gj:function(a){return a.length},
$iav:1}
W.eQ.prototype={
h:function(a,b){return a.getItem(H.ow(b))},
k:function(a,b,c){a.setItem(b,c)},
w:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaf:function(a){var s=H.b([],t.s)
this.w(a,new W.iF(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iH:1}
W.iF.prototype={
$2:function(a,b){return this.a.push(a)},
$S:28}
W.ag.prototype={$iag:1}
W.ba.prototype={$iba:1}
W.al.prototype={$ial:1}
W.ac.prototype={$iac:1}
W.eU.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.eV.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.iQ.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.am.prototype={$iam:1}
W.bx.prototype={$ibx:1}
W.f0.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.iU.prototype={
gj:function(a){return a.length}}
W.aR.prototype={}
W.j5.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ff.prototype={
gj:function(a){return a.length}}
W.bc.prototype={
ghc:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.z("deltaY is not supported"))},
ghb:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.z("deltaX is not supported"))},
$ibc:1}
W.ca.prototype={
fF:function(a,b){var s=a.requestAnimationFrame(H.ch(b,1))
s.toString
return s},
eA:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.dj.prototype={
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
m:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aT(b)
if(s===r.gbt(b)){s=a.top
s.toString
if(s===r.gbx(b)){s=a.width
s.toString
if(s===r.gaF(b)){s=a.height
s.toString
r=s===r.gaB(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gA:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gA(p)
s=a.top
s.toString
s=C.d.gA(s)
r=a.width
r.toString
r=C.d.gA(r)
q=a.height
q.toString
return W.m_(p,s,r,C.d.gA(q))},
gcU:function(a){return a.height},
gaB:function(a){var s=a.height
s.toString
return s},
gd8:function(a){return a.width},
gaF:function(a){var s=a.width
s.toString
return s}}
W.fz.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.dp.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.fT.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.h0.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.kA.prototype={}
W.dk.prototype={
fU:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mX(s,this.c,r,!1)}}}
W.jq.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.kP.prototype={}
W.K.prototype={
gO:function(a){return new W.cx(a,this.gj(a))}}
W.cx.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lh(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return H.U(this).c.a(this.d)}}
W.fn.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fP.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fX.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hj.prototype={}
P.jx.prototype={
ci:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bj:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.jO(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.X)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.iZ("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.ci(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.dS(a,new P.jy(m,n))
return m.a}if(t.c.b(a)){s=n.ci(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.h8(a,s)}if(t.eH.b(a)){s=n.ci(a)
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
n.hm(a,new P.jz(m,n))
return m.b}throw H.c(P.iZ("structured clone of other type"))},
h8:function(a,b){var s,r,q=J.bB(a),p=q.gj(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bj(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.jy.prototype={
$2:function(a,b){this.a.a[a]=this.b.bj(b)},
$S:12}
P.jz.prototype={
$2:function(a,b){this.a.b[a]=this.b.bj(b)},
$S:33}
P.dC.prototype={$ibq:1,
gdi:function(a){return this.a}}
P.jJ.prototype={
$1:function(a){this.a.push(P.mf(a))},
$S:31}
P.jT.prototype={
$2:function(a,b){this.a[a]=P.mf(b)},
$S:12}
P.h_.prototype={
hm:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.e8.prototype={
gb5:function(){var s=this.b,r=H.U(s)
return new H.aJ(new H.di(s,new P.hR(),r.I("di<j.E>")),new P.hS(),r.I("aJ<j.E,C>"))},
w:function(a,b){C.b.w(P.i1(this.gb5(),!1,t.h),b)},
k:function(a,b,c){var s=this.gb5()
J.n_(s.b.$1(J.kw(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.aZ(this.gb5().a)},
h:function(a,b){var s=this.gb5()
return s.b.$1(J.kw(s.a,b))},
gO:function(a){var s=P.i1(this.gb5(),!1,t.h)
return new J.ad(s,s.length)}}
P.hR.prototype={
$1:function(a){return t.h.b(a)},
$S:36}
P.hS.prototype={
$1:function(a){return t.h.a(a)},
$S:29}
P.fO.prototype={
gcv:function(a){return this.$ti.c.a(this.a+this.c)},
gdg:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aT(b)
if(s===r.gbt(b)){q=o.b
if(q===r.gbx(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcv(b)&&p.a(q+o.d)===r.gdg(b)}else s=!1}else s=!1}else s=!1
return s},
gA:function(a){var s=this,r=s.a,q=C.c.gA(r),p=s.b,o=C.c.gA(p),n=s.$ti.c
r=C.c.gA(n.a(r+s.c))
p=C.c.gA(n.a(p+s.d))
return H.nK(H.iG(H.iG(H.iG(H.iG(0,q),o),r),p))}}
P.aa.prototype={
gbt:function(a){return this.a},
gbx:function(a){return this.b},
gaF:function(a){return this.c},
gaB:function(a){return this.d}}
P.aI.prototype={$iaI:1}
P.eh.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.aM.prototype={$iaM:1}
P.ex.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.ir.prototype={
gj:function(a){return a.length}}
P.eS.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.n.prototype={
gaz:function(a){return new P.e8(a,new W.fk(a))}}
P.aP.prototype={$iaP:1}
P.f1.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fC.prototype={}
P.fD.prototype={}
P.fK.prototype={}
P.fL.prototype={}
P.fY.prototype={}
P.fZ.prototype={}
P.h5.prototype={}
P.h6.prototype={}
P.hr.prototype={
gj:function(a){return a.length}}
P.dZ.prototype={
h:function(a,b){return P.bg(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bg(s.value[1]))}},
gaf:function(a){var s=H.b([],t.s)
this.w(a,new P.hs(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
P.hs.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.e_.prototype={
gj:function(a){return a.length}}
P.b0.prototype={}
P.ey.prototype={
gj:function(a){return a.length}}
P.fj.prototype={}
P.bY.prototype={
hS:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.pq(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bE("Incorrect number or type of arguments"))},
$ibY:1}
P.eN.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=P.bg(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fU.prototype={}
P.fV.prototype={}
K.dU.prototype={
aV:function(a,b){return!0},
i:function(a){return"all"},
$ibt:1}
K.cy.prototype={
aV:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].aV(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibt:1}
K.aL.prototype={
aV:function(a,b){return!this.e6(0,b)},
i:function(a){return"!["+this.bB(0)+"]"}}
K.Z.prototype={
X:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.V(t.fX)
for(r=new H.bQ(a,a.gj(a)),q=H.U(r).c;r.q();)s.k(0,q.a(r.d),!0)
p=P.i1(s.gaf(s),!0,t.S)
C.b.e5(p)
this.a=p},
aV:function(a,b){return C.b.M(this.a,b)},
i:function(a){return P.eT(this.a,0,null)},
$ibt:1}
L.eO.prototype={
n:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.d2(this.a.K(0,b),H.b([],t.B))
s.push(p)
return p},
hi:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.aV(0,a))return p}return null},
i:function(a){return this.b},
d6:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.M(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gaf(s)}s=J.aD(s==null?H.b([],t.s):s)
for(;s.q();){r=s.gD(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.M(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bB(0))}return m.charCodeAt(0)==0?m:m}}
L.eZ.prototype={
i:function(a){var s=H.mA(this.b,"\n","\\n"),r=H.mA(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f_.prototype={
i:function(a){return this.b}}
L.iS.prototype={
K:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eO(this,b,H.b([],t.ab))
s.k(0,b,r)}return r},
bh:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.f_(a,P.T(s,s))
r.k(0,a,q)}return q},
e_:function(a){return this.hW(a)},
hW:function(a){var s=this
return P.oP(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$e_(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.U(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.b.cs(a1,0)
else{if(!r.q()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=d==null
f=g?null:d.hi(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.eT(a0,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.w(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.z("removeRange"))
P.b8(0,i,a0.length)
a0.splice(0,i-0)
C.b.fW(a1,a0)
a0=H.b([],c)
b=H.b([],c)
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
case 6:if(!f.c)b.push(h)
d=f.b
g=d.d
if(g!=null){e=P.eT(b,0,null)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.eZ(g,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.M(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.nX()
case 1:return P.nY(o)}}},t.bJ)},
i:function(a){var s,r=new P.a1(""),q=this.d
if(q!=null)r.a=""+(q.d6()+"\n")
for(q=this.a,q=q.ghZ(q),q=q.gO(q);q.q();){s=q.gD(q)
if(s!=this.d)r.a+=H.w(s==null?null:s.d6())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.d2.prototype={
i:function(a){return this.b.b+": "+this.bB(0)}}
O.ai.prototype={
cD:function(a,b,c){this.b=b
this.c=a},
bk:function(a,b){return this.cD(a,null,b)},
fl:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
ed:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.ad(s,s.length)},
G:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.U(q).I("u<ai.T>")
if(q.fl(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.ed(r,H.b([b],p))}},
$ik:1}
O.cN.prototype={
gj:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.L():s},
aH:function(){var s=this.b
return s==null?null:s.E(null)},
ga0:function(a){var s=this.a
if(s.length>0)return C.b.gaC(s)
else return V.aA()},
dW:function(a){this.a.push(a)
this.aH()},
cq:function(){var s=this.a
if(s.length>0){s.pop()
this.aH()}}}
E.hv.prototype={}
E.bo.prototype={
cN:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.ad(s,s.length),r=H.U(s).c;s.q();){q=r.a(s.d)
if(q.f==null)q.cN()}},
scE:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().J(0,s.gdQ())
if(b!=null)b.gt().l(0,s.gdQ())
s.am(new D.E("shape",r,b))}},
sdZ:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gt().J(0,s.gdS())
if(a!=null)a.gt().l(0,s.gdS())
s.cN()
s.am(new D.E("technique",r,a))}},
sbc:function(a){var s,r,q=this
if(!J.J(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gt().J(0,q.gdO())
if(a!=null)a.gt().l(0,q.gdO())
r=q.r
q.am(new D.E("mover",s,r))}},
at:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aZ(0,b,q)
if(!J.J(o,q.x)){s=q.x
q.x=o
q.am(new D.E("matrix",s,o))}p=q.f
if(p!=null)p.at(0,b)
for(p=q.y.a,p=new J.ad(p,p.length),r=H.U(p).c;p.q();)r.a(p.d).at(0,b)},
aW:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga0(q))
else o.push(p.H(0,q.ga0(q)))
q.aH()
a.dX(r.f)
s=C.b.gaC(a.dy)
if(r.d!=null)if(s!=null)s.hM(a,r)
for(p=r.y.a,p=new J.ad(p,p.length),o=H.U(p).c;p.q();)o.a(p.d).aW(a)
a.dV()
q.cq()},
am:function(a){var s=this.z
return s==null?null:s.E(a)},
a1:function(){return this.am(null)},
dR:function(a){this.e=null
this.am(a)},
hB:function(){return this.dR(null)},
dT:function(a){return this.am(a)},
hC:function(){return this.dT(null)},
dP:function(a){return this.am(a)},
hA:function(){return this.dP(null)},
dN:function(a){return this.am(a)},
hx:function(){return this.dN(null)},
hw:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdM(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bJ()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a1()},
hz:function(a,b){var s,r
for(s=b.gO(b),r=this.gdM();s.q();)s.gD(s).gt().J(0,r)
this.a1()},
i:function(a){return"Unnamed entity"}}
E.bF.prototype={
i:function(a){return this.b}}
E.bV.prototype={
i:function(a){return this.b}}
E.ft.prototype={}
E.iu.prototype={
ec:function(a,b){var s=this
s.cy.gt().l(0,new E.iv(s))
s.db.gt().l(0,new E.iw(s))
s.dx.gt().l(0,new E.ix(s))},
ghJ:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga0(q).H(0,s.ga0(s))
q=s}return q},
dX:function(a){var s=this.dy
return s.push(a==null?C.b.gaC(s):a)},
dV:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iv.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.iw.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.ix.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.eY.prototype={
cK:function(a){this.dY()},
cJ:function(){return this.cK(null)},
ghn:function(){var s,r=this,q=Date.now(),p=C.c.Z(P.lo(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.X(q,!1)
return s/p},
d0:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.ba(r*o)
r=s.clientHeight
r.toString
p=C.d.ba(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.lN(C.m,this.ghO())}},
dY:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.y.eA(s)
r=W.ml(new E.iP(this),t.H)
r.toString
C.y.fF(s,r)}},
hL:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d0()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.X(p,!1)
q.y=P.lo(p-q.r.a).a*0.000001
p=q.cy
C.b.sj(p.a,0)
p.aH()
p=q.db
C.b.sj(p.a,0)
p.aH()
p=q.dx
C.b.sj(p.a,0)
p.aH()
p=q.dy
C.b.sj(p,0)
p.push(null)
m.aW(q)}}catch(o){s=H.bh(o)
r=H.l7(o)
P.lc("Error: "+H.w(s))
P.lc("Stack: "+H.w(r))
throw H.c(s)}}}
E.iP.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hL()}},
$S:57}
Z.fg.prototype={}
Z.bG.prototype={
bp:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.bh(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.w(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jl.prototype={}
Z.cm.prototype={
aT:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bp:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].bp(a)}},
e0:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aW:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cU(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.r)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.n(l,", ")+"\nAttrs:   "+C.b.n(o,", ")}}
Z.bN.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cU(this.c)+"'")+"]"}}
Z.bb.prototype={
gcF:function(a){var s=this.a,r=(s&$.aY().a)!==0?3:0
if((s&$.aC().a)!==0)r+=3
if((s&$.aX().a)!==0)r+=3
if((s&$.bi().a)!==0)r+=2
if((s&$.bj().a)!==0)r+=3
if((s&$.dQ().a)!==0)r+=3
if((s&$.dR().a)!==0)r+=4
if((s&$.bD().a)!==0)++r
return(s&$.aW().a)!==0?r+4:r},
h0:function(a){var s,r=$.aY(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bi()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aW()
if((q&r.a)!==0)if(s===a)return r
return $.mS()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bb))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.aY().a)!==0)s.push("Pos")
if((r&$.aC().a)!==0)s.push("Norm")
if((r&$.aX().a)!==0)s.push("Binm")
if((r&$.bi().a)!==0)s.push("Txt2D")
if((r&$.bj().a)!==0)s.push("TxtCube")
if((r&$.dQ().a)!==0)s.push("Clr3")
if((r&$.dR().a)!==0)s.push("Clr4")
if((r&$.bD().a)!==0)s.push("Weight")
if((r&$.aW().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.n(s,"|")}}
D.hx.prototype={}
D.bJ.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
J:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.M(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.J(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.M(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.J(p,b)
s=p===!0||s}return s},
E:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.Q():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.w(P.i1(p,!0,t.h2),new D.hO(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.w(r,new D.hP(s))}return!0},
he:function(){return this.E(null)},
a9:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.E(s)}}}}
D.hO.prototype={
$1:function(a){a.$1(this.a)},
$S:24}
D.hP.prototype={
$1:function(a){a.$1(this.a)},
$S:24}
D.Q.prototype={}
D.b3.prototype={}
D.b4.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.w(this.d)+" => "+H.w(this.e)}}
X.cn.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cn))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eg.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hY.prototype={}
X.cH.prototype={}
X.i3.prototype={
b4:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a5(o.a+b.a,o.b+b.b)
o=q.a.gaQ()
s=$.af
if(s==null)s=$.af=new V.a5(0,0)
r=q.x
q.z=new P.X(p,!1)
q.x=n
return new X.bS(a,s,r,o,n)},
cp:function(a,b){this.r=a.a
return!1},
be:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.b4(a,b))
return!0},
hG:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaQ()
r=this.x
Date.now()
q.E(new X.bT(new V.a6(a.a,a.b),s,r))
return!0},
fa:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.E(new X.cH(c,q.a.gaQ(),b))
q.y=new P.X(s,!1)
s=$.af
q.x=s==null?$.af=new V.a5(0,0):s}}
X.a8.prototype={
m:function(a,b){var s=this
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
return C.b.n(s,"+")}}
X.bS.prototype={}
X.io.prototype={
bJ:function(a,b,c){var s=this,r=new P.X(Date.now(),!1),q=s.a.gaQ(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bS(a,p,o,q,b)},
cp:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.E(this.bJ(a,b,!0))
return!0},
be:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.E(r.bJ(a,b,!0))
return!0},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.bJ(a,b,!1))
return!0},
hH:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaQ()
Date.now()
r.E(new X.bT(new V.a6(a.a,a.b),s,b))
return!0},
gdk:function(){var s=this.b
return s==null?this.b=D.L():s},
gcA:function(){var s=this.c
return s==null?this.c=D.L():s},
gdL:function(){var s=this.d
return s==null?this.d=D.L():s}}
X.bT.prototype={}
X.eE.prototype={}
X.d1.prototype={}
X.iT.prototype={
b4:function(a,b){var s,r,q,p,o=this,n=new P.X(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.af
if(r==null){r=new V.a5(0,0)
$.af=r
s=r}else s=r}r=o.a.gaQ()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.d1(q,p,r,s)},
hF:function(a){var s=this.b
if(s==null)return!1
s.E(this.b4(a,!0))
return!0},
hD:function(a){var s=this.c
if(s==null)return!1
s.E(this.b4(a,!0))
return!0},
hE:function(a){var s=this.d
if(s==null)return!1
s.E(this.b4(a,!1))
return!0}}
X.fe.prototype={
gaU:function(a){var s=this.b
return s==null?this.b=new X.hY(new X.a8(!1,!1,!1),P.lv(t.S)):s},
ga4:function(){var s,r=this.c
if(r==null){r=$.af
if(r==null){r=$.af=new V.a5(0,0)
s=r}else s=r
r=this.c=new X.io(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gag:function(){var s=this.d
if(s==null){s=$.af
if(s==null)s=$.af=new V.a5(0,0)
s=this.d=new X.i3(this,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return s},
gaY:function(){var s,r=this.e
if(r==null){r=$.af
if(r==null){r=$.af=new V.a5(0,0)
s=r}else s=r
r=this.e=new X.iT(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gaQ:function(){var s=this.a
return V.lG(0,0,C.i.gdh(s).c,C.i.gdh(s).d)},
cQ:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eg(p,new X.a8(s,r,q))},
aO:function(a){var s,r,q=this.gaU(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a8(p,s,r)},
bX:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaU(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a8(s,r===!0,q===!0)},
ay:function(a){var s,r,q,p
if(a==null){s=$.af
return s==null?$.af=new V.a5(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a5(r-p,q-s)},
b6:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a6(r,s)},
bT:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.an(n)
m=o.pageY
m.toString
C.d.an(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.an(l)
l=o.pageY
l.toString
l=C.d.an(l)
k=j.top
k.toString
s.push(new V.a5(n-m,l-k))}return s},
av:function(a){var s,r,q,p
if(a==null)return new X.cn(0,new X.a8(!1,!1,!1))
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
return new X.cn(s,new X.a8(r,q,p))},
bK:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
f4:function(a){return this.f=!0},
eS:function(a){return this.f=!1},
eZ:function(a){if(this.f&&this.bK(a))a.preventDefault()},
f8:function(a){var s,r,q=this
if(!q.f)return
s=q.cQ(a)
r=q.gaU(q)
r.c=s.b
r.d.l(0,s.a)},
f6:function(a){var s,r,q=this
if(!q.f)return
s=q.cQ(a)
r=q.gaU(q)
r.c=s.b
r.d.J(0,s.a)},
fc:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aO(a)
if(p.x){s=p.av(a)
r=p.b6(a)
if(p.gag().cp(s,r))a.preventDefault()
return}s=p.av(a)
q=p.ay(a)
if(p.ga4().cp(s,q))a.preventDefault()},
fg:function(a){var s,r,q,p=this
p.aO(a)
s=p.av(a)
if(p.x){r=p.b6(a)
if(p.gag().be(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga4().be(s,q))a.preventDefault()},
f2:function(a){var s,r,q,p=this
if(!p.bK(a)){p.aO(a)
s=p.av(a)
if(p.x){r=p.b6(a)
if(p.gag().be(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga4().be(s,q))a.preventDefault()}},
fe:function(a){var s,r,q,p=this
p.aO(a)
s=p.av(a)
if(p.x){r=p.b6(a)
if(p.gag().bd(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga4().bd(s,q))a.preventDefault()},
f0:function(a){var s,r,q,p=this
if(!p.bK(a)){p.aO(a)
s=p.av(a)
if(p.x){r=p.b6(a)
if(p.gag().bd(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga4().bd(s,q))a.preventDefault()}},
fi:function(a){var s,r,q=this
q.aO(a)
s=new V.a6(C.x.ghb(a),C.x.ghc(a)).H(0,q.Q)
if(q.x){if(q.gag().hG(s))a.preventDefault()
return}r=q.ay(a)
if(q.ga4().hH(s,r))a.preventDefault()},
fk:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.av(q.y)
r=q.ay(q.y)
q.gag().fa(s,r,p)}},
fA:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bX(a)
s=r.bT(a)
if(r.gaY().hF(s))a.preventDefault()},
fu:function(a){var s
this.bX(a)
s=this.bT(a)
if(this.gaY().hD(s))a.preventDefault()},
fw:function(a){var s
this.bX(a)
s=this.bT(a)
if(this.gaY().hE(s))a.preventDefault()}}
D.bI.prototype={
au:function(a){var s=this.r
return s==null?null:s.E(a)},
ef:function(){return this.au(null)},
$iaq:1}
D.cD.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.L():s},
gdJ:function(){var s=this.z
return s==null?this.z=D.L():s},
au:function(a){var s=this.y
return s==null?null:s.E(a)},
cY:function(a){var s=this.z
return s==null?null:s.E(a)},
f9:function(){return this.cY(null)},
fn:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r)if(this.ev(a[r]))return!1
return!0},
eM:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gcX(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.r)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bJ()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.au(new D.b3())},
fs:function(a,b){var s,r,q,p
for(s=b.gO(b),r=this.gcX(),q=this.e;s.q();){p=s.gD(s)
C.b.J(q,p)
p.gt().J(0,r)}this.au(new D.b4())},
ev:function(a){var s=C.b.M(this.f,a)
return s}}
V.W.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bm.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bm))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.hM.prototype={}
V.cM.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cM))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cj(H.b([o.a,o.d,o.r],n),3,0),l=V.cj(H.b([o.b,o.e,o.x],n),3,0),k=V.cj(H.b([o.c,o.f,o.y],n),3,0)
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
V.b6.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
dG:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.D().toString
if(Math.abs(b3-0)<1e-9)return V.aA()
s=1/b3
r=-l
q=-a2
return V.aK((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
H:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aK(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
by:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bi:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.R(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b6))return!1
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
i:function(a){return this.v()},
B:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cj(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cj(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cj(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cj(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
v:function(){return this.B("")}}
V.a5.prototype={
ab:function(a){return new V.a6(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"},
v:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.R.prototype={
T:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
aG:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
v:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bW.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bW))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.eG.prototype={
gas:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eG))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.a6.prototype={
ck:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b},
H:function(a,b){return new V.a6(this.a*b,this.b*b)},
ac:function(a,b){var s
$.D().toString
if(Math.abs(b-0)<1e-9){s=$.by
return s==null?$.by=new V.a6(0,0):s}return new V.a6(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.B.prototype={
ck:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){return new V.B(V.hl(this.a,a.a,b),V.hl(this.b,a.b,b),V.hl(this.c,a.c,b))},
F:function(){var s=this,r=Math.sqrt(s.a2(s))
if(r===1)return s
return s.ac(0,r)},
aA:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
T:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
b_:function(a){return new V.B(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
ac:function(a,b){$.D().toString
if(Math.abs(b-0)<1e-9)return V.dg()
return new V.B(this.a/b,this.b/b,this.c/b)},
dI:function(){$.D().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
v:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.hy.prototype={
bC:function(a){var s=V.pQ(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.L():s},
L:function(a){var s=this.y
return s==null?null:s.E(a)},
scB:function(a,b){},
scm:function(a){var s,r=this,q=r.b
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bC(s)}r.L(new D.E("maximumLocation",q,r.b))}},
sco:function(a){var s,r=this,q=r.c
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bC(s)}r.L(new D.E("minimumLocation",q,r.c))}},
sU:function(a,b){var s,r=this
b=r.bC(b)
s=r.d
$.D().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.L(new D.E("location",s,b))}},
scn:function(a){var s,r,q=this,p=q.e
$.D().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.L(new D.E("maximumVelocity",p,a))}},
sY:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.L(new D.E("velocity",r,a))}},
sc8:function(a){var s
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
p.sU(0,p.d+s*b)
o=p.x
$.D().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sY(s)}}}
U.cp.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.L():s},
aZ:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bL.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.L():s},
L:function(a){var s=this.e
return s==null?null:s.E(a)},
a7:function(){return this.L(null)},
eK:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaI(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.L(new D.b3())},
fp:function(a,b){var s,r
for(s=b.gO(b),r=this.gaI();s.q();)s.gD(s).gt().J(0,r)
this.L(new D.b4())},
aZ:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ad(o,o.length),n=H.U(o).c,s=null;o.q();){r=n.a(o.d)
if(r!=null){q=r.aZ(0,b,c)
s=s==null?q:q.H(0,s)}}p.f=s==null?V.aA():s
o=p.e
if(o!=null)o.a9(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bL))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.J(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia_:1}
U.a_.prototype={}
U.dd.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.L():s},
L:function(a){var s=this.cy
return s==null?null:s.E(a)},
a7:function(){return this.L(null)},
b8:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga4().gdk().l(0,s.gbL())
a.ga4().gdL().l(0,s.gbN())
a.ga4().gcA().l(0,s.gbP())
return!0},
bM:function(a){var s=this,r=s.c,q=s.a
if(!r.m(0,q==null?null:q.gaU(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bO:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ab(a.d)
if(s.a2(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sU(0,-a.y.ab(r).H(0,2).ac(0,s.gas()).a*2.5+p.z)
q.sY(0)
p.Q=a.z.ab(r).H(0,2).ac(0,s.gas())
p.a7()},
bQ:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a2(s)>0.0001){r.b.sY(r.Q.a*10*2.5)
r.a7()}},
aZ:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.at(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aK(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia_:1}
U.de.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.L():s},
L:function(a){var s=this.fx
return s==null?null:s.E(a)},
a7:function(){return this.L(null)},
b8:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga4().gdk().l(0,q.gbL())
a.ga4().gdL().l(0,q.gbN())
a.ga4().gcA().l(0,q.gbP())
s=a.gag()
r=s.f
s=r==null?s.f=D.L():r
s.l(0,q.geD())
s=a.gag()
r=s.d
s=r==null?s.d=D.L():r
s.l(0,q.geF())
s=a.gaY()
r=s.b
s=r==null?s.b=D.L():r
s.l(0,q.gfS())
s=a.gaY()
r=s.d
s=r==null?s.d=D.L():r
s.l(0,q.gfQ())
s=a.gaY()
r=s.c
s=r==null?s.c=D.L():r
s.l(0,q.gfO())
return!0},
aN:function(a){return new V.a6(a.a,a.b)},
bM:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bO:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ab(a.d)
if(s.a2(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aN(a.y.ab(r).H(0,2).ac(0,s.gas()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sY(0)
p.sY(0)
n.dx=n.aN(a.z.ab(r).H(0,2).ac(0,s.gas()))
n.a7()},
bQ:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a2(s)>0.0001){r.c.sY(-r.dx.a*10*2.5)
r.b.sY(-r.dx.b*10*2.5)
r.a7()}},
eE:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eG:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aN(a.y.ab(r).H(0,2).ac(0,s.gas()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sY(0)
p.sY(0)
n.dx=n.aN(a.z.ab(r).H(0,2).ac(0,s.gas()))
n.a7()},
fT:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fR:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ab(a.d)
if(s.a2(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aN(a.y.ab(r).H(0,2).ac(0,s.gas()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sY(0)
p.sY(0)
n.dx=n.aN(a.z.ab(r).H(0,2).ac(0,s.gas()))
n.a7()},
fP:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a2(s)>0.0001){r.c.sY(-r.dx.a*10*2.5)
r.b.sY(-r.dx.b*10*2.5)
r.a7()}},
aZ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.at(0,s)
n=p.b
n.at(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aK(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.H(0,V.aK(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia_:1}
U.df.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.L():s},
L:function(a){var s=this.r
return s==null?null:s.E(a)},
b8:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga4()
r=s.e
s=r==null?s.e=D.L():r
r=this.geH()
s.l(0,r)
s=a.gag()
q=s.e;(q==null?s.e=D.L():q).l(0,r)
return!0},
eI:function(a){var s=this,r=s.b,q=s.a
if(!r.m(0,q==null?null:q.gaU(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.L(new D.E("zoom",r,q))}},
aZ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aK(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia_:1}
M.e6.prototype={
aK:function(a){var s=this.y
return s==null?null:s.E(a)},
eg:function(){return this.aK(null)},
eV:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaJ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bJ()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aK(new D.b3())},
eX:function(a,b){var s,r
for(s=b.gO(b),r=this.gaJ();s.q();)s.gD(s).gt().J(0,r)
this.aK(new D.b4())},
gt:function(){var s=this.y
return s==null?this.y=D.L():s},
aW:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dX(d.d)
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
n=C.d.an(o.a*q)
m=C.d.an(o.b*p)
l=C.d.an(o.c*q)
a.c=l
o=C.d.an(o.d*p)
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
g=V.aK(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dW(g)
f=$.mF()
e=s.b
if(e!=null)f=e.a.H(0,f)
a.db.dW(f)}for(s=d.e.a,r=new J.ad(s,s.length),o=H.U(r).c;r.q();)o.a(r.d).at(0,a)
for(s=new J.ad(s,s.length),r=H.U(s).c;s.q();)r.a(s.d).aW(a)
if(d.b!=null){a.cy.cq()
a.db.cq()}a.dV()}}
A.dY.prototype={}
A.hq.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hf:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hd:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ay.prototype={
gao:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
m:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ay))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.el.prototype={
eb:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a1(""),d6=d4.fr
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
A.p3(d4,d5)
A.p5(d4,d5)
A.p4(d4,d5)
A.p7(d4,d5)
A.p8(d4,d5)
A.p6(d4,d5)
A.p9(d4,d5)
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
m=A.p2(d4)
c9.c=n
c9.d=m
l=c9.cR(n,35633)
k=c9.cR(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaw(),l)
s.attachShader(c9.gaw(),k)
s.linkProgram(c9.gaw())
if(!H.me(s.getProgramParameter(c9.gaw(),35714))){j=s.getProgramInfoLog(c9.gaw())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.fK()
c9.fM()
c9.y=c9.gaq(c9).h(0,"posAttr")
c9.Q=c9.gaq(c9).h(0,"normAttr")
c9.z=c9.gaq(c9).h(0,"binmAttr")
c9.ch=c9.gaq(c9).h(0,"txt2DAttr")
c9.cx=c9.gaq(c9).h(0,"txtCubeAttr")
c9.cy=c9.gaq(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gR().P(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gR().P(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gR().P(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gR().P(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gR().P(0,"viewMat"))
if(d4.x1)c9.go=t.d.a(c9.gR().P(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gR().P(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gR().P(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.aS
if(s>0){c9.k2=t.w.a(c9.gR().P(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}if(d4.a.a)c9.k4=t.g.a(c9.gR().P(0,"emissionClr"))
if(d4.b.a)c9.rx=t.g.a(c9.gR().P(0,"ambientClr"))
if(d4.c.a)c9.x2=t.g.a(c9.gR().P(0,"diffuseClr"))
if(d4.d.a)c9.aS=t.g.a(c9.gR().P(0,"invDiffuseClr"))
d6=d4.e.a
if(!d6)s=!1
else s=!0
if(s){c9.dq=t.v.a(c9.gR().P(0,"shininess"))
if(d6)c9.dn=t.g.a(c9.gR().P(0,"specularClr"))}if(d4.db){c9.dr=t.r.a(c9.gR().P(0,"envSampler"))
if(d4.r.a)c9.ds=t.g.a(c9.gR().P(0,"reflectClr"))
d6=d4.x.a
if(!d6)s=!1
else s=!0
if(s){c9.dt=t.v.a(c9.gR().P(0,"refraction"))
if(d6)c9.du=t.g.a(c9.gR().P(0,"refractClr"))}}if(d4.y.a)c9.dv=t.v.a(c9.gR().P(0,"alpha"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.c9=P.T(r,t.W)
c9.ca=P.T(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.Y,f=0;f<d6.length;d6.length===s||(0,H.r)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.d6(g,a2,a3,a9,a8,a7))}c9.ca.k(0,d,b)
a=c9.c9
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.k(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cb=P.T(r,t.W)
c9.cc=P.T(r,t.Q)
for(r=t.w,q=t.g,p=t.G,o=t.V,f=0;f<d6.length;d6.length===s||(0,H.r)(d6),++f){e=d6[f]
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
b.push(new A.d7(b2,b1,b0,g,a2,b3))}c9.cc.k(0,d,b)
a=c9.cb
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.k(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.cd=P.T(r,t.W)
c9.ce=P.T(r,t.b)
for(r=t.w,q=t.g,p=t.d,o=t.r,a=t.F,a0=t.v,a1=t.C,f=0;f<d6.length;d6.length===s||(0,H.r)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.d9(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.ce.k(0,d,b)
b4=c9.cd
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.k(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cf=P.T(s,t.W)
c9.cg=P.T(s,t.m)
for(s=t.w,r=t.g,q=t.v,p=t.F,o=t.G,a=t.J,f=0;f<d4.length;d4.length===d6||(0,H.r)(d4),++f){e=d4[f]
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
b.push(new A.dc(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.cg.k(0,d,b)
a0=c9.cf
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.k(0,d,s.a(g))}}}},
fI:function(a,b){}}
A.b_.prototype={
i:function(a){return"barLight"+this.a}}
A.b2.prototype={
i:function(a){return"dirLight"+this.a}}
A.b7.prototype={
i:function(a){return"pointLight"+this.a}}
A.b9.prototype={
i:function(a){return"spotLight"+this.a}}
A.i7.prototype={
i:function(a){return this.bq}}
A.d6.prototype={}
A.d7.prototype={}
A.d9.prototype={}
A.dc.prototype={}
A.cX.prototype={
gaq:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gR:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaw:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
cR:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.me(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.w(q)+'": '+s))}return q},
fK:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.jI(l.getProgramParameter(o.gaw(),35721))
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
m.push(new A.dY(l,q,p))}o.f=new A.hq(m)},
fM:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.jI(j.getProgramParameter(m.gaw(),35718))
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
k.push(m.h9(o,n,q,p))}m.r=new A.iY(k)},
aM:function(a,b,c){var s=this.a
if(a===1)return new A.c2(s,b,c)
else return A.kK(s,this.e,b,a,c)},
ex:function(a,b,c){var s=this.a
if(a===1)return new A.da(s,b,c)
else return A.kK(s,this.e,b,a,c)},
ey:function(a,b,c){var s=this.a
if(a===1)return new A.db(s,b,c)
else return A.kK(s,this.e,b,a,c)},
bn:function(a,b){return new P.fv(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
h9:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aM(b,c,d)
case 5121:return s.aM(b,c,d)
case 5122:return s.aM(b,c,d)
case 5123:return s.aM(b,c,d)
case 5124:return s.aM(b,c,d)
case 5125:return s.aM(b,c,d)
case 5126:return new A.d3(s.a,c,d)
case 35664:return new A.f4(s.a,c,d)
case 35665:return new A.d4(s.a,c,d)
case 35666:return new A.d5(s.a,c,d)
case 35667:return new A.f5(s.a,c,d)
case 35668:return new A.f6(s.a,c,d)
case 35669:return new A.f7(s.a,c,d)
case 35674:return new A.f8(s.a,c,d)
case 35675:return new A.d8(s.a,c,d)
case 35676:return new A.c3(s.a,c,d)
case 35678:return s.ex(b,c,d)
case 35680:return s.ey(b,c,d)
case 35670:throw H.c(s.bn("BOOL",c))
case 35671:throw H.c(s.bn("BOOL_VEC2",c))
case 35672:throw H.c(s.bn("BOOL_VEC3",c))
case 35673:throw H.c(s.bn("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a2.prototype={}
A.iY.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
P:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.v()},
v:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.c2.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.f5.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.f6.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.f7.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.f3.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.d3.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.f4.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.d4.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.d5.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.f8.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.d8.prototype={
ak:function(a){var s=new Float32Array(H.ce(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.c3.prototype={
ak:function(a){var s=new Float32Array(H.ce(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.da.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.db.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jH.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cl(q.b,b).cl(q.d.cl(q.c,b),c)
a.sU(0,new V.R(p.a,p.b,p.c))
a.scw(p.F())
q=1-b
s=1-c
a.sc1(new V.bW(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:5}
F.jU.prototype={
$2:function(a,b){return V.hl(this.a,this.b,b)},
$S:15}
F.jW.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hl(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sU(0,new V.R(q,s,o))
a.scw(new V.B(q,s,o).F())
a.sc1(new V.bW(1-c,2+c,-1,-1))},
$S:5}
F.k6.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.B(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).F()
a.sU(0,new V.R(q.a,q.b,q.c))},
$S:5}
F.kt.prototype={
$2:function(a,b){return 0},
$S:15}
F.ks.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.mt(r)
s=a.f
r=(s!=null?new V.B(s.a,s.b,s.c):V.kM()).F().H(0,this.a+r)
a.sU(0,new V.R(r.a,r.b,r.c))},
$S:5}
F.ku.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)},
$S:41}
F.jV.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lg(l.$1(m),k)
k=J.lg(l.$1(m+3.141592653589793/n.c),k).aG(0,j)
s=new V.B(k.a,k.b,k.c).F()
r=$.lV
if(r==null){r=new V.B(1,0,0)
$.lV=r}q=s.aA(!s.m(0,r)?V.kM():r).F()
r=q.aA(s).F()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.H(0,l*k)
k=q.H(0,o*k)
a.sU(0,j.T(0,new V.R(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:5}
F.k0.prototype={
$2:function(a,b){return 0},
$S:15}
F.k_.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sU(0,new V.R(q,p,this.a.$2(b,c)))
a.scw(new V.B(q,p,1).F())
s=1-b
r=1-c
a.sc1(new V.bW(b*c,2+s*c,4+b*r,6+s*r))},
$S:5}
F.az.prototype={
b2:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.bY(a)
s.bZ(b)
s.fJ(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gN().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a1()}},
b9:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.J(r.gN().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a1()}}s.bU()
s.bV()
s.fD()},
bY:function(a){this.a=a
a.gN().b.push(this)},
bZ:function(a){this.b=a
a.gN().c.push(this)},
fJ:function(a){this.c=a
a.gN().d.push(this)},
bU:function(){var s=this.a
if(s!=null)C.b.J(s.gN().b,this)
this.a=null},
bV:function(){var s=this.b
if(s!=null)C.b.J(s.gN().c,this)
this.b=null},
fD:function(){var s=this.c
if(s!=null)C.b.J(s.gN().d,this)
this.c=null},
ep:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dg()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.dI())return p
return q.F()},
er:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aG(0,n)
q=new V.B(o.a,o.b,o.c).F()
o=r.aG(0,n)
return q.aA(new V.B(o.a,o.b,o.c).F()).F()},
c4:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ep()
if(s==null){s=q.er()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a1()}return!0},
eo:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dg()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.dI())return p
return q.F()},
eq:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.D().toString
if(Math.abs(p-0)<1e-9){j=b.aG(0,e)
o=new V.B(j.a,j.b,j.c).F()
if(q.a-r.a<0)o=o.b_(0)}else{n=(j-s.b)/p
j=b.aG(0,e).H(0,n).T(0,e).aG(0,h)
o=new V.B(j.a,j.b,j.c).F()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b_(0)}m=l.d
if(m!=null){m=m.F()
o=m.aA(o).F().aA(m).F()}return o},
c2:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eo()
if(s==null){s=q.eq()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a1()}return!0},
gh4:function(a){var s=this
if(J.J(s.a,s.b))return!0
if(J.J(s.b,s.c))return!0
if(J.J(s.c,s.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gu(p)
p=a+C.a.ai(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gu(o)
p=p+C.a.ai(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gu(o)
s=p+C.a.ai(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.v()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.v()
return s+((p==null?"-":p)+"}")},
v:function(){return this.B("")}}
F.hQ.prototype={}
F.iD.prototype={
bb:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.c
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.c
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.a
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gu(q)
s=c.c
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.b
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else return!1}}}}
F.ei.prototype={
ea:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.bY(a)
s.bZ(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga3(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a1()}},
b9:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.J(r.ga3(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a1()}}s.bU()
s.bV()},
bY:function(a){this.a=a
a.ga3(a).b.push(this)},
bZ:function(a){this.b=a
a.ga3(a).c.push(this)},
bU:function(){var s=this.a
if(s!=null)C.b.J(s.ga3(s).b,this)
this.a=null},
bV:function(){var s=this.b
if(s!=null)C.b.J(s.ga3(s).c,this)
this.b=null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gu(s)
s=a+C.a.ai(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gu(r)
return s+C.a.ai(C.c.i(r==null?-1:r),0)},
v:function(){return this.B("")}}
F.hZ.prototype={}
F.iX.prototype={
bb:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.b
return q==(s==null?r:s.gu(s))}else{q=b.a
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.a
return q==(s==null?r:s.gu(s))}else return!1}}}
F.eD.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gu(s)
return a+C.a.ai(C.c.i(s),0)},
v:function(){return this.B("")}}
F.cY.prototype={
gW:function(){var s=this.a
return s==null?this.a=new F.x(this,H.b([],t.k)):s},
gbf:function(a){var s=this.b
return s==null?this.b=new F.bw(this,H.b([],t.q)):s},
ga3:function(a){var s=this.c
return s==null?this.c=new F.cZ(this,H.b([],t.L)):s},
gN:function(){var s=this.d
return s==null?this.d=new F.bZ(this,H.b([],t.u)):s},
gt:function(){var s=this.e
return s==null?this.e=D.L():s},
bu:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gW().V()
s=b.gW().c.length
for(a0=a1.gW().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.x(b,H.b([],q))
n.l(0,o.h7())}b.gW().V()
for(a0=a1.gbf(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.x(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bw(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.x(l,H.b([],q)):k).l(0,h)
l=new F.eD()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dh(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bw(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.E(a)}}}for(a0=a1.ga3(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.x(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.x(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.cZ(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.x(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.x(l,H.b([],q)):k).l(0,e)
new F.ei().ea(f,e)}for(a0=a1.gN().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.x(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.x(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.x(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.bZ(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.x(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.x(l,H.b([],q)):k).l(0,e)
k=l.a;(k==null?l.a=new F.x(l,H.b([],q)):k).l(0,c)
new F.az().b2(f,e,c)}a0=b.e
if(a0!=null)a0.a9(0)},
a8:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gN().a8()||!1
if(!r.gW().a8())s=!1
q=r.e
if(q!=null)q.a9(0)
return s},
h_:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.e
if(a1!=null)++a1.d
for(s=a0.gW().c.length-1,a1=t.k,r=a2.b,q=a2.a,p=q.length,o=a2.c,n=r-1,m=o-1;s>=0;--s){l=a0.a
l=(l==null?a0.a=new F.x(a0,H.b([],a1)):l).c
if(s>=l.length)return H.d(l,s)
k=l[s]
j=k.f
i=k.r
h=k.y
if(j!=null&&i!=null&&h!=null){g=C.d.ba(h.a*n)
f=C.d.ba(h.b*m)
g=g>=0?C.c.ap(g,r):r+C.c.ap(g,r)
e=(g+(f>=0?C.c.ap(f,o):o+C.c.ap(f,o))*r)*4
if(e<0||e>=p)return H.d(q,e)
l=q[e]
d=e+1
if(d>=p)return H.d(q,d)
d=q[d]
c=e+2
if(c>=p)return H.d(q,c)
c=q[c]
b=e+3
if(b>=p)return H.d(q,b)
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
c=new V.R(j.a+l*a,j.b+d*a,j.c+c*a)
if(!J.J(k.f,c)){k.f=c
l=k.a
if(l!=null){l=l.e
if(l!=null)l.E(null)}}}}a1=a0.e
if(a1!=null)a1.a9(0)},
hY:function(a){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
for(s=p.gW().c.length-1,o=a.a,r=t.k;s>=0;--s){q=p.a
q=(q==null?p.a=new F.x(p,H.b([],r)):q).c
if(s>=q.length)return H.d(q,s)
q=q[s]
if((o&$.aY().a)===0)q.f=null
if((o&$.aC().a)===0)q.r=null
if((o&$.aX().a)===0)q.x=null
if((o&$.bi().a)===0)q.y=null
if((o&$.bj().a)===0)q.z=null
if((o&$.le().a)===0)q.Q=null
if((o&$.bD().a)===0)q.ch=0
if((o&$.aW().a)===0)q.cx=null}o=p.e
if(o!=null)o.a9(0)},
hX:function(a){var s,r,q=this,p=q.e
if(p!=null)++p.d
for(s=q.gN().b.length-1,p=t.u;s>=0;--s){r=q.d
r=(r==null?q.d=new F.bZ(q,H.b([],p)):r).b
if(s>=r.length)return H.d(r,s)
r[s].d=null}p=q.e
if(p!=null)p.a9(0)},
ht:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gW().c
s=H.b(m.slice(0),H.l0(m))
for(m=t.k;s.length!==0;){r=C.b.ghj(s)
C.b.cs(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bb(0,r,o)){q.push(o)
C.b.cs(s,p)}}if(q.length>1)b.bu(q)}n.gW().V()
n.ga3(n).bw()
n.gN().bw()
n.gbf(n).hK()
n.ga3(n).ct(new F.iX())
n.gN().ct(new F.iD())
m=n.e
if(m!=null)m.a9(0)},
bo:function(){this.ht(new F.jg(),new F.ip())},
h2:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gW().c.length,a0=a3.a,a1=(a0&$.aY().a)!==0?1:0
if((a0&$.aC().a)!==0)++a1
if((a0&$.aX().a)!==0)++a1
if((a0&$.bi().a)!==0)++a1
if((a0&$.bj().a)!==0)++a1
if((a0&$.dQ().a)!==0)++a1
if((a0&$.dR().a)!==0)++a1
if((a0&$.bD().a)!==0)++a1
if((a0&$.aW().a)!==0)++a1
s=a3.gcF(a3)
r=P.cG(a*s,0,!1,t.gR)
b.a=0
q=P.nm(a1,new F.iz(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.ce(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cm(new Z.fg(c,p),H.b([],t.fv),q,a3)
if(e.gbf(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bw(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k);++l}h=Z.kO(a0,34963,n)
o.b.push(new Z.bN(0,n.length,h))}if(e.ga3(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.cZ(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k);++l}h=Z.kO(a0,34963,n)
o.b.push(new Z.bN(1,n.length,h))}if(e.gN().b.length!==0){n=H.b([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.bZ(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.x(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k);++l}h=Z.kO(a0,34963,n)
o.b.push(new Z.bN(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gW().c.length!==0){q.push("Vertices:")
q.push(s.gW().B(r))}if(s.gbf(s).b.length!==0){q.push("Points:")
q.push(s.gbf(s).B(r))}if(s.ga3(s).b.length!==0){q.push("Lines:")
q.push(s.ga3(s).B(r))}if(s.gN().b.length!==0){q.push("Faces:")
q.push(s.gN().B(r))}return C.b.n(q,"\n")},
a1:function(){var s=this.e
return s==null?null:s.E(null)}}
F.iz.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.h0(a),e=f.gcF(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.x(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hr(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bG(f,e,c*4,g.d)},
$S:56}
F.bZ.prototype={
fZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
if(m){(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,g)
e=new F.az()
e.b2(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,f)
e=new F.az()
e.b2(j,g,f)
d.push(e)}else{(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,f)
e=new F.az()
e.b2(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,f)
k=s.a;(k==null?s.a=new F.x(s,H.b([],r)):k).l(0,j)
e=new F.az()
e.b2(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gj:function(a){return this.b.length},
ct:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gW().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.x(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.c8(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.c8(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bb(0,l,(o==null?n.d=new F.c8(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.b9()
break}}}}},
bw:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gh4(q))q.b9()}},
a8:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].c4())q=!1
return q},
c3:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].c2())q=!1
return q},
i:function(a){return this.v()},
B:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(a))
return C.b.n(p,"\n")},
v:function(){return this.B("")}}
F.cZ.prototype={
gj:function(a){return this.b.length},
ct:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gW().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.x(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.c9(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.c9(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bb(0,l,(o==null?n.c=new F.c9(H.b([],q),H.b([],q)):o).h(0,j))){l.b9()
break}}}}},
bw:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.J(q.a,q.b))q.b9()}},
i:function(a){return this.v()},
B:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].B(a+(""+s+". ")))}return C.b.n(r,"\n")},
v:function(){return this.B("")}}
F.bw.prototype={
gj:function(a){return this.b.length},
hK:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dh(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.J((n==null?p.b=new F.bw(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.E(null)}}}p=m.a
if(p!=null){n=p.b
C.b.J((n==null?p.b=new F.dh(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.v()},
B:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(a))
return C.b.n(p,"\n")},
v:function(){return this.B("")}}
F.c7.prototype={
c7:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kN(s.cx,p,m,r,q,o,n,a,l)},
h7:function(){return this.c7(null)},
ga3:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.c9(H.b([],s),H.b([],s))}return s},
gN:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.c8(H.b([],s),H.b([],s),H.b([],s))}return s},
gu:function(a){var s=this.a
if(s!=null)s.gW().V()
return this.e},
sU:function(a,b){var s
if(!J.J(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a1()}},
scw:function(a){var s
if(!J.J(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a1()}},
sc1:function(a){var s
if(!J.J(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a1()}},
hr:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.aY())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.aC())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.m(0,$.aX())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.m(0,$.bi())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.m(0,$.bj())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.dQ())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.m(0,$.dR())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.m(0,$.bD()))return H.b([o.ch],t.n)
else if(a.m(0,$.aW())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
c4:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dg()
p.gN().w(0,new F.jk(o))
p.r=o.a.F()
if(r){s.a1()
o=s.e
if(o!=null)o.a9(0)}return!0},
c2:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dg()
p.gN().w(0,new F.jj(o))
p.x=o.a.F()
if(r){s.a1()
o=s.e
if(o!=null)o.a9(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.ai(C.c.i(q.e),0))
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
n.push(V.A(q.ch,3,0))
s=q.cx
s=s==null?p:s.v()
n.push(s==null?o:s)
r=C.b.n(n,", ")
return a+"{"+r+"}"},
v:function(){return this.B("")}}
F.jk.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:9}
F.jj.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:9}
F.x.prototype={
V:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a1()
return!0},
gj:function(a){return this.c.length},
a8:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].c4()
return!0},
c3:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].c2()
return!0},
h3:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.F()
if(!J.J(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.E(null)}}}}}return!0},
i:function(a){return this.v()},
B:function(a){var s,r,q,p
this.V()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].B(a))
return C.b.n(s,"\n")},
v:function(){return this.B("")}}
F.c8.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
w:function(a,b){var s=this
C.b.w(s.b,b)
C.b.w(s.c,new F.je(s,b))
C.b.w(s.d,new F.jf(s,b))},
i:function(a){return this.v()},
v:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
F.je.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)},
$S:9}
F.jf.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)},
$S:9}
F.c9.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.v()},
v:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
F.jh.prototype={}
F.jg.prototype={
bb:function(a,b,c){return J.J(b.f,c.f)}}
F.ji.prototype={}
F.ip.prototype={
bu:function(a){var s,r,q,p,o,n=V.dg()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.B(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.F()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){p=a[r]
q=n.F()
if(!J.J(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}return null}}
F.dh.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
O.cK.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.L():s},
ad:function(a){var s=this.fr
return s==null?null:s.E(a)},
eT:function(){return this.ad(null)},
d_:function(a){this.a=null
this.ad(a)},
fG:function(){return this.d_(null)},
eO:function(a,b){return this.ad(new D.b3())},
eQ:function(a,b){return this.ad(new D.b4())},
gdK:function(){var s=this,r=s.dx
if(r==null){r=new D.cD(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cD(r.geL(),r.gfm(),r.gfq())
r.gt().l(0,s.gcZ())
r.gdJ().l(0,s.gcW())
s.dx=r}return r},
gda:function(){var s=this.r
return s==null?this.r=O.en(this,"ambient"):s},
gdj:function(){var s=this.x
return s==null?this.x=O.en(this,"diffuse"):s},
gbA:function(){var s=this.z
return s==null?this.z=new O.ia(new V.W(0,0,0),this,"specular",new A.ay(!1,!1,!1)):s},
cP:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.V(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.r)(a2),++r){q=a2[r]
p=q.gar()
o=a1.h(0,q.gar())
a1.k(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.w(0,new O.ib(b,n))
C.b.b1(n,new O.ic())
m=new H.V(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.r)(a2),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],t.fD)
m.w(0,new O.id(b,l))
C.b.b1(l,new O.ie())
k=new H.V(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.r)(a2),++r){q=a2[r]
p=q.gar()
o=k.h(0,q.gar())
k.k(0,p,o==null?1:o)}j=H.b([],t.eg)
k.w(0,new O.ig(b,j))
C.b.b1(j,new O.ih())
i=new H.V(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.r)(a0),++r){q=a0[r]
s=q.gar()
p=i.h(0,q.gar())
i.k(0,s,p==null?1:p)}h=H.b([],t.c3)
i.w(0,new O.ii(b,h))
C.b.b1(h,new O.ij())
a0=C.c.Z(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.i8(new V.bm(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.en(b,"emission"):a2).c
s=b.gda().c
p=b.gdj().c
o=b.y
o=(o==null?b.y=O.en(b,"invDiffuse"):o).c
g=b.gbA().c
f=b.Q
f=(f==null?b.Q=new O.i6(b,"bump",new A.ay(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.en(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.i9(new V.W(0,0,0),b,"refract",new A.ay(!1,!1,!1)):d).c
c=b.db
return A.no(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.i5(b,"alpha",new A.ay(!1,!1,!1)):c).c,n,l,j,h)},
en:function(a,b){},
at:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aD(m==null?H.b([],t.e):m)
s=H.U(m).c
for(;m.q();){r=s.a(m.d)
q=$.jd
if(q==null)q=$.jd=new V.B(0,0,1)
r.c=q
p=$.jc
r.d=p==null?$.jc=new V.B(0,1,0):p
p=$.jb
r.e=p==null?$.jb=new V.B(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.by(q).F()
r.d=n.by(r.d).F()
r.e=n.by(r.e).F()}}},
hM:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.cP()
r=s.bq
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.el(s,H.b([],t.p),P.T(o,n),P.T(o,t.O),P.T(o,n),P.T(o,t.Q),P.T(o,n),P.T(o,t.b),P.T(o,n),P.T(o,t.m),p,r)
b0.eb(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.c5(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.k(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dm
s=b2.e
if(!(s instanceof Z.cm))s=b2.e=null
if(s==null||!s.d.m(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.a8()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gN().c3()
q.gW().c3()
q=q.e
if(q!=null)q.a9(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gW().h3()
p=p.e
if(p!=null)p.a9(0)}}p=b2.d
k=p==null?a9:p.h2(new Z.jl(b1.a),l)
if(k==null)return
p=k.aT($.aY())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.aT($.aC())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.aT($.aX())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aT($.bi())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.aT($.bj())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aT($.aW())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gaq(b0).hf()
if(m.fr){r=b1.dx
r=r.ga0(r)
q=b0.db
if(q!=null)q.ak(r.aa(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.ga0(r).H(0,q.ga0(q))
r=q}q=b0.dx
if(q!=null)q.ak(r.aa(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.ghJ().H(0,r.ga0(r))}q=b0.fr
if(q!=null)q.ak(r.aa(0,!0))
if(m.go){r=b1.db
r=r.ga0(r)
q=b0.dy
if(q!=null)q.ak(r.aa(0,!0))}if(m.x1){r=$.lw
if(r==null){r=new V.cM(1,0,0,0,1,0,0,0,1)
$.lw=r}q=b0.go
if(q!=null)q.ak(r.aa(0,!0))}if(m.x2){r=V.aA()
q=b0.id
if(q!=null)q.ak(r.aa(0,!0))}if(m.y1){r=V.aA()
q=b0.k1
if(q!=null)q.ak(r.aa(0,!0))}if(m.aS>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.ce(q.aa(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=a8.f
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=a8.r
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=a8.x
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=a8.y
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.aS
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=a8.z
q=q==null?a9:q.ch
if(q==null)q=100
p=b0.dq
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.z
r=r==null?a9:r.f
if(r==null)r=new V.W(1,1,1)
q=b0.dn
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.Y
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
c=d.gar()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
n=b0.ca.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gi0()
a0=$.aN
n=n.bi(a0==null?$.aN=new V.R(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gi5()
a0=$.aN
n=n.bi(a0==null?$.aN=new V.R(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaR(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdl()){n=d.gdc()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdd()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gde()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.c9.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.ga0(q)
a2=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
b=a2.h(0,0)
if(b==null)b=0
a2.k(0,0,b+1)
n=b0.cc.h(0,0)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.by(d.c).F()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.cb.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.ga0(q)
a3=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.C
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
c=d.gar()
b=a3.h(0,c)
if(b==null)b=0
a3.k(0,c,b+1)
n=b0.ce.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a4=a1.H(0,d.ga0(d))
n=d.ga0(d)
a0=$.aN
n=n.bi(a0==null?$.aN=new V.R(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.aN
n=a4.bi(n==null?$.aN=new V.R(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaR(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaE()
n=a4.dG(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.ce(new V.cM(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).aa(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaE()
n=d.gaE()
if(!C.b.M(j,n)){n.su(0,j.length)
j.push(n)}n=d.gaE()
a0=n.gaD(n)
if(a0){a0=a.f
if(a0!=null){a5=n.gaD(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gu(n))}}d.gb0()
n=d.ge4()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb0()
if(!C.b.M(j,n)){n.su(0,j.length)
j.push(n)}n=d.gb0()
a0=n.gaD(n)
if(a0){a0=a.r
if(a0!=null){a5=n.gaD(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gu(n))}}if(d.gdl()){n=d.gdc()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdd()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gde()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.cd.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.ga0(q)
a7=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
c=d.gar()
b=a7.h(0,c)
if(b==null)b=0
a7.k(0,c,b+1)
n=b0.cg.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.ghI(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gi3(d).F()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bi(d.ghI(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaR(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaE()
n=d.gcA()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcv(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gil()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gim()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaE()
n=d.gaE()
if(!C.b.M(j,n)){n.su(0,j.length)
j.push(n)}n=d.gaE()
a0=n.gaD(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.gaD(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gu(n))}}d.gb0()
n=d.ge4()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb0()
if(!C.b.M(j,n)){n.su(0,j.length)
j.push(n)}n=d.gb0()
a0=n.gaD(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.gaD(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gu(n))}}if(d.gi4()){n=d.gi2()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gi1()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdl()){n=d.gdc()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdd()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gde()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cf.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga0(r).dG(0)}q=b0.fy
if(q!=null)q.ak(r.aa(0,!0))}if(m.db){a8.en(j,a9)
b0.fI(b0.dr,a9)
if(m.r.a){r=a8.cx
r=r==null?a9:r.f
if(r==null)r=new V.W(1,1,1)
q=b0.ds
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=a8.cy
q=q==null?a9:q.ch
if(q==null)q=0
p=b0.dt
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.cy
r=r==null?a9:r.f
if(r==null)r=new V.W(1,1,1)
q=b0.du
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=a8.db
r=r==null?a9:r.f
if(r==null)r=1
p=b0.dv
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bp(b1)
r=t.ed.a(b2.e)
r.bp(b1)
r.aW(b1)
r.e0(b1)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h)j[h].e0(b1)
s.useProgram(a9)
b0.gaq(b0).hd()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cP().bq}}
O.ib.prototype={
$2:function(a,b){return this.b.push(new A.b_(a,C.c.Z(b+3,4)*4))},
$S:10}
O.ic.prototype={
$2:function(a,b){return C.c.ae(a.a,b.a)},
$S:46}
O.id.prototype={
$2:function(a,b){return this.b.push(new A.b2(a,C.c.Z(b+3,4)*4))},
$S:10}
O.ie.prototype={
$2:function(a,b){return C.c.ae(a.a,b.a)},
$S:47}
O.ig.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.Z(b+3,4)*4))},
$S:10}
O.ih.prototype={
$2:function(a,b){return C.c.ae(a.a,b.a)},
$S:48}
O.ii.prototype={
$2:function(a,b){return this.b.push(new A.b9(a,C.c.Z(b+3,4)*4))},
$S:10}
O.ij.prototype={
$2:function(a,b){return C.c.ae(a.a,b.a)},
$S:49}
O.i5.prototype={
ax:function(){var s,r=this
r.cG()
s=r.f
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.ad(new D.E(r.b,s,1))}}}
O.em.prototype={
ax:function(){},
d2:function(a){var s,r,q=this
if(!q.c.m(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ax()
s=q.a
s.a=null
s.ad(null)}}}
O.i6.prototype={}
O.cL.prototype={
d1:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.ad(new D.E(r.b+".color",s,a))}},
ax:function(){this.cG()
this.d1(new V.W(1,1,1))},
saR:function(a,b){this.d2(new A.ay(!0,!1,!1))
this.d1(b)}}
O.i8.prototype={}
O.i9.prototype={
ax:function(){var s,r=this
r.cH()
s=r.ch
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.ad(new D.E(r.b+".refraction",s,1))}}}
O.ia.prototype={
d3:function(a){var s=this,r=s.ch
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.ad(new D.E(s.b+".shininess",r,a))}},
ax:function(){this.cH()
this.d3(100)}}
O.d0.prototype={}
T.c0.prototype={}
T.eW.prototype={}
T.eX.prototype={}
T.iM.prototype={
hs:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.lr(a)
r=new T.eX(o)
W.a3(s,"load",new T.iN(this,r,s,!1,o,!1,!1),!1)
return r},
fH:function(a,b,c){var s,r,q,p,o,n
b=V.lb(b)
s=a.width
r=V.lb(s==null?512:s)
s=a.height
q=V.lb(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.ky()
p.width=r
p.height=q
o=t.ar.a(C.i.e3(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.pr(o.getImageData(0,0,s,n==null?512:n))}}}
T.iN.prototype={
$1:function(a){var s,r,q,p,o=this,n=o.c
n.width
n.height
s=o.a
r=s.fH(n,s.b,o.d)
q=o.b
p=n.width
q.r=p==null?512:p
n=n.height
q.x=n==null?512:n
n=s.a
n.bindTexture(3553,o.e)
n.pixelStorei(37440,0)
C.W.hS(n,3553,0,6408,6408,5121,r)
n.bindTexture(3553,null)
if(!q.d){q.d=!0
n=q.y
if(n!=null)n.he()}++s.e},
$S:3}
T.iO.prototype={
eC:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.c,r=C.c.Z(s,2),q=this.b,p=this.a,o=p.length,n=q*4,--s;r>=0;--r){m=n*r
l=n*(s-r)
for(k=0;k<q;++k){j=4*k
i=m+j
h=l+j
for(g=0;g<4;++g){f=i+g
e=h+g
if(f<0||f>=o)return H.d(p,f)
d=p[f]
if(e<0||e>=o)return H.d(p,e)
p[f]=p[e]
p[e]=d}}}}}
X.hU.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.L():s}}
X.eA.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.L():s},
aL:function(a){var s=this.f
return s==null?null:s.E(a)},
ej:function(){return this.aL(null)},
sbc:function(a){var s,r,q=this
if(!J.J(q.b,a)){s=q.b
if(s!=null)s.gt().J(0,q.gcL())
r=q.b
q.b=a
if(a!=null)a.gt().l(0,q.gcL())
q.aL(new D.E("mover",r,q.b))}}}
X.iH.prototype={}
V.kr.prototype={
$1:function(a){var s=C.d.cz(this.a.ghn(),2)
if(s!=="0.00")P.lc(s+" fps")},
$S:50}
V.is.prototype={
c0:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.j1().gbg().h(0,k)
if(j==null)if(d){c.$0()
l.b7(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aT(p)
o.gaz(p).l(0,q)
n=W.ne("radio")
n.checked=s
n.name=k
W.a3(n,"change",new V.it(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gaz(p)
r=r.createElement("br")
r.toString
p.l(0,r)},
a_:function(a,b,c){return this.c0(a,b,c,!1)},
b7:function(a){var s,r,q=P.j1(),p=t.N,o=P.lu(q.gbg(),p,p)
o.k(0,this.a,a)
s=q.cu(0,o)
p=window.history
p.toString
r=s.gbm()
p.replaceState(new P.h_([],[]).bj(""),"",r)}}
V.it.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.b7(s.d)}},
$S:3}
V.iA.prototype={
d9:function(a){var s,r,q,p,o,n,m=this.fL(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.S(C.b.hq(a)),s=new P.cc(m.e_(new H.bQ(s,s.gj(s))).a());s.q();){r=s.gD(s)
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
if(H.mz(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.l_(C.Q,r,C.e,!1)
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
fX:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
for(p=0;p<3;++p){o=l.createElement("div")
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
fL:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
s=t.N
f=new L.iS(P.T(s,t.dl),P.T(s,t.f7),P.lv(s))
f.d=f.K(0,o)
s=f.K(0,o).n(0,n)
r=t.t
q=new K.Z(H.b([],r))
q.X(new H.S("*"))
s.a.push(q)
s.c=!0
s=f.K(0,n).n(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.aL(p))
s=new K.Z(H.b([],r))
s.X(new H.S("*"))
p.push(s)
s=f.K(0,n).n(0,"BoldEnd")
p=new K.Z(H.b([],r))
p.X(new H.S("*"))
s.a.push(p)
s.c=!0
s=f.K(0,o).n(0,m)
p=new K.Z(H.b([],r))
p.X(new H.S("_"))
s.a.push(p)
s.c=!0
s=f.K(0,m).n(0,m)
p=H.b([],q)
s.a.push(new K.aL(p))
s=new K.Z(H.b([],r))
s.X(new H.S("_"))
p.push(s)
s=f.K(0,m).n(0,l)
p=new K.Z(H.b([],r))
p.X(new H.S("_"))
s.a.push(p)
s.c=!0
s=f.K(0,o).n(0,k)
p=new K.Z(H.b([],r))
p.X(new H.S("`"))
s.a.push(p)
s.c=!0
s=f.K(0,k).n(0,k)
p=H.b([],q)
s.a.push(new K.aL(p))
s=new K.Z(H.b([],r))
s.X(new H.S("`"))
p.push(s)
s=f.K(0,k).n(0,"CodeEnd")
p=new K.Z(H.b([],r))
p.X(new H.S("`"))
s.a.push(p)
s.c=!0
s=f.K(0,o).n(0,j)
p=new K.Z(H.b([],r))
p.X(new H.S("["))
s.a.push(p)
s.c=!0
s=f.K(0,j).n(0,i)
p=new K.Z(H.b([],r))
p.X(new H.S("|"))
s.a.push(p)
p=f.K(0,j).n(0,h)
s=new K.Z(H.b([],r))
s.X(new H.S("]"))
p.a.push(s)
p.c=!0
p=f.K(0,j).n(0,j)
s=H.b([],q)
p.a.push(new K.aL(s))
p=new K.Z(H.b([],r))
p.X(new H.S("|]"))
s.push(p)
p=f.K(0,i).n(0,h)
s=new K.Z(H.b([],r))
s.X(new H.S("]"))
p.a.push(s)
p.c=!0
p=f.K(0,i).n(0,i)
s=H.b([],q)
p.a.push(new K.aL(s))
p=new K.Z(H.b([],r))
p.X(new H.S("|]"))
s.push(p)
f.K(0,o).n(0,g).a.push(new K.dU())
p=f.K(0,g).n(0,g)
q=H.b([],q)
p.a.push(new K.aL(q))
r=new K.Z(H.b([],r))
r.X(new H.S("*_`["))
q.push(r)
r=f.K(0,"BoldEnd")
r.d=r.a.bh(n)
r=f.K(0,l)
r.d=r.a.bh(m)
r=f.K(0,"CodeEnd")
r.d=r.a.bh(k)
r=f.K(0,h)
r.d=r.a.bh("Link")
r=f.K(0,g)
r.d=r.a.bh(g)
return this.b=f}}
V.iC.prototype={
$1:function(a){P.lN(C.m,new V.iB(this.a))},
$S:3}
V.iB.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.an(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.w(-0.01*s)+"px"
q.top=r},
$S:0}
V.iJ.prototype={
a_:function(a,b,c){var s,r,q,p,o,n,m=this,l=W.lr(null)
l.src=b
l.width=64
l.height=64
s=l.style
s.border="solid 2px white"
s=m.c
r=J.aT(s)
q=r.gaz(s)
p=q.gj(q)
W.a3(l,"click",new V.iL(m,l,b,p),!1)
r.gaz(s).l(0,l)
s=r.gaz(s)
r=document.createElement("br")
r.toString
s.l(0,r)
o=P.j1().gbg().h(0,m.a)
if(o==null){m.b7(p)
n=c}else n=P.hk(o,null)===p
if(n)l.click()},
l:function(a,b){return this.a_(a,b,!1)},
b7:function(a){var s,r,q=P.j1(),p=t.N,o=P.lu(q.gbg(),p,p)
o.k(0,this.a,""+a)
s=q.cu(0,o)
p=window.history
p.toString
r=s.gbm()
p.replaceState(new P.h_([],[]).bj(""),"",r)}}
V.iL.prototype={
$1:function(a){var s=this,r=s.a,q=J.li(r.c)
q.w(q,new V.iK())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.b7(s.d)},
$S:4}
V.iK.prototype={
$1:function(a){var s
if(t.R.b(a)){s=a.style
s.border="solid 2px white"}},
$S:51}
K.k8.prototype={
$0:function(){var s,r,q,p=this.a,o=p.a
if(o!=null&&p.b.length!==0){s=this.b
r=s.f.hs(p.b)
q=r.y
if(q==null)q=r.y=D.L()
q.l(0,new K.k7(p,s,r,o,this.c))}},
$S:7}
K.k7.prototype={
$1:function(a){var s,r,q,p=this,o=p.c,n=p.b.f.a,m=o.r,l=o.x,k=n.createFramebuffer()
k.toString
n.bindFramebuffer(36160,k)
n.readBuffer(36064)
n.framebufferTexture2D(36160,36064,3553,o.b,0)
s=new Uint8Array(m*l*4)
n.readPixels(0,l-l-0,m,l,6408,5121,s)
n.bindFramebuffer(36160,null)
r=new T.iO(s,m,l)
r.eC()
q=F.kI()
q.bu(p.d)
q.a8()
q.h_(r,p.a.c)
o=$.aC()
q.hY(new Z.bb($.ld().a&~o.a))
q.hX(!1)
q.a8()
p.e.scE(0,q)},
$S:2}
K.k9.prototype={
$1:function(a){this.a.b=a
this.b.$0()},
$S:52}
K.ka.prototype={
$1:function(a){this.a.a=a
this.b.$0()},
$S:53}
K.ki.prototype={
$0:function(){this.a.$1(F.mp(50,null,50))},
$S:0}
K.kj.prototype={
$0:function(){this.a.$1(F.ps(!1,!1,80,80))},
$S:0}
K.kk.prototype={
$0:function(){this.a.$1(F.pE(80,80))},
$S:0}
K.kl.prototype={
$0:function(){this.a.$1(F.pK(50,50))},
$S:0}
K.km.prototype={
$0:function(){this.a.$1(F.pP(50,50))},
$S:0}
K.kn.prototype={
$0:function(){this.a.$1(F.l8(50,50))},
$S:0}
K.ko.prototype={
$0:function(){this.a.$1(F.l8(100,100))},
$S:0}
K.kp.prototype={
$0:function(){this.a.$1(F.l8(150,150))},
$S:0}
K.kb.prototype={
$1:function(a){this.a.c=a
this.b.$0()},
$S:54}
K.kc.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
K.kd.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
K.ke.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
K.kf.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
K.kg.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
K.kh.prototype={
$0:function(){this.a.$1(1)},
$S:0};(function aliases(){var s=J.a.prototype
s.e7=s.i
s=J.b5.prototype
s.e8=s.i
s=K.cy.prototype
s.e6=s.aV
s.bB=s.i
s=O.em.prototype
s.cG=s.ax
s=O.cL.prototype
s.cH=s.ax})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"oH","ni",55)
r(P,"pl","nU",11)
r(P,"pm","nV",11)
r(P,"pn","nW",11)
q(P,"mn","pg",0)
r(W,"qX","hJ",37)
var k
p(k=E.bo.prototype,"gdQ",0,0,null,["$1","$0"],["dR","hB"],1,0)
p(k,"gdS",0,0,null,["$1","$0"],["dT","hC"],1,0)
p(k,"gdO",0,0,null,["$1","$0"],["dP","hA"],1,0)
p(k,"gdM",0,0,null,["$1","$0"],["dN","hx"],1,0)
o(k,"ghv","hw",8)
o(k,"ghy","hz",8)
p(k=E.eY.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],1,0)
n(k,"ghO","dY",0)
m(k=X.fe.prototype,"gf3","f4",3)
m(k,"geR","eS",3)
m(k,"geY","eZ",4)
m(k,"gf7","f8",22)
m(k,"gf5","f6",22)
m(k,"gfb","fc",4)
m(k,"gff","fg",4)
m(k,"gf1","f2",4)
m(k,"gfd","fe",4)
m(k,"gf_","f0",4)
m(k,"gfh","fi",32)
m(k,"gfj","fk",3)
m(k,"gfz","fA",13)
m(k,"gft","fu",13)
m(k,"gfv","fw",13)
p(D.bI.prototype,"gee",0,0,null,["$1","$0"],["au","ef"],1,0)
p(k=D.cD.prototype,"gcX",0,0,null,["$1","$0"],["cY","f9"],1,0)
m(k,"gfm","fn",34)
o(k,"geL","eM",20)
o(k,"gfq","fs",20)
l(V.a6.prototype,"gj","ck",17)
l(V.B.prototype,"gj","ck",17)
p(k=U.bL.prototype,"gaI",0,0,null,["$1","$0"],["L","a7"],1,0)
o(k,"geJ","eK",16)
o(k,"gfo","fp",16)
p(k=U.dd.prototype,"gaI",0,0,null,["$1","$0"],["L","a7"],1,0)
m(k,"gbL","bM",14)
m(k,"gbN","bO",14)
m(k,"gbP","bQ",14)
p(k=U.de.prototype,"gaI",0,0,null,["$1","$0"],["L","a7"],1,0)
m(k,"gbL","bM",2)
m(k,"gbN","bO",2)
m(k,"gbP","bQ",2)
m(k,"geD","eE",2)
m(k,"geF","eG",2)
m(k,"gfS","fT",2)
m(k,"gfQ","fR",2)
m(k,"gfO","fP",2)
m(U.df.prototype,"geH","eI",2)
p(k=M.e6.prototype,"gaJ",0,0,null,["$1","$0"],["aK","eg"],1,0)
o(k,"geU","eV",8)
o(k,"geW","eX",8)
p(k=O.cK.prototype,"gcW",0,0,null,["$1","$0"],["ad","eT"],1,0)
p(k,"gcZ",0,0,null,["$1","$0"],["d_","fG"],1,0)
o(k,"geN","eO",23)
o(k,"geP","eQ",23)
p(X.eA.prototype,"gcL",0,0,null,["$1","$0"],["aL","ej"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.O,null)
q(P.O,[H.kE,J.a,J.ad,P.I,P.dn,P.k,H.bQ,P.eb,H.cw,H.fb,H.cq,H.iV,H.iq,H.fW,H.bH,P.N,H.i_,H.ej,H.ee,H.at,H.fy,P.dA,P.cb,P.cc,P.fi,P.c_,P.eR,P.jG,P.dH,P.jt,P.dm,P.j,P.h9,P.cJ,P.cW,P.e0,P.jF,P.jE,P.X,P.bn,P.ez,P.d_,P.fv,P.hT,P.Y,P.a1,P.bz,P.j_,P.fQ,W.hB,W.kA,W.kP,W.K,W.cx,P.jx,P.dC,P.fO,K.dU,K.cy,K.Z,L.eO,L.eZ,L.f_,L.iS,O.ai,O.cN,E.hv,E.bo,E.bF,E.bV,E.ft,E.iu,E.eY,Z.fg,Z.jl,Z.cm,Z.bN,Z.bb,D.hx,D.bJ,D.Q,X.cn,X.eg,X.hY,X.i3,X.a8,X.io,X.iT,X.fe,D.bI,V.W,V.bm,V.hM,V.cM,V.b6,V.a5,V.R,V.bW,V.eG,V.a6,V.B,U.dd,U.de,U.df,M.e6,A.dY,A.hq,A.ay,A.b_,A.b2,A.b7,A.b9,A.i7,A.d6,A.d7,A.d9,A.dc,A.a2,A.iY,F.az,F.hQ,F.ei,F.hZ,F.eD,F.cY,F.bZ,F.cZ,F.bw,F.c7,F.x,F.c8,F.c9,F.jh,F.ji,F.dh,O.d0,O.em,O.i8,T.iM,T.iO,X.iH,X.eA,V.is,V.iA,V.iJ])
q(J.a,[J.ec,J.cB,J.b5,J.u,J.bP,J.br,H.cO,H.a0,W.e,W.ho,W.bk,W.co,W.aG,W.F,W.fn,W.ao,W.hE,W.hF,W.fp,W.cu,W.fr,W.hG,W.l,W.fw,W.ap,W.hV,W.fA,W.bq,W.i2,W.ik,W.fE,W.fF,W.ar,W.fG,W.fI,W.as,W.fM,W.fP,W.au,W.fR,W.av,W.fX,W.ag,W.h1,W.iQ,W.am,W.h3,W.iU,W.j5,W.ha,W.hc,W.he,W.hg,W.hi,P.aI,P.fC,P.aM,P.fK,P.ir,P.fY,P.aP,P.h5,P.hr,P.fj,P.bY,P.fU])
q(J.b5,[J.eB,J.c4,J.aH])
r(J.hW,J.u)
q(J.bP,[J.cA,J.ed])
q(P.I,[H.cC,P.f2,H.ef,H.fa,H.eI,H.fu,P.dX,P.ew,P.aE,P.fc,P.f9,P.eP,P.e1,P.e3])
r(P.cF,P.dn)
q(P.cF,[H.c5,W.fl,W.fk,P.e8])
r(H.S,H.c5)
q(P.k,[H.m,H.aJ,H.di,P.cz])
r(H.cv,H.aJ)
q(P.eb,[H.ek,H.fh])
r(H.cr,H.cq)
r(H.cS,P.f2)
q(H.bH,[H.iI,H.hX,H.k2,H.k3,H.k4,P.jn,P.jm,P.jo,P.jp,P.jB,P.jA,P.jS,P.jv,P.jw,P.i0,P.i4,P.j9,P.j8,P.hH,P.hI,P.j4,P.j0,P.j2,P.j3,P.jD,P.jC,P.jL,P.jM,P.jN,W.il,W.im,W.iy,W.iF,W.jq,P.jy,P.jz,P.jJ,P.jT,P.hR,P.hS,P.hs,E.iv,E.iw,E.ix,E.iP,D.hO,D.hP,F.jH,F.jU,F.jW,F.k6,F.kt,F.ks,F.ku,F.jV,F.k0,F.k_,F.iz,F.jk,F.jj,F.je,F.jf,O.ib,O.ic,O.id,O.ie,O.ig,O.ih,O.ii,O.ij,T.iN,V.kr,V.it,V.iC,V.iB,V.iL,V.iK,K.k8,K.k7,K.k9,K.ka,K.ki,K.kj,K.kk,K.kl,K.km,K.kn,K.ko,K.kp,K.kb,K.kc,K.kd,K.ke,K.kf,K.kg,K.kh])
q(H.iI,[H.iE,H.ck])
r(P.cI,P.N)
r(H.V,P.cI)
r(H.cE,H.m)
r(H.bU,H.a0)
q(H.bU,[H.dq,H.ds])
r(H.dr,H.dq)
r(H.bu,H.dr)
r(H.dt,H.ds)
r(H.cP,H.dt)
q(H.cP,[H.er,H.es,H.et,H.eu,H.ev,H.cQ,H.bv])
r(H.dB,H.fu)
r(P.dx,P.cz)
r(P.ju,P.jG)
r(P.du,P.dH)
r(P.dl,P.du)
r(P.dF,P.cJ)
r(P.c6,P.dF)
q(P.e0,[P.ht,P.hK])
r(P.e2,P.eR)
q(P.e2,[P.hu,P.ja,P.j7])
r(P.j6,P.hK)
q(P.aE,[P.cV,P.ea])
r(P.fo,P.bz)
q(W.e,[W.t,W.e7,W.bR,W.ak,W.dv,W.al,W.ac,W.dy,W.ff,W.ca,P.e_,P.b0])
q(W.t,[W.C,W.ax])
q(W.C,[W.o,P.n])
q(W.o,[W.dV,W.dW,W.bl,W.e9,W.bM,W.bO,W.eJ,W.ba])
r(W.hA,W.aG)
r(W.cs,W.fn)
q(W.ao,[W.hC,W.hD])
r(W.fq,W.fp)
r(W.ct,W.fq)
r(W.fs,W.fr)
r(W.e5,W.fs)
r(W.ae,W.bk)
r(W.fx,W.fw)
r(W.bK,W.fx)
r(W.fB,W.fA)
r(W.bp,W.fB)
r(W.aR,W.l)
q(W.aR,[W.bs,W.aj,W.bx])
r(W.eo,W.fE)
r(W.ep,W.fF)
r(W.fH,W.fG)
r(W.eq,W.fH)
r(W.fJ,W.fI)
r(W.cR,W.fJ)
r(W.fN,W.fM)
r(W.eC,W.fN)
r(W.eH,W.fP)
r(W.dw,W.dv)
r(W.eL,W.dw)
r(W.fS,W.fR)
r(W.eM,W.fS)
r(W.eQ,W.fX)
r(W.h2,W.h1)
r(W.eU,W.h2)
r(W.dz,W.dy)
r(W.eV,W.dz)
r(W.h4,W.h3)
r(W.f0,W.h4)
r(W.bc,W.aj)
r(W.hb,W.ha)
r(W.fm,W.hb)
r(W.dj,W.cu)
r(W.hd,W.hc)
r(W.fz,W.hd)
r(W.hf,W.he)
r(W.dp,W.hf)
r(W.hh,W.hg)
r(W.fT,W.hh)
r(W.hj,W.hi)
r(W.h0,W.hj)
r(W.dk,P.c_)
r(P.h_,P.jx)
r(P.aa,P.fO)
r(P.fD,P.fC)
r(P.eh,P.fD)
r(P.fL,P.fK)
r(P.ex,P.fL)
r(P.fZ,P.fY)
r(P.eS,P.fZ)
r(P.h6,P.h5)
r(P.f1,P.h6)
r(P.dZ,P.fj)
r(P.ey,P.b0)
r(P.fV,P.fU)
r(P.eN,P.fV)
q(K.cy,[K.aL,L.d2])
q(E.hv,[Z.bG,A.cX,T.c0])
q(D.Q,[D.b3,D.b4,D.E,X.eE])
q(X.eE,[X.cH,X.bS,X.bT,X.d1])
q(O.ai,[D.cD,U.bL])
q(D.hx,[U.hy,U.a_])
r(U.cp,U.a_)
r(A.el,A.cX)
q(A.a2,[A.c2,A.f5,A.f6,A.f7,A.f3,A.d3,A.f4,A.d4,A.d5,A.f8,A.d8,A.c3,A.da,A.db])
r(F.iD,F.hQ)
r(F.iX,F.hZ)
r(F.jg,F.jh)
r(F.ip,F.ji)
r(O.cK,O.d0)
q(O.em,[O.i5,O.i6,O.cL])
q(O.cL,[O.i9,O.ia])
r(T.eW,T.c0)
r(T.eX,T.eW)
r(X.hU,X.iH)
s(H.c5,H.fb)
s(H.dq,P.j)
s(H.dr,H.cw)
s(H.ds,P.j)
s(H.dt,H.cw)
s(P.dn,P.j)
s(P.dF,P.h9)
s(P.dH,P.cW)
s(W.fn,W.hB)
s(W.fp,P.j)
s(W.fq,W.K)
s(W.fr,P.j)
s(W.fs,W.K)
s(W.fw,P.j)
s(W.fx,W.K)
s(W.fA,P.j)
s(W.fB,W.K)
s(W.fE,P.N)
s(W.fF,P.N)
s(W.fG,P.j)
s(W.fH,W.K)
s(W.fI,P.j)
s(W.fJ,W.K)
s(W.fM,P.j)
s(W.fN,W.K)
s(W.fP,P.N)
s(W.dv,P.j)
s(W.dw,W.K)
s(W.fR,P.j)
s(W.fS,W.K)
s(W.fX,P.N)
s(W.h1,P.j)
s(W.h2,W.K)
s(W.dy,P.j)
s(W.dz,W.K)
s(W.h3,P.j)
s(W.h4,W.K)
s(W.ha,P.j)
s(W.hb,W.K)
s(W.hc,P.j)
s(W.hd,W.K)
s(W.he,P.j)
s(W.hf,W.K)
s(W.hg,P.j)
s(W.hh,W.K)
s(W.hi,P.j)
s(W.hj,W.K)
s(P.fC,P.j)
s(P.fD,W.K)
s(P.fK,P.j)
s(P.fL,W.K)
s(P.fY,P.j)
s(P.fZ,W.K)
s(P.h5,P.j)
s(P.h6,W.K)
s(P.fj,P.N)
s(P.fU,P.j)
s(P.fV,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",G:"double",a4:"num",q:"String",bA:"bool",Y:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~([Q?])","~(Q)","~(l)","~(aj)","~(c7,G,G)","~(q,@)","Y()","~(i,k<bo>)","~(az)","~(i,i)","~(~())","~(@,@)","~(bx)","~(Q?)","G(G,G)","~(i,k<a_?>)","G()","~(c1,q,i)","@()","~(i,k<aq>)","q(i)","~(bs)","~(i,k<b6>)","~(~(Q))","@(q)","Y(@)","~(O?,O?)","~(q,q)","C(t)","c1(@,@)","~(@)","~(bc)","Y(@,@)","bA(k<aq>)","@(@,q)","bA(t)","q(e)","H<q,q>(H<q,q>,q)","~(q,i)","~(q[@])","R(G)","Y(~())","i(i,i)","@(@)","~(q,q?)","i(b_,b_)","i(b2,b2)","i(b7,b7)","i(b9,b9)","~(iR)","~(C)","Y(q)","Y(cY)","Y(G)","i(@,@)","bG(i)","~(a4)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.od(v.typeUniverse,JSON.parse('{"eB":"b5","c4":"b5","aH":"b5","pS":"l","q3":"l","pU":"b0","pT":"e","qb":"e","qe":"e","pR":"n","q5":"n","pV":"o","q8":"o","q6":"t","q2":"t","qE":"ac","pZ":"aR","pW":"ax","qf":"ax","qd":"aj","q7":"bp","q_":"F","q0":"ag","qa":"bu","q9":"a0","ec":{"bA":[]},"b5":{"lt":[]},"u":{"p":["1"],"m":["1"],"k":["1"],"v":["1"]},"hW":{"u":["1"],"p":["1"],"m":["1"],"k":["1"],"v":["1"]},"bP":{"G":[],"a4":[]},"cA":{"G":[],"i":[],"a4":[]},"ed":{"G":[],"a4":[]},"br":{"q":[],"v":["@"]},"cC":{"I":[]},"S":{"j":["i"],"p":["i"],"m":["i"],"k":["i"],"j.E":"i"},"m":{"k":["1"]},"aJ":{"k":["2"]},"cv":{"aJ":["1","2"],"m":["2"],"k":["2"]},"di":{"k":["1"]},"c5":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"cq":{"H":["1","2"]},"cr":{"H":["1","2"]},"cS":{"I":[]},"ef":{"I":[]},"fa":{"I":[]},"eI":{"I":[]},"V":{"N":["1","2"],"H":["1","2"],"N.V":"2"},"cE":{"m":["1"],"k":["1"]},"ee":{"lF":[]},"bU":{"y":["1"],"a0":[],"v":["1"]},"bu":{"j":["G"],"y":["G"],"p":["G"],"a0":[],"m":["G"],"v":["G"],"k":["G"],"j.E":"G"},"cP":{"j":["i"],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"]},"er":{"j":["i"],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"es":{"j":["i"],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"et":{"j":["i"],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"eu":{"j":["i"],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"ev":{"j":["i"],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"cQ":{"j":["i"],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"bv":{"j":["i"],"c1":[],"y":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"fu":{"I":[]},"dB":{"I":[]},"dA":{"iR":[]},"dx":{"k":["1"]},"dl":{"cW":["1"],"m":["1"],"k":["1"]},"cz":{"k":["1"]},"cF":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"cI":{"N":["1","2"],"H":["1","2"]},"N":{"H":["1","2"]},"cJ":{"H":["1","2"]},"c6":{"H":["1","2"]},"du":{"cW":["1"],"m":["1"],"k":["1"]},"G":{"a4":[]},"i":{"a4":[]},"p":{"m":["1"],"k":["1"]},"dX":{"I":[]},"f2":{"I":[]},"ew":{"I":[]},"aE":{"I":[]},"cV":{"I":[]},"ea":{"I":[]},"fc":{"I":[]},"f9":{"I":[]},"eP":{"I":[]},"e1":{"I":[]},"ez":{"I":[]},"d_":{"I":[]},"e3":{"I":[]},"bz":{"fd":[]},"fQ":{"fd":[]},"fo":{"fd":[]},"C":{"t":[],"e":[]},"ae":{"bk":[]},"bs":{"l":[]},"aj":{"l":[]},"t":{"e":[]},"ak":{"e":[]},"al":{"e":[]},"ac":{"e":[]},"bx":{"l":[]},"aR":{"l":[]},"bc":{"aj":[],"l":[]},"o":{"C":[],"t":[],"e":[]},"dV":{"C":[],"t":[],"e":[]},"dW":{"C":[],"t":[],"e":[]},"bl":{"C":[],"t":[],"e":[]},"ax":{"t":[],"e":[]},"ct":{"j":["aa<a4>"],"p":["aa<a4>"],"y":["aa<a4>"],"m":["aa<a4>"],"k":["aa<a4>"],"v":["aa<a4>"],"j.E":"aa<a4>"},"cu":{"aa":["a4"]},"e5":{"j":["q"],"p":["q"],"y":["q"],"m":["q"],"k":["q"],"v":["q"],"j.E":"q"},"fl":{"j":["C"],"p":["C"],"m":["C"],"k":["C"],"j.E":"C"},"bK":{"j":["ae"],"p":["ae"],"y":["ae"],"m":["ae"],"k":["ae"],"v":["ae"],"j.E":"ae"},"e7":{"e":[]},"e9":{"C":[],"t":[],"e":[]},"bp":{"j":["t"],"p":["t"],"y":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"bM":{"C":[],"t":[],"e":[]},"bO":{"C":[],"t":[],"e":[]},"bR":{"e":[]},"eo":{"N":["q","@"],"H":["q","@"],"N.V":"@"},"ep":{"N":["q","@"],"H":["q","@"],"N.V":"@"},"eq":{"j":["ar"],"p":["ar"],"y":["ar"],"m":["ar"],"k":["ar"],"v":["ar"],"j.E":"ar"},"fk":{"j":["t"],"p":["t"],"m":["t"],"k":["t"],"j.E":"t"},"cR":{"j":["t"],"p":["t"],"y":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"eC":{"j":["as"],"p":["as"],"y":["as"],"m":["as"],"k":["as"],"v":["as"],"j.E":"as"},"eH":{"N":["q","@"],"H":["q","@"],"N.V":"@"},"eJ":{"C":[],"t":[],"e":[]},"eL":{"j":["ak"],"p":["ak"],"y":["ak"],"e":[],"m":["ak"],"k":["ak"],"v":["ak"],"j.E":"ak"},"eM":{"j":["au"],"p":["au"],"y":["au"],"m":["au"],"k":["au"],"v":["au"],"j.E":"au"},"eQ":{"N":["q","q"],"H":["q","q"],"N.V":"q"},"ba":{"C":[],"t":[],"e":[]},"eU":{"j":["ac"],"p":["ac"],"y":["ac"],"m":["ac"],"k":["ac"],"v":["ac"],"j.E":"ac"},"eV":{"j":["al"],"p":["al"],"y":["al"],"e":[],"m":["al"],"k":["al"],"v":["al"],"j.E":"al"},"f0":{"j":["am"],"p":["am"],"y":["am"],"m":["am"],"k":["am"],"v":["am"],"j.E":"am"},"ff":{"e":[]},"ca":{"e":[]},"fm":{"j":["F"],"p":["F"],"y":["F"],"m":["F"],"k":["F"],"v":["F"],"j.E":"F"},"dj":{"aa":["a4"]},"fz":{"j":["ap?"],"p":["ap?"],"y":["ap?"],"m":["ap?"],"k":["ap?"],"v":["ap?"],"j.E":"ap?"},"dp":{"j":["t"],"p":["t"],"y":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"fT":{"j":["av"],"p":["av"],"y":["av"],"m":["av"],"k":["av"],"v":["av"],"j.E":"av"},"h0":{"j":["ag"],"p":["ag"],"y":["ag"],"m":["ag"],"k":["ag"],"v":["ag"],"j.E":"ag"},"dk":{"c_":["1"]},"dC":{"bq":[]},"e8":{"j":["C"],"p":["C"],"m":["C"],"k":["C"],"j.E":"C"},"aa":{"fO":["1"]},"eh":{"j":["aI"],"p":["aI"],"m":["aI"],"k":["aI"],"j.E":"aI"},"ex":{"j":["aM"],"p":["aM"],"m":["aM"],"k":["aM"],"j.E":"aM"},"eS":{"j":["q"],"p":["q"],"m":["q"],"k":["q"],"j.E":"q"},"n":{"C":[],"t":[],"e":[]},"f1":{"j":["aP"],"p":["aP"],"m":["aP"],"k":["aP"],"j.E":"aP"},"dZ":{"N":["q","@"],"H":["q","@"],"N.V":"@"},"e_":{"e":[]},"b0":{"e":[]},"ey":{"e":[]},"eN":{"j":["H<@,@>"],"p":["H<@,@>"],"m":["H<@,@>"],"k":["H<@,@>"],"j.E":"H<@,@>"},"cy":{"bt":[]},"dU":{"bt":[]},"aL":{"bt":[]},"Z":{"bt":[]},"d2":{"bt":[]},"ai":{"k":["1"],"ai.T":"1"},"b3":{"Q":[]},"b4":{"Q":[]},"E":{"Q":[]},"cH":{"Q":[]},"bS":{"Q":[]},"bT":{"Q":[]},"eE":{"Q":[]},"d1":{"Q":[]},"n0":{"aq":[]},"bI":{"aq":[]},"np":{"aq":[]},"nI":{"aq":[]},"cD":{"ai":["aq"],"k":["aq"],"ai.T":"aq"},"cp":{"a_":[]},"bL":{"ai":["a_?"],"a_":[],"k":["a_?"],"ai.T":"a_?"},"dd":{"a_":[]},"de":{"a_":[]},"df":{"a_":[]},"c2":{"a2":[]},"c3":{"a2":[]},"el":{"cX":[]},"f5":{"a2":[]},"f6":{"a2":[]},"f7":{"a2":[]},"f3":{"a2":[]},"d3":{"a2":[]},"f4":{"a2":[]},"d4":{"a2":[]},"d5":{"a2":[]},"f8":{"a2":[]},"d8":{"a2":[]},"da":{"a2":[]},"db":{"a2":[]},"cK":{"d0":[]},"eW":{"c0":[]},"eX":{"c0":[]},"c1":{"p":["i"],"m":["i"],"k":["i"]}}'))
H.oc(v.typeUniverse,JSON.parse('{"ad":1,"m":1,"bQ":1,"ek":2,"fh":1,"cw":1,"fb":1,"c5":1,"cq":2,"ej":1,"bU":1,"c_":1,"cc":1,"eR":2,"dm":1,"cz":1,"cF":1,"cI":2,"h9":2,"cJ":2,"du":1,"dn":1,"dF":2,"dH":1,"e0":2,"e2":2,"eb":1,"dk":1,"K":1,"cx":1,"b3":1,"b4":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.l6
return{fK:s("bk"),eT:s("bG"),ed:s("cm"),gA:s("bl"),ar:s("co"),gw:s("m<@>"),h:s("C"),l:s("bo"),bU:s("I"),aD:s("l"),c8:s("ae"),bX:s("bK"),b8:s("q4"),x:s("bq"),R:s("bM"),gk:s("bO"),eu:s("u<dY>"),i:s("u<n0>"),cn:s("u<b_>"),U:s("u<bI>"),fD:s("u<b2>"),u:s("u<az>"),fv:s("u<bN>"),e:s("u<aq>"),L:s("u<ei>"),B:s("u<bt>"),fA:s("u<b6>"),q:s("u<eD>"),cG:s("u<a5>"),eg:s("u<b7>"),o:s("u<np>"),D:s("u<nI>"),c3:s("u<b9>"),g9:s("u<c_<O>>"),s:s("u<q>"),ga:s("u<c0>"),gT:s("u<am>"),ab:s("u<d2>"),gN:s("u<c1>"),dC:s("u<a2>"),Y:s("u<d6>"),V:s("u<d7>"),C:s("u<d9>"),J:s("u<dc>"),k:s("u<c7>"),n:s("u<G>"),gn:s("u<@>"),t:s("u<i>"),eJ:s("u<a_?>"),bc:s("u<d0?>"),p:s("u<c3?>"),a:s("u<~(Q)>"),aP:s("v<@>"),T:s("cB"),eH:s("lt"),M:s("aH"),aU:s("y<@>"),fX:s("V<i,bA>"),y:s("V<i,i>"),O:s("p<d6>"),Q:s("p<d7>"),b:s("p<d9>"),m:s("p<dc>"),c:s("p<@>"),bv:s("cH"),f:s("H<@,@>"),gc:s("b6"),bK:s("bR"),Z:s("bS"),bZ:s("bT"),cH:s("cO"),dE:s("a0"),bm:s("bv"),P:s("Y"),K:s("O"),I:s("aa<a4>"),fJ:s("lF"),fg:s("cX"),N:s("q"),bY:s("ba"),aF:s("iR"),bJ:s("eZ"),dr:s("d1"),v:s("d3"),w:s("c2"),g:s("d4"),F:s("d5"),d:s("d8"),j:s("c3"),G:s("da"),r:s("db"),ak:s("c4"),E:s("c6<q,q>"),dD:s("fd"),cJ:s("bA"),gR:s("G"),z:s("@"),S:s("i"),A:s("0&*"),_:s("O*"),bG:s("lq<Y>?"),X:s("O?"),gW:s("bY?"),dl:s("eO?"),f7:s("f_?"),W:s("c2?"),H:s("a4"),h2:s("~(Q)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.bl.prototype
C.L=J.a.prototype
C.b=J.u.prototype
C.c=J.cA.prototype
C.M=J.cB.prototype
C.d=J.bP.prototype
C.a=J.br.prototype
C.N=J.aH.prototype
C.S=H.bv.prototype
C.w=J.eB.prototype
C.W=P.bY.prototype
C.n=J.c4.prototype
C.x=W.bc.prototype
C.y=W.ca.prototype
C.z=new E.bF("Browser.chrome")
C.o=new E.bF("Browser.firefox")
C.p=new E.bF("Browser.edge")
C.A=new E.bF("Browser.other")
C.Z=new P.hu()
C.B=new P.ht()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.I=new P.ez()
C.e=new P.j6()
C.J=new P.ja()
C.f=new P.ju()
C.m=new P.bn(0)
C.K=new P.bn(5e6)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.P=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.Q=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.t=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.u=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.O=H.b(s([]),t.s)
C.R=new H.cr(0,{},C.O,H.l6("cr<q,q>"))
C.T=new E.bV("OperatingSystem.windows")
C.v=new E.bV("OperatingSystem.mac")
C.U=new E.bV("OperatingSystem.linux")
C.V=new E.bV("OperatingSystem.other")
C.X=new P.j7(!1)
C.Y=new P.cb(null,2)})();(function staticFields(){$.jr=null
$.aF=0
$.cl=null
$.lk=null
$.mr=null
$.mm=null
$.mx=null
$.jX=null
$.k5=null
$.l9=null
$.cf=null
$.dK=null
$.dL=null
$.l2=!1
$.aB=C.f
$.ah=H.b([],H.l6("u<O>"))
$.hL=null
$.lw=null
$.ly=null
$.af=null
$.aN=null
$.lH=null
$.by=null
$.lW=null
$.lV=null
$.jb=null
$.jc=null
$.jd=null
$.lU=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"q1","mE",function(){return H.py("_$dart_dartClosure")})
s($,"qg","mG",function(){return H.aQ(H.iW({
toString:function(){return"$receiver$"}}))})
s($,"qh","mH",function(){return H.aQ(H.iW({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qi","mI",function(){return H.aQ(H.iW(null))})
s($,"qj","mJ",function(){return H.aQ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qm","mM",function(){return H.aQ(H.iW(void 0))})
s($,"qn","mN",function(){return H.aQ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ql","mL",function(){return H.aQ(H.lP(null))})
s($,"qk","mK",function(){return H.aQ(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"qp","mP",function(){return H.aQ(H.lP(void 0))})
s($,"qo","mO",function(){return H.aQ(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"qF","lf",function(){return P.nT()})
s($,"qq","mQ",function(){return new P.j9().$0()})
s($,"qr","mR",function(){return new P.j8().$0()})
s($,"qG","mT",function(){return new Int8Array(H.ce(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qI","mU",function(){return P.nB("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qV","mV",function(){return P.oz()})
s($,"qy","mS",function(){return Z.aw(0)})
s($,"qs","ld",function(){return Z.aw(511)})
s($,"qA","aY",function(){return Z.aw(1)})
s($,"qz","aC",function(){return Z.aw(2)})
s($,"qu","aX",function(){return Z.aw(4)})
s($,"qB","bi",function(){return Z.aw(8)})
s($,"qC","bj",function(){return Z.aw(16)})
s($,"qv","dQ",function(){return Z.aw(32)})
s($,"qw","dR",function(){return Z.aw(64)})
s($,"qx","le",function(){return Z.aw(96)})
s($,"qD","bD",function(){return Z.aw(128)})
s($,"qt","aW",function(){return Z.aw(256)})
s($,"pY","mD",function(){return new V.hM()})
r($,"pX","D",function(){return $.mD()})
r($,"qc","mF",function(){var q=V.lz(),p=V.kL(),o=$.lU
return V.lx(q,p,o==null?$.lU=V.nR(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cO,DataView:H.a0,ArrayBufferView:H.a0,Float32Array:H.bu,Float64Array:H.bu,Int16Array:H.er,Int32Array:H.es,Int8Array:H.et,Uint16Array:H.eu,Uint32Array:H.ev,Uint8ClampedArray:H.cQ,CanvasPixelArray:H.cQ,Uint8Array:H.bv,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.ho,HTMLAnchorElement:W.dV,HTMLAreaElement:W.dW,Blob:W.bk,HTMLCanvasElement:W.bl,CanvasRenderingContext2D:W.co,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.hA,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cs,MSStyleCSSProperties:W.cs,CSS2Properties:W.cs,CSSImageValue:W.ao,CSSKeywordValue:W.ao,CSSNumericValue:W.ao,CSSPositionValue:W.ao,CSSResourceValue:W.ao,CSSUnitValue:W.ao,CSSURLImageValue:W.ao,CSSStyleValue:W.ao,CSSMatrixComponent:W.aG,CSSRotation:W.aG,CSSScale:W.aG,CSSSkew:W.aG,CSSTranslation:W.aG,CSSTransformComponent:W.aG,CSSTransformValue:W.hC,CSSUnparsedValue:W.hD,DataTransferItemList:W.hE,DOMException:W.hF,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.e5,DOMTokenList:W.hG,Element:W.C,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ae,FileList:W.bK,FileWriter:W.e7,HTMLFormElement:W.e9,Gamepad:W.ap,History:W.hV,HTMLCollection:W.bp,HTMLFormControlsCollection:W.bp,HTMLOptionsCollection:W.bp,ImageData:W.bq,HTMLImageElement:W.bM,HTMLInputElement:W.bO,KeyboardEvent:W.bs,Location:W.i2,MediaList:W.ik,MessagePort:W.bR,MIDIInputMap:W.eo,MIDIOutputMap:W.ep,MimeType:W.ar,MimeTypeArray:W.eq,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.as,PluginArray:W.eC,RTCStatsReport:W.eH,HTMLSelectElement:W.eJ,SourceBuffer:W.ak,SourceBufferList:W.eL,SpeechGrammar:W.au,SpeechGrammarList:W.eM,SpeechRecognitionResult:W.av,Storage:W.eQ,CSSStyleSheet:W.ag,StyleSheet:W.ag,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,TextTrack:W.al,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.eU,TextTrackList:W.eV,TimeRanges:W.iQ,Touch:W.am,TouchEvent:W.bx,TouchList:W.f0,TrackDefaultList:W.iU,CompositionEvent:W.aR,FocusEvent:W.aR,TextEvent:W.aR,UIEvent:W.aR,URL:W.j5,VideoTrackList:W.ff,WheelEvent:W.bc,Window:W.ca,DOMWindow:W.ca,CSSRuleList:W.fm,ClientRect:W.dj,DOMRect:W.dj,GamepadList:W.fz,NamedNodeMap:W.dp,MozNamedAttrMap:W.dp,SpeechRecognitionResultList:W.fT,StyleSheetList:W.h0,SVGLength:P.aI,SVGLengthList:P.eh,SVGNumber:P.aM,SVGNumberList:P.ex,SVGPointList:P.ir,SVGStringList:P.eS,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aP,SVGTransformList:P.f1,AudioBuffer:P.hr,AudioParamMap:P.dZ,AudioTrackList:P.e_,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.ey,WebGL2RenderingContext:P.bY,SQLResultSetRowList:P.eN})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.dq.$nativeSuperclassTag="ArrayBufferView"
H.dr.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
W.dv.$nativeSuperclassTag="EventTarget"
W.dw.$nativeSuperclassTag="EventTarget"
W.dy.$nativeSuperclassTag="EventTarget"
W.dz.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=K.pG
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
