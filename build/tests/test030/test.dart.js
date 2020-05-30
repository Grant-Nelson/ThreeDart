{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.lU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iZ(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={iM:function iM(){},
kI:function(a,b,c,d){if(!!a.$im)return new H.ex(a,b,[c,d])
return new H.bE(a,b,[c,d])},
iJ:function(){return new P.bO("No element")},
kC:function(){return new P.bO("Too many elements")},
kZ:function(a,b){var u=J.aD(a)
if(typeof u!=="number")return u.C()
H.cL(a,0,u-1,b)},
cL:function(a,b,c,d){if(c-b<=32)H.kY(a,b,c,d)
else H.kX(a,b,c,d)},
kY:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.e2(a);u<=c;++u){s=t.j(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.j(a,r-1),s)
if(typeof q!=="number")return q.T()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.j(a,p))
r=p}t.m(a,r,s)}},
kX:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.a6(a4+a5,2),f=g-j,e=g+j,d=J.e2(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.T()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.j(a3,a4))
d.m(a3,e,d.j(a3,a5))
t=a4+1
s=a5-1
if(J.H(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.j(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.X()
if(p<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.T()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.j(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.X()
if(l<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.T()
if(k>0)for(;!0;){p=a6.$2(d.j(a3,s),a0)
if(typeof p!=="number")return p.T()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.X()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.j(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.j(a3,a2))
d.m(a3,a2,a0)
H.cL(a3,a4,t-2,a6)
H.cL(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.H(a6.$2(d.j(a3,t),b),0);)++t
for(;J.H(a6.$2(d.j(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.j(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.j(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.X()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}H.cL(a3,t,s,a6)}else H.cL(a3,t,s,a6)},
k:function k(a){this.a=a},
m:function m(){},
ct:function ct(){},
aO:function aO(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bE:function bE(a,b,c){this.a=a
this.b=b
this.$ti=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b){this.a=null
this.b=a
this.c=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
hK:function hK(a,b){this.a=a
this.b=b},
ck:function ck(){},
hv:function hv(){},
d_:function d_(){},
c5:function(a){var u,t=H.lV(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lD:function(a){return v.types[a]},
lK:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.L(a).$iu},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.U(a)
if(typeof u!=="string")throw H.c(H.aw(a))
return u},
bL:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bM:function(a){return H.kJ(a)+H.jP(H.c4(a),0,null)},
kJ:function(a){var u,t,s,r,q,p,o,n=J.L(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$ibe){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c5(t.length>1&&C.b.aw(t,0)===36?C.b.aX(t,1):t)},
ju:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kS:function(a){var u,t,s,r=H.b([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aw(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aJ(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aw(s))}return H.ju(r)},
kR:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aw(s))
if(s<0)throw H.c(H.aw(s))
if(s>65535)return H.kS(a)}return H.ju(a)},
iP:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aJ(u,10))>>>0,56320|u&1023)}throw H.c(P.aq(a,0,1114111,null,null))},
ba:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kQ:function(a){var u=H.ba(a).getFullYear()+0
return u},
kO:function(a){var u=H.ba(a).getMonth()+1
return u},
kK:function(a){var u=H.ba(a).getDate()+0
return u},
kL:function(a){var u=H.ba(a).getHours()+0
return u},
kN:function(a){var u=H.ba(a).getMinutes()+0
return u},
kP:function(a){var u=H.ba(a).getSeconds()+0
return u},
kM:function(a){var u=H.ba(a).getMilliseconds()+0
return u},
q:function(a){throw H.c(H.aw(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.c(H.bk(a,b))},
bk:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a4(!0,b,s,null)
u=J.aD(a)
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.C(b,a,s,null,u)
return P.cH(b,s)},
lw:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bb(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bb(a,c,!0,b,"end",u)
return new P.a4(!0,b,"end",null)},
aw:function(a){return new P.a4(!0,a,null,null)},
ls:function(a){if(typeof a!=="number")throw H.c(H.aw(a))
return a},
c:function(a){var u
if(a==null)a=new P.cE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k_})
u.name=""}else u.toString=H.k_
return u},
k_:function(){return J.U(this.dartException)},
M:function(a){throw H.c(a)},
r:function(a){throw H.c(P.aG(a))},
ad:function(a){var u,t,s,r,q,p
a=H.jZ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.he(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jq:function(a,b){return new H.fp(a,b==null?null:b.method)},
iN:function(a,b){var u=b==null,t=u?null:b.method
return new H.eY(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aJ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iN(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jq(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k2()
q=$.k3()
p=$.k4()
o=$.k5()
n=$.k8()
m=$.k9()
l=$.k7()
$.k6()
k=$.kb()
j=$.ka()
i=r.a1(u)
if(i!=null)return f.$1(H.iN(u,i))
else{i=q.a1(u)
if(i!=null){i.method="call"
return f.$1(H.iN(u,i))}else{i=p.a1(u)
if(i==null){i=o.a1(u)
if(i==null){i=n.a1(u)
if(i==null){i=m.a1(u)
if(i==null){i=l.a1(u)
if(i==null){i=o.a1(u)
if(i==null){i=k.a1(u)
if(i==null){i=j.a1(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jq(u,i))}}return f.$1(new H.hu(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cM()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a4(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cM()
return a},
j1:function(a){var u
if(a==null)return new H.dG(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dG(a)},
lA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
lJ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.K("Unsupported number of arguments for wrapped closure"))},
bj:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lJ)
a.$identity=u
return u},
kw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fT().constructor.prototype):Object.create(new H.bq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.E()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jd(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ks(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jd(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ks:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lD,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jc:H.iB
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kt:function(a,b,c,d){var u=H.iB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jd:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kv(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kt(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.E()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.ee("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.E()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.ee("self"):q)+"."+H.e(u)+"("+o+");}")()},
ku:function(a,b,c,d){var u=H.iB,t=H.jc
switch(b?-1:a){case 0:throw H.c(H.kV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kv:function(a,b){var u,t,s,r,q,p,o,n=$.br
if(n==null)n=$.br=H.ee("self")
u=$.jb
if(u==null)u=$.jb=H.ee("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ku(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.a7
if(typeof u!=="number")return u.E()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.E()
$.a7=u+1
return new Function(n+u+"}")()},
iZ:function(a,b,c,d,e,f,g){return H.kw(a,b,c,d,!!e,!!f,g)},
iB:function(a){return a.a},
jc:function(a){return a.c},
ee:function(a){var u,t,s,r=new H.bq("self","target","receiver","name"),q=J.iK(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lO:function(a,b){throw H.c(H.kr(a,H.c5(b.substring(2))))},
a3:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else u=!0
if(u)return a
H.lO(a,b)},
ly:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kr:function(a,b){return new H.ef("CastError: "+P.iH(a)+": type '"+H.e(H.lo(a))+"' is not a subtype of type '"+b+"'")},
lo:function(a){var u,t=J.L(a)
if(!!t.$ibs){u=H.ly(t)
if(u!=null)return H.lP(u)
return"Closure"}return H.bM(a)},
lU:function(a){throw H.c(new P.ep(a))},
kV:function(a){return new H.fF(a)},
jU:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
c4:function(a){if(a==null)return
return a.$ti},
ms:function(a,b,c){return H.iy(a["$a"+H.e(c)],H.c4(b))},
lC:function(a,b,c,d){var u=H.iy(a["$a"+H.e(c)],H.c4(b))
return u==null?null:u[d]},
j0:function(a,b,c){var u=H.iy(a["$a"+H.e(b)],H.c4(a))
return u==null?null:u[c]},
af:function(a,b){var u=H.c4(a)
return u==null?null:u[b]},
lP:function(a){return H.aZ(a,null)},
aZ:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c5(a[0].name)+H.jP(a,1,b)
if(typeof a=="function")return H.c5(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.le(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
le:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Q)p+=" extends "+H.aZ(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aZ(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aZ(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aZ(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lz(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aZ(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jP:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aU("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aZ(p,c)}return"<"+u.h(0)+">"},
iy:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mq:function(a,b,c){return a.apply(b,H.iy(J.L(b)["$a"+H.e(c)],H.c4(b)))},
mr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lL:function(a){var u,t,s,r,q=$.jV.$1(a),p=$.io[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iu[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jS.$2(a,q)
if(q!=null){p=$.io[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iu[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iw(u)
$.io[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iu[q]=u
return u}if(s==="-"){r=H.iw(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jX(a,u)
if(s==="*")throw H.c(P.jF(q))
if(v.leafTags[q]===true){r=H.iw(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jX(a,u)},
jX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j3(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iw:function(a){return J.j3(a,!1,null,!!a.$iu)},
lM:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iw(u)
else return J.j3(u,c,null,null)},
lH:function(){if(!0===$.j2)return
$.j2=!0
H.lI()},
lI:function(){var u,t,s,r,q,p,o,n
$.io=Object.create(null)
$.iu=Object.create(null)
H.lG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jY.$1(q)
if(p!=null){o=H.lM(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lG:function(){var u,t,s,r,q,p,o=C.v()
o=H.bi(C.w,H.bi(C.x,H.bi(C.o,H.bi(C.o,H.bi(C.y,H.bi(C.z,H.bi(C.A(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jV=new H.ir(r)
$.jS=new H.is(q)
$.jY=new H.it(p)},
bi:function(a,b){return a(b)||b},
kF:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eJ("Illegal RegExp pattern ("+String(p)+")",a))},
lR:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lx:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jZ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
j6:function(a,b,c){var u=H.lS(a,b,c)
return u},
lS:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jZ(b),'g'),H.lx(c))},
he:function he(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fp:function fp(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.a=a},
iz:function iz(a){this.a=a},
dG:function dG(a){this.a=a
this.b=null},
bs:function bs(){},
h0:function h0(){},
fT:function fT(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ef:function ef(a){this.a=a},
fF:function fF(a){this.a=a},
a9:function a9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eX:function eX(a){this.a=a},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b8:function b8(a,b){this.a=a
this.$ti=b},
f1:function f1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
eW:function eW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iW:function(a){return a},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bk(b,a))},
ld:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.lw(a,b,c))
return b},
bJ:function bJ(){},
cy:function cy(){},
bI:function bI(){},
cz:function cz(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
cA:function cA(){},
fk:function fk(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
lz:function(a){return J.jj(a?Object.keys(a):[],null)},
lV:function(a){return v.mangledGlobalNames[a]},
lN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iq:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.j2==null){H.lH()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jF("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.j7()]
if(r!=null)return r
r=H.lL(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.j7(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iA(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aq(a,0,4294967295,"length",null))
return J.jj(new Array(a),b)},
jj:function(a,b){return J.iK(H.b(a,[b]))},
iK:function(a){a.fixed$length=Array
return a},
kE:function(a,b){return J.kk(a,b)},
L:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.cp.prototype}if(typeof a=="string")return J.aL.prototype
if(a==null)return J.eV.prototype
if(typeof a=="boolean")return J.eU.prototype
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.Q)return a
return J.iq(a)},
e2:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.Q)return a
return J.iq(a)},
ip:function(a){if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.Q)return a
return J.iq(a)},
lB:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.be.prototype
return a},
j_:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.be.prototype
return a},
e3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.Q)return a
return J.iq(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).p(a,b)},
kh:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.e2(a).j(a,b)},
ki:function(a,b,c){return J.e3(a).e_(a,b,c)},
kj:function(a,b,c,d){return J.e3(a).ee(a,b,c,d)},
kk:function(a,b){return J.lB(a).as(a,b)},
e4:function(a,b){return J.ip(a).A(a,b)},
kl:function(a,b){return J.ip(a).L(a,b)},
km:function(a){return J.e3(a).gei(a)},
bp:function(a){return J.L(a).gG(a)},
aC:function(a){return J.ip(a).gN(a)},
aD:function(a){return J.e2(a).gk(a)},
j9:function(a){return J.ip(a).eS(a)},
kn:function(a,b){return J.e3(a).eW(a,b)},
ko:function(a,b,c){return J.j_(a).aF(a,b,c)},
kp:function(a){return J.j_(a).f5(a)},
U:function(a){return J.L(a).h(a)},
a:function a(){},
eU:function eU(){},
eV:function eV(){},
cr:function cr(){},
ft:function ft(){},
be:function be(){},
aM:function aM(){},
aK:function aK(a){this.$ti=a},
iL:function iL(a){this.$ti=a},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bA:function bA(){},
cq:function cq(){},
cp:function cp(){},
aL:function aL(){}},P={
l1:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lp()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bj(new P.hM(s),1)).observe(u,{childList:true})
return new P.hL(s,u,t)}else if(self.setImmediate!=null)return P.lq()
return P.lr()},
l2:function(a){self.scheduleImmediate(H.bj(new P.hN(a),0))},
l3:function(a){self.setImmediate(H.bj(new P.hO(a),0))},
l4:function(a){P.iS(C.i,a)},
iS:function(a,b){var u=C.d.a6(a.a,1000)
return P.lb(u<0?0:u,b)},
jD:function(a,b){var u=C.d.a6(a.a,1000)
return P.lc(u<0?0:u,b)},
lb:function(a,b){var u=new P.dM()
u.cR(a,b)
return u},
lc:function(a,b){var u=new P.dM()
u.cS(a,b)
return u},
mo:function(a){return new P.bf(a,1)},
l7:function(){return C.N},
l8:function(a){return new P.bf(a,3)},
lh:function(a,b){return new P.ia(a,[b])},
li:function(){var u,t
for(;u=$.bh,u!=null;){$.c3=null
t=u.b
$.bh=t
if(t==null)$.c2=null
u.a.$0()}},
ln:function(){$.iX=!0
try{P.li()}finally{$.c3=null
$.iX=!1
if($.bh!=null)$.j8().$1(P.jT())}},
ll:function(a){var u=new P.d6(a)
if($.bh==null){$.bh=$.c2=u
if(!$.iX)$.j8().$1(P.jT())}else $.c2=$.c2.b=u},
lm:function(a){var u,t,s=$.bh
if(s==null){P.ll(a)
$.c3=$.c2
return}u=new P.d6(a)
t=$.c3
if(t==null){u.b=s
$.bh=$.c3=u}else{u.b=t.b
$.c3=t.b=u
if(u.b==null)$.c2=u}},
jC:function(a,b){var u=$.a6
if(u===C.e)return P.iS(a,b)
return P.iS(a,u.ej(b))},
l0:function(a,b){var u=$.a6
if(u===C.e)return P.jD(a,b)
return P.jD(a,u.c3(b,P.cT))},
jQ:function(a,b,c,d,e){var u={}
u.a=d
P.lm(new P.il(u,e))},
lj:function(a,b,c,d){var u,t=$.a6
if(t===c)return d.$0()
$.a6=c
u=t
try{t=d.$0()
return t}finally{$.a6=u}},
lk:function(a,b,c,d,e){var u,t=$.a6
if(t===c)return d.$1(e)
$.a6=c
u=t
try{t=d.$1(e)
return t}finally{$.a6=u}},
hM:function hM(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
dM:function dM(){this.c=0},
ie:function ie(a,b){this.a=a
this.b=b},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b){this.a=a
this.b=b},
bg:function bg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ia:function ia(a,b){this.a=a
this.$ti=b},
d6:function d6(a){this.a=a
this.b=null},
cO:function cO(){},
fW:function fW(){},
cT:function cT(){},
ii:function ii(){},
il:function il(a,b){this.a=a
this.b=b},
i0:function i0(){},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function(a,b){return new H.a9([a,b])},
kG:function(a){return H.lA(a,new H.a9([null,null]))},
bC:function(a){return new P.hY([a])},
iV:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
la:function(a,b){var u=new P.dm(a,b)
u.c=a.e
return u},
kB:function(a,b,c){var u,t
if(P.iY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.T.push(a)
try{P.lg(a,u)}finally{if(0>=$.T.length)return H.f($.T,-1)
$.T.pop()}t=P.jA(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iI:function(a,b,c){var u,t
if(P.iY(a))return b+"..."+c
u=new P.aU(b)
$.T.push(a)
try{t=u
t.a=P.jA(t.a,a,", ")}finally{if(0>=$.T.length)return H.f($.T,-1)
$.T.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iY:function(a){var u,t
for(u=$.T.length,t=0;t<u;++t)if(a===$.T[t])return!0
return!1},
lg:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.e(n.gB(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gB(n);++l
if(!n.q()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gB(n);++l
for(;n.q();r=q,q=p){p=n.gB(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jl:function(a,b){var u,t,s=P.bC(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t)s.n(0,a[t])
return s},
jm:function(a){var u,t={}
if(P.iY(a))return"{...}"
u=new P.aU("")
try{$.T.push(a)
u.a+="{"
t.a=!0
J.kl(a,new P.f6(t,u))
u.a+="}"}finally{if(0>=$.T.length)return H.f($.T,-1)
$.T.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hY:function hY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hZ:function hZ(a){this.a=a
this.c=this.b=null},
dm:function dm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eS:function eS(){},
f2:function f2(){},
p:function p(){},
f5:function f5(){},
f6:function f6(a,b){this.a=a
this.b=b},
P:function P(){},
i4:function i4(){},
dn:function dn(){},
eh:function eh(){},
ek:function ek(){},
ez:function ez(){},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eP:function eP(a){this.a=a},
hy:function hy(){},
hz:function hz(){},
ig:function ig(a){this.b=0
this.c=a},
kA:function(a){if(a instanceof H.bs)return a.h(0)
return"Instance of '"+H.e(H.bM(a))+"'"},
kH:function(a,b,c){var u,t,s=J.kD(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iO:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aC(a);u.q();)t.push(u.gB(u))
if(b)return t
return J.iK(t)},
iR:function(a){var u,t=a.length,s=P.iQ(0,null,t)
if(typeof s!=="number")return s.X()
u=s<t
return H.kR(u?C.a.cC(a,0,s):a)},
kT:function(a){return new H.eW(a,H.kF(a,!1,!0,!1,!1,!1))},
jA:function(a,b,c){var u=J.aC(b)
if(!u.q())return a
if(c.length===0){do a+=H.e(u.gB(u))
while(u.q())}else{a+=H.e(u.gB(u))
for(;u.q();)a=a+c+H.e(u.gB(u))}return a},
jO:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.kg().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.en(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iP(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kx:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ky:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
jf:function(a){return new P.aH(1000*a)},
iH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.U(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kA(a)},
kq:function(a){return new P.a4(!1,null,null,a)},
iA:function(a,b,c){return new P.a4(!0,a,b,c)},
cH:function(a,b){return new P.bb(null,null,!0,a,b,"Value not in range")},
aq:function(a,b,c,d,e){return new P.bb(b,c,!0,a,d,"Invalid value")},
iQ:function(a,b,c){var u
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
u=a>c}else u=!0
if(u)throw H.c(P.aq(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
u=b>c}else u=!0
if(u)throw H.c(P.aq(b,a,c,"end",null))
return b}return c},
jv:function(a,b){if(typeof a!=="number")return a.X()
if(a<0)throw H.c(P.aq(a,0,null,b,null))},
C:function(a,b,c,d,e){var u=e==null?J.aD(b):e
return new P.eR(u,!0,a,c,"Index out of range")},
t:function(a){return new P.hw(a)},
jF:function(a){return new P.ht(a)},
jz:function(a){return new P.bO(a)},
aG:function(a){return new P.ej(a)},
K:function(a){return new P.de(a)},
j5:function(a){H.lN(a)},
b_:function b_(){},
a_:function a_(a,b){this.a=a
this.b=b},
F:function F(){},
aH:function aH(a){this.a=a},
ev:function ev(){},
ew:function ew(){},
b4:function b4(){},
cE:function cE(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eR:function eR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hw:function hw(a){this.a=a},
ht:function ht(a){this.a=a},
bO:function bO(a){this.a=a},
ej:function ej(a){this.a=a},
fs:function fs(){},
cM:function cM(){},
ep:function ep(a){this.a=a},
de:function de(a){this.a=a},
eJ:function eJ(a,b){this.a=a
this.b=b},
eL:function eL(){},
y:function y(){},
j:function j(){},
eT:function eT(){},
b9:function b9(){},
bD:function bD(){},
aQ:function aQ(){},
X:function X(){},
Q:function Q(){},
o:function o(){},
aU:function aU(a){this.a=a},
lv:function(a){var u,t=J.L(a)
if(!!t.$iaJ){u=t.gc7(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dR(a.data,a.height,a.width)},
lu:function(a){if(a instanceof P.dR)return{data:a.a,height:a.b,width:a.c}
return a},
ax:function(a){var u,t,s,r,q
if(a==null)return
u=P.jk(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
lt:function(a){var u={}
a.L(0,new P.im(u))
return u},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
eF:function eF(a,b){this.a=a
this.b=b},
eG:function eG(){},
eH:function eH(){},
hX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i_:function i_(){},
W:function W(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aN:function aN(){},
f_:function f_(){},
aR:function aR(){},
fq:function fq(){},
fx:function fx(){},
bN:function bN(){},
fX:function fX(){},
i:function i(){},
aV:function aV(){},
hd:function hd(){},
dk:function dk(){},
dl:function dl(){},
dw:function dw(){},
dx:function dx(){},
dI:function dI(){},
dJ:function dJ(){},
dP:function dP(){},
dQ:function dQ(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(a){this.a=a},
ec:function ec(){},
b0:function b0(){},
fr:function fr(){},
d7:function d7(){},
cJ:function cJ(){},
fS:function fS(){},
dE:function dE(){},
dF:function dF(){}},W={
ja:function(){var u=document.createElement("a")
return u},
iD:function(){var u=document.createElement("canvas")
return u},
kz:function(a,b,c){var u=document.body,t=(u&&C.m).a0(u,a,b,c)
t.toString
u=new H.bR(new W.R(t),new W.ey(),[W.v])
return u.gai(u)},
iF:function(a){return"wheel"},
bv:function(a){var u,t,s,r="element tag unavailable"
try{u=J.e3(a)
t=u.gcp(a)
if(typeof t==="string")r=u.gcp(a)}catch(s){H.ag(s)}return r},
hW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jM:function(a,b,c,d){var u=W.hW(W.hW(W.hW(W.hW(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
N:function(a,b,c,d){var u=W.jR(new W.hU(c),W.h)
if(u!=null&&!0)J.kj(a,b,u,!1)
return new W.hT(a,b,u,!1)},
jL:function(a){var u=W.ja(),t=window.location
u=new W.bT(new W.i3(u,t))
u.cO(a)
return u},
l5:function(a,b,c,d){return!0},
l6:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
jN:function(){var u=P.o,t=P.jl(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.ib(t,P.bC(u),P.bC(u),P.bC(u),null)
t.cQ(null,new H.f7(C.j,new W.ic(),[H.af(C.j,0),u]),s,null)
return t},
jR:function(a,b){var u=$.a6
if(u===C.e)return a
return u.c3(a,b)},
l:function l(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
c9:function c9(){},
b1:function b1(){},
b2:function b2(){},
aE:function aE(){},
el:function el(){},
z:function z(){},
bu:function bu(){},
em:function em(){},
Z:function Z(){},
a8:function a8(){},
en:function en(){},
eo:function eo(){},
er:function er(){},
a5:function a5(){},
es:function es(){},
cg:function cg(){},
ch:function ch(){},
et:function et(){},
eu:function eu(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
J:function J(){},
ey:function ey(){},
h:function h(){},
d:function d(){},
aj:function aj(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
ak:function ak(){},
eO:function eO(){},
by:function by(){},
aJ:function aJ(){},
bz:function bz(){},
b7:function b7(){},
f3:function f3(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(a){this.a=a},
fb:function fb(){},
fc:function fc(a){this.a=a},
am:function am(){},
fd:function fd(){},
aa:function aa(){},
R:function R(a){this.a=a},
v:function v(){},
cB:function cB(){},
ap:function ap(){},
fv:function fv(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
fG:function fG(){},
ar:function ar(){},
fQ:function fQ(){},
as:function as(){},
fR:function fR(){},
at:function at(){},
fU:function fU(){},
fV:function fV(a){this.a=a},
ab:function ab(){},
cP:function cP(){},
fY:function fY(){},
fZ:function fZ(){},
bP:function bP(){},
au:function au(){},
ac:function ac(){},
h1:function h1(){},
h2:function h2(){},
h7:function h7(){},
av:function av(){},
bc:function bc(){},
hb:function hb(){},
hc:function hc(){},
aW:function aW(){},
hx:function hx(){},
hI:function hI(){},
aY:function aY(){},
bS:function bS(){},
hR:function hR(){},
d9:function d9(){},
hV:function hV(){},
dt:function dt(){},
i7:function i7(){},
i8:function i8(){},
hP:function hP(){},
hS:function hS(a){this.a=a},
hT:function hT(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hU:function hU(a){this.a=a},
bT:function bT(a){this.a=a},
B:function B(){},
cC:function cC(a){this.a=a},
fm:function fm(a){this.a=a},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(){},
i5:function i5(){},
i6:function i6(){},
ib:function ib(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ic:function ic(){},
i9:function i9(){},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ao:function ao(){},
i3:function i3(a,b){this.a=a
this.b=b},
dS:function dS(a){this.a=a},
ih:function ih(a){this.a=a},
d8:function d8(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
df:function df(){},
dg:function dg(){},
di:function di(){},
dj:function dj(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
bY:function bY(){},
bZ:function bZ(){},
dC:function dC(){},
dD:function dD(){},
dH:function dH(){},
dK:function dK(){},
dL:function dL(){},
c_:function c_(){},
c0:function c0(){},
dN:function dN(){},
dO:function dO(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){}},K={
D:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.K("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aw(a,0)
t=C.b.aw(b,0)
if(u>t){s=t
t=u
u=s}return new K.fy(u,t)},
n:function(a){var u=new K.fH()
u.cK(a)
return u},
ah:function ah(){},
cm:function cm(){},
aP:function aP(){},
S:function S(){this.a=null},
fy:function fy(a,b){this.a=a
this.b=b},
fH:function fH(){this.a=null}},L={
h9:function(){var u=new L.h8(),t=P.o
u.a=new H.a9([t,L.cN])
u.b=new H.a9([t,L.cV])
u.c=P.bC(t)
return u},
cN:function cN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.b=a
this.c=null},
h8:function h8(){var _=this
_.d=_.c=_.b=_.a=null},
cX:function cX(a){this.b=a
this.a=this.c=null}},O={
je:function(a){var u=new O.b3([a])
u.bE(a)
return u},
b3:function b3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bG:function bG(){this.b=this.a=null},
cD:function cD(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){}},E={
kU:function(a,b){var u=new E.fz(a)
u.cJ(a,b)
return u},
l_:function(a,b,c,d,e){var u,t,s=J.L(a)
if(!!s.$ib2)return E.jB(a,!0,!0,!0,!1)
u=W.iD()
t=u.style
t.width="100%"
t.height="100%"
s.gc5(a).n(0,u)
return E.jB(u,!0,!0,!0,!1)},
jB:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cS(),p=C.f.bz(a,"webgl2",P.kG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.M(P.K("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kU(p,a)
u=new T.h4(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.d0(a)
t=new X.eZ()
t.c=new X.a0(!1,!1,!1)
t.d=P.bC(P.y)
u.b=t
t=new X.fe(u)
t.f=0
t.r=V.aS()
t.x=V.aS()
t.ch=t.Q=1
u.c=t
t=new X.f4(u)
t.r=0
t.x=V.aS()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ha(u)
t.f=V.aS()
t.r=V.aS()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.cO,P.Q]])
u.z=t
s=document
t.push(W.N(s,"contextmenu",u.gdq(),!1))
u.z.push(W.N(a,"focus",u.gdw(),!1))
u.z.push(W.N(a,"blur",u.gdi(),!1))
u.z.push(W.N(s,"keyup",u.gdC(),!1))
u.z.push(W.N(s,"keydown",u.gdA(),!1))
u.z.push(W.N(a,"mousedown",u.gdF(),!1))
u.z.push(W.N(a,"mouseup",u.gdJ(),!1))
u.z.push(W.N(a,r,u.gdH(),!1))
t=u.z
W.iF(a)
W.iF(a)
t.push(W.N(a,W.iF(a),u.gdL(),!1))
u.z.push(W.N(s,r,u.gds(),!1))
u.z.push(W.N(s,"mouseup",u.gdu(),!1))
u.z.push(W.N(s,"pointerlockchange",u.gdN(),!1))
u.z.push(W.N(a,"touchstart",u.gdW(),!1))
u.z.push(W.N(a,"touchend",u.gdS(),!1))
u.z.push(W.N(a,"touchmove",u.gdU(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a_(Date.now(),!1)
q.db=0
q.bT()
return q},
ed:function ed(){},
aI:function aI(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fz:function fz(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
cS:function cS(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
h6:function h6(a){this.a=a}},Z={
iU:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iW(c)),35044)
a.bindBuffer(b,null)
return new Z.d5(b,u)},
a2:function(a){return new Z.aX(a)},
d5:function d5(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hJ:function hJ(a){this.a=a},
cb:function cb(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a}},D={
E:function(){var u=new D.bw()
u.d=0
return u},
eg:function eg(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
eB:function eB(a){this.a=a},
eC:function eC(a){this.a=a},
O:function O(){this.b=null},
cn:function cn(){this.b=null},
co:function co(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
jW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2="modifiers",a3=34067,a4=V.kW("Test 030"),a5=W.iD()
a5.className="pageLargeCanvas"
a5.id=a0
a4.a.appendChild(a5)
u=[P.o]
a4.c1(H.b(["A test of the Normal shader for dynamically rendering normal maps."],u))
a4.c1(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a0)
if(t==null)H.M(P.K("Failed to find an element with the identifier, testCanvas."))
s=E.l_(t,!0,!0,!0,!1)
r=new E.aI()
r.a=""
r.b=!0
u=E.aI
q=O.je(u)
r.y=q
q.aU(r.geE(),r.geH())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbB(0,a1)
r.saC(a1)
p=F.jy()
F.c1(p,a1,a1,1,1,1,0,0,1)
F.c1(p,a1,a1,1,1,0,1,0,3)
F.c1(p,a1,a1,1,1,0,0,1,2)
F.c1(p,a1,a1,1,1,-1,0,0,0)
F.c1(p,a1,a1,1,1,0,-1,0,0)
F.c1(p,a1,a1,1,1,0,0,-1,3)
p.aq()
r.sbB(0,p)
q=new U.bx()
q.bE(U.V)
q.aU(q.gdg(),q.gdQ())
q.e=null
q.f=V.cx()
q.r=0
o=s.x
n=new U.d2()
m=U.iE()
m.sby(0,!0)
m.sbr(6.283185307179586)
m.sbt(0)
m.sY(0,0)
m.sbs(100)
m.sP(0)
m.sbn(0.5)
n.b=m
l=n.gan()
m.gt().n(0,l)
m=U.iE()
m.sby(0,!0)
m.sbr(6.283185307179586)
m.sbt(0)
m.sY(0,0)
m.sbs(100)
m.sP(0)
m.sbn(0.5)
n.c=m
m.gt().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.a0(!1,!1,!1)
j=n.d
n.d=k
m=new D.w(a2,j,k)
m.b=!0
n.K(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.w("invertX",m,!1)
m.b=!0
n.K(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.w("invertY",m,!1)
m.b=!0
n.K(m)}n.aA(o)
q.n(0,n)
o=s.x
n=new U.d1()
m=U.iE()
m.sby(0,!0)
m.sbr(6.283185307179586)
m.sbt(0)
m.sY(0,0)
m.sbs(100)
m.sP(0)
m.sbn(0.2)
n.b=m
m.gt().n(0,n.gan())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.a0(!0,!1,!1)
j=n.c
n.c=k
m=new D.w(a2,j,k)
m.b=!0
n.K(m)
n.aA(o)
q.n(0,n)
o=s.x
n=new U.d3()
n.c=0.01
n.e=n.d=0
k=new X.a0(!1,!1,!1)
n.b=k
m=new D.w(a2,a1,k)
m.b=!0
n.K(m)
n.aA(o)
q.n(0,n)
r.saC(q)
i=new O.cD()
q=$.jn
i.b=q==null?$.jn=new V.cw(1,0,0,0,1,0,0,0,1):q
i.c=V.cx()
i.d=new A.bt(!1,!1,!1)
i.bU(a1)
i.bV(a1)
i.bJ()
i.r=null
q=s.f
o=q.a
h=o.createTexture()
o.bindTexture(a3,h)
o.texParameteri(a3,10242,10497)
o.texParameteri(a3,10243,10497)
o.texParameteri(a3,10241,9729)
o.texParameteri(a3,10240,9729)
o.bindTexture(a3,a1)
g=new T.h3()
g.a=0
g.b=h
g.c=!1
g.d=0
q.am(g,h,"../resources/diceBumpMap/posx.png",34069,!1,!1)
q.am(g,h,"../resources/diceBumpMap/negx.png",34070,!1,!1)
q.am(g,h,"../resources/diceBumpMap/posy.png",34071,!1,!1)
q.am(g,h,"../resources/diceBumpMap/negy.png",34072,!1,!1)
q.am(g,h,"../resources/diceBumpMap/posz.png",34073,!1,!1)
q.am(g,h,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(!i.d.c){i.d=new A.bt(!1,!1,!0)
i.bU(a1)
i.a=null}i.bV(g)
f=X.ji(a1)
e=new V.aF(0.5,0.5,1,1)
if(!f.a.p(0,e)){j=f.a
f.a=e
q=new D.w("color",j,e)
q.b=!0
o=f.x
if(o!=null)o.D(q)}d=new M.ci()
d.a=!0
u=O.je(u)
d.e=u
u.aU(d.gdk(),d.gdm())
d.y=d.x=d.r=d.f=null
c=X.ji(a1)
b=new X.cF()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.saC(a1)
u=b.c
if(!(Math.abs(u-1.0471975511965976)<$.A().a)){b.c=1.0471975511965976
u=new D.w("fov",u,1.0471975511965976)
u.b=!0
b.ak(u)}u=b.d
if(!(Math.abs(u-0.1)<$.A().a)){b.d=0.1
u=new D.w("near",u,0.1)
u.b=!0
b.ak(u)}u=b.e
if(!(Math.abs(u-2000)<$.A().a)){b.e=2000
u=new D.w("far",u,2000)
u.b=!0
b.ak(u)}u=d.b
if(u!==b){if(u!=null)u.gt().R(0,d.ga4())
j=d.b
d.b=b
b.gt().n(0,d.ga4())
u=new D.w("camera",j,d.b)
u.b=!0
d.a8(u)}d.scq(0,c)
d.scr(a1)
d.scr(i)
d.scq(0,f)
d.e.n(0,r)
u=d.b
a=V.al(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.ce()
q.a=a
u.saC(q)
u=s.d
if(u!==d){if(u!=null)u.gt().R(0,s.gbF())
s.d=d
d.gt().n(0,s.gbF())
s.bG()}u=s.Q
if(u==null)u=s.Q=D.E()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.O]}]):q
u.push(new D.iv(a4,i))
V.lQ(s)},
iv:function iv(a,b){this.a=a
this.b=b}},X={cc:function cc(a,b){this.a=a
this.b=b},cs:function cs(a,b){this.a=a
this.b=b},eZ:function eZ(){var _=this
_.d=_.c=_.b=_.a=null},cu:function cu(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},f4:function f4(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},an:function an(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fe:function fe(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bH:function bH(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fw:function fw(){},cW:function cW(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ha:function ha(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d0:function d0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ji:function(a){var u=new X.eK(),t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jx
if(t==null){t=V.jw(0,0,1,1)
$.jx=t}u.r=t
return u},
iC:function iC(){},
eK:function eK(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(){}},V={
lW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cz(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.b.a2("null",c)
return C.b.a2(C.c.cs(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bl:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.r)(a),++s){r=V.G(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a2(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
j4:function(a){return C.c.f2(Math.pow(2,C.H.bo(Math.log(H.ls(a))/Math.log(2))))},
cx:function(){var u=$.jo
return u==null?$.jo=V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aS:function(){var u=$.js
return u==null?$.js=new V.a1(0,0):u},
jw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cI(a,b,c,d)},
d4:function(){var u=$.jJ
return u==null?$.jJ=new V.I(0,0,0):u},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a){this.a=a},
cw:function cw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bF:function bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x:function x(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function(a){P.l0(C.E,new V.ix(a))},
kW:function(a){var u=new V.fM()
u.cM(a,!0)
return u},
cd:function cd(){},
ix:function ix(a){this.a=a},
eq:function eq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eM:function eM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eN:function eN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fu:function fu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(){this.b=this.a=null},
fO:function fO(a){this.a=a},
fN:function fN(a){this.a=a},
fP:function fP(a){this.a=a}},U={
iE:function(){var u=new U.ei()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ei:function ei(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ce:function ce(){this.b=this.a=null},
bx:function bx(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
V:function V(){},
d1:function d1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ci:function ci(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jp:function(a){var u,t=a.c,s=a.c,r="Normal_"+a.gf8(a),q=$.aA(),p=$.az()
p=q.a|p.a
u=new Z.aX(p)
if(t)u=new Z.aX(p|$.ay().a)
return new A.fo(a,t,!1,s,r,s?new Z.aX(u.a|$.aB().a):u)},
iT:function(a,b,c,d,e){var u=new A.hi(a,c,e)
u.f=d
P.kH(d,0,P.y)
return u},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a){this.a=a},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fo:function fo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cK:function cK(){},
cY:function cY(){},
hp:function hp(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.c=b
this.d=c},
hk:function hk(a,b,c){this.a=a
this.c=b
this.d=c},
hm:function hm(a,b,c){this.a=a
this.c=b
this.d=c},
ho:function ho(a,b,c){this.a=a
this.c=b
this.d=c},
hi:function hi(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
hg:function hg(a,b,c){this.a=a
this.c=b
this.d=c},
hj:function hj(a,b,c){this.a=a
this.c=b
this.d=c},
hl:function hl(a,b,c){this.a=a
this.c=b
this.d=c},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
hq:function hq(a,b,c){this.a=a
this.c=b
this.d=c},
hr:function hr(a,b,c){this.a=a
this.c=b
this.d=c},
bd:function bd(a,b,c){this.a=a
this.c=b
this.d=c},
hs:function hs(a,b,c){this.a=a
this.c=b
this.d=c},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ik:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c1:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.I(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.I(u+a3,t+a1,s+a2)
q=new V.I(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.I(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ik(i)
l=F.ik(h)
k=F.lT(d,a0,new F.ij(j,F.ik(g),F.ik(f),l,m,c),b)
if(k!=null)a.eD(k)},
lT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.jy()
t=H.b([],[F.bQ])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.c0(new V.aF(p,0,0,1),new V.a1(r,1))
c.$3(o,r,0)
t.push(o.bm(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.c0(new V.aF(j,i,h,1),new V.a1(r,m))
c.$3(o,r,n)
t.push(o.bm(d))}}u.d.ef(a+1,b+1,t)
return u},
cj:function(a,b,c){var u=new F.b5(),t=a.a
if(t==null)H.M(P.K("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.M(P.K("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
jy:function(){var u=new F.fI(),t=new F.hA(u)
t.b=!1
t.c=H.b([],[F.bQ])
u.a=t
t=new F.fL(u)
t.b=H.b([],[F.bK])
u.b=t
t=new F.fK(u)
t.b=H.b([],[F.bB])
u.c=t
t=new F.fJ(u)
t.b=H.b([],[F.b5])
u.d=t
u.e=null
return u},
jK:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bQ(),r=new F.hF()
r.b=H.b([],[F.bK])
s.b=r
r=new F.hE()
u=[F.bB]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hB()
u=[F.b5]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kc()
s.e=0
r=$.aA()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.az().a)!==0?e:t
s.x=(u&$.ay().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.aB().a)!==0?g:t
s.Q=(u&$.kd().a)!==0?c:t
s.ch=(u&$.bo().a)!==0?i:0
s.cx=(u&$.bm().a)!==0?a:t
return s},
ij:function ij(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b5:function b5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bB:function bB(){this.b=this.a=null},
bK:function bK(){this.a=null},
fI:function fI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fJ:function fJ(a){this.a=a
this.b=null},
fK:function fK(a){this.a=a
this.b=null},
fL:function fL(a){this.a=a
this.b=null},
bQ:function bQ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a){this.a=a},
hG:function hG(a){this.a=a},
hA:function hA(a){this.a=a
this.c=this.b=null},
hB:function hB(){this.d=this.c=this.b=null},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){this.c=this.b=null},
hF:function hF(){this.b=null}},T={cR:function cR(){},h3:function h3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},h4:function h4(a){var _=this
_.a=a
_.e=_.d=_.c=null},h5:function h5(a,b,c,d,e,f,g){var _=this
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
H.iM.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.bL(a)},
h:function(a){return"Instance of '"+H.e(H.bM(a))+"'"}}
J.eU.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ib_:1}
J.eV.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cr.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.ft.prototype={}
J.be.prototype={}
J.aM.prototype={
h:function(a){var u=a[$.k1()]
if(u==null)return this.cG(a)
return"JavaScript function for "+H.e(J.U(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aK.prototype={
eT:function(a,b){var u
if(!!a.fixed$length)H.M(P.t("removeAt"))
u=a.length
if(b>=u)throw H.c(P.cH(b,null))
return a.splice(b,1)[0]},
R:function(a,b){var u
if(!!a.fixed$length)H.M(P.t("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
a_:function(a,b){var u,t
if(!!a.fixed$length)H.M(P.t("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.r)(b),++t)a.push(b[t])},
L:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aG(a))}},
l:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
eB:function(a){return this.l(a,"")},
ey:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aG(a))}throw H.c(H.iJ())},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
cC:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aq(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aq(c,b,u,"end",null))
if(b===c)return H.b([],[H.af(a,0)])
return H.b(a.slice(b,c),[H.af(a,0)])},
gaO:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.iJ())},
c2:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aG(a))}return!1},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
h:function(a){return P.iI(a,"[","]")},
gN:function(a){return new J.Y(a,a.length)},
gG:function(a){return H.bL(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.M(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iA(b,u,null))
if(b<0)throw H.c(P.aq(b,0,null,u,null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.bk(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.M(P.t("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bk(a,b))
a[b]=c},
$im:1,
$ij:1}
J.iL.prototype={}
J.Y.prototype={
gB:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.r(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bA.prototype={
as:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aw(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaN(b)
if(this.gaN(a)===u)return 0
if(this.gaN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaN:function(a){return a===0?1/a<0:a<0},
f2:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.t(""+a+".toInt()"))},
bo:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.t(""+a+".floor()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
cs:function(a,b){var u
if(b>20)throw H.c(P.aq(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaN(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cz:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cI:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bW(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.t("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aJ:function(a,b){var u
if(a>0)u=this.e7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
e7:function(a,b){return b>31?0:a>>>b},
$iF:1,
$iX:1}
J.cq.prototype={$iy:1}
J.cp.prototype={}
J.aL.prototype={
bl:function(a,b){if(b<0)throw H.c(H.bk(a,b))
if(b>=a.length)H.M(H.bk(a,b))
return a.charCodeAt(b)},
aw:function(a,b){if(b>=a.length)throw H.c(H.bk(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.c(P.iA(b,null,null))
return a+b},
aW:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aF:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cH(b,null))
if(b>c)throw H.c(P.cH(b,null))
if(c>a.length)throw H.c(P.cH(c,null))
return a.substring(b,c)},
aX:function(a,b){return this.aF(a,b,null)},
f5:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a2:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
as:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aw(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$io:1}
H.k.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.bl(this.a,b)},
$am:function(){return[P.y]},
$ap:function(){return[P.y]},
$aj:function(){return[P.y]}}
H.m.prototype={}
H.ct.prototype={
gN:function(a){return new H.aO(this,this.gk(this))},
aT:function(a,b){return this.cF(0,b)}}
H.aO.prototype={
gB:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.e2(s),q=r.gk(s)
if(t.b!=q)throw H.c(P.aG(s))
u=t.c
if(typeof q!=="number")return H.q(q)
if(u>=q){t.d=null
return!1}t.d=r.A(s,u);++t.c
return!0}}
H.bE.prototype={
gN:function(a){return new H.cv(J.aC(this.a),this.b)},
gk:function(a){return J.aD(this.a)},
A:function(a,b){return this.b.$1(J.e4(this.a,b))},
$aj:function(a,b){return[b]}}
H.ex.prototype={$im:1,
$am:function(a,b){return[b]}}
H.cv.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gB(t))
return!0}u.a=null
return!1},
gB:function(a){return this.a}}
H.f7.prototype={
gk:function(a){return J.aD(this.a)},
A:function(a,b){return this.b.$1(J.e4(this.a,b))},
$am:function(a,b){return[b]},
$act:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.bR.prototype={
gN:function(a){return new H.hK(J.aC(this.a),this.b)}}
H.hK.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.ck.prototype={}
H.hv.prototype={
m:function(a,b,c){throw H.c(P.t("Cannot modify an unmodifiable list"))}}
H.d_.prototype={}
H.he.prototype={
a1:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.fp.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eY.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hu.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iz.prototype={
$1:function(a){if(!!J.L(a).$ib4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dG.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bs.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.c5(t==null?"unknown":t)+"'"},
gfa:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h0.prototype={}
H.fT.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c5(u)+"'"}}
H.bq.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bL(this.a)
else u=typeof t!=="object"?J.bp(t):H.bL(t)
return(u^H.bL(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bM(u))+"'")}}
H.ef.prototype={
h:function(a){return this.a}}
H.fF.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.a9.prototype={
gk:function(a){return this.a},
gV:function(a){return new H.b8(this,[H.af(this,0)])},
gf9:function(a){var u=this,t=H.af(u,0)
return H.kI(new H.b8(u,[t]),new H.eX(u),t,H.af(u,1))},
em:function(a,b){var u=this.b
if(u==null)return!1
return this.d1(u,b)},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aH(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aH(r,b)
s=t==null?null:t.b
return s}else return q.eA(b)},
eA:function(a){var u,t,s=this.d
if(s==null)return
u=this.bS(s,J.bp(a)&0x3ffffff)
t=this.c9(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bL(u==null?o.b=o.bc():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bL(t==null?o.c=o.bc():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bc()
r=J.bp(b)&0x3ffffff
q=o.bS(s,r)
if(q==null)o.bf(s,r,[o.bd(b,c)])
else{p=o.c9(q,b)
if(p>=0)q[p].b=c
else q.push(o.bd(b,c))}}},
L:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aG(u))
t=t.c}},
bL:function(a,b,c){var u=this.aH(a,b)
if(u==null)this.bf(a,b,this.bd(b,c))
else u.b=c},
dd:function(){this.r=this.r+1&67108863},
bd:function(a,b){var u,t=this,s=new H.f0(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dd()
return s},
c9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
h:function(a){return P.jm(this)},
aH:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
bf:function(a,b,c){a[b]=c},
d5:function(a,b){delete a[b]},
d1:function(a,b){return this.aH(a,b)!=null},
bc:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bf(t,u,t)
this.d5(t,u)
return t}}
H.eX.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.af(u,1),args:[H.af(u,0)]}}}
H.f0.prototype={}
H.b8.prototype={
gk:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.f1(u,u.r)
t.c=u.e
return t}}
H.f1.prototype={
gB:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aG(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ir.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.is.prototype={
$2:function(a,b){return this.a(a,b)}}
H.it.prototype={
$1:function(a){return this.a(a)}}
H.eW.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bJ.prototype={}
H.cy.prototype={
gk:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bI.prototype={
j:function(a,b){H.ae(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.F]},
$ap:function(){return[P.F]},
$ij:1,
$aj:function(){return[P.F]}}
H.cz.prototype={
m:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.y]},
$ap:function(){return[P.y]},
$ij:1,
$aj:function(){return[P.y]}}
H.ff.prototype={
j:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.fg.prototype={
j:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.fh.prototype={
j:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.fi.prototype={
j:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.fj.prototype={
j:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.cA.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.fk.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.bU.prototype={}
H.bV.prototype={}
H.bW.prototype={}
H.bX.prototype={}
P.hM.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.hL.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hN.prototype={
$0:function(){this.a.$0()}}
P.hO.prototype={
$0:function(){this.a.$0()}}
P.dM.prototype={
cR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bj(new P.ie(this,b),0),a)
else throw H.c(P.t("`setTimeout()` not found."))},
cS:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bj(new P.id(this,a,Date.now(),b),0),a)
else throw H.c(P.t("Periodic timer."))},
$icT:1}
P.ie.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.id.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cI(u,q)}s.c=r
t.d.$1(s)}}
P.bf.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bg.prototype={
gB:function(a){var u=this.c
if(u==null)return this.b
return u.gB(u)},
q:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.q())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bf){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aC(u)
if(!!r.$ibg){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ia.prototype={
gN:function(a){return new P.bg(this.a())}}
P.d6.prototype={}
P.cO.prototype={}
P.fW.prototype={}
P.cT.prototype={}
P.ii.prototype={}
P.il.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cE():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.i0.prototype={
eY:function(a){var u,t,s,r=null
try{if(C.e===$.a6){a.$0()
return}P.lj(r,r,this,a)}catch(s){u=H.ag(s)
t=H.j1(s)
P.jQ(r,r,this,u,t)}},
eZ:function(a,b){var u,t,s,r=null
try{if(C.e===$.a6){a.$1(b)
return}P.lk(r,r,this,a,b)}catch(s){u=H.ag(s)
t=H.j1(s)
P.jQ(r,r,this,u,t)}},
f_:function(a,b){return this.eZ(a,b,null)},
ej:function(a){return new P.i1(this,a)},
c3:function(a,b){return new P.i2(this,a,b)}}
P.i1.prototype={
$0:function(){return this.a.eY(this.b)}}
P.i2.prototype={
$1:function(a){return this.a.f_(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hY.prototype={
gN:function(a){var u=new P.dm(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.d0(b)
return t}},
d0:function(a){var u=this.d
if(u==null)return!1
return this.b3(this.bR(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bM(u==null?s.b=P.iV():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bM(t==null?s.c=P.iV():t,b)}else return s.cU(0,b)},
cU:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iV()
u=s.bO(b)
t=r[u]
if(t==null)r[u]=[s.b0(b)]
else{if(s.b3(t,b)>=0)return!1
t.push(s.b0(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dZ(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bR(r,b)
t=s.b3(u,b)
if(t<0)return!1
s.bY(u.splice(t,1)[0])
return!0},
bM:function(a,b){if(a[b]!=null)return!1
a[b]=this.b0(b)
return!0},
dZ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bY(u)
delete a[b]
return!0},
bN:function(){this.r=1073741823&this.r+1},
b0:function(a){var u,t=this,s=new P.hZ(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bN()
return s},
bY:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bN()},
bO:function(a){return J.bp(a)&1073741823},
bR:function(a,b){return a[this.bO(b)]},
b3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.hZ.prototype={}
P.dm.prototype={
gB:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aG(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eS.prototype={}
P.f2.prototype={$im:1,$ij:1}
P.p.prototype={
gN:function(a){return new H.aO(a,this.gk(a))},
A:function(a,b){return this.j(a,b)},
f4:function(a,b){var u,t,s=this,r=H.b([],[H.lC(s,a,"p",0)])
C.a.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.q(t)
if(!(u<t))break
t=s.j(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
f3:function(a){return this.f4(a,!0)},
h:function(a){return P.iI(a,"[","]")}}
P.f5.prototype={}
P.f6.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.P.prototype={
L:function(a,b){var u,t
for(u=J.aC(this.gV(a));u.q();){t=u.gB(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.aD(this.gV(a))},
h:function(a){return P.jm(a)}}
P.i4.prototype={
a_:function(a,b){var u
for(u=J.aC(b);u.q();)this.n(0,u.gB(u))},
h:function(a){return P.iI(this,"{","}")},
A:function(a,b){var u,t,s
P.jv(b,"index")
for(u=P.la(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.c(P.C(b,this,"index",null,t))},
$im:1,
$ij:1}
P.dn.prototype={}
P.eh.prototype={}
P.ek.prototype={}
P.ez.prototype={}
P.eQ.prototype={
h:function(a){return this.a}}
P.eP.prototype={
d2:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.f(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":o
break
case"'":p=s?"&#39;":o
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":o
break
default:p=o}if(p!=null){if(q==null)q=new P.aU("")
if(r>b)q.a+=C.b.aF(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ko(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hy.prototype={}
P.hz.prototype={
en:function(a){var u,t,s,r=P.iQ(0,null,a.length)
if(typeof r!=="number")return r.C()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ig(t)
if(s.d7(a,0,r)!==r)s.bZ(C.b.bl(a,r-1),0)
return new Uint8Array(t.subarray(0,H.ld(0,s.b,t.length)))}}
P.ig.prototype={
bZ:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.f(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.f(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|a&63
return!1}},
d7:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bl(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aw(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bZ(r,C.b.aw(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.b_.prototype={}
P.a_.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a_&&this.a===b.a&&!0},
as:function(a,b){return C.d.as(this.a,b.a)},
gG:function(a){var u=this.a
return(u^C.d.aJ(u,30))&1073741823},
h:function(a){var u=this,t=P.kx(H.kQ(u)),s=P.cf(H.kO(u)),r=P.cf(H.kK(u)),q=P.cf(H.kL(u)),p=P.cf(H.kN(u)),o=P.cf(H.kP(u)),n=P.ky(H.kM(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.F.prototype={}
P.aH.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
as:function(a,b){return C.d.as(this.a,b.a)},
h:function(a){var u,t,s,r=new P.ew(),q=this.a
if(q<0)return"-"+new P.aH(0-q).h(0)
u=r.$1(C.d.a6(q,6e7)%60)
t=r.$1(C.d.a6(q,1e6)%60)
s=new P.ev().$1(q%1e6)
return""+C.d.a6(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ev.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ew.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b4.prototype={}
P.cE.prototype={
h:function(a){return"Throw of null."}}
P.a4.prototype={
gb2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb1:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb2()+o+u
if(!q.a)return t
s=q.gb1()
r=P.iH(q.b)
return t+s+": "+r}}
P.bb.prototype={
gb2:function(){return"RangeError"},
gb1:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eR.prototype={
gb2:function(){return"RangeError"},
gb1:function(){var u,t=this.b
if(typeof t!=="number")return t.X()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gk:function(a){return this.f}}
P.hw.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ht.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bO.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ej.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iH(u)+"."}}
P.fs.prototype={
h:function(a){return"Out of Memory"},
$ib4:1}
P.cM.prototype={
h:function(a){return"Stack Overflow"},
$ib4:1}
P.ep.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.de.prototype={
h:function(a){return"Exception: "+this.a}}
P.eJ.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aF(s,0,75)+"...":s
return t+"\n"+r}}
P.eL.prototype={}
P.y.prototype={}
P.j.prototype={
aT:function(a,b){return new H.bR(this,b,[H.j0(this,"j",0)])},
gk:function(a){var u,t=this.gN(this)
for(u=0;t.q();)++u
return u},
gai:function(a){var u,t=this.gN(this)
if(!t.q())throw H.c(H.iJ())
u=t.gB(t)
if(t.q())throw H.c(H.kC())
return u},
A:function(a,b){var u,t,s
P.jv(b,"index")
for(u=this.gN(this),t=0;u.q();){s=u.gB(u)
if(b===t)return s;++t}throw H.c(P.C(b,this,"index",null,t))},
h:function(a){return P.kB(this,"(",")")}}
P.eT.prototype={}
P.b9.prototype={$im:1,$ij:1}
P.bD.prototype={}
P.aQ.prototype={
gG:function(a){return P.Q.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.X.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
p:function(a,b){return this===b},
gG:function(a){return H.bL(this)},
h:function(a){return"Instance of '"+H.e(H.bM(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.aU.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.e5.prototype={
gk:function(a){return a.length}}
W.e6.prototype={
h:function(a){return String(a)}}
W.e7.prototype={
h:function(a){return String(a)}}
W.c9.prototype={}
W.b1.prototype={$ib1:1}
W.b2.prototype={
bz:function(a,b,c){if(c!=null)return a.getContext(b,P.lt(c))
return a.getContext(b)},
cw:function(a,b){return this.bz(a,b,null)},
$ib2:1}
W.aE.prototype={
gk:function(a){return a.length}}
W.el.prototype={
gk:function(a){return a.length}}
W.z.prototype={$iz:1}
W.bu.prototype={
gk:function(a){return a.length}}
W.em.prototype={}
W.Z.prototype={}
W.a8.prototype={}
W.en.prototype={
gk:function(a){return a.length}}
W.eo.prototype={
gk:function(a){return a.length}}
W.er.prototype={
gk:function(a){return a.length}}
W.a5.prototype={$ia5:1}
W.es.prototype={
h:function(a){return String(a)}}
W.cg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[[P.W,P.X]]},
$iu:1,
$au:function(){return[[P.W,P.X]]},
$ap:function(){return[[P.W,P.X]]},
$ij:1,
$aj:function(){return[[P.W,P.X]]}}
W.ch.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gah(a))+" x "+H.e(this.gab(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.L(b)
return!!u.$iW&&a.left===u.gaP(b)&&a.top===u.gaS(b)&&this.gah(a)===u.gah(b)&&this.gab(a)===u.gab(b)},
gG:function(a){return W.jM(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gah(a)),C.c.gG(this.gab(a)))},
gc4:function(a){return a.bottom},
gab:function(a){return a.height},
gaP:function(a){return a.left},
gco:function(a){return a.right},
gaS:function(a){return a.top},
gah:function(a){return a.width},
$iW:1,
$aW:function(){return[P.X]}}
W.et.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[P.o]},
$iu:1,
$au:function(){return[P.o]},
$ap:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
W.eu.prototype={
gk:function(a){return a.length}}
W.hQ.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.f3(this)
return new J.Y(u,u.length)},
$am:function(){return[W.J]},
$ap:function(){return[W.J]},
$aj:function(){return[W.J]}}
W.J.prototype={
gei:function(a){return new W.hS(a)},
gc5:function(a){return new W.hQ(a,a.children)},
gc6:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.X()
if(s<0)s=-s*0
if(typeof r!=="number")return r.X()
if(r<0)r=-r*0
return new P.W(u,t,s,r,[P.X])},
h:function(a){return a.localName},
a0:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jh
if(u==null){u=H.b([],[W.ao])
t=new W.cC(u)
u.push(W.jL(null))
u.push(W.jN())
$.jh=t
d=t}else d=u
u=$.jg
if(u==null){u=new W.dS(d)
$.jg=u
c=u}else{u.a=d
c=u}}if($.ai==null){u=document
t=u.implementation.createHTMLDocument("")
$.ai=t
$.iG=t.createRange()
s=$.ai.createElement("base")
s.href=u.baseURI
$.ai.head.appendChild(s)}u=$.ai
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ai
if(!!this.$ib1)r=u.body
else{r=u.createElement(a.tagName)
$.ai.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.K,a.tagName)){$.iG.selectNodeContents(r)
q=$.iG.createContextualFragment(b)}else{r.innerHTML=b
q=$.ai.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ai.body
if(r==null?u!=null:r!==u)J.j9(r)
c.bA(q)
document.adoptNode(q)
return q},
ep:function(a,b,c){return this.a0(a,b,c,null)},
cB:function(a,b){a.textContent=null
a.appendChild(this.a0(a,b,null,null))},
$iJ:1,
gcp:function(a){return a.tagName}}
W.ey.prototype={
$1:function(a){return!!J.L(a).$iJ}}
W.h.prototype={$ih:1}
W.d.prototype={
ee:function(a,b,c,d){if(c!=null)this.cV(a,b,c,!1)},
cV:function(a,b,c,d){return a.addEventListener(b,H.bj(c,1),!1)}}
W.aj.prototype={$iaj:1}
W.eD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aj]},
$iu:1,
$au:function(){return[W.aj]},
$ap:function(){return[W.aj]},
$ij:1,
$aj:function(){return[W.aj]}}
W.eE.prototype={
gk:function(a){return a.length}}
W.eI.prototype={
gk:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.eO.prototype={
gk:function(a){return a.length}}
W.by.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iu:1,
$au:function(){return[W.v]},
$ap:function(){return[W.v]},
$ij:1,
$aj:function(){return[W.v]}}
W.aJ.prototype={$iaJ:1,
gc7:function(a){return a.data}}
W.bz.prototype={$ibz:1}
W.b7.prototype={$ib7:1}
W.f3.prototype={
h:function(a){return String(a)}}
W.f8.prototype={
gk:function(a){return a.length}}
W.f9.prototype={
j:function(a,b){return P.ax(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gV:function(a){var u=H.b([],[P.o])
this.L(a,new W.fa(u))
return u},
gk:function(a){return a.size},
$aP:function(){return[P.o,null]}}
W.fa.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fb.prototype={
j:function(a,b){return P.ax(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gV:function(a){var u=H.b([],[P.o])
this.L(a,new W.fc(u))
return u},
gk:function(a){return a.size},
$aP:function(){return[P.o,null]}}
W.fc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.am.prototype={$iam:1}
W.fd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.am]},
$iu:1,
$au:function(){return[W.am]},
$ap:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]}}
W.aa.prototype={$iaa:1}
W.R.prototype={
gai:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.jz("No elements"))
if(t>1)throw H.c(P.jz("More than one element"))
return u.firstChild},
a_:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.cl(u,u.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$am:function(){return[W.v]},
$ap:function(){return[W.v]},
$aj:function(){return[W.v]}}
W.v.prototype={
eS:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
eW:function(a,b){var u,t
try{u=a.parentNode
J.ki(u,b,a)}catch(t){H.ag(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.cE(a):u},
e_:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iu:1,
$au:function(){return[W.v]},
$ap:function(){return[W.v]},
$ij:1,
$aj:function(){return[W.v]}}
W.ap.prototype={$iap:1,
gk:function(a){return a.length}}
W.fv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ap]},
$iu:1,
$au:function(){return[W.ap]},
$ap:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]}}
W.fD.prototype={
j:function(a,b){return P.ax(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gV:function(a){var u=H.b([],[P.o])
this.L(a,new W.fE(u))
return u},
gk:function(a){return a.size},
$aP:function(){return[P.o,null]}}
W.fE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fG.prototype={
gk:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.fQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ar]},
$iu:1,
$au:function(){return[W.ar]},
$ap:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]}}
W.as.prototype={$ias:1}
W.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.as]},
$iu:1,
$au:function(){return[W.as]},
$ap:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]}}
W.at.prototype={$iat:1,
gk:function(a){return a.length}}
W.fU.prototype={
j:function(a,b){return a.getItem(b)},
L:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gV:function(a){var u=H.b([],[P.o])
this.L(a,new W.fV(u))
return u},
gk:function(a){return a.length},
$aP:function(){return[P.o,P.o]}}
W.fV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ab.prototype={$iab:1}
W.cP.prototype={
a0:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aY(a,b,c,d)
u=W.kz("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.R(t).a_(0,new W.R(u))
return t}}
W.fY.prototype={
a0:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aY(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.a0(u.createElement("table"),b,c,d)
u.toString
u=new W.R(u)
s=u.gai(u)
s.toString
u=new W.R(s)
r=u.gai(u)
t.toString
r.toString
new W.R(t).a_(0,new W.R(r))
return t}}
W.fZ.prototype={
a0:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aY(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.a0(u.createElement("table"),b,c,d)
u.toString
u=new W.R(u)
s=u.gai(u)
t.toString
s.toString
new W.R(t).a_(0,new W.R(s))
return t}}
W.bP.prototype={$ibP:1}
W.au.prototype={$iau:1}
W.ac.prototype={$iac:1}
W.h1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ac]},
$iu:1,
$au:function(){return[W.ac]},
$ap:function(){return[W.ac]},
$ij:1,
$aj:function(){return[W.ac]}}
W.h2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.au]},
$iu:1,
$au:function(){return[W.au]},
$ap:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.h7.prototype={
gk:function(a){return a.length}}
W.av.prototype={$iav:1}
W.bc.prototype={$ibc:1}
W.hb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.av]},
$iu:1,
$au:function(){return[W.av]},
$ap:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]}}
W.hc.prototype={
gk:function(a){return a.length}}
W.aW.prototype={}
W.hx.prototype={
h:function(a){return String(a)}}
W.hI.prototype={
gk:function(a){return a.length}}
W.aY.prototype={
ges:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
ger:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.t("deltaX is not supported"))},
$iaY:1}
W.bS.prototype={
e0:function(a,b){return a.requestAnimationFrame(H.bj(b,1))},
d6:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.z]},
$iu:1,
$au:function(){return[W.z]},
$ap:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]}}
W.d9.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.L(b)
return!!u.$iW&&a.left===u.gaP(b)&&a.top===u.gaS(b)&&a.width===u.gah(b)&&a.height===u.gab(b)},
gG:function(a){return W.jM(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gab:function(a){return a.height},
gah:function(a){return a.width}}
W.hV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ak]},
$iu:1,
$au:function(){return[W.ak]},
$ap:function(){return[W.ak]},
$ij:1,
$aj:function(){return[W.ak]}}
W.dt.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iu:1,
$au:function(){return[W.v]},
$ap:function(){return[W.v]},
$ij:1,
$aj:function(){return[W.v]}}
W.i7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.at]},
$iu:1,
$au:function(){return[W.at]},
$ap:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.i8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ab]},
$iu:1,
$au:function(){return[W.ab]},
$ap:function(){return[W.ab]},
$ij:1,
$aj:function(){return[W.ab]}}
W.hP.prototype={
L:function(a,b){var u,t,s,r,q
for(u=this.gV(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.r)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gV:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.o])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aP:function(){return[P.o,P.o]}}
W.hS.prototype={
j:function(a,b){return this.a.getAttribute(b)},
gk:function(a){return this.gV(this).length}}
W.hT.prototype={}
W.hU.prototype={
$1:function(a){return this.a.$1(a)}}
W.bT.prototype={
cO:function(a){var u
if($.dh.a===0){for(u=0;u<262;++u)$.dh.m(0,C.J[u],W.lE())
for(u=0;u<12;++u)$.dh.m(0,C.k[u],W.lF())}},
ap:function(a){return $.kf().O(0,W.bv(a))},
a7:function(a,b,c){var u=$.dh.j(0,H.e(W.bv(a))+"::"+b)
if(u==null)u=$.dh.j(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iao:1}
W.B.prototype={
gN:function(a){return new W.cl(a,this.gk(a))}}
W.cC.prototype={
ap:function(a){return C.a.c2(this.a,new W.fm(a))},
a7:function(a,b,c){return C.a.c2(this.a,new W.fl(a,b,c))},
$iao:1}
W.fm.prototype={
$1:function(a){return a.ap(this.a)}}
W.fl.prototype={
$1:function(a){return a.a7(this.a,this.b,this.c)}}
W.dB.prototype={
cQ:function(a,b,c,d){var u,t,s
this.a.a_(0,c)
u=b.aT(0,new W.i5())
t=b.aT(0,new W.i6())
this.b.a_(0,u)
s=this.c
s.a_(0,C.L)
s.a_(0,t)},
ap:function(a){return this.a.O(0,W.bv(a))},
a7:function(a,b,c){var u=this,t=W.bv(a),s=u.c
if(s.O(0,H.e(t)+"::"+b))return u.d.eg(c)
else if(s.O(0,"*::"+b))return u.d.eg(c)
else{s=u.b
if(s.O(0,H.e(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.e(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$iao:1}
W.i5.prototype={
$1:function(a){return!C.a.O(C.k,a)}}
W.i6.prototype={
$1:function(a){return C.a.O(C.k,a)}}
W.ib.prototype={
a7:function(a,b,c){if(this.cH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.ic.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.i9.prototype={
ap:function(a){var u=J.L(a)
if(!!u.$ibN)return!1
u=!!u.$ii
if(u&&W.bv(a)==="foreignObject")return!1
if(u)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.b.aW(b,"on"))return!1
return this.ap(a)},
$iao:1}
W.cl.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.kh(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gB:function(a){return this.d}}
W.ao.prototype={}
W.i3.prototype={}
W.dS.prototype={
bA:function(a){new W.ih(this).$2(a,null)},
az:function(a,b){if(b==null)J.j9(a)
else b.removeChild(a)},
e3:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.km(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ag(r)}t="element unprintable"
try{t=J.U(a)}catch(r){H.ag(r)}try{s=W.bv(a)
this.e2(a,b,p,t,s,o,n)}catch(r){if(H.ag(r) instanceof P.a4)throw r
else{this.az(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
e2:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.az(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.ap(a)){p.az(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a7(a,"is",g)){p.az(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gV(f)
t=H.b(u.slice(0),[H.af(u,0)])
for(s=f.gV(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a7(a,J.kp(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.L(a).$ibP)p.bA(a.content)}}
W.ih.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.e3(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.az(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ag(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.d8.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dH.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.c_.prototype={}
W.c0.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
P.dR.prototype={$iaJ:1,
gc7:function(a){return this.a}}
P.im.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eF.prototype={
gaI:function(){var u=this.b,t=H.j0(u,"p",0)
return new H.bE(new H.bR(u,new P.eG(),[t]),new P.eH(),[t,W.J])},
m:function(a,b,c){var u=this.gaI()
J.kn(u.b.$1(J.e4(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aD(this.gaI().a)},
j:function(a,b){var u=this.gaI()
return u.b.$1(J.e4(u.a,b))},
gN:function(a){var u=P.iO(this.gaI(),!1,W.J)
return new J.Y(u,u.length)},
$am:function(){return[W.J]},
$ap:function(){return[W.J]},
$aj:function(){return[W.J]}}
P.eG.prototype={
$1:function(a){return!!J.L(a).$iJ}}
P.eH.prototype={
$1:function(a){return H.a3(a,"$iJ")}}
P.i_.prototype={
gco:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.q(t)
return u+t},
gc4:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.q(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.L(b)
if(!!u.$iW){t=q.a
if(t==u.gaP(b)){s=q.b
if(s==u.gaS(b)){r=q.c
if(typeof t!=="number")return t.E()
if(typeof r!=="number")return H.q(r)
if(t+r===u.gco(b)){t=q.d
if(typeof s!=="number")return s.E()
if(typeof t!=="number")return H.q(t)
u=s+t===u.gc4(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.bp(t),r=u.b,q=J.bp(r),p=u.c
if(typeof t!=="number")return t.E()
if(typeof p!=="number")return H.q(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.E()
if(typeof t!=="number")return H.q(t)
t=C.d.gG(r+t)
return P.l9(P.hX(P.hX(P.hX(P.hX(0,s),q),p),t))}}
P.W.prototype={
gaP:function(a){return this.a},
gaS:function(a){return this.b},
gah:function(a){return this.c},
gab:function(a){return this.d}}
P.aN.prototype={$iaN:1}
P.f_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aN]},
$ap:function(){return[P.aN]},
$ij:1,
$aj:function(){return[P.aN]}}
P.aR.prototype={$iaR:1}
P.fq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aR]},
$ap:function(){return[P.aR]},
$ij:1,
$aj:function(){return[P.aR]}}
P.fx.prototype={
gk:function(a){return a.length}}
P.bN.prototype={$ibN:1}
P.fX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.o]},
$ap:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
P.i.prototype={
gc5:function(a){return new P.eF(a,new W.R(a))},
a0:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ao])
p.push(W.jL(null))
p.push(W.jN())
p.push(new W.i9())
c=new W.dS(new W.cC(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).ep(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.R(s)
q=p.gai(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.aV.prototype={$iaV:1}
P.hd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aV]},
$ap:function(){return[P.aV]},
$ij:1,
$aj:function(){return[P.aV]}}
P.dk.prototype={}
P.dl.prototype={}
P.dw.prototype={}
P.dx.prototype={}
P.dI.prototype={}
P.dJ.prototype={}
P.dP.prototype={}
P.dQ.prototype={}
P.e9.prototype={
gk:function(a){return a.length}}
P.ea.prototype={
j:function(a,b){return P.ax(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ax(u.value[1]))}},
gV:function(a){var u=H.b([],[P.o])
this.L(a,new P.eb(u))
return u},
gk:function(a){return a.size},
$aP:function(){return[P.o,null]}}
P.eb.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ec.prototype={
gk:function(a){return a.length}}
P.b0.prototype={}
P.fr.prototype={
gk:function(a){return a.length}}
P.d7.prototype={}
P.cJ.prototype={
f0:function(a,b,c,d,e,f,g){var u,t=J.L(g)
if(!!t.$iaJ)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lu(g))
return}if(!!t.$ibz)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kq("Incorrect number or type of arguments"))}}
P.fS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return P.ax(a.item(b))},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[[P.bD,,,]]},
$ap:function(){return[[P.bD,,,]]},
$ij:1,
$aj:function(){return[[P.bD,,,]]}}
P.dE.prototype={}
P.dF.prototype={}
K.ah.prototype={
ac:function(a,b){return!0},
h:function(a){return"all"}}
K.cm.prototype={
ac:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)if(u[s].ac(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.aP.prototype={}
K.S.prototype={
ac:function(a,b){return!this.cD(0,b)},
h:function(a){return"!["+this.bD(0)+"]"}}
K.fy.prototype={
ac:function(a,b){if(typeof b!=="number")return H.q(b)
return this.a<=b&&this.b>=b},
h:function(a){var u=H.iP(this.a),t=H.iP(this.b)
return u+".."+t}}
K.fH.prototype={
cK:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.K("May not create a Set with zero characters."))
u=P.y
t=new H.a9([u,P.b_])
for(s=new H.aO(a,a.gk(a));s.q();)t.m(0,s.d,!0)
r=P.iO(new H.b8(t,[u]),!0,u)
if(!!r.immutable$list)H.M(P.t("sort"))
H.kZ(r,J.lf())
this.a=r},
ac:function(a,b){return C.a.O(this.a,b)},
h:function(a){return P.iR(this.a)}}
L.cN.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.cX(this.a.i(0,b))
r.a=H.b([],[K.aP])
r.c=!1
this.c.push(r)
return r},
ex:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.ac(0,a))return r}return},
h:function(a){return this.b},
bX:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.O(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.b8(n,[H.af(n,0)]),n=n.gN(n);n.q();){t=n.d
o+="\n"
s=p.d.c.j(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.O(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.r)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.cU.prototype={
h:function(a){var u=H.j6(this.b,"\n","\\n"),t=H.j6(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cV.prototype={
af:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.r)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
L.h8.prototype={
i:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new L.cN(this,b)
u.c=H.b([],[L.cX])
this.a.m(0,b,u)}return u},
J:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new L.cV(a)
u=P.o
t.c=new H.a9([u,u])
this.b.m(0,a,t)}return t},
bx:function(a){return this.f6(a)},
f6:function(a){var u=this
return P.lh(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$bx(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.y]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.eT(c,0)
else{if(!t.q()){s=3
break}l=t.d}d.push(l);++o
k=g.ex(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.iR(d)
throw H.c(P.K("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.M(P.t("removeRange"))
P.iQ(0,m,d.length)
d.splice(0,m-0)
C.a.a_(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.O(0,p.a)?7:8
break
case 7:s=9
return p
case 9:case 8:o=n
p=null
m=0
s=5
break
case 6:if(!k.c)e.push(l)
g=k.b
if(g.d!=null){j=P.iR(e)
i=g.d
h=i.c.j(0,j)
p=new L.cU(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.O(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.l7()
case 1:return P.l8(q)}}},L.cU)},
h:function(a){var u,t=new P.aU(""),s=this.d
if(s!=null)t.a=s.bX()+"\n"
for(s=this.a,s=s.gf9(s),s=new H.cv(J.aC(s.a),s.b);s.q();){u=s.a
if(u!=this.d)t.a+=u.bX()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.cX.prototype={
h:function(a){return this.b.b+": "+this.bD(0)}}
O.b3.prototype={
bE:function(a){this.a=H.b([],[a])
this.c=this.b=null},
aU:function(a,b){this.b=null
this.c=a},
dP:function(a){return!0},
cN:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.Y(u,u.length)},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.j0(s,"b3",0)]
if(s.dP(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cN(t,H.b([b],r))}},
$ij:1}
O.bG.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
aj:function(){var u=this.b
if(u!=null)u.D(null)},
gad:function(a){var u=this.a
if(u.length>0)return C.a.gaO(u)
else return V.cx()},
cl:function(a){var u=this.a
if(a==null)u.push(V.cx())
else u.push(a)
this.aj()},
bv:function(){var u=this.a
if(u.length>0){u.pop()
this.aj()}}}
E.ed.prototype={}
E.aI.prototype={
sbB:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().R(0,s.gcg())
u=s.c
if(u!=null)u.gt().n(0,s.gcg())
t=new D.w("shape",r,s.c)
t.b=!0
s.ae(t)}},
saC:function(a){var u,t,s=this
if(!J.H(s.r,a)){u=s.r
if(u!=null)u.gt().R(0,s.gce())
if(a!=null)a.gt().n(0,s.gce())
s.r=a
t=new D.w("mover",u,a)
t.b=!0
s.ae(t)}},
au:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.av(0,b,s):null
if(!J.H(q,s.x)){u=s.x
s.x=q
t=new D.w("matrix",u,q)
t.b=!0
s.ae(t)}for(r=s.y.a,r=new J.Y(r,r.length);r.q();)r.d.au(0,b)},
at:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gad(s))
else s.a.push(r.u(0,s.gad(s)))
s.aj()
a.cm(t.f)
s=a.dy
u=(s&&C.a).gaO(s)
if(u!=null&&t.d!=null)u.eV(a,t)
for(s=t.y.a,s=new J.Y(s,s.length);s.q();)s.d.at(a)
a.ck()
a.dx.bv()},
ae:function(a){var u=this.z
if(u!=null)u.D(a)},
W:function(){return this.ae(null)},
ci:function(a){this.e=null
this.ae(a)},
eK:function(){return this.ci(null)},
cf:function(a){this.ae(a)},
eJ:function(){return this.cf(null)},
cd:function(a){this.ae(a)},
eG:function(){return this.cd(null)},
eF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcc(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
eI:function(a,b){var u,t
for(u=b.gN(b),t=this.gcc();u.q();)u.gB(u).gt().R(0,t)
this.W()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fz.prototype={
cJ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a_(Date.now(),!1)
s.y=0
s.cx=s.ch=s.z=null
u=new O.bG()
t=[V.bF]
u.a=H.b([],t)
u.gt().n(0,new E.fA(s))
s.cy=u
u=new O.bG()
u.a=H.b([],t)
u.gt().n(0,new E.fB(s))
s.db=u
u=new O.bG()
u.a=H.b([],t)
u.gt().n(0,new E.fC(s))
s.dx=u
u=H.b([],[O.cQ])
s.dy=u
u.push(null)
s.fr=new H.a9([P.o,A.cK])},
cm:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaO(u):a)},
ck:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fA.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fB.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.z=null}}
E.fC.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cS.prototype={
bH:function(a){this.cn()},
bG:function(){return this.bH(null)},
gez:function(){var u,t=this,s=Date.now(),r=C.d.a6(P.jf(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a_(s,!1)
return u/r},
bT:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.q(r)
u=C.c.bo(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.c.bo(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jC(C.i,s.geX())}},
cn:function(){if(!this.cx){this.cx=!0
var u=window
C.u.d6(u)
C.u.e0(u,W.jR(new E.h6(this),P.X))}},
eU:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bT()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a_(r,!1)
s.y=P.jf(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aj()
r=s.db
C.a.sk(r.a,0)
r.aj()
r=s.dx
C.a.sk(r.a,0)
r.aj()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.at(p.e)}s=p.Q
if(s!=null)s.D(null)}catch(q){u=H.ag(q)
t=H.j1(q)
P.j5("Error: "+H.e(u))
P.j5("Stack: "+H.e(t))
throw H.c(u)}}}
E.h6.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.eU()}}}
Z.d5.prototype={}
Z.ca.prototype={
bh:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.K('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.hJ.prototype={}
Z.cb.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bh:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bh(a)},
f7:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
at:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.U(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")}}
Z.b6.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bM(this.c))+"'")+"]"}}
Z.aX.prototype={
gbC:function(a){var u=this.a,t=(u&$.aA().a)!==0?3:0
if((u&$.az().a)!==0)t+=3
if((u&$.ay().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.aB().a)!==0)t+=3
if((u&$.c6().a)!==0)t+=3
if((u&$.c7().a)!==0)t+=4
if((u&$.bo().a)!==0)++t
return(u&$.bm().a)!==0?t+4:t},
eh:function(a){var u,t=$.aA(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.az()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ay()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0)if(u===a)return t
return $.ke()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.aA().a)!==0)u.push("Pos")
if((t&$.az().a)!==0)u.push("Norm")
if((t&$.ay().a)!==0)u.push("Binm")
if((t&$.bn().a)!==0)u.push("Txt2D")
if((t&$.aB().a)!==0)u.push("TxtCube")
if((t&$.c6().a)!==0)u.push("Clr3")
if((t&$.c7().a)!==0)u.push("Clr4")
if((t&$.bo().a)!==0)u.push("Weight")
if((t&$.bm().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eg.prototype={}
D.bw.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.O]}]):u).push(b)},
R:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.a
u=(s&&C.a).R(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.b
u=(s&&C.a).R(s,b)||u}return u},
D:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.O()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.L(P.iO(u,!0,{func:1,ret:-1,args:[D.O]}),new D.eB(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.O]}])
C.a.L(u,new D.eC(q))}return!0},
ev:function(){return this.D(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}}}
D.eB.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eC.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.O.prototype={}
D.cn.prototype={}
D.co.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cc.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cc))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cs.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cs))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eZ.prototype={
eP:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
eL:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}}
X.cu.prototype={}
X.f4.prototype={
ax:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a1(o.a+n*m,o.b+u*t)
t=q.a.gar()
r=new X.an(a,V.aS(),q.x,t,s)
r.b=!0
q.z=new P.a_(p,!1)
q.x=s
return r},
bu:function(a,b){this.r=a.a
return!1},
aE:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cA()
if(typeof u!=="number")return u.cu()
this.r=(u&~t)>>>0
return!1},
aD:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.ax(a,b))
return!0},
eQ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gar()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bH(new V.x(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
dE:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cu(c,r.a.gar(),b)
s.b=!0
t.D(s)
r.y=new P.a_(u,!1)
r.x=V.aS()}}
X.a0.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a0))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.an.prototype={}
X.fe.prototype={
b4:function(a,b,c){var u=this,t=new P.a_(Date.now(),!1),s=u.a.gar(),r=new X.an(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bu:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.b4(a,b,!0))
return!0},
aE:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.cA()
if(typeof t!=="number")return t.cu()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.b4(a,b,!0))
return!0},
aD:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b4(a,b,!1))
return!0},
eR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gar()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bH(new V.x(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gc8:function(){var u=this.b
return u==null?this.b=D.E():u},
gct:function(){var u=this.c
return u==null?this.c=D.E():u},
gcb:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.bH.prototype={}
X.fw.prototype={}
X.cW.prototype={}
X.ha.prototype={
ax:function(a,b){var u=this,t=new P.a_(Date.now(),!1),s=a.length>0?a[0]:V.aS(),r=u.a.gar(),q=new X.cW(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
eO:function(a){var u=this.b
if(u==null)return!1
u.D(this.ax(a,!0))
return!0},
eM:function(a){var u=this.c
if(u==null)return!1
u.D(this.ax(a,!0))
return!0},
eN:function(a){var u=this.d
if(u==null)return!1
u.D(this.ax(a,!1))
return!0}}
X.d0.prototype={
gar:function(){var u=this.a,t=C.f.gc6(u).c
t.toString
u=C.f.gc6(u).d
u.toString
return V.jw(0,0,t,u)},
bP:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cs(u,new X.a0(t,a.altKey,a.shiftKey))},
ao:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a0(t,a.altKey,a.shiftKey)},
bg:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a0(t,a.altKey,a.shiftKey)},
aa:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.C()
u=t.top
if(typeof r!=="number")return r.C()
return new V.a1(s-q,r-u)},
ay:function(a){return new V.x(a.movementX,a.movementY)},
be:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a1])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=C.c.a3(r.pageX)
C.c.a3(r.pageY)
p=o.left
C.c.a3(r.pageX)
n.push(new V.a1(q-p,C.c.a3(r.pageY)-o.top))}return n},
a9:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cc(u,new X.a0(t,a.altKey,a.shiftKey))},
b5:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.C()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.C()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dz:function(a){this.f=!0},
dj:function(a){this.f=!1},
dr:function(a){if(this.f&&this.b5(a))a.preventDefault()},
dD:function(a){var u
if(!this.f)return
u=this.bP(a)
this.b.eP(u)},
dB:function(a){var u
if(!this.f)return
u=this.bP(a)
this.b.eL(u)},
dG:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ao(a)
if(r.x){u=r.a9(a)
t=r.ay(a)
if(r.d.bu(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a9(a)
s=r.aa(a)
if(r.c.bu(u,s))a.preventDefault()},
dK:function(a){var u,t,s,r=this
r.ao(a)
u=r.a9(a)
if(r.x){t=r.ay(a)
if(r.d.aE(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aE(u,s))a.preventDefault()},
dv:function(a){var u,t,s,r=this
if(!r.b5(a)){r.ao(a)
u=r.a9(a)
if(r.x){t=r.ay(a)
if(r.d.aE(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aE(u,s))a.preventDefault()}},
dI:function(a){var u,t,s,r=this
r.ao(a)
u=r.a9(a)
if(r.x){t=r.ay(a)
if(r.d.aD(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aD(u,s))a.preventDefault()},
dt:function(a){var u,t,s,r=this
if(!r.b5(a)){r.ao(a)
u=r.a9(a)
if(r.x){t=r.ay(a)
if(r.d.aD(u,t))a.preventDefault()
return}if(r.r)return
s=r.aa(a)
if(r.c.aD(u,s))a.preventDefault()}},
dM:function(a){var u,t,s=this
s.ao(a)
u=new V.x((a&&C.t).ger(a),C.t.ges(a)).w(0,180)
if(s.x){if(s.d.eQ(u))a.preventDefault()
return}if(s.r)return
t=s.aa(a)
if(s.c.eR(u,t))a.preventDefault()},
dO:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a9(s.y)
t=s.aa(s.y)
s.d.dE(u,t,r)}},
dX:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bg(a)
u=t.be(a)
if(t.e.eO(u))a.preventDefault()},
dT:function(a){var u
this.bg(a)
u=this.be(a)
if(this.e.eM(u))a.preventDefault()},
dV:function(a){var u
this.bg(a)
u=this.be(a)
if(this.e.eN(u))a.preventDefault()}}
V.aF.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.eA.prototype={}
V.cw.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cw))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.F],o=V.bl(H.b([q.a,q.d,q.r],p),3,0),n=V.bl(H.b([q.b,q.e,q.x],p),3,0),m=V.bl(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.f(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.f(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.f(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.f(o,1)
r=" "+o[1]+", "
if(1>=t)return H.f(n,1)
r=r+n[1]+", "
if(1>=s)return H.f(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.f(o,2)
p=" "+o[2]+", "
if(2>=t)return H.f(n,2)
p=p+n[2]+", "
if(2>=s)return H.f(m,2)
return r+(p+m[2]+"]")}}
V.bF.prototype={
bw:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.F])
return t},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.al(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bF))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
h:function(a){return this.I()},
v:function(a){var u,t,s,r,q,p=this,o=[P.F],n=V.bl(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bl(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bl(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bl(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.f(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.f(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.f(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.f(n,1)
q=q+n[1]+", "
if(1>=t)return H.f(m,1)
q=q+m[1]+", "
if(1>=s)return H.f(l,1)
q=q+l[1]+", "
if(1>=r)return H.f(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.f(n,2)
u=u+n[2]+", "
if(2>=t)return H.f(m,2)
u=u+m[2]+", "
if(2>=s)return H.f(l,2)
u=u+l[2]+", "
if(2>=r)return H.f(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.f(n,3)
q=q+n[3]+", "
if(3>=t)return H.f(m,3)
q=q+m[3]+", "
if(3>=s)return H.f(l,3)
q=q+l[3]+", "
if(3>=r)return H.f(k,3)
return u+(q+k[3]+"]")},
I:function(){return this.v("")}}
V.a1.prototype={
C:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.aT.prototype={
C:function(a,b){return new V.aT(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aT))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.cG.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cG))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.cI.prototype={
gZ:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cI))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.x.prototype={
bp:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.x(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.jG
return u==null?$.jG=new V.x(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.x(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.I.prototype={
bp:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bq:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aB:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.I(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.A().a)return V.d4()
return new V.I(this.a/b,this.b/b,this.c/b)},
ca:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.ei.prototype={
b_:function(a){var u=V.lW(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
K:function(a){var u=this.y
if(u!=null)u.D(a)},
sby:function(a,b){},
sbr:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.b_(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.K(s)}},
sbt:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.b_(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.K(s)}},
sY:function(a,b){var u,t=this
b=t.b_(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.K(u)}},
sbs:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.K(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.K(t)}},
sbn:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.K(u)}},
au:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.ce.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
av:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
return J.H(this.a,b.a)},
h:function(a){return"Constant: "+this.a.v("          ")}}
U.bx.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
K:function(a){var u=this.e
if(u!=null)u.D(a)},
U:function(){return this.K(null)},
dh:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gan(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.cn()
u.b=!0
this.K(u)},
dR:function(a,b){var u,t
for(u=b.gN(b),t=this.gan();u.q();)u.gB(u).gt().R(0,t)
u=new D.co()
u.b=!0
this.K(u)},
av:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.X()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Y(r,r.length),u=null;r.q();){q=r.d
if(q!=null){t=q.av(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.cx():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bx))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.H(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.V]},
$ab3:function(){return[U.V]},
$iV:1}
U.V.prototype={}
U.d1.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.E():u},
K:function(a){var u=this.cy
if(u!=null)u.D(a)},
U:function(){return this.K(null)},
aA:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gc8().n(0,u.gb6())
u.a.c.gcb().n(0,u.gb8())
u.a.c.gct().n(0,u.gba())
return!0},
b7:function(a){var u=this
if(!J.H(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
b9:function(a){var u,t,s,r,q,p,o,n=this
H.a3(a,"$ian")
if(!n.y)return
if(n.x){u=a.d.C(0,a.y)
u=new V.x(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.C(0,a.y)
u=new V.x(t.a,t.b).u(0,2).w(0,u.gZ())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=new V.x(s.a,s.b).u(0,2).w(0,u.gZ())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
n.b.sP(0)
t=t.C(0,a.z)
n.Q=new V.x(t.a,t.b).u(0,2).w(0,u.gZ())}n.U()},
bb:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sP(t*10*s)
r.U()}},
av:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.X()
if(q<p){r.ch=p
u=b.y
r.b.au(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.al(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iV:1}
U.d2.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.E():u},
K:function(a){var u=this.fx
if(u!=null)u.D(a)},
U:function(){return this.K(null)},
aA:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gc8().n(0,s.gb6())
s.a.c.gcb().n(0,s.gb8())
s.a.c.gct().n(0,s.gba())
u=s.a.d
t=u.f
u=t==null?u.f=D.E():t
u.n(0,s.gd8())
u=s.a.d
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.gda())
u=s.a.e
t=u.b
u=t==null?u.b=D.E():t
u.n(0,s.gec())
u=s.a.e
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.gea())
u=s.a.e
t=u.c
u=t==null?u.c=D.E():t
u.n(0,s.ge8())
return!0},
a5:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.x(u,t)},
b7:function(a){var u=this
H.a3(a,"$ian")
if(!J.H(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
b9:function(a){var u,t,s,r,q,p,o,n=this
H.a3(a,"$ian")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.x(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.a5(new V.x(t.a,t.b).u(0,2).w(0,u.gZ()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.a5(new V.x(s.a,s.b).u(0,2).w(0,u.gZ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.C(0,a.z)
n.dx=n.a5(new V.x(t.a,t.b).u(0,2).w(0,u.gZ()))}n.U()},
bb:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sP(-t*10*u)
r.U()}},
d9:function(a){var u=this
if(H.a3(a,"$icu").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dc:function(a){var u,t,s,r,q,p,o,n=this
H.a3(a,"$ian")
if(!J.H(n.d,a.x.b))return
u=a.c
t=a.d
s=t.C(0,a.y)
r=n.a5(new V.x(s.a,s.b).u(0,2).w(0,u.gZ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.C(0,a.z)
n.dx=n.a5(new V.x(t.a,t.b).u(0,2).w(0,u.gZ()))
n.U()},
ed:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eb:function(a){var u,t,s,r,q,p,o,n=this
H.a3(a,"$icW")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.x(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.a5(new V.x(t.a,t.b).u(0,2).w(0,u.gZ()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.a5(new V.x(s.a,s.b).u(0,2).w(0,u.gZ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.C(0,a.z)
n.dx=n.a5(new V.x(t.a,t.b).u(0,2).w(0,u.gZ()))}n.U()},
e9:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sP(-t*10*u)
r.U()}},
av:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.X()
if(q<p){r.dy=p
u=b.y
r.c.au(0,u)
r.b.au(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.al(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.al(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iV:1}
U.d3.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.E():u},
K:function(a){var u=this.r
if(u!=null)u.D(a)},
aA:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.E():t
t=r.gde()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.E():s).n(0,t)
return!0},
df:function(a){var u,t,s,r,q=this
if(!J.H(q.b,q.a.b.c))return
H.a3(a,"$ibH")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.w("zoom",u,r)
u.b=!0
q.K(u)}},
av:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.al(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iV:1}
M.ci.prototype={
a8:function(a){var u=this.y
if(u!=null)u.D(a)},
cP:function(){return this.a8(null)},
dl:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga4(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.cn()
u.b=!0
this.a8(u)},
dn:function(a,b){var u,t
for(u=b.gN(b),t=this.ga4();u.q();)u.gB(u).gt().R(0,t)
u=new D.co()
u.b=!0
this.a8(u)},
scq:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().R(0,t.ga4())
u=t.c
t.c=b
b.gt().n(0,t.ga4())
s=new D.w("target",u,t.c)
s.b=!0
t.a8(s)}},
scr:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().R(0,t.ga4())
u=t.d
t.d=a
if(a!=null)a.gt().n(0,t.ga4())
s=new D.w("technique",u,t.d)
s.b=!0
t.a8(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
at:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.cm(a1.d)
u=a1.c
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.q(s)
o=C.c.a3(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.c.a3(p*r)
p=C.c.a3(q.c*s)
a2.c=p
q=C.c.a3(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.al(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.cl(i)
t=$.jr
if(t==null){t=$.jt
if(t==null)t=$.jt=new V.aT(0,0,0)
q=$.jI
if(q==null)q=$.jI=new V.I(0,1,0)
p=$.jH
if(p==null)p=$.jH=new V.I(0,0,-1)
h=p.w(0,Math.sqrt(p.F(p)))
q=q.aB(h)
g=q.w(0,Math.sqrt(q.F(q)))
f=h.aB(g)
e=new V.I(t.a,t.b,t.c)
d=g.M(0).F(e)
c=f.M(0).F(e)
b=h.M(0).F(e)
t=V.al(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jr=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.u(0,a)}a2.db.cl(a)
for(u=a1.e.a,u=new J.Y(u,u.length);u.q();)u.d.au(0,a2)
for(u=a1.e.a,u=new J.Y(u,u.length);u.q();)u.d.at(a2)
a1.b.toString
a2.cy.bv()
a2.db.bv()
a1.c.toString
a2.ck()}}
A.c8.prototype={}
A.e8.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ew:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.bt.prototype={
gf8:function(a){return 0|(this.c?4:0)},
h:function(a){return""+(0|(this.c?4:0))},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.bt))return!1
u=this.c===b.c
return u}}
A.fn.prototype={}
A.fo.prototype={
h:function(a){return this.e}}
A.cK.prototype={
cL:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bQ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.K("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
e4:function(){var u,t,s,r=this,q=H.b([],[A.c8]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c8(p,t.name,s))}r.x=new A.e8(q)},
e6:function(){var u,t,s,r=this,q=H.b([],[A.cY]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eq(t.type,t.size,t.name,s))}r.y=new A.hp(q)},
al:function(a,b,c){var u=this.a
if(a===1)return new A.hh(u,b,c)
else return A.iT(u,this.r,b,a,c)},
d3:function(a,b,c){var u=this.a
if(a===1)return new A.hs(u,b,c)
else return A.iT(u,this.r,b,a,c)},
d4:function(a,b,c){var u=this.a
if(a===1)return new A.cZ(u,b,c)
else return A.iT(u,this.r,b,a,c)},
aK:function(a,b){return new P.de(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
eq:function(a,b,c,d){var u=this
switch(a){case 5120:return u.al(b,c,d)
case 5121:return u.al(b,c,d)
case 5122:return u.al(b,c,d)
case 5123:return u.al(b,c,d)
case 5124:return u.al(b,c,d)
case 5125:return u.al(b,c,d)
case 5126:return new A.hg(u.a,c,d)
case 35664:return new A.hj(u.a,c,d)
case 35665:return new A.hl(u.a,c,d)
case 35666:return new A.hn(u.a,c,d)
case 35667:return new A.hk(u.a,c,d)
case 35668:return new A.hm(u.a,c,d)
case 35669:return new A.ho(u.a,c,d)
case 35674:return new A.hq(u.a,c,d)
case 35675:return new A.hr(u.a,c,d)
case 35676:return new A.bd(u.a,c,d)
case 35678:return u.d3(b,c,d)
case 35680:return u.d4(b,c,d)
case 35670:throw H.c(u.aK("BOOL",c))
case 35671:throw H.c(u.aK("BOOL_VEC2",c))
case 35672:throw H.c(u.aK("BOOL_VEC3",c))
case 35673:throw H.c(u.aK("BOOL_VEC4",c))
default:throw H.c(P.K("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.cY.prototype={}
A.hp.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
aR:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.K("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.hh.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hk.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hm.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ho.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hi.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.hg.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hj.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.hl.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.hn.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hq.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.hr.prototype={
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.bd.prototype={
aV:function(a){var u=new Float32Array(H.iW(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.hs.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.cZ.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.ij.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bq(s.b,b).bq(s.d.bq(s.c,b),c)
s=new V.aT(r.a,r.b,r.c)
if(!J.H(a.f,s)){a.f=s
s=a.a
if(s!=null)s.W()}a.sf1(r.w(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
u=new V.cG(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.H(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.W()}}}
F.b5.prototype={
cY:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d4()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.ca())return
return s.w(0,Math.sqrt(s.F(s)))},
d_:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.C(0,q)
r=new V.I(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.F(r)))
r=t.C(0,q)
r=new V.I(r.a,r.b,r.c)
r=s.aB(r.w(0,Math.sqrt(r.F(r))))
return r.w(0,Math.sqrt(r.F(r)))},
bk:function(){var u,t=this
if(t.d!=null)return!0
u=t.cY()
if(u==null){u=t.d_()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
cX:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d4()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.ca())return
return s.w(0,Math.sqrt(s.F(s)))},
cZ:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.C(0,g)
l=new V.I(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.M(0)}else{p=(l-u.b)/r
l=d.C(0,g)
l=new V.aT(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).C(0,j)
l=new V.I(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.M(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.F(l)))
l=o.aB(q)
l=l.w(0,Math.sqrt(l.F(l))).aB(o)
q=l.w(0,Math.sqrt(l.F(l)))}return q},
bi:function(){var u,t=this
if(t.e!=null)return!0
u=t.cX()
if(u==null){u=t.cZ()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a2(J.U(s.e),0)+", "+C.b.a2(J.U(t.b.e),0)+", "+C.b.a2(J.U(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
I:function(){return this.v("")}}
F.bB.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a2(J.U(u.e),0)+", "+C.b.a2(J.U(this.b.e),0)},
I:function(){return this.v("")}}
F.bK.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a2(J.U(u.e),0)},
I:function(){return this.v("")}}
F.fI.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
eD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.S()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){r=g[s]
h.a.n(0,r.eo())}h.a.S()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.bK()
if(n.a==null)H.M(P.K("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.D(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
p=new F.bB()
o=l.a
if(o==null)H.M(P.K("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.M(P.K("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.D(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.r)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.cj(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
ek:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=34962,a0=b.a.c.length,a1=a4.a,a2=(a1&$.aA().a)!==0?1:0
if((a1&$.az().a)!==0)++a2
if((a1&$.ay().a)!==0)++a2
if((a1&$.bn().a)!==0)++a2
if((a1&$.aB().a)!==0)++a2
if((a1&$.c6().a)!==0)++a2
if((a1&$.c7().a)!==0)++a2
if((a1&$.bo().a)!==0)++a2
if((a1&$.bm().a)!==0)++a2
u=a4.gbC(a4)
t=u*4
a1=new Array(a0*u)
a1.fixed$length=Array
s=H.b(a1,[P.F])
a1=new Array(a2)
a1.fixed$length=Array
r=H.b(a1,[Z.ca])
for(a1=s.length,q=r.length,p=0,o=0;o<a2;++o){n=a4.eh(o)
m=n.gbC(n)
if(o>=q)return H.f(r,o)
r[o]=new Z.ca(n,m,p*4,t)
for(l=0;l<a0;++l){k=b.a.c
if(l>=k.length)return H.f(k,l)
j=k[l].eC(n)
i=p+l*u
for(k=j.length,h=0;h<k;++h){g=j[h]
if(i<0||i>=a1)return H.f(s,i)
s[i]=g;++i}}p+=m}a1=a3.a
f=a1.createBuffer()
a1.bindBuffer(a,f)
a1.bufferData(a,new Float32Array(H.iW(s)),35044)
a1.bindBuffer(a,null)
e=new Z.cb(new Z.d5(a,f),r,a4)
e.b=H.b([],[Z.b6])
if(b.b.b.length!==0){d=H.b([],[P.y])
for(o=0;q=b.b.b,o<q.length;++o){q=q[o].a
q.a.a.S()
d.push(q.e)}c=Z.iU(a1,34963,d)
e.b.push(new Z.b6(0,d.length,c))}if(b.c.b.length!==0){d=H.b([],[P.y])
for(o=0;q=b.c.b,o<q.length;++o){q=q[o].a
q.a.a.S()
d.push(q.e)
q=b.c.b
if(o>=q.length)return H.f(q,o)
q=q[o].b
q.a.a.S()
d.push(q.e)}c=Z.iU(a1,34963,d)
e.b.push(new Z.b6(1,d.length,c))}if(b.d.b.length!==0){d=H.b([],[P.y])
for(o=0;q=b.d.b,o<q.length;++o){q=q[o].a
q.a.a.S()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.f(q,o)
q=q[o].b
q.a.a.S()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.f(q,o)
q=q[o].c
q.a.a.S()
d.push(q.e)}c=Z.iU(a1,34963,d)
e.b.push(new Z.b6(4,d.length,c))}return e},
h:function(a){var u=this,t="   ",s=H.b([],[P.o])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.v(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.v(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.v(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.v(t))}return C.a.l(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.D(null)}}
F.fJ.prototype={
ef:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b5])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.f(c,s)
m=c[s];++s
if(s>=n)return H.f(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.f(c,k)
j=c[k]
if(t<0||t>=n)return H.f(c,t)
i=c[t]
n=u.a
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.cj(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cj(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cj(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cj(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bk())s=!1
return s},
bj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bi())s=!1
return s},
h:function(a){return this.I()},
v:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(a))
return C.a.l(r,"\n")},
I:function(){return this.v("")}}
F.fK.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.I()},
v:function(a){var u,t,s=H.b([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].v(a+(""+u+". ")))}return C.a.l(s,"\n")},
I:function(){return this.v("")}}
F.fL.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.I()},
v:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(a))
return C.a.l(r,"\n")},
I:function(){return this.v("")}}
F.bQ.prototype={
bm:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jK(u.cx,r,o,t,s,q,p,a,n)},
eo:function(){return this.bm(null)},
sf1:function(a){var u
if(!J.H(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
eC:function(a){var u,t,s=this
if(a.p(0,$.aA())){u=s.f
t=[P.F]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.az())){u=s.r
t=[P.F]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ay())){u=s.x
t=[P.F]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.bn())){u=s.y
t=[P.F]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.aB())){u=s.z
t=[P.F]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.c6())){u=s.Q
t=[P.F]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.c7())){u=s.Q
t=[P.F]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bo()))return H.b([s.ch],[P.F])
else if(a.p(0,$.bm())){u=s.cx
t=[P.F]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.F])},
bk:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d4()
t.d.L(0,new F.hH(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bi:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d4()
t.d.L(0,new F.hG(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.b.a2(J.U(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.G(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
I:function(){return this.v("")}}
F.hH.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.hG.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.hA.prototype={
S:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.K("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
c0:function(a,b){var u=null,t=F.jK(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gk:function(a){return this.c.length},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bk()
return!0},
bj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bi()
return!0},
el:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.H(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
h:function(a){return this.I()},
v:function(a){var u,t,s,r
this.S()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)u.push(t[r].v(a))
return C.a.l(u,"\n")},
I:function(){return this.v("")}}
F.hB.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
L:function(a,b){var u=this
C.a.L(u.b,b)
C.a.L(u.c,new F.hC(u,b))
C.a.L(u.d,new F.hD(u,b))},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(""))
return C.a.l(r,"\n")}}
F.hC.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.hD.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.hE.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(""))
return C.a.l(r,"\n")}}
F.hF.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].v(""))
return C.a.l(r,"\n")}}
O.cD.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.E():u},
aZ:function(a){var u=this.r
if(u!=null)u.D(a)},
bJ:function(){return this.aZ(null)},
bU:function(a){},
bV:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gt().R(0,t.gbI())
u=t.f
t.f=a
if(a!=null)a.gt().n(0,t.gbI())
s=new D.w("bumpyTextureCube",u,t.f)
s.b=!0
t.aZ(s)}},
cW:function(a,b){if(b!=null)if(!C.a.O(a,b)){b.a=a.length
a.push(b)}},
eV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g="varying vec3 txtCube;\n",f=h.a
if(f==null){f=A.jp(h.d)
u=f.e
t=a.fr.j(0,u)
if(t==null){s=a.a
t=new A.fn(s,u)
t.cL(s,u)
t.z=f
r=f.d
q=(r?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat4 txtCubeMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n")+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
p=f.b
if(p)q+="attribute vec3 binmAttr;\n"
q=(r?q+"attribute vec3 txtCubeAttr;\n":q)+"\nvarying vec3 normalVec;\n"
if(p)q+="varying vec3 binormalVec;\n"
q=(r?q+g:q)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(p)q+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
q=(r?q+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":q)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=q.charCodeAt(0)==0?q:q
q=p?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
q=(r?q+g:q)+"\n"
if(f.a.c)q+="uniform samplerCube bumpTxt;\n"
q+="\nvec3 normal()\n{\n"
f=f.a
p=f.c
if(!p||!1)q+="   return normalize(normalVec);\n"
else q+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
q+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
t.c=o
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bQ(o,35633)
t.f=t.bQ(t.d,35632)
q=s.createProgram()
t.r=q
s.attachShader(q,t.e)
s.attachShader(t.r,t.f)
s.linkProgram(t.r)
if(!s.getProgramParameter(t.r,35714)){n=s.getProgramInfoLog(t.r)
s.deleteProgram(t.r)
H.M(P.K("Failed to link shader: "+H.e(n)))}t.e4()
t.e6()
t.Q=t.x.j(0,"posAttr")
t.cx=t.x.j(0,"normAttr")
t.ch=t.x.j(0,"binmAttr")
t.cy=t.x.j(0,"txt2DAttr")
t.db=t.x.j(0,"txtCubeAttr")
t.dx=H.a3(t.y.aR(0,"viewObjMat"),"$ibd")
t.dy=H.a3(t.y.aR(0,"projViewObjMat"),"$ibd")
if(r)t.fx=H.a3(t.y.aR(0,"txtCubeMat"),"$ibd")
if(f.c)t.go=H.a3(t.y.aR(0,"bumpTxt"),"$icZ")
if(u.length===0)H.M(P.K("May not cache a shader with no name."))
if(a.fr.em(0,u))H.M(P.K('Shader cache already contains a shader by the name "'+u+'".'))
a.fr.m(0,u,t)}f=h.a=t
b.e=null}m=f.z
l=m.f
f=b.e
if(!(f instanceof Z.cb))f=b.e=null
if(f==null||!f.d.p(0,l)){b.d.aq()
f=m.b
if(f){u=b.d
s=u.e
if(s!=null)++s.d
u.d.bj()
u.a.bj()
u=u.e
if(u!=null)u.ag(0)}u=m.d
if(u){s=b.d
r=s.e
if(r!=null)++r.d
s.a.el()
s=s.e
if(s!=null)s.ag(0)}k=b.d.ek(new Z.hJ(a.a),l)
k.aM($.aA()).e=h.a.Q.c
k.aM($.az()).e=h.a.cx.c
if(f)k.aM($.ay()).e=h.a.ch.c
if(u)k.aM($.aB()).e=h.a.db.c
b.e=k}j=H.b([],[T.cR])
f=h.a
u=a.a
u.useProgram(f.r)
f.x.ew()
f=h.a
s=a.cx
if(s==null){s=a.db
s=s.gad(s)
r=a.dx
r=a.cx=s.u(0,r.gad(r))
s=r}f=f.dx
f.toString
f.aV(s.bw(0,!0))
s=h.a
f=a.ch
if(f==null){f=a.z
if(f==null){f=a.cy
f=f.gad(f)
r=a.db
r=a.z=f.u(0,r.gad(r))
f=r}r=a.dx
r=a.ch=f.u(0,r.gad(r))
f=r}s=s.dy
s.toString
s.aV(f.bw(0,!0))
if(m.d){f=h.a
s=h.c
f=f.fx
f.toString
f.aV(s.bw(0,!0))}if(m.a.c){h.cW(j,h.f)
f=h.a
s=h.f
f=f.go
r=s!=null
if(r&&s.d>=6){f.toString
if(!r||s.d<6)f.a.uniform1i(f.d,0)
else{s=s.a
f.a.uniform1i(f.d,s)}}}for(i=0;i<j.length;++i){f=j[i]
if(!f.c&&f.d>=6){f.c=!0
u.activeTexture(33984+f.a)
u.bindTexture(34067,f.b)}}f=b.e
f.bh(a)
f.at(a)
f.f7(a)
for(i=0;i<j.length;++i){f=j[i]
if(f.c){f.c=!1
u.activeTexture(33984+f.a)
u.bindTexture(34067,null)}}f=h.a
f.toString
u.useProgram(null)
f.x.eu()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return A.jp(this.d).e}}
O.cQ.prototype={}
T.cR.prototype={}
T.h3.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u}}
T.h4.prototype={
am:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.N(u,"load",new T.h5(this,u,!1,b,!1,d,a),!1)},
e1:function(a,b,c){var u,t,s,r
b=V.j4(b)
u=V.j4(a.width)
t=V.j4(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iD()
s.width=u
s.height=t
r=C.f.cw(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lv(r.getImageData(0,0,s.width,s.height))}}}
T.h5.prototype={
$1:function(a){var u=this,t=u.a,s=t.e1(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.M.f0(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ev()}++t.e}}
X.iC.prototype={}
X.eK.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.E():u}}
X.cF.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.E():u},
ak:function(a){var u=this.f
if(u!=null)u.D(a)},
cT:function(){return this.ak(null)},
saC:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gt().R(0,s.gbK())
t=s.b
s.b=a
if(a!=null)a.gt().n(0,s.gbK())
u=new D.w("mover",t,s.b)
u.b=!0
s.ak(u)}}}
X.h_.prototype={}
V.cd.prototype={
aG:function(a){this.b=new P.eP(C.F)
this.c=null
this.d=H.b([],[[P.b9,W.a5]])},
H:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.a5]))
u=a.split("\n")
for(l=u.length,t=[W.a5],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.d2(q,0,q.length)
n=o==null?q:o
C.D.cB(p,H.j6(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaO(m.d).push(p)}},
cj:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.b9,W.a5]])
u=C.a.l(b,"\n")
t=r.c
if(t==null)t=r.c=r.aL()
for(t.toString,s=new H.k(u),s=new P.bg(t.bx(new H.aO(s,s.gk(s))).a());s.q();)r.aQ(s.gB(s))}}
V.ix.prototype={
$1:function(a){var u=C.c.cs(this.a.gez(),2)
if(u!=="0.00")P.j5(u+" fps")}}
V.eq.prototype={
aQ:function(a){var u=this
switch(a.a){case"Class":u.H(a.b,"#551")
break
case"Comment":u.H(a.b,"#777")
break
case"Id":u.H(a.b,"#111")
break
case"Num":u.H(a.b,"#191")
break
case"Reserved":u.H(a.b,"#119")
break
case"String":u.H(a.b,"#171")
break
case"Symbol":u.H(a.b,"#616")
break
case"Type":u.H(a.b,"#B11")
break
case"Whitespace":u.H(a.b,"#111")
break}},
aL:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.h9()
a1.d=a1.i(0,r)
u=a1.i(0,r).l(0,q)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.D("a","z")
u.a.push(t)
t=K.D("A","Z")
u.a.push(t)
t=a1.i(0,q).l(0,q)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.D("0","9")
t.a.push(u)
u=K.D("a","z")
t.a.push(u)
u=K.D("A","Z")
t.a.push(u)
u=a1.i(0,r).l(0,p)
t=K.D("0","9")
u.a.push(t)
t=a1.i(0,p).l(0,p)
u=K.D("0","9")
t.a.push(u)
u=a1.i(0,p).l(0,o)
t=K.n(new H.k("."))
u.a.push(t)
t=a1.i(0,o).l(0,n)
u=K.D("0","9")
t.a.push(u)
u=a1.i(0,n).l(0,n)
t=K.D("0","9")
u.a.push(t)
t=a1.i(0,r).l(0,m)
u=K.n(new H.k(l))
t.a.push(u)
u=a1.i(0,m).l(0,m)
t=K.n(new H.k(l))
u.a.push(t)
t=a1.i(0,r).l(0,k)
u=K.n(new H.k('"'))
t.a.push(u)
u=a1.i(0,k).l(0,j)
t=K.n(new H.k('"'))
u.a.push(t)
t=a1.i(0,k).l(0,i)
u=K.n(new H.k("\\"))
t.a.push(u)
u=a1.i(0,i).l(0,k)
t=K.n(new H.k('"'))
u.a.push(t)
a1.i(0,k).l(0,k).a.push(new K.ah())
t=a1.i(0,r).l(0,h)
u=K.n(new H.k("'"))
t.a.push(u)
u=a1.i(0,h).l(0,g)
t=K.n(new H.k("'"))
u.a.push(t)
t=a1.i(0,h).l(0,f)
u=K.n(new H.k("\\"))
t.a.push(u)
u=a1.i(0,f).l(0,h)
t=K.n(new H.k("'"))
u.a.push(t)
a1.i(0,h).l(0,h).a.push(new K.ah())
t=a1.i(0,r).l(0,e)
u=K.n(new H.k("/"))
t.a.push(u)
u=a1.i(0,e).l(0,d)
t=K.n(new H.k("/"))
u.a.push(t)
t=a1.i(0,d).l(0,c)
u=K.n(new H.k("\n"))
t.a.push(u)
u=a1.i(0,d).l(0,d)
t=new K.S()
s=[K.aP]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("\n"))
t.a.push(u)
u=a1.i(0,e).l(0,b)
t=K.n(new H.k("*"))
u.a.push(t)
t=a1.i(0,b).l(0,a)
u=K.n(new H.k("*"))
t.a.push(u)
u=a1.i(0,a).l(0,b)
t=new K.S()
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("*"))
t.a.push(u)
u=a1.i(0,a).l(0,c)
t=K.n(new H.k("/"))
u.a.push(t)
t=a1.i(0,r).l(0,a0)
u=K.n(new H.k(" \n\t"))
t.a.push(u)
u=a1.i(0,a0).l(0,a0)
t=K.n(new H.k(" \n\t"))
u.a.push(t)
t=a1.i(0,p)
t.d=t.a.J("Num")
t=a1.i(0,n)
t.d=t.a.J("Num")
t=a1.i(0,m)
t.d=t.a.J("Symbol")
t=a1.i(0,j)
t.d=t.a.J("String")
t=a1.i(0,g)
t.d=t.a.J("String")
t=a1.i(0,c)
t.d=t.a.J(d)
t=a1.i(0,a0)
t.d=t.a.J(a0)
t=a1.i(0,q)
t=t.d=t.a.J(q)
u=[P.o]
t.af(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.af(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.af(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eM.prototype={
aQ:function(a){var u=this
switch(a.a){case"Builtin":u.H(a.b,"#411")
break
case"Comment":u.H(a.b,"#777")
break
case"Id":u.H(a.b,"#111")
break
case"Num":u.H(a.b,"#191")
break
case"Preprocess":u.H(a.b,"#737")
break
case"Reserved":u.H(a.b,"#119")
break
case"Symbol":u.H(a.b,"#611")
break
case"Type":u.H(a.b,"#171")
break
case"Whitespace":u.H(a.b,"#111")
break}},
aL:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.h9()
e.d=e.i(0,r)
u=e.i(0,r).l(0,q)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.D("a","z")
u.a.push(t)
t=K.D("A","Z")
u.a.push(t)
t=e.i(0,q).l(0,q)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.D("0","9")
t.a.push(u)
u=K.D("a","z")
t.a.push(u)
u=K.D("A","Z")
t.a.push(u)
u=e.i(0,r).l(0,p)
t=K.D("0","9")
u.a.push(t)
t=e.i(0,p).l(0,p)
u=K.D("0","9")
t.a.push(u)
u=e.i(0,p).l(0,o)
t=K.n(new H.k("."))
u.a.push(t)
t=e.i(0,o).l(0,n)
u=K.D("0","9")
t.a.push(u)
u=e.i(0,n).l(0,n)
t=K.D("0","9")
u.a.push(t)
t=e.i(0,r).l(0,m)
u=K.n(new H.k(l))
t.a.push(u)
u=e.i(0,m).l(0,m)
t=K.n(new H.k(l))
u.a.push(t)
t=e.i(0,r).l(0,k)
u=K.n(new H.k("/"))
t.a.push(u)
u=e.i(0,k).l(0,j)
t=K.n(new H.k("/"))
u.a.push(t)
e.i(0,k).l(0,m).a.push(new K.ah())
t=e.i(0,j).l(0,i)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,j).l(0,j)
t=new K.S()
s=[K.aP]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,r).l(0,h)
t=K.n(new H.k("#"))
u.a.push(t)
t=e.i(0,h).l(0,h)
u=new K.S()
u.a=H.b([],s)
t.a.push(u)
t=K.n(new H.k("\n"))
u.a.push(t)
t=e.i(0,h).l(0,g)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,r).l(0,f)
t=K.n(new H.k(" \n\t"))
u.a.push(t)
t=e.i(0,f).l(0,f)
u=K.n(new H.k(" \n\t"))
t.a.push(u)
u=e.i(0,p)
u.d=u.a.J("Num")
u=e.i(0,n)
u.d=u.a.J("Num")
u=e.i(0,m)
u.d=u.a.J("Symbol")
u=e.i(0,i)
u.d=u.a.J(j)
u=e.i(0,g)
u.d=u.a.J(h)
u=e.i(0,f)
u.d=u.a.J(f)
u=e.i(0,q)
u=u.d=u.a.J(q)
t=[P.o]
u.af(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.af(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.af(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.eN.prototype={
aQ:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.H(a.b,"#911")
u.H("=",t)
break
case"Id":u.H(a.b,t)
break
case"Other":u.H(a.b,t)
break
case"Reserved":u.H(a.b,"#119")
break
case"String":u.H(a.b,"#171")
break
case"Symbol":u.H(a.b,"#616")
break}},
aL:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.h9()
l.d=l.i(0,s)
u=l.i(0,s).l(0,r)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.D("a","z")
u.a.push(t)
t=K.D("A","Z")
u.a.push(t)
t=l.i(0,r).l(0,r)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.D("0","9")
t.a.push(u)
u=K.D("a","z")
t.a.push(u)
u=K.D("A","Z")
t.a.push(u)
u=l.i(0,r).l(0,q)
t=K.n(new H.k("="))
u.a.push(t)
u.c=!0
u=l.i(0,s).l(0,p)
t=K.n(new H.k("</\\-!>="))
u.a.push(t)
t=l.i(0,p).l(0,p)
u=K.n(new H.k("</\\-!>="))
t.a.push(u)
u=l.i(0,s).l(0,o)
t=K.n(new H.k('"'))
u.a.push(t)
t=l.i(0,o).l(0,n)
u=K.n(new H.k('"'))
t.a.push(u)
u=l.i(0,o).l(0,"EscStr")
t=K.n(new H.k("\\"))
u.a.push(t)
t=l.i(0,"EscStr").l(0,o)
u=K.n(new H.k('"'))
t.a.push(u)
l.i(0,o).l(0,o).a.push(new K.ah())
l.i(0,s).l(0,m).a.push(new K.ah())
u=l.i(0,m).l(0,m)
t=new K.S()
t.a=H.b([],[K.aP])
u.a.push(t)
u=K.n(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.D("a","z")
t.a.push(u)
u=K.D("A","Z")
t.a.push(u)
u=l.i(0,p)
u.d=u.a.J("Symbol")
u=l.i(0,n)
u.d=u.a.J("String")
u=l.i(0,r)
t=u.a.J(r)
u.d=t
t.af(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
t=l.i(0,q)
t.d=t.a.J(q)
t=l.i(0,m)
t.d=t.a.J(m)
return l}}
V.fu.prototype={
cj:function(a,b){this.d=H.b([],[[P.b9,W.a5]])
this.H(C.a.l(b,"\n"),"#111")},
aQ:function(a){},
aL:function(){return}}
V.fM.prototype={
cM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
W.N(q,"scroll",new V.fO(o),!1)},
c1:function(a){var u,t,s,r,q,p,o,n
this.e5()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.eB(a),s.toString,r=new H.k(r),r=new P.bg(s.bx(new H.aO(r,r.gk(r))).a());r.q();){s=r.gB(r)
switch(s.a){case"Bold":q=u.createElement("div")
q.className="boldPar"
q.textContent=s.b
t.appendChild(q)
break
case"Italic":q=u.createElement("div")
q.className="italicPar"
q.textContent=s.b
t.appendChild(q)
break
case"Code":q=u.createElement("div")
q.className="codePar"
q.textContent=s.b
t.appendChild(q)
break
case"Link":s=s.b
if(H.lR(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.jO(C.p,s,C.h,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
cv:function(a){var u,t,s,r=new V.eq("dart")
r.aG("dart")
u=new V.eM("glsl")
u.aG("glsl")
t=new V.eN("html")
t.aG("html")
s=C.a.ey(H.b([r,u,t],[V.cd]),new V.fP(a))
if(s!=null)return s
r=new V.fu("plain")
r.aG("plain")
return r},
c_:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.y])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.j_(s).aW(s,"+")){b0[t]=C.b.aX(s,1)
a6.push(1)
u=!0}else if(C.b.aW(s,"-")){b0[t]=C.b.aX(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.cv(a8)
r.cj(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.jO(C.p,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.ja()
j.href="#"+n
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.f(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.r)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.r)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gN(s);a2.q();)d.appendChild(a2.gB(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
e5:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.h9()
u.d=u.i(0,q)
t=u.i(0,q).l(0,p)
s=K.n(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).l(0,p)
s=new K.S()
r=[K.aP]
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("*"))
s.a.push(t)
t=u.i(0,p).l(0,"BoldEnd")
s=K.n(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,o)
s=K.n(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).l(0,o)
s=new K.S()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("_"))
s.a.push(t)
t=u.i(0,o).l(0,n)
s=K.n(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,m)
s=K.n(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).l(0,m)
s=new K.S()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("`"))
s.a.push(t)
t=u.i(0,m).l(0,"CodeEnd")
s=K.n(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,l)
s=K.n(new H.k("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).l(0,k)
s=K.n(new H.k("|"))
t.a.push(s)
s=u.i(0,l).l(0,j)
t=K.n(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).l(0,l)
t=new K.S()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("|]"))
t.a.push(s)
s=u.i(0,k).l(0,j)
t=K.n(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).l(0,k)
t=new K.S()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("|]"))
t.a.push(s)
u.i(0,q).l(0,i).a.push(new K.ah())
s=u.i(0,i).l(0,i)
t=new K.S()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("*_`["))
t.a.push(s)
s=u.i(0,"BoldEnd")
s.d=s.a.J(p)
s=u.i(0,n)
s.d=s.a.J(o)
s=u.i(0,"CodeEnd")
s.d=s.a.J(m)
s=u.i(0,j)
s.d=s.a.J("Link")
s=u.i(0,i)
s.d=s.a.J(i)
this.b=u}}
V.fO.prototype={
$1:function(a){P.jC(C.i,new V.fN(this.a))}}
V.fN.prototype={
$0:function(){var u=C.c.a3(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.fP.prototype={
$1:function(a){return a.a===this.a}}
D.iv.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.o]
u.c_("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.c_("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.cE=u.h
u=J.cr.prototype
u.cG=u.h
u=P.j.prototype
u.cF=u.aT
u=W.J.prototype
u.aY=u.a0
u=W.dB.prototype
u.cH=u.a7
u=K.cm.prototype
u.cD=u.ac
u.bD=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"lf","kE",16)
t(P,"lp","l2",6)
t(P,"lq","l3",6)
t(P,"lr","l4",6)
s(P,"jT","ln",9)
r(W,"lE",4,null,["$4"],["l5"],13,0)
r(W,"lF",4,null,["$4"],["l6"],13,0)
var l
q(l=E.aI.prototype,"gcg",0,0,null,["$1","$0"],["ci","eK"],1,0)
q(l,"gce",0,0,null,["$1","$0"],["cf","eJ"],1,0)
q(l,"gcc",0,0,null,["$1","$0"],["cd","eG"],1,0)
p(l,"geE","eF",3)
p(l,"geH","eI",3)
q(l=E.cS.prototype,"gbF",0,0,null,["$1","$0"],["bH","bG"],1,0)
o(l,"geX","cn",9)
n(l=X.d0.prototype,"gdw","dz",4)
n(l,"gdi","dj",4)
n(l,"gdq","dr",2)
n(l,"gdC","dD",10)
n(l,"gdA","dB",10)
n(l,"gdF","dG",2)
n(l,"gdJ","dK",2)
n(l,"gdu","dv",2)
n(l,"gdH","dI",2)
n(l,"gds","dt",2)
n(l,"gdL","dM",15)
n(l,"gdN","dO",4)
n(l,"gdW","dX",5)
n(l,"gdS","dT",5)
n(l,"gdU","dV",5)
m(V.x.prototype,"gk","bp",11)
m(V.I.prototype,"gk","bp",11)
q(l=U.bx.prototype,"gan",0,0,null,["$1","$0"],["K","U"],1,0)
p(l,"gdg","dh",12)
p(l,"gdQ","dR",12)
q(l=U.d1.prototype,"gan",0,0,null,["$1","$0"],["K","U"],1,0)
n(l,"gb6","b7",0)
n(l,"gb8","b9",0)
n(l,"gba","bb",0)
q(l=U.d2.prototype,"gan",0,0,null,["$1","$0"],["K","U"],1,0)
n(l,"gb6","b7",0)
n(l,"gb8","b9",0)
n(l,"gba","bb",0)
n(l,"gd8","d9",0)
n(l,"gda","dc",0)
n(l,"gec","ed",0)
n(l,"gea","eb",0)
n(l,"ge8","e9",0)
n(U.d3.prototype,"gde","df",0)
q(l=M.ci.prototype,"ga4",0,0,null,["$1","$0"],["a8","cP"],1,0)
p(l,"gdk","dl",3)
p(l,"gdm","dn",3)
q(O.cD.prototype,"gbI",0,0,null,["$1","$0"],["aZ","bJ"],1,0)
q(X.cF.prototype,"gbK",0,0,null,["$1","$0"],["ak","cT"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.iM,J.a,J.Y,P.dn,P.j,H.aO,P.eT,H.ck,H.hv,H.he,P.b4,H.bs,H.dG,P.P,H.f0,H.f1,H.eW,P.dM,P.bf,P.bg,P.d6,P.cO,P.fW,P.cT,P.ii,P.i4,P.hZ,P.dm,P.p,P.eh,P.eQ,P.ig,P.b_,P.a_,P.X,P.aH,P.fs,P.cM,P.de,P.eJ,P.eL,P.b9,P.bD,P.aQ,P.o,P.aU,W.em,W.bT,W.B,W.cC,W.dB,W.i9,W.cl,W.ao,W.i3,W.dS,P.dR,P.i_,K.ah,K.cm,K.aP,K.fy,K.fH,L.cN,L.cU,L.cV,L.h8,O.b3,O.bG,E.ed,E.aI,E.fz,E.cS,Z.d5,Z.hJ,Z.cb,Z.b6,Z.aX,D.eg,D.bw,D.O,X.cc,X.cs,X.eZ,X.f4,X.a0,X.fe,X.ha,X.d0,V.aF,V.eA,V.cw,V.bF,V.a1,V.aT,V.cG,V.cI,V.x,V.I,U.d1,U.d2,U.d3,M.ci,A.c8,A.e8,A.bt,A.fo,A.cY,A.hp,F.b5,F.bB,F.bK,F.fI,F.fJ,F.fK,F.fL,F.bQ,F.hA,F.hB,F.hE,F.hF,O.cQ,T.h4,X.iC,X.h_,X.cF,V.cd,V.fM])
s(J.a,[J.eU,J.eV,J.cr,J.aK,J.bA,J.aL,H.bJ,W.d,W.e5,W.c9,W.a8,W.z,W.d8,W.Z,W.er,W.es,W.da,W.ch,W.dc,W.eu,W.h,W.df,W.ak,W.eO,W.di,W.aJ,W.f3,W.f8,W.dp,W.dq,W.am,W.dr,W.du,W.ap,W.dy,W.dA,W.as,W.dC,W.at,W.dH,W.ab,W.dK,W.h7,W.av,W.dN,W.hc,W.hx,W.dT,W.dV,W.dX,W.dZ,W.e0,P.aN,P.dk,P.aR,P.dw,P.fx,P.dI,P.aV,P.dP,P.e9,P.d7,P.cJ,P.dE])
s(J.cr,[J.ft,J.be,J.aM])
t(J.iL,J.aK)
s(J.bA,[J.cq,J.cp])
t(P.f2,P.dn)
s(P.f2,[H.d_,W.hQ,W.R,P.eF])
t(H.k,H.d_)
s(P.j,[H.m,H.bE,H.bR,P.eS])
s(H.m,[H.ct,H.b8])
t(H.ex,H.bE)
s(P.eT,[H.cv,H.hK])
t(H.f7,H.ct)
s(P.b4,[H.fp,H.eY,H.hu,H.ef,H.fF,P.cE,P.a4,P.hw,P.ht,P.bO,P.ej,P.ep])
s(H.bs,[H.iz,H.h0,H.eX,H.ir,H.is,H.it,P.hM,P.hL,P.hN,P.hO,P.ie,P.id,P.il,P.i1,P.i2,P.f6,P.ev,P.ew,W.ey,W.fa,W.fc,W.fE,W.fV,W.hU,W.fm,W.fl,W.i5,W.i6,W.ic,W.ih,P.im,P.eG,P.eH,P.eb,E.fA,E.fB,E.fC,E.h6,D.eB,D.eC,F.ij,F.hH,F.hG,F.hC,F.hD,T.h5,V.ix,V.fO,V.fN,V.fP,D.iv])
s(H.h0,[H.fT,H.bq])
t(P.f5,P.P)
s(P.f5,[H.a9,W.hP])
t(H.cy,H.bJ)
s(H.cy,[H.bU,H.bW])
t(H.bV,H.bU)
t(H.bI,H.bV)
t(H.bX,H.bW)
t(H.cz,H.bX)
s(H.cz,[H.ff,H.fg,H.fh,H.fi,H.fj,H.cA,H.fk])
t(P.ia,P.eS)
t(P.i0,P.ii)
t(P.hY,P.i4)
t(P.ek,P.fW)
t(P.ez,P.eh)
s(P.ek,[P.eP,P.hz])
t(P.hy,P.ez)
s(P.X,[P.F,P.y])
s(P.a4,[P.bb,P.eR])
s(W.d,[W.v,W.eE,W.ar,W.bY,W.au,W.ac,W.c_,W.hI,W.bS,P.ec,P.b0])
s(W.v,[W.J,W.aE])
s(W.J,[W.l,P.i])
s(W.l,[W.e6,W.e7,W.b1,W.b2,W.a5,W.eI,W.bz,W.fG,W.cP,W.fY,W.fZ,W.bP])
t(W.el,W.a8)
t(W.bu,W.d8)
s(W.Z,[W.en,W.eo])
t(W.db,W.da)
t(W.cg,W.db)
t(W.dd,W.dc)
t(W.et,W.dd)
t(W.aj,W.c9)
t(W.dg,W.df)
t(W.eD,W.dg)
t(W.dj,W.di)
t(W.by,W.dj)
t(W.aW,W.h)
s(W.aW,[W.b7,W.aa,W.bc])
t(W.f9,W.dp)
t(W.fb,W.dq)
t(W.ds,W.dr)
t(W.fd,W.ds)
t(W.dv,W.du)
t(W.cB,W.dv)
t(W.dz,W.dy)
t(W.fv,W.dz)
t(W.fD,W.dA)
t(W.bZ,W.bY)
t(W.fQ,W.bZ)
t(W.dD,W.dC)
t(W.fR,W.dD)
t(W.fU,W.dH)
t(W.dL,W.dK)
t(W.h1,W.dL)
t(W.c0,W.c_)
t(W.h2,W.c0)
t(W.dO,W.dN)
t(W.hb,W.dO)
t(W.aY,W.aa)
t(W.dU,W.dT)
t(W.hR,W.dU)
t(W.d9,W.ch)
t(W.dW,W.dV)
t(W.hV,W.dW)
t(W.dY,W.dX)
t(W.dt,W.dY)
t(W.e_,W.dZ)
t(W.i7,W.e_)
t(W.e1,W.e0)
t(W.i8,W.e1)
t(W.hS,W.hP)
t(W.hT,P.cO)
t(W.ib,W.dB)
t(P.W,P.i_)
t(P.dl,P.dk)
t(P.f_,P.dl)
t(P.dx,P.dw)
t(P.fq,P.dx)
t(P.bN,P.i)
t(P.dJ,P.dI)
t(P.fX,P.dJ)
t(P.dQ,P.dP)
t(P.hd,P.dQ)
t(P.ea,P.d7)
t(P.fr,P.b0)
t(P.dF,P.dE)
t(P.fS,P.dF)
s(K.cm,[K.S,L.cX])
s(E.ed,[Z.ca,A.cK,T.cR])
s(D.O,[D.cn,D.co,D.w,X.fw])
s(X.fw,[X.cu,X.an,X.bH,X.cW])
s(D.eg,[U.ei,U.V])
t(U.ce,U.V)
t(U.bx,O.b3)
t(A.fn,A.cK)
s(A.cY,[A.hh,A.hk,A.hm,A.ho,A.hi,A.hg,A.hj,A.hl,A.hn,A.hq,A.hr,A.bd,A.hs,A.cZ])
t(O.cD,O.cQ)
t(T.h3,T.cR)
t(X.eK,X.h_)
s(V.cd,[V.eq,V.eM,V.eN,V.fu])
u(H.d_,H.hv)
u(H.bU,P.p)
u(H.bV,H.ck)
u(H.bW,P.p)
u(H.bX,H.ck)
u(P.dn,P.p)
u(W.d8,W.em)
u(W.da,P.p)
u(W.db,W.B)
u(W.dc,P.p)
u(W.dd,W.B)
u(W.df,P.p)
u(W.dg,W.B)
u(W.di,P.p)
u(W.dj,W.B)
u(W.dp,P.P)
u(W.dq,P.P)
u(W.dr,P.p)
u(W.ds,W.B)
u(W.du,P.p)
u(W.dv,W.B)
u(W.dy,P.p)
u(W.dz,W.B)
u(W.dA,P.P)
u(W.bY,P.p)
u(W.bZ,W.B)
u(W.dC,P.p)
u(W.dD,W.B)
u(W.dH,P.P)
u(W.dK,P.p)
u(W.dL,W.B)
u(W.c_,P.p)
u(W.c0,W.B)
u(W.dN,P.p)
u(W.dO,W.B)
u(W.dT,P.p)
u(W.dU,W.B)
u(W.dV,P.p)
u(W.dW,W.B)
u(W.dX,P.p)
u(W.dY,W.B)
u(W.dZ,P.p)
u(W.e_,W.B)
u(W.e0,P.p)
u(W.e1,W.B)
u(P.dk,P.p)
u(P.dl,W.B)
u(P.dw,P.p)
u(P.dx,W.B)
u(P.dI,P.p)
u(P.dJ,W.B)
u(P.dP,P.p)
u(P.dQ,W.B)
u(P.d7,P.P)
u(P.dE,P.p)
u(P.dF,W.B)})()
var v={mangledGlobalNames:{y:"int",F:"double",X:"num",o:"String",b_:"bool",aQ:"Null",b9:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.O]},{func:1,ret:-1,opt:[D.O]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.y,[P.j,E.aI]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aQ,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.F},{func:1,ret:-1,args:[P.y,[P.j,U.V]]},{func:1,ret:P.b_,args:[W.J,P.o,P.o,W.bT]},{func:1,ret:P.aQ,args:[,]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.y,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.b1.prototype
C.f=W.b2.prototype
C.D=W.a5.prototype
C.G=J.a.prototype
C.a=J.aK.prototype
C.H=J.cp.prototype
C.d=J.cq.prototype
C.c=J.bA.prototype
C.b=J.aL.prototype
C.I=J.aM.prototype
C.q=J.ft.prototype
C.M=P.cJ.prototype
C.r=W.cP.prototype
C.l=J.be.prototype
C.t=W.aY.prototype
C.u=W.bS.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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

C.B=new P.fs()
C.h=new P.hy()
C.C=new P.hz()
C.e=new P.i0()
C.i=new P.aH(0)
C.E=new P.aH(5e6)
C.F=new P.eQ("element",!1,!1,!1)
C.J=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.K=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.L=H.b(u([]),[P.o])
C.p=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.o])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.N=new P.bf(null,2)})();(function staticFields(){$.a7=0
$.br=null
$.jb=null
$.jV=null
$.jS=null
$.jY=null
$.io=null
$.iu=null
$.j2=null
$.bh=null
$.c2=null
$.c3=null
$.iX=!1
$.a6=C.e
$.T=[]
$.ai=null
$.iG=null
$.jh=null
$.jg=null
$.dh=P.jk(P.o,P.eL)
$.jn=null
$.jo=null
$.js=null
$.jt=null
$.jx=null
$.jG=null
$.jJ=null
$.jI=null
$.jH=null
$.jr=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lZ","k1",function(){return H.jU("_$dart_dartClosure")})
u($,"m_","j7",function(){return H.jU("_$dart_js")})
u($,"m0","k2",function(){return H.ad(H.hf({
toString:function(){return"$receiver$"}}))})
u($,"m1","k3",function(){return H.ad(H.hf({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m2","k4",function(){return H.ad(H.hf(null))})
u($,"m3","k5",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m6","k8",function(){return H.ad(H.hf(void 0))})
u($,"m7","k9",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m5","k7",function(){return H.ad(H.jE(null))})
u($,"m4","k6",function(){return H.ad(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"m9","kb",function(){return H.ad(H.jE(void 0))})
u($,"m8","ka",function(){return H.ad(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mm","j8",function(){return P.l1()})
u($,"mp","kg",function(){return P.kT("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mn","kf",function(){return P.jl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)})
u($,"mg","ke",function(){return Z.a2(0)})
u($,"ma","kc",function(){return Z.a2(511)})
u($,"mi","aA",function(){return Z.a2(1)})
u($,"mh","az",function(){return Z.a2(2)})
u($,"mc","ay",function(){return Z.a2(4)})
u($,"mj","bn",function(){return Z.a2(8)})
u($,"mk","aB",function(){return Z.a2(16)})
u($,"md","c6",function(){return Z.a2(32)})
u($,"me","c7",function(){return Z.a2(64)})
u($,"mf","kd",function(){return Z.a2(96)})
u($,"ml","bo",function(){return Z.a2(128)})
u($,"mb","bm",function(){return Z.a2(256)})
u($,"lY","k0",function(){return new V.eA(1e-9)})
u($,"lX","A",function(){return $.k0()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bJ,ArrayBufferView:H.bJ,Float32Array:H.bI,Float64Array:H.bI,Int16Array:H.ff,Int32Array:H.fg,Int8Array:H.fh,Uint16Array:H.fi,Uint32Array:H.fj,Uint8ClampedArray:H.cA,CanvasPixelArray:H.cA,Uint8Array:H.fk,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.e5,HTMLAnchorElement:W.e6,HTMLAreaElement:W.e7,Blob:W.c9,HTMLBodyElement:W.b1,HTMLCanvasElement:W.b2,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CSSPerspective:W.el,CSSCharsetRule:W.z,CSSConditionRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bu,MSStyleCSSProperties:W.bu,CSS2Properties:W.bu,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSPositionValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.a8,CSSRotation:W.a8,CSSScale:W.a8,CSSSkew:W.a8,CSSTranslation:W.a8,CSSTransformComponent:W.a8,CSSTransformValue:W.en,CSSUnparsedValue:W.eo,DataTransferItemList:W.er,HTMLDivElement:W.a5,DOMException:W.es,ClientRectList:W.cg,DOMRectList:W.cg,DOMRectReadOnly:W.ch,DOMStringList:W.et,DOMTokenList:W.eu,Element:W.J,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aj,FileList:W.eD,FileWriter:W.eE,HTMLFormElement:W.eI,Gamepad:W.ak,History:W.eO,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.aJ,HTMLImageElement:W.bz,KeyboardEvent:W.b7,Location:W.f3,MediaList:W.f8,MIDIInputMap:W.f9,MIDIOutputMap:W.fb,MimeType:W.am,MimeTypeArray:W.fd,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cB,RadioNodeList:W.cB,Plugin:W.ap,PluginArray:W.fv,RTCStatsReport:W.fD,HTMLSelectElement:W.fG,SourceBuffer:W.ar,SourceBufferList:W.fQ,SpeechGrammar:W.as,SpeechGrammarList:W.fR,SpeechRecognitionResult:W.at,Storage:W.fU,CSSStyleSheet:W.ab,StyleSheet:W.ab,HTMLTableElement:W.cP,HTMLTableRowElement:W.fY,HTMLTableSectionElement:W.fZ,HTMLTemplateElement:W.bP,TextTrack:W.au,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.h1,TextTrackList:W.h2,TimeRanges:W.h7,Touch:W.av,TouchEvent:W.bc,TouchList:W.hb,TrackDefaultList:W.hc,CompositionEvent:W.aW,FocusEvent:W.aW,TextEvent:W.aW,UIEvent:W.aW,URL:W.hx,VideoTrackList:W.hI,WheelEvent:W.aY,Window:W.bS,DOMWindow:W.bS,CSSRuleList:W.hR,ClientRect:W.d9,DOMRect:W.d9,GamepadList:W.hV,NamedNodeMap:W.dt,MozNamedAttrMap:W.dt,SpeechRecognitionResultList:W.i7,StyleSheetList:W.i8,SVGLength:P.aN,SVGLengthList:P.f_,SVGNumber:P.aR,SVGNumberList:P.fq,SVGPointList:P.fx,SVGScriptElement:P.bN,SVGStringList:P.fX,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aV,SVGTransformList:P.hd,AudioBuffer:P.e9,AudioParamMap:P.ea,AudioTrackList:P.ec,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.fr,WebGL2RenderingContext:P.cJ,SQLResultSetRowList:P.fS})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.jW,[])
else D.jW([])})})()
//# sourceMappingURL=test.dart.js.map
