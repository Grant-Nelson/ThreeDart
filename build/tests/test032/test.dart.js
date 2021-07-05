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
a[c]=function(){a[c]=function(){H.rf(b)}
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
if(a[b]!==s)H.rg(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.mj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.mj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.mj(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lS:function lS(){},
lU:function(a){return new H.d1("Field '"+a+"' has been assigned during initialization.")},
l1:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jC:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
pf:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
kX:function(a,b,c){return a},
oR:function(a,b,c,d){if(t.gw.b(a))return new H.cT(a,b,c.A("@<0>").aI(d).A("cT<1,2>"))
return new H.aY(a,b,c.A("@<0>").aI(d).A("aY<1,2>"))},
oI:function(){return new P.dn("No element")},
pc:function(a,b){H.fc(a,0,J.aw(a)-1,b)},
fc:function(a,b,c,d){if(c-b<=32)H.pb(a,b,c,d)
else H.pa(a,b,c,d)},
pb:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cD(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ax()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
pa:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a6(a4+a5,2),f=g-j,e=g+j,d=J.cD(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.P(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
q=m
r=l
break}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
r=l}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=q+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
H.fc(a3,a4,r-2,a6)
H.fc(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.P(a6.$2(d.h(a3,r),b),0);)++r
for(;J.P(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
r=l}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)}q=m
break}}H.fc(a3,r,q,a6)}else H.fc(a3,r,q,a6)},
d1:function d1(a){this.a=a},
V:function V(a){this.a=a},
m:function m(){},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
eK:function eK(a,b){this.a=null
this.b=a
this.c=b},
dE:function dE(a,b,c){this.a=a
this.b=b
this.$ti=c},
fM:function fM(a,b){this.a=a
this.b=b},
cV:function cV(){},
fD:function fD(){},
co:function co(){},
oA:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
nX:function(a){var s,r=H.nW(a)
if(r!=null)return r
s="minified:"+a
return s},
nQ:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ef(a)
return s},
di:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mM:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.an(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
p4:function(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=C.a.d3(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
dj:function(a){return H.oW(a)},
oW:function(a){var s,r,q,p
if(a instanceof P.C)return H.aB(H.bd(a),null)
if(J.ec(a)===C.N||t.ak.b(a)){s=C.q(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.aB(H.bd(a),null)},
oX:function(){if(!!self.location)return self.location.href
return null},
mL:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
p5:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.kN(q))throw H.c(H.eb(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b0(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.eb(q))}return H.mL(p)},
mN:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kN(q))throw H.c(H.eb(q))
if(q<0)throw H.c(H.eb(q))
if(q>65535)return H.p5(a)}return H.mL(a)},
p6:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b2:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b0(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.an(a,0,1114111,null,null))},
ce:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
p3:function(a){var s=H.ce(a).getFullYear()+0
return s},
p1:function(a){var s=H.ce(a).getMonth()+1
return s},
oY:function(a){var s=H.ce(a).getDate()+0
return s},
oZ:function(a){var s=H.ce(a).getHours()+0
return s},
p0:function(a){var s=H.ce(a).getMinutes()+0
return s},
p2:function(a){var s=H.ce(a).getSeconds()+0
return s},
p_:function(a){var s=H.ce(a).getMilliseconds()+0
return s},
r2:function(a){throw H.c(H.eb(a))},
d:function(a,b){if(a==null)J.aw(a)
throw H.c(H.cB(a,b))},
cB:function(a,b){var s,r="index"
if(!H.kN(b))return new P.aJ(!0,b,r,null)
s=J.aw(a)
if(b<0||b>=s)return P.M(b,a,r,null,s)
return P.f4(b,r)},
qX:function(a,b,c){if(a>c)return P.an(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.an(b,a,c,"end",null)
return new P.aJ(!0,b,"end",null)},
eb:function(a){return new P.aJ(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eV()
s=new Error()
s.dartException=a
r=H.rh
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rh:function(){return J.ef(this.dartException)},
h:function(a){throw H.c(a)},
r:function(a){throw H.c(P.bk(a))},
b6:function(a){var s,r,q,p,o,n
a=H.nT(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jN(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jO:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
n4:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lT:function(a,b){var s=b==null,r=s?null:b.method
return new H.eF(a,r,s?null:b.receiver)},
a0:function(a){if(a==null)return new H.jn(a)
if(a instanceof H.cU)return H.bB(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bB(a,a.dartException)
return H.qQ(a)},
bB:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qQ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b0(r,16)&8191)===10)switch(q){case 438:return H.bB(a,H.lT(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.bB(a,new H.dh(p,e))}}if(a instanceof TypeError){o=$.o0()
n=$.o1()
m=$.o2()
l=$.o3()
k=$.o6()
j=$.o7()
i=$.o5()
$.o4()
h=$.o9()
g=$.o8()
f=o.at(s)
if(f!=null)return H.bB(a,H.lT(s,f))
else{f=n.at(s)
if(f!=null){f.method="call"
return H.bB(a,H.lT(s,f))}else{f=m.at(s)
if(f==null){f=l.at(s)
if(f==null){f=k.at(s)
if(f==null){f=j.at(s)
if(f==null){f=i.at(s)
if(f==null){f=l.at(s)
if(f==null){f=h.at(s)
if(f==null){f=g.at(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bB(a,new H.dh(s,f==null?e:f.method))}}return H.bB(a,new H.fC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dm()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bB(a,new P.aJ(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dm()
return a},
bc:function(a){var s
if(a instanceof H.cU)return a.b
if(a==null)return new H.dW(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.dW(a)},
r_:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
r6:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cA:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.r6)
a.$identity=s
return s},
ox:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.jA().constructor.prototype):Object.create(new H.cI(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aU
if(typeof r!=="number")return r.J()
$.aU=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.mx(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.ot(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mx(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ot:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nO,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.or:H.oq
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
ou:function(a,b,c,d){var s=H.mw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mx:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ow(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ou(r,!p,s,b)
if(r===0){p=$.aU
if(typeof p!=="number")return p.J()
$.aU=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cJ
return new Function(p+(o==null?$.cJ=H.i2("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aU
if(typeof p!=="number")return p.J()
$.aU=p+1
m+=p
p="return function("+m+"){return this."
o=$.cJ
return new Function(p+(o==null?$.cJ=H.i2("self"):o)+"."+H.t(s)+"("+m+");}")()},
ov:function(a,b,c,d){var s=H.mw,r=H.os
switch(b?-1:a){case 0:throw H.c(new H.f7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
ow:function(a,b){var s,r,q,p,o,n,m,l=$.cJ
if(l==null)l=$.cJ=H.i2("self")
s=$.mv
if(s==null)s=$.mv=H.i2("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.ov(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.aU
if(typeof n!=="number")return n.J()
$.aU=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.aU
if(typeof n!=="number")return n.J()
$.aU=n+1
return new Function(o+n+"}")()},
mj:function(a,b,c,d,e,f,g){return H.ox(a,b,c,d,!!e,!!f,g)},
oq:function(a,b){return H.hF(v.typeUniverse,H.bd(a.a),b)},
or:function(a,b){return H.hF(v.typeUniverse,H.bd(a.c),b)},
mw:function(a){return a.a},
os:function(a){return a.c},
i2:function(a){var s,r,q,p=new H.cI("self","target","receiver","name"),o=J.lR(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bX("Field name "+a+" not found."))},
rf:function(a){throw H.c(new P.et(a))},
r1:function(a){return v.getIsolateTag(a)},
rg:function(a){return H.h(new H.d1(a))},
tr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
r8:function(a){var s,r,q,p,o,n=$.nN.$1(a),m=$.kZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.l5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.nJ.$2(a,n)
if(q!=null){m=$.kZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.l5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.lF(s)
$.kZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.l5[n]=s
return s}if(p==="-"){o=H.lF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nR(a,s)
if(p==="*")throw H.c(P.jQ(n))
if(v.leafTags[n]===true){o=H.lF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nR(a,s)},
nR:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mn(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lF:function(a){return J.mn(a,!1,null,!!a.$ix)},
ra:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.lF(s)
else return J.mn(s,c,null,null)},
r4:function(){if(!0===$.mm)return
$.mm=!0
H.r5()},
r5:function(){var s,r,q,p,o,n,m,l
$.kZ=Object.create(null)
$.l5=Object.create(null)
H.r3()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nS.$1(o)
if(n!=null){m=H.ra(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
r3:function(){var s,r,q,p,o,n,m=C.C()
m=H.cz(C.D,H.cz(C.E,H.cz(C.r,H.cz(C.r,H.cz(C.F,H.cz(C.G,H.cz(C.H(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nN=new H.l2(p)
$.nJ=new H.l3(o)
$.nS=new H.l4(n)},
cz:function(a,b){return a(b)||b},
mD:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.ag("Illegal RegExp pattern ("+String(n)+")",a,null))},
nU:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nT:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
nV:function(a,b,c){var s=H.re(a,b,c)
return s},
re:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nT(b),'g'),H.qZ(c))},
cO:function cO(){},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jN:function jN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dh:function dh(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
jn:function jn(a){this.a=a},
cU:function cU(a,b){this.a=a
this.b=b},
dW:function dW(a){this.a=a
this.b=null},
c_:function c_(){},
jE:function jE(){},
jA:function jA(){},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iY:function iY(a){this.a=a},
iX:function iX(a){this.a=a},
j_:function j_(a,b){this.a=a
this.b=b
this.c=null},
d3:function d3(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dN:function dN(a){this.b=a},
k7:function k7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cw:function(a){return a},
b9:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cB(b,a))},
q4:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qX(a,b,c))
return b},
dd:function dd(){},
a4:function a4(){},
cb:function cb(){},
bQ:function bQ(){},
de:function de(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
df:function df(){},
bR:function bR(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
mY:function(a,b){var s=b.c
return s==null?b.c=H.m8(a,b.z,!0):s},
mX:function(a,b){var s=b.c
return s==null?b.c=H.e2(a,"aD",[b.z]):s},
mZ:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mZ(a.z)
return s===11||s===12},
p8:function(a){return a.cy},
mk:function(a){return H.m9(v.typeUniverse,a,!1)},
bz:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bz(a,s,a0,a1)
if(r===s)return b
return H.no(a,r,!0)
case 7:s=b.z
r=H.bz(a,s,a0,a1)
if(r===s)return b
return H.m8(a,r,!0)
case 8:s=b.z
r=H.bz(a,s,a0,a1)
if(r===s)return b
return H.nn(a,r,!0)
case 9:q=b.Q
p=H.ea(a,q,a0,a1)
if(p===q)return b
return H.e2(a,b.z,p)
case 10:o=b.z
n=H.bz(a,o,a0,a1)
m=b.Q
l=H.ea(a,m,a0,a1)
if(n===o&&l===m)return b
return H.m6(a,n,l)
case 11:k=b.z
j=H.bz(a,k,a0,a1)
i=b.Q
h=H.qN(a,i,a0,a1)
if(j===k&&h===i)return b
return H.nm(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ea(a,g,a0,a1)
o=b.z
n=H.bz(a,o,a0,a1)
if(f===g&&n===o)return b
return H.m7(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hV("Attempted to substitute unexpected RTI kind "+c))}},
ea:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bz(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qO:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bz(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qN:function(a,b,c,d){var s,r=b.a,q=H.ea(a,r,c,d),p=b.b,o=H.ea(a,p,c,d),n=b.c,m=H.qO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h3()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
qU:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nO(s)
return a.$S()}return null},
nP:function(a,b){var s
if(H.mZ(b))if(a instanceof H.c_){s=H.qU(a)
if(s!=null)return s}return H.bd(a)},
bd:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.mf(a)}if(Array.isArray(a))return H.nx(a)
return H.mf(J.ec(a))},
nx:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
O:function(a){var s=a.$ti
return s!=null?s:H.mf(a)},
mf:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.qc(a,s)},
qc:function(a,b){var s=a instanceof H.c_?a.__proto__.__proto__.constructor:b,r=H.pL(v.typeUniverse,s.name)
b.$ccache=r
return r},
nO:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.m9(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qb:function(a){var s,r,q,p=this
if(p===t.K)return H.e7(p,a,H.qg)
if(!H.be(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e7(p,a,H.qj)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kN
else if(r===t.gR||r===t.di)q=H.qf
else if(r===t.N)q=H.qh
else q=r===t.cJ?H.kM:null
if(q!=null)return H.e7(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.r7)){p.r="$i"+s
return H.e7(p,a,H.qi)}}else if(s===7)return H.e7(p,a,H.q9)
return H.e7(p,a,H.q7)},
e7:function(a,b,c){a.b=c
return a.b(b)},
qa:function(a){var s,r=this,q=H.q6
if(!H.be(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.q2
else if(r===t.K)q=H.q0
else{s=H.ed(r)
if(s)q=H.q8}r.a=q
return r.a(a)},
mi:function(a){var s,r=a.y
if(!H.be(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.mi(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
q7:function(a){var s=this
if(a==null)return H.mi(s)
return H.T(v.typeUniverse,H.nP(a,s),null,s,null)},
q9:function(a){if(a==null)return!0
return this.z.b(a)},
qi:function(a){var s,r=this
if(a==null)return H.mi(r)
s=r.r
if(a instanceof P.C)return!!a[s]
return!!J.ec(a)[s]},
q6:function(a){var s,r=this
if(a==null){s=H.ed(r)
if(s)return a}else if(r.b(a))return a
H.nA(a,r)},
q8:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nA(a,s)},
nA:function(a,b){throw H.c(H.pB(H.nh(a,H.nP(a,b),H.aB(b,null))))},
nh:function(a,b,c){var s=P.io(a),r=H.aB(b==null?H.bd(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
pB:function(a){return new H.e0("TypeError: "+a)},
ao:function(a,b){return new H.e0("TypeError: "+H.nh(a,null,b))},
qg:function(a){return a!=null},
q0:function(a){if(a!=null)return a
throw H.c(H.ao(a,"Object"))},
qj:function(a){return!0},
q2:function(a){return a},
kM:function(a){return!0===a||!1===a},
ny:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ao(a,"bool"))},
tf:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ao(a,"bool"))},
te:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ao(a,"bool?"))},
tg:function(a){if(typeof a=="number")return a
throw H.c(H.ao(a,"double"))},
ti:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ao(a,"double"))},
th:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ao(a,"double?"))},
kN:function(a){return typeof a=="number"&&Math.floor(a)===a},
kF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ao(a,"int"))},
tk:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ao(a,"int"))},
tj:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ao(a,"int?"))},
qf:function(a){return typeof a=="number"},
tl:function(a){if(typeof a=="number")return a
throw H.c(H.ao(a,"num"))},
tn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ao(a,"num"))},
tm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ao(a,"num?"))},
qh:function(a){return typeof a=="string"},
q1:function(a){if(typeof a=="string")return a
throw H.c(H.ao(a,"String"))},
tp:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ao(a,"String"))},
to:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ao(a,"String?"))},
qK:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.aB(a[q],b)
return s},
nB:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.J(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.aB(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.aB(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.aB(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.aB(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.aB(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aB:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.aB(a.z,b)
return s}if(l===7){r=a.z
s=H.aB(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.aB(a.z,b)+">"
if(l===9){p=H.qP(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qK(o,b)+">"):p}if(l===11)return H.nB(a,b,null)
if(l===12)return H.nB(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qP:function(a){var s,r=H.nW(a)
if(r!=null)return r
s="minified:"+a
return s},
np:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pL:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.m9(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e3(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e2(a,b,q)
n[b]=o
return o}else return m},
pJ:function(a,b){return H.nw(a.tR,b)},
pI:function(a,b){return H.nw(a.eT,b)},
m9:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.nl(H.nj(a,null,b,c))
r.set(b,s)
return s},
hF:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.nl(H.nj(a,b,c,!0))
q.set(c,r)
return r},
pK:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.m6(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bx:function(a,b){b.a=H.qa
b.b=H.qb
return b},
e3:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aE(null,null)
s.y=b
s.cy=c
r=H.bx(a,s)
a.eC.set(c,r)
return r},
no:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pG(a,b,r,c)
a.eC.set(r,s)
return s},
pG:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.be(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aE(null,null)
q.y=6
q.z=b
q.cy=c
return H.bx(a,q)},
m8:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pF(a,b,r,c)
a.eC.set(r,s)
return s},
pF:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.be(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ed(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ed(q.z))return q
else return H.mY(a,b)}}p=new H.aE(null,null)
p.y=7
p.z=b
p.cy=c
return H.bx(a,p)},
nn:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pD(a,b,r,c)
a.eC.set(r,s)
return s},
pD:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.be(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e2(a,"aD",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aE(null,null)
q.y=8
q.z=b
q.cy=c
return H.bx(a,q)},
pH:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aE(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bx(a,s)
a.eC.set(q,r)
return r},
hE:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pC:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e2:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aE(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bx(a,r)
a.eC.set(p,q)
return q},
m6:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aE(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bx(a,o)
a.eC.set(q,n)
return n},
nm:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hE(m)
if(j>0){s=l>0?",":""
r=H.hE(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pC(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aE(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bx(a,o)
a.eC.set(q,r)
return r},
m7:function(a,b,c,d){var s,r=b.cy+("<"+H.hE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pE(a,b,c,r,d)
a.eC.set(r,s)
return s},
pE:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bz(a,b,r,0)
m=H.ea(a,c,r,0)
return H.m7(a,n,m,c!==m)}}l=new H.aE(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bx(a,l)},
nj:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nl:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.pv(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.nk(a,r,h,g,!1)
else if(q===46)r=H.nk(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bw(a.u,a.e,g.pop()))
break
case 94:g.push(H.pH(a.u,g.pop()))
break
case 35:g.push(H.e3(a.u,5,"#"))
break
case 64:g.push(H.e3(a.u,2,"@"))
break
case 126:g.push(H.e3(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.m5(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e2(p,n,o))
else{m=H.bw(p,a.e,n)
switch(m.y){case 11:g.push(H.m7(p,m,o,a.n))
break
default:g.push(H.m6(p,m,o))
break}}break
case 38:H.pw(a,g)
break
case 42:p=a.u
g.push(H.no(p,H.bw(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.m8(p,H.bw(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.nn(p,H.bw(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h3()
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
H.m5(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.nm(p,H.bw(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.m5(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.py(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bw(a.u,a.e,i)},
pv:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nk:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.np(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.p8(o)+'"')
d.push(H.hF(s,o,n))}else d.push(p)
return m},
pw:function(a,b){var s=b.pop()
if(0===s){b.push(H.e3(a.u,1,"0&"))
return}if(1===s){b.push(H.e3(a.u,4,"1&"))
return}throw H.c(P.hV("Unexpected extended operation "+H.t(s)))},
bw:function(a,b,c){if(typeof c=="string")return H.e2(a,c,a.sEA)
else if(typeof c=="number")return H.px(a,b,c)
else return c},
m5:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bw(a,b,c[s])},
py:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bw(a,b,c[s])},
px:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hV("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hV("Bad index "+c+" for "+b.i(0)))},
T:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.be(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.be(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.T(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.T(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.T(a,b.z,c,d,e)
if(r===6)return H.T(a,b.z,c,d,e)
return r!==7}if(r===6)return H.T(a,b.z,c,d,e)
if(p===6){s=H.mY(a,d)
return H.T(a,b,c,s,e)}if(r===8){if(!H.T(a,b.z,c,d,e))return!1
return H.T(a,H.mX(a,b),c,d,e)}if(r===7){s=H.T(a,t.P,c,d,e)
return s&&H.T(a,b.z,c,d,e)}if(p===8){if(H.T(a,b,c,d.z,e))return!0
return H.T(a,b,c,H.mX(a,d),e)}if(p===7){s=H.T(a,b,c,t.P,e)
return s||H.T(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b8)return!0
if(p===12){if(b===t.Q)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.T(a,k,c,j,e)||!H.T(a,j,e,k,c))return!1}return H.nC(a,b.z,c,d.z,e)}if(p===11){if(b===t.Q)return!0
if(s)return!1
return H.nC(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.qe(a,b,c,d,e)}return!1},
nC:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.T(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.T(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.T(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.T(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.T(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
qe:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.T(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.np(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.T(a,H.hF(a,b,l[p]),c,r[p],e))return!1
return!0},
ed:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.be(a))if(r!==7)if(!(r===6&&H.ed(a.z)))s=r===8&&H.ed(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
r7:function(a){var s
if(!H.be(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
be:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
nw:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aE:function aE(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h3:function h3(){this.c=this.b=this.a=null},
h_:function h_(){},
e0:function e0(a){this.a=a},
nW:function(a){return v.mangledGlobalNames[a]},
rb:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
mn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l0:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mm==null){H.r4()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jQ("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kp
if(o==null)o=$.kp=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.r8(a)
if(p!=null)return p
if(typeof a=="function")return C.P
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){o=$.kp
if(o==null)o=$.kp=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
oJ:function(a,b){if(a<0||a>4294967295)throw H.c(P.an(a,0,4294967295,"length",null))
return J.oK(new Array(a),b)},
lQ:function(a,b){if(a<0)throw H.c(P.bX("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.A("u<0>"))},
oK:function(a,b){return J.lR(H.b(a,b.A("u<0>")))},
lR:function(a){a.fixed$length=Array
return a},
oL:function(a,b){return J.ok(a,b)},
mC:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
oM:function(a,b){var s,r
for(s=a.length;b<s;){r=C.a.F(a,b)
if(r!==32&&r!==13&&!J.mC(r))break;++b}return b},
oN:function(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.a.U(a,s)
if(r!==32&&r!==13&&!J.mC(r))break}return b},
ec:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.eD.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.c5.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.l0(a)},
cD:function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.l0(a)},
l_:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.l0(a)},
r0:function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bT.prototype
return a},
ml:function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bT.prototype
return a},
bb:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.l0(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ec(a).n(a,b)},
G:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cD(a).h(a,b)},
lH:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nQ(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.l_(a).j(a,b,c)},
oi:function(a,b,c){return J.bb(a).ia(a,b,c)},
oj:function(a,b,c,d){return J.bb(a).iJ(a,b,c,d)},
ok:function(a,b){return J.r0(a).ap(a,b)},
lI:function(a,b){return J.l_(a).K(a,b)},
cH:function(a,b){return J.l_(a).p(a,b)},
ol:function(a){return J.bb(a).gb3(a)},
om:function(a){return J.bb(a).ge4(a)},
lJ:function(a){return J.ec(a).gG(a)},
aT:function(a){return J.l_(a).ga2(a)},
aw:function(a){return J.cD(a).gk(a)},
mq:function(a,b){return J.ml(a).cR(a,b)},
on:function(a,b){return J.bb(a).jE(a,b)},
mr:function(a,b,c){return J.ml(a).t(a,b,c)},
ef:function(a){return J.ec(a).i(a)},
ms:function(a){return J.ml(a).d3(a)},
a:function a(){},
eC:function eC(){},
c5:function c5(){},
bp:function bp(){},
f0:function f0(){},
bT:function bT(){},
aW:function aW(){},
u:function u(a){this.$ti=a},
iW:function iW(a){this.$ti=a},
al:function al(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(){},
d0:function d0(){},
eD:function eD(){},
bo:function bo(){}},P={
po:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qR()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cA(new P.k9(q),1)).observe(s,{childList:true})
return new P.k8(q,s,r)}else if(self.setImmediate!=null)return P.qS()
return P.qT()},
pp:function(a){self.scheduleImmediate(H.cA(new P.ka(a),0))},
pq:function(a){self.setImmediate(H.cA(new P.kb(a),0))},
pr:function(a){P.m_(C.m,a)},
m_:function(a,b){var s=C.c.a6(a.a,1000)
return P.pz(s<0?0:s,b)},
n3:function(a,b){var s=C.c.a6(a.a,1000)
return P.pA(s<0?0:s,b)},
pz:function(a,b){var s=new P.e_()
s.fe(a,b)
return s},
pA:function(a,b){var s=new P.e_()
s.ff(a,b)
return s},
aa:function(a){return new P.fN(new P.ae($.H,a.A("ae<0>")),a.A("fN<0>"))},
a9:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ak:function(a,b){P.q3(a,b)},
a8:function(a,b){b.cD(0,a)},
a7:function(a,b){b.bO(H.a0(a),H.bc(a))},
q3:function(a,b){var s,r,q=new P.kG(b),p=new P.kH(b)
if(a instanceof P.ae)a.dN(q,p,t.z)
else{s=t.z
if(t.c.b(a))a.d0(q,p,s)
else{r=new P.ae($.H,t.eI)
r.a=4
r.c=a
r.dN(q,p,s)}}},
ab:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.H.eP(new P.kW(s))},
tb:function(a){return new P.ct(a,1)},
ps:function(){return C.a_},
pt:function(a){return new P.ct(a,3)},
ql:function(a,b){return new P.dX(a,b.A("dX<0>"))},
hW:function(a,b){var s=H.kX(a,"error",t.K)
return new P.ek(s,b==null?P.mt(a):b)},
mt:function(a){var s
if(t.C.b(a)){s=a.gbB()
if(s!=null)return s}return C.K},
m3:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.cr()
b.a=a.a
b.c=a.c
P.dJ(b,r)}else{r=b.c
b.a=2
b.c=a
a.dF(r)}},
dJ:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.c;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.kS(f,f,d.b,s.a,s.b)}return}r.a=b
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
if(k){P.kS(f,f,n.b,m.a,m.b)
return}i=$.H
if(i!==j)$.H=j
else i=f
d=d.c
if((d&15)===8)new P.kn(r,e,q).$0()
else if(l){if((d&1)!==0)new P.km(r,m).$0()}else if((d&2)!==0)new P.kl(e,r).$0()
if(i!=null)$.H=i
d=r.c
if(s.b(d)){n=r.a.$ti
n=n.A("aD<2>").b(d)||!n.Q[1].b(d)}else n=!1
if(n){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bF(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.m3(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bF(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
qI:function(a,b){if(t.ag.b(a))return b.eP(a)
if(t.bI.b(a))return a
throw H.c(P.oo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
qH:function(){var s,r
for(s=$.cx;s!=null;s=$.cx){$.e9=null
r=s.b
$.cx=r
if(r==null)$.e8=null
s.a.$0()}},
qM:function(){$.mg=!0
try{P.qH()}finally{$.e9=null
$.mg=!1
if($.cx!=null)$.mp().$1(P.nK())}},
nG:function(a){var s=new P.fO(a),r=$.e8
if(r==null){$.cx=$.e8=s
if(!$.mg)$.mp().$1(P.nK())}else $.e8=r.b=s},
qL:function(a){var s,r,q,p=$.cx
if(p==null){P.nG(a)
$.e9=$.e8
return}s=new P.fO(a)
r=$.e9
if(r==null){s.b=p
$.cx=$.e9=s}else{q=r.b
s.b=q
$.e9=r.b=s
if(q==null)$.e8=s}},
rc:function(a){var s=null,r=$.H
if(C.e===r){P.cy(s,s,C.e,a)
return}P.cy(s,s,r,r.cA(a))},
rJ:function(a){H.kX(a,"stream",t.K)
return new P.hs()},
n2:function(a,b){var s=$.H
if(s===C.e)return P.m_(a,b)
return P.m_(a,s.cA(b))},
ph:function(a,b){var s=$.H
if(s===C.e)return P.n3(a,b)
return P.n3(a,s.dZ(b,t.aF))},
kS:function(a,b,c,d,e){P.qL(new P.kT(d,e))},
nD:function(a,b,c,d){var s,r=$.H
if(r===c)return d.$0()
$.H=c
s=r
try{r=d.$0()
return r}finally{$.H=s}},
nE:function(a,b,c,d,e){var s,r=$.H
if(r===c)return d.$1(e)
$.H=c
s=r
try{r=d.$1(e)
return r}finally{$.H=s}},
qJ:function(a,b,c,d,e,f){var s,r=$.H
if(r===c)return d.$2(e,f)
$.H=c
s=r
try{r=d.$2(e,f)
return r}finally{$.H=s}},
cy:function(a,b,c,d){if(C.e!==c)d=c.cA(d)
P.nG(d)},
k9:function k9(a){this.a=a},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
e_:function e_(){this.c=0},
kz:function kz(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a,b){this.a=a
this.b=!1
this.$ti=b},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kW:function kW(a){this.a=a},
ct:function ct(a,b){this.a=a
this.b=b},
cu:function cu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dX:function dX(a,b){this.a=a
this.$ti=b},
ek:function ek(a,b){this.a=a
this.b=b},
dG:function dG(){},
dF:function dF(a,b){this.a=a
this.$ti=b},
cs:function cs(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ae:function ae(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kd:function kd(a,b){this.a=a
this.b=b},
kk:function kk(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a,b){this.a=a
this.b=b},
kj:function kj(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a){this.a=a},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
fO:function fO(a){this.a=a
this.b=null},
ci:function ci(){},
fi:function fi(){},
hs:function hs(){},
kE:function kE(){},
kT:function kT(a,b){this.a=a
this.b=b},
ks:function ks(){},
kt:function kt(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c){this.a=a
this.b=b
this.c=c},
oO:function(a,b){return new H.Y(a.A("@<0>").aI(b).A("Y<1,2>"))},
oP:function(a,b,c){return H.r_(a,new H.Y(b.A("@<0>").aI(c).A("Y<1,2>")))},
N:function(a,b){return new H.Y(a.A("@<0>").aI(b).A("Y<1,2>"))},
mF:function(a){return new P.dK(a.A("dK<0>"))},
m4:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pu:function(a,b){var s=new P.dL(a,b)
s.c=a.e
return s},
oH:function(a,b,c){var s,r
if(P.mh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.av.push(a)
try{P.qk(a,s)}finally{if(0>=$.av.length)return H.d($.av,-1)
$.av.pop()}r=P.n0(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lP:function(a,b,c){var s,r
if(P.mh(a))return b+"..."+c
s=new P.a5(b)
$.av.push(a)
try{r=s
r.a=P.n0(r.a,a,", ")}finally{if(0>=$.av.length)return H.d($.av,-1)
$.av.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mh:function(a){var s,r
for(s=$.av.length,r=0;r<s;++r)if(a===$.av[r])return!0
return!1},
qk:function(a,b){var s,r,q,p,o,n,m,l=a.ga2(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.t(l.gN(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gN(l);++j
if(!l.w()){if(j<=4){b.push(H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gN(l);++j
for(;l.w();p=o,o=n){n=l.gN(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.t(p)
r=H.t(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
mE:function(a,b,c){var s=P.oO(b,c)
a.p(0,new P.j0(s,b,c))
return s},
lV:function(a){var s,r={}
if(P.mh(a))return"{...}"
s=new P.a5("")
try{$.av.push(a)
s.a+="{"
r.a=!0
J.cH(a,new P.j4(r,s))
s.a+="}"}finally{if(0>=$.av.length)return H.d($.av,-1)
$.av.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dK:function dK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kr:function kr(a){this.a=a
this.c=this.b=null},
dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d_:function d_(){},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(){},
i:function i(){},
d6:function d6(){},
j4:function j4(a,b){this.a=a
this.b=b},
S:function S(){},
hG:function hG(){},
d7:function d7(){},
cp:function cp(a,b){this.a=a
this.$ti=b},
dl:function dl(){},
dT:function dT(){},
dM:function dM(){},
e4:function e4(){},
e6:function e6(){},
pk:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.pl(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
pl:function(a,b,c,d){var s=a?$.ob():$.oa()
if(s==null)return null
if(0===c&&d===b.length)return P.n8(s,b)
return P.n8(s,b.subarray(c,P.bs(c,d,b.length)))},
n8:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.a0(r)}return null},
mu:function(a,b,c,d,e,f){if(C.c.by(f,4)!==0)throw H.c(P.ag("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.ag("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.ag("Invalid base64 padding, more than two '=' characters",a,b))},
q_:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pZ:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cD(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
k_:function k_(){},
jZ:function jZ(){},
i_:function i_(){},
i0:function i0(){},
ep:function ep(){},
es:function es(){},
ij:function ij(){},
jX:function jX(){},
k0:function k0(){},
kD:function kD(a){this.b=0
this.c=a},
jY:function jY(a){this.a=a},
kC:function kC(a){this.a=a
this.b=16
this.c=0},
cE:function(a,b){var s=H.mM(a,b)
if(s!=null)return s
throw H.c(P.ag(a,null,null))},
qY:function(a){var s=H.p4(a)
if(s!=null)return s
throw H.c(P.ag("Invalid double",a,null))},
oE:function(a){if(a instanceof H.c_)return a.i(0)
return"Instance of '"+H.dj(a)+"'"},
eJ:function(a,b,c,d){var s,r=c?J.lQ(a,d):J.oJ(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
j1:function(a,b,c){var s,r=H.b([],c.A("u<0>"))
for(s=J.aT(a);s.w();)r.push(s.gN(s))
if(b)return r
return J.lR(r)},
oQ:function(a,b,c){var s,r,q=J.lQ(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fk:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bs(b,c,r)
return H.mN(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.p6(a,b,P.bs(b,c,a.length))
return P.pe(a,b,c)},
pe:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.an(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.an(c,b,a.length,o,o))
r=J.aT(a)
for(q=0;q<b;++q)if(!r.w())throw H.c(P.an(b,0,q,o,o))
p=[]
if(s)for(;r.w();)p.push(r.gN(r))
else for(q=b;q<c;++q){if(!r.w())throw H.c(P.an(c,b,q,o,o))
p.push(r.gN(r))}return H.mN(p)},
lX:function(a){return new H.eE(a,H.mD(a,!1,!0,!1,!1,!1))},
n0:function(a,b,c){var s=J.aT(b)
if(!s.w())return a
if(c.length===0){do a+=H.t(s.gN(s))
while(s.w())}else{a+=H.t(s.gN(s))
for(;s.w();)a=a+c+H.t(s.gN(s))}return a},
fG:function(){var s=H.oX()
if(s!=null)return P.pj(s)
throw H.c(P.y("'Uri.base' is not supported"))},
me:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.og().b
s=s.test(b)}else s=!1
if(s)return b
r=c.giY().cF(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.b2(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
oB:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eu:function(a){if(a>=10)return""+a
return"0"+a},
my:function(a){return new P.bG(1000*a)},
io:function(a){if(typeof a=="number"||H.kM(a)||null==a)return J.ef(a)
if(typeof a=="string")return JSON.stringify(a)
return P.oE(a)},
hV:function(a){return new P.ej(a)},
bX:function(a){return new P.aJ(!1,null,null,a)},
oo:function(a,b,c){return new P.aJ(!0,a,b,c)},
f4:function(a,b){return new P.dk(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.dk(b,c,!0,a,d,"Invalid value")},
bs:function(a,b,c){if(0>a||a>c)throw H.c(P.an(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.an(b,a,c,"end",null))
return b}return c},
mP:function(a,b){if(a<0)throw H.c(P.an(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aw(b):e
return new P.eA(s,!0,a,c,"Index out of range")},
y:function(a){return new P.fE(a)},
jQ:function(a){return new P.fB(a)},
n_:function(a){return new P.dn(a)},
bk:function(a){return new P.er(a)},
f:function(a){return new P.h0(a)},
ag:function(a,b,c){return new P.it(a,b,c)},
hS:function(a){H.rb(a)},
pj:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.n5(a4<a4?C.a.t(a5,0,a4):a5,5,a3).geV()
else if(s===32)return P.n5(C.a.t(a5,5,a4),0,a3).geV()}r=P.eJ(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.nF(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.nF(a5,0,q,20,r)===20)r[7]=q
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
m=f}j="file"}else if(C.a.ag(a5,"http",0)){if(i&&o+3===n&&C.a.ag(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.bb(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ag(a5,"https",0)){if(i&&o+4===n&&C.a.ag(a5,"443",o+1)){l-=4
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
l-=0}return new P.hl(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.pT(a5,0,q)
else{if(q===0)P.cv(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.pU(a5,d,p-1):""
b=P.pQ(a5,p,o,!1)
i=o+1
if(i<n){a=H.mM(C.a.t(a5,i,n),a3)
a0=P.pS(a==null?H.h(P.ag("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pR(a5,n,m,a3,j,b!=null)
a2=m<l?P.mb(a5,m+1,l,a3):a3
return new P.bV(j,c,b,a0,a1,a2,l<a4?P.pP(a5,l+1,a4):a3)},
n7:function(a){var s=t.N
return C.b.j4(H.b(a.split("&"),t.s),P.N(s,s),new P.jV(C.f))},
pi:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jS(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.U(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.cE(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.cE(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
n6:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jT(a),c=new P.jU(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.U(a,r)
if(n===58){if(r===b){++r
if(C.a.U(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaQ(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.pi(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.b0(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
nq:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cv:function(a,b,c){throw H.c(P.ag(c,a,b))},
pS:function(a,b){if(a!=null&&a===P.nq(b))return null
return a},
pQ:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.cv(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pN(a,r,s)
if(q<s){p=q+1
o=P.nv(a,C.a.ag(a,"25",p)?q+3:p,s,"%25")}else o=""
P.n6(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bR(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.nv(a,C.a.ag(a,"25",p)?q+3:p,c,"%25")}else o=""
P.n6(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pW(a,b,c)},
pN:function(a,b,c){var s=C.a.bR(a,"%",b)
return s>=b&&s<c?s:c},
nv:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a5(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.mc(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a5("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cv(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a5("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.a5("")
n=i}else n=i
n.a+=j
n.a+=P.ma(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pW:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.mc(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a5("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.t,m)
m=(C.t[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a5("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cv(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a5("")
m=q}else m=q
m.a+=l
m.a+=P.ma(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pT:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.ns(C.a.F(a,b)))P.cv(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cv(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.pM(r?a.toLowerCase():a)},
pM:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pU:function(a,b,c){return P.e5(a,b,c,C.R,!1)},
pR:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e5(a,b,c,C.u,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.af(s,"/"))s="/"+s
return P.pV(s,e,f)},
pV:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.af(a,"/"))return P.pX(a,!s||c)
return P.pY(a)},
mb:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bX("Both query and queryParameters specified"))
return P.e5(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a5("")
r.a=""
d.p(0,new P.kA(new P.kB(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pP:function(a,b,c){return P.e5(a,b,c,C.k,!0)},
mc:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.l1(s)
p=H.l1(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b0(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.b2(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
ma:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.F(k,a>>>4)
s[2]=C.a.F(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.im(a,6*q)&63|r
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
o+=3}}return P.fk(s,0,null)},
e5:function(a,b,c,d,e){var s=P.nu(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
nu:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.mc(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cv(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ma(o)}}if(p==null){p=new P.a5("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.t(m)
if(typeof l!=="number")return H.r2(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
nt:function(a){if(C.a.af(a,"."))return!0
return C.a.cR(a,"/.")!==-1},
pY:function(a){var s,r,q,p,o,n,m
if(!P.nt(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.P(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.u(s,"/")},
pX:function(a,b){var s,r,q,p,o,n
if(!P.nt(a))return!b?P.nr(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaQ(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaQ(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.nr(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.u(s,"/")},
nr:function(a){var s,r,q,p=a.length
if(p>=2&&P.ns(C.a.F(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.ak(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pO:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bX("Invalid URL encoding"))}}return s},
md:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.F(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.f!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.V(C.a.t(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.F(a,o)
if(r>127)throw H.c(P.bX("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bX("Truncated URI"))
p.push(P.pO(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.Z.cF(p)},
ns:function(a){var s=a|32
return 97<=s&&s<=122},
n5:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.ag(k,a,r))}}if(q<0&&r>b)throw H.c(P.ag(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaQ(j)
if(p!==44||r!==n+7||!C.a.ag(a,"base64",n+1))throw H.c(P.ag("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.B.je(0,a,m,s)
else{l=P.nu(a,m,s,C.k,!0)
if(l!=null)a=C.a.bb(a,m,s,l)}return new P.jR(a,j,c)},
q5:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kJ(h)
q=new P.kK()
p=new P.kL()
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
nF:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.oh()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.F(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
a1:function a1(a,b){this.a=a
this.b=b},
bG:function bG(a){this.a=a},
ig:function ig(){},
ih:function ih(){},
F:function F(){},
ej:function ej(a){this.a=a},
fu:function fu(){},
eV:function eV(){},
aJ:function aJ(a,b,c,d){var _=this
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
eA:function eA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fE:function fE(a){this.a=a},
fB:function fB(a){this.a=a},
dn:function dn(a){this.a=a},
er:function er(a){this.a=a},
eZ:function eZ(){},
dm:function dm(){},
et:function et(a){this.a=a},
h0:function h0(a){this.a=a},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
eB:function eB(){},
W:function W(){},
C:function C(){},
hv:function hv(){},
a5:function a5(a){this.a=a},
jV:function jV(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kB:function kB(a,b){this.a=a
this.b=b},
kA:function kA(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(a){this.a=a},
kK:function kK(){},
kL:function kL(){},
hl:function hl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fU:function fU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qW:function(a){var s,r,q,p
if(t.I.b(a)){s=J.om(a)
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
return new P.e1(r,q,p)},
qV:function(a){if(a instanceof P.e1)return{data:a.a,height:a.b,width:a.c}
return a},
bA:function(a){var s,r,q,p,o
if(a==null)return null
s=P.N(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.j(0,o,a[o])}return s},
nz:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kM(a))return a
if(t.f.b(a))return P.nL(a)
if(t.x.b(a)){s=[]
J.cH(a,new P.kI(s))
a=s}return a},
nL:function(a){var s={}
J.cH(a,new P.kY(s))
return s},
kv:function kv(){},
kw:function kw(a,b){this.a=a
this.b=b},
kx:function kx(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(a){this.a=a},
kY:function kY(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
ir:function ir(){},
is:function is(){},
hj:function hj(){},
aq:function aq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aX:function aX(){},
eH:function eH(){},
b0:function b0(){},
eW:function eW(){},
jo:function jo(){},
fj:function fj(){},
n:function n(){},
b5:function b5(){},
ft:function ft(){},
h7:function h7(){},
h8:function h8(){},
hf:function hf(){},
hg:function hg(){},
ht:function ht(){},
hu:function hu(){},
hC:function hC(){},
hD:function hD(){},
hY:function hY(){},
em:function em(){},
hZ:function hZ(a){this.a=a},
en:function en(){},
bj:function bj(){},
eY:function eY(){},
fP:function fP(){},
cg:function cg(){},
ff:function ff(){},
hp:function hp(){},
hq:function hq(){}},W={
lK:function(){var s=document.createElement("canvas")
s.toString
return s},
ii:function(a){return"wheel"},
mz:function(a){return W.oG(a,null,null).eS(new W.iw(),t.N)},
oG:function(a,b,c){var s=new P.ae($.H,t.ao),r=new P.dF(s,t.bj),q=new XMLHttpRequest()
q.toString
C.M.jn(q,"GET",a,!0)
W.a_(q,"load",new W.ix(q,r),!1)
W.a_(q,"error",r.giO(),!1)
q.send()
return s},
mA:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.a0(s)}return q},
kq:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ni:function(a,b,c,d){var s=W.kq(W.kq(W.kq(W.kq(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a_:function(a,b,c,d){var s=new W.dI(a,b,c==null?null:W.nI(new W.kc(c),t.aD),!1)
s.iw()
return s},
nI:function(a,b){var s=$.H
if(s===C.e)return a
return s.dZ(a,b)},
o:function o(){},
hU:function hU(){},
eh:function eh(){},
ei:function ei(){},
bE:function bE(){},
bF:function bF(){},
cM:function cM(){},
aK:function aK(){},
i8:function i8(){},
E:function E(){},
cQ:function cQ(){},
i9:function i9(){},
aC:function aC(){},
aV:function aV(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
cR:function cR(){},
cS:function cS(){},
ev:function ev(){},
ie:function ie(){},
fR:function fR(a,b){this.a=a
this.b=b},
B:function B(){},
l:function l(){},
e:function e(){},
ax:function ax(){},
c0:function c0(){},
ex:function ex(){},
ez:function ez(){},
aL:function aL(){},
iv:function iv(){},
bJ:function bJ(){},
aM:function aM(){},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
bK:function bK(){},
bL:function bL(){},
c2:function c2(){},
c4:function c4(){},
bM:function bM(){},
j2:function j2(){},
jj:function jj(){},
c8:function c8(){},
eM:function eM(){},
jk:function jk(a){this.a=a},
eN:function eN(){},
jl:function jl(a){this.a=a},
aP:function aP(){},
eO:function eO(){},
ay:function ay(){},
fQ:function fQ(a){this.a=a},
v:function v(){},
dg:function dg(){},
aQ:function aQ(){},
f1:function f1(){},
b3:function b3(){},
f6:function f6(){},
jv:function jv(a){this.a=a},
f8:function f8(){},
aF:function aF(){},
fd:function fd(){},
aR:function aR(){},
fe:function fe(){},
aS:function aS(){},
fh:function fh(){},
jB:function jB(a){this.a=a},
az:function az(){},
bu:function bu(){},
aG:function aG(){},
au:function au(){},
fl:function fl(){},
fm:function fm(){},
jI:function jI(){},
aH:function aH(){},
bS:function bS(){},
fs:function fs(){},
jM:function jM(){},
b7:function b7(){},
jW:function jW(){},
fJ:function fJ(){},
bv:function bv(){},
cr:function cr(){},
fS:function fS(){},
dH:function dH(){},
h4:function h4(){},
dO:function dO(){},
ho:function ho(){},
hx:function hx(){},
lO:function lO(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
kc:function kc(a){this.a=a},
m2:function m2(a){this.$ti=a},
L:function L(){},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fT:function fT(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
h1:function h1(){},
h2:function h2(){},
h5:function h5(){},
h6:function h6(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hh:function hh(){},
hi:function hi(){},
hk:function hk(){},
dU:function dU(){},
dV:function dV(){},
hm:function hm(){},
hn:function hn(){},
hr:function hr(){},
hy:function hy(){},
hz:function hz(){},
dY:function dY(){},
dZ:function dZ(){},
hA:function hA(){},
hB:function hB(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){}},K={eg:function eg(){},cX:function cX(){},b_:function b_(a){this.a=a},a2:function a2(a){this.a=a}},L={fg:function fg(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},fr:function fr(a,b){this.b=a
this.c=b},jK:function jK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},dq:function dq(a,b){this.b=a
this.c=!1
this.a=b}},O={
lM:function(a){return new O.as(H.b([],a.A("u<0>")),a.A("as<0>"))},
as:function as(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
dc:function dc(a){this.a=a
this.b=null},
nM:function(a){var s=C.a.jb(a,"/")
if(s<=0)return a
return C.a.t(a,0,s)},
nH:function(a){var s,r=$.kV,q=(r==null?$.kV=P.lX("([^\\s]+)"):r).j2(a)
if(q==null)return H.b([],t.s)
r=q.b
if(1>=r.length)return H.d(r,1)
s=r[1]
if(s==null)return H.b([],t.s)
return H.b([s,C.a.d3(C.a.ak(a,s.length))],t.s)},
kU:function(a){var s,r,q,p=H.b([],t.s),o=$.kV
if(o==null)o=$.kV=P.lX("([^\\s]+)")
o=new H.k7(o,a,0)
s=t.cz
for(;o.w();){r=s.a(o.d).b
if(1>=r.length)return H.d(r,1)
q=r[1]
if(q!=null)p.push(q)}return p},
by:function(a){var s,r=O.kU(a),q=H.b([],t.n),p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.d(r,s)
q.push(P.qY(r[s]))}return q},
eP:function(a,b,c){return O.oT(a,b,!1)},
oT:function(a,b,c){var s=0,r=P.aa(t.dB),q,p=2,o,n=[],m,l,k,j,i,h,g
var $async$eP=P.ab(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:p=4
m=O.nM(a)
l=new O.kQ(b,P.N(t.N,t.bM))
s=7
return P.ak(W.mz(a),$async$eP)
case 7:k=e
s=8
return P.ak(l.aC(k,m,!1),$async$eP)
case 8:i=l.b
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o
j=H.a0(g)
P.hS(a+": "+H.t(j))
i=P.f(a+": "+H.t(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a8(q,r)
case 2:return P.a7(o,r)}})
return P.a9($async$eP,r)},
eX:function(a,b){var s=null,r=null,q=!1
return O.oU(a,b)},
oU:function(a1,a2){var s=0,r=P.aa(t.l),q,p=2,o,n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$eX=P.ab(function(a3,a4){if(a3===1){o=a4
s=p}while(true)switch(s){case 0:c=null
b=null
a=!1
p=4
m=O.nM(a1)
i=c
h=P.N(t.N,t.bM)
g=new O.kR(a2,H.b([],t.bP),H.b([],t.b),H.b([],t.hg),h,b,E.ik(null))
f=O.mG()
e=f.gbL()
e.sW(0,new V.Q(0.35,0.35,0.35))
e=f.gbP()
e.sW(0,new V.Q(0.65,0.65,0.65))
g.x=f
if(i!=null)h.bJ(0,i)
g.bG()
l=g
s=7
return P.ak(W.mz(a1),$async$eX)
case 7:k=a4
s=8
return P.ak(l.aC(k,m,a),$async$eX)
case 8:i=b
if(i!=null)i.L(new O.f3())
i=l.giZ()
q=i
s=1
break
p=2
s=6
break
case 4:p=3
a0=o
j=H.a0(a0)
P.hS(a1+": "+H.t(j))
i=P.f(a1+": "+H.t(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a8(q,r)
case 2:return P.a7(o,r)}})
return P.a9($async$eX,r)},
kQ:function kQ(a,b){this.a=a
this.b=b
this.c=null},
hR:function hR(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=""
_.z=_.y=_.x=null
_.Q=g},
f3:function f3(){},
mG:function(){var s=O.lM(t.gc),r=new O.bP(s)
s.bz(r.gh7(),r.gh9())
s=r.dx
if(s==null){s=new D.d2(H.b([],t.i),H.b([],t.U),H.b([],t.J),H.b([],t.D),H.b([],t.e))
s.d8(s.gh5(),s.ghG(),s.ghK())
s.gv().l(0,r.gdH())
s.gez().l(0,r.gbj())
r.dx=s}s.gv().l(0,r.gdH())
s.gez().l(0,r.gbj())
return r},
eL:function(a,b){return new O.da(new V.Q(0,0,0),a,b,new A.ap(!1,!1,!1))},
cY:function cY(a,b,c,d,e,f,g,h,i){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=!1
_.r2=1
_.rx=null},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a},
iz:function iz(a){this.a=a},
iy:function iy(a){this.a=a},
bP:function bP(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(){},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(){},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(){},
jh:function jh(a,b){this.a=a
this.b=b},
ji:function ji(){},
j5:function j5(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d9:function d9(){},
j6:function j6(a,b,c){var _=this
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
j8:function j8(a){this.b=a},
j9:function j9(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
ja:function ja(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
cj:function cj(){}},E={
ik:function(a){var s=O.lM(t.l),r=new E.at(s)
s.bz(r.gjf(),r.gji())
r.sd9(0,a)
r.sbd(null)
r.sbr(null)
return r},
nf:function(){var s=window.navigator.vendor
s.toString
if(C.a.R(s,"Google"))return C.z
s=window.navigator.userAgent
s.toString
if(C.a.R(s,"Firefox"))return C.o
s=window.navigator.appVersion
s.toString
if(C.a.R(s,"Trident")||C.a.R(s,"Edge"))return C.p
s=window.navigator.appName
s.toString
if(C.a.R(s,"Microsoft"))return C.p
return C.A},
ng:function(){var s=window.navigator.appVersion
s.toString
if(C.a.R(s,"Win"))return C.V
if(C.a.R(s,"Mac"))return C.v
if(C.a.R(s,"Linux"))return C.W
return C.X},
p7:function(a,b){var s
Date.now()
s=t.fA
s=new E.jr(a,new P.a1(Date.now(),!1),new P.a1(Date.now(),!1),new O.dc(H.b([],s)),new O.dc(H.b([],s)),new O.dc(H.b([],s)),H.b([null],t.bc),P.N(t.N,t.fg))
s.fb(a,b)
return s},
pg:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.n1(a,!0,!0,!0,!1)
s=W.lK()
r=s.style
r.width="100%"
r.height="100%"
J.ol(a).l(0,s)
return E.n1(s,!0,!0,!0,!1)},
n1:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.gW.a(C.i.d5(a,"webgl2",P.oP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.p7(l,a)
m=H.kF(l.getParameter(3379))
H.kF(l.getParameter(34076))
r=H.b([],t.g9)
q=$.il
p=new X.fH(a,r,(q==null?$.il=new E.fZ(E.nf(),E.ng()):q).a===C.o?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a_(o,"contextmenu",p.ghh(),!1))
r.push(W.a_(a,"focus",p.ghn(),!1))
r.push(W.a_(a,"blur",p.ghb(),!1))
r.push(W.a_(o,"keyup",p.ghr(),!1))
r.push(W.a_(o,"keydown",p.ghp(),!1))
r.push(W.a_(a,"mousedown",p.ghv(),!1))
r.push(W.a_(a,"mouseup",p.ghz(),!1))
r.push(W.a_(a,n,p.ghx(),!1))
W.ii(a)
W.ii(a)
r.push(W.a_(a,W.ii(a),p.ghB(),!1))
r.push(W.a_(o,n,p.ghj(),!1))
r.push(W.a_(o,"mouseup",p.ghl(),!1))
r.push(W.a_(o,"pointerlockchange",p.ghD(),!1))
r.push(W.a_(a,"touchstart",p.ghQ(),!1))
r.push(W.a_(a,"touchend",p.ghM(),!1))
r.push(W.a_(a,"touchmove",p.ghO(),!1))
m=new E.fp(a,s,new T.jF(l,m),p,new P.a1(Date.now(),!1))
m.dJ()
return m},
i1:function i1(){},
at:function at(a){var _=this
_.a=""
_.b=!0
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bY:function bY(a){this.b=a},
cc:function cc(a){this.b=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c,d,e,f,g,h){var _=this
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
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
fp:function fp(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
jH:function jH(a){this.a=a}},Z={
m1:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cw(c)),35044)
a.bindBuffer(b,null)
return new Z.fK(b,s)},
aI:function(a){return new Z.b8(a)},
fK:function fK(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fL:function fL(a){this.a=a},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eo:function eo(a){this.a=a},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a}},D={
K:function(){return new D.bH()},
i3:function i3(){},
bH:function bH(){var _=this
_.c=_.b=_.a=null
_.d=0},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
R:function R(){},
bm:function bm(){},
bn:function bn(){},
w:function w(a,b,c){this.c=a
this.d=b
this.e=c},
d2:function d2(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.d=_.c=_.b=null}},X={cL:function cL(a,b){this.a=a
this.b=b},eG:function eG(a,b){this.a=a
this.b=b},iZ:function iZ(a,b){this.c=a
this.d=b},d5:function d5(a,b,c){this.x=a
this.c=b
this.d=c},j3:function j3(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},c9:function c9(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},jm:function jm(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},ca:function ca(a,b,c){this.x=a
this.c=b
this.d=c},f2:function f2(){},dp:function dp(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jL:function jL(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fH:function fH(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
oF:function(a){var s=new V.J(0,0,0,1),r=$.mT
if(r==null){r=V.mS(0,0,1,1)
$.mT=r}return new X.iu(s,r)},
iu:function iu(a,b){this.a=a
this.r=b
this.x=null},
f_:function f_(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jD:function jD(){}},V={
lN:function(a){var s,r,q=a.length
if(0>=q)return H.d(a,0)
s=a[0]
if(1>=q)return H.d(a,1)
r=a[1]
if(2>=q)return H.d(a,2)
q=a[2]
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.Q(s,r,q)},
oy:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.bQ(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:if(b<0)n=0
else n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.Q(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
if(b<0)m=0
else m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.Q(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
if(b<0)m=0
else m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.Q(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
if(b<0)l=0
else l=b>1?1:b
return new V.Q(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
if(b<0)l=0
else l=b>1?1:b
return new V.Q(n,m,l)
default:if(b<0)n=0
else n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.Q(n,m,l)}},
eq:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.J(a,a,a,1)},
oz:function(a){return new V.J(a.a,a.b,a.c,1)},
ri:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.by(a-b,s)
return(a<0?a+s:a)+b},
z:function(a,b,c){$.A().toString
return C.a.au(C.d.d1(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cC:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.r)(a),++p){o=a[p]
$.A().toString
n=C.a.au(C.d.d1(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.au(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
mo:function(a){return C.d.jQ(Math.pow(2,C.d.bQ(Math.log(a)/Math.log(2))))},
aO:function(){var s=$.mK
return s==null?$.mK=V.aZ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aZ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mJ:function(a,b,c){return V.aZ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mI:function(a,b,c){return V.aZ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
lW:function(){var s=$.b1
return s==null?$.b1=new V.ah(0,0,0):s},
mS:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f5(a,b,c,d)},
lY:function(){var s=$.mV
return s==null?$.mV=V.mU(0,0,0,0,0,0):s},
mW:function(a,b){var s,r,q,p,o,n,m,l,k
if(a==null)return b==null?V.lY():b
if(b==null)return a
s=a.a
r=b.a
q=Math.min(s,r)
p=a.b
o=b.b
n=Math.min(p,o)
m=a.c
l=b.c
k=Math.min(m,l)
return new V.cf(q,n,k,Math.max(s+a.d,r+b.d)-q,Math.max(p+a.e,o+b.e)-n,Math.max(m+a.f,l+b.f)-k)},
mU:function(a,b,c,d,e,f){return new V.cf(a,b,c,d,e,f)},
U:function(){var s=$.nc
return s==null?$.nc=new V.X(0,0,0):s},
ne:function(){var s=$.na
return s==null?$.na=new V.X(1,0,0):s},
nd:function(){var s=$.n9
return s==null?$.n9=new V.X(0,0,-1):s},
pm:function(a,b,c){return new V.X(a,b,c)},
pn:function(a){return new V.X(a.a,a.b,a.c)},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(){},
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
bq:function bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aj:function aj(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
rd:function(a){P.ph(C.L,new V.lG(a))},
mO:function(a){var s=document.getElementById(a)
if(s==null)throw H.c(P.f("Failed to find "+a+" for RadioGroup"))
return new V.jp(a,!0,s)},
p9:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a_(n,"scroll",new V.jz(s),!1)
return new V.jx(o)},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lG:function lG(a){this.a=a},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jx:function jx(a){this.a=a
this.b=null},
jz:function jz(a){this.a=a},
jy:function jy(a){this.a=a}},U={
i7:function(){return new U.i6()},
i6:function i6(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cN:function cN(a){this.a=a
this.b=null},
c1:function c1(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.d=_.c=_.b=null},
a3:function a3(){},
dB:function dB(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dC:function dC(a,b,c,d,e){var _=this
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
dD:function dD(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={ew:function ew(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
oS:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+a9.gai(a9)+b0.gai(b0)+b1.gai(b1)+b2.gai(b2)+b3.gai(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.r)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.r)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.bh()
if(h){s=$.bg()
b=new Z.b8(b.a|s.a)}if(g)b=new Z.b8(b.a|$.bf().a)
if(f)b=new Z.b8(b.a|$.bD().a)
if(e)b=new Z.b8(b.a|$.bC().a)
return new A.j7(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kO:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kP:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kO(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hT(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
qq:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kO(b,r,"emission")
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
qm:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kP(b,r,"ambient")
b.a+="\n"},
qo:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kP(b,r,"diffuse")
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
qr:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kP(b,r,"invDiffuse")
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
qx:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kP(b,r,"specular")
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
qt:function(a,b){var s,r,q
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
qv:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kO(b,r,"reflect")
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
qw:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kO(b,r,"refract")
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
qn:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hT(r)
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
o=H.b([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.u(o," * ")+";\n"
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
n=H.b([],p)
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.u(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.u(o," + ")+");\n"
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
qp:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hT(r)
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
if(a.dx){c.a+=u.h
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
c.a+="      highLight = intensity*("+C.b.u(k," + ")+");\n"}else c.a+="   highLight = "+C.b.u(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.u(m," + ")+");\n"
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
qu:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hT(r)
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
j=H.b([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.b.u(j," * ")+";\n"
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
if(a.dx){c.a+=u.h
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
p=c.a+="      highLight = intensity*("+C.b.u(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.u(j," + ")+");\n"
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
qy:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hT(r)
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
if(m){s=$.il
if(s==null)s=$.il=new E.fZ(E.nf(),E.ng())
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
s+=u.S
c.a=s
s+=u.U
c.a=s
c.a=s+"\n"}s=t.s
h=H.b([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.b.u(h," * ")+";\n"
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
if(a.dx){c.a+=u.h
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
s=c.a+="      highLight = intensity*("+C.b.u(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.u(h," + ")+");\n"
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
qs:function(a,b){var s,r
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
s=b.a+="   return "+C.b.u(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
qz:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a5(""),j=""+"precision mediump float;\n"
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
A.qq(a,k)
A.qm(a,k)
A.qo(a,k)
A.qr(a,k)
A.qx(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.qv(a,k)
A.qw(a,k)}A.qt(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.qn(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.qp(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.qu(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.qy(a,p[n],k)
A.qs(a,k)}p=k.a+="// === Main ===\n"
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
if(q){k.a+=u.N
m.push("lightAccum")
j=a.b
if(j.a||j.b||!1)k.a+="   setAmbientColor();\n"
j=a.c
if(j.a||j.b||!1)k.a+="   setDiffuseColor();\n"
j=a.d
if(j.a||j.b||!1)k.a+="   setInvDiffuseColor();\n"
j=a.e
if(j.a||j.b||!1)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.u(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
qA:function(a,b){var s,r,q
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
qC:function(a,b){var s
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
qB:function(a,b){var s
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
qE:function(a,b){var s,r
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
qF:function(a,b){var s,r
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
qD:function(a,b){var s
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
qG:function(a,b){var s
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
hT:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ak(a,1)},
m0:function(a,b,c,d,e){var s=new A.fv(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eJ(d,0,!1,t.S)
return s},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
d8:function d8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.k8=_.el=_.ek=_.k7=_.ej=_.ei=_.eh=_.k6=_.eg=_.ef=_.ee=_.k5=_.ed=_.ec=_.k0=_.eb=_.ea=_.e9=_.b6=_.b5=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cH=c
_.cI=d
_.cJ=e
_.cK=f
_.cL=g
_.cM=h
_.cN=i
_.cO=j
_.kb=_.ka=_.k9=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
bi:function bi(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
br:function br(a,b){this.a=a
this.b=b},
bt:function bt(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b6=b6
_.e9=b7},
du:function du(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dv:function dv(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dx:function dx(a,b,c,d,e,f,g,h,i,j){var _=this
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
dA:function dA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ch:function ch(){},
a6:function a6(){},
jP:function jP(a){this.a=a},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
fx:function fx(a,b,c){this.a=a
this.c=b
this.d=c},
fy:function fy(a,b,c){this.a=a
this.c=b
this.d=c},
fz:function fz(a,b,c){this.a=a
this.c=b
this.d=c},
fv:function fv(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dr:function dr(a,b,c){this.a=a
this.c=b
this.d=c},
fw:function fw(a,b,c){this.a=a
this.c=b
this.d=c},
ds:function ds(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
fA:function fA(a,b,c){this.a=a
this.c=b
this.d=c},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ai:function(){return new F.ar()},
cq:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.aA()
h=$.oc()
s=$.bh()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bg().a)!==0)q.r=e
if((r&$.bf().a)!==0)q.x=b
if((r&$.bD().a)!==0)q.y=f
if((r&$.bW().a)!==0)q.z=g
if((r&$.od().a)!==0)q.Q=c
if((r&$.cG().a)!==0)q.ch=i
if((r&$.bC().a)!==0)q.cx=a
return q},
bI:function bI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(){this.b=this.a=null},
cd:function cd(){this.a=null},
ar:function ar(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jw:function jw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
aA:function aA(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
k6:function k6(a){this.a=a},
k5:function k5(a){this.a=a},
Z:function Z(a,b){this.a=a
this.b=!1
this.c=b},
k1:function k1(a,b,c){this.b=a
this.c=b
this.d=c},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.b=a
this.c=b},
k4:function k4(a){this.b=a}},T={ck:function ck(){},fn:function fn(){},fo:function fo(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},jF:function jF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},jG:function jG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
r9:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="controls",b="modifiers",a={},a0=V.p9("Test 032"),a1=W.lK()
a1.className="pageLargeCanvas"
a1.id=e
a0.a.appendChild(a1).toString
s=t.s
a0.dU(H.b(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],s))
a0.iI(H.b(["controls","shapes","scalars"],s))
a0.dU(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(e)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.pg(r,!0,!0,!0,!1)
a.a=!0
p=E.ik(d)
a0=new U.c1(V.aO(),H.b([],t.eJ))
a0.bz(a0.gh3(),a0.ghI())
o=q.x
n=U.i7()
m=U.i7()
l=$.bU
if(l==null)l=$.bU=new V.aj(0,0)
l=new U.dC(n,m,new X.am(!1,!1,!1),l,V.aO())
n.sd4(0,!0)
n.scT(6.283185307179586)
n.scV(0)
n.sac(0,0)
n.scU(100)
n.sa4(0)
n.scG(0.5)
k=l.gaY()
n.gv().l(0,k)
m.sd4(0,!0)
m.scT(6.283185307179586)
m.scV(0)
m.sac(0,0)
m.scU(100)
m.sa4(0)
m.scG(0.5)
m.gv().l(0,k)
n=new X.am(!1,!1,!1)
if(!l.d.n(0,n)){j=l.d
l.d=n
l.T(new D.w(b,j,n))}if(!l.r){l.r=!0
l.T(new D.w("invertY",!1,!0))}l.bo(o)
a0.l(0,l)
U.i7()
if($.bU==null)$.bU=new V.aj(0,0)
V.aO()
n=U.i7()
m=$.bU
if(m==null)m=$.bU=new V.aj(0,0)
m=new U.dB(n,new X.am(!1,!1,!1),m,V.aO())
n.sd4(0,!0)
n.scT(6.283185307179586)
n.scV(0)
n.sac(0,0)
n.scU(100)
n.sa4(0)
n.scG(0.2)
n.gv().l(0,m.gaY())
n=new X.am(!0,!1,!1)
if(!m.c.n(0,n)){j=m.c
m.c=n
m.T(new D.w(b,j,n))}m.bo(o)
a0.l(0,m)
n=new X.am(!1,!1,!1)
m=new U.dD(n,V.aO())
l=new X.am(!1,!1,!1)
if(!n.n(0,l)){m.b=l
m.T(new D.w(b,n,l))}m.bo(o)
a0.l(0,m)
p.sbr(a0)
a0=V.nd()
o=V.eq(0.7)
n=V.eq(0.3)
m=V.eq(0.5)
l=V.eq(0.5)
i=new O.cY(a0,new V.J(0.2,0.3,0.4,1),new V.J(0.1,0.2,0.3,1),o,n,m,l,new V.J(1,1,1,1),V.eq(0.8))
i.saj(0.4)
a0=O.lM(t.l)
o=new M.ew(a0)
a0.bz(o.ghd(),o.ghf())
h=X.oF(d)
g=new X.f_(1.0471975511965976,0.1)
g.sbr(d)
n=g.c
$.A().toString
if(!(Math.abs(n-1.0471975511965976)<1e-9)){g.c=1.0471975511965976
g.aV(new D.w("fov",n,1.0471975511965976))}n=g.d
$.A().toString
if(!(Math.abs(n-0.1)<1e-9)){g.d=0.1
g.aV(new D.w("near",n,0.1))}n=g.e
$.A().toString
if(!(Math.abs(n-2000)<1e-9)){g.e=2000
g.aV(new D.w("far",n,2000))}n=o.b
if(n!==g){if(n!=null)n.gv().Y(0,o.gaE())
j=o.b
o.b=g
g.gv().l(0,o.gaE())
o.aH(new D.w("camera",j,o.b))}n=o.c
if(n!==h){if(n!=null)n.gv().Y(0,o.gaE())
j=o.c
o.c=h
h.gv().l(0,o.gaE())
o.aH(new D.w("target",j,o.c))}o.sbd(d)
o.sbd(i)
a0.l(0,p)
a0=o.b
if(a0!=null){f=V.mJ(0,0,5)
n=V.aO()
m=new U.cN(n)
if(!n.n(0,f))m.a=f
a0.sbr(m)}a0=q.d
if(a0!==o){if(a0!=null)a0.gv().Y(0,q.gde())
q.d=o
o.gv().l(0,q.gde())
q.df()}r=s.getElementById(c)
if(r==null)H.h(P.f("Failed to find controls for CheckGroup"))
a0=new V.i4(c,!0,r,H.b([],t.dh))
a0.a9(0,"Material",new G.l6(a,p),!0)
a0.q(0,"Filled",new G.l7(i))
a0.a9(0,"Wire Frame",new G.l8(i),!0)
a0.q(0,"Vertices",new G.lj(i))
a0.q(0,"Normals",new G.lu(i))
a0.q(0,"Binormals",new G.lw(i))
a0.q(0,"Tangentals",new G.lx(i))
a0.q(0,"Face Centers",new G.ly(i))
a0.q(0,"Face Normals",new G.lz(i))
a0.q(0,"Face Binormals",new G.lA(i))
a0.q(0,"Face Tangentals",new G.lB(i))
a0.q(0,"Colors",new G.l9(i))
a0.q(0,"Textures2D",new G.la(i))
a0.q(0,"TexturesCube",new G.lb(i))
a0.q(0,"Weight",new G.lc(i))
a0.a9(0,"Axis",new G.ld(i),!0)
a0.q(0,"AABB",new G.le(i))
a=new G.lE(a,q,p,new G.lC(),i)
a0=V.mO("shapes")
a0.a9(0,"Cube",new G.lf(a),!0)
a0.q(0,"Low Poly Tree",new G.lg(a))
a0.q(0,"Low Poly Wolf",new G.lh(a))
a0.q(0,"Plant",new G.li(a))
a=V.mO("scalars")
a.q(0,"0.01",new G.lk(i))
a.q(0,"0.02",new G.ll(i))
a.q(0,"0.04",new G.lm(i))
a.q(0,"0.06",new G.ln(i))
a.q(0,"0.08",new G.lo(i))
a.q(0,"0.1",new G.lp(i))
a.q(0,"0.2",new G.lq(i))
a.a9(0,"0.4",new G.lr(i),!0)
a.q(0,"0.6",new G.ls(i))
a.q(0,"0.8",new G.lt(i))
a.q(0,"1.0",new G.lv(i))
V.rd(q)},
l6:function l6(a,b){this.a=a
this.b=b},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
lj:function lj(a){this.a=a},
lu:function lu(a){this.a=a},
lw:function lw(a){this.a=a},
lx:function lx(a){this.a=a},
ly:function ly(a){this.a=a},
lz:function lz(a){this.a=a},
lA:function lA(a){this.a=a},
lB:function lB(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lC:function lC(){},
lD:function lD(a,b){this.a=a
this.b=b},
lE:function lE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a){this.a=a},
lk:function lk(a){this.a=a},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
lp:function lp(a){this.a=a},
lq:function lq(a){this.a=a},
lr:function lr(a){this.a=a},
ls:function ls(a){this.a=a},
lt:function lt(a){this.a=a},
lv:function lv(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lS.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.di(a)},
i:function(a){return"Instance of '"+H.dj(a)+"'"}}
J.eC.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iba:1}
J.c5.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iW:1}
J.bp.prototype={
gG:function(a){return 0},
i:function(a){return String(a)},
$imB:1}
J.f0.prototype={}
J.bT.prototype={}
J.aW.prototype={
i:function(a){var s=a[$.nZ()]
if(s==null)return this.f6(a)
return"JavaScript function for "+J.ef(s)}}
J.u.prototype={
Y:function(a,b){var s
if(!!a.fixed$length)H.h(P.y("remove"))
for(s=0;s<a.length;++s)if(J.P(a[s],b)){a.splice(s,1)
return!0}return!1},
bJ:function(a,b){if(!!a.fixed$length)H.h(P.y("addAll"))
this.fl(a,b)
return},
fl:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.bk(a))
for(s=0;s<r;++s)a.push(b[s])},
p:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bk(a))}},
u:function(a,b){var s,r,q=a.length,p=P.eJ(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.t(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
ja:function(a){return this.u(a,"")},
j3:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bk(a))}return s},
j4:function(a,b,c){return this.j3(a,b,c,t.z)},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gaQ:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.oI())},
bi:function(a,b){if(!!a.immutable$list)H.h(P.y("sort"))
H.pc(a,b==null?J.qd():b)},
f3:function(a){return this.bi(a,null)},
R:function(a,b){var s
for(s=0;s<a.length;++s)if(J.P(a[s],b))return!0
return!1},
i:function(a){return P.lP(a,"[","]")},
ga2:function(a){return new J.al(a,a.length)},
gG:function(a){return H.di(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.h(P.y("set length"))
if(b>a.length)H.nx(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cB(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.h(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cB(a,b))
a[b]=c},
$im:1,
$ik:1,
$ip:1}
J.iW.prototype={}
J.al.prototype={
gN:function(a){return H.O(this).c.a(this.d)},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c6.prototype={
ap:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbS(b)
if(this.gbS(a)===s)return 0
if(this.gbS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbS:function(a){return a===0?1/a<0:a<0},
jQ:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.y(""+a+".toInt()"))},
bQ:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.y(""+a+".floor()"))},
aD:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
d1:function(a,b){var s
if(b>20)throw H.c(P.an(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbS(a))return"-"+s
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
by:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
f7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dM(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dM(a,b)},
dM:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.y("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
b0:function(a,b){var s
if(a>0)s=this.dL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
im:function(a,b){if(b<0)throw H.c(H.eb(b))
return this.dL(a,b)},
dL:function(a,b){return b>31?0:a>>>b},
$iI:1,
$iaf:1}
J.d0.prototype={$ij:1}
J.eD.prototype={}
J.bo.prototype={
U:function(a,b){if(b<0)throw H.c(H.cB(a,b))
if(b>=a.length)H.h(H.cB(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cB(a,b))
return a.charCodeAt(b)},
J:function(a,b){return a+b},
bb:function(a,b,c,d){var s=P.bs(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ag:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.an(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
af:function(a,b){return this.ag(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f4(b,null))
if(b>c)throw H.c(P.f4(b,null))
if(c>a.length)throw H.c(P.f4(c,null))
return a.substring(b,c)},
ak:function(a,b){return this.t(a,b,null)},
d3:function(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.F(p,0)===133){s=J.oM(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.U(p,r)===133?J.oN(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
S:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.I)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
au:function(a,b){var s=b-a.length
if(s<=0)return a
return this.S(" ",s)+a},
jo:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.S(c,s)},
bR:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.an(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cR:function(a,b){return this.bR(a,b,0)},
jb:function(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
iP:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.an(c,0,s,null,null))
return H.nU(a,b,c)},
R:function(a,b){return this.iP(a,b,0)},
ap:function(a,b){var s
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
gk:function(a){return a.length},
$iq:1}
H.d1.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.V.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.m.prototype={}
H.c7.prototype={
gN:function(a){return H.O(this).c.a(this.d)},
w:function(){var s,r=this,q=r.a,p=J.cD(q),o=p.gk(q)
if(r.b!==o)throw H.c(P.bk(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.K(q,s);++r.c
return!0}}
H.aY.prototype={
ga2:function(a){return new H.eK(J.aT(this.a),this.b)},
gk:function(a){return J.aw(this.a)},
K:function(a,b){return this.b.$1(J.lI(this.a,b))}}
H.cT.prototype={$im:1}
H.eK.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gN(r))
return!0}s.a=null
return!1},
gN:function(a){return H.O(this).Q[1].a(this.a)}}
H.dE.prototype={
ga2:function(a){return new H.fM(J.aT(this.a),this.b)}}
H.fM.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gN(s)))return!0
return!1},
gN:function(a){var s=this.a
return s.gN(s)}}
H.cV.prototype={}
H.fD.prototype={
j:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.co.prototype={}
H.cO.prototype={
i:function(a){return P.lV(this)},
j:function(a,b,c){H.oA()},
$iD:1}
H.cP.prototype={
gk:function(a){return this.a},
cE:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cE(0,b))return null
return this.dz(b)},
dz:function(a){return this.b[a]},
p:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dz(q))}}}
H.jN.prototype={
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
H.dh.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eF.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fC.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.jn.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.cU.prototype={}
H.dW.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib4:1}
H.c_.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nX(r==null?"unknown":r)+"'"},
gjV:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.jE.prototype={}
H.jA.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nX(s)+"'"}}
H.cI.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cI))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.di(this.a)
else s=typeof r!=="object"?J.lJ(r):H.di(r)
return(s^H.di(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.dj(s)+"'")}}
H.f7.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Y.prototype={
gk:function(a){return this.a},
gar:function(a){return new H.d3(this,H.O(this).A("d3<1>"))},
gjU:function(a){var s=this,r=H.O(s)
return H.oR(s.gar(s),new H.iY(s),r.c,r.Q[1])},
cE:function(a,b){var s=this.b
if(s==null)return!1
return this.fG(s,b)},
bJ:function(a,b){J.cH(b,new H.iX(this))},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bC(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bC(p,b)
q=r==null?n:r.b
return q}else return o.j8(b)},
j8:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dA(p,q.eu(a))
r=q.ev(s,a)
if(r<0)return null
return s[r].b},
j:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.dk(s==null?q.b=q.ck():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.dk(r==null?q.c=q.ck():r,b,c)}else q.j9(b,c)},
j9:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.ck()
s=p.eu(a)
r=p.dA(o,s)
if(r==null)p.cu(o,s,[p.cl(a,b)])
else{q=p.ev(r,a)
if(q>=0)r[q].b=b
else r.push(p.cl(a,b))}},
p:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bk(s))
r=r.c}},
dk:function(a,b,c){var s=this.bC(a,b)
if(s==null)this.cu(a,b,this.cl(b,c))
else s.b=c},
cl:function(a,b){var s=this,r=new H.j_(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
eu:function(a){return J.lJ(a)&0x3ffffff},
ev:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1},
i:function(a){return P.lV(this)},
bC:function(a,b){return a[b]},
dA:function(a,b){return a[b]},
cu:function(a,b,c){a[b]=c},
fJ:function(a,b){delete a[b]},
fG:function(a,b){return this.bC(a,b)!=null},
ck:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cu(r,s,r)
this.fJ(r,s)
return r}}
H.iY.prototype={
$1:function(a){var s=this.a
return H.O(s).Q[1].a(s.h(0,a))},
$S:function(){return H.O(this.a).A("2(1)")}}
H.iX.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:function(){return H.O(this.a).A("~(1,2)")}}
H.j_.prototype={}
H.d3.prototype={
gk:function(a){return this.a.a},
ga2:function(a){var s=this.a,r=new H.eI(s,s.r)
r.c=s.e
return r}}
H.eI.prototype={
gN:function(a){return H.O(this).c.a(this.d)},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bk(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.l2.prototype={
$1:function(a){return this.a(a)},
$S:50}
H.l3.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.l4.prototype={
$1:function(a){return this.a(a)},
$S:32}
H.eE.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gh0:function(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=H.mD(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
j2:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.dN(s)},
fL:function(a,b){var s,r=this.gh0()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new H.dN(s)},
$imQ:1}
H.dN.prototype={$imR:1}
H.k7.prototype={
gN:function(a){return t.cz.a(this.d)},
w:function(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.fL(l,s)
if(p!=null){m.d=p
s=p.b
o=s.index
n=o+s[0].length
if(o===n){if(q.b.unicode){s=m.c
q=s+1
if(q<r){s=C.a.U(l,s)
if(s>=55296&&s<=56319){s=C.a.U(l,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
n=(s?n+1:n)+1}m.c=n
return!0}}m.b=m.d=null
return!1}}
H.dd.prototype={$idd:1}
H.a4.prototype={$ia4:1}
H.cb.prototype={
gk:function(a){return a.length},
$ix:1}
H.bQ.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]},
j:function(a,b,c){H.b9(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.de.prototype={
j:function(a,b,c){H.b9(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.eQ.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eR.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.df.prototype={
gk:function(a){return a.length},
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.bR.prototype={
gk:function(a){return a.length},
h:function(a,b){H.b9(b,a,a.length)
return a[b]},
$ibR:1,
$icl:1}
H.dP.prototype={}
H.dQ.prototype={}
H.dR.prototype={}
H.dS.prototype={}
H.aE.prototype={
A:function(a){return H.hF(v.typeUniverse,this,a)},
aI:function(a){return H.pK(v.typeUniverse,this,a)}}
H.h3.prototype={}
H.h_.prototype={
i:function(a){return this.a}}
H.e0.prototype={}
P.k9.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:18}
P.k8.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
P.ka.prototype={
$0:function(){this.a.$0()},
$S:14}
P.kb.prototype={
$0:function(){this.a.$0()},
$S:14}
P.e_.prototype={
fe:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cA(new P.kz(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ff:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cA(new P.ky(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$ijJ:1}
P.kz.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.ky.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.f7(s,o)}q.c=p
r.d.$1(q)},
$S:14}
P.fN.prototype={
cD:function(a,b){var s,r=this
if(b==null)b=r.$ti.c.a(b)
if(!r.b)r.a.dl(b)
else{s=r.a
if(r.$ti.A("aD<1>").b(b))s.ds(b)
else s.c5(b)}},
bO:function(a,b){var s=this.a
if(this.b)s.bk(a,b)
else s.dm(a,b)}}
P.kG.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:19}
P.kH.prototype={
$2:function(a,b){this.a.$2(1,new H.cU(a,b))},
$S:38}
P.kW.prototype={
$2:function(a,b){this.a(a,b)},
$S:47}
P.ct.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.cu.prototype={
gN:function(a){var s=this.c
if(s==null)return this.b
return s.gN(s)},
w:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.w())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.ct){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aT(s)
if(o instanceof P.cu){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dX.prototype={
ga2:function(a){return new P.cu(this.a())}}
P.ek.prototype={
i:function(a){return H.t(this.a)},
$iF:1,
gbB:function(){return this.b}}
P.dG.prototype={
bO:function(a,b){var s
H.kX(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.c(P.n_("Future already completed"))
if(b==null)b=P.mt(a)
s.dm(a,b)},
e3:function(a){return this.bO(a,null)}}
P.dF.prototype={
cD:function(a,b){var s=this.a
if(s.a!==0)throw H.c(P.n_("Future already completed"))
s.dl(b)}}
P.cs.prototype={
jd:function(a){if((this.c&15)!==6)return!0
return this.b.b.d_(this.d,a.a)},
j7:function(a){var s=this.e,r=a.a,q=this.b.b
if(t.ag.b(s))return q.jJ(s,r,a.b)
else return q.d_(s,r)}}
P.ae.prototype={
d0:function(a,b,c){var s,r,q=$.H
if(q!==C.e)b=b!=null?P.qI(b,q):b
s=new P.ae(q,c.A("ae<0>"))
r=b==null?1:3
this.c1(new P.cs(s,r,a,b,this.$ti.A("@<1>").aI(c).A("cs<1,2>")))
return s},
eS:function(a,b){return this.d0(a,null,b)},
dN:function(a,b,c){var s=new P.ae($.H,c.A("ae<0>"))
this.c1(new P.cs(s,19,a,b,this.$ti.A("@<1>").aI(c).A("cs<1,2>")))
return s},
c1:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.c1(a)
return}r.a=s
r.c=q.c}P.cy(null,null,r.b,new P.kd(r,a))}},
dF:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.dF(a)
return}m.a=n
m.c=s.c}l.a=m.bF(a)
P.cy(null,null,m.b,new P.kk(l,m))}},
cr:function(){var s=this.c
this.c=null
return this.bF(s)},
bF:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fA:function(a){var s,r,q,p=this
p.a=1
try{a.d0(new P.kg(p),new P.kh(p),t.P)}catch(q){s=H.a0(q)
r=H.bc(q)
P.rc(new P.ki(p,s,r))}},
c5:function(a){var s=this,r=s.cr()
s.a=4
s.c=a
P.dJ(s,r)},
bk:function(a,b){var s=this,r=s.cr(),q=P.hW(a,b)
s.a=8
s.c=q
P.dJ(s,r)},
dl:function(a){if(this.$ti.A("aD<1>").b(a)){this.ds(a)
return}this.fn(a)},
fn:function(a){this.a=1
P.cy(null,null,this.b,new P.kf(this,a))},
ds:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.cy(null,null,s.b,new P.kj(s,a))}else P.m3(a,s)
return}s.fA(a)},
dm:function(a,b){this.a=1
P.cy(null,null,this.b,new P.ke(this,a,b))},
$iaD:1}
P.kd.prototype={
$0:function(){P.dJ(this.a,this.b)},
$S:0}
P.kk.prototype={
$0:function(){P.dJ(this.b,this.a.a)},
$S:0}
P.kg.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.c5(p.$ti.c.a(a))}catch(q){s=H.a0(q)
r=H.bc(q)
p.bk(s,r)}},
$S:18}
P.kh.prototype={
$2:function(a,b){this.a.bk(a,b)},
$S:30}
P.ki.prototype={
$0:function(){this.a.bk(this.b,this.c)},
$S:0}
P.kf.prototype={
$0:function(){this.a.c5(this.b)},
$S:0}
P.kj.prototype={
$0:function(){P.m3(this.b,this.a)},
$S:0}
P.ke.prototype={
$0:function(){this.a.bk(this.b,this.c)},
$S:0}
P.kn.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.jH(q.d)}catch(p){s=H.a0(p)
r=H.bc(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.hW(s,r)
o.b=!0
return}if(l instanceof P.ae&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.eS(new P.ko(n),t.z)
q.b=!1}},
$S:0}
P.ko.prototype={
$1:function(a){return this.a},
$S:33}
P.km.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.d_(p.d,this.b)}catch(o){s=H.a0(o)
r=H.bc(o)
q=this.a
q.c=P.hW(s,r)
q.b=!0}},
$S:0}
P.kl.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.jd(s)&&p.a.e!=null){p.c=p.a.j7(s)
p.b=!1}}catch(o){r=H.a0(o)
q=H.bc(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=P.hW(r,q)
n.b=!0}},
$S:0}
P.fO.prototype={}
P.ci.prototype={}
P.fi.prototype={}
P.hs.prototype={}
P.kE.prototype={}
P.kT.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:0}
P.ks.prototype={
jL:function(a){var s,r,q,p=null
try{if(C.e===$.H){a.$0()
return}P.nD(p,p,this,a)}catch(q){s=H.a0(q)
r=H.bc(q)
P.kS(p,p,this,s,r)}},
jN:function(a,b){var s,r,q,p=null
try{if(C.e===$.H){a.$1(b)
return}P.nE(p,p,this,a,b)}catch(q){s=H.a0(q)
r=H.bc(q)
P.kS(p,p,this,s,r)}},
jO:function(a,b){return this.jN(a,b,t.z)},
cA:function(a){return new P.kt(this,a)},
dZ:function(a,b){return new P.ku(this,a,b)},
jI:function(a){if($.H===C.e)return a.$0()
return P.nD(null,null,this,a)},
jH:function(a){return this.jI(a,t.z)},
jM:function(a,b){if($.H===C.e)return a.$1(b)
return P.nE(null,null,this,a,b)},
d_:function(a,b){return this.jM(a,b,t.z,t.z)},
jK:function(a,b,c){if($.H===C.e)return a.$2(b,c)
return P.qJ(null,null,this,a,b,c)},
jJ:function(a,b,c){return this.jK(a,b,c,t.z,t.z,t.z)},
jC:function(a){return a},
eP:function(a){return this.jC(a,t.z,t.z,t.z)}}
P.kt.prototype={
$0:function(){return this.a.jL(this.b)},
$S:0}
P.ku.prototype={
$1:function(a){return this.a.jO(this.b,a)},
$S:function(){return this.c.A("~(0)")}}
P.dK.prototype={
ga2:function(a){var s=new P.dL(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
R:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.fB(b)
return r}},
fB:function(a){var s=this.d
if(s==null)return!1
return this.ca(s[this.c6(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dt(s==null?q.b=P.m4():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dt(r==null?q.c=P.m4():r,b)}else return q.fk(0,b)},
fk:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.m4()
s=q.c6(b)
r=p[s]
if(r==null)p[s]=[q.c4(b)]
else{if(q.ca(r,b)>=0)return!1
r.push(q.c4(b))}return!0},
Y:function(a,b){if((b&1073741823)===b)return this.i7(this.c,b)
else return this.i6(0,b)},
i6:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c6(b)
r=n[s]
q=o.ca(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dP(p)
return!0},
dt:function(a,b){if(a[b]!=null)return!1
a[b]=this.c4(b)
return!0},
i7:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dP(s)
delete a[b]
return!0},
dC:function(){this.r=this.r+1&1073741823},
c4:function(a){var s,r=this,q=new P.kr(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dC()
return q},
dP:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dC()},
c6:function(a){return J.lJ(a)&1073741823},
ca:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1}}
P.kr.prototype={}
P.dL.prototype={
gN:function(a){return H.O(this).c.a(this.d)},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bk(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.d_.prototype={}
P.j0.prototype={
$2:function(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:15}
P.d4.prototype={$im:1,$ik:1,$ip:1}
P.i.prototype={
ga2:function(a){return new H.c7(a,this.gk(a))},
K:function(a,b){return this.h(a,b)},
p:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gk(a))throw H.c(P.bk(a))}},
gex:function(a){return this.gk(a)===0},
jS:function(a,b){var s,r,q,p,o=this
if(o.gex(a)){s=J.lQ(0,H.bd(a).A("i.E"))
return s}r=o.h(a,0)
q=P.eJ(o.gk(a),r,!0,H.bd(a).A("i.E"))
for(p=1;p<o.gk(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
jR:function(a){return this.jS(a,!0)},
j_:function(a,b,c,d){var s
H.bd(a).A("i.E").a(d)
P.bs(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
i:function(a){return P.lP(a,"[","]")}}
P.d6.prototype={}
P.j4.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:36}
P.S.prototype={
p:function(a,b){var s,r,q
for(s=J.aT(this.gar(a)),r=H.bd(a).A("S.V");s.w();){q=s.gN(s)
b.$2(q,r.a(this.h(a,q)))}},
gk:function(a){return J.aw(this.gar(a))},
i:function(a){return P.lV(a)},
$iD:1}
P.hG.prototype={
j:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.d7.prototype={
h:function(a,b){return J.G(this.a,b)},
j:function(a,b,c){J.lH(this.a,b,c)},
p:function(a,b){J.cH(this.a,b)},
gk:function(a){return J.aw(this.a)},
i:function(a){return J.ef(this.a)},
$iD:1}
P.cp.prototype={}
P.dl.prototype={
i:function(a){return P.lP(this,"{","}")},
K:function(a,b){var s,r,q,p,o="index"
H.kX(b,o,t.S)
P.mP(b,o)
for(s=P.pu(this,this.r),r=H.O(s).c,q=0;s.w();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.M(b,this,o,null,q))}}
P.dT.prototype={$im:1,$ik:1}
P.dM.prototype={}
P.e4.prototype={}
P.e6.prototype={}
P.k_.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.a0(r)}return null},
$S:21}
P.jZ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.a0(r)}return null},
$S:21}
P.i_.prototype={
je:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bs(a3,a4,a2.length)
s=$.of()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.F(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.l1(C.a.F(a2,k))
g=H.l1(C.a.F(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a5("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.b2(j)
p=k
continue}}throw H.c(P.ag("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.mu(a2,m,a4,n,l,d)
else{b=C.c.by(d-1,4)+1
if(b===1)throw H.c(P.ag(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.bb(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.mu(a2,m,a4,n,l,a)
else{b=C.c.by(a,4)
if(b===1)throw H.c(P.ag(a0,a2,a4))
if(b>1)a2=C.a.bb(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i0.prototype={}
P.ep.prototype={}
P.es.prototype={}
P.ij.prototype={}
P.jX.prototype={
giY:function(){return C.J}}
P.k0.prototype={
cF:function(a){var s,r,q,p=P.bs(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kD(r)
if(q.fU(a,0,p)!==p){C.a.U(a,p-1)
q.cw()}return new Uint8Array(r.subarray(0,H.q4(0,q.b,s)))}}
P.kD.prototype={
cw:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
iH:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cw()
return!1}},
fU:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.iH(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cw()}else if(p<=2047){o=l.b
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
P.jY.prototype={
cF:function(a){var s=this.a,r=P.pk(s,a,0,null)
if(r!=null)return r
return new P.kC(s).iQ(a,0,null,!0)}}
P.kC.prototype={
iQ:function(a,b,c,d){var s,r,q,p,o=this,n=P.bs(b,c,J.aw(a))
if(b===n)return""
s=P.pZ(a,b,n)
r=o.c7(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.q_(q)
o.b=0
throw H.c(P.ag(p,a,b+o.c))}return r},
c7:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a6(b+c,2)
r=q.c7(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c7(a,s,c,d)}return q.iT(a,b,c,d)},
iT:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a5(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.b2(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.b2(j)
break
case 65:g.a+=H.b2(j);--f
break
default:p=g.a+=H.b2(j)
g.a=p+H.b2(j)
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
g.a+=H.b2(a[l])}else g.a+=P.fk(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.b2(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.a1.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a1&&this.a===b.a&&!0},
ap:function(a,b){return C.c.ap(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.c.b0(s,30))&1073741823},
i:function(a){var s=this,r=P.oB(H.p3(s)),q=P.eu(H.p1(s)),p=P.eu(H.oY(s)),o=P.eu(H.oZ(s)),n=P.eu(H.p0(s)),m=P.eu(H.p2(s)),l=P.oC(H.p_(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bG.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bG&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
ap:function(a,b){return C.c.ap(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ih(),o=this.a
if(o<0)return"-"+new P.bG(0-o).i(0)
s=p.$1(C.c.a6(o,6e7)%60)
r=p.$1(C.c.a6(o,1e6)%60)
q=new P.ig().$1(o%1e6)
return""+C.c.a6(o,36e8)+":"+s+":"+r+"."+q}}
P.ig.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.ih.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.F.prototype={
gbB:function(){return H.bc(this.$thrownJsError)}}
P.ej.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.io(s)
return"Assertion failed"}}
P.fu.prototype={}
P.eV.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
gc9:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc8:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc9()+o+m
if(!q.a)return l
s=q.gc8()
r=P.io(q.b)
return l+s+": "+r}}
P.dk.prototype={
gc9:function(){return"RangeError"},
gc8:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.eA.prototype={
gc9:function(){return"RangeError"},
gc8:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.fE.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fB.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dn.prototype={
i:function(a){return"Bad state: "+this.a}}
P.er.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.io(s)+"."}}
P.eZ.prototype={
i:function(a){return"Out of Memory"},
gbB:function(){return null},
$iF:1}
P.dm.prototype={
i:function(a){return"Stack Overflow"},
gbB:function(){return null},
$iF:1}
P.et.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h0.prototype={
i:function(a){return"Exception: "+this.a}}
P.it.prototype={
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
for(o=e;o<m;++o){n=C.a.U(d,o)
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
return f+j+h+i+"\n"+C.a.S(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.t(e)+")"):f}}
P.k.prototype={
gk:function(a){var s,r=this.ga2(this)
for(s=0;r.w();)++s
return s},
K:function(a,b){var s,r,q
P.mP(b,"index")
for(s=this.ga2(this),r=0;s.w();){q=s.gN(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.oH(this,"(",")")}}
P.eB.prototype={}
P.W.prototype={
gG:function(a){return P.C.prototype.gG.call(C.O,this)},
i:function(a){return"null"}}
P.C.prototype={constructor:P.C,$iC:1,
n:function(a,b){return this===b},
gG:function(a){return H.di(this)},
i:function(a){return"Instance of '"+H.dj(this)+"'"},
toString:function(){return this.i(this)}}
P.hv.prototype={
i:function(a){return""},
$ib4:1}
P.a5.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jV.prototype={
$2:function(a,b){var s,r,q,p=C.a.cR(b,"=")
if(p===-1){if(b!=="")J.lH(a,P.md(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.ak(b,p+1)
q=this.a
J.lH(a,P.md(s,0,s.length,q,!0),P.md(r,0,r.length,q,!0))}return a},
$S:40}
P.jS.prototype={
$2:function(a,b){throw H.c(P.ag("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.jT.prototype={
$2:function(a,b){throw H.c(P.ag("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jU.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.cE(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:44}
P.bV.prototype={
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
if(s!=null)o=o+":"+H.t(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.lU("_text"))}return o},
gG:function(a){var s=this,r=s.z
if(r==null){r=C.a.gG(s.gbH())
if(s.z==null)s.z=r
else r=H.h(H.lU("hashCode"))}return r},
gba:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cp(P.n7(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.lU("queryParameters"))}return r},
geW:function(){return this.b},
gcQ:function(a){var s=this.c
if(s==null)return""
if(C.a.af(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbU:function(a){var s=this.d
return s==null?P.nq(this.a):s},
gcY:function(a){var s=this.f
return s==null?"":s},
gen:function(){var s=this.r
return s==null?"":s},
cZ:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.af(s,"/"))s="/"+s
q=s
p=P.mb(null,0,0,b)
return new P.bV(n,l,j,k,q,p,o.r)},
geo:function(){return this.c!=null},
ger:function(){return this.f!=null},
gep:function(){return this.r!=null},
i:function(a){return this.gbH()},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbY())if(q.c!=null===b.geo())if(q.b===b.geW())if(q.gcQ(q)===b.gcQ(b))if(q.gbU(q)===b.gbU(b))if(q.e===b.geK(b)){s=q.f
r=s==null
if(!r===b.ger()){if(r)s=""
if(s===b.gcY(b)){s=q.r
r=s==null
if(!r===b.gep()){if(r)s=""
s=s===b.gen()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifF:1,
gbY:function(){return this.a},
geK:function(a){return this.e}}
P.kB.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.me(C.h,a,C.f,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.me(C.h,b,C.f,!0)}},
$S:45}
P.kA.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aT(b),r=this.a;s.w();)r.$2(a,s.gN(s))},
$S:9}
P.jR.prototype={
geV:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bR(s,"?",m)
q=s.length
if(r>=0){p=P.e5(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fU("data","",n,n,P.e5(s,m,q,C.u,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kJ.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.U.j_(s,0,96,b)
return s},
$S:48}
P.kK.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.F(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:20}
P.kL.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.F(b,0),r=C.a.F(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:20}
P.hl.prototype={
geo:function(){return this.c>0},
geq:function(){return this.c>0&&this.d+1<this.e},
ger:function(){return this.f<this.r},
gep:function(){return this.r<this.a.length},
gbY:function(){var s=this.x
return s==null?this.x=this.fE():s},
fE:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.af(r.a,"http"))return"http"
if(q===5&&C.a.af(r.a,"https"))return"https"
if(s&&C.a.af(r.a,"file"))return"file"
if(q===7&&C.a.af(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
geW:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcQ:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbU:function(a){var s,r=this
if(r.geq())return P.cE(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.af(r.a,"http"))return 80
if(s===5&&C.a.af(r.a,"https"))return 443
return 0},
geK:function(a){return C.a.t(this.a,this.e,this.f)},
gcY:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gen:function(){var s=this.r,r=this.a
return s<r.length?C.a.ak(r,s+1):""},
gba:function(){var s=this
if(s.f>=s.r)return C.T
return new P.cp(P.n7(s.gcY(s)),t.dw)},
cZ:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbY(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.geq()?n.gbU(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.af(r,"/"))r="/"+r
p=P.mb(m,0,0,b)
q=n.r
o=q<j.length?C.a.ak(j,q+1):m
return new P.bV(l,i,s,h,r,p,o)},
gG:function(a){var s=this.y
return s==null?this.y=C.a.gG(this.a):s},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifF:1}
P.fU.prototype={}
W.o.prototype={}
W.hU.prototype={
gk:function(a){return a.length}}
W.eh.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ei.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bE.prototype={$ibE:1}
W.bF.prototype={
d5:function(a,b,c){if(c!=null)return a.getContext(b,P.nL(c))
return a.getContext(b)},
f_:function(a,b){return this.d5(a,b,null)},
$ibF:1}
W.cM.prototype={$icM:1}
W.aK.prototype={
gk:function(a){return a.length}}
W.i8.prototype={
gk:function(a){return a.length}}
W.E.prototype={$iE:1}
W.cQ.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.i9.prototype={}
W.aC.prototype={}
W.aV.prototype={}
W.ia.prototype={
gk:function(a){return a.length}}
W.ib.prototype={
gk:function(a){return a.length}}
W.ic.prototype={
gk:function(a){return a.length}}
W.id.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cR.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.cS.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
return r+H.t(s)+") "+H.t(this.gaS(a))+" x "+H.t(this.gaP(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bb(b)
if(s===r.gbT(b)){s=a.top
s.toString
s=s===r.gbW(b)&&this.gaS(a)===r.gaS(b)&&this.gaP(a)===r.gaP(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.d.gG(r)
s=a.top
s.toString
return W.ni(r,C.d.gG(s),C.d.gG(this.gaS(a)),C.d.gG(this.gaP(a)))},
ge_:function(a){var s=a.bottom
s.toString
return s},
gdB:function(a){return a.height},
gaP:function(a){var s=this.gdB(a)
s.toString
return s},
gbT:function(a){var s=a.left
s.toString
return s},
gbV:function(a){var s=a.right
s.toString
return s},
gbW:function(a){var s=a.top
s.toString
return s},
gdS:function(a){return a.width},
gaS:function(a){var s=this.gdS(a)
s.toString
return s},
$iaq:1}
W.ev.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.ie.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.fR.prototype={
gex:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
j:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
ga2:function(a){var s=this.jR(this)
return new J.al(s,s.length)}}
W.B.prototype={
gb3:function(a){var s=a.children
s.toString
return new W.fR(a,s)},
ge2:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.aq(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
$iB:1}
W.l.prototype={$il:1}
W.e.prototype={
iJ:function(a,b,c,d){if(c!=null)this.fm(a,b,c,!1)},
fm:function(a,b,c,d){return a.addEventListener(b,H.cA(c,1),!1)},
$ie:1}
W.ax.prototype={$iax:1}
W.c0.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1,
$ic0:1}
W.ex.prototype={
gk:function(a){return a.length}}
W.ez.prototype={
gk:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.iv.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.bJ.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.aM.prototype={
jn:function(a,b,c,d){return a.open(b,c,!0)},
$iaM:1}
W.iw.prototype={
$1:function(a){var s=a.responseText
s.toString
return s},
$S:51}
W.ix.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.status
o.toString
s=o>=200&&o<300
r=o>307&&o<400
o=s||o===0||o===304||r
q=this.b
if(o)q.cD(0,p)
else q.e3(a)},
$S:56}
W.bK.prototype={}
W.bL.prototype={
ge4:function(a){var s=a.data
s.toString
return s},
$ibL:1}
W.c2.prototype={$ic2:1}
W.c4.prototype={$ic4:1,$ilL:1}
W.bM.prototype={$ibM:1}
W.j2.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.jj.prototype={
gk:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.eM.prototype={
h:function(a,b){return P.bA(a.get(b))},
p:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bA(s.value[1]))}},
gar:function(a){var s=H.b([],t.s)
this.p(a,new W.jk(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iD:1}
W.jk.prototype={
$2:function(a,b){return this.a.push(a)},
$S:9}
W.eN.prototype={
h:function(a,b){return P.bA(a.get(b))},
p:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bA(s.value[1]))}},
gar:function(a){var s=H.b([],t.s)
this.p(a,new W.jl(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iD:1}
W.jl.prototype={
$2:function(a,b){return this.a.push(a)},
$S:9}
W.aP.prototype={$iaP:1}
W.eO.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.ay.prototype={$iay:1}
W.fQ.prototype={
j:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
ga2:function(a){var s=this.a.childNodes
return new W.cW(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.v.prototype={
jE:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.oi(s,b,a)}catch(q){H.a0(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.f5(a):s},
ia:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iv:1}
W.dg.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.aQ.prototype={
gk:function(a){return a.length},
$iaQ:1}
W.f1.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.b3.prototype={$ib3:1}
W.f6.prototype={
h:function(a,b){return P.bA(a.get(b))},
p:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bA(s.value[1]))}},
gar:function(a){var s=H.b([],t.s)
this.p(a,new W.jv(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iD:1}
W.jv.prototype={
$2:function(a,b){return this.a.push(a)},
$S:9}
W.f8.prototype={
gk:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fd.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.aR.prototype={$iaR:1}
W.fe.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.aS.prototype={
gk:function(a){return a.length},
$iaS:1}
W.fh.prototype={
h:function(a,b){return a.getItem(H.q1(b))},
j:function(a,b,c){a.setItem(b,c)},
p:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gar:function(a){var s=H.b([],t.s)
this.p(a,new W.jB(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$iD:1}
W.jB.prototype={
$2:function(a,b){return this.a.push(a)},
$S:57}
W.az.prototype={$iaz:1}
W.bu.prototype={$ibu:1}
W.aG.prototype={$iaG:1}
W.au.prototype={$iau:1}
W.fl.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.fm.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.jI.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.aH.prototype={$iaH:1}
W.bS.prototype={$ibS:1}
W.fs.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.jM.prototype={
gk:function(a){return a.length}}
W.b7.prototype={}
W.jW.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fJ.prototype={
gk:function(a){return a.length}}
W.bv.prototype={
giV:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.y("deltaY is not supported"))},
giU:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.y("deltaX is not supported"))},
$ibv:1}
W.cr.prototype={
ib:function(a,b){var s=a.requestAnimationFrame(H.cA(b,1))
s.toString
return s},
fK:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fS.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.dH.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
s=r+H.t(s)+") "
r=a.width
r.toString
r=s+H.t(r)+" x "
s=a.height
s.toString
return r+H.t(s)},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bb(b)
if(s===r.gbT(b)){s=a.top
s.toString
if(s===r.gbW(b)){s=a.width
s.toString
if(s===r.gaS(b)){s=a.height
s.toString
r=s===r.gaP(b)
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
return W.ni(p,s,r,C.d.gG(q))},
gdB:function(a){return a.height},
gaP:function(a){var s=a.height
s.toString
return s},
gdS:function(a){return a.width},
gaS:function(a){var s=a.width
s.toString
return s}}
W.h4.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.dO.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.ho.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.hx.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$ix:1,
$ik:1,
$ip:1}
W.lO.prototype={}
W.dI.prototype={
iw:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.oj(s,this.c,r,!1)}}}
W.kc.prototype={
$1:function(a){return this.a.$1(a)},
$S:7}
W.m2.prototype={}
W.L.prototype={
ga2:function(a){return new W.cW(a,this.gk(a))}}
W.cW.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.G(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gN:function(a){return H.O(this).c.a(this.d)}}
W.fT.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hk.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.hr.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hJ.prototype={}
W.hK.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
P.kv.prototype={
cP:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bx:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kM(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.a1)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jQ("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.I.b(a))return a
if(t.cG.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cP(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.cH(a,new P.kw(m,n))
return m.a}if(t.x.b(a)){s=n.cP(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.iR(a,s)}if(t.eH.b(a)){s=n.cP(a)
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
n.j5(a,new P.kx(m,n))
return m.b}throw H.c(P.jQ("structured clone of other type"))},
iR:function(a,b){var s,r,q=J.cD(a),p=q.gk(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bx(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kw.prototype={
$2:function(a,b){this.a.a[a]=this.b.bx(b)},
$S:15}
P.kx.prototype={
$2:function(a,b){this.a.b[a]=this.b.bx(b)},
$S:67}
P.e1.prototype={$ibL:1,
ge4:function(a){return this.a}}
P.kI.prototype={
$1:function(a){this.a.push(P.nz(a))},
$S:19}
P.kY.prototype={
$2:function(a,b){this.a[a]=P.nz(b)},
$S:15}
P.hw.prototype={
j5:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.ey.prototype={
gbm:function(){var s=this.b,r=H.O(s)
return new H.aY(new H.dE(s,new P.ir(),r.A("dE<i.E>")),new P.is(),r.A("aY<i.E,B>"))},
p:function(a,b){C.b.p(P.j1(this.gbm(),!1,t.h),b)},
j:function(a,b,c){var s=this.gbm()
J.on(s.b.$1(J.lI(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.aw(this.gbm().a)},
h:function(a,b){var s=this.gbm()
return s.b.$1(J.lI(s.a,b))},
ga2:function(a){var s=P.j1(this.gbm(),!1,t.h)
return new J.al(s,s.length)}}
P.ir.prototype={
$1:function(a){return t.h.b(a)},
$S:69}
P.is.prototype={
$1:function(a){return t.h.a(a)},
$S:31}
P.hj.prototype={
gbV:function(a){return this.$ti.c.a(this.a+this.c)},
ge_:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bb(b)
if(s===r.gbT(b)){q=o.b
if(q===r.gbW(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbV(b)&&p.a(q+o.d)===r.ge_(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.c.gG(r),p=s.b,o=C.c.gG(p),n=s.$ti.c
r=C.c.gG(n.a(r+s.c))
p=C.c.gG(n.a(p+s.d))
return H.pf(H.jC(H.jC(H.jC(H.jC(0,q),o),r),p))}}
P.aq.prototype={
gbT:function(a){return this.a},
gbW:function(a){return this.b},
gaS:function(a){return this.c},
gaP:function(a){return this.d}}
P.aX.prototype={$iaX:1}
P.eH.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.b0.prototype={$ib0:1}
P.eW.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.jo.prototype={
gk:function(a){return a.length}}
P.fj.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.n.prototype={
gb3:function(a){return new P.ey(a,new W.fQ(a))}}
P.b5.prototype={$ib5:1}
P.ft.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.h7.prototype={}
P.h8.prototype={}
P.hf.prototype={}
P.hg.prototype={}
P.ht.prototype={}
P.hu.prototype={}
P.hC.prototype={}
P.hD.prototype={}
P.hY.prototype={
gk:function(a){return a.length}}
P.em.prototype={
h:function(a,b){return P.bA(a.get(b))},
p:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bA(s.value[1]))}},
gar:function(a){var s=H.b([],t.s)
this.p(a,new P.hZ(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iD:1}
P.hZ.prototype={
$2:function(a,b){return this.a.push(a)},
$S:9}
P.en.prototype={
gk:function(a){return a.length}}
P.bj.prototype={}
P.eY.prototype={
gk:function(a){return a.length}}
P.fP.prototype={}
P.cg.prototype={
jP:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qV(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bX("Incorrect number or type of arguments"))},
$icg:1}
P.ff.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=P.bA(a.item(b))
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.hp.prototype={}
P.hq.prototype={}
K.eg.prototype={
b9:function(a,b){return!0},
i:function(a){return"all"},
$ibO:1}
K.cX.prototype={
b9:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].b9(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibO:1}
K.b_.prototype={
b9:function(a,b){return!this.f4(0,b)},
i:function(a){return"!["+this.bZ(0)+"]"}}
K.a2.prototype={
a0:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Y(t.fX)
for(r=new H.c7(a,a.gk(a)),q=H.O(r).c;r.w();)s.j(0,q.a(r.d),!0)
p=P.j1(s.gar(s),!0,t.S)
C.b.f3(p)
this.a=p},
b9:function(a,b){return C.b.R(this.a,b)},
i:function(a){return P.fk(this.a,0,null)},
$ibO:1}
L.fg.prototype={
u:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dq(this.a.P(0,b),H.b([],t.B))
s.push(p)
return p},
j0:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.b9(0,a))return p}return null},
i:function(a){return this.b},
dO:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.R(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gar(s)}s=J.aT(s==null?H.b([],t.s):s)
for(;s.w();){r=s.gN(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.R(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bZ(0))}return m.charCodeAt(0)==0?m:m}}
L.fq.prototype={
i:function(a){var s=H.nV(this.b,"\n","\\n"),r=H.nV(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fr.prototype={
i:function(a){return this.b}}
L.jK.prototype={
P:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fg(this,b,H.b([],t.ab))
s.j(0,b,r)}return r},
bw:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fr(a,P.N(s,s))
r.j(0,a,q)}return q},
eT:function(a){return this.jT(a)},
jT:function(a){var s=this
return P.ql(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$eT(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.O(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a1.length
if(h!==0){if(!!a1.fixed$length)H.h(P.y("removeAt"))
if(0>=h)H.h(P.f4(0,null))
g=a1.splice(0,1)[0]}else{if(!r.w()){q=3
break}g=n.a(r.d)}a0.push(g);++k
h=d==null
f=h?null:d.j0(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.fk(a0,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.t(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.y("removeRange"))
P.bs(0,i,a0.length)
a0.splice(0,i-0)
C.b.bJ(a1,a0)
a0=H.b([],c)
b=H.b([],c)
d=s.d
q=!m.R(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(g)
d=f.b
h=d.d
if(h!=null){e=P.fk(b,0,null)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.fq(h,e,k)
l=h}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.R(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.ps()
case 1:return P.pt(o)}}},t.bJ)},
i:function(a){var s,r=new P.a5(""),q=this.d
if(q!=null)r.a=""+(q.dO()+"\n")
for(q=this.a,q=q.gjU(q),q=q.ga2(q);q.w();){s=q.gN(q)
if(s!=this.d)r.a+=H.t(s==null?null:s.dO())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dq.prototype={
i:function(a){return this.b.b+": "+this.bZ(0)}}
O.as.prototype={
d8:function(a,b,c){this.b=b
this.c=a
this.d=c},
bz:function(a,b){return this.d8(a,null,b)},
hF:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
fc:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
ga2:function(a){var s=this.a
return new J.al(s,s.length)},
K:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.O(q).A("u<as.T>")
if(q.hF(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.fc(r,H.b([b],p))}},
$ik:1}
O.dc.prototype={
gk:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.K():s},
aU:function(){var s=this.b
return s==null?null:s.L(null)},
ga3:function(a){var s=this.a
if(s.length>0)return C.b.gaQ(s)
else return V.aO()},
eN:function(a){this.a.push(a)
this.aU()},
cX:function(){var s=this.a
if(s.length>0){s.pop()
this.aU()}}}
E.i1.prototype={}
E.at.prototype={
dr:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.al(s,s.length),r=H.O(s).c;s.w();){q=r.a(s.d)
if(q.f==null)q.dr()}},
sd9:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().Y(0,s.geF())
if(b!=null)b.gv().l(0,s.geF())
s.az(new D.w("shape",r,b))}},
sbd:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gv().Y(0,s.geH())
if(a!=null)a.gv().l(0,s.geH())
s.dr()
s.az(new D.w("technique",r,a))}},
sbr:function(a){var s,r,q=this
if(!J.P(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().Y(0,q.geD())
if(a!=null)a.gv().l(0,q.geD())
r=q.r
q.az(new D.w("mover",s,r))}},
bp:function(){var s,r,q=this.d
if(q!=null)s=V.mW(null,q.bp())
else s=null
for(q=this.y.a,q=new J.al(q,q.length),r=H.O(q).c;q.w();)s=V.mW(s,r.a(q.d).bp())
return s},
jG:function(a){var s,r,q,p,o,n,m,l,k=this.bp()
if(k==null)return
s=V.lW()
r=k.a
q=k.d
p=k.b
o=k.e
n=k.c
m=k.f
s=s.aT(0,new V.ah(r+q/2,p+o/2,n+m/2))
if(o>q)q=o
if(m>q)q=m
if(q===0)return
l=a/q
this.bM(V.mI(l,l,l).S(0,V.mJ(s.a,s.b,s.c)))},
bM:function(a){var s,r=this.c
if(r!=null)r.bM(a)
for(r=this.y.a,r=new J.al(r,r.length),s=H.O(r).c;r.w();)s.a(r.d).bM(a)},
aw:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.bg(0,b,q)
if(!J.P(o,q.x)){s=q.x
q.x=o
q.az(new D.w("matrix",s,o))}p=q.f
if(p!=null)p.aw(0,b)
for(p=q.y.a,p=new J.al(p,p.length),r=H.O(p).c;p.w();)r.a(p.d).aw(0,b)},
aR:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.ga3(s))
else q.push(r.S(0,s.ga3(s)))
s.aU()
a.eO(o.f)
p=C.b.gaQ(a.dy)
if(o.d!=null)if(p!=null)p.eQ(a,o)
for(r=o.y.a,r=new J.al(r,r.length),q=H.O(r).c;r.w();)q.a(r.d).aR(a)
a.eL()
s.cX()},
az:function(a){var s=this.z
return s==null?null:s.L(a)},
Z:function(){return this.az(null)},
eG:function(a){this.e=null
this.az(a)},
jl:function(){return this.eG(null)},
eI:function(a){return this.az(a)},
jm:function(){return this.eI(null)},
eE:function(a){return this.az(a)},
jk:function(){return this.eE(null)},
eC:function(a){return this.az(a)},
jh:function(){return this.eC(null)},
jg:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.geB(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bH()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.Z()},
jj:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.geB(),q=0;q<b.length;b.length===s||(0,H.r)(b),++q){p=b[q]
o=p.z;(o==null?p.z=new D.bH():o).Y(0,r)}this.Z()},
i:function(a){var s=this.a
return s.length===0?"Unnamed entity":s}}
E.bY.prototype={
i:function(a){return this.b}}
E.cc.prototype={
i:function(a){return this.b}}
E.fZ.prototype={}
E.jr.prototype={
fb:function(a,b){var s=this
s.cy.gv().l(0,new E.js(s))
s.db.gv().l(0,new E.jt(s))
s.dx.gv().l(0,new E.ju(s))},
gjB:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga3(q).S(0,s.ga3(s))
q=s}return q},
geM:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.gjB().S(0,r.ga3(r))}return r},
geX:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
s=r.dx
s=r.cx=q.ga3(q).S(0,s.ga3(s))
q=s}return q},
eO:function(a){var s=this.dy
return s.push(a==null?C.b.gaQ(s):a)},
eL:function(){var s=this.dy
if(s.length>1)s.pop()},
dV:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cE(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.j(0,r,a)}}
E.js.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:5}
E.jt.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:5}
E.ju.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:5}
E.fp.prototype={
dg:function(a){this.eR()},
df:function(){return this.dg(null)},
gj6:function(){var s,r=this,q=Date.now(),p=C.c.a6(P.my(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a1(q,!1)
return s/p},
dJ:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bQ(r*o)
r=s.clientHeight
r.toString
p=C.d.bQ(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.n2(C.m,this.gjF())}},
eR:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.y.fK(s)
r=W.nI(new E.jH(this),t.di)
r.toString
C.y.ib(s,r)}},
jD:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dJ()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a1(p,!1)
q.y=P.my(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aU()
p=q.db
C.b.sk(p.a,0)
p.aU()
p=q.dx
C.b.sk(p.a,0)
p.aU()
p=q.dy
C.b.sk(p,0)
p.push(null)
m.aR(q)}}catch(o){s=H.a0(o)
r=H.bc(o)
P.hS("Error: "+H.t(s))
P.hS("Stack: "+H.t(r))
throw H.c(s)}}}
E.jH.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.jD()}},
$S:35}
Z.fK.prototype={}
Z.bZ.prototype={
aN:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.a0(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.t(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.fL.prototype={}
Z.cK.prototype={
aq:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
aN:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].aN(a)}},
eU:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aR:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
eJ:function(a){this.aN(a)
this.aR(a)
this.eU(a)},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dj(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.r)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.u(l,", ")+"\nAttrs:   "+C.b.u(o,", ")}}
Z.eo.prototype={}
Z.c3.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dj(this.c)+"'")+"]"}}
Z.b8.prototype={
gda:function(a){var s=this.a,r=(s&$.bh().a)!==0?3:0
if((s&$.bg().a)!==0)r+=3
if((s&$.bf().a)!==0)r+=3
if((s&$.bD().a)!==0)r+=2
if((s&$.bW().a)!==0)r+=3
if((s&$.cF().a)!==0)r+=3
if((s&$.ee().a)!==0)r+=4
if((s&$.cG().a)!==0)++r
return(s&$.bC().a)!==0?r+4:r},
iN:function(a){var s,r=$.bh(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bf()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cF()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ee()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bC()
if((q&r.a)!==0)if(s===a)return r
return $.oe()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bh().a)!==0)s.push("Pos")
if((r&$.bg().a)!==0)s.push("Norm")
if((r&$.bf().a)!==0)s.push("Binm")
if((r&$.bD().a)!==0)s.push("Txt2D")
if((r&$.bW().a)!==0)s.push("TxtCube")
if((r&$.cF().a)!==0)s.push("Clr3")
if((r&$.ee().a)!==0)s.push("Clr4")
if((r&$.cG().a)!==0)s.push("Weight")
if((r&$.bC().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.u(s,"|")}}
D.i3.prototype={}
D.bH.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
Y:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.R(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.Y(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.R(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.Y(p,b)
s=p===!0||s}return s},
L:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.R():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.p(P.j1(p,!0,t.h2),new D.ip(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.p(r,new D.iq(s))}return!0},
iW:function(){return this.L(null)},
bc:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.L(s)}}}}
D.ip.prototype={
$1:function(a){a.$1(this.a)},
$S:23}
D.iq.prototype={
$1:function(a){a.$1(this.a)},
$S:23}
D.R.prototype={}
D.bm.prototype={}
D.bn.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.t(this.d)+" => "+H.t(this.e)}}
O.kQ.prototype={
aC:function(a,b,c){return this.jz(a,b,!1)},
jz:function(a,b,c){var s=0,r=P.aa(t.z),q=this
var $async$aC=P.ab(function(d,e){if(d===1)return P.a7(e,r)
while(true)switch(s){case 0:s=2
return P.ak(q.aB(H.b(a.split("\n"),t.s),b,!1),$async$aC)
case 2:return P.a8(null,r)}})
return P.a9($async$aC,r)},
aB:function(a,b,c){return this.jx(a,b,!1)},
jx:function(a,b,c){var s=0,r=P.aa(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$aB=P.ab(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.f0()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.d(a,k)
s=1
break}s=9
return P.ak(m.a7(a[k],b,!1),$async$aB)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.a0(g)
k=h
if(typeof k!=="number"){q=k.J()
s=1
break}throw H.c(P.f("Line "+H.t(k+1)+": "+H.t(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.J()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.a8(q,r)
case 2:return P.a7(o,r)}})
return P.a9($async$aB,r)},
a7:function(a,b,c){return this.jv(a,b,!1)},
jv:function(a,b,c){var s=0,r=P.aa(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f
var $async$a7=P.ab(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.mq(a,"#")
i=l
if(typeof i!=="number"){q=i.eZ()
s=1
break}if(i>=0)a=J.mr(a,0,l)
a=J.ms(a)
if(J.aw(a)<=0){s=1
break}k=O.nH(a)
if(J.aw(k)<1){s=1
break}case 7:switch(J.G(k,0)){case"newmtl":s=9
break
case"Ka":s=10
break
case"Kd":s=11
break
case"Ks":s=12
break
case"Ns":s=13
break
case"d":s=14
break
case"Tr":s=15
break
case"map_Ka":s=16
break
case"map_Kd":s=17
break
case"map_Ks":s=18
break
case"map_d":s=19
break
case"map_bump":s=20
break
case"bump":s=21
break
default:s=22
break}break
case 9:i=J.G(k,1)
h=O.mG()
m.c=h
m.b.j(0,i,h)
s=1
break
case 10:m.hU(J.G(k,1))
s=1
break
case 11:m.hX(J.G(k,1))
s=1
break
case 12:m.i3(J.G(k,1))
s=1
break
case 13:m.i2(J.G(k,1))
s=1
break
case 14:m.hS(J.G(k,1))
s=1
break
case 15:m.i5(J.G(k,1))
s=1
break
case 16:s=23
return P.ak(m.cn(J.G(k,1),b),$async$a7)
case 23:s=1
break
case 17:s=24
return P.ak(m.co(J.G(k,1),b),$async$a7)
case 24:s=1
break
case 18:s=25
return P.ak(m.cp(J.G(k,1),b),$async$a7)
case 25:s=1
break
case 19:s=26
return P.ak(m.cm(J.G(k,1),b),$async$a7)
case 26:s=1
break
case 20:s=27
return P.ak(m.bD(J.G(k,1),b),$async$a7)
case 27:s=1
break
case 21:s=28
return P.ak(m.bD(J.G(k,1),b),$async$a7)
case 28:s=1
break
case 22:s=1
break
case 8:p=2
s=6
break
case 4:p=3
f=o
j=H.a0(f)
i=P.f("Line: '"+H.t(a)+"': "+H.t(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a8(q,r)
case 2:return P.a7(o,r)}})
return P.a9($async$a7,r)},
hU:function(a){var s,r=this.c
if(r==null)return
s=O.by(a)
r.gbL().sW(0,V.lN(s))},
hX:function(a){var s,r=this.c
if(r==null)return
s=O.by(a)
r.gbP().sW(0,V.lN(s))},
i3:function(a){var s,r=this.c
if(r==null)return
s=O.by(a)
r.gbA().sW(0,V.lN(s))},
i2:function(a){var s,r,q,p,o=this.c
if(o==null)return
s=O.by(a)
if(s.length!==1)throw H.c(P.f("Shininess may only have 1 number."))
r=o.gbA()
if(0>=s.length)return H.d(s,0)
q=s[0]
p=r.c.b
if(q<=0){r.b_(new A.ap(!1,p,!1))
r.ct(0)}else{r.b_(new A.ap(!0,p,!1))
r.ct(q)}},
hS:function(a){var s,r,q=this.c
if(q==null)return
s=O.by(a)
if(s.length!==1)throw H.c(P.f("Alpha may only have 1 number."))
r=q.gbK(q)
if(0>=s.length)return H.d(s,0)
r.sai(0,s[0])},
i5:function(a){var s,r,q=this.c
if(q==null)return
s=O.by(a)
if(s.length!==1)throw H.c(P.f("Alpha may only have 1 number."))
r=q.gbK(q)
if(0>=s.length)return H.d(s,0)
r.sai(0,1-s[0])},
cn:function(a,b){return this.hV(a,b)},
hV:function(a,b){var s=0,r=P.aa(t.z),q,p=this,o,n
var $async$cn=P.ab(function(c,d){if(c===1)return P.a7(d,r)
while(true)switch(s){case 0:n=p.c
if(n==null||!1){s=1
break}o=b+"/"+a
n.gbL().sbv(p.a.bq(o))
case 1:return P.a8(q,r)}})
return P.a9($async$cn,r)},
co:function(a,b){return this.hY(a,b)},
hY:function(a,b){var s=0,r=P.aa(t.z),q,p=this,o,n,m
var $async$co=P.ab(function(c,d){if(c===1)return P.a7(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.gbP().sbv(p.a.bq(o))
case 1:return P.a8(q,r)}})
return P.a9($async$co,r)},
cp:function(a,b){return this.i4(a,b)},
i4:function(a,b){var s=0,r=P.aa(t.z),q,p=this,o,n,m
var $async$cp=P.ab(function(c,d){if(c===1)return P.a7(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.gbA().sbv(p.a.bq(o))
case 1:return P.a8(q,r)}})
return P.a9($async$cp,r)},
cm:function(a,b){return this.hT(a,b)},
hT:function(a,b){var s=0,r=P.aa(t.z),q,p=this,o,n,m
var $async$cm=P.ab(function(c,d){if(c===1)return P.a7(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.gbK(n).sbv(p.a.bq(o))
case 1:return P.a8(q,r)}})
return P.a9($async$cm,r)},
bD:function(a,b){return this.hW(a,b)},
hW:function(a,b){var s=0,r=P.aa(t.z),q,p=this,o,n,m
var $async$bD=P.ab(function(c,d){if(c===1)return P.a7(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.ge1().sbv(p.a.bq(o))
case 1:return P.a8(q,r)}})
return P.a9($async$bD,r)}}
O.hR.prototype={}
O.kR.prototype={
giZ:function(){var s=this.Q,r=s.y.a,q=r.length
if(q===1){if(0>=q)return H.d(r,0)
return r[0]}return s},
aC:function(a,b,c){return this.jA(a,b,!1)},
jA:function(a,b,c){var s=0,r=P.aa(t.z),q=this
var $async$aC=P.ab(function(d,e){if(d===1)return P.a7(e,r)
while(true)switch(s){case 0:s=2
return P.ak(q.aB(H.b(a.split("\n"),t.s),b,!1),$async$aC)
case 2:return P.a8(null,r)}})
return P.a9($async$aC,r)},
aB:function(a,b,c){return this.jy(a,b,!1)},
jy:function(a,b,c){var s=0,r=P.aa(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$aB=P.ab(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.f0()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.d(a,k)
s=1
break}s=9
return P.ak(m.a7(a[k],b,!1),$async$aB)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.a0(g)
k=h
if(typeof k!=="number"){q=k.J()
s=1
break}throw H.c(P.f("Line "+H.t(k+1)+": "+H.t(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.J()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.a8(q,r)
case 2:return P.a7(o,r)}})
return P.a9($async$aB,r)},
a7:function(a,b,c){return this.jw(a,b,!1)},
jw:function(a,b,c){var s=0,r=P.aa(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$a7=P.ab(function(a0,a1){if(a0===1){o=a1
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.mq(a,"#")
i=l
if(typeof i!=="number"){q=i.eZ()
s=1
break}if(i>=0)a=J.mr(a,0,l)
a=J.ms(a)
if(J.aw(a)<=0){s=1
break}k=O.nH(a)
if(J.aw(k)<1){s=1
break}case 7:switch(J.G(k,0)){case"v":s=9
break
case"vt":s=10
break
case"vn":s=11
break
case"p":s=12
break
case"l":s=13
break
case"f":s=14
break
case"mtllib":s=15
break
case"usemtl":s=16
break
case"g":s=17
break
case"o":s=18
break
default:s=19
break}break
case 9:h=O.by(J.G(k,1))
i=h.length
if(i<3)H.h(P.f("Positions must have at least 3 numbers."))
if(i>4)H.h(P.f("Positions must have at most than 4 numbers."))
if(i===4){if(3>=i){q=H.d(h,3)
s=1
break}g=h[3]
$.A().toString
if(!(Math.abs(g-1)<1e-9))H.h(P.f("Currently, non-one w values in positions are not supported."))}if(0>=i){q=H.d(h,0)
s=1
break}g=h[0]
if(1>=i){q=H.d(h,1)
s=1
break}f=h[1]
if(2>=i){q=H.d(h,2)
s=1
break}f=[g,f,h[2]]
m.b.push(new O.hR(new V.ah(f[0],f[1],f[2]),H.b([],t.k)))
s=1
break
case 10:h=O.by(J.G(k,1))
i=h.length
if(i<2)H.h(P.f("Textures must have at least 2 numbers."))
if(i>3)H.h(P.f("Textures must have at most than 3 numbers."))
if(i===3){if(2>=i){q=H.d(h,2)
s=1
break}g=h[2]
$.A().toString
if(!(Math.abs(g-0)<1e-9))H.h(P.f("Currently, non-zero z values in textures are not supported."))}if(0>=i){q=H.d(h,0)
s=1
break}g=h[0]
if(1>=i){q=H.d(h,1)
s=1
break}g=[g,h[1]]
m.c.push(new V.ac(g[0],g[1]))
s=1
break
case 11:h=O.by(J.G(k,1))
i=h.length
if(i!==3)H.h(P.f("Normals must have exactly 3 numbers."))
if(0>=i){q=H.d(h,0)
s=1
break}g=h[0]
if(1>=i){q=H.d(h,1)
s=1
break}f=h[1]
if(2>=i){q=H.d(h,2)
s=1
break}m.d.push(new V.X(g,f,h[2]))
s=1
break
case 12:m.i1(J.G(k,1))
s=1
break
case 13:m.i_(J.G(k,1))
s=1
break
case 14:m.hZ(J.G(k,1))
s=1
break
case 15:s=20
return P.ak(m.bE(J.G(k,1),b,!1),$async$a7)
case 20:s=1
break
case 16:m.x=m.e.h(0,J.G(k,1))
m.bG()
s=1
break
case 17:m.r=J.G(k,1)
m.bG()
s=1
break
case 18:m.r=J.G(k,1)
m.bG()
s=1
break
case 19:s=1
break
case 8:p=2
s=6
break
case 4:p=3
d=o
j=H.a0(d)
i=P.f('Line: "'+H.t(a)+'": '+H.t(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a8(q,r)
case 2:return P.a7(o,r)}})
return P.a9($async$a7,r)},
bG:function(){var s,r,q,p=this,o=p.z,n=p.y
if(o==null||n==null||n.gm().c.length!==0){n=F.ai()
p.y=n
o=p.z=E.ik(n)
p.Q.y.l(0,o)
for(s=p.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)C.b.sk(s[q].b,0)}o.sbd(p.x)
o.a=p.r},
c2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=", was out of range [-",c=a.split("/"),b=c.length
if(0>=b)return H.d(c,0)
s=P.cE(c[0],e)
r=f.b
q=r.length
if(s<-q||s>q||s===0)throw H.c(P.f("The position index, "+s+d+q+".."+q+"] or 0."))
s=(s<0?q+s+1:s)-1
p=$.ad
if(p==null){p=new V.ac(0,0)
$.ad=p}if(b>1){o=c[1]
if(o.length!==0){n=P.cE(o,e)
m=f.c
q=m.length
if(n<-q||n>q||n===0)throw H.c(P.f("The texture index, "+n+d+q+".."+q+"] or 0."))
l=(n<0?q+n+1:n)-1
if(l<0||l>=q)return H.d(m,l)
p=m[l]}}k=V.U()
if(b>2){o=c[2]
if(o.length!==0){j=P.cE(o,e)
b=f.d
q=b.length
if(j<-q||j>q||j===0)throw H.c(P.f("The normal index, "+j+d+q+".."+q+"] or 0."))
m=(j<0?q+j+1:j)-1
if(m<0||m>=q)return H.d(b,m)
k=b[m]}}if(s<0||s>=r.length)return H.d(r,s)
i=r[s]
for(b=i.b,r=b.length,h=0;h<b.length;b.length===r||(0,H.r)(b),++h){g=b[h]
if(J.P(g.y,p)&&J.P(g.r,k))return g}g=F.cq(e,e,e,e,e,e,e,e,0)
g.sac(0,i.a)
if(!J.P(g.y,p)){g.y=p
r=g.a
if(r!=null)r.Z()}g.sbs(k)
r=f.y
if(r!=null)r.gm().l(0,g)
b.push(g)
return g},
i1:function(a){var s,r,q=O.kU(a),p=H.b([],t.k),o=q.length
for(s=0;s<o;++s){if(s>=q.length)return H.d(q,s)
p.push(this.c2(q[s]))}r=this.y
if(r!=null)r.gaA(r).iM(p)},
i_:function(a){var s,r,q=O.kU(a),p=H.b([],t.k),o=q.length
for(s=0;s<o;++s){if(s>=q.length)return H.d(q,s)
p.push(this.c2(q[s]))}r=this.y
if(r!=null)r.gD(r).iL(p)},
hZ:function(a){var s,r,q=O.kU(a),p=H.b([],t.k),o=q.length
for(s=0;s<o;++s){if(s>=q.length)return H.d(q,s)
p.push(this.c2(q[s]))}r=this.y
if(r!=null)r.gI().iK(p)},
bE:function(a,b,c){return this.i0(a,b,!1)},
i0:function(a,b,c){var s=0,r=P.aa(t.z),q=this,p
var $async$bE=P.ab(function(d,e){if(d===1)return P.a7(e,r)
while(true)switch(s){case 0:p=q.e
s=2
return P.ak(O.eP(b+"/"+a,q.a,!1),$async$bE)
case 2:p.bJ(0,e)
return P.a8(null,r)}})
return P.a9($async$bE,r)}}
O.f3.prototype={}
X.cL.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eG.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eG))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iZ.prototype={}
X.d5.prototype={}
X.j3.prototype={
bl:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.ac(o.a+b.a,o.b+b.b)
o=q.a.gb4()
s=$.ad
if(s==null)s=$.ad=new V.ac(0,0)
r=q.x
q.z=new P.a1(p,!1)
q.x=n
return new X.c9(a,s,r,o,n)},
cW:function(a,b){this.r=a.a
return!1},
bu:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bt:function(a,b){var s=this.d
if(s==null)return!1
s.L(this.bl(a,b))
return!0},
js:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb4()
r=this.x
Date.now()
q.L(new X.ca(new V.aj(a.a,a.b),s,r))
return!0},
hu:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.L(new X.d5(c,q.a.gb4(),b))
q.y=new P.a1(s,!1)
s=$.ad
q.x=s==null?$.ad=new V.ac(0,0):s}}
X.am.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.am))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.u(s,"+")}}
X.c9.prototype={}
X.jm.prototype={
cb:function(a,b,c){var s=this,r=new P.a1(Date.now(),!1),q=s.a.gb4(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c9(a,p,o,q,b)},
cW:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.L(this.cb(a,b,!0))
return!0},
bu:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.L(r.cb(a,b,!0))
return!0},
bt:function(a,b){var s=this.d
if(s==null)return!1
s.L(this.cb(a,b,!1))
return!0},
jt:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb4()
Date.now()
r.L(new X.ca(new V.aj(a.a,a.b),s,b))
return!0},
ge7:function(){var s=this.b
return s==null?this.b=D.K():s},
gbX:function(){var s=this.c
return s==null?this.c=D.K():s},
geA:function(){var s=this.d
return s==null?this.d=D.K():s}}
X.ca.prototype={}
X.f2.prototype={}
X.dp.prototype={}
X.jL.prototype={
bl:function(a,b){var s,r,q,p,o=this,n=new P.a1(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ad
if(r==null){r=new V.ac(0,0)
$.ad=r
s=r}else s=r}r=o.a.gb4()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dp(q,p,r,s)},
jr:function(a){var s=this.b
if(s==null)return!1
s.L(this.bl(a,!0))
return!0},
jp:function(a){var s=this.c
if(s==null)return!1
s.L(this.bl(a,!0))
return!0},
jq:function(a){var s=this.d
if(s==null)return!1
s.L(this.bl(a,!1))
return!0}}
X.fH.prototype={
gb7:function(a){var s=this.b
return s==null?this.b=new X.iZ(new X.am(!1,!1,!1),P.mF(t.S)):s},
gad:function(){var s,r=this.c
if(r==null){r=$.ad
if(r==null){r=$.ad=new V.ac(0,0)
s=r}else s=r
r=this.c=new X.jm(this,r,s,new P.a1(Date.now(),!1),new P.a1(Date.now(),!1))}return r},
gas:function(){var s=this.d
if(s==null){s=$.ad
if(s==null)s=$.ad=new V.ac(0,0)
s=this.d=new X.j3(this,s,new P.a1(Date.now(),!1),new P.a1(Date.now(),!1))}return s},
gbe:function(){var s,r=this.e
if(r==null){r=$.ad
if(r==null){r=$.ad=new V.ac(0,0)
s=r}else s=r
r=this.e=new X.jL(this,r,s,new P.a1(Date.now(),!1),new P.a1(Date.now(),!1))}return r},
gb4:function(){var s=this.a
return V.mS(0,0,C.i.ge2(s).c,C.i.ge2(s).d)},
dv:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eG(p,new X.am(s,r,q))},
aZ:function(a){var s,r,q=this.gb7(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.am(p,s,r)},
cv:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb7(this)
r=a.altKey
q=a.shiftKey
p.c=new X.am(s,r===!0,q===!0)},
aM:function(a){var s,r,q,p
if(a==null){s=$.ad
return s==null?$.ad=new V.ac(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.ac(r-p,q-s)},
bn:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.aj(r,s)},
cq:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.b)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.aD(n)
m=o.pageY
m.toString
C.d.aD(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.aD(l)
l=o.pageY
l.toString
l=C.d.aD(l)
k=j.top
k.toString
s.push(new V.ac(n-m,l-k))}return s},
aJ:function(a){var s,r,q,p
if(a==null)return new X.cL(0,new X.am(!1,!1,!1))
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
return new X.cL(s,new X.am(r,q,p))},
cc:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
ho:function(a){return this.f=!0},
hc:function(a){return this.f=!1},
hi:function(a){if(this.f&&this.cc(a))a.preventDefault()},
hs:function(a){var s,r,q=this
if(!q.f)return
s=q.dv(a)
r=q.gb7(q)
r.c=s.b
r.d.l(0,s.a)},
hq:function(a){var s,r,q=this
if(!q.f)return
s=q.dv(a)
r=q.gb7(q)
r.c=s.b
r.d.Y(0,s.a)},
hw:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aZ(a)
if(p.x){s=p.aJ(a)
r=p.bn(a)
if(p.gas().cW(s,r))a.preventDefault()
return}s=p.aJ(a)
q=p.aM(a)
if(p.gad().cW(s,q))a.preventDefault()},
hA:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aJ(a)
if(p.x){r=p.bn(a)
if(p.gas().bu(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gad().bu(s,q))a.preventDefault()},
hm:function(a){var s,r,q,p=this
if(!p.cc(a)){p.aZ(a)
s=p.aJ(a)
if(p.x){r=p.bn(a)
if(p.gas().bu(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gad().bu(s,q))a.preventDefault()}},
hy:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aJ(a)
if(p.x){r=p.bn(a)
if(p.gas().bt(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gad().bt(s,q))a.preventDefault()},
hk:function(a){var s,r,q,p=this
if(!p.cc(a)){p.aZ(a)
s=p.aJ(a)
if(p.x){r=p.bn(a)
if(p.gas().bt(s,r))a.preventDefault()
return}q=p.aM(a)
if(p.gad().bt(s,q))a.preventDefault()}},
hC:function(a){var s,r,q=this
q.aZ(a)
s=new V.aj(C.x.giU(a),C.x.giV(a)).S(0,q.Q)
if(q.x){if(q.gas().js(s))a.preventDefault()
return}r=q.aM(a)
if(q.gad().jt(s,r))a.preventDefault()},
hE:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aJ(q.y)
r=q.aM(q.y)
q.gas().hu(s,r,p)}},
hR:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cv(a)
s=r.cq(a)
if(r.gbe().jr(s))a.preventDefault()},
hN:function(a){var s
this.cv(a)
s=this.cq(a)
if(this.gbe().jp(s))a.preventDefault()},
hP:function(a){var s
this.cv(a)
s=this.cq(a)
if(this.gbe().jq(s))a.preventDefault()}}
D.d2.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
gez:function(){var s=this.z
return s==null?this.z=D.K():s},
dh:function(a){var s=this.y
return s==null?null:s.L(a)},
dE:function(a){var s=this.z
return s==null?null:s.L(a)},
ht:function(){return this.dE(null)},
hH:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r)if(this.fF(a[r]))return!1
return!0},
h6:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gdD(),q=this.e,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
q.push(o)
o.gv().l(0,r)}this.dh(new D.bm())},
hL:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gdD(),q=this.e,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
C.b.Y(q,o)
o.gv().Y(0,r)}this.dh(new D.bn())},
fF:function(a){var s=C.b.R(this.e,a)
return s}}
V.Q.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.J.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.J))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"},
B:function(){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.im.prototype={}
V.db.prototype={
a8:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.db))return!1
s=b.a
$.A().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cC(H.b([o.a,o.d,o.r],n),3,0),l=V.cC(H.b([o.b,o.e,o.x],n),3,0),k=V.cC(H.b([o.c,o.f,o.y],n),3,0)
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
V.bq.prototype={
a8:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
ew:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.aO()
s=1/b3
r=-l
q=-a2
return V.aZ((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
S:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aZ(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
d2:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.X(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bf:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.ah(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bq))return!1
s=b.a
$.A().toString
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
i:function(a){return this.B()},
H:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cC(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cC(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cC(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cC(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
B:function(){return this.H("")}}
V.ac.prototype={
am:function(a){return new V.aj(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"},
B:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.ah.prototype={
J:function(a,b){return new V.ah(this.a+b.a,this.b+b.b,this.c+b.c)},
aT:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
a5:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.lW()
return new V.ah(this.a/b,this.b/b,this.c/b)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ah))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
B:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.f5.prototype={
gaF:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f5))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.cf.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cf))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+", "+V.z(s.e,3,0)+", "+V.z(s.f,3,0)+"]"}}
V.aj.prototype={
cS:function(a){return Math.sqrt(this.ab(this))},
ab:function(a){return this.a*a.a+this.b*a.b},
S:function(a,b){return new V.aj(this.a*b,this.b*b)},
a5:function(a,b){var s
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.bU
return s==null?$.bU=new V.aj(0,0):s}return new V.aj(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.X.prototype={
cS:function(a){return Math.sqrt(this.ab(this))},
ab:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
X:function(){var s=this,r=Math.sqrt(s.ab(s))
if(r===1)return s
return s.a5(0,r)},
aO:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.X(s*r-q*p,q*o-n*r,n*p-s*o)},
J:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
aG:function(a){return new V.X(-this.a,-this.b,-this.c)},
a5:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.U()
return new V.X(this.a/b,this.b/b,this.c/b)},
ey:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
B:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.i6.prototype={
c3:function(a){var s=V.ri(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
T:function(a){var s=this.y
return s==null?null:s.L(a)},
sd4:function(a,b){},
scT:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.c3(s)}r.T(new D.w("maximumLocation",q,r.b))}},
scV:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.c3(s)}r.T(new D.w("minimumLocation",q,r.c))}},
sac:function(a,b){var s,r=this
b=r.c3(b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.T(new D.w("location",s,b))}},
scU:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.T(new D.w("maximumVelocity",p,a))}},
sa4:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.T(new D.w("velocity",r,a))}},
scG:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.T(new D.w("dampening",s,a))}},
aw:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sac(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa4(s)}}}
U.cN.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.K():s},
bg:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.c1.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.K():s},
T:function(a){var s=this.e
return s==null?null:s.L(a)},
ah:function(){return this.T(null)},
h4:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaY(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.T(new D.bm())},
hJ:function(a,b){var s,r,q,p
for(s=b.length,r=this.gaY(),q=0;q<b.length;b.length===s||(0,H.r)(b),++q){p=b[q]
if(p!=null)p.gv().Y(0,r)}this.T(new D.bn())},
bg:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.al(o,o.length),n=H.O(o).c,s=null;o.w();){r=n.a(o.d)
if(r!=null){q=r.bg(0,b,c)
s=s==null?q:q.S(0,s)}}p.f=s==null?V.aO():s
o=p.e
if(o!=null)o.bc(0)}return p.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c1))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.P(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$ia3:1}
U.a3.prototype={}
U.dB.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.K():s},
T:function(a){var s=this.cy
return s==null?null:s.L(a)},
ah:function(){return this.T(null)},
bo:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gad().ge7().l(0,s.gcd())
a.gad().geA().l(0,s.gcf())
a.gad().gbX().l(0,s.gci())
return!0},
ce:function(a){var s=this,r=s.c,q=s.a
if(!r.n(0,q==null?null:q.gb7(q).c))return
s.x=s.y=!0
s.z=s.b.d},
cg:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.am(a.d)
if(s.ab(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sac(0,-a.y.am(r).S(0,2).a5(0,s.gaF()).a*2.5+p.z)
q.sa4(0)
p.Q=a.z.am(r).S(0,2).a5(0,s.gaF())
p.ah()},
cj:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.ab(s)>0.0001){r.b.sa4(r.Q.a*10*2.5)
r.ah()}},
bg:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aw(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aZ(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia3:1}
U.dC.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.K():s},
T:function(a){var s=this.fx
return s==null?null:s.L(a)},
ah:function(){return this.T(null)},
bo:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gad().ge7().l(0,q.gcd())
a.gad().geA().l(0,q.gcf())
a.gad().gbX().l(0,q.gci())
s=a.gas()
r=s.f
s=r==null?s.f=D.K():r
s.l(0,q.gfV())
s=a.gas()
r=s.d
s=r==null?s.d=D.K():r
s.l(0,q.gfX())
s=a.gbe()
r=s.b
s=r==null?s.b=D.K():r
s.l(0,q.giu())
s=a.gbe()
r=s.d
s=r==null?s.d=D.K():r
s.l(0,q.gis())
s=a.gbe()
r=s.c
s=r==null?s.c=D.K():r
s.l(0,q.giq())
return!0},
aX:function(a){var s=a.b
if(this.r)s=-s
return new V.aj(a.a,s)},
ce:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
cg:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.am(a.d)
if(s.ab(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aX(a.y.am(r).S(0,2).a5(0,s.gaF()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sa4(0)
p.sa4(0)
n.dx=n.aX(a.z.am(r).S(0,2).a5(0,s.gaF()))
n.ah()},
cj:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ab(s)>0.0001){r.c.sa4(-r.dx.a*10*2.5)
r.b.sa4(-r.dx.b*10*2.5)
r.ah()}},
fW:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fY:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aX(a.y.am(r).S(0,2).a5(0,s.gaF()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sa4(0)
p.sa4(0)
n.dx=n.aX(a.z.am(r).S(0,2).a5(0,s.gaF()))
n.ah()},
iv:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
it:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.am(a.d)
if(s.ab(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aX(a.y.am(r).S(0,2).a5(0,s.gaF()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sa4(0)
p.sa4(0)
n.dx=n.aX(a.z.am(r).S(0,2).a5(0,s.gaF()))
n.ah()},
ir:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ab(s)>0.0001){r.c.sa4(-r.dx.a*10*2.5)
r.b.sa4(-r.dx.b*10*2.5)
r.ah()}},
bg:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aw(0,s)
n=p.b
n.aw(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aZ(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.S(0,V.aZ(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia3:1}
U.dD.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.K():s},
T:function(a){var s=this.r
return s==null?null:s.L(a)},
bo:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gad()
r=s.e
s=r==null?s.e=D.K():r
r=this.gfZ()
s.l(0,r)
s=a.gas()
q=s.e;(q==null?s.e=D.K():q).l(0,r)
return!0},
h_:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gb7(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.T(new D.w("zoom",r,q))}},
bg:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.mI(s,s,s)}return r.f},
$ia3:1}
M.ew.prototype={
aH:function(a){var s=this.y
return s==null?null:s.L(a)},
fd:function(){return this.aH(null)},
he:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaE(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bH()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aH(new D.bm())},
hg:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gaE(),q=0;q<b.length;b.length===s||(0,H.r)(b),++q){p=b[q]
o=p.z;(o==null?p.z=new D.bH():o).Y(0,r)}this.aH(new D.bn())},
sbd:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().Y(0,r.gaE())
s=r.d
r.d=a
if(a!=null)a.gv().l(0,r.gaE())
r.aH(new D.w("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
aR:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.eO(d.d)
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
n=C.d.aD(o.a*q)
m=C.d.aD(o.b*p)
l=C.d.aD(o.c*q)
a.c=l
o=C.d.aD(o.d*p)
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
g=V.aZ(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.eN(g)
f=$.o_()
e=s.b
if(e!=null)f=e.a.S(0,f)
a.db.eN(f)}for(s=d.e,r=s.a,r=new J.al(r,r.length),o=H.O(r).c;r.w();)o.a(r.d).aw(0,a)
for(s=s.a,s=new J.al(s,s.length),r=H.O(s).c;s.w();)r.a(s.d).aR(a)
if(d.b!=null){a.cy.cX()
a.db.cX()}a.eL()}}
A.el.prototype={}
A.hX.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
iX:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
e6:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ap.prototype={
gai:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.ap))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.cZ.prototype={
d7:function(a,b){var s=this.cx
if(s!=null)s.d6(a)
s=this.cy
if(s!=null)s.d6(b)}}
A.d8.prototype={
fa:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.a5(""),d1=c9.fr
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
A.qA(c9,d0)
A.qC(c9,d0)
A.qB(c9,d0)
A.qE(c9,d0)
A.qF(c9,d0)
A.qD(c9,d0)
A.qG(c9,d0)
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
c4.es(0,s.charCodeAt(0)==0?s:s,A.qz(c9))
c4.y=c4.gaa(c4).h(0,"posAttr")
c4.Q=c4.gaa(c4).h(0,"normAttr")
c4.z=c4.gaa(c4).h(0,"binmAttr")
c4.ch=c4.gaa(c4).h(0,"txt2DAttr")
c4.cx=c4.gaa(c4).h(0,"txtCubeAttr")
c4.cy=c4.gaa(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gC().M(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gC().M(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gC().M(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gC().M(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gC().M(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gC().M(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gC().M(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gC().M(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b5
if(s>0){c4.k2=t.v.a(c4.gC().M(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.f(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gC().M(0,"emissionClr"))
if(d1.b)c4.r1=t.G.a(c4.gC().M(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gC().M(0,"ambientClr"))
if(d1.b)c4.ry=t.G.a(c4.gC().M(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gC().M(0,"diffuseClr"))
if(d1.b)c4.y1=t.G.a(c4.gC().M(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.b5=t.g.a(c4.gC().M(0,"invDiffuseClr"))
if(d1.b)c4.b6=t.G.a(c4.gC().M(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(s||d1.b||!1){c4.ec=t.u.a(c4.gC().M(0,"shininess"))
if(s)c4.ea=t.g.a(c4.gC().M(0,"specularClr"))
if(d1.b)c4.eb=t.G.a(c4.gC().M(0,"specularTxt"))}if(c9.f.b)c4.ed=t.G.a(c4.gC().M(0,"bumpTxt"))
if(c9.db){c4.ee=t.bz.a(c4.gC().M(0,"envSampler"))
d1=c9.r
if(d1.a)c4.ef=t.g.a(c4.gC().M(0,"reflectClr"))
if(d1.b)c4.eg=t.G.a(c4.gC().M(0,"reflectTxt"))
d1=c9.x
s=d1.a
if(s||d1.b||!1){c4.eh=t.u.a(c4.gC().M(0,"refraction"))
if(s)c4.ei=t.g.a(c4.gC().M(0,"refractClr"))
if(d1.b)c4.ej=t.G.a(c4.gC().M(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.ek=t.u.a(c4.gC().M(0,"alpha"))
if(d1.b)c4.el=t.G.a(c4.gC().M(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.cH=P.N(r,t.W)
c4.cI=P.N(r,t.d)
for(r=t.v,q=t.g,p=t.u,o=t.Y,k=0;k<d1.length;d1.length===s||(0,H.r)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.du(l,c,b,a4,a3,a2))}c4.cI.j(0,i,g)
f=c4.cH
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.j(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cJ=P.N(r,t.W)
c4.cK=P.N(r,t.m)
for(r=t.v,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.r)(d1),++k){j=d1[k]
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
g.push(new A.dv(a7,a6,a5,l,c,a8))}c4.cK.j(0,i,g)
f=c4.cJ
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.j(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cL=P.N(r,t.W)
c4.cM=P.N(r,t.r)
for(r=t.v,q=t.g,p=t.bK,o=t.bz,f=t.F,e=t.u,d=t.M,k=0;k<d1.length;d1.length===s||(0,H.r)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.dx(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cM.j(0,i,g)
a9=c4.cL
m=c4.r
if(m==null)H.h(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.f(c7+b0+c8))
a9.j(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cN=P.N(s,t.W)
c4.cO=P.N(s,t.R)
for(s=t.v,r=t.g,q=t.u,p=t.F,o=t.G,f=t.O,k=0;k<c9.length;c9.length===d1||(0,H.r)(c9),++k){j=c9[k]
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
g.push(new A.dA(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cO.j(0,i,g)
e=c4.cN
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
e.j(0,i,s.a(l))}}}},
ay:function(a,b){if(b!=null&&b.d)if(a!=null)a.f1(b)},
ig:function(a,b){}}
A.bi.prototype={
i:function(a){return"barLight"+this.a}}
A.bl.prototype={
i:function(a){return"dirLight"+this.a}}
A.br.prototype={
i:function(a){return"pointLight"+this.a}}
A.bt.prototype={
i:function(a){return"spotLight"+this.a}}
A.j7.prototype={
i:function(a){return this.b6}}
A.du.prototype={}
A.dv.prototype={}
A.dx.prototype={}
A.dA.prototype={}
A.ch.prototype={
es:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.dw(b,35633)
r=n.dw(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaK(),s)
q.attachShader(n.gaK(),r)
q.linkProgram(n.gaK())
if(!H.ny(q.getProgramParameter(n.gaK(),35714))){o=q.getProgramInfoLog(n.gaK())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.f("Failed to link shader: "+o))}n.ih()
n.ij()},
gaa:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gC:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaK:function(){var s=this.e
if(s==null)throw H.c(P.f(u.p))
return s},
aN:function(a){a.a.useProgram(this.e)
this.gaa(this).iX()},
dw:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.ny(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.t(q)+'": '+s))}return q},
ih:function(){var s,r,q,p,o=this,n=u.p,m=H.b([],t.eu),l=o.a,k=H.kF(l.getProgramParameter(o.gaK(),35721))
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
m.push(new A.el(l,q,p))}o.f=new A.hX(m)},
ij:function(){var s,r,q,p,o,n,m=this,l=u.p,k=H.b([],t.dC),j=m.a,i=H.kF(j.getProgramParameter(m.gaK(),35718))
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
k.push(m.iS(o,n,q,p))}m.r=new A.jP(k)},
aW:function(a,b,c){var s=this.a
if(a===1)return new A.cm(s,b,c)
else return A.m0(s,this.e,b,a,c)},
fH:function(a,b,c){var s=this.a
if(a===1)return new A.dy(s,b,c)
else return A.m0(s,this.e,b,a,c)},
fI:function(a,b,c){var s=this.a
if(a===1)return new A.dz(s,b,c)
else return A.m0(s,this.e,b,a,c)},
bI:function(a,b){return new P.h0(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
iS:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aW(b,c,d)
case 5121:return s.aW(b,c,d)
case 5122:return s.aW(b,c,d)
case 5123:return s.aW(b,c,d)
case 5124:return s.aW(b,c,d)
case 5125:return s.aW(b,c,d)
case 5126:return new A.dr(s.a,c,d)
case 35664:return new A.fw(s.a,c,d)
case 35665:return new A.ds(s.a,c,d)
case 35666:return new A.dt(s.a,c,d)
case 35667:return new A.fx(s.a,c,d)
case 35668:return new A.fy(s.a,c,d)
case 35669:return new A.fz(s.a,c,d)
case 35674:return new A.fA(s.a,c,d)
case 35675:return new A.dw(s.a,c,d)
case 35676:return new A.cn(s.a,c,d)
case 35678:return s.fH(b,c,d)
case 35680:return s.fI(b,c,d)
case 35670:throw H.c(s.bI("BOOL",c))
case 35671:throw H.c(s.bI("BOOL_VEC2",c))
case 35672:throw H.c(s.bI("BOOL_VEC3",c))
case 35673:throw H.c(s.bI("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a6.prototype={}
A.jP.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
M:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.B()},
B:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cm.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fx.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fy.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fz.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fv.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dr.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fw.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ds.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dt.prototype={
d6:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.fA.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dw.prototype={
ae:function(a){var s=new Float32Array(H.cw(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cn.prototype={
ae:function(a){var s=new Float32Array(H.cw(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dy.prototype={
f1:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dz.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.bI.prototype={
f8:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f(u.D))
if(r!==b.a||r!==c.a)throw H.c(P.f(u.R))
s.e=s.d=null
s.a=a
a.gI().b.push(s)
s.b=b
b.gI().c.push(s)
s.c=c
c.gI().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gI().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Z()}},
fp:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.U()
if(n!=null)q=q.J(0,n)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.ey())return p
return q.X()},
fz:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aT(0,n)
q=new V.X(o.a,o.b,o.c).X()
o=r.aT(0,n)
return q.aO(new V.X(o.a,o.b,o.c).X()).X()},
cC:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.fp()
if(s==null){s=q.fz()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Z()}return!0},
fo:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.U()
if(n!=null)q=q.J(0,n)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.ey())return p
return q.X()},
fw:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.aT(0,e)
o=new V.X(j.a,j.b,j.c).X()
if(q.a-r.a<0)o=o.aG(0)}else{n=(j-s.b)/p
j=b.aT(0,e)
j=new V.ah(j.a*n,j.b*n,j.c*n).J(0,e).aT(0,h)
o=new V.X(j.a,j.b,j.c).X()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aG(0)}m=l.d
if(m!=null){m=m.X()
o=m.aO(o).X().aO(m).X()}return o},
cB:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.fo()
if(s==null){s=q.fw()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Z()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
H:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gO(p)
p=a+C.a.au(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gO(o)
p=p+C.a.au(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gO(o)
s=p+C.a.au(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.B()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.B()
return s+((p==null?"-":p)+"}")},
B:function(){return this.H("")}}
F.bN.prototype={
f9:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f(u.E))
if(r!==b.a)throw H.c(P.f(u.T))
s.a=a
a.gD(a).b.push(s)
s.b=b
b.gD(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gD(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Z()}},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
H:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gO(s)
s=a+C.a.au(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gO(r)
return s+C.a.au(C.c.i(r==null?-1:r),0)},
B:function(){return this.H("")}}
F.cd.prototype={
c_:function(a){var s,r=this
if(a.a==null)throw H.c(P.f("May not create a point with a vertex which is not attached to a shape."))
r.a=a
a.gaA(a).b.push(r)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gaA(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.Z()}},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
H:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gO(s)
return a+C.a.au(C.c.i(s),0)},
B:function(){return this.H("")}}
F.ar.prototype={
gm:function(){var s=this.a
return s==null?this.a=new F.Z(this,H.b([],t.k)):s},
gaA:function(a){var s=this.b
return s==null?this.b=new F.fb(this,H.b([],t.o)):s},
gD:function(a){var s=this.c
return s==null?this.c=new F.fa(this,H.b([],t.L)):s},
gI:function(){var s=this.d
return s==null?this.d=new F.f9(this,H.b([],t.w)):s},
gv:function(){var s=this.e
return s==null?this.e=D.K():s},
b2:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gI().b2()||!1
if(!r.gm().b2())s=!1
q=r.e
if(q!=null)q.bc(0)
return s},
b1:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gI().b1()||!1
if(!r.gm().b1())s=!1
q=r.e
if(q!=null)q.bc(0)
return s},
bN:function(){var s=this.e
if(s!=null)++s.d
this.gm().bN()
s=this.e
if(s!=null)s.bc(0)
return!0},
bp:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.gm().c.length
if(d<=0)return V.lY()
for(s=d-1,r=t.k,q=null;s>=0;--s){p=e.a
p=(p==null?e.a=new F.Z(e,H.b([],r)):p).c
if(s>=p.length)return H.d(p,s)
o=p[s].f
if(o!=null)if(q==null)q=V.mU(o.a,o.b,o.c,0,0,0)
else{n=o.a
m=o.b
l=o.c
k=q.d
j=q.a
if(n<j)k+=j-n
else{if(n>j+k)k=n-j
n=j}i=q.e
h=q.b
if(m<h)i+=h-m
else{if(m>h+i)i=m-h
m=h}g=q.f
f=q.c
if(l<f)g+=f-l
else{if(l>f+g)g=l-f
l=f}q=new V.cf(n,m,l,k,i,g)}}return q==null?V.lY():q},
bM:function(a){var s,r,q,p,o,n,m,l=this
for(s=l.gm().c.length-1,r=t.k;s>=0;--s){q=l.a
q=(q==null?l.a=new F.Z(l,H.b([],r)):q).c
if(s>=q.length)return H.d(q,s)
p=q[s]
o=p.f
if(o!=null){q=a.bf(o)
if(!J.P(p.f,q)){p.f=q
q=p.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}n=p.r
if(n!=null)p.sbs(a.d2(n))
m=p.x
if(m!=null)p.sV(a.d2(m))}},
e0:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gm().c.length,a0=a3.a,a1=(a0&$.bh().a)!==0?1:0
if((a0&$.bg().a)!==0)++a1
if((a0&$.bf().a)!==0)++a1
if((a0&$.bD().a)!==0)++a1
if((a0&$.bW().a)!==0)++a1
if((a0&$.cF().a)!==0)++a1
if((a0&$.ee().a)!==0)++a1
if((a0&$.cG().a)!==0)++a1
if((a0&$.bC().a)!==0)++a1
s=a3.gda(a3)
r=P.eJ(a*s,0,!1,t.gR)
b.a=0
q=P.oQ(a1,new F.jw(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cw(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cK(new Z.fK(c,p),H.b([],t.fv),q,a3)
if(e.gaA(e).b.length!==0){n=H.b([],t.t)
p=t.o
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.fb(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.Z(j,H.b([],m)):i).ao()}k=k.e}n.push(k==null?0:k);++l}h=Z.m1(a0,34963,n)
o.b.push(new Z.c3(0,n.length,h))}if(e.gD(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.fa(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.Z(j,H.b([],m)):i).ao()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.Z(j,H.b([],m)):i).ao()}k=k.e}n.push(k==null?0:k);++l}h=Z.m1(a0,34963,n)
o.b.push(new Z.c3(1,n.length,h))}if(e.gI().b.length!==0){n=H.b([],t.t)
p=t.w
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.f9(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.Z(j,H.b([],m)):i).ao()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.Z(j,H.b([],m)):i).ao()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.Z(j,H.b([],m)):i).ao()}k=k.e}n.push(k==null?0:k);++l}h=Z.m1(a0,34963,n)
o.b.push(new Z.c3(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gm().c.length!==0){q.push("Vertices:")
q.push(s.gm().H(r))}if(s.gaA(s).b.length!==0){q.push("Points:")
q.push(s.gaA(s).H(r))}if(s.gD(s).b.length!==0){q.push("Lines:")
q.push(s.gD(s).H(r))}if(s.gI().b.length!==0){q.push("Faces:")
q.push(s.gI().H(r))}return C.b.u(q,"\n")},
Z:function(){var s=this.e
return s==null?null:s.L(null)},
$ilZ:1}
F.jw.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.iN(a),e=f.gda(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.Z(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].jc(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bZ(f,e,c*4,g.d)},
$S:70}
F.f9.prototype={
a9:function(a,b,c,d){var s,r=this.a
r.gm().l(0,b)
r.gm().l(0,c)
r.gm().l(0,d)
s=new F.bI()
r=b.a
if(r==null)H.h(P.f(u.D))
if(r!=c.a||r!=d.a)H.h(P.f(u.R))
s.a=b
b.gI().b.push(s)
s.b=c
c.gI().c.push(s)
s.c=d
d.gI().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gI().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Z()}return s},
iK:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.w),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.Z(r,H.b([],q)):m).l(0,s)
m=r.a;(m==null?r.a=new F.Z(r,H.b([],q)):m).l(0,o)
m=r.a;(m==null?r.a=new F.Z(r,H.b([],q)):m).l(0,n)
l=new F.bI()
l.f8(s,o,n)
k.push(l)}}return k},
gk:function(a){return this.b.length},
b2:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].cC())q=!1
return q},
b1:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].cB())q=!1
return q},
i:function(a){return this.B()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(a))
return C.b.u(p,"\n")},
B:function(){return this.H("")}}
F.fa.prototype={
q:function(a,b,c){var s,r=this.a
r.gm().l(0,b)
r.gm().l(0,c)
r=new F.bN()
s=b.a
if(s==null)H.h(P.f(u.E))
if(s!=c.a)H.h(P.f(u.T))
r.a=b
b.gD(b).b.push(r)
r.b=c
c.gD(c).c.push(r)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gD(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.Z()}return r},
iL:function(a){var s,r,q,p,o,n,m=H.b([],t.L),l=a.length
for(s=this.a,r=t.k,q=1;q<l;q+=2){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
n=s.a;(n==null?s.a=new F.Z(s,H.b([],r)):n).l(0,p)
n=s.a;(n==null?s.a=new F.Z(s,H.b([],r)):n).l(0,o)
n=new F.bN()
n.f9(p,o)
m.push(n)}return m},
gk:function(a){return this.b.length},
i:function(a){return this.B()},
H:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].H(a+(""+s+". ")))}return C.b.u(r,"\n")},
B:function(){return this.H("")}}
F.fb.prototype={
iM:function(a){var s,r,q,p,o,n=H.b([],t.o),m=a.length
for(s=this.a,r=t.k,q=0;q<m;++q){if(q>=a.length)return H.d(a,q)
p=a[q]
o=s.a;(o==null?s.a=new F.Z(s,H.b([],r)):o).l(0,p)
o=new F.cd()
o.c_(p)
n.push(o)}return n},
gk:function(a){return this.b.length},
i:function(a){return this.B()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(a))
return C.b.u(p,"\n")},
B:function(){return this.H("")}}
F.aA.prototype={
a_:function(){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.cq(s.cx,p,m,r,q,o,n,null,l)},
gaA:function(a){var s=this.b
return s==null?this.b=new F.k4(H.b([],t.o)):s},
gD:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.fI(H.b([],s),H.b([],s))}return s},
gI:function(){var s=this.d
if(s==null){s=t.w
s=this.d=new F.k1(H.b([],s),H.b([],s),H.b([],s))}return s},
gO:function(a){var s=this.a
if(s!=null)s.gm().ao()
return this.e},
sac:function(a,b){var s
if(!J.P(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Z()}},
sbs:function(a){var s
a=a.X()
if(!J.P(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Z()}},
sV:function(a){var s
a=a==null?null:a.X()
if(!J.P(this.x,a)){this.x=a
s=this.a
if(s!=null)s.Z()}},
sW:function(a,b){var s
if(!J.P(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.Z()}},
jc:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.bh())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.n(0,$.bg())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.n(0,$.bf())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.n(0,$.bD())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.n(0,$.bW())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.n(0,$.cF())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.n(0,$.ee())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.n(0,$.cG()))return H.b([o.ch],t.n)
else if(a.n(0,$.bC())){s=H.b([-1,-1,-1,-1],t.n)
return s}else return H.b([],t.n)},
cC:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.U()
p.gI().p(0,new F.k6(o))
p.r=o.a.X()
if(r){s.Z()
o=s.e
if(o!=null)o.bc(0)}return!0},
cB:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.U()
p.gI().p(0,new F.k5(o))
p.x=o.a.X()
if(r){s.Z()
o=s.e
if(o!=null)o.bc(0)}return!0},
em:function(a){var s,r,q,p,o,n,m,l=this,k=l.gD(l).b.length
for(s=t.L,r=t.k,q=0;q<k;++q){p=l.c
p=(p==null?l.c=new F.fI(H.b([],s),H.b([],s)):p).b
if(q>=p.length)return H.d(p,q)
o=p[q]
p=o.b
if(p==null)p=null
else{n=p.a
if(n!=null){m=n.a;(m==null?n.a=new F.Z(n,H.b([],r)):m).ao()}p=p.e}n=a.a
if(n!=null){m=n.a;(m==null?n.a=new F.Z(n,H.b([],r)):m).ao()}if(p===a.e)return o}return null},
j1:function(a){var s=this.em(a)
if(s!=null)return s
return a.em(this)},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
H:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.au(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.B()
n.push(s==null?o:s)
n.push(V.z(q.ch,3,0))
n.push(o)
r=C.b.u(n,", ")
return a+"{"+r+"}"},
B:function(){return this.H("")}}
F.k6.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.J(0,r)}},
$S:4}
F.k5.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.J(0,r)}},
$S:4}
F.Z.prototype={
ao:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Z()
return!0},
cz:function(a,b,c){var s=null,r=F.cq(s,s,s,new V.ah(a,b,c),s,s,s,s,0)
this.l(0,r)
return r},
gk:function(a){return this.c.length},
b2:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].cC()
return!0},
b1:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].cB()
return!0},
bN:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.X()
if(!J.P(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.L(null)}}}}}return!0},
i:function(a){return this.B()},
H:function(a){var s,r,q,p
this.ao()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].H(a))
return C.b.u(s,"\n")},
B:function(){return this.H("")}}
F.k1.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
p:function(a,b){var s=this
C.b.p(s.b,b)
C.b.p(s.c,new F.k2(s,b))
C.b.p(s.d,new F.k3(s,b))},
i:function(a){return this.B()},
B:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(""))
return C.b.u(p,"\n")}}
F.k2.prototype={
$1:function(a){if(!J.P(a.a,this.a))this.b.$1(a)},
$S:4}
F.k3.prototype={
$1:function(a){var s=this.a
if(!J.P(a.a,s)&&!J.P(a.b,s))this.b.$1(a)},
$S:4}
F.fI.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.B()},
B:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(""))
return C.b.u(p,"\n")}}
F.k4.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.B()},
B:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].H(""))
return C.b.u(p,"\n")}}
O.cY.prototype={
gv:function(){var s=this.rx
return s==null?this.rx=D.K():s},
E:function(a){var s=this.rx
return s==null?null:s.L(a)},
saj:function(a){var s=this.r2
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.r2=a
this.E(new D.w("vectorScale",s,a))}},
aw:function(a,b){},
eQ:function(a,b){var s,r,q,p,o=this,n="Inspection"
if(o.a==null){s=t.fY.a(a.fr.h(0,n))
if(s==null){s=new A.cZ(a.a,n)
s.es(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
s.x=s.gaa(s).h(0,"posAttr")
s.y=s.gaa(s).h(0,"normAttr")
s.z=s.gaa(s).h(0,"clrAttr")
s.Q=s.gaa(s).h(0,"binmAttr")
s.ch=t.g.a(s.gC().h(0,"lightVec"))
r=t.F
s.cx=r.a(s.gC().h(0,"ambientClr"))
s.cy=r.a(s.gC().h(0,"diffuseClr"))
s.db=t.u.a(s.gC().h(0,"weightScalar"))
r=t.j
s.dx=r.a(s.gC().h(0,"viewMat"))
s.dy=r.a(s.gC().h(0,"viewObjMatrix"))
s.fr=r.a(s.gC().h(0,"projViewObjMatrix"))
a.dV(s)}o.a=s}if(b.e==null){r=b.d
if(r!=null)r.b2()
r=b.d
if(r!=null)r.b1()
r=b.d
if(r!=null)r.bN()
b.e=new Z.eo(P.N(t.N,t.E))}r=o.a
if(r!=null){r.aN(a)
q=o.r2
p=r.db
if(p!=null)p.a.uniform1f(p.d,q)
q=o.b
p=r.ch
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)
q=a.db
q=q.ga3(q)
p=r.dx
if(p!=null)p.ae(q.a8(0,!0))
q=a.geX()
p=r.dy
if(p!=null)p.ae(q.a8(0,!0))
q=a.geM()
r=r.fr
if(r!=null)r.ae(q.a8(0,!0))}r=b.e
if(r instanceof Z.eo){a.a.blendFunc(1,1)
if(b.c==null)o.i8(r,a,b)
else o.i9(r,a,b)}else b.e=null
r=o.a
if(r!=null){a.a.useProgram(null)
r.gaa(r).e6()}},
i8:function(a,b,c){var s,r=this,q=c.d
if(q==null)return
s=b.a
s.disable(2929)
s.enable(3042)
s.blendFunc(1,1)
if(r.k3)r.dG(b,a,q,"Axis",r.gft(),r.z,r.y)
if(r.k4)r.dG(b,a,q,"AABB",r.gfj(),r.z,r.y)
s.enable(2929)
s.blendFunc(770,771)},
i9:function(a,b,c){var s,r=this,q=c.c
if(q==null)return
s=b.a
s.enable(2929)
s.enable(3042)
s.blendFunc(770,771)
if(r.Q)r.a1(b,a,q,"shapeFill",r.gik(),r.d,r.c)
if(r.id)r.a1(b,a,q,"colorFill",r.gfC(),r.x,r.r)
if(r.k1)r.a1(b,a,q,"txt2DColor",r.gix(),r.x,r.r)
if(r.k2)r.a1(b,a,q,"weight",r.giD(),r.x,r.r)
s.disable(2929)
s.blendFunc(1,1)
if(r.cx)r.a1(b,a,q,"vertices",r.giB(),r.f,r.e)
if(r.fr)r.a1(b,a,q,"faceCenters",r.gfO(),r.f,r.e)
if(r.ch)r.a1(b,a,q,"wireFrame",r.giF(),r.f,r.e)
if(r.cy)r.a1(b,a,q,"normals",r.gh1(),r.f,r.e)
if(r.db)r.a1(b,a,q,"binormals",r.gfu(),r.f,r.e)
if(r.dx)r.a1(b,a,q,"tangentals",r.gio(),r.f,r.e)
if(r.dy)r.a1(b,a,q,"textureCube",r.giz(),r.f,r.e)
if(r.fx)r.a1(b,a,q,"faceNormals",r.gfQ(),r.f,r.e)
if(r.fy)r.a1(b,a,q,"faceBinormals",r.gfM(),r.x,r.r)
if(r.go)r.a1(b,a,q,"faceTangentals",r.gfS(),r.x,r.r)
if(r.k3)r.a1(b,a,q,"Axis",r.gfq(),r.z,r.y)
if(r.k4)r.a1(b,a,q,"AABB",r.gfh(),r.z,r.y)
s.enable(2929)
s.blendFunc(770,771)},
a1:function(a,b,c,d,e,f,g){var s=b.a,r=s.h(0,d)
if(r==null){r=this.dq(a,e.$1(c))
s.j(0,d,r)}s=this.a
if(s!=null)s.d7(f,g)
r.eJ(a)},
dG:function(a,b,c,d,e,f,g){var s=b.a,r=s.h(0,d)
if(r==null){r=this.dq(a,e.$1(c))
s.j(0,d,r)}s=this.a
if(s!=null)s.d7(f,g)
r.eJ(a)},
dq:function(a,b){var s=this,r=null,q=$.bh(),p=$.bg(),o=q.a,n=p.a,m=$.bf(),l=m.a,k=$.cF(),j=b.e0(new Z.fL(a.a),new Z.b8(o|n|l|k.a))
q=j.aq(q)
if(q!=null){o=s.a
if(o==null)o=r
else{o=o.x
o=o==null?r:o.c}q.e=o==null?0:o}q=j.aq(p)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.y
p=p==null?r:p.c}q.e=p==null?1:p}q=j.aq(k)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.z
p=p==null?r:p.c}q.e=p==null?2:p}q=j.aq(m)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.Q
p=p==null?r:p.c}q.e=p==null?3:p}return j},
il:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iI(s,new V.J(1,1,1,1)))
C.b.p(a.gI().b,new O.iJ(s))
return s},
dT:function(a,b){var s,r={}
r.a=b
s=F.ai()
r.a=new V.J(0,0.7,1,1)
C.b.p(a.gm().c,new O.iT(r,s))
r=new O.iS(s)
C.b.p(a.gD(a).b,new O.iU(s,r))
C.b.p(a.gI().b,new O.iV(s,r))
return s},
iG:function(a){return this.dT(a,null)},
iC:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iO(new V.J(1,1,1,1),s))
return s},
h2:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iH(new V.J(1,1,0.3,1),s))
return s},
fv:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iA(new V.J(1,0.3,0.3,1),s))
return s},
ip:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iK(new V.J(1,0.3,1,1),s))
return s},
iA:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iN(new V.J(1,0.3,0.3,1),s))
return s},
fP:function(a){var s=F.ai()
C.b.p(a.gI().b,new O.iE(new V.J(1,1,0.3,1),s))
return s},
fR:function(a){var s=F.ai()
C.b.p(a.gI().b,new O.iF(new V.J(1,1,0.3,1),s))
return s},
fN:function(a){var s=F.ai()
C.b.p(a.gI().b,new O.iD(new V.J(1,0.3,0.3,1),s))
return s},
fT:function(a){var s=F.ai()
C.b.p(a.gI().b,new O.iG(new V.J(1,0.3,1,1),s))
return s},
fD:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iB(s))
C.b.p(a.gI().b,new O.iC(s))
return s},
iy:function(a){var s=F.ai()
C.b.p(a.gm().c,new O.iL(s))
C.b.p(a.gI().b,new O.iM(s))
return s},
iE:function(a){var s,r,q={},p=F.ai()
if(a.gm().c.length<1)return p
s=a.gm().c
if(0>=s.length)return H.d(s,0)
q.a=q.b=s[0].ch
C.b.p(a.gm().c,new O.iP(q))
r=q.a-q.b
q.c=r
if(r<=0)q.c=1
C.b.p(a.gm().c,new O.iQ(q,p))
C.b.p(a.gI().b,new O.iR(p))
return p},
fs:function(a){return this.dn(a)},
dn:function(a){var s=F.ai(),r=new O.iz(s)
r.$3(1,0,0)
r.$3(0,1,0)
r.$3(0,0,1)
return s},
fi:function(a){return this.dj(a)},
dj:function(a){var s,r,q,p,o=a.bp(),n=F.ai(),m=new O.iy(n),l=o.a,k=o.b,j=o.c,i=m.$3(l,k,j),h=l+o.d,g=m.$3(h,k,j),f=k+o.e,e=m.$3(h,f,j),d=m.$3(l,f,j)
j+=o.f
s=m.$3(l,k,j)
r=m.$3(h,k,j)
q=m.$3(h,f,j)
p=m.$3(l,f,j)
n.gD(n).q(0,i,g)
n.gD(n).q(0,g,e)
n.gD(n).q(0,e,d)
n.gD(n).q(0,d,i)
n.gD(n).q(0,s,r)
n.gD(n).q(0,r,q)
n.gD(n).q(0,q,p)
n.gD(n).q(0,p,s)
n.gD(n).q(0,i,s)
n.gD(n).q(0,g,r)
n.gD(n).q(0,e,q)
n.gD(n).q(0,d,p)
return n}}
O.iI.prototype={
$1:function(a){var s=this.a.gm(),r=a.a_()
r.sW(0,this.b)
r.sV(V.U())
s.l(0,r)},
$S:6}
O.iJ.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gm(),n=a.a
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gm()
o=a.b
o=o==null?null:o.gO(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
o=p.gm()
n=a.c
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
q=o[n]
p.gI().a9(0,s,r,q)},
$S:4}
O.iT.prototype={
$1:function(a){var s=this.b.gm(),r=a.a_()
r.sW(0,this.a.a)
r.sV(V.U())
s.l(0,r)},
$S:6}
O.iS.prototype={
$2:function(a,b){var s
if(a.j1(b)==null){s=this.a
s.gD(s).q(0,a,b)}},
$S:52}
O.iU.prototype={
$1:function(a){var s,r=this.a,q=r.gm(),p=a.a
p=p==null?null:p.gO(p)
if(p==null)p=0
q=q.c
if(p>=q.length)return H.d(q,p)
s=q[p]
r=r.gm()
p=a.b
q=p==null?null:p.gO(p)
if(q==null)q=0
r=r.c
if(q>=r.length)return H.d(r,q)
this.b.$2(s,r[q])},
$S:53}
O.iV.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gm(),n=a.a
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gm()
o=a.b
o=o==null?null:o.gO(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
p=p.gm()
o=a.c
o=o==null?null:o.gO(o)
if(o==null)o=0
p=p.c
if(o>=p.length)return H.d(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)},
$S:4}
O.iO.prototype={
$1:function(a){var s,r=a.a_()
r.sW(0,this.a)
r.sV(V.U())
s=this.b
s.gm().l(0,r)
s.gaA(s).a.gm().l(0,r)
new F.cd().c_(r)},
$S:6}
O.iH.prototype={
$1:function(a){var s,r,q=a.a_()
q.sW(0,this.a)
q.sV(V.U())
s=q.a_()
s.sV(q.r)
r=this.b
r.gm().l(0,q)
r.gm().l(0,s)
r.gD(r).q(0,q,s)},
$S:6}
O.iA.prototype={
$1:function(a){var s,r,q=a.a_()
q.sW(0,this.a)
q.sV(V.U())
s=q.a_()
s.sV(a.x)
r=this.b
r.gm().l(0,q)
r.gm().l(0,s)
r.gD(r).q(0,q,s)},
$S:6}
O.iK.prototype={
$1:function(a){var s,r,q,p=a.r,o=a.x
if(p==null||o==null)return
s=a.a_()
s.sW(0,this.a)
s.sV(V.U())
r=s.a_()
r.sV(o.aO(p).aG(0))
q=this.b
q.gm().l(0,s)
q.gm().l(0,r)
q.gD(q).q(0,s,r)},
$S:6}
O.iN.prototype={
$1:function(a){var s,r,q=a.a_()
q.sW(0,this.a)
q.sV(V.U())
s=q.a_()
s.sV(a.z)
r=this.b
r.gm().l(0,q)
r.gm().l(0,s)
r.gD(r).q(0,q,s)},
$S:6}
O.iE.prototype={
$1:function(a){var s,r,q,p,o=null,n=a.a,m=n==null?o:n.f
n=a.b
s=n==null?o:n.f
n=a.c
r=n==null?o:n.f
if(m==null||s==null||r==null)return
n=m.J(0,s).J(0,r).a5(0,3)
q=a.d
p=F.cq(o,V.U(),this.a,n,q,o,o,o,0)
q=this.b
q.gm().l(0,p)
q.gaA(q).a.gm().l(0,p)
new F.cd().c_(p)},
$S:4}
O.iF.prototype={
$1:function(a){var s,r,q,p,o,n=null,m=a.a,l=m==null?n:m.f
m=a.b
s=m==null?n:m.f
m=a.c
r=m==null?n:m.f
if(l==null||s==null||r==null)return
m=l.J(0,s).J(0,r).a5(0,3)
q=a.d
p=F.cq(n,V.U(),this.a,m,q,n,n,n,0)
o=p.a_()
o.sV(a.d)
q=this.b
q.gm().l(0,p)
q.gm().l(0,o)
q.gD(q).q(0,p,o)},
$S:4}
O.iD.prototype={
$1:function(a){var s,r,q,p,o,n=null,m=a.a,l=m==null?n:m.f
m=a.b
s=m==null?n:m.f
m=a.c
r=m==null?n:m.f
if(l==null||s==null||r==null)return
m=l.J(0,s).J(0,r).a5(0,3)
q=a.d
p=F.cq(n,V.U(),this.a,m,q,n,n,n,0)
o=p.a_()
o.sV(a.e)
q=this.b
q.gm().l(0,p)
q.gm().l(0,o)
q.gD(q).q(0,p,o)},
$S:4}
O.iG.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=null,k=a.a,j=k==null?l:k.f
k=a.b
s=k==null?l:k.f
k=a.c
r=k==null?l:k.f
q=a.d
p=a.e
if(j==null||s==null||r==null||q==null||p==null)return
k=j.J(0,s).J(0,r).a5(0,3)
o=a.d
n=F.cq(l,V.U(),this.a,k,o,l,l,l,0)
m=n.a_()
m.sV(p.aO(q).aG(0))
o=this.b
o.gm().l(0,n)
o.gm().l(0,m)
o.gD(o).q(0,n,m)},
$S:4}
O.iB.prototype={
$1:function(a){var s=this.a.gm(),r=a.a_()
r.sV(V.U())
s.l(0,r)},
$S:6}
O.iC.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gm(),n=a.a
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gm()
o=a.b
o=o==null?null:o.gO(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
o=p.gm()
n=a.c
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
q=o[n]
p.gI().a9(0,s,r,q)},
$S:4}
O.iL.prototype={
$1:function(a){var s,r,q,p,o,n,m=a.y
if(m==null){s=$.ad
if(s==null){s=new V.ac(0,0)
$.ad=s
m=s}else m=s}s=this.a.gm()
r=a.a_()
q=m.a
p=m.b
if(q<0)q=0
else if(q>1)q=1
o=p<0
if(o)n=0
else n=p>1?1:p
if(o)p=0
else if(p>1)p=1
r.sW(0,new V.J(q,n,p,1))
r.sV(V.U())
s.l(0,r)},
$S:6}
O.iM.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gm(),n=a.a
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gm()
o=a.b
o=o==null?null:o.gO(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
o=p.gm()
n=a.c
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
q=o[n]
p.gI().a9(0,s,r,q)},
$S:4}
O.iP.prototype={
$1:function(a){var s=this.a,r=s.b,q=a.ch
if(r>q)s.b=q
if(s.a<q)s.a=q},
$S:6}
O.iQ.prototype={
$1:function(a){var s,r=this.a,q=V.oy((a.ch-r.b)/r.c*5/6,1,1)
r=this.b.gm()
s=a.a_()
s.sV(V.U())
s.sW(0,V.oz(q))
r.l(0,s)},
$S:6}
O.iR.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gm(),n=a.a
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gm()
o=a.b
o=o==null?null:o.gO(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
o=p.gm()
n=a.c
n=n==null?null:n.gO(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
q=o[n]
p.gI().a9(0,s,r,q)},
$S:4}
O.iz.prototype={
$3:function(a,b,c){var s,r,q=a>1?1:a,p=b>1?1:b,o=c>1?1:c,n=new V.J(q,p,o,1)
q=this.a
s=q.gm().cz(0,0,0)
s.sV(V.U())
s.sbs(V.ne())
s.sW(0,n)
r=q.gm().cz(a,b,c)
r.sV(V.U())
r.sbs(V.ne())
r.sW(0,n)
q.gD(q).q(0,s,r)},
$S:54}
O.iy.prototype={
$3:function(a,b,c){var s=this.a.gm().cz(a,b,c)
s.sV(V.U())
s.sbs(new V.X(a,b,c))
return s},
$S:55}
O.bP.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.K():s},
E:function(a){var s=this.fr
return s==null?null:s.L(a)},
c0:function(){return this.E(null)},
dI:function(a){this.a=null
this.E(a)},
ic:function(){return this.dI(null)},
h8:function(a,b){return this.E(new D.bm())},
ha:function(a,b){return this.E(new D.bn())},
gbL:function(){var s=this.r
return s==null?this.r=O.eL(this,"ambient"):s},
gbP:function(){var s=this.x
return s==null?this.x=O.eL(this,"diffuse"):s},
gbA:function(){var s=this.z
return s==null?this.z=new O.ja(new V.Q(0,0,0),this,"specular",new A.ap(!1,!1,!1)):s},
ge1:function(){var s=this.Q
return s==null?this.Q=new O.j6(this,"bump",new A.ap(!1,!1,!1)):s},
gbK:function(a){var s=this.db
return s==null?this.db=new O.j5(this,"alpha",new A.ap(!1,!1,!1)):s},
du:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=t.y,a0=new H.Y(a),a1=c.dx
a1=a1==null?b:a1.e
if(a1==null)a1=H.b([],t.i)
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.r)(a1),++r){q=a1[r]
p=q.gal()
o=a0.h(0,q.gal())
a0.j(0,p,o==null?1:o)}n=H.b([],t.cn)
a0.p(0,new O.jb(c,n))
C.b.bi(n,new O.jc())
m=new H.Y(a)
a1=c.dx
a1=a1==null?b:a1.f
if(a1==null)a1=H.b([],t.U)
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.r)(a1),++r){q=a1[r]
p=q.gal()
o=m.h(0,q.gal())
m.j(0,p,o==null?1:o)}l=H.b([],t.fD)
m.p(0,new O.jd(c,l))
C.b.bi(l,new O.je())
k=new H.Y(a)
a1=c.dx
a1=a1==null?b:a1.r
if(a1==null)a1=H.b([],t.J)
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.r)(a1),++r){q=a1[r]
p=q.gal()
o=k.h(0,q.gal())
k.j(0,p,o==null?1:o)}j=H.b([],t.eg)
k.p(0,new O.jf(c,j))
C.b.bi(j,new O.jg())
i=new H.Y(a)
a=c.dx
a=a==null?b:a.x
if(a==null)a=H.b([],t.D)
a1=a.length
r=0
for(;r<a.length;a.length===a1||(0,H.r)(a),++r){q=a[r]
s=q.gal()
p=i.h(0,q.gal())
i.j(0,s,p==null?1:p)}h=H.b([],t.c3)
i.p(0,new O.jh(c,h))
C.b.bi(h,new O.ji())
a=C.c.a6(c.e.a.length+3,4)
if(c.dy==null)c.dy=new O.j8(new V.J(0,0,0,0))
a1=c.f
a1=(a1==null?c.f=O.eL(c,"emission"):a1).c
s=c.gbL().c
p=c.gbP().c
o=c.y
o=(o==null?c.y=O.eL(c,"invDiffuse"):o).c
g=c.gbA().c
f=c.ge1().c
e=c.cx
e=(e==null?c.cx=O.eL(c,"reflect"):e).c
d=c.cy
return A.oS(!1,!1,!1,!1,a*4,a1,s,p,o,g,f,e,(d==null?c.cy=new O.j9(new V.Q(0,0,0),c,"refract",new A.ap(!1,!1,!1)):d).c,c.gbK(c).c,n,l,j,h)},
an:function(a,b){if(b!=null)if(!C.b.R(a,b)){b.a=a.length
a.push(b)}},
aw:function(a,b){var s,r=this.dx
r=J.aT(r==null?H.b([],t.e):r)
s=H.O(r).c
for(;r.w();)s.a(r.d).aw(0,b)},
eQ:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.du()
r=s.b6
a9=t.bL.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.d8(s,H.b([],t.p),P.N(p,o),P.N(p,t.d),P.N(p,o),P.N(p,t.m),P.N(p,o),P.N(p,t.r),P.N(p,o),P.N(p,t.R),q,r)
a9.fa(s,q)
b0.dV(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.e9
s=b1.e
if(!(s instanceof Z.cK))s=b1.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.b2()}r=n.r1
if(r){q=b1.d
if(q!=null)q.b1()}q=n.rx
if(q){p=b1.d
if(p!=null)p.bN()}p=b1.d
l=p==null?a8:p.e0(new Z.fL(b0.a),m)
if(l==null)return
p=l.aq($.bh())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aq($.bg())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aq($.bf())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aq($.bD())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aq($.bW())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aq($.bC())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.ga)
a9.aN(b0)
if(n.fr){s=b0.dx
s=s.ga3(s)
r=a9.db
if(r!=null)r.ae(s.a8(0,!0))}if(n.fx){s=b0.geX()
r=a9.dx
if(r!=null)r.ae(s.a8(0,!0))}s=b0.geM()
r=a9.fr
if(r!=null)r.ae(s.a8(0,!0))
if(n.go){s=b0.db
s=s.ga3(s)
r=a9.dy
if(r!=null)r.ae(s.a8(0,!0))}if(n.x1){s=$.mH
if(s==null){s=new V.db(1,0,0,0,1,0,0,0,1)
$.mH=s}r=a9.go
if(r!=null)r.ae(s.a8(0,!0))}if(n.x2){s=V.aO()
r=a9.id
if(r!=null)r.ae(s.a8(0,!0))}if(n.y1){s=V.aO()
r=a9.k1
if(r!=null)r.ae(s.a8(0,!0))}if(n.b5>0){s=a7.e
j=s.a.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){r=s.a
if(i>=r.length)return H.d(r,i)
r=r[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.cw(r.a8(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.Q(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.f
a7.an(k,s==null?a8:s.d)
s=a7.f
s=s==null?a8:s.d
a9.ay(a9.r1,s)}if(n.k1){s=n.b
if(s.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.Q(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.r
a7.an(k,s==null?a8:s.d)
s=a7.r
s=s==null?a8:s.d
a9.ay(a9.ry,s)}s=n.c
if(s.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.Q(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.x
a7.an(k,s==null?a8:s.d)
s=a7.x
s=s==null?a8:s.d
a9.ay(a9.y1,s)}s=n.d
if(s.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.Q(0,0,0)
q=a9.b5
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.y
a7.an(k,s==null?a8:s.d)
s=a7.y
s=s==null?a8:s.d
a9.ay(a9.b6,s)}s=n.e
r=s.a
if(r||s.b||!1){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.ec
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.Q(1,1,1)
q=a9.ea
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.z
a7.an(k,s==null?a8:s.d)
s=a7.z
s=s==null?a8:s.d
a9.ay(a9.eb,s)}s=n.z
if(s.length>0){g=new H.Y(t.y)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.Y
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
d=e.gal()
c=g.h(0,d)
if(c==null)c=0
g.j(0,d,c+1)
o=a9.cI.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.gjW()
a=$.b1
o=o.bf(a==null?$.b1=new V.ah(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gk_()
a=$.b1
o=o.bf(a==null?$.b1=new V.ah(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gW(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.ge8()){o=e.gdW()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdX()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdY()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.cH.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga3(r)
a1=new H.Y(t.y)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
d=e.gal()
c=a1.h(0,d)
if(c==null)c=0
a1.j(0,d,c+1)
o=a9.cK.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.d2(e.ge5(e)).X()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gW(e)
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gav()
o=e.ge5(e)
a=b.d
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gbX()
a=b.b
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gbV(e)
a=b.c
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gav()
if(!C.b.R(k,o)){o.a=k.length
k.push(o)}o=e.gav()
a=o.gb8(o)
if(a){a=b.r
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cJ.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga3(r)
a4=new H.Y(t.y)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.J)
q=r.length
p=t.M
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
d=e.gal()
c=a4.h(0,d)
if(c==null)c=0
a4.j(0,d,c+1)
o=a9.cM.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a5=a0.S(0,e.ga3(e))
o=e.ga3(e)
a=$.b1
o=o.bf(a==null?$.b1=new V.ah(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b1
o=a5.bf(o==null?$.b1=new V.ah(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gW(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gav()
o=a5.ew(0)
a=b.d
if(a!=null){h=new Float32Array(H.cw(new V.db(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).a8(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gav()
o=e.gav()
if(!C.b.R(k,o)){o.a=k.length
k.push(o)}o=e.gav()
a=o.gb8(o)
if(a){a=b.f
if(a!=null){a2=o.gb8(o)
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.gO(o))}}e.gbh()
o=e.gf2()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbh()
if(!C.b.R(k,o)){o.a=k.length
k.push(o)}o=e.gbh()
a=o.gb8(o)
if(a){a=b.r
if(a!=null){a2=o.gb8(o)
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.gO(o))}}if(e.ge8()){o=e.gdW()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdX()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdY()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=a4.h(0,q)
if(j==null)j=0
q=a9.cL.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga3(r)
a6=new H.Y(t.y)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.O
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
d=e.gal()
c=a6.h(0,d)
if(c==null)c=0
a6.j(0,d,c+1)
o=a9.cO.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.gju(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.ge5(e).X()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bf(e.gju(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gW(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gav()
o=e.gbX()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gbV(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gkc()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gkd()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gav()
o=e.gav()
if(!C.b.R(k,o)){o.a=k.length
k.push(o)}o=e.gav()
a=o.gb8(o)
if(a){a=b.dx
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}e.gbh()
o=e.gf2()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbh()
if(!C.b.R(k,o)){o.a=k.length
k.push(o)}o=e.gbh()
a=o.gb8(o)
if(a){a=b.dy
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}if(e.gjZ()){o=e.gjY()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gjX()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.ge8()){o=e.gdW()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdX()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdY()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cN.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=a7.Q
a7.an(k,s==null?a8:s.d)
s=a7.Q
s=s==null?a8:s.d
a9.ay(a9.ed,s)}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga3(s).ew(0)}r=a9.fy
if(r!=null)r.ae(s.a8(0,!0))}if(n.db){a7.an(k,a8)
a9.ig(a9.ee,a8)
s=n.r
if(s.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.Q(1,1,1)
q=a9.ef
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cx
a7.an(k,s==null?a8:s.d)
s=a7.cx
s=s==null?a8:s.d
a9.ay(a9.eg,s)}s=n.x
r=s.a
if(r||s.b||!1){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.eh
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.Q(1,1,1)
q=a9.ei
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cy
a7.an(k,s==null?a8:s.d)
s=a7.cy
s=s==null?a8:s.d
a9.ay(a9.ej,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.ek
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=a7.db
a7.an(k,r==null?a8:r.d)
r=a7.db
r=r==null?a8:r.d
a9.ay(a9.el,r)}r=b0.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b0.a,i=0;i<k.length;++i){p=k[i]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=t.E.a(b1.e)
p.aN(b0)
p.aR(b0)
p.eU(b0)
if(!q||s.b||!1)r.disable(3042)
for(i=0;i<k.length;++i){s=k[i]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,a8)}}r.useProgram(a8)
a9.gaa(a9).e6()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.du().b6}}
O.jb.prototype={
$2:function(a,b){return this.b.push(new A.bi(a,C.c.a6(b+3,4)*4))},
$S:11}
O.jc.prototype={
$2:function(a,b){return C.c.ap(a.a,b.a)},
$S:58}
O.jd.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.c.a6(b+3,4)*4))},
$S:11}
O.je.prototype={
$2:function(a,b){return C.c.ap(a.a,b.a)},
$S:59}
O.jf.prototype={
$2:function(a,b){return this.b.push(new A.br(a,C.c.a6(b+3,4)*4))},
$S:11}
O.jg.prototype={
$2:function(a,b){return C.c.ap(a.a,b.a)},
$S:60}
O.jh.prototype={
$2:function(a,b){return this.b.push(new A.bt(a,C.c.a6(b+3,4)*4))},
$S:11}
O.ji.prototype={
$2:function(a,b){return C.c.ap(a.a,b.a)},
$S:61}
O.j5.prototype={
cs:function(a){var s=this,r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.a.E(new D.w(s.b,r,a))}},
aL:function(){this.dc()
this.cs(1)},
sai:function(a,b){var s=this,r=s.c.b
if(b<=0){s.b_(new A.ap(!1,r,!1))
s.cs(0)}else{s.b_(new A.ap(!0,r,!1))
s.cs(b>=1?1:b)}}}
O.d9.prototype={
E:function(a){return this.a.E(a)},
c0:function(){return this.E(null)},
aL:function(){},
b_:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aL()
s=q.a
s.a=null
s.E(null)}},
sbv:function(a){var s,r=this,q=r.c
if(!q.b)r.b_(new A.ap(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gv().Y(0,r.gbj())
s=r.d
r.d=a
a.gv().l(0,r.gbj())
r.a.E(new D.w(r.b+".texture2D",s,r.d))}}}
O.j6.prototype={}
O.da.prototype={
dK:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.E(new D.w(r.b+".color",s,a))}},
aL:function(){this.dc()
this.dK(new V.Q(1,1,1))},
sW:function(a,b){this.b_(new A.ap(!0,this.c.b,!1))
this.dK(b)}}
O.j8.prototype={}
O.j9.prototype={
aL:function(){var s,r=this
r.dd()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.E(new D.w(r.b+".refraction",s,1))}}}
O.ja.prototype={
ct:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.E(new D.w(s.b+".shininess",r,a))}},
aL:function(){this.dd()
this.ct(100)}}
O.cj.prototype={}
T.ck.prototype={}
T.fn.prototype={}
T.fo.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.K():s}}
T.jF.prototype={
bq:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.fo(o)
W.a_(s,"load",new T.jG(this,r,s,!1,o,!1,!1),!1)
return r},
ie:function(a,b,c){var s,r,q,p,o,n
b=V.mo(b)
s=a.width
r=V.mo(s==null?512:s)
s=a.height
q=V.mo(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.lK()
p.width=r
p.height=q
o=t.ar.a(C.i.f_(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qW(o.getImageData(0,0,s,n==null?512:n))}}}
T.jG.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.ie(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.Y.jP(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.iW()}++s.e},
$S:7}
X.iu.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.K():s}}
X.f_.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.K():s},
aV:function(a){var s=this.f
return s==null?null:s.L(a)},
fg:function(){return this.aV(null)},
sbr:function(a){var s,r,q=this
if(!J.P(q.b,a)){s=q.b
if(s!=null)s.gv().Y(0,q.gdi())
r=q.b
q.b=a
if(a!=null)a.gv().l(0,q.gdi())
q.aV(new D.w("mover",r,q.b))}}}
X.jD.prototype={}
V.i4.prototype={
a9:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=k.d,i=j.length,h=P.fG().gba().h(0,k.a)
if(h==null||h.length<=i){s=d
r=!0}else{if(i>=h.length)return H.d(h,i)
s=h[i]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
o=k.c
n=J.bb(o)
n.gb3(o).l(0,p)
m=W.mA("checkbox")
m.checked=s
W.a_(m,"change",new V.i5(k,m,c,i),!1)
p.children.toString
p.appendChild(m).toString
l=q.createElement("span")
l.textContent=b
p.appendChild(l).toString
o=n.gb3(o)
q=q.createElement("br")
q.toString
o.l(0,q)
j.push(m)
if(r)k.dR(i,s)},
q:function(a,b,c){return this.a9(a,b,c,!1)},
dR:function(a,b){var s,r,q,p,o,n=this.a,m=P.fG().gba().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.jo(m,a-s+1,"0")
r=a>0?C.a.t(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.ak(m,s)
q=P.fG()
s=t.N
p=P.mE(q.gba(),s,s)
p.j(0,n,r)
o=q.cZ(0,p)
n=window.history
n.toString
s=o.gbH()
n.replaceState(new P.hw([],[]).bx(""),"",s)}}
V.i5.prototype={
$1:function(a){var s=this,r=s.b.checked,q=r===!0
s.c.$1(q)
s.a.dR(s.d,q)},
$S:7}
V.lG.prototype={
$1:function(a){var s=C.d.d1(this.a.gj6(),2)
if(s!=="0.00")P.hS(s+" fps")},
$S:62}
V.jp.prototype={
a9:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.fG().gba().h(0,k)
if(j==null)if(d){c.$0()
l.dQ(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.bb(p)
o.gb3(p).l(0,q)
n=W.mA("radio")
n.checked=s
n.name=k
W.a_(n,"change",new V.jq(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gb3(p)
r=r.createElement("br")
r.toString
p.l(0,r)},
q:function(a,b,c){return this.a9(a,b,c,!1)},
dQ:function(a){var s,r,q=P.fG(),p=t.N,o=P.mE(q.gba(),p,p)
o.j(0,this.a,a)
s=q.cZ(0,o)
p=window.history
p.toString
r=s.gbH()
p.replaceState(new P.hw([],[]).bx(""),"",r)}}
V.jq.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dQ(s.d)}},
$S:7}
V.jx.prototype={
dU:function(a){var s,r,q,p,o,n,m=this.ii(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.V(C.b.ja(a)),s=new P.cu(m.eT(new H.c7(s,s.gk(s))).a());s.w();){r=s.gN(s)
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
if(H.nU(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.me(C.S,r,C.f,!1)
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
iI:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
ii:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
s=t.N
f=new L.jK(P.N(s,t.dl),P.N(s,t.f7),P.mF(s))
f.d=f.P(0,o)
s=f.P(0,o).u(0,n)
r=t.t
q=new K.a2(H.b([],r))
q.a0(new H.V("*"))
s.a.push(q)
s.c=!0
s=f.P(0,n).u(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.b_(p))
s=new K.a2(H.b([],r))
s.a0(new H.V("*"))
p.push(s)
s=f.P(0,n).u(0,"BoldEnd")
p=new K.a2(H.b([],r))
p.a0(new H.V("*"))
s.a.push(p)
s.c=!0
s=f.P(0,o).u(0,m)
p=new K.a2(H.b([],r))
p.a0(new H.V("_"))
s.a.push(p)
s.c=!0
s=f.P(0,m).u(0,m)
p=H.b([],q)
s.a.push(new K.b_(p))
s=new K.a2(H.b([],r))
s.a0(new H.V("_"))
p.push(s)
s=f.P(0,m).u(0,l)
p=new K.a2(H.b([],r))
p.a0(new H.V("_"))
s.a.push(p)
s.c=!0
s=f.P(0,o).u(0,k)
p=new K.a2(H.b([],r))
p.a0(new H.V("`"))
s.a.push(p)
s.c=!0
s=f.P(0,k).u(0,k)
p=H.b([],q)
s.a.push(new K.b_(p))
s=new K.a2(H.b([],r))
s.a0(new H.V("`"))
p.push(s)
s=f.P(0,k).u(0,"CodeEnd")
p=new K.a2(H.b([],r))
p.a0(new H.V("`"))
s.a.push(p)
s.c=!0
s=f.P(0,o).u(0,j)
p=new K.a2(H.b([],r))
p.a0(new H.V("["))
s.a.push(p)
s.c=!0
s=f.P(0,j).u(0,i)
p=new K.a2(H.b([],r))
p.a0(new H.V("|"))
s.a.push(p)
p=f.P(0,j).u(0,h)
s=new K.a2(H.b([],r))
s.a0(new H.V("]"))
p.a.push(s)
p.c=!0
p=f.P(0,j).u(0,j)
s=H.b([],q)
p.a.push(new K.b_(s))
p=new K.a2(H.b([],r))
p.a0(new H.V("|]"))
s.push(p)
p=f.P(0,i).u(0,h)
s=new K.a2(H.b([],r))
s.a0(new H.V("]"))
p.a.push(s)
p.c=!0
p=f.P(0,i).u(0,i)
s=H.b([],q)
p.a.push(new K.b_(s))
p=new K.a2(H.b([],r))
p.a0(new H.V("|]"))
s.push(p)
f.P(0,o).u(0,g).a.push(new K.eg())
p=f.P(0,g).u(0,g)
q=H.b([],q)
p.a.push(new K.b_(q))
r=new K.a2(H.b([],r))
r.a0(new H.V("*_`["))
q.push(r)
r=f.P(0,"BoldEnd")
r.d=r.a.bw(n)
r=f.P(0,l)
r.d=r.a.bw(m)
r=f.P(0,"CodeEnd")
r.d=r.a.bw(k)
r=f.P(0,h)
r.d=r.a.bw("Link")
r=f.P(0,g)
r.d=r.a.bw(g)
return this.b=f}}
V.jz.prototype={
$1:function(a){P.n2(C.m,new V.jy(this.a))},
$S:7}
V.jy.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.aD(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.t(-0.01*s)+"px"
q.top=r},
$S:0}
G.l6.prototype={
$1:function(a){var s
this.a.a=a
s=this.b.y.a
if(s.length>1)s[0].b=a},
$S:1}
G.l7.prototype={
$1:function(a){var s=this.a
if(s.Q!==a){s.Q=a
s.E(new D.w("showFilled",!a,a))}},
$S:1}
G.l8.prototype={
$1:function(a){var s=this.a
if(s.ch!==a){s.ch=a
s.E(new D.w("showWireFrame",!a,a))}},
$S:1}
G.lj.prototype={
$1:function(a){var s=this.a
if(s.cx!==a){s.cx=a
s.E(new D.w("showVertices",!a,a))}},
$S:1}
G.lu.prototype={
$1:function(a){var s=this.a
if(s.cy!==a){s.cy=a
s.E(new D.w("showNormals",!a,a))}},
$S:1}
G.lw.prototype={
$1:function(a){var s=this.a
if(s.db!==a){s.db=a
s.E(new D.w("showBinormals",!a,a))}},
$S:1}
G.lx.prototype={
$1:function(a){var s=this.a
if(s.dx!==a){s.dx=a
s.E(new D.w("showTangentals",!a,a))}},
$S:1}
G.ly.prototype={
$1:function(a){var s=this.a
if(s.fr!==a){s.fr=a
s.E(new D.w("showFaceCenters",!a,a))}},
$S:1}
G.lz.prototype={
$1:function(a){var s=this.a
if(s.fx!==a){s.fx=a
s.E(new D.w("showFaceNormals",!a,a))}},
$S:1}
G.lA.prototype={
$1:function(a){var s=this.a
if(s.fy!==a){s.fy=a
s.E(new D.w("showFaceBinormals",!a,a))}},
$S:1}
G.lB.prototype={
$1:function(a){var s=this.a
if(s.go!==a){s.go=a
s.E(new D.w("showFaceTangentals",!a,a))}},
$S:1}
G.l9.prototype={
$1:function(a){var s=this.a
if(s.id!==a){s.id=a
s.E(new D.w("showColorFill",!a,a))}},
$S:1}
G.la.prototype={
$1:function(a){var s=this.a
if(s.k1!==a){s.k1=a
s.E(new D.w("showTxt2DColor",!a,a))}},
$S:1}
G.lb.prototype={
$1:function(a){var s=this.a
if(s.dy!==a){s.dy=a
s.E(new D.w("showTxtCube",!a,a))}},
$S:1}
G.lc.prototype={
$1:function(a){var s=this.a
if(s.k2!==a){s.k2=a
s.E(new D.w("showWeight",!a,a))}},
$S:1}
G.ld.prototype={
$1:function(a){var s=this.a
if(s.k3!==a){s.k3=a
s.E(new D.w("showAxis",!a,a))}},
$S:1}
G.le.prototype={
$1:function(a){var s=this.a
if(s.k4!==a){s.k4=a
s.E(new D.w("showAABB",!a,a))}},
$S:1}
G.lC.prototype={
$1:function(a){var s=E.ik(null)
s.sd9(0,a.c)
C.b.p(a.y.a,new G.lD(s,this))
return s},
$S:64}
G.lD.prototype={
$1:function(a){this.a.y.l(0,this.b.$1(a))},
$S:65}
G.lE.prototype={
eY:function(a){var s=0,r=P.aa(t.z),q=this,p,o,n,m,l
var $async$$1=P.ab(function(b,c){if(b===1)return P.a7(c,r)
while(true)switch(s){case 0:s=2
return P.ak(O.eX(a,q.b.f),$async$$1)
case 2:l=c
l.jG(3.5)
p=q.c.y
o=p.a
if(o.length>0){p.a=H.b([],p.$ti.A("u<as.T>"))
n=p.d
if(n!=null)n.$2(0,o)}p.l(0,l)
l.b=q.a.a
m=q.d.$1(l)
m.sbd(q.e)
p.l(0,m)
return P.a8(null,r)}})
return P.a9($async$$1,r)},
$1:function(a){return this.eY(a)},
$S:66}
G.lf.prototype={
$0:function(){var s=0,r=P.aa(t.H),q=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/Cube.obj")
return P.a8(null,r)}})
return P.a9($async$$0,r)},
$S:12}
G.lg.prototype={
$0:function(){var s=0,r=P.aa(t.H),q=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/tree/tree.obj")
return P.a8(null,r)}})
return P.a9($async$$0,r)},
$S:12}
G.lh.prototype={
$0:function(){var s=0,r=P.aa(t.H),q=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/Wolf.obj")
return P.a8(null,r)}})
return P.a9($async$$0,r)},
$S:12}
G.li.prototype={
$0:function(){var s=0,r=P.aa(t.H),q=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/plant/plant.obj")
return P.a8(null,r)}})
return P.a9($async$$0,r)},
$S:12}
G.lk.prototype={
$0:function(){this.a.saj(0.01)},
$S:0}
G.ll.prototype={
$0:function(){this.a.saj(0.02)},
$S:0}
G.lm.prototype={
$0:function(){this.a.saj(0.04)},
$S:0}
G.ln.prototype={
$0:function(){this.a.saj(0.06)},
$S:0}
G.lo.prototype={
$0:function(){this.a.saj(0.08)},
$S:0}
G.lp.prototype={
$0:function(){this.a.saj(0.1)},
$S:0}
G.lq.prototype={
$0:function(){this.a.saj(0.2)},
$S:0}
G.lr.prototype={
$0:function(){this.a.saj(0.4)},
$S:0}
G.ls.prototype={
$0:function(){this.a.saj(0.6)},
$S:0}
G.lt.prototype={
$0:function(){this.a.saj(0.8)},
$S:0}
G.lv.prototype={
$0:function(){this.a.saj(1)},
$S:0};(function aliases(){var s=J.a.prototype
s.f5=s.i
s=J.bp.prototype
s.f6=s.i
s=K.cX.prototype
s.f4=s.b9
s.bZ=s.i
s=O.d9.prototype
s.dc=s.aL
s=O.da.prototype
s.dd=s.aL})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"qd","oL",68)
r(P,"qR","pp",13)
r(P,"qS","pq",13)
r(P,"qT","pr",13)
q(P,"nK","qM",0)
p(P.dG.prototype,"giO",0,1,null,["$2","$1"],["bO","e3"],63,0)
r(W,"ts","ii",46)
var k
p(k=E.at.prototype,"geF",0,0,null,["$1","$0"],["eG","jl"],3,0)
p(k,"geH",0,0,null,["$1","$0"],["eI","jm"],3,0)
p(k,"geD",0,0,null,["$1","$0"],["eE","jk"],3,0)
p(k,"geB",0,0,null,["$1","$0"],["eC","jh"],3,0)
o(k,"gjf","jg",10)
o(k,"gji","jj",10)
p(k=E.fp.prototype,"gde",0,0,null,["$1","$0"],["dg","df"],3,0)
n(k,"gjF","eR",0)
m(k=X.fH.prototype,"ghn","ho",7)
m(k,"ghb","hc",7)
m(k,"ghh","hi",8)
m(k,"ghr","hs",24)
m(k,"ghp","hq",24)
m(k,"ghv","hw",8)
m(k,"ghz","hA",8)
m(k,"ghl","hm",8)
m(k,"ghx","hy",8)
m(k,"ghj","hk",8)
m(k,"ghB","hC",39)
m(k,"ghD","hE",7)
m(k,"ghQ","hR",16)
m(k,"ghM","hN",16)
m(k,"ghO","hP",16)
p(k=D.d2.prototype,"gdD",0,0,null,["$1","$0"],["dE","ht"],3,0)
m(k,"ghG","hH",41)
o(k,"gh5","h6",25)
o(k,"ghK","hL",25)
l(V.aj.prototype,"gk","cS",26)
l(V.X.prototype,"gk","cS",26)
p(k=U.c1.prototype,"gaY",0,0,null,["$1","$0"],["T","ah"],3,0)
o(k,"gh3","h4",27)
o(k,"ghI","hJ",27)
p(k=U.dB.prototype,"gaY",0,0,null,["$1","$0"],["T","ah"],3,0)
m(k,"gcd","ce",17)
m(k,"gcf","cg",17)
m(k,"gci","cj",17)
p(k=U.dC.prototype,"gaY",0,0,null,["$1","$0"],["T","ah"],3,0)
m(k,"gcd","ce",5)
m(k,"gcf","cg",5)
m(k,"gci","cj",5)
m(k,"gfV","fW",5)
m(k,"gfX","fY",5)
m(k,"giu","iv",5)
m(k,"gis","it",5)
m(k,"giq","ir",5)
m(U.dD.prototype,"gfZ","h_",5)
p(k=M.ew.prototype,"gaE",0,0,null,["$1","$0"],["aH","fd"],3,0)
o(k,"ghd","he",10)
o(k,"ghf","hg",10)
m(k=O.cY.prototype,"gik","il",2)
p(k,"giF",0,1,null,["$2$color","$1"],["dT","iG"],49,0)
m(k,"giB","iC",2)
m(k,"gh1","h2",2)
m(k,"gfu","fv",2)
m(k,"gio","ip",2)
m(k,"giz","iA",2)
m(k,"gfO","fP",2)
m(k,"gfQ","fR",2)
m(k,"gfM","fN",2)
m(k,"gfS","fT",2)
m(k,"gfC","fD",2)
m(k,"gix","iy",2)
m(k,"giD","iE",2)
m(k,"gfq","fs",2)
m(k,"gft","dn",28)
m(k,"gfh","fi",2)
m(k,"gfj","dj",28)
p(k=O.bP.prototype,"gbj",0,0,null,["$1","$0"],["E","c0"],3,0)
p(k,"gdH",0,0,null,["$1","$0"],["dI","ic"],3,0)
o(k,"gh7","h8",29)
o(k,"gh9","ha",29)
p(O.d9.prototype,"gbj",0,0,null,["$1","$0"],["E","c0"],3,0)
p(X.f_.prototype,"gdi",0,0,null,["$1","$0"],["aV","fg"],3,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.lS,J.a,J.al,P.F,P.dM,P.k,H.c7,P.eB,H.cV,H.fD,H.cO,H.jN,H.jn,H.cU,H.dW,H.c_,P.S,H.j_,H.eI,H.eE,H.dN,H.k7,H.aE,H.h3,P.e_,P.fN,P.ct,P.cu,P.ek,P.dG,P.cs,P.ae,P.fO,P.ci,P.fi,P.hs,P.kE,P.e6,P.kr,P.dL,P.i,P.hG,P.d7,P.dl,P.ep,P.kD,P.kC,P.a1,P.bG,P.eZ,P.dm,P.h0,P.it,P.W,P.hv,P.a5,P.bV,P.jR,P.hl,W.i9,W.lO,W.m2,W.L,W.cW,P.kv,P.e1,P.hj,K.eg,K.cX,K.a2,L.fg,L.fq,L.fr,L.jK,O.as,O.dc,E.i1,E.at,E.bY,E.cc,E.fZ,E.jr,E.fp,Z.fK,Z.fL,Z.cK,Z.eo,Z.c3,Z.b8,D.i3,D.bH,D.R,O.kQ,O.hR,O.kR,X.cL,X.eG,X.iZ,X.j3,X.am,X.jm,X.jL,X.fH,V.Q,V.J,V.im,V.db,V.bq,V.ac,V.ah,V.f5,V.cf,V.aj,V.X,U.dB,U.dC,U.dD,M.ew,A.el,A.hX,A.ap,A.bi,A.bl,A.br,A.bt,A.j7,A.du,A.dv,A.dx,A.dA,A.a6,A.jP,F.bI,F.bN,F.cd,F.ar,F.f9,F.fa,F.fb,F.aA,F.Z,F.k1,F.fI,F.k4,O.cj,O.d9,O.j8,T.jF,X.jD,X.f_,V.i4,V.jp,V.jx])
q(J.a,[J.eC,J.c5,J.bp,J.u,J.c6,J.bo,H.dd,H.a4,W.e,W.hU,W.bE,W.cM,W.aV,W.E,W.fT,W.aC,W.ic,W.id,W.fV,W.cS,W.fX,W.ie,W.l,W.h1,W.aL,W.iv,W.h5,W.bL,W.j2,W.jj,W.h9,W.ha,W.aP,W.hb,W.hd,W.aQ,W.hh,W.hk,W.aR,W.hm,W.aS,W.hr,W.az,W.hy,W.jI,W.aH,W.hA,W.jM,W.jW,W.hH,W.hJ,W.hL,W.hN,W.hP,P.aX,P.h7,P.b0,P.hf,P.jo,P.ht,P.b5,P.hC,P.hY,P.fP,P.cg,P.hp])
q(J.bp,[J.f0,J.bT,J.aW])
r(J.iW,J.u)
q(J.c6,[J.d0,J.eD])
q(P.F,[H.d1,P.fu,H.eF,H.fC,H.f7,H.h_,P.ej,P.eV,P.aJ,P.fE,P.fB,P.dn,P.er,P.et])
r(P.d4,P.dM)
q(P.d4,[H.co,W.fR,W.fQ,P.ey])
r(H.V,H.co)
q(P.k,[H.m,H.aY,H.dE,P.d_])
r(H.cT,H.aY)
q(P.eB,[H.eK,H.fM])
r(H.cP,H.cO)
r(H.dh,P.fu)
q(H.c_,[H.jE,H.iY,H.iX,H.l2,H.l3,H.l4,P.k9,P.k8,P.ka,P.kb,P.kz,P.ky,P.kG,P.kH,P.kW,P.kd,P.kk,P.kg,P.kh,P.ki,P.kf,P.kj,P.ke,P.kn,P.ko,P.km,P.kl,P.kT,P.kt,P.ku,P.j0,P.j4,P.k_,P.jZ,P.ig,P.ih,P.jV,P.jS,P.jT,P.jU,P.kB,P.kA,P.kJ,P.kK,P.kL,W.iw,W.ix,W.jk,W.jl,W.jv,W.jB,W.kc,P.kw,P.kx,P.kI,P.kY,P.ir,P.is,P.hZ,E.js,E.jt,E.ju,E.jH,D.ip,D.iq,F.jw,F.k6,F.k5,F.k2,F.k3,O.iI,O.iJ,O.iT,O.iS,O.iU,O.iV,O.iO,O.iH,O.iA,O.iK,O.iN,O.iE,O.iF,O.iD,O.iG,O.iB,O.iC,O.iL,O.iM,O.iP,O.iQ,O.iR,O.iz,O.iy,O.jb,O.jc,O.jd,O.je,O.jf,O.jg,O.jh,O.ji,T.jG,V.i5,V.lG,V.jq,V.jz,V.jy,G.l6,G.l7,G.l8,G.lj,G.lu,G.lw,G.lx,G.ly,G.lz,G.lA,G.lB,G.l9,G.la,G.lb,G.lc,G.ld,G.le,G.lC,G.lD,G.lE,G.lf,G.lg,G.lh,G.li,G.lk,G.ll,G.lm,G.ln,G.lo,G.lp,G.lq,G.lr,G.ls,G.lt,G.lv])
q(H.jE,[H.jA,H.cI])
r(P.d6,P.S)
r(H.Y,P.d6)
r(H.d3,H.m)
r(H.cb,H.a4)
q(H.cb,[H.dP,H.dR])
r(H.dQ,H.dP)
r(H.bQ,H.dQ)
r(H.dS,H.dR)
r(H.de,H.dS)
q(H.de,[H.eQ,H.eR,H.eS,H.eT,H.eU,H.df,H.bR])
r(H.e0,H.h_)
r(P.dX,P.d_)
r(P.dF,P.dG)
r(P.ks,P.kE)
r(P.dT,P.e6)
r(P.dK,P.dT)
r(P.e4,P.d7)
r(P.cp,P.e4)
q(P.ep,[P.i_,P.ij])
r(P.es,P.fi)
q(P.es,[P.i0,P.k0,P.jY])
r(P.jX,P.ij)
q(P.aJ,[P.dk,P.eA])
r(P.fU,P.bV)
q(W.e,[W.v,W.ex,W.bK,W.c8,W.aF,W.dU,W.aG,W.au,W.dY,W.fJ,W.cr,P.en,P.bj])
q(W.v,[W.B,W.aK])
q(W.B,[W.o,P.n])
q(W.o,[W.eh,W.ei,W.bF,W.ez,W.c2,W.c4,W.f8,W.bu])
r(W.i8,W.aV)
r(W.cQ,W.fT)
q(W.aC,[W.ia,W.ib])
r(W.fW,W.fV)
r(W.cR,W.fW)
r(W.fY,W.fX)
r(W.ev,W.fY)
r(W.ax,W.bE)
r(W.h2,W.h1)
r(W.c0,W.h2)
r(W.h6,W.h5)
r(W.bJ,W.h6)
r(W.aM,W.bK)
q(W.l,[W.b7,W.b3])
q(W.b7,[W.bM,W.ay,W.bS])
r(W.eM,W.h9)
r(W.eN,W.ha)
r(W.hc,W.hb)
r(W.eO,W.hc)
r(W.he,W.hd)
r(W.dg,W.he)
r(W.hi,W.hh)
r(W.f1,W.hi)
r(W.f6,W.hk)
r(W.dV,W.dU)
r(W.fd,W.dV)
r(W.hn,W.hm)
r(W.fe,W.hn)
r(W.fh,W.hr)
r(W.hz,W.hy)
r(W.fl,W.hz)
r(W.dZ,W.dY)
r(W.fm,W.dZ)
r(W.hB,W.hA)
r(W.fs,W.hB)
r(W.bv,W.ay)
r(W.hI,W.hH)
r(W.fS,W.hI)
r(W.dH,W.cS)
r(W.hK,W.hJ)
r(W.h4,W.hK)
r(W.hM,W.hL)
r(W.dO,W.hM)
r(W.hO,W.hN)
r(W.ho,W.hO)
r(W.hQ,W.hP)
r(W.hx,W.hQ)
r(W.dI,P.ci)
r(P.hw,P.kv)
r(P.aq,P.hj)
r(P.h8,P.h7)
r(P.eH,P.h8)
r(P.hg,P.hf)
r(P.eW,P.hg)
r(P.hu,P.ht)
r(P.fj,P.hu)
r(P.hD,P.hC)
r(P.ft,P.hD)
r(P.em,P.fP)
r(P.eY,P.bj)
r(P.hq,P.hp)
r(P.ff,P.hq)
q(K.cX,[K.b_,L.dq])
q(E.i1,[Z.bZ,A.ch,T.ck])
q(D.R,[D.bm,D.bn,D.w,O.f3,X.f2])
q(X.f2,[X.d5,X.c9,X.ca,X.dp])
q(O.as,[D.d2,U.c1])
q(D.i3,[U.i6,U.a3])
r(U.cN,U.a3)
q(A.ch,[A.cZ,A.d8])
q(A.a6,[A.cm,A.fx,A.fy,A.fz,A.fv,A.dr,A.fw,A.ds,A.dt,A.fA,A.dw,A.cn,A.dy,A.dz])
q(O.cj,[O.cY,O.bP])
q(O.d9,[O.j5,O.j6,O.da])
q(O.da,[O.j9,O.ja])
r(T.fn,T.ck)
r(T.fo,T.fn)
r(X.iu,X.jD)
s(H.co,H.fD)
s(H.dP,P.i)
s(H.dQ,H.cV)
s(H.dR,P.i)
s(H.dS,H.cV)
s(P.dM,P.i)
s(P.e4,P.hG)
s(P.e6,P.dl)
s(W.fT,W.i9)
s(W.fV,P.i)
s(W.fW,W.L)
s(W.fX,P.i)
s(W.fY,W.L)
s(W.h1,P.i)
s(W.h2,W.L)
s(W.h5,P.i)
s(W.h6,W.L)
s(W.h9,P.S)
s(W.ha,P.S)
s(W.hb,P.i)
s(W.hc,W.L)
s(W.hd,P.i)
s(W.he,W.L)
s(W.hh,P.i)
s(W.hi,W.L)
s(W.hk,P.S)
s(W.dU,P.i)
s(W.dV,W.L)
s(W.hm,P.i)
s(W.hn,W.L)
s(W.hr,P.S)
s(W.hy,P.i)
s(W.hz,W.L)
s(W.dY,P.i)
s(W.dZ,W.L)
s(W.hA,P.i)
s(W.hB,W.L)
s(W.hH,P.i)
s(W.hI,W.L)
s(W.hJ,P.i)
s(W.hK,W.L)
s(W.hL,P.i)
s(W.hM,W.L)
s(W.hN,P.i)
s(W.hO,W.L)
s(W.hP,P.i)
s(W.hQ,W.L)
s(P.h7,P.i)
s(P.h8,W.L)
s(P.hf,P.i)
s(P.hg,W.L)
s(P.ht,P.i)
s(P.hu,W.L)
s(P.hC,P.i)
s(P.hD,W.L)
s(P.fP,P.S)
s(P.hp,P.i)
s(P.hq,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",I:"double",af:"num",q:"String",ba:"bool",W:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(ba)","ar(ar)","~([R?])","~(bI)","~(R)","~(aA)","~(l)","~(ay)","~(q,@)","~(j,k<at>)","~(j,j)","aD<~>()","~(~())","W()","~(@,@)","~(bS)","~(R?)","W(@)","~(@)","~(cl,q,j)","@()","q(j)","~(~(R))","~(bM)","~(j,k<aN>)","I()","~(j,k<a3?>)","ar(lZ)","~(j,k<bq>)","W(C,b4)","B(v)","@(q)","ae<@>(@)","@(@,q)","~(af)","~(C?,C?)","W(~())","W(@,b4)","~(bv)","D<q,q>(D<q,q>,q)","ba(k<aN>)","~(q,j)","~(q[@])","j(j,j)","~(q,q?)","q(e)","~(j,@)","cl(@,@)","ar(ar{color:J?})","@(@)","q(aM)","~(aA,aA)","~(bN)","W(I,I,I)","aA(I,I,I)","~(b3)","~(q,q)","j(bi,bi)","j(bl,bl)","j(br,br)","j(bt,bt)","~(jJ)","~(C[b4?])","at(at)","~(at)","aD<@>(q)","W(@,@)","j(@,@)","ba(v)","bZ(j)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pJ(v.typeUniverse,JSON.parse('{"f0":"bp","bT":"bp","aW":"bp","rk":"l","rw":"l","rm":"bj","rl":"e","rF":"e","rI":"e","rj":"n","ry":"n","tc":"b3","rn":"o","rC":"o","rz":"v","rv":"v","t8":"au","rr":"b7","ro":"aK","rK":"aK","rH":"ay","rB":"bK","rA":"bJ","rs":"E","rt":"az","rE":"bQ","rD":"a4","eC":{"ba":[]},"c5":{"W":[]},"bp":{"mB":[]},"u":{"p":["1"],"m":["1"],"k":["1"]},"iW":{"u":["1"],"p":["1"],"m":["1"],"k":["1"]},"c6":{"I":[],"af":[]},"d0":{"I":[],"j":[],"af":[]},"eD":{"I":[],"af":[]},"bo":{"q":[]},"d1":{"F":[]},"V":{"i":["j"],"p":["j"],"m":["j"],"k":["j"],"i.E":"j"},"m":{"k":["1"]},"aY":{"k":["2"]},"cT":{"aY":["1","2"],"m":["2"],"k":["2"]},"dE":{"k":["1"]},"co":{"i":["1"],"p":["1"],"m":["1"],"k":["1"]},"cO":{"D":["1","2"]},"cP":{"D":["1","2"]},"dh":{"F":[]},"eF":{"F":[]},"fC":{"F":[]},"dW":{"b4":[]},"f7":{"F":[]},"Y":{"S":["1","2"],"D":["1","2"],"S.V":"2"},"d3":{"m":["1"],"k":["1"]},"eE":{"mQ":[]},"dN":{"mR":[]},"cb":{"x":["1"],"a4":[]},"bQ":{"i":["I"],"x":["I"],"p":["I"],"a4":[],"m":["I"],"k":["I"],"i.E":"I"},"de":{"i":["j"],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"]},"eQ":{"i":["j"],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"],"i.E":"j"},"eR":{"i":["j"],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"],"i.E":"j"},"eS":{"i":["j"],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"],"i.E":"j"},"eT":{"i":["j"],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"],"i.E":"j"},"eU":{"i":["j"],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"],"i.E":"j"},"df":{"i":["j"],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"],"i.E":"j"},"bR":{"i":["j"],"cl":[],"x":["j"],"p":["j"],"a4":[],"m":["j"],"k":["j"],"i.E":"j"},"h_":{"F":[]},"e0":{"F":[]},"ae":{"aD":["1"]},"e_":{"jJ":[]},"dX":{"k":["1"]},"ek":{"F":[]},"dF":{"dG":["1"]},"dK":{"dl":["1"],"m":["1"],"k":["1"]},"d_":{"k":["1"]},"d4":{"i":["1"],"p":["1"],"m":["1"],"k":["1"]},"d6":{"S":["1","2"],"D":["1","2"]},"S":{"D":["1","2"]},"d7":{"D":["1","2"]},"cp":{"D":["1","2"]},"dT":{"dl":["1"],"m":["1"],"k":["1"]},"I":{"af":[]},"j":{"af":[]},"p":{"m":["1"],"k":["1"]},"ej":{"F":[]},"fu":{"F":[]},"eV":{"F":[]},"aJ":{"F":[]},"dk":{"F":[]},"eA":{"F":[]},"fE":{"F":[]},"fB":{"F":[]},"dn":{"F":[]},"er":{"F":[]},"eZ":{"F":[]},"dm":{"F":[]},"et":{"F":[]},"hv":{"b4":[]},"bV":{"fF":[]},"hl":{"fF":[]},"fU":{"fF":[]},"B":{"v":[],"e":[]},"ax":{"bE":[]},"aM":{"e":[]},"bK":{"e":[]},"lL":{"B":[],"v":[],"e":[]},"bM":{"l":[]},"ay":{"l":[]},"v":{"e":[]},"b3":{"l":[]},"aF":{"e":[]},"aG":{"e":[]},"au":{"e":[]},"bS":{"l":[]},"b7":{"l":[]},"bv":{"ay":[],"l":[]},"o":{"B":[],"v":[],"e":[]},"eh":{"B":[],"v":[],"e":[]},"ei":{"B":[],"v":[],"e":[]},"bF":{"B":[],"v":[],"e":[]},"aK":{"v":[],"e":[]},"cR":{"i":["aq<af>"],"p":["aq<af>"],"x":["aq<af>"],"m":["aq<af>"],"k":["aq<af>"],"i.E":"aq<af>"},"cS":{"aq":["af"]},"ev":{"i":["q"],"p":["q"],"x":["q"],"m":["q"],"k":["q"],"i.E":"q"},"fR":{"i":["B"],"p":["B"],"m":["B"],"k":["B"],"i.E":"B"},"c0":{"i":["ax"],"p":["ax"],"x":["ax"],"m":["ax"],"k":["ax"],"i.E":"ax"},"ex":{"e":[]},"ez":{"B":[],"v":[],"e":[]},"bJ":{"i":["v"],"p":["v"],"x":["v"],"m":["v"],"k":["v"],"i.E":"v"},"c2":{"B":[],"v":[],"e":[]},"c4":{"lL":[],"B":[],"v":[],"e":[]},"c8":{"e":[]},"eM":{"S":["q","@"],"D":["q","@"],"S.V":"@"},"eN":{"S":["q","@"],"D":["q","@"],"S.V":"@"},"eO":{"i":["aP"],"p":["aP"],"x":["aP"],"m":["aP"],"k":["aP"],"i.E":"aP"},"fQ":{"i":["v"],"p":["v"],"m":["v"],"k":["v"],"i.E":"v"},"dg":{"i":["v"],"p":["v"],"x":["v"],"m":["v"],"k":["v"],"i.E":"v"},"f1":{"i":["aQ"],"p":["aQ"],"x":["aQ"],"m":["aQ"],"k":["aQ"],"i.E":"aQ"},"f6":{"S":["q","@"],"D":["q","@"],"S.V":"@"},"f8":{"B":[],"v":[],"e":[]},"fd":{"i":["aF"],"p":["aF"],"x":["aF"],"e":[],"m":["aF"],"k":["aF"],"i.E":"aF"},"fe":{"i":["aR"],"p":["aR"],"x":["aR"],"m":["aR"],"k":["aR"],"i.E":"aR"},"fh":{"S":["q","q"],"D":["q","q"],"S.V":"q"},"bu":{"B":[],"v":[],"e":[]},"fl":{"i":["au"],"p":["au"],"x":["au"],"m":["au"],"k":["au"],"i.E":"au"},"fm":{"i":["aG"],"p":["aG"],"x":["aG"],"e":[],"m":["aG"],"k":["aG"],"i.E":"aG"},"fs":{"i":["aH"],"p":["aH"],"x":["aH"],"m":["aH"],"k":["aH"],"i.E":"aH"},"fJ":{"e":[]},"cr":{"e":[]},"fS":{"i":["E"],"p":["E"],"x":["E"],"m":["E"],"k":["E"],"i.E":"E"},"dH":{"aq":["af"]},"h4":{"i":["aL?"],"p":["aL?"],"x":["aL?"],"m":["aL?"],"k":["aL?"],"i.E":"aL?"},"dO":{"i":["v"],"p":["v"],"x":["v"],"m":["v"],"k":["v"],"i.E":"v"},"ho":{"i":["aS"],"p":["aS"],"x":["aS"],"m":["aS"],"k":["aS"],"i.E":"aS"},"hx":{"i":["az"],"p":["az"],"x":["az"],"m":["az"],"k":["az"],"i.E":"az"},"dI":{"ci":["1"]},"e1":{"bL":[]},"ey":{"i":["B"],"p":["B"],"m":["B"],"k":["B"],"i.E":"B"},"aq":{"hj":["1"]},"eH":{"i":["aX"],"p":["aX"],"m":["aX"],"k":["aX"],"i.E":"aX"},"eW":{"i":["b0"],"p":["b0"],"m":["b0"],"k":["b0"],"i.E":"b0"},"fj":{"i":["q"],"p":["q"],"m":["q"],"k":["q"],"i.E":"q"},"n":{"B":[],"v":[],"e":[]},"ft":{"i":["b5"],"p":["b5"],"m":["b5"],"k":["b5"],"i.E":"b5"},"em":{"S":["q","@"],"D":["q","@"],"S.V":"@"},"en":{"e":[]},"bj":{"e":[]},"eY":{"e":[]},"ff":{"i":["D<@,@>"],"p":["D<@,@>"],"m":["D<@,@>"],"k":["D<@,@>"],"i.E":"D<@,@>"},"cX":{"bO":[]},"eg":{"bO":[]},"b_":{"bO":[]},"a2":{"bO":[]},"dq":{"bO":[]},"as":{"k":["1"],"as.T":"1"},"bm":{"R":[]},"bn":{"R":[]},"w":{"R":[]},"f3":{"R":[]},"d5":{"R":[]},"c9":{"R":[]},"ca":{"R":[]},"f2":{"R":[]},"dp":{"R":[]},"op":{"aN":[]},"oD":{"aN":[]},"oV":{"aN":[]},"pd":{"aN":[]},"d2":{"as":["aN"],"k":["aN"],"as.T":"aN"},"cN":{"a3":[]},"c1":{"as":["a3?"],"a3":[],"k":["a3?"],"as.T":"a3?"},"dB":{"a3":[]},"dC":{"a3":[]},"dD":{"a3":[]},"cm":{"a6":[]},"cn":{"a6":[]},"cZ":{"ch":[]},"d8":{"ch":[]},"fx":{"a6":[]},"fy":{"a6":[]},"fz":{"a6":[]},"fv":{"a6":[]},"dr":{"a6":[]},"fw":{"a6":[]},"ds":{"a6":[]},"dt":{"a6":[]},"fA":{"a6":[]},"dw":{"a6":[]},"dy":{"a6":[]},"dz":{"a6":[]},"ar":{"lZ":[]},"bP":{"cj":[]},"cY":{"cj":[]},"fn":{"ck":[]},"fo":{"ck":[]},"cl":{"p":["j"],"m":["j"],"k":["j"]}}'))
H.pI(v.typeUniverse,JSON.parse('{"al":1,"m":1,"c7":1,"eK":2,"fM":1,"cV":1,"fD":1,"co":1,"cO":2,"eI":1,"cb":1,"ci":1,"cu":1,"fi":2,"hs":1,"dL":1,"d_":1,"d4":1,"d6":2,"hG":2,"d7":2,"dT":1,"dM":1,"e4":2,"e6":1,"ep":2,"es":2,"eB":1,"dI":1,"L":1,"cW":1,"bm":1,"bn":1,"w":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",D:"May not create a face with a first vertex which is not attached to a shape.",R:"May not create a face with vertices attached to different shapes.",E:"May not create a line with a start vertex which is not attached to a shape.",T:"May not create a line with vertices attached to different shapes.",p:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.mk
return{fK:s("bE"),eT:s("bZ"),E:s("cK"),gA:s("bF"),ar:s("cM"),gw:s("m<@>"),h:s("B"),l:s("at"),C:s("F"),aD:s("l"),c8:s("ax"),bX:s("c0"),b8:s("rx"),c:s("aD<@>"),I:s("bL"),fS:s("c2"),gk:s("c4"),eu:s("u<el>"),i:s("u<op>"),cn:s("u<bi>"),dh:s("u<lL>"),U:s("u<oD>"),fD:s("u<bl>"),w:s("u<bI>"),fv:s("u<c3>"),e:s("u<aN>"),L:s("u<bN>"),B:s("u<bO>"),fA:s("u<bq>"),J:s("u<oV>"),b:s("u<ac>"),eg:s("u<br>"),o:s("u<cd>"),D:s("u<pd>"),c3:s("u<bt>"),g9:s("u<ci<C>>"),s:s("u<q>"),ga:s("u<ck>"),gT:s("u<aH>"),ab:s("u<dq>"),gN:s("u<cl>"),dC:s("u<a6>"),Y:s("u<du>"),V:s("u<dv>"),M:s("u<dx>"),O:s("u<dA>"),hg:s("u<X>"),k:s("u<aA>"),bP:s("u<hR>"),n:s("u<I>"),gn:s("u<@>"),t:s("u<j>"),eJ:s("u<a3?>"),bc:s("u<cj?>"),p:s("u<cn?>"),a:s("u<~(R)>"),T:s("c5"),eH:s("mB"),Q:s("aW"),aU:s("x<@>"),fX:s("Y<j,ba>"),y:s("Y<j,j>"),d:s("p<du>"),m:s("p<dv>"),r:s("p<dx>"),R:s("p<dA>"),x:s("p<@>"),bv:s("d5"),dB:s("D<q,bP>"),f:s("D<@,@>"),bM:s("bP"),gc:s("bq"),bu:s("c8"),Z:s("c9"),bZ:s("ca"),cG:s("dd"),dE:s("a4"),bm:s("bR"),P:s("W"),K:s("C"),q:s("aq<af>"),fJ:s("mQ"),cz:s("mR"),fg:s("ch"),N:s("q"),bY:s("bu"),aF:s("jJ"),bJ:s("fq"),dr:s("dp"),u:s("dr"),v:s("cm"),g:s("ds"),F:s("dt"),bK:s("dw"),j:s("cn"),G:s("dy"),bz:s("dz"),ak:s("bT"),dw:s("cp<q,q>"),dD:s("fF"),bj:s("dF<aM>"),ao:s("ae<aM>"),eI:s("ae<@>"),cJ:s("ba"),gR:s("I"),z:s("@"),bI:s("@(C)"),ag:s("@(C,b4)"),S:s("j"),A:s("0&*"),_:s("C*"),bG:s("aD<W>?"),fY:s("cZ?"),bL:s("d8?"),X:s("C?"),gW:s("cg?"),dl:s("fg?"),f7:s("fr?"),W:s("cm?"),di:s("af"),H:s("~"),h2:s("~(R)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.bF.prototype
C.M=W.aM.prototype
C.N=J.a.prototype
C.b=J.u.prototype
C.c=J.d0.prototype
C.O=J.c5.prototype
C.d=J.c6.prototype
C.a=J.bo.prototype
C.P=J.aW.prototype
C.U=H.bR.prototype
C.w=J.f0.prototype
C.Y=P.cg.prototype
C.n=J.bT.prototype
C.x=W.bv.prototype
C.y=W.cr.prototype
C.z=new E.bY("Browser.chrome")
C.o=new E.bY("Browser.firefox")
C.p=new E.bY("Browser.edge")
C.A=new E.bY("Browser.other")
C.a0=new P.i0()
C.B=new P.i_()
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

C.I=new P.eZ()
C.f=new P.jX()
C.J=new P.k0()
C.e=new P.ks()
C.K=new P.hv()
C.m=new P.bG(0)
C.L=new P.bG(5e6)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.R=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.S=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.t=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.u=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.Q=H.b(s([]),t.s)
C.T=new H.cP(0,{},C.Q,H.mk("cP<q,q>"))
C.V=new E.cc("OperatingSystem.windows")
C.v=new E.cc("OperatingSystem.mac")
C.W=new E.cc("OperatingSystem.linux")
C.X=new E.cc("OperatingSystem.other")
C.Z=new P.jY(!1)
C.a_=new P.ct(null,2)})();(function staticFields(){$.kp=null
$.aU=0
$.cJ=null
$.mv=null
$.nN=null
$.nJ=null
$.nS=null
$.kZ=null
$.l5=null
$.mm=null
$.cx=null
$.e8=null
$.e9=null
$.mg=!1
$.H=C.e
$.av=H.b([],H.mk("u<C>"))
$.il=null
$.kV=null
$.mH=null
$.mK=null
$.ad=null
$.b1=null
$.mT=null
$.mV=null
$.bU=null
$.nc=null
$.na=null
$.nb=null
$.n9=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ru","nZ",function(){return H.r1("_$dart_dartClosure")})
s($,"rL","o0",function(){return H.b6(H.jO({
toString:function(){return"$receiver$"}}))})
s($,"rM","o1",function(){return H.b6(H.jO({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rN","o2",function(){return H.b6(H.jO(null))})
s($,"rO","o3",function(){return H.b6(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rR","o6",function(){return H.b6(H.jO(void 0))})
s($,"rS","o7",function(){return H.b6(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rQ","o5",function(){return H.b6(H.n4(null))})
s($,"rP","o4",function(){return H.b6(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rU","o9",function(){return H.b6(H.n4(void 0))})
s($,"rT","o8",function(){return H.b6(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"t9","mp",function(){return P.po()})
s($,"rV","oa",function(){return new P.k_().$0()})
s($,"rW","ob",function(){return new P.jZ().$0()})
s($,"ta","of",function(){return new Int8Array(H.cw(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"td","og",function(){return P.lX("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"tq","oh",function(){return P.q5()})
s($,"t2","oe",function(){return Z.aI(0)})
s($,"rX","oc",function(){return Z.aI(511)})
s($,"t4","bh",function(){return Z.aI(1)})
s($,"t3","bg",function(){return Z.aI(2)})
s($,"rZ","bf",function(){return Z.aI(4)})
s($,"t5","bD",function(){return Z.aI(8)})
s($,"t6","bW",function(){return Z.aI(16)})
s($,"t_","cF",function(){return Z.aI(32)})
s($,"t0","ee",function(){return Z.aI(64)})
s($,"t1","od",function(){return Z.aI(96)})
s($,"t7","cG",function(){return Z.aI(128)})
s($,"rY","bC",function(){return Z.aI(256)})
s($,"rq","nY",function(){return new V.im()})
r($,"rp","A",function(){return $.nY()})
r($,"rG","o_",function(){var q,p,o,n,m=V.lW(),l=$.nb
if(l==null)l=$.nb=V.pm(0,1,0)
q=V.nd().X()
p=l.aO(q).X()
o=q.aO(p)
n=V.pn(m)
return V.aZ(p.a,o.a,q.a,p.aG(0).ab(n),p.b,o.b,q.b,o.aG(0).ab(n),p.c,o.c,q.c,q.aG(0).ab(n),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.dd,DataView:H.a4,ArrayBufferView:H.a4,Float32Array:H.bQ,Float64Array:H.bQ,Int16Array:H.eQ,Int32Array:H.eR,Int8Array:H.eS,Uint16Array:H.eT,Uint32Array:H.eU,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.bR,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.hU,HTMLAnchorElement:W.eh,HTMLAreaElement:W.ei,Blob:W.bE,HTMLCanvasElement:W.bF,CanvasRenderingContext2D:W.cM,CDATASection:W.aK,CharacterData:W.aK,Comment:W.aK,ProcessingInstruction:W.aK,Text:W.aK,CSSPerspective:W.i8,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.cQ,MSStyleCSSProperties:W.cQ,CSS2Properties:W.cQ,CSSImageValue:W.aC,CSSKeywordValue:W.aC,CSSNumericValue:W.aC,CSSPositionValue:W.aC,CSSResourceValue:W.aC,CSSUnitValue:W.aC,CSSURLImageValue:W.aC,CSSStyleValue:W.aC,CSSMatrixComponent:W.aV,CSSRotation:W.aV,CSSScale:W.aV,CSSSkew:W.aV,CSSTranslation:W.aV,CSSTransformComponent:W.aV,CSSTransformValue:W.ia,CSSUnparsedValue:W.ib,DataTransferItemList:W.ic,DOMException:W.id,ClientRectList:W.cR,DOMRectList:W.cR,DOMRectReadOnly:W.cS,DOMStringList:W.ev,DOMTokenList:W.ie,Element:W.B,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ax,FileList:W.c0,FileWriter:W.ex,HTMLFormElement:W.ez,Gamepad:W.aL,History:W.iv,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,XMLHttpRequest:W.aM,XMLHttpRequestUpload:W.bK,XMLHttpRequestEventTarget:W.bK,ImageData:W.bL,HTMLImageElement:W.c2,HTMLInputElement:W.c4,KeyboardEvent:W.bM,Location:W.j2,MediaList:W.jj,MessagePort:W.c8,MIDIInputMap:W.eM,MIDIOutputMap:W.eN,MimeType:W.aP,MimeTypeArray:W.eO,PointerEvent:W.ay,MouseEvent:W.ay,DragEvent:W.ay,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.dg,RadioNodeList:W.dg,Plugin:W.aQ,PluginArray:W.f1,ProgressEvent:W.b3,ResourceProgressEvent:W.b3,RTCStatsReport:W.f6,HTMLSelectElement:W.f8,SourceBuffer:W.aF,SourceBufferList:W.fd,SpeechGrammar:W.aR,SpeechGrammarList:W.fe,SpeechRecognitionResult:W.aS,Storage:W.fh,CSSStyleSheet:W.az,StyleSheet:W.az,HTMLTableCellElement:W.bu,HTMLTableDataCellElement:W.bu,HTMLTableHeaderCellElement:W.bu,TextTrack:W.aG,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.fl,TextTrackList:W.fm,TimeRanges:W.jI,Touch:W.aH,TouchEvent:W.bS,TouchList:W.fs,TrackDefaultList:W.jM,CompositionEvent:W.b7,FocusEvent:W.b7,TextEvent:W.b7,UIEvent:W.b7,URL:W.jW,VideoTrackList:W.fJ,WheelEvent:W.bv,Window:W.cr,DOMWindow:W.cr,CSSRuleList:W.fS,ClientRect:W.dH,DOMRect:W.dH,GamepadList:W.h4,NamedNodeMap:W.dO,MozNamedAttrMap:W.dO,SpeechRecognitionResultList:W.ho,StyleSheetList:W.hx,SVGLength:P.aX,SVGLengthList:P.eH,SVGNumber:P.b0,SVGNumberList:P.eW,SVGPointList:P.jo,SVGStringList:P.fj,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.b5,SVGTransformList:P.ft,AudioBuffer:P.hY,AudioParamMap:P.em,AudioTrackList:P.en,AudioContext:P.bj,webkitAudioContext:P.bj,BaseAudioContext:P.bj,OfflineAudioContext:P.eY,WebGL2RenderingContext:P.cg,SQLResultSetRowList:P.ff})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.dP.$nativeSuperclassTag="ArrayBufferView"
H.dQ.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
W.dU.$nativeSuperclassTag="EventTarget"
W.dV.$nativeSuperclassTag="EventTarget"
W.dY.$nativeSuperclassTag="EventTarget"
W.dZ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=G.r9
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
