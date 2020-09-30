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
a[c]=function(){a[c]=function(){H.pp(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kD(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kf:function kf(){},
kh:function(a){return new H.dQ(a)},
jP:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
n3:function(a,b){if(t.v.b(a))return new H.ch(a,b)
return new H.bm(a,b)},
l_:function(){return new P.ew("No element")},
no:function(a,b){var s=J.aW(a)
if(typeof s!=="number")return s.Y()
H.ep(a,0,s-1,b)},
ep:function(a,b,c,d){if(c-b<=32)H.nn(a,b,c,d)
else H.nm(a,b,c,d)},
nn:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aU(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a_()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
nm:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a1(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a1(a6+a7,2),d=e-h,c=e+h,b=J.aU(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a3
a3=a2
a2=s}b.j(a5,g,a)
b.j(a5,e,a1)
b.j(a5,f,a3)
b.j(a5,d,b.h(a5,a6))
b.j(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.D(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a9()
if(n<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a_()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
q=m
r=l
break}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.a9()
if(j<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a_()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a_()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a9()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.j(a5,a6,b.h(a5,a4))
b.j(a5,a4,a0)
a4=q+1
b.j(a5,a7,b.h(a5,a4))
b.j(a5,a4,a2)
H.ep(a5,a6,r-2,a8)
H.ep(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.D(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.D(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a9()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}H.ep(a5,r,q,a8)}else H.ep(a5,r,q,a8)},
dQ:function dQ(a){this.a=a},
N:function N(a){this.a=a},
l:function l(){},
bI:function bI(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bm:function bm(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=null
this.b=a
this.c=b},
cT:function cT(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
cj:function cj(){},
eV:function eV(){},
bT:function bT(){},
mQ:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
mg:function(a){var s,r=H.mf(a)
if(r!=null)return r
s="minified:"+a
return s},
m8:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ar(a)
if(typeof s!="string")throw H.c(H.aq(a))
return s},
cC:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lc:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a0(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
eg:function(a){return H.n6(a)},
n6:function(a){var s,r,q
if(a instanceof P.L)return H.ag(H.bx(a),null)
if(J.di(a)===C.Q||t.ak.b(a)){s=C.u(a)
if(H.lb(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.lb(q))return q}}return H.ag(H.bx(a),null)},
lb:function(a){var s=a!=="Object"&&a!==""
return s},
n7:function(){if(!!self.location)return self.location.href
return null},
la:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nf:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.bZ(q))throw H.c(H.aq(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aI(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aq(q))}return H.la(p)},
ld:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bZ(q))throw H.c(H.aq(q))
if(q<0)throw H.c(H.aq(q))
if(q>65535)return H.nf(a)}return H.la(a)},
ng:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.hS()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aO:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aI(s,10))>>>0,56320|s&1023)}}throw H.c(P.a0(a,0,1114111,null,null))},
bP:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ne:function(a){var s=H.bP(a).getFullYear()+0
return s},
nc:function(a){var s=H.bP(a).getMonth()+1
return s},
n8:function(a){var s=H.bP(a).getDate()+0
return s},
n9:function(a){var s=H.bP(a).getHours()+0
return s},
nb:function(a){var s=H.bP(a).getMinutes()+0
return s},
nd:function(a){var s=H.bP(a).getSeconds()+0
return s},
na:function(a){var s=H.bP(a).getMilliseconds()+0
return s},
u:function(a){throw H.c(H.aq(a))},
b:function(a,b){if(a==null)J.aW(a)
throw H.c(H.c2(a,b))},
c2:function(a,b){var s,r,q="index"
if(!H.bZ(b))return new P.ah(!0,b,q,null)
s=J.aW(a)
if(!(b<0)){if(typeof s!=="number")return H.u(s)
r=b>=s}else r=!0
if(r)return P.M(b,a,q,null,s)
return P.eh(b,q)},
p9:function(a,b,c){if(a>c)return P.a0(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a0(b,a,c,"end",null)
return new P.ah(!0,b,"end",null)},
aq:function(a){return new P.ah(!0,a,null,null)},
p5:function(a){if(typeof a!="number")throw H.c(H.aq(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.e6()
s=new Error()
s.dartException=a
r=H.pq
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pq:function(){return J.ar(this.dartException)},
p:function(a){throw H.c(a)},
r:function(a){throw H.c(P.bE(a))},
aQ:function(a){var s,r,q,p,o,n
a=H.mc(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lq:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l5:function(a,b){return new H.e5(a,b==null?null:b.method)},
kg:function(a,b){var s=b==null,r=s?null:b.method
return new H.dO(a,r,s?null:b.receiver)},
b8:function(a){if(a==null)return new H.id(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.by(a,a.dartException)
return H.p1(a)},
by:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
p1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aI(r,16)&8191)===10)switch(q){case 438:return H.by(a,H.kg(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.by(a,H.l5(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.mj()
o=$.mk()
n=$.ml()
m=$.mm()
l=$.mp()
k=$.mq()
j=$.mo()
$.mn()
i=$.ms()
h=$.mr()
g=p.ai(s)
if(g!=null)return H.by(a,H.kg(s,g))
else{g=o.ai(s)
if(g!=null){g.method="call"
return H.by(a,H.kg(s,g))}else{g=n.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=l.ai(s)
if(g==null){g=k.ai(s)
if(g==null){g=j.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=i.ai(s)
if(g==null){g=h.ai(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.by(a,H.l5(s,g))}}return H.by(a,new H.eU(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cE()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.by(a,new P.ah(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cE()
return a},
kG:function(a){var s
if(a==null)return new H.fI(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fI(a)},
pb:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
ph:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.q("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ph)
a.$identity=s
return s},
mP:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iy().constructor.prototype):Object.create(new H.c7(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aE
if(typeof r!=="number")return r.v()
$.aE=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kV(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mL(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kV(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mL:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m6,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mJ:H.mI
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
mM:function(a,b,c,d){var s=H.kT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kV:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mO(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mM(r,!p,s,b)
if(r===0){p=$.aE
if(typeof p!=="number")return p.v()
$.aE=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.k7())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aE
if(typeof p!=="number")return p.v()
$.aE=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.k7())+"."+H.f(s)+"("+m+");}")()},
mN:function(a,b,c,d){var s=H.kT,r=H.mK
switch(b?-1:a){case 0:throw H.c(new H.en("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mO:function(a,b){var s,r,q,p,o,n,m=H.k7(),l=$.kR
if(l==null)l=$.kR=H.kQ("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mN(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aE
if(typeof o!=="number")return o.v()
$.aE=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aE
if(typeof o!=="number")return o.v()
$.aE=o+1
return new Function(p+o+"}")()},
kD:function(a,b,c,d,e,f,g){return H.mP(a,b,c,d,!!e,!!f,g)},
mI:function(a,b){return H.fU(v.typeUniverse,H.bx(a.a),b)},
mJ:function(a,b){return H.fU(v.typeUniverse,H.bx(a.c),b)},
kT:function(a){return a.a},
mK:function(a){return a.c},
k7:function(){var s=$.kS
return s==null?$.kS=H.kQ("self"):s},
kQ:function(a){var s,r,q,p=new H.c7("self","target","receiver","name"),o=J.ke(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.c6("Field name "+a+" not found."))},
pp:function(a){throw H.c(new P.dA(a))},
pd:function(a){return v.getIsolateTag(a)},
qy:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pj:function(a){var s,r,q,p,o,n=$.m5.$1(a),m=$.jN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jU[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.m2.$2(a,n)
if(q!=null){m=$.jN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jU[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.k_(s)
$.jN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jU[n]=s
return s}if(p==="-"){o=H.k_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ma(a,s)
if(p==="*")throw H.c(P.iS(n))
if(v.leafTags[n]===true){o=H.k_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ma(a,s)},
ma:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k_:function(a){return J.kI(a,!1,null,!!a.$ix)},
pk:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.k_(s)
else return J.kI(s,c,null,null)},
pf:function(){if(!0===$.kH)return
$.kH=!0
H.pg()},
pg:function(){var s,r,q,p,o,n,m,l
$.jN=Object.create(null)
$.jU=Object.create(null)
H.pe()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mb.$1(o)
if(n!=null){m=H.pk(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pe:function(){var s,r,q,p,o,n,m=C.H()
m=H.c0(C.I,H.c0(C.J,H.c0(C.v,H.c0(C.v,H.c0(C.K,H.c0(C.L,H.c0(C.M(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.m5=new H.jQ(p)
$.m2=new H.jR(o)
$.mb=new H.jS(n)},
c0:function(a,b){return a(b)||b},
mZ:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a_("Illegal RegExp pattern ("+String(n)+")",a,null))},
md:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pa:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
me:function(a,b,c){var s=H.pn(a,b,c)
return s},
pn:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mc(b),'g'),H.pa(c))},
cb:function cb(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iJ:function iJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e5:function e5(a,b){this.a=a
this.b=b},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a){this.a=a},
id:function id(a){this.a=a},
fI:function fI(a){this.a=a
this.b=null},
bC:function bC(){},
iB:function iB(){},
iy:function iy(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(a){this.a=a},
z:function z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hJ:function hJ(a){this.a=a},
hN:function hN(a,b){this.a=a
this.b=b
this.c=null},
cs:function cs(a){this.a=a},
dS:function dS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
dN:function dN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bv:function(a){return a},
aS:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c2(b,a))},
of:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.p9(a,b,c))
return b},
cy:function cy(){},
S:function S(){},
bM:function bM(){},
bo:function bo(){},
cz:function cz(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
cA:function cA(){},
bN:function bN(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
nk:function(a,b){var s=b.c
return s==null?b.c=H.ks(a,b.z,!0):s},
lh:function(a,b){var s=b.c
return s==null?b.c=H.da(a,"kZ",[b.z]):s},
li:function(a){var s=a.y
if(s===6||s===7||s===8)return H.li(a.z)
return s===11||s===12},
nj:function(a){return a.cy},
kE:function(a){return H.kt(v.typeUniverse,a,!1)},
b6:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b6(a,s,a0,a1)
if(r===s)return b
return H.lM(a,r,!0)
case 7:s=b.z
r=H.b6(a,s,a0,a1)
if(r===s)return b
return H.ks(a,r,!0)
case 8:s=b.z
r=H.b6(a,s,a0,a1)
if(r===s)return b
return H.lL(a,r,!0)
case 9:q=b.Q
p=H.dh(a,q,a0,a1)
if(p===q)return b
return H.da(a,b.z,p)
case 10:o=b.z
n=H.b6(a,o,a0,a1)
m=b.Q
l=H.dh(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kq(a,n,l)
case 11:k=b.z
j=H.b6(a,k,a0,a1)
i=b.Q
h=H.oZ(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lK(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dh(a,g,a0,a1)
o=b.z
n=H.b6(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kr(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.h9("Attempted to substitute unexpected RTI kind "+c))}},
dh:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b6(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
p_:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b6(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
oZ:function(a,b,c,d){var s,r=b.a,q=H.dh(a,r,c,d),p=b.b,o=H.dh(a,p,c,d),n=b.c,m=H.p_(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fk()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
p6:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.m6(s)
return a.$S()}return null},
m7:function(a,b){var s
if(H.li(b))if(a instanceof H.bC){s=H.p6(a)
if(s!=null)return s}return H.bx(a)},
bx:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.kz(a)}if(Array.isArray(a))return H.lV(a)
return H.kz(J.di(a))},
lV:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
lY:function(a){var s=a.$ti
return s!=null?s:H.kz(a)},
kz:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.om(a,s)},
om:function(a,b){var s=a instanceof H.bC?a.__proto__.__proto__.constructor:b,r=H.nX(v.typeUniverse,s.name)
b.$ccache=r
return r},
m6:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kt(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ol:function(a){var s,r,q=this,p=t.K
if(q===p)return H.de(q,a,H.oq)
if(!H.aV(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.de(q,a,H.ot)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bZ
else if(s===t.gR||s===t.o)r=H.op
else if(s===t.N)r=H.or
else r=s===t.cJ?H.kA:null
if(r!=null)return H.de(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.pi)){q.r="$i"+p
return H.de(q,a,H.os)}}else if(p===7)return H.de(q,a,H.oj)
return H.de(q,a,H.oh)},
de:function(a,b,c){a.b=c
return a.b(b)},
ok:function(a){var s,r,q=this
if(!H.aV(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.oe
else if(q===t.K)r=H.oc
else r=H.oi
q.a=r
return q.a(a)},
oS:function(a){var s,r=a.y
if(!H.aV(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.F||r===7||a===t.P||a===t.T},
oh:function(a){var s=this
if(a==null)return H.oS(s)
return H.V(v.typeUniverse,H.m7(a,s),null,s,null)},
oj:function(a){if(a==null)return!0
return this.z.b(a)},
os:function(a){var s=this,r=s.r
if(a instanceof P.L)return!!a[r]
return!!J.di(a)[r]},
qw:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lW(a,s)},
oi:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lW(a,s)},
lW:function(a,b){throw H.c(H.nN(H.lE(a,H.m7(a,b),H.ag(b,null))))},
lE:function(a,b,c){var s=P.hy(a),r=H.ag(b==null?H.bx(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
nN:function(a){return new H.d9("TypeError: "+a)},
a6:function(a,b){return new H.d9("TypeError: "+H.lE(a,null,b))},
oq:function(a){return a!=null},
oc:function(a){return a},
ot:function(a){return!0},
oe:function(a){return a},
kA:function(a){return!0===a||!1===a},
qi:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a6(a,"bool"))},
qk:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a6(a,"bool"))},
qj:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a6(a,"bool?"))},
ql:function(a){if(typeof a=="number")return a
throw H.c(H.a6(a,"double"))},
qn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"double"))},
qm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"double?"))},
bZ:function(a){return typeof a=="number"&&Math.floor(a)===a},
qo:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
qq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a6(a,"int"))},
qp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a6(a,"int?"))},
op:function(a){return typeof a=="number"},
qr:function(a){if(typeof a=="number")return a
throw H.c(H.a6(a,"num"))},
qt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"num"))},
qs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"num?"))},
or:function(a){return typeof a=="string"},
qu:function(a){if(typeof a=="string")return a
throw H.c(H.a6(a,"String"))},
od:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a6(a,"String"))},
qv:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a6(a,"String?"))},
oV:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.v(r,H.ag(a[q],b))
return s},
lX:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.Y,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.v(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.v(" extends ",H.ag(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ag(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.v(a3,H.ag(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.v(a3,H.ag(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kM(H.ag(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
ag:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ag(a.z,b)
return s}if(l===7){r=a.z
s=H.ag(r,b)
q=r.y
return J.kM(q===11||q===12?C.a.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.ag(a.z,b))+">"
if(l===9){p=H.p0(a.z)
o=a.Q
return o.length!==0?p+("<"+H.oV(o,b)+">"):p}if(l===11)return H.lX(a,b,null)
if(l===12)return H.lX(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
p0:function(a){var s,r=H.mf(a)
if(r!=null)return r
s="minified:"+a
return s},
lN:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nX:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kt(a,b,!1)
else if(typeof m=="number"){s=m
r=H.db(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.da(a,b,q)
n[b]=o
return o}else return m},
nV:function(a,b){return H.lU(a.tR,b)},
nU:function(a,b){return H.lU(a.eT,b)},
kt:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lJ(H.lH(a,null,b,c))
r.set(b,s)
return s},
fU:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lJ(H.lH(a,b,c,!0))
q.set(c,r)
return r},
nW:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kq(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b5:function(a,b){b.a=H.ok
b.b=H.ol
return b},
db:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.al(null,null)
s.y=b
s.cy=c
r=H.b5(a,s)
a.eC.set(c,r)
return r},
lM:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nS(a,b,r,c)
a.eC.set(r,s)
return s},
nS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.al(null,null)
q.y=6
q.z=b
q.cy=c
return H.b5(a,q)},
ks:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nR(a,b,r,c)
a.eC.set(r,s)
return s},
nR:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aV(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jV(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.F)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jV(q.z))return q
else return H.nk(a,b)}}p=new H.al(null,null)
p.y=7
p.z=b
p.cy=c
return H.b5(a,p)},
lL:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nP(a,b,r,c)
a.eC.set(r,s)
return s},
nP:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.da(a,"kZ",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.al(null,null)
q.y=8
q.z=b
q.cy=c
return H.b5(a,q)},
nT:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.al(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b5(a,s)
a.eC.set(q,r)
return r},
fT:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nO:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
da:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fT(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.al(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b5(a,r)
a.eC.set(p,q)
return q},
kq:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fT(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.al(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b5(a,o)
a.eC.set(q,n)
return n},
lK:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fT(m)
if(j>0){s=l>0?",":""
r=H.fT(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nO(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.al(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b5(a,o)
a.eC.set(q,r)
return r},
kr:function(a,b,c,d){var s,r=b.cy+("<"+H.fT(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
nQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b6(a,b,r,0)
m=H.dh(a,c,r,0)
return H.kr(a,n,m,c!==m)}}l=new H.al(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b5(a,l)},
lH:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.nH(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lI(a,r,g,f,!1)
else if(q===46)r=H.lI(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.b4(a.u,a.e,f.pop()))
break
case 94:f.push(H.nT(a.u,f.pop()))
break
case 35:f.push(H.db(a.u,5,"#"))
break
case 64:f.push(H.db(a.u,2,"@"))
break
case 126:f.push(H.db(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.kp(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.da(p,n,o))
else{m=H.b4(p,a.e,n)
switch(m.y){case 11:f.push(H.kr(p,m,o,a.n))
break
default:f.push(H.kq(p,m,o))
break}}break
case 38:H.nI(a,f)
break
case 42:l=a.u
f.push(H.lM(l,H.b4(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ks(l,H.b4(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.lL(l,H.b4(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fk()
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
H.kp(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.lK(p,H.b4(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.kp(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.nK(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.b4(a.u,a.e,h)},
nH:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lI:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lN(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.nj(o)+'"')
d.push(H.fU(s,o,n))}else d.push(p)
return m},
nI:function(a,b){var s=b.pop()
if(0===s){b.push(H.db(a.u,1,"0&"))
return}if(1===s){b.push(H.db(a.u,4,"1&"))
return}throw H.c(P.h9("Unexpected extended operation "+H.f(s)))},
b4:function(a,b,c){if(typeof c=="string")return H.da(a,c,a.sEA)
else if(typeof c=="number")return H.nJ(a,b,c)
else return c},
kp:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b4(a,b,c[s])},
nK:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b4(a,b,c[s])},
nJ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.h9("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.h9("Bad index "+c+" for "+b.i(0)))},
V:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aV(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aV(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.V(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.V(a,b.z,c,d,e)
if(p===6){s=d.z
return H.V(a,b,c,s,e)}if(r===8){if(!H.V(a,b.z,c,d,e))return!1
return H.V(a,H.lh(a,b),c,d,e)}if(r===7){s=H.V(a,b.z,c,d,e)
return s}if(p===8){if(H.V(a,b,c,d.z,e))return!0
return H.V(a,b,c,H.lh(a,d),e)}if(p===7){s=H.V(a,b,c,d.z,e)
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
if(!H.V(a,k,c,j,e)||!H.V(a,j,e,k,c))return!1}return H.lZ(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.lZ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oo(a,b,c,d,e)}return!1},
lZ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.V(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.V(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.V(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.V(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.V(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oo:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.V(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lN(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.V(a,H.fU(a,b,l[p]),c,r[p],e))return!1
return!0},
jV:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aV(a))if(r!==7)if(!(r===6&&H.jV(a.z)))s=r===8&&H.jV(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pi:function(a){var s
if(!H.aV(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aV:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.Y},
lU:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
al:function al(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fk:function fk(){this.c=this.b=this.a=null},
ff:function ff(){},
d9:function d9(a){this.a=a},
mf:function(a){return v.mangledGlobalNames[a]},
pl:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h5:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kH==null){H.pf()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.iS("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.l1()]
if(p!=null)return p
p=H.pj(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,J.l1(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
l1:function(){var s=$.lF
return s==null?$.lF=v.getIsolateTag("_$dart_js"):s},
mW:function(a,b){if(!H.bZ(a))throw H.c(P.kO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a0(a,0,4294967295,"length",null))
return J.mX(new Array(a),b)},
kd:function(a,b){if(!H.bZ(a)||a<0)throw H.c(P.c6("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.T("t<0>"))},
mX:function(a,b){return J.ke(H.d(a,b.T("t<0>")))},
ke:function(a){a.fixed$length=Array
return a},
mY:function(a,b){return J.dl(a,b)},
di:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cp.prototype
return J.co.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.cq.prototype
if(typeof a=="boolean")return J.dM.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.L)return a
return J.h5(a)},
pc:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.L)return a
return J.h5(a)},
aU:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.L)return a
return J.h5(a)},
jO:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.L)return a
return J.h5(a)},
m4:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bs.prototype
return a},
kF:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bs.prototype
return a},
bw:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.L)return a
return J.h5(a)},
kM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pc(a).v(a,b)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.di(a).n(a,b)},
kN:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m4(a).q(a,b)},
c5:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aU(a).h(a,b)},
k2:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m8(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jO(a).j(a,b,c)},
mB:function(a,b){return J.kF(a).C(a,b)},
mC:function(a,b,c){return J.bw(a).fw(a,b,c)},
mD:function(a,b,c,d){return J.bw(a).fT(a,b,c,d)},
mE:function(a,b){return J.kF(a).U(a,b)},
dl:function(a,b){return J.m4(a).aL(a,b)},
k3:function(a,b){return J.aU(a).P(a,b)},
k4:function(a,b){return J.jO(a).E(a,b)},
mF:function(a,b,c,d){return J.bw(a).hc(a,b,c,d)},
k5:function(a,b){return J.jO(a).D(a,b)},
k6:function(a){return J.bw(a).gd5(a)},
ac:function(a){return J.di(a).gL(a)},
bc:function(a){return J.jO(a).gM(a)},
aW:function(a){return J.aU(a).gk(a)},
mG:function(a,b){return J.bw(a).hH(a,b)},
ar:function(a){return J.di(a).i(a)},
a:function a(){},
dM:function dM(){},
cq:function cq(){},
aY:function aY(){},
eb:function eb(){},
bs:function bs(){},
au:function au(){},
t:function t(a){this.$ti=a},
hI:function hI(a){this.$ti=a},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bk:function bk(){},
cp:function cp(){},
co:function co(){},
aI:function aI(){}},P={
nz:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.p2()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c1(new P.jj(q),1)).observe(s,{childList:true})
return new P.ji(q,s,r)}else if(self.setImmediate!=null)return P.p3()
return P.p4()},
nA:function(a){self.scheduleImmediate(H.c1(new P.jk(a),0))},
nB:function(a){self.setImmediate(H.c1(new P.jl(a),0))},
nC:function(a){P.kk(C.p,a)},
kk:function(a,b){var s=C.c.a1(a.a,1000)
return P.nL(s<0?0:s,b)},
lp:function(a,b){var s=C.c.a1(a.a,1000)
return P.nM(s<0?0:s,b)},
nL:function(a,b){var s=new P.d8()
s.e3(a,b)
return s},
nM:function(a,b){var s=new P.d8()
s.e4(a,b)
return s},
qg:function(a){return new P.bW(a,1)},
nD:function(){return C.a1},
nE:function(a){return new P.bW(a,3)},
ov:function(a){return new P.d5(a)},
oR:function(){var s,r
for(s=$.c_;s!=null;s=$.c_){$.dg=null
r=s.b
$.c_=r
if(r==null)$.df=null
s.a.$0()}},
oY:function(){$.kB=!0
try{P.oR()}finally{$.dg=null
$.kB=!1
if($.c_!=null)$.kL().$1(P.m3())}},
oW:function(a){var s=new P.f3(a),r=$.df
if(r==null){$.c_=$.df=s
if(!$.kB)$.kL().$1(P.m3())}else $.df=r.b=s},
oX:function(a){var s,r,q,p=$.c_
if(p==null){P.oW(a)
$.dg=$.df
return}s=new P.f3(a)
r=$.dg
if(r==null){s.b=p
$.c_=$.dg=s}else{q=r.b
s.b=q
$.dg=r.b=s
if(q==null)$.df=s}},
lo:function(a,b){var s=$.aC
if(s===C.f)return P.kk(a,b)
return P.kk(a,s.fX(b))},
nt:function(a,b){var s=$.aC
if(s===C.f)return P.lp(a,b)
return P.lp(a,s.d1(b,t.aF))},
m_:function(a,b,c,d,e){P.oX(new P.jK(d,e))},
oT:function(a,b,c,d){var s,r=$.aC
if(r===c)return d.$0()
$.aC=c
s=r
try{r=d.$0()
return r}finally{$.aC=s}},
oU:function(a,b,c,d,e){var s,r=$.aC
if(r===c)return d.$1(e)
$.aC=c
s=r
try{r=d.$1(e)
return r}finally{$.aC=s}},
jj:function jj(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
d8:function d8(){this.c=0},
jy:function jy(a,b){this.a=a
this.b=b},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b){this.a=a
this.b=b},
bX:function bX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d5:function d5(a){this.a=a},
f3:function f3(a){this.a=a
this.b=null},
cF:function cF(){},
ey:function ey(){},
cG:function cG(){},
jD:function jD(){},
jK:function jK(a,b){this.a=a
this.b=b},
jq:function jq(){},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function(a,b){return new H.z(a.T("@<0>").bt(b).T("z<1,2>"))},
n0:function(a,b,c){return H.pb(a,new H.z(b.T("@<0>").bt(c).T("z<1,2>")))},
l2:function(a,b){return new H.z(a.T("@<0>").bt(b).T("z<1,2>"))},
l3:function(a){return new P.cV(a.T("cV<0>"))},
ko:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nG:function(a,b){var s=new P.cW(a,b)
s.c=a.e
return s},
mV:function(a,b,c){var s,r
if(P.kC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ab.push(a)
try{P.ou(a,s)}finally{if(0>=$.ab.length)return H.b($.ab,-1)
$.ab.pop()}r=P.lk(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kc:function(a,b,c){var s,r
if(P.kC(a))return b+"..."+c
s=new P.U(b)
$.ab.push(a)
try{r=s
r.a=P.lk(r.a,a,", ")}finally{if(0>=$.ab.length)return H.b($.ab,-1)
$.ab.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kC:function(a){var s,r
for(s=$.ab.length,r=0;r<s;++r)if(a===$.ab[r])return!0
return!1},
ou:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.f(l.gA(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gA(l);++j
if(!l.u()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA(l);++j
for(;l.u();p=o,o=n){n=l.gA(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
n1:function(a,b,c){var s=P.n_(b,c)
a.D(0,new P.hO(s,b,c))
return s},
kj:function(a){var s,r={}
if(P.kC(a))return"{...}"
s=new P.U("")
try{$.ab.push(a)
s.a+="{"
r.a=!0
J.k5(a,new P.hS(r,s))
s.a+="}"}finally{if(0>=$.ab.length)return H.b($.ab,-1)
$.ab.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cV:function cV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cn:function cn(){},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(){},
i:function i(){},
cv:function cv(){},
hS:function hS(a,b){this.a=a
this.b=b},
av:function av(){},
fV:function fV(){},
cw:function cw(){},
bU:function bU(a,b){this.a=a
this.$ti=b},
d2:function d2(){},
cX:function cX(){},
dc:function dc(){},
nw:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nx(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nx:function(a,b,c,d){var s=a?$.mu():$.mt()
if(s==null)return null
if(0===c&&d===b.length)return P.lv(s,b)
return P.lv(s,b.subarray(c,P.b0(c,d,b.length)))},
lv:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.b8(r)}return null},
kP:function(a,b,c,d,e,f){if(C.c.b9(f,4)!==0)throw H.c(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a_("Invalid base64 padding, more than two '=' characters",a,b))},
ob:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oa:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.Y()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aU(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.ae()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
j0:function j0(){},
j1:function j1(){},
he:function he(){},
hf:function hf(){},
dx:function dx(){},
dz:function dz(){},
hv:function hv(){},
iZ:function iZ(){},
j2:function j2(){},
jC:function jC(a){this.b=0
this.c=a},
j_:function j_(a){this.a=a},
jB:function jB(a){this.a=a
this.b=16
this.c=0},
jT:function(a,b){var s=H.lc(a,b)
if(s!=null)return s
throw H.c(P.a_(a,null,null))},
mT:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.f(H.eg(a))+"'"},
hP:function(a,b,c,d){var s,r=c?J.kd(a,d):J.mW(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ki:function(a,b,c){var s,r=H.d([],c.T("t<0>"))
for(s=J.bc(a);s.u();)r.push(s.gA(s))
if(b)return r
return J.ke(r)},
n2:function(a,b,c){var s,r,q=J.kd(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
eA:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.b0(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a9()
q=c<r}else q=!0
return H.ld(q?s.slice(b,c):s)}if(t.bm.b(a))return H.ng(a,b,P.b0(b,c,a.length))
return P.np(a,b,c)},
np:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a0(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a0(c,b,a.length,o,o))
r=J.bc(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.a0(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gA(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.a0(c,b,q,o,o))
p.push(r.gA(r))}return H.ld(p)},
nh:function(a){return new H.dN(a,H.mZ(a,!1,!0,!1,!1,!1))},
lk:function(a,b,c){var s=J.bc(b)
if(!s.u())return a
if(c.length===0){do a+=H.f(s.gA(s))
while(s.u())}else{a+=H.f(s.gA(s))
for(;s.u();)a=a+c+H.f(s.gA(s))}return a},
ls:function(){var s=H.n7()
if(s!=null)return P.nv(s)
throw H.c(P.y("'Uri.base' is not supported"))},
ky:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mz().b
if(typeof b!="string")H.p(H.aq(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghb().bW(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aO(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mR:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dB:function(a){if(a>=10)return""+a
return"0"+a},
kX:function(a){return new P.bg(1000*a)},
hy:function(a){if(typeof a=="number"||H.kA(a)||null==a)return J.ar(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mT(a)},
h9:function(a){return new P.dp(a)},
c6:function(a){return new P.ah(!1,null,null,a)},
kO:function(a,b,c){return new P.ah(!0,a,b,c)},
mH:function(a,b){if(a==null)throw H.c(new P.ah(!1,null,b,"Must not be null"))
return a},
le:function(a){var s=null
return new P.bQ(s,s,!1,s,s,a)},
eh:function(a,b){return new P.bQ(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.bQ(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.u(c)
s=a>c}else s=!0
if(s)throw H.c(P.a0(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
s=b>c}else s=!0
if(s)throw H.c(P.a0(b,a,c,"end",null))
return b}return c},
lf:function(a,b){if(a<0)throw H.c(P.a0(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aW(b):e
return new P.dK(s,!0,a,c,"Index out of range")},
y:function(a){return new P.eW(a)},
iS:function(a){return new P.eT(a)},
bE:function(a){return new P.dy(a)},
q:function(a){return new P.fh(a)},
a_:function(a,b,c){return new P.hE(a,b,c)},
kK:function(a){H.pl(a)},
nv:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.lr(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gdM()
else if(s===32)return P.lr(C.a.t(a5,5,a4),0,a3).gdM()}r=P.hP(8,0,!1,t.S)
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
if(P.m0(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.m0(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a5(a5,"..",m)))h=l>m+2&&C.a.a5(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a5(a5,"file",0)){if(o<=0){if(!C.a.a5(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.t(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aN(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a5(a5,"http",0)){if(q&&n+3===m&&C.a.a5(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aN(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a5(a5,"https",0)){if(q&&n+4===m&&C.a.a5(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aN(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fC(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.o4(a5,0,p)
else{if(p===0)P.bY(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.o5(a5,d,o-1):""
b=P.o1(a5,o,n,!1)
q=n+1
if(q<m){a=H.lc(C.a.t(a5,q,m),a3)
a0=P.o3(a==null?H.p(P.a_("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.o2(a5,m,l,a3,i,b!=null)
a2=l<k?P.kv(a5,l+1,k,a3):a3
return new P.bu(i,c,b,a0,a1,a2,k<a4?P.o0(a5,k+1,a4):a3)},
lu:function(a){var s=t.N
return C.b.hg(H.d(a.split("&"),t.s),P.l2(s,s),new P.iX(C.e))},
nu:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.iU(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.U(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.jT(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.a_()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.jT(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.a_()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
lt:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.iV(a),b=new P.iW(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.U(a,r)
if(n===58){if(r===a0){++r
if(C.a.U(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaA(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.nu(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aI(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
lO:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bY:function(a,b,c){throw H.c(P.a_(c,a,b))},
o3:function(a,b){if(a!=null&&a===P.lO(b))return null
return a},
o1:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.bY(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.nZ(a,r,s)
if(q<s){p=q+1
o=P.lT(a,C.a.a5(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lt(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bi(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.lT(a,C.a.a5(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lt(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.o7(a,b,c)},
nZ:function(a,b,c){var s=C.a.bi(a,"%",b)
return s>=b&&s<c?s:c},
lT:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.U(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.kw(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.U("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.bY(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.U("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.U("")
n=i}else n=i
n.a+=j
n.a+=P.ku(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
o7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.kw(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.U("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.U("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.bY(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.U("")
m=q}else m=q
m.a+=l
m.a+=P.ku(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
o4:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lQ(C.a.C(a,b)))P.bY(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.bY(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.nY(r?a.toLowerCase():a)},
nY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o5:function(a,b,c){return P.dd(a,b,c,C.U,!1)},
o2:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dd(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.af(s,"/"))s="/"+s
return P.o6(s,e,f)},
o6:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.af(a,"/"))return P.o8(a,!s||c)
return P.o9(a)},
kv:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.c6("Both query and queryParameters specified"))
return P.dd(a,b,c,C.l,!0)}if(d==null)return null
s=new P.U("")
r.a=""
d.D(0,new P.jz(new P.jA(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
o0:function(a,b,c){return P.dd(a,b,c,C.l,!0)},
kw:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.jP(s)
p=H.jP(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aI(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aO(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
ku:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.C(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.C(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.fJ(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.C(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.C(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.eA(s,0,null)},
dd:function(a,b,c,d,e){var s=P.lS(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
lS:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kw(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.bY(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.ku(o)}}if(p==null){p=new P.U("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.u(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
lR:function(a){if(C.a.af(a,"."))return!0
return C.a.ds(a,"/.")!==-1},
o9:function(a){var s,r,q,p,o,n,m
if(!P.lR(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.D(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.p(s,"/")},
o8:function(a,b){var s,r,q,p,o,n
if(!P.lR(a))return!b?P.lP(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaA(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaA(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.lP(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.p(s,"/")},
lP:function(a){var s,r,q,p=a.length
if(p>=2&&P.lQ(J.mB(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.am(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
o_:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.c6("Invalid URL encoding"))}}return s},
kx:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.N(C.a.t(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.c(P.c6("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.c6("Truncated URI"))
p.push(P.o_(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a0.bW(p)},
lQ:function(a){var s=a|32
return 97<=s&&s<=122},
lr:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a_(k,a,r))}}if(q<0&&r>b)throw H.c(P.a_(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaA(j)
if(p!==44||r!==n+7||!C.a.a5(a,"base64",n+1))throw H.c(P.a_("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.G.hp(0,a,m,s)
else{l=P.lS(a,m,s,C.l,!0)
if(l!=null)a=C.a.aN(a,m,s,l)}return new P.iT(a,j,c)},
og:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.n2(22,new P.jF(),t.gc),l=new P.jE(m),k=new P.jG(),j=new P.jH(),i=l.$2(0,225)
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
m0:function(a,b,c,d,e){var s,r,q,p,o,n=$.mA()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.C(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
aT:function aT(){},
ad:function ad(a,b){this.a=a
this.b=b},
W:function W(){},
bg:function bg(a){this.a=a},
hs:function hs(){},
ht:function ht(){},
J:function J(){},
dp:function dp(a){this.a=a},
e6:function e6(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dK:function dK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eW:function eW(a){this.a=a},
eT:function eT(a){this.a=a},
ew:function ew(a){this.a=a},
dy:function dy(a){this.a=a},
e9:function e9(){},
cE:function cE(){},
dA:function dA(a){this.a=a},
fh:function fh(a){this.a=a},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
h:function h(){},
dL:function dL(){},
n:function n(){},
F:function F(){},
ak:function ak(){},
O:function O(){},
L:function L(){},
A:function A(){},
U:function U(a){this.a=a},
iX:function iX(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jA:function jA(a,b){this.a=a
this.b=b},
jz:function jz(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(){},
jE:function jE(a){this.a=a},
jG:function jG(){},
jH:function jH(){},
fC:function fC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
f9:function f9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
b7:function(a){var s,r,q,p,o
if(a==null)return null
s=P.l2(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.j(0,o,a[o])}return s},
p7:function(a){var s={}
a.D(0,new P.jL(s))
return s},
jt:function jt(){},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
ju:function ju(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.b=b},
hC:function hC(){},
hD:function hD(){},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fA:function fA(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aJ:function aJ(){},
dR:function dR(){},
aM:function aM(){},
e7:function e7(){},
ig:function ig(){},
ez:function ez(){},
m:function m(){},
aP:function aP(){},
eL:function eL(){},
fo:function fo(){},
fp:function fp(){},
fw:function fw(){},
fx:function fx(){},
fK:function fK(){},
fL:function fL(){},
fR:function fR(){},
fS:function fS(){},
b2:function b2(){},
hb:function hb(){},
dr:function dr(){},
hc:function hc(a){this.a=a},
ds:function ds(){},
aX:function aX(){},
e8:function e8(){},
f4:function f4(){},
el:function el(){},
eu:function eu(){},
fG:function fG(){},
fH:function fH(){}},W={
kU:function(){var s=document.createElement("canvas")
return s},
hu:function(a){return"wheel"},
mU:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.b8(s)}return q},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lG:function(a,b,c,d){var s=W.jn(W.jn(W.jn(W.jn(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Y:function(a,b,c,d){var s=new W.fg(a,b,c==null?null:W.m1(new W.jm(c),t.G),!1)
s.fQ()
return s},
m1:function(a,b){var s=$.aC
if(s===C.f)return a
return s.d1(a,b)},
o:function o(){},
h7:function h7(){},
dm:function dm(){},
dn:function dn(){},
bd:function bd(){},
be:function be(){},
as:function as(){},
hl:function hl(){},
G:function G(){},
ce:function ce(){},
hm:function hm(){},
ai:function ai(){},
aF:function aF(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
cf:function cf(){},
cg:function cg(){},
dD:function dD(){},
hr:function hr(){},
f6:function f6(a,b){this.a=a
this.b=b},
H:function H(){},
k:function k(){},
e:function e(){},
ae:function ae(){},
bF:function bF(){},
dG:function dG(){},
dI:function dI(){},
at:function at(){},
hG:function hG(){},
bj:function bj(){},
cl:function cl(){},
bH:function bH(){},
bl:function bl(){},
hQ:function hQ(){},
i8:function i8(){},
bJ:function bJ(){},
dY:function dY(){},
i9:function i9(a){this.a=a},
dZ:function dZ(){},
ia:function ia(a){this.a=a},
ax:function ax(){},
e_:function e_(){},
af:function af(){},
f5:function f5(a){this.a=a},
v:function v(){},
cB:function cB(){},
ay:function ay(){},
ec:function ec(){},
em:function em(){},
io:function io(a){this.a=a},
eo:function eo(){},
am:function am(){},
eq:function eq(){},
az:function az(){},
er:function er(){},
aA:function aA(){},
ex:function ex(){},
iz:function iz(a){this.a=a},
an:function an(){},
b1:function b1(){},
ao:function ao(){},
a9:function a9(){},
eC:function eC(){},
eD:function eD(){},
iF:function iF(){},
aB:function aB(){},
br:function br(){},
eK:function eK(){},
iI:function iI(){},
aR:function aR(){},
iY:function iY(){},
f_:function f_(){},
b3:function b3(){},
bV:function bV(){},
f7:function f7(){},
cU:function cU(){},
fl:function fl(){},
cY:function cY(){},
fF:function fF(){},
fM:function fM(){},
ka:function ka(a,b){this.a=a
this.$ti=b},
fg:function fg(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jm:function jm(a){this.a=a},
kn:function kn(a){this.$ti=a},
K:function K(){},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
f8:function f8(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fi:function fi(){},
fj:function fj(){},
fm:function fm(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fy:function fy(){},
fz:function fz(){},
fB:function fB(){},
d3:function d3(){},
d4:function d4(){},
fD:function fD(){},
fE:function fE(){},
fJ:function fJ(){},
fN:function fN(){},
fO:function fO(){},
d6:function d6(){},
d7:function d7(){},
fP:function fP(){},
fQ:function fQ(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){}},K={
a2:function(a){var s=new K.ip()
s.dZ(a)
return s},
h8:function h8(){},
dJ:function dJ(){},
hT:function hT(){},
aZ:function aZ(){this.a=null},
ip:function ip(){this.a=null}},L={ev:function ev(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},eJ:function eJ(a){this.b=a
this.c=null},iG:function iG(){var _=this
_.d=_.c=_.b=_.a=null},eM:function eM(a){this.b=a
this.a=this.c=null}},O={
hi:function(a){var s=new O.Z(a.T("Z<0>"))
s.ba(a)
return s},
Z:function Z(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cx:function cx(){this.b=this.a=null},
lm:function(a,b){var s,r,q,p,o=new O.bq()
o.saj(b)
o.sd7(null)
s=V.ek()
if(!J.D(o.c,s)){r=o.c
o.c=s
q=new D.w("source",r,s)
q.b=!0
o.K(q)}p=a==null?V.ek():a
if(!J.D(o.d,p)){r=o.d
o.d=p
q=new D.w("destination",r,p)
q.b=!0
o.K(q)}if(o.e!==!1){o.e=!1
q=new D.w("flip",!0,!1)
q.b=!0
o.K(q)}o.f=null
return o},
dU:function dU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(){},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(){},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(){},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(){},
hU:function hU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dW:function dW(){},
hV:function hV(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aK:function aK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hX:function hX(){var _=this
_.e=_.d=_.c=_.b=null},
hY:function hY(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hZ:function hZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eB:function eB(){},
eF:function eF(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bq:function bq(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
kY:function(){var s,r=new E.bh()
r.a=""
r.b=!0
s=O.hi(t.l)
r.y=s
s.aD(r.ghq(),r.ght())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbs(0,null)
return r},
lC:function(){if(J.k3(window.navigator.vendor,"Google"))return C.E
if(J.k3(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.aU(s).P(s,"Trident")||C.a.P(s,"Edge"))return C.t
if(J.k3(window.navigator.appName,"Microsoft"))return C.t
return C.F},
lD:function(){var s=window.navigator.appVersion
if(J.aU(s).P(s,"Win"))return C.X
if(C.a.P(s,"Mac"))return C.A
if(C.a.P(s,"Linux"))return C.Y
return C.Z},
ni:function(a,b){var s=new E.ij(a)
s.dY(a,b)
return s},
ns:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.ln(a,!0,!0,!0,!1)
s=W.kU()
r=s.style
r.width="100%"
r.height="100%"
J.k6(a).l(0,s)
return E.ln(s,!0,!0,!0,!1)},
ln:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eH(),n=t.z,m=C.n.dO(a,"webgl2",P.n0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.q("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.ni(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.eY(a)
s=new X.hK()
s.c=new X.aj(!1,!1,!1)
s.d=P.l3(t.e)
n.b=s
s=new X.ib(n)
s.f=0
s.r=V.b_()
s.x=V.b_()
s.ch=s.Q=1
n.c=s
s=new X.hR(n)
s.r=0
s.x=V.b_()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iH(n)
s.f=V.b_()
s.r=V.b_()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hw
n.Q=(s==null?$.hw=new E.fe(E.lC(),E.lD()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Y(q,"contextmenu",n.geJ(),!1))
n.z.push(W.Y(a,"focus",n.geT(),!1))
n.z.push(W.Y(a,"blur",n.geD(),!1))
n.z.push(W.Y(q,"keyup",n.geX(),!1))
n.z.push(W.Y(q,"keydown",n.geV(),!1))
n.z.push(W.Y(a,"mousedown",n.gf0(),!1))
n.z.push(W.Y(a,"mouseup",n.gf4(),!1))
n.z.push(W.Y(a,p,n.gf2(),!1))
r=n.z
W.hu(a)
W.hu(a)
r.push(W.Y(a,W.hu(a),n.gf6(),!1))
n.z.push(W.Y(q,p,n.geL(),!1))
n.z.push(W.Y(q,"mouseup",n.geN(),!1))
n.z.push(W.Y(q,"pointerlockchange",n.gf8(),!1))
n.z.push(W.Y(a,"touchstart",n.gfo(),!1))
n.z.push(W.Y(a,"touchend",n.gfk(),!1))
n.z.push(W.Y(a,"touchmove",n.gfm(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ad(Date.now(),!1)
o.db=0
o.cN()
return o},
hg:function hg(){},
bh:function bh(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bB:function bB(a){this.b=a},
bO:function bO(a){this.b=a},
fe:function fe(a,b){this.a=a
this.b=b},
ij:function ij(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
eH:function eH(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
iE:function iE(a){this.a=a}},Z={
lB:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bv(c)),35044)
a.bindBuffer(b,null)
return new Z.f0(b,s)},
ap:function(a){return new Z.bt(a)},
f0:function f0(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
f1:function f1(a){this.a=a},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a){this.a=a}},D={
E:function(){var s=new D.bi()
s.d=0
return s},
hh:function hh(){},
bi:function bi(){var _=this
_.d=_.c=_.b=_.a=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
P:function P(){this.b=null},
aG:function aG(){this.b=null},
aH:function aH(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dt:function dt(){},
bf:function bf(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Q:function Q(){},
cr:function cr(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
ed:function ed(){},
es:function es(){}},X={dw:function dw(a,b){this.a=a
this.b=b},dP:function dP(a,b){this.a=a
this.b=b},hK:function hK(){var _=this
_.d=_.c=_.b=_.a=null},cu:function cu(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hR:function hR(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},bK:function bK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ib:function ib(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bL:function bL(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ee:function ee(){},cH:function cH(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iH:function iH(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eY:function eY(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kb:function(a){var s,r=new X.hF()
if(a==null)s=new V.a7(0,0,0,1)
else s=a
r.a=s
r.b=!0
r.c=2000
r.d=!0
r.e=0
r.f=!1
s=V.ek()
r.r=s
return r},
l6:function(a){var s,r,q=new X.ea()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.ge5())
r=new D.w("mover",s,q.b)
r.b=!0
q.a0(r)}r=q.c
$.B().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.w("fov",r,1.0471975511965976)
r.b=!0
q.a0(r)}r=q.d
$.B().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.w("near",r,0.1)
r.b=!0
q.a0(r)}r=q.e
$.B().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.w("far",r,2000)
r.b=!0
q.a0(r)}return q},
hd:function hd(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k8:function k8(){},
hF:function hF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(){this.b=this.a=null},
ea:function ea(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(){}},V={
hj:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a7(s,r,q,1)},
ps:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.b9(a-b,s)
return(a<0?a+s:a)+b},
I:function(a,b,c){if(a==null)return C.a.aB("null",c)
$.B().toString
return C.a.aB(C.d.dK(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c3:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.r)(a),++q){p=V.I(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.b(m,o)
s=C.a.aB(m[o],r)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=s}return m},
kJ:function(a){return C.d.hN(Math.pow(2,C.R.c6(Math.log(H.p5(a))/Math.log(2))))},
bn:function(){var s=$.i7
return s==null?$.i7=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l4:function(a,b,c){var s=c.F(),r=b.ay(s).F(),q=s.ay(r),p=new V.C(a.a,a.b,a.c),o=r.N(0).a4(p),n=q.N(0).a4(p),m=s.N(0).a4(p)
return V.aw(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
b_:function(){var s=$.l8
return s==null?$.l8=new V.a8(0,0):s},
l9:function(){var s=$.aN
return s==null?$.aN=new V.T(0,0,0):s},
ek:function(){var s=$.cD
return s==null?$.cD=V.ej(0,0,1,1):s},
ej:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ei(a,b,c,d)},
cS:function(){var s=$.lz
return s==null?$.lz=new V.C(0,0,0):s},
ny:function(){var s=$.j3
return s==null?$.j3=new V.C(-1,0,0):s},
km:function(){var s=$.j4
return s==null?$.j4=new V.C(0,1,0):s},
lA:function(){var s=$.j5
return s==null?$.j5=new V.C(0,0,1):s},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(){},
dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aL:function aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a8:function a8(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
pm:function(a){P.nt(C.P,new V.k0(a))},
nl:function(a){var s=new V.iu()
s.e_(a,!0)
return s},
k0:function k0(a){this.a=a},
ih:function ih(a){this.a=a
this.c=null},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(){this.b=this.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a}},U={
k9:function(){var s=new U.hk()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
kW:function(a){var s=new U.ca()
s.a=a
return s},
hk:function hk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ca:function ca(){this.b=this.a=null},
bG:function bG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
R:function R(){},
cP:function cP(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c9:function c9(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cd:function cd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ci:function ci(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a1:function a1(){}},A={
n4:function(a,b){var s=a.aY,r=new A.dV(b,s)
r.ct(b,s)
r.dX(a,b)
return r},
n5:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gao(a4)+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+b0.gao(b0)+b1.gao(b1)+b2.gao(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.r)(b3),++r)b+="_"+H.f(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.r)(b4),++r)b+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)b+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)b+="_"+H.f(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.aD()
if(h){s=$.bb()
c=new Z.bt(c.a|s.a)}if(g){s=$.ba()
c=new Z.bt(c.a|s.a)}if(f){s=$.b9()
c=new Z.bt(c.a|s.a)}return new A.hW(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jJ:function(a,b,c){var s
A.jI(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.h6(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
oA:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jI(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
ow:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jJ(b,r,"ambient")
b.a+="\n"},
oy:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jJ(b,r,"diffuse")
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
oB:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jJ(b,r,"invDiffuse")
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
oH:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jJ(b,r,"specular")
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
oD:function(a,b){var s,r,q
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
oF:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jI(b,r,"reflect")
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
oG:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jI(b,r,"refract")
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
ox:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.h6(r)
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
if(typeof s!=="number")return s.ae()
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
o=H.d([],p)
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
o=H.d([],p)
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
n=H.d([],p)
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
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
oz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.h6(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ae()
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
m=H.d([],p)
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
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
oE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.h6(r)
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
if(typeof s!=="number")return s.ae()
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
j=H.d([],p)
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
j=H.d([],p)
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
i=H.d([],p)
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
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
oI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.h6(r)
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
if(typeof s!=="number")return s.ae()
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
if(m){s=$.hw
if(s==null)s=$.hw=new E.fe(E.lC(),E.lD())
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
c.a=s+"\n"}s=t.i
h=H.d([],s)
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
h=H.d([],s)
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
g=H.d([],s)
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
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
oC:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.d([],t.i)
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
s=b.a+="   return "+C.b.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oJ:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.U("")
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
A.oA(a,h)
A.ow(a,h)
A.oy(a,h)
A.oB(a,h)
A.oH(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.oF(a,h)
A.oG(a,h)}A.oD(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.ox(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.oz(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.oE(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.oI(a,o[m],h)
A.oC(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.d([],t.i)
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
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.p(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
oK:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bg+"];\n"
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
oM:function(a,b){var s
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
oL:function(a,b){var s
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
oO:function(a,b){var s,r
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
oP:function(a,b){var s,r
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
oN:function(a,b){var s
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
oQ:function(a,b){var s
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
h6:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.am(a,1)},
nr:function(a,b){var s,r,q,p
for(s=0,r="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";s<a;++s)r=r+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
r+="\nvec4 clrAccum;\n"
q=b===C.x
r=(q||b===C.o?r+"float colorCount;\n":r)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.w)r+="      clrAccum += color;\n"
else if(b===C.i)r+="      clrAccum = mix(clrAccum, color, color.a);\n"
else r=q?r+"      clrAccum += color;\n      colorCount += 1.0;\n":r+"      clrAccum = color;\n      colorCount = 1.0;\n"
r+="   }\n}\n\nvoid layoutAll()\n{\n"
p=b===C.o
if(p)for(s=a-1;s>=0;--s)r=r+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)r=r+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
r+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(q)r+="   colorCount = 1.0;\n"
else if(p)r+="   colorCount = 0.0;\n"
r+="   layoutAll();\n"
r=(q?r+"   clrAccum = clrAccum/colorCount;\n":r)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return r.charCodeAt(0)==0?r:r},
nq:function(a,b,c){var s="TextureLayout_"+a+"_"+C.c.i(b.a),r=new A.eG(c,s)
r.ct(c,s)
r.e0(a,b,c)
return r},
kl:function(a,b,c,d,e){var s=new A.iM(a,c,e)
s.f=d
P.hP(d,0,!1,t.e)
return s},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a){this.a=a},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b){var _=this
_.i_=_.hZ=_.bh=_.aY=_.bg=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ic=_.ib=_.ia=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.i9=_.i8=_.dl=_.i7=_.i6=_.dk=_.dj=_.i5=_.i4=_.di=_.dh=_.i3=_.i2=_.dg=_.i1=_.i0=_.df=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
du:function du(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
hW:function hW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bg=b5
_.aY=b6
_.bh=b7},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cK:function cK(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cM:function cM(a,b,c,d,e,f,g,h,i,j){var _=this
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
cO:function cO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bR:function bR(){},
bD:function bD(a,b){this.a=a
this.b=b},
eG:function eG(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eN:function eN(){},
iQ:function iQ(a){this.a=a},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
eO:function eO(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
eP:function eP(a,b,c){this.a=a
this.c=b
this.d=c},
eQ:function eQ(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
eR:function eR(a,b,c){this.a=a
this.c=b
this.d=c},
cL:function cL(a,b,c){this.a=a
this.c=b
this.d=c},
cN:function cN(a,b,c){this.a=a
this.c=b
this.d=c},
eS:function eS(a,b,c){this.a=a
this.c=b
this.d=c}},F={
pr:function(){return F.p8(15,30,0.5,1,new F.k1())},
p8:function(a,b,c,d,e){var s=F.po(a,b,new F.jM(e,d,b,c))
if(s==null)return null
s.ax()
s.ho(new F.jc(),new F.ic())
return s},
po:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.lj()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.j6(e,e,new V.a7(n,0,0,1),e,e,new V.a8(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.d8(e))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.j6(e,e,new V.a7(h,g,f,1),e,e,new V.a8(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.d8(e))}}s.d.fV(a+1,b+1,r)
return s},
dF:function(a,b,c){var s=new F.dE(),r=a.a
if(r==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.q("May not create a face with vertices attached to different shapes."))
s.fD(a)
s.fE(b)
s.fF(c)
s.a.a.d.b.push(s)
s.a.a.ac()
return s},
lj:function(){var s=new F.iq(),r=new F.j7(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.it()
r.b=H.d([],t.H)
s.b=r
r=new F.is(s)
r.b=H.d([],t.B)
s.c=r
r=new F.ir(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
j6:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.eZ(),p=new F.jf()
p.b=H.d([],t.H)
q.b=p
p=new F.jb()
s=t.B
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.j8()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.mv()
q.e=0
p=$.aD()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bb().a)!==0?e:r
q.x=(s&$.ba().a)!==0?b:r
q.y=(s&$.bz().a)!==0?f:r
q.z=(s&$.bA().a)!==0?g:r
q.Q=(s&$.mw().a)!==0?c:r
q.ch=(s&$.c4().a)!==0?i:0
q.cx=(s&$.b9().a)!==0?a:r
return q},
k1:function k1(){},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(){},
ix:function ix(){},
hL:function hL(){},
hM:function hM(){},
iL:function iL(){},
ie:function ie(){},
iq:function iq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
it:function it(){this.b=null},
eZ:function eZ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jh:function jh(a){this.a=a},
jg:function jg(a){this.a=a},
j7:function j7(a){this.a=a
this.c=this.b=null},
j8:function j8(){this.d=this.c=this.b=null},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(){this.c=this.b=null},
jd:function jd(){},
jc:function jc(){},
je:function je(){},
ic:function ic(){},
jf:function jf(){this.b=null}},T={
ll:function(a){var s=new T.iD()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
eE:function eE(){},
iC:function iC(){},
iD:function iD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},S={
m9:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3="testCanvas",b4=null,b5="modifiers",b6=V.nl("Test 036"),b7=W.kU()
b7.className="pageLargeCanvas"
b7.id=b3
b6.a.appendChild(b7)
s=t.i
b6.cX(H.d(["Test of the texture layout cover technique."],s))
b6.fS(H.d(["blends"],s))
b6.cX(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b3)
if(r==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
q=E.ns(r,!0,!0,!0,!1)
p=new U.bG()
p.ba(t.ah)
p.aD(p.gev(),p.gfc())
p.e=null
p.f=V.bn()
p.r=0
b6=q.x
o=new U.cQ()
n=U.k9()
n.scn(0,!0)
n.sca(6.283185307179586)
n.scc(0)
n.saa(0,0)
n.scb(100)
n.sS(0)
n.sbX(0.5)
o.b=n
m=o.gaG()
n.gm().l(0,m)
n=U.k9()
n.scn(0,!0)
n.sca(6.283185307179586)
n.scc(0)
n.saa(0,0)
n.scb(100)
n.sS(0)
n.sbX(0.5)
o.c=n
n.gm().l(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.aj(!1,!1,!1)
k=o.d
o.d=l
n=new D.w(b5,k,l)
n.b=!0
o.I(n)
n=o.f
if(n!==!1){o.f=!1
n=new D.w("invertX",n,!1)
n.b=!0
o.I(n)}n=o.r
if(n!==!1){o.r=!1
n=new D.w("invertY",n,!1)
n.b=!0
o.I(n)}o.aV(b6)
p.l(0,o)
b6=q.x
o=new U.cP()
n=U.k9()
n.scn(0,!0)
n.sca(6.283185307179586)
n.scc(0)
n.saa(0,0)
n.scb(100)
n.sS(0)
n.sbX(0.2)
o.b=n
n.gm().l(0,o.gaG())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.aj(!0,!1,!1)
k=o.c
o.c=l
n=new D.w(b5,k,l)
n.b=!0
o.I(n)
o.aV(b6)
p.l(0,o)
b6=q.x
o=new U.cR()
o.c=0.01
o.e=o.d=0
l=new X.aj(!1,!1,!1)
o.b=l
n=new D.w(b5,b4,l)
n.b=!0
o.I(n)
o.aV(b6)
p.l(0,o)
p.l(0,U.kW(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.l6(p)
i=new V.a7(0,0,0,0)
h=new X.hd()
h.d=h.c=h.b=h.a=512
h.e=!0
h.f=!1
h.x=h.r=1
h.ch=T.ll(b4)
h.cx=new V.a7(0,0,0,1)
h.cy=!0
h.db=2000
h.dx=!0
h.dy=V.ek()
h.sak(0,512)
h.sag(0,512)
if(!h.cx.n(0,i)){k=h.cx
h.cx=i
b6=new D.w("color",k,i)
b6.b=!0
h.a0(b6)}b6=h.db
$.B().toString
if(!(Math.abs(b6-2000)<1e-9)){h.db=2000
b6=new D.w("depth",b6,2000)
b6.b=!0
h.a0(b6)}if(!h.f){h.f=!0
b6=new D.w("autoResize",!1,!0)
b6.b=!0
h.a0(b6)}b6=h.r
$.B().toString
if(!(Math.abs(b6-1)<1e-9)){h.r=1
b6=new D.w("autoResizeScalarX",b6,1)
b6.b=!0
h.a0(b6)}b6=h.x
$.B().toString
if(!(Math.abs(b6-1)<1e-9)){h.x=1
b6=new D.w("autoResizeScalarY",b6,1)
b6.b=!0
h.a0(b6)}g=V.ek()
if(!J.D(h.dy,g)){k=h.dy
h.dy=g
b6=new D.w("region",k,g)
b6.b=!0
h.a0(b6)}f=E.kY()
f.sbs(0,F.pr())
e=new O.dU()
b6=O.hi(t.hc)
e.e=b6
b6.aD(e.gez(),e.geB())
b6=new O.aK(e,"emission")
b6.c=new A.a4(!1,!1,!1)
b6.f=new V.X(0,0,0)
e.f=b6
b6=new O.aK(e,"ambient")
b6.c=new A.a4(!1,!1,!1)
b6.f=new V.X(0,0,0)
e.r=b6
b6=new O.aK(e,"diffuse")
b6.c=new A.a4(!1,!1,!1)
b6.f=new V.X(0,0,0)
e.x=b6
b6=new O.aK(e,"invDiffuse")
b6.c=new A.a4(!1,!1,!1)
b6.f=new V.X(0,0,0)
e.y=b6
b6=new O.hZ(e,"specular")
b6.c=new A.a4(!1,!1,!1)
b6.f=new V.X(0,0,0)
b6.ch=100
e.z=b6
b6=new O.hV(e,"bump")
b6.c=new A.a4(!1,!1,!1)
e.Q=b6
e.ch=null
b6=new O.aK(e,"reflect")
b6.c=new A.a4(!1,!1,!1)
b6.f=new V.X(0,0,0)
e.cx=b6
b6=new O.hY(e,"refract")
b6.c=new A.a4(!1,!1,!1)
b6.f=new V.X(0,0,0)
b6.ch=1
e.cy=b6
b6=new O.hU(e,"alpha")
b6.c=new A.a4(!1,!1,!1)
b6.f=1
e.db=b6
b6=new D.cr()
b6.ba(t.gj)
b6.e=H.d([],t.bb)
b6.f=H.d([],t.cP)
b6.r=H.d([],t.k)
b6.x=H.d([],t.du)
b6.z=b6.y=null
b6.co(b6.gex(),b6.gfa(),b6.gfe())
e.dx=b6
o=new O.hX()
o.b=new V.a7(0,0,0,0)
o.c=1
o.d=10
o.e=!1
e.dy=o
o=b6.y
b6=o==null?b6.y=D.E():o
b6.l(0,e.gfA())
b6=e.dx
o=b6.z
b6=o==null?b6.z=D.E():o
b6.l(0,e.gas())
e.fr=null
b6=e.dx
d=V.km()
o=U.kW(V.l4(V.l9(),d,new V.C(0,-1,-1)))
i=new V.X(1,1,1)
n=new D.bf()
n.c=new V.X(1,1,1)
n.a=V.lA()
n.d=V.km()
n.e=V.ny()
k=n.b
n.b=o
o.gm().l(0,n.ge1())
o=new D.w("mover",k,n.b)
o.b=!0
n.ar(o)
if(!n.c.n(0,i)){k=n.c
n.c=i
o=new D.w("color",k,i)
o.b=!0
n.ar(o)}b6.l(0,n)
b6=e.r
b6.saK(0,new V.X(0,0,1))
b6=e.x
b6.saK(0,new V.X(0,1,0))
b6=e.z
b6.saK(0,new V.X(1,0,0))
b6=e.z
b6.cP(new A.a4(!0,!1,!1))
b6.cQ(10)
c=new M.ci()
c.a=!0
b6=O.hi(t.l)
c.e=b6
b6.aD(c.geF(),c.geH())
c.y=c.x=c.r=c.f=null
b=X.kb(b4)
c.sd4(b4)
c.sb5(0,b)
c.sb6(b4)
c.sd4(j)
c.sb6(e)
c.sb5(0,h)
c.e.l(0,f)
a=new V.a7(0,0,0,1)
a0=new O.eF()
a0.a=new V.a7(0,0,0,0)
b6=O.hi(t.au)
a0.c=b6
b6.aD(a0.geP(),a0.geR())
a0.d=0
a0.e=null
a0.r=a0.f=C.i
if(!a0.a.n(0,a)){k=a0.a
a0.a=a
b6=new D.w("backColor",k,a)
b6.b=!0
a0.K(b6)}a0.saW(C.i)
for(a1=0;a1<3;++a1){a2=a1*0.3333333333333333
for(a3=0;a3<3;++a3){b6=a0.c
o=h.ch
o=O.lm(V.ej(a2,a3*0.3333333333333333,0.3333333333333333,0.3333333333333333),o)
n=b6.$ti.T("t<Z.T*>")
if(b6.bL(H.d([o],n))){m=b6.a
a4=m.length
m.push(o)
n=H.d([o],n)
b6=b6.c
if(b6!=null)b6.$2(a4,n)}}}b6=a0.c
o=O.lm(b4,b4)
o.saj(h.ch)
o.sd7(V.aw(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1))
b6.l(0,o)
a5=X.kb(new V.a7(0,0,0,1))
a6=new M.cd()
a6.a=!0
b6=E.kY()
a7=F.lj()
o=a7.a
n=new V.C(-1,-1,1).F()
a8=o.bf(new V.bp(1,2,4,6),V.hj(255,0,0),new V.T(-1,-1,0),new V.a8(0,1),n,b4)
n=a7.a
o=new V.C(1,-1,1).F()
a9=n.bf(new V.bp(0,3,4,6),V.hj(0,0,255),new V.T(1,-1,0),new V.a8(1,1),o,b4)
o=a7.a
n=new V.C(1,1,1).F()
b0=o.bf(new V.bp(0,2,5,6),V.hj(0,128,0),new V.T(1,1,0),new V.a8(1,0),n,b4)
n=a7.a
o=V.b_()
m=new V.C(-1,1,1).F()
b1=n.bf(new V.bp(0,2,4,7),V.hj(255,255,0),new V.T(-1,1,0),o,m,b4)
a7.d.fU(H.d([a8,a9,b0,b1],t.j))
a7.ax()
b6.sbs(0,a7)
a6.e=b6
b2=new X.hH()
k=a6.b
a6.b=b2
b2.gm().l(0,a6.gW())
b6=new D.w("camera",k,a6.b)
b6.b=!0
a6.V(b6)
a6.sb5(0,b4)
a6.sb6(b4)
a6.sb6(a0)
a6.sb5(0,a5)
b6=H.d([c,a6],t.f2)
o=new M.c9()
o.ba(t.bn)
o.e=!0
o.f=!1
o.r=null
o.aD(o.gfg(),o.gfi())
o.be(0,b6)
b6=q.d
if(b6!==o){if(b6!=null)b6.gm().J(0,q.gcv())
q.d=o
o.gm().l(0,q.gcv())
q.cw()}b6=new V.ih("blends")
s=s.getElementById("blends")
b6.c=s
if(s==null)H.p("Failed to find blends for RadioGroup")
b6.bR(0,"Additive",new S.jW(a0))
b6.cW(0,"AlphaBlend",new S.jX(a0),!0)
b6.bR(0,"Average",new S.jY(a0))
b6.bR(0,"Overwrite",new S.jZ(a0))
V.pm(q)},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kf.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gL:function(a){return H.cC(a)},
i:function(a){return"Instance of '"+H.f(H.eg(a))+"'"}}
J.dM.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iaT:1}
J.cq.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0}}
J.aY.prototype={
gL:function(a){return 0},
i:function(a){return String(a)},
$il0:1}
J.eb.prototype={}
J.bs.prototype={}
J.au.prototype={
i:function(a){var s=a[$.mi()]
if(s==null)return this.dV(a)
return"JavaScript function for "+H.f(J.ar(s))}}
J.t.prototype={
ci:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eh(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.p(P.y("remove"))
for(s=0;s<a.length;++s)if(J.D(a[s],b)){a.splice(s,1)
return!0}return!1},
be:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.y("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.r)(b),++r)a.push(b[r])},
D:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bE(a))}},
p:function(a,b){var s,r,q=P.hP(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
hl:function(a){return this.p(a,"")},
hf:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bE(a))}return s},
hg:function(a,b,c){return this.hf(a,b,c,t.z)},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
ghe:function(a){if(a.length>0)return a[0]
throw H.c(H.l_())},
gaA:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l_())},
aR:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.no(a,b==null?J.on():b)},
dS:function(a){return this.aR(a,null)},
P:function(a,b){var s
for(s=0;s<a.length;++s)if(J.D(a[s],b))return!0
return!1},
i:function(a){return P.kc(a,"[","]")},
gM:function(a){return new J.a3(a,a.length)},
gL:function(a){return H.cC(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.y("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.c2(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c2(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.hI.prototype={}
J.a3.prototype={
gA:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bk.prototype={
aL:function(a,b){var s
if(typeof b!="number")throw H.c(H.aq(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbj(b)
if(this.gbj(a)===s)return 0
if(this.gbj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbj:function(a){return a===0?1/a<0:a<0},
hN:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.y(""+a+".toInt()"))},
c6:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.y(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dK:function(a,b){var s
if(b>20)throw H.c(P.a0(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbj(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
b9:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cS(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cS(a,b)},
cS:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.y("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aI:function(a,b){var s
if(a>0)s=this.cR(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fJ:function(a,b){if(b<0)throw H.c(H.aq(b))
return this.cR(a,b)},
cR:function(a,b){return b>31?0:a>>>b},
$iW:1,
$iO:1}
J.cp.prototype={$ij:1}
J.co.prototype={}
J.aI.prototype={
U:function(a,b){if(b<0)throw H.c(H.c2(a,b))
if(b>=a.length)H.p(H.c2(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.c2(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.kO(b,null,null))
return a+b},
aN:function(a,b,c,d){var s,r,q=P.b0(b,c,a.length)
if(!H.bZ(q))H.p(H.aq(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a5:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
af:function(a,b){return this.a5(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eh(b,null))
if(b>c)throw H.c(P.eh(b,null))
if(c>a.length)throw H.c(P.eh(c,null))
return a.substring(b,c)},
am:function(a,b){return this.t(a,b,null)},
q:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.N)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aB:function(a,b){var s=b-a.length
if(s<=0)return a
return this.q(" ",s)+a},
bi:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ds:function(a,b){return this.bi(a,b,0)},
h_:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a0(c,0,s,null,null))
return H.md(a,b,c)},
P:function(a,b){return this.h_(a,b,0)},
aL:function(a,b){var s
if(typeof b!="string")throw H.c(H.aq(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gL:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iA:1}
H.dQ.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.N.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.l.prototype={}
H.bI.prototype={
gA:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.aU(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.bE(q))
s=r.c
if(typeof o!=="number")return H.u(o)
if(s>=o){r.d=null
return!1}r.d=p.E(q,s);++r.c
return!0}}
H.bm.prototype={
gM:function(a){return new H.dT(J.bc(this.a),this.b)},
gk:function(a){return J.aW(this.a)},
E:function(a,b){return this.b.$1(J.k4(this.a,b))}}
H.ch.prototype={$il:1}
H.dT.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gA(r))
return!0}s.a=null
return!1},
gA:function(a){var s=this.a
return s}}
H.cT.prototype={
gM:function(a){return new H.f2(J.bc(this.a),this.b)}}
H.f2.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gA(s)))return!0
return!1},
gA:function(a){var s=this.a
return s.gA(s)}}
H.cj.prototype={}
H.eV.prototype={
j:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.bT.prototype={}
H.cb.prototype={
i:function(a){return P.kj(this)},
j:function(a,b,c){H.mQ()},
$iF:1}
H.cc.prototype={
gk:function(a){return this.a},
bV:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bV(0,b))return null
return this.cF(b)},
cF:function(a){return this.b[a]},
D:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cF(q))}}}
H.iJ.prototype={
ai:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.e5.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dO.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.eU.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.id.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fI.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bC.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mg(r==null?"unknown":r)+"'"},
ghR:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iB.prototype={}
H.iy.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mg(s)+"'"}}
H.c7.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c7))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gL:function(a){var s,r=this.c
if(r==null)s=H.cC(this.a)
else s=typeof r!=="object"?J.ac(r):H.cC(r)
return(s^H.cC(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eg(s))+"'")}}
H.en.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.z.prototype={
gk:function(a){return this.a},
gah:function(a){return new H.cs(this)},
ghQ:function(a){return H.n3(this.gah(this),new H.hJ(this))},
bV:function(a,b){var s=this.b
if(s==null)return!1
return this.eh(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bb(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bb(p,b)
q=r==null?n:r.b
return q}else return o.hj(b)},
hj:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cG(p,q.du(a))
r=q.dv(s,a)
if(r<0)return null
return s[r].b},
j:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cA(s==null?q.b=q.bJ():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cA(r==null?q.c=q.bJ():r,b,c)}else q.hk(b,c)},
hk:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bJ()
s=p.du(a)
r=p.cG(o,s)
if(r==null)p.bN(o,s,[p.bK(a,b)])
else{q=p.dv(r,a)
if(q>=0)r[q].b=b
else r.push(p.bK(a,b))}},
D:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bE(s))
r=r.c}},
cA:function(a,b,c){var s=this.bb(a,b)
if(s==null)this.bN(a,b,this.bK(b,c))
else s.b=c},
bK:function(a,b){var s=this,r=new H.hN(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
du:function(a){return J.ac(a)&0x3ffffff},
dv:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1},
i:function(a){return P.kj(this)},
bb:function(a,b){return a[b]},
cG:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
ek:function(a,b){delete a[b]},
eh:function(a,b){return this.bb(a,b)!=null},
bJ:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bN(r,s,r)
this.ek(r,s)
return r}}
H.hJ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.lY(this.a).T("2(1)")}}
H.hN.prototype={}
H.cs.prototype={
gk:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.dS(s,s.r)
r.c=s.e
return r}}
H.dS.prototype={
gA:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bE(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jQ.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jR.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jS.prototype={
$1:function(a){return this.a(a)}}
H.dN.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilg:1}
H.cy.prototype={$icy:1}
H.S.prototype={$iS:1}
H.bM.prototype={
gk:function(a){return a.length},
$ix:1}
H.bo.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aS(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cz.prototype={
j:function(a,b,c){H.aS(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.e0.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.e1.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.e2.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.e3.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.e4.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.cA.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.bN.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aS(b,a,a.length)
return a[b]},
$ibN:1,
$ib2:1}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
H.al.prototype={
T:function(a){return H.fU(v.typeUniverse,this,a)},
bt:function(a){return H.nW(v.typeUniverse,this,a)}}
H.fk.prototype={}
H.ff.prototype={
i:function(a){return this.a}}
H.d9.prototype={}
P.jj.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
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
P.d8.prototype={
e3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c1(new P.jy(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
e4:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c1(new P.jx(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$icG:1}
P.jy.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jx.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dW(s,o)}q.c=p
r.d.$1(q)}}
P.bW.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bX.prototype={
gA:function(a){var s=this.c
if(s==null)return this.b
return s.gA(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bW){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bc(s)
if(o instanceof P.bX){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d5.prototype={
gM:function(a){return new P.bX(this.a())}}
P.f3.prototype={}
P.cF.prototype={}
P.ey.prototype={}
P.cG.prototype={}
P.jD.prototype={}
P.jK.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.ar(this.b)
throw s}}
P.jq.prototype={
hJ:function(a){var s,r,q,p=null
try{if(C.f===$.aC){a.$0()
return}P.oT(p,p,this,a)}catch(q){s=H.b8(q)
r=H.kG(q)
P.m_(p,p,this,s,r)}},
hK:function(a,b){var s,r,q,p=null
try{if(C.f===$.aC){a.$1(b)
return}P.oU(p,p,this,a,b)}catch(q){s=H.b8(q)
r=H.kG(q)
P.m_(p,p,this,s,r)}},
hL:function(a,b){return this.hK(a,b,t.z)},
fX:function(a){return new P.jr(this,a)},
d1:function(a,b){return new P.js(this,a,b)}}
P.jr.prototype={
$0:function(){return this.a.hJ(this.b)}}
P.js.prototype={
$1:function(a){return this.a.hL(this.b,a)},
$S:function(){return this.c.T("~(0)")}}
P.cV.prototype={
gM:function(a){var s=new P.cW(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
P:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ee(b)
return r}},
ee:function(a){var s=this.d
if(s==null)return!1
return this.bA(s[this.bw(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cB(s==null?q.b=P.ko():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cB(r==null?q.c=P.ko():r,b)}else return q.e7(0,b)},
e7:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.ko()
s=q.bw(b)
r=p[s]
if(r==null)p[s]=[q.bv(b)]
else{if(q.bA(r,b)>=0)return!1
r.push(q.bv(b))}return!0},
J:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fs(this.c,b)
else return this.fq(0,b)},
fq:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bw(b)
r=n[s]
q=o.bA(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cU(p)
return!0},
cB:function(a,b){if(a[b]!=null)return!1
a[b]=this.bv(b)
return!0},
fs:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cU(s)
delete a[b]
return!0},
cJ:function(){this.r=1073741823&this.r+1},
bv:function(a){var s,r=this,q=new P.jp(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cJ()
return q},
cU:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cJ()},
bw:function(a){return J.ac(a)&1073741823},
bA:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1}}
P.jp.prototype={}
P.cW.prototype={
gA:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bE(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cn.prototype={}
P.hO.prototype={
$2:function(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:3}
P.ct.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gM:function(a){return new H.bI(a,this.gk(a))},
E:function(a,b){return this.h(a,b)},
gdz:function(a){return this.gk(a)===0},
hO:function(a){var s,r,q,p,o=this
if(o.gdz(a)){s=J.kd(0,H.bx(a).T("i.E"))
return s}r=o.h(a,0)
q=P.hP(o.gk(a),r,!0,H.bx(a).T("i.E"))
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.u(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
hc:function(a,b,c,d){var s
P.b0(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
i:function(a){return P.kc(a,"[","]")}}
P.cv.prototype={}
P.hS.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.av.prototype={
D:function(a,b){var s,r
for(s=J.bc(this.gah(a));s.u();){r=s.gA(s)
b.$2(r,this.h(a,r))}},
gk:function(a){return J.aW(this.gah(a))},
i:function(a){return P.kj(a)},
$iF:1}
P.fV.prototype={
j:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.cw.prototype={
h:function(a,b){return J.c5(this.a,b)},
j:function(a,b,c){J.k2(this.a,b,c)},
D:function(a,b){J.k5(this.a,b)},
gk:function(a){return J.aW(this.a)},
i:function(a){return J.ar(this.a)},
$iF:1}
P.bU.prototype={}
P.d2.prototype={
i:function(a){return P.kc(this,"{","}")},
E:function(a,b){var s,r,q,p="index"
P.mH(b,p)
P.lf(b,p)
for(s=P.nG(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.c(P.M(b,this,p,null,r))},
$il:1,
$ih:1}
P.cX.prototype={}
P.dc.prototype={}
P.j0.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.b8(r)}return null}}
P.j1.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.b8(r)}return null}}
P.he.prototype={
hp:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.b0(a2,a3,a1.length)
if(a3==null)throw H.c(P.le("Invalid range"))
s=$.my()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.jP(C.a.C(a1,l))
h=H.jP(C.a.C(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.U("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.aO(k)
q=l
continue}}throw H.c(P.a_("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.kP(a1,n,a3,o,m,d)
else{c=C.c.b9(d-1,4)+1
if(c===1)throw H.c(P.a_(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aN(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.kP(a1,n,a3,o,m,b)
else{c=C.c.b9(b,4)
if(c===1)throw H.c(P.a_(a,a1,a3))
if(c>1)a1=C.a.aN(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hf.prototype={}
P.dx.prototype={}
P.dz.prototype={}
P.hv.prototype={}
P.iZ.prototype={
ghb:function(){return C.O}}
P.j2.prototype={
bW:function(a){var s,r,q,p=P.b0(0,null,a.length)
if(p==null)throw H.c(P.le("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jC(r)
if(q.em(a,0,p)!==p){J.mE(a,p-1)
q.bQ()}return new Uint8Array(r.subarray(0,H.of(0,q.b,r.length)))}}
P.jC.prototype={
bQ:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
fR:function(a,b){var s,r,q,p,o,n=this
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
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fR(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
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
bW:function(a){var s=this.a,r=P.nw(s,a,0,null)
if(r!=null)return r
return new P.jB(s).h0(a,0,null,!0)}}
P.jB.prototype={
h0:function(a,b,c,d){var s,r,q,p,o=this,n=P.b0(b,c,J.aW(a))
if(b===n)return""
s=P.oa(a,b,n)
if(typeof n!=="number")return n.Y()
n-=b
r=o.bx(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.ob(q)
o.b=0
throw H.c(P.a_(p,a,b+o.c))}return r},
bx:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.Y()
if(c-b>1000){s=C.c.a1(b+c,2)
r=q.bx(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bx(a,s,c,d)}return q.h3(a,b,c,d)},
h3:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.U(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
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
g.a+=H.aO(a[l])}else g.a+=P.eA(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aO(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aT.prototype={}
P.ad.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
aL:function(a,b){return C.c.aL(this.a,b.a)},
gL:function(a){var s=this.a
return(s^C.c.aI(s,30))&1073741823},
i:function(a){var s=this,r=P.mR(H.ne(s)),q=P.dB(H.nc(s)),p=P.dB(H.n8(s)),o=P.dB(H.n9(s)),n=P.dB(H.nb(s)),m=P.dB(H.nd(s)),l=P.mS(H.na(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.W.prototype={}
P.bg.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bg&&this.a===b.a},
gL:function(a){return C.c.gL(this.a)},
aL:function(a,b){return C.c.aL(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ht(),o=this.a
if(o<0)return"-"+new P.bg(0-o).i(0)
s=p.$1(C.c.a1(o,6e7)%60)
r=p.$1(C.c.a1(o,1e6)%60)
q=new P.hs().$1(o%1e6)
return""+C.c.a1(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hs.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ht.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.J.prototype={}
P.dp.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hy(s)
return"Assertion failed"}}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.ah.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbz()+o+m
if(!q.a)return l
s=q.gby()
r=P.hy(q.b)
return l+s+": "+r}}
P.bQ.prototype={
gbz:function(){return"RangeError"},
gby:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.dK.prototype={
gbz:function(){return"RangeError"},
gby:function(){var s,r=this.b
if(typeof r!=="number")return r.a9()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gk:function(a){return this.f}}
P.eW.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eT.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ew.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dy.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hy(s)+"."}}
P.e9.prototype={
i:function(a){return"Out of Memory"},
$iJ:1}
P.cE.prototype={
i:function(a){return"Stack Overflow"},
$iJ:1}
P.dA.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fh.prototype={
i:function(a){return"Exception: "+this.a}}
P.hE.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
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
return f+j+h+i+"\n"+C.a.q(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.j.prototype={}
P.h.prototype={
gk:function(a){var s,r=this.gM(this)
for(s=0;r.u();)++s
return s},
E:function(a,b){var s,r,q
P.lf(b,"index")
for(s=this.gM(this),r=0;s.u();){q=s.gA(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.mV(this,"(",")")}}
P.dL.prototype={}
P.n.prototype={$il:1,$ih:1}
P.F.prototype={}
P.ak.prototype={
gL:function(a){return P.L.prototype.gL.call(C.j,this)},
i:function(a){return"null"}}
P.O.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
n:function(a,b){return this===b},
gL:function(a){return H.cC(this)},
i:function(a){return"Instance of '"+H.f(H.eg(this))+"'"},
toString:function(){return this.i(this)}}
P.A.prototype={}
P.U.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iX.prototype={
$2:function(a,b){var s,r,q,p=J.kF(b).ds(b,"=")
if(p===-1){if(b!=="")J.k2(a,P.kx(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.am(b,p+1)
q=this.a
J.k2(a,P.kx(s,0,s.length,q,!0),P.kx(r,0,r.length,q,!0))}return a}}
P.iU.prototype={
$2:function(a,b){throw H.c(P.a_("Illegal IPv4 address, "+a,this.a,b))}}
P.iV.prototype={
$2:function(a,b){throw H.c(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iW.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jT(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.a9()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bu.prototype={
gbP:function(){var s,r,q,p=this,o=p.x
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
else o=H.p(H.kh("Field '_text' has been assigned during initialization."))}return o},
gL:function(a){var s=this,r=s.z
if(r==null){r=C.a.gL(s.gbP())
if(s.z==null)s.z=r
else r=H.p(H.kh("Field 'hashCode' has been assigned during initialization."))}return r},
gcg:function(){var s=this,r=s.Q
if(r==null){r=new P.bU(P.lu(s.gb4(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.p(H.kh("Field 'queryParameters' has been assigned during initialization."))}return r},
gdN:function(){return this.b},
gc8:function(a){var s=this.c
if(s==null)return""
if(C.a.af(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbm:function(a){var s=this.d
return s==null?P.lO(this.a):s},
gb4:function(a){var s=this.f
return s==null?"":s},
gc7:function(){var s=this.r
return s==null?"":s},
dI:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.af(s,"/"))s="/"+s
q=s
p=P.kv(null,0,0,b)
return new P.bu(n,l,j,k,q,p,o.r)},
gdm:function(){return this.c!=null},
gdr:function(){return this.f!=null},
gdn:function(){return this.r!=null},
i:function(a){return this.gbP()},
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbr()&&s.c!=null===b.gdm()&&s.b===b.gdN()&&s.gc8(s)===b.gc8(b)&&s.gbm(s)===b.gbm(b)&&s.e===b.gdG(b)&&s.f!=null===b.gdr()&&s.gb4(s)===b.gb4(b)&&s.r!=null===b.gdn()&&s.gc7()===b.gc7()},
$ieX:1,
gbr:function(){return this.a},
gdG:function(a){return this.e}}
P.jA.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.ky(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.ky(C.h,b,C.e,!0))}}}
P.jz.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.bc(b),r=this.a;s.u();)r.$2(a,s.gA(s))}}
P.iT.prototype={
gdM:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bi(s,"?",m)
q=s.length
if(r>=0){p=P.dd(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.f9("data","",n,n,P.dd(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jF.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jE.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.mF(s,0,96,b)
return s},
$S:19}
P.jG.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.jH.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.fC.prototype={
gdm:function(){return this.c>0},
gdq:function(){return this.c>0&&this.d+1<this.e},
gdr:function(){return this.f<this.r},
gdn:function(){return this.r<this.a.length},
gcH:function(){return this.b===4&&C.a.af(this.a,"http")},
gcI:function(){return this.b===5&&C.a.af(this.a,"https")},
gbr:function(){var s=this.x
return s==null?this.x=this.ef():s},
ef:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcH())return"http"
if(s.gcI())return"https"
if(r===4&&C.a.af(s.a,"file"))return"file"
if(r===7&&C.a.af(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
gdN:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gc8:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbm:function(a){var s=this
if(s.gdq())return P.jT(C.a.t(s.a,s.d+1,s.e),null)
if(s.gcH())return 80
if(s.gcI())return 443
return 0},
gdG:function(a){return C.a.t(this.a,this.e,this.f)},
gb4:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gc7:function(){var s=this.r,r=this.a
return s<r.length?C.a.am(r,s+1):""},
gcg:function(){var s=this
if(s.f>=s.r)return C.W
return new P.bU(P.lu(s.gb4(s)),t.U)},
dI:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbr(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdq()?n.gbm(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.af(r,"/"))r="/"+r
p=P.kv(m,0,0,b)
q=n.r
o=q<j.length?C.a.am(j,q+1):m
return new P.bu(l,i,s,h,r,p,o)},
gL:function(a){var s=this.y
return s==null?this.y=C.a.gL(this.a):s},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ieX:1}
P.f9.prototype={}
W.o.prototype={}
W.h7.prototype={
gk:function(a){return a.length}}
W.dm.prototype={
i:function(a){return String(a)}}
W.dn.prototype={
i:function(a){return String(a)}}
W.bd.prototype={$ibd:1}
W.be.prototype={
dO:function(a,b,c){var s=a.getContext(b,P.p7(c))
return s},
$ibe:1}
W.as.prototype={
gk:function(a){return a.length}}
W.hl.prototype={
gk:function(a){return a.length}}
W.G.prototype={$iG:1}
W.ce.prototype={
gk:function(a){return a.length}}
W.hm.prototype={}
W.ai.prototype={}
W.aF.prototype={}
W.hn.prototype={
gk:function(a){return a.length}}
W.ho.prototype={
gk:function(a){return a.length}}
W.hp.prototype={
gk:function(a){return a.length}}
W.hq.prototype={
i:function(a){return String(a)}}
W.cf.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.cg.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gak(a))+" x "+H.f(this.gag(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bw(b)
s=a.left==s.gbk(b)&&a.top==s.gbo(b)&&this.gak(a)==s.gak(b)&&this.gag(a)==s.gag(b)}else s=!1
return s},
gL:function(a){return W.lG(J.ac(a.left),J.ac(a.top),J.ac(this.gak(a)),J.ac(this.gag(a)))},
gd2:function(a){return a.bottom},
gag:function(a){return a.height},
gbk:function(a){return a.left},
gcl:function(a){return a.right},
gbo:function(a){return a.top},
gak:function(a){return a.width},
$ia5:1}
W.dD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.hr.prototype={
gk:function(a){return a.length}}
W.f6.prototype={
gdz:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
j:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var s=this.hO(this)
return new J.a3(s,s.length)}}
W.H.prototype={
gd5:function(a){return new W.f6(a,a.children)},
gd6:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a9()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a9()
if(p<0)p=-p*0
return new P.a5(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iH:1}
W.k.prototype={$ik:1}
W.e.prototype={
fT:function(a,b,c,d){if(c!=null)this.e8(a,b,c,!1)},
e8:function(a,b,c,d){return a.addEventListener(b,H.c1(c,1),!1)},
$ie:1}
W.ae.prototype={$iae:1}
W.bF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1,
$ibF:1}
W.dG.prototype={
gk:function(a){return a.length}}
W.dI.prototype={
gk:function(a){return a.length}}
W.at.prototype={$iat:1}
W.hG.prototype={
gk:function(a){return a.length}}
W.bj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.cl.prototype={$icl:1}
W.bH.prototype={$ibH:1}
W.bl.prototype={$ibl:1}
W.hQ.prototype={
i:function(a){return String(a)}}
W.i8.prototype={
gk:function(a){return a.length}}
W.bJ.prototype={$ibJ:1}
W.dY.prototype={
h:function(a,b){return P.b7(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b7(s.value[1]))}},
gah:function(a){var s=H.d([],t.s)
this.D(a,new W.i9(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iF:1}
W.i9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dZ.prototype={
h:function(a,b){return P.b7(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b7(s.value[1]))}},
gah:function(a){var s=H.d([],t.s)
this.D(a,new W.ia(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iF:1}
W.ia.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.e_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.af.prototype={$iaf:1}
W.f5.prototype={
j:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
gM:function(a){var s=this.a.childNodes
return new W.ck(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.v.prototype={
hH:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mC(s,b,a)}catch(q){H.b8(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dU(a):s},
fw:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.ay.prototype={
gk:function(a){return a.length},
$iay:1}
W.ec.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.em.prototype={
h:function(a,b){return P.b7(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b7(s.value[1]))}},
gah:function(a){var s=H.d([],t.s)
this.D(a,new W.io(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iF:1}
W.io.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eo.prototype={
gk:function(a){return a.length}}
W.am.prototype={$iam:1}
W.eq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.az.prototype={$iaz:1}
W.er.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.aA.prototype={
gk:function(a){return a.length},
$iaA:1}
W.ex.prototype={
h:function(a,b){return a.getItem(H.od(b))},
j:function(a,b,c){a.setItem(b,c)},
D:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gah:function(a){var s=H.d([],t.s)
this.D(a,new W.iz(s))
return s},
gk:function(a){return a.length},
$iF:1}
W.iz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.b1.prototype={$ib1:1}
W.ao.prototype={$iao:1}
W.a9.prototype={$ia9:1}
W.eC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.eD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.iF.prototype={
gk:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.br.prototype={$ibr:1}
W.eK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.iI.prototype={
gk:function(a){return a.length}}
W.aR.prototype={}
W.iY.prototype={
i:function(a){return String(a)}}
W.f_.prototype={
gk:function(a){return a.length}}
W.b3.prototype={
gh5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
gh4:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ib3:1}
W.bV.prototype={
fz:function(a,b){return a.requestAnimationFrame(H.c1(b,1))},
el:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.f7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.cU.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bw(b)
s=a.left==s.gbk(b)&&a.top==s.gbo(b)&&a.width==s.gak(b)&&a.height==s.gag(b)}else s=!1
return s},
gL:function(a){return W.lG(J.ac(a.left),J.ac(a.top),J.ac(a.width),J.ac(a.height))},
gag:function(a){return a.height},
gak:function(a){return a.width}}
W.fl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.cY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.fF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.fM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$il:1,
$ix:1,
$ih:1,
$in:1}
W.ka.prototype={}
W.fg.prototype={
fQ:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mD(s,this.c,r,!1)}}}
W.jm.prototype={
$1:function(a){return this.a.$1(a)}}
W.kn.prototype={}
W.K.prototype={
gM:function(a){return new W.ck(a,this.gk(a))}}
W.ck.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.c5(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gA:function(a){return this.d}}
W.f8.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fB.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fJ.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
P.jt.prototype={
c5:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bq:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.kA(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ad)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.iS("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.c5(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.k5(a,new P.jv(n,o))
return n.a}if(t.aH.b(a)){s=o.c5(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.h1(a,s)}if(t.eH.b(a)){s=o.c5(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.hh(a,new P.jw(n,o))
return n.b}throw H.c(P.iS("structured clone of other type"))},
h1:function(a,b){var s,r=J.aU(a),q=r.gk(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.u(q)
s=0
for(;s<q;++s){o=this.bq(r.h(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.jv.prototype={
$2:function(a,b){this.a.a[a]=this.b.bq(b)},
$S:3}
P.jw.prototype={
$2:function(a,b){this.a.b[a]=this.b.bq(b)},
$S:3}
P.jL.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.ju.prototype={
hh:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dH.prototype={
gbc:function(){return new H.bm(new H.cT(this.b,new P.hC()),new P.hD())},
j:function(a,b,c){var s=this.gbc()
J.mG(s.b.$1(J.k4(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aW(this.gbc().a)},
h:function(a,b){var s=this.gbc()
return s.b.$1(J.k4(s.a,b))},
gM:function(a){var s=P.ki(this.gbc(),!1,t.h)
return new J.a3(s,s.length)}}
P.hC.prototype={
$1:function(a){return t.h.b(a)}}
P.hD.prototype={
$1:function(a){return t.h.a(a)}}
P.fA.prototype={
gcl:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.u(r)
return this.$ti.c.a(s+r)},
gd2:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.u(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bw(b)
if(s==r.gbk(b)){q=n.b
if(q==r.gbo(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.u(p)
o=n.$ti.c
if(o.a(s+p)===r.gcl(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.u(s)
r=o.a(q+s)===r.gd2(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gL:function(a){var s,r=this,q=r.a,p=J.ac(q),o=r.b,n=J.ac(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.u(m)
s=r.$ti.c
m=C.c.gL(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.u(q)
q=C.c.gL(s.a(o+q))
return P.nF(P.jo(P.jo(P.jo(P.jo(0,p),n),m),q))}}
P.a5.prototype={
gbk:function(a){return this.a},
gbo:function(a){return this.b},
gak:function(a){return this.c},
gag:function(a){return this.d}}
P.aJ.prototype={$iaJ:1}
P.dR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aM.prototype={$iaM:1}
P.e7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.ig.prototype={
gk:function(a){return a.length}}
P.ez.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gd5:function(a){return new P.dH(a,new W.f5(a))}}
P.aP.prototype={$iaP:1}
P.eL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fo.prototype={}
P.fp.prototype={}
P.fw.prototype={}
P.fx.prototype={}
P.fK.prototype={}
P.fL.prototype={}
P.fR.prototype={}
P.fS.prototype={}
P.b2.prototype={$il:1,$ih:1,$in:1}
P.hb.prototype={
gk:function(a){return a.length}}
P.dr.prototype={
h:function(a,b){return P.b7(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b7(s.value[1]))}},
gah:function(a){var s=H.d([],t.s)
this.D(a,new P.hc(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.y("Not supported"))},
$iF:1}
P.hc.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ds.prototype={
gk:function(a){return a.length}}
P.aX.prototype={}
P.e8.prototype={
gk:function(a){return a.length}}
P.f4.prototype={}
P.el.prototype={
hM:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}}
P.eu.prototype={
gk:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
s=P.b7(a.item(b))
s.toString
return s},
j:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fG.prototype={}
P.fH.prototype={}
K.h8.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"}}
K.dJ.prototype={
aM:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].aM(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.hT.prototype={}
K.aZ.prototype={
aM:function(a,b){return!this.dT(0,b)},
i:function(a){return"!["+this.cq(0)+"]"}}
K.ip.prototype={
dZ:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.q("May not create a Set with zero characters."))
s=new H.z(t.E)
for(r=new H.bI(a,a.gk(a));r.u();){q=r.d
s.j(0,q,!0)}p=P.ki(s.gah(s),!0,t.e)
C.b.dS(p)
this.a=p},
aM:function(a,b){return C.b.P(this.a,b)},
i:function(a){return P.eA(this.a,0,null)}}
L.ev.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.eM(this.a.H(0,b))
p.a=H.d([],t.L)
p.c=!1
this.c.push(p)
return p},
hd:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.aM(0,a))return p}return null},
i:function(a){return this.b},
cT:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.P(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gah(l),l=l.gM(l);l.u();){r=l.gA(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.P(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eI.prototype={
i:function(a){var s=H.me(this.b,"\n","\\n"),r=H.me(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eJ.prototype={
i:function(a){return this.b}}
L.iG.prototype={
H:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.ev(this,b)
s.c=H.d([],t.br)
this.a.j(0,b,s)}return s},
b7:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eJ(a)
s.c=new H.z(t.dO)
this.b.j(0,a,s)}return s},
dL:function(a){return this.hP(a)},
hP:function(a){var s=this
return P.ov(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dL(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.ci(a1,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hd(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eA(a0,0,null)
throw H.c(P.q("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.p(P.y("removeRange"))
P.b0(0,k,a0.length)
a0.splice(0,k-0)
C.b.be(a1,a0)
a0=H.d([],c)
b=H.d([],c)
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
case 6:if(!h.c)b.push(j)
d=h.b
if(d.d!=null){g=P.eA(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.eI(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.P(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.nD()
case 1:return P.nE(o)}}},t.eB)},
i:function(a){var s,r=new P.U(""),q=this.d
if(q!=null)r.a=q.cT()+"\n"
for(q=this.a,q=q.ghQ(q),q=q.gM(q);q.u();){s=q.gA(q)
if(s!=this.d)r.a+=s.cT()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.eM.prototype={
i:function(a){return this.b.b+": "+this.cq(0)}}
O.Z.prototype={
ba:function(a){this.a=H.d([],a.T("t<0*>"))
this.c=this.b=null},
co:function(a,b,c){this.b=b
this.c=a},
aD:function(a,b){return this.co(a,null,b)},
bL:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cu:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.a3(s,s.length)},
E:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.lY(q).T("t<Z.T*>")
if(q.bL(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.cu(r,H.d([b],p))}},
be:function(a,b){var s,r
if(this.bL(b)){s=this.a
r=s.length
C.b.be(s,b)
this.cu(r,b)}},
$ih:1}
O.cx.prototype={
gk:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.E():s},
aE:function(){var s=this.b
if(s!=null)s.B(null)},
ga2:function(a){var s=this.a
if(s.length>0)return C.b.gaA(s)
else return V.bn()},
bn:function(a){var s=this.a
if(a==null)s.push(V.bn())
else s.push(a)
this.aE()},
b3:function(){var s=this.a
if(s.length>0){s.pop()
this.aE()}}}
E.hg.prototype={}
E.bh.prototype={
sbs:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().J(0,q.gdE())
s=q.c
if(s!=null)s.gm().l(0,q.gdE())
r=new D.w("shape",p,q.c)
r.b=!0
q.bl(r)}},
an:function(a,b){var s
for(s=this.y.a,s=new J.a3(s,s.length);s.u();)s.d.an(0,b)},
ad:function(a){var s,r=this,q=a.dx
q.a.push(q.ga2(q))
q.aE()
a.cf(r.f)
q=a.dy
s=(q&&C.b).gaA(q)
if(s!=null&&r.d!=null)s.dH(a,r)
for(q=r.y.a,q=new J.a3(q,q.length);q.u();)q.d.ad(a)
a.ce()
a.dx.b3()},
bl:function(a){var s=this.z
if(s!=null)s.B(a)},
ac:function(){return this.bl(null)},
dF:function(a){this.e=null
this.bl(a)},
hv:function(){return this.dF(null)},
dD:function(a){this.bl(a)},
hs:function(){return this.dD(null)},
hr:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdC(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bi()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.ac()},
hu:function(a,b){var s,r
for(s=b.gM(b),r=this.gdC();s.u();)s.gA(s).gm().J(0,r)
this.ac()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bB.prototype={
i:function(a){return this.b}}
E.bO.prototype={
i:function(a){return this.b}}
E.fe.prototype={}
E.ij.prototype={
dY:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ad(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cx()
r=t.p
s.a=H.d([],r)
s.gm().l(0,new E.ik(q))
q.cy=s
s=new O.cx()
s.a=H.d([],r)
s.gm().l(0,new E.il(q))
q.db=s
s=new O.cx()
s.a=H.d([],r)
s.gm().l(0,new E.im(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.z(t.h9)},
ghE:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga2(q)
s=r.db
s=r.z=q.q(0,s.ga2(s))
q=s}return q},
cf:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaA(s):a)},
ce:function(){var s=this.dy
if(s.length>1)s.pop()},
cY:function(a){var s=a.b
if(s.length===0)throw H.c(P.q("May not cache a shader with no name."))
if(this.fr.bV(0,s))throw H.c(P.q('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.j(0,s,a)}}
E.ik.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.il.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.im.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eH.prototype={
cz:function(a){this.dJ()},
cw:function(){return this.cz(null)},
ghi:function(){var s,r=this,q=Date.now(),p=C.c.a1(P.kX(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ad(q,!1)
return s/p},
cN:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.q()
if(typeof p!=="number")return H.u(p)
s=C.d.c6(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.q()
r=C.d.c6(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.lo(C.p,q.ghI())}},
dJ:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.D.el(s)
r=W.m1(new E.iE(this),t.o)
r.toString
C.D.fz(s,r)}},
hG:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cN()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ad(p,!1)
q.y=P.kX(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aE()
p=q.db
C.b.sk(p.a,0)
p.aE()
p=q.dx
C.b.sk(p.a,0)
p.aE()
p=q.dy
p.toString
C.b.sk(p,0)
q.dy.push(null)
m.ad(n.e)}}catch(o){s=H.b8(o)
r=H.kG(o)
P.kK("Error: "+H.f(s))
P.kK("Stack: "+H.f(r))
throw H.c(s)}}}
E.iE.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hG()}}}
Z.f0.prototype={}
Z.dv.prototype={
a7:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.b8(q)
r=P.q('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.f1.prototype={}
Z.c8.prototype={
az:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
a7:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].a7(a)},
aO:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ad:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.ar(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.p(n,", ")+"\nAttrs:   "+C.b.p(p,", ")}}
Z.cm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eg(this.c))+"'")+"]"}}
Z.bt.prototype={
gcp:function(a){var s=this.a,r=(s&$.aD().a)!==0?3:0
if((s&$.bb().a)!==0)r+=3
if((s&$.ba().a)!==0)r+=3
if((s&$.bz().a)!==0)r+=2
if((s&$.bA().a)!==0)r+=3
if((s&$.dj().a)!==0)r+=3
if((s&$.dk().a)!==0)r+=4
if((s&$.c4().a)!==0)++r
return(s&$.b9().a)!==0?r+4:r},
fW:function(a){var s,r=$.aD(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bb()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ba()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b9()
if((q&r.a)!==0)if(s===a)return r
return $.mx()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bt))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.aD().a)!==0)s.push("Pos")
if((r&$.bb().a)!==0)s.push("Norm")
if((r&$.ba().a)!==0)s.push("Binm")
if((r&$.bz().a)!==0)s.push("Txt2D")
if((r&$.bA().a)!==0)s.push("TxtCube")
if((r&$.dj().a)!==0)s.push("Clr3")
if((r&$.dk().a)!==0)s.push("Clr4")
if((r&$.c4().a)!==0)s.push("Weight")
if((r&$.b9().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.p(s,"|")}}
D.hh.prototype={}
D.bi.prototype={
l:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
J:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.P(q,b)
if(q===!0){q=r.a
s=(q&&C.b).J(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.P(q,b)
if(q===!0){q=r.b
s=(q&&C.b).J(q,b)||s}return s},
B:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.P()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.D(P.ki(s,!0,t.dm),new D.hz(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.D(s,new D.hA(o))}return!0},
dd:function(){return this.B(null)},
aC:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.B(s)}}}}
D.hz.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hA.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.P.prototype={}
D.aG.prototype={}
D.aH.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dw.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.dP.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.hK.prototype={
hA:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hw:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}}
X.cu.prototype={}
X.hR.prototype={
aT:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.q()
s=b.b
r=o.ch
if(typeof s!=="number")return s.q()
q=new V.a8(m.a+l*k,m.b+s*r)
r=o.a.gaJ()
p=new X.bK(a,V.b_(),o.x,r,q)
p.b=!0
o.z=new P.ad(n,!1)
o.x=q
return p},
cd:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dP()
if(typeof s!=="number")return s.ae()
this.r=(s&~r)>>>0
return!1},
b1:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.aT(a,b))
return!0},
hB:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaJ()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.q()
o=a.b
n=m.cy
if(typeof o!=="number")return o.q()
r=new X.bL(new V.aa(q*p,o*n),s,r)
r.b=!0
l.B(r)
return!0},
f_:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cu(c,p.a.gaJ(),b)
q.b=!0
r.B(q)
p.y=new P.ad(s,!1)
p.x=V.b_()}}
X.aj.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aj))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bK.prototype={}
X.ib.prototype={
bB:function(a,b,c){var s=this,r=new P.ad(Date.now(),!1),q=s.a.gaJ(),p=new X.bK(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cd:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.B(this.bB(a,b,!0))
return!0},
b2:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dP()
if(typeof r!=="number")return r.ae()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.B(s.bB(a,b,!0))
return!0},
b1:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.bB(a,b,!1))
return!0},
hC:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaJ()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.q()
p=a.b
o=n.ch
if(typeof p!=="number")return p.q()
s=new X.bL(new V.aa(r*q,p*o),s,b)
s.b=!0
m.B(s)
return!0},
gdc:function(){var s=this.b
return s==null?this.b=D.E():s},
gcm:function(){var s=this.c
return s==null?this.c=D.E():s},
gdB:function(){var s=this.d
return s==null?this.d=D.E():s}}
X.bL.prototype={}
X.ee.prototype={}
X.cH.prototype={}
X.iH.prototype={
aT:function(a,b){var s=this,r=new P.ad(Date.now(),!1),q=a.length>0?a[0]:V.b_(),p=s.a.gaJ(),o=new X.cH(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hz:function(a){var s=this.b
if(s==null)return!1
s.B(this.aT(a,!0))
return!0},
hx:function(a){var s=this.c
if(s==null)return!1
s.B(this.aT(a,!0))
return!0},
hy:function(a){var s=this.d
if(s==null)return!1
s.B(this.aT(a,!1))
return!0}}
X.eY.prototype={
gaJ:function(){var s=this.a,r=C.n.gd6(s).c
r.toString
s=C.n.gd6(s).d
s.toString
return V.ej(0,0,r,s)},
cD:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dP(s,new X.aj(r,a.altKey,a.shiftKey))},
aH:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aj(r,a.altKey,a.shiftKey)},
bO:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aj(r,a.altKey,a.shiftKey)},
aw:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.Y()
if(typeof o!=="number")return H.u(o)
s=r.top
if(typeof p!=="number")return p.Y()
if(typeof s!=="number")return H.u(s)
return new V.a8(q-o,p-s)},
aU:function(a){return new V.aa(a.movementX,a.movementY)},
bM:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=C.d.X(p.pageX)
C.d.X(p.pageY)
n=k.left
if(typeof n!=="number")return H.u(n)
C.d.X(p.pageX)
m=C.d.X(p.pageY)
l=k.top
if(typeof l!=="number")return H.u(l)
j.push(new V.a8(o-n,m-l))}return j},
au:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dw(s,new X.aj(r,a.altKey,a.shiftKey))},
bC:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.Y()
if(typeof n!=="number")return H.u(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.Y()
if(typeof p!=="number")return H.u(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.u(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.u(p)
p=r<p}else p=!1
return p},
eU:function(a){this.f=!0},
eE:function(a){this.f=!1},
eK:function(a){if(this.f&&this.bC(a))a.preventDefault()},
eY:function(a){var s
if(!this.f)return
s=this.cD(a)
this.b.hA(s)},
eW:function(a){var s
if(!this.f)return
s=this.cD(a)
this.b.hw(s)},
f1:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aH(a)
if(p.x){s=p.au(a)
r=p.aU(a)
if(p.d.cd(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.au(a)
q=p.aw(a)
if(p.c.cd(s,q))a.preventDefault()},
f5:function(a){var s,r,q,p=this
p.aH(a)
s=p.au(a)
if(p.x){r=p.aU(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b2(s,q))a.preventDefault()},
eO:function(a){var s,r,q,p=this
if(!p.bC(a)){p.aH(a)
s=p.au(a)
if(p.x){r=p.aU(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b2(s,q))a.preventDefault()}},
f3:function(a){var s,r,q,p=this
p.aH(a)
s=p.au(a)
if(p.x){r=p.aU(a)
if(p.d.b1(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b1(s,q))a.preventDefault()},
eM:function(a){var s,r,q,p=this
if(!p.bC(a)){p.aH(a)
s=p.au(a)
if(p.x){r=p.aU(a)
if(p.d.b1(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b1(s,q))a.preventDefault()}},
f7:function(a){var s,r,q=this
q.aH(a)
s=new V.aa((a&&C.C).gh4(a),C.C.gh5(a)).q(0,q.Q)
if(q.x){if(q.d.hB(s))a.preventDefault()
return}if(q.r)return
r=q.aw(a)
if(q.c.hC(s,r))a.preventDefault()},
f9:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.au(q.y)
r=q.aw(q.y)
q.d.f_(s,r,p)}},
fp:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bO(a)
s=r.bM(a)
if(r.e.hz(s))a.preventDefault()},
fl:function(a){var s
this.bO(a)
s=this.bM(a)
if(this.e.hx(s))a.preventDefault()},
fn:function(a){var s
this.bO(a)
s=this.bM(a)
if(this.e.hy(s))a.preventDefault()}}
D.dt.prototype={$iQ:1}
D.bf.prototype={
ar:function(a){var s=this.r
if(s!=null)s.B(a)},
e2:function(){return this.ar(null)},
$iQ:1}
D.Q.prototype={}
D.cr.prototype={
ar:function(a){var s=this.y
if(s!=null)s.B(a)},
cL:function(a){var s=this.z
if(s!=null)s.B(a)},
eZ:function(){return this.cL(null)},
fb:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(q==null||this.eg(q))return!1}return!0},
ey:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcK(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o instanceof D.bf)this.f.push(o)
n=o.r
if(n==null){n=new D.bi()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.aG()
s.b=!0
this.ar(s)},
ff:function(a,b){var s,r,q
for(s=b.gM(b),r=this.gcK();s.u();){q=s.gA(s)
C.b.J(this.e,q)
q.gm().J(0,r)}s=new D.aH()
s.b=!0
this.ar(s)},
eg:function(a){var s=C.b.P(this.f,a)
return s}}
D.ed.prototype={$iQ:1}
D.es.prototype={$iQ:1}
V.X.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.a7.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a7))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.hx.prototype={}
V.dX.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dX))return!1
s=b.a
$.B().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.c3(H.d([o.a,o.d,o.r],n),3,0),l=V.c3(H.d([o.b,o.e,o.x],n),3,0),k=V.c3(H.d([o.c,o.f,o.y],n),3,0)
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
V.aL.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dw:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.B().toString
if(Math.abs(b3-0)<1e-9)return V.bn()
s=1/b3
r=-l
q=-a2
return V.aw((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
q:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aw(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bp:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.C(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b8:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.T(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.B().toString
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
i:function(a){return this.R()},
G:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.c3(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.c3(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.c3(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.c3(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
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
R:function(){return this.G("")}}
V.a8.prototype={
a3:function(a){return new V.aa(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.T.prototype={
v:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
Y:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bp.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bp))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.ei.prototype={
gab:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ei))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.aa.prototype={
c9:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.q()
if(typeof p!=="number")return H.u(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.u(r)
return q*p+s*r},
q:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.q()
if(typeof b!=="number")return H.u(b)
s=this.b
if(typeof s!=="number")return s.q()
return new V.aa(r*b,s*b)},
Z:function(a,b){var s,r
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.lw
return s==null?$.lw=new V.aa(0,0):s}s=this.a
if(typeof s!=="number")return s.Z()
r=this.b
if(typeof r!=="number")return r.Z()
return new V.aa(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
s=b.a
r=this.a
$.B().toString
if(typeof s!=="number")return s.Y()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.Y()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.C.prototype={
c9:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
F:function(){var s=this,r=Math.sqrt(s.a4(s))
if(r===1)return s
return s.Z(0,r)},
ay:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.C(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.C(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
Z:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.cS()
return new V.C(this.a/b,this.b/b,this.c/b)},
dA:function(){$.B().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
U.hk.prototype={
bu:function(a){var s=V.ps(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.E():s},
I:function(a){var s=this.y
if(s!=null)s.B(a)},
scn:function(a,b){},
sca:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bu(s)}q=new D.w("maximumLocation",q,r.b)
q.b=!0
r.I(q)}},
scc:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bu(s)}q=new D.w("minimumLocation",q,r.c)
q.b=!0
r.I(q)}},
saa:function(a,b){var s,r=this
b=r.bu(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.w("location",s,b)
s.b=!0
r.I(s)}},
scb:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.w("maximumVelocity",p,a)
p.b=!0
q.I(p)}},
sS:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.w("velocity",r,a)
r.b=!0
s.I(r)}},
sbX:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.w("dampening",s,a)
s.b=!0
this.I(s)}},
an:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saa(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sS(s)}}}
U.ca.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.E():s},
aP:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ca))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bG.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.E():s},
I:function(a){var s=this.e
if(s!=null)s.B(a)},
a6:function(){return this.I(null)},
ew:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaG(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gm()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aG()
s.b=!0
this.I(s)},
fd:function(a,b){var s,r
for(s=b.gM(b),r=this.gaG();s.u();)s.gA(s).gm().J(0,r)
s=new D.aH()
s.b=!0
this.I(s)},
aP:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a9()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a3(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.aP(0,b,c)
if(r!=null)s=s==null?r:r.q(0,s)}}q.f=s==null?V.bn():s
p=q.e
if(p!=null)p.aC(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.D(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iR:1}
U.R.prototype={}
U.cP.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.E():s},
I:function(a){var s=this.cy
if(s!=null)s.B(a)},
a6:function(){return this.I(null)},
aV:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdc().l(0,s.gbD())
s.a.c.gdB().l(0,s.gbF())
s.a.c.gcm().l(0,s.gbH())
return!0},
bE:function(a){var s=this
if(!J.D(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bG:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a3(a.d)
s=s.a4(s)
r=l.r
if(typeof r!=="number")return H.u(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a3(a.d).q(0,2).Z(0,s.gab())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.q()
q=l.e
if(typeof q!=="number")return H.u(q)
r.sS(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a3(q).q(0,2).Z(0,s.gab())
r=l.b
o=p.a
if(typeof o!=="number")return o.N()
n=l.e
if(typeof n!=="number")return H.u(n)
m=l.z
if(typeof m!=="number")return H.u(m)
r.saa(0,-o*n+m)
l.b.sS(0)
l.Q=a.z.a3(q).q(0,2).Z(0,s.gab())}l.a6()},
bI:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a4(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.q()
q=p.e
if(typeof q!=="number")return H.u(q)
s.sS(r*10*q)
p.a6()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a9()
if(o<n){p.ch=n
s=b.y
p.b.an(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aw(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iR:1}
U.cQ.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.E():s},
I:function(a){var s=this.fx
if(s!=null)s.B(a)},
a6:function(){return this.I(null)},
aV:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdc().l(0,q.gbD())
q.a.c.gdB().l(0,q.gbF())
q.a.c.gcm().l(0,q.gbH())
s=q.a.d
r=s.f
s=r==null?s.f=D.E():r
s.l(0,q.geo())
s=q.a.d
r=s.d
s=r==null?s.d=D.E():r
s.l(0,q.geq())
s=q.a.e
r=s.b
s=r==null?s.b=D.E():r
s.l(0,q.gfO())
s=q.a.e
r=s.d
s=r==null?s.d=D.E():r
s.l(0,q.gfM())
s=q.a.e
r=s.c
s=r==null?s.c=D.E():r
s.l(0,q.gfK())
return!0},
ap:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.N()
s=-s}if(this.r){if(typeof r!=="number")return r.N()
r=-r}return new V.aa(s,r)},
bE:function(a){var s=this
t.c.a(a)
if(!J.D(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bG:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a3(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.u(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ap(a.y.a3(a.d).q(0,2).Z(0,s.gab()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.u(q)
r.sS(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.u(r)
q.sS(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ap(r.a3(q).q(0,2).Z(0,s.gab()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.u(n)
m=l.cy
if(typeof m!=="number")return H.u(m)
r.saa(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.u(o)
r=l.db
if(typeof r!=="number")return H.u(r)
m.saa(0,-n*o+r)
l.b.sS(0)
l.c.sS(0)
l.dx=l.ap(a.z.a3(q).q(0,2).Z(0,s.gab()))}l.a6()},
bI:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.u(q)
s.sS(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.u(s)
q.sS(-r*10*s)
p.a6()}},
ep:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
er:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.D(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ap(r.a3(q).q(0,2).Z(0,s.gab()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.u(n)
m=l.cy
if(typeof m!=="number")return H.u(m)
r.saa(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.u(o)
r=l.db
if(typeof r!=="number")return H.u(r)
m.saa(0,-n*o+r)
l.b.sS(0)
l.c.sS(0)
l.dx=l.ap(a.z.a3(q).q(0,2).Z(0,s.gab()))
l.a6()},
fP:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fN:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a3(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.u(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ap(a.y.a3(a.d).q(0,2).Z(0,s.gab()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.u(q)
r.sS(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.u(r)
q.sS(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ap(r.a3(q).q(0,2).Z(0,s.gab()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.u(n)
m=l.cy
if(typeof m!=="number")return H.u(m)
r.saa(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.u(o)
r=l.db
if(typeof r!=="number")return H.u(r)
m.saa(0,-n*o+r)
l.b.sS(0)
l.c.sS(0)
l.dx=l.ap(a.z.a3(q).q(0,2).Z(0,s.gab()))}l.a6()},
fL:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.u(q)
s.sS(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.u(s)
q.sS(-r*10*s)
p.a6()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a9()
if(o<n){p.dy=n
s=b.y
p.c.an(0,s)
p.b.an(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aw(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.q(0,V.aw(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iR:1}
U.cR.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.E():s},
I:function(a){var s=this.r
if(s!=null)s.B(a)},
aV:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.E():r
r=p.ges()
s.l(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.E():q).l(0,r)
return!0},
eu:function(a){var s,r,q,p,o=this
if(!J.D(o.b,o.a.b.c))return
t.a3.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.q()
p=s+r*q
if(s!==p){o.d=p
s=new D.w("zoom",s,p)
s.b=!0
o.I(s)}},
aP:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aw(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iR:1}
M.c9.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.E():s},
V:function(a){var s=this.r
if(s!=null)s.B(a)},
aS:function(){return this.V(null)},
fh:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gm()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aG()
s.b=!0
this.V(s)},
fj:function(a,b){var s,r
for(s=b.gM(b),r=this.gW();s.u();)s.gA(s).gm().J(0,r)
s=new D.aH()
s.b=!0
this.V(s)},
ad:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a3(s,s.length);s.u();){r=s.d
if(r!=null)r.ad(a)}q.f=!1},
$ia1:1}
M.cd.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.E():s},
V:function(a){var s=this.r
if(s!=null)s.B(a)},
aS:function(){return this.V(null)},
sb5:function(a,b){var s,r,q=this
if(b==null)b=X.kb(null)
s=q.c
if(s!==b){if(s!=null)s.gm().J(0,q.gW())
r=q.c
q.c=b
b.gm().l(0,q.gW())
s=new D.w("target",r,q.c)
s.b=!0
q.V(s)}},
sb6:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().J(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gW())
q=new D.w("technique",s,r.d)
q.b=!0
r.V(q)}},
ad:function(a){var s,r=this
a.cf(r.d)
r.c.a7(a)
r.b.toString
a.cy.bn(V.bn())
s=V.bn()
a.db.bn(s)
r.e.an(0,a)
r.e.ad(a)
r.b.toString
a.cy.b3()
a.db.b3()
r.c.toString
a.ce()},
$ia1:1}
M.ci.prototype={
V:function(a){var s=this.y
if(s!=null)s.B(a)},
aS:function(){return this.V(null)},
eG:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bi()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aG()
s.b=!0
this.V(s)},
eI:function(a,b){var s,r
for(s=b.gM(b),r=this.gW();s.u();)s.gA(s).gm().J(0,r)
s=new D.aH()
s.b=!0
this.V(s)},
sd4:function(a){var s,r,q=this
if(a==null)a=X.l6(null)
s=q.b
if(s!==a){if(s!=null)s.gm().J(0,q.gW())
r=q.b
q.b=a
a.gm().l(0,q.gW())
s=new D.w("camera",r,q.b)
s.b=!0
q.V(s)}},
sb5:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().J(0,r.gW())
s=r.c
r.c=b
b.gm().l(0,r.gW())
q=new D.w("target",s,r.c)
q.b=!0
r.V(q)}},
sb6:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().J(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gW())
q=new D.w("technique",s,r.d)
q.b=!0
r.V(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.E():s},
ad:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
a.cf(h.d)
h.c.a7(a)
s=h.b
r=a.c
q=a.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.aw(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bn(k)
r=$.l7
if(r==null){r=V.l9()
q=V.km()
p=$.lx
r=V.l4(r,q,p==null?$.lx=new V.C(0,0,-1):p)
$.l7=r
j=r}else j=r
r=s.b
if(r!=null){i=r.aP(0,a,s)
if(i!=null)j=i.q(0,j)}a.db.bn(j)
s=h.d
if(s!=null)s.an(0,a)
for(s=h.e.a,s=new J.a3(s,s.length);s.u();)s.d.an(0,a)
for(s=h.e.a,s=new J.a3(s,s.length);s.u();)s.d.ad(a)
h.b.toString
a.cy.b3()
a.db.b3()
h.c.aO(a)
a.ce()},
$ia1:1}
M.a1.prototype={}
A.dq.prototype={}
A.ha.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
ha:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
d9:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a4.prototype={
gao:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a4))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.dV.prototype={
dX:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.U("")
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
A.oK(c6,s)
A.oM(c6,s)
A.oL(c6,s)
A.oO(c6,s)
A.oP(c6,s)
A.oN(c6,s)
A.oQ(c6,s)
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
c1.dt(0,q.charCodeAt(0)==0?q:q,A.oJ(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.O(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.O(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.O(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.O(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.O(0,"viewMat"))
if(c6.x1)c1.k1=t.W.a(c1.y.O(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.O(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.O(0,"colorMat"))
c1.r1=H.d([],t.O)
q=c6.bg
if(q>0){c1.k4=c1.y.O(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.p(P.q(c3+n+c4))
p.push(r.a(k))}}if(c6.a.a)c1.r2=t.r.a(c1.y.O(0,"emissionClr"))
if(c6.b.a)c1.x1=t.r.a(c1.y.O(0,"ambientClr"))
if(c6.c.a)c1.y2=t.r.a(c1.y.O(0,"diffuseClr"))
if(c6.d.a)c1.bh=t.r.a(c1.y.O(0,"invDiffuseClr"))
r=c6.e.a
if(!r)q=!1
else q=!0
if(q){c1.dg=t.n.a(c1.y.O(0,"shininess"))
if(r)c1.df=t.r.a(c1.y.O(0,"specularClr"))}if(c6.db){c1.dh=t.Q.a(c1.y.O(0,"envSampler"))
if(c6.r.a)c1.di=t.r.a(c1.y.O(0,"reflectClr"))
r=c6.x.a
if(!r)q=!1
else q=!0
if(q){c1.dj=t.n.a(c1.y.O(0,"refraction"))
if(r)c1.dk=t.r.a(c1.y.O(0,"refractClr"))}}if(c6.y.a)c1.dl=t.n.a(c1.y.O(0,"alpha"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.bY=new H.z(t.J)
c1.bZ=new H.z(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.r)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.d([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.p(P.q(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.p(P.q(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.p(P.q(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.ae()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.p(P.q(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.p(P.q(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.p(P.q(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.cJ(k,c,b,a4,a3,a2))}c1.bZ.j(0,h,f)
m=c1.bY
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.p(P.q(c3+d+c4))
m.j(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.c_=new H.z(t.J)
c1.c0=new H.z(t.af)
for(p=t.r,o=t.u,n=t.dv,j=0;j<r.length;r.length===q||(0,H.r)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.d([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.ae()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.p(P.q(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.p(P.q(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.p(P.q(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.p(P.q(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.p(P.q(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.p(P.q(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.cK(a8,a7,a6,k,c,a9))}c1.c0.j(0,h,f)
m=c1.c_
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.p(P.q(c3+d+c4))
m.j(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.c1=new H.z(t.J)
c1.c2=new H.z(t.gr)
for(p=t.r,o=t.W,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.r)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.d([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.p(P.q(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.p(P.q(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.p(P.q(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.ae()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.p(P.q(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.cM(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.c2.j(0,h,f)
a5=c1.c1
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.p(P.q(c3+b1+c4))
a5.j(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.c3=new H.z(t.J)
c1.c4=new H.z(t.bR)
for(p=t.r,o=t.n,n=t.y,m=t.u,e=t.fF,j=0;j<r.length;r.length===q||(0,H.r)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.d([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.p(P.q(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.p(P.q(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.p(P.q(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.p(P.q(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.ae()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.p(P.q(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.p(P.q(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.p(P.q(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.p(P.q(c3+b0+c4))
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
if(a0==null)H.p(P.q(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.p(P.q(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.p(P.q(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.p(P.q(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.p(P.q(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.cO(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.c4.j(0,h,f)
d=c1.c3
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.p(P.q(c3+b0+c4))
d.j(0,h,k)}}}},
fC:function(a,b){}}
A.du.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dC.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.ef.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.et.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.hW.prototype={
i:function(a){return this.aY}}
A.cJ.prototype={}
A.cK.prototype={}
A.cM.prototype={}
A.cO.prototype={}
A.bR.prototype={
ct:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dt:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cE(b,35633)
p.f=p.cE(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.p(P.q("Failed to link shader: "+H.f(q)))}p.fG()
p.fI()},
a7:function(a){a.a.useProgram(this.r)
this.x.ha()},
cE:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.q("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
fG:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.u(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dq(n,r.name,q))}p.x=new A.ha(o)},
fI:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.u(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.h2(r.type,r.size,r.name,q))}p.y=new A.iQ(o)},
aF:function(a,b,c){var s=this.a
if(a===1)return new A.bS(s,b,c)
else return A.kl(s,this.r,b,a,c)},
ei:function(a,b,c){var s=this.a
if(a===1)return new A.cN(s,b,c)
else return A.kl(s,this.r,b,a,c)},
ej:function(a,b,c){var s=this.a
if(a===1)return new A.eS(s,b,c)
else return A.kl(s,this.r,b,a,c)},
bd:function(a,b){return new P.fh(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
h2:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aF(b,c,d)
case 5121:return s.aF(b,c,d)
case 5122:return s.aF(b,c,d)
case 5123:return s.aF(b,c,d)
case 5124:return s.aF(b,c,d)
case 5125:return s.aF(b,c,d)
case 5126:return new A.eO(s.a,c,d)
case 35664:return new A.cI(s.a,c,d)
case 35665:return new A.eP(s.a,c,d)
case 35666:return new A.eQ(s.a,c,d)
case 35667:return new A.iN(s.a,c,d)
case 35668:return new A.iO(s.a,c,d)
case 35669:return new A.iP(s.a,c,d)
case 35674:return new A.iR(s.a,c,d)
case 35675:return new A.eR(s.a,c,d)
case 35676:return new A.cL(s.a,c,d)
case 35678:return s.ei(b,c,d)
case 35680:return s.ej(b,c,d)
case 35670:throw H.c(s.bd("BOOL",c))
case 35671:throw H.c(s.bd("BOOL_VEC2",c))
case 35672:throw H.c(s.bd("BOOL_VEC3",c))
case 35673:throw H.c(s.bd("BOOL_VEC4",c))
default:throw H.c(P.q("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.bD.prototype={
i:function(a){return this.b}}
A.eG.prototype={
e0:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i="Required uniform value, ",h=", was not defined or used in shader."
j.dt(0,u.j.charCodeAt(0)==0?u.j:u.j,A.nr(a,b))
j.z=j.x.h(0,"posAttr")
s=t.dF
j.Q=s.a(j.y.O(0,"txtCount"))
j.ch=t.y.a(j.y.O(0,"backClr"))
j.cx=H.d([],t.ga)
j.cy=H.d([],t.O)
r=t.dA
j.db=H.d([],r)
j.dx=H.d([],r)
j.dy=H.d([],r)
j.fr=H.d([],r)
j.fx=H.d([],t.D)
for(r=t.aq,q=t.q,p=t.u,o=0;o<a;++o){n=j.cx
m=j.y
l="txt"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(p.a(k))
n=j.cy
m=j.y
l="clrMat"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(q.a(k))
n=j.db
m=j.y
l="srcLoc"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.dx
m=j.y
l="srcSize"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.dy
m=j.y
l="destLoc"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.fr
m=j.y
l="destSize"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.fx
m=j.y
l="flip"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(s.a(k))}}}
A.eN.prototype={}
A.iQ.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
O:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.R()},
R:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.bS.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.eO.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.cI.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.eP.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.eQ.prototype={
dQ:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.eR.prototype={
al:function(a){var s=new Float32Array(H.bv(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.cL.prototype={
al:function(a){var s=new Float32Array(H.bv(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.cN.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.eS.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.k1.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.jM.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.kN(l.$1(m),k)
k=J.kN(l.$1(m+3.141592653589793/n.c),k).Y(0,j)
s=new V.C(k.a,k.b,k.c).F()
l=$.ly
if(l==null){l=new V.C(1,0,0)
$.ly=l
r=l}else r=l
q=s.ay(!J.D(s,r)?V.lA():r).F()
r=q.ay(s).F()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.q(0,l*k)
k=q.q(0,o*k)
k=j.v(0,new V.T(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.D(a.f,k)){a.f=k
l=a.a
if(l!=null)l.ac()}}}
F.dE.prototype={
aX:function(){var s=this
if(!s.gda()){C.b.J(s.a.a.d.b,s)
s.a.a.ac()}s.ft()
s.fu()
s.fv()},
fD:function(a){this.a=a
a.d.b.push(this)},
fE:function(a){this.b=a
a.d.c.push(this)},
fF:function(a){this.c=a
a.d.d.push(this)},
ft:function(){var s=this.a
if(s!=null){C.b.J(s.d.b,this)
this.a=null}},
fu:function(){var s=this.b
if(s!=null){C.b.J(s.d.c,this)
this.b=null}},
fv:function(){var s=this.c
if(s!=null){C.b.J(s.d.d,this)
this.c=null}},
gda:function(){return this.a==null||this.b==null||this.c==null},
eb:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cS()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dA())return p
return q.F()},
ed:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.Y(0,n)
q=new V.C(o.a,o.b,o.c).F()
o=r.Y(0,n)
return q.ay(new V.C(o.a,o.b,o.c).F()).F()},
bU:function(){var s,r=this
if(r.d!=null)return!0
s=r.eb()
if(s==null){s=r.ed()
if(s==null)return!1}r.d=s
r.a.a.ac()
return!0},
ea:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cS()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dA())return p
return q.F()},
ec:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.Y(0,e)
o=new V.C(j.a,j.b,j.c).F()
if(q.a-r.a<0)o=o.N(0)}else{n=(j-s.b)/p
j=b.Y(0,e).q(0,n).v(0,e).Y(0,h)
o=new V.C(j.a,j.b,j.c).F()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.N(0)}j=l.d
if(j!=null){m=j.F()
o=m.ay(o).F().ay(m).F()}return o},
bS:function(){var s,r=this
if(r.e!=null)return!0
s=r.ea()
if(s==null){s=r.ec()
if(s==null)return!1}r.e=s
r.a.a.ac()
return!0},
gfZ:function(a){var s=this
if(J.D(s.a,s.b))return!0
if(J.D(s.b,s.c))return!0
if(J.D(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var s,r,q=this
if(q.gda())return a+"disposed"
s=a+C.a.aB(J.ar(q.a.e),0)+", "+C.a.aB(J.ar(q.b.e),0)+", "+C.a.aB(J.ar(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
R:function(){return this.G("")}}
F.hB.prototype={}
F.ix.prototype={
b0:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.hL.prototype={}
F.hM.prototype={}
F.iL.prototype={
b0:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
return r==s.e}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
return r==s.e}else return!1}}}
F.ie.prototype={}
F.iq.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.E():s},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ax()||!1
if(!r.a.ax())s=!1
q=r.e
if(q!=null)q.aC(0)
return s},
ho:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.lV(m).T("t<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghe(s)
C.b.ci(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(o!=null&&a.b0(0,r,o)){q.push(o)
C.b.ci(s,p)}}if(q.length>1)b.hn(q)}}n.a.w()
n.c.cj()
n.d.cj()
n.b.hF()
n.c.ck(new F.iL())
n.d.ck(new F.ix())
m=n.e
if(m!=null)m.aC(0)},
d3:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aD().a)!==0?1:0
if((s&$.bb().a)!==0)++r
if((s&$.ba().a)!==0)++r
if((s&$.bz().a)!==0)++r
if((s&$.bA().a)!==0)++r
if((s&$.dj().a)!==0)++r
if((s&$.dk().a)!==0)++r
if((s&$.c4().a)!==0)++r
if((s&$.b9().a)!==0)++r
q=a6.gcp(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.fW(k)
i=j.gcp(j)
if(k>=m)return H.b(n,k)
n[k]=new Z.dv(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.b(g,h)
f=g[h].hm(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.b(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.bv(o)),35044)
s.bindBuffer(a3,null)
a=new Z.c8(new Z.f0(a3,b),n,a6)
a.b=H.d([],t.aZ)
a2.b.toString
if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)}a1=Z.lB(s,34963,a0)
a.b.push(new Z.cm(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].c
m.a.a.w()
a0.push(m.e)}a1=Z.lB(s,34963,a0)
a.b.push(new Z.cm(4,a0.length,a1))}return a},
i:function(a){var s=this,r=H.d([],t.i)
if(s.a.c.length!==0){r.push("Vertices:")
r.push(s.a.G("   "))}s.b.toString
if(s.c.b.length!==0){r.push("Lines:")
r.push(s.c.G("   "))}if(s.d.b.length!==0){r.push("Faces:")
r.push(s.d.G("   "))}return C.b.p(r,"\n")},
ac:function(){var s=this.e
if(s!=null)s.B(null)}}
F.ir.prototype={
fU:function(a){var s,r,q,p,o=H.d([],t.b),n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.l(0,n)
s.a.l(0,q)
s.a.l(0,p)
o.push(F.dF(n,q,p))}return o},
fV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
if(n){l.l(0,k)
s.a.l(0,j)
s.a.l(0,h)
f.push(F.dF(k,j,h))
s.a.l(0,k)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.dF(k,h,g))}else{l.l(0,j)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.dF(j,h,g))
s.a.l(0,j)
s.a.l(0,g)
s.a.l(0,k)
f.push(F.dF(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
ck:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b0(0,n,l)){n.aX()
break}}}}},
cj:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.gfZ(q)
if(r)q.aX()}},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].bU())q=!1
return q},
bT:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].bS())q=!1
return q},
i:function(a){return this.R()},
G:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].G(a))
return C.b.p(p,"\n")},
R:function(){return this.G("")}}
F.is.prototype={
gk:function(a){return this.b.length},
ck:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b0(0,n,l)){n.aX()
break}}}}},
cj:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=J.D(q.a,q.b)
if(r)q.aX()}},
i:function(a){return this.R()},
G:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].G(a+(""+s+". ")))}return C.b.p(q,"\n")},
R:function(){return this.G("")}}
F.it.prototype={
gk:function(a){return 0},
hF:function(){var s,r
for(s=-1;!1;--s){r=this.b
return H.b(r,s)
r=r[s].gii()
r=r.gie(r)
if(r.gk(r).a_(0,1)){r=this.b
return H.b(r,s)
r[s].aX()}}},
i:function(a){return this.R()},
G:function(a){var s,r,q=H.d([],t.i)
for(s=this.b,r=0;!1;++r){if(r>=0)return H.b(s,r)
q.push(s[r].G(a))}return C.b.p(q,"\n")},
R:function(){return this.G("")}}
F.eZ.prototype={
d8:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.j6(s.cx,p,m,r,q,o,n,a,l)},
hm:function(a){var s,r,q=this
if(a.n(0,$.aD())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.bb())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.ba())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.bz())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.n(0,$.bA())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.dj())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.dk())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.n(0,$.c4()))return H.d([q.ch],t.m)
else if(a.n(0,$.b9())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
bU:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cS()
r.d.D(0,new F.jh(q))
r.r=q.a.F()
q=r.a
if(q!=null){q.ac()
q=r.a.e
if(q!=null)q.aC(0)}return!0},
bS:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cS()
r.d.D(0,new F.jg(q))
r.x=q.a.F()
q=r.a
if(q!=null){q.ac()
q=r.a.e
if(q!=null)q.aC(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.aB(J.ar(q.e),0))
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
o.push(V.I(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.p(o,", ")
return a+"{"+r+"}"},
R:function(){return this.G("")}}
F.jh.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jg.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.j7.prototype={
w:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
s[p].e=q;++q}this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.q("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.ac()
return!0},
bf:function(a,b,c,d,e,f){var s=F.j6(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gk:function(a){return this.c.length},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].bU()
return!0},
bT:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].bS()
return!0},
fY:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r.F()
if(!J.D(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}}return!0},
i:function(a){return this.R()},
G:function(a){var s,r,q,p
this.w()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].G(a))
return C.b.p(s,"\n")},
R:function(){return this.G("")}}
F.j8.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
D:function(a,b){var s=this
C.b.D(s.b,b)
C.b.D(s.c,new F.j9(s,b))
C.b.D(s.d,new F.ja(s,b))},
i:function(a){return this.R()},
R:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].G(""))
return C.b.p(p,"\n")}}
F.j9.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.ja.prototype={
$1:function(a){var s=this.a
if(!J.D(a.a,s)&&!J.D(a.b,s))this.b.$1(a)}}
F.jb.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.b(r,s)
return r[s]}else{if(b<0)return H.b(r,b)
return r[b]}},
i:function(a){return this.R()},
R:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].G(""))
return C.b.p(p,"\n")}}
F.jd.prototype={}
F.jc.prototype={
b0:function(a,b,c){return J.D(b.f,c.f)}}
F.je.prototype={}
F.ic.prototype={
hn:function(a){var s,r,q,p,o,n,m=V.cS()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.C(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.F()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){p=a[r]
o=q?null:m.F()
if(!J.D(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.B(null)}}}return null}}
F.jf.prototype={
gk:function(a){return 0},
i:function(a){return this.R()},
R:function(){var s,r,q=H.d([],t.i)
for(s=this.b,r=0;!1;++r){if(r>=0)return H.b(s,r)
q.push(s[r].G(""))}return C.b.p(q,"\n")}}
O.dU.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.E():s},
K:function(a){var s=this.fr
if(s!=null)s.B(a)},
at:function(){return this.K(null)},
cM:function(a){this.a=null
this.K(a)},
fB:function(){return this.cM(null)},
eA:function(a,b){var s=new D.aG()
s.b=!0
this.K(s)},
eC:function(a,b){var s=new D.aH()
s.b=!0
this.K(s)},
cC:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.z(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gaq()
n=d.h(0,p.gaq())
d.j(0,o,n==null?1:n)}m=H.d([],t.am)
d.D(0,new O.i_(f,m))
C.b.aR(m,new O.i0())
l=new H.z(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){o=l.h(0,0)
l.j(0,0,o==null?1:o)}k=H.d([],t.M)
l.D(0,new O.i1(f,k))
C.b.aR(k,new O.i2())
j=new H.z(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gaq()
n=j.h(0,p.gaq())
j.j(0,o,n==null?1:n)}i=H.d([],t.d1)
j.D(0,new O.i3(f,i))
C.b.aR(i,new O.i4())
h=new H.z(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.r)(e),++q){p=e[q]
r=p.gaq()
o=h.h(0,p.gaq())
h.j(0,r,o==null?1:o)}g=H.d([],t.cz)
h.D(0,new O.i5(f,g))
C.b.aR(g,new O.i6())
e=C.c.a1(f.e.a.length+3,4)
f.dy.toString
return A.n5(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
e9:function(a,b){},
an:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a3(s,s.length);s.u();){r=s.d
r.toString
q=$.j5
if(q==null)q=$.j5=new V.C(0,0,1)
r.a=q
p=$.j4
r.d=p==null?$.j4=new V.C(0,1,0):p
p=$.j3
r.e=p==null?$.j3=new V.C(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bp(q).F()
r.d=o.bp(r.d).F()
r.e=o.bp(r.e).F()}}}},
dH:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cC()
s=b4.fr.h(0,b3.aY)
if(s==null){s=A.n4(b3,b4.a)
b4.cY(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bh
b3=b5.e
if(!(b3 instanceof Z.c8))b3=b5.e=null
if(b3==null||!b3.d.n(0,q)){b3=r.k4
if(b3)b5.d.ax()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bT()
o.a.bT()
o=o.e
if(o!=null)o.aC(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.fY()
n=n.e
if(n!=null)n.aC(0)}l=b5.d.d3(new Z.f1(b4.a),q)
l.az($.aD()).e=b2.a.Q.c
if(b3)l.az($.bb()).e=b2.a.cx.c
if(p)l.az($.ba()).e=b2.a.ch.c
if(r.r2)l.az($.bz()).e=b2.a.cy.c
if(o)l.az($.bA()).e=b2.a.db.c
if(r.ry)l.az($.b9()).e=b2.a.dx.c
b5.e=l}k=H.d([],t.A)
b2.a.a7(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga2(p)
b3=b3.dy
b3.toString
b3.al(p.a8(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga2(p)
o=b4.dx
o=b4.cx=p.q(0,o.ga2(o))
p=o}b3=b3.fr
b3.toString
b3.al(p.a8(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghE()
o=b4.dx
o=b4.ch=p.q(0,o.ga2(o))
p=o}b3=b3.fy
b3.toString
b3.al(p.a8(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga2(p)
b3=b3.fx
b3.toString
b3.al(p.a8(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.al(C.j.a8(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.al(C.j.a8(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.al(C.j.a8(p,!0))}if(r.bg>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.b(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.b(b3,i)
b3=b3[i]
h=new Float32Array(H.bv(p.a8(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}if(r.a.a){b3=b2.a
p=b2.f.f
b3=b3.r2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.k1){if(r.b.a){b3=b2.a
p=b2.r.f
b3=b3.x1
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.c.a){b3=b2.a
p=b2.x.f
b3=b3.y2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.d.a){b3=b2.a
p=b2.y.f
b3=b3.bh
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dg
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.df
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.z
if(b3.length>0){g=new H.z(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.r)(p),++f){e=p[f]
d=e.gaq()
c=g.h(0,d)
if(c==null)c=0
g.j(0,d,c+1)
b=J.c5(b2.a.bZ.h(0,d),c)
n=e.ghT()
m=$.aN
n=n.b8(m==null?$.aN=new V.T(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghY()
m=$.aN
n=n.b8(m==null?$.aN=new V.T(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaK(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gde()){n=e.gcZ()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gd_()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gd0()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.r)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bY.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga2(p)
a0=new H.z(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.r)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.j(0,0,c+1)
b=J.c5(b2.a.c0.h(0,0),c)
n=a.bp(e.a).F()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.r)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.c_.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga2(p)
a3=new H.z(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.r)(p),++f){e=p[f]
d=e.gaq()
c=a3.h(0,d)
if(c==null)c=0
a3.j(0,d,c+1)
b=J.c5(b2.a.c2.h(0,d),c)
a4=a.q(0,e.ga2(e))
n=e.ga2(e)
m=$.aN
n=n.b8(m==null?$.aN=new V.T(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aN
n=a4.b8(n==null?$.aN=new V.T(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaK(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaj()
n=a4.dw(0)
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
h=new Float32Array(H.bv(new V.dX(m,a1,a2,a5,a6,a7,a8,a9,n).a8(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaj()
n=e.gaj()
if(!C.b.P(k,n)){n.saZ(0,k.length)
k.push(n)}n=e.gaj()
m=n.gb_(n)
if(m){m=b.f
m.toString
a1=n.gb_(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gaZ(n))}e.gaQ()
n=e.gdR()
m=b.x
m.toString
a1=n.gh7(n)
a2=n.gh8(n)
a5=n.gh9()
n=n.gh6()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaQ()
if(!C.b.P(k,n)){n.saZ(0,k.length)
k.push(n)}n=e.gaQ()
m=n.gb_(n)
if(m){m=b.r
m.toString
a1=n.gb_(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gaZ(n))}if(e.gde()){n=e.gcZ()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gd_()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gd0()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.r)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.c1.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga2(p)
b1=new H.z(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.r)(p),++f){e=p[f]
d=e.gaq()
c=b1.h(0,d)
if(c==null)c=0
b1.j(0,d,c+1)
b=J.c5(b2.a.c4.h(0,d),c)
n=e.ghD(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghW(e).F()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.b8(e.ghD(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaK(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaj()
n=e.gcm()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcl(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gig()
m=b.x
m.a.uniform1f(m.d,n)
n=e.gih()
m=b.y
m.a.uniform1f(m.d,n)
e.gaj()
n=e.gaj()
if(!C.b.P(k,n)){n.saZ(0,k.length)
k.push(n)}n=e.gaj()
m=n.gb_(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaQ()
n=e.gdR()
m=b.z
m.toString
a1=n.gh7(n)
a2=n.gh8(n)
a5=n.gh9()
n=n.gh6()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaQ()
if(!C.b.P(k,n)){n.saZ(0,k.length)
k.push(n)}n=e.gaQ()
m=n.gb_(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.ghX()){n=e.ghV()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.ghU()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gde()){n=e.gcZ()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gd_()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gd0()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.r)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.c3.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga2(p).dw(0)}b3=b3.id
b3.toString
b3.al(p.a8(0,!0))}if(r.db){b2.e9(k,b2.ch)
b3=b2.a
p=b2.ch
b3.fC(b3.dh,p)
if(r.r.a){b3=b2.a
p=b2.cx.f
b3=b3.di
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.dj
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.dk
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=r.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.dl
b3.a.uniform1f(b3.d,o)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].a7(b4)
b3=b5.e
b3.a7(b4)
b3.ad(b4)
b3.aO(b4)
if(p)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(i=0;i<k.length;++i)k[i].aO(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.d9()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cC().aY}}
O.i_.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.du(a,C.c.a1(b+3,4)*4))}}
O.i0.prototype={
$2:function(a,b){return J.dl(a.a,b.a)}}
O.i1.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dC(a,C.c.a1(b+3,4)*4))}}
O.i2.prototype={
$2:function(a,b){return J.dl(a.a,b.a)}}
O.i3.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.ef(a,C.c.a1(b+3,4)*4))}}
O.i4.prototype={
$2:function(a,b){return J.dl(a.a,b.a)}}
O.i5.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.et(a,C.c.a1(b+3,4)*4))}}
O.i6.prototype={
$2:function(a,b){return J.dl(a.a,b.a)}}
O.hU.prototype={
av:function(){var s,r=this
r.cr()
s=r.f
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.w(r.b,s,1)
s.b=!0
r.a.K(s)}}}
O.dW.prototype={
av:function(){},
cP:function(a){var s,r,q=this
if(!q.c.n(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.av()
s=q.a
s.a=null
s.K(null)}}}
O.hV.prototype={}
O.aK.prototype={
cO:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.w(q.b+".color",s,a)
r.b=!0
q.a.K(r)}},
av:function(){this.cr()
this.cO(new V.X(1,1,1))},
saK:function(a,b){this.cP(new A.a4(!0,!1,!1))
this.cO(b)}}
O.hX.prototype={}
O.hY.prototype={
av:function(){var s,r=this
r.cs()
s=r.ch
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.w(r.b+".refraction",s,1)
s.b=!0
r.a.K(s)}}}
O.hZ.prototype={
cQ:function(a){var s=this,r=s.ch
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.w(s.b+".shininess",r,a)
r.b=!0
s.a.K(r)}},
av:function(){this.cs()
this.cQ(100)}}
O.eB.prototype={}
O.eF.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.E():s},
K:function(a){var s=this.e
if(s!=null)s.B(a)},
at:function(){return this.K(null)},
eQ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gas(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.f
if(n==null){n=new D.bi()
n.d=0
o.f=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.at()},
eS:function(a,b){var s,r
for(s=b.gM(b),r=this.gas();s.u();)s.gA(s).gm().J(0,r)
this.at()},
saW:function(a){var s=this.f
if(s!==a){this.f=a
s=new D.w("blend",s,a)
s.b=!0
this.K(s)}},
en:function(a){a=C.c.a1(a+3,4)*4
if(a<=0)return 4
return a},
dH:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.en(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}s=h.b
if(s==null){s=h.f
r="TextureLayout_"+g+"_"+C.c.i(s.a)
q=a.fr.h(0,r)
if(q==null){q=A.nq(g,s,a.a)
a.cY(q)}h.b=q
s=q}if(b.e==null){s=b.d.d3(new Z.f1(a.a),$.aD())
r=s.az($.aD())
p=h.b
r.e=p.z.c
b.e=s
s=p}s.a7(a)
o=H.d([],t.A)
for(n=0,m=0;s=h.c.a,m<s.length;++m){l=s[m]
if(l!=null&&l.a!=null){s=l.a
if(s!=null)if(!C.b.P(o,s)){s.a=o.length
o.push(s)}s=h.b
r=l.a
s=s.cx
if(n>=s.length)return H.b(s,n)
s=s[n]
p=r==null||!r.d
k=s.a
s=s.d
if(p)k.uniform1i(s,0)
else k.uniform1i(s,r.a)
s=h.b
r=l.b
s=s.cy
if(n>=s.length)return H.b(s,n)
s=s[n]
if(r==null){r=$.i7
if(r==null){r=new V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.i7=r}}j=new Float32Array(H.bv(r.a8(0,!0)))
s.a.uniformMatrix4fv(s.d,!1,j)
s=h.b
i=l.c
s.toString
if(i==null){r=$.cD
if(r==null){r=V.ej(0,0,1,1)
$.cD=r
i=r}else i=r}r=s.db
if(n>=r.length)return H.b(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.dx
if(n>=s.length)return H.b(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
i=l.d
s.toString
if(i==null){r=$.cD
if(r==null){r=V.ej(0,0,1,1)
$.cD=r
i=r}else i=r}r=s.dy
if(n>=r.length)return H.b(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.fr
if(n>=s.length)return H.b(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
r=l.e
s=s.fx
if(n>=s.length)return H.b(s,n)
s=s[n]
r=r?1:0
s.a.uniform1i(s.d,r);++n}}s=h.b.Q
s.a.uniform1i(s.d,n)
s=h.b
r=h.a
s.ch.dQ(r)
for(s=a.a,m=0;m<o.length;++m){r=o[m]
if(!r.c&&r.d){r.c=!0
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}r=b.e
if(r instanceof Z.c8){r.a7(a)
r.ad(a)
r.aO(a)}else b.e=null
r=h.b
r.toString
s.useProgram(null)
r.x.d9()
for(m=0;m<o.length;++m){r=o[m]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,null)}}}}
O.bq.prototype={
K:function(a){var s=this.f
if(s!=null)s.B(a)},
at:function(){return this.K(null)},
saj:function(a){var s,r=this,q=r.a
if(q!=a){if(q!=null)q.gm().J(0,r.gas())
s=r.a
r.a=a
if(a!=null)a.gm().l(0,r.gas())
q=new D.w("texture",s,r.a)
q.b=!0
r.K(q)}},
sd7:function(a){var s,r,q=this
if(a==null)a=V.bn()
if(!J.D(q.b,a)){s=q.b
q.b=a
r=new D.w("colorMatrix",s,a)
r.b=!0
q.K(r)}}}
T.eE.prototype={}
T.iC.prototype={}
T.iD.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.E():s}}
X.hd.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.E():s},
a0:function(a){var s=this.fr
if(s!=null)s.B(a)},
sak:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.w("width",s,b)
s.b=!0
r.a0(s)}},
sag:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.w("height",s,b)
s.b=!0
r.a0(s)}},
a7:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
q=g.r
if(typeof r!=="number")return r.q()
g.sak(0,C.c.X(r*q))
s=s.drawingBufferHeight
q=g.x
if(typeof s!=="number")return s.q()
g.sag(0,C.c.X(s*q))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=s.getParameter(3379)
n=V.kJ(q)
m=V.kJ(p)
o=V.kJ(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.a_.hM(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.ll(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.dd()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.dd()
r=g.ch
q=r.b
g.z=q
g.c=r.r
g.d=r.x
s.bindTexture(e,q)
r=s.createRenderbuffer()
g.Q=r
s.bindRenderbuffer(d,r)
s.renderbufferStorage(d,33189,g.c,g.d)
r=s.createFramebuffer()
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
r=g.dy
q=r.c
a.c=C.d.X(q*g.a)
p=r.d
a.d=C.d.X(p*g.b)
j=r.a
i=g.c
h=C.d.X(j*i)
r=r.b
j=g.d
s.viewport(h,C.d.X(r*j),C.d.X(q*i),C.d.X(p*j))
s.clearDepth(g.db)
r=g.cx
s.clearColor(r.a,r.b,r.c,r.d)
s.clear(16640)},
aO:function(a){a.a.bindFramebuffer(36160,null)}}
X.k8.prototype={}
X.hF.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.E():s},
a7:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
r=m.drawingBufferHeight
q=this.r
p=q.a
if(typeof s!=="number")return H.u(s)
o=C.d.X(p*s)
p=q.b
if(typeof r!=="number")return H.u(r)
n=C.d.X(p*r)
p=C.d.X(q.c*s)
a.c=p
q=C.d.X(q.d*r)
a.d=q
m.viewport(o,n,p,q)
m.clearDepth(this.c)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
aO:function(a){}}
X.hH.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.E():s}}
X.ea.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.E():s},
a0:function(a){var s=this.f
if(s!=null)s.B(a)},
e6:function(){return this.a0(null)}}
X.iA.prototype={}
V.k0.prototype={
$1:function(a){var s=C.d.dK(this.a.ghi(),2)
if(s!=="0.00")P.kK(s+" fps")}}
V.ih.prototype={
cW:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.ls().gcg().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.cV(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.k6(k.c).l(0,o)
m=W.mU("radio")
m.checked=q
m.name=s
W.Y(m,"change",new V.ii(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.k6(k.c).l(0,p.createElement("br"))},
bR:function(a,b,c){return this.cW(a,b,c,!1)},
cV:function(a){var s,r,q=P.ls(),p=t.X,o=P.n1(q.gcg(),p,p)
o.j(0,this.a,a)
s=q.dI(0,o)
p=window.history
r=s.gbP()
p.toString
p.replaceState(new P.ju([],[]).bq(""),"",r)}}
V.ii.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.cV(s.d)}}}
V.iu.prototype={
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
W.Y(o,"scroll",new V.iw(m),!1)},
cX:function(a){var s,r,q,p,o,n,m,l
this.fH()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hl(a)
q.toString
p=new H.N(p)
p=new P.bX(q.dL(new H.bI(p,p.gk(p))).a())
for(;p.u();){q=p.gA(p)
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
if(H.md(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.b(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.ky(C.V,q,C.e,!1)
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
fS:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
fH:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=new L.iG()
s.a=new H.z(t.cn)
s.b=new H.z(t.w)
s.c=P.l3(t.X)
s.d=s.H(0,o)
r=s.H(0,o).p(0,n)
q=K.a2(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.H(0,n).p(0,n)
q=new K.aZ()
p=t.L
q.a=H.d([],p)
r.a.push(q)
r=K.a2(new H.N("*"))
q.a.push(r)
r=s.H(0,n).p(0,"BoldEnd")
q=K.a2(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.H(0,o).p(0,m)
q=K.a2(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.H(0,m).p(0,m)
q=new K.aZ()
q.a=H.d([],p)
r.a.push(q)
r=K.a2(new H.N("_"))
q.a.push(r)
r=s.H(0,m).p(0,l)
q=K.a2(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.H(0,o).p(0,k)
q=K.a2(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.H(0,k).p(0,k)
q=new K.aZ()
q.a=H.d([],p)
r.a.push(q)
r=K.a2(new H.N("`"))
q.a.push(r)
r=s.H(0,k).p(0,"CodeEnd")
q=K.a2(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.H(0,o).p(0,j)
q=K.a2(new H.N("["))
r.a.push(q)
r.c=!0
r=s.H(0,j).p(0,i)
q=K.a2(new H.N("|"))
r.a.push(q)
q=s.H(0,j).p(0,h)
r=K.a2(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.H(0,j).p(0,j)
r=new K.aZ()
r.a=H.d([],p)
q.a.push(r)
q=K.a2(new H.N("|]"))
r.a.push(q)
q=s.H(0,i).p(0,h)
r=K.a2(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.H(0,i).p(0,i)
r=new K.aZ()
r.a=H.d([],p)
q.a.push(r)
q=K.a2(new H.N("|]"))
r.a.push(q)
s.H(0,o).p(0,g).a.push(new K.h8())
q=s.H(0,g).p(0,g)
r=new K.aZ()
r.a=H.d([],p)
q.a.push(r)
q=K.a2(new H.N("*_`["))
r.a.push(q)
q=s.H(0,"BoldEnd")
q.d=q.a.b7(n)
q=s.H(0,l)
q.d=q.a.b7(m)
q=s.H(0,"CodeEnd")
q.d=q.a.b7(k)
q=s.H(0,h)
q.d=q.a.b7("Link")
q=s.H(0,g)
q.d=q.a.b7(g)
this.b=s}}
V.iw.prototype={
$1:function(a){P.lo(C.p,new V.iv(this.a))}}
V.iv.prototype={
$0:function(){var s=C.d.X(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
S.jW.prototype={
$0:function(){this.a.saW(C.w)}}
S.jX.prototype={
$0:function(){this.a.saW(C.i)}}
S.jY.prototype={
$0:function(){this.a.saW(C.x)}}
S.jZ.prototype={
$0:function(){this.a.saW(C.o)}};(function aliases(){var s=J.a.prototype
s.dU=s.i
s=J.aY.prototype
s.dV=s.i
s=K.dJ.prototype
s.dT=s.aM
s.cq=s.i
s=O.dW.prototype
s.cr=s.av
s=O.aK.prototype
s.cs=s.av})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"on","mY",22)
r(P,"p2","nA",7)
r(P,"p3","nB",7)
r(P,"p4","nC",7)
q(P,"m3","oY",8)
r(W,"qz","hu",23)
var k
p(k=E.bh.prototype,"gdE",0,0,null,["$1","$0"],["dF","hv"],0,0)
p(k,"gdC",0,0,null,["$1","$0"],["dD","hs"],0,0)
o(k,"ghq","hr",4)
o(k,"ght","hu",4)
p(k=E.eH.prototype,"gcv",0,0,null,["$1","$0"],["cz","cw"],0,0)
n(k,"ghI","dJ",8)
m(k=X.eY.prototype,"geT","eU",5)
m(k,"geD","eE",5)
m(k,"geJ","eK",2)
m(k,"geX","eY",9)
m(k,"geV","eW",9)
m(k,"gf0","f1",2)
m(k,"gf4","f5",2)
m(k,"geN","eO",2)
m(k,"gf2","f3",2)
m(k,"geL","eM",2)
m(k,"gf6","f7",20)
m(k,"gf8","f9",5)
m(k,"gfo","fp",6)
m(k,"gfk","fl",6)
m(k,"gfm","fn",6)
p(D.bf.prototype,"ge1",0,0,null,["$1","$0"],["ar","e2"],0,0)
p(k=D.cr.prototype,"gcK",0,0,null,["$1","$0"],["cL","eZ"],0,0)
m(k,"gfa","fb",21)
o(k,"gex","ey",10)
o(k,"gfe","ff",10)
l(V.aa.prototype,"gk","c9",11)
l(V.C.prototype,"gk","c9",11)
p(k=U.bG.prototype,"gaG",0,0,null,["$1","$0"],["I","a6"],0,0)
o(k,"gev","ew",12)
o(k,"gfc","fd",12)
p(k=U.cP.prototype,"gaG",0,0,null,["$1","$0"],["I","a6"],0,0)
m(k,"gbD","bE",1)
m(k,"gbF","bG",1)
m(k,"gbH","bI",1)
p(k=U.cQ.prototype,"gaG",0,0,null,["$1","$0"],["I","a6"],0,0)
m(k,"gbD","bE",1)
m(k,"gbF","bG",1)
m(k,"gbH","bI",1)
m(k,"geo","ep",1)
m(k,"geq","er",1)
m(k,"gfO","fP",1)
m(k,"gfM","fN",1)
m(k,"gfK","fL",1)
m(U.cR.prototype,"ges","eu",1)
p(k=M.c9.prototype,"gW",0,0,null,["$1","$0"],["V","aS"],0,0)
o(k,"gfg","fh",13)
o(k,"gfi","fj",13)
p(M.cd.prototype,"gW",0,0,null,["$1","$0"],["V","aS"],0,0)
p(k=M.ci.prototype,"gW",0,0,null,["$1","$0"],["V","aS"],0,0)
o(k,"geF","eG",4)
o(k,"geH","eI",4)
p(k=O.dU.prototype,"gas",0,0,null,["$1","$0"],["K","at"],0,0)
p(k,"gfA",0,0,null,["$1","$0"],["cM","fB"],0,0)
o(k,"gez","eA",14)
o(k,"geB","eC",14)
p(k=O.eF.prototype,"gas",0,0,null,["$1","$0"],["K","at"],0,0)
o(k,"geP","eQ",15)
o(k,"geR","eS",15)
p(O.bq.prototype,"gas",0,0,null,["$1","$0"],["K","at"],0,0)
p(X.ea.prototype,"ge5",0,0,null,["$1","$0"],["a0","e6"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.kf,J.a,J.a3,P.J,P.cX,P.h,H.bI,P.dL,H.cj,H.eV,H.cb,H.iJ,H.id,H.fI,H.bC,P.av,H.hN,H.dS,H.dN,H.al,H.fk,P.d8,P.bW,P.bX,P.f3,P.cF,P.ey,P.cG,P.jD,P.d2,P.jp,P.cW,P.i,P.fV,P.cw,P.dx,P.jC,P.jB,P.aT,P.ad,P.O,P.bg,P.e9,P.cE,P.fh,P.hE,P.n,P.F,P.ak,P.A,P.U,P.bu,P.iT,P.fC,W.hm,W.ka,W.kn,W.K,W.ck,P.jt,P.fA,P.b2,K.h8,K.dJ,K.hT,K.ip,L.ev,L.eI,L.eJ,L.iG,O.Z,O.cx,E.hg,E.bh,E.bB,E.bO,E.fe,E.ij,E.eH,Z.f0,Z.f1,Z.c8,Z.cm,Z.bt,D.hh,D.bi,D.P,X.dw,X.dP,X.hK,X.hR,X.aj,X.ib,X.iH,X.eY,D.dt,D.bf,D.Q,D.ed,D.es,V.X,V.a7,V.hx,V.dX,V.aL,V.a8,V.T,V.bp,V.ei,V.aa,V.C,U.cP,U.cQ,U.cR,M.cd,M.ci,M.a1,A.dq,A.ha,A.a4,A.du,A.dC,A.ef,A.et,A.hW,A.cJ,A.cK,A.cM,A.cO,A.bD,A.eN,A.iQ,F.dE,F.hB,F.hL,F.hM,F.ie,F.iq,F.ir,F.is,F.it,F.eZ,F.j7,F.j8,F.jb,F.jd,F.je,F.jf,O.eB,O.dW,O.hX,O.bq,X.iA,X.k8,X.hH,X.ea,V.ih,V.iu])
q(J.a,[J.dM,J.cq,J.aY,J.t,J.bk,J.aI,H.cy,H.S,W.e,W.h7,W.bd,W.aF,W.G,W.f8,W.ai,W.hp,W.hq,W.fa,W.cg,W.fc,W.hr,W.k,W.fi,W.at,W.hG,W.fm,W.cl,W.hQ,W.i8,W.fq,W.fr,W.ax,W.fs,W.fu,W.ay,W.fy,W.fB,W.az,W.fD,W.aA,W.fJ,W.an,W.fN,W.iF,W.aB,W.fP,W.iI,W.iY,W.fW,W.fY,W.h_,W.h1,W.h3,P.aJ,P.fo,P.aM,P.fw,P.ig,P.fK,P.aP,P.fR,P.hb,P.f4,P.el,P.fG])
q(J.aY,[J.eb,J.bs,J.au])
r(J.hI,J.t)
q(J.bk,[J.cp,J.co])
q(P.J,[H.dQ,H.e5,H.dO,H.eU,H.en,H.ff,P.dp,P.e6,P.ah,P.eW,P.eT,P.ew,P.dy,P.dA])
r(P.ct,P.cX)
q(P.ct,[H.bT,W.f6,W.f5,P.dH])
r(H.N,H.bT)
q(P.h,[H.l,H.bm,H.cT,P.cn])
r(H.ch,H.bm)
q(P.dL,[H.dT,H.f2])
r(H.cc,H.cb)
q(H.bC,[H.iB,H.hJ,H.jQ,H.jR,H.jS,P.jj,P.ji,P.jk,P.jl,P.jy,P.jx,P.jK,P.jr,P.js,P.hO,P.hS,P.j0,P.j1,P.hs,P.ht,P.iX,P.iU,P.iV,P.iW,P.jA,P.jz,P.jF,P.jE,P.jG,P.jH,W.i9,W.ia,W.io,W.iz,W.jm,P.jv,P.jw,P.jL,P.hC,P.hD,P.hc,E.ik,E.il,E.im,E.iE,D.hz,D.hA,F.k1,F.jM,F.jh,F.jg,F.j9,F.ja,O.i_,O.i0,O.i1,O.i2,O.i3,O.i4,O.i5,O.i6,V.k0,V.ii,V.iw,V.iv,S.jW,S.jX,S.jY,S.jZ])
q(H.iB,[H.iy,H.c7])
r(P.cv,P.av)
r(H.z,P.cv)
r(H.cs,H.l)
r(H.bM,H.S)
q(H.bM,[H.cZ,H.d0])
r(H.d_,H.cZ)
r(H.bo,H.d_)
r(H.d1,H.d0)
r(H.cz,H.d1)
q(H.cz,[H.e0,H.e1,H.e2,H.e3,H.e4,H.cA,H.bN])
r(H.d9,H.ff)
r(P.d5,P.cn)
r(P.jq,P.jD)
r(P.cV,P.d2)
r(P.dc,P.cw)
r(P.bU,P.dc)
q(P.dx,[P.he,P.hv])
r(P.dz,P.ey)
q(P.dz,[P.hf,P.j2,P.j_])
r(P.iZ,P.hv)
q(P.O,[P.W,P.j])
q(P.ah,[P.bQ,P.dK])
r(P.f9,P.bu)
q(W.e,[W.v,W.dG,W.bJ,W.am,W.d3,W.ao,W.a9,W.d6,W.f_,W.bV,P.ds,P.aX])
q(W.v,[W.H,W.as])
q(W.H,[W.o,P.m])
q(W.o,[W.dm,W.dn,W.be,W.dI,W.bH,W.eo,W.b1])
r(W.hl,W.aF)
r(W.ce,W.f8)
q(W.ai,[W.hn,W.ho])
r(W.fb,W.fa)
r(W.cf,W.fb)
r(W.fd,W.fc)
r(W.dD,W.fd)
r(W.ae,W.bd)
r(W.fj,W.fi)
r(W.bF,W.fj)
r(W.fn,W.fm)
r(W.bj,W.fn)
r(W.aR,W.k)
q(W.aR,[W.bl,W.af,W.br])
r(W.dY,W.fq)
r(W.dZ,W.fr)
r(W.ft,W.fs)
r(W.e_,W.ft)
r(W.fv,W.fu)
r(W.cB,W.fv)
r(W.fz,W.fy)
r(W.ec,W.fz)
r(W.em,W.fB)
r(W.d4,W.d3)
r(W.eq,W.d4)
r(W.fE,W.fD)
r(W.er,W.fE)
r(W.ex,W.fJ)
r(W.fO,W.fN)
r(W.eC,W.fO)
r(W.d7,W.d6)
r(W.eD,W.d7)
r(W.fQ,W.fP)
r(W.eK,W.fQ)
r(W.b3,W.af)
r(W.fX,W.fW)
r(W.f7,W.fX)
r(W.cU,W.cg)
r(W.fZ,W.fY)
r(W.fl,W.fZ)
r(W.h0,W.h_)
r(W.cY,W.h0)
r(W.h2,W.h1)
r(W.fF,W.h2)
r(W.h4,W.h3)
r(W.fM,W.h4)
r(W.fg,P.cF)
r(P.ju,P.jt)
r(P.a5,P.fA)
r(P.fp,P.fo)
r(P.dR,P.fp)
r(P.fx,P.fw)
r(P.e7,P.fx)
r(P.fL,P.fK)
r(P.ez,P.fL)
r(P.fS,P.fR)
r(P.eL,P.fS)
r(P.dr,P.f4)
r(P.e8,P.aX)
r(P.fH,P.fG)
r(P.eu,P.fH)
q(K.dJ,[K.aZ,L.eM])
q(E.hg,[Z.dv,A.bR,T.eE])
q(D.P,[D.aG,D.aH,D.w,X.ee])
q(X.ee,[X.cu,X.bK,X.bL,X.cH])
q(O.Z,[D.cr,U.bG,M.c9])
q(D.hh,[U.hk,U.R])
r(U.ca,U.R)
q(A.bR,[A.dV,A.eG])
q(A.eN,[A.bS,A.iN,A.iO,A.iP,A.iM,A.eO,A.cI,A.eP,A.eQ,A.iR,A.eR,A.cL,A.cN,A.eS])
r(F.ix,F.hB)
r(F.iL,F.hM)
r(F.jc,F.jd)
r(F.ic,F.je)
q(O.eB,[O.dU,O.eF])
q(O.dW,[O.hU,O.hV,O.aK])
q(O.aK,[O.hY,O.hZ])
r(T.iC,T.eE)
r(T.iD,T.iC)
q(X.iA,[X.hd,X.hF])
s(H.bT,H.eV)
s(H.cZ,P.i)
s(H.d_,H.cj)
s(H.d0,P.i)
s(H.d1,H.cj)
s(P.cX,P.i)
s(P.dc,P.fV)
s(W.f8,W.hm)
s(W.fa,P.i)
s(W.fb,W.K)
s(W.fc,P.i)
s(W.fd,W.K)
s(W.fi,P.i)
s(W.fj,W.K)
s(W.fm,P.i)
s(W.fn,W.K)
s(W.fq,P.av)
s(W.fr,P.av)
s(W.fs,P.i)
s(W.ft,W.K)
s(W.fu,P.i)
s(W.fv,W.K)
s(W.fy,P.i)
s(W.fz,W.K)
s(W.fB,P.av)
s(W.d3,P.i)
s(W.d4,W.K)
s(W.fD,P.i)
s(W.fE,W.K)
s(W.fJ,P.av)
s(W.fN,P.i)
s(W.fO,W.K)
s(W.d6,P.i)
s(W.d7,W.K)
s(W.fP,P.i)
s(W.fQ,W.K)
s(W.fW,P.i)
s(W.fX,W.K)
s(W.fY,P.i)
s(W.fZ,W.K)
s(W.h_,P.i)
s(W.h0,W.K)
s(W.h1,P.i)
s(W.h2,W.K)
s(W.h3,P.i)
s(W.h4,W.K)
s(P.fo,P.i)
s(P.fp,W.K)
s(P.fw,P.i)
s(P.fx,W.K)
s(P.fK,P.i)
s(P.fL,W.K)
s(P.fR,P.i)
s(P.fS,W.K)
s(P.f4,P.av)
s(P.fG,P.i)
s(P.fH,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",W:"double",O:"num",A:"String",aT:"bool",ak:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([P*])","~(P*)","~(af*)","ak(@,@)","~(j*,h<bh*>*)","~(k*)","~(br*)","~(~())","~()","~(bl*)","~(j*,h<Q*>*)","W*()","~(j*,h<R*>*)","~(j*,h<a1*>*)","~(j*,h<aL*>*)","~(j*,h<bq*>*)","@(@)","ak(@)","ak(L?,L?)","b2(@,@)","~(b3*)","aT*(h<Q*>*)","j(@,@)","A(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nV(v.typeUniverse,JSON.parse('{"au":"aY","eb":"aY","bs":"aY","pu":"k","pE":"k","pw":"aX","pv":"e","pM":"e","pO":"e","pt":"m","pG":"m","px":"o","pJ":"o","pH":"v","pD":"v","qd":"a9","pB":"aR","py":"as","pP":"as","pN":"af","pI":"bj","pL":"bo","pK":"S","dM":{"aT":[]},"aY":{"l0":[]},"t":{"n":["1"],"l":["1"],"h":["1"]},"hI":{"t":["1"],"n":["1"],"l":["1"],"h":["1"]},"bk":{"W":[],"O":[]},"cp":{"W":[],"j":[],"O":[]},"co":{"W":[],"O":[]},"aI":{"A":[]},"dQ":{"J":[]},"N":{"i":["j"],"n":["j"],"l":["j"],"h":["j"],"i.E":"j"},"l":{"h":["1"]},"bm":{"h":["2"]},"ch":{"l":["2"],"h":["2"]},"cT":{"h":["1"]},"bT":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cb":{"F":["1","2"]},"cc":{"F":["1","2"]},"e5":{"J":[]},"dO":{"J":[]},"eU":{"J":[]},"en":{"J":[]},"z":{"F":["1","2"]},"cs":{"l":["1"],"h":["1"]},"dN":{"lg":[]},"bM":{"x":["1"],"S":[]},"bo":{"i":["W"],"x":["W"],"n":["W"],"S":[],"l":["W"],"h":["W"],"i.E":"W"},"cz":{"i":["j"],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"]},"e0":{"i":["j"],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"],"i.E":"j"},"e1":{"i":["j"],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"],"i.E":"j"},"e2":{"i":["j"],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"],"i.E":"j"},"e3":{"i":["j"],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"],"i.E":"j"},"e4":{"i":["j"],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"],"i.E":"j"},"cA":{"i":["j"],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"],"i.E":"j"},"bN":{"i":["j"],"b2":[],"x":["j"],"n":["j"],"S":[],"l":["j"],"h":["j"],"i.E":"j"},"ff":{"J":[]},"d9":{"J":[]},"d8":{"cG":[]},"d5":{"h":["1"]},"cV":{"l":["1"],"h":["1"]},"cn":{"h":["1"]},"ct":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cv":{"F":["1","2"]},"av":{"F":["1","2"]},"cw":{"F":["1","2"]},"bU":{"F":["1","2"]},"d2":{"l":["1"],"h":["1"]},"W":{"O":[]},"dp":{"J":[]},"e6":{"J":[]},"ah":{"J":[]},"bQ":{"J":[]},"dK":{"J":[]},"eW":{"J":[]},"eT":{"J":[]},"ew":{"J":[]},"dy":{"J":[]},"e9":{"J":[]},"cE":{"J":[]},"dA":{"J":[]},"j":{"O":[]},"n":{"l":["1"],"h":["1"]},"bu":{"eX":[]},"fC":{"eX":[]},"f9":{"eX":[]},"o":{"H":[],"v":[],"e":[]},"dm":{"H":[],"v":[],"e":[]},"dn":{"H":[],"v":[],"e":[]},"be":{"H":[],"v":[],"e":[]},"as":{"v":[],"e":[]},"cf":{"i":["a5<O>"],"n":["a5<O>"],"x":["a5<O>"],"l":["a5<O>"],"h":["a5<O>"],"i.E":"a5<O>"},"cg":{"a5":["O"]},"dD":{"i":["A"],"n":["A"],"x":["A"],"l":["A"],"h":["A"],"i.E":"A"},"f6":{"i":["H"],"n":["H"],"l":["H"],"h":["H"],"i.E":"H"},"H":{"v":[],"e":[]},"ae":{"bd":[]},"bF":{"i":["ae"],"n":["ae"],"x":["ae"],"l":["ae"],"h":["ae"],"i.E":"ae"},"dG":{"e":[]},"dI":{"H":[],"v":[],"e":[]},"bj":{"i":["v"],"n":["v"],"x":["v"],"l":["v"],"h":["v"],"i.E":"v"},"bH":{"H":[],"v":[],"e":[]},"bl":{"k":[]},"bJ":{"e":[]},"dY":{"F":["A","@"]},"dZ":{"F":["A","@"]},"e_":{"i":["ax"],"n":["ax"],"x":["ax"],"l":["ax"],"h":["ax"],"i.E":"ax"},"af":{"k":[]},"f5":{"i":["v"],"n":["v"],"l":["v"],"h":["v"],"i.E":"v"},"v":{"e":[]},"cB":{"i":["v"],"n":["v"],"x":["v"],"l":["v"],"h":["v"],"i.E":"v"},"ec":{"i":["ay"],"n":["ay"],"x":["ay"],"l":["ay"],"h":["ay"],"i.E":"ay"},"em":{"F":["A","@"]},"eo":{"H":[],"v":[],"e":[]},"am":{"e":[]},"eq":{"i":["am"],"n":["am"],"x":["am"],"e":[],"l":["am"],"h":["am"],"i.E":"am"},"er":{"i":["az"],"n":["az"],"x":["az"],"l":["az"],"h":["az"],"i.E":"az"},"ex":{"F":["A","A"]},"b1":{"H":[],"v":[],"e":[]},"ao":{"e":[]},"a9":{"e":[]},"eC":{"i":["a9"],"n":["a9"],"x":["a9"],"l":["a9"],"h":["a9"],"i.E":"a9"},"eD":{"i":["ao"],"n":["ao"],"x":["ao"],"e":[],"l":["ao"],"h":["ao"],"i.E":"ao"},"br":{"k":[]},"eK":{"i":["aB"],"n":["aB"],"x":["aB"],"l":["aB"],"h":["aB"],"i.E":"aB"},"aR":{"k":[]},"f_":{"e":[]},"b3":{"af":[],"k":[]},"bV":{"e":[]},"f7":{"i":["G"],"n":["G"],"x":["G"],"l":["G"],"h":["G"],"i.E":"G"},"cU":{"a5":["O"]},"fl":{"i":["at?"],"n":["at?"],"x":["at?"],"l":["at?"],"h":["at?"],"i.E":"at?"},"cY":{"i":["v"],"n":["v"],"x":["v"],"l":["v"],"h":["v"],"i.E":"v"},"fF":{"i":["aA"],"n":["aA"],"x":["aA"],"l":["aA"],"h":["aA"],"i.E":"aA"},"fM":{"i":["an"],"n":["an"],"x":["an"],"l":["an"],"h":["an"],"i.E":"an"},"dH":{"i":["H"],"n":["H"],"l":["H"],"h":["H"],"i.E":"H"},"a5":{"fA":["1"]},"dR":{"i":["aJ"],"n":["aJ"],"l":["aJ"],"h":["aJ"],"i.E":"aJ"},"e7":{"i":["aM"],"n":["aM"],"l":["aM"],"h":["aM"],"i.E":"aM"},"ez":{"i":["A"],"n":["A"],"l":["A"],"h":["A"],"i.E":"A"},"m":{"H":[],"v":[],"e":[]},"eL":{"i":["aP"],"n":["aP"],"l":["aP"],"h":["aP"],"i.E":"aP"},"b2":{"n":["j"],"l":["j"],"h":["j"]},"dr":{"F":["A","@"]},"ds":{"e":[]},"aX":{"e":[]},"e8":{"e":[]},"eu":{"i":["F<@,@>"],"n":["F<@,@>"],"l":["F<@,@>"],"h":["F<@,@>"],"i.E":"F<@,@>"},"Z":{"h":["1*"],"Z.T":"1"},"aG":{"P":[]},"aH":{"P":[]},"w":{"P":[]},"cu":{"P":[]},"bK":{"P":[]},"bL":{"P":[]},"ee":{"P":[]},"cH":{"P":[]},"dt":{"Q":[]},"bf":{"Q":[]},"cr":{"Z":["Q*"],"h":["Q*"],"Z.T":"Q*"},"ed":{"Q":[]},"es":{"Q":[]},"ca":{"R":[]},"bG":{"Z":["R*"],"R":[],"h":["R*"],"Z.T":"R*"},"cP":{"R":[]},"cQ":{"R":[]},"cR":{"R":[]},"c9":{"Z":["a1*"],"a1":[],"h":["a1*"],"Z.T":"a1*"},"cd":{"a1":[]},"ci":{"a1":[]},"dV":{"bR":[]},"eG":{"bR":[]}}'))
H.nU(v.typeUniverse,JSON.parse('{"a3":1,"l":1,"bI":1,"bm":2,"ch":2,"dT":2,"cT":1,"f2":1,"cj":1,"eV":1,"bT":1,"cb":2,"cs":1,"dS":1,"bM":1,"bX":1,"d5":1,"cF":1,"ey":2,"cW":1,"cn":1,"ct":1,"cv":2,"av":2,"fV":2,"cw":2,"d2":1,"cX":1,"dc":2,"dx":2,"dz":2,"h":1,"dL":1,"fg":1,"K":1,"ck":1,"aG":1,"aH":1,"w":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",j:"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"}
var t=(function rtii(){var s=H.kE
return{d:s("bd"),v:s("l<@>"),h:s("H"),C:s("J"),G:s("k"),c8:s("ae"),bX:s("bF"),Z:s("pF"),gb:s("cl"),gk:s("bH"),s:s("t<A>"),gn:s("t<@>"),t:s("t<j>"),x:s("t<dq*>"),bb:s("t<dt*>"),am:s("t<du*>"),g0:s("t<dv*>"),cP:s("t<bf*>"),M:s("t<dC*>"),b:s("t<dE*>"),aZ:s("t<cm*>"),B:s("t<hL*>"),L:s("t<hT*>"),p:s("t<aL*>"),H:s("t<ie*>"),cS:s("t<a8*>"),d1:s("t<ef*>"),k:s("t<ed*>"),f2:s("t<a1*>"),du:s("t<es*>"),cz:s("t<et*>"),eG:s("t<cF<L*>*>"),i:s("t<A*>"),fG:s("t<eB*>"),A:s("t<eE*>"),br:s("t<eM*>"),fj:s("t<eN*>"),D:s("t<bS*>"),dA:s("t<cI*>"),d6:s("t<cJ*>"),dv:s("t<cK*>"),O:s("t<cL*>"),by:s("t<cM*>"),ga:s("t<cN*>"),fF:s("t<cO*>"),j:s("t<eZ*>"),m:s("t<W*>"),V:s("t<j*>"),f:s("t<~(P*)*>"),T:s("cq"),eH:s("l0"),g:s("au"),aU:s("x<@>"),h9:s("z<A*,bR*>"),cn:s("z<A*,ev*>"),dO:s("z<A*,A*>"),w:s("z<A*,eJ*>"),en:s("z<j*,n<cJ*>*>"),af:s("z<j*,n<cK*>*>"),gr:s("z<j*,n<cM*>*>"),bR:s("z<j*,n<cO*>*>"),J:s("z<j*,bS*>"),E:s("z<j*,aT*>"),a:s("z<j*,j*>"),aH:s("n<@>"),eO:s("F<@,@>"),bK:s("bJ"),bZ:s("cy"),dD:s("S"),bm:s("bN"),P:s("ak"),K:s("L"),I:s("a5<O>"),fv:s("lg"),N:s("A"),bY:s("b1"),aF:s("cG"),gc:s("b2"),ak:s("bs"),U:s("bU<A,A>"),R:s("eX"),cJ:s("aT"),gR:s("W"),z:s("@"),S:s("j"),fr:s("be*"),l:s("bh*"),gj:s("Q*"),dn:s("cu*"),hc:s("aL*"),c:s("bK*"),a3:s("bL*"),ah:s("R*"),F:s("0&*"),_:s("L*"),bn:s("a1*"),X:s("A*"),au:s("bq*"),eB:s("eI*"),eP:s("cH*"),n:s("eO*"),dF:s("bS*"),aq:s("cI*"),r:s("eP*"),y:s("eQ*"),W:s("eR*"),q:s("cL*"),u:s("cN*"),Q:s("eS*"),e:s("j*"),dm:s("~(P*)*"),bG:s("kZ<ak>?"),Y:s("L?"),o:s("O")}})();(function constants(){var s=hunkHelpers.makeConstList
C.n=W.be.prototype
C.Q=J.a.prototype
C.b=J.t.prototype
C.R=J.co.prototype
C.c=J.cp.prototype
C.j=J.cq.prototype
C.d=J.bk.prototype
C.a=J.aI.prototype
C.S=J.au.prototype
C.B=J.eb.prototype
C.a_=P.el.prototype
C.q=J.bs.prototype
C.C=W.b3.prototype
C.D=W.bV.prototype
C.E=new E.bB("Browser.chrome")
C.r=new E.bB("Browser.firefox")
C.t=new E.bB("Browser.edge")
C.F=new E.bB("Browser.other")
C.a2=new P.hf()
C.G=new P.he()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=function() {
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
C.M=function(getTagFallback) {
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
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.L=function(hooks) {
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
C.K=function(hooks) {
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

C.N=new P.e9()
C.e=new P.iZ()
C.O=new P.j2()
C.f=new P.jq()
C.o=new A.bD(0,"ColorBlendType.Overwrite")
C.w=new A.bD(1,"ColorBlendType.Additive")
C.x=new A.bD(2,"ColorBlendType.Average")
C.i=new A.bD(3,"ColorBlendType.AlphaBlend")
C.p=new P.bg(0)
C.P=new P.bg(5e6)
C.k=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.l=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.U=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.V=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.T=H.d(s([]),t.i)
C.W=new H.cc(0,{},C.T,H.kE("cc<A*,A*>"))
C.X=new E.bO("OperatingSystem.windows")
C.A=new E.bO("OperatingSystem.mac")
C.Y=new E.bO("OperatingSystem.linux")
C.Z=new E.bO("OperatingSystem.other")
C.a0=new P.j_(!1)
C.a1=new P.bW(null,2)})();(function staticFields(){$.lF=null
$.aE=0
$.kS=null
$.kR=null
$.m5=null
$.m2=null
$.mb=null
$.jN=null
$.jU=null
$.kH=null
$.c_=null
$.df=null
$.dg=null
$.kB=!1
$.aC=C.f
$.ab=H.d([],H.kE("t<L>"))
$.hw=null
$.i7=null
$.l8=null
$.aN=null
$.cD=null
$.lw=null
$.lz=null
$.ly=null
$.j3=null
$.j4=null
$.j5=null
$.lx=null
$.l7=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"pC","mi",function(){return H.pd("_$dart_dartClosure")})
s($,"pQ","mj",function(){return H.aQ(H.iK({
toString:function(){return"$receiver$"}}))})
s($,"pR","mk",function(){return H.aQ(H.iK({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"pS","ml",function(){return H.aQ(H.iK(null))})
s($,"pT","mm",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"pW","mp",function(){return H.aQ(H.iK(void 0))})
s($,"pX","mq",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"pV","mo",function(){return H.aQ(H.lq(null))})
s($,"pU","mn",function(){return H.aQ(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"pZ","ms",function(){return H.aQ(H.lq(void 0))})
s($,"pY","mr",function(){return H.aQ(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"qe","kL",function(){return P.nz()})
s($,"q_","mt",function(){return new P.j0().$0()})
s($,"q0","mu",function(){return new P.j1().$0()})
s($,"qf","my",function(){return new Int8Array(H.bv(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qh","mz",function(){return P.nh("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qx","mA",function(){return P.og()})
s($,"q7","mx",function(){return Z.ap(0)})
s($,"q1","mv",function(){return Z.ap(511)})
s($,"q9","aD",function(){return Z.ap(1)})
s($,"q8","bb",function(){return Z.ap(2)})
s($,"q3","ba",function(){return Z.ap(4)})
s($,"qa","bz",function(){return Z.ap(8)})
s($,"qb","bA",function(){return Z.ap(16)})
s($,"q4","dj",function(){return Z.ap(32)})
s($,"q5","dk",function(){return Z.ap(64)})
s($,"q6","mw",function(){return Z.ap(96)})
s($,"qc","c4",function(){return Z.ap(128)})
s($,"q2","b9",function(){return Z.ap(256)})
s($,"pA","mh",function(){return new V.hx()})
s($,"pz","B",function(){return $.mh()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cy,DataView:H.S,ArrayBufferView:H.S,Float32Array:H.bo,Float64Array:H.bo,Int16Array:H.e0,Int32Array:H.e1,Int8Array:H.e2,Uint16Array:H.e3,Uint32Array:H.e4,Uint8ClampedArray:H.cA,CanvasPixelArray:H.cA,Uint8Array:H.bN,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLImageElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.h7,HTMLAnchorElement:W.dm,HTMLAreaElement:W.dn,Blob:W.bd,HTMLCanvasElement:W.be,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CSSPerspective:W.hl,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.ai,CSSKeywordValue:W.ai,CSSNumericValue:W.ai,CSSPositionValue:W.ai,CSSResourceValue:W.ai,CSSUnitValue:W.ai,CSSURLImageValue:W.ai,CSSStyleValue:W.ai,CSSMatrixComponent:W.aF,CSSRotation:W.aF,CSSScale:W.aF,CSSSkew:W.aF,CSSTranslation:W.aF,CSSTransformComponent:W.aF,CSSTransformValue:W.hn,CSSUnparsedValue:W.ho,DataTransferItemList:W.hp,DOMException:W.hq,ClientRectList:W.cf,DOMRectList:W.cf,DOMRectReadOnly:W.cg,DOMStringList:W.dD,DOMTokenList:W.hr,Element:W.H,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,SubmitEvent:W.k,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ae,FileList:W.bF,FileWriter:W.dG,HTMLFormElement:W.dI,Gamepad:W.at,History:W.hG,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,ImageData:W.cl,HTMLInputElement:W.bH,KeyboardEvent:W.bl,Location:W.hQ,MediaList:W.i8,MessagePort:W.bJ,MIDIInputMap:W.dY,MIDIOutputMap:W.dZ,MimeType:W.ax,MimeTypeArray:W.e_,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cB,RadioNodeList:W.cB,Plugin:W.ay,PluginArray:W.ec,RTCStatsReport:W.em,HTMLSelectElement:W.eo,SourceBuffer:W.am,SourceBufferList:W.eq,SpeechGrammar:W.az,SpeechGrammarList:W.er,SpeechRecognitionResult:W.aA,Storage:W.ex,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableCellElement:W.b1,HTMLTableDataCellElement:W.b1,HTMLTableHeaderCellElement:W.b1,TextTrack:W.ao,TextTrackCue:W.a9,VTTCue:W.a9,TextTrackCueList:W.eC,TextTrackList:W.eD,TimeRanges:W.iF,Touch:W.aB,TouchEvent:W.br,TouchList:W.eK,TrackDefaultList:W.iI,CompositionEvent:W.aR,FocusEvent:W.aR,TextEvent:W.aR,UIEvent:W.aR,URL:W.iY,VideoTrackList:W.f_,WheelEvent:W.b3,Window:W.bV,DOMWindow:W.bV,CSSRuleList:W.f7,ClientRect:W.cU,DOMRect:W.cU,GamepadList:W.fl,NamedNodeMap:W.cY,MozNamedAttrMap:W.cY,SpeechRecognitionResultList:W.fF,StyleSheetList:W.fM,SVGLength:P.aJ,SVGLengthList:P.dR,SVGNumber:P.aM,SVGNumberList:P.e7,SVGPointList:P.ig,SVGStringList:P.ez,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGTransform:P.aP,SVGTransformList:P.eL,AudioBuffer:P.hb,AudioParamMap:P.dr,AudioTrackList:P.ds,AudioContext:P.aX,webkitAudioContext:P.aX,BaseAudioContext:P.aX,OfflineAudioContext:P.e8,WebGL2RenderingContext:P.el,SQLResultSetRowList:P.eu})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.bo.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.m9,[])
else S.m9([])})})()
//# sourceMappingURL=test.dart.js.map
