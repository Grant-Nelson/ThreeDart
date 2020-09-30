(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}var z=function(){var s=function(){}
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
if(typeof n=='function')n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.qs(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ly(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=='string')q=a[q]
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={l7:function l7(){},
l9:function(a){return new H.ef(a)},
kz:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
o2:function(a,b,c,d){if(t.gw.b(a))return new H.cy(a,b,c.J("@<0>").b6(d).J("cy<1,2>"))
return new H.aT(a,b,c.J("@<0>").b6(d).J("aT<1,2>"))},
l4:function(){return new P.c7("No element")},
nU:function(){return new P.c7("Too many elements")},
on:function(a,b){var s=J.aL(a)
if(typeof s!=="number")return s.a0()
H.eR(a,0,s-1,b)},
eR:function(a,b,c,d){if(c-b<=32)H.om(a,b,c,d)
else H.ol(a,b,c,d)},
om:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b2(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a4()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
ol:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a5(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a5(a6+a7,2),d=e-h,c=e+h,b=J.b2(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.Q(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ae()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a4()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
q=m
r=l
break}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ae()
if(j<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a4()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a4()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ae()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.m(a5,a6,b.h(a5,a4))
b.m(a5,a4,a0)
a4=q+1
b.m(a5,a7,b.h(a5,a4))
b.m(a5,a4,a2)
H.eR(a5,a6,r-2,a8)
H.eR(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.Q(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.Q(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ae()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}H.eR(a5,r,q,a8)}else H.eR(a5,r,q,a8)},
ef:function ef(a){this.a=a},
p:function p(a){this.a=a},
l:function l(){},
cM:function cM(){},
bc:function bc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b){this.a=null
this.b=a
this.c=b},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
fy:function fy(a,b){this.a=a
this.b=b},
cC:function cC(){},
fp:function fp(){},
c9:function c9(){},
nN:function(){throw H.b(P.B("Cannot modify unmodifiable Map"))},
n8:function(a){var s,r=H.n7(a)
if(r!=null)return r
s="minified:"+a
return s},
n1:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a6(a)
if(typeof s!="string")throw H.b(H.ax(a))
return s},
cY:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ma:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
eI:function(a){return H.o5(a)},
o5:function(a){var s,r,q
if(a instanceof P.N)return H.an(H.bK(a),null)
if(J.dG(a)===C.V||t.ak.b(a)){s=C.u(a)
if(H.m9(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.m9(q))return q}}return H.an(H.bK(a),null)},
m9:function(a){var s=a!=="Object"&&a!==""
return s},
o6:function(){if(!!self.location)return self.location.href
return null},
m8:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oe:function(a){var s,r,q,p=H.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.ch(q))throw H.b(H.ax(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aV(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.ax(q))}return H.m8(p)},
mb:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.ch(q))throw H.b(H.ax(q))
if(q<0)throw H.b(H.ax(q))
if(q>65535)return H.oe(a)}return H.m8(a)},
of:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.io()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ar:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aV(s,10))>>>0,56320|s&1023)}}throw H.b(P.a4(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
od:function(a){var s=H.c3(a).getFullYear()+0
return s},
ob:function(a){var s=H.c3(a).getMonth()+1
return s},
o7:function(a){var s=H.c3(a).getDate()+0
return s},
o8:function(a){var s=H.c3(a).getHours()+0
return s},
oa:function(a){var s=H.c3(a).getMinutes()+0
return s},
oc:function(a){var s=H.c3(a).getSeconds()+0
return s},
o9:function(a){var s=H.c3(a).getMilliseconds()+0
return s},
v:function(a){throw H.b(H.ax(a))},
d:function(a,b){if(a==null)J.aL(a)
throw H.b(H.cl(a,b))},
cl:function(a,b){var s,r,q="index"
if(!H.ch(b))return new P.ai(!0,b,q,null)
s=J.aL(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eJ(b,q)},
q9:function(a,b,c){if(a>c)return P.a4(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a4(b,a,c,"end",null)
return new P.ai(!0,b,"end",null)},
ax:function(a){return new P.ai(!0,a,null,null)},
q4:function(a){if(typeof a!="number")throw H.b(H.ax(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ew()
s=new Error()
s.dartException=a
r=H.qt
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qt:function(){return J.a6(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.aN(a))},
aZ:function(a){var s,r,q,p,o,n
a=H.n5(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m3:function(a,b){return new H.ev(a,b==null?null:b.method)},
l8:function(a,b){var s=b==null,r=s?null:b.method
return new H.ed(a,r,s?null:b.receiver)},
ag:function(a){if(a==null)return new H.iR(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bL(a,a.dartException)
return H.q0(a)},
bL:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aV(r,16)&8191)===10)switch(q){case 438:return H.bL(a,H.l8(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bL(a,H.m3(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nb()
o=$.nc()
n=$.nd()
m=$.ne()
l=$.nh()
k=$.ni()
j=$.ng()
$.nf()
i=$.nk()
h=$.nj()
g=p.ao(s)
if(g!=null)return H.bL(a,H.l8(s,g))
else{g=o.ao(s)
if(g!=null){g.method="call"
return H.bL(a,H.l8(s,g))}else{g=n.ao(s)
if(g==null){g=m.ao(s)
if(g==null){g=l.ao(s)
if(g==null){g=k.ao(s)
if(g==null){g=j.ao(s)
if(g==null){g=m.ao(s)
if(g==null){g=i.ao(s)
if(g==null){g=h.ao(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bL(a,H.m3(s,g))}}return H.bL(a,new H.fo(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cZ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bL(a,new P.ai(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cZ()
return a},
lA:function(a){var s
if(a==null)return new H.he(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.he(a)},
qb:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qk:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qk)
a.$identity=s
return s},
nM:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eY().constructor.prototype):Object.create(new H.bQ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aM
if(typeof r!=="number")return r.A()
$.aM=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lR(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nI(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lR(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nI:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n_,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nG:H.nF
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nJ:function(a,b,c,d){var s=H.lQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lR:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nL(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nJ(r,!p,s,b)
if(r===0){p=$.aM
if(typeof p!=="number")return p.A()
$.aM=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kV())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aM
if(typeof p!=="number")return p.A()
$.aM=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kV())+"."+H.f(s)+"("+m+");}")()},
nK:function(a,b,c,d){var s=H.lQ,r=H.nH
switch(b?-1:a){case 0:throw H.b(new H.eN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nL:function(a,b){var s,r,q,p,o,n,m=H.kV(),l=$.lO
if(l==null)l=$.lO=H.lN("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nK(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aM
if(typeof o!=="number")return o.A()
$.aM=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aM
if(typeof o!=="number")return o.A()
$.aM=o+1
return new Function(p+o+"}")()},
ly:function(a,b,c,d,e,f,g){return H.nM(a,b,c,d,!!e,!!f,g)},
nF:function(a,b){return H.ht(v.typeUniverse,H.bK(a.a),b)},
nG:function(a,b){return H.ht(v.typeUniverse,H.bK(a.c),b)},
lQ:function(a){return a.a},
nH:function(a){return a.c},
kV:function(){var s=$.lP
return s==null?$.lP=H.lN("self"):s},
lN:function(a){var s,r,q,p=new H.bQ("self","target","receiver","name"),o=J.l6(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bO("Field name "+a+" not found."))},
qs:function(a){throw H.b(new P.dY(a))},
qe:function(a){return v.getIsolateTag(a)},
rA:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qm:function(a){var s,r,q,p,o,n=$.mZ.$1(a),m=$.ky[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mX.$2(a,n)
if(q!=null){m=$.ky[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kQ(s)
$.ky[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kD[n]=s
return s}if(p==="-"){o=H.kQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n3(a,s)
if(p==="*")throw H.b(P.jz(n))
if(v.leafTags[n]===true){o=H.kQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n3(a,s)},
n3:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lD(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kQ:function(a){return J.lD(a,!1,null,!!a.$iA)},
qn:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kQ(s)
else return J.lD(s,c,null,null)},
qi:function(){if(!0===$.lB)return
$.lB=!0
H.qj()},
qj:function(){var s,r,q,p,o,n,m,l
$.ky=Object.create(null)
$.kD=Object.create(null)
H.qh()
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
qh:function(){var s,r,q,p,o,n,m=C.K()
m=H.cj(C.L,H.cj(C.M,H.cj(C.v,H.cj(C.v,H.cj(C.N,H.cj(C.O,H.cj(C.P(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mZ=new H.kA(p)
$.mX=new H.kB(o)
$.n4=new H.kC(n)},
cj:function(a,b){return a(b)||b},
nY:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
n6:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qa:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lG:function(a,b,c){var s=H.qq(a,b,c)
return s},
qq:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n5(b),'g'),H.qa(c))},
cs:function cs(){},
ct:function ct(a,b,c,d){var _=this
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
ev:function ev(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
iR:function iR(a){this.a=a},
he:function he(a){this.a=a
this.b=null},
bw:function bw(){},
f4:function f4(){},
eY:function eY(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
im:function im(a){this.a=a},
ip:function ip(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cl(b,a))},
pe:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.q9(a,b,c))
return b},
cT:function cT(){},
Y:function Y(){},
c0:function c0(){},
bF:function bF(){},
cU:function cU(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
cV:function cV(){},
c1:function c1(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
oj:function(a,b){var s=b.c
return s==null?b.c=H.ln(a,b.z,!0):s},
mh:function(a,b){var s=b.c
return s==null?b.c=H.dw(a,"lX",[b.z]):s},
mi:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mi(a.z)
return s===11||s===12},
oi:function(a){return a.cy},
lz:function(a){return H.lo(v.typeUniverse,a,!1)},
bn:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mH(a,r,!0)
case 7:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.ln(a,r,!0)
case 8:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mG(a,r,!0)
case 9:q=b.Q
p=H.dF(a,q,a0,a1)
if(p===q)return b
return H.dw(a,b.z,p)
case 10:o=b.z
n=H.bn(a,o,a0,a1)
m=b.Q
l=H.dF(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ll(a,n,l)
case 11:k=b.z
j=H.bn(a,k,a0,a1)
i=b.Q
h=H.pY(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mF(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dF(a,g,a0,a1)
o=b.z
n=H.bn(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lm(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hM("Attempted to substitute unexpected RTI kind "+c))}},
dF:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bn(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pZ:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bn(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pY:function(a,b,c,d){var s,r=b.a,q=H.dF(a,r,c,d),p=b.b,o=H.dF(a,p,c,d),n=b.c,m=H.pZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fR()
s.a=q
s.b=o
s.c=m
return s},
c:function(a,b){a[v.arrayRti]=b
return a},
q5:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n_(s)
return a.$S()}return null},
n0:function(a,b){var s
if(H.mi(b))if(a instanceof H.bw){s=H.q5(a)
if(s!=null)return s}return H.bK(a)},
bK:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lu(a)}if(Array.isArray(a))return H.mQ(a)
return H.lu(J.dG(a))},
mQ:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dC:function(a){var s=a.$ti
return s!=null?s:H.lu(a)},
lu:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pl(a,s)},
pl:function(a,b){var s=a instanceof H.bw?a.__proto__.__proto__.constructor:b,r=H.oX(v.typeUniverse,s.name)
b.$ccache=r
return r},
n_:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lo(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pk:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dB(q,a,H.pp)
if(!H.b3(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dB(q,a,H.ps)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.ch
else if(s===t.gR||s===t.p)r=H.po
else if(s===t.N)r=H.pq
else r=s===t.cJ?H.lv:null
if(r!=null)return H.dB(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.ql)){q.r="$i"+p
return H.dB(q,a,H.pr)}}else if(p===7)return H.dB(q,a,H.pi)
return H.dB(q,a,H.pg)},
dB:function(a,b,c){a.b=c
return a.b(b)},
pj:function(a){var s,r,q=this
if(!H.b3(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pd
else if(q===t.K)r=H.pc
else r=H.ph
q.a=r
return q.a(a)},
pR:function(a){var s,r=a.y
if(!H.b3(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pg:function(a){var s=this
if(a==null)return H.pR(s)
return H.Z(v.typeUniverse,H.n0(a,s),null,s,null)},
pi:function(a){if(a==null)return!0
return this.z.b(a)},
pr:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dG(a)[r]},
ry:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mR(a,s)},
ph:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mR(a,s)},
mR:function(a,b){throw H.b(H.oN(H.mx(a,H.n0(a,b),H.an(b,null))))},
mx:function(a,b,c){var s=P.i9(a),r=H.an(b==null?H.bK(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oN:function(a){return new H.du("TypeError: "+a)},
aa:function(a,b){return new H.du("TypeError: "+H.mx(a,null,b))},
pp:function(a){return a!=null},
pc:function(a){return a},
ps:function(a){return!0},
pd:function(a){return a},
lv:function(a){return!0===a||!1===a},
rk:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.aa(a,"bool"))},
rm:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.aa(a,"bool"))},
rl:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.aa(a,"bool?"))},
rn:function(a){if(typeof a=="number")return a
throw H.b(H.aa(a,"double"))},
rp:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.aa(a,"double"))},
ro:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.aa(a,"double?"))},
ch:function(a){return typeof a=="number"&&Math.floor(a)===a},
rq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.aa(a,"int"))},
rs:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.aa(a,"int"))},
rr:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.aa(a,"int?"))},
po:function(a){return typeof a=="number"},
rt:function(a){if(typeof a=="number")return a
throw H.b(H.aa(a,"num"))},
rv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.aa(a,"num"))},
ru:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.aa(a,"num?"))},
pq:function(a){return typeof a=="string"},
rw:function(a){if(typeof a=="string")return a
throw H.b(H.aa(a,"String"))},
lt:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.aa(a,"String"))},
rx:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.aa(a,"String?"))},
pU:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.A(r,H.an(a[q],b))
return s},
mS:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.c([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.a.A(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.A(" extends ",H.an(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.an(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.A(a3,H.an(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.A(a3,H.an(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lI(H.an(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
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
return J.lI(q===11||q===12?C.a.A("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.an(a.z,b))+">"
if(l===9){p=H.q_(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pU(o,b)+">"):p}if(l===11)return H.mS(a,b,null)
if(l===12)return H.mS(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q_:function(a){var s,r=H.n7(a)
if(r!=null)return r
s="minified:"+a
return s},
mI:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oX:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lo(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dx(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dw(a,b,q)
n[b]=o
return o}else return m},
oV:function(a,b){return H.mP(a.tR,b)},
oU:function(a,b){return H.mP(a.eT,b)},
lo:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mD(H.mB(a,null,b,c))
r.set(b,s)
return s},
ht:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mD(H.mB(a,b,c,!0))
q.set(c,r)
return r},
oW:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ll(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bm:function(a,b){b.a=H.pj
b.b=H.pk
return b},
dx:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.as(null,null)
s.y=b
s.cy=c
r=H.bm(a,s)
a.eC.set(c,r)
return r},
mH:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oS(a,b,r,c)
a.eC.set(r,s)
return s},
oS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b3(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.as(null,null)
q.y=6
q.z=b
q.cy=c
return H.bm(a,q)},
ln:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oR(a,b,r,c)
a.eC.set(r,s)
return s},
oR:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b3(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kE(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kE(q.z))return q
else return H.oj(a,b)}}p=new H.as(null,null)
p.y=7
p.z=b
p.cy=c
return H.bm(a,p)},
mG:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oP(a,b,r,c)
a.eC.set(r,s)
return s},
oP:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b3(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dw(a,"lX",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.as(null,null)
q.y=8
q.z=b
q.cy=c
return H.bm(a,q)},
oT:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.as(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bm(a,s)
a.eC.set(q,r)
return r},
hs:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oO:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dw:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hs(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.as(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bm(a,r)
a.eC.set(p,q)
return q},
ll:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hs(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bm(a,o)
a.eC.set(q,n)
return n},
mF:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hs(m)
if(j>0){s=l>0?",":""
r=H.hs(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oO(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bm(a,o)
a.eC.set(q,r)
return r},
lm:function(a,b,c,d){var s,r=b.cy+("<"+H.hs(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
oQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bn(a,b,r,0)
m=H.dF(a,c,r,0)
return H.lm(a,n,m,c!==m)}}l=new H.as(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bm(a,l)},
mB:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oH(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mC(a,r,g,f,!1)
else if(q===46)r=H.mC(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bl(a.u,a.e,f.pop()))
break
case 94:f.push(H.oT(a.u,f.pop()))
break
case 35:f.push(H.dx(a.u,5,"#"))
break
case 64:f.push(H.dx(a.u,2,"@"))
break
case 126:f.push(H.dx(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lk(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dw(p,n,o))
else{m=H.bl(p,a.e,n)
switch(m.y){case 11:f.push(H.lm(p,m,o,a.n))
break
default:f.push(H.ll(p,m,o))
break}}break
case 38:H.oI(a,f)
break
case 42:l=a.u
f.push(H.mH(l,H.bl(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ln(l,H.bl(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mG(l,H.bl(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fR()
j=p.sEA
i=p.sEA
n=f.pop()
if(typeof n=="number")switch(n){case-1:j=f.pop()
break
case-2:i=f.pop()
break
default:f.push(n)
break}else f.push(n)
o=f.splice(a.p)
H.lk(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mF(p,H.bl(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lk(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oK(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bl(a.u,a.e,h)},
oH:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mC:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mI(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.oi(o)+'"')
d.push(H.ht(s,o,n))}else d.push(p)
return m},
oI:function(a,b){var s=b.pop()
if(0===s){b.push(H.dx(a.u,1,"0&"))
return}if(1===s){b.push(H.dx(a.u,4,"1&"))
return}throw H.b(P.hM("Unexpected extended operation "+H.f(s)))},
bl:function(a,b,c){if(typeof c=="string")return H.dw(a,c,a.sEA)
else if(typeof c=="number")return H.oJ(a,b,c)
else return c},
lk:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bl(a,b,c[s])},
oK:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bl(a,b,c[s])},
oJ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hM("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hM("Bad index "+c+" for "+b.i(0)))},
Z:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b3(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b3(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Z(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Z(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Z(a,b,c,s,e)}if(r===8){if(!H.Z(a,b.z,c,d,e))return!1
return H.Z(a,H.mh(a,b),c,d,e)}if(r===7){s=H.Z(a,b.z,c,d,e)
return s}if(p===8){if(H.Z(a,b,c,d.z,e))return!0
return H.Z(a,b,c,H.mh(a,d),e)}if(p===7){s=H.Z(a,b,c,d.z,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.Z(a,k,c,j,e)||!H.Z(a,j,e,k,c))return!1}return H.mT(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mT(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pn(a,b,c,d,e)}return!1},
mT:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Z(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Z(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Z(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Z(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Z(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pn:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Z(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mI(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Z(a,H.ht(a,b,l[p]),c,r[p],e))return!1
return!0},
kE:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b3(a))if(r!==7)if(!(r===6&&H.kE(a.z)))s=r===8&&H.kE(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ql:function(a){var s
if(!H.b3(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b3:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mP:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
as:function as(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fR:function fR(){this.c=this.b=this.a=null},
fM:function fM(){},
du:function du(a){this.a=a},
n7:function(a){return v.mangledGlobalNames[a]},
qo:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hH:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lB==null){H.qi()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jz("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lZ()]
if(p!=null)return p
p=H.qm(a)
if(p!=null)return p
if(typeof a=="function")return C.X
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.lZ(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lZ:function(){var s=$.mz
return s==null?$.mz=v.getIsolateTag("_$dart_js"):s},
nV:function(a,b){if(!H.ch(a))throw H.b(P.lL(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a4(a,0,4294967295,"length",null))
return J.nW(new Array(a),b)},
l5:function(a,b){if(!H.ch(a)||a<0)throw H.b(P.bO("Length must be a non-negative integer: "+H.f(a)))
return H.c(new Array(a),b.J("x<0>"))},
nW:function(a,b){return J.l6(H.c(a,b.J("x<0>")))},
l6:function(a){a.fixed$length=Array
return a},
nX:function(a,b){return J.dK(a,b)},
dG:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cG.prototype
return J.cF.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.cH.prototype
if(typeof a=="boolean")return J.eb.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hH(a)},
qc:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hH(a)},
b2:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hH(a)},
hG:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hH(a)},
qd:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bH.prototype
return a},
dH:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bH.prototype
return a},
aJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hH(a)},
lI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qc(a).A(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dG(a).u(a,b)},
co:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b2(a).h(a,b)},
kS:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n1(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hG(a).m(a,b,c)},
nu:function(a,b){return J.dH(a).D(a,b)},
nv:function(a,b,c){return J.aJ(a).fX(a,b,c)},
nw:function(a,b,c,d){return J.aJ(a).hg(a,b,c,d)},
nx:function(a,b){return J.dH(a).W(a,b)},
dK:function(a,b){return J.qd(a).aY(a,b)},
kT:function(a,b){return J.b2(a).E(a,b)},
hK:function(a,b){return J.hG(a).H(a,b)},
ny:function(a,b,c,d){return J.aJ(a).hD(a,b,c,d)},
kU:function(a,b){return J.hG(a).C(a,b)},
nz:function(a){return J.aJ(a).ghl(a)},
bN:function(a){return J.aJ(a).gdv(a)},
nA:function(a){return J.aJ(a).gdA(a)},
ah:function(a){return J.dG(a).gR(a)},
b4:function(a){return J.hG(a).gM(a)},
aL:function(a){return J.b2(a).gl(a)},
lJ:function(a){return J.hG(a).i5(a)},
nB:function(a,b){return J.aJ(a).i8(a,b)},
nC:function(a,b,c){return J.dH(a).q(a,b,c)},
nD:function(a){return J.dH(a).ij(a)},
a6:function(a){return J.dG(a).i(a)},
a:function a(){},
eb:function eb(){},
cH:function cH(){},
bb:function bb(){},
eB:function eB(){},
bH:function bH(){},
aC:function aC(){},
x:function x(a){this.$ti=a},
il:function il(a){this.$ti=a},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bD:function bD(){},
cG:function cG(){},
cF:function cF(){},
aR:function aR(){}},P={
ox:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ck(new P.jZ(q),1)).observe(s,{childList:true})
return new P.jY(q,s,r)}else if(self.setImmediate!=null)return P.q2()
return P.q3()},
oy:function(a){self.scheduleImmediate(H.ck(new P.k_(a),0))},
oz:function(a){self.setImmediate(H.ck(new P.k0(a),0))},
oA:function(a){P.le(C.n,a)},
le:function(a,b){var s=C.c.a5(a.a,1000)
return P.oL(s<0?0:s,b)},
mm:function(a,b){var s=C.c.a5(a.a,1000)
return P.oM(s<0?0:s,b)},
oL:function(a,b){var s=new P.dt()
s.eA(a,b)
return s},
oM:function(a,b){var s=new P.dt()
s.eB(a,b)
return s},
ri:function(a){return new P.ce(a,1)},
oD:function(){return C.a5},
oE:function(a){return new P.ce(a,3)},
pu:function(a,b){return new P.dq(a,b.J("dq<0>"))},
pQ:function(){var s,r
for(s=$.ci;s!=null;s=$.ci){$.dE=null
r=s.b
$.ci=r
if(r==null)$.dD=null
s.a.$0()}},
pX:function(){$.lw=!0
try{P.pQ()}finally{$.dE=null
$.lw=!1
if($.ci!=null)$.lH().$1(P.mY())}},
pV:function(a){var s=new P.fz(a),r=$.dD
if(r==null){$.ci=$.dD=s
if(!$.lw)$.lH().$1(P.mY())}else $.dD=r.b=s},
pW:function(a){var s,r,q,p=$.ci
if(p==null){P.pV(a)
$.dE=$.dD
return}s=new P.fz(a)
r=$.dE
if(r==null){s.b=p
$.ci=$.dE=s}else{q=r.b
s.b=q
$.dE=r.b=s
if(q==null)$.dD=s}},
ml:function(a,b){var s=$.aI
if(s===C.f)return P.le(a,b)
return P.le(a,s.hm(b))},
oq:function(a,b){var s=$.aI
if(s===C.f)return P.mm(a,b)
return P.mm(a,s.ds(b,t.aF))},
mU:function(a,b,c,d,e){P.pW(new P.kw(d,e))},
pS:function(a,b,c,d){var s,r=$.aI
if(r===c)return d.$0()
$.aI=c
s=r
try{r=d.$0()
return r}finally{$.aI=s}},
pT:function(a,b,c,d,e){var s,r=$.aI
if(r===c)return d.$1(e)
$.aI=c
s=r
try{r=d.$1(e)
return r}finally{$.aI=s}},
jZ:function jZ(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
dt:function dt(){this.c=0},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dq:function dq(a,b){this.a=a
this.$ti=b},
fz:function fz(a){this.a=a
this.b=null},
d_:function d_(){},
f_:function f_(){},
d1:function d1(){},
kn:function kn(){},
kw:function kw(a,b){this.a=a
this.b=b},
k5:function k5(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function(a,b){return new H.C(a.J("@<0>").b6(b).J("C<1,2>"))},
o0:function(a,b,c){return H.qb(a,new H.C(b.J("@<0>").b6(c).J("C<1,2>")))},
la:function(a,b){return new H.C(a.J("@<0>").b6(b).J("C<1,2>"))},
cK:function(a){return new P.dd(a.J("dd<0>"))},
lj:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oG:function(a,b){var s=new P.de(a,b)
s.c=a.e
return s},
nT:function(a,b,c){var s,r
if(P.lx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.c([],t.s)
$.af.push(a)
try{P.pt(a,s)}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=P.mj(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l3:function(a,b,c){var s,r
if(P.lx(a))return b+"..."+c
s=new P.S(b)
$.af.push(a)
try{r=s
r.a=P.mj(r.a,a,", ")}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lx:function(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
pt:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.f(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.t()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.t();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
m_:function(a,b,c){var s=P.o_(b,c)
a.C(0,new P.iq(s,b,c))
return s},
m0:function(a,b){var s,r,q=P.cK(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
lb:function(a){var s,r={}
if(P.lx(a))return"{...}"
s=new P.S("")
try{$.af.push(a)
s.a+="{"
r.a=!0
J.kU(a,new P.iv(r,s))
s.a+="}"}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dd:function dd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k4:function k4(a){this.a=a
this.c=this.b=null},
de:function de(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function cE(){},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(){},
i:function i(){},
cO:function cO(){},
iv:function iv(a,b){this.a=a
this.b=b},
W:function W(){},
hu:function hu(){},
cP:function cP(){},
ca:function ca(a,b){this.a=a
this.$ti=b},
dl:function dl(){},
df:function df(){},
dy:function dy(){},
ot:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.ou(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
ou:function(a,b,c,d){var s=a?$.nm():$.nl()
if(s==null)return null
if(0===c&&d===b.length)return P.mr(s,b)
return P.mr(s,b.subarray(c,P.bg(c,d,b.length)))},
mr:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ag(r)}return null},
lM:function(a,b,c,d,e,f){if(C.c.bq(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
pb:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pa:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.a0()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b2(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.ak()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.d(r,o)
r[o]=n}return r},
jJ:function jJ(){},
jK:function jK(){},
hQ:function hQ(){},
hR:function hR(){},
dV:function dV(){},
dX:function dX(){},
i6:function i6(){},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ii:function ii(a){this.a=a},
jH:function jH(){},
jL:function jL(){},
kl:function kl(a){this.b=0
this.c=a},
jI:function jI(a){this.a=a},
kk:function kk(a){this.a=a
this.b=16
this.c=0},
hI:function(a,b){var s=H.ma(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
nR:function(a){if(a instanceof H.bw)return a.i(0)
return"Instance of '"+H.f(H.eI(a))+"'"},
ir:function(a,b,c,d){var s,r=c?J.l5(a,d):J.nV(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
is:function(a,b,c){var s,r=H.c([],c.J("x<0>"))
for(s=J.b4(a);s.t();)r.push(s.gB(s))
if(b)return r
return J.l6(r)},
o1:function(a,b,c){var s,r,q=J.l5(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
f1:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bg(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ae()
q=c<r}else q=!0
return H.mb(q?s.slice(b,c):s)}if(t.bm.b(a))return H.of(a,b,P.bg(b,c,a.length))
return P.oo(a,b,c)},
oo:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a4(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a4(c,b,a.length,o,o))
r=J.b4(a)
for(q=0;q<b;++q)if(!r.t())throw H.b(P.a4(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.t())throw H.b(P.a4(c,b,q,o,o))
p.push(r.gB(r))}return H.mb(p)},
og:function(a){return new H.ec(a,H.nY(a,!1,!0,!1,!1,!1))},
mj:function(a,b,c){var s=J.b4(b)
if(!s.t())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.t())}else{a+=H.f(s.gB(s))
for(;s.t();)a=a+c+H.f(s.gB(s))}return a},
jC:function(){var s=H.o6()
if(s!=null)return P.os(s)
throw H.b(P.B("'Uri.base' is not supported"))},
kj:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.ns().b
if(typeof b!="string")H.q(H.ax(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghC().cc(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ar(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nO:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e_:function(a){if(a>=10)return""+a
return"0"+a},
lT:function(a){return new P.by(1000*a)},
i9:function(a){if(typeof a=="number"||H.lv(a)||null==a)return J.a6(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nR(a)},
hM:function(a){return new P.dN(a)},
bO:function(a){return new P.ai(!1,null,null,a)},
lL:function(a,b,c){return new P.ai(!0,a,b,c)},
nE:function(a,b){if(a==null)throw H.b(new P.ai(!1,null,b,"Must not be null"))
return a},
mc:function(a){var s=null
return new P.c4(s,s,!1,s,s,a)},
eJ:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
bg:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.b(P.a4(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.b(P.a4(b,a,c,"end",null))
return b}return c},
md:function(a,b){if(a<0)throw H.b(P.a4(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aL(b):e
return new P.e9(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fq(a)},
jz:function(a){return new P.fn(a)},
ld:function(a){return new P.c7(a)},
aN:function(a){return new P.dW(a)},
u:function(a){return new P.fO(a)},
a3:function(a,b,c){return new P.ie(a,b,c)},
lF:function(a){H.qo(a)},
os:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mo(a4<a4?C.a.q(a5,0,a4):a5,5,a3).gec()
else if(s===32)return P.mo(C.a.q(a5,5,a4),0,a3).gec()}r=P.ir(8,0,!1,t.S)
q=r.length
if(0>=q)return H.d(r,0)
r[0]=0
if(1>=q)return H.d(r,1)
r[1]=-1
if(2>=q)return H.d(r,2)
r[2]=-1
if(7>=q)return H.d(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mV(a5,0,a4,0,r)>=14){if(7>=r.length)return H.d(r,7)
r[7]=a4}if(1>=r.length)return H.d(r,1)
p=r[1]
if(p>=0)if(P.mV(a5,0,p,20,r)===20){if(7>=r.length)return H.d(r,7)
r[7]=p}q=r.length
if(2>=q)return H.d(r,2)
o=r[2]+1
if(3>=q)return H.d(r,3)
n=r[3]
if(4>=q)return H.d(r,4)
m=r[4]
if(5>=q)return H.d(r,5)
l=r[5]
if(6>=q)return H.d(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.d(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ab(a5,"..",m)))h=l>m+2&&C.a.ab(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ab(a5,"file",0)){if(o<=0){if(!C.a.ab(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.q(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.b0(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.ab(a5,"http",0)){if(q&&n+3===m&&C.a.ab(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.b0(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ab(a5,"https",0)){if(q&&n+4===m&&C.a.ab(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.b0(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.q(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h8(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.p4(a5,0,p)
else{if(p===0)P.cf(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.p5(a5,d,o-1):""
b=P.p1(a5,o,n,!1)
q=n+1
if(q<m){a=H.ma(C.a.q(a5,q,m),a3)
a0=P.p3(a==null?H.q(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p2(a5,m,l,a3,i,b!=null)
a2=l<k?P.lq(a5,l+1,k,a3):a3
return new P.bJ(i,c,b,a0,a1,a2,k<a4?P.p0(a5,k+1,a4):a3)},
mq:function(a){var s=t.N
return C.b.hH(H.c(a.split("&"),t.s),P.la(s,s),new P.jF(C.e))},
or:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jB(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.W(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.hI(C.a.q(a,q,r),null)
if(typeof n!=="number")return n.a4()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.d(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.hI(C.a.q(a,q,c),null)
if(typeof n!=="number")return n.a4()
if(n>255)j.$2(k,q)
if(p>=s)return H.d(i,p)
i[p]=n
return i},
mp:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jD(a),b=new P.jE(c,a)
if(a.length<2)c.$1("address is too short")
s=H.c([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.W(a,r)
if(n===58){if(r===a0){++r
if(C.a.W(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaz(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.or(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.c.aV(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
mJ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cf:function(a,b,c){throw H.b(P.a3(c,a,b))},
p3:function(a,b){if(a!=null&&a===P.mJ(b))return null
return a},
p1:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.W(a,b)===91){s=c-1
if(C.a.W(a,s)!==93)P.cf(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oZ(a,r,s)
if(q<s){p=q+1
o=P.mO(a,C.a.ab(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mp(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.W(a,n)===58){q=C.a.bz(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mO(a,C.a.ab(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mp(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.p7(a,b,c)},
oZ:function(a,b,c){var s=C.a.bz(a,"%",b)
return s>=b&&s<c?s:c},
mO:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.S(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.W(a,s)
if(p===37){o=P.lr(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.S("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.cf(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.S("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.W(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.S("")
n=i}else n=i
n.a+=j
n.a+=P.lp(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.W(a,s)
if(o===37){n=P.lr(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.S("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.S("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cf(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.W(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.S("")
m=q}else m=q
m.a+=l
m.a+=P.lp(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p4:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mL(C.a.D(a,b)))P.cf(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cf(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.oY(r?a.toLowerCase():a)},
oY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p5:function(a,b,c){return P.dz(a,b,c,C.a_,!1)},
p2:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dz(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a7(s,"/"))s="/"+s
return P.p6(s,e,f)},
p6:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a7(a,"/"))return P.p8(a,!s||c)
return P.p9(a)},
lq:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bO("Both query and queryParameters specified"))
return P.dz(a,b,c,C.l,!0)}if(d==null)return null
s=new P.S("")
r.a=""
d.C(0,new P.kh(new P.ki(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p0:function(a,b,c){return P.dz(a,b,c,C.l,!0)},
lr:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.W(a,b+1)
r=C.a.W(a,n)
q=H.kz(s)
p=H.kz(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aV(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ar(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
lp:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.d(s,0)
s[0]=37
q=C.a.D(k,a>>>4)
if(1>=r)return H.d(s,1)
s[1]=q
q=C.a.D(k,a&15)
if(2>=r)return H.d(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.h6(a,6*o)&63|p
if(n>=r)return H.d(s,n)
s[n]=37
q=n+1
l=C.a.D(k,m>>>4)
if(q>=r)return H.d(s,q)
s[q]=l
l=n+2
q=C.a.D(k,m&15)
if(l>=r)return H.d(s,l)
s[l]=q
n+=3}}return P.f1(s,0,null)},
dz:function(a,b,c,d,e){var s=P.mN(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
mN:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.W(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lr(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cf(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.W(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lp(o)}}if(p==null){p=new P.S("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mM:function(a){if(C.a.a7(a,"."))return!0
return C.a.dW(a,"/.")!==-1},
p9:function(a){var s,r,q,p,o,n,m
if(!P.mM(a))return a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.Q(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p8:function(a,b){var s,r,q,p,o,n
if(!P.mM(a))return!b?P.mK(a):a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaz(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaz(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mK(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mK:function(a){var s,r,q,p=a.length
if(p>=2&&P.mL(J.nu(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.af(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p_:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bO("Invalid URL encoding"))}}return s},
ls:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.p(C.a.q(a,b,c))}else{p=H.c([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.b(P.bO("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bO("Truncated URI"))
p.push(P.p_(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cc(p)},
mL:function(a){var s=a|32
return 97<=s&&s<=122},
mo:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaz(j)
if(p!==44||r!==n+7||!C.a.ab(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.J.hQ(0,a,m,s)
else{l=P.mN(a,m,s,C.l,!0)
if(l!=null)a=C.a.b0(a,m,s,l)}return new P.jA(a,j,c)},
pf:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.o1(22,new P.kr(),t.gc),l=new P.kq(m),k=new P.ks(),j=new P.kt(),i=l.$2(0,225)
k.$3(i,s,1)
k.$3(i,r,14)
k.$3(i,q,34)
k.$3(i,p,3)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(14,225)
k.$3(i,s,1)
k.$3(i,r,15)
k.$3(i,q,34)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(15,225)
k.$3(i,s,1)
k.$3(i,"%",225)
k.$3(i,q,34)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(1,225)
k.$3(i,s,1)
k.$3(i,q,34)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(2,235)
k.$3(i,s,139)
k.$3(i,p,131)
k.$3(i,r,146)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(3,235)
k.$3(i,s,11)
k.$3(i,p,68)
k.$3(i,r,18)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(4,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,"[",232)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(5,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(6,231)
j.$3(i,"19",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(7,231)
j.$3(i,"09",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
k.$3(l.$2(8,8),"]",5)
i=l.$2(9,235)
k.$3(i,s,11)
k.$3(i,r,16)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(16,235)
k.$3(i,s,11)
k.$3(i,r,17)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(17,235)
k.$3(i,s,11)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(10,235)
k.$3(i,s,11)
k.$3(i,r,18)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(18,235)
k.$3(i,s,11)
k.$3(i,r,19)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(19,235)
k.$3(i,s,11)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(11,235)
k.$3(i,s,11)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(12,236)
k.$3(i,s,12)
k.$3(i,o,12)
k.$3(i,n,205)
i=l.$2(13,237)
k.$3(i,s,13)
k.$3(i,o,13)
j.$3(l.$2(20,245),"az",21)
i=l.$2(21,245)
j.$3(i,"az",21)
j.$3(i,"09",21)
k.$3(i,"+-.",21)
return m},
mV:function(a,b,c,d,e){var s,r,q,p,o,n=$.nt()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.d(n,d)
r=n[d]
q=C.a.D(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.d(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.d(e,o)
e[o]=s}return d},
ay:function ay(){},
aj:function aj(a,b){this.a=a
this.b=b},
a_:function a_(){},
by:function by(a){this.a=a},
i2:function i2(){},
i3:function i3(){},
L:function L(){},
dN:function dN(a){this.a=a},
ew:function ew(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e9:function e9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fq:function fq(a){this.a=a},
fn:function fn(a){this.a=a},
c7:function c7(a){this.a=a},
dW:function dW(a){this.a=a},
ez:function ez(){},
cZ:function cZ(){},
dY:function dY(a){this.a=a},
fO:function fO(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(){},
k:function k(){},
h:function h(){},
ea:function ea(){},
n:function n(){},
H:function H(){},
aq:function aq(){},
R:function R(){},
N:function N(){},
y:function y(){},
S:function S(a){this.a=a},
jF:function jF(a){this.a=a},
jB:function jB(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a){this.a=a},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(){},
kq:function kq(a){this.a=a},
ks:function ks(){},
kt:function kt(){},
h8:function h8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fF:function fF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
q8:function(a){var s
if(t.v.b(a)){s=J.nA(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dv(a.data,a.height,a.width)},
q7:function(a){if(a instanceof P.dv)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var s,r,q,p,o
if(a==null)return null
s=P.la(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
q6:function(a){var s={}
a.C(0,new P.kx(s))
return s},
kb:function kb(){},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(a){this.a=a},
hi:function hi(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(){},
k3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h6:function h6(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
eg:function eg(){},
aW:function aW(){},
ex:function ex(){},
iS:function iS(){},
c5:function c5(){},
f0:function f0(){},
m:function m(){},
aY:function aY(){},
fd:function fd(){},
fV:function fV(){},
fW:function fW(){},
h2:function h2(){},
h3:function h3(){},
hg:function hg(){},
hh:function hh(){},
hq:function hq(){},
hr:function hr(){},
bi:function bi(){},
hO:function hO(){},
dP:function dP(){},
hP:function hP(a){this.a=a},
dQ:function dQ(){},
b6:function b6(){},
ey:function ey(){},
fB:function fB(){},
eL:function eL(){},
eW:function eW(){},
hc:function hc(){},
hd:function hd(){}},W={
lK:function(){var s=document.createElement("a")
return s},
kX:function(){var s=document.createElement("canvas")
return s},
nQ:function(a,b,c){var s,r=document.body
r.toString
s=C.q.an(r,a,b,c)
s.toString
r=new H.b0(new W.a2(s),new W.i4(),t.ac.J("b0<i.E>"))
return t.h.a(r.gaO(r))},
i5:function(a){return"wheel"},
cz:function(a){var s,r,q="element tag unavailable"
try{s=J.aJ(a)
if(typeof s.ge9(a)=="string")q=s.ge9(a)}catch(r){H.ag(r)}return q},
l2:function(a){var s=document.createElement("img")
if(a!=null)s.src=a
return s},
nS:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ag(s)}return q},
k2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a,b,c,d){var s=W.k2(W.k2(W.k2(W.k2(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
T:function(a,b,c,d){var s=new W.fN(a,b,c==null?null:W.mW(new W.k1(c),t.aD),!1)
s.hd()
return s},
my:function(a){var s=W.lK(),r=window.location
s=new W.cd(new W.k8(s,r))
s.ew(a)
return s},
oB:function(a,b,c,d){return!0},
oC:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mE:function(){var s=t.N,r=P.m0(C.A,s),q=H.c(["TEMPLATE"],t.s)
s=new W.hl(r,P.cK(s),P.cK(s),P.cK(s),null)
s.ez(null,new H.cQ(C.A,new W.ke(),t.eM),q,null)
return s},
mW:function(a,b){var s=$.aI
if(s===C.f)return a
return s.ds(a,b)},
r:function r(){},
hL:function hL(){},
dL:function dL(){},
dM:function dM(){},
bP:function bP(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
az:function az(){},
hW:function hW(){},
J:function J(){},
cv:function cv(){},
hX:function hX(){},
ao:function ao(){},
aO:function aO(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
b9:function b9(){},
i0:function i0(){},
cw:function cw(){},
cx:function cx(){},
e1:function e1(){},
i1:function i1(){},
fC:function fC(a,b){this.a=a
this.b=b},
D:function D(){},
i4:function i4(){},
j:function j(){},
e:function e(){},
ak:function ak(){},
bT:function bT(){},
e3:function e3(){},
e5:function e5(){},
aB:function aB(){},
ih:function ih(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bW:function bW(){},
bE:function bE(){},
it:function it(){},
iL:function iL(){},
bY:function bY(){},
en:function en(){},
iM:function iM(a){this.a=a},
eo:function eo(){},
iN:function iN(a){this.a=a},
aD:function aD(){},
ep:function ep(){},
al:function al(){},
a2:function a2(a){this.a=a},
w:function w(){},
cW:function cW(){},
aE:function aE(){},
eD:function eD(){},
eM:function eM(){},
j_:function j_(a){this.a=a},
eO:function eO(){},
at:function at(){},
eS:function eS(){},
aF:function aF(){},
eT:function eT(){},
aG:function aG(){},
eZ:function eZ(){},
j9:function j9(a){this.a=a},
au:function au(){},
bh:function bh(){},
d0:function d0(){},
f2:function f2(){},
f3:function f3(){},
c8:function c8(){},
av:function av(){},
ad:function ad(){},
f6:function f6(){},
f7:function f7(){},
jl:function jl(){},
aH:function aH(){},
bG:function bG(){},
fc:function fc(){},
jp:function jp(){},
b_:function b_(){},
jG:function jG(){},
fv:function fv(){},
bk:function bk(){},
cb:function cb(){},
cc:function cc(){},
fD:function fD(){},
db:function db(){},
fS:function fS(){},
dg:function dg(){},
hb:function hb(){},
hj:function hj(){},
fA:function fA(){},
fK:function fK(a){this.a=a},
l0:function l0(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k1:function k1(a){this.a=a},
li:function li(a){this.$ti=a},
cd:function cd(a){this.a=a},
M:function M(){},
cX:function cX(a){this.a=a},
iQ:function iQ(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(){},
k9:function k9(){},
ka:function ka(){},
hl:function hl(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ke:function ke(){},
hk:function hk(){},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
am:function am(){},
k8:function k8(a,b){this.a=a
this.b=b},
hv:function hv(a){this.a=a
this.b=!1},
km:function km(a){this.a=a},
fE:function fE(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fP:function fP(){},
fQ:function fQ(){},
fT:function fT(){},
fU:function fU(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h4:function h4(){},
h5:function h5(){},
h7:function h7(){},
dn:function dn(){},
dp:function dp(){},
h9:function h9(){},
ha:function ha(){},
hf:function hf(){},
hm:function hm(){},
hn:function hn(){},
dr:function dr(){},
ds:function ds(){},
ho:function ho(){},
hp:function hp(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){}},K={
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.iV(s,r)},
t:function(a){var s=new K.j0()
s.eu(a)
return s},
b5:function b5(){},
e7:function e7(){},
iw:function iw(){},
ab:function ab(){this.a=null},
iV:function iV(a,b){this.a=a
this.b=b},
j0:function j0(){this.a=null}},L={
jn:function(){var s=new L.jm()
s.a=new H.C(t.cn)
s.b=new H.C(t.w)
s.c=P.cK(t.X)
return s},
eX:function eX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.b=a
this.c=null},
jm:function jm(){var _=this
_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.b=a
this.a=this.c=null}},O={
kY:function(a){var s=new O.a8(a.J("a8<0>"))
s.bs(a)
return s},
a8:function a8(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cS:function cS(){this.b=this.a=null},
ek:function ek(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
ix:function ix(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cR:function cR(){},
iy:function iy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iA:function iA(){var _=this
_.e=_.d=_.c=_.b=null},
iB:function iB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iC:function iC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eP:function eP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f5:function f5(){}},E={
lW:function(){var s,r=new E.bz()
r.a=""
r.b=!0
s=O.kY(t.l)
r.y=s
s.b2(r.ghR(),r.ghU())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbL(0,null)
return r},
mv:function(){if(J.kT(window.navigator.vendor,"Google"))return C.H
if(J.kT(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b2(s).E(s,"Trident")||C.a.E(s,"Edge"))return C.t
if(J.kT(window.navigator.appName,"Microsoft"))return C.t
return C.I},
mw:function(){var s=window.navigator.appVersion
if(J.b2(s).E(s,"Win"))return C.a1
if(C.a.E(s,"Mac"))return C.B
if(C.a.E(s,"Linux"))return C.a2
return C.a3},
oh:function(a,b){var s=new E.iW(a)
s.es(a,b)
return s},
op:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mk(a,!0,!0,!0,!1)
s=W.kX()
r=s.style
r.width="100%"
r.height="100%"
J.bN(a).n(0,s)
return E.mk(s,!0,!0,!0,!1)},
mk:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f9(),n=t.z,m=C.i.cJ(a,"webgl2",P.o0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oh(m,a)
n=new T.jh(m)
n.b=m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fs(a)
s=new X.io()
s.c=new X.ap(!1,!1,!1)
s.d=P.cK(t.e)
n.b=s
s=new X.iO(n)
s.f=0
s.r=V.be()
s.x=V.be()
s.ch=s.Q=1
n.c=s
s=new X.iu(n)
s.r=0
s.x=V.be()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jo(n)
s.f=V.be()
s.r=V.be()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.c([],t.eG)
s=$.i7
n.Q=(s==null?$.i7=new E.fL(E.mv(),E.mw()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.T(q,"contextmenu",n.gfe(),!1))
n.z.push(W.T(a,"focus",n.gfk(),!1))
n.z.push(W.T(a,"blur",n.gf8(),!1))
n.z.push(W.T(q,"keyup",n.gfo(),!1))
n.z.push(W.T(q,"keydown",n.gfm(),!1))
n.z.push(W.T(a,"mousedown",n.gft(),!1))
n.z.push(W.T(a,"mouseup",n.gfz(),!1))
n.z.push(W.T(a,p,n.gfv(),!1))
r=n.z
W.i5(a)
W.i5(a)
r.push(W.T(a,W.i5(a),n.gfB(),!1))
n.z.push(W.T(q,p,n.gfg(),!1))
n.z.push(W.T(q,"mouseup",n.gfi(),!1))
n.z.push(W.T(q,"pointerlockchange",n.gfD(),!1))
n.z.push(W.T(a,"touchstart",n.gfT(),!1))
n.z.push(W.T(a,"touchend",n.gfP(),!1))
n.z.push(W.T(a,"touchmove",n.gfR(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.aj(Date.now(),!1)
o.db=0
o.d9()
return o},
hS:function hS(){},
bz:function bz(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(a){this.b=a},
c2:function c2(a){this.b=a},
fL:function fL(a,b){this.a=a
this.b=b},
iW:function iW(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
f9:function f9(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jk:function jk(a){this.a=a}},Z={
lh:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cg(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,s)},
aw:function(a){return new Z.bj(a)},
fw:function fw(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fx:function fx(a){this.a=a},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a}},D={
G:function(){var s=new D.bS()
s.d=0
return s},
hT:function hT(){},
bS:function bS(){var _=this
_.d=_.c=_.b=_.a=null},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
U:function U(){this.b=null},
aP:function aP(){this.b=null},
aQ:function aQ(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dR:function dR(){},
bx:function bx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
V:function V(){},
cI:function cI(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eF:function eF(){},
eU:function eU(){}},X={dU:function dU(a,b){this.a=a
this.b=b},ee:function ee(a,b){this.a=a
this.b=b},io:function io(){var _=this
_.d=_.c=_.b=_.a=null},cN:function cN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iu:function iu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},bZ:function bZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iO:function iO(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eG:function eG(){},d2:function d2(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jo:function jo(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fs:function fs(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l1:function(a){var s=new X.ig(),r=new V.b8(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.mg
if(r==null){r=V.mf(0,0,1,1)
$.mg=r}s.r=r
return s},
m4:function(a){var s,r,q=new X.eA()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().n(0,q.geC())
r=new D.E("mover",s,q.b)
r.b=!0
q.av(r)}r=q.c
$.I().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.E("fov",r,1.0471975511965976)
r.b=!0
q.av(r)}r=q.d
$.I().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.E("near",r,0.1)
r.b=!0
q.av(r)}r=q.e
$.I().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.E("far",r,2000)
r.b=!0
q.av(r)}return q},
kW:function kW(){},
ig:function ig(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(){this.b=this.a=null},
eA:function eA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ja:function ja(){}},V={
hU:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.b8(s,r,q,1)},
lC:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qu:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bq(a-b,s)
return(a<0?a+s:a)+b},
K:function(a,b,c){if(a==null)return C.a.ap("null",c)
$.I().toString
return C.a.ap(C.d.eb(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cm:function(a,b,c){var s,r,q,p,o,n,m=H.c([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.K(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.a.ap(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
lE:function(a){return C.d.ig(Math.pow(2,C.W.cp(Math.log(H.q4(a))/Math.log(2))))},
bX:function(){var s=$.m2
return s==null?$.m2=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m1:function(a,b,c){var s=c.N(),r=b.bg(s).N(),q=s.bg(r),p=new V.F(a.a,a.b,a.c),o=r.S(0).a9(p),n=q.S(0).a9(p),m=s.S(0).a9(p)
return V.aV(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
be:function(){var s=$.m6
return s==null?$.m6=new V.ac(0,0):s},
m7:function(){var s=$.aX
return s==null?$.aX=new V.a1(0,0,0):s},
mf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eK(a,b,c,d)},
ft:function(){var s=$.mu
return s==null?$.mu=new V.F(0,0,0):s},
ov:function(){var s=$.jM
return s==null?$.jM=new V.F(-1,0,0):s},
lg:function(){var s=$.jN
return s==null?$.jN=new V.F(0,1,0):s},
ow:function(){var s=$.jO
return s==null?$.jO=new V.F(0,0,1):s},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(){},
em:function em(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bd:function bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function(a){P.oq(C.T,new V.kR(a))},
ok:function(a){var s=new V.j5()
s.ev(a,!0)
return s},
b7:function b7(){},
kR:function kR(a){this.a=a},
dZ:function dZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e6:function e6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e8:function e8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eC:function eC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iT:function iT(a){this.a=a
this.c=null},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(){this.b=this.a=null},
j7:function j7(a){this.a=a},
j6:function j6(a){this.a=a},
j8:function j8(a){this.a=a},
jc:function jc(a,b){this.a=a
this.c=null
this.d=b},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(){}},U={
kZ:function(){var s=new U.hV()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
lS:function(a){var s=new U.cr()
s.a=a
return s},
hV:function hV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){this.b=this.a=null},
bU:function bU(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
X:function X(){},
d8:function d8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cq:function cq(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cu:function cu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cA:function cA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a5:function a5(){}},A={
o3:function(a,b){var s=a.bh,r=new A.el(b,s)
r.cR(b,s)
r.er(a,b)
return r},
o4:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+a9.gau(a9)+b0.gau(b0)+b1.gau(b1)+b2.gau(b2)+b3.gau(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.aK()
if(h){s=$.br()
b=new Z.bj(b.a|s.a)}if(g){s=$.bq()
b=new Z.bj(b.a|s.a)}if(f){s=$.bs()
b=new Z.bj(b.a|s.a)}if(e){s=$.bp()
b=new Z.bj(b.a|s.a)}return new A.iz(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
ku:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kv:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.ku(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hJ(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pz:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ku(b,r,"emission")
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
pv:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kv(b,r,"ambient")
b.a+="\n"},
px:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kv(b,r,"diffuse")
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
pA:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kv(b,r,"invDiffuse")
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
pG:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kv(b,r,"specular")
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
pC:function(a,b){var s,r,q
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
pE:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ku(b,r,"reflect")
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
pF:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ku(b,r,"refract")
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
pw:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hJ(r)
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
if(typeof s!=="number")return s.ak()
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
c.a=p+"\n"}p=t.i
o=H.c([],p)
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
o=H.c([],p)
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
n=H.c([],p)
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
py:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hJ(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ak()
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
p=t.i
m=H.c([],p)
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.c([],p)
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
pD:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hJ(r)
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
if(typeof s!=="number")return s.ak()
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
c.a=p+"\n"}p=t.i
j=H.c([],p)
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
j=H.c([],p)
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
i=H.c([],p)
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
pH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hJ(r)
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
if(typeof s!=="number")return s.ak()
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
if(m){s=$.i7
if(s==null)s=$.i7=new E.fL(E.mv(),E.mw())
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
c.a=s+"\n"}s=t.i
h=H.c([],s)
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
h=H.c([],s)
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
g=H.c([],s)
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
pB:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.c([],t.i)
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
pI:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.S("")
h.a="precision mediump float;\n"
h.a=j
s=a.k4
if(s){h.a=i
r=i}else r=j
if(a.r1){r+="varying vec3 binormalVec;\n"
h.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
h.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
h.a=r}if(a.k2){r+="varying vec3 objPos;\n"
h.a=r}r=h.a=(a.k3?h.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
h.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
h.a=r}if(a.dy)r=h.a=r+"uniform mat4 invViewMat;\n"
h.a=r+"\n"
A.pz(a,h)
A.pv(a,h)
A.px(a,h)
A.pA(a,h)
A.pG(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pE(a,h)
A.pF(a,h)}A.pC(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
h.a=p}o=o.b
if(o)p=h.a=p+"uniform sampler2D alphaTxt;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!(n||o||!1))p=h.a=p+"   return 1.0;\n"
else if(o||!1){if(n){if(o){p+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
h.a=p}}else if(o){p+="   float a = texture2D(alphaTxt, txt2D).a;\n"
h.a=p}p+="   if (a <= 0.000001) discard;\n"
h.a=p
p+="   return a;\n"
h.a=p}else if(n){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pw(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.py(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pD(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pH(a,o[m],h)
A.pB(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.c([],t.i)
if(p){h.a+=u.o
l.push("lightAccum")
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pJ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aZ+"];\n"
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
pL:function(a,b){var s
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
pK:function(a,b){var s
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
pN:function(a,b){var s,r
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
pO:function(a,b){var s,r
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
pM:function(a,b){var s
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
pP:function(a,b){var s
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
hJ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.af(a,1)},
lf:function(a,b,c,d,e){var s=new A.js(a,c,e)
s.f=d
P.ir(d,0,!1,t.e)
return s},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a){this.a=a},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b){var _=this
_.iv=_.dF=_.by=_.bh=_.aZ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iD=_.iC=_.iB=_.cn=_.cm=_.cl=_.ck=_.cj=_.ci=_.cg=_.cf=_.iA=_.dR=_.dQ=_.iz=_.dP=_.dO=_.dN=_.iy=_.dM=_.dL=_.dK=_.ix=_.dJ=_.dI=_.iw=_.dH=_.dG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dS:function dS(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aZ=b5
_.bh=b6
_.by=b7},
d3:function d3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d4:function d4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d6:function d6(a,b,c,d,e,f,g,h,i,j){var _=this
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
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
c6:function c6(){},
eQ:function eQ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ff:function ff(){},
jx:function jx(a){this.a=a},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
ju:function ju(a,b,c){this.a=a
this.c=b
this.d=c},
jv:function jv(a,b,c){this.a=a
this.c=b
this.d=c},
jw:function jw(a,b,c){this.a=a
this.c=b
this.d=c},
js:function js(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
jt:function jt(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
jy:function jy(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c},
fm:function fm(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kp:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dA:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.F(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.F(s+a5,r+a3,q+a4)
o=new V.F(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.F(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.kp(g)
j=F.kp(f)
i=F.qr(a1,a2,new F.ko(h,F.kp(e),F.kp(d),j,k,a0),b)
if(i!=null)a.hP(i)},
qr:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.lc()
r=H.c([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.jP(e,e,new V.b8(n,0,0,1),e,e,new V.ac(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.cd(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.jP(e,e,new V.b8(h,g,f,1),e,e,new V.ac(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.cd(d))}}s.d.hi(a+1,b+1,r)
return s},
cB:function(a,b,c){var s=new F.e2(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.aa()
return s},
nZ:function(a,b){var s=new F.eh(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.aa()
return s},
lc:function(){var s=new F.j1(),r=new F.jQ(s)
r.b=!1
r.c=H.c([],t.j)
s.a=r
r=new F.j4(s)
r.b=H.c([],t.H)
s.b=r
r=new F.j3(s)
r.b=H.c([],t.L)
s.c=r
r=new F.j2(s)
r.b=H.c([],t.b)
s.d=r
s.e=null
return s},
jP:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fu(),p=new F.jV()
p.b=H.c([],t.H)
q.b=p
p=new F.jU()
s=t.L
p.b=H.c([],s)
p.c=H.c([],s)
q.c=p
p=new F.jR()
s=t.b
p.b=H.c([],s)
p.c=H.c([],s)
p.d=H.c([],s)
q.d=p
h=$.nn()
q.e=0
p=$.aK()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.br().a)!==0?e:r
q.x=(s&$.bq().a)!==0?b:r
q.y=(s&$.bs().a)!==0?f:r
q.z=(s&$.bM().a)!==0?g:r
q.Q=(s&$.no().a)!==0?c:r
q.ch=(s&$.cn().a)!==0?i:0
q.cx=(s&$.bp().a)!==0?a:r
return q},
ko:function ko(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e2:function e2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){this.b=this.a=null},
eE:function eE(){this.a=null},
j1:function j1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j2:function j2(a){this.a=a
this.b=null},
j3:function j3(a){this.a=a
this.b=null},
j4:function j4(a){this.a=a
this.b=null},
fu:function fu(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jX:function jX(a){this.a=a},
jW:function jW(a){this.a=a},
jQ:function jQ(a){this.a=a
this.c=this.b=null},
jR:function jR(){this.d=this.c=this.b=null},
jS:function jS(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(){this.c=this.b=null},
jV:function jV(){this.b=null}},T={f8:function f8(){},jb:function jb(){},jf:function jf(){var _=this
_.y=_.d=_.c=_.b=_.a=null},jg:function jg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},jh:function jh(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},jj:function jj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},ji:function ji(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
n2:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7="testCanvas",a8=null,a9="bumpMaps",b0="controls",b1=34067,b2="modifiers",b3=V.ok("Test 015"),b4=W.kX()
b4.className="pageLargeCanvas"
b4.id=a7
b3.a.appendChild(b4)
s=t.i
b3.dk(H.c(["Test of Material Lighting shader with bump mapping, reflections, refractions."],s))
b3.hf(H.c(["bumpMaps","controls"],s))
b3.dk(H.c(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a7)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.op(r,!0,!0,!0,!1)
p=X.l1(a8)
p.sdw(0,!1)
o=E.lW()
n=F.lc()
F.dA(n,a8,a8,1,1,1,0,0,1)
F.dA(n,a8,a8,1,1,0,1,0,3)
F.dA(n,a8,a8,1,1,0,0,1,2)
F.dA(n,a8,a8,1,1,-1,0,0,0)
F.dA(n,a8,a8,1,1,0,-1,0,0)
F.dA(n,a8,a8,1,1,0,0,-1,3)
n.aE()
o.sbL(0,n)
m=q.f
l=m.a
k=l.createTexture()
l.bindTexture(b1,k)
l.texParameteri(b1,10242,10497)
l.texParameteri(b1,10243,10497)
l.texParameteri(b1,10241,9729)
l.texParameteri(b1,10240,9729)
l.bindTexture(b1,a8)
j=new T.jg()
j.a=0
j.b=k
j.c=!1
j.d=0
m.aS(j,k,"../resources/maskonaive/posx.jpg",34069,!1,!1)
m.aS(j,k,"../resources/maskonaive/negx.jpg",34070,!1,!1)
m.aS(j,k,"../resources/maskonaive/posy.jpg",34071,!1,!1)
m.aS(j,k,"../resources/maskonaive/negy.jpg",34072,!1,!1)
m.aS(j,k,"../resources/maskonaive/posz.jpg",34073,!1,!1)
m.aS(j,k,"../resources/maskonaive/negz.jpg",34074,!1,!1)
i=new O.ek()
m=O.kY(t.hc)
i.e=m
m.b2(i.gf4(),i.gf6())
m=new O.aU(i,"emission")
m.c=new A.a0(!1,!1,!1)
m.f=new V.z(0,0,0)
i.f=m
m=new O.aU(i,"ambient")
m.c=new A.a0(!1,!1,!1)
m.f=new V.z(0,0,0)
i.r=m
m=new O.aU(i,"diffuse")
m.c=new A.a0(!1,!1,!1)
m.f=new V.z(0,0,0)
i.x=m
m=new O.aU(i,"invDiffuse")
m.c=new A.a0(!1,!1,!1)
m.f=new V.z(0,0,0)
i.y=m
m=new O.iC(i,"specular")
m.c=new A.a0(!1,!1,!1)
m.f=new V.z(0,0,0)
m.ch=100
i.z=m
m=new O.iy(i,"bump")
m.c=new A.a0(!1,!1,!1)
i.Q=m
i.ch=null
m=new O.aU(i,"reflect")
m.c=new A.a0(!1,!1,!1)
m.f=new V.z(0,0,0)
i.cx=m
m=new O.iB(i,"refract")
m.c=new A.a0(!1,!1,!1)
m.f=new V.z(0,0,0)
m.ch=1
i.cy=m
m=new O.ix(i,"alpha")
m.c=new A.a0(!1,!1,!1)
m.f=1
i.db=m
m=new D.cI()
m.bs(t.gj)
m.e=H.c([],t.bb)
m.f=H.c([],t.cP)
m.r=H.c([],t.af)
m.x=H.c([],t.du)
m.z=m.y=null
m.cL(m.gf2(),m.gfF(),m.gfJ())
i.dx=m
l=new O.iA()
l.b=new V.b8(0,0,0,0)
l.c=1
l.d=10
l.e=!1
i.dy=l
l=m.y
m=l==null?m.y=D.G():l
m.n(0,i.gfZ())
m=i.dx
l=m.z
m=l==null?m.z=D.G():l
l=i.gaT()
m.n(0,l)
i.fr=null
m=i.dx
h=V.lg()
g=U.lS(V.m1(V.m7(),h,new V.F(-1,-1,-1)))
f=new D.bx()
f.c=new V.z(1,1,1)
f.a=V.ow()
f.d=V.lg()
f.e=V.ov()
e=f.b
f.b=g
g.gp().n(0,f.gex())
g=new D.E("mover",e,f.b)
g.b=!0
f.aA(g)
d=new V.z(1,1,1)
if(!f.c.u(0,d)){e=f.c
f.c=d
g=new D.E("color",e,d)
g.b=!0
f.aA(g)}m.n(0,f)
m=i.r
m.sv(0,new V.z(0.1,0.1,0.1))
m=i.x
m.sv(0,new V.z(0.1,0.1,0.1))
i.z.sv(0,new V.z(0,0,0))
m=i.z
m.bc(new A.a0(!0,m.c.b,!1))
m.dd(10)
m=i.ch
if(m!==j){if(m!=null)m.gp().T(0,l)
e=i.ch
i.ch=j
j.gp().n(0,l)
m=new D.E("environment",e,i.ch)
m.b=!0
i.V(m)}i.cy.saF(0.6)
m=i.cy
m.sv(0,new V.z(0.2,0.3,1))
m=i.cx
m.sv(0,new V.z(0.6,0.6,0.6))
c=new U.bU()
c.bs(t.ah)
c.b2(c.gf0(),c.gfH())
c.e=null
c.f=V.bX()
c.r=0
m=q.x
l=new U.d9()
g=U.kZ()
g.scI(0,!0)
g.scw(6.283185307179586)
g.scA(0)
g.sah(0,0)
g.scz(100)
g.sU(0)
g.sce(0.5)
l.b=g
f=l.gaQ()
g.gp().n(0,f)
g=U.kZ()
g.scI(0,!0)
g.scw(6.283185307179586)
g.scA(0)
g.sah(0,0)
g.scz(100)
g.sU(0)
g.sce(0.5)
l.c=g
g.gp().n(0,f)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
b=new X.ap(!1,!1,!1)
e=l.d
l.d=b
g=new D.E(b2,e,b)
g.b=!0
l.P(g)
g=l.f
if(g!==!1){l.f=!1
g=new D.E("invertX",g,!1)
g.b=!0
l.P(g)}g=l.r
if(g!==!1){l.r=!1
g=new D.E("invertY",g,!1)
g.b=!0
l.P(g)}l.be(m)
c.n(0,l)
m=q.x
l=new U.d8()
g=U.kZ()
g.scI(0,!0)
g.scw(6.283185307179586)
g.scA(0)
g.sah(0,0)
g.scz(100)
g.sU(0)
g.sce(0.2)
l.b=g
g.gp().n(0,l.gaQ())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
b=new X.ap(!0,!1,!1)
e=l.c
l.c=b
g=new D.E(b2,e,b)
g.b=!0
l.P(g)
l.be(m)
c.n(0,l)
m=q.x
l=new U.da()
l.c=0.01
l.e=l.d=0
b=new X.ap(!1,!1,!1)
l.b=b
g=new D.E(b2,a8,b)
g.b=!0
l.P(g)
l.be(m)
c.n(0,l)
c.n(0,U.lS(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.m4(c)
a0=new M.cu()
a0.a=!0
m=E.lW()
n=F.lc()
l=n.a
g=new V.F(-1,-1,1).N()
a1=l.bw(new V.bf(1,2,4,6),V.hU(255,0,0),new V.a1(-1,-1,0),new V.ac(0,1),g,a8)
g=n.a
l=new V.F(1,-1,1).N()
a2=g.bw(new V.bf(0,3,4,6),V.hU(0,0,255),new V.a1(1,-1,0),new V.ac(1,1),l,a8)
l=n.a
g=new V.F(1,1,1).N()
a3=l.bw(new V.bf(0,2,5,6),V.hU(0,128,0),new V.a1(1,1,0),new V.ac(1,0),g,a8)
g=n.a
l=V.be()
f=new V.F(-1,1,1).N()
a4=g.bw(new V.bf(0,2,4,7),V.hU(255,255,0),new V.a1(-1,1,0),l,f,a8)
n.d.hh(H.c([a1,a2,a3,a4],t.j))
n.aE()
m.sbL(0,n)
a0.e=m
a0.sbf(a8)
a0.sbm(0,a8)
a0.sbn(a8)
m=new O.eP()
m.b=1.0471975511965976
m.d=new V.z(1,1,1)
e=m.c
m.c=j
j.gp().n(0,m.gaT())
l=new D.E("boxTexture",e,m.c)
l.b=!0
m.V(l)
a0.sbn(m)
a0.sbm(0,p)
a0.sbf(a)
a5=new M.cA()
a5.a=!0
m=O.kY(t.l)
a5.e=m
m.b2(a5.gfa(),a5.gfc())
a5.y=a5.x=a5.r=a5.f=null
a6=X.l1(a8)
a5.sbf(a8)
a5.sbm(0,a6)
a5.sbn(a8)
a5.sbf(a)
a5.sbn(i)
a5.sbm(0,p)
a5.e.n(0,o)
a5.c.sdw(0,!1)
m=H.c([a0,a5],t.f2)
l=new M.cq()
l.bs(t.bn)
l.e=!0
l.f=!1
l.r=null
l.b2(l.gfL(),l.gfN())
l.a8(0,m)
m=q.d
if(m!==l){if(m!=null)m.gp().T(0,q.gcT())
q.d=l
l.gp().n(0,q.gcT())
q.cU()}m=new V.iT(b0)
l=s.getElementById(b0)
m.c=l
if(l==null)H.q("Failed to find controls for RadioGroup")
m.di(0,"Silver",new B.kF(i),!0)
m.ag(0,"Gold",new B.kG(i))
m.ag(0,"Glass",new B.kH(i))
m.ag(0,"Blue Glass",new B.kI(i))
m.ag(0,"Water Bubble",new B.kJ(i))
m.ag(0,"No Reflection",new B.kK(i))
m.ag(0,"Pink Distort",new B.kL(i))
m.ag(0,"Cloak",new B.kM(i))
m.ag(0,"White and Shiny",new B.kN(i))
m=new V.jc(a9,new B.kO(i,q))
s=s.getElementById(a9)
m.c=s
if(s==null)H.q("Failed to find bumpMaps for Texture2DGroup")
m.ag(0,"../resources/BumpMap1.png",!0)
m.n(0,"../resources/BumpMap2.png")
m.n(0,"../resources/BumpMap3.png")
m.n(0,"../resources/BumpMap4.png")
m.n(0,"../resources/BumpMap5.png")
m.n(0,"../resources/ScrewBumpMap.png")
m.n(0,"../resources/CtrlPnlBumpMap.png")
s=q.Q
if(s==null)s=q.Q=D.G()
m=s.b
s=m==null?s.b=H.c([],t.f):m
s.push(new B.kP(b3,i))
V.qp(q)},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a,b){this.a=a
this.b=b},
kP:function kP(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l7.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gR:function(a){return H.cY(a)},
i:function(a){return"Instance of '"+H.f(H.eI(a))+"'"}}
J.eb.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$iay:1}
J.cH.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.bb.prototype={
gR:function(a){return 0},
i:function(a){return String(a)},
$ilY:1}
J.eB.prototype={}
J.bH.prototype={}
J.aC.prototype={
i:function(a){var s=a[$.na()]
if(s==null)return this.eo(a)
return"JavaScript function for "+H.f(J.a6(s))},
$iaA:1}
J.x.prototype={
i6:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("removeAt"))
s=a.length
if(b>=s)throw H.b(P.eJ(b,null))
return a.splice(b,1)[0]},
T:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("remove"))
for(s=0;s<a.length;++s)if(J.Q(a[s],b)){a.splice(s,1)
return!0}return!1},
a8:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.aN(a))}},
j:function(a,b){var s,r,q=P.ir(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
hM:function(a){return this.j(a,"")},
hG:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.aN(a))}return s},
hH:function(a,b,c){return this.hG(a,b,c,t.z)},
hF:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.aN(a))}throw H.b(H.l4())},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gaz:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.l4())},
dm:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.aN(a))}return!1},
b4:function(a,b){if(!!a.immutable$list)H.q(P.B("sort"))
H.on(a,b==null?J.pm():b)},
ek:function(a){return this.b4(a,null)},
E:function(a,b){var s
for(s=0;s<a.length;++s)if(J.Q(a[s],b))return!0
return!1},
i:function(a){return P.l3(a,"[","]")},
gM:function(a){return new J.a7(a,a.length)},
gR:function(a){return H.cY(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.cl(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.q(P.B("indexed set"))
if(b>=a.length||b<0)throw H.b(H.cl(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.il.prototype={}
J.a7.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bD.prototype={
aY:function(a,b){var s
if(typeof b!="number")throw H.b(H.ax(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbB(b)
if(this.gbB(a)===s)return 0
if(this.gbB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbB:function(a){return a===0?1/a<0:a<0},
ig:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.B(""+a+".toInt()"))},
cp:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.B(""+a+".floor()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.B(""+a+".round()"))},
eb:function(a,b){var s
if(b>20)throw H.b(P.a4(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbB(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
bq:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aV:function(a,b){var s
if(a>0)s=this.de(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h6:function(a,b){if(b<0)throw H.b(H.ax(b))
return this.de(a,b)},
de:function(a,b){return b>31?0:a>>>b},
$ia_:1,
$iR:1}
J.cG.prototype={$ik:1}
J.cF.prototype={}
J.aR.prototype={
W:function(a,b){if(b<0)throw H.b(H.cl(a,b))
if(b>=a.length)H.q(H.cl(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.b(H.cl(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!="string")throw H.b(P.lL(b,null,null))
return a+b},
b0:function(a,b,c,d){var s,r,q=P.bg(b,c,a.length)
if(!H.ch(q))H.q(H.ax(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ab:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a7:function(a,b){return this.ab(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eJ(b,null))
if(b>c)throw H.b(P.eJ(b,null))
if(c>a.length)throw H.b(P.eJ(c,null))
return a.substring(b,c)},
af:function(a,b){return this.q(a,b,null)},
ij:function(a){return a.toLowerCase()},
w:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.Q)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ap:function(a,b){var s=b-a.length
if(s<=0)return a
return this.w(" ",s)+a},
bz:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dW:function(a,b){return this.bz(a,b,0)},
ho:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a4(c,0,s,null,null))
return H.n6(a,b,c)},
E:function(a,b){return this.ho(a,b,0)},
aY:function(a,b){var s
if(typeof b!="string")throw H.b(H.ax(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gR:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gl:function(a){return a.length},
$iy:1}
H.ef.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.W(this.a,b)}}
H.l.prototype={}
H.cM.prototype={
gM:function(a){return new H.bc(this,this.gl(this))},
bJ:function(a,b){return this.en(0,b)}}
H.bc.prototype={
gB:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.b2(q),o=p.gl(q)
if(r.b!=o)throw H.b(P.aN(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.aT.prototype={
gM:function(a){return new H.ej(J.b4(this.a),this.b)},
gl:function(a){return J.aL(this.a)},
H:function(a,b){return this.b.$1(J.hK(this.a,b))}}
H.cy.prototype={$il:1}
H.ej.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cQ.prototype={
gl:function(a){return J.aL(this.a)},
H:function(a,b){return this.b.$1(J.hK(this.a,b))}}
H.b0.prototype={
gM:function(a){return new H.fy(J.b4(this.a),this.b)}}
H.fy.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cC.prototype={}
H.fp.prototype={
m:function(a,b,c){throw H.b(P.B("Cannot modify an unmodifiable list"))}}
H.c9.prototype={}
H.cs.prototype={
i:function(a){return P.lb(this)},
m:function(a,b,c){H.nN()},
$iH:1}
H.ct.prototype={
gl:function(a){return this.a},
cb:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cb(0,b))return null
return this.d1(b)},
d1:function(a){return this.b[a]},
C:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d1(q))}}}
H.jq.prototype={
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
H.ev.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ed.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fo.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iR.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.he.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bw.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n8(r==null?"unknown":r)+"'"},
$iaA:1,
gim:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f4.prototype={}
H.eY.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n8(s)+"'"}}
H.bQ.prototype={
u:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bQ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.cY(this.a)
else s=typeof r!=="object"?J.ah(r):H.cY(r)
return(s^H.cY(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eI(s))+"'")}}
H.eN.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gl:function(a){return this.a},
gbA:function(a){return this.a===0},
ga2:function(a){return new H.cJ(this,H.dC(this).J("cJ<1>"))},
gil:function(a){var s=this,r=H.dC(s)
return H.o2(s.ga2(s),new H.im(s),r.c,r.Q[1])},
cb:function(a,b){var s=this.b
if(s==null)return!1
return this.eN(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bt(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bt(p,b)
q=r==null?n:r.b
return q}else return o.hK(b)},
hK:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d2(p,q.dY(a))
r=q.dZ(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cW(s==null?q.b=q.c1():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cW(r==null?q.c=q.c1():r,b,c)}else q.hL(b,c)},
hL:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c1()
s=p.dY(a)
r=p.d2(o,s)
if(r==null)p.c5(o,s,[p.c2(a,b)])
else{q=p.dZ(r,a)
if(q>=0)r[q].b=b
else r.push(p.c2(a,b))}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.aN(s))
r=r.c}},
cW:function(a,b,c){var s=this.bt(a,b)
if(s==null)this.c5(a,b,this.c2(b,c))
else s.b=c},
eY:function(){this.r=this.r+1&67108863},
c2:function(a,b){var s,r=this,q=new H.ip(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eY()
return q},
dY:function(a){return J.ah(a)&0x3ffffff},
dZ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1},
i:function(a){return P.lb(this)},
bt:function(a,b){return a[b]},
d2:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
eR:function(a,b){delete a[b]},
eN:function(a,b){return this.bt(a,b)!=null},
c1:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c5(r,s,r)
this.eR(r,s)
return r}}
H.im.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dC(this.a).J("2(1)")}}
H.ip.prototype={}
H.cJ.prototype={
gl:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.ei(s,s.r)
r.c=s.e
return r}}
H.ei.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.aN(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kA.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kB.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kC.prototype={
$1:function(a){return this.a(a)}}
H.ec.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ime:1}
H.cT.prototype={$icT:1}
H.Y.prototype={$iY:1}
H.c0.prototype={
gl:function(a){return a.length},
$iA:1}
H.bF.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cU.prototype={
m:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.eq.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.cV.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.c1.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b1(b,a,a.length)
return a[b]},
$ic1:1,
$ibi:1}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
H.as.prototype={
J:function(a){return H.ht(v.typeUniverse,this,a)},
b6:function(a){return H.oW(v.typeUniverse,this,a)}}
H.fR.prototype={}
H.fM.prototype={
i:function(a){return this.a}}
H.du.prototype={}
P.jZ.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.jY.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.k_.prototype={
$0:function(){this.a.$0()}}
P.k0.prototype={
$0:function(){this.a.$0()}}
P.dt.prototype={
eA:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.kg(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
eB:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.kf(this,a,Date.now(),b),0),a)
else throw H.b(P.B("Periodic timer."))},
$id1:1}
P.kg.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kf.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eq(s,o)}q.c=p
r.d.$1(q)}}
P.ce.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bI.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.ce){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b4(s)
if(o instanceof P.bI){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dq.prototype={
gM:function(a){return new P.bI(this.a())}}
P.fz.prototype={}
P.d_.prototype={}
P.f_.prototype={}
P.d1.prototype={}
P.kn.prototype={}
P.kw.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a6(this.b)
throw s}}
P.k5.prototype={
ia:function(a){var s,r,q,p=null
try{if(C.f===$.aI){a.$0()
return}P.pS(p,p,this,a)}catch(q){s=H.ag(q)
r=H.lA(q)
P.mU(p,p,this,s,r)}},
ib:function(a,b){var s,r,q,p=null
try{if(C.f===$.aI){a.$1(b)
return}P.pT(p,p,this,a,b)}catch(q){s=H.ag(q)
r=H.lA(q)
P.mU(p,p,this,s,r)}},
ic:function(a,b){return this.ib(a,b,t.z)},
hm:function(a){return new P.k6(this,a)},
ds:function(a,b){return new P.k7(this,a,b)}}
P.k6.prototype={
$0:function(){return this.a.ia(this.b)}}
P.k7.prototype={
$1:function(a){return this.a.ic(this.b,a)},
$S:function(){return this.c.J("~(0)")}}
P.dd.prototype={
gM:function(a){var s=new P.de(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
E:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eK(b)
return r}},
eK:function(a){var s=this.d
if(s==null)return!1
return this.bT(s[this.bP(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cX(s==null?q.b=P.lj():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cX(r==null?q.c=P.lj():r,b)}else return q.eE(0,b)},
eE:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lj()
s=q.bP(b)
r=p[s]
if(r==null)p[s]=[q.bO(b)]
else{if(q.bT(r,b)>=0)return!1
r.push(q.bO(b))}return!0},
T:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fW(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bP(b)
r=n[s]
q=o.bT(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dh(p)
return!0},
cX:function(a,b){if(a[b]!=null)return!1
a[b]=this.bO(b)
return!0},
fW:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dh(s)
delete a[b]
return!0},
cY:function(){this.r=1073741823&this.r+1},
bO:function(a){var s,r=this,q=new P.k4(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cY()
return q},
dh:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cY()},
bP:function(a){return J.ah(a)&1073741823},
bT:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1}}
P.k4.prototype={}
P.de.prototype={
gB:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.aN(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cE.prototype={}
P.iq.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cL.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gM:function(a){return new H.bc(a,this.gl(a))},
H:function(a,b){return this.h(a,b)},
C:function(a,b){var s,r=this.gl(a)
if(typeof r!=="number")return H.v(r)
s=0
for(;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.b(P.aN(a))}},
gbA:function(a){return this.gl(a)===0},
ii:function(a,b){var s,r,q,p,o=this
if(o.gbA(a)){s=J.l5(0,H.bK(a).J("i.E"))
return s}r=o.h(a,0)
q=P.ir(o.gl(a),r,!0,H.bK(a).J("i.E"))
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
ih:function(a){return this.ii(a,!0)},
hD:function(a,b,c,d){var s
P.bg(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l3(a,"[","]")}}
P.cO.prototype={}
P.iv.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.W.prototype={
C:function(a,b){var s,r
for(s=J.b4(this.ga2(a));s.t();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.aL(this.ga2(a))},
i:function(a){return P.lb(a)},
$iH:1}
P.hu.prototype={
m:function(a,b,c){throw H.b(P.B("Cannot modify unmodifiable map"))}}
P.cP.prototype={
h:function(a,b){return J.co(this.a,b)},
m:function(a,b,c){J.kS(this.a,b,c)},
C:function(a,b){J.kU(this.a,b)},
gl:function(a){return J.aL(this.a)},
i:function(a){return J.a6(this.a)},
$iH:1}
P.ca.prototype={}
P.dl.prototype={
a8:function(a,b){var s
for(s=J.b4(b);s.t();)this.n(0,s.gB(s))},
i:function(a){return P.l3(this,"{","}")},
H:function(a,b){var s,r,q,p="index"
P.nE(b,p)
P.md(b,p)
for(s=P.oG(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.b(P.O(b,this,p,null,r))},
$il:1,
$ih:1}
P.df.prototype={}
P.dy.prototype={}
P.jJ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ag(r)}return null}}
P.jK.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ag(r)}return null}}
P.hQ.prototype={
hQ:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bg(a2,a3,a1.length)
if(a3==null)throw H.b(P.mc("Invalid range"))
s=$.nq()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kz(C.a.D(a1,l))
h=H.kz(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.d(s,g)
f=s[g]
if(f>=0){g=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.S("")
e=p}else e=p
d=e.a+=C.a.q(a1,q,r)
e.a=d+H.ar(k)
q=l
continue}}throw H.b(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.q(a1,q,a3)
d=e.length
if(o>=0)P.lM(a1,n,a3,o,m,d)
else{c=C.c.bq(d-1,4)+1
if(c===1)throw H.b(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.b0(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lM(a1,n,a3,o,m,b)
else{c=C.c.bq(b,4)
if(c===1)throw H.b(P.a3(a,a1,a3))
if(c>1)a1=C.a.b0(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hR.prototype={}
P.dV.prototype={}
P.dX.prototype={}
P.i6.prototype={}
P.ij.prototype={
i:function(a){return this.a}}
P.ii.prototype={
eO:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.d(a,p)
switch(a[p]){case"&":n="&amp;"
break
case'"':n=s?"&quot;":m
break
case"'":n=q?"&#39;":m
break
case"<":n="&lt;"
break
case">":n="&gt;"
break
case"/":n=r?"&#47;":m
break
default:n=m}if(n!=null){if(o==null)o=new P.S("")
if(p>b)o.a+=C.a.q(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nC(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jH.prototype={
ghC:function(){return C.R}}
P.jL.prototype={
cc:function(a){var s,r,q,p=P.bg(0,null,a.length)
if(p==null)throw H.b(P.mc("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kl(r)
if(q.eT(a,0,p)!==p){J.nx(a,p-1)
q.c7()}return new Uint8Array(r.subarray(0,H.pe(0,q.b,r.length)))}}
P.kl.prototype={
c7:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
he:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s&63
return!0}else{n.c7()
return!1}},
eT:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.he(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c7()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=128|p&63}}}return q}}
P.jI.prototype={
cc:function(a){var s=this.a,r=P.ot(s,a,0,null)
if(r!=null)return r
return new P.kk(s).hp(a,0,null,!0)}}
P.kk.prototype={
hp:function(a,b,c,d){var s,r,q,p,o=this,n=P.bg(b,c,J.aL(a))
if(b===n)return""
s=P.pa(a,b,n)
if(typeof n!=="number")return n.a0()
n-=b
r=o.bQ(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pb(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bQ:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.a0()
if(c-b>1000){s=C.c.a5(b+c,2)
r=q.bQ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bQ(a,s,c,d)}return q.hu(a,b,c,d)},
hu:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.S(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ar(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ar(j)
break
case 65:g.a+=H.ar(j);--f
break
default:p=g.a+=H.ar(j)
g.a=p+H.ar(j)
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
g.a+=H.ar(a[l])}else g.a+=P.f1(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ar(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.ay.prototype={}
P.aj.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
aY:function(a,b){return C.c.aY(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.aV(s,30))&1073741823},
i:function(a){var s=this,r=P.nO(H.od(s)),q=P.e_(H.ob(s)),p=P.e_(H.o7(s)),o=P.e_(H.o8(s)),n=P.e_(H.oa(s)),m=P.e_(H.oc(s)),l=P.nP(H.o9(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a_.prototype={}
P.by.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.by&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aY:function(a,b){return C.c.aY(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i3(),o=this.a
if(o<0)return"-"+new P.by(0-o).i(0)
s=p.$1(C.c.a5(o,6e7)%60)
r=p.$1(C.c.a5(o,1e6)%60)
q=new P.i2().$1(o%1e6)
return""+C.c.a5(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.L.prototype={}
P.dN.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i9(s)
return"Assertion failed"}}
P.ew.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbR:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbS()+o+m
if(!q.a)return l
s=q.gbR()
r=P.i9(q.b)
return l+s+": "+r}}
P.c4.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e9.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var s,r=this.b
if(typeof r!=="number")return r.ae()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gl:function(a){return this.f}}
P.fq.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fn.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dW.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i9(s)+"."}}
P.ez.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.cZ.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.dY.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fO.prototype={
i:function(a){return"Exception: "+this.a}}
P.ie.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.q(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.W(d,o)
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
return f+j+h+i+"\n"+C.a.w(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aA.prototype={}
P.k.prototype={}
P.h.prototype={
bJ:function(a,b){return new H.b0(this,b,H.dC(this).J("b0<h.E>"))},
gl:function(a){var s,r=this.gM(this)
for(s=0;r.t();)++s
return s},
gaO:function(a){var s,r=this.gM(this)
if(!r.t())throw H.b(H.l4())
s=r.gB(r)
if(r.t())throw H.b(H.nU())
return s},
H:function(a,b){var s,r,q
P.md(b,"index")
for(s=this.gM(this),r=0;s.t();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.O(b,this,"index",null,r))},
i:function(a){return P.nT(this,"(",")")}}
P.ea.prototype={}
P.n.prototype={$il:1,$ih:1}
P.H.prototype={}
P.aq.prototype={
gR:function(a){return P.N.prototype.gR.call(C.j,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
u:function(a,b){return this===b},
gR:function(a){return H.cY(this)},
i:function(a){return"Instance of '"+H.f(H.eI(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jF.prototype={
$2:function(a,b){var s,r,q,p=J.dH(b).dW(b,"=")
if(p===-1){if(b!=="")J.kS(a,P.ls(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.af(b,p+1)
q=this.a
J.kS(a,P.ls(s,0,s.length,q,!0),P.ls(r,0,r.length,q,!0))}return a}}
P.jB.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jD.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jE.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.hI(C.a.q(this.b,a,b),16)
if(typeof s!=="number")return s.ae()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bJ.prototype={
gbu:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.f(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.q(H.l9("Field '_text' has been assigned during initialization."))}return o},
gR:function(a){var s=this,r=s.z
if(r==null){r=C.a.gR(s.gbu())
if(s.z==null)s.z=r
else r=H.q(H.l9("Field 'hashCode' has been assigned during initialization."))}return r},
gbl:function(){var s=this,r=s.Q
if(r==null){r=new P.ca(P.mq(s.gbk(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.l9("Field 'queryParameters' has been assigned during initialization."))}return r},
ged:function(){return this.b},
gcr:function(a){var s=this.c
if(s==null)return""
if(C.a.a7(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbE:function(a){var s=this.d
return s==null?P.mJ(this.a):s},
gbk:function(a){var s=this.f
return s==null?"":s},
gcq:function(){var s=this.r
return s==null?"":s},
cE:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a7(s,"/"))s="/"+s
q=s
p=P.lq(null,0,0,b)
return new P.bJ(n,l,j,k,q,p,o.r)},
gdS:function(){return this.c!=null},
gdV:function(){return this.f!=null},
gdT:function(){return this.r!=null},
i:function(a){return this.gbu()},
u:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbK()&&s.c!=null===b.gdS()&&s.b===b.ged()&&s.gcr(s)===b.gcr(b)&&s.gbE(s)===b.gbE(b)&&s.e===b.ge6(b)&&s.f!=null===b.gdV()&&s.gbk(s)===b.gbk(b)&&s.r!=null===b.gdT()&&s.gcq()===b.gcq()},
$ifr:1,
gbK:function(){return this.a},
ge6:function(a){return this.e}}
P.ki.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kj(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kj(C.h,b,C.e,!0))}}}
P.kh.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b4(b),r=this.a;s.t();)r.$2(a,s.gB(s))}}
P.jA.prototype={
gec:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bz(s,"?",m)
q=s.length
if(r>=0){p=P.dz(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fF("data","",n,n,P.dz(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kr.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kq.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
J.ny(s,0,96,b)
return s},
$S:19}
P.ks.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.d(a,p)
a[p]=c}}}
P.kt.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.d(a,p)
a[p]=c}}}
P.h8.prototype={
gdS:function(){return this.c>0},
gdU:function(){return this.c>0&&this.d+1<this.e},
gdV:function(){return this.f<this.r},
gdT:function(){return this.r<this.a.length},
gd3:function(){return this.b===4&&C.a.a7(this.a,"http")},
gd4:function(){return this.b===5&&C.a.a7(this.a,"https")},
gbK:function(){var s=this.x
return s==null?this.x=this.eL():s},
eL:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gd3())return"http"
if(s.gd4())return"https"
if(r===4&&C.a.a7(s.a,"file"))return"file"
if(r===7&&C.a.a7(s.a,"package"))return"package"
return C.a.q(s.a,0,r)},
ged:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcr:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbE:function(a){var s=this
if(s.gdU())return P.hI(C.a.q(s.a,s.d+1,s.e),null)
if(s.gd3())return 80
if(s.gd4())return 443
return 0},
ge6:function(a){return C.a.q(this.a,this.e,this.f)},
gbk:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
gcq:function(){var s=this.r,r=this.a
return s<r.length?C.a.af(r,s+1):""},
gbl:function(){var s=this
if(s.f>=s.r)return C.a0
return new P.ca(P.mq(s.gbk(s)),t.U)},
cE:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbK(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.gdU()?n.gbE(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a7(r,"/"))r="/"+r
p=P.lq(m,0,0,b)
q=n.r
o=q<j.length?C.a.af(j,q+1):m
return new P.bJ(l,i,s,h,r,p,o)},
gR:function(a){var s=this.y
return s==null?this.y=C.a.gR(this.a):s},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifr:1}
P.fF.prototype={}
W.r.prototype={}
W.hL.prototype={
gl:function(a){return a.length}}
W.dL.prototype={
i:function(a){return String(a)}}
W.dM.prototype={
i:function(a){return String(a)}}
W.bP.prototype={$ibP:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={
cJ:function(a,b,c){if(c!=null)return a.getContext(b,P.q6(c))
return a.getContext(b)},
ef:function(a,b){return this.cJ(a,b,null)},
$ibv:1}
W.az.prototype={
gl:function(a){return a.length}}
W.hW.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cv.prototype={
gl:function(a){return a.length}}
W.hX.prototype={}
W.ao.prototype={}
W.aO.prototype={}
W.hY.prototype={
gl:function(a){return a.length}}
W.hZ.prototype={
gl:function(a){return a.length}}
W.i_.prototype={
gl:function(a){return a.length}}
W.b9.prototype={$ib9:1}
W.i0.prototype={
i:function(a){return String(a)}}
W.cw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.cx.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaN(a))+" x "+H.f(this.gaH(a))},
u:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aJ(b)
s=a.left==s.gbC(b)&&a.top==s.gbH(b)&&this.gaN(a)==s.gaN(b)&&this.gaH(a)==s.gaH(b)}else s=!1
return s},
gR:function(a){return W.mA(J.ah(a.left),J.ah(a.top),J.ah(this.gaN(a)),J.ah(this.gaH(a)))},
gdt:function(a){return a.bottom},
gaH:function(a){return a.height},
gbC:function(a){return a.left},
gcF:function(a){return a.right},
gbH:function(a){return a.top},
gaN:function(a){return a.width},
$ia9:1}
W.e1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.i1.prototype={
gl:function(a){return a.length}}
W.fC.prototype={
gbA:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var s=this.ih(this)
return new J.a7(s,s.length)}}
W.D.prototype={
ghl:function(a){return new W.fK(a)},
gdv:function(a){return new W.fC(a,a.children)},
gdz:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ae()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ae()
if(p<0)p=-p*0
return new P.a9(s,r,q,p,t.I)},
i:function(a){return a.localName},
an:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lV
if(s==null){s=H.c([],t.o)
r=new W.cX(s)
s.push(W.my(null))
s.push(W.mE())
$.lV=r
d=r}else d=s
s=$.lU
if(s==null){s=new W.hv(d)
$.lU=s
c=s}else{s.a=d
c=s}}if($.ba==null){s=document
r=s.implementation.createHTMLDocument("")
$.ba=r
$.l_=r.createRange()
r=$.ba.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.ba.head.appendChild(r)}s=$.ba
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.ba
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.ba.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.E(C.Z,a.tagName)){$.l_.selectNodeContents(q)
s=$.l_
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.ba.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.ba.body)J.lJ(q)
c.cK(p)
document.adoptNode(p)
return p},
hs:function(a,b,c){return this.an(a,b,c,null)},
eh:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
ge9:function(a){return a.tagName},
$iD:1}
W.i4.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hg:function(a,b,c,d){if(c!=null)this.eF(a,b,c,!1)},
eF:function(a,b,c,d){return a.addEventListener(b,H.ck(c,1),!1)},
$ie:1}
W.ak.prototype={$iak:1}
W.bT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1,
$ibT:1}
W.e3.prototype={
gl:function(a){return a.length}}
W.e5.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.ih.prototype={
gl:function(a){return a.length}}
W.bA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.bB.prototype={
gdA:function(a){return a.data},
$ibB:1}
W.bC.prototype={$ibC:1}
W.bW.prototype={$ibW:1}
W.bE.prototype={$ibE:1}
W.it.prototype={
i:function(a){return String(a)}}
W.iL.prototype={
gl:function(a){return a.length}}
W.bY.prototype={$ibY:1}
W.en.prototype={
h:function(a,b){return P.bo(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga2:function(a){var s=H.c([],t.s)
this.C(a,new W.iM(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iM.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eo.prototype={
h:function(a,b){return P.bo(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga2:function(a){var s=H.c([],t.s)
this.C(a,new W.iN(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.ep.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.al.prototype={$ial:1}
W.a2.prototype={
gaO:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.ld("No elements"))
if(r>1)throw H.b(P.ld("More than one element"))
s=s.firstChild
s.toString
return s},
a8:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gM:function(a){var s=this.a.childNodes
return new W.cD(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.w.prototype={
i5:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
i8:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nv(s,b,a)}catch(q){H.ag(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.em(a):s},
fX:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aE.prototype={
gl:function(a){return a.length},
$iaE:1}
W.eD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.eM.prototype={
h:function(a,b){return P.bo(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga2:function(a){var s=H.c([],t.s)
this.C(a,new W.j_(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.j_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eO.prototype={
gl:function(a){return a.length}}
W.at.prototype={$iat:1}
W.eS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aF.prototype={$iaF:1}
W.eT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aG.prototype={
gl:function(a){return a.length},
$iaG:1}
W.eZ.prototype={
h:function(a,b){return a.getItem(H.lt(b))},
m:function(a,b,c){a.setItem(b,c)},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga2:function(a){var s=H.c([],t.s)
this.C(a,new W.j9(s))
return s},
gl:function(a){return a.length},
$iH:1}
W.j9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.bh.prototype={$ibh:1}
W.d0.prototype={
an:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
s=W.nQ("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a2(r).a8(0,new W.a2(s))
return r}}
W.f2.prototype={
an:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.an(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaO(s)
q.toString
s=new W.a2(q)
p=s.gaO(s)
r.toString
p.toString
new W.a2(r).a8(0,new W.a2(p))
return r}}
W.f3.prototype={
an:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.an(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaO(s)
r.toString
q.toString
new W.a2(r).a8(0,new W.a2(q))
return r}}
W.c8.prototype={$ic8:1}
W.av.prototype={$iav:1}
W.ad.prototype={$iad:1}
W.f6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.f7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jl.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bG.prototype={$ibG:1}
W.fc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jp.prototype={
gl:function(a){return a.length}}
W.b_.prototype={}
W.jG.prototype={
i:function(a){return String(a)}}
W.fv.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ghw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
ghv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.B("deltaX is not supported"))},
$ibk:1}
W.cb.prototype={
fY:function(a,b){return a.requestAnimationFrame(H.ck(b,1))},
eS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cc.prototype={$icc:1}
W.fD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.db.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aJ(b)
s=a.left==s.gbC(b)&&a.top==s.gbH(b)&&a.width==s.gaN(b)&&a.height==s.gaH(b)}else s=!1
return s},
gR:function(a){return W.mA(J.ah(a.left),J.ah(a.top),J.ah(a.width),J.ah(a.height))},
gaH:function(a){return a.height},
gaN:function(a){return a.width}}
W.fS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.dg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.fA.prototype={
C:function(a,b){var s,r,q,p,o
for(s=this.ga2(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga2:function(a){var s,r,q,p,o=this.a.attributes,n=H.c([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.d(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fK.prototype={
h:function(a,b){return this.a.getAttribute(H.lt(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.l0.prototype={}
W.fN.prototype={
hd:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nw(s,this.c,r,!1)}}}
W.k1.prototype={
$1:function(a){return this.a.$1(a)}}
W.li.prototype={}
W.cd.prototype={
ew:function(a){var s
if($.dc.gbA($.dc)){for(s=0;s<262;++s)$.dc.m(0,C.Y[s],W.qf())
for(s=0;s<12;++s)$.dc.m(0,C.o[s],W.qg())}},
aW:function(a){return $.nr().E(0,W.cz(a))},
ax:function(a,b,c){var s=$.dc.h(0,H.f(W.cz(a))+"::"+b)
if(s==null)s=$.dc.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iam:1}
W.M.prototype={
gM:function(a){return new W.cD(a,this.gl(a))}}
W.cX.prototype={
aW:function(a){return C.b.dm(this.a,new W.iQ(a))},
ax:function(a,b,c){return C.b.dm(this.a,new W.iP(a,b,c))},
$iam:1}
W.iQ.prototype={
$1:function(a){return a.aW(this.a)}}
W.iP.prototype={
$1:function(a){return a.ax(this.a,this.b,this.c)}}
W.dm.prototype={
ez:function(a,b,c,d){var s,r,q
this.a.a8(0,c)
s=b.bJ(0,new W.k9())
r=b.bJ(0,new W.ka())
this.b.a8(0,s)
q=this.c
q.a8(0,C.w)
q.a8(0,r)},
aW:function(a){return this.a.E(0,W.cz(a))},
ax:function(a,b,c){var s=this,r=W.cz(a),q=s.c
if(q.E(0,H.f(r)+"::"+b))return s.d.hj(c)
else if(q.E(0,"*::"+b))return s.d.hj(c)
else{q=s.b
if(q.E(0,H.f(r)+"::"+b))return!0
else if(q.E(0,"*::"+b))return!0
else if(q.E(0,H.f(r)+"::*"))return!0
else if(q.E(0,"*::*"))return!0}return!1},
$iam:1}
W.k9.prototype={
$1:function(a){return!C.b.E(C.o,a)}}
W.ka.prototype={
$1:function(a){return C.b.E(C.o,a)}}
W.hl.prototype={
ax:function(a,b,c){if(this.ep(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.E(0,b)
return!1}}
W.ke.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hk.prototype={
aW:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cz(a)==="foreignObject")return!1
if(s)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.a.a7(b,"on"))return!1
return this.aW(a)},
$iam:1}
W.cD.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.co(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.am.prototype={}
W.k8.prototype={}
W.hv.prototype={
cK:function(a){var s=this,r=new W.km(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
bb:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lJ(a)
else b.removeChild(a)},
h1:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nz(a)
l=m.a.getAttribute("is")
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=='attributes'||h.name=='attributes'||h.id=='lastChild'||h.name=='lastChild'||h.id=='previousSibling'||h.name=='previousSibling'||h.id=='children'||h.name=='children')return true}return false}(a)
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ag(p)}r="element unprintable"
try{r=J.a6(a)}catch(p){H.ag(p)}try{q=W.cz(a)
this.h0(a,b,n,r,q,m,l)}catch(p){if(H.ag(p) instanceof P.ai)throw p
else{this.bb(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bb(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aW(a)){m.bb(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ax(a,"is",g)){m.bb(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga2(f)
r=H.c(s.slice(0),H.mQ(s).J("x<1>"))
for(q=f.ga2(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
o=m.a
n=J.nD(p)
H.lt(p)
if(!o.ax(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cK(a.content)}}
W.km.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h1(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.bb(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.ld("Corrupt HTML")
throw H.b(q)}}catch(o){H.ag(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fE.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h7.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hf.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hF.prototype={}
P.kb.prototype={
co:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bp:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lv(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.aj)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jz("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.G.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.co(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.kU(a,new P.kc(n,o))
return n.a}if(t.aH.b(a)){s=o.co(a)
n=o.b
if(s>=n.length)return H.d(n,s)
p=n[s]
if(p!=null)return p
return o.hr(a,s)}if(t.eH.b(a)){s=o.co(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.d(r,s)
r[s]=p
o.hI(a,new P.kd(n,o))
return n.b}throw H.b(P.jz("structured clone of other type"))},
hr:function(a,b){var s,r=J.b2(a),q=r.gl(a),p=new Array(q),o=this.b
if(b>=o.length)return H.d(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.bp(r.h(a,s))
if(s>=p.length)return H.d(p,s)
p[s]=o}return p}}
P.kc.prototype={
$2:function(a,b){this.a.a[a]=this.b.bp(b)},
$S:3}
P.kd.prototype={
$2:function(a,b){this.a.b[a]=this.b.bp(b)},
$S:3}
P.dv.prototype={$ibB:1,
gdA:function(a){return this.a}}
P.kx.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.hi.prototype={
hI:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e4.prototype={
gb8:function(){var s=this.b,r=H.dC(s)
return new H.aT(new H.b0(s,new P.ic(),r.J("b0<i.E>")),new P.id(),r.J("aT<i.E,D>"))},
C:function(a,b){C.b.C(P.is(this.gb8(),!1,t.h),b)},
m:function(a,b,c){var s=this.gb8()
J.nB(s.b.$1(J.hK(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aL(this.gb8().a)},
h:function(a,b){var s=this.gb8()
return s.b.$1(J.hK(s.a,b))},
gM:function(a){var s=P.is(this.gb8(),!1,t.h)
return new J.a7(s,s.length)}}
P.ic.prototype={
$1:function(a){return t.h.b(a)}}
P.id.prototype={
$1:function(a){return t.h.a(a)}}
P.h6.prototype={
gcF:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdt:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
u:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aJ(b)
if(s==r.gbC(b)){q=n.b
if(q==r.gbH(b)){p=n.c
if(typeof s!=="number")return s.A()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gcF(b)){s=n.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdt(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.ah(q),o=r.b,n=J.ah(o),m=r.c
if(typeof q!=="number")return q.A()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.A()
if(typeof q!=="number")return H.v(q)
q=C.c.gR(s.a(o+q))
return P.oF(P.k3(P.k3(P.k3(P.k3(0,p),n),m),q))}}
P.a9.prototype={
gbC:function(a){return this.a},
gbH:function(a){return this.b},
gaN:function(a){return this.c},
gaH:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.eg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aW.prototype={$iaW:1}
P.ex.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.iS.prototype={
gl:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.f0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdv:function(a){return new P.e4(a,new W.a2(a))},
an:function(a,b,c,d){var s,r,q,p,o,n=H.c([],t.o)
n.push(W.my(null))
n.push(W.mE())
n.push(new W.hk())
c=new W.hv(new W.cX(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hs(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a2(q)
o=n.gaO(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aY.prototype={$iaY:1}
P.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fV.prototype={}
P.fW.prototype={}
P.h2.prototype={}
P.h3.prototype={}
P.hg.prototype={}
P.hh.prototype={}
P.hq.prototype={}
P.hr.prototype={}
P.bi.prototype={$il:1,$ih:1,$in:1}
P.hO.prototype={
gl:function(a){return a.length}}
P.dP.prototype={
h:function(a,b){return P.bo(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga2:function(a){var s=H.c([],t.s)
this.C(a,new P.hP(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
P.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dQ.prototype={
gl:function(a){return a.length}}
P.b6.prototype={}
P.ey.prototype={
gl:function(a){return a.length}}
P.fB.prototype={}
P.eL.prototype={
ea:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.q7(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bO("Incorrect number or type of arguments"))}}
P.eW.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
s=P.bo(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.hc.prototype={}
P.hd.prototype={}
K.b5.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"}}
K.e7.prototype={
aI:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aI(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.iw.prototype={}
K.ab.prototype={
aI:function(a,b){return!this.el(0,b)},
i:function(a){return"!["+this.cO(0)+"]"}}
K.iV.prototype={
aI:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.ar(this.a),r=H.ar(this.b)
return s+".."+r}}
K.j0.prototype={
eu:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.bc(a,a.gl(a));r.t();){q=r.d
s.m(0,q,!0)}p=P.is(s.ga2(s),!0,t.e)
C.b.ek(p)
this.a=p},
aI:function(a,b){return C.b.E(this.a,b)},
i:function(a){return P.f1(this.a,0,null)}}
L.eX.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fe(this.a.k(0,b))
p.a=H.c([],t.B)
p.c=!1
this.c.push(p)
return p},
hE:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aI(0,a))return p}return null},
i:function(a){return this.b},
dg:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.E(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga2(l),l=l.gM(l);l.t();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.E(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.fa.prototype={
i:function(a){var s=H.lG(this.b,"\n","\\n"),r=H.lG(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fb.prototype={
aK:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.jm.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eX(this,b)
s.c=H.c([],t.br)
this.a.m(0,b,s)}return s},
O:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fb(a)
s.c=new H.C(t.dO)
this.b.m(0,a,s)}return s},
cG:function(a){return this.ik(a)},
ik:function(a){var s=this
return P.pu(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cG(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.c([],c)
a0=H.c([],c)
a1=H.c([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.i6(a1,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hE(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f1(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.B("removeRange"))
P.bg(0,k,a0.length)
a0.splice(0,k-0)
C.b.a8(a1,a0)
a0=H.c([],c)
b=H.c([],c)
d=s.d
q=!s.c.E(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)b.push(j)
d=h.b
if(d.d!=null){g=P.f1(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.fa(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.E(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oD()
case 1:return P.oE(o)}}},t.eB)},
i:function(a){var s,r=new P.S(""),q=this.d
if(q!=null)r.a=q.dg()+"\n"
for(q=this.a,q=q.gil(q),q=q.gM(q);q.t();){s=q.gB(q)
if(s!=this.d)r.a+=s.dg()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fe.prototype={
i:function(a){return this.b.b+": "+this.cO(0)}}
O.a8.prototype={
bs:function(a){this.a=H.c([],a.J("x<0*>"))
this.c=this.b=null},
cL:function(a,b,c){this.b=b
this.c=a},
b2:function(a,b){return this.cL(a,null,b)},
d7:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cS:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.a7(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dC(q).J("x<a8.T*>")
if(q.d7(H.c([b],p))){s=q.a
r=s.length
s.push(b)
q.cS(r,H.c([b],p))}},
a8:function(a,b){var s,r
if(this.d7(b)){s=this.a
r=s.length
C.b.a8(s,b)
this.cS(r,b)}},
$ih:1}
O.cS.prototype={
gl:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.G():s},
aP:function(){var s=this.b
if(s!=null)s.F(null)},
ga3:function(a){var s=this.a
if(s.length>0)return C.b.gaz(s)
else return V.bX()},
bG:function(a){var s=this.a
if(a==null)s.push(V.bX())
else s.push(a)
this.aP()},
aJ:function(){var s=this.a
if(s.length>0){s.pop()
this.aP()}}}
E.hS.prototype={}
E.bz.prototype={
sbL:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gp().T(0,q.ge3())
s=q.c
if(s!=null)s.gp().n(0,q.ge3())
r=new D.E("shape",p,q.c)
r.b=!0
q.bD(r)}},
at:function(a,b){var s
for(s=this.y.a,s=new J.a7(s,s.length);s.t();)s.d.at(0,b)},
aj:function(a){var s,r=this,q=a.dx
q.a.push(q.ga3(q))
q.aP()
a.cD(r.f)
q=a.dy
s=(q&&C.b).gaz(q)
if(s!=null&&r.d!=null)s.e7(a,r)
for(q=r.y.a,q=new J.a7(q,q.length);q.t();)q.d.aj(a)
a.cC()
a.dx.aJ()},
bD:function(a){var s=this.z
if(s!=null)s.F(a)},
aa:function(){return this.bD(null)},
e4:function(a){this.e=null
this.bD(a)},
hW:function(){return this.e4(null)},
e2:function(a){this.bD(a)},
hT:function(){return this.e2(null)},
hS:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge1(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bS()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}this.aa()},
hV:function(a,b){var s,r
for(s=b.gM(b),r=this.ge1();s.t();)s.gB(s).gp().T(0,r)
this.aa()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bR.prototype={
i:function(a){return this.b}}
E.c2.prototype={
i:function(a){return this.b}}
E.fL.prototype={}
E.iW.prototype={
es:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.aj(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cS()
r=t.h8
s.a=H.c([],r)
s.gp().n(0,new E.iX(q))
q.cy=s
s=new O.cS()
s.a=H.c([],r)
s.gp().n(0,new E.iY(q))
q.db=s
s=new O.cS()
s.a=H.c([],r)
s.gp().n(0,new E.iZ(q))
q.dx=s
s=H.c([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
gi4:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga3(q)
s=r.db
s=r.z=q.w(0,s.ga3(s))
q=s}return q},
cD:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaz(s):a)},
cC:function(){var s=this.dy
if(s.length>1)s.pop()},
dl:function(a){var s=a.b
if(s.length===0)throw H.b(P.u("May not cache a shader with no name."))
if(this.fr.cb(0,s))throw H.b(P.u('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.m(0,s,a)}}
E.iX.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iY.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iZ.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f9.prototype={
cV:function(a){this.e8()},
cU:function(){return this.cV(null)},
ghJ:function(){var s,r=this,q=Date.now(),p=C.c.a5(P.lT(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.aj(q,!1)
return s/p},
d9:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.w()
if(typeof p!=="number")return H.v(p)
s=C.d.cp(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.w()
r=C.d.cp(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.ml(C.n,q.gi9())}},
e8:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.G.eS(s)
r=W.mW(new E.jk(this),t.p)
r.toString
C.G.fY(s,r)}},
i7:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d9()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.aj(p,!1)
q.y=P.lT(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aP()
p=q.db
C.b.sl(p.a,0)
p.aP()
p=q.dx
C.b.sl(p.a,0)
p.aP()
p=q.dy
p.toString
C.b.sl(p,0)
q.dy.push(null)
m.aj(n.e)}q=n.Q
if(q!=null)q.F(null)}catch(o){s=H.ag(o)
r=H.lA(o)
P.lF("Error: "+H.f(s))
P.lF("Stack: "+H.f(r))
throw H.b(s)}}}
E.jk.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i7()}}}
Z.fw.prototype={}
Z.dT.prototype={
Z:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ag(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.fx.prototype={}
Z.cp.prototype={
aG:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
Z:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].Z(a)},
as:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aj:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.c([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)n.push(s[q].i(0))
p=H.c([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a6(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eI(this.c))+"'")+"]"}}
Z.bj.prototype={
gcN:function(a){var s=this.a,r=(s&$.aK().a)!==0?3:0
if((s&$.br().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=3
if((s&$.bs().a)!==0)r+=2
if((s&$.bM().a)!==0)r+=3
if((s&$.dI().a)!==0)r+=3
if((s&$.dJ().a)!==0)r+=4
if((s&$.cn().a)!==0)++r
return(s&$.bp().a)!==0?r+4:r},
hk:function(a){var s,r=$.aK(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dJ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0)if(s===a)return r
return $.np()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var s=H.c([],t.i),r=this.a
if((r&$.aK().a)!==0)s.push("Pos")
if((r&$.br().a)!==0)s.push("Norm")
if((r&$.bq().a)!==0)s.push("Binm")
if((r&$.bs().a)!==0)s.push("Txt2D")
if((r&$.bM().a)!==0)s.push("TxtCube")
if((r&$.dI().a)!==0)s.push("Clr3")
if((r&$.dJ().a)!==0)s.push("Clr4")
if((r&$.cn().a)!==0)s.push("Weight")
if((r&$.bp().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hT.prototype={}
D.bS.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.c([],t.f):s).push(b)},
T:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.E(q,b)
if(q===!0){q=r.a
s=(q&&C.b).T(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.E(q,b)
if(q===!0){q=r.b
s=(q&&C.b).T(q,b)||s}return s},
F:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.U()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.C(P.is(s,!0,t.dm),new D.ia(o))
s=p.b
if(s!=null){p.b=H.c([],t.f)
C.b.C(s,new D.ib(o))}return!0},
dD:function(){return this.F(null)},
aL:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.F(s)}}}}
D.ia.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ib.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.U.prototype={}
D.aP.prototype={}
D.aQ.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dU.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ee.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.io.prototype={
i0:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hX:function(a){this.c=a.b
this.d.T(0,a.a)
return!1}}
X.cN.prototype={}
X.iu.prototype={
b7:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.w()
s=b.b
r=o.ch
if(typeof s!=="number")return s.w()
q=new V.ac(m.a+l*k,m.b+s*r)
r=o.a.gaX()
p=new X.bZ(a,V.be(),o.x,r,q)
p.b=!0
o.z=new P.aj(n,!1)
o.x=q
return p},
cB:function(a,b){this.r=a.a
return!1},
bj:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eg()
if(typeof s!=="number")return s.ak()
this.r=(s&~r)>>>0
return!1},
bi:function(a,b){var s=this.d
if(s==null)return!1
s.F(this.b7(a,b))
return!0},
i1:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaX()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.w()
o=a.b
n=m.cy
if(typeof o!=="number")return o.w()
r=new X.c_(new V.ae(q*p,o*n),s,r)
r.b=!0
l.F(r)
return!0},
fs:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cN(c,p.a.gaX(),b)
q.b=!0
r.F(q)
p.y=new P.aj(s,!1)
p.x=V.be()}}
X.ap.prototype={
u:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ap))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bZ.prototype={}
X.iO.prototype={
bU:function(a,b,c){var s=this,r=new P.aj(Date.now(),!1),q=s.a.gaX(),p=new X.bZ(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cB:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.F(this.bU(a,b,!0))
return!0},
bj:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eg()
if(typeof r!=="number")return r.ak()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.F(s.bU(a,b,!0))
return!0},
bi:function(a,b){var s=this.d
if(s==null)return!1
s.F(this.bU(a,b,!1))
return!0},
i2:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaX()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.w()
p=a.b
o=n.ch
if(typeof p!=="number")return p.w()
s=new X.c_(new V.ae(r*q,p*o),s,b)
s.b=!0
m.F(s)
return!0},
gdC:function(){var s=this.b
return s==null?this.b=D.G():s},
gcH:function(){var s=this.c
return s==null?this.c=D.G():s},
ge0:function(){var s=this.d
return s==null?this.d=D.G():s}}
X.c_.prototype={}
X.eG.prototype={}
X.d2.prototype={}
X.jo.prototype={
b7:function(a,b){var s=this,r=new P.aj(Date.now(),!1),q=a.length>0?a[0]:V.be(),p=s.a.gaX(),o=new X.d2(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i_:function(a){var s=this.b
if(s==null)return!1
s.F(this.b7(a,!0))
return!0},
hY:function(a){var s=this.c
if(s==null)return!1
s.F(this.b7(a,!0))
return!0},
hZ:function(a){var s=this.d
if(s==null)return!1
s.F(this.b7(a,!1))
return!0}}
X.fs.prototype={
gaX:function(){var s=this.a,r=C.i.gdz(s).c
r.toString
s=C.i.gdz(s).d
s.toString
return V.mf(0,0,r,s)},
d_:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ee(s,new X.ap(r,a.altKey,a.shiftKey))},
aU:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ap(r,a.altKey,a.shiftKey)},
c6:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ap(r,a.altKey,a.shiftKey)},
aD:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a0()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.a0()
if(typeof s!=="number")return H.v(s)
return new V.ac(q-o,p-s)},
ba:function(a){return new V.ae(a.movementX,a.movementY)},
c3:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.c([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.ar(p.pageX)
C.d.ar(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.ar(p.pageX)
m=C.d.ar(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.ac(o-n,m-l))}return j},
aB:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dU(s,new X.ap(r,a.altKey,a.shiftKey))},
bV:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a0()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a0()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
fl:function(a){this.f=!0},
f9:function(a){this.f=!1},
ff:function(a){if(this.f&&this.bV(a))a.preventDefault()},
fp:function(a){var s
if(!this.f)return
s=this.d_(a)
this.b.i0(s)},
fn:function(a){var s
if(!this.f)return
s=this.d_(a)
this.b.hX(s)},
fu:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aU(a)
if(p.x){s=p.aB(a)
r=p.ba(a)
if(p.d.cB(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aB(a)
q=p.aD(a)
if(p.c.cB(s,q))a.preventDefault()},
fA:function(a){var s,r,q,p=this
p.aU(a)
s=p.aB(a)
if(p.x){r=p.ba(a)
if(p.d.bj(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bj(s,q))a.preventDefault()},
fj:function(a){var s,r,q,p=this
if(!p.bV(a)){p.aU(a)
s=p.aB(a)
if(p.x){r=p.ba(a)
if(p.d.bj(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bj(s,q))a.preventDefault()}},
fw:function(a){var s,r,q,p=this
p.aU(a)
s=p.aB(a)
if(p.x){r=p.ba(a)
if(p.d.bi(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bi(s,q))a.preventDefault()},
fh:function(a){var s,r,q,p=this
if(!p.bV(a)){p.aU(a)
s=p.aB(a)
if(p.x){r=p.ba(a)
if(p.d.bi(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bi(s,q))a.preventDefault()}},
fC:function(a){var s,r,q=this
q.aU(a)
s=new V.ae((a&&C.F).ghv(a),C.F.ghw(a)).w(0,q.Q)
if(q.x){if(q.d.i1(s))a.preventDefault()
return}if(q.r)return
r=q.aD(a)
if(q.c.i2(s,r))a.preventDefault()},
fE:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aB(q.y)
r=q.aD(q.y)
q.d.fs(s,r,p)}},
fU:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c6(a)
s=r.c3(a)
if(r.e.i_(s))a.preventDefault()},
fQ:function(a){var s
this.c6(a)
s=this.c3(a)
if(this.e.hY(s))a.preventDefault()},
fS:function(a){var s
this.c6(a)
s=this.c3(a)
if(this.e.hZ(s))a.preventDefault()}}
D.dR.prototype={$iV:1}
D.bx.prototype={
aA:function(a){var s=this.r
if(s!=null)s.F(a)},
ey:function(){return this.aA(null)},
$iV:1}
D.V.prototype={}
D.cI.prototype={
aA:function(a){var s=this.y
if(s!=null)s.F(a)},
d6:function(a){var s=this.z
if(s!=null)s.F(a)},
fq:function(){return this.d6(null)},
fG:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eM(q))return!1}return!0},
f3:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gd5(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bx)this.f.push(o)
n=o.r
if(n==null){n=new D.bS()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}s=new D.aP()
s.b=!0
this.aA(s)},
fK:function(a,b){var s,r,q
for(s=b.gM(b),r=this.gd5();s.t();){q=s.gB(s)
C.b.T(this.e,q)
q.gp().T(0,r)}s=new D.aQ()
s.b=!0
this.aA(s)},
eM:function(a){var s=C.b.E(this.f,a)
return s}}
D.eF.prototype={$iV:1}
D.eU.prototype={$iV:1}
V.z.prototype={
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.z))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.b8.prototype={
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b8))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.i8.prototype={}
V.em.prototype={
ad:function(a,b){var s=this,r=H.c([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.em))return!1
s=b.a
$.I().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cm(H.c([o.a,o.d,o.r],n),3,0),l=V.cm(H.c([o.b,o.e,o.x],n),3,0),k=V.cm(H.c([o.c,o.f,o.y],n),3,0)
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
V.bd.prototype={
ad:function(a,b){var s=this,r=H.c([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
cs:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.I().toString
if(Math.abs(b3-0)<1e-9)return V.bX()
s=1/b3
r=-l
q=-a2
return V.aV((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
w:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aV(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bI:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.F(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bo:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a1(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bd))return!1
s=b.a
$.I().toString
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
i:function(a){return this.L()},
G:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cm(H.c([n.a,n.e,n.y,n.cx],m),3,0),k=V.cm(H.c([n.b,n.f,n.z,n.cy],m),3,0),j=V.cm(H.c([n.c,n.r,n.Q,n.db],m),3,0),i=V.cm(H.c([n.d,n.x,n.ch,n.dx],m),3,0)
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
L:function(){return this.G("")}}
V.ac.prototype={
a6:function(a){return new V.ae(a.a-this.a,a.b-this.b)},
u:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.a1.prototype={
a0:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.bf.prototype={
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bf))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.eK.prototype={
gai:function(){var s=this.c,r=this.d
return s>r?r:s},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eK))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.ae.prototype={
ct:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.v(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return q*p+s*r},
w:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.w()
if(typeof b!=="number")return H.v(b)
s=this.b
if(typeof s!=="number")return s.w()
return new V.ae(r*b,s*b)},
a_:function(a,b){var s,r
$.I().toString
if(Math.abs(b-0)<1e-9){s=$.ms
return s==null?$.ms=new V.ae(0,0):s}s=this.a
if(typeof s!=="number")return s.a_()
r=this.b
if(typeof r!=="number")return r.a_()
return new V.ae(s/b,r/b)},
u:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
s=b.a
r=this.a
$.I().toString
if(typeof s!=="number")return s.a0()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a0()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.F.prototype={
ct:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){return new V.F(V.lC(this.a,a.a,b),V.lC(this.b,a.b,b),V.lC(this.c,a.c,b))},
N:function(){var s=this,r=Math.sqrt(s.a9(s))
if(r===1)return s
return s.a_(0,r)},
bg:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.F(s*r-q*p,q*o-n*r,n*p-s*o)},
A:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.F(-this.a,-this.b,-this.c)},
a_:function(a,b){$.I().toString
if(Math.abs(b-0)<1e-9)return V.ft()
return new V.F(this.a/b,this.b/b,this.c/b)},
e_:function(){$.I().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.F))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.hV.prototype={
bN:function(a){var s=V.qu(a,this.c,this.b)
return s},
gp:function(){var s=this.y
return s==null?this.y=D.G():s},
P:function(a){var s=this.y
if(s!=null)s.F(a)},
scI:function(a,b){},
scw:function(a){var s,r=this,q=r.b
$.I().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bN(s)}q=new D.E("maximumLocation",q,r.b)
q.b=!0
r.P(q)}},
scA:function(a){var s,r=this,q=r.c
$.I().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bN(s)}q=new D.E("minimumLocation",q,r.c)
q.b=!0
r.P(q)}},
sah:function(a,b){var s,r=this
b=r.bN(b)
s=r.d
$.I().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.E("location",s,b)
s.b=!0
r.P(s)}},
scz:function(a){var s,r,q=this,p=q.e
$.I().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.E("maximumVelocity",p,a)
p.b=!0
q.P(p)}},
sU:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.I().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.E("velocity",r,a)
r.b=!0
s.P(r)}},
sce:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.I().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.E("dampening",s,a)
s.b=!0
this.P(s)}},
at:function(a,b){var s,r,q,p=this,o=p.f
$.I().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sah(0,p.d+s*b)
o=p.x
$.I().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sU(s)}}}
U.cr.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.G():s},
b1:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bU.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.G():s},
P:function(a){var s=this.e
if(s!=null)s.F(a)},
ac:function(){return this.P(null)},
f1:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaQ(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aP()
s.b=!0
this.P(s)},
fI:function(a,b){var s,r
for(s=b.gM(b),r=this.gaQ();s.t();)s.gB(s).gp().T(0,r)
s=new D.aQ()
s.b=!0
this.P(s)},
b1:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ae()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a7(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.b1(0,b,c)
if(r!=null)s=s==null?r:r.w(0,s)}}q.f=s==null?V.bX():s
p=q.e
if(p!=null)p.aL(0)}return q.f},
u:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bU))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.Q(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iX:1}
U.X.prototype={}
U.d8.prototype={
gp:function(){var s=this.cy
return s==null?this.cy=D.G():s},
P:function(a){var s=this.cy
if(s!=null)s.F(a)},
ac:function(){return this.P(null)},
be:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdC().n(0,s.gbW())
s.a.c.ge0().n(0,s.gbY())
s.a.c.gcH().n(0,s.gc_())
return!0},
bX:function(a){var s=this
if(!J.Q(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bZ:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a6(a.d)
s=s.a9(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a6(a.d).w(0,2).a_(0,s.gai())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.w()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sU(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a6(q).w(0,2).a_(0,s.gai())
r=l.b
o=p.a
if(typeof o!=="number")return o.S()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sah(0,-o*n+m)
l.b.sU(0)
l.Q=a.z.a6(q).w(0,2).a_(0,s.gai())}l.ac()},
c0:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a9(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.w()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sU(r*10*q)
p.ac()}},
b1:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.ae()
if(o<n){p.ch=n
s=b.y
p.b.at(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aV(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iX:1}
U.d9.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.G():s},
P:function(a){var s=this.fx
if(s!=null)s.F(a)},
ac:function(){return this.P(null)},
be:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdC().n(0,q.gbW())
q.a.c.ge0().n(0,q.gbY())
q.a.c.gcH().n(0,q.gc_())
s=q.a.d
r=s.f
s=r==null?s.f=D.G():r
s.n(0,q.geU())
s=q.a.d
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.geW())
s=q.a.e
r=s.b
s=r==null?s.b=D.G():r
s.n(0,q.ghb())
s=q.a.e
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.gh9())
s=q.a.e
r=s.c
s=r==null?s.c=D.G():r
s.n(0,q.gh7())
return!0},
aw:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.S()
s=-s}if(this.r){if(typeof r!=="number")return r.S()
r=-r}return new V.ae(s,r)},
bX:function(a){var s=this
t.d.a(a)
if(!J.Q(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bZ:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a6(a.d)
s=s.a9(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aw(a.y.a6(a.d).w(0,2).a_(0,s.gai()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.S()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.S()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aw(r.a6(q).w(0,2).a_(0,s.gai()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sah(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sah(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.aw(a.z.a6(q).w(0,2).a_(0,s.gai()))}l.ac()},
c0:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a9(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.S()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.S()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.ac()}},
eV:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.Q(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aw(r.a6(q).w(0,2).a_(0,s.gai()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sah(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sah(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.aw(a.z.a6(q).w(0,2).a_(0,s.gai()))
l.ac()},
hc:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ha:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a6(a.d)
s=s.a9(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aw(a.y.a6(a.d).w(0,2).a_(0,s.gai()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.S()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.S()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aw(r.a6(q).w(0,2).a_(0,s.gai()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sah(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sah(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.aw(a.z.a6(q).w(0,2).a_(0,s.gai()))}l.ac()},
h8:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a9(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.S()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.S()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.ac()}},
b1:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ae()
if(o<n){p.dy=n
s=b.y
p.c.at(0,s)
p.b.at(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aV(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.w(0,V.aV(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iX:1}
U.da.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.G():s},
P:function(a){var s=this.r
if(s!=null)s.F(a)},
be:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.G():r
r=p.geZ()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.G():q).n(0,r)
return!0},
f_:function(a){var s,r,q,p,o=this
if(!J.Q(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.w()
p=s+r*q
if(s!==p){o.d=p
s=new D.E("zoom",s,p)
s.b=!0
o.P(s)}},
b1:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aV(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iX:1}
M.cq.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.G():s},
Y:function(a){var s=this.r
if(s!=null)s.F(a)},
b5:function(){return this.Y(null)},
fM:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aP()
s.b=!0
this.Y(s)},
fO:function(a,b){var s,r
for(s=b.gM(b),r=this.gX();s.t();)s.gB(s).gp().T(0,r)
s=new D.aQ()
s.b=!0
this.Y(s)},
aj:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a7(s,s.length);s.t();){r=s.d
if(r!=null)r.aj(a)}q.f=!1},
$ia5:1}
M.cu.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.G():s},
Y:function(a){var s=this.r
if(s!=null)s.F(a)},
b5:function(){return this.Y(null)},
sbf:function(a){var s,r,q=this
if(a==null)a=new X.ik()
s=q.b
if(s!==a){if(s!=null)s.gp().T(0,q.gX())
r=q.b
q.b=a
a.gp().n(0,q.gX())
s=new D.E("camera",r,q.b)
s.b=!0
q.Y(s)}},
sbm:function(a,b){var s,r,q=this
if(b==null)b=X.l1(null)
s=q.c
if(s!==b){if(s!=null)s.gp().T(0,q.gX())
r=q.c
q.c=b
b.gp().n(0,q.gX())
s=new D.E("target",r,q.c)
s.b=!0
q.Y(s)}},
sbn:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().T(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gX())
q=new D.E("technique",s,r.d)
q.b=!0
r.Y(q)}},
aj:function(a){var s=this
a.cD(s.d)
s.c.Z(a)
s.b.Z(a)
s.e.at(0,a)
s.e.aj(a)
s.b.as(a)
s.c.toString
a.cC()},
$ia5:1}
M.cA.prototype={
Y:function(a){var s=this.y
if(s!=null)s.F(a)},
b5:function(){return this.Y(null)},
fb:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bS()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aP()
s.b=!0
this.Y(s)},
fd:function(a,b){var s,r
for(s=b.gM(b),r=this.gX();s.t();)s.gB(s).gp().T(0,r)
s=new D.aQ()
s.b=!0
this.Y(s)},
sbf:function(a){var s,r,q=this
if(a==null)a=X.m4(null)
s=q.b
if(s!==a){if(s!=null)s.gp().T(0,q.gX())
r=q.b
q.b=a
a.gp().n(0,q.gX())
s=new D.E("camera",r,q.b)
s.b=!0
q.Y(s)}},
sbm:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().T(0,r.gX())
s=r.c
r.c=b
b.gp().n(0,r.gX())
q=new D.E("target",s,r.c)
q.b=!0
r.Y(q)}},
sbn:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().T(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gX())
q=new D.E("technique",s,r.d)
q.b=!0
r.Y(q)}},
gp:function(){var s=this.y
return s==null?this.y=D.G():s},
aj:function(a){var s,r=this
a.cD(r.d)
r.c.Z(a)
r.b.Z(a)
s=r.d
if(s!=null)s.at(0,a)
for(s=r.e.a,s=new J.a7(s,s.length);s.t();)s.d.at(0,a)
for(s=r.e.a,s=new J.a7(s,s.length);s.t();)s.d.aj(a)
r.b.toString
a.cy.aJ()
a.db.aJ()
r.c.toString
a.cC()},
$ia5:1}
M.a5.prototype={}
A.dO.prototype={}
A.hN.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hB:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dB:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a0.prototype={
gau:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof A.a0))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.el.prototype={
er:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.S("")
r=c6.fr
if(r){s.a=c5
q=c5}else q=""
p=c6.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c6.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c6.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.pJ(c6,s)
A.pL(c6,s)
A.pK(c6,s)
A.pN(c6,s)
A.pO(c6,s)
A.pM(c6,s)
A.pP(c6,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c6.ry
q+="   return projViewObjMat*vec4("+(m?"bendPos":"posAttr")+", 1.0);\n"
s.a=q
q+="}\n"
s.a=q
q+="\n"
s.a=q
q+="void main()\n"
s.a=q
q=s.a=q+"{\n"
if(m){q+="   setupBendData();\n"
s.a=q}if(o){q+="   normalVec = getNorm();\n"
s.a=q}if(n){q+="   binormalVec = getBinm();\n"
s.a=q}if(c6.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c6.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c6.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c6.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c1.dX(0,q.charCodeAt(0)==0?q:q,A.pI(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.I(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.I(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.I(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.I(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.I(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.I(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.I(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.I(0,"colorMat"))
c1.r1=H.c([],t.hg)
q=c6.aZ
if(q>0){c1.k4=c1.y.I(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.q(P.u(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.I(0,"emissionClr"))
if(r.b)c1.rx=t.c.a(c1.y.I(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.I(0,"ambientClr"))
if(r.b)c1.x2=t.c.a(c1.y.I(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.I(0,"diffuseClr"))
if(r.b)c1.aZ=t.c.a(c1.y.I(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.by=t.r.a(c1.y.I(0,"invDiffuseClr"))
if(r.b)c1.dF=t.c.a(c1.y.I(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(q||r.b||!1){c1.dI=t.n.a(c1.y.I(0,"shininess"))
if(q)c1.dG=t.r.a(c1.y.I(0,"specularClr"))
if(r.b)c1.dH=t.c.a(c1.y.I(0,"specularTxt"))}if(c6.f.b)c1.dJ=t.c.a(c1.y.I(0,"bumpTxt"))
if(c6.db){c1.dK=t.Q.a(c1.y.I(0,"envSampler"))
r=c6.r
if(r.a)c1.dL=t.r.a(c1.y.I(0,"reflectClr"))
if(r.b)c1.dM=t.c.a(c1.y.I(0,"reflectTxt"))
r=c6.x
q=r.a
if(q||r.b||!1){c1.dN=t.n.a(c1.y.I(0,"refraction"))
if(q)c1.dO=t.r.a(c1.y.I(0,"refractClr"))
if(r.b)c1.dP=t.c.a(c1.y.I(0,"refractTxt"))}}r=c6.y
if(r.a)c1.dQ=t.n.a(c1.y.I(0,"alpha"))
if(r.b)c1.dR=t.c.a(c1.y.I(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.cf=new H.C(t.J)
c1.cg=new H.C(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.q(P.u(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.q(P.u(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.ak()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.q(P.u(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.q(P.u(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.q(P.u(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d3(k,c,b,a4,a3,a2))}c1.cg.m(0,h,f)
m=c1.cf
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.m(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.ci=new H.C(t.J)
c1.cj=new H.C(t.bj)
for(p=t.r,o=t.c,n=t.dv,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.ak()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.q(P.u(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.q(P.u(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.q(P.u(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.q(P.u(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.q(P.u(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.q(P.u(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d4(a8,a7,a6,k,c,a9))}c1.cj.m(0,h,f)
m=c1.ci
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.m(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.ck=new H.C(t.J)
c1.cl=new H.C(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.c([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.q(P.u(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.q(P.u(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.q(P.u(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.ak()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d6(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cl.m(0,h,f)
a5=c1.ck
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.q(P.u(c3+b1+c4))
a5.m(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.cm=new H.C(t.J)
c1.cn=new H.C(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,e=t.fF,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.c([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.q(P.u(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.q(P.u(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.q(P.u(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.q(P.u(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.ak()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.q(P.u(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.q(P.u(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.q(P.u(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.q(P.u(c3+b0+c4))
o.a(b6)
b7=b6
b8=b5
a7=a1
a8=a0}else{b7=c2
b8=b7
a7=b8
a8=a7}a5=(h&2)!==0
if(a5){b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.q(P.u(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.q(P.u(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.d7(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cn.m(0,h,f)
d=c1.cm
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.q(P.u(c3+b0+c4))
d.m(0,h,k)}}}},
aq:function(a,b){if(b!=null&&b.d)a.ei(b)},
h2:function(a,b){if(b!=null&&b.d>=6)a.cM(b)}}
A.dS.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e0.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eH.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eV.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iz.prototype={
i:function(a){return this.bh}}
A.d3.prototype={}
A.d4.prototype={}
A.d6.prototype={}
A.d7.prototype={}
A.c6.prototype={
cR:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dX:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.d0(b,35633)
p.f=p.d0(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.q(P.u("Failed to link shader: "+H.f(q)))}p.h3()
p.h5()},
Z:function(a){a.a.useProgram(this.r)
this.x.hB()},
d0:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
h3:function(){var s,r,q,p=this,o=H.c([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dO(n,r.name,q))}p.x=new A.hN(o)},
h5:function(){var s,r,q,p=this,o=H.c([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.ht(r.type,r.size,r.name,q))}p.y=new A.jx(o)},
aR:function(a,b,c){var s=this.a
if(a===1)return new A.fh(s,b,c)
else return A.lf(s,this.r,b,a,c)},
eP:function(a,b,c){var s=this.a
if(a===1)return new A.fl(s,b,c)
else return A.lf(s,this.r,b,a,c)},
eQ:function(a,b,c){var s=this.a
if(a===1)return new A.fm(s,b,c)
else return A.lf(s,this.r,b,a,c)},
bv:function(a,b){return new P.fO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
ht:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aR(b,c,d)
case 5121:return s.aR(b,c,d)
case 5122:return s.aR(b,c,d)
case 5123:return s.aR(b,c,d)
case 5124:return s.aR(b,c,d)
case 5125:return s.aR(b,c,d)
case 5126:return new A.fg(s.a,c,d)
case 35664:return new A.jt(s.a,c,d)
case 35665:return new A.fi(s.a,c,d)
case 35666:return new A.fj(s.a,c,d)
case 35667:return new A.ju(s.a,c,d)
case 35668:return new A.jv(s.a,c,d)
case 35669:return new A.jw(s.a,c,d)
case 35674:return new A.jy(s.a,c,d)
case 35675:return new A.fk(s.a,c,d)
case 35676:return new A.d5(s.a,c,d)
case 35678:return s.eP(b,c,d)
case 35680:return s.eQ(b,c,d)
case 35670:throw H.b(s.bv("BOOL",c))
case 35671:throw H.b(s.bv("BOOL_VEC2",c))
case 35672:throw H.b(s.bv("BOOL_VEC3",c))
case 35673:throw H.b(s.bv("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.eQ.prototype={}
A.ff.prototype={}
A.jx.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
I:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.L()},
L:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fh.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.ju.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jv.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jw.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.js.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jt.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fi.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jy.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fk.prototype={
al:function(a){var s=new Float32Array(H.cg(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d5.prototype={
al:function(a){var s=new Float32Array(H.cg(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fl.prototype={
ei:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fm.prototype={
cM:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ko.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cu(q.b,b).cu(q.d.cu(q.c,b),c)
q=new V.a1(p.a,p.b,p.c)
if(!J.Q(a.f,q)){a.f=q
q=a.a
if(q!=null)q.aa()}a.sie(p.N())
q=1-b
s=1-c
s=new V.bf(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.Q(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.aa()}}}
F.e2.prototype={
eH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.ft()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.e_())return p
return q.N()},
eJ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a0(0,n)
q=new V.F(o.a,o.b,o.c).N()
o=r.a0(0,n)
return q.bg(new V.F(o.a,o.b,o.c).N()).N()},
ca:function(){var s,r=this
if(r.d!=null)return!0
s=r.eH()
if(s==null){s=r.eJ()
if(s==null)return!1}r.d=s
r.a.a.aa()
return!0},
eG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.ft()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.e_())return p
return q.N()},
eI:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.I().toString
if(Math.abs(p-0)<1e-9){j=b.a0(0,e)
o=new V.F(j.a,j.b,j.c).N()
if(q.a-r.a<0)o=o.S(0)}else{n=(j-s.b)/p
j=b.a0(0,e)
j=new V.a1(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a0(0,h)
o=new V.F(j.a,j.b,j.c).N()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.S(0)}j=l.d
if(j!=null){m=j.N()
o=m.bg(o).N().bg(m).N()}return o},
c8:function(){var s,r=this
if(r.e!=null)return!0
s=r.eG()
if(s==null){s=r.eI()
if(s==null)return!1}r.e=s
r.a.a.aa()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
G:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.a.ap(J.a6(q.e),0)+", "+C.a.ap(J.a6(r.b.e),0)+", "+C.a.ap(J.a6(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
L:function(){return this.G("")}}
F.eh.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
G:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.a.ap(J.a6(s.e),0)+", "+C.a.ap(J.a6(this.b.e),0)},
L:function(){return this.G("")}}
F.eE.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ap(J.a6(s.e),0)},
L:function(){return this.G("")}}
F.j1.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.G():s},
hP:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.a1()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hq())}f.a.a1()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.a1()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eE()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.F(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.a1()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.a1()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.nZ(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.a1()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.a1()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.a1()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cB(j,i,g)}e=f.e
if(e!=null)e.aL(0)},
aE:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aE()||!1
if(!r.a.aE())s=!1
q=r.e
if(q!=null)q.aL(0)
return s},
du:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aK().a)!==0?1:0
if((s&$.br().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.bM().a)!==0)++r
if((s&$.dI().a)!==0)++r
if((s&$.dJ().a)!==0)++r
if((s&$.cn().a)!==0)++r
if((s&$.bp().a)!==0)++r
q=a6.gcN(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.c(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.c(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hk(k)
i=j.gcN(j)
if(k>=m)return H.d(n,k)
n[k]=new Z.dT(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.d(g,h)
f=g[h].hN(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.d(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cg(o)),35044)
s.bindBuffer(a3,null)
a=new Z.cp(new Z.fw(a3,b),n,a6)
a.b=H.c([],t.aZ)
if(a2.b.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.a1()
a0.push(m.e)}a1=Z.lh(s,34963,a0)
a.b.push(new Z.bV(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.a1()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.a1()
a0.push(m.e)}a1=Z.lh(s,34963,a0)
a.b.push(new Z.bV(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.a1()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.a1()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].c
m.a.a.a1()
a0.push(m.e)}a1=Z.lh(s,34963,a0)
a.b.push(new Z.bV(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.c([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.G(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.G(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.G(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.G(r))}return C.b.j(q,"\n")},
aa:function(){var s=this.e
if(s!=null)s.F(null)}}
F.j2.prototype={
hh:function(a){var s,r,q,p,o=H.c([],t.b),n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.n(0,n)
s.a.n(0,q)
s.a.n(0,p)
o.push(F.cB(n,q,p))}return o},
hi:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.c([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.d(c,q)
k=c[q];++q
if(q>=l)return H.d(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.d(c,i)
h=c[i]
if(r<0||r>=l)return H.d(c,r)
g=c[r]
l=s.a
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.cB(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cB(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cB(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cB(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
aE:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].ca())q=!1
return q},
c9:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c8())q=!1
return q},
i:function(a){return this.L()},
G:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
L:function(){return this.G("")}}
F.j3.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
G:function(a){var s,r,q=H.c([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].G(a+(""+s+". ")))}return C.b.j(q,"\n")},
L:function(){return this.G("")}}
F.j4.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
G:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
L:function(){return this.G("")}}
F.fu.prototype={
cd:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jP(s.cx,p,m,r,q,o,n,a,l)},
hq:function(){return this.cd(null)},
sie:function(a){var s
if(!J.Q(this.z,a)){this.z=a
s=this.a
if(s!=null)s.aa()}},
hN:function(a){var s,r,q=this
if(a.u(0,$.aK())){s=q.f
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.br())){s=q.r
r=t.m
if(s==null)return H.c([0,1,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.bq())){s=q.x
r=t.m
if(s==null)return H.c([0,0,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.bs())){s=q.y
r=t.m
if(s==null)return H.c([0,0],r)
else return H.c([s.a,s.b],r)}else if(a.u(0,$.bM())){s=q.z
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.dI())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.dJ())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1,1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else if(a.u(0,$.cn()))return H.c([q.ch],t.m)
else if(a.u(0,$.bp())){s=q.cx
r=t.m
if(s==null)return H.c([-1,-1,-1,-1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else return H.c([],t.m)},
ca:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ft()
r.d.C(0,new F.jX(q))
r.r=q.a.N()
q=r.a
if(q!=null){q.aa()
q=r.a.e
if(q!=null)q.aL(0)}return!0},
c8:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ft()
r.d.C(0,new F.jW(q))
r.x=q.a.N()
q=r.a
if(q!=null){q.aa()
q=r.a.e
if(q!=null)q.aL(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
G:function(a){var s,r,q=this,p="-",o=H.c([],t.i)
o.push(C.a.ap(J.a6(q.e),0))
s=q.f
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.x
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.y
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.z
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.Q
if(s!=null)o.push(s.i(0))
else o.push(p)
o.push(V.K(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
L:function(){return this.G("")}}
F.jX.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.jW.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.jQ.prototype={
a1:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.u("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.aa()
return!0},
bw:function(a,b,c,d,e,f){var s=F.jP(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aE:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].ca()
return!0},
c9:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c8()
return!0},
hn:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.N()
if(!J.Q(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}return!0},
i:function(a){return this.L()},
G:function(a){var s,r,q,p
this.a1()
s=H.c([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].G(a))
return C.b.j(s,"\n")},
L:function(){return this.G("")}}
F.jR.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
C:function(a,b){var s=this
C.b.C(s.b,b)
C.b.C(s.c,new F.jS(s,b))
C.b.C(s.d,new F.jT(s,b))},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jS.prototype={
$1:function(a){if(!J.Q(a.a,this.a))this.b.$1(a)}}
F.jT.prototype={
$1:function(a){var s=this.a
if(!J.Q(a.a,s)&&!J.Q(a.b,s))this.b.$1(a)}}
F.jU.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jV.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
O.ek.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.G():s},
V:function(a){var s=this.fr
if(s!=null)s.F(a)},
b9:function(){return this.V(null)},
d8:function(a){this.a=null
this.V(a)},
h_:function(){return this.d8(null)},
f5:function(a,b){var s=new D.aP()
s.b=!0
this.V(s)},
f7:function(a,b){var s=new D.aQ()
s.b=!0
this.V(s)},
cZ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gay()
n=d.h(0,p.gay())
d.m(0,o,n==null?1:n)}m=H.c([],t.am)
d.C(0,new O.iD(f,m))
C.b.b4(m,new O.iE())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=H.c([],t.M)
l.C(0,new O.iF(f,k))
C.b.b4(k,new O.iG())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gay()
n=j.h(0,p.gay())
j.m(0,o,n==null?1:n)}i=H.c([],t.d1)
j.C(0,new O.iH(f,i))
C.b.b4(i,new O.iI())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gay()
o=h.h(0,p.gay())
h.m(0,r,o==null?1:o)}g=H.c([],t.cz)
h.C(0,new O.iJ(f,g))
C.b.b4(g,new O.iK())
e=C.c.a5(f.e.a.length+3,4)
f.dy.toString
return A.o4(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
am:function(a,b){if(b!=null)if(!C.b.E(a,b)){b.sb_(0,a.length)
a.push(b)}},
at:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a7(s,s.length);s.t();){r=s.d
r.toString
q=$.jO
if(q==null)q=$.jO=new V.F(0,0,1)
r.a=q
p=$.jN
r.d=p==null?$.jN=new V.F(0,1,0):p
p=$.jM
r.e=p==null?$.jM=new V.F(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bI(q).N()
r.d=o.bI(r.d).N()
r.e=o.bI(r.e).N()}}}},
e7:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cZ()
s=b4.fr.h(0,b3.bh)
if(s==null){s=A.o3(b3,b4.a)
b4.dl(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.by
b3=b5.e
if(!(b3 instanceof Z.cp))b3=b5.e=null
if(b3==null||!b3.d.u(0,q)){b3=r.k4
if(b3)b5.d.aE()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.c9()
o.a.c9()
o=o.e
if(o!=null)o.aL(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hn()
n=n.e
if(n!=null)n.aL(0)}l=b5.d.du(new Z.fx(b4.a),q)
l.aG($.aK()).e=b2.a.Q.c
if(b3)l.aG($.br()).e=b2.a.cx.c
if(p)l.aG($.bq()).e=b2.a.ch.c
if(r.r2)l.aG($.bs()).e=b2.a.cy.c
if(o)l.aG($.bM()).e=b2.a.db.c
if(r.ry)l.aG($.bp()).e=b2.a.dx.c
b5.e=l}k=H.c([],t.bw)
b2.a.Z(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga3(p)
b3=b3.dy
b3.toString
b3.al(p.ad(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga3(p)
o=b4.dx
o=b4.cx=p.w(0,o.ga3(o))
p=o}b3=b3.fr
b3.toString
b3.al(p.ad(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gi4()
o=b4.dx
o=b4.ch=p.w(0,o.ga3(o))
p=o}b3=b3.fy
b3.toString
b3.al(p.ad(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga3(p)
b3=b3.fx
b3.toString
b3.al(p.ad(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.al(C.j.ad(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.al(C.j.ad(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.al(C.j.ad(p,!0))}if(r.aZ>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.cg(p.ad(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(k,b2.f.d)
b3=b2.a
p=b2.f.d
b3.aq(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(k,b2.r.d)
b3=b2.a
p=b2.r.d
b3.aq(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(k,b2.x.d)
b3=b2.a
p=b2.x.d
b3.aq(b3.aZ,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.by
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(k,b2.y.d)
b3=b2.a
p=b2.y.d
b3.aq(b3.dF,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.dI
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dG
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(k,b2.z.d)
b3=b2.a
p=b2.z.d
b3.aq(b3.dH,p)}b3=r.z
if(b3.length>0){g=new H.C(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gay()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.co(b2.a.cg.h(0,d),c)
n=e.gip()
m=$.aX
n=n.bo(m==null?$.aX=new V.a1(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giu()
m=$.aX
n=n.bo(m==null?$.aX=new V.a1(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gv(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gdE()){n=e.gdn()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gdq()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gdr()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.cf.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga3(p)
a0=new H.C(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.m(0,0,c+1)
b=J.co(b2.a.cj.h(0,0),c)
n=a.bI(e.a).N()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.ci.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga3(p)
a3=new H.C(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gay()
c=a3.h(0,d)
if(c==null)c=0
a3.m(0,d,c+1)
b=J.co(b2.a.cl.h(0,d),c)
a4=a.w(0,e.ga3(e))
n=e.ga3(e)
m=$.aX
n=n.bo(m==null?$.aX=new V.a1(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aX
n=a4.bo(n==null?$.aX=new V.a1(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gv(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaM()
n=a4.cs(0)
m=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=b.d
b0.toString
h=new Float32Array(H.cg(new V.em(m,a1,a2,a5,a6,a7,a8,a9,n).ad(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaM()
n=e.gaM()
if(!C.b.E(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gaM()
m=n.gcv(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb3()
n=e.gej()
m=b.x
m.toString
a1=n.ghy(n)
a2=n.ghz(n)
a5=n.ghA()
n=n.ghx()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb3()
if(!C.b.E(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gb3()
m=n.gcv(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gdE()){n=e.gdn()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gdq()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gdr()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.ck.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga3(p)
b1=new H.C(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gay()
c=b1.h(0,d)
if(c==null)c=0
b1.m(0,d,c+1)
b=J.co(b2.a.cn.h(0,d),c)
n=e.gi3(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gis(e).N()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bo(e.gi3(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gv(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaM()
n=e.gcH()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcF(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giE()
m=b.x
m.a.uniform1f(m.d,n)
n=e.giF()
m=b.y
m.a.uniform1f(m.d,n)
e.gaM()
n=e.gaM()
if(!C.b.E(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gaM()
m=n.gcv(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb3()
n=e.gej()
m=b.z
m.toString
a1=n.ghy(n)
a2=n.ghz(n)
a5=n.ghA()
n=n.ghx()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb3()
if(!C.b.E(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gb3()
m=n.gcv(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.git()){n=e.gir()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.giq()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gdE()){n=e.gdn()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gdq()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gdr()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.cm.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.b){b2.am(k,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.aq(b3.dJ,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga3(p).cs(0)}b3=b3.id
b3.toString
b3.al(p.ad(0,!0))}if(r.db){b2.am(k,b2.ch)
b3=b2.a
p=b2.ch
b3.h2(b3.dK,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dL
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(k,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.aq(b3.dM,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.dN
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dO
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(k,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.aq(b3.dP,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.dQ
p.a.uniform1f(p.d,n)}if(b3.b){b2.am(k,b2.db.d)
p=b2.a
n=b2.db.d
p.aq(p.dR,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].Z(b4)
p=b5.e
p.Z(b4)
p.aj(b4)
p.as(b4)
if(!o||b3.b||!1)b4.a.disable(3042)
for(i=0;i<k.length;++i)k[i].as(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.dB()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cZ().bh}}
O.iD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dS(a,C.c.a5(b+3,4)*4))}}
O.iE.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.iF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.e0(a,C.c.a5(b+3,4)*4))}}
O.iG.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.iH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.eH(a,C.c.a5(b+3,4)*4))}}
O.iI.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.iJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.eV(a,C.c.a5(b+3,4)*4))}}
O.iK.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.ix.prototype={
aC:function(){var s,r=this
r.cP()
s=r.f
$.I().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.E(r.b,s,1)
s.b=!0
r.a.V(s)}}}
O.cR.prototype={
V:function(a){return this.a.V(a)},
b9:function(){return this.V(null)},
aC:function(){},
bc:function(a){var s,r,q=this
if(!q.c.u(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aC()
s=q.a
s.a=null
s.V(null)}}}
O.iy.prototype={}
O.aU.prototype={
dc:function(a){var s,r,q=this
if(!q.f.u(0,a)){s=q.f
q.f=a
r=new D.E(q.b+".color",s,a)
r.b=!0
q.a.V(r)}},
aC:function(){this.cP()
this.dc(new V.z(1,1,1))},
sv:function(a,b){this.bc(new A.a0(!0,this.c.b,!1))
this.dc(b)}}
O.iA.prototype={}
O.iB.prototype={
c4:function(a){var s=this,r=s.ch
$.I().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.E(s.b+".refraction",r,a)
r.b=!0
s.a.V(r)}},
aC:function(){this.cQ()
this.c4(1)},
saF:function(a){var s=this,r=s.c.b
if(a<=0){s.bc(new A.a0(!1,r,!1))
s.c4(0)}else{s.bc(new A.a0(!0,r,!1))
s.c4(a)}}}
O.iC.prototype={
dd:function(a){var s=this,r=s.ch
$.I().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.E(s.b+".shininess",r,a)
r.b=!0
s.a.V(r)}},
aC:function(){this.cQ()
this.dd(100)}}
O.eP.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.G():s},
V:function(a){var s=this.e
if(s!=null)s.F(a)},
b9:function(){return this.V(null)},
e7:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.eQ(r,l)
s.cR(r,l)
s.dX(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.dl(s)}m.a=s}if(b.e==null){r=b.d.du(new Z.fx(a.a),$.aK())
r.aG($.aK()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.Z(a)}r=a.d
q=a.c
p=m.a
p.Z(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.cM(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.ga3(q).cs(0)
p=p.db
p.toString
p.al(q.ad(0,!0))
r=b.e
if(r instanceof Z.cp){r.Z(a)
r.aj(a)
r.as(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.dB()
r=m.c
if(r!=null)r.as(a)}}
O.f5.prototype={}
T.f8.prototype={}
T.jb.prototype={}
T.jf.prototype={
sb_:function(a,b){this.a=b},
gp:function(){var s=this.y
return s==null?this.y=D.G():s},
Z:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
as:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.jg.prototype={
sb_:function(a,b){this.a=b},
gp:function(){var s=this.e
return s==null?this.e=D.G():s},
Z:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
as:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.jh.prototype={
hO:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.l2(a)
r=new T.jf()
r.a=0
r.b=o
r.d=r.c=!1
W.T(s,"load",new T.jj(this,r,s,!1,o,!1,!1),!1)
return r},
aS:function(a,b,c,d,e,f){var s=W.l2(c);++this.d
W.T(s,"load",new T.ji(this,s,!1,b,!1,d,a),!1)},
da:function(a,b,c){var s,r,q,p
b=V.lE(b)
s=V.lE(a.width)
r=V.lE(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kX()
q.width=s
q.height=r
p=C.i.ef(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.q8(p.getImageData(0,0,q.width,q.height))}}}
T.jj.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.da(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.D.ea(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.dD()}++s.e}}
T.ji.prototype={
$1:function(a){var s=this,r=s.a,q=r.da(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.D.ea(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.dD()}++r.e}}
X.kW.prototype={}
X.ig.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.G():s},
av:function(a){var s=this.x
if(s!=null)s.F(a)},
sdw:function(a,b){var s
if(this.b){this.b=!1
s=new D.E("clearColor",!0,!1)
s.b=!0
this.av(s)}},
Z:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.d.ar(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.ar(p*r)
p=C.d.ar(q.c*s)
a.c=p
q=C.d.ar(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.ik.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.G():s},
Z:function(a){var s
a.cy.bG(V.bX())
s=V.bX()
a.db.bG(s)},
as:function(a){a.cy.aJ()
a.db.aJ()}}
X.eA.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.G():s},
av:function(a){var s=this.f
if(s!=null)s.F(a)},
eD:function(){return this.av(null)},
Z:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aV(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bG(i)
p=$.m5
if(p==null){p=V.m7()
o=V.lg()
n=$.mt
p=V.m1(p,o,n==null?$.mt=new V.F(0,0,-1):n)
$.m5=p
s=p}else s=p
p=q.b
if(p!=null){r=p.b1(0,a,q)
if(r!=null)s=r.w(0,s)}a.db.bG(s)},
as:function(a){a.cy.aJ()
a.db.aJ()}}
X.ja.prototype={}
V.b7.prototype={
br:function(a){this.b=new P.ii(C.U)
this.c=null
this.d=H.c([],t.u)},
K:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.c([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.c([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eO(o,0,o.length)
l=m==null?o:m
C.S.eh(n,H.lG(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gaz(k.d).push(n)}},
e5:function(a,b){var s,r,q,p=this
p.d=H.c([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bx()
r.toString
q=new H.p(s)
q=new P.bI(r.cG(new H.bc(q,q.gl(q))).a())
for(;q.t();)p.bF(q.gB(q))}}
V.kR.prototype={
$1:function(a){var s=C.d.eb(this.a.ghJ(),2)
if(s!=="0.00")P.lF(s+" fps")}}
V.dZ.prototype={
bF:function(a){var s=this
switch(a.a){case"Class":s.K(a.b,"#551")
break
case"Comment":s.K(a.b,"#777")
break
case"Id":s.K(a.b,"#111")
break
case"Num":s.K(a.b,"#191")
break
case"Reserved":s.K(a.b,"#119")
break
case"String":s.K(a.b,"#171")
break
case"Symbol":s.K(a.b,"#616")
break
case"Type":s.K(a.b,"#B11")
break
case"Whitespace":s.K(a.b,"#111")
break}},
bx:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jn()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.t(new H.p('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.t(new H.p('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.t(new H.p('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b5())
r=a3.k(0,p).j(0,f)
s=K.t(new H.p("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.t(new H.p("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.t(new H.p("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b5())
r=a3.k(0,p).j(0,c)
s=K.t(new H.p("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.ab()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.t(new H.p("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.ab()
r.a=H.c([],q)
s.a.push(r)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.t(new H.p(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.t(new H.p(" \n\t"))
s.a.push(r)
r=a3.k(0,n)
r.d=r.a.O("Num")
r=a3.k(0,l)
r.d=r.a.O("Num")
r=a3.k(0,k)
r.d=r.a.O("Symbol")
r=a3.k(0,h)
r.d=r.a.O("String")
r=a3.k(0,e)
r.d=r.a.O("String")
r=a3.k(0,a)
r.d=r.a.O(b)
r=a3.k(0,a2)
r.d=r.a.O(a2)
r=a3.k(0,o)
r=r.d=r.a.O(o)
s=t.i
r.aK(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aK(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aK(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e6.prototype={
bF:function(a){var s=this
switch(a.a){case"Builtin":s.K(a.b,"#411")
break
case"Comment":s.K(a.b,"#777")
break
case"Id":s.K(a.b,"#111")
break
case"Num":s.K(a.b,"#191")
break
case"Preprocess":s.K(a.b,"#737")
break
case"Reserved":s.K(a.b,"#119")
break
case"Symbol":s.K(a.b,"#611")
break
case"Type":s.K(a.b,"#171")
break
case"Whitespace":s.K(a.b,"#111")
break}},
bx:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jn()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.t(new H.p("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.t(new H.p("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b5())
r=c.k(0,h).j(0,g)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.ab()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.t(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.ab()
s.a=H.c([],q)
r.a.push(s)
r=K.t(new H.p("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.t(new H.p(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.t(new H.p(" \n\t"))
r.a.push(s)
s=c.k(0,n)
s.d=s.a.O("Num")
s=c.k(0,l)
s.d=s.a.O("Num")
s=c.k(0,k)
s.d=s.a.O("Symbol")
s=c.k(0,g)
s.d=s.a.O(h)
s=c.k(0,e)
s.d=s.a.O(f)
s=c.k(0,d)
s.d=s.a.O(d)
s=c.k(0,o)
s=s.d=s.a.O(o)
r=t.i
s.aK(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aK(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aK(0,"Builtin",H.c(["gl_FragColor","gl_Position"],r))
return c}}
V.e8.prototype={
bF:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.K(a.b,"#911")
s.K("=",r)
break
case"Id":s.K(a.b,r)
break
case"Other":s.K(a.b,r)
break
case"Reserved":s.K(a.b,"#119")
break
case"String":s.K(a.b,"#171")
break
case"Symbol":s.K(a.b,"#616")
break}},
bx:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jn()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.t(new H.p("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.t(new H.p("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.t(new H.p("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.t(new H.p('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.t(new H.p('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.t(new H.p("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.t(new H.p('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b5())
j.k(0,q).j(0,k).a.push(new K.b5())
s=j.k(0,k).j(0,k)
r=new K.ab()
r.a=H.c([],t.B)
s.a.push(r)
s=K.t(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.O("Symbol")
s=j.k(0,l)
s.d=s.a.O("String")
s=j.k(0,p)
r=s.a.O(p)
s.d=r
r.aK(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.O(o)
r=j.k(0,k)
r.d=r.a.O(k)
return j}}
V.eC.prototype={
e5:function(a,b){this.d=H.c([],t.u)
this.K(C.b.j(b,"\n"),"#111")},
bF:function(a){},
bx:function(){return null}}
V.iT.prototype={
di:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.jC().gbl().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.bd(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.bN(k.c).n(0,o)
m=W.nS("radio")
m.checked=q
m.name=s
W.T(m,"change",new V.iU(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.bN(k.c).n(0,p.createElement("br"))},
ag:function(a,b,c){return this.di(a,b,c,!1)},
bd:function(a){var s,r,q=P.jC(),p=t.X,o=P.m_(q.gbl(),p,p)
o.m(0,this.a,a)
s=q.cE(0,o)
p=window.history
r=s.gbu()
p.toString
p.replaceState(new P.hi([],[]).bp(""),"",r)}}
V.iU.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.bd(s.d)}}}
V.j5.prototype={
ev:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
m.className="scrollTop"
n.appendChild(m)
s=o.createElement("div")
s.className="scrollPage"
n.appendChild(s)
r=o.createElement("div")
r.className="pageCenter"
s.appendChild(r)
if(a.length!==0){o.title=a
q=o.createElement("div")
q.className="pageTitle"
q.textContent=a
r.appendChild(q)}p=o.createElement("div")
this.a=p
r.appendChild(p)
this.b=null
W.T(o,"scroll",new V.j7(m),!1)},
dk:function(a){var s,r,q,p,o,n,m,l
this.h4()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hM(a)
q.toString
p=new H.p(p)
p=new P.bI(q.cG(new H.bc(p,p.gl(p))).a())
for(;p.t();){q=p.gB(p)
switch(q.a){case"Bold":o=s.createElement("div")
o.className="boldPar"
o.textContent=q.b
r.appendChild(o)
break
case"Italic":o=s.createElement("div")
o.className="italicPar"
o.textContent=q.b
r.appendChild(o)
break
case"Code":o=s.createElement("div")
o.className="codePar"
o.textContent=q.b
r.appendChild(o)
break
case"Link":q=q.b
if(H.n6(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kj(C.x,q,C.e,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.f(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
ee:function(a){var s,r,q,p=new V.dZ("dart")
p.br("dart")
s=new V.e6("glsl")
s.br("glsl")
r=new V.e8("html")
r.br("html")
q=C.b.hF(H.c([p,s,r],t.b7),new V.j8(a))
if(q!=null)return q
p=new V.eC("plain")
p.br("plain")
return p},
dj:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.c([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dH(q).a7(q,"+")){b2[r]=C.a.af(q,1)
a8.push(1)
s=!0}else if(C.a.a7(q,"-")){b2[r]=C.a.af(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ee(b0)
p.e5(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kj(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lK()
h.href="#"+H.f(l)
h.textContent=a9
i.appendChild(h)
j.appendChild(i)
k.appendChild(j)
m.appendChild(k)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.o)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.o)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gM(q);a4.t();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hf:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.bY
q=s.a(r.insertCell(-1)).style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
for(p=0;p<2;++p){o=l.createElement("div")
o.id=a[p]
q=o.style
q.textAlign="left"
q=o.style
q.verticalAlign="top"
n=s.a(r.insertCell(-1))
q=n.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
n.appendChild(o)}},
h4:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jn()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.ab()
p=t.B
q.a=H.c([],p)
r.a.push(q)
r=K.t(new H.p("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.ab()
q.a=H.c([],p)
r.a.push(q)
r=K.t(new H.p("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.ab()
q.a=H.c([],p)
r.a.push(q)
r=K.t(new H.p("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.t(new H.p("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.t(new H.p("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.ab()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.ab()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b5())
q=s.k(0,g).j(0,g)
r=new K.ab()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.p("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.O(n)
q=s.k(0,l)
q.d=q.a.O(m)
q=s.k(0,"CodeEnd")
q.d=q.a.O(k)
q=s.k(0,h)
q.d=q.a.O("Link")
q=s.k(0,g)
q.d=q.a.O(g)
this.b=s}}
V.j7.prototype={
$1:function(a){P.ml(C.n,new V.j6(this.a))}}
V.j6.prototype={
$0:function(){var s=C.d.ar(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j8.prototype={
$1:function(a){return a.a===this.a}}
V.jc.prototype={
ag:function(a,b,c){var s,r,q,p,o=this,n=W.l2(null)
n.src=b
n.width=64
n.height=64
s=n.style
s.border="solid 2px white"
s=J.bN(o.c)
r=s.gl(s)
W.T(n,"click",new V.je(o,n,b,r),!1)
J.bN(o.c).n(0,n)
J.bN(o.c).n(0,document.createElement("br"))
q=P.jC().gbl().h(0,H.f(o.a))
if(q==null){o.bd(r)
p=c}else p=P.hI(q,null)==r
if(p)n.click()},
n:function(a,b){return this.ag(a,b,!1)},
bd:function(a){var s,r,q=P.jC(),p=t.X,o=P.m_(q.gbl(),p,p)
o.m(0,this.a,H.f(a))
s=q.cE(0,o)
p=window.history
r=s.gbu()
p.toString
p.replaceState(new P.hi([],[]).bp(""),"",r)}}
V.je.prototype={
$1:function(a){var s=this,r=s.a,q=J.bN(r.c)
q.C(q,new V.jd())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.bd(s.d)}}
V.jd.prototype={
$1:function(a){var s
if(t.eN.b(a)){s=a.style
s.border="solid 2px white"}}}
B.kF.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.1,0.1,0.1))
r=s.x
r.sv(0,new V.z(0.2,0.2,0.2))
s.cy.sv(0,new V.z(0,0,0))
s.cx.sv(0,new V.z(1,1,1))}}
B.kG.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.11,0.11,0.1))
r=s.x
r.sv(0,new V.z(0.21,0.21,0.2))
s.cy.sv(0,new V.z(0,0,0))
s=s.cx
s.sv(0,new V.z(1,0.9,0.5))}}
B.kH.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.1,0.1,0.1))
r=s.x
r.sv(0,new V.z(0.1,0.1,0.1))
s.cy.saF(0.4)
r=s.cy
r.sv(0,new V.z(0.6,0.6,0.6))
s=s.cx
s.sv(0,new V.z(0.4,0.4,0.4))}}
B.kI.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.1,0.1,0.1))
r=s.x
r.sv(0,new V.z(0.1,0.1,0.1))
s.cy.saF(0.4)
r=s.cy
r.sv(0,new V.z(0.2,0.3,1))
s=s.cx
s.sv(0,new V.z(0.3,0.3,0.3))}}
B.kJ.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.1,0.1,0.1))
r=s.x
r.sv(0,new V.z(0.1,0.1,0.1))
s.cy.saF(0.6)
r=s.cy
r.sv(0,new V.z(0.8,0.8,0.8))
s=s.cx
s.sv(0,new V.z(0.2,0.2,0.2))}}
B.kK.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.1,0.1,0.1))
r=s.x
r.sv(0,new V.z(0.1,0.1,0.1))
s.cy.saF(0.6)
s.cy.sv(0,new V.z(1,1,1))
s.cx.sv(0,new V.z(0,0,0))}}
B.kL.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.1,0.1,0.1))
r=s.x
r.sv(0,new V.z(0.1,0.1,0.1))
s.cy.saF(0.9)
r=s.cy
r.sv(0,new V.z(1,0.8,0.8))
s.cx.sv(0,new V.z(0,0,0))}}
B.kM.prototype={
$0:function(){var s,r=this.a
r.r.sv(0,new V.z(0,0,0))
s=r.x
s.sv(0,new V.z(0.1,0.1,0.1))
r.cy.saF(0.99)
s=r.cy
s.sv(0,new V.z(0.95,0.95,0.95))
r.cx.sv(0,new V.z(0,0,0))}}
B.kN.prototype={
$0:function(){var s=this.a,r=s.r
r.sv(0,new V.z(0.3,0.3,0.3))
r=s.x
r.sv(0,new V.z(0.5,0.5,0.5))
s.cy.sv(0,new V.z(0,0,0))
s=s.cx
s.sv(0,new V.z(0.3,0.3,0.3))}}
B.kO.prototype={
$1:function(a){var s,r=this.a.Q,q=this.b.f.hO(a),p=r.c
if(!p.b)r.bc(new A.a0(p.a,!0,!1))
p=r.d
if(p!==q){if(p!=null)p.gp().T(0,r.gaT())
s=r.d
r.d=q
q.gp().n(0,r.gaT())
q=new D.E(r.b+".texture2D",s,r.d)
q.b=!0
r.a.V(q)}}}
B.kP.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.dj("Vertex Shader","glsl",0,H.c((q==null?null:q.c).split("\n"),p))
r=r.a
s.dj("Fragment Shader","glsl",0,H.c((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.em=s.i
s=J.bb.prototype
s.eo=s.i
s=P.h.prototype
s.en=s.bJ
s=W.D.prototype
s.bM=s.an
s=W.dm.prototype
s.ep=s.ax
s=K.e7.prototype
s.el=s.aI
s.cO=s.i
s=O.cR.prototype
s.cP=s.aC
s=O.aU.prototype
s.cQ=s.aC})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pm","nX",22)
r(P,"q1","oy",7)
r(P,"q2","oz",7)
r(P,"q3","oA",7)
q(P,"mY","pX",8)
r(W,"rB","i5",23)
p(W,"qf",4,null,["$4"],["oB"],15,0)
p(W,"qg",4,null,["$4"],["oC"],15,0)
var j
o(j=E.bz.prototype,"ge3",0,0,null,["$1","$0"],["e4","hW"],0,0)
o(j,"ge1",0,0,null,["$1","$0"],["e2","hT"],0,0)
n(j,"ghR","hS",4)
n(j,"ghU","hV",4)
o(j=E.f9.prototype,"gcT",0,0,null,["$1","$0"],["cV","cU"],0,0)
m(j,"gi9","e8",8)
l(j=X.fs.prototype,"gfk","fl",5)
l(j,"gf8","f9",5)
l(j,"gfe","ff",2)
l(j,"gfo","fp",9)
l(j,"gfm","fn",9)
l(j,"gft","fu",2)
l(j,"gfz","fA",2)
l(j,"gfi","fj",2)
l(j,"gfv","fw",2)
l(j,"gfg","fh",2)
l(j,"gfB","fC",20)
l(j,"gfD","fE",5)
l(j,"gfT","fU",6)
l(j,"gfP","fQ",6)
l(j,"gfR","fS",6)
o(D.bx.prototype,"gex",0,0,null,["$1","$0"],["aA","ey"],0,0)
o(j=D.cI.prototype,"gd5",0,0,null,["$1","$0"],["d6","fq"],0,0)
l(j,"gfF","fG",21)
n(j,"gf2","f3",10)
n(j,"gfJ","fK",10)
k(V.ae.prototype,"gl","ct",11)
k(V.F.prototype,"gl","ct",11)
o(j=U.bU.prototype,"gaQ",0,0,null,["$1","$0"],["P","ac"],0,0)
n(j,"gf0","f1",12)
n(j,"gfH","fI",12)
o(j=U.d8.prototype,"gaQ",0,0,null,["$1","$0"],["P","ac"],0,0)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
l(j,"gc_","c0",1)
o(j=U.d9.prototype,"gaQ",0,0,null,["$1","$0"],["P","ac"],0,0)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
l(j,"gc_","c0",1)
l(j,"geU","eV",1)
l(j,"geW","eX",1)
l(j,"ghb","hc",1)
l(j,"gh9","ha",1)
l(j,"gh7","h8",1)
l(U.da.prototype,"geZ","f_",1)
o(j=M.cq.prototype,"gX",0,0,null,["$1","$0"],["Y","b5"],0,0)
n(j,"gfL","fM",13)
n(j,"gfN","fO",13)
o(M.cu.prototype,"gX",0,0,null,["$1","$0"],["Y","b5"],0,0)
o(j=M.cA.prototype,"gX",0,0,null,["$1","$0"],["Y","b5"],0,0)
n(j,"gfa","fb",4)
n(j,"gfc","fd",4)
o(j=O.ek.prototype,"gaT",0,0,null,["$1","$0"],["V","b9"],0,0)
o(j,"gfZ",0,0,null,["$1","$0"],["d8","h_"],0,0)
n(j,"gf4","f5",14)
n(j,"gf6","f7",14)
o(O.cR.prototype,"gaT",0,0,null,["$1","$0"],["V","b9"],0,0)
o(O.eP.prototype,"gaT",0,0,null,["$1","$0"],["V","b9"],0,0)
o(X.eA.prototype,"geC",0,0,null,["$1","$0"],["av","eD"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.l7,J.a,J.a7,P.L,P.df,P.h,H.bc,P.ea,H.cC,H.fp,H.cs,H.jq,H.iR,H.he,H.bw,P.W,H.ip,H.ei,H.ec,H.as,H.fR,P.dt,P.ce,P.bI,P.fz,P.d_,P.f_,P.d1,P.kn,P.dl,P.k4,P.de,P.i,P.hu,P.cP,P.dV,P.ij,P.kl,P.kk,P.ay,P.aj,P.R,P.by,P.ez,P.cZ,P.fO,P.ie,P.aA,P.n,P.H,P.aq,P.y,P.S,P.bJ,P.jA,P.h8,W.hX,W.l0,W.li,W.cd,W.M,W.cX,W.dm,W.hk,W.cD,W.am,W.k8,W.hv,P.kb,P.dv,P.h6,P.bi,K.b5,K.e7,K.iw,K.iV,K.j0,L.eX,L.fa,L.fb,L.jm,O.a8,O.cS,E.hS,E.bz,E.bR,E.c2,E.fL,E.iW,E.f9,Z.fw,Z.fx,Z.cp,Z.bV,Z.bj,D.hT,D.bS,D.U,X.dU,X.ee,X.io,X.iu,X.ap,X.iO,X.jo,X.fs,D.dR,D.bx,D.V,D.eF,D.eU,V.z,V.b8,V.i8,V.em,V.bd,V.ac,V.a1,V.bf,V.eK,V.ae,V.F,U.d8,U.d9,U.da,M.cu,M.cA,M.a5,A.dO,A.hN,A.a0,A.dS,A.e0,A.eH,A.eV,A.iz,A.d3,A.d4,A.d6,A.d7,A.ff,A.jx,F.e2,F.eh,F.eE,F.j1,F.j2,F.j3,F.j4,F.fu,F.jQ,F.jR,F.jU,F.jV,O.f5,O.cR,O.iA,T.jh,X.kW,X.ja,X.ik,X.eA,V.b7,V.iT,V.j5,V.jc])
q(J.a,[J.eb,J.cH,J.bb,J.x,J.bD,J.aR,H.cT,H.Y,W.e,W.hL,W.bt,W.aO,W.J,W.fE,W.ao,W.i_,W.i0,W.fG,W.cx,W.fI,W.i1,W.j,W.fP,W.aB,W.ih,W.fT,W.bB,W.it,W.iL,W.fX,W.fY,W.aD,W.fZ,W.h0,W.aE,W.h4,W.h7,W.aF,W.h9,W.aG,W.hf,W.au,W.hm,W.jl,W.aH,W.ho,W.jp,W.jG,W.hw,W.hy,W.hA,W.hC,W.hE,P.aS,P.fV,P.aW,P.h2,P.iS,P.hg,P.aY,P.hq,P.hO,P.fB,P.eL,P.hc])
q(J.bb,[J.eB,J.bH,J.aC])
r(J.il,J.x)
q(J.bD,[J.cG,J.cF])
q(P.L,[H.ef,H.ev,H.ed,H.fo,H.eN,H.fM,P.dN,P.ew,P.ai,P.fq,P.fn,P.c7,P.dW,P.dY])
r(P.cL,P.df)
q(P.cL,[H.c9,W.fC,W.a2,P.e4])
r(H.p,H.c9)
q(P.h,[H.l,H.aT,H.b0,P.cE])
q(H.l,[H.cM,H.cJ])
r(H.cy,H.aT)
q(P.ea,[H.ej,H.fy])
r(H.cQ,H.cM)
r(H.ct,H.cs)
q(H.bw,[H.f4,H.im,H.kA,H.kB,H.kC,P.jZ,P.jY,P.k_,P.k0,P.kg,P.kf,P.kw,P.k6,P.k7,P.iq,P.iv,P.jJ,P.jK,P.i2,P.i3,P.jF,P.jB,P.jD,P.jE,P.ki,P.kh,P.kr,P.kq,P.ks,P.kt,W.i4,W.iM,W.iN,W.j_,W.j9,W.k1,W.iQ,W.iP,W.k9,W.ka,W.ke,W.km,P.kc,P.kd,P.kx,P.ic,P.id,P.hP,E.iX,E.iY,E.iZ,E.jk,D.ia,D.ib,F.ko,F.jX,F.jW,F.jS,F.jT,O.iD,O.iE,O.iF,O.iG,O.iH,O.iI,O.iJ,O.iK,T.jj,T.ji,V.kR,V.iU,V.j7,V.j6,V.j8,V.je,V.jd,B.kF,B.kG,B.kH,B.kI,B.kJ,B.kK,B.kL,B.kM,B.kN,B.kO,B.kP])
q(H.f4,[H.eY,H.bQ])
r(P.cO,P.W)
q(P.cO,[H.C,W.fA])
r(H.c0,H.Y)
q(H.c0,[H.dh,H.dj])
r(H.di,H.dh)
r(H.bF,H.di)
r(H.dk,H.dj)
r(H.cU,H.dk)
q(H.cU,[H.eq,H.er,H.es,H.et,H.eu,H.cV,H.c1])
r(H.du,H.fM)
r(P.dq,P.cE)
r(P.k5,P.kn)
r(P.dd,P.dl)
r(P.dy,P.cP)
r(P.ca,P.dy)
q(P.dV,[P.hQ,P.i6])
r(P.dX,P.f_)
q(P.dX,[P.hR,P.ii,P.jL,P.jI])
r(P.jH,P.i6)
q(P.R,[P.a_,P.k])
q(P.ai,[P.c4,P.e9])
r(P.fF,P.bJ)
q(W.e,[W.w,W.e3,W.bY,W.at,W.dn,W.av,W.ad,W.dr,W.fv,W.cb,P.dQ,P.b6])
q(W.w,[W.D,W.az,W.cc])
q(W.D,[W.r,P.m])
q(W.r,[W.dL,W.dM,W.bP,W.bu,W.bv,W.b9,W.e5,W.bC,W.bW,W.eO,W.bh,W.d0,W.f2,W.f3,W.c8])
r(W.hW,W.aO)
r(W.cv,W.fE)
q(W.ao,[W.hY,W.hZ])
r(W.fH,W.fG)
r(W.cw,W.fH)
r(W.fJ,W.fI)
r(W.e1,W.fJ)
r(W.ak,W.bt)
r(W.fQ,W.fP)
r(W.bT,W.fQ)
r(W.fU,W.fT)
r(W.bA,W.fU)
r(W.b_,W.j)
q(W.b_,[W.bE,W.al,W.bG])
r(W.en,W.fX)
r(W.eo,W.fY)
r(W.h_,W.fZ)
r(W.ep,W.h_)
r(W.h1,W.h0)
r(W.cW,W.h1)
r(W.h5,W.h4)
r(W.eD,W.h5)
r(W.eM,W.h7)
r(W.dp,W.dn)
r(W.eS,W.dp)
r(W.ha,W.h9)
r(W.eT,W.ha)
r(W.eZ,W.hf)
r(W.hn,W.hm)
r(W.f6,W.hn)
r(W.ds,W.dr)
r(W.f7,W.ds)
r(W.hp,W.ho)
r(W.fc,W.hp)
r(W.bk,W.al)
r(W.hx,W.hw)
r(W.fD,W.hx)
r(W.db,W.cx)
r(W.hz,W.hy)
r(W.fS,W.hz)
r(W.hB,W.hA)
r(W.dg,W.hB)
r(W.hD,W.hC)
r(W.hb,W.hD)
r(W.hF,W.hE)
r(W.hj,W.hF)
r(W.fK,W.fA)
r(W.fN,P.d_)
r(W.hl,W.dm)
r(P.hi,P.kb)
r(P.a9,P.h6)
r(P.fW,P.fV)
r(P.eg,P.fW)
r(P.h3,P.h2)
r(P.ex,P.h3)
r(P.c5,P.m)
r(P.hh,P.hg)
r(P.f0,P.hh)
r(P.hr,P.hq)
r(P.fd,P.hr)
r(P.dP,P.fB)
r(P.ey,P.b6)
r(P.hd,P.hc)
r(P.eW,P.hd)
q(K.e7,[K.ab,L.fe])
q(E.hS,[Z.dT,A.c6,T.f8])
q(D.U,[D.aP,D.aQ,D.E,X.eG])
q(X.eG,[X.cN,X.bZ,X.c_,X.d2])
q(O.a8,[D.cI,U.bU,M.cq])
q(D.hT,[U.hV,U.X])
r(U.cr,U.X)
q(A.c6,[A.el,A.eQ])
q(A.ff,[A.fh,A.ju,A.jv,A.jw,A.js,A.fg,A.jt,A.fi,A.fj,A.jy,A.fk,A.d5,A.fl,A.fm])
q(O.f5,[O.ek,O.eP])
q(O.cR,[O.ix,O.iy,O.aU])
q(O.aU,[O.iB,O.iC])
q(T.f8,[T.jb,T.jg])
r(T.jf,T.jb)
r(X.ig,X.ja)
q(V.b7,[V.dZ,V.e6,V.e8,V.eC])
s(H.c9,H.fp)
s(H.dh,P.i)
s(H.di,H.cC)
s(H.dj,P.i)
s(H.dk,H.cC)
s(P.df,P.i)
s(P.dy,P.hu)
s(W.fE,W.hX)
s(W.fG,P.i)
s(W.fH,W.M)
s(W.fI,P.i)
s(W.fJ,W.M)
s(W.fP,P.i)
s(W.fQ,W.M)
s(W.fT,P.i)
s(W.fU,W.M)
s(W.fX,P.W)
s(W.fY,P.W)
s(W.fZ,P.i)
s(W.h_,W.M)
s(W.h0,P.i)
s(W.h1,W.M)
s(W.h4,P.i)
s(W.h5,W.M)
s(W.h7,P.W)
s(W.dn,P.i)
s(W.dp,W.M)
s(W.h9,P.i)
s(W.ha,W.M)
s(W.hf,P.W)
s(W.hm,P.i)
s(W.hn,W.M)
s(W.dr,P.i)
s(W.ds,W.M)
s(W.ho,P.i)
s(W.hp,W.M)
s(W.hw,P.i)
s(W.hx,W.M)
s(W.hy,P.i)
s(W.hz,W.M)
s(W.hA,P.i)
s(W.hB,W.M)
s(W.hC,P.i)
s(W.hD,W.M)
s(W.hE,P.i)
s(W.hF,W.M)
s(P.fV,P.i)
s(P.fW,W.M)
s(P.h2,P.i)
s(P.h3,W.M)
s(P.hg,P.i)
s(P.hh,W.M)
s(P.hq,P.i)
s(P.hr,W.M)
s(P.fB,P.W)
s(P.hc,P.i)
s(P.hd,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",a_:"double",R:"num",y:"String",ay:"bool",aq:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U*])","~(U*)","~(al*)","aq(@,@)","~(k*,h<bz*>*)","~(j*)","~(bG*)","~(~())","~()","~(bE*)","~(k*,h<V*>*)","a_*()","~(k*,h<X*>*)","~(k*,h<a5*>*)","~(k*,h<bd*>*)","ay(D,y,y,cd)","@(@)","aq(@)","aq(N?,N?)","bi(@,@)","~(bk*)","ay*(h<V*>*)","k(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oV(v.typeUniverse,JSON.parse('{"aC":"bb","eB":"bb","bH":"bb","qw":"j","qG":"j","qy":"b6","qx":"e","qN":"e","qP":"e","qv":"m","qH":"m","qz":"r","qK":"r","qI":"w","qF":"w","re":"ad","qD":"b_","qA":"az","qQ":"az","qO":"al","qJ":"bA","qM":"bF","qL":"Y","eb":{"ay":[]},"bb":{"lY":[],"aA":[]},"x":{"n":["1"],"l":["1"],"h":["1"]},"il":{"x":["1"],"n":["1"],"l":["1"],"h":["1"]},"bD":{"a_":[],"R":[]},"cG":{"a_":[],"k":[],"R":[]},"cF":{"a_":[],"R":[]},"aR":{"y":[]},"ef":{"L":[]},"p":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"cM":{"l":["1"],"h":["1"]},"aT":{"h":["2"],"h.E":"2"},"cy":{"aT":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cQ":{"cM":["2"],"l":["2"],"h":["2"],"h.E":"2"},"b0":{"h":["1"],"h.E":"1"},"c9":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cs":{"H":["1","2"]},"ct":{"H":["1","2"]},"ev":{"L":[]},"ed":{"L":[]},"fo":{"L":[]},"bw":{"aA":[]},"f4":{"aA":[]},"eY":{"aA":[]},"bQ":{"aA":[]},"eN":{"L":[]},"C":{"W":["1","2"],"H":["1","2"]},"cJ":{"l":["1"],"h":["1"],"h.E":"1"},"ec":{"me":[]},"c0":{"A":["1"],"Y":[]},"bF":{"i":["a_"],"A":["a_"],"n":["a_"],"Y":[],"l":["a_"],"h":["a_"],"i.E":"a_"},"cU":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"]},"eq":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"er":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"es":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"et":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"eu":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"cV":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"c1":{"i":["k"],"bi":[],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"fM":{"L":[]},"du":{"L":[]},"dt":{"d1":[]},"dq":{"h":["1"],"h.E":"1"},"dd":{"dl":["1"],"l":["1"],"h":["1"]},"cE":{"h":["1"]},"cL":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cO":{"W":["1","2"],"H":["1","2"]},"W":{"H":["1","2"]},"cP":{"H":["1","2"]},"ca":{"H":["1","2"]},"dl":{"l":["1"],"h":["1"]},"a_":{"R":[]},"dN":{"L":[]},"ew":{"L":[]},"ai":{"L":[]},"c4":{"L":[]},"e9":{"L":[]},"fq":{"L":[]},"fn":{"L":[]},"c7":{"L":[]},"dW":{"L":[]},"ez":{"L":[]},"cZ":{"L":[]},"dY":{"L":[]},"k":{"R":[]},"n":{"l":["1"],"h":["1"]},"bJ":{"fr":[]},"h8":{"fr":[]},"fF":{"fr":[]},"r":{"D":[],"w":[],"e":[]},"dL":{"D":[],"w":[],"e":[]},"dM":{"D":[],"w":[],"e":[]},"bP":{"D":[],"w":[],"e":[]},"bu":{"D":[],"w":[],"e":[]},"bv":{"D":[],"w":[],"e":[]},"az":{"w":[],"e":[]},"b9":{"D":[],"w":[],"e":[]},"cw":{"i":["a9<R>"],"n":["a9<R>"],"A":["a9<R>"],"l":["a9<R>"],"h":["a9<R>"],"i.E":"a9<R>"},"cx":{"a9":["R"]},"e1":{"i":["y"],"n":["y"],"A":["y"],"l":["y"],"h":["y"],"i.E":"y"},"fC":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"D":{"w":[],"e":[]},"ak":{"bt":[]},"bT":{"i":["ak"],"n":["ak"],"A":["ak"],"l":["ak"],"h":["ak"],"i.E":"ak"},"e3":{"e":[]},"e5":{"D":[],"w":[],"e":[]},"bA":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"bC":{"D":[],"w":[],"e":[]},"bW":{"D":[],"w":[],"e":[]},"bE":{"j":[]},"bY":{"e":[]},"en":{"W":["y","@"],"H":["y","@"]},"eo":{"W":["y","@"],"H":["y","@"]},"ep":{"i":["aD"],"n":["aD"],"A":["aD"],"l":["aD"],"h":["aD"],"i.E":"aD"},"al":{"j":[]},"a2":{"i":["w"],"n":["w"],"l":["w"],"h":["w"],"i.E":"w"},"w":{"e":[]},"cW":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"eD":{"i":["aE"],"n":["aE"],"A":["aE"],"l":["aE"],"h":["aE"],"i.E":"aE"},"eM":{"W":["y","@"],"H":["y","@"]},"eO":{"D":[],"w":[],"e":[]},"at":{"e":[]},"eS":{"i":["at"],"n":["at"],"A":["at"],"e":[],"l":["at"],"h":["at"],"i.E":"at"},"eT":{"i":["aF"],"n":["aF"],"A":["aF"],"l":["aF"],"h":["aF"],"i.E":"aF"},"eZ":{"W":["y","y"],"H":["y","y"]},"bh":{"D":[],"w":[],"e":[]},"d0":{"D":[],"w":[],"e":[]},"f2":{"D":[],"w":[],"e":[]},"f3":{"D":[],"w":[],"e":[]},"c8":{"D":[],"w":[],"e":[]},"av":{"e":[]},"ad":{"e":[]},"f6":{"i":["ad"],"n":["ad"],"A":["ad"],"l":["ad"],"h":["ad"],"i.E":"ad"},"f7":{"i":["av"],"n":["av"],"A":["av"],"e":[],"l":["av"],"h":["av"],"i.E":"av"},"bG":{"j":[]},"fc":{"i":["aH"],"n":["aH"],"A":["aH"],"l":["aH"],"h":["aH"],"i.E":"aH"},"b_":{"j":[]},"fv":{"e":[]},"bk":{"al":[],"j":[]},"cb":{"e":[]},"cc":{"w":[],"e":[]},"fD":{"i":["J"],"n":["J"],"A":["J"],"l":["J"],"h":["J"],"i.E":"J"},"db":{"a9":["R"]},"fS":{"i":["aB?"],"n":["aB?"],"A":["aB?"],"l":["aB?"],"h":["aB?"],"i.E":"aB?"},"dg":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"hb":{"i":["aG"],"n":["aG"],"A":["aG"],"l":["aG"],"h":["aG"],"i.E":"aG"},"hj":{"i":["au"],"n":["au"],"A":["au"],"l":["au"],"h":["au"],"i.E":"au"},"fA":{"W":["y","y"],"H":["y","y"]},"fK":{"W":["y","y"],"H":["y","y"]},"cd":{"am":[]},"cX":{"am":[]},"dm":{"am":[]},"hl":{"am":[]},"hk":{"am":[]},"dv":{"bB":[]},"e4":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"a9":{"h6":["1"]},"eg":{"i":["aS"],"n":["aS"],"l":["aS"],"h":["aS"],"i.E":"aS"},"ex":{"i":["aW"],"n":["aW"],"l":["aW"],"h":["aW"],"i.E":"aW"},"c5":{"m":[],"D":[],"w":[],"e":[]},"f0":{"i":["y"],"n":["y"],"l":["y"],"h":["y"],"i.E":"y"},"m":{"D":[],"w":[],"e":[]},"fd":{"i":["aY"],"n":["aY"],"l":["aY"],"h":["aY"],"i.E":"aY"},"bi":{"n":["k"],"l":["k"],"h":["k"]},"dP":{"W":["y","@"],"H":["y","@"]},"dQ":{"e":[]},"b6":{"e":[]},"ey":{"e":[]},"eW":{"i":["H<@,@>"],"n":["H<@,@>"],"l":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"a8":{"h":["1*"],"a8.T":"1"},"aP":{"U":[]},"aQ":{"U":[]},"E":{"U":[]},"cN":{"U":[]},"bZ":{"U":[]},"c_":{"U":[]},"eG":{"U":[]},"d2":{"U":[]},"dR":{"V":[]},"bx":{"V":[]},"cI":{"a8":["V*"],"h":["V*"],"a8.T":"V*"},"eF":{"V":[]},"eU":{"V":[]},"cr":{"X":[]},"bU":{"a8":["X*"],"X":[],"h":["X*"],"a8.T":"X*"},"d8":{"X":[]},"d9":{"X":[]},"da":{"X":[]},"cq":{"a8":["a5*"],"a5":[],"h":["a5*"],"a8.T":"a5*"},"cu":{"a5":[]},"cA":{"a5":[]},"el":{"c6":[]},"eQ":{"c6":[]},"dZ":{"b7":[]},"e6":{"b7":[]},"e8":{"b7":[]},"eC":{"b7":[]}}'))
H.oU(v.typeUniverse,JSON.parse('{"a7":1,"l":1,"bc":1,"ej":2,"fy":1,"cC":1,"fp":1,"c9":1,"cs":2,"ei":1,"c0":1,"bI":1,"d_":1,"f_":2,"de":1,"cE":1,"cL":1,"cO":2,"hu":2,"cP":2,"df":1,"dy":2,"dV":2,"dX":2,"ea":1,"fN":1,"M":1,"cD":1,"aP":1,"aQ":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lz
return{D:s("bP"),G:s("bt"),Y:s("bu"),gw:s("l<@>"),h:s("D"),C:s("L"),aD:s("j"),c8:s("ak"),bX:s("bT"),Z:s("aA"),v:s("bB"),fS:s("bC"),gk:s("bW"),o:s("x<am>"),s:s("x<y>"),gn:s("x<@>"),t:s("x<k>"),x:s("x<dO*>"),bb:s("x<dR*>"),am:s("x<dS*>"),g0:s("x<dT*>"),b7:s("x<b7*>"),cP:s("x<bx*>"),M:s("x<e0*>"),k:s("x<b9*>"),b:s("x<e2*>"),aZ:s("x<bV*>"),L:s("x<eh*>"),u:s("x<n<b9*>*>"),B:s("x<iw*>"),h8:s("x<bd*>"),H:s("x<eE*>"),cS:s("x<ac*>"),d1:s("x<eH*>"),af:s("x<eF*>"),f2:s("x<a5*>"),du:s("x<eU*>"),cz:s("x<eV*>"),eG:s("x<d_<N*>*>"),i:s("x<y*>"),fG:s("x<f5*>"),bw:s("x<f8*>"),br:s("x<fe*>"),fj:s("x<ff*>"),d6:s("x<d3*>"),dv:s("x<d4*>"),hg:s("x<d5*>"),by:s("x<d6*>"),fF:s("x<d7*>"),j:s("x<fu*>"),m:s("x<a_*>"),V:s("x<k*>"),f:s("x<~(U*)*>"),T:s("cH"),eH:s("lY"),g:s("aC"),aU:s("A<@>"),h9:s("C<y*,c6*>"),cn:s("C<y*,eX*>"),dO:s("C<y*,y*>"),w:s("C<y*,fb*>"),en:s("C<k*,n<d3*>*>"),bj:s("C<k*,n<d4*>*>"),gr:s("C<k*,n<d6*>*>"),gb:s("C<k*,n<d7*>*>"),J:s("C<k*,fh*>"),E:s("C<k*,ay*>"),a:s("C<k*,k*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cQ<y*,y>"),bK:s("bY"),bZ:s("cT"),dD:s("Y"),bm:s("c1"),P:s("aq"),K:s("N"),I:s("a9<R>"),fv:s("me"),ew:s("c5"),N:s("y"),g7:s("m"),bY:s("bh"),aW:s("c8"),aF:s("d1"),gc:s("bi"),ak:s("bH"),U:s("ca<y,y>"),R:s("fr"),gH:s("cc"),ac:s("a2"),cJ:s("ay"),gR:s("a_"),z:s("@"),S:s("k"),fr:s("bv*"),l:s("bz*"),eN:s("bC*"),gj:s("V*"),dn:s("cN*"),hc:s("bd*"),d:s("bZ*"),F:s("c_*"),ah:s("X*"),A:s("0&*"),_:s("N*"),bn:s("a5*"),X:s("y*"),eB:s("fa*"),eP:s("d2*"),n:s("fg*"),r:s("fi*"),y:s("fj*"),O:s("fk*"),q:s("d5*"),c:s("fl*"),Q:s("fm*"),e:s("k*"),dm:s("~(U*)*"),bG:s("lX<aq>?"),W:s("N?"),p:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bu.prototype
C.i=W.bv.prototype
C.S=W.b9.prototype
C.V=J.a.prototype
C.b=J.x.prototype
C.W=J.cF.prototype
C.c=J.cG.prototype
C.j=J.cH.prototype
C.d=J.bD.prototype
C.a=J.aR.prototype
C.X=J.aC.prototype
C.C=J.eB.prototype
C.D=P.eL.prototype
C.E=W.d0.prototype
C.p=J.bH.prototype
C.F=W.bk.prototype
C.G=W.cb.prototype
C.H=new E.bR("Browser.chrome")
C.r=new E.bR("Browser.firefox")
C.t=new E.bR("Browser.edge")
C.I=new E.bR("Browser.other")
C.a6=new P.hR()
C.J=new P.hQ()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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

C.Q=new P.ez()
C.e=new P.jH()
C.R=new P.jL()
C.f=new P.k5()
C.n=new P.by(0)
C.T=new P.by(5e6)
C.U=new P.ij("element",!1,!1,!1)
C.k=H.c(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.Y=H.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.c(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.c(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Z=H.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.c(s([]),t.i)
C.a_=H.c(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.c(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.c(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.c(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.c(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.c(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a0=new H.ct(0,{},C.w,H.lz("ct<y*,y*>"))
C.a1=new E.c2("OperatingSystem.windows")
C.B=new E.c2("OperatingSystem.mac")
C.a2=new E.c2("OperatingSystem.linux")
C.a3=new E.c2("OperatingSystem.other")
C.a4=new P.jI(!1)
C.a5=new P.ce(null,2)})();(function staticFields(){$.mz=null
$.aM=0
$.lP=null
$.lO=null
$.mZ=null
$.mX=null
$.n4=null
$.ky=null
$.kD=null
$.lB=null
$.ci=null
$.dD=null
$.dE=null
$.lw=!1
$.aI=C.f
$.af=H.c([],H.lz("x<N>"))
$.ba=null
$.l_=null
$.lV=null
$.lU=null
$.dc=P.la(t.N,t.Z)
$.i7=null
$.m2=null
$.m6=null
$.aX=null
$.mg=null
$.ms=null
$.mu=null
$.jM=null
$.jN=null
$.jO=null
$.mt=null
$.m5=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qE","na",function(){return H.qe("_$dart_dartClosure")})
s($,"qR","nb",function(){return H.aZ(H.jr({
toString:function(){return"$receiver$"}}))})
s($,"qS","nc",function(){return H.aZ(H.jr({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qT","nd",function(){return H.aZ(H.jr(null))})
s($,"qU","ne",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qX","nh",function(){return H.aZ(H.jr(void 0))})
s($,"qY","ni",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qW","ng",function(){return H.aZ(H.mn(null))})
s($,"qV","nf",function(){return H.aZ(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"r_","nk",function(){return H.aZ(H.mn(void 0))})
s($,"qZ","nj",function(){return H.aZ(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rf","lH",function(){return P.ox()})
s($,"r0","nl",function(){return new P.jJ().$0()})
s($,"r1","nm",function(){return new P.jK().$0()})
s($,"rg","nq",function(){return new Int8Array(H.cg(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rj","ns",function(){return P.og("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rz","nt",function(){return P.pf()})
s($,"rh","nr",function(){return P.m0(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"r8","np",function(){return Z.aw(0)})
s($,"r2","nn",function(){return Z.aw(511)})
s($,"ra","aK",function(){return Z.aw(1)})
s($,"r9","br",function(){return Z.aw(2)})
s($,"r4","bq",function(){return Z.aw(4)})
s($,"rb","bs",function(){return Z.aw(8)})
s($,"rc","bM",function(){return Z.aw(16)})
s($,"r5","dI",function(){return Z.aw(32)})
s($,"r6","dJ",function(){return Z.aw(64)})
s($,"r7","no",function(){return Z.aw(96)})
s($,"rd","cn",function(){return Z.aw(128)})
s($,"r3","bp",function(){return Z.aw(256)})
s($,"qC","n9",function(){return new V.i8()})
s($,"qB","I",function(){return $.n9()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cT,DataView:H.Y,ArrayBufferView:H.Y,Float32Array:H.bF,Float64Array:H.bF,Int16Array:H.eq,Int32Array:H.er,Int8Array:H.es,Uint16Array:H.et,Uint32Array:H.eu,Uint8ClampedArray:H.cV,CanvasPixelArray:H.cV,Uint8Array:H.c1,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hL,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,HTMLBaseElement:W.bP,Blob:W.bt,HTMLBodyElement:W.bu,HTMLCanvasElement:W.bv,CDATASection:W.az,CharacterData:W.az,Comment:W.az,ProcessingInstruction:W.az,Text:W.az,CSSPerspective:W.hW,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cv,MSStyleCSSProperties:W.cv,CSS2Properties:W.cv,CSSImageValue:W.ao,CSSKeywordValue:W.ao,CSSNumericValue:W.ao,CSSPositionValue:W.ao,CSSResourceValue:W.ao,CSSUnitValue:W.ao,CSSURLImageValue:W.ao,CSSStyleValue:W.ao,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.hY,CSSUnparsedValue:W.hZ,DataTransferItemList:W.i_,HTMLDivElement:W.b9,DOMException:W.i0,ClientRectList:W.cw,DOMRectList:W.cw,DOMRectReadOnly:W.cx,DOMStringList:W.e1,DOMTokenList:W.i1,Element:W.D,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ak,FileList:W.bT,FileWriter:W.e3,HTMLFormElement:W.e5,Gamepad:W.aB,History:W.ih,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,ImageData:W.bB,HTMLImageElement:W.bC,HTMLInputElement:W.bW,KeyboardEvent:W.bE,Location:W.it,MediaList:W.iL,MessagePort:W.bY,MIDIInputMap:W.en,MIDIOutputMap:W.eo,MimeType:W.aD,MimeTypeArray:W.ep,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cW,RadioNodeList:W.cW,Plugin:W.aE,PluginArray:W.eD,RTCStatsReport:W.eM,HTMLSelectElement:W.eO,SourceBuffer:W.at,SourceBufferList:W.eS,SpeechGrammar:W.aF,SpeechGrammarList:W.eT,SpeechRecognitionResult:W.aG,Storage:W.eZ,CSSStyleSheet:W.au,StyleSheet:W.au,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.d0,HTMLTableRowElement:W.f2,HTMLTableSectionElement:W.f3,HTMLTemplateElement:W.c8,TextTrack:W.av,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.f6,TextTrackList:W.f7,TimeRanges:W.jl,Touch:W.aH,TouchEvent:W.bG,TouchList:W.fc,TrackDefaultList:W.jp,CompositionEvent:W.b_,FocusEvent:W.b_,TextEvent:W.b_,UIEvent:W.b_,URL:W.jG,VideoTrackList:W.fv,WheelEvent:W.bk,Window:W.cb,DOMWindow:W.cb,Attr:W.cc,CSSRuleList:W.fD,ClientRect:W.db,DOMRect:W.db,GamepadList:W.fS,NamedNodeMap:W.dg,MozNamedAttrMap:W.dg,SpeechRecognitionResultList:W.hb,StyleSheetList:W.hj,SVGLength:P.aS,SVGLengthList:P.eg,SVGNumber:P.aW,SVGNumberList:P.ex,SVGPointList:P.iS,SVGScriptElement:P.c5,SVGStringList:P.f0,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aY,SVGTransformList:P.fd,AudioBuffer:P.hO,AudioParamMap:P.dP,AudioTrackList:P.dQ,AudioContext:P.b6,webkitAudioContext:P.b6,BaseAudioContext:P.b6,OfflineAudioContext:P.ey,WebGL2RenderingContext:P.eL,SQLResultSetRowList:P.eW})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"
W.ds.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.n2,[])
else B.n2([])})})()
//# sourceMappingURL=test.dart.js.map
