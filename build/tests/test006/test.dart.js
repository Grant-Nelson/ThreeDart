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
a[c]=function(){a[c]=function(){H.qb(b)}
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
if(a[b]!==s)H.qc(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ln"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ln"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ln(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kX:function kX(){},
kZ:function(a){return new H.cV("Field '"+a+"' has been assigned during initialization.")},
kD:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jk:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
o7:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pN:function(a,b,c){return a},
nL:function(a,b,c,d){if(t.gw.b(a))return new H.cK(a,b,c.I("@<0>").bf(d).I("cK<1,2>"))
return new H.aW(a,b,c.I("@<0>").bf(d).I("aW<1,2>"))},
kU:function(){return new P.cb("No element")},
nC:function(){return new P.cb("Too many elements")},
o4:function(a,b){H.fa(a,0,J.aQ(a)-1,b)},
fa:function(a,b,c,d){if(c-b<=32)H.o3(a,b,c,d)
else H.o2(a,b,c,d)},
o3:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cw(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aq()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
o2:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a5(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a5(a4+a5,2),f=g-j,e=g+j,d=J.cw(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.U(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.l(a3,p,d.h(a3,r))
d.l(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.l(a3,p,d.h(a3,r))
l=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,o)
q=m
r=l
break}else{d.l(a3,p,d.h(a3,q))
d.l(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.l(a3,p,d.h(a3,r))
d.l(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.l(a3,p,d.h(a3,r))
l=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,o)
r=l}else{d.l(a3,p,d.h(a3,q))
d.l(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.l(a3,a4,d.h(a3,a2))
d.l(a3,a2,b)
a2=q+1
d.l(a3,a5,d.h(a3,a2))
d.l(a3,a2,a0)
H.fa(a3,a4,r-2,a6)
H.fa(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.U(a6.$2(d.h(a3,r),b),0);)++r
for(;J.U(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.l(a3,p,d.h(a3,r))
d.l(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.l(a3,p,d.h(a3,r))
l=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,o)
r=l}else{d.l(a3,p,d.h(a3,q))
d.l(a3,q,o)}q=m
break}}H.fa(a3,r,q,a6)}else H.fa(a3,r,q,a6)},
cV:function cV(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d_:function d_(){},
bl:function bl(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
eK:function eK(a,b){this.a=null
this.b=a
this.c=b},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.$ti=c},
fN:function fN(a,b){this.a=a
this.b=b},
cM:function cM(){},
fF:function fF(){},
cj:function cj(){},
nv:function(){throw H.c(P.A("Cannot modify unmodifiable Map"))},
mT:function(a){var s,r=H.mS(a)
if(r!=null)return r
s="minified:"+a
return s},
mN:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cz(a)
return s},
dg:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lS:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.E(q,o)|32)>r)return n}return parseInt(a,b)},
dh:function(a){return H.nO(a)},
nO:function(a){var s,r,q,p
if(a instanceof P.N)return H.aq(H.b7(a),null)
if(J.eb(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.aq(H.b7(a),null)},
nP:function(){if(!!self.location)return self.location.href
return null},
lR:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nX:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.kw(q))throw H.c(H.ea(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b_(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ea(q))}return H.lR(p)},
lT:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kw(q))throw H.c(H.ea(q))
if(q<0)throw H.c(H.ea(q))
if(q>65535)return H.nX(a)}return H.lR(a)},
nY:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
av:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b_(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.aa(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nW:function(a){var s=H.c7(a).getFullYear()+0
return s},
nU:function(a){var s=H.c7(a).getMonth()+1
return s},
nQ:function(a){var s=H.c7(a).getDate()+0
return s},
nR:function(a){var s=H.c7(a).getHours()+0
return s},
nT:function(a){var s=H.c7(a).getMinutes()+0
return s},
nV:function(a){var s=H.c7(a).getSeconds()+0
return s},
nS:function(a){var s=H.c7(a).getMilliseconds()+0
return s},
pZ:function(a){throw H.c(H.ea(a))},
d:function(a,b){if(a==null)J.aQ(a)
throw H.c(H.cu(a,b))},
cu:function(a,b){var s,r="index"
if(!H.kw(b))return new P.aC(!0,b,r,null)
s=J.aQ(a)
if(b<0||b>=s)return P.M(b,a,r,null,s)
return P.f5(b,r)},
pR:function(a,b,c){if(a>c)return P.aa(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aa(b,a,c,"end",null)
return new P.aC(!0,b,"end",null)},
ea:function(a){return new P.aC(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eU()
s=new Error()
s.dartException=a
r=H.qd
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qd:function(){return J.cz(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aF(a))},
b1:function(a){var s,r,q,p,o,n
a=H.mQ(a.replace(String({}),"$receiver$"))
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
m4:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kY:function(a,b){var s=b==null,r=s?null:b.method
return new H.eF(a,r,s?null:b.receiver)},
ar:function(a){if(a==null)return new H.j7(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bP(a,a.dartException)
return H.pJ(a)},
bP:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b_(r,16)&8191)===10)switch(q){case 438:return H.bP(a,H.kY(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bP(a,new H.df(p,e))}}if(a instanceof TypeError){o=$.mX()
n=$.mY()
m=$.mZ()
l=$.n_()
k=$.n2()
j=$.n3()
i=$.n1()
$.n0()
h=$.n5()
g=$.n4()
f=o.ao(s)
if(f!=null)return H.bP(a,H.kY(s,f))
else{f=n.ao(s)
if(f!=null){f.method="call"
return H.bP(a,H.kY(s,f))}else{f=m.ao(s)
if(f==null){f=l.ao(s)
if(f==null){f=k.ao(s)
if(f==null){f=j.ao(s)
if(f==null){f=i.ao(s)
if(f==null){f=l.ao(s)
if(f==null){f=h.ao(s)
if(f==null){f=g.ao(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bP(a,new H.df(s,f==null?e:f.method))}}return H.bP(a,new H.fE(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dp()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bP(a,new P.aC(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dp()
return a},
lp:function(a){var s
if(a==null)return new H.hs(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hs(a)},
pT:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
q2:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
ct:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q2)
a.$identity=s
return s},
nu:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ff().constructor.prototype):Object.create(new H.bT(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aS
if(typeof r!=="number")return r.Y()
$.aS=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lE(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nq(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lE(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nq:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mL,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.no:H.nn
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nr:function(a,b,c,d){var s=H.lD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lE:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nt(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nr(r,!p,s,b)
if(r===0){p=$.aS
if(typeof p!=="number")return p.Y()
$.aS=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cA
return new Function(p+(o==null?$.cA=H.i4("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aS
if(typeof p!=="number")return p.Y()
$.aS=p+1
m+=p
p="return function("+m+"){return this."
o=$.cA
return new Function(p+(o==null?$.cA=H.i4("self"):o)+"."+H.x(s)+"("+m+");}")()},
ns:function(a,b,c,d){var s=H.lD,r=H.np
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
nt:function(a,b){var s,r,q,p,o,n,m,l=$.cA
if(l==null)l=$.cA=H.i4("self")
s=$.lC
if(s==null)s=$.lC=H.i4("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.ns(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aS
if(typeof n!=="number")return n.Y()
$.aS=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aS
if(typeof n!=="number")return n.Y()
$.aS=n+1
return new Function(o+n+"}")()},
ln:function(a,b,c,d,e,f,g){return H.nu(a,b,c,d,!!e,!!f,g)},
nn:function(a,b){return H.hG(v.typeUniverse,H.b7(a.a),b)},
no:function(a,b){return H.hG(v.typeUniverse,H.b7(a.c),b)},
lD:function(a){return a.a},
np:function(a){return a.c},
i4:function(a){var s,r,q,p=new H.bT("self","target","receiver","name"),o=J.kW(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bR("Field name "+a+" not found."))},
qb:function(a){throw H.c(new P.eq(a))},
pW:function(a){return v.getIsolateTag(a)},
qc:function(a){return H.h(new H.cV(a))},
rk:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q4:function(a){var s,r,q,p,o,n=$.mK.$1(a),m=$.kB[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kH[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mH.$2(a,n)
if(q!=null){m=$.kB[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kH[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kK(s)
$.kB[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kH[n]=s
return s}if(p==="-"){o=H.kK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mO(a,s)
if(p==="*")throw H.c(P.jB(n))
if(v.leafTags[n]===true){o=H.kK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mO(a,s)},
mO:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ls(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kK:function(a){return J.ls(a,!1,null,!!a.$iy)},
q6:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kK(s)
else return J.ls(s,c,null,null)},
q0:function(){if(!0===$.lq)return
$.lq=!0
H.q1()},
q1:function(){var s,r,q,p,o,n,m,l
$.kB=Object.create(null)
$.kH=Object.create(null)
H.q_()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mP.$1(o)
if(n!=null){m=H.q6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
q_:function(){var s,r,q,p,o,n,m=C.I()
m=H.cs(C.J,H.cs(C.K,H.cs(C.u,H.cs(C.u,H.cs(C.L,H.cs(C.M,H.cs(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mK=new H.kE(p)
$.mH=new H.kF(o)
$.mP=new H.kG(n)},
cs:function(a,b){return a(b)||b},
nG:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
mR:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pS:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mQ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lv:function(a,b,c){var s=H.q9(a,b,c)
return s},
q9:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mQ(b),'g'),H.pS(c))},
cF:function cF(){},
cG:function cG(a,b,c,d){var _=this
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
df:function df(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
j7:function j7(a){this.a=a},
hs:function hs(a){this.a=a
this.b=null},
bB:function bB(){},
fm:function fm(){},
ff:function ff(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iG:function iG(a){this.a=a},
iI:function iI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cX:function cX(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cq:function(a){return a},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cu(b,a))},
oX:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pR(a,b,c))
return b},
da:function da(){},
a_:function a_(){},
c5:function c5(){},
bI:function bI(){},
db:function db(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
dc:function dc(){},
bJ:function bJ(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
lZ:function(a,b){var s=b.c
return s==null?b.c=H.lc(a,b.z,!0):s},
lY:function(a,b){var s=b.c
return s==null?b.c=H.e0(a,"lJ",[b.z]):s},
m_:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m_(a.z)
return s===11||s===12},
o0:function(a){return a.cy},
lo:function(a){return H.ld(v.typeUniverse,a,!1)},
bu:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bu(a,s,a0,a1)
if(r===s)return b
return H.mq(a,r,!0)
case 7:s=b.z
r=H.bu(a,s,a0,a1)
if(r===s)return b
return H.lc(a,r,!0)
case 8:s=b.z
r=H.bu(a,s,a0,a1)
if(r===s)return b
return H.mp(a,r,!0)
case 9:q=b.Q
p=H.e9(a,q,a0,a1)
if(p===q)return b
return H.e0(a,b.z,p)
case 10:o=b.z
n=H.bu(a,o,a0,a1)
m=b.Q
l=H.e9(a,m,a0,a1)
if(n===o&&l===m)return b
return H.la(a,n,l)
case 11:k=b.z
j=H.bu(a,k,a0,a1)
i=b.Q
h=H.pG(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mo(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e9(a,g,a0,a1)
o=b.z
n=H.bu(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lb(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hY("Attempted to substitute unexpected RTI kind "+c))}},
e9:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bu(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pH:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bu(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pG:function(a,b,c,d){var s,r=b.a,q=H.e9(a,r,c,d),p=b.b,o=H.e9(a,p,c,d),n=b.c,m=H.pH(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h4()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
pO:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mL(s)
return a.$S()}return null},
mM:function(a,b){var s
if(H.m_(b))if(a instanceof H.bB){s=H.pO(a)
if(s!=null)return s}return H.b7(a)},
b7:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lj(a)}if(Array.isArray(a))return H.li(a)
return H.lj(J.eb(a))},
li:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
T:function(a){var s=a.$ti
return s!=null?s:H.lj(a)},
lj:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.p4(a,s)},
p4:function(a,b){var s=a instanceof H.bB?a.__proto__.__proto__.constructor:b,r=H.oF(v.typeUniverse,s.name)
b.$ccache=r
return r},
mL:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ld(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
p3:function(a){var s,r,q,p=this
if(p===t.K)return H.e6(p,a,H.p8)
if(!H.b8(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e6(p,a,H.pb)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kw
else if(r===t.gR||r===t.H)q=H.p7
else if(r===t.N)q=H.p9
else q=r===t.cJ?H.kv:null
if(q!=null)return H.e6(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.q3)){p.r="$i"+s
return H.e6(p,a,H.pa)}}else if(s===7)return H.e6(p,a,H.p1)
return H.e6(p,a,H.p_)},
e6:function(a,b,c){a.b=c
return a.b(b)},
p2:function(a){var s,r=this,q=H.oZ
if(!H.b8(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.oW
else if(r===t.K)q=H.oV
else{s=H.ec(r)
if(s)q=H.p0}r.a=q
return r.a(a)},
lm:function(a){var s,r=a.y
if(!H.b8(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lm(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p_:function(a){var s=this
if(a==null)return H.lm(s)
return H.R(v.typeUniverse,H.mM(a,s),null,s,null)},
p1:function(a){if(a==null)return!0
return this.z.b(a)},
pa:function(a){var s,r=this
if(a==null)return H.lm(r)
s=r.r
if(a instanceof P.N)return!!a[s]
return!!J.eb(a)[s]},
oZ:function(a){var s,r=this
if(a==null){s=H.ec(r)
if(s)return a}else if(r.b(a))return a
H.mB(a,r)},
p0:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mB(a,s)},
mB:function(a,b){throw H.c(H.ov(H.mh(a,H.mM(a,b),H.aq(b,null))))},
mh:function(a,b,c){var s=P.io(a),r=H.aq(b==null?H.b7(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
ov:function(a){return new H.dZ("TypeError: "+a)},
ab:function(a,b){return new H.dZ("TypeError: "+H.mh(a,null,b))},
p8:function(a){return a!=null},
oV:function(a){if(a!=null)return a
throw H.c(H.ab(a,"Object"))},
pb:function(a){return!0},
oW:function(a){return a},
kv:function(a){return!0===a||!1===a},
mz:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
r8:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
r7:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
r9:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
rb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
ra:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
kw:function(a){return typeof a=="number"&&Math.floor(a)===a},
ko:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
rd:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
rc:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
p7:function(a){return typeof a=="number"},
re:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
rg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
rf:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
p9:function(a){return typeof a=="string"},
kp:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
ri:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
rh:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
pC:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.aq(a[q],b)
return s},
mC:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.Y(m,a5[j])
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
if(l===9){p=H.pI(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pC(o,b)+">"):p}if(l===11)return H.mC(a,b,null)
if(l===12)return H.mC(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
pI:function(a){var s,r=H.mS(a)
if(r!=null)return r
s="minified:"+a
return s},
mr:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oF:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ld(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e1(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e0(a,b,q)
n[b]=o
return o}else return m},
oD:function(a,b){return H.my(a.tR,b)},
oC:function(a,b){return H.my(a.eT,b)},
ld:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mm(H.mk(a,null,b,c))
r.set(b,s)
return s},
hG:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mm(H.mk(a,b,c,!0))
q.set(c,r)
return r},
oE:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.la(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bt:function(a,b){b.a=H.p2
b.b=H.p3
return b},
e1:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aw(null,null)
s.y=b
s.cy=c
r=H.bt(a,s)
a.eC.set(c,r)
return r},
mq:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oA(a,b,r,c)
a.eC.set(r,s)
return s},
oA:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aw(null,null)
q.y=6
q.z=b
q.cy=c
return H.bt(a,q)},
lc:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oz(a,b,r,c)
a.eC.set(r,s)
return s},
oz:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b8(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ec(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ec(q.z))return q
else return H.lZ(a,b)}}p=new H.aw(null,null)
p.y=7
p.z=b
p.cy=c
return H.bt(a,p)},
mp:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.ox(a,b,r,c)
a.eC.set(r,s)
return s},
ox:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e0(a,"lJ",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aw(null,null)
q.y=8
q.z=b
q.cy=c
return H.bt(a,q)},
oB:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aw(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bt(a,s)
a.eC.set(q,r)
return r},
hF:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
ow:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e0:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hF(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aw(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bt(a,r)
a.eC.set(p,q)
return q},
la:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hF(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aw(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bt(a,o)
a.eC.set(q,n)
return n},
mo:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hF(m)
if(j>0){s=l>0?",":""
r=H.hF(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.ow(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aw(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bt(a,o)
a.eC.set(q,r)
return r},
lb:function(a,b,c,d){var s,r=b.cy+("<"+H.hF(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oy(a,b,c,r,d)
a.eC.set(r,s)
return s},
oy:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bu(a,b,r,0)
m=H.e9(a,c,r,0)
return H.lb(a,n,m,c!==m)}}l=new H.aw(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bt(a,l)},
mk:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mm:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.op(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.ml(a,r,h,g,!1)
else if(q===46)r=H.ml(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bs(a.u,a.e,g.pop()))
break
case 94:g.push(H.oB(a.u,g.pop()))
break
case 35:g.push(H.e1(a.u,5,"#"))
break
case 64:g.push(H.e1(a.u,2,"@"))
break
case 126:g.push(H.e1(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.l9(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e0(p,n,o))
else{m=H.bs(p,a.e,n)
switch(m.y){case 11:g.push(H.lb(p,m,o,a.n))
break
default:g.push(H.la(p,m,o))
break}}break
case 38:H.oq(a,g)
break
case 42:p=a.u
g.push(H.mq(p,H.bs(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lc(p,H.bs(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mp(p,H.bs(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h4()
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
H.l9(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mo(p,H.bs(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.l9(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.os(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bs(a.u,a.e,i)},
op:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ml:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mr(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.o0(o)+'"')
d.push(H.hG(s,o,n))}else d.push(p)
return m},
oq:function(a,b){var s=b.pop()
if(0===s){b.push(H.e1(a.u,1,"0&"))
return}if(1===s){b.push(H.e1(a.u,4,"1&"))
return}throw H.c(P.hY("Unexpected extended operation "+H.x(s)))},
bs:function(a,b,c){if(typeof c=="string")return H.e0(a,c,a.sEA)
else if(typeof c=="number")return H.or(a,b,c)
else return c},
l9:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bs(a,b,c[s])},
os:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bs(a,b,c[s])},
or:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hY("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hY("Bad index "+c+" for "+b.i(0)))},
R:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.R(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.R(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.R(a,b.z,c,d,e)
if(r===6)return H.R(a,b.z,c,d,e)
return r!==7}if(r===6)return H.R(a,b.z,c,d,e)
if(p===6){s=H.lZ(a,d)
return H.R(a,b,c,s,e)}if(r===8){if(!H.R(a,b.z,c,d,e))return!1
return H.R(a,H.lY(a,b),c,d,e)}if(r===7){s=H.R(a,t.P,c,d,e)
return s&&H.R(a,b.z,c,d,e)}if(p===8){if(H.R(a,b,c,d.z,e))return!0
return H.R(a,b,c,H.lY(a,d),e)}if(p===7){s=H.R(a,b,c,t.P,e)
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
if(!H.R(a,k,c,j,e)||!H.R(a,j,e,k,c))return!1}return H.mD(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mD(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.p6(a,b,c,d,e)}return!1},
mD:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
p6:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.R(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mr(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.R(a,H.hG(a,b,l[p]),c,r[p],e))return!1
return!0},
ec:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b8(a))if(r!==7)if(!(r===6&&H.ec(a.z)))s=r===8&&H.ec(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
q3:function(a){var s
if(!H.b8(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b8:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
my:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aw:function aw(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h4:function h4(){this.c=this.b=this.a=null},
h0:function h0(){},
dZ:function dZ(a){this.a=a},
mS:function(a){return v.mangledGlobalNames[a]},
q7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ls:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kC:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lq==null){H.q0()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jB("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k0
if(o==null)o=$.k0=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.q4(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.k0
if(o==null)o=$.k0=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nD:function(a,b){if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.nE(new Array(a),b)},
kV:function(a,b){if(a<0)throw H.c(P.bR("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.I("w<0>"))},
nE:function(a,b){return J.kW(H.b(a,b.I("w<0>")))},
kW:function(a){a.fixed$length=Array
return a},
nF:function(a,b){return J.nh(a,b)},
eb:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cT.prototype
return J.eD.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.cU.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.N)return a
return J.kC(a)},
cw:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.N)return a
return J.kC(a)},
hT:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.N)return a
return J.kC(a)},
pU:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bL.prototype
return a},
pV:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bL.prototype
return a},
aP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.N)return a
return J.kC(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eb(a).q(a,b)},
lx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mN(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cw(a).h(a,b)},
kM:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mN(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hT(a).l(a,b,c)},
nf:function(a,b,c){return J.aP(a).hr(a,b,c)},
ng:function(a,b,c,d){return J.aP(a).hN(a,b,c,d)},
nh:function(a,b){return J.pU(a).ak(a,b)},
hW:function(a,b){return J.hT(a).H(a,b)},
ee:function(a,b){return J.hT(a).w(a,b)},
ni:function(a){return J.aP(a).ga2(a)},
ly:function(a){return J.aP(a).gbm(a)},
nj:function(a){return J.aP(a).gdH(a)},
kN:function(a){return J.eb(a).gF(a)},
aB:function(a){return J.hT(a).gP(a)},
aQ:function(a){return J.cw(a).gm(a)},
lz:function(a){return J.hT(a).iz(a)},
nk:function(a,b){return J.aP(a).iB(a,b)},
nl:function(a){return J.pV(a).iL(a)},
cz:function(a){return J.eb(a).i(a)},
a:function a(){},
eC:function eC(){},
cU:function cU(){},
bk:function bk(){},
eZ:function eZ(){},
bL:function bL(){},
aU:function aU(){},
w:function w(a){this.$ti=a},
iF:function iF(a){this.$ti=a},
ah:function ah(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c1:function c1(){},
cT:function cT(){},
eD:function eD(){},
bj:function bj(){}},P={
og:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pK()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ct(new P.jX(q),1)).observe(s,{childList:true})
return new P.jW(q,s,r)}else if(self.setImmediate!=null)return P.pL()
return P.pM()},
oh:function(a){self.scheduleImmediate(H.ct(new P.jY(a),0))},
oi:function(a){self.setImmediate(H.ct(new P.jZ(a),0))},
oj:function(a){P.l2(C.m,a)},
l2:function(a,b){var s=C.c.a5(a.a,1000)
return P.ot(s<0?0:s,b)},
m3:function(a,b){var s=C.c.a5(a.a,1000)
return P.ou(s<0?0:s,b)},
ot:function(a,b){var s=new P.dY()
s.eZ(a,b)
return s},
ou:function(a,b){var s=new P.dY()
s.f_(a,b)
return s},
r5:function(a){return new P.co(a,1)},
om:function(){return C.a5},
on:function(a){return new P.co(a,3)},
pd:function(a,b){return new P.dV(a,b.I("dV<0>"))},
pz:function(){var s,r
for(s=$.cr;s!=null;s=$.cr){$.e8=null
r=s.b
$.cr=r
if(r==null)$.e7=null
s.a.$0()}},
pF:function(){$.lk=!0
try{P.pz()}finally{$.e8=null
$.lk=!1
if($.cr!=null)$.lw().$1(P.mI())}},
pD:function(a){var s=new P.fO(a),r=$.e7
if(r==null){$.cr=$.e7=s
if(!$.lk)$.lw().$1(P.mI())}else $.e7=r.b=s},
pE:function(a){var s,r,q,p=$.cr
if(p==null){P.pD(a)
$.e8=$.e7
return}s=new P.fO(a)
r=$.e8
if(r==null){s.b=p
$.cr=$.e8=s}else{q=r.b
s.b=q
$.e8=r.b=s
if(q==null)$.e7=s}},
m2:function(a,b){var s=$.aO
if(s===C.f)return P.l2(a,b)
return P.l2(a,s.hR(b))},
o9:function(a,b){var s=$.aO
if(s===C.f)return P.m3(a,b)
return P.m3(a,s.dC(b,t.aF))},
mE:function(a,b,c,d,e){P.pE(new P.kz(d,e))},
pA:function(a,b,c,d){var s,r=$.aO
if(r===c)return d.$0()
$.aO=c
s=r
try{r=d.$0()
return r}finally{$.aO=s}},
pB:function(a,b,c,d,e){var s,r=$.aO
if(r===c)return d.$1(e)
$.aO=c
s=r
try{r=d.$1(e)
return r}finally{$.aO=s}},
jX:function jX(a){this.a=a},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
dY:function dY(){this.c=0},
kf:function kf(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b){this.a=a
this.b=b},
bN:function bN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dV:function dV(a,b){this.a=a
this.$ti=b},
fO:function fO(a){this.a=a
this.b=null},
cc:function cc(){},
fh:function fh(){},
km:function km(){},
kz:function kz(a,b){this.a=a
this.b=b},
k3:function k3(){},
k4:function k4(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function(a,b){return new H.V(a.I("@<0>").bf(b).I("V<1,2>"))},
nI:function(a,b,c){return H.pT(a,new H.V(b.I("@<0>").bf(c).I("V<1,2>")))},
Q:function(a,b){return new H.V(a.I("@<0>").bf(b).I("V<1,2>"))},
cY:function(a){return new P.dJ(a.I("dJ<0>"))},
l8:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oo:function(a,b){var s=new P.dK(a,b)
s.c=a.e
return s},
nB:function(a,b,c){var s,r
if(P.ll(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ak.push(a)
try{P.pc(a,s)}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=P.m0(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kT:function(a,b,c){var s,r
if(P.ll(a))return b+"..."+c
s=new P.Y(b)
$.ak.push(a)
try{r=s
r.a=P.m0(r.a,a,", ")}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ll:function(a){var s,r
for(s=$.ak.length,r=0;r<s;++r)if(a===$.ak[r])return!0
return!1},
pc:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.x(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.u()){if(j<=4){b.push(H.x(p))
return}r=H.x(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.u();p=o,o=n){n=l.gD(l);++j
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
nJ:function(a,b,c){var s=P.nH(b,c)
a.w(0,new P.iJ(s,b,c))
return s},
lM:function(a,b){var s,r,q=P.cY(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
l_:function(a){var s,r={}
if(P.ll(a))return"{...}"
s=new P.Y("")
try{$.ak.push(a)
s.a+="{"
r.a=!0
J.ee(a,new P.iN(r,s))
s.a+="}"}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dJ:function dJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k2:function k2(a){this.a=a
this.c=this.b=null},
dK:function dK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cS:function cS(){},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(){},
j:function j(){},
d1:function d1(){},
iN:function iN(a,b){this.a=a
this.b=b},
K:function K(){},
hH:function hH(){},
d2:function d2(){},
ck:function ck(a,b){this.a=a
this.$ti=b},
dj:function dj(){},
dR:function dR(){},
dL:function dL(){},
e2:function e2(){},
e4:function e4(){},
oc:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.od(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
od:function(a,b,c,d){var s=a?$.n7():$.n6()
if(s==null)return null
if(0===c&&d===b.length)return P.m9(s,b)
return P.m9(s,b.subarray(c,P.bo(c,d,b.length)))},
m9:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ar(r)}return null},
lB:function(a,b,c,d,e,f){if(C.c.bt(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
oU:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oT:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cw(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jL:function jL(){},
jK:function jK(){},
i1:function i1(){},
i2:function i2(){},
em:function em(){},
ep:function ep(){},
ik:function ik(){},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iw:function iw(a){this.a=a},
jI:function jI(){},
jM:function jM(){},
kk:function kk(a){this.b=0
this.c=a},
jJ:function jJ(a){this.a=a},
kj:function kj(a){this.a=a
this.b=16
this.c=0},
hU:function(a,b){var s=H.lS(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
nz:function(a){if(a instanceof H.bB)return a.i(0)
return"Instance of '"+H.dh(a)+"'"},
eJ:function(a,b,c,d){var s,r=c?J.kV(a,d):J.nD(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iK:function(a,b,c){var s,r=H.b([],c.I("w<0>"))
for(s=J.aB(a);s.u();)r.push(s.gD(s))
if(b)return r
return J.kW(r)},
nK:function(a,b,c){var s,r,q=J.kV(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fj:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bo(b,c,r)
return H.lT(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.nY(a,b,P.bo(b,c,a.length))
return P.o6(a,b,c)},
o6:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.aa(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.aa(c,b,a.length,o,o))
r=J.aB(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.aa(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gD(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.aa(c,b,q,o,o))
p.push(r.gD(r))}return H.lT(p)},
nZ:function(a){return new H.eE(a,H.nG(a,!1,!0,!1,!1,!1))},
m0:function(a,b,c){var s=J.aB(b)
if(!s.u())return a
if(c.length===0){do a+=H.x(s.gD(s))
while(s.u())}else{a+=H.x(s.gD(s))
for(;s.u();)a=a+c+H.x(s.gD(s))}return a},
m6:function(){var s=H.nP()
if(s!=null)return P.ob(s)
throw H.c(P.A("'Uri.base' is not supported"))},
ki:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nd().b
s=s.test(b)}else s=!1
if(s)return b
r=c.gi1().cg(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.av(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nw:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
es:function(a){if(a>=10)return""+a
return"0"+a},
lG:function(a){return new P.bC(1000*a)},
io:function(a){if(typeof a=="number"||H.kv(a)||null==a)return J.cz(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nz(a)},
hY:function(a){return new P.eh(a)},
bR:function(a){return new P.aC(!1,null,null,a)},
f5:function(a,b){return new P.di(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.di(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c){if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",null))
return b}return c},
lU:function(a,b){if(a<0)throw H.c(P.aa(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aQ(b):e
return new P.eA(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fG(a)},
jB:function(a){return new P.fD(a)},
l1:function(a){return new P.cb(a)},
aF:function(a){return new P.eo(a)},
f:function(a){return new P.h1(a)},
a7:function(a,b,c){return new P.it(a,b,c)},
lu:function(a){H.q7(a)},
ob:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.E(a5,4)^58)*3|C.a.E(a5,0)^100|C.a.E(a5,1)^97|C.a.E(a5,2)^116|C.a.E(a5,3)^97)>>>0
if(s===0)return P.m5(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gez()
else if(s===32)return P.m5(C.a.t(a5,5,a4),0,a3).gez()}r=P.eJ(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mF(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mF(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.ab(a5,"..",n)))h=m>n+2&&C.a.ab(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.ab(a5,"file",0)){if(p<=0){if(!C.a.ab(a5,"/",n)){g="file:///"
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
a5=C.a.b7(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ab(a5,"http",0)){if(i&&o+3===n&&C.a.ab(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b7(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ab(a5,"https",0)){if(i&&o+4===n&&C.a.ab(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b7(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.t(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hm(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.oN(a5,0,q)
else{if(q===0)P.cp(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.oO(a5,d,p-1):""
b=P.oK(a5,p,o,!1)
i=o+1
if(i<n){a=H.lS(C.a.t(a5,i,n),a3)
a0=P.oM(a==null?H.h(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oL(a5,n,m,a3,j,b!=null)
a2=m<l?P.lf(a5,m+1,l,a3):a3
return new P.bO(j,c,b,a0,a1,a2,l<a4?P.oJ(a5,l+1,a4):a3)},
m8:function(a){var s=t.N
return C.b.i7(H.b(a.split("&"),t.s),P.Q(s,s),new P.jG(C.e))},
oa:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jD(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.U(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.hU(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.hU(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
m7:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jE(a),c=new P.jF(d,a)
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
l=C.b.gay(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oa(a,q,a0)
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
ms:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cp:function(a,b,c){throw H.c(P.a7(c,a,b))},
oM:function(a,b){if(a!=null&&a===P.ms(b))return null
return a},
oK:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.cp(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oH(a,r,s)
if(q<s){p=q+1
o=P.mx(a,C.a.ab(a,"25",p)?q+3:p,s,"%25")}else o=""
P.m7(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bB(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mx(a,C.a.ab(a,"25",p)?q+3:p,c,"%25")}else o=""
P.m7(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.oQ(a,b,c)},
oH:function(a,b,c){var s=C.a.bB(a,"%",b)
return s>=b&&s<c?s:c},
mx:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.Y(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.lg(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.Y("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cp(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.Y("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.Y("")
n=i}else n=i
n.a+=j
n.a+=P.le(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oQ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.lg(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.Y("")
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
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.Y("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cp(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.Y("")
m=q}else m=q
m.a+=l
m.a+=P.le(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oN:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mu(C.a.E(a,b)))P.cp(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.E(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cp(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.oG(r?a.toLowerCase():a)},
oG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oO:function(a,b,c){return P.e3(a,b,c,C.Y,!1)},
oL:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e3(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a1(s,"/"))s="/"+s
return P.oP(s,e,f)},
oP:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a1(a,"/"))return P.oR(a,!s||c)
return P.oS(a)},
lf:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bR("Both query and queryParameters specified"))
return P.e3(a,b,c,C.k,!0)}if(d==null)return null
s=new P.Y("")
r.a=""
d.w(0,new P.kg(new P.kh(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oJ:function(a,b,c){return P.e3(a,b,c,C.k,!0)},
lg:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.kD(s)
p=H.kD(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b_(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.av(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
le:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.E(k,a>>>4)
s[2]=C.a.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hB(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.E(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.E(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.fj(s,0,null)},
e3:function(a,b,c,d,e){var s=P.mw(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mw:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lg(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cp(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.le(o)}}if(p==null){p=new P.Y("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.pZ(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mv:function(a){if(C.a.a1(a,"."))return!0
return C.a.e4(a,"/.")!==-1},
oS:function(a){var s,r,q,p,o,n,m
if(!P.mv(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.U(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
oR:function(a,b){var s,r,q,p,o,n
if(!P.mv(a))return!b?P.mt(a):a
s=H.b([],t.s)
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
r=P.mt(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mt:function(a){var s,r,q,p=a.length
if(p>=2&&P.mu(C.a.E(a,0)))for(s=1;s<p;++s){r=C.a.E(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.ae(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oI:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bR("Invalid URL encoding"))}}return s},
lh:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.E(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.r(C.a.t(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.E(a,o)
if(r>127)throw H.c(P.bR("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bR("Truncated URI"))
p.push(P.oI(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cg(p)},
mu:function(a){var s=a|32
return 97<=s&&s<=122},
m5:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gay(j)
if(p!==44||r!==n+7||!C.a.ab(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.ii(0,a,m,s)
else{l=P.mw(a,m,s,C.k,!0)
if(l!=null)a=C.a.b7(a,m,s,l)}return new P.jC(a,j,c)},
oY:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.ks(h)
q=new P.kt()
p=new P.ku()
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
mF:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.ne()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.E(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
X:function X(a,b){this.a=a
this.b=b},
bC:function bC(a){this.a=a},
ig:function ig(){},
ih:function ih(){},
I:function I(){},
eh:function eh(a){this.a=a},
fw:function fw(){},
eU:function eU(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d,e,f){var _=this
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
fG:function fG(a){this.a=a},
fD:function fD(a){this.a=a},
cb:function cb(a){this.a=a},
eo:function eo(a){this.a=a},
eX:function eX(){},
dp:function dp(){},
eq:function eq(a){this.a=a},
h1:function h1(a){this.a=a},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
eB:function eB(){},
a9:function a9(){},
N:function N(){},
Y:function Y(a){this.a=a},
jG:function jG(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a,b){this.a=a
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
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a){this.a=a},
kt:function kt(){},
ku:function ku(){},
hm:function hm(a,b,c,d,e,f,g,h){var _=this
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
pQ:function(a){var s,r,q,p
if(t.x.b(a)){s=J.nj(a)
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
return new P.e_(r,q,p)},
pP:function(a){if(a instanceof P.e_)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var s,r,q,p,o
if(a==null)return null
s=P.Q(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
mA:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kv(a))return a
if(t.f.b(a))return P.mJ(a)
if(t.aH.b(a)){s=[]
J.ee(a,new P.kq(s))
a=s}return a},
mJ:function(a){var s={}
J.ee(a,new P.kA(s))
return s},
k9:function k9(){},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a){this.a=a},
kA:function kA(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
ir:function ir(){},
is:function is(){},
hk:function hk(){},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aV:function aV(){},
eH:function eH(){},
aZ:function aZ(){},
eV:function eV(){},
j8:function j8(){},
c9:function c9(){},
fi:function fi(){},
o:function o(){},
b0:function b0(){},
fv:function fv(){},
h8:function h8(){},
h9:function h9(){},
hg:function hg(){},
hh:function hh(){},
hu:function hu(){},
hv:function hv(){},
hD:function hD(){},
hE:function hE(){},
i_:function i_(){},
ej:function ej(){},
i0:function i0(a){this.a=a},
ek:function ek(){},
bd:function bd(){},
eW:function eW(){},
fQ:function fQ(){},
c8:function c8(){},
fd:function fd(){},
hq:function hq(){},
hr:function hr(){}},W={
lA:function(){var s=document.createElement("a")
s.toString
return s},
kO:function(){var s=document.createElement("canvas")
s.toString
return s},
ny:function(a,b,c){var s=document.body
s.toString
s=new H.b5(new W.a6(C.p.al(s,a,b,c)),new W.ii(),t.ac.I("b5<j.E>"))
return t.h.a(s.gaR(s))},
ij:function(a){return"wheel"},
cL:function(a){var s,r,q="element tag unavailable"
try{s=J.aP(a)
s.gex(a)
q=s.gex(a)}catch(r){H.ar(r)}return q},
lK:function(a){var s=document.createElement("img")
s.toString
if(a!=null)s.src=a
return s},
k1:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mj:function(a,b,c,d){var s=W.k1(W.k1(W.k1(W.k1(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a2:function(a,b,c,d){var s=new W.dH(a,b,c==null?null:W.mG(new W.k_(c),t.aD),!1)
s.hI()
return s},
mi:function(a){var s=W.lA(),r=window
s=new W.cn(new W.k6(s,r.location))
s.eT(a)
return s},
ok:function(a,b,c,d){return!0},
ol:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mn:function(){var s=t.N,r=P.lM(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hy(r,P.cY(s),P.cY(s),P.cY(s),null)
s.eY(null,new H.d3(C.z,new W.kd(),t.dv),q,null)
return s},
mG:function(a,b){var s=$.aO
if(s===C.f)return a
return s.dC(a,b)},
u:function u(){},
hX:function hX(){},
ef:function ef(){},
eg:function eg(){},
bS:function bS(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
cD:function cD(){},
aD:function aD(){},
i8:function i8(){},
H:function H(){},
cH:function cH(){},
i9:function i9(){},
at:function at(){},
aT:function aT(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
bf:function bf(){},
id:function id(){},
cI:function cI(){},
cJ:function cJ(){},
et:function et(){},
ie:function ie(){},
fR:function fR(a,b){this.a=a
this.b=b},
B:function B(){},
ii:function ii(){},
m:function m(){},
e:function e(){},
am:function am(){},
bY:function bY(){},
ev:function ev(){},
ex:function ex(){},
aH:function aH(){},
iv:function iv(){},
bE:function bE(){},
bF:function bF(){},
c_:function c_(){},
bG:function bG(){},
iL:function iL(){},
j1:function j1(){},
c2:function c2(){},
eM:function eM(){},
j2:function j2(a){this.a=a},
eN:function eN(){},
j3:function j3(a){this.a=a},
aJ:function aJ(){},
eO:function eO(){},
an:function an(){},
a6:function a6(a){this.a=a},
v:function v(){},
dd:function dd(){},
aL:function aL(){},
f0:function f0(){},
f7:function f7(){},
jd:function jd(a){this.a=a},
f9:function f9(){},
ax:function ax(){},
fb:function fb(){},
aM:function aM(){},
fc:function fc(){},
aN:function aN(){},
fg:function fg(){},
jj:function jj(a){this.a=a},
ao:function ao(){},
bq:function bq(){},
dq:function dq(){},
fk:function fk(){},
fl:function fl(){},
ce:function ce(){},
ay:function ay(){},
aj:function aj(){},
fn:function fn(){},
fo:function fo(){},
js:function js(){},
az:function az(){},
bK:function bK(){},
fu:function fu(){},
jx:function jx(){},
b2:function b2(){},
jH:function jH(){},
fK:function fK(){},
br:function br(){},
cl:function cl(){},
cm:function cm(){},
fS:function fS(){},
dG:function dG(){},
h5:function h5(){},
dM:function dM(){},
hp:function hp(){},
hw:function hw(){},
fP:function fP(){},
fZ:function fZ(a){this.a=a},
kS:function kS(a,b){this.a=a
this.$ti=b},
dH:function dH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k_:function k_(a){this.a=a},
l7:function l7(a){this.$ti=a},
cn:function cn(a){this.a=a},
L:function L(){},
de:function de(a){this.a=a},
j6:function j6(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(){},
k7:function k7(){},
k8:function k8(){},
hy:function hy(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kd:function kd(){},
hx:function hx(){},
cN:function cN(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
k6:function k6(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a
this.b=0},
kl:function kl(a){this.a=a},
fT:function fT(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
h2:function h2(){},
h3:function h3(){},
h6:function h6(){},
h7:function h7(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hi:function hi(){},
hj:function hj(){},
hl:function hl(){},
dT:function dT(){},
dU:function dU(){},
hn:function hn(){},
ho:function ho(){},
ht:function ht(){},
hz:function hz(){},
hA:function hA(){},
dW:function dW(){},
dX:function dX(){},
hB:function hB(){},
hC:function hC(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){}},K={
O:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.E(a,0)
r=C.a.E(b,0)
if(s>r){q=r
r=s
s=q}return new K.f4(s,r)},
aR:function aR(){},
cP:function cP(){},
ad:function ad(a){this.a=a},
f4:function f4(a,b){this.a=a
this.b=b},
t:function t(a){this.a=a}},L={
jv:function(){var s=t.N
return new L.ju(P.Q(s,t.dl),P.Q(s,t.f7),P.cY(s))},
fe:function fe(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b){this.b=a
this.c=b},
ju:function ju(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ds:function ds(a,b){this.b=a
this.c=!1
this.a=b}},O={
kP:function(a){return new O.al(H.b([],a.I("w<0>")),a.I("al<0>"))},
al:function al(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d9:function d9(a){this.a=a
this.b=null},
eL:function(a,b){return new O.d7(new V.W(0,0,0),a,b,new A.as(!1,!1,!1))},
cQ:function cQ(a,b,c,d,e,f,g,h,i){var _=this
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
_.k3=_.db=_.cy=_.ch=!1
_.r2=1
_.rx=null},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iy:function iy(a){this.a=a},
d4:function d4(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
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
_.c=c
_.e=_.d=null},
d6:function d6(){},
iP:function iP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d7:function d7(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iR:function iR(a){this.b=a},
iS:function iS(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iT:function iT(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
cd:function cd(){}},E={
kR:function(){var s=O.kP(t.l),r=new E.bD(s)
s.bu(r.gij(),r.gim())
r.sbM(0,null)
r.scH(null)
r.sbp(null)
return r},
mf:function(){var s=window.navigator.vendor
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
mg:function(){var s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Win"))return C.a0
if(C.a.C(s,"Mac"))return C.A
if(C.a.C(s,"Linux"))return C.a1
return C.a2},
o_:function(a,b){var s
Date.now()
s=t.fA
s=new E.j9(a,new P.X(Date.now(),!1),new P.X(Date.now(),!1),new O.d9(H.b([],s)),new O.d9(H.b([],s)),new O.d9(H.b([],s)),H.b([null],t.bc),P.Q(t.N,t.fg))
s.eR(a,b)
return s},
o8:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.m1(a,!0,!0,!0,!1)
s=W.kO()
r=s.style
r.width="100%"
r.height="100%"
J.ly(a).n(0,s)
return E.m1(s,!0,!0,!0,!1)},
m1:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.cM(a,"webgl2",P.nI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.o_(l,a)
m=H.ko(l.getParameter(3379))
H.ko(l.getParameter(34076))
r=H.b([],t.g9)
q=$.il
p=new X.fI(a,r,(q==null?$.il=new E.h_(E.mf(),E.mg()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a2(o,"contextmenu",p.gfM(),!1))
r.push(W.a2(a,"focus",p.gfS(),!1))
r.push(W.a2(a,"blur",p.gfG(),!1))
r.push(W.a2(o,"keyup",p.gfW(),!1))
r.push(W.a2(o,"keydown",p.gfU(),!1))
r.push(W.a2(a,"mousedown",p.gh_(),!1))
r.push(W.a2(a,"mouseup",p.gh3(),!1))
r.push(W.a2(a,n,p.gh1(),!1))
W.ij(a)
W.ij(a)
r.push(W.a2(a,W.ij(a),p.gh5(),!1))
r.push(W.a2(o,n,p.gfO(),!1))
r.push(W.a2(o,"mouseup",p.gfQ(),!1))
r.push(W.a2(o,"pointerlockchange",p.gh7(),!1))
r.push(W.a2(a,"touchstart",p.ghk(),!1))
r.push(W.a2(a,"touchend",p.ghg(),!1))
r.push(W.a2(a,"touchmove",p.ghi(),!1))
m=new E.fr(a,s,new T.jp(l,m),p,new P.X(Date.now(),!1))
m.de()
return m},
i3:function i3(){},
bD:function bD(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bU:function bU(a){this.b=a},
c6:function c6(a){this.b=a},
h_:function h_(a,b){this.a=a
this.b=b},
j9:function j9(a,b,c,d,e,f,g,h){var _=this
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
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
fr:function fr(a,b,c,d,e){var _=this
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
l6:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cq(c)),35044)
a.bindBuffer(b,null)
return new Z.fL(b,s)},
aA:function(a){return new Z.b4(a)},
fL:function fL(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fM:function fM(a){this.a=a},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(a){this.a=a},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a}},D={
J:function(){return new D.bX()},
i5:function i5(){},
bX:function bX(){var _=this
_.c=_.b=_.a=null
_.d=0},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
S:function S(){},
bh:function bh(){},
bi:function bi(){},
D:function D(a,b,c){this.c=a
this.d=b
this.e=c},
bW:function bW(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cW:function cW(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cC:function cC(a,b){this.a=a
this.b=b},eG:function eG(a,b){this.a=a
this.b=b},iH:function iH(a,b){this.c=a
this.d=b},d0:function d0(a,b,c){this.x=a
this.c=b
this.d=c},iM:function iM(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},c3:function c3(a,b,c,d,e){var _=this
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
_.z=e},c4:function c4(a,b,c){this.x=a
this.c=b
this.d=c},f3:function f3(){},dr:function dr(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jw:function jw(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fI:function fI(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nA:function(a){var s=new V.a1(0,0,0,1),r=$.lX
if(r==null){r=V.lW(0,0,1,1)
$.lX=r}return new X.iu(s,r)},
iu:function iu(a,b){this.a=a
this.r=b
this.x=null},
eY:function eY(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jl:function jl(){}},V={
en:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.a1(a,a,a,1)},
lr:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qe:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bt(a-b,s)
return(a<0?a+s:a)+b},
C:function(a,b,c){$.E().toString
return C.a.ap(C.d.cI(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cv:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.E().toString
n=C.a.ap(C.d.cI(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.ap(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
lt:function(a){return C.d.iI(Math.pow(2,C.d.ct(Math.log(a)/Math.log(2))))},
aI:function(){var s=$.lP
return s==null?$.lP=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lO:function(a,b,c){var s=c.R(),r=b.bn(s).R(),q=s.bn(r),p=new V.G(a.a,a.b,a.c)
return V.aY(r.a,q.a,s.a,r.ba(0).a7(p),r.b,q.b,s.b,q.ba(0).a7(p),r.c,q.c,s.c,s.ba(0).a7(p),0,0,0,1)},
lQ:function(){var s=$.b_
return s==null?$.b_=new V.ae(0,0,0):s},
lW:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f6(a,b,c,d)},
b3:function(){var s=$.mc
return s==null?$.mc=new V.G(0,0,0):s},
me:function(){var s=$.mb
return s==null?$.mb=new V.G(1,0,0):s},
oe:function(){var s=$.jN
return s==null?$.jN=new V.G(-1,0,0):s},
l4:function(){var s=$.jO
return s==null?$.jO=new V.G(0,1,0):s},
of:function(){var s=$.jP
return s==null?$.jP=new V.G(0,0,1):s},
md:function(){var s=$.ma
return s==null?$.ma=new V.G(0,0,-1):s},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(){},
d8:function d8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bm:function bm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function(a){P.o9(C.R,new V.kL(a))},
o1:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a2(n,"scroll",new V.jh(s),!1)
return new V.jf(o)},
aE:function aE(){},
kL:function kL(a){this.a=a},
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
f_:function f_(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
jf:function jf(a){this.a=a
this.b=null},
jh:function jh(a){this.a=a},
jg:function jg(a){this.a=a},
ji:function ji(a){this.a=a},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(){}},U={
i7:function(){return new U.i6()},
lF:function(a){var s=V.aI(),r=new U.cE(s)
if(!s.q(0,a))r.a=a
return r},
i6:function i6(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cE:function cE(a){this.a=a
this.b=null},
bZ:function bZ(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Z:function Z(){},
dD:function dD(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
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
dF:function dF(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={eu:function eu(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
nM:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+a9.gav(a9)+b0.gav(b0)+b1.gav(b1)+b2.gav(b2)+b3.gav(b3)+"_"
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
b=$.bb()
if(h){s=$.ba()
b=new Z.b4(b.a|s.a)}if(g)b=new Z.b4(b.a|$.b9().a)
if(f)b=new Z.b4(b.a|$.bx().a)
if(e)b=new Z.b4(b.a|$.bw().a)
return new A.iQ(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kx:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
ky:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kx(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hV(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pi:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kx(b,r,"emission")
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
pe:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ky(b,r,"ambient")
b.a+="\n"},
pg:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ky(b,r,"diffuse")
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
pj:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ky(b,r,"invDiffuse")
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
pp:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ky(b,r,"specular")
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
pl:function(a,b){var s,r,q
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
pn:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kx(b,r,"reflect")
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
po:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kx(b,r,"refract")
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
pf:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hV(r)
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
ph:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hV(r)
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
pm:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hV(r)
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
pq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hV(r)
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
if(s==null)s=$.il=new E.h_(E.mf(),E.mg())
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
pk:function(a,b){var s,r
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
pr:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.Y(""),j=""+"precision mediump float;\n"
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
A.pi(a,k)
A.pe(a,k)
A.pg(a,k)
A.pj(a,k)
A.pp(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pn(a,k)
A.po(a,k)}A.pl(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pf(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.ph(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pm(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pq(a,p[n],k)
A.pk(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ae(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ae(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ae(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ae(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
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
ps:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b4+"];\n"
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
pu:function(a,b){var s
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
pt:function(a,b){var s
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
pw:function(a,b){var s,r
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
px:function(a,b){var s,r
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
pv:function(a,b){var s
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
py:function(a,b){var s
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
hV:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ae(a,1)},
l3:function(a,b,c,d,e){var s=new A.fx(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eJ(d,0,!1,t.S)
return s},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a){this.a=a},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
d5:function d5(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iZ=_.dY=_.dX=_.iY=_.dW=_.dV=_.dU=_.iX=_.dT=_.dS=_.dR=_.iW=_.dQ=_.dP=_.iV=_.dO=_.dN=_.dM=_.b5=_.b4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.ck=c
_.cl=d
_.cm=e
_.cn=f
_.co=g
_.cp=h
_.cq=i
_.cr=j
_.j1=_.j0=_.j_=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
bc:function bc(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
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
_.b4=b5
_.b5=b6
_.dM=b7},
dw:function dw(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dx:function dx(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dz:function dz(a,b,c,d,e,f,g,h,i,j){var _=this
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
dC:function dC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ca:function ca(){},
a0:function a0(){},
jA:function jA(a){this.a=a},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
fz:function fz(a,b,c){this.a=a
this.c=b
this.d=c},
fA:function fA(a,b,c){this.a=a
this.c=b
this.d=c},
fB:function fB(a,b,c){this.a=a
this.c=b
this.d=c},
fx:function fx(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
fy:function fy(a,b,c){this.a=a
this.c=b
this.d=c},
du:function du(a,b,c){this.a=a
this.c=b
this.d=c},
dv:function dv(a,b,c){this.a=a
this.c=b
this.d=c},
fC:function fC(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
dA:function dA(a,b,c){this.a=a
this.c=b
this.d=c},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kr:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e5:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.G(g,f+a2,e+a3)
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
i.d=h}k=F.kr(h)
j=F.kr(g)
a.ih(F.qa(a0,a1,new F.kn(i,F.kr(f),F.kr(e),j,k,c),b))},
qa:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.dk()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=n.dr(new V.a1(m,0,0,1),new V.a4(o,1))
c.$3(l,o,0)
q.push(l.ci(d))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.z(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=h.dr(new V.a1(g,f,e,1),new V.a4(o,j))
c.$3(l,o,k)
q.push(l.ci(d))}}s.ga3().hO(a+1,b+1,q)
return s},
dk:function(){return new F.ag()},
l5:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.ap()
h=$.n8()
s=$.bb()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.ba().a)!==0)q.r=e
if((r&$.b9().a)!==0)q.x=b
if((r&$.bx().a)!==0)q.y=f
if((r&$.bQ().a)!==0)q.z=g
if((r&$.n9().a)!==0)q.Q=c
if((r&$.cy().a)!==0)q.ch=i
if((r&$.bw().a)!==0)q.cx=a
return q},
kn:function kn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aG:function aG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bH:function bH(){this.b=this.a=null},
f1:function f1(){this.a=null},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
je:function je(a,b,c,d,e,f,g){var _=this
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
dn:function dn(a,b){this.a=a
this.b=b},
ap:function ap(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jV:function jV(a){this.a=a},
jU:function jU(a){this.a=a},
z:function z(a,b){this.a=a
this.b=!1
this.c=b},
jQ:function jQ(a,b,c){this.b=a
this.c=b
this.d=c},
jR:function jR(a,b){this.a=a
this.b=b},
jS:function jS(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.b=a
this.c=b},
jT:function jT(a){this.b=a}},T={cf:function cf(){},fp:function fp(){},fq:function fq(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},jp:function jp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},jq:function jq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
q5:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="bumpMaps",a2="modifiers",a3=V.o1("Test 006"),a4=W.kO()
a4.className="pageLargeCanvas"
a4.id=a
a3.a.appendChild(a4).toString
s=t.s
a3.dt(H.b(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],s))
a3.hM(H.b(["bumpMaps"],s))
a3.dt(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.o8(r,!0,!0,!0,!1)
p=F.dk()
F.e5(p,a0,a0,1,1,1,0,0,1)
F.e5(p,a0,a0,1,1,0,1,0,3)
F.e5(p,a0,a0,1,1,0,0,1,2)
F.e5(p,a0,a0,1,1,-1,0,0,0)
F.e5(p,a0,a0,1,1,0,-1,0,0)
F.e5(p,a0,a0,1,1,0,0,-1,3)
p.aI()
o=O.kP(t.gc)
n=new O.d4(o)
o.bu(n.gfC(),n.gfE())
o=n.geb()
o.gv().n(0,n.gdc())
o.gea().n(0,n.gbi())
o=n.geb()
m=V.l4()
l=U.lF(V.lO(V.lQ(),m,new V.G(0,0,-1)))
k=new V.W(1,1,1)
j=new D.bW(new V.W(1,1,1),V.of(),V.l4(),V.oe())
i=j.a
j.a=l
l.gv().n(0,j.geV())
j.aA(new D.D("mover",i,j.a))
if(!j.b.q(0,k)){i=j.b
j.b=k
j.aA(new D.D("color",i,k))}o.n(0,j)
o=n.gdv()
o.sad(0,new V.W(0,0,1))
o=n.gdI()
o.sad(0,new V.W(0,1,0))
o=n.gbN()
o.sad(0,new V.W(1,0,0))
o=n.gbN()
o.c8(new A.as(!0,o.c.b,!1))
o.dg(10)
h=E.kR()
h.sbM(0,p)
h.scH(n)
g=E.kR()
g.sbM(0,p)
o=V.md()
l=V.en(0.7)
k=V.en(0.3)
j=V.en(0.5)
f=V.en(0.5)
o=new O.cQ(o,new V.a1(0.2,0.3,0.4,1),new V.a1(0.1,0.2,0.3,1),l,k,j,f,new V.a1(1,1,1,1),V.en(0.8))
$.E().toString
if(!(Math.abs(0.6)<1e-9)){o.r2=0.4
o.T(new D.D("vectorScale",1,0.4))}if(!o.ch){o.ch=!0
o.T(new D.D("showWireFrame",!1,!0))}if(!o.k3){o.k3=!0
o.T(new D.D("showAxis",!1,!0))}if(!o.cy){o.cy=!0
o.T(new D.D("showNormals",!1,!0))}if(!o.db){o.db=!0
o.T(new D.D("showBinormals",!1,!0))}g.scH(o)
e=E.kR()
o=e.y
o.n(0,g)
o.n(0,h)
o=new U.bZ(V.aI(),H.b([],t.eJ))
o.bu(o.gfw(),o.ghc())
l=q.x
k=U.i7()
j=U.i7()
f=$.bM
if(f==null)f=$.bM=new V.a5(0,0)
f=new U.dE(k,j,new X.a8(!1,!1,!1),f,V.aI())
k.scL(0,!0)
k.scz(6.283185307179586)
k.scB(0)
k.saf(0,0)
k.scA(100)
k.sa0(0)
k.scj(0.5)
d=f.gaT()
k.gv().n(0,d)
j.scL(0,!0)
j.scz(6.283185307179586)
j.scB(0)
j.saf(0,0)
j.scA(100)
j.sa0(0)
j.scj(0.5)
j.gv().n(0,d)
k=new X.a8(!1,!1,!1)
if(!f.d.q(0,k)){i=f.d
f.d=k
f.O(new D.D(a2,i,k))}if(!f.r){f.r=!0
f.O(new D.D("invertY",!1,!0))}f.bl(l)
o.n(0,f)
U.i7()
if($.bM==null)$.bM=new V.a5(0,0)
V.aI()
k=U.i7()
j=$.bM
if(j==null)j=$.bM=new V.a5(0,0)
j=new U.dD(k,new X.a8(!1,!1,!1),j,V.aI())
k.scL(0,!0)
k.scz(6.283185307179586)
k.scB(0)
k.saf(0,0)
k.scA(100)
k.sa0(0)
k.scj(0.2)
k.gv().n(0,j.gaT())
k=new X.a8(!0,!1,!1)
if(!j.c.q(0,k)){i=j.c
j.c=k
j.O(new D.D(a2,i,k))}j.bl(l)
o.n(0,j)
k=new X.a8(!1,!1,!1)
j=new U.dF(k,V.aI())
f=new X.a8(!1,!1,!1)
if(!k.q(0,f)){j.b=f
j.O(new D.D(a2,k,f))}j.bl(l)
o.n(0,j)
e.sbp(o)
o=O.kP(t.l)
l=new M.eu(o)
o.bu(l.gfI(),l.gfK())
c=X.nA(a0)
b=new X.eY(1.0471975511965976,0.1)
b.sbp(a0)
k=b.c
$.E().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){b.c=1.0471975511965976
b.aW(new D.D("fov",k,1.0471975511965976))}k=b.d
$.E().toString
if(!(Math.abs(k-0.1)<1e-9)){b.d=0.1
b.aW(new D.D("near",k,0.1))}k=b.e
$.E().toString
if(!(Math.abs(k-2000)<1e-9)){b.e=2000
b.aW(new D.D("far",k,2000))}k=l.b
if(k!==b){if(k!=null)k.gv().X(0,l.gaU())
i=l.b
l.b=b
b.gv().n(0,l.gaU())
l.aV(new D.D("camera",i,l.b))}k=l.c
if(k!==c){if(k!=null)k.gv().X(0,l.gaU())
i=l.c
l.c=c
c.gv().n(0,l.gaU())
l.aV(new D.D("target",i,l.c))}o.n(0,e)
o=l.b
if(o!=null)o.sbp(U.lF(V.aY(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=q.d
if(o!==l){if(o!=null)o.gv().X(0,q.gcU())
q.d=l
l.gv().n(0,q.gcU())
q.cV()}r=s.getElementById(a1)
if(r==null)H.h(P.f("Failed to find bumpMaps for Texture2DGroup"))
s=new V.jm(a1,!0,r,new N.kI(n,q))
s.aF(0,"../resources/BumpMap1.png",!0)
s.n(0,"../resources/BumpMap2.png")
s.n(0,"../resources/BumpMap3.png")
s.n(0,"../resources/BumpMap4.png")
s.n(0,"../resources/BumpMap5.png")
s.n(0,"../resources/ScrewBumpMap.png")
s.n(0,"../resources/CtrlPnlBumpMap.png")
s=q.Q
if(s==null)s=q.Q=D.J()
o=s.b
s=o==null?s.b=H.b([],t.a):o
s.push(new N.kJ(a3,n))
V.q8(q)},
kI:function kI(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kX.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.dg(a)},
i:function(a){return"Instance of '"+H.dh(a)+"'"}}
J.eC.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iac:1}
J.cU.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bk.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$ilL:1}
J.eZ.prototype={}
J.bL.prototype={}
J.aU.prototype={
i:function(a){var s=a[$.mV()]
if(s==null)return this.eL(a)
return"JavaScript function for "+J.cz(s)},
$icO:1}
J.w.prototype={
X:function(a,b){var s
if(!!a.fixed$length)H.h(P.A("remove"))
for(s=0;s<a.length;++s)if(J.U(a[s],b)){a.splice(s,1)
return!0}return!1},
aj:function(a,b){if(!!a.fixed$length)H.h(P.A("addAll"))
this.f2(a,b)
return},
f2:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aF(a))
for(s=0;s<r;++s)a.push(b[s])},
w:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aF(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eJ(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
ic:function(a){return this.j(a,"")},
i6:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aF(a))}return s},
i7:function(a,b,c){return this.i6(a,b,c,t.A)},
i5:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aF(a))}throw H.c(H.kU())},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gay:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.kU())},
dw:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aF(a))}return!1},
bc:function(a,b){if(!!a.immutable$list)H.h(P.A("sort"))
H.o4(a,b==null?J.p5():b)},
eH:function(a){return this.bc(a,null)},
C:function(a,b){var s
for(s=0;s<a.length;++s)if(J.U(a[s],b))return!0
return!1},
i:function(a){return P.kT(a,"[","]")},
gP:function(a){return new J.ah(a,a.length)},
gF:function(a){return H.dg(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.h(P.A("set length"))
if(b>a.length)H.li(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cu(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.h(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cu(a,b))
a[b]=c},
$in:1,
$ii:1,
$ip:1}
J.iF.prototype={}
J.ah.prototype={
gD:function(a){return H.T(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c1.prototype={
ak:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbD(b)
if(this.gbD(a)===s)return 0
if(this.gbD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbD:function(a){return a===0?1/a<0:a<0},
iI:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.A(""+a+".toInt()"))},
ct:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.A(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.A(""+a+".round()"))},
cI:function(a,b){var s
if(b>20)throw H.c(P.aa(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbD(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bt:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.di(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.di(a,b)},
di:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.A("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
b_:function(a,b){var s
if(a>0)s=this.dh(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hB:function(a,b){if(b<0)throw H.c(H.ea(b))
return this.dh(a,b)},
dh:function(a,b){return b>31?0:a>>>b},
$iP:1,
$ia3:1}
J.cT.prototype={$ik:1}
J.eD.prototype={}
J.bj.prototype={
U:function(a,b){if(b<0)throw H.c(H.cu(a,b))
if(b>=a.length)H.h(H.cu(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.cu(a,b))
return a.charCodeAt(b)},
Y:function(a,b){return a+b},
b7:function(a,b,c,d){var s=P.bo(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ab:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a1:function(a,b){return this.ab(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f5(b,null))
if(b>c)throw H.c(P.f5(b,null))
if(c>a.length)throw H.c(P.f5(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.t(a,b,null)},
iL:function(a){return a.toLowerCase()},
S:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ap:function(a,b){var s=b-a.length
if(s<=0)return a
return this.S(" ",s)+a},
bB:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
e4:function(a,b){return this.bB(a,b,0)},
hS:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aa(c,0,s,null,null))
return H.mR(a,b,c)},
C:function(a,b){return this.hS(a,b,0)},
ak:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gF:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm:function(a){return a.length},
$il:1}
H.cV.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.n.prototype={}
H.d_.prototype={
gP:function(a){return new H.bl(this,this.gm(this))},
bK:function(a,b){return this.eK(0,b)}}
H.bl.prototype={
gD:function(a){return H.T(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.cw(q),o=p.gm(q)
if(r.b!==o)throw H.c(P.aF(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.aW.prototype={
gP:function(a){return new H.eK(J.aB(this.a),this.b)},
gm:function(a){return J.aQ(this.a)},
H:function(a,b){return this.b.$1(J.hW(this.a,b))}}
H.cK.prototype={$in:1}
H.eK.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){return H.T(this).Q[1].a(this.a)}}
H.d3.prototype={
gm:function(a){return J.aQ(this.a)},
H:function(a,b){return this.b.$1(J.hW(this.a,b))}}
H.b5.prototype={
gP:function(a){return new H.fN(J.aB(this.a),this.b)}}
H.fN.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.cM.prototype={}
H.fF.prototype={
l:function(a,b,c){throw H.c(P.A("Cannot modify an unmodifiable list"))}}
H.cj.prototype={}
H.cF.prototype={
i:function(a){return P.l_(this)},
l:function(a,b,c){H.nv()},
$iF:1}
H.cG.prototype={
gm:function(a){return this.a},
cf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cf(0,b))return null
return this.d6(b)},
d6:function(a){return this.b[a]},
w:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d6(q))}}}
H.jy.prototype={
ao:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.df.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eF.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fE.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j7.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hs.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bB.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mT(r==null?"unknown":r)+"'"},
$icO:1,
giO:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fm.prototype={}
H.ff.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mT(s)+"'"}}
H.bT.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bT))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.dg(this.a)
else s=typeof r!=="object"?J.kN(r):H.dg(r)
return(s^H.dg(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.dh(s)+"'")}}
H.f8.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.V.prototype={
gm:function(a){return this.a},
gbC:function(a){return this.a===0},
ga4:function(a){return new H.cX(this,H.T(this).I("cX<1>"))},
giN:function(a){var s=this,r=H.T(s)
return H.nL(s.ga4(s),new H.iG(s),r.c,r.Q[1])},
cf:function(a,b){var s=this.b
if(s==null)return!1
return this.ff(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bw(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bw(p,b)
q=r==null?n:r.b
return q}else return o.ia(b)},
ia:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d7(p,q.e6(a))
r=q.e7(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cY(s==null?q.b=q.c4():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cY(r==null?q.c=q.c4():r,b,c)}else q.ib(b,c)},
ib:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c4()
s=p.e6(a)
r=p.d7(o,s)
if(r==null)p.c9(o,s,[p.c5(a,b)])
else{q=p.e7(r,a)
if(q>=0)r[q].b=b
else r.push(p.c5(a,b))}},
w:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aF(s))
r=r.c}},
cY:function(a,b,c){var s=this.bw(a,b)
if(s==null)this.c9(a,b,this.c5(b,c))
else s.b=c},
fq:function(){this.r=this.r+1&67108863},
c5:function(a,b){var s,r=this,q=new H.iI(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fq()
return q},
e6:function(a){return J.kN(a)&0x3ffffff},
e7:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.U(a[r].a,b))return r
return-1},
i:function(a){return P.l_(this)},
bw:function(a,b){return a[b]},
d7:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
fj:function(a,b){delete a[b]},
ff:function(a,b){return this.bw(a,b)!=null},
c4:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c9(r,s,r)
this.fj(r,s)
return r}}
H.iG.prototype={
$1:function(a){var s=this.a
return H.T(s).Q[1].a(s.h(0,a))},
$S:function(){return H.T(this.a).I("2(1)")}}
H.iI.prototype={}
H.cX.prototype={
gm:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.eI(s,s.r)
r.c=s.e
return r}}
H.eI.prototype={
gD:function(a){return H.T(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kE.prototype={
$1:function(a){return this.a(a)},
$S:34}
H.kF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:53}
H.eE.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilV:1}
H.da.prototype={$ida:1}
H.a_.prototype={$ia_:1}
H.c5.prototype={
gm:function(a){return a.length},
$iy:1}
H.bI.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b6(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$ip:1}
H.db.prototype={
l:function(a,b,c){H.b6(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$ip:1}
H.eP.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eQ.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eR.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.dc.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.bJ.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b6(b,a,a.length)
return a[b]},
$ibJ:1,
$icg:1}
H.dN.prototype={}
H.dO.prototype={}
H.dP.prototype={}
H.dQ.prototype={}
H.aw.prototype={
I:function(a){return H.hG(v.typeUniverse,this,a)},
bf:function(a){return H.oE(v.typeUniverse,this,a)}}
H.h4.prototype={}
H.h0.prototype={
i:function(a){return this.a}}
H.dZ.prototype={}
P.jX.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:30}
P.jW.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:64}
P.jY.prototype={
$0:function(){this.a.$0()},
$S:10}
P.jZ.prototype={
$0:function(){this.a.$0()},
$S:10}
P.dY.prototype={
eZ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ct(new P.kf(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
f_:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ct(new P.ke(this,a,Date.now(),b),0),a)
else throw H.c(P.A("Periodic timer."))},
$ijt:1}
P.kf.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ke.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eN(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.co.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.bN.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.co){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aB(s)
if(o instanceof P.bN){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dV.prototype={
gP:function(a){return new P.bN(this.a())}}
P.fO.prototype={}
P.cc.prototype={}
P.fh.prototype={}
P.km.prototype={}
P.kz.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:3}
P.k3.prototype={
iD:function(a){var s,r,q,p=null
try{if(C.f===$.aO){a.$0()
return}P.pA(p,p,this,a)}catch(q){s=H.ar(q)
r=H.lp(q)
P.mE(p,p,this,s,r)}},
iE:function(a,b){var s,r,q,p=null
try{if(C.f===$.aO){a.$1(b)
return}P.pB(p,p,this,a,b)}catch(q){s=H.ar(q)
r=H.lp(q)
P.mE(p,p,this,s,r)}},
iF:function(a,b){return this.iE(a,b,t.A)},
hR:function(a){return new P.k4(this,a)},
dC:function(a,b){return new P.k5(this,a,b)}}
P.k4.prototype={
$0:function(){return this.a.iD(this.b)},
$S:3}
P.k5.prototype={
$1:function(a){return this.a.iF(this.b,a)},
$S:function(){return this.c.I("~(0)")}}
P.dJ.prototype={
gP:function(a){var s=new P.dK(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
C:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.fe(b)
return r}},
fe:function(a){var s=this.d
if(s==null)return!1
return this.bW(s[this.bS(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d1(s==null?q.b=P.l8():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d1(r==null?q.c=P.l8():r,b)}else return q.f1(0,b)},
f1:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.l8()
s=q.bS(b)
r=p[s]
if(r==null)p[s]=[q.bR(b)]
else{if(q.bW(r,b)>=0)return!1
r.push(q.bR(b))}return!0},
X:function(a,b){if((b&1073741823)===b)return this.hn(this.c,b)
else return this.hm(0,b)},
hm:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bS(b)
r=n[s]
q=o.bW(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dk(p)
return!0},
d1:function(a,b){if(a[b]!=null)return!1
a[b]=this.bR(b)
return!0},
hn:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dk(s)
delete a[b]
return!0},
d2:function(){this.r=this.r+1&1073741823},
bR:function(a){var s,r=this,q=new P.k2(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d2()
return q},
dk:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d2()},
bS:function(a){return J.kN(a)&1073741823},
bW:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.U(a[r].a,b))return r
return-1}}
P.k2.prototype={}
P.dK.prototype={
gD:function(a){return H.T(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aF(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cS.prototype={}
P.iJ.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:11}
P.cZ.prototype={$in:1,$ii:1,$ip:1}
P.j.prototype={
gP:function(a){return new H.bl(a,this.gm(a))},
H:function(a,b){return this.h(a,b)},
w:function(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gm(a))throw H.c(P.aF(a))}},
gbC:function(a){return this.gm(a)===0},
iK:function(a,b){var s,r,q,p,o=this
if(o.gbC(a)){s=J.kV(0,H.b7(a).I("j.E"))
return s}r=o.h(a,0)
q=P.eJ(o.gm(a),r,!0,H.b7(a).I("j.E"))
for(p=1;p<o.gm(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
iJ:function(a){return this.iK(a,!0)},
i2:function(a,b,c,d){var s
H.b7(a).I("j.E").a(d)
P.bo(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.kT(a,"[","]")}}
P.d1.prototype={}
P.iN.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.x(a)
r.a=s+": "
r.a+=H.x(b)},
$S:31}
P.K.prototype={
w:function(a,b){var s,r,q
for(s=J.aB(this.ga4(a)),r=H.b7(a).I("K.V");s.u();){q=s.gD(s)
b.$2(q,r.a(this.h(a,q)))}},
gm:function(a){return J.aQ(this.ga4(a))},
i:function(a){return P.l_(a)},
$iF:1}
P.hH.prototype={
l:function(a,b,c){throw H.c(P.A("Cannot modify unmodifiable map"))}}
P.d2.prototype={
h:function(a,b){return J.lx(this.a,b)},
l:function(a,b,c){J.kM(this.a,b,c)},
w:function(a,b){J.ee(this.a,b)},
gm:function(a){return J.aQ(this.a)},
i:function(a){return J.cz(this.a)},
$iF:1}
P.ck.prototype={}
P.dj.prototype={
aj:function(a,b){var s
for(s=J.aB(b);s.u();)this.n(0,s.gD(s))},
i:function(a){return P.kT(this,"{","}")},
H:function(a,b){var s,r,q,p,o="index"
H.pN(b,o,t.S)
P.lU(b,o)
for(s=P.oo(this,this.r),r=H.T(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.M(b,this,o,null,q))}}
P.dR.prototype={$in:1,$ii:1}
P.dL.prototype={}
P.e2.prototype={}
P.e4.prototype={}
P.jL.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ar(r)}return null},
$S:22}
P.jK.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ar(r)}return null},
$S:22}
P.i1.prototype={
ii:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bo(a3,a4,a2.length)
s=$.nb()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.E(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kD(C.a.E(a2,k))
g=H.kD(C.a.E(a2,k+1))
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
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.Y("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.av(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lB(a2,m,a4,n,l,d)
else{b=C.c.bt(d-1,4)+1
if(b===1)throw H.c(P.a7(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b7(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lB(a2,m,a4,n,l,a)
else{b=C.c.bt(a,4)
if(b===1)throw H.c(P.a7(a0,a2,a4))
if(b>1)a2=C.a.b7(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i2.prototype={}
P.em.prototype={}
P.ep.prototype={}
P.ik.prototype={}
P.ix.prototype={
i:function(a){return this.a}}
P.iw.prototype={
fg:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.Y("")
if(o>b)n.a+=C.a.t(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.t(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jI.prototype={
gi1:function(){return C.P}}
P.jM.prototype={
cg:function(a){var s,r,q,p=P.bo(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kk(r)
if(q.fl(a,0,p)!==p){C.a.U(a,p-1)
q.cc()}return new Uint8Array(r.subarray(0,H.oX(0,q.b,s)))}}
P.kk.prototype={
cc:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hL:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cc()
return!1}},
fl:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.E(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hL(p,C.a.E(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cc()}else if(p<=2047){o=l.b
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
P.jJ.prototype={
cg:function(a){var s=this.a,r=P.oc(s,a,0,null)
if(r!=null)return r
return new P.kj(s).hT(a,0,null,!0)}}
P.kj.prototype={
hT:function(a,b,c,d){var s,r,q,p,o=this,n=P.bo(b,c,J.aQ(a))
if(b===n)return""
s=P.oT(a,b,n)
r=o.bT(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.oU(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
bT:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a5(b+c,2)
r=q.bT(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bT(a,s,c,d)}return q.hX(a,b,c,d)},
hX:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.Y(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
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
g.a+=H.av(a[l])}else g.a+=P.fj(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.av(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.X.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.X&&this.a===b.a&&!0},
ak:function(a,b){return C.c.ak(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.b_(s,30))&1073741823},
i:function(a){var s=this,r=P.nw(H.nW(s)),q=P.es(H.nU(s)),p=P.es(H.nQ(s)),o=P.es(H.nR(s)),n=P.es(H.nT(s)),m=P.es(H.nV(s)),l=P.nx(H.nS(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bC.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bC&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
ak:function(a,b){return C.c.ak(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ih(),o=this.a
if(o<0)return"-"+new P.bC(0-o).i(0)
s=p.$1(C.c.a5(o,6e7)%60)
r=p.$1(C.c.a5(o,1e6)%60)
q=new P.ig().$1(o%1e6)
return""+C.c.a5(o,36e8)+":"+s+":"+r+"."+q}}
P.ig.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.ih.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.I.prototype={}
P.eh.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.io(s)
return"Assertion failed"}}
P.fw.prototype={}
P.eU.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbV()+o+m
if(!q.a)return l
s=q.gbU()
r=P.io(q.b)
return l+s+": "+r}}
P.di.prototype={
gbV:function(){return"RangeError"},
gbU:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.eA.prototype={
gbV:function(){return"RangeError"},
gbU:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm:function(a){return this.f}}
P.fG.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fD.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.io(s)+"."}}
P.eX.prototype={
i:function(a){return"Out of Memory"},
$iI:1}
P.dp.prototype={
i:function(a){return"Stack Overflow"},
$iI:1}
P.eq.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h1.prototype={
i:function(a){return"Exception: "+this.a}}
P.it.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.E(d,o)
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
return f+j+h+i+"\n"+C.a.S(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.i.prototype={
bK:function(a,b){return new H.b5(this,b,H.T(this).I("b5<i.E>"))},
gm:function(a){var s,r=this.gP(this)
for(s=0;r.u();)++s
return s},
gaR:function(a){var s,r=this.gP(this)
if(!r.u())throw H.c(H.kU())
s=r.gD(r)
if(r.u())throw H.c(H.nC())
return s},
H:function(a,b){var s,r,q
P.lU(b,"index")
for(s=this.gP(this),r=0;s.u();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.nB(this,"(",")")}}
P.eB.prototype={}
P.a9.prototype={
gF:function(a){return P.N.prototype.gF.call(C.U,this)},
i:function(a){return"null"}}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gF:function(a){return H.dg(this)},
i:function(a){return"Instance of '"+H.dh(this)+"'"},
toString:function(){return this.i(this)}}
P.Y.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jG.prototype={
$2:function(a,b){var s,r,q,p=C.a.e4(b,"=")
if(p===-1){if(b!=="")J.kM(a,P.lh(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.ae(b,p+1)
q=this.a
J.kM(a,P.lh(s,0,s.length,q,!0),P.lh(r,0,r.length,q,!0))}return a},
$S:29}
P.jD.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:45}
P.jE.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jF.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.hU(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:65}
P.bO.prototype={
gcb:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.kZ("_text"))}return o},
gF:function(a){var s=this,r=s.z
if(r==null){r=C.a.gF(s.gcb())
if(s.z==null)s.z=r
else r=H.h(H.kZ("hashCode"))}return r},
gcF:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ck(P.m8(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.kZ("queryParameters"))}return r},
geA:function(){return this.b},
gcu:function(a){var s=this.c
if(s==null)return""
if(C.a.a1(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbF:function(a){var s=this.d
return s==null?P.ms(this.a):s},
gcE:function(a){var s=this.f
return s==null?"":s},
ge_:function(){var s=this.r
return s==null?"":s},
ev:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a1(s,"/"))s="/"+s
q=s
p=P.lf(null,0,0,b)
return new P.bO(n,l,j,k,q,p,o.r)},
ge0:function(){return this.c!=null},
ge3:function(){return this.f!=null},
ge1:function(){return this.r!=null},
i:function(a){return this.gcb()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbL())if(q.c!=null===b.ge0())if(q.b===b.geA())if(q.gcu(q)===b.gcu(b))if(q.gbF(q)===b.gbF(b))if(q.e===b.geo(b)){s=q.f
r=s==null
if(!r===b.ge3()){if(r)s=""
if(s===b.gcE(b)){s=q.r
r=s==null
if(!r===b.ge1()){if(r)s=""
s=s===b.ge_()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifH:1,
gbL:function(){return this.a},
geo:function(a){return this.e}}
P.kh.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ki(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ki(C.h,b,C.e,!0)}},
$S:54}
P.kg.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aB(b),r=this.a;s.u();)r.$2(a,s.gD(s))},
$S:5}
P.jC.prototype={
gez:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bB(s,"?",m)
q=s.length
if(r>=0){p=P.e3(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fU("data","",n,n,P.e3(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ks.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.i2(s,0,96,b)
return s},
$S:33}
P.kt.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.E(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:18}
P.ku.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.E(b,0),r=C.a.E(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:18}
P.hm.prototype={
ge0:function(){return this.c>0},
ge2:function(){return this.c>0&&this.d+1<this.e},
ge3:function(){return this.f<this.r},
ge1:function(){return this.r<this.a.length},
gbL:function(){var s=this.x
return s==null?this.x=this.fd():s},
fd:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a1(r.a,"http"))return"http"
if(q===5&&C.a.a1(r.a,"https"))return"https"
if(s&&C.a.a1(r.a,"file"))return"file"
if(q===7&&C.a.a1(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
geA:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcu:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbF:function(a){var s,r=this
if(r.ge2())return P.hU(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a1(r.a,"http"))return 80
if(s===5&&C.a.a1(r.a,"https"))return 443
return 0},
geo:function(a){return C.a.t(this.a,this.e,this.f)},
gcE:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
ge_:function(){var s=this.r,r=this.a
return s<r.length?C.a.ae(r,s+1):""},
gcF:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.ck(P.m8(s.gcE(s)),t.dw)},
ev:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbL(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.ge2()?n.gbF(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a1(r,"/"))r="/"+r
p=P.lf(m,0,0,b)
q=n.r
o=q<j.length?C.a.ae(j,q+1):m
return new P.bO(l,i,s,h,r,p,o)},
gF:function(a){var s=this.y
return s==null?this.y=C.a.gF(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifH:1}
P.fU.prototype={}
W.u.prototype={}
W.hX.prototype={
gm:function(a){return a.length}}
W.ef.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eg.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bS.prototype={$ibS:1}
W.by.prototype={$iby:1}
W.bz.prototype={$ibz:1}
W.bA.prototype={
cM:function(a,b,c){if(c!=null)return a.getContext(b,P.mJ(c))
return a.getContext(b)},
eD:function(a,b){return this.cM(a,b,null)},
$ibA:1}
W.cD.prototype={$icD:1}
W.aD.prototype={
gm:function(a){return a.length}}
W.i8.prototype={
gm:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cH.prototype={
gm:function(a){var s=a.length
s.toString
return s}}
W.i9.prototype={}
W.at.prototype={}
W.aT.prototype={}
W.ia.prototype={
gm:function(a){return a.length}}
W.ib.prototype={
gm:function(a){return a.length}}
W.ic.prototype={
gm:function(a){return a.length}}
W.bf.prototype={$ibf:1}
W.id.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cI.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.cJ.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaQ(a))+" x "+H.x(this.gaJ(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aP(b)
if(s===r.gbE(b)){s=a.top
s.toString
s=s===r.gbH(b)&&this.gaQ(a)===r.gaQ(b)&&this.gaJ(a)===r.gaJ(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.mj(r,C.d.gF(s),C.d.gF(this.gaQ(a)),C.d.gF(this.gaJ(a)))},
gdD:function(a){var s=a.bottom
s.toString
return s},
gd8:function(a){return a.height},
gaJ:function(a){var s=this.gd8(a)
s.toString
return s},
gbE:function(a){var s=a.left
s.toString
return s},
gcG:function(a){var s=a.right
s.toString
return s},
gbH:function(a){var s=a.top
s.toString
return s},
gdm:function(a){return a.width},
gaQ:function(a){var s=this.gdm(a)
s.toString
return s},
$iaf:1}
W.et.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.ie.prototype={
gm:function(a){var s=a.length
s.toString
return s}}
W.fR.prototype={
gbC:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gP:function(a){var s=this.iJ(this)
return new J.ah(s,s.length)}}
W.B.prototype={
ga2:function(a){return new W.fZ(a)},
gbm:function(a){var s=a.children
s.toString
return new W.fR(a,s)},
gdG:function(a){var s,r,q,p=a.clientLeft
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
al:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lI
if(s==null){s=H.b([],t.Q)
r=new W.de(s)
s.push(W.mi(null))
s.push(W.mn())
$.lI=r
d=r}else d=s
s=$.lH
if(s==null){s=new W.hI(d)
$.lH=s
c=s}else{s.a=d
c=s}}if($.bg==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bg=r
r=r.createRange()
r.toString
$.kQ=r
r=$.bg.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.bg.head.appendChild(r).toString}s=$.bg
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bg
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.bg.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.C(C.X,s)}else s=!1
if(s){$.kQ.selectNodeContents(q)
s=$.kQ
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bg.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bg.body)J.lz(q)
c.cN(p)
document.adoptNode(p).toString
return p},
hV:function(a,b,c){return this.al(a,b,c,null)},
eE:function(a,b){var s
a.textContent=null
s=a.appendChild(this.al(a,b,null,null))
s.toString},
gex:function(a){var s=a.tagName
s.toString
return s},
$iB:1}
W.ii.prototype={
$1:function(a){return t.h.b(a)},
$S:19}
W.m.prototype={$im:1}
W.e.prototype={
hN:function(a,b,c,d){if(c!=null)this.f3(a,b,c,!1)},
f3:function(a,b,c,d){return a.addEventListener(b,H.ct(c,1),!1)},
$ie:1}
W.am.prototype={$iam:1}
W.bY.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1,
$ibY:1}
W.ev.prototype={
gm:function(a){return a.length}}
W.ex.prototype={
gm:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.iv.prototype={
gm:function(a){var s=a.length
s.toString
return s}}
W.bE.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.bF.prototype={
gdH:function(a){var s=a.data
s.toString
return s},
$ibF:1}
W.c_.prototype={$ic_:1}
W.bG.prototype={$ibG:1}
W.iL.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j1.prototype={
gm:function(a){return a.length}}
W.c2.prototype={$ic2:1}
W.eM.prototype={
h:function(a,b){return P.bv(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.w(a,new W.j2(s))
return s},
gm:function(a){var s=a.size
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iF:1}
W.j2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eN.prototype={
h:function(a,b){return P.bv(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.w(a,new W.j3(s))
return s},
gm:function(a){var s=a.size
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iF:1}
W.j3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aJ.prototype={$iaJ:1}
W.eO.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.an.prototype={$ian:1}
W.a6.prototype={
gaR:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.l1("No elements"))
if(r>1)throw H.c(P.l1("More than one element"))
s=s.firstChild
s.toString
return s},
aj:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gP:function(a){var s=this.a.childNodes
return new W.cN(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.v.prototype={
iz:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
iB:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nf(s,b,a)}catch(q){H.ar(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eJ(a):s},
hr:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iv:1}
W.dd.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.aL.prototype={
gm:function(a){return a.length},
$iaL:1}
W.f0.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.f7.prototype={
h:function(a,b){return P.bv(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.w(a,new W.jd(s))
return s},
gm:function(a){var s=a.size
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iF:1}
W.jd.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f9.prototype={
gm:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fb.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.aM.prototype={$iaM:1}
W.fc.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.aN.prototype={
gm:function(a){return a.length},
$iaN:1}
W.fg.prototype={
h:function(a,b){return a.getItem(H.kp(b))},
l:function(a,b,c){a.setItem(b,c)},
w:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga4:function(a){var s=H.b([],t.s)
this.w(a,new W.jj(s))
return s},
gm:function(a){var s=a.length
s.toString
return s},
$iF:1}
W.jj.prototype={
$2:function(a,b){return this.a.push(a)},
$S:35}
W.ao.prototype={$iao:1}
W.bq.prototype={$ibq:1}
W.dq.prototype={
al:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bO(a,b,c,d)
s=W.ny("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a6(r).aj(0,new W.a6(s))
return r}}
W.fk.prototype={
al:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bO(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.al(r,b,c,d))
r=new W.a6(r.gaR(r))
new W.a6(s).aj(0,new W.a6(r.gaR(r)))
return s}}
W.fl.prototype={
al:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bO(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.al(r,b,c,d))
new W.a6(s).aj(0,new W.a6(r.gaR(r)))
return s}}
W.ce.prototype={$ice:1}
W.ay.prototype={$iay:1}
W.aj.prototype={$iaj:1}
W.fn.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.fo.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.js.prototype={
gm:function(a){var s=a.length
s.toString
return s}}
W.az.prototype={$iaz:1}
W.bK.prototype={$ibK:1}
W.fu.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.jx.prototype={
gm:function(a){return a.length}}
W.b2.prototype={}
W.jH.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fK.prototype={
gm:function(a){return a.length}}
W.br.prototype={
ghZ:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.A("deltaY is not supported"))},
ghY:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.A("deltaX is not supported"))},
$ibr:1}
W.cl.prototype={
hs:function(a,b){var s=a.requestAnimationFrame(H.ct(b,1))
s.toString
return s},
fk:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cm.prototype={$icm:1}
W.fS.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.dG.prototype={
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
if(s===r.gbE(b)){s=a.top
s.toString
if(s===r.gbH(b)){s=a.width
s.toString
if(s===r.gaQ(b)){s=a.height
s.toString
r=s===r.gaJ(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gF(p)
s=a.top
s.toString
s=C.d.gF(s)
r=a.width
r.toString
r=C.d.gF(r)
q=a.height
q.toString
return W.mj(p,s,r,C.d.gF(q))},
gd8:function(a){return a.height},
gaJ:function(a){var s=a.height
s.toString
return s},
gdm:function(a){return a.width},
gaQ:function(a){var s=a.width
s.toString
return s}}
W.h5.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.dM.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.hp.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.hw.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ii:1,
$ip:1}
W.fP.prototype={
w:function(a,b){var s,r,q,p,o
for(s=this.ga4(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kp(q.getAttribute(o)))}},
ga4:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.fZ.prototype={
h:function(a,b){return this.a.getAttribute(H.kp(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga4(this).length}}
W.kS.prototype={}
W.dH.prototype={
hI:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.ng(s,this.c,r,!1)}}}
W.k_.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.l7.prototype={}
W.cn.prototype={
eT:function(a){var s
if($.dI.gbC($.dI)){for(s=0;s<262;++s)$.dI.l(0,C.W[s],W.pX())
for(s=0;s<12;++s)$.dI.l(0,C.n[s],W.pY())}},
b0:function(a){return $.nc().C(0,W.cL(a))},
aw:function(a,b,c){var s=$.dI.h(0,W.cL(a)+"::"+b)
if(s==null)s=$.dI.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaK:1}
W.L.prototype={
gP:function(a){return new W.cN(a,this.gm(a))}}
W.de.prototype={
b0:function(a){return C.b.dw(this.a,new W.j6(a))},
aw:function(a,b,c){return C.b.dw(this.a,new W.j5(a,b,c))},
$iaK:1}
W.j6.prototype={
$1:function(a){return a.b0(this.a)},
$S:27}
W.j5.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)},
$S:27}
W.dS.prototype={
eY:function(a,b,c,d){var s,r,q
this.a.aj(0,c)
s=b.bK(0,new W.k7())
r=b.bK(0,new W.k8())
this.b.aj(0,s)
q=this.c
q.aj(0,C.v)
q.aj(0,r)},
b0:function(a){return this.a.C(0,W.cL(a))},
aw:function(a,b,c){var s=this,r=W.cL(a),q=s.c
if(q.C(0,r+"::"+b))return s.d.hP(c)
else if(q.C(0,"*::"+b))return s.d.hP(c)
else{q=s.b
if(q.C(0,r+"::"+b))return!0
else if(q.C(0,"*::"+b))return!0
else if(q.C(0,r+"::*"))return!0
else if(q.C(0,"*::*"))return!0}return!1},
$iaK:1}
W.k7.prototype={
$1:function(a){return!C.b.C(C.n,a)},
$S:20}
W.k8.prototype={
$1:function(a){return C.b.C(C.n,a)},
$S:20}
W.hy.prototype={
aw:function(a,b,c){if(this.eM(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.kd.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:37}
W.hx.prototype={
b0:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cL(a)==="foreignObject")return!1
if(s)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.a1(b,"on"))return!1
return this.b0(a)},
$iaK:1}
W.cN.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lx(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return H.T(this).c.a(this.d)}}
W.k6.prototype={}
W.hI.prototype={
cN:function(a){var s,r=new W.kl(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bk:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lz(a)
else b.removeChild(a).toString},
hw:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.ni(a)
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
o=p}l=o}catch(n){H.ar(n)}r="element unprintable"
try{r=J.cz(a)}catch(n){H.ar(n)}try{q=W.cL(a)
this.hv(a,b,l,r,q,k,j)}catch(n){if(H.ar(n) instanceof P.aC)throw n
else{this.bk(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hv:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bk(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b0(a)){m.bk(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aw(a,"is",g)){m.bk(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga4(f)
q=H.b(s.slice(0),H.li(s))
for(p=f.ga4(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nl(o)
H.kp(o)
if(!r.aw(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cN(s)}}}
W.kl.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hw(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bk(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.l1("Corrupt HTML")
throw H.c(n)}}catch(p){H.ar(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:41}
W.fT.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.hl.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.ht.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hJ.prototype={}
W.hK.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
W.hR.prototype={}
W.hS.prototype={}
P.k9.prototype={
cs:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bJ:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kv(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.X)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jB("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cs(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.ee(a,new P.kb(m,n))
return m.a}if(t.aH.b(a)){s=n.cs(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hU(a,s)}if(t.eH.b(a)){s=n.cs(a)
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
n.i8(a,new P.kc(m,n))
return m.b}throw H.c(P.jB("structured clone of other type"))},
hU:function(a,b){var s,r,q=J.cw(a),p=q.gm(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bJ(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kb.prototype={
$2:function(a,b){this.a.a[a]=this.b.bJ(b)},
$S:11}
P.kc.prototype={
$2:function(a,b){this.a.b[a]=this.b.bJ(b)},
$S:40}
P.e_.prototype={$ibF:1,
gdH:function(a){return this.a}}
P.kq.prototype={
$1:function(a){this.a.push(P.mA(a))},
$S:42}
P.kA.prototype={
$2:function(a,b){this.a[a]=P.mA(b)},
$S:11}
P.ka.prototype={
i8:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.ew.prototype={
gbh:function(){var s=this.b,r=H.T(s)
return new H.aW(new H.b5(s,new P.ir(),r.I("b5<j.E>")),new P.is(),r.I("aW<j.E,B>"))},
w:function(a,b){C.b.w(P.iK(this.gbh(),!1,t.h),b)},
l:function(a,b,c){var s=this.gbh()
J.nk(s.b.$1(J.hW(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gm:function(a){return J.aQ(this.gbh().a)},
h:function(a,b){var s=this.gbh()
return s.b.$1(J.hW(s.a,b))},
gP:function(a){var s=P.iK(this.gbh(),!1,t.h)
return new J.ah(s,s.length)}}
P.ir.prototype={
$1:function(a){return t.h.b(a)},
$S:19}
P.is.prototype={
$1:function(a){return t.h.a(a)},
$S:44}
P.hk.prototype={
gcG:function(a){return this.$ti.c.a(this.a+this.c)},
gdD:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aP(b)
if(s===r.gbE(b)){q=o.b
if(q===r.gbH(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcG(b)&&p.a(q+o.d)===r.gdD(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.o7(H.jk(H.jk(H.jk(H.jk(0,q),o),r),p))}}
P.af.prototype={
gbE:function(a){return this.a},
gbH:function(a){return this.b},
gaQ:function(a){return this.c},
gaJ:function(a){return this.d}}
P.aV.prototype={$iaV:1}
P.eH.prototype={
gm:function(a){var s=a.length
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
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.aZ.prototype={$iaZ:1}
P.eV.prototype={
gm:function(a){var s=a.length
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
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.j8.prototype={
gm:function(a){return a.length}}
P.c9.prototype={$ic9:1}
P.fi.prototype={
gm:function(a){var s=a.length
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
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.o.prototype={
gbm:function(a){return new P.ew(a,new W.a6(a))},
al:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mi(null))
o.push(W.mn())
o.push(new W.hx())
c=new W.hI(new W.de(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hV(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a6(q)
p=r.gaR(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b0.prototype={$ib0:1}
P.fv.prototype={
gm:function(a){var s=a.length
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
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.h8.prototype={}
P.h9.prototype={}
P.hg.prototype={}
P.hh.prototype={}
P.hu.prototype={}
P.hv.prototype={}
P.hD.prototype={}
P.hE.prototype={}
P.i_.prototype={
gm:function(a){return a.length}}
P.ej.prototype={
h:function(a,b){return P.bv(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.w(a,new P.i0(s))
return s},
gm:function(a){var s=a.size
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iF:1}
P.i0.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.ek.prototype={
gm:function(a){return a.length}}
P.bd.prototype={}
P.eW.prototype={
gm:function(a){return a.length}}
P.fQ.prototype={}
P.c8.prototype={
iG:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.pP(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bR("Incorrect number or type of arguments"))},
$ic8:1}
P.fd.prototype={
gm:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=P.bv(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.hq.prototype={}
P.hr.prototype={}
K.aR.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaX:1}
K.cP.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaX:1}
K.ad.prototype={
aK:function(a,b){return!this.eI(0,b)},
i:function(a){return"!["+this.bP(0)+"]"}}
K.f4.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.av(this.a),r=H.av(this.b)
return s+".."+r},
$iaX:1}
K.t.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.V(t.fX)
for(r=new H.bl(a,a.gm(a)),q=H.T(r).c;r.u();)s.l(0,q.a(r.d),!0)
p=P.iK(s.ga4(s),!0,t.S)
C.b.eH(p)
this.a=p},
aK:function(a,b){return C.b.C(this.a,b)},
i:function(a){return P.fj(this.a,0,null)},
$iaX:1}
L.fe.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ds(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
i3:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
dj:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.C(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga4(s)}s=J.aB(s==null?H.b([],t.s):s)
for(;s.u();){r=s.gD(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.C(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bP(0))}return l.charCodeAt(0)==0?l:l}}
L.fs.prototype={
i:function(a){var s=H.lv(this.b,"\n","\\n"),r=H.lv(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ft.prototype={
aN:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.l(0,c[q],b)},
i:function(a){return this.b}}
L.ju.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fe(this,b,H.b([],t.ab))
s.l(0,b,r)}return r},
N:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.ft(a,P.Q(s,s))
r.l(0,a,q)}return q},
cJ:function(a){return this.iM(a)},
iM:function(a){var s=this
return P.pd(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cJ(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.T(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a2.length
if(h!==0){if(!!a2.fixed$length)H.h(P.A("removeAt"))
if(0>=h)H.h(P.f5(0,null))
g=a2.splice(0,1)[0]}else{if(!r.u()){q=3
break}g=n.a(r.d)}a1.push(g);++k
h=c==null
f=h?null:c.i3(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.fj(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(h?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.A("removeRange"))
P.bo(0,i,a1.length)
a1.splice(0,i-0)
C.b.aj(a2,a1)
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
h=new L.fs(d==null?h.b:d,e,k)
l=h}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.C(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.om()
case 1:return P.on(o)}}},t.bJ)},
i:function(a){var s,r=new P.Y(""),q=this.d
if(q!=null)r.a=""+(q.dj()+"\n")
for(q=this.a,q=q.giN(q),q=q.gP(q);q.u();){s=q.gD(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.dj())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.ds.prototype={
i:function(a){return this.b.b+": "+this.bP(0)}}
O.al.prototype={
cQ:function(a,b,c){this.b=b
this.c=a},
bu:function(a,b){return this.cQ(a,null,b)},
h9:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
eS:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.ah(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.T(q).I("w<al.T>")
if(q.h9(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.eS(r,H.b([b],p))}},
$ii:1}
O.d9.prototype={
gm:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.J():s},
aS:function(){var s=this.b
return s==null?null:s.J(null)},
ga_:function(a){var s=this.a
if(s.length>0)return C.b.gay(s)
else return V.aI()},
er:function(a){this.a.push(a)
this.aS()},
cD:function(){var s=this.a
if(s.length>0){s.pop()
this.aS()}}}
E.i3.prototype={}
E.bD.prototype={
d0:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.ah(s,s.length),r=H.T(s).c;s.u();){q=r.a(s.d)
if(q.f==null)q.d0()}},
sbM:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().X(0,s.gei())
if(b!=null)b.gv().n(0,s.gei())
s.as(new D.D("shape",r,b))}},
scH:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gv().X(0,s.gek())
if(a!=null)a.gv().n(0,s.gek())
s.d0()
s.as(new D.D("technique",r,a))}},
sbp:function(a){var s,r,q=this
if(!J.U(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().X(0,q.geg())
if(a!=null)a.gv().n(0,q.geg())
r=q.r
q.as(new D.D("mover",s,r))}},
au:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.b9(0,b,q)
if(!J.U(o,q.x)){s=q.x
q.x=o
q.as(new D.D("matrix",s,o))}p=q.f
if(p!=null)p.au(0,b)
for(p=q.y.a,p=new J.ah(p,p.length),r=H.T(p).c;p.u();)r.a(p.d).au(0,b)},
aM:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga_(q))
else o.push(p.S(0,q.ga_(q)))
q.aS()
a.es(r.f)
s=C.b.gay(a.dy)
if(r.d!=null)if(s!=null)s.eu(a,r)
for(p=r.y.a,p=new J.ah(p,p.length),o=H.T(p).c;p.u();)o.a(p.d).aM(a)
a.ep()
q.cD()},
as:function(a){var s=this.z
return s==null?null:s.J(a)},
W:function(){return this.as(null)},
ej:function(a){this.e=null
this.as(a)},
iq:function(){return this.ej(null)},
el:function(a){return this.as(a)},
ir:function(){return this.el(null)},
eh:function(a){return this.as(a)},
ip:function(){return this.eh(null)},
ef:function(a){return this.as(a)},
il:function(){return this.ef(null)},
ik:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gee(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bX()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.W()},
io:function(a,b){var s,r
for(s=b.gP(b),r=this.gee();s.u();)s.gD(s).gv().X(0,r)
this.W()},
i:function(a){return"Unnamed entity"}}
E.bU.prototype={
i:function(a){return this.b}}
E.c6.prototype={
i:function(a){return this.b}}
E.h_.prototype={}
E.j9.prototype={
eR:function(a,b){var s=this
s.cy.gv().n(0,new E.ja(s))
s.db.gv().n(0,new E.jb(s))
s.dx.gv().n(0,new E.jc(s))},
giy:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga_(q).S(0,s.ga_(s))
q=s}return q},
geq:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.giy().S(0,r.ga_(r))}return r},
geB:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
s=r.dx
s=r.cx=q.ga_(q).S(0,s.ga_(s))
q=s}return q},
es:function(a){var s=this.dy
return s.push(a==null?C.b.gay(s):a)},
ep:function(){var s=this.dy
if(s.length>1)s.pop()},
du:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cf(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.l(0,r,a)}}
E.ja.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.jb.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.jc.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.fr.prototype={
cW:function(a){this.ew()},
cV:function(){return this.cW(null)},
gi9:function(){var s,r=this,q=Date.now(),p=C.c.a5(P.lG(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.X(q,!1)
return s/p},
de:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.ct(r*o)
r=s.clientHeight
r.toString
p=C.d.ct(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.m2(C.m,this.giC())}},
ew:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.fk(s)
r=W.mG(new E.jr(this),t.H)
r.toString
C.E.hs(s,r)}},
iA:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.de()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.X(p,!1)
q.y=P.lG(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aS()
p=q.db
C.b.sm(p.a,0)
p.aS()
p=q.dx
C.b.sm(p.a,0)
p.aS()
p=q.dy
C.b.sm(p,0)
p.push(null)
m.aM(q)}q=n.Q
if(q!=null)q.J(null)}catch(o){s=H.ar(o)
r=H.lp(o)
P.lu("Error: "+H.x(s))
P.lu("Stack: "+H.x(r))
throw H.c(s)}}}
E.jr.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.iA()}},
$S:32}
Z.fL.prototype={}
Z.bV.prototype={
aG:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ar(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.fM.prototype={}
Z.cB.prototype={
am:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
aG:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].aG(a)}},
ey:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aM:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
em:function(a){this.aG(a)
this.aM(a)
this.ey(a)},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dh(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.el.prototype={}
Z.c0.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dh(this.c)+"'")+"]"}}
Z.b4.prototype={
gcR:function(a){var s=this.a,r=(s&$.bb().a)!==0?3:0
if((s&$.ba().a)!==0)r+=3
if((s&$.b9().a)!==0)r+=3
if((s&$.bx().a)!==0)r+=2
if((s&$.bQ().a)!==0)r+=3
if((s&$.cx().a)!==0)r+=3
if((s&$.ed().a)!==0)r+=4
if((s&$.cy().a)!==0)++r
return(s&$.bw().a)!==0?r+4:r},
hQ:function(a){var s,r=$.bb(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.ba()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ed()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cy()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0)if(s===a)return r
return $.na()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bb().a)!==0)s.push("Pos")
if((r&$.ba().a)!==0)s.push("Norm")
if((r&$.b9().a)!==0)s.push("Binm")
if((r&$.bx().a)!==0)s.push("Txt2D")
if((r&$.bQ().a)!==0)s.push("TxtCube")
if((r&$.cx().a)!==0)s.push("Clr3")
if((r&$.ed().a)!==0)s.push("Clr4")
if((r&$.cy().a)!==0)s.push("Weight")
if((r&$.bw().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i5.prototype={}
D.bX.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
X:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.X(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.X(p,b)
s=p===!0||s}return s},
J:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.S():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.w(P.iK(p,!0,t.g8),new D.ip(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.w(r,new D.iq(s))}return!0},
i_:function(){return this.J(null)},
aO:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.J(s)}}}}
D.ip.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.iq.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.S.prototype={}
D.bh.prototype={}
D.bi.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
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
X.iH.prototype={}
X.d0.prototype={}
X.iM.prototype={
bg:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a4(o.a+b.a,o.b+b.b)
o=q.a.gb2()
s=$.ai
if(s==null)s=$.ai=new V.a4(0,0)
r=q.x
q.z=new P.X(p,!1)
q.x=n
return new X.c3(a,s,r,o,n)},
cC:function(a,b){this.r=a.a
return!1},
br:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bq:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.bg(a,b))
return!0},
iv:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb2()
r=this.x
Date.now()
q.J(new X.c4(new V.a5(a.a,a.b),s,r))
return!0},
fZ:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.J(new X.d0(c,q.a.gb2(),b))
q.y=new P.X(s,!1)
s=$.ai
q.x=s==null?$.ai=new V.a4(0,0):s}}
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
X.c3.prototype={}
X.j4.prototype={
bX:function(a,b,c){var s=this,r=new P.X(Date.now(),!1),q=s.a.gb2(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c3(a,p,o,q,b)},
cC:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.J(this.bX(a,b,!0))
return!0},
br:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.J(r.bX(a,b,!0))
return!0},
bq:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.bX(a,b,!1))
return!0},
iw:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb2()
Date.now()
r.J(new X.c4(new V.a5(a.a,a.b),s,b))
return!0},
gdK:function(){var s=this.b
return s==null?this.b=D.J():s},
gcK:function(){var s=this.c
return s==null?this.c=D.J():s},
gec:function(){var s=this.d
return s==null?this.d=D.J():s}}
X.c4.prototype={}
X.f3.prototype={}
X.dr.prototype={}
X.jw.prototype={
bg:function(a,b){var s,r,q,p,o=this,n=new P.X(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ai
if(r==null){r=new V.a4(0,0)
$.ai=r
s=r}else s=r}r=o.a.gb2()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dr(q,p,r,s)},
iu:function(a){var s=this.b
if(s==null)return!1
s.J(this.bg(a,!0))
return!0},
is:function(a){var s=this.c
if(s==null)return!1
s.J(this.bg(a,!0))
return!0},
it:function(a){var s=this.d
if(s==null)return!1
s.J(this.bg(a,!1))
return!0}}
X.fI.prototype={
gb6:function(a){var s=this.b
return s==null?this.b=new X.iH(new X.a8(!1,!1,!1),P.cY(t.S)):s},
ga9:function(){var s,r=this.c
if(r==null){r=$.ai
if(r==null){r=$.ai=new V.a4(0,0)
s=r}else s=r
r=this.c=new X.j4(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gan:function(){var s=this.d
if(s==null){s=$.ai
if(s==null)s=$.ai=new V.a4(0,0)
s=this.d=new X.iM(this,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return s},
gb8:function(){var s,r=this.e
if(r==null){r=$.ai
if(r==null){r=$.ai=new V.a4(0,0)
s=r}else s=r
r=this.e=new X.jw(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gb2:function(){var s=this.a
return V.lW(0,0,C.i.gdG(s).c,C.i.gdG(s).d)},
d4:function(a){var s,r,q,p=a.keyCode
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
aZ:function(a){var s,r,q=this.gb6(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a8(p,s,r)},
ca:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb6(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a8(s,r===!0,q===!0)},
aE:function(a){var s,r,q,p
if(a==null){s=$.ai
return s==null?$.ai=new V.a4(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a4(r-p,q-s)},
bj:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a5(r,s)},
c7:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
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
s.push(new V.a4(n-m,l-k))}return s},
aB:function(a){var s,r,q,p
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
bY:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fT:function(a){return this.f=!0},
fH:function(a){return this.f=!1},
fN:function(a){if(this.f&&this.bY(a))a.preventDefault()},
fX:function(a){var s,r,q=this
if(!q.f)return
s=q.d4(a)
r=q.gb6(q)
r.c=s.b
r.d.n(0,s.a)},
fV:function(a){var s,r,q=this
if(!q.f)return
s=q.d4(a)
r=q.gb6(q)
r.c=s.b
r.d.X(0,s.a)},
h0:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aZ(a)
if(p.x){s=p.aB(a)
r=p.bj(a)
if(p.gan().cC(s,r))a.preventDefault()
return}s=p.aB(a)
q=p.aE(a)
if(p.ga9().cC(s,q))a.preventDefault()},
h4:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aB(a)
if(p.x){r=p.bj(a)
if(p.gan().br(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.ga9().br(s,q))a.preventDefault()},
fR:function(a){var s,r,q,p=this
if(!p.bY(a)){p.aZ(a)
s=p.aB(a)
if(p.x){r=p.bj(a)
if(p.gan().br(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.ga9().br(s,q))a.preventDefault()}},
h2:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aB(a)
if(p.x){r=p.bj(a)
if(p.gan().bq(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.ga9().bq(s,q))a.preventDefault()},
fP:function(a){var s,r,q,p=this
if(!p.bY(a)){p.aZ(a)
s=p.aB(a)
if(p.x){r=p.bj(a)
if(p.gan().bq(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.ga9().bq(s,q))a.preventDefault()}},
h6:function(a){var s,r,q=this
q.aZ(a)
s=new V.a5(C.D.ghY(a),C.D.ghZ(a)).S(0,q.Q)
if(q.x){if(q.gan().iv(s))a.preventDefault()
return}r=q.aE(a)
if(q.ga9().iw(s,r))a.preventDefault()},
h8:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aB(q.y)
r=q.aE(q.y)
q.gan().fZ(s,r,p)}},
hl:function(a){var s,r=this
r.a.focus()
r.f=!0
r.ca(a)
s=r.c7(a)
if(r.gb8().iu(s))a.preventDefault()},
hh:function(a){var s
this.ca(a)
s=this.c7(a)
if(this.gb8().is(s))a.preventDefault()},
hj:function(a){var s
this.ca(a)
s=this.c7(a)
if(this.gb8().it(s))a.preventDefault()}}
D.bW.prototype={
aA:function(a){var s=this.r
return s==null?null:s.J(a)},
eW:function(){return this.aA(null)},
$iau:1}
D.cW.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.J():s},
gea:function(){var s=this.z
return s==null?this.z=D.J():s},
aA:function(a){var s=this.y
return s==null?null:s.J(a)},
da:function(a){var s=this.z
return s==null?null:s.J(a)},
fY:function(){return this.da(null)},
hb:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eU(a[r]))return!1
return!0},
fB:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gd9(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bX()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aA(new D.bh())},
hf:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gd9(),q=this.e;s.u();){p=s.gD(s)
C.b.X(q,p)
p.gv().X(0,r)}this.aA(new D.bi())},
eU:function(a){var s=C.b.C(this.f,a)
return s}}
V.W.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.a1.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.im.prototype={}
V.d8.prototype={
a6:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d8))return!1
s=b.a
$.E().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cv(H.b([o.a,o.d,o.r],n),3,0),l=V.cv(H.b([o.b,o.e,o.x],n),3,0),k=V.cv(H.b([o.c,o.f,o.y],n),3,0)
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
V.bm.prototype={
a6:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
e8:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.E().toString
if(Math.abs(b3-0)<1e-9)return V.aI()
s=1/b3
r=-l
q=-a2
return V.aY((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
S:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aY(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bI:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.G(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bs:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.ae(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bm))return!1
s=b.a
$.E().toString
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
G:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cv(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cv(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cv(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cv(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
A:function(){return this.G("")}}
V.a4.prototype={
ag:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"},
A:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.ae.prototype={
Y:function(a,b){return new V.ae(this.a+b.a,this.b+b.b,this.c+b.c)},
bd:function(a,b){return new V.ae(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ae))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
A:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.f2.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f2))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.f6.prototype={
gaz:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f6))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.a5.prototype={
cv:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){return this.a*a.a+this.b*a.b},
S:function(a,b){return new V.a5(this.a*b,this.b*b)},
ah:function(a,b){var s
$.E().toString
if(Math.abs(b-0)<1e-9){s=$.bM
return s==null?$.bM=new V.a5(0,0):s}return new V.a5(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.G.prototype={
cv:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cw:function(a,b){return new V.G(V.lr(this.a,a.a,b),V.lr(this.b,a.b,b),V.lr(this.c,a.c,b))},
R:function(){var s=this,r=Math.sqrt(s.a7(s))
if(r===1)return s
return s.ah(0,r)},
bn:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.G(s*r-q*p,q*o-n*r,n*p-s*o)},
Y:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
ba:function(a){return new V.G(-this.a,-this.b,-this.c)},
ah:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.b3()
return new V.G(this.a/b,this.b/b,this.c/b)},
e9:function(){$.E().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.G))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
A:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
U.i6.prototype={
bQ:function(a){var s=V.qe(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.J():s},
O:function(a){var s=this.y
return s==null?null:s.J(a)},
scL:function(a,b){},
scz:function(a){var s,r=this,q=r.b
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bQ(s)}r.O(new D.D("maximumLocation",q,r.b))}},
scB:function(a){var s,r=this,q=r.c
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bQ(s)}r.O(new D.D("minimumLocation",q,r.c))}},
saf:function(a,b){var s,r=this
b=r.bQ(b)
s=r.d
$.E().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.O(new D.D("location",s,b))}},
scA:function(a){var s,r,q=this,p=q.e
$.E().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.O(new D.D("maximumVelocity",p,a))}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.O(new D.D("velocity",r,a))}},
scj:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.O(new D.D("dampening",s,a))}},
au:function(a,b){var s,r,q,p=this,o=p.f
$.E().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saf(0,p.d+s*b)
o=p.x
$.E().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.cE.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.J():s},
b9:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bZ.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.J():s},
O:function(a){var s=this.e
return s==null?null:s.J(a)},
ac:function(){return this.O(null)},
fz:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaT(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.O(new D.bh())},
hd:function(a,b){var s,r
for(s=b.gP(b),r=this.gaT();s.u();)s.gD(s).gv().X(0,r)
this.O(new D.bi())},
b9:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ah(o,o.length),n=H.T(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.b9(0,b,c)
s=s==null?q:q.S(0,s)}}p.f=s==null?V.aI():s
o=p.e
if(o!=null)o.aO(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.U(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.dD.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.J():s},
O:function(a){var s=this.cy
return s==null?null:s.J(a)},
ac:function(){return this.O(null)},
bl:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga9().gdK().n(0,s.gbZ())
a.ga9().gec().n(0,s.gc0())
a.ga9().gcK().n(0,s.gc2())
return!0},
c_:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gb6(q).c))return
s.x=s.y=!0
s.z=s.b.d},
c1:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ag(a.d)
if(s.a7(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.saf(0,-a.y.ag(r).S(0,2).ah(0,s.gaz()).a*2.5+p.z)
q.sa0(0)
p.Q=a.z.ag(r).S(0,2).ah(0,s.gaz())
p.ac()},
c3:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a7(s)>0.0001){r.b.sa0(r.Q.a*10*2.5)
r.ac()}},
b9:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.au(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aY(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iZ:1}
U.dE.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.J():s},
O:function(a){var s=this.fx
return s==null?null:s.J(a)},
ac:function(){return this.O(null)},
bl:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga9().gdK().n(0,q.gbZ())
a.ga9().gec().n(0,q.gc0())
a.ga9().gcK().n(0,q.gc2())
s=a.gan()
r=s.f
s=r==null?s.f=D.J():r
s.n(0,q.gfm())
s=a.gan()
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.gfo())
s=a.gb8()
r=s.b
s=r==null?s.b=D.J():r
s.n(0,q.ghG())
s=a.gb8()
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.ghE())
s=a.gb8()
r=s.c
s=r==null?s.c=D.J():r
s.n(0,q.ghC())
return!0},
aY:function(a){var s=a.b
if(this.r)s=-s
return new V.a5(a.a,s)},
c_:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c1:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ag(a.d)
if(s.a7(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aY(a.y.ag(r).S(0,2).ah(0,s.gaz()))
p=n.c
p.saf(0,-q.a*2.5+n.cy)
o=n.b
o.saf(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aY(a.z.ag(r).S(0,2).ah(0,s.gaz()))
n.ac()},
c3:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a7(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.ac()}},
fn:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fp:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aY(a.y.ag(r).S(0,2).ah(0,s.gaz()))
p=n.c
p.saf(0,-q.a*2.5+n.cy)
o=n.b
o.saf(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aY(a.z.ag(r).S(0,2).ah(0,s.gaz()))
n.ac()},
hH:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hF:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ag(a.d)
if(s.a7(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aY(a.y.ag(r).S(0,2).ah(0,s.gaz()))
p=n.c
p.saf(0,-q.a*2.5+n.cy)
o=n.b
o.saf(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aY(a.z.ag(r).S(0,2).ah(0,s.gaz()))
n.ac()},
hD:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a7(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.ac()}},
b9:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.au(0,s)
n=p.b
n.au(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aY(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.S(0,V.aY(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iZ:1}
U.dF.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.J():s},
O:function(a){var s=this.r
return s==null?null:s.J(a)},
bl:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga9()
r=s.e
s=r==null?s.e=D.J():r
r=this.gfs()
s.n(0,r)
s=a.gan()
q=s.e;(q==null?s.e=D.J():q).n(0,r)
return!0},
ft:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gb6(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.O(new D.D("zoom",r,q))}},
b9:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aY(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iZ:1}
M.eu.prototype={
aV:function(a){var s=this.y
return s==null?null:s.J(a)},
eX:function(){return this.aV(null)},
fJ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaU(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bX()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aV(new D.bh())},
fL:function(a,b){var s,r
for(s=b.gP(b),r=this.gaU();s.u();)s.gD(s).gv().X(0,r)
this.aV(new D.bi())},
gv:function(){var s=this.y
return s==null?this.y=D.J():s},
aM:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.es(d.d)
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
g=V.aY(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.er(g)
f=$.mW()
e=s.b
if(e!=null)f=e.a.S(0,f)
a.db.er(f)}for(s=d.e.a,r=new J.ah(s,s.length),o=H.T(r).c;r.u();)o.a(r.d).au(0,a)
for(s=new J.ah(s,s.length),r=H.T(s).c;s.u();)r.a(s.d).aM(a)
if(d.b!=null){a.cy.cD()
a.db.cD()}a.ep()}}
A.ei.prototype={}
A.hZ.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
i0:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dJ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.as.prototype={
gav:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.as))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.cR.prototype={
cP:function(a,b){var s=this.cx
if(s!=null)s.cO(a)
s=this.cy
if(s!=null)s.cO(b)}}
A.d5.prototype={
eP:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.Y(""),d1=c9.fr
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
A.ps(c9,d0)
A.pu(c9,d0)
A.pt(c9,d0)
A.pw(c9,d0)
A.px(c9,d0)
A.pv(c9,d0)
A.py(c9,d0)
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
c4.e5(0,s.charCodeAt(0)==0?s:s,A.pr(c9))
c4.y=c4.ga2(c4).h(0,"posAttr")
c4.Q=c4.ga2(c4).h(0,"normAttr")
c4.z=c4.ga2(c4).h(0,"binmAttr")
c4.ch=c4.ga2(c4).h(0,"txt2DAttr")
c4.cx=c4.ga2(c4).h(0,"txtCubeAttr")
c4.cy=c4.ga2(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gB().K(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gB().K(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gB().K(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gB().K(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gB().K(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gB().K(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gB().K(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gB().K(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b4
if(s>0){c4.k2=t.w.a(c4.gB().K(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.f(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gB().K(0,"emissionClr"))
if(d1.b)c4.r1=t.G.a(c4.gB().K(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gB().K(0,"ambientClr"))
if(d1.b)c4.ry=t.G.a(c4.gB().K(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gB().K(0,"diffuseClr"))
if(d1.b)c4.y1=t.G.a(c4.gB().K(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.b4=t.g.a(c4.gB().K(0,"invDiffuseClr"))
if(d1.b)c4.b5=t.G.a(c4.gB().K(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(s||d1.b||!1){c4.dP=t.u.a(c4.gB().K(0,"shininess"))
if(s)c4.dN=t.g.a(c4.gB().K(0,"specularClr"))
if(d1.b)c4.dO=t.G.a(c4.gB().K(0,"specularTxt"))}if(c9.f.b)c4.dQ=t.G.a(c4.gB().K(0,"bumpTxt"))
if(c9.db){c4.dR=t.bz.a(c4.gB().K(0,"envSampler"))
d1=c9.r
if(d1.a)c4.dS=t.g.a(c4.gB().K(0,"reflectClr"))
if(d1.b)c4.dT=t.G.a(c4.gB().K(0,"reflectTxt"))
d1=c9.x
s=d1.a
if(s||d1.b||!1){c4.dU=t.u.a(c4.gB().K(0,"refraction"))
if(s)c4.dV=t.g.a(c4.gB().K(0,"refractClr"))
if(d1.b)c4.dW=t.G.a(c4.gB().K(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.dX=t.u.a(c4.gB().K(0,"alpha"))
if(d1.b)c4.dY=t.G.a(c4.gB().K(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.ck=P.Q(r,t.W)
c4.cl=P.Q(r,t.O)
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
a4=a3}g.push(new A.dw(l,c,b,a4,a3,a2))}c4.cl.l(0,i,g)
f=c4.ck
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.l(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cm=P.Q(r,t.W)
c4.cn=P.Q(r,t.m)
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
g.push(new A.dx(a7,a6,a5,l,c,a8))}c4.cn.l(0,i,g)
f=c4.cm
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.l(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.co=P.Q(r,t.W)
c4.cp=P.Q(r,t.r)
for(r=t.w,q=t.g,p=t.bK,o=t.bz,f=t.d,e=t.u,d=t.B,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.dz(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cp.l(0,i,g)
a9=c4.co
m=c4.r
if(m==null)H.h(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.f(c7+b0+c8))
a9.l(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cq=P.Q(s,t.W)
c4.cr=P.Q(s,t.h2)
for(s=t.w,r=t.g,q=t.u,p=t.d,o=t.G,f=t.J,k=0;k<c9.length;c9.length===d1||(0,H.q)(c9),++k){j=c9[k]
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
g.push(new A.dC(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cr.l(0,i,g)
e=c4.cq
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
e.l(0,i,s.a(l))}}}},
ar:function(a,b){if(b!=null&&b.d)if(a!=null)a.eF(b)},
hx:function(a,b){}}
A.bc.prototype={
i:function(a){return"barLight"+this.a}}
A.be.prototype={
i:function(a){return"dirLight"+this.a}}
A.bn.prototype={
i:function(a){return"pointLight"+this.a}}
A.bp.prototype={
i:function(a){return"spotLight"+this.a}}
A.iQ.prototype={
i:function(a){return this.b5}}
A.dw.prototype={}
A.dx.prototype={}
A.dz.prototype={}
A.dC.prototype={}
A.ca.prototype={
e5:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.d5(b,35633)
r=n.d5(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaC(),s)
q.attachShader(n.gaC(),r)
q.linkProgram(n.gaC())
if(!H.mz(q.getProgramParameter(n.gaC(),35714))){o=q.getProgramInfoLog(n.gaC())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.f("Failed to link shader: "+o))}n.hy()
n.hA()},
ga2:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gB:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaC:function(){var s=this.e
if(s==null)throw H.c(P.f(u.p))
return s},
aG:function(a){a.a.useProgram(this.e)
this.ga2(this).i0()},
d5:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mz(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
hy:function(){var s,r,q,p,o=this,n=u.p,m=H.b([],t.eu),l=o.a,k=H.ko(l.getProgramParameter(o.gaC(),35721))
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
m.push(new A.ei(l,q,p))}o.f=new A.hZ(m)},
hA:function(){var s,r,q,p,o,n,m=this,l=u.p,k=H.b([],t.dC),j=m.a,i=H.ko(j.getProgramParameter(m.gaC(),35718))
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
k.push(m.hW(o,n,q,p))}m.r=new A.jA(k)},
aX:function(a,b,c){var s=this.a
if(a===1)return new A.ch(s,b,c)
else return A.l3(s,this.e,b,a,c)},
fh:function(a,b,c){var s=this.a
if(a===1)return new A.dA(s,b,c)
else return A.l3(s,this.e,b,a,c)},
fi:function(a,b,c){var s=this.a
if(a===1)return new A.dB(s,b,c)
else return A.l3(s,this.e,b,a,c)},
by:function(a,b){return new P.h1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hW:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aX(b,c,d)
case 5121:return s.aX(b,c,d)
case 5122:return s.aX(b,c,d)
case 5123:return s.aX(b,c,d)
case 5124:return s.aX(b,c,d)
case 5125:return s.aX(b,c,d)
case 5126:return new A.dt(s.a,c,d)
case 35664:return new A.fy(s.a,c,d)
case 35665:return new A.du(s.a,c,d)
case 35666:return new A.dv(s.a,c,d)
case 35667:return new A.fz(s.a,c,d)
case 35668:return new A.fA(s.a,c,d)
case 35669:return new A.fB(s.a,c,d)
case 35674:return new A.fC(s.a,c,d)
case 35675:return new A.dy(s.a,c,d)
case 35676:return new A.ci(s.a,c,d)
case 35678:return s.fh(b,c,d)
case 35680:return s.fi(b,c,d)
case 35670:throw H.c(s.by("BOOL",c))
case 35671:throw H.c(s.by("BOOL_VEC2",c))
case 35672:throw H.c(s.by("BOOL_VEC3",c))
case 35673:throw H.c(s.by("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a0.prototype={}
A.jA.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
K:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.A()},
A:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ch.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fz.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fA.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fB.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fx.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dt.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fy.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.du.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dv.prototype={
cO:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.fC.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dy.prototype={
aa:function(a){var s=new Float32Array(H.cq(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.ci.prototype={
aa:function(a){var s=new Float32Array(H.cq(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dA.prototype={
eF:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dB.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kn.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cw(q.b,b).cw(q.d.cw(q.c,b),c)
q=new V.ae(p.a,p.b,p.c)
if(!J.U(a.f,q)){a.f=q
q=a.a
if(q!=null)q.W()}a.siH(p.R())
q=1-b
s=1-c
s=new V.f2(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.U(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.W()}},
$S:43}
F.aG.prototype={
be:function(a,b,c){var s=this,r=a.a
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
if(r!=null)r.W()}},
f5:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.b3()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.e9())return p
return q.R()},
fc:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.bd(0,n)
q=new V.G(o.a,o.b,o.c).R()
o=r.bd(0,n)
return q.bn(new V.G(o.a,o.b,o.c).R()).R()},
ce:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.f5()
if(s==null){s=q.fc()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.W()}return!0},
f4:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.b3()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.e9())return p
return q.R()},
fb:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.E().toString
if(Math.abs(p-0)<1e-9){j=b.bd(0,e)
o=new V.G(j.a,j.b,j.c).R()
if(q.a-r.a<0)o=o.ba(0)}else{n=(j-s.b)/p
j=b.bd(0,e)
j=new V.ae(j.a*n,j.b*n,j.c*n).Y(0,e).bd(0,h)
o=new V.G(j.a,j.b,j.c).R()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.ba(0)}m=l.d
if(m!=null){m=m.R()
o=m.bn(o).R().bn(m).R()}return o},
cd:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.f4()
if(s==null){s=q.fb()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.W()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
G:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.ga8(p)
p=a+C.a.ap(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.ga8(o)
p=p+C.a.ap(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.ga8(o)
s=p+C.a.ap(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.A()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.A()
return s+((p==null?"-":p)+"}")},
A:function(){return this.G("")}}
F.bH.prototype={
eO:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f(u.E))
if(r!==b.a)throw H.c(P.f(u.T))
s.a=a
a.gZ(a).b.push(s)
s.b=b
b.gZ(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gZ(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
G:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.ga8(s)
s=a+C.a.ap(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.ga8(r)
return s+C.a.ap(C.c.i(r==null?-1:r),0)},
A:function(){return this.G("")}}
F.f1.prototype={
eQ:function(a){var s,r=this
if(a.a==null)throw H.c(P.f("May not create a point with a vertex which is not attached to a shape."))
r.a=a
a.gaL(a).b.push(r)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gaL(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.W()}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.ga8(s)
return a+C.a.ap(C.c.i(s),0)},
A:function(){return this.G("")}}
F.ag.prototype={
gL:function(){var s=this.a
return s==null?this.a=new F.z(this,H.b([],t.k)):s},
gaL:function(a){var s=this.b
return s==null?this.b=new F.dn(this,H.b([],t.q)):s},
gZ:function(a){var s=this.c
return s==null?this.c=new F.dm(this,H.b([],t.L)):s},
ga3:function(){var s=this.d
return s==null?this.d=new F.dl(this,H.b([],t.v)):s},
gv:function(){var s=this.e
return s==null?this.e=D.J():s},
ih:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gL().V()
s=b.gL().c.length
for(a0=a1.gL().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.z(b,H.b([],q))
n.n(0,o.b3())}b.gL().V()
for(a0=a1.gaL(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.dn(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,h)
new F.f1().eQ(h)}for(a0=a1.gZ(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dm(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
new F.bH().eO(f,e)}for(a0=a1.ga3().b,r=a0.length,n=t.v,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).V()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dl(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,c)
new F.aG().be(f,e,c)}a0=b.e
if(a0!=null)a0.aO(0)},
aI:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.ga3().aI()||!1
if(!r.gL().aI())s=!1
q=r.e
if(q!=null)q.aO(0)
return s},
b1:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.ga3().b1()||!1
if(!r.gL().b1())s=!1
q=r.e
if(q!=null)q.aO(0)
return s},
bz:function(){var s=this.e
if(s!=null)++s.d
this.gL().bz()
s=this.e
if(s!=null)s.aO(0)
return!0},
dE:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gL().c.length,a0=a3.a,a1=(a0&$.bb().a)!==0?1:0
if((a0&$.ba().a)!==0)++a1
if((a0&$.b9().a)!==0)++a1
if((a0&$.bx().a)!==0)++a1
if((a0&$.bQ().a)!==0)++a1
if((a0&$.cx().a)!==0)++a1
if((a0&$.ed().a)!==0)++a1
if((a0&$.cy().a)!==0)++a1
if((a0&$.bw().a)!==0)++a1
s=a3.gcR(a3)
r=P.eJ(a*s,0,!1,t.gR)
b.a=0
q=P.nK(a1,new F.je(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cq(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cB(new Z.fL(c,p),H.b([],t.fv),q,a3)
if(e.gaL(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.dn(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k);++l}h=Z.l6(a0,34963,n)
o.b.push(new Z.c0(0,n.length,h))}if(e.gZ(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.dm(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k);++l}h=Z.l6(a0,34963,n)
o.b.push(new Z.c0(1,n.length,h))}if(e.ga3().b.length!==0){n=H.b([],t.t)
p=t.v
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.dl(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).V()}k=k.e}n.push(k==null?0:k);++l}h=Z.l6(a0,34963,n)
o.b.push(new Z.c0(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gL().c.length!==0){q.push("Vertices:")
q.push(s.gL().G(r))}if(s.gaL(s).b.length!==0){q.push("Points:")
q.push(s.gaL(s).G(r))}if(s.gZ(s).b.length!==0){q.push("Lines:")
q.push(s.gZ(s).G(r))}if(s.ga3().b.length!==0){q.push("Faces:")
q.push(s.ga3().G(r))}return C.b.j(q,"\n")},
W:function(){var s=this.e
return s==null?null:s.J(null)},
$il0:1}
F.je.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hQ(a),e=f.gcR(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.z(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].ie(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bV(f,e,c*4,g.d)},
$S:66}
F.dl.prototype={
hO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.v)
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
e=new F.aG()
e.be(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.aG()
e.be(j,g,f)
d.push(e)}else{(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.aG()
e.be(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
e=new F.aG()
e.be(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gm:function(a){return this.b.length},
aI:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].ce())q=!1
return q},
b1:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cd())q=!1
return q},
i:function(a){return this.A()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
A:function(){return this.G("")}}
F.dm.prototype={
aF:function(a,b,c){var s,r=this.a
r.gL().n(0,b)
r.gL().n(0,c)
r=new F.bH()
s=b.a
if(s==null)H.h(P.f(u.E))
if(s!=c.a)H.h(P.f(u.T))
r.a=b
b.gZ(b).b.push(r)
r.b=c
c.gZ(c).c.push(r)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gZ(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.W()}return r},
gm:function(a){return this.b.length},
i:function(a){return this.A()},
G:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].G(a+(""+s+". ")))}return C.b.j(r,"\n")},
A:function(){return this.G("")}}
F.dn.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.A()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
A:function(){return this.G("")}}
F.ap.prototype={
ci:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.l5(s.cx,p,m,r,q,o,n,a,l)},
b3:function(){return this.ci(null)},
gaL:function(a){var s=this.b
return s==null?this.b=new F.jT(H.b([],t.q)):s},
gZ:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.fJ(H.b([],s),H.b([],s))}return s},
ga3:function(){var s=this.d
if(s==null){s=t.v
s=this.d=new F.jQ(H.b([],s),H.b([],s),H.b([],s))}return s},
ga8:function(a){var s=this.a
if(s!=null)s.gL().V()
return this.e},
sed:function(a){var s
a=a.R()
if(!J.U(this.r,a)){this.r=a
s=this.a
if(s!=null)s.W()}},
saH:function(a){var s
a=a==null?null:a.R()
if(!J.U(this.x,a)){this.x=a
s=this.a
if(s!=null)s.W()}},
siH:function(a){var s
if(!J.U(this.z,a)){this.z=a
s=this.a
if(s!=null)s.W()}},
sad:function(a,b){var s
if(!J.U(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.W()}},
ie:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bb())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.ba())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.b9())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bx())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bQ())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.cx())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ed())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cy()))return H.b([o.ch],t.n)
else if(a.q(0,$.bw())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
ce:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.b3()
p.ga3().w(0,new F.jV(o))
p.r=o.a.R()
if(r){s.W()
o=s.e
if(o!=null)o.aO(0)}return!0},
cd:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.b3()
p.ga3().w(0,new F.jU(o))
p.x=o.a.R()
if(r){s.W()
o=s.e
if(o!=null)o.aO(0)}return!0},
dZ:function(a){var s,r,q,p,o,n,m,l=this,k=l.gZ(l).b.length
for(s=t.L,r=t.k,q=0;q<k;++q){p=l.c
p=(p==null?l.c=new F.fJ(H.b([],s),H.b([],s)):p).b
if(q>=p.length)return H.d(p,q)
o=p[q]
p=o.b
if(p==null)p=null
else{n=p.a
if(n!=null){m=n.a;(m==null?n.a=new F.z(n,H.b([],r)):m).V()}p=p.e}n=a.a
if(n!=null){m=n.a;(m==null?n.a=new F.z(n,H.b([],r)):m).V()}if(p===a.e)return o}return null},
i4:function(a){var s=this.dZ(a)
if(s!=null)return s
return a.dZ(this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
G:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.ap(C.c.i(q.e),0))
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
n.push(V.C(q.ch,3,0))
s=q.cx
s=s==null?p:s.A()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
A:function(){return this.G("")}}
F.jV.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:6}
F.jU.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:6}
F.z.prototype={
V:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.W()
return!0},
dr:function(a,b){var s=null,r=F.l5(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
ds:function(a,b,c){var s=null,r=F.l5(s,s,s,new V.ae(a,b,c),s,s,s,s,0)
this.n(0,r)
return r},
gm:function(a){return this.c.length},
aI:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].ce()
return!0},
b1:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cd()
return!0},
bz:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.R()
if(!J.U(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.J(null)}}}}}return!0},
i:function(a){return this.A()},
G:function(a){var s,r,q,p
this.V()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].G(a))
return C.b.j(s,"\n")},
A:function(){return this.G("")}}
F.jQ.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
w:function(a,b){var s=this
C.b.w(s.b,b)
C.b.w(s.c,new F.jR(s,b))
C.b.w(s.d,new F.jS(s,b))},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jR.prototype={
$1:function(a){if(!J.U(a.a,this.a))this.b.$1(a)},
$S:6}
F.jS.prototype={
$1:function(a){var s=this.a
if(!J.U(a.a,s)&&!J.U(a.b,s))this.b.$1(a)},
$S:6}
F.fJ.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jT.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
O.cQ.prototype={
gv:function(){var s=this.rx
return s==null?this.rx=D.J():s},
T:function(a){var s=this.rx
return s==null?null:s.J(a)},
au:function(a,b){},
eu:function(a,b){var s,r,q,p,o=this,n="Inspection"
if(o.a==null){s=t.fY.a(a.fr.h(0,n))
if(s==null){s=new A.cR(a.a,n)
s.e5(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
s.x=s.ga2(s).h(0,"posAttr")
s.y=s.ga2(s).h(0,"normAttr")
s.z=s.ga2(s).h(0,"clrAttr")
s.Q=s.ga2(s).h(0,"binmAttr")
s.ch=t.g.a(s.gB().h(0,"lightVec"))
r=t.d
s.cx=r.a(s.gB().h(0,"ambientClr"))
s.cy=r.a(s.gB().h(0,"diffuseClr"))
s.db=t.u.a(s.gB().h(0,"weightScalar"))
r=t.j
s.dx=r.a(s.gB().h(0,"viewMat"))
s.dy=r.a(s.gB().h(0,"viewObjMatrix"))
s.fr=r.a(s.gB().h(0,"projViewObjMatrix"))
a.du(s)}o.a=s}if(b.e==null){r=b.d
if(r!=null)r.aI()
r=b.d
if(r!=null)r.b1()
r=b.d
if(r!=null)r.bz()
b.e=new Z.el(P.Q(t.N,t.C))}r=o.a
if(r!=null){r.aG(a)
q=o.r2
p=r.db
if(p!=null)p.a.uniform1f(p.d,q)
q=o.b
p=r.ch
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)
q=a.db
q=q.ga_(q)
p=r.dx
if(p!=null)p.aa(q.a6(0,!0))
q=a.geB()
p=r.dy
if(p!=null)p.aa(q.a6(0,!0))
q=a.geq()
r=r.fr
if(r!=null)r.aa(q.a6(0,!0))}r=b.e
if(r instanceof Z.el){a.a.blendFunc(1,1)
if(b.c==null)o.ho(r,a,b)
else o.hp(r,a,b)}else b.e=null
r=o.a
if(r!=null){a.a.useProgram(null)
r.ga2(r).dJ()}},
ho:function(a,b,c){var s,r=this,q=c.d
if(q==null)return
s=b.a
s.disable(2929)
s.enable(3042)
s.blendFunc(1,1)
if(r.k3)r.hq(b,a,q,"Axis",r.gf8(),r.z,r.y)
s.enable(2929)
s.blendFunc(770,771)},
hp:function(a,b,c){var s,r=this,q=c.c
if(q==null)return
s=b.a
s.enable(2929)
s.enable(3042)
s.blendFunc(770,771)
s.disable(2929)
s.blendFunc(1,1)
if(r.ch)r.bx(b,a,q,"wireFrame",r.ghJ(),r.f,r.e)
if(r.cy)r.bx(b,a,q,"normals",r.gfu(),r.f,r.e)
if(r.db)r.bx(b,a,q,"binormals",r.gf9(),r.f,r.e)
if(r.k3)r.bx(b,a,q,"Axis",r.gf6(),r.z,r.y)
s.enable(2929)
s.blendFunc(770,771)},
bx:function(a,b,c,d,e,f,g){var s=b.a,r=s.h(0,d)
if(r==null){r=this.d_(a,e.$1(c))
s.l(0,d,r)}s=this.a
if(s!=null)s.cP(f,g)
r.em(a)},
hq:function(a,b,c,d,e,f,g){var s=b.a,r=s.h(0,d)
if(r==null){r=this.d_(a,e.$1(c))
s.l(0,d,r)}s=this.a
if(s!=null)s.cP(f,g)
r.em(a)},
d_:function(a,b){var s=this,r=null,q=$.bb(),p=$.ba(),o=q.a,n=p.a,m=$.b9(),l=m.a,k=$.cx(),j=b.dE(new Z.fM(a.a),new Z.b4(o|n|l|k.a))
q=j.am(q)
if(q!=null){o=s.a
if(o==null)o=r
else{o=o.x
o=o==null?r:o.c}q.e=o==null?0:o}q=j.am(p)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.y
p=p==null?r:p.c}q.e=p==null?1:p}q=j.am(k)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.z
p=p==null?r:p.c}q.e=p==null?2:p}q=j.am(m)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.Q
p=p==null?r:p.c}q.e=p==null?3:p}return j},
dn:function(a,b){var s,r={}
r.a=b
s=F.dk()
r.a=new V.a1(0,0.7,1,1)
C.b.w(a.gL().c,new O.iC(r,s))
r=new O.iB(s)
C.b.w(a.gZ(a).b,new O.iD(s,r))
C.b.w(a.ga3().b,new O.iE(s,r))
return s},
hK:function(a){return this.dn(a,null)},
fv:function(a){var s=F.dk()
C.b.w(a.gL().c,new O.iA(new V.a1(1,1,0.3,1),s))
return s},
fa:function(a){var s=F.dk()
C.b.w(a.gL().c,new O.iz(new V.a1(1,0.3,0.3,1),s))
return s},
f7:function(a){return this.cZ(a)},
cZ:function(a){var s=F.dk(),r=new O.iy(s)
r.$3(1,0,0)
r.$3(0,1,0)
r.$3(0,0,1)
return s}}
O.iC.prototype={
$1:function(a){var s=this.b.gL(),r=a.b3()
r.sad(0,this.a.a)
r.saH(V.b3())
s.n(0,r)},
$S:15}
O.iB.prototype={
$2:function(a,b){var s
if(a.i4(b)==null){s=this.a
s.gZ(s).aF(0,a,b)}},
$S:50}
O.iD.prototype={
$1:function(a){var s,r=this.a,q=r.gL(),p=a.a
p=p==null?null:p.ga8(p)
if(p==null)p=0
q=q.c
if(p>=q.length)return H.d(q,p)
s=q[p]
r=r.gL()
p=a.b
q=p==null?null:p.ga8(p)
if(q==null)q=0
r=r.c
if(q>=r.length)return H.d(r,q)
this.b.$2(s,r[q])},
$S:51}
O.iE.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gL(),n=a.a
n=n==null?null:n.ga8(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gL()
o=a.b
o=o==null?null:o.ga8(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
p=p.gL()
o=a.c
o=o==null?null:o.ga8(o)
if(o==null)o=0
p=p.c
if(o>=p.length)return H.d(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)},
$S:6}
O.iA.prototype={
$1:function(a){var s,r,q=a.b3()
q.sad(0,this.a)
q.saH(V.b3())
s=q.b3()
s.saH(q.r)
r=this.b
r.gL().n(0,q)
r.gL().n(0,s)
r.gZ(r).aF(0,q,s)},
$S:15}
O.iz.prototype={
$1:function(a){var s,r,q=a.b3()
q.sad(0,this.a)
q.saH(V.b3())
s=q.b3()
s.saH(a.x)
r=this.b
r.gL().n(0,q)
r.gL().n(0,s)
r.gZ(r).aF(0,q,s)},
$S:15}
O.iy.prototype={
$3:function(a,b,c){var s,r,q=a>1?1:a,p=b>1?1:b,o=c>1?1:c,n=new V.a1(q,p,o,1)
q=this.a
s=q.gL().ds(0,0,0)
s.saH(V.b3())
s.sed(V.me())
s.sad(0,n)
r=q.gL().ds(a,b,c)
r.saH(V.b3())
r.sed(V.me())
r.sad(0,n)
q.gZ(q).aF(0,s,r)},
$S:52}
O.d4.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.J():s},
T:function(a){var s=this.fr
return s==null?null:s.J(a)},
c6:function(){return this.T(null)},
dd:function(a){this.a=null
this.T(a)},
ht:function(){return this.dd(null)},
fD:function(a,b){return this.T(new D.bh())},
fF:function(a,b){return this.T(new D.bi())},
geb:function(){var s=this,r=s.dx
if(r==null){r=new D.cW(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cQ(r.gfA(),r.gha(),r.ghe())
r.gv().n(0,s.gdc())
r.gea().n(0,s.gbi())
s.dx=r}return r},
gdv:function(){var s=this.r
return s==null?this.r=O.eL(this,"ambient"):s},
gdI:function(){var s=this.x
return s==null?this.x=O.eL(this,"diffuse"):s},
gbN:function(){var s=this.z
return s==null?this.z=new O.iT(new V.W(0,0,0),this,"specular",new A.as(!1,!1,!1)):s},
gdF:function(){var s=this.Q
return s==null?this.Q=new O.iP(this,"bump",new A.as(!1,!1,!1)):s},
d3:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.V(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gax()
o=a1.h(0,q.gax())
a1.l(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.w(0,new O.iU(b,n))
C.b.bc(n,new O.iV())
m=new H.V(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],t.fD)
m.w(0,new O.iW(b,l))
C.b.bc(l,new O.iX())
k=new H.V(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gax()
o=k.h(0,q.gax())
k.l(0,p,o==null?1:o)}j=H.b([],t.eg)
k.w(0,new O.iY(b,j))
C.b.bc(j,new O.iZ())
i=new H.V(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gax()
p=i.h(0,q.gax())
i.l(0,s,p==null?1:p)}h=H.b([],t.c3)
i.w(0,new O.j_(b,h))
C.b.bc(h,new O.j0())
a0=C.c.a5(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iR(new V.a1(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eL(b,"emission"):a2).c
s=b.gdv().c
p=b.gdI().c
o=b.y
o=(o==null?b.y=O.eL(b,"invDiffuse"):o).c
g=b.gbN().c
f=b.gdF().c
e=b.cx
e=(e==null?b.cx=O.eL(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iS(new V.W(0,0,0),b,"refract",new A.as(!1,!1,!1)):d).c
c=b.db
return A.nM(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iO(b,"alpha",new A.as(!1,!1,!1)):c).c,n,l,j,h)},
ai:function(a,b){if(b!=null)if(!C.b.C(a,b)){b.a=a.length
a.push(b)}},
au:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aB(m==null?H.b([],t.e):m)
s=H.T(m).c
for(;m.u();){r=s.a(m.d)
q=$.jP
if(q==null)q=$.jP=new V.G(0,0,1)
r.c=q
p=$.jO
r.d=p==null?$.jO=new V.G(0,1,0):p
p=$.jN
r.e=p==null?$.jN=new V.G(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bI(q).R()
r.d=n.bI(r.d).R()
r.e=n.bI(r.e).R()}}},
eu:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.d3()
r=s.b5
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.d5(s,H.b([],t.p),P.Q(p,o),P.Q(p,t.O),P.Q(p,o),P.Q(p,t.m),P.Q(p,o),P.Q(p,t.r),P.Q(p,o),P.Q(p,t.h2),q,r)
a9.eP(s,q)
b0.du(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.dM
s=b1.e
if(!(s instanceof Z.cB))s=b1.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.aI()}r=n.r1
if(r){q=b1.d
if(q!=null)q.b1()}q=n.rx
if(q){p=b1.d
if(p!=null)p.bz()}p=b1.d
l=p==null?a8:p.dE(new Z.fM(b0.a),m)
if(l==null)return
p=l.am($.bb())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.am($.ba())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.am($.b9())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.am($.bx())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.am($.bQ())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.am($.bw())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.ga)
a9.aG(b0)
if(n.fr){s=b0.dx
s=s.ga_(s)
r=a9.db
if(r!=null)r.aa(s.a6(0,!0))}if(n.fx){s=b0.geB()
r=a9.dx
if(r!=null)r.aa(s.a6(0,!0))}s=b0.geq()
r=a9.fr
if(r!=null)r.aa(s.a6(0,!0))
if(n.go){s=b0.db
s=s.ga_(s)
r=a9.dy
if(r!=null)r.aa(s.a6(0,!0))}if(n.x1){s=$.lN
if(s==null){s=new V.d8(1,0,0,0,1,0,0,0,1)
$.lN=s}r=a9.go
if(r!=null)r.aa(s.a6(0,!0))}if(n.x2){s=V.aI()
r=a9.id
if(r!=null)r.aa(s.a6(0,!0))}if(n.y1){s=V.aI()
r=a9.k1
if(r!=null)r.aa(s.a6(0,!0))}if(n.b4>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.cq(r.a6(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.W(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.f
a7.ai(k,s==null?a8:s.d)
s=a7.f
s=s==null?a8:s.d
a9.ar(a9.r1,s)}if(n.k1){s=n.b
if(s.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.W(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.r
a7.ai(k,s==null?a8:s.d)
s=a7.r
s=s==null?a8:s.d
a9.ar(a9.ry,s)}s=n.c
if(s.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.W(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.x
a7.ai(k,s==null?a8:s.d)
s=a7.x
s=s==null?a8:s.d
a9.ar(a9.y1,s)}s=n.d
if(s.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.W(0,0,0)
q=a9.b4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.y
a7.ai(k,s==null?a8:s.d)
s=a7.y
s=s==null?a8:s.d
a9.ar(a9.b5,s)}s=n.e
r=s.a
if(r||s.b||!1){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.dP
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.W(1,1,1)
q=a9.dN
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.z
a7.ai(k,s==null?a8:s.d)
s=a7.z
s=s==null?a8:s.d
a9.ar(a9.dO,s)}s=n.z
if(s.length>0){g=new H.V(t.y)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.c
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gax()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
o=a9.cl.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giP()
a=$.b_
o=o.bs(a==null?$.b_=new V.ae(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giU()
a=$.b_
o=o.bs(a==null?$.b_=new V.ae(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gad(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.gdL()){o=e.gdz()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdA()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdB()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.ck.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga_(r)
a1=new H.V(t.y)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
c=a1.h(0,0)
if(c==null)c=0
a1.l(0,0,c+1)
o=a9.cn.h(0,0)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.bI(e.c).R()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cm.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga_(r)
a2=new H.V(t.y)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.B
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gax()
c=a2.h(0,d)
if(c==null)c=0
a2.l(0,d,c+1)
o=a9.cp.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a3=a0.S(0,e.ga_(e))
o=e.ga_(e)
a=$.b_
o=o.bs(a==null?$.b_=new V.ae(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b_
o=a3.bs(o==null?$.b_=new V.ae(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gad(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaP()
o=a3.e8(0)
a=b.d
if(a!=null){h=new Float32Array(H.cq(new V.d8(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).a6(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaP()
o=e.gaP()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gaP()
a=o.gbo(o)
if(a){a=b.f
if(a!=null){a4=o.gbo(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.ga8(o))}}e.gbb()
o=e.geG()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbb()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gbb()
a=o.gbo(o)
if(a){a=b.r
if(a!=null){a4=o.gbo(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.ga8(o))}}if(e.gdL()){o=e.gdz()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdA()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdB()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.co.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga_(r)
a6=new H.V(t.y)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.J
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gax()
c=a6.h(0,d)
if(c==null)c=0
a6.l(0,d,c+1)
o=a9.cr.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.gix(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giS(e).R()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bs(e.gix(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gad(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaP()
o=e.gcK()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gcG(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gj2()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gj3()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaP()
o=e.gaP()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gaP()
a=o.gbo(o)
if(a){a=b.dx
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gbb()
o=e.geG()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbb()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gbb()
a=o.gbo(o)
if(a){a=b.dy
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.giT()){o=e.giR()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giQ()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.gdL()){o=e.gdz()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdA()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdB()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cq.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=a7.Q
a7.ai(k,s==null?a8:s.d)
s=a7.Q
s=s==null?a8:s.d
a9.ar(a9.dQ,s)}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga_(s).e8(0)}r=a9.fy
if(r!=null)r.aa(s.a6(0,!0))}if(n.db){a7.ai(k,a8)
a9.hx(a9.dR,a8)
s=n.r
if(s.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.W(1,1,1)
q=a9.dS
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cx
a7.ai(k,s==null?a8:s.d)
s=a7.cx
s=s==null?a8:s.d
a9.ar(a9.dT,s)}s=n.x
r=s.a
if(r||s.b||!1){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.dU
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.W(1,1,1)
q=a9.dV
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cy
a7.ai(k,s==null?a8:s.d)
s=a7.cy
s=s==null?a8:s.d
a9.ar(a9.dW,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.dX
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=a7.db
a7.ai(k,r==null?a8:r.d)
r=a7.db
r=r==null?a8:r.d
a9.ar(a9.dY,r)}r=b0.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b0.a,i=0;i<k.length;++i){p=k[i]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=t.C.a(b1.e)
p.aG(b0)
p.aM(b0)
p.ey(b0)
if(!q||s.b||!1)r.disable(3042)
for(i=0;i<k.length;++i){s=k[i]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,a8)}}r.useProgram(a8)
a9.ga2(a9).dJ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d3().b5}}
O.iU.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.c.a5(b+3,4)*4))},
$S:8}
O.iV.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:55}
O.iW.prototype={
$2:function(a,b){return this.b.push(new A.be(a,C.c.a5(b+3,4)*4))},
$S:8}
O.iX.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:56}
O.iY.prototype={
$2:function(a,b){return this.b.push(new A.bn(a,C.c.a5(b+3,4)*4))},
$S:8}
O.iZ.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:57}
O.j_.prototype={
$2:function(a,b){return this.b.push(new A.bp(a,C.c.a5(b+3,4)*4))},
$S:8}
O.j0.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:58}
O.iO.prototype={
aD:function(){var s,r=this
r.cS()
s=r.f
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.T(new D.D(r.b,s,1))}}}
O.d6.prototype={
T:function(a){return this.a.T(a)},
c6:function(){return this.T(null)},
aD:function(){},
c8:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aD()
s=q.a
s.a=null
s.T(null)}}}
O.iP.prototype={}
O.d7.prototype={
df:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.T(new D.D(r.b+".color",s,a))}},
aD:function(){this.cS()
this.df(new V.W(1,1,1))},
sad:function(a,b){this.c8(new A.as(!0,this.c.b,!1))
this.df(b)}}
O.iR.prototype={}
O.iS.prototype={
aD:function(){var s,r=this
r.cT()
s=r.ch
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.T(new D.D(r.b+".refraction",s,1))}}}
O.iT.prototype={
dg:function(a){var s=this,r=s.ch
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.T(new D.D(s.b+".shininess",r,a))}},
aD:function(){this.cT()
this.dg(100)}}
O.cd.prototype={}
T.cf.prototype={}
T.fp.prototype={}
T.fq.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.J():s}}
T.jp.prototype={
ig:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.lK(a)
r=new T.fq(o)
W.a2(s,"load",new T.jq(this,r,s,!1,o,!1,!1),!1)
return r},
hu:function(a,b,c){var s,r,q,p,o,n
b=V.lt(b)
s=a.width
r=V.lt(s==null?512:s)
s=a.height
q=V.lt(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.kO()
p.width=r
p.height=q
o=t.ar.a(C.i.eD(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.pQ(o.getImageData(0,0,s,n==null?512:n))}}}
T.jq.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.hu(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.a3.iG(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.i_()}++s.e},
$S:4}
X.iu.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.J():s}}
X.eY.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.J():s},
aW:function(a){var s=this.f
return s==null?null:s.J(a)},
f0:function(){return this.aW(null)},
sbp:function(a){var s,r,q=this
if(!J.U(q.b,a)){s=q.b
if(s!=null)s.gv().X(0,q.gcX())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gcX())
q.aW(new D.D("mover",r,q.b))}}}
X.jl.prototype={}
V.aE.prototype={
bv:function(a){this.b=new P.iw(C.S)
this.c=null
this.d=H.b([],t.F)},
M:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.E))
s=a.split("\n")
for(j=s.length,r=t.E,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.fg(o,0,o.length)
l=m==null?o:m
l=H.lv(l," ","&nbsp;")
C.Q.eE(n,l)
l=n.style
l.color=b
C.b.gay(k.d).push(n)}},
en:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bA()
if(r!=null)for(q=new H.r(s),q=new P.bN(r.cJ(new H.bl(q,q.gm(q))).a());q.u();)p.bG(q.gD(q))}}
V.kL.prototype={
$1:function(a){var s=C.d.cI(this.a.gi9(),2)
if(s!=="0.00")P.lu(s+" fps")},
$S:59}
V.er.prototype={
bG:function(a){var s=this
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
bA:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jv()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.t(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.t(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
a4.k(0,o).j(0,m).a.push(K.O("0","9"))
a4.k(0,m).j(0,m).a.push(K.O("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.t(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.O("0","9"))
a4.k(0,k).j(0,k).a.push(K.O("0","9"))
q=a4.k(0,o).j(0,j)
s=new K.t(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=a4.k(0,j).j(0,j)
q=new K.t(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=a4.k(0,o).j(0,h)
s=new K.t(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=a4.k(0,h).j(0,g)
q=new K.t(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=a4.k(0,h).j(0,f)
s=new K.t(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,f).j(0,h)
q=new K.t(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
a4.k(0,h).j(0,h).a.push(new K.aR())
q=a4.k(0,o).j(0,e)
s=new K.t(H.b([],r))
s.p(new H.r("'"))
q.a.push(s)
s=a4.k(0,e).j(0,d)
q=new K.t(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
q=a4.k(0,e).j(0,c)
s=new K.t(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,c).j(0,e)
q=new K.t(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
a4.k(0,e).j(0,e).a.push(new K.aR())
q=a4.k(0,o).j(0,b)
s=new K.t(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=a4.k(0,b).j(0,a)
q=new K.t(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,a).j(0,a0)
s=new K.t(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=a4.k(0,a).j(0,a)
q=t.z
p=H.b([],q)
s.a.push(new K.ad(p))
s=new K.t(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=a4.k(0,b).j(0,a1)
p=new K.t(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
p=a4.k(0,a1).j(0,a2)
s=new K.t(H.b([],r))
s.p(new H.r("*"))
p.a.push(s)
s=a4.k(0,a2).j(0,a1)
q=H.b([],q)
s.a.push(new K.ad(q))
s=new K.t(H.b([],r))
s.p(new H.r("*"))
q.push(s)
s=a4.k(0,a2).j(0,a0)
q=new K.t(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,o).j(0,a3)
s=new K.t(H.b([],r))
s.p(new H.r(" \n\t"))
q.a.push(s)
s=a4.k(0,a3).j(0,a3)
r=new K.t(H.b([],r))
r.p(new H.r(" \n\t"))
s.a.push(r)
r=a4.k(0,m)
r.d=r.a.N("Num")
r=a4.k(0,k)
r.d=r.a.N("Num")
r=a4.k(0,j)
r.d=r.a.N("Symbol")
r=a4.k(0,g)
r.d=r.a.N("String")
r=a4.k(0,d)
r.d=r.a.N("String")
r=a4.k(0,a0)
r.d=r.a.N(a)
r=a4.k(0,a3)
r.d=r.a.N(a3)
r=a4.k(0,n)
r=r.d=r.a.N(n)
s=t.s
r.aN(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aN(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aN(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.ey.prototype={
bG:function(a){var s=this
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
bA:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jv()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.t(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.t(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
b.k(0,o).j(0,m).a.push(K.O("0","9"))
b.k(0,m).j(0,m).a.push(K.O("0","9"))
s=b.k(0,m).j(0,l)
q=new K.t(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.O("0","9"))
b.k(0,k).j(0,k).a.push(K.O("0","9"))
q=b.k(0,o).j(0,j)
s=new K.t(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=b.k(0,j).j(0,j)
q=new K.t(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=b.k(0,o).j(0,h)
s=new K.t(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=b.k(0,h).j(0,g)
q=new K.t(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
b.k(0,h).j(0,j).a.push(new K.aR())
q=b.k(0,g).j(0,f)
s=new K.t(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.b([],q)
s.a.push(new K.ad(p))
s=new K.t(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.t(H.b([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.b([],q)
p.a.push(new K.ad(q))
p=new K.t(H.b([],r))
p.p(new H.r("\n"))
q.push(p)
p=b.k(0,e).j(0,d)
q=new K.t(H.b([],r))
q.p(new H.r("\n"))
p.a.push(q)
q=b.k(0,o).j(0,c)
p=new K.t(H.b([],r))
p.p(new H.r(" \n\t"))
q.a.push(p)
p=b.k(0,c).j(0,c)
r=new K.t(H.b([],r))
r.p(new H.r(" \n\t"))
p.a.push(r)
r=b.k(0,m)
r.d=r.a.N("Num")
r=b.k(0,k)
r.d=r.a.N("Num")
r=b.k(0,j)
r.d=r.a.N("Symbol")
r=b.k(0,f)
r.d=r.a.N(g)
r=b.k(0,d)
r.d=r.a.N(e)
r=b.k(0,c)
r.d=r.a.N(c)
r=b.k(0,n)
r=r.d=r.a.N(n)
p=t.s
r.aN(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aN(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aN(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.ez.prototype={
bG:function(a){var s=this,r="#111"
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
bA:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jv()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.t(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.t(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=i.k(0,o).j(0,n)
q=new K.t(H.b([],r))
q.p(new H.r("="))
s.a.push(q)
s.c=!0
s=i.k(0,p).j(0,m)
q=new K.t(H.b([],r))
q.p(new H.r("</\\-!>="))
s.a.push(q)
q=i.k(0,m).j(0,m)
s=new K.t(H.b([],r))
s.p(new H.r("</\\-!>="))
q.a.push(s)
s=i.k(0,p).j(0,l)
q=new K.t(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=i.k(0,l).j(0,k)
s=new K.t(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=i.k(0,l).j(0,"EscStr")
q=new K.t(H.b([],r))
q.p(new H.r("\\"))
s.a.push(q)
q=i.k(0,"EscStr").j(0,l)
s=new K.t(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
i.k(0,l).j(0,l).a.push(new K.aR())
i.k(0,p).j(0,j).a.push(new K.aR())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.ad(q))
r=new K.t(H.b([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.O("a","z"))
q.push(K.O("A","Z"))
q=i.k(0,m)
q.d=q.a.N("Symbol")
q=i.k(0,k)
q.d=q.a.N("String")
q=i.k(0,o)
r=q.a.N(o)
q.d=r
r.aN(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.N(n)
r=i.k(0,j)
r.d=r.a.N(j)
return i}}
V.f_.prototype={
en:function(a,b){this.d=H.b([],t.F)
this.M(C.b.j(b,"\n"),"#111")},
bG:function(a){},
bA:function(){return null}}
V.jf.prototype={
dt:function(a){var s,r,q,p,o,n,m=this.hz(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.ic(a)),s=new P.bN(m.cJ(new H.bl(s,s.gm(s))).a());s.u();){r=s.gD(s)
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
if(H.mR(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ki(C.w,r,C.e,!1)
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
eC:function(a){var s,r,q,p=t.F,o=new V.er("dart",H.b([],p))
o.bv("dart")
s=new V.ey("glsl",H.b([],p))
s.bv("glsl")
r=new V.ez("html",H.b([],p))
r.bv("html")
q=C.b.i5(H.b([o,s,r],t.g6),new V.ji(a))
if(q!=null)return q
p=new V.f_("plain",H.b([],p))
p.bv("plain")
return p},
dq:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a1(q,"+")){b2[r]=C.a.ae(q,1)
a8.push(1)
s=!0}else if(C.a.a1(q,"-")){b2[r]=C.a.ae(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.eC(b0)
p.en(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.ki(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lA()
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
for(a4=C.b.gP(q);a4.u();)b.appendChild(a4.gD(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hM:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hz:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jv()
f.d=f.k(0,o)
s=f.k(0,o).j(0,n)
r=t.t
q=new K.t(H.b([],r))
q.p(new H.r("*"))
s.a.push(q)
s.c=!0
s=f.k(0,n).j(0,n)
q=t.z
p=H.b([],q)
s.a.push(new K.ad(p))
s=new K.t(H.b([],r))
s.p(new H.r("*"))
p.push(s)
s=f.k(0,n).j(0,"BoldEnd")
p=new K.t(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,m)
p=new K.t(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,m).j(0,m)
p=H.b([],q)
s.a.push(new K.ad(p))
s=new K.t(H.b([],r))
s.p(new H.r("_"))
p.push(s)
s=f.k(0,m).j(0,l)
p=new K.t(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,k)
p=new K.t(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,k).j(0,k)
p=H.b([],q)
s.a.push(new K.ad(p))
s=new K.t(H.b([],r))
s.p(new H.r("`"))
p.push(s)
s=f.k(0,k).j(0,"CodeEnd")
p=new K.t(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,j)
p=new K.t(H.b([],r))
p.p(new H.r("["))
s.a.push(p)
s.c=!0
s=f.k(0,j).j(0,i)
p=new K.t(H.b([],r))
p.p(new H.r("|"))
s.a.push(p)
p=f.k(0,j).j(0,h)
s=new K.t(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,j).j(0,j)
s=H.b([],q)
p.a.push(new K.ad(s))
p=new K.t(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
p=f.k(0,i).j(0,h)
s=new K.t(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,i).j(0,i)
s=H.b([],q)
p.a.push(new K.ad(s))
p=new K.t(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aR())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.ad(q))
r=new K.t(H.b([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.N(n)
r=f.k(0,l)
r.d=r.a.N(m)
r=f.k(0,"CodeEnd")
r.d=r.a.N(k)
r=f.k(0,h)
r.d=r.a.N("Link")
r=f.k(0,g)
r.d=r.a.N(g)
return this.b=f}}
V.jh.prototype={
$1:function(a){P.m2(C.m,new V.jg(this.a))},
$S:4}
V.jg.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.at(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:3}
V.ji.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:60}
V.jm.prototype={
aF:function(a,b,c){var s,r,q,p,o,n,m=this,l=W.lK(null)
l.src=b
l.width=64
l.height=64
s=l.style
s.border="solid 2px white"
s=m.c
r=J.aP(s)
q=r.gbm(s)
p=q.gm(q)
W.a2(l,"click",new V.jo(m,l,b,p),!1)
r.gbm(s).n(0,l)
s=r.gbm(s)
r=document.createElement("br")
r.toString
s.n(0,r)
o=P.m6().gcF().h(0,m.a)
if(o==null){m.dl(p)
n=c}else n=P.hU(o,null)===p
if(n)l.click()},
n:function(a,b){return this.aF(a,b,!1)},
dl:function(a){var s,r,q=P.m6(),p=t.N,o=P.nJ(q.gcF(),p,p)
o.l(0,this.a,""+a)
s=q.ev(0,o)
p=window.history
p.toString
r=s.gcb()
p.replaceState(new P.ka([],[]).bJ(""),"",r)}}
V.jo.prototype={
$1:function(a){var s=this,r=s.a,q=J.ly(r.c)
q.w(q,new V.jn())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.dl(s.d)},
$S:2}
V.jn.prototype={
$1:function(a){var s
if(t.R.b(a)){s=a.style
s.border="solid 2px white"}},
$S:61}
N.kI.prototype={
$1:function(a){var s,r=this.a.gdF(),q=this.b.f.ig(a),p=r.c
if(!p.b)r.c8(new A.as(p.a,!0,!1))
p=r.d
if(p!==q){if(p!=null)p.gv().X(0,r.gbi())
s=r.d
r.d=q
q.gv().n(0,r.gbi())
r.a.T(new D.D(r.b+".texture2D",s,r.d))}},
$S:62}
N.kJ.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dq("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dq("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:1};(function aliases(){var s=J.a.prototype
s.eJ=s.i
s=J.bk.prototype
s.eL=s.i
s=P.i.prototype
s.eK=s.bK
s=W.B.prototype
s.bO=s.al
s=W.dS.prototype
s.eM=s.aw
s=K.cP.prototype
s.eI=s.aK
s.bP=s.i
s=O.d6.prototype
s.cS=s.aD
s=O.d7.prototype
s.cT=s.aD})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"p5","nF",63)
r(P,"pK","oh",9)
r(P,"pL","oi",9)
r(P,"pM","oj",9)
q(P,"mI","pF",3)
r(W,"rl","ij",49)
p(W,"pX",4,null,["$4"],["ok"],28,0)
p(W,"pY",4,null,["$4"],["ol"],28,0)
var j
o(j=E.bD.prototype,"gei",0,0,null,["$1","$0"],["ej","iq"],0,0)
o(j,"gek",0,0,null,["$1","$0"],["el","ir"],0,0)
o(j,"geg",0,0,null,["$1","$0"],["eh","ip"],0,0)
o(j,"gee",0,0,null,["$1","$0"],["ef","il"],0,0)
n(j,"gij","ik",7)
n(j,"gim","io",7)
o(j=E.fr.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],0,0)
m(j,"giC","ew",3)
l(j=X.fI.prototype,"gfS","fT",4)
l(j,"gfG","fH",4)
l(j,"gfM","fN",2)
l(j,"gfW","fX",23)
l(j,"gfU","fV",23)
l(j,"gh_","h0",2)
l(j,"gh3","h4",2)
l(j,"gfQ","fR",2)
l(j,"gh1","h2",2)
l(j,"gfO","fP",2)
l(j,"gh5","h6",36)
l(j,"gh7","h8",4)
l(j,"ghk","hl",12)
l(j,"ghg","hh",12)
l(j,"ghi","hj",12)
o(D.bW.prototype,"geV",0,0,null,["$1","$0"],["aA","eW"],0,0)
o(j=D.cW.prototype,"gd9",0,0,null,["$1","$0"],["da","fY"],0,0)
l(j,"gha","hb",38)
n(j,"gfA","fB",25)
n(j,"ghe","hf",25)
k(V.a5.prototype,"gm","cv",26)
k(V.G.prototype,"gm","cv",26)
o(j=U.bZ.prototype,"gaT",0,0,null,["$1","$0"],["O","ac"],0,0)
n(j,"gfw","fz",21)
n(j,"ghc","hd",21)
o(j=U.dD.prototype,"gaT",0,0,null,["$1","$0"],["O","ac"],0,0)
l(j,"gbZ","c_",13)
l(j,"gc0","c1",13)
l(j,"gc2","c3",13)
o(j=U.dE.prototype,"gaT",0,0,null,["$1","$0"],["O","ac"],0,0)
l(j,"gbZ","c_",1)
l(j,"gc0","c1",1)
l(j,"gc2","c3",1)
l(j,"gfm","fn",1)
l(j,"gfo","fp",1)
l(j,"ghG","hH",1)
l(j,"ghE","hF",1)
l(j,"ghC","hD",1)
l(U.dF.prototype,"gfs","ft",1)
o(j=M.eu.prototype,"gaU",0,0,null,["$1","$0"],["aV","eX"],0,0)
n(j,"gfI","fJ",7)
n(j,"gfK","fL",7)
o(j=O.cQ.prototype,"ghJ",0,1,null,["$2$color","$1"],["dn","hK"],46,0)
l(j,"gfu","fv",14)
l(j,"gf9","fa",14)
l(j,"gf6","f7",14)
l(j,"gf8","cZ",48)
o(j=O.d4.prototype,"gbi",0,0,null,["$1","$0"],["T","c6"],0,0)
o(j,"gdc",0,0,null,["$1","$0"],["dd","ht"],0,0)
n(j,"gfC","fD",17)
n(j,"gfE","fF",17)
o(O.d6.prototype,"gbi",0,0,null,["$1","$0"],["T","c6"],0,0)
o(X.eY.prototype,"gcX",0,0,null,["$1","$0"],["aW","f0"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.kX,J.a,J.ah,P.I,P.dL,P.i,H.bl,P.eB,H.cM,H.fF,H.cF,H.jy,H.j7,H.hs,H.bB,P.K,H.iI,H.eI,H.eE,H.aw,H.h4,P.dY,P.co,P.bN,P.fO,P.cc,P.fh,P.km,P.e4,P.k2,P.dK,P.j,P.hH,P.d2,P.dj,P.em,P.ix,P.kk,P.kj,P.X,P.bC,P.eX,P.dp,P.h1,P.it,P.a9,P.Y,P.bO,P.jC,P.hm,W.i9,W.kS,W.l7,W.cn,W.L,W.de,W.dS,W.hx,W.cN,W.k6,W.hI,P.k9,P.e_,P.hk,K.aR,K.cP,K.f4,K.t,L.fe,L.fs,L.ft,L.ju,O.al,O.d9,E.i3,E.bD,E.bU,E.c6,E.h_,E.j9,E.fr,Z.fL,Z.fM,Z.cB,Z.el,Z.c0,Z.b4,D.i5,D.bX,D.S,X.cC,X.eG,X.iH,X.iM,X.a8,X.j4,X.jw,X.fI,D.bW,V.W,V.a1,V.im,V.d8,V.bm,V.a4,V.ae,V.f2,V.f6,V.a5,V.G,U.dD,U.dE,U.dF,M.eu,A.ei,A.hZ,A.as,A.bc,A.be,A.bn,A.bp,A.iQ,A.dw,A.dx,A.dz,A.dC,A.a0,A.jA,F.aG,F.bH,F.f1,F.ag,F.dl,F.dm,F.dn,F.ap,F.z,F.jQ,F.fJ,F.jT,O.cd,O.d6,O.iR,T.jp,X.jl,X.eY,V.aE,V.jf,V.jm])
q(J.a,[J.eC,J.cU,J.bk,J.w,J.c1,J.bj,H.da,H.a_,W.e,W.hX,W.by,W.cD,W.aT,W.H,W.fT,W.at,W.ic,W.id,W.fV,W.cJ,W.fX,W.ie,W.m,W.h2,W.aH,W.iv,W.h6,W.bF,W.iL,W.j1,W.ha,W.hb,W.aJ,W.hc,W.he,W.aL,W.hi,W.hl,W.aM,W.hn,W.aN,W.ht,W.ao,W.hz,W.js,W.az,W.hB,W.jx,W.jH,W.hJ,W.hL,W.hN,W.hP,W.hR,P.aV,P.h8,P.aZ,P.hg,P.j8,P.hu,P.b0,P.hD,P.i_,P.fQ,P.c8,P.hq])
q(J.bk,[J.eZ,J.bL,J.aU])
r(J.iF,J.w)
q(J.c1,[J.cT,J.eD])
q(P.I,[H.cV,P.fw,H.eF,H.fE,H.f8,H.h0,P.eh,P.eU,P.aC,P.fG,P.fD,P.cb,P.eo,P.eq])
r(P.cZ,P.dL)
q(P.cZ,[H.cj,W.fR,W.a6,P.ew])
r(H.r,H.cj)
q(P.i,[H.n,H.aW,H.b5,P.cS])
q(H.n,[H.d_,H.cX])
r(H.cK,H.aW)
q(P.eB,[H.eK,H.fN])
r(H.d3,H.d_)
r(H.cG,H.cF)
r(H.df,P.fw)
q(H.bB,[H.fm,H.iG,H.kE,H.kF,H.kG,P.jX,P.jW,P.jY,P.jZ,P.kf,P.ke,P.kz,P.k4,P.k5,P.iJ,P.iN,P.jL,P.jK,P.ig,P.ih,P.jG,P.jD,P.jE,P.jF,P.kh,P.kg,P.ks,P.kt,P.ku,W.ii,W.j2,W.j3,W.jd,W.jj,W.k_,W.j6,W.j5,W.k7,W.k8,W.kd,W.kl,P.kb,P.kc,P.kq,P.kA,P.ir,P.is,P.i0,E.ja,E.jb,E.jc,E.jr,D.ip,D.iq,F.kn,F.je,F.jV,F.jU,F.jR,F.jS,O.iC,O.iB,O.iD,O.iE,O.iA,O.iz,O.iy,O.iU,O.iV,O.iW,O.iX,O.iY,O.iZ,O.j_,O.j0,T.jq,V.kL,V.jh,V.jg,V.ji,V.jo,V.jn,N.kI,N.kJ])
q(H.fm,[H.ff,H.bT])
r(P.d1,P.K)
q(P.d1,[H.V,W.fP])
r(H.c5,H.a_)
q(H.c5,[H.dN,H.dP])
r(H.dO,H.dN)
r(H.bI,H.dO)
r(H.dQ,H.dP)
r(H.db,H.dQ)
q(H.db,[H.eP,H.eQ,H.eR,H.eS,H.eT,H.dc,H.bJ])
r(H.dZ,H.h0)
r(P.dV,P.cS)
r(P.k3,P.km)
r(P.dR,P.e4)
r(P.dJ,P.dR)
r(P.e2,P.d2)
r(P.ck,P.e2)
q(P.em,[P.i1,P.ik])
r(P.ep,P.fh)
q(P.ep,[P.i2,P.iw,P.jM,P.jJ])
r(P.jI,P.ik)
q(P.aC,[P.di,P.eA])
r(P.fU,P.bO)
q(W.e,[W.v,W.ev,W.c2,W.ax,W.dT,W.ay,W.aj,W.dW,W.fK,W.cl,P.ek,P.bd])
q(W.v,[W.B,W.aD,W.cm])
q(W.B,[W.u,P.o])
q(W.u,[W.ef,W.eg,W.bS,W.bz,W.bA,W.bf,W.ex,W.c_,W.f9,W.bq,W.dq,W.fk,W.fl,W.ce])
r(W.i8,W.aT)
r(W.cH,W.fT)
q(W.at,[W.ia,W.ib])
r(W.fW,W.fV)
r(W.cI,W.fW)
r(W.fY,W.fX)
r(W.et,W.fY)
r(W.am,W.by)
r(W.h3,W.h2)
r(W.bY,W.h3)
r(W.h7,W.h6)
r(W.bE,W.h7)
r(W.b2,W.m)
q(W.b2,[W.bG,W.an,W.bK])
r(W.eM,W.ha)
r(W.eN,W.hb)
r(W.hd,W.hc)
r(W.eO,W.hd)
r(W.hf,W.he)
r(W.dd,W.hf)
r(W.hj,W.hi)
r(W.f0,W.hj)
r(W.f7,W.hl)
r(W.dU,W.dT)
r(W.fb,W.dU)
r(W.ho,W.hn)
r(W.fc,W.ho)
r(W.fg,W.ht)
r(W.hA,W.hz)
r(W.fn,W.hA)
r(W.dX,W.dW)
r(W.fo,W.dX)
r(W.hC,W.hB)
r(W.fu,W.hC)
r(W.br,W.an)
r(W.hK,W.hJ)
r(W.fS,W.hK)
r(W.dG,W.cJ)
r(W.hM,W.hL)
r(W.h5,W.hM)
r(W.hO,W.hN)
r(W.dM,W.hO)
r(W.hQ,W.hP)
r(W.hp,W.hQ)
r(W.hS,W.hR)
r(W.hw,W.hS)
r(W.fZ,W.fP)
r(W.dH,P.cc)
r(W.hy,W.dS)
r(P.ka,P.k9)
r(P.af,P.hk)
r(P.h9,P.h8)
r(P.eH,P.h9)
r(P.hh,P.hg)
r(P.eV,P.hh)
r(P.c9,P.o)
r(P.hv,P.hu)
r(P.fi,P.hv)
r(P.hE,P.hD)
r(P.fv,P.hE)
r(P.ej,P.fQ)
r(P.eW,P.bd)
r(P.hr,P.hq)
r(P.fd,P.hr)
q(K.cP,[K.ad,L.ds])
q(E.i3,[Z.bV,A.ca,T.cf])
q(D.S,[D.bh,D.bi,D.D,X.f3])
q(X.f3,[X.d0,X.c3,X.c4,X.dr])
q(O.al,[D.cW,U.bZ])
q(D.i5,[U.i6,U.Z])
r(U.cE,U.Z)
q(A.ca,[A.cR,A.d5])
q(A.a0,[A.ch,A.fz,A.fA,A.fB,A.fx,A.dt,A.fy,A.du,A.dv,A.fC,A.dy,A.ci,A.dA,A.dB])
q(O.cd,[O.cQ,O.d4])
q(O.d6,[O.iO,O.iP,O.d7])
q(O.d7,[O.iS,O.iT])
r(T.fp,T.cf)
r(T.fq,T.fp)
r(X.iu,X.jl)
q(V.aE,[V.er,V.ey,V.ez,V.f_])
s(H.cj,H.fF)
s(H.dN,P.j)
s(H.dO,H.cM)
s(H.dP,P.j)
s(H.dQ,H.cM)
s(P.dL,P.j)
s(P.e2,P.hH)
s(P.e4,P.dj)
s(W.fT,W.i9)
s(W.fV,P.j)
s(W.fW,W.L)
s(W.fX,P.j)
s(W.fY,W.L)
s(W.h2,P.j)
s(W.h3,W.L)
s(W.h6,P.j)
s(W.h7,W.L)
s(W.ha,P.K)
s(W.hb,P.K)
s(W.hc,P.j)
s(W.hd,W.L)
s(W.he,P.j)
s(W.hf,W.L)
s(W.hi,P.j)
s(W.hj,W.L)
s(W.hl,P.K)
s(W.dT,P.j)
s(W.dU,W.L)
s(W.hn,P.j)
s(W.ho,W.L)
s(W.ht,P.K)
s(W.hz,P.j)
s(W.hA,W.L)
s(W.dW,P.j)
s(W.dX,W.L)
s(W.hB,P.j)
s(W.hC,W.L)
s(W.hJ,P.j)
s(W.hK,W.L)
s(W.hL,P.j)
s(W.hM,W.L)
s(W.hN,P.j)
s(W.hO,W.L)
s(W.hP,P.j)
s(W.hQ,W.L)
s(W.hR,P.j)
s(W.hS,W.L)
s(P.h8,P.j)
s(P.h9,W.L)
s(P.hg,P.j)
s(P.hh,W.L)
s(P.hu,P.j)
s(P.hv,W.L)
s(P.hD,P.j)
s(P.hE,W.L)
s(P.fQ,P.K)
s(P.hq,P.j)
s(P.hr,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",P:"double",a3:"num",l:"String",ac:"bool",a9:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([S?])","~(S)","~(an)","~()","~(m)","~(l,@)","~(aG)","~(k,i<bD>)","~(k,k)","~(~())","a9()","~(@,@)","~(bK)","~(S?)","ag(ag)","~(ap)","~(~(S))","~(k,i<bm>)","~(cg,l,k)","ac(v)","ac(l)","~(k,i<Z?>)","@()","~(bG)","l(k)","~(k,i<au>)","P()","ac(aK)","ac(B,l,l,cn)","F<l,l>(F<l,l>,l)","a9(@)","~(N?,N?)","~(a3)","cg(@,@)","@(@)","~(l,l)","~(br)","l(l)","ac(i<au>)","@(@,l)","a9(@,@)","~(v,v?)","~(@)","~(ap,P,P)","B(v)","~(l,k)","ag(ag{color:a1?})","~(l[@])","ag(l0)","l(e)","~(ap,ap)","~(bH)","a9(P,P,P)","@(l)","~(l,l?)","k(bc,bc)","k(be,be)","k(bn,bn)","k(bp,bp)","~(jt)","ac(aE?)","~(B)","~(l)","k(@,@)","a9(~())","k(k,k)","bV(k)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oD(v.typeUniverse,JSON.parse('{"eZ":"bk","bL":"bk","aU":"bk","qg":"m","qs":"m","qi":"bd","qh":"e","qz":"e","qC":"e","qf":"o","qt":"o","qj":"u","qw":"u","qu":"v","qr":"v","r1":"aj","qn":"b2","qk":"aD","qD":"aD","qB":"an","qv":"bE","qo":"H","qp":"ao","qy":"bI","qx":"a_","eC":{"ac":[]},"bk":{"lL":[]},"w":{"p":["1"],"n":["1"],"i":["1"]},"iF":{"w":["1"],"p":["1"],"n":["1"],"i":["1"]},"c1":{"P":[],"a3":[]},"cT":{"P":[],"k":[],"a3":[]},"eD":{"P":[],"a3":[]},"bj":{"l":[]},"cV":{"I":[]},"r":{"j":["k"],"p":["k"],"n":["k"],"i":["k"],"j.E":"k"},"n":{"i":["1"]},"d_":{"n":["1"],"i":["1"]},"aW":{"i":["2"],"i.E":"2"},"cK":{"aW":["1","2"],"n":["2"],"i":["2"],"i.E":"2"},"d3":{"d_":["2"],"n":["2"],"i":["2"],"i.E":"2"},"b5":{"i":["1"],"i.E":"1"},"cj":{"j":["1"],"p":["1"],"n":["1"],"i":["1"]},"cF":{"F":["1","2"]},"cG":{"F":["1","2"]},"df":{"I":[]},"eF":{"I":[]},"fE":{"I":[]},"bB":{"cO":[]},"fm":{"cO":[]},"ff":{"cO":[]},"bT":{"cO":[]},"f8":{"I":[]},"V":{"K":["1","2"],"F":["1","2"],"K.V":"2"},"cX":{"n":["1"],"i":["1"],"i.E":"1"},"eE":{"lV":[]},"c5":{"y":["1"],"a_":[]},"bI":{"j":["P"],"y":["P"],"p":["P"],"a_":[],"n":["P"],"i":["P"],"j.E":"P"},"db":{"j":["k"],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"]},"eP":{"j":["k"],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eQ":{"j":["k"],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eR":{"j":["k"],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eS":{"j":["k"],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eT":{"j":["k"],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"dc":{"j":["k"],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"bJ":{"j":["k"],"cg":[],"y":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"h0":{"I":[]},"dZ":{"I":[]},"dY":{"jt":[]},"dV":{"i":["1"],"i.E":"1"},"dJ":{"dj":["1"],"n":["1"],"i":["1"]},"cS":{"i":["1"]},"cZ":{"j":["1"],"p":["1"],"n":["1"],"i":["1"]},"d1":{"K":["1","2"],"F":["1","2"]},"K":{"F":["1","2"]},"d2":{"F":["1","2"]},"ck":{"F":["1","2"]},"dR":{"dj":["1"],"n":["1"],"i":["1"]},"P":{"a3":[]},"k":{"a3":[]},"p":{"n":["1"],"i":["1"]},"eh":{"I":[]},"fw":{"I":[]},"eU":{"I":[]},"aC":{"I":[]},"di":{"I":[]},"eA":{"I":[]},"fG":{"I":[]},"fD":{"I":[]},"cb":{"I":[]},"eo":{"I":[]},"eX":{"I":[]},"dp":{"I":[]},"eq":{"I":[]},"bO":{"fH":[]},"hm":{"fH":[]},"fU":{"fH":[]},"u":{"B":[],"v":[],"e":[]},"bf":{"B":[],"v":[],"e":[]},"B":{"v":[],"e":[]},"am":{"by":[]},"bG":{"m":[]},"an":{"m":[]},"v":{"e":[]},"ax":{"e":[]},"ay":{"e":[]},"aj":{"e":[]},"bK":{"m":[]},"b2":{"m":[]},"br":{"an":[],"m":[]},"cn":{"aK":[]},"ef":{"B":[],"v":[],"e":[]},"eg":{"B":[],"v":[],"e":[]},"bS":{"B":[],"v":[],"e":[]},"bz":{"B":[],"v":[],"e":[]},"bA":{"B":[],"v":[],"e":[]},"aD":{"v":[],"e":[]},"cI":{"j":["af<a3>"],"p":["af<a3>"],"y":["af<a3>"],"n":["af<a3>"],"i":["af<a3>"],"j.E":"af<a3>"},"cJ":{"af":["a3"]},"et":{"j":["l"],"p":["l"],"y":["l"],"n":["l"],"i":["l"],"j.E":"l"},"fR":{"j":["B"],"p":["B"],"n":["B"],"i":["B"],"j.E":"B"},"bY":{"j":["am"],"p":["am"],"y":["am"],"n":["am"],"i":["am"],"j.E":"am"},"ev":{"e":[]},"ex":{"B":[],"v":[],"e":[]},"bE":{"j":["v"],"p":["v"],"y":["v"],"n":["v"],"i":["v"],"j.E":"v"},"c_":{"B":[],"v":[],"e":[]},"c2":{"e":[]},"eM":{"K":["l","@"],"F":["l","@"],"K.V":"@"},"eN":{"K":["l","@"],"F":["l","@"],"K.V":"@"},"eO":{"j":["aJ"],"p":["aJ"],"y":["aJ"],"n":["aJ"],"i":["aJ"],"j.E":"aJ"},"a6":{"j":["v"],"p":["v"],"n":["v"],"i":["v"],"j.E":"v"},"dd":{"j":["v"],"p":["v"],"y":["v"],"n":["v"],"i":["v"],"j.E":"v"},"f0":{"j":["aL"],"p":["aL"],"y":["aL"],"n":["aL"],"i":["aL"],"j.E":"aL"},"f7":{"K":["l","@"],"F":["l","@"],"K.V":"@"},"f9":{"B":[],"v":[],"e":[]},"fb":{"j":["ax"],"p":["ax"],"y":["ax"],"e":[],"n":["ax"],"i":["ax"],"j.E":"ax"},"fc":{"j":["aM"],"p":["aM"],"y":["aM"],"n":["aM"],"i":["aM"],"j.E":"aM"},"fg":{"K":["l","l"],"F":["l","l"],"K.V":"l"},"bq":{"B":[],"v":[],"e":[]},"dq":{"B":[],"v":[],"e":[]},"fk":{"B":[],"v":[],"e":[]},"fl":{"B":[],"v":[],"e":[]},"ce":{"B":[],"v":[],"e":[]},"fn":{"j":["aj"],"p":["aj"],"y":["aj"],"n":["aj"],"i":["aj"],"j.E":"aj"},"fo":{"j":["ay"],"p":["ay"],"y":["ay"],"e":[],"n":["ay"],"i":["ay"],"j.E":"ay"},"fu":{"j":["az"],"p":["az"],"y":["az"],"n":["az"],"i":["az"],"j.E":"az"},"fK":{"e":[]},"cl":{"e":[]},"cm":{"v":[],"e":[]},"fS":{"j":["H"],"p":["H"],"y":["H"],"n":["H"],"i":["H"],"j.E":"H"},"dG":{"af":["a3"]},"h5":{"j":["aH?"],"p":["aH?"],"y":["aH?"],"n":["aH?"],"i":["aH?"],"j.E":"aH?"},"dM":{"j":["v"],"p":["v"],"y":["v"],"n":["v"],"i":["v"],"j.E":"v"},"hp":{"j":["aN"],"p":["aN"],"y":["aN"],"n":["aN"],"i":["aN"],"j.E":"aN"},"hw":{"j":["ao"],"p":["ao"],"y":["ao"],"n":["ao"],"i":["ao"],"j.E":"ao"},"fP":{"K":["l","l"],"F":["l","l"]},"fZ":{"K":["l","l"],"F":["l","l"],"K.V":"l"},"dH":{"cc":["1"]},"de":{"aK":[]},"dS":{"aK":[]},"hy":{"aK":[]},"hx":{"aK":[]},"e_":{"bF":[]},"ew":{"j":["B"],"p":["B"],"n":["B"],"i":["B"],"j.E":"B"},"af":{"hk":["1"]},"eH":{"j":["aV"],"p":["aV"],"n":["aV"],"i":["aV"],"j.E":"aV"},"eV":{"j":["aZ"],"p":["aZ"],"n":["aZ"],"i":["aZ"],"j.E":"aZ"},"c9":{"o":[],"B":[],"v":[],"e":[]},"fi":{"j":["l"],"p":["l"],"n":["l"],"i":["l"],"j.E":"l"},"o":{"B":[],"v":[],"e":[]},"fv":{"j":["b0"],"p":["b0"],"n":["b0"],"i":["b0"],"j.E":"b0"},"ej":{"K":["l","@"],"F":["l","@"],"K.V":"@"},"ek":{"e":[]},"bd":{"e":[]},"eW":{"e":[]},"fd":{"j":["F<@,@>"],"p":["F<@,@>"],"n":["F<@,@>"],"i":["F<@,@>"],"j.E":"F<@,@>"},"cP":{"aX":[]},"aR":{"aX":[]},"ad":{"aX":[]},"f4":{"aX":[]},"t":{"aX":[]},"ds":{"aX":[]},"al":{"i":["1"],"al.T":"1"},"bh":{"S":[]},"bi":{"S":[]},"D":{"S":[]},"d0":{"S":[]},"c3":{"S":[]},"c4":{"S":[]},"f3":{"S":[]},"dr":{"S":[]},"nm":{"au":[]},"bW":{"au":[]},"nN":{"au":[]},"o5":{"au":[]},"cW":{"al":["au"],"i":["au"],"al.T":"au"},"cE":{"Z":[]},"bZ":{"al":["Z?"],"Z":[],"i":["Z?"],"al.T":"Z?"},"dD":{"Z":[]},"dE":{"Z":[]},"dF":{"Z":[]},"ch":{"a0":[]},"ci":{"a0":[]},"cR":{"ca":[]},"d5":{"ca":[]},"fz":{"a0":[]},"fA":{"a0":[]},"fB":{"a0":[]},"fx":{"a0":[]},"dt":{"a0":[]},"fy":{"a0":[]},"du":{"a0":[]},"dv":{"a0":[]},"fC":{"a0":[]},"dy":{"a0":[]},"dA":{"a0":[]},"dB":{"a0":[]},"ag":{"l0":[]},"cQ":{"cd":[]},"d4":{"cd":[]},"fp":{"cf":[]},"fq":{"cf":[]},"er":{"aE":[]},"ey":{"aE":[]},"ez":{"aE":[]},"f_":{"aE":[]},"cg":{"p":["k"],"n":["k"],"i":["k"]}}'))
H.oC(v.typeUniverse,JSON.parse('{"ah":1,"n":1,"bl":1,"eK":2,"fN":1,"cM":1,"fF":1,"cj":1,"cF":2,"eI":1,"c5":1,"cc":1,"bN":1,"fh":2,"dK":1,"cS":1,"cZ":1,"d1":2,"hH":2,"d2":2,"dR":1,"dL":1,"e2":2,"e4":1,"em":2,"ep":2,"eB":1,"dH":1,"L":1,"cN":1,"bh":1,"bi":1,"D":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",E:"May not create a line with a start vertex which is not attached to a shape.",T:"May not create a line with vertices attached to different shapes.",p:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lo
return{cR:s("bS"),fK:s("by"),Y:s("bz"),eT:s("bV"),C:s("cB"),gA:s("bA"),ar:s("cD"),gw:s("n<@>"),h:s("B"),l:s("bD"),bU:s("I"),aD:s("m"),c8:s("am"),bX:s("bY"),b:s("cO"),x:s("bF"),R:s("c_"),eu:s("w<ei>"),i:s("w<nm>"),cn:s("w<bc>"),U:s("w<bW>"),fD:s("w<be>"),E:s("w<bf>"),v:s("w<aG>"),fv:s("w<c0>"),e:s("w<au>"),L:s("w<bH>"),F:s("w<p<bf>>"),z:s("w<aX>"),fA:s("w<bm>"),Q:s("w<aK>"),q:s("w<f1>"),cG:s("w<a4>"),eg:s("w<bn>"),o:s("w<nN>"),D:s("w<o5>"),c3:s("w<bp>"),g9:s("w<cc<N>>"),s:s("w<l>"),ga:s("w<cf>"),gT:s("w<az>"),ab:s("w<ds>"),gN:s("w<cg>"),dC:s("w<a0>"),c:s("w<dw>"),V:s("w<dx>"),B:s("w<dz>"),J:s("w<dC>"),k:s("w<ap>"),n:s("w<P>"),gn:s("w<@>"),t:s("w<k>"),g6:s("w<aE?>"),eJ:s("w<Z?>"),bc:s("w<cd?>"),p:s("w<ci?>"),a:s("w<~(S)>"),T:s("cU"),eH:s("lL"),M:s("aU"),aU:s("y<@>"),fX:s("V<k,ac>"),y:s("V<k,k>"),O:s("p<dw>"),m:s("p<dx>"),r:s("p<dz>"),h2:s("p<dC>"),aH:s("p<@>"),bv:s("d0"),f:s("F<@,@>"),dv:s("d3<l,l>"),gc:s("bm"),bu:s("c2"),Z:s("c3"),bZ:s("c4"),cH:s("da"),dE:s("a_"),bm:s("bJ"),P:s("a9"),K:s("N"),I:s("af<a3>"),fJ:s("lV"),ew:s("c9"),fg:s("ca"),N:s("l"),g7:s("o"),bY:s("bq"),aW:s("ce"),aF:s("jt"),bJ:s("fs"),dr:s("dr"),u:s("dt"),w:s("ch"),g:s("du"),d:s("dv"),bK:s("dy"),j:s("ci"),G:s("dA"),bz:s("dB"),ak:s("bL"),dw:s("ck<l,l>"),dD:s("fH"),h9:s("cm"),ac:s("a6"),cJ:s("ac"),gR:s("P"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("N*"),bG:s("lJ<a9>?"),fY:s("cR?"),eI:s("d5?"),X:s("N?"),gW:s("c8?"),dl:s("fe?"),f7:s("ft?"),W:s("ch?"),H:s("a3"),g8:s("~(S)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bz.prototype
C.i=W.bA.prototype
C.Q=W.bf.prototype
C.T=J.a.prototype
C.b=J.w.prototype
C.c=J.cT.prototype
C.U=J.cU.prototype
C.d=J.c1.prototype
C.a=J.bj.prototype
C.V=J.aU.prototype
C.a_=H.bJ.prototype
C.B=J.eZ.prototype
C.a3=P.c8.prototype
C.C=W.dq.prototype
C.o=J.bL.prototype
C.D=W.br.prototype
C.E=W.cl.prototype
C.F=new E.bU("Browser.chrome")
C.q=new E.bU("Browser.firefox")
C.r=new E.bU("Browser.edge")
C.G=new E.bU("Browser.other")
C.a6=new P.i2()
C.H=new P.i1()
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

C.O=new P.eX()
C.e=new P.jI()
C.P=new P.jM()
C.f=new P.k3()
C.m=new P.bC(0)
C.R=new P.bC(5e6)
C.S=new P.ix("element",!1,!1,!1)
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
C.Z=new H.cG(0,{},C.v,H.lo("cG<l,l>"))
C.a0=new E.c6("OperatingSystem.windows")
C.A=new E.c6("OperatingSystem.mac")
C.a1=new E.c6("OperatingSystem.linux")
C.a2=new E.c6("OperatingSystem.other")
C.a4=new P.jJ(!1)
C.a5=new P.co(null,2)})();(function staticFields(){$.k0=null
$.aS=0
$.cA=null
$.lC=null
$.mK=null
$.mH=null
$.mP=null
$.kB=null
$.kH=null
$.lq=null
$.cr=null
$.e7=null
$.e8=null
$.lk=!1
$.aO=C.f
$.ak=H.b([],H.lo("w<N>"))
$.bg=null
$.kQ=null
$.lI=null
$.lH=null
$.dI=P.Q(t.N,t.b)
$.il=null
$.lN=null
$.lP=null
$.ai=null
$.b_=null
$.lX=null
$.bM=null
$.mc=null
$.mb=null
$.jN=null
$.jO=null
$.jP=null
$.ma=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qq","mV",function(){return H.pW("_$dart_dartClosure")})
s($,"qE","mX",function(){return H.b1(H.jz({
toString:function(){return"$receiver$"}}))})
s($,"qF","mY",function(){return H.b1(H.jz({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qG","mZ",function(){return H.b1(H.jz(null))})
s($,"qH","n_",function(){return H.b1(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qK","n2",function(){return H.b1(H.jz(void 0))})
s($,"qL","n3",function(){return H.b1(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qJ","n1",function(){return H.b1(H.m4(null))})
s($,"qI","n0",function(){return H.b1(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"qN","n5",function(){return H.b1(H.m4(void 0))})
s($,"qM","n4",function(){return H.b1(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"r2","lw",function(){return P.og()})
s($,"qO","n6",function(){return new P.jL().$0()})
s($,"qP","n7",function(){return new P.jK().$0()})
s($,"r3","nb",function(){return new Int8Array(H.cq(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"r6","nd",function(){return P.nZ("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rj","ne",function(){return P.oY()})
s($,"r4","nc",function(){return P.lM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"qW","na",function(){return Z.aA(0)})
s($,"qQ","n8",function(){return Z.aA(511)})
s($,"qY","bb",function(){return Z.aA(1)})
s($,"qX","ba",function(){return Z.aA(2)})
s($,"qS","b9",function(){return Z.aA(4)})
s($,"qZ","bx",function(){return Z.aA(8)})
s($,"r_","bQ",function(){return Z.aA(16)})
s($,"qT","cx",function(){return Z.aA(32)})
s($,"qU","ed",function(){return Z.aA(64)})
s($,"qV","n9",function(){return Z.aA(96)})
s($,"r0","cy",function(){return Z.aA(128)})
s($,"qR","bw",function(){return Z.aA(256)})
s($,"qm","mU",function(){return new V.im()})
r($,"ql","E",function(){return $.mU()})
r($,"qA","mW",function(){return V.lO(V.lQ(),V.l4(),V.md())})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.da,DataView:H.a_,ArrayBufferView:H.a_,Float32Array:H.bI,Float64Array:H.bI,Int16Array:H.eP,Int32Array:H.eQ,Int8Array:H.eR,Uint16Array:H.eS,Uint32Array:H.eT,Uint8ClampedArray:H.dc,CanvasPixelArray:H.dc,Uint8Array:H.bJ,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.hX,HTMLAnchorElement:W.ef,HTMLAreaElement:W.eg,HTMLBaseElement:W.bS,Blob:W.by,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bA,CanvasRenderingContext2D:W.cD,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CSSPerspective:W.i8,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cH,MSStyleCSSProperties:W.cH,CSS2Properties:W.cH,CSSImageValue:W.at,CSSKeywordValue:W.at,CSSNumericValue:W.at,CSSPositionValue:W.at,CSSResourceValue:W.at,CSSUnitValue:W.at,CSSURLImageValue:W.at,CSSStyleValue:W.at,CSSMatrixComponent:W.aT,CSSRotation:W.aT,CSSScale:W.aT,CSSSkew:W.aT,CSSTranslation:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.ia,CSSUnparsedValue:W.ib,DataTransferItemList:W.ic,HTMLDivElement:W.bf,DOMException:W.id,ClientRectList:W.cI,DOMRectList:W.cI,DOMRectReadOnly:W.cJ,DOMStringList:W.et,DOMTokenList:W.ie,Element:W.B,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.am,FileList:W.bY,FileWriter:W.ev,HTMLFormElement:W.ex,Gamepad:W.aH,History:W.iv,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,ImageData:W.bF,HTMLImageElement:W.c_,KeyboardEvent:W.bG,Location:W.iL,MediaList:W.j1,MessagePort:W.c2,MIDIInputMap:W.eM,MIDIOutputMap:W.eN,MimeType:W.aJ,MimeTypeArray:W.eO,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,DocumentType:W.v,Node:W.v,NodeList:W.dd,RadioNodeList:W.dd,Plugin:W.aL,PluginArray:W.f0,RTCStatsReport:W.f7,HTMLSelectElement:W.f9,SourceBuffer:W.ax,SourceBufferList:W.fb,SpeechGrammar:W.aM,SpeechGrammarList:W.fc,SpeechRecognitionResult:W.aN,Storage:W.fg,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableCellElement:W.bq,HTMLTableDataCellElement:W.bq,HTMLTableHeaderCellElement:W.bq,HTMLTableElement:W.dq,HTMLTableRowElement:W.fk,HTMLTableSectionElement:W.fl,HTMLTemplateElement:W.ce,TextTrack:W.ay,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.fn,TextTrackList:W.fo,TimeRanges:W.js,Touch:W.az,TouchEvent:W.bK,TouchList:W.fu,TrackDefaultList:W.jx,CompositionEvent:W.b2,FocusEvent:W.b2,TextEvent:W.b2,UIEvent:W.b2,URL:W.jH,VideoTrackList:W.fK,WheelEvent:W.br,Window:W.cl,DOMWindow:W.cl,Attr:W.cm,CSSRuleList:W.fS,ClientRect:W.dG,DOMRect:W.dG,GamepadList:W.h5,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,SpeechRecognitionResultList:W.hp,StyleSheetList:W.hw,SVGLength:P.aV,SVGLengthList:P.eH,SVGNumber:P.aZ,SVGNumberList:P.eV,SVGPointList:P.j8,SVGScriptElement:P.c9,SVGStringList:P.fi,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b0,SVGTransformList:P.fv,AudioBuffer:P.i_,AudioParamMap:P.ej,AudioTrackList:P.ek,AudioContext:P.bd,webkitAudioContext:P.bd,BaseAudioContext:P.bd,OfflineAudioContext:P.eW,WebGL2RenderingContext:P.c8,SQLResultSetRowList:P.fd})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.dN.$nativeSuperclassTag="ArrayBufferView"
H.dO.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.dP.$nativeSuperclassTag="ArrayBufferView"
H.dQ.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
W.dT.$nativeSuperclassTag="EventTarget"
W.dU.$nativeSuperclassTag="EventTarget"
W.dW.$nativeSuperclassTag="EventTarget"
W.dX.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=N.q5
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
