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
a[c]=function(){a[c]=function(){H.mL(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.j_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.j_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.j_(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={iB:function iB(){},
l4:function(a,b){if(t.O.b(a))return new H.bG(a,b)
return new H.aN(a,b)},
iz:function(){return new P.bf("No element")},
kZ:function(){return new P.bf("Too many elements")},
ln:function(a,b){var s=J.aB(a)
if(typeof s!=="number")return s.V()
H.dy(a,0,s-1,b)},
dy:function(a,b,c,d){if(c-b<=32)H.lm(a,b,c,d)
else H.ll(a,b,c,d)},
lm:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b_(a);s<=c;++s){q=r.j(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.j(a,p-1),q)
if(typeof o!=="number")return o.L()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.j(a,n))
p=n}r.m(a,p,q)}},
ll:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.ad(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.ad(a6+a7,2),d=e-h,c=e+h,b=J.b_(a5),a=b.j(a5,g),a0=b.j(a5,d),a1=b.j(a5,e),a2=b.j(a5,c),a3=b.j(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.j(a5,a6))
b.m(a5,c,b.j(a5,a7))
r=a6+1
q=a7-1
if(J.L(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.j(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ai()
if(n<0){if(p!==r){b.m(a5,p,b.j(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.j(a5,q),a0)
if(typeof n!=="number")return n.L()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.m(a5,p,b.j(a5,r))
l=r+1
b.m(a5,r,b.j(a5,q))
b.m(a5,q,o)
q=m
r=l
break}else{b.m(a5,p,b.j(a5,q))
b.m(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.j(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ai()
if(j<0){if(p!==r){b.m(a5,p,b.j(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.L()
if(i>0)for(;!0;){n=a8.$2(b.j(a5,q),a2)
if(typeof n!=="number")return n.L()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.j(a5,q),a0)
if(typeof n!=="number")return n.ai()
m=q-1
if(n<0){b.m(a5,p,b.j(a5,r))
l=r+1
b.m(a5,r,b.j(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.j(a5,q))
b.m(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.m(a5,a6,b.j(a5,a4))
b.m(a5,a4,a0)
a4=q+1
b.m(a5,a7,b.j(a5,a4))
b.m(a5,a4,a2)
H.dy(a5,a6,r-2,a8)
H.dy(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.L(a8.$2(b.j(a5,r),a0),0);)++r
for(;J.L(a8.$2(b.j(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.j(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.j(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.j(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.j(a5,q),a0)
if(typeof n!=="number")return n.ai()
m=q-1
if(n<0){b.m(a5,p,b.j(a5,r))
l=r+1
b.m(a5,r,b.j(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.j(a5,q))
b.m(a5,q,o)}q=m
break}}H.dy(a5,r,q,a8)}else H.dy(a5,r,q,a8)},
l:function l(a){this.a=a},
i:function i(){},
bU:function bU(){},
an:function an(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aN:function aN(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.b=b},
bV:function bV(a,b){this.a=null
this.b=a
this.c=b},
bW:function bW(a,b){this.a=a
this.b=b},
aX:function aX(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
bJ:function bJ(){},
dT:function dT(){},
bj:function bj(){},
ki:function(a){var s,r=H.kh(a)
if(r!=null)return r
s="minified:"+a
return s},
mE:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.R(a)
if(typeof s!="string")throw H.c(H.ax(a))
return s},
c3:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dr:function(a){return H.l5(a)},
l5:function(a){var s,r,q
if(a instanceof P.B)return H.X(H.cx(a),null)
if(J.cw(a)===C.J||t.o.b(a)){s=C.o(a)
if(H.jy(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.jy(q))return q}}return H.X(H.cx(a),null)},
jy:function(a){var s=a!=="Object"&&a!==""
return s},
jx:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
le:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.cr(q))throw H.c(H.ax(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aw(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ax(q))}return H.jx(p)},
ld:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cr(q))throw H.c(H.ax(q))
if(q<0)throw H.c(H.ax(q))
if(q>65535)return H.le(a)}return H.jx(a)},
iF:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aw(s,10))>>>0,56320|s&1023)}throw H.c(P.ap(a,0,1114111,null,null))},
bc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lc:function(a){var s=H.bc(a).getFullYear()+0
return s},
la:function(a){var s=H.bc(a).getMonth()+1
return s},
l6:function(a){var s=H.bc(a).getDate()+0
return s},
l7:function(a){var s=H.bc(a).getHours()+0
return s},
l9:function(a){var s=H.bc(a).getMinutes()+0
return s},
lb:function(a){var s=H.bc(a).getSeconds()+0
return s},
l8:function(a){var s=H.bc(a).getMilliseconds()+0
return s},
F:function(a){throw H.c(H.ax(a))},
f:function(a,b){if(a==null)J.aB(a)
throw H.c(H.br(a,b))},
br:function(a,b){var s,r,q="index"
if(!H.cr(b))return new P.U(!0,b,q,null)
s=J.aB(a)
if(!(b<0)){if(typeof s!=="number")return H.F(s)
r=b>=s}else r=!0
if(r)return P.z(b,a,q,null,s)
return P.ds(b,q)},
mr:function(a,b,c){if(a>c)return P.ap(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ap(b,a,c,"end",null)
return new P.U(!0,b,"end",null)},
ax:function(a){return new P.U(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dg()
s=new Error()
s.dartException=a
r=H.mM
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
mM:function(){return J.R(this.dartException)},
I:function(a){throw H.c(a)},
r:function(a){throw H.c(P.aF(a))},
ad:function(a){var s,r,q,p,o,n
a=H.kf(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.hq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
hr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jH:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jt:function(a,b){return new H.df(a,b==null?null:b.method)},
iC:function(a,b){var s=b==null,r=s?null:b.method
return new H.d1(a,r,s?null:b.receiver)},
ai:function(a){if(a==null)return new H.fV(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.b1(a,a.dartException)
return H.mk(a)},
b1:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mk:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aw(r,16)&8191)===10)switch(q){case 438:return H.b1(a,H.iC(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.b1(a,H.jt(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.kl()
o=$.km()
n=$.kn()
m=$.ko()
l=$.kr()
k=$.ks()
j=$.kq()
$.kp()
i=$.ku()
h=$.kt()
g=p.S(s)
if(g!=null)return H.b1(a,H.iC(s,g))
else{g=o.S(s)
if(g!=null){g.method="call"
return H.b1(a,H.iC(s,g))}else{g=n.S(s)
if(g==null){g=m.S(s)
if(g==null){g=l.S(s)
if(g==null){g=k.S(s)
if(g==null){g=j.S(s)
if(g==null){g=m.S(s)
if(g==null){g=i.S(s)
if(g==null){g=h.S(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.b1(a,H.jt(s,g))}}return H.b1(a,new H.dS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.c4()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b1(a,new P.U(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.c4()
return a},
j0:function(a){var s
if(a==null)return new H.eB(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.eB(a)},
mt:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
mD:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.J("Unsupported number of arguments for wrapped closure"))},
cv:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mD)
a.$identity=s
return s},
kS:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hd().constructor.prototype):Object.create(new H.by(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.a8
if(typeof r!=="number")return r.E()
$.a8=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jg(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.kO(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jg(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
kO:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.k9,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.kM:H.kL
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
kP:function(a,b,c,d){var s=H.je
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jg:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.kR(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.kP(r,!p,s,b)
if(r===0){p=$.a8
if(typeof p!=="number")return p.E()
$.a8=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.iu())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.a8
if(typeof p!=="number")return p.E()
$.a8=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.iu())+"."+H.d(s)+"("+m+");}")()},
kQ:function(a,b,c,d){var s=H.je,r=H.kN
switch(b?-1:a){case 0:throw H.c(new H.dv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
kR:function(a,b){var s,r,q,p,o,n,m=H.iu(),l=$.jc
if(l==null)l=$.jc=H.jb("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kQ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.a8
if(typeof o!=="number")return o.E()
$.a8=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.a8
if(typeof o!=="number")return o.E()
$.a8=o+1
return new Function(p+o+"}")()},
j_:function(a,b,c,d,e,f,g){return H.kS(a,b,c,d,!!e,!!f,g)},
kL:function(a,b){return H.eP(v.typeUniverse,H.cx(a.a),b)},
kM:function(a,b){return H.eP(v.typeUniverse,H.cx(a.c),b)},
je:function(a){return a.a},
kN:function(a){return a.c},
iu:function(){var s=$.jd
return s==null?$.jd=H.jb("self"):s},
jb:function(a){var s,r,q,p=new H.by("self","target","receiver","name"),o=J.iA(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.j9("Field name "+a+" not found."))},
mL:function(a){throw H.c(new P.cL(a))},
mx:function(a){return v.getIsolateTag(a)},
nN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mG:function(a){var s,r,q,p,o,n=$.k8.$1(a),m=$.ii[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ip[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.k5.$2(a,n)
if(q!=null){m=$.ii[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ip[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.ir(s)
$.ii[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ip[n]=s
return s}if(p==="-"){o=H.ir(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kc(a,s)
if(p==="*")throw H.c(P.jI(n))
if(v.leafTags[n]===true){o=H.ir(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kc(a,s)},
kc:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.j3(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ir:function(a){return J.j3(a,!1,null,!!a.$in)},
mH:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.ir(s)
else return J.j3(s,c,null,null)},
mB:function(){if(!0===$.j1)return
$.j1=!0
H.mC()},
mC:function(){var s,r,q,p,o,n,m,l
$.ii=Object.create(null)
$.ip=Object.create(null)
H.mA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ke.$1(o)
if(n!=null){m=H.mH(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mA:function(){var s,r,q,p,o,n,m=C.y()
m=H.bq(C.z,H.bq(C.A,H.bq(C.p,H.bq(C.p,H.bq(C.B,H.bq(C.C,H.bq(C.D(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.k8=new H.il(p)
$.k5=new H.im(o)
$.ke=new H.io(n)},
bq:function(a,b){return a(b)||b},
l2:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fx("Illegal RegExp pattern ("+String(n)+")",a))},
kg:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
ms:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
j4:function(a,b,c){var s=H.mJ(a,b,c)
return s},
mJ:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kf(b),'g'),H.ms(c))},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
df:function df(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a},
fV:function fV(a){this.a=a},
eB:function eB(a){this.a=a
this.b=null},
b4:function b4(){},
hh:function hh(){},
hd:function hd(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a){this.a=a},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fF:function fF(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
am:function am(a){this.a=a},
d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iW:function(a){return a},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.br(b,a))},
lT:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.mr(a,b,c))
return b},
c_:function c_(){},
b8:function b8(){},
aQ:function aQ(){},
bZ:function bZ(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
c0:function c0(){},
de:function de(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
lj:function(a,b){var s=b.c
return s==null?b.c=H.iS(a,b.z,!0):s},
jB:function(a,b){var s=b.c
return s==null?b.c=H.cn(a,"jl",[b.z]):s},
jC:function(a){var s=a.y
if(s===6||s===7||s===8)return H.jC(a.z)
return s===11||s===12},
li:function(a){return a.cy},
mu:function(a){return H.iT(v.typeUniverse,a,!1)},
aw:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aw(a,s,a0,a1)
if(r===s)return b
return H.jX(a,r,!0)
case 7:s=b.z
r=H.aw(a,s,a0,a1)
if(r===s)return b
return H.iS(a,r,!0)
case 8:s=b.z
r=H.aw(a,s,a0,a1)
if(r===s)return b
return H.jW(a,r,!0)
case 9:q=b.Q
p=H.cu(a,q,a0,a1)
if(p===q)return b
return H.cn(a,b.z,p)
case 10:o=b.z
n=H.aw(a,o,a0,a1)
m=b.Q
l=H.cu(a,m,a0,a1)
if(n===o&&l===m)return b
return H.iQ(a,n,l)
case 11:k=b.z
j=H.aw(a,k,a0,a1)
i=b.Q
h=H.mh(a,i,a0,a1)
if(j===k&&h===i)return b
return H.jV(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cu(a,g,a0,a1)
o=b.z
n=H.aw(a,o,a0,a1)
if(f===g&&n===o)return b
return H.iR(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.f3("Attempted to substitute unexpected RTI kind "+c))}},
cu:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aw(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
mi:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aw(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
mh:function(a,b,c,d){var s,r=b.a,q=H.cu(a,r,c,d),p=b.b,o=H.cu(a,p,c,d),n=b.c,m=H.mi(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.ed()
s.a=q
s.b=o
s.c=m
return s},
nP:function(a,b){a[v.arrayRti]=b
return a},
mp:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.k9(s)
return a.$S()}return null},
ka:function(a,b){var s
if(H.jC(b))if(a instanceof H.b4){s=H.mp(a)
if(s!=null)return s}return H.cx(a)},
cx:function(a){var s
if(a instanceof P.B){s=a.$ti
return s!=null?s:H.iX(a)}if(Array.isArray(a))return H.lQ(a)
return H.iX(J.cw(a))},
lQ:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
lZ:function(a){var s=a.$ti
return s!=null?s:H.iX(a)},
iX:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.m_(a,s)},
m_:function(a,b){var s=a instanceof H.b4?a.__proto__.__proto__.constructor:b,r=H.lP(v.typeUniverse,s.name)
b.$ccache=r
return r},
k9:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.iT(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
lY:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cq(q,a,H.m3)
if(!H.ah(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cq(q,a,H.m6)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cr
else if(s===t.W||s===t.H)r=H.m2
else if(s===t.N)r=H.m4
else r=s===t.v?H.k1:null
if(r!=null)return H.cq(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.mF)){q.r="$i"+p
return H.cq(q,a,H.m5)}}else if(p===7)return H.cq(q,a,H.lW)
return H.cq(q,a,H.lU)},
cq:function(a,b,c){a.b=c
return a.b(b)},
lX:function(a){var s,r,q=this
if(!H.ah(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.lS
else if(q===t.K)r=H.lR
else r=H.lV
q.a=r
return q.a(a)},
ma:function(a){var s,r=a.y
if(!H.ah(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
lU:function(a){var s=this
if(a==null)return H.ma(s)
return H.H(v.typeUniverse,H.ka(a,s),null,s,null)},
lW:function(a){if(a==null)return!0
return this.z.b(a)},
m5:function(a){var s=this,r=s.r
if(a instanceof P.B)return!!a[r]
return!!J.cw(a)[r]},
nM:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.k_(a,s)},
lV:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.k_(a,s)},
k_:function(a,b){throw H.c(H.lF(H.jN(a,H.ka(a,b),H.X(b,null))))},
jN:function(a,b,c){var s=P.fr(a),r=H.X(b==null?H.cx(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
lF:function(a){return new H.cm("TypeError: "+a)},
P:function(a,b){return new H.cm("TypeError: "+H.jN(a,null,b))},
m3:function(a){return a!=null},
lR:function(a){return a},
m6:function(a){return!0},
lS:function(a){return a},
k1:function(a){return!0===a||!1===a},
ny:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.P(a,"bool"))},
nA:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.P(a,"bool"))},
nz:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.P(a,"bool?"))},
nB:function(a){if(typeof a=="number")return a
throw H.c(H.P(a,"double"))},
nD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"double"))},
nC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"double?"))},
cr:function(a){return typeof a=="number"&&Math.floor(a)===a},
nE:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.P(a,"int"))},
nG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.P(a,"int"))},
nF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.P(a,"int?"))},
m2:function(a){return typeof a=="number"},
nH:function(a){if(typeof a=="number")return a
throw H.c(H.P(a,"num"))},
nJ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"num"))},
nI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"num?"))},
m4:function(a){return typeof a=="string"},
nK:function(a){if(typeof a=="string")return a
throw H.c(H.P(a,"String"))},
iV:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.P(a,"String"))},
nL:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.P(a,"String?"))},
md:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.E(r,H.X(a[q],b))
return s},
k0:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.f(a6,i)
l=C.b.E(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.E(" extends ",H.X(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.X(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.E(a3,H.X(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.E(a3,H.X(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.j7(H.X(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
X:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.X(a.z,b)
return s}if(l===7){r=a.z
s=H.X(r,b)
q=r.y
return J.j7(q===11||q===12?C.b.E("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.X(a.z,b))+">"
if(l===9){p=H.mj(a.z)
o=a.Q
return o.length!==0?p+("<"+H.md(o,b)+">"):p}if(l===11)return H.k0(a,b,null)
if(l===12)return H.k0(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.f(b,n)
return b[n]}return"?"},
mj:function(a){var s,r=H.kh(a)
if(r!=null)return r
s="minified:"+a
return s},
jY:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
lP:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.iT(a,b,!1)
else if(typeof m=="number"){s=m
r=H.co(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cn(a,b,q)
n[b]=o
return o}else return m},
lN:function(a,b){return H.jZ(a.tR,b)},
lM:function(a,b){return H.jZ(a.eT,b)},
iT:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.jT(H.jR(a,null,b,c))
r.set(b,s)
return s},
eP:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.jT(H.jR(a,b,c,!0))
q.set(c,r)
return r},
lO:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.iQ(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
av:function(a,b){b.a=H.lX
b.b=H.lY
return b},
co:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a2(null,null)
s.y=b
s.cy=c
r=H.av(a,s)
a.eC.set(c,r)
return r},
jX:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.lK(a,b,r,c)
a.eC.set(r,s)
return s},
lK:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ah(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a2(null,null)
q.y=6
q.z=b
q.cy=c
return H.av(a,q)},
iS:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.lJ(a,b,r,c)
a.eC.set(r,s)
return s},
lJ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ah(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.iq(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.iq(q.z))return q
else return H.lj(a,b)}}p=new H.a2(null,null)
p.y=7
p.z=b
p.cy=c
return H.av(a,p)},
jW:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.lH(a,b,r,c)
a.eC.set(r,s)
return s},
lH:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ah(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cn(a,"jl",[b])
else if(b===t.P||b===t.T)return t.R}q=new H.a2(null,null)
q.y=8
q.z=b
q.cy=c
return H.av(a,q)},
lL:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a2(null,null)
s.y=13
s.z=b
s.cy=q
r=H.av(a,s)
a.eC.set(q,r)
return r},
eO:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
lG:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cn:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.eO(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a2(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.av(a,r)
a.eC.set(p,q)
return q},
iQ:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.eO(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a2(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.av(a,o)
a.eC.set(q,n)
return n},
jV:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.eO(m)
if(j>0){s=l>0?",":""
r=H.eO(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.lG(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a2(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.av(a,o)
a.eC.set(q,r)
return r},
iR:function(a,b,c,d){var s,r=b.cy+("<"+H.eO(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.lI(a,b,c,r,d)
a.eC.set(r,s)
return s},
lI:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aw(a,b,r,0)
m=H.cu(a,c,r,0)
return H.iR(a,n,m,c!==m)}}l=new H.a2(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.av(a,l)},
jR:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.lA(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.jS(a,r,g,f,!1)
else if(q===46)r=H.jS(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.au(a.u,a.e,f.pop()))
break
case 94:f.push(H.lL(a.u,f.pop()))
break
case 35:f.push(H.co(a.u,5,"#"))
break
case 64:f.push(H.co(a.u,2,"@"))
break
case 126:f.push(H.co(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.iP(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cn(p,n,o))
else{m=H.au(p,a.e,n)
switch(m.y){case 11:f.push(H.iR(p,m,o,a.n))
break
default:f.push(H.iQ(p,m,o))
break}}break
case 38:H.lB(a,f)
break
case 42:l=a.u
f.push(H.jX(l,H.au(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.iS(l,H.au(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.jW(l,H.au(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.ed()
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
H.iP(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.jV(p,H.au(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.iP(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.lD(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.au(a.u,a.e,h)},
lA:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
jS:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.jY(s,o.z)[p]
if(n==null)H.I('No "'+p+'" in "'+H.li(o)+'"')
d.push(H.eP(s,o,n))}else d.push(p)
return m},
lB:function(a,b){var s=b.pop()
if(0===s){b.push(H.co(a.u,1,"0&"))
return}if(1===s){b.push(H.co(a.u,4,"1&"))
return}throw H.c(P.f3("Unexpected extended operation "+H.d(s)))},
au:function(a,b,c){if(typeof c=="string")return H.cn(a,c,a.sEA)
else if(typeof c=="number")return H.lC(a,b,c)
else return c},
iP:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.au(a,b,c[s])},
lD:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.au(a,b,c[s])},
lC:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.f3("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.f3("Bad index "+c+" for "+b.h(0)))},
H:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ah(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ah(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.H(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.H(a,b.z,c,d,e)
if(p===6){s=d.z
return H.H(a,b,c,s,e)}if(r===8){if(!H.H(a,b.z,c,d,e))return!1
return H.H(a,H.jB(a,b),c,d,e)}if(r===7){s=H.H(a,b.z,c,d,e)
return s}if(p===8){if(H.H(a,b,c,d.z,e))return!0
return H.H(a,b,c,H.jB(a,d),e)}if(p===7){s=H.H(a,b,c,d.z,e)
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
if(!H.H(a,k,c,j,e)||!H.H(a,j,e,k,c))return!1}return H.k2(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.k2(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.m1(a,b,c,d,e)}return!1},
k2:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.H(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.H(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.H(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.H(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.H(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
m1:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.H(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.jY(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.H(a,H.eP(a,b,l[p]),c,r[p],e))return!1
return!0},
iq:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ah(a))if(r!==7)if(!(r===6&&H.iq(a.z)))s=r===8&&H.iq(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mF:function(a){var s
if(!H.ah(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
ah:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
jZ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ed:function ed(){this.c=this.b=this.a=null},
e8:function e8(){},
cm:function cm(a){this.a=a},
kh:function(a){return v.mangledGlobalNames[a]},
mI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f0:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.j1==null){H.mB()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.jI("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.jn()]
if(p!=null)return p
p=H.mG(a)
if(p!=null)return p
if(typeof a=="function")return C.L
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){Object.defineProperty(q,J.jn(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
jn:function(){var s=$.jP
return s==null?$.jP=v.getIsolateTag("_$dart_js"):s},
l_:function(a){if(!H.cr(a))throw H.c(P.ja(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ap(a,0,4294967295,"length",null))
return J.l0(new Array(a))},
jm:function(a){if(!H.cr(a)||a<0)throw H.c(P.j9("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
l0:function(a){return J.iA(a)},
iA:function(a){a.fixed$length=Array
return a},
l1:function(a,b){return J.kD(a,b)},
cw:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bP.prototype
return J.d_.prototype}if(typeof a=="string")return J.ab.prototype
if(a==null)return J.bQ.prototype
if(typeof a=="boolean")return J.fD.prototype
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f0(a)},
mv:function(a){if(typeof a=="number")return J.aK.prototype
if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f0(a)},
b_:function(a){if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f0(a)},
ik:function(a){if(a==null)return a
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f0(a)},
mw:function(a){if(typeof a=="number")return J.aK.prototype
if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aW.prototype
return a},
k7:function(a){if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aW.prototype
return a},
b0:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f0(a)},
j7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mv(a).E(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cw(a).q(a,b)},
kA:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mE(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b_(a).j(a,b)},
kB:function(a,b,c){return J.b0(a).d5(a,b,c)},
kC:function(a,b,c,d){return J.b0(a).dg(a,b,c,d)},
kD:function(a,b){return J.mw(a).W(a,b)},
is:function(a,b){return J.b_(a).w(a,b)},
f1:function(a,b){return J.ik(a).u(a,b)},
kE:function(a,b){return J.ik(a).F(a,b)},
kF:function(a){return J.b0(a).gdk(a)},
kG:function(a){return J.b0(a).gbt(a)},
Y:function(a){return J.cw(a).gH(a)},
aA:function(a){return J.ik(a).gG(a)},
aB:function(a){return J.b_(a).gk(a)},
j8:function(a){return J.ik(a).e_(a)},
kH:function(a,b){return J.b0(a).e2(a,b)},
kI:function(a,b,c){return J.k7(a).ar(a,b,c)},
kJ:function(a){return J.k7(a).e9(a)},
R:function(a){return J.cw(a).h(a)},
a:function a(){},
fD:function fD(){},
bQ:function bQ(){},
aL:function aL(){},
dl:function dl(){},
aW:function aW(){},
a5:function a5(){},
a_:function a_(){},
d0:function d0(){},
V:function V(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aK:function aK(){},
bP:function bP(){},
d_:function d_(){},
ab:function ab(){}},P={
lp:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.ml()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cv(new P.hT(q),1)).observe(s,{childList:true})
return new P.hS(q,s,r)}else if(self.setImmediate!=null)return P.mm()
return P.mn()},
lq:function(a){self.scheduleImmediate(H.cv(new P.hU(a),0))},
lr:function(a){self.setImmediate(H.cv(new P.hV(a),0))},
ls:function(a){P.iJ(C.h,a)},
iJ:function(a,b){var s=C.c.ad(a.a,1000)
return P.lE(s<0?0:s,b)},
lE:function(a,b){var s=new P.i8()
s.cb(a,b)
return s},
nw:function(a){return new P.bo(a,1)},
lx:function(){return C.T},
ly:function(a){return new P.bo(a,3)},
m8:function(a){return new P.cj(a)},
m9:function(){var s,r
for(s=$.bp;s!=null;s=$.bp){$.ct=null
r=s.b
$.bp=r
if(r==null)$.cs=null
s.a.$0()}},
mg:function(){$.iY=!0
try{P.m9()}finally{$.ct=null
$.iY=!1
if($.bp!=null)$.j6().$1(P.k6())}},
me:function(a){var s=new P.e_(a),r=$.cs
if(r==null){$.bp=$.cs=s
if(!$.iY)$.j6().$1(P.k6())}else $.cs=r.b=s},
mf:function(a){var s,r,q,p=$.bp
if(p==null){P.me(a)
$.ct=$.cs
return}s=new P.e_(a)
r=$.ct
if(r==null){s.b=p
$.bp=$.ct=s}else{q=r.b
s.b=q
$.ct=r.b=s
if(q==null)$.cs=s}},
jG:function(a,b){var s=$.af
if(s===C.e)return P.iJ(a,b)
return P.iJ(a,s.dl(b))},
k3:function(a,b,c,d,e){P.mf(new P.ig(d,e))},
mb:function(a,b,c,d){var s,r=$.af
if(r===c)return d.$0()
$.af=c
s=r
try{r=d.$0()
return r}finally{$.af=s}},
mc:function(a,b,c,d,e){var s,r=$.af
if(r===c)return d.$1(e)
$.af=c
s=r
try{r=d.$1(e)
return r}finally{$.af=s}},
hT:function hT(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
i8:function i8(){},
i9:function i9(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
aY:function aY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cj:function cj(a){this.a=a},
e_:function e_(a){this.a=a
this.b=null},
dD:function dD(){},
dE:function dE(){},
ic:function ic(){},
ig:function ig(a,b){this.a=a
this.b=b},
i1:function i1(){},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function(a,b,c){return H.mt(a,new H.M(b.a1("@<0>").bg(c).a1("M<1,2>")))},
jo:function(a,b){return new H.M(a.a1("@<0>").bg(b).a1("M<1,2>"))},
bR:function(a){return new P.c7(a.a1("c7<0>"))},
iO:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lz:function(a,b){var s=new P.c8(a,b)
s.c=a.e
return s},
kY:function(a,b,c){var s,r
if(P.iZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.T.push(a)
try{P.m7(a,s)}finally{if(0>=$.T.length)return H.f($.T,-1)
$.T.pop()}r=P.jE(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
iy:function(a,b,c){var s,r
if(P.iZ(a))return b+"..."+c
s=new P.bg(b)
$.T.push(a)
try{r=s
r.a=P.jE(r.a,a,", ")}finally{if(0>=$.T.length)return H.f($.T,-1)
$.T.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iZ:function(a){var s,r
for(s=$.T.length,r=0;r<s;++r)if(a===$.T[r])return!0
return!1},
m7:function(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=H.d(l.gv(l))
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return H.f(b,-1)
r=b.pop()
if(0>=b.length)return H.f(b,-1)
q=b.pop()}else{p=l.gv(l);++j
if(!l.n()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gv(l);++j
for(;l.n();p=o,o=n){n=l.gv(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.f(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.d(p)
r=H.d(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
jp:function(a,b){var s,r,q=P.bR(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r)q.p(0,b.a(a[r]))
return q},
jq:function(a){var s,r={}
if(P.iZ(a))return"{...}"
s=new P.bg("")
try{$.T.push(a)
s.a+="{"
r.a=!0
J.kE(a,new P.fL(r,s))
s.a+="}"}finally{if(0>=$.T.length)return H.f($.T,-1)
$.T.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
c7:function c7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i0:function i0(a){this.a=a
this.c=this.b=null},
c8:function c8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bO:function bO(){},
bT:function bT(){},
v:function v(){},
d6:function d6(){},
fL:function fL(a,b){this.a=a
this.b=b},
ac:function ac(){},
cf:function cf(){},
c9:function c9(){},
cH:function cH(){},
cK:function cK(){},
fp:function fp(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fB:function fB(a){this.a=a},
hH:function hH(){},
hI:function hI(){},
ia:function ia(a){this.b=0
this.c=a},
kW:function(a){if(a instanceof H.b4)return a.h(0)
return"Instance of '"+H.d(H.dr(a))+"'"},
iD:function(a,b,c){var s,r=c?J.jm(a):J.l_(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iE:function(a,b){var s,r=[]
for(s=J.aA(a);s.n();)r.push(s.gv(s))
if(b)return r
return J.iA(r)},
iI:function(a){var s,r=a,q=r.length,p=P.iG(0,null,q)
if(typeof p!=="number")return p.ai()
s=p<q
return H.ld(s?r.slice(0,p):r)},
lf:function(a){return new H.fE(a,H.l2(a,!1,!0,!1,!1,!1))},
jE:function(a,b,c){var s=J.aA(b)
if(!s.n())return a
if(c.length===0){do a+=H.d(s.gv(s))
while(s.n())}else{a+=H.d(s.gv(s))
for(;s.n();)a=a+c+H.d(s.gv(s))}return a},
iU:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.kz().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.dt(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.f(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.iF(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
kT:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
kU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cN:function(a){if(a>=10)return""+a
return"0"+a},
fr:function(a){if(typeof a=="number"||H.k1(a)||null==a)return J.R(a)
if(typeof a=="string")return JSON.stringify(a)
return P.kW(a)},
f3:function(a){return new P.cC(a)},
j9:function(a){return new P.U(!1,null,null,a)},
ja:function(a,b,c){return new P.U(!0,a,b,c)},
kK:function(a,b){if(a==null)throw H.c(new P.U(!1,null,b,"Must not be null"))
return a},
ds:function(a,b){return new P.bd(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.bd(b,c,!0,a,d,"Invalid value")},
iG:function(a,b,c){var s
if(typeof c!=="number")return H.F(c)
s=a>c
if(s)throw H.c(P.ap(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.F(c)
s=b>c}else s=!0
if(s)throw H.c(P.ap(b,a,c,"end",null))
return b}return c},
jz:function(a,b){if(a<0)throw H.c(P.ap(a,0,null,b,null))
return a},
z:function(a,b,c,d,e){var s=e==null?J.aB(b):e
return new P.cY(s,!0,a,c,"Index out of range")},
q:function(a){return new P.dU(a)},
jI:function(a){return new P.dR(a)},
iH:function(a){return new P.bf(a)},
aF:function(a){return new P.cI(a)},
J:function(a){return new P.ea(a)},
kd:function(a){H.mI(a)},
aZ:function aZ(){},
bB:function bB(a,b){this.a=a
this.b=b},
Q:function Q(){},
bF:function bF(a){this.a=a},
fl:function fl(){},
fm:function fm(){},
y:function y(){},
cC:function cC(a){this.a=a},
dg:function dg(){},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cY:function cY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dU:function dU(a){this.a=a},
dR:function dR(a){this.a=a},
bf:function bf(a){this.a=a},
cI:function cI(a){this.a=a},
dj:function dj(){},
c4:function c4(){},
cL:function cL(a){this.a=a},
ea:function ea(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
fz:function fz(){},
p:function p(){},
e:function e(){},
cZ:function cZ(){},
bS:function bS(){},
d5:function d5(){},
a1:function a1(){},
K:function K(){},
B:function B(){},
C:function C(){},
bg:function bg(a){this.a=a},
ay:function(a){var s,r,q,p,o
if(a==null)return null
s=P.jo(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mq:function(a){var s={}
a.F(0,new P.ih(s))
return s},
ih:function ih(a){this.a=a},
cT:function cT(a,b){this.a=a
this.b=b},
fv:function fv(){},
fw:function fw(){},
eu:function eu(){},
a6:function a6(){},
b7:function b7(){},
d3:function d3(){},
b9:function b9(){},
dh:function dh(){},
fX:function fX(){},
be:function be(){},
dF:function dF(){},
j:function j(){},
bi:function bi(){},
dO:function dO(){},
ei:function ei(){},
ej:function ej(){},
eq:function eq(){},
er:function er(){},
eD:function eD(){},
eE:function eE(){},
eM:function eM(){},
eN:function eN(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
cD:function cD(){},
ak:function ak(){},
di:function di(){},
e0:function e0(){},
dB:function dB(){},
ez:function ez(){},
eA:function eA(){}},W={
it:function(){var s=document.createElement("a")
return s},
jf:function(){var s=document.createElement("canvas")
return s},
kV:function(a,b,c){var s,r=document.body
r.toString
s=C.l.P(r,a,b,c)
s.toString
r=new H.aX(new W.N(s),new W.fn())
return t.h.a(r.ga5(r))},
fo:function(a){return"wheel"},
bH:function(a){var s,r,q="element tag unavailable"
try{s=J.b0(a)
if(typeof s.gbN(a)=="string")q=s.gbN(a)}catch(r){H.ai(r)}return q},
i_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jQ:function(a,b,c,d){var s=W.i_(W.i_(W.i_(W.i_(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
O:function(a,b,c,d){var s=W.k4(new W.hZ(c),t.D)
if(s!=null&&!0)J.kC(a,b,s,!1)
return new W.e9(a,b,s,!1)},
jO:function(a){var s=W.it(),r=window.location
s=new W.bn(new W.i4(s,r))
s.c8(a)
return s},
lv:function(a,b,c,d){return!0},
lw:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
jU:function(){var s=t.N
s=new W.eH(P.jp(C.q,s),P.bR(s),P.bR(s),P.bR(s),null)
s.ca(null,new H.bW(C.q,new W.i7()),["TEMPLATE"],null)
return s},
k4:function(a,b){var s=$.af
if(s===C.e)return a
return s.dm(a,b)},
k:function k(){},
f2:function f2(){},
cA:function cA(){},
cB:function cB(){},
b2:function b2(){},
cE:function cE(){},
aC:function aC(){},
aD:function aD(){},
a4:function a4(){},
fc:function fc(){},
x:function x(){},
bA:function bA(){},
fd:function fd(){},
Z:function Z(){},
a9:function a9(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
bC:function bC(){},
fj:function fj(){},
bD:function bD(){},
bE:function bE(){},
cO:function cO(){},
fk:function fk(){},
e1:function e1(a,b){this.a=a
this.b=b},
t:function t(){},
fn:function fn(){},
h:function h(){},
b:function b(){},
aH:function aH(){},
cR:function cR(){},
cS:function cS(){},
cU:function cU(){},
aI:function aI(){},
fA:function fA(){},
aJ:function aJ(){},
aM:function aM(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(a){this.a=a},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
aP:function aP(){},
d8:function d8(){},
W:function W(){},
N:function N(a){this.a=a},
o:function o(){},
c1:function c1(){},
aR:function aR(){},
dn:function dn(){},
h2:function h2(){},
h3:function h3(a){this.a=a},
dw:function dw(){},
aq:function aq(){},
dz:function dz(){},
aS:function aS(){},
dA:function dA(){},
aT:function aT(){},
he:function he(){},
hf:function hf(a){this.a=a},
ar:function ar(){},
c5:function c5(){},
dG:function dG(){},
dH:function dH(){},
bh:function bh(){},
as:function as(){},
a7:function a7(){},
dI:function dI(){},
dJ:function dJ(){},
hk:function hk(){},
aU:function aU(){},
aV:function aV(){},
dN:function dN(){},
ho:function ho(){},
ae:function ae(){},
hG:function hG(){},
dX:function dX(){},
at:function at(){},
bl:function bl(){},
bm:function bm(){},
e2:function e2(){},
c6:function c6(){},
ee:function ee(){},
ca:function ca(){},
ey:function ey(){},
eF:function eF(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
ix:function ix(a,b){this.a=a
this.$ti=b},
e9:function e9(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hZ:function hZ(a){this.a=a},
iN:function iN(a){this.$ti=a},
bn:function bn(a){this.a=a},
w:function w(){},
c2:function c2(a){this.a=a},
fU:function fU(a){this.a=a},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(){},
i5:function i5(){},
i6:function i6(){},
eH:function eH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i7:function i7(){},
eG:function eG(){},
bK:function bK(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a0:function a0(){},
i4:function i4(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a
this.b=!1},
ib:function ib(a){this.a=a},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
eb:function eb(){},
ec:function ec(){},
eg:function eg(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
ev:function ev(){},
ch:function ch(){},
ci:function ci(){},
ew:function ew(){},
ex:function ex(){},
eC:function eC(){},
eI:function eI(){},
eJ:function eJ(){},
ck:function ck(){},
cl:function cl(){},
eK:function eK(){},
eL:function eL(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){}},K={
A:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.J("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.at(a,0)
r=C.b.at(b,0)
if(s>r){q=r
r=s
s=q}return new K.fY(s,r)},
m:function(a){var s=new K.h4()
s.c5(a)
return s},
aj:function aj(){},
cW:function cW(){},
S:function S(){this.a=null},
fY:function fY(a,b){this.a=a
this.b=b},
h4:function h4(){this.a=null}},L={
hm:function(){var s=new L.hl()
s.a=new H.M(t.V)
s.b=new H.M(t.w)
s.c=P.bR(t.Q)
return s},
dC:function dC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a){this.b=a
this.c=null},
hl:function hl(){var _=this
_.d=_.c=_.b=_.a=null},
hp:function hp(a){this.b=a
this.a=this.c=null}},O={
jh:function(){var s=new O.bz()
s.a=[]
return s},
bz:function bz(){this.c=this.b=this.a=null},
bX:function bX(){this.b=this.a=null},
fh:function fh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(){}},E={
lt:function(){if(J.is(window.navigator.vendor,"Google"))return C.w
if(J.is(window.navigator.userAgent,"Firefox"))return C.m
var s=window.navigator.appVersion
if(J.b_(s).w(s,"Trident")||C.b.w(s,"Edge"))return C.n
if(J.is(window.navigator.appName,"Microsoft"))return C.n
return C.x},
lu:function(){var s=window.navigator.appVersion
if(J.b_(s).w(s,"Win"))return C.P
if(C.b.w(s,"Mac"))return C.Q
if(C.b.w(s,"Linux"))return C.R
return C.S},
lh:function(a,b){var s=new E.fZ(a)
s.c4(a,b)
return s},
lo:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.jF(a,!0,!0,!0,!1)
s=W.jf()
r=s.style
r.width="100%"
r.height="100%"
J.kG(a).p(0,s)
return E.jF(s,!0,!0,!0,!1)},
jF:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=new E.dK(),m=t.z,l=C.G.bW(a,"webgl2",P.l3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m))
if(l==null)H.I(P.J("Failed to get the rendering context for WebGL."))
n.b=a
n.c=l
n.e=E.lh(l,a)
l.getParameter(3379)
l.getParameter(34076)
m=new X.dV(a)
s=new X.fG()
s.d=P.bR(t.e)
m.b=s
s=new X.fR(m)
s.f=0
s.r=V.dp()
s.x=V.dp()
s.ch=s.Q=1
m.c=s
s=new X.fK(m)
s.r=0
s.x=V.dp()
s.cy=s.cx=s.ch=s.Q=1
m.d=s
s=new X.hn(m)
s.f=V.dp()
s.r=V.dp()
m.e=s
m.x=m.r=m.f=!1
m.y=null
m.z=[]
s=$.jk
if(s==null){r=E.lt()
E.lu()
s=$.jk=new E.hY(r)}m.Q=s.a===C.m?0.16666666666666666:0.005555555555555556
q=m.z
p=document
q.push(W.O(p,"contextmenu",m.gcA(),!1))
m.z.push(W.O(a,"focus",m.gcG(),!1))
m.z.push(W.O(a,"blur",m.gcs(),!1))
m.z.push(W.O(p,"keyup",m.gcK(),!1))
m.z.push(W.O(p,"keydown",m.gcI(),!1))
m.z.push(W.O(a,"mousedown",m.gcN(),!1))
m.z.push(W.O(a,"mouseup",m.gcR(),!1))
m.z.push(W.O(a,o,m.gcP(),!1))
q=m.z
W.fo(a)
W.fo(a)
q.push(W.O(a,W.fo(a),m.gcT(),!1))
m.z.push(W.O(p,o,m.gcC(),!1))
m.z.push(W.O(p,"mouseup",m.gcE(),!1))
m.z.push(W.O(p,"pointerlockchange",m.gcV(),!1))
m.z.push(W.O(a,"touchstart",m.gd1(),!1))
m.z.push(W.O(a,"touchend",m.gcY(),!1))
m.z.push(W.O(a,"touchmove",m.gd_(),!1))
n.ch=!0
n.cx=!1
Date.now()
n.db=0
n.bn()
return n},
f9:function f9(){},
b6:function b6(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b3:function b3(a){this.b=a},
ba:function ba(a){this.b=a},
hY:function hY(a){this.a=a},
fZ:function fZ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
dK:function dK(){var _=this
_.db=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
hj:function hj(a){this.a=a}},Z={
iM:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.iW(c)),35044)
a.bindBuffer(b,null)
return new Z.dY(b,s)},
a3:function(a){return new Z.dW(a)},
dY:function dY(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hR:function hR(a){this.a=a},
cF:function cF(a,b){this.a=a
this.b=null
this.c=b},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a}},D={
aG:function(){var s=new D.bI()
s.d=0
return s},
fb:function fb(){},
bI:function bI(){var _=this
_.d=_.c=_.b=_.a=null},
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
aa:function aa(){this.b=null},
bM:function bM(){this.b=null},
bN:function bN(){this.b=null},
D:function D(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={cG:function cG(a,b){this.a=a
this.b=b},d2:function d2(a,b){this.a=a
this.b=b},fG:function fG(){this.d=this.b=this.a=null},fK:function fK(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},fR:function fR(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hn:function hn(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dV:function dV(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kX:function(a){var s=new X.fy(),r=V.mo(1)
s.a=new V.b5(0,0,0,r)
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.jA
if(r==null){r=V.lg(0,0,1,1)
$.jA=r}s.r=r
return s},
iv:function iv(){},
fy:function fy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(){}},V={
j2:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
mo:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
j5:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bX(a-b,s)
return(a<0?a+s:a)+b},
u:function(a,b,c){if(a==null)return C.b.U("null",c)
$.E().toString
return C.b.U(C.d.ea(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ij:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=0,r=0;r<4;++r){q=V.u(a[r],b,c)
s=Math.max(s,q.length)
m.push(q)}for(p=m.length,o=p-1;o>=0;--o,p=n){if(o>=p)return H.f(m,o)
p=C.b.U(m[o],s)
n=m.length
if(o>=n)return H.f(m,o)
m[o]=p}return m},
js:function(){var s=$.jr
return s==null?$.jr=V.aO(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aO:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.d7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dp:function(){var s=$.jv
return s==null?$.jv=new V.ao(0,0):s},
lg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dt(a,b,c,d)},
iL:function(){var s=$.jL
return s==null?$.jL=new V.G(0,0,0):s},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(){},
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ao:function ao(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function(a){var s=new V.h9()
s.c7(a,!0)
return s},
aE:function aE(){},
cM:function cM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cV:function cV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cX:function cX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dm:function dm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h9:function h9(){this.b=this.a=null},
hb:function hb(a){this.a=a},
ha:function ha(a){this.a=a},
hc:function hc(a){this.a=a}},U={cJ:function cJ(){this.b=this.a=null},fS:function fS(){},du:function du(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cP:function cP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
iK:function(a,b,c,d,e){var s=new A.hu(a,c,e)
s.f=d
P.iD(d,0,!1)
return s},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
fi:function fi(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dx:function dx(){},
hs:function hs(){},
hB:function hB(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
dP:function dP(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
dQ:function dQ(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ie:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cp:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.G(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.G(s+a5,r+a3,q+a4)
o=new V.G(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.G(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.ie(g)
j=F.ie(f)
i=F.mK(a1,a2,new F.id(h,F.ie(e),F.ie(d),j,k,a0),b)
if(i!=null)a.dK(i)},
mK:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)return null
if(b<1)return null
s=F.jD()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
m=o.br(new V.b5(n,0,0,1),new V.ao(p,1))
c.$3(m,p,0)
r.push(m.aY(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.br(new V.b5(h,g,f,1),new V.ao(p,k))
c.$3(m,p,l)
r.push(m.aY(d))}}s.d.dh(a+1,b+1,r)
return s},
cQ:function(a,b,c){var s=new F.fu(),r=a.a
if(r==null)H.I(P.J("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.I(P.J("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.T()
return s},
jD:function(){var s=new F.h5(),r=new F.hK(s)
r.b=!1
r.c=[]
s.a=r
r=new F.h8(s)
r.b=[]
s.b=r
r=new F.h7(s)
r.b=[]
s.c=r
r=new F.h6(s)
r.b=[]
s.d=r
return s},
jM:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.hJ(),p=new F.hP()
p.b=[]
q.b=p
p=new F.hO()
p.b=[]
p.c=[]
q.c=p
p=new F.hL()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.kv()
q.e=0
p=$.az()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bu().a)!==0?e:r
q.x=(s&$.bt().a)!==0?b:r
q.y=(s&$.bv().a)!==0?f:r
q.z=(s&$.bw().a)!==0?g:r
q.Q=(s&$.kw().a)!==0?c:r
q.ch=(s&$.bx().a)!==0?i:0
q.cx=(s&$.bs().a)!==0?a:r
return q},
id:function id(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fu:function fu(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(){this.b=this.a=null},
fW:function fW(){this.a=null},
h5:function h5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a){this.a=a
this.b=null},
h7:function h7(a){this.a=a
this.b=null},
h8:function h8(a){this.a=a
this.b=null},
hJ:function hJ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a){this.a=a},
hK:function hK(a){this.a=a
this.c=this.b=null},
hL:function hL(){this.d=this.c=this.b=null},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){this.c=this.b=null},
hP:function hP(){this.b=null},
kb:function(){var s,r,q,p,o,n,m,l,k,j,i,h="tutorial1",g=null,f=V.lk("Tutorial 1")
f.M(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."])
s=W.jf()
s.className="pageCanvas"
s.id=h
f.a.appendChild(s)
f.al(0,"Getting Started")
f.M(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."])
f.bq("index.html","html",0,["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"])
f.bq("main.dart","dart",0,["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotator()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"])
f.al(4,"ThreeDart")
f.M(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."])
f.al(4,"Scene")
f.M(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "])
f.M(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."])
f.M(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."])
f.al(4,"Entity")
f.M(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."])
f.M(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, toroid, and knot. ","The shape can be loaded from a file or created mathematically or procedurally."])
f.M(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotator` to cause it to rotate. Movers can be grouped ","to multiply matrices together thus compounding the movements."])
f.M(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearance of fog or murky water."])
f.al(4,"Summary")
f.M(["Play around with the Rotator, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."])
f.M(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."])
r=new E.b6()
r.a=""
r.b=!0
f=O.jh()
r.y=f
f.b5(r.gdL(),r.gdO())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sb7(0,g)
r.sbO(g)
r.sao(g)
q=F.jD()
F.cp(q,g,g,1,1,1,0,0,1)
F.cp(q,g,g,1,1,0,1,0,3)
F.cp(q,g,g,1,1,0,0,1,2)
F.cp(q,g,g,1,1,-1,0,0,0)
F.cp(q,g,g,1,1,0,-1,0,0)
F.cp(q,g,g,1,1,0,0,-1,3)
f=q.e
if(f!=null)++f.d
q.d.aW()
q.a.aW()
f=q.e
if(f!=null)f.aC(0)
r.sb7(0,q)
f=new U.du()
f.r=f.f=f.e=f.d=f.c=f.b=f.a=0
f.sbS(0)
f.sbH(0,0)
f.sbM(0)
p=f.d
$.E().toString
if(!(Math.abs(p-0.1)<1e-9)){f.d=0.1
p=new D.D("deltaYaw",p,0.1)
p.b=!0
f.ab(p)}p=f.e
$.E().toString
if(!(Math.abs(p-0.21)<1e-9)){f.e=0.21
p=new D.D("deltaPitch",p,0.21)
p.b=!0
f.ab(p)}p=f.f
$.E().toString
if(!(Math.abs(p-0.32)<1e-9)){f.f=0.32
p=new D.D("deltaRoll",p,0.32)
p.b=!0
f.ab(p)}r.sao(f)
f=new O.fh()
f.b=1
f.c=10
f.f=f.e=f.d=!1
$.E().toString
if(!(Math.abs(-2)<1e-9)){f.b=3
p=new D.D("start",1,3)
p.b=!0
f.aH(p)}p=f.c
$.E().toString
if(!(Math.abs(p-6)<1e-9)){f.c=6
p=new D.D("stop",p,6)
p.b=!0
f.aH(p)}if(!f.d){f.d=!0
f.a=null
p=new D.D("grey",!1,!0)
p.b=!0
f.aH(p)}r.sbO(f)
o=new M.cP()
o.a=!0
f=O.jh()
o.e=f
f.b5(o.gcu(),o.gcw())
o.y=o.x=o.r=o.f=null
n=X.kX(g)
m=new X.dk()
m.c=1.0471975511965976
m.d=0.1
m.e=2000
m.sao(g)
f=m.c
$.E().toString
if(!(Math.abs(f-1.0471975511965976)<1e-9)){m.c=1.0471975511965976
f=new D.D("fov",f,1.0471975511965976)
f.b=!0
m.a9(f)}f=m.d
$.E().toString
if(!(Math.abs(f-0.1)<1e-9)){m.d=0.1
f=new D.D("near",f,0.1)
f.b=!0
m.a9(f)}f=m.e
$.E().toString
if(!(Math.abs(f-2000)<1e-9)){m.e=2000
f=new D.D("far",f,2000)
f.b=!0
m.a9(f)}f=o.b
if(f!==m){if(f!=null)f.gB().J(0,o.ga7())
l=o.b
o.b=m
m.gB().p(0,o.ga7())
f=new D.D("camera",l,o.b)
f.b=!0
o.a8(f)}f=o.c
if(f!==n){if(f!=null)f.gB().J(0,o.ga7())
l=o.c
o.c=n
n.gB().p(0,o.ga7())
f=new D.D("target",l,o.c)
f.b=!0
o.a8(f)}f=o.e
if(f.cX([r])){p=f.a
k=p.length
p.push(r)
f.cr(k,[r])}f=o.b
j=V.aO(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
p=new U.cJ()
p.a=j
f.sao(p)
i=document.getElementById(h)
if(i==null)H.I(P.J("Failed to find an element with the identifier, tutorial1."))
f=E.lo(i,!0,!0,!0,!1)
p=f.d
if(p!==o){if(p!=null)p.gB().J(0,f.gbb())
f.d=o
o.gB().p(0,f.gbb())
f.bc()}}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iB.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.c3(a)},
h:function(a){return"Instance of '"+H.d(H.dr(a))+"'"}}
J.fD.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159}}
J.bQ.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.aL.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.dl.prototype={}
J.aW.prototype={}
J.a5.prototype={
h:function(a){var s=a[$.kk()]
if(s==null)return this.c2(a)
return"JavaScript function for "+H.d(J.R(s))}}
J.a_.prototype={
e0:function(a,b){var s
if(!!a.fixed$length)H.I(P.q("removeAt"))
s=a.length
if(b>=s)throw H.c(P.ds(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.I(P.q("remove"))
for(s=0;s<a.length;++s)if(J.L(a[s],b)){a.splice(s,1)
return!0}return!1},
O:function(a,b){var s,r
if(!!a.fixed$length)H.I(P.q("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.r)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aF(a))}},
l:function(a,b){var s,r,q=P.iD(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.f(q,s)
q[s]=r}return q.join(b)},
dI:function(a){return this.l(a,"")},
dF:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aF(a))}throw H.c(H.iz())},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
gaA:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iz())},
bs:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aF(a))}return!1},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.L(a[s],b))return!0
return!1},
h:function(a){return P.iy(a,"[","]")},
gG:function(a){return new J.V(a,a.length)},
gH:function(a){return H.c3(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.I(P.q("set length"))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.br(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.I(P.q("indexed set"))
if(b>=a.length||b<0)throw H.c(H.br(a,b))
a[b]=c},
$ii:1,
$ie:1}
J.d0.prototype={}
J.V.prototype={
gv:function(a){return this.d},
n:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aK.prototype={
W:function(a,b){var s
if(typeof b!="number")throw H.c(H.ax(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaz(b)
if(this.gaz(a)===s)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
bu:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.q(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.q(""+a+".round()"))},
dq:function(a,b,c){if(C.c.W(b,c)>0)throw H.c(H.ax(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
ea:function(a,b){var s
if(b>20)throw H.c(P.ap(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+s
return s},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
bX:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ad:function(a,b){return(a|0)===a?a/b|0:this.de(a,b)},
de:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.q("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
aw:function(a,b){var s
if(a>0)s=this.dd(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dd:function(a,b){return b>31?0:a>>>b},
$iQ:1,
$iK:1}
J.bP.prototype={$ip:1}
J.d_.prototype={}
J.ab.prototype={
aX:function(a,b){if(b<0)throw H.c(H.br(a,b))
if(b>=a.length)H.I(H.br(a,b))
return a.charCodeAt(b)},
at:function(a,b){if(b>=a.length)throw H.c(H.br(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!="string")throw H.c(P.ja(b,null,null))
return a+b},
aF:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ds(b,null))
if(b>c)throw H.c(P.ds(b,null))
if(c>a.length)throw H.c(P.ds(c,null))
return a.substring(b,c)},
b9:function(a,b){return this.ar(a,b,null)},
e9:function(a){return a.toLowerCase()},
K:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
U:function(a,b){var s=b-a.length
if(s<=0)return a
return this.K(" ",s)+a},
dr:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ap(c,0,s,null,null))
return H.kg(a,b,c)},
w:function(a,b){return this.dr(a,b,0)},
W:function(a,b){var s
if(typeof b!="string")throw H.c(H.ax(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
h:function(a){return a},
gH:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iC:1}
H.l.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.aX(this.a,b)}}
H.i.prototype={}
H.bU.prototype={
gG:function(a){return new H.an(this,this.gk(this))},
aD:function(a,b){return this.c1(0,b)}}
H.an.prototype={
gv:function(a){var s=this.d
return s},
n:function(){var s,r=this,q=r.a,p=J.b_(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.aF(q))
s=r.c
if(typeof o!=="number")return H.F(o)
if(s>=o){r.d=null
return!1}r.d=p.u(q,s);++r.c
return!0}}
H.aN.prototype={
gG:function(a){return new H.bV(J.aA(this.a),this.b)},
gk:function(a){return J.aB(this.a)},
u:function(a,b){return this.b.$1(J.f1(this.a,b))}}
H.bG.prototype={$ii:1}
H.bV.prototype={
n:function(){var s=this,r=s.b
if(r.n()){s.a=s.c.$1(r.gv(r))
return!0}s.a=null
return!1},
gv:function(a){var s=this.a
return s}}
H.bW.prototype={
gk:function(a){return J.aB(this.a)},
u:function(a,b){return this.b.$1(J.f1(this.a,b))}}
H.aX.prototype={
gG:function(a){return new H.dZ(J.aA(this.a),this.b)}}
H.dZ.prototype={
n:function(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gv(s)))return!0
return!1},
gv:function(a){var s=this.a
return s.gv(s)}}
H.bJ.prototype={}
H.dT.prototype={
m:function(a,b,c){throw H.c(P.q("Cannot modify an unmodifiable list"))}}
H.bj.prototype={}
H.hq.prototype={
S:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
h:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.d1.prototype={
h:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.dS.prototype={
h:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.fV.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.eB.prototype={
h:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.b4.prototype={
h:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ki(r==null?"unknown":r)+"'"},
gee:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hh.prototype={}
H.hd.prototype={
h:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ki(s)+"'"}}
H.by.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.by))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gH:function(a){var s,r=this.c
if(r==null)s=H.c3(this.a)
else s=typeof r!=="object"?J.Y(r):H.c3(r)
return(s^H.c3(this.b))>>>0},
h:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dr(s))+"'")}}
H.dv.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.M.prototype={
gk:function(a){return this.a},
gN:function(a){return new H.am(this)},
ged:function(a){return H.l4(new H.am(this),new H.fF(this))},
ds:function(a,b){var s=this.b
if(s==null)return!1
return this.cj(s,b)},
j:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.au(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.au(p,b)
q=r==null?n:r.b
return q}else return o.dG(b)},
dG:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bm(q,J.Y(a)&0x3ffffff)
r=this.bv(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bf(s==null?m.b=m.aO():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bf(r==null?m.c=m.aO():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aO()
p=J.Y(b)&0x3ffffff
o=m.bm(q,p)
if(o==null)m.aR(q,p,[m.aP(b,c)])
else{n=m.bv(o,b)
if(n>=0)o[n].b=c
else o.push(m.aP(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aF(s))
r=r.c}},
bf:function(a,b,c){var s=this.au(a,b)
if(s==null)this.aR(a,b,this.aP(b,c))
else s.b=c},
cq:function(){this.r=this.r+1&67108863},
aP:function(a,b){var s,r=this,q=new H.fI(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.cq()
return q},
bv:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1},
h:function(a){return P.jq(this)},
au:function(a,b){return a[b]},
bm:function(a,b){return a[b]},
aR:function(a,b,c){a[b]=c},
cn:function(a,b){delete a[b]},
cj:function(a,b){return this.au(a,b)!=null},
aO:function(){var s="<non-identifier-key>",r=Object.create(null)
this.aR(r,s,r)
this.cn(r,s)
return r}}
H.fF.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){return H.lZ(this.a).a1("2(1)")}}
H.fI.prototype={}
H.am.prototype={
gk:function(a){return this.a.a},
gG:function(a){var s=this.a,r=new H.d4(s,s.r)
r.c=s.e
return r}}
H.d4.prototype={
gv:function(a){return this.d},
n:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.il.prototype={
$1:function(a){return this.a(a)},
$S:10}
H.im.prototype={
$2:function(a,b){return this.a(a,b)}}
H.io.prototype={
$1:function(a){return this.a(a)}}
H.fE.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c_.prototype={}
H.b8.prototype={
gk:function(a){return a.length},
$in:1}
H.aQ.prototype={
j:function(a,b){H.ag(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$ii:1,
$ie:1}
H.bZ.prototype={
m:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$ii:1,
$ie:1}
H.d9.prototype={
j:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.da.prototype={
j:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.db.prototype={
j:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.dc.prototype={
j:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.dd.prototype={
j:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.c0.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.de.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.cb.prototype={}
H.cc.prototype={}
H.cd.prototype={}
H.ce.prototype={}
H.a2.prototype={
a1:function(a){return H.eP(v.typeUniverse,this,a)},
bg:function(a){return H.lO(v.typeUniverse,this,a)}}
H.ed.prototype={}
H.e8.prototype={
h:function(a){return this.a}}
H.cm.prototype={}
P.hT.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
P.hS.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.hU.prototype={
$0:function(){this.a.$0()}}
P.hV.prototype={
$0:function(){this.a.$0()}}
P.i8.prototype={
cb:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cv(new P.i9(this,b),0),a)
else throw H.c(P.q("`setTimeout()` not found."))}}
P.i9.prototype={
$0:function(){this.b.$0()}}
P.bo.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.aY.prototype={
gv:function(a){var s=this.c
if(s==null)return this.b
return s.gv(s)},
n:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.n())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bo){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.f(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aA(s)
if(o instanceof P.aY){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cj.prototype={
gG:function(a){return new P.aY(this.a())}}
P.e_.prototype={}
P.dD.prototype={}
P.dE.prototype={}
P.ic.prototype={}
P.ig.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.R(this.b)
throw s}}
P.i1.prototype={
e4:function(a){var s,r,q,p=null
try{if(C.e===$.af){a.$0()
return}P.mb(p,p,this,a)}catch(q){s=H.ai(q)
r=H.j0(q)
P.k3(p,p,this,s,r)}},
e5:function(a,b){var s,r,q,p=null
try{if(C.e===$.af){a.$1(b)
return}P.mc(p,p,this,a,b)}catch(q){s=H.ai(q)
r=H.j0(q)
P.k3(p,p,this,s,r)}},
e6:function(a,b){return this.e5(a,b,t.z)},
dl:function(a){return new P.i2(this,a)},
dm:function(a,b){return new P.i3(this,a,b)}}
P.i2.prototype={
$0:function(){return this.a.e4(this.b)}}
P.i3.prototype={
$1:function(a){return this.a.e6(this.b,a)},
$S:function(){return this.c.a1("~(0)")}}
P.c7.prototype={
gG:function(a){var s=new P.c8(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ci(b)
return r}},
ci:function(a){var s=this.d
if(s==null)return!1
return this.aM(s[this.aJ(a)],a)>=0},
p:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bi(s==null?q.b=P.iO():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bi(r==null?q.c=P.iO():r,b)}else return q.cd(0,b)},
cd:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.iO()
s=q.aJ(b)
r=p[s]
if(r==null)p[s]=[q.aI(b)]
else{if(q.aM(r,b)>=0)return!1
r.push(q.aI(b))}return!0},
J:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.d4(this.c,b)
else return this.d3(0,b)},
d3:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aJ(b)
r=n[s]
q=o.aM(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.bp(p)
return!0},
bi:function(a,b){if(a[b]!=null)return!1
a[b]=this.aI(b)
return!0},
d4:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.bp(s)
delete a[b]
return!0},
bj:function(){this.r=1073741823&this.r+1},
aI:function(a){var s,r=this,q=new P.i0(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bj()
return q},
bp:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bj()},
aJ:function(a){return J.Y(a)&1073741823},
aM:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1}}
P.i0.prototype={}
P.c8.prototype={
gv:function(a){return this.d},
n:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aF(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.bO.prototype={}
P.bT.prototype={$ii:1,$ie:1}
P.v.prototype={
gG:function(a){return new H.an(a,this.gk(a))},
u:function(a,b){return this.j(a,b)},
gbw:function(a){return this.gk(a)===0},
e8:function(a,b){var s,r,q,p,o=this
if(o.gbw(a)){s=J.jm(0)
return s}r=o.j(a,0)
q=P.iD(o.gk(a),r,!0)
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.F(s)
if(!(p<s))break
s=o.j(a,p)
if(p>=q.length)return H.f(q,p)
q[p]=s;++p}return q},
e7:function(a){return this.e8(a,!0)},
h:function(a){return P.iy(a,"[","]")}}
P.d6.prototype={}
P.fL.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:12}
P.ac.prototype={
F:function(a,b){var s,r
for(s=J.aA(this.gN(a));s.n();){r=s.gv(s)
b.$2(r,this.j(a,r))}},
gk:function(a){return J.aB(this.gN(a))},
h:function(a){return P.jq(a)}}
P.cf.prototype={
O:function(a,b){var s
for(s=J.aA(b);s.n();)this.p(0,s.gv(s))},
h:function(a){return P.iy(this,"{","}")},
u:function(a,b){var s,r,q,p="index"
P.kK(b,p)
P.jz(b,p)
for(s=P.lz(this,this.r),r=0;s.n();){q=s.d
if(b===r)return q;++r}throw H.c(P.z(b,this,p,null,r))},
$ii:1,
$ie:1}
P.c9.prototype={}
P.cH.prototype={}
P.cK.prototype={}
P.fp.prototype={}
P.fC.prototype={
h:function(a){return this.a}}
P.fB.prototype={
ck:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.f(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.bg("")
if(p>b)o.a+=C.b.ar(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.kI(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.hH.prototype={}
P.hI.prototype={
dt:function(a){var s,r,q,p=null,o=P.iG(0,p,a.length)
if(o==null)throw H.c(new P.bd(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.ia(r)
if(q.cp(a,0,o)!==o){C.b.aX(a,o-1)
q.aT()}return new Uint8Array(r.subarray(0,H.lT(0,q.b,r.length)))}}
P.ia.prototype={
aT:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.f(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.f(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.f(r,q)
r[q]=189},
df:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.f(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.f(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.f(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.f(r,p)
r[p]=128|s&63
return!0}else{n.aT()
return!1}},
cp:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.aX(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.at(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.df(p,C.b.at(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.aT()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.f(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.f(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.f(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.f(s,o)
s[o]=128|p&63}}}return q}}
P.aZ.prototype={}
P.bB.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a&&!0},
W:function(a,b){return C.c.W(this.a,b.a)},
gH:function(a){var s=this.a
return(s^C.c.aw(s,30))&1073741823},
h:function(a){var s=this,r=P.kT(H.lc(s)),q=P.cN(H.la(s)),p=P.cN(H.l6(s)),o=P.cN(H.l7(s)),n=P.cN(H.l9(s)),m=P.cN(H.lb(s)),l=P.kU(H.l8(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Q.prototype={}
P.bF.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bF&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
W:function(a,b){return C.c.W(this.a,b.a)},
h:function(a){var s,r,q,p=new P.fm(),o=this.a
if(o<0)return"-"+new P.bF(0-o).h(0)
s=p.$1(C.c.ad(o,6e7)%60)
r=p.$1(C.c.ad(o,1e6)%60)
q=new P.fl().$1(o%1e6)
return""+C.c.ad(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.fl.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fm.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.y.prototype={}
P.cC.prototype={
h:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fr(s)
return"Assertion failed"}}
P.dg.prototype={
h:function(a){return"Throw of null."}}
P.U.prototype={
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
h:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gaL()+o+m
if(!q.a)return l
s=q.gaK()
r=P.fr(q.b)
return l+s+": "+r}}
P.bd.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.cY.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var s,r=this.b
if(typeof r!=="number")return r.ai()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gk:function(a){return this.f}}
P.dU.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.dR.prototype={
h:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bf.prototype={
h:function(a){return"Bad state: "+this.a}}
P.cI.prototype={
h:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fr(s)+"."}}
P.dj.prototype={
h:function(a){return"Out of Memory"},
$iy:1}
P.c4.prototype={
h:function(a){return"Stack Overflow"},
$iy:1}
P.cL.prototype={
h:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.ea.prototype={
h:function(a){return"Exception: "+this.a}}
P.fx.prototype={
h:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.ar(q,0,75)+"..."
return r+"\n"+q}}
P.fz.prototype={}
P.p.prototype={}
P.e.prototype={
aD:function(a,b){return new H.aX(this,b)},
gk:function(a){var s,r=this.gG(this)
for(s=0;r.n();)++s
return s},
ga5:function(a){var s,r=this.gG(this)
if(!r.n())throw H.c(H.iz())
s=r.gv(r)
if(r.n())throw H.c(H.kZ())
return s},
u:function(a,b){var s,r,q
P.jz(b,"index")
for(s=this.gG(this),r=0;s.n();){q=s.gv(s)
if(b===r)return q;++r}throw H.c(P.z(b,this,"index",null,r))},
h:function(a){return P.kY(this,"(",")")}}
P.cZ.prototype={}
P.bS.prototype={$ii:1,$ie:1}
P.d5.prototype={}
P.a1.prototype={
gH:function(a){return P.B.prototype.gH.call(C.K,this)},
h:function(a){return"null"}}
P.K.prototype={}
P.B.prototype={constructor:P.B,$iB:1,
q:function(a,b){return this===b},
gH:function(a){return H.c3(this)},
h:function(a){return"Instance of '"+H.d(H.dr(this))+"'"},
toString:function(){return this.h(this)}}
P.C.prototype={}
P.bg.prototype={
gk:function(a){return this.a.length},
h:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.f2.prototype={
gk:function(a){return a.length}}
W.cA.prototype={
h:function(a){return String(a)}}
W.cB.prototype={
h:function(a){return String(a)}}
W.b2.prototype={$ib2:1}
W.cE.prototype={}
W.aC.prototype={$iaC:1}
W.aD.prototype={
bW:function(a,b,c){var s=a.getContext(b,P.mq(c))
return s},
$iaD:1}
W.a4.prototype={
gk:function(a){return a.length}}
W.fc.prototype={
gk:function(a){return a.length}}
W.x.prototype={$ix:1}
W.bA.prototype={
gk:function(a){return a.length}}
W.fd.prototype={}
W.Z.prototype={}
W.a9.prototype={}
W.fe.prototype={
gk:function(a){return a.length}}
W.ff.prototype={
gk:function(a){return a.length}}
W.fg.prototype={
gk:function(a){return a.length}}
W.bC.prototype={}
W.fj.prototype={
h:function(a){return String(a)}}
W.bD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.bE.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gah(a))+" x "+H.d(this.gaf(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b0(b)
s=a.left==s.gbx(b)&&a.top==s.gbQ(b)&&this.gah(a)==s.gah(b)&&this.gaf(a)==s.gaf(b)}else s=!1
return s},
gH:function(a){return W.jQ(J.Y(a.left),J.Y(a.top),J.Y(this.gah(a)),J.Y(this.gaf(a)))},
gaf:function(a){return a.height},
gbx:function(a){return a.left},
gbQ:function(a){return a.top},
gah:function(a){return a.width},
$ia6:1}
W.cO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.e1.prototype={
gbw:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
j:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.f(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.f(s,b)
this.a.replaceChild(c,s[b])},
p:function(a,b){this.a.appendChild(b)
return b},
gG:function(a){var s=this.e7(this)
return new J.V(s,s.length)}}
W.t.prototype={
gdk:function(a){return new W.hX(a)},
gbt:function(a){return new W.e1(a,a.children)},
h:function(a){return a.localName},
P:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.jj
if(s==null){s=[]
r=new W.c2(s)
s.push(W.jO(null))
s.push(W.jU())
$.jj=r
d=r}else d=s
s=$.ji
if(s==null){s=new W.eQ(d)
$.ji=s
c=s}else{s.a=d
c=s}}if($.al==null){s=document
r=s.implementation.createHTMLDocument("")
$.al=r
$.iw=r.createRange()
r=$.al.createElement("base")
t.y.a(r)
r.href=s.baseURI
$.al.head.appendChild(r)}s=$.al
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.al
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.al.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.N,a.tagName)){$.iw.selectNodeContents(q)
s=$.iw
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.al.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.al.body)J.j8(q)
c.b4(p)
document.adoptNode(p)
return p},
dv:function(a,b,c){return this.P(a,b,c,null)},
bZ:function(a,b){a.textContent=null
a.appendChild(this.P(a,b,null,null))},
gbN:function(a){return a.tagName},
$it:1}
W.fn.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
dg:function(a,b,c,d){if(c!=null)this.ce(a,b,c,!1)},
ce:function(a,b,c,d){return a.addEventListener(b,H.cv(c,1),!1)},
$ib:1}
W.aH.prototype={$iaH:1}
W.cR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.cS.prototype={
gk:function(a){return a.length}}
W.cU.prototype={
gk:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fA.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.aM.prototype={$iaM:1}
W.fJ.prototype={
h:function(a){return String(a)}}
W.fM.prototype={
gk:function(a){return a.length}}
W.fN.prototype={
j:function(a,b){return P.ay(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.ay(s.value[1]))}},
gN:function(a){var s=[]
this.F(a,new W.fO(s))
return s},
gk:function(a){return a.size}}
W.fO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fP.prototype={
j:function(a,b){return P.ay(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.ay(s.value[1]))}},
gN:function(a){var s=[]
this.F(a,new W.fQ(s))
return s},
gk:function(a){return a.size}}
W.fQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aP.prototype={$iaP:1}
W.d8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.W.prototype={$iW:1}
W.N.prototype={
ga5:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.iH("No elements"))
if(r>1)throw H.c(P.iH("More than one element"))
s=s.firstChild
s.toString
return s},
O:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.f(r,b)
s.replaceChild(c,r[b])},
gG:function(a){var s=this.a.childNodes
return new W.bK(s,s.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.f(s,b)
return s[b]}}
W.o.prototype={
e_:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
e2:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.kB(s,b,a)}catch(q){H.ai(q)}return a},
h:function(a){var s=a.nodeValue
return s==null?this.c0(a):s},
d5:function(a,b,c){return a.replaceChild(b,c)},
$io:1}
W.c1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.aR.prototype={
gk:function(a){return a.length},
$iaR:1}
W.dn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.h2.prototype={
j:function(a,b){return P.ay(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.ay(s.value[1]))}},
gN:function(a){var s=[]
this.F(a,new W.h3(s))
return s},
gk:function(a){return a.size}}
W.h3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dw.prototype={
gk:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.dz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.aS.prototype={$iaS:1}
W.dA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.aT.prototype={
gk:function(a){return a.length},
$iaT:1}
W.he.prototype={
j:function(a,b){return a.getItem(H.iV(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gN:function(a){var s=[]
this.F(a,new W.hf(s))
return s},
gk:function(a){return a.length}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.c5.prototype={
P:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
s=W.kV("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.N(r).O(0,new W.N(s))
return r}}
W.dG.prototype={
P:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.t.P(s.createElement("table"),b,c,d)
s.toString
s=new W.N(s)
q=s.ga5(s)
q.toString
s=new W.N(q)
p=s.ga5(s)
r.toString
p.toString
new W.N(r).O(0,new W.N(p))
return r}}
W.dH.prototype={
P:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.t.P(s.createElement("table"),b,c,d)
s.toString
s=new W.N(s)
q=s.ga5(s)
r.toString
q.toString
new W.N(r).O(0,new W.N(q))
return r}}
W.bh.prototype={$ibh:1}
W.as.prototype={$ias:1}
W.a7.prototype={$ia7:1}
W.dI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.dJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.hk.prototype={
gk:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.aV.prototype={$iaV:1}
W.dN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.ho.prototype={
gk:function(a){return a.length}}
W.ae.prototype={}
W.hG.prototype={
h:function(a){return String(a)}}
W.dX.prototype={
gk:function(a){return a.length}}
W.at.prototype={
gdA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.q("deltaY is not supported"))},
gdz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.q("deltaX is not supported"))},
$iat:1}
W.bl.prototype={
d6:function(a,b){return a.requestAnimationFrame(H.cv(b,1))},
co:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bm.prototype={$ibm:1}
W.e2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.c6.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b0(b)
s=a.left==s.gbx(b)&&a.top==s.gbQ(b)&&a.width==s.gah(b)&&a.height==s.gaf(b)}else s=!1
return s},
gH:function(a){return W.jQ(J.Y(a.left),J.Y(a.top),J.Y(a.width),J.Y(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.ee.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.ca.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.ey.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.eF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ii:1,
$in:1,
$ie:1}
W.hW.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gN(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gN:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.f(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.hX.prototype={
j:function(a,b){return this.a.getAttribute(H.iV(b))},
gk:function(a){return this.gN(this).length}}
W.ix.prototype={}
W.e9.prototype={}
W.hZ.prototype={
$1:function(a){return this.a.$1(a)}}
W.iN.prototype={}
W.bn.prototype={
c8:function(a){var s
if($.ef.a===0){for(s=0;s<262;++s)$.ef.m(0,C.M[s],W.my())
for(s=0;s<12;++s)$.ef.m(0,C.j[s],W.mz())}},
ae:function(a){return $.ky().w(0,W.bH(a))},
Z:function(a,b,c){var s=$.ef.j(0,H.d(W.bH(a))+"::"+b)
if(s==null)s=$.ef.j(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ia0:1}
W.w.prototype={
gG:function(a){return new W.bK(a,this.gk(a))}}
W.c2.prototype={
ae:function(a){return C.a.bs(this.a,new W.fU(a))},
Z:function(a,b,c){return C.a.bs(this.a,new W.fT(a,b,c))},
$ia0:1}
W.fU.prototype={
$1:function(a){return a.ae(this.a)}}
W.fT.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)}}
W.cg.prototype={
ca:function(a,b,c,d){var s,r,q
this.a.O(0,c)
s=b.aD(0,new W.i5())
r=b.aD(0,new W.i6())
this.b.O(0,s)
q=this.c
q.O(0,C.O)
q.O(0,r)},
ae:function(a){return this.a.w(0,W.bH(a))},
Z:function(a,b,c){var s=this,r=W.bH(a),q=s.c
if(q.w(0,H.d(r)+"::"+b))return s.d.di(c)
else if(q.w(0,"*::"+b))return s.d.di(c)
else{q=s.b
if(q.w(0,H.d(r)+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,H.d(r)+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$ia0:1}
W.i5.prototype={
$1:function(a){return!C.a.w(C.j,a)}}
W.i6.prototype={
$1:function(a){return C.a.w(C.j,a)}}
W.eH.prototype={
Z:function(a,b,c){if(this.c3(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.i7.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.eG.prototype={
ae:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.bH(a)==="foreignObject")return!1
if(s)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.b.aF(b,"on"))return!1
return this.ae(a)},
$ia0:1}
W.bK.prototype={
n:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kA(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gv:function(a){return this.d}}
W.a0.prototype={}
W.i4.prototype={}
W.eQ.prototype={
b4:function(a){var s=this,r=new W.ib(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
ak:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.j8(a)
else b.removeChild(a)},
d8:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.kF(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ai(p)}r="element unprintable"
try{r=J.R(a)}catch(p){H.ai(p)}try{q=W.bH(a)
this.d7(a,b,n,r,q,m,l)}catch(p){if(H.ai(p) instanceof P.U)throw p
else{this.ak(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
d7:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.ak(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.ae(a)){m.ak(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.Z(a,"is",g)){m.ak(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.gN(f).slice(0)
for(q=f.gN(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.f(r,q)
p=r[q]
o=m.a
n=J.kJ(p)
H.iV(p)
if(!o.Z(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.b4(a.content)}}
W.ib.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.d8(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.ak(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.iH("Corrupt HTML")
throw H.c(q)}}catch(o){H.ai(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ev.prototype={}
W.ch.prototype={}
W.ci.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eC.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.ck.prototype={}
W.cl.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
P.ih.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.cT.prototype={
gav:function(){return new H.aN(new H.aX(this.b,new P.fv()),new P.fw())},
m:function(a,b,c){var s=this.gav()
J.kH(s.b.$1(J.f1(s.a,b)),c)},
p:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aB(this.gav().a)},
j:function(a,b){var s=this.gav()
return s.b.$1(J.f1(s.a,b))},
gG:function(a){var s=P.iE(this.gav(),!1)
return new J.V(s,s.length)}}
P.fv.prototype={
$1:function(a){return t.h.b(a)}}
P.fw.prototype={
$1:function(a){return t.h.a(a)}}
P.eu.prototype={}
P.a6.prototype={}
P.b7.prototype={$ib7:1}
P.d3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$ii:1,
$ie:1}
P.b9.prototype={$ib9:1}
P.dh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$ii:1,
$ie:1}
P.fX.prototype={
gk:function(a){return a.length}}
P.be.prototype={$ibe:1}
P.dF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$ii:1,
$ie:1}
P.j.prototype={
gbt:function(a){return new P.cT(a,new W.N(a))},
P:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.jO(null))
n.push(W.jU())
n.push(new W.eG())
c=new W.eQ(new W.c2(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.l.dv(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.N(q)
o=n.ga5(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bi.prototype={$ibi:1}
P.dO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$ii:1,
$ie:1}
P.ei.prototype={}
P.ej.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.f6.prototype={
gk:function(a){return a.length}}
P.f7.prototype={
j:function(a,b){return P.ay(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.ay(s.value[1]))}},
gN:function(a){var s=[]
this.F(a,new P.f8(s))
return s},
gk:function(a){return a.size}}
P.f8.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cD.prototype={
gk:function(a){return a.length}}
P.ak.prototype={}
P.di.prototype={
gk:function(a){return a.length}}
P.e0.prototype={}
P.dB.prototype={
gk:function(a){return a.length},
j:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
s=P.ay(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$ii:1,
$ie:1}
P.ez.prototype={}
P.eA.prototype={}
K.aj.prototype={
a3:function(a,b){return!0},
h:function(a){return"all"}}
K.cW.prototype={
a3:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].a3(0,b))return!0
return!1},
h:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.h(0)}return q}}
K.S.prototype={
a3:function(a,b){return!this.c_(0,b)},
h:function(a){return"!["+this.ba(0)+"]"}}
K.fY.prototype={
a3:function(a,b){if(typeof b!=="number")return H.F(b)
return this.a<=b&&this.b>=b},
h:function(a){var s=H.iF(this.a),r=H.iF(this.b)
return s+".."+r}}
K.h4.prototype={
c5:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.J("May not create a Set with zero characters."))
s=new H.M(t.E)
for(r=new H.an(a,a.gk(a));r.n();){q=r.d
s.m(0,q,!0)}p=P.iE(new H.am(s),!0)
if(!!p.immutable$list)H.I(P.q("sort"))
H.ln(p,J.m0())
this.a=p},
a3:function(a,b){return C.a.w(this.a,b)},
h:function(a){return P.iI(this.a)}}
L.dC.prototype={
l:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.hp(this.a.i(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
dE:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.a3(0,a))return p}return null},
h:function(a){return this.b},
bo:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.w(0,l))m+=" (consume)"
for(l=new H.am(n.d.c),l=l.gG(l);l.n();){r=l.d
m+="\n"
q=n.d.c.j(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.w(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.h(0))}return m.charCodeAt(0)==0?m:m}}
L.dL.prototype={
h:function(a){var s=H.j4(this.b,"\n","\\n"),r=H.j4(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.dM.prototype={
a4:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.r)(c),++r){q=c[r]
this.c.m(0,q,b)}},
h:function(a){return this.b}}
L.hl.prototype={
i:function(a,b){var s=this.a.j(0,b)
if(s==null){s=new L.dC(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
D:function(a){var s=this.b.j(0,a)
if(s==null){s=new L.dM(a)
s.c=new H.M(t.i)
this.b.m(0,a,s)}return s},
b3:function(a){return this.eb(a)},
eb:function(a){var s=this
return P.m8(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$b3(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.e0(a0,0)
else{if(!r.n()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.dE(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.iI(b)
throw H.c(P.J("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.I(P.q("removeRange"))
P.iG(0,k,b.length)
b.splice(0,k-0)
C.a.O(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.w(0,n.a)?7:8
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
if(d.d!=null){g=P.iI(c)
f=d.d
e=f.c.j(0,g)
n=new L.dL(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.w(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.lx()
case 1:return P.ly(o)}}},t.j)},
h:function(a){var s,r=new P.bg(""),q=this.d
if(q!=null)r.a=q.bo()+"\n"
for(q=this.a,q=q.ged(q),q=new H.bV(J.aA(q.a),q.b);q.n();){s=q.a
if(s!=this.d)r.a+=s.bo()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.hp.prototype={
h:function(a){return this.b.b+": "+this.ba(0)}}
O.bz.prototype={
b5:function(a,b){this.b=null
this.c=a},
cX:function(a){return!0},
cr:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gG:function(a){var s=this.a
return new J.V(s,s.length)},
u:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.f(s,b)
return s[b]},
$ie:1}
O.bX.prototype={
gk:function(a){return this.a.length},
gB:function(){var s=this.b
return s==null?this.b=D.aG():s},
a6:function(){var s=this.b
if(s!=null)s.R(null)},
gan:function(a){var s=this.a
if(s.length>0)return C.a.gaA(s)
else return V.js()},
bJ:function(a){var s=this.a
if(a==null)s.push(V.js())
else s.push(a)
this.a6()},
b2:function(){var s=this.a
if(s.length>0){s.pop()
this.a6()}}}
E.f9.prototype={}
E.b6.prototype={
bh:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.V(s,s.length);s.n();){r=s.d
if(r.f==null)r.bh()}},
sb7:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gB().J(0,q.gbC())
s=q.c
if(s!=null)s.gB().p(0,q.gbC())
r=new D.D("shape",p,q.c)
r.b=!0
q.X(r)}},
sbO:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gB().J(0,q.gbE())
s=q.f
q.f=a
if(a!=null)a.gB().p(0,q.gbE())
q.bh()
r=new D.D("technique",s,q.f)
r.b=!0
q.X(r)}},
sao:function(a){var s,r,q=this
if(!J.L(q.r,a)){s=q.r
if(s!=null)s.gB().J(0,q.gbA())
if(a!=null)a.gB().p(0,q.gbA())
q.r=a
r=new D.D("mover",s,a)
r.b=!0
q.X(r)}},
bR:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.r
if(k!=null){s=k.r
r=b.e
if(s<r){k.r=r
s=k.y
if(s!=null)++s.d
k.sbS(k.a+k.d*b.y)
k.sbH(0,k.b+k.e*b.y)
k.sbM(k.c+k.f*b.y)
s=k.c
q=Math.cos(s)
p=Math.sin(s)
s=V.aO(q,-p,0,0,p,q,0,0,0,0,1,0,0,0,0,1)
r=k.b
q=Math.cos(r)
p=Math.sin(r)
s=s.K(0,V.aO(q,0,-p,0,0,1,0,0,p,0,q,0,0,0,0,1))
r=k.a
q=Math.cos(r)
p=Math.sin(r)
k.x=s.K(0,V.aO(1,0,0,0,0,q,-p,0,0,p,q,0,0,0,0,1))
s=k.y
if(s!=null)s.aC(0)}o=k.x}else o=null
if(!J.L(o,l.x)){n=l.x
l.x=o
m=new D.D("matrix",n,o)
m.b=!0
l.X(m)}for(k=l.y.a,k=new J.V(k,k.length);k.n();)k.d.bR(0,b)},
ag:function(a){var s,r,q,p,o,n=this,m=a.dx,l=n.x,k=m.a
if(l==null)k.push(m.gan(m))
else k.push(l.K(0,m.gan(m)))
m.a6()
a.bK(n.f)
m=a.dy
s=(m&&C.a).gaA(m)
if(s!=null&&n.d!=null){m=s.a
if(m==null){m=s.d
l=m?"High":"Grey"
l+="ViewDepth"
r=a.fr.j(0,l)
if(r==null){l=a.a
k=m?"High":"Grey"
k+="ViewDepth"
r=new A.fi(l,k)
r.c6(l,k)
q=u.c.charCodeAt(0)==0?u.c:u.c
p=(m?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
r.c=q
r.d=p.charCodeAt(0)==0?p:p
r.e=r.bl(q,35633)
r.f=r.bl(r.d,35632)
q=l.createProgram()
r.r=q
l.attachShader(q,r.e)
l.attachShader(r.r,r.f)
l.linkProgram(r.r)
if(!l.getProgramParameter(r.r,35714)){o=l.getProgramInfoLog(r.r)
l.deleteProgram(r.r)
H.I(P.J("Failed to link shader: "+H.d(o)))}r.d9()
r.dc()
r.z=r.x.j(0,"posAttr")
m=t.n
r.Q=m.a(r.y.j(0,"width"))
r.ch=m.a(r.y.j(0,"stop"))
m=t.I
r.cx=m.a(r.y.j(0,"viewObjMat"))
r.cy=m.a(r.y.j(0,"projMat"))
if(k.length===0)H.I(P.J("May not cache a shader with no name."))
if(a.fr.ds(0,k))H.I(P.J('Shader cache already contains a shader by the name "'+k+'".'))
a.fr.m(0,k,r)}s.a=r
m=r}l=n.e
if((!(l instanceof Z.cF)?n.e=null:l)==null){m=n.d.dn(new Z.hR(a.a),$.az())
l=m.dD($.az())
k=s.a
l.e=k.z.c
n.e=m
m=k}l=a.a
l.useProgram(m.r)
m.x.dC()
k=s.b
q=s.c
p=m.Q
p.a.uniform1f(p.d,k-q)
q=s.c
k=m.ch
k.a.uniform1f(k.d,q)
q=a.cy
q=q.gan(q)
k=m.cy
k.toString
k.b6(q.bP(0,!0))
k=a.cx
if(k==null){k=a.db
k=k.gan(k)
q=a.dx
q=a.cx=k.K(0,q.gan(q))
k=q}m=m.cx
m.toString
m.b6(k.bP(0,!0))
m=n.e
m.aU(a)
m.ag(a)
m.ec(a)
m=s.a
m.toString
l.useProgram(null)
m.x.dB()}for(m=n.y.a,m=new J.V(m,m.length);m.n();)m.d.ag(a)
a.bI()
a.dx.b2()},
X:function(a){var s=this.z
if(s!=null)s.R(a)},
T:function(){return this.X(null)},
bD:function(a){this.e=null
this.X(a)},
dR:function(){return this.bD(null)},
bF:function(a){this.X(a)},
dS:function(){return this.bF(null)},
bB:function(a){this.X(a)},
dQ:function(){return this.bB(null)},
bz:function(a){this.X(a)},
dN:function(){return this.bz(null)},
dM:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gby(),q=0;q<b.length;b.length===s||(0,H.r)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.T()},
dP:function(a,b){var s,r
for(s=b.gG(b),r=this.gby();s.n();)s.gv(s).gB().J(0,r)
this.T()},
h:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.b3.prototype={
h:function(a){return this.b}}
E.ba.prototype={
h:function(a){return this.b}}
E.hY.prototype={}
E.fZ.prototype={
c4:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.bB(Date.now(),!1)
r.y=0
r.cx=null
s=new O.bX()
s.a=[]
s.gB().p(0,new E.h_(r))
r.cy=s
s=new O.bX()
s.a=[]
s.gB().p(0,new E.h0(r))
r.db=s
s=new O.bX()
s.a=[]
s.gB().p(0,new E.h1(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.M(t.F)},
bK:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gaA(s):a)},
bI:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.h_.prototype={
$1:function(a){}}
E.h0.prototype={
$1:function(a){this.a.cx=null}}
E.h1.prototype={
$1:function(a){this.a.cx=null}}
E.dK.prototype={
bd:function(a){this.bL()},
bc:function(){return this.bd(null)},
bn:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.K()
if(typeof p!=="number")return H.F(p)
s=C.d.bu(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.K()
r=C.d.bu(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.jG(C.h,q.ge3())}},
bL:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.v.co(s)
r=W.k4(new E.hj(this),t.H)
r.toString
C.v.d6(s,r)}},
e1:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.bn()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.bB(p,!1)
q.y=1000*(p-q.r.a)*0.000001
p=q.cy
C.a.sk(p.a,0)
p.a6()
p=q.db
C.a.sk(p.a,0)
p.a6()
p=q.dx
C.a.sk(p.a,0)
p.a6()
p=q.dy
p.toString
C.a.sk(p,0)
q.dy.push(null)
m.ag(n.e)}}catch(o){s=H.ai(o)
r=H.j0(o)
P.kd("Error: "+H.d(s))
P.kd("Stack: "+H.d(r))
throw H.c(s)}}}
E.hj.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.e1()}}}
Z.dY.prototype={}
Z.fa.prototype={
aU:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ai(q)
r=P.J('Failed to bind buffer attribute "'+p.a.h(0)+'": '+H.d(s))
throw H.c(r)}},
h:function(a){var s=this
return"["+s.a.h(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.hR.prototype={}
Z.cF.prototype={
dD:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
aU:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].aU(a)},
ec:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ag:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.f(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
h:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)o.push(s[q].h(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.R(s[q]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(o,", ")+"\nAttrs:   "+C.a.l(p,", ")}}
Z.bL.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dr(this.c))+"'")+"]"}}
Z.dW.prototype={
gb8:function(a){var s=this.a,r=(s&$.az().a)!==0?3:0
if((s&$.bu().a)!==0)r+=3
if((s&$.bt().a)!==0)r+=3
if((s&$.bv().a)!==0)r+=2
if((s&$.bw().a)!==0)r+=3
if((s&$.cy().a)!==0)r+=3
if((s&$.cz().a)!==0)r+=4
if((s&$.bx().a)!==0)++r
return(s&$.bs().a)!==0?r+4:r},
dj:function(a){var s,r=$.az(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cy()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0)if(s===a)return r
return $.kx()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dW))return!1
return this.a===b.a},
h:function(a){var s=[],r=this.a
if((r&$.az().a)!==0)s.push("Pos")
if((r&$.bu().a)!==0)s.push("Norm")
if((r&$.bt().a)!==0)s.push("Binm")
if((r&$.bv().a)!==0)s.push("Txt2D")
if((r&$.bw().a)!==0)s.push("TxtCube")
if((r&$.cy().a)!==0)s.push("Clr3")
if((r&$.cz().a)!==0)s.push("Clr4")
if((r&$.bx().a)!==0)s.push("Weight")
if((r&$.bs().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.l(s,"|")}}
D.fb.prototype={}
D.bI.prototype={
p:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
J:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.a
s=(q&&C.a).J(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.b
s=(q&&C.a).J(q,b)||s}return s},
R:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.aa()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.F(P.iE(s,!0),new D.fs(o))
s=p.b
if(s!=null){p.b=[]
C.a.F(s,new D.ft(o))}return!0},
aC:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.R(s)}}}}
D.fs.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ft.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.aa.prototype={}
D.bM.prototype={}
D.bN.prototype={}
D.D.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cG.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.d2.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d2))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.fG.prototype={
dX:function(a){this.d.p(0,a.a)
return!1},
dT:function(a){this.d.J(0,a.a)
return!1}}
X.fK.prototype={
b1:function(a,b){this.r=a.a
return!1},
aq:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.bY()
if(typeof s!=="number")return s.bT()
this.r=(s&~r)>>>0
return!1},
ap:function(a,b){return!1},
dY:function(a){return!1},
cM:function(a,b,c){return}}
X.bY.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bY))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
h:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.fR.prototype={
b1:function(a,b){this.f=a.a
return!1},
aq:function(a,b){var s=this.f,r=a.a
if(typeof r!=="number")return r.bY()
if(typeof s!=="number")return s.bT()
this.f=(s&~r)>>>0
return!1},
ap:function(a,b){return!1},
dZ:function(a,b){return!1}}
X.hn.prototype={
dW:function(a){return!1},
dU:function(a){return!1},
dV:function(a){return!1}}
X.dV.prototype={
bk:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.d2(s,new X.bY(r,a.altKey,a.shiftKey))},
ac:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aS:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
a2:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.V()
if(typeof o!=="number")return H.F(o)
s=r.top
if(typeof p!=="number")return p.V()
if(typeof s!=="number")return H.F(s)
return new V.ao(q-o,p-s)},
aj:function(a){return new V.bk(a.movementX,a.movementY)},
aQ:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=C.d.Y(p.pageX)
C.d.Y(p.pageY)
n=k.left
if(typeof n!=="number")return H.F(n)
C.d.Y(p.pageX)
m=C.d.Y(p.pageY)
l=k.top
if(typeof l!=="number")return H.F(l)
j.push(new V.ao(o-n,m-l))}return j},
a0:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.cG(s,new X.bY(r,a.altKey,a.shiftKey))},
aN:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.V()
if(typeof n!=="number")return H.F(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.V()
if(typeof p!=="number")return H.F(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.F(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.F(p)
p=r<p}else p=!1
return p},
cH:function(a){this.f=!0},
ct:function(a){this.f=!1},
cB:function(a){if(this.f&&this.aN(a))a.preventDefault()},
cL:function(a){var s
if(!this.f)return
s=this.bk(a)
this.b.dX(s)},
cJ:function(a){var s
if(!this.f)return
s=this.bk(a)
this.b.dT(s)},
cO:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.ac(a)
if(p.x){s=p.a0(a)
r=p.aj(a)
if(p.d.b1(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.a0(a)
q=p.a2(a)
if(p.c.b1(s,q))a.preventDefault()},
cS:function(a){var s,r,q,p=this
p.ac(a)
s=p.a0(a)
if(p.x){r=p.aj(a)
if(p.d.aq(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.aq(s,q))a.preventDefault()},
cF:function(a){var s,r,q,p=this
if(!p.aN(a)){p.ac(a)
s=p.a0(a)
if(p.x){r=p.aj(a)
if(p.d.aq(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.aq(s,q))a.preventDefault()}},
cQ:function(a){var s,r,q,p=this
p.ac(a)
s=p.a0(a)
if(p.x){r=p.aj(a)
if(p.d.ap(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.ap(s,q))a.preventDefault()},
cD:function(a){var s,r,q,p=this
if(!p.aN(a)){p.ac(a)
s=p.a0(a)
if(p.x){r=p.aj(a)
if(p.d.ap(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.ap(s,q))a.preventDefault()}},
cU:function(a){var s,r,q,p,o,n=this
n.ac(a)
s=(a&&C.u).gdz(a)
r=C.u.gdA(a)
q=n.Q
if(typeof s!=="number")return s.K()
if(typeof q!=="number")return H.F(q)
if(typeof r!=="number")return r.K()
p=new V.bk(s*q,r*q)
if(n.x){if(n.d.dY(p))a.preventDefault()
return}if(n.r)return
o=n.a2(a)
if(n.c.dZ(p,o))a.preventDefault()},
cW:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.a0(q.y)
r=q.a2(q.y)
q.d.cM(s,r,p)}},
d2:function(a){var s,r=this
r.a.focus()
r.f=!0
r.aS(a)
s=r.aQ(a)
if(r.e.dW(s))a.preventDefault()},
cZ:function(a){var s
this.aS(a)
s=this.aQ(a)
if(this.e.dU(s))a.preventDefault()},
d0:function(a){var s
this.aS(a)
s=this.aQ(a)
if(this.e.dV(s))a.preventDefault()}}
V.b5.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b5))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.fq.prototype={}
V.d7.prototype={
bP:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
K:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aO(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d7))return!1
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
h:function(a){return this.C()},
t:function(a){var s,r,q,p,o,n=this,m=V.ij([n.a,n.e,n.y,n.cx],3,0),l=V.ij([n.b,n.f,n.z,n.cy],3,0),k=V.ij([n.c,n.r,n.Q,n.db],3,0),j=V.ij([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.f(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.f(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.f(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.f(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.f(m,1)
o=o+m[1]+", "
if(1>=r)return H.f(l,1)
o=o+l[1]+", "
if(1>=q)return H.f(k,1)
o=o+k[1]+", "
if(1>=p)return H.f(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.f(m,2)
s=s+m[2]+", "
if(2>=r)return H.f(l,2)
s=s+l[2]+", "
if(2>=q)return H.f(k,2)
s=s+k[2]+", "
if(2>=p)return H.f(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.f(m,3)
o=o+m[3]+", "
if(3>=r)return H.f(l,3)
o=o+l[3]+", "
if(3>=q)return H.f(k,3)
o=o+k[3]+", "
if(3>=p)return H.f(j,3)
return s+(o+j[3]+"]")},
C:function(){return this.t("")}}
V.ao.prototype={
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.bb.prototype={
V:function(a,b){return new V.bb(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bb))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.dq.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dq))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.dt.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dt))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.bk.prototype={
b_:function(a){var s,r=this.a
if(typeof r!=="number")return r.K()
s=this.b
if(typeof s!=="number")return s.K()
return Math.sqrt(r*r+s*s)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bk))return!1
s=b.a
r=this.a
$.E().toString
if(typeof s!=="number")return s.V()
if(typeof r!=="number")return H.F(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.V()
if(typeof r!=="number")return H.F(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.G.prototype={
b_:function(a){return Math.sqrt(this.am(this))},
am:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b0:function(a,b){return new V.G(V.j2(this.a,a.a,b),V.j2(this.b,a.b,b),V.j2(this.c,a.c,b))},
a_:function(){var s=this,r=Math.sqrt(s.am(s))
if(r===1)return s
return s.bU(0,r)},
aZ:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.G(s*r-q*p,q*o-n*r,n*p-s*o)},
E:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a){return new V.G(-this.a,-this.b,-this.c)},
bU:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.iL()
return new V.G(this.a/b,this.b/b,this.c/b)},
dH:function(){$.E().toString
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
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
U.cJ.prototype={
gB:function(){var s=this.b
return s==null?this.b=D.aG():s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
return J.L(this.a,b.a)},
h:function(a){return"Constant: "+this.a.t("          ")}}
U.fS.prototype={}
U.du.prototype={
gB:function(){var s=this.y
return s==null?this.y=D.aG():s},
ab:function(a){var s=this.y
if(s!=null)s.R(a)},
sbS:function(a){var s
a=V.j5(a,0,6.283185307179586)
s=this.a
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.D("yaw",s,a)
s.b=!0
this.ab(s)}},
sbH:function(a,b){var s
b=V.j5(b,0,6.283185307179586)
s=this.b
$.E().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.D("pitch",s,b)
s.b=!0
this.ab(s)}},
sbM:function(a){var s
a=V.j5(a,0,6.283185307179586)
s=this.c
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.D("roll",s,a)
s.b=!0
this.ab(s)}},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.du))return!1
s=q.a
r=b.a
$.E().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
h:function(a){var s=this
return"Rotator: ["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+"], ["+V.u(s.d,3,0)+", "+V.u(s.e,3,0)+", "+V.u(s.f,3,0)+"]"}}
M.cP.prototype={
a8:function(a){var s=this.y
if(s!=null)s.R(a)},
c9:function(){return this.a8(null)},
cv:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga7(),q=0;q<b.length;b.length===s||(0,H.r)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.bM()
s.b=!0
this.a8(s)},
cz:function(a,b){var s,r
for(s=b.gG(b),r=this.ga7();s.n();)s.gv(s).gB().J(0,r)
s=new D.bN()
s.b=!0
this.a8(s)},
gB:function(){var s=this.y
return s==null?this.y=D.aG():s},
ag:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.bK(a3.d)
s=a3.c
s.toString
r=a4.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.F(q)
m=C.d.Y(n*q)
n=o.b
if(typeof p!=="number")return H.F(p)
l=C.d.Y(n*p)
n=C.d.Y(o.c*q)
a4.c=n
o=C.d.Y(o.d*p)
a4.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=a3.b
r=a4.c
o=a4.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.aO(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.bJ(g)
r=$.ju
if(r==null){r=$.jw
if(r==null)r=$.jw=new V.bb(0,0,0)
o=$.jK
if(o==null)o=$.jK=new V.G(0,1,0)
n=$.jJ
f=(n==null?$.jJ=new V.G(0,0,-1):n).a_()
e=o.aZ(f).a_()
d=f.aZ(e)
c=new V.G(r.a,r.b,r.c)
b=e.aE(0).am(c)
a=d.aE(0).am(c)
a0=f.aE(0).am(c)
r=V.aO(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.ju=r
a1=r}else a1=r
s=s.b
if(s!=null){a2=s.a
if(a2!=null)a1=a2.K(0,a1)}a4.db.bJ(a1)
for(s=a3.e.a,s=new J.V(s,s.length);s.n();)s.d.bR(0,a4)
for(s=a3.e.a,s=new J.V(s,s.length);s.n();)s.d.ag(a4)
a3.b.toString
a4.cy.b2()
a4.db.b2()
a3.c.toString
a4.bI()}}
A.f4.prototype={}
A.f5.prototype={
j:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
dC:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dB:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.fi.prototype={}
A.dx.prototype={
c6:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
bl:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.J("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
d9:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.F(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.f4(n,r.name,q))}p.x=new A.f5(o)},
dc:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.F(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.dw(r.type,r.size,r.name,q))}p.y=new A.hB(o)},
aa:function(a,b,c){var s=this.a
if(a===1)return new A.ht(s,b,c)
else return A.iK(s,this.r,b,a,c)},
cl:function(a,b,c){var s=this.a
if(a===1)return new A.hE(s,b,c)
else return A.iK(s,this.r,b,a,c)},
cm:function(a,b,c){var s=this.a
if(a===1)return new A.hF(s,b,c)
else return A.iK(s,this.r,b,a,c)},
ax:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
dw:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aa(b,c,d)
case 5121:return s.aa(b,c,d)
case 5122:return s.aa(b,c,d)
case 5123:return s.aa(b,c,d)
case 5124:return s.aa(b,c,d)
case 5125:return s.aa(b,c,d)
case 5126:return new A.dP(s.a,c,d)
case 35664:return new A.hv(s.a,c,d)
case 35665:return new A.hx(s.a,c,d)
case 35666:return new A.hz(s.a,c,d)
case 35667:return new A.hw(s.a,c,d)
case 35668:return new A.hy(s.a,c,d)
case 35669:return new A.hA(s.a,c,d)
case 35674:return new A.hC(s.a,c,d)
case 35675:return new A.hD(s.a,c,d)
case 35676:return new A.dQ(s.a,c,d)
case 35678:return s.cl(b,c,d)
case 35680:return s.cm(b,c,d)
case 35670:throw H.c(s.ax("BOOL",c))
case 35671:throw H.c(s.ax("BOOL_VEC2",c))
case 35672:throw H.c(s.ax("BOOL_VEC3",c))
case 35673:throw H.c(s.ax("BOOL_VEC4",c))
default:throw H.c(P.J("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.hs.prototype={}
A.hB.prototype={
j:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
h:function(a){return this.C()},
C:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].h(0)+"\n"
return q}}
A.ht.prototype={
h:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hw.prototype={
h:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hy.prototype={
h:function(a){return"Uniform3i: "+H.d(this.c)}}
A.hA.prototype={
h:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hu.prototype={
h:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.dP.prototype={
h:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hv.prototype={
h:function(a){return"Uniform2f: "+H.d(this.c)}}
A.hx.prototype={
h:function(a){return"Uniform3f: "+H.d(this.c)}}
A.hz.prototype={
h:function(a){return"Uniform4f: "+H.d(this.c)}}
A.hC.prototype={
h:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.hD.prototype={
h:function(a){return"UniformMat3: "+H.d(this.c)}}
A.dQ.prototype={
b6:function(a){var s=new Float32Array(H.iW(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
h:function(a){return"UniformMat4: "+H.d(this.c)}}
A.hE.prototype={
h:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.hF.prototype={
h:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.id.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.b0(q.b,b).b0(q.d.b0(q.c,b),c)
q=new V.bb(p.a,p.b,p.c)
if(!J.L(a.f,q)){a.f=q
q=a.a
if(q!=null)q.T()}q=p.a_()
if(!J.L(a.z,q)){a.z=q
q=a.a
if(q!=null)q.T()}q=1-b
s=1-c
s=new V.dq(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.L(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.T()}}}
F.fu.prototype={
cf:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.iL()
if(n!=null)q=q.E(0,n)
if(s!=null)q=q.E(0,s)
if(r!=null)q=q.E(0,r)
if(q.dH())return p
return q.a_()},
cg:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.V(0,n)
q=new V.G(o.a,o.b,o.c).a_()
o=r.V(0,n)
return q.aZ(new V.G(o.a,o.b,o.c).a_()).a_()},
aV:function(){var s,r=this
if(r.d!=null)return!0
s=r.cf()
if(s==null){s=r.cg()
if(s==null)return!1}r.d=s
r.a.a.T()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.U(J.R(q.e),0)+", "+C.b.U(J.R(r.b.e),0)+", "+C.b.U(J.R(r.c.e),0)+" {"
q=r.d
s=(q!=null?s+(q.h(0)+", "):s+"-, ")+"-}"
return s},
C:function(){return this.t("")}}
F.fH.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.U(J.R(s.e),0)+", "+C.b.U(J.R(this.b.e),0)},
C:function(){return this.t("")}}
F.fW.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.U(J.R(s.e),0)},
C:function(){return this.t("")}}
F.h5.prototype={
gB:function(){var s=this.e
return s==null?this.e=D.aG():s},
dK:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.I()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){p=e[q]
f.a.p(0,p.du())}f.a.I()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.I()
m=m.e
if(typeof m!=="number")return m.E()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
l=n[m]
f.b.a.a.p(0,l)
m=new F.fW()
if(l.a==null)H.I(P.J("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.R(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.I()
m=m.e
if(typeof m!=="number")return m.E()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.I()
n=n.e
if(typeof n!=="number")return n.E()
n+=s
m=m.c
if(n>=m.length)return H.f(m,n)
i=m[n]
n=f.c.a
n.a.p(0,j)
n.a.p(0,i)
n=new F.fH()
m=j.a
if(m==null)H.I(P.J("May not create a line with a start vertex which is not attached to a shape."))
if(m!=i.a)H.I(P.J("May not create a line with vertices attached to different shapes."))
n.a=j
j.c.b.push(n)
n.b=i
i.c.c.push(n)
n.a.a.c.b.push(n)
n=n.a.a.e
if(n!=null)n.R(null)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.I()
m=m.e
if(typeof m!=="number")return m.E()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.I()
n=n.e
if(typeof n!=="number")return n.E()
n+=s
m=m.c
if(n>=m.length)return H.f(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.I()
m=m.e
if(typeof m!=="number")return m.E()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
g=n[m]
m=f.d.a
m.a.p(0,j)
m.a.p(0,i)
m.a.p(0,g)
F.cQ(j,i,g)}e=f.e
if(e!=null)e.aC(0)},
dn:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.az().a)!==0?1:0
if((s&$.bu().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bv().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.cy().a)!==0)++r
if((s&$.cz().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a5.gb8(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.dj(l)
j=k.gb8(k)
n[l]=new Z.fa(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.f(h,i)
g=h[i].dJ(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.f(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.iW(o)),35044)
s.bindBuffer(a2,null)
b=new Z.cF(new Z.dY(a2,c),n)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.I()
a.push(h.e)}a0=Z.iM(s,34963,a)
b.b.push(new Z.bL(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.I()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.f(h,l)
h=h[l].b
h.a.a.I()
a.push(h.e)}a0=Z.iM(s,34963,a)
b.b.push(new Z.bL(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.I()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.f(h,l)
h=h[l].b
h.a.a.I()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.f(h,l)
h=h[l].c
h.a.a.I()
a.push(h.e)}a0=Z.iM(s,34963,a)
b.b.push(new Z.bL(4,a.length,a0))}return b},
h:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.t(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.t(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.t(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.t(r))}return C.a.l(q,"\n")},
T:function(){var s=this.e
if(s!=null)s.R(null)}}
F.h6.prototype={
dh:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.f(c,q)
k=c[q];++q
if(q>=l)return H.f(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.f(c,i)
h=c[i]
if(r<0||r>=l)return H.f(c,r)
g=c[r]
l=s.a
if(n){l.p(0,k)
s.a.p(0,j)
s.a.p(0,h)
f.push(F.cQ(k,j,h))
s.a.p(0,k)
s.a.p(0,h)
s.a.p(0,g)
f.push(F.cQ(k,h,g))}else{l.p(0,j)
s.a.p(0,h)
s.a.p(0,g)
f.push(F.cQ(j,h,g))
s.a.p(0,j)
s.a.p(0,g)
s.a.p(0,k)
f.push(F.cQ(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
aW:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].aV())q=!1
return q},
h:function(a){return this.C()},
t:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(a))
return C.a.l(p,"\n")},
C:function(){return this.t("")}}
F.h7.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.C()},
t:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q.push(r[s].t(a+(""+s+". ")))}return C.a.l(q,"\n")},
C:function(){return this.t("")}}
F.h8.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.C()},
t:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(a))
return C.a.l(p,"\n")},
C:function(){return this.t("")}}
F.hJ.prototype={
aY:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jM(s.cx,p,m,r,q,o,n,a,l)},
du:function(){return this.aY(null)},
dJ:function(a){var s,r=this
if(a.q(0,$.az())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.bu())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.bt()))return[0,0,1]
else if(a.q(0,$.bv())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.q(0,$.bw())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.cy())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.cz())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.q(0,$.bx()))return[r.ch]
else if(a.q(0,$.bs())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
aV:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.iL()
r.d.F(0,new F.hQ(q))
r.r=q.a.a_()
q=r.a
if(q!=null){q.T()
q=r.a.e
if(q!=null)q.aC(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.U(J.R(q.e),0))
s=q.f
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.h(0))
else o.push(p)
o.push(p)
s=q.y
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.z
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.Q
if(s!=null)o.push(s.h(0))
else o.push(p)
o.push(V.u(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.h(0))
else o.push(p)
r=C.a.l(o,", ")
return a+"{"+r+"}"},
C:function(){return this.t("")}}
F.hQ.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.E(0,r)}}}
F.hK.prototype={
I:function(){},
p:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.J("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.T()
return!0},
br:function(a,b){var s=null,r=F.jM(s,s,a,s,s,b,s,s,0)
this.p(0,r)
return r},
gk:function(a){return this.c.length},
aW:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].aV()
return!0},
h:function(a){return this.C()},
t:function(a){var s,r,q,p
this.I()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].t(a))
return C.a.l(s,"\n")},
C:function(){return this.t("")}}
F.hL.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.hM(s,b))
C.a.F(s.d,new F.hN(s,b))},
h:function(a){return this.C()},
C:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(""))
return C.a.l(p,"\n")}}
F.hM.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.hN.prototype={
$1:function(a){var s=this.a
if(!J.L(a.a,s)&&!J.L(a.b,s))this.b.$1(a)}}
F.hO.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.C()},
C:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(""))
return C.a.l(p,"\n")}}
F.hP.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.C()},
C:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].t(""))
return C.a.l(p,"\n")}}
O.fh.prototype={
gB:function(){var s=this.r
return s==null?this.r=D.aG():s},
aH:function(a){var s=this.r
if(s!=null)s.R(a)}}
O.hi.prototype={}
X.iv.prototype={}
X.fy.prototype={
gB:function(){var s=this.x
return s==null?this.x=D.aG():s}}
X.dk.prototype={
gB:function(){var s=this.f
return s==null?this.f=D.aG():s},
a9:function(a){var s=this.f
if(s!=null)s.R(a)},
cc:function(){return this.a9(null)},
sao:function(a){var s,r,q=this
if(!J.L(q.b,a)){s=q.b
if(s!=null)s.gB().J(0,q.gbe())
r=q.b
q.b=a
if(a!=null)a.gB().p(0,q.gbe())
s=new D.D("mover",r,q.b)
s.b=!0
q.a9(s)}}}
X.hg.prototype={}
V.aE.prototype={
as:function(a){this.b=new P.fB(C.I)
this.c=null
this.d=[]},
A:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.ck(p,0,p.length)
m=n==null?p:n
C.H.bZ(o,H.j4(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gaA(l.d).push(o)}},
bG:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.l(b,"\n")
r=p.c
if(r==null)r=p.c=p.ay()
r.toString
q=new H.l(s)
q=new P.aY(r.b3(new H.an(q,q.gk(q))).a())
for(;q.n();)p.aB(q.gv(q))}}
V.cM.prototype={
aB:function(a){var s=this
switch(a.a){case"Class":s.A(a.b,"#551")
break
case"Comment":s.A(a.b,"#777")
break
case"Id":s.A(a.b,"#111")
break
case"Num":s.A(a.b,"#191")
break
case"Reserved":s.A(a.b,"#119")
break
case"String":s.A(a.b,"#171")
break
case"Symbol":s.A(a.b,"#616")
break
case"Type":s.A(a.b,"#B11")
break
case"Whitespace":s.A(a.b,"#111")
break}},
ay:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.hm()
a2.d=a2.i(0,q)
s=a2.i(0,q).l(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.A("a","z")
s.a.push(r)
r=K.A("A","Z")
s.a.push(r)
r=a2.i(0,p).l(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.A("0","9")
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=a2.i(0,q).l(0,o)
r=K.A("0","9")
s.a.push(r)
r=a2.i(0,o).l(0,o)
s=K.A("0","9")
r.a.push(s)
s=a2.i(0,o).l(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=a2.i(0,n).l(0,m)
s=K.A("0","9")
r.a.push(s)
s=a2.i(0,m).l(0,m)
r=K.A("0","9")
s.a.push(r)
r=a2.i(0,q).l(0,l)
s=K.m(new H.l(k))
r.a.push(s)
s=a2.i(0,l).l(0,l)
r=K.m(new H.l(k))
s.a.push(r)
r=a2.i(0,q).l(0,j)
s=K.m(new H.l('"'))
r.a.push(s)
s=a2.i(0,j).l(0,i)
r=K.m(new H.l('"'))
s.a.push(r)
r=a2.i(0,j).l(0,h)
s=K.m(new H.l("\\"))
r.a.push(s)
s=a2.i(0,h).l(0,j)
r=K.m(new H.l('"'))
s.a.push(r)
a2.i(0,j).l(0,j).a.push(new K.aj())
r=a2.i(0,q).l(0,g)
s=K.m(new H.l("'"))
r.a.push(s)
s=a2.i(0,g).l(0,f)
r=K.m(new H.l("'"))
s.a.push(r)
r=a2.i(0,g).l(0,e)
s=K.m(new H.l("\\"))
r.a.push(s)
s=a2.i(0,e).l(0,g)
r=K.m(new H.l("'"))
s.a.push(r)
a2.i(0,g).l(0,g).a.push(new K.aj())
r=a2.i(0,q).l(0,d)
s=K.m(new H.l("/"))
r.a.push(s)
s=a2.i(0,d).l(0,c)
r=K.m(new H.l("/"))
s.a.push(r)
r=a2.i(0,c).l(0,b)
s=K.m(new H.l("\n"))
r.a.push(s)
s=a2.i(0,c).l(0,c)
r=new K.S()
r.a=[]
s.a.push(r)
s=K.m(new H.l("\n"))
r.a.push(s)
s=a2.i(0,d).l(0,a)
r=K.m(new H.l("*"))
s.a.push(r)
r=a2.i(0,a).l(0,a0)
s=K.m(new H.l("*"))
r.a.push(s)
s=a2.i(0,a0).l(0,a)
r=new K.S()
r.a=[]
s.a.push(r)
s=K.m(new H.l("*"))
r.a.push(s)
s=a2.i(0,a0).l(0,b)
r=K.m(new H.l("/"))
s.a.push(r)
r=a2.i(0,q).l(0,a1)
s=K.m(new H.l(" \n\t"))
r.a.push(s)
s=a2.i(0,a1).l(0,a1)
r=K.m(new H.l(" \n\t"))
s.a.push(r)
r=a2.i(0,o)
r.d=r.a.D("Num")
r=a2.i(0,m)
r.d=r.a.D("Num")
r=a2.i(0,l)
r.d=r.a.D("Symbol")
r=a2.i(0,i)
r.d=r.a.D("String")
r=a2.i(0,f)
r.d=r.a.D("String")
r=a2.i(0,b)
r.d=r.a.D(c)
r=a2.i(0,a1)
r.d=r.a.D(a1)
r=a2.i(0,p)
r=r.d=r.a.D(p)
r.a4(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.a4(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.a4(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.cV.prototype={
aB:function(a){var s=this
switch(a.a){case"Builtin":s.A(a.b,"#411")
break
case"Comment":s.A(a.b,"#777")
break
case"Id":s.A(a.b,"#111")
break
case"Num":s.A(a.b,"#191")
break
case"Preprocess":s.A(a.b,"#737")
break
case"Reserved":s.A(a.b,"#119")
break
case"Symbol":s.A(a.b,"#611")
break
case"Type":s.A(a.b,"#171")
break
case"Whitespace":s.A(a.b,"#111")
break}},
ay:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.hm()
d.d=d.i(0,q)
s=d.i(0,q).l(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.A("a","z")
s.a.push(r)
r=K.A("A","Z")
s.a.push(r)
r=d.i(0,p).l(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.A("0","9")
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=d.i(0,q).l(0,o)
r=K.A("0","9")
s.a.push(r)
r=d.i(0,o).l(0,o)
s=K.A("0","9")
r.a.push(s)
s=d.i(0,o).l(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=d.i(0,n).l(0,m)
s=K.A("0","9")
r.a.push(s)
s=d.i(0,m).l(0,m)
r=K.A("0","9")
s.a.push(r)
r=d.i(0,q).l(0,l)
s=K.m(new H.l(k))
r.a.push(s)
s=d.i(0,l).l(0,l)
r=K.m(new H.l(k))
s.a.push(r)
r=d.i(0,q).l(0,j)
s=K.m(new H.l("/"))
r.a.push(s)
s=d.i(0,j).l(0,i)
r=K.m(new H.l("/"))
s.a.push(r)
d.i(0,j).l(0,l).a.push(new K.aj())
r=d.i(0,i).l(0,h)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.i(0,i).l(0,i)
r=new K.S()
r.a=[]
s.a.push(r)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.i(0,q).l(0,g)
r=K.m(new H.l("#"))
s.a.push(r)
r=d.i(0,g).l(0,g)
s=new K.S()
s.a=[]
r.a.push(s)
r=K.m(new H.l("\n"))
s.a.push(r)
r=d.i(0,g).l(0,f)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.i(0,q).l(0,e)
r=K.m(new H.l(" \n\t"))
s.a.push(r)
r=d.i(0,e).l(0,e)
s=K.m(new H.l(" \n\t"))
r.a.push(s)
s=d.i(0,o)
s.d=s.a.D("Num")
s=d.i(0,m)
s.d=s.a.D("Num")
s=d.i(0,l)
s.d=s.a.D("Symbol")
s=d.i(0,h)
s.d=s.a.D(i)
s=d.i(0,f)
s.d=s.a.D(g)
s=d.i(0,e)
s.d=s.a.D(e)
s=d.i(0,p)
s=s.d=s.a.D(p)
s.a4(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.a4(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.a4(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.cX.prototype={
aB:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.A(a.b,"#911")
s.A("=",r)
break
case"Id":s.A(a.b,r)
break
case"Other":s.A(a.b,r)
break
case"Reserved":s.A(a.b,"#119")
break
case"String":s.A(a.b,"#171")
break
case"Symbol":s.A(a.b,"#616")
break}},
ay:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.hm()
j.d=j.i(0,q)
s=j.i(0,q).l(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.A("a","z")
s.a.push(r)
r=K.A("A","Z")
s.a.push(r)
r=j.i(0,p).l(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.A("0","9")
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=j.i(0,p).l(0,o)
r=K.m(new H.l("="))
s.a.push(r)
s.c=!0
s=j.i(0,q).l(0,n)
r=K.m(new H.l("</\\-!>="))
s.a.push(r)
r=j.i(0,n).l(0,n)
s=K.m(new H.l("</\\-!>="))
r.a.push(s)
s=j.i(0,q).l(0,m)
r=K.m(new H.l('"'))
s.a.push(r)
r=j.i(0,m).l(0,l)
s=K.m(new H.l('"'))
r.a.push(s)
s=j.i(0,m).l(0,"EscStr")
r=K.m(new H.l("\\"))
s.a.push(r)
r=j.i(0,"EscStr").l(0,m)
s=K.m(new H.l('"'))
r.a.push(s)
j.i(0,m).l(0,m).a.push(new K.aj())
j.i(0,q).l(0,k).a.push(new K.aj())
s=j.i(0,k).l(0,k)
r=new K.S()
r.a=[]
s.a.push(r)
s=K.m(new H.l('</\\-!>=_"'))
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=j.i(0,n)
s.d=s.a.D("Symbol")
s=j.i(0,l)
s.d=s.a.D("String")
s=j.i(0,p)
r=s.a.D(p)
s.d=r
r.a4(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.i(0,o)
r.d=r.a.D(o)
r=j.i(0,k)
r.d=r.a.D(k)
return j}}
V.dm.prototype={
bG:function(a,b){this.d=[]
this.A(C.a.l(b,"\n"),"#111")},
aB:function(a){},
ay:function(){return null}}
V.h9.prototype={
c7:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.O(o,"scroll",new V.hb(m),!1)},
al:function(a,b){var s,r,q,p,o
a=C.c.dq(a,0,4)
s=P.iU(C.i,b,C.f,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.it()
o.href="#"+s
o.textContent=b
r.appendChild(o)
this.a.appendChild(r)},
M:function(a){var s,r,q,p,o,n,m,l
this.da()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.dI(a)
q.toString
p=new H.l(p)
p=new P.aY(q.b3(new H.an(p,p.gk(p))).a())
for(;p.n();){q=p.gv(p)
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
if(H.kg(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.f(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.iU(C.i,q,C.f,!1)
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
bV:function(a){var s,r,q,p=new V.cM("dart")
p.as("dart")
s=new V.cV("glsl")
s.as("glsl")
r=new V.cX("html")
r.as("html")
q=C.a.dF([p,s,r],new V.hc(a))
if(q!=null)return q
p=new V.dm("plain")
p.as("plain")
return p},
bq:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.aF(q,"+")){b2[r]=C.b.b9(q,1)
a8.push(1)
s=!0}else if(C.b.aF(q,"-")){b2[r]=C.b.b9(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.bV(b0)
p.bG(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.iU(C.i,a9,C.f,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.it()
h.href="#"+l
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
if(r>=a8.length)return H.f(a8,r)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.r)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.r)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gG(q);a4.n();)b.appendChild(a4.gv(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
da:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.hm()
s.d=s.i(0,p)
r=s.i(0,p).l(0,o)
q=K.m(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.i(0,o).l(0,o)
q=new K.S()
q.a=[]
r.a.push(q)
r=K.m(new H.l("*"))
q.a.push(r)
r=s.i(0,o).l(0,"BoldEnd")
q=K.m(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.i(0,p).l(0,n)
q=K.m(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.i(0,n).l(0,n)
q=new K.S()
q.a=[]
r.a.push(q)
r=K.m(new H.l("_"))
q.a.push(r)
r=s.i(0,n).l(0,m)
q=K.m(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.i(0,p).l(0,l)
q=K.m(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.i(0,l).l(0,l)
q=new K.S()
q.a=[]
r.a.push(q)
r=K.m(new H.l("`"))
q.a.push(r)
r=s.i(0,l).l(0,"CodeEnd")
q=K.m(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.i(0,p).l(0,k)
q=K.m(new H.l("["))
r.a.push(q)
r.c=!0
r=s.i(0,k).l(0,j)
q=K.m(new H.l("|"))
r.a.push(q)
q=s.i(0,k).l(0,i)
r=K.m(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.i(0,k).l(0,k)
r=new K.S()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
q=s.i(0,j).l(0,i)
r=K.m(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.i(0,j).l(0,j)
r=new K.S()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
s.i(0,p).l(0,h).a.push(new K.aj())
q=s.i(0,h).l(0,h)
r=new K.S()
r.a=[]
q.a.push(r)
q=K.m(new H.l("*_`["))
r.a.push(q)
q=s.i(0,"BoldEnd")
q.d=q.a.D(o)
q=s.i(0,m)
q.d=q.a.D(n)
q=s.i(0,"CodeEnd")
q.d=q.a.D(l)
q=s.i(0,i)
q.d=q.a.D("Link")
q=s.i(0,h)
q.d=q.a.D(h)
this.b=s}}
V.hb.prototype={
$1:function(a){P.jG(C.h,new V.ha(this.a))}}
V.ha.prototype={
$0:function(){var s=C.d.Y(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.hc.prototype={
$1:function(a){return a.a===this.a}};(function aliases(){var s=J.a.prototype
s.c0=s.h
s=J.aL.prototype
s.c2=s.h
s=P.e.prototype
s.c1=s.aD
s=W.t.prototype
s.aG=s.P
s=W.cg.prototype
s.c3=s.Z
s=K.cW.prototype
s.c_=s.a3
s.ba=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"m0","l1",15)
r(P,"ml","lq",5)
r(P,"mm","lr",5)
r(P,"mn","ls",5)
q(P,"k6","mg",6)
r(W,"nO","fo",16)
p(W,"my",4,null,["$4"],["lv"],9,0)
p(W,"mz",4,null,["$4"],["lw"],9,0)
var j
o(j=E.b6.prototype,"gbC",0,0,null,["$1","$0"],["bD","dR"],0,0)
o(j,"gbE",0,0,null,["$1","$0"],["bF","dS"],0,0)
o(j,"gbA",0,0,null,["$1","$0"],["bB","dQ"],0,0)
o(j,"gby",0,0,null,["$1","$0"],["bz","dN"],0,0)
n(j,"gdL","dM",2)
n(j,"gdO","dP",2)
o(j=E.dK.prototype,"gbb",0,0,null,["$1","$0"],["bd","bc"],0,0)
m(j,"ge3","bL",6)
l(j=X.dV.prototype,"gcG","cH",3)
l(j,"gcs","ct",3)
l(j,"gcA","cB",1)
l(j,"gcK","cL",7)
l(j,"gcI","cJ",7)
l(j,"gcN","cO",1)
l(j,"gcR","cS",1)
l(j,"gcE","cF",1)
l(j,"gcP","cQ",1)
l(j,"gcC","cD",1)
l(j,"gcT","cU",14)
l(j,"gcV","cW",3)
l(j,"gd1","d2",4)
l(j,"gcY","cZ",4)
l(j,"gd_","d0",4)
k(V.bk.prototype,"gk","b_",8)
k(V.G.prototype,"gk","b_",8)
o(j=M.cP.prototype,"ga7",0,0,null,["$1","$0"],["a8","c9"],0,0)
n(j,"gcu","cv",2)
n(j,"gcw","cz",2)
o(X.dk.prototype,"gbe",0,0,null,["$1","$0"],["a9","cc"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.B,null)
q(P.B,[H.iB,J.a,J.V,P.c9,P.e,H.an,P.cZ,H.bJ,H.dT,H.hq,P.y,H.fV,H.eB,H.b4,P.ac,H.fI,H.d4,H.fE,H.a2,H.ed,P.i8,P.bo,P.aY,P.e_,P.dD,P.dE,P.ic,P.cf,P.i0,P.c8,P.v,P.cH,P.fC,P.ia,P.aZ,P.bB,P.K,P.bF,P.dj,P.c4,P.ea,P.fx,P.fz,P.bS,P.d5,P.a1,P.C,P.bg,W.fd,W.ix,W.iN,W.bn,W.w,W.c2,W.cg,W.eG,W.bK,W.a0,W.i4,W.eQ,P.eu,K.aj,K.cW,K.fY,K.h4,L.dC,L.dL,L.dM,L.hl,O.bz,O.bX,E.f9,E.b6,E.b3,E.ba,E.hY,E.fZ,E.dK,Z.dY,Z.hR,Z.cF,Z.bL,Z.dW,D.fb,D.bI,D.aa,X.cG,X.d2,X.fG,X.fK,X.bY,X.fR,X.hn,X.dV,V.b5,V.fq,V.d7,V.ao,V.bb,V.dq,V.dt,V.bk,V.G,M.cP,A.f4,A.f5,A.hs,A.hB,F.fu,F.fH,F.fW,F.h5,F.h6,F.h7,F.h8,F.hJ,F.hK,F.hL,F.hO,F.hP,O.hi,X.iv,X.hg,X.dk,V.aE,V.h9])
q(J.a,[J.fD,J.bQ,J.aL,J.a_,J.aK,J.ab,H.c_,W.b,W.f2,W.cE,W.a9,W.x,W.e3,W.Z,W.fg,W.fj,W.e4,W.bE,W.e6,W.fk,W.h,W.eb,W.aI,W.fA,W.eg,W.fJ,W.fM,W.ek,W.el,W.aP,W.em,W.eo,W.aR,W.es,W.ev,W.aS,W.ew,W.aT,W.eC,W.ar,W.eI,W.hk,W.aU,W.eK,W.ho,W.hG,W.eR,W.eT,W.eV,W.eX,W.eZ,P.b7,P.ei,P.b9,P.eq,P.fX,P.eD,P.bi,P.eM,P.f6,P.e0,P.ez])
q(J.aL,[J.dl,J.aW,J.a5])
r(J.d0,J.a_)
q(J.aK,[J.bP,J.d_])
r(P.bT,P.c9)
q(P.bT,[H.bj,W.e1,W.N,P.cT])
r(H.l,H.bj)
q(P.e,[H.i,H.aN,H.aX,P.bO])
q(H.i,[H.bU,H.am])
r(H.bG,H.aN)
q(P.cZ,[H.bV,H.dZ])
r(H.bW,H.bU)
q(P.y,[H.df,H.d1,H.dS,H.dv,H.e8,P.cC,P.dg,P.U,P.dU,P.dR,P.bf,P.cI,P.cL])
q(H.b4,[H.hh,H.fF,H.il,H.im,H.io,P.hT,P.hS,P.hU,P.hV,P.i9,P.ig,P.i2,P.i3,P.fL,P.fl,P.fm,W.fn,W.fO,W.fQ,W.h3,W.hf,W.hZ,W.fU,W.fT,W.i5,W.i6,W.i7,W.ib,P.ih,P.fv,P.fw,P.f8,E.h_,E.h0,E.h1,E.hj,D.fs,D.ft,F.id,F.hQ,F.hM,F.hN,V.hb,V.ha,V.hc])
q(H.hh,[H.hd,H.by])
r(P.d6,P.ac)
q(P.d6,[H.M,W.hW])
r(H.b8,H.c_)
q(H.b8,[H.cb,H.cd])
r(H.cc,H.cb)
r(H.aQ,H.cc)
r(H.ce,H.cd)
r(H.bZ,H.ce)
q(H.bZ,[H.d9,H.da,H.db,H.dc,H.dd,H.c0,H.de])
r(H.cm,H.e8)
r(P.cj,P.bO)
r(P.i1,P.ic)
r(P.c7,P.cf)
r(P.cK,P.dE)
r(P.fp,P.cH)
q(P.cK,[P.fB,P.hI])
r(P.hH,P.fp)
q(P.K,[P.Q,P.p])
q(P.U,[P.bd,P.cY])
q(W.b,[W.o,W.cS,W.aq,W.ch,W.as,W.a7,W.ck,W.dX,W.bl,P.cD,P.ak])
q(W.o,[W.t,W.a4,W.bm])
q(W.t,[W.k,P.j])
q(W.k,[W.cA,W.cB,W.b2,W.aC,W.aD,W.bC,W.cU,W.dw,W.c5,W.dG,W.dH,W.bh])
r(W.fc,W.a9)
r(W.bA,W.e3)
q(W.Z,[W.fe,W.ff])
r(W.e5,W.e4)
r(W.bD,W.e5)
r(W.e7,W.e6)
r(W.cO,W.e7)
r(W.aH,W.cE)
r(W.ec,W.eb)
r(W.cR,W.ec)
r(W.eh,W.eg)
r(W.aJ,W.eh)
r(W.ae,W.h)
q(W.ae,[W.aM,W.W,W.aV])
r(W.fN,W.ek)
r(W.fP,W.el)
r(W.en,W.em)
r(W.d8,W.en)
r(W.ep,W.eo)
r(W.c1,W.ep)
r(W.et,W.es)
r(W.dn,W.et)
r(W.h2,W.ev)
r(W.ci,W.ch)
r(W.dz,W.ci)
r(W.ex,W.ew)
r(W.dA,W.ex)
r(W.he,W.eC)
r(W.eJ,W.eI)
r(W.dI,W.eJ)
r(W.cl,W.ck)
r(W.dJ,W.cl)
r(W.eL,W.eK)
r(W.dN,W.eL)
r(W.at,W.W)
r(W.eS,W.eR)
r(W.e2,W.eS)
r(W.c6,W.bE)
r(W.eU,W.eT)
r(W.ee,W.eU)
r(W.eW,W.eV)
r(W.ca,W.eW)
r(W.eY,W.eX)
r(W.ey,W.eY)
r(W.f_,W.eZ)
r(W.eF,W.f_)
r(W.hX,W.hW)
r(W.e9,P.dD)
r(W.eH,W.cg)
r(P.a6,P.eu)
r(P.ej,P.ei)
r(P.d3,P.ej)
r(P.er,P.eq)
r(P.dh,P.er)
r(P.be,P.j)
r(P.eE,P.eD)
r(P.dF,P.eE)
r(P.eN,P.eM)
r(P.dO,P.eN)
r(P.f7,P.e0)
r(P.di,P.ak)
r(P.eA,P.ez)
r(P.dB,P.eA)
q(K.cW,[K.S,L.hp])
q(E.f9,[Z.fa,A.dx])
q(D.aa,[D.bM,D.bN,D.D])
r(U.fS,D.fb)
q(U.fS,[U.cJ,U.du])
r(A.fi,A.dx)
q(A.hs,[A.ht,A.hw,A.hy,A.hA,A.hu,A.dP,A.hv,A.hx,A.hz,A.hC,A.hD,A.dQ,A.hE,A.hF])
r(O.fh,O.hi)
r(X.fy,X.hg)
q(V.aE,[V.cM,V.cV,V.cX,V.dm])
s(H.bj,H.dT)
s(H.cb,P.v)
s(H.cc,H.bJ)
s(H.cd,P.v)
s(H.ce,H.bJ)
s(P.c9,P.v)
s(W.e3,W.fd)
s(W.e4,P.v)
s(W.e5,W.w)
s(W.e6,P.v)
s(W.e7,W.w)
s(W.eb,P.v)
s(W.ec,W.w)
s(W.eg,P.v)
s(W.eh,W.w)
s(W.ek,P.ac)
s(W.el,P.ac)
s(W.em,P.v)
s(W.en,W.w)
s(W.eo,P.v)
s(W.ep,W.w)
s(W.es,P.v)
s(W.et,W.w)
s(W.ev,P.ac)
s(W.ch,P.v)
s(W.ci,W.w)
s(W.ew,P.v)
s(W.ex,W.w)
s(W.eC,P.ac)
s(W.eI,P.v)
s(W.eJ,W.w)
s(W.ck,P.v)
s(W.cl,W.w)
s(W.eK,P.v)
s(W.eL,W.w)
s(W.eR,P.v)
s(W.eS,W.w)
s(W.eT,P.v)
s(W.eU,W.w)
s(W.eV,P.v)
s(W.eW,W.w)
s(W.eX,P.v)
s(W.eY,W.w)
s(W.eZ,P.v)
s(W.f_,W.w)
s(P.ei,P.v)
s(P.ej,W.w)
s(P.eq,P.v)
s(P.er,W.w)
s(P.eD,P.v)
s(P.eE,W.w)
s(P.eM,P.v)
s(P.eN,W.w)
s(P.e0,P.ac)
s(P.ez,P.v)
s(P.eA,W.w)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",Q:"double",K:"num",C:"String",aZ:"bool",a1:"Null",bS:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([aa*])","~(W*)","~(p*,e<b6*>*)","~(h*)","~(aV*)","~(~())","~()","~(aM*)","Q*()","aZ(t,C,C,bn)","@(@)","a1(@)","a1(B?,B?)","a1(@,@)","~(at*)","p(@,@)","C(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.lN(v.typeUniverse,JSON.parse('{"a5":"aL","dl":"aL","aW":"aL","mO":"h","mY":"h","mQ":"ak","mP":"b","n3":"b","n5":"b","mN":"j","mZ":"j","mR":"k","n1":"k","n_":"o","mX":"o","nt":"a7","mV":"ae","mS":"a4","n6":"a4","n4":"W","n0":"aJ","n2":"aQ","a_":{"i":["1"],"e":["1"]},"d0":{"i":["1"],"e":["1"]},"aK":{"Q":[],"K":[]},"bP":{"Q":[],"p":[],"K":[]},"d_":{"Q":[],"K":[]},"ab":{"C":[]},"l":{"i":["p"],"e":["p"]},"i":{"e":["1"]},"bU":{"i":["1"],"e":["1"]},"aN":{"e":["2"]},"bG":{"i":["2"],"e":["2"]},"bW":{"i":["2"],"e":["2"]},"aX":{"e":["1"]},"bj":{"i":["1"],"e":["1"]},"df":{"y":[]},"d1":{"y":[]},"dS":{"y":[]},"dv":{"y":[]},"am":{"i":["1"],"e":["1"]},"b8":{"n":["1"]},"aQ":{"n":["Q"],"i":["Q"],"e":["Q"]},"bZ":{"n":["p"],"i":["p"],"e":["p"]},"d9":{"n":["p"],"i":["p"],"e":["p"]},"da":{"n":["p"],"i":["p"],"e":["p"]},"db":{"n":["p"],"i":["p"],"e":["p"]},"dc":{"n":["p"],"i":["p"],"e":["p"]},"dd":{"n":["p"],"i":["p"],"e":["p"]},"c0":{"n":["p"],"i":["p"],"e":["p"]},"de":{"n":["p"],"i":["p"],"e":["p"]},"e8":{"y":[]},"cm":{"y":[]},"cj":{"e":["1"]},"c7":{"i":["1"],"e":["1"]},"bO":{"e":["1"]},"bT":{"i":["1"],"e":["1"]},"cf":{"i":["1"],"e":["1"]},"Q":{"K":[]},"cC":{"y":[]},"dg":{"y":[]},"U":{"y":[]},"bd":{"y":[]},"cY":{"y":[]},"dU":{"y":[]},"dR":{"y":[]},"bf":{"y":[]},"cI":{"y":[]},"dj":{"y":[]},"c4":{"y":[]},"cL":{"y":[]},"p":{"K":[]},"bS":{"i":["1"],"e":["1"]},"k":{"t":[],"o":[],"b":[]},"cA":{"t":[],"o":[],"b":[]},"cB":{"t":[],"o":[],"b":[]},"b2":{"t":[],"o":[],"b":[]},"aC":{"t":[],"o":[],"b":[]},"aD":{"t":[],"o":[],"b":[]},"a4":{"o":[],"b":[]},"bC":{"t":[],"o":[],"b":[]},"bD":{"n":["a6<K>"],"i":["a6<K>"],"e":["a6<K>"]},"bE":{"a6":["K"]},"cO":{"n":["C"],"i":["C"],"e":["C"]},"e1":{"i":["t"],"e":["t"]},"t":{"o":[],"b":[]},"cR":{"n":["aH"],"i":["aH"],"e":["aH"]},"cS":{"b":[]},"cU":{"t":[],"o":[],"b":[]},"aJ":{"n":["o"],"i":["o"],"e":["o"]},"aM":{"h":[]},"d8":{"n":["aP"],"i":["aP"],"e":["aP"]},"W":{"h":[]},"N":{"i":["o"],"e":["o"]},"o":{"b":[]},"c1":{"n":["o"],"i":["o"],"e":["o"]},"dn":{"n":["aR"],"i":["aR"],"e":["aR"]},"dw":{"t":[],"o":[],"b":[]},"aq":{"b":[]},"dz":{"n":["aq"],"b":[],"i":["aq"],"e":["aq"]},"dA":{"n":["aS"],"i":["aS"],"e":["aS"]},"c5":{"t":[],"o":[],"b":[]},"dG":{"t":[],"o":[],"b":[]},"dH":{"t":[],"o":[],"b":[]},"bh":{"t":[],"o":[],"b":[]},"as":{"b":[]},"a7":{"b":[]},"dI":{"n":["a7"],"i":["a7"],"e":["a7"]},"dJ":{"n":["as"],"b":[],"i":["as"],"e":["as"]},"aV":{"h":[]},"dN":{"n":["aU"],"i":["aU"],"e":["aU"]},"ae":{"h":[]},"dX":{"b":[]},"at":{"W":[],"h":[]},"bl":{"b":[]},"bm":{"o":[],"b":[]},"e2":{"n":["x"],"i":["x"],"e":["x"]},"c6":{"a6":["K"]},"ee":{"n":["aI?"],"i":["aI?"],"e":["aI?"]},"ca":{"n":["o"],"i":["o"],"e":["o"]},"ey":{"n":["aT"],"i":["aT"],"e":["aT"]},"eF":{"n":["ar"],"i":["ar"],"e":["ar"]},"bn":{"a0":[]},"c2":{"a0":[]},"cg":{"a0":[]},"eH":{"a0":[]},"eG":{"a0":[]},"cT":{"i":["t"],"e":["t"]},"a6":{"eu":["1"]},"d3":{"i":["b7"],"e":["b7"]},"dh":{"i":["b9"],"e":["b9"]},"be":{"j":[],"t":[],"o":[],"b":[]},"dF":{"i":["C"],"e":["C"]},"j":{"t":[],"o":[],"b":[]},"dO":{"i":["bi"],"e":["bi"]},"cD":{"b":[]},"ak":{"b":[]},"di":{"b":[]},"dB":{"i":["d5<@,@>"],"e":["d5<@,@>"]},"bz":{"e":["1*"]},"bM":{"aa":[]},"bN":{"aa":[]},"D":{"aa":[]},"cM":{"aE":[]},"cV":{"aE":[]},"cX":{"aE":[]},"dm":{"aE":[]}}'))
H.lM(v.typeUniverse,JSON.parse('{"a_":1,"d0":1,"V":1,"i":1,"bU":1,"an":1,"aN":2,"bG":2,"bV":2,"bW":2,"aX":1,"dZ":1,"bJ":1,"dT":1,"bj":1,"am":1,"d4":1,"b8":1,"aY":1,"cj":1,"dD":1,"dE":2,"c8":1,"bO":1,"bT":1,"v":1,"d6":2,"ac":2,"cf":1,"c9":1,"cH":2,"cK":2,"e":1,"cZ":1,"bS":1,"e9":1,"w":1,"bK":1,"bz":1,"bM":1,"bN":1,"D":1}'))
var u={c:"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"}
var t=(function rtii(){var s=H.mu
return{y:s("b2"),t:s("aC"),O:s("i<@>"),h:s("t"),C:s("y"),D:s("h"),Z:s("fz"),b:s("a_<@>"),T:s("bQ"),g:s("a5"),p:s("n<@>"),F:s("M<C*,dx*>"),V:s("M<C*,dC*>"),i:s("M<C*,C*>"),w:s("M<C*,dM*>"),E:s("M<p*,aZ*>"),P:s("a1"),K:s("B"),q:s("a6<K>"),Y:s("be"),N:s("C"),u:s("j"),f:s("bh"),o:s("aW"),x:s("bm"),v:s("aZ"),W:s("Q"),z:s("@"),S:s("p"),B:s("aD*"),A:s("0&*"),_:s("B*"),Q:s("C*"),j:s("dL*"),n:s("dP*"),I:s("dQ*"),e:s("p*"),R:s("jl<a1>?"),X:s("B?"),H:s("K")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.aC.prototype
C.G=W.aD.prototype
C.H=W.bC.prototype
C.J=J.a.prototype
C.a=J.a_.prototype
C.c=J.bP.prototype
C.K=J.bQ.prototype
C.d=J.aK.prototype
C.b=J.ab.prototype
C.L=J.a5.prototype
C.r=J.dl.prototype
C.t=W.c5.prototype
C.k=J.aW.prototype
C.u=W.at.prototype
C.v=W.bl.prototype
C.w=new E.b3("Browser.chrome")
C.m=new E.b3("Browser.firefox")
C.n=new E.b3("Browser.edge")
C.x=new E.b3("Browser.other")
C.o=function getTagFallback(o) {
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
C.p=function(hooks) { return hooks; }

C.E=new P.dj()
C.f=new P.hH()
C.F=new P.hI()
C.e=new P.i1()
C.h=new P.bF(0)
C.I=new P.fC("element",!1,!1,!1)
C.M=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.N=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.O=s([])
C.i=s([0,0,65498,45055,65535,34815,65534,18431])
C.q=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.P=new E.ba("OperatingSystem.windows")
C.Q=new E.ba("OperatingSystem.mac")
C.R=new E.ba("OperatingSystem.linux")
C.S=new E.ba("OperatingSystem.other")
C.T=new P.bo(null,2)})();(function staticFields(){$.jP=null
$.a8=0
$.jd=null
$.jc=null
$.k8=null
$.k5=null
$.ke=null
$.ii=null
$.ip=null
$.j1=null
$.bp=null
$.cs=null
$.ct=null
$.iY=!1
$.af=C.e
$.T=[]
$.al=null
$.iw=null
$.jj=null
$.ji=null
$.ef=P.jo(t.N,t.Z)
$.jk=null
$.jr=null
$.jv=null
$.jw=null
$.jA=null
$.jL=null
$.jK=null
$.jJ=null
$.ju=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"mW","kk",function(){return H.mx("_$dart_dartClosure")})
s($,"n7","kl",function(){return H.ad(H.hr({
toString:function(){return"$receiver$"}}))})
s($,"n8","km",function(){return H.ad(H.hr({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"n9","kn",function(){return H.ad(H.hr(null))})
s($,"na","ko",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nd","kr",function(){return H.ad(H.hr(void 0))})
s($,"ne","ks",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nc","kq",function(){return H.ad(H.jH(null))})
s($,"nb","kp",function(){return H.ad(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"ng","ku",function(){return H.ad(H.jH(void 0))})
s($,"nf","kt",function(){return H.ad(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"nu","j6",function(){return P.lp()})
s($,"nx","kz",function(){return P.lf("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"nv","ky",function(){return P.jp(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"nn","kx",function(){return Z.a3(0)})
s($,"nh","kv",function(){return Z.a3(511)})
s($,"np","az",function(){return Z.a3(1)})
s($,"no","bu",function(){return Z.a3(2)})
s($,"nj","bt",function(){return Z.a3(4)})
s($,"nq","bv",function(){return Z.a3(8)})
s($,"nr","bw",function(){return Z.a3(16)})
s($,"nk","cy",function(){return Z.a3(32)})
s($,"nl","cz",function(){return Z.a3(64)})
s($,"nm","kw",function(){return Z.a3(96)})
s($,"ns","bx",function(){return Z.a3(128)})
s($,"ni","bs",function(){return Z.a3(256)})
s($,"mU","kj",function(){return new V.fq()})
s($,"mT","E",function(){return $.kj()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c_,ArrayBufferView:H.c_,Float32Array:H.aQ,Float64Array:H.aQ,Int16Array:H.d9,Int32Array:H.da,Int8Array:H.db,Uint16Array:H.dc,Uint32Array:H.dd,Uint8ClampedArray:H.c0,CanvasPixelArray:H.c0,Uint8Array:H.de,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.f2,HTMLAnchorElement:W.cA,HTMLAreaElement:W.cB,HTMLBaseElement:W.b2,Blob:W.cE,HTMLBodyElement:W.aC,HTMLCanvasElement:W.aD,CDATASection:W.a4,CharacterData:W.a4,Comment:W.a4,ProcessingInstruction:W.a4,Text:W.a4,CSSPerspective:W.fc,CSSCharsetRule:W.x,CSSConditionRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.bA,MSStyleCSSProperties:W.bA,CSS2Properties:W.bA,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSPositionValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.a9,CSSRotation:W.a9,CSSScale:W.a9,CSSSkew:W.a9,CSSTranslation:W.a9,CSSTransformComponent:W.a9,CSSTransformValue:W.fe,CSSUnparsedValue:W.ff,DataTransferItemList:W.fg,HTMLDivElement:W.bC,DOMException:W.fj,ClientRectList:W.bD,DOMRectList:W.bD,DOMRectReadOnly:W.bE,DOMStringList:W.cO,DOMTokenList:W.fk,Element:W.t,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aH,FileList:W.cR,FileWriter:W.cS,HTMLFormElement:W.cU,Gamepad:W.aI,History:W.fA,HTMLCollection:W.aJ,HTMLFormControlsCollection:W.aJ,HTMLOptionsCollection:W.aJ,KeyboardEvent:W.aM,Location:W.fJ,MediaList:W.fM,MIDIInputMap:W.fN,MIDIOutputMap:W.fP,MimeType:W.aP,MimeTypeArray:W.d8,PointerEvent:W.W,MouseEvent:W.W,DragEvent:W.W,Document:W.o,DocumentFragment:W.o,HTMLDocument:W.o,ShadowRoot:W.o,XMLDocument:W.o,DocumentType:W.o,Node:W.o,NodeList:W.c1,RadioNodeList:W.c1,Plugin:W.aR,PluginArray:W.dn,RTCStatsReport:W.h2,HTMLSelectElement:W.dw,SourceBuffer:W.aq,SourceBufferList:W.dz,SpeechGrammar:W.aS,SpeechGrammarList:W.dA,SpeechRecognitionResult:W.aT,Storage:W.he,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableElement:W.c5,HTMLTableRowElement:W.dG,HTMLTableSectionElement:W.dH,HTMLTemplateElement:W.bh,TextTrack:W.as,TextTrackCue:W.a7,VTTCue:W.a7,TextTrackCueList:W.dI,TextTrackList:W.dJ,TimeRanges:W.hk,Touch:W.aU,TouchEvent:W.aV,TouchList:W.dN,TrackDefaultList:W.ho,CompositionEvent:W.ae,FocusEvent:W.ae,TextEvent:W.ae,UIEvent:W.ae,URL:W.hG,VideoTrackList:W.dX,WheelEvent:W.at,Window:W.bl,DOMWindow:W.bl,Attr:W.bm,CSSRuleList:W.e2,ClientRect:W.c6,DOMRect:W.c6,GamepadList:W.ee,NamedNodeMap:W.ca,MozNamedAttrMap:W.ca,SpeechRecognitionResultList:W.ey,StyleSheetList:W.eF,SVGLength:P.b7,SVGLengthList:P.d3,SVGNumber:P.b9,SVGNumberList:P.dh,SVGPointList:P.fX,SVGScriptElement:P.be,SVGStringList:P.dF,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bi,SVGTransformList:P.dO,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.cD,AudioContext:P.ak,webkitAudioContext:P.ak,BaseAudioContext:P.ak,OfflineAudioContext:P.di,SQLResultSetRowList:P.dB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.b8.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.aQ.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
W.ch.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"
W.ck.$nativeSuperclassTag="EventTarget"
W.cl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.kb,[])
else F.kb([])})})()
//# sourceMappingURL=main.dart.js.map
