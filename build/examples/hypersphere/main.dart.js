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
a[c]=function(){a[c]=function(){H.nN(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jM(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jq:function jq(){},
lL:function(a,b){if(t.R.b(a))return new H.c2(a,b)
return new H.b5(a,b)},
k4:function(){return new P.dZ("No element")},
m6:function(a,b){var s=J.bn(a)
if(typeof s!=="number")return s.a5()
H.dU(a,0,s-1,b)},
dU:function(a,b,c,d){if(c-b<=32)H.m5(a,b,c,d)
else H.m4(a,b,c,d)},
m5:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bh(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a3()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
m4:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.aa(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.aa(a6+a7,2),d=e-h,c=e+h,b=J.bh(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.u(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ad()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a3()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
q=m
r=l
break}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ad()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a3()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a3()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ad()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.l(a5,a6,b.h(a5,a4))
b.l(a5,a4,a0)
a4=q+1
b.l(a5,a7,b.h(a5,a4))
b.l(a5,a4,a2)
H.dU(a5,a6,r-2,a8)
H.dU(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.u(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.u(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ad()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.dU(a5,r,q,a8)}else H.dU(a5,r,q,a8)},
L:function L(a){this.a=a},
i:function i(){},
bv:function bv(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b5:function b5(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=null
this.b=a
this.c=b},
cu:function cu(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
c7:function c7(){},
en:function en(){},
bJ:function bJ(){},
l5:function(a){var s,r=H.l4(a)
if(r!=null)return r
s="minified:"+a
return s},
nD:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
e:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a4(a)
if(typeof s!="string")throw H.b(H.aG(a))
return s},
co:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dO:function(a){return H.lP(a)},
lP:function(a){var s,r,q
if(a instanceof P.K)return H.a6(H.cV(a),null)
if(J.cU(a)===C.F||t.o.b(a)){s=C.n(a)
if(H.kf(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kf(q))return q}}return H.a6(H.cV(a),null)},
kf:function(a){var s=a!=="Object"&&a!==""
return s},
ke:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lZ:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(!H.bO(q))throw H.b(H.aG(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.be(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.aG(q))}return H.ke(p)},
lY:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bO(q))throw H.b(H.aG(q))
if(q<0)throw H.b(H.aG(q))
if(q>65535)return H.lZ(a)}return H.ke(a)},
lX:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.be(s,10))>>>0,56320|s&1023)}throw H.b(P.aM(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lW:function(a){var s=H.bF(a).getFullYear()+0
return s},
lU:function(a){var s=H.bF(a).getMonth()+1
return s},
lQ:function(a){var s=H.bF(a).getDate()+0
return s},
lR:function(a){var s=H.bF(a).getHours()+0
return s},
lT:function(a){var s=H.bF(a).getMinutes()+0
return s},
lV:function(a){var s=H.bF(a).getSeconds()+0
return s},
lS:function(a){var s=H.bF(a).getMilliseconds()+0
return s},
o:function(a){throw H.b(H.aG(a))},
d:function(a,b){if(a==null)J.bn(a)
throw H.b(H.bg(a,b))},
bg:function(a,b){var s,r,q="index"
if(!H.bO(b))return new P.a7(!0,b,q,null)
s=J.bn(a)
if(!(b<0)){if(typeof s!=="number")return H.o(s)
r=b>=s}else r=!0
if(r)return P.G(b,a,q,null,s)
return P.dP(b,q)},
ns:function(a,b,c){if(a>c)return P.aM(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aM(b,a,c,"end",null)
return new P.a7(!0,b,"end",null)},
aG:function(a){return new P.a7(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.dG()
s=new Error()
s.dartException=a
r=H.nO
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nO:function(){return J.a4(this.dartException)},
m:function(a){throw H.b(a)},
n:function(a){throw H.b(P.bX(a))},
aC:function(a){var s,r,q,p,o,n
a=H.l1(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ic(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
id:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ko:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ka:function(a,b){return new H.dF(a,b==null?null:b.method)},
jr:function(a,b){var s=b==null,r=s?null:b.method
return new H.dn(a,r,s?null:b.receiver)},
fw:function(a){if(a==null)return new H.hI(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bi(a,a.dartException)
return H.nm(a)},
bi:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nm:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.be(r,16)&8191)===10)switch(q){case 438:return H.bi(a,H.jr(H.e(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bi(a,H.ka(H.e(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.l8()
o=$.l9()
n=$.la()
m=$.lb()
l=$.le()
k=$.lf()
j=$.ld()
$.lc()
i=$.lh()
h=$.lg()
g=p.af(s)
if(g!=null)return H.bi(a,H.jr(s,g))
else{g=o.af(s)
if(g!=null){g.method="call"
return H.bi(a,H.jr(s,g))}else{g=n.af(s)
if(g==null){g=m.af(s)
if(g==null){g=l.af(s)
if(g==null){g=k.af(s)
if(g==null){g=j.af(s)
if(g==null){g=m.af(s)
if(g==null){g=i.af(s)
if(g==null){g=h.af(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bi(a,H.ka(s,g))}}return H.bi(a,new H.em(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cp()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bi(a,new P.a7(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cp()
return a},
jO:function(a){var s
if(a==null)return new H.f7(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f7(a)},
nu:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
nC:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.j("Unsupported number of arguments for wrapped closure"))},
cT:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nC)
a.$identity=s
return s},
lA:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i0().constructor.prototype):Object.create(new H.bU(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aq
if(typeof r!=="number")return r.u()
$.aq=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.k1(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lw(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k1(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lw:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kV,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.lu:H.lt
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
lx:function(a,b,c,d){var s=H.k_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k1:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lz(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lx(r,!p,s,b)
if(r===0){p=$.aq
if(typeof p!=="number")return p.u()
$.aq=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.e(H.ji())+";return "+n+"."+H.e(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aq
if(typeof p!=="number")return p.u()
$.aq=p+1
m+=p
return new Function("return function("+m+"){return this."+H.e(H.ji())+"."+H.e(s)+"("+m+");}")()},
ly:function(a,b,c,d){var s=H.k_,r=H.lv
switch(b?-1:a){case 0:throw H.b(new H.dR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lz:function(a,b){var s,r,q,p,o,n,m=H.ji(),l=$.jY
if(l==null)l=$.jY=H.jX("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ly(r,!p,s,b)
if(r===1){p="return function(){return this."+H.e(m)+"."+H.e(s)+"(this."+l+");"
o=$.aq
if(typeof o!=="number")return o.u()
$.aq=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.e(m)+"."+H.e(s)+"(this."+l+", "+n+");"
o=$.aq
if(typeof o!=="number")return o.u()
$.aq=o+1
return new Function(p+o+"}")()},
jM:function(a,b,c,d,e,f,g){return H.lA(a,b,c,d,!!e,!!f,g)},
lt:function(a,b){return H.fj(v.typeUniverse,H.cV(a.a),b)},
lu:function(a,b){return H.fj(v.typeUniverse,H.cV(a.c),b)},
k_:function(a){return a.a},
lv:function(a){return a.c},
ji:function(){var s=$.jZ
return s==null?$.jZ=H.jX("self"):s},
jX:function(a){var s,r,q,p=new H.bU("self","target","receiver","name"),o=J.jp(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.jV("Field name "+a+" not found."))},
nN:function(a){throw H.b(new P.d9(a))},
ny:function(a){return v.getIsolateTag(a)},
oQ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nF:function(a){var s,r,q,p,o,n=$.kU.$1(a),m=$.j_[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j3[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kQ.$2(a,n)
if(q!=null){m=$.j_[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j3[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.j5(s)
$.j_[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j3[n]=s
return s}if(p==="-"){o=H.j5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kZ(a,s)
if(p==="*")throw H.b(P.kp(n))
if(v.leafTags[n]===true){o=H.j5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kZ(a,s)},
kZ:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jS(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j5:function(a){return J.jS(a,!1,null,!!a.$ir)},
nG:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.j5(s)
else return J.jS(s,c,null,null)},
nA:function(){if(!0===$.jP)return
$.jP=!0
H.nB()},
nB:function(){var s,r,q,p,o,n,m,l
$.j_=Object.create(null)
$.j3=Object.create(null)
H.nz()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l0.$1(o)
if(n!=null){m=H.nG(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nz:function(){var s,r,q,p,o,n,m=C.x()
m=H.bQ(C.y,H.bQ(C.z,H.bQ(C.o,H.bQ(C.o,H.bQ(C.A,H.bQ(C.B,H.bQ(C.C(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kU=new H.j0(p)
$.kQ=new H.j1(o)
$.l0=new H.j2(n)},
bQ:function(a,b){return a(b)||b},
lI:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(new P.h3("Illegal RegExp pattern ("+String(n)+")",a))},
l2:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nt:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l1:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l3:function(a,b,c){var s=H.nL(a,b,c)
return s},
nL:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l1(b),'g'),H.nt(c))},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dF:function dF(a,b){this.a=a
this.b=b},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a},
hI:function hI(a){this.a=a},
f7:function f7(a){this.a=a
this.b=null},
bq:function bq(){},
i4:function i4(){},
i0:function i0(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dR:function dR(a){this.a=a},
t:function t(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hg:function hg(a){this.a=a},
hj:function hj(a,b){this.a=a
this.b=b
this.c=null},
aK:function aK(a){this.a=a},
ds:function ds(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cO:function(a){return a},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bg(b,a))},
mA:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.ns(a,b,c))
return b},
cl:function cl(){},
bB:function bB(){},
b7:function b7(){},
ck:function ck(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
cm:function cm(){},
dE:function dE(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
m2:function(a,b){var s=b.c
return s==null?b.c=H.jH(a,b.z,!0):s},
kj:function(a,b){var s=b.c
return s==null?b.c=H.cL(a,"k2",[b.z]):s},
kk:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kk(a.z)
return s===11||s===12},
m1:function(a){return a.cy},
nv:function(a){return H.jI(v.typeUniverse,a,!1)},
aV:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aV(a,s,a0,a1)
if(r===s)return b
return H.kG(a,r,!0)
case 7:s=b.z
r=H.aV(a,s,a0,a1)
if(r===s)return b
return H.jH(a,r,!0)
case 8:s=b.z
r=H.aV(a,s,a0,a1)
if(r===s)return b
return H.kF(a,r,!0)
case 9:q=b.Q
p=H.cS(a,q,a0,a1)
if(p===q)return b
return H.cL(a,b.z,p)
case 10:o=b.z
n=H.aV(a,o,a0,a1)
m=b.Q
l=H.cS(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jF(a,n,l)
case 11:k=b.z
j=H.aV(a,k,a0,a1)
i=b.Q
h=H.nj(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kE(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cS(a,g,a0,a1)
o=b.z
n=H.aV(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jG(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.fz("Attempted to substitute unexpected RTI kind "+c))}},
cS:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aV(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nk:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aV(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nj:function(a,b,c,d){var s,r=b.a,q=H.cS(a,r,c,d),p=b.b,o=H.cS(a,p,c,d),n=b.c,m=H.nk(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eL()
s.a=q
s.b=o
s.c=m
return s},
oS:function(a,b){a[v.arrayRti]=b
return a},
nq:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kV(s)
return a.$S()}return null},
kW:function(a,b){var s
if(H.kk(b))if(a instanceof H.bq){s=H.nq(a)
if(s!=null)return s}return H.cV(a)},
cV:function(a){var s
if(a instanceof P.K){s=a.$ti
return s!=null?s:H.jJ(a)}if(Array.isArray(a))return H.mw(a)
return H.jJ(J.cU(a))},
mw:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mG:function(a){var s=a.$ti
return s!=null?s:H.jJ(a)},
jJ:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mH(a,s)},
mH:function(a,b){var s=a instanceof H.bq?a.__proto__.__proto__.constructor:b,r=H.mv(v.typeUniverse,s.name)
b.$ccache=r
return r},
kV:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jI(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mF:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cP(q,a,H.mL)
if(!H.aH(q))if(!(q===t.c))p=q===p
else p=!0
else p=!0
if(p)return H.cP(q,a,H.mO)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bO
else if(s===t.W||s===t.H)r=H.mK
else if(s===t.N)r=H.mM
else r=s===t.v?H.kM:null
if(r!=null)return H.cP(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.nE)){q.r="$i"+p
return H.cP(q,a,H.mN)}}else if(p===7)return H.cP(q,a,H.mD)
return H.cP(q,a,H.mB)},
cP:function(a,b,c){a.b=c
return a.b(b)},
mE:function(a){var s,r,q=this
if(!H.aH(q))if(!(q===t.c))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mz
else if(q===t.K)r=H.mx
else r=H.mC
q.a=r
return q.a(a)},
nc:function(a){var s,r=a.y
if(!H.aH(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mB:function(a){var s=this
if(a==null)return H.nc(s)
return H.Q(v.typeUniverse,H.kW(a,s),null,s,null)},
mD:function(a){if(a==null)return!0
return this.z.b(a)},
mN:function(a){var s=this,r=s.r
if(a instanceof P.K)return!!a[r]
return!!J.cU(a)[r]},
oP:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kK(a,s)},
mC:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kK(a,s)},
kK:function(a,b){throw H.b(H.ml(H.ky(a,H.kW(a,b),H.a6(b,null))))},
ky:function(a,b,c){var s=P.fY(a),r=H.a6(b==null?H.cV(a):b,null)
return s+": type '"+H.e(r)+"' is not a subtype of type '"+H.e(c)+"'"},
ml:function(a){return new H.cK("TypeError: "+a)},
Z:function(a,b){return new H.cK("TypeError: "+H.ky(a,null,b))},
mL:function(a){return a!=null},
mx:function(a){return a},
mO:function(a){return!0},
mz:function(a){return a},
kM:function(a){return!0===a||!1===a},
oB:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.Z(a,"bool"))},
oD:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.Z(a,"bool"))},
oC:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.Z(a,"bool?"))},
oE:function(a){if(typeof a=="number")return a
throw H.b(H.Z(a,"double"))},
oG:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Z(a,"double"))},
oF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Z(a,"double?"))},
bO:function(a){return typeof a=="number"&&Math.floor(a)===a},
oH:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.Z(a,"int"))},
oJ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.Z(a,"int"))},
oI:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.Z(a,"int?"))},
mK:function(a){return typeof a=="number"},
oK:function(a){if(typeof a=="number")return a
throw H.b(H.Z(a,"num"))},
oM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Z(a,"num"))},
oL:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Z(a,"num?"))},
mM:function(a){return typeof a=="string"},
oN:function(a){if(typeof a=="string")return a
throw H.b(H.Z(a,"String"))},
my:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.Z(a,"String"))},
oO:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.Z(a,"String?"))},
nf:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.u(r,H.a6(a[q],b))
return s},
kL:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t.c,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.b.u(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.u(" extends ",H.a6(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a6(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.u(a3,H.a6(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.u(a3,H.a6(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jU(H.a6(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.e(a1)},
a6:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a6(a.z,b)
return s}if(l===7){r=a.z
s=H.a6(r,b)
q=r.y
return J.jU(q===11||q===12?C.b.u("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.e(H.a6(a.z,b))+">"
if(l===9){p=H.nl(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nf(o,b)+">"):p}if(l===11)return H.kL(a,b,null)
if(l===12)return H.kL(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nl:function(a){var s,r=H.l4(a)
if(r!=null)return r
s="minified:"+a
return s},
kH:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mv:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jI(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cM(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cL(a,b,q)
n[b]=o
return o}else return m},
mt:function(a,b){return H.kJ(a.tR,b)},
ms:function(a,b){return H.kJ(a.eT,b)},
jI:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kD(H.kB(a,null,b,c))
r.set(b,s)
return s},
fj:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kD(H.kB(a,b,c,!0))
q.set(c,r)
return r},
mu:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jF(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aU:function(a,b){b.a=H.mE
b.b=H.mF
return b},
cM:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.af(null,null)
s.y=b
s.cy=c
r=H.aU(a,s)
a.eC.set(c,r)
return r},
kG:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mq(a,b,r,c)
a.eC.set(r,s)
return s},
mq:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.af(null,null)
q.y=6
q.z=b
q.cy=c
return H.aU(a,q)},
jH:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mp(a,b,r,c)
a.eC.set(r,s)
return s},
mp:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aH(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.j4(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.j4(q.z))return q
else return H.m2(a,b)}}p=new H.af(null,null)
p.y=7
p.z=b
p.cy=c
return H.aU(a,p)},
kF:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mn(a,b,r,c)
a.eC.set(r,s)
return s},
mn:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))if(!(b===t.c))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cL(a,"k2",[b])
else if(b===t.P||b===t.T)return t.d}q=new H.af(null,null)
q.y=8
q.z=b
q.cy=c
return H.aU(a,q)},
mr:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.af(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aU(a,s)
a.eC.set(q,r)
return r},
fi:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mm:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cL:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fi(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.af(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aU(a,r)
a.eC.set(p,q)
return q},
jF:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fi(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aU(a,o)
a.eC.set(q,n)
return n},
kE:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fi(m)
if(j>0){s=l>0?",":""
r=H.fi(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mm(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aU(a,o)
a.eC.set(q,r)
return r},
jG:function(a,b,c,d){var s,r=b.cy+("<"+H.fi(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mo(a,b,c,r,d)
a.eC.set(r,s)
return s},
mo:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aV(a,b,r,0)
m=H.cS(a,c,r,0)
return H.jG(a,n,m,c!==m)}}l=new H.af(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aU(a,l)},
kB:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mg(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kC(a,r,g,f,!1)
else if(q===46)r=H.kC(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aT(a.u,a.e,f.pop()))
break
case 94:f.push(H.mr(a.u,f.pop()))
break
case 35:f.push(H.cM(a.u,5,"#"))
break
case 64:f.push(H.cM(a.u,2,"@"))
break
case 126:f.push(H.cM(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jE(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cL(p,n,o))
else{m=H.aT(p,a.e,n)
switch(m.y){case 11:f.push(H.jG(p,m,o,a.n))
break
default:f.push(H.jF(p,m,o))
break}}break
case 38:H.mh(a,f)
break
case 42:l=a.u
f.push(H.kG(l,H.aT(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jH(l,H.aT(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.kF(l,H.aT(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eL()
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
H.jE(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.kE(p,H.aT(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jE(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mj(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aT(a.u,a.e,h)},
mg:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kC:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kH(s,o.z)[p]
if(n==null)H.m('No "'+p+'" in "'+H.m1(o)+'"')
d.push(H.fj(s,o,n))}else d.push(p)
return m},
mh:function(a,b){var s=b.pop()
if(0===s){b.push(H.cM(a.u,1,"0&"))
return}if(1===s){b.push(H.cM(a.u,4,"1&"))
return}throw H.b(P.fz("Unexpected extended operation "+H.e(s)))},
aT:function(a,b,c){if(typeof c=="string")return H.cL(a,c,a.sEA)
else if(typeof c=="number")return H.mi(a,b,c)
else return c},
jE:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aT(a,b,c[s])},
mj:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aT(a,b,c[s])},
mi:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.fz("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.fz("Bad index "+c+" for "+b.i(0)))},
Q:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aH(d))if(!(d===t.c))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aH(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Q(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Q(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Q(a,b,c,s,e)}if(r===8){if(!H.Q(a,b.z,c,d,e))return!1
return H.Q(a,H.kj(a,b),c,d,e)}if(r===7){s=H.Q(a,b.z,c,d,e)
return s}if(p===8){if(H.Q(a,b,c,d.z,e))return!0
return H.Q(a,b,c,H.kj(a,d),e)}if(p===7){s=H.Q(a,b,c,d.z,e)
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
if(!H.Q(a,k,c,j,e)||!H.Q(a,j,e,k,c))return!1}return H.kN(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kN(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mJ(a,b,c,d,e)}return!1},
kN:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Q(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Q(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Q(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mJ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Q(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kH(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Q(a,H.fj(a,b,l[p]),c,r[p],e))return!1
return!0},
j4:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aH(a))if(r!==7)if(!(r===6&&H.j4(a.z)))s=r===8&&H.j4(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nE:function(a){var s
if(!H.aH(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s},
aH:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kJ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eL:function eL(){this.c=this.b=this.a=null},
eG:function eG(){},
cK:function cK(a){this.a=a},
l4:function(a){return v.mangledGlobalNames[a]},
nH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fu:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.jP==null){H.nA()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.kp("Return interceptor for "+H.e(s(a,o))))}q=a.constructor
p=q==null?null:q[J.k6()]
if(p!=null)return p
p=H.nF(a)
if(p!=null)return p
if(typeof a=="function")return C.G
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){Object.defineProperty(q,J.k6(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
k6:function(){var s=$.kz
return s==null?$.kz=v.getIsolateTag("_$dart_js"):s},
lF:function(a){if(!H.bO(a))throw H.b(P.jW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.aM(a,0,4294967295,"length",null))
return J.lG(new Array(a))},
k5:function(a){if(!H.bO(a)||a<0)throw H.b(P.jV("Length must be a non-negative integer: "+H.e(a)))
return new Array(a)},
lG:function(a){return J.jp(a)},
jp:function(a){a.fixed$length=Array
return a},
lH:function(a,b){return J.cY(a,b)},
cU:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.dl.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.he.prototype
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.K)return a
return J.fu(a)},
nw:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.K)return a
return J.fu(a)},
bh:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.K)return a
return J.fu(a)},
jN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.K)return a
return J.fu(a)},
nx:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bI.prototype
return a},
bS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.K)return a
return J.fu(a)},
jU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nw(a).u(a,b)},
u:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cU(a).p(a,b)},
cX:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nD(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).h(a,b)},
lm:function(a,b,c){return J.bS(a).fm(a,b,c)},
ln:function(a,b,c,d){return J.bS(a).fM(a,b,c,d)},
cY:function(a,b){return J.nx(a).ak(a,b)},
jg:function(a,b){return J.bh(a).N(a,b)},
jh:function(a,b){return J.jN(a).E(a,b)},
lo:function(a,b){return J.jN(a).C(a,b)},
lp:function(a){return J.bS(a).gd9(a)},
a1:function(a){return J.cU(a).gS(a)},
bm:function(a){return J.jN(a).gO(a)},
bn:function(a){return J.bh(a).gk(a)},
lq:function(a,b){return J.bS(a).hv(a,b)},
a4:function(a){return J.cU(a).i(a)},
a:function a(){},
he:function he(){},
cc:function cc(){},
b2:function b2(){},
dL:function dL(){},
bI:function bI(){},
aj:function aj(){},
aa:function aa(){},
dm:function dm(){},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b1:function b1(){},
cb:function cb(){},
dl:function dl(){},
aJ:function aJ(){}},P={
m8:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nn()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cT(new P.iF(q),1)).observe(s,{childList:true})
return new P.iE(q,s,r)}else if(self.setImmediate!=null)return P.no()
return P.np()},
m9:function(a){self.scheduleImmediate(H.cT(new P.iG(a),0))},
ma:function(a){self.setImmediate(H.cT(new P.iH(a),0))},
mb:function(a){P.jz(C.j,a)},
jz:function(a,b){var s=C.c.aa(a.a,1000)
return P.mk(s<0?0:s,b)},
mk:function(a,b){var s=new P.iP()
s.e5(a,b)
return s},
oz:function(a){return new P.bM(a,1)},
mc:function(){return C.K},
md:function(a){return new P.bM(a,3)},
mQ:function(a){return new P.cH(a)},
nb:function(){var s,r
for(s=$.bP;s!=null;s=$.bP){$.cR=null
r=s.b
$.bP=r
if(r==null)$.cQ=null
s.a.$0()}},
ni:function(){$.jK=!0
try{P.nb()}finally{$.cR=null
$.jK=!1
if($.bP!=null)$.jT().$1(P.kR())}},
ng:function(a){var s=new P.ev(a),r=$.cQ
if(r==null){$.bP=$.cQ=s
if(!$.jK)$.jT().$1(P.kR())}else $.cQ=r.b=s},
nh:function(a){var s,r,q,p=$.bP
if(p==null){P.ng(a)
$.cR=$.cQ
return}s=new P.ev(a)
r=$.cR
if(r==null){s.b=p
$.bP=$.cR=s}else{q=r.b
s.b=q
$.cR=r.b=s
if(q==null)$.cQ=s}},
kn:function(a,b){var s=$.aE
if(s===C.e)return P.jz(a,b)
return P.jz(a,s.fS(b))},
kO:function(a,b,c,d,e){P.nh(new P.iX(d,e))},
nd:function(a,b,c,d){var s,r=$.aE
if(r===c)return d.$0()
$.aE=c
s=r
try{r=d.$0()
return r}finally{$.aE=s}},
ne:function(a,b,c,d,e){var s,r=$.aE
if(r===c)return d.$1(e)
$.aE=c
s=r
try{r=d.$1(e)
return r}finally{$.aE=s}},
iF:function iF(a){this.a=a},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iP:function iP(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
bN:function bN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cH:function cH(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
e_:function e_(){},
e0:function e0(){},
iS:function iS(){},
iX:function iX(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function(a,b,c){return H.nu(a,new H.t(b.aw("@<0>").cG(c).aw("t<1,2>")))},
lJ:function(a,b){return new H.t(a.aw("@<0>").cG(b).aw("t<1,2>"))},
k7:function(a){return new P.cw(a.aw("cw<0>"))},
jD:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mf:function(a,b){var s=new P.cx(a,b)
s.c=a.e
return s},
lE:function(a,b,c){var s,r
if(P.jL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a3.push(a)
try{P.mP(a,s)}finally{if(0>=$.a3.length)return H.d($.a3,-1)
$.a3.pop()}r=P.kl(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jo:function(a,b,c){var s,r
if(P.jL(a))return b+"..."+c
s=new P.bb(b)
$.a3.push(a)
try{r=s
r.a=P.kl(r.a,a,", ")}finally{if(0>=$.a3.length)return H.d($.a3,-1)
$.a3.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jL:function(a){var s,r
for(s=$.a3.length,r=0;r<s;++r)if(a===$.a3[r])return!0
return!1},
mP:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.e(l.gF(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gF(l);++j
if(!l.v()){if(j<=4){b.push(H.e(p))
return}r=H.e(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF(l);++j
for(;l.v();p=o,o=n){n=l.gF(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.e(p)
r=H.e(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
k8:function(a){var s,r={}
if(P.jL(a))return"{...}"
s=new P.bb("")
try{$.a3.push(a)
s.a+="{"
r.a=!0
J.lo(a,new P.hm(r,s))
s.a+="}"}finally{if(0>=$.a3.length)return H.d($.a3,-1)
$.a3.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cw:function cw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iL:function iL(a){this.a=a
this.c=this.b=null},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function ca(){},
ce:function ce(){},
B:function B(){},
du:function du(){},
hm:function hm(a,b){this.a=a
this.b=b},
ax:function ax(){},
cE:function cE(){},
cy:function cy(){},
d5:function d5(){},
d8:function d8(){},
fV:function fV(){},
iq:function iq(){},
ir:function ir(){},
iR:function iR(a){this.b=0
this.c=a},
lD:function(a){if(a instanceof H.bq)return a.i(0)
return"Instance of '"+H.e(H.dO(a))+"'"},
jt:function(a,b,c){var s,r=c?J.k5(a):J.lF(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ju:function(a,b){var s,r=[]
for(s=J.bm(a);s.v();)r.push(s.gF(s))
if(b)return r
return J.jp(r)},
jx:function(a){var s,r=a,q=r.length,p=P.jw(0,null,q)
if(typeof p!=="number")return p.ad()
s=p<q
return H.lY(s?r.slice(0,p):r)},
m_:function(a){return new H.hf(a,H.lI(a,!1,!0,!1,!1,!1))},
kl:function(a,b,c){var s=J.bm(b)
if(!s.v())return a
if(c.length===0){do a+=H.e(s.gF(s))
while(s.v())}else{a+=H.e(s.gF(s))
for(;s.v();)a=a+c+H.e(s.gF(s))}return a},
kI:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.ll().b
s=s.test(b)}else s=!1
if(s)return b
r=C.E.fY(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.lX(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lB:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
da:function(a){if(a>=10)return""+a
return"0"+a},
fY:function(a){if(typeof a=="number"||H.kM(a)||null==a)return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lD(a)},
fz:function(a){return new P.d0(a)},
jV:function(a){return new P.a7(!1,null,null,a)},
jW:function(a,b,c){return new P.a7(!0,a,b,c)},
ls:function(a,b){if(a==null)throw H.b(new P.a7(!1,null,b,"Must not be null"))
return a},
dP:function(a,b){return new P.bG(null,null,!0,a,b,"Value not in range")},
aM:function(a,b,c,d,e){return new P.bG(b,c,!0,a,d,"Invalid value")},
jw:function(a,b,c){var s
if(typeof c!=="number")return H.o(c)
s=a>c
if(s)throw H.b(P.aM(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
s=b>c}else s=!0
if(s)throw H.b(P.aM(b,a,c,"end",null))
return b}return c},
kg:function(a,b){if(a<0)throw H.b(P.aM(a,0,null,b,null))
return a},
G:function(a,b,c,d,e){var s=e==null?J.bn(b):e
return new P.di(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eo(a)},
kp:function(a){return new P.el(a)},
bX:function(a){return new P.d7(a)},
j:function(a){return new P.eI(a)},
l_:function(a){H.nH(a)},
bf:function bf(){},
as:function as(a,b){this.a=a
this.b=b},
a0:function a0(){},
c1:function c1(a){this.a=a},
fS:function fS(){},
fT:function fT(){},
F:function F(){},
d0:function d0(a){this.a=a},
dG:function dG(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
di:function di(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eo:function eo(a){this.a=a},
el:function el(a){this.a=a},
dZ:function dZ(a){this.a=a},
d7:function d7(a){this.a=a},
dJ:function dJ(){},
cp:function cp(){},
d9:function d9(a){this.a=a},
eI:function eI(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
p:function p(){},
f:function f(){},
dk:function dk(){},
aw:function aw(){},
dt:function dt(){},
ac:function ac(){},
R:function R(){},
K:function K(){},
M:function M(){},
bb:function bb(a){this.a=a},
aW:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lJ(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
nr:function(a){var s={}
a.C(0,new P.iY(s))
return s},
iY:function iY(a){this.a=a},
df:function df(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(){},
iK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
me:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
f0:function f0(){},
ae:function ae(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bu:function bu(){},
dq:function dq(){},
bC:function bC(){},
dH:function dH(){},
hL:function hL(){},
e1:function e1(){},
k:function k(){},
bH:function bH(){},
e8:function e8(){},
eP:function eP(){},
eQ:function eQ(){},
eX:function eX(){},
eY:function eY(){},
f9:function f9(){},
fa:function fa(){},
fg:function fg(){},
fh:function fh(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
d1:function d1(){},
aI:function aI(){},
dI:function dI(){},
ew:function ew(){},
dX:function dX(){},
f5:function f5(){},
f6:function f6(){}},W={
lr:function(){var s=document.createElement("a")
return s},
k0:function(){var s=document.createElement("canvas")
return s},
fU:function(a){return"wheel"},
iJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kA:function(a,b,c,d){var s=W.iJ(W.iJ(W.iJ(W.iJ(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Y:function(a,b,c,d){var s=W.kP(new W.iI(c),t.D)
if(s!=null&&!0)J.ln(a,b,s,!1)
return new W.eH(a,b,s,!1)},
kP:function(a,b){var s=$.aE
if(s===C.e)return a
return s.fT(a,b)},
l:function l(){},
fx:function fx(){},
cZ:function cZ(){},
d_:function d_(){},
d2:function d2(){},
aY:function aY(){},
ai:function ai(){},
fK:function fK(){},
E:function E(){},
bZ:function bZ(){},
fL:function fL(){},
a8:function a8(){},
ar:function ar(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fQ:function fQ(){},
c_:function c_(){},
c0:function c0(){},
db:function db(){},
fR:function fR(){},
ey:function ey(a,b){this.a=a
this.b=b},
P:function P(){},
h:function h(){},
c:function c(){},
aZ:function aZ(){},
dd:function dd(){},
de:function de(){},
dg:function dg(){},
b_:function b_(){},
h6:function h6(){},
b0:function b0(){},
b3:function b3(){},
hk:function hk(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
b6:function b6(){},
dy:function dy(){},
a5:function a5(){},
ex:function ex(a){this.a=a},
w:function w(){},
cn:function cn(){},
b8:function b8(){},
dM:function dM(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
dS:function dS(){},
aN:function aN(){},
dV:function dV(){},
b9:function b9(){},
dW:function dW(){},
ba:function ba(){},
i1:function i1(){},
i2:function i2(a){this.a=a},
aO:function aO(){},
aP:function aP(){},
am:function am(){},
e2:function e2(){},
e3:function e3(){},
i7:function i7(){},
bc:function bc(){},
bd:function bd(){},
e7:function e7(){},
ia:function ia(){},
aD:function aD(){},
ip:function ip(){},
er:function er(){},
aS:function aS(){},
bL:function bL(){},
ez:function ez(){},
cv:function cv(){},
eM:function eM(){},
cz:function cz(){},
f4:function f4(){},
fb:function fb(){},
jn:function jn(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iI:function iI(a){this.a=a},
jC:function jC(a){this.$ti=a},
D:function D(){},
c8:function c8(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f1:function f1(){},
cF:function cF(){},
cG:function cG(){},
f2:function f2(){},
f3:function f3(){},
f8:function f8(){},
fc:function fc(){},
fd:function fd(){},
cI:function cI(){},
cJ:function cJ(){},
fe:function fe(){},
ff:function ff(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},K={
X:function(a){var s=new K.hS()
s.e_(a)
return s},
fy:function fy(){},
dh:function dh(){},
aL:function aL(){this.a=null},
hS:function hS(){this.a=null}},L={dY:function dY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},e6:function e6(a){this.b=a
this.c=null},i8:function i8(){var _=this
_.d=_.c=_.b=_.a=null},ib:function ib(a){this.b=a
this.a=this.c=null}},O={
jk:function(){var s=new O.br()
s.ba()
return s},
br:function br(){this.c=this.b=this.a=null},
ch:function ch(){this.b=this.a=null},
k3:function(){var s=new O.dj()
s.b=V.ku()
s.c=new V.I(0.2,0.3,0.4,1)
s.d=new V.I(0.1,0.2,0.3,1)
s.e=V.d6(0.7)
s.f=V.d6(0.3)
s.r=V.d6(0.5)
s.x=V.d6(0.5)
s.y=new V.I(1,1,1,1)
s.z=V.d6(0.8)
s.r1=s.k4=s.k3=s.k2=s.k1=s.id=s.go=s.fy=s.fx=s.fr=s.dy=s.dx=s.db=s.cy=s.cx=s.ch=s.Q=!1
s.r2=1
return s},
bw:function(){var s,r=new O.dv(),q=O.jk()
r.e=q
q.aR(r.gew(),r.gey())
q=new O.ay(r,"emission")
q.c=new A.U(!1,!1,!1)
q.f=new V.O(0,0,0)
r.f=q
q=new O.ay(r,"ambient")
q.c=new A.U(!1,!1,!1)
q.f=new V.O(0,0,0)
r.r=q
q=new O.ay(r,"diffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.O(0,0,0)
r.x=q
q=new O.ay(r,"invDiffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.O(0,0,0)
r.y=q
q=new O.ht(r,"specular")
q.c=new A.U(!1,!1,!1)
q.f=new V.O(0,0,0)
q.ch=100
r.z=q
q=new O.hp(r,"bump")
q.c=new A.U(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.ay(r,"reflect")
q.c=new A.U(!1,!1,!1)
q.f=new V.O(0,0,0)
r.cx=q
q=new O.hs(r,"refract")
q.c=new A.U(!1,!1,!1)
q.f=new V.O(0,0,0)
q.ch=1
r.cy=q
q=new O.ho(r,"alpha")
q.c=new A.U(!1,!1,!1)
q.f=1
r.db=q
q=new D.cd()
q.ba()
q.e=[]
q.f=[]
q.r=[]
q.x=[]
q.z=q.y=null
q.cq(q.geu(),q.gf3(),q.gf7())
r.dx=q
s=new O.hr()
s.b=new V.I(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.C():s
q.j(0,r.gfp())
q=r.dx
s=q.z
q=s==null?q.z=D.C():s
q.j(0,r.ge3())
r.fr=null
return r},
dj:function dj(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
hb:function hb(a,b){this.a=a
this.b=b},
ha:function ha(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
dv:function dv(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
ho:function ho(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ay:function ay(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hr:function hr(){var _=this
_.e=_.d=_.c=_.b=null},
hs:function hs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i5:function i5(){}},E={
a9:function(){var s,r=new E.bs()
r.a=""
r.b=!0
s=O.jk()
r.y=s
s.aR(r.ghb(),r.ghe())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sa1(0,null)
r.sa8(null)
r.sT(null)
return r},
kw:function(){if(J.jg(window.navigator.vendor,"Google"))return C.v
if(J.jg(window.navigator.userAgent,"Firefox"))return C.l
var s=window.navigator.appVersion
if(J.bh(s).N(s,"Trident")||C.b.N(s,"Edge"))return C.m
if(J.jg(window.navigator.appName,"Microsoft"))return C.m
return C.w},
kx:function(){var s=window.navigator.appVersion
if(J.bh(s).N(s,"Win"))return C.H
if(C.b.N(s,"Mac"))return C.q
if(C.b.N(s,"Linux"))return C.I
return C.J},
m0:function(a,b){var s=new E.hM(a)
s.dZ(a,b)
return s},
jy:function(a){var s=document.getElementById(a)
if(s==null)throw H.b(P.j("Failed to find an element with the identifier, "+a+"."))
return E.m7(s,!0,!0,!0,!1)},
m7:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.km(a,!0,!0,!0,!1)
s=W.k0()
r=s.style
r.width="100%"
r.height="100%"
J.lp(a).j(0,s)
return E.km(s,!0,!0,!0,!1)},
km:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.e4(),n=t.z,m=C.i.dQ(a,"webgl2",P.lK(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.m(P.j("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.m0(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.ep(a)
s=new X.hh()
s.c=new X.ab(!1,!1,!1)
s.d=P.k7(t.e)
n.b=s
s=new X.hH(n)
s.f=0
s.r=V.ak()
s.x=V.ak()
s.ch=s.Q=1
n.c=s
s=new X.hl(n)
s.r=0
s.x=V.ak()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.i9(n)
s.f=V.ak()
s.r=V.ak()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fW
n.Q=(s==null?$.fW=new E.eF(E.kw(),E.kx()):s).a===C.l?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Y(q,"contextmenu",n.geG(),!1))
n.z.push(W.Y(a,"focus",n.geM(),!1))
n.z.push(W.Y(a,"blur",n.geA(),!1))
n.z.push(W.Y(q,"keyup",n.geQ(),!1))
n.z.push(W.Y(q,"keydown",n.geO(),!1))
n.z.push(W.Y(a,"mousedown",n.geU(),!1))
n.z.push(W.Y(a,"mouseup",n.geY(),!1))
n.z.push(W.Y(a,p,n.geW(),!1))
r=n.z
W.fU(a)
W.fU(a)
r.push(W.Y(a,W.fU(a),n.gf_(),!1))
n.z.push(W.Y(q,p,n.geI(),!1))
n.z.push(W.Y(q,"mouseup",n.geK(),!1))
n.z.push(W.Y(q,"pointerlockchange",n.gf1(),!1))
n.z.push(W.Y(a,"touchstart",n.gfh(),!1))
n.z.push(W.Y(a,"touchend",n.gfd(),!1))
n.z.push(W.Y(a,"touchmove",n.gff(),!1))
o.x=n
o.ch=!0
o.cx=!1
Date.now()
o.db=0
o.cV()
return o},
fG:function fG(){},
bs:function bs(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(a){this.b=a},
bD:function bD(a){this.b=a},
eF:function eF(a,b){this.a=a
this.b=b},
hM:function hM(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
e4:function e4(){var _=this
_.db=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
i6:function i6(a){this.a=a}},Z={
jB:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cO(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,s)},
ah:function(a){return new Z.aR(a)},
es:function es(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
et:function et(a){this.a=a},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
d3:function d3(){this.a=null},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a){this.a=a}},D={
C:function(){var s=new D.c5()
s.d=0
return s},
fI:function fI(){},
c5:function c5(){var _=this
_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
S:function S(){this.b=null},
au:function au(){this.b=null},
av:function av(){this.b=null},
v:function v(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
b4:function b4(){},
cd:function cd(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={d4:function d4(a,b){this.a=a
this.b=b},dp:function dp(a,b){this.a=a
this.b=b},hh:function hh(){var _=this
_.d=_.c=_.b=_.a=null},cf:function cf(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hl:function hl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},bz:function bz(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hH:function hH(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bA:function bA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dN:function dN(){},cq:function cq(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i9:function i9(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ep:function ep(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
h5:function(a,b){var s=new X.h4(),r=new V.I(0,0,0,1)
s.a=r
s.b=a
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.ki
if(r==null){r=V.kh(0,0,1,1)
$.ki=r}s.r=r
return s},
bE:function(){var s,r=new X.dK()
r.c=1.0471975511965976
r.d=0.1
r.e=2000
r.saD(null)
r.sT(null)
s=r.c
$.y().toString
if(!(Math.abs(s-1.0471975511965976)<1e-9)){r.c=1.0471975511965976
s=new D.v("fov",s,1.0471975511965976)
s.b=!0
r.au(s)}s=r.d
$.y().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
s=new D.v("near",s,0.1)
s.b=!0
r.au(s)}s=r.e
$.y().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
s=new D.v("far",s,2000)
s.b=!0
r.au(s)}return r},
jj:function jj(){},
h4:function h4(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(){}},V={
d6:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.I(a,a,a,1)},
bV:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.I(s,r,q,1)},
jQ:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nP:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dR(a-b,s)
return(a<0?a+s:a)+b},
z:function(a,b,c){if(a==null)return C.b.ag("null",c)
$.y().toString
return C.b.ag(C.d.hA(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bR:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.n)(a),++q){p=V.z(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.b.ag(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
cj:function(){var s=$.k9
return s==null?$.k9=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
V:function(a,b,c){return V.az(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
by:function(a,b,c,d){return V.az(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ci:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.az(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
jv:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.az(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
ak:function(){var s=$.kc
return s==null?$.kc=new V.N(0,0):s},
kd:function(){var s=$.aA
return s==null?$.aA=new V.H(0,0,0):s},
kh:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dQ(a,b,c,d)},
bK:function(){var s=$.kt
return s==null?$.kt=new V.q(0,0,0):s},
ku:function(){var s=$.kr
return s==null?$.kr=new V.q(0,0,-1):s},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(){},
dx:function dx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bx:function bx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
N:function N(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dQ:function dQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b){this.a=a
this.b=b},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m3:function(a){var s=new V.hW()
s.e0(a,!0)
return s},
hW:function hW(){this.b=this.a=null},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a}},U={
jl:function(){var s=new U.fJ()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
A:function(a){var s=new U.bY()
s.sK(0,a)
return s},
at:function(){var s=new U.bt()
s.ba()
s.aR(s.ge1(),s.gf5())
s.e=null
s.f=V.cj()
s.r=0
return s},
fJ:function fJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bY:function bY(){this.b=this.a=null},
bt:function bt(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
W:function W(){},
cr:function cr(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cs:function cs(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jm:function(a){var s=new M.bW()
s.ba()
s.e=!0
s.f=!1
s.r=null
s.aR(s.gf9(),s.gfb())
s.bg(0,a)
return s},
c4:function(){var s,r,q=new M.c3()
q.a=!0
s=O.jk()
q.e=s
s.aR(q.geC(),q.geE())
q.y=q.x=q.r=q.f=null
r=X.h5(!0,null)
q.saz(null)
q.sbr(0,r)
q.sa8(null)
return q},
bW:function bW(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
c3:function c3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aB:function aB(){},
nI:function(a){var s,r,q,p,o,n,m,l,k,j,i={},h=E.jy(a),g=O.bw(),f=g.f
f.sU(0,new V.O(0.4,0.6,0.8))
s=O.bw()
f=s.f
f.sU(0,new V.O(0.8,0.6,0.4))
s.db.sa0(0,0.3)
r=O.bw()
f=r.f
f.sU(0,new V.O(0.4,0.6,0.8))
r.db.sa0(0,0.3)
q=U.A(null)
p=U.A(null)
o=E.a9()
o.sa8(g)
f=F.al()
f.aC(F.j6(!0))
f.aC(F.kT(!0,36))
o.sa1(0,f)
n=E.a9()
n.sa8(s)
n.sa1(0,F.jR())
f=U.at()
f.j(0,U.A(V.by(1.3,1.3,1.3,1)))
f.j(0,U.A(V.ci(-1.5707963267948966)))
f.j(0,q)
n.sT(f)
m=E.a9()
m.sa1(0,F.jR())
f=U.at()
f.j(0,U.A(V.V(0,0,0.1)))
m.sT(f)
l=E.a9()
l.sa1(0,F.jR())
f=U.at()
f.j(0,p)
l.sT(f)
k=M.c4()
k.sbr(0,X.h5(!1,null))
f=X.bE()
f.saD(U.A(V.V(-0.5,0,0)))
f.sT(U.A(V.V(0,0,5)))
k.saz(f)
k.e.j(0,n)
k.e.j(0,o)
j=M.c4()
f=X.bE()
f.saD(U.A(V.V(0.5,0,0)))
f.sT(U.A(V.V(0,0,5)))
j.saz(f)
j.sa8(r)
j.e.j(0,l)
j.e.j(0,m)
i.a=0.5
i.b=!1
h.x.c.gb2().j(0,new M.j7(i))
h.x.c.gaE().j(0,new M.j8(i))
h.x.c.gb5().j(0,new M.j9(i,q,m,l,p))
h.sbt(M.jm([j,k]))},
nJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f={},e=E.jy(a),d=O.k3()
d.scs(!0)
d.scr(!0)
d.sdc(new V.I(0.2,0.3,0.4,0.2))
d.sd3(new V.I(0.1,0.2,0.3,0.2))
s=O.bw()
r=s.f
r.sU(0,new V.O(0.8,0.6,0.4))
s.db.sa0(0,0.3)
q=O.bw()
r=q.f
r.sU(0,new V.O(0.4,0.6,0.8))
p=U.A(g)
o=U.A(g)
n=U.at()
n.j(0,U.A(V.ci(0.4)))
n.j(0,U.A(V.jv(0.4)))
m=E.a9()
m.sa8(d)
r=F.al()
r.aC(F.kS(1,g,1))
r.aC(F.kX(2))
m.sa1(0,r)
m.sT(n)
l=E.a9()
l.sa8(s)
l.sa1(0,F.j6(!1))
r=U.at()
r.j(0,U.A(V.by(1.3,1.3,1.3,1)))
r.j(0,U.A(V.ci(-1.5707963267948966)))
r.j(0,p)
r.j(0,n)
l.sT(r)
k=E.a9()
k.sa1(0,F.j6(!0))
j=E.a9()
j.sa1(0,F.kT(!0,36))
r=U.at()
r.j(0,o)
j.sT(r)
i=M.c4()
i.sbr(0,X.h5(!1,g))
r=X.bE()
r.saD(U.A(V.V(-0.5,0,0)))
r.sT(U.A(V.V(0,0,5)))
i.saz(r)
i.e.j(0,l)
i.e.j(0,m)
h=M.c4()
r=X.bE()
r.saD(U.A(V.V(0.5,0,0)))
r.sT(U.A(V.V(0,0,5)))
h.saz(r)
h.sa8(q)
h.e.j(0,j)
h.e.j(0,k)
f.a=0.5
f.b=!1
e.x.c.gb2().j(0,new M.ja(f))
e.x.c.gaE().j(0,new M.jb(f))
e.x.c.gb5().j(0,new M.jc(f,p,k,j,o))
e.sbt(M.jm([h,i]))},
nK:function(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5="modifiers",b6={},b7=E.jy(c0),b8=O.bw(),b9=b8.f
b9.sU(0,new V.O(0.4,0.6,0.8))
s=O.bw()
b9=s.f
b9.sU(0,new V.O(0.8,0.6,0.4))
s.db.sa0(0,0.3)
r=O.k3()
r.scs(!0)
r.scr(!0)
r.sdc(new V.I(0.2,0.3,0.4,0.2))
r.sd3(new V.I(0.1,0.2,0.3,0.2))
q=U.A(b4)
p=U.A(b4)
o=U.at()
o.j(0,U.A(V.ci(0.4)))
o.j(0,U.A(V.jv(0.4)))
n=U.at()
m=F.al()
l=m.a.W(1,-1,1)
k=m.a.W(1,1,1)
j=m.a.W(1,1,-1)
i=m.a.W(1,-1,-1)
h=m.a.W(-1,-1,1)
g=m.a.W(-1,1,1)
f=m.a.W(-1,1,-1)
e=m.a.W(-1,-1,-1)
d=m.a.W(0.5,-0.5,0.5)
c=m.a.W(0.5,0.5,0.5)
b=m.a.W(0.5,0.5,-0.5)
a=m.a.W(0.5,-0.5,-0.5)
a0=m.a.W(-0.5,-0.5,0.5)
a1=m.a.W(-0.5,0.5,0.5)
a2=m.a.W(-0.5,0.5,-0.5)
a3=m.a.W(-0.5,-0.5,-0.5)
m.c.fP([l,k,k,j,j,i,i,l,h,g,g,f,f,e,e,h,d,c,c,b,b,a,a,d,a0,a1,a1,a2,a2,a3,a3,a0,l,h,k,g,j,f,i,e,d,a0,c,a1,b,a2,a,a3,l,d,k,c,j,b,i,a,h,a0,g,a1,f,a2,e,a3])
a4=E.a9()
a4.sa8(b8)
a4.sa1(0,m)
a4.sT(o)
a5=E.a9()
a5.sa8(s)
a5.sa1(0,F.j6(!1))
b9=U.at()
b9.j(0,U.A(V.by(1.1,1.1,1.1,1)))
b9.j(0,U.A(V.ci(-1.5707963267948966)))
b9.j(0,q)
b9.j(0,o)
a5.sT(b9)
a6=E.a9()
a6.sa1(0,F.kS(1,b4,1))
a6.sT(n)
a7=E.a9()
a7.sa1(0,F.kX(2))
b9=U.at()
b9.j(0,p)
b9.j(0,n)
a7.sT(b9)
a8=M.c4()
a8.sbr(0,X.h5(!1,b4))
b9=X.bE()
b9.saD(U.A(V.V(-0.5,0,0)))
b9.sT(U.A(V.V(0,0,5)))
a8.saz(b9)
a8.e.j(0,a4)
a8.e.j(0,a5)
a9=M.c4()
b9=X.bE()
b9.saD(U.A(V.V(0.5,0,0)))
b9.sT(U.A(V.V(0,0,5)))
a9.saz(b9)
a9.sa8(r)
a9.e.j(0,a7)
a9.e.j(0,a6)
b6.a=0.5
b6.b=!1
b7.x.c.gb2().j(0,new M.jd(b6))
b7.x.c.gaE().j(0,new M.je(b6))
b7.x.c.gb5().j(0,new M.jf(b6,q,a6,a7,p))
b6=b7.x
b9=new U.cs()
b0=U.jl()
b0.sco(0,!0)
b0.scb(6.283185307179586)
b0.scd(0)
b0.sY(0,0)
b0.scc(100)
b0.sP(0)
b0.sc0(0.5)
b9.b=b0
b1=b9.gaJ()
b0.gq().j(0,b1)
b0=U.jl()
b0.sco(0,!0)
b0.scb(6.283185307179586)
b0.scd(0)
b0.sY(0,0)
b0.scc(100)
b0.sP(0)
b0.sc0(0.5)
b9.c=b0
b0.gq().j(0,b1)
b9.d=null
b9.r=b9.f=b9.e=!1
b9.y=b9.x=2.5
b9.Q=4
b9.ch=b9.cx=!1
b9.db=b9.cy=0
b9.dx=null
b9.dy=0
b9.fx=b9.fr=null
b2=new X.ab(!1,!1,!1)
b3=b9.d
b9.d=b2
b0=new D.v(b5,b3,b2)
b0.b=!0
b9.J(b0)
b0=b9.f
if(b0!==!1){b9.f=!1
b0=new D.v("invertX",b0,!1)
b0.b=!0
b9.J(b0)}b0=b9.r
if(b0!==!0){b9.r=!0
b0=new D.v("invertY",b0,!0)
b0.b=!0
b9.J(b0)}b9.aZ(b6)
n.j(0,b9)
b6=b7.x
b9=new U.cr()
b0=U.jl()
b0.sco(0,!0)
b0.scb(6.283185307179586)
b0.scd(0)
b0.sY(0,0)
b0.scc(100)
b0.sP(0)
b0.sc0(0.2)
b9.b=b0
b0.gq().j(0,b9.gaJ())
b9.c=null
b9.d=!1
b9.e=2.5
b9.r=4
b9.x=b9.y=!1
b9.z=0
b9.Q=null
b9.ch=0
b9.cy=b9.cx=null
b2=new X.ab(!0,!1,!1)
b3=b9.c
b9.c=b2
b0=new D.v(b5,b3,b2)
b0.b=!0
b9.J(b0)
b9.aZ(b6)
n.j(0,b9)
b6=b7.x
b9=new U.ct()
b9.c=0.01
b9.e=b9.d=0
b2=new X.ab(!1,!1,!1)
b9.b=b2
b0=new D.v(b5,b4,b2)
b0.b=!0
b9.J(b0)
b9.aZ(b6)
n.j(0,b9)
b7.sbt(M.jm([a9,a8]))},
kY:function(){var s="target2D",r="_Click and drag to move the location of the slice._",q="target3D",p="target4D",o=V.m3("Hypersphere")
o.aj(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."])
o.bU(3,"2D: circle and square")
o.aj(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."])
o.bV(s)
o.aj([r])
o.bU(3,"3D: sphere and cube")
o.aj(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."])
o.bV(q)
o.aj([r])
o.bU(3,"4D: hypersphere and hypercube")
o.aj(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."])
o.bV(p)
o.aj(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"])
o.aj(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."])
o.aj(["\xab[Back to Examples|../]"])
M.nI(s)
M.nJ(q)
M.nK(p)},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
lM:function(a,b){var s=a.b3,r=new A.hn(b,s)
r.cA(b,s)
r.dY(a,b)
return r},
lN:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.ga0(a4)+a5.ga0(a5)+a6.ga0(a6)+a7.ga0(a7)+a8.ga0(a8)+a9.ga0(a9)+b0.ga0(b0)+b1.ga0(b1)+b2.ga0(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.n)(b3),++r)b+="_"+H.e(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.n)(b4),++r)b+="_"+H.e(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.n)(b5),++r)b+="_"+H.e(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.n)(b6),++r)b+="_"+H.e(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.ap()
if(h){s=$.ao()
c=new Z.aR(c.a|s.a)}if(g){s=$.an()
c=new Z.aR(c.a|s.a)}if(f){s=$.aX()
c=new Z.aR(c.a|s.a)}return new A.hq(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
iV:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iW:function(a,b,c){var s
A.iV(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fv(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
mV:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iV(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
mR:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.iW(b,r,"ambient")
b.a+="\n"},
mT:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.iW(b,r,"diffuse")
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
mW:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.iW(b,r,"invDiffuse")
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
n1:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.iW(b,r,"specular")
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
mY:function(a,b){var s,r,q
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
n_:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iV(b,r,"reflect")
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
n0:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iV(b,r,"refract")
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
mS:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.e(s)
q=A.fv(r)
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
if(typeof s!=="number")return s.ai()
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
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.t(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
if(!a.b.a)s=!1
else s=!0
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
n=[]
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.t(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.t(o," + ")+");\n"
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
mU:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.e(s)
q=A.fv(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ai()
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
if(!a.b.a)p=!1
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.h
l=[]
if(!a.c.a)p=!1
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
else p=!0
if(p)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.t(l," + ")+");\n"}else c.a+="   highLight = "+C.a.t(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.t(m," + ")+");\n"
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
mZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.e(s)
q=A.fv(r)
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
if(typeof s!=="number")return s.ai()
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
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.t(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
if(!a.b.a)p=!1
else p=!0
if(p)j.push("ambientColor")
if(a.dx){c.a+=u.h
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.t(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.t(j," + ")+");\n"
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
n2:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.e(s)
q=A.fv(r)
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
if(typeof s!=="number")return s.ai()
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
if(m){s=$.fW
if(s==null)s=$.fW=new E.eF(E.kw(),E.kx())
p=c.a
if(s.b===C.q){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.t(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
if(!a.b.a)s=!1
else s=!0
if(s)h.push("ambientColor")
if(a.dx){c.a+=u.h
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.t(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.t(h," + ")+");\n"
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
mX:function(a,b){var s,r
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
s=b.a+="   return "+C.a.t(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
n3:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.bb("")
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
A.mV(a,h)
A.mR(a,h)
A.mT(a,h)
A.mW(a,h)
A.n1(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.n_(a,h)
A.n0(a,h)}A.mY(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.mS(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.mU(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.mZ(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.n2(a,o[m],h)
A.mX(a,h)}o=h.a+="// === Main ===\n"
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
if(p){h.a=s+u.N
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
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.t(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
n4:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bm+"];\n"
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
n6:function(a,b){var s
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
n5:function(a,b){var s
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
n8:function(a,b){var s,r
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
n9:function(a,b){var s,r
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
n7:function(a,b){var s
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
na:function(a,b){var s
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
fv:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.aU(a,1)},
jA:function(a,b,c,d,e){var s=new A.ih(a,c,e)
s.f=d
P.jt(d,0,!1)
return s},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a){this.a=a},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hn:function hn(a,b){var _=this
_.hK=_.hJ=_.bn=_.b3=_.bm=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hX=_.hW=_.hV=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.hU=_.hT=_.dm=_.hS=_.hR=_.dl=_.dk=_.hQ=_.hP=_.dj=_.di=_.hO=_.hN=_.dh=_.hM=_.hL=_.dg=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fF:function fF(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bm=b5
_.b3=b6
_.bn=b7},
ed:function ed(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ee:function ee(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eh:function eh(a,b,c,d,e,f,g,h,i,j){var _=this
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
ek:function ek(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dT:function dT(){},
ig:function ig(){},
im:function im(a){this.a=a},
ea:function ea(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
e9:function e9(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
eb:function eb(a,b,c){this.a=a
this.c=b
this.d=c},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ef:function ef(a,b,c){this.a=a
this.c=b
this.d=c},
eg:function eg(a,b,c){this.a=a
this.c=b
this.d=c},
ei:function ei(a,b,c){this.a=a
this.c=b
this.d=c},
ej:function ej(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jR:function(){var s,r=F.al(),q=r.a,p=V.ak(),o=new V.q(-1,-1,0).D(),n=q.aL(new V.ad(1,2,4,6),V.bV(255,0,0),new V.H(-1,0,0),p,o,null)
o=r.a
p=new V.q(1,-1,0).D()
s=o.aL(new V.ad(0,3,4,6),V.bV(0,0,255),new V.H(1,0,0),new V.N(1,0),p,null)
r.c.bT(0,n,s)
return r},
j6:function(a){var s,r,q,p,o=null,n=F.al(),m=n.a,l=new V.q(-1,-1,1).D(),k=m.aL(new V.ad(1,2,4,6),V.bV(255,0,0),new V.H(-1,-1,0),new V.N(0,1),l,o)
l=n.a
m=new V.q(1,-1,1).D()
s=l.aL(new V.ad(0,3,4,6),V.bV(0,0,255),new V.H(1,-1,0),new V.N(1,1),m,o)
m=n.a
l=new V.q(1,1,1).D()
r=m.aL(new V.ad(0,2,5,6),V.bV(0,128,0),new V.H(1,1,0),new V.N(1,0),l,o)
l=n.a
m=V.ak()
q=new V.q(-1,1,1).D()
p=l.aL(new V.ad(0,2,4,7),V.bV(255,255,0),new V.H(-1,1,0),m,q,o)
if(a)n.c.d1([k,s,r,p])
else n.d.fN([k,s,r,p])
n.as()
return n},
kS:function(a,b,c){var s=null,r=F.al()
F.cN(r,b,s,c,a,1,0,0,1)
F.cN(r,b,s,c,a,0,1,0,3)
F.cN(r,b,s,c,a,0,0,1,2)
F.cN(r,b,s,c,a,-1,0,0,0)
F.cN(r,b,s,c,a,0,-1,0,0)
F.cN(r,b,s,c,a,0,0,-1,3)
r.as()
return r},
iU:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cN:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.q(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.q(s+a5,r+a3,q+a4)
o=new V.q(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.q(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.iU(g)
j=F.iU(f)
i=F.nM(a1,a2,new F.iT(h,F.iU(e),F.iU(d),j,k,a0),b)
if(i!=null)a.aC(i)},
kT:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new F.iZ()
if(b<3)return null
s=F.al()
r=-6.283185307179586/b
q=[]
for(p=0;p<=b;++p){o=r*p
n=Math.sin(o)
m=Math.cos(o)
l=e.$1(p/b)
k=s.a
if(typeof l!=="number")return H.o(l)
j=new V.q(n,m,1).D()
if(n<0)i=0
else i=n>1?1:n
h=m<0
if(h)g=0
else g=m>1?1:m
if(h)h=0
else h=m>1?1:m
k.toString
f=F.be(new V.ad(-1,-1,-1,-1),null,new V.I(i,g,h,1),new V.H(n*l,m*l,0),new V.q(0,0,1),new V.N(n*0.5+0.5,m*0.5+0.5),j,null,0)
k.j(0,f)
q.push(f)}s.c.d1(q)
return s},
kX:function(a){var s=F.al(),r=Math.sqrt(5)/2+0.5,q=F.a_(s,new V.q(-1,r,0)),p=F.a_(s,new V.q(1,r,0)),o=-r,n=F.a_(s,new V.q(-1,o,0)),m=F.a_(s,new V.q(1,o,0)),l=F.a_(s,new V.q(0,-1,o)),k=F.a_(s,new V.q(0,1,o)),j=F.a_(s,new V.q(0,-1,r)),i=F.a_(s,new V.q(0,1,r)),h=F.a_(s,new V.q(r,0,1)),g=F.a_(s,new V.q(r,0,-1)),f=F.a_(s,new V.q(o,0,1)),e=F.a_(s,new V.q(o,0,-1))
F.J(s,q,e,k,a)
F.J(s,q,k,p,a)
F.J(s,q,p,i,a)
F.J(s,q,i,f,a)
F.J(s,q,f,e,a)
F.J(s,p,k,g,a)
F.J(s,k,e,l,a)
F.J(s,e,f,n,a)
F.J(s,f,i,j,a)
F.J(s,i,p,h,a)
F.J(s,m,g,l,a)
F.J(s,m,l,n,a)
F.J(s,m,n,j,a)
F.J(s,m,j,h,a)
F.J(s,m,h,g,a)
F.J(s,l,g,k,a)
F.J(s,n,l,e,a)
F.J(s,j,n,f,a)
F.J(s,h,j,i,a)
F.J(s,g,h,p,a)
s.ha(new F.eq(),new F.ix())
return s},
a_:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.D()
s=b.a
r=b.b
q=b.c
p=F.be(h,h,h,new V.H(s,r,q),b,h,h,h,0)
o=a.h3(p,new F.eq())
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
p.sU(0,new V.I(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.sck(new V.N(j,i<0?-i:i))
a.a.j(0,p)
return p},
J:function(a,b,c,d,e){var s,r,q,p
if(e<=0)a.d.d0(0,b,d,c)
else{s=F.a_(a,b.r.u(0,c.r).m(0,0.5))
r=F.a_(a,c.r.u(0,d.r).m(0,0.5))
q=F.a_(a,d.r.u(0,b.r).m(0,0.5))
p=e-1
F.J(a,b,s,q,p)
F.J(a,s,c,r,p)
F.J(a,r,q,s,p)
F.J(a,q,r,d,p)}},
nM:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.al()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.be(e,e,new V.I(n,0,0,1),e,e,new V.N(p,1),e,e,0)
o.j(0,m)
c.$3(m,p,0)
r.push(m.c_(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.be(e,e,new V.I(h,g,f,1),e,e,new V.N(p,k),e,e,0)
i.j(0,m)
c.$3(m,p,l)
r.push(m.c_(d))}}s.d.fO(a+1,b+1,r)
return s},
c6:function(a,b,c){var s=new F.dc(),r=a.a
if(r==null)H.m(P.j(u.p))
if(r!=b.a||r!=c.a)H.m(P.j(u.R))
s.aX(a)
s.aY(b)
s.cX(c)
s.a.a.d.b.push(s)
s.a.a.L()
return s},
js:function(a,b){var s,r=new F.dr()
if(a==null)H.m(P.j(u.e))
if(b==null)H.m(P.j(u.k))
s=a.a
if(s==null)H.m(P.j(u.E))
if(s!=b.a)H.m(P.j(u.T))
r.aX(a)
r.aY(b)
r.a.a.c.b.push(r)
r.a.a.L()
return r},
lO:function(a){var s=new F.hJ()
if(a.a==null)H.m(P.j("May not create a point with a vertex which is not attached to a shape."))
s.ft(a)
s.a.a.b.b.push(s)
s.a.a.L()
return s},
al:function(){var s=new F.ag(),r=new F.it(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hV(s)
r.b=[]
s.b=r
r=new F.hU(s)
r.b=[]
s.c=r
r=new F.hT(s)
r.b=[]
s.d=r
return s},
be:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.is(),p=new F.iB()
p.b=[]
q.b=p
p=new F.iy()
p.b=[]
p.c=[]
q.c=p
p=new F.iu()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.li()
q.e=0
p=$.ap()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.ao().a)!==0?e:r
q.x=(s&$.an().a)!==0?b:r
q.y=(s&$.bk().a)!==0?f:r
q.z=(s&$.bl().a)!==0?g:r
q.Q=(s&$.lj().a)!==0?c:r
q.ch=(s&$.bT().a)!==0?i:0
q.cx=(s&$.aX().a)!==0?a:r
return q},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iZ:function iZ(){},
dc:function dc(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(){},
hZ:function hZ(){},
dr:function dr(){this.b=this.a=null},
hi:function hi(){},
ie:function ie(){},
hJ:function hJ(){this.a=null},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hT:function hT(a){this.a=a
this.b=null},
hU:function hU(a){this.a=a
this.b=null},
hV:function hV(a){this.a=a
this.b=null},
is:function is(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.a=a},
iC:function iC(a){this.a=a},
it:function it(a){this.a=a
this.c=this.b=null},
iu:function iu(){this.d=this.c=this.b=null},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
iy:function iy(){this.c=this.b=null},
iz:function iz(){},
eq:function eq(){},
iA:function iA(){},
ix:function ix(){},
iB:function iB(){this.b=null}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jq.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gS:function(a){return H.co(a)},
i:function(a){return"Instance of '"+H.e(H.dO(a))+"'"}}
J.he.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159}}
J.cc.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.b2.prototype={
gS:function(a){return 0},
i:function(a){return String(a)}}
J.dL.prototype={}
J.bI.prototype={}
J.aj.prototype={
i:function(a){var s=a[$.l7()]
if(s==null)return this.dX(a)
return"JavaScript function for "+H.e(J.a4(s))}}
J.aa.prototype={
cg:function(a,b){if(!!a.fixed$length)H.m(P.x("removeAt"))
if(b<0||b>=a.length)throw H.b(P.dP(b,null))
return a.splice(b,1)[0]},
w:function(a,b){var s
if(!!a.fixed$length)H.m(P.x("remove"))
for(s=0;s<a.length;++s)if(J.u(a[s],b)){a.splice(s,1)
return!0}return!1},
bg:function(a,b){var s,r
if(!!a.fixed$length)H.m(P.x("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.n)(b),++r)a.push(b[r])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.bX(a))}},
t:function(a,b){var s,r,q=P.jt(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.e(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
h8:function(a){return this.t(a,"")},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gh5:function(a){if(a.length>0)return a[0]
throw H.b(H.k4())},
gc9:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.k4())},
aT:function(a,b){if(!!a.immutable$list)H.m(P.x("sort"))
H.m6(a,b==null?J.mI():b)},
dU:function(a){return this.aT(a,null)},
N:function(a,b){var s
for(s=0;s<a.length;++s)if(J.u(a[s],b))return!0
return!1},
i:function(a){return P.jo(a,"[","]")},
gO:function(a){return new J.T(a,a.length)},
gS:function(a){return H.co(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.m(P.x("set length"))
a.length=b},
h:function(a,b){if(!H.bO(b))throw H.b(H.bg(a,b))
if(b>=a.length||b<0)throw H.b(H.bg(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.m(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bg(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dm.prototype={}
J.T.prototype={
gF:function(a){return this.d},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b1.prototype={
ak:function(a,b){var s
if(typeof b!="number")throw H.b(H.aG(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbo(b)
if(this.gbo(a)===s)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
dq:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.x(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
fU:function(a,b,c){if(C.c.ak(b,c)>0)throw H.b(H.aG(b))
if(this.ak(a,b)<0)return b
if(this.ak(a,c)>0)return c
return a},
hA:function(a,b){var s
if(b>20)throw H.b(P.aM(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
m:function(a,b){if(typeof b!="number")throw H.b(H.aG(b))
return a*b},
dR:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aa:function(a,b){return(a|0)===a?a/b|0:this.fC(a,b)},
fC:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.x("Result of truncating division is "+H.e(s)+": "+H.e(a)+" ~/ "+b))},
be:function(a,b){var s
if(a>0)s=this.fB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fB:function(a,b){return b>31?0:a>>>b},
$ia0:1,
$iR:1}
J.cb.prototype={$ip:1}
J.dl.prototype={}
J.aJ.prototype={
bY:function(a,b){if(b<0)throw H.b(H.bg(a,b))
if(b>=a.length)H.m(H.bg(a,b))
return a.charCodeAt(b)},
cI:function(a,b){if(b>=a.length)throw H.b(H.bg(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!="string")throw H.b(P.jW(b,null,null))
return a+b},
cu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.dP(b,null))
if(b>c)throw H.b(P.dP(b,null))
if(c>a.length)throw H.b(P.dP(c,null))
return a.substring(b,c)},
aU:function(a,b){return this.cu(a,b,null)},
m:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.D)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ag:function(a,b){var s=b-a.length
if(s<=0)return a
return this.m(" ",s)+a},
fW:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.aM(c,0,s,null,null))
return H.l2(a,b,c)},
N:function(a,b){return this.fW(a,b,0)},
ak:function(a,b){var s
if(typeof b!="string")throw H.b(H.aG(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gS:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iM:1}
H.L.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.b.bY(this.a,b)}}
H.i.prototype={}
H.bv.prototype={
gF:function(a){var s=this.d
return s},
v:function(){var s,r=this,q=r.a,p=J.bh(q),o=p.gk(q)
if(r.b!=o)throw H.b(P.bX(q))
s=r.c
if(typeof o!=="number")return H.o(o)
if(s>=o){r.d=null
return!1}r.d=p.E(q,s);++r.c
return!0}}
H.b5.prototype={
gO:function(a){return new H.cg(J.bm(this.a),this.b)},
gk:function(a){return J.bn(this.a)},
E:function(a,b){return this.b.$1(J.jh(this.a,b))}}
H.c2.prototype={$ii:1}
H.cg.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gF(r))
return!0}s.a=null
return!1},
gF:function(a){var s=this.a
return s}}
H.cu.prototype={
gO:function(a){return new H.eu(J.bm(this.a),this.b)}}
H.eu.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gF(s)))return!0
return!1},
gF:function(a){var s=this.a
return s.gF(s)}}
H.c7.prototype={}
H.en.prototype={
l:function(a,b,c){throw H.b(P.x("Cannot modify an unmodifiable list"))}}
H.bJ.prototype={}
H.ic.prototype={
af:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dF.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dn.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.e(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.e(r.a)+")"
return q+p+"' on '"+s+"' ("+H.e(r.a)+")"}}
H.em.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hI.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f7.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bq.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.l5(r==null?"unknown":r)+"'"},
ghD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i4.prototype={}
H.i0.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.l5(s)+"'"}}
H.bU.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bU))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.co(this.a)
else s=typeof r!=="object"?J.a1(r):H.co(r)
return(s^H.co(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.dO(s))+"'")}}
H.dR.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.t.prototype={
gk:function(a){return this.a},
gaB:function(a){return new H.aK(this)},
ghC:function(a){return H.lL(new H.aK(this),new H.hg(this))},
fX:function(a,b){var s=this.b
if(s==null)return!1
return this.eh(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bc(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bc(p,b)
q=r==null?n:r.b
return q}else return o.h7(b)},
h7:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cN(q,J.a1(a)&0x3ffffff)
r=this.ds(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cF(s==null?m.b=m.bJ():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cF(r==null?m.c=m.bJ():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bJ()
p=J.a1(b)&0x3ffffff
o=m.cN(q,p)
if(o==null)m.bQ(q,p,[m.bK(b,c)])
else{n=m.ds(o,b)
if(n>=0)o[n].b=c
else o.push(m.bK(b,c))}}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.bX(s))
r=r.c}},
cF:function(a,b,c){var s=this.bc(a,b)
if(s==null)this.bQ(a,b,this.bK(b,c))
else s.b=c},
bK:function(a,b){var s=this,r=new H.hj(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
ds:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
i:function(a){return P.k8(this)},
bc:function(a,b){return a[b]},
cN:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
ek:function(a,b){delete a[b]},
eh:function(a,b){return this.bc(a,b)!=null},
bJ:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bQ(r,s,r)
this.ek(r,s)
return r}}
H.hg.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mG(this.a).aw("2(1)")}}
H.hj.prototype={}
H.aK.prototype={
gk:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.ds(s,s.r)
r.c=s.e
return r}}
H.ds.prototype={
gF:function(a){return this.d},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.bX(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.j0.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.j1.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j2.prototype={
$1:function(a){return this.a(a)}}
H.hf.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cl.prototype={}
H.bB.prototype={
gk:function(a){return a.length},
$ir:1}
H.b7.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.ck.prototype={
l:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dz.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dA.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dB.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dC.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dD.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cm.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dE.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
H.af.prototype={
aw:function(a){return H.fj(v.typeUniverse,this,a)},
cG:function(a){return H.mu(v.typeUniverse,this,a)}}
H.eL.prototype={}
H.eG.prototype={
i:function(a){return this.a}}
H.cK.prototype={}
P.iF.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.iE.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iG.prototype={
$0:function(){this.a.$0()}}
P.iH.prototype={
$0:function(){this.a.$0()}}
P.iP.prototype={
e5:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cT(new P.iQ(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))}}
P.iQ.prototype={
$0:function(){this.b.$0()}}
P.bM.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bN.prototype={
gF:function(a){var s=this.c
if(s==null)return this.b
return s.gF(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bM){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bm(s)
if(o instanceof P.bN){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cH.prototype={
gO:function(a){return new P.bN(this.a())}}
P.ev.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.iS.prototype={}
P.iX.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a4(this.b)
throw s}}
P.iM.prototype={
hx:function(a){var s,r,q,p=null
try{if(C.e===$.aE){a.$0()
return}P.nd(p,p,this,a)}catch(q){s=H.fw(q)
r=H.jO(q)
P.kO(p,p,this,s,r)}},
hy:function(a,b){var s,r,q,p=null
try{if(C.e===$.aE){a.$1(b)
return}P.ne(p,p,this,a,b)}catch(q){s=H.fw(q)
r=H.jO(q)
P.kO(p,p,this,s,r)}},
hz:function(a,b){return this.hy(a,b,t.z)},
fS:function(a){return new P.iN(this,a)},
fT:function(a,b){return new P.iO(this,a,b)}}
P.iN.prototype={
$0:function(){return this.a.hx(this.b)}}
P.iO.prototype={
$1:function(a){return this.a.hz(this.b,a)},
$S:function(){return this.c.aw("~(0)")}}
P.cw.prototype={
gO:function(a){var s=new P.cx(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
N:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ef(b)
return r}},
ef:function(a){var s=this.d
if(s==null)return!1
return this.bA(s[this.bx(a)],a)>=0},
j:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cJ(s==null?q.b=P.jD():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cJ(r==null?q.c=P.jD():r,b)}else return q.e7(0,b)},
e7:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jD()
s=q.bx(b)
r=p[s]
if(r==null)p[s]=[q.bw(b)]
else{if(q.bA(r,b)>=0)return!1
r.push(q.bw(b))}return!0},
w:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fk(this.c,b)
else return this.fj(0,b)},
fj:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bx(b)
r=n[s]
q=o.bA(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cZ(p)
return!0},
cJ:function(a,b){if(a[b]!=null)return!1
a[b]=this.bw(b)
return!0},
fk:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cZ(s)
delete a[b]
return!0},
cO:function(){this.r=1073741823&this.r+1},
bw:function(a){var s,r=this,q=new P.iL(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cO()
return q},
cZ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cO()},
bx:function(a){return J.a1(a)&1073741823},
bA:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1}}
P.iL.prototype={}
P.cx.prototype={
gF:function(a){return this.d},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.bX(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.ca.prototype={}
P.ce.prototype={$ii:1,$if:1}
P.B.prototype={
gO:function(a){return new H.bv(a,this.gk(a))},
E:function(a,b){return this.h(a,b)},
gdu:function(a){return this.gk(a)===0},
cm:function(a){var s,r,q,p,o=this
if(o.gdu(a)){s=J.k5(0)
return s}r=o.h(a,0)
q=P.jt(o.gk(a),r,!0)
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.o(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
i:function(a){return P.jo(a,"[","]")}}
P.du.prototype={}
P.hm.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.e(a)
r.a=s+": "
r.a+=H.e(b)},
$S:16}
P.ax.prototype={
C:function(a,b){var s,r
for(s=J.bm(this.gaB(a));s.v();){r=s.gF(s)
b.$2(r,this.h(a,r))}},
gk:function(a){return J.bn(this.gaB(a))},
i:function(a){return P.k8(a)}}
P.cE.prototype={
i:function(a){return P.jo(this,"{","}")},
E:function(a,b){var s,r,q,p="index"
P.ls(b,p)
P.kg(b,p)
for(s=P.mf(this,this.r),r=0;s.v();){q=s.d
if(b===r)return q;++r}throw H.b(P.G(b,this,p,null,r))},
$ii:1,
$if:1}
P.cy.prototype={}
P.d5.prototype={}
P.d8.prototype={}
P.fV.prototype={}
P.iq.prototype={}
P.ir.prototype={
fY:function(a){var s,r,q,p=null,o=P.jw(0,p,a.length)
if(o==null)throw H.b(new P.bG(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.iR(r)
if(q.em(a,0,o)!==o){C.b.bY(a,o-1)
q.bS()}return new Uint8Array(r.subarray(0,H.mA(0,q.b,r.length)))}}
P.iR.prototype={
bS:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fL:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bS()
return!1}},
em:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bY(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.cI(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fL(p,C.b.cI(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bS()}else if(p<=2047){o=l.b
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
P.bf.prototype={}
P.as.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
ak:function(a,b){return C.c.ak(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.be(s,30))&1073741823},
i:function(a){var s=this,r=P.lB(H.lW(s)),q=P.da(H.lU(s)),p=P.da(H.lQ(s)),o=P.da(H.lR(s)),n=P.da(H.lT(s)),m=P.da(H.lV(s)),l=P.lC(H.lS(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a0.prototype={}
P.c1.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.c1&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
ak:function(a,b){return C.c.ak(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fT(),o=this.a
if(o<0)return"-"+new P.c1(0-o).i(0)
s=p.$1(C.c.aa(o,6e7)%60)
r=p.$1(C.c.aa(o,1e6)%60)
q=new P.fS().$1(o%1e6)
return""+C.c.aa(o,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.fS.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fT.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.F.prototype={}
P.d0.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fY(s)
return"Assertion failed"}}
P.dG.prototype={
i:function(a){return"Throw of null."}}
P.a7.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbz()+o+m
if(!q.a)return l
s=q.gby()
r=P.fY(q.b)
return l+s+": "+r}}
P.bG.prototype={
gbz:function(){return"RangeError"},
gby:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.e(q):""
else if(q==null)s=": Not greater than or equal to "+H.e(r)
else if(q>r)s=": Not in inclusive range "+H.e(r)+".."+H.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.e(r)
return s}}
P.di.prototype={
gbz:function(){return"RangeError"},
gby:function(){var s,r=this.b
if(typeof r!=="number")return r.ad()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.e(s)},
gk:function(a){return this.f}}
P.eo.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.el.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dZ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.d7.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fY(s)+"."}}
P.dJ.prototype={
i:function(a){return"Out of Memory"},
$iF:1}
P.cp.prototype={
i:function(a){return"Stack Overflow"},
$iF:1}
P.d9.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eI.prototype={
i:function(a){return"Exception: "+this.a}}
P.h3.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.cu(q,0,75)+"..."
return r+"\n"+q}}
P.p.prototype={}
P.f.prototype={
gk:function(a){var s,r=this.gO(this)
for(s=0;r.v();)++s
return s},
E:function(a,b){var s,r,q
P.kg(b,"index")
for(s=this.gO(this),r=0;s.v();){q=s.gF(s)
if(b===r)return q;++r}throw H.b(P.G(b,this,"index",null,r))},
i:function(a){return P.lE(this,"(",")")}}
P.dk.prototype={}
P.aw.prototype={$ii:1,$if:1}
P.dt.prototype={}
P.ac.prototype={
gS:function(a){return P.K.prototype.gS.call(C.f,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
p:function(a,b){return this===b},
gS:function(a){return H.co(this)},
i:function(a){return"Instance of '"+H.e(H.dO(this))+"'"},
toString:function(){return this.i(this)}}
P.M.prototype={}
P.bb.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fx.prototype={
gk:function(a){return a.length}}
W.cZ.prototype={
i:function(a){return String(a)}}
W.d_.prototype={
i:function(a){return String(a)}}
W.d2.prototype={}
W.aY.prototype={
dQ:function(a,b,c){var s=a.getContext(b,P.nr(c))
return s},
$iaY:1}
W.ai.prototype={
gk:function(a){return a.length}}
W.fK.prototype={
gk:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bZ.prototype={
gk:function(a){return a.length}}
W.fL.prototype={}
W.a8.prototype={}
W.ar.prototype={}
W.fM.prototype={
gk:function(a){return a.length}}
W.fN.prototype={
gk:function(a){return a.length}}
W.fO.prototype={
gk:function(a){return a.length}}
W.fQ.prototype={
i:function(a){return String(a)}}
W.c_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.c0.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaF(a))+" x "+H.e(this.gaA(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bS(b)
s=a.left==s.gbp(b)&&a.top==s.gbs(b)&&this.gaF(a)==s.gaF(b)&&this.gaA(a)==s.gaA(b)}else s=!1
return s},
gS:function(a){return W.kA(J.a1(a.left),J.a1(a.top),J.a1(this.gaF(a)),J.a1(this.gaA(a)))},
gd7:function(a){return a.bottom},
gaA:function(a){return a.height},
gbp:function(a){return a.left},
gbq:function(a){return a.right},
gbs:function(a){return a.top},
gaF:function(a){return a.width},
$iae:1}
W.db.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fR.prototype={
gk:function(a){return a.length}}
W.ey.prototype={
gdu:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
j:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.cm(this)
return new J.T(s,s.length)}}
W.P.prototype={
gd9:function(a){return new W.ey(a,a.children)},
gda:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ad()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ad()
if(p<0)p=-p*0
return new P.ae(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iP:1}
W.h.prototype={$ih:1}
W.c.prototype={
fM:function(a,b,c,d){if(c!=null)this.e8(a,b,c,!1)},
e8:function(a,b,c,d){return a.addEventListener(b,H.cT(c,1),!1)},
$ic:1}
W.aZ.prototype={$iaZ:1}
W.dd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.de.prototype={
gk:function(a){return a.length}}
W.dg.prototype={
gk:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.h6.prototype={
gk:function(a){return a.length}}
W.b0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b3.prototype={$ib3:1}
W.hk.prototype={
i:function(a){return String(a)}}
W.hC.prototype={
gk:function(a){return a.length}}
W.hD.prototype={
h:function(a,b){return P.aW(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
gaB:function(a){var s=[]
this.C(a,new W.hE(s))
return s},
gk:function(a){return a.size}}
W.hE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hF.prototype={
h:function(a,b){return P.aW(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
gaB:function(a){var s=[]
this.C(a,new W.hG(s))
return s},
gk:function(a){return a.size}}
W.hG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b6.prototype={$ib6:1}
W.dy.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.a5.prototype={$ia5:1}
W.ex.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.c8(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.w.prototype={
hv:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lm(s,b,a)}catch(q){H.fw(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dW(a):s},
fm:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b8.prototype={
gk:function(a){return a.length},
$ib8:1}
W.dM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.hQ.prototype={
h:function(a,b){return P.aW(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
gaB:function(a){var s=[]
this.C(a,new W.hR(s))
return s},
gk:function(a){return a.size}}
W.hR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dS.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.dV.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b9.prototype={$ib9:1}
W.dW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ba.prototype={
gk:function(a){return a.length},
$iba:1}
W.i1.prototype={
h:function(a,b){return a.getItem(H.my(b))},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaB:function(a){var s=[]
this.C(a,new W.i2(s))
return s},
gk:function(a){return a.length}}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aO.prototype={$iaO:1}
W.aP.prototype={$iaP:1}
W.am.prototype={$iam:1}
W.e2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.e3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.i7.prototype={
gk:function(a){return a.length}}
W.bc.prototype={$ibc:1}
W.bd.prototype={$ibd:1}
W.e7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ia.prototype={
gk:function(a){return a.length}}
W.aD.prototype={}
W.ip.prototype={
i:function(a){return String(a)}}
W.er.prototype={
gk:function(a){return a.length}}
W.aS.prototype={
gh0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.x("deltaY is not supported"))},
gh_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.x("deltaX is not supported"))},
$iaS:1}
W.bL.prototype={
fo:function(a,b){return a.requestAnimationFrame(H.cT(b,1))},
el:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ez.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cv.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bS(b)
s=a.left==s.gbp(b)&&a.top==s.gbs(b)&&a.width==s.gaF(b)&&a.height==s.gaA(b)}else s=!1
return s},
gS:function(a){return W.kA(J.a1(a.left),J.a1(a.top),J.a1(a.width),J.a1(a.height))},
gaA:function(a){return a.height},
gaF:function(a){return a.width}}
W.eM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.f4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fb.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.jn.prototype={}
W.eH.prototype={}
W.iI.prototype={
$1:function(a){return this.a.$1(a)}}
W.jC.prototype={}
W.D.prototype={
gO:function(a){return new W.c8(a,this.gk(a))}}
W.c8.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cX(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gF:function(a){return this.d}}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f1.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f8.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
P.iY.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.df.prototype={
gbd:function(){return new H.b5(new H.cu(this.b,new P.h1()),new P.h2())},
l:function(a,b,c){var s=this.gbd()
J.lq(s.b.$1(J.jh(s.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bn(this.gbd().a)},
h:function(a,b){var s=this.gbd()
return s.b.$1(J.jh(s.a,b))},
gO:function(a){var s=P.ju(this.gbd(),!1)
return new J.T(s,s.length)}}
P.h1.prototype={
$1:function(a){return t.h.b(a)}}
P.h2.prototype={
$1:function(a){return t.h.a(a)}}
P.f0.prototype={
gbq:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
gd7:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.e(s.a)+", "+H.e(s.b)+") "+H.e(s.c)+" x "+H.e(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bS(b)
if(s==r.gbp(b)){q=n.b
if(q==r.gbs(b)){p=n.c
if(typeof s!=="number")return s.u()
if(typeof p!=="number")return H.o(p)
o=n.$ti.c
if(o.a(s+p)===r.gbq(b)){s=n.d
if(typeof q!=="number")return q.u()
if(typeof s!=="number")return H.o(s)
r=o.a(q+s)===r.gd7(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.a1(q),o=r.b,n=J.a1(o),m=r.c
if(typeof q!=="number")return q.u()
if(typeof m!=="number")return H.o(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.u()
if(typeof q!=="number")return H.o(q)
q=C.c.gS(s.a(o+q))
return P.me(P.iK(P.iK(P.iK(P.iK(0,p),n),m),q))}}
P.ae.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaF:function(a){return this.c},
gaA:function(a){return this.d}}
P.bu.prototype={$ibu:1}
P.dq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bC.prototype={$ibC:1}
P.dH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hL.prototype={
gk:function(a){return a.length}}
P.e1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.k.prototype={
gd9:function(a){return new P.df(a,new W.ex(a))}}
P.bH.prototype={$ibH:1}
P.e8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eP.prototype={}
P.eQ.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.fg.prototype={}
P.fh.prototype={}
P.fC.prototype={
gk:function(a){return a.length}}
P.fD.prototype={
h:function(a,b){return P.aW(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
gaB:function(a){var s=[]
this.C(a,new P.fE(s))
return s},
gk:function(a){return a.size}}
P.fE.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d1.prototype={
gk:function(a){return a.length}}
P.aI.prototype={}
P.dI.prototype={
gk:function(a){return a.length}}
P.ew.prototype={}
P.dX.prototype={
gk:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.G(b,a,null,null,null))
s=P.aW(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f5.prototype={}
P.f6.prototype={}
K.fy.prototype={
aO:function(a,b){return!0},
i:function(a){return"all"}}
K.dh.prototype={
aO:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)if(s[q].aO(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aL.prototype={
aO:function(a,b){return!this.dV(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}}
K.hS.prototype={
e_:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.j("May not create a Set with zero characters."))
s=new H.t(t.E)
for(r=new H.bv(a,a.gk(a));r.v();){q=r.d
s.l(0,q,!0)}p=P.ju(new H.aK(s),!0)
C.a.dU(p)
this.a=p},
aO:function(a,b){return C.a.N(this.a,b)},
i:function(a){return P.jx(this.a)}}
L.dY.prototype={
t:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ib(this.a.I(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
h4:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.aO(0,a))return p}return null},
i:function(a){return this.b},
cY:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.N(0,l))m+=" (consume)"
for(l=new H.aK(n.d.c),l=l.gO(l);l.v();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.e(r)+" => ["+H.e(q)+"]")
m=s.c.N(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.n)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.e5.prototype={
i:function(a){var s=H.l3(this.b,"\n","\\n"),r=H.l3(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e6.prototype={
i:function(a){return this.b}}
L.i8.prototype={
I:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dY(this,b)
s.c=[]
this.a.l(0,b,s)}return s},
b8:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.e6(a)
s.c=new H.t(t.i)
this.b.l(0,a,s)}return s},
dN:function(a){return this.hB(a)},
hB:function(a){var s=this
return P.mQ(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dN(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.cg(a0,0)
else{if(!r.v()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.h4(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jx(b)
throw H.b(P.j("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.m(P.x("removeRange"))
P.jw(0,k,b.length)
b.splice(0,k-0)
C.a.bg(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.N(0,n.a)?7:8
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
if(d.d!=null){g=P.jx(c)
f=d.d
e=f.c.h(0,g)
n=new L.e5(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.N(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mc()
case 1:return P.md(o)}}},t.j)},
i:function(a){var s,r=new P.bb(""),q=this.d
if(q!=null)r.a=q.cY()+"\n"
for(q=this.a,q=q.ghC(q),q=new H.cg(J.bm(q.a),q.b);q.v();){s=q.a
if(s!=this.d)r.a+=s.cY()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.ib.prototype={
i:function(a){return this.b.b+": "+this.cv(0)}}
O.br.prototype={
ba:function(){this.a=[]
this.c=this.b=null},
cq:function(a,b,c){this.b=b
this.c=a},
aR:function(a,b){return this.cq(a,null,b)},
cS:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cP:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.T(s,s.length)},
E:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
j:function(a,b){var s,r
if(this.cS([b])){s=this.a
r=s.length
s.push(b)
this.cP(r,[b])}},
bg:function(a,b){var s,r
if(this.cS(b)){s=this.a
r=s.length
C.a.bg(s,b)
this.cP(r,b)}},
$if:1}
O.ch.prototype={
gk:function(a){return this.a.length},
gq:function(){var s=this.b
return s==null?this.b=D.C():s},
aG:function(){var s=this.b
if(s!=null)s.A(null)},
gK:function(a){var s=this.a
if(s.length>0)return C.a.gc9(s)
else return V.cj()},
dJ:function(a){var s=this.a
if(a==null)s.push(V.cj())
else s.push(a)
this.aG()},
cf:function(){var s=this.a
if(s.length>0){s.pop()
this.aG()}}}
E.fG.prototype={}
E.bs.prototype={
cH:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.T(s,s.length);s.v();){r=s.d
if(r.f==null)r.cH()}},
sa1:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gq().w(0,q.gdD())
s=q.c
if(s!=null)s.gq().j(0,q.gdD())
r=new D.v("shape",p,q.c)
r.b=!0
q.an(r)}},
sa8:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gq().w(0,q.gdF())
s=q.f
q.f=a
if(a!=null)a.gq().j(0,q.gdF())
q.cH()
r=new D.v("technique",s,q.f)
r.b=!0
q.an(r)}},
sT:function(a){var s,r,q=this
if(!J.u(q.r,a)){s=q.r
if(s!=null)s.gq().w(0,q.gdB())
if(a!=null)a.gq().j(0,q.gdB())
q.r=a
r=new D.v("mover",s,a)
r.b=!0
q.an(r)}},
ac:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aQ(0,b,q):null
if(!J.u(o,q.x)){s=q.x
q.x=o
r=new D.v("matrix",s,o)
r.b=!0
q.an(r)}p=q.f
if(p!=null)p.ac(0,b)
for(p=q.y.a,p=new J.T(p,p.length);p.v();)p.d.ac(0,b)},
ao:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.gK(s))
else q.push(r.m(0,s.gK(s)))
s.aG()
a.dK(o.f)
s=a.dy
p=(s&&C.a).gc9(s)
if(p!=null&&o.d!=null)p.dL(a,o)
for(s=o.y.a,s=new J.T(s,s.length);s.v();)s.d.ao(a)
a.dH()
a.dx.cf()},
an:function(a){var s=this.z
if(s!=null)s.A(a)},
L:function(){return this.an(null)},
dE:function(a){this.e=null
this.an(a)},
hh:function(){return this.dE(null)},
dG:function(a){this.an(a)},
hi:function(){return this.dG(null)},
dC:function(a){this.an(a)},
hg:function(){return this.dC(null)},
dA:function(a){this.an(a)},
hd:function(){return this.dA(null)},
hc:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdz(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c5()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.L()},
hf:function(a,b){var s,r
for(s=b.gO(b),r=this.gdz();s.v();)s.gF(s).gq().w(0,r)
this.L()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bo.prototype={
i:function(a){return this.b}}
E.bD.prototype={
i:function(a){return this.b}}
E.eF.prototype={}
E.hM.prototype={
dZ:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.as(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.ch()
s.a=[]
s.gq().j(0,new E.hN(r))
r.cy=s
s=new O.ch()
s.a=[]
s.gq().j(0,new E.hO(r))
r.db=s
s=new O.ch()
s.a=[]
s.gq().j(0,new E.hP(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.t(t.G)},
ghs:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gK(q)
s=r.db
s=r.z=q.m(0,s.gK(s))
q=s}return q},
gdI:function(){var s,r=this,q=r.ch
if(q==null){q=r.ghs()
s=r.dx
s=r.ch=q.m(0,s.gK(s))
q=s}return q},
gdO:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
q=q.gK(q)
s=r.dx
s=r.cx=q.m(0,s.gK(s))
q=s}return q},
dK:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gc9(s):a)},
dH:function(){var s=this.dy
if(s.length>1)s.pop()},
d2:function(a){var s=a.b
if(s.length===0)throw H.b(P.j("May not cache a shader with no name."))
if(this.fr.fX(0,s))throw H.b(P.j('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.hN.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hO.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hP.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.e4.prototype={
cD:function(a){this.dM()},
cC:function(){return this.cD(null)},
sbt:function(a){var s=this,r=s.d
if(r!==a){if(r!=null)r.gq().w(0,s.gcB())
s.d=a
a.gq().j(0,s.gcB())
s.cC()}},
cV:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.m()
if(typeof p!=="number")return H.o(p)
s=C.d.dq(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.m()
r=C.d.dq(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kn(C.j,q.ghw())}},
dM:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.u.el(s)
r=W.kP(new E.i6(this),t.H)
r.toString
C.u.fo(s,r)}},
hu:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cV()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.as(p,!1)
q.y=1000*(p-q.r.a)*0.000001
p=q.cy
C.a.sk(p.a,0)
p.aG()
p=q.db
C.a.sk(p.a,0)
p.aG()
p=q.dx
C.a.sk(p.a,0)
p.aG()
p=q.dy
p.toString
C.a.sk(p,0)
q.dy.push(null)
m.ao(n.e)}}catch(o){s=H.fw(o)
r=H.jO(o)
P.l_("Error: "+H.e(s))
P.l_("Stack: "+H.e(r))
throw H.b(s)}}}
E.i6.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hu()}}}
Z.es.prototype={}
Z.fH.prototype={
ar:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fw(q)
r=P.j('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.e(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.e(s.e)+"]"}}
Z.et.prototype={}
Z.bp.prototype={
ae:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
ar:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].ar(a)},
cn:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ao:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
hj:function(a){this.ar(a)
this.ao(a)
this.cn(a)},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a4(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(o,", ")+"\nAttrs:   "+C.a.t(p,", ")}}
Z.d3.prototype={}
Z.c9.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.dO(this.c))+"'")+"]"}}
Z.aR.prototype={
gct:function(a){var s=this.a,r=(s&$.ap().a)!==0?3:0
if((s&$.ao().a)!==0)r+=3
if((s&$.an().a)!==0)r+=3
if((s&$.bk().a)!==0)r+=2
if((s&$.bl().a)!==0)r+=3
if((s&$.bj().a)!==0)r+=3
if((s&$.cW().a)!==0)r+=4
if((s&$.bT().a)!==0)++r
return(s&$.aX().a)!==0?r+4:r},
fR:function(a){var s,r=$.ap(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.ao()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.an()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aX()
if((q&r.a)!==0)if(s===a)return r
return $.lk()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aR))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ap().a)!==0)s.push("Pos")
if((r&$.ao().a)!==0)s.push("Norm")
if((r&$.an().a)!==0)s.push("Binm")
if((r&$.bk().a)!==0)s.push("Txt2D")
if((r&$.bl().a)!==0)s.push("TxtCube")
if((r&$.bj().a)!==0)s.push("Clr3")
if((r&$.cW().a)!==0)s.push("Clr4")
if((r&$.bT().a)!==0)s.push("Weight")
if((r&$.aX().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.t(s,"|")}}
D.fI.prototype={}
D.c5.prototype={
j:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
w:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.N(q,b)
if(q===!0){q=r.a
s=(q&&C.a).w(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.N(q,b)
if(q===!0){q=r.b
s=(q&&C.a).w(q,b)||s}return s},
A:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.S()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.C(P.ju(s,!0),new D.fZ(o))
s=p.b
if(s!=null){p.b=[]
C.a.C(s,new D.h_(o))}return!0},
at:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.fZ.prototype={
$1:function(a){var s=this.a.a
if(s.b)a.$1(s)}}
D.h_.prototype={
$1:function(a){var s=this.a.a
if(s.b)a.$1(s)}}
D.S.prototype={}
D.au.prototype={}
D.av.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.d4.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dp.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.hh.prototype={
ho:function(a){this.c=a.b
this.d.j(0,a.a)
return!1},
hk:function(a){this.c=a.b
this.d.w(0,a.a)
return!1}}
X.cf.prototype={}
X.hl.prototype={
aV:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.m()
s=b.b
r=o.ch
if(typeof s!=="number")return s.m()
q=m.u(0,new V.N(l*k,s*r))
r=o.a.gaN()
p=new X.bz(a,V.ak(),o.x,r,q)
p.b=!0
o.z=new P.as(n,!1)
o.x=q
return p},
ce:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dS()
if(typeof s!=="number")return s.ai()
this.r=(s&~r)>>>0
return!1},
b6:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.aV(a,b))
return!0},
hp:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaN()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.m()
o=a.b
n=m.cy
if(typeof o!=="number")return o.m()
r=new X.bA(new V.a2(q*p,o*n),s,r)
r.b=!0
l.A(r)
return!0},
eT:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cf(c,p.a.gaN(),b)
q.b=!0
r.A(q)
p.y=new P.as(s,!1)
p.x=V.ak()}}
X.ab.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ab))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bz.prototype={}
X.hH.prototype={
bB:function(a,b,c){var s=this,r=new P.as(Date.now(),!1),q=s.a.gaN(),p=new X.bz(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
ce:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.bB(a,b,!0))
return!0},
b7:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dS()
if(typeof r!=="number")return r.ai()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.A(s.bB(a,b,!0))
return!0},
b6:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bB(a,b,!1))
return!0},
hq:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaN()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.m()
p=a.b
o=n.ch
if(typeof p!=="number")return p.m()
s=new X.bA(new V.a2(r*q,p*o),s,b)
s.b=!0
m.A(s)
return!0},
gb2:function(){var s=this.b
return s==null?this.b=D.C():s},
gaE:function(){var s=this.c
return s==null?this.c=D.C():s},
gb5:function(){var s=this.d
return s==null?this.d=D.C():s}}
X.bA.prototype={}
X.dN.prototype={}
X.cq.prototype={}
X.i9.prototype={
aV:function(a,b){var s=this,r=new P.as(Date.now(),!1),q=a.length>0?a[0]:V.ak(),p=s.a.gaN(),o=new X.cq(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hn:function(a){var s=this.b
if(s==null)return!1
s.A(this.aV(a,!0))
return!0},
hl:function(a){var s=this.c
if(s==null)return!1
s.A(this.aV(a,!0))
return!0},
hm:function(a){var s=this.d
if(s==null)return!1
s.A(this.aV(a,!1))
return!0}}
X.ep.prototype={
gaN:function(){var s=this.a,r=C.i.gda(s).c
r.toString
s=C.i.gda(s).d
s.toString
return V.kh(0,0,r,s)},
cL:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dp(s,new X.ab(r,a.altKey,a.shiftKey))},
aK:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ab(r,a.altKey,a.shiftKey)},
bR:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ab(r,a.altKey,a.shiftKey)},
ay:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a5()
if(typeof o!=="number")return H.o(o)
s=r.top
if(typeof p!=="number")return p.a5()
if(typeof s!=="number")return H.o(s)
return new V.N(q-o,p-s)},
aW:function(a){return new V.a2(a.movementX,a.movementY)},
bL:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=C.d.ap(p.pageX)
C.d.ap(p.pageY)
n=k.left
if(typeof n!=="number")return H.o(n)
C.d.ap(p.pageX)
m=C.d.ap(p.pageY)
l=k.top
if(typeof l!=="number")return H.o(l)
j.push(new V.N(o-n,m-l))}return j},
av:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.d4(s,new X.ab(r,a.altKey,a.shiftKey))},
bC:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a5()
if(typeof n!=="number")return H.o(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a5()
if(typeof p!=="number")return H.o(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.o(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.o(p)
p=r<p}else p=!1
return p},
eN:function(a){this.f=!0},
eB:function(a){this.f=!1},
eH:function(a){if(this.f&&this.bC(a))a.preventDefault()},
eR:function(a){var s
if(!this.f)return
s=this.cL(a)
this.b.ho(s)},
eP:function(a){var s
if(!this.f)return
s=this.cL(a)
this.b.hk(s)},
eV:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aK(a)
if(p.x){s=p.av(a)
r=p.aW(a)
if(p.d.ce(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.av(a)
q=p.ay(a)
if(p.c.ce(s,q))a.preventDefault()},
eZ:function(a){var s,r,q,p=this
p.aK(a)
s=p.av(a)
if(p.x){r=p.aW(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.b7(s,q))a.preventDefault()},
eL:function(a){var s,r,q,p=this
if(!p.bC(a)){p.aK(a)
s=p.av(a)
if(p.x){r=p.aW(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.b7(s,q))a.preventDefault()}},
eX:function(a){var s,r,q,p=this
p.aK(a)
s=p.av(a)
if(p.x){r=p.aW(a)
if(p.d.b6(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.b6(s,q))a.preventDefault()},
eJ:function(a){var s,r,q,p=this
if(!p.bC(a)){p.aK(a)
s=p.av(a)
if(p.x){r=p.aW(a)
if(p.d.b6(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.b6(s,q))a.preventDefault()}},
f0:function(a){var s,r,q=this
q.aK(a)
s=new V.a2((a&&C.t).gh_(a),C.t.gh0(a)).m(0,q.Q)
if(q.x){if(q.d.hp(s))a.preventDefault()
return}if(q.r)return
r=q.ay(a)
if(q.c.hq(s,r))a.preventDefault()},
f2:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.av(q.y)
r=q.ay(q.y)
q.d.eT(s,r,p)}},
fi:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bR(a)
s=r.bL(a)
if(r.e.hn(s))a.preventDefault()},
fe:function(a){var s
this.bR(a)
s=this.bL(a)
if(this.e.hl(s))a.preventDefault()},
fg:function(a){var s
this.bR(a)
s=this.bL(a)
if(this.e.hm(s))a.preventDefault()}}
D.b4.prototype={}
D.cd.prototype={
cE:function(a){var s=this.y
if(s!=null)s.A(a)},
cR:function(a){var s=this.z
if(s!=null)s.A(a)},
eS:function(){return this.cR(null)},
f4:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(q==null||this.eg(q))return!1}return!0},
ev:function(a,b){var s,r,q,p
for(s=b.length,r=this.gcQ(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
p.gq().j(0,r)}s=new D.au()
s.b=!0
this.cE(s)},
f8:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gcQ();s.v();){q=s.gF(s)
C.a.w(this.e,q)
q.gq().w(0,r)}s=new D.av()
s.b=!0
this.cE(s)},
eg:function(a){var s=C.a.N(this.e,a)
return s}}
V.O.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.I.prototype={
cm:function(a){var s=this
return[s.a,s.b,s.c,s.d]},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.I))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.fX.prototype={}
V.dx.prototype={
a_:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dx))return!1
s=b.a
$.y().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bR([o.a,o.d,o.r],3,0),m=V.bR([o.b,o.e,o.x],3,0),l=V.bR([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.d(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.d(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.d(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.d(n,1)
p=" "+n[1]+", "
if(1>=r)return H.d(m,1)
p=p+m[1]+", "
if(1>=q)return H.d(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.d(n,2)
k=" "+n[2]+", "
if(2>=r)return H.d(m,2)
k=k+m[2]+", "
if(2>=q)return H.d(l,2)
return p+(k+l[2]+"]")}}
V.bx.prototype={
a_:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
dt:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.y().toString
if(Math.abs(b3-0)<1e-9)return V.cj()
s=1/b3
r=-l
q=-a2
return V.az((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
m:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.az(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
b9:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.H(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bx))return!1
s=b.a
$.y().toString
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
i:function(a){return this.H()},
B:function(a){var s,r,q,p,o,n=this,m=V.bR([n.a,n.e,n.y,n.cx],3,0),l=V.bR([n.b,n.f,n.z,n.cy],3,0),k=V.bR([n.c,n.r,n.Q,n.db],3,0),j=V.bR([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.d(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.d(m,1)
o=o+m[1]+", "
if(1>=r)return H.d(l,1)
o=o+l[1]+", "
if(1>=q)return H.d(k,1)
o=o+k[1]+", "
if(1>=p)return H.d(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.d(m,2)
s=s+m[2]+", "
if(2>=r)return H.d(l,2)
s=s+l[2]+", "
if(2>=q)return H.d(k,2)
s=s+k[2]+", "
if(2>=p)return H.d(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.d(m,3)
o=o+m[3]+", "
if(3>=r)return H.d(l,3)
o=o+l[3]+", "
if(3>=q)return H.d(k,3)
o=o+k[3]+", "
if(3>=p)return H.d(j,3)
return s+(o+j[3]+"]")},
H:function(){return this.B("")}}
V.N.prototype={
V:function(a){return new V.a2(a.a-this.a,a.b-this.b)},
u:function(a,b){return new V.N(this.a+b.a,this.b+b.b)},
G:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.ak()
return new V.N(this.a/b,this.b/b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.H.prototype={
u:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
a5:function(a,b){return new V.H(this.a-b.a,this.b-b.b,this.c-b.c)},
G:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.kd()
return new V.H(this.a/b,this.b/b,this.c/b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.H))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.ad.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ad))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.dQ.prototype={
gZ:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dQ))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.a2.prototype={
b4:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.o(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.o(r)
return q*p+s*r},
m:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.m()
if(typeof b!=="number")return H.o(b)
s=this.b
if(typeof s!=="number")return s.m()
return new V.a2(r*b,s*b)},
G:function(a,b){var s,r
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.kq
return s==null?$.kq=new V.a2(0,0):s}s=this.a
if(typeof s!=="number")return s.G()
r=this.b
if(typeof r!=="number")return r.G()
return new V.a2(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
s=b.a
r=this.a
$.y().toString
if(typeof s!=="number")return s.a5()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a5()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.q.prototype={
b4:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){return new V.q(V.jQ(this.a,a.a,b),V.jQ(this.b,a.b,b),V.jQ(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.a2(s))
if(r===1)return s
return s.G(0,r)},
b_:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.q(s*r-q*p,q*o-n*r,n*p-s*o)},
u:function(a,b){return new V.q(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.q(-this.a,-this.b,-this.c)},
m:function(a,b){return new V.q(this.a*b,this.b*b,this.c*b)},
G:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.bK()
return new V.q(this.a/b,this.b/b,this.c/b)},
dv:function(){$.y().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.q))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aQ.prototype={
b4:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
G:function(a,b){var s,r=this
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.kv
return s==null?$.kv=new V.aQ(0,0,0,0):s}return new V.aQ(r.a/b,r.b/b,r.c/b,r.d/b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aQ))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
U.fJ.prototype={
bv:function(a){var s=V.nP(a,this.c,this.b)
return s},
gq:function(){var s=this.y
return s==null?this.y=D.C():s},
J:function(a){var s=this.y
if(s!=null)s.A(a)},
sco:function(a,b){},
scb:function(a){var s,r=this,q=r.b
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bv(s)}q=new D.v("maximumLocation",q,r.b)
q.b=!0
r.J(q)}},
scd:function(a){var s,r=this,q=r.c
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bv(s)}q=new D.v("minimumLocation",q,r.c)
q.b=!0
r.J(q)}},
sY:function(a,b){var s,r=this
b=r.bv(b)
s=r.d
$.y().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.v("location",s,b)
s.b=!0
r.J(s)}},
scc:function(a){var s,r,q=this,p=q.e
$.y().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.v("maximumVelocity",p,a)
p.b=!0
q.J(p)}},
sP:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.v("velocity",r,a)
r.b=!0
s.J(r)}},
sc0:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.y().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.v("dampening",s,a)
s.b=!0
this.J(s)}},
ac:function(a,b){var s,r,q,p=this,o=p.f
$.y().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sY(0,p.d+s*b)
o=p.x
$.y().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sP(s)}}}
U.bY.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.C():s},
sK:function(a,b){var s,r,q,p=this
if(b==null)b=V.cj()
if(!J.u(p.a,b)){s=p.a
p.a=b
r=new D.v("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.A(r)}},
aQ:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
return J.u(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bt.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.C():s},
J:function(a){var s=this.e
if(s!=null)s.A(a)},
a7:function(){return this.J(null)},
e2:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaJ(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.gq()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.au()
s.b=!0
this.J(s)},
f6:function(a,b){var s,r
for(s=b.gO(b),r=this.gaJ();s.v();)s.gF(s).gq().w(0,r)
s=new D.av()
s.b=!0
this.J(s)},
aQ:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ad()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.T(p,p.length),s=null;p.v();){o=p.d
if(o!=null){r=o.aQ(0,b,c)
if(r!=null)s=s==null?r:r.m(0,s)}}q.f=s==null?V.cj():s
p=q.e
if(p!=null)p.at(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bt))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.u(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iW:1}
U.W.prototype={}
U.cr.prototype={
gq:function(){var s=this.cy
return s==null?this.cy=D.C():s},
J:function(a){var s=this.cy
if(s!=null)s.A(a)},
a7:function(){return this.J(null)},
aZ:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gb2().j(0,s.gbD())
s.a.c.gb5().j(0,s.gbF())
s.a.c.gaE().j(0,s.gbH())
return!0},
bE:function(a){var s=this
if(!J.u(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bG:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!l.y)return
if(l.x){s=a.y.V(a.d)
s=s.a2(s)
r=l.r
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.V(a.d).m(0,2).G(0,s.gZ())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.m()
q=l.e
if(typeof q!=="number")return H.o(q)
r.sP(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.V(q).m(0,2).G(0,s.gZ())
r=l.b
o=p.a
if(typeof o!=="number")return o.M()
n=l.e
if(typeof n!=="number")return H.o(n)
m=l.z
if(typeof m!=="number")return H.o(m)
r.sY(0,-o*n+m)
l.b.sP(0)
l.Q=a.z.V(q).m(0,2).G(0,s.gZ())}l.a7()},
bI:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a2(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.m()
q=p.e
if(typeof q!=="number")return H.o(q)
s.sP(r*10*q)
p.a7()}},
aQ:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.ad()
if(o<n){p.ch=n
s=b.y
p.b.ac(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.az(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iW:1}
U.cs.prototype={
gq:function(){var s=this.fx
return s==null?this.fx=D.C():s},
J:function(a){var s=this.fx
if(s!=null)s.A(a)},
a7:function(){return this.J(null)},
aZ:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gb2().j(0,q.gbD())
q.a.c.gb5().j(0,q.gbF())
q.a.c.gaE().j(0,q.gbH())
s=q.a.d
r=s.f
s=r==null?s.f=D.C():r
s.j(0,q.gen())
s=q.a.d
r=s.d
s=r==null?s.d=D.C():r
s.j(0,q.gep())
s=q.a.e
r=s.b
s=r==null?s.b=D.C():r
s.j(0,q.gfH())
s=q.a.e
r=s.d
s=r==null?s.d=D.C():r
s.j(0,q.gfF())
s=q.a.e
r=s.c
s=r==null?s.c=D.C():r
s.j(0,q.gfD())
return!0},
aq:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.M()
s=-s}if(this.r){if(typeof r!=="number")return r.M()
r=-r}return new V.a2(s,r)},
bE:function(a){var s=this
t._.a(a)
if(!J.u(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bG:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!l.cx)return
if(l.ch){s=a.y.V(a.d)
s=s.a2(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.V(a.d).m(0,2).G(0,s.gZ()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.V(q).m(0,2).G(0,s.gZ()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sY(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.aq(a.z.V(q).m(0,2).G(0,s.gZ()))}l.a7()},
bI:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a2(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sP(-r*10*s)
p.a7()}},
eo:function(a){var s=this
if(t.x.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eq:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!J.u(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aq(r.V(q).m(0,2).G(0,s.gZ()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sY(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.aq(a.z.V(q).m(0,2).G(0,s.gZ()))
l.a7()},
fI:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fG:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.V(a.d)
s=s.a2(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.V(a.d).m(0,2).G(0,s.gZ()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.V(q).m(0,2).G(0,s.gZ()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sY(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.aq(a.z.V(q).m(0,2).G(0,s.gZ()))}l.a7()},
fE:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a2(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sP(-r*10*s)
p.a7()}},
aQ:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ad()
if(q<p){r.dy=p
s=b.y
r.c.ac(0,s)
r.b.ac(0,s)
r.fr=V.ci(r.b.d).m(0,V.jv(r.c.d))}return r.fr},
$iW:1}
U.ct.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.C():s},
J:function(a){var s=this.r
if(s!=null)s.A(a)},
aZ:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.C():r
r=p.ger()
s.j(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.C():q).j(0,r)
return!0},
es:function(a){var s,r,q,p,o=this
if(!J.u(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.m()
p=s+r*q
if(s!==p){o.d=p
s=new D.v("zoom",s,p)
s.b=!0
o.J(s)}},
aQ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.by(s,s,s,1)}return r.f},
$iW:1}
M.bW.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.C():s},
a6:function(a){var s=this.r
if(s!=null)s.A(a)},
bu:function(){return this.a6(null)},
fa:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga9(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.gq()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.au()
s.b=!0
this.a6(s)},
fc:function(a,b){var s,r
for(s=b.gO(b),r=this.ga9();s.v();)s.gF(s).gq().w(0,r)
s=new D.av()
s.b=!0
this.a6(s)},
ao:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.T(s,s.length);s.v();){r=s.d
if(r!=null)r.ao(a)}q.f=!1},
$iaB:1}
M.c3.prototype={
a6:function(a){var s=this.y
if(s!=null)s.A(a)},
bu:function(){return this.a6(null)},
eD:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga9(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c5()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.au()
s.b=!0
this.a6(s)},
eF:function(a,b){var s,r
for(s=b.gO(b),r=this.ga9();s.v();)s.gF(s).gq().w(0,r)
s=new D.av()
s.b=!0
this.a6(s)},
saz:function(a){var s,r,q=this
if(a==null)a=X.bE()
s=q.b
if(s!==a){if(s!=null)s.gq().w(0,q.ga9())
r=q.b
q.b=a
a.gq().j(0,q.ga9())
s=new D.v("camera",r,q.b)
s.b=!0
q.a6(s)}},
sbr:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gq().w(0,r.ga9())
s=r.c
r.c=b
b.gq().j(0,r.ga9())
q=new D.v("target",s,r.c)
q.b=!0
r.a6(q)}},
sa8:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gq().w(0,r.ga9())
s=r.d
r.d=a
if(a!=null)a.gq().j(0,r.ga9())
q=new D.v("technique",s,r.d)
q.b=!0
r.a6(q)}},
gq:function(){var s=this.y
return s==null?this.y=D.C():s},
ao:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a5.dK(a4.d)
s=a4.c
s.toString
r=a5.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.o(q)
m=C.d.ap(n*q)
n=o.b
if(typeof p!=="number")return H.o(p)
l=C.d.ap(n*p)
n=C.d.ap(o.c*q)
a5.c=n
o=C.d.ap(o.d*p)
a5.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
if(s.b){s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
k=16640}else k=256
r.clear(k)
s=a4.b
r=a5.c
o=a5.d
n=s.c
j=s.d
i=s.e
h=i-j
g=1/Math.tan(n*0.5)
f=V.az(-g/(r/o),0,0,0,0,g,0,0,0,0,i/h,-i*j/h,0,0,1,0)
r=s.a
if(r!=null){e=r.a
if(e!=null)f=e.m(0,f)}a5.cy.dJ(f)
r=$.kb
if(r==null){r=V.kd()
o=$.ks
if(o==null)o=$.ks=new V.q(0,1,0)
d=V.ku().D()
c=o.b_(d).D()
b=d.b_(c)
a=new V.q(r.a,r.b,r.c)
a0=c.M(0).a2(a)
a1=b.M(0).a2(a)
a2=d.M(0).a2(a)
r=V.az(c.a,b.a,d.a,a0,c.b,b.b,d.b,a1,c.c,b.c,d.c,a2,0,0,0,1)
$.kb=r
a3=r}else a3=r
s=s.b
if(s!=null){e=s.a
if(e!=null)a3=e.m(0,a3)}a5.db.dJ(a3)
s=a4.d
if(s!=null)s.ac(0,a5)
for(s=a4.e.a,s=new J.T(s,s.length);s.v();)s.d.ac(0,a5)
for(s=a4.e.a,s=new J.T(s,s.length);s.v();)s.d.ao(a5)
a4.b.toString
a5.cy.cf()
a5.db.cf()
a4.c.toString
a5.dH()},
$iaB:1}
M.aB.prototype={}
A.fA.prototype={}
A.fB.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h2:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
de:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.U.prototype={
ga0:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.U))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.h7.prototype={}
A.hn.prototype={
dY:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.bb("")
r=c5.fr
if(r){s.a=c4
q=c4}else q=""
p=c5.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c5.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c5.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.n4(c5,s)
A.n6(c5,s)
A.n5(c5,s)
A.n8(c5,s)
A.n9(c5,s)
A.n7(c5,s)
A.na(c5,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c5.ry
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
s.a=q}if(c5.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c5.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c5.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c5.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c0.dr(0,q.charCodeAt(0)==0?q:q,A.n3(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.R(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.R(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.R(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.R(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.R(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.R(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.R(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.R(0,"colorMat"))
c0.r1=[]
q=c5.bm
if(q>0){c0.k4=c0.y.R(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.m(P.j(c2+n+c3))
p.push(r.a(k))}}if(c5.a.a)c0.r2=t.r.a(c0.y.R(0,"emissionClr"))
if(c5.b.a)c0.x1=t.r.a(c0.y.R(0,"ambientClr"))
if(c5.c.a)c0.y2=t.r.a(c0.y.R(0,"diffuseClr"))
if(c5.d.a)c0.bn=t.r.a(c0.y.R(0,"invDiffuseClr"))
r=c5.e.a
if(!r)q=!1
else q=!0
if(q){c0.dh=t.n.a(c0.y.R(0,"shininess"))
if(r)c0.dg=t.r.a(c0.y.R(0,"specularClr"))}if(c5.db){c0.di=t.Q.a(c0.y.R(0,"envSampler"))
if(c5.r.a)c0.dj=t.r.a(c0.y.R(0,"reflectClr"))
r=c5.x.a
if(!r)q=!1
else q=!0
if(q){c0.dk=t.n.a(c0.y.R(0,"refraction"))
if(r)c0.dl=t.r.a(c0.y.R(0,"refractClr"))}}if(c5.y.a)c0.dm=t.n.a(c0.y.R(0,"alpha"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.c1=new H.t(t.J)
c0.c2=new H.t(t.t)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.n)(r),++j){i=r[j]
h=i.a
g="barLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.m(P.j(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.m(P.j(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.m(P.j(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.ai()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.m(P.j(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.m(P.j(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.m(P.j(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ed(k,d,c,a3,a2,a1))}c0.c2.l(0,h,f)
n=c0.c1
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.m(P.j(c2+e+c3))
n.l(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.c3=new H.t(t.J)
c0.c4=new H.t(t.L)
for(p=t.r,o=t.s,j=0;j<r.length;r.length===q||(0,H.n)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.ai()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.m(P.j(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.m(P.j(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.m(P.j(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.m(P.j(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.m(P.j(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.m(P.j(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.ee(a7,a6,a5,k,d,a8))}c0.c4.l(0,h,f)
n=c0.c3
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.m(P.j(c2+e+c3))
n.l(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.c5=new H.t(t.J)
c0.c6=new H.t(t.U)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.n)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.e(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.m(P.j(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.m(P.j(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.m(P.j(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.ai()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.m(P.j(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.m(P.j(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.m(P.j(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.m(P.j(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.m(P.j(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.m(P.j(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.m(P.j(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.eh(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.c6.l(0,h,f)
a4=c0.c5
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.m(P.j(c2+b0+c3))
a4.l(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.c7=new H.t(t.J)
c0.c8=new H.t(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.s,j=0;j<r.length;r.length===q||(0,H.n)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.e(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.m(P.j(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.m(P.j(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.m(P.j(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.m(P.j(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.ai()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.m(P.j(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.m(P.j(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.m(P.j(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.m(P.j(c2+a9+c3))
o.a(b5)
b6=b5
b7=b4
a6=a0
a7=a}else{b6=c1
b7=b6
a6=b7
a7=a6}a4=(h&2)!==0
if(a4){a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.m(P.j(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.m(P.j(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.m(P.j(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.m(P.j(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.m(P.j(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.m(P.j(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.m(P.j(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.m(P.j(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.ek(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.c8.l(0,h,f)
e=c0.c7
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.m(P.j(c2+a9+c3))
e.l(0,h,k)}}}},
fs:function(a,b){}}
A.fF.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.fP.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.hK.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.i_.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hq.prototype={
i:function(a){return this.b3}}
A.ed.prototype={}
A.ee.prototype={}
A.eh.prototype={}
A.ek.prototype={}
A.dT.prototype={
cA:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dr:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cM(b,35633)
p.f=p.cM(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.m(P.j("Failed to link shader: "+H.e(q)))}p.fu()
p.fw()},
ar:function(a){a.a.useProgram(this.r)
this.x.h2()},
cM:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.j("Error compiling shader '"+H.e(q)+"': "+H.e(s)))}return q},
fu:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fA(n,r.name,q))}p.x=new A.fB(o)},
fw:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fZ(r.type,r.size,r.name,q))}p.y=new A.im(o)},
aI:function(a,b,c){var s=this.a
if(a===1)return new A.ea(s,b,c)
else return A.jA(s,this.r,b,a,c)},
ei:function(a,b,c){var s=this.a
if(a===1)return new A.ei(s,b,c)
else return A.jA(s,this.r,b,a,c)},
ej:function(a,b,c){var s=this.a
if(a===1)return new A.ej(s,b,c)
else return A.jA(s,this.r,b,a,c)},
bf:function(a,b){return new P.eI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fZ:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aI(b,c,d)
case 5121:return s.aI(b,c,d)
case 5122:return s.aI(b,c,d)
case 5123:return s.aI(b,c,d)
case 5124:return s.aI(b,c,d)
case 5125:return s.aI(b,c,d)
case 5126:return new A.e9(s.a,c,d)
case 35664:return new A.ii(s.a,c,d)
case 35665:return new A.eb(s.a,c,d)
case 35666:return new A.ec(s.a,c,d)
case 35667:return new A.ij(s.a,c,d)
case 35668:return new A.ik(s.a,c,d)
case 35669:return new A.il(s.a,c,d)
case 35674:return new A.io(s.a,c,d)
case 35675:return new A.ef(s.a,c,d)
case 35676:return new A.eg(s.a,c,d)
case 35678:return s.ei(b,c,d)
case 35680:return s.ej(b,c,d)
case 35670:throw H.b(s.bf("BOOL",c))
case 35671:throw H.b(s.bf("BOOL_VEC2",c))
case 35672:throw H.b(s.bf("BOOL_VEC3",c))
case 35673:throw H.b(s.bf("BOOL_VEC4",c))
default:throw H.b(P.j("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.ig.prototype={}
A.im.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
R:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.j("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.H()},
H:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ea.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.il.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.e9.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.eb.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ec.prototype={
cp:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.io.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ef.prototype={
a4:function(a){var s=new Float32Array(H.cO(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.eg.prototype={
a4:function(a){var s=new Float32Array(H.cO(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.ei.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.ej.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iT.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ca(q.b,b).ca(q.d.ca(q.c,b),c)
a.sY(0,new V.H(p.a,p.b,p.c))
a.scl(p.D())
q=1-b
s=1-c
s=new V.ad(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.u(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.L()}}}
F.iZ.prototype={
$1:function(a){return 1}}
F.dc.prototype={
b0:function(){var s=this
if(!s.gb1()){C.a.w(s.a.a.d.b,s)
s.a.a.L()}s.bM()
s.bN()
s.fl()},
aX:function(a){this.a=a
a.d.b.push(this)},
aY:function(a){this.b=a
a.d.c.push(this)},
cX:function(a){this.c=a
a.d.d.push(this)},
bM:function(){var s=this.a
if(s!=null){C.a.w(s.d.b,this)
this.a=null}},
bN:function(){var s=this.b
if(s!=null){C.a.w(s.d.c,this)
this.b=null}},
fl:function(){var s=this.c
if(s!=null){C.a.w(s.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
eb:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.bK()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.dv())return p
return q.D()},
ee:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a5(0,n)
q=new V.q(o.a,o.b,o.c).D()
o=r.a5(0,n)
return q.b_(new V.q(o.a,o.b,o.c).D()).D()},
bX:function(){var s,r=this
if(r.d!=null)return!0
s=r.eb()
if(s==null){s=r.ee()
if(s==null)return!1}r.d=s
r.a.a.L()
return!0},
ea:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.bK()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.dv())return p
return q.D()},
ed:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.y().toString
if(Math.abs(p-0)<1e-9){j=b.a5(0,e)
o=new V.q(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.M(0)}else{n=(j-s.b)/p
j=b.a5(0,e)
j=new V.H(j.a*n,j.b*n,j.c*n).u(0,e).a5(0,h)
o=new V.q(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.M(0)}j=l.d
if(j!=null){m=j.D()
o=m.b_(o).D().b_(m).D()}return o},
bW:function(){var s,r=this
if(r.e!=null)return!0
s=r.ea()
if(s==null){s=r.ed()
if(s==null)return!1}r.e=s
r.a.a.L()
return!0},
aH:function(a,b){var s=b.a
if(s==null)throw H.b(P.j("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.b(P.j("May not replace a face's vertex with a vertex attached to a different shape."))},
gfV:function(a){var s=this
if(J.u(s.a,s.b))return!0
if(J.u(s.b,s.c))return!0
if(J.u(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){var s,r,q=this
if(q.gb1())return a+"disposed"
s=a+C.b.ag(J.a4(q.a.e),0)+", "+C.b.ag(J.a4(q.b.e),0)+", "+C.b.ag(J.a4(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
H:function(){return this.B("")}}
F.h0.prototype={}
F.hZ.prototype={
aP:function(a,b,c){var s,r=b.a
r.a.a.n()
r=r.e
s=c.a
s.a.a.n()
if(r==s.e){r=b.b
r.a.a.n()
r=r.e
s=c.b
s.a.a.n()
if(r==s.e){r=b.c
r.a.a.n()
r=r.e
s=c.c
s.a.a.n()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.n()
r=r.e
s=c.b
s.a.a.n()
if(r==s.e){r=b.b
r.a.a.n()
r=r.e
s=c.c
s.a.a.n()
if(r==s.e){r=b.c
r.a.a.n()
r=r.e
s=c.a
s.a.a.n()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.n()
r=r.e
s=c.c
s.a.a.n()
if(r==s.e){r=b.b
r.a.a.n()
r=r.e
s=c.a
s.a.a.n()
if(r==s.e){r=b.c
r.a.a.n()
r=r.e
s=c.b
s.a.a.n()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.dr.prototype={
b0:function(){var s=this
if(!s.gb1()){C.a.w(s.a.a.c.b,s)
s.a.a.L()}s.bM()
s.bN()},
aX:function(a){this.a=a
a.c.b.push(this)},
aY:function(a){this.b=a
a.c.c.push(this)},
bM:function(){var s=this.a
if(s!=null){C.a.w(s.c.b,this)
this.a=null}},
bN:function(){var s=this.b
if(s!=null){C.a.w(s.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
aH:function(a,b){var s=b.a
if(s==null)throw H.b(P.j("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.b(P.j("May not replace a line's vertex with a vertex attached to a different shape."))},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){if(this.gb1())return a+"disposed"
return a+C.b.ag(J.a4(this.a.e),0)+", "+C.b.ag(J.a4(this.b.e),0)},
H:function(){return this.B("")}}
F.hi.prototype={}
F.ie.prototype={
aP:function(a,b,c){var s,r=b.a
r.a.a.n()
r=r.e
s=c.a
s.a.a.n()
if(r==s.e){r=b.b
r.a.a.n()
r=r.e
s=c.b
s.a.a.n()
return r==s.e}else{r=b.a
r.a.a.n()
r=r.e
s=c.b
s.a.a.n()
if(r==s.e){r=b.b
r.a.a.n()
r=r.e
s=c.a
s.a.a.n()
return r==s.e}else return!1}}}
F.hJ.prototype={
ft:function(a){this.a=a
a.b.b.push(this)},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.ag(J.a4(s.e),0)},
H:function(){return this.B("")}}
F.ag.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.C():s},
aC:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.n()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.n)(e),++q){p=e[q]
f.a.j(0,p.bZ())}f.a.n()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.n)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.n()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.j(0,l)
F.lO(l)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.n)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.n()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.j(0,j)
n.a.j(0,i)
F.js(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.n)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.n()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.n()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.j(0,j)
m.a.j(0,i)
m.a.j(0,g)
F.c6(j,i,g)}e=f.e
if(e!=null)e.at(0)},
as:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.as()||!1
if(!r.a.as())s=!1
q=r.e
if(q!=null)q.at(0)
return s},
aM:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aM()||!1
if(!r.a.aM())s=!1
q=r.e
if(q!=null)q.at(0)
return s},
bi:function(){var s=this.e
if(s!=null)++s.d
this.a.bi()
s=this.e
if(s!=null)s.at(0)
return!0},
h3:function(a,b){var s,r,q,p=this.a.c.length
for(s=0;s<p;++s){r=this.a.c
if(s>=r.length)return H.d(r,s)
q=r[s]
if(b.aP(0,a,q))return q}return null},
fn:function(a,b){var s,r,q,p,o,n
this.a.j(0,a)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.n)(b),++r){q=b[r]
for(;p=q.d,p.b.length+p.c.length+p.d.length>0;){p=p.h(0,0)
o=p.a
if(o==null||p.b==null||p.c==null)H.m(P.j("May not replace a face's vertex when the point has been disposed."))
if(J.u(o,q)){p.aH(q,a)
o=p.a
if(o!=null){C.a.w(o.d.b,p)
p.a=null}p.a=a
a.d.b.push(p)
n=1}else n=0
if(J.u(p.b,q)){p.aH(q,a)
o=p.b
if(o!=null){C.a.w(o.d.c,p)
p.b=null}p.b=a
a.d.c.push(p);++n}if(J.u(p.c,q)){p.aH(q,a)
o=p.c
if(o!=null){C.a.w(o.d.d,p)
p.c=null}p.c=a
a.d.d.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.A(null)}}for(;p=q.c,p.b.length+p.c.length>0;){p=p.h(0,0)
o=p.a
if(o==null||p.b==null)H.m(P.j("May not replace a line's vertex when the point has been disposed."))
if(J.u(o,q)){p.aH(q,a)
o=p.a
if(o!=null){C.a.w(o.c.b,p)
p.a=null}p.a=a
a.c.b.push(p)
n=1}else n=0
if(J.u(p.b,q)){p.aH(q,a)
o=p.b
if(o!=null){C.a.w(o.c.c,p)
p.b=null}p.b=a
a.c.c.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.A(null)}}for(;p=q.b.b,p.length>0;){p=p[0]
o=p.a
if(o==null)H.m(P.j("May not replace a point's vertex when the point has been disposed."))
if(J.u(o,q)){if(a.a==null)H.m(P.j("May not replace a point's vertex with a vertex which is not attached to a shape."))
o=p.a
if(o!=null){C.a.w(o.b.b,p)
p.a=null}p.a=a
a.b.b.push(p)
n=1}else n=0
if(n>0){p=p.a.a.e
if(p!=null)p.A(null)}}this.a.w(0,q)}},
ha:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
s=m.a.c.slice(0)
for(;s.length!==0;){r=C.a.gh5(s)
C.a.cg(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.aP(0,r,o)){q.push(o)
C.a.cg(s,p)}}if(q.length>1){n=b.aC(q)
m.fn(n,q)
s.push(n)}}}m.a.n()
m.c.ci()
m.d.ci()
m.b.ht()
m.c.cj(new F.ie())
m.d.cj(new F.hZ())
l=m.e
if(l!=null)l.at(0)},
d8:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.ap().a)!==0?1:0
if((s&$.ao().a)!==0)++r
if((s&$.an().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.cW().a)!==0)++r
if((s&$.bT().a)!==0)++r
if((s&$.aX().a)!==0)++r
q=a5.gct(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fR(l)
j=k.gct(k)
n[l]=new Z.fH(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.d(h,i)
g=h[i].h9(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.d(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cO(o)),35044)
s.bindBuffer(a2,null)
b=new Z.bp(new Z.es(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.n()
a.push(h.e)}a0=Z.jB(s,34963,a)
b.b.push(new Z.c9(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.n()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.n()
a.push(h.e)}a0=Z.jB(s,34963,a)
b.b.push(new Z.c9(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.n()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.n()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].c
h.a.a.n()
a.push(h.e)}a0=Z.jB(s,34963,a)
b.b.push(new Z.c9(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.B(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.B(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.B(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.B(r))}return C.a.t(q,"\n")},
L:function(){var s=this.e
if(s!=null)s.A(null)}}
F.hT.prototype={
d0:function(a,b,c,d){var s,r=this.a
r.a.j(0,b)
r.a.j(0,c)
r.a.j(0,d)
s=new F.dc()
r=b.a
if(r==null)H.m(P.j(u.p))
if(r!=c.a||r!=d.a)H.m(P.j(u.R))
s.aX(b)
s.aY(c)
s.cX(d)
s.a.a.d.b.push(s)
s.a.a.L()
return s},
fN:function(a){var s,r,q,p,o,n=[],m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.j(0,s)
r.a.j(0,p)
r.a.j(0,o)
n.push(F.c6(s,p,o))}}return n},
fO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.j(0,k)
s.a.j(0,j)
s.a.j(0,h)
f.push(F.c6(k,j,h))
s.a.j(0,k)
s.a.j(0,h)
s.a.j(0,g)
f.push(F.c6(k,h,g))}else{l.j(0,j)
s.a.j(0,h)
s.a.j(0,g)
f.push(F.c6(j,h,g))
s.a.j(0,j)
s.a.j(0,g)
s.a.j(0,k)
f.push(F.c6(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
cj:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.aP(0,n,l)){n.b0()
break}}}}},
ci:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.gfV(q)
if(r)q.b0()}},
as:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bX())q=!1
return q},
aM:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bW())q=!1
return q},
i:function(a){return this.H()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(a))
return C.a.t(p,"\n")},
H:function(){return this.B("")}}
F.hU.prototype={
bT:function(a,b,c){var s,r=this.a
r.a.j(0,b)
r.a.j(0,c)
r=new F.dr()
if(b==null)H.m(P.j(u.e))
if(c==null)H.m(P.j(u.k))
s=b.a
if(s==null)H.m(P.j(u.E))
if(s!=c.a)H.m(P.j(u.T))
r.aX(b)
r.aY(c)
r.a.a.c.b.push(r)
r.a.a.L()
return r},
d1:function(a){var s,r,q,p,o=[],n=a.length
if(n>0){for(s=this.a,r=1;r<n;++r){q=r-1
p=a.length
if(q>=p)return H.d(a,q)
q=a[q]
if(r>=p)return H.d(a,r)
p=a[r]
s.a.j(0,q)
s.a.j(0,p)
o.push(F.js(q,p))}s=n-1
q=a.length
if(s>=q)return H.d(a,s)
s=a[s]
if(0>=q)return H.d(a,0)
o.push(this.bT(0,s,a[0]))}return o},
fP:function(a){var s,r,q,p,o=[]
for(s=this.a,r=1;r<64;r+=2){q=a[r-1]
p=a[r]
s.a.j(0,q)
s.a.j(0,p)
o.push(F.js(q,p))}return o},
gk:function(a){return this.b.length},
cj:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.aP(0,n,l)){n.b0()
break}}}}},
ci:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.u(q.a,q.b)
if(r)q.b0()}},
i:function(a){return this.H()},
B:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].B(a+(""+s+". ")))}return C.a.t(q,"\n")},
H:function(){return this.B("")}}
F.hV.prototype={
gk:function(a){return this.b.length},
ht:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.a.w(q.b.b,r)
q=r.a.a.e
if(q!=null)q.A(null)
q=r.a
if(q!=null){C.a.w(q.b.b,r)
r.a=null}}}},
i:function(a){return this.H()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(a))
return C.a.t(p,"\n")},
H:function(){return this.B("")}}
F.is.prototype={
c_:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.be(s.cx,p,m,r,q,o,n,a,l)},
bZ:function(){return this.c_(null)},
sY:function(a,b){var s
if(!J.u(this.f,b)){this.f=b
s=this.a
if(s!=null)s.L()}},
sdw:function(a){var s
a=a==null?null:a.D()
if(!J.u(this.r,a)){this.r=a
s=this.a
if(s!=null)s.L()}},
sbh:function(a){var s
a=a==null?null:a.D()
if(!J.u(this.x,a)){this.x=a
s=this.a
if(s!=null)s.L()}},
sck:function(a){var s
if(!J.u(this.y,a)){this.y=a
s=this.a
if(s!=null)s.L()}},
scl:function(a){var s
if(!J.u(this.z,a)){this.z=a
s=this.a
if(s!=null)s.L()}},
sU:function(a,b){var s
if(!J.u(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.L()}},
sdP:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.L()}},
h9:function(a){var s,r=this
if(a.p(0,$.ap())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.ao())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.an())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.p(0,$.bk())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.p(0,$.bl())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.bj())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.p(0,$.cW())){s=r.Q
if(s==null)return[1,1,1,1]
else return s.cm(0)}else if(a.p(0,$.bT()))return[r.ch]
else if(a.p(0,$.aX())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bX:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.bK()
r.d.C(0,new F.iD(q))
r.r=q.a.D()
q=r.a
if(q!=null){q.L()
q=r.a.e
if(q!=null)q.at(0)}return!0},
bW:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.bK()
r.d.C(0,new F.iC(q))
r.x=q.a.D()
q=r.a
if(q!=null){q.L()
q=r.a.e
if(q!=null)q.at(0)}return!0},
dn:function(a){var s,r,q,p=this.c.b.length
for(s=0;s<p;++s){r=this.c.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.b
r.a.a.n()
r=r.e
a.a.a.n()
if(r==a.e)return q}return null},
h6:function(a){var s=this.dn(a)
if(s!=null)return s
return a.dn(this)},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.ag(J.a4(q.e),0))
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
o.push(V.z(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.t(o,", ")
return a+"{"+r+"}"},
H:function(){return this.B("")}}
F.iD.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.iC.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.it.prototype={
n:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
j:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.j("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.L()
return!0},
fQ:function(a,b,c,d,e,f,g){var s=F.be(a,null,b,c,d,e,f,g,0)
this.j(0,s)
return s},
aL:function(a,b,c,d,e,f){return this.fQ(a,b,c,null,d,e,f)},
W:function(a,b,c){var s=null,r=F.be(s,s,s,new V.H(a,b,c),s,s,s,s,0)
this.j(0,r)
return r},
gk:function(a){return this.c.length},
w:function(a,b){var s,r
if(b==null)return!1
s=this.a
if(b.a!==s)return!1
if(b.b.b.length===0){r=b.c
if(r.b.length===0&&r.c.length===0){r=b.d
r=r.b.length===0&&r.c.length===0&&r.d.length===0}else r=!1}else r=!1
if(!r)throw H.b(P.j("May not remove a vertex without first making it empty."))
b.a=null
C.a.w(this.c,b)
s.L()
return this.b=!0},
as:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bX()
return!0},
aM:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bW()
return!0},
bi:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.z==null){o=p.r.D()
if(!J.u(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}}return!0},
i:function(a){return this.H()},
B:function(a){var s,r,q,p
this.n()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p)s.push(r[p].B(a))
return C.a.t(s,"\n")},
H:function(){return this.B("")}}
F.iu.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
C.a.C(s.b,b)
C.a.C(s.c,new F.iv(s,b))
C.a.C(s.d,new F.iw(s,b))},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
return C.a.t(p,"\n")}}
F.iv.prototype={
$1:function(a){if(!J.u(a.a,this.a))this.b.$1(a)}}
F.iw.prototype={
$1:function(a){var s=this.a
if(!J.u(a.a,s)&&!J.u(a.b,s))this.b.$1(a)}}
F.iy.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
return C.a.t(p,"\n")}}
F.iz.prototype={}
F.eq.prototype={
aP:function(a,b,c){return J.u(b.f,c.f)}}
F.iA.prototype={}
F.ix.prototype={
aC:function(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null
for(s=a7.length,r=a6,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a7[f]
d=e.f
if(d!=null){m=m==null?d:new V.H(m.a+d.a,m.b+d.b,m.c+d.c);++l}c=e.r
if(c!=null)n=n==null?c:new V.q(n.a+c.a,n.b+c.b,n.c+c.c)
b=e.x
if(b!=null)o=o==null?b:new V.q(o.a+b.a,o.b+b.b,o.c+b.c)
a=e.y
if(a!=null){q=q==null?a:new V.N(q.a+a.a,q.b+a.b);++j}a0=e.z
if(a0!=null){r=r==null?a0:new V.q(r.a+a0.a,r.b+a0.b,r.c+a0.c);++i}a1=e.Q
if(a1!=null){a2=a1.a
a3=a1.b
a4=a1.c
a1=a1.d
if(p==null){a1=[a2,a3,a4,a1]
p=new V.aQ(a1[0],a1[1],a1[2],a1[3])}else{a1=[a2,a3,a4,a1]
a2=a1[0]
a3=a1[1]
a4=a1[2]
a1=a1[3]
p=new V.aQ(p.a+a2,p.b+a3,p.c+a4,p.d+a1)}++k}a1=e.ch
if(typeof a1!=="number")return H.o(a1)
g+=a1;++h}a5=F.be(a6,a6,a6,a6,a6,a6,a6,a6,0)
if(l<=0||m==null)a5.sY(0,a6)
else a5.sY(0,m.G(0,l))
if(n==null)a5.sdw(a6)
else a5.sdw(n.D())
if(o==null)a5.sbh(a6)
else a5.sbh(o.D())
if(j<=0||q==null)a5.sck(a6)
else a5.sck(q.G(0,j))
if(i<=0||r==null)a5.scl(a6)
else a5.scl(r.G(0,i))
if(k<=0||p==null)a5.sU(0,a6)
else{s=p.G(0,k)
s=[s.a,s.b,s.c,s.d]
a1=s[0]
a2=s[1]
a3=s[2]
s=s[3]
if(a1<0)a1=0
else if(a1>1)a1=1
if(a2<0)a2=0
else if(a2>1)a2=1
if(a3<0)a3=0
else if(a3>1)a3=1
if(s<0)s=0
else if(s>1)s=1
a5.sU(0,new V.I(a1,a2,a3,s))}if(h<=0)a5.sdP(0,0)
else a5.sdP(0,g/h)
return a5}}
F.iB.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
return C.a.t(p,"\n")}}
O.dj.prototype={
gq:function(){var s=this.rx
return s==null?this.rx=D.C():s},
X:function(a){var s=this.rx
if(s!=null)s.A(a)},
scr:function(a){var s
if(!this.Q){this.Q=!0
s=new D.v("showFilled",!1,!0)
s.b=!0
this.X(s)}},
scs:function(a){var s
if(!this.ch){this.ch=!0
s=new D.v("showWireFrame",!1,!0)
s.b=!0
this.X(s)}},
sdc:function(a){var s,r,q=this
if(!q.c.p(0,a)){s=q.c
q.c=a
r=new D.v("diffuse1",s,a)
r.b=!0
q.X(r)}},
sd3:function(a){var s,r,q=this
if(!q.d.p(0,a)){s=q.d
q.d=a
r=new D.v("ambient1",s,a)
r.b=!0
q.X(r)}},
ac:function(a,b){},
dL:function(a,b){var s,r,q,p,o,n,m=this,l="Inspection",k=2929
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.h7(r,l)
s.cA(r,l)
s.dr(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
s.z=s.x.h(0,"posAttr")
s.Q=s.x.h(0,"normAttr")
s.ch=s.x.h(0,"clrAttr")
s.cx=s.x.h(0,"binmAttr")
s.cy=t.r.a(s.y.h(0,"lightVec"))
r=t.y
s.db=r.a(s.y.h(0,"ambientClr"))
s.dx=r.a(s.y.h(0,"diffuseClr"))
s.dy=t.n.a(s.y.h(0,"weightScalar"))
r=t.q
s.fr=r.a(s.y.h(0,"viewMat"))
s.fx=r.a(s.y.h(0,"viewObjMatrix"))
s.fy=r.a(s.y.h(0,"projViewObjMatrix"))
a.d2(s)}m.a=s}if(b.e==null){b.d.as()
b.d.aM()
b.d.bi()
r=new Z.d3()
r.a=new H.t(t.f)
b.e=r}r=m.a
r.ar(a)
q=m.r2
p=r.dy
p.a.uniform1f(p.d,q)
q=m.b
p=r.cy
p.toString
o=q.a
n=q.b
q=q.c
p.a.uniform3f(p.d,o,n,q)
q=a.db
q=q.gK(q)
n=r.fr
n.toString
n.a4(q.a_(0,!0))
q=a.gdO()
n=r.fx
n.toString
n.a4(q.a_(0,!0))
q=a.gdI()
r=r.fy
r.toString
r.a4(q.a_(0,!0))
r=b.e
if(r instanceof Z.d3){q=a.a
q.blendFunc(1,1)
if(b.c==null){q.disable(k)
q.enable(3042)
q.blendFunc(1,1)
q.enable(k)
q.blendFunc(770,771)}else{q.enable(k)
q.enable(3042)
q.blendFunc(770,771)
if(m.Q)m.cT(a,r,b.c,"shapeFill",m.gfz(),m.d,m.c)
q.disable(k)
q.blendFunc(1,1)
if(m.ch)m.cT(a,r,b.c,"wireFrame",m.gfJ(),m.f,m.e)
q.enable(k)
q.blendFunc(770,771)}}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.de()},
cT:function(a,b,c,d,e,f,g){var s,r=b.a.h(0,d)
if(r==null){r=this.ec(a,e.$1(c))
b.a.l(0,d,r)}s=this.a
s.db.cp(f)
s.dx.cp(g)
r.hj(a)},
ec:function(a,b){var s=this,r=$.ap(),q=$.ao(),p=b.d8(new Z.et(a.a),new Z.aR(r.a|q.a|$.an().a|$.bj().a))
p.ae($.ap()).e=s.a.z.c
p.ae($.ao()).e=s.a.Q.c
p.ae($.bj()).e=s.a.ch.c
p.ae($.an()).e=s.a.cx.c
return p},
fA:function(a){var s=F.al()
C.a.C(a.a.c,new O.h8(s,new V.I(1,1,1,1)))
C.a.C(a.d.b,new O.h9(s))
return s},
d_:function(a,b){var s,r={}
r.a=b
s=F.al()
r.a=new V.I(0,0.7,1,1)
C.a.C(a.a.c,new O.hb(r,s))
r=new O.ha(s)
C.a.C(a.c.b,new O.hc(s,r))
C.a.C(a.d.b,new O.hd(s,r))
return s},
fK:function(a){return this.d_(a,null)}}
O.h8.prototype={
$1:function(a){var s=this.a.a,r=a.bZ()
r.sU(0,this.b)
r.sbh(V.bK())
s.j(0,r)}}
O.h9.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.n()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.d(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.n()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.d(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.n()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.d(o,n)
q=o[n]
p.d.d0(0,s,r,q)}}
O.hb.prototype={
$1:function(a){var s=this.b.a,r=a.bZ()
r.sU(0,this.a.a)
r.sbh(V.bK())
s.j(0,r)}}
O.ha.prototype={
$2:function(a,b){if(a.h6(b)==null)this.a.c.bT(0,a,b)}}
O.hc.prototype={
$1:function(a){var s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.d(q,p)
s=q[p]
r=r.a
p=a.b
p.a.a.n()
p=p.e
r=r.c
if(p>>>0!==p||p>=r.length)return H.d(r,p)
this.b.$2(s,r[p])}}
O.hd.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.n()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.d(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.n()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.d(n,o)
r=n[o]
p=p.a
o=a.c
o.a.a.n()
o=o.e
p=p.c
if(o>>>0!==o||o>=p.length)return H.d(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)}}
O.dv.prototype={
gq:function(){var s=this.fr
return s==null?this.fr=D.C():s},
X:function(a){var s=this.fr
if(s!=null)s.A(a)},
e4:function(){return this.X(null)},
cU:function(a){this.a=null
this.X(a)},
fq:function(){return this.cU(null)},
ex:function(a,b){var s=new D.au()
s.b=!0
this.X(s)},
ez:function(a,b){var s=new D.av()
s.b=!0
this.X(s)},
cK:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.t(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.gab()
n=d.h(0,p.gab())
d.l(0,o,n==null?1:n)}m=[]
d.C(0,new O.hu(f,m))
C.a.aT(m,new O.hv())
l=new H.t(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.gab()
n=l.h(0,p.gab())
l.l(0,o,n==null?1:n)}k=[]
l.C(0,new O.hw(f,k))
C.a.aT(k,new O.hx())
j=new H.t(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.gab()
n=j.h(0,p.gab())
j.l(0,o,n==null?1:n)}i=[]
j.C(0,new O.hy(f,i))
C.a.aT(i,new O.hz())
h=new H.t(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.n)(e),++q){p=e[q]
r=p.gab()
o=h.h(0,p.gab())
h.l(0,r,o==null?1:o)}g=[]
h.C(0,new O.hA(f,g))
C.a.aT(g,new O.hB())
e=C.c.aa(f.e.a.length+3,4)
f.dy.toString
return A.lN(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
e9:function(a,b){},
ac:function(a,b){var s
for(s=this.dx.a,s=new J.T(s,s.length);s.v();)C.f.ac(s.d,b)},
dL:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cK()
s=b4.fr.h(0,b3.b3)
if(s==null){s=A.lM(b3,b4.a)
b4.d2(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bn
b3=b5.e
if(!(b3 instanceof Z.bp))b3=b5.e=null
if(b3==null||!b3.d.p(0,q)){b3=r.k4
if(b3)b5.d.as()
p=r.r1
if(p)b5.d.aM()
o=r.rx
if(o)b5.d.bi()
n=b5.d.d8(new Z.et(b4.a),q)
n.ae($.ap()).e=b2.a.Q.c
if(b3)n.ae($.ao()).e=b2.a.cx.c
if(p)n.ae($.an()).e=b2.a.ch.c
if(r.r2)n.ae($.bk()).e=b2.a.cy.c
if(o)n.ae($.bl()).e=b2.a.db.c
if(r.ry)n.ae($.aX()).e=b2.a.dx.c
b5.e=n}m=[]
b2.a.ar(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gK(p)
b3=b3.dy
b3.toString
b3.a4(p.a_(0,!0))}if(r.fx){b3=b2.a
p=b4.gdO()
b3=b3.fr
b3.toString
b3.a4(p.a_(0,!0))}b3=b2.a
p=b4.gdI()
b3=b3.fy
b3.toString
b3.a4(p.a_(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gK(p)
b3=b3.fx
b3.toString
b3.a4(p.a_(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a4(C.f.a_(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a4(C.f.a_(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a4(C.f.a_(p,!0))}if(r.bm>0){l=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,l)
for(k=0;k<l;++k){b3=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
b3=b3.r1
if(k>=b3.length)return H.d(b3,k)
b3=b3[k]
j=new Float32Array(H.cO(p.a_(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,j)}}if(r.a.a){b3=b2.a
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
b3=b3.bn
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dh
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.dg
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.z
if(b3.length>0){i=new H.t(t.a)
for(p=b2.dx.e,o=p.length,h=0;h<p.length;p.length===o||(0,H.n)(p),++h){g=p[h]
f=g.gab()
e=i.h(0,f)
if(e==null)e=0
i.l(0,f,e+1)
d=J.cX(b2.a.c2.h(0,f),e)
c=g.ghE()
b=$.aA
c=c.b9(b==null?$.aA=new V.H(0,0,0):b)
b=d.b
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.ghI()
b=$.aA
c=c.b9(b==null?$.aA=new V.H(0,0,0):b)
b=d.c
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gU(g)
b=d.d
b.a.uniform3f(b.d,c.a,c.b,c.c)
if(g.gdf()){c=g.gd4()
b=d.e
b.a.uniform1f(b.d,c)
c=g.gd5()
b=d.f
b.a.uniform1f(b.d,c)
c=g.gd6()
b=d.r
b.a.uniform1f(b.d,c)}}for(p=b3.length,h=0;h<b3.length;b3.length===p||(0,H.n)(b3),++h){o=b3[h].a
l=i.h(0,o)
if(l==null)l=0
o=b2.a.c1.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gK(p)
a0=new H.t(t.a)
for(p=b2.dx.f,o=p.length,h=0;h<p.length;p.length===o||(0,H.n)(p),++h){g=p[h]
f=g.gab()
e=a0.h(0,f)
if(e==null)e=0
a0.l(0,f,e+1)
d=J.cX(b2.a.c4.h(0,f),e)
c=g.gdd(g)
c=new V.q(C.d.m(a.a,c.gbj(c))+C.d.m(a.b,c.gbk(c))+C.d.m(a.c,c.gbl()),C.d.m(a.e,c.gbj(c))+C.d.m(a.f,c.gbk(c))+C.d.m(a.r,c.gbl()),C.d.m(a.y,c.gbj(c))+C.d.m(a.z,c.gbk(c))+C.d.m(a.Q,c.gbl())).D()
b=d.e
a1=c.a
a2=c.b
c=c.c
b.a.uniform3f(b.d,a1,a2,c)
c=g.gU(g)
a2=d.f
a2.a.uniform3f(a2.d,c.a,c.b,c.c)
g.gah()
c=g.gdd(g)
b=d.d
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gaE()
b=d.b
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gbq(g)
b=d.c
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gah()
if(!C.a.N(m,c)){c.sal(0,m.length)
m.push(c)}c=g.gah()
b=c.gam(c)
if(b){b=d.r
b.toString
a1=c.gam(c)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,c.gal(c))}}for(p=b3.length,h=0;h<b3.length;b3.length===p||(0,H.n)(b3),++h){o=b3[h].a
l=a0.h(0,o)
if(l==null)l=0
o=b2.a.c3.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gK(p)
a3=new H.t(t.a)
for(p=b2.dx.r,o=p.length,h=0;h<p.length;p.length===o||(0,H.n)(p),++h){g=p[h]
f=g.gab()
e=a3.h(0,f)
if(e==null)e=0
a3.l(0,f,e+1)
d=J.cX(b2.a.c6.h(0,f),e)
a4=a.m(0,g.gK(g))
c=g.gK(g)
b=$.aA
c=c.b9(b==null?$.aA=new V.H(0,0,0):b)
b=d.b
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=$.aA
c=a4.b9(c==null?$.aA=new V.H(0,0,0):c)
b=d.c
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gU(g)
b=d.e
b.a.uniform3f(b.d,c.a,c.b,c.c)
g.gah()
c=a4.dt(0)
b=c.a
a1=c.b
a2=c.c
a5=c.e
a6=c.f
a7=c.r
a8=c.y
a9=c.z
c=c.Q
b0=d.d
b0.toString
j=new Float32Array(H.cO(new V.dx(b,a1,a2,a5,a6,a7,a8,a9,c).a_(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,j)
g.gah()
c=g.gah()
if(!C.a.N(m,c)){c.sal(0,m.length)
m.push(c)}c=g.gah()
b=c.gam(c)
if(b){b=d.f
b.toString
a1=c.gam(c)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,c.gal(c))}g.gaS()
c=g.gdT()
b=d.x
b.toString
a1=c.gbj(c)
a2=c.gbk(c)
a5=c.gbl()
c=c.gh1()
b.a.uniform4f(b.d,a1,a2,a5,c)
c=g.gaS()
if(!C.a.N(m,c)){c.sal(0,m.length)
m.push(c)}c=g.gaS()
b=c.gam(c)
if(b){b=d.r
b.toString
a1=c.gam(c)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,c.gal(c))}if(g.gdf()){c=g.gd4()
b=d.y
b.a.uniform1f(b.d,c)
c=g.gd5()
b=d.z
b.a.uniform1f(b.d,c)
c=g.gd6()
b=d.Q
b.a.uniform1f(b.d,c)}}for(p=b3.length,h=0;h<b3.length;b3.length===p||(0,H.n)(b3),++h){o=b3[h].a
l=a3.h(0,o)
if(l==null)l=0
o=b2.a.c5.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gK(p)
b1=new H.t(t.a)
for(p=b2.dx.x,o=p.length,h=0;h<p.length;p.length===o||(0,H.n)(p),++h){g=p[h]
f=g.gab()
e=b1.h(0,f)
if(e==null)e=0
b1.l(0,f,e+1)
d=J.cX(b2.a.c8.h(0,f),e)
c=g.ghr(g)
b=d.b
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gdd(g).D()
b=d.c
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=a.b9(g.ghr(g))
b=d.d
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gU(g)
b=d.e
b.a.uniform3f(b.d,c.a,c.b,c.c)
g.gah()
c=g.gaE()
b=d.f
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.gbq(g)
b=d.r
b.a.uniform3f(b.d,c.a,c.b,c.c)
c=g.ghY()
b=d.x
b.a.uniform1f(b.d,c)
c=g.ghZ()
b=d.y
b.a.uniform1f(b.d,c)
g.gah()
c=g.gah()
if(!C.a.N(m,c)){c.sal(0,m.length)
m.push(c)}c=g.gah()
b=c.gam(c)
if(b){b=d.dx
b.toString
a1=c.gam(c)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,c.gal(c))}g.gaS()
c=g.gdT()
b=d.z
b.toString
a1=c.gbj(c)
a2=c.gbk(c)
a5=c.gbl()
c=c.gh1()
b.a.uniform4f(b.d,a1,a2,a5,c)
c=g.gaS()
if(!C.a.N(m,c)){c.sal(0,m.length)
m.push(c)}c=g.gaS()
b=c.gam(c)
if(b){b=d.dy
b.toString
a1=c.gam(c)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,c.gal(c))}if(g.ghH()){c=g.ghG()
b=d.Q
b.a.uniform1f(b.d,c)
c=g.ghF()
b=d.ch
b.a.uniform1f(b.d,c)}if(g.gdf()){c=g.gd4()
b=d.cx
b.a.uniform1f(b.d,c)
c=g.gd5()
b=d.cy
b.a.uniform1f(b.d,c)
c=g.gd6()
b=d.db
b.a.uniform1f(b.d,c)}}for(p=b3.length,h=0;h<b3.length;b3.length===p||(0,H.n)(b3),++h){o=b3[h].a
l=b1.h(0,o)
if(l==null)l=0
o=b2.a.c7.h(0,o)
o.a.uniform1i(o.d,l)}}}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gK(p).dt(0)}b3=b3.id
b3.toString
b3.a4(p.a_(0,!0))}if(r.db){b2.e9(m,b2.ch)
b3=b2.a
p=b2.ch
b3.fs(b3.di,p)
if(r.r.a){b3=b2.a
p=b2.cx.f
b3=b3.dj
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.dk
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.dl
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=r.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.dm
b3.a.uniform1f(b3.d,o)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].ar(b4)
b3=t.u.a(b5.e)
b3.ar(b4)
b3.ao(b4)
b3.cn(b4)
if(p)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].cn(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.de()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cK().b3}}
O.hu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fF(a,C.c.aa(b+3,4)*4))}}
O.hv.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.hw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fP(a,C.c.aa(b+3,4)*4))}}
O.hx.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.hy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hK(a,C.c.aa(b+3,4)*4))}}
O.hz.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.hA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.i_(a,C.c.aa(b+3,4)*4))}}
O.hB.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.ho.prototype={
bO:function(a){var s=this,r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.v(s.b,r,a)
r.b=!0
s.a.X(r)}},
ax:function(){this.cw()
this.bO(1)},
sa0:function(a,b){var s=this
if(b<=0){s.bP(new A.U(!1,!1,!1))
s.bO(0)}else{s.bP(new A.U(!0,!1,!1))
s.bO(b>=1?1:b)}}}
O.dw.prototype={
ax:function(){},
bP:function(a){var s,r,q=this
if(!q.c.p(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ax()
s=q.a
s.a=null
s.X(null)}}}
O.hp.prototype={}
O.ay.prototype={
cW:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.v(q.b+".color",s,a)
r.b=!0
q.a.X(r)}},
ax:function(){this.cw()
this.cW(new V.O(1,1,1))},
sU:function(a,b){this.bP(new A.U(!0,!1,!1))
this.cW(b)}}
O.hr.prototype={}
O.hs.prototype={
ax:function(){var s,r=this
r.cz()
s=r.ch
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.v(r.b+".refraction",s,1)
s.b=!0
r.a.X(s)}}}
O.ht.prototype={
ax:function(){var s,r=this
r.cz()
s=r.ch
$.y().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
s=new D.v(r.b+".shininess",s,100)
s.b=!0
r.a.X(s)}}}
O.i5.prototype={}
X.jj.prototype={}
X.h4.prototype={
gq:function(){var s=this.x
return s==null?this.x=D.C():s}}
X.dK.prototype={
gq:function(){var s=this.f
return s==null?this.f=D.C():s},
au:function(a){var s=this.f
if(s!=null)s.A(a)},
e6:function(){return this.au(null)},
sT:function(a){var s,r,q=this
if(!J.u(q.b,a)){s=q.b
if(s!=null)s.gq().w(0,q.gbb())
r=q.b
q.b=a
if(a!=null)a.gq().j(0,q.gbb())
s=new D.v("mover",r,q.b)
s.b=!0
q.au(s)}},
saD:function(a){var s,r,q=this
if(!J.u(q.a,a)){s=q.a
if(s!=null)s.gq().w(0,q.gbb())
r=q.a
q.a=a
if(a!=null)a.gq().j(0,q.gbb())
s=new D.v("premover",r,q.a)
s.b=!0
q.au(s)}}}
X.i3.prototype={}
V.hW.prototype={
e0:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.Y(o,"scroll",new V.hY(m),!1)},
bU:function(a,b){var s,r,q,p,o
a=C.c.fU(a,0,4)
s=P.kI(C.p,b,C.h,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.lr()
o.href="#"+s
o.textContent=b
r.appendChild(o)
this.a.appendChild(r)},
aj:function(a){var s,r,q,p,o,n,m,l
this.fv()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.h8(a)
q.toString
p=new H.L(p)
p=new P.bN(q.dN(new H.bv(p,p.gk(p))).a())
for(;p.v();){q=p.gF(p)
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
if(H.l2(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kI(C.p,q,C.h,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+l
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
bV:function(a){var s=W.k0()
s.className="pageLargeCanvas"
s.id=a
this.a.appendChild(s)},
fv:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.i8()
s.a=new H.t(t.V)
s.b=new H.t(t.w)
s.c=P.k7(t.Y)
s.d=s.I(0,p)
r=s.I(0,p).t(0,o)
q=K.X(new H.L("*"))
r.a.push(q)
r.c=!0
r=s.I(0,o).t(0,o)
q=new K.aL()
q.a=[]
r.a.push(q)
r=K.X(new H.L("*"))
q.a.push(r)
r=s.I(0,o).t(0,"BoldEnd")
q=K.X(new H.L("*"))
r.a.push(q)
r.c=!0
r=s.I(0,p).t(0,n)
q=K.X(new H.L("_"))
r.a.push(q)
r.c=!0
r=s.I(0,n).t(0,n)
q=new K.aL()
q.a=[]
r.a.push(q)
r=K.X(new H.L("_"))
q.a.push(r)
r=s.I(0,n).t(0,m)
q=K.X(new H.L("_"))
r.a.push(q)
r.c=!0
r=s.I(0,p).t(0,l)
q=K.X(new H.L("`"))
r.a.push(q)
r.c=!0
r=s.I(0,l).t(0,l)
q=new K.aL()
q.a=[]
r.a.push(q)
r=K.X(new H.L("`"))
q.a.push(r)
r=s.I(0,l).t(0,"CodeEnd")
q=K.X(new H.L("`"))
r.a.push(q)
r.c=!0
r=s.I(0,p).t(0,k)
q=K.X(new H.L("["))
r.a.push(q)
r.c=!0
r=s.I(0,k).t(0,j)
q=K.X(new H.L("|"))
r.a.push(q)
q=s.I(0,k).t(0,i)
r=K.X(new H.L("]"))
q.a.push(r)
q.c=!0
q=s.I(0,k).t(0,k)
r=new K.aL()
r.a=[]
q.a.push(r)
q=K.X(new H.L("|]"))
r.a.push(q)
q=s.I(0,j).t(0,i)
r=K.X(new H.L("]"))
q.a.push(r)
q.c=!0
q=s.I(0,j).t(0,j)
r=new K.aL()
r.a=[]
q.a.push(r)
q=K.X(new H.L("|]"))
r.a.push(q)
s.I(0,p).t(0,h).a.push(new K.fy())
q=s.I(0,h).t(0,h)
r=new K.aL()
r.a=[]
q.a.push(r)
q=K.X(new H.L("*_`["))
r.a.push(q)
q=s.I(0,"BoldEnd")
q.d=q.a.b8(o)
q=s.I(0,m)
q.d=q.a.b8(n)
q=s.I(0,"CodeEnd")
q.d=q.a.b8(l)
q=s.I(0,i)
q.d=q.a.b8("Link")
q=s.I(0,h)
q.d=q.a.b8(h)
this.b=s}}
V.hY.prototype={
$1:function(a){P.kn(C.j,new V.hX(this.a))}}
V.hX.prototype={
$0:function(){var s=C.d.ap(document.documentElement.scrollTop),r=this.a.style,q=H.e(-0.01*s)+"px"
r.top=q}}
M.j7.prototype={
$1:function(a){this.a.b=!0}}
M.j8.prototype={
$1:function(a){this.a.b=!1}}
M.j9.prototype={
$1:function(a){var s,r,q,p,o,n,m=this
t._.a(a)
s=m.a
if(!s.b)return
r=s.a
q=a.c
q=a.z.V(a.d).m(0,2).G(0,q.gZ()).b
if(typeof q!=="number")return H.o(q)
p=s.a=r+q
if(p<-0.1)p=-0.1
else if(p>1.1)p=1.1
s.a=p
m.b.sK(0,V.V(0,1-2*p,0))
s=s.a
r=s<=0||s>=1
q=m.c
o=m.d
if(r)o.b=q.b=!1
else{n=Math.sin(s*3.141592653589793)
m.e.sK(0,V.by(n,n,n,1))
o.b=q.b=!0}}}
M.ja.prototype={
$1:function(a){this.a.b=!0}}
M.jb.prototype={
$1:function(a){this.a.b=!1}}
M.jc.prototype={
$1:function(a){var s,r,q,p,o,n,m=this
t._.a(a)
s=m.a
if(!s.b)return
r=s.a
q=a.c
q=a.z.V(a.d).m(0,2).G(0,q.gZ()).b
if(typeof q!=="number")return H.o(q)
p=s.a=r+q
if(p<-0.1)p=-0.1
else if(p>1.1)p=1.1
s.a=p
m.b.sK(0,V.V(0,1-2*p,0))
s=s.a
r=s<=0||s>=1
q=m.c
o=m.d
if(r)o.b=q.b=!1
else{n=Math.sin(s*3.141592653589793)
m.e.sK(0,V.by(n,n,n,1))
o.b=q.b=!0}}}
M.jd.prototype={
$1:function(a){this.a.b=!0}}
M.je.prototype={
$1:function(a){this.a.b=!1}}
M.jf.prototype={
$1:function(a){var s,r,q,p,o,n,m=this
t._.a(a)
s=m.a
if(!s.b)return
r=a.c
q=a.d
if(new V.N((q.a-r.a-r.c*0.5)*2,(q.b-r.b-r.d*0.5)*2).G(0,r.gZ()).a>0)return
p=s.a
r=a.z.V(q).m(0,2).G(0,r.gZ()).b
if(typeof r!=="number")return H.o(r)
o=s.a=p+r
if(o<-0.1)o=-0.1
else if(o>1.1)o=1.1
s.a=o
m.b.sK(0,V.V(0,1-2*o,0))
s=s.a
r=s<=0||s>=1
q=m.c
p=m.d
if(r)p.b=q.b=!1
else{n=Math.sin(s*3.141592653589793)
m.e.sK(0,V.by(n,n,n,1))
p.b=q.b=!0}a.b=!1}};(function aliases(){var s=J.a.prototype
s.dW=s.i
s=J.b2.prototype
s.dX=s.i
s=K.dh.prototype
s.dV=s.aO
s.cv=s.i
s=O.dw.prototype
s.cw=s.ax
s=O.ay.prototype
s.cz=s.ax})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mI","lH",22)
r(P,"nn","m9",7)
r(P,"no","ma",7)
r(P,"np","mb",7)
q(P,"kR","ni",8)
r(W,"oR","fU",23)
var k
p(k=E.bs.prototype,"gdD",0,0,null,["$1","$0"],["dE","hh"],0,0)
p(k,"gdF",0,0,null,["$1","$0"],["dG","hi"],0,0)
p(k,"gdB",0,0,null,["$1","$0"],["dC","hg"],0,0)
p(k,"gdz",0,0,null,["$1","$0"],["dA","hd"],0,0)
o(k,"ghb","hc",3)
o(k,"ghe","hf",3)
p(k=E.e4.prototype,"gcB",0,0,null,["$1","$0"],["cD","cC"],0,0)
n(k,"ghw","dM",8)
m(k=X.ep.prototype,"geM","eN",4)
m(k,"geA","eB",4)
m(k,"geG","eH",2)
m(k,"geQ","eR",9)
m(k,"geO","eP",9)
m(k,"geU","eV",2)
m(k,"geY","eZ",2)
m(k,"geK","eL",2)
m(k,"geW","eX",2)
m(k,"geI","eJ",2)
m(k,"gf_","f0",18)
m(k,"gf1","f2",4)
m(k,"gfh","fi",5)
m(k,"gfd","fe",5)
m(k,"gff","fg",5)
p(k=D.cd.prototype,"gcQ",0,0,null,["$1","$0"],["cR","eS"],0,0)
m(k,"gf3","f4",19)
o(k,"geu","ev",10)
o(k,"gf7","f8",10)
l(V.a2.prototype,"gk","b4",6)
l(V.q.prototype,"gk","b4",6)
l(V.aQ.prototype,"gk","b4",6)
p(k=U.bt.prototype,"gaJ",0,0,null,["$1","$0"],["J","a7"],0,0)
o(k,"ge1","e2",11)
o(k,"gf5","f6",11)
p(k=U.cr.prototype,"gaJ",0,0,null,["$1","$0"],["J","a7"],0,0)
m(k,"gbD","bE",1)
m(k,"gbF","bG",1)
m(k,"gbH","bI",1)
p(k=U.cs.prototype,"gaJ",0,0,null,["$1","$0"],["J","a7"],0,0)
m(k,"gbD","bE",1)
m(k,"gbF","bG",1)
m(k,"gbH","bI",1)
m(k,"gen","eo",1)
m(k,"gep","eq",1)
m(k,"gfH","fI",1)
m(k,"gfF","fG",1)
m(k,"gfD","fE",1)
m(U.ct.prototype,"ger","es",1)
p(k=M.bW.prototype,"ga9",0,0,null,["$1","$0"],["a6","bu"],0,0)
o(k,"gf9","fa",12)
o(k,"gfb","fc",12)
p(k=M.c3.prototype,"ga9",0,0,null,["$1","$0"],["a6","bu"],0,0)
o(k,"geC","eD",3)
o(k,"geE","eF",3)
m(k=O.dj.prototype,"gfz","fA",20)
p(k,"gfJ",0,1,null,["$2$color","$1"],["d_","fK"],21,0)
p(k=O.dv.prototype,"ge3",0,0,null,["$1","$0"],["X","e4"],0,0)
p(k,"gfp",0,0,null,["$1","$0"],["cU","fq"],0,0)
o(k,"gew","ex",13)
o(k,"gey","ez",13)
p(X.dK.prototype,"gbb",0,0,null,["$1","$0"],["au","e6"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.K,null)
q(P.K,[H.jq,J.a,J.T,P.cy,P.f,H.bv,P.dk,H.c7,H.en,H.ic,P.F,H.hI,H.f7,H.bq,P.ax,H.hj,H.ds,H.hf,H.af,H.eL,P.iP,P.bM,P.bN,P.ev,P.e_,P.e0,P.iS,P.cE,P.iL,P.cx,P.B,P.d5,P.iR,P.bf,P.as,P.R,P.c1,P.dJ,P.cp,P.eI,P.h3,P.aw,P.dt,P.ac,P.M,P.bb,W.fL,W.jn,W.jC,W.D,W.c8,P.f0,K.fy,K.dh,K.hS,L.dY,L.e5,L.e6,L.i8,O.br,O.ch,E.fG,E.bs,E.bo,E.bD,E.eF,E.hM,E.e4,Z.es,Z.et,Z.bp,Z.d3,Z.c9,Z.aR,D.fI,D.c5,D.S,X.d4,X.dp,X.hh,X.hl,X.ab,X.hH,X.i9,X.ep,D.b4,V.O,V.I,V.fX,V.dx,V.bx,V.N,V.H,V.ad,V.dQ,V.a2,V.q,V.aQ,U.cr,U.cs,U.ct,M.c3,M.aB,A.fA,A.fB,A.U,A.fF,A.fP,A.hK,A.i_,A.hq,A.ed,A.ee,A.eh,A.ek,A.ig,A.im,F.dc,F.h0,F.dr,F.hi,F.hJ,F.ag,F.hT,F.hU,F.hV,F.is,F.it,F.iu,F.iy,F.iz,F.iA,F.iB,O.i5,O.dw,O.hr,X.jj,X.i3,X.dK,V.hW])
q(J.a,[J.he,J.cc,J.b2,J.aa,J.b1,J.aJ,H.cl,W.c,W.fx,W.d2,W.ar,W.E,W.eA,W.a8,W.fO,W.fQ,W.eB,W.c0,W.eD,W.fR,W.h,W.eJ,W.b_,W.h6,W.eN,W.hk,W.hC,W.eR,W.eS,W.b6,W.eT,W.eV,W.b8,W.eZ,W.f1,W.b9,W.f2,W.ba,W.f8,W.aO,W.fc,W.i7,W.bc,W.fe,W.ia,W.ip,W.fk,W.fm,W.fo,W.fq,W.fs,P.bu,P.eP,P.bC,P.eX,P.hL,P.f9,P.bH,P.fg,P.fC,P.ew,P.f5])
q(J.b2,[J.dL,J.bI,J.aj])
r(J.dm,J.aa)
q(J.b1,[J.cb,J.dl])
r(P.ce,P.cy)
q(P.ce,[H.bJ,W.ey,W.ex,P.df])
r(H.L,H.bJ)
q(P.f,[H.i,H.b5,H.cu,P.ca])
r(H.c2,H.b5)
q(P.dk,[H.cg,H.eu])
q(P.F,[H.dF,H.dn,H.em,H.dR,H.eG,P.d0,P.dG,P.a7,P.eo,P.el,P.dZ,P.d7,P.d9])
q(H.bq,[H.i4,H.hg,H.j0,H.j1,H.j2,P.iF,P.iE,P.iG,P.iH,P.iQ,P.iX,P.iN,P.iO,P.hm,P.fS,P.fT,W.hE,W.hG,W.hR,W.i2,W.iI,P.iY,P.h1,P.h2,P.fE,E.hN,E.hO,E.hP,E.i6,D.fZ,D.h_,F.iT,F.iZ,F.iD,F.iC,F.iv,F.iw,O.h8,O.h9,O.hb,O.ha,O.hc,O.hd,O.hu,O.hv,O.hw,O.hx,O.hy,O.hz,O.hA,O.hB,V.hY,V.hX,M.j7,M.j8,M.j9,M.ja,M.jb,M.jc,M.jd,M.je,M.jf])
q(H.i4,[H.i0,H.bU])
r(P.du,P.ax)
r(H.t,P.du)
r(H.aK,H.i)
r(H.bB,H.cl)
q(H.bB,[H.cA,H.cC])
r(H.cB,H.cA)
r(H.b7,H.cB)
r(H.cD,H.cC)
r(H.ck,H.cD)
q(H.ck,[H.dz,H.dA,H.dB,H.dC,H.dD,H.cm,H.dE])
r(H.cK,H.eG)
r(P.cH,P.ca)
r(P.iM,P.iS)
r(P.cw,P.cE)
r(P.d8,P.e0)
r(P.fV,P.d5)
r(P.iq,P.fV)
r(P.ir,P.d8)
q(P.R,[P.a0,P.p])
q(P.a7,[P.bG,P.di])
q(W.c,[W.w,W.de,W.aN,W.cF,W.aP,W.am,W.cI,W.er,W.bL,P.d1,P.aI])
q(W.w,[W.P,W.ai])
q(W.P,[W.l,P.k])
q(W.l,[W.cZ,W.d_,W.aY,W.dg,W.dS])
r(W.fK,W.ar)
r(W.bZ,W.eA)
q(W.a8,[W.fM,W.fN])
r(W.eC,W.eB)
r(W.c_,W.eC)
r(W.eE,W.eD)
r(W.db,W.eE)
r(W.aZ,W.d2)
r(W.eK,W.eJ)
r(W.dd,W.eK)
r(W.eO,W.eN)
r(W.b0,W.eO)
r(W.aD,W.h)
q(W.aD,[W.b3,W.a5,W.bd])
r(W.hD,W.eR)
r(W.hF,W.eS)
r(W.eU,W.eT)
r(W.dy,W.eU)
r(W.eW,W.eV)
r(W.cn,W.eW)
r(W.f_,W.eZ)
r(W.dM,W.f_)
r(W.hQ,W.f1)
r(W.cG,W.cF)
r(W.dV,W.cG)
r(W.f3,W.f2)
r(W.dW,W.f3)
r(W.i1,W.f8)
r(W.fd,W.fc)
r(W.e2,W.fd)
r(W.cJ,W.cI)
r(W.e3,W.cJ)
r(W.ff,W.fe)
r(W.e7,W.ff)
r(W.aS,W.a5)
r(W.fl,W.fk)
r(W.ez,W.fl)
r(W.cv,W.c0)
r(W.fn,W.fm)
r(W.eM,W.fn)
r(W.fp,W.fo)
r(W.cz,W.fp)
r(W.fr,W.fq)
r(W.f4,W.fr)
r(W.ft,W.fs)
r(W.fb,W.ft)
r(W.eH,P.e_)
r(P.ae,P.f0)
r(P.eQ,P.eP)
r(P.dq,P.eQ)
r(P.eY,P.eX)
r(P.dH,P.eY)
r(P.fa,P.f9)
r(P.e1,P.fa)
r(P.fh,P.fg)
r(P.e8,P.fh)
r(P.fD,P.ew)
r(P.dI,P.aI)
r(P.f6,P.f5)
r(P.dX,P.f6)
q(K.dh,[K.aL,L.ib])
q(E.fG,[Z.fH,A.dT])
q(D.S,[D.au,D.av,D.v,X.dN])
q(X.dN,[X.cf,X.bz,X.bA,X.cq])
q(O.br,[D.cd,U.bt,M.bW])
q(D.fI,[U.fJ,U.W])
r(U.bY,U.W)
q(A.dT,[A.h7,A.hn])
q(A.ig,[A.ea,A.ij,A.ik,A.il,A.ih,A.e9,A.ii,A.eb,A.ec,A.io,A.ef,A.eg,A.ei,A.ej])
r(F.hZ,F.h0)
r(F.ie,F.hi)
r(F.eq,F.iz)
r(F.ix,F.iA)
q(O.i5,[O.dj,O.dv])
q(O.dw,[O.ho,O.hp,O.ay])
q(O.ay,[O.hs,O.ht])
r(X.h4,X.i3)
s(H.bJ,H.en)
s(H.cA,P.B)
s(H.cB,H.c7)
s(H.cC,P.B)
s(H.cD,H.c7)
s(P.cy,P.B)
s(W.eA,W.fL)
s(W.eB,P.B)
s(W.eC,W.D)
s(W.eD,P.B)
s(W.eE,W.D)
s(W.eJ,P.B)
s(W.eK,W.D)
s(W.eN,P.B)
s(W.eO,W.D)
s(W.eR,P.ax)
s(W.eS,P.ax)
s(W.eT,P.B)
s(W.eU,W.D)
s(W.eV,P.B)
s(W.eW,W.D)
s(W.eZ,P.B)
s(W.f_,W.D)
s(W.f1,P.ax)
s(W.cF,P.B)
s(W.cG,W.D)
s(W.f2,P.B)
s(W.f3,W.D)
s(W.f8,P.ax)
s(W.fc,P.B)
s(W.fd,W.D)
s(W.cI,P.B)
s(W.cJ,W.D)
s(W.fe,P.B)
s(W.ff,W.D)
s(W.fk,P.B)
s(W.fl,W.D)
s(W.fm,P.B)
s(W.fn,W.D)
s(W.fo,P.B)
s(W.fp,W.D)
s(W.fq,P.B)
s(W.fr,W.D)
s(W.fs,P.B)
s(W.ft,W.D)
s(P.eP,P.B)
s(P.eQ,W.D)
s(P.eX,P.B)
s(P.eY,W.D)
s(P.f9,P.B)
s(P.fa,W.D)
s(P.fg,P.B)
s(P.fh,W.D)
s(P.ew,P.ax)
s(P.f5,P.B)
s(P.f6,W.D)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",a0:"double",R:"num",M:"String",bf:"bool",ac:"Null",aw:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([S*])","~(S*)","~(a5*)","~(p*,f<bs*>*)","~(h*)","~(bd*)","a0*()","~(~())","~()","~(b3*)","~(p*,f<b4*>*)","~(p*,f<W*>*)","~(p*,f<aB*>*)","~(p*,f<bx*>*)","@(@)","ac(@)","ac(K?,K?)","ac(@,@)","~(aS*)","bf*(f<b4*>*)","ag*(ag*)","ag*(ag*{color:I*})","p(@,@)","M(c)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mt(v.typeUniverse,JSON.parse('{"aj":"b2","dL":"b2","bI":"b2","nR":"h","o0":"h","nT":"aI","nS":"c","o7":"c","o9":"c","nQ":"k","o2":"k","nU":"l","o5":"l","o3":"w","o_":"w","ox":"am","nY":"aD","nV":"ai","oa":"ai","o8":"a5","o4":"b0","o6":"b7","aa":{"i":["1"],"f":["1"]},"dm":{"i":["1"],"f":["1"]},"b1":{"a0":[],"R":[]},"cb":{"a0":[],"p":[],"R":[]},"dl":{"a0":[],"R":[]},"aJ":{"M":[]},"L":{"i":["p"],"f":["p"]},"i":{"f":["1"]},"b5":{"f":["2"]},"c2":{"i":["2"],"f":["2"]},"cu":{"f":["1"]},"bJ":{"i":["1"],"f":["1"]},"dF":{"F":[]},"dn":{"F":[]},"em":{"F":[]},"dR":{"F":[]},"aK":{"i":["1"],"f":["1"]},"bB":{"r":["1"]},"b7":{"r":["a0"],"i":["a0"],"f":["a0"]},"ck":{"r":["p"],"i":["p"],"f":["p"]},"dz":{"r":["p"],"i":["p"],"f":["p"]},"dA":{"r":["p"],"i":["p"],"f":["p"]},"dB":{"r":["p"],"i":["p"],"f":["p"]},"dC":{"r":["p"],"i":["p"],"f":["p"]},"dD":{"r":["p"],"i":["p"],"f":["p"]},"cm":{"r":["p"],"i":["p"],"f":["p"]},"dE":{"r":["p"],"i":["p"],"f":["p"]},"eG":{"F":[]},"cK":{"F":[]},"cH":{"f":["1"]},"cw":{"i":["1"],"f":["1"]},"ca":{"f":["1"]},"ce":{"i":["1"],"f":["1"]},"cE":{"i":["1"],"f":["1"]},"a0":{"R":[]},"d0":{"F":[]},"dG":{"F":[]},"a7":{"F":[]},"bG":{"F":[]},"di":{"F":[]},"eo":{"F":[]},"el":{"F":[]},"dZ":{"F":[]},"d7":{"F":[]},"dJ":{"F":[]},"cp":{"F":[]},"d9":{"F":[]},"p":{"R":[]},"aw":{"i":["1"],"f":["1"]},"l":{"P":[],"w":[],"c":[]},"cZ":{"P":[],"w":[],"c":[]},"d_":{"P":[],"w":[],"c":[]},"aY":{"P":[],"w":[],"c":[]},"ai":{"w":[],"c":[]},"c_":{"r":["ae<R>"],"i":["ae<R>"],"f":["ae<R>"]},"c0":{"ae":["R"]},"db":{"r":["M"],"i":["M"],"f":["M"]},"ey":{"i":["P"],"f":["P"]},"P":{"w":[],"c":[]},"dd":{"r":["aZ"],"i":["aZ"],"f":["aZ"]},"de":{"c":[]},"dg":{"P":[],"w":[],"c":[]},"b0":{"r":["w"],"i":["w"],"f":["w"]},"b3":{"h":[]},"dy":{"r":["b6"],"i":["b6"],"f":["b6"]},"a5":{"h":[]},"ex":{"i":["w"],"f":["w"]},"w":{"c":[]},"cn":{"r":["w"],"i":["w"],"f":["w"]},"dM":{"r":["b8"],"i":["b8"],"f":["b8"]},"dS":{"P":[],"w":[],"c":[]},"aN":{"c":[]},"dV":{"r":["aN"],"c":[],"i":["aN"],"f":["aN"]},"dW":{"r":["b9"],"i":["b9"],"f":["b9"]},"aP":{"c":[]},"am":{"c":[]},"e2":{"r":["am"],"i":["am"],"f":["am"]},"e3":{"r":["aP"],"c":[],"i":["aP"],"f":["aP"]},"bd":{"h":[]},"e7":{"r":["bc"],"i":["bc"],"f":["bc"]},"aD":{"h":[]},"er":{"c":[]},"aS":{"a5":[],"h":[]},"bL":{"c":[]},"ez":{"r":["E"],"i":["E"],"f":["E"]},"cv":{"ae":["R"]},"eM":{"r":["b_?"],"i":["b_?"],"f":["b_?"]},"cz":{"r":["w"],"i":["w"],"f":["w"]},"f4":{"r":["ba"],"i":["ba"],"f":["ba"]},"fb":{"r":["aO"],"i":["aO"],"f":["aO"]},"df":{"i":["P"],"f":["P"]},"ae":{"f0":["1"]},"dq":{"i":["bu"],"f":["bu"]},"dH":{"i":["bC"],"f":["bC"]},"e1":{"i":["M"],"f":["M"]},"k":{"P":[],"w":[],"c":[]},"e8":{"i":["bH"],"f":["bH"]},"d1":{"c":[]},"aI":{"c":[]},"dI":{"c":[]},"dX":{"i":["dt<@,@>"],"f":["dt<@,@>"]},"br":{"f":["1*"]},"au":{"S":[]},"av":{"S":[]},"v":{"S":[]},"cf":{"S":[]},"bz":{"S":[]},"bA":{"S":[]},"dN":{"S":[]},"cq":{"S":[]},"cd":{"f":["b4*"]},"bY":{"W":[]},"bt":{"W":[],"f":["W*"]},"cr":{"W":[]},"cs":{"W":[]},"ct":{"W":[]},"bW":{"aB":[],"f":["aB*"]},"c3":{"aB":[]}}'))
H.ms(v.typeUniverse,JSON.parse('{"aa":1,"dm":1,"T":1,"i":1,"bv":1,"b5":2,"c2":2,"cg":2,"cu":1,"eu":1,"c7":1,"en":1,"bJ":1,"aK":1,"ds":1,"bB":1,"bN":1,"cH":1,"e_":1,"e0":2,"cx":1,"ca":1,"ce":1,"B":1,"du":2,"ax":2,"cE":1,"cy":1,"d5":2,"d8":2,"f":1,"dk":1,"aw":1,"eH":1,"D":1,"c8":1,"br":1,"au":1,"av":1,"v":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",p:"May not create a face with a first vertex which is not attached to a shape.",R:"May not create a face with vertices attached to different shapes.",k:"May not create a line with a null end vertex.",e:"May not create a line with a null start vertex.",E:"May not create a line with a start vertex which is not attached to a shape.",T:"May not create a line with vertices attached to different shapes."}
var t=(function rtii(){var s=H.nv
return{R:s("i<@>"),h:s("P"),C:s("F"),D:s("h"),Z:s("o1"),b:s("aa<@>"),T:s("cc"),g:s("aj"),p:s("r<@>"),f:s("t<M*,bp*>"),G:s("t<M*,dT*>"),V:s("t<M*,dY*>"),i:s("t<M*,M*>"),w:s("t<M*,e6*>"),t:s("t<p*,aw<ed*>*>"),L:s("t<p*,aw<ee*>*>"),U:s("t<p*,aw<eh*>*>"),M:s("t<p*,aw<ek*>*>"),J:s("t<p*,ea*>"),E:s("t<p*,bf*>"),a:s("t<p*,p*>"),P:s("ac"),K:s("K"),I:s("ae<R>"),N:s("M"),o:s("bI"),v:s("bf"),W:s("a0"),z:s("@"),S:s("p"),u:s("bp*"),B:s("aY*"),x:s("cf*"),_:s("bz*"),F:s("bA*"),A:s("0&*"),c:s("K*"),Y:s("M*"),j:s("e5*"),m:s("cq*"),n:s("e9*"),r:s("eb*"),y:s("ec*"),O:s("ef*"),q:s("eg*"),s:s("ei*"),Q:s("ej*"),e:s("p*"),d:s("k2<ac>?"),X:s("K?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.aY.prototype
C.F=J.a.prototype
C.a=J.aa.prototype
C.c=J.cb.prototype
C.f=J.cc.prototype
C.d=J.b1.prototype
C.b=J.aJ.prototype
C.G=J.aj.prototype
C.r=J.dL.prototype
C.k=J.bI.prototype
C.t=W.aS.prototype
C.u=W.bL.prototype
C.v=new E.bo("Browser.chrome")
C.l=new E.bo("Browser.firefox")
C.m=new E.bo("Browser.edge")
C.w=new E.bo("Browser.other")
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.D=new P.dJ()
C.h=new P.iq()
C.E=new P.ir()
C.e=new P.iM()
C.j=new P.c1(0)
C.p=s([0,0,65498,45055,65535,34815,65534,18431])
C.H=new E.bD("OperatingSystem.windows")
C.q=new E.bD("OperatingSystem.mac")
C.I=new E.bD("OperatingSystem.linux")
C.J=new E.bD("OperatingSystem.other")
C.K=new P.bM(null,2)})();(function staticFields(){$.kz=null
$.aq=0
$.jZ=null
$.jY=null
$.kU=null
$.kQ=null
$.l0=null
$.j_=null
$.j3=null
$.jP=null
$.bP=null
$.cQ=null
$.cR=null
$.jK=!1
$.aE=C.e
$.a3=[]
$.fW=null
$.k9=null
$.kc=null
$.aA=null
$.ki=null
$.kq=null
$.kt=null
$.ks=null
$.kr=null
$.kv=null
$.kb=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"nZ","l7",function(){return H.ny("_$dart_dartClosure")})
s($,"ob","l8",function(){return H.aC(H.id({
toString:function(){return"$receiver$"}}))})
s($,"oc","l9",function(){return H.aC(H.id({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"od","la",function(){return H.aC(H.id(null))})
s($,"oe","lb",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oh","le",function(){return H.aC(H.id(void 0))})
s($,"oi","lf",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"og","ld",function(){return H.aC(H.ko(null))})
s($,"of","lc",function(){return H.aC(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"ok","lh",function(){return H.aC(H.ko(void 0))})
s($,"oj","lg",function(){return H.aC(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"oy","jT",function(){return P.m8()})
s($,"oA","ll",function(){return P.m_("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"or","lk",function(){return Z.ah(0)})
s($,"ol","li",function(){return Z.ah(511)})
s($,"ot","ap",function(){return Z.ah(1)})
s($,"os","ao",function(){return Z.ah(2)})
s($,"on","an",function(){return Z.ah(4)})
s($,"ou","bk",function(){return Z.ah(8)})
s($,"ov","bl",function(){return Z.ah(16)})
s($,"oo","bj",function(){return Z.ah(32)})
s($,"op","cW",function(){return Z.ah(64)})
s($,"oq","lj",function(){return Z.ah(96)})
s($,"ow","bT",function(){return Z.ah(128)})
s($,"om","aX",function(){return Z.ah(256)})
s($,"nX","l6",function(){return new V.fX()})
s($,"nW","y",function(){return $.l6()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cl,ArrayBufferView:H.cl,Float32Array:H.b7,Float64Array:H.b7,Int16Array:H.dz,Int32Array:H.dA,Int8Array:H.dB,Uint16Array:H.dC,Uint32Array:H.dD,Uint8ClampedArray:H.cm,CanvasPixelArray:H.cm,Uint8Array:H.dE,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fx,HTMLAnchorElement:W.cZ,HTMLAreaElement:W.d_,Blob:W.d2,HTMLCanvasElement:W.aY,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,CSSPerspective:W.fK,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,CSSImageValue:W.a8,CSSKeywordValue:W.a8,CSSNumericValue:W.a8,CSSPositionValue:W.a8,CSSResourceValue:W.a8,CSSUnitValue:W.a8,CSSURLImageValue:W.a8,CSSStyleValue:W.a8,CSSMatrixComponent:W.ar,CSSRotation:W.ar,CSSScale:W.ar,CSSSkew:W.ar,CSSTranslation:W.ar,CSSTransformComponent:W.ar,CSSTransformValue:W.fM,CSSUnparsedValue:W.fN,DataTransferItemList:W.fO,DOMException:W.fQ,ClientRectList:W.c_,DOMRectList:W.c_,DOMRectReadOnly:W.c0,DOMStringList:W.db,DOMTokenList:W.fR,Element:W.P,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aZ,FileList:W.dd,FileWriter:W.de,HTMLFormElement:W.dg,Gamepad:W.b_,History:W.h6,HTMLCollection:W.b0,HTMLFormControlsCollection:W.b0,HTMLOptionsCollection:W.b0,KeyboardEvent:W.b3,Location:W.hk,MediaList:W.hC,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.b6,MimeTypeArray:W.dy,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cn,RadioNodeList:W.cn,Plugin:W.b8,PluginArray:W.dM,RTCStatsReport:W.hQ,HTMLSelectElement:W.dS,SourceBuffer:W.aN,SourceBufferList:W.dV,SpeechGrammar:W.b9,SpeechGrammarList:W.dW,SpeechRecognitionResult:W.ba,Storage:W.i1,CSSStyleSheet:W.aO,StyleSheet:W.aO,TextTrack:W.aP,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.e2,TextTrackList:W.e3,TimeRanges:W.i7,Touch:W.bc,TouchEvent:W.bd,TouchList:W.e7,TrackDefaultList:W.ia,CompositionEvent:W.aD,FocusEvent:W.aD,TextEvent:W.aD,UIEvent:W.aD,URL:W.ip,VideoTrackList:W.er,WheelEvent:W.aS,Window:W.bL,DOMWindow:W.bL,CSSRuleList:W.ez,ClientRect:W.cv,DOMRect:W.cv,GamepadList:W.eM,NamedNodeMap:W.cz,MozNamedAttrMap:W.cz,SpeechRecognitionResultList:W.f4,StyleSheetList:W.fb,SVGLength:P.bu,SVGLengthList:P.dq,SVGNumber:P.bC,SVGNumberList:P.dH,SVGPointList:P.hL,SVGStringList:P.e1,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bH,SVGTransformList:P.e8,AudioBuffer:P.fC,AudioParamMap:P.fD,AudioTrackList:P.d1,AudioContext:P.aI,webkitAudioContext:P.aI,BaseAudioContext:P.aI,OfflineAudioContext:P.dI,SQLResultSetRowList:P.dX})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.b7.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kY,[])
else M.kY([])})})()
//# sourceMappingURL=main.dart.js.map
