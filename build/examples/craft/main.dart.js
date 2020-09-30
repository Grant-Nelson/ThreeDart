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
a[c]=function(){a[c]=function(){H.r1(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.m_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.m_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.m_(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lw:function lw(){},
ly:function(a){return new H.e8(a)},
l3:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oB:function(a,b){if(t.Y.b(a))return new H.cH(a,b)
return new H.bH(a,b)},
ox:function(){return new P.d3("No element")},
oY:function(a,b){var s=J.b5(a)
if(typeof s!=="number")return s.n()
H.eJ(a,0,s-1,b)},
eJ:function(a,b,c,d){if(c-b<=32)H.oX(a,b,c,d)
else H.oW(a,b,c,d)},
oX:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.al(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a3()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
oW:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a2(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a2(a6+a7,2),d=e-h,c=e+h,b=J.al(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.J(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.S()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a3()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
q=m
r=l
break}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.S()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a3()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a3()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.S()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.k(a5,a6,b.h(a5,a4))
b.k(a5,a4,a0)
a4=q+1
b.k(a5,a7,b.h(a5,a4))
b.k(a5,a4,a2)
H.eJ(a5,a6,r-2,a8)
H.eJ(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.J(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.J(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.S()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.eJ(a5,r,q,a8)}else H.eJ(a5,r,q,a8)},
e8:function e8(a){this.a=a},
P:function P(a){this.a=a},
j:function j(){},
c9:function c9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bH:function bH(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=null
this.b=a
this.c=b},
d9:function d9(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
cI:function cI(){},
ff:function ff(){},
cj:function cj(){},
or:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
nK:function(a){var s,r=H.nJ(a)
if(r!=null)return r
s="minified:"+a
return s},
nC:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aw(a)
if(typeof s!="string")throw H.d(H.ae(a))
return s},
d_:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lB:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.d(P.a6(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
eA:function(a){return H.oG(a)},
oG:function(a){var s,r,q
if(a instanceof P.E)return H.ak(H.dD(a),null)
if(J.bu(a)===C.W||t.cC.b(a)){s=C.u(a)
if(H.mE(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mE(q))return q}}return H.ak(H.dD(a),null)},
mE:function(a){var s=a!=="Object"&&a!==""
return s},
oH:function(){if(!!self.location)return self.location.href
return null},
mD:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oP:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.bp(q))throw H.d(H.ae(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.be(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.d(H.ae(q))}return H.mD(p)},
mF:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bp(q))throw H.d(H.ae(q))
if(q<0)throw H.d(H.ae(q))
if(q>65535)return H.oP(a)}return H.mD(a)},
oQ:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.ke()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aS:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.be(s,10))>>>0,56320|s&1023)}}throw H.d(P.a6(a,0,1114111,null,null))},
cg:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oO:function(a){var s=H.cg(a).getFullYear()+0
return s},
oM:function(a){var s=H.cg(a).getMonth()+1
return s},
oI:function(a){var s=H.cg(a).getDate()+0
return s},
oJ:function(a){var s=H.cg(a).getHours()+0
return s},
oL:function(a){var s=H.cg(a).getMinutes()+0
return s},
oN:function(a){var s=H.cg(a).getSeconds()+0
return s},
oK:function(a){var s=H.cg(a).getMilliseconds()+0
return s},
b:function(a){throw H.d(H.ae(a))},
c:function(a,b){if(a==null)J.b5(a)
throw H.d(H.bt(a,b))},
bt:function(a,b){var s,r,q="index"
if(!H.bp(b))return new P.am(!0,b,q,null)
s=J.b5(a)
if(!(b<0)){if(typeof s!=="number")return H.b(s)
r=b>=s}else r=!0
if(r)return P.K(b,a,q,null,s)
return P.eB(b,q)},
qI:function(a,b,c){if(a>c)return P.a6(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a6(b,a,c,"end",null)
return new P.am(!0,b,"end",null)},
ae:function(a){return new P.am(!0,a,null,null)},
cv:function(a){if(typeof a!="number")throw H.d(H.ae(a))
return a},
d:function(a){var s,r
if(a==null)a=new P.ep()
s=new Error()
s.dartException=a
r=H.r2
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
r2:function(){return J.aw(this.dartException)},
p:function(a){throw H.d(a)},
o:function(a){throw H.d(P.bZ(a))},
aX:function(a){var s,r,q,p,o,n
a=H.nG(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mQ:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mz:function(a,b){return new H.eo(a,b==null?null:b.method)},
lx:function(a,b){var s=b==null,r=s?null:b.method
return new H.e7(a,r,s?null:b.receiver)},
as:function(a){if(a==null)return new H.iU(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bT(a,a.dartException)
return H.qA(a)},
bT:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.be(r,16)&8191)===10)switch(q){case 438:return H.bT(a,H.lx(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bT(a,H.mz(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nR()
o=$.nS()
n=$.nT()
m=$.nU()
l=$.nX()
k=$.nY()
j=$.nW()
$.nV()
i=$.o_()
h=$.nZ()
g=p.at(s)
if(g!=null)return H.bT(a,H.lx(s,g))
else{g=o.at(s)
if(g!=null){g.method="call"
return H.bT(a,H.lx(s,g))}else{g=n.at(s)
if(g==null){g=m.at(s)
if(g==null){g=l.at(s)
if(g==null){g=k.at(s)
if(g==null){g=j.at(s)
if(g==null){g=m.at(s)
if(g==null){g=i.at(s)
if(g==null){g=h.at(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bT(a,H.mz(s,g))}}return H.bT(a,new H.fe(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.d2()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bT(a,new P.am(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.d2()
return a},
bS:function(a){var s
if(a==null)return new H.dn(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.dn(a)},
qK:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
qR:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.r("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qR)
a.$identity=s
return s},
oq:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.jo().constructor.prototype):Object.create(new H.cz(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aG
if(typeof r!=="number")return r.l()
$.aG=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ml(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.om(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ml(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
om:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nA,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
s=c?H.oj:H.oi
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.d("Error in functionType of tearoff")},
on:function(a,b,c,d){var s=H.mk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ml:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.op(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.on(r,!p,s,b)
if(r===0){p=$.aG
if(typeof p!=="number")return p.l()
$.aG=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.lo())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aG
if(typeof p!=="number")return p.l()
$.aG=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.lo())+"."+H.f(s)+"("+m+");}")()},
oo:function(a,b,c,d){var s=H.mk,r=H.ok
switch(b?-1:a){case 0:throw H.d(new H.eG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
op:function(a,b){var s,r,q,p,o,n,m=H.lo(),l=$.mi
if(l==null)l=$.mi=H.mh("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.oo(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aG
if(typeof o!=="number")return o.l()
$.aG=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aG
if(typeof o!=="number")return o.l()
$.aG=o+1
return new Function(p+o+"}")()},
m_:function(a,b,c,d,e,f,g){return H.oq(a,b,c,d,!!e,!!f,g)},
oi:function(a,b){return H.hg(v.typeUniverse,H.dD(a.a),b)},
oj:function(a,b){return H.hg(v.typeUniverse,H.dD(a.c),b)},
mk:function(a){return a.a},
ok:function(a){return a.c},
lo:function(){var s=$.mj
return s==null?$.mj=H.mh("self"):s},
mh:function(a){var s,r,q,p=new H.cz("self","target","receiver","name"),o=J.lv(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.d(P.bV("Field name "+a+" not found."))},
r1:function(a){throw H.d(new P.dW(a))},
qN:function(a){return v.getIsolateTag(a)},
tD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qT:function(a){var s,r,q,p,o,n=$.nz.$1(a),m=$.l1[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.l7[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.nv.$2(a,n)
if(q!=null){m=$.l1[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.l7[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.l9(s)
$.l1[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.l7[n]=s
return s}if(p==="-"){o=H.l9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nE(a,s)
if(p==="*")throw H.d(P.jT(n))
if(v.leafTags[n]===true){o=H.l9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nE(a,s)},
nE:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.m2(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
l9:function(a){return J.m2(a,!1,null,!!a.$iv)},
qV:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.l9(s)
else return J.m2(s,c,null,null)},
qP:function(){if(!0===$.m1)return
$.m1=!0
H.qQ()},
qQ:function(){var s,r,q,p,o,n,m,l
$.l1=Object.create(null)
$.l7=Object.create(null)
H.qO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nF.$1(o)
if(n!=null){m=H.qV(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qO:function(){var s,r,q,p,o,n,m=C.I()
m=H.cu(C.J,H.cu(C.K,H.cu(C.v,H.cu(C.v,H.cu(C.L,H.cu(C.M,H.cu(C.N(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nz=new H.l4(p)
$.nv=new H.l5(o)
$.nF=new H.l6(n)},
cu:function(a,b){return a(b)||b},
oA:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.d(P.a4("Illegal RegExp pattern ("+String(n)+")",a,null))},
nH:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qJ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nG:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
nI:function(a,b,c){var s=H.r0(a,b,c)
return s},
r0:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nG(b),'g'),H.qJ(c))},
cC:function cC(){},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jJ:function jJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eo:function eo(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a){this.a=a},
iU:function iU(a){this.a=a},
dn:function dn(a){this.a=a
this.b=null},
bX:function bX(){},
jr:function jr(){},
jo:function jo(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a){this.a=a},
w:function w(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
is:function is(a){this.a=a},
iu:function iu(a,b){this.a=a
this.b=b
this.c=null},
bb:function bb(a){this.a=a},
ea:function ea(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
e5:function e5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function(a){return a},
aZ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bt(b,a))},
pN:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.d(H.qI(a,b,c))
return b},
cW:function cW(){},
T:function T(){},
ce:function ce(){},
bJ:function bJ(){},
cX:function cX(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
cY:function cY(){},
bK:function bK(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
oU:function(a,b){var s=b.c
return s==null?b.c=H.lQ(a,b.z,!0):s},
mK:function(a,b){var s=b.c
return s==null?b.c=H.dv(a,"c4",[b.z]):s},
mL:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mL(a.z)
return s===11||s===12},
oT:function(a){return a.cy},
nx:function(a){return H.lR(v.typeUniverse,a,!1)},
bq:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.ne(a,r,!0)
case 7:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.lQ(a,r,!0)
case 8:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.nd(a,r,!0)
case 9:q=b.Q
p=H.dC(a,q,a0,a1)
if(p===q)return b
return H.dv(a,b.z,p)
case 10:o=b.z
n=H.bq(a,o,a0,a1)
m=b.Q
l=H.dC(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lO(a,n,l)
case 11:k=b.z
j=H.bq(a,k,a0,a1)
i=b.Q
h=H.qx(a,i,a0,a1)
if(j===k&&h===i)return b
return H.nc(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dC(a,g,a0,a1)
o=b.z
n=H.bq(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lP(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.d(P.hI("Attempted to substitute unexpected RTI kind "+c))}},
dC:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bq(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qy:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bq(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qx:function(a,b,c,d){var s,r=b.a,q=H.dC(a,r,c,d),p=b.b,o=H.dC(a,p,c,d),n=b.c,m=H.qy(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fG()
s.a=q
s.b=o
s.c=m
return s},
tF:function(a,b){a[v.arrayRti]=b
return a},
qE:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nA(s)
return a.$S()}return null},
nB:function(a,b){var s
if(H.mL(b))if(a instanceof H.bX){s=H.qE(a)
if(s!=null)return s}return H.dD(a)},
dD:function(a){var s
if(a instanceof P.E){s=a.$ti
return s!=null?s:H.lW(a)}if(Array.isArray(a))return H.pJ(a)
return H.lW(J.bu(a))},
pJ:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
pV:function(a){var s=a.$ti
return s!=null?s:H.lW(a)},
lW:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pW(a,s)},
pW:function(a,b){var s=a instanceof H.bX?a.__proto__.__proto__.constructor:b,r=H.pt(v.typeUniverse,s.name)
b.$ccache=r
return r},
nA:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pU:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dz(q,a,H.q_)
if(!H.b0(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dz(q,a,H.q2)
p=q.y
s=p===6?q.z:q
if(s===t.cp)r=H.bp
else if(s===t.cb||s===t.H)r=H.pZ
else if(s===t.N)r=H.q0
else r=s===t.aa?H.lX:null
if(r!=null)return H.dz(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qS)){q.r="$i"+p
return H.dz(q,a,H.q1)}}else if(p===7)return H.dz(q,a,H.pR)
return H.dz(q,a,H.pP)},
dz:function(a,b,c){a.b=c
return a.b(b)},
pT:function(a){var s,r,q=this
if(!H.b0(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pM
else if(q===t.K)r=H.pK
else r=H.pQ
q.a=r
return q.a(a)},
qr:function(a){var s,r=a.y
if(!H.b0(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pP:function(a){var s=this
if(a==null)return H.qr(s)
return H.W(v.typeUniverse,H.nB(a,s),null,s,null)},
pR:function(a){if(a==null)return!0
return this.z.b(a)},
q1:function(a){var s=this,r=s.r
if(a instanceof P.E)return!!a[r]
return!!J.bu(a)[r]},
tB:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nn(a,s)},
pQ:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nn(a,s)},
nn:function(a,b){throw H.d(H.pj(H.n5(a,H.nB(a,b),H.ak(b,null))))},
n5:function(a,b,c){var s=P.ie(a),r=H.ak(b==null?H.dD(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
pj:function(a){return new H.dt("TypeError: "+a)},
aa:function(a,b){return new H.dt("TypeError: "+H.n5(a,null,b))},
q_:function(a){return a!=null},
pK:function(a){return a},
q2:function(a){return!0},
pM:function(a){return a},
lX:function(a){return!0===a||!1===a},
tn:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.aa(a,"bool"))},
tp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.aa(a,"bool"))},
to:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.aa(a,"bool?"))},
tq:function(a){if(typeof a=="number")return a
throw H.d(H.aa(a,"double"))},
ts:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.aa(a,"double"))},
tr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.aa(a,"double?"))},
bp:function(a){return typeof a=="number"&&Math.floor(a)===a},
tt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.aa(a,"int"))},
tv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.aa(a,"int"))},
tu:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.aa(a,"int?"))},
pZ:function(a){return typeof a=="number"},
tw:function(a){if(typeof a=="number")return a
throw H.d(H.aa(a,"num"))},
ty:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.aa(a,"num"))},
tx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.aa(a,"num?"))},
q0:function(a){return typeof a=="string"},
tz:function(a){if(typeof a=="string")return a
throw H.d(H.aa(a,"String"))},
pL:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.aa(a,"String"))},
tA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.aa(a,"String?"))},
qu:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.l(r,H.ak(a[q],b))
return s},
no:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.V,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.c(a6,i)
l=C.a.l(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.l(" extends ",H.ak(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ak(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.l(a3,H.ak(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.l(a3,H.ak(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.md(H.ak(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
ak:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ak(a.z,b)
return s}if(l===7){r=a.z
s=H.ak(r,b)
q=r.y
return J.md(q===11||q===12?C.a.l("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.ak(a.z,b))+">"
if(l===9){p=H.qz(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qu(o,b)+">"):p}if(l===11)return H.no(a,b,null)
if(l===12)return H.no(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
qz:function(a){var s,r=H.nJ(a)
if(r!=null)return r
s="minified:"+a
return s},
nf:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pt:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lR(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dw(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dv(a,b,q)
n[b]=o
return o}else return m},
pr:function(a,b){return H.nm(a.tR,b)},
pq:function(a,b){return H.nm(a.eT,b)},
lR:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.nb(H.n9(a,null,b,c))
r.set(b,s)
return s},
hg:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.nb(H.n9(a,b,c,!0))
q.set(c,r)
return r},
ps:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lO(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bo:function(a,b){b.a=H.pT
b.b=H.pU
return b},
dw:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ap(null,null)
s.y=b
s.cy=c
r=H.bo(a,s)
a.eC.set(c,r)
return r},
ne:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.po(a,b,r,c)
a.eC.set(r,s)
return s},
po:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b0(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ap(null,null)
q.y=6
q.z=b
q.cy=c
return H.bo(a,q)},
lQ:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pn(a,b,r,c)
a.eC.set(r,s)
return s},
pn:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b0(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.l8(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.l8(q.z))return q
else return H.oU(a,b)}}p=new H.ap(null,null)
p.y=7
p.z=b
p.cy=c
return H.bo(a,p)},
nd:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pl(a,b,r,c)
a.eC.set(r,s)
return s},
pl:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b0(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dv(a,"c4",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ap(null,null)
q.y=8
q.z=b
q.cy=c
return H.bo(a,q)},
pp:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ap(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bo(a,s)
a.eC.set(q,r)
return r},
hf:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pk:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dv:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hf(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ap(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bo(a,r)
a.eC.set(p,q)
return q},
lO:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hf(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ap(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bo(a,o)
a.eC.set(q,n)
return n},
nc:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hf(m)
if(j>0){s=l>0?",":""
r=H.hf(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pk(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ap(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bo(a,o)
a.eC.set(q,r)
return r},
lP:function(a,b,c,d){var s,r=b.cy+("<"+H.hf(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pm(a,b,c,r,d)
a.eC.set(r,s)
return s},
pm:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bq(a,b,r,0)
m=H.dC(a,c,r,0)
return H.lP(a,n,m,c!==m)}}l=new H.ap(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bo(a,l)},
n9:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nb:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.pd(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.na(a,r,g,f,!1)
else if(q===46)r=H.na(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bn(a.u,a.e,f.pop()))
break
case 94:f.push(H.pp(a.u,f.pop()))
break
case 35:f.push(H.dw(a.u,5,"#"))
break
case 64:f.push(H.dw(a.u,2,"@"))
break
case 126:f.push(H.dw(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lN(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dv(p,n,o))
else{m=H.bn(p,a.e,n)
switch(m.y){case 11:f.push(H.lP(p,m,o,a.n))
break
default:f.push(H.lO(p,m,o))
break}}break
case 38:H.pe(a,f)
break
case 42:l=a.u
f.push(H.ne(l,H.bn(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lQ(l,H.bn(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.nd(l,H.bn(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fG()
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
H.lN(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.nc(p,H.bn(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lN(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.pg(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bn(a.u,a.e,h)},
pd:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
na:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.nf(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.oT(o)+'"')
d.push(H.hg(s,o,n))}else d.push(p)
return m},
pe:function(a,b){var s=b.pop()
if(0===s){b.push(H.dw(a.u,1,"0&"))
return}if(1===s){b.push(H.dw(a.u,4,"1&"))
return}throw H.d(P.hI("Unexpected extended operation "+H.f(s)))},
bn:function(a,b,c){if(typeof c=="string")return H.dv(a,c,a.sEA)
else if(typeof c=="number")return H.pf(a,b,c)
else return c},
lN:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bn(a,b,c[s])},
pg:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bn(a,b,c[s])},
pf:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.d(P.hI("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.d(P.hI("Bad index "+c+" for "+b.i(0)))},
W:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b0(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b0(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.W(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.W(a,b.z,c,d,e)
if(p===6){s=d.z
return H.W(a,b,c,s,e)}if(r===8){if(!H.W(a,b.z,c,d,e))return!1
return H.W(a,H.mK(a,b),c,d,e)}if(r===7){s=H.W(a,b.z,c,d,e)
return s}if(p===8){if(H.W(a,b,c,d.z,e))return!0
return H.W(a,b,c,H.mK(a,d),e)}if(p===7){s=H.W(a,b,c,d.z,e)
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
if(!H.W(a,k,c,j,e)||!H.W(a,j,e,k,c))return!1}return H.np(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.np(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pY(a,b,c,d,e)}return!1},
np:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.W(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.W(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.W(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.W(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.W(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pY:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.W(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.nf(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.W(a,H.hg(a,b,l[p]),c,r[p],e))return!1
return!0},
l8:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b0(a))if(r!==7)if(!(r===6&&H.l8(a.z)))s=r===8&&H.l8(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qS:function(a){var s
if(!H.b0(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b0:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.V},
nm:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ap:function ap(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fG:function fG(){this.c=this.b=this.a=null},
fB:function fB(){},
dt:function dt(a){this.a=a},
nJ:function(a){return v.mangledGlobalNames[a]},
qW:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hs:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.m1==null){H.qP()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.d(P.jT("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.mo()]
if(p!=null)return p
p=H.qT(a)
if(p!=null)return p
if(typeof a=="function")return C.X
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,J.mo(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mo:function(){var s=$.n7
return s==null?$.n7=v.getIsolateTag("_$dart_js"):s},
oy:function(a){if(!H.bp(a))throw H.d(P.lm(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a6(a,0,4294967295,"length",null))
return J.lv(new Array(a))},
lu:function(a){if(!H.bp(a)||a<0)throw H.d(P.bV("Length must be a non-negative integer: "+H.f(a)))
return new Array(a)},
lv:function(a){a.fixed$length=Array
return a},
oz:function(a,b){return J.dH(a,b)},
bu:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.cL.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.c8.prototype
if(typeof a=="boolean")return J.ir.prototype
if(a.constructor==Array)return J.ao.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.E)return a
return J.hs(a)},
qL:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.ao.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.E)return a
return J.hs(a)},
al:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.ao.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.E)return a
return J.hs(a)},
l2:function(a){if(a==null)return a
if(a.constructor==Array)return J.ao.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.E)return a
return J.hs(a)},
ny:function(a){if(typeof a=="number")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bl.prototype
return a},
qM:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bl.prototype
return a},
m0:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bl.prototype
return a},
bv:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.E)return a
return J.hs(a)},
md:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qL(a).l(a,b)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bu(a).p(a,b)},
cy:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.al(a).h(a,b)},
lg:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nC(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.l2(a).k(a,b,c)},
o7:function(a,b){return J.m0(a).D(a,b)},
o8:function(a,b,c){return J.bv(a).ip(a,b,c)},
o9:function(a,b,c,d){return J.bv(a).iS(a,b,c,d)},
oa:function(a,b){return J.m0(a).X(a,b)},
dH:function(a,b){return J.qM(a).aA(a,b)},
lh:function(a,b){return J.al(a).P(a,b)},
li:function(a,b){return J.l2(a).G(a,b)},
ob:function(a,b,c,d){return J.bv(a).ed(a,b,c,d)},
lj:function(a){return J.ny(a).bT(a)},
lk:function(a,b){return J.l2(a).H(a,b)},
me:function(a){return J.bv(a).gdV(a)},
oc:function(a){return J.bv(a).gdY(a)},
ab:function(a){return J.bu(a).gR(a)},
b4:function(a){return J.l2(a).gU(a)},
b5:function(a){return J.al(a).gm(a)},
od:function(a,b){return J.bv(a).jQ(a,b)},
ll:function(a){return J.ny(a).aC(a)},
aw:function(a){return J.bu(a).i(a)},
a:function a(){},
ir:function ir(){},
c8:function c8(){},
b9:function b9(){},
eu:function eu(){},
bl:function bl(){},
aA:function aA(){},
ao:function ao(){},
e6:function e6(){},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b8:function b8(){},
cM:function cM(){},
cL:function cL(){},
aK:function aK(){}},P={
p5:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qB()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.br(new P.ki(q),1)).observe(s,{childList:true})
return new P.kh(q,s,r)}else if(self.setImmediate!=null)return P.qC()
return P.qD()},
p6:function(a){self.scheduleImmediate(H.br(new P.kj(a),0))},
p7:function(a){self.setImmediate(H.br(new P.kk(a),0))},
p8:function(a){P.lH(C.k,a)},
lH:function(a,b){var s=C.c.a2(a.a,1000)
return P.ph(s<0?0:s,b)},
mP:function(a,b){var s=C.c.a2(a.a,1000)
return P.pi(s<0?0:s,b)},
ph:function(a,b){var s=new P.ds()
s.fl(a,b)
return s},
pi:function(a,b){var s=new P.ds()
s.fm(a,b)
return s},
tl:function(a){return new P.co(a,1)},
p9:function(){return C.a7},
pa:function(a){return new P.co(a,3)},
q4:function(a){return new P.dp(a)},
n6:function(a,b){var s,r,q
b.a=1
try{a.eK(new P.kq(b),new P.kr(b),t.P)}catch(q){s=H.as(q)
r=H.bS(q)
P.qZ(new P.ks(b,s,r))}},
kp:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.bK()
b.a=a.a
b.c=a.c
P.cn(b,r)}else{r=b.c
b.a=2
b.c=a
a.dC(r)}},
cn:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.e;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.kZ(f,f,d.b,s.a,s.b)}return}r.a=b
p=b.a
for(d=b;p!=null;d=p,p=o){d.a=null
P.cn(e.a,d)
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
if(k){P.kZ(f,f,n.b,m.a,m.b)
return}i=$.L
if(i!==j)$.L=j
else i=f
d=d.c
if((d&15)===8)new P.kx(r,e,q).$0()
else if(l){if((d&1)!==0)new P.kw(r,m).$0()}else if((d&2)!==0)new P.kv(e,r).$0()
if(i!=null)$.L=i
d=r.c
if(s.b(d)){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bL(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.kp(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bL(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
qs:function(a,b){if(t.U.b(a))return a
if(t.b6.b(a))return a
throw H.d(P.lm(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
qq:function(){var s,r
for(s=$.cs;s!=null;s=$.cs){$.dB=null
r=s.b
$.cs=r
if(r==null)$.dA=null
s.a.$0()}},
qw:function(){$.lY=!0
try{P.qq()}finally{$.dB=null
$.lY=!1
if($.cs!=null)$.mc().$1(P.nw())}},
nt:function(a){var s=new P.fo(a),r=$.dA
if(r==null){$.cs=$.dA=s
if(!$.lY)$.mc().$1(P.nw())}else $.dA=r.b=s},
qv:function(a){var s,r,q,p=$.cs
if(p==null){P.nt(a)
$.dB=$.dA
return}s=new P.fo(a)
r=$.dB
if(r==null){s.b=p
$.cs=$.dB=s}else{q=r.b
s.b=q
$.dB=r.b=s
if(q==null)$.dA=s}},
qZ:function(a){var s=null,r=$.L
if(C.e===r){P.ct(s,s,C.e,a)
return}P.ct(s,s,r,r.cw(a))},
lG:function(a,b){var s=$.L
if(s===C.e)return P.lH(a,b)
return P.lH(a,s.cw(b))},
jE:function(a,b){var s=$.L
if(s===C.e)return P.mP(a,b)
return P.mP(a,s.dS(b,t.ae))},
hJ:function(a,b){var s=b==null?P.mf(a):b
P.ln(a,"error")
return new P.dL(a,s)},
mf:function(a){var s
if(t.C.b(a)){s=a.gbD()
if(s!=null)return s}return C.R},
kZ:function(a,b,c,d,e){P.qv(new P.l_(d,e))},
nq:function(a,b,c,d){var s,r=$.L
if(r===c)return d.$0()
$.L=c
s=r
try{r=d.$0()
return r}finally{$.L=s}},
nr:function(a,b,c,d,e){var s,r=$.L
if(r===c)return d.$1(e)
$.L=c
s=r
try{r=d.$1(e)
return r}finally{$.L=s}},
qt:function(a,b,c,d,e,f){var s,r=$.L
if(r===c)return d.$2(e,f)
$.L=c
s=r
try{r=d.$2(e,f)
return r}finally{$.L=s}},
ct:function(a,b,c,d){var s=C.e!==c
if(s)d=!(!s||!1)?c.cw(d):c.iX(d)
P.nt(d)},
ki:function ki(a){this.a=a},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
ds:function ds(){this.c=0},
kM:function kM(a,b){this.a=a
this.b=b},
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b){this.a=a
this.b=b},
cp:function cp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dp:function dp(a){this.a=a},
fs:function fs(){},
da:function da(a,b){this.a=a
this.$ti=b},
fH:function fH(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
aF:function aF(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
km:function km(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.a=a
this.b=b},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a,b){this.a=a
this.b=b},
kt:function kt(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
kw:function kw(a,b){this.a=a
this.b=b},
kv:function kv(a,b){this.a=a
this.b=b},
fo:function fo(a){this.a=a
this.b=null},
eQ:function eQ(){},
eR:function eR(){},
d4:function d4(){},
dL:function dL(a,b){this.a=a
this.b=b},
kS:function kS(){},
l_:function l_(a,b){this.a=a
this.b=b},
kD:function kD(){},
kF:function kF(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function(a,b,c){return H.qK(a,new H.w(b.af("@<0>").di(c).af("w<1,2>")))},
mp:function(a,b){return new H.w(a.af("@<0>").di(b).af("w<1,2>"))},
mr:function(a){return new P.dc(a.af("dc<0>"))},
lM:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pc:function(a,b){var s=new P.dd(a,b)
s.c=a.e
return s},
ow:function(a,b,c){var s,r
if(P.lZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.ad.push(a)
try{P.q3(a,s)}finally{if(0>=$.ad.length)return H.c($.ad,-1)
$.ad.pop()}r=P.mN(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lt:function(a,b,c){var s,r
if(P.lZ(a))return b+"..."+c
s=new P.V(b)
$.ad.push(a)
try{r=s
r.a=P.mN(r.a,a,", ")}finally{if(0>=$.ad.length)return H.c($.ad,-1)
$.ad.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lZ:function(a){var s,r
for(s=$.ad.length,r=0;r<s;++r)if(a===$.ad[r])return!0
return!1},
q3:function(a,b){var s,r,q,p,o,n,m,l=a.gU(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.f(l.gF(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gF(l);++j
if(!l.w()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF(l);++j
for(;l.w();p=o,o=n){n=l.gF(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
lz:function(a){var s,r={}
if(P.lZ(a))return"{...}"
s=new P.V("")
try{$.ad.push(a)
s.a+="{"
r.a=!0
J.lk(a,new P.iz(r,s))
s.a+="}"}finally{if(0>=$.ad.length)return H.c($.ad,-1)
$.ad.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dc:function dc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kC:function kC(a){this.a=a
this.c=this.b=null},
dd:function dd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cK:function cK(){},
cP:function cP(){},
D:function D(){},
cR:function cR(){},
iz:function iz(a,b){this.a=a
this.b=b},
aC:function aC(){},
hh:function hh(){},
cS:function cS(){},
ck:function ck(a,b){this.a=a
this.$ti=b},
dk:function dk(){},
de:function de(){},
dx:function dx(){},
p2:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.p3(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
p3:function(a,b,c,d){var s=a?$.o1():$.o0()
if(s==null)return null
if(0===c&&d===b.length)return P.mV(s,b)
return P.mV(s,b.subarray(c,P.bg(c,d,b.length)))},
mV:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.as(r)}return null},
mg:function(a,b,c,d,e,f){if(C.c.b2(f,4)!==0)throw H.d(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a4("Invalid base64 padding, more than two '=' characters",a,b))},
pI:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pH:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.n()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.al(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.al()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
k1:function k1(){},
k2:function k2(){},
hR:function hR(){},
hS:function hS(){},
dS:function dS(){},
dV:function dV(){},
ib:function ib(){},
k_:function k_(){},
k3:function k3(){},
kR:function kR(a){this.b=0
this.c=a},
k0:function k0(a){this.a=a},
kQ:function kQ(a){this.a=a
this.b=16
this.c=0},
dE:function(a,b){var s=H.lB(a,b)
if(s!=null)return s
throw H.d(P.a4(a,null,null))},
ou:function(a){if(a instanceof H.bX)return a.i(0)
return"Instance of '"+H.f(H.eA(a))+"'"},
iv:function(a,b,c){var s,r=c?J.lu(a):J.oy(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iw:function(a,b){var s,r=[]
for(s=J.b4(a);s.w();)r.push(s.gF(s))
if(b)return r
return J.lv(r)},
eb:function(a,b){var s,r,q=J.lu(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
eT:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bg(b,c,r)
if(b<=0){if(typeof c!=="number")return c.S()
q=c<r}else q=!0
return H.mF(q?s.slice(b,c):s)}if(t.cr.b(a))return H.oQ(a,b,P.bg(b,c,a.length))
return P.oZ(a,b,c)},
oZ:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.d(P.a6(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.d(P.a6(c,b,a.length,o,o))
r=J.b4(a)
for(q=0;q<b;++q)if(!r.w())throw H.d(P.a6(b,0,q,o,o))
p=[]
if(s)for(;r.w();)p.push(r.gF(r))
else for(q=b;q<c;++q){if(!r.w())throw H.d(P.a6(c,b,q,o,o))
p.push(r.gF(r))}return H.mF(p)},
oR:function(a){return new H.e5(a,H.oA(a,!1,!0,!1,!1,!1))},
mN:function(a,b,c){var s=J.b4(b)
if(!s.w())return a
if(c.length===0){do a+=H.f(s.gF(s))
while(s.w())}else{a+=H.f(s.gF(s))
for(;s.w();)a=a+c+H.f(s.gF(s))}return a},
mS:function(){var s=H.oH()
if(s!=null)return P.p1(s)
throw H.d(P.x("'Uri.base' is not supported"))},
kP:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.o5().b
if(typeof b!="string")H.p(H.ae(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.gjh().cD(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aS(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
os:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ot:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dX:function(a){if(a>=10)return""+a
return"0"+a},
mm:function(a){return new P.ay(1000*a)},
ie:function(a){if(typeof a=="number"||H.lX(a)||null==a)return J.aw(a)
if(typeof a=="string")return JSON.stringify(a)
return P.ou(a)},
hI:function(a){return new P.dK(a)},
bV:function(a){return new P.am(!1,null,null,a)},
lm:function(a,b,c){return new P.am(!0,a,b,c)},
ln:function(a,b){if(a==null)throw H.d(new P.am(!1,null,b,"Must not be null"))
return a},
lC:function(a){var s=null
return new P.ch(s,s,!1,s,s,a)},
eB:function(a,b){return new P.ch(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.ch(b,c,!0,a,d,"Invalid value")},
bg:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.b(c)
s=a>c}else s=!0
if(s)throw H.d(P.a6(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.b(c)
s=b>c}else s=!0
if(s)throw H.d(P.a6(b,a,c,"end",null))
return b}return c},
mG:function(a,b){if(a<0)throw H.d(P.a6(a,0,null,b,null))
return a},
K:function(a,b,c,d,e){var s=e==null?J.b5(b):e
return new P.e3(s,!0,a,c,"Index out of range")},
x:function(a){return new P.fg(a)},
jT:function(a){return new P.fd(a)},
mM:function(a){return new P.d3(a)},
bZ:function(a){return new P.dU(a)},
r:function(a){return new P.fD(a)},
a4:function(a,b,c){return new P.im(a,b,c)},
m4:function(a){H.qW(a)},
p1:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mR(a4<a4?C.a.v(a5,0,a4):a5,5,a3).geN()
else if(s===32)return P.mR(C.a.v(a5,5,a4),0,a3).geN()}r=P.iv(8,0,!1)
q=r.length
if(0>=q)return H.c(r,0)
r[0]=0
if(1>=q)return H.c(r,1)
r[1]=-1
if(2>=q)return H.c(r,2)
r[2]=-1
if(7>=q)return H.c(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.ns(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.ns(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
r[7]=p}q=r.length
if(2>=q)return H.c(r,2)
o=r[2]+1
if(3>=q)return H.c(r,3)
n=r[3]
if(4>=q)return H.c(r,4)
m=r[4]
if(5>=q)return H.c(r,5)
l=r[5]
if(6>=q)return H.c(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.c(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ad(a5,"..",m)))h=l>m+2&&C.a.ad(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ad(a5,"file",0)){if(o<=0){if(!C.a.ad(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.v(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.bm(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.ad(a5,"http",0)){if(q&&n+3===m&&C.a.ad(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.bm(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ad(a5,"https",0)){if(q&&n+4===m&&C.a.ad(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.bm(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.v(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fZ(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pB(a5,0,p)
else{if(p===0)P.cq(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pC(a5,d,o-1):""
b=P.py(a5,o,n,!1)
q=n+1
if(q<m){a=H.lB(C.a.v(a5,q,m),a3)
a0=P.pA(a==null?H.p(P.a4("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pz(a5,m,l,a3,i,b!=null)
a2=l<k?P.lT(a5,l+1,k,a3):a3
return new P.bR(i,c,b,a0,a1,a2,k<a4?P.px(a5,k+1,a4):a3)},
mU:function(a){var s=t.N
return C.b.jk(a.split("&"),P.mp(s,s),new P.jY(C.f))},
p0:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jV(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.X(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.dE(C.a.v(a,q,r),null)
if(typeof n!=="number")return n.a3()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.dE(C.a.v(a,q,c),null)
if(typeof n!=="number")return n.a3()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
mT:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jW(a),b=new P.jX(c,a)
if(a.length<2)c.$1("address is too short")
s=[]
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.X(a,r)
if(n===58){if(r===a0){++r
if(C.a.X(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaZ(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.p0(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.c.be(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
ng:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cq:function(a,b,c){throw H.d(P.a4(c,a,b))},
pA:function(a,b){if(a!=null&&a===P.ng(b))return null
return a},
py:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.X(a,b)===91){s=c-1
if(C.a.X(a,s)!==93)P.cq(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pv(a,r,s)
if(q<s){p=q+1
o=P.nl(a,C.a.ad(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mT(a,r,q)
return C.a.v(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.X(a,n)===58){q=C.a.bU(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.nl(a,C.a.ad(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mT(a,b,q)
return"["+C.a.v(a,b,q)+o+"]"}return P.pE(a,b,c)},
pv:function(a,b,c){var s=C.a.bU(a,"%",b)
return s>=b&&s<c?s:c},
nl:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.V(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.X(a,s)
if(p===37){o=P.lU(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.V("")
m=i.a+=C.a.v(a,r,s)
if(n)o=C.a.v(a,s,s+3)
else if(o==="%")P.cq(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.V("")
if(r<s){i.a+=C.a.v(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.X(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.v(a,r,s)
if(i==null){i=new P.V("")
n=i}else n=i
n.a+=j
n.a+=P.lS(p)
s+=k
r=s}}}if(i==null)return C.a.v(a,b,c)
if(r<c)i.a+=C.a.v(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.X(a,s)
if(o===37){n=P.lU(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.V("")
l=C.a.v(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.v(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.V("")
if(r<s){q.a+=C.a.v(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.m,m)
m=(C.m[m]&1<<(o&15))!==0}else m=!1
if(m)P.cq(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.X(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.v(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.V("")
m=q}else m=q
m.a+=l
m.a+=P.lS(o)
s+=j
r=s}}}}if(q==null)return C.a.v(a,b,c)
if(r<c){l=C.a.v(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pB:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.ni(C.a.D(a,b)))P.cq(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cq(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.v(a,b,c)
return P.pu(r?a.toLowerCase():a)},
pu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pC:function(a,b,c){return P.dy(a,b,c,C.Z,!1)},
pz:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dy(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.ao(s,"/"))s="/"+s
return P.pD(s,e,f)},
pD:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.ao(a,"/"))return P.pF(a,!s||c)
return P.pG(a)},
lT:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.d(P.bV("Both query and queryParameters specified"))
return P.dy(a,b,c,C.n,!0)}if(d==null)return null
s=new P.V("")
r.a=""
d.H(0,new P.kN(new P.kO(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
px:function(a,b,c){return P.dy(a,b,c,C.n,!0)},
lU:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.X(a,b+1)
r=C.a.X(a,n)
q=H.l3(s)
p=H.l3(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.be(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aS(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.v(a,b,b+3).toUpperCase()
return null},
lS:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.c(s,0)
s[0]=37
q=C.a.D(k,a>>>4)
if(1>=r)return H.c(s,1)
s[1]=q
q=C.a.D(k,a&15)
if(2>=r)return H.c(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.iy(a,6*o)&63|p
if(n>=r)return H.c(s,n)
s[n]=37
q=n+1
l=C.a.D(k,m>>>4)
if(q>=r)return H.c(s,q)
s[q]=l
l=n+2
q=C.a.D(k,m&15)
if(l>=r)return H.c(s,l)
s[l]=q
n+=3}}return P.eT(s,0,null)},
dy:function(a,b,c,d,e){var s=P.nk(a,b,c,d,e)
return s==null?C.a.v(a,b,c):s},
nk:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.X(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lU(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.m,n)
n=(C.m[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cq(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.X(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lS(o)}}if(p==null){p=new P.V("")
n=p}else n=p
n.a+=C.a.v(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.b(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.v(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
nj:function(a){if(C.a.ao(a,"."))return!0
return C.a.ei(a,"/.")!==-1},
pG:function(a){var s,r,q,p,o,n,m
if(!P.nj(a))return a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.J(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.u(s,"/")},
pF:function(a,b){var s,r,q,p,o,n
if(!P.nj(a))return!b?P.nh(a):a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaZ(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaZ(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.nh(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.u(s,"/")},
nh:function(a){var s,r,q,p=a.length
if(p>=2&&P.ni(J.o7(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.v(a,0,s)+"%3A"+C.a.ax(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.o,q)
q=(C.o[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pw:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.d(P.bV("Invalid URL encoding"))}}return s},
lV:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.f!==d)q=!1
else q=!0
if(q)return C.a.v(a,b,c)
else p=new H.P(C.a.v(a,b,c))}else{p=[]
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.d(P.bV("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.d(P.bV("Truncated URI"))
p.push(P.pw(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a6.cD(p)},
ni:function(a){var s=a|32
return 97<=s&&s<=122},
mR:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=[b-1]
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.d(P.a4(k,a,r))}}if(q<0&&r>b)throw H.d(P.a4(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaZ(j)
if(p!==44||r!==n+7||!C.a.ad(a,"base64",n+1))throw H.d(P.a4("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.ju(0,a,m,s)
else{l=P.nk(a,m,s,C.n,!0)
if(l!=null)a=C.a.bm(a,m,s,l)}return new P.jU(a,j,c)},
pO:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.eb(22,new P.kU()),l=new P.kT(m),k=new P.kV(),j=new P.kW(),i=l.$2(0,225)
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
ns:function(a,b,c,d,e){var s,r,q,p,o,n=$.o6()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.c(n,d)
r=n[d]
q=C.a.D(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.c(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.c(e,o)
e[o]=s}return d},
b_:function b_(){},
ag:function ag(a,b){this.a=a
this.b=b},
ar:function ar(){},
ay:function ay(a){this.a=a},
i8:function i8(){},
i9:function i9(){},
F:function F(){},
dK:function dK(a){this.a=a},
ep:function ep(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e3:function e3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fg:function fg(a){this.a=a},
fd:function fd(a){this.a=a},
d3:function d3(a){this.a=a},
dU:function dU(a){this.a=a},
es:function es(){},
d2:function d2(){},
dW:function dW(a){this.a=a},
fD:function fD(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
h:function h(){},
e4:function e4(){},
k:function k(){},
G:function G(){},
a5:function a5(){},
X:function X(){},
E:function E(){},
aU:function aU(){},
h7:function h7(){},
B:function B(){},
V:function V(a){this.a=a},
jY:function jY(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a,b){this.a=a
this.b=b},
bR:function bR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kO:function kO(a,b){this.a=a
this.b=b},
kN:function kN(a){this.a=a},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function kU(){},
kT:function kT(a){this.a=a},
kV:function kV(){},
kW:function kW(){},
fZ:function fZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fv:function fv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qH:function(a){var s
if(t.s.b(a)){s=J.oc(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.du(a.data,a.height,a.width)},
qG:function(a){if(a instanceof P.du)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var s,r,q,p,o
if(a==null)return null
s=P.mp(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
qF:function(a){var s={}
a.H(0,new P.l0(s))
return s},
kH:function kH(){},
kJ:function kJ(a,b){this.a=a
this.b=b},
kK:function kK(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a){this.a=a},
kI:function kI(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
ik:function ik(){},
il:function il(){},
qX:function(a,b){var s=new P.aF($.L,b.af("aF<0>")),r=new P.da(s,b.af("da<0>"))
a.then(H.br(new P.la(r),1),H.br(new P.lb(r),1))
return s},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
kB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
pb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kz:function kz(){},
fX:function fX(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bG:function bG(){},
e9:function e9(){},
bL:function bL(){},
eq:function eq(){},
iY:function iY(){},
eS:function eS(){},
l:function l(){},
bP:function bP(){},
f_:function f_(){},
fL:function fL(){},
fM:function fM(){},
fT:function fT(){},
fU:function fU(){},
h5:function h5(){},
h6:function h6(){},
hd:function hd(){},
he:function he(){},
bQ:function bQ(){},
hM:function hM(){},
dM:function dM(){},
hP:function hP(a){this.a=a},
dN:function dN(){},
b6:function b6(){},
er:function er(){},
fp:function fp(){},
eE:function eE(){},
eM:function eM(){},
h2:function h2(){},
h3:function h3(){}},W={
oe:function(){var s=document.createElement("a")
return s},
of:function(a){var s=new Audio(a)
return s},
lq:function(){var s=document.createElement("canvas")
return s},
ia:function(a){return"wheel"},
kA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n8:function(a,b,c,d){var s=W.kA(W.kA(W.kA(W.kA(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Q:function(a,b,c,d){var s=W.nu(new W.kl(c),t.D)
if(s!=null&&!0)J.o9(a,b,s,!1)
return new W.fC(a,b,s,!1)},
nu:function(a,b){var s=$.L
if(s===C.e)return a
return s.dS(a,b)},
m:function m(){},
hG:function hG(){},
dI:function dI(){},
dJ:function dJ(){},
by:function by(){},
bz:function bz(){},
ax:function ax(){},
i0:function i0(){},
H:function H(){},
cE:function cE(){},
i1:function i1(){},
an:function an(){},
aH:function aH(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i6:function i6(){},
cF:function cF(){},
cG:function cG(){},
dY:function dY(){},
i7:function i7(){},
fr:function fr(a,b){this.a=a
this.b=b},
N:function N(){},
i:function i(){},
e:function e(){},
az:function az(){},
c3:function c3(){},
e_:function e_(){},
e1:function e1(){},
b7:function b7(){},
iq:function iq(){},
bC:function bC(){},
bD:function bD(){},
c6:function c6(){},
bF:function bF(){},
ix:function ix(){},
iQ:function iQ(){},
cc:function cc(){},
ee:function ee(){},
iR:function iR(a){this.a=a},
ef:function ef(){},
iS:function iS(a){this.a=a},
bc:function bc(){},
eg:function eg(){},
ai:function ai(){},
fq:function fq(a){this.a=a},
z:function z(){},
cZ:function cZ(){},
be:function be(){},
ex:function ex(){},
eF:function eF(){},
j8:function j8(a){this.a=a},
eH:function eH(){},
aT:function aT(){},
eK:function eK(){},
bh:function bh(){},
eL:function eL(){},
bi:function bi(){},
eP:function eP(){},
jp:function jp(a){this.a=a},
aV:function aV(){},
bj:function bj(){},
aW:function aW(){},
aq:function aq(){},
eU:function eU(){},
eV:function eV(){},
jD:function jD(){},
bk:function bk(){},
bO:function bO(){},
eZ:function eZ(){},
jH:function jH(){},
aY:function aY(){},
jZ:function jZ(){},
fj:function fj(){},
bm:function bm(){},
cm:function cm(){},
ft:function ft(){},
db:function db(){},
fI:function fI(){},
df:function df(){},
h1:function h1(){},
h8:function h8(){},
ls:function ls(a,b){this.a=a
this.$ti=b},
fC:function fC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
kl:function kl(a){this.a=a},
lL:function lL(a){this.$ti=a},
I:function I(){},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fu:function fu(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fE:function fE(){},
fF:function fF(){},
fJ:function fJ(){},
fK:function fK(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fV:function fV(){},
fW:function fW(){},
fY:function fY(){},
dl:function dl(){},
dm:function dm(){},
h_:function h_(){},
h0:function h0(){},
h4:function h4(){},
h9:function h9(){},
ha:function ha(){},
dq:function dq(){},
dr:function dr(){},
hb:function hb(){},
hc:function hc(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){}},L={
oE:function(a){var s,r,q,p,o,n,m=new Array(256)
m.fixed$length=Array
s=new Array(256)
s.fixed$length=Array
for(r=0;r<256;++r)s[r]=r
q=P.dE("6364136223846793005",null)
p=P.dE("1442695040888963407",null)
if(typeof q!=="number")return H.b(q)
if(typeof p!=="number")return H.b(p)
a=C.c.cY(C.c.cY(C.c.cY(a*q+p,64)*q+p,64)*q+p,64)
for(r=255;r>=0;--r){o=a*q+p
a=((o&-1)>>>0)-(o&0)
n=C.c.b2(a+31,r+1)
if(n>=256)return H.c(s,n)
m[r]=s[n]
s[n]=s[r]}return new L.iV(m)},
iV:function iV(a){this.a=a},
eN:function eN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a){this.b=a
this.c=null},
jF:function jF(){var _=this
_.d=_.c=_.b=_.a=null},
jI:function jI(a){this.b=a
this.a=this.c=null}},B={
aQ:function(a,b){return new B.aP(a,b)},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
aP:function aP(a,b){this.a=a
this.b=b},
oh:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
og:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
ol:function(a){var s=new B.hX(a)
s.f4(a)
return s},
nD:function(){var s,r=V.oV("3Dart Craft")
r.a0(["This example is in development and may still have a few issues and glitches."])
s=W.lq()
s.className="pageLargeCanvas"
s.id="targetCanvas"
r.a.appendChild(s)
r.iR(["buttons"])
r.cu(1,"About")
r.a0(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."])
r.a0(["\xab[Back to Examples List|../../]"])
r.cu(1,"Controls")
r.a0(["\u2022 _Currently there are no controls for mobile browsers_"])
r.a0(["\u2022 *Esc* to release the mouse capture"])
r.a0(["\u2022 *W* or *Up arrow* to move forward"])
r.a0(["\u2022 *S* or *Down arrow* to move backward"])
r.a0(["\u2022 *A* or *Left arrow* to strife left"])
r.a0(["\u2022 *D* or *Right arrow* to strife right"])
r.a0(["\u2022 *Space bar* to jump"])
r.a0(["\u2022 *Tab* cycles the block selected which can be placed"])
r.a0(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"])
r.a0(["\u2022 *Left click* or *Q* removes the currently highlighted block"])
r.a0(["\u2022 *Right click* or *E* places the selected block on the highlighted block"])
r.a0(["\u2022 *O* to return the starting location"])
r.cu(1,"Help wanted")
r.a0(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."])
r.a0(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."])
P.lG(C.k,B.qU())},
r_:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=document,c9=c8.getElementById("targetCanvas")
if(c9==null)H.p(P.r("Failed to find an element with the identifier, targetCanvas."))
s=E.p_(c9,!0,!0,!0,!1)
r=new B.iP(s)
r.b=new H.w(t.v)
r.c=new H.w(t.W)
r.d=[]
q=new V.a1(1,1,1)
p=V.ey()
p=U.bB(V.mv(p,V.lK(),p.ac(new V.q(0.5,-1,0.2))))
o=new D.c_()
o.c=new V.a1(1,1,1)
o.a=V.lK()
o.d=V.lJ()
o.e=V.n0()
n=o.b
o.b=p
p.gt().q(0,o.gho())
p=new D.A("mover",n,o.b)
p.b=!0
o.aP(p)
if(!o.c.p(0,q)){n=o.c
o.c=q
p=new D.A("color",n,q)
p.b=!0
o.aP(p)}r.e=o
m=r.E(r.C("boundary"),!1)
l=r.E(r.C("brick"),!1)
k=r.E(r.C("dirt"),!1)
j=r.E(r.C("dryLeavesSide"),!1)
i=r.E(r.C("dryLeavesTop"),!1)
h=r.E(r.C("leaves"),!1)
g=r.E(r.C("rock"),!1)
f=r.E(r.C("sand"),!1)
e=r.E(r.C("trunkEnd"),!1)
d=r.E(r.C("trunkSide"),!1)
c=r.E(r.C("trunkTilted"),!1)
b=r.E(r.C("turfSide"),!1)
a=r.E(r.C("turfTop"),!1)
a0=r.E(r.C("woodEnd"),!1)
a1=r.E(r.C("woodSide"),!1)
a2=r.E(r.C("woodTilted"),!1)
a3=r.E(r.C("blackShine"),!0)
a4=r.E(r.C("redShine"),!0)
a5=r.E(r.C("yellowShine"),!0)
a6=r.E(r.C("whiteShine"),!0)
a7=r.E(r.C("mushroomBottom"),!1)
a8=r.E(r.C("mushroomSide"),!1)
a9=r.E(r.C("mushroomTop"),!1)
b0=r.E(r.C("grass"),!1)
b1=r.E(r.C("fern"),!1)
b2=r.E(r.C("blueFlowers"),!1)
b3=r.E(r.C("redFlowers"),!1)
b4=r.E(r.C("whiteFlowers"),!1)
p=P.iw([r.C("water1"),r.C("water2"),r.C("water3")],!0)
o=new T.jy()
b5=o.b=o.a=0
o.e=p
r.x=o
b6=r.E(o,!0)
r.b.k(0,100,new B.M(m,m,m,m,m,m))
r.b.k(0,101,new B.M(k,k,k,k,k,k))
r.b.k(0,102,new B.M(a,k,b,b,b,b))
r.b.k(0,103,new B.M(g,g,g,g,g,g))
r.b.k(0,104,new B.M(f,f,f,f,f,f))
r.b.k(0,105,new B.M(i,k,j,j,j,j))
r.b.k(0,106,new B.M(e,e,d,d,d,d))
r.b.k(0,107,new B.M(d,d,c,c,e,e))
r.b.k(0,108,new B.M(c,c,e,e,c,c))
r.b.k(0,109,new B.M(l,l,l,l,l,l))
r.b.k(0,110,new B.M(a4,a4,a4,a4,a4,a4))
r.b.k(0,111,new B.M(a6,a6,a6,a6,a6,a6))
r.b.k(0,112,new B.M(a5,a5,a5,a5,a5,a5))
r.b.k(0,113,new B.M(a3,a3,a3,a3,a3,a3))
r.b.k(0,114,new B.M(h,h,h,h,h,h))
r.b.k(0,115,new B.M(a0,a0,a1,a1,a1,a1))
r.b.k(0,116,new B.M(a1,a1,a2,a2,a0,a0))
r.b.k(0,117,new B.M(a2,a2,a0,a0,a2,a2))
r.b.k(0,1,new B.M(b6,b6,b6,b6,b6,b6))
r.c.k(0,200,[b0])
r.c.k(0,201,[b1])
r.c.k(0,202,[b4])
r.c.k(0,203,[b2])
r.c.k(0,204,[b3])
r.c.k(0,205,[a9,a7,a8])
r.f=r.de("selection")
r.r=r.de("crosshair")
b7=B.p4(r,B.pS())
p=s.r
b8=new B.jm()
b8.a=new H.w(t.bJ)
b8.b7(p,"./sounds/sandHit.mp3",[104])
b8.b7(p,"./sounds/grassHit.mp3",[101,102,200,201,202,203,204,205])
b8.b7(p,"./sounds/woodHit.mp3",[106,107,108,115,116,117])
b8.b7(p,"./sounds/stoneHit.mp3",[100,103,109,110,111,112,113])
b8.b7(p,"./sounds/waterHit.mp3",[1])
b8.b7(p,"./sounds/leavesHit.mp3",[105,114])
b9=B.oF(s.x,b7,b8)
c0=new M.dZ()
c0.a=!0
p=O.lr()
c0.e=p
p.bC(c0.ghq(),c0.ghs())
c0.y=c0.x=c0.r=c0.f=null
c1=X.ov(new V.bA(0.576,0.784,0.929,1))
c2=new X.et()
c2.c=1.0471975511965976
c2.d=0.1
c2.e=2000
c2.sem(null)
p=c2.c
$.t().toString
if(!(Math.abs(p-1.0471975511965976)<1e-9)){c2.c=1.0471975511965976
p=new D.A("fov",p,1.0471975511965976)
p.b=!0
c2.b6(p)}p=c2.d
$.t().toString
if(!(Math.abs(p-0.1)<1e-9)){c2.d=0.1
p=new D.A("near",p,0.1)
p.b=!0
c2.b6(p)}p=c2.e
$.t().toString
if(!(Math.abs(p-2000)<1e-9)){c2.e=2000
p=new D.A("far",p,2000)
p.b=!0
c2.b6(p)}p=c0.b
if(p!==c2){if(p!=null)p.gt().V(0,c0.gb4())
n=c0.b
c0.b=c2
c2.gt().q(0,c0.gb4())
p=new D.A("camera",n,c0.b)
p.b=!0
c0.b5(p)}p=c0.c
if(p!==c1){if(p!=null)p.gt().V(0,c0.gb4())
n=c0.c
c0.c=c1
c1.gt().q(0,c0.gb4())
p=new D.A("target",n,c0.c)
p.b=!0
c0.b5(p)}p=c0.f
if(p==null)p=c0.f=D.C()
p.q(0,b7.gk7(b7))
c0.b.sem(b9.y)
for(p=b7.e,o=p.length;b5<p.length;p.length===o||(0,H.o)(p),++b5){c3=p[b5]
c4=c0.e
if(c4.bq([c3])){c5=c4.a
c6=c5.length
c5.push(c3)
c4=c4.c
if(c4!=null)c4.$2(c6,[c3])}}c0.e.q(0,b9.dx)
b7.f=b9
p=s.d
if(p!==c0){if(p!=null)p.gt().V(0,s.gd6())
s.d=c0
c0.gt().q(0,s.gd6())
s.d7()}b9.d1()
P.jE(C.V,b7.gkb())
P.jE(C.U,b7.geQ())
P.jE(C.S,b7.giV())
c9=c8.getElementById("buttons")
c7=c8.createElement("button")
c7.textContent="Fullscreen"
W.Q(c7,"click",new B.lc(s),!1)
J.me(c9).q(0,c7)
P.jE(C.T,new B.ld(s,b7))},
pS:function(){var s,r,q,p,o=P.mS().geF().h(0,"seed")
if(o!=null){if(o==="test")return new B.jt()
if(o==="checkers"){s=new B.hW()
s.a=!0
s.b=10
return s}r=H.lB(o,null)
if(r==null)r=-1}else r=-1
if(r<=0){r=C.Q.jt(4294967296)
q=P.mS().eG(0,P.mq(["seed",""+r],t.X,t.z))
s=window.history
p=q.gcr()
s.toString
s.pushState(new P.kI([],[]).c_(null),null,p)}s=new B.iZ()
s.a=L.oE(r)
s.b=new Uint8Array(484)
return s},
oF:function(a,b,c){var s=new B.ev(b,c)
s.f6(a,b,c)
return s},
lF:function(a,b){var s,r,q=new B.je(a,b)
if(b==null){s=$.Y()
r=$.a0()
q.b=new Z.a_(s.a|r.a|$.a8().a)}s=a==null?null:a.d
s=s==null?null:s.length
if(s==null)s=1
s=new Array(s)
s.fixed$length=Array
q.c=s
return q},
p4:function(a,b){var s=new B.fn(a,b)
s.fb(a,b)
return s},
af:function af(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hW:function hW(){this.b=this.a=null},
hX:function hX(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
hY:function hY(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lc:function lc(a){this.a=a},
ld:function ld(a,b){this.a=a
this.b=b},
M:function M(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iP:function iP(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
iW:function iW(a){this.a=a},
iZ:function iZ(){this.c=this.b=this.a=null},
j0:function j0(a){this.a=a},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a){this.a=a},
je:function je(a,b){this.a=a
this.b=b
this.c=null},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jm:function jm(){this.a=null},
jt:function jt(){this.a=null},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},K={
a7:function(a){var s=new K.j9()
s.f8(a)
return s},
hH:function hH(){},
e2:function e2(){},
bd:function bd(){this.a=null},
j9:function j9(){this.a=null}},F={
mB:function(a){var s=new F.ew(a)
s.b=!1
a.toString
W.Q(a,"playing",s.ghE(),!1)
W.Q(a,"pause",s.ghC(),!1)
return s},
hN:function hN(){this.b=this.a=null},
hO:function hO(a,b){this.a=a
this.b=b},
eh:function eh(){this.c=this.b=this.a=null},
ew:function ew(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
cl:function(a,b,c,d,e,f,g,h,i){var s=null,r=new F.k8(),q=new F.kd()
q.b=[]
q.c=[]
r.c=q
q=new F.ka()
q.b=[]
q.c=[]
q.d=[]
r.d=q
r.e=0
q=h.a
r.f=(q&$.Y().a)!==0?d:s
r.r=(q&$.a8().a)!==0?e:s
r.x=(q&$.bx().a)!==0?b:s
r.y=(q&$.a0().a)!==0?f:s
r.z=(q&$.bU().a)!==0?g:s
r.Q=(q&$.o2().a)!==0?c:s
r.ch=(q&$.cx().a)!==0?i:0
r.cx=(q&$.bw().a)!==0?a:s
return r},
ij:function ij(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j2:function j2(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ja:function ja(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
lE:function lE(){},
jb:function jb(a){this.a=a
this.b=null},
jc:function jc(a){this.a=a
this.b=null},
jd:function jd(){this.b=null},
k8:function k8(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.a=null},
kf:function kf(a){this.a=a},
ke:function ke(a){this.a=a},
k9:function k9(a){this.a=a
this.c=this.b=null},
ka:function ka(){this.d=this.c=this.b=null},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(){this.c=this.b=null}},O={
lr:function(){var s=new O.bY()
s.bE()
return s},
bY:function bY(){this.c=this.b=this.a=null},
cV:function cV(){this.b=this.a=null},
ms:function(){var s,r=new O.ec(),q=O.lr()
r.e=q
q.bC(r.ghe(),r.ghg())
q=new O.aN(r,"emission")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a1(0,0,0)
r.f=q
q=new O.aN(r,"ambient")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a1(0,0,0)
r.r=q
q=new O.aN(r,"diffuse")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a1(0,0,0)
r.x=q
q=new O.aN(r,"invDiffuse")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a1(0,0,0)
r.y=q
q=new O.iG(r,"specular")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a1(0,0,0)
q.ch=100
r.z=q
q=new O.iC(r,"bump")
q.c=new A.a2(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aN(r,"reflect")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a1(0,0,0)
r.cx=q
q=new O.iF(r,"refract")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a1(0,0,0)
q.ch=1
r.cy=q
q=new O.iB(r,"alpha")
q.c=new A.a2(!1,!1,!1)
q.f=1
r.db=q
q=new D.cO()
q.bE()
q.e=[]
q.f=[]
q.r=[]
q.x=[]
q.z=q.y=null
q.c2(q.ghc(),q.gi_(),q.gi3())
r.dx=q
s=new O.iE()
s.b=new V.bA(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.C():s
q.q(0,r.gir())
q=r.dx
s=q.z
q=s==null?q.z=D.C():s
q.q(0,r.gbF())
r.fr=null
return r},
ec:function ec(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iB:function iB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cU:function cU(){},
iC:function iC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aN:function aN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iE:function iE(){var _=this
_.e=_.d=_.c=_.b=null},
iF:function iF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iG:function iG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
js:function js(){}},Y={
r3:function(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a0==null||a1==null
if(c)return d
if(a2==null)a2=$.hE()
c=a3.a&a2.aJ(0).a
s=a0.a
r=a1.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
r=s-r
s=a0.b
q=a1.b
if(typeof s!=="number")return s.n()
if(typeof q!=="number")return H.b(q)
q=s-q
s=a0.c
p=a1.c
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.b(p)
p=s-p
o=$.O()
if(r!==0){if(r>0){n=$.at()
s=n.a
if((c&s)===s){s=b.a
m=a.a
if(typeof m!=="number")return m.l()
$.t().toString
if(typeof s!=="number")return s.n()
m=s-(m+a.d)
l=Math.abs(m)<1e-9?0:m/r
k=!0}else{n=d
l=n
k=!1}}else{n=$.au()
s=n.a
if((c&s)===s){s=b.a
if(typeof s!=="number")return s.l()
m=a.a
$.t().toString
if(typeof m!=="number")return H.b(m)
m=s+b.d-m
l=Math.abs(m)<1e-9?0:m/r
k=!0}else{n=d
l=n
k=!1}}if(k){if(typeof l!=="number")return l.S()
s=l<100&&l>=0&&l<=1}else s=!1
if(s){s=a.b
if(typeof l!=="number")return H.b(l)
if(typeof s!=="number")return s.l()
j=s+q*l
s=b.b
if(typeof s!=="number")return s.l()
$.t().toString
if(j-1e-9<s+b.e&&s-1e-9<j+a.e){s=a.c
if(typeof s!=="number")return s.l()
i=s+p*l
s=b.c
if(typeof s!=="number")return s.l()
if(i-1e-9<s+b.f&&s-1e-9<i+a.f){h=n
g=l}else{h=o
g=100}}else{h=o
g=100}}else{h=o
g=100}}else{n=d
h=o
l=n
g=100}if(q!==0){if(q>0){f=$.b1()
s=f.a
if((c&s)===s){s=b.b
m=a.b
if(typeof m!=="number")return m.l()
$.t().toString
if(typeof s!=="number")return s.n()
m=s-(m+a.e)
l=Math.abs(m)<1e-9?0:m/q
n=f
k=!0}else k=!1}else{f=$.av()
s=f.a
if((c&s)===s){s=b.b
if(typeof s!=="number")return s.l()
m=a.b
$.t().toString
if(typeof m!=="number")return H.b(m)
m=s+b.e-m
l=Math.abs(m)<1e-9?0:m/q
n=f
k=!0}else k=!1}if(k){if(typeof l!=="number")return l.S()
s=l<g&&l>=0&&l<=1}else s=!1
if(s){s=a.a
if(typeof l!=="number")return H.b(l)
if(typeof s!=="number")return s.l()
e=s+r*l
s=b.a
if(typeof s!=="number")return s.l()
$.t().toString
if(e-1e-9<s+b.d&&s-1e-9<e+a.d){s=a.c
if(typeof s!=="number")return s.l()
i=s+p*l
s=b.c
if(typeof s!=="number")return s.l()
if(i-1e-9<s+b.f&&s-1e-9<i+a.f){h=n
g=l}}}}if(p!==0){if(p>0){f=$.b2()
s=f.a
if((c&s)===s){c=b.c
s=a.c
if(typeof s!=="number")return s.l()
$.t().toString
if(typeof c!=="number")return c.n()
s=c-(s+a.f)
l=Math.abs(s)<1e-9?0:s/p
n=f
k=!0}else k=!1}else{f=$.b3()
s=f.a
if((c&s)===s){c=b.c
if(typeof c!=="number")return c.l()
s=a.c
$.t().toString
if(typeof s!=="number")return H.b(s)
s=c+b.f-s
l=Math.abs(s)<1e-9?0:s/p
n=f
k=!0}else k=!1}if(k){if(typeof l!=="number")return l.S()
c=l<g&&l>=0&&l<=1}else c=!1
if(c){c=a.a
if(typeof l!=="number")return H.b(l)
if(typeof c!=="number")return c.l()
e=c+r*l
c=b.a
if(typeof c!=="number")return c.l()
$.t().toString
if(e-1e-9<c+b.d&&c-1e-9<e+a.d){c=a.b
if(typeof c!=="number")return c.l()
j=c+q*l
c=b.b
if(typeof c!=="number")return c.l()
if(j-1e-9<c+b.e&&c-1e-9<j+a.e){h=n
g=l}}}}if(J.J(h,o))return new Y.f0(o,a.ex(b)?C.B:C.C,0)
return new Y.f0(h,C.p,g)},
ci:function ci(a){this.b=a},
dO:function dO(){},
f0:function f0(a,b,c){this.y=a
this.a=b
this.b=c}},E={
c1:function(a,b,c,d){var s,r,q,p,o,n=new E.c0()
n.a=""
n.b=!0
s=O.lr()
n.y=s
s.bC(n.gjv(),n.gjy())
n.dy=n.dx=n.db=n.cy=n.cx=n.ch=n.Q=n.z=null
s=n.c
if(s!=c){n.d=n.c=c
n.e=null
if(s!=null)s.gt().V(0,n.gbW())
r=n.c
if(r!=null)r.gt().q(0,n.gbW())
q=new D.A("shape",s,n.c)
q.b=!0
n.au(q)}s=n.f
if(s!=d){if(s!=null)s.gt().V(0,n.gev())
p=n.f
n.f=d
if(d!=null)d.gt().q(0,n.gev())
n.dk()
q=new D.A("technique",p,n.f)
q.b=!0
n.au(q)}if(!J.J(n.r,b)){o=n.r
if(o!=null)o.gt().V(0,n.ger())
if(b!=null)b.gt().q(0,n.ger())
n.r=b
q=new D.A("mover",o,b)
q.b=!0
n.au(q)}if(a!=null)n.y.aG(0,a)
return n},
n3:function(){if(J.lh(window.navigator.vendor,"Google"))return C.F
if(J.lh(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.al(s).P(s,"Trident")||C.a.P(s,"Edge"))return C.t
if(J.lh(window.navigator.appName,"Microsoft"))return C.t
return C.G},
n4:function(){var s=window.navigator.appVersion
if(J.al(s).P(s,"Win"))return C.a1
if(C.a.P(s,"Mac"))return C.z
if(C.a.P(s,"Linux"))return C.a2
return C.a3},
oS:function(a,b){var s=new E.j4(a)
s.f7(a,b)
return s},
p_:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.mO(a,!0,!0,!0,!1)
s=W.lq()
r=s.style
r.width="100%"
r.height="100%"
J.me(a).q(0,s)
return E.mO(s,!0,!0,!0,!1)},
mO:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eW(),n=t.z,m=C.j.d0(a,"webgl2",P.mq(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.r("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oS(m,a)
n=new T.jA(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new F.hN()
n.b=n.a=0
o.r=n
n=new X.fi(a)
s=new X.it()
s.d=P.mr(t.cH)
n.b=s
s=new X.iT(n)
s.f=0
s.r=V.bf()
s.x=V.bf()
s.ch=s.Q=1
n.c=s
s=new X.iy(n)
s.r=0
s.x=V.bf()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jG(n)
s.f=V.bf()
s.r=V.bf()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.ic
n.Q=(s==null?$.ic=new E.fA(E.n3(),E.n4()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Q(q,"contextmenu",n.ghw(),!1))
n.z.push(W.Q(a,"focus",n.ghG(),!1))
n.z.push(W.Q(a,"blur",n.ghm(),!1))
n.z.push(W.Q(q,"keyup",n.gcj(),!1))
n.z.push(W.Q(q,"keydown",n.gc3(),!1))
n.z.push(W.Q(a,"mousedown",n.ghO(),!1))
n.z.push(W.Q(a,"mouseup",n.ghS(),!1))
n.z.push(W.Q(a,p,n.ghQ(),!1))
r=n.z
W.ia(a)
W.ia(a)
r.push(W.Q(a,W.ia(a),n.ghU(),!1))
n.z.push(W.Q(q,p,n.ghy(),!1))
n.z.push(W.Q(q,"mouseup",n.ghA(),!1))
n.z.push(W.Q(q,"pointerlockchange",n.ghY(),!1))
n.z.push(W.Q(a,"touchstart",n.gib(),!1))
n.z.push(W.Q(a,"touchend",n.gi7(),!1))
n.z.push(W.Q(a,"touchmove",n.gi9(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ag(Date.now(),!1)
o.db=0
o.dE()
return o},
hT:function hT(){},
c0:function c0(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bW:function bW(a){this.b=a},
cf:function cf(a){this.b=a},
fA:function fA(a,b){this.a=a
this.b=b},
j4:function j4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
eO:function eO(){this.b=null},
eW:function eW(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jC:function jC(a){this.a=a}},Z={
n2:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Float32Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.fk(b,s)},
fl:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.fk(b,s)},
aE:function(a){return new Z.a_(a)},
fk:function fk(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
kg:function kg(a){this.a=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(a){this.a=a}},D={
C:function(){var s=new D.c2()
s.d=0
return s},
hV:function hV(){},
c2:function c2(){var _=this
_.d=_.c=_.b=_.a=null},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
Z:function Z(){this.b=null},
aI:function aI(){this.b=null},
aJ:function aJ(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
c_:function c_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aM:function aM(){},
cO:function cO(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={
aL:function(){var s=new X.cN()
s.bE()
s.f=s.e=null
s.r=!1
s.y=s.x=null
s.c2(s.gfc(),s.gfe(),s.gfg())
return s},
dR:function dR(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
ba:function ba(a){this.c=a
this.b=null},
cN:function cN(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
it:function it(){this.d=this.b=this.a=null},
cQ:function cQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
iy:function iy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
iT:function iT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ez:function ez(){},
d5:function d5(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
jG:function jG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
fi:function fi(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ov:function(a){var s,r=new X.io()
if(a==null)s=new V.bA(0,0,0,1)
else s=a
r.a=s
r.b=!0
r.c=2000
r.d=!0
r.e=0
r.f=!1
s=$.mJ
if(s==null){s=V.lD(0,0,1,1)
$.mJ=s}r.r=s
return r},
lp:function lp(){},
io:function io(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
jq:function jq(){}},N={
qY:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b0.a
if(typeof a8!=="number")return a8.l()
s=a8+b0.d
r=b0.b
if(typeof r!=="number")return r.l()
q=r+b0.e
p=b0.c
if(typeof p!=="number")return p.l()
o=p+b0.f
n=a9.a
if(typeof n!=="number")return n.S()
if(n<a8){m=a8-n
l=a9.d
if(typeof l!=="number")return H.b(l)
if(m>l)return new N.U(a7,a7,0,$.O(),!1)
m/=l
k=$.at()
j=a8
i=!1
h=-1}else if(n>s){m=s-n
l=a9.d
if(typeof l!=="number")return H.b(l)
if(m<l)return new N.U(a7,a7,0,$.O(),!1)
m/=l
k=$.au()
j=s
i=!1
h=1}else{k=a7
j=k
h=j
i=!0
m=-1}l=a9.b
if(typeof l!=="number")return l.S()
if(l<r){g=r-l
f=a9.e
if(typeof f!=="number")return H.b(f)
if(g>f)return new N.U(a7,a7,0,$.O(),!1)
g/=f
e=$.b1()
d=r
i=!1
c=-1}else if(l>q){g=q-l
f=a9.e
if(typeof f!=="number")return H.b(f)
if(g<f)return new N.U(a7,a7,0,$.O(),!1)
g/=f
e=$.av()
d=q
i=!1
c=1}else{e=a7
d=e
c=d
g=-1}f=a9.c
if(typeof f!=="number")return f.S()
if(f<p){b=p-f
a=a9.f
if(typeof a!=="number")return H.b(a)
if(b>a)return new N.U(a7,a7,0,$.O(),!1)
b/=a
a0=$.b2()
a1=p
i=!1
a2=-1}else if(f>o){b=o-f
a=a9.f
if(typeof a!=="number")return H.b(a)
if(b<a)return new N.U(a7,a7,0,$.O(),!1)
b/=a
a0=$.b3()
a1=o
i=!1
a2=1}else{a0=a7
a1=a0
a2=a1
b=-1}if(i)return new N.U(new V.q(n,l,f),new V.u(a9.d,a9.e,a9.f).M().K(0),0,$.hF(),!0)
if(g>m)a3=b>g?2:1
else a3=b>m?2:0
switch(a3){case 0:a8=a9.e
if(typeof a8!=="number")return a8.j()
a4=l+a8*m
$.t().toString
if(!(r-1e-9<a4&&a4<q))return new N.U(a7,a7,0,$.O(),!1)
a8=a9.f
if(typeof a8!=="number")return a8.j()
a5=f+a8*m
if(!(p-1e-9<a5&&a5<o))return new N.U(a7,a7,0,$.O(),!1)
return new N.U(new V.q(j,a4,a5),new V.u(h,0,0),m,k,!0)
case 1:r=a9.d
if(typeof r!=="number")return r.j()
a6=n+r*g
$.t().toString
if(!(a8-1e-9<a6&&a6<s))return new N.U(a7,a7,0,$.O(),!1)
a8=a9.f
if(typeof a8!=="number")return a8.j()
a5=f+a8*g
if(!(p-1e-9<a5&&a5<o))return new N.U(a7,a7,0,$.O(),!1)
return new N.U(new V.q(a6,d,a5),new V.u(0,c,0),g,e,!0)
default:p=a9.d
if(typeof p!=="number")return p.j()
a6=n+p*b
$.t().toString
if(!(a8-1e-9<a6&&a6<s))return new N.U(a7,a7,0,$.O(),!1)
a8=a9.e
if(typeof a8!=="number")return a8.j()
a4=l+a8*b
if(!(r-1e-9<a4&&a4<q))return new N.U(a7,a7,0,$.O(),!1)
return new N.U(new V.q(a6,a4,a1),new V.u(0,0,a2),b,a0,!0)}},
dP:function dP(){},
U:function U(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=e}},V={
hZ:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.bA(s,r,q,1)},
ah:function(a){return new V.R(a)},
le:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.b2(a-b,s)
return(a<0?a+s:a)+b},
y:function(a,b,c){if(a==null)return C.a.b_("null",c)
$.t().toString
return C.a.b_(C.d.eL(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cw:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.y(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.b_(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
m3:function(a){return C.d.aC(Math.pow(2,C.i.bT(Math.log(H.cv(a))/Math.log(2))))},
mt:function(a){var s=Math.cos(a),r=Math.sin(a)
return new V.aD(s,0,-r,0,1,0,r,0,s)},
cb:function(){var s=$.my
return s==null?$.my=V.aO(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aO:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ed:function(a,b,c){return V.aO(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lA:function(a,b,c,d){return V.aO(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
mw:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aO(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
mx:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aO(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
mv:function(a,b,c){var s=c.M(),r=b.bu(s).M(),q=s.bu(r),p=new V.u(a.a,a.b,a.c),o=r.K(0).a7(p),n=q.K(0).a7(p),m=s.K(0).a7(p)
return V.aO(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bf:function(){var s=$.mC
return s==null?$.mC=new V.S(0,0):s},
ey:function(){var s=$.aR
return s==null?$.aR=new V.q(0,0,0):s},
bM:function(a,b,c){return new V.q(a,b,c)},
mH:function(a,b){return new V.eC(a.a,a.b,a.c,b.a,b.b,b.c)},
lD:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eD(a,b,c,d)},
j3:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.l()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.l()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.l()
c+=f
f=-f}return new V.d0(a,b,c,d,e,f)},
d8:function(){var s=$.k7
return s==null?$.k7=new V.u(0,0,0):s},
n0:function(){var s=$.k4
return s==null?$.k4=new V.u(-1,0,0):s},
lJ:function(){var s=$.k5
return s==null?$.k5=new V.u(0,1,0):s},
lK:function(){var s=$.k6
return s==null?$.k6=new V.u(0,0,1):s},
n1:function(){var s=$.mZ
return s==null?$.mZ=new V.u(0,0,-1):s},
mX:function(a,b,c){return new V.u(a,b,c)},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(){},
R:function R(a){this.a=a},
aD:function aD(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d0:function d0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ac:function ac(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function(a){var s=new V.jj()
s.fa(a,!0)
return s},
jj:function jj(){this.b=this.a=null},
jl:function jl(a){this.a=a},
jk:function jk(a){this.a=a}},U={
dT:function(){var s=new U.i_()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
bB:function(a){var s=new U.cB()
s.a=a
return s},
ip:function(a){var s=new U.c5()
s.bE()
s.bC(s.gfi(),s.gi1())
s.aG(0,a)
s.e=null
s.f=V.cb()
s.r=0
return s},
i_:function i_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){this.b=this.a=null},
c5:function c5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
c7:function c7(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
d1:function d1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dZ:function dZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
oC:function(a,b){var s=a.bv,r=new A.iA(b,s)
r.f9(b,s)
r.f5(a,b)
return r},
oD:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gJ(a5)+a6.gJ(a6)+a7.gJ(a7)+a8.gJ(a8)+a9.gJ(a9)+b0.gJ(b0)+b1.gJ(b1)+b2.gJ(b2)+b3.gJ(b3)+"_"
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
b=$.Y()
if(h){s=$.a8()
b=new Z.a_(b.a|s.a)}if(g){s=$.bx()
b=new Z.a_(b.a|s.a)}if(f){s=$.a0()
b=new Z.a_(b.a|s.a)}if(e){s=$.bw()
b=new Z.a_(b.a|s.a)}return new A.iD(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kX:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kY:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kX(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.ht(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
q9:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kX(b,r,"emission")
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
q5:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kY(b,r,"ambient")
b.a+="\n"},
q7:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kY(b,r,"diffuse")
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
qa:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kY(b,r,"invDiffuse")
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
qg:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kY(b,r,"specular")
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
qc:function(a,b){var s,r,q
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
qe:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kX(b,r,"reflect")
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
qf:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kX(b,r,"refract")
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
q6:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.ht(r)
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
if(typeof s!=="number")return s.al()
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
c.a=p+"\n"}o=[]
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
o=[]
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
n=[]
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
q8:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.ht(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.al()
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
p=c.a+="uniform "+q+" "+r+"s["+k+"];\n"
if(s)for(o=0;o<k;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
m=[]
p=a.b
if(p.a||p.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(p.a||p.b||!1)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.u(l," + ")+");\n"}else c.a+="   highLight = "+C.b.u(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.u(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<k;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}k=s}else{k=c.a+="   for(int i = 0; i < "+k+"; ++i)\n"
k+="   {\n"
c.a=k
k+="      if(i >= "+r+"Count) break;\n"
c.a=k
k+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=k
k=c.a=k+"   }\n"}k+="   return lightAccum;\n"
c.a=k
k+="}\n"
c.a=k
c.a=k+"\n"},
qd:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.ht(r)
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
if(typeof s!=="number")return s.al()
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
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.b.u(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(p.a||p.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
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
qh:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.ht(r)
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
if(typeof s!=="number")return s.al()
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
if(m){s=$.ic
if(s==null)s=$.ic=new E.fA(E.n3(),E.n4())
p=c.a
if(s.b===C.z){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.b.u(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(s.a||s.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
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
qb:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=[]
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
qi:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.V("")
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
A.q9(a,h)
A.q5(a,h)
A.q7(a,h)
A.qa(a,h)
A.qg(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.qe(a,h)
A.qf(a,h)}A.qc(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q6(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q8(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.qd(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.qh(a,o[m],h)
A.qb(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
if(s){s=o+"   vec3 norm = normal();\n"
h.a=s}else s=o
if(r)s=h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=[]
if(p){h.a=s+u.o
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
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ax(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ax(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ax(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ax(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.u(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
qj:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bi+"];\n"
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
ql:function(a,b){var s
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
qk:function(a,b){var s
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
qn:function(a,b){var s,r
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
qo:function(a,b){var s,r
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
qm:function(a,b){var s
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
qp:function(a,b){var s
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
ht:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.ax(a,1)},
lI:function(a,b,c,d,e){var s=new A.jM(a,c,e)
s.f=d
P.iv(d,0,!1)
return s},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b){var _=this
_.kl=_.e0=_.bR=_.bv=_.bi=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kt=_.ks=_.kr=_.cL=_.cK=_.cJ=_.cI=_.cH=_.cG=_.cF=_.cE=_.kq=_.ec=_.eb=_.kp=_.ea=_.e9=_.e8=_.ko=_.e7=_.e6=_.e5=_.kn=_.e4=_.e3=_.km=_.e2=_.e1=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bi=b5
_.bv=b6
_.bR=b7},
f5:function f5(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
f6:function f6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
f9:function f9(a,b,c,d,e,f,g,h,i,j){var _=this
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
fc:function fc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eI:function eI(){},
jL:function jL(){},
jR:function jR(a){this.a=a},
f2:function f2(a,b,c){this.a=a
this.c=b
this.d=c},
jO:function jO(a,b,c){this.a=a
this.c=b
this.d=c},
jP:function jP(a,b,c){this.a=a
this.c=b
this.d=c},
jQ:function jQ(a,b,c){this.a=a
this.c=b
this.d=c},
jM:function jM(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
f1:function f1(a,b,c){this.a=a
this.c=b
this.d=c},
jN:function jN(a,b,c){this.a=a
this.c=b
this.d=c},
f3:function f3(a,b,c){this.a=a
this.c=b
this.d=c},
f4:function f4(a,b,c){this.a=a
this.c=b
this.d=c},
jS:function jS(a,b,c){this.a=a
this.c=b
this.d=c},
f7:function f7(a,b,c){this.a=a
this.c=b
this.d=c},
f8:function f8(a,b,c){this.a=a
this.c=b
this.d=c},
fa:function fa(a,b,c){this.a=a
this.c=b
this.d=c},
fb:function fb(a,b,c){this.a=a
this.c=b
this.d=c}},T={jw:function jw(){},jx:function jx(){},jy:function jy(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},jz:function jz(){var _=this
_.y=_.d=_.c=_.b=_.a=null},jA:function jA(a){var _=this
_.a=a
_.e=_.d=_.b=null},jB:function jB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,K,F,O,Y,E,Z,D,X,N,V,U,M,A,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lw.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gR:function(a){return H.d_(a)},
i:function(a){return"Instance of '"+H.f(H.eA(a))+"'"}}
J.ir.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159}}
J.c8.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$ia5:1}
J.b9.prototype={
gR:function(a){return 0},
i:function(a){return String(a)},
$imn:1}
J.eu.prototype={}
J.bl.prototype={}
J.aA.prototype={
i:function(a){var s=a[$.nM()]
if(s==null)return this.f2(a)
return"JavaScript function for "+H.f(J.aw(s))}}
J.ao.prototype={
jN:function(a,b){var s
if(!!a.fixed$length)H.p(P.x("removeAt"))
s=a.length
if(b>=s)throw H.d(P.eB(b,null))
return a.splice(b,1)[0]},
V:function(a,b){var s
if(!!a.fixed$length)H.p(P.x("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
aG:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.x("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
H:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.d(P.bZ(a))}},
u:function(a,b){var s,r,q=P.iv(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
jp:function(a){return this.u(a,"")},
jj:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.d(P.bZ(a))}return s},
jk:function(a,b,c){return this.jj(a,b,c,t.z)},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
gaZ:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.d(H.ox())},
bp:function(a,b){if(!!a.immutable$list)H.p(P.x("sort"))
H.oY(a,b==null?J.pX():b)},
eY:function(a){return this.bp(a,null)},
P:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.lt(a,"[","]")},
gU:function(a){return new J.a9(a,a.length)},
gR:function(a){return H.d_(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.x("set length"))
a.length=b},
h:function(a,b){if(!H.bp(b))throw H.d(H.bt(a,b))
if(b>=a.length||b<0)throw H.d(H.bt(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.x("indexed set"))
if(!H.bp(b))throw H.d(H.bt(a,b))
if(b>=a.length||b<0)throw H.d(H.bt(a,b))
a[b]=c},
$ij:1,
$ih:1,
$ik:1}
J.e6.prototype={}
J.a9.prototype={
gF:function(a){return this.d},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.d(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b8.prototype={
aA:function(a,b){var s
if(typeof b!="number")throw H.d(H.ae(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbV(b)
if(this.gbV(a)===s)return 0
if(this.gbV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbV:function(a){return a===0?1/a<0:a<0},
aC:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.d(P.x(""+a+".toInt()"))},
bT:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.d(P.x(""+a+".floor()"))},
aB:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
j_:function(a,b,c){if(C.c.aA(b,c)>0)throw H.d(H.ae(b))
if(this.aA(a,b)<0)return b
if(this.aA(a,c)>0)return c
return a},
eL:function(a,b){var s
if(b>20)throw H.d(P.a6(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbV(a))return"-"+s
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
b2:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
f3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dI(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dI(a,b)},
dI:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.d(P.x("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
eX:function(a,b){if(b<0)throw H.d(H.ae(b))
return b>31?0:a<<b>>>0},
be:function(a,b){var s
if(a>0)s=this.dH(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
iy:function(a,b){if(b<0)throw H.d(H.ae(b))
return this.dH(a,b)},
dH:function(a,b){return b>31?0:a>>>b},
$iX:1}
J.cM.prototype={
cY:function(a,b){var s=this.eX(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
$in:1}
J.cL.prototype={}
J.aK.prototype={
X:function(a,b){if(b<0)throw H.d(H.bt(a,b))
if(b>=a.length)H.p(H.bt(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.bt(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!="string")throw H.d(P.lm(b,null,null))
return a+b},
bm:function(a,b,c,d){var s,r,q=P.bg(b,c,a.length)
if(!H.bp(q))H.p(H.ae(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ad:function(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a6(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
ao:function(a,b){return this.ad(a,b,0)},
v:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.eB(b,null))
if(b>c)throw H.d(P.eB(b,null))
if(c>a.length)throw H.d(P.eB(c,null))
return a.substring(b,c)},
ax:function(a,b){return this.v(a,b,null)},
j:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
b_:function(a,b){var s=b-a.length
if(s<=0)return a
return this.j(" ",s)+a},
bU:function(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a6(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ei:function(a,b){return this.bU(a,b,0)},
j3:function(a,b,c){var s=a.length
if(c>s)throw H.d(P.a6(c,0,s,null,null))
return H.nH(a,b,c)},
P:function(a,b){return this.j3(a,b,0)},
aA:function(a,b){var s
if(typeof b!="string")throw H.d(H.ae(b))
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
gm:function(a){return a.length},
$iB:1}
H.e8.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.P.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)}}
H.j.prototype={}
H.c9.prototype={
gF:function(a){var s=this.d
return s},
w:function(){var s,r=this,q=r.a,p=J.al(q),o=p.gm(q)
if(r.b!=o)throw H.d(P.bZ(q))
s=r.c
if(typeof o!=="number")return H.b(o)
if(s>=o){r.d=null
return!1}r.d=p.G(q,s);++r.c
return!0}}
H.bH.prototype={
gU:function(a){return new H.cT(J.b4(this.a),this.b)},
gm:function(a){return J.b5(this.a)},
G:function(a,b){return this.b.$1(J.li(this.a,b))}}
H.cH.prototype={$ij:1}
H.cT.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gF(r))
return!0}s.a=null
return!1},
gF:function(a){var s=this.a
return s}}
H.d9.prototype={
gU:function(a){return new H.fm(J.b4(this.a),this.b)}}
H.fm.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gF(s)))return!0
return!1},
gF:function(a){var s=this.a
return s.gF(s)}}
H.cI.prototype={}
H.ff.prototype={
k:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.cj.prototype={}
H.cC.prototype={
i:function(a){return P.lz(this)},
k:function(a,b,c){H.or()},
$iG:1}
H.cD.prototype={
gm:function(a){return this.a},
cC:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cC(0,b))return null
return this.ds(b)},
ds:function(a){return this.b[a]},
H:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.ds(q))}}}
H.jJ.prototype={
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
H.eo.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.e7.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fe.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iU.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.dn.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaU:1}
H.bX.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nK(r==null?"unknown":r)+"'"},
gkd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.jr.prototype={}
H.jo.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nK(s)+"'"}}
H.cz.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cz))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.d_(this.a)
else s=typeof r!=="object"?J.ab(r):H.d_(r)
return(s^H.d_(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eA(s))+"'")}}
H.eG.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.w.prototype={
gm:function(a){return this.a},
gaY:function(a){return new H.bb(this)},
gka:function(a){return H.oB(new H.bb(this),new H.is(this))},
cC:function(a,b){var s=this.b
if(s==null)return!1
return this.fQ(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bH(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bH(p,b)
q=r==null?n:r.b
return q}else return o.jo(b)},
jo:function(a){var s,r,q=this.d
if(q==null)return null
s=this.dt(q,J.ab(a)&0x3ffffff)
r=this.ej(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.df(s==null?m.b=m.cg():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.df(r==null?m.c=m.cg():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.cg()
p=J.ab(b)&0x3ffffff
o=m.dt(q,p)
if(o==null)m.co(q,p,[m.ci(b,c)])
else{n=m.ej(o,b)
if(n>=0)o[n].b=c
else o.push(m.ci(b,c))}}},
H:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.d(P.bZ(s))
r=r.c}},
df:function(a,b,c){var s=this.bH(a,b)
if(s==null)this.co(a,b,this.ci(b,c))
else s.b=c},
ci:function(a,b){var s=this,r=new H.iu(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
ej:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.lz(this)},
bH:function(a,b){return a[b]},
dt:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
fU:function(a,b){delete a[b]},
fQ:function(a,b){return this.bH(a,b)!=null},
cg:function(){var s="<non-identifier-key>",r=Object.create(null)
this.co(r,s,r)
this.fU(r,s)
return r}}
H.is.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.pV(this.a).af("2(1)")}}
H.iu.prototype={}
H.bb.prototype={
gm:function(a){return this.a.a},
gU:function(a){var s=this.a,r=new H.ea(s,s.r)
r.c=s.e
return r}}
H.ea.prototype={
gF:function(a){return this.d},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.d(P.bZ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.l4.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.l5.prototype={
$2:function(a,b){return this.a(a,b)}}
H.l6.prototype={
$1:function(a){return this.a(a)}}
H.e5.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imI:1}
H.cW.prototype={$icW:1}
H.T.prototype={$iT:1}
H.ce.prototype={
gm:function(a){return a.length},
$iv:1}
H.bJ.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aZ(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$ik:1}
H.cX.prototype={
k:function(a,b,c){H.aZ(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$ik:1}
H.ei.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.ej.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.ek.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.el.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.em.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.cY.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.bK.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aZ(b,a,a.length)
return a[b]},
$ibK:1,
$ibQ:1}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.ap.prototype={
af:function(a){return H.hg(v.typeUniverse,this,a)},
di:function(a){return H.ps(v.typeUniverse,this,a)}}
H.fG.prototype={}
H.fB.prototype={
i:function(a){return this.a}}
H.dt.prototype={}
P.ki.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:10}
P.kh.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.kj.prototype={
$0:function(){this.a.$0()}}
P.kk.prototype={
$0:function(){this.a.$0()}}
P.ds.prototype={
fl:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.br(new P.kM(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
fm:function(a,b){if(self.setTimeout!=null)self.setInterval(H.br(new P.kL(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$id4:1}
P.kM.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kL.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.f3(s,o)}q.c=p
r.d.$1(q)}}
P.co.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.cp.prototype={
gF:function(a){var s=this.c
if(s==null)return this.b
return s.gF(s)},
w:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.w())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.co){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b4(s)
if(o instanceof P.cp){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dp.prototype={
gU:function(a){return new P.cp(this.a())}}
P.fs.prototype={
j2:function(a){var s,r
P.ln(a,"error")
s=this.a
if(s.a!==0)throw H.d(P.mM("Future already completed"))
r=P.mf(a)
s.fE(a,r)}}
P.da.prototype={
j1:function(a,b){var s=this.a
if(s.a!==0)throw H.d(P.mM("Future already completed"))
s.fD(b)}}
P.fH.prototype={
js:function(a){if((this.c&15)!==6)return!0
return this.b.b.cX(this.d,a.a)},
jn:function(a){var s=this.e,r=this.b.b
if(t.U.b(s))return r.jT(s,a.a,a.b)
else return r.cX(s,a.a)}}
P.aF.prototype={
eK:function(a,b,c){var s,r=$.L
if(r!==C.e)b=b!=null?P.qs(b,r):b
s=new P.aF($.L,c.af("aF<0>"))
this.dg(new P.fH(s,b==null?1:3,a,b))
return s},
k_:function(a,b){return this.eK(a,null,b)},
dg:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.dg(a)
return}r.a=s
r.c=q.c}P.ct(null,null,r.b,new P.km(r,a))}},
dC:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.dC(a)
return}m.a=n
m.c=s.c}l.a=m.bL(a)
P.ct(null,null,m.b,new P.ku(l,m))}},
bK:function(){var s=this.c
this.c=null
return this.bL(s)},
bL:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fN:function(a){var s,r=this,q=r.$ti
if(q.af("c4<1>").b(a))if(q.b(a))P.kp(a,r)
else P.n6(a,r)
else{s=r.bK()
r.a=4
r.c=a
P.cn(r,s)}},
c8:function(a,b){var s=this,r=s.bK(),q=P.hJ(a,b)
s.a=8
s.c=q
P.cn(s,r)},
fD:function(a){if(this.$ti.af("c4<1>").b(a)){this.fK(a)
return}this.fF(a)},
fF:function(a){this.a=1
P.ct(null,null,this.b,new P.ko(this,a))},
fK:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.ct(null,null,s.b,new P.kt(s,a))}else P.kp(a,s)
return}P.n6(a,s)},
fE:function(a,b){this.a=1
P.ct(null,null,this.b,new P.kn(this,a,b))},
$ic4:1}
P.km.prototype={
$0:function(){P.cn(this.a,this.b)}}
P.ku.prototype={
$0:function(){P.cn(this.b,this.a.a)}}
P.kq.prototype={
$1:function(a){var s=this.a
s.a=0
s.fN(a)},
$S:10}
P.kr.prototype={
$2:function(a,b){this.a.c8(a,b)},
$S:18}
P.ks.prototype={
$0:function(){this.a.c8(this.b,this.c)}}
P.ko.prototype={
$0:function(){var s=this.a,r=s.bK()
s.a=4
s.c=this.b
P.cn(s,r)}}
P.kt.prototype={
$0:function(){P.kp(this.b,this.a)}}
P.kn.prototype={
$0:function(){this.a.c8(this.b,this.c)}}
P.kx.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.eJ(q.d)}catch(p){s=H.as(p)
r=H.bS(p)
if(m.c){q=m.b.a.c.a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.hJ(s,r)
o.b=!0
return}if(l instanceof P.aF&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.e.b(l)){n=m.b.a
q=m.a
q.c=l.k_(new P.ky(n),t.z)
q.b=!1}}}
P.ky.prototype={
$1:function(a){return this.a},
$S:19}
P.kw.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.cX(p.d,this.b)}catch(o){s=H.as(o)
r=H.bS(o)
q=this.a
q.c=P.hJ(s,r)
q.b=!0}}}
P.kv.prototype={
$0:function(){var s,r,q,p,o,n,m,l,k=this
try{s=k.a.a.c
p=k.b
if(p.a.js(s)&&p.a.e!=null){p.c=p.a.jn(s)
p.b=!1}}catch(o){r=H.as(o)
q=H.bS(o)
p=k.a.a.c
n=p.a
m=r
l=k.b
if(n==null?m==null:n===m)l.c=p
else l.c=P.hJ(r,q)
l.b=!0}}}
P.fo.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.d4.prototype={}
P.dL.prototype={
i:function(a){return H.f(this.a)},
$iF:1,
gbD:function(){return this.b}}
P.kS.prototype={}
P.l_.prototype={
$0:function(){var s=H.d(this.a)
s.stack=J.aw(this.b)
throw s}}
P.kD.prototype={
jV:function(a){var s,r,q,p=null
try{if(C.e===$.L){a.$0()
return}P.nq(p,p,this,a)}catch(q){s=H.as(q)
r=H.bS(q)
P.kZ(p,p,this,s,r)}},
jX:function(a,b){var s,r,q,p=null
try{if(C.e===$.L){a.$1(b)
return}P.nr(p,p,this,a,b)}catch(q){s=H.as(q)
r=H.bS(q)
P.kZ(p,p,this,s,r)}},
jY:function(a,b){return this.jX(a,b,t.z)},
iY:function(a){return new P.kF(this,a)},
iX:function(a){return this.iY(a,t.z)},
cw:function(a){return new P.kE(this,a)},
dS:function(a,b){return new P.kG(this,a,b)},
jS:function(a){if($.L===C.e)return a.$0()
return P.nq(null,null,this,a)},
eJ:function(a){return this.jS(a,t.z)},
jW:function(a,b){if($.L===C.e)return a.$1(b)
return P.nr(null,null,this,a,b)},
cX:function(a,b){return this.jW(a,b,t.z,t.z)},
jU:function(a,b,c){if($.L===C.e)return a.$2(b,c)
return P.qt(null,null,this,a,b,c)},
jT:function(a,b,c){return this.jU(a,b,c,t.z,t.z,t.z)}}
P.kF.prototype={
$0:function(){return this.a.eJ(this.b)}}
P.kE.prototype={
$0:function(){return this.a.jV(this.b)}}
P.kG.prototype={
$1:function(a){return this.a.jY(this.b,a)},
$S:function(){return this.c.af("~(0)")}}
P.dc.prototype={
gU:function(a){var s=new P.dd(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
P:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.fM(b)
return r}},
fM:function(a){var s=this.d
if(s==null)return!1
return this.cd(s[this.c9(a)],a)>=0},
q:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dm(s==null?q.b=P.lM():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dm(r==null?q.c=P.lM():r,b)}else return q.fo(0,b)},
fo:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lM()
s=q.c9(b)
r=p[s]
if(r==null)p[s]=[q.c7(b)]
else{if(q.cd(r,b)>=0)return!1
r.push(q.c7(b))}return!0},
V:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.io(this.c,b)
else return this.im(0,b)},
im:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c9(b)
r=n[s]
q=o.cd(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dK(p)
return!0},
dm:function(a,b){if(a[b]!=null)return!1
a[b]=this.c7(b)
return!0},
io:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dK(s)
delete a[b]
return!0},
dw:function(){this.r=1073741823&this.r+1},
c7:function(a){var s,r=this,q=new P.kC(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dw()
return q},
dK:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dw()},
c9:function(a){return J.ab(a)&1073741823},
cd:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.kC.prototype={}
P.dd.prototype={
gF:function(a){return this.d},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.d(P.bZ(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cK.prototype={}
P.cP.prototype={$ij:1,$ih:1,$ik:1}
P.D.prototype={
gU:function(a){return new H.c9(a,this.gm(a))},
G:function(a,b){return this.h(a,b)},
gek:function(a){return this.gm(a)===0},
k0:function(a){var s,r,q,p,o=this
if(o.gek(a)){s=J.lu(0)
return s}r=o.h(a,0)
q=P.iv(o.gm(a),r,!0)
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.b(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
ed:function(a,b,c,d){var s
P.bg(b,c,this.gm(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.lt(a,"[","]")}}
P.cR.prototype={}
P.iz.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:20}
P.aC.prototype={
H:function(a,b){var s,r
for(s=J.b4(this.gaY(a));s.w();){r=s.gF(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.b5(this.gaY(a))},
i:function(a){return P.lz(a)},
$iG:1}
P.hh.prototype={
k:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.cS.prototype={
h:function(a,b){return J.cy(this.a,b)},
k:function(a,b,c){J.lg(this.a,b,c)},
H:function(a,b){J.lk(this.a,b)},
gm:function(a){return J.b5(this.a)},
i:function(a){return J.aw(this.a)},
$iG:1}
P.ck.prototype={}
P.dk.prototype={
i:function(a){return P.lt(this,"{","}")},
G:function(a,b){var s,r,q,p="index"
P.ln(b,p)
P.mG(b,p)
for(s=P.pc(this,this.r),r=0;s.w();){q=s.d
if(b===r)return q;++r}throw H.d(P.K(b,this,p,null,r))},
$ij:1,
$ih:1}
P.de.prototype={}
P.dx.prototype={}
P.k1.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.as(r)}return null}}
P.k2.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.as(r)}return null}}
P.hR.prototype={
ju:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bg(a2,a3,a1.length)
if(a3==null)throw H.d(P.lC("Invalid range"))
s=$.o4()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.l3(C.a.D(a1,l))
h=H.l3(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.c(s,g)
f=s[g]
if(f>=0){g=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.V("")
e=p}else e=p
d=e.a+=C.a.v(a1,q,r)
e.a=d+H.aS(k)
q=l
continue}}throw H.d(P.a4("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.v(a1,q,a3)
d=e.length
if(o>=0)P.mg(a1,n,a3,o,m,d)
else{c=C.c.b2(d-1,4)+1
if(c===1)throw H.d(P.a4(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.bm(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.mg(a1,n,a3,o,m,b)
else{c=C.c.b2(b,4)
if(c===1)throw H.d(P.a4(a,a1,a3))
if(c>1)a1=C.a.bm(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hS.prototype={}
P.dS.prototype={}
P.dV.prototype={}
P.ib.prototype={}
P.k_.prototype={
gjh:function(){return C.P}}
P.k3.prototype={
cD:function(a){var s,r,q,p=P.bg(0,null,a.length)
if(p==null)throw H.d(P.lC("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kR(r)
if(q.fW(a,0,p)!==p){J.oa(a,p-1)
q.ct()}return new Uint8Array(r.subarray(0,H.pN(0,q.b,r.length)))}}
P.kR.prototype={
ct:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
iQ:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.c(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.c(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=128|s&63
return!0}else{n.ct()
return!1}},
fW:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.iQ(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.ct()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.c(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.c(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=128|p&63}}}return q}}
P.k0.prototype={
cD:function(a){var s=this.a,r=P.p2(s,a,0,null)
if(r!=null)return r
return new P.kQ(s).j4(a,0,null,!0)}}
P.kQ.prototype={
j4:function(a,b,c,d){var s,r,q,p,o=this,n=P.bg(b,c,J.b5(a))
if(b===n)return""
s=P.pH(a,b,n)
if(typeof n!=="number")return n.n()
n-=b
r=o.ca(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pI(q)
o.b=0
throw H.d(P.a4(p,a,b+o.c))}return r},
ca:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.n()
if(c-b>1000){s=C.c.a2(b+c,2)
r=q.ca(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ca(a,s,c,d)}return q.j7(a,b,c,d)},
j7:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.V(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aS(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aS(j)
break
case 65:g.a+=H.aS(j);--f
break
default:p=g.a+=H.aS(j)
g.a=p+H.aS(j)
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
g.a+=H.aS(a[l])}else g.a+=P.eT(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aS(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.b_.prototype={}
P.ag.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
aA:function(a,b){return C.c.aA(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.be(s,30))&1073741823},
i:function(a){var s=this,r=P.os(H.oO(s)),q=P.dX(H.oM(s)),p=P.dX(H.oI(s)),o=P.dX(H.oJ(s)),n=P.dX(H.oL(s)),m=P.dX(H.oN(s)),l=P.ot(H.oK(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.ar.prototype={}
P.ay.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aA:function(a,b){return C.c.aA(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i9(),o=this.a
if(o<0)return"-"+new P.ay(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.i8().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.F.prototype={
gbD:function(){return H.bS(this.$thrownJsError)}}
P.dK.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ie(s)
return"Assertion failed"}}
P.ep.prototype={
i:function(a){return"Throw of null."}}
P.am.prototype={
gcc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcb:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gcc()+o+m
if(!q.a)return l
s=q.gcb()
r=P.ie(q.b)
return l+s+": "+r}}
P.ch.prototype={
gcc:function(){return"RangeError"},
gcb:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e3.prototype={
gcc:function(){return"RangeError"},
gcb:function(){var s,r=this.b
if(typeof r!=="number")return r.S()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fg.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fd.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.d3.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dU.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ie(s)+"."}}
P.es.prototype={
i:function(a){return"Out of Memory"},
gbD:function(){return null},
$iF:1}
P.d2.prototype={
i:function(a){return"Stack Overflow"},
gbD:function(){return null},
$iF:1}
P.dW.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fD.prototype={
i:function(a){return"Exception: "+this.a}}
P.im.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.v(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
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
i=""}h=C.a.v(d,k,l)
return f+j+h+i+"\n"+C.a.j(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.n.prototype={}
P.h.prototype={
gm:function(a){var s,r=this.gU(this)
for(s=0;r.w();)++s
return s},
G:function(a,b){var s,r,q
P.mG(b,"index")
for(s=this.gU(this),r=0;s.w();){q=s.gF(s)
if(b===r)return q;++r}throw H.d(P.K(b,this,"index",null,r))},
i:function(a){return P.ow(this,"(",")")}}
P.e4.prototype={}
P.k.prototype={$ij:1,$ih:1}
P.G.prototype={}
P.a5.prototype={
gR:function(a){return P.E.prototype.gR.call(C.l,this)},
i:function(a){return"null"}}
P.X.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
p:function(a,b){return this===b},
gR:function(a){return H.d_(this)},
i:function(a){return"Instance of '"+H.f(H.eA(this))+"'"},
toString:function(){return this.i(this)}}
P.aU.prototype={}
P.h7.prototype={
i:function(a){return""},
$iaU:1}
P.B.prototype={}
P.V.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jY.prototype={
$2:function(a,b){var s,r,q,p=J.m0(b).ei(b,"=")
if(p===-1){if(b!=="")J.lg(a,P.lV(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.v(b,0,p)
r=C.a.ax(b,p+1)
q=this.a
J.lg(a,P.lV(s,0,s.length,q,!0),P.lV(r,0,r.length,q,!0))}return a}}
P.jV.prototype={
$2:function(a,b){throw H.d(P.a4("Illegal IPv4 address, "+a,this.a,b))}}
P.jW.prototype={
$2:function(a,b){throw H.d(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jX.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.dE(C.a.v(this.b,a,b),16)
if(typeof s!=="number")return s.S()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bR.prototype={
gcr:function(){var s,r,q,p=this,o=p.x
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
else o=H.p(H.ly("Field '_text' has been assigned during initialization."))}return o},
gR:function(a){var s=this,r=s.z
if(r==null){r=C.a.gR(s.gcr())
if(s.z==null)s.z=r
else r=H.p(H.ly("Field 'hashCode' has been assigned during initialization."))}return r},
geF:function(){var s=this,r=s.Q
if(r==null){r=new P.ck(P.mU(s.gby(s)),t.S)
if(s.Q==null)s.Q=r
else r=H.p(H.ly("Field 'queryParameters' has been assigned during initialization."))}return r},
geO:function(){return this.b},
gcQ:function(a){var s=this.c
if(s==null)return""
if(C.a.ao(s,"["))return C.a.v(s,1,s.length-1)
return s},
gbX:function(a){var s=this.d
return s==null?P.ng(this.a):s},
gby:function(a){var s=this.f
return s==null?"":s},
gcP:function(){var s=this.r
return s==null?"":s},
eG:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.ao(s,"/"))s="/"+s
q=s
p=P.lT(null,0,0,b)
return new P.bR(n,l,j,k,q,p,o.r)},
gee:function(){return this.c!=null},
geh:function(){return this.f!=null},
gef:function(){return this.r!=null},
i:function(a){return this.gcr()},
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gc1()&&s.c!=null===b.gee()&&s.b===b.geO()&&s.gcQ(s)===b.gcQ(b)&&s.gbX(s)===b.gbX(b)&&s.e===b.gey(b)&&s.f!=null===b.geh()&&s.gby(s)===b.gby(b)&&s.r!=null===b.gef()&&s.gcP()===b.gcP()},
$ifh:1,
gc1:function(){return this.a},
gey:function(a){return this.e}}
P.kO.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kP(C.h,a,C.f,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kP(C.h,b,C.f,!0))}}}
P.kN.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b4(b),r=this.a;s.w();)r.$2(a,s.gF(s))}}
P.jU.prototype={
geN:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bU(s,"?",m)
q=s.length
if(r>=0){p=P.dy(s,r+1,q,C.n,!1)
q=r}else p=n
m=o.c=new P.fv("data","",n,n,P.dy(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kU.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kT.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.ob(s,0,96,b)
return s},
$S:21}
P.kV.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.kW.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.fZ.prototype={
gee:function(){return this.c>0},
geg:function(){return this.c>0&&this.d+1<this.e},
geh:function(){return this.f<this.r},
gef:function(){return this.r<this.a.length},
gdu:function(){return this.b===4&&C.a.ao(this.a,"http")},
gdv:function(){return this.b===5&&C.a.ao(this.a,"https")},
gc1:function(){var s=this.x
return s==null?this.x=this.fO():s},
fO:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gdu())return"http"
if(s.gdv())return"https"
if(r===4&&C.a.ao(s.a,"file"))return"file"
if(r===7&&C.a.ao(s.a,"package"))return"package"
return C.a.v(s.a,0,r)},
geO:function(){var s=this.c,r=this.b+3
return s>r?C.a.v(this.a,r,s-1):""},
gcQ:function(a){var s=this.c
return s>0?C.a.v(this.a,s,this.d):""},
gbX:function(a){var s=this
if(s.geg())return P.dE(C.a.v(s.a,s.d+1,s.e),null)
if(s.gdu())return 80
if(s.gdv())return 443
return 0},
gey:function(a){return C.a.v(this.a,this.e,this.f)},
gby:function(a){var s=this.f,r=this.r
return s<r?C.a.v(this.a,s+1,r):""},
gcP:function(){var s=this.r,r=this.a
return s<r.length?C.a.ax(r,s+1):""},
geF:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.ck(P.mU(s.gby(s)),t.S)},
eG:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gc1(),k=l==="file",j=n.c,i=j>0?C.a.v(n.a,n.b+3,j):"",h=n.geg()?n.gbX(n):m
j=n.c
if(j>0)s=C.a.v(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.v(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.ao(r,"/"))r="/"+r
p=P.lT(m,0,0,b)
q=n.r
o=q<j.length?C.a.ax(j,q+1):m
return new P.bR(l,i,s,h,r,p,o)},
gR:function(a){var s=this.y
return s==null?this.y=C.a.gR(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifh:1}
P.fv.prototype={}
W.m.prototype={}
W.hG.prototype={
gm:function(a){return a.length}}
W.dI.prototype={
i:function(a){return String(a)}}
W.dJ.prototype={
i:function(a){return String(a)}}
W.by.prototype={$iby:1}
W.bz.prototype={
d0:function(a,b,c){if(c!=null)return a.getContext(b,P.qF(c))
return a.getContext(b)},
eS:function(a,b){return this.d0(a,b,null)},
$ibz:1}
W.ax.prototype={
gm:function(a){return a.length}}
W.i0.prototype={
gm:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cE.prototype={
gm:function(a){return a.length}}
W.i1.prototype={}
W.an.prototype={}
W.aH.prototype={}
W.i2.prototype={
gm:function(a){return a.length}}
W.i3.prototype={
gm:function(a){return a.length}}
W.i4.prototype={
gm:function(a){return a.length}}
W.i6.prototype={
i:function(a){return String(a)}}
W.cF.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.cG.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gb1(a))+" x "+H.f(this.gaX(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.bv(b)
s=a.left==s.gah(b)&&a.top==s.gbY(b)&&this.gb1(a)==s.gb1(b)&&this.gaX(a)==s.gaX(b)}else s=!1
return s},
gR:function(a){return W.n8(J.ab(a.left),J.ab(a.top),J.ab(this.gb1(a)),J.ab(this.gaX(a)))},
gdT:function(a){return a.bottom},
gaX:function(a){return a.height},
gah:function(a){return a.left},
gaj:function(a){return a.right},
gbY:function(a){return a.top},
gb1:function(a){return a.width},
$iaj:1}
W.dY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.i7.prototype={
gm:function(a){return a.length}}
W.fr.prototype={
gek:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
q:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var s=this.k0(this)
return new J.a9(s,s.length)}}
W.N.prototype={
gdV:function(a){return new W.fr(a,a.children)},
gdW:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.S()
if(q<0)q=-q*0
if(typeof p!=="number")return p.S()
if(p<0)p=-p*0
return new P.aj(s,r,q,p,t.q)},
i:function(a){return a.localName},
$iN:1}
W.i.prototype={$ii:1}
W.e.prototype={
iS:function(a,b,c,d){if(c!=null)this.fq(a,b,c,!1)},
fq:function(a,b,c,d){return a.addEventListener(b,H.br(c,1),!1)},
$ie:1}
W.az.prototype={$iaz:1}
W.c3.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1,
$ic3:1}
W.e_.prototype={
gm:function(a){return a.length}}
W.e1.prototype={
gm:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.iq.prototype={
gm:function(a){return a.length}}
W.bC.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.bD.prototype={
gdY:function(a){return a.data},
$ibD:1}
W.c6.prototype={$ic6:1}
W.bF.prototype={$ibF:1}
W.ix.prototype={
i:function(a){return String(a)}}
W.iQ.prototype={
gm:function(a){return a.length}}
W.cc.prototype={$icc:1}
W.ee.prototype={
h:function(a,b){return P.bs(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bs(s.value[1]))}},
gaY:function(a){var s=[]
this.H(a,new W.iR(s))
return s},
gm:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iG:1}
W.iR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ef.prototype={
h:function(a,b){return P.bs(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bs(s.value[1]))}},
gaY:function(a){var s=[]
this.H(a,new W.iS(s))
return s},
gm:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iG:1}
W.iS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.bc.prototype={$ibc:1}
W.eg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.ai.prototype={$iai:1}
W.fq.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gU:function(a){var s=this.a.childNodes
return new W.cJ(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.z.prototype={
jQ:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.o8(s,b,a)}catch(q){H.as(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.f1(a):s},
ip:function(a,b,c){return a.replaceChild(b,c)},
$iz:1}
W.cZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.be.prototype={
gm:function(a){return a.length},
$ibe:1}
W.ex.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.eF.prototype={
h:function(a,b){return P.bs(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bs(s.value[1]))}},
gaY:function(a){var s=[]
this.H(a,new W.j8(s))
return s},
gm:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iG:1}
W.j8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eH.prototype={
gm:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.eK.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.bh.prototype={$ibh:1}
W.eL.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.bi.prototype={
gm:function(a){return a.length},
$ibi:1}
W.eP.prototype={
h:function(a,b){return a.getItem(H.pL(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaY:function(a){var s=[]
this.H(a,new W.jp(s))
return s},
gm:function(a){return a.length},
$iG:1}
W.jp.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aV.prototype={$iaV:1}
W.bj.prototype={$ibj:1}
W.aW.prototype={$iaW:1}
W.aq.prototype={$iaq:1}
W.eU.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.eV.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.jD.prototype={
gm:function(a){return a.length}}
W.bk.prototype={$ibk:1}
W.bO.prototype={$ibO:1}
W.eZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.jH.prototype={
gm:function(a){return a.length}}
W.aY.prototype={}
W.jZ.prototype={
i:function(a){return String(a)}}
W.fj.prototype={
gm:function(a){return a.length}}
W.bm.prototype={
gj9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
gj8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibm:1}
W.cm.prototype={
iq:function(a,b){return a.requestAnimationFrame(H.br(b,1))},
fV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ft.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.db.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.bv(b)
s=a.left==s.gah(b)&&a.top==s.gbY(b)&&a.width==s.gb1(b)&&a.height==s.gaX(b)}else s=!1
return s},
gR:function(a){return W.n8(J.ab(a.left),J.ab(a.top),J.ab(a.width),J.ab(a.height))},
gaX:function(a){return a.height},
gb1:function(a){return a.width}}
W.fI.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.df.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.h1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.h8.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$ik:1}
W.ls.prototype={}
W.fC.prototype={}
W.kl.prototype={
$1:function(a){return this.a.$1(a)}}
W.lL.prototype={}
W.I.prototype={
gU:function(a){return new W.cJ(a,this.gm(a))}}
W.cJ.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cy(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gF:function(a){return this.d}}
W.fu.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fY.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h4.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
P.kH.prototype={
cM:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
c_:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lX(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ag)return new Date(a.a)
if(t.a7.b(a))throw H.d(P.jT("structured clone of RegExp"))
if(t.L.b(a))return a
if(t.x.b(a))return a
if(t.u.b(a))return a
if(t.s.b(a))return a
if(t.o.b(a)||t.t.b(a)||t.cB.b(a))return a
if(t.f.b(a)){s=o.cM(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.lk(a,new P.kJ(n,o))
return n.a}if(t.j.b(a)){s=o.cM(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.j5(a,s)}if(t.m.b(a)){s=o.cM(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.jl(a,new P.kK(n,o))
return n.b}throw H.d(P.jT("structured clone of other type"))},
j5:function(a,b){var s,r=J.al(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.b(q)
s=0
for(;s<q;++s){o=this.c_(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.kJ.prototype={
$2:function(a,b){this.a.a[a]=this.b.c_(b)},
$S:6}
P.kK.prototype={
$2:function(a,b){this.a.b[a]=this.b.c_(b)},
$S:6}
P.du.prototype={$ibD:1,
gdY:function(a){return this.a}}
P.l0.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.kI.prototype={
jl:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e0.prototype={
gbI:function(){return new H.bH(new H.d9(this.b,new P.ik()),new P.il())},
k:function(a,b,c){var s=this.gbI()
J.od(s.b.$1(J.li(s.a,b)),c)},
q:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.b5(this.gbI().a)},
h:function(a,b){var s=this.gbI()
return s.b.$1(J.li(s.a,b))},
gU:function(a){var s=P.iw(this.gbI(),!1)
return new J.a9(s,s.length)}}
P.ik.prototype={
$1:function(a){return t.h.b(a)}}
P.il.prototype={
$1:function(a){return t.h.a(a)}}
P.la.prototype={
$1:function(a){return this.a.j1(0,a)},
$S:3}
P.lb.prototype={
$1:function(a){return this.a.j2(a)},
$S:3}
P.kz.prototype={
jt:function(a){if(a<=0||a>4294967296)throw H.d(P.lC("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.fX.prototype={
gaj:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
return this.$ti.c.a(s+r)},
gdT:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.bv(b)
if(s==r.gah(b)){q=n.b
if(q==r.gbY(b)){p=n.c
if(typeof s!=="number")return s.l()
if(typeof p!=="number")return H.b(p)
o=n.$ti.c
if(o.a(s+p)===r.gaj(b)){s=n.d
if(typeof q!=="number")return q.l()
if(typeof s!=="number")return H.b(s)
r=o.a(q+s)===r.gdT(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.ab(q),o=r.b,n=J.ab(o),m=r.c
if(typeof q!=="number")return q.l()
if(typeof m!=="number")return H.b(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.l()
if(typeof q!=="number")return H.b(q)
q=C.c.gR(s.a(o+q))
return P.pb(P.kB(P.kB(P.kB(P.kB(0,p),n),m),q))}}
P.aj.prototype={
gah:function(a){return this.a},
gbY:function(a){return this.b},
gb1:function(a){return this.c},
gaX:function(a){return this.d}}
P.bG.prototype={$ibG:1}
P.e9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$ik:1}
P.bL.prototype={$ibL:1}
P.eq.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$ik:1}
P.iY.prototype={
gm:function(a){return a.length}}
P.eS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$ik:1}
P.l.prototype={
gdV:function(a){return new P.e0(a,new W.fq(a))}}
P.bP.prototype={$ibP:1}
P.f_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$ik:1}
P.fL.prototype={}
P.fM.prototype={}
P.fT.prototype={}
P.fU.prototype={}
P.h5.prototype={}
P.h6.prototype={}
P.hd.prototype={}
P.he.prototype={}
P.bQ.prototype={$ij:1,$ih:1,$ik:1}
P.hM.prototype={
gm:function(a){return a.length}}
P.dM.prototype={
h:function(a,b){return P.bs(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bs(s.value[1]))}},
gaY:function(a){var s=[]
this.H(a,new P.hP(s))
return s},
gm:function(a){return a.size},
k:function(a,b,c){throw H.d(P.x("Not supported"))},
$iG:1}
P.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dN.prototype={
gm:function(a){return a.length}}
P.b6.prototype={}
P.er.prototype={
gm:function(a){return a.length}}
P.fp.prototype={}
P.eE.prototype={
jZ:function(a,b,c,d,e,f,g){var s
if(t.s.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qG(g))
return}if(t.k.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.bV("Incorrect number or type of arguments"))}}
P.eM.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
s=P.bs(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$ik:1}
P.h2.prototype={}
P.h3.prototype={}
L.iV.prototype={}
B.ig.prototype={
aq:function(a,b){var s,r,q,p,o,n,m,l=this,k=new B.aP(a,b),j=l.c.n(0,k).n(0,$.m9().j(0,a+b)),i=j.a,h=j.b,g=2-i*i-h*h
if(g>0){s=g*g
r=l.e
q=l.b.l(0,k)
p=l.a
o=p[C.d.aC(q.a)&255]
q=C.d.aC(q.b)
if(typeof o!=="number")return o.l()
q=p[o+q&255]
if(typeof q!=="number")return q.al()
n=(q&14)>>>1
q=$.nN()
if(n>=8)return H.c(q,n)
m=q[n]
l.e=r+s*s*(m.a*i+m.b*h)}}}
B.aP.prototype={
l:function(a,b){return new B.aP(this.a+b.a,this.b+b.b)},
n:function(a,b){return new B.aP(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.aP(this.a*b,this.b*b)},
i:function(a){return H.f(this.a)+", "+H.f(this.b)}}
K.hH.prototype={
bk:function(a,b){return!0},
i:function(a){return"all"}}
K.e2.prototype={
bk:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].bk(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.bd.prototype={
bk:function(a,b){return!this.f0(0,b)},
i:function(a){return"!["+this.d3(0)+"]"}}
K.j9.prototype={
f8:function(a){var s,r,q,p
if(a.a.length<=0)throw H.d(P.r("May not create a Set with zero characters."))
s=new H.w(t.E)
for(r=new H.c9(a,a.gm(a));r.w();){q=r.d
s.k(0,q,!0)}p=P.iw(new H.bb(s),!0)
C.b.eY(p)
this.a=p},
bk:function(a,b){return C.b.P(this.a,b)},
i:function(a){return P.eT(this.a,0,null)}}
L.eN.prototype={
u:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.jI(this.a.O(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
ji:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.bk(0,a))return p}return null},
i:function(a){return this.b},
dJ:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.P(0,l))m+=" (consume)"
for(l=new H.bb(n.d.c),l=l.gU(l);l.w();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.P(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eX.prototype={
i:function(a){var s=H.nI(this.b,"\n","\\n"),r=H.nI(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eY.prototype={
i:function(a){return this.b}}
L.jF.prototype={
O:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eN(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
bA:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eY(a)
s.c=new H.w(t.l)
this.b.k(0,a,s)}return s},
eM:function(a){return this.k5(a)},
k5:function(a){var s=this
return P.q4(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$eM(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.b.jN(a0,0)
else{if(!r.w()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.ji(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eT(b,0,null)
throw H.d(P.r("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.p(P.x("removeRange"))
P.bg(0,k,b.length)
b.splice(0,k-0)
C.b.aG(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.P(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)c.push(j)
d=h.b
if(d.d!=null){g=P.eT(c,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.eX(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.P(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.p9()
case 1:return P.pa(o)}}},t.ag)},
i:function(a){var s,r=new P.V(""),q=this.d
if(q!=null)r.a=q.dJ()+"\n"
for(q=this.a,q=q.gka(q),q=new H.cT(J.b4(q.a),q.b);q.w();){s=q.a
if(s!=this.d)r.a+=s.dJ()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.jI.prototype={
i:function(a){return this.b.b+": "+this.d3(0)}}
F.hN.prototype={
jr:function(a){var s,r=W.of(a)
r.autoplay=!1
r.preload="auto";++this.a
s=F.mB(r)
W.Q(r,"load",new F.hO(this,s),!1)
return s}}
F.hO.prototype={
$1:function(a){var s=this.b
if(!s.b)s.b=!0;++this.a.b}}
F.eh.prototype={
fY:function(){var s,r,q,p,o=this
for(s=o.b,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a.paused)return p}if(r<o.c){p=F.mB(o.a.a.cloneNode(!0))
o.b.push(p)
return p}return null},
jK:function(a,b){var s,r,q=this.fY()
if(q!=null&&q.a.paused){if(b>1)b=1
s=q.a
r=s.volume
$.t().toString
if(typeof r!=="number")return r.n()
if(!(Math.abs(r-b)<1e-9))s.volume=b
P.qX(q.a.play(),t.z)
return!0}return!1}}
F.ew.prototype={
hF:function(a){return null},
hD:function(a){return null}}
O.bY.prototype={
bE:function(){this.a=[]
this.c=this.b=null},
c2:function(a,b,c){this.b=b
this.c=a},
bC:function(a,b){return this.c2(a,null,b)},
bq:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
dz:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var s=this.a
return new J.a9(s,s.length)},
G:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
q:function(a,b){var s,r
if(this.bq([b])){s=this.a
r=s.length
s.push(b)
this.dz(r,[b])}},
aG:function(a,b){var s,r
if(this.bq(b)){s=this.a
r=s.length
C.b.aG(s,b)
this.dz(r,b)}},
$ih:1}
O.cV.prototype={
gm:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.C():s},
b3:function(){var s=this.b
if(s!=null)s.B(null)},
ga8:function(a){var s=this.a
if(s.length>0)return C.b.gaZ(s)
else return V.cb()},
eD:function(a){var s=this.a
if(a==null)s.push(V.cb())
else s.push(a)
this.b3()},
cW:function(){var s=this.a
if(s.length>0){s.pop()
this.b3()}}}
Y.ci.prototype={
i:function(a){return this.b}}
Y.dO.prototype={
i:function(a){switch(this.a){case C.B:return"intesected"
case C.C:return"noCollision"
case C.a5:return"outOfRange at "+H.f(this.b)
case C.p:return"collision at "+H.f(this.b)
default:return"Unknown collision value"}}}
Y.f0.prototype={
i:function(a){var s=this.f_(0)
return s+(this.a===C.p?" "+H.f(this.y):"")}}
E.hT.prototype={}
E.c0.prototype={
dk:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a9(s,s.length);s.w();){r=s.d
if(r.f==null)r.dk()}},
sd2:function(a){var s,r,q=this,p=q.d
if(p!=a){q.c=null
q.d=a
q.e=null
if(p!=null)p.gt().V(0,q.gbW())
s=q.d
if(s!=null)s.gt().q(0,q.gbW())
r=new D.A("shapeBuilder",p,q.d)
r.b=!0
q.au(r)}},
ak:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aD(0,b,q):null
if(!J.J(o,q.x)){s=q.x
q.x=o
r=new D.A("matrix",s,o)
r.b=!0
q.au(r)}p=q.f
if(p!=null)p.ak(0,b)
for(p=q.y.a,p=new J.a9(p,p.length);p.w();)p.d.ak(0,b)},
bl:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.ga8(s))
else q.push(r.j(0,s.ga8(s)))
s.b3()
a.eE(o.f)
s=a.dy
p=(s&&C.b).gaZ(s)
if(p!=null&&o.d!=null)p.jP(a,o)
for(s=o.y.a,s=new J.a9(s,s.length);s.w();)s.d.bl(a)
a.eB()
a.dx.cW()},
au:function(a){var s=this.z
if(s!=null)s.B(a)},
ai:function(){return this.au(null)},
eu:function(a){this.e=null
this.au(a)},
jB:function(){return this.eu(null)},
ew:function(a){this.au(a)},
jC:function(){return this.ew(null)},
es:function(a){this.au(a)},
jA:function(){return this.es(null)},
eq:function(a){this.au(a)},
jx:function(){return this.eq(null)},
jw:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gep(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.ai()},
jz:function(a,b){var s,r
for(s=b.gU(b),r=this.gep();s.w();)s.gF(s).gt().V(0,r)
this.ai()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bW.prototype={
i:function(a){return this.b}}
E.cf.prototype={
i:function(a){return this.b}}
E.fA.prototype={}
E.j4.prototype={
f7:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.ag(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.cV()
s.a=[]
s.gt().q(0,new E.j5(r))
r.cy=s
s=new O.cV()
s.a=[]
s.gt().q(0,new E.j6(r))
r.db=s
s=new O.cV()
s.a=[]
s.gt().q(0,new E.j7(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.w(t.F)},
gjM:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga8(q)
s=r.db
s=r.z=q.j(0,s.ga8(s))
q=s}return q},
eE:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaZ(s):a)},
eB:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.j5.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.j6.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.j7.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eO.prototype={}
E.eW.prototype={
d8:function(a){this.eH()},
d7:function(){return this.d8(null)},
gjm:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.mm(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ag(q,!1)
return s/p},
dE:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.j()
if(typeof p!=="number")return H.b(p)
s=C.d.bT(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.j()
r=C.d.bT(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.lG(C.k,q.gjR())}},
eH:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.E.fV(s)
r=W.nu(new E.jC(this),t.H)
r.toString
C.E.iq(s,r)}},
jO:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dE()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ag(p,!1)
q.y=P.mm(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.b3()
p=q.db
C.b.sm(p.a,0)
p.b3()
p=q.dx
C.b.sm(p.a,0)
p.b3()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.bl(n.e)}}catch(o){s=H.as(o)
r=H.bS(o)
P.m4("Error: "+H.f(s))
P.m4("Stack: "+H.f(r))
throw H.d(s)}}}
E.jC.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.jO()}}}
Z.fk.prototype={}
Z.dQ.prototype={
aT:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.as(q)
r=P.r('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.d(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.kg.prototype={}
Z.cA.prototype={
bj:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
aT:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].aT(a)},
bB:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
bl:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.c(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.aw(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.u(o,", ")+"\nAttrs:   "+C.b.u(p,", ")}}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eA(this.c))+"'")+"]"}}
Z.a_.prototype={
gdX:function(a){var s=this.a,r=(s&$.Y().a)!==0?1:0
if((s&$.a8().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.a0().a)!==0)++r
if((s&$.bU().a)!==0)++r
if((s&$.dF().a)!==0)++r
if((s&$.dG().a)!==0)++r
if((s&$.cx().a)!==0)++r
return(s&$.bw().a)!==0?r+1:r},
gbo:function(a){var s=this.a,r=(s&$.Y().a)!==0?3:0
if((s&$.a8().a)!==0)r+=3
if((s&$.bx().a)!==0)r+=3
if((s&$.a0().a)!==0)r+=2
if((s&$.bU().a)!==0)r+=3
if((s&$.dF().a)!==0)r+=3
if((s&$.dG().a)!==0)r+=4
if((s&$.cx().a)!==0)++r
return(s&$.bw().a)!==0?r+4:r},
cv:function(a){var s,r=$.Y(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.a8()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.a0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dF()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0)if(s===a)return r
return $.o3()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.a_))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.Y().a)!==0)s.push("Pos")
if((r&$.a8().a)!==0)s.push("Norm")
if((r&$.bx().a)!==0)s.push("Binm")
if((r&$.a0().a)!==0)s.push("Txt2D")
if((r&$.bU().a)!==0)s.push("TxtCube")
if((r&$.dF().a)!==0)s.push("Clr3")
if((r&$.dG().a)!==0)s.push("Clr4")
if((r&$.cx().a)!==0)s.push("Weight")
if((r&$.bw().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.u(s,"|")}}
D.hV.prototype={}
D.c2.prototype={
q:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
V:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.P(q,b)
if(q===!0){q=r.a
s=(q&&C.b).V(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.P(q,b)
if(q===!0){q=r.b
s=(q&&C.b).V(q,b)||s}return s},
B:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.Z()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.H(P.iw(s,!0),new D.ih(o))
s=p.b
if(s!=null){p.b=[]
C.b.H(s,new D.ii(o))}return!0},
dZ:function(){return this.B(null)},
aM:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.B(s)}}}}
D.ih.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ii.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Z.prototype={}
D.aI.prototype={}
D.aJ.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dR.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.aB.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ba.prototype={}
X.cN.prototype={
gas:function(){var s=this.y
return s==null?this.y=D.C():s},
dN:function(a,b){this.q(0,new X.aB(a,new X.bI(!1,!1,b)))},
a6:function(a){return this.dN(a,!1)},
d9:function(a){},
ff:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(C.b.P(this.a,q))return!1}return!0},
fd:function(a,b){var s=new D.aI()
s.b=!0
this.d9(s)},
fh:function(a,b){var s=new D.aJ()
s.b=!0
this.d9(s)},
c4:function(a){var s,r=this
if(!r.r&&a instanceof X.ba){s=a.c
if(C.b.P(r.a,s)){r.r=!0
s=r.y
if(s!=null)s.B(a)}}},
ck:function(a){var s
if(this.r&&a instanceof X.ba){s=a.c
if(C.b.P(this.a,s))this.r=!1}},
ag:function(a){var s,r,q=this
if(q.f!=null)return!1
q.f=a
s=a.b
r=s.b
if(r==null)r=s.b=D.C()
r.q(0,q.gc3())
r=s.a
s=r==null?s.a=D.C():r
s.q(0,q.gcj())
return!0}}
X.it.prototype={
jH:function(a){var s,r
this.d.q(0,a.a)
s=this.a
if(s==null)return!1
r=new X.ba(a)
r.b=!0
return s.B(r)},
jD:function(a){var s,r
this.d.V(0,a.a)
s=this.b
if(s==null)return!1
r=new X.ba(a)
r.b=!0
return s.B(r)}}
X.cQ.prototype={}
X.iy.prototype={
bb:function(a,b){var s,r,q,p,o,n=this,m=Date.now(),l=n.x,k=b.a,j=n.Q
if(typeof k!=="number")return k.j()
s=b.b
r=n.ch
if(typeof s!=="number")return s.j()
q=l.a
if(typeof q!=="number")return q.l()
l=l.b
if(typeof l!=="number")return l.l()
p=new V.S(q+k*j,l+s*r)
r=n.a.gbQ()
o=new X.cd(a,V.bf(),n.x,r,p)
o.b=!0
n.z=new P.ag(m,!1)
n.x=p
return o},
cV:function(a,b){var s
this.r=a.a
s=this.b
if(s==null)return!1
s.B(this.bb(a,b))
return!0},
bx:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eU()
if(typeof s!=="number")return s.al()
this.r=(s&~r)>>>0
return!1},
bw:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.bb(a,b))
return!0},
jI:function(a){return!1},
hN:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cQ(c,p.a.gbQ(),b)
q.b=!0
r.B(q)
p.y=new P.ag(s,!1)
p.x=V.bf()}}
X.bI.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bI))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.cd.prototype={}
X.iT.prototype={
ce:function(a,b,c){var s=this,r=new P.ag(Date.now(),!1),q=s.a.gbQ(),p=new X.cd(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cV:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.B(this.ce(a,b,!0))
return!0},
bx:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eU()
if(typeof r!=="number")return r.al()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.B(s.ce(a,b,!0))
return!0},
bw:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.ce(a,b,!1))
return!0},
jJ:function(a,b){return!1}}
X.ez.prototype={}
X.d5.prototype={}
X.jG.prototype={
bb:function(a,b){var s=this,r=new P.ag(Date.now(),!1),q=a.length>0?a[0]:V.bf(),p=s.a.gbQ(),o=new X.d5(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
jG:function(a){var s=this.b
if(s==null)return!1
s.B(this.bb(a,!0))
return!0},
jE:function(a){var s=this.c
if(s==null)return!1
s.B(this.bb(a,!0))
return!0},
jF:function(a){var s=this.d
if(s==null)return!1
s.B(this.bb(a,!1))
return!0}}
X.fi.prototype={
gbQ:function(){var s=this.a,r=C.j.gdW(s).c
r.toString
s=C.j.gdW(s).d
s.toString
return V.lD(0,0,r,s)},
dq:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.aB(s,new X.bI(r,a.altKey,a.shiftKey))},
bd:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
cp:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aR:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.n()
if(typeof o!=="number")return H.b(o)
s=r.top
if(typeof p!=="number")return p.n()
if(typeof s!=="number")return H.b(s)
return new V.S(q-o,p-s)},
br:function(a){return new V.ac(a.movementX,a.movementY)},
cn:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.aB(p.pageX)
C.d.aB(p.pageY)
n=k.left
if(typeof n!=="number")return H.b(n)
C.d.aB(p.pageX)
m=C.d.aB(p.pageY)
l=k.top
if(typeof l!=="number")return H.b(l)
j.push(new V.S(o-n,m-l))}return j},
aN:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dR(s,new X.bI(r,a.altKey,a.shiftKey))},
cf:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.n()
if(typeof n!=="number")return H.b(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.n()
if(typeof p!=="number")return H.b(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.b(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.b(p)
p=r<p}else p=!1
return p},
hH:function(a){this.f=!0},
hn:function(a){this.f=!1},
hx:function(a){if(this.f&&this.cf(a))a.preventDefault()},
ck:function(a){var s
if(!this.f)return
s=this.dq(a)
if(this.b.jH(s))a.preventDefault()},
c4:function(a){var s
if(!this.f)return
s=this.dq(a)
if(this.b.jD(s))a.preventDefault()},
hP:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.bd(a)
if(p.x){s=p.aN(a)
r=p.br(a)
if(p.d.cV(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aN(a)
q=p.aR(a)
if(p.c.cV(s,q))a.preventDefault()},
hT:function(a){var s,r,q,p=this
p.bd(a)
s=p.aN(a)
if(p.x){r=p.br(a)
if(p.d.bx(s,r))a.preventDefault()
return}if(p.r)return
q=p.aR(a)
if(p.c.bx(s,q))a.preventDefault()},
hB:function(a){var s,r,q,p=this
if(!p.cf(a)){p.bd(a)
s=p.aN(a)
if(p.x){r=p.br(a)
if(p.d.bx(s,r))a.preventDefault()
return}if(p.r)return
q=p.aR(a)
if(p.c.bx(s,q))a.preventDefault()}},
hR:function(a){var s,r,q,p=this
p.bd(a)
s=p.aN(a)
if(p.x){r=p.br(a)
if(p.d.bw(s,r))a.preventDefault()
return}if(p.r)return
q=p.aR(a)
if(p.c.bw(s,q))a.preventDefault()},
hz:function(a){var s,r,q,p=this
if(!p.cf(a)){p.bd(a)
s=p.aN(a)
if(p.x){r=p.br(a)
if(p.d.bw(s,r))a.preventDefault()
return}if(p.r)return
q=p.aR(a)
if(p.c.bw(s,q))a.preventDefault()}},
hV:function(a){var s,r,q=this
q.bd(a)
s=new V.ac((a&&C.D).gj8(a),C.D.gj9(a)).j(0,q.Q)
if(q.x){if(q.d.jI(s))a.preventDefault()
return}if(q.r)return
r=q.aR(a)
if(q.c.jJ(s,r))a.preventDefault()},
hZ:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aN(q.y)
r=q.aR(q.y)
q.d.hN(s,r,p)}},
ic:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cp(a)
s=r.cn(a)
if(r.e.jG(s))a.preventDefault()},
i8:function(a){var s
this.cp(a)
s=this.cn(a)
if(this.e.jE(s))a.preventDefault()},
ia:function(a){var s
this.cp(a)
s=this.cn(a)
if(this.e.jF(s))a.preventDefault()}}
N.dP.prototype={
i:function(a){return this.a?"intesection":"noIntesection"}}
N.U.prototype={
i:function(a){var s=this
return s.eZ(0)+" "+H.f(s.b)+" <"+H.f(s.c)+"> "+H.f(s.d)+" "+H.f(s.e)}}
D.c_.prototype={
aP:function(a){var s=this.r
if(s!=null)s.B(a)},
hp:function(){return this.aP(null)},
$iaM:1}
D.aM.prototype={}
D.cO.prototype={
aP:function(a){var s=this.y
if(s!=null)s.B(a)},
dB:function(a){var s=this.z
if(s!=null)s.B(a)},
hM:function(){return this.dB(null)},
i0:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.fP(q))return!1}return!0},
hd:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdA(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p instanceof D.c_)this.f.push(p)
o=p.r
if(o==null){o=new D.c2()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.aI()
s.b=!0
this.aP(s)},
i4:function(a,b){var s,r,q
for(s=b.gU(b),r=this.gdA();s.w();){q=s.gF(s)
C.b.V(this.e,q)
q.gt().V(0,r)}s=new D.aJ()
s.b=!0
this.aP(s)},
fP:function(a){var s=C.b.P(this.f,a)
return s}}
V.a1.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.bA.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bA))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.id.prototype={}
V.R.prototype={
cl:function(a,b){var s=this.a,r=a.a,q=(s&r)===r?b.a:$.O().a,p=b.a
return q|((s&p)===p?r:$.O().a)},
aJ:function(a){var s=this
return new V.R($.hF().a&s.a|s.cl($.au(),$.at())|s.cl($.av(),$.b1())|s.cl($.b3(),$.b2()))},
p:function(a,b){if(b==null)return!1
if(!(b instanceof V.R))return!1
return this.a===b.a},
i:function(a){var s,r,q
$.hE()
$.hF()
s=[]
r=this.a
q=$.au().a
if((r&q)===q)s.push("XPos")
q=$.ma().a
if((r&q)===q)s.push("XCenter")
q=$.at().a
if((r&q)===q)s.push("XNeg")
q=$.av().a
if((r&q)===q)s.push("YPos")
q=$.mb().a
if((r&q)===q)s.push("YCenter")
q=$.b1().a
if((r&q)===q)s.push("YNeg")
q=$.b3().a
if((r&q)===q)s.push("ZPos")
q=$.nQ().a
if((r&q)===q)s.push("ZCenter")
q=$.b2().a
if((r&q)===q)s.push("ZNeg")
if(s.length<=0)return"None"
return C.b.u(s,"|")}}
V.aD.prototype={
an:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
aJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=g.e,d=g.y
if(typeof e!=="number")return e.j()
if(typeof d!=="number")return H.b(d)
s=e*d
r=g.f
q=g.x
if(typeof r!=="number")return r.j()
if(typeof q!=="number")return H.b(q)
if(typeof f!=="number")return f.j()
p=g.d
o=g.b
if(typeof o!=="number")return o.j()
n=o*d
m=g.c
if(typeof m!=="number")return H.b(m)
l=q*m
if(typeof p!=="number")return p.j()
k=g.r
j=o*r-e*m
if(typeof k!=="number")return k.j()
i=f*(s-r*q)-p*(n-l)+k*j
$.t().toString
if(Math.abs(i-0)<1e-9){f=$.mu
return f==null?$.mu=new V.aD(1,0,0,0,1,0,0,0,1):f}h=1/i
return new V.aD((s-q*r)*h,(l-n)*h,j*h,(k*r-p*d)*h,(f*d-k*m)*h,(p*m-f*r)*h,(p*q-k*e)*h,(k*o-f*q)*h,(f*e-p*o)*h)},
av:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.j()
if(typeof g!=="number")return H.b(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
o=i.d
if(typeof o!=="number")return o.j()
n=i.e
if(typeof n!=="number")return n.j()
m=i.f
if(typeof m!=="number")return m.j()
l=i.r
if(typeof l!=="number")return l.j()
k=i.x
if(typeof k!=="number")return k.j()
j=i.y
if(typeof j!=="number")return j.j()
return new V.u(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
T:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.j()
if(typeof g!=="number")return H.b(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
o=i.d
if(typeof o!=="number")return o.j()
n=i.e
if(typeof n!=="number")return n.j()
m=i.f
if(typeof m!=="number")return m.j()
l=i.r
if(typeof l!=="number")return l.j()
k=i.x
if(typeof k!=="number")return k.j()
j=i.y
if(typeof j!=="number")return j.j()
return new V.q(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aD))return!1
s=b.a
r=q.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=V.cw([o.a,o.d,o.r],3,0),m=V.cw([o.b,o.e,o.x],3,0),l=V.cw([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.c(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.c(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.c(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.c(n,1)
p=" "+n[1]+", "
if(1>=r)return H.c(m,1)
p=p+m[1]+", "
if(1>=q)return H.c(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.c(n,2)
k=" "+n[2]+", "
if(2>=r)return H.c(m,2)
k=k+m[2]+", "
if(2>=q)return H.c(l,2)
return p+(k+l[2]+"]")}}
V.ca.prototype={
an:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
aJ:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.j()
if(typeof b3!=="number")return H.b(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.b(p)
o=b1.c
if(typeof o!=="number")return o.j()
n=b2*p-o*r
m=b1.x
l=b1.d
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.j()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.j()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.j()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.t().toString
if(Math.abs(a7-0)<1e-9)return V.cb()
a8=1/a7
a9=-r
b0=-d
return V.aO((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
j:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.j()
if(typeof b3!=="number")return H.b(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
o=b1.d
n=b5.cx
m=b5.b
if(typeof m!=="number")return H.b(m)
l=b5.f
if(typeof l!=="number")return H.b(l)
k=b5.z
if(typeof k!=="number")return H.b(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.b(i)
h=b5.r
if(typeof h!=="number")return H.b(h)
g=b5.Q
if(typeof g!=="number")return H.b(g)
f=b5.db
e=b5.d
d=b5.x
c=b5.ch
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.j()
a0=b1.f
if(typeof a0!=="number")return a0.j()
a1=b1.r
if(typeof a1!=="number")return a1.j()
a2=b1.x
a3=b1.y
if(typeof a3!=="number")return a3.j()
a4=b1.z
if(typeof a4!=="number")return a4.j()
a5=b1.Q
if(typeof a5!=="number")return a5.j()
a6=b1.ch
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.aO(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
av:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.j()
if(typeof g!=="number")return H.b(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
o=i.e
if(typeof o!=="number")return o.j()
n=i.f
if(typeof n!=="number")return n.j()
m=i.r
if(typeof m!=="number")return m.j()
l=i.y
if(typeof l!=="number")return l.j()
k=i.z
if(typeof k!=="number")return k.j()
j=i.Q
if(typeof j!=="number")return j.j()
return new V.u(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
T:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.j()
if(typeof g!=="number")return H.b(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
o=i.e
if(typeof o!=="number")return o.j()
n=i.f
if(typeof n!=="number")return n.j()
m=i.r
if(typeof m!=="number")return m.j()
l=i.y
if(typeof l!=="number")return l.j()
k=i.z
if(typeof k!=="number")return k.j()
j=i.Q
if(typeof j!=="number")return j.j()
return new V.q(h*g+s*r+q*p+i.d,o*g+n*r+m*p+i.x,l*g+k*r+j*p+i.ch)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ca))return!1
s=b.a
r=q.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.Y()},
L:function(a){var s,r,q,p,o,n=this,m=V.cw([n.a,n.e,n.y,n.cx],3,0),l=V.cw([n.b,n.f,n.z,n.cy],3,0),k=V.cw([n.c,n.r,n.Q,n.db],3,0),j=V.cw([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.c(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.c(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.c(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.c(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.c(m,1)
o=o+m[1]+", "
if(1>=r)return H.c(l,1)
o=o+l[1]+", "
if(1>=q)return H.c(k,1)
o=o+k[1]+", "
if(1>=p)return H.c(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.c(m,2)
s=s+m[2]+", "
if(2>=r)return H.c(l,2)
s=s+l[2]+", "
if(2>=q)return H.c(k,2)
s=s+k[2]+", "
if(2>=p)return H.c(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.c(m,3)
o=o+m[3]+", "
if(3>=r)return H.c(l,3)
o=o+l[3]+", "
if(3>=q)return H.c(k,3)
o=o+k[3]+", "
if(3>=p)return H.c(j,3)
return s+(o+j[3]+"]")},
Y:function(){return this.L("")}}
V.S.prototype={
ac:function(a){var s,r,q=a.a,p=this.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
s=a.b
r=this.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
return new V.ac(q-p,s-r)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
r=this.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.q.prototype={
ac:function(a){var s,r,q,p,o=a.a,n=this.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.b(n)
s=a.b
r=this.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=a.c
p=this.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
return new V.u(o-n,s-r,q-p)},
l:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.b(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.b(p)
return new V.q(o+n,s+r,q+p)},
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.b(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
return new V.q(o-n,s-r,q-p)},
j:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.j()
s=this.b
if(typeof s!=="number")return s.j()
r=this.c
if(typeof r!=="number")return r.j()
return new V.q(q*b,s*b,r*b)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.q))return!1
s=b.a
r=q.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.bN.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bN))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.eC.prototype={
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.eC))return!1
s=b.a
r=q.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+", "+V.y(s.e,3,0)+", "+V.y(s.f,3,0)+"]"}}
V.eD.prototype={
gaL:function(){var s=this.c,r=this.d
return s>r?r:s},
en:function(a){var s,r,q,p,o=this,n=$.O(),m=a.a,l=o.a
if(typeof m!=="number")return m.S()
if(m<l){s=$.at()
n=new V.R(n.a|s.a)}else if(m>=l+o.c){s=$.au()
n=new V.R(n.a|s.a)}else{s=$.ma()
n=new V.R(n.a|s.a)}s=a.b
r=o.b
if(typeof s!=="number")return s.S()
if(s<r)n=new V.R(n.a|$.b1().a)
else{q=n.a
n=s>=r+o.d?new V.R(q|$.av().a):new V.R(q|$.mb().a)}q=n.a
p=$.at().a
if(!((q&p)===p)){p=$.au().a
if((q&p)===p){m=l+o.c
l=m}else l=m}m=$.b1().a
if(!((q&m)===m)){m=$.av().a
if((q&m)===m){m=r+o.d
r=m}else r=s}return new V.S(l,r)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eD))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.d0.prototype={
ex:function(a){var s,r=this,q=a.a
if(typeof q!=="number")return q.l()
s=r.a
if(typeof s!=="number")return s.l()
$.t().toString
if(s-1e-9<q+a.d&&q-1e-9<s+r.d){q=a.b
if(typeof q!=="number")return q.l()
s=r.b
if(typeof s!=="number")return s.l()
if(s-1e-9<q+a.e&&q-1e-9<s+r.e){q=a.c
if(typeof q!=="number")return q.l()
s=r.c
if(typeof s!=="number")return s.l()
q=s-1e-9<q+a.f&&q-1e-9<s+r.f}else q=!1}else q=!1
return q},
bZ:function(a,b){var s,r,q,p,o=this,n=o.a,m=b.a
if(typeof n!=="number")return n.l()
if(typeof m!=="number")return H.b(m)
s=o.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
q=o.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.b(p)
return V.j3(n+m,s+r,q+p,o.d,o.e,o.f)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.d0))return!1
s=b.a
r=q.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
if(!(Math.abs(b.e-q.e)<1e-9))return!1
if(!(Math.abs(b.f-q.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+", "+V.y(s.e,3,0)+", "+V.y(s.f,3,0)+"]"}}
V.ac.prototype={
cS:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
return q*p+s*r},
j:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.j()
if(typeof b!=="number")return H.b(b)
s=this.b
if(typeof s!=="number")return s.j()
return new V.ac(r*b,s*b)},
a_:function(a,b){var s,r
$.t().toString
if(Math.abs(b-0)<1e-9){s=$.mW
return s==null?$.mW=new V.ac(0,0):s}s=this.a
if(typeof s!=="number")return s.a_()
r=this.b
if(typeof r!=="number")return r.a_()
return new V.ac(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
s=b.a
r=this.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.u.prototype={
cS:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.j()
if(typeof n!=="number")return H.b(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
return o*n+s*r+q*p},
M:function(){var s=this,r=Math.sqrt(s.a7(s))
if(r===1)return s
return s.a_(0,r)},
bu:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.j()
if(typeof n!=="number")return H.b(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=a.a
if(typeof q!=="number")return H.b(q)
p=this.a
if(typeof p!=="number")return p.j()
return new V.u(o*n-s*r,s*q-p*n,p*r-o*q)},
l:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.b(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.b(p)
return new V.u(o+n,s+r,q+p)},
K:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.K()
s=this.b
if(typeof s!=="number")return s.K()
r=this.c
if(typeof r!=="number")return r.K()
return new V.u(-q,-s,-r)},
j:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.j()
s=this.b
if(typeof s!=="number")return s.j()
r=this.c
if(typeof r!=="number")return r.j()
return new V.u(q*b,s*b,r*b)},
a_:function(a,b){var s,r,q
$.t().toString
if(Math.abs(b-0)<1e-9)return V.d8()
s=this.a
if(typeof s!=="number")return s.a_()
r=this.b
if(typeof r!=="number")return r.a_()
q=this.c
if(typeof q!=="number")return q.a_()
return new V.u(s/b,r/b,q/b)},
cR:function(){var s=this.a
$.t().toString
if(typeof s!=="number")return H.b(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.b(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.b(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.u))return!1
s=b.a
r=q.a
$.t().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.i_.prototype={
c6:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.le(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gt:function(){var s=this.y
return s==null?this.y=D.C():s},
A:function(a){var s=this.y
if(s!=null)s.B(a)},
sd_:function(a,b){var s=this.a
if(s!==b){this.a=b
s=new D.A("wrap",s,b)
s.b=!0
this.A(s)}},
scT:function(a){var s,r=this,q=r.b
$.t().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.c6(s)}q=new D.A("maximumLocation",q,r.b)
q.b=!0
r.A(q)}},
scU:function(a){var s,r=this,q=r.c
$.t().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.c6(s)}q=new D.A("minimumLocation",q,r.c)
q.b=!0
r.A(q)}},
sZ:function(a,b){var s,r=this
b=r.c6(b==null?0:b)
s=r.d
$.t().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.A("location",s,b)
s.b=!0
r.A(s)}},
saK:function(a){var s,r,q=this,p=q.e
$.t().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.A("maximumVelocity",p,a)
p.b=!0
q.A(p)}},
sN:function(a){var s=this,r=a==null?0:a,q=s.e
a=-q
if(!(r<a))a=r>q?q:r
r=s.f
$.t().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.A("velocity",r,a)
r.b=!0
s.A(r)}},
saV:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.A("dampening",s,a)
s.b=!0
this.A(s)}},
ak:function(a,b){var s,r,q,p=this,o=p.f
$.t().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sZ(0,p.d+s*b)
o=p.x
$.t().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sN(s)}}}
U.cB.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.C():s},
aD:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.L("          ")}}
U.c5.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.C():s},
A:function(a){var s=this.e
if(s!=null)s.B(a)},
ae:function(){return this.A(null)},
fj:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaE(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gt()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aI()
s.b=!0
this.A(s)},
i2:function(a,b){var s,r
for(s=b.gU(b),r=this.gaE();s.w();)s.gF(s).gt().V(0,r)
s=new D.aJ()
s.b=!0
this.A(s)},
aD:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.S()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a9(p,p.length),s=null;p.w();){o=p.d
if(o!=null){r=o.aD(0,b,c)
if(r!=null)s=s==null?r:r.j(0,s)}}q.f=s==null?V.cb():s
p=q.e
if(p!=null)p.aM(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.c(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.c(p,r)
if(!J.J(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$ia3:1}
U.c7.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.C():s},
A:function(a){var s=this.b
if(s!=null)s.B(a)},
ae:function(){return this.A(null)},
aD:function(a,b,c){var s,r=this,q=r.d,p=b.e
if(q<p){r.d=p
q=r.b
if(q!=null)++q.d
q=r.a
q=q==null?null:q.aD(0,b,c)
s=q==null?null:q.aJ(0)
r.c=s==null?V.cb():s
q=r.b
if(q!=null)q.aM(0)}return r.c},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c7))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$ia3:1}
U.a3.prototype={}
U.d1.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.C():s},
A:function(a){var s=this.y
if(s!=null)s.B(a)},
seP:function(a){var s
a=V.le(a,0,6.283185307179586)
s=this.a
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.A("yaw",s,a)
s.b=!0
this.A(s)}},
sez:function(a,b){var s
b=V.le(b,0,6.283185307179586)
s=this.b
$.t().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.A("pitch",s,b)
s.b=!0
this.A(s)}},
seI:function(a){var s
a=V.le(a,0,6.283185307179586)
s=this.c
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.A("roll",s,a)
s.b=!0
this.A(s)}},
aD:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.seP(q.a+q.d*b.y)
q.sez(0,q.b+q.e*b.y)
q.seI(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.aO(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).j(0,V.mx(q.b)).j(0,V.mw(q.a))
p=q.y
if(p!=null)p.aM(0)}return q.x},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.d1))return!1
s=q.a
r=b.a
$.t().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+"], ["+V.y(s.d,3,0)+", "+V.y(s.e,3,0)+", "+V.y(s.f,3,0)+"]"}}
U.d6.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.C():s},
A:function(a){var s=this.fx
if(s!=null)s.B(a)},
ae:function(){return this.A(null)},
ag:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.C():r
s.q(0,q.gh5())
s=q.a.c
r=s.d
s=r==null?s.d=D.C():r
s.q(0,q.gh7())
s=q.a.c
r=s.c
s=r==null?s.c=D.C():r
s.q(0,q.gh9())
s=q.a.d
r=s.f
s=r==null?s.f=D.C():r
s.q(0,q.gh1())
s=q.a.d
r=s.d
s=r==null?s.d=D.C():r
s.q(0,q.gh3())
s=q.a.e
r=s.b
s=r==null?s.b=D.C():r
s.q(0,q.giH())
s=q.a.e
r=s.d
s=r==null?s.d=D.C():r
s.q(0,q.giF())
s=q.a.e
r=s.c
s=r==null?s.c=D.C():r
s.q(0,q.giD())
return!0},
aF:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.K()
s=-s}if(this.r){if(typeof r!=="number")return r.K()
r=-r}return new V.ac(s,r)},
h6:function(a){var s=this
t.d.a(a)
if(!J.J(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
h8:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ac(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.b(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aF(a.y.ac(a.d).j(0,2).a_(0,s.gaL()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.K()
q=l.y
if(typeof q!=="number")return H.b(q)
r.sN(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.K()
r=l.x
if(typeof r!=="number")return H.b(r)
q.sN(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aF(r.ac(q).j(0,2).a_(0,s.gaL()))
r=l.c
o=p.a
if(typeof o!=="number")return o.K()
n=l.y
if(typeof n!=="number")return H.b(n)
m=l.cy
if(typeof m!=="number")return H.b(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.K()
o=l.x
if(typeof o!=="number")return H.b(o)
r=l.db
if(typeof r!=="number")return H.b(r)
m.sZ(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.aF(a.z.ac(q).j(0,2).a_(0,s.gaL()))}l.ae()},
ha:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.K()
q=p.y
if(typeof q!=="number")return H.b(q)
s.sN(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.K()
s=p.x
if(typeof s!=="number")return H.b(s)
q.sN(-r*10*s)
p.ae()}},
h2:function(a){var s=this
if(t.cj.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
h4:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.J(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aF(r.ac(q).j(0,2).a_(0,s.gaL()))
r=l.c
o=p.a
if(typeof o!=="number")return o.K()
n=l.y
if(typeof n!=="number")return H.b(n)
m=l.cy
if(typeof m!=="number")return H.b(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.K()
o=l.x
if(typeof o!=="number")return H.b(o)
r=l.db
if(typeof r!=="number")return H.b(r)
m.sZ(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.aF(a.z.ac(q).j(0,2).a_(0,s.gaL()))
l.ae()},
iI:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
iG:function(a){var s,r,q,p,o,n,m,l=this
t.ap.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ac(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.b(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aF(a.y.ac(a.d).j(0,2).a_(0,s.gaL()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.K()
q=l.y
if(typeof q!=="number")return H.b(q)
r.sN(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.K()
r=l.x
if(typeof r!=="number")return H.b(r)
q.sN(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aF(r.ac(q).j(0,2).a_(0,s.gaL()))
r=l.c
o=p.a
if(typeof o!=="number")return o.K()
n=l.y
if(typeof n!=="number")return H.b(n)
m=l.cy
if(typeof m!=="number")return H.b(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.K()
o=l.x
if(typeof o!=="number")return H.b(o)
r=l.db
if(typeof r!=="number")return H.b(r)
m.sZ(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.aF(a.z.ac(q).j(0,2).a_(0,s.gaL()))}l.ae()},
iE:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.K()
q=p.y
if(typeof q!=="number")return H.b(q)
s.sN(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.K()
s=p.x
if(typeof s!=="number")return H.b(s)
q.sN(-r*10*s)
p.ae()}},
aD:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.S()
if(q<p){r.dy=p
s=b.y
r.c.ak(0,s)
r.b.ak(0,s)
r.fr=V.mw(r.b.d).j(0,V.mx(r.c.d))}return r.fr},
$ia3:1}
U.d7.prototype={
gt:function(){var s=this.dx
return s==null?this.dx=D.C():s},
A:function(a){var s=this.dx
if(s!=null)s.B(a)},
ae:function(){return this.A(null)},
sN:function(a){this.r.sN(a.a)
this.x.sN(a.b)
this.y.sN(a.c)},
gZ:function(a){return new V.q(this.r.d,this.x.d,this.y.d)},
sZ:function(a,b){this.r.sZ(0,b.a)
this.x.sZ(0,b.b)
this.y.sZ(0,b.c)},
hL:function(a){this.A(a)},
cs:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.l()
e+=d}else if(b.r){if(typeof e!=="number")return e.n()
e-=d}else{if(typeof e!=="number")return e.a3()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aD:function(a,b,c){var s,r,q,p,o,n=this,m=n.cy,l=b.e
if(typeof m!=="number")return m.S()
if(m<l){n.cy=l
s=n.gZ(n)
r=b.y
if(r>0.1)r=0.1
m=n.ch
if(typeof m!=="number")return m.j()
q=m*r
m=n.cx
if(typeof m!=="number")return m.j()
p=m*r
o=new V.u(n.r.f,n.x.f,n.y.f)
m=n.Q
if(m!=null)o=m.av(o)
o=new V.u(n.cs(n.a,n.b,q,p,o.a),n.cs(n.c,n.d,q,p,o.b),n.cs(n.e,n.f,q,p,o.c))
m=n.z
n.sN(m!=null?m.av(o):o)
n.r.ak(0,r)
n.x.ak(0,r)
n.y.ak(0,r)
if(n.dy!=null){m=n.gZ(n)
n.sZ(0,n.dy.$2(s,m))}n.db=V.ed(n.r.d,-n.x.d,n.y.d)}return n.db},
$ia3:1}
M.dZ.prototype={
b5:function(a){var s=this.y
if(s!=null)s.B(a)},
fk:function(){return this.b5(null)},
hr:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gb4(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aI()
s.b=!0
this.b5(s)},
ht:function(a,b){var s,r
for(s=b.gU(b),r=this.gb4();s.w();)s.gF(s).gt().V(0,r)
s=new D.aJ()
s.b=!0
this.b5(s)},
gt:function(){var s=this.y
return s==null?this.y=D.C():s},
bl:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=new E.eO()
c.b=!0
s=d.f
if(s!=null)s.B(c)
a.eE(d.d)
s=d.c
s.toString
r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.b(q)
m=C.d.aB(n*q)
n=o.b
if(typeof p!=="number")return H.b(p)
l=C.d.aB(n*p)
n=C.d.aB(o.c*q)
a.c=n
o=C.d.aB(o.d*p)
a.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=d.b
r=a.c
o=a.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.aO(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.eD(g)
r=$.mA
if(r==null){r=V.mv(V.ey(),V.lJ(),V.n1())
$.mA=r
f=r}else f=r
r=s.b
if(r!=null){e=r.aD(0,a,s)
if(e!=null)f=e.j(0,f)}a.db.eD(f)
for(s=d.e.a,s=new J.a9(s,s.length);s.w();)s.d.ak(0,a)
for(s=d.e.a,s=new J.a9(s,s.length);s.w();)s.d.bl(a)
d.b.toString
a.cy.cW()
a.db.cW()
d.c.toString
a.eB()}}
A.hK.prototype={}
A.hL.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
jg:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
ja:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a2.prototype={
gJ:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.a2))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.iA.prototype={
f5:function(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="Required uniform value, ",c6=", was not defined or used in shader.",c7="uniform mat4 objMat;\n"
c3.z=c8
s=new P.V("")
r=c8.fr
if(r){s.a=c7
q=c7}else q=""
p=c8.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c8.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c8.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.qj(c8,s)
A.ql(c8,s)
A.qk(c8,s)
A.qn(c8,s)
A.qo(c8,s)
A.qm(c8,s)
A.qp(c8,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c8.ry
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
s.a=q}if(c8.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c8.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c8.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c8.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
l=q.charCodeAt(0)==0?q:q
k=A.qi(c3.z)
c3.c=l
c3.d=k
c3.e=c3.dr(l,35633)
c3.f=c3.dr(c3.d,35632)
q=c3.a
o=q.createProgram()
c3.r=o
q.attachShader(o,c3.e)
q.attachShader(c3.r,c3.f)
q.linkProgram(c3.r)
if(!q.getProgramParameter(c3.r,35714)){j=q.getProgramInfoLog(c3.r)
q.deleteProgram(c3.r)
H.p(P.r("Failed to link shader: "+H.f(j)))}c3.iv()
c3.ix()
c3.Q=c3.x.h(0,"posAttr")
c3.cx=c3.x.h(0,"normAttr")
c3.ch=c3.x.h(0,"binmAttr")
c3.cy=c3.x.h(0,"txt2DAttr")
c3.db=c3.x.h(0,"txtCubeAttr")
c3.dx=c3.x.h(0,"bendAttr")
if(c8.dy)c3.id=t.I.a(c3.y.I(0,"invViewMat"))
if(r)c3.dy=t.I.a(c3.y.I(0,"objMat"))
if(p)c3.fr=t.I.a(c3.y.I(0,"viewObjMat"))
r=t.I
c3.fy=r.a(c3.y.I(0,"projViewObjMat"))
if(c8.go)c3.fx=r.a(c3.y.I(0,"viewMat"))
if(c8.x1)c3.k1=t.O.a(c3.y.I(0,"txt2DMat"))
if(c8.x2)c3.k2=r.a(c3.y.I(0,"txtCubeMat"))
if(c8.y1)c3.k3=r.a(c3.y.I(0,"colorMat"))
c3.r1=[]
q=c8.bi
if(q>0){c3.k4=c3.y.I(0,"bendMatCount")
for(i=0;i<q;++i){p=c3.r1
o=c3.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.p(P.r(c5+n+c6))
p.push(r.a(h))}}r=c8.a
if(r.a)c3.r2=t.r.a(c3.y.I(0,"emissionClr"))
if(r.b)c3.rx=t.c.a(c3.y.I(0,"emissionTxt"))
r=c8.b
if(r.a)c3.x1=t.r.a(c3.y.I(0,"ambientClr"))
if(r.b)c3.x2=t.c.a(c3.y.I(0,"ambientTxt"))
r=c8.c
if(r.a)c3.y2=t.r.a(c3.y.I(0,"diffuseClr"))
if(r.b)c3.bi=t.c.a(c3.y.I(0,"diffuseTxt"))
r=c8.d
if(r.a)c3.bR=t.r.a(c3.y.I(0,"invDiffuseClr"))
if(r.b)c3.e0=t.c.a(c3.y.I(0,"invDiffuseTxt"))
r=c8.e
q=r.a
if(q||r.b||!1){c3.e3=t.n.a(c3.y.I(0,"shininess"))
if(q)c3.e1=t.r.a(c3.y.I(0,"specularClr"))
if(r.b)c3.e2=t.c.a(c3.y.I(0,"specularTxt"))}if(c8.f.b)c3.e4=t.c.a(c3.y.I(0,"bumpTxt"))
if(c8.db){c3.e5=t.Q.a(c3.y.I(0,"envSampler"))
r=c8.r
if(r.a)c3.e6=t.r.a(c3.y.I(0,"reflectClr"))
if(r.b)c3.e7=t.c.a(c3.y.I(0,"reflectTxt"))
r=c8.x
q=r.a
if(q||r.b||!1){c3.e8=t.n.a(c3.y.I(0,"refraction"))
if(q)c3.e9=t.r.a(c3.y.I(0,"refractClr"))
if(r.b)c3.ea=t.c.a(c3.y.I(0,"refractTxt"))}}r=c8.y
if(r.a)c3.eb=t.n.a(c3.y.I(0,"alpha"))
if(r.b)c3.ec=t.c.a(c3.y.I(0,"alphaTxt"))
if(c8.k1){r=c8.z
q=r.length
if(q!==0){c3.cE=new H.w(t.J)
c3.cF=new H.w(t.M)
for(p=t.r,o=t.n,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="barLight"+H.f(e)
c=[]
for(n=f.b,i=0;i<n;++i){m=c3.y
b=d+"s["+i+"].startPnt"
h=m.h(0,b)
if(h==null)H.p(P.r(c5+b+c6))
p.a(h)
m=c3.y
b=d+"s["+i+"].endPnt"
a=m.h(0,b)
if(a==null)H.p(P.r(c5+b+c6))
p.a(a)
m=c3.y
b=d+"s["+i+"].color"
a0=m.h(0,b)
if(a0==null)H.p(P.r(c5+b+c6))
p.a(a0)
if(typeof e!=="number")return e.al()
if((e&4)!==0){m=c3.y
b=d+"s["+i+"].att0"
a1=m.h(0,b)
if(a1==null)H.p(P.r(c5+b+c6))
o.a(a1)
m=c3.y
b=d+"s["+i+"].att1"
a2=m.h(0,b)
if(a2==null)H.p(P.r(c5+b+c6))
o.a(a2)
m=c3.y
b=d+"s["+i+"].att2"
a3=m.h(0,b)
if(a3==null)H.p(P.r(c5+b+c6))
o.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.f5(h,a,a0,a6,a5,a4))}c3.cF.k(0,e,c)
n=c3.cE
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.r(c5+b+c6))
n.k(0,e,h)}}r=c8.Q
q=r.length
if(q!==0){c3.cG=new H.w(t.J)
c3.cH=new H.w(t.bn)
for(p=t.r,o=t.c,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=[]
for(n=f.b,i=0;i<n;++i){if(typeof e!=="number")return e.al()
m=(e&1)!==0
if(m){b=c3.y
a7=d+"s["+i+"].objUp"
h=b.h(0,a7)
if(h==null)H.p(P.r(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].objRight"
a=b.h(0,a7)
if(a==null)H.p(P.r(c5+a7+c6))
p.a(a)
b=c3.y
a7=d+"s["+i+"].objDir"
a0=b.h(0,a7)
if(a0==null)H.p(P.r(c5+a7+c6))
p.a(a0)
a8=a0
a9=a
b0=h}else{a8=c4
a9=a8
b0=a9}b=c3.y
a7=d+"s["+i+"].viewDir"
h=b.h(0,a7)
if(h==null)H.p(P.r(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].color"
a=b.h(0,a7)
if(a==null)H.p(P.r(c5+a7+c6))
p.a(a)
if(m){m=c3.y
b=d+"sTexture2D"+i
a0=m.h(0,b)
if(a0==null)H.p(P.r(c5+b+c6))
o.a(a0)
b1=a0}else b1=c4
c.push(new A.f6(b0,a9,a8,h,a,b1))}c3.cH.k(0,e,c)
n=c3.cG
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.r(c5+b+c6))
n.k(0,e,h)}}r=c8.ch
q=r.length
if(q!==0){c3.cI=new H.w(t.J)
c3.cJ=new H.w(t.b9)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.f(e)
c=[]
for(a7=f.b,i=0;i<a7;++i){b2=c3.y
b3=d+"s["+i+"].point"
h=b2.h(0,b3)
if(h==null)H.p(P.r(c5+b3+c6))
p.a(h)
b2=c3.y
b3=d+"s["+i+"].viewPnt"
a=b2.h(0,b3)
if(a==null)H.p(P.r(c5+b3+c6))
p.a(a)
b2=c3.y
b3=d+"s["+i+"].color"
a0=b2.h(0,b3)
if(a0==null)H.p(P.r(c5+b3+c6))
p.a(a0)
if(typeof e!=="number")return e.al()
if((e&3)!==0){b2=c3.y
b3=d+"s["+i+"].invViewRotMat"
a1=b2.h(0,b3)
if(a1==null)H.p(P.r(c5+b3+c6))
o.a(a1)
b4=a1}else b4=c4
if((e&1)!==0){b2=c3.y
b3=d+"sTextureCube"+i
a1=b2.h(0,b3)
if(a1==null)H.p(P.r(c5+b3+c6))
n.a(a1)
b1=a1}else b1=c4
if((e&2)!==0){b2=c3.y
b3=d+"sShadowCube"+i
a1=b2.h(0,b3)
if(a1==null)H.p(P.r(c5+b3+c6))
n.a(a1)
b2=c3.y
b3=d+"s["+i+"].shadowAdj"
a2=b2.h(0,b3)
if(a2==null)H.p(P.r(c5+b3+c6))
m.a(a2)
b5=a1
b6=a2}else{b5=c4
b6=b5}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a1=b2.h(0,b3)
if(a1==null)H.p(P.r(c5+b3+c6))
b.a(a1)
b2=c3.y
b3=d+"s["+i+"].att1"
a2=b2.h(0,b3)
if(a2==null)H.p(P.r(c5+b3+c6))
b.a(a2)
b2=c3.y
b3=d+"s["+i+"].att2"
a3=b2.h(0,b3)
if(a3==null)H.p(P.r(c5+b3+c6))
b.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.f9(h,a,b4,a0,b1,b5,b6,a6,a5,a4))}c3.cJ.k(0,e,c)
a7=c3.cI
b2=c3.y
b3=d+"Count"
h=b2.h(0,b3)
if(h==null)H.p(P.r(c5+b3+c6))
a7.k(0,e,h)}}r=c8.cx
q=r.length
if(q!==0){c3.cK=new H.w(t.J)
c3.cL=new H.w(t.bL)
for(p=t.r,o=t.n,n=t.y,m=t.c,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.f(e)
c=[]
for(b=f.b,i=0;i<b;++i){a7=c3.y
b2=d+"s["+i+"].objPnt"
h=a7.h(0,b2)
if(h==null)H.p(P.r(c5+b2+c6))
p.a(h)
a7=c3.y
b2=d+"s["+i+"].objDir"
a=a7.h(0,b2)
if(a==null)H.p(P.r(c5+b2+c6))
p.a(a)
a7=c3.y
b2=d+"s["+i+"].viewPnt"
a0=a7.h(0,b2)
if(a0==null)H.p(P.r(c5+b2+c6))
p.a(a0)
a7=c3.y
b2=d+"s["+i+"].color"
a1=a7.h(0,b2)
if(a1==null)H.p(P.r(c5+b2+c6))
p.a(a1)
if(typeof e!=="number")return e.al()
if((e&3)!==0){a7=c3.y
b2=d+"s["+i+"].objUp"
a2=a7.h(0,b2)
if(a2==null)H.p(P.r(c5+b2+c6))
p.a(a2)
a7=c3.y
b2=d+"s["+i+"].objRight"
a3=a7.h(0,b2)
if(a3==null)H.p(P.r(c5+b2+c6))
p.a(a3)
a7=c3.y
b2=d+"s["+i+"].tuScalar"
b7=a7.h(0,b2)
if(b7==null)H.p(P.r(c5+b2+c6))
o.a(b7)
a7=c3.y
b2=d+"s["+i+"].tvScalar"
b8=a7.h(0,b2)
if(b8==null)H.p(P.r(c5+b2+c6))
o.a(b8)
b9=b8
c0=b7
a9=a3
b0=a2}else{b9=c4
c0=b9
a9=c0
b0=a9}a7=(e&2)!==0
if(a7){b2=c3.y
b3=d+"s["+i+"].shadowAdj"
a2=b2.h(0,b3)
if(a2==null)H.p(P.r(c5+b3+c6))
n.a(a2)
b6=a2}else b6=c4
if((e&8)!==0){b2=c3.y
b3=d+"s["+i+"].cutoff"
a2=b2.h(0,b3)
if(a2==null)H.p(P.r(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].coneAngle"
a3=b2.h(0,b3)
if(a3==null)H.p(P.r(c5+b3+c6))
o.a(a3)
c1=a3
c2=a2}else{c1=c4
c2=c1}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a2=b2.h(0,b3)
if(a2==null)H.p(P.r(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].att1"
a3=b2.h(0,b3)
if(a3==null)H.p(P.r(c5+b3+c6))
o.a(a3)
b2=c3.y
b3=d+"s["+i+"].att2"
b7=b2.h(0,b3)
if(b7==null)H.p(P.r(c5+b3+c6))
o.a(b7)
a4=b7
a5=a3
a6=a2}else{a4=c4
a5=a4
a6=a5}if((e&1)!==0){b2=c3.y
b3=d+"sTexture2D"+i
a2=b2.h(0,b3)
if(a2==null)H.p(P.r(c5+b3+c6))
m.a(a2)
b1=a2}else b1=c4
if(a7){a7=c3.y
b2=d+"sShadow2D"+i
a2=a7.h(0,b2)
if(a2==null)H.p(P.r(c5+b2+c6))
m.a(a2)
b5=a2}else b5=c4
c.push(new A.fc(h,a,a0,a1,b0,a9,c0,b9,b6,c2,c1,a6,a5,a4,b1,b5))}c3.cL.k(0,e,c)
b=c3.cK
a7=c3.y
b2=d+"Count"
h=a7.h(0,b2)
if(h==null)H.p(P.r(c5+b2+c6))
b.k(0,e,h)}}}},
az:function(a,b){if(b!=null&&b.gab(b))a.eV(b)},
iu:function(a,b){}}
A.hQ.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.i5.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.iX.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.jn.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iD.prototype={
i:function(a){return this.bv}}
A.f5.prototype={}
A.f6.prototype={}
A.f9.prototype={}
A.fc.prototype={}
A.eI.prototype={
f9:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dr:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.d(P.r("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
iv:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.b(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.hK(n,r.name,q))}p.x=new A.hL(o)},
ix:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.b(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.j6(r.type,r.size,r.name,q))}p.y=new A.jR(o)},
ba:function(a,b,c){var s=this.a
if(a===1)return new A.f2(s,b,c)
else return A.lI(s,this.r,b,a,c)},
fR:function(a,b,c){var s=this.a
if(a===1)return new A.fa(s,b,c)
else return A.lI(s,this.r,b,a,c)},
fS:function(a,b,c){var s=this.a
if(a===1)return new A.fb(s,b,c)
else return A.lI(s,this.r,b,a,c)},
bN:function(a,b){return new P.fD(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
j6:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ba(b,c,d)
case 5121:return s.ba(b,c,d)
case 5122:return s.ba(b,c,d)
case 5123:return s.ba(b,c,d)
case 5124:return s.ba(b,c,d)
case 5125:return s.ba(b,c,d)
case 5126:return new A.f1(s.a,c,d)
case 35664:return new A.jN(s.a,c,d)
case 35665:return new A.f3(s.a,c,d)
case 35666:return new A.f4(s.a,c,d)
case 35667:return new A.jO(s.a,c,d)
case 35668:return new A.jP(s.a,c,d)
case 35669:return new A.jQ(s.a,c,d)
case 35674:return new A.jS(s.a,c,d)
case 35675:return new A.f7(s.a,c,d)
case 35676:return new A.f8(s.a,c,d)
case 35678:return s.fR(b,c,d)
case 35680:return s.fS(b,c,d)
case 35670:throw H.d(s.bN("BOOL",c))
case 35671:throw H.d(s.bN("BOOL_VEC2",c))
case 35672:throw H.d(s.bN("BOOL_VEC3",c))
case 35673:throw H.d(s.bN("BOOL_VEC4",c))
default:throw H.d(P.r("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.jL.prototype={}
A.jR.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
I:function(a,b){var s=this.h(0,b)
if(s==null)throw H.d(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.Y()},
Y:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.f2.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jO.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jP.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jQ.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jM.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.f1.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jN.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.f3.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.f4.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jS.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.f7.prototype={
aw:function(a){var s=new Float32Array(H.cr(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.f8.prototype={
aw:function(a){var s=new Float32Array(H.cr(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fa.prototype={
eV:function(a){var s=a.gab(a),r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.gaa(a))},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fb.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ij.prototype={
fH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d8()
if(n!=null)q=q.l(0,n)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.cR())return p
return q.M()},
fJ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.n(0,n)
q=new V.u(o.a,o.b,o.c).M()
o=r.n(0,n)
return q.bu(new V.u(o.a,o.b,o.c).M()).M()},
cB:function(){var s,r=this
if(r.d!=null)return!0
s=r.fH()
if(s==null){s=r.fJ()
if(s==null)return!1}r.d=s
r.a.a.ai()
return!0},
fG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d8()
if(n!=null)q=q.l(0,n)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.cR())return p
return q.M()},
fI:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
i=q.b
if(typeof j!=="number")return j.n()
if(typeof i!=="number")return H.b(i)
p=j-i
$.t().toString
if(Math.abs(p-0)<1e-9){j=b.n(0,e)
o=new V.u(j.a,j.b,j.c).M()
j=q.a
r=r.a
if(typeof j!=="number")return j.n()
if(typeof r!=="number")return H.b(r)
if(j-r<0)o=o.K(0)}else{i=s.b
if(typeof i!=="number")return H.b(i)
n=(j-i)/p
i=b.n(0,e).j(0,n).l(0,e).n(0,h)
o=new V.u(i.a,i.b,i.c).M()
q=q.a
r=r.a
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.b(r)
s=s.a
if(typeof s!=="number")return H.b(s)
if((q-r)*n+r-s<0)o=o.K(0)}j=l.d
if(j!=null){m=j.M()
o=m.bu(o).M().bu(m).M()}return o},
cA:function(){var s,r=this
if(r.e!=null)return!0
s=r.fG()
if(s==null){s=r.fI()
if(s==null)return!1}r.e=s
r.a.a.ai()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Y()},
L:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.a.b_(J.aw(q.e),0)+", "+C.a.b_(J.aw(r.b.e),0)+", "+C.a.b_(J.aw(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
Y:function(){return this.L("")}}
F.j2.prototype={
gt:function(){var s=this.Q
return s==null?this.Q=D.C():s},
bt:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=a2.length,a0=a*b.c,a1=new Array(a0)
a1.fixed$length=Array
for(s=b.a,r=0,q=0;q<b.b;++q){p=s.cv(q)
for(o=0;o<a;++o){if(o>=a2.length)return H.c(a2,o)
n=a2[o].el(p)
m=r+o*b.c
for(l=n.length,k=0;k<l;++k){j=n[k]
if(m<0||m>=a0)return H.c(a1,m)
a1[m]=j;++m}}r+=p.gbo(p)}a0=$.Y()
if((s.a&a0.a)!==0){a0=b.z
if(a0==null){if(0>=a2.length)return H.c(a2,0)
a0=a2[0].f
a0=V.j3(a0.a,a0.b,a0.c,0,0,0)
b.z=a0}for(q=a-1;q>=0;--q){if(q>=a2.length)return H.c(a2,q)
s=a2[q].f
l=s.a
j=s.b
s=s.c
i=a0.d
h=a0.a
if(typeof l!=="number")return l.S()
if(typeof h!=="number")return H.b(h)
if(l<h){i+=h-l
g=l}else{if(l>h+i)i=l-h
g=h}f=a0.e
l=a0.b
if(typeof j!=="number")return j.S()
if(typeof l!=="number")return H.b(l)
if(j<l){f+=l-j
e=j}else{if(j>l+f)f=j-l
e=l}d=a0.f
a0=a0.c
if(typeof s!=="number")return s.S()
if(typeof a0!=="number")return H.b(a0)
if(s<a0){d+=a0-s
c=s}else{if(s>a0+d)d=s-a0
c=a0}a0=new V.d0(g,e,c,i,f,d)
b.z=a0}}m=b.d
b.d=m+a
C.b.aG(b.f,a1)
b.ai()
return m},
bs:function(a){var s,r,q,p,o,n,m,l=a.length
if(l>=3){s=(l-2)*3
r=new Array(s)
r.fixed$length=Array
q=a[0]
for(p=2,o=0;p<l;++p,o+=3){if(o>=s)return H.c(r,o)
r[o]=q
n=o+1
m=a[p-1]
if(n>=s)return H.c(r,n)
r[n]=m
m=o+2
n=a[p]
if(m>=s)return H.c(r,m)
r[m]=n}C.b.aG(this.y,r)
this.ai()}},
iU:function(a){var s,r,q,p,o,n,m,l,k,j=a.length
if(j>=3){s=(j-2)*3
r=new Array(s)
r.fixed$length=Array
for(q=!1,p=2,o=0;p<j;++p,o+=3){n=p-2
m=o+1
l=p-1
k=o+2
if(q){n=a[n]
if(o>=s)return H.c(r,o)
r[o]=n
l=a[l]
if(m>=s)return H.c(r,m)
r[m]=l
l=a[p]
if(k>=s)return H.c(r,k)
r[k]=l
q=!1}else{l=a[l]
if(o>=s)return H.c(r,o)
r[o]=l
n=a[n]
if(m>=s)return H.c(r,m)
r[m]=n
n=a[p]
if(k>=s)return H.c(r,k)
r[k]=n
q=!0}}C.b.aG(this.y,r)
this.ai()}},
ai:function(){var s=this.Q
if(s!=null)s.B(null)},
aU:function(){return!1},
bg:function(){return!1},
bP:function(){return!1},
dU:function(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(!J.J(b,i))throw H.d(P.r("Shape was reduced to "+H.f(i)+" so can not build for "+H.f(b)+"."))
if(j.e==null){s=j.c*4
r=new Array(j.b)
r.fixed$length=Array
j.e=r
for(q=0,p=0;p<j.b;++p){o=i.cv(p)
n=o.gbo(o)
r=j.e
if(p>=r.length)return H.c(r,p)
r[p]=new Z.dQ(o,n,q*4,s)
q+=n}}r=a.a
m=new Z.cA(Z.n2(r,34962,j.f),j.e,i)
i=m.b=[]
l=j.r
if(l.length!==0){k=Z.fl(r,34963,l)
i.push(new Z.bE(0,j.r.length,k))}l=j.x
if(l.length!==0){k=Z.fl(r,34963,l)
i.push(new Z.bE(1,j.x.length,k))}l=j.y
if(l.length!==0){k=Z.fl(r,34963,l)
i.push(new Z.bE(4,j.y.length,k))}return m}}
F.ja.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.C():s},
aU:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aU()||!1
if(!r.a.aU())s=!1
q=r.e
if(q!=null)q.aM(0)
return s},
bg:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.bg()||!1
if(!r.a.bg())s=!1
q=r.e
if(q!=null)q.aM(0)
return s},
bP:function(){var s=this.e
if(s!=null)++s.d
this.a.bP()
s=this.e
if(s!=null)s.aM(0)
return!0},
dU:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a.c.length,c=a3.gdX(a3),b=a3.gbo(a3),a=b*4,a0=d*b,a1=new Array(a0)
a1.fixed$length=Array
s=new Array(c)
s.fixed$length=Array
for(r=0,q=0;q<c;++q){p=a3.cv(q)
o=p.gbo(p)
s[q]=new Z.dQ(p,o,r*4,a)
for(n=0;n<d;++n){m=e.a.c
if(n>=m.length)return H.c(m,n)
l=m[n].el(p)
k=r+n*b
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k<0||k>=a0)return H.c(a1,k)
a1[k]=i;++k}}r+=o}a0=a2.a
h=new Z.cA(Z.n2(a0,34962,a1),s,a3)
h.b=[]
e.b.toString
if(e.c.b.length!==0){g=[]
for(q=0;m=e.c.b,q<m.length;++q){m=m[q].a
m.a.a.bf()
g.push(m.e)
m=e.c.b
if(q>=m.length)return H.c(m,q)
m=m[q].b
m.a.a.bf()
g.push(m.e)}f=Z.fl(a0,34963,g)
h.b.push(new Z.bE(1,g.length,f))}if(e.d.b.length!==0){g=[]
for(q=0;m=e.d.b,q<m.length;++q){m=m[q].a
m.a.a.bf()
g.push(m.e)
m=e.d.b
if(q>=m.length)return H.c(m,q)
m=m[q].b
m.a.a.bf()
g.push(m.e)
m=e.d.b
if(q>=m.length)return H.c(m,q)
m=m[q].c
m.a.a.bf()
g.push(m.e)}f=Z.fl(a0,34963,g)
h.b.push(new Z.bE(4,g.length,f))}return h},
i:function(a){var s=this,r=[]
if(s.a.c.length!==0){r.push("Vertices:")
r.push(s.a.L("   "))}s.b.toString
if(s.c.b.length!==0){r.push("Lines:")
r.push(s.c.L("   "))}if(s.d.b.length!==0){r.push("Faces:")
r.push(s.d.L("   "))}return C.b.u(r,"\n")},
ai:function(){var s=this.e
if(s!=null)s.B(null)}}
F.lE.prototype={}
F.jb.prototype={
iT:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.q(0,l)
s.a.q(0,q)
s.a.q(0,p)
o=new F.ij()
n=l.a
if(n==null)H.p(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(n!=q.a||n!=p.a)H.p(P.r("May not create a face with vertices attached to different shapes."))
o.a=l
l.d.b.push(o)
o.b=q
q.d.c.push(o)
o.c=p
p.d.d.push(o)
o.a.a.d.b.push(o)
q=o.a.a.e
if(q!=null)q.B(null)
m.push(o)}return m},
gm:function(a){return this.b.length},
aU:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cB())q=!1
return q},
bg:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cA())q=!1
return q},
i:function(a){return this.Y()},
L:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].L(a))
return C.b.u(p,"\n")},
Y:function(){return this.L("")}}
F.jc.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.Y()},
L:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].L(a+(""+s+". ")))}return C.b.u(q,"\n")},
Y:function(){return this.L("")}}
F.jd.prototype={
gm:function(a){return 0},
i:function(a){return this.Y()},
L:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.c(s,r)
q.push(s[r].L(a))}return C.b.u(q,"\n")},
Y:function(){return this.L("")}}
F.k8.prototype={
el:function(a){var s=this,r=J.bu(a)
if(r.p(a,$.Y())){r=s.f
if(r==null)return[0,0,0]
else return[r.a,r.b,r.c]}else if(r.p(a,$.a8())){r=s.r
if(r==null)return[0,1,0]
else return[r.a,r.b,r.c]}else if(r.p(a,$.bx())){r=s.x
if(r==null)return[0,0,1]
else return[r.a,r.b,r.c]}else if(r.p(a,$.a0())){r=s.y
if(r==null)return[0,0]
else return[r.a,r.b]}else if(r.p(a,$.bU())){r=s.z
if(r==null)return[0,0,0]
else return[r.a,r.b,r.c]}else if(r.p(a,$.dF())){r=s.Q
if(r==null)return[1,1,1]
else return[r.a,r.b,r.c]}else if(r.p(a,$.dG())){r=s.Q
if(r==null)return[1,1,1,1]
else return[r.a,r.b,r.c,r.d]}else if(r.p(a,$.cx()))return[s.ch]
else if(r.p(a,$.bw())){r=s.cx
if(r==null)return[-1,-1,-1,-1]
else return[r.a,r.b,r.c,r.d]}else return[]},
cB:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d8()
r.d.H(0,new F.kf(q))
r.r=q.a.M()
q=r.a
if(q!=null){q.ai()
q=r.a.e
if(q!=null)q.aM(0)}return!0},
cA:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d8()
r.d.H(0,new F.ke(q))
r.x=q.a.M()
q=r.a
if(q!=null){q.ai()
q=r.a.e
if(q!=null)q.aM(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Y()},
L:function(a){var s,r,q=this,p="-",o=[]
o.push(C.a.b_(J.aw(q.e),0))
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
o.push(V.y(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.u(o,", ")
return a+"{"+r+"}"},
Y:function(){return this.L("")}}
F.kf.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.l(0,r)}}}
F.ke.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.l(0,r)}}}
F.k9.prototype={
bf:function(){},
q:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.d(P.r("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.ai()
return!0},
bO:function(a,b,c,d,e,f){var s=F.cl(a,null,b,c,null,d,e,f,0)
this.q(0,s)
return s},
gm:function(a){return this.c.length},
aU:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cB()
return!0},
bg:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cA()
return!0},
bP:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.M()
if(!J.J(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}}return!0},
i:function(a){return this.Y()},
L:function(a){var s,r,q,p
this.bf()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].L(a))
return C.b.u(s,"\n")},
Y:function(){return this.L("")}}
F.ka.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var s=this
C.b.H(s.b,b)
C.b.H(s.c,new F.kb(s,b))
C.b.H(s.d,new F.kc(s,b))},
i:function(a){return this.Y()},
Y:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].L(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].L(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].L(""))
return C.b.u(p,"\n")}}
F.kb.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)}}
F.kc.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)}}
F.kd.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.Y()},
Y:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].L(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].L(""))
return C.b.u(p,"\n")}}
O.ec.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.C():s},
a4:function(a){var s=this.fr
if(s!=null)s.B(a)},
c5:function(){return this.a4(null)},
dD:function(a){this.a=null
this.a4(a)},
is:function(){return this.dD(null)},
hf:function(a,b){var s=new D.aI()
s.b=!0
this.a4(s)},
hh:function(a,b){var s=new D.aJ()
s.b=!0
this.a4(s)},
dn:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.w(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaH()
n=d.h(0,p.gaH())
d.k(0,o,n==null?1:n)}m=[]
d.H(0,new O.iH(f,m))
C.b.bp(m,new O.iI())
l=new H.w(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=[]
l.H(0,new O.iJ(f,k))
C.b.bp(k,new O.iK())
j=new H.w(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaH()
n=j.h(0,p.gaH())
j.k(0,o,n==null?1:n)}i=[]
j.H(0,new O.iL(f,i))
C.b.bp(i,new O.iM())
h=new H.w(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gaH()
o=h.h(0,p.gaH())
h.k(0,r,o==null?1:o)}g=[]
h.H(0,new O.iN(f,g))
C.b.bp(g,new O.iO())
e=C.c.a2(f.e.a.length+3,4)
f.dy.toString
return A.oD(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ap:function(a,b){if(b!=null)if(!C.b.P(a,b)){b.saa(0,a.length)
a.push(b)}},
ak:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a9(s,s.length);s.w();){r=s.d
r.toString
q=$.k6
if(q==null)q=$.k6=new V.u(0,0,1)
r.a=q
p=$.k5
r.d=p==null?$.k5=new V.u(0,1,0):p
p=$.k4
r.e=p==null?$.k4=new V.u(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.av(q).M()
r.d=o.av(r.d).M()
r.e=o.av(r.e).M()}}}},
jP:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.dn()
s=b6.fr.h(0,b5.bv)
if(s==null){s=A.oC(b5,b6.a)
r=s.b
if(r.length===0)H.p(P.r("May not cache a shader with no name."))
if(b6.fr.cC(0,r))H.p(P.r('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.k(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bR
b5=b7.e
if(!(b5 instanceof Z.cA))b5=b7.e=null
if(b5==null||!J.J(b5.d,p)){b5=q.k4
if(b5)b7.d.aU()
o=q.r1
if(o)b7.d.bg()
n=q.rx
if(n)b7.d.bP()
m=b7.d.dU(new Z.kg(b6.a),p)
m.bj($.Y()).e=b4.a.Q.c
if(b5)m.bj($.a8()).e=b4.a.cx.c
if(o)m.bj($.bx()).e=b4.a.ch.c
if(q.r2)m.bj($.a0()).e=b4.a.cy.c
if(n)m.bj($.bU()).e=b4.a.db.c
if(q.ry)m.bj($.bw()).e=b4.a.dx.c
b7.e=m}l=[]
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.jg()
if(q.fr){b5=b4.a
n=b6.dx
n=n.ga8(n)
b5=b5.dy
b5.toString
b5.aw(n.an(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.ga8(n)
k=b6.dx
k=b6.cx=n.j(0,k.ga8(k))
n=k}b5=b5.fr
b5.toString
b5.aw(n.an(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gjM()
k=b6.dx
k=b6.ch=n.j(0,k.ga8(k))
n=k}b5=b5.fy
b5.toString
b5.aw(n.an(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.ga8(n)
b5=b5.fx
b5.toString
b5.aw(n.an(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.aw(C.l.an(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.aw(C.l.an(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.aw(C.l.an(n,!0))}if(q.bi>0){j=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,j)
for(i=0;i<j;++i){b5=b4.a
n=b4.e.a
if(i>=n.length)return H.c(n,i)
n=n[i]
b5=b5.r1
if(i>=b5.length)return H.c(b5,i)
b5=b5[i]
h=new Float32Array(H.cr(n.an(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,h)}}b5=q.a
if(b5.a){n=b4.a
k=b4.f.f
n=n.r2
n.a.uniform3f(n.d,k.a,k.b,k.c)}if(b5.b){b4.ap(l,b4.f.d)
b5=b4.a
n=b4.f.d
b5.az(b5.rx,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
k=b4.r.f
n=n.x1
n.a.uniform3f(n.d,k.a,k.b,k.c)}if(b5.b){b4.ap(l,b4.r.d)
b5=b4.a
n=b4.r.d
b5.az(b5.x2,n)}b5=q.c
if(b5.a){n=b4.a
k=b4.x.f
n=n.y2
n.a.uniform3f(n.d,k.a,k.b,k.c)}if(b5.b){b4.ap(l,b4.x.d)
b5=b4.a
n=b4.x.d
b5.az(b5.bi,n)}b5=q.d
if(b5.a){n=b4.a
k=b4.y.f
n=n.bR
n.a.uniform3f(n.d,k.a,k.b,k.c)}if(b5.b){b4.ap(l,b4.y.d)
b5=b4.a
n=b4.y.d
b5.az(b5.e0,n)}b5=q.e
n=b5.a
if(n||b5.b||!1){k=b4.a
g=b4.z.ch
k=k.e3
k.a.uniform1f(k.d,g)}if(n){n=b4.a
k=b4.z.f
n=n.e1
n.a.uniform3f(n.d,k.a,k.b,k.c)}if(b5.b){b4.ap(l,b4.z.d)
b5=b4.a
n=b4.z.d
b5.az(b5.e2,n)}b5=q.z
if(b5.length>0){f=new H.w(t.a)
for(n=b4.dx.e,k=n.length,e=0;e<n.length;n.length===k||(0,H.o)(n),++e){d=n[e]
c=d.gaH()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
a=J.cy(b4.a.cF.h(0,c),b)
g=d.gkf()
a0=$.aR
g=g.T(a0==null?$.aR=new V.q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=d.gkk()
a0=$.aR
g=g.T(a0==null?$.aR=new V.q(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=d.gbh(d)
a0=a.d
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
if(d.ge_()){g=d.gdO()
a0=a.e
a0.a.uniform1f(a0.d,g)
g=d.gdP()
a0=a.f
a0.a.uniform1f(a0.d,g)
g=d.gdQ()
a0=a.r
a0.a.uniform1f(a0.d,g)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){k=b5[e].a
j=f.h(0,k)
if(j==null)j=0
k=b4.a.cE.h(0,k)
k.a.uniform1i(k.d,j)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.ga8(n)
a2=new H.w(t.a)
for(n=b4.dx.f,k=n.length,e=0;e<n.length;n.length===k||(0,H.o)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.k(0,0,b+1)
a=J.cy(b4.a.cH.h(0,0),b)
g=a1.av(d.a).M()
a0=a.e
a3=g.a
a4=g.b
g=g.c
a0.a.uniform3f(a0.d,a3,a4,g)
g=d.c
a4=a.f
a4.a.uniform3f(a4.d,g.a,g.b,g.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){k=b5[e].a
j=a2.h(0,k)
if(j==null)j=0
k=b4.a.cG.h(0,k)
k.a.uniform1i(k.d,j)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.ga8(n)
a5=new H.w(t.a)
for(n=b4.dx.r,k=n.length,e=0;e<n.length;n.length===k||(0,H.o)(n),++e){d=n[e]
c=d.gaH()
b=a5.h(0,c)
if(b==null)b=0
a5.k(0,c,b+1)
a=J.cy(b4.a.cJ.h(0,c),b)
a6=a1.j(0,d.ga8(d))
g=d.ga8(d)
a0=$.aR
g=g.T(a0==null?$.aR=new V.q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=$.aR
g=a6.T(g==null?$.aR=new V.q(0,0,0):g)
a0=a.c
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=d.gbh(d)
a0=a.e
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
d.gb0()
g=a6.aJ(0)
a0=g.a
a3=g.b
a4=g.c
a7=g.e
a8=g.f
a9=g.r
b0=g.y
b1=g.z
g=g.Q
b2=a.d
b2.toString
h=new Float32Array(H.cr(new V.aD(a0,a3,a4,a7,a8,a9,b0,b1,g).an(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,h)
d.gb0()
g=d.gb0()
if(!C.b.P(l,g)){g.saa(0,l.length)
l.push(g)}g=d.gb0()
a0=g.gab(g)
if(a0){a0=a.f
a0.toString
a3=g.gab(g)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,g.gaa(g))}d.gbn()
g=d.geW()
a0=a.x
a0.toString
a3=g.gjd(g)
a4=g.gje(g)
a7=g.gjf()
g=g.gjc()
a0.a.uniform4f(a0.d,a3,a4,a7,g)
g=d.gbn()
if(!C.b.P(l,g)){g.saa(0,l.length)
l.push(g)}g=d.gbn()
a0=g.gab(g)
if(a0){a0=a.r
a0.toString
a3=g.gab(g)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,g.gaa(g))}if(d.ge_()){g=d.gdO()
a0=a.y
a0.a.uniform1f(a0.d,g)
g=d.gdP()
a0=a.z
a0.a.uniform1f(a0.d,g)
g=d.gdQ()
a0=a.Q
a0.a.uniform1f(a0.d,g)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){k=b5[e].a
j=a5.h(0,k)
if(j==null)j=0
k=b4.a.cI.h(0,k)
k.a.uniform1i(k.d,j)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.ga8(n)
b3=new H.w(t.a)
for(n=b4.dx.x,k=n.length,e=0;e<n.length;n.length===k||(0,H.o)(n),++e){d=n[e]
c=d.gaH()
b=b3.h(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.cy(b4.a.cL.h(0,c),b)
g=d.gjL(d)
a0=a.b
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=d.gki(d).M()
a0=a.c
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=a1.T(d.gjL(d))
a0=a.d
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=d.gbh(d)
a0=a.e
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
d.gb0()
g=d.gkw()
a0=a.f
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=d.gaj(d)
a0=a.r
a0.a.uniform3f(a0.d,g.a,g.b,g.c)
g=d.gku()
a0=a.x
a0.a.uniform1f(a0.d,g)
g=d.gkv()
a0=a.y
a0.a.uniform1f(a0.d,g)
d.gb0()
g=d.gb0()
if(!C.b.P(l,g)){g.saa(0,l.length)
l.push(g)}g=d.gb0()
a0=g.gab(g)
if(a0){a0=a.dx
a0.toString
a3=g.gab(g)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,g.gaa(g))}d.gbn()
g=d.geW()
a0=a.z
a0.toString
a3=g.gjd(g)
a4=g.gje(g)
a7=g.gjf()
g=g.gjc()
a0.a.uniform4f(a0.d,a3,a4,a7,g)
g=d.gbn()
if(!C.b.P(l,g)){g.saa(0,l.length)
l.push(g)}g=d.gbn()
a0=g.gab(g)
if(a0){a0=a.dy
a0.toString
a3=g.gab(g)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,g.gaa(g))}if(d.gkj()){g=d.gkh()
a0=a.Q
a0.a.uniform1f(a0.d,g)
g=d.gkg()
a0=a.ch
a0.a.uniform1f(a0.d,g)}if(d.ge_()){g=d.gdO()
a0=a.cx
a0.a.uniform1f(a0.d,g)
g=d.gdP()
a0=a.cy
a0.a.uniform1f(a0.d,g)
g=d.gdQ()
a0=a.db
a0.a.uniform1f(a0.d,g)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){k=b5[e].a
j=b3.h(0,k)
if(j==null)j=0
k=b4.a.cK.h(0,k)
k.a.uniform1i(k.d,j)}}}if(q.f.b){b4.ap(l,b4.Q.d)
b5=b4.a
n=b4.Q.d
b5.az(b5.e4,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.ga8(n).aJ(0)}b5=b5.id
b5.toString
b5.aw(n.an(0,!0))}if(q.db){b4.ap(l,b4.ch)
b5=b4.a
n=b4.ch
b5.iu(b5.e5,n)
b5=q.r
if(b5.a){n=b4.a
k=b4.cx.f
n=n.e6
n.a.uniform3f(n.d,k.a,k.b,k.c)}if(b5.b){b4.ap(l,b4.cx.d)
b5=b4.a
n=b4.cx.d
b5.az(b5.e7,n)}b5=q.x
n=b5.a
if(n||b5.b||!1){k=b4.a
g=b4.cy.ch
k=k.e8
k.a.uniform1f(k.d,g)}if(n){n=b4.a
k=b4.cy.f
n=n.e9
n.a.uniform3f(n.d,k.a,k.b,k.c)}if(b5.b){b4.ap(l,b4.cy.d)
b5=b4.a
n=b4.cy.d
b5.az(b5.ea,n)}}b5=q.y
n=b5.a
k=!n
if(!k||b5.b||!1){if(n){n=b4.a
g=b4.db.f
n=n.eb
n.a.uniform1f(n.d,g)}if(b5.b){b4.ap(l,b4.db.d)
n=b4.a
g=b4.db.d
n.az(n.ec,g)}o.enable(3042)
o.blendFunc(770,771)}for(i=0;i<l.length;++i)l[i].aT(b6)
n=b7.e
n.aT(b6)
n.bl(b6)
n.bB(b6)
if(!k||b5.b||!1)o.disable(3042)
for(i=0;i<l.length;++i)l[i].bB(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.ja()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dn().bv}}
O.iH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.hQ(a,C.c.a2(b+3,4)*4))}}
O.iI.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.iJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.i5(a,C.c.a2(b+3,4)*4))}}
O.iK.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.iL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.iX(a,C.c.a2(b+3,4)*4))}}
O.iM.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.iN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.jn(a,C.c.a2(b+3,4)*4))}}
O.iO.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.iB.prototype={
aQ:function(){var s,r=this
r.d4()
s=r.f
$.t().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.A(r.b,s,1)
s.b=!0
r.a.a4(s)}}}
O.cU.prototype={
a4:function(a){return this.a.a4(a)},
c5:function(){return this.a4(null)},
aQ:function(){},
bM:function(a){var s,r,q=this
if(!q.c.p(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aQ()
s=q.a
s.a=null
s.a4(null)}},
sbz:function(a){var s,r,q=this,p=a==null
if(p){s=q.c
q.bM(new A.a2(s.a,!1,!1))}else{s=q.c
if(!s.b)q.bM(new A.a2(s.a,!0,!1))}s=q.d
if(s!=a){if(s!=null)s.gt().V(0,q.gbF())
r=q.d
q.d=a
if(!p)a.gt().q(0,q.gbF())
p=new D.A(q.b+".texture2D",r,q.d)
p.b=!0
q.a.a4(p)}}}
O.iC.prototype={}
O.aN.prototype={
dF:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.A(q.b+".color",s,a)
r.b=!0
q.a.a4(r)}},
aQ:function(){this.d4()
this.dF(new V.a1(1,1,1))},
sbh:function(a,b){this.bM(new A.a2(!0,this.c.b,!1))
this.dF(b)}}
O.iE.prototype={}
O.iF.prototype={
aQ:function(){var s,r=this
r.d5()
s=r.ch
$.t().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.A(r.b+".refraction",s,1)
s.b=!0
r.a.a4(s)}}}
O.iG.prototype={
dG:function(a){var s=this,r=s.ch
$.t().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.A(s.b+".shininess",r,a)
r.b=!0
s.a.a4(r)}},
aQ:function(){this.d5()
this.dG(100)}}
O.js.prototype={}
T.jw.prototype={}
T.jx.prototype={}
T.jy.prototype={
gaa:function(a){return this.a},
saa:function(a,b){this.a=b},
gab:function(a){var s=this.d
s=s==null?null:s.gab(s)
if(s==null){s=this.c
s=s==null?null:s.gab(s)}return s===!0},
gt:function(){var s=this.f
return s==null?this.f=D.C():s},
aT:function(a){var s
if(this.d==null){s=this.d=this.c
if(s!=null)s.aT(a)}},
bB:function(a){var s=this.d
if(s!=null){s.bB(a)
this.d=null}}}
T.jz.prototype={
gaa:function(a){return this.a},
saa:function(a,b){this.a=b},
gab:function(a){return this.d},
gt:function(){var s=this.y
return s==null?this.y=D.C():s},
aT:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
bB:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.jA.prototype={
jq:function(a,b,c,d){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9987)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.jz()
r.a=0
r.b=o
r.d=r.c=!1
W.Q(s,"load",new T.jB(this,r,s,!1,o,!1,!0),!1)
return r},
it:function(a,b,c){var s,r,q,p
b=V.m3(b)
s=V.m3(a.width)
r=V.m3(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.lq()
q.width=s
q.height=r
p=C.j.eS(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qH(p.getImageData(0,0,q.width,q.height))}}}
T.jB.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.it(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.a4.jZ(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.dZ()}++s.e}}
X.lp.prototype={}
X.io.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.C():s}}
X.et.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.C():s},
b6:function(a){var s=this.f
if(s!=null)s.B(a)},
fn:function(){return this.b6(null)},
sem:function(a){var s,r,q=this
if(!J.J(q.b,a)){s=q.b
if(s!=null)s.gt().V(0,q.gda())
r=q.b
q.b=a
if(a!=null)a.gt().q(0,q.gda())
s=new D.A("mover",r,q.b)
s.b=!0
q.b6(s)}}}
X.jq.prototype={}
V.jj.prototype={
fa:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.Q(o,"scroll",new V.jl(m),!1)},
cu:function(a,b){var s,r,q,p,o
a=C.c.j_(a,0,4)
s=P.kP(C.w,b,C.f,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.oe()
o.href="#"+H.f(s)
o.textContent=b
r.appendChild(o)
this.a.appendChild(r)},
a0:function(a){var s,r,q,p,o,n,m,l
this.iw()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.jp(a)
q.toString
p=new H.P(p)
p=new P.cp(q.eM(new H.c9(p,p.gm(p))).a())
for(;p.w();){q=p.gF(p)
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
if(H.nH(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kP(C.w,q,C.f,!1)
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
iR:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.aL
q=s.a(r.insertCell(-1)).style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
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
iw:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.jF()
s.a=new H.w(t.G)
s.b=new H.w(t.w)
s.c=P.mr(t.X)
s.d=s.O(0,p)
r=s.O(0,p).u(0,o)
q=K.a7(new H.P("*"))
r.a.push(q)
r.c=!0
r=s.O(0,o).u(0,o)
q=new K.bd()
q.a=[]
r.a.push(q)
r=K.a7(new H.P("*"))
q.a.push(r)
r=s.O(0,o).u(0,"BoldEnd")
q=K.a7(new H.P("*"))
r.a.push(q)
r.c=!0
r=s.O(0,p).u(0,n)
q=K.a7(new H.P("_"))
r.a.push(q)
r.c=!0
r=s.O(0,n).u(0,n)
q=new K.bd()
q.a=[]
r.a.push(q)
r=K.a7(new H.P("_"))
q.a.push(r)
r=s.O(0,n).u(0,m)
q=K.a7(new H.P("_"))
r.a.push(q)
r.c=!0
r=s.O(0,p).u(0,l)
q=K.a7(new H.P("`"))
r.a.push(q)
r.c=!0
r=s.O(0,l).u(0,l)
q=new K.bd()
q.a=[]
r.a.push(q)
r=K.a7(new H.P("`"))
q.a.push(r)
r=s.O(0,l).u(0,"CodeEnd")
q=K.a7(new H.P("`"))
r.a.push(q)
r.c=!0
r=s.O(0,p).u(0,k)
q=K.a7(new H.P("["))
r.a.push(q)
r.c=!0
r=s.O(0,k).u(0,j)
q=K.a7(new H.P("|"))
r.a.push(q)
q=s.O(0,k).u(0,i)
r=K.a7(new H.P("]"))
q.a.push(r)
q.c=!0
q=s.O(0,k).u(0,k)
r=new K.bd()
r.a=[]
q.a.push(r)
q=K.a7(new H.P("|]"))
r.a.push(q)
q=s.O(0,j).u(0,i)
r=K.a7(new H.P("]"))
q.a.push(r)
q.c=!0
q=s.O(0,j).u(0,j)
r=new K.bd()
r.a=[]
q.a.push(r)
q=K.a7(new H.P("|]"))
r.a.push(q)
s.O(0,p).u(0,h).a.push(new K.hH())
q=s.O(0,h).u(0,h)
r=new K.bd()
r.a=[]
q.a.push(r)
q=K.a7(new H.P("*_`["))
r.a.push(q)
q=s.O(0,"BoldEnd")
q.d=q.a.bA(o)
q=s.O(0,m)
q.d=q.a.bA(n)
q=s.O(0,"CodeEnd")
q.d=q.a.bA(l)
q=s.O(0,i)
q.d=q.a.bA("Link")
q=s.O(0,h)
q.d=q.a.bA(h)
this.b=s}}
V.jl.prototype={
$1:function(a){P.lG(C.k,new V.jk(this.a))}}
V.jk.prototype={
$0:function(){var s=C.d.aB(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
B.af.prototype={
gdM:function(){var s=this
return new B.af(s.a,s.b+1,s.c,s.d,s.e,s.f)},
gdR:function(){var s=this
return new B.af(s.a,s.b-1,s.c,s.d,s.e,s.f)},
gaj:function(a){var s=this,r=s.a+1,q=s.d,p=s.f
if(r>=16){q+=16
p=p==null?null:p.gaj(p)
r=0}return new B.af(r,s.b,s.c,q,s.e,p)},
gah:function(a){var s=this,r=s.a-1,q=s.d,p=s.f
if(r<0){q-=16
p=p==null?null:p.gah(p)
r=15}return new B.af(r,s.b,s.c,q,s.e,p)},
gaI:function(){var s=this,r=s.c+1,q=s.e,p=s.f
if(r>=16){q+=16
p=p==null?null:p.gaI()
r=0}return new B.af(s.a,s.b,r,s.d,q,p)},
gaS:function(a){var s=this,r=s.c-1,q=s.e,p=s.f
if(r<0){q-=16
p=p==null?null:p.gaS(p)
r=15}return new B.af(s.a,s.b,r,s.d,q,p)},
eo:function(a){var s=this,r=J.bu(a)
if(r.p(a,$.at()))return s.gah(s)
else if(r.p(a,$.au()))return s.gaj(s)
else if(r.p(a,$.b1()))return s.gdR()
else if(r.p(a,$.av()))return s.gdM()
else if(r.p(a,$.b2()))return s.gaS(s)
else if(r.p(a,$.b3()))return s.gaI()
else return null},
gcz:function(){var s=this
return V.j3(s.a+s.d,s.b,s.c+s.e,1,1,1)},
i:function(a){var s=this
return H.f(s.f)+".block("+s.a+", "+s.b+", "+s.c+", ("+s.d+", "+s.e+"), "+B.oh(s.gJ(s))+")"},
gJ:function(a){var s=this,r=s.f
r=r==null?null:r.am(s.a,s.b,s.c)
if(r==null)r=s.b<0?100:0
return r},
sJ:function(a,b){var s=this,r=s.f
if(r!=null)r.W(s.a,s.b,s.c,b)}}
B.hW.prototype={
bS:function(a){var s,r,q
for(s=0;s<16;++s)for(r=0;r<16;++r)for(q=0;q<this.b;++q)a.W(s,q,r,this.fZ(s,q,r))
a.cO()},
fZ:function(a,b,c){var s=a===0
if(s||c===0)return s&&c===0?112:110
if(a===1&&c===1)return 110
return C.c.b2(a+b+c,2)===0?113:111}}
B.hX.prototype={
f4:function(a){var s,r,q,p,o,n,m,l,k=this,j=null
k.d=new Uint8Array(12288)
k.e=[]
for(s=k.c.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=E.c1(j,j,j,j)
n=p.y
if(n.bq([o])){m=n.a
l=m.length
m.push(o)
n=n.c
if(n!=null)n.$2(l,[o])}k.e.push(o)}k.b=k.a=0
k.f=!1
k.x=k.r=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
cO:function(){var s,r=this
r.x=!1
r.f=!0
r.saO(!1)
s=r.gah(r)
if(s!=null)s.f=!0
s=r.gaj(r)
if(s!=null)s.f=!0
s=r.gaI()
if(s!=null)s.f=!0
s=r.gaS(r)
if(s!=null)s.f=!0},
am:function(a,b,c){var s,r
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
s=this.d
r=(a*48+b)*16+c
if(r<0||r>=12288)return H.c(s,r)
return s[r]},
bJ:function(a,b,c,d){var s=a==null?null:a.c0(b,c,d)
return s==null?0:s},
c0:function(a,b,c){var s,r,q=this
if(b<0)return 100
if(b>=48)return 0
if(a<0)return q.bJ(q.gah(q),a+16,b,c)
if(a>=16)return q.bJ(q.gaj(q),a-16,b,c)
if(c<0)return q.bJ(q.gaS(q),a,b,c+16)
if(c>=16)return q.bJ(q.gaI(),a,b,c-16)
s=q.d
r=(a*48+b)*16+c
if(r<0||r>=12288)return H.c(s,r)
return s[r]},
W:function(a,b,c,d){var s,r
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
s=this.d
r=(a*48+b)*16+c
if(r<0||r>=12288)return H.c(s,r)
s[r]=d
return!0},
gah:function(a){return this.c.aW(this.a-16,this.b)},
gaI:function(){return this.c.aW(this.a,this.b+16)},
gaj:function(a){return this.c.aW(this.a+16,this.b)},
gaS:function(a){return this.c.aW(this.a,this.b-16)},
cZ:function(a,b,c){var s,r
for(s=47;s>=0;--s){r=this.am(a,s,b)
if(r>=100&&r<=117)return s}return c},
k6:function(a,b){return this.cZ(a,b,48)},
k8:function(){var s,r=this
if(r.x||!r.r)return
r.f=r.r=!1
s=B.lF(r.c.a,null)
s.iZ(r)
s.cN(0,r.e)},
saO:function(a){var s,r,q
for(s=this.e,r=s.length,q=0;q<r;++q)s[q].b=a},
k9:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(g.x||g.r){g.saO(!1)
return}s=V.lD(g.a,g.b,16,16)
r=s.en(a)
q=r.a
p=a.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
o=q-p
q=r.b
n=a.b
if(typeof q!=="number")return q.n()
if(typeof n!=="number")return H.b(n)
m=q-n
if(o*o+m*m<100){g.saO(!0)
return}l=s.en(b)
q=b.a
if(typeof q!=="number")return q.n()
k=b.b
if(typeof k!=="number")return k.n()
k=new V.ac(q-p,k-n)
j=k.a_(0,Math.sqrt(k.a7(k)))
k=l.a
if(typeof k!=="number")return k.n()
q=l.b
if(typeof q!=="number")return q.n()
i=new V.ac(k-p,q-n)
h=i.a7(i)
if(h>6400){g.saO(!1)
return}g.saO(j.a7(i.a_(0,h))>0)}}
B.hY.prototype={
j0:function(a,b,c){var s,r,q=this
q.b=b
q.c=a
q.d=c
q.e=$.O()
q.fL()
for(;q.iz(););s=q.b
r=q.d
q.b=s.l(0,new V.q(r.a,r.b,r.c))
return!0},
fL:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.c,a4=a2.b,a5=a3.bZ(0,new V.u(a4.a,a4.b,a4.c))
a4=a5.bZ(0,a2.d)
a3=a5.a
s=a4.a
r=Math.min(H.cv(a3),H.cv(s))
if(typeof a3!=="number")return a3.l()
if(typeof s!=="number")return s.l()
q=Math.max(a3+a5.d,s+a4.d)
s=a5.b
a3=a4.b
p=Math.min(H.cv(s),H.cv(a3))
if(typeof s!=="number")return s.l()
if(typeof a3!=="number")return a3.l()
o=Math.max(s+a5.e,a3+a4.e)
a3=a5.c
s=a4.c
n=Math.min(H.cv(a3),H.cv(s))
if(typeof a3!=="number")return a3.l()
if(typeof s!=="number")return s.l()
m=Math.max(a3+a5.f,s+a4.f)
a4=a2.a
l=a4.am(r,p,n)
k=a4.am(r+(q-r),p+(o-p),n+(m-n))
j=k.a+k.d
i=k.c+k.e
C.b.sm(a2.f,0)
C.b.sm(a2.r,0)
C.b.sm(a2.x,0)
a3=k.b
h=l
while(!0){if(!(h.a+h.d<=j))break
g=h
while(!0){if(!(g.b<=a3))break
f=g
while(!0){if(!(f.c+f.e<=i))break
a4=f.gJ(f)
if(a4>=100&&a4<=117){e=$.O()
d=f.gah(f)
a4=d.gJ(d)
a4=a4>=100&&a4<=117
if(a4){a4=$.at()
e=new V.R(e.a|a4.a)}d=f.gaj(f)
a4=d.gJ(d)
a4=a4>=100&&a4<=117
if(a4){a4=$.au()
e=new V.R(e.a|a4.a)}a4=f.a
s=f.b
c=f.c
b=f.d
a=f.e
a0=f.f
d=new B.af(a4,s-1,c,b,a,a0)
a1=d.gJ(d)
a1=a1>=100&&a1<=117
if(a1){a1=$.b1()
e=new V.R(e.a|a1.a)}d=new B.af(a4,s+1,c,b,a,a0)
a4=d.gJ(d)
a4=a4>=100&&a4<=117
if(a4){a4=$.av()
e=new V.R(e.a|a4.a)}d=f.gaS(f)
a4=d.gJ(d)
a4=a4>=100&&a4<=117
if(a4){a4=$.b2()
e=new V.R(e.a|a4.a)}d=f.gaI()
a4=d.gJ(d)
a4=a4>=100&&a4<=117
if(a4){a4=$.b3()
e=new V.R(e.a|a4.a)}a4=$.nP()
if(!J.J(e,a4)){a2.f.push(f.gcz())
s=a2.r
e.toString
c=$.hE().a
s.push(new V.R(a4.a&c&~e.a))
a2.x.push(!1)}}f=f.gaI()}g=new B.af(g.a,g.b+1,g.c,g.d,g.e,g.f)}h=h.gaj(h)}},
iz:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.d.cR())return!1
s=c.c
r=c.b
q=s.bZ(0,new V.u(r.a,r.b,r.c))
p=$.O()
for(o=0,n=-1,m=0;s=c.f,m<s.length;++m){r=c.x
if(m>=r.length)return H.c(r,m)
if(!r[m]){l=s[m]
s=c.r
if(m>=s.length)return H.c(s,m)
k=s[m]
s=c.d
r=$.k7
if(r==null)r=$.k7=new V.u(0,0,0)
j=Y.r3(q,l,s,r,$.hE(),k)
if(j.a===C.p)if(J.J(p,$.O())||o>j.b){p=j.y
o=j.b
n=m}}}s=J.bu(p)
if(s.p(p,$.O()))return!1
r=c.x
if(n<0||n>=r.length)return H.c(r,n)
r[n]=!0
i=c.d.j(0,o)
h=c.d.j(0,1-o)
if(s.p(p,$.au())||s.p(p,$.at())){s=c.b
r=s.a
g=i.a
if(typeof r!=="number")return r.l()
if(typeof g!=="number")return H.b(g)
f=s.b
e=i.b
if(typeof f!=="number")return f.l()
if(typeof e!=="number")return H.b(e)
s=s.c
d=i.c
if(typeof s!=="number")return s.l()
if(typeof d!=="number")return H.b(d)
c.b=new V.q(r+g,f+e,s+d)
c.d=new V.u(0,h.b,h.c)}else if(s.p(p,$.av())||s.p(p,$.b1())){s=c.b
r=s.b
g=i.b
if(typeof r!=="number")return r.l()
if(typeof g!=="number")return H.b(g)
f=s.a
e=i.a
if(typeof f!=="number")return f.l()
if(typeof e!=="number")return H.b(e)
s=s.c
d=i.c
if(typeof s!=="number")return s.l()
if(typeof d!=="number")return H.b(d)
c.b=new V.q(f+e,r+g,s+d)
c.d=new V.u(h.a,0,h.c)}else if(s.p(p,$.b3())||s.p(p,$.b2())){s=c.b
r=s.c
g=i.c
if(typeof r!=="number")return r.l()
if(typeof g!=="number")return H.b(g)
f=s.a
e=i.a
if(typeof f!=="number")return f.l()
if(typeof e!=="number")return H.b(e)
s=s.b
d=i.b
if(typeof s!=="number")return s.l()
if(typeof d!=="number")return H.b(d)
c.b=new V.q(f+e,s+d,r+g)
c.d=new V.u(h.a,h.b,0)}c.e=new V.R(c.e.a|p.a)
return!0},
i:function(a){return"Collider("+H.f(this.b)+", "+H.f(this.e)+")"}}
B.lc.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return null}}
B.ld.prototype={
$1:function(a){var s=this.b
P.m4(C.d.eL(this.a.gjm(),2)+" fps, "+("chunks: "+s.d.length+", graveyard: "+s.c.length+", player: "+H.f(s.gcm())))}}
B.M.prototype={}
B.iP.prototype={
C:function(a){var s="./textures/"+a+".png"
return this.a.f.jq(s,!0,!1,!1)},
E:function(a,b){var s,r=O.ms()
r.dx.q(0,this.e)
s=r.r
s.sbh(0,new V.a1(0.8,0.8,0.8))
s=r.x
s.sbh(0,new V.a1(0.4,0.4,0.4))
r.r.sbz(a)
r.x.sbz(a)
r.db.sbz(a)
if(b){s=r.z
s.sbh(0,new V.a1(0.5,0.5,0.5))
s.bM(new A.a2(!0,s.c.b,!1))
s.dG(3)}this.d.push(r)
return this.d.length-1},
de:function(a){var s=this.C(a),r=O.ms()
r.f.sbz(s)
r.db.sbz(s)
return r}}
B.en.prototype={
i:function(a){var s=this
return"NeighborBlockInfo("+s.a.i(0)+", "+H.f(s.b)+", "+s.c.i(0)+", "+s.d+")"}}
B.ev.prototype={
f6:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
a.r=!0
s=a.d
s.ch=s.Q=0.4
s=X.aL()
s.a6(32)
s.ag(a)
s.gas().q(0,c.ghI())
c.e=!0
s=X.aL()
s.a6(9)
s.dN(9,!0)
s.ag(a)
s.gas().q(0,c.ghk())
s=X.aL()
s.a6(69)
s.a6(81)
s.ag(a)
s.gas().q(0,c.ghi())
s=a.d
r=s.b
s=r==null?s.b=D.C():r
s.q(0,c.ghu())
s=X.aL()
s.a6(79)
s.ag(a)
s.gas().q(0,c.gi5())
s=new U.d7()
r=X.aL()
r.a6(39)
r.a6(68)
q=s.ghK()
r.gas().q(0,q)
s.a=r
r=X.aL()
r.a6(37)
r.a6(65)
r.gas().q(0,q)
s.b=r
r=X.aL()
r.a6(81)
r.gas().q(0,q)
s.c=r
r=X.aL()
r.a6(69)
r.gas().q(0,q)
s.d=r
r=X.aL()
r.a6(40)
r.a6(83)
r.gas().q(0,q)
s.e=r
r=X.aL()
r.a6(38)
r.a6(87)
r.gas().q(0,q)
s.f=r
r=U.dT()
r.saK(30)
r.saV(0)
q=s.gaE()
r.gt().q(0,q)
s.r=r
r=U.dT()
r.saK(30)
r.saV(0)
r.gt().q(0,q)
s.x=r
r=U.dT()
r.saK(30)
r.saV(0)
r.gt().q(0,q)
s.y=r
s.Q=s.z=null
s.ch=60
s.cx=15
s.cy=0
s.dy=s.dx=s.db=null
s.a.ag(a)
s.b.ag(a)
s.c.ag(a)
s.d.ag(a)
s.e.ag(a)
s.f.ag(a)
s.r.saK(6)
s.x.saK(60)
r=s.x
q=r.r
$.t().toString
if(!(Math.abs(q- -100)<1e-9)){r.r=-100
q=new D.A("acceleration",q,-100)
q.b=!0
r.A(q)}s.y.saK(6)
s.dy=c.gh_()
s.gt().q(0,c.ghW())
c.a=s
s=new U.d6()
r=U.dT()
r.sd_(0,!0)
r.scT(6.283185307179586)
r.scU(0)
r.sZ(0,0)
r.saK(100)
r.sN(0)
r.saV(0.5)
s.b=r
q=s.gaE()
r.gt().q(0,q)
r=U.dT()
r.sd_(0,!0)
r.scT(6.283185307179586)
r.scU(0)
r.sZ(0,0)
r.saK(100)
r.sN(0)
r.saV(0.5)
s.c=r
r.gt().q(0,q)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
p=new X.bI(!1,!1,!1)
o=s.d
s.d=p
r=new D.A("modifiers",o,p)
r.b=!0
s.A(r)
r=s.f
if(r!==!1){s.f=!1
r=new D.A("invertX",r,!1)
r.b=!0
s.A(r)}r=s.r
if(r!==!1){s.r=!1
r=new D.A("invertY",r,!1)
r.b=!0
s.A(r)}s.ag(a)
s.b.scT(1.5707963267948966)
s.b.scU(-1.5707963267948966)
s.b.saV(1)
s.c.saV(1)
s.b.sd_(0,!1)
c.b=s
s.gt().q(0,new B.iW(c))
s=U.ip([c.a,c.b])
s.gt().q(0,c.giM())
c.y=s
s=c.b
r=new U.c7()
r.c=V.cb()
r.d=0
if(null!=s){r.a=s
s.gt().q(0,r.gaE())
s=new D.A("mover",b,r.a)
s.b=!0
r.A(s)}c.z=U.ip([r,c.a,U.bB(V.lA(1,-1,1,1))])
s=U.bB(V.ed(-0.5,-0.5,-0.5))
r=new U.d1()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.seP(-0.1)
r.sez(0,0)
r.seI(0)
q=r.d
$.t().toString
if(!(Math.abs(q-0)<1e-9)){r.d=0
q=new D.A("deltaYaw",q,0)
q.b=!0
r.A(q)}q=r.e
$.t().toString
if(!(Math.abs(q-0.1)<1e-9)){r.e=0.1
q=new D.A("deltaPitch",q,0.1)
q.b=!0
r.A(q)}q=r.f
$.t().toString
if(!(Math.abs(q-0)<1e-9)){r.f=0
q=new D.A("deltaRoll",q,0)
q.b=!0
r.A(q)}c.Q=U.ip([s,r,U.bB(V.ed(0.5,0.5,0.5)),U.bB(V.lA(0.04,-0.04,0.04,1)),U.bB(V.ed(-0.15,0.06,-0.2)),c.z])
s=U.ip([U.bB(V.lA(0.005,-0.005,0.005,1)),U.bB(V.ed(0,0,-0.2)),c.z])
c.ch=s
r=$.Y()
q=$.a0()
q=new Z.a_(r.a|q.a)
n=new F.ja()
r=new F.k9(n)
r.b=!1
r.c=[]
n.a=r
m=new F.jd()
m.b=[]
n.b=m
m=new F.jc(n)
m.b=[]
n.c=m
m=new F.jb(n)
m.b=[]
n.d=m
m=new V.u(-1,-1,1).M()
l=r.bO(new V.bN(1,2,4,6),V.hZ(255,0,0),new V.q(-1,-1,0),new V.S(0,1),m,q)
m=n.a
r=new V.u(1,-1,1).M()
k=m.bO(new V.bN(0,3,4,6),V.hZ(0,0,255),new V.q(1,-1,0),new V.S(1,1),r,q)
r=n.a
m=new V.u(1,1,1).M()
j=r.bO(new V.bN(0,2,5,6),V.hZ(0,128,0),new V.q(1,1,0),new V.S(1,0),m,q)
m=n.a
r=V.bf()
i=new V.u(-1,1,1).M()
h=m.bO(new V.bN(0,2,4,7),V.hZ(255,255,0),new V.q(-1,1,0),r,i,q)
n.d.iT([l,k,j,h])
n.aU()
r=c.c
q=r.a
c.cx=E.c1(b,s,n,q.r)
c.cy=E.c1(b,c.Q,b,b)
c.dy=[]
for(s=q.d,m=s.length,g=0;g<s.length;s.length===m||(0,H.o)(s),++g){f=E.c1(b,b,b,s[g])
i=c.cy.y
if(i.bq([f])){e=i.a
d=e.length
e.push(f)
i=i.c
if(i!=null)i.$2(d,[f])}c.dy.push(f)}c.f=0
s=new B.hY(r)
s.e=$.O()
s.f=[]
s.r=[]
s.x=[]
c.x=s
q=E.c1(b,b,b,q.f)
c.db=q
c.r=null
c.dx=E.c1([c.cx,c.cy,q],b,b,b)
c.dL()},
d1:function(){var s=this.c.aW(C.i.aC(0.5),C.i.aC(0.5)),r=s==null?null:s.k6(C.i.aC(0.5),C.i.aC(0.5))
if(r==null)r=0
this.a.sZ(0,new V.q(0.5,r+10,0.5))
this.a.sN(V.d8())},
i6:function(a){this.d1()},
hJ:function(a){if(this.e)this.a.x.sN(30)},
hl:function(a){var s=this,r=t.i.a(a).c,q=s.f
if(r.b.c){if(typeof q!=="number")return q.n()
r=q-1
s.f=r
if(r<0)s.f=19}else{if(typeof q!=="number")return q.l()
r=q+1
s.f=r
if(r>=20)s.f=0}s.dL()},
hj:function(a){this.dl(t.i.a(a).c.a===69)},
hv:function(a){this.dl(t.d.a(a).x.a===2)},
dl:function(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
if((i==null?null:i.a)==null)return
s=i.a
if(a){i=j.f
if(i>>>0!==i||i>=20)return H.c($.hU,i)
r=$.hU[i]
q=s.gJ(s)
p=j.r.b
i=$.av()
o=p.a
if((o&i.a)!==0)if(q>=200&&q<=205)return
if(r>=200&&r<=205){i=s.gdR()
i=i.gJ(i)
if(!(i>=100&&i<=117))return}if(r===106){i=$.au()
n=$.at()
if((o&(i.a|n.a))!==0)r=108
else{i=$.b3()
n=$.b2()
if((o&(i.a|n.a))!==0)r=107}}else if(r===115){i=$.au()
n=$.at()
if((o&(i.a|n.a))!==0)r=117
else{i=$.b3()
n=$.b2()
if((o&(i.a|n.a))!==0)r=116}}s=s.eo(p.aJ(0))
i=j.a
i=i.gZ(i)
m=$.m7().bZ(0,new V.u(i.a,i.b,i.c))
if(s.gcz().ex(m))return}else r=0
l=s.f
if(l!=null){i=j.d
if(a)i.eA(r)
else i.eA(s.gJ(s))
s.sJ(0,r)
if(r===0){k=s.gdM()
i=k.gJ(k)
if(i>=200&&i<=205)k.sJ(0,0)}l.r=!0
i=s.a
if(i<=0){o=l.gah(l)
if(o!=null)o.r=!0}o=s.c
if(o<=0){n=l.gaS(l)
if(n!=null)n.r=!0}if(i>=15){i=l.gaj(l)
if(i!=null)i.r=!0}if(o>=15){i=l.gaI()
if(i!=null)i.r=!0}}},
hX:function(a){},
h0:function(a,b){var s,r,q=this,p=a.ac(b)
if(p.a7(p)<100){q.x.j0($.m7(),a,p)
s=q.x.e
r=$.av()
s=s.a
r=r.a
r=(s&r)===r
q.e=r
if(r)q.a.x.sN(0)}s=q.x.b
return s==null?b:s},
iO:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a==null
if((f?g:a.a)!=null){s=a.a
s=s.gJ(s)===0}else s=!1
if(s)return!1
r=f?g:a.a
if(r!=null){a.toString
f=r.gJ(r)===0||r.gJ(r)===100}else f=!1
if(f)a=g
h.r=a
if(a==null)h.db.b=!1
else{f=$.Y()
s=$.a0()
q=B.lF(g,new Z.a_(f.a|s.a))
p=new V.q(r.d+r.a+0.5,r.b+0.5,r.e+r.c+0.5)
o=q.a1(0)
s=$.hw()
f=$.hB()
n=$.hC()
m=$.hx()
q.a9(o,p,s,f,n,m,$.hD(),!0,1.1)
l=$.hz()
k=$.hu()
j=$.hv()
i=$.hA()
q.a9(o,p,l,k,j,i,$.hy(),!0,1.1)
q.a9(o,p,s,k,l,f,$.m6(),!0,1.1)
q.a9(o,p,n,i,j,m,$.m8(),!0,1.1)
q.a9(o,p,f,l,i,n,$.lf(),!0,1.1)
q.a9(o,p,m,j,k,s,$.m5(),!0,1.1)
q.cN(0,[h.db])
h.db.b=!0}return!0},
iN:function(a){var s,r,q,p,o,n,m,l=this.z.f,k=V.mH(l.T(V.ey()),l.av(new V.u(0,0,-6))),j=k.a,i=k.d
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.b(i)
s=k.b
r=k.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
q=k.c
p=k.f
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.b(p)
o=V.mH(new V.q(j+i,s+r,q+p),new V.u(i,r,p).K(0))
p=this.c
n=new B.en(p.am(j,s,q),$.hF(),k,0)
for(m=0;!this.iO(n);){n=p.eT(n.a,k,o,m);++m}},
dL:function(){var s=B.lF(this.c.a,null),r=this.f
if(r>>>0!==r||r>=20)return H.c($.hU,r)
s.dc(null,0,0,0,$.hU[r],!1,1)
s.cN(0,this.dy)}}
B.iW.prototype={
$1:function(a){var s,r=this.a,q=r.a
r=V.mt(-r.b.c.d)
if(!J.J(q.z,r)){s=q.z
q.z=r
q.Q=r.aJ(0)
r=new D.A("velocityRotation",s,q.z)
r.b=!0
q.A(r)}}}
B.iZ.prototype={
bS:function(a){var s=this
s.c=a
s.ij()
C.a0.ed(s.c.d,0,12288,0)
s.iB()
s.fB()
s.fz()
s.iK()
s.ft()
s.ig()
s.fp()
s.iJ()
a.cO()},
ar:function(a,b,c){var s,r,q,p,o,n,m,l=this.a,k=this.c,j=(a+k.a)*c
k=(b+k.b)*c
s=new B.aP(j,k)
r=s.l(0,$.nO().j(0,j+k))
k=Math.floor(r.a)
j=Math.floor(r.b)
q=new B.aP(k,j)
p=q.l(0,$.m9().j(0,k+j))
o=r.n(0,q)
s=new B.ig(l.a,q,s.n(0,p),o)
s.e=0
s.aq(1,0)
s.aq(0,1)
l=o.a
j=o.b
n=l+j
if(n<=1){m=1-n
if(m>l||m>j)if(l>j)s.aq(1,-1)
else s.aq(-1,1)
else s.aq(1,1)
s.aq(0,0)}else{m=2-n
if(m<l||m<j)if(l>j)s.aq(2,0)
else s.aq(0,2)
else s.aq(0,0)
s.aq(1,1)}return s.e/47*0.5+0.5},
cq:function(a,b){var s=this.b,r=(a+3)*22+(b+3)
if(r<0||r>=484)return H.c(s,r)
return s[r]},
ij:function(){var s,r,q,p,o,n=this
for(s=0,r=-3;r<19;++r)for(q=-3;q<19;++q){p=C.d.aC(Math.pow(0.6*n.ar(r,q,0.001)+0.3*n.ar(r,q,0.01)+0.1*n.ar(r,q,0.1),2)*48)
if(p>=48)p=47
o=n.b
if(s<0||s>=484)return H.c(o,s)
o[s]=p;++s}},
iB:function(){var s,r
for(s=0;s<16;++s)for(r=0;r<16;++r)this.iC(s,r)},
iC:function(a,b){var s,r,q,p,o=this.cq(a,b)
for(s=o-2,r=o<8,q=0;q<=o;++q){if(r)p=s<=q?104:103
else if(o===q)p=102
else p=s<=q?101:103
this.c.W(a,q,b,p)}},
fB:function(){var s,r
for(s=0;s<16;++s)for(r=0;r<16;++r)this.fC(s,r)},
fC:function(a,b){var s,r=this.c.cZ(a,b,0)
if(r<8)for(s=8;s>r;--s)this.c.W(a,s,b,1)},
fz:function(){var s,r
for(s=-1;s<=16;++s)for(r=-1;r<=16;++r)this.fA(s,r)},
fA:function(a,b){var s,r,q,p,o,n
if(this.cq(a,b)<8)for(s=10;s>6;--s)for(r=-1;r<=1;++r)for(q=a+r,p=-1;p<=1;++p){o=b+p
n=this.c.am(q,s,o)
if(n===102||n===105)this.c.W(q,s,o,104)}},
iK:function(){var s,r
for(s=-3;s<19;++s)for(r=-3;r<19;++r)if(this.ar(s,r,1.5)<0.1)this.fu(s,r)},
fu:function(a,b){var s,r,q=this,p=q.c,o=a+p.a
if(o>=-30)if(o<30){p=b+p.b
p=p>=-30&&p<30}else p=!1
else p=!1
if(p)return
s=q.cq(a,b)
if(s<10)return
for(r=1;r<8;++r)q.c.W(a,s+r,b,106)
q.fv(a,b)
q.fw(a,s+8,b)},
fv:function(a,b){var s,r,q,p,o,n
for(s=-3;s<=3;++s)for(r=s*s,q=a+s,p=-3;p<=3;++p)if(r+p*p<=10)for(o=b+p,n=47;n>=0;--n)if(this.c.am(q,n,o)===102){this.c.W(q,n,o,105)
break}},
fw:function(a,b,c){var s,r,q,p,o,n,m,l
for(s=-3;s<=3;++s)for(r=s*s,q=a+s,p=-3;p<=3;++p)for(o=r+p*p,n=b+p,m=-3;m<=3;++m)if(o+m*m<=12){l=c+m
if(this.c.am(q,n,l)===0)this.c.W(q,n,l,114)}},
ig:function(){var s,r,q,p,o,n=this
for(s=0;s<16;++s)for(r=s-400,q=s+400,p=0;p<16;++p)if(n.ar(s,p,12.5)<0.1)n.b9(s,p,204)
else if(n.ar(q,p,12.5)<0.1)n.b9(s,p,203)
else{o=p+400
if(n.ar(s,o,12.5)<0.1)n.b9(s,p,202)
else if(n.ar(q,o,12.5)<0.15)n.b9(s,p,200)
else if(n.ar(r,p,12.5)<0.1)n.b9(s,p,201)
else if(n.ar(s,p-400,12.5)<0.08)n.b9(s,p,205)}},
b9:function(a,b,c){var s=this.c.cZ(a,b,0),r=this.c.am(a,s,b)
if(r!==102&&r!==105)return
this.c.W(a,s+1,b,c)},
ft:function(){var s,r,q,p,o,n,m,l,k,j,i=this.c,h=i.a
if(h+16>=-30)if(h<=30){i=i.b
i=i+16<-30||i>30}else i=!0
else i=!0
if(i)return
s=new B.j0(this)
for(r=30;r>=0;r-=2){q=30-r+3
for(p=-q,i=r-1,o=p;o<=q;++o)for(n=p;n<=q;++n){s.$4(o,r,n,111)
s.$4(o,i,n,111)}for(h=p-1,m=p-2,l=q+1,k=q+2,j=-2;j<=2;++j){s.$4(h,r,j,109)
s.$4(h,i,j,109)
s.$4(m,i,j,109)
s.$4(l,r,j,109)
s.$4(l,i,j,109)
s.$4(k,i,j,109)
s.$4(j,r,h,109)
s.$4(j,i,h,109)
s.$4(j,i,m,109)
s.$4(j,r,l,109)
s.$4(j,i,l,109)
s.$4(j,i,k,109)}i=r+1
s.$4(h,i,2,109)
s.$4(m,r,2,109)
s.$4(h,i,-2,109)
s.$4(m,r,-2,109)
s.$4(l,i,2,109)
s.$4(k,r,2,109)
s.$4(l,i,-2,109)
s.$4(k,r,-2,109)
s.$4(2,i,h,109)
s.$4(2,r,m,109)
s.$4(-2,i,h,109)
s.$4(-2,r,m,109)
s.$4(2,i,l,109)
s.$4(2,r,k,109)
s.$4(-2,i,l,109)
s.$4(-2,r,k,109)}},
fp:function(){var s,r=this.c,q=r.a
if(q+16>=-36)if(q<=12){r=r.b
r=r+16<-28||r>-22}else r=!0
else r=!0
if(r)return
s=new B.j_(this,-12,40,-25)
s.$5(110,0,0,[0,1,2,3,4,4,3,2,4,4,3,2,1,0],[1,0,0,0,1,2,3,3,4,5,6,6,6,5])
s.$5(110,6,0,[0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],[0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1])
s.$5(113,12,0,[0,0,0,0,0,1,2,1,2,3,3,3,3,3],[2,3,4,5,6,1,1,4,4,2,3,4,5,6])
s.$5(113,17,0,[0,0,0,0,0,0,1,2,1,2,3,3,3,3],[1,2,3,4,5,6,1,1,4,4,2,3,5,6])
s.$5(113,22,0,[0,2,1,1,1,1,1,1],[1,1,1,2,3,4,5,6])},
iJ:function(){var s,r,q,p,o=this.c,n=o.a
if(n+16>=-3)if(n<=3){o=o.b
o=o+16<-3||o>3}else o=!0
else o=!0
if(o)return
s=new B.j1(this)
for(r=-3;r<=3;++r)for(q=0;q<=7;++q)for(o=2+q,p=-3;p<=3;++p)s.$4(r,o,p,0)
s.$4(0,2,0,113)
s.$4(0,3,0,112)
s.$4(0,4,0,112)
s.$4(0,5,0,112)
s.$4(0,6,0,112)}}
B.j0.prototype={
$4:function(a,b,c,d){var s=this.a.c
s.W(a-s.a,b,c-s.b,d)}}
B.j_.prototype={
$5:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this
for(s=d.length-1,r=j.a,q=j.b+b,p=j.c+c,o=j.d;s>=0;--s){n=r.c
if(s>=d.length)return H.c(d,s)
m=d[s]
if(typeof m!=="number")return H.b(m)
l=n.a
if(s>=e.length)return H.c(e,s)
k=e[s]
if(typeof k!=="number")return H.b(k)
n.W(q+m-l,p-k,o-n.b,a)}}}
B.j1.prototype={
$4:function(a,b,c,d){var s=this.a.c
s.W(a-s.a,b,c-s.b,d)}}
B.je.prototype={
iZ:function(a){var s,r,q
for(s=15;s>=0;--s)for(r=47;r>=-1;--r)for(q=15;q>=0;--q)this.dc(a,s,r,q,a.c0(s,r,q),!1,1)},
cN:function(a,b){var s,r,q,p
for(s=b.length-1;s>=0;--s){if(s>=b.length)return H.c(b,s)
r=b[s]
q=this.c
if(s>=q.length)return H.c(q,s)
p=q[s]
if(p!=null){r.sd2(p)
r.b=p.f.length!==0}else{r.sd2(null)
r.b=!1}}this.c=null},
a1:function(a){var s,r=this.c
if(a>>>0!==a||a>=r.length)return H.c(r,a)
s=r[a]
if(s==null){r=this.b
s=new F.j2(r)
s.b=r.gdX(r)
s.c=r.gbo(r)
s.d=0
s.f=[]
s.r=[]
s.x=[]
s.y=[]
r=this.c
if(a>=r.length)return H.c(r,a)
r[a]=s}return s},
dc:function(a,b,c,d,e,f,g){var s,r,q,p=this,o=new V.q(b,c,d)
if(a!=null){b+=a.a
d+=a.b}s=new V.q(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)p.dd(a,s,o,e,!1,g)
else if(e>=200&&e<=205)if(e===201){r=p.a.c.h(0,201)
q=J.al(r)
p.bG(p.a1(q.h(r,0)),s,0.3141592653589793)
p.bG(p.a1(q.h(r,0)),s,1.7278759594743864)
p.bG(p.a1(q.h(r,0)),s,3.6128315516282616)
p.bG(p.a1(q.h(r,0)),s,5.026548245743669)}else if(e===205)p.fs(s)
else{r=p.a.c.h(0,e)
q=J.al(r)
p.dh(p.a1(q.h(r,0)),s,0.39269908169872414,!0)
p.dh(p.a1(q.h(r,0)),s,1.9634954084936207,!0)}else if(e>=100&&e<=117)p.dd(a,s,o,e,!1,g)},
bc:function(a,b,c,d){var s=null,r=$.Y(),q=$.a0()
return F.cl(s,s,s,a,b,new V.S(c,d),s,new Z.a_(r.a|q.a|$.a8().a),0)},
a9:function(a,b,c,d,e,f,g,h,i){var s=this,r=a.bt([s.bc(b.l(0,c.j(0,i)),g,0,0),s.bc(b.l(0,d.j(0,i)),g,0,1),s.bc(b.l(0,e.j(0,i)),g,1,1),s.bc(b.l(0,f.j(0,i)),g,1,0)]),q=r+1,p=r+2,o=r+3
a.bs([r,q,p,o])
if(h)a.bs([p,q,r,o])},
dd:function(a,b,c,d,e,f){var s=this,r=s.a.b.h(0,d)
if(s.b8(a,d,c,0,1,0))s.a9(s.a1(r.a),b,$.hw(),$.hB(),$.hC(),$.hx(),$.hD(),!1,f)
if(s.b8(a,d,c,0,-1,0))s.a9(s.a1(r.b),b,$.hz(),$.hu(),$.hv(),$.hA(),$.hy(),!1,f)
if(s.b8(a,d,c,-1,0,0))s.a9(s.a1(r.c),b,$.hw(),$.hu(),$.hz(),$.hB(),$.m6(),!1,f)
if(s.b8(a,d,c,1,0,0))s.a9(s.a1(r.d),b,$.hC(),$.hA(),$.hv(),$.hx(),$.m8(),!1,f)
if(s.b8(a,d,c,0,0,1))s.a9(s.a1(r.e),b,$.hB(),$.hz(),$.hA(),$.hC(),$.lf(),!1,f)
if(s.b8(a,d,c,0,0,-1))s.a9(s.a1(r.f),b,$.hx(),$.hv(),$.hu(),$.hw(),$.m5(),!1,f)},
b8:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.ll(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.og(b,a.c0(d+J.ll(c.a),e,f+J.ll(c.c)))},
dh:function(a,b,c,d){var s=Math.cos(c)*0.5,r=Math.sin(c)*0.5,q=-r,p=-s
this.a9(a,b,new V.q(s,0,q),new V.q(s,-0.5,q),new V.q(p,-0.5,r),new V.q(p,0,r),new V.u(r,0,s),!0,1)},
bG:function(a,b,c){var s=V.mt(c)
this.a9(a,b,s.T(new V.q(0.4,-0.1,-0.4)),s.T(new V.q(0,-0.5,0)),s.T(new V.q(0.4,-0.1,0.4)),s.T(new V.q(0.8,0,0)),$.hD(),!0,1)},
fs:function(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a.c.h(0,205),a9=J.al(a8),b0=a6.a1(a9.h(a8,0)),b1=a6.a1(a9.h(a8,1)),b2=a6.a1(a9.h(a8,2)),b3=[],b4=[]
for(a8=b5.a,a9=b5.b,s=b5.c,r=0;r<=2;r+=0.25){q=3.141592653589793*r
p=Math.cos(q)
o=Math.sin(q)
n=new V.aD(p,0,-o,0,1,0,o,0,p)
q=n.T(new V.q(0.07,-0.1,0))
m=q.a
if(typeof a8!=="number")return a8.l()
if(typeof m!=="number")return H.b(m)
l=q.b
if(typeof a9!=="number")return a9.l()
if(typeof l!=="number")return H.b(l)
q=q.c
if(typeof s!=="number")return s.l()
if(typeof q!=="number")return H.b(q)
k=$.lf()
j=n.av(k)
i=Math.abs(r-1)
h=$.Y()
g=$.a0()
b3.push(F.cl(a7,a7,a7,new V.q(a8+m,a9+l,s+q),j,new V.S(i,0),a7,new Z.a_(h.a|g.a|$.a8().a),0))
g=n.T(new V.q(0.1,-0.5,0))
h=g.a
if(typeof h!=="number")return H.b(h)
j=g.b
if(typeof j!=="number")return H.b(j)
g=g.c
if(typeof g!=="number")return H.b(g)
k=n.av(k)
q=$.Y()
l=$.a0()
b3.push(F.cl(a7,a7,a7,new V.q(a8+h,a9+j,s+g),k,new V.S(i,1),a7,new Z.a_(q.a|l.a|$.a8().a),0))
f=n.T(new V.q(0.1,-0.5,0))
e=n.T(new V.q(0.1,0,0))
l=f.a
if(typeof l!=="number")return H.b(l)
q=f.b
if(typeof q!=="number")return H.b(q)
i=f.c
if(typeof i!=="number")return H.b(i)
k=$.hy()
g=e.a
if(typeof g!=="number")return g.l()
j=e.c
if(typeof j!=="number")return j.l()
h=$.Y()
m=$.a0()
b4.push(F.cl(a7,a7,a7,new V.q(a8+l,a9+q,s+i),k,new V.S(g+0.5,j+0.5),a7,new Z.a_(h.a|m.a|$.a8().a),0))}d=b2.bt(b3)
c=b1.bt(b4)
b2.iU(P.eb(b3.length,new B.jf(d)))
b1.bs(P.eb(b4.length,new B.jg(c)))
b=[]
a=[]
b.push(a6.bc(b5.l(0,new V.q(0,0.05,0)),$.hD(),0.5,0.5))
a.push(a6.bc(b5.l(0,new V.q(0,-0.1,0)),$.hy(),0.5,0.5))
for(r=0;r<=1;r+=0.1){q=-6.283185307179586*r
p=Math.cos(q)
o=Math.sin(q)
a0=new V.aD(p,0,-o,0,1,0,o,0,p)
f=a0.T(new V.q(0.4,-0.15,0))
e=a0.T(new V.q(0.5,0,0))
q=f.a
if(typeof a8!=="number")return a8.l()
if(typeof q!=="number")return H.b(q)
m=f.b
if(typeof a9!=="number")return a9.l()
if(typeof m!=="number")return H.b(m)
l=f.c
if(typeof s!=="number")return s.l()
if(typeof l!=="number")return H.b(l)
k=e.a
if(typeof k!=="number")return k.l()
j=e.c
if(typeof j!=="number")return j.l()
i=$.Y()
h=$.a0()
b.push(F.cl(a7,a7,a7,new V.q(a8+q,a9+m,s+l),a7,new V.S(k+0.5,j+0.5),a7,new Z.a_(i.a|h.a|$.a8().a),0))
h=6.283185307179586*r
p=Math.cos(h)
o=Math.sin(h)
a1=new V.aD(p,0,-o,0,1,0,o,0,p)
a2=a1.T(new V.q(0.4,-0.15,0))
a3=a1.T(new V.q(0.5,0,0))
h=a2.a
if(typeof h!=="number")return H.b(h)
i=a2.b
if(typeof i!=="number")return H.b(i)
j=a2.c
if(typeof j!=="number")return H.b(j)
k=a3.a
if(typeof k!=="number")return k.l()
l=a3.c
if(typeof l!=="number")return l.l()
m=$.Y()
q=$.a0()
a.push(F.cl(a7,a7,a7,new V.q(a8+h,a9+i,s+j),a7,new V.S(k+0.5,l+0.5),a7,new Z.a_(m.a|q.a|$.a8().a),0))}a4=b0.bt(b)
a5=b1.bt(a)
b0.bs(P.eb(b.length,new B.jh(a4)))
b1.bs(P.eb(a.length,new B.ji(a5)))}}
B.jf.prototype={
$1:function(a){return this.a+a}}
B.jg.prototype={
$1:function(a){return this.a+a}}
B.jh.prototype={
$1:function(a){return this.a+a}}
B.ji.prototype={
$1:function(a){return this.a+a}}
B.jm.prototype={
b7:function(a,b,c){var s,r,q,p=a.jr(b),o=new F.eh()
o.a=p
s=[]
o.b=s
s.push(p)
o.c=10
for(p=c.length,r=0;r<c.length;c.length===p||(0,H.o)(c),++r){q=c[r]
this.a.k(0,q,o)}},
eA:function(a){var s=this.a.h(0,a)
if(s!=null)s.jK(0,1)}}
B.jt.prototype={
bS:function(a){var s=this
s.a=a
s.fT()
if(s.ay(-2,1))s.iA()
if(s.ay(-1,1)){s.a5(5,9,3,7,2,11)
s.dj(6,10,4,5,1,9,1)}if(s.ay(0,1)){s.a5(2,10,6,12,10,1)
s.a5(6,10,2,1,10,12)
s.a5(2,10,10,12,10,1)
s.a5(10,10,2,1,10,12)}if(s.ay(1,1))s.ih()
if(s.ay(1,0))s.ii()
if(s.ay(1,-1))s.ie()
if(s.ay(-2,0))s.iL()
if(s.ay(-2,-1))s.hb()
if(s.ay(-2,-2))s.ik()
a.cO()},
fT:function(){var s,r,q,p,o,n,m,l=this
for(s=0;s<16;++s)for(r=s===1,q=s!==0,p=0;p<16;++p){for(o=0;o<8;++o)l.a.W(s,o,p,103)
for(o=8;o<9;++o)l.a.W(s,o,p,101)
if(!q||p===0)l.a.W(s,9,p,113)
else{n=r&&p===1
m=l.a
if(n)m.W(s,9,p,110)
else m.W(s,9,p,102)}}},
iA:function(){var s,r,q,p,o,n,m
for(s=-6;s<=6;++s)for(r=s*s,q=8+s,p=-6;p<=6;++p)for(o=r+p*p,n=17+p,m=-6;m<=6;++m)if(o+m*m<=37)this.a.W(q,n,8+m,104)},
ih:function(){var s=new B.ju(this)
s.$3(0,0,0)
s.$3(0,1,1)
s.$3(0,2,2)
s.$3(1,2,3)
s.$3(1,1,4)
s.$3(1,0,5)
s.$3(2,0,0)
s.$3(2,0,2)
s.$3(2,1,1)
s.$3(2,1,3)
s.$3(2,2,2)
s.$3(2,2,4)},
ii:function(){var s=new B.jv(this)
s.$3(0,0,1)
s.$3(0,1,2)
s.$3(0,2,3)
s.$3(0,3,4)
s.$3(1,0,2)
s.$3(1,1,3)
s.$3(1,2,4)
s.$3(1,3,5)
s.$3(2,0,5)
s.$3(2,1,4)
s.$3(2,2,3)
s.$3(2,3,2)
s.$3(3,0,4)
s.$3(3,1,3)
s.$3(3,2,2)
s.$3(3,3,1)},
ie:function(){var s,r,q
for(s=0;s<20;s+=2)for(r=2+s,q=0;q<20;q+=2)this.a5(r,10,2+q,1,8,1)},
ik:function(){var s,r,q
for(s=0;s<6;++s){r=2+s
q=16-r*2+1
this.a5(r,10+s,r,q,1,q)}},
iL:function(){var s,r,q
for(s=0;s<4;++s){r=2+s*3
q=s+2
this.a5(3,10,r,12,q,1)
this.a5(3,10+s+1,r+1,12,1,2)
this.a5(3,10,r+3,12,q,1)}},
hb:function(){var s,r,q
for(s=0;s<6;++s){r=2+s*2
q=s+2
this.a5(3,10,r,12,q,1)
this.a5(3,10+s+1,r+1,12,1,1)
this.a5(3,10,r+2,12,q,1)}},
ay:function(a,b){var s=this.a
return s.a===a*16&&s.b===b*16},
dj:function(a,b,c,d,e,f,g){var s,r,q,p,o
for(s=0;s<d;++s)for(r=a+s,q=0;q<e;++q)for(p=b+q,o=0;o<f;++o)this.a.W(r,p,c+o,g)},
a5:function(a,b,c,d,e,f){return this.dj(a,b,c,d,e,f,109)}}
B.ju.prototype={
$3:function(a,b,c){return this.a.a5(2+4*a,10+c,2+4*b,4,1,4)}}
B.jv.prototype={
$3:function(a,b,c){return this.a.a5(2+4*a,10,2+4*b,1,c,1)}}
B.fn.prototype={
fb:function(a,b){var s,r,q,p,o,n,m,l=this
l.c=[]
l.d=[]
l.e=[]
l.r=null
s=l.a
if(s!=null)for(s=s.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
l.e.push(E.c1(null,null,null,p))}for(o=0;o<140;++o)l.c.push(B.ol(l))
for(s=l.b,n=-32;n<32;n+=16)for(m=-32;m<32;m+=16)s.bS(l.eC(n,m))},
aW:function(a,b){var s,r,q,p
for(s=this.d,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a&&p.b===b)return p}return null},
am:function(a,b,c){var s,r,q,p=J.lj(a),o=J.lj(b),n=J.lj(c),m=p<0?p-16+1:p,l=n<0?n-16+1:n
m=C.c.a2(m,16)*16
l=C.c.a2(l,16)*16
s=this.aW(m,l)
r=p-m
q=n-l
if(r<0)r+=16
return new B.af(r,o,q<0?q+16:q,m,l,s)},
gcm:function(){var s=this.f.z.f.T(V.ey())
return s},
kc:function(a){this.iP(this.gcm())},
eR:function(a){var s=this.gcm()
this.fX(s)
this.il(s)},
iW:function(a){var s=this.a.x,r=s.b,q=s.e,p=q.length
r=(r+1)%p
if(r<p){s.b=r
s.c=q[r]
s=s.f
if(s!=null)s.dZ()}},
eC:function(a,b){var s,r=this.c
if(0>=r.length)return H.c(r,-1)
s=r.pop()
s.a=a
s.b=b
s.x=s.f=!0
s.saO(!1)
this.d.push(s)
return s},
jb:function(a){var s=C.b.V(this.d,a)
if(s){a.f=!1
a.saO(!1)
a.x=!0
a.r=!1
this.c.push(a)
return!0}return!1},
iP:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.am(a.a,a.b,a.c),c=d.f
if(e.r!=c){e.r=c
c=d.d
s=c-128
r=c+128
q=d.e
p=q-128
o=q+128
for(n=e.d.length-1;n>=0;--n){m=e.d
if(n>=m.length)return H.c(m,n)
l=m[n]
m=l.a
if(s<=m)if(r>m){m=l.b
m=p>m||o<=m}else m=!0
else m=!0
if(m)e.jb(l)}k=c-64
j=c+64
i=q-64
h=q+64
for(g=k;g<j;g+=16)for(f=i;f<h;f+=16)if(e.aW(g,f)==null)e.eC(g,f)}},
fX:function(a){var s,r,q,p,o,n,m,l,k,j,i=a.a
if(typeof i!=="number")return i.n()
s=i-8
i=a.c
if(typeof i!=="number")return i.n()
r=i-8
for(i=this.d,q=i.length,p=null,o=1e-9,n=0;n<q;++n){m=i[n]
if(m.x){l=m.a-s
k=m.b-r
j=l*l+k*k
if(p==null||o>j){o=j
p=m}}}if(p!=null)this.b.bS(p)},
il:function(a){var s,r,q,p,o,n,m,l,k,j,i=a.a
if(typeof i!=="number")return i.n()
s=i-8
i=a.c
if(typeof i!=="number")return i.n()
r=i-8
for(i=this.d,q=i.length,p=null,o=1e-9,n=0;n<q;++n){m=i[n]
if(m.f&&!m.x){l=m.a-s
k=m.b-r
j=l*l+k*k
if(p==null||o>j){o=j
p=m}}}if(p!=null){p.f=!1
p.r=!0}},
eT:function(a,b,c,d){var s,r=N.qY(c,a.gcz())
if(!r.a)return null
else{s=r.e
a=a.eo(s)}if(a==null)return null
return new B.en(a,s,b,d)},
ak:function(a,b){var s,r,q,p,o=this.f.z.f,n=o.T(V.ey()),m=o.T(new V.q(0,0,-16)),l=new V.S(n.a,n.c),k=new V.S(m.a,m.c)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.k8()
p.k9(l,k)}}};(function aliases(){var s=J.a.prototype
s.f1=s.i
s=J.b9.prototype
s.f2=s.i
s=K.e2.prototype
s.f0=s.bk
s.d3=s.i
s=Y.dO.prototype
s.f_=s.i
s=N.dP.prototype
s.eZ=s.i
s=O.cU.prototype
s.d4=s.aQ
s=O.aN.prototype
s.d5=s.aQ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_0i,k=hunkHelpers._instance_1i
s(J,"pX","oz",26)
r(P,"qB","p6",9)
r(P,"qC","p7",9)
r(P,"qD","p8",9)
q(P,"nw","qw",7)
r(W,"tE","ia",27)
var j
p(j=F.ew.prototype,"ghE","hF",4)
p(j,"ghC","hD",4)
o(j=E.c0.prototype,"gbW",0,0,null,["$1","$0"],["eu","jB"],1,0)
o(j,"gev",0,0,null,["$1","$0"],["ew","jC"],1,0)
o(j,"ger",0,0,null,["$1","$0"],["es","jA"],1,0)
o(j,"gep",0,0,null,["$1","$0"],["eq","jx"],1,0)
n(j,"gjv","jw",5)
n(j,"gjy","jz",5)
o(j=E.eW.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],1,0)
m(j,"gjR","eH",7)
p(j=X.cN.prototype,"gfe","ff",22)
n(j,"gfc","fd",11)
n(j,"gfg","fh",11)
p(j,"gc3","c4",0)
p(j,"gcj","ck",0)
p(j=X.fi.prototype,"ghG","hH",4)
p(j,"ghm","hn",4)
p(j,"ghw","hx",2)
p(j,"gcj","ck",12)
p(j,"gc3","c4",12)
p(j,"ghO","hP",2)
p(j,"ghS","hT",2)
p(j,"ghA","hB",2)
p(j,"ghQ","hR",2)
p(j,"ghy","hz",2)
p(j,"ghU","hV",23)
p(j,"ghY","hZ",4)
p(j,"gib","ic",8)
p(j,"gi7","i8",8)
p(j,"gi9","ia",8)
o(D.c_.prototype,"gho",0,0,null,["$1","$0"],["aP","hp"],1,0)
o(j=D.cO.prototype,"gdA",0,0,null,["$1","$0"],["dB","hM"],1,0)
p(j,"gi_","i0",24)
n(j,"ghc","hd",13)
n(j,"gi3","i4",13)
l(V.ac.prototype,"gm","cS",14)
l(V.u.prototype,"gm","cS",14)
o(j=U.c5.prototype,"gaE",0,0,null,["$1","$0"],["A","ae"],1,0)
n(j,"gfi","fj",15)
n(j,"gi1","i2",15)
o(U.c7.prototype,"gaE",0,0,null,["$1","$0"],["A","ae"],1,0)
o(j=U.d6.prototype,"gaE",0,0,null,["$1","$0"],["A","ae"],1,0)
p(j,"gh5","h6",0)
p(j,"gh7","h8",0)
p(j,"gh9","ha",0)
p(j,"gh1","h2",0)
p(j,"gh3","h4",0)
p(j,"giH","iI",0)
p(j,"giF","iG",0)
p(j,"giD","iE",0)
o(j=U.d7.prototype,"gaE",0,0,null,["$1","$0"],["A","ae"],1,0)
p(j,"ghK","hL",0)
o(j=M.dZ.prototype,"gb4",0,0,null,["$1","$0"],["b5","fk"],1,0)
n(j,"ghq","hr",5)
n(j,"ghs","ht",5)
o(j=O.ec.prototype,"gbF",0,0,null,["$1","$0"],["a4","c5"],1,0)
o(j,"gir",0,0,null,["$1","$0"],["dD","is"],1,0)
n(j,"ghe","hf",16)
n(j,"ghg","hh",16)
o(O.cU.prototype,"gbF",0,0,null,["$1","$0"],["a4","c5"],1,0)
o(X.et.prototype,"gda",0,0,null,["$1","$0"],["b6","fn"],1,0)
q(B,"qU","r_",7)
p(j=B.ev.prototype,"gi5","i6",0)
p(j,"ghI","hJ",0)
p(j,"ghk","hl",0)
p(j,"ghi","hj",0)
p(j,"ghu","hv",0)
p(j,"ghW","hX",0)
n(j,"gh_","h0",25)
p(j,"giM","iN",0)
p(j=B.fn.prototype,"gkb","kc",3)
p(j,"geQ","eR",3)
p(j,"giV","iW",3)
k(j,"gk7","ak",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.E,null)
q(P.E,[H.lw,J.a,J.a9,P.F,P.de,P.h,H.c9,P.e4,H.cI,H.ff,H.cC,H.jJ,H.iU,H.dn,H.bX,P.aC,H.iu,H.ea,H.e5,H.ap,H.fG,P.ds,P.co,P.cp,P.fs,P.fH,P.aF,P.fo,P.eQ,P.eR,P.d4,P.dL,P.kS,P.dk,P.kC,P.dd,P.D,P.hh,P.cS,P.dS,P.kR,P.kQ,P.b_,P.ag,P.X,P.ay,P.es,P.d2,P.fD,P.im,P.k,P.G,P.a5,P.aU,P.h7,P.B,P.V,P.bR,P.jU,P.fZ,W.i1,W.ls,W.lL,W.I,W.cJ,P.kH,P.du,P.kz,P.fX,P.bQ,L.iV,B.ig,B.aP,K.hH,K.e2,K.j9,L.eN,L.eX,L.eY,L.jF,F.hN,F.eh,F.ew,O.bY,O.cV,Y.ci,Y.dO,E.hT,E.c0,E.bW,E.cf,E.fA,E.j4,D.Z,E.eW,Z.fk,Z.kg,Z.cA,Z.bE,Z.a_,D.hV,D.c2,X.dR,X.aB,X.it,X.iy,X.bI,X.iT,X.jG,X.fi,N.dP,D.c_,D.aM,V.a1,V.bA,V.id,V.R,V.aD,V.ca,V.S,V.q,V.bN,V.eC,V.eD,V.d0,V.ac,V.u,U.c7,U.d6,U.d7,M.dZ,A.hK,A.hL,A.a2,A.hQ,A.i5,A.iX,A.jn,A.iD,A.f5,A.f6,A.f9,A.fc,A.jL,A.jR,F.ij,F.j2,F.ja,F.jb,F.jc,F.jd,F.k8,F.k9,F.ka,F.kd,O.js,O.cU,O.iE,T.jA,X.lp,X.jq,X.et,V.jj,B.af,B.hW,B.hX,B.hY,B.M,B.iP,B.en,B.ev,B.iZ,B.je,B.jm,B.jt,B.fn])
q(J.a,[J.ir,J.c8,J.b9,J.ao,J.b8,J.aK,H.cW,H.T,W.e,W.hG,W.by,W.aH,W.H,W.fu,W.an,W.i4,W.i6,W.fw,W.cG,W.fy,W.i7,W.i,W.fE,W.b7,W.iq,W.fJ,W.bD,W.ix,W.iQ,W.fN,W.fO,W.bc,W.fP,W.fR,W.be,W.fV,W.fY,W.bh,W.h_,W.bi,W.h4,W.aV,W.h9,W.jD,W.bk,W.hb,W.jH,W.jZ,W.hi,W.hk,W.hm,W.ho,W.hq,P.bG,P.fL,P.bL,P.fT,P.iY,P.h5,P.bP,P.hd,P.hM,P.fp,P.eE,P.h2])
q(J.b9,[J.eu,J.bl,J.aA])
r(J.e6,J.ao)
q(J.b8,[J.cM,J.cL])
q(P.F,[H.e8,H.eo,H.e7,H.fe,H.eG,H.fB,P.dK,P.ep,P.am,P.fg,P.fd,P.d3,P.dU,P.dW])
r(P.cP,P.de)
q(P.cP,[H.cj,W.fr,W.fq,P.e0])
r(H.P,H.cj)
q(P.h,[H.j,H.bH,H.d9,P.cK])
r(H.cH,H.bH)
q(P.e4,[H.cT,H.fm])
r(H.cD,H.cC)
q(H.bX,[H.jr,H.is,H.l4,H.l5,H.l6,P.ki,P.kh,P.kj,P.kk,P.kM,P.kL,P.km,P.ku,P.kq,P.kr,P.ks,P.ko,P.kt,P.kn,P.kx,P.ky,P.kw,P.kv,P.l_,P.kF,P.kE,P.kG,P.iz,P.k1,P.k2,P.i8,P.i9,P.jY,P.jV,P.jW,P.jX,P.kO,P.kN,P.kU,P.kT,P.kV,P.kW,W.iR,W.iS,W.j8,W.jp,W.kl,P.kJ,P.kK,P.l0,P.ik,P.il,P.la,P.lb,P.hP,F.hO,E.j5,E.j6,E.j7,E.jC,D.ih,D.ii,F.kf,F.ke,F.kb,F.kc,O.iH,O.iI,O.iJ,O.iK,O.iL,O.iM,O.iN,O.iO,T.jB,V.jl,V.jk,B.lc,B.ld,B.iW,B.j0,B.j_,B.j1,B.jf,B.jg,B.jh,B.ji,B.ju,B.jv])
q(H.jr,[H.jo,H.cz])
r(P.cR,P.aC)
r(H.w,P.cR)
r(H.bb,H.j)
r(H.ce,H.T)
q(H.ce,[H.dg,H.di])
r(H.dh,H.dg)
r(H.bJ,H.dh)
r(H.dj,H.di)
r(H.cX,H.dj)
q(H.cX,[H.ei,H.ej,H.ek,H.el,H.em,H.cY,H.bK])
r(H.dt,H.fB)
r(P.dp,P.cK)
r(P.da,P.fs)
r(P.kD,P.kS)
r(P.dc,P.dk)
r(P.dx,P.cS)
r(P.ck,P.dx)
q(P.dS,[P.hR,P.ib])
r(P.dV,P.eR)
q(P.dV,[P.hS,P.k3,P.k0])
r(P.k_,P.ib)
q(P.X,[P.ar,P.n])
q(P.am,[P.ch,P.e3])
r(P.fv,P.bR)
q(W.e,[W.z,W.e_,W.cc,W.aT,W.dl,W.aW,W.aq,W.dq,W.fj,W.cm,P.dN,P.b6])
q(W.z,[W.N,W.ax])
q(W.N,[W.m,P.l])
q(W.m,[W.dI,W.dJ,W.bz,W.e1,W.c6,W.eH,W.bj])
r(W.i0,W.aH)
r(W.cE,W.fu)
q(W.an,[W.i2,W.i3])
r(W.fx,W.fw)
r(W.cF,W.fx)
r(W.fz,W.fy)
r(W.dY,W.fz)
r(W.az,W.by)
r(W.fF,W.fE)
r(W.c3,W.fF)
r(W.fK,W.fJ)
r(W.bC,W.fK)
r(W.aY,W.i)
q(W.aY,[W.bF,W.ai,W.bO])
r(W.ee,W.fN)
r(W.ef,W.fO)
r(W.fQ,W.fP)
r(W.eg,W.fQ)
r(W.fS,W.fR)
r(W.cZ,W.fS)
r(W.fW,W.fV)
r(W.ex,W.fW)
r(W.eF,W.fY)
r(W.dm,W.dl)
r(W.eK,W.dm)
r(W.h0,W.h_)
r(W.eL,W.h0)
r(W.eP,W.h4)
r(W.ha,W.h9)
r(W.eU,W.ha)
r(W.dr,W.dq)
r(W.eV,W.dr)
r(W.hc,W.hb)
r(W.eZ,W.hc)
r(W.bm,W.ai)
r(W.hj,W.hi)
r(W.ft,W.hj)
r(W.db,W.cG)
r(W.hl,W.hk)
r(W.fI,W.hl)
r(W.hn,W.hm)
r(W.df,W.hn)
r(W.hp,W.ho)
r(W.h1,W.hp)
r(W.hr,W.hq)
r(W.h8,W.hr)
r(W.fC,P.eQ)
r(P.kI,P.kH)
r(P.aj,P.fX)
r(P.fM,P.fL)
r(P.e9,P.fM)
r(P.fU,P.fT)
r(P.eq,P.fU)
r(P.h6,P.h5)
r(P.eS,P.h6)
r(P.he,P.hd)
r(P.f_,P.he)
r(P.dM,P.fp)
r(P.er,P.b6)
r(P.h3,P.h2)
r(P.eM,P.h3)
q(K.e2,[K.bd,L.jI])
r(Y.f0,Y.dO)
q(D.Z,[E.eO,D.aI,D.aJ,D.A,X.ba,X.ez])
q(E.hT,[Z.dQ,A.eI,T.jw])
q(O.bY,[X.cN,D.cO,U.c5])
q(X.ez,[X.cQ,X.cd,X.d5])
r(N.U,N.dP)
q(D.hV,[U.i_,U.a3,F.lE])
q(U.a3,[U.cB,U.d1])
r(A.iA,A.eI)
q(A.jL,[A.f2,A.jO,A.jP,A.jQ,A.jM,A.f1,A.jN,A.f3,A.f4,A.jS,A.f7,A.f8,A.fa,A.fb])
r(O.ec,O.js)
q(O.cU,[O.iB,O.iC,O.aN])
q(O.aN,[O.iF,O.iG])
r(T.jx,T.jw)
q(T.jx,[T.jy,T.jz])
r(X.io,X.jq)
s(H.cj,H.ff)
s(H.dg,P.D)
s(H.dh,H.cI)
s(H.di,P.D)
s(H.dj,H.cI)
s(P.de,P.D)
s(P.dx,P.hh)
s(W.fu,W.i1)
s(W.fw,P.D)
s(W.fx,W.I)
s(W.fy,P.D)
s(W.fz,W.I)
s(W.fE,P.D)
s(W.fF,W.I)
s(W.fJ,P.D)
s(W.fK,W.I)
s(W.fN,P.aC)
s(W.fO,P.aC)
s(W.fP,P.D)
s(W.fQ,W.I)
s(W.fR,P.D)
s(W.fS,W.I)
s(W.fV,P.D)
s(W.fW,W.I)
s(W.fY,P.aC)
s(W.dl,P.D)
s(W.dm,W.I)
s(W.h_,P.D)
s(W.h0,W.I)
s(W.h4,P.aC)
s(W.h9,P.D)
s(W.ha,W.I)
s(W.dq,P.D)
s(W.dr,W.I)
s(W.hb,P.D)
s(W.hc,W.I)
s(W.hi,P.D)
s(W.hj,W.I)
s(W.hk,P.D)
s(W.hl,W.I)
s(W.hm,P.D)
s(W.hn,W.I)
s(W.ho,P.D)
s(W.hp,W.I)
s(W.hq,P.D)
s(W.hr,W.I)
s(P.fL,P.D)
s(P.fM,W.I)
s(P.fT,P.D)
s(P.fU,W.I)
s(P.h5,P.D)
s(P.h6,W.I)
s(P.hd,P.D)
s(P.he,W.I)
s(P.fp,P.aC)
s(P.h2,P.D)
s(P.h3,W.I)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",ar:"double",X:"num",B:"String",b_:"bool",a5:"Null",k:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(Z*)","~([Z*])","~(ai*)","~(@)","~(i*)","~(n*,h<c0*>*)","a5(@,@)","~()","~(bO*)","~(~())","a5(@)","~(n*,h<aB*>*)","~(bF*)","~(n*,h<aM*>*)","ar*()","~(n*,h<a3*>*)","~(n*,h<ca*>*)","@(@)","a5(E,aU)","aF<@>(@)","a5(E?,E?)","bQ(@,@)","b_*(h<aB*>*)","~(bm*)","b_*(h<aM*>*)","q*(q*,q*)","n(@,@)","B(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pr(v.typeUniverse,JSON.parse('{"aA":"b9","eu":"b9","bl":"b9","r5":"i","rx":"i","r7":"b6","r6":"e","rS":"e","rU":"e","r4":"l","rz":"l","r8":"m","rP":"m","rN":"z","rt":"z","ti":"aq","rc":"aY","r9":"ax","rV":"ax","rT":"ai","rO":"bC","rR":"bJ","rQ":"T","c8":{"a5":[]},"b9":{"mn":[]},"ao":{"k":["1"],"j":["1"],"h":["1"]},"e6":{"k":["1"],"j":["1"],"h":["1"]},"b8":{"X":[]},"cM":{"n":[],"X":[]},"cL":{"X":[]},"aK":{"B":[]},"e8":{"F":[]},"P":{"k":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"bH":{"h":["2"]},"cH":{"j":["2"],"h":["2"]},"d9":{"h":["1"]},"cj":{"k":["1"],"j":["1"],"h":["1"]},"cC":{"G":["1","2"]},"cD":{"G":["1","2"]},"eo":{"F":[]},"e7":{"F":[]},"fe":{"F":[]},"dn":{"aU":[]},"eG":{"F":[]},"w":{"G":["1","2"]},"bb":{"j":["1"],"h":["1"]},"e5":{"mI":[]},"ce":{"v":["1"],"T":[]},"bJ":{"v":["ar"],"k":["ar"],"T":[],"j":["ar"],"h":["ar"]},"cX":{"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"ei":{"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"ej":{"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"ek":{"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"el":{"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"em":{"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"cY":{"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"bK":{"bQ":[],"v":["n"],"k":["n"],"T":[],"j":["n"],"h":["n"]},"fB":{"F":[]},"dt":{"F":[]},"ds":{"d4":[]},"dp":{"h":["1"]},"da":{"fs":["1"]},"aF":{"c4":["1"]},"dL":{"F":[]},"dc":{"j":["1"],"h":["1"]},"cK":{"h":["1"]},"cP":{"k":["1"],"j":["1"],"h":["1"]},"cR":{"G":["1","2"]},"aC":{"G":["1","2"]},"cS":{"G":["1","2"]},"ck":{"G":["1","2"]},"dk":{"j":["1"],"h":["1"]},"ar":{"X":[]},"dK":{"F":[]},"ep":{"F":[]},"am":{"F":[]},"ch":{"F":[]},"e3":{"F":[]},"fg":{"F":[]},"fd":{"F":[]},"d3":{"F":[]},"dU":{"F":[]},"es":{"F":[]},"d2":{"F":[]},"dW":{"F":[]},"n":{"X":[]},"k":{"j":["1"],"h":["1"]},"h7":{"aU":[]},"bR":{"fh":[]},"fZ":{"fh":[]},"fv":{"fh":[]},"m":{"N":[],"z":[],"e":[]},"dI":{"N":[],"z":[],"e":[]},"dJ":{"N":[],"z":[],"e":[]},"bz":{"N":[],"z":[],"e":[]},"ax":{"z":[],"e":[]},"cF":{"k":["aj<X>"],"v":["aj<X>"],"j":["aj<X>"],"h":["aj<X>"]},"cG":{"aj":["X"]},"dY":{"k":["B"],"v":["B"],"j":["B"],"h":["B"]},"fr":{"k":["N"],"j":["N"],"h":["N"]},"N":{"z":[],"e":[]},"az":{"by":[]},"c3":{"k":["az"],"v":["az"],"j":["az"],"h":["az"]},"e_":{"e":[]},"e1":{"N":[],"z":[],"e":[]},"bC":{"k":["z"],"v":["z"],"j":["z"],"h":["z"]},"c6":{"N":[],"z":[],"e":[]},"bF":{"i":[]},"cc":{"e":[]},"ee":{"G":["B","@"]},"ef":{"G":["B","@"]},"eg":{"k":["bc"],"v":["bc"],"j":["bc"],"h":["bc"]},"ai":{"i":[]},"fq":{"k":["z"],"j":["z"],"h":["z"]},"z":{"e":[]},"cZ":{"k":["z"],"v":["z"],"j":["z"],"h":["z"]},"ex":{"k":["be"],"v":["be"],"j":["be"],"h":["be"]},"eF":{"G":["B","@"]},"eH":{"N":[],"z":[],"e":[]},"aT":{"e":[]},"eK":{"k":["aT"],"v":["aT"],"e":[],"j":["aT"],"h":["aT"]},"eL":{"k":["bh"],"v":["bh"],"j":["bh"],"h":["bh"]},"eP":{"G":["B","B"]},"bj":{"N":[],"z":[],"e":[]},"aW":{"e":[]},"aq":{"e":[]},"eU":{"k":["aq"],"v":["aq"],"j":["aq"],"h":["aq"]},"eV":{"k":["aW"],"v":["aW"],"e":[],"j":["aW"],"h":["aW"]},"bO":{"i":[]},"eZ":{"k":["bk"],"v":["bk"],"j":["bk"],"h":["bk"]},"aY":{"i":[]},"fj":{"e":[]},"bm":{"ai":[],"i":[]},"cm":{"e":[]},"ft":{"k":["H"],"v":["H"],"j":["H"],"h":["H"]},"db":{"aj":["X"]},"fI":{"k":["b7?"],"v":["b7?"],"j":["b7?"],"h":["b7?"]},"df":{"k":["z"],"v":["z"],"j":["z"],"h":["z"]},"h1":{"k":["bi"],"v":["bi"],"j":["bi"],"h":["bi"]},"h8":{"k":["aV"],"v":["aV"],"j":["aV"],"h":["aV"]},"du":{"bD":[]},"e0":{"k":["N"],"j":["N"],"h":["N"]},"aj":{"fX":["1"]},"e9":{"k":["bG"],"j":["bG"],"h":["bG"]},"eq":{"k":["bL"],"j":["bL"],"h":["bL"]},"eS":{"k":["B"],"j":["B"],"h":["B"]},"l":{"N":[],"z":[],"e":[]},"f_":{"k":["bP"],"j":["bP"],"h":["bP"]},"bQ":{"k":["n"],"j":["n"],"h":["n"]},"dM":{"G":["B","@"]},"dN":{"e":[]},"b6":{"e":[]},"er":{"e":[]},"eM":{"k":["G<@,@>"],"j":["G<@,@>"],"h":["G<@,@>"]},"bY":{"h":["1*"]},"eO":{"Z":[]},"aI":{"Z":[]},"aJ":{"Z":[]},"A":{"Z":[]},"ba":{"Z":[]},"cN":{"h":["aB*"]},"cQ":{"Z":[]},"cd":{"Z":[]},"ez":{"Z":[]},"d5":{"Z":[]},"c_":{"aM":[]},"cO":{"h":["aM*"]},"cB":{"a3":[]},"c5":{"a3":[],"h":["a3*"]},"c7":{"a3":[]},"d1":{"a3":[]},"d6":{"a3":[]},"d7":{"a3":[]}}'))
H.pq(v.typeUniverse,JSON.parse('{"ao":1,"e6":1,"a9":1,"j":1,"c9":1,"bH":2,"cH":2,"cT":2,"d9":1,"fm":1,"cI":1,"ff":1,"cj":1,"cC":2,"bb":1,"ea":1,"ce":1,"cp":1,"dp":1,"fH":2,"eQ":1,"eR":2,"dd":1,"cK":1,"cP":1,"D":1,"cR":2,"aC":2,"hh":2,"cS":2,"dk":1,"de":1,"dx":2,"dS":2,"dV":2,"h":1,"e4":1,"k":1,"fC":1,"I":1,"cJ":1,"bY":1,"aI":1,"aJ":1,"A":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.nx
return{x:s("by"),Y:s("j<@>"),h:s("N"),C:s("F"),D:s("i"),L:s("az"),u:s("c3"),Z:s("ry"),e:s("c4<@>"),s:s("bD"),k:s("c6"),b:s("ao<@>"),T:s("c8"),m:s("mn"),g:s("aA"),p:s("v<@>"),F:s("w<B*,eI*>"),G:s("w<B*,eN*>"),l:s("w<B*,B*>"),w:s("w<B*,eY*>"),v:s("w<n*,M*>"),M:s("w<n*,k<f5*>*>"),bn:s("w<n*,k<f6*>*>"),b9:s("w<n*,k<f9*>*>"),bL:s("w<n*,k<fc*>*>"),W:s("w<n*,k<n*>*>"),bJ:s("w<n*,eh*>"),J:s("w<n*,f2*>"),E:s("w<n*,b_*>"),a:s("w<n*,n*>"),j:s("k<@>"),f:s("G<@,@>"),cB:s("cc"),o:s("cW"),t:s("T"),cr:s("bK"),P:s("a5"),K:s("E"),q:s("aj<X>"),a7:s("mI"),N:s("B"),aL:s("bj"),ae:s("d4"),cC:s("bl"),S:s("ck<B,B>"),R:s("fh"),aa:s("b_"),cb:s("ar"),z:s("@"),b6:s("@(E)"),U:s("@(E,aU)"),cp:s("n"),B:s("bz*"),i:s("ba*"),cj:s("cQ*"),d:s("cd*"),A:s("0&*"),_:s("E*"),X:s("B*"),ag:s("eX*"),ap:s("d5*"),n:s("f1*"),r:s("f3*"),y:s("f4*"),O:s("f7*"),I:s("f8*"),c:s("fa*"),Q:s("fb*"),cH:s("n*"),bc:s("c4<a5>?"),V:s("E?"),H:s("X")}})();(function constants(){var s=hunkHelpers.makeConstList
C.j=W.bz.prototype
C.W=J.a.prototype
C.b=J.ao.prototype
C.i=J.cL.prototype
C.c=J.cM.prototype
C.l=J.c8.prototype
C.d=J.b8.prototype
C.a=J.aK.prototype
C.X=J.aA.prototype
C.a0=H.bK.prototype
C.A=J.eu.prototype
C.a4=P.eE.prototype
C.q=J.bl.prototype
C.D=W.bm.prototype
C.E=W.cm.prototype
C.F=new E.bW("Browser.chrome")
C.r=new E.bW("Browser.firefox")
C.t=new E.bW("Browser.edge")
C.G=new E.bW("Browser.other")
C.a8=new P.hS()
C.H=new P.hR()
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.O=new P.es()
C.f=new P.k_()
C.P=new P.k3()
C.Q=new P.kz()
C.e=new P.kD()
C.R=new P.h7()
C.k=new P.ay(0)
C.S=new P.ay(25e4)
C.T=new P.ay(5e6)
C.U=new P.ay(7e4)
C.V=new P.ay(75e4)
C.m=s([0,0,32776,33792,1,10240,0,0])
C.n=s([0,0,65490,45055,65535,34815,65534,18431])
C.o=s([0,0,26624,1023,65534,2047,65534,2047])
C.Z=s([0,0,32722,12287,65534,34815,65534,18431])
C.w=s([0,0,65498,45055,65535,34815,65534,18431])
C.h=s([0,0,24576,1023,65534,34815,65534,18431])
C.x=s([0,0,32754,11263,65534,34815,65534,18431])
C.y=s([0,0,65490,12287,65535,34815,65534,18431])
C.Y=s([])
C.a_=new H.cD(0,{},C.Y,H.nx("cD<B*,B*>"))
C.a1=new E.cf("OperatingSystem.windows")
C.z=new E.cf("OperatingSystem.mac")
C.a2=new E.cf("OperatingSystem.linux")
C.a3=new E.cf("OperatingSystem.other")
C.B=new Y.ci("Type.Intesected")
C.C=new Y.ci("Type.NoCollision")
C.a5=new Y.ci("Type.OutOfRange")
C.p=new Y.ci("Type.Collision")
C.a6=new P.k0(!1)
C.a7=new P.co(null,2)})();(function staticFields(){$.n7=null
$.aG=0
$.mj=null
$.mi=null
$.nz=null
$.nv=null
$.nF=null
$.l1=null
$.l7=null
$.m1=null
$.cs=null
$.dA=null
$.dB=null
$.lY=!1
$.L=C.e
$.ad=[]
$.ic=null
$.mu=null
$.my=null
$.mC=null
$.aR=null
$.mJ=null
$.mW=null
$.k7=null
$.n_=null
$.k4=null
$.k5=null
$.mY=null
$.k6=null
$.mZ=null
$.mA=null
$.hU=[101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205]})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"rs","nM",function(){return H.qN("_$dart_dartClosure")})
s($,"rW","nR",function(){return H.aX(H.jK({
toString:function(){return"$receiver$"}}))})
s($,"rX","nS",function(){return H.aX(H.jK({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rY","nT",function(){return H.aX(H.jK(null))})
s($,"rZ","nU",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"t1","nX",function(){return H.aX(H.jK(void 0))})
s($,"t2","nY",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"t0","nW",function(){return H.aX(H.mQ(null))})
s($,"t_","nV",function(){return H.aX(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"t4","o_",function(){return H.aX(H.mQ(void 0))})
s($,"t3","nZ",function(){return H.aX(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"tj","mc",function(){return P.p5()})
s($,"t5","o0",function(){return new P.k1().$0()})
s($,"t6","o1",function(){return new P.k2().$0()})
s($,"tk","o4",function(){return new Int8Array(H.cr([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2]))})
s($,"tm","o5",function(){return P.oR("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"tC","o6",function(){return P.pO()})
s($,"ru","nN",function(){return[B.aQ(5,2),B.aQ(2,5),B.aQ(-5,2),B.aQ(-2,5),B.aQ(5,-2),B.aQ(2,-5),B.aQ(-5,-2),B.aQ(-2,-5)]})
s($,"rw","nO",function(){return B.aQ(-0.211324865405187,-0.211324865405187)})
s($,"rv","m9",function(){return B.aQ(0.366025403784439,0.366025403784439)})
s($,"tc","o3",function(){return Z.aE(0)})
s($,"te","Y",function(){return Z.aE(1)})
s($,"td","a8",function(){return Z.aE(2)})
s($,"t8","bx",function(){return Z.aE(4)})
s($,"tf","a0",function(){return Z.aE(8)})
s($,"tg","bU",function(){return Z.aE(16)})
s($,"t9","dF",function(){return Z.aE(32)})
s($,"ta","dG",function(){return Z.aE(64)})
s($,"tb","o2",function(){return Z.aE(96)})
s($,"th","cx",function(){return Z.aE(128)})
s($,"t7","bw",function(){return Z.aE(256)})
s($,"rb","nL",function(){return new V.id()})
s($,"ra","t",function(){return $.nL()})
s($,"rD","O",function(){return V.ah(0)})
s($,"rA","hE",function(){return V.ah(511)})
s($,"rG","au",function(){return V.ah(1)})
s($,"rE","ma",function(){return V.ah(2)})
s($,"rF","at",function(){return V.ah(4)})
s($,"rJ","av",function(){return V.ah(8)})
s($,"rH","mb",function(){return V.ah(16)})
s($,"rI","b1",function(){return V.ah(32)})
s($,"rM","b3",function(){return V.ah(64)})
s($,"rK","nQ",function(){return V.ah(128)})
s($,"rL","b2",function(){return V.ah(256)})
s($,"rC","hF",function(){return V.ah(146)})
s($,"rB","nP",function(){return V.ah(365)})
s($,"rp","m7",function(){return V.j3(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
s($,"rr","hD",function(){return V.lJ()})
s($,"ri","hy",function(){var r=$.mY
return r==null?$.mY=V.mX(0,-1,0):r})
s($,"ro","m6",function(){var r=$.n_
return r==null?$.n_=V.mX(1,0,0):r})
s($,"rq","m8",function(){return V.n0()})
s($,"rl","lf",function(){return V.lK()})
s($,"rf","m5",function(){return V.n1()})
s($,"rm","hB",function(){return V.bM(-0.5,0.5,0.5)})
s($,"rn","hC",function(){return V.bM(0.5,0.5,0.5)})
s($,"rj","hz",function(){return V.bM(-0.5,-0.5,0.5)})
s($,"rk","hA",function(){return V.bM(0.5,-0.5,0.5)})
s($,"rg","hw",function(){return V.bM(-0.5,0.5,-0.5)})
s($,"rh","hx",function(){return V.bM(0.5,0.5,-0.5)})
s($,"rd","hu",function(){return V.bM(-0.5,-0.5,-0.5)})
s($,"re","hv",function(){return V.bM(0.5,-0.5,-0.5)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cW,DataView:H.T,ArrayBufferView:H.T,Float32Array:H.bJ,Float64Array:H.bJ,Int16Array:H.ei,Int32Array:H.ej,Int8Array:H.ek,Uint16Array:H.el,Uint32Array:H.em,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.bK,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.hG,HTMLAnchorElement:W.dI,HTMLAreaElement:W.dJ,Blob:W.by,HTMLCanvasElement:W.bz,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.i0,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cE,MSStyleCSSProperties:W.cE,CSS2Properties:W.cE,CSSImageValue:W.an,CSSKeywordValue:W.an,CSSNumericValue:W.an,CSSPositionValue:W.an,CSSResourceValue:W.an,CSSUnitValue:W.an,CSSURLImageValue:W.an,CSSStyleValue:W.an,CSSMatrixComponent:W.aH,CSSRotation:W.aH,CSSScale:W.aH,CSSSkew:W.aH,CSSTranslation:W.aH,CSSTransformComponent:W.aH,CSSTransformValue:W.i2,CSSUnparsedValue:W.i3,DataTransferItemList:W.i4,DOMException:W.i6,ClientRectList:W.cF,DOMRectList:W.cF,DOMRectReadOnly:W.cG,DOMStringList:W.dY,DOMTokenList:W.i7,Element:W.N,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.az,FileList:W.c3,FileWriter:W.e_,HTMLFormElement:W.e1,Gamepad:W.b7,History:W.iq,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,ImageData:W.bD,HTMLImageElement:W.c6,KeyboardEvent:W.bF,Location:W.ix,MediaList:W.iQ,MessagePort:W.cc,MIDIInputMap:W.ee,MIDIOutputMap:W.ef,MimeType:W.bc,MimeTypeArray:W.eg,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.z,DocumentFragment:W.z,HTMLDocument:W.z,ShadowRoot:W.z,XMLDocument:W.z,Attr:W.z,DocumentType:W.z,Node:W.z,NodeList:W.cZ,RadioNodeList:W.cZ,Plugin:W.be,PluginArray:W.ex,RTCStatsReport:W.eF,HTMLSelectElement:W.eH,SourceBuffer:W.aT,SourceBufferList:W.eK,SpeechGrammar:W.bh,SpeechGrammarList:W.eL,SpeechRecognitionResult:W.bi,Storage:W.eP,CSSStyleSheet:W.aV,StyleSheet:W.aV,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,TextTrack:W.aW,TextTrackCue:W.aq,VTTCue:W.aq,TextTrackCueList:W.eU,TextTrackList:W.eV,TimeRanges:W.jD,Touch:W.bk,TouchEvent:W.bO,TouchList:W.eZ,TrackDefaultList:W.jH,CompositionEvent:W.aY,FocusEvent:W.aY,TextEvent:W.aY,UIEvent:W.aY,URL:W.jZ,VideoTrackList:W.fj,WheelEvent:W.bm,Window:W.cm,DOMWindow:W.cm,CSSRuleList:W.ft,ClientRect:W.db,DOMRect:W.db,GamepadList:W.fI,NamedNodeMap:W.df,MozNamedAttrMap:W.df,SpeechRecognitionResultList:W.h1,StyleSheetList:W.h8,SVGLength:P.bG,SVGLengthList:P.e9,SVGNumber:P.bL,SVGNumberList:P.eq,SVGPointList:P.iY,SVGStringList:P.eS,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGScriptElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGTransform:P.bP,SVGTransformList:P.f_,AudioBuffer:P.hM,AudioParamMap:P.dM,AudioTrackList:P.dN,AudioContext:P.b6,webkitAudioContext:P.b6,BaseAudioContext:P.b6,OfflineAudioContext:P.er,WebGL2RenderingContext:P.eE,SQLResultSetRowList:P.eM})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.nD,[])
else B.nD([])})})()
//# sourceMappingURL=main.dart.js.map
