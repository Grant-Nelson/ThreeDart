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
a[c]=function(){a[c]=function(){H.ql(b)}
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
if(a[b]!==s)H.qm(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lt(this,a,b,c,true,false,e).prototype
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
l6:function(a){return new H.cX("Field '"+a+"' has been assigned during initialization.")},
kL:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jq:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oh:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pX:function(a,b,c){return a},
nV:function(a,b,c,d){if(t.gw.b(a))return new H.cM(a,b,c.J("@<0>").be(d).J("cM<1,2>"))
return new H.aY(a,b,c.J("@<0>").be(d).J("aY<1,2>"))},
iF:function(){return new P.cb("No element")},
nM:function(){return new P.cb("Too many elements")},
oe:function(a,b){H.fc(a,0,J.aQ(a)-1,b)},
fc:function(a,b,c,d){if(c-b<=32)H.od(a,b,c,d)
else H.oc(a,b,c,d)},
od:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cx(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.au()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oc:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.aa(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.aa(a4+a5,2),f=g-j,e=g+j,d=J.cx(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.Y(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.fc(a3,a4,r-2,a6)
H.fc(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.Y(a6.$2(d.h(a3,r),b),0);)++r
for(;J.Y(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.fc(a3,r,q,a6)}else H.fc(a3,r,q,a6)},
cX:function cX(a){this.a=a},
q:function q(a){this.a=a},
n:function n(){},
d1:function d1(){},
bh:function bh(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
eK:function eK(a,b){this.a=null
this.b=a
this.c=b},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.$ti=c},
fO:function fO(a,b){this.a=a
this.b=b},
cP:function cP(){},
fI:function fI(){},
ch:function ch(){},
nG:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
n3:function(a){var s,r=H.n2(a)
if(r!=null)return r
s="minified:"+a
return s},
mY:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cz(a)
return s},
dh:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m0:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
di:function(a){return H.nY(a)},
nY:function(a){var s,r,q,p
if(a instanceof P.N)return H.ao(H.b7(a),null)
if(J.eb(a)===C.U||t.ak.b(a)){s=C.u(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ao(H.b7(a),null)},
nZ:function(){if(!!self.location)return self.location.href
return null},
m_:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
o6:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.t)(a),++r){q=a[r]
if(!H.hV(q))throw H.c(H.ea(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aY(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ea(q))}return H.m_(p)},
m1:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.hV(q))throw H.c(H.ea(q))
if(q<0)throw H.c(H.ea(q))
if(q>65535)return H.o6(a)}return H.m_(a)},
o7:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
at:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aY(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.aa(a,0,1114111,null,null))},
c8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o5:function(a){var s=H.c8(a).getFullYear()+0
return s},
o3:function(a){var s=H.c8(a).getMonth()+1
return s},
o_:function(a){var s=H.c8(a).getDate()+0
return s},
o0:function(a){var s=H.c8(a).getHours()+0
return s},
o2:function(a){var s=H.c8(a).getMinutes()+0
return s},
o4:function(a){var s=H.c8(a).getSeconds()+0
return s},
o1:function(a){var s=H.c8(a).getMilliseconds()+0
return s},
q8:function(a){throw H.c(H.ea(a))},
d:function(a,b){if(a==null)J.aQ(a)
throw H.c(H.cv(a,b))},
cv:function(a,b){var s,r="index"
if(!H.hV(b))return new P.aA(!0,b,r,null)
s=J.aQ(a)
if(b<0||b>=s)return P.M(b,a,r,null,s)
return P.f5(b,r)},
q1:function(a,b,c){if(a>c)return P.aa(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aa(b,a,c,"end",null)
return new P.aA(!0,b,"end",null)},
ea:function(a){return new P.aA(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eW()
s=new Error()
s.dartException=a
r=H.qn
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qn:function(){return J.cz(this.dartException)},
i:function(a){throw H.c(a)},
t:function(a){throw H.c(P.aF(a))},
b3:function(a){var s,r,q,p,o,n
a=H.n0(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jF(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jG:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
me:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l5:function(a,b){var s=b==null,r=s?null:b.method
return new H.eF(a,r,s?null:b.receiver)},
ap:function(a){if(a==null)return new H.ja(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bR(a,a.dartException)
return H.pT(a)},
bR:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aY(r,16)&8191)===10)switch(q){case 438:return H.bR(a,H.l5(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bR(a,new H.dg(p,e))}}if(a instanceof TypeError){o=$.n7()
n=$.n8()
m=$.n9()
l=$.na()
k=$.nd()
j=$.ne()
i=$.nc()
$.nb()
h=$.ng()
g=$.nf()
f=o.as(s)
if(f!=null)return H.bR(a,H.l5(s,f))
else{f=n.as(s)
if(f!=null){f.method="call"
return H.bR(a,H.l5(s,f))}else{f=m.as(s)
if(f==null){f=l.as(s)
if(f==null){f=k.as(s)
if(f==null){f=j.as(s)
if(f==null){f=i.as(s)
if(f==null){f=l.as(s)
if(f==null){f=h.as(s)
if(f==null){f=g.as(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bR(a,new H.dg(s,f==null?e:f.method))}}return H.bR(a,new H.fH(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dn()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bR(a,new P.aA(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dn()
return a},
lv:function(a){var s
if(a==null)return new H.ht(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.ht(a)},
q3:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qc:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cu:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qc)
a.$identity=s
return s},
nF:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fh().constructor.prototype):Object.create(new H.bV(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aS
if(typeof r!=="number")return r.W()
$.aS=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lJ(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nB(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lJ(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nB:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mW,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nz:H.ny
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nC:function(a,b,c,d){var s=H.lI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lJ:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nE(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nC(r,!p,s,b)
if(r===0){p=$.aS
if(typeof p!=="number")return p.W()
$.aS=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cA
return new Function(p+(o==null?$.cA=H.i8("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aS
if(typeof p!=="number")return p.W()
$.aS=p+1
m+=p
p="return function("+m+"){return this."
o=$.cA
return new Function(p+(o==null?$.cA=H.i8("self"):o)+"."+H.x(s)+"("+m+");}")()},
nD:function(a,b,c,d){var s=H.lI,r=H.nA
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
nE:function(a,b){var s,r,q,p,o,n,m,l=$.cA
if(l==null)l=$.cA=H.i8("self")
s=$.lH
if(s==null)s=$.lH=H.i8("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nD(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aS
if(typeof n!=="number")return n.W()
$.aS=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aS
if(typeof n!=="number")return n.W()
$.aS=n+1
return new Function(o+n+"}")()},
lt:function(a,b,c,d,e,f,g){return H.nF(a,b,c,d,!!e,!!f,g)},
ny:function(a,b){return H.hH(v.typeUniverse,H.b7(a.a),b)},
nz:function(a,b){return H.hH(v.typeUniverse,H.b7(a.c),b)},
lI:function(a){return a.a},
nA:function(a){return a.c},
i8:function(a){var s,r,q,p=new H.bV("self","target","receiver","name"),o=J.l3(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bT("Field name "+a+" not found."))},
ql:function(a){throw H.c(new P.eq(a))},
q5:function(a){return v.getIsolateTag(a)},
qm:function(a){return H.i(new H.cX(a))},
rx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qe:function(a){var s,r,q,p,o,n=$.mV.$1(a),m=$.kJ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kP[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mR.$2(a,n)
if(q!=null){m=$.kJ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kP[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kS(s)
$.kJ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kP[n]=s
return s}if(p==="-"){o=H.kS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mZ(a,s)
if(p==="*")throw H.c(P.jJ(n))
if(v.leafTags[n]===true){o=H.kS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mZ(a,s)},
mZ:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lx(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kS:function(a){return J.lx(a,!1,null,!!a.$iy)},
qg:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kS(s)
else return J.lx(s,c,null,null)},
qa:function(){if(!0===$.lw)return
$.lw=!0
H.qb()},
qb:function(){var s,r,q,p,o,n,m,l
$.kJ=Object.create(null)
$.kP=Object.create(null)
H.q9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n_.$1(o)
if(n!=null){m=H.qg(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
q9:function(){var s,r,q,p,o,n,m=C.J()
m=H.ct(C.K,H.ct(C.L,H.ct(C.v,H.ct(C.v,H.ct(C.M,H.ct(C.N,H.ct(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mV=new H.kM(p)
$.mR=new H.kN(o)
$.n_=new H.kO(n)},
ct:function(a,b){return a(b)||b},
nQ:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
n1:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q2:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lz:function(a,b,c){var s=H.qj(a,b,c)
return s},
qj:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n0(b),'g'),H.q2(c))},
cF:function cF(){},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jF:function jF(a,b,c,d,e,f){var _=this
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
fH:function fH(a){this.a=a},
ja:function ja(a){this.a=a},
ht:function ht(a){this.a=a
this.b=null},
bA:function bA(){},
fo:function fo(){},
fh:function fh(){},
bV:function bV(a,b,c,d){var _=this
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
iH:function iH(a){this.a=a},
iK:function iK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function(a){return a},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cv(b,a))},
p6:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.q1(a,b,c))
return b},
db:function db(){},
a1:function a1(){},
c6:function c6(){},
bG:function bG(){},
dc:function dc(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
dd:function dd(){},
bH:function bH(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
m7:function(a,b){var s=b.c
return s==null?b.c=H.lj(a,b.z,!0):s},
m6:function(a,b){var s=b.c
return s==null?b.c=H.e1(a,"lR",[b.z]):s},
m8:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m8(a.z)
return s===11||s===12},
oa:function(a){return a.cy},
lu:function(a){return H.lk(v.typeUniverse,a,!1)},
br:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.mA(a,r,!0)
case 7:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.lj(a,r,!0)
case 8:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.mz(a,r,!0)
case 9:q=b.Q
p=H.e9(a,q,a0,a1)
if(p===q)return b
return H.e1(a,b.z,p)
case 10:o=b.z
n=H.br(a,o,a0,a1)
m=b.Q
l=H.e9(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lh(a,n,l)
case 11:k=b.z
j=H.br(a,k,a0,a1)
i=b.Q
h=H.pQ(a,i,a0,a1)
if(j===k&&h===i)return b
return H.my(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e9(a,g,a0,a1)
o=b.z
n=H.br(a,o,a0,a1)
if(f===g&&n===o)return b
return H.li(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i0("Attempted to substitute unexpected RTI kind "+c))}},
e9:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.br(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pR:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.br(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pQ:function(a,b,c,d){var s,r=b.a,q=H.e9(a,r,c,d),p=b.b,o=H.e9(a,p,c,d),n=b.c,m=H.pR(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h5()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
pY:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mW(s)
return a.$S()}return null},
mX:function(a,b){var s
if(H.m8(b))if(a instanceof H.bA){s=H.pY(a)
if(s!=null)return s}return H.b7(a)},
b7:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lp(a)}if(Array.isArray(a))return H.kx(a)
return H.lp(J.eb(a))},
kx:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.lp(a)},
lp:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pe(a,s)},
pe:function(a,b){var s=a instanceof H.bA?a.__proto__.__proto__.constructor:b,r=H.oP(v.typeUniverse,s.name)
b.$ccache=r
return r},
mW:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lk(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pd:function(a){var s,r,q,p=this
if(p===t.K)return H.e6(p,a,H.pi)
if(!H.b8(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e6(p,a,H.pl)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hV
else if(r===t.gR||r===t.H)q=H.ph
else if(r===t.N)q=H.pj
else q=r===t.cJ?H.kD:null
if(q!=null)return H.e6(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qd)){p.r="$i"+s
return H.e6(p,a,H.pk)}}else if(s===7)return H.e6(p,a,H.pb)
return H.e6(p,a,H.p9)},
e6:function(a,b,c){a.b=c
return a.b(b)},
pc:function(a){var s,r=this,q=H.p8
if(!H.b8(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.p5
else if(r===t.K)q=H.p4
else{s=H.ec(r)
if(s)q=H.pa}r.a=q
return r.a(a)},
ls:function(a){var s,r=a.y
if(!H.b8(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.ls(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p9:function(a){var s=this
if(a==null)return H.ls(s)
return H.P(v.typeUniverse,H.mX(a,s),null,s,null)},
pb:function(a){if(a==null)return!0
return this.z.b(a)},
pk:function(a){var s,r=this
if(a==null)return H.ls(r)
s=r.r
if(a instanceof P.N)return!!a[s]
return!!J.eb(a)[s]},
p8:function(a){var s,r=this
if(a==null){s=H.ec(r)
if(s)return a}else if(r.b(a))return a
H.mL(a,r)},
pa:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mL(a,s)},
mL:function(a,b){throw H.c(H.oF(H.mr(a,H.mX(a,b),H.ao(b,null))))},
mr:function(a,b,c){var s=P.it(a),r=H.ao(b==null?H.b7(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oF:function(a){return new H.e_("TypeError: "+a)},
ab:function(a,b){return new H.e_("TypeError: "+H.mr(a,null,b))},
pi:function(a){return a!=null},
p4:function(a){if(a!=null)return a
throw H.c(H.ab(a,"Object"))},
pl:function(a){return!0},
p5:function(a){return a},
kD:function(a){return!0===a||!1===a},
mJ:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
rl:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
rk:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
rm:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
ro:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
rn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
hV:function(a){return typeof a=="number"&&Math.floor(a)===a},
hU:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
rq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
rp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
ph:function(a){return typeof a=="number"},
rr:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
rt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
pj:function(a){return typeof a=="string"},
ky:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
rv:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
ru:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
pM:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ao(a[q],b)
return s},
mM:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(!k)m+=" extends "+H.ao(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ao(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ao(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ao(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ao(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ao:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ao(a.z,b)
return s}if(l===7){r=a.z
s=H.ao(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ao(a.z,b)+">"
if(l===9){p=H.pS(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pM(o,b)+">"):p}if(l===11)return H.mM(a,b,null)
if(l===12)return H.mM(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
pS:function(a){var s,r=H.n2(a)
if(r!=null)return r
s="minified:"+a
return s},
mB:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oP:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lk(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e2(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e1(a,b,q)
n[b]=o
return o}else return m},
oN:function(a,b){return H.mI(a.tR,b)},
oM:function(a,b){return H.mI(a.eT,b)},
lk:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mw(H.mu(a,null,b,c))
r.set(b,s)
return s},
hH:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mw(H.mu(a,b,c,!0))
q.set(c,r)
return r},
oO:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lh(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bq:function(a,b){b.a=H.pc
b.b=H.pd
return b},
e2:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.au(null,null)
s.y=b
s.cy=c
r=H.bq(a,s)
a.eC.set(c,r)
return r},
mA:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oK(a,b,r,c)
a.eC.set(r,s)
return s},
oK:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.au(null,null)
q.y=6
q.z=b
q.cy=c
return H.bq(a,q)},
lj:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oJ(a,b,r,c)
a.eC.set(r,s)
return s},
oJ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b8(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ec(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ec(q.z))return q
else return H.m7(a,b)}}p=new H.au(null,null)
p.y=7
p.z=b
p.cy=c
return H.bq(a,p)},
mz:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oH(a,b,r,c)
a.eC.set(r,s)
return s},
oH:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e1(a,"lR",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.au(null,null)
q.y=8
q.z=b
q.cy=c
return H.bq(a,q)},
oL:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.au(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bq(a,s)
a.eC.set(q,r)
return r},
hG:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oG:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e1:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hG(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.au(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bq(a,r)
a.eC.set(p,q)
return q},
lh:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hG(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bq(a,o)
a.eC.set(q,n)
return n},
my:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hG(m)
if(j>0){s=l>0?",":""
r=H.hG(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oG(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bq(a,o)
a.eC.set(q,r)
return r},
li:function(a,b,c,d){var s,r=b.cy+("<"+H.hG(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oI(a,b,c,r,d)
a.eC.set(r,s)
return s},
oI:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.br(a,b,r,0)
m=H.e9(a,c,r,0)
return H.li(a,n,m,c!==m)}}l=new H.au(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bq(a,l)},
mu:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mw:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oz(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mv(a,r,h,g,!1)
else if(q===46)r=H.mv(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bp(a.u,a.e,g.pop()))
break
case 94:g.push(H.oL(a.u,g.pop()))
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
H.lg(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e1(p,n,o))
else{m=H.bp(p,a.e,n)
switch(m.y){case 11:g.push(H.li(p,m,o,a.n))
break
default:g.push(H.lh(p,m,o))
break}}break
case 38:H.oA(a,g)
break
case 42:p=a.u
g.push(H.mA(p,H.bp(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lj(p,H.bp(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mz(p,H.bp(p,a.e,g.pop()),a.n))
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
H.lg(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.my(p,H.bp(p,a.e,g.pop()),l))
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
H.oC(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bp(a.u,a.e,i)},
oz:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mv:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mB(s,o.z)[p]
if(n==null)H.i('No "'+p+'" in "'+H.oa(o)+'"')
d.push(H.hH(s,o,n))}else d.push(p)
return m},
oA:function(a,b){var s=b.pop()
if(0===s){b.push(H.e2(a.u,1,"0&"))
return}if(1===s){b.push(H.e2(a.u,4,"1&"))
return}throw H.c(P.i0("Unexpected extended operation "+H.x(s)))},
bp:function(a,b,c){if(typeof c=="string")return H.e1(a,c,a.sEA)
else if(typeof c=="number")return H.oB(a,b,c)
else return c},
lg:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bp(a,b,c[s])},
oC:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bp(a,b,c[s])},
oB:function(a,b,c){var s,r,q=b.y
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
P:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.P(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.P(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.P(a,b.z,c,d,e)
if(r===6)return H.P(a,b.z,c,d,e)
return r!==7}if(r===6)return H.P(a,b.z,c,d,e)
if(p===6){s=H.m7(a,d)
return H.P(a,b,c,s,e)}if(r===8){if(!H.P(a,b.z,c,d,e))return!1
return H.P(a,H.m6(a,b),c,d,e)}if(r===7){s=H.P(a,t.P,c,d,e)
return s&&H.P(a,b.z,c,d,e)}if(p===8){if(H.P(a,b,c,d.z,e))return!0
return H.P(a,b,c,H.m6(a,d),e)}if(p===7){s=H.P(a,b,c,t.P,e)
return s||H.P(a,b,c,d.z,e)}if(q)return!1
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
if(!H.P(a,k,c,j,e)||!H.P(a,j,e,k,c))return!1}return H.mN(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mN(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pg(a,b,c,d,e)}return!1},
mN:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pg:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.P(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mB(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.P(a,H.hH(a,b,l[p]),c,r[p],e))return!1
return!0},
ec:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b8(a))if(r!==7)if(!(r===6&&H.ec(a.z)))s=r===8&&H.ec(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qd:function(a){var s
if(!H.b8(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b8:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mI:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h5:function h5(){this.c=this.b=this.a=null},
h1:function h1(){},
e_:function e_(a){this.a=a},
n2:function(a){return v.mangledGlobalNames[a]},
qh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kK:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lw==null){H.qa()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jJ("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ka
if(o==null)o=$.ka=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qe(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){o=$.ka
if(o==null)o=$.ka=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
nN:function(a,b){if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.nO(new Array(a),b)},
l2:function(a,b){if(a<0)throw H.c(P.bT("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.J("w<0>"))},
nO:function(a,b){return J.l3(H.b(a,b.J("w<0>")))},
l3:function(a){a.fixed$length=Array
return a},
nP:function(a,b){return J.ns(a,b)},
eb:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.eD.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.cW.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.N)return a
return J.kK(a)},
cx:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.N)return a
return J.kK(a)},
hW:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.N)return a
return J.kK(a)},
mU:function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bN.prototype
return a},
q4:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bN.prototype
return a},
aP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.N)return a
return J.kK(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eb(a).q(a,b)},
lB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mU(a).L(a,b)},
lC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cx(a).h(a,b)},
kV:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mY(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hW(a).m(a,b,c)},
nq:function(a,b,c){return J.aP(a).he(a,b,c)},
nr:function(a,b,c,d){return J.aP(a).hA(a,b,c,d)},
ns:function(a,b){return J.mU(a).ao(a,b)},
hZ:function(a,b){return J.hW(a).I(a,b)},
eg:function(a,b){return J.hW(a).C(a,b)},
nt:function(a){return J.aP(a).ga4(a)},
lD:function(a){return J.aP(a).gbl(a)},
nu:function(a){return J.aP(a).gdT(a)},
kW:function(a){return J.eb(a).gF(a)},
az:function(a){return J.hW(a).gR(a)},
aQ:function(a){return J.cx(a).gl(a)},
lE:function(a){return J.hW(a).im(a)},
nv:function(a,b){return J.aP(a).iq(a,b)},
nw:function(a){return J.q4(a).iy(a)},
cz:function(a){return J.eb(a).i(a)},
a:function a(){},
eC:function eC(){},
cW:function cW(){},
bg:function bg(){},
f0:function f0(){},
bN:function bN(){},
aW:function aW(){},
w:function w(a){this.$ti=a},
iG:function iG(a){this.$ti=a},
ah:function ah(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(){},
cV:function cV(){},
eD:function eD(){},
bf:function bf(){}},P={
oq:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pU()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cu(new P.k6(q),1)).observe(s,{childList:true})
return new P.k5(q,s,r)}else if(self.setImmediate!=null)return P.pV()
return P.pW()},
or:function(a){self.scheduleImmediate(H.cu(new P.k7(a),0))},
os:function(a){self.setImmediate(H.cu(new P.k8(a),0))},
ot:function(a){P.lb(C.m,a)},
lb:function(a,b){var s=C.c.aa(a.a,1000)
return P.oD(s<0?0:s,b)},
md:function(a,b){var s=C.c.aa(a.a,1000)
return P.oE(s<0?0:s,b)},
oD:function(a,b){var s=new P.dZ()
s.eP(a,b)
return s},
oE:function(a,b){var s=new P.dZ()
s.eQ(a,b)
return s},
ri:function(a){return new P.cp(a,1)},
ow:function(){return C.a5},
ox:function(a){return new P.cp(a,3)},
pn:function(a,b){return new P.dW(a,b.J("dW<0>"))},
pJ:function(){var s,r
for(s=$.cs;s!=null;s=$.cs){$.e8=null
r=s.b
$.cs=r
if(r==null)$.e7=null
s.a.$0()}},
pP:function(){$.lq=!0
try{P.pJ()}finally{$.e8=null
$.lq=!1
if($.cs!=null)$.lA().$1(P.mS())}},
pN:function(a){var s=new P.fP(a),r=$.e7
if(r==null){$.cs=$.e7=s
if(!$.lq)$.lA().$1(P.mS())}else $.e7=r.b=s},
pO:function(a){var s,r,q,p=$.cs
if(p==null){P.pN(a)
$.e8=$.e7
return}s=new P.fP(a)
r=$.e8
if(r==null){s.b=p
$.cs=$.e8=s}else{q=r.b
s.b=q
$.e8=r.b=s
if(q==null)$.e7=s}},
mc:function(a,b){var s=$.aO
if(s===C.f)return P.lb(a,b)
return P.lb(a,s.hF(b))},
oj:function(a,b){var s=$.aO
if(s===C.f)return P.md(a,b)
return P.md(a,s.dM(b,t.aF))},
mO:function(a,b,c,d,e){P.pO(new P.kG(d,e))},
pK:function(a,b,c,d){var s,r=$.aO
if(r===c)return d.$0()
$.aO=c
s=r
try{r=d.$0()
return r}finally{$.aO=s}},
pL:function(a,b,c,d,e){var s,r=$.aO
if(r===c)return d.$1(e)
$.aO=c
s=r
try{r=d.$1(e)
return r}finally{$.aO=s}},
k6:function k6(a){this.a=a},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
dZ:function dZ(){this.c=0},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cp:function cp(a,b){this.a=a
this.b=b},
bP:function bP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dW:function dW(a,b){this.a=a
this.$ti=b},
fP:function fP(a){this.a=a
this.b=null},
cc:function cc(){},
fj:function fj(){},
kw:function kw(){},
kG:function kG(a,b){this.a=a
this.b=b},
kd:function kd(){},
ke:function ke(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
nR:function(a,b){return new H.U(a.J("@<0>").be(b).J("U<1,2>"))},
nS:function(a,b,c){return H.q3(a,new H.U(b.J("@<0>").be(c).J("U<1,2>")))},
R:function(a,b){return new H.U(a.J("@<0>").be(b).J("U<1,2>"))},
d_:function(a){return new P.dK(a.J("dK<0>"))},
lf:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oy:function(a,b){var s=new P.dL(a,b)
s.c=a.e
return s},
nL:function(a,b,c){var s,r
if(P.lr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ak.push(a)
try{P.pm(a,s)}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=P.ma(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l1:function(a,b,c){var s,r
if(P.lr(a))return b+"..."+c
s=new P.a_(b)
$.ak.push(a)
try{r=s
r.a=P.ma(r.a,a,", ")}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lr:function(a){var s,r
for(s=$.ak.length,r=0;r<s;++r)if(a===$.ak[r])return!0
return!1},
pm:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.x(l.gw(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gw(l);++j
if(!l.v()){if(j<=4){b.push(H.x(p))
return}r=H.x(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gw(l);++j
for(;l.v();p=o,o=n){n=l.gw(l);++j
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
nT:function(a,b,c){var s=P.nR(b,c)
a.C(0,new P.iL(s,b,c))
return s},
lT:function(a,b){var s,r,q=P.d_(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.t)(a),++r)q.n(0,b.a(a[r]))
return q},
l7:function(a){var s,r={}
if(P.lr(a))return"{...}"
s=new P.a_("")
try{$.ak.push(a)
s.a+="{"
r.a=!0
J.eg(a,new P.iP(r,s))
s.a+="}"}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dK:function dK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kc:function kc(a){this.a=a
this.c=this.b=null},
dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function cU(){},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(){},
j:function j(){},
d3:function d3(){},
iP:function iP(a,b){this.a=a
this.b=b},
K:function K(){},
hI:function hI(){},
d4:function d4(){},
ci:function ci(a,b){this.a=a
this.$ti=b},
dk:function dk(){},
dS:function dS(){},
dM:function dM(){},
e3:function e3(){},
e5:function e5(){},
om:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.on(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
on:function(a,b,c,d){var s=a?$.ni():$.nh()
if(s==null)return null
if(0===c&&d===b.length)return P.mj(s,b)
return P.mj(s,b.subarray(c,P.bk(c,d,b.length)))},
mj:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ap(r)}return null},
lG:function(a,b,c,d,e,f){if(C.c.br(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
p3:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p2:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cx(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jT:function jT(){},
jS:function jS(){},
i5:function i5(){},
i6:function i6(){},
en:function en(){},
ep:function ep(){},
iq:function iq(){},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iC:function iC(a){this.a=a},
jQ:function jQ(){},
jU:function jU(){},
ku:function ku(a){this.b=0
this.c=a},
jR:function jR(a){this.a=a},
kt:function kt(a){this.a=a
this.b=16
this.c=0},
hX:function(a,b){var s=H.m0(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
nK:function(a){if(a instanceof H.bA)return a.i(0)
return"Instance of '"+H.di(a)+"'"},
eJ:function(a,b,c,d){var s,r=c?J.l2(a,d):J.nN(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iM:function(a,b,c){var s,r=H.b([],c.J("w<0>"))
for(s=J.az(a);s.v();)r.push(s.gw(s))
if(b)return r
return J.l3(r)},
nU:function(a,b,c){var s,r,q=J.l2(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fl:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bk(b,c,r)
return H.m1(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.o7(a,b,P.bk(b,c,a.length))
return P.og(a,b,c)},
og:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.aa(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.aa(c,b,a.length,o,o))
r=J.az(a)
for(q=0;q<b;++q)if(!r.v())throw H.c(P.aa(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gw(r))
else for(q=b;q<c;++q){if(!r.v())throw H.c(P.aa(c,b,q,o,o))
p.push(r.gw(r))}return H.m1(p)},
o8:function(a){return new H.eE(a,H.nQ(a,!1,!0,!1,!1,!1))},
ma:function(a,b,c){var s=J.az(b)
if(!s.v())return a
if(c.length===0){do a+=H.x(s.gw(s))
while(s.v())}else{a+=H.x(s.gw(s))
for(;s.v();)a=a+c+H.x(s.gw(s))}return a},
mg:function(){var s=H.nZ()
if(s!=null)return P.ol(s)
throw H.c(P.z("'Uri.base' is not supported"))},
ks:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.no().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghR().cl(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.at(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nH:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
es:function(a){if(a>=10)return""+a
return"0"+a},
lM:function(a){return new P.bB(1000*a)},
it:function(a){if(typeof a=="number"||H.kD(a)||null==a)return J.cz(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nK(a)},
i0:function(a){return new P.ej(a)},
bT:function(a){return new P.aA(!1,null,null,a)},
f5:function(a,b){return new P.dj(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
bk:function(a,b,c){if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",null))
return b}return c},
m2:function(a,b){if(a<0)throw H.c(P.aa(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aQ(b):e
return new P.eA(s,!0,a,c,"Index out of range")},
z:function(a){return new P.fJ(a)},
jJ:function(a){return new P.fG(a)},
l9:function(a){return new P.cb(a)},
aF:function(a){return new P.eo(a)},
f:function(a){return new P.h2(a)},
a7:function(a,b,c){return new P.iz(a,b,c)},
ly:function(a){H.qh(a)},
ol:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mf(a4<a4?C.a.u(a5,0,a4):a5,5,a3).ges()
else if(s===32)return P.mf(C.a.u(a5,5,a4),0,a3).ges()}r=P.eJ(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mP(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mP(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.ae(a5,"..",n)))h=m>n+2&&C.a.ae(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.ae(a5,"file",0)){if(p<=0){if(!C.a.ae(a5,"/",n)){g="file:///"
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
a5=C.a.b4(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ae(a5,"http",0)){if(i&&o+3===n&&C.a.ae(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ae(a5,"https",0)){if(i&&o+4===n&&C.a.ae(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.u(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hn(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.oX(a5,0,q)
else{if(q===0)P.cq(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.oY(a5,d,p-1):""
b=P.oU(a5,p,o,!1)
i=o+1
if(i<n){a=H.m0(C.a.u(a5,i,n),a3)
a0=P.oW(a==null?H.i(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oV(a5,n,m,a3,j,b!=null)
a2=m<l?P.lm(a5,m+1,l,a3):a3
return new P.bQ(j,c,b,a0,a1,a2,l<a4?P.oT(a5,l+1,a4):a3)},
mi:function(a){var s=t.N
return C.b.hX(H.b(a.split("&"),t.s),P.R(s,s),new P.jO(C.e))},
ok:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jL(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.V(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.hX(C.a.u(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.hX(C.a.u(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mh:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jM(a),c=new P.jN(d,a)
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
l=C.b.gaB(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.ok(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aY(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cq:function(a,b,c){throw H.c(P.a7(c,a,b))},
oW:function(a,b){if(a!=null&&a===P.mC(b))return null
return a},
oU:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cq(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oR(a,r,s)
if(q<s){p=q+1
o=P.mH(a,C.a.ae(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mh(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.bB(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mH(a,C.a.ae(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mh(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.p_(a,b,c)},
oR:function(a,b,c){var s=C.a.bB(a,"%",b)
return s>=b&&s<c?s:c},
mH:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a_(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.ln(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a_("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.cq(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a_("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.a_("")
n=i}else n=i
n.a+=j
n.a+=P.ll(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p_:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.ln(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a_("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a_("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cq(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a_("")
m=q}else m=q
m.a+=l
m.a+=P.ll(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oX:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mE(C.a.D(a,b)))P.cq(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cq(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.oQ(r?a.toLowerCase():a)},
oQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oY:function(a,b,c){return P.e4(a,b,c,C.Z,!1)},
oV:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e4(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a3(s,"/"))s="/"+s
return P.oZ(s,e,f)},
oZ:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a3(a,"/"))return P.p0(a,!s||c)
return P.p1(a)},
lm:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bT("Both query and queryParameters specified"))
return P.e4(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a_("")
r.a=""
d.C(0,new P.kq(new P.kr(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oT:function(a,b,c){return P.e4(a,b,c,C.k,!0)},
ln:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kL(s)
p=H.kL(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aY(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.at(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
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
for(o=0;--q,q>=0;r=128){n=C.c.hq(a,6*q)&63|r
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
o+=3}}return P.fl(s,0,null)},
e4:function(a,b,c,d,e){var s=P.mG(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mG:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.ln(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cq(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ll(o)}}if(p==null){p=new P.a_("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.q8(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mF:function(a){if(C.a.a3(a,"."))return!0
return C.a.e9(a,"/.")!==-1},
p1:function(a){var s,r,q,p,o,n,m
if(!P.mF(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.Y(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p0:function(a,b){var s,r,q,p,o,n
if(!P.mF(a))return!b?P.mD(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaB(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaB(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mD(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mD:function(a){var s,r,q,p=a.length
if(p>=2&&P.mE(C.a.D(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ai(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oS:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bT("Invalid URL encoding"))}}return s},
lo:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.q(C.a.u(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.bT("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bT("Truncated URI"))
p.push(P.oS(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cl(p)},
mE:function(a){var s=a|32
return 97<=s&&s<=122},
mf:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaB(j)
if(p!==44||r!==n+7||!C.a.ae(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.i6(0,a,m,s)
else{l=P.mG(a,m,s,C.k,!0)
if(l!=null)a=C.a.b4(a,m,s,l)}return new P.jK(a,j,c)},
p7:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kA(h)
q=new P.kB()
p=new P.kC()
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
mP:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.np()
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
bB:function bB(a){this.a=a},
il:function il(){},
im:function im(){},
J:function J(){},
ej:function ej(a){this.a=a},
fz:function fz(){},
eW:function eW(){},
aA:function aA(a,b,c,d){var _=this
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
fJ:function fJ(a){this.a=a},
fG:function fG(a){this.a=a},
cb:function cb(a){this.a=a},
eo:function eo(a){this.a=a},
eZ:function eZ(){},
dn:function dn(){},
eq:function eq(a){this.a=a},
h2:function h2(a){this.a=a},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
eB:function eB(){},
ai:function ai(){},
N:function N(){},
a_:function a_(a){this.a=a},
jO:function jO(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a){this.a=a},
kB:function kB(){},
kC:function kC(){},
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
q_:function(a){var s,r,q,p
if(t.I.b(a)){s=J.nu(a)
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
pZ:function(a){if(a instanceof P.e0)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var s,r,q,p,o
if(a==null)return null
s=P.R(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.t)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mK:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kD(a))return a
if(t.f.b(a))return P.mT(a)
if(t.aH.b(a)){s=[]
J.eg(a,new P.kz(s))
a=s}return a},
mT:function(a){var s={}
J.eg(a,new P.kH(s))
return s},
kj:function kj(){},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a){this.a=a},
kH:function kH(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
ix:function ix(){},
iy:function iy(){},
hl:function hl(){},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aX:function aX(){},
eH:function eH(){},
b0:function b0(){},
eX:function eX(){},
jb:function jb(){},
ca:function ca(){},
fk:function fk(){},
o:function o(){},
b2:function b2(){},
fy:function fy(){},
h9:function h9(){},
ha:function ha(){},
hh:function hh(){},
hi:function hi(){},
hv:function hv(){},
hw:function hw(){},
hE:function hE(){},
hF:function hF(){},
i2:function i2(){},
el:function el(){},
i3:function i3(a){this.a=a},
em:function em(){},
bb:function bb(){},
eY:function eY(){},
fR:function fR(){},
c9:function c9(){},
ff:function ff(){},
hr:function hr(){},
hs:function hs(){}},W={
lF:function(){var s=document.createElement("a")
s.toString
return s},
kX:function(){var s=document.createElement("canvas")
s.toString
return s},
nJ:function(a,b,c){var s=document.body
s.toString
s=new H.b5(new W.a6(C.q.ap(s,a,b,c)),new W.io(),t.ac.J("b5<j.E>"))
return t.h.a(s.gaQ(s))},
ip:function(a){return"wheel"},
cN:function(a){var s,r,q="element tag unavailable"
try{s=J.aP(a)
s.gep(a)
q=s.gep(a)}catch(r){H.ap(r)}return q},
l0:function(a){var s=document.createElement("img")
s.toString
if(a!=null)s.src=a
return s},
kb:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mt:function(a,b,c,d){var s=W.kb(W.kb(W.kb(W.kb(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a3:function(a,b,c,d){var s=new W.dI(a,b,c==null?null:W.mQ(new W.k9(c),t.aD),!1)
s.hx()
return s},
ms:function(a){var s=W.lF(),r=window
s=new W.co(new W.kg(s,r.location))
s.eK(a)
return s},
ou:function(a,b,c,d){return!0},
ov:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mx:function(){var s=t.N,r=P.lT(C.A,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hz(r,P.d_(s),P.d_(s),P.d_(s),null)
s.eO(null,new H.d5(C.A,new W.kn(),t.dv),q,null)
return s},
mQ:function(a,b){var s=$.aO
if(s===C.f)return a
return s.dM(a,b)},
u:function u(){},
i_:function i_(){},
eh:function eh(){},
ei:function ei(){},
bU:function bU(){},
bw:function bw(){},
bx:function bx(){},
bz:function bz(){},
cC:function cC(){},
aB:function aB(){},
id:function id(){},
H:function H(){},
cI:function cI(){},
ie:function ie(){},
ar:function ar(){},
aT:function aT(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
bd:function bd(){},
ij:function ij(){},
cK:function cK(){},
cL:function cL(){},
eu:function eu(){},
ik:function ik(){},
fS:function fS(a,b){this.a=a
this.b=b},
A:function A(){},
io:function io(){},
m:function m(){},
e:function e(){},
al:function al(){},
c_:function c_(){},
ev:function ev(){},
ex:function ex(){},
aH:function aH(){},
iB:function iB(){},
bD:function bD(){},
bE:function bE(){},
c1:function c1(){},
bF:function bF(){},
iN:function iN(){},
j3:function j3(){},
c3:function c3(){},
eO:function eO(){},
j4:function j4(a){this.a=a},
eP:function eP(){},
j5:function j5(a){this.a=a},
aI:function aI(){},
eQ:function eQ(){},
am:function am(){},
a6:function a6(a){this.a=a},
v:function v(){},
de:function de(){},
aK:function aK(){},
f2:function f2(){},
f7:function f7(){},
jg:function jg(a){this.a=a},
f9:function f9(){},
av:function av(){},
fd:function fd(){},
aM:function aM(){},
fe:function fe(){},
aN:function aN(){},
fi:function fi(){},
jp:function jp(a){this.a=a},
an:function an(){},
bm:function bm(){},
dp:function dp(){},
fm:function fm(){},
fn:function fn(){},
cd:function cd(){},
aw:function aw(){},
aj:function aj(){},
fp:function fp(){},
fq:function fq(){},
jz:function jz(){},
ax:function ax(){},
bM:function bM(){},
fx:function fx(){},
jE:function jE(){},
b4:function b4(){},
jP:function jP(){},
fM:function fM(){},
bo:function bo(){},
cm:function cm(){},
cn:function cn(){},
fT:function fT(){},
dH:function dH(){},
h6:function h6(){},
dN:function dN(){},
hq:function hq(){},
hx:function hx(){},
fQ:function fQ(){},
h_:function h_(a){this.a=a},
l_:function l_(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k9:function k9(a){this.a=a},
le:function le(a){this.$ti=a},
co:function co(a){this.a=a},
L:function L(){},
df:function df(a){this.a=a},
j8:function j8(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
kh:function kh(){},
ki:function ki(){},
hz:function hz(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kn:function kn(){},
hy:function hy(){},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
kg:function kg(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a
this.b=0},
kv:function kv(a){this.a=a},
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
hA:function hA(){},
hB:function hB(){},
dX:function dX(){},
dY:function dY(){},
hC:function hC(){},
hD:function hD(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){}},K={
O:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.f4(s,r)},
aR:function aR(){},
cS:function cS(){},
af:function af(a){this.a=a},
f4:function f4(a,b){this.a=a
this.b=b},
r:function r(a){this.a=a}},L={
jC:function(){var s=t.N
return new L.jB(P.R(s,t.dl),P.R(s,t.f7),P.d_(s))},
fg:function fg(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a,b){this.b=a
this.c=b},
jB:function jB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dr:function dr(a,b){this.b=a
this.c=!1
this.a=b}},O={
kY:function(a){return new O.ad(H.b([],a.J("w<0>")),a.J("ad<0>"))},
ad:function ad(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
da:function da(a){this.a=a
this.b=null},
eM:function(a,b){return new O.d8(new V.T(0,0,0),a,b,new A.aE(!1,!1,!1))},
et:function et(a,b,c){var _=this
_.c=_.b=_.a=null
_.d=a
_.e=b
_.f=c
_.r=null},
d6:function d6(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(){},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(){},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(){},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(){},
iQ:function iQ(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
eL:function eL(){},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
iT:function iT(a){this.b=a},
iU:function iU(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
iV:function iV(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
dl:function dl(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
bK:function bK(){}},E={
lP:function(){var s=O.kY(t.m),r=new E.bC(s)
s.b9(r.gi7(),r.gia())
r.sbP(0,null)
return r},
mp:function(){var s=window.navigator.vendor
s.toString
if(C.a.A(s,"Google"))return C.G
s=window.navigator.userAgent
s.toString
if(C.a.A(s,"Firefox"))return C.r
s=window.navigator.appVersion
s.toString
if(C.a.A(s,"Trident")||C.a.A(s,"Edge"))return C.t
s=window.navigator.appName
s.toString
if(C.a.A(s,"Microsoft"))return C.t
return C.H},
mq:function(){var s=window.navigator.appVersion
s.toString
if(C.a.A(s,"Win"))return C.a1
if(C.a.A(s,"Mac"))return C.B
if(C.a.A(s,"Linux"))return C.a2
return C.a3},
o9:function(a,b){var s
Date.now()
s=t.fA
s=new E.jc(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.da(H.b([],s)),new O.da(H.b([],s)),new O.da(H.b([],s)),H.b([null],t.bc),P.R(t.N,t.fg))
s.eJ(a,b)
return s},
oi:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.mb(a,!0,!0,!0,!1)
s=W.kX()
r=s.style
r.width="100%"
r.height="100%"
J.lD(a).n(0,s)
return E.mb(s,!0,!0,!0,!1)},
mb:function(a,b,c,d,e){var s,r,q,p,o,n,m="mousemove",l=t.A,k=t.gW.a(C.i.cX(a,"webgl2",P.nS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],l,l)))
if(k==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.o9(k,a)
l=H.hU(k.getParameter(3379))
r=H.hU(k.getParameter(34076))
q=H.b([],t.g9)
p=$.ir
o=new X.fL(a,q,(p==null?$.ir=new E.h0(E.mp(),E.mq()):p).a===C.r?0.16666666666666666:0.005555555555555556)
n=document
n.toString
q.push(W.a3(n,"contextmenu",o.gfu(),!1))
q.push(W.a3(a,"focus",o.gfC(),!1))
q.push(W.a3(a,"blur",o.gfn(),!1))
q.push(W.a3(n,"keyup",o.gfG(),!1))
q.push(W.a3(n,"keydown",o.gfE(),!1))
q.push(W.a3(a,"mousedown",o.gfK(),!1))
q.push(W.a3(a,"mouseup",o.gfO(),!1))
q.push(W.a3(a,m,o.gfM(),!1))
W.ip(a)
W.ip(a)
q.push(W.a3(a,W.ip(a),o.gfQ(),!1))
q.push(W.a3(n,m,o.gfw(),!1))
q.push(W.a3(n,"mouseup",o.gfA(),!1))
q.push(W.a3(n,"pointerlockchange",o.gfS(),!1))
q.push(W.a3(a,"touchstart",o.gh7(),!1))
q.push(W.a3(a,"touchend",o.gh3(),!1))
q.push(W.a3(a,"touchmove",o.gh5(),!1))
r=new E.fu(a,s,new T.jv(k,l,r),o,new P.Z(Date.now(),!1))
r.dn()
return r},
i7:function i7(){},
bC:function bC(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bW:function bW(a){this.b=a},
c7:function c7(a){this.b=a},
h0:function h0(a,b){this.a=a
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
jy:function jy(a){this.a=a}},Z={
mo:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.fN(b,s)},
ay:function(a){return new Z.bn(a)},
fN:function fN(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dG:function dG(a){this.a=a},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a){this.a=a}},D={
E:function(){return new D.bZ()},
i9:function i9(){},
bZ:function bZ(){var _=this
_.c=_.b=_.a=null
_.d=0},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
Q:function Q(){},
aU:function aU(){},
aV:function aV(){},
B:function B(a,b,c){this.c=a
this.d=b
this.e=c},
bY:function bY(a,b,c,d){var _=this
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
_.c=_.b=null}},X={cB:function cB(a,b){this.a=a
this.b=b},eG:function eG(a,b){this.a=a
this.b=b},iI:function iI(a,b){this.c=a
this.d=b},d2:function d2(a,b,c){this.x=a
this.c=b
this.d=c},iO:function iO(a,b,c,d){var _=this
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
_.d=e},j6:function j6(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c5:function c5(a,b,c){this.x=a
this.c=b
this.d=c},f3:function f3(){},dq:function dq(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jD:function jD(a,b,c,d,e){var _=this
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
lQ:function(a){var s=new V.aD(0,0,0,1),r=V.l8()
return new X.iA(s,r)},
lY:function(a){var s,r,q=new X.f_(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gt().n(0,q.geR())
q.a0(new D.B("mover",s,q.b))}r=q.c
$.D().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.a0(new D.B("fov",r,1.0471975511965976))}r=q.d
$.D().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.a0(new D.B("near",r,0.1))}r=q.e
$.D().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.a0(new D.B("far",r,2000))}return q},
i4:function i4(a,b,c){var _=this
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
iA:function iA(a,b){this.a=a
this.r=b
this.x=null},
iE:function iE(){this.b=null},
f_:function f_(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jr:function jr(){},
qf:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="bumpMaps",a7="modifiers",a8=34067,a9=V.ob("Test 029"),b0=W.kX()
b0.className="pageLargeCanvas"
b0.id=a4
a9.a.appendChild(b0).toString
s=t.s
a9.dG(H.b(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],s))
a9.hz(H.b(["bumpMaps"],s))
a9.dG(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a4)
if(r==null)H.i(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oi(r,!0,!0,!0,!1)
p=new U.c0(V.ae(),H.b([],t.eJ))
p.b9(p.gff(),p.gfW())
o=q.x
n=U.ic()
m=U.ic()
l=$.bO
if(l==null)l=$.bO=new V.a5(0,0)
l=new U.dD(n,m,new X.a8(!1,!1,!1),l,V.ae())
n.scW(0,!0)
n.scG(6.283185307179586)
n.scI(0)
n.saj(0,0)
n.scH(100)
n.sa2(0)
n.scm(0.5)
k=l.gaW()
n.gt().n(0,k)
m.scW(0,!0)
m.scG(6.283185307179586)
m.scI(0)
m.saj(0,0)
m.scH(100)
m.sa2(0)
m.scm(0.5)
m.gt().n(0,k)
n=new X.a8(!1,!1,!1)
if(!l.d.q(0,n)){j=l.d
l.d=n
l.T(new D.B(a7,j,n))}l.bj(o)
p.n(0,l)
U.ic()
if($.bO==null)$.bO=new V.a5(0,0)
V.ae()
n=U.ic()
m=$.bO
if(m==null)m=$.bO=new V.a5(0,0)
m=new U.dC(n,new X.a8(!1,!1,!1),m,V.ae())
n.scW(0,!0)
n.scG(6.283185307179586)
n.scI(0)
n.saj(0,0)
n.scH(100)
n.sa2(0)
n.scm(0.2)
n.gt().n(0,m.gaW())
n=new X.a8(!0,!1,!1)
if(!m.c.q(0,n)){j=m.c
m.c=n
m.T(new D.B(a7,j,n))}m.bj(o)
p.n(0,m)
n=new X.a8(!1,!1,!1)
m=new U.dE(n,V.ae())
l=new X.a8(!1,!1,!1)
if(!n.q(0,l)){m.b=l
m.T(new D.B(a7,n,l))}m.bj(o)
p.n(0,m)
p.n(0,U.lK(V.b_(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=X.lY(p)
o=T.la(a5)
h=new X.i4(o,new V.aD(0,0,0,1),V.l8())
h.sat(0,512)
h.saq(0,512)
g=new V.aD(0,0,0,1)
if(!h.cx.q(0,g)){j=h.cx
h.cx=g
h.a0(new D.B("color",j,g))}if(h.cy){h.cy=!1
h.a0(new D.B("clearColor",!0,!1))}n=h.db
$.D().toString
if(!(Math.abs(n-2000)<1e-9)){h.db=2000
h.a0(new D.B("depth",n,2000))}if(!h.f){h.f=!0
h.a0(new D.B("autoResize",!1,!0))}n=h.r
$.D().toString
if(!(Math.abs(n-1)<1e-9)){h.r=1
h.a0(new D.B("autoResizeScalarX",n,1))}n=h.x
$.D().toString
if(!(Math.abs(n-1)<1e-9)){h.x=1
h.a0(new D.B("autoResizeScalarY",n,1))}f=V.l8()
if(!h.dy.q(0,f)){j=h.dy
h.dy=f
h.a0(new D.B("region",j,f))}e=E.lP()
e.sbP(0,F.qo())
n=O.kY(t.gc)
d=new O.d6(n)
n.b9(d.gfj(),d.gfl())
n=d.gee()
n.gt().n(0,d.gdl())
n.ged().n(0,d.gbt())
n=d.gee()
c=V.ld()
m=U.lK(V.lV(V.lZ(),c,new V.F(0,-1,-1)))
l=new V.T(1,1,1)
k=new D.bY(new V.T(1,1,1),V.mn(),V.ld(),V.op())
j=k.a
k.a=m
m.gt().n(0,k.geM())
k.aD(new D.B("mover",j,k.a))
if(!k.b.q(0,l)){j=k.b
k.b=l
k.aD(new D.B("color",j,l))}n.n(0,k)
n=d.gdH()
n.sb0(0,new V.T(0,0,1))
n=d.gdU()
n.sb0(0,new V.T(0,1,0))
n=d.gbQ()
n.sb0(0,new V.T(1,0,0))
n=d.gbQ()
n.dt(new A.aE(!0,!1,!1))
n.du(10)
n=q.f
m=n.a
l=m.createTexture()
l.toString
m.bindTexture(a8,l)
m.texParameteri(a8,10242,10497)
m.texParameteri(a8,10243,10497)
m.texParameteri(a8,10241,9729)
m.texParameteri(a8,10240,9729)
m.bindTexture(a8,a5)
b=new T.ft(l)
n.aV(b,l,"../resources/maskonaive/posx.jpg",34069,!1,!1)
n.aV(b,l,"../resources/maskonaive/negx.jpg",34070,!1,!1)
n.aV(b,l,"../resources/maskonaive/posy.jpg",34071,!1,!1)
n.aV(b,l,"../resources/maskonaive/negy.jpg",34072,!1,!1)
n.aV(b,l,"../resources/maskonaive/posz.jpg",34073,!1,!1)
n.aV(b,l,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a=M.lL()
n=new O.dl(new V.T(1,1,1))
j=n.c
n.c=b
b.gt().n(0,n.gbt())
n.a9(new D.B("boxTexture",j,n.c))
a.sb5(n)
a.sbp(0,h)
a.sbk(i)
n=O.kY(t.m)
a0=new M.cO(n)
n.b9(a0.gfp(),a0.gfs())
a1=X.lQ(a5)
a0.sbk(a5)
a0.sbp(0,a1)
a0.sb5(a5)
a0.sbk(i)
a0.sb5(d)
a0.sbp(0,h)
n.n(0,e)
a2=new O.et(V.eN(),V.eN(),V.ae())
a2.sdR(a5)
a2.sdP(a5)
n=V.eN()
if(!a2.d.q(0,n)){a2.d=n
a2.av()}n=V.eN()
if(!a2.e.q(0,n)){a2.e=n
a2.av()}n=V.ae()
a2.sdO(n)
a2.sdR(o)
a2.sdO(V.lW(0.05,0.05,0.05))
a3=M.lL()
a3.sb5(a2)
o=t.ba
n=H.b([a,a0,a3],o)
o=new M.cD(H.b([],o))
o.b9(o.gh_(),o.gh1())
o.ab(0,n)
n=q.d
if(n!==o){if(n!=null)n.gt().S(0,q.gd3())
q.d=o
o.gt().n(0,q.gd3())
q.d4()}r=s.getElementById(a6)
if(r==null)H.i(P.f("Failed to find bumpMaps for Texture2DGroup"))
s=new V.js(a6,!0,r,new X.kQ(a2,q))
s.dE(0,"../resources/BumpMap1.png",!0)
s.n(0,"../resources/BumpMap2.png")
s.n(0,"../resources/BumpMap3.png")
s.n(0,"../resources/BumpMap4.png")
s.n(0,"../resources/BumpMap5.png")
s.n(0,"../resources/ScrewBumpMap.png")
s.n(0,"../resources/CtrlPnlBumpMap.png")
s=q.Q
if(s==null)s=q.Q=D.E()
o=s.b
s=o==null?s.b=H.b([],t.a):o
s.push(new X.kR(a9,a2))
V.qi(q)},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(a,b){this.a=a
this.b=b}},V={
ia:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(s,r,q,1)},
qp:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.br(a-b,s)
return(a<0?a+s:a)+b},
C:function(a,b,c){$.D().toString
return C.a.aL(C.d.cT(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cw:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.t)(a),++p){o=a[p]
$.D().toString
n=C.a.aL(C.d.cT(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.aL(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
ed:function(a){return C.d.iv(Math.pow(2,C.d.cA(Math.log(a)/Math.log(2))))},
eN:function(){var s=$.lU
return s==null?$.lU=new V.d9(1,0,0,0,1,0,0,0,1):s},
ae:function(){var s=$.lX
return s==null?$.lX=V.b_(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b_:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lW:function(a,b,c){return V.b_(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
lV:function(a,b,c){var s=c.K(),r=b.aJ(s).K(),q=s.aJ(r),p=new V.F(a.a,a.b,a.c)
return V.b_(r.a,q.a,s.a,r.b8(0).ac(p),r.b,q.b,s.b,q.b8(0).ac(p),r.c,q.c,s.c,s.b8(0).ac(p),0,0,0,1)},
lZ:function(){var s=$.b1
return s==null?$.b1=new V.W(0,0,0):s},
l8:function(){var s=$.m5
return s==null?$.m5=V.m4(0,0,1,1):s},
m4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f6(a,b,c,d)},
dF:function(){var s=$.mm
return s==null?$.mm=new V.F(0,0,0):s},
op:function(){var s=$.jV
return s==null?$.jV=new V.F(-1,0,0):s},
ld:function(){var s=$.jW
return s==null?$.jW=new V.F(0,1,0):s},
mn:function(){var s=$.jX
return s==null?$.jX=new V.F(0,0,1):s},
oo:function(a,b,c){return new V.F(a,b,c)},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(){},
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
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c,d){var _=this
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
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function(a){P.oj(C.S,new V.kT(a))},
ob:function(a){var s,r,q,p,o,n=document,m=n.body
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
aC:function aC(){},
kT:function kT(a){this.a=a},
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
f1:function f1(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
jk:function jk(a){this.a=a
this.b=null},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
jn:function jn(a){this.a=a},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jt:function jt(){}},U={
ic:function(){return new U.ib()},
lK:function(a){var s=V.ae(),r=new U.cE(s)
if(!s.q(0,a))r.a=a
return r},
ib:function ib(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cE:function cE(a){this.a=a
this.b=null},
c0:function c0(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a0:function a0(){},
dC:function dC(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dD:function dD(a,b,c,d,e){var _=this
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
dE:function dE(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={
lL:function(){var s,r,q,p,o=null,n=E.lP(),m=new M.cH(n),l=F.m9(),k=l.ga7(),j=new V.F(-1,-1,1).K(),i=k.bx(new V.bI(1,2,4,6),V.ia(255,0,0),new V.W(-1,-1,0),new V.V(0,1),j,o)
j=l.ga7()
k=new V.F(1,-1,1).K()
s=j.bx(new V.bI(0,3,4,6),V.ia(0,0,255),new V.W(1,-1,0),new V.V(1,1),k,o)
k=l.ga7()
j=new V.F(1,1,1).K()
r=k.bx(new V.bI(0,2,5,6),V.ia(0,128,0),new V.W(1,1,0),new V.V(1,0),j,o)
j=l.ga7()
k=$.a9
if(k==null)k=$.a9=new V.V(0,0)
q=new V.F(-1,1,1).K()
p=j.bx(new V.bI(0,2,4,7),V.ia(255,255,0),new V.W(-1,1,0),k,q,o)
l.gU().hB(H.b([i,s,r,p],t.k))
l.aI()
n.sbP(0,l)
m.sbk(o)
m.sbp(0,o)
m.sb5(o)
return m},
cD:function cD(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cH:function cH(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
cO:function cO(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
nW:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gax(a4)+a5.gax(a5)+a6.gax(a6)+a7.gax(a7)+a8.gax(a8)+a9.gax(a9)+b0.gax(b0)+b1.gax(b1)+b2.gax(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.t)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.t)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.t)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.t)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.aq()
if(h){s=$.bv()
c=new Z.bn(c.a|s.a)}if(g)c=new Z.bn(c.a|$.bu().a)
if(f)c=new Z.bn(c.a|$.bt().a)
return new A.iS(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kE:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kF:function(a,b,c){var s
A.kE(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hY(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
ps:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kE(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
po:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kF(b,r,"ambient")
b.a+="\n"},
pq:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kF(b,r,"diffuse")
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
pt:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kF(b,r,"invDiffuse")
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
pz:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kF(b,r,"specular")
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
pv:function(a,b){var s,r,q
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
px:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kE(b,r,"reflect")
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
py:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kE(b,r,"refract")
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
pp:function(a,b,c){var s,r,q,p,o,n,m=b.b
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
pr:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
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
pw:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
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
pA:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
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
if(m){s=$.ir
if(s==null)s=$.ir=new E.h0(E.mp(),E.mq())
p=c.a
if(s.b===C.B){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
pu:function(a,b){var s,r
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
pB:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a_(""),j=""+"precision mediump float;\n"
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
A.ps(a,k)
A.po(a,k)
A.pq(a,k)
A.pt(a,k)
A.pz(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.px(a,k)
A.py(a,k)}A.pv(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.t)(p),++n)A.pp(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.t)(p),++n)A.pr(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.t)(p),++n)A.pw(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.t)(p),++n)A.pA(a,p[n],k)
A.pu(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.t)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.t)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.t)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.t)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
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
pC:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b1+"];\n"
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
pE:function(a,b){var s
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
pD:function(a,b){var s
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
pG:function(a,b){var s,r
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
pH:function(a,b){var s,r
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
pF:function(a,b){var s
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
pI:function(a,b){var s
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
return a[0].toUpperCase()+C.a.ai(a,1)},
lc:function(a,b,c,d,e){var s=new A.fA(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eJ(d,0,!1,t.S)
return s},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a){this.a=a},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iR=_.iQ=_.e3=_.iP=_.iO=_.e2=_.e1=_.iN=_.iM=_.e0=_.e_=_.iL=_.iK=_.dZ=_.iJ=_.iI=_.dY=_.dX=_.bA=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cp=c
_.cq=d
_.cr=e
_.cs=f
_.ct=g
_.cu=h
_.cv=i
_.cw=j
_.iU=_.iT=_.iS=null
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
iS:function iS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b1=b5
_.bA=b6
_.dX=b7},
dv:function dv(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dw:function dw(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dy:function dy(a,b,c,d,e,f,g,h,i,j){var _=this
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
dB:function dB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bJ:function bJ(){},
dm:function dm(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
a2:function a2(){},
jI:function jI(a){this.a=a},
cf:function cf(a,b,c){this.a=a
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
ds:function ds(a,b,c){this.a=a
this.c=b
this.d=c},
fB:function fB(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
du:function du(a,b,c){this.a=a
this.c=b
this.d=c},
fF:function fF(a,b,c){this.a=a
this.c=b
this.d=c},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c},
dA:function dA(a,b,c){this.a=a
this.c=b
this.d=c}},F={
qo:function(){return F.q0(15,30,0.5,1,new F.kU())},
q0:function(a,b,c,d,e){var s=F.qk(a,b,new F.kI(e,d,b,c))
s.aI()
s.i5(new F.k0(),new F.j9())
return s},
qk:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.m9()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.I(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.jY(d,d,new V.aD(m,0,0,1),d,d,new V.V(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.dS(d))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.I(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.jY(d,d,new V.aD(g,f,e,1),d,d,new V.V(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.dS(d))}}s.gU().hC(a+1,b+1,q)
return s},
m9:function(){return new F.jh()},
jY:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cj()
h=$.nj()
s=$.aq()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bv().a)!==0)q.r=e
if((r&$.bu().a)!==0)q.x=b
if((r&$.b9().a)!==0)q.y=f
if((r&$.bS().a)!==0)q.z=g
if((r&$.nk().a)!==0)q.Q=c
if((r&$.cy().a)!==0)q.ch=i
if((r&$.bt().a)!==0)q.cx=a
return q},
kU:function kU(){},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iw:function iw(){},
jo:function jo(){},
iJ:function iJ(){},
jH:function jH(){},
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
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
ji:function ji(a){this.b=a},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
k4:function k4(a){this.a=a},
k3:function k3(a){this.a=a},
I:function I(a,b){this.a=a
this.b=!1
this.c=b},
ck:function ck(a,b,c){this.b=a
this.c=b
this.d=c},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.b=a
this.c=b},
k1:function k1(){},
k0:function k0(){},
k2:function k2(){},
j9:function j9(){}},T={
la:function(a){return new T.fs(a)},
bL:function bL(){},
fr:function fr(){},
fs:function fs(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
ft:function ft(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
jv:function jv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jw:function jw(a,b,c,d,e,f,g){var _=this
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
H.l4.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.dh(a)},
i:function(a){return"Instance of '"+H.di(a)+"'"}}
J.eC.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iac:1}
J.cW.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bg.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$ilS:1}
J.f0.prototype={}
J.bN.prototype={}
J.aW.prototype={
i:function(a){var s=a[$.n5()]
if(s==null)return this.eF(a)
return"JavaScript function for "+J.cz(s)},
$icR:1}
J.w.prototype={
cO:function(a,b){if(!!a.fixed$length)H.i(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.f5(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var s
if(!!a.fixed$length)H.i(P.z("remove"))
for(s=0;s<a.length;++s)if(J.Y(a[s],b)){a.splice(s,1)
return!0}return!1},
ab:function(a,b){if(!!a.fixed$length)H.i(P.z("addAll"))
this.eU(a,b)
return},
eU:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aF(a))
for(s=0;s<r;++s)a.push(b[s])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aF(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eJ(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
i1:function(a){return this.j(a,"")},
hW:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aF(a))}return s},
hX:function(a,b,c){return this.hW(a,b,c,t.A)},
hV:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aF(a))}throw H.c(H.iF())},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghU:function(a){if(a.length>0)return a[0]
throw H.c(H.iF())},
gaB:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iF())},
dI:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aF(a))}return!1},
bb:function(a,b){if(!!a.immutable$list)H.i(P.z("sort"))
H.oe(a,b==null?J.pf():b)},
eB:function(a){return this.bb(a,null)},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.Y(a[s],b))return!0
return!1},
i:function(a){return P.l1(a,"[","]")},
gR:function(a){return new J.ah(a,a.length)},
gF:function(a){return H.dh(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.i(P.z("set length"))
if(b>a.length)H.kx(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cv(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.i(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cv(a,b))
a[b]=c},
$in:1,
$ih:1,
$ip:1}
J.iG.prototype={}
J.ah.prototype={
gw:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.t(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c2.prototype={
ao:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbD(b)
if(this.gbD(a)===s)return 0
if(this.gbD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbD:function(a){return a===0?1/a<0:a<0},
iv:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
cA:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
cT:function(a,b){var s
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
br:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
aY:function(a,b){var s
if(a>0)s=this.dw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hq:function(a,b){if(b<0)throw H.c(H.ea(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
$iX:1,
$ia4:1}
J.cV.prototype={$ik:1}
J.eD.prototype={}
J.bf.prototype={
V:function(a,b){if(b<0)throw H.c(H.cv(a,b))
if(b>=a.length)H.i(H.cv(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cv(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
b4:function(a,b,c,d){var s=P.bk(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ae:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a3:function(a,b){return this.ae(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f5(b,null))
if(b>c)throw H.c(P.f5(b,null))
if(c>a.length)throw H.c(P.f5(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.u(a,b,null)},
iy:function(a){return a.toLowerCase()},
L:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aL:function(a,b){var s=b-a.length
if(s<=0)return a
return this.L(" ",s)+a},
bB:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
e9:function(a,b){return this.bB(a,b,0)},
hI:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aa(c,0,s,null,null))
return H.n1(a,b,c)},
A:function(a,b){return this.hI(a,b,0)},
ao:function(a,b){var s
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
gl:function(a){return a.length},
$il:1}
H.cX.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.q.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.n.prototype={}
H.d1.prototype={
gR:function(a){return new H.bh(this,this.gl(this))},
bN:function(a,b){return this.eE(0,b)}}
H.bh.prototype={
gw:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=J.cx(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aF(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aY.prototype={
gR:function(a){return new H.eK(J.az(this.a),this.b)},
gl:function(a){return J.aQ(this.a)},
I:function(a,b){return this.b.$1(J.hZ(this.a,b))}}
H.cM.prototype={$in:1}
H.eK.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gw(r))
return!0}s.a=null
return!1},
gw:function(a){return H.S(this).Q[1].a(this.a)}}
H.d5.prototype={
gl:function(a){return J.aQ(this.a)},
I:function(a,b){return this.b.$1(J.hZ(this.a,b))}}
H.b5.prototype={
gR:function(a){return new H.fO(J.az(this.a),this.b)}}
H.fO.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gw(s)))return!0
return!1},
gw:function(a){var s=this.a
return s.gw(s)}}
H.cP.prototype={}
H.fI.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.ch.prototype={}
H.cF.prototype={
i:function(a){return P.l7(this)},
m:function(a,b,c){H.nG()},
$iG:1}
H.cG.prototype={
gl:function(a){return this.a},
ck:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.ck(0,b))return null
return this.de(b)},
de:function(a){return this.b[a]},
C:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.de(q))}}}
H.jF.prototype={
as:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.fH.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ja.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ht.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bA.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n3(r==null?"unknown":r)+"'"},
$icR:1,
giB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fo.prototype={}
H.fh.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n3(s)+"'"}}
H.bV.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bV))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.dh(this.a)
else s=typeof r!=="object"?J.kW(r):H.dh(r)
return(s^H.dh(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.di(s)+"'")}}
H.f8.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.U.prototype={
gl:function(a){return this.a},
gbC:function(a){return this.a===0},
ga5:function(a){return new H.cZ(this,H.S(this).J("cZ<1>"))},
giA:function(a){var s=this,r=H.S(s)
return H.nV(s.ga5(s),new H.iH(s),r.c,r.Q[1])},
ck:function(a,b){var s=this.b
if(s==null)return!1
return this.f1(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bv(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bv(p,b)
q=r==null?n:r.b
return q}else return o.i_(b)},
i_:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.df(p,q.ea(a))
r=q.eb(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d6(s==null?q.b=q.c7():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d6(r==null?q.c=q.c7():r,b,c)}else q.i0(b,c)},
i0:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c7()
s=p.ea(a)
r=p.df(o,s)
if(r==null)p.ca(o,s,[p.c8(a,b)])
else{q=p.eb(r,a)
if(q>=0)r[q].b=b
else r.push(p.c8(a,b))}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aF(s))
r=r.c}},
d6:function(a,b,c){var s=this.bv(a,b)
if(s==null)this.ca(a,b,this.c8(b,c))
else s.b=c},
fc:function(){this.r=this.r+1&67108863},
c8:function(a,b){var s,r=this,q=new H.iK(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fc()
return q},
ea:function(a){return J.kW(a)&0x3ffffff},
eb:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
i:function(a){return P.l7(this)},
bv:function(a,b){return a[b]},
df:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
f5:function(a,b){delete a[b]},
f1:function(a,b){return this.bv(a,b)!=null},
c7:function(){var s="<non-identifier-key>",r=Object.create(null)
this.ca(r,s,r)
this.f5(r,s)
return r}}
H.iH.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).J("2(1)")}}
H.iK.prototype={}
H.cZ.prototype={
gl:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.eI(s,s.r)
r.c=s.e
return r}}
H.eI.prototype={
gw:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kM.prototype={
$1:function(a){return this.a(a)},
$S:41}
H.kN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:48}
H.kO.prototype={
$1:function(a){return this.a(a)},
$S:40}
H.eE.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im3:1}
H.db.prototype={$idb:1}
H.a1.prototype={$ia1:1}
H.c6.prototype={
gl:function(a){return a.length},
$iy:1}
H.bG.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b6(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$ip:1}
H.dc.prototype={
m:function(a,b,c){H.b6(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$ip:1}
H.eR.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eV.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.dd.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.bH.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b6(b,a,a.length)
return a[b]},
$ibH:1,
$ice:1}
H.dO.prototype={}
H.dP.prototype={}
H.dQ.prototype={}
H.dR.prototype={}
H.au.prototype={
J:function(a){return H.hH(v.typeUniverse,this,a)},
be:function(a){return H.oO(v.typeUniverse,this,a)}}
H.h5.prototype={}
H.h1.prototype={
i:function(a){return this.a}}
H.e_.prototype={}
P.k6.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:29}
P.k5.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
P.k7.prototype={
$0:function(){this.a.$0()},
$S:10}
P.k8.prototype={
$0:function(){this.a.$0()},
$S:10}
P.dZ.prototype={
eP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cu(new P.kp(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cu(new P.ko(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$ijA:1}
P.kp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:4}
P.ko.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eH(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.cp.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.bP.prototype={
gw:function(a){var s=this.c
if(s==null)return this.b
return s.gw(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cp){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.az(s)
if(o instanceof P.bP){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dW.prototype={
gR:function(a){return new P.bP(this.a())}}
P.fP.prototype={}
P.cc.prototype={}
P.fj.prototype={}
P.kw.prototype={}
P.kG.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:4}
P.kd.prototype={
is:function(a){var s,r,q,p=null
try{if(C.f===$.aO){a.$0()
return}P.pK(p,p,this,a)}catch(q){s=H.ap(q)
r=H.lv(q)
P.mO(p,p,this,s,r)}},
it:function(a,b){var s,r,q,p=null
try{if(C.f===$.aO){a.$1(b)
return}P.pL(p,p,this,a,b)}catch(q){s=H.ap(q)
r=H.lv(q)
P.mO(p,p,this,s,r)}},
iu:function(a,b){return this.it(a,b,t.A)},
hF:function(a){return new P.ke(this,a)},
dM:function(a,b){return new P.kf(this,a,b)}}
P.ke.prototype={
$0:function(){return this.a.is(this.b)},
$S:4}
P.kf.prototype={
$1:function(a){return this.a.iu(this.b,a)},
$S:function(){return this.c.J("~(0)")}}
P.dK.prototype={
gR:function(a){var s=new P.dL(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f0(b)
return r}},
f0:function(a){var s=this.d
if(s==null)return!1
return this.bZ(s[this.bV(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d7(s==null?q.b=P.lf():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d7(r==null?q.c=P.lf():r,b)}else return q.eT(0,b)},
eT:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lf()
s=q.bV(b)
r=p[s]
if(r==null)p[s]=[q.bU(b)]
else{if(q.bZ(r,b)>=0)return!1
r.push(q.bU(b))}return!0},
S:function(a,b){if((b&1073741823)===b)return this.ha(this.c,b)
else return this.h9(0,b)},
h9:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bV(b)
r=n[s]
q=o.bZ(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dB(p)
return!0},
d7:function(a,b){if(a[b]!=null)return!1
a[b]=this.bU(b)
return!0},
ha:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dB(s)
delete a[b]
return!0},
d8:function(){this.r=this.r+1&1073741823},
bU:function(a){var s,r=this,q=new P.kc(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d8()
return q},
dB:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d8()},
bV:function(a){return J.kW(a)&1073741823},
bZ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1}}
P.kc.prototype={}
P.dL.prototype={
gw:function(a){return H.S(this).c.a(this.d)},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aF(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cU.prototype={}
P.iL.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:11}
P.d0.prototype={$in:1,$ih:1,$ip:1}
P.j.prototype={
gR:function(a){return new H.bh(a,this.gl(a))},
I:function(a,b){return this.h(a,b)},
C:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aF(a))}},
gbC:function(a){return this.gl(a)===0},
ix:function(a,b){var s,r,q,p,o=this
if(o.gbC(a)){s=J.l2(0,H.b7(a).J("j.E"))
return s}r=o.h(a,0)
q=P.eJ(o.gl(a),r,!0,H.b7(a).J("j.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
iw:function(a){return this.ix(a,!0)},
hS:function(a,b,c,d){var s
H.b7(a).J("j.E").a(d)
P.bk(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l1(a,"[","]")}}
P.d3.prototype={}
P.iP.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.x(a)
r.a=s+": "
r.a+=H.x(b)},
$S:31}
P.K.prototype={
C:function(a,b){var s,r,q
for(s=J.az(this.ga5(a)),r=H.b7(a).J("K.V");s.v();){q=s.gw(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aQ(this.ga5(a))},
i:function(a){return P.l7(a)},
$iG:1}
P.hI.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.d4.prototype={
h:function(a,b){return J.lC(this.a,b)},
m:function(a,b,c){J.kV(this.a,b,c)},
C:function(a,b){J.eg(this.a,b)},
gl:function(a){return J.aQ(this.a)},
i:function(a){return J.cz(this.a)},
$iG:1}
P.ci.prototype={}
P.dk.prototype={
ab:function(a,b){var s
for(s=J.az(b);s.v();)this.n(0,s.gw(s))},
i:function(a){return P.l1(this,"{","}")},
I:function(a,b){var s,r,q,p,o="index"
H.pX(b,o,t.S)
P.m2(b,o)
for(s=P.oy(this,this.r),r=H.S(s).c,q=0;s.v();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.M(b,this,o,null,q))}}
P.dS.prototype={$in:1,$ih:1}
P.dM.prototype={}
P.e3.prototype={}
P.e5.prototype={}
P.jT.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ap(r)}return null},
$S:26}
P.jS.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ap(r)}return null},
$S:26}
P.i5.prototype={
i6:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bk(a3,a4,a2.length)
s=$.nm()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.D(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kL(C.a.D(a2,k))
g=H.kL(C.a.D(a2,k+1))
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
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a_("")
d=o}else d=o
c=d.a+=C.a.u(a2,p,q)
d.a=c+H.at(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.u(a2,p,a4)
d=r.length
if(n>=0)P.lG(a2,m,a4,n,l,d)
else{b=C.c.br(d-1,4)+1
if(b===1)throw H.c(P.a7(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b4(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lG(a2,m,a4,n,l,a)
else{b=C.c.br(a,4)
if(b===1)throw H.c(P.a7(a0,a2,a4))
if(b>1)a2=C.a.b4(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i6.prototype={}
P.en.prototype={}
P.ep.prototype={}
P.iq.prototype={}
P.iD.prototype={
i:function(a){return this.a}}
P.iC.prototype={
f2:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
if(o>b)n.a+=C.a.u(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.u(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jQ.prototype={
ghR:function(){return C.Q}}
P.jU.prototype={
cl:function(a){var s,r,q,p=P.bk(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.ku(r)
if(q.f7(a,0,p)!==p){C.a.V(a,p-1)
q.cd()}return new Uint8Array(r.subarray(0,H.p6(0,q.b,s)))}}
P.ku.prototype={
cd:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hy:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cd()
return!1}},
f7:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hy(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cd()}else if(p<=2047){o=l.b
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
P.jR.prototype={
cl:function(a){var s=this.a,r=P.om(s,a,0,null)
if(r!=null)return r
return new P.kt(s).hJ(a,0,null,!0)}}
P.kt.prototype={
hJ:function(a,b,c,d){var s,r,q,p,o=this,n=P.bk(b,c,J.aQ(a))
if(b===n)return""
s=P.p2(a,b,n)
r=o.bW(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.p3(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
bW:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.aa(b+c,2)
r=q.bW(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bW(a,s,c,d)}return q.hN(a,b,c,d)},
hN:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a_(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.at(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.at(j)
break
case 65:g.a+=H.at(j);--f
break
default:p=g.a+=H.at(j)
g.a=p+H.at(j)
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
g.a+=H.at(a[l])}else g.a+=P.fl(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.at(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
ao:function(a,b){return C.c.ao(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.aY(s,30))&1073741823},
i:function(a){var s=this,r=P.nH(H.o5(s)),q=P.es(H.o3(s)),p=P.es(H.o_(s)),o=P.es(H.o0(s)),n=P.es(H.o2(s)),m=P.es(H.o4(s)),l=P.nI(H.o1(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bB.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
ao:function(a,b){return C.c.ao(this.a,b.a)},
i:function(a){var s,r,q,p=new P.im(),o=this.a
if(o<0)return"-"+new P.bB(0-o).i(0)
s=p.$1(C.c.aa(o,6e7)%60)
r=p.$1(C.c.aa(o,1e6)%60)
q=new P.il().$1(o%1e6)
return""+C.c.aa(o,36e8)+":"+s+":"+r+"."+q}}
P.il.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.im.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.J.prototype={}
P.ej.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.it(s)
return"Assertion failed"}}
P.fz.prototype={}
P.eW.prototype={
i:function(a){return"Throw of null."}}
P.aA.prototype={
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbY()+o+m
if(!q.a)return l
s=q.gbX()
r=P.it(q.b)
return l+s+": "+r}}
P.dj.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.eA.prototype={
gbY:function(){return"RangeError"},
gbX:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fG.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.it(s)+"."}}
P.eZ.prototype={
i:function(a){return"Out of Memory"},
$iJ:1}
P.dn.prototype={
i:function(a){return"Stack Overflow"},
$iJ:1}
P.eq.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h2.prototype={
i:function(a){return"Exception: "+this.a}}
P.iz.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
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
i=""}h=C.a.u(d,k,l)
return f+j+h+i+"\n"+C.a.L(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.h.prototype={
bN:function(a,b){return new H.b5(this,b,H.S(this).J("b5<h.E>"))},
gl:function(a){var s,r=this.gR(this)
for(s=0;r.v();)++s
return s},
gaQ:function(a){var s,r=this.gR(this)
if(!r.v())throw H.c(H.iF())
s=r.gw(r)
if(r.v())throw H.c(H.nM())
return s},
I:function(a,b){var s,r,q
P.m2(b,"index")
for(s=this.gR(this),r=0;s.v();){q=s.gw(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.nL(this,"(",")")}}
P.eB.prototype={}
P.ai.prototype={
gF:function(a){return P.N.prototype.gF.call(C.V,this)},
i:function(a){return"null"}}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gF:function(a){return H.dh(this)},
i:function(a){return"Instance of '"+H.di(this)+"'"},
toString:function(){return this.i(this)}}
P.a_.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jO.prototype={
$2:function(a,b){var s,r,q,p=C.a.e9(b,"=")
if(p===-1){if(b!=="")J.kV(a,P.lo(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ai(b,p+1)
q=this.a
J.kV(a,P.lo(s,0,s.length,q,!0),P.lo(r,0,r.length,q,!0))}return a},
$S:42}
P.jL.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.jM.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:49}
P.jN.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.hX(C.a.u(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:59}
P.bQ.prototype={
gcc:function(){var s,r,q,p=this,o=p.x
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
else o=H.i(H.l6("_text"))}return o},
gF:function(a){var s=this,r=s.z
if(r==null){r=C.a.gF(s.gcc())
if(s.z==null)s.z=r
else r=H.i(H.l6("hashCode"))}return r},
gcN:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ci(P.mi(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.i(H.l6("queryParameters"))}return r},
geu:function(){return this.b},
gcB:function(a){var s=this.c
if(s==null)return""
if(C.a.a3(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbH:function(a){var s=this.d
return s==null?P.mC(this.a):s},
gcM:function(a){var s=this.f
return s==null?"":s},
ge4:function(){var s=this.r
return s==null?"":s},
en:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a3(s,"/"))s="/"+s
q=s
p=P.lm(null,0,0,b)
return new P.bQ(n,l,j,k,q,p,o.r)},
ge5:function(){return this.c!=null},
ge8:function(){return this.f!=null},
ge6:function(){return this.r!=null},
i:function(a){return this.gcc()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbO())if(q.c!=null===b.ge5())if(q.b===b.geu())if(q.gcB(q)===b.gcB(b))if(q.gbH(q)===b.gbH(b))if(q.e===b.gel(b)){s=q.f
r=s==null
if(!r===b.ge8()){if(r)s=""
if(s===b.gcM(b)){s=q.r
r=s==null
if(!r===b.ge6()){if(r)s=""
s=s===b.ge4()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifK:1,
gbO:function(){return this.a},
gel:function(a){return this.e}}
P.kr.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ks(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ks(C.h,b,C.e,!0)}},
$S:30}
P.kq.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.az(b),r=this.a;s.v();)r.$2(a,s.gw(s))},
$S:5}
P.jK.prototype={
ges:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bB(s,"?",m)
q=s.length
if(r>=0){p=P.e4(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fV("data","",n,n,P.e4(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kA.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a0.hS(s,0,96,b)
return s},
$S:43}
P.kB.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:16}
P.kC.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:16}
P.hn.prototype={
ge5:function(){return this.c>0},
ge7:function(){return this.c>0&&this.d+1<this.e},
ge8:function(){return this.f<this.r},
ge6:function(){return this.r<this.a.length},
gbO:function(){var s=this.x
return s==null?this.x=this.f_():s},
f_:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a3(r.a,"http"))return"http"
if(q===5&&C.a.a3(r.a,"https"))return"https"
if(s&&C.a.a3(r.a,"file"))return"file"
if(q===7&&C.a.a3(r.a,"package"))return"package"
return C.a.u(r.a,0,q)},
geu:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcB:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbH:function(a){var s,r=this
if(r.ge7())return P.hX(C.a.u(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a3(r.a,"http"))return 80
if(s===5&&C.a.a3(r.a,"https"))return 443
return 0},
gel:function(a){return C.a.u(this.a,this.e,this.f)},
gcM:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
ge4:function(){var s=this.r,r=this.a
return s<r.length?C.a.ai(r,s+1):""},
gcN:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.ci(P.mi(s.gcM(s)),t.dw)},
en:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbO(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.ge7()?n.gbH(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a3(r,"/"))r="/"+r
p=P.lm(m,0,0,b)
q=n.r
o=q<j.length?C.a.ai(j,q+1):m
return new P.bQ(l,i,s,h,r,p,o)},
gF:function(a){var s=this.y
return s==null?this.y=C.a.gF(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifK:1}
P.fV.prototype={}
W.u.prototype={}
W.i_.prototype={
gl:function(a){return a.length}}
W.eh.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ei.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bU.prototype={$ibU:1}
W.bw.prototype={$ibw:1}
W.bx.prototype={$ibx:1}
W.bz.prototype={
cX:function(a,b,c){if(c!=null)return a.getContext(b,P.mT(c))
return a.getContext(b)},
ew:function(a,b){return this.cX(a,b,null)},
$ibz:1}
W.cC.prototype={$icC:1}
W.aB.prototype={
gl:function(a){return a.length}}
W.id.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cI.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ie.prototype={}
W.ar.prototype={}
W.aT.prototype={}
W.ig.prototype={
gl:function(a){return a.length}}
W.ih.prototype={
gl:function(a){return a.length}}
W.ii.prototype={
gl:function(a){return a.length}}
W.bd.prototype={$ibd:1}
W.ij.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cK.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.cL.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gat(a))+" x "+H.x(this.gaq(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aP(b)
if(s===r.gbE(b)){s=a.top
s.toString
s=s===r.gbK(b)&&this.gat(a)===r.gat(b)&&this.gaq(a)===r.gaq(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.mt(r,C.d.gF(s),C.d.gF(this.gat(a)),C.d.gF(this.gaq(a)))},
gdN:function(a){var s=a.bottom
s.toString
return s},
gdg:function(a){return a.height},
gaq:function(a){var s=this.gdg(a)
s.toString
return s},
gbE:function(a){var s=a.left
s.toString
return s},
gcS:function(a){var s=a.right
s.toString
return s},
gbK:function(a){var s=a.top
s.toString
return s},
gdD:function(a){return a.width},
gat:function(a){var s=this.gdD(a)
s.toString
return s},
$iag:1}
W.eu.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.ik.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fS.prototype={
gbC:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gR:function(a){var s=this.iw(this)
return new J.ah(s,s.length)}}
W.A.prototype={
ga4:function(a){return new W.h_(a)},
gbl:function(a){var s=a.children
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
return new P.ag(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
ap:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lO
if(s==null){s=H.b([],t.r)
r=new W.df(s)
s.push(W.ms(null))
s.push(W.mx())
$.lO=r
d=r}else d=s
s=$.lN
if(s==null){s=new W.hJ(d)
$.lN=s
c=s}else{s.a=d
c=s}}if($.be==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.be=r
r=r.createRange()
r.toString
$.kZ=r
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
s=!C.b.A(C.Y,s)}else s=!1
if(s){$.kZ.selectNodeContents(q)
s=$.kZ
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.be.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.be.body)J.lE(q)
c.cY(p)
document.adoptNode(p).toString
return p},
hL:function(a,b,c){return this.ap(a,b,c,null)},
ex:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ap(a,b,null,null))
s.toString},
gep:function(a){var s=a.tagName
s.toString
return s},
$iA:1}
W.io.prototype={
$1:function(a){return t.h.b(a)},
$S:17}
W.m.prototype={$im:1}
W.e.prototype={
hA:function(a,b,c,d){if(c!=null)this.eV(a,b,c,!1)},
eV:function(a,b,c,d){return a.addEventListener(b,H.cu(c,1),!1)},
$ie:1}
W.al.prototype={$ial:1}
W.c_.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1,
$ic_:1}
W.ev.prototype={
gl:function(a){return a.length}}
W.ex.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.iB.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.bE.prototype={
gdT:function(a){var s=a.data
s.toString
return s},
$ibE:1}
W.c1.prototype={$ic1:1}
W.bF.prototype={$ibF:1}
W.iN.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j3.prototype={
gl:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.eO.prototype={
h:function(a,b){return P.bs(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.C(a,new W.j4(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
W.j4.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eP.prototype={
h:function(a,b){return P.bs(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.C(a,new W.j5(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
W.j5.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aI.prototype={$iaI:1}
W.eQ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.am.prototype={$iam:1}
W.a6.prototype={
gaQ:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.l9("No elements"))
if(r>1)throw H.c(P.l9("More than one element"))
s=s.firstChild
s.toString
return s},
ab:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gR:function(a){var s=this.a.childNodes
return new W.cQ(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.v.prototype={
im:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
iq:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nq(s,b,a)}catch(q){H.ap(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eD(a):s},
he:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iv:1}
W.de.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.aK.prototype={
gl:function(a){return a.length},
$iaK:1}
W.f2.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.f7.prototype={
h:function(a,b){return P.bs(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.C(a,new W.jg(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
W.jg.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f9.prototype={
gl:function(a){return a.length}}
W.av.prototype={$iav:1}
W.fd.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.aM.prototype={$iaM:1}
W.fe.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.aN.prototype={
gl:function(a){return a.length},
$iaN:1}
W.fi.prototype={
h:function(a,b){return a.getItem(H.ky(b))},
m:function(a,b,c){a.setItem(b,c)},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga5:function(a){var s=H.b([],t.s)
this.C(a,new W.jp(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iG:1}
W.jp.prototype={
$2:function(a,b){return this.a.push(a)},
$S:61}
W.an.prototype={$ian:1}
W.bm.prototype={$ibm:1}
W.dp.prototype={
ap:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bR(a,b,c,d)
s=W.nJ("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a6(r).ab(0,new W.a6(s))
return r}}
W.fm.prototype={
ap:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bR(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.D.ap(r,b,c,d))
r=new W.a6(r.gaQ(r))
new W.a6(s).ab(0,new W.a6(r.gaQ(r)))
return s}}
W.fn.prototype={
ap:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bR(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.D.ap(r,b,c,d))
new W.a6(s).ab(0,new W.a6(r.gaQ(r)))
return s}}
W.cd.prototype={$icd:1}
W.aw.prototype={$iaw:1}
W.aj.prototype={$iaj:1}
W.fp.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.fq.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.jz.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ax.prototype={$iax:1}
W.bM.prototype={$ibM:1}
W.fx.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.jE.prototype={
gl:function(a){return a.length}}
W.b4.prototype={}
W.jP.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fM.prototype={
gl:function(a){return a.length}}
W.bo.prototype={
ghP:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.z("deltaY is not supported"))},
ghO:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.z("deltaX is not supported"))},
$ibo:1}
W.cm.prototype={
hf:function(a,b){var s=a.requestAnimationFrame(H.cu(b,1))
s.toString
return s},
f6:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cn.prototype={$icn:1}
W.fT.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.dH.prototype={
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
if(t.q.b(b)){s=a.left
s.toString
r=J.aP(b)
if(s===r.gbE(b)){s=a.top
s.toString
if(s===r.gbK(b)){s=a.width
s.toString
if(s===r.gat(b)){s=a.height
s.toString
r=s===r.gaq(b)
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
return W.mt(p,s,r,C.d.gF(q))},
gdg:function(a){return a.height},
gaq:function(a){var s=a.height
s.toString
return s},
gdD:function(a){return a.width},
gat:function(a){var s=a.width
s.toString
return s}}
W.h6.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.dN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.hq.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.hx.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iy:1,
$ih:1,
$ip:1}
W.fQ.prototype={
C:function(a,b){var s,r,q,p,o
for(s=this.ga5(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.t)(s),++p){o=s[p]
b.$2(o,H.ky(q.getAttribute(o)))}},
ga5:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h_.prototype={
h:function(a,b){return this.a.getAttribute(H.ky(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga5(this).length}}
W.l_.prototype={}
W.dI.prototype={
hx:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nr(s,this.c,r,!1)}}}
W.k9.prototype={
$1:function(a){return this.a.$1(a)},
$S:2}
W.le.prototype={}
W.co.prototype={
eK:function(a){var s
if($.dJ.gbC($.dJ)){for(s=0;s<262;++s)$.dJ.m(0,C.X[s],W.q6())
for(s=0;s<12;++s)$.dJ.m(0,C.n[s],W.q7())}},
aZ:function(a){return $.nn().A(0,W.cN(a))},
az:function(a,b,c){var s=$.dJ.h(0,W.cN(a)+"::"+b)
if(s==null)s=$.dJ.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaJ:1}
W.L.prototype={
gR:function(a){return new W.cQ(a,this.gl(a))}}
W.df.prototype={
aZ:function(a){return C.b.dI(this.a,new W.j8(a))},
az:function(a,b,c){return C.b.dI(this.a,new W.j7(a,b,c))},
$iaJ:1}
W.j8.prototype={
$1:function(a){return a.aZ(this.a)},
$S:18}
W.j7.prototype={
$1:function(a){return a.az(this.a,this.b,this.c)},
$S:18}
W.dT.prototype={
eO:function(a,b,c,d){var s,r,q
this.a.ab(0,c)
s=b.bN(0,new W.kh())
r=b.bN(0,new W.ki())
this.b.ab(0,s)
q=this.c
q.ab(0,C.w)
q.ab(0,r)},
aZ:function(a){return this.a.A(0,W.cN(a))},
az:function(a,b,c){var s=this,r=W.cN(a),q=s.c
if(q.A(0,r+"::"+b))return s.d.hD(c)
else if(q.A(0,"*::"+b))return s.d.hD(c)
else{q=s.b
if(q.A(0,r+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,r+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iaJ:1}
W.kh.prototype={
$1:function(a){return!C.b.A(C.n,a)},
$S:19}
W.ki.prototype={
$1:function(a){return C.b.A(C.n,a)},
$S:19}
W.hz.prototype={
az:function(a,b,c){if(this.eG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.kn.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:39}
W.hy.prototype={
aZ:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cN(a)==="foreignObject")return!1
if(s)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aZ(a)},
$iaJ:1}
W.cQ.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lC(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gw:function(a){return H.S(this).c.a(this.d)}}
W.kg.prototype={}
W.hJ.prototype={
cY:function(a){var s,r=new W.kv(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bi:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lE(a)
else b.removeChild(a).toString},
hi:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nt(a)
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
o=p}l=o}catch(n){H.ap(n)}r="element unprintable"
try{r=J.cz(a)}catch(n){H.ap(n)}try{q=W.cN(a)
this.hh(a,b,l,r,q,k,j)}catch(n){if(H.ap(n) instanceof P.aA)throw n
else{this.bi(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hh:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bi(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aZ(a)){m.bi(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.az(a,"is",g)){m.bi(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga5(f)
q=H.b(s.slice(0),H.kx(s))
for(p=f.ga5(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nw(o)
H.ky(o)
if(!r.az(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cY(s)}}}
W.kv.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hi(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bi(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.l9("Corrupt HTML")
throw H.c(n)}}catch(p){H.ap(p)
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
W.hA.prototype={}
W.hB.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hK.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
W.hR.prototype={}
W.hS.prototype={}
W.hT.prototype={}
P.kj.prototype={
cz:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bM:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kD(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Z)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jJ("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.I.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cz(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.eg(a,new P.kl(m,n))
return m.a}if(t.aH.b(a)){s=n.cz(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hK(a,s)}if(t.eH.b(a)){s=n.cz(a)
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
n.hY(a,new P.km(m,n))
return m.b}throw H.c(P.jJ("structured clone of other type"))},
hK:function(a,b){var s,r,q=J.cx(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bM(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kl.prototype={
$2:function(a,b){this.a.a[a]=this.b.bM(b)},
$S:11}
P.km.prototype={
$2:function(a,b){this.a.b[a]=this.b.bM(b)},
$S:34}
P.e0.prototype={$ibE:1,
gdT:function(a){return this.a}}
P.kz.prototype={
$1:function(a){this.a.push(P.mK(a))},
$S:33}
P.kH.prototype={
$2:function(a,b){this.a[a]=P.mK(b)},
$S:11}
P.kk.prototype={
hY:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.ew.prototype={
gbg:function(){var s=this.b,r=H.S(s)
return new H.aY(new H.b5(s,new P.ix(),r.J("b5<j.E>")),new P.iy(),r.J("aY<j.E,A>"))},
C:function(a,b){C.b.C(P.iM(this.gbg(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbg()
J.nv(s.b.$1(J.hZ(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aQ(this.gbg().a)},
h:function(a,b){var s=this.gbg()
return s.b.$1(J.hZ(s.a,b))},
gR:function(a){var s=P.iM(this.gbg(),!1,t.h)
return new J.ah(s,s.length)}}
P.ix.prototype={
$1:function(a){return t.h.b(a)},
$S:17}
P.iy.prototype={
$1:function(a){return t.h.a(a)},
$S:28}
P.hl.prototype={
gcS:function(a){return this.$ti.c.a(this.a+this.c)},
gdN:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aP(b)
if(s===r.gbE(b)){q=o.b
if(q===r.gbK(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcS(b)&&p.a(q+o.d)===r.gdN(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.oh(H.jq(H.jq(H.jq(H.jq(0,q),o),r),p))}}
P.ag.prototype={
gbE:function(a){return this.a},
gbK:function(a){return this.b},
gat:function(a){return this.c},
gaq:function(a){return this.d}}
P.aX.prototype={$iaX:1}
P.eH.prototype={
gl:function(a){var s=a.length
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.b0.prototype={$ib0:1}
P.eX.prototype={
gl:function(a){var s=a.length
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.jb.prototype={
gl:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.fk.prototype={
gl:function(a){var s=a.length
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.o.prototype={
gbl:function(a){return new P.ew(a,new W.a6(a))},
ap:function(a,b,c,d){var s,r,q,p,o=H.b([],t.r)
o.push(W.ms(null))
o.push(W.mx())
o.push(new W.hy())
c=new W.hJ(new W.df(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.q.hL(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a6(q)
p=r.gaQ(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b2.prototype={$ib2:1}
P.fy.prototype={
gl:function(a){var s=a.length
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.h9.prototype={}
P.ha.prototype={}
P.hh.prototype={}
P.hi.prototype={}
P.hv.prototype={}
P.hw.prototype={}
P.hE.prototype={}
P.hF.prototype={}
P.i2.prototype={
gl:function(a){return a.length}}
P.el.prototype={
h:function(a,b){return P.bs(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.C(a,new P.i3(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
P.i3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.em.prototype={
gl:function(a){return a.length}}
P.bb.prototype={}
P.eY.prototype={
gl:function(a){return a.length}}
P.fR.prototype={}
P.c9.prototype={
er:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.hV(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.I.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.pZ(g))
return}if(t.R.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bT("Incorrect number or type of arguments"))},
eq:function(a,b,c,d,e,f,g){return this.er(a,b,c,d,e,f,g,null,null,null)},
$ic9:1}
P.ff.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=P.bs(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.hr.prototype={}
P.hs.prototype={}
K.aR.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaZ:1}
K.cS.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.t)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaZ:1}
K.af.prototype={
aK:function(a,b){return!this.eC(0,b)},
i:function(a){return"!["+this.bS(0)+"]"}}
K.f4.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.at(this.a),r=H.at(this.b)
return s+".."+r},
$iaZ:1}
K.r.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.U(t.fX)
for(r=new H.bh(a,a.gl(a)),q=H.S(r).c;r.v();)s.m(0,q.a(r.d),!0)
p=P.iM(s.ga5(s),!0,t.S)
C.b.eB(p)
this.a=p},
aK:function(a,b){return C.b.A(this.a,b)},
i:function(a){return P.fl(this.a,0,null)},
$iaZ:1}
L.fg.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dr(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hT:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
dA:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.A(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga5(s)}s=J.az(s==null?H.b([],t.s):s)
for(;s.v();){r=s.gw(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.A(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.t)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bS(0))}return l.charCodeAt(0)==0?l:l}}
L.fv.prototype={
i:function(a){var s=H.lz(this.b,"\n","\\n"),r=H.lz(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fw.prototype={
aN:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.t)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jB.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fg(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
P:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fw(a,P.R(s,s))
r.m(0,a,q)}return q},
cU:function(a){return this.iz(a)},
iz:function(a){var s=this
return P.pn(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cU(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cO(a2,0)
else{if(!r.v()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hT(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fl(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.i(P.z("removeRange"))
P.bk(0,i,a1.length)
a1.splice(0,i-0)
C.b.ab(a2,a1)
a1=H.b([],b)
a0=H.b([],b)
c=s.d
q=!m.A(0,l.a)?7:8
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
if(g!=null){e=P.fl(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fv(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.A(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.ow()
case 1:return P.ox(o)}}},t.bJ)},
i:function(a){var s,r=new P.a_(""),q=this.d
if(q!=null)r.a=""+(q.dA()+"\n")
for(q=this.a,q=q.giA(q),q=q.gR(q);q.v();){s=q.gw(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.dA())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dr.prototype={
i:function(a){return this.b.b+": "+this.bS(0)}}
O.ad.prototype={
cZ:function(a,b,c){this.b=b
this.c=a},
b9:function(a,b){return this.cZ(a,null,b)},
dk:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
d2:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.ah(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.S(q).J("w<ad.T>")
if(q.dk(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.d2(r,H.b([b],p))}},
ab:function(a,b){var s,r
if(this.dk(b)){s=this.a
r=s.length
C.b.ab(s,b)
this.d2(r,b)}},
$ih:1}
O.da.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.E():s},
aS:function(){var s=this.b
return s==null?null:s.B(null)},
ga6:function(a){var s=this.a
if(s.length>0)return C.b.gaB(s)
else return V.ae()},
bJ:function(a){this.a.push(a)
this.aS()},
aM:function(){var s=this.a
if(s.length>0){s.pop()
this.aS()}}}
E.i7.prototype={}
E.bC.prototype={
sbP:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().S(0,s.gei())
if(b!=null)b.gt().n(0,s.gei())
s.bF(new D.B("shape",r,b))}},
ah:function(a,b){var s,r
for(s=this.y.a,s=new J.ah(s,s.length),r=H.S(s).c;s.v();)r.a(s.d).ah(0,b)},
ag:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.ga6(o))
o.aS()
a.cL(p.f)
s=C.b.gaB(a.dy)
if(p.d!=null)if(s!=null)s.cR(a,p)
for(r=p.y.a,r=new J.ah(r,r.length),q=H.S(r).c;r.v();)q.a(r.d).ag(a)
a.cK()
o.aM()},
bF:function(a){var s=this.z
return s==null?null:s.B(a)},
ak:function(){return this.bF(null)},
ej:function(a){this.e=null
this.bF(a)},
ic:function(){return this.ej(null)},
eh:function(a){return this.bF(a)},
i9:function(){return this.eh(null)},
i8:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.geg(),q=t.a,p=0;p<b.length;b.length===s||(0,H.t)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bZ()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.ak()},
ib:function(a,b){var s,r
for(s=b.gR(b),r=this.geg();s.v();)s.gw(s).gt().S(0,r)
this.ak()},
i:function(a){return"Unnamed entity"}}
E.bW.prototype={
i:function(a){return this.b}}
E.c7.prototype={
i:function(a){return this.b}}
E.h0.prototype={}
E.jc.prototype={
eJ:function(a,b){var s=this
s.cy.gt().n(0,new E.jd(s))
s.db.gt().n(0,new E.je(s))
s.dx.gt().n(0,new E.jf(s))},
gil:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga6(q).L(0,s.ga6(s))
q=s}return q},
gem:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.gil().L(0,r.ga6(r))}return r},
cL:function(a){var s=this.dy
return s.push(a==null?C.b.gaB(s):a)},
cK:function(){var s=this.dy
if(s.length>1)s.pop()},
ce:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.ck(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.jd.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.je.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.jf.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.fu.prototype={
d5:function(a){this.eo()},
d4:function(){return this.d5(null)},
ghZ:function(){var s,r=this,q=Date.now(),p=C.c.aa(P.lM(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Z(q,!1)
return s/p},
dn:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cA(r*o)
r=s.clientHeight
r.toString
p=C.d.cA(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mc(C.m,this.gir())}},
eo:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.F.f6(s)
r=W.mQ(new E.jy(this),t.H)
r.toString
C.F.hf(s,r)}},
ip:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dn()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=P.lM(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aS()
p=q.db
C.b.sl(p.a,0)
p.aS()
p=q.dx
C.b.sl(p.a,0)
p.aS()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.ag(q)}q=n.Q
if(q!=null)q.B(null)}catch(o){s=H.ap(o)
r=H.lv(o)
P.ly("Error: "+H.x(s))
P.ly("Stack: "+H.x(r))
throw H.c(s)}}}
E.jy.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ip()}},
$S:32}
Z.fN.prototype={}
Z.bX.prototype={
Z:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ap(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.dG.prototype={}
Z.by.prototype={
aw:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
Z:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].Z(a)}},
al:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
ag:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.di(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.t)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.cT.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.di(this.c)+"'")+"]"}}
Z.bn.prototype={
gd_:function(a){var s=this.a,r=(s&$.aq().a)!==0?3:0
if((s&$.bv().a)!==0)r+=3
if((s&$.bu().a)!==0)r+=3
if((s&$.b9().a)!==0)r+=2
if((s&$.bS().a)!==0)r+=3
if((s&$.ee().a)!==0)r+=3
if((s&$.ef().a)!==0)r+=4
if((s&$.cy().a)!==0)++r
return(s&$.bt().a)!==0?r+4:r},
hE:function(a){var s,r=$.aq(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ee()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ef()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cy()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0)if(s===a)return r
return $.nl()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.aq().a)!==0)s.push("Pos")
if((r&$.bv().a)!==0)s.push("Norm")
if((r&$.bu().a)!==0)s.push("Binm")
if((r&$.b9().a)!==0)s.push("Txt2D")
if((r&$.bS().a)!==0)s.push("TxtCube")
if((r&$.ee().a)!==0)s.push("Clr3")
if((r&$.ef().a)!==0)s.push("Clr4")
if((r&$.cy().a)!==0)s.push("Weight")
if((r&$.bt().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i9.prototype={}
D.bZ.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
S:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.S(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.S(p,b)
s=p===!0||s}return s},
B:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.Q():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.C(P.iM(p,!0,t.g8),new D.iu(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.C(r,new D.iv(s))}return!0},
co:function(){return this.B(null)},
aO:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.B(s)}}}}
D.iu.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.iv.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.Q.prototype={}
D.aU.prototype={}
D.aV.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cB.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
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
X.iI.prototype={}
X.d2.prototype={}
X.iO.prototype={
bf:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.V(o.a+b.a,o.b+b.b)
o=q.a.gb_()
s=$.a9
if(s==null)s=$.a9=new V.V(0,0)
r=q.x
q.z=new P.Z(p,!1)
q.x=n
return new X.c4(a,s,r,o,n)},
cJ:function(a,b){this.r=a.a
return!1},
bo:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bn:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.bf(a,b))
return!0},
ii:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb_()
r=this.x
Date.now()
q.B(new X.c5(new V.a5(a.a,a.b),s,r))
return!0},
fJ:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.B(new X.d2(c,q.a.gb_(),b))
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
X.j6.prototype={
c_:function(a,b,c){var s=this,r=new P.Z(Date.now(),!1),q=s.a.gb_(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c4(a,p,o,q,b)},
cJ:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.B(this.c_(a,b,!0))
return!0},
bo:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.B(r.c_(a,b,!0))
return!0},
bn:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.c_(a,b,!1))
return!0},
ij:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb_()
Date.now()
r.B(new X.c5(new V.a5(a.a,a.b),s,b))
return!0},
gdV:function(){var s=this.b
return s==null?this.b=D.E():s},
gcV:function(){var s=this.c
return s==null?this.c=D.E():s},
gef:function(){var s=this.d
return s==null?this.d=D.E():s}}
X.c5.prototype={}
X.f3.prototype={}
X.dq.prototype={}
X.jD.prototype={
bf:function(a,b){var s,r,q,p,o=this,n=new P.Z(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a9
if(r==null){r=new V.V(0,0)
$.a9=r
s=r}else s=r}r=o.a.gb_()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dq(q,p,r,s)},
ih:function(a){var s=this.b
if(s==null)return!1
s.B(this.bf(a,!0))
return!0},
ie:function(a){var s=this.c
if(s==null)return!1
s.B(this.bf(a,!0))
return!0},
ig:function(a){var s=this.d
if(s==null)return!1
s.B(this.bf(a,!1))
return!0}}
X.fL.prototype={
gb2:function(a){var s=this.b
return s==null?this.b=new X.iI(new X.a8(!1,!1,!1),P.d_(t.S)):s},
gad:function(){var s,r=this.c
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.V(0,0)
s=r}else s=r
r=this.c=new X.j6(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gar:function(){var s=this.d
if(s==null){s=$.a9
if(s==null)s=$.a9=new V.V(0,0)
s=this.d=new X.iO(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gb6:function(){var s,r=this.e
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.V(0,0)
s=r}else s=r
r=this.e=new X.jD(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gb_:function(){var s=this.a
return V.m4(0,0,C.i.gdQ(s).c,C.i.gdQ(s).d)},
da:function(a){var s,r,q,p=a.keyCode
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
aX:function(a){var s,r,q=this.gb2(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a8(p,s,r)},
cb:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb2(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a8(s,r===!0,q===!0)},
aH:function(a){var s,r,q,p
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
bh:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a5(r,s)},
c9:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.t)(r),++p){o=r[p]
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
s.push(new V.V(n-m,l-k))}return s},
aE:function(a){var s,r,q,p
if(a==null)return new X.cB(0,new X.a8(!1,!1,!1))
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
return new X.cB(s,new X.a8(r,q,p))},
c0:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fD:function(a){return this.f=!0},
fo:function(a){return this.f=!1},
fv:function(a){if(this.f&&this.c0(a))a.preventDefault()},
fH:function(a){var s,r,q=this
if(!q.f)return
s=q.da(a)
r=q.gb2(q)
r.c=s.b
r.d.n(0,s.a)},
fF:function(a){var s,r,q=this
if(!q.f)return
s=q.da(a)
r=q.gb2(q)
r.c=s.b
r.d.S(0,s.a)},
fL:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aX(a)
if(p.x){s=p.aE(a)
r=p.bh(a)
if(p.gar().cJ(s,r))a.preventDefault()
return}s=p.aE(a)
q=p.aH(a)
if(p.gad().cJ(s,q))a.preventDefault()},
fP:function(a){var s,r,q,p=this
p.aX(a)
s=p.aE(a)
if(p.x){r=p.bh(a)
if(p.gar().bo(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gad().bo(s,q))a.preventDefault()},
fB:function(a){var s,r,q,p=this
if(!p.c0(a)){p.aX(a)
s=p.aE(a)
if(p.x){r=p.bh(a)
if(p.gar().bo(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gad().bo(s,q))a.preventDefault()}},
fN:function(a){var s,r,q,p=this
p.aX(a)
s=p.aE(a)
if(p.x){r=p.bh(a)
if(p.gar().bn(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gad().bn(s,q))a.preventDefault()},
fz:function(a){var s,r,q,p=this
if(!p.c0(a)){p.aX(a)
s=p.aE(a)
if(p.x){r=p.bh(a)
if(p.gar().bn(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gad().bn(s,q))a.preventDefault()}},
fR:function(a){var s,r,q=this
q.aX(a)
s=new V.a5(C.E.ghO(a),C.E.ghP(a)).L(0,q.Q)
if(q.x){if(q.gar().ii(s))a.preventDefault()
return}r=q.aH(a)
if(q.gad().ij(s,r))a.preventDefault()},
fT:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aE(q.y)
r=q.aH(q.y)
q.gar().fJ(s,r,p)}},
h8:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cb(a)
s=r.c9(a)
if(r.gb6().ih(s))a.preventDefault()},
h4:function(a){var s
this.cb(a)
s=this.c9(a)
if(this.gb6().ie(s))a.preventDefault()},
h6:function(a){var s
this.cb(a)
s=this.c9(a)
if(this.gb6().ig(s))a.preventDefault()}}
D.bY.prototype={
aD:function(a){var s=this.r
return s==null?null:s.B(a)},
eN:function(){return this.aD(null)},
$ias:1}
D.cY.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.E():s},
ged:function(){var s=this.z
return s==null?this.z=D.E():s},
aD:function(a){var s=this.y
return s==null?null:s.B(a)},
dj:function(a){var s=this.z
return s==null?null:s.B(a)},
fI:function(){return this.dj(null)},
fV:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.t)(a),++r)if(this.eL(a[r]))return!1
return!0},
fi:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdi(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.t)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bZ()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aD(new D.aU())},
fZ:function(a,b){var s,r,q,p
for(s=b.gR(b),r=this.gdi(),q=this.e;s.v();){p=s.gw(s)
C.b.S(q,p)
p.gt().S(0,r)}this.aD(new D.aV())},
eL:function(a){var s=C.b.A(this.f,a)
return s}}
V.T.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.aD.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aD))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"},
E:function(){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.is.prototype={}
V.d9.prototype={
a1:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d9))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cw(H.b([o.a,o.d,o.r],n),3,0),l=V.cw(H.b([o.b,o.e,o.x],n),3,0),k=V.cw(H.b([o.c,o.f,o.y],n),3,0)
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
a1:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cD:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.D().toString
if(Math.abs(b3-0)<1e-9)return V.ae()
s=1/b3
r=-l
q=-a2
return V.b_((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
L:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b_(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bL:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.F(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bq:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.W(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bi))return!1
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
i:function(a){return this.E()},
N:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cw(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cw(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cw(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cw(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
E:function(){return this.N("")}}
V.V.prototype={
am:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"},
E:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.W.prototype={
W:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
aR:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
L:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
E:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.bI.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bI))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"},
E:function(){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.f6.prototype={
gaC:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f6))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.a5.prototype={
cE:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){return this.a*a.a+this.b*a.b},
L:function(a,b){return new V.a5(this.a*b,this.b*b)},
an:function(a,b){var s
$.D().toString
if(Math.abs(b-0)<1e-9){s=$.bO
return s==null?$.bO=new V.a5(0,0):s}return new V.a5(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.F.prototype={
cE:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
K:function(){var s=this,r=Math.sqrt(s.ac(s))
if(r===1)return s
return s.an(0,r)},
aJ:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.F(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
b8:function(a){return new V.F(-this.a,-this.b,-this.c)},
L:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
an:function(a,b){$.D().toString
if(Math.abs(b-0)<1e-9)return V.dF()
return new V.F(this.a/b,this.b/b,this.c/b)},
ec:function(){$.D().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.F))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
E:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
U.ib.prototype={
bT:function(a){var s=V.qp(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.E():s},
T:function(a){var s=this.y
return s==null?null:s.B(a)},
scW:function(a,b){},
scG:function(a){var s,r=this,q=r.b
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bT(s)}r.T(new D.B("maximumLocation",q,r.b))}},
scI:function(a){var s,r=this,q=r.c
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bT(s)}r.T(new D.B("minimumLocation",q,r.c))}},
saj:function(a,b){var s,r=this
b=r.bT(b)
s=r.d
$.D().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.T(new D.B("location",s,b))}},
scH:function(a){var s,r,q=this,p=q.e
$.D().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.T(new D.B("maximumVelocity",p,a))}},
sa2:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.T(new D.B("velocity",r,a))}},
scm:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.T(new D.B("dampening",s,a))}},
ah:function(a,b){var s,r,q,p=this,o=p.f
$.D().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saj(0,p.d+s*b)
o=p.x
$.D().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa2(s)}}}
U.cE.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.E():s},
b7:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.N("          ")}}
U.c0.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.E():s},
T:function(a){var s=this.e
return s==null?null:s.B(a)},
af:function(){return this.T(null)},
fg:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaW(),q=t.a,p=0;p<b.length;b.length===s||(0,H.t)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.T(new D.aU())},
fX:function(a,b){var s,r
for(s=b.gR(b),r=this.gaW();s.v();)s.gw(s).gt().S(0,r)
this.T(new D.aV())},
b7:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ah(o,o.length),n=H.S(o).c,s=null;o.v();){r=n.a(o.d)
if(r!=null){q=r.b7(0,b,c)
s=s==null?q:q.L(0,s)}}p.f=s==null?V.ae():s
o=p.e
if(o!=null)o.aO(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c0))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.Y(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia0:1}
U.a0.prototype={}
U.dC.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.E():s},
T:function(a){var s=this.cy
return s==null?null:s.B(a)},
af:function(){return this.T(null)},
bj:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gad().gdV().n(0,s.gc1())
a.gad().gef().n(0,s.gc3())
a.gad().gcV().n(0,s.gc5())
return!0},
c2:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gb2(q).c))return
s.x=s.y=!0
s.z=s.b.d},
c4:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.am(a.d)
if(s.ac(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.saj(0,-a.y.am(r).L(0,2).an(0,s.gaC()).a*2.5+p.z)
q.sa2(0)
p.Q=a.z.am(r).L(0,2).an(0,s.gaC())
p.af()},
c6:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.ac(s)>0.0001){r.b.sa2(r.Q.a*10*2.5)
r.af()}},
b7:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ah(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.b_(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia0:1}
U.dD.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.E():s},
T:function(a){var s=this.fx
return s==null?null:s.B(a)},
af:function(){return this.T(null)},
bj:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gad().gdV().n(0,q.gc1())
a.gad().gef().n(0,q.gc3())
a.gad().gcV().n(0,q.gc5())
s=a.gar()
r=s.f
s=r==null?s.f=D.E():r
s.n(0,q.gf8())
s=a.gar()
r=s.d
s=r==null?s.d=D.E():r
s.n(0,q.gfa())
s=a.gb6()
r=s.b
s=r==null?s.b=D.E():r
s.n(0,q.ghv())
s=a.gb6()
r=s.d
s=r==null?s.d=D.E():r
s.n(0,q.ght())
s=a.gb6()
r=s.c
s=r==null?s.c=D.E():r
s.n(0,q.ghr())
return!0},
aU:function(a){return new V.a5(a.a,a.b)},
c2:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c4:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.am(a.d)
if(s.ac(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aU(a.y.am(r).L(0,2).an(0,s.gaC()))
p=n.c
p.saj(0,-q.a*2.5+n.cy)
o=n.b
o.saj(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.aU(a.z.am(r).L(0,2).an(0,s.gaC()))
n.af()},
c6:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ac(s)>0.0001){r.c.sa2(-r.dx.a*10*2.5)
r.b.sa2(-r.dx.b*10*2.5)
r.af()}},
f9:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fb:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aU(a.y.am(r).L(0,2).an(0,s.gaC()))
p=n.c
p.saj(0,-q.a*2.5+n.cy)
o=n.b
o.saj(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.aU(a.z.am(r).L(0,2).an(0,s.gaC()))
n.af()},
hw:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hu:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.am(a.d)
if(s.ac(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aU(a.y.am(r).L(0,2).an(0,s.gaC()))
p=n.c
p.saj(0,-q.a*2.5+n.cy)
o=n.b
o.saj(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.aU(a.z.am(r).L(0,2).an(0,s.gaC()))
n.af()},
hs:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ac(s)>0.0001){r.c.sa2(-r.dx.a*10*2.5)
r.b.sa2(-r.dx.b*10*2.5)
r.af()}},
b7:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ah(0,s)
n=p.b
n.ah(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.b_(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.L(0,V.b_(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia0:1}
U.dE.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.E():s},
T:function(a){var s=this.r
return s==null?null:s.B(a)},
bj:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gad()
r=s.e
s=r==null?s.e=D.E():r
r=this.gfd()
s.n(0,r)
s=a.gar()
q=s.e;(q==null?s.e=D.E():q).n(0,r)
return!0},
fe:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gb2(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.T(new D.B("zoom",r,q))}},
b7:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.lW(s,s,s)}return r.f},
$ia0:1}
M.cD.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.E():s},
Y:function(a){var s=this.r
return s==null?null:s.B(a)},
bd:function(){return this.Y(null)},
h0:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gX(),q=t.a,p=0;p<b.length;b.length===s||(0,H.t)(b),++p){o=b[p].gt()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.Y(new D.aU())},
h2:function(a,b){var s,r
for(s=b.gR(b),r=this.gX();s.v();)s.gw(s).gt().S(0,r)
this.Y(new D.aV())},
ag:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ah(s,s.length),r=H.S(s).c;s.v();)r.a(s.d).ag(a)
q.f=!1},
$iaL:1}
M.cH.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.E():s},
Y:function(a){var s=this.r
return s==null?null:s.B(a)},
bd:function(){return this.Y(null)},
sbk:function(a){var s,r,q=this
if(a==null)a=new X.iE()
s=q.b
if(s!==a){if(s!=null)s.gt().S(0,q.gX())
r=q.b
q.b=a
a.gt().n(0,q.gX())
q.Y(new D.B("camera",r,q.b))}},
sbp:function(a,b){var s,r,q=this
if(b==null)b=X.lQ(null)
s=q.c
if(s!==b){if(s!=null)s.gt().S(0,q.gX())
r=q.c
q.c=b
b.gt().n(0,q.gX())
q.Y(new D.B("target",r,q.c))}},
sb5:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().S(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gX())
r.Y(new D.B("technique",s,r.d))}},
ag:function(a){var s,r=this
a.cL(r.d)
s=r.c
if(s!=null)s.Z(a)
s=r.b
if(s!=null)s.Z(a)
s=r.d
if(s!=null)s.ah(0,a)
s=r.e
s.ah(0,a)
s.ag(a)
s=r.b
if(s!=null)s.al(a)
s=r.c
if(s!=null)s.al(a)
a.cK()},
$iaL:1}
M.cO.prototype={
Y:function(a){var s=this.y
return s==null?null:s.B(a)},
bd:function(){return this.Y(null)},
fq:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gX(),q=t.a,p=0;p<b.length;b.length===s||(0,H.t)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bZ()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.Y(new D.aU())},
ft:function(a,b){var s,r
for(s=b.gR(b),r=this.gX();s.v();)s.gw(s).gt().S(0,r)
this.Y(new D.aV())},
sbk:function(a){var s,r,q=this
if(a==null)a=X.lY(null)
s=q.b
if(s!==a){if(s!=null)s.gt().S(0,q.gX())
r=q.b
q.b=a
a.gt().n(0,q.gX())
q.Y(new D.B("camera",r,q.b))}},
sbp:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().S(0,r.gX())
s=r.c
r.c=b
b.gt().n(0,r.gX())
r.Y(new D.B("target",s,r.c))}},
sb5:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().S(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gX())
r.Y(new D.B("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.E():s},
ag:function(a){var s,r,q,p=this
a.cL(p.d)
s=p.c
if(s!=null)s.Z(a)
s=p.b
if(s!=null)s.Z(a)
s=p.d
if(s!=null)s.ah(0,a)
for(s=p.e.a,r=new J.ah(s,s.length),q=H.S(r).c;r.v();)q.a(r.d).ah(0,a)
for(s=new J.ah(s,s.length),r=H.S(s).c;s.v();)r.a(s.d).ag(a)
if(p.b!=null){a.cy.aM()
a.db.aM()}s=p.c
if(s!=null)s.al(a)
a.cK()},
$iaL:1}
A.ek.prototype={}
A.i1.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hQ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cn:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aE.prototype={
gax:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aE))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.cJ.prototype={
dv:function(a,b){if(b!=null&&b.d)if(a!=null)a.ey(b)}}
A.d7.prototype={
eI:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.a_(""),d1=c9.fr
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
A.pC(c9,d0)
A.pE(c9,d0)
A.pD(c9,d0)
A.pG(c9,d0)
A.pH(c9,d0)
A.pF(c9,d0)
A.pI(c9,d0)
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
c4.cC(0,s.charCodeAt(0)==0?s:s,A.pB(c9))
c4.y=c4.ga4(c4).h(0,"posAttr")
c4.Q=c4.ga4(c4).h(0,"normAttr")
c4.z=c4.ga4(c4).h(0,"binmAttr")
c4.ch=c4.ga4(c4).h(0,"txt2DAttr")
c4.cx=c4.ga4(c4).h(0,"txtCubeAttr")
c4.cy=c4.ga4(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gH().O(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gH().O(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gH().O(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gH().O(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gH().O(0,"viewMat"))
if(c9.x1)c4.go=t.Q.a(c4.gH().O(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gH().O(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gH().O(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b1
if(s>0){c4.k2=t.w.a(c4.gH().O(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.i(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.i(P.f(c7+q+c8))
r.push(d1.a(l))}}if(c9.a.a)c4.k4=t.g.a(c4.gH().O(0,"emissionClr"))
if(c9.b.a)c4.rx=t.g.a(c4.gH().O(0,"ambientClr"))
if(c9.c.a)c4.x2=t.g.a(c4.gH().O(0,"diffuseClr"))
if(c9.d.a)c4.b1=t.g.a(c4.gH().O(0,"invDiffuseClr"))
d1=c9.e.a
if(!d1)s=!1
else s=!0
if(s){c4.dZ=t.u.a(c4.gH().O(0,"shininess"))
if(d1)c4.dY=t.g.a(c4.gH().O(0,"specularClr"))}if(c9.db){c4.e_=t.l.a(c4.gH().O(0,"envSampler"))
if(c9.r.a)c4.e0=t.g.a(c4.gH().O(0,"reflectClr"))
d1=c9.x.a
if(!d1)s=!1
else s=!0
if(s){c4.e1=t.u.a(c4.gH().O(0,"refraction"))
if(d1)c4.e2=t.g.a(c4.gH().O(0,"refractClr"))}}if(c9.y.a)c4.e3=t.u.a(c4.gH().O(0,"alpha"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.cp=P.R(r,t.W)
c4.cq=P.R(r,t.O)
for(r=t.w,q=t.g,p=t.u,o=t.c,k=0;k<d1.length;d1.length===s||(0,H.t)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.dv(l,c,b,a4,a3,a2))}c4.cq.m(0,i,g)
f=c4.cp
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cr=P.R(r,t.W)
c4.cs=P.R(r,t.x)
for(r=t.w,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.t)(d1),++k){j=d1[k]
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
g.push(new A.dw(a7,a6,a5,l,c,a8))}c4.cs.m(0,i,g)
f=c4.cr
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.ct=P.R(r,t.W)
c4.cu=P.R(r,t.E)
for(r=t.w,q=t.g,p=t.Q,o=t.l,f=t.bw,e=t.u,d=t.B,k=0;k<d1.length;d1.length===s||(0,H.t)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.dy(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cu.m(0,i,g)
a9=c4.ct
m=c4.r
if(m==null)H.i(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.i(P.f(c7+b0+c8))
a9.m(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cv=P.R(s,t.W)
c4.cw=P.R(s,t.h2)
for(s=t.w,r=t.g,q=t.u,p=t.bw,o=t.G,f=t.J,k=0;k<c9.length;c9.length===d1||(0,H.t)(c9),++k){j=c9[k]
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
g.push(new A.dB(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cw.m(0,i,g)
e=c4.cv
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
e.m(0,i,s.a(l))}}}},
hj:function(a,b){}}
A.ba.prototype={
i:function(a){return"barLight"+this.a}}
A.bc.prototype={
i:function(a){return"dirLight"+this.a}}
A.bj.prototype={
i:function(a){return"pointLight"+this.a}}
A.bl.prototype={
i:function(a){return"spotLight"+this.a}}
A.iS.prototype={
i:function(a){return this.bA}}
A.dv.prototype={}
A.dw.prototype={}
A.dy.prototype={}
A.dB.prototype={}
A.bJ.prototype={
cC:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.dc(b,35633)
r=n.dc(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaF(),s)
q.attachShader(n.gaF(),r)
q.linkProgram(n.gaF())
if(!H.mJ(q.getProgramParameter(n.gaF(),35714))){o=q.getProgramInfoLog(n.gaF())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.i(P.f("Failed to link shader: "+o))}n.hn()
n.hp()},
ga4:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gH:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaF:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
Z:function(a){a.a.useProgram(this.e)
this.ga4(this).hQ()},
dc:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mJ(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
hn:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.hU(l.getProgramParameter(o.gaF(),35721))
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
m.push(new A.ek(l,q,p))}o.f=new A.i1(m)},
hp:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.hU(j.getProgramParameter(m.gaF(),35718))
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
k.push(m.hM(o,n,q,p))}m.r=new A.jI(k)},
aT:function(a,b,c){var s=this.a
if(a===1)return new A.cf(s,b,c)
else return A.lc(s,this.e,b,a,c)},
f3:function(a,b,c){var s=this.a
if(a===1)return new A.dz(s,b,c)
else return A.lc(s,this.e,b,a,c)},
f4:function(a,b,c){var s=this.a
if(a===1)return new A.dA(s,b,c)
else return A.lc(s,this.e,b,a,c)},
bw:function(a,b){return new P.h2(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hM:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aT(b,c,d)
case 5121:return s.aT(b,c,d)
case 5122:return s.aT(b,c,d)
case 5123:return s.aT(b,c,d)
case 5124:return s.aT(b,c,d)
case 5125:return s.aT(b,c,d)
case 5126:return new A.ds(s.a,c,d)
case 35664:return new A.fB(s.a,c,d)
case 35665:return new A.dt(s.a,c,d)
case 35666:return new A.du(s.a,c,d)
case 35667:return new A.fC(s.a,c,d)
case 35668:return new A.fD(s.a,c,d)
case 35669:return new A.fE(s.a,c,d)
case 35674:return new A.fF(s.a,c,d)
case 35675:return new A.dx(s.a,c,d)
case 35676:return new A.cg(s.a,c,d)
case 35678:return s.f3(b,c,d)
case 35680:return s.f4(b,c,d)
case 35670:throw H.c(s.bw("BOOL",c))
case 35671:throw H.c(s.bw("BOOL_VEC2",c))
case 35672:throw H.c(s.bw("BOOL_VEC3",c))
case 35673:throw H.c(s.bw("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.dm.prototype={}
A.a2.prototype={}
A.jI.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
O:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.E()},
E:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.t)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cf.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fC.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fE.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fA.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ds.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fB.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dt.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.du.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fF.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dx.prototype={
a8:function(a){var s=new Float32Array(H.cr(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cg.prototype={
a8:function(a){var s=new Float32Array(H.cr(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dz.prototype={
ey:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dA.prototype={
ez:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kU.prototype={
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)},
$S:60}
F.kI.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lB(l.$1(m),k)
k=J.lB(l.$1(m+3.141592653589793/n.c),k).aR(0,j)
s=new V.F(k.a,k.b,k.c).K()
r=$.ml
if(r==null){r=new V.F(1,0,0)
$.ml=r}q=s.aJ(!s.q(0,r)?V.mn():r).K()
r=q.aJ(s).K()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.L(0,l*k)
k=q.L(0,o*k)
k=j.W(0,new V.W(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.Y(a.f,k)){a.f=k
l=a.a
if(l!=null)l.ak()}},
$S:45}
F.aG.prototype={
bc:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.hk(a)
s.hl(b)
s.hm(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gU().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.ak()}},
bz:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.S(r.gU().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.ak()}}s.hb()
s.hc()
s.hd()},
hk:function(a){this.a=a
a.gU().b.push(this)},
hl:function(a){this.b=a
a.gU().c.push(this)},
hm:function(a){this.c=a
a.gU().d.push(this)},
hb:function(){var s=this.a
if(s!=null)C.b.S(s.gU().b,this)
this.a=null},
hc:function(){var s=this.b
if(s!=null)C.b.S(s.gU().c,this)
this.b=null},
hd:function(){var s=this.c
if(s!=null)C.b.S(s.gU().d,this)
this.c=null},
eX:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dF()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.ec())return p
return q.K()},
eZ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aR(0,n)
q=new V.F(o.a,o.b,o.c).K()
o=r.aR(0,n)
return q.aJ(new V.F(o.a,o.b,o.c).K()).K()},
cj:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eX()
if(s==null){s=q.eZ()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ak()}return!0},
eW:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dF()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.ec())return p
return q.K()},
eY:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.D().toString
if(Math.abs(p-0)<1e-9){j=b.aR(0,e)
o=new V.F(j.a,j.b,j.c).K()
if(q.a-r.a<0)o=o.b8(0)}else{n=(j-s.b)/p
j=b.aR(0,e).L(0,n).W(0,e).aR(0,h)
o=new V.F(j.a,j.b,j.c).K()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b8(0)}m=l.d
if(m!=null){m=m.K()
o=m.aJ(o).K().aJ(m).K()}return o},
cg:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eW()
if(s==null){s=q.eY()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ak()}return!0},
ghH:function(a){var s=this
if(J.Y(s.a,s.b))return!0
if(J.Y(s.b,s.c))return!0
if(J.Y(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
N:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gG(p)
p=a+C.a.aL(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gG(o)
p=p+C.a.aL(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gG(o)
s=p+C.a.aL(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.E()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.E()
return s+((p==null?"-":p)+"}")},
E:function(){return this.N("")}}
F.iw.prototype={}
F.jo.prototype={
bm:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gG(q)
s=c.a
if(q==(s==null?r:s.gG(s))){q=b.b
q=q==null?r:q.gG(q)
s=c.b
if(q==(s==null?r:s.gG(s))){q=b.c
q=q==null?r:q.gG(q)
s=c.c
q=q==(s==null?r:s.gG(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gG(q)
s=c.b
if(q==(s==null?r:s.gG(s))){q=b.b
q=q==null?r:q.gG(q)
s=c.c
if(q==(s==null?r:s.gG(s))){q=b.c
q=q==null?r:q.gG(q)
s=c.a
q=q==(s==null?r:s.gG(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gG(q)
s=c.c
if(q==(s==null?r:s.gG(s))){q=b.b
q=q==null?r:q.gG(q)
s=c.a
if(q==(s==null?r:s.gG(s))){q=b.c
q=q==null?r:q.gG(q)
s=c.b
q=q==(s==null?r:s.gG(s))}else q=!1
return q}else return!1}}}}
F.iJ.prototype={}
F.jH.prototype={
bm:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gG(q)
s=c.a
if(q==(s==null?r:s.gG(s))){q=b.b
q=q==null?r:q.gG(q)
s=c.b
return q==(s==null?r:s.gG(s))}else{q=b.a
q=q==null?r:q.gG(q)
s=c.b
if(q==(s==null?r:s.gG(s))){q=b.b
q=q==null?r:q.gG(q)
s=c.a
return q==(s==null?r:s.gG(s))}else return!1}}}
F.jh.prototype={
ga7:function(){var s=this.a
return s==null?this.a=new F.I(this,H.b([],t.k)):s},
gbG:function(a){var s=this.b
return s==null?this.b=new F.ji(H.b([],t.fj)):s},
gb3:function(a){var s=this.c
return s==null?this.c=new F.fb(this,H.b([],t.L)):s},
gU:function(){var s=this.d
return s==null?this.d=new F.fa(this,H.b([],t.v)):s},
gt:function(){var s=this.e
return s==null?this.e=D.E():s},
aI:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gU().aI()||!1
if(!r.ga7().aI())s=!1
q=r.e
if(q!=null)q.aO(0)
return s},
i5:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.ga7().c
s=H.b(m.slice(0),H.kx(m))
for(m=t.k;s.length!==0;){r=C.b.ghU(s)
C.b.cO(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bm(0,r,o)){q.push(o)
C.b.cO(s,p)}}if(q.length>1)b.i4(q)}n.ga7().ay()
n.gb3(n).cP()
n.gU().cP()
n.gbG(n).io()
n.gb3(n).cQ(new F.jH())
n.gU().cQ(new F.jo())
m=n.e
if(m!=null)m.aO(0)},
cf:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.ga7().c.length,a=$.aq(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bv().a)!==0)++a1
if((a0&$.bu().a)!==0)++a1
if((a0&$.b9().a)!==0)++a1
if((a0&$.bS().a)!==0)++a1
if((a0&$.ee().a)!==0)++a1
if((a0&$.ef().a)!==0)++a1
if((a0&$.cy().a)!==0)++a1
if((a0&$.bt().a)!==0)++a1
s=a3.gd_(a3)
r=P.eJ(b*s,0,!1,t.gR)
c.a=0
q=P.nU(a1,new F.jj(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cr(r)),35044)
a.bindBuffer(d,e)
p=new Z.by(new Z.fN(d,a0),H.b([],t.fv),q,a3)
f.gbG(f)
if(f.gb3(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.fb(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
j=l[m]
l=j.a
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.I(k,H.b([],n)):i).ay()}l=l.e}o.push(l==null?0:l)
l=j.b
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.I(k,H.b([],n)):i).ay()}l=l.e}o.push(l==null?0:l);++m}h=Z.mo(a,34963,o)
p.b.push(new Z.cT(1,o.length,h))}if(f.gU().b.length!==0){o=H.b([],t.t)
a0=t.v
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.fa(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.I(k,H.b([],n)):i).ay()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.I(k,H.b([],n)):i).ay()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.I(k,H.b([],n)):i).ay()}l=l.e}o.push(l==null?0:l);++m}h=Z.mo(a,34963,o)
p.b.push(new Z.cT(4,o.length,h))}return p},
i:function(a){var s=this,r=H.b([],t.s)
if(s.ga7().c.length!==0){r.push("Vertices:")
r.push(s.ga7().N("   "))}s.gbG(s)
if(s.gb3(s).b.length!==0){r.push("Lines:")
r.push(s.gb3(s).N("   "))}if(s.gU().b.length!==0){r.push("Faces:")
r.push(s.gU().N("   "))}return C.b.j(r,"\n")},
ak:function(){var s=this.e
return s==null?null:s.B(null)}}
F.jj.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hE(a),e=f.gd_(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.I(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].i2(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bX(f,e,c*4,g.d)},
$S:46}
F.fa.prototype={
hB:function(a){var s,r,q,p,o,n,m,l=H.b([],t.v),k=a[0]
for(s=this.a,r=t.k,q=2;q<4;++q){p=a[q-1]
o=a[q]
n=s.a;(n==null?s.a=new F.I(s,H.b([],r)):n).n(0,k)
n=s.a;(n==null?s.a=new F.I(s,H.b([],r)):n).n(0,p)
n=s.a;(n==null?s.a=new F.I(s,H.b([],r)):n).n(0,o)
m=new F.aG()
m.bc(k,p,o)
l.push(m)}return l},
hC:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.v)
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
if(m){(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,g)
e=new F.aG()
e.bc(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,f)
e=new F.aG()
e.bc(j,g,f)
d.push(e)}else{(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,f)
e=new F.aG()
e.bc(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.I(s,H.b([],r)):k).n(0,j)
e=new F.aG()
e.bc(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cQ:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.ga7().c.length-1,q=t.v,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.I(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.ck(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.ck(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bm(0,l,(o==null?n.d=new F.ck(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bz()
break}}}}},
cP:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghH(q))q.bz()}},
aI:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.t)(s),++p)if(!s[p].cj())q=!1
return q},
ci:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.t)(s),++p)if(!s[p].cg())q=!1
return q},
i:function(a){return this.E()},
N:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].N(a))
return C.b.j(p,"\n")},
E:function(){return this.N("")}}
F.fb.prototype={
gl:function(a){return this.b.length},
cQ:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.ga7().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.I(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.cl(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.cl(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bm(0,l,(o==null?n.c=new F.cl(H.b([],q),H.b([],q)):o).h(0,j))){l.bz()
break}}}}},
cP:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.Y(q.a,q.b))q.bz()}},
i:function(a){return this.E()},
N:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].N(a+(""+s+". ")))}return C.b.j(r,"\n")},
E:function(){return this.N("")}}
F.ji.prototype={
gl:function(a){return 0},
io:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r].giX()
q=q.gbG(q)
q.gl(q)}},
i:function(a){return this.E()},
N:function(a){var s,r,q=H.b([],t.s)
for(s=this.b,r=0;!1;++r)q.push(s[r].N(a))
return C.b.j(q,"\n")},
E:function(){return this.N("")}}
F.cj.prototype={
dS:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jY(s.cx,p,m,r,q,o,n,a,l)},
gb3:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.cl(H.b([],s),H.b([],s))}return s},
gU:function(){var s=this.d
if(s==null){s=t.v
s=this.d=new F.ck(H.b([],s),H.b([],s),H.b([],s))}return s},
gG:function(a){var s=this.a
if(s!=null)s.ga7().ay()
return this.e},
i2:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.aq())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bv())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bu())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.b9())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bS())){s=o.z
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
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cy()))return H.b([o.ch],t.n)
else if(a.q(0,$.bt())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cj:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dF()
p.gU().C(0,new F.k4(o))
p.r=o.a.K()
if(r){s.ak()
o=s.e
if(o!=null)o.aO(0)}return!0},
cg:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dF()
p.gU().C(0,new F.k3(o))
p.x=o.a.K()
if(r){s.ak()
o=s.e
if(o!=null)o.aO(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
N:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.aL(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.E()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.E()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.E()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.E()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.E()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.E()
n.push(s==null?o:s)
n.push(V.C(q.ch,3,0))
s=q.cx
s=s==null?p:s.E()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
E:function(){return this.N("")}}
F.k4.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:7}
F.k3.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:7}
F.I.prototype={
ay:function(){var s,r,q
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
s.ak()
return!0},
bx:function(a,b,c,d,e,f){var s=F.jY(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aI:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)s[q].cj()
return!0},
ci:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)s[q].cg()
return!0},
hG:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.K()
if(!J.Y(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.B(null)}}}}}return!0},
i:function(a){return this.E()},
N:function(a){var s,r,q,p
this.ay()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.t)(r),++p)s.push(r[p].N(a))
return C.b.j(s,"\n")},
E:function(){return this.N("")}}
F.ck.prototype={
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
C:function(a,b){var s=this
C.b.C(s.b,b)
C.b.C(s.c,new F.jZ(s,b))
C.b.C(s.d,new F.k_(s,b))},
i:function(a){return this.E()},
E:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].N(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].N(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].N(""))
return C.b.j(p,"\n")}}
F.jZ.prototype={
$1:function(a){if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:7}
F.k_.prototype={
$1:function(a){var s=this.a
if(!J.Y(a.a,s)&&!J.Y(a.b,s))this.b.$1(a)},
$S:7}
F.cl.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.E()},
E:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].N(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].N(""))
return C.b.j(p,"\n")}}
F.k1.prototype={}
F.k0.prototype={
bm:function(a,b,c){return J.Y(b.f,c.f)}}
F.k2.prototype={}
F.j9.prototype={
i4:function(a){var s,r,q,p,o,n=V.dF()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.F(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.K()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.t)(a),++r){p=a[r]
q=n.K()
if(!J.Y(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}return null}}
O.et.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.E():s},
av:function(){var s=this.r
return s==null?null:s.B(null)},
sdR:function(a){if(this.b!=a){this.b=a
this.av()}},
sdP:function(a){if(this.c!=a){this.c=a
this.av()}},
sdO:function(a){if(!this.f.q(0,a)){this.f=a
this.av()}},
ah:function(a,b){},
bu:function(a,b){if(b!=null)if(!C.b.A(a,b)){b.a=a.length
a.push(b)}},
cR:function(a,b){var s,r,q,p,o,n,m,l=this,k=null
if(l.a==null){s=t.aS.a(a.fr.h(0,"Distort"))
if(s==null){s=new A.cJ(a.a,"Distort")
s.cC(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
s.x=s.ga4(s).h(0,"posAttr")
s.y=s.ga4(s).h(0,"txt2DAttr")
r=t.j
s.z=r.a(s.gH().O(0,"projViewObjMat"))
q=t.Q
s.Q=q.a(s.gH().O(0,"colorTxt2DMat"))
s.ch=q.a(s.gH().O(0,"bumpTxt2DMat"))
q=t.G
s.cx=q.a(s.gH().O(0,"colorTxt"))
s.cy=q.a(s.gH().O(0,"bumpTxt"))
s.db=r.a(s.gH().O(0,"bumpMat"))
a.ce(s)}l.a=s}if(b.e==null){r=b.d
if(r==null)r=k
else{q=$.aq()
p=$.b9()
p=r.cf(new Z.dG(a.a),new Z.bn(q.a|p.a))
r=p}if(r==null)r=k
else{q=r.aw($.aq())
if(q!=null){p=l.a
if(p==null)p=k
else{p=p.x
p=p==null?k:p.c}q.e=p==null?0:p}q=r.aw($.b9())
if(q!=null){p=l.a
if(p==null)p=k
else{p=p.y
p=p==null?k:p.c}q.e=p==null?1:p}}b.e=r}o=H.b([],t.d)
l.bu(o,l.b)
l.bu(o,l.c)
if(o.length<=0)return
for(r=a.a,n=0;n<o.length;++n){q=o[n]
if(!q.c&&q.d){q.c=!0
r.activeTexture(33984+q.a)
r.bindTexture(3553,q.b)}}q=l.a
if(q!=null){q.Z(a)
p=l.b
q.dv(q.cx,p)
p=l.c
q.dv(q.cy,p)
p=a.gem()
m=q.z
if(m!=null)m.a8(p.a1(0,!0))
p=l.d
m=q.Q
if(m!=null)m.a8(p.a1(0,!0))
p=l.e
m=q.ch
if(m!=null)m.a8(p.a1(0,!0))
p=l.f
q=q.db
if(q!=null)q.a8(p.a1(0,!0))}q=b.e
if(q instanceof Z.by){q.Z(a)
q.ag(a)
q.al(a)}else b.e=null
q=l.a
if(q!=null){r.useProgram(k)
q.ga4(q).cn()}for(n=0;n<o.length;++n){q=o[n]
if(q.c){q.c=!1
r.activeTexture(33984+q.a)
r.bindTexture(3553,k)}}}}
O.d6.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.E():s},
a9:function(a){var s=this.fr
return s==null?null:s.B(a)},
av:function(){return this.a9(null)},
dm:function(a){this.a=null
this.a9(a)},
hg:function(){return this.dm(null)},
fk:function(a,b){return this.a9(new D.aU())},
fm:function(a,b){return this.a9(new D.aV())},
gee:function(){var s=this,r=s.dx
if(r==null){r=new D.cY(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cZ(r.gfh(),r.gfU(),r.gfY())
r.gt().n(0,s.gdl())
r.ged().n(0,s.gbt())
s.dx=r}return r},
gdH:function(){var s=this.r
return s==null?this.r=O.eM(this,"ambient"):s},
gdU:function(){var s=this.x
return s==null?this.x=O.eM(this,"diffuse"):s},
gbQ:function(){var s=this.z
return s==null?this.z=new O.iV(new V.T(0,0,0),this,"specular",new A.aE(!1,!1,!1)):s},
d9:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.U(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.t)(a2),++r){q=a2[r]
p=q.gaA()
o=a1.h(0,q.gaA())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.C(0,new O.iW(b,n))
C.b.bb(n,new O.iX())
m=new H.U(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.t)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],t.fD)
m.C(0,new O.iY(b,l))
C.b.bb(l,new O.iZ())
k=new H.U(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.t)(a2),++r){q=a2[r]
p=q.gaA()
o=k.h(0,q.gaA())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.C(0,new O.j_(b,j))
C.b.bb(j,new O.j0())
i=new H.U(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.t)(a0),++r){q=a0[r]
s=q.gaA()
p=i.h(0,q.gaA())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.C(0,new O.j1(b,h))
C.b.bb(h,new O.j2())
a0=C.c.aa(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iT(new V.aD(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eM(b,"emission"):a2).c
s=b.gdH().c
p=b.gdU().c
o=b.y
o=(o==null?b.y=O.eM(b,"invDiffuse"):o).c
g=b.gbQ().c
f=b.Q
f=(f==null?b.Q=new O.iR(b,"bump",new A.aE(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eM(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iU(new V.T(0,0,0),b,"refract",new A.aE(!1,!1,!1)):d).c
c=b.db
return A.nW(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iQ(b,"alpha",new A.aE(!1,!1,!1)):c).c,n,l,j,h)},
bu:function(a,b){},
ah:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.az(m==null?H.b([],t.e):m)
s=H.S(m).c
for(;m.v();){r=s.a(m.d)
q=$.jX
if(q==null)q=$.jX=new V.F(0,0,1)
r.c=q
p=$.jW
r.d=p==null?$.jW=new V.F(0,1,0):p
p=$.jV
r.e=p==null?$.jV=new V.F(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bL(q).K()
r.d=n.bL(r.d).K()
r.e=n.bL(r.e).K()}}},
cR:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.d9()
r=s.bA
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.d7(s,H.b([],t.p),P.R(p,o),P.R(p,t.O),P.R(p,o),P.R(p,t.x),P.R(p,o),P.R(p,t.E),P.R(p,o),P.R(p,t.h2),q,r)
a9.eI(s,q)
b0.ce(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.dX
s=b1.e
if(!(s instanceof Z.by))s=b1.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.aI()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gU().ci()
q.ga7().ci()
q=q.e
if(q!=null)q.aO(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga7().hG()
p=p.e
if(p!=null)p.aO(0)}}p=b1.d
l=p==null?a8:p.cf(new Z.dG(b0.a),m)
if(l==null)return
p=l.aw($.aq())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aw($.bv())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aw($.bu())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aw($.b9())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aw($.bS())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aw($.bt())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.d)
a9.Z(b0)
if(n.fr){s=b0.dx
s=s.ga6(s)
r=a9.db
if(r!=null)r.a8(s.a1(0,!0))}if(n.fx){s=b0.cx
if(s==null){s=b0.db
r=b0.dx
r=b0.cx=s.ga6(s).L(0,r.ga6(r))
s=r}r=a9.dx
if(r!=null)r.a8(s.a1(0,!0))}s=b0.gem()
r=a9.fr
if(r!=null)r.a8(s.a1(0,!0))
if(n.go){s=b0.db
s=s.ga6(s)
r=a9.dy
if(r!=null)r.a8(s.a1(0,!0))}if(n.x1){s=V.eN()
r=a9.go
if(r!=null)r.a8(s.a1(0,!0))}if(n.x2){s=V.ae()
r=a9.id
if(r!=null)r.a8(s.a1(0,!0))}if(n.y1){s=V.ae()
r=a9.k1
if(r!=null)r.a8(s.a1(0,!0))}if(n.b1>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.cr(r.a1(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}if(n.a.a){s=a7.f
s=s==null?a8:s.f
if(s==null)s=new V.T(0,0,0)
r=a9.k4
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.k1){if(n.b.a){s=a7.r
s=s==null?a8:s.f
if(s==null)s=new V.T(0,0,0)
r=a9.rx
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.c.a){s=a7.x
s=s==null?a8:s.f
if(s==null)s=new V.T(0,0,0)
r=a9.x2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.d.a){s=a7.y
s=s==null?a8:s.f
if(s==null)s=new V.T(0,0,0)
r=a9.b1
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.e.a
if(!s)r=!1
else r=!0
if(r){r=a7.z
r=r==null?a8:r.ch
if(r==null)r=100
q=a9.dZ
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.z
s=s==null?a8:s.f
if(s==null)s=new V.T(1,1,1)
r=a9.dY
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.z
if(s.length>0){g=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.c
f=0
for(;f<r.length;r.length===q||(0,H.t)(r),++f){e=r[f]
d=e.gaA()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
o=a9.cq.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giC()
a=$.b1
o=o.bq(a==null?$.b1=new V.W(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giH()
a=$.b1
o=o.bq(a==null?$.b1=new V.W(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb0(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.gdW()){o=e.gdJ()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdL()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.t)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.cp.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga6(r)
a1=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.t)(r),++f){e=r[f]
c=a1.h(0,0)
if(c==null)c=0
a1.m(0,0,c+1)
o=a9.cs.h(0,0)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.bL(e.c).K()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.t)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cr.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga6(r)
a2=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.B
f=0
for(;f<r.length;r.length===q||(0,H.t)(r),++f){e=r[f]
d=e.gaA()
c=a2.h(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
o=a9.cu.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a3=a0.L(0,e.ga6(e))
o=e.ga6(e)
a=$.b1
o=o.bq(a==null?$.b1=new V.W(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b1
o=a3.bq(o==null?$.b1=new V.W(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb0(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaP()
o=a3.cD(0)
a=b.d
if(a!=null){h=new Float32Array(H.cr(new V.d9(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).a1(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaP()
o=e.gaP()
if(!C.b.A(k,o)){o.sG(0,k.length)
k.push(o)}o=e.gaP()
a=o.gcF(o)
if(a){a=b.f
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gba()
o=e.geA()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gba()
if(!C.b.A(k,o)){o.sG(0,k.length)
k.push(o)}o=e.gba()
a=o.gcF(o)
if(a){a=b.r
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.gdW()){o=e.gdJ()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdL()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.t)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.ct.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga6(r)
a6=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.J
f=0
for(;f<r.length;r.length===q||(0,H.t)(r),++f){e=r[f]
d=e.gaA()
c=a6.h(0,d)
if(c==null)c=0
a6.m(0,d,c+1)
o=a9.cw.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.gik(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giF(e).K()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bq(e.gik(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb0(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaP()
o=e.gcV()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gcS(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giV()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giW()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaP()
o=e.gaP()
if(!C.b.A(k,o)){o.sG(0,k.length)
k.push(o)}o=e.gaP()
a=o.gcF(o)
if(a){a=b.dx
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gba()
o=e.geA()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gba()
if(!C.b.A(k,o)){o.sG(0,k.length)
k.push(o)}o=e.gba()
a=o.gcF(o)
if(a){a=b.dy
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.giG()){o=e.giE()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giD()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.gdW()){o=e.gdJ()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdL()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.t)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cv.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga6(s).cD(0)}r=a9.fy
if(r!=null)r.a8(s.a1(0,!0))}if(n.db){a7.bu(k,a8)
a9.hj(a9.e_,a8)
if(n.r.a){s=a7.cx
s=s==null?a8:s.f
if(s==null)s=new V.T(1,1,1)
r=a9.e0
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.x.a
if(!s)r=!1
else r=!0
if(r){r=a7.cy
r=r==null?a8:r.ch
if(r==null)r=0
q=a9.e1
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.cy
s=s==null?a8:s.f
if(s==null)s=new V.T(1,1,1)
r=a9.e2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}}s=n.y.a
r=!s
if(r)q=!1
else q=!0
if(q){if(s){s=a7.db
s=s==null?a8:s.f
if(s==null)s=1
q=a9.e3
if(q!=null)q.a.uniform1f(q.d,s)}s=b0.a
s.enable(3042)
s.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].Z(b0)
s=t.ed.a(b1.e)
s.Z(b0)
s.ag(b0)
s.al(b0)
if(r)s=!1
else s=!0
if(s)b0.a.disable(3042)
for(i=0;i<k.length;++i)k[i].al(b0)
b0.a.useProgram(a8)
a9.ga4(a9).cn()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d9().bA}}
O.iW.prototype={
$2:function(a,b){return this.b.push(new A.ba(a,C.c.aa(b+3,4)*4))},
$S:8}
O.iX.prototype={
$2:function(a,b){return C.c.ao(a.a,b.a)},
$S:50}
O.iY.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.c.aa(b+3,4)*4))},
$S:8}
O.iZ.prototype={
$2:function(a,b){return C.c.ao(a.a,b.a)},
$S:51}
O.j_.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.c.aa(b+3,4)*4))},
$S:8}
O.j0.prototype={
$2:function(a,b){return C.c.ao(a.a,b.a)},
$S:52}
O.j1.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.c.aa(b+3,4)*4))},
$S:8}
O.j2.prototype={
$2:function(a,b){return C.c.ao(a.a,b.a)},
$S:53}
O.iQ.prototype={
aG:function(){var s,r=this
r.d0()
s=r.f
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.a9(new D.B(r.b,s,1))}}}
O.eL.prototype={
aG:function(){},
dt:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aG()
s=q.a
s.a=null
s.a9(null)}}}
O.iR.prototype={}
O.d8.prototype={
dr:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.a9(new D.B(r.b+".color",s,a))}},
aG:function(){this.d0()
this.dr(new V.T(1,1,1))},
sb0:function(a,b){this.dt(new A.aE(!0,!1,!1))
this.dr(b)}}
O.iT.prototype={}
O.iU.prototype={
aG:function(){var s,r=this
r.d1()
s=r.ch
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.a9(new D.B(r.b+".refraction",s,1))}}}
O.iV.prototype={
du:function(a){var s=this,r=s.ch
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.a9(new D.B(s.b+".shininess",r,a))}},
aG:function(){this.d1()
this.du(100)}}
O.dl.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.E():s},
a9:function(a){var s=this.e
return s==null?null:s.B(a)},
av:function(){return this.a9(null)},
ah:function(a,b){},
cR:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.dm.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.dm(a.a,"Skybox")
s.cC(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.ga4(s).h(0,"posAttr")
r=t.u
s.y=r.a(s.gH().h(0,"fov"))
s.z=r.a(s.gH().h(0,"ratio"))
s.Q=t.g.a(s.gH().h(0,"boxClr"))
s.ch=t.l.a(s.gH().h(0,"boxTxt"))
s.cx=t.j.a(s.gH().h(0,"viewMat"))
a.ce(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.cf(new Z.dG(a.a),$.aq())
if(r==null)r=l
else{q=r.aw($.aq())
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
if(p!=null){p.Z(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.ez(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.ga6(r).cD(0)
p=p.cx
if(p!=null)p.a8(r.a1(0,!0))}r=b.e
if(r instanceof Z.by){r.Z(a)
r.ag(a)
r.al(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.ga4(r).cn()}if(o.c){o.c=!1
r=a.a
r.activeTexture(33984+o.a)
r.bindTexture(34067,l)}}}
O.bK.prototype={}
T.bL.prototype={}
T.fr.prototype={}
T.fs.prototype={
ds:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.co()}}}
T.ft.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.E():s}}
T.jv.prototype={
i3:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
this.dh()
s=W.l0(a)
r=T.la(o)
W.a3(s,"load",new T.jx(this,r,s,!1,o,!1,!1),!1)
return r},
aV:function(a,b,c,d,e,f){var s=W.l0(c)
this.dh()
W.a3(s,"load",new T.jw(this,s,!1,b,!1,d,a),!1)},
dq:function(a,b,c){var s,r,q,p,o,n
b=V.ed(b)
s=a.width
r=V.ed(s==null?512:s)
s=a.height
q=V.ed(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.kX()
p.width=r
p.height=q
o=t.ar.a(C.i.ew(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.q_(o.getImageData(0,0,s,n==null?512:n))}},
dh:function(){return this.d++},
dd:function(){return this.e++}}
T.jx.prototype={
$1:function(a){var s,r,q=this,p=q.b,o=q.c,n=o.width
p.e=n==null?512:n
n=o.height
p.f=n==null?512:n
n=q.a
s=n.dq(o,n.b,q.d)
r=o.width
p.r=r==null?512:r
o=o.height
p.x=o==null?512:o
o=n.a
o.bindTexture(3553,q.e)
o.pixelStorei(37440,0)
C.o.eq(o,3553,0,6408,6408,5121,s)
o.bindTexture(3553,null)
p.ds()
n.dd()},
$S:2}
T.jw.prototype={
$1:function(a){var s=this,r=s.a,q=r.dq(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.o.eq(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.co()}r.dd()},
$S:2}
X.i4.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.E():s},
a0:function(a){var s=this.fr
return s==null?null:s.B(a)},
sat:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a0(new D.B("width",s,b))}},
saq:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a0(new D.B("height",s,b))}},
Z:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
g.sat(0,C.c.a_(r*g.r))
s=s.drawingBufferHeight
if(s==null)s=512
g.saq(0,C.c.a_(s*g.x))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=H.hU(s.getParameter(3379))
n=V.ed(q)
m=V.ed(p)
o=V.ed(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.o.er(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.la(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.ds()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.co()
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
al:function(a){a.a.bindFramebuffer(36160,null)}}
X.iA.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.E():s},
Z:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
if(s==null)s=512
r=m.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.a_(q.a*s)
o=C.d.a_(q.b*r)
n=C.d.a_(q.c*s)
a.c=n
q=C.d.a_(q.d*r)
a.d=q
m.viewport(p,o,n,q)
m.clearDepth(2000)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
al:function(a){}}
X.iE.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.E():s},
Z:function(a){var s
a.cy.bJ(V.ae())
s=V.ae()
a.db.bJ(s)},
al:function(a){a.cy.aM()
a.db.aM()}}
X.f_.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.E():s},
a0:function(a){var s=this.f
return s==null?null:s.B(a)},
eS:function(){return this.a0(null)},
Z:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.b_(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bJ(i)
s=$.n6()
r=q.b
if(r!=null)s=r.b7(0,a,q).L(0,s)
a.db.bJ(s)},
al:function(a){a.cy.aM()
a.db.aM()}}
X.jr.prototype={}
V.aC.prototype={
bs:function(a){this.b=new P.iC(C.T)
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
m=k.b.f2(o,0,o.length)
l=m==null?o:m
l=H.lz(l," ","&nbsp;")
C.R.ex(n,l)
l=n.style
l.color=b
C.b.gaB(k.d).push(n)}},
ek:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.by()
if(r!=null)for(q=new H.q(s),q=new P.bP(r.cU(new H.bh(q,q.gl(q))).a());q.v();)p.bI(q.gw(q))}}
V.kT.prototype={
$1:function(a){var s=C.d.cT(this.a.ghZ(),2)
if(s!=="0.00")P.ly(s+" fps")},
$S:54}
V.er.prototype={
bI:function(a){var s=this
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
by:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jC()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.r(H.b([],r))
q.p(new H.q("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.r(H.b([],r))
q.p(new H.q("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
a4.k(0,o).j(0,m).a.push(K.O("0","9"))
a4.k(0,m).j(0,m).a.push(K.O("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.r(H.b([],r))
q.p(new H.q("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.O("0","9"))
a4.k(0,k).j(0,k).a.push(K.O("0","9"))
q=a4.k(0,o).j(0,j)
s=new K.r(H.b([],r))
s.p(new H.q(i))
q.a.push(s)
s=a4.k(0,j).j(0,j)
q=new K.r(H.b([],r))
q.p(new H.q(i))
s.a.push(q)
q=a4.k(0,o).j(0,h)
s=new K.r(H.b([],r))
s.p(new H.q('"'))
q.a.push(s)
s=a4.k(0,h).j(0,g)
q=new K.r(H.b([],r))
q.p(new H.q('"'))
s.a.push(q)
q=a4.k(0,h).j(0,f)
s=new K.r(H.b([],r))
s.p(new H.q("\\"))
q.a.push(s)
s=a4.k(0,f).j(0,h)
q=new K.r(H.b([],r))
q.p(new H.q('"'))
s.a.push(q)
a4.k(0,h).j(0,h).a.push(new K.aR())
q=a4.k(0,o).j(0,e)
s=new K.r(H.b([],r))
s.p(new H.q("'"))
q.a.push(s)
s=a4.k(0,e).j(0,d)
q=new K.r(H.b([],r))
q.p(new H.q("'"))
s.a.push(q)
q=a4.k(0,e).j(0,c)
s=new K.r(H.b([],r))
s.p(new H.q("\\"))
q.a.push(s)
s=a4.k(0,c).j(0,e)
q=new K.r(H.b([],r))
q.p(new H.q("'"))
s.a.push(q)
a4.k(0,e).j(0,e).a.push(new K.aR())
q=a4.k(0,o).j(0,b)
s=new K.r(H.b([],r))
s.p(new H.q("/"))
q.a.push(s)
s=a4.k(0,b).j(0,a)
q=new K.r(H.b([],r))
q.p(new H.q("/"))
s.a.push(q)
q=a4.k(0,a).j(0,a0)
s=new K.r(H.b([],r))
s.p(new H.q("\n"))
q.a.push(s)
s=a4.k(0,a).j(0,a)
q=t.z
p=H.b([],q)
s.a.push(new K.af(p))
s=new K.r(H.b([],r))
s.p(new H.q("\n"))
p.push(s)
s=a4.k(0,b).j(0,a1)
p=new K.r(H.b([],r))
p.p(new H.q("*"))
s.a.push(p)
p=a4.k(0,a1).j(0,a2)
s=new K.r(H.b([],r))
s.p(new H.q("*"))
p.a.push(s)
s=a4.k(0,a2).j(0,a1)
q=H.b([],q)
s.a.push(new K.af(q))
s=new K.r(H.b([],r))
s.p(new H.q("*"))
q.push(s)
s=a4.k(0,a2).j(0,a0)
q=new K.r(H.b([],r))
q.p(new H.q("/"))
s.a.push(q)
q=a4.k(0,o).j(0,a3)
s=new K.r(H.b([],r))
s.p(new H.q(" \n\t"))
q.a.push(s)
s=a4.k(0,a3).j(0,a3)
r=new K.r(H.b([],r))
r.p(new H.q(" \n\t"))
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
r.aN(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aN(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aN(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.ey.prototype={
bI:function(a){var s=this
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
by:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jC()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.r(H.b([],r))
q.p(new H.q("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.r(H.b([],r))
q.p(new H.q("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
b.k(0,o).j(0,m).a.push(K.O("0","9"))
b.k(0,m).j(0,m).a.push(K.O("0","9"))
s=b.k(0,m).j(0,l)
q=new K.r(H.b([],r))
q.p(new H.q("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.O("0","9"))
b.k(0,k).j(0,k).a.push(K.O("0","9"))
q=b.k(0,o).j(0,j)
s=new K.r(H.b([],r))
s.p(new H.q(i))
q.a.push(s)
s=b.k(0,j).j(0,j)
q=new K.r(H.b([],r))
q.p(new H.q(i))
s.a.push(q)
q=b.k(0,o).j(0,h)
s=new K.r(H.b([],r))
s.p(new H.q("/"))
q.a.push(s)
s=b.k(0,h).j(0,g)
q=new K.r(H.b([],r))
q.p(new H.q("/"))
s.a.push(q)
b.k(0,h).j(0,j).a.push(new K.aR())
q=b.k(0,g).j(0,f)
s=new K.r(H.b([],r))
s.p(new H.q("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.b([],q)
s.a.push(new K.af(p))
s=new K.r(H.b([],r))
s.p(new H.q("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.r(H.b([],r))
p.p(new H.q("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.b([],q)
p.a.push(new K.af(q))
p=new K.r(H.b([],r))
p.p(new H.q("\n"))
q.push(p)
p=b.k(0,e).j(0,d)
q=new K.r(H.b([],r))
q.p(new H.q("\n"))
p.a.push(q)
q=b.k(0,o).j(0,c)
p=new K.r(H.b([],r))
p.p(new H.q(" \n\t"))
q.a.push(p)
p=b.k(0,c).j(0,c)
r=new K.r(H.b([],r))
r.p(new H.q(" \n\t"))
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
r.aN(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aN(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aN(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.ez.prototype={
bI:function(a){var s=this,r="#111"
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
by:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jC()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.r(H.b([],r))
q.p(new H.q("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.r(H.b([],r))
q.p(new H.q("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=i.k(0,o).j(0,n)
q=new K.r(H.b([],r))
q.p(new H.q("="))
s.a.push(q)
s.c=!0
s=i.k(0,p).j(0,m)
q=new K.r(H.b([],r))
q.p(new H.q("</\\-!>="))
s.a.push(q)
q=i.k(0,m).j(0,m)
s=new K.r(H.b([],r))
s.p(new H.q("</\\-!>="))
q.a.push(s)
s=i.k(0,p).j(0,l)
q=new K.r(H.b([],r))
q.p(new H.q('"'))
s.a.push(q)
q=i.k(0,l).j(0,k)
s=new K.r(H.b([],r))
s.p(new H.q('"'))
q.a.push(s)
s=i.k(0,l).j(0,"EscStr")
q=new K.r(H.b([],r))
q.p(new H.q("\\"))
s.a.push(q)
q=i.k(0,"EscStr").j(0,l)
s=new K.r(H.b([],r))
s.p(new H.q('"'))
q.a.push(s)
i.k(0,l).j(0,l).a.push(new K.aR())
i.k(0,p).j(0,j).a.push(new K.aR())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.af(q))
r=new K.r(H.b([],r))
r.p(new H.q('</\\-!>=_"'))
q.push(r)
q.push(K.O("a","z"))
q.push(K.O("A","Z"))
q=i.k(0,m)
q.d=q.a.P("Symbol")
q=i.k(0,k)
q.d=q.a.P("String")
q=i.k(0,o)
r=q.a.P(o)
q.d=r
r.aN(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.P(n)
r=i.k(0,j)
r.d=r.a.P(j)
return i}}
V.f1.prototype={
ek:function(a,b){this.d=H.b([],t.F)
this.M(C.b.j(b,"\n"),"#111")},
bI:function(a){},
by:function(){return null}}
V.jk.prototype={
dG:function(a){var s,r,q,p,o,n,m=this.ho(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.q(C.b.i1(a)),s=new P.bP(m.cU(new H.bh(s,s.gl(s))).a());s.v();){r=s.gw(s)
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
if(H.n1(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ks(C.x,r,C.e,!1)
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
ev:function(a){var s,r,q,p=t.F,o=new V.er("dart",H.b([],p))
o.bs("dart")
s=new V.ey("glsl",H.b([],p))
s.bs("glsl")
r=new V.ez("html",H.b([],p))
r.bs("html")
q=C.b.hV(H.b([o,s,r],t.g6),new V.jn(a))
if(q!=null)return q
p=new V.f1("plain",H.b([],p))
p.bs("plain")
return p},
dF:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a3(q,"+")){b2[r]=C.a.ai(q,1)
a8.push(1)
s=!0}else if(C.a.a3(q,"-")){b2[r]=C.a.ai(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ev(b0)
p.ek(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.ks(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lF()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.t)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.t)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gR(q);a4.v();)b.appendChild(a4.gw(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hz:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
ho:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jC()
f.d=f.k(0,o)
s=f.k(0,o).j(0,n)
r=t.t
q=new K.r(H.b([],r))
q.p(new H.q("*"))
s.a.push(q)
s.c=!0
s=f.k(0,n).j(0,n)
q=t.z
p=H.b([],q)
s.a.push(new K.af(p))
s=new K.r(H.b([],r))
s.p(new H.q("*"))
p.push(s)
s=f.k(0,n).j(0,"BoldEnd")
p=new K.r(H.b([],r))
p.p(new H.q("*"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,m)
p=new K.r(H.b([],r))
p.p(new H.q("_"))
s.a.push(p)
s.c=!0
s=f.k(0,m).j(0,m)
p=H.b([],q)
s.a.push(new K.af(p))
s=new K.r(H.b([],r))
s.p(new H.q("_"))
p.push(s)
s=f.k(0,m).j(0,l)
p=new K.r(H.b([],r))
p.p(new H.q("_"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,k)
p=new K.r(H.b([],r))
p.p(new H.q("`"))
s.a.push(p)
s.c=!0
s=f.k(0,k).j(0,k)
p=H.b([],q)
s.a.push(new K.af(p))
s=new K.r(H.b([],r))
s.p(new H.q("`"))
p.push(s)
s=f.k(0,k).j(0,"CodeEnd")
p=new K.r(H.b([],r))
p.p(new H.q("`"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,j)
p=new K.r(H.b([],r))
p.p(new H.q("["))
s.a.push(p)
s.c=!0
s=f.k(0,j).j(0,i)
p=new K.r(H.b([],r))
p.p(new H.q("|"))
s.a.push(p)
p=f.k(0,j).j(0,h)
s=new K.r(H.b([],r))
s.p(new H.q("]"))
p.a.push(s)
p.c=!0
p=f.k(0,j).j(0,j)
s=H.b([],q)
p.a.push(new K.af(s))
p=new K.r(H.b([],r))
p.p(new H.q("|]"))
s.push(p)
p=f.k(0,i).j(0,h)
s=new K.r(H.b([],r))
s.p(new H.q("]"))
p.a.push(s)
p.c=!0
p=f.k(0,i).j(0,i)
s=H.b([],q)
p.a.push(new K.af(s))
p=new K.r(H.b([],r))
p.p(new H.q("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aR())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.af(q))
r=new K.r(H.b([],r))
r.p(new H.q("*_`["))
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
$1:function(a){P.mc(C.m,new V.jl(this.a))},
$S:2}
V.jl.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.a_(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:4}
V.jn.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:55}
V.js.prototype={
dE:function(a,b,c){var s,r,q,p,o,n,m=this,l=W.l0(null)
l.src=b
l.width=64
l.height=64
s=l.style
s.border="solid 2px white"
s=m.c
r=J.aP(s)
q=r.gbl(s)
p=q.gl(q)
W.a3(l,"click",new V.ju(m,l,b,p),!1)
r.gbl(s).n(0,l)
s=r.gbl(s)
r=document.createElement("br")
r.toString
s.n(0,r)
o=P.mg().gcN().h(0,m.a)
if(o==null){m.dC(p)
n=c}else n=P.hX(o,null)===p
if(n)l.click()},
n:function(a,b){return this.dE(a,b,!1)},
dC:function(a){var s,r,q=P.mg(),p=t.N,o=P.nT(q.gcN(),p,p)
o.m(0,this.a,""+a)
s=q.en(0,o)
p=window.history
p.toString
r=s.gcc()
p.replaceState(new P.kk([],[]).bM(""),"",r)}}
V.ju.prototype={
$1:function(a){var s=this,r=s.a,q=J.lD(r.c)
q.C(q,new V.jt())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.dC(s.d)},
$S:3}
V.jt.prototype={
$1:function(a){var s
if(t.R.b(a)){s=a.style
s.border="solid 2px white"}},
$S:56}
X.kQ.prototype={
$1:function(a){this.a.sdP(this.b.f.i3(a))},
$S:57}
X.kR.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dF("Vertex Shader for distort","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dF("Fragment Shader for distort","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:1};(function aliases(){var s=J.a.prototype
s.eD=s.i
s=J.bg.prototype
s.eF=s.i
s=P.h.prototype
s.eE=s.bN
s=W.A.prototype
s.bR=s.ap
s=W.dT.prototype
s.eG=s.az
s=K.cS.prototype
s.eC=s.aK
s.bS=s.i
s=O.eL.prototype
s.d0=s.aG
s=O.d8.prototype
s.d1=s.aG})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pf","nP",58)
r(P,"pU","or",9)
r(P,"pV","os",9)
r(P,"pW","ot",9)
q(P,"mS","pP",4)
r(W,"ry","ip",44)
p(W,"q6",4,null,["$4"],["ou"],21,0)
p(W,"q7",4,null,["$4"],["ov"],21,0)
var j
o(j=E.bC.prototype,"gei",0,0,null,["$1","$0"],["ej","ic"],0,0)
o(j,"geg",0,0,null,["$1","$0"],["eh","i9"],0,0)
n(j,"gi7","i8",6)
n(j,"gia","ib",6)
o(j=E.fu.prototype,"gd3",0,0,null,["$1","$0"],["d5","d4"],0,0)
m(j,"gir","eo",4)
l(j=X.fL.prototype,"gfC","fD",2)
l(j,"gfn","fo",2)
l(j,"gfu","fv",3)
l(j,"gfG","fH",25)
l(j,"gfE","fF",25)
l(j,"gfK","fL",3)
l(j,"gfO","fP",3)
l(j,"gfA","fB",3)
l(j,"gfM","fN",3)
l(j,"gfw","fz",3)
l(j,"gfQ","fR",36)
l(j,"gfS","fT",2)
l(j,"gh7","h8",12)
l(j,"gh3","h4",12)
l(j,"gh5","h6",12)
o(D.bY.prototype,"geM",0,0,null,["$1","$0"],["aD","eN"],0,0)
o(j=D.cY.prototype,"gdi",0,0,null,["$1","$0"],["dj","fI"],0,0)
l(j,"gfU","fV",38)
n(j,"gfh","fi",24)
n(j,"gfY","fZ",24)
k(V.a5.prototype,"gl","cE",15)
k(V.F.prototype,"gl","cE",15)
o(j=U.c0.prototype,"gaW",0,0,null,["$1","$0"],["T","af"],0,0)
n(j,"gff","fg",20)
n(j,"gfW","fX",20)
o(j=U.dC.prototype,"gaW",0,0,null,["$1","$0"],["T","af"],0,0)
l(j,"gc1","c2",13)
l(j,"gc3","c4",13)
l(j,"gc5","c6",13)
o(j=U.dD.prototype,"gaW",0,0,null,["$1","$0"],["T","af"],0,0)
l(j,"gc1","c2",1)
l(j,"gc3","c4",1)
l(j,"gc5","c6",1)
l(j,"gf8","f9",1)
l(j,"gfa","fb",1)
l(j,"ghv","hw",1)
l(j,"ght","hu",1)
l(j,"ghr","hs",1)
l(U.dE.prototype,"gfd","fe",1)
o(j=M.cD.prototype,"gX",0,0,null,["$1","$0"],["Y","bd"],0,0)
n(j,"gh_","h0",23)
n(j,"gh1","h2",23)
o(M.cH.prototype,"gX",0,0,null,["$1","$0"],["Y","bd"],0,0)
o(j=M.cO.prototype,"gX",0,0,null,["$1","$0"],["Y","bd"],0,0)
n(j,"gfp","fq",6)
n(j,"gfs","ft",6)
o(j=O.d6.prototype,"gbt",0,0,null,["$1","$0"],["a9","av"],0,0)
o(j,"gdl",0,0,null,["$1","$0"],["dm","hg"],0,0)
n(j,"gfj","fk",22)
n(j,"gfl","fm",22)
o(O.dl.prototype,"gbt",0,0,null,["$1","$0"],["a9","av"],0,0)
o(X.f_.prototype,"geR",0,0,null,["$1","$0"],["a0","eS"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.l4,J.a,J.ah,P.J,P.dM,P.h,H.bh,P.eB,H.cP,H.fI,H.cF,H.jF,H.ja,H.ht,H.bA,P.K,H.iK,H.eI,H.eE,H.au,H.h5,P.dZ,P.cp,P.bP,P.fP,P.cc,P.fj,P.kw,P.e5,P.kc,P.dL,P.j,P.hI,P.d4,P.dk,P.en,P.iD,P.ku,P.kt,P.Z,P.bB,P.eZ,P.dn,P.h2,P.iz,P.ai,P.a_,P.bQ,P.jK,P.hn,W.ie,W.l_,W.le,W.co,W.L,W.df,W.dT,W.hy,W.cQ,W.kg,W.hJ,P.kj,P.e0,P.hl,K.aR,K.cS,K.f4,K.r,L.fg,L.fv,L.fw,L.jB,O.ad,O.da,E.i7,E.bC,E.bW,E.c7,E.h0,E.jc,E.fu,Z.fN,Z.dG,Z.by,Z.cT,Z.bn,D.i9,D.bZ,D.Q,X.cB,X.eG,X.iI,X.iO,X.a8,X.j6,X.jD,X.fL,D.bY,V.T,V.aD,V.is,V.d9,V.bi,V.V,V.W,V.bI,V.f6,V.a5,V.F,U.dC,U.dD,U.dE,M.cH,M.cO,A.ek,A.i1,A.aE,A.ba,A.bc,A.bj,A.bl,A.iS,A.dv,A.dw,A.dy,A.dB,A.a2,A.jI,F.aG,F.iw,F.iJ,F.jh,F.fa,F.fb,F.ji,F.cj,F.I,F.ck,F.cl,F.k1,F.k2,O.bK,O.eL,O.iT,T.jv,X.jr,X.iE,X.f_,V.aC,V.jk,V.js])
q(J.a,[J.eC,J.cW,J.bg,J.w,J.c2,J.bf,H.db,H.a1,W.e,W.i_,W.bw,W.cC,W.aT,W.H,W.fU,W.ar,W.ii,W.ij,W.fW,W.cL,W.fY,W.ik,W.m,W.h3,W.aH,W.iB,W.h7,W.bE,W.iN,W.j3,W.hb,W.hc,W.aI,W.hd,W.hf,W.aK,W.hj,W.hm,W.aM,W.ho,W.aN,W.hu,W.an,W.hA,W.jz,W.ax,W.hC,W.jE,W.jP,W.hK,W.hM,W.hO,W.hQ,W.hS,P.aX,P.h9,P.b0,P.hh,P.jb,P.hv,P.b2,P.hE,P.i2,P.fR,P.c9,P.hr])
q(J.bg,[J.f0,J.bN,J.aW])
r(J.iG,J.w)
q(J.c2,[J.cV,J.eD])
q(P.J,[H.cX,P.fz,H.eF,H.fH,H.f8,H.h1,P.ej,P.eW,P.aA,P.fJ,P.fG,P.cb,P.eo,P.eq])
r(P.d0,P.dM)
q(P.d0,[H.ch,W.fS,W.a6,P.ew])
r(H.q,H.ch)
q(P.h,[H.n,H.aY,H.b5,P.cU])
q(H.n,[H.d1,H.cZ])
r(H.cM,H.aY)
q(P.eB,[H.eK,H.fO])
r(H.d5,H.d1)
r(H.cG,H.cF)
r(H.dg,P.fz)
q(H.bA,[H.fo,H.iH,H.kM,H.kN,H.kO,P.k6,P.k5,P.k7,P.k8,P.kp,P.ko,P.kG,P.ke,P.kf,P.iL,P.iP,P.jT,P.jS,P.il,P.im,P.jO,P.jL,P.jM,P.jN,P.kr,P.kq,P.kA,P.kB,P.kC,W.io,W.j4,W.j5,W.jg,W.jp,W.k9,W.j8,W.j7,W.kh,W.ki,W.kn,W.kv,P.kl,P.km,P.kz,P.kH,P.ix,P.iy,P.i3,E.jd,E.je,E.jf,E.jy,D.iu,D.iv,F.kU,F.kI,F.jj,F.k4,F.k3,F.jZ,F.k_,O.iW,O.iX,O.iY,O.iZ,O.j_,O.j0,O.j1,O.j2,T.jx,T.jw,V.kT,V.jm,V.jl,V.jn,V.ju,V.jt,X.kQ,X.kR])
q(H.fo,[H.fh,H.bV])
r(P.d3,P.K)
q(P.d3,[H.U,W.fQ])
r(H.c6,H.a1)
q(H.c6,[H.dO,H.dQ])
r(H.dP,H.dO)
r(H.bG,H.dP)
r(H.dR,H.dQ)
r(H.dc,H.dR)
q(H.dc,[H.eR,H.eS,H.eT,H.eU,H.eV,H.dd,H.bH])
r(H.e_,H.h1)
r(P.dW,P.cU)
r(P.kd,P.kw)
r(P.dS,P.e5)
r(P.dK,P.dS)
r(P.e3,P.d4)
r(P.ci,P.e3)
q(P.en,[P.i5,P.iq])
r(P.ep,P.fj)
q(P.ep,[P.i6,P.iC,P.jU,P.jR])
r(P.jQ,P.iq)
q(P.aA,[P.dj,P.eA])
r(P.fV,P.bQ)
q(W.e,[W.v,W.ev,W.c3,W.av,W.dU,W.aw,W.aj,W.dX,W.fM,W.cm,P.em,P.bb])
q(W.v,[W.A,W.aB,W.cn])
q(W.A,[W.u,P.o])
q(W.u,[W.eh,W.ei,W.bU,W.bx,W.bz,W.bd,W.ex,W.c1,W.f9,W.bm,W.dp,W.fm,W.fn,W.cd])
r(W.id,W.aT)
r(W.cI,W.fU)
q(W.ar,[W.ig,W.ih])
r(W.fX,W.fW)
r(W.cK,W.fX)
r(W.fZ,W.fY)
r(W.eu,W.fZ)
r(W.al,W.bw)
r(W.h4,W.h3)
r(W.c_,W.h4)
r(W.h8,W.h7)
r(W.bD,W.h8)
r(W.b4,W.m)
q(W.b4,[W.bF,W.am,W.bM])
r(W.eO,W.hb)
r(W.eP,W.hc)
r(W.he,W.hd)
r(W.eQ,W.he)
r(W.hg,W.hf)
r(W.de,W.hg)
r(W.hk,W.hj)
r(W.f2,W.hk)
r(W.f7,W.hm)
r(W.dV,W.dU)
r(W.fd,W.dV)
r(W.hp,W.ho)
r(W.fe,W.hp)
r(W.fi,W.hu)
r(W.hB,W.hA)
r(W.fp,W.hB)
r(W.dY,W.dX)
r(W.fq,W.dY)
r(W.hD,W.hC)
r(W.fx,W.hD)
r(W.bo,W.am)
r(W.hL,W.hK)
r(W.fT,W.hL)
r(W.dH,W.cL)
r(W.hN,W.hM)
r(W.h6,W.hN)
r(W.hP,W.hO)
r(W.dN,W.hP)
r(W.hR,W.hQ)
r(W.hq,W.hR)
r(W.hT,W.hS)
r(W.hx,W.hT)
r(W.h_,W.fQ)
r(W.dI,P.cc)
r(W.hz,W.dT)
r(P.kk,P.kj)
r(P.ag,P.hl)
r(P.ha,P.h9)
r(P.eH,P.ha)
r(P.hi,P.hh)
r(P.eX,P.hi)
r(P.ca,P.o)
r(P.hw,P.hv)
r(P.fk,P.hw)
r(P.hF,P.hE)
r(P.fy,P.hF)
r(P.el,P.fR)
r(P.eY,P.bb)
r(P.hs,P.hr)
r(P.ff,P.hs)
q(K.cS,[K.af,L.dr])
q(E.i7,[Z.bX,A.bJ,T.bL])
q(D.Q,[D.aU,D.aV,D.B,X.f3])
q(X.f3,[X.d2,X.c4,X.c5,X.dq])
q(O.ad,[D.cY,U.c0,M.cD])
q(D.i9,[U.ib,U.a0])
r(U.cE,U.a0)
q(A.bJ,[A.cJ,A.d7,A.dm])
q(A.a2,[A.cf,A.fC,A.fD,A.fE,A.fA,A.ds,A.fB,A.dt,A.du,A.fF,A.dx,A.cg,A.dz,A.dA])
r(F.jo,F.iw)
r(F.jH,F.iJ)
r(F.k0,F.k1)
r(F.j9,F.k2)
q(O.bK,[O.et,O.d6,O.dl])
q(O.eL,[O.iQ,O.iR,O.d8])
q(O.d8,[O.iU,O.iV])
q(T.bL,[T.fr,T.ft])
r(T.fs,T.fr)
q(X.jr,[X.i4,X.iA])
q(V.aC,[V.er,V.ey,V.ez,V.f1])
s(H.ch,H.fI)
s(H.dO,P.j)
s(H.dP,H.cP)
s(H.dQ,P.j)
s(H.dR,H.cP)
s(P.dM,P.j)
s(P.e3,P.hI)
s(P.e5,P.dk)
s(W.fU,W.ie)
s(W.fW,P.j)
s(W.fX,W.L)
s(W.fY,P.j)
s(W.fZ,W.L)
s(W.h3,P.j)
s(W.h4,W.L)
s(W.h7,P.j)
s(W.h8,W.L)
s(W.hb,P.K)
s(W.hc,P.K)
s(W.hd,P.j)
s(W.he,W.L)
s(W.hf,P.j)
s(W.hg,W.L)
s(W.hj,P.j)
s(W.hk,W.L)
s(W.hm,P.K)
s(W.dU,P.j)
s(W.dV,W.L)
s(W.ho,P.j)
s(W.hp,W.L)
s(W.hu,P.K)
s(W.hA,P.j)
s(W.hB,W.L)
s(W.dX,P.j)
s(W.dY,W.L)
s(W.hC,P.j)
s(W.hD,W.L)
s(W.hK,P.j)
s(W.hL,W.L)
s(W.hM,P.j)
s(W.hN,W.L)
s(W.hO,P.j)
s(W.hP,W.L)
s(W.hQ,P.j)
s(W.hR,W.L)
s(W.hS,P.j)
s(W.hT,W.L)
s(P.h9,P.j)
s(P.ha,W.L)
s(P.hh,P.j)
s(P.hi,W.L)
s(P.hv,P.j)
s(P.hw,W.L)
s(P.hE,P.j)
s(P.hF,W.L)
s(P.fR,P.K)
s(P.hr,P.j)
s(P.hs,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",X:"double",a4:"num",l:"String",ac:"bool",ai:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Q?])","~(Q)","~(m)","~(am)","~()","~(l,@)","~(k,h<bC>)","~(aG)","~(k,k)","~(~())","ai()","~(@,@)","~(bM)","~(Q?)","l(k)","X()","~(ce,l,k)","ac(v)","ac(aJ)","ac(l)","~(k,h<a0?>)","ac(A,l,l,co)","~(k,h<bi>)","~(k,h<aL>)","~(k,h<as>)","~(bF)","@()","~(~(Q))","A(v)","ai(@)","~(l,l?)","~(N?,N?)","~(a4)","~(@)","ai(@,@)","~(v,v?)","~(bo)","ai(~())","ac(h<as>)","l(l)","@(l)","@(@)","G<l,l>(G<l,l>,l)","ce(@,@)","l(e)","~(cj,X,X)","bX(k)","~(l,k)","@(@,l)","~(l[@])","k(ba,ba)","k(bc,bc)","k(bj,bj)","k(bl,bl)","~(jA)","ac(aC?)","~(A)","~(l)","k(@,@)","k(k,k)","W(X)","~(l,l)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oN(v.typeUniverse,JSON.parse('{"f0":"bg","bN":"bg","aW":"bg","qr":"m","qD":"m","qt":"bb","qs":"e","qL":"e","qP":"e","qq":"o","qE":"o","qu":"u","qI":"u","qF":"v","qC":"v","re":"aj","qy":"b4","qv":"aB","qQ":"aB","qO":"am","qG":"bD","qz":"H","qA":"an","qK":"bG","qJ":"a1","eC":{"ac":[]},"bg":{"lS":[]},"w":{"p":["1"],"n":["1"],"h":["1"]},"iG":{"w":["1"],"p":["1"],"n":["1"],"h":["1"]},"c2":{"X":[],"a4":[]},"cV":{"X":[],"k":[],"a4":[]},"eD":{"X":[],"a4":[]},"bf":{"l":[]},"cX":{"J":[]},"q":{"j":["k"],"p":["k"],"n":["k"],"h":["k"],"j.E":"k"},"n":{"h":["1"]},"d1":{"n":["1"],"h":["1"]},"aY":{"h":["2"],"h.E":"2"},"cM":{"aY":["1","2"],"n":["2"],"h":["2"],"h.E":"2"},"d5":{"d1":["2"],"n":["2"],"h":["2"],"h.E":"2"},"b5":{"h":["1"],"h.E":"1"},"ch":{"j":["1"],"p":["1"],"n":["1"],"h":["1"]},"cF":{"G":["1","2"]},"cG":{"G":["1","2"]},"dg":{"J":[]},"eF":{"J":[]},"fH":{"J":[]},"bA":{"cR":[]},"fo":{"cR":[]},"fh":{"cR":[]},"bV":{"cR":[]},"f8":{"J":[]},"U":{"K":["1","2"],"G":["1","2"],"K.V":"2"},"cZ":{"n":["1"],"h":["1"],"h.E":"1"},"eE":{"m3":[]},"c6":{"y":["1"],"a1":[]},"bG":{"j":["X"],"y":["X"],"p":["X"],"a1":[],"n":["X"],"h":["X"],"j.E":"X"},"dc":{"j":["k"],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"]},"eR":{"j":["k"],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eS":{"j":["k"],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eT":{"j":["k"],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eU":{"j":["k"],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eV":{"j":["k"],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"dd":{"j":["k"],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"bH":{"j":["k"],"ce":[],"y":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"h1":{"J":[]},"e_":{"J":[]},"dZ":{"jA":[]},"dW":{"h":["1"],"h.E":"1"},"dK":{"dk":["1"],"n":["1"],"h":["1"]},"cU":{"h":["1"]},"d0":{"j":["1"],"p":["1"],"n":["1"],"h":["1"]},"d3":{"K":["1","2"],"G":["1","2"]},"K":{"G":["1","2"]},"d4":{"G":["1","2"]},"ci":{"G":["1","2"]},"dS":{"dk":["1"],"n":["1"],"h":["1"]},"X":{"a4":[]},"k":{"a4":[]},"p":{"n":["1"],"h":["1"]},"ej":{"J":[]},"fz":{"J":[]},"eW":{"J":[]},"aA":{"J":[]},"dj":{"J":[]},"eA":{"J":[]},"fJ":{"J":[]},"fG":{"J":[]},"cb":{"J":[]},"eo":{"J":[]},"eZ":{"J":[]},"dn":{"J":[]},"eq":{"J":[]},"bQ":{"fK":[]},"hn":{"fK":[]},"fV":{"fK":[]},"u":{"A":[],"v":[],"e":[]},"bd":{"A":[],"v":[],"e":[]},"A":{"v":[],"e":[]},"al":{"bw":[]},"bF":{"m":[]},"am":{"m":[]},"v":{"e":[]},"av":{"e":[]},"aw":{"e":[]},"aj":{"e":[]},"bM":{"m":[]},"b4":{"m":[]},"bo":{"am":[],"m":[]},"co":{"aJ":[]},"eh":{"A":[],"v":[],"e":[]},"ei":{"A":[],"v":[],"e":[]},"bU":{"A":[],"v":[],"e":[]},"bx":{"A":[],"v":[],"e":[]},"bz":{"A":[],"v":[],"e":[]},"aB":{"v":[],"e":[]},"cK":{"j":["ag<a4>"],"p":["ag<a4>"],"y":["ag<a4>"],"n":["ag<a4>"],"h":["ag<a4>"],"j.E":"ag<a4>"},"cL":{"ag":["a4"]},"eu":{"j":["l"],"p":["l"],"y":["l"],"n":["l"],"h":["l"],"j.E":"l"},"fS":{"j":["A"],"p":["A"],"n":["A"],"h":["A"],"j.E":"A"},"c_":{"j":["al"],"p":["al"],"y":["al"],"n":["al"],"h":["al"],"j.E":"al"},"ev":{"e":[]},"ex":{"A":[],"v":[],"e":[]},"bD":{"j":["v"],"p":["v"],"y":["v"],"n":["v"],"h":["v"],"j.E":"v"},"c1":{"A":[],"v":[],"e":[]},"c3":{"e":[]},"eO":{"K":["l","@"],"G":["l","@"],"K.V":"@"},"eP":{"K":["l","@"],"G":["l","@"],"K.V":"@"},"eQ":{"j":["aI"],"p":["aI"],"y":["aI"],"n":["aI"],"h":["aI"],"j.E":"aI"},"a6":{"j":["v"],"p":["v"],"n":["v"],"h":["v"],"j.E":"v"},"de":{"j":["v"],"p":["v"],"y":["v"],"n":["v"],"h":["v"],"j.E":"v"},"f2":{"j":["aK"],"p":["aK"],"y":["aK"],"n":["aK"],"h":["aK"],"j.E":"aK"},"f7":{"K":["l","@"],"G":["l","@"],"K.V":"@"},"f9":{"A":[],"v":[],"e":[]},"fd":{"j":["av"],"p":["av"],"y":["av"],"e":[],"n":["av"],"h":["av"],"j.E":"av"},"fe":{"j":["aM"],"p":["aM"],"y":["aM"],"n":["aM"],"h":["aM"],"j.E":"aM"},"fi":{"K":["l","l"],"G":["l","l"],"K.V":"l"},"bm":{"A":[],"v":[],"e":[]},"dp":{"A":[],"v":[],"e":[]},"fm":{"A":[],"v":[],"e":[]},"fn":{"A":[],"v":[],"e":[]},"cd":{"A":[],"v":[],"e":[]},"fp":{"j":["aj"],"p":["aj"],"y":["aj"],"n":["aj"],"h":["aj"],"j.E":"aj"},"fq":{"j":["aw"],"p":["aw"],"y":["aw"],"e":[],"n":["aw"],"h":["aw"],"j.E":"aw"},"fx":{"j":["ax"],"p":["ax"],"y":["ax"],"n":["ax"],"h":["ax"],"j.E":"ax"},"fM":{"e":[]},"cm":{"e":[]},"cn":{"v":[],"e":[]},"fT":{"j":["H"],"p":["H"],"y":["H"],"n":["H"],"h":["H"],"j.E":"H"},"dH":{"ag":["a4"]},"h6":{"j":["aH?"],"p":["aH?"],"y":["aH?"],"n":["aH?"],"h":["aH?"],"j.E":"aH?"},"dN":{"j":["v"],"p":["v"],"y":["v"],"n":["v"],"h":["v"],"j.E":"v"},"hq":{"j":["aN"],"p":["aN"],"y":["aN"],"n":["aN"],"h":["aN"],"j.E":"aN"},"hx":{"j":["an"],"p":["an"],"y":["an"],"n":["an"],"h":["an"],"j.E":"an"},"fQ":{"K":["l","l"],"G":["l","l"]},"h_":{"K":["l","l"],"G":["l","l"],"K.V":"l"},"dI":{"cc":["1"]},"df":{"aJ":[]},"dT":{"aJ":[]},"hz":{"aJ":[]},"hy":{"aJ":[]},"e0":{"bE":[]},"ew":{"j":["A"],"p":["A"],"n":["A"],"h":["A"],"j.E":"A"},"ag":{"hl":["1"]},"eH":{"j":["aX"],"p":["aX"],"n":["aX"],"h":["aX"],"j.E":"aX"},"eX":{"j":["b0"],"p":["b0"],"n":["b0"],"h":["b0"],"j.E":"b0"},"ca":{"o":[],"A":[],"v":[],"e":[]},"fk":{"j":["l"],"p":["l"],"n":["l"],"h":["l"],"j.E":"l"},"o":{"A":[],"v":[],"e":[]},"fy":{"j":["b2"],"p":["b2"],"n":["b2"],"h":["b2"],"j.E":"b2"},"el":{"K":["l","@"],"G":["l","@"],"K.V":"@"},"em":{"e":[]},"bb":{"e":[]},"eY":{"e":[]},"ff":{"j":["G<@,@>"],"p":["G<@,@>"],"n":["G<@,@>"],"h":["G<@,@>"],"j.E":"G<@,@>"},"cS":{"aZ":[]},"aR":{"aZ":[]},"af":{"aZ":[]},"f4":{"aZ":[]},"r":{"aZ":[]},"dr":{"aZ":[]},"ad":{"h":["1"],"ad.T":"1"},"aU":{"Q":[]},"aV":{"Q":[]},"B":{"Q":[]},"d2":{"Q":[]},"c4":{"Q":[]},"c5":{"Q":[]},"f3":{"Q":[]},"dq":{"Q":[]},"nx":{"as":[]},"bY":{"as":[]},"nX":{"as":[]},"of":{"as":[]},"cY":{"ad":["as"],"h":["as"],"ad.T":"as"},"cE":{"a0":[]},"c0":{"ad":["a0?"],"a0":[],"h":["a0?"],"ad.T":"a0?"},"dC":{"a0":[]},"dD":{"a0":[]},"dE":{"a0":[]},"cD":{"ad":["aL"],"aL":[],"h":["aL"],"ad.T":"aL"},"cH":{"aL":[]},"cO":{"aL":[]},"cf":{"a2":[]},"cg":{"a2":[]},"cJ":{"bJ":[]},"d7":{"bJ":[]},"dm":{"bJ":[]},"fC":{"a2":[]},"fD":{"a2":[]},"fE":{"a2":[]},"fA":{"a2":[]},"ds":{"a2":[]},"fB":{"a2":[]},"dt":{"a2":[]},"du":{"a2":[]},"fF":{"a2":[]},"dx":{"a2":[]},"dz":{"a2":[]},"dA":{"a2":[]},"et":{"bK":[]},"d6":{"bK":[]},"dl":{"bK":[]},"ft":{"bL":[]},"fr":{"bL":[]},"fs":{"bL":[]},"er":{"aC":[]},"ey":{"aC":[]},"ez":{"aC":[]},"f1":{"aC":[]},"ce":{"p":["k"],"n":["k"],"h":["k"]}}'))
H.oM(v.typeUniverse,JSON.parse('{"ah":1,"n":1,"bh":1,"eK":2,"fO":1,"cP":1,"fI":1,"ch":1,"cF":2,"eI":1,"c6":1,"cc":1,"bP":1,"fj":2,"dL":1,"cU":1,"d0":1,"d3":2,"hI":2,"d4":2,"dS":1,"dM":1,"e3":2,"e5":1,"en":2,"ep":2,"eB":1,"dI":1,"L":1,"cQ":1,"aU":1,"aV":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lu
return{cR:s("bU"),fK:s("bw"),Y:s("bx"),eT:s("bX"),ed:s("by"),gA:s("bz"),ar:s("cC"),gw:s("n<@>"),h:s("A"),m:s("bC"),bU:s("J"),aD:s("m"),c8:s("al"),bX:s("c_"),b:s("cR"),I:s("bE"),R:s("c1"),eu:s("w<ek>"),i:s("w<nx>"),cn:s("w<ba>"),U:s("w<bY>"),fD:s("w<bc>"),C:s("w<bd>"),v:s("w<aG>"),fv:s("w<cT>"),e:s("w<as>"),L:s("w<qH>"),F:s("w<p<bd>>"),z:s("w<aZ>"),fA:s("w<bi>"),r:s("w<aJ>"),fj:s("w<qN>"),cG:s("w<V>"),eg:s("w<bj>"),o:s("w<nX>"),ba:s("w<aL>"),D:s("w<of>"),c3:s("w<bl>"),g9:s("w<cc<N>>"),s:s("w<l>"),d:s("w<bL>"),gT:s("w<ax>"),ab:s("w<dr>"),gN:s("w<ce>"),dC:s("w<a2>"),c:s("w<dv>"),V:s("w<dw>"),B:s("w<dy>"),J:s("w<dB>"),k:s("w<cj>"),n:s("w<X>"),gn:s("w<@>"),t:s("w<k>"),g6:s("w<aC?>"),eJ:s("w<a0?>"),bc:s("w<bK?>"),p:s("w<cg?>"),a:s("w<~(Q)>"),T:s("cW"),eH:s("lS"),M:s("aW"),aU:s("y<@>"),fX:s("U<k,ac>"),y:s("U<k,k>"),O:s("p<dv>"),x:s("p<dw>"),E:s("p<dy>"),h2:s("p<dB>"),aH:s("p<@>"),bv:s("d2"),f:s("G<@,@>"),dv:s("d5<l,l>"),gc:s("bi"),bK:s("c3"),Z:s("c4"),bZ:s("c5"),cH:s("db"),dE:s("a1"),bm:s("bH"),P:s("ai"),K:s("N"),q:s("ag<a4>"),fJ:s("m3"),ew:s("ca"),fg:s("bJ"),N:s("l"),g7:s("o"),bY:s("bm"),aW:s("cd"),aF:s("jA"),bJ:s("fv"),dr:s("dq"),u:s("ds"),w:s("cf"),g:s("dt"),bw:s("du"),Q:s("dx"),j:s("cg"),G:s("dz"),l:s("dA"),ak:s("bN"),dw:s("ci<l,l>"),dD:s("fK"),h9:s("cn"),ac:s("a6"),cJ:s("ac"),gR:s("X"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("N*"),aS:s("cJ?"),bG:s("lR<ai>?"),eI:s("d7?"),X:s("N?"),gW:s("c9?"),dm:s("dm?"),dl:s("fg?"),f7:s("fw?"),W:s("cf?"),H:s("a4"),g8:s("~(Q)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bx.prototype
C.i=W.bz.prototype
C.R=W.bd.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.c=J.cV.prototype
C.V=J.cW.prototype
C.d=J.c2.prototype
C.a=J.bf.prototype
C.W=J.aW.prototype
C.a0=H.bH.prototype
C.C=J.f0.prototype
C.o=P.c9.prototype
C.D=W.dp.prototype
C.p=J.bN.prototype
C.E=W.bo.prototype
C.F=W.cm.prototype
C.G=new E.bW("Browser.chrome")
C.r=new E.bW("Browser.firefox")
C.t=new E.bW("Browser.edge")
C.H=new E.bW("Browser.other")
C.a6=new P.i6()
C.I=new P.i5()
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.P=new P.eZ()
C.e=new P.jQ()
C.Q=new P.jU()
C.f=new P.kd()
C.m=new P.bB(0)
C.S=new P.bB(5e6)
C.T=new P.iD("element",!1,!1,!1)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.X=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.Y=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.w=H.b(s([]),t.s)
C.Z=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.z=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.A=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.a_=new H.cG(0,{},C.w,H.lu("cG<l,l>"))
C.a1=new E.c7("OperatingSystem.windows")
C.B=new E.c7("OperatingSystem.mac")
C.a2=new E.c7("OperatingSystem.linux")
C.a3=new E.c7("OperatingSystem.other")
C.a4=new P.jR(!1)
C.a5=new P.cp(null,2)})();(function staticFields(){$.ka=null
$.aS=0
$.cA=null
$.lH=null
$.mV=null
$.mR=null
$.n_=null
$.kJ=null
$.kP=null
$.lw=null
$.cs=null
$.e7=null
$.e8=null
$.lq=!1
$.aO=C.f
$.ak=H.b([],H.lu("w<N>"))
$.be=null
$.kZ=null
$.lO=null
$.lN=null
$.dJ=P.R(t.N,t.b)
$.ir=null
$.lU=null
$.lX=null
$.a9=null
$.b1=null
$.m5=null
$.bO=null
$.mm=null
$.ml=null
$.jV=null
$.jW=null
$.jX=null
$.mk=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qB","n5",function(){return H.q5("_$dart_dartClosure")})
s($,"qR","n7",function(){return H.b3(H.jG({
toString:function(){return"$receiver$"}}))})
s($,"qS","n8",function(){return H.b3(H.jG({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qT","n9",function(){return H.b3(H.jG(null))})
s($,"qU","na",function(){return H.b3(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qX","nd",function(){return H.b3(H.jG(void 0))})
s($,"qY","ne",function(){return H.b3(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qW","nc",function(){return H.b3(H.me(null))})
s($,"qV","nb",function(){return H.b3(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"r_","ng",function(){return H.b3(H.me(void 0))})
s($,"qZ","nf",function(){return H.b3(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rf","lA",function(){return P.oq()})
s($,"r0","nh",function(){return new P.jT().$0()})
s($,"r1","ni",function(){return new P.jS().$0()})
s($,"rg","nm",function(){return new Int8Array(H.cr(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rj","no",function(){return P.o8("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rw","np",function(){return P.p7()})
s($,"rh","nn",function(){return P.lT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"r8","nl",function(){return Z.ay(0)})
s($,"r2","nj",function(){return Z.ay(511)})
s($,"ra","aq",function(){return Z.ay(1)})
s($,"r9","bv",function(){return Z.ay(2)})
s($,"r4","bu",function(){return Z.ay(4)})
s($,"rb","b9",function(){return Z.ay(8)})
s($,"rc","bS",function(){return Z.ay(16)})
s($,"r5","ee",function(){return Z.ay(32)})
s($,"r6","ef",function(){return Z.ay(64)})
s($,"r7","nk",function(){return Z.ay(96)})
s($,"rd","cy",function(){return Z.ay(128)})
s($,"r3","bt",function(){return Z.ay(256)})
s($,"qx","n4",function(){return new V.is()})
r($,"qw","D",function(){return $.n4()})
r($,"qM","n6",function(){var q=V.lZ(),p=V.ld(),o=$.mk
return V.lV(q,p,o==null?$.mk=V.oo(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.db,DataView:H.a1,ArrayBufferView:H.a1,Float32Array:H.bG,Float64Array:H.bG,Int16Array:H.eR,Int32Array:H.eS,Int8Array:H.eT,Uint16Array:H.eU,Uint32Array:H.eV,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.bH,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.i_,HTMLAnchorElement:W.eh,HTMLAreaElement:W.ei,HTMLBaseElement:W.bU,Blob:W.bw,HTMLBodyElement:W.bx,HTMLCanvasElement:W.bz,CanvasRenderingContext2D:W.cC,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSPerspective:W.id,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cI,MSStyleCSSProperties:W.cI,CSS2Properties:W.cI,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSNumericValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSUnitValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.aT,CSSRotation:W.aT,CSSScale:W.aT,CSSSkew:W.aT,CSSTranslation:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.ig,CSSUnparsedValue:W.ih,DataTransferItemList:W.ii,HTMLDivElement:W.bd,DOMException:W.ij,ClientRectList:W.cK,DOMRectList:W.cK,DOMRectReadOnly:W.cL,DOMStringList:W.eu,DOMTokenList:W.ik,Element:W.A,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.al,FileList:W.c_,FileWriter:W.ev,HTMLFormElement:W.ex,Gamepad:W.aH,History:W.iB,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,ImageData:W.bE,HTMLImageElement:W.c1,KeyboardEvent:W.bF,Location:W.iN,MediaList:W.j3,MessagePort:W.c3,MIDIInputMap:W.eO,MIDIOutputMap:W.eP,MimeType:W.aI,MimeTypeArray:W.eQ,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,DocumentType:W.v,Node:W.v,NodeList:W.de,RadioNodeList:W.de,Plugin:W.aK,PluginArray:W.f2,RTCStatsReport:W.f7,HTMLSelectElement:W.f9,SourceBuffer:W.av,SourceBufferList:W.fd,SpeechGrammar:W.aM,SpeechGrammarList:W.fe,SpeechRecognitionResult:W.aN,Storage:W.fi,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableCellElement:W.bm,HTMLTableDataCellElement:W.bm,HTMLTableHeaderCellElement:W.bm,HTMLTableElement:W.dp,HTMLTableRowElement:W.fm,HTMLTableSectionElement:W.fn,HTMLTemplateElement:W.cd,TextTrack:W.aw,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.fp,TextTrackList:W.fq,TimeRanges:W.jz,Touch:W.ax,TouchEvent:W.bM,TouchList:W.fx,TrackDefaultList:W.jE,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.jP,VideoTrackList:W.fM,WheelEvent:W.bo,Window:W.cm,DOMWindow:W.cm,Attr:W.cn,CSSRuleList:W.fT,ClientRect:W.dH,DOMRect:W.dH,GamepadList:W.h6,NamedNodeMap:W.dN,MozNamedAttrMap:W.dN,SpeechRecognitionResultList:W.hq,StyleSheetList:W.hx,SVGLength:P.aX,SVGLengthList:P.eH,SVGNumber:P.b0,SVGNumberList:P.eX,SVGPointList:P.jb,SVGScriptElement:P.ca,SVGStringList:P.fk,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b2,SVGTransformList:P.fy,AudioBuffer:P.i2,AudioParamMap:P.el,AudioTrackList:P.em,AudioContext:P.bb,webkitAudioContext:P.bb,BaseAudioContext:P.bb,OfflineAudioContext:P.eY,WebGL2RenderingContext:P.c9,SQLResultSetRowList:P.ff})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
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
var s=X.qf
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
