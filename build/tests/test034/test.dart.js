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
a[c]=function(){a[c]=function(){H.nv(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jp(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={j5:function j5(){},
lp:function(a,b){if(t.U.b(a))return new H.bR(a,b)
return new H.b0(a,b)},
li:function(){return new P.dL("No element")},
lL:function(a,b){var s=J.be(a)
if(typeof s!=="number")return s.a0()
H.dG(a,0,s-1,b)},
dG:function(a,b,c,d){if(c-b<=32)H.lK(a,b,c,d)
else H.lJ(a,b,c,d)},
lK:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aM(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a_()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
lJ:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.d.X(a7-a6+1,6),g=a6+h,f=a7-h,e=C.d.X(a6+a7,2),d=e-h,c=e+h,b=J.aM(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.H(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a7()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a_()
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
if(typeof j!=="number")return j.a7()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a_()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a_()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a7()
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
H.dG(a5,a6,r-2,a8)
H.dG(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.H(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.H(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a7()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.dG(a5,r,q,a8)}else H.dG(a5,r,q,a8)},
G:function G(a){this.a=a},
i:function i(){},
bn:function bn(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b0:function b0(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=null
this.b=a
this.c=b},
ci:function ci(a,b){this.a=a
this.b=b},
eg:function eg(a,b){this.a=a
this.b=b},
bV:function bV(){},
e9:function e9(){},
bz:function bz(){},
kF:function(a){var s,r=H.kE(a)
if(r!=null)return r
s="minified:"+a
return s},
nn:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
if(typeof s!="string")throw H.c(H.at(a))
return s},
cb:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dy:function(a){return H.lt(a)},
lt:function(a){var s,r,q
if(a instanceof P.F)return H.a1(H.cL(a),null)
if(J.cK(a)===C.H||t.o.b(a)){s=C.m(a)
if(H.jV(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.jV(q))return q}}return H.a1(H.cL(a),null)},
jV:function(a){var s=a!=="Object"&&a!==""
return s},
jU:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lD:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(!H.cG(q))throw H.c(H.at(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.d.b2(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.at(q))}return H.jU(p)},
lC:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cG(q))throw H.c(H.at(q))
if(q<0)throw H.c(H.at(q))
if(q>65535)return H.lD(a)}return H.jU(a)},
lB:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.d.b2(s,10))>>>0,56320|s&1023)}throw H.c(P.aC(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lA:function(a){var s=H.bv(a).getFullYear()+0
return s},
ly:function(a){var s=H.bv(a).getMonth()+1
return s},
lu:function(a){var s=H.bv(a).getDate()+0
return s},
lv:function(a){var s=H.bv(a).getHours()+0
return s},
lx:function(a){var s=H.bv(a).getMinutes()+0
return s},
lz:function(a){var s=H.bv(a).getSeconds()+0
return s},
lw:function(a){var s=H.bv(a).getMilliseconds()+0
return s},
o:function(a){throw H.c(H.at(a))},
e:function(a,b){if(a==null)J.be(a)
throw H.c(H.bG(a,b))},
bG:function(a,b){var s,r,q="index"
if(!H.cG(b))return new P.a2(!0,b,q,null)
s=J.be(a)
if(!(b<0)){if(typeof s!=="number")return H.o(s)
r=b>=s}else r=!0
if(r)return P.E(b,a,q,null,s)
return P.dz(b,q)},
nc:function(a,b,c){if(a>c)return P.aC(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aC(b,a,c,"end",null)
return new P.a2(!0,b,"end",null)},
at:function(a){return new P.a2(!0,a,null,null)},
n7:function(a){if(typeof a!="number")throw H.c(H.at(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dq()
s=new Error()
s.dartException=a
r=H.nw
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nw:function(){return J.Z(this.dartException)},
n:function(a){throw H.c(a)},
l:function(a){throw H.c(P.bM(a))},
aq:function(a){var s,r,q,p,o,n
a=H.kB(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.i0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
i1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
k4:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jQ:function(a,b){return new H.dp(a,b==null?null:b.method)},
j6:function(a,b){var s=b==null,r=s?null:b.method
return new H.d9(a,r,s?null:b.receiver)},
fi:function(a){if(a==null)return new H.ho(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bb(a,a.dartException)
return H.n3(a)},
bb:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
n3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.d.b2(r,16)&8191)===10)switch(q){case 438:return H.bb(a,H.j6(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bb(a,H.jQ(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.kN()
o=$.kO()
n=$.kP()
m=$.kQ()
l=$.kT()
k=$.kU()
j=$.kS()
$.kR()
i=$.kW()
h=$.kV()
g=p.aa(s)
if(g!=null)return H.bb(a,H.j6(s,g))
else{g=o.aa(s)
if(g!=null){g.method="call"
return H.bb(a,H.j6(s,g))}else{g=n.aa(s)
if(g==null){g=m.aa(s)
if(g==null){g=l.aa(s)
if(g==null){g=k.aa(s)
if(g==null){g=j.aa(s)
if(g==null){g=m.aa(s)
if(g==null){g=i.aa(s)
if(g==null){g=h.aa(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bb(a,H.jQ(s,g))}}return H.bb(a,new H.e8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cc()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bb(a,new P.a2(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cc()
return a},
jr:function(a){var s
if(a==null)return new H.eU(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.eU(a)},
ne:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nm:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bF:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nm)
a.$identity=s
return s},
ld:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hI().constructor.prototype):Object.create(new H.bJ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ah
if(typeof r!=="number")return r.u()
$.ah=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jG(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.l9(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jG(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
l9:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kw,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.l7:H.l6
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
la:function(a,b,c,d){var s=H.jF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jG:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lc(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.la(r,!p,s,b)
if(r===0){p=$.ah
if(typeof p!=="number")return p.u()
$.ah=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.iW())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ah
if(typeof p!=="number")return p.u()
$.ah=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.iW())+"."+H.d(s)+"("+m+");}")()},
lb:function(a,b,c,d){var s=H.jF,r=H.l8
switch(b?-1:a){case 0:throw H.c(new H.dC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lc:function(a,b){var s,r,q,p,o,n,m=H.iW(),l=$.jD
if(l==null)l=$.jD=H.jC("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lb(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.ah
if(typeof o!=="number")return o.u()
$.ah=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.ah
if(typeof o!=="number")return o.u()
$.ah=o+1
return new Function(p+o+"}")()},
jp:function(a,b,c,d,e,f,g){return H.ld(a,b,c,d,!!e,!!f,g)},
l6:function(a,b){return H.f5(v.typeUniverse,H.cL(a.a),b)},
l7:function(a,b){return H.f5(v.typeUniverse,H.cL(a.c),b)},
jF:function(a){return a.a},
l8:function(a){return a.c},
iW:function(){var s=$.jE
return s==null?$.jE=H.jC("self"):s},
jC:function(a){var s,r,q,p=new H.bJ("self","target","receiver","name"),o=J.j4(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.iV("Field name "+a+" not found."))},
nv:function(a){throw H.c(new P.cZ(a))},
ni:function(a){return v.getIsolateTag(a)},
oE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
np:function(a){var s,r,q,p,o,n=$.kv.$1(a),m=$.iK[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iO[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kt.$2(a,n)
if(q!=null){m=$.iK[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iO[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.iQ(s)
$.iK[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iO[n]=s
return s}if(p==="-"){o=H.iQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kz(a,s)
if(p==="*")throw H.c(P.k5(n))
if(v.leafTags[n]===true){o=H.iQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kz(a,s)},
kz:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ju(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iQ:function(a){return J.ju(a,!1,null,!!a.$iq)},
nq:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.iQ(s)
else return J.ju(s,c,null,null)},
nk:function(){if(!0===$.js)return
$.js=!0
H.nl()},
nl:function(){var s,r,q,p,o,n,m,l
$.iK=Object.create(null)
$.iO=Object.create(null)
H.nj()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kA.$1(o)
if(n!=null){m=H.nq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nj:function(){var s,r,q,p,o,n,m=C.y()
m=H.bE(C.z,H.bE(C.A,H.bE(C.n,H.bE(C.n,H.bE(C.B,H.bE(C.C,H.bE(C.D(C.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kv=new H.iL(p)
$.kt=new H.iM(o)
$.kA=new H.iN(n)},
bE:function(a,b){return a(b)||b},
ll:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fR("Illegal RegExp pattern ("+String(n)+")",a))},
kC:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nd:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kB:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kD:function(a,b,c){var s=H.nt(a,b,c)
return s},
nt:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kB(b),'g'),H.nd(c))},
i0:function i0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dp:function dp(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a){this.a=a},
ho:function ho(a){this.a=a},
eU:function eU(a){this.a=a
this.b=null},
bg:function bg(){},
hM:function hM(){},
hI:function hI(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dC:function dC(a){this.a=a},
r:function r(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fX:function fX(a){this.a=a},
h_:function h_(a,b){this.a=a
this.b=b
this.c=null},
ay:function ay(a){this.a=a},
dc:function dc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function(a){return a},
as:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bG(b,a))},
mh:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nc(a,b,c))
return b},
c8:function c8(){},
bs:function bs(){},
b2:function b2(){},
c7:function c7(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
c9:function c9(){},
dn:function dn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
lH:function(a,b){var s=b.c
return s==null?b.c=H.jk(a,b.z,!0):s},
jZ:function(a,b){var s=b.c
return s==null?b.c=H.cB(a,"jJ",[b.z]):s},
k_:function(a){var s=a.y
if(s===6||s===7||s===8)return H.k_(a.z)
return s===11||s===12},
lG:function(a){return a.cy},
nf:function(a){return H.jl(v.typeUniverse,a,!1)},
aK:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.kk(a,r,!0)
case 7:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.jk(a,r,!0)
case 8:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.kj(a,r,!0)
case 9:q=b.Q
p=H.cJ(a,q,a0,a1)
if(p===q)return b
return H.cB(a,b.z,p)
case 10:o=b.z
n=H.aK(a,o,a0,a1)
m=b.Q
l=H.cJ(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ji(a,n,l)
case 11:k=b.z
j=H.aK(a,k,a0,a1)
i=b.Q
h=H.n0(a,i,a0,a1)
if(j===k&&h===i)return b
return H.ki(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cJ(a,g,a0,a1)
o=b.z
n=H.aK(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jj(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fl("Attempted to substitute unexpected RTI kind "+c))}},
cJ:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aK(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
n1:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aK(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
n0:function(a,b,c,d){var s,r=b.a,q=H.cJ(a,r,c,d),p=b.b,o=H.cJ(a,p,c,d),n=b.c,m=H.n1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.ex()
s.a=q
s.b=o
s.c=m
return s},
oG:function(a,b){a[v.arrayRti]=b
return a},
n8:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kw(s)
return a.$S()}return null},
kx:function(a,b){var s
if(H.k_(b))if(a instanceof H.bg){s=H.n8(a)
if(s!=null)return s}return H.cL(a)},
cL:function(a){var s
if(a instanceof P.F){s=a.$ti
return s!=null?s:H.jm(a)}if(Array.isArray(a))return H.md(a)
return H.jm(J.cK(a))},
md:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mn:function(a){var s=a.$ti
return s!=null?s:H.jm(a)},
jm:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mo(a,s)},
mo:function(a,b){var s=a instanceof H.bg?a.__proto__.__proto__.constructor:b,r=H.mb(v.typeUniverse,s.name)
b.$ccache=r
return r},
kw:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jl(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mm:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cF(q,a,H.ms)
if(!H.au(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cF(q,a,H.mv)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cG
else if(s===t.f||s===t.H)r=H.mr
else if(s===t.N)r=H.mt
else r=s===t.v?H.kp:null
if(r!=null)return H.cF(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.no)){q.r="$i"+p
return H.cF(q,a,H.mu)}}else if(p===7)return H.cF(q,a,H.mk)
return H.cF(q,a,H.mi)},
cF:function(a,b,c){a.b=c
return a.b(b)},
ml:function(a){var s,r,q=this
if(!H.au(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mg
else if(q===t.K)r=H.me
else r=H.mj
q.a=r
return q.a(a)},
mU:function(a){var s,r=a.y
if(!H.au(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mi:function(a){var s=this
if(a==null)return H.mU(s)
return H.K(v.typeUniverse,H.kx(a,s),null,s,null)},
mk:function(a){if(a==null)return!0
return this.z.b(a)},
mu:function(a){var s=this,r=s.r
if(a instanceof P.F)return!!a[r]
return!!J.cK(a)[r]},
oD:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kn(a,s)},
mj:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kn(a,s)},
kn:function(a,b){throw H.c(H.m1(H.kc(a,H.kx(a,b),H.a1(b,null))))},
kc:function(a,b,c){var s=P.fL(a),r=H.a1(b==null?H.cL(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
m1:function(a){return new H.cz("TypeError: "+a)},
U:function(a,b){return new H.cz("TypeError: "+H.kc(a,null,b))},
ms:function(a){return a!=null},
me:function(a){return a},
mv:function(a){return!0},
mg:function(a){return a},
kp:function(a){return!0===a||!1===a},
op:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.U(a,"bool"))},
or:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool"))},
oq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool?"))},
os:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"double"))},
ou:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double"))},
ot:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double?"))},
cG:function(a){return typeof a=="number"&&Math.floor(a)===a},
ov:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.U(a,"int"))},
ox:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int"))},
ow:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int?"))},
mr:function(a){return typeof a=="number"},
oy:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"num"))},
oA:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num"))},
oz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num?"))},
mt:function(a){return typeof a=="string"},
oB:function(a){if(typeof a=="string")return a
throw H.c(H.U(a,"String"))},
mf:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String"))},
oC:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String?"))},
mX:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.u(r,H.a1(a[q],b))
return s},
ko:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.u(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.u(" extends ",H.a1(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a1(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.u(a3,H.a1(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.u(a3,H.a1(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jz(H.a1(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
a1:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a1(a.z,b)
return s}if(l===7){r=a.z
s=H.a1(r,b)
q=r.y
return J.jz(q===11||q===12?C.b.u("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a1(a.z,b))+">"
if(l===9){p=H.n2(a.z)
o=a.Q
return o.length!==0?p+("<"+H.mX(o,b)+">"):p}if(l===11)return H.ko(a,b,null)
if(l===12)return H.ko(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
n2:function(a){var s,r=H.kE(a)
if(r!=null)return r
s="minified:"+a
return s},
kl:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mb:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jl(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cC(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cB(a,b,q)
n[b]=o
return o}else return m},
m9:function(a,b){return H.km(a.tR,b)},
m8:function(a,b){return H.km(a.eT,b)},
jl:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kh(H.kf(a,null,b,c))
r.set(b,s)
return s},
f5:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kh(H.kf(a,b,c,!0))
q.set(c,r)
return r},
ma:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ji(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aJ:function(a,b){b.a=H.ml
b.b=H.mm
return b},
cC:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a9(null,null)
s.y=b
s.cy=c
r=H.aJ(a,s)
a.eC.set(c,r)
return r},
kk:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.m6(a,b,r,c)
a.eC.set(r,s)
return s},
m6:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.au(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a9(null,null)
q.y=6
q.z=b
q.cy=c
return H.aJ(a,q)},
jk:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.m5(a,b,r,c)
a.eC.set(r,s)
return s},
m5:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.au(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.iP(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.iP(q.z))return q
else return H.lH(a,b)}}p=new H.a9(null,null)
p.y=7
p.z=b
p.cy=c
return H.aJ(a,p)},
kj:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.m3(a,b,r,c)
a.eC.set(r,s)
return s},
m3:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.au(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cB(a,"jJ",[b])
else if(b===t.P||b===t.T)return t.l}q=new H.a9(null,null)
q.y=8
q.z=b
q.cy=c
return H.aJ(a,q)},
m7:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a9(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aJ(a,s)
a.eC.set(q,r)
return r},
f4:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
m2:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cB:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.f4(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a9(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aJ(a,r)
a.eC.set(p,q)
return q},
ji:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.f4(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a9(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aJ(a,o)
a.eC.set(q,n)
return n},
ki:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.f4(m)
if(j>0){s=l>0?",":""
r=H.f4(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.m2(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a9(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aJ(a,o)
a.eC.set(q,r)
return r},
jj:function(a,b,c,d){var s,r=b.cy+("<"+H.f4(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.m4(a,b,c,r,d)
a.eC.set(r,s)
return s},
m4:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aK(a,b,r,0)
m=H.cJ(a,c,r,0)
return H.jj(a,n,m,c!==m)}}l=new H.a9(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aJ(a,l)},
kf:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kh:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.lW(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kg(a,r,g,f,!1)
else if(q===46)r=H.kg(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aI(a.u,a.e,f.pop()))
break
case 94:f.push(H.m7(a.u,f.pop()))
break
case 35:f.push(H.cC(a.u,5,"#"))
break
case 64:f.push(H.cC(a.u,2,"@"))
break
case 126:f.push(H.cC(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jh(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cB(p,n,o))
else{m=H.aI(p,a.e,n)
switch(m.y){case 11:f.push(H.jj(p,m,o,a.n))
break
default:f.push(H.ji(p,m,o))
break}}break
case 38:H.lX(a,f)
break
case 42:l=a.u
f.push(H.kk(l,H.aI(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jk(l,H.aI(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.kj(l,H.aI(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.ex()
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
H.jh(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.ki(p,H.aI(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jh(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.lZ(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aI(a.u,a.e,h)},
lW:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kg:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kl(s,o.z)[p]
if(n==null)H.n('No "'+p+'" in "'+H.lG(o)+'"')
d.push(H.f5(s,o,n))}else d.push(p)
return m},
lX:function(a,b){var s=b.pop()
if(0===s){b.push(H.cC(a.u,1,"0&"))
return}if(1===s){b.push(H.cC(a.u,4,"1&"))
return}throw H.c(P.fl("Unexpected extended operation "+H.d(s)))},
aI:function(a,b,c){if(typeof c=="string")return H.cB(a,c,a.sEA)
else if(typeof c=="number")return H.lY(a,b,c)
else return c},
jh:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aI(a,b,c[s])},
lZ:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aI(a,b,c[s])},
lY:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fl("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fl("Bad index "+c+" for "+b.i(0)))},
K:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.au(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.au(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.K(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.K(a,b.z,c,d,e)
if(p===6){s=d.z
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.jZ(a,b),c,d,e)}if(r===7){s=H.K(a,b.z,c,d,e)
return s}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.jZ(a,d),e)}if(p===7){s=H.K(a,b,c,d.z,e)
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
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.kq(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kq(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mq(a,b,c,d,e)}return!1},
kq:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.K(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.K(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.K(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.K(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.K(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mq:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kl(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.f5(a,b,l[p]),c,r[p],e))return!1
return!0},
iP:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.au(a))if(r!==7)if(!(r===6&&H.iP(a.z)))s=r===8&&H.iP(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
no:function(a){var s
if(!H.au(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
au:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
km:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ex:function ex(){this.c=this.b=this.a=null},
es:function es(){},
cz:function cz(a){this.a=a},
kE:function(a){return v.mangledGlobalNames[a]},
nr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ju:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fg:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.js==null){H.nk()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.k5("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.jM()]
if(p!=null)return p
p=H.np(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){Object.defineProperty(q,J.jM(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
jM:function(){var s=$.kd
return s==null?$.kd=v.getIsolateTag("_$dart_js"):s},
lj:function(a){if(!H.cG(a))throw H.c(P.jB(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aC(a,0,4294967295,"length",null))
return J.j4(new Array(a))},
jL:function(a){if(!H.cG(a)||a<0)throw H.c(P.iV("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
j4:function(a){a.fixed$length=Array
return a},
lk:function(a,b){return J.cP(a,b)},
cK:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c_.prototype
return J.bZ.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.c0.prototype
if(typeof a=="boolean")return J.fV.prototype
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.F)return a
return J.fg(a)},
ng:function(a){if(typeof a=="number")return J.aX.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.F)return a
return J.fg(a)},
aM:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.F)return a
return J.fg(a)},
jq:function(a){if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.F)return a
return J.fg(a)},
nh:function(a){if(typeof a=="number")return J.aX.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.by.prototype
return a},
ba:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.F)return a
return J.fg(a)},
jz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ng(a).u(a,b)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cK(a).q(a,b)},
cO:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nn(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).h(a,b)},
l0:function(a,b,c){return J.ba(a).eW(a,b,c)},
l1:function(a,b,c,d){return J.ba(a).fd(a,b,c,d)},
cP:function(a,b){return J.nh(a).aD(a,b)},
iS:function(a,b){return J.aM(a).I(a,b)},
iT:function(a,b,c){return J.aM(a).cM(a,b,c)},
iU:function(a,b){return J.jq(a).A(a,b)},
l2:function(a,b){return J.jq(a).D(a,b)},
l3:function(a){return J.ba(a).gcK(a)},
l4:function(a){return J.ba(a).gcN(a)},
W:function(a){return J.cK(a).gO(a)},
bd:function(a){return J.jq(a).gK(a)},
be:function(a){return J.aM(a).gj(a)},
jA:function(a,b){return J.ba(a).fS(a,b)},
Z:function(a){return J.cK(a).i(a)},
a:function a(){},
fV:function fV(){},
c0:function c0(){},
aY:function aY(){},
dv:function dv(){},
by:function by(){},
ad:function ad(){},
a5:function a5(){},
d8:function d8(){},
R:function R(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aX:function aX(){},
c_:function c_(){},
bZ:function bZ(){},
ax:function ax(){}},P={
lO:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.n4()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bF(new P.iq(q),1)).observe(s,{childList:true})
return new P.ip(q,s,r)}else if(self.setImmediate!=null)return P.n5()
return P.n6()},
lP:function(a){self.scheduleImmediate(H.bF(new P.ir(a),0))},
lQ:function(a){self.setImmediate(H.bF(new P.is(a),0))},
lR:function(a){P.jc(C.i,a)},
jc:function(a,b){var s=C.d.X(a.a,1000)
return P.m_(s<0?0:s,b)},
k3:function(a,b){var s=C.d.X(a.a,1000)
return P.m0(s<0?0:s,b)},
m_:function(a,b){var s=new P.cy()
s.dD(a,b)
return s},
m0:function(a,b){var s=new P.cy()
s.dE(a,b)
return s},
on:function(a){return new P.bB(a,1)},
lS:function(){return C.O},
lT:function(a){return new P.bB(a,3)},
mx:function(a){return new P.cv(a)},
mT:function(){var s,r
for(s=$.bD;s!=null;s=$.bD){$.cI=null
r=s.b
$.bD=r
if(r==null)$.cH=null
s.a.$0()}},
n_:function(){$.jn=!0
try{P.mT()}finally{$.cI=null
$.jn=!1
if($.bD!=null)$.jy().$1(P.ku())}},
mY:function(a){var s=new P.eh(a),r=$.cH
if(r==null){$.bD=$.cH=s
if(!$.jn)$.jy().$1(P.ku())}else $.cH=r.b=s},
mZ:function(a){var s,r,q,p=$.bD
if(p==null){P.mY(a)
$.cI=$.cH
return}s=new P.eh(a)
r=$.cI
if(r==null){s.b=p
$.bD=$.cI=s}else{q=r.b
s.b=q
$.cI=r.b=s
if(q==null)$.cH=s}},
k2:function(a,b){var s=$.af
if(s===C.e)return P.jc(a,b)
return P.jc(a,s.fh(b))},
lN:function(a,b){var s=$.af
if(s===C.e)return P.k3(a,b)
return P.k3(a,s.cH(b,t.Y))},
kr:function(a,b,c,d,e){P.mZ(new P.iI(d,e))},
mV:function(a,b,c,d){var s,r=$.af
if(r===c)return d.$0()
$.af=c
s=r
try{r=d.$0()
return r}finally{$.af=s}},
mW:function(a,b,c,d,e){var s,r=$.af
if(r===c)return d.$1(e)
$.af=c
s=r
try{r=d.$1(e)
return r}finally{$.af=s}},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
cy:function cy(){this.c=0},
iB:function iB(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b){this.a=a
this.b=b},
bC:function bC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cv:function cv(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
dM:function dM(){},
dN:function dN(){},
cd:function cd(){},
iD:function iD(){},
iI:function iI(a,b){this.a=a
this.b=b},
ix:function ix(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function(a,b,c){return H.ne(a,new H.r(b.al("@<0>").cg(c).al("r<1,2>")))},
ln:function(a,b){return new H.r(a.al("@<0>").cg(b).al("r<1,2>"))},
jN:function(a){return new P.ck(a.al("ck<0>"))},
jg:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lV:function(a,b){var s=new P.cl(a,b)
s.c=a.e
return s},
lh:function(a,b,c){var s,r
if(P.jo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.Y.push(a)
try{P.mw(a,s)}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}r=P.k0(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
j3:function(a,b,c){var s,r
if(P.jo(a))return b+"..."+c
s=new P.b6(b)
$.Y.push(a)
try{r=s
r.a=P.k0(r.a,a,", ")}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jo:function(a){var s,r
for(s=$.Y.length,r=0;r<s;++r)if(a===$.Y[r])return!0
return!1},
mw:function(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.d(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.t()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.t();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.d(p)
r=H.d(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
jO:function(a){var s,r={}
if(P.jo(a))return"{...}"
s=new P.b6("")
try{$.Y.push(a)
s.a+="{"
r.a=!0
J.l2(a,new P.h2(r,s))
s.a+="}"}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ck:function ck(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iw:function iw(a){this.a=a
this.c=this.b=null},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bY:function bY(){},
c2:function c2(){},
y:function y(){},
de:function de(){},
h2:function h2(a,b){this.a=a
this.b=b},
am:function am(){},
cs:function cs(){},
cm:function cm(){},
cW:function cW(){},
cY:function cY(){},
fI:function fI(){},
ib:function ib(){},
ic:function ic(){},
iC:function iC(a){this.b=0
this.c=a},
lg:function(a){if(a instanceof H.bg)return a.i(0)
return"Instance of '"+H.d(H.dy(a))+"'"},
j7:function(a,b,c){var s,r=c?J.jL(a):J.lj(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
j8:function(a,b){var s,r=[]
for(s=J.bd(a);s.t();)r.push(s.gC(s))
if(b)return r
return J.j4(r)},
jb:function(a){var s,r=a,q=r.length,p=P.j9(0,null,q)
if(typeof p!=="number")return p.a7()
s=p<q
return H.lC(s?r.slice(0,p):r)},
lE:function(a){return new H.fW(a,H.ll(a,!1,!0,!1,!1,!1))},
k0:function(a,b,c){var s=J.bd(b)
if(!s.t())return a
if(c.length===0){do a+=H.d(s.gC(s))
while(s.t())}else{a+=H.d(s.gC(s))
for(;s.t();)a=a+c+H.d(s.gC(s))}return a},
mc:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.o){s=$.l_().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.fk(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.lB(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
le:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
jH:function(a){return new P.aS(1000*a)},
fL:function(a){if(typeof a=="number"||H.kp(a)||null==a)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lg(a)},
fl:function(a){return new P.cS(a)},
iV:function(a){return new P.a2(!1,null,null,a)},
jB:function(a,b,c){return new P.a2(!0,a,b,c)},
l5:function(a,b){if(a==null)throw H.c(new P.a2(!1,null,b,"Must not be null"))
return a},
dz:function(a,b){return new P.bw(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.bw(b,c,!0,a,d,"Invalid value")},
j9:function(a,b,c){var s
if(typeof c!=="number")return H.o(c)
s=a>c
if(s)throw H.c(P.aC(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
s=b>c}else s=!0
if(s)throw H.c(P.aC(b,a,c,"end",null))
return b}return c},
jW:function(a,b){if(a<0)throw H.c(P.aC(a,0,null,b,null))
return a},
E:function(a,b,c,d,e){var s=e==null?J.be(b):e
return new P.d6(s,!0,a,c,"Index out of range")},
t:function(a){return new P.ea(a)},
k5:function(a){return new P.e7(a)},
bM:function(a){return new P.cX(a)},
m:function(a){return new P.eu(a)},
jw:function(a){H.nr(a)},
b9:function b9(){},
a4:function a4(a,b){this.a=a
this.b=b},
V:function V(){},
aS:function aS(a){this.a=a},
fF:function fF(){},
fG:function fG(){},
D:function D(){},
cS:function cS(a){this.a=a},
dq:function dq(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d6:function d6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ea:function ea(a){this.a=a},
e7:function e7(a){this.a=a},
dL:function dL(a){this.a=a},
cX:function cX(a){this.a=a},
dt:function dt(){},
cc:function cc(){},
cZ:function cZ(a){this.a=a},
eu:function eu(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
p:function p(){},
f:function f(){},
d7:function d7(){},
al:function al(){},
dd:function dd(){},
a7:function a7(){},
M:function M(){},
F:function F(){},
J:function J(){},
b6:function b6(a){this.a=a},
nb:function(a){var s
if(t.s.b(a)){s=J.l4(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cA(a.data,a.height,a.width)},
na:function(a){if(a instanceof P.cA)return{data:a.a,height:a.b,width:a.c}
return a},
aL:function(a){var s,r,q,p,o
if(a==null)return null
s=P.ln(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
n9:function(a){var s={}
a.D(0,new P.iJ(s))
return s},
j0:function(){return window.navigator.userAgent},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
d3:function d3(a,b){this.a=a
this.b=b},
fP:function fP(){},
fQ:function fQ(){},
iv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eN:function eN(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bm:function bm(){},
db:function db(){},
bt:function bt(){},
dr:function dr(){},
hr:function hr(){},
dO:function dO(){},
j:function j(){},
bx:function bx(){},
dV:function dV(){},
eB:function eB(){},
eC:function eC(){},
eJ:function eJ(){},
eK:function eK(){},
eW:function eW(){},
eX:function eX(){},
f2:function f2(){},
f3:function f3(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
cT:function cT(){},
av:function av(){},
ds:function ds(){},
ei:function ei(){},
dB:function dB(){},
dJ:function dJ(){},
eS:function eS(){},
eT:function eT(){}},W={
iY:function(){var s=document.createElement("canvas")
return s},
fH:function(a){return"wheel"},
jK:function(a){var s=document.createElement("img")
s.src=a
return s},
iu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ke:function(a,b,c,d){var s=W.iu(W.iu(W.iu(W.iu(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
L:function(a,b,c,d){var s=W.ks(new W.it(c),t.D)
if(s!=null&&!0)J.l1(a,b,s,!1)
return new W.et(a,b,s,!1)},
ks:function(a,b){var s=$.af
if(s===C.e)return a
return s.cH(a,b)},
k:function k(){},
fj:function fj(){},
cQ:function cQ(){},
cR:function cR(){},
cU:function cU(){},
aR:function aR(){},
ac:function ac(){},
fx:function fx(){},
C:function C(){},
bi:function bi(){},
fy:function fy(){},
a3:function a3(){},
ai:function ai(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fD:function fD(){},
bP:function bP(){},
bQ:function bQ(){},
d0:function d0(){},
fE:function fE(){},
ek:function ek(a,b){this.a=a
this.b=b},
I:function I(){},
h:function h(){},
b:function b(){},
aT:function aT(){},
d1:function d1(){},
d2:function d2(){},
d4:function d4(){},
aU:function aU(){},
fT:function fT(){},
aV:function aV(){},
aW:function aW(){},
bl:function bl(){},
aZ:function aZ(){},
h0:function h0(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
hm:function hm(a){this.a=a},
b1:function b1(){},
dh:function dh(){},
a_:function a_(){},
ej:function ej(a){this.a=a},
u:function u(){},
ca:function ca(){},
b3:function b3(){},
dw:function dw(){},
hw:function hw(){},
hx:function hx(a){this.a=a},
dD:function dD(){},
aD:function aD(){},
dH:function dH(){},
b4:function b4(){},
dI:function dI(){},
b5:function b5(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
aE:function aE(){},
aF:function aF(){},
ae:function ae(){},
dP:function dP(){},
dQ:function dQ(){},
hW:function hW(){},
b7:function b7(){},
b8:function b8(){},
dU:function dU(){},
hZ:function hZ(){},
ar:function ar(){},
ia:function ia(){},
ed:function ed(){},
aH:function aH(){},
bA:function bA(){},
el:function el(){},
cj:function cj(){},
ey:function ey(){},
cn:function cn(){},
eR:function eR(){},
eY:function eY(){},
j1:function j1(a,b){this.a=a
this.$ti=b},
et:function et(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
it:function it(a){this.a=a},
jf:function jf(a){this.$ti=a},
B:function B(){},
bW:function bW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
ev:function ev(){},
ew:function ew(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
eO:function eO(){},
ct:function ct(){},
cu:function cu(){},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
eZ:function eZ(){},
f_:function f_(){},
cw:function cw(){},
cx:function cx(){},
f0:function f0(){},
f1:function f1(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){}},K={
Q:function(a){var s=new K.hy()
s.dB(a)
return s},
fk:function fk(){},
d5:function d5(){},
az:function az(){this.a=null},
hy:function hy(){this.a=null}},L={dK:function dK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},dT:function dT(a){this.b=a
this.c=null},hX:function hX(){var _=this
_.d=_.c=_.b=_.a=null},i_:function i_(a){this.b=a
this.a=this.c=null}},O={
iZ:function(){var s=new O.bh()
s.b_()
return s},
bh:function bh(){this.c=this.b=this.a=null},
c6:function c6(){this.b=this.a=null},
df:function df(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
h4:function h4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c5:function c5(){},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
an:function an(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(){var _=this
_.e=_.d=_.c=_.b=null},
h8:function h8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dF:function dF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(){}},E={
jI:function(){var s,r=new E.bj()
r.a=""
r.b=!0
s=O.iZ()
r.y=s
s.aH(r.gfB(),r.gfE())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbi(0,null)
return r},
ka:function(){if(J.iS(window.navigator.vendor,"Google"))return C.w
if(J.iS(window.navigator.userAgent,"Firefox"))return C.k
var s=window.navigator.appVersion
if(J.aM(s).I(s,"Trident")||C.b.I(s,"Edge"))return C.l
if(J.iS(window.navigator.appName,"Microsoft"))return C.l
return C.x},
kb:function(){var s=window.navigator.appVersion
if(J.aM(s).I(s,"Win"))return C.L
if(C.b.I(s,"Mac"))return C.q
if(C.b.I(s,"Linux"))return C.M
return C.N},
lF:function(a,b){var s=new E.hs(a)
s.dA(a,b)
return s},
lM:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.k1(a,!0,!0,!0,!1)
s=W.iY()
r=s.style
r.width="100%"
r.height="100%"
J.l3(a).l(0,s)
return E.k1(s,!0,!0,!0,!1)},
k1:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.dR(),n=t.z,m=C.h.c2(a,"webgl2",P.lo(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.n(P.m("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.lF(m,a)
n=new T.hS(m)
n.b=m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.eb(a)
s=new X.fY()
s.c=new X.a6(!1,!1,!1)
s.d=P.jN(t.e)
n.b=s
s=new X.hn(n)
s.f=0
s.r=V.aA()
s.x=V.aA()
s.ch=s.Q=1
n.c=s
s=new X.h1(n)
s.r=0
s.x=V.aA()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.hY(n)
s.f=V.aA()
s.r=V.aA()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fJ
n.Q=(s==null?$.fJ=new E.er(E.ka(),E.kb()):s).a===C.k?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.L(q,"contextmenu",n.gef(),!1))
n.z.push(W.L(a,"focus",n.gel(),!1))
n.z.push(W.L(a,"blur",n.ge9(),!1))
n.z.push(W.L(q,"keyup",n.gep(),!1))
n.z.push(W.L(q,"keydown",n.gen(),!1))
n.z.push(W.L(a,"mousedown",n.geu(),!1))
n.z.push(W.L(a,"mouseup",n.gey(),!1))
n.z.push(W.L(a,p,n.gew(),!1))
r=n.z
W.fH(a)
W.fH(a)
r.push(W.L(a,W.fH(a),n.geA(),!1))
n.z.push(W.L(q,p,n.geh(),!1))
n.z.push(W.L(q,"mouseup",n.gej(),!1))
n.z.push(W.L(q,"pointerlockchange",n.geC(),!1))
n.z.push(W.L(a,"touchstart",n.geS(),!1))
n.z.push(W.L(a,"touchend",n.geO(),!1))
n.z.push(W.L(a,"touchmove",n.geQ(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a4(Date.now(),!1)
o.db=0
o.ct()
return o},
fs:function fs(){},
bj:function bj(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bf:function bf(a){this.b=a},
bu:function bu(a){this.b=a},
er:function er(a,b){this.a=a
this.b=b},
hs:function hs(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
dR:function dR(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hV:function hV(a){this.a=a}},Z={
je:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cE(c)),35044)
a.bindBuffer(b,null)
return new Z.ee(b,s)},
ab:function(a){return new Z.aG(a)},
ee:function ee(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ef:function ef(a){this.a=a},
bK:function bK(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a){this.a=a}},D={
x:function(){var s=new D.bT()
s.d=0
return s},
fu:function fu(){},
bT:function bT(){var _=this
_.d=_.c=_.b=_.a=null},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
N:function N(){this.b=null},
aj:function aj(){this.b=null},
ak:function ak(){this.b=null},
v:function v(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
b_:function b_(){},
c1:function c1(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={cV:function cV(a,b){this.a=a
this.b=b},da:function da(a,b){this.a=a
this.b=b},fY:function fY(){var _=this
_.d=_.c=_.b=_.a=null},c3:function c3(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},bq:function bq(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hn:function hn(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},br:function br(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dx:function dx(){},ce:function ce(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hY:function hY(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eb:function eb(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j2:function(a){var s=new X.fS(),r=new V.aw(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.jY
if(r==null){r=V.jX(0,0,1,1)
$.jY=r}s.r=r
return s},
jR:function(a){var s,r,q=new X.du()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gdF())
r=new D.v("mover",s,q.b)
r.b=!0
q.ai(r)}r=q.c
$.w().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.v("fov",r,1.0471975511965976)
r.b=!0
q.ai(r)}r=q.d
$.w().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.v("near",r,0.1)
r.b=!0
q.ai(r)}r=q.e
$.w().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.v("far",r,2000)
r.b=!0
q.ai(r)}return q},
iX:function iX(){},
fS:function fS(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(){this.b=this.a=null},
du:function du(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(){}},V={
fv:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aw(s,r,q,1)},
jt:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nx:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.dl(a-b,s)
return(a<0?a+s:a)+b},
A:function(a,b,c){if(a==null)return C.b.ab("null",c)
$.w().toString
return C.b.ab(C.c.di(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bH:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.l)(a),++q){p=V.A(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.ab(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
jv:function(a){return C.c.fY(Math.pow(2,C.I.bR(Math.log(H.n7(a))/Math.log(2))))},
bp:function(){var s=$.jP
return s==null?$.jP=V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ao:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aA:function(){var s=$.jT
return s==null?$.jT=new V.a0(0,0):s},
ls:function(){var s=$.ap
return s==null?$.ap=new V.O(0,0,0):s},
jX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dA(a,b,c,d)},
ec:function(){var s=$.k9
return s==null?$.k9=new V.z(0,0,0):s},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(){},
dg:function dg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bo:function bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function(a){P.lN(C.G,new V.iR(a))},
lI:function(a){var s=new V.hD()
s.dC(a,!0)
return s},
iR:function iR(a){this.a=a},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a}},U={
j_:function(){var s=new U.fw()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
fw:function fw(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(){this.b=this.a=null},
bk:function bk(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
P:function P(){},
cf:function cf(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cg:function cg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ch:function ch(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={bL:function bL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},bO:function bO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},bS:function bS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aa:function aa(){},
ky:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="modifiers",a8=34067,a9=V.lI("Test 034"),b0=W.iY()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
a9.cC(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."])
a9.cC(["\xab[Back to Tests|../]"])
a9=document
b0=a9.getElementById(a5)
s=b0.style
s.width="100%"
s.height="100%"
s.margin="-4px"
r=a9.createElement("div")
s=r.style
s.border="2px solid"
s.padding="10px"
C.p.f_(s,C.p.dL(s,"resize"),"both","")
s.overflow="auto"
J.jA(b0,r)
r.children
r.appendChild(b0)
q=a9.getElementById(a5)
if(q==null)H.n(P.m("Failed to find an element with the identifier, testCanvas."))
p=E.lM(q,!0,!0,!0,!1)
o=new U.bk()
o.b_()
o.aH(o.ge1(),o.geG())
o.e=null
o.f=V.bp()
o.r=0
a9=p.x
s=new U.cg()
n=U.j_()
n.sc1(0,!0)
n.sbW(6.283185307179586)
n.sbY(0)
n.sa4(0,0)
n.sbX(100)
n.sL(0)
n.sbI(0.5)
s.b=n
m=s.gaz()
n.gm().l(0,m)
n=U.j_()
n.sc1(0,!0)
n.sbW(6.283185307179586)
n.sbY(0)
n.sa4(0,0)
n.sbX(100)
n.sL(0)
n.sbI(0.5)
s.c=n
n.gm().l(0,m)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
l=new X.a6(!1,!1,!1)
k=s.d
s.d=l
n=new D.v(a7,k,l)
n.b=!0
s.G(n)
n=s.f
if(n!==!1){s.f=!1
n=new D.v("invertX",n,!1)
n.b=!0
s.G(n)}n=s.r
if(n!==!1){s.r=!1
n=new D.v("invertY",n,!1)
n.b=!0
s.G(n)}s.aP(a9)
o.l(0,s)
a9=p.x
s=new U.cf()
n=U.j_()
n.sc1(0,!0)
n.sbW(6.283185307179586)
n.sbY(0)
n.sa4(0,0)
n.sbX(100)
n.sL(0)
n.sbI(0.2)
s.b=n
n.gm().l(0,s.gaz())
s.c=null
s.d=!1
s.e=2.5
s.r=4
s.x=s.y=!1
s.z=0
s.Q=null
s.ch=0
s.cy=s.cx=null
l=new X.a6(!0,!1,!1)
k=s.c
s.c=l
n=new D.v(a7,k,l)
n.b=!0
s.G(n)
s.aP(a9)
o.l(0,s)
a9=p.x
s=new U.ch()
s.c=0.01
s.e=s.d=0
l=new X.a6(!1,!1,!1)
s.b=l
n=new D.v(a7,a6,l)
n.b=!0
s.G(n)
s.aP(a9)
o.l(0,s)
j=V.ao(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a9=new U.bN()
a9.a=j
o.l(0,a9)
i=X.jR(o)
h=new O.df()
a9=O.iZ()
h.e=a9
a9.aH(h.ge5(),h.ge7())
a9=new O.an(h,"emission")
a9.c=new A.T(!1,!1,!1)
a9.f=new V.S(0,0,0)
h.f=a9
a9=new O.an(h,"ambient")
a9.c=new A.T(!1,!1,!1)
a9.f=new V.S(0,0,0)
h.r=a9
a9=new O.an(h,"diffuse")
a9.c=new A.T(!1,!1,!1)
a9.f=new V.S(0,0,0)
h.x=a9
a9=new O.an(h,"invDiffuse")
a9.c=new A.T(!1,!1,!1)
a9.f=new V.S(0,0,0)
h.y=a9
a9=new O.h9(h,"specular")
a9.c=new A.T(!1,!1,!1)
a9.f=new V.S(0,0,0)
a9.ch=100
h.z=a9
a9=new O.h5(h,"bump")
a9.c=new A.T(!1,!1,!1)
h.Q=a9
h.ch=null
a9=new O.an(h,"reflect")
a9.c=new A.T(!1,!1,!1)
a9.f=new V.S(0,0,0)
h.cx=a9
a9=new O.h8(h,"refract")
a9.c=new A.T(!1,!1,!1)
a9.f=new V.S(0,0,0)
a9.ch=1
h.cy=a9
a9=new O.h4(h,"alpha")
a9.c=new A.T(!1,!1,!1)
a9.f=1
h.db=a9
a9=new D.c1()
a9.b_()
a9.e=[]
a9.f=[]
a9.r=[]
a9.x=[]
a9.z=a9.y=null
a9.c3(a9.ge3(),a9.geE(),a9.geI())
h.dx=a9
s=new O.h7()
s.b=new V.aw(0,0,0,0)
s.c=1
s.d=10
s.e=!1
h.dy=s
s=a9.y
a9=s==null?a9.y=D.x():s
a9.l(0,h.geY())
a9=h.dx
s=a9.z
a9=s==null?a9.z=D.x():s
a9.l(0,h.gaw())
h.fr=null
a9=h.r
a9.saC(0,new V.S(0.3,0.3,0.3))
a9=h.x
a9.saC(0,new V.S(0.8,0.8,0.8))
a9=h.x
s=p.f.fz("../resources/Test.png")
n=a9.c
if(!n.b)a9.cw(new A.T(n.a,!0,!1))
n=a9.d
if(n!==s){if(n!=null)n.gm().M(0,a9.gaw())
k=a9.d
a9.d=s
s.gm().l(0,a9.gaw())
s=new D.v(a9.b+".texture2D",k,a9.d)
s.b=!0
a9.a.N(s)}g=X.j2(a6)
if(g.b){g.b=!1
a9=new D.v("clearColor",!0,!1)
a9.b=!0
g.ai(a9)}f=E.jI()
e=F.ja()
F.cD(e,a6,a6,1,1,1,0,0,1)
F.cD(e,a6,a6,1,1,0,1,0,3)
F.cD(e,a6,a6,1,1,0,0,1,2)
F.cD(e,a6,a6,1,1,-1,0,0,0)
F.cD(e,a6,a6,1,1,0,-1,0,0)
F.cD(e,a6,a6,1,1,0,0,-1,3)
e.ao()
f.sbi(0,e)
d=new M.bS()
d.a=!0
a9=O.iZ()
d.e=a9
a9.aH(d.geb(),d.ged())
d.y=d.x=d.r=d.f=null
c=X.j2(a6)
d.saQ(a6)
d.saV(0,c)
d.saW(a6)
d.e.l(0,f)
d.saW(h)
d.saV(0,g)
d.saQ(i)
a9=p.f
s=a9.a
b=s.createTexture()
s.bindTexture(a8,b)
s.texParameteri(a8,10242,10497)
s.texParameteri(a8,10243,10497)
s.texParameteri(a8,10241,9729)
s.texParameteri(a8,10240,9729)
s.bindTexture(a8,a6)
a=new T.hR()
a.a=0
a.b=b
a.c=!1
a.d=0
a9.ay(a,b,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a9.ay(a,b,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a9.ay(a,b,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a9.ay(a,b,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a9.ay(a,b,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a9.ay(a,b,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a0=new M.bO()
a0.a=!0
a9=E.jI()
e=F.ja()
s=e.a
n=new V.z(-1,-1,1).J()
a1=s.b5(new V.aB(1,2,4,6),V.fv(255,0,0),new V.O(-1,-1,0),new V.a0(0,1),n,a6)
n=e.a
s=new V.z(1,-1,1).J()
a2=n.b5(new V.aB(0,3,4,6),V.fv(0,0,255),new V.O(1,-1,0),new V.a0(1,1),s,a6)
s=e.a
n=new V.z(1,1,1).J()
a3=s.b5(new V.aB(0,2,5,6),V.fv(0,128,0),new V.O(1,1,0),new V.a0(1,0),n,a6)
n=e.a
s=V.aA()
m=new V.z(-1,1,1).J()
a4=n.b5(new V.aB(0,2,4,7),V.fv(255,255,0),new V.O(-1,1,0),s,m,a6)
e.d.fe([a1,a2,a3,a4])
e.ao()
a9.sbi(0,e)
a0.e=a9
a0.saQ(a6)
a0.saV(0,a6)
a0.saW(a6)
a9=new O.dF()
a9.b=1.0471975511965976
a9.d=new V.S(1,1,1)
k=a9.c
a9.c=a
a.gm().l(0,a9.gaw())
s=new D.v("boxTexture",k,a9.c)
s.b=!0
a9.N(s)
a0.saW(a9)
a0.saV(0,g)
a0.saQ(i)
a9=new M.bL()
a9.b_()
a9.e=!0
a9.f=!1
a9.r=null
a9.aH(a9.geK(),a9.geM())
a9.b4(0,[a0,d])
s=p.d
if(s!==a9){if(s!=null)s.gm().M(0,p.gcb())
p.d=a9
a9.gm().l(0,p.gcb())
p.cc()}V.ns(p)}},A={
lq:function(a,b){var s=a.aS,r=new A.h3(b,s)
r.c9(b,s)
r.dz(a,b)
return r},
lr:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+a9.gah(a9)+b0.gah(b0)+b1.gah(b1)+b2.gah(b2)+b3.gah(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.l)(b4),++r)a+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.l)(b5),++r)a+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.l)(b6),++r)a+="_"+H.d(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.l)(b7),++r)a+="_"+H.d(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.ag()
if(h){s=$.aP()
b=new Z.aG(b.a|s.a)}if(g){s=$.aO()
b=new Z.aG(b.a|s.a)}if(f){s=$.aQ()
b=new Z.aG(b.a|s.a)}if(e){s=$.aN()
b=new Z.aG(b.a|s.a)}return new A.h6(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
iG:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iH:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.iG(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fh(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
mC:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iG(b,r,"emission")
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
my:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.iH(b,r,"ambient")
b.a+="\n"},
mA:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.iH(b,r,"diffuse")
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
mD:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.iH(b,r,"invDiffuse")
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
mJ:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.iH(b,r,"specular")
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
mF:function(a,b){var s,r,q
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
mH:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iG(b,r,"reflect")
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
mI:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iG(b,r,"refract")
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
mz:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fh(r)
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
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.p(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.p(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
mB:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fh(r)
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
c.a+="      highLight = intensity*("+C.a.p(l," + ")+");\n"}else c.a+="   highLight = "+C.a.p(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.p(m," + ")+");\n"
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
mG:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fh(r)
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
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.p(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
mK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fh(r)
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
if(m){s=$.fJ
if(s==null)s=$.fJ=new E.er(E.ka(),E.kb())
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
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.p(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.p(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(h," + ")+");\n"
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
mE:function(a,b){var s,r
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
s=b.a+="   return "+C.a.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
mL:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.b6("")
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
A.mC(a,h)
A.my(a,h)
A.mA(a,h)
A.mD(a,h)
A.mJ(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.mH(a,h)
A.mI(a,h)}A.mF(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mz(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mB(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mG(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mK(a,o[m],h)
A.mE(a,h)}o=h.a+="// === Main ===\n"
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
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aK(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aK(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aK(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aK(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.p(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
mM:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aE+"];\n"
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
mO:function(a,b){var s
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
mN:function(a,b){var s
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
mQ:function(a,b){var s,r
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
mR:function(a,b){var s,r
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
mP:function(a,b){var s
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
mS:function(a,b){var s
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
fh:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aK(a,1)},
jd:function(a,b,c,d,e){var s=new A.i3(a,c,e)
s.f=d
P.j7(d,0,!1)
return s},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){var _=this
_.h7=_.cT=_.b9=_.aS=_.aE=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hf=_.he=_.hd=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.bJ=_.hc=_.d4=_.d3=_.hb=_.d2=_.d1=_.d0=_.ha=_.d_=_.cZ=_.cY=_.h9=_.cX=_.cW=_.h8=_.cV=_.cU=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fr:function fr(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aE=b5
_.aS=b6
_.b9=b7},
e_:function e_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
e0:function e0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
e3:function e3(a,b,c,d,e,f,g,h,i,j){var _=this
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
e6:function e6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dE:function dE(){},
hG:function hG(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i2:function i2(){},
i8:function i8(a){this.a=a},
dX:function dX(a,b,c){this.a=a
this.c=b
this.d=c},
i5:function i5(a,b,c){this.a=a
this.c=b
this.d=c},
i6:function i6(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){this.a=a
this.c=b
this.d=c},
i3:function i3(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
dW:function dW(a,b,c){this.a=a
this.c=b
this.d=c},
i4:function i4(a,b,c){this.a=a
this.c=b
this.d=c},
dY:function dY(a,b,c){this.a=a
this.c=b
this.d=c},
dZ:function dZ(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
e1:function e1(a,b,c){this.a=a
this.c=b
this.d=c},
e2:function e2(a,b,c){this.a=a
this.c=b
this.d=c},
e4:function e4(a,b,c){this.a=a
this.c=b
this.d=c},
e5:function e5(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iF:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cD:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.z(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.z(s+a5,r+a3,q+a4)
o=new V.z(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.z(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.iF(g)
j=F.iF(f)
i=F.nu(a1,a2,new F.iE(h,F.iF(e),F.iF(d),j,k,a0),b)
if(i!=null)a.fA(i)},
nu:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.ja()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.ie(e,e,new V.aw(n,0,0,1),e,e,new V.a0(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bH(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.ie(e,e,new V.aw(h,g,f,1),e,e,new V.a0(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bH(d))}}s.d.ff(a+1,b+1,r)
return s},
bU:function(a,b,c){var s=new F.fO(),r=a.a
if(r==null)H.n(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.n(P.m("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.Z()
return s},
lm:function(a,b){var s=new F.fZ(),r=a.a
if(r==null)H.n(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.n(P.m("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.Z()
return s},
ja:function(){var s=new F.hz(),r=new F.ig(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hC(s)
r.b=[]
s.b=r
r=new F.hB(s)
r.b=[]
s.c=r
r=new F.hA(s)
r.b=[]
s.d=r
return s},
ie:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.id(),p=new F.il()
p.b=[]
q.b=p
p=new F.ik()
p.b=[]
p.c=[]
q.c=p
p=new F.ih()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.kX()
q.e=0
p=$.ag()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aP().a)!==0?e:r
q.x=(s&$.aO().a)!==0?b:r
q.y=(s&$.aQ().a)!==0?f:r
q.z=(s&$.bc().a)!==0?g:r
q.Q=(s&$.kY().a)!==0?c:r
q.ch=(s&$.bI().a)!==0?i:0
q.cx=(s&$.aN().a)!==0?a:r
return q},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fO:function fO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){this.b=this.a=null},
hp:function hp(){this.a=null},
hz:function hz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(a){this.a=a
this.b=null},
id:function id(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
ig:function ig(a){this.a=a
this.c=this.b=null},
ih:function ih(){this.d=this.c=this.b=null},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(){this.c=this.b=null},
il:function il(){this.b=null}},T={hO:function hO(){},hP:function hP(){},hQ:function hQ(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hR:function hR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hS:function hS(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hU:function hU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hT:function hT(a,b,c,d,e,f,g){var _=this
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
H.j5.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gO:function(a){return H.cb(a)},
i:function(a){return"Instance of '"+H.d(H.dy(a))+"'"}}
J.fV.prototype={
i:function(a){return String(a)},
gO:function(a){return a?519018:218159}}
J.c0.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0}}
J.aY.prototype={
gO:function(a){return 0},
i:function(a){return String(a)}}
J.dv.prototype={}
J.by.prototype={}
J.ad.prototype={
i:function(a){var s=a[$.kI()]
if(s==null)return this.dv(a)
return"JavaScript function for "+H.d(J.Z(s))}}
J.a5.prototype={
fQ:function(a,b){var s
if(!!a.fixed$length)H.n(P.t("removeAt"))
s=a.length
if(b>=s)throw H.c(P.dz(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var s
if(!!a.fixed$length)H.n(P.t("remove"))
for(s=0;s<a.length;++s)if(J.H(a[s],b)){a.splice(s,1)
return!0}return!1},
b4:function(a,b){var s,r
if(!!a.fixed$length)H.n(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.l)(b),++r)a.push(b[r])},
D:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bM(a))}},
p:function(a,b){var s,r,q=P.j7(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
fv:function(a){return this.p(a,"")},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gbT:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.li())},
aJ:function(a,b){if(!!a.immutable$list)H.n(P.t("sort"))
H.lL(a,b==null?J.mp():b)},
ds:function(a){return this.aJ(a,null)},
I:function(a,b){var s
for(s=0;s<a.length;++s)if(J.H(a[s],b))return!0
return!1},
i:function(a){return P.j3(a,"[","]")},
gK:function(a){return new J.R(a,a.length)},
gO:function(a){return H.cb(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.n(P.t("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bG(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.t("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bG(a,b))
a[b]=c},
$ii:1,
$if:1}
J.d8.prototype={}
J.R.prototype={
gC:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.l(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aX.prototype={
aD:function(a,b){var s
if(typeof b!="number")throw H.c(H.at(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gba(b)
if(this.gba(a)===s)return 0
if(this.gba(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gba:function(a){return a===0?1/a<0:a<0},
fY:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.t(""+a+".toInt()"))},
bR:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.t(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
di:function(a,b){var s
if(b>20)throw H.c(P.aC(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gba(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
n:function(a,b){if(typeof b!="number")throw H.c(H.at(b))
return a*b},
dl:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dw:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cz(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cz(a,b)},
cz:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.t("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
b2:function(a,b){var s
if(a>0)s=this.f4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
f4:function(a,b){return b>31?0:a>>>b},
$iV:1,
$iM:1}
J.c_.prototype={$ip:1}
J.bZ.prototype={}
J.ax.prototype={
bG:function(a,b){if(b<0)throw H.c(H.bG(a,b))
if(b>=a.length)H.n(H.bG(a,b))
return a.charCodeAt(b)},
ci:function(a,b){if(b>=a.length)throw H.c(H.bG(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!="string")throw H.c(P.jB(b,null,null))
return a+b},
c5:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dz(b,null))
if(b>c)throw H.c(P.dz(b,null))
if(c>a.length)throw H.c(P.dz(c,null))
return a.substring(b,c)},
aK:function(a,b){return this.c5(a,b,null)},
n:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ab:function(a,b){var s=b-a.length
if(s<=0)return a
return this.n(" ",s)+a},
cM:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aC(c,0,s,null,null))
return H.kC(a,b,c)},
I:function(a,b){return this.cM(a,b,0)},
aD:function(a,b){var s
if(typeof b!="string")throw H.c(H.at(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gO:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$iJ:1}
H.G.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bG(this.a,b)}}
H.i.prototype={}
H.bn.prototype={
gC:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.aM(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bM(q))
s=r.c
if(typeof o!=="number")return H.o(o)
if(s>=o){r.d=null
return!1}r.d=p.A(q,s);++r.c
return!0}}
H.b0.prototype={
gK:function(a){return new H.c4(J.bd(this.a),this.b)},
gj:function(a){return J.be(this.a)},
A:function(a,b){return this.b.$1(J.iU(this.a,b))}}
H.bR.prototype={$ii:1}
H.c4.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){var s=this.a
return s}}
H.ci.prototype={
gK:function(a){return new H.eg(J.bd(this.a),this.b)}}
H.eg.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.bV.prototype={}
H.e9.prototype={
k:function(a,b,c){throw H.c(P.t("Cannot modify an unmodifiable list"))}}
H.bz.prototype={}
H.i0.prototype={
aa:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dp.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.d9.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.e8.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ho.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.eU.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bg.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kF(r==null?"unknown":r)+"'"},
gh1:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hM.prototype={}
H.hI.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kF(s)+"'"}}
H.bJ.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bJ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gO:function(a){var s,r=this.c
if(r==null)s=H.cb(this.a)
else s=typeof r!=="object"?J.W(r):H.cb(r)
return(s^H.cb(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dy(s))+"'")}}
H.dC.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.r.prototype={
gj:function(a){return this.a},
gar:function(a){return new H.ay(this)},
gh0:function(a){return H.lp(new H.ay(this),new H.fX(this))},
fj:function(a,b){var s=this.b
if(s==null)return!1
return this.dQ(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b0(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b0(p,b)
q=r==null?n:r.b
return q}else return o.fu(b)},
fu:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cn(q,J.W(a)&0x3ffffff)
r=this.d6(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cf(s==null?m.b=m.bx():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cf(r==null?m.c=m.bx():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bx()
p=J.W(b)&0x3ffffff
o=m.cn(q,p)
if(o==null)m.bA(q,p,[m.by(b,c)])
else{n=m.d6(o,b)
if(n>=0)o[n].b=c
else o.push(m.by(b,c))}}},
D:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bM(s))
r=r.c}},
cf:function(a,b,c){var s=this.b0(a,b)
if(s==null)this.bA(a,b,this.by(b,c))
else s.b=c},
by:function(a,b){var s=this,r=new H.h_(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
d6:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1},
i:function(a){return P.jO(this)},
b0:function(a,b){return a[b]},
cn:function(a,b){return a[b]},
bA:function(a,b,c){a[b]=c},
dT:function(a,b){delete a[b]},
dQ:function(a,b){return this.b0(a,b)!=null},
bx:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bA(r,s,r)
this.dT(r,s)
return r}}
H.fX.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mn(this.a).al("2(1)")}}
H.h_.prototype={}
H.ay.prototype={
gj:function(a){return this.a.a},
gK:function(a){var s=this.a,r=new H.dc(s,s.r)
r.c=s.e
return r}}
H.dc.prototype={
gC:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bM(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iL.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.iM.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iN.prototype={
$1:function(a){return this.a(a)}}
H.fW.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c8.prototype={}
H.bs.prototype={
gj:function(a){return a.length},
$iq:1}
H.b2.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]},
k:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.c7.prototype={
k:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.di.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.dj.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.dk.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.dl.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.dm.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.c9.prototype={
gj:function(a){return a.length},
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.dn.prototype={
gj:function(a){return a.length},
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
H.a9.prototype={
al:function(a){return H.f5(v.typeUniverse,this,a)},
cg:function(a){return H.ma(v.typeUniverse,this,a)}}
H.ex.prototype={}
H.es.prototype={
i:function(a){return this.a}}
H.cz.prototype={}
P.iq.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.ip.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.is.prototype={
$0:function(){this.a.$0()}}
P.cy.prototype={
dD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bF(new P.iB(this,b),0),a)
else throw H.c(P.t("`setTimeout()` not found."))},
dE:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bF(new P.iA(this,a,Date.now(),b),0),a)
else throw H.c(P.t("Periodic timer."))},
$icd:1}
P.iB.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iA.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.d.dw(s,o)}q.c=p
r.d.$1(q)}}
P.bB.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bC.prototype={
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
if(r instanceof P.bB){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bd(s)
if(o instanceof P.bC){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cv.prototype={
gK:function(a){return new P.bC(this.a())}}
P.eh.prototype={}
P.dM.prototype={}
P.dN.prototype={}
P.cd.prototype={}
P.iD.prototype={}
P.iI.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.Z(this.b)
throw s}}
P.ix.prototype={
fU:function(a){var s,r,q,p=null
try{if(C.e===$.af){a.$0()
return}P.mV(p,p,this,a)}catch(q){s=H.fi(q)
r=H.jr(q)
P.kr(p,p,this,s,r)}},
fV:function(a,b){var s,r,q,p=null
try{if(C.e===$.af){a.$1(b)
return}P.mW(p,p,this,a,b)}catch(q){s=H.fi(q)
r=H.jr(q)
P.kr(p,p,this,s,r)}},
fW:function(a,b){return this.fV(a,b,t.z)},
fh:function(a){return new P.iy(this,a)},
cH:function(a,b){return new P.iz(this,a,b)}}
P.iy.prototype={
$0:function(){return this.a.fU(this.b)}}
P.iz.prototype={
$1:function(a){return this.a.fW(this.b,a)},
$S:function(){return this.c.al("~(0)")}}
P.ck.prototype={
gK:function(a){var s=new P.cl(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
I:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dO(b)
return r}},
dO:function(a){var s=this.d
if(s==null)return!1
return this.bo(s[this.bl(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cj(s==null?q.b=P.jg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cj(r==null?q.c=P.jg():r,b)}else return q.dH(0,b)},
dH:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jg()
s=q.bl(b)
r=p[s]
if(r==null)p[s]=[q.bk(b)]
else{if(q.bo(r,b)>=0)return!1
r.push(q.bk(b))}return!0},
M:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.eV(this.c,b)
else return this.eU(0,b)},
eU:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bl(b)
r=n[s]
q=o.bo(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cB(p)
return!0},
cj:function(a,b){if(a[b]!=null)return!1
a[b]=this.bk(b)
return!0},
eV:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cB(s)
delete a[b]
return!0},
co:function(){this.r=1073741823&this.r+1},
bk:function(a){var s,r=this,q=new P.iw(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.co()
return q},
cB:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.co()},
bl:function(a){return J.W(a)&1073741823},
bo:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1}}
P.iw.prototype={}
P.cl.prototype={
gC:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bM(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.bY.prototype={}
P.c2.prototype={$ii:1,$if:1}
P.y.prototype={
gK:function(a){return new H.bn(a,this.gj(a))},
A:function(a,b){return this.h(a,b)},
gd7:function(a){return this.gj(a)===0},
fZ:function(a){var s,r,q,p,o=this
if(o.gd7(a)){s=J.jL(0)
return s}r=o.h(a,0)
q=P.j7(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.o(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
i:function(a){return P.j3(a,"[","]")}}
P.de.prototype={}
P.h2.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:16}
P.am.prototype={
D:function(a,b){var s,r
for(s=J.bd(this.gar(a));s.t();){r=s.gC(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.be(this.gar(a))},
i:function(a){return P.jO(a)}}
P.cs.prototype={
i:function(a){return P.j3(this,"{","}")},
A:function(a,b){var s,r,q,p="index"
P.l5(b,p)
P.jW(b,p)
for(s=P.lV(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.c(P.E(b,this,p,null,r))},
$ii:1,
$if:1}
P.cm.prototype={}
P.cW.prototype={}
P.cY.prototype={}
P.fI.prototype={}
P.ib.prototype={}
P.ic.prototype={
fk:function(a){var s,r,q,p=null,o=P.j9(0,p,a.length)
if(o==null)throw H.c(new P.bw(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.iC(r)
if(q.dV(a,0,o)!==o){C.b.bG(a,o-1)
q.bC()}return new Uint8Array(r.subarray(0,H.mh(0,q.b,r.length)))}}
P.iC.prototype={
bC:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fc:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.e(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.e(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s&63
return!0}else{n.bC()
return!1}},
dV:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bG(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.ci(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fc(p,C.b.ci(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bC()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.e(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.e(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=128|p&63}}}return q}}
P.b9.prototype={}
P.a4.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a&&!0},
aD:function(a,b){return C.d.aD(this.a,b.a)},
gO:function(a){var s=this.a
return(s^C.d.b2(s,30))&1073741823},
i:function(a){var s=this,r=P.le(H.lA(s)),q=P.d_(H.ly(s)),p=P.d_(H.lu(s)),o=P.d_(H.lv(s)),n=P.d_(H.lx(s)),m=P.d_(H.lz(s)),l=P.lf(H.lw(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.V.prototype={}
P.aS.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gO:function(a){return C.d.gO(this.a)},
aD:function(a,b){return C.d.aD(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fG(),o=this.a
if(o<0)return"-"+new P.aS(0-o).i(0)
s=p.$1(C.d.X(o,6e7)%60)
r=p.$1(C.d.X(o,1e6)%60)
q=new P.fF().$1(o%1e6)
return""+C.d.X(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.fF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.D.prototype={}
P.cS.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fL(s)
return"Assertion failed"}}
P.dq.prototype={
i:function(a){return"Throw of null."}}
P.a2.prototype={
gbn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbm:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbn()+o+m
if(!q.a)return l
s=q.gbm()
r=P.fL(q.b)
return l+s+": "+r}}
P.bw.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.d6.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var s,r=this.b
if(typeof r!=="number")return r.a7()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gj:function(a){return this.f}}
P.ea.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.e7.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dL.prototype={
i:function(a){return"Bad state: "+this.a}}
P.cX.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fL(s)+"."}}
P.dt.prototype={
i:function(a){return"Out of Memory"},
$iD:1}
P.cc.prototype={
i:function(a){return"Stack Overflow"},
$iD:1}
P.cZ.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eu.prototype={
i:function(a){return"Exception: "+this.a}}
P.fR.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.c5(q,0,75)+"..."
return r+"\n"+q}}
P.p.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gK(this)
for(s=0;r.t();)++s
return s},
A:function(a,b){var s,r,q
P.jW(b,"index")
for(s=this.gK(this),r=0;s.t();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.E(b,this,"index",null,r))},
i:function(a){return P.lh(this,"(",")")}}
P.d7.prototype={}
P.al.prototype={$ii:1,$if:1}
P.dd.prototype={}
P.a7.prototype={
gO:function(a){return P.F.prototype.gO.call(C.f,this)},
i:function(a){return"null"}}
P.M.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
q:function(a,b){return this===b},
gO:function(a){return H.cb(this)},
i:function(a){return"Instance of '"+H.d(H.dy(this))+"'"},
toString:function(){return this.i(this)}}
P.J.prototype={}
P.b6.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fj.prototype={
gj:function(a){return a.length}}
W.cQ.prototype={
i:function(a){return String(a)}}
W.cR.prototype={
i:function(a){return String(a)}}
W.cU.prototype={}
W.aR.prototype={
c2:function(a,b,c){if(c!=null)return a.getContext(b,P.n9(c))
return a.getContext(b)},
dk:function(a,b){return this.c2(a,b,null)},
$iaR:1}
W.ac.prototype={
gj:function(a){return a.length}}
W.fx.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.bi.prototype={
dL:function(a,b){var s=$.kH(),r=s[b]
if(typeof r=="string")return r
r=this.f5(a,b)
s[b]=r
return r},
f5:function(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.kJ()+b
if(s in a)return s
return b},
f_:function(a,b,c,d){a.setProperty(b,c,d)},
gj:function(a){return a.length}}
W.fy.prototype={}
W.a3.prototype={}
W.ai.prototype={}
W.fz.prototype={
gj:function(a){return a.length}}
W.fA.prototype={
gj:function(a){return a.length}}
W.fB.prototype={
gj:function(a){return a.length}}
W.fD.prototype={
i:function(a){return String(a)}}
W.bP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.bQ.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gau(a))+" x "+H.d(this.gaq(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.ba(b)
s=a.left==s.gbb(b)&&a.top==s.gbg(b)&&this.gau(a)==s.gau(b)&&this.gaq(a)==s.gaq(b)}else s=!1
return s},
gO:function(a){return W.ke(J.W(a.left),J.W(a.top),J.W(this.gau(a)),J.W(this.gaq(a)))},
gcI:function(a){return a.bottom},
gaq:function(a){return a.height},
gbb:function(a){return a.left},
gbf:function(a){return a.right},
gbg:function(a){return a.top},
gau:function(a){return a.width},
$ia8:1}
W.d0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.fE.prototype={
gj:function(a){return a.length}}
W.ek.prototype={
gd7:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var s=this.fZ(this)
return new J.R(s,s.length)}}
W.I.prototype={
gcK:function(a){return new W.ek(a,a.children)},
gcL:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a7()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a7()
if(p<0)p=-p*0
return new P.a8(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iI:1}
W.h.prototype={$ih:1}
W.b.prototype={
fd:function(a,b,c,d){if(c!=null)this.dI(a,b,c,!1)},
dI:function(a,b,c,d){return a.addEventListener(b,H.bF(c,1),!1)},
$ib:1}
W.aT.prototype={$iaT:1}
W.d1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.d2.prototype={
gj:function(a){return a.length}}
W.d4.prototype={
gj:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.fT.prototype={
gj:function(a){return a.length}}
W.aV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.aW.prototype={
gcN:function(a){return a.data},
$iaW:1}
W.bl.prototype={$ibl:1}
W.aZ.prototype={$iaZ:1}
W.h0.prototype={
i:function(a){return String(a)}}
W.hi.prototype={
gj:function(a){return a.length}}
W.hj.prototype={
h:function(a,b){return P.aL(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aL(s.value[1]))}},
gar:function(a){var s=[]
this.D(a,new W.hk(s))
return s},
gj:function(a){return a.size}}
W.hk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hl.prototype={
h:function(a,b){return P.aL(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aL(s.value[1]))}},
gar:function(a){var s=[]
this.D(a,new W.hm(s))
return s},
gj:function(a){return a.size}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b1.prototype={$ib1:1}
W.dh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.a_.prototype={$ia_:1}
W.ej.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gK:function(a){var s=this.a.childNodes
return new W.bW(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.u.prototype={
fS:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.l0(s,b,a)}catch(q){H.fi(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.du(a):s},
eW:function(a,b,c){return a.replaceChild(b,c)},
$iu:1}
W.ca.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b3.prototype={
gj:function(a){return a.length},
$ib3:1}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.hw.prototype={
h:function(a,b){return P.aL(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aL(s.value[1]))}},
gar:function(a){var s=[]
this.D(a,new W.hx(s))
return s},
gj:function(a){return a.size}}
W.hx.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dD.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.dH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b4.prototype={$ib4:1}
W.dI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b5.prototype={
gj:function(a){return a.length},
$ib5:1}
W.hJ.prototype={
h:function(a,b){return a.getItem(H.mf(b))},
D:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gar:function(a){var s=[]
this.D(a,new W.hK(s))
return s},
gj:function(a){return a.length}}
W.hK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.aF.prototype={$iaF:1}
W.ae.prototype={$iae:1}
W.dP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.dQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.hW.prototype={
gj:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.b8.prototype={$ib8:1}
W.dU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.hZ.prototype={
gj:function(a){return a.length}}
W.ar.prototype={}
W.ia.prototype={
i:function(a){return String(a)}}
W.ed.prototype={
gj:function(a){return a.length}}
W.aH.prototype={
gfo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
gfn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.t("deltaX is not supported"))},
$iaH:1}
W.bA.prototype={
eX:function(a,b){return a.requestAnimationFrame(H.bF(b,1))},
dU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.el.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.cj.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.ba(b)
s=a.left==s.gbb(b)&&a.top==s.gbg(b)&&a.width==s.gau(b)&&a.height==s.gaq(b)}else s=!1
return s},
gO:function(a){return W.ke(J.W(a.left),J.W(a.top),J.W(a.width),J.W(a.height))},
gaq:function(a){return a.height},
gau:function(a){return a.width}}
W.ey.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.cn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.eR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.eY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.j1.prototype={}
W.et.prototype={}
W.it.prototype={
$1:function(a){return this.a.$1(a)}}
W.jf.prototype={}
W.B.prototype={
gK:function(a){return new W.bW(a,this.gj(a))}}
W.bW.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cO(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return this.d}}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eO.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eV.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
P.cA.prototype={$iaW:1,
gcN:function(a){return this.a}}
P.iJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.d3.prototype={
gb1:function(){return new H.b0(new H.ci(this.b,new P.fP()),new P.fQ())},
k:function(a,b,c){var s=this.gb1()
J.jA(s.b.$1(J.iU(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.be(this.gb1().a)},
h:function(a,b){var s=this.gb1()
return s.b.$1(J.iU(s.a,b))},
gK:function(a){var s=P.j8(this.gb1(),!1)
return new J.R(s,s.length)}}
P.fP.prototype={
$1:function(a){return t.h.b(a)}}
P.fQ.prototype={
$1:function(a){return t.h.a(a)}}
P.eN.prototype={
gbf:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
gcI:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.ba(b)
if(s==r.gbb(b)){q=n.b
if(q==r.gbg(b)){p=n.c
if(typeof s!=="number")return s.u()
if(typeof p!=="number")return H.o(p)
o=n.$ti.c
if(o.a(s+p)===r.gbf(b)){s=n.d
if(typeof q!=="number")return q.u()
if(typeof s!=="number")return H.o(s)
r=o.a(q+s)===r.gcI(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gO:function(a){var s,r=this,q=r.a,p=J.W(q),o=r.b,n=J.W(o),m=r.c
if(typeof q!=="number")return q.u()
if(typeof m!=="number")return H.o(m)
s=r.$ti.c
m=C.d.gO(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.u()
if(typeof q!=="number")return H.o(q)
q=C.d.gO(s.a(o+q))
return P.lU(P.iv(P.iv(P.iv(P.iv(0,p),n),m),q))}}
P.a8.prototype={
gbb:function(a){return this.a},
gbg:function(a){return this.b},
gau:function(a){return this.c},
gaq:function(a){return this.d}}
P.bm.prototype={$ibm:1}
P.db.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bt.prototype={$ibt:1}
P.dr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hr.prototype={
gj:function(a){return a.length}}
P.dO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcK:function(a){return new P.d3(a,new W.ej(a))}}
P.bx.prototype={$ibx:1}
P.dV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eB.prototype={}
P.eC.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.fo.prototype={
gj:function(a){return a.length}}
P.fp.prototype={
h:function(a,b){return P.aL(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aL(s.value[1]))}},
gar:function(a){var s=[]
this.D(a,new P.fq(s))
return s},
gj:function(a){return a.size}}
P.fq.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cT.prototype={
gj:function(a){return a.length}}
P.av.prototype={}
P.ds.prototype={
gj:function(a){return a.length}}
P.ei.prototype={}
P.dB.prototype={
dh:function(a,b,c,d,e,f,g){var s
if(t.s.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.na(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.iV("Incorrect number or type of arguments"))}}
P.dJ.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
s=P.aL(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eS.prototype={}
P.eT.prototype={}
K.fk.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"}}
K.d5.prototype={
aF:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)if(s[q].aF(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.az.prototype={
aF:function(a,b){return!this.dt(0,b)},
i:function(a){return"!["+this.c6(0)+"]"}}
K.hy.prototype={
dB:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
s=new H.r(t.E)
for(r=new H.bn(a,a.gj(a));r.t();){q=r.d
s.k(0,q,!0)}p=P.j8(new H.ay(s),!0)
C.a.ds(p)
this.a=p},
aF:function(a,b){return C.a.I(this.a,b)},
i:function(a){return P.jb(this.a)}}
L.dK.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.i_(this.a.F(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fs:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.aF(0,a))return p}return null},
i:function(a){return this.b},
cA:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.I(0,l))m+=" (consume)"
for(l=new H.ay(n.d.c),l=l.gK(l);l.t();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.I(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.l)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.dS.prototype={
i:function(a){var s=H.kD(this.b,"\n","\\n"),r=H.kD(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.dT.prototype={
i:function(a){return this.b}}
L.hX.prototype={
F:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dK(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
aX:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.dT(a)
s.c=new H.r(t.i)
this.b.k(0,a,s)}return s},
dj:function(a){return this.h_(a)},
h_:function(a){var s=this
return P.mx(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dj(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.fQ(a0,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fs(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jb(b)
throw H.c(P.m("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.n(P.t("removeRange"))
P.j9(0,k,b.length)
b.splice(0,k-0)
C.a.b4(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.I(0,n.a)?7:8
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
if(d.d!=null){g=P.jb(c)
f=d.d
e=f.c.h(0,g)
n=new L.dS(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.I(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.lS()
case 1:return P.lT(o)}}},t.j)},
i:function(a){var s,r=new P.b6(""),q=this.d
if(q!=null)r.a=q.cA()+"\n"
for(q=this.a,q=q.gh0(q),q=new H.c4(J.bd(q.a),q.b);q.t();){s=q.a
if(s!=this.d)r.a+=s.cA()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.i_.prototype={
i:function(a){return this.b.b+": "+this.c6(0)}}
O.bh.prototype={
b_:function(){this.a=[]
this.c=this.b=null},
c3:function(a,b,c){this.b=b
this.c=a},
aH:function(a,b){return this.c3(a,null,b)},
cr:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
ca:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gK:function(a){var s=this.a
return new J.R(s,s.length)},
A:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.cr([b])){s=this.a
r=s.length
s.push(b)
this.ca(r,[b])}},
b4:function(a,b){var s,r
if(this.cr(b)){s=this.a
r=s.length
C.a.b4(s,b)
this.ca(r,b)}},
$if:1}
O.c6.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
av:function(){var s=this.b
if(s!=null)s.w(null)},
gU:function(a){var s=this.a
if(s.length>0)return C.a.gbT(s)
else return V.bp()},
be:function(a){var s=this.a
if(a==null)s.push(V.bp())
else s.push(a)
this.av()},
as:function(){var s=this.a
if(s.length>0){s.pop()
this.av()}}}
E.fs.prototype={}
E.bj.prototype={
sbi:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().M(0,q.gdd())
s=q.c
if(s!=null)s.gm().l(0,q.gdd())
r=new D.v("shape",p,q.c)
r.b=!0
q.bd(r)}},
ad:function(a,b){var s
for(s=this.y.a,s=new J.R(s,s.length);s.t();)s.d.ad(0,b)},
a6:function(a){var s,r=this,q=a.dx
q.a.push(q.gU(q))
q.av()
a.c0(r.f)
q=a.dy
s=(q&&C.a).gbT(q)
if(s!=null&&r.d!=null)s.df(a,r)
for(q=r.y.a,q=new J.R(q,q.length);q.t();)q.d.a6(a)
a.c_()
a.dx.as()},
bd:function(a){var s=this.z
if(s!=null)s.w(a)},
Z:function(){return this.bd(null)},
de:function(a){this.e=null
this.bd(a)},
fG:function(){return this.de(null)},
dc:function(a){this.bd(a)},
fD:function(){return this.dc(null)},
fC:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gda(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bT()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.Z()},
fF:function(a,b){var s,r
for(s=b.gK(b),r=this.gda();s.t();)s.gC(s).gm().M(0,r)
this.Z()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bf.prototype={
i:function(a){return this.b}}
E.bu.prototype={
i:function(a){return this.b}}
E.er.prototype={}
E.hs.prototype={
dA:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a4(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.c6()
s.a=[]
s.gm().l(0,new E.ht(r))
r.cy=s
s=new O.c6()
s.a=[]
s.gm().l(0,new E.hu(r))
r.db=s
s=new O.c6()
s.a=[]
s.gm().l(0,new E.hv(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.r(t.G)},
gfP:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gU(q)
s=r.db
s=r.z=q.n(0,s.gU(s))
q=s}return q},
c0:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbT(s):a)},
c_:function(){var s=this.dy
if(s.length>1)s.pop()},
cD:function(a){var s=a.b
if(s.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.fj(0,s))throw H.c(P.m('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.k(0,s,a)}}
E.ht.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hu.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hv.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.dR.prototype={
cd:function(a){this.dg()},
cc:function(){return this.cd(null)},
gft:function(){var s,r=this,q=Date.now(),p=C.d.X(P.jH(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a4(q,!1)
return s/p},
ct:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.n()
if(typeof p!=="number")return H.o(p)
s=C.c.bR(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.n()
r=C.c.bR(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.k2(C.i,q.gfT())}},
dg:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.v.dU(s)
r=W.ks(new E.hV(this),t.H)
r.toString
C.v.eX(s,r)}},
fR:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.ct()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a4(p,!1)
q.y=P.jH(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.av()
p=q.db
C.a.sj(p.a,0)
p.av()
p=q.dx
C.a.sj(p.a,0)
p.av()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.a6(n.e)}}catch(o){s=H.fi(o)
r=H.jr(o)
P.jw("Error: "+H.d(s))
P.jw("Stack: "+H.d(r))
throw H.c(s)}}}
E.hV.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fR()}}}
Z.ee.prototype={}
Z.ft.prototype={
V:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fi(q)
r=P.m('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.ef.prototype={}
Z.bK.prototype={
ap:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
V:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].V(a)},
aZ:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a6:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.Z(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(o,", ")+"\nAttrs:   "+C.a.p(p,", ")}}
Z.bX.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dy(this.c))+"'")+"]"}}
Z.aG.prototype={
gc4:function(a){var s=this.a,r=(s&$.ag().a)!==0?3:0
if((s&$.aP().a)!==0)r+=3
if((s&$.aO().a)!==0)r+=3
if((s&$.aQ().a)!==0)r+=2
if((s&$.bc().a)!==0)r+=3
if((s&$.cM().a)!==0)r+=3
if((s&$.cN().a)!==0)r+=4
if((s&$.bI().a)!==0)++r
return(s&$.aN().a)!==0?r+4:r},
fg:function(a){var s,r=$.ag(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bc()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cN()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aN()
if((q&r.a)!==0)if(s===a)return r
return $.kZ()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aG))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ag().a)!==0)s.push("Pos")
if((r&$.aP().a)!==0)s.push("Norm")
if((r&$.aO().a)!==0)s.push("Binm")
if((r&$.aQ().a)!==0)s.push("Txt2D")
if((r&$.bc().a)!==0)s.push("TxtCube")
if((r&$.cM().a)!==0)s.push("Clr3")
if((r&$.cN().a)!==0)s.push("Clr4")
if((r&$.bI().a)!==0)s.push("Weight")
if((r&$.aN().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.fu.prototype={}
D.bT.prototype={
l:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
M:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.I(q,b)
if(q===!0){q=r.a
s=(q&&C.a).M(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.I(q,b)
if(q===!0){q=r.b
s=(q&&C.a).M(q,b)||s}return s},
w:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.N()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.D(P.j8(s,!0),new D.fM(o))
s=p.b
if(s!=null){p.b=[]
C.a.D(s,new D.fN(o))}return!0},
cR:function(){return this.w(null)},
at:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.w(s)}}}}
D.fM.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.fN.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.N.prototype={}
D.aj.prototype={}
D.ak.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cV.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.da.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fY.prototype={
fL:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fH:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.c3.prototype={}
X.h1.prototype={
aN:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.n()
s=b.b
r=o.ch
if(typeof s!=="number")return s.n()
q=new V.a0(m.a+l*k,m.b+s*r)
r=o.a.gaB()
p=new X.bq(a,V.aA(),o.x,r,q)
p.b=!0
o.z=new P.a4(n,!1)
o.x=q
return p},
bZ:function(a,b){this.r=a.a
return!1},
aU:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dm()
if(typeof s!=="number")return s.ae()
this.r=(s&~r)>>>0
return!1},
aT:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.aN(a,b))
return!0},
fM:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaB()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.n()
o=a.b
n=m.cy
if(typeof o!=="number")return o.n()
r=new X.br(new V.X(q*p,o*n),s,r)
r.b=!0
l.w(r)
return!0},
es:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.c3(c,p.a.gaB(),b)
q.b=!0
r.w(q)
p.y=new P.a4(s,!1)
p.x=V.aA()}}
X.a6.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a6))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bq.prototype={}
X.hn.prototype={
bp:function(a,b,c){var s=this,r=new P.a4(Date.now(),!1),q=s.a.gaB(),p=new X.bq(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
bZ:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.w(this.bp(a,b,!0))
return!0},
aU:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dm()
if(typeof r!=="number")return r.ae()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.w(s.bp(a,b,!0))
return!0},
aT:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.bp(a,b,!1))
return!0},
fN:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaB()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.n()
p=a.b
o=n.ch
if(typeof p!=="number")return p.n()
s=new X.br(new V.X(r*q,p*o),s,b)
s.b=!0
m.w(s)
return!0},
gcQ:function(){var s=this.b
return s==null?this.b=D.x():s},
gbh:function(){var s=this.c
return s==null?this.c=D.x():s},
gd9:function(){var s=this.d
return s==null?this.d=D.x():s}}
X.br.prototype={}
X.dx.prototype={}
X.ce.prototype={}
X.hY.prototype={
aN:function(a,b){var s=this,r=new P.a4(Date.now(),!1),q=a.length>0?a[0]:V.aA(),p=s.a.gaB(),o=new X.ce(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
fK:function(a){var s=this.b
if(s==null)return!1
s.w(this.aN(a,!0))
return!0},
fI:function(a){var s=this.c
if(s==null)return!1
s.w(this.aN(a,!0))
return!0},
fJ:function(a){var s=this.d
if(s==null)return!1
s.w(this.aN(a,!1))
return!0}}
X.eb.prototype={
gaB:function(){var s=this.a,r=C.h.gcL(s).c
r.toString
s=C.h.gcL(s).d
s.toString
return V.jX(0,0,r,s)},
cl:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.da(s,new X.a6(r,a.altKey,a.shiftKey))},
aA:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a6(r,a.altKey,a.shiftKey)},
bB:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a6(r,a.altKey,a.shiftKey)},
an:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a0()
if(typeof o!=="number")return H.o(o)
s=r.top
if(typeof p!=="number")return p.a0()
if(typeof s!=="number")return H.o(s)
return new V.a0(q-o,p-s)},
aO:function(a){return new V.X(a.movementX,a.movementY)},
bz:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=C.c.ag(p.pageX)
C.c.ag(p.pageY)
n=k.left
if(typeof n!=="number")return H.o(n)
C.c.ag(p.pageX)
m=C.c.ag(p.pageY)
l=k.top
if(typeof l!=="number")return H.o(l)
j.push(new V.a0(o-n,m-l))}return j},
ak:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.cV(s,new X.a6(r,a.altKey,a.shiftKey))},
bq:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a0()
if(typeof n!=="number")return H.o(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a0()
if(typeof p!=="number")return H.o(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.o(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.o(p)
p=r<p}else p=!1
return p},
em:function(a){this.f=!0},
ea:function(a){this.f=!1},
eg:function(a){if(this.f&&this.bq(a))a.preventDefault()},
eq:function(a){var s
if(!this.f)return
s=this.cl(a)
this.b.fL(s)},
eo:function(a){var s
if(!this.f)return
s=this.cl(a)
this.b.fH(s)},
ev:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aA(a)
if(p.x){s=p.ak(a)
r=p.aO(a)
if(p.d.bZ(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ak(a)
q=p.an(a)
if(p.c.bZ(s,q))a.preventDefault()},
ez:function(a){var s,r,q,p=this
p.aA(a)
s=p.ak(a)
if(p.x){r=p.aO(a)
if(p.d.aU(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aU(s,q))a.preventDefault()},
ek:function(a){var s,r,q,p=this
if(!p.bq(a)){p.aA(a)
s=p.ak(a)
if(p.x){r=p.aO(a)
if(p.d.aU(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aU(s,q))a.preventDefault()}},
ex:function(a){var s,r,q,p=this
p.aA(a)
s=p.ak(a)
if(p.x){r=p.aO(a)
if(p.d.aT(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aT(s,q))a.preventDefault()},
ei:function(a){var s,r,q,p=this
if(!p.bq(a)){p.aA(a)
s=p.ak(a)
if(p.x){r=p.aO(a)
if(p.d.aT(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aT(s,q))a.preventDefault()}},
eB:function(a){var s,r,q=this
q.aA(a)
s=new V.X((a&&C.u).gfn(a),C.u.gfo(a)).n(0,q.Q)
if(q.x){if(q.d.fM(s))a.preventDefault()
return}if(q.r)return
r=q.an(a)
if(q.c.fN(s,r))a.preventDefault()},
eD:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ak(q.y)
r=q.an(q.y)
q.d.es(s,r,p)}},
eT:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bB(a)
s=r.bz(a)
if(r.e.fK(s))a.preventDefault()},
eP:function(a){var s
this.bB(a)
s=this.bz(a)
if(this.e.fI(s))a.preventDefault()},
eR:function(a){var s
this.bB(a)
s=this.bz(a)
if(this.e.fJ(s))a.preventDefault()}}
D.b_.prototype={}
D.c1.prototype={
ce:function(a){var s=this.y
if(s!=null)s.w(a)},
cq:function(a){var s=this.z
if(s!=null)s.w(a)},
er:function(){return this.cq(null)},
eF:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(q==null||this.dP(q))return!1}return!0},
e4:function(a,b){var s,r,q,p
for(s=b.length,r=this.gcp(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
p.gm().l(0,r)}s=new D.aj()
s.b=!0
this.ce(s)},
eJ:function(a,b){var s,r,q
for(s=b.gK(b),r=this.gcp();s.t();){q=s.gC(s)
C.a.M(this.e,q)
q.gm().M(0,r)}s=new D.ak()
s.b=!0
this.ce(s)},
dP:function(a){var s=C.a.I(this.e,a)
return s}}
V.S.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aw.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aw))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.fK.prototype={}
V.dg.prototype={
a2:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dg))return!1
s=b.a
$.w().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bH([o.a,o.d,o.r],3,0),m=V.bH([o.b,o.e,o.x],3,0),l=V.bH([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.e(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.e(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.e(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.e(n,1)
p=" "+n[1]+", "
if(1>=r)return H.e(m,1)
p=p+m[1]+", "
if(1>=q)return H.e(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.e(n,2)
k=" "+n[2]+", "
if(2>=r)return H.e(m,2)
k=k+m[2]+", "
if(2>=q)return H.e(l,2)
return p+(k+l[2]+"]")}}
V.bo.prototype={
a2:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
bS:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.w().toString
if(Math.abs(b3-0)<1e-9)return V.bp()
s=1/b3
r=-l
q=-a2
return V.ao((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
n:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ao(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
aY:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.O(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bo))return!1
s=b.a
$.w().toString
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
v:function(a){var s,r,q,p,o,n=this,m=V.bH([n.a,n.e,n.y,n.cx],3,0),l=V.bH([n.b,n.f,n.z,n.cy],3,0),k=V.bH([n.c,n.r,n.Q,n.db],3,0),j=V.bH([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.e(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.e(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.e(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.e(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.e(m,1)
o=o+m[1]+", "
if(1>=r)return H.e(l,1)
o=o+l[1]+", "
if(1>=q)return H.e(k,1)
o=o+k[1]+", "
if(1>=p)return H.e(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.e(m,2)
s=s+m[2]+", "
if(2>=r)return H.e(l,2)
s=s+l[2]+", "
if(2>=q)return H.e(k,2)
s=s+k[2]+", "
if(2>=p)return H.e(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.e(m,3)
o=o+m[3]+", "
if(3>=r)return H.e(l,3)
o=o+l[3]+", "
if(3>=q)return H.e(k,3)
o=o+k[3]+", "
if(3>=p)return H.e(j,3)
return s+(o+j[3]+"]")},
E:function(){return this.v("")}}
V.a0.prototype={
W:function(a){return new V.X(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.O.prototype={
a0:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aB.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aB))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.dA.prototype={
ga5:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dA))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.X.prototype={
bU:function(a){return Math.sqrt(this.Y(this))},
Y:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.o(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.o(r)
return q*p+s*r},
n:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.n()
if(typeof b!=="number")return H.o(b)
s=this.b
if(typeof s!=="number")return s.n()
return new V.X(r*b,s*b)},
S:function(a,b){var s,r
$.w().toString
if(Math.abs(b-0)<1e-9){s=$.k6
return s==null?$.k6=new V.X(0,0):s}s=this.a
if(typeof s!=="number")return s.S()
r=this.b
if(typeof r!=="number")return r.S()
return new V.X(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
r=this.a
$.w().toString
if(typeof s!=="number")return s.a0()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a0()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.z.prototype={
bU:function(a){return Math.sqrt(this.Y(this))},
Y:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bV:function(a,b){return new V.z(V.jt(this.a,a.a,b),V.jt(this.b,a.b,b),V.jt(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.Y(s))
if(r===1)return s
return s.S(0,r)},
aR:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.z(s*r-q*p,q*o-n*r,n*p-s*o)},
u:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.z(-this.a,-this.b,-this.c)},
S:function(a,b){$.w().toString
if(Math.abs(b-0)<1e-9)return V.ec()
return new V.z(this.a/b,this.b/b,this.c/b)},
d8:function(){$.w().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.z))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.fw.prototype={
bj:function(a){var s=V.nx(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
G:function(a){var s=this.y
if(s!=null)s.w(a)},
sc1:function(a,b){},
sbW:function(a){var s,r=this,q=r.b
$.w().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bj(s)}q=new D.v("maximumLocation",q,r.b)
q.b=!0
r.G(q)}},
sbY:function(a){var s,r=this,q=r.c
$.w().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bj(s)}q=new D.v("minimumLocation",q,r.c)
q.b=!0
r.G(q)}},
sa4:function(a,b){var s,r=this
b=r.bj(b)
s=r.d
$.w().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.v("location",s,b)
s.b=!0
r.G(s)}},
sbX:function(a){var s,r,q=this,p=q.e
$.w().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.v("maximumVelocity",p,a)
p.b=!0
q.G(p)}},
sL:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.w().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.v("velocity",r,a)
r.b=!0
s.G(r)}},
sbI:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.w().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.v("dampening",s,a)
s.b=!0
this.G(s)}},
ad:function(a,b){var s,r,q,p=this,o=p.f
$.w().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa4(0,p.d+s*b)
o=p.x
$.w().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sL(s)}}}
U.bN.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
aG:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bN))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.bk.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
G:function(a){var s=this.e
if(s!=null)s.w(a)},
a1:function(){return this.G(null)},
e2:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaz(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.G(s)},
eH:function(a,b){var s,r
for(s=b.gK(b),r=this.gaz();s.t();)s.gC(s).gm().M(0,r)
s=new D.ak()
s.b=!0
this.G(s)},
aG:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a7()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.R(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.aG(0,b,c)
if(r!=null)s=s==null?r:r.n(0,s)}}q.f=s==null?V.bp():s
p=q.e
if(p!=null)p.at(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bk))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.H(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iP:1}
U.P.prototype={}
U.cf.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.x():s},
G:function(a){var s=this.cy
if(s!=null)s.w(a)},
a1:function(){return this.G(null)},
aP:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gcQ().l(0,s.gbr())
s.a.c.gd9().l(0,s.gbt())
s.a.c.gbh().l(0,s.gbv())
return!0},
bs:function(a){var s=this
if(!J.H(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bu:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.W(a.d)
s=s.Y(s)
r=l.r
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.W(a.d).n(0,2).S(0,s.ga5())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.n()
q=l.e
if(typeof q!=="number")return H.o(q)
r.sL(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.W(q).n(0,2).S(0,s.ga5())
r=l.b
o=p.a
if(typeof o!=="number")return o.H()
n=l.e
if(typeof n!=="number")return H.o(n)
m=l.z
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
l.b.sL(0)
l.Q=a.z.W(q).n(0,2).S(0,s.ga5())}l.a1()},
bw:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.Y(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.n()
q=p.e
if(typeof q!=="number")return H.o(q)
s.sL(r*10*q)
p.a1()}},
aG:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a7()
if(o<n){p.ch=n
s=b.y
p.b.ad(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.ao(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iP:1}
U.cg.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.x():s},
G:function(a){var s=this.fx
if(s!=null)s.w(a)},
a1:function(){return this.G(null)},
aP:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gcQ().l(0,q.gbr())
q.a.c.gd9().l(0,q.gbt())
q.a.c.gbh().l(0,q.gbv())
s=q.a.d
r=s.f
s=r==null?s.f=D.x():r
s.l(0,q.gdW())
s=q.a.d
r=s.d
s=r==null?s.d=D.x():r
s.l(0,q.gdY())
s=q.a.e
r=s.b
s=r==null?s.b=D.x():r
s.l(0,q.gfa())
s=q.a.e
r=s.d
s=r==null?s.d=D.x():r
s.l(0,q.gf8())
s=q.a.e
r=s.c
s=r==null?s.c=D.x():r
s.l(0,q.gf6())
return!0},
aj:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.H()
s=-s}if(this.r){if(typeof r!=="number")return r.H()
r=-r}return new V.X(s,r)},
bs:function(a){var s=this
t.d.a(a)
if(!J.H(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bu:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.W(a.d)
s=s.Y(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aj(a.y.W(a.d).n(0,2).S(0,s.ga5()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.H()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sL(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.H()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sL(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aj(r.W(q).n(0,2).S(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.H()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.H()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa4(0,-n*o+r)
l.b.sL(0)
l.c.sL(0)
l.dx=l.aj(a.z.W(q).n(0,2).S(0,s.ga5()))}l.a1()},
bw:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Y(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.H()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sL(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.H()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sL(-r*10*s)
p.a1()}},
dX:function(a){var s=this
if(t.x.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
dZ:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.H(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aj(r.W(q).n(0,2).S(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.H()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.H()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa4(0,-n*o+r)
l.b.sL(0)
l.c.sL(0)
l.dx=l.aj(a.z.W(q).n(0,2).S(0,s.ga5()))
l.a1()},
fb:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
f9:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.W(a.d)
s=s.Y(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aj(a.y.W(a.d).n(0,2).S(0,s.ga5()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.H()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sL(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.H()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sL(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aj(r.W(q).n(0,2).S(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.H()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.H()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa4(0,-n*o+r)
l.b.sL(0)
l.c.sL(0)
l.dx=l.aj(a.z.W(q).n(0,2).S(0,s.ga5()))}l.a1()},
f7:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Y(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.H()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sL(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.H()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sL(-r*10*s)
p.a1()}},
aG:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a7()
if(o<n){p.dy=n
s=b.y
p.c.ad(0,s)
p.b.ad(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.ao(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.n(0,V.ao(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iP:1}
U.ch.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
G:function(a){var s=this.r
if(s!=null)s.w(a)},
aP:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.x():r
r=p.ge_()
s.l(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.x():q).l(0,r)
return!0},
e0:function(a){var s,r,q,p,o=this
if(!J.H(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.n()
p=s+r*q
if(s!==p){o.d=p
s=new D.v("zoom",s,p)
s.b=!0
o.G(s)}},
aG:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ao(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iP:1}
M.bL.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
R:function(a){var s=this.r
if(s!=null)s.w(a)},
aL:function(){return this.R(null)},
eL:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.R(s)},
eN:function(a,b){var s,r
for(s=b.gK(b),r=this.gP();s.t();)s.gC(s).gm().M(0,r)
s=new D.ak()
s.b=!0
this.R(s)},
a6:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.R(s,s.length);s.t();){r=s.d
if(r!=null)r.a6(a)}q.f=!1},
$iaa:1}
M.bO.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
R:function(a){var s=this.r
if(s!=null)s.w(a)},
aL:function(){return this.R(null)},
saQ:function(a){var s,r,q=this
if(a==null)a=new X.fU()
s=q.b
if(s!==a){if(s!=null)s.gm().M(0,q.gP())
r=q.b
q.b=a
a.gm().l(0,q.gP())
s=new D.v("camera",r,q.b)
s.b=!0
q.R(s)}},
saV:function(a,b){var s,r,q=this
if(b==null)b=X.j2(null)
s=q.c
if(s!==b){if(s!=null)s.gm().M(0,q.gP())
r=q.c
q.c=b
b.gm().l(0,q.gP())
s=new D.v("target",r,q.c)
s.b=!0
q.R(s)}},
saW:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().M(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gP())
q=new D.v("technique",s,r.d)
q.b=!0
r.R(q)}},
a6:function(a){var s=this
a.c0(s.d)
s.c.V(a)
s.b.V(a)
s.e.ad(0,a)
s.e.a6(a)
s.b.aZ(a)
s.c.toString
a.c_()},
$iaa:1}
M.bS.prototype={
R:function(a){var s=this.y
if(s!=null)s.w(a)},
aL:function(){return this.R(null)},
ec:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bT()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.R(s)},
ee:function(a,b){var s,r
for(s=b.gK(b),r=this.gP();s.t();)s.gC(s).gm().M(0,r)
s=new D.ak()
s.b=!0
this.R(s)},
saQ:function(a){var s,r,q=this
if(a==null)a=X.jR(null)
s=q.b
if(s!==a){if(s!=null)s.gm().M(0,q.gP())
r=q.b
q.b=a
a.gm().l(0,q.gP())
s=new D.v("camera",r,q.b)
s.b=!0
q.R(s)}},
saV:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().M(0,r.gP())
s=r.c
r.c=b
b.gm().l(0,r.gP())
q=new D.v("target",s,r.c)
q.b=!0
r.R(q)}},
saW:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().M(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gP())
q=new D.v("technique",s,r.d)
q.b=!0
r.R(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
a6:function(a){var s,r=this
a.c0(r.d)
r.c.V(a)
r.b.V(a)
s=r.d
if(s!=null)s.ad(0,a)
for(s=r.e.a,s=new J.R(s,s.length);s.t();)s.d.ad(0,a)
for(s=r.e.a,s=new J.R(s,s.length);s.t();)s.d.a6(a)
r.b.toString
a.cy.as()
a.db.as()
r.c.toString
a.c_()},
$iaa:1}
M.aa.prototype={}
A.fm.prototype={}
A.fn.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fq:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cP:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.T.prototype={
gah:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.T))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h3.prototype={
dz:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.b6("")
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
A.mM(c5,s)
A.mO(c5,s)
A.mN(c5,s)
A.mQ(c5,s)
A.mR(c5,s)
A.mP(c5,s)
A.mS(c5,s)
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
c0.d5(0,q.charCodeAt(0)==0?q:q,A.mL(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.B(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.B(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.B(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.B(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.B(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.B(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.B(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.B(0,"colorMat"))
c0.r1=[]
q=c5.aE
if(q>0){c0.k4=c0.y.B(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.n(P.m(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.B(0,"emissionClr"))
if(r.b)c0.rx=t.c.a(c0.y.B(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.B(0,"ambientClr"))
if(r.b)c0.x2=t.c.a(c0.y.B(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.B(0,"diffuseClr"))
if(r.b)c0.aE=t.c.a(c0.y.B(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.b9=t.r.a(c0.y.B(0,"invDiffuseClr"))
if(r.b)c0.cT=t.c.a(c0.y.B(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(q||r.b||!1){c0.cW=t.n.a(c0.y.B(0,"shininess"))
if(q)c0.cU=t.r.a(c0.y.B(0,"specularClr"))
if(r.b)c0.cV=t.c.a(c0.y.B(0,"specularTxt"))}if(c5.f.b)c0.cX=t.c.a(c0.y.B(0,"bumpTxt"))
if(c5.db){c0.cY=t.Q.a(c0.y.B(0,"envSampler"))
r=c5.r
if(r.a)c0.cZ=t.r.a(c0.y.B(0,"reflectClr"))
if(r.b)c0.d_=t.c.a(c0.y.B(0,"reflectTxt"))
r=c5.x
q=r.a
if(q||r.b||!1){c0.d0=t.n.a(c0.y.B(0,"refraction"))
if(q)c0.d1=t.r.a(c0.y.B(0,"refractClr"))
if(r.b)c0.d2=t.c.a(c0.y.B(0,"refractTxt"))}}r=c5.y
if(r.a)c0.d3=t.n.a(c0.y.B(0,"alpha"))
if(r.b)c0.d4=t.c.a(c0.y.B(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bJ=new H.r(t.J)
c0.bK=new H.r(t.t)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="barLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.n(P.m(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.ae()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.n(P.m(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.n(P.m(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.n(P.m(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.e_(k,d,c,a3,a2,a1))}c0.bK.k(0,h,f)
n=c0.bJ
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.bL=new H.r(t.J)
c0.bM=new H.r(t.L)
for(p=t.r,o=t.c,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.ae()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.n(P.m(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.e0(a7,a6,a5,k,d,a8))}c0.bM.k(0,h,f)
n=c0.bL
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.bN=new H.r(t.J)
c0.bO=new H.r(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.d(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.n(P.m(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.n(P.m(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.ae()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.e3(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.bO.k(0,h,f)
a4=c0.bN
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
a4.k(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.bP=new H.r(t.J)
c0.bQ=new H.r(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.c,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.d(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.n(P.m(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.n(P.m(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.n(P.m(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.ae()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.n(P.m(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.n(P.m(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.n(P.m(c2+a9+c3))
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
if(a==null)H.n(P.m(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.n(P.m(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.e6(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.bQ.k(0,h,f)
e=c0.bP
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
e.k(0,h,k)}}}},
af:function(a,b){if(b!=null&&b.d)a.dn(b)},
f0:function(a,b){}}
A.fr.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.fC.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hq.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.hH.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.h6.prototype={
i:function(a){return this.aS}}
A.e_.prototype={}
A.e0.prototype={}
A.e3.prototype={}
A.e6.prototype={}
A.dE.prototype={
c9:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
d5:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cm(b,35633)
p.f=p.cm(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.n(P.m("Failed to link shader: "+H.d(q)))}p.f1()
p.f3()},
V:function(a){a.a.useProgram(this.r)
this.x.fq()},
cm:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.m("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
f1:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fm(n,r.name,q))}p.x=new A.fn(o)},
f3:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fm(r.type,r.size,r.name,q))}p.y=new A.i8(o)},
ax:function(a,b,c){var s=this.a
if(a===1)return new A.dX(s,b,c)
else return A.jd(s,this.r,b,a,c)},
dR:function(a,b,c){var s=this.a
if(a===1)return new A.e4(s,b,c)
else return A.jd(s,this.r,b,a,c)},
dS:function(a,b,c){var s=this.a
if(a===1)return new A.e5(s,b,c)
else return A.jd(s,this.r,b,a,c)},
b3:function(a,b){return new P.eu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fm:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ax(b,c,d)
case 5121:return s.ax(b,c,d)
case 5122:return s.ax(b,c,d)
case 5123:return s.ax(b,c,d)
case 5124:return s.ax(b,c,d)
case 5125:return s.ax(b,c,d)
case 5126:return new A.dW(s.a,c,d)
case 35664:return new A.i4(s.a,c,d)
case 35665:return new A.dY(s.a,c,d)
case 35666:return new A.dZ(s.a,c,d)
case 35667:return new A.i5(s.a,c,d)
case 35668:return new A.i6(s.a,c,d)
case 35669:return new A.i7(s.a,c,d)
case 35674:return new A.i9(s.a,c,d)
case 35675:return new A.e1(s.a,c,d)
case 35676:return new A.e2(s.a,c,d)
case 35678:return s.dR(b,c,d)
case 35680:return s.dS(b,c,d)
case 35670:throw H.c(s.b3("BOOL",c))
case 35671:throw H.c(s.b3("BOOL_VEC2",c))
case 35672:throw H.c(s.b3("BOOL_VEC3",c))
case 35673:throw H.c(s.b3("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.hG.prototype={}
A.i2.prototype={}
A.i8.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
B:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.E()},
E:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.dX.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.i5.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.i6.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.i3.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.dW.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.dY.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.dZ.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.e1.prototype={
a8:function(a){var s=new Float32Array(H.cE(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.e2.prototype={
a8:function(a){var s=new Float32Array(H.cE(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.e4.prototype={
dn:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.e5.prototype={
dq:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.iE.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bV(q.b,b).bV(q.d.bV(q.c,b),c)
q=new V.O(p.a,p.b,p.c)
if(!J.H(a.f,q)){a.f=q
q=a.a
if(q!=null)q.Z()}a.sfX(p.J())
q=1-b
s=1-c
s=new V.aB(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.H(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.Z()}}}
F.fO.prototype={
dK:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.ec()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.d8())return p
return q.J()},
dN:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a0(0,n)
q=new V.z(o.a,o.b,o.c).J()
o=r.a0(0,n)
return q.aR(new V.z(o.a,o.b,o.c).J()).J()},
bF:function(){var s,r=this
if(r.d!=null)return!0
s=r.dK()
if(s==null){s=r.dN()
if(s==null)return!1}r.d=s
r.a.a.Z()
return!0},
dJ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.ec()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.d8())return p
return q.J()},
dM:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.w().toString
if(Math.abs(p-0)<1e-9){j=b.a0(0,e)
o=new V.z(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.H(0)}else{n=(j-s.b)/p
j=b.a0(0,e)
j=new V.O(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a0(0,h)
o=new V.z(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.H(0)}j=l.d
if(j!=null){m=j.J()
o=m.aR(o).J().aR(m).J()}return o},
bD:function(){var s,r=this
if(r.e!=null)return!0
s=r.dJ()
if(s==null){s=r.dM()
if(s==null)return!1}r.e=s
r.a.a.Z()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.ab(J.Z(q.e),0)+", "+C.b.ab(J.Z(r.b.e),0)+", "+C.b.ab(J.Z(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
E:function(){return this.v("")}}
F.fZ.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.ab(J.Z(s.e),0)+", "+C.b.ab(J.Z(this.b.e),0)},
E:function(){return this.v("")}}
F.hp.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.ab(J.Z(s.e),0)},
E:function(){return this.v("")}}
F.hz.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
fA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.T()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){p=e[q]
f.a.l(0,p.fl())}f.a.T()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
l=n[m]
f.b.a.a.l(0,l)
m=new F.hp()
if(l.a==null)H.n(P.m("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.w(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.c.a
n.a.l(0,j)
n.a.l(0,i)
F.lm(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
g=n[m]
m=f.d.a
m.a.l(0,j)
m.a.l(0,i)
m.a.l(0,g)
F.bU(j,i,g)}e=f.e
if(e!=null)e.at(0)},
ao:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ao()||!1
if(!r.a.ao())s=!1
q=r.e
if(q!=null)q.at(0)
return s},
cJ:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.ag().a)!==0?1:0
if((s&$.aP().a)!==0)++r
if((s&$.aO().a)!==0)++r
if((s&$.aQ().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.cM().a)!==0)++r
if((s&$.cN().a)!==0)++r
if((s&$.bI().a)!==0)++r
if((s&$.aN().a)!==0)++r
q=a5.gc4(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fg(l)
j=k.gc4(k)
n[l]=new Z.ft(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].fw(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cE(o)),35044)
s.bindBuffer(a2,null)
b=new Z.bK(new Z.ee(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.T()
a.push(h.e)}a0=Z.je(s,34963,a)
b.b.push(new Z.bX(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.T()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.T()
a.push(h.e)}a0=Z.je(s,34963,a)
b.b.push(new Z.bX(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.T()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.T()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.T()
a.push(h.e)}a0=Z.je(s,34963,a)
b.b.push(new Z.bX(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.v(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.v(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.v(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.v(r))}return C.a.p(q,"\n")},
Z:function(){var s=this.e
if(s!=null)s.w(null)}}
F.hA.prototype={
fe:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.l(0,n)
s.a.l(0,q)
s.a.l(0,p)
o.push(F.bU(n,q,p))}return o},
ff:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.e(c,q)
k=c[q];++q
if(q>=l)return H.e(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.e(c,i)
h=c[i]
if(r<0||r>=l)return H.e(c,r)
g=c[r]
l=s.a
if(n){l.l(0,k)
s.a.l(0,j)
s.a.l(0,h)
f.push(F.bU(k,j,h))
s.a.l(0,k)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.bU(k,h,g))}else{l.l(0,j)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.bU(j,h,g))
s.a.l(0,j)
s.a.l(0,g)
s.a.l(0,k)
f.push(F.bU(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
ao:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bF())q=!1
return q},
bE:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bD())q=!1
return q},
i:function(a){return this.E()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(a))
return C.a.p(p,"\n")},
E:function(){return this.v("")}}
F.hB.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.E()},
v:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].v(a+(""+s+". ")))}return C.a.p(q,"\n")},
E:function(){return this.v("")}}
F.hC.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.E()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(a))
return C.a.p(p,"\n")},
E:function(){return this.v("")}}
F.id.prototype={
bH:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.ie(s.cx,p,m,r,q,o,n,a,l)},
fl:function(){return this.bH(null)},
sfX:function(a){var s
if(!J.H(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Z()}},
fw:function(a){var s,r=this
if(a.q(0,$.ag())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.aP())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.aO())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.aQ())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.q(0,$.bc())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.cM())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.cN())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.q(0,$.bI()))return[r.ch]
else if(a.q(0,$.aN())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bF:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ec()
r.d.D(0,new F.io(q))
r.r=q.a.J()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.at(0)}return!0},
bD:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ec()
r.d.D(0,new F.im(q))
r.x=q.a.J()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.at(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.ab(J.Z(q.e),0))
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
o.push(V.A(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.p(o,", ")
return a+"{"+r+"}"},
E:function(){return this.v("")}}
F.io.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.im.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.ig.prototype={
T:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Z()
return!0},
b5:function(a,b,c,d,e,f){var s=F.ie(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
ao:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bF()
return!0},
bE:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bD()
return!0},
fi:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.z==null){o=p.r.J()
if(!J.H(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}}return!0},
i:function(a){return this.E()},
v:function(a){var s,r,q,p
this.T()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p)s.push(r[p].v(a))
return C.a.p(s,"\n")},
E:function(){return this.v("")}}
F.ih.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){var s=this
C.a.D(s.b,b)
C.a.D(s.c,new F.ii(s,b))
C.a.D(s.d,new F.ij(s,b))},
i:function(a){return this.E()},
E:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(""))
return C.a.p(p,"\n")}}
F.ii.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.ij.prototype={
$1:function(a){var s=this.a
if(!J.H(a.a,s)&&!J.H(a.b,s))this.b.$1(a)}}
F.ik.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.E()},
E:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(""))
return C.a.p(p,"\n")}}
F.il.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.E()},
E:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].v(""))
return C.a.p(p,"\n")}}
O.df.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.x():s},
N:function(a){var s=this.fr
if(s!=null)s.w(a)},
aM:function(){return this.N(null)},
cs:function(a){this.a=null
this.N(a)},
eZ:function(){return this.cs(null)},
e6:function(a,b){var s=new D.aj()
s.b=!0
this.N(s)},
e8:function(a,b){var s=new D.ak()
s.b=!0
this.N(s)},
ck:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.r(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.ga3()
n=d.h(0,p.ga3())
d.k(0,o,n==null?1:n)}m=[]
d.D(0,new O.ha(f,m))
C.a.aJ(m,new O.hb())
l=new H.r(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.ga3()
n=l.h(0,p.ga3())
l.k(0,o,n==null?1:n)}k=[]
l.D(0,new O.hc(f,k))
C.a.aJ(k,new O.hd())
j=new H.r(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.ga3()
n=j.h(0,p.ga3())
j.k(0,o,n==null?1:n)}i=[]
j.D(0,new O.he(f,i))
C.a.aJ(i,new O.hf())
h=new H.r(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.l)(e),++q){p=e[q]
r=p.ga3()
o=h.h(0,p.ga3())
h.k(0,r,o==null?1:o)}g=[]
h.D(0,new O.hg(f,g))
C.a.aJ(g,new O.hh())
e=C.d.X(f.e.a.length+3,4)
f.dy.toString
return A.lr(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a9:function(a,b){if(b!=null)if(!C.a.I(a,b)){b.a=a.length
a.push(b)}},
ad:function(a,b){var s
for(s=this.dx.a,s=new J.R(s,s.length);s.t();)C.f.ad(s.d,b)},
df:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ck()
s=b4.fr.h(0,b3.aS)
if(s==null){s=A.lq(b3,b4.a)
b4.cD(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.b9
b3=b5.e
if(!(b3 instanceof Z.bK))b3=b5.e=null
if(b3==null||!b3.d.q(0,q)){b3=r.k4
if(b3)b5.d.ao()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bE()
o.a.bE()
o=o.e
if(o!=null)o.at(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.fi()
n=n.e
if(n!=null)n.at(0)}l=b5.d.cJ(new Z.ef(b4.a),q)
l.ap($.ag()).e=b2.a.Q.c
if(b3)l.ap($.aP()).e=b2.a.cx.c
if(p)l.ap($.aO()).e=b2.a.ch.c
if(r.r2)l.ap($.aQ()).e=b2.a.cy.c
if(o)l.ap($.bc()).e=b2.a.db.c
if(r.ry)l.ap($.aN()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.V(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gU(p)
b3=b3.dy
b3.toString
b3.a8(p.a2(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gU(p)
o=b4.dx
o=b4.cx=p.n(0,o.gU(o))
p=o}b3=b3.fr
b3.toString
b3.a8(p.a2(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gfP()
o=b4.dx
o=b4.ch=p.n(0,o.gU(o))
p=o}b3=b3.fy
b3.toString
b3.a8(p.a2(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gU(p)
b3=b3.fx
b3.toString
b3.a8(p.a2(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a8(C.f.a2(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a8(C.f.a2(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a8(C.f.a2(p,!0))}if(r.aE>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.e(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.e(b3,i)
b3=b3[i]
h=new Float32Array(H.cE(p.a2(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.f.d)
b3=b2.a
p=b2.f.d
b3.af(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.r.d)
b3=b2.a
p=b2.r.d
b3.af(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.x.d)
b3=b2.a
p=b2.x.d
b3.af(b3.aE,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.b9
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.y.d)
b3=b2.a
p=b2.y.d
b3.af(b3.cT,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.cW
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cU
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.z.d)
b3=b2.a
p=b2.z.d
b3.af(b3.cV,p)}b3=r.z
if(b3.length>0){g=new H.r(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.ga3()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
b=J.cO(b2.a.bK.h(0,d),c)
n=e.gh2()
m=$.ap
n=n.aY(m==null?$.ap=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gh6()
m=$.ap
n=n.aY(m==null?$.ap=new V.O(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaC(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gcS()){n=e.gcE()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gcF()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gcG()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bJ.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gU(p)
a0=new H.r(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.ga3()
c=a0.h(0,d)
if(c==null)c=0
a0.k(0,d,c+1)
b=J.cO(b2.a.bM.h(0,d),c)
n=e.gcO(e)
n=new V.z(C.c.n(a.a,n.gb6(n))+C.c.n(a.b,n.gb7(n))+C.c.n(a.c,n.gb8()),C.c.n(a.e,n.gb6(n))+C.c.n(a.f,n.gb7(n))+C.c.n(a.r,n.gb8()),C.c.n(a.y,n.gb6(n))+C.c.n(a.z,n.gb7(n))+C.c.n(a.Q,n.gb8())).J()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.gaC(e)
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)
e.gac()
n=e.gcO(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbh()
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbf(e)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gac()
if(!C.a.I(k,n)){n.a=k.length
k.push(n)}n=e.gac()
m=n.gbc(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.bL.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gU(p)
a3=new H.r(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.ga3()
c=a3.h(0,d)
if(c==null)c=0
a3.k(0,d,c+1)
b=J.cO(b2.a.bO.h(0,d),c)
a4=a.n(0,e.gU(e))
n=e.gU(e)
m=$.ap
n=n.aY(m==null?$.ap=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.ap
n=a4.aY(n==null?$.ap=new V.O(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaC(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gac()
n=a4.bS(0)
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
h=new Float32Array(H.cE(new V.dg(m,a1,a2,a5,a6,a7,a8,a9,n).a2(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gac()
n=e.gac()
if(!C.a.I(k,n)){n.a=k.length
k.push(n)}n=e.gac()
m=n.gbc(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaI()
n=e.gdr()
m=b.x
m.toString
a1=n.gb6(n)
a2=n.gb7(n)
a5=n.gb8()
n=n.gfp()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaI()
if(!C.a.I(k,n)){n.a=k.length
k.push(n)}n=e.gaI()
m=n.gbc(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gcS()){n=e.gcE()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gcF()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gcG()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.bN.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gU(p)
b1=new H.r(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.ga3()
c=b1.h(0,d)
if(c==null)c=0
b1.k(0,d,c+1)
b=J.cO(b2.a.bQ.h(0,d),c)
n=e.gfO(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcO(e).J()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.aY(e.gfO(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaC(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gac()
n=e.gbh()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbf(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghg()
m=b.x
m.a.uniform1f(m.d,n)
n=e.ghh()
m=b.y
m.a.uniform1f(m.d,n)
e.gac()
n=e.gac()
if(!C.a.I(k,n)){n.a=k.length
k.push(n)}n=e.gac()
m=n.gbc(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaI()
n=e.gdr()
m=b.z
m.toString
a1=n.gb6(n)
a2=n.gb7(n)
a5=n.gb8()
n=n.gfp()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaI()
if(!C.a.I(k,n)){n.a=k.length
k.push(n)}n=e.gaI()
m=n.gbc(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gh5()){n=e.gh4()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.gh3()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gcS()){n=e.gcE()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gcF()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gcG()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.bP.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.b){b2.a9(k,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.af(b3.cX,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gU(p).bS(0)}b3=b3.id
b3.toString
b3.a8(p.a2(0,!0))}if(r.db){b2.a9(k,b2.ch)
b3=b2.a
p=b2.ch
b3.f0(b3.cY,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.cZ
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.af(b3.d_,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.d0
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.d1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.af(b3.d2,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.d3
p.a.uniform1f(p.d,n)}if(b3.b){b2.a9(k,b2.db.d)
p=b2.a
n=b2.db.d
p.af(p.d4,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(p=b4.a,i=0;i<k.length;++i){n=k[i]
if(!n.c&&n.d){n.c=!0
p.activeTexture(33984+n.a)
p.bindTexture(3553,n.b)}}n=b5.e
n.V(b4)
n.a6(b4)
n.aZ(b4)
if(!o||b3.b||!1)p.disable(3042)
for(i=0;i<k.length;++i){b3=k[i]
if(b3.c){b3.c=!1
p.activeTexture(33984+b3.a)
p.bindTexture(3553,null)}}b3=b2.a
b3.toString
p.useProgram(null)
b3.x.cP()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.ck().aS}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fr(a,C.d.X(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fC(a,C.d.X(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hq(a,C.d.X(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hH(a,C.d.X(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.h4.prototype={
am:function(){var s,r=this
r.c7()
s=r.f
$.w().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.v(r.b,s,1)
s.b=!0
r.a.N(s)}}}
O.c5.prototype={
N:function(a){return this.a.N(a)},
aM:function(){return this.N(null)},
am:function(){},
cw:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.am()
s=q.a
s.a=null
s.N(null)}}}
O.h5.prototype={}
O.an.prototype={
cv:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.v(q.b+".color",s,a)
r.b=!0
q.a.N(r)}},
am:function(){this.c7()
this.cv(new V.S(1,1,1))},
saC:function(a,b){this.cw(new A.T(!0,this.c.b,!1))
this.cv(b)}}
O.h7.prototype={}
O.h8.prototype={
am:function(){var s,r=this
r.c8()
s=r.ch
$.w().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.v(r.b+".refraction",s,1)
s.b=!0
r.a.N(s)}}}
O.h9.prototype={
am:function(){var s,r=this
r.c8()
s=r.ch
$.w().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
s=new D.v(r.b+".shininess",s,100)
s.b=!0
r.a.N(s)}}}
O.dF.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
N:function(a){var s=this.e
if(s!=null)s.w(a)},
aM:function(){return this.N(null)},
df:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.hG(r,l)
s.c9(r,l)
s.d5(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.cD(s)}m.a=s}if(b.e==null){r=b.d.cJ(new Z.ef(a.a),$.ag())
r.ap($.ag()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
if(!r.c&&r.d>=6){r.c=!0
q=a.a
q.activeTexture(33985)
q.bindTexture(34067,r.b)}}r=a.d
q=a.c
p=m.a
p.V(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.dq(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gU(q).bS(0)
p=p.db
p.toString
p.a8(q.a2(0,!0))
r=b.e
if(r instanceof Z.bK){r.V(a)
r.a6(a)
r.aZ(a)}else b.e=null
r=m.a
r.toString
q=a.a
q.useProgram(null)
r.x.cP()
r=m.c
if(r!=null)if(r.c){r.c=!1
q.activeTexture(33984+r.a)
q.bindTexture(34067,null)}}}
O.hN.prototype={}
T.hO.prototype={}
T.hP.prototype={}
T.hQ.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.x():s}}
T.hR.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s}}
T.hS.prototype={
fz:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.jK(a)
r=new T.hQ()
r.a=0
r.b=o
r.d=r.c=!1
W.L(s,"load",new T.hU(this,r,s,!1,o,!1,!1),!1)
return r},
ay:function(a,b,c,d,e,f){var s=W.jK(c);++this.d
W.L(s,"load",new T.hT(this,s,!1,b,!1,d,a),!1)},
cu:function(a,b,c){var s,r,q,p
b=V.jv(b)
s=V.jv(a.width)
r=V.jv(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.iY()
q.width=s
q.height=r
p=C.h.dk(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nb(p.getImageData(0,0,q.width,q.height))}}}
T.hU.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.cu(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.t.dh(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.cR()}++s.e}}
T.hT.prototype={
$1:function(a){var s=this,r=s.a,q=r.cu(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.t.dh(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.cR()}++r.e}}
X.iX.prototype={}
X.fS.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.x():s},
ai:function(a){var s=this.x
if(s!=null)s.w(a)},
V:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.o(s)
o=C.c.ag(p*s)
p=q.b
if(typeof r!=="number")return H.o(r)
n=C.c.ag(p*r)
p=C.c.ag(q.c*s)
a.c=p
q=C.c.ag(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.fU.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
V:function(a){var s
a.cy.be(V.bp())
s=V.bp()
a.db.be(s)},
aZ:function(a){a.cy.as()
a.db.as()}}
X.du.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.x():s},
ai:function(a){var s=this.f
if(s!=null)s.w(a)},
dG:function(){return this.ai(null)},
V:function(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=a.d,g=j.c,f=j.d,e=j.e,d=e-f,c=1/Math.tan(g*0.5),b=V.ao(-c/(i/h),0,0,0,0,c,0,0,0,0,e/d,-e*f/d,0,0,1,0)
a.cy.be(b)
i=$.jS
if(i==null){i=V.ls()
h=$.k8
if(h==null)h=$.k8=new V.z(0,1,0)
g=$.k7
s=(g==null?$.k7=new V.z(0,0,-1):g).J()
r=h.aR(s).J()
q=s.aR(r)
p=new V.z(i.a,i.b,i.c)
o=r.H(0).Y(p)
n=q.H(0).Y(p)
m=s.H(0).Y(p)
i=V.ao(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)
$.jS=i
l=i}else l=i
i=j.b
if(i!=null){k=i.aG(0,a,j)
if(k!=null)l=k.n(0,l)}a.db.be(l)},
aZ:function(a){a.cy.as()
a.db.as()}}
X.hL.prototype={}
V.iR.prototype={
$1:function(a){var s=C.c.di(this.a.gft(),2)
if(s!=="0.00")P.jw(s+" fps")}}
V.hD.prototype={
dC:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.L(o,"scroll",new V.hF(m),!1)},
cC:function(a){var s,r,q,p,o,n,m,l
this.f2()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fv(a)
q.toString
p=new H.G(p)
p=new P.bC(q.dj(new H.bn(p,p.gj(p))).a())
for(;p.t();){q=p.gC(p)
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
if(H.kC(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.mc(C.K,q,C.o,!1)
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
f2:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.hX()
s.a=new H.r(t.V)
s.b=new H.r(t.w)
s.c=P.jN(t.k)
s.d=s.F(0,p)
r=s.F(0,p).p(0,o)
q=K.Q(new H.G("*"))
r.a.push(q)
r.c=!0
r=s.F(0,o).p(0,o)
q=new K.az()
q.a=[]
r.a.push(q)
r=K.Q(new H.G("*"))
q.a.push(r)
r=s.F(0,o).p(0,"BoldEnd")
q=K.Q(new H.G("*"))
r.a.push(q)
r.c=!0
r=s.F(0,p).p(0,n)
q=K.Q(new H.G("_"))
r.a.push(q)
r.c=!0
r=s.F(0,n).p(0,n)
q=new K.az()
q.a=[]
r.a.push(q)
r=K.Q(new H.G("_"))
q.a.push(r)
r=s.F(0,n).p(0,m)
q=K.Q(new H.G("_"))
r.a.push(q)
r.c=!0
r=s.F(0,p).p(0,l)
q=K.Q(new H.G("`"))
r.a.push(q)
r.c=!0
r=s.F(0,l).p(0,l)
q=new K.az()
q.a=[]
r.a.push(q)
r=K.Q(new H.G("`"))
q.a.push(r)
r=s.F(0,l).p(0,"CodeEnd")
q=K.Q(new H.G("`"))
r.a.push(q)
r.c=!0
r=s.F(0,p).p(0,k)
q=K.Q(new H.G("["))
r.a.push(q)
r.c=!0
r=s.F(0,k).p(0,j)
q=K.Q(new H.G("|"))
r.a.push(q)
q=s.F(0,k).p(0,i)
r=K.Q(new H.G("]"))
q.a.push(r)
q.c=!0
q=s.F(0,k).p(0,k)
r=new K.az()
r.a=[]
q.a.push(r)
q=K.Q(new H.G("|]"))
r.a.push(q)
q=s.F(0,j).p(0,i)
r=K.Q(new H.G("]"))
q.a.push(r)
q.c=!0
q=s.F(0,j).p(0,j)
r=new K.az()
r.a=[]
q.a.push(r)
q=K.Q(new H.G("|]"))
r.a.push(q)
s.F(0,p).p(0,h).a.push(new K.fk())
q=s.F(0,h).p(0,h)
r=new K.az()
r.a=[]
q.a.push(r)
q=K.Q(new H.G("*_`["))
r.a.push(q)
q=s.F(0,"BoldEnd")
q.d=q.a.aX(o)
q=s.F(0,m)
q.d=q.a.aX(n)
q=s.F(0,"CodeEnd")
q.d=q.a.aX(l)
q=s.F(0,i)
q.d=q.a.aX("Link")
q=s.F(0,h)
q.d=q.a.aX(h)
this.b=s}}
V.hF.prototype={
$1:function(a){P.k2(C.i,new V.hE(this.a))}}
V.hE.prototype={
$0:function(){var s=C.c.ag(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}};(function aliases(){var s=J.a.prototype
s.du=s.i
s=J.aY.prototype
s.dv=s.i
s=K.d5.prototype
s.dt=s.aF
s.c6=s.i
s=O.c5.prototype
s.c7=s.am
s=O.an.prototype
s.c8=s.am})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mp","lk",20)
r(P,"n4","lP",6)
r(P,"n5","lQ",6)
r(P,"n6","lR",6)
q(P,"ku","n_",7)
r(W,"oF","fH",21)
var k
p(k=E.bj.prototype,"gdd",0,0,null,["$1","$0"],["de","fG"],0,0)
p(k,"gda",0,0,null,["$1","$0"],["dc","fD"],0,0)
o(k,"gfB","fC",3)
o(k,"gfE","fF",3)
p(k=E.dR.prototype,"gcb",0,0,null,["$1","$0"],["cd","cc"],0,0)
n(k,"gfT","dg",7)
m(k=X.eb.prototype,"gel","em",4)
m(k,"ge9","ea",4)
m(k,"gef","eg",2)
m(k,"gep","eq",8)
m(k,"gen","eo",8)
m(k,"geu","ev",2)
m(k,"gey","ez",2)
m(k,"gej","ek",2)
m(k,"gew","ex",2)
m(k,"geh","ei",2)
m(k,"geA","eB",18)
m(k,"geC","eD",4)
m(k,"geS","eT",5)
m(k,"geO","eP",5)
m(k,"geQ","eR",5)
p(k=D.c1.prototype,"gcp",0,0,null,["$1","$0"],["cq","er"],0,0)
m(k,"geE","eF",19)
o(k,"ge3","e4",9)
o(k,"geI","eJ",9)
l(V.X.prototype,"gj","bU",10)
l(V.z.prototype,"gj","bU",10)
p(k=U.bk.prototype,"gaz",0,0,null,["$1","$0"],["G","a1"],0,0)
o(k,"ge1","e2",11)
o(k,"geG","eH",11)
p(k=U.cf.prototype,"gaz",0,0,null,["$1","$0"],["G","a1"],0,0)
m(k,"gbr","bs",1)
m(k,"gbt","bu",1)
m(k,"gbv","bw",1)
p(k=U.cg.prototype,"gaz",0,0,null,["$1","$0"],["G","a1"],0,0)
m(k,"gbr","bs",1)
m(k,"gbt","bu",1)
m(k,"gbv","bw",1)
m(k,"gdW","dX",1)
m(k,"gdY","dZ",1)
m(k,"gfa","fb",1)
m(k,"gf8","f9",1)
m(k,"gf6","f7",1)
m(U.ch.prototype,"ge_","e0",1)
p(k=M.bL.prototype,"gP",0,0,null,["$1","$0"],["R","aL"],0,0)
o(k,"geK","eL",12)
o(k,"geM","eN",12)
p(M.bO.prototype,"gP",0,0,null,["$1","$0"],["R","aL"],0,0)
p(k=M.bS.prototype,"gP",0,0,null,["$1","$0"],["R","aL"],0,0)
o(k,"geb","ec",3)
o(k,"ged","ee",3)
p(k=O.df.prototype,"gaw",0,0,null,["$1","$0"],["N","aM"],0,0)
p(k,"geY",0,0,null,["$1","$0"],["cs","eZ"],0,0)
o(k,"ge5","e6",13)
o(k,"ge7","e8",13)
p(O.c5.prototype,"gaw",0,0,null,["$1","$0"],["N","aM"],0,0)
p(O.dF.prototype,"gaw",0,0,null,["$1","$0"],["N","aM"],0,0)
p(X.du.prototype,"gdF",0,0,null,["$1","$0"],["ai","dG"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.F,null)
q(P.F,[H.j5,J.a,J.R,P.cm,P.f,H.bn,P.d7,H.bV,H.e9,H.i0,P.D,H.ho,H.eU,H.bg,P.am,H.h_,H.dc,H.fW,H.a9,H.ex,P.cy,P.bB,P.bC,P.eh,P.dM,P.dN,P.cd,P.iD,P.cs,P.iw,P.cl,P.y,P.cW,P.iC,P.b9,P.a4,P.M,P.aS,P.dt,P.cc,P.eu,P.fR,P.al,P.dd,P.a7,P.J,P.b6,W.fy,W.j1,W.jf,W.B,W.bW,P.cA,P.eN,K.fk,K.d5,K.hy,L.dK,L.dS,L.dT,L.hX,O.bh,O.c6,E.fs,E.bj,E.bf,E.bu,E.er,E.hs,E.dR,Z.ee,Z.ef,Z.bK,Z.bX,Z.aG,D.fu,D.bT,D.N,X.cV,X.da,X.fY,X.h1,X.a6,X.hn,X.hY,X.eb,D.b_,V.S,V.aw,V.fK,V.dg,V.bo,V.a0,V.O,V.aB,V.dA,V.X,V.z,U.cf,U.cg,U.ch,M.bO,M.bS,M.aa,A.fm,A.fn,A.T,A.fr,A.fC,A.hq,A.hH,A.h6,A.e_,A.e0,A.e3,A.e6,A.i2,A.i8,F.fO,F.fZ,F.hp,F.hz,F.hA,F.hB,F.hC,F.id,F.ig,F.ih,F.ik,F.il,O.hN,O.c5,O.h7,T.hS,X.iX,X.hL,X.fU,X.du,V.hD])
q(J.a,[J.fV,J.c0,J.aY,J.a5,J.aX,J.ax,H.c8,W.b,W.fj,W.cU,W.ai,W.C,W.em,W.a3,W.fB,W.fD,W.en,W.bQ,W.ep,W.fE,W.h,W.ev,W.aU,W.fT,W.ez,W.aW,W.h0,W.hi,W.eD,W.eE,W.b1,W.eF,W.eH,W.b3,W.eL,W.eO,W.b4,W.eP,W.b5,W.eV,W.aE,W.eZ,W.hW,W.b7,W.f0,W.hZ,W.ia,W.f6,W.f8,W.fa,W.fc,W.fe,P.bm,P.eB,P.bt,P.eJ,P.hr,P.eW,P.bx,P.f2,P.fo,P.ei,P.dB,P.eS])
q(J.aY,[J.dv,J.by,J.ad])
r(J.d8,J.a5)
q(J.aX,[J.c_,J.bZ])
r(P.c2,P.cm)
q(P.c2,[H.bz,W.ek,W.ej,P.d3])
r(H.G,H.bz)
q(P.f,[H.i,H.b0,H.ci,P.bY])
r(H.bR,H.b0)
q(P.d7,[H.c4,H.eg])
q(P.D,[H.dp,H.d9,H.e8,H.dC,H.es,P.cS,P.dq,P.a2,P.ea,P.e7,P.dL,P.cX,P.cZ])
q(H.bg,[H.hM,H.fX,H.iL,H.iM,H.iN,P.iq,P.ip,P.ir,P.is,P.iB,P.iA,P.iI,P.iy,P.iz,P.h2,P.fF,P.fG,W.hk,W.hm,W.hx,W.hK,W.it,P.iJ,P.fP,P.fQ,P.fq,E.ht,E.hu,E.hv,E.hV,D.fM,D.fN,F.iE,F.io,F.im,F.ii,F.ij,O.ha,O.hb,O.hc,O.hd,O.he,O.hf,O.hg,O.hh,T.hU,T.hT,V.iR,V.hF,V.hE])
q(H.hM,[H.hI,H.bJ])
r(P.de,P.am)
r(H.r,P.de)
r(H.ay,H.i)
r(H.bs,H.c8)
q(H.bs,[H.co,H.cq])
r(H.cp,H.co)
r(H.b2,H.cp)
r(H.cr,H.cq)
r(H.c7,H.cr)
q(H.c7,[H.di,H.dj,H.dk,H.dl,H.dm,H.c9,H.dn])
r(H.cz,H.es)
r(P.cv,P.bY)
r(P.ix,P.iD)
r(P.ck,P.cs)
r(P.cY,P.dN)
r(P.fI,P.cW)
r(P.ib,P.fI)
r(P.ic,P.cY)
q(P.M,[P.V,P.p])
q(P.a2,[P.bw,P.d6])
q(W.b,[W.u,W.d2,W.aD,W.ct,W.aF,W.ae,W.cw,W.ed,W.bA,P.cT,P.av])
q(W.u,[W.I,W.ac])
q(W.I,[W.k,P.j])
q(W.k,[W.cQ,W.cR,W.aR,W.d4,W.bl,W.dD])
r(W.fx,W.ai)
r(W.bi,W.em)
q(W.a3,[W.fz,W.fA])
r(W.eo,W.en)
r(W.bP,W.eo)
r(W.eq,W.ep)
r(W.d0,W.eq)
r(W.aT,W.cU)
r(W.ew,W.ev)
r(W.d1,W.ew)
r(W.eA,W.ez)
r(W.aV,W.eA)
r(W.ar,W.h)
q(W.ar,[W.aZ,W.a_,W.b8])
r(W.hj,W.eD)
r(W.hl,W.eE)
r(W.eG,W.eF)
r(W.dh,W.eG)
r(W.eI,W.eH)
r(W.ca,W.eI)
r(W.eM,W.eL)
r(W.dw,W.eM)
r(W.hw,W.eO)
r(W.cu,W.ct)
r(W.dH,W.cu)
r(W.eQ,W.eP)
r(W.dI,W.eQ)
r(W.hJ,W.eV)
r(W.f_,W.eZ)
r(W.dP,W.f_)
r(W.cx,W.cw)
r(W.dQ,W.cx)
r(W.f1,W.f0)
r(W.dU,W.f1)
r(W.aH,W.a_)
r(W.f7,W.f6)
r(W.el,W.f7)
r(W.cj,W.bQ)
r(W.f9,W.f8)
r(W.ey,W.f9)
r(W.fb,W.fa)
r(W.cn,W.fb)
r(W.fd,W.fc)
r(W.eR,W.fd)
r(W.ff,W.fe)
r(W.eY,W.ff)
r(W.et,P.dM)
r(P.a8,P.eN)
r(P.eC,P.eB)
r(P.db,P.eC)
r(P.eK,P.eJ)
r(P.dr,P.eK)
r(P.eX,P.eW)
r(P.dO,P.eX)
r(P.f3,P.f2)
r(P.dV,P.f3)
r(P.fp,P.ei)
r(P.ds,P.av)
r(P.eT,P.eS)
r(P.dJ,P.eT)
q(K.d5,[K.az,L.i_])
q(E.fs,[Z.ft,A.dE,T.hO])
q(D.N,[D.aj,D.ak,D.v,X.dx])
q(X.dx,[X.c3,X.bq,X.br,X.ce])
q(O.bh,[D.c1,U.bk,M.bL])
q(D.fu,[U.fw,U.P])
r(U.bN,U.P)
q(A.dE,[A.h3,A.hG])
q(A.i2,[A.dX,A.i5,A.i6,A.i7,A.i3,A.dW,A.i4,A.dY,A.dZ,A.i9,A.e1,A.e2,A.e4,A.e5])
q(O.hN,[O.df,O.dF])
q(O.c5,[O.h4,O.h5,O.an])
q(O.an,[O.h8,O.h9])
q(T.hO,[T.hP,T.hR])
r(T.hQ,T.hP)
r(X.fS,X.hL)
s(H.bz,H.e9)
s(H.co,P.y)
s(H.cp,H.bV)
s(H.cq,P.y)
s(H.cr,H.bV)
s(P.cm,P.y)
s(W.em,W.fy)
s(W.en,P.y)
s(W.eo,W.B)
s(W.ep,P.y)
s(W.eq,W.B)
s(W.ev,P.y)
s(W.ew,W.B)
s(W.ez,P.y)
s(W.eA,W.B)
s(W.eD,P.am)
s(W.eE,P.am)
s(W.eF,P.y)
s(W.eG,W.B)
s(W.eH,P.y)
s(W.eI,W.B)
s(W.eL,P.y)
s(W.eM,W.B)
s(W.eO,P.am)
s(W.ct,P.y)
s(W.cu,W.B)
s(W.eP,P.y)
s(W.eQ,W.B)
s(W.eV,P.am)
s(W.eZ,P.y)
s(W.f_,W.B)
s(W.cw,P.y)
s(W.cx,W.B)
s(W.f0,P.y)
s(W.f1,W.B)
s(W.f6,P.y)
s(W.f7,W.B)
s(W.f8,P.y)
s(W.f9,W.B)
s(W.fa,P.y)
s(W.fb,W.B)
s(W.fc,P.y)
s(W.fd,W.B)
s(W.fe,P.y)
s(W.ff,W.B)
s(P.eB,P.y)
s(P.eC,W.B)
s(P.eJ,P.y)
s(P.eK,W.B)
s(P.eW,P.y)
s(P.eX,W.B)
s(P.f2,P.y)
s(P.f3,W.B)
s(P.ei,P.am)
s(P.eS,P.y)
s(P.eT,W.B)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",V:"double",M:"num",J:"String",b9:"bool",a7:"Null",al:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([N*])","~(N*)","~(a_*)","~(p*,f<bj*>*)","~(h*)","~(b8*)","~(~())","~()","~(aZ*)","~(p*,f<b_*>*)","V*()","~(p*,f<P*>*)","~(p*,f<aa*>*)","~(p*,f<bo*>*)","@(@)","a7(@)","a7(F?,F?)","a7(@,@)","~(aH*)","b9*(f<b_*>*)","p(@,@)","J(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.m9(v.typeUniverse,JSON.parse('{"ad":"aY","dv":"aY","by":"aY","nz":"h","nP":"h","nB":"av","nA":"b","nW":"b","nY":"b","ny":"j","nR":"j","nC":"k","nU":"k","nS":"u","nO":"u","ol":"ae","nG":"ar","nD":"ac","nZ":"ac","nX":"a_","nT":"aV","nV":"b2","a5":{"i":["1"],"f":["1"]},"d8":{"i":["1"],"f":["1"]},"aX":{"V":[],"M":[]},"c_":{"V":[],"p":[],"M":[]},"bZ":{"V":[],"M":[]},"ax":{"J":[]},"G":{"i":["p"],"f":["p"]},"i":{"f":["1"]},"b0":{"f":["2"]},"bR":{"i":["2"],"f":["2"]},"ci":{"f":["1"]},"bz":{"i":["1"],"f":["1"]},"dp":{"D":[]},"d9":{"D":[]},"e8":{"D":[]},"dC":{"D":[]},"ay":{"i":["1"],"f":["1"]},"bs":{"q":["1"]},"b2":{"q":["V"],"i":["V"],"f":["V"]},"c7":{"q":["p"],"i":["p"],"f":["p"]},"di":{"q":["p"],"i":["p"],"f":["p"]},"dj":{"q":["p"],"i":["p"],"f":["p"]},"dk":{"q":["p"],"i":["p"],"f":["p"]},"dl":{"q":["p"],"i":["p"],"f":["p"]},"dm":{"q":["p"],"i":["p"],"f":["p"]},"c9":{"q":["p"],"i":["p"],"f":["p"]},"dn":{"q":["p"],"i":["p"],"f":["p"]},"es":{"D":[]},"cz":{"D":[]},"cy":{"cd":[]},"cv":{"f":["1"]},"ck":{"i":["1"],"f":["1"]},"bY":{"f":["1"]},"c2":{"i":["1"],"f":["1"]},"cs":{"i":["1"],"f":["1"]},"V":{"M":[]},"cS":{"D":[]},"dq":{"D":[]},"a2":{"D":[]},"bw":{"D":[]},"d6":{"D":[]},"ea":{"D":[]},"e7":{"D":[]},"dL":{"D":[]},"cX":{"D":[]},"dt":{"D":[]},"cc":{"D":[]},"cZ":{"D":[]},"p":{"M":[]},"al":{"i":["1"],"f":["1"]},"k":{"I":[],"u":[],"b":[]},"cQ":{"I":[],"u":[],"b":[]},"cR":{"I":[],"u":[],"b":[]},"aR":{"I":[],"u":[],"b":[]},"ac":{"u":[],"b":[]},"bP":{"q":["a8<M>"],"i":["a8<M>"],"f":["a8<M>"]},"bQ":{"a8":["M"]},"d0":{"q":["J"],"i":["J"],"f":["J"]},"ek":{"i":["I"],"f":["I"]},"I":{"u":[],"b":[]},"d1":{"q":["aT"],"i":["aT"],"f":["aT"]},"d2":{"b":[]},"d4":{"I":[],"u":[],"b":[]},"aV":{"q":["u"],"i":["u"],"f":["u"]},"bl":{"I":[],"u":[],"b":[]},"aZ":{"h":[]},"dh":{"q":["b1"],"i":["b1"],"f":["b1"]},"a_":{"h":[]},"ej":{"i":["u"],"f":["u"]},"u":{"b":[]},"ca":{"q":["u"],"i":["u"],"f":["u"]},"dw":{"q":["b3"],"i":["b3"],"f":["b3"]},"dD":{"I":[],"u":[],"b":[]},"aD":{"b":[]},"dH":{"q":["aD"],"b":[],"i":["aD"],"f":["aD"]},"dI":{"q":["b4"],"i":["b4"],"f":["b4"]},"aF":{"b":[]},"ae":{"b":[]},"dP":{"q":["ae"],"i":["ae"],"f":["ae"]},"dQ":{"q":["aF"],"b":[],"i":["aF"],"f":["aF"]},"b8":{"h":[]},"dU":{"q":["b7"],"i":["b7"],"f":["b7"]},"ar":{"h":[]},"ed":{"b":[]},"aH":{"a_":[],"h":[]},"bA":{"b":[]},"el":{"q":["C"],"i":["C"],"f":["C"]},"cj":{"a8":["M"]},"ey":{"q":["aU?"],"i":["aU?"],"f":["aU?"]},"cn":{"q":["u"],"i":["u"],"f":["u"]},"eR":{"q":["b5"],"i":["b5"],"f":["b5"]},"eY":{"q":["aE"],"i":["aE"],"f":["aE"]},"cA":{"aW":[]},"d3":{"i":["I"],"f":["I"]},"a8":{"eN":["1"]},"db":{"i":["bm"],"f":["bm"]},"dr":{"i":["bt"],"f":["bt"]},"dO":{"i":["J"],"f":["J"]},"j":{"I":[],"u":[],"b":[]},"dV":{"i":["bx"],"f":["bx"]},"cT":{"b":[]},"av":{"b":[]},"ds":{"b":[]},"dJ":{"i":["dd<@,@>"],"f":["dd<@,@>"]},"bh":{"f":["1*"]},"aj":{"N":[]},"ak":{"N":[]},"v":{"N":[]},"c3":{"N":[]},"bq":{"N":[]},"br":{"N":[]},"dx":{"N":[]},"ce":{"N":[]},"c1":{"f":["b_*"]},"bN":{"P":[]},"bk":{"P":[],"f":["P*"]},"cf":{"P":[]},"cg":{"P":[]},"ch":{"P":[]},"bL":{"aa":[],"f":["aa*"]},"bO":{"aa":[]},"bS":{"aa":[]}}'))
H.m8(v.typeUniverse,JSON.parse('{"a5":1,"d8":1,"R":1,"i":1,"bn":1,"b0":2,"bR":2,"c4":2,"ci":1,"eg":1,"bV":1,"e9":1,"bz":1,"ay":1,"dc":1,"bs":1,"bC":1,"cv":1,"dM":1,"dN":2,"cl":1,"bY":1,"c2":1,"y":1,"de":2,"am":2,"cs":1,"cm":1,"cW":2,"cY":2,"f":1,"d7":1,"al":1,"et":1,"B":1,"bW":1,"bh":1,"aj":1,"ak":1,"v":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.nf
return{U:s("i<@>"),h:s("I"),C:s("D"),D:s("h"),Z:s("nQ"),s:s("aW"),R:s("bl"),b:s("a5<@>"),T:s("c0"),g:s("ad"),p:s("q<@>"),G:s("r<J*,dE*>"),V:s("r<J*,dK*>"),i:s("r<J*,J*>"),w:s("r<J*,dT*>"),t:s("r<p*,al<e_*>*>"),L:s("r<p*,al<e0*>*>"),W:s("r<p*,al<e3*>*>"),M:s("r<p*,al<e6*>*>"),J:s("r<p*,dX*>"),E:s("r<p*,b9*>"),a:s("r<p*,p*>"),P:s("a7"),K:s("F"),I:s("a8<M>"),N:s("J"),Y:s("cd"),o:s("by"),v:s("b9"),f:s("V"),z:s("@"),S:s("p"),B:s("aR*"),x:s("c3*"),d:s("bq*"),F:s("br*"),A:s("0&*"),_:s("F*"),k:s("J*"),j:s("dS*"),m:s("ce*"),n:s("dW*"),r:s("dY*"),y:s("dZ*"),O:s("e1*"),q:s("e2*"),c:s("e4*"),Q:s("e5*"),e:s("p*"),l:s("jJ<a7>?"),X:s("F?"),H:s("M")}})();(function constants(){var s=hunkHelpers.makeConstList
C.h=W.aR.prototype
C.p=W.bi.prototype
C.H=J.a.prototype
C.a=J.a5.prototype
C.I=J.bZ.prototype
C.d=J.c_.prototype
C.f=J.c0.prototype
C.c=J.aX.prototype
C.b=J.ax.prototype
C.J=J.ad.prototype
C.r=J.dv.prototype
C.t=P.dB.prototype
C.j=J.by.prototype
C.u=W.aH.prototype
C.v=W.bA.prototype
C.w=new E.bf("Browser.chrome")
C.k=new E.bf("Browser.firefox")
C.l=new E.bf("Browser.edge")
C.x=new E.bf("Browser.other")
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.E=new P.dt()
C.o=new P.ib()
C.F=new P.ic()
C.e=new P.ix()
C.i=new P.aS(0)
C.G=new P.aS(5e6)
C.K=s([0,0,65498,45055,65535,34815,65534,18431])
C.L=new E.bu("OperatingSystem.windows")
C.q=new E.bu("OperatingSystem.mac")
C.M=new E.bu("OperatingSystem.linux")
C.N=new E.bu("OperatingSystem.other")
C.O=new P.bB(null,2)})();(function staticFields(){$.kd=null
$.ah=0
$.jE=null
$.jD=null
$.kv=null
$.kt=null
$.kA=null
$.iK=null
$.iO=null
$.js=null
$.bD=null
$.cH=null
$.cI=null
$.jn=!1
$.af=C.e
$.Y=[]
$.fJ=null
$.jP=null
$.jT=null
$.ap=null
$.jY=null
$.k6=null
$.k9=null
$.k8=null
$.k7=null
$.jS=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"nI","kI",function(){return H.ni("_$dart_dartClosure")})
s($,"o_","kN",function(){return H.aq(H.i1({
toString:function(){return"$receiver$"}}))})
s($,"o0","kO",function(){return H.aq(H.i1({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"o1","kP",function(){return H.aq(H.i1(null))})
s($,"o2","kQ",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o5","kT",function(){return H.aq(H.i1(void 0))})
s($,"o6","kU",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o4","kS",function(){return H.aq(H.k4(null))})
s($,"o3","kR",function(){return H.aq(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"o8","kW",function(){return H.aq(H.k4(void 0))})
s($,"o7","kV",function(){return H.aq(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"om","jy",function(){return P.lO()})
s($,"oo","l_",function(){return P.lE("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"nH","kH",function(){return{}})
s($,"nM","jx",function(){return J.iT(P.j0(),"Opera",0)})
s($,"nL","kL",function(){return!$.jx()&&J.iT(P.j0(),"Trident/",0)})
s($,"nK","kK",function(){return J.iT(P.j0(),"Firefox",0)})
s($,"nJ","kJ",function(){return"-"+$.kM()+"-"})
s($,"nN","kM",function(){if($.kK())var r="moz"
else if($.kL())r="ms"
else r=$.jx()?"o":"webkit"
return r})
s($,"of","kZ",function(){return Z.ab(0)})
s($,"o9","kX",function(){return Z.ab(511)})
s($,"oh","ag",function(){return Z.ab(1)})
s($,"og","aP",function(){return Z.ab(2)})
s($,"ob","aO",function(){return Z.ab(4)})
s($,"oi","aQ",function(){return Z.ab(8)})
s($,"oj","bc",function(){return Z.ab(16)})
s($,"oc","cM",function(){return Z.ab(32)})
s($,"od","cN",function(){return Z.ab(64)})
s($,"oe","kY",function(){return Z.ab(96)})
s($,"ok","bI",function(){return Z.ab(128)})
s($,"oa","aN",function(){return Z.ab(256)})
s($,"nF","kG",function(){return new V.fK()})
s($,"nE","w",function(){return $.kG()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c8,ArrayBufferView:H.c8,Float32Array:H.b2,Float64Array:H.b2,Int16Array:H.di,Int32Array:H.dj,Int8Array:H.dk,Uint16Array:H.dl,Uint32Array:H.dm,Uint8ClampedArray:H.c9,CanvasPixelArray:H.c9,Uint8Array:H.dn,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fj,HTMLAnchorElement:W.cQ,HTMLAreaElement:W.cR,Blob:W.cU,HTMLCanvasElement:W.aR,CDATASection:W.ac,CharacterData:W.ac,Comment:W.ac,ProcessingInstruction:W.ac,Text:W.ac,CSSPerspective:W.fx,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.bi,MSStyleCSSProperties:W.bi,CSS2Properties:W.bi,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.fz,CSSUnparsedValue:W.fA,DataTransferItemList:W.fB,DOMException:W.fD,ClientRectList:W.bP,DOMRectList:W.bP,DOMRectReadOnly:W.bQ,DOMStringList:W.d0,DOMTokenList:W.fE,Element:W.I,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aT,FileList:W.d1,FileWriter:W.d2,HTMLFormElement:W.d4,Gamepad:W.aU,History:W.fT,HTMLCollection:W.aV,HTMLFormControlsCollection:W.aV,HTMLOptionsCollection:W.aV,ImageData:W.aW,HTMLImageElement:W.bl,KeyboardEvent:W.aZ,Location:W.h0,MediaList:W.hi,MIDIInputMap:W.hj,MIDIOutputMap:W.hl,MimeType:W.b1,MimeTypeArray:W.dh,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,Attr:W.u,DocumentType:W.u,Node:W.u,NodeList:W.ca,RadioNodeList:W.ca,Plugin:W.b3,PluginArray:W.dw,RTCStatsReport:W.hw,HTMLSelectElement:W.dD,SourceBuffer:W.aD,SourceBufferList:W.dH,SpeechGrammar:W.b4,SpeechGrammarList:W.dI,SpeechRecognitionResult:W.b5,Storage:W.hJ,CSSStyleSheet:W.aE,StyleSheet:W.aE,TextTrack:W.aF,TextTrackCue:W.ae,VTTCue:W.ae,TextTrackCueList:W.dP,TextTrackList:W.dQ,TimeRanges:W.hW,Touch:W.b7,TouchEvent:W.b8,TouchList:W.dU,TrackDefaultList:W.hZ,CompositionEvent:W.ar,FocusEvent:W.ar,TextEvent:W.ar,UIEvent:W.ar,URL:W.ia,VideoTrackList:W.ed,WheelEvent:W.aH,Window:W.bA,DOMWindow:W.bA,CSSRuleList:W.el,ClientRect:W.cj,DOMRect:W.cj,GamepadList:W.ey,NamedNodeMap:W.cn,MozNamedAttrMap:W.cn,SpeechRecognitionResultList:W.eR,StyleSheetList:W.eY,SVGLength:P.bm,SVGLengthList:P.db,SVGNumber:P.bt,SVGNumberList:P.dr,SVGPointList:P.hr,SVGStringList:P.dO,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bx,SVGTransformList:P.dV,AudioBuffer:P.fo,AudioParamMap:P.fp,AudioTrackList:P.cT,AudioContext:P.av,webkitAudioContext:P.av,BaseAudioContext:P.av,OfflineAudioContext:P.ds,WebGL2RenderingContext:P.dB,SQLResultSetRowList:P.dJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bs.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.b2.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cw.$nativeSuperclassTag="EventTarget"
W.cx.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.ky,[])
else M.ky([])})})()
//# sourceMappingURL=test.dart.js.map
