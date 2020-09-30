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
a[c]=function(){a[c]=function(){H.pT(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.l0(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kB:function kB(){},
kD:function(a){return new H.dK(a)},
jU:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
nu:function(a,b){if(t.Y.b(a))return new H.cc(a,b)
return new H.bq(a,b)},
lq:function(){return new P.er("No element")},
nP:function(a,b){var s=J.aU(a)
if(typeof s!=="number")return s.p()
H.ek(a,0,s-1,b)},
ek:function(a,b,c,d){if(c-b<=32)H.nO(a,b,c,d)
else H.nN(a,b,c,d)},
nO:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aP(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.X()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
nN:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.Y(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.Y(a6+a7,2),d=e-h,c=e+h,b=J.aP(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.X()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.C(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a5()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.X()
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
if(typeof j!=="number")return j.a5()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.X()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.X()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a5()
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
H.ek(a5,a6,r-2,a8)
H.ek(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.C(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.C(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a5()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.ek(a5,r,q,a8)}else H.ek(a5,r,q,a8)},
dK:function dK(a){this.a=a},
N:function N(a){this.a=a},
m:function m(){},
bI:function bI(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bq:function bq(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=null
this.b=a
this.c=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
cd:function cd(){},
eQ:function eQ(){},
bS:function bS(){},
nf:function(){throw H.c(P.x("Cannot modify unmodifiable Map"))},
mH:function(a){var s,r=H.mG(a)
if(r!=null)return r
s="minified:"+a
return s},
mz:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
h:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a5(a)
if(typeof s!="string")throw H.c(H.af(a))
return s},
cu:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lE:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
ed:function(a){return H.nx(a)},
nx:function(a){var s,r,q
if(a instanceof P.K)return H.ae(H.bw(a),null)
if(J.da(a)===C.M||t.ak.b(a)){s=C.r(a)
if(H.lD(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.lD(q))return q}}return H.ae(H.bw(a),null)},
lD:function(a){var s=a!=="Object"&&a!==""
return s},
ny:function(){if(!!self.location)return self.location.href
return null},
lC:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nG:function(a){var s,r,q,p=H.e([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.bZ(q))throw H.c(H.af(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aH(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.af(q))}return H.lC(p)},
lF:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bZ(q))throw H.c(H.af(q))
if(q<0)throw H.c(H.af(q))
if(q>65535)return H.nG(a)}return H.lC(a)},
nH:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.hU()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aJ:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aH(s,10))>>>0,56320|s&1023)}}throw H.c(P.a_(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nF:function(a){var s=H.bQ(a).getFullYear()+0
return s},
nD:function(a){var s=H.bQ(a).getMonth()+1
return s},
nz:function(a){var s=H.bQ(a).getDate()+0
return s},
nA:function(a){var s=H.bQ(a).getHours()+0
return s},
nC:function(a){var s=H.bQ(a).getMinutes()+0
return s},
nE:function(a){var s=H.bQ(a).getSeconds()+0
return s},
nB:function(a){var s=H.bQ(a).getMilliseconds()+0
return s},
f:function(a){throw H.c(H.af(a))},
b:function(a,b){if(a==null)J.aU(a)
throw H.c(H.c2(a,b))},
c2:function(a,b){var s,r,q="index"
if(!H.bZ(b))return new P.ag(!0,b,q,null)
s=J.aU(a)
if(!(b<0)){if(typeof s!=="number")return H.f(s)
r=b>=s}else r=!0
if(r)return P.M(b,a,q,null,s)
return P.ee(b,q)},
pC:function(a,b,c){if(a>c)return P.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a_(b,a,c,"end",null)
return new P.ag(!0,b,"end",null)},
af:function(a){return new P.ag(!0,a,null,null)},
pu:function(a){if(typeof a!="number")throw H.c(H.af(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.e2()
s=new Error()
s.dartException=a
r=H.pU
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pU:function(){return J.a5(this.dartException)},
q:function(a){throw H.c(a)},
r:function(a){throw H.c(P.bh(a))},
aL:function(a){var s,r,q,p,o,n
a=H.mD(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lS:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ly:function(a,b){return new H.e1(a,b==null?null:b.method)},
kC:function(a,b){var s=b==null,r=s?null:b.method
return new H.dI(a,r,s?null:b.receiver)},
ba:function(a){if(a==null)return new H.i6(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bx(a,a.dartException)
return H.pq(a)},
bx:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pq:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aH(r,16)&8191)===10)switch(q){case 438:return H.bx(a,H.kC(H.h(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bx(a,H.ly(H.h(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.mK()
o=$.mL()
n=$.mM()
m=$.mN()
l=$.mQ()
k=$.mR()
j=$.mP()
$.mO()
i=$.mT()
h=$.mS()
g=p.ae(s)
if(g!=null)return H.bx(a,H.kC(s,g))
else{g=o.ae(s)
if(g!=null){g.method="call"
return H.bx(a,H.kC(s,g))}else{g=n.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=l.ae(s)
if(g==null){g=k.ae(s)
if(g==null){g=j.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=i.ae(s)
if(g==null){g=h.ae(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bx(a,H.ly(s,g))}}return H.bx(a,new H.eP(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cw()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bx(a,new P.ag(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cw()
return a},
l3:function(a){var s
if(a==null)return new H.fC(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fC(a)},
pE:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
pK:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pK)
a.$identity=s
return s},
ne:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iq().constructor.prototype):Object.create(new H.c5(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aB
if(typeof r!=="number")return r.n()
$.aB=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lk(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.na(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lk(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
na:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mx,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.n8:H.n7
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nb:function(a,b,c,d){var s=H.lj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lk:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nd(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nb(r,!p,s,b)
if(r===0){p=$.aB
if(typeof p!=="number")return p.n()
$.aB=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.h(H.ks())+";return "+n+"."+H.h(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aB
if(typeof p!=="number")return p.n()
$.aB=p+1
m+=p
return new Function("return function("+m+"){return this."+H.h(H.ks())+"."+H.h(s)+"("+m+");}")()},
nc:function(a,b,c,d){var s=H.lj,r=H.n9
switch(b?-1:a){case 0:throw H.c(new H.ei("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nd:function(a,b){var s,r,q,p,o,n,m=H.ks(),l=$.lh
if(l==null)l=$.lh=H.lg("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nc(r,!p,s,b)
if(r===1){p="return function(){return this."+H.h(m)+"."+H.h(s)+"(this."+l+");"
o=$.aB
if(typeof o!=="number")return o.n()
$.aB=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.h(m)+"."+H.h(s)+"(this."+l+", "+n+");"
o=$.aB
if(typeof o!=="number")return o.n()
$.aB=o+1
return new Function(p+o+"}")()},
l0:function(a,b,c,d,e,f,g){return H.ne(a,b,c,d,!!e,!!f,g)},
n7:function(a,b){return H.fP(v.typeUniverse,H.bw(a.a),b)},
n8:function(a,b){return H.fP(v.typeUniverse,H.bw(a.c),b)},
lj:function(a){return a.a},
n9:function(a){return a.c},
ks:function(){var s=$.li
return s==null?$.li=H.lg("self"):s},
lg:function(a){var s,r,q,p=new H.c5("self","target","receiver","name"),o=J.kA(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bA("Field name "+a+" not found."))},
pT:function(a){throw H.c(new P.dt(a))},
pG:function(a){return v.getIsolateTag(a)},
r1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pN:function(a){var s,r,q,p,o,n=$.mw.$1(a),m=$.jQ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ms.$2(a,n)
if(q!=null){m=$.jQ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kj(s)
$.jQ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jY[n]=s
return s}if(p==="-"){o=H.kj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mB(a,s)
if(p==="*")throw H.c(P.iR(n))
if(v.leafTags[n]===true){o=H.kj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mB(a,s)},
mB:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.l6(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kj:function(a){return J.l6(a,!1,null,!!a.$iw)},
pO:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kj(s)
else return J.l6(s,c,null,null)},
pI:function(){if(!0===$.l5)return
$.l5=!0
H.pJ()},
pJ:function(){var s,r,q,p,o,n,m,l
$.jQ=Object.create(null)
$.jY=Object.create(null)
H.pH()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mC.$1(o)
if(n!=null){m=H.pO(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pH:function(){var s,r,q,p,o,n,m=C.D()
m=H.c0(C.E,H.c0(C.F,H.c0(C.t,H.c0(C.t,H.c0(C.G,H.c0(C.H,H.c0(C.I(C.r),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mw=new H.jV(p)
$.ms=new H.jW(o)
$.mC=new H.jX(n)},
c0:function(a,b){return a(b)||b},
np:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.Z("Illegal RegExp pattern ("+String(n)+")",a,null))},
mE:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mD:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mF:function(a,b,c){var s=H.pS(a,b,c)
return s},
pS:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mD(b),'g'),H.pD(c))},
c7:function c7(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iH:function iH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e1:function e1(a,b){this.a=a
this.b=b},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
i6:function i6(a){this.a=a},
fC:function fC(a){this.a=a
this.b=null},
bC:function bC(){},
it:function it(){},
iq:function iq(){},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a){this.a=a},
y:function y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hD:function hD(a){this.a=a},
hG:function hG(a,b){this.a=a
this.b=b
this.c=null},
ck:function ck(a){this.a=a},
dN:function dN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
dH:function dH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bY:function(a){return a},
aN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c2(b,a))},
oE:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pC(a,b,c))
return b},
cq:function cq(){},
T:function T(){},
bM:function bM(){},
br:function br(){},
cr:function cr(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
cs:function cs(){},
bN:function bN(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
nL:function(a,b){var s=b.c
return s==null?b.c=H.kQ(a,b.z,!0):s},
lM:function(a,b){var s=b.c
return s==null?b.c=H.d1(a,"lo",[b.z]):s},
lN:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lN(a.z)
return s===11||s===12},
nK:function(a){return a.cy},
l1:function(a){return H.kR(v.typeUniverse,a,!1)},
b7:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b7(a,s,a0,a1)
if(r===s)return b
return H.mb(a,r,!0)
case 7:s=b.z
r=H.b7(a,s,a0,a1)
if(r===s)return b
return H.kQ(a,r,!0)
case 8:s=b.z
r=H.b7(a,s,a0,a1)
if(r===s)return b
return H.ma(a,r,!0)
case 9:q=b.Q
p=H.d9(a,q,a0,a1)
if(p===q)return b
return H.d1(a,b.z,p)
case 10:o=b.z
n=H.b7(a,o,a0,a1)
m=b.Q
l=H.d9(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kO(a,n,l)
case 11:k=b.z
j=H.b7(a,k,a0,a1)
i=b.Q
h=H.pn(a,i,a0,a1)
if(j===k&&h===i)return b
return H.m9(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.d9(a,g,a0,a1)
o=b.z
n=H.b7(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kP(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.h7("Attempted to substitute unexpected RTI kind "+c))}},
d9:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b7(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
po:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b7(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pn:function(a,b,c,d){var s,r=b.a,q=H.d9(a,r,c,d),p=b.b,o=H.d9(a,p,c,d),n=b.c,m=H.po(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fe()
s.a=q
s.b=o
s.c=m
return s},
e:function(a,b){a[v.arrayRti]=b
return a},
pv:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mx(s)
return a.$S()}return null},
my:function(a,b){var s
if(H.lN(b))if(a instanceof H.bC){s=H.pv(a)
if(s!=null)return s}return H.bw(a)},
bw:function(a){var s
if(a instanceof P.K){s=a.$ti
return s!=null?s:H.kX(a)}if(Array.isArray(a))return H.mk(a)
return H.kX(J.da(a))},
mk:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mn:function(a){var s=a.$ti
return s!=null?s:H.kX(a)},
kX:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.oL(a,s)},
oL:function(a,b){var s=a instanceof H.bC?a.__proto__.__proto__.constructor:b,r=H.ol(v.typeUniverse,s.name)
b.$ccache=r
return r},
mx:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oK:function(a){var s,r,q=this,p=t.K
if(q===p)return H.d6(q,a,H.oP)
if(!H.aQ(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.d6(q,a,H.oS)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bZ
else if(s===t.gR||s===t.H)r=H.oO
else if(s===t.N)r=H.oQ
else r=s===t.cJ?H.kY:null
if(r!=null)return H.d6(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.pL)){q.r="$i"+p
return H.d6(q,a,H.oR)}}else if(p===7)return H.d6(q,a,H.oI)
return H.d6(q,a,H.oG)},
d6:function(a,b,c){a.b=c
return a.b(b)},
oJ:function(a){var s,r,q=this
if(!H.aQ(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.oD
else if(q===t.K)r=H.oB
else r=H.oH
q.a=r
return q.a(a)},
pg:function(a){var s,r=a.y
if(!H.aQ(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
oG:function(a){var s=this
if(a==null)return H.pg(s)
return H.W(v.typeUniverse,H.my(a,s),null,s,null)},
oI:function(a){if(a==null)return!0
return this.z.b(a)},
oR:function(a){var s=this,r=s.r
if(a instanceof P.K)return!!a[r]
return!!J.da(a)[r]},
r_:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ml(a,s)},
oH:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ml(a,s)},
ml:function(a,b){throw H.c(H.ob(H.m3(a,H.my(a,b),H.ae(b,null))))},
m3:function(a,b,c){var s=P.ht(a),r=H.ae(b==null?H.bw(a):b,null)
return s+": type '"+H.h(r)+"' is not a subtype of type '"+H.h(c)+"'"},
ob:function(a){return new H.d_("TypeError: "+a)},
a4:function(a,b){return new H.d_("TypeError: "+H.m3(a,null,b))},
oP:function(a){return a!=null},
oB:function(a){return a},
oS:function(a){return!0},
oD:function(a){return a},
kY:function(a){return!0===a||!1===a},
qM:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a4(a,"bool"))},
qO:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a4(a,"bool"))},
qN:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a4(a,"bool?"))},
qP:function(a){if(typeof a=="number")return a
throw H.c(H.a4(a,"double"))},
qR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"double"))},
qQ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"double?"))},
bZ:function(a){return typeof a=="number"&&Math.floor(a)===a},
qS:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a4(a,"int"))},
qU:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a4(a,"int"))},
qT:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a4(a,"int?"))},
oO:function(a){return typeof a=="number"},
qV:function(a){if(typeof a=="number")return a
throw H.c(H.a4(a,"num"))},
qX:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"num"))},
qW:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"num?"))},
oQ:function(a){return typeof a=="string"},
qY:function(a){if(typeof a=="string")return a
throw H.c(H.a4(a,"String"))},
oC:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a4(a,"String"))},
qZ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a4(a,"String?"))},
pj:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.n(r,H.ae(a[q],b))
return s},
mm:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.e([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.n(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.n(" extends ",H.ae(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ae(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.n(a3,H.ae(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.n(a3,H.ae(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lc(H.ae(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.h(a1)},
ae:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ae(a.z,b)
return s}if(l===7){r=a.z
s=H.ae(r,b)
q=r.y
return J.lc(q===11||q===12?C.a.n("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.h(H.ae(a.z,b))+">"
if(l===9){p=H.pp(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pj(o,b)+">"):p}if(l===11)return H.mm(a,b,null)
if(l===12)return H.mm(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
pp:function(a){var s,r=H.mG(a)
if(r!=null)return r
s="minified:"+a
return s},
mc:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ol:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kR(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d2(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d1(a,b,q)
n[b]=o
return o}else return m},
oj:function(a,b){return H.mj(a.tR,b)},
oi:function(a,b){return H.mj(a.eT,b)},
kR:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.m8(H.m6(a,null,b,c))
r.set(b,s)
return s},
fP:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.m8(H.m6(a,b,c,!0))
q.set(c,r)
return r},
ok:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kO(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b6:function(a,b){b.a=H.oJ
b.b=H.oK
return b},
d2:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ak(null,null)
s.y=b
s.cy=c
r=H.b6(a,s)
a.eC.set(c,r)
return r},
mb:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.og(a,b,r,c)
a.eC.set(r,s)
return s},
og:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aQ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ak(null,null)
q.y=6
q.z=b
q.cy=c
return H.b6(a,q)},
kQ:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.of(a,b,r,c)
a.eC.set(r,s)
return s},
of:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aQ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jZ(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jZ(q.z))return q
else return H.nL(a,b)}}p=new H.ak(null,null)
p.y=7
p.z=b
p.cy=c
return H.b6(a,p)},
ma:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.od(a,b,r,c)
a.eC.set(r,s)
return s},
od:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aQ(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d1(a,"lo",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ak(null,null)
q.y=8
q.z=b
q.cy=c
return H.b6(a,q)},
oh:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ak(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b6(a,s)
a.eC.set(q,r)
return r},
fO:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oc:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d1:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fO(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ak(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b6(a,r)
a.eC.set(p,q)
return q},
kO:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fO(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ak(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b6(a,o)
a.eC.set(q,n)
return n},
m9:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fO(m)
if(j>0){s=l>0?",":""
r=H.fO(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oc(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ak(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b6(a,o)
a.eC.set(q,r)
return r},
kP:function(a,b,c,d){var s,r=b.cy+("<"+H.fO(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oe(a,b,c,r,d)
a.eC.set(r,s)
return s},
oe:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b7(a,b,r,0)
m=H.d9(a,c,r,0)
return H.kP(a,n,m,c!==m)}}l=new H.ak(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b6(a,l)},
m6:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
m8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.o5(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.m7(a,r,g,f,!1)
else if(q===46)r=H.m7(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.b5(a.u,a.e,f.pop()))
break
case 94:f.push(H.oh(a.u,f.pop()))
break
case 35:f.push(H.d2(a.u,5,"#"))
break
case 64:f.push(H.d2(a.u,2,"@"))
break
case 126:f.push(H.d2(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.kN(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.d1(p,n,o))
else{m=H.b5(p,a.e,n)
switch(m.y){case 11:f.push(H.kP(p,m,o,a.n))
break
default:f.push(H.kO(p,m,o))
break}}break
case 38:H.o6(a,f)
break
case 42:l=a.u
f.push(H.mb(l,H.b5(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.kQ(l,H.b5(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.ma(l,H.b5(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fe()
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
H.kN(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.m9(p,H.b5(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.kN(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.o8(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.b5(a.u,a.e,h)},
o5:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
m7:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mc(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.nK(o)+'"')
d.push(H.fP(s,o,n))}else d.push(p)
return m},
o6:function(a,b){var s=b.pop()
if(0===s){b.push(H.d2(a.u,1,"0&"))
return}if(1===s){b.push(H.d2(a.u,4,"1&"))
return}throw H.c(P.h7("Unexpected extended operation "+H.h(s)))},
b5:function(a,b,c){if(typeof c=="string")return H.d1(a,c,a.sEA)
else if(typeof c=="number")return H.o7(a,b,c)
else return c},
kN:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b5(a,b,c[s])},
o8:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b5(a,b,c[s])},
o7:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.h7("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.h7("Bad index "+c+" for "+b.i(0)))},
W:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aQ(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aQ(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.W(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.W(a,b.z,c,d,e)
if(p===6){s=d.z
return H.W(a,b,c,s,e)}if(r===8){if(!H.W(a,b.z,c,d,e))return!1
return H.W(a,H.lM(a,b),c,d,e)}if(r===7){s=H.W(a,b.z,c,d,e)
return s}if(p===8){if(H.W(a,b,c,d.z,e))return!0
return H.W(a,b,c,H.lM(a,d),e)}if(p===7){s=H.W(a,b,c,d.z,e)
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
if(!H.W(a,k,c,j,e)||!H.W(a,j,e,k,c))return!1}return H.mo(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mo(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oN(a,b,c,d,e)}return!1},
mo:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
oN:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.W(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mc(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.W(a,H.fP(a,b,l[p]),c,r[p],e))return!1
return!0},
jZ:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aQ(a))if(r!==7)if(!(r===6&&H.jZ(a.z)))s=r===8&&H.jZ(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pL:function(a){var s
if(!H.aQ(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aQ:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mj:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ak:function ak(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fe:function fe(){this.c=this.b=this.a=null},
f9:function f9(){},
d_:function d_(a){this.a=a},
mG:function(a){return v.mangledGlobalNames[a]},
pP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h0:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.l5==null){H.pI()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.iR("Return interceptor for "+H.h(s(a,o))))}q=a.constructor
p=q==null?null:q[J.ls()]
if(p!=null)return p
p=H.pN(a)
if(p!=null)return p
if(typeof a=="function")return C.O
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,J.ls(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
ls:function(){var s=$.m4
return s==null?$.m4=v.getIsolateTag("_$dart_js"):s},
nm:function(a,b){if(!H.bZ(a))throw H.c(P.le(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a_(a,0,4294967295,"length",null))
return J.nn(new Array(a),b)},
kz:function(a,b){if(!H.bZ(a)||a<0)throw H.c(P.bA("Length must be a non-negative integer: "+H.h(a)))
return H.e(new Array(a),b.V("u<0>"))},
nn:function(a,b){return J.kA(H.e(a,b.V("u<0>")))},
kA:function(a){a.fixed$length=Array
return a},
no:function(a,b){return J.dd(a,b)},
da:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.cg.prototype}if(typeof a=="string")return J.aD.prototype
if(a==null)return J.ci.prototype
if(typeof a=="boolean")return J.dG.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.K)return a
return J.h0(a)},
pF:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.K)return a
return J.h0(a)},
aP:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.K)return a
return J.h0(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.K)return a
return J.h0(a)},
mv:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bu.prototype
return a},
l2:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bu.prototype
return a},
b9:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.K)return a
return J.h0(a)},
lc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pF(a).n(a,b)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.da(a).q(a,b)},
ld:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mv(a).l(a,b)},
c4:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aP(a).h(a,b)},
ko:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mz(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jR(a).k(a,b,c)},
n_:function(a,b){return J.l2(a).D(a,b)},
n0:function(a,b,c){return J.b9(a).fo(a,b,c)},
n1:function(a,b,c,d){return J.b9(a).fM(a,b,c,d)},
n2:function(a,b){return J.l2(a).T(a,b)},
dd:function(a,b){return J.mv(a).aK(a,b)},
kp:function(a,b){return J.aP(a).R(a,b)},
kq:function(a,b){return J.jR(a).H(a,b)},
n3:function(a,b,c,d){return J.b9(a).h9(a,b,c,d)},
kr:function(a,b){return J.jR(a).B(a,b)},
bz:function(a){return J.b9(a).gd4(a)},
n4:function(a){return J.b9(a).gd6(a)},
a9:function(a){return J.da(a).gN(a)},
bd:function(a){return J.jR(a).gO(a)},
aU:function(a){return J.aP(a).gj(a)},
n5:function(a,b){return J.b9(a).hH(a,b)},
a5:function(a){return J.da(a).i(a)},
a:function a(){},
dG:function dG(){},
ci:function ci(){},
aY:function aY(){},
e7:function e7(){},
bu:function bu(){},
ar:function ar(){},
u:function u(a){this.$ti=a},
hC:function hC(a){this.$ti=a},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bo:function bo(){},
ch:function ch(){},
cg:function cg(){},
aD:function aD(){}},P={
nY:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pr()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c1(new P.jj(q),1)).observe(s,{childList:true})
return new P.ji(q,s,r)}else if(self.setImmediate!=null)return P.ps()
return P.pt()},
nZ:function(a){self.scheduleImmediate(H.c1(new P.jk(a),0))},
o_:function(a){self.setImmediate(H.c1(new P.jl(a),0))},
o0:function(a){P.kG(C.n,a)},
kG:function(a,b){var s=C.c.Y(a.a,1000)
return P.o9(s<0?0:s,b)},
lR:function(a,b){var s=C.c.Y(a.a,1000)
return P.oa(s<0?0:s,b)},
o9:function(a,b){var s=new P.cZ()
s.e4(a,b)
return s},
oa:function(a,b){var s=new P.cZ()
s.e5(a,b)
return s},
qK:function(a){return new P.bV(a,1)},
o1:function(){return C.Y},
o2:function(a){return new P.bV(a,3)},
oU:function(a){return new P.cW(a)},
pf:function(){var s,r
for(s=$.c_;s!=null;s=$.c_){$.d8=null
r=s.b
$.c_=r
if(r==null)$.d7=null
s.a.$0()}},
pm:function(){$.kZ=!0
try{P.pf()}finally{$.d8=null
$.kZ=!1
if($.c_!=null)$.lb().$1(P.mt())}},
pk:function(a){var s=new P.eY(a),r=$.d7
if(r==null){$.c_=$.d7=s
if(!$.kZ)$.lb().$1(P.mt())}else $.d7=r.b=s},
pl:function(a){var s,r,q,p=$.c_
if(p==null){P.pk(a)
$.d8=$.d7
return}s=new P.eY(a)
r=$.d8
if(r==null){s.b=p
$.c_=$.d8=s}else{q=r.b
s.b=q
$.d8=r.b=s
if(q==null)$.d7=s}},
lQ:function(a,b){var s=$.az
if(s===C.f)return P.kG(a,b)
return P.kG(a,s.fQ(b))},
nS:function(a,b){var s=$.az
if(s===C.f)return P.lR(a,b)
return P.lR(a,s.d2(b,t.aF))},
mp:function(a,b,c,d,e){P.pl(new P.jL(d,e))},
ph:function(a,b,c,d){var s,r=$.az
if(r===c)return d.$0()
$.az=c
s=r
try{r=d.$0()
return r}finally{$.az=s}},
pi:function(a,b,c,d,e){var s,r=$.az
if(r===c)return d.$1(e)
$.az=c
s=r
try{r=d.$1(e)
return r}finally{$.az=s}},
jj:function jj(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
cZ:function cZ(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b){this.a=a
this.b=b},
bW:function bW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cW:function cW(a){this.a=a},
eY:function eY(a){this.a=a
this.b=null},
cx:function cx(){},
et:function et(){},
cy:function cy(){},
jC:function jC(){},
jL:function jL(a,b){this.a=a
this.b=b},
jq:function jq(){},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function(a,b){return new H.y(a.V("@<0>").br(b).V("y<1,2>"))},
ns:function(a,b,c){return H.pE(a,new H.y(b.V("@<0>").br(c).V("y<1,2>")))},
lt:function(a,b){return new H.y(a.V("@<0>").br(b).V("y<1,2>"))},
lv:function(a){return new P.cL(a.V("cL<0>"))},
kM:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
o4:function(a,b){var s=new P.cM(a,b)
s.c=a.e
return s},
nl:function(a,b,c){var s,r
if(P.l_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.e([],t.s)
$.a8.push(a)
try{P.oT(a,s)}finally{if(0>=$.a8.length)return H.b($.a8,-1)
$.a8.pop()}r=P.lO(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ky:function(a,b,c){var s,r
if(P.l_(a))return b+"..."+c
s=new P.U(b)
$.a8.push(a)
try{r=s
r.a=P.lO(r.a,a,", ")}finally{if(0>=$.a8.length)return H.b($.a8,-1)
$.a8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
l_:function(a){var s,r
for(s=$.a8.length,r=0;r<s;++r)if(a===$.a8[r])return!0
return!1},
oT:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.h(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.w()){if(j<=4){b.push(H.h(p))
return}r=H.h(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.w();p=o,o=n){n=l.gE(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.h(p)
r=H.h(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
lu:function(a,b,c){var s=P.nr(b,c)
a.B(0,new P.hH(s,b,c))
return s},
kE:function(a){var s,r={}
if(P.l_(a))return"{...}"
s=new P.U("")
try{$.a8.push(a)
s.a+="{"
r.a=!0
J.kr(a,new P.hM(r,s))
s.a+="}"}finally{if(0>=$.a8.length)return H.b($.a8,-1)
$.a8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cL:function cL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function cf(){},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(){},
i:function i(){},
cn:function cn(){},
hM:function hM(a,b){this.a=a
this.b=b},
as:function as(){},
fQ:function fQ(){},
co:function co(){},
bT:function bT(a,b){this.a=a
this.$ti=b},
cT:function cT(){},
cN:function cN(){},
d3:function d3(){},
nV:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nW(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nW:function(a,b,c,d){var s=a?$.mV():$.mU()
if(s==null)return null
if(0===c&&d===b.length)return P.lW(s,b)
return P.lW(s,b.subarray(c,P.b0(c,d,b.length)))},
lW:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ba(r)}return null},
lf:function(a,b,c,d,e,f){if(C.c.al(f,4)!==0)throw H.c(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.Z("Invalid base64 padding, more than two '=' characters",a,b))},
oA:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oz:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.p()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aP(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.aa()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
j0:function j0(){},
j1:function j1(){},
hb:function hb(){},
hc:function hc(){},
dq:function dq(){},
ds:function ds(){},
hq:function hq(){},
iZ:function iZ(){},
j2:function j2(){},
jB:function jB(a){this.b=0
this.c=a},
j_:function j_(a){this.a=a},
jA:function jA(a){this.a=a
this.b=16
this.c=0},
h1:function(a,b){var s=H.lE(a,b)
if(s!=null)return s
throw H.c(P.Z(a,null,null))},
ni:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.h(H.ed(a))+"'"},
hI:function(a,b,c,d){var s,r=c?J.kz(a,d):J.nm(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hJ:function(a,b,c){var s,r=H.e([],c.V("u<0>"))
for(s=J.bd(a);s.w();)r.push(s.gE(s))
if(b)return r
return J.kA(r)},
nt:function(a,b,c){var s,r,q=J.kz(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
ev:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.b0(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a5()
q=c<r}else q=!0
return H.lF(q?s.slice(b,c):s)}if(t.bm.b(a))return H.nH(a,b,P.b0(b,c,a.length))
return P.nQ(a,b,c)},
nQ:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a_(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a_(c,b,a.length,o,o))
r=J.bd(a)
for(q=0;q<b;++q)if(!r.w())throw H.c(P.a_(b,0,q,o,o))
p=[]
if(s)for(;r.w();)p.push(r.gE(r))
else for(q=b;q<c;++q){if(!r.w())throw H.c(P.a_(c,b,q,o,o))
p.push(r.gE(r))}return H.lF(p)},
nI:function(a){return new H.dH(a,H.np(a,!1,!0,!1,!1,!1))},
lO:function(a,b,c){var s=J.bd(b)
if(!s.w())return a
if(c.length===0){do a+=H.h(s.gE(s))
while(s.w())}else{a+=H.h(s.gE(s))
for(;s.w();)a=a+c+H.h(s.gE(s))}return a},
iU:function(){var s=H.ny()
if(s!=null)return P.nU(s)
throw H.c(P.x("'Uri.base' is not supported"))},
kW:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mY().b
if(typeof b!="string")H.q(H.af(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.gh8().bX(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aJ(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
ng:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
du:function(a){if(a>=10)return""+a
return"0"+a},
lm:function(a){return new P.bj(1000*a)},
ht:function(a){if(typeof a=="number"||H.kY(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.ni(a)},
h7:function(a){return new P.dg(a)},
bA:function(a){return new P.ag(!1,null,null,a)},
le:function(a,b,c){return new P.ag(!0,a,b,c)},
n6:function(a,b){if(a==null)throw H.c(new P.ag(!1,null,b,"Must not be null"))
return a},
lH:function(a){var s=null
return new P.bR(s,s,!1,s,s,a)},
ee:function(a,b){return new P.bR(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bR(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.f(c)
s=a>c}else s=!0
if(s)throw H.c(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.f(c)
s=b>c}else s=!0
if(s)throw H.c(P.a_(b,a,c,"end",null))
return b}return c},
lI:function(a,b){if(a<0)throw H.c(P.a_(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aU(b):e
return new P.dE(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eR(a)},
iR:function(a){return new P.eO(a)},
bh:function(a){return new P.dr(a)},
t:function(a){return new P.fb(a)},
Z:function(a,b,c){return new P.hz(a,b,c)},
l8:function(a){H.pP(a)},
nU:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.lT(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gdN()
else if(s===32)return P.lT(C.a.u(a5,5,a4),0,a3).gdN()}r=P.hI(8,0,!1,t.S)
q=r.length
if(0>=q)return H.b(r,0)
r[0]=0
if(1>=q)return H.b(r,1)
r[1]=-1
if(2>=q)return H.b(r,2)
r[2]=-1
if(7>=q)return H.b(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mq(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.mq(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
r[7]=p}q=r.length
if(2>=q)return H.b(r,2)
o=r[2]+1
if(3>=q)return H.b(r,3)
n=r[3]
if(4>=q)return H.b(r,4)
m=r[4]
if(5>=q)return H.b(r,5)
l=r[5]
if(6>=q)return H.b(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.b(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a3(a5,"..",m)))h=l>m+2&&C.a.a3(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a3(a5,"file",0)){if(o<=0){if(!C.a.a3(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.u(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aO(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a3(a5,"http",0)){if(q&&n+3===m&&C.a.a3(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aO(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a3(a5,"https",0)){if(q&&n+4===m&&C.a.a3(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aO(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.u(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fw(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.ot(a5,0,p)
else{if(p===0)P.bX(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.ou(a5,d,o-1):""
b=P.oq(a5,o,n,!1)
q=n+1
if(q<m){a=H.lE(C.a.u(a5,q,m),a3)
a0=P.os(a==null?H.q(P.Z("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.or(a5,m,l,a3,i,b!=null)
a2=l<k?P.kT(a5,l+1,k,a3):a3
return new P.bv(i,c,b,a0,a1,a2,k<a4?P.op(a5,k+1,a4):a3)},
lV:function(a){var s=t.N
return C.b.hd(H.e(a.split("&"),t.s),P.lt(s,s),new P.iX(C.e))},
nT:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.iT(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.T(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.h1(C.a.u(a,q,r),null)
if(typeof n!=="number")return n.X()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.h1(C.a.u(a,q,c),null)
if(typeof n!=="number")return n.X()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
lU:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.iV(a),b=new P.iW(c,a)
if(a.length<2)c.$1("address is too short")
s=H.e([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.T(a,r)
if(n===58){if(r===a0){++r
if(C.a.T(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaw(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.nT(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aH(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
md:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bX:function(a,b,c){throw H.c(P.Z(c,a,b))},
os:function(a,b){if(a!=null&&a===P.md(b))return null
return a},
oq:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.T(a,b)===91){s=c-1
if(C.a.T(a,s)!==93)P.bX(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.on(a,r,s)
if(q<s){p=q+1
o=P.mi(a,C.a.a3(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lU(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.T(a,n)===58){q=C.a.bh(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mi(a,C.a.a3(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lU(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.ow(a,b,c)},
on:function(a,b,c){var s=C.a.bh(a,"%",b)
return s>=b&&s<c?s:c},
mi:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.U(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.T(a,s)
if(p===37){o=P.kU(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.U("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.bX(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.U("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.T(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.U("")
n=i}else n=i
n.a+=j
n.a+=P.kS(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
ow:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.T(a,s)
if(o===37){n=P.kU(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.U("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.u,m)
m=(C.u[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.U("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.bX(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.T(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.U("")
m=q}else m=q
m.a+=l
m.a+=P.kS(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
ot:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mf(C.a.D(a,b)))P.bX(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.bX(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.om(r?a.toLowerCase():a)},
om:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ou:function(a,b,c){return P.d4(a,b,c,C.Q,!1)},
or:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.d4(a,b,c,C.v,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.ab(s,"/"))s="/"+s
return P.ov(s,e,f)},
ov:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.ab(a,"/"))return P.ox(a,!s||c)
return P.oy(a)},
kT:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bA("Both query and queryParameters specified"))
return P.d4(a,b,c,C.l,!0)}if(d==null)return null
s=new P.U("")
r.a=""
d.B(0,new P.jy(new P.jz(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
op:function(a,b,c){return P.d4(a,b,c,C.l,!0)},
kU:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.T(a,b+1)
r=C.a.T(a,n)
q=H.jU(s)
p=H.jU(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aH(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aJ(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
kS:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.D(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.D(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.fB(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.D(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.D(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.ev(s,0,null)},
d4:function(a,b,c,d,e){var s=P.mh(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mh:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.T(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kU(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.bX(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.T(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.kS(o)}}if(p==null){p=new P.U("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.h(m)
if(typeof l!=="number")return H.f(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mg:function(a){if(C.a.ab(a,"."))return!0
return C.a.dl(a,"/.")!==-1},
oy:function(a){var s,r,q,p,o,n,m
if(!P.mg(a))return a
s=H.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.C(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.t(s,"/")},
ox:function(a,b){var s,r,q,p,o,n
if(!P.mg(a))return!b?P.me(a):a
s=H.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaw(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaw(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.me(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.t(s,"/")},
me:function(a){var s,r,q,p=a.length
if(p>=2&&P.mf(J.n_(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ah(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oo:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bA("Invalid URL encoding"))}}return s},
kV:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.N(C.a.u(a,b,c))}else{p=H.e([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.bA("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bA("Truncated URI"))
p.push(P.oo(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.X.bX(p)},
mf:function(a){var s=a|32
return 97<=s&&s<=122},
lT:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.Z(k,a,r))}}if(q<0&&r>b)throw H.c(P.Z(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaw(j)
if(p!==44||r!==n+7||!C.a.a3(a,"base64",n+1))throw H.c(P.Z("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.C.hm(0,a,m,s)
else{l=P.mh(a,m,s,C.l,!0)
if(l!=null)a=C.a.aO(a,m,s,l)}return new P.iS(a,j,c)},
oF:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.nt(22,new P.jG(),t.gc),l=new P.jF(m),k=new P.jH(),j=new P.jI(),i=l.$2(0,225)
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
mq:function(a,b,c,d,e){var s,r,q,p,o,n=$.mZ()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.D(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
aO:function aO(){},
ab:function ab(a,b){this.a=a
this.b=b},
X:function X(){},
bj:function bj(a){this.a=a},
hn:function hn(){},
ho:function ho(){},
I:function I(){},
dg:function dg(a){this.a=a},
e2:function e2(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dE:function dE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eR:function eR(a){this.a=a},
eO:function eO(a){this.a=a},
er:function er(a){this.a=a},
dr:function dr(a){this.a=a},
e5:function e5(){},
cw:function cw(){},
dt:function dt(a){this.a=a},
fb:function fb(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
j:function j(){},
dF:function dF(){},
o:function o(){},
E:function E(){},
aj:function aj(){},
P:function P(){},
K:function K(){},
z:function z(){},
U:function U(a){this.a=a},
iX:function iX(a){this.a=a},
iT:function iT(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jz:function jz(a,b){this.a=a
this.b=b},
jy:function jy(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(){},
jF:function jF(a){this.a=a},
jH:function jH(){},
jI:function jI(){},
fw:function fw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
f3:function f3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
py:function(a){var s
if(t.u.b(a)){s=J.n4(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.d0(a.data,a.height,a.width)},
px:function(a){if(a instanceof P.d0)return{data:a.a,height:a.b,width:a.c}
return a},
b8:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lt(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
pw:function(a){var s={}
a.B(0,new P.jM(s))
return s},
jt:function jt(){},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
fG:function fG(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(){},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fu:function fu(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aE:function aE(){},
dL:function dL(){},
aH:function aH(){},
e3:function e3(){},
i7:function i7(){},
eu:function eu(){},
n:function n(){},
aK:function aK(){},
eE:function eE(){},
fi:function fi(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(){},
fE:function fE(){},
fF:function fF(){},
fM:function fM(){},
fN:function fN(){},
b2:function b2(){},
h9:function h9(){},
di:function di(){},
ha:function ha(a){this.a=a},
dj:function dj(){},
aV:function aV(){},
e4:function e4(){},
eZ:function eZ(){},
eg:function eg(){},
ep:function ep(){},
fA:function fA(){},
fB:function fB(){}},W={
ku:function(){var s=document.createElement("canvas")
return s},
hp:function(a){return"wheel"},
lp:function(a){var s=document.createElement("img")
if(a!=null)s.src=a
return s},
nk:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ba(s)}return q},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m5:function(a,b,c,d){var s=W.jn(W.jn(W.jn(W.jn(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
V:function(a,b,c,d){var s=new W.fa(a,b,c==null?null:W.mr(new W.jm(c),t.D),!1)
s.fI()
return s},
mr:function(a,b){var s=$.az
if(s===C.f)return a
return s.d2(a,b)},
p:function p(){},
h5:function h5(){},
de:function de(){},
df:function df(){},
be:function be(){},
bf:function bf(){},
ap:function ap(){},
hg:function hg(){},
F:function F(){},
c9:function c9(){},
hh:function hh(){},
ah:function ah(){},
aC:function aC(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
ca:function ca(){},
cb:function cb(){},
dw:function dw(){},
hm:function hm(){},
f0:function f0(a,b){this.a=a
this.b=b},
G:function G(){},
k:function k(){},
d:function d(){},
ac:function ac(){},
bE:function bE(){},
dA:function dA(){},
dC:function dC(){},
aq:function aq(){},
hB:function hB(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bH:function bH(){},
bp:function bp(){},
hK:function hK(){},
i1:function i1(){},
bJ:function bJ(){},
dU:function dU(){},
i2:function i2(a){this.a=a},
dV:function dV(){},
i3:function i3(a){this.a=a},
at:function at(){},
dW:function dW(){},
ad:function ad(){},
f_:function f_(a){this.a=a},
v:function v(){},
ct:function ct(){},
au:function au(){},
e8:function e8(){},
eh:function eh(){},
ie:function ie(a){this.a=a},
ej:function ej(){},
al:function al(){},
el:function el(){},
aw:function aw(){},
em:function em(){},
ax:function ax(){},
es:function es(){},
ir:function ir(a){this.a=a},
am:function am(){},
b1:function b1(){},
an:function an(){},
a6:function a6(){},
ex:function ex(){},
ey:function ey(){},
iD:function iD(){},
ay:function ay(){},
bt:function bt(){},
eD:function eD(){},
iG:function iG(){},
aM:function aM(){},
iY:function iY(){},
eV:function eV(){},
b4:function b4(){},
bU:function bU(){},
f1:function f1(){},
cK:function cK(){},
ff:function ff(){},
cO:function cO(){},
fz:function fz(){},
fH:function fH(){},
kx:function kx(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jm:function jm(a){this.a=a},
kL:function kL(a){this.$ti=a},
J:function J(){},
ce:function ce(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
f2:function f2(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
fc:function fc(){},
fd:function fd(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
ft:function ft(){},
fv:function fv(){},
cU:function cU(){},
cV:function cV(){},
fx:function fx(){},
fy:function fy(){},
fD:function fD(){},
fI:function fI(){},
fJ:function fJ(){},
cX:function cX(){},
cY:function cY(){},
fK:function fK(){},
fL:function fL(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){}},K={
a0:function(a){var s=new K.ig()
s.dY(a)
return s},
h6:function h6(){},
dD:function dD(){},
hN:function hN(){},
b_:function b_(){this.a=null},
ig:function ig(){this.a=null},
mA:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1="heightMaps",a2="modifiers",a3={},a4=V.nM("Test 037"),a5=W.ku()
a5.className="pageLargeCanvas"
a5.id=a0
a4.a.appendChild(a5)
s=t.i
a4.cZ(H.e(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],s))
a4.fL(H.e(["heightMaps","shapes","scalars"],s))
a4.cZ(H.e(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a0)
if(r==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.nR(r,!0,!0,!0,!1)
p=new O.dP()
a4=O.kv(t.hc)
p.e=a4
a4.b9(p.gez(),p.geB())
a4=new O.aF(p,"emission")
a4.c=new A.a2(!1,!1,!1)
a4.f=new V.Y(0,0,0)
p.f=a4
a4=new O.aF(p,"ambient")
a4.c=new A.a2(!1,!1,!1)
a4.f=new V.Y(0,0,0)
p.r=a4
a4=new O.aF(p,"diffuse")
a4.c=new A.a2(!1,!1,!1)
a4.f=new V.Y(0,0,0)
p.x=a4
a4=new O.aF(p,"invDiffuse")
a4.c=new A.a2(!1,!1,!1)
a4.f=new V.Y(0,0,0)
p.y=a4
a4=new O.hT(p,"specular")
a4.c=new A.a2(!1,!1,!1)
a4.f=new V.Y(0,0,0)
a4.ch=100
p.z=a4
a4=new O.hP(p,"bump")
a4.c=new A.a2(!1,!1,!1)
p.Q=a4
p.ch=null
a4=new O.aF(p,"reflect")
a4.c=new A.a2(!1,!1,!1)
a4.f=new V.Y(0,0,0)
p.cx=a4
a4=new O.hS(p,"refract")
a4.c=new A.a2(!1,!1,!1)
a4.f=new V.Y(0,0,0)
a4.ch=1
p.cy=a4
a4=new O.hO(p,"alpha")
a4.c=new A.a2(!1,!1,!1)
a4.f=1
p.db=a4
a4=new D.cj()
a4.bq(t.gj)
a4.e=H.e([],t.bb)
a4.f=H.e([],t.cP)
a4.r=H.e([],t.eb)
a4.x=H.e([],t.du)
a4.z=a4.y=null
a4.cq(a4.gex(),a4.gf9(),a4.gfd())
p.dx=a4
o=new O.hR()
o.b=new V.bg(0,0,0,0)
o.c=1
o.d=10
o.e=!1
p.dy=o
o=a4.y
a4=o==null?a4.y=D.L():o
a4.m(0,p.gfq())
a4=p.dx
o=a4.z
a4=o==null?a4.z=D.L():o
a4.m(0,p.geF())
p.fr=null
a4=p.dx
n=V.kI()
o=U.ll(V.lw(V.lB(),n,new V.A(1,1,-3)))
m=new V.Y(1,1,1)
l=new D.bi()
l.c=new V.Y(1,1,1)
l.a=V.m0()
l.d=V.kI()
l.e=V.nX()
k=l.b
l.b=o
o.gA().m(0,l.ge1())
o=new D.B("mover",k,l.b)
o.b=!0
l.ap(o)
if(!l.c.q(0,m)){k=l.c
l.c=m
o=new D.B("color",k,m)
o.b=!0
l.ap(o)}a4.m(0,l)
a4=p.r
a4.saJ(0,new V.Y(0,0,1))
a4=p.x
a4.saJ(0,new V.Y(0,1,0))
a4=p.z
a4.saJ(0,new V.Y(1,0,0))
a4=p.z
a4.cT(new A.a2(!0,!1,!1))
a4.cU(10)
j=E.ln()
j.sdJ(p)
i=E.ln()
i.y.m(0,j)
a4=new U.bF()
a4.bq(t.ah)
a4.b9(a4.gev(),a4.gfb())
a4.e=null
a4.f=V.dT()
a4.r=0
o=q.x
l=new U.cG()
h=U.kw()
h.sco(0,!0)
h.scc(6.283185307179586)
h.sce(0)
h.sW(0,0)
h.scd(100)
h.sP(0)
h.sbZ(0.5)
l.b=h
g=l.gaB()
h.gA().m(0,g)
h=U.kw()
h.sco(0,!0)
h.scc(6.283185307179586)
h.sce(0)
h.sW(0,0)
h.scd(100)
h.sP(0)
h.sbZ(0.5)
l.c=h
h.gA().m(0,g)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
f=new X.ai(!1,!1,!1)
k=l.d
l.d=f
h=new D.B(a2,k,f)
h.b=!0
l.M(h)
h=l.f
if(h!==!1){l.f=!1
h=new D.B("invertX",h,!1)
h.b=!0
l.M(h)}h=l.r
if(h!==!1){l.r=!1
h=new D.B("invertY",h,!1)
h.b=!0
l.M(h)}l.aW(o)
a4.m(0,l)
o=q.x
l=new U.cF()
h=U.kw()
h.sco(0,!0)
h.scc(6.283185307179586)
h.sce(0)
h.sW(0,0)
h.scd(100)
h.sP(0)
h.sbZ(0.2)
l.b=h
h.gA().m(0,l.gaB())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
f=new X.ai(!0,!1,!1)
k=l.c
l.c=f
h=new D.B(a2,k,f)
h.b=!0
l.M(h)
l.aW(o)
a4.m(0,l)
o=q.x
l=new U.cH()
l.c=0.01
l.e=l.d=0
f=new X.ai(!1,!1,!1)
l.b=f
h=new D.B(a2,null,f)
h.b=!0
l.M(h)
l.aW(o)
a4.m(0,l)
i.sb1(a4)
a4=new M.dx()
a4.a=!0
o=O.kv(t.l)
a4.e=o
o.b9(a4.geH(),a4.geJ())
a4.y=a4.x=a4.r=a4.f=null
e=X.nj(null)
d=new X.e6()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb1(null)
o=d.c
$.D().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){d.c=1.0471975511965976
o=new D.B("fov",o,1.0471975511965976)
o.b=!0
d.aE(o)}o=d.d
$.D().toString
if(!(Math.abs(o-0.1)<1e-9)){d.d=0.1
o=new D.B("near",o,0.1)
o.b=!0
d.aE(o)}o=d.e
$.D().toString
if(!(Math.abs(o-2000)<1e-9)){d.e=2000
o=new D.B("far",o,2000)
o.b=!0
d.aE(o)}o=a4.b
if(o!==d){if(o!=null)o.gA().I(0,a4.gaC())
k=a4.b
a4.b=d
d.gA().m(0,a4.gaC())
o=new D.B("camera",k,a4.b)
o.b=!0
a4.aD(o)}o=a4.c
if(o!==e){if(o!=null)o.gA().I(0,a4.gaC())
k=a4.c
a4.c=e
e.gA().m(0,a4.gaC())
o=new D.B("target",k,a4.c)
o.b=!0
a4.aD(o)}a4.e.m(0,i)
a4.b.sb1(U.ll(V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=q.d
if(o!==a4){if(o!=null)o.gA().I(0,q.gcz())
q.d=a4
a4.gA().m(0,q.gcz())
q.cA()}a3.a=null
a3.b=""
a3.c=1
c=new K.k1(a3,q,j)
a4=new V.iv(a1,new K.k2(a3,c))
s=s.getElementById(a1)
a4.c=s
if(s==null)H.q("Failed to find heightMaps for Texture2DGroup")
a4.Z(0,"../resources/HeightMap1.png",!0)
a4.m(0,"../resources/HeightMap2.png")
a4.m(0,"../resources/HeightMap3.png")
a4.m(0,"../resources/HeightMap4.png")
a4.m(0,"../resources/ScrewHeightMap.png")
b=new K.k3(a3,c)
a4=V.lG("shapes")
a4.Z(0,"Cuboid",new K.kb(b))
a4.Z(0,"Cylinder",new K.kc(b))
a4.Z(0,"LatLonSphere",new K.kd(b))
a4.Z(0,"Sphere",new K.ke(b))
a4.Z(0,"Toroid",new K.kf(b))
a4.Z(0,"Grid Small",new K.kg(b))
a4.bR(0,"Grid Medium",new K.kh(b),!0)
a4.Z(0,"Grid Large",new K.ki(b))
a=new K.k4(a3,c)
a3=V.lG("scalars")
a3.Z(0,"0.1",new K.k5(a))
a3.Z(0,"0.2",new K.k6(a))
a3.Z(0,"0.4",new K.k7(a))
a3.bR(0,"0.6",new K.k8(a),!0)
a3.Z(0,"0.8",new K.k9(a))
a3.Z(0,"1.0",new K.ka(a))
V.pQ(q)},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
k4:function k4(a,b){this.a=a
this.b=b},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a}},L={eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},eC:function eC(a){this.b=a
this.c=null},iE:function iE(){var _=this
_.d=_.c=_.b=_.a=null},eF:function eF(a){this.b=a
this.a=this.c=null}},O={
kv:function(a){var s=new O.aa(a.V("aa<0>"))
s.bq(a)
return s},
aa:function aa(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cp:function cp(){this.b=this.a=null},
dP:function dP(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(){},
hO:function hO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dR:function dR(){},
hP:function hP(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aF:function aF(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hR:function hR(){var _=this
_.e=_.d=_.c=_.b=null},
hS:function hS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hT:function hT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ew:function ew(){}},E={
ln:function(){var s,r=new E.bk()
r.a=""
r.b=!0
s=O.kv(t.l)
r.y=s
s.b9(r.ghn(),r.ghq())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scr(0,null)
r.sdJ(null)
r.sb1(null)
return r},
m1:function(){if(J.kp(window.navigator.vendor,"Google"))return C.A
if(J.kp(window.navigator.userAgent,"Firefox"))return C.p
var s=window.navigator.appVersion
if(J.aP(s).R(s,"Trident")||C.a.R(s,"Edge"))return C.q
if(J.kp(window.navigator.appName,"Microsoft"))return C.q
return C.B},
m2:function(){var s=window.navigator.appVersion
if(J.aP(s).R(s,"Win"))return C.T
if(C.a.R(s,"Mac"))return C.w
if(C.a.R(s,"Linux"))return C.U
return C.V},
nJ:function(a,b){var s=new E.ia(a)
s.dX(a,b)
return s},
nR:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.lP(a,!0,!0,!0,!1)
s=W.ku()
r=s.style
r.width="100%"
r.height="100%"
J.bz(a).m(0,s)
return E.lP(s,!0,!0,!0,!1)},
lP:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eA(),n=t.z,m=C.i.cp(a,"webgl2",P.ns(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.t("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.nJ(m,a)
n=new T.iz(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.eT(a)
s=new X.hE()
s.c=new X.ai(!1,!1,!1)
s.d=P.lv(t.e)
n.b=s
s=new X.i4(n)
s.f=0
s.r=V.bs()
s.x=V.bs()
s.ch=s.Q=1
n.c=s
s=new X.hL(n)
s.r=0
s.x=V.bs()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iF(n)
s.f=V.bs()
s.r=V.bs()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.e([],t.eG)
s=$.hr
n.Q=(s==null?$.hr=new E.f8(E.m1(),E.m2()):s).a===C.p?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.V(q,"contextmenu",n.geL(),!1))
n.z.push(W.V(a,"focus",n.geR(),!1))
n.z.push(W.V(a,"blur",n.geD(),!1))
n.z.push(W.V(q,"keyup",n.geV(),!1))
n.z.push(W.V(q,"keydown",n.geT(),!1))
n.z.push(W.V(a,"mousedown",n.geZ(),!1))
n.z.push(W.V(a,"mouseup",n.gf2(),!1))
n.z.push(W.V(a,p,n.gf0(),!1))
r=n.z
W.hp(a)
W.hp(a)
r.push(W.V(a,W.hp(a),n.gf4(),!1))
n.z.push(W.V(q,p,n.geN(),!1))
n.z.push(W.V(q,"mouseup",n.geP(),!1))
n.z.push(W.V(q,"pointerlockchange",n.gf6(),!1))
n.z.push(W.V(a,"touchstart",n.gfj(),!1))
n.z.push(W.V(a,"touchend",n.gff(),!1))
n.z.push(W.V(a,"touchmove",n.gfh(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ab(Date.now(),!1)
o.db=0
o.cR()
return o},
hd:function hd(){},
bk:function bk(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bB:function bB(a){this.b=a},
bO:function bO(a){this.b=a},
f8:function f8(a,b){this.a=a
this.b=b},
ia:function ia(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
eA:function eA(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iC:function iC(a){this.a=a}},Z={
kK:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bY(c)),35044)
a.bindBuffer(b,null)
return new Z.eW(b,s)},
ao:function(a){return new Z.b3(a)},
eW:function eW(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jh:function jh(a){this.a=a},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a){this.a=a}},D={
L:function(){var s=new D.bD()
s.d=0
return s},
he:function he(){},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
Q:function Q(){this.b=null},
aW:function aW(){this.b=null},
aX:function aX(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dk:function dk(){},
bi:function bi(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
R:function R(){},
cj:function cj(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
ea:function ea(){},
en:function en(){}},X={dp:function dp(a,b){this.a=a
this.b=b},dJ:function dJ(a,b){this.a=a
this.b=b},hE:function hE(){var _=this
_.d=_.c=_.b=_.a=null},cm:function cm(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hL:function hL(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},bK:function bK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i4:function i4(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bL:function bL(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eb:function eb(){},cz:function cz(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iF:function iF(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eT:function eT(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nj:function(a){var s=new X.hA(),r=new V.bg(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.lL
if(r==null){r=V.lK(0,0,1,1)
$.lL=r}s.r=r
return s},
kt:function kt(){},
hA:function hA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
is:function is(){}},V={
h2:function(a,b,c){var s
if(c<=0)s=a
else if(c>=1)s=b
else{if(typeof b!=="number")return b.p()
if(typeof a!=="number")return H.f(a)
s=a+c*(b-a)}return s},
pW:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.al(a-b,s)
return(a<0?a+s:a)+b},
H:function(a,b,c){if(a==null)return C.a.af("null",c)
$.D().toString
return C.a.af(C.d.dK(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c3:function(a,b,c){var s,r,q,p,o,n,m=H.e([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.r)(a),++q){p=V.H(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.b(m,o)
s=C.a.af(m[o],r)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=s}return m},
l7:function(a){return C.d.hN(Math.pow(2,C.N.b_(Math.log(H.pu(a))/Math.log(2))))},
dT:function(){var s=$.lx
return s==null?$.lx=V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lw:function(a,b,c){var s=c.G(),r=b.at(s).G(),q=s.at(r),p=new V.A(a.a,a.b,a.c),o=r.J(0).a2(p),n=q.J(0).a2(p),m=s.J(0).a2(p)
return V.aG(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bs:function(){var s=$.lA
return s==null?$.lA=new V.av(0,0):s},
lB:function(){var s=$.aI
return s==null?$.aI=new V.O(0,0,0):s},
lK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ef(a,b,c,d)},
cI:function(){var s=$.m_
return s==null?$.m_=new V.A(0,0,0):s},
nX:function(){var s=$.j3
return s==null?$.j3=new V.A(-1,0,0):s},
kI:function(){var s=$.j4
return s==null?$.j4=new V.A(0,1,0):s},
m0:function(){var s=$.j5
return s==null?$.j5=new V.A(0,0,1):s},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(){},
dS:function dS(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aZ:function aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
av:function av(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ef:function ef(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function(a){P.nS(C.L,new V.kk(a))},
lG:function(a){var s=new V.i8(a),r=document.getElementById(a)
s.c=r
if(r==null)H.q("Failed to find "+a+" for RadioGroup")
return s},
nM:function(a){var s=new V.il()
s.e_(a,!0)
return s},
kk:function kk(a){this.a=a},
i8:function i8(a){this.a=a
this.c=null},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(){this.b=this.a=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
iv:function iv(a,b){this.a=a
this.c=null
this.d=b},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(){}},U={
kw:function(){var s=new U.hf()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
ll:function(a){var s=new U.c6()
s.a=a
return s},
hf:function hf(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c6:function c6(){this.b=this.a=null},
bF:function bF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cF:function cF(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cG:function cG(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dx:function dx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nv:function(a,b){var s=a.aZ,r=new A.dQ(b,s)
r.dZ(b,s)
r.dW(a,b)
return r},
nw:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+b1.gak(b1)+b2.gak(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.r)(b3),++r)b+="_"+H.h(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.r)(b4),++r)b+="_"+H.h(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)b+="_"+H.h(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)b+="_"+H.h(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.aT()
if(h){s=$.aA()
c=new Z.b3(c.a|s.a)}if(g){s=$.aS()
c=new Z.b3(c.a|s.a)}if(f){s=$.aR()
c=new Z.b3(c.a|s.a)}return new A.hQ(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jJ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jK:function(a,b,c){var s
A.jJ(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.h4(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
oZ:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jJ(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
oV:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jK(b,r,"ambient")
b.a+="\n"},
oX:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jK(b,r,"diffuse")
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
p_:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jK(b,r,"invDiffuse")
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
p5:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jK(b,r,"specular")
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
p1:function(a,b){var s,r,q
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
p3:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jJ(b,r,"reflect")
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
p4:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jJ(b,r,"refract")
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
oW:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.h(s)
q=A.h4(r)
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
if(typeof s!=="number")return s.aa()
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
o=H.e([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.t(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.e([],p)
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
n=H.e([],p)
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.t(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.t(o," + ")+");\n"
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
oY:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.h(s)
q=A.h4(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.aa()
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
m=H.e([],p)
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.e([],p)
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
c.a+="      highLight = intensity*("+C.b.t(k," + ")+");\n"}else c.a+="   highLight = "+C.b.t(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.t(m," + ")+");\n"
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
p2:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.h(s)
q=A.h4(r)
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
if(typeof s!=="number")return s.aa()
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
j=H.e([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.b.t(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.e([],p)
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
i=H.e([],p)
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.t(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.t(j," + ")+");\n"
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
p6:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.h(s)
q=A.h4(r)
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
if(typeof s!=="number")return s.aa()
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
if(m){s=$.hr
if(s==null)s=$.hr=new E.f8(E.m1(),E.m2())
p=c.a
if(s.b===C.w){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
h=H.e([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.b.t(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.e([],s)
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
g=H.e([],s)
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.t(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.t(h," + ")+");\n"
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
p0:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.e([],t.i)
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
s=b.a+="   return "+C.b.t(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
p7:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.U("")
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
A.oZ(a,h)
A.oV(a,h)
A.oX(a,h)
A.p_(a,h)
A.p5(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.p3(a,h)
A.p4(a,h)}A.p1(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y.a
if(o)p=h.a=p+"uniform float alpha;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!o)n=!1
else n=!0
if(!n)p=h.a=p+"   return 1.0;\n"
else if(o){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.oW(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.oY(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.p2(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.p6(a,o[m],h)
A.p0(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.e([],t.i)
if(p){h.a+=u.o
l.push("lightAccum")
if(!a.b.a)s=!1
else s=!0
if(s)h.a+="   setAmbientColor();\n"
if(!a.c.a)s=!1
else s=!0
if(s)h.a+="   setDiffuseColor();\n"
if(!a.d.a)s=!1
else s=!0
if(s)h.a+="   setInvDiffuseColor();\n"
if(!a.e.a)s=!1
else s=!0
if(s)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.t(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
p8:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bf+"];\n"
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
pa:function(a,b){var s
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
p9:function(a,b){var s
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
pc:function(a,b){var s,r
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
pd:function(a,b){var s,r
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
pb:function(a,b){var s
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
pe:function(a,b){var s
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
h4:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ah(a,1)},
kH:function(a,b,c,d,e){var s=new A.iK(a,c,e)
s.f=d
P.hI(d,0,!1,t.e)
return s},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
dQ:function dQ(a,b){var _=this
_.i1=_.i0=_.bg=_.aZ=_.bf=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ig=_.ie=_.ic=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.ib=_.ia=_.dg=_.i9=_.i8=_.df=_.de=_.i7=_.i6=_.dd=_.dc=_.i5=_.i4=_.da=_.i3=_.i2=_.d9=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dl:function dl(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bf=b5
_.aZ=b6
_.bg=b7},
cA:function cA(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cB:function cB(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cD:function cD(a,b,c,d,e,f,g,h,i,j){var _=this
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
cE:function cE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cv:function cv(){},
eG:function eG(){},
iP:function iP(a){this.a=a},
eI:function eI(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
eH:function eH(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
eJ:function eJ(a,b,c){this.a=a
this.c=b
this.d=c},
eK:function eK(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
eL:function eL(a,b,c){this.a=a
this.c=b
this.d=c},
cC:function cC(a,b,c){this.a=a
this.c=b
this.d=c},
eM:function eM(a,b,c){this.a=a
this.c=b
this.d=c},
eN:function eN(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mu:function(a,b,c){var s=null,r=F.kF()
F.d5(r,s,b,c,a,1,0,0,1)
F.d5(r,s,b,c,a,0,1,0,3)
F.d5(r,s,b,c,a,0,0,1,2)
F.d5(r,s,b,c,a,-1,0,0,0)
F.d5(r,s,b,c,a,0,-1,0,0)
F.d5(r,s,b,c,a,0,0,-1,3)
r.a6()
return r},
jE:function(a){var s,r=a.a
if(typeof r!=="number")return r.X()
s=r>0?1:0
r=a.b
if(typeof r!=="number")return r.X()
if(r>0)s+=2
r=a.c
if(typeof r!=="number")return r.X()
return(r>0?s+4:s)*2},
d5:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.A(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.A(s+a5,r+a3,q+a4)
o=new V.A(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.A(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.jE(g)
j=F.jE(f)
i=F.h3(a1,a2,new F.jD(h,F.jE(e),F.jE(d),j,k,a0),b)
if(i!=null)a.bk(i)},
pz:function(a,b,c,d){return F.pA(!1,!1,c,new F.jN(1,1),d)},
pA:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.h3(c,e,new F.jP(d),r)
if(s==null)return r
s.a6()
s.bd()
return s},
pM:function(a,b){var s=F.h3(a,b,new F.k_(),null)
s.d.bm()
s.a6()
s.bd()
return s},
pR:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kl()
r=F.mu(a,new F.km(q,1),b)
r.bd()
return r},
pV:function(a,b){return F.pB(b,a,0.5,1,new F.kn())},
pB:function(a,b,c,d,e){var s=F.h3(a,b,new F.jO(e,d,b,c),null)
if(s==null)return null
s.a6()
s.bd()
return s},
l4:function(a,b){var s,r={}
r.a=s
r.a=null
r.a=new F.jS()
return F.h3(b,a,new F.jT(r),null)},
h3:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.kF()
r=H.e([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.kJ(e,e,new V.bg(n,0,0,1),e,e,new V.av(p,1),e,e,0)
o.m(0,m)
c.$3(m,p,0)
r.push(m.bY(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.kJ(e,e,new V.bg(h,g,f,1),e,e,new V.av(p,k),e,e,0)
i.m(0,m)
c.$3(m,p,l)
r.push(m.bY(d))}}s.d.fN(a+1,b+1,r)
return s},
dz:function(a,b,c){var s=new F.dy(),r=a.a
if(r==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.t("May not create a face with vertices attached to different shapes."))
s.bO(a)
s.bP(b)
s.fv(c)
s.a.a.d.b.push(s)
s.a.a.a0()
return s},
nq:function(a,b){var s=new F.dM(),r=a.a
if(r==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.t("May not create a line with vertices attached to different shapes."))
s.bO(a)
s.bP(b)
s.a.a.c.b.push(s)
s.a.a.a0()
return s},
kF:function(){var s=new F.ih(),r=new F.j6(s)
r.b=!1
r.c=H.e([],t.j)
s.a=r
r=new F.ik(s)
r.b=H.e([],t.k)
s.b=r
r=new F.ij(s)
r.b=H.e([],t.B)
s.c=r
r=new F.ii(s)
r.b=H.e([],t.b)
s.d=r
s.e=null
return s},
kJ:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.eU(),p=new F.je()
p.b=H.e([],t.k)
q.b=p
p=new F.ja()
s=t.B
p.b=H.e([],s)
p.c=H.e([],s)
q.c=p
p=new F.j7()
s=t.b
p.b=H.e([],s)
p.c=H.e([],s)
p.d=H.e([],s)
q.d=p
h=$.l9()
q.e=0
p=$.aT()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aA().a)!==0?e:r
q.x=(s&$.aS().a)!==0?b:r
q.y=(s&$.bb().a)!==0?f:r
q.z=(s&$.bc().a)!==0?g:r
q.Q=(s&$.la().a)!==0?c:r
q.ch=(s&$.by().a)!==0?i:0
q.cx=(s&$.aR().a)!==0?a:r
return q},
jD:function jD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jN:function jN(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
k_:function k_(){},
kl:function kl(){},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(){},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(){},
jT:function jT(a){this.a=a},
dy:function dy(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(){},
ip:function ip(){},
dM:function dM(){this.b=this.a=null},
hF:function hF(){},
iJ:function iJ(){},
e9:function e9(){this.a=null},
ih:function ih(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
eU:function eU(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jg:function jg(a){this.a=a},
jf:function jf(a){this.a=a},
j6:function j6(a){this.a=a
this.c=this.b=null},
j7:function j7(){this.d=this.c=this.b=null},
j8:function j8(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(){this.c=this.b=null},
jc:function jc(){},
jb:function jb(){},
jd:function jd(){},
i5:function i5(){},
je:function je(){this.b=null}},T={ez:function ez(){},iu:function iu(){},iy:function iy(){var _=this
_.y=_.x=_.r=_.d=_.c=_.b=_.a=null},iz:function iz(a){var _=this
_.a=a
_.e=_.d=_.b=null},iA:function iA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kB.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gN:function(a){return H.cu(a)},
i:function(a){return"Instance of '"+H.h(H.ed(a))+"'"}}
J.dG.prototype={
i:function(a){return String(a)},
gN:function(a){return a?519018:218159},
$iaO:1}
J.ci.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gN:function(a){return 0}}
J.aY.prototype={
gN:function(a){return 0},
i:function(a){return String(a)},
$ilr:1}
J.e7.prototype={}
J.bu.prototype={}
J.ar.prototype={
i:function(a){var s=a[$.mJ()]
if(s==null)return this.dV(a)
return"JavaScript function for "+H.h(J.a5(s))}}
J.u.prototype={
ci:function(a,b){if(!!a.fixed$length)H.q(P.x("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ee(b,null))
return a.splice(b,1)[0]},
I:function(a,b){var s
if(!!a.fixed$length)H.q(P.x("remove"))
for(s=0;s<a.length;++s)if(J.C(a[s],b)){a.splice(s,1)
return!0}return!1},
fK:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.x("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.r)(b),++r)a.push(b[r])},
B:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bh(a))}},
t:function(a,b){var s,r,q=P.hI(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.h(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
hi:function(a){return this.t(a,"")},
hc:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bh(a))}return s},
hd:function(a,b,c){return this.hc(a,b,c,t.z)},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
ghb:function(a){if(a.length>0)return a[0]
throw H.c(H.lq())},
gaw:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lq())},
aR:function(a,b){if(!!a.immutable$list)H.q(P.x("sort"))
H.nP(a,b==null?J.oM():b)},
dS:function(a){return this.aR(a,null)},
R:function(a,b){var s
for(s=0;s<a.length;++s)if(J.C(a[s],b))return!0
return!1},
i:function(a){return P.ky(a,"[","]")},
gO:function(a){return new J.a1(a,a.length)},
gN:function(a){return H.cu(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.q(P.x("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.c2(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.q(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c2(a,b))
a[b]=c},
$im:1,
$ij:1,
$io:1}
J.hC.prototype={}
J.a1.prototype={
gE:function(a){return this.d},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bo.prototype={
aK:function(a,b){var s
if(typeof b!="number")throw H.c(H.af(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbi(b)
if(this.gbi(a)===s)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
hN:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.x(""+a+".toInt()"))},
b_:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.x(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dK:function(a,b){var s
if(b>20)throw H.c(P.a_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
al:function(a,b){var s
if(typeof b!="number")throw H.c(H.af(b))
s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cw:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.x("Result of truncating division is "+H.h(s)+": "+H.h(a)+" ~/ "+b))},
aH:function(a,b){var s
if(a>0)s=this.cV(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fB:function(a,b){if(b<0)throw H.c(H.af(b))
return this.cV(a,b)},
cV:function(a,b){return b>31?0:a>>>b},
$iX:1,
$iP:1}
J.ch.prototype={$il:1}
J.cg.prototype={}
J.aD.prototype={
T:function(a,b){if(b<0)throw H.c(H.c2(a,b))
if(b>=a.length)H.q(H.c2(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.c2(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!="string")throw H.c(P.le(b,null,null))
return a+b},
aO:function(a,b,c,d){var s,r,q=P.b0(b,c,a.length)
if(!H.bZ(q))H.q(H.af(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a3:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
ab:function(a,b){return this.a3(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ee(b,null))
if(b>c)throw H.c(P.ee(b,null))
if(c>a.length)throw H.c(P.ee(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.u(a,b,null)},
l:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.J)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
af:function(a,b){var s=b-a.length
if(s<=0)return a
return this.l(" ",s)+a},
bh:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dl:function(a,b){return this.bh(a,b,0)},
fU:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a_(c,0,s,null,null))
return H.mE(a,b,c)},
R:function(a,b){return this.fU(a,b,0)},
aK:function(a,b){var s
if(typeof b!="string")throw H.c(H.af(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gN:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$iz:1}
H.dK.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.N.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)}}
H.m.prototype={}
H.bI.prototype={
gE:function(a){var s=this.d
return s},
w:function(){var s,r=this,q=r.a,p=J.aP(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bh(q))
s=r.c
if(typeof o!=="number")return H.f(o)
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.bq.prototype={
gO:function(a){return new H.dO(J.bd(this.a),this.b)},
gj:function(a){return J.aU(this.a)},
H:function(a,b){return this.b.$1(J.kq(this.a,b))}}
H.cc.prototype={$im:1}
H.dO.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){var s=this.a
return s}}
H.cJ.prototype={
gO:function(a){return new H.eX(J.bd(this.a),this.b)}}
H.eX.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.cd.prototype={}
H.eQ.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.bS.prototype={}
H.c7.prototype={
i:function(a){return P.kE(this)},
k:function(a,b,c){H.nf()},
$iE:1}
H.c8.prototype={
gj:function(a){return this.a},
bW:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bW(0,b))return null
return this.cJ(b)},
cJ:function(a){return this.b[a]},
B:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cJ(q))}}}
H.iH.prototype={
ae:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.e1.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dI.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.h(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.h(r.a)+")"
return q+p+"' on '"+s+"' ("+H.h(r.a)+")"}}
H.eP.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i6.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fC.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bC.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mH(r==null?"unknown":r)+"'"},
ghT:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.it.prototype={}
H.iq.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mH(s)+"'"}}
H.c5.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c5))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gN:function(a){var s,r=this.c
if(r==null)s=H.cu(this.a)
else s=typeof r!=="object"?J.a9(r):H.cu(r)
return(s^H.cu(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.ed(s))+"'")}}
H.ei.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.y.prototype={
gj:function(a){return this.a},
gad:function(a){return new H.ck(this)},
ghS:function(a){return H.nu(this.gad(this),new H.hD(this))},
bW:function(a,b){var s=this.b
if(s==null)return!1
return this.eh(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.ba(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.ba(p,b)
q=r==null?n:r.b
return q}else return o.hg(b)},
hg:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cK(p,q.dm(a))
r=q.dn(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cD(s==null?q.b=q.bH():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cD(r==null?q.c=q.bH():r,b,c)}else q.hh(b,c)},
hh:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bH()
s=p.dm(a)
r=p.cK(o,s)
if(r==null)p.bM(o,s,[p.bI(a,b)])
else{q=p.dn(r,a)
if(q>=0)r[q].b=b
else r.push(p.bI(a,b))}},
B:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bh(s))
r=r.c}},
cD:function(a,b,c){var s=this.ba(a,b)
if(s==null)this.bM(a,b,this.bI(b,c))
else s.b=c},
bI:function(a,b){var s=this,r=new H.hG(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dm:function(a){return J.a9(a)&0x3ffffff},
dn:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.C(a[r].a,b))return r
return-1},
i:function(a){return P.kE(this)},
ba:function(a,b){return a[b]},
cK:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
ek:function(a,b){delete a[b]},
eh:function(a,b){return this.ba(a,b)!=null},
bH:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bM(r,s,r)
this.ek(r,s)
return r}}
H.hD.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mn(this.a).V("2(1)")}}
H.hG.prototype={}
H.ck.prototype={
gj:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.dN(s,s.r)
r.c=s.e
return r}}
H.dN.prototype={
gE:function(a){return this.d},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bh(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jV.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jW.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jX.prototype={
$1:function(a){return this.a(a)}}
H.dH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilJ:1}
H.cq.prototype={$icq:1}
H.T.prototype={$iT:1}
H.bM.prototype={
gj:function(a){return a.length},
$iw:1}
H.br.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aN(b,a,a.length)
a[b]=c},
$im:1,
$ij:1,
$io:1}
H.cr.prototype={
k:function(a,b,c){H.aN(b,a,a.length)
a[b]=c},
$im:1,
$ij:1,
$io:1}
H.dX.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.dY.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.dZ.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.e_.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.e0.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.cs.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.bN.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aN(b,a,a.length)
return a[b]},
$ibN:1,
$ib2:1}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
H.ak.prototype={
V:function(a){return H.fP(v.typeUniverse,this,a)},
br:function(a){return H.ok(v.typeUniverse,this,a)}}
H.fe.prototype={}
H.f9.prototype={
i:function(a){return this.a}}
H.d_.prototype={}
P.jj.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.ji.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jk.prototype={
$0:function(){this.a.$0()}}
P.jl.prototype={
$0:function(){this.a.$0()}}
P.cZ.prototype={
e4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c1(new P.jx(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
e5:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c1(new P.jw(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$icy:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jw.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.cw(s,o)}q.c=p
r.d.$1(q)}}
P.bV.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.h(this.a)+")"}}
P.bW.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
w:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.w())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bV){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bd(s)
if(o instanceof P.bW){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cW.prototype={
gO:function(a){return new P.bW(this.a())}}
P.eY.prototype={}
P.cx.prototype={}
P.et.prototype={}
P.cy.prototype={}
P.jC.prototype={}
P.jL.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a5(this.b)
throw s}}
P.jq.prototype={
hJ:function(a){var s,r,q,p=null
try{if(C.f===$.az){a.$0()
return}P.ph(p,p,this,a)}catch(q){s=H.ba(q)
r=H.l3(q)
P.mp(p,p,this,s,r)}},
hK:function(a,b){var s,r,q,p=null
try{if(C.f===$.az){a.$1(b)
return}P.pi(p,p,this,a,b)}catch(q){s=H.ba(q)
r=H.l3(q)
P.mp(p,p,this,s,r)}},
hL:function(a,b){return this.hK(a,b,t.z)},
fQ:function(a){return new P.jr(this,a)},
d2:function(a,b){return new P.js(this,a,b)}}
P.jr.prototype={
$0:function(){return this.a.hJ(this.b)}}
P.js.prototype={
$1:function(a){return this.a.hL(this.b,a)},
$S:function(){return this.c.V("~(0)")}}
P.cL.prototype={
gO:function(a){var s=new P.cM(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
R:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ee(b)
return r}},
ee:function(a){var s=this.d
if(s==null)return!1
return this.by(s[this.bu(a)],a)>=0},
m:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cF(s==null?q.b=P.kM():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cF(r==null?q.c=P.kM():r,b)}else return q.e7(0,b)},
e7:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kM()
s=q.bu(b)
r=p[s]
if(r==null)p[s]=[q.bt(b)]
else{if(q.by(r,b)>=0)return!1
r.push(q.bt(b))}return!0},
I:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fm(this.c,b)
else return this.fl(0,b)},
fl:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bu(b)
r=n[s]
q=o.by(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cY(p)
return!0},
cF:function(a,b){if(a[b]!=null)return!1
a[b]=this.bt(b)
return!0},
fm:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cY(s)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bt:function(a){var s,r=this,q=new P.jp(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cN()
return q},
cY:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cN()},
bu:function(a){return J.a9(a)&1073741823},
by:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.C(a[r].a,b))return r
return-1}}
P.jp.prototype={}
P.cM.prototype={
gE:function(a){return this.d},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bh(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cf.prototype={}
P.hH.prototype={
$2:function(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cl.prototype={$im:1,$ij:1,$io:1}
P.i.prototype={
gO:function(a){return new H.bI(a,this.gj(a))},
H:function(a,b){return this.h(a,b)},
B:function(a,b){var s,r=this.gj(a)
if(typeof r!=="number")return H.f(r)
s=0
for(;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.bh(a))}},
gdr:function(a){return this.gj(a)===0},
hO:function(a){var s,r,q,p,o=this
if(o.gdr(a)){s=J.kz(0,H.bw(a).V("i.E"))
return s}r=o.h(a,0)
q=P.hI(o.gj(a),r,!0,H.bw(a).V("i.E"))
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.f(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
h9:function(a,b,c,d){var s
P.b0(b,c,this.gj(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.ky(a,"[","]")}}
P.cn.prototype={}
P.hM.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.h(a)
r.a=s+": "
r.a+=H.h(b)},
$S:16}
P.as.prototype={
B:function(a,b){var s,r
for(s=J.bd(this.gad(a));s.w();){r=s.gE(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.aU(this.gad(a))},
i:function(a){return P.kE(a)},
$iE:1}
P.fQ.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify unmodifiable map"))}}
P.co.prototype={
h:function(a,b){return J.c4(this.a,b)},
k:function(a,b,c){J.ko(this.a,b,c)},
B:function(a,b){J.kr(this.a,b)},
gj:function(a){return J.aU(this.a)},
i:function(a){return J.a5(this.a)},
$iE:1}
P.bT.prototype={}
P.cT.prototype={
i:function(a){return P.ky(this,"{","}")},
H:function(a,b){var s,r,q,p="index"
P.n6(b,p)
P.lI(b,p)
for(s=P.o4(this,this.r),r=0;s.w();){q=s.d
if(b===r)return q;++r}throw H.c(P.M(b,this,p,null,r))},
$im:1,
$ij:1}
P.cN.prototype={}
P.d3.prototype={}
P.j0.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ba(r)}return null}}
P.j1.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ba(r)}return null}}
P.hb.prototype={
hm:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.b0(a2,a3,a1.length)
if(a3==null)throw H.c(P.lH("Invalid range"))
s=$.mX()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.jU(C.a.D(a1,l))
h=H.jU(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.U("")
e=p}else e=p
d=e.a+=C.a.u(a1,q,r)
e.a=d+H.aJ(k)
q=l
continue}}throw H.c(P.Z("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.u(a1,q,a3)
d=e.length
if(o>=0)P.lf(a1,n,a3,o,m,d)
else{c=C.c.al(d-1,4)+1
if(c===1)throw H.c(P.Z(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aO(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lf(a1,n,a3,o,m,b)
else{c=C.c.al(b,4)
if(c===1)throw H.c(P.Z(a,a1,a3))
if(c>1)a1=C.a.aO(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hc.prototype={}
P.dq.prototype={}
P.ds.prototype={}
P.hq.prototype={}
P.iZ.prototype={
gh8:function(){return C.K}}
P.j2.prototype={
bX:function(a){var s,r,q,p=P.b0(0,null,a.length)
if(p==null)throw H.c(P.lH("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jB(r)
if(q.em(a,0,p)!==p){J.n2(a,p-1)
q.bQ()}return new Uint8Array(r.subarray(0,H.oE(0,q.b,r.length)))}}
P.jB.prototype={
bQ:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
fJ:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.b(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.b(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s&63
return!0}else{n.bQ()
return!1}},
em:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fJ(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bQ()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.b(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.b(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=128|p&63}}}return q}}
P.j_.prototype={
bX:function(a){var s=this.a,r=P.nV(s,a,0,null)
if(r!=null)return r
return new P.jA(s).fV(a,0,null,!0)}}
P.jA.prototype={
fV:function(a,b,c,d){var s,r,q,p,o=this,n=P.b0(b,c,J.aU(a))
if(b===n)return""
s=P.oz(a,b,n)
if(typeof n!=="number")return n.p()
n-=b
r=o.bv(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.oA(q)
o.b=0
throw H.c(P.Z(p,a,b+o.c))}return r},
bv:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.p()
if(c-b>1000){s=C.c.Y(b+c,2)
r=q.bv(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bv(a,s,c,d)}return q.fZ(a,b,c,d)},
fZ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.U(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aJ(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aJ(j)
break
case 65:g.a+=H.aJ(j);--f
break
default:p=g.a+=H.aJ(j)
g.a=p+H.aJ(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.b(a,l)
g.a+=H.aJ(a[l])}else g.a+=P.ev(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aJ(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aO.prototype={}
P.ab.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aK:function(a,b){return C.c.aK(this.a,b.a)},
gN:function(a){var s=this.a
return(s^C.c.aH(s,30))&1073741823},
i:function(a){var s=this,r=P.ng(H.nF(s)),q=P.du(H.nD(s)),p=P.du(H.nz(s)),o=P.du(H.nA(s)),n=P.du(H.nC(s)),m=P.du(H.nE(s)),l=P.nh(H.nB(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.X.prototype={}
P.bj.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bj&&this.a===b.a},
gN:function(a){return C.c.gN(this.a)},
aK:function(a,b){return C.c.aK(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ho(),o=this.a
if(o<0)return"-"+new P.bj(0-o).i(0)
s=p.$1(C.c.Y(o,6e7)%60)
r=p.$1(C.c.Y(o,1e6)%60)
q=new P.hn().$1(o%1e6)
return""+C.c.Y(o,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.hn.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ho.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.I.prototype={}
P.dg.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ht(s)
return"Assertion failed"}}
P.e2.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbx()+o+m
if(!q.a)return l
s=q.gbw()
r=P.ht(q.b)
return l+s+": "+r}}
P.bR.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.h(q):""
else if(q==null)s=": Not greater than or equal to "+H.h(r)
else if(q>r)s=": Not in inclusive range "+H.h(r)+".."+H.h(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.h(r)
return s}}
P.dE.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var s,r=this.b
if(typeof r!=="number")return r.a5()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.h(s)},
gj:function(a){return this.f}}
P.eR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eO.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.er.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dr.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ht(s)+"."}}
P.e5.prototype={
i:function(a){return"Out of Memory"},
$iI:1}
P.cw.prototype={
i:function(a){return"Stack Overflow"},
$iI:1}
P.dt.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fb.prototype={
i:function(a){return"Exception: "+this.a}}
P.hz.prototype={
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
for(o=e;o<m;++o){n=C.a.T(d,o)
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
return f+j+h+i+"\n"+C.a.l(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.h(e)+")"):f}}
P.l.prototype={}
P.j.prototype={
gj:function(a){var s,r=this.gO(this)
for(s=0;r.w();)++s
return s},
H:function(a,b){var s,r,q
P.lI(b,"index")
for(s=this.gO(this),r=0;s.w();){q=s.gE(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.nl(this,"(",")")}}
P.dF.prototype={}
P.o.prototype={$im:1,$ij:1}
P.E.prototype={}
P.aj.prototype={
gN:function(a){return P.K.prototype.gN.call(C.j,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
q:function(a,b){return this===b},
gN:function(a){return H.cu(this)},
i:function(a){return"Instance of '"+H.h(H.ed(this))+"'"},
toString:function(){return this.i(this)}}
P.z.prototype={}
P.U.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iX.prototype={
$2:function(a,b){var s,r,q,p=J.l2(b).dl(b,"=")
if(p===-1){if(b!=="")J.ko(a,P.kV(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ah(b,p+1)
q=this.a
J.ko(a,P.kV(s,0,s.length,q,!0),P.kV(r,0,r.length,q,!0))}return a}}
P.iT.prototype={
$2:function(a,b){throw H.c(P.Z("Illegal IPv4 address, "+a,this.a,b))}}
P.iV.prototype={
$2:function(a,b){throw H.c(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iW.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.h1(C.a.u(this.b,a,b),16)
if(typeof s!=="number")return s.a5()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bv.prototype={
gbb:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.h(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.q(H.kD("Field '_text' has been assigned during initialization."))}return o},
gN:function(a){var s=this,r=s.z
if(r==null){r=C.a.gN(s.gbb())
if(s.z==null)s.z=r
else r=H.q(H.kD("Field 'hashCode' has been assigned during initialization."))}return r},
gb5:function(){var s=this,r=s.Q
if(r==null){r=new P.bT(P.lV(s.gb4(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.kD("Field 'queryParameters' has been assigned during initialization."))}return r},
gdO:function(){return this.b},
gc9:function(a){var s=this.c
if(s==null)return""
if(C.a.ab(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbl:function(a){var s=this.d
return s==null?P.md(this.a):s},
gb4:function(a){var s=this.f
return s==null?"":s},
gc8:function(){var s=this.r
return s==null?"":s},
ck:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.ab(s,"/"))s="/"+s
q=s
p=P.kT(null,0,0,b)
return new P.bv(n,l,j,k,q,p,o.r)},
gdh:function(){return this.c!=null},
gdk:function(){return this.f!=null},
gdi:function(){return this.r!=null},
i:function(a){return this.gbb()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbp()&&s.c!=null===b.gdh()&&s.b===b.gdO()&&s.gc9(s)===b.gc9(b)&&s.gbl(s)===b.gbl(b)&&s.e===b.gdE(b)&&s.f!=null===b.gdk()&&s.gb4(s)===b.gb4(b)&&s.r!=null===b.gdi()&&s.gc8()===b.gc8()},
$ieS:1,
gbp:function(){return this.a},
gdE:function(a){return this.e}}
P.jz.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.h(P.kW(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.h(P.kW(C.h,b,C.e,!0))}}}
P.jy.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.bd(b),r=this.a;s.w();)r.$2(a,s.gE(s))}}
P.iS.prototype={
gdN:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bh(s,"?",m)
q=s.length
if(r>=0){p=P.d4(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.f3("data","",n,n,P.d4(s,m,q,C.v,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jG.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jF.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.n3(s,0,96,b)
return s},
$S:17}
P.jH.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.jI.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.fw.prototype={
gdh:function(){return this.c>0},
gdj:function(){return this.c>0&&this.d+1<this.e},
gdk:function(){return this.f<this.r},
gdi:function(){return this.r<this.a.length},
gcL:function(){return this.b===4&&C.a.ab(this.a,"http")},
gcM:function(){return this.b===5&&C.a.ab(this.a,"https")},
gbp:function(){var s=this.x
return s==null?this.x=this.ef():s},
ef:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcL())return"http"
if(s.gcM())return"https"
if(r===4&&C.a.ab(s.a,"file"))return"file"
if(r===7&&C.a.ab(s.a,"package"))return"package"
return C.a.u(s.a,0,r)},
gdO:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gc9:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbl:function(a){var s=this
if(s.gdj())return P.h1(C.a.u(s.a,s.d+1,s.e),null)
if(s.gcL())return 80
if(s.gcM())return 443
return 0},
gdE:function(a){return C.a.u(this.a,this.e,this.f)},
gb4:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gc8:function(){var s=this.r,r=this.a
return s<r.length?C.a.ah(r,s+1):""},
gb5:function(){var s=this
if(s.f>=s.r)return C.S
return new P.bT(P.lV(s.gb4(s)),t.U)},
ck:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbp(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.gdj()?n.gbl(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.ab(r,"/"))r="/"+r
p=P.kT(m,0,0,b)
q=n.r
o=q<j.length?C.a.ah(j,q+1):m
return new P.bv(l,i,s,h,r,p,o)},
gN:function(a){var s=this.y
return s==null?this.y=C.a.gN(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ieS:1}
P.f3.prototype={}
W.p.prototype={}
W.h5.prototype={
gj:function(a){return a.length}}
W.de.prototype={
i:function(a){return String(a)}}
W.df.prototype={
i:function(a){return String(a)}}
W.be.prototype={$ibe:1}
W.bf.prototype={
cp:function(a,b,c){if(c!=null)return a.getContext(b,P.pw(c))
return a.getContext(b)},
dP:function(a,b){return this.cp(a,b,null)},
$ibf:1}
W.ap.prototype={
gj:function(a){return a.length}}
W.hg.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.c9.prototype={
gj:function(a){return a.length}}
W.hh.prototype={}
W.ah.prototype={}
W.aC.prototype={}
W.hi.prototype={
gj:function(a){return a.length}}
W.hj.prototype={
gj:function(a){return a.length}}
W.hk.prototype={
gj:function(a){return a.length}}
W.hl.prototype={
i:function(a){return String(a)}}
W.ca.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.cb.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaz(a))+" x "+H.h(this.gau(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b9(b)
s=a.left==s.gbj(b)&&a.top==s.gbn(b)&&this.gaz(a)==s.gaz(b)&&this.gau(a)==s.gau(b)}else s=!1
return s},
gN:function(a){return W.m5(J.a9(a.left),J.a9(a.top),J.a9(this.gaz(a)),J.a9(this.gau(a)))},
gd3:function(a){return a.bottom},
gau:function(a){return a.height},
gbj:function(a){return a.left},
gcl:function(a){return a.right},
gbn:function(a){return a.top},
gaz:function(a){return a.width},
$ia3:1}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.hm.prototype={
gj:function(a){return a.length}}
W.f0.prototype={
gdr:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
m:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.hO(this)
return new J.a1(s,s.length)}}
W.G.prototype={
gd4:function(a){return new W.f0(a,a.children)},
gd5:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a5()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a5()
if(p<0)p=-p*0
return new P.a3(s,r,q,p,t.q)},
i:function(a){return a.localName},
$iG:1}
W.k.prototype={$ik:1}
W.d.prototype={
fM:function(a,b,c,d){if(c!=null)this.e8(a,b,c,!1)},
e8:function(a,b,c,d){return a.addEventListener(b,H.c1(c,1),!1)},
$id:1}
W.ac.prototype={$iac:1}
W.bE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1,
$ibE:1}
W.dA.prototype={
gj:function(a){return a.length}}
W.dC.prototype={
gj:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.hB.prototype={
gj:function(a){return a.length}}
W.bl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.bm.prototype={
gd6:function(a){return a.data},
$ibm:1}
W.bn.prototype={$ibn:1}
W.bH.prototype={$ibH:1}
W.bp.prototype={$ibp:1}
W.hK.prototype={
i:function(a){return String(a)}}
W.i1.prototype={
gj:function(a){return a.length}}
W.bJ.prototype={$ibJ:1}
W.dU.prototype={
h:function(a,b){return P.b8(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gad:function(a){var s=H.e([],t.s)
this.B(a,new W.i2(s))
return s},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iE:1}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dV.prototype={
h:function(a,b){return P.b8(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gad:function(a){var s=H.e([],t.s)
this.B(a,new W.i3(s))
return s},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iE:1}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.dW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.ad.prototype={$iad:1}
W.f_.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.ce(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.v.prototype={
hH:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.n0(s,b,a)}catch(q){H.ba(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dU(a):s},
fo:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.ct.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.au.prototype={
gj:function(a){return a.length},
$iau:1}
W.e8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.eh.prototype={
h:function(a,b){return P.b8(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gad:function(a){var s=H.e([],t.s)
this.B(a,new W.ie(s))
return s},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iE:1}
W.ie.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ej.prototype={
gj:function(a){return a.length}}
W.al.prototype={$ial:1}
W.el.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.aw.prototype={$iaw:1}
W.em.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.ax.prototype={
gj:function(a){return a.length},
$iax:1}
W.es.prototype={
h:function(a,b){return a.getItem(H.oC(b))},
k:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gad:function(a){var s=H.e([],t.s)
this.B(a,new W.ir(s))
return s},
gj:function(a){return a.length},
$iE:1}
W.ir.prototype={
$2:function(a,b){return this.a.push(a)}}
W.am.prototype={$iam:1}
W.b1.prototype={$ib1:1}
W.an.prototype={$ian:1}
W.a6.prototype={$ia6:1}
W.ex.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.ey.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.iD.prototype={
gj:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.bt.prototype={$ibt:1}
W.eD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.iG.prototype={
gj:function(a){return a.length}}
W.aM.prototype={}
W.iY.prototype={
i:function(a){return String(a)}}
W.eV.prototype={
gj:function(a){return a.length}}
W.b4.prototype={
gh0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gh_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ib4:1}
W.bU.prototype={
fp:function(a,b){return a.requestAnimationFrame(H.c1(b,1))},
el:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.f1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.cK.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b9(b)
s=a.left==s.gbj(b)&&a.top==s.gbn(b)&&a.width==s.gaz(b)&&a.height==s.gau(b)}else s=!1
return s},
gN:function(a){return W.m5(J.a9(a.left),J.a9(a.top),J.a9(a.width),J.a9(a.height))},
gau:function(a){return a.height},
gaz:function(a){return a.width}}
W.ff.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.cO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.fH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.kx.prototype={}
W.fa.prototype={
fI:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.n1(s,this.c,r,!1)}}}
W.jm.prototype={
$1:function(a){return this.a.$1(a)}}
W.kL.prototype={}
W.J.prototype={
gO:function(a){return new W.ce(a,this.gj(a))}}
W.ce.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.c4(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return this.d}}
W.f2.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fv.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fD.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
P.jt.prototype={
c7:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
b8:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.kY(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ab)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.iR("structured clone of RegExp"))
if(t.G.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.u.b(a))return a
if(t.o.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.c7(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.kr(a,new P.ju(n,o))
return n.a}if(t.aH.b(a)){s=o.c7(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.fX(a,s)}if(t.eH.b(a)){s=o.c7(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.he(a,new P.jv(n,o))
return n.b}throw H.c(P.iR("structured clone of other type"))},
fX:function(a,b){var s,r=J.aP(a),q=r.gj(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.f(q)
s=0
for(;s<q;++s){o=this.b8(r.h(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.ju.prototype={
$2:function(a,b){this.a.a[a]=this.b.b8(b)},
$S:3}
P.jv.prototype={
$2:function(a,b){this.a.b[a]=this.b.b8(b)},
$S:3}
P.d0.prototype={$ibm:1,
gd6:function(a){return this.a}}
P.jM.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.fG.prototype={
he:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dB.prototype={
gaT:function(){return new H.bq(new H.cJ(this.b,new P.hx()),new P.hy())},
B:function(a,b){C.b.B(P.hJ(this.gaT(),!1,t.h),b)},
k:function(a,b,c){var s=this.gaT()
J.n5(s.b.$1(J.kq(s.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aU(this.gaT().a)},
h:function(a,b){var s=this.gaT()
return s.b.$1(J.kq(s.a,b))},
gO:function(a){var s=P.hJ(this.gaT(),!1,t.h)
return new J.a1(s,s.length)}}
P.hx.prototype={
$1:function(a){return t.h.b(a)}}
P.hy.prototype={
$1:function(a){return t.h.a(a)}}
P.fu.prototype={
gcl:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
gd3:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.h(s.a)+", "+H.h(s.b)+") "+H.h(s.c)+" x "+H.h(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.b9(b)
if(s==r.gbj(b)){q=n.b
if(q==r.gbn(b)){p=n.c
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.f(p)
o=n.$ti.c
if(o.a(s+p)===r.gcl(b)){s=n.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.f(s)
r=o.a(q+s)===r.gd3(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gN:function(a){var s,r=this,q=r.a,p=J.a9(q),o=r.b,n=J.a9(o),m=r.c
if(typeof q!=="number")return q.n()
if(typeof m!=="number")return H.f(m)
s=r.$ti.c
m=C.c.gN(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.n()
if(typeof q!=="number")return H.f(q)
q=C.c.gN(s.a(o+q))
return P.o3(P.jo(P.jo(P.jo(P.jo(0,p),n),m),q))}}
P.a3.prototype={
gbj:function(a){return this.a},
gbn:function(a){return this.b},
gaz:function(a){return this.c},
gau:function(a){return this.d}}
P.aE.prototype={$iaE:1}
P.dL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.aH.prototype={$iaH:1}
P.e3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.i7.prototype={
gj:function(a){return a.length}}
P.eu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.n.prototype={
gd4:function(a){return new P.dB(a,new W.f_(a))}}
P.aK.prototype={$iaK:1}
P.eE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.fi.prototype={}
P.fj.prototype={}
P.fq.prototype={}
P.fr.prototype={}
P.fE.prototype={}
P.fF.prototype={}
P.fM.prototype={}
P.fN.prototype={}
P.b2.prototype={$im:1,$ij:1,$io:1}
P.h9.prototype={
gj:function(a){return a.length}}
P.di.prototype={
h:function(a,b){return P.b8(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gad:function(a){var s=H.e([],t.s)
this.B(a,new P.ha(s))
return s},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iE:1}
P.ha.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dj.prototype={
gj:function(a){return a.length}}
P.aV.prototype={}
P.e4.prototype={
gj:function(a){return a.length}}
P.eZ.prototype={}
P.eg.prototype={
hM:function(a,b,c,d,e,f,g){var s
if(t.u.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.px(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bA("Incorrect number or type of arguments"))}}
P.ep.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
s=P.b8(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.fA.prototype={}
P.fB.prototype={}
K.h6.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"}}
K.dD.prototype={
aM:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].aM(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.hN.prototype={}
K.b_.prototype={
aM:function(a,b){return!this.dT(0,b)},
i:function(a){return"!["+this.ct(0)+"]"}}
K.ig.prototype={
dY:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
s=new H.y(t.E)
for(r=new H.bI(a,a.gj(a));r.w();){q=r.d
s.k(0,q,!0)}p=P.hJ(s.gad(s),!0,t.e)
C.b.dS(p)
this.a=p},
aM:function(a,b){return C.b.R(this.a,b)},
i:function(a){return P.ev(this.a,0,null)}}
L.eq.prototype={
t:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.eF(this.a.L(0,b))
p.a=H.e([],t.L)
p.c=!1
this.c.push(p)
return p},
ha:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.aM(0,a))return p}return null},
i:function(a){return this.b},
cX:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.R(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gad(l),l=l.gO(l);l.w();){r=l.gE(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.h(r)+" => ["+H.h(q)+"]")
m=s.c.R(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eB.prototype={
i:function(a){var s=H.mF(this.b,"\n","\\n"),r=H.mF(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eC.prototype={
i:function(a){return this.b}}
L.iE.prototype={
L:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eq(this,b)
s.c=H.e([],t.br)
this.a.k(0,b,s)}return s},
b6:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eC(a)
s.c=new H.y(t.dO)
this.b.k(0,a,s)}return s},
dL:function(a){return this.hP(a)},
hP:function(a){var s=this
return P.oU(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dL(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.e([],c)
a0=H.e([],c)
a1=H.e([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.ci(a1,0)
else{if(!r.w()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.ha(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.ev(a0,0,null)
throw H.c(P.t("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.x("removeRange"))
P.b0(0,k,a0.length)
a0.splice(0,k-0)
C.b.fK(a1,a0)
a0=H.e([],c)
b=H.e([],c)
d=s.d
q=!s.c.R(0,n.a)?7:8
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
if(d.d!=null){g=P.ev(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.eB(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.R(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.o1()
case 1:return P.o2(o)}}},t.eB)},
i:function(a){var s,r=new P.U(""),q=this.d
if(q!=null)r.a=q.cX()+"\n"
for(q=this.a,q=q.ghS(q),q=q.gO(q);q.w();){s=q.gE(q)
if(s!=this.d)r.a+=s.cX()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.eF.prototype={
i:function(a){return this.b.b+": "+this.ct(0)}}
O.aa.prototype={
bq:function(a){this.a=H.e([],a.V("u<0*>"))
this.c=this.b=null},
cq:function(a,b,c){this.b=b
this.c=a},
b9:function(a,b){return this.cq(a,null,b)},
f8:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
e0:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a1(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
m:function(a,b){var s,r,q=this,p=H.mn(q).V("u<aa.T*>")
if(q.f8(H.e([b],p))){s=q.a
r=s.length
s.push(b)
q.e0(r,H.e([b],p))}},
$ij:1}
O.cp.prototype={
gj:function(a){return this.a.length},
gA:function(){var s=this.b
return s==null?this.b=D.L():s},
aA:function(){var s=this.b
if(s!=null)s.F(null)},
ga_:function(a){var s=this.a
if(s.length>0)return C.b.gaw(s)
else return V.dT()},
dG:function(a){var s=this.a
if(a==null)s.push(V.dT())
else s.push(a)
this.aA()},
cg:function(){var s=this.a
if(s.length>0){s.pop()
this.aA()}}}
E.hd.prototype={}
E.bk.prototype={
cE:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a1(s,s.length);s.w();){r=s.d
if(r.f==null)r.cE()}},
scr:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gA().I(0,q.gdA())
s=q.c
if(s!=null)s.gA().m(0,q.gdA())
r=new D.B("shape",p,q.c)
r.b=!0
q.ai(r)}},
sdJ:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gA().I(0,q.gdC())
s=q.f
q.f=a
if(a!=null)a.gA().m(0,q.gdC())
q.cE()
r=new D.B("technique",s,q.f)
r.b=!0
q.ai(r)}},
sb1:function(a){var s,r,q=this
if(!J.C(q.r,a)){s=q.r
if(s!=null)s.gA().I(0,q.gdw())
if(a!=null)a.gA().m(0,q.gdw())
q.r=a
r=new D.B("mover",s,a)
r.b=!0
q.ai(r)}},
ao:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aP(0,b,q):null
if(!J.C(o,q.x)){s=q.x
q.x=o
r=new D.B("matrix",s,o)
r.b=!0
q.ai(r)}p=q.f
if(p!=null)p.ao(0,b)
for(p=q.y.a,p=new J.a1(p,p.length);p.w();)p.d.ao(0,b)},
aN:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga_(q))
else o.push(p.l(0,q.ga_(q)))
q.aA()
a.dH(r.f)
q=a.dy
s=(q&&C.b).gaw(q)
if(s!=null&&r.d!=null)s.hG(a,r)
for(q=r.y.a,q=new J.a1(q,q.length);q.w();)q.d.aN(a)
a.dF()
a.dx.cg()},
ai:function(a){var s=this.z
if(s!=null)s.F(a)},
a0:function(){return this.ai(null)},
dB:function(a){this.e=null
this.ai(a)},
ht:function(){return this.dB(null)},
dD:function(a){this.ai(a)},
hu:function(){return this.dD(null)},
dz:function(a){this.ai(a)},
hs:function(){return this.dz(null)},
dv:function(a){this.ai(a)},
hp:function(){return this.dv(null)},
ho:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdu(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bD()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.e([],q):m).push(r)}}this.a0()},
hr:function(a,b){var s,r
for(s=b.gO(b),r=this.gdu();s.w();)s.gE(s).gA().I(0,r)
this.a0()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bB.prototype={
i:function(a){return this.b}}
E.bO.prototype={
i:function(a){return this.b}}
E.f8.prototype={}
E.ia.prototype={
dX:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ab(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cp()
r=t.p
s.a=H.e([],r)
s.gA().m(0,new E.ib(q))
q.cy=s
s=new O.cp()
s.a=H.e([],r)
s.gA().m(0,new E.ic(q))
q.db=s
s=new O.cp()
s.a=H.e([],r)
s.gA().m(0,new E.id(q))
q.dx=s
s=H.e([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.y(t.h9)},
ghD:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga_(q)
s=r.db
s=r.z=q.l(0,s.ga_(s))
q=s}return q},
dH:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaw(s):a)},
dF:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.ib.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.ic.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.id.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eA.prototype={
cB:function(a){this.dI()},
cA:function(){return this.cB(null)},
ghf:function(){var s,r=this,q=Date.now(),p=C.c.Y(P.lm(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ab(q,!1)
return s/p},
cR:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.l()
if(typeof p!=="number")return H.f(p)
s=C.d.b_(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.l()
r=C.d.b_(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.lQ(C.n,q.ghI())}},
dI:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.z.el(s)
r=W.mr(new E.iC(this),t.H)
r.toString
C.z.fp(s,r)}},
hF:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cR()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ab(p,!1)
q.y=P.lm(p-q.r.a).a*0.000001
p=q.cy
C.b.sj(p.a,0)
p.aA()
p=q.db
C.b.sj(p.a,0)
p.aA()
p=q.dx
C.b.sj(p.a,0)
p.aA()
p=q.dy
p.toString
C.b.sj(p,0)
q.dy.push(null)
m.aN(n.e)}}catch(o){s=H.ba(o)
r=H.l3(o)
P.l8("Error: "+H.h(s))
P.l8("Stack: "+H.h(r))
throw H.c(s)}}}
E.iC.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hF()}}}
Z.eW.prototype={}
Z.dm.prototype={
be:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ba(q)
r=P.t('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.h(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.h(s.e)+"]"}}
Z.jh.prototype={}
Z.dn.prototype={
aL:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
be:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].be(a)},
dM:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aN:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.e([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)n.push(s[q].i(0))
p=H.e([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a5(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.t(n,", ")+"\nAttrs:   "+C.b.t(p,", ")}}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.ed(this.c))+"'")+"]"}}
Z.b3.prototype={
gcs:function(a){var s=this.a,r=(s&$.aT().a)!==0?3:0
if((s&$.aA().a)!==0)r+=3
if((s&$.aS().a)!==0)r+=3
if((s&$.bb().a)!==0)r+=2
if((s&$.bc().a)!==0)r+=3
if((s&$.db().a)!==0)r+=3
if((s&$.dc().a)!==0)r+=4
if((s&$.by().a)!==0)++r
return(s&$.aR().a)!==0?r+4:r},
fP:function(a){var s,r=$.aT(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bb()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bc()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.db()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dc()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.by()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aR()
if((q&r.a)!==0)if(s===a)return r
return $.mW()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b3))return!1
return this.a===b.a},
i:function(a){var s=H.e([],t.i),r=this.a
if((r&$.aT().a)!==0)s.push("Pos")
if((r&$.aA().a)!==0)s.push("Norm")
if((r&$.aS().a)!==0)s.push("Binm")
if((r&$.bb().a)!==0)s.push("Txt2D")
if((r&$.bc().a)!==0)s.push("TxtCube")
if((r&$.db().a)!==0)s.push("Clr3")
if((r&$.dc().a)!==0)s.push("Clr4")
if((r&$.by().a)!==0)s.push("Weight")
if((r&$.aR().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.t(s,"|")}}
D.he.prototype={}
D.bD.prototype={
m:function(a,b){var s=this.a;(s==null?this.a=H.e([],t.f):s).push(b)},
I:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.R(q,b)
if(q===!0){q=r.a
s=(q&&C.b).I(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.R(q,b)
if(q===!0){q=r.b
s=(q&&C.b).I(q,b)||s}return s},
F:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.Q()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.B(P.hJ(s,!0,t.dm),new D.hu(o))
s=p.b
if(s!=null){p.b=H.e([],t.f)
C.b.B(s,new D.hv(o))}return!0},
h6:function(){return this.F(null)},
a8:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.F(s)}}}}
D.hu.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hv.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Q.prototype={}
D.aW.prototype={}
D.aX.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.dp.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.dJ.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.hE.prototype={
hz:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
hv:function(a){this.c=a.b
this.d.I(0,a.a)
return!1}}
X.cm.prototype={}
X.hL.prototype={
aS:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.l()
s=b.b
r=o.ch
if(typeof s!=="number")return s.l()
q=new V.av(m.a+l*k,m.b+s*r)
r=o.a.gaI()
p=new X.bK(a,V.bs(),o.x,r,q)
p.b=!0
o.z=new P.ab(n,!1)
o.x=q
return p},
cf:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dQ()
if(typeof s!=="number")return s.aa()
this.r=(s&~r)>>>0
return!1},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.F(this.aS(a,b))
return!0},
hA:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaI()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.l()
o=a.b
n=m.cy
if(typeof o!=="number")return o.l()
r=new X.bL(new V.a7(q*p,o*n),s,r)
r.b=!0
l.F(r)
return!0},
eY:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cm(c,p.a.gaI(),b)
q.b=!0
r.F(q)
p.y=new P.ab(s,!1)
p.x=V.bs()}}
X.ai.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ai))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bK.prototype={}
X.i4.prototype={
bz:function(a,b,c){var s=this,r=new P.ab(Date.now(),!1),q=s.a.gaI(),p=new X.bK(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cf:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.F(this.bz(a,b,!0))
return!0},
b3:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dQ()
if(typeof r!=="number")return r.aa()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.F(s.bz(a,b,!0))
return!0},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.F(this.bz(a,b,!1))
return!0},
hB:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaI()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.l()
p=a.b
o=n.ch
if(typeof p!=="number")return p.l()
s=new X.bL(new V.a7(r*q,p*o),s,b)
s.b=!0
m.F(s)
return!0},
gd7:function(){var s=this.b
return s==null?this.b=D.L():s},
gcn:function(){var s=this.c
return s==null?this.c=D.L():s},
gdt:function(){var s=this.d
return s==null?this.d=D.L():s}}
X.bL.prototype={}
X.eb.prototype={}
X.cz.prototype={}
X.iF.prototype={
aS:function(a,b){var s=this,r=new P.ab(Date.now(),!1),q=a.length>0?a[0]:V.bs(),p=s.a.gaI(),o=new X.cz(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hy:function(a){var s=this.b
if(s==null)return!1
s.F(this.aS(a,!0))
return!0},
hw:function(a){var s=this.c
if(s==null)return!1
s.F(this.aS(a,!0))
return!0},
hx:function(a){var s=this.d
if(s==null)return!1
s.F(this.aS(a,!1))
return!0}}
X.eT.prototype={
gaI:function(){var s=this.a,r=C.i.gd5(s).c
r.toString
s=C.i.gd5(s).d
s.toString
return V.lK(0,0,r,s)},
cH:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dJ(s,new X.ai(r,a.altKey,a.shiftKey))},
aG:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ai(r,a.altKey,a.shiftKey)},
bN:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ai(r,a.altKey,a.shiftKey)},
as:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.p()
if(typeof o!=="number")return H.f(o)
s=r.top
if(typeof p!=="number")return p.p()
if(typeof s!=="number")return H.f(s)
return new V.av(q-o,p-s)},
aU:function(a){return new V.a7(a.movementX,a.movementY)},
bJ:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.e([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=C.d.aj(p.pageX)
C.d.aj(p.pageY)
n=k.left
if(typeof n!=="number")return H.f(n)
C.d.aj(p.pageX)
m=C.d.aj(p.pageY)
l=k.top
if(typeof l!=="number")return H.f(l)
j.push(new V.av(o-n,m-l))}return j},
aq:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dp(s,new X.ai(r,a.altKey,a.shiftKey))},
bA:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.p()
if(typeof n!=="number")return H.f(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.p()
if(typeof p!=="number")return H.f(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.f(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.f(p)
p=r<p}else p=!1
return p},
eS:function(a){this.f=!0},
eE:function(a){this.f=!1},
eM:function(a){if(this.f&&this.bA(a))a.preventDefault()},
eW:function(a){var s
if(!this.f)return
s=this.cH(a)
this.b.hz(s)},
eU:function(a){var s
if(!this.f)return
s=this.cH(a)
this.b.hv(s)},
f_:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aG(a)
if(p.x){s=p.aq(a)
r=p.aU(a)
if(p.d.cf(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aq(a)
q=p.as(a)
if(p.c.cf(s,q))a.preventDefault()},
f3:function(a){var s,r,q,p=this
p.aG(a)
s=p.aq(a)
if(p.x){r=p.aU(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b3(s,q))a.preventDefault()},
eQ:function(a){var s,r,q,p=this
if(!p.bA(a)){p.aG(a)
s=p.aq(a)
if(p.x){r=p.aU(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b3(s,q))a.preventDefault()}},
f1:function(a){var s,r,q,p=this
p.aG(a)
s=p.aq(a)
if(p.x){r=p.aU(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b2(s,q))a.preventDefault()},
eO:function(a){var s,r,q,p=this
if(!p.bA(a)){p.aG(a)
s=p.aq(a)
if(p.x){r=p.aU(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b2(s,q))a.preventDefault()}},
f5:function(a){var s,r,q=this
q.aG(a)
s=new V.a7((a&&C.y).gh_(a),C.y.gh0(a)).l(0,q.Q)
if(q.x){if(q.d.hA(s))a.preventDefault()
return}if(q.r)return
r=q.as(a)
if(q.c.hB(s,r))a.preventDefault()},
f7:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aq(q.y)
r=q.as(q.y)
q.d.eY(s,r,p)}},
fk:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bN(a)
s=r.bJ(a)
if(r.e.hy(s))a.preventDefault()},
fg:function(a){var s
this.bN(a)
s=this.bJ(a)
if(this.e.hw(s))a.preventDefault()},
fi:function(a){var s
this.bN(a)
s=this.bJ(a)
if(this.e.hx(s))a.preventDefault()}}
D.dk.prototype={$iR:1}
D.bi.prototype={
ap:function(a){var s=this.r
if(s!=null)s.F(a)},
e2:function(){return this.ap(null)},
$iR:1}
D.R.prototype={}
D.cj.prototype={
ap:function(a){var s=this.y
if(s!=null)s.F(a)},
cP:function(a){var s=this.z
if(s!=null)s.F(a)},
eX:function(){return this.cP(null)},
fa:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(q==null||this.eg(q))return!1}return!0},
ey:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcO(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o instanceof D.bi)this.f.push(o)
n=o.r
if(n==null){n=new D.bD()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.e([],q):m).push(r)}s=new D.aW()
s.b=!0
this.ap(s)},
fe:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gcO();s.w();){q=s.gE(s)
C.b.I(this.e,q)
q.gA().I(0,r)}s=new D.aX()
s.b=!0
this.ap(s)},
eg:function(a){var s=C.b.R(this.f,a)
return s}}
D.ea.prototype={$iR:1}
D.en.prototype={$iR:1}
V.Y.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.bg.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bg))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.hs.prototype={}
V.dS.prototype={
a9:function(a,b){var s=this,r=H.e([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dS))return!1
s=b.a
r=q.a
$.D().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.c3(H.e([o.a,o.d,o.r],n),3,0),l=V.c3(H.e([o.b,o.e,o.x],n),3,0),k=V.c3(H.e([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.b(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.b(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.b(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.b(m,1)
p=" "+m[1]+", "
if(1>=r)return H.b(l,1)
p=p+l[1]+", "
if(1>=q)return H.b(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.b(m,2)
n=" "+m[2]+", "
if(2>=r)return H.b(l,2)
n=n+l[2]+", "
if(2>=q)return H.b(k,2)
return p+(n+k[2]+"]")}}
V.aZ.prototype={
a9:function(a,b){var s=this,r=H.e([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dq:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.f(p)
o=b1.c
if(typeof o!=="number")return o.l()
n=b2*p-o*r
m=b1.x
l=b1.d
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.l()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.l()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.l()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.D().toString
if(Math.abs(a7-0)<1e-9)return V.dT()
a8=1/a7
a9=-r
b0=-d
return V.aG((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
l:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=b1.d
n=b5.cx
m=b5.b
if(typeof m!=="number")return H.f(m)
l=b5.f
if(typeof l!=="number")return H.f(l)
k=b5.z
if(typeof k!=="number")return H.f(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.f(i)
h=b5.r
if(typeof h!=="number")return H.f(h)
g=b5.Q
if(typeof g!=="number")return H.f(g)
f=b5.db
e=b5.d
d=b5.x
c=b5.ch
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.l()
a0=b1.f
if(typeof a0!=="number")return a0.l()
a1=b1.r
if(typeof a1!=="number")return a1.l()
a2=b1.x
a3=b1.y
if(typeof a3!=="number")return a3.l()
a4=b1.z
if(typeof a4!=="number")return a4.l()
a5=b1.Q
if(typeof a5!=="number")return a5.l()
a6=b1.ch
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.aG(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bo:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.e
if(typeof o!=="number")return o.l()
n=i.f
if(typeof n!=="number")return n.l()
m=i.r
if(typeof m!=="number")return m.l()
l=i.y
if(typeof l!=="number")return l.l()
k=i.z
if(typeof k!=="number")return k.l()
j=i.Q
if(typeof j!=="number")return j.l()
return new V.A(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
b7:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.e
if(typeof o!=="number")return o.l()
n=i.f
if(typeof n!=="number")return n.l()
m=i.r
if(typeof m!=="number")return m.l()
l=i.y
if(typeof l!=="number")return l.l()
k=i.z
if(typeof k!=="number")return k.l()
j=i.Q
if(typeof j!=="number")return j.l()
return new V.O(h*g+s*r+q*p+i.d,o*g+n*r+m*p+i.x,l*g+k*r+j*p+i.ch)},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aZ))return!1
s=b.a
r=q.a
$.D().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.K()},
C:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.c3(H.e([n.a,n.e,n.y,n.cx],m),3,0),k=V.c3(H.e([n.b,n.f,n.z,n.cy],m),3,0),j=V.c3(H.e([n.c,n.r,n.Q,n.db],m),3,0),i=V.c3(H.e([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.b(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.b(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.b(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.b(l,1)
o=o+l[1]+", "
if(1>=r)return H.b(k,1)
o=o+k[1]+", "
if(1>=q)return H.b(j,1)
o=o+j[1]+", "
if(1>=p)return H.b(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.b(l,2)
s=s+l[2]+", "
if(2>=r)return H.b(k,2)
s=s+k[2]+", "
if(2>=q)return H.b(j,2)
s=s+j[2]+", "
if(2>=p)return H.b(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.b(l,3)
o=o+l[3]+", "
if(3>=r)return H.b(k,3)
o=o+k[3]+", "
if(3>=q)return H.b(j,3)
o=o+j[3]+", "
if(3>=p)return H.b(i,3)
return s+(o+i[3]+"]")},
K:function(){return this.C("")}}
V.av.prototype={
a1:function(a){return new V.a7(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.O.prototype={
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.O(o+n,s+r,q+p)},
p:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.p()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.f(p)
return new V.O(o-n,s-r,q-p)},
l:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.l()
s=this.b
if(typeof s!=="number")return s.l()
r=this.c
if(typeof r!=="number")return r.l()
return new V.O(q*b,s*b,r*b)},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
r=q.a
$.D().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.bP.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bP))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.ef.prototype={
ga7:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ef))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.a7.prototype={
ca:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
return q*p+s*r},
l:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.l()
if(typeof b!=="number")return H.f(b)
s=this.b
if(typeof s!=="number")return s.l()
return new V.a7(r*b,s*b)},
U:function(a,b){var s,r
$.D().toString
if(Math.abs(b-0)<1e-9){s=$.lX
return s==null?$.lX=new V.a7(0,0):s}s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
return new V.a7(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
s=b.a
r=this.a
$.D().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.A.prototype={
ca:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
return o*n+s*r+q*p},
cb:function(a,b){return new V.A(V.h2(this.a,a.a,b),V.h2(this.b,a.b,b),V.h2(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.a2(s))
if(r===1)return s
return s.U(0,r)},
at:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=a.a
if(typeof q!=="number")return H.f(q)
p=this.a
if(typeof p!=="number")return p.l()
return new V.A(o*n-s*r,s*q-p*n,p*r-o*q)},
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.A(o+n,s+r,q+p)},
J:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.J()
s=this.b
if(typeof s!=="number")return s.J()
r=this.c
if(typeof r!=="number")return r.J()
return new V.A(-q,-s,-r)},
l:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.l()
s=this.b
if(typeof s!=="number")return s.l()
r=this.c
if(typeof r!=="number")return r.l()
return new V.A(q*b,s*b,r*b)},
U:function(a,b){var s,r,q
$.D().toString
if(Math.abs(b-0)<1e-9)return V.cI()
s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
q=this.c
if(typeof q!=="number")return q.U()
return new V.A(s/b,r/b,q/b)},
ds:function(){var s=this.a
$.D().toString
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.A))return!1
s=b.a
r=q.a
$.D().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.hf.prototype={
bs:function(a){var s=V.pW(a,this.c,this.b)
return s},
gA:function(){var s=this.y
return s==null?this.y=D.L():s},
M:function(a){var s=this.y
if(s!=null)s.F(a)},
sco:function(a,b){},
scc:function(a){var s,r=this,q=r.b
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bs(s)}q=new D.B("maximumLocation",q,r.b)
q.b=!0
r.M(q)}},
sce:function(a){var s,r=this,q=r.c
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bs(s)}q=new D.B("minimumLocation",q,r.c)
q.b=!0
r.M(q)}},
sW:function(a,b){var s,r=this
b=r.bs(b)
s=r.d
$.D().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.B("location",s,b)
s.b=!0
r.M(s)}},
scd:function(a){var s,r,q=this,p=q.e
$.D().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.B("maximumVelocity",p,a)
p.b=!0
q.M(p)}},
sP:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.B("velocity",r,a)
r.b=!0
s.M(r)}},
sbZ:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.B("dampening",s,a)
s.b=!0
this.M(s)}},
ao:function(a,b){var s,r,q,p=this,o=p.f
$.D().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sW(0,p.d+s*b)
o=p.x
$.D().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sP(s)}}}
U.c6.prototype={
gA:function(){var s=this.b
return s==null?this.b=D.L():s},
aP:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c6))return!1
return J.C(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.bF.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.L():s},
M:function(a){var s=this.e
if(s!=null)s.F(a)},
a4:function(){return this.M(null)},
ew:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaB(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gA()
m=n.a;(m==null?n.a=H.e([],q):m).push(r)}}s=new D.aW()
s.b=!0
this.M(s)},
fc:function(a,b){var s,r
for(s=b.gO(b),r=this.gaB();s.w();)s.gE(s).gA().I(0,r)
s=new D.aX()
s.b=!0
this.M(s)},
aP:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a5()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a1(p,p.length),s=null;p.w();){o=p.d
if(o!=null){r=o.aP(0,b,c)
if(r!=null)s=s==null?r:r.l(0,s)}}q.f=s==null?V.dT():s
p=q.e
if(p!=null)p.a8(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bF))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.C(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cF.prototype={
gA:function(){var s=this.cy
return s==null?this.cy=D.L():s},
M:function(a){var s=this.cy
if(s!=null)s.F(a)},
a4:function(){return this.M(null)},
aW:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gd7().m(0,s.gbB())
s.a.c.gdt().m(0,s.gbD())
s.a.c.gcn().m(0,s.gbF())
return!0},
bC:function(a){var s=this
if(!J.C(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bE:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a1(a.d)
s=s.a2(s)
r=l.r
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a1(a.d).l(0,2).U(0,s.ga7())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.l()
q=l.e
if(typeof q!=="number")return H.f(q)
r.sP(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a1(q).l(0,2).U(0,s.ga7())
r=l.b
o=p.a
if(typeof o!=="number")return o.J()
n=l.e
if(typeof n!=="number")return H.f(n)
m=l.z
if(typeof m!=="number")return H.f(m)
r.sW(0,-o*n+m)
l.b.sP(0)
l.Q=a.z.a1(q).l(0,2).U(0,s.ga7())}l.a4()},
bG:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a2(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.l()
q=p.e
if(typeof q!=="number")return H.f(q)
s.sP(r*10*q)
p.a4()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a5()
if(o<n){p.ch=n
s=b.y
p.b.ao(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aG(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iS:1}
U.cG.prototype={
gA:function(){var s=this.fx
return s==null?this.fx=D.L():s},
M:function(a){var s=this.fx
if(s!=null)s.F(a)},
a4:function(){return this.M(null)},
aW:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gd7().m(0,q.gbB())
q.a.c.gdt().m(0,q.gbD())
q.a.c.gcn().m(0,q.gbF())
s=q.a.d
r=s.f
s=r==null?s.f=D.L():r
s.m(0,q.geo())
s=q.a.d
r=s.d
s=r==null?s.d=D.L():r
s.m(0,q.geq())
s=q.a.e
r=s.b
s=r==null?s.b=D.L():r
s.m(0,q.gfG())
s=q.a.e
r=s.d
s=r==null?s.d=D.L():r
s.m(0,q.gfE())
s=q.a.e
r=s.c
s=r==null?s.c=D.L():r
s.m(0,q.gfC())
return!0},
am:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.J()
s=-s}if(this.r){if(typeof r!=="number")return r.J()
r=-r}return new V.a7(s,r)},
bC:function(a){var s=this
t.c.a(a)
if(!J.C(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bE:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a1(a.d)
s=s.a2(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.am(a.y.a1(a.d).l(0,2).U(0,s.ga7()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.am(r.a1(q).l(0,2).U(0,s.ga7()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sW(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sW(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.am(a.z.a1(q).l(0,2).U(0,s.ga7()))}l.a4()},
bG:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a2(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sP(-r*10*s)
p.a4()}},
ep:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
er:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.C(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.am(r.a1(q).l(0,2).U(0,s.ga7()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sW(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sW(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.am(a.z.a1(q).l(0,2).U(0,s.ga7()))
l.a4()},
fH:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fF:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a1(a.d)
s=s.a2(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.am(a.y.a1(a.d).l(0,2).U(0,s.ga7()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.am(r.a1(q).l(0,2).U(0,s.ga7()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sW(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sW(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.am(a.z.a1(q).l(0,2).U(0,s.ga7()))}l.a4()},
fD:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a2(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sP(-r*10*s)
p.a4()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a5()
if(o<n){p.dy=n
s=b.y
p.c.ao(0,s)
p.b.ao(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aG(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.l(0,V.aG(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iS:1}
U.cH.prototype={
gA:function(){var s=this.r
return s==null?this.r=D.L():s},
M:function(a){var s=this.r
if(s!=null)s.F(a)},
aW:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.L():r
r=p.ges()
s.m(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.L():q).m(0,r)
return!0},
eu:function(a){var s,r,q,p,o=this
if(!J.C(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.l()
p=s+r*q
if(s!==p){o.d=p
s=new D.B("zoom",s,p)
s.b=!0
o.M(s)}},
aP:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aG(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iS:1}
M.dx.prototype={
aD:function(a){var s=this.y
if(s!=null)s.F(a)},
e3:function(){return this.aD(null)},
eI:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaC(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bD()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.e([],q):m).push(r)}}s=new D.aW()
s.b=!0
this.aD(s)},
eK:function(a,b){var s,r
for(s=b.gO(b),r=this.gaC();s.w();)s.gE(s).gA().I(0,r)
s=new D.aX()
s.b=!0
this.aD(s)},
gA:function(){var s=this.y
return s==null?this.y=D.L():s},
aN:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dH(d.d)
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
if(typeof q!=="number")return H.f(q)
m=C.d.aj(n*q)
n=o.b
if(typeof p!=="number")return H.f(p)
l=C.d.aj(n*p)
n=C.d.aj(o.c*q)
a.c=n
o=C.d.aj(o.d*p)
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
g=V.aG(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dG(g)
r=$.lz
if(r==null){r=V.lB()
o=V.kI()
n=$.lY
r=V.lw(r,o,n==null?$.lY=new V.A(0,0,-1):n)
$.lz=r
f=r}else f=r
s=s.b
if(s!=null){e=s.a
if(e!=null)f=e.l(0,f)}a.db.dG(f)
for(s=d.e.a,s=new J.a1(s,s.length);s.w();)s.d.ao(0,a)
for(s=d.e.a,s=new J.a1(s,s.length);s.w();)s.d.aN(a)
d.b.toString
a.cy.cg()
a.db.cg()
d.c.toString
a.dF()}}
A.dh.prototype={}
A.h8.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h7:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
h1:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a2.prototype={
gak:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a2))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.dQ.prototype={
dW:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
c4.z=c9
s=new P.U("")
r=c9.fr
if(r){s.a=c8
q=c8}else q=""
p=c9.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c9.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c9.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.p8(c9,s)
A.pa(c9,s)
A.p9(c9,s)
A.pc(c9,s)
A.pd(c9,s)
A.pb(c9,s)
A.pe(c9,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c9.ry
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
s.a=q}if(c9.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c9.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c9.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c9.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
l=q.charCodeAt(0)==0?q:q
k=A.p7(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cI(l,35633)
c4.f=c4.cI(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.t("Failed to link shader: "+H.h(j)))}c4.fw()
c4.fA()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.S(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.S(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.S(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.S(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.S(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.S(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.S(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.S(0,"colorMat"))
c4.r1=H.e([],t.hg)
q=c9.bf
if(q>0){c4.k4=c4.y.S(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.t(c6+n+c7))
p.push(r.a(h))}}if(c9.a.a)c4.r2=t.r.a(c4.y.S(0,"emissionClr"))
if(c9.b.a)c4.x1=t.r.a(c4.y.S(0,"ambientClr"))
if(c9.c.a)c4.y2=t.r.a(c4.y.S(0,"diffuseClr"))
if(c9.d.a)c4.bg=t.r.a(c4.y.S(0,"invDiffuseClr"))
r=c9.e.a
if(!r)q=!1
else q=!0
if(q){c4.da=t.n.a(c4.y.S(0,"shininess"))
if(r)c4.d9=t.r.a(c4.y.S(0,"specularClr"))}if(c9.db){c4.dc=t.Q.a(c4.y.S(0,"envSampler"))
if(c9.r.a)c4.dd=t.r.a(c4.y.S(0,"reflectClr"))
r=c9.x.a
if(!r)q=!1
else q=!0
if(q){c4.de=t.n.a(c4.y.S(0,"refraction"))
if(r)c4.df=t.r.a(c4.y.S(0,"refractClr"))}}if(c9.y.a)c4.dg=t.n.a(c4.y.S(0,"alpha"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.c_=new H.y(t.J)
c4.c0=new H.y(t.en)
for(p=t.r,o=t.n,n=t.d6,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="barLight"+H.h(e)
c=H.e([],n)
for(m=f.b,i=0;i<m;++i){b=c4.y
a=d+"s["+i+"].startPnt"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
p.a(h)
b=c4.y
a=d+"s["+i+"].endPnt"
a0=b.h(0,a)
if(a0==null)H.q(P.t(c6+a+c7))
p.a(a0)
b=c4.y
a=d+"s["+i+"].color"
a1=b.h(0,a)
if(a1==null)H.q(P.t(c6+a+c7))
p.a(a1)
if(typeof e!=="number")return e.aa()
if((e&4)!==0){b=c4.y
a=d+"s["+i+"].att0"
a2=b.h(0,a)
if(a2==null)H.q(P.t(c6+a+c7))
o.a(a2)
b=c4.y
a=d+"s["+i+"].att1"
a3=b.h(0,a)
if(a3==null)H.q(P.t(c6+a+c7))
o.a(a3)
b=c4.y
a=d+"s["+i+"].att2"
a4=b.h(0,a)
if(a4==null)H.q(P.t(c6+a+c7))
o.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cA(h,a0,a1,a7,a6,a5))}c4.c0.k(0,e,c)
m=c4.c_
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
m.k(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.c1=new H.y(t.J)
c4.c2=new H.y(t.af)
for(p=t.r,o=t.v,n=t.dv,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.h(e)
c=H.e([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.aa()
b=(e&1)!==0
if(b){a=c4.y
a8=d+"s["+i+"].objUp"
h=a.h(0,a8)
if(h==null)H.q(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].objRight"
a0=a.h(0,a8)
if(a0==null)H.q(P.t(c6+a8+c7))
p.a(a0)
a=c4.y
a8=d+"s["+i+"].objDir"
a1=a.h(0,a8)
if(a1==null)H.q(P.t(c6+a8+c7))
p.a(a1)
a9=a1
b0=a0
b1=h}else{a9=c5
b0=a9
b1=b0}a=c4.y
a8=d+"s["+i+"].viewDir"
h=a.h(0,a8)
if(h==null)H.q(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].color"
a0=a.h(0,a8)
if(a0==null)H.q(P.t(c6+a8+c7))
p.a(a0)
if(b){b=c4.y
a=d+"sTexture2D"+i
a1=b.h(0,a)
if(a1==null)H.q(P.t(c6+a+c7))
o.a(a1)
b2=a1}else b2=c5
c.push(new A.cB(b1,b0,a9,h,a0,b2))}c4.c2.k(0,e,c)
m=c4.c1
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
m.k(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.c3=new H.y(t.J)
c4.c4=new H.y(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.h(e)
c=H.e([],a)
for(a8=f.b,i=0;i<a8;++i){b3=c4.y
b4=d+"s["+i+"].point"
h=b3.h(0,b4)
if(h==null)H.q(P.t(c6+b4+c7))
p.a(h)
b3=c4.y
b4=d+"s["+i+"].viewPnt"
a0=b3.h(0,b4)
if(a0==null)H.q(P.t(c6+b4+c7))
p.a(a0)
b3=c4.y
b4=d+"s["+i+"].color"
a1=b3.h(0,b4)
if(a1==null)H.q(P.t(c6+b4+c7))
p.a(a1)
if(typeof e!=="number")return e.aa()
if((e&3)!==0){b3=c4.y
b4=d+"s["+i+"].invViewRotMat"
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
o.a(a2)
b5=a2}else b5=c5
if((e&1)!==0){b3=c4.y
b4=d+"sTextureCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
n.a(a2)
b2=a2}else b2=c5
if((e&2)!==0){b3=c4.y
b4=d+"sShadowCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
n.a(a2)
b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
m.a(a3)
b6=a2
b7=a3}else{b6=c5
b7=b6}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
b.a(a2)
b3=c4.y
b4=d+"s["+i+"].att1"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
b.a(a3)
b3=c4.y
b4=d+"s["+i+"].att2"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
b.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cD(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.c4.k(0,e,c)
a8=c4.c3
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.t(c6+b4+c7))
a8.k(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.c5=new H.y(t.J)
c4.c6=new H.y(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.v,b=t.fF,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.h(e)
c=H.e([],b)
for(a=f.b,i=0;i<a;++i){a8=c4.y
b3=d+"s["+i+"].objPnt"
h=a8.h(0,b3)
if(h==null)H.q(P.t(c6+b3+c7))
p.a(h)
a8=c4.y
b3=d+"s["+i+"].objDir"
a0=a8.h(0,b3)
if(a0==null)H.q(P.t(c6+b3+c7))
p.a(a0)
a8=c4.y
b3=d+"s["+i+"].viewPnt"
a1=a8.h(0,b3)
if(a1==null)H.q(P.t(c6+b3+c7))
p.a(a1)
a8=c4.y
b3=d+"s["+i+"].color"
a2=a8.h(0,b3)
if(a2==null)H.q(P.t(c6+b3+c7))
p.a(a2)
if(typeof e!=="number")return e.aa()
if((e&3)!==0){a8=c4.y
b3=d+"s["+i+"].objUp"
a3=a8.h(0,b3)
if(a3==null)H.q(P.t(c6+b3+c7))
p.a(a3)
a8=c4.y
b3=d+"s["+i+"].objRight"
a4=a8.h(0,b3)
if(a4==null)H.q(P.t(c6+b3+c7))
p.a(a4)
a8=c4.y
b3=d+"s["+i+"].tuScalar"
b8=a8.h(0,b3)
if(b8==null)H.q(P.t(c6+b3+c7))
o.a(b8)
a8=c4.y
b3=d+"s["+i+"].tvScalar"
b9=a8.h(0,b3)
if(b9==null)H.q(P.t(c6+b3+c7))
o.a(b9)
c0=b9
c1=b8
b0=a4
b1=a3}else{c0=c5
c1=c0
b0=c1
b1=b0}a8=(e&2)!==0
if(a8){b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
n.a(a3)
b7=a3}else b7=c5
if((e&8)!==0){b3=c4.y
b4=d+"s["+i+"].cutoff"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].coneAngle"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
o.a(a4)
c2=a4
c3=a3}else{c2=c5
c3=c2}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].att1"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
o.a(a4)
b3=c4.y
b4=d+"s["+i+"].att2"
b8=b3.h(0,b4)
if(b8==null)H.q(P.t(c6+b4+c7))
o.a(b8)
a5=b8
a6=a4
a7=a3}else{a5=c5
a6=a5
a7=a6}if((e&1)!==0){b3=c4.y
b4=d+"sTexture2D"+i
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
m.a(a3)
b2=a3}else b2=c5
if(a8){a8=c4.y
b3=d+"sShadow2D"+i
a3=a8.h(0,b3)
if(a3==null)H.q(P.t(c6+b3+c7))
m.a(a3)
b6=a3}else b6=c5
c.push(new A.cE(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.c6.k(0,e,c)
a=c4.c5
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.t(c6+b3+c7))
a.k(0,e,h)}}}},
fu:function(a,b){}}
A.dl.prototype={
i:function(a){return"barLight"+H.h(this.a)}}
A.dv.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.ec.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.eo.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.hQ.prototype={
i:function(a){return this.aZ}}
A.cA.prototype={}
A.cB.prototype={}
A.cD.prototype={}
A.cE.prototype={}
A.cv.prototype={
dZ:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cI:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.t("Error compiling shader '"+H.h(q)+"': "+H.h(s)))}return q},
fw:function(){var s,r,q,p=this,o=H.e([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dh(n,r.name,q))}p.x=new A.h8(o)},
fA:function(){var s,r,q,p=this,o=H.e([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fY(r.type,r.size,r.name,q))}p.y=new A.iP(o)},
aF:function(a,b,c){var s=this.a
if(a===1)return new A.eI(s,b,c)
else return A.kH(s,this.r,b,a,c)},
ei:function(a,b,c){var s=this.a
if(a===1)return new A.eM(s,b,c)
else return A.kH(s,this.r,b,a,c)},
ej:function(a,b,c){var s=this.a
if(a===1)return new A.eN(s,b,c)
else return A.kH(s,this.r,b,a,c)},
bc:function(a,b){return new P.fb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fY:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aF(b,c,d)
case 5121:return s.aF(b,c,d)
case 5122:return s.aF(b,c,d)
case 5123:return s.aF(b,c,d)
case 5124:return s.aF(b,c,d)
case 5125:return s.aF(b,c,d)
case 5126:return new A.eH(s.a,c,d)
case 35664:return new A.iL(s.a,c,d)
case 35665:return new A.eJ(s.a,c,d)
case 35666:return new A.eK(s.a,c,d)
case 35667:return new A.iM(s.a,c,d)
case 35668:return new A.iN(s.a,c,d)
case 35669:return new A.iO(s.a,c,d)
case 35674:return new A.iQ(s.a,c,d)
case 35675:return new A.eL(s.a,c,d)
case 35676:return new A.cC(s.a,c,d)
case 35678:return s.ei(b,c,d)
case 35680:return s.ej(b,c,d)
case 35670:throw H.c(s.bc("BOOL",c))
case 35671:throw H.c(s.bc("BOOL_VEC2",c))
case 35672:throw H.c(s.bc("BOOL_VEC3",c))
case 35673:throw H.c(s.bc("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.eG.prototype={}
A.iP.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
S:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.K()},
K:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.eI.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)}}
A.eH.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.eJ.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.eK.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.eL.prototype={
ag:function(a){var s=new Float32Array(H.bY(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.cC.prototype={
ag:function(a){var s=new Float32Array(H.bY(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.eM.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.eN.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.jD.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cb(q.b,b).cb(q.d.cb(q.c,b),c)
a.sW(0,new V.O(p.a,p.b,p.c))
a.scm(p.G())
q=1-b
s=1-c
a.sbS(new V.bP(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.jN.prototype={
$2:function(a,b){return V.h2(this.a,this.b,b)}}
F.jP.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.h2(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.f(n)
q=-q*n
s=p*n
a.sW(0,new V.O(q,s,o))
a.scm(new V.A(q,s,o).G())
a.sbS(new V.bP(1-c,2+c,-1,-1))}}
F.k_.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.A(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).G()
a.sW(0,new V.O(q.a,q.b,q.c))}}
F.kl.prototype={
$2:function(a,b){return 0}}
F.km.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.f(r)
s=a.f
r=new V.A(s.a,s.b,s.c).G().l(0,this.b+r)
a.sW(0,new V.O(r.a,r.b,r.c))}}
F.kn.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.jO.prototype={
$3:function(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=b*6.283185307179586,i=k.a,h=k.b,g=J.ld(i.$1(j),h)
h=J.ld(i.$1(j+3.141592653589793/k.c),h).p(0,g)
s=new V.A(h.a,h.b,h.c).G()
i=$.lZ
if(i==null){i=new V.A(1,0,0)
$.lZ=i
r=i}else r=i
q=s.at(!J.C(s,r)?V.m0():r).G()
r=q.at(s).G()
p=c*6.283185307179586
i=Math.cos(p)
h=k.d
o=Math.sin(p)
i=r.l(0,i*h)
h=q.l(0,o*h)
o=i.a
n=h.a
if(typeof o!=="number")return o.p()
if(typeof n!=="number")return H.f(n)
m=i.b
l=h.b
if(typeof m!=="number")return m.p()
if(typeof l!=="number")return H.f(l)
i=i.c
h=h.c
if(typeof i!=="number")return i.p()
if(typeof h!=="number")return H.f(h)
a.sW(0,g.n(0,new V.O(o-n,m-l,i-h)))}}
F.jS.prototype={
$2:function(a,b){return 0}}
F.jT.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sW(0,new V.O(q,p,this.a.a.$2(b,c)))
a.scm(new V.A(q,p,1).G())
s=1-b
r=1-c
a.sbS(new V.bP(b*c,2+s*c,4+b*r,6+s*r))}}
F.dy.prototype={
aX:function(){var s=this
if(!s.gaY()){C.b.I(s.a.a.d.b,s)
s.a.a.a0()}s.bK()
s.bL()
s.fn()},
bO:function(a){this.a=a
a.d.b.push(this)},
bP:function(a){this.b=a
a.d.c.push(this)},
fv:function(a){this.c=a
a.d.d.push(this)},
bK:function(){var s=this.a
if(s!=null){C.b.I(s.d.b,this)
this.a=null}},
bL:function(){var s=this.b
if(s!=null){C.b.I(s.d.c,this)
this.b=null}},
fn:function(){var s=this.c
if(s!=null){C.b.I(s.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
eb:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cI()
if(n!=null)q=q.n(0,n)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ds())return p
return q.G()},
ed:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.p(0,n)
q=new V.A(o.a,o.b,o.c).G()
o=r.p(0,n)
return q.at(new V.A(o.a,o.b,o.c).G()).G()},
bV:function(){var s,r=this
if(r.d!=null)return!0
s=r.eb()
if(s==null){s=r.ed()
if(s==null)return!1}r.d=s
r.a.a.a0()
return!0},
ea:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cI()
if(n!=null)q=q.n(0,n)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ds())return p
return q.G()},
ec:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.D().toString
if(Math.abs(p-0)<1e-9){j=b.p(0,e)
o=new V.A(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.J(0)}else{n=(j-s.b)/p
j=b.p(0,e).l(0,n).n(0,e).p(0,h)
o=new V.A(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.J(0)}j=l.d
if(j!=null){m=j.G()
o=m.at(o).G().at(m).G()}return o},
bT:function(){var s,r=this
if(r.e!=null)return!0
s=r.ea()
if(s==null){s=r.ec()
if(s==null)return!1}r.e=s
r.a.a.a0()
return!0},
gfT:function(a){var s=this
if(J.C(s.a,s.b))return!0
if(J.C(s.b,s.c))return!0
if(J.C(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var s,r,q=this
if(q.gaY())return a+"disposed"
s=a+C.a.af(J.a5(q.a.e),0)+", "+C.a.af(J.a5(q.b.e),0)+", "+C.a.af(J.a5(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
K:function(){return this.C("")}}
F.hw.prototype={}
F.ip.prototype={
b0:function(a,b,c){var s,r=b.a
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.dM.prototype={
aX:function(){var s=this
if(!s.gaY()){C.b.I(s.a.a.c.b,s)
s.a.a.a0()}s.bK()
s.bL()},
bO:function(a){this.a=a
a.c.b.push(this)},
bP:function(a){this.b=a
a.c.c.push(this)},
bK:function(){var s=this.a
if(s!=null){C.b.I(s.c.b,this)
this.a=null}},
bL:function(){var s=this.b
if(s!=null){C.b.I(s.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){if(this.gaY())return a+"disposed"
return a+C.a.af(J.a5(this.a.e),0)+", "+C.a.af(J.a5(this.b.e),0)},
K:function(){return this.C("")}}
F.hF.prototype={}
F.iJ.prototype={
b0:function(a,b,c){var s,r=b.a
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
return r==s.e}else{r=b.a
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
return r==s.e}else return!1}}}
F.e9.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.af(J.a5(s.e),0)},
K:function(){return this.C("")}}
F.ih.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.L():s},
bk:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.v()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){p=e[q]
f.a.m(0,p.fW())}f.a.v()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
l=n[m]
f.b.a.a.m(0,l)
m=new F.e9()
if(l.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.F(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.n()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.c.a
n.a.m(0,j)
n.a.m(0,i)
F.nq(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.n()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
g=n[m]
m=f.d.a
m.a.m(0,j)
m.a.m(0,i)
m.a.m(0,g)
F.dz(j,i,g)}e=f.e
if(e!=null)e.a8(0)},
a6:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.a6()||!1
if(!r.a.a6())s=!1
q=r.e
if(q!=null)q.a8(0)
return s},
fO:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.e
if(a!=null)++a.d
for(s=b.a.c.length-1,a=a0.b,r=a0.a,q=r.length,p=a0.c,o=a-1;s>=0;--s){n=b.a.c
if(s>=n.length)return H.b(n,s)
m=n[s]
n=m.y
l=C.d.b_(n.a*o)
n=n.b
if(typeof p!=="number")return p.p()
k=C.d.b_(n*(p-1))
l=l>=0?C.c.al(l,a):a+C.c.al(l,a)
j=(l+(k>=0?C.c.al(k,p):p+C.c.al(k,p))*a)*4
if(j<0||j>=q)return H.b(r,j)
n=r[j]
i=j+1
if(i>=q)return H.b(r,i)
i=r[i]
h=j+2
if(h>=q)return H.b(r,h)
h=r[h]
g=j+3
if(g>=q)return H.b(r,g)
n/=255
i/=255
h/=255
g=r[g]/255
if(n<0)n=0
else if(n>1)n=1
if(i<0)i=0
else if(i>1)i=1
if(h<0)h=0
else if(h>1)h=1
if(!(g<0))if(g>1)g=1
f=(n+i+h)*a1/3
n=m.f
i=m.r
h=i.a
if(typeof h!=="number")return h.l()
g=i.b
if(typeof g!=="number")return g.l()
i=i.c
if(typeof i!=="number")return i.l()
e=n.a
if(typeof e!=="number")return e.n()
d=n.b
if(typeof d!=="number")return d.n()
c=n.c
if(typeof c!=="number")return c.n()
i=new V.O(e+h*f,d+g*f,c+i*f)
if(!n.q(0,i)){m.f=i
n=m.a
if(n!=null){n=n.e
if(n!=null)n.F(null)}}}a=b.e
if(a!=null)a.a8(0)},
hR:function(a){var s,r,q,p,o=this.e
if(o!=null)++o.d
for(o=this.a,s=o.c.length-1,r=a.a;s>=0;--s){q=o.c
if(s>=q.length)return H.b(q,s)
p=q[s]
if((r&$.aT().a)===0)p.f=null
if((r&$.aA().a)===0)p.r=null
if((r&$.aS().a)===0)p.x=null
if((r&$.bb().a)===0)p.y=null
if((r&$.bc().a)===0)p.z=null
if((r&$.la().a)===0)p.Q=null
if((r&$.by().a)===0)p.ch=0
if((r&$.aR().a)===0)p.cx=null}o=this.e
if(o!=null)o.a8(0)},
hQ:function(a){var s,r,q,p=this.e
if(p!=null)++p.d
for(p=this.d,s=p.b.length-1;s>=0;--s){r=p.b
if(s>=r.length)return H.b(r,s)
q=r[s]
q.d=null}p=this.e
if(p!=null)p.a8(0)},
hl:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.e(m.slice(0),H.mk(m).V("u<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghb(s)
C.b.ci(s,0)
if(r!=null){q=H.e([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(o!=null&&a.b0(0,r,o)){q.push(o)
C.b.ci(s,p)}}if(q.length>1)b.bk(q)}}n.a.v()
n.c.bm()
n.d.bm()
n.b.hE()
n.c.cj(new F.iJ())
n.d.cj(new F.ip())
m=n.e
if(m!=null)m.a8(0)},
bd:function(){this.hl(new F.jb(),new F.i5())},
fR:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aT().a)!==0?1:0
if((s&$.aA().a)!==0)++r
if((s&$.aS().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.db().a)!==0)++r
if((s&$.dc().a)!==0)++r
if((s&$.by().a)!==0)++r
if((s&$.aR().a)!==0)++r
q=a6.gcs(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.e(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.e(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.fP(k)
i=j.gcs(j)
if(k>=m)return H.b(n,k)
n[k]=new Z.dm(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.b(g,h)
f=g[h].hj(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.b(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.bY(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dn(new Z.eW(a3,b),n,a6)
a.b=H.e([],t.aZ)
if(a2.b.b.length!==0){a0=H.e([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)}a1=Z.kK(s,34963,a0)
a.b.push(new Z.bG(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.e([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)}a1=Z.kK(s,34963,a0)
a.b.push(new Z.bG(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.e([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].c
m.a.a.v()
a0.push(m.e)}a1=Z.kK(s,34963,a0)
a.b.push(new Z.bG(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.e([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.C(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.C(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.C(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.C(r))}return C.b.t(q,"\n")},
a0:function(){var s=this.e
if(s!=null)s.F(null)}}
F.ii.prototype={
fN:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.e([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.b(c,q)
k=c[q];++q
if(q>=l)return H.b(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.b(c,i)
h=c[i]
if(r<0||r>=l)return H.b(c,r)
g=c[r]
l=s.a
if(n){l.m(0,k)
s.a.m(0,j)
s.a.m(0,h)
f.push(F.dz(k,j,h))
s.a.m(0,k)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.dz(k,h,g))}else{l.m(0,j)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.dz(j,h,g))
s.a.m(0,j)
s.a.m(0,g)
s.a.m(0,k)
f.push(F.dz(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
cj:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b0(0,n,l)){n.aX()
break}}}}},
bm:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.gfT(q)
if(r)q.aX()}},
a6:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].bV())q=!1
return q},
bU:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].bT())q=!1
return q},
i:function(a){return this.K()},
C:function(a){var s,r,q,p=H.e([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(a))
return C.b.t(p,"\n")},
K:function(){return this.C("")}}
F.ij.prototype={
gj:function(a){return this.b.length},
cj:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b0(0,n,l)){n.aX()
break}}}}},
bm:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=J.C(q.a,q.b)
if(r)q.aX()}},
i:function(a){return this.K()},
C:function(a){var s,r,q=H.e([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].C(a+(""+s+". ")))}return C.b.t(q,"\n")},
K:function(){return this.C("")}}
F.ik.prototype={
gj:function(a){return this.b.length},
hE:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.I(q.b.b,r)
q=r.a.a.e
if(q!=null)q.F(null)
q=r.a
if(q!=null){C.b.I(q.b.b,r)
r.a=null}}}},
i:function(a){return this.K()},
C:function(a){var s,r,q,p=H.e([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(a))
return C.b.t(p,"\n")},
K:function(){return this.C("")}}
F.eU.prototype={
bY:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kJ(s.cx,p,m,r,q,o,n,a,l)},
fW:function(){return this.bY(null)},
sW:function(a,b){var s
if(!J.C(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a0()}},
scm:function(a){var s
if(!J.C(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a0()}},
sbS:function(a){var s
if(!J.C(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a0()}},
hj:function(a){var s,r,q=this
if(a.q(0,$.aT())){s=q.f
r=t.m
if(s==null)return H.e([0,0,0],r)
else return H.e([s.a,s.b,s.c],r)}else if(a.q(0,$.aA())){s=q.r
r=t.m
if(s==null)return H.e([0,1,0],r)
else return H.e([s.a,s.b,s.c],r)}else if(a.q(0,$.aS())){s=q.x
r=t.m
if(s==null)return H.e([0,0,1],r)
else return H.e([s.a,s.b,s.c],r)}else if(a.q(0,$.bb())){s=q.y
r=t.m
if(s==null)return H.e([0,0],r)
else return H.e([s.a,s.b],r)}else if(a.q(0,$.bc())){s=q.z
r=t.m
if(s==null)return H.e([0,0,0],r)
else return H.e([s.a,s.b,s.c],r)}else if(a.q(0,$.db())){s=q.Q
r=t.m
if(s==null)return H.e([1,1,1],r)
else return H.e([s.a,s.b,s.c],r)}else if(a.q(0,$.dc())){s=q.Q
r=t.m
if(s==null)return H.e([1,1,1,1],r)
else return H.e([s.a,s.b,s.c,s.d],r)}else if(a.q(0,$.by()))return H.e([q.ch],t.m)
else if(a.q(0,$.aR())){s=q.cx
r=t.m
if(s==null)return H.e([-1,-1,-1,-1],r)
else return H.e([s.a,s.b,s.c,s.d],r)}else return H.e([],t.m)},
bV:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cI()
r.d.B(0,new F.jg(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.a0()
q=r.a.e
if(q!=null)q.a8(0)}return!0},
bT:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cI()
r.d.B(0,new F.jf(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.a0()
q=r.a.e
if(q!=null)q.a8(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var s,r,q=this,p="-",o=H.e([],t.i)
o.push(C.a.af(J.a5(q.e),0))
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
o.push(V.H(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.t(o,", ")
return a+"{"+r+"}"},
K:function(){return this.C("")}}
F.jg.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.n(0,r)}}}
F.jf.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.n(0,r)}}}
F.j6.prototype={
v:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
s[p].e=q;++q}this.b=!1}},
m:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a0()
return!0},
gj:function(a){return this.c.length},
a6:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].bV()
return!0},
bU:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].bT()
return!0},
fS:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.C(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}return!0},
i:function(a){return this.K()},
C:function(a){var s,r,q,p
this.v()
s=H.e([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].C(a))
return C.b.t(s,"\n")},
K:function(){return this.C("")}}
F.j7.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.b(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.b(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.b(r,b)
return r[b]},
B:function(a,b){var s=this
C.b.B(s.b,b)
C.b.B(s.c,new F.j8(s,b))
C.b.B(s.d,new F.j9(s,b))},
i:function(a){return this.K()},
K:function(){var s,r,q,p=H.e([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(""))
return C.b.t(p,"\n")}}
F.j8.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.j9.prototype={
$1:function(a){var s=this.a
if(!J.C(a.a,s)&&!J.C(a.b,s))this.b.$1(a)}}
F.ja.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.b(r,s)
return r[s]}else{if(b<0)return H.b(r,b)
return r[b]}},
i:function(a){return this.K()},
K:function(){var s,r,q,p=H.e([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(""))
return C.b.t(p,"\n")}}
F.jc.prototype={}
F.jb.prototype={
b0:function(a,b,c){return J.C(b.f,c.f)}}
F.jd.prototype={}
F.i5.prototype={
bk:function(a){var s,r,q,p,o,n,m,l,k,j,i=V.cI()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null){p=i.a
o=q.a
if(typeof p!=="number")return p.n()
if(typeof o!=="number")return H.f(o)
n=i.b
m=q.b
if(typeof n!=="number")return n.n()
if(typeof m!=="number")return H.f(m)
l=i.c
q=q.c
if(typeof l!=="number")return l.n()
if(typeof q!=="number")return H.f(q)
i=new V.A(p+o,n+m,l+q)}}i=i.G()
for(s=a.length,q=i==null,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){k=a[r]
j=q?null:i.G()
if(!J.C(k.r,j)){k.r=j
p=k.a
if(p!=null){p=p.e
if(p!=null)p.F(null)}}}return null}}
F.je.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var s,r,q,p=H.e([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].C(""))
return C.b.t(p,"\n")}}
O.dP.prototype={
gA:function(){var s=this.fr
return s==null?this.fr=D.L():s},
ac:function(a){var s=this.fr
if(s!=null)s.F(a)},
eG:function(){return this.ac(null)},
cQ:function(a){this.a=null
this.ac(a)},
fs:function(){return this.cQ(null)},
eA:function(a,b){var s=new D.aW()
s.b=!0
this.ac(s)},
eC:function(a,b){var s=new D.aX()
s.b=!0
this.ac(s)},
cG:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.y(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gan()
n=d.h(0,p.gan())
d.k(0,o,n==null?1:n)}m=H.e([],t.am)
d.B(0,new O.hU(f,m))
C.b.aR(m,new O.hV())
l=new H.y(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=H.e([],t.M)
l.B(0,new O.hW(f,k))
C.b.aR(k,new O.hX())
j=new H.y(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gan()
n=j.h(0,p.gan())
j.k(0,o,n==null?1:n)}i=H.e([],t.d1)
j.B(0,new O.hY(f,i))
C.b.aR(i,new O.hZ())
h=new H.y(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.r)(e),++q){p=e[q]
r=p.gan()
o=h.h(0,p.gan())
h.k(0,r,o==null?1:o)}g=H.e([],t.cz)
h.B(0,new O.i_(f,g))
C.b.aR(g,new O.i0())
e=C.c.Y(f.e.a.length+3,4)
f.dy.toString
return A.nw(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
e9:function(a,b){},
ao:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a1(s,s.length);s.w();){r=s.d
r.toString
q=$.j5
if(q==null)q=$.j5=new V.A(0,0,1)
r.a=q
p=$.j4
r.d=p==null?$.j4=new V.A(0,1,0):p
p=$.j3
r.e=p==null?$.j3=new V.A(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bo(q).G()
r.d=o.bo(r.d).G()
r.e=o.bo(r.e).G()}}}},
hG:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cG()
s=b6.fr.h(0,b5.aZ)
if(s==null){s=A.nv(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.t("May not cache a shader with no name."))
if(b6.fr.bW(0,r))H.q(P.t('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.k(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bg
b5=b7.e
if(!(b5 instanceof Z.dn))b5=b7.e=null
if(b5==null||!b5.d.q(0,p)){b5=q.k4
if(b5)b7.d.a6()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bU()
n.a.bU()
n=n.e
if(n!=null)n.a8(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.fS()
m=m.e
if(m!=null)m.a8(0)}k=b7.d.fR(new Z.jh(b6.a),p)
k.aL($.aT()).e=b4.a.Q.c
if(b5)k.aL($.aA()).e=b4.a.cx.c
if(o)k.aL($.aS()).e=b4.a.ch.c
if(q.r2)k.aL($.bb()).e=b4.a.cy.c
if(n)k.aL($.bc()).e=b4.a.db.c
if(q.ry)k.aL($.aR()).e=b4.a.dx.c
b7.e=k}j=H.e([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.h7()
if(q.fr){b5=b4.a
n=b6.dx
n=n.ga_(n)
b5=b5.dy
b5.toString
b5.ag(n.a9(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.ga_(n)
m=b6.dx
m=b6.cx=n.l(0,m.ga_(m))
n=m}b5=b5.fr
b5.toString
b5.ag(n.a9(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.ghD()
m=b6.dx
m=b6.ch=n.l(0,m.ga_(m))
n=m}b5=b5.fy
b5.toString
b5.ag(n.a9(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.ga_(n)
b5=b5.fx
b5.toString
b5.ag(n.a9(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ag(C.j.a9(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ag(C.j.a9(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ag(C.j.a9(n,!0))}if(q.bf>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.b(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.b(b5,h)
b5=b5[h]
g=new Float32Array(H.bY(n.a9(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}if(q.a.a){b5=b4.a
n=b4.f.f
b5=b5.r2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.k1){if(q.b.a){b5=b4.a
n=b4.r.f
b5=b5.x1
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.c.a){b5=b4.a
n=b4.x.f
b5=b5.y2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.d.a){b5=b4.a
n=b4.y.f
b5=b5.bg
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.e.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.z.ch
n=n.da
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.z.f
b5=b5.d9
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.z
if(b5.length>0){f=new H.y(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gan()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
a=J.c4(b4.a.c0.h(0,c),b)
l=d.ghV()
a0=$.aI
l=l.b7(a0==null?$.aI=new V.O(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gi_()
a0=$.aI
l=l.b7(a0==null?$.aI=new V.O(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaJ(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gd8()){l=d.gd_()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gd0()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gd1()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.c_.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a2=new H.y(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.k(0,0,b+1)
a=J.c4(b4.a.c2.h(0,0),b)
l=a1.bo(d.a).G()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.c1.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a5=new H.y(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gan()
b=a5.h(0,c)
if(b==null)b=0
a5.k(0,c,b+1)
a=J.c4(b4.a.c4.h(0,c),b)
a6=a1.l(0,d.ga_(d))
l=d.ga_(d)
a0=$.aI
l=l.b7(a0==null?$.aI=new V.O(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aI
l=a6.b7(l==null?$.aI=new V.O(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaJ(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=a6.dq(0)
a0=l.a
a3=l.b
a4=l.c
a7=l.e
a8=l.f
a9=l.r
b0=l.y
b1=l.z
l=l.Q
b2=a.d
b2.toString
g=new Float32Array(H.bY(new V.dS(a0,a3,a4,a7,a8,a9,b0,b1,l).a9(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gay()
l=d.gay()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gay()
a0=l.gax(l)
if(a0){a0=a.f
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}d.gaQ()
l=d.gdR()
a0=a.x
a0.toString
a3=l.gh3(l)
a4=l.gh4(l)
a7=l.gh5()
l=l.gh2()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaQ()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gaQ()
a0=l.gax(l)
if(a0){a0=a.r
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}if(d.gd8()){l=d.gd_()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gd0()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gd1()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.c3.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.ga_(n)
b3=new H.y(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gan()
b=b3.h(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.c4(b4.a.c6.h(0,c),b)
l=d.ghC(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghY(d).G()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.b7(d.ghC(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaJ(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=d.gcn()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcl(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gih()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.gii()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gay()
l=d.gay()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gay()
a0=l.gax(l)
if(a0){a0=a.dx
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}d.gaQ()
l=d.gdR()
a0=a.z
a0.toString
a3=l.gh3(l)
a4=l.gh4(l)
a7=l.gh5()
l=l.gh2()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaQ()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gaQ()
a0=l.gax(l)
if(a0){a0=a.dy
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}if(d.ghZ()){l=d.ghX()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.ghW()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gd8()){l=d.gd_()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gd0()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gd1()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.c5.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.ga_(n).dq(0)}b5=b5.id
b5.toString
b5.ag(n.a9(0,!0))}if(q.db){b4.e9(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fu(b5.dc,n)
if(q.r.a){b5=b4.a
n=b4.cx.f
b5=b5.dd
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.x.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.cy.ch
n=n.de
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.cy.f
b5=b5.df
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}}b5=q.y.a
n=!b5
if(n)m=!1
else m=!0
if(m){if(b5){b5=b4.a
m=b4.db.f
b5=b5.dg
b5.a.uniform1f(b5.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].be(b6)
b5=b7.e
b5.be(b6)
b5.aN(b6)
b5.dM(b6)
if(n)b5=!1
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h)j[h].dM(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.h1()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cG().aZ}}
O.hU.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.dl(a,C.c.Y(b+3,4)*4))}}
O.hV.prototype={
$2:function(a,b){return J.dd(a.a,b.a)}}
O.hW.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.dv(a,C.c.Y(b+3,4)*4))}}
O.hX.prototype={
$2:function(a,b){return J.dd(a.a,b.a)}}
O.hY.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.ec(a,C.c.Y(b+3,4)*4))}}
O.hZ.prototype={
$2:function(a,b){return J.dd(a.a,b.a)}}
O.i_.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.eo(a,C.c.Y(b+3,4)*4))}}
O.i0.prototype={
$2:function(a,b){return J.dd(a.a,b.a)}}
O.hO.prototype={
ar:function(){var s,r=this
r.cu()
s=r.f
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.B(r.b,s,1)
s.b=!0
r.a.ac(s)}}}
O.dR.prototype={
ar:function(){},
cT:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ar()
s=q.a
s.a=null
s.ac(null)}}}
O.hP.prototype={}
O.aF.prototype={
cS:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.B(q.b+".color",s,a)
r.b=!0
q.a.ac(r)}},
ar:function(){this.cu()
this.cS(new V.Y(1,1,1))},
saJ:function(a,b){this.cT(new A.a2(!0,!1,!1))
this.cS(b)}}
O.hR.prototype={}
O.hS.prototype={
ar:function(){var s,r=this
r.cv()
s=r.ch
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.B(r.b+".refraction",s,1)
s.b=!0
r.a.ac(s)}}}
O.hT.prototype={
cU:function(a){var s=this,r=s.ch
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.B(s.b+".shininess",r,a)
r.b=!0
s.a.ac(r)}},
ar:function(){this.cv()
this.cU(100)}}
O.ew.prototype={}
T.ez.prototype={}
T.iu.prototype={}
T.iy.prototype={}
T.iz.prototype={
hk:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.lp(a)
r=new T.iy()
r.a=0
r.b=o
r.d=r.c=!1
r.x=r.r=0
W.V(s,"load",new T.iA(this,r,s,!1,o,!1,!1),!1)
return r},
ft:function(a,b,c){var s,r,q,p
b=V.l7(b)
s=V.l7(a.width)
r=V.l7(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.ku()
q.width=s
q.height=r
p=C.i.dP(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.py(p.getImageData(0,0,q.width,q.height))}}}
T.iA.prototype={
$1:function(a){var s,r,q,p=this,o=3553,n=p.c
n.width
n.height
s=p.a
r=s.ft(n,s.b,p.d)
q=p.b
q.r=n.width
q.x=n.height
n=s.a
n.bindTexture(o,p.e)
n.pixelStorei(37440,p.f?1:0)
C.W.hM(n,o,0,6408,6408,5121,r)
if(p.r)n.generateMipmap(o)
n.bindTexture(o,null)
if(!q.d){q.d=!0
n=q.y
if(n!=null)n.h6()}++s.e}}
T.iB.prototype={
en:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.c
if(typeof d!=="number")return d.cw()
s=C.c.Y(d,2)
r=this.b
q=this.a
p=q.length
o=r*4
for(;s>=0;--s){n=o*s
m=o*(d-1-s)
for(l=0;l<r;++l){k=4*l
j=n+k
i=m+k
for(h=0;h<4;++h){g=j+h
f=i+h
if(g<0||g>=p)return H.b(q,g)
e=q[g]
if(f<0||f>=p)return H.b(q,f)
q[g]=q[f]
q[f]=e}}}}}
X.kt.prototype={}
X.hA.prototype={
gA:function(){var s=this.x
return s==null?this.x=D.L():s}}
X.e6.prototype={
gA:function(){var s=this.f
return s==null?this.f=D.L():s},
aE:function(a){var s=this.f
if(s!=null)s.F(a)},
e6:function(){return this.aE(null)},
sb1:function(a){var s,r,q=this
if(!J.C(q.b,a)){s=q.b
if(s!=null)s.gA().I(0,q.gcC())
r=q.b
q.b=a
if(a!=null)a.gA().m(0,q.gcC())
s=new D.B("mover",r,q.b)
s.b=!0
q.aE(s)}}}
X.is.prototype={}
V.kk.prototype={
$1:function(a){var s=C.d.dK(this.a.ghf(),2)
if(s!=="0.00")P.l8(s+" fps")}}
V.i8.prototype={
bR:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.iU().gb5().h(0,H.h(s))
if(r==null)if(d){c.$0()
k.aV(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.bz(k.c).m(0,o)
m=W.nk("radio")
m.checked=q
m.name=s
W.V(m,"change",new V.i9(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.bz(k.c).m(0,p.createElement("br"))},
Z:function(a,b,c){return this.bR(a,b,c,!1)},
aV:function(a){var s,r,q=P.iU(),p=t.X,o=P.lu(q.gb5(),p,p)
o.k(0,this.a,a)
s=q.ck(0,o)
p=window.history
r=s.gbb()
p.toString
p.replaceState(new P.fG([],[]).b8(""),"",r)}}
V.i9.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.aV(s.d)}}}
V.il.prototype={
e_:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.V(o,"scroll",new V.io(m),!1)},
cZ:function(a){var s,r,q,p,o,n,m,l
this.fz()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hi(a)
q.toString
p=new H.N(p)
p=new P.bW(q.dL(new H.bI(p,p.gj(p))).a())
for(;p.w();){q=p.gE(p)
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
if(H.mE(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.b(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kW(C.R,q,C.e,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.h(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
fL:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
for(p=0;p<3;++p){o=l.createElement("div")
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
fz:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=new L.iE()
s.a=new H.y(t.cn)
s.b=new H.y(t.w)
s.c=P.lv(t.X)
s.d=s.L(0,o)
r=s.L(0,o).t(0,n)
q=K.a0(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.L(0,n).t(0,n)
q=new K.b_()
p=t.L
q.a=H.e([],p)
r.a.push(q)
r=K.a0(new H.N("*"))
q.a.push(r)
r=s.L(0,n).t(0,"BoldEnd")
q=K.a0(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.L(0,o).t(0,m)
q=K.a0(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.L(0,m).t(0,m)
q=new K.b_()
q.a=H.e([],p)
r.a.push(q)
r=K.a0(new H.N("_"))
q.a.push(r)
r=s.L(0,m).t(0,l)
q=K.a0(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.L(0,o).t(0,k)
q=K.a0(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.L(0,k).t(0,k)
q=new K.b_()
q.a=H.e([],p)
r.a.push(q)
r=K.a0(new H.N("`"))
q.a.push(r)
r=s.L(0,k).t(0,"CodeEnd")
q=K.a0(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.L(0,o).t(0,j)
q=K.a0(new H.N("["))
r.a.push(q)
r.c=!0
r=s.L(0,j).t(0,i)
q=K.a0(new H.N("|"))
r.a.push(q)
q=s.L(0,j).t(0,h)
r=K.a0(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.L(0,j).t(0,j)
r=new K.b_()
r.a=H.e([],p)
q.a.push(r)
q=K.a0(new H.N("|]"))
r.a.push(q)
q=s.L(0,i).t(0,h)
r=K.a0(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.L(0,i).t(0,i)
r=new K.b_()
r.a=H.e([],p)
q.a.push(r)
q=K.a0(new H.N("|]"))
r.a.push(q)
s.L(0,o).t(0,g).a.push(new K.h6())
q=s.L(0,g).t(0,g)
r=new K.b_()
r.a=H.e([],p)
q.a.push(r)
q=K.a0(new H.N("*_`["))
r.a.push(q)
q=s.L(0,"BoldEnd")
q.d=q.a.b6(n)
q=s.L(0,l)
q.d=q.a.b6(m)
q=s.L(0,"CodeEnd")
q.d=q.a.b6(k)
q=s.L(0,h)
q.d=q.a.b6("Link")
q=s.L(0,g)
q.d=q.a.b6(g)
this.b=s}}
V.io.prototype={
$1:function(a){P.lQ(C.n,new V.im(this.a))}}
V.im.prototype={
$0:function(){var s=C.d.aj(document.documentElement.scrollTop),r=this.a.style,q=H.h(-0.01*s)+"px"
r.top=q}}
V.iv.prototype={
Z:function(a,b,c){var s,r,q,p,o=this,n=W.lp(null)
n.src=b
n.width=64
n.height=64
s=n.style
s.border="solid 2px white"
s=J.bz(o.c)
r=s.gj(s)
W.V(n,"click",new V.ix(o,n,b,r),!1)
J.bz(o.c).m(0,n)
J.bz(o.c).m(0,document.createElement("br"))
q=P.iU().gb5().h(0,H.h(o.a))
if(q==null){o.aV(r)
p=c}else p=P.h1(q,null)==r
if(p)n.click()},
m:function(a,b){return this.Z(a,b,!1)},
aV:function(a){var s,r,q=P.iU(),p=t.X,o=P.lu(q.gb5(),p,p)
o.k(0,this.a,H.h(a))
s=q.ck(0,o)
p=window.history
r=s.gbb()
p.toString
p.replaceState(new P.fG([],[]).b8(""),"",r)}}
V.ix.prototype={
$1:function(a){var s=this,r=s.a,q=J.bz(r.c)
q.B(q,new V.iw())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.aV(s.d)}}
V.iw.prototype={
$1:function(a){var s
if(t.eN.b(a)){s=a.style
s.border="solid 2px white"}}}
K.k1.prototype={
$0:function(){var s,r,q,p=this.a
if(p.a!=null&&p.b.length!==0){s=this.b
r=s.f.hk(p.b)
q=r.y
if(q==null)q=r.y=D.L()
q.m(0,new K.k0(p,s,r,this.c))}}}
K.k0.prototype={
$1:function(a){var s,r,q,p,o=this,n=o.c,m=o.b.f.a,l=n.r,k=n.x
if(typeof k!=="number")return k.p()
s=k-k-0
m.bindFramebuffer(36160,m.createFramebuffer())
m.readBuffer(36064)
m.framebufferTexture2D(36160,36064,3553,n.b,0)
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.f(k)
r=new Uint8Array(l*k*4)
m.readPixels(0,s,l,k,6408,5121,r)
m.bindFramebuffer(36160,null)
q=new T.iB(r,l,k)
q.en()
n=o.a
m=n.a
p=F.kF()
p.bk(m)
p.a6()
p.fO(q,n.c)
n=$.aA()
n.toString
p.hR(new Z.b3($.l9().a&~n.a))
p.hQ(!1)
p.a6()
o.d.scr(0,p)}}
K.k2.prototype={
$1:function(a){this.a.b=a
this.b.$0()}}
K.k3.prototype={
$1:function(a){this.a.a=a
this.b.$0()}}
K.kb.prototype={
$0:function(){this.a.$1(F.mu(50,null,50))}}
K.kc.prototype={
$0:function(){this.a.$1(F.pz(!1,!1,80,80))}}
K.kd.prototype={
$0:function(){this.a.$1(F.pM(80,80))}}
K.ke.prototype={
$0:function(){this.a.$1(F.pR(50,50))}}
K.kf.prototype={
$0:function(){this.a.$1(F.pV(50,50))}}
K.kg.prototype={
$0:function(){this.a.$1(F.l4(50,50))}}
K.kh.prototype={
$0:function(){this.a.$1(F.l4(100,100))}}
K.ki.prototype={
$0:function(){this.a.$1(F.l4(150,150))}}
K.k4.prototype={
$1:function(a){this.a.c=a
this.b.$0()}}
K.k5.prototype={
$0:function(){this.a.$1(0.1)}}
K.k6.prototype={
$0:function(){this.a.$1(0.2)}}
K.k7.prototype={
$0:function(){this.a.$1(0.4)}}
K.k8.prototype={
$0:function(){this.a.$1(0.6)}}
K.k9.prototype={
$0:function(){this.a.$1(0.8)}}
K.ka.prototype={
$0:function(){this.a.$1(1)}};(function aliases(){var s=J.a.prototype
s.dU=s.i
s=J.aY.prototype
s.dV=s.i
s=K.dD.prototype
s.dT=s.aM
s.ct=s.i
s=O.dR.prototype
s.cu=s.ar
s=O.aF.prototype
s.cv=s.ar})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"oM","no",20)
r(P,"pr","nZ",7)
r(P,"ps","o_",7)
r(P,"pt","o0",7)
q(P,"mt","pm",8)
r(W,"r2","hp",21)
var k
p(k=E.bk.prototype,"gdA",0,0,null,["$1","$0"],["dB","ht"],0,0)
p(k,"gdC",0,0,null,["$1","$0"],["dD","hu"],0,0)
p(k,"gdw",0,0,null,["$1","$0"],["dz","hs"],0,0)
p(k,"gdu",0,0,null,["$1","$0"],["dv","hp"],0,0)
o(k,"ghn","ho",4)
o(k,"ghq","hr",4)
p(k=E.eA.prototype,"gcz",0,0,null,["$1","$0"],["cB","cA"],0,0)
n(k,"ghI","dI",8)
m(k=X.eT.prototype,"geR","eS",5)
m(k,"geD","eE",5)
m(k,"geL","eM",2)
m(k,"geV","eW",9)
m(k,"geT","eU",9)
m(k,"geZ","f_",2)
m(k,"gf2","f3",2)
m(k,"geP","eQ",2)
m(k,"gf0","f1",2)
m(k,"geN","eO",2)
m(k,"gf4","f5",18)
m(k,"gf6","f7",5)
m(k,"gfj","fk",6)
m(k,"gff","fg",6)
m(k,"gfh","fi",6)
p(D.bi.prototype,"ge1",0,0,null,["$1","$0"],["ap","e2"],0,0)
p(k=D.cj.prototype,"gcO",0,0,null,["$1","$0"],["cP","eX"],0,0)
m(k,"gf9","fa",19)
o(k,"gex","ey",10)
o(k,"gfd","fe",10)
l(V.a7.prototype,"gj","ca",11)
l(V.A.prototype,"gj","ca",11)
p(k=U.bF.prototype,"gaB",0,0,null,["$1","$0"],["M","a4"],0,0)
o(k,"gev","ew",12)
o(k,"gfb","fc",12)
p(k=U.cF.prototype,"gaB",0,0,null,["$1","$0"],["M","a4"],0,0)
m(k,"gbB","bC",1)
m(k,"gbD","bE",1)
m(k,"gbF","bG",1)
p(k=U.cG.prototype,"gaB",0,0,null,["$1","$0"],["M","a4"],0,0)
m(k,"gbB","bC",1)
m(k,"gbD","bE",1)
m(k,"gbF","bG",1)
m(k,"geo","ep",1)
m(k,"geq","er",1)
m(k,"gfG","fH",1)
m(k,"gfE","fF",1)
m(k,"gfC","fD",1)
m(U.cH.prototype,"ges","eu",1)
p(k=M.dx.prototype,"gaC",0,0,null,["$1","$0"],["aD","e3"],0,0)
o(k,"geH","eI",4)
o(k,"geJ","eK",4)
p(k=O.dP.prototype,"geF",0,0,null,["$1","$0"],["ac","eG"],0,0)
p(k,"gfq",0,0,null,["$1","$0"],["cQ","fs"],0,0)
o(k,"gez","eA",13)
o(k,"geB","eC",13)
p(X.e6.prototype,"gcC",0,0,null,["$1","$0"],["aE","e6"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.K,null)
q(P.K,[H.kB,J.a,J.a1,P.I,P.cN,P.j,H.bI,P.dF,H.cd,H.eQ,H.c7,H.iH,H.i6,H.fC,H.bC,P.as,H.hG,H.dN,H.dH,H.ak,H.fe,P.cZ,P.bV,P.bW,P.eY,P.cx,P.et,P.cy,P.jC,P.cT,P.jp,P.cM,P.i,P.fQ,P.co,P.dq,P.jB,P.jA,P.aO,P.ab,P.P,P.bj,P.e5,P.cw,P.fb,P.hz,P.o,P.E,P.aj,P.z,P.U,P.bv,P.iS,P.fw,W.hh,W.kx,W.kL,W.J,W.ce,P.jt,P.d0,P.fu,P.b2,K.h6,K.dD,K.hN,K.ig,L.eq,L.eB,L.eC,L.iE,O.aa,O.cp,E.hd,E.bk,E.bB,E.bO,E.f8,E.ia,E.eA,Z.eW,Z.jh,Z.dn,Z.bG,Z.b3,D.he,D.bD,D.Q,X.dp,X.dJ,X.hE,X.hL,X.ai,X.i4,X.iF,X.eT,D.dk,D.bi,D.R,D.ea,D.en,V.Y,V.bg,V.hs,V.dS,V.aZ,V.av,V.O,V.bP,V.ef,V.a7,V.A,U.cF,U.cG,U.cH,M.dx,A.dh,A.h8,A.a2,A.dl,A.dv,A.ec,A.eo,A.hQ,A.cA,A.cB,A.cD,A.cE,A.eG,A.iP,F.dy,F.hw,F.dM,F.hF,F.e9,F.ih,F.ii,F.ij,F.ik,F.eU,F.j6,F.j7,F.ja,F.jc,F.jd,F.je,O.ew,O.dR,O.hR,T.iz,T.iB,X.kt,X.is,X.e6,V.i8,V.il,V.iv])
q(J.a,[J.dG,J.ci,J.aY,J.u,J.bo,J.aD,H.cq,H.T,W.d,W.h5,W.be,W.aC,W.F,W.f2,W.ah,W.hk,W.hl,W.f4,W.cb,W.f6,W.hm,W.k,W.fc,W.aq,W.hB,W.fg,W.bm,W.hK,W.i1,W.fk,W.fl,W.at,W.fm,W.fo,W.au,W.fs,W.fv,W.aw,W.fx,W.ax,W.fD,W.am,W.fI,W.iD,W.ay,W.fK,W.iG,W.iY,W.fR,W.fT,W.fV,W.fX,W.fZ,P.aE,P.fi,P.aH,P.fq,P.i7,P.fE,P.aK,P.fM,P.h9,P.eZ,P.eg,P.fA])
q(J.aY,[J.e7,J.bu,J.ar])
r(J.hC,J.u)
q(J.bo,[J.ch,J.cg])
q(P.I,[H.dK,H.e1,H.dI,H.eP,H.ei,H.f9,P.dg,P.e2,P.ag,P.eR,P.eO,P.er,P.dr,P.dt])
r(P.cl,P.cN)
q(P.cl,[H.bS,W.f0,W.f_,P.dB])
r(H.N,H.bS)
q(P.j,[H.m,H.bq,H.cJ,P.cf])
r(H.cc,H.bq)
q(P.dF,[H.dO,H.eX])
r(H.c8,H.c7)
q(H.bC,[H.it,H.hD,H.jV,H.jW,H.jX,P.jj,P.ji,P.jk,P.jl,P.jx,P.jw,P.jL,P.jr,P.js,P.hH,P.hM,P.j0,P.j1,P.hn,P.ho,P.iX,P.iT,P.iV,P.iW,P.jz,P.jy,P.jG,P.jF,P.jH,P.jI,W.i2,W.i3,W.ie,W.ir,W.jm,P.ju,P.jv,P.jM,P.hx,P.hy,P.ha,E.ib,E.ic,E.id,E.iC,D.hu,D.hv,F.jD,F.jN,F.jP,F.k_,F.kl,F.km,F.kn,F.jO,F.jS,F.jT,F.jg,F.jf,F.j8,F.j9,O.hU,O.hV,O.hW,O.hX,O.hY,O.hZ,O.i_,O.i0,T.iA,V.kk,V.i9,V.io,V.im,V.ix,V.iw,K.k1,K.k0,K.k2,K.k3,K.kb,K.kc,K.kd,K.ke,K.kf,K.kg,K.kh,K.ki,K.k4,K.k5,K.k6,K.k7,K.k8,K.k9,K.ka])
q(H.it,[H.iq,H.c5])
r(P.cn,P.as)
r(H.y,P.cn)
r(H.ck,H.m)
r(H.bM,H.T)
q(H.bM,[H.cP,H.cR])
r(H.cQ,H.cP)
r(H.br,H.cQ)
r(H.cS,H.cR)
r(H.cr,H.cS)
q(H.cr,[H.dX,H.dY,H.dZ,H.e_,H.e0,H.cs,H.bN])
r(H.d_,H.f9)
r(P.cW,P.cf)
r(P.jq,P.jC)
r(P.cL,P.cT)
r(P.d3,P.co)
r(P.bT,P.d3)
q(P.dq,[P.hb,P.hq])
r(P.ds,P.et)
q(P.ds,[P.hc,P.j2,P.j_])
r(P.iZ,P.hq)
q(P.P,[P.X,P.l])
q(P.ag,[P.bR,P.dE])
r(P.f3,P.bv)
q(W.d,[W.v,W.dA,W.bJ,W.al,W.cU,W.an,W.a6,W.cX,W.eV,W.bU,P.dj,P.aV])
q(W.v,[W.G,W.ap])
q(W.G,[W.p,P.n])
q(W.p,[W.de,W.df,W.bf,W.dC,W.bn,W.bH,W.ej,W.b1])
r(W.hg,W.aC)
r(W.c9,W.f2)
q(W.ah,[W.hi,W.hj])
r(W.f5,W.f4)
r(W.ca,W.f5)
r(W.f7,W.f6)
r(W.dw,W.f7)
r(W.ac,W.be)
r(W.fd,W.fc)
r(W.bE,W.fd)
r(W.fh,W.fg)
r(W.bl,W.fh)
r(W.aM,W.k)
q(W.aM,[W.bp,W.ad,W.bt])
r(W.dU,W.fk)
r(W.dV,W.fl)
r(W.fn,W.fm)
r(W.dW,W.fn)
r(W.fp,W.fo)
r(W.ct,W.fp)
r(W.ft,W.fs)
r(W.e8,W.ft)
r(W.eh,W.fv)
r(W.cV,W.cU)
r(W.el,W.cV)
r(W.fy,W.fx)
r(W.em,W.fy)
r(W.es,W.fD)
r(W.fJ,W.fI)
r(W.ex,W.fJ)
r(W.cY,W.cX)
r(W.ey,W.cY)
r(W.fL,W.fK)
r(W.eD,W.fL)
r(W.b4,W.ad)
r(W.fS,W.fR)
r(W.f1,W.fS)
r(W.cK,W.cb)
r(W.fU,W.fT)
r(W.ff,W.fU)
r(W.fW,W.fV)
r(W.cO,W.fW)
r(W.fY,W.fX)
r(W.fz,W.fY)
r(W.h_,W.fZ)
r(W.fH,W.h_)
r(W.fa,P.cx)
r(P.fG,P.jt)
r(P.a3,P.fu)
r(P.fj,P.fi)
r(P.dL,P.fj)
r(P.fr,P.fq)
r(P.e3,P.fr)
r(P.fF,P.fE)
r(P.eu,P.fF)
r(P.fN,P.fM)
r(P.eE,P.fN)
r(P.di,P.eZ)
r(P.e4,P.aV)
r(P.fB,P.fA)
r(P.ep,P.fB)
q(K.dD,[K.b_,L.eF])
q(E.hd,[Z.dm,A.cv,T.ez])
q(D.Q,[D.aW,D.aX,D.B,X.eb])
q(X.eb,[X.cm,X.bK,X.bL,X.cz])
q(O.aa,[D.cj,U.bF])
q(D.he,[U.hf,U.S])
r(U.c6,U.S)
r(A.dQ,A.cv)
q(A.eG,[A.eI,A.iM,A.iN,A.iO,A.iK,A.eH,A.iL,A.eJ,A.eK,A.iQ,A.eL,A.cC,A.eM,A.eN])
r(F.ip,F.hw)
r(F.iJ,F.hF)
r(F.jb,F.jc)
r(F.i5,F.jd)
r(O.dP,O.ew)
q(O.dR,[O.hO,O.hP,O.aF])
q(O.aF,[O.hS,O.hT])
r(T.iu,T.ez)
r(T.iy,T.iu)
r(X.hA,X.is)
s(H.bS,H.eQ)
s(H.cP,P.i)
s(H.cQ,H.cd)
s(H.cR,P.i)
s(H.cS,H.cd)
s(P.cN,P.i)
s(P.d3,P.fQ)
s(W.f2,W.hh)
s(W.f4,P.i)
s(W.f5,W.J)
s(W.f6,P.i)
s(W.f7,W.J)
s(W.fc,P.i)
s(W.fd,W.J)
s(W.fg,P.i)
s(W.fh,W.J)
s(W.fk,P.as)
s(W.fl,P.as)
s(W.fm,P.i)
s(W.fn,W.J)
s(W.fo,P.i)
s(W.fp,W.J)
s(W.fs,P.i)
s(W.ft,W.J)
s(W.fv,P.as)
s(W.cU,P.i)
s(W.cV,W.J)
s(W.fx,P.i)
s(W.fy,W.J)
s(W.fD,P.as)
s(W.fI,P.i)
s(W.fJ,W.J)
s(W.cX,P.i)
s(W.cY,W.J)
s(W.fK,P.i)
s(W.fL,W.J)
s(W.fR,P.i)
s(W.fS,W.J)
s(W.fT,P.i)
s(W.fU,W.J)
s(W.fV,P.i)
s(W.fW,W.J)
s(W.fX,P.i)
s(W.fY,W.J)
s(W.fZ,P.i)
s(W.h_,W.J)
s(P.fi,P.i)
s(P.fj,W.J)
s(P.fq,P.i)
s(P.fr,W.J)
s(P.fE,P.i)
s(P.fF,W.J)
s(P.fM,P.i)
s(P.fN,W.J)
s(P.eZ,P.as)
s(P.fA,P.i)
s(P.fB,W.J)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",X:"double",P:"num",z:"String",aO:"bool",aj:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Q*])","~(Q*)","~(ad*)","aj(@,@)","~(l*,j<bk*>*)","~(k*)","~(bt*)","~(~())","~()","~(bp*)","~(l*,j<R*>*)","X*()","~(l*,j<S*>*)","~(l*,j<aZ*>*)","@(@)","aj(@)","aj(K?,K?)","b2(@,@)","~(b4*)","aO*(j<R*>*)","l(@,@)","z(d)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oj(v.typeUniverse,JSON.parse('{"ar":"aY","e7":"aY","bu":"aY","pY":"k","q7":"k","q_":"aV","pZ":"d","qf":"d","qh":"d","pX":"n","q9":"n","q0":"p","qc":"p","qa":"v","q6":"v","qH":"a6","q4":"aM","q1":"ap","qi":"ap","qg":"ad","qb":"bl","qe":"br","qd":"T","dG":{"aO":[]},"aY":{"lr":[]},"u":{"o":["1"],"m":["1"],"j":["1"]},"hC":{"u":["1"],"o":["1"],"m":["1"],"j":["1"]},"bo":{"X":[],"P":[]},"ch":{"X":[],"l":[],"P":[]},"cg":{"X":[],"P":[]},"aD":{"z":[]},"dK":{"I":[]},"N":{"i":["l"],"o":["l"],"m":["l"],"j":["l"],"i.E":"l"},"m":{"j":["1"]},"bq":{"j":["2"]},"cc":{"m":["2"],"j":["2"]},"cJ":{"j":["1"]},"bS":{"i":["1"],"o":["1"],"m":["1"],"j":["1"]},"c7":{"E":["1","2"]},"c8":{"E":["1","2"]},"e1":{"I":[]},"dI":{"I":[]},"eP":{"I":[]},"ei":{"I":[]},"y":{"E":["1","2"]},"ck":{"m":["1"],"j":["1"]},"dH":{"lJ":[]},"bM":{"w":["1"],"T":[]},"br":{"i":["X"],"w":["X"],"o":["X"],"T":[],"m":["X"],"j":["X"],"i.E":"X"},"cr":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"]},"dX":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"dY":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"dZ":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"e_":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"e0":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"cs":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"bN":{"i":["l"],"b2":[],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"f9":{"I":[]},"d_":{"I":[]},"cZ":{"cy":[]},"cW":{"j":["1"]},"cL":{"m":["1"],"j":["1"]},"cf":{"j":["1"]},"cl":{"i":["1"],"o":["1"],"m":["1"],"j":["1"]},"cn":{"E":["1","2"]},"as":{"E":["1","2"]},"co":{"E":["1","2"]},"bT":{"E":["1","2"]},"cT":{"m":["1"],"j":["1"]},"X":{"P":[]},"dg":{"I":[]},"e2":{"I":[]},"ag":{"I":[]},"bR":{"I":[]},"dE":{"I":[]},"eR":{"I":[]},"eO":{"I":[]},"er":{"I":[]},"dr":{"I":[]},"e5":{"I":[]},"cw":{"I":[]},"dt":{"I":[]},"l":{"P":[]},"o":{"m":["1"],"j":["1"]},"bv":{"eS":[]},"fw":{"eS":[]},"f3":{"eS":[]},"p":{"G":[],"v":[],"d":[]},"de":{"G":[],"v":[],"d":[]},"df":{"G":[],"v":[],"d":[]},"bf":{"G":[],"v":[],"d":[]},"ap":{"v":[],"d":[]},"ca":{"i":["a3<P>"],"o":["a3<P>"],"w":["a3<P>"],"m":["a3<P>"],"j":["a3<P>"],"i.E":"a3<P>"},"cb":{"a3":["P"]},"dw":{"i":["z"],"o":["z"],"w":["z"],"m":["z"],"j":["z"],"i.E":"z"},"f0":{"i":["G"],"o":["G"],"m":["G"],"j":["G"],"i.E":"G"},"G":{"v":[],"d":[]},"ac":{"be":[]},"bE":{"i":["ac"],"o":["ac"],"w":["ac"],"m":["ac"],"j":["ac"],"i.E":"ac"},"dA":{"d":[]},"dC":{"G":[],"v":[],"d":[]},"bl":{"i":["v"],"o":["v"],"w":["v"],"m":["v"],"j":["v"],"i.E":"v"},"bn":{"G":[],"v":[],"d":[]},"bH":{"G":[],"v":[],"d":[]},"bp":{"k":[]},"bJ":{"d":[]},"dU":{"E":["z","@"]},"dV":{"E":["z","@"]},"dW":{"i":["at"],"o":["at"],"w":["at"],"m":["at"],"j":["at"],"i.E":"at"},"ad":{"k":[]},"f_":{"i":["v"],"o":["v"],"m":["v"],"j":["v"],"i.E":"v"},"v":{"d":[]},"ct":{"i":["v"],"o":["v"],"w":["v"],"m":["v"],"j":["v"],"i.E":"v"},"e8":{"i":["au"],"o":["au"],"w":["au"],"m":["au"],"j":["au"],"i.E":"au"},"eh":{"E":["z","@"]},"ej":{"G":[],"v":[],"d":[]},"al":{"d":[]},"el":{"i":["al"],"o":["al"],"w":["al"],"d":[],"m":["al"],"j":["al"],"i.E":"al"},"em":{"i":["aw"],"o":["aw"],"w":["aw"],"m":["aw"],"j":["aw"],"i.E":"aw"},"es":{"E":["z","z"]},"b1":{"G":[],"v":[],"d":[]},"an":{"d":[]},"a6":{"d":[]},"ex":{"i":["a6"],"o":["a6"],"w":["a6"],"m":["a6"],"j":["a6"],"i.E":"a6"},"ey":{"i":["an"],"o":["an"],"w":["an"],"d":[],"m":["an"],"j":["an"],"i.E":"an"},"bt":{"k":[]},"eD":{"i":["ay"],"o":["ay"],"w":["ay"],"m":["ay"],"j":["ay"],"i.E":"ay"},"aM":{"k":[]},"eV":{"d":[]},"b4":{"ad":[],"k":[]},"bU":{"d":[]},"f1":{"i":["F"],"o":["F"],"w":["F"],"m":["F"],"j":["F"],"i.E":"F"},"cK":{"a3":["P"]},"ff":{"i":["aq?"],"o":["aq?"],"w":["aq?"],"m":["aq?"],"j":["aq?"],"i.E":"aq?"},"cO":{"i":["v"],"o":["v"],"w":["v"],"m":["v"],"j":["v"],"i.E":"v"},"fz":{"i":["ax"],"o":["ax"],"w":["ax"],"m":["ax"],"j":["ax"],"i.E":"ax"},"fH":{"i":["am"],"o":["am"],"w":["am"],"m":["am"],"j":["am"],"i.E":"am"},"d0":{"bm":[]},"dB":{"i":["G"],"o":["G"],"m":["G"],"j":["G"],"i.E":"G"},"a3":{"fu":["1"]},"dL":{"i":["aE"],"o":["aE"],"m":["aE"],"j":["aE"],"i.E":"aE"},"e3":{"i":["aH"],"o":["aH"],"m":["aH"],"j":["aH"],"i.E":"aH"},"eu":{"i":["z"],"o":["z"],"m":["z"],"j":["z"],"i.E":"z"},"n":{"G":[],"v":[],"d":[]},"eE":{"i":["aK"],"o":["aK"],"m":["aK"],"j":["aK"],"i.E":"aK"},"b2":{"o":["l"],"m":["l"],"j":["l"]},"di":{"E":["z","@"]},"dj":{"d":[]},"aV":{"d":[]},"e4":{"d":[]},"ep":{"i":["E<@,@>"],"o":["E<@,@>"],"m":["E<@,@>"],"j":["E<@,@>"],"i.E":"E<@,@>"},"aa":{"j":["1*"],"aa.T":"1"},"aW":{"Q":[]},"aX":{"Q":[]},"B":{"Q":[]},"cm":{"Q":[]},"bK":{"Q":[]},"bL":{"Q":[]},"eb":{"Q":[]},"cz":{"Q":[]},"dk":{"R":[]},"bi":{"R":[]},"cj":{"aa":["R*"],"j":["R*"],"aa.T":"R*"},"ea":{"R":[]},"en":{"R":[]},"c6":{"S":[]},"bF":{"aa":["S*"],"S":[],"j":["S*"],"aa.T":"S*"},"cF":{"S":[]},"cG":{"S":[]},"cH":{"S":[]},"dQ":{"cv":[]}}'))
H.oi(v.typeUniverse,JSON.parse('{"a1":1,"m":1,"bI":1,"bq":2,"cc":2,"dO":2,"cJ":1,"eX":1,"cd":1,"eQ":1,"bS":1,"c7":2,"ck":1,"dN":1,"bM":1,"bW":1,"cW":1,"cx":1,"et":2,"cM":1,"cf":1,"cl":1,"cn":2,"as":2,"fQ":2,"co":2,"cT":1,"cN":1,"d3":2,"dq":2,"ds":2,"j":1,"dF":1,"fa":1,"J":1,"ce":1,"aW":1,"aX":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.l1
return{d:s("be"),Y:s("m<@>"),h:s("G"),C:s("I"),D:s("k"),G:s("ac"),bX:s("bE"),Z:s("q8"),u:s("bm"),fS:s("bn"),gk:s("bH"),s:s("u<z>"),gn:s("u<@>"),t:s("u<l>"),x:s("u<dh*>"),bb:s("u<dk*>"),am:s("u<dl*>"),g0:s("u<dm*>"),cP:s("u<bi*>"),M:s("u<dv*>"),b:s("u<dy*>"),aZ:s("u<bG*>"),B:s("u<dM*>"),L:s("u<hN*>"),p:s("u<aZ*>"),eb:s("u<ea*>"),cS:s("u<av*>"),d1:s("u<ec*>"),k:s("u<e9*>"),du:s("u<en*>"),cz:s("u<eo*>"),eG:s("u<cx<K*>*>"),i:s("u<z*>"),fG:s("u<ew*>"),bw:s("u<ez*>"),br:s("u<eF*>"),fj:s("u<eG*>"),d6:s("u<cA*>"),dv:s("u<cB*>"),hg:s("u<cC*>"),by:s("u<cD*>"),fF:s("u<cE*>"),j:s("u<eU*>"),m:s("u<X*>"),V:s("u<l*>"),f:s("u<~(Q*)*>"),T:s("ci"),eH:s("lr"),g:s("ar"),aU:s("w<@>"),h9:s("y<z*,cv*>"),cn:s("y<z*,eq*>"),dO:s("y<z*,z*>"),w:s("y<z*,eC*>"),en:s("y<l*,o<cA*>*>"),af:s("y<l*,o<cB*>*>"),gr:s("y<l*,o<cD*>*>"),gb:s("y<l*,o<cE*>*>"),J:s("y<l*,eI*>"),E:s("y<l*,aO*>"),a:s("y<l*,l*>"),aH:s("o<@>"),eO:s("E<@,@>"),bK:s("bJ"),o:s("cq"),dD:s("T"),bm:s("bN"),P:s("aj"),K:s("K"),q:s("a3<P>"),fv:s("lJ"),N:s("z"),bY:s("b1"),aF:s("cy"),gc:s("b2"),ak:s("bu"),U:s("bT<z,z>"),R:s("eS"),cJ:s("aO"),gR:s("X"),z:s("@"),S:s("l"),fr:s("bf*"),l:s("bk*"),eN:s("bn*"),gj:s("R*"),dn:s("cm*"),hc:s("aZ*"),c:s("bK*"),F:s("bL*"),ah:s("S*"),A:s("0&*"),_:s("K*"),X:s("z*"),eB:s("eB*"),eP:s("cz*"),n:s("eH*"),r:s("eJ*"),y:s("eK*"),O:s("eL*"),I:s("cC*"),v:s("eM*"),Q:s("eN*"),e:s("l*"),dm:s("~(Q*)*"),bG:s("lo<aj>?"),W:s("K?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.bf.prototype
C.M=J.a.prototype
C.b=J.u.prototype
C.N=J.cg.prototype
C.c=J.ch.prototype
C.j=J.ci.prototype
C.d=J.bo.prototype
C.a=J.aD.prototype
C.O=J.ar.prototype
C.x=J.e7.prototype
C.W=P.eg.prototype
C.o=J.bu.prototype
C.y=W.b4.prototype
C.z=W.bU.prototype
C.A=new E.bB("Browser.chrome")
C.p=new E.bB("Browser.firefox")
C.q=new E.bB("Browser.edge")
C.B=new E.bB("Browser.other")
C.Z=new P.hc()
C.C=new P.hb()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=function() {
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
C.I=function(getTagFallback) {
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
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.H=function(hooks) {
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
C.G=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.J=new P.e5()
C.e=new P.iZ()
C.K=new P.j2()
C.f=new P.jq()
C.n=new P.bj(0)
C.L=new P.bj(5e6)
C.k=H.e(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.l=H.e(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.e(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Q=H.e(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.R=H.e(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.e(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.u=H.e(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.v=H.e(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.P=H.e(s([]),t.i)
C.S=new H.c8(0,{},C.P,H.l1("c8<z*,z*>"))
C.T=new E.bO("OperatingSystem.windows")
C.w=new E.bO("OperatingSystem.mac")
C.U=new E.bO("OperatingSystem.linux")
C.V=new E.bO("OperatingSystem.other")
C.X=new P.j_(!1)
C.Y=new P.bV(null,2)})();(function staticFields(){$.m4=null
$.aB=0
$.li=null
$.lh=null
$.mw=null
$.ms=null
$.mC=null
$.jQ=null
$.jY=null
$.l5=null
$.c_=null
$.d7=null
$.d8=null
$.kZ=!1
$.az=C.f
$.a8=H.e([],H.l1("u<K>"))
$.hr=null
$.lx=null
$.lA=null
$.aI=null
$.lL=null
$.lX=null
$.m_=null
$.lZ=null
$.j3=null
$.j4=null
$.j5=null
$.lY=null
$.lz=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"q5","mJ",function(){return H.pG("_$dart_dartClosure")})
s($,"qj","mK",function(){return H.aL(H.iI({
toString:function(){return"$receiver$"}}))})
s($,"qk","mL",function(){return H.aL(H.iI({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ql","mM",function(){return H.aL(H.iI(null))})
s($,"qm","mN",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qp","mQ",function(){return H.aL(H.iI(void 0))})
s($,"qq","mR",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qo","mP",function(){return H.aL(H.lS(null))})
s($,"qn","mO",function(){return H.aL(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"qs","mT",function(){return H.aL(H.lS(void 0))})
s($,"qr","mS",function(){return H.aL(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"qI","lb",function(){return P.nY()})
s($,"qt","mU",function(){return new P.j0().$0()})
s($,"qu","mV",function(){return new P.j1().$0()})
s($,"qJ","mX",function(){return new Int8Array(H.bY(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qL","mY",function(){return P.nI("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"r0","mZ",function(){return P.oF()})
s($,"qB","mW",function(){return Z.ao(0)})
s($,"qv","l9",function(){return Z.ao(511)})
s($,"qD","aT",function(){return Z.ao(1)})
s($,"qC","aA",function(){return Z.ao(2)})
s($,"qx","aS",function(){return Z.ao(4)})
s($,"qE","bb",function(){return Z.ao(8)})
s($,"qF","bc",function(){return Z.ao(16)})
s($,"qy","db",function(){return Z.ao(32)})
s($,"qz","dc",function(){return Z.ao(64)})
s($,"qA","la",function(){return Z.ao(96)})
s($,"qG","by",function(){return Z.ao(128)})
s($,"qw","aR",function(){return Z.ao(256)})
s($,"q3","mI",function(){return new V.hs()})
s($,"q2","D",function(){return $.mI()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cq,DataView:H.T,ArrayBufferView:H.T,Float32Array:H.br,Float64Array:H.br,Int16Array:H.dX,Int32Array:H.dY,Int8Array:H.dZ,Uint16Array:H.e_,Uint32Array:H.e0,Uint8ClampedArray:H.cs,CanvasPixelArray:H.cs,Uint8Array:H.bN,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLBodyElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLDivElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.h5,HTMLAnchorElement:W.de,HTMLAreaElement:W.df,Blob:W.be,HTMLCanvasElement:W.bf,CDATASection:W.ap,CharacterData:W.ap,Comment:W.ap,ProcessingInstruction:W.ap,Text:W.ap,CSSPerspective:W.hg,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.c9,MSStyleCSSProperties:W.c9,CSS2Properties:W.c9,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.aC,CSSRotation:W.aC,CSSScale:W.aC,CSSSkew:W.aC,CSSTranslation:W.aC,CSSTransformComponent:W.aC,CSSTransformValue:W.hi,CSSUnparsedValue:W.hj,DataTransferItemList:W.hk,DOMException:W.hl,ClientRectList:W.ca,DOMRectList:W.ca,DOMRectReadOnly:W.cb,DOMStringList:W.dw,DOMTokenList:W.hm,Element:W.G,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,SubmitEvent:W.k,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ac,FileList:W.bE,FileWriter:W.dA,HTMLFormElement:W.dC,Gamepad:W.aq,History:W.hB,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,ImageData:W.bm,HTMLImageElement:W.bn,HTMLInputElement:W.bH,KeyboardEvent:W.bp,Location:W.hK,MediaList:W.i1,MessagePort:W.bJ,MIDIInputMap:W.dU,MIDIOutputMap:W.dV,MimeType:W.at,MimeTypeArray:W.dW,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.au,PluginArray:W.e8,RTCStatsReport:W.eh,HTMLSelectElement:W.ej,SourceBuffer:W.al,SourceBufferList:W.el,SpeechGrammar:W.aw,SpeechGrammarList:W.em,SpeechRecognitionResult:W.ax,Storage:W.es,CSSStyleSheet:W.am,StyleSheet:W.am,HTMLTableCellElement:W.b1,HTMLTableDataCellElement:W.b1,HTMLTableHeaderCellElement:W.b1,TextTrack:W.an,TextTrackCue:W.a6,VTTCue:W.a6,TextTrackCueList:W.ex,TextTrackList:W.ey,TimeRanges:W.iD,Touch:W.ay,TouchEvent:W.bt,TouchList:W.eD,TrackDefaultList:W.iG,CompositionEvent:W.aM,FocusEvent:W.aM,TextEvent:W.aM,UIEvent:W.aM,URL:W.iY,VideoTrackList:W.eV,WheelEvent:W.b4,Window:W.bU,DOMWindow:W.bU,CSSRuleList:W.f1,ClientRect:W.cK,DOMRect:W.cK,GamepadList:W.ff,NamedNodeMap:W.cO,MozNamedAttrMap:W.cO,SpeechRecognitionResultList:W.fz,StyleSheetList:W.fH,SVGLength:P.aE,SVGLengthList:P.dL,SVGNumber:P.aH,SVGNumberList:P.e3,SVGPointList:P.i7,SVGStringList:P.eu,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aK,SVGTransformList:P.eE,AudioBuffer:P.h9,AudioParamMap:P.di,AudioTrackList:P.dj,AudioContext:P.aV,webkitAudioContext:P.aV,BaseAudioContext:P.aV,OfflineAudioContext:P.e4,WebGL2RenderingContext:P.eg,SQLResultSetRowList:P.ep})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cX.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mA,[])
else K.mA([])})})()
//# sourceMappingURL=test.dart.js.map
