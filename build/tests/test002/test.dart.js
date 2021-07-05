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
a[c]=function(){a[c]=function(){H.pU(b)}
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
if(a[b]!==s)H.pV(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lv(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l5:function l5(){},
l7:function(a){return new H.cl("Field '"+a+"' has been assigned during initialization.")},
jV:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ip:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
og:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pC:function(a,b,c){return a},
nX:function(a,b){if(t.U.b(a))return new H.cc(a,b)
return new H.be(a,b)},
lR:function(){return new P.ek("No element")},
oe:function(a,b){H.ef(a,0,J.aP(a)-1,b)},
ef:function(a,b,c,d){if(c-b<=32)H.od(a,b,c,d)
else H.oc(a,b,c,d)},
od:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bW(a);s<=c;++s){q=r.i(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.aj()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.i(a,n))
p=n}r.m(a,p,q)}},
oc:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.ak(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.ak(a4+a5,2),f=g-j,e=g+j,d=J.bW(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aj()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.i(a3,a4))
d.m(a3,e,d.i(a3,a5))
r=a4+1
q=a5-1
if(J.A(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.i(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.m(a3,p,d.i(a3,r))
d.m(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.i(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.m(a3,p,d.i(a3,r))
l=r+1
d.m(a3,r,d.i(a3,q))
d.m(a3,q,o)
q=m
r=l
break}else{d.m(a3,p,d.i(a3,q))
d.m(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.m(a3,p,d.i(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.i(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.m(a3,p,d.i(a3,r))
l=r+1
d.m(a3,r,d.i(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.i(a3,q))
d.m(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.m(a3,a4,d.i(a3,a2))
d.m(a3,a2,b)
a2=q+1
d.m(a3,a5,d.i(a3,a2))
d.m(a3,a2,a0)
H.ef(a3,a4,r-2,a6)
H.ef(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.A(a6.$2(d.i(a3,r),b),0);)++r
for(;J.A(a6.$2(d.i(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.m(a3,p,d.i(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.i(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.m(a3,p,d.i(a3,r))
l=r+1
d.m(a3,r,d.i(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.i(a3,q))
d.m(a3,q,o)}q=m
break}}H.ef(a3,r,q,a6)}else H.ef(a3,r,q,a6)},
cl:function cl(a){this.a=a},
P:function P(a){this.a=a},
h:function h(){},
bD:function bD(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
be:function be(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=null
this.b=a
this.c=b},
cO:function cO(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
ce:function ce(){},
eE:function eE(){},
bM:function bM(){},
nK:function(){throw H.b(P.w("Cannot modify unmodifiable Map"))},
nb:function(a){var s,r=H.na(a)
if(r!=null)return r
s="minified:"+a
return s},
n2:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dk(a)
return s},
cy:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m_:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a7(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.K(q,o)|32)>r)return n}return parseInt(a,b)},
cz:function(a){return H.nY(a)},
nY:function(a){var s,r,q,p
if(a instanceof P.R)return H.al(H.bm(a),null)
if(J.dg(a)===C.K||t.w.b(a)){s=C.q(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.al(H.bm(a),null)},
nZ:function(){if(!!self.location)return self.location.href
return null},
lZ:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
o6:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.z)(a),++r){q=a[r]
if(!H.jE(q))throw H.b(H.df(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aK(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.df(q))}return H.lZ(p)},
m0:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jE(q))throw H.b(H.df(q))
if(q<0)throw H.b(H.df(q))
if(q>65535)return H.o6(a)}return H.lZ(a)},
o7:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aG:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aK(s,10)|55296)>>>0,s&1023|56320)}}throw H.b(P.a7(a,0,1114111,null,null))},
bJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o5:function(a){var s=H.bJ(a).getFullYear()+0
return s},
o3:function(a){var s=H.bJ(a).getMonth()+1
return s},
o_:function(a){var s=H.bJ(a).getDate()+0
return s},
o0:function(a){var s=H.bJ(a).getHours()+0
return s},
o2:function(a){var s=H.bJ(a).getMinutes()+0
return s},
o4:function(a){var s=H.bJ(a).getSeconds()+0
return s},
o1:function(a){var s=H.bJ(a).getMilliseconds()+0
return s},
n0:function(a){throw H.b(H.df(a))},
c:function(a,b){if(a==null)J.aP(a)
throw H.b(H.bV(a,b))},
bV:function(a,b){var s,r="index"
if(!H.jE(b))return new P.az(!0,b,r,null)
s=J.aP(a)
if(b<0||b>=s)return P.L(b,a,r,null,s)
return P.e9(b,r)},
pE:function(a,b,c){if(a>c)return P.a7(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a7(b,a,c,"end",null)
return new P.az(!0,b,"end",null)},
df:function(a){return new P.az(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.e1()
s=new Error()
s.dartException=a
r=H.pW
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pW:function(){return J.dk(this.dartException)},
E:function(a){throw H.b(a)},
z:function(a){throw H.b(P.aR(a))},
aK:function(a){var s,r,q,p,o,n
a=H.n7(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iA(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iB:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mg:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l6:function(a,b){var s=b==null,r=s?null:b.method
return new H.dN(a,r,s?null:b.receiver)},
b7:function(a){if(a==null)return new H.i6(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bn(a,a.dartException)
return H.py(a)},
bn:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
py:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aK(r,16)&8191)===10)switch(q){case 438:return H.bn(a,H.l6(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.bn(a,new H.cw(p,e))}}if(a instanceof TypeError){o=$.nf()
n=$.ng()
m=$.nh()
l=$.ni()
k=$.nl()
j=$.nm()
i=$.nk()
$.nj()
h=$.no()
g=$.nn()
f=o.ah(s)
if(f!=null)return H.bn(a,H.l6(s,f))
else{f=n.ah(s)
if(f!=null){f.method="call"
return H.bn(a,H.l6(s,f))}else{f=m.ah(s)
if(f==null){f=l.ah(s)
if(f==null){f=k.ah(s)
if(f==null){f=j.ah(s)
if(f==null){f=i.ah(s)
if(f==null){f=l.ah(s)
if(f==null){f=h.ah(s)
if(f==null){f=g.ah(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bn(a,new H.cw(s,f==null?e:f.method))}}return H.bn(a,new H.eD(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cG()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bn(a,new P.az(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cG()
return a},
lx:function(a){var s
if(a==null)return new H.fq(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fq(a)},
pG:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
pL:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.v("Unsupported number of arguments for wrapped closure"))},
bU:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pL)
a.$identity=s
return s},
nJ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.im().constructor.prototype):Object.create(new H.c2(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aA
if(typeof r!=="number")return r.C()
$.aA=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lJ(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nF(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lJ(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nF:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mZ,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nD:H.nC
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nG:function(a,b,c,d){var s=H.lH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lJ:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nI(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nG(r,!p,s,b)
if(r===0){p=$.aA
if(typeof p!=="number")return p.C()
$.aA=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c3
return new Function(p+(o==null?$.c3=H.h0("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aA
if(typeof p!=="number")return p.C()
$.aA=p+1
m+=p
p="return function("+m+"){return this."
o=$.c3
return new Function(p+(o==null?$.c3=H.h0("self"):o)+"."+H.t(s)+"("+m+");}")()},
nH:function(a,b,c,d){var s=H.lH,r=H.nE
switch(b?-1:a){case 0:throw H.b(new H.ec("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nI:function(a,b){var s,r,q,p,o,n,m,l=$.c3
if(l==null)l=$.c3=H.h0("self")
s=$.lG
if(s==null)s=$.lG=H.h0("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nH(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.aA
if(typeof n!=="number")return n.C()
$.aA=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.aA
if(typeof n!=="number")return n.C()
$.aA=n+1
return new Function(o+n+"}")()},
lv:function(a,b,c,d,e,f,g){return H.nJ(a,b,c,d,!!e,!!f,g)},
nC:function(a,b){return H.fD(v.typeUniverse,H.bm(a.a),b)},
nD:function(a,b){return H.fD(v.typeUniverse,H.bm(a.c),b)},
lH:function(a){return a.a},
nE:function(a){return a.c},
h0:function(a){var s,r,q,p=new H.c2("self","target","receiver","name"),o=J.l4(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.c1("Field name "+a+" not found."))},
pU:function(a){throw H.b(new P.dx(a))},
pH:function(a){return v.getIsolateTag(a)},
pV:function(a){return H.E(new H.cl(a))},
r3:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pO:function(a){var s,r,q,p,o,n=$.mY.$1(a),m=$.jP[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mR.$2(a,n)
if(q!=null){m=$.jP[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kU(s)
$.jP[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.k_[n]=s
return s}if(p==="-"){o=H.kU(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n5(a,s)
if(p==="*")throw H.b(P.iP(n))
if(v.leafTags[n]===true){o=H.kU(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n5(a,s)},
n5:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lz(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kU:function(a){return J.lz(a,!1,null,!!a.$iu)},
pQ:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kU(s)
else return J.lz(s,c,null,null)},
pJ:function(){if(!0===$.ly)return
$.ly=!0
H.pK()},
pK:function(){var s,r,q,p,o,n,m,l
$.jP=Object.create(null)
$.k_=Object.create(null)
H.pI()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n6.$1(o)
if(n!=null){m=H.pQ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pI:function(){var s,r,q,p,o,n,m=C.B()
m=H.bT(C.C,H.bT(C.D,H.bT(C.r,H.bT(C.r,H.bT(C.E,H.bT(C.F,H.bT(C.G(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mY=new H.jW(p)
$.mR=new H.jX(o)
$.n6=new H.jY(n)},
bT:function(a,b){return a(b)||b},
nT:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
n8:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pF:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n7:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
n9:function(a,b,c){var s=H.pT(a,b,c)
return s},
pT:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n7(b),'g'),H.pF(c))},
c7:function c7(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iA:function iA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cw:function cw(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a},
i6:function i6(a){this.a=a},
fq:function fq(a){this.a=a
this.b=null},
bs:function bs(){},
ir:function ir(){},
im:function im(){},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a){this.a=a},
ap:function ap(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hT:function hT(a){this.a=a},
hW:function hW(a,b){this.a=a
this.b=b
this.c=null},
cm:function cm(a){this.a=a},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jC:function(a){return a},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bV(b,a))},
p6:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.pE(a,b,c))
return b},
cs:function cs(){},
W:function W(){},
bH:function bH(){},
bg:function bg(){},
ct:function ct(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
cu:function cu(){},
bh:function bh(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
ma:function(a,b){var s=b.c
return s==null?b.c=H.lk(a,b.z,!0):s},
m9:function(a,b){var s=b.c
return s==null?b.c=H.d5(a,"lP",[b.z]):s},
mb:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mb(a.z)
return s===11||s===12},
oa:function(a){return a.cy},
mW:function(a){return H.ll(v.typeUniverse,a,!1)},
b4:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b4(a,s,a0,a1)
if(r===s)return b
return H.mz(a,r,!0)
case 7:s=b.z
r=H.b4(a,s,a0,a1)
if(r===s)return b
return H.lk(a,r,!0)
case 8:s=b.z
r=H.b4(a,s,a0,a1)
if(r===s)return b
return H.my(a,r,!0)
case 9:q=b.Q
p=H.de(a,q,a0,a1)
if(p===q)return b
return H.d5(a,b.z,p)
case 10:o=b.z
n=H.b4(a,o,a0,a1)
m=b.Q
l=H.de(a,m,a0,a1)
if(n===o&&l===m)return b
return H.li(a,n,l)
case 11:k=b.z
j=H.b4(a,k,a0,a1)
i=b.Q
h=H.pv(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mx(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.de(a,g,a0,a1)
o=b.z
n=H.b4(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lj(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.fT("Attempted to substitute unexpected RTI kind "+c))}},
de:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b4(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pw:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b4(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pv:function(a,b,c,d){var s,r=b.a,q=H.de(a,r,c,d),p=b.b,o=H.de(a,p,c,d),n=b.c,m=H.pw(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.f2()
s.a=q
s.b=o
s.c=m
return s},
r5:function(a,b){a[v.arrayRti]=b
return a},
pD:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mZ(s)
return a.$S()}return null},
n1:function(a,b){var s
if(H.mb(b))if(a instanceof H.bs){s=H.pD(a)
if(s!=null)return s}return H.bm(a)},
bm:function(a){var s
if(a instanceof P.R){s=a.$ti
return s!=null?s:H.lr(a)}if(Array.isArray(a))return H.mI(a)
return H.lr(J.dg(a))},
mI:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a9:function(a){var s=a.$ti
return s!=null?s:H.lr(a)},
lr:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pe(a,s)},
pe:function(a,b){var s=a instanceof H.bs?a.__proto__.__proto__.constructor:b,r=H.oO(v.typeUniverse,s.name)
b.$ccache=r
return r},
mZ:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ll(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pd:function(a){var s,r,q,p=this
if(p===t.K)return H.db(p,a,H.pi)
if(!H.aN(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.db(p,a,H.pl)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jE
else if(r===t.i||r===t.H)q=H.ph
else if(r===t.N)q=H.pj
else q=r===t.y?H.jD:null
if(q!=null)return H.db(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.pM)){p.r="$i"+s
return H.db(p,a,H.pk)}}else if(s===7)return H.db(p,a,H.pb)
return H.db(p,a,H.p9)},
db:function(a,b,c){a.b=c
return a.b(b)},
pc:function(a){var s,r=this,q=H.p8
if(!H.aN(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.p5
else if(r===t.K)q=H.p3
else{s=H.dh(r)
if(s)q=H.pa}r.a=q
return r.a(a)},
lu:function(a){var s,r=a.y
if(!H.aN(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.lu(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p9:function(a){var s=this
if(a==null)return H.lu(s)
return H.N(v.typeUniverse,H.n1(a,s),null,s,null)},
pb:function(a){if(a==null)return!0
return this.z.b(a)},
pk:function(a){var s,r=this
if(a==null)return H.lu(r)
s=r.r
if(a instanceof P.R)return!!a[s]
return!!J.dg(a)[s]},
p8:function(a){var s,r=this
if(a==null){s=H.dh(r)
if(s)return a}else if(r.b(a))return a
H.mL(a,r)},
pa:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mL(a,s)},
mL:function(a,b){throw H.b(H.oE(H.ms(a,H.n1(a,b),H.al(b,null))))},
ms:function(a,b,c){var s=P.hj(a),r=H.al(b==null?H.bm(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oE:function(a){return new H.d4("TypeError: "+a)},
a8:function(a,b){return new H.d4("TypeError: "+H.ms(a,null,b))},
pi:function(a){return a!=null},
p3:function(a){if(a!=null)return a
throw H.b(H.a8(a,"Object"))},
pl:function(a){return!0},
p5:function(a){return a},
jD:function(a){return!0===a||!1===a},
mJ:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a8(a,"bool"))},
qS:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool"))},
qR:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool?"))},
qT:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"double"))},
qV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double"))},
qU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double?"))},
jE:function(a){return typeof a=="number"&&Math.floor(a)===a},
jw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a8(a,"int"))},
qX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int"))},
qW:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int?"))},
ph:function(a){return typeof a=="number"},
qY:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"num"))},
r_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num"))},
qZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num?"))},
pj:function(a){return typeof a=="string"},
p4:function(a){if(typeof a=="string")return a
throw H.b(H.a8(a,"String"))},
r1:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String"))},
r0:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String?"))},
pr:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.al(a[q],b)
return s},
mM:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.c(a5,j)
m=C.a.C(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.al(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.al(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.al(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.al(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.al(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
al:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.al(a.z,b)
return s}if(l===7){r=a.z
s=H.al(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.al(a.z,b)+">"
if(l===9){p=H.px(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pr(o,b)+">"):p}if(l===11)return H.mM(a,b,null)
if(l===12)return H.mM(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
px:function(a){var s,r=H.na(a)
if(r!=null)return r
s="minified:"+a
return s},
mA:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oO:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ll(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d6(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d5(a,b,q)
n[b]=o
return o}else return m},
oM:function(a,b){return H.mH(a.tR,b)},
oL:function(a,b){return H.mH(a.eT,b)},
ll:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mw(H.mu(a,null,b,c))
r.set(b,s)
return s},
fD:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mw(H.mu(a,b,c,!0))
q.set(c,r)
return r},
oN:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.li(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b3:function(a,b){b.a=H.pc
b.b=H.pd
return b},
d6:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aq(null,null)
s.y=b
s.cy=c
r=H.b3(a,s)
a.eC.set(c,r)
return r},
mz:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oJ(a,b,r,c)
a.eC.set(r,s)
return s},
oJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aN(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aq(null,null)
q.y=6
q.z=b
q.cy=c
return H.b3(a,q)},
lk:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oI(a,b,r,c)
a.eC.set(r,s)
return s},
oI:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aN(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dh(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dh(q.z))return q
else return H.ma(a,b)}}p=new H.aq(null,null)
p.y=7
p.z=b
p.cy=c
return H.b3(a,p)},
my:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oG(a,b,r,c)
a.eC.set(r,s)
return s},
oG:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aN(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d5(a,"lP",[b])
else if(b===t.P||b===t.T)return t.x}q=new H.aq(null,null)
q.y=8
q.z=b
q.cy=c
return H.b3(a,q)},
oK:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b3(a,s)
a.eC.set(q,r)
return r},
fC:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oF:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d5:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aq(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b3(a,r)
a.eC.set(p,q)
return q},
li:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b3(a,o)
a.eC.set(q,n)
return n},
mx:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fC(m)
if(j>0){s=l>0?",":""
r=H.fC(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oF(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b3(a,o)
a.eC.set(q,r)
return r},
lj:function(a,b,c,d){var s,r=b.cy+("<"+H.fC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oH(a,b,c,r,d)
a.eC.set(r,s)
return s},
oH:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b4(a,b,r,0)
m=H.de(a,c,r,0)
return H.lj(a,n,m,c!==m)}}l=new H.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b3(a,l)},
mu:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mw:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oy(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mv(a,r,h,g,!1)
else if(q===46)r=H.mv(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b2(a.u,a.e,g.pop()))
break
case 94:g.push(H.oK(a.u,g.pop()))
break
case 35:g.push(H.d6(a.u,5,"#"))
break
case 64:g.push(H.d6(a.u,2,"@"))
break
case 126:g.push(H.d6(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lh(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.d5(p,n,o))
else{m=H.b2(p,a.e,n)
switch(m.y){case 11:g.push(H.lj(p,m,o,a.n))
break
default:g.push(H.li(p,m,o))
break}}break
case 38:H.oz(a,g)
break
case 42:p=a.u
g.push(H.mz(p,H.b2(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lk(p,H.b2(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.my(p,H.b2(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.f2()
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
H.lh(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mx(p,H.b2(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lh(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oB(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b2(a.u,a.e,i)},
oy:function(a,b,c,d){var s,r,q=b-48
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
n=H.mA(s,o.z)[p]
if(n==null)H.E('No "'+p+'" in "'+H.oa(o)+'"')
d.push(H.fD(s,o,n))}else d.push(p)
return m},
oz:function(a,b){var s=b.pop()
if(0===s){b.push(H.d6(a.u,1,"0&"))
return}if(1===s){b.push(H.d6(a.u,4,"1&"))
return}throw H.b(P.fT("Unexpected extended operation "+H.t(s)))},
b2:function(a,b,c){if(typeof c=="string")return H.d5(a,c,a.sEA)
else if(typeof c=="number")return H.oA(a,b,c)
else return c},
lh:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b2(a,b,c[s])},
oB:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b2(a,b,c[s])},
oA:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.fT("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.fT("Bad index "+c+" for "+b.h(0)))},
N:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aN(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aN(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.N(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.N(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.N(a,b.z,c,d,e)
if(r===6)return H.N(a,b.z,c,d,e)
return r!==7}if(r===6)return H.N(a,b.z,c,d,e)
if(p===6){s=H.ma(a,d)
return H.N(a,b,c,s,e)}if(r===8){if(!H.N(a,b.z,c,d,e))return!1
return H.N(a,H.m9(a,b),c,d,e)}if(r===7){s=H.N(a,t.P,c,d,e)
return s&&H.N(a,b.z,c,d,e)}if(p===8){if(H.N(a,b,c,d.z,e))return!0
return H.N(a,b,c,H.m9(a,d),e)}if(p===7){s=H.N(a,b,c,t.P,e)
return s||H.N(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
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
if(!H.N(a,k,c,j,e)||!H.N(a,j,e,k,c))return!1}return H.mN(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mN(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pg(a,b,c,d,e)}return!1},
mN:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.N(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.N(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.N(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.N(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.N(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pg:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.N(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mA(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.N(a,H.fD(a,b,l[p]),c,r[p],e))return!1
return!0},
dh:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aN(a))if(r!==7)if(!(r===6&&H.dh(a.z)))s=r===8&&H.dh(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pM:function(a){var s
if(!H.aN(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aN:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mH:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f2:function f2(){this.c=this.b=this.a=null},
eY:function eY(){},
d4:function d4(a){this.a=a},
na:function(a){return v.mangledGlobalNames[a]},
pR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jS:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ly==null){H.pJ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.iP("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jf
if(o==null)o=$.jf=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.pO(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){o=$.jf
if(o==null)o=$.jf=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
nQ:function(a){if(a<0||a>4294967295)throw H.b(P.a7(a,0,4294967295,"length",null))
return J.nR(new Array(a))},
l3:function(a){if(a<0)throw H.b(P.c1("Length must be a non-negative integer: "+a))
return new Array(a)},
nR:function(a){return J.l4(a)},
l4:function(a){a.fixed$length=Array
return a},
nS:function(a,b){return J.nz(a,b)},
dg:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cj.prototype
return J.dK.prototype}if(typeof a=="string")return J.bc.prototype
if(a==null)return J.ck.prototype
if(typeof a=="boolean")return J.dJ.prototype
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.R)return a
return J.jS(a)},
bW:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.R)return a
return J.jS(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.R)return a
return J.jS(a)},
mX:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bL.prototype
return a},
b6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.R)return a
return J.jS(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dg(a).p(a,b)},
lD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mX(a).I(a,b)},
lE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bW(a).i(a,b)},
kZ:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n2(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jR(a).m(a,b,c)},
nx:function(a,b,c){return J.b6(a).fd(a,b,c)},
ny:function(a,b,c,d){return J.b6(a).fM(a,b,c,d)},
nz:function(a,b){return J.mX(a).aO(a,b)},
l_:function(a,b){return J.jR(a).M(a,b)},
dj:function(a,b){return J.jR(a).q(a,b)},
nA:function(a){return J.b6(a).gaM(a)},
l0:function(a){return J.dg(a).gG(a)},
aO:function(a){return J.jR(a).gY(a)},
aP:function(a){return J.bW(a).gk(a)},
nB:function(a,b){return J.b6(a).hy(a,b)},
dk:function(a){return J.dg(a).h(a)},
a:function a(){},
dJ:function dJ(){},
ck:function ck(){},
aS:function aS(){},
e6:function e6(){},
bL:function bL(){},
aD:function aD(){},
av:function av(){},
dM:function dM(){},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bA:function bA(){},
cj:function cj(){},
dK:function dK(){},
bc:function bc(){}},P={
op:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pz()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bU(new P.ja(q),1)).observe(s,{childList:true})
return new P.j9(q,s,r)}else if(self.setImmediate!=null)return P.pA()
return P.pB()},
oq:function(a){self.scheduleImmediate(H.bU(new P.jb(a),0))},
or:function(a){self.setImmediate(H.bU(new P.jc(a),0))},
os:function(a){P.lb(C.m,a)},
lb:function(a,b){var s=C.c.ak(a.a,1000)
return P.oC(s<0?0:s,b)},
mf:function(a,b){var s=C.c.ak(a.a,1000)
return P.oD(s<0?0:s,b)},
oC:function(a,b){var s=new P.d3()
s.dK(a,b)
return s},
oD:function(a,b){var s=new P.d3()
s.dL(a,b)
return s},
qP:function(a){return new P.bP(a,1)},
ov:function(){return C.X},
ow:function(a){return new P.bP(a,3)},
pn:function(a){return new P.d0(a)},
po:function(){var s,r
for(s=$.bS;s!=null;s=$.bS){$.dd=null
r=s.b
$.bS=r
if(r==null)$.dc=null
s.a.$0()}},
pu:function(){$.ls=!0
try{P.po()}finally{$.dd=null
$.ls=!1
if($.bS!=null)$.lC().$1(P.mS())}},
ps:function(a){var s=new P.eN(a),r=$.dc
if(r==null){$.bS=$.dc=s
if(!$.ls)$.lC().$1(P.mS())}else $.dc=r.b=s},
pt:function(a){var s,r,q,p=$.bS
if(p==null){P.ps(a)
$.dd=$.dc
return}s=new P.eN(a)
r=$.dd
if(r==null){s.b=p
$.bS=$.dd=s}else{q=r.b
s.b=q
$.dd=r.b=s
if(q==null)$.dc=s}},
me:function(a,b){var s=$.ay
if(s===C.f)return P.lb(a,b)
return P.lb(a,s.fQ(b))},
oi:function(a,b){var s=$.ay
if(s===C.f)return P.mf(a,b)
return P.mf(a,s.cX(b,t.W))},
mO:function(a,b,c,d,e){P.pt(new P.jF(d,e))},
pp:function(a,b,c,d){var s,r=$.ay
if(r===c)return d.$0()
$.ay=c
s=r
try{r=d.$0()
return r}finally{$.ay=s}},
pq:function(a,b,c,d,e){var s,r=$.ay
if(r===c)return d.$1(e)
$.ay=c
s=r
try{r=d.$1(e)
return r}finally{$.ay=s}},
ja:function ja(a){this.a=a},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
d3:function d3(){this.c=0},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b){this.a=a
this.b=b},
bQ:function bQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d0:function d0(a){this.a=a},
eN:function eN(a){this.a=a
this.b=null},
em:function em(){},
en:function en(){},
ju:function ju(){},
jF:function jF(a,b){this.a=a
this.b=b},
ji:function ji(){},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
nU:function(a,b){return new H.ap(a.ab("@<0>").by(b).ab("ap<1,2>"))},
nV:function(a,b,c){return H.pG(a,new H.ap(b.ab("@<0>").by(c).ab("ap<1,2>")))},
bC:function(a,b){return new H.ap(a.ab("@<0>").by(b).ab("ap<1,2>"))},
lU:function(a){return new P.cQ(a.ab("cQ<0>"))},
lg:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ox:function(a,b){var s=new P.cR(a,b)
s.c=a.e
return s},
nP:function(a,b,c){var s,r
if(P.lt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.af.push(a)
try{P.pm(a,s)}finally{if(0>=$.af.length)return H.c($.af,-1)
$.af.pop()}r=P.mc(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l2:function(a,b,c){var s,r
if(P.lt(a))return b+"..."+c
s=new P.a0(b)
$.af.push(a)
try{r=s
r.a=P.mc(r.a,a,", ")}finally{if(0>=$.af.length)return H.c($.af,-1)
$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lt:function(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
pm:function(a,b){var s,r,q,p,o,n,m,l=a.gY(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=H.t(l.gL(l))
b.push(s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gL(l);++j
if(!l.A()){if(j<=4){b.push(H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gL(l);++j
for(;l.A();p=o,o=n){n=l.gL(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.t(p)
r=H.t(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
lT:function(a,b,c){var s=P.nU(b,c)
a.q(0,new P.hX(s,b,c))
return s},
l8:function(a){var s,r={}
if(P.lt(a))return"{...}"
s=new P.a0("")
try{$.af.push(a)
s.a+="{"
r.a=!0
J.dj(a,new P.i0(r,s))
s.a+="}"}finally{if(0>=$.af.length)return H.c($.af,-1)
$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cQ:function cQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jh:function jh(a){this.a=a
this.c=this.b=null},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function ci(){},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(){},
m:function m(){},
cp:function cp(){},
i0:function i0(a,b){this.a=a
this.b=b},
Y:function Y(){},
fE:function fE(){},
cq:function cq(){},
bN:function bN(a,b){this.a=a
this.$ti=b},
ee:function ee(){},
cY:function cY(){},
cS:function cS(){},
d7:function d7(){},
d9:function d9(){},
ol:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.om(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
om:function(a,b,c,d){var s=a?$.nq():$.np()
if(s==null)return null
if(0===c&&d===b.length)return P.mk(s,b)
return P.mk(s,b.subarray(c,P.aX(c,d,b.length)))},
mk:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.b7(r)}return null},
lF:function(a,b,c,d,e,f){if(C.c.be(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
p2:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p1:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bW(a),r=0;r<p;++r){q=s.i(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
iZ:function iZ(){},
iY:function iY(){},
fY:function fY(){},
fZ:function fZ(){},
dt:function dt(){},
dw:function dw(){},
hh:function hh(){},
iW:function iW(){},
j_:function j_(){},
jt:function jt(a){this.b=0
this.c=a},
iX:function iX(a){this.a=a},
js:function js(a){this.a=a
this.b=16
this.c=0},
jZ:function(a,b){var s=H.m_(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
nN:function(a){if(a instanceof H.bs)return a.h(0)
return"Instance of '"+H.cz(a)+"'"},
dR:function(a,b,c){var s,r=c?J.l3(a):J.nQ(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hY:function(a,b){var s,r=[]
for(s=J.aO(a);s.A();)r.push(s.gL(s))
if(b)return r
return J.l4(r)},
nW:function(a,b){var s,r,q=J.l3(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
ep:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.aX(b,c,r)
return H.m0(b>0||c<r?s.slice(b,c):s)}if(t.c.b(a))return H.o7(a,b,P.aX(b,c,a.length))
return P.of(a,b,c)},
of:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a7(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a7(c,b,a.length,o,o))
r=J.aO(a)
for(q=0;q<b;++q)if(!r.A())throw H.b(P.a7(b,0,q,o,o))
p=[]
if(s)for(;r.A();)p.push(r.gL(r))
else for(q=b;q<c;++q){if(!r.A())throw H.b(P.a7(c,b,q,o,o))
p.push(r.gL(r))}return H.m0(p)},
o8:function(a){return new H.dL(a,H.nT(a,!1,!0,!1,!1,!1))},
mc:function(a,b,c){var s=J.aO(b)
if(!s.A())return a
if(c.length===0){do a+=H.t(s.gL(s))
while(s.A())}else{a+=H.t(s.gL(s))
for(;s.A();)a=a+c+H.t(s.gL(s))}return a},
eH:function(){var s=H.nZ()
if(s!=null)return P.ok(s)
throw H.b(P.w("'Uri.base' is not supported"))},
lq:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nv().b
s=s.test(b)}else s=!1
if(s)return b
r=c.gh3().c2(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aG(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nL:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dy:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a){return new P.ba(1000*a)},
hj:function(a){if(typeof a=="number"||H.jD(a)||null==a)return J.dk(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nN(a)},
fT:function(a){return new P.dn(a)},
c1:function(a){return new P.az(!1,null,null,a)},
e9:function(a,b){return new P.cA(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.cA(b,c,!0,a,d,"Invalid value")},
aX:function(a,b,c){if(0>a||a>c)throw H.b(P.a7(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.a7(b,a,c,"end",null))
return b}return c},
m2:function(a,b){if(a<0)throw H.b(P.a7(a,0,null,b,null))
return a},
L:function(a,b,c,d,e){var s=e==null?J.aP(b):e
return new P.dF(s,!0,a,c,"Index out of range")},
w:function(a){return new P.eF(a)},
iP:function(a){return new P.eC(a)},
aR:function(a){return new P.dv(a)},
v:function(a){return new P.f_(a)},
a3:function(a,b,c){return new P.hp(a,b,c)},
lA:function(a){H.pR(a)},
ok:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.K(a5,4)^58)*3|C.a.K(a5,0)^100|C.a.K(a5,1)^97|C.a.K(a5,2)^116|C.a.K(a5,3)^97)>>>0
if(s===0)return P.mh(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gdz()
else if(s===32)return P.mh(C.a.u(a5,5,a4),0,a3).gdz()}r=P.dR(8,0,!1)
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a8(a5,"..",n)))h=m>n+2&&C.a.a8(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a8(a5,"file",0)){if(p<=0){if(!C.a.a8(a5,"/",n)){g="file:///"
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
a5=C.a.aW(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a8(a5,"http",0)){if(i&&o+3===n&&C.a.a8(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.aW(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a8(a5,"https",0)){if(i&&o+4===n&&C.a.a8(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.aW(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.u(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.fk(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.oW(a5,0,q)
else{if(q===0)P.bR(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.oX(a5,d,p-1):""
b=P.oT(a5,p,o,!1)
i=o+1
if(i<n){a=H.m_(C.a.u(a5,i,n),a3)
a0=P.oV(a==null?H.E(P.a3("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oU(a5,n,m,a3,j,b!=null)
a2=m<l?P.ln(a5,m+1,l,a3):a3
return new P.bk(j,c,b,a0,a1,a2,l<a4?P.oS(a5,l+1,a4):a3)},
mj:function(a){var s=t.N
return C.b.ha(a.split("&"),P.bC(s,s),new P.iU(C.e))},
oj:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iR(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.W(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.jZ(C.a.u(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.c(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.jZ(C.a.u(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.c(j,q)
j[q]=o
return j},
mi:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.iS(a),c=new P.iT(d,a)
if(a.length<2)d.$1("address is too short")
s=[]
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.W(a,r)
if(n===58){if(r===b){++r
if(C.a.W(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gax(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oj(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.c(j,h)
j[h]=0
e=h+1
if(e>=16)return H.c(j,e)
j[e]=0
h+=2}else{e=C.c.aK(g,8)
if(h<0||h>=16)return H.c(j,h)
j[h]=e
e=h+1
if(e>=16)return H.c(j,e)
j[e]=g&255
h+=2}}return j},
mB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bR:function(a,b,c){throw H.b(P.a3(c,a,b))},
oV:function(a,b){if(a!=null&&a===P.mB(b))return null
return a},
oT:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.W(a,b)===91){s=c-1
if(C.a.W(a,s)!==93)P.bR(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oQ(a,r,s)
if(q<s){p=q+1
o=P.mG(a,C.a.a8(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mi(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.W(a,n)===58){q=C.a.bn(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mG(a,C.a.a8(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mi(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.oZ(a,b,c)},
oQ:function(a,b,c){var s=C.a.bn(a,"%",b)
return s>=b&&s<c?s:c},
mG:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.W(a,s)
if(p===37){o=P.lo(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.bR(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a0("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.W(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.a0("")
n=i}else n=i
n.a+=j
n.a+=P.lm(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.W(a,s)
if(o===37){n=P.lo(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a0("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.t,m)
m=(C.t[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a0("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.i,m)
m=(C.i[m]&1<<(o&15))!==0}else m=!1
if(m)P.bR(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.W(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.lm(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oW:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mD(C.a.K(a,b)))P.bR(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.K(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
if(!p)P.bR(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.oP(r?a.toLowerCase():a)},
oP:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oX:function(a,b,c){return P.d8(a,b,c,C.O,!1)},
oU:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.d8(a,b,c,C.u,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a7(s,"/"))s="/"+s
return P.oY(s,e,f)},
oY:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a7(a,"/"))return P.p_(a,!s||c)
return P.p0(a)},
ln:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.c1("Both query and queryParameters specified"))
return P.d8(a,b,c,C.j,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.q(0,new P.jq(new P.jr(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oS:function(a,b,c){return P.d8(a,b,c,C.j,!0)},
lo:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.W(a,b+1)
r=C.a.W(a,n)
q=H.jV(s)
p=H.jV(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aK(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aG(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
lm:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.K(k,a>>>4)
s[2]=C.a.K(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.fm(a,6*q)&63|r
if(o>=p)return H.c(s,o)
s[o]=37
m=o+1
l=C.a.K(k,n>>>4)
if(m>=p)return H.c(s,m)
s[m]=l
l=o+2
m=C.a.K(k,n&15)
if(l>=p)return H.c(s,l)
s[l]=m
o+=3}}return P.ep(s,0,null)},
d8:function(a,b,c,d,e){var s=P.mF(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mF:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.W(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lo(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.i,n)
n=(C.i[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.bR(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.W(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lm(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.t(m)
if(typeof l!=="number")return H.n0(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mE:function(a){if(C.a.a7(a,"."))return!0
return C.a.d7(a,"/.")!==-1},
p0:function(a){var s,r,q,p,o,n,m
if(!P.mE(a))return a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.A(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.F(s,"/")},
p_:function(a,b){var s,r,q,p,o,n
if(!P.mE(a))return!b?P.mC(a):a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gax(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gax(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.mC(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.F(s,"/")},
mC:function(a){var s,r,q,p=a.length
if(p>=2&&P.mD(C.a.K(a,0)))for(s=1;s<p;++s){r=C.a.K(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.b_(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.k,q)
q=(C.k[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oR:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.K(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.c1("Invalid URL encoding"))}}return s},
lp:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.K(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.P(C.a.u(a,b,c))}else{p=[]
for(q=a.length,o=b;o<c;++o){r=C.a.K(a,o)
if(r>127)throw H.b(P.c1("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.c1("Truncated URI"))
p.push(P.oR(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.W.c2(p)},
mD:function(a){var s=a|32
return 97<=s&&s<=122},
mh:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=[b-1]
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.K(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.K(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gax(j)
if(p!==44||r!==n+7||!C.a.a8(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.A.hi(0,a,m,s)
else{l=P.mF(a,m,s,C.j,!0)
if(l!=null)a=C.a.aW(a,m,s,l)}return new P.iQ(a,j,c)},
p7:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=new Array(22)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jz(h)
q=new P.jA()
p=new P.jB()
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
mP:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nw()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.c(m,d)
q=m[d]
p=C.a.K(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.c(e,n)
e[n]=r}return d},
U:function U(a,b){this.a=a
this.b=b},
ba:function ba(a){this.a=a},
he:function he(){},
hf:function hf(){},
J:function J(){},
dn:function dn(a){this.a=a},
ex:function ex(){},
e1:function e1(){},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function cA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dF:function dF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eF:function eF(a){this.a=a},
eC:function eC(a){this.a=a},
ek:function ek(a){this.a=a},
dv:function dv(a){this.a=a},
e4:function e4(){},
cG:function cG(){},
dx:function dx(a){this.a=a},
f_:function f_(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
dI:function dI(){},
a6:function a6(){},
R:function R(){},
a0:function a0(a){this.a=a},
iU:function iU(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jr:function jr(a,b){this.a=a
this.b=b},
jq:function jq(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
jA:function jA(){},
jB:function jB(){},
fk:function fk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
eT:function eT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
b5:function(a){var s,r,q,p,o
if(a==null)return null
s=P.bC(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.z)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mK:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jD(a))return a
if(t.f.b(a))return P.mT(a)
if(t.j.b(a)){s=[]
J.dj(a,new P.jx(s))
a=s}return a},
mT:function(a){var s={}
J.dj(a,new P.jG(s))
return s},
jl:function jl(){},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
jx:function jx(a){this.a=a},
jG:function jG(a){this.a=a},
fu:function fu(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
hn:function hn(){},
ho:function ho(){},
fi:function fi(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
dP:function dP(){},
aW:function aW(){},
e2:function e2(){},
i7:function i7(){},
eo:function eo(){},
i:function i(){},
aZ:function aZ(){},
ew:function ew(){},
f6:function f6(){},
f7:function f7(){},
fe:function fe(){},
ff:function ff(){},
fs:function fs(){},
ft:function ft(){},
fA:function fA(){},
fB:function fB(){},
fW:function fW(){},
dp:function dp(){},
fX:function fX(a){this.a=a},
dq:function dq(){},
aQ:function aQ(){},
e3:function e3(){},
eO:function eO(){},
cC:function cC(){},
ei:function ei(){},
fo:function fo(){},
fp:function fp(){}},W={
lI:function(){var s=document.createElement("canvas")
s.toString
return s},
hg:function(a){return"wheel"},
lQ:function(a){var s,r=document.createElement("input"),q=t.r.a(r)
try{q.type=a}catch(s){H.b7(s)}return q},
jg:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mt:function(a,b,c,d){var s=W.jg(W.jg(W.jg(W.jg(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
Z:function(a,b,c,d){var s=new W.eZ(a,b,c==null?null:W.mQ(new W.je(c),t.B),!1)
s.fw()
return s},
mQ:function(a,b){var s=$.ay
if(s===C.f)return a
return s.cX(a,b)},
j:function j(){},
fR:function fR(){},
dl:function dl(){},
dm:function dm(){},
b8:function b8(){},
b9:function b9(){},
au:function au(){},
h7:function h7(){},
F:function F(){},
c9:function c9(){},
h8:function h8(){},
am:function am(){},
aB:function aB(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
ca:function ca(){},
cb:function cb(){},
dz:function dz(){},
hd:function hd(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
I:function I(){},
f:function f(){},
d:function d(){},
ao:function ao(){},
bv:function bv(){},
dB:function dB(){},
dD:function dD(){},
aC:function aC(){},
hr:function hr(){},
bb:function bb(){},
cg:function cg(){},
bx:function bx(){},
bd:function bd(){},
hZ:function hZ(){},
i1:function i1(){},
bE:function bE(){},
dU:function dU(){},
i2:function i2(a){this.a=a},
dV:function dV(){},
i3:function i3(a){this.a=a},
aE:function aE(){},
dW:function dW(){},
ai:function ai(){},
eP:function eP(a){this.a=a},
r:function r(){},
cv:function cv(){},
aF:function aF(){},
e7:function e7(){},
eb:function eb(){},
ig:function ig(a){this.a=a},
ed:function ed(){},
aw:function aw(){},
eg:function eg(){},
aH:function aH(){},
eh:function eh(){},
aI:function aI(){},
el:function el(){},
io:function io(a){this.a=a},
ar:function ar(){},
aY:function aY(){},
ax:function ax(){},
aj:function aj(){},
eq:function eq(){},
er:function er(){},
iu:function iu(){},
aJ:function aJ(){},
bi:function bi(){},
ev:function ev(){},
iy:function iy(){},
aL:function aL(){},
iV:function iV(){},
eK:function eK(){},
b1:function b1(){},
bO:function bO(){},
eR:function eR(){},
cP:function cP(){},
f3:function f3(){},
cT:function cT(){},
fn:function fn(){},
fv:function fv(){},
l1:function l1(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
je:function je(a){this.a=a},
lf:function lf(a){this.$ti=a},
K:function K(){},
cf:function cf(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eS:function eS(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fg:function fg(){},
fh:function fh(){},
fj:function fj(){},
cZ:function cZ(){},
d_:function d_(){},
fl:function fl(){},
fm:function fm(){},
fr:function fr(){},
fw:function fw(){},
fx:function fx(){},
d1:function d1(){},
d2:function d2(){},
fy:function fy(){},
fz:function fz(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){}},K={fS:function fS(){},dE:function dE(){},aV:function aV(a){this.a=a},X:function X(a){this.a=a}},L={ej:function ej(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},et:function et(a,b,c){this.a=a
this.b=b
this.c=c},eu:function eu(a,b){this.b=a
this.c=b},iw:function iw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},iz:function iz(a,b){this.b=a
this.c=!1
this.a=b}},O={
lK:function(){return new O.bt([])},
bt:function bt(a){this.a=a
this.c=this.b=null},
cr:function cr(a){this.a=a
this.b=null},
dG:function dG(a,b,c,d,e,f,g,h,i){var _=this
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
_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=!1
_.r2=1
_.rx=null},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(a){this.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b},
hP:function hP(a){this.a=a},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(a){this.a=a},
hD:function hD(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
ht:function ht(a){this.a=a},
hs:function hs(a){this.a=a},
is:function is(){}},E={
ot:function(){var s=window.navigator.vendor
s.toString
if(C.a.a0(s,"Google"))return C.y
s=window.navigator.userAgent
s.toString
if(C.a.a0(s,"Firefox"))return C.o
s=window.navigator.appVersion
s.toString
if(C.a.a0(s,"Trident")||C.a.a0(s,"Edge"))return C.p
s=window.navigator.appName
s.toString
if(C.a.a0(s,"Microsoft"))return C.p
return C.z},
ou:function(){var s=window.navigator.appVersion
s.toString
if(C.a.a0(s,"Win"))return C.S
if(C.a.a0(s,"Mac"))return C.T
if(C.a.a0(s,"Linux"))return C.U
return C.V},
o9:function(a,b){var s
Date.now()
s=new E.ib(a,new P.U(Date.now(),!1),new P.U(Date.now(),!1),new O.cr([]),new O.cr([]),new O.cr([]),[null],P.bC(t.N,t.k))
s.dH(a,b)
return s},
oh:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.md(a,!0,!0,!0,!1)
s=W.lI()
r=s.style
r.width="100%"
r.height="100%"
J.nA(a).j(0,s)
return E.md(s,!0,!0,!0,!1)},
md:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.l.dB(a,"webgl2",P.nV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.b(P.v("Failed to get the rendering context for WebGL."))
s=E.o9(l,a)
H.jw(l.getParameter(3379))
H.jw(l.getParameter(34076))
m=[]
r=$.lO
if(r==null){q=E.ot()
E.ou()
r=$.lO=new E.jd(q)}p=new X.eI(a,m,r.a===C.o?0.16666666666666666:0.005555555555555556)
o=document
o.toString
m.push(W.Z(o,"contextmenu",p.geD(),!1))
m.push(W.Z(a,"focus",p.geJ(),!1))
m.push(W.Z(a,"blur",p.gex(),!1))
m.push(W.Z(o,"keyup",p.geN(),!1))
m.push(W.Z(o,"keydown",p.geL(),!1))
m.push(W.Z(a,"mousedown",p.geQ(),!1))
m.push(W.Z(a,"mouseup",p.geU(),!1))
m.push(W.Z(a,n,p.geS(),!1))
W.hg(a)
W.hg(a)
m.push(W.Z(a,W.hg(a),p.geW(),!1))
m.push(W.Z(o,n,p.geF(),!1))
m.push(W.Z(o,"mouseup",p.geH(),!1))
m.push(W.Z(o,"pointerlockchange",p.geY(),!1))
m.push(W.Z(a,"touchstart",p.gf6(),!1))
m.push(W.Z(a,"touchend",p.gf2(),!1))
m.push(W.Z(a,"touchmove",p.gf4(),!1))
m=new E.es(a,s,p,new P.U(Date.now(),!1))
m.cK()
return m},
h_:function h_(){},
bu:function bu(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
br:function br(a){this.b=a},
bI:function bI(a){this.b=a},
jd:function jd(a){this.a=a},
ib:function ib(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.y=0
_.cx=_.ch=_.z=null
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
es:function es(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.cx=!1
_.cy=d
_.db=0},
it:function it(a){this.a=a}},Z={
le:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.jC(c)),35044)
a.bindBuffer(b,null)
return new Z.eL(b,s)},
at:function(a){return new Z.cN(a)},
eL:function eL(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j8:function j8(a){this.a=a},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a){this.a=a},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.a=a},
pP:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="controls",b="modifiers",a=V.ob("Test 002"),a0=W.lI()
a0.className="pageLargeCanvas"
a0.id=e
a.a.appendChild(a0).toString
a.cW(["The inspection test is used to check that shapes are built correctly ","and for checking the data provided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."])
a.fL(["controls","shapes","scalars"])
a.cW(["\xab[Back to Tests|../]"])
a=document
s=a.getElementById(e)
if(s==null)H.E(P.v("Failed to find an element with the identifier, testCanvas."))
r=E.oh(s,!0,!0,!0,!1)
q=O.lK()
p=new E.bu(q)
q.bu(p.ghj(),p.ghm())
p.scq(0,d)
p.sb8(d)
q=new U.bw(V.bf(),[])
q.bu(q.gev(),q.gf0())
o=r.x
n=U.h6()
m=U.h6()
l=$.bj
if(l==null)l=$.bj=new V.a1(0,0)
l=new U.cK(n,m,new X.a4(!1,!1,!1),l,V.bf())
n.scn(0,!0)
n.sc8(6.283185307179586)
n.sca(0)
n.sU(0,0)
n.sc9(100)
n.sa2(0)
n.sc4(0.5)
k=l.gaI()
n.gE().j(0,k)
m.scn(0,!0)
m.sc8(6.283185307179586)
m.sca(0)
m.sU(0,0)
m.sc9(100)
m.sa2(0)
m.sc4(0.5)
m.gE().j(0,k)
n=new X.a4(!1,!1,!1)
if(!l.d.p(0,n)){j=l.d
l.d=n
l.R(new D.x(b,j,n))}if(!l.r){l.r=!0
l.R(new D.x("invertY",!1,!0))}l.b5(o)
q.j(0,l)
U.h6()
if($.bj==null)$.bj=new V.a1(0,0)
V.bf()
n=U.h6()
m=$.bj
if(m==null)m=$.bj=new V.a1(0,0)
m=new U.cJ(n,new X.a4(!1,!1,!1),m,V.bf())
n.scn(0,!0)
n.sc8(6.283185307179586)
n.sca(0)
n.sU(0,0)
n.sc9(100)
n.sa2(0)
n.sc4(0.2)
n.gE().j(0,m.gaI())
n=new X.a4(!0,!1,!1)
if(!m.c.p(0,n)){j=m.c
m.c=n
m.R(new D.x(b,j,n))}m.b5(o)
q.j(0,m)
n=new X.a4(!1,!1,!1)
m=new U.cL(n,V.bf())
l=new X.a4(!1,!1,!1)
if(!n.p(0,l)){m.b=l
m.R(new D.x(b,n,l))}m.b5(o)
q.j(0,m)
p.sb8(q)
q=V.mq()
o=V.du(0.7)
n=V.du(0.3)
m=V.du(0.5)
l=V.du(0.5)
i=new O.dG(q,new V.C(0.2,0.3,0.4,1),new V.C(0.1,0.2,0.3,1),o,n,m,l,new V.C(1,1,1,1),V.du(0.8))
i.saa(0.4)
q=O.lK()
o=new M.dA(q)
q.bu(o.gez(),o.geB())
h=X.nO(d)
g=new X.e5(1.0471975511965976,0.1)
g.sb8(d)
n=g.c
$.B().toString
if(!(Math.abs(n-1.0471975511965976)<1e-9)){g.c=1.0471975511965976
g.aE(new D.x("fov",n,1.0471975511965976))}n=g.d
$.B().toString
if(!(Math.abs(n-0.1)<1e-9)){g.d=0.1
g.aE(new D.x("near",n,0.1))}n=g.e
$.B().toString
if(!(Math.abs(n-2000)<1e-9)){g.e=2000
g.aE(new D.x("far",n,2000))}n=o.b
if(n!==g){if(n!=null)n.gE().H(0,o.gan())
j=o.b
o.b=g
g.gE().j(0,o.gan())
o.as(new D.x("camera",j,o.b))}n=o.c
if(n!==h){if(n!=null)n.gE().H(0,o.gan())
j=o.c
o.c=h
h.gE().j(0,o.gan())
o.as(new D.x("target",j,o.c))}o.sdu(d)
o.sdu(i)
q.j(0,p)
q=o.b
if(q!=null){f=V.aU(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
n=V.bf()
m=new U.c6(n)
if(!n.p(0,f))m.a=f
q.sb8(m)}q=r.d
if(q!==o){if(q!=null)q.gE().H(0,r.gcs())
r.d=o
o.gE().j(0,r.gcs())
r.ct()}s=a.getElementById(c)
if(s==null)H.E(P.v("Failed to find controls for CheckGroup"))
a=new V.h2(c,!0,s,[])
a.a3(0,"Filled",new Z.k6(i),!0)
a.a3(0,"Wire Frame",new Z.k7(i),!0)
a.n(0,"Vertices",new Z.k8(i))
a.n(0,"Normals",new Z.kj(i))
a.n(0,"Binormals",new Z.ku(i))
a.n(0,"Tangentals",new Z.kF(i))
a.n(0,"Face Centers",new Z.kO(i))
a.n(0,"Face Normals",new Z.kP(i))
a.n(0,"Face Binormals",new Z.kQ(i))
a.n(0,"Face Tangentals",new Z.kR(i))
a.n(0,"Colors",new Z.kS(i))
a.n(0,"Textures2D",new Z.k9(i))
a.n(0,"TexturesCube",new Z.ka(i))
a.n(0,"Weight",new Z.kb(i))
a.n(0,"Bend",new Z.kc(i))
a.a3(0,"Axis",new Z.kd(i),!0)
a.n(0,"AABB",new Z.ke(i))
a=new Z.kT(p)
q=V.m1("shapes")
q.a3(0,"Square",new Z.kf(a),!0)
q.n(0,"Cube",new Z.kg(a))
q.n(0,"Cuboid",new Z.kh(a))
q.n(0,"Cuboid+",new Z.ki(a))
q.n(0,"Disk",new Z.kk(a))
q.n(0,"Disk+",new Z.kl(a))
q.n(0,"Cylinder",new Z.km(a))
q.n(0,"Cylinder+",new Z.kn(a))
q.n(0,"Cone",new Z.ko(a))
q.n(0,"Cylindrical",new Z.kp(a))
q.n(0,"LatLonSphere",new Z.kq(a))
q.n(0,"LatLonSphere+",new Z.kr(a))
q.n(0,"IsoSphere",new Z.ks(a))
q.n(0,"IsoSphere+",new Z.kt(a))
q.n(0,"Sphere",new Z.kv(a))
q.n(0,"Sphere+",new Z.kw(a))
q.n(0,"Spherical",new Z.kx(a))
q.n(0,"Toroid",new Z.ky(a))
q.n(0,"Knot",new Z.kz(a))
q.n(0,"Grid",new Z.kA(a))
q.n(0,"Grid+",new Z.kB(a))
a=V.m1("scalars")
a.n(0,"0.01",new Z.kC(i))
a.n(0,"0.02",new Z.kD(i))
a.n(0,"0.04",new Z.kE(i))
a.n(0,"0.06",new Z.kG(i))
a.n(0,"0.08",new Z.kH(i))
a.n(0,"0.1",new Z.kI(i))
a.n(0,"0.2",new Z.kJ(i))
a.a3(0,"0.4",new Z.kK(i),!0)
a.n(0,"0.6",new Z.kL(i))
a.n(0,"0.8",new Z.kM(i))
a.n(0,"1.0",new Z.kN(i))
V.pS(r)},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
kj:function kj(a){this.a=a},
ku:function ku(a){this.a=a},
kF:function kF(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kT:function kT(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
k5:function k5(){},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
k4:function k4(){},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
k3:function k3(){},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
k2:function k2(){},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a}},D={
Q:function(){return new D.cd()},
h1:function h1(){},
cd:function cd(){var _=this
_.c=_.b=_.a=null
_.d=0},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
T:function T(){},
by:function by(){},
bz:function bz(){},
x:function x(a,b,c){this.c=a
this.d=b
this.e=c}},X={c5:function c5(a,b){this.a=a
this.b=b},dO:function dO(a,b){this.a=a
this.b=b},hU:function hU(a,b){this.c=a
this.d=b},co:function co(a,b,c){this.x=a
this.c=b
this.d=c},i_:function i_(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},bF:function bF(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},i4:function i4(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bG:function bG(a,b,c){this.x=a
this.c=b
this.d=c},e8:function e8(){},cH:function cH(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},ix:function ix(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eI:function eI(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nO:function(a){var s=new V.C(0,0,0,1),r=$.m5
if(r==null){r=V.m4(0,0,1,1)
$.m5=r}return new X.hq(s,r)},
hq:function hq(a,b){this.a=a
this.r=b
this.x=null},
e5:function e5(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iq:function iq(){}},V={
lL:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.bm(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:if(b<0)n=0
else n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.ah(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
if(b<0)m=0
else m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.ah(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
if(b<0)m=0
else m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.ah(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
if(b<0)l=0
else l=b>1?1:b
return new V.ah(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
if(b<0)l=0
else l=b>1?1:b
return new V.ah(n,m,l)
default:if(b<0)n=0
else n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.ah(n,m,l)}},
du:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.C(a,a,a,1)},
h4:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.C(s,r,q,1)},
lM:function(a){return new V.C(a.a,a.b,a.c,1)},
fP:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
pY:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.be(a-b,s)
return(a<0?a+s:a)+b},
q:function(a,b,c){$.B().toString
return C.a.ai(C.d.cl(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
jQ:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=c+b+1,r=0,q=0;q<4;++q){p=a[q]
$.B().toString
o=C.a.ai(C.d.cl(Math.abs(p-0)<1e-9?0:p,b),s)
r=Math.max(r,o.length)
l.push(o)}for(s=l.length,n=s-1;n>=0;--n,s=m){if(n>=s)return H.c(l,n)
s=C.a.ai(l[n],r)
m=l.length
if(n>=m)return H.c(l,n)
l[n]=s}return l},
bf:function(){var s=$.lV
return s==null?$.lV=V.aU(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aU:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.dT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l9:function(){var s=$.lW
return s==null?$.lW=new V.D(0,0,0):s},
lY:function(){var s=$.lX
return s==null?$.lX=new V.ab(0,0,0,0):s},
m4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ea(a,b,c,d)},
m8:function(){var s=$.m7
return s==null?$.m7=V.m6(0,0,0,0,0,0):s},
m6:function(a,b,c,d,e,f){return new V.cB(a,b,c,d,e,f)},
M:function(){var s=$.mp
return s==null?$.mp=new V.o(0,0,0):s},
ld:function(){var s=$.mm
return s==null?$.mm=new V.o(1,0,0):s},
eJ:function(){var s=$.mo
return s==null?$.mo=new V.o(0,0,1):s},
mq:function(){var s=$.ml
return s==null?$.ml=new V.o(0,0,-1):s},
on:function(a,b,c){return new V.o(a,b,c)},
oo:function(a){return new V.o(a.a,a.b,a.c)},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(){},
dT:function dT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
H:function H(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ea:function ea(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a1:function a1(a,b){this.a=a
this.b=b},
o:function o(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pS:function(a){P.oi(C.J,new V.kV(a))},
m1:function(a){var s=document.getElementById(a)
if(s==null)throw H.b(P.v("Failed to find "+a+" for RadioGroup"))
return new V.i9(a,!0,s)},
ob:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.b(P.v("The html document body was null."))
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
W.Z(n,"scroll",new V.ik(s),!1)
return new V.ii(o)},
h2:function h2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kV:function kV(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a}},U={
h6:function(){return new U.h5()},
h5:function h5(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
c6:function c6(a){this.a=a
this.b=null},
bw:function bw(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a5:function a5(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cK:function cK(a,b,c,d,e){var _=this
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
cL:function cL(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={dA:function dA(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
lc:function(a,b,c,d,e){var s=new A.iF([],a,c,e)
s.f=d
s.e=P.dR(d,0,!1)
return s},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a){this.a=a},
dH:function dH(a,b){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cD:function cD(){},
iD:function iD(){},
iK:function iK(a){this.a=a},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ey:function ey(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
ez:function ez(a,b,c){this.a=a
this.c=b
this.d=c},
eA:function eA(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
eB:function eB(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jH:function(a,b,c,d){var s=F.S()
F.da(s,b,c,d,a,1,0,0,1)
F.da(s,b,c,d,a,0,1,0,3)
F.da(s,b,c,d,a,0,0,1,2)
F.da(s,b,c,d,a,-1,0,0,0)
F.da(s,b,c,d,a,0,-1,0,0)
F.da(s,b,c,d,a,0,0,-1,3)
s.ae()
return s},
jy:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
da:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.o(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.o(s+a4,r+a2,q+a3)
o=new V.o(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.o(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jy(h)
j=F.jy(g)
a.aS(F.fQ(a0,a1,new F.jv(i,F.jy(f),F.jy(e),j,k,c),b))},
jN:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d==null)d=new F.jO()
if(a0<3)throw H.b(P.v("Must have 3 or more sizes for a disk."))
s=F.S()
r=b?-1:1
q=-6.283185307179586/a0
p=[]
o=s.gl()
n=new V.o(0,0,r).D()
p.push(o.fO(new V.ab(a,-1,-1,-1),new V.C(1,1,1,1),new V.D(0,0,c),new V.o(0,0,r),new V.H(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(o==null)o=s.a=new F.p(s,[])
n=new V.o(k,j,r).D()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
e=F.as(new V.ab(a,-1,-1,-1),null,new V.C(h,f,g,1),new V.D(k*i,j*i,c),new V.o(0,0,r),new V.H(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.j(0,e)
p.push(e)}s.gv().cU(p)
return s},
lw:function(a,b,c,d){return F.mU(!0,a,b,new F.jI(1,d),c)},
mU:function(a,b,c,d,e){var s
if(e<3)throw H.b(P.v("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.b(P.v("Must have 1 or more divisionss for a cylindrical shape."))
s=F.fQ(c,e,new F.jK(d),null)
s.ae()
s.bk()
if(b)s.aS(F.jN(3,!1,1,new F.jL(d),e))
s.aS(F.jN(1,!0,-1,new F.jM(d),e))
return s},
n4:function(a,b){var s=F.fQ(a,b,new F.k1(),null)
s.gv().br()
s.ae()
s.bk()
return s},
n3:function(a){var s=F.S(),r=Math.sqrt(5)/2+0.5,q=F.aa(s,new V.o(-1,r,0)),p=F.aa(s,new V.o(1,r,0)),o=-r,n=F.aa(s,new V.o(-1,o,0)),m=F.aa(s,new V.o(1,o,0)),l=F.aa(s,new V.o(0,-1,o)),k=F.aa(s,new V.o(0,1,o)),j=F.aa(s,new V.o(0,-1,r)),i=F.aa(s,new V.o(0,1,r)),h=F.aa(s,new V.o(r,0,1)),g=F.aa(s,new V.o(r,0,-1)),f=F.aa(s,new V.o(o,0,1)),e=F.aa(s,new V.o(o,0,-1))
F.O(s,q,e,k,a)
F.O(s,q,k,p,a)
F.O(s,q,p,i,a)
F.O(s,q,i,f,a)
F.O(s,q,f,e,a)
F.O(s,p,k,g,a)
F.O(s,k,e,l,a)
F.O(s,e,f,n,a)
F.O(s,f,i,j,a)
F.O(s,i,p,h,a)
F.O(s,m,g,l,a)
F.O(s,m,l,n,a)
F.O(s,m,n,j,a)
F.O(s,m,j,h,a)
F.O(s,m,h,g,a)
F.O(s,l,g,k,a)
F.O(s,n,l,e,a)
F.O(s,j,n,f,a)
F.O(s,h,j,i,a)
F.O(s,g,h,p,a)
s.dd(new F.cM(),new F.j2())
return s},
aa:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.D()
s=b.a
r=b.b
q=b.c
p=F.as(h,h,h,new V.D(s,r,q),b,h,h,h,0)
o=a.h5(p,new F.cM())
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
p.sa4(0,new V.C(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.sci(new V.H(j,i<0?-i:i))
a.gl().j(0,p)
return p},
O:function(a,b,c,d,e){var s,r,q,p,o,n,m
if(e<=0)a.gv().a3(0,b,d,c)
else{s=b.r
if(s==null)s=V.eJ()
r=c.r
if(r==null)r=V.eJ()
q=d.r
if(q==null)q=V.eJ()
p=F.aa(a,s.C(0,r).I(0,0.5))
o=F.aa(a,r.C(0,q).I(0,0.5))
n=F.aa(a,q.C(0,s).I(0,0.5))
m=e-1
F.O(a,b,p,n,m)
F.O(a,p,c,o,m)
F.O(a,o,n,p,m)
F.O(a,n,o,d,m)}},
lB:function(a,b,c){var s=F.jH(a,null,new F.kW(1,b==null?new F.kX():b),c)
s.bk()
return s},
pX:function(){return F.mV(15,30,0.5,1,new F.kY())},
pN:function(){return F.mV(12,120,0.3,1,new F.k0(3,2))},
mV:function(a,b,c,d,e){var s=F.fQ(a,b,new F.jJ(e,d,b,c),null)
s.ae()
s.bk()
return s},
n_:function(a,b,c){return F.fQ(c,a,new F.jT(b==null?new F.jU():b),null)},
fQ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.b(P.v("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.b(P.v("Must have 1 or more divisions of the height for a surface."))
s=F.S()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.p(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.as(e,e,new V.C(n,0,0,1),e,e,new V.H(p,1),e,e,0)
o.j(0,m)
c.$3(m,p,0)
r.push(m.c3(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.p(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.as(e,e,new V.C(h,g,f,1),e,e,new V.H(p,k),e,e,0)
i.j(0,m)
c.$3(m,p,l)
r.push(m.c3(d))}}s.gv().fN(a+1,b+1,r)
return s},
S:function(){return new F.a_()},
as:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.ad()
h=$.nr()
s=$.bq()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bp().a)!==0)q.r=e
if((r&$.bo().a)!==0)q.x=b
if((r&$.bZ().a)!==0)q.y=f
if((r&$.c_().a)!==0)q.z=g
if((r&$.ns().a)!==0)q.Q=c
if((r&$.c0().a)!==0)q.ch=i
if((r&$.bX().a)!==0)q.cx=a
return q},
jv:function jv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jO:function jO(){},
jI:function jI(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
k1:function k1(){},
kX:function kX(){},
kW:function kW(a,b){this.a=a
this.b=b},
kY:function kY(){},
k0:function k0(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU:function jU(){},
jT:function jT(a){this.a=a},
an:function an(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(){},
il:function il(){},
bB:function bB(){this.b=this.a=null},
hV:function hV(){},
iC:function iC(){},
cx:function cx(){this.a=null},
a_:function a_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.b=b},
ad:function ad(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j7:function j7(a){this.a=a},
j6:function j6(a){this.a=a},
p:function p(a,b){this.a=a
this.b=!1
this.c=b},
ae:function ae(a,b,c){this.b=a
this.c=b
this.d=c},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
ak:function ak(a,b){this.b=a
this.c=b},
j3:function j3(){},
cM:function cM(){},
j4:function j4(){},
i8:function i8(a,b){this.a=a
this.b=b},
j5:function j5(){},
j2:function j2(){},
i5:function i5(){},
b0:function b0(a){this.b=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l5.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.cy(a)},
h:function(a){return"Instance of '"+H.cz(a)+"'"}}
J.dJ.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ibl:1}
J.ck.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.aS.prototype={
gG:function(a){return 0},
h:function(a){return String(a)},
$ilS:1}
J.e6.prototype={}
J.bL.prototype={}
J.aD.prototype={
h:function(a){var s=a[$.nd()]
if(s==null)return this.dE(a)
return"JavaScript function for "+J.dk(s)}}
J.av.prototype={
ce:function(a,b){if(!!a.fixed$length)H.E(P.w("removeAt"))
if(b<0||b>=a.length)throw H.b(P.e9(b,null))
return a.splice(b,1)[0]},
H:function(a,b){var s
if(!!a.fixed$length)H.E(P.w("remove"))
for(s=0;s<a.length;++s)if(J.A(a[s],b)){a.splice(s,1)
return!0}return!1},
fK:function(a,b){if(!!a.fixed$length)H.E(P.w("addAll"))
this.dR(a,b)
return},
dR:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.aR(a))
for(s=0;s<r;++s)a.push(b[s])},
q:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.aR(a))}},
F:function(a,b){var s,r,q=a.length,p=P.dR(q,"",!1)
for(s=0;s<a.length;++s){r=H.t(a[s])
if(s>=q)return H.c(p,s)
p[s]=r}return p.join(b)},
hf:function(a){return this.F(a,"")},
h9:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.aR(a))}return s},
ha:function(a,b,c){return this.h9(a,b,c,t.z)},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
gh7:function(a){if(a.length>0)return a[0]
throw H.b(H.lR())},
gax:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.lR())},
a0:function(a,b){var s
for(s=0;s<a.length;++s)if(J.A(a[s],b))return!0
return!1},
h:function(a){return P.l2(a,"[","]")},
gY:function(a){return new J.ag(a,a.length)},
gG:function(a){return H.cy(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.E(P.w("set length"))
if(b>a.length)H.mI(a).c.a(null)
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.b(H.bV(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.E(P.w("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bV(a,b))
a[b]=c},
$ih:1,
$ie:1,
$il:1}
J.dM.prototype={}
J.ag.prototype={
gL:function(a){return H.a9(this).c.a(this.d)},
A:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.z(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bA.prototype={
aO:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbo(b)
if(this.gbo(a)===s)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
bm:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.w(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.w(""+a+".round()"))},
cl:function(a,b){var s
if(b>20)throw H.b(P.a7(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+s
return s},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
be:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dF:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cN(a,b)},
ak:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.w("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
aK:function(a,b){var s
if(a>0)s=this.cM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fm:function(a,b){if(b<0)throw H.b(H.df(b))
return this.cM(a,b)},
cM:function(a,b){return b>31?0:a>>>b},
$iy:1,
$ia2:1}
J.cj.prototype={$ik:1}
J.dK.prototype={}
J.bc.prototype={
W:function(a,b){if(b<0)throw H.b(H.bV(a,b))
if(b>=a.length)H.E(H.bV(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.b(H.bV(a,b))
return a.charCodeAt(b)},
C:function(a,b){return a+b},
aW:function(a,b,c,d){var s=P.aX(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a8:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a7(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a7:function(a,b){return this.a8(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.e9(b,null))
if(b>c)throw H.b(P.e9(b,null))
if(c>a.length)throw H.b(P.e9(c,null))
return a.substring(b,c)},
b_:function(a,b){return this.u(a,b,null)},
I:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ai:function(a,b){var s=b-a.length
if(s<=0)return a
return this.I(" ",s)+a},
hq:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.I(c,s)},
bn:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a7(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
d7:function(a,b){return this.bn(a,b,0)},
fV:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a7(c,0,s,null,null))
return H.n8(a,b,c)},
a0:function(a,b){return this.fV(a,b,0)},
aO:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
h:function(a){return a},
gG:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk:function(a){return a.length},
$in:1}
H.cl.prototype={
h:function(a){var s="LateInitializationError: "+this.a
return s}}
H.P.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.a.W(this.a,b)}}
H.h.prototype={}
H.bD.prototype={
gL:function(a){return H.a9(this).c.a(this.d)},
A:function(){var s,r=this,q=r.a,p=J.bW(q),o=p.gk(q)
if(r.b!==o)throw H.b(P.aR(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.M(q,s);++r.c
return!0}}
H.be.prototype={
gY:function(a){return new H.dS(J.aO(this.a),this.b)},
gk:function(a){return J.aP(this.a)},
M:function(a,b){return this.b.$1(J.l_(this.a,b))}}
H.cc.prototype={$ih:1}
H.dS.prototype={
A:function(){var s=this,r=s.b
if(r.A()){s.a=s.c.$1(r.gL(r))
return!0}s.a=null
return!1},
gL:function(a){return H.a9(this).Q[1].a(this.a)}}
H.cO.prototype={
gY:function(a){return new H.eM(J.aO(this.a),this.b)}}
H.eM.prototype={
A:function(){var s,r
for(s=this.a,r=this.b;s.A();)if(r.$1(s.gL(s)))return!0
return!1},
gL:function(a){var s=this.a
return s.gL(s)}}
H.ce.prototype={}
H.eE.prototype={
m:function(a,b,c){throw H.b(P.w("Cannot modify an unmodifiable list"))}}
H.bM.prototype={}
H.c7.prototype={
h:function(a){return P.l8(this)},
m:function(a,b,c){H.nK()},
$iG:1}
H.c8.prototype={
gk:function(a){return this.a},
c1:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.c1(0,b))return null
return this.cF(b)},
cF:function(a){return this.b[a]},
q:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cF(q))}}}
H.iA.prototype={
ah:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cw.prototype={
h:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dN.prototype={
h:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eD.prototype={
h:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i6.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fq.prototype={
h:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bs.prototype={
h:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nb(r==null?"unknown":r)+"'"},
ghH:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ir.prototype={}
H.im.prototype={
h:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nb(s)+"'"}}
H.c2.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c2))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.cy(this.a)
else s=typeof r!=="object"?J.l0(r):H.cy(r)
return(s^H.cy(this.b))>>>0},
h:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.cz(s)+"'")}}
H.ec.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.ap.prototype={
gk:function(a){return this.a},
gaf:function(a){return new H.cm(this)},
ghG:function(a){return H.nX(this.gaf(this),new H.hT(this))},
c1:function(a,b){var s=this.b
if(s==null)return!1
return this.e7(s,b)},
i:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bg(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bg(p,b)
q=r==null?n:r.b
return q}else return o.hd(b)},
hd:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cG(p,q.d8(a))
r=q.d9(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cz(s==null?q.b=q.bO():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cz(r==null?q.c=q.bO():r,b,c)}else q.he(b,c)},
he:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bO()
s=p.d8(a)
r=p.cG(o,s)
if(r==null)p.bT(o,s,[p.bP(a,b)])
else{q=p.d9(r,a)
if(q>=0)r[q].b=b
else r.push(p.bP(a,b))}},
q:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.aR(s))
r=r.c}},
cz:function(a,b,c){var s=this.bg(a,b)
if(s==null)this.bT(a,b,this.bP(b,c))
else s.b=c},
bP:function(a,b){var s=this,r=new H.hW(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
d8:function(a){return J.l0(a)&0x3ffffff},
d9:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.A(a[r].a,b))return r
return-1},
h:function(a){return P.l8(this)},
bg:function(a,b){return a[b]},
cG:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
ea:function(a,b){delete a[b]},
e7:function(a,b){return this.bg(a,b)!=null},
bO:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bT(r,s,r)
this.ea(r,s)
return r}}
H.hT.prototype={
$1:function(a){var s=this.a
return H.a9(s).Q[1].a(s.i(0,a))},
$S:function(){return H.a9(this.a).ab("2(1)")}}
H.hW.prototype={}
H.cm.prototype={
gk:function(a){return this.a.a},
gY:function(a){var s=this.a,r=new H.dQ(s,s.r)
r.c=s.e
return r}}
H.dQ.prototype={
gL:function(a){return H.a9(this).c.a(this.d)},
A:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.aR(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jW.prototype={
$1:function(a){return this.a(a)},
$S:52}
H.jX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.jY.prototype={
$1:function(a){return this.a(a)},
$S:43}
H.dL.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im3:1}
H.cs.prototype={$ics:1}
H.W.prototype={$iW:1}
H.bH.prototype={
gk:function(a){return a.length},
$iu:1}
H.bg.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$il:1}
H.ct.prototype={
m:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$il:1}
H.dX.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.dY.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.dZ.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.e_.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.e0.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.cu.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.bh.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aM(b,a,a.length)
return a[b]},
$ibh:1,
$icI:1}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
H.aq.prototype={
ab:function(a){return H.fD(v.typeUniverse,this,a)},
by:function(a){return H.oN(v.typeUniverse,this,a)}}
H.f2.prototype={}
H.eY.prototype={
h:function(a){return this.a}}
H.d4.prototype={}
P.ja.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:35}
P.j9.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:45}
P.jb.prototype={
$0:function(){this.a.$0()},
$S:14}
P.jc.prototype={
$0:function(){this.a.$0()},
$S:14}
P.d3.prototype={
dK:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bU(new P.jp(this,b),0),a)
else throw H.b(P.w("`setTimeout()` not found."))},
dL:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bU(new P.jo(this,a,Date.now(),b),0),a)
else throw H.b(P.w("Periodic timer."))},
$iiv:1}
P.jp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.jo.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dF(s,o)}q.c=p
r.d.$1(q)},
$S:14}
P.bP.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bQ.prototype={
gL:function(a){var s=this.c
if(s==null)return this.b
return s.gL(s)},
A:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.A())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bP){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aO(s)
if(o instanceof P.bQ){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d0.prototype={
gY:function(a){return new P.bQ(this.a())}}
P.eN.prototype={}
P.em.prototype={}
P.en.prototype={}
P.ju.prototype={}
P.jF.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.h(0)
throw s},
$S:0}
P.ji.prototype={
hA:function(a){var s,r,q,p=null
try{if(C.f===$.ay){a.$0()
return}P.pp(p,p,this,a)}catch(q){s=H.b7(q)
r=H.lx(q)
P.mO(p,p,this,s,r)}},
hB:function(a,b){var s,r,q,p=null
try{if(C.f===$.ay){a.$1(b)
return}P.pq(p,p,this,a,b)}catch(q){s=H.b7(q)
r=H.lx(q)
P.mO(p,p,this,s,r)}},
hC:function(a,b){return this.hB(a,b,t.z)},
fQ:function(a){return new P.jj(this,a)},
cX:function(a,b){return new P.jk(this,a,b)}}
P.jj.prototype={
$0:function(){return this.a.hA(this.b)},
$S:0}
P.jk.prototype={
$1:function(a){return this.a.hC(this.b,a)},
$S:function(){return this.c.ab("~(0)")}}
P.cQ.prototype={
gY:function(a){var s=new P.cR(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
a0:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e6(b)
return r}},
e6:function(a){var s=this.d
if(s==null)return!1
return this.bF(s[this.bB(a)],a)>=0},
j:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cC(s==null?q.b=P.lg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cC(r==null?q.c=P.lg():r,b)}else return q.dQ(0,b)},
dQ:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lg()
s=q.bB(b)
r=p[s]
if(r==null)p[s]=[q.bA(b)]
else{if(q.bF(r,b)>=0)return!1
r.push(q.bA(b))}return!0},
H:function(a,b){if((b&1073741823)===b)return this.f9(this.c,b)
else return this.f8(0,b)},
f8:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bB(b)
r=n[s]
q=o.bF(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cP(p)
return!0},
cC:function(a,b){if(a[b]!=null)return!1
a[b]=this.bA(b)
return!0},
f9:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cP(s)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&1073741823},
bA:function(a){var s,r=this,q=new P.jh(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cI()
return q},
cP:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cI()},
bB:function(a){return J.l0(a)&1073741823},
bF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.A(a[r].a,b))return r
return-1}}
P.jh.prototype={}
P.cR.prototype={
gL:function(a){return H.a9(this).c.a(this.d)},
A:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.aR(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.ci.prototype={}
P.hX.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:15}
P.cn.prototype={$ih:1,$ie:1,$il:1}
P.m.prototype={
gY:function(a){return new H.bD(a,this.gk(a))},
M:function(a,b){return this.i(a,b)},
q:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.i(a,s))
if(r!==this.gk(a))throw H.b(P.aR(a))}},
gda:function(a){return this.gk(a)===0},
hD:function(a,b){var s,r,q,p,o=this
if(o.gda(a)){s=J.l3(0)
return s}r=o.i(a,0)
q=P.dR(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.i(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s}return q},
cj:function(a){return this.hD(a,!0)},
h4:function(a,b,c,d){var s
H.bm(a).ab("m.E").a(d)
P.aX(b,c,this.gk(a))
for(s=b;s<c;++s)this.m(a,s,d)},
h:function(a){return P.l2(a,"[","]")}}
P.cp.prototype={}
P.i0.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:40}
P.Y.prototype={
q:function(a,b){var s,r,q
for(s=J.aO(this.gaf(a)),r=H.bm(a).ab("Y.V");s.A();){q=s.gL(s)
b.$2(q,r.a(this.i(a,q)))}},
gk:function(a){return J.aP(this.gaf(a))},
h:function(a){return P.l8(a)},
$iG:1}
P.fE.prototype={
m:function(a,b,c){throw H.b(P.w("Cannot modify unmodifiable map"))}}
P.cq.prototype={
i:function(a,b){return J.lE(this.a,b)},
m:function(a,b,c){J.kZ(this.a,b,c)},
q:function(a,b){J.dj(this.a,b)},
gk:function(a){return J.aP(this.a)},
h:function(a){return J.dk(this.a)},
$iG:1}
P.bN.prototype={}
P.ee.prototype={
h:function(a){return P.l2(this,"{","}")},
M:function(a,b){var s,r,q,p,o="index"
H.pC(b,o,t.S)
P.m2(b,o)
for(s=P.ox(this,this.r),r=H.a9(s).c,q=0;s.A();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.L(b,this,o,null,q))}}
P.cY.prototype={$ih:1,$ie:1}
P.cS.prototype={}
P.d7.prototype={}
P.d9.prototype={}
P.iZ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.b7(r)}return null},
$S:20}
P.iY.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.b7(r)}return null},
$S:20}
P.fY.prototype={
hi:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.aX(a3,a4,a2.length)
s=$.nu()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.K(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.jV(C.a.K(a2,k))
g=H.jV(C.a.K(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.c(s,f)
e=s[f]
if(e>=0){f=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a0("")
d=o}else d=o
c=d.a+=C.a.u(a2,p,q)
d.a=c+H.aG(j)
p=k
continue}}throw H.b(P.a3("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.u(a2,p,a4)
d=r.length
if(n>=0)P.lF(a2,m,a4,n,l,d)
else{b=C.c.be(d-1,4)+1
if(b===1)throw H.b(P.a3(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.aW(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lF(a2,m,a4,n,l,a)
else{b=C.c.be(a,4)
if(b===1)throw H.b(P.a3(a0,a2,a4))
if(b>1)a2=C.a.aW(a2,a4,a4,b===2?"==":"=")}return a2}}
P.fZ.prototype={}
P.dt.prototype={}
P.dw.prototype={}
P.hh.prototype={}
P.iW.prototype={
gh3:function(){return C.I}}
P.j_.prototype={
c2:function(a){var s,r,q,p=P.aX(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jt(r)
if(q.ek(a,0,p)!==p){C.a.W(a,p-1)
q.bV()}return new Uint8Array(r.subarray(0,H.p6(0,q.b,s)))}}
P.jt.prototype={
bV:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
fJ:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.c(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.c(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s&63|128
return!0}else{n.bV()
return!1}},
ek:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.K(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fJ(p,C.a.K(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bV()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.c(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.c(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p&63|128}}}return q}}
P.iX.prototype={
c2:function(a){var s=this.a,r=P.ol(s,a,0,null)
if(r!=null)return r
return new P.js(s).fW(a,0,null,!0)}}
P.js.prototype={
fW:function(a,b,c,d){var s,r,q,p,o=this,n=P.aX(b,c,J.aP(a))
if(b===n)return""
s=P.p1(a,b,n)
r=o.bC(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.p2(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bC:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.ak(b+c,2)
r=q.bC(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bC(a,s,c,d)}return q.fZ(a,b,c,d)},
fZ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.K("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.K(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aG(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aG(j)
break
case 65:g.a+=H.aG(j);--f
break
default:p=g.a+=H.aG(j)
g.a=p+H.aG(j)
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
g.a+=H.aG(a[l])}else g.a+=P.ep(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aG(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.U.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.U&&this.a===b.a&&!0},
aO:function(a,b){return C.c.aO(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.c.aK(s,30))&1073741823},
h:function(a){var s=this,r=P.nL(H.o5(s)),q=P.dy(H.o3(s)),p=P.dy(H.o_(s)),o=P.dy(H.o0(s)),n=P.dy(H.o2(s)),m=P.dy(H.o4(s)),l=P.nM(H.o1(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.ba.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
aO:function(a,b){return C.c.aO(this.a,b.a)},
h:function(a){var s,r,q,p=new P.hf(),o=this.a
if(o<0)return"-"+new P.ba(0-o).h(0)
s=p.$1(C.c.ak(o,6e7)%60)
r=p.$1(C.c.ak(o,1e6)%60)
q=new P.he().$1(o%1e6)
return""+C.c.ak(o,36e8)+":"+s+":"+r+"."+q}}
P.he.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.hf.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.J.prototype={}
P.dn.prototype={
h:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hj(s)
return"Assertion failed"}}
P.ex.prototype={}
P.e1.prototype={
h:function(a){return"Throw of null."}}
P.az.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
h:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbE()+o+m
if(!q.a)return l
s=q.gbD()
r=P.hj(q.b)
return l+s+": "+r}}
P.cA.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.dF.prototype={
gbE:function(){return"RangeError"},
gbD:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.eF.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.eC.prototype={
h:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ek.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dv.prototype={
h:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hj(s)+"."}}
P.e4.prototype={
h:function(a){return"Out of Memory"},
$iJ:1}
P.cG.prototype={
h:function(a){return"Stack Overflow"},
$iJ:1}
P.dx.prototype={
h:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f_.prototype={
h:function(a){return"Exception: "+this.a}}
P.hp.prototype={
h:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.K(d,o)
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
i=""}h=C.a.u(d,k,l)
return f+j+h+i+"\n"+C.a.I(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.t(e)+")"):f}}
P.e.prototype={
gk:function(a){var s,r=this.gY(this)
for(s=0;r.A();)++s
return s},
M:function(a,b){var s,r,q
P.m2(b,"index")
for(s=this.gY(this),r=0;s.A();){q=s.gL(s)
if(b===r)return q;++r}throw H.b(P.L(b,this,"index",null,r))},
h:function(a){return P.nP(this,"(",")")}}
P.dI.prototype={}
P.a6.prototype={
gG:function(a){return P.R.prototype.gG.call(C.L,this)},
h:function(a){return"null"}}
P.R.prototype={constructor:P.R,$iR:1,
p:function(a,b){return this===b},
gG:function(a){return H.cy(this)},
h:function(a){return"Instance of '"+H.cz(this)+"'"},
toString:function(){return this.h(this)}}
P.a0.prototype={
gk:function(a){return this.a.length},
h:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iU.prototype={
$2:function(a,b){var s,r,q,p=C.a.d7(b,"=")
if(p===-1){if(b!=="")J.kZ(a,P.lp(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.b_(b,p+1)
q=this.a
J.kZ(a,P.lp(s,0,s.length,q,!0),P.lp(r,0,r.length,q,!0))}return a},
$S:28}
P.iR.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:34}
P.iS.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:36}
P.iT.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jZ(C.a.u(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:38}
P.bk.prototype={
gbh:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.t(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.E(H.l7("_text"))}return o},
gG:function(a){var s=this,r=s.z
if(r==null){r=C.a.gG(s.gbh())
if(s.z==null)s.z=r
else r=H.E(H.l7("hashCode"))}return r},
gaU:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.bN(P.mj(r==null?"":r),t.Q)
if(s.Q==null)s.Q=r
else r=H.E(H.l7("queryParameters"))}return r},
gdA:function(){return this.b},
gc6:function(a){var s=this.c
if(s==null)return""
if(C.a.a7(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbq:function(a){var s=this.d
return s==null?P.mB(this.a):s},
gcd:function(a){var s=this.f
return s==null?"":s},
gd2:function(){var s=this.r
return s==null?"":s},
cg:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a7(s,"/"))s="/"+s
q=s
p=P.ln(null,0,0,b)
return new P.bk(n,l,j,k,q,p,o.r)},
gd3:function(){return this.c!=null},
gd6:function(){return this.f!=null},
gd4:function(){return this.r!=null},
h:function(a){return this.gbh()},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.R.b(b))if(q.a===b.gbt())if(q.c!=null===b.gd3())if(q.b===b.gdA())if(q.gc6(q)===b.gc6(b))if(q.gbq(q)===b.gbq(b))if(q.e===b.gdm(b)){s=q.f
r=s==null
if(!r===b.gd6()){if(r)s=""
if(s===b.gcd(b)){s=q.r
r=s==null
if(!r===b.gd4()){if(r)s=""
s=s===b.gd2()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ieG:1,
gbt:function(){return this.a},
gdm:function(a){return this.e}}
P.jr.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.lq(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.lq(C.h,b,C.e,!0)}},
$S:39}
P.jq.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aO(b),r=this.a;s.A();)r.$2(a,s.gL(s))},
$S:11}
P.iQ.prototype={
gdz:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bn(s,"?",m)
q=s.length
if(r>=0){p=P.d8(s,r+1,q,C.j,!1)
q=r}else p=n
m=o.c=new P.eT("data","",n,n,P.d8(s,m,q,C.u,!1),p,n)}return m},
h:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jz.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
C.R.h4(s,0,96,b)
return s},
$S:55}
P.jA.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.K(b,r)^96
if(q>=96)return H.c(a,q)
a[q]=c}},
$S:21}
P.jB.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.K(b,0),r=C.a.K(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.c(a,q)
a[q]=c}},
$S:21}
P.fk.prototype={
gd3:function(){return this.c>0},
gd5:function(){return this.c>0&&this.d+1<this.e},
gd6:function(){return this.f<this.r},
gd4:function(){return this.r<this.a.length},
gbt:function(){var s=this.x
return s==null?this.x=this.e5():s},
e5:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a7(r.a,"http"))return"http"
if(q===5&&C.a.a7(r.a,"https"))return"https"
if(s&&C.a.a7(r.a,"file"))return"file"
if(q===7&&C.a.a7(r.a,"package"))return"package"
return C.a.u(r.a,0,q)},
gdA:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gc6:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbq:function(a){var s,r=this
if(r.gd5())return P.jZ(C.a.u(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a7(r.a,"http"))return 80
if(s===5&&C.a.a7(r.a,"https"))return 443
return 0},
gdm:function(a){return C.a.u(this.a,this.e,this.f)},
gcd:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gd2:function(){var s=this.r,r=this.a
return s<r.length?C.a.b_(r,s+1):""},
gaU:function(){var s=this
if(s.f>=s.r)return C.Q
return new P.bN(P.mj(s.gcd(s)),t.Q)},
cg:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbt(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.gd5()?n.gbq(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a7(r,"/"))r="/"+r
p=P.ln(m,0,0,b)
q=n.r
o=q<j.length?C.a.b_(j,q+1):m
return new P.bk(l,i,s,h,r,p,o)},
gG:function(a){var s=this.y
return s==null?this.y=C.a.gG(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.h(0)},
h:function(a){return this.a},
$ieG:1}
P.eT.prototype={}
W.j.prototype={}
W.fR.prototype={
gk:function(a){return a.length}}
W.dl.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.dm.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.b8.prototype={$ib8:1}
W.b9.prototype={
dB:function(a,b,c){var s=a.getContext(b,P.mT(c))
return s},
$ib9:1}
W.au.prototype={
gk:function(a){return a.length}}
W.h7.prototype={
gk:function(a){return a.length}}
W.F.prototype={$iF:1}
W.c9.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.h8.prototype={}
W.am.prototype={}
W.aB.prototype={}
W.h9.prototype={
gk:function(a){return a.length}}
W.ha.prototype={
gk:function(a){return a.length}}
W.hb.prototype={
gk:function(a){return a.length}}
W.hc.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.ca.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.cb.prototype={
h:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
return r+H.t(s)+") "+H.t(this.gaA(a))+" x "+H.t(this.gaw(a))},
p:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.b6(b)
if(s===r.gbp(b)){s=a.top
s.toString
s=s===r.gbs(b)&&this.gaA(a)===r.gaA(b)&&this.gaw(a)===r.gaw(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.d.gG(r)
s=a.top
s.toString
return W.mt(r,C.d.gG(s),C.d.gG(this.gaA(a)),C.d.gG(this.gaw(a)))},
gcY:function(a){var s=a.bottom
s.toString
return s},
gcH:function(a){return a.height},
gaw:function(a){var s=this.gcH(a)
s.toString
return s},
gbp:function(a){var s=a.left
s.toString
return s},
gdt:function(a){var s=a.right
s.toString
return s},
gbs:function(a){var s=a.top
s.toString
return s},
gcS:function(a){return a.width},
gaA:function(a){var s=this.gcS(a)
s.toString
return s},
$iac:1}
W.dz.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.hd.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.eQ.prototype={
gda:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
i:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b]).toString},
j:function(a,b){this.a.appendChild(b).toString
return b},
gY:function(a){var s=this.cj(this)
return new J.ag(s,s.length)}}
W.I.prototype={
gaM:function(a){var s=a.children
s.toString
return new W.eQ(a,s)},
gd_:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ac(p,s,r,q,t.q)},
h:function(a){var s=a.localName
s.toString
return s},
$iI:1}
W.f.prototype={$if:1}
W.d.prototype={
fM:function(a,b,c,d){if(c!=null)this.dS(a,b,c,!1)},
dS:function(a,b,c,d){return a.addEventListener(b,H.bU(c,1),!1)},
$id:1}
W.ao.prototype={$iao:1}
W.bv.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1,
$ibv:1}
W.dB.prototype={
gk:function(a){return a.length}}
W.dD.prototype={
gk:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.hr.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.bb.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.cg.prototype={$icg:1}
W.bx.prototype={$ibx:1}
W.bd.prototype={$ibd:1}
W.hZ.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.i1.prototype={
gk:function(a){return a.length}}
W.bE.prototype={$ibE:1}
W.dU.prototype={
i:function(a,b){return P.b5(a.get(b))},
q:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b5(s.value[1]))}},
gaf:function(a){var s=[]
this.q(a,new W.i2(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Not supported"))},
$iG:1}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:11}
W.dV.prototype={
i:function(a,b){return P.b5(a.get(b))},
q:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b5(s.value[1]))}},
gaf:function(a){var s=[]
this.q(a,new W.i3(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Not supported"))},
$iG:1}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:11}
W.aE.prototype={$iaE:1}
W.dW.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.ai.prototype={$iai:1}
W.eP.prototype={
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b]).toString},
gY:function(a){var s=this.a.childNodes
return new W.cf(s,s.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.r.prototype={
hy:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nx(s,b,a)}catch(q){H.b7(q)}return a},
h:function(a){var s=a.nodeValue
return s==null?this.dD(a):s},
fd:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cv.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.aF.prototype={
gk:function(a){return a.length},
$iaF:1}
W.e7.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.eb.prototype={
i:function(a,b){return P.b5(a.get(b))},
q:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b5(s.value[1]))}},
gaf:function(a){var s=[]
this.q(a,new W.ig(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Not supported"))},
$iG:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:11}
W.ed.prototype={
gk:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.eg.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.aH.prototype={$iaH:1}
W.eh.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.aI.prototype={
gk:function(a){return a.length},
$iaI:1}
W.el.prototype={
i:function(a,b){return a.getItem(H.p4(b))},
m:function(a,b,c){a.setItem(b,c)},
q:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaf:function(a){var s=[]
this.q(a,new W.io(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$iG:1}
W.io.prototype={
$2:function(a,b){return this.a.push(a)},
$S:46}
W.ar.prototype={$iar:1}
W.aY.prototype={$iaY:1}
W.ax.prototype={$iax:1}
W.aj.prototype={$iaj:1}
W.eq.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.er.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.iu.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.aJ.prototype={$iaJ:1}
W.bi.prototype={$ibi:1}
W.ev.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.iy.prototype={
gk:function(a){return a.length}}
W.aL.prototype={}
W.iV.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.eK.prototype={
gk:function(a){return a.length}}
W.b1.prototype={
gh0:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.w("deltaY is not supported"))},
gh_:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.w("deltaX is not supported"))},
$ib1:1}
W.bO.prototype={
ff:function(a,b){var s=a.requestAnimationFrame(H.bU(b,1))
s.toString
return s},
eb:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eR.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.cP.prototype={
h:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
s=r+H.t(s)+") "
r=a.width
r.toString
r=s+H.t(r)+" x "
s=a.height
s.toString
return r+H.t(s)},
p:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.b6(b)
if(s===r.gbp(b)){s=a.top
s.toString
if(s===r.gbs(b)){s=a.width
s.toString
if(s===r.gaA(b)){s=a.height
s.toString
r=s===r.gaw(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gG(p)
s=a.top
s.toString
s=C.d.gG(s)
r=a.width
r.toString
r=C.d.gG(r)
q=a.height
q.toString
return W.mt(p,s,r,C.d.gG(q))},
gcH:function(a){return a.height},
gaw:function(a){var s=a.height
s.toString
return s},
gcS:function(a){return a.width},
gaA:function(a){var s=a.width
s.toString
return s}}
W.f3.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.cT.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.fn.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.fv.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ih:1,
$iu:1,
$ie:1,
$il:1}
W.l1.prototype={}
W.eZ.prototype={
fw:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.ny(s,this.c,r,!1)}}}
W.je.prototype={
$1:function(a){return this.a.$1(a)},
$S:8}
W.lf.prototype={}
W.K.prototype={
gY:function(a){return new W.cf(a,this.gk(a))}}
W.cf.prototype={
A:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lE(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gL:function(a){return H.a9(this).c.a(this.d)}}
W.eS.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fj.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fr.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
P.jl.prototype={
c5:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bd:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.jD(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.U)return new Date(a.a)
if(t.V.b(a))throw H.b(P.iP("structured clone of RegExp"))
if(t.L.b(a))return a
if(t.d.b(a))return a
if(t.I.b(a))return a
if(t.s.b(a))return a
if(t.o.b(a)||t.t.b(a)||t.M.b(a))return a
if(t.f.b(a)){s=n.c5(a)
r=n.b
q=r.length
if(s>=q)return H.c(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.dj(a,new P.jm(m,n))
return m.a}if(t.j.b(a)){s=n.c5(a)
m=n.b
if(s>=m.length)return H.c(m,s)
p=m[s]
if(p!=null)return p
return n.fX(a,s)}if(t.m.b(a)){s=n.c5(a)
r=n.b
q=r.length
if(s>=q)return H.c(r,s)
p=m.b=r[s]
if(p!=null)return p
o={}
o.toString
m.b=o
if(s>=q)return H.c(r,s)
r[s]=o
n.hb(a,new P.jn(m,n))
return m.b}throw H.b(P.iP("structured clone of other type"))},
fX:function(a,b){var s,r,q=J.bW(a),p=q.gk(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.c(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bd(q.i(a,r))
if(r>=o.length)return H.c(o,r)
o[r]=s}return o}}
P.jm.prototype={
$2:function(a,b){this.a.a[a]=this.b.bd(b)},
$S:15}
P.jn.prototype={
$2:function(a,b){this.a.b[a]=this.b.bd(b)},
$S:33}
P.jx.prototype={
$1:function(a){this.a.push(P.mK(a))},
$S:29}
P.jG.prototype={
$2:function(a,b){this.a[a]=P.mK(b)},
$S:15}
P.fu.prototype={
hb:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.dC.prototype={
gb1:function(){return new H.be(new H.cO(this.b,new P.hn()),new P.ho())},
q:function(a,b){C.b.q(P.hY(this.gb1(),!1),b)},
m:function(a,b,c){var s=this.gb1()
J.nB(s.b.$1(J.l_(s.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.aP(this.gb1().a)},
i:function(a,b){var s=this.gb1()
return s.b.$1(J.l_(s.a,b))},
gY:function(a){var s=P.hY(this.gb1(),!1)
return new J.ag(s,s.length)}}
P.hn.prototype={
$1:function(a){return t.h.b(a)},
$S:30}
P.ho.prototype={
$1:function(a){return t.h.a(a)},
$S:31}
P.fi.prototype={
gdt:function(a){return this.$ti.c.a(this.a+this.c)},
gcY:function(a){return this.$ti.c.a(this.b+this.d)},
h:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
p:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.b6(b)
if(s===r.gbp(b)){q=o.b
if(q===r.gbs(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gdt(b)&&p.a(q+o.d)===r.gcY(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.c.gG(r),p=s.b,o=C.c.gG(p),n=s.$ti.c
r=C.c.gG(n.a(r+s.c))
p=C.c.gG(n.a(p+s.d))
return H.og(H.ip(H.ip(H.ip(H.ip(0,q),o),r),p))}}
P.ac.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaA:function(a){return this.c},
gaw:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.dP.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.aW.prototype={$iaW:1}
P.e2.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.i7.prototype={
gk:function(a){return a.length}}
P.eo.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.i.prototype={
gaM:function(a){return new P.dC(a,new W.eP(a))}}
P.aZ.prototype={$iaZ:1}
P.ew.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.f6.prototype={}
P.f7.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.fs.prototype={}
P.ft.prototype={}
P.fA.prototype={}
P.fB.prototype={}
P.fW.prototype={
gk:function(a){return a.length}}
P.dp.prototype={
i:function(a,b){return P.b5(a.get(b))},
q:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b5(s.value[1]))}},
gaf:function(a){var s=[]
this.q(a,new P.fX(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Not supported"))},
$iG:1}
P.fX.prototype={
$2:function(a,b){return this.a.push(a)},
$S:11}
P.dq.prototype={
gk:function(a){return a.length}}
P.aQ.prototype={}
P.e3.prototype={
gk:function(a){return a.length}}
P.eO.prototype={}
P.cC.prototype={$icC:1}
P.ei.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.L(b,a,null,null,null))
s=P.b5(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.fo.prototype={}
P.fp.prototype={}
K.fS.prototype={
aQ:function(a,b){return!0},
h:function(a){return"all"}}
K.dE.prototype={
aQ:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)if(s[q].aQ(0,b))return!0
return!1},
h:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.z)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.h(0)}return q}}
K.aV.prototype={
aQ:function(a,b){return!this.dC(0,b)},
h:function(a){return"!["+this.bw(0)+"]"}}
K.X.prototype={
a1:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.v("May not create a Set with zero characters."))
s=new H.ap(t.J)
for(r=new H.bD(a,a.gk(a)),q=H.a9(r).c;r.A();)s.m(0,q.a(r.d),!0)
p=P.hY(s.gaf(s),!0)
if(!!p.immutable$list)H.E(P.w("sort"))
H.oe(p,J.pf())
this.a=p},
aQ:function(a,b){return C.b.a0(this.a,b)},
h:function(a){return P.ep(this.a,0,null)}}
L.ej.prototype={
F:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iz(this.a.O(0,b),[])
s.push(p)
return p},
h6:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
if(p.aQ(0,a))return p}return null},
h:function(a){return this.b},
cO:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.a0(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gaf(s)}s=J.aO(s==null?[]:s)
for(;s.A();){r=s.gL(s)
m+="\n"
q=n.d
if(q!=null)q.c.i(0,r)
m+="  -- "+r+" => []"
if(l.a0(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.z)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bw(0))}return m.charCodeAt(0)==0?m:m}}
L.et.prototype={
h:function(a){var s=H.n9(this.b,"\n","\\n"),r=H.n9(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eu.prototype={
h:function(a){return this.b}}
L.iw.prototype={
O:function(a,b){var s=this.a,r=s.i(0,b)
if(r==null){r=new L.ej(this,b,[])
s.m(0,b,r)}return r},
bc:function(a){var s,r=this.b,q=r.i(0,a)
if(q==null){s=t.N
q=new L.eu(a,P.bC(s,s))
r.m(0,a,q)}return q},
dv:function(a){return this.hE(a)},
hE:function(a){var s=this
return P.pn(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dv(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.a9(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a0.length!==0)h=C.b.ce(a0,0)
else{if(!r.A()){q=3
break}h=n.a(r.d)}b.push(h);++k
g=d==null
f=g?null:d.h6(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.ep(b,0,null)
throw H.b(P.v("Untokenizable string [state: "+H.t(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.E(P.w("removeRange"))
P.aX(0,i,b.length)
b.splice(0,i-0)
C.b.fK(a0,b)
b=[]
c=[]
d=s.d
q=!m.a0(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)c.push(h)
d=f.b
g=d.d
if(g!=null){e=P.ep(c,0,null)
g=d.d
if(g==null)l=null
else{g.c.i(0,e)
g=g.b
g=new L.et(g,e,k)
l=g}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.a0(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.ov()
case 1:return P.ow(o)}}},t.e)},
h:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.cO()+"\n")
for(q=this.a,q=q.ghG(q),q=q.gY(q);q.A();){s=q.gL(q)
if(s!=this.d)r.a+=H.t(s==null?null:s.cO())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.iz.prototype={
h:function(a){return this.b.b+": "+this.bw(0)}}
O.bt.prototype={
bu:function(a,b){this.b=null
this.c=a},
f_:function(a){return!0},
dI:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
gY:function(a){var s=this.a
return new J.ag(s,s.length)},
M:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
j:function(a,b){var s,r
this.f_([b])
s=this.a
r=s.length
s.push(b)
this.dI(r,[b])},
$ie:1}
O.cr.prototype={
gk:function(a){return this.a.length},
gE:function(){var s=this.b
return s==null?this.b=D.Q():s},
aD:function(){var s=this.b
return s==null?null:s.N(null)},
gao:function(a){var s=this.a
if(s.length>0)return C.b.gax(s)
else return V.bf()},
dq:function(a){this.a.push(a)
this.aD()},
cc:function(){var s=this.a
if(s.length>0){s.pop()
this.aD()}}}
E.h_.prototype={}
E.bu.prototype={
scq:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gE().H(0,s.gdj())
if(b!=null)b.gE().j(0,s.gdj())
s.ay(new D.x("shape",r,b))}},
sb8:function(a){var s,r,q=this
if(!J.A(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gE().H(0,q.gdh())
if(a!=null)a.gE().j(0,q.gdh())
r=q.r
q.ay(new D.x("mover",s,r))}},
aY:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aZ(0,b,q)
if(!J.A(o,q.x)){s=q.x
q.x=o
q.ay(new D.x("matrix",s,o))}for(p=q.y.a,p=new J.ag(p,p.length),r=H.a9(p).c;p.A();)r.a(p.d).aY(0,b)},
aV:function(a){var s,r,q,p,o,n,m,l=this,k="Inspection",j="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n",i=a.dx,h=l.x,g=i.a
if(h==null)g.push(i.gao(i))
else g.push(h.I(0,i.gao(i)))
i.aD()
a.dr(l.f)
s=C.b.gax(a.dy)
if(l.d!=null)if(s!=null){if(s.a==null){h=a.fr
r=h.i(0,k)
if(r==null){g=a.a
r=new A.dH(g,k)
r.c=j
r.d="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
q=r.cE(j,35633)
p=r.cE(r.d,35632)
o=g.createProgram()
o.toString
r.e=o
g.attachShader(r.gau(),q)
g.attachShader(r.gau(),p)
g.linkProgram(r.gau())
if(!H.mJ(g.getProgramParameter(r.gau(),35714))){n=g.getProgramInfoLog(r.gau())
if(n==null)n="undefined log error"
g.deleteProgram(r.e)
H.E(P.v("Failed to link shader: "+n))}r.fh()
r.fj()
r.x=r.gaL(r).i(0,"posAttr")
r.y=r.gaL(r).i(0,"normAttr")
r.z=r.gaL(r).i(0,"clrAttr")
r.Q=r.gaL(r).i(0,"binmAttr")
r.ch=t.u.a(r.gaz().i(0,"lightVec"))
g=t.F
r.cx=g.a(r.gaz().i(0,"ambientClr"))
r.cy=g.a(r.gaz().i(0,"diffuseClr"))
r.db=t.n.a(r.gaz().i(0,"weightScalar"))
g=t.v
r.dx=g.a(r.gaz().i(0,"viewMat"))
r.dy=g.a(r.gaz().i(0,"viewObjMatrix"))
r.fr=g.a(r.gaz().i(0,"projViewObjMatrix"))
if(h.c1(0,k))H.E(P.v('Shader cache already contains a shader by the name "Inspection".'))
h.m(0,k,r)}s.a=r}if(l.e==null){h=l.d
if(h!=null)h.ae()
h=l.d
if(h!=null){g=h.e
if(g!=null)++g.d
h.gv().c_()
h.gl().c_()
h=h.e
if(h!=null)h.aq(0)}h=l.d
if(h!=null){g=h.e
if(g!=null)++g.d
h.gl().fS()
h=h.e
if(h!=null)h.aq(0)}l.e=new Z.ds(P.bC(t.N,t.D))}h=s.a
if(h!=null){a.a.useProgram(h.e)
h.gaL(h).h2()
g=s.r2
o=h.db
if(o!=null)o.a.uniform1f(o.d,g)
g=s.b
o=h.ch
if(o!=null)o.a.uniform3f(o.d,g.a,g.b,g.c)
g=a.db
o=g.gao(g)
m=h.dx
if(m!=null)m.bv(o.ck(0,!0))
o=a.cx
if(o==null)o=a.cx=g.gao(g).I(0,i.gao(i))
m=h.dy
if(m!=null)m.bv(o.ck(0,!0))
o=a.ch
if(o==null){o=a.z
if(o==null){o=a.cy
g=a.z=o.gao(o).I(0,g.gao(g))}else g=o
g=a.ch=g.I(0,i.gao(i))}else g=o
h=h.fr
if(h!=null)h.bv(g.ck(0,!0))}h=l.e
if(h instanceof Z.ds){a.a.blendFunc(1,1)
if(l.c==null)s.fb(h,a,l)
else s.fc(h,a,l)}else l.e=null
h=s.a
if(h!=null){a.a.useProgram(null)
h.gaL(h).h1()}}for(h=l.y.a,h=new J.ag(h,h.length),g=H.a9(h).c;h.A();)g.a(h.d).aV(a)
a.dn()
i.cc()},
ay:function(a){var s=this.z
return s==null?null:s.N(a)},
P:function(){return this.ay(null)},
dk:function(a){this.e=null
this.ay(a)},
hp:function(){return this.dk(null)},
di:function(a){return this.ay(a)},
ho:function(){return this.di(null)},
dg:function(a){return this.ay(a)},
hl:function(){return this.dg(null)},
hk:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdf(),q=0;q<b.length;b.length===s||(0,H.z)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.cd()
n=o.a;(n==null?o.a=[]:n).push(r)}this.P()},
hn:function(a,b){var s,r
for(s=b.gY(b),r=this.gdf();s.A();)s.gL(s).gE().H(0,r)
this.P()},
h:function(a){return"Unnamed entity"}}
E.br.prototype={
h:function(a){return this.b}}
E.bI.prototype={
h:function(a){return this.b}}
E.jd.prototype={}
E.ib.prototype={
dH:function(a,b){var s=this
s.cy.gE().j(0,new E.ic(s))
s.db.gE().j(0,new E.id(s))
s.dx.gE().j(0,new E.ie(s))},
dr:function(a){var s=this.dy
return s.push(a==null?C.b.gax(s):a)},
dn:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.ic.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:5}
E.id.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.z=null},
$S:5}
E.ie.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:5}
E.es.prototype={
cu:function(a){this.ds()},
ct:function(){return this.cu(null)},
ghc:function(){var s,r=this,q=Date.now(),p=C.c.ak(P.lN(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.U(q,!1)
return s/p},
cK:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bm(r*o)
r=s.clientHeight
r.toString
p=C.d.bm(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.me(C.m,this.ghz())}},
ds:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.x.eb(s)
r=W.mQ(new E.it(this),t.H)
r.toString
C.x.ff(s,r)}},
hx:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cK()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.U(p,!1)
q.y=P.lN(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aD()
p=q.db
C.b.sk(p.a,0)
p.aD()
p=q.dx
C.b.sk(p.a,0)
p.aD()
p=q.dy
C.b.sk(p,0)
p.push(null)
m.aV(q)}}catch(o){s=H.b7(o)
r=H.lx(o)
P.lA("Error: "+H.t(s))
P.lA("Stack: "+H.t(r))
throw H.b(s)}}}
E.it.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hx()}},
$S:56}
Z.eL.prototype={}
Z.c4.prototype={
bY:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.b7(q)
r=P.v('Failed to bind buffer attribute "'+p.a.h(0)+'": '+H.t(s))
throw H.b(r)}},
h:function(a){var s=this
return"["+s.a.h(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.j8.prototype={}
Z.dr.prototype={
bl:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bY:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.c(r,s)
r[s].bY(a)}},
hF:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.c(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aV:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.c(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
dl:function(a){this.bY(a)
this.aV(a)
this.hF(a)},
h:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cz(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){n=s[q]
o.push("["+n.a.h(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.F(m,", ")+"\nAttrs:   "+C.b.F(o,", ")}}
Z.ds.prototype={}
Z.ch.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cz(this.c)+"'")+"]"}}
Z.cN.prototype={
gcr:function(a){var s=this.a,r=(s&$.bq().a)!==0?3:0
if((s&$.bp().a)!==0)r+=3
if((s&$.bo().a)!==0)r+=3
if((s&$.bZ().a)!==0)r+=2
if((s&$.c_().a)!==0)r+=3
if((s&$.bY().a)!==0)r+=3
if((s&$.di().a)!==0)r+=4
if((s&$.c0().a)!==0)++r
return(s&$.bX().a)!==0?r+4:r},
fP:function(a){var s,r=$.bq(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bo()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bZ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bY()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.di()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bX()
if((q&r.a)!==0)if(s===a)return r
return $.nt()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cN))return!1
return this.a===b.a},
h:function(a){var s=[],r=this.a
if((r&$.bq().a)!==0)s.push("Pos")
if((r&$.bp().a)!==0)s.push("Norm")
if((r&$.bo().a)!==0)s.push("Binm")
if((r&$.bZ().a)!==0)s.push("Txt2D")
if((r&$.c_().a)!==0)s.push("TxtCube")
if((r&$.bY().a)!==0)s.push("Clr3")
if((r&$.di().a)!==0)s.push("Clr4")
if((r&$.c0().a)!==0)s.push("Weight")
if((r&$.bX().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.F(s,"|")}}
D.h1.prototype={}
D.cd.prototype={
j:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
H:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.a0(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.H(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.a0(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.H(p,b)
s=p===!0||s}return s},
N:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.T():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.q(P.hY(p,!0),new D.hk(s))
r=q.b
if(r!=null){q.b=[]
C.b.q(r,new D.hl(s))}return!0},
aq:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.N(s)}}}}
D.hk.prototype={
$1:function(a){a.$1(this.a)},
$S:22}
D.hl.prototype={
$1:function(a){a.$1(this.a)},
$S:22}
D.T.prototype={}
D.by.prototype={}
D.bz.prototype={}
D.x.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.t(this.d)+" => "+H.t(this.e)}}
X.c5.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c5))return!1
if(this.a!==b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.dO.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!==b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.hU.prototype={}
X.co.prototype={}
X.i_.prototype={
b0:function(a,b){var s,r=this,q=Date.now(),p=r.x.C(0,new V.H(b.a,b.b)),o=r.a.gaN(),n=$.V
if(n==null)n=$.V=new V.H(0,0)
s=r.x
r.z=new P.U(q,!1)
r.x=p
return new X.bF(a,n,s,o,p)},
cb:function(a,b){this.r=a.a
return!1},
ba:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.N(this.b0(a,b))
return!0},
hu:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaN()
r=this.x
Date.now()
q.N(new X.bG(new V.a1(a.a,a.b),s,r))
return!0},
eP:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.N(new X.co(c,q.a.gaN(),b))
q.y=new P.U(s,!1)
s=$.V
q.x=s==null?$.V=new V.H(0,0):s}}
X.a4.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a4))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
h:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.F(s,"+")}}
X.bF.prototype={}
X.i4.prototype={
bG:function(a,b,c){var s=this,r=new P.U(Date.now(),!1),q=s.a.gaN(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bF(a,p,o,q,b)},
cb:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.N(this.bG(a,b,!0))
return!0},
ba:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.N(r.bG(a,b,!0))
return!0},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.N(this.bG(a,b,!1))
return!0},
hv:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaN()
Date.now()
r.N(new X.bG(new V.a1(a.a,a.b),s,b))
return!0},
gd0:function(){var s=this.b
return s==null?this.b=D.Q():s},
gdw:function(){var s=this.c
return s==null?this.c=D.Q():s},
gde:function(){var s=this.d
return s==null?this.d=D.Q():s}}
X.bG.prototype={}
X.e8.prototype={}
X.cH.prototype={}
X.ix.prototype={
b0:function(a,b){var s,r,q,p,o=this,n=new P.U(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.V
if(r==null){r=new V.H(0,0)
$.V=r
s=r}else s=r}r=o.a.gaN()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cH(q,p,r,s)},
ht:function(a){var s=this.b
if(s==null)return!1
s.N(this.b0(a,!0))
return!0},
hr:function(a){var s=this.c
if(s==null)return!1
s.N(this.b0(a,!0))
return!0},
hs:function(a){var s=this.d
if(s==null)return!1
s.N(this.b0(a,!1))
return!0}}
X.eI.prototype={
gaP:function(a){var s=this.b
return s==null?this.b=new X.hU(new X.a4(!1,!1,!1),P.lU(t.S)):s},
ga6:function(){var s,r=this.c
if(r==null){r=$.V
if(r==null){r=$.V=new V.H(0,0)
s=r}else s=r
r=this.c=new X.i4(this,r,s,new P.U(Date.now(),!1),new P.U(Date.now(),!1))}return r},
gag:function(){var s=this.d
if(s==null){s=$.V
if(s==null)s=$.V=new V.H(0,0)
s=this.d=new X.i_(this,s,new P.U(Date.now(),!1),new P.U(Date.now(),!1))}return s},
gaX:function(){var s,r=this.e
if(r==null){r=$.V
if(r==null){r=$.V=new V.H(0,0)
s=r}else s=r
r=this.e=new X.ix(this,r,s,new P.U(Date.now(),!1),new P.U(Date.now(),!1))}return r},
gaN:function(){var s=this.a
return V.m4(0,0,C.l.gd_(s).c,C.l.gd_(s).d)},
cD:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dO(p,new X.a4(s,r,q))},
aJ:function(a){var s,r,q=this.gaP(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a4(p,s,r)},
bU:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaP(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a4(s,r===!0,q===!0)},
av:function(a){var s,r,q,p
if(a==null){s=$.V
return s==null?$.V=new V.H(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.H(r-p,q-s)},
b2:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a1(r,s)},
bQ:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.z)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.am(n)
m=o.pageY
m.toString
C.d.am(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.am(l)
l=o.pageY
l.toString
l=C.d.am(l)
k=j.top
k.toString
s.push(new V.H(n-m,l-k))}return s},
at:function(a){var s,r,q,p
if(a==null)return new X.c5(0,new X.a4(!1,!1,!1))
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
return new X.c5(s,new X.a4(r,q,p))},
bH:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eK:function(a){return this.f=!0},
ey:function(a){return this.f=!1},
eE:function(a){if(this.f&&this.bH(a))a.preventDefault()},
eO:function(a){var s,r,q=this
if(!q.f)return
s=q.cD(a)
r=q.gaP(q)
r.c=s.b
r.d.j(0,s.a)},
eM:function(a){var s,r,q=this
if(!q.f)return
s=q.cD(a)
r=q.gaP(q)
r.c=s.b
r.d.H(0,s.a)},
eR:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aJ(a)
if(p.x){s=p.at(a)
r=p.b2(a)
if(p.gag().cb(s,r))a.preventDefault()
return}s=p.at(a)
q=p.av(a)
if(p.ga6().cb(s,q))a.preventDefault()},
eV:function(a){var s,r,q,p=this
p.aJ(a)
s=p.at(a)
if(p.x){r=p.b2(a)
if(p.gag().ba(s,r))a.preventDefault()
return}q=p.av(a)
if(p.ga6().ba(s,q))a.preventDefault()},
eI:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aJ(a)
s=p.at(a)
if(p.x){r=p.b2(a)
if(p.gag().ba(s,r))a.preventDefault()
return}q=p.av(a)
if(p.ga6().ba(s,q))a.preventDefault()}},
eT:function(a){var s,r,q,p=this
p.aJ(a)
s=p.at(a)
if(p.x){r=p.b2(a)
if(p.gag().b9(s,r))a.preventDefault()
return}q=p.av(a)
if(p.ga6().b9(s,q))a.preventDefault()},
eG:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aJ(a)
s=p.at(a)
if(p.x){r=p.b2(a)
if(p.gag().b9(s,r))a.preventDefault()
return}q=p.av(a)
if(p.ga6().b9(s,q))a.preventDefault()}},
eX:function(a){var s,r,q=this
q.aJ(a)
s=new V.a1(C.w.gh_(a),C.w.gh0(a)).I(0,q.Q)
if(q.x){if(q.gag().hu(s))a.preventDefault()
return}r=q.av(a)
if(q.ga6().hv(s,r))a.preventDefault()},
eZ:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.at(q.y)
r=q.av(q.y)
q.gag().eP(s,r,p)}},
f7:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bU(a)
s=r.bQ(a)
if(r.gaX().ht(s))a.preventDefault()},
f3:function(a){var s
this.bU(a)
s=this.bQ(a)
if(this.gaX().hr(s))a.preventDefault()},
f5:function(a){var s
this.bU(a)
s=this.bQ(a)
if(this.gaX().hs(s))a.preventDefault()}}
V.ah.prototype={
C:function(a,b){var s=this.a+b.a,r=this.b+b.b,q=this.c+b.c
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ah(s,r,q)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ah))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.C.prototype={
cj:function(a){var s=this
return[s.a,s.b,s.c,s.d]},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.hi.prototype={}
V.dT.prototype={
ck:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
I:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aU(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dT))return!1
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
h:function(a){return this.w()},
J:function(a){var s,r,q,p,o,n=this,m=V.jQ([n.a,n.e,n.y,n.cx],3,0),l=V.jQ([n.b,n.f,n.z,n.cy],3,0),k=V.jQ([n.c,n.r,n.Q,n.db],3,0),j=V.jQ([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
w:function(){return this.J("")}}
V.H.prototype={
ad:function(a){return new V.a1(a.a-this.a,a.b-this.b)},
C:function(a,b){return new V.H(this.a+b.a,this.b+b.b)},
T:function(a,b){var s
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.V
return s==null?$.V=new V.H(0,0):s}return new V.H(this.a/b,this.b/b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"},
w:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"}}
V.D.prototype={
C:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
aB:function(a,b){return new V.D(this.a-b.a,this.b-b.b,this.c-b.c)},
I:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
T:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.l9()
return new V.D(this.a/b,this.b/b,this.c/b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"},
w:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.ab.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ab))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.ea.prototype={
gap:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ea))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.cB.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cB))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+", "+V.q(s.e,3,0)+", "+V.q(s.f,3,0)+"]"}}
V.a1.prototype={
b7:function(a){return Math.sqrt(this.a5(this))},
a5:function(a){return this.a*a.a+this.b*a.b},
I:function(a,b){return new V.a1(this.a*b,this.b*b)},
T:function(a,b){var s
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.bj
return s==null?$.bj=new V.a1(0,0):s}return new V.a1(this.a/b,this.b/b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"}}
V.o.prototype={
b7:function(a){return Math.sqrt(this.a5(this))},
a5:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c7:function(a,b){return new V.o(V.fP(this.a,a.a,b),V.fP(this.b,a.b,b),V.fP(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.a5(s))
if(r===1)return s
return s.T(0,r)},
al:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.o(s*r-q*p,q*o-n*r,n*p-s*o)},
C:function(a,b){return new V.o(this.a+b.a,this.b+b.b,this.c+b.c)},
ar:function(a){return new V.o(-this.a,-this.b,-this.c)},
I:function(a,b){return new V.o(this.a*b,this.b*b,this.c*b)},
T:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.M()
return new V.o(this.a/b,this.b/b,this.c/b)},
dc:function(){$.B().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.o))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"},
w:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.b_.prototype={
b7:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
T:function(a,b){var s,r=this
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.mr
return s==null?$.mr=new V.b_(0,0,0,0):s}return new V.b_(r.a/b,r.b/b,r.c/b,r.d/b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b_))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
U.h5.prototype={
bz:function(a){var s=V.pY(a,this.c,this.b)
return s},
gE:function(){var s=this.y
return s==null?this.y=D.Q():s},
R:function(a){var s=this.y
return s==null?null:s.N(a)},
scn:function(a,b){},
sc8:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bz(s)}r.R(new D.x("maximumLocation",q,r.b))}},
sca:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bz(s)}r.R(new D.x("minimumLocation",q,r.c))}},
sU:function(a,b){var s,r=this
b=r.bz(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.R(new D.x("location",s,b))}},
sc9:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.R(new D.x("maximumVelocity",p,a))}},
sa2:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.R(new D.x("velocity",r,a))}},
sc4:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.R(new D.x("dampening",s,a))}},
aY:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sU(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa2(s)}}}
U.c6.prototype={
gE:function(){var s=this.b
return s==null?this.b=D.Q():s},
aZ:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c6))return!1
return this.a.p(0,b.a)},
h:function(a){return"Constant: "+this.a.J("          ")}}
U.bw.prototype={
gE:function(){var s=this.e
return s==null?this.e=D.Q():s},
R:function(a){var s=this.e
return s==null?null:s.N(a)},
a9:function(){return this.R(null)},
ew:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaI(),q=0;q<b.length;b.length===s||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.gE()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.R(new D.by())},
f1:function(a,b){var s,r
for(s=b.gY(b),r=this.gaI();s.A();)s.gL(s).gE().H(0,r)
this.R(new D.bz())},
aZ:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ag(o,o.length),n=H.a9(o).c,s=null;o.A();){r=n.a(o.d)
if(r!=null){q=r.aZ(0,b,c)
s=s==null?q:q.I(0,s)}}p.f=s==null?V.bf():s
o=p.e
if(o!=null)o.aq(0)}return p.f},
p:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bw))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(p>=q.length)return H.c(q,p)
if(!J.A(o,q[p]))return!1}return!0},
h:function(a){return"Group"},
$ia5:1}
U.a5.prototype={}
U.cJ.prototype={
gE:function(){var s=this.cy
return s==null?this.cy=D.Q():s},
R:function(a){var s=this.cy
return s==null?null:s.N(a)},
a9:function(){return this.R(null)},
b5:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga6().gd0().j(0,s.gbI())
a.ga6().gde().j(0,s.gbK())
a.ga6().gdw().j(0,s.gbM())
return!0},
bJ:function(a){var s=this,r=s.c,q=s.a
if(!r.p(0,q==null?null:q.gaP(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bL:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ad(a.d)
if(s.a5(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sU(0,-a.y.ad(r).I(0,2).T(0,s.gap()).a*2.5+p.z)
q.sa2(0)
p.Q=a.z.ad(r).I(0,2).T(0,s.gap())
p.a9()},
bN:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a5(s)>0.0001){r.b.sa2(r.Q.a*10*2.5)
r.a9()}},
aZ:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aY(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aU(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia5:1}
U.cK.prototype={
gE:function(){var s=this.fx
return s==null?this.fx=D.Q():s},
R:function(a){var s=this.fx
return s==null?null:s.N(a)},
a9:function(){return this.R(null)},
b5:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga6().gd0().j(0,q.gbI())
a.ga6().gde().j(0,q.gbK())
a.ga6().gdw().j(0,q.gbM())
s=a.gag()
r=s.f
s=r==null?s.f=D.Q():r
s.j(0,q.gel())
s=a.gag()
r=s.d
s=r==null?s.d=D.Q():r
s.j(0,q.gen())
s=a.gaX()
r=s.b
s=r==null?s.b=D.Q():r
s.j(0,q.gfu())
s=a.gaX()
r=s.d
s=r==null?s.d=D.Q():r
s.j(0,q.gfs())
s=a.gaX()
r=s.c
s=r==null?s.c=D.Q():r
s.j(0,q.gfp())
return!0},
aH:function(a){var s=a.b
if(this.r)s=-s
return new V.a1(a.a,s)},
bJ:function(a){var s=this
t.Z.a(a)
if(!s.d.p(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bL:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ad(a.d)
if(s.a5(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aH(a.y.ad(r).I(0,2).T(0,s.gap()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.aH(a.z.ad(r).I(0,2).T(0,s.gap()))
n.a9()},
bN:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a5(s)>0.0001){r.c.sa2(-r.dx.a*10*2.5)
r.b.sa2(-r.dx.b*10*2.5)
r.a9()}},
em:function(a){var s=this
if(t.G.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eo:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.p(0,a.x.b))return
s=a.c
r=a.d
q=n.aH(a.y.ad(r).I(0,2).T(0,s.gap()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.aH(a.z.ad(r).I(0,2).T(0,s.gap()))
n.a9()},
fv:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ft:function(a){var s,r,q,p,o,n=this
t.l.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ad(a.d)
if(s.a5(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aH(a.y.ad(r).I(0,2).T(0,s.gap()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.aH(a.z.ad(r).I(0,2).T(0,s.gap()))
n.a9()},
fq:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a5(s)>0.0001){r.c.sa2(-r.dx.a*10*2.5)
r.b.sa2(-r.dx.b*10*2.5)
r.a9()}},
aZ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aY(0,s)
n=p.b
n.aY(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aU(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.I(0,V.aU(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia5:1}
U.cL.prototype={
gE:function(){var s=this.r
return s==null?this.r=D.Q():s},
R:function(a){var s=this.r
return s==null?null:s.N(a)},
b5:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga6()
r=s.e
s=r==null?s.e=D.Q():r
r=this.geq()
s.j(0,r)
s=a.gag()
q=s.e;(q==null?s.e=D.Q():q).j(0,r)
return!0},
er:function(a){var s=this,r=s.b,q=s.a
if(!r.p(0,q==null?null:q.gaP(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.R(new D.x("zoom",r,q))}},
aZ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aU(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia5:1}
M.dA.prototype={
as:function(a){var s=this.y
return s==null?null:s.N(a)},
dJ:function(){return this.as(null)},
eA:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gan(),q=0;q<b.length;b.length===s||(0,H.z)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.cd()
n=o.a;(n==null?o.a=[]:n).push(r)}this.as(new D.by())},
eC:function(a,b){var s,r
for(s=b.gY(b),r=this.gan();s.A();)s.gL(s).gE().H(0,r)
this.as(new D.bz())},
sdu:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gE().H(0,r.gan())
s=r.d
r.d=a
if(a!=null)a.gE().j(0,r.gan())
r.as(new D.x("technique",s,r.d))}},
gE:function(){var s=this.y
return s==null?this.y=D.Q():s},
aV:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dr(d.d)
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
n=C.d.am(o.a*q)
m=C.d.am(o.b*p)
l=C.d.am(o.c*q)
a.c=l
o=C.d.am(o.d*p)
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
g=V.aU(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dq(g)
f=$.ne()
e=s.b
if(e!=null)f=e.a.I(0,f)
a.db.dq(f)}for(s=d.e.a,r=new J.ag(s,s.length),o=H.a9(r).c;r.A();)o.a(r.d).aY(0,a)
for(s=new J.ag(s,s.length),r=H.a9(s).c;s.A();)r.a(s.d).aV(a)
if(d.b!=null){a.cy.cc()
a.db.cc()}a.dn()}}
A.fU.prototype={}
A.fV.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h2:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
h1:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.dH.prototype={
cp:function(a,b){var s=this.cx
if(s!=null)s.co(a)
s=this.cy
if(s!=null)s.co(b)}}
A.cD.prototype={
gaL:function(a){var s=this.f
if(s==null)throw H.b(P.v("Must initialize the shader prior to getting the attributes."))
return s},
gaz:function(){var s=this.r
if(s==null)throw H.b(P.v("Must initialize the shader prior to getting the uniforms."))
return s},
gau:function(){var s=this.e
if(s==null)throw H.b(P.v(u.p))
return s},
cE:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mJ(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.v('Error compiling shader "'+H.t(q)+'": '+s))}return q},
fh:function(){var s,r,q,p,o=this,n=u.p,m=[],l=o.a,k=H.jw(l.getProgramParameter(o.gau(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.E(P.v(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.E(P.v(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.fU(l,q,p))}o.f=new A.fV(m)},
fj:function(){var s,r,q,p,o,n,m=this,l=u.p,k=[],j=m.a,i=H.jw(j.getProgramParameter(m.gau(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.E(P.v(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.E(P.v(l))
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
k.push(m.fY(o,n,q,p))}m.r=new A.iK(k)},
aG:function(a,b,c){var s=this.a
if(a===1)return new A.iE(s,b,c)
else return A.lc(s,this.e,b,a,c)},
e8:function(a,b,c){var s=this.a
if(a===1)return new A.iN(s,b,c)
else return A.lc(s,this.e,b,a,c)},
e9:function(a,b,c){var s=this.a
if(a===1)return new A.iO(s,b,c)
else return A.lc(s,this.e,b,a,c)},
bi:function(a,b){return new P.f_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fY:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aG(b,c,d)
case 5121:return s.aG(b,c,d)
case 5122:return s.aG(b,c,d)
case 5123:return s.aG(b,c,d)
case 5124:return s.aG(b,c,d)
case 5125:return s.aG(b,c,d)
case 5126:return new A.ey(s.a,c,d)
case 35664:return new A.iG(s.a,c,d)
case 35665:return new A.ez(s.a,c,d)
case 35666:return new A.eA(s.a,c,d)
case 35667:return new A.iH(s.a,c,d)
case 35668:return new A.iI(s.a,c,d)
case 35669:return new A.iJ(s.a,c,d)
case 35674:return new A.iL(s.a,c,d)
case 35675:return new A.iM(s.a,c,d)
case 35676:return new A.eB(s.a,c,d)
case 35678:return s.e8(b,c,d)
case 35680:return s.e9(b,c,d)
case 35670:throw H.b(s.bi("BOOL",c))
case 35671:throw H.b(s.bi("BOOL_VEC2",c))
case 35672:throw H.b(s.bi("BOOL_VEC3",c))
case 35673:throw H.b(s.bi("BOOL_VEC4",c))
default:throw H.b(P.v("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.iD.prototype={}
A.iK.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
h:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.z)(s),++p)q+=s[p].h(0)+"\n"
return q}}
A.iE.prototype={
h:function(a){return"Uniform1i: "+this.c}}
A.iH.prototype={
h:function(a){return"Uniform2i: "+this.c}}
A.iI.prototype={
h:function(a){return"Uniform3i: "+this.c}}
A.iJ.prototype={
h:function(a){return"Uniform4i: "+this.c}}
A.iF.prototype={
h:function(a){return"Uniform1iv: "+this.c}}
A.ey.prototype={
h:function(a){return"Uniform1f: "+this.c}}
A.iG.prototype={
h:function(a){return"Uniform2f: "+this.c}}
A.ez.prototype={
h:function(a){return"Uniform3f: "+this.c}}
A.eA.prototype={
co:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+this.c}}
A.iL.prototype={
h:function(a){return"Uniform1Mat2 "+this.c}}
A.iM.prototype={
h:function(a){return"UniformMat3: "+this.c}}
A.eB.prototype={
bv:function(a){var s=new Float32Array(H.jC(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
h:function(a){return"UniformMat4: "+this.c}}
A.iN.prototype={
h:function(a){return"UniformSampler2D: "+this.c}}
A.iO.prototype={
h:function(a){return"UniformSamplerCube: "+this.c}}
F.jv.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c7(q.b,b).c7(q.d.c7(q.c,b),c)
a.sU(0,new V.D(p.a,p.b,p.c))
a.sbb(p.D())
q=1-b
s=1-c
a.sbX(new V.ab(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:7}
F.jO.prototype={
$1:function(a){return 1},
$S:19}
F.jI.prototype={
$2:function(a,b){return V.fP(this.a,this.b,b)},
$S:10}
F.jK.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.fP(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sU(0,new V.D(q,s,o))
a.sbb(new V.o(q,s,o).D())
a.sbX(new V.ab(1-c,2+c,-1,-1))},
$S:7}
F.jL.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.jM.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.k1.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.o(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).D()
a.sU(0,new V.D(q.a,q.b,q.c))},
$S:7}
F.kX.prototype={
$2:function(a,b){return 0},
$S:10}
F.kW.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.n0(r)
s=a.f
r=(s!=null?new V.o(s.a,s.b,s.c):V.eJ()).D().I(0,this.a+r)
a.sU(0,new V.D(r.a,r.b,r.c))},
$S:7}
F.kY.prototype={
$1:function(a){return new V.D(Math.cos(a),Math.sin(a),0)},
$S:26}
F.k0.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.D(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:26}
F.jJ.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lD(l.$1(m),k)
k=J.lD(l.$1(m+3.141592653589793/n.c),k).aB(0,j)
s=new V.o(k.a,k.b,k.c).D()
r=V.ld()
q=s.al(!s.p(0,r)?V.eJ():r).D()
r=q.al(s).D()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.I(0,l*k)
k=q.I(0,o*k)
a.sU(0,j.C(0,new V.D(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:7}
F.jU.prototype={
$2:function(a,b){return 0},
$S:10}
F.jT.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sU(0,new V.D(q,p,this.a.$2(b,c)))
a.sbb(new V.o(q,p,1).D())
s=1-b
r=1-c
a.sbX(new V.ab(b*c,2+s*c,4+b*r,6+s*r))},
$S:7}
F.an.prototype={
aC:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.b(P.v(u.j))
if(r!==b.a||r!==c.a)throw H.b(P.v(u.i))
s.e=s.d=null
s.b3(a)
s.b4(b)
s.cL(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gv().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.P()}},
b6:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.H(r.gv().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.P()}}s.bR()
s.bS()
s.fa()},
b3:function(a){this.a=a
a.gv().b.push(this)},
b4:function(a){this.b=a
a.gv().c.push(this)},
cL:function(a){this.c=a
a.gv().d.push(this)},
bR:function(){var s=this.a
if(s!=null)C.b.H(s.gv().b,this)
this.a=null},
bS:function(){var s=this.b
if(s!=null)C.b.H(s.gv().c,this)
this.b=null},
fa:function(){var s=this.c
if(s!=null)C.b.H(s.gv().d,this)
this.c=null},
dU:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.M()
if(n!=null)q=q.C(0,n)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.dc())return p
return q.D()},
e2:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aB(0,n)
q=new V.o(o.a,o.b,o.c).D()
o=r.aB(0,n)
return q.al(new V.o(o.a,o.b,o.c).D()).D()},
c0:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.dU()
if(s==null){s=q.e2()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.P()}return!0},
dT:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.M()
if(n!=null)q=q.C(0,n)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.dc())return p
return q.D()},
e1:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.aB(0,e)
o=new V.o(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.ar(0)}else{n=(j-s.b)/p
j=b.aB(0,e).I(0,n).C(0,e).aB(0,h)
o=new V.o(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.ar(0)}m=l.d
if(m!=null){m=m.D()
o=m.al(o).D().al(m).D()}return o},
bZ:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.dT()
if(s==null){s=q.e1()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.P()}return!0},
aF:function(a,b){var s,r=b.a
if(r==null)throw H.b(P.v("May not replace a face's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.b(P.v("May not replace a face's vertex with a vertex attached to a different shape."))},
gfU:function(a){var s=this
if(J.A(s.a,s.b))return!0
if(J.A(s.b,s.c))return!0
if(J.A(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.w()},
J:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gt(p)
p=a+C.a.ai(C.c.h(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gt(o)
p=p+C.a.ai(C.c.h(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gt(o)
s=p+C.a.ai(C.c.h(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.J("")}}
F.hm.prototype={}
F.il.prototype={
aR:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gt(q)
s=c.a
if(q==(s==null?r:s.gt(s))){q=b.b
q=q==null?r:q.gt(q)
s=c.b
if(q==(s==null?r:s.gt(s))){q=b.c
q=q==null?r:q.gt(q)
s=c.c
q=q==(s==null?r:s.gt(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gt(q)
s=c.b
if(q==(s==null?r:s.gt(s))){q=b.b
q=q==null?r:q.gt(q)
s=c.c
if(q==(s==null?r:s.gt(s))){q=b.c
q=q==null?r:q.gt(q)
s=c.a
q=q==(s==null?r:s.gt(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gt(q)
s=c.c
if(q==(s==null?r:s.gt(s))){q=b.b
q=q==null?r:q.gt(q)
s=c.a
if(q==(s==null?r:s.gt(s))){q=b.c
q=q==null?r:q.gt(q)
s=c.b
q=q==(s==null?r:s.gt(s))}else q=!1
return q}else return!1}}}}
F.bB.prototype={
dG:function(a,b){var s=this,r=a.a
if(r==null)throw H.b(P.v(u.g))
if(r!==b.a)throw H.b(P.v(u.a))
s.b3(a)
s.b4(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gB(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.P()}},
b6:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.H(r.gB(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.P()}}s.bR()
s.bS()},
b3:function(a){this.a=a
a.gB(a).b.push(this)},
b4:function(a){this.b=a
a.gB(a).c.push(this)},
bR:function(){var s=this.a
if(s!=null)C.b.H(s.gB(s).b,this)
this.a=null},
bS:function(){var s=this.b
if(s!=null)C.b.H(s.gB(s).c,this)
this.b=null},
aF:function(a,b){var s,r=b.a
if(r==null)throw H.b(P.v("May not replace a line's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.b(P.v("May not replace a line's vertex with a vertex attached to a different shape."))},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.w()},
J:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gt(s)
s=a+C.a.ai(C.c.h(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gt(r)
return s+C.a.ai(C.c.h(r==null?-1:r),0)},
w:function(){return this.J("")}}
F.hV.prototype={}
F.iC.prototype={
aR:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gt(q)
s=c.a
if(q==(s==null?r:s.gt(s))){q=b.b
q=q==null?r:q.gt(q)
s=c.b
return q==(s==null?r:s.gt(s))}else{q=b.a
q=q==null?r:q.gt(q)
s=c.b
if(q==(s==null?r:s.gt(s))){q=b.b
q=q==null?r:q.gt(q)
s=c.a
return q==(s==null?r:s.gt(s))}else return!1}}}
F.cx.prototype={
bx:function(a){var s,r=this
if(a.a==null)throw H.b(P.v("May not create a point with a vertex which is not attached to a shape."))
r.fg(a)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gac(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.P()}},
fg:function(a){this.a=a
a.gac(a).b.push(this)},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.w()},
J:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gt(s)
return a+C.a.ai(C.c.h(s),0)},
w:function(){return this.J("")}}
F.a_.prototype={
gl:function(){var s=this.a
return s==null?this.a=new F.p(this,[]):s},
gac:function(a){var s=this.b
return s==null?this.b=new F.bK(this,[]):s},
gB:function(a){var s=this.c
return s==null?this.c=new F.cF(this,[]):s},
gv:function(){var s=this.d
return s==null?this.d=new F.cE(this,[]):s},
gE:function(){var s=this.e
return s==null?this.e=D.Q():s},
aS:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gl().V()
s=d.gl().c.length
for(b=a.gl().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.z)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
o.j(0,p.X())}d.gl().V()
for(b=a.gac(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.z)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.c(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bK(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,j)
new F.cx().bx(j)}for(b=a.gB(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.z)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.c(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.c(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cF(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,g)
new F.bB().dG(h,g)}for(b=a.gv().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.z)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.c(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.c(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.c(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cE(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,g)
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,e)
new F.an().aC(h,g,e)}b=d.e
if(b!=null)b.aq(0)},
ae:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gv().ae()||!1
if(!r.gl().ae())s=!1
q=r.e
if(q!=null)q.aq(0)
return s},
fT:function(){var s,r,q,p=this,o=p.cZ(),n=new V.o(o.d,o.e,o.f),m=Math.sqrt(n.a5(n))
if(m<=0)m=1
s=new F.i8(1/m,new V.D(o.a,o.b,o.c))
for(r=p.gl().c.length-1;r>=0;--r){n=p.a
n=(n==null?p.a=new F.p(p,[]):n).c
if(r>=n.length)return H.c(n,r)
q=n[r]
q.scm(0,s.hh(0,q))}},
cZ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gl().c.length
if(e<=0)return V.m8()
for(s=e-1,r=null;s>=0;--s){q=f.a
q=(q==null?f.a=new F.p(f,[]):q).c
if(s>=q.length)return H.c(q,s)
p=q[s].f
if(p!=null)if(r==null)r=V.m6(p.a,p.b,p.c,0,0,0)
else{o=p.a
n=p.b
m=p.c
l=r.d
k=r.a
if(o<k)l+=k-o
else{if(o>k+l)l=o-k
o=k}j=r.e
i=r.b
if(n<i)j+=i-n
else{if(n>i+j)j=n-i
n=i}h=r.f
g=r.c
if(m<g)h+=g-m
else{if(m>g+h)h=m-g
m=g}r=new V.cB(o,n,m,l,j,h)}}return r==null?V.m8():r},
h5:function(a,b){var s,r,q,p=this,o=p.gl().c.length
for(s=0;s<o;++s){r=p.a
r=(r==null?p.a=new F.p(p,[]):r).c
if(s>=r.length)return H.c(r,s)
q=r[s]
if(b.aR(0,a,q))return q}return null},
fe:function(a,b){var s,r,q,p,o,n,m,l=this
l.gl().j(0,a)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.z)(b),++r){q=b[r]
while(!0){p=q.d
if(p==null){p=q.d=new F.ae([],[],[])
o=p}else o=p
if(!(p.b.length+p.c.length+p.d.length>0))break
p=o.i(0,0)
o=p.a
if(o==null||p.b==null||p.c==null)H.E(P.v("May not replace a face's vertex when the point has been disposed."))
if(J.A(o,q)){p.aF(q,a)
o=p.a
if(o!=null){n=o.d
C.b.H((n==null?o.d=new F.ae([],[],[]):n).b,p)}p.a=null
p.a=a
o=a.d;(o==null?a.d=new F.ae([],[],[]):o).b.push(p)
m=1}else m=0
if(J.A(p.b,q)){p.aF(q,a)
o=p.b
if(o!=null){n=o.d
C.b.H((n==null?o.d=new F.ae([],[],[]):n).c,p)}p.b=null
p.b=a
o=a.d;(o==null?a.d=new F.ae([],[],[]):o).c.push(p);++m}if(J.A(p.c,q)){p.aF(q,a)
o=p.c
if(o!=null){n=o.d
C.b.H((n==null?o.d=new F.ae([],[],[]):n).d,p)}p.c=null
p.c=a
o=a.d;(o==null?a.d=new F.ae([],[],[]):o).d.push(p);++m}if(m>0){p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.N(null)}}}}while(!0){p=q.c
if(p==null){p=q.c=new F.ak([],[])
o=p}else o=p
if(!(p.b.length+p.c.length>0))break
p=o.i(0,0)
o=p.a
if(o==null||p.b==null)H.E(P.v("May not replace a line's vertex when the point has been disposed."))
if(J.A(o,q)){p.aF(q,a)
o=p.a
if(o!=null){n=o.c
C.b.H((n==null?o.c=new F.ak([],[]):n).b,p)}p.a=null
p.a=a
o=a.c;(o==null?a.c=new F.ak([],[]):o).b.push(p)
m=1}else m=0
if(J.A(p.b,q)){p.aF(q,a)
o=p.b
if(o!=null){n=o.c
C.b.H((n==null?o.c=new F.ak([],[]):n).c,p)}p.b=null
p.b=a
o=a.c;(o==null?a.c=new F.ak([],[]):o).c.push(p);++m}if(m>0){p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.N(null)}}}}while(!0){p=q.b
if(p==null){p=q.b=new F.b0([])
o=p}else o=p
if(!(p.b.length>0))break
p=o.b
if(0>=p.length)return H.c(p,0)
p=p[0]
o=p.a
if(o==null)H.E(P.v("May not replace a point's vertex when the point has been disposed."))
if(J.A(o,q)){if(a.a==null)H.E(P.v("May not replace a point's vertex with a vertex which is not attached to a shape."))
o=p.a
if(o!=null){n=o.b
C.b.H((n==null?o.b=new F.b0([]):n).b,p)}p.a=null
p.a=a
o=a.b;(o==null?a.b=new F.b0([]):o).b.push(p)
m=1}else m=0
if(m>0){p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.N(null)}}}}p=l.a;(p==null?l.a=new F.p(l,[]):p).H(0,q)}},
dd:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
s=m.gl().c.slice(0)
for(;s.length!==0;){r=C.b.gh7(s)
C.b.ce(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(a.aR(0,r,o)){q.push(o)
C.b.ce(s,p)}}if(q.length>1){n=b.aS(q)
if(n!=null){m.fe(n,q)
s.push(n)}}}m.gl().V()
m.gB(m).br()
m.gv().br()
m.gac(m).hw()
m.gB(m).cf(new F.iC())
m.gv().cf(new F.il())
l=m.e
if(l!=null)l.aq(0)},
bk:function(){this.dd(new F.cM(),new F.i5())},
fR:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=34962,d={},c=g.gl().c.length,b=a1.a,a=(b&$.bq().a)!==0?1:0
if((b&$.bp().a)!==0)++a
if((b&$.bo().a)!==0)++a
if((b&$.bZ().a)!==0)++a
if((b&$.c_().a)!==0)++a
if((b&$.bY().a)!==0)++a
if((b&$.di().a)!==0)++a
if((b&$.c0().a)!==0)++a
if((b&$.bX().a)!==0)++a
s=a1.gcr(a1)
r=P.dR(c*s,0,!1)
d.a=0
q=P.nW(a,new F.ih(d,g,a1,s*4,c,s,r))
b=a0.a
p=b.createBuffer()
p.toString
b.bindBuffer(e,p)
b.bufferData(e,new Float32Array(H.jC(r)),35044)
b.bindBuffer(e,f)
o=new Z.dr(new Z.eL(e,p),[],q)
if(g.gac(g).b.length!==0){n=[]
m=0
while(!0){p=g.b
if(p==null){p=g.b=new F.bK(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.c(p,m)
p=p[m].a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}p=p.e}n.push(p==null?0:p);++m}j=Z.le(b,34963,n)
o.b.push(new Z.ch(0,n.length,j))}if(g.gB(g).b.length!==0){n=[]
m=0
while(!0){p=g.c
if(p==null){p=g.c=new F.cF(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.c(p,m)
i=p[m]
p=i.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}p=p.e}n.push(p==null?0:p)
p=i.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}p=p.e}n.push(p==null?0:p);++m}j=Z.le(b,34963,n)
o.b.push(new Z.ch(1,n.length,j))}if(g.gv().b.length!==0){n=[]
m=0
while(!0){p=g.d
if(p==null){p=g.d=new F.cE(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.c(p,m)
h=p[m]
p=h.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}p=p.e}n.push(p==null?0:p)
p=h.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}p=p.e}n.push(p==null?0:p)
p=h.c
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).V()}p=p.e}n.push(p==null?0:p);++m}j=Z.le(b,34963,n)
o.b.push(new Z.ch(4,n.length,j))}return o},
h:function(a){var s=this,r="   ",q=[]
if(s.gl().c.length!==0){q.push("Vertices:")
q.push(s.gl().J(r))}if(s.gac(s).b.length!==0){q.push("Points:")
q.push(s.gac(s).J(r))}if(s.gB(s).b.length!==0){q.push("Lines:")
q.push(s.gB(s).J(r))}if(s.gv().b.length!==0){q.push("Faces:")
q.push(s.gv().J(r))}return C.b.F(q,"\n")},
P:function(){var s=this.e
return s==null?null:s.N(null)},
$ila:1}
F.ih.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fP(a),f=g.gcr(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.p(o,[]):m).c
if(n>=m.length)return H.c(m,n)
l=m[n].hg(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.c(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c4(g,f,d*4,h.d)},
$S:41}
F.cE.prototype={
a3:function(a,b,c,d){var s,r=this.a
r.gl().j(0,b)
r.gl().j(0,c)
r.gl().j(0,d)
s=new F.an()
r=b.a
if(r==null)H.E(P.v(u.j))
if(r!=c.a||r!=d.a)H.E(P.v(u.i))
s.b3(b)
s.b4(c)
s.cL(d)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gv().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.P()}return s},
cU:function(a){var s,r,q,p,o,n,m,l=[],k=a.length
if(k>0){s=a[0]
for(r=this.a,q=2;q<k;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
n=r.a;(n==null?r.a=new F.p(r,[]):n).j(0,s)
n=r.a;(n==null?r.a=new F.p(r,[]):n).j(0,p)
n=r.a;(n==null?r.a=new F.p(r,[]):n).j(0,o)
m=new F.an()
m.aC(s,p,o)
l.push(m)}}return l},
fN:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.c(c,q)
k=c[q];++q
if(q>=l)return H.c(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.c(c,i)
h=c[i]
if(r<0||r>=l)return H.c(c,r)
g=c[r]
l=s.a
if(n){(l==null?s.a=new F.p(s,[]):l).j(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,h)
f=new F.an()
f.aC(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,g)
f=new F.an()
f.aC(k,h,g)
e.push(f)}else{(l==null?s.a=new F.p(s,[]):l).j(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,g)
f=new F.an()
f.aC(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,g)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,k)
f=new F.an()
f.aC(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gk:function(a){return this.b.length},
cf:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gl().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.p(s,[]):q).c
if(r>=q.length)return H.c(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.ae([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.ae([],[],[]):q).i(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.aR(0,n,(q==null?p.d=new F.ae([],[],[]):q).i(0,l))){n.b6()
break}}}}},
br:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.c(s,r)
q=s[r]
if(q.gfU(q))q.b6()}},
ae:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.z)(s),++p)if(!s[p].c0())q=!1
return q},
c_:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.z)(s),++p)if(!s[p].bZ())q=!1
return q},
h:function(a){return this.w()},
J:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(a))
return C.b.F(p,"\n")},
w:function(){return this.J("")}}
F.cF.prototype={
n:function(a,b,c){var s,r=this.a
r.gl().j(0,b)
r.gl().j(0,c)
r=new F.bB()
s=b.a
if(s==null)H.E(P.v(u.g))
if(s!=c.a)H.E(P.v(u.a))
r.b3(b)
r.b4(c)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gB(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.P()}return r},
gk:function(a){return this.b.length},
cf:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gl().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.p(s,[]):q).c
if(r>=q.length)return H.c(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.ak([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.ak([],[]):q).i(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.aR(0,n,(q==null?p.c=new F.ak([],[]):q).i(0,l))){n.b6()
break}}}}},
br:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.c(s,r)
q=s[r]
if(J.A(q.a,q.b))q.b6()}},
h:function(a){return this.w()},
J:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.c(q,s)
r.push(q[s].J(a+(""+s+". ")))}return C.b.F(r,"\n")},
w:function(){return this.J("")}}
F.bK.prototype={
gk:function(a){return this.b.length},
hw:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.c(s,r)
q=s[r]
p=q.a
o=p==null
if(o)n=null
else{m=p.b
m=(m==null?p.b=new F.b0([]):m).b.length
n=m}if((n==null?0:n)>1){if(!o){p=p.a
if(p!=null){o=p.b
C.b.H((o==null?p.b=new F.bK(p,[]):o).b,q)}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.N(null)}}}p=q.a
if(p!=null){o=p.b
C.b.H((o==null?p.b=new F.b0([]):o).b,q)}q.a=null}}},
h:function(a){return this.w()},
J:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(a))
return C.b.F(p,"\n")},
w:function(){return this.J("")}}
F.ad.prototype={
c3:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.as(s.cx,p,m,r,q,o,n,a,l)},
X:function(){return this.c3(null)},
gac:function(a){var s=this.b
return s==null?this.b=new F.b0([]):s},
gB:function(a){var s=this.c
return s==null?this.c=new F.ak([],[]):s},
gv:function(){var s=this.d
return s==null?this.d=new F.ae([],[],[]):s},
gt:function(a){var s=this.a
if(s!=null)s.gl().V()
return this.e},
sU:function(a,b){var s
if(!J.A(this.f,b)){this.f=b
s=this.a
if(s!=null)s.P()}},
saT:function(a){var s
a=a==null?null:a.D()
if(!J.A(this.r,a)){this.r=a
s=this.a
if(s!=null)s.P()}},
sS:function(a){var s
a=a==null?null:a.D()
if(!J.A(this.x,a)){this.x=a
s=this.a
if(s!=null)s.P()}},
sci:function(a){var s
if(!J.A(this.y,a)){this.y=a
s=this.a
if(s!=null)s.P()}},
sbb:function(a){var s
if(!J.A(this.z,a)){this.z=a
s=this.a
if(s!=null)s.P()}},
sa4:function(a,b){var s
if(!J.A(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.P()}},
scm:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.P()}},
sbX:function(a){var s
if(!J.A(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.P()}},
hg:function(a){var s,r,q,p,o=this,n=null
if(a.p(0,$.bq())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.p(0,$.bp())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.p(0,$.bo())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.p(0,$.bZ())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.p(0,$.c_())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.p(0,$.bY())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.p(0,$.di())){s=o.Q
s=s==null?n:s.cj(0)
return s==null?[1,1,1,1]:s}else if(a.p(0,$.c0()))return[o.ch]
else if(a.p(0,$.bX())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c0:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.M()
p.gv().q(0,new F.j7(o))
p.r=o.a.D()
if(r){s.P()
o=s.e
if(o!=null)o.aq(0)}return!0},
bZ:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.M()
p.gv().q(0,new F.j6(o))
p.x=o.a.D()
if(r){s.P()
o=s.e
if(o!=null)o.aq(0)}return!0},
d1:function(a){var s,r,q,p,o,n=this,m=n.gB(n).b.length
for(s=0;s<m;++s){r=n.c
r=(r==null?n.c=new F.ak([],[]):r).b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.b
if(r==null)r=null
else{p=r.a
if(p!=null){o=p.a;(o==null?p.a=new F.p(p,[]):o).V()}r=r.e}p=a.a
if(p!=null){o=p.a;(o==null?p.a=new F.p(p,[]):o).V()}if(r===a.e)return q}return null},
h8:function(a){var s=this.d1(a)
if(s!=null)return s
return a.d1(this)},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.w()},
J:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.a.ai(C.c.h(q.e),0))
s=q.f
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.w()
n.push(s==null?o:s)
n.push(V.q(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.F(n,", ")
return a+"{"+r+"}"},
w:function(){return this.J("")}}
F.j7.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.C(0,r)}},
$S:3}
F.j6.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.C(0,r)}},
$S:3}
F.p.prototype={
V:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
j:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.v("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.P()
return!0},
cV:function(a,b,c,d,e,f,g){var s=F.as(a,null,b,c,d,e,f,g,0)
this.j(0,s)
return s},
fO:function(a,b,c,d,e,f){return this.cV(a,b,c,d,e,f,null)},
bj:function(a,b,c,d,e,f){return this.cV(a,b,c,null,d,e,f)},
bW:function(a,b,c){var s=null,r=F.as(s,s,s,new V.D(a,b,c),s,s,s,s,0)
this.j(0,r)
return r},
gk:function(a){return this.c.length},
H:function(a,b){var s,r=this.a
if(b.a!==r)return!1
if(b.gac(b).b.length===0){s=b.gB(b)
if(s.b.length===0&&s.c.length===0){s=b.gv()
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)throw H.b(P.v("May not remove a vertex without first making it empty."))
b.a=null
C.b.H(this.c,b)
r.P()
return this.b=!0},
ae:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)s[q].c0()
return!0},
c_:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)s[q].bZ()
return!0},
fS:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.D()
if(!J.A(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.N(null)}}}}}return!0},
h:function(a){return this.w()},
J:function(a){var s,r,q,p
this.V()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.z)(r),++p)s.push(r[p].J(a))
return C.b.F(s,"\n")},
w:function(){return this.J("")}}
F.ae.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.c(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.c(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.c(r,b)
return r[b]},
q:function(a,b){var s=this
C.b.q(s.b,b)
C.b.q(s.c,new F.j0(s,b))
C.b.q(s.d,new F.j1(s,b))},
h:function(a){return this.w()},
w:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(""))
return C.b.F(p,"\n")}}
F.j0.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)},
$S:3}
F.j1.prototype={
$1:function(a){var s=this.a
if(!J.A(a.a,s)&&!J.A(a.b,s))this.b.$1(a)},
$S:3}
F.ak.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
h:function(a){return this.w()},
w:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(""))
return C.b.F(p,"\n")}}
F.j3.prototype={}
F.cM.prototype={
aR:function(a,b,c){return J.A(b.f,c.f)}}
F.j4.prototype={}
F.i8.prototype={
hh:function(a,b){var s,r,q,p,o=b.f
if(o==null)return 0
s=this.b
r=s.a-o.a
q=s.b-o.b
p=s.c-o.c
return Math.sqrt(r*r+q*q+p*p)*this.a}}
F.j5.prototype={}
F.j2.prototype={
aS:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null
for(s=a8.length,r=a7,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a8[f]
d=e.f
if(d!=null){m=m==null?d:new V.D(m.a+d.a,m.b+d.b,m.c+d.c);++l}c=e.r
if(c!=null)n=n==null?c:new V.o(n.a+c.a,n.b+c.b,n.c+c.c)
b=e.x
if(b!=null)o=o==null?b:new V.o(o.a+b.a,o.b+b.b,o.c+b.c)
a=e.y
if(a!=null){q=q==null?a:new V.H(q.a+a.a,q.b+a.b);++j}a0=e.z
if(a0!=null){r=r==null?a0:new V.o(r.a+a0.a,r.b+a0.b,r.c+a0.c);++i}a1=e.Q
if(a1!=null){a2=a1.a
a3=a1.b
a4=a1.c
a5=a1.d
if(p==null){a2=[a2,a3,a4,a5]
p=new V.b_(a2[0],a2[1],a2[2],a2[3])}else{a2=[a2,a3,a4,a5]
a3=a2[0]
a4=a2[1]
a5=a2[2]
a2=a2[3]
p=new V.b_(p.a+a3,p.b+a4,p.c+a5,p.d+a2)}++k}g+=e.ch;++h}a6=F.as(a7,a7,a7,a7,a7,a7,a7,a7,0)
if(l<=0||m==null)a6.sU(0,a7)
else a6.sU(0,m.T(0,l))
if(n==null)a6.saT(a7)
else a6.saT(n.D())
if(o==null)a6.sS(a7)
else a6.sS(o.D())
if(j<=0||q==null)a6.sci(a7)
else a6.sci(q.T(0,j))
if(i<=0||r==null)a6.sbb(a7)
else a6.sbb(r.T(0,i))
if(k<=0||p==null)a6.sa4(0,a7)
else{s=p.T(0,k)
s=[s.a,s.b,s.c,s.d]
a2=s[0]
a3=s[1]
a4=s[2]
s=s[3]
if(a2<0)a2=0
else if(a2>1)a2=1
if(a3<0)a3=0
else if(a3>1)a3=1
if(a4<0)a4=0
else if(a4>1)a4=1
if(s<0)s=0
else if(s>1)s=1
a6.sa4(0,new V.C(a2,a3,a4,s))}if(h<=0)a6.scm(0,0)
else a6.scm(0,g/h)
return a6}}
F.i5.prototype={
aS:function(a){var s,r,q,p=V.M()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.o(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.D()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.z)(a),++r)a[r].saT(p)
return null}}
F.b0.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.w()},
w:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)p.push(s[q].J(""))
return C.b.F(p,"\n")}}
O.dG.prototype={
gE:function(){var s=this.rx
return s==null?this.rx=D.Q():s},
Z:function(a){var s=this.rx
return s==null?null:s.N(a)},
saa:function(a){var s=this.r2
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.r2=a
this.Z(new D.x("vectorScale",s,a))}},
fb:function(a,b,c){var s,r=this,q=c.d
if(q==null)return
s=b.a
s.disable(2929)
s.enable(3042)
s.blendFunc(1,1)
if(r.k3)r.cJ(b,a,q,"Axis",r.gdX(),r.z,r.y)
if(r.k4)r.cJ(b,a,q,"AABB",r.gdP(),r.z,r.y)
s.enable(2929)
s.blendFunc(770,771)},
fc:function(a,b,c){var s,r=this,q=c.c
if(q==null)return
s=b.a
s.enable(2929)
s.enable(3042)
s.blendFunc(770,771)
if(r.Q)r.a_(b,a,q,"shapeFill",r.gfk(),r.d,r.c)
if(r.id)r.a_(b,a,q,"colorFill",r.ge3(),r.x,r.r)
if(r.k1)r.a_(b,a,q,"txt2DColor",r.gfz(),r.x,r.r)
if(r.k2)r.a_(b,a,q,"weight",r.gfF(),r.x,r.r)
if(r.r1)r.a_(b,a,q,"bend1",r.gdY(),r.x,r.r)
s.disable(2929)
s.blendFunc(1,1)
if(r.cx)r.a_(b,a,q,"vertices",r.gfD(),r.f,r.e)
if(r.fr)r.a_(b,a,q,"faceCenters",r.gee(),r.f,r.e)
if(r.ch)r.a_(b,a,q,"wireFrame",r.gfH(),r.f,r.e)
if(r.cy)r.a_(b,a,q,"normals",r.ges(),r.f,r.e)
if(r.db)r.a_(b,a,q,"binormals",r.ge_(),r.f,r.e)
if(r.dx)r.a_(b,a,q,"tangentals",r.gfn(),r.f,r.e)
if(r.dy)r.a_(b,a,q,"textureCube",r.gfB(),r.f,r.e)
if(r.fx)r.a_(b,a,q,"faceNormals",r.geg(),r.f,r.e)
if(r.fy)r.a_(b,a,q,"faceBinormals",r.gec(),r.x,r.r)
if(r.go)r.a_(b,a,q,"faceTangentals",r.gei(),r.x,r.r)
if(r.k3)r.a_(b,a,q,"Axis",r.gdV(),r.z,r.y)
if(r.k4)r.a_(b,a,q,"AABB",r.gdN(),r.z,r.y)
s.enable(2929)
s.blendFunc(770,771)},
a_:function(a,b,c,d,e,f,g){var s=b.a,r=s.i(0,d)
if(r==null){r=this.cB(a,e.$1(c))
s.m(0,d,r)}s=this.a
if(s!=null)s.cp(f,g)
r.dl(a)},
cJ:function(a,b,c,d,e,f,g){var s=b.a,r=s.i(0,d)
if(r==null){r=this.cB(a,e.$1(c))
s.m(0,d,r)}s=this.a
if(s!=null)s.cp(f,g)
r.dl(a)},
cB:function(a,b){var s=this,r=null,q=$.bq(),p=$.bp(),o=q.a,n=p.a,m=$.bo(),l=m.a,k=$.bY(),j=b.fR(new Z.j8(a.a),new Z.cN(o|n|l|k.a))
q=j.bl(q)
if(q!=null){o=s.a
if(o==null)o=r
else{o=o.x
o=o==null?r:o.c}q.e=o==null?0:o}q=j.bl(p)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.y
p=p==null?r:p.c}q.e=p==null?1:p}q=j.bl(k)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.z
p=p==null?r:p.c}q.e=p==null?2:p}q=j.bl(m)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.Q
p=p==null?r:p.c}q.e=p==null?3:p}return j},
fl:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hF(s,new V.C(1,1,1,1)))
C.b.q(a.gv().b,new O.hG(s))
return s},
cT:function(a,b){var s,r={}
r.a=b
s=F.S()
r.a=new V.C(0,0.7,1,1)
C.b.q(a.gl().c,new O.hQ(r,s))
r=new O.hP(s)
C.b.q(a.gB(a).b,new O.hR(s,r))
C.b.q(a.gv().b,new O.hS(s,r))
return s},
fI:function(a){return this.cT(a,null)},
fE:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hL(new V.C(1,1,1,1),s))
return s},
eu:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hE(new V.C(1,1,0.3,1),s))
return s},
e0:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hw(new V.C(1,0.3,0.3,1),s))
return s},
fo:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hH(new V.C(1,0.3,1,1),s))
return s},
fC:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hK(new V.C(1,0.3,0.3,1),s))
return s},
ef:function(a){var s=F.S()
C.b.q(a.gv().b,new O.hA(new V.C(1,1,0.3,1),s))
return s},
eh:function(a){var s=F.S()
C.b.q(a.gv().b,new O.hB(new V.C(1,1,0.3,1),s))
return s},
ed:function(a){var s=F.S()
C.b.q(a.gv().b,new O.hz(new V.C(1,0.3,0.3,1),s))
return s},
ej:function(a){var s=F.S()
C.b.q(a.gv().b,new O.hC(new V.C(1,0.3,1,1),s))
return s},
e4:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hx(s))
C.b.q(a.gv().b,new O.hy(s))
return s},
fA:function(a){var s=F.S()
C.b.q(a.gl().c,new O.hI(s))
C.b.q(a.gv().b,new O.hJ(s))
return s},
fG:function(a){var s,r,q={},p=F.S()
if(a.gl().c.length<1)return p
s=a.gl().c
if(0>=s.length)return H.c(s,0)
q.a=q.b=s[0].ch
C.b.q(a.gl().c,new O.hM(q))
r=q.a-q.b
q.c=r
if(r<=0)q.c=1
C.b.q(a.gl().c,new O.hN(q,p))
C.b.q(a.gv().b,new O.hO(p))
return p},
ep:function(a){var s={}
s.a=0
C.b.q(a.gl().c,new O.hD(s))
return C.d.bm((s.a+1.5)*0.5)},
bf:function(a,b){var s
if(a<0||b<=0)return new V.ah(0,0,1)
else{s=Math.floor((a+0.5)*0.5)
return V.lL(s/b,a-s*2,1)}},
dZ:function(a){var s=this.ep(a),r=F.S()
C.b.q(a.gl().c,new O.hu(this,s,r))
C.b.q(a.gv().b,new O.hv(r))
return r},
dW:function(a){return this.cA(a)},
cA:function(a){var s=F.S(),r=new O.ht(s)
r.$3(1,0,0)
r.$3(0,1,0)
r.$3(0,0,1)
return s},
dO:function(a){return this.cw(a)},
cw:function(a){var s,r,q,p,o=a.cZ(),n=F.S(),m=new O.hs(n),l=o.a,k=o.b,j=o.c,i=m.$3(l,k,j),h=l+o.d,g=m.$3(h,k,j),f=k+o.e,e=m.$3(h,f,j),d=m.$3(l,f,j)
j+=o.f
s=m.$3(l,k,j)
r=m.$3(h,k,j)
q=m.$3(h,f,j)
p=m.$3(l,f,j)
n.gB(n).n(0,i,g)
n.gB(n).n(0,g,e)
n.gB(n).n(0,e,d)
n.gB(n).n(0,d,i)
n.gB(n).n(0,s,r)
n.gB(n).n(0,r,q)
n.gB(n).n(0,q,p)
n.gB(n).n(0,p,s)
n.gB(n).n(0,i,s)
n.gB(n).n(0,g,r)
n.gB(n).n(0,e,q)
n.gB(n).n(0,d,p)
return n}}
O.hF.prototype={
$1:function(a){var s=this.a.gl(),r=a.X()
r.sa4(0,this.b)
r.sS(V.M())
s.j(0,r)},
$S:4}
O.hG.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gl(),n=a.a
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
s=o[n]
n=p.gl()
o=a.b
o=o==null?null:o.gt(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.c(n,o)
r=n[o]
o=p.gl()
n=a.c
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
q=o[n]
p.gv().a3(0,s,r,q)},
$S:3}
O.hQ.prototype={
$1:function(a){var s=this.b.gl(),r=a.X()
r.sa4(0,this.a.a)
r.sS(V.M())
s.j(0,r)},
$S:4}
O.hP.prototype={
$2:function(a,b){var s
if(a.h8(b)==null){s=this.a
s.gB(s).n(0,a,b)}},
$S:47}
O.hR.prototype={
$1:function(a){var s,r=this.a,q=r.gl(),p=a.a
p=p==null?null:p.gt(p)
if(p==null)p=0
q=q.c
if(p>=q.length)return H.c(q,p)
s=q[p]
r=r.gl()
p=a.b
q=p==null?null:p.gt(p)
if(q==null)q=0
r=r.c
if(q>=r.length)return H.c(r,q)
this.b.$2(s,r[q])},
$S:48}
O.hS.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gl(),n=a.a
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
s=o[n]
n=p.gl()
o=a.b
o=o==null?null:o.gt(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.c(n,o)
r=n[o]
p=p.gl()
o=a.c
o=o==null?null:o.gt(o)
if(o==null)o=0
p=p.c
if(o>=p.length)return H.c(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)},
$S:3}
O.hL.prototype={
$1:function(a){var s,r=a.X()
r.sa4(0,this.a)
r.sS(V.M())
s=this.b
s.gl().j(0,r)
s.gac(s).a.gl().j(0,r)
new F.cx().bx(r)},
$S:4}
O.hE.prototype={
$1:function(a){var s,r,q=a.X()
q.sa4(0,this.a)
q.sS(V.M())
s=q.X()
s.sS(q.r)
r=this.b
r.gl().j(0,q)
r.gl().j(0,s)
r.gB(r).n(0,q,s)},
$S:4}
O.hw.prototype={
$1:function(a){var s,r,q=a.X()
q.sa4(0,this.a)
q.sS(V.M())
s=q.X()
s.sS(a.x)
r=this.b
r.gl().j(0,q)
r.gl().j(0,s)
r.gB(r).n(0,q,s)},
$S:4}
O.hH.prototype={
$1:function(a){var s,r,q,p=a.r,o=a.x
if(p==null||o==null)return
s=a.X()
s.sa4(0,this.a)
s.sS(V.M())
r=s.X()
r.sS(o.al(p).ar(0))
q=this.b
q.gl().j(0,s)
q.gl().j(0,r)
q.gB(q).n(0,s,r)},
$S:4}
O.hK.prototype={
$1:function(a){var s,r,q=a.X()
q.sa4(0,this.a)
q.sS(V.M())
s=q.X()
s.sS(a.z)
r=this.b
r.gl().j(0,q)
r.gl().j(0,s)
r.gB(r).n(0,q,s)},
$S:4}
O.hA.prototype={
$1:function(a){var s,r,q,p,o=null,n=a.a,m=n==null?o:n.f
n=a.b
s=n==null?o:n.f
n=a.c
r=n==null?o:n.f
if(m==null||s==null||r==null)return
n=m.C(0,s).C(0,r).T(0,3)
q=a.d
p=F.as(o,V.M(),this.a,n,q,o,o,o,0)
q=this.b
q.gl().j(0,p)
q.gac(q).a.gl().j(0,p)
new F.cx().bx(p)},
$S:3}
O.hB.prototype={
$1:function(a){var s,r,q,p,o,n=null,m=a.a,l=m==null?n:m.f
m=a.b
s=m==null?n:m.f
m=a.c
r=m==null?n:m.f
if(l==null||s==null||r==null)return
m=l.C(0,s).C(0,r).T(0,3)
q=a.d
p=F.as(n,V.M(),this.a,m,q,n,n,n,0)
o=p.X()
o.sS(a.d)
q=this.b
q.gl().j(0,p)
q.gl().j(0,o)
q.gB(q).n(0,p,o)},
$S:3}
O.hz.prototype={
$1:function(a){var s,r,q,p,o,n=null,m=a.a,l=m==null?n:m.f
m=a.b
s=m==null?n:m.f
m=a.c
r=m==null?n:m.f
if(l==null||s==null||r==null)return
m=l.C(0,s).C(0,r).T(0,3)
q=a.d
p=F.as(n,V.M(),this.a,m,q,n,n,n,0)
o=p.X()
o.sS(a.e)
q=this.b
q.gl().j(0,p)
q.gl().j(0,o)
q.gB(q).n(0,p,o)},
$S:3}
O.hC.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=null,k=a.a,j=k==null?l:k.f
k=a.b
s=k==null?l:k.f
k=a.c
r=k==null?l:k.f
q=a.d
p=a.e
if(j==null||s==null||r==null||q==null||p==null)return
k=j.C(0,s).C(0,r).T(0,3)
o=a.d
n=F.as(l,V.M(),this.a,k,o,l,l,l,0)
m=n.X()
m.sS(p.al(q).ar(0))
o=this.b
o.gl().j(0,n)
o.gl().j(0,m)
o.gB(o).n(0,n,m)},
$S:3}
O.hx.prototype={
$1:function(a){var s=this.a.gl(),r=a.X()
r.sS(V.M())
s.j(0,r)},
$S:4}
O.hy.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gl(),n=a.a
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
s=o[n]
n=p.gl()
o=a.b
o=o==null?null:o.gt(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.c(n,o)
r=n[o]
o=p.gl()
n=a.c
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
q=o[n]
p.gv().a3(0,s,r,q)},
$S:3}
O.hI.prototype={
$1:function(a){var s,r,q,p,o,n,m=a.y
if(m==null){s=$.V
if(s==null){s=new V.H(0,0)
$.V=s
m=s}else m=s}s=this.a.gl()
r=a.X()
q=m.a
p=m.b
if(q<0)q=0
else if(q>1)q=1
o=p<0
if(o)n=0
else n=p>1?1:p
if(o)p=0
else if(p>1)p=1
r.sa4(0,new V.C(q,n,p,1))
r.sS(V.M())
s.j(0,r)},
$S:4}
O.hJ.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gl(),n=a.a
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
s=o[n]
n=p.gl()
o=a.b
o=o==null?null:o.gt(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.c(n,o)
r=n[o]
o=p.gl()
n=a.c
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
q=o[n]
p.gv().a3(0,s,r,q)},
$S:3}
O.hM.prototype={
$1:function(a){var s=this.a,r=s.b,q=a.ch
if(r>q)s.b=q
if(s.a<q)s.a=q},
$S:4}
O.hN.prototype={
$1:function(a){var s,r=this.a,q=V.lL((a.ch-r.b)/r.c*5/6,1,1)
r=this.b.gl()
s=a.X()
s.sS(V.M())
s.sa4(0,V.lM(q))
r.j(0,s)},
$S:4}
O.hO.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gl(),n=a.a
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
s=o[n]
n=p.gl()
o=a.b
o=o==null?null:o.gt(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.c(n,o)
r=n[o]
o=p.gl()
n=a.c
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
q=o[n]
p.gv().a3(0,s,r,q)},
$S:3}
O.hD.prototype={
$1:function(a){var s,r,q=a.cx
if(q==null)q=V.lY()
s=this.a
r=Math.max(s.a,q.a)
s.a=r
r=Math.max(r,q.b)
s.a=r
r=Math.max(r,q.c)
s.a=r
s.a=Math.max(r,q.d)},
$S:4}
O.hu.prototype={
$1:function(a){var s,r,q,p=a.cx
if(p==null)p=V.lY()
s=this.a
r=this.b
q=new V.ah(0,0,0).C(0,s.bf(p.a,r)).C(0,s.bf(p.b,r)).C(0,s.bf(p.c,r)).C(0,s.bf(p.d,r))
r=this.c.gl()
s=a.X()
s.sS(V.M())
s.sa4(0,V.lM(q))
r.j(0,s)},
$S:4}
O.hv.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gl(),n=a.a
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
s=o[n]
n=p.gl()
o=a.b
o=o==null?null:o.gt(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.c(n,o)
r=n[o]
o=p.gl()
n=a.c
n=n==null?null:n.gt(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.c(o,n)
q=o[n]
p.gv().a3(0,s,r,q)},
$S:3}
O.ht.prototype={
$3:function(a,b,c){var s,r,q=a>1?1:a,p=b>1?1:b,o=c>1?1:c,n=new V.C(q,p,o,1)
q=this.a
s=q.gl().bW(0,0,0)
s.sS(V.M())
s.saT(V.ld())
s.sa4(0,n)
r=q.gl().bW(a,b,c)
r.sS(V.M())
r.saT(V.ld())
r.sa4(0,n)
q.gB(q).n(0,s,r)},
$S:49}
O.hs.prototype={
$3:function(a,b,c){var s=this.a.gl().bW(a,b,c)
s.sS(V.M())
s.saT(new V.o(a,b,c))
return s},
$S:50}
O.is.prototype={}
X.hq.prototype={
gE:function(){var s=this.x
return s==null?this.x=D.Q():s}}
X.e5.prototype={
gE:function(){var s=this.f
return s==null?this.f=D.Q():s},
aE:function(a){var s=this.f
return s==null?null:s.N(a)},
dM:function(){return this.aE(null)},
sb8:function(a){var s,r,q=this
if(!J.A(q.b,a)){s=q.b
if(s!=null)s.gE().H(0,q.gcv())
r=q.b
q.b=a
if(a!=null)a.gE().j(0,q.gcv())
q.aE(new D.x("mover",r,q.b))}}}
X.iq.prototype={}
V.h2.prototype={
a3:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=k.d,i=j.length,h=P.eH().gaU().i(0,k.a)
if(h==null||h.length<=i){s=d
r=!0}else{if(i>=h.length)return H.c(h,i)
s=h[i]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
o=k.c
n=J.b6(o)
n.gaM(o).j(0,p)
m=W.lQ("checkbox")
m.checked=s
W.Z(m,"change",new V.h3(k,m,c,i),!1)
p.children.toString
p.appendChild(m).toString
l=q.createElement("span")
l.textContent=b
p.appendChild(l).toString
o=n.gaM(o)
q=q.createElement("br")
q.toString
o.j(0,q)
j.push(m)
if(r)k.cR(i,s)},
n:function(a,b,c){return this.a3(a,b,c,!1)},
cR:function(a,b){var s,r,q,p,o,n=this.a,m=P.eH().gaU().i(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.hq(m,a-s+1,"0")
r=a>0?C.a.u(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.b_(m,s)
q=P.eH()
s=t.N
p=P.lT(q.gaU(),s,s)
p.m(0,n,r)
o=q.cg(0,p)
n=window.history
n.toString
s=o.gbh()
n.replaceState(new P.fu([],[]).bd(""),"",s)}}
V.h3.prototype={
$1:function(a){var s=this,r=s.b.checked,q=r===!0
s.c.$1(q)
s.a.cR(s.d,q)},
$S:8}
V.kV.prototype={
$1:function(a){var s=C.d.cl(this.a.ghc(),2)
if(s!=="0.00")P.lA(s+" fps")},
$S:51}
V.i9.prototype={
a3:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.eH().gaU().i(0,k)
if(j==null)if(d){c.$0()
l.cQ(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.b6(p)
o.gaM(p).j(0,q)
n=W.lQ("radio")
n.checked=s
n.name=k
W.Z(n,"change",new V.ia(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gaM(p)
r=r.createElement("br")
r.toString
p.j(0,r)},
n:function(a,b,c){return this.a3(a,b,c,!1)},
cQ:function(a){var s,r,q=P.eH(),p=t.N,o=P.lT(q.gaU(),p,p)
o.m(0,this.a,a)
s=q.cg(0,o)
p=window.history
p.toString
r=s.gbh()
p.replaceState(new P.fu([],[]).bd(""),"",r)}}
V.ia.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.cQ(s.d)}},
$S:8}
V.ii.prototype={
cW:function(a){var s,r,q,p,o,n,m=this.fi(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.P(C.b.hf(a)),s=new P.bQ(m.dv(new H.bD(s,s.gk(s))).a());s.A();){r=s.gL(s)
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
if(H.n8(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.c(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.lq(C.P,r,C.e,!1)
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
fL:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
q=t.a
s=q.a(s).style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=m
s.marginRight=m
for(p=0;p<3;++p){o=l.createElement("div")
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
fi:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.iw(P.bC(s,t.aJ),P.bC(s,t.aX),P.lU(s))
h.d=h.O(0,q)
s=h.O(0,q).F(0,p)
r=new K.X([])
r.a1(new H.P("*"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,p).F(0,p).a.push(new K.aV(s))
r=new K.X([])
r.a1(new H.P("*"))
s.push(r)
r=h.O(0,p).F(0,"BoldEnd")
s=new K.X([])
s.a1(new H.P("*"))
r.a.push(s)
r.c=!0
r=h.O(0,q).F(0,o)
s=new K.X([])
s.a1(new H.P("_"))
r.a.push(s)
r.c=!0
r=[]
h.O(0,o).F(0,o).a.push(new K.aV(r))
s=new K.X([])
s.a1(new H.P("_"))
r.push(s)
s=h.O(0,o).F(0,n)
r=new K.X([])
r.a1(new H.P("_"))
s.a.push(r)
s.c=!0
s=h.O(0,q).F(0,m)
r=new K.X([])
r.a1(new H.P("`"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,m).F(0,m).a.push(new K.aV(s))
r=new K.X([])
r.a1(new H.P("`"))
s.push(r)
r=h.O(0,m).F(0,"CodeEnd")
s=new K.X([])
s.a1(new H.P("`"))
r.a.push(s)
r.c=!0
r=h.O(0,q).F(0,l)
s=new K.X([])
s.a1(new H.P("["))
r.a.push(s)
r.c=!0
r=h.O(0,l).F(0,k)
s=new K.X([])
s.a1(new H.P("|"))
r.a.push(s)
s=h.O(0,l).F(0,j)
r=new K.X([])
r.a1(new H.P("]"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,l).F(0,l).a.push(new K.aV(s))
r=new K.X([])
r.a1(new H.P("|]"))
s.push(r)
r=h.O(0,k).F(0,j)
s=new K.X([])
s.a1(new H.P("]"))
r.a.push(s)
r.c=!0
r=[]
h.O(0,k).F(0,k).a.push(new K.aV(r))
s=new K.X([])
s.a1(new H.P("|]"))
r.push(s)
h.O(0,q).F(0,i).a.push(new K.fS())
s=[]
h.O(0,i).F(0,i).a.push(new K.aV(s))
r=new K.X([])
r.a1(new H.P("*_`["))
s.push(r)
r=h.O(0,"BoldEnd")
r.d=r.a.bc(p)
r=h.O(0,n)
r.d=r.a.bc(o)
r=h.O(0,"CodeEnd")
r.d=r.a.bc(m)
r=h.O(0,j)
r.d=r.a.bc("Link")
r=h.O(0,i)
r.d=r.a.bc(i)
return this.b=h}}
V.ik.prototype={
$1:function(a){P.me(C.m,new V.ij(this.a))},
$S:8}
V.ij.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.am(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.t(-0.01*s)+"px"
q.top=r},
$S:0}
Z.k6.prototype={
$1:function(a){var s=this.a
if(s.Q!==a){s.Q=a
s.Z(new D.x("showFilled",!a,a))}},
$S:1}
Z.k7.prototype={
$1:function(a){var s=this.a
if(s.ch!==a){s.ch=a
s.Z(new D.x("showWireFrame",!a,a))}},
$S:1}
Z.k8.prototype={
$1:function(a){var s=this.a
if(s.cx!==a){s.cx=a
s.Z(new D.x("showVertices",!a,a))}},
$S:1}
Z.kj.prototype={
$1:function(a){var s=this.a
if(s.cy!==a){s.cy=a
s.Z(new D.x("showNormals",!a,a))}},
$S:1}
Z.ku.prototype={
$1:function(a){var s=this.a
if(s.db!==a){s.db=a
s.Z(new D.x("showBinormals",!a,a))}},
$S:1}
Z.kF.prototype={
$1:function(a){var s=this.a
if(s.dx!==a){s.dx=a
s.Z(new D.x("showTangentals",!a,a))}},
$S:1}
Z.kO.prototype={
$1:function(a){var s=this.a
if(s.fr!==a){s.fr=a
s.Z(new D.x("showFaceCenters",!a,a))}},
$S:1}
Z.kP.prototype={
$1:function(a){var s=this.a
if(s.fx!==a){s.fx=a
s.Z(new D.x("showFaceNormals",!a,a))}},
$S:1}
Z.kQ.prototype={
$1:function(a){var s=this.a
if(s.fy!==a){s.fy=a
s.Z(new D.x("showFaceBinormals",!a,a))}},
$S:1}
Z.kR.prototype={
$1:function(a){var s=this.a
if(s.go!==a){s.go=a
s.Z(new D.x("showFaceTangentals",!a,a))}},
$S:1}
Z.kS.prototype={
$1:function(a){var s=this.a
if(s.id!==a){s.id=a
s.Z(new D.x("showColorFill",!a,a))}},
$S:1}
Z.k9.prototype={
$1:function(a){var s=this.a
if(s.k1!==a){s.k1=a
s.Z(new D.x("showTxt2DColor",!a,a))}},
$S:1}
Z.ka.prototype={
$1:function(a){var s=this.a
if(s.dy!==a){s.dy=a
s.Z(new D.x("showTxtCube",!a,a))}},
$S:1}
Z.kb.prototype={
$1:function(a){var s=this.a
if(s.k2!==a){s.k2=a
s.Z(new D.x("showWeight",!a,a))}},
$S:1}
Z.kc.prototype={
$1:function(a){var s=this.a
if(s.r1!==a){s.r1=a
s.Z(new D.x("showBend",!a,a))}},
$S:1}
Z.kd.prototype={
$1:function(a){var s=this.a
if(s.k3!==a){s.k3=a
s.Z(new D.x("showAxis",!a,a))}},
$S:1}
Z.ke.prototype={
$1:function(a){var s=this.a
if(s.k4!==a){s.k4=a
s.Z(new D.x("showAABB",!a,a))}},
$S:1}
Z.kT.prototype={
$1:function(a){a.fT()
this.a.scq(0,a)},
$S:53}
Z.kf.prototype={
$0:function(){var s,r,q,p,o=null,n=F.S(),m=n.gl(),l=new V.o(-1,-1,1).D(),k=m.bj(new V.ab(1,2,4,6),V.h4(255,0,0),new V.D(-1,-1,0),new V.H(0,1),l,o)
l=n.gl()
m=new V.o(1,-1,1).D()
s=l.bj(new V.ab(0,3,4,6),V.h4(0,0,255),new V.D(1,-1,0),new V.H(1,1),m,o)
m=n.gl()
l=new V.o(1,1,1).D()
r=m.bj(new V.ab(0,2,5,6),V.h4(0,128,0),new V.D(1,1,0),new V.H(1,0),l,o)
l=n.gl()
m=$.V
if(m==null)m=$.V=new V.H(0,0)
q=new V.o(-1,1,1).D()
p=l.bj(new V.ab(0,2,4,7),V.h4(255,255,0),new V.D(-1,1,0),m,q,o)
n.gv().cU([k,s,r,p])
n.ae()
this.a.$1(n)},
$S:0}
Z.kg.prototype={
$0:function(){this.a.$1(F.jH(1,null,null,1))},
$S:0}
Z.kh.prototype={
$0:function(){this.a.$1(F.jH(8,null,null,8))},
$S:0}
Z.ki.prototype={
$0:function(){this.a.$1(F.jH(15,null,new Z.k5(),15))},
$S:0}
Z.k5.prototype={
$3:function(a,b,c){var s=Math.cos(c*4*3.141592653589793+3.141592653589793),r=Math.cos(b*4*3.141592653589793+3.141592653589793),q=a.f
if(q==null)q=V.l9()
s=new V.o(q.a,q.b,q.c).D().I(0,s*0.1+r*0.1)
a.sU(0,q.C(0,new V.D(s.a,s.b,s.c)))},
$S:7}
Z.kk.prototype={
$0:function(){this.a.$1(F.jN(-1,!1,0,null,8))},
$S:0}
Z.kl.prototype={
$0:function(){this.a.$1(F.jN(-1,!1,0,null,30))},
$S:0}
Z.km.prototype={
$0:function(){this.a.$1(F.lw(!0,1,8,1))},
$S:0}
Z.kn.prototype={
$0:function(){this.a.$1(F.lw(!0,8,16,1))},
$S:0}
Z.ko.prototype={
$0:function(){this.a.$1(F.lw(!1,1,12,0))},
$S:0}
Z.kp.prototype={
$0:function(){this.a.$1(F.mU(!0,!0,25,new Z.k4(),50))},
$S:0}
Z.k4.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:10}
Z.kq.prototype={
$0:function(){this.a.$1(F.n4(10,20))},
$S:0}
Z.kr.prototype={
$0:function(){this.a.$1(F.n4(20,40))},
$S:0}
Z.ks.prototype={
$0:function(){this.a.$1(F.n3(2))},
$S:0}
Z.kt.prototype={
$0:function(){this.a.$1(F.n3(3))},
$S:0}
Z.kv.prototype={
$0:function(){this.a.$1(F.lB(6,null,6))},
$S:0}
Z.kw.prototype={
$0:function(){this.a.$1(F.lB(10,null,10))},
$S:0}
Z.kx.prototype={
$0:function(){this.a.$1(F.lB(10,new Z.k3(),10))},
$S:0}
Z.k3.prototype={
$2:function(a,b){var s=a-0.5,r=b-0.5
return Math.cos(Math.sqrt(s*s+r*r)*3.141592653589793)*0.3},
$S:10}
Z.ky.prototype={
$0:function(){this.a.$1(F.pX())},
$S:0}
Z.kz.prototype={
$0:function(){this.a.$1(F.pN())},
$S:0}
Z.kA.prototype={
$0:function(){this.a.$1(F.n_(4,null,4))},
$S:0}
Z.kB.prototype={
$0:function(){this.a.$1(F.n_(16,new Z.k2(),16))},
$S:0}
Z.k2.prototype={
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3},
$S:10}
Z.kC.prototype={
$0:function(){this.a.saa(0.01)},
$S:0}
Z.kD.prototype={
$0:function(){this.a.saa(0.02)},
$S:0}
Z.kE.prototype={
$0:function(){this.a.saa(0.04)},
$S:0}
Z.kG.prototype={
$0:function(){this.a.saa(0.06)},
$S:0}
Z.kH.prototype={
$0:function(){this.a.saa(0.08)},
$S:0}
Z.kI.prototype={
$0:function(){this.a.saa(0.1)},
$S:0}
Z.kJ.prototype={
$0:function(){this.a.saa(0.2)},
$S:0}
Z.kK.prototype={
$0:function(){this.a.saa(0.4)},
$S:0}
Z.kL.prototype={
$0:function(){this.a.saa(0.6)},
$S:0}
Z.kM.prototype={
$0:function(){this.a.saa(0.8)},
$S:0}
Z.kN.prototype={
$0:function(){this.a.saa(1)},
$S:0};(function aliases(){var s=J.a.prototype
s.dD=s.h
s=J.aS.prototype
s.dE=s.h
s=K.dE.prototype
s.dC=s.aQ
s.bw=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"pf","nS",54)
r(P,"pz","oq",13)
r(P,"pA","or",13)
r(P,"pB","os",13)
q(P,"mS","pu",0)
r(W,"r4","hg",37)
var k
p(k=E.bu.prototype,"gdj",0,0,null,["$1","$0"],["dk","hp"],6,0)
p(k,"gdh",0,0,null,["$1","$0"],["di","ho"],6,0)
p(k,"gdf",0,0,null,["$1","$0"],["dg","hl"],6,0)
o(k,"ghj","hk",12)
o(k,"ghm","hn",12)
p(k=E.es.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],6,0)
n(k,"ghz","ds",0)
m(k=X.eI.prototype,"geJ","eK",8)
m(k,"gex","ey",8)
m(k,"geD","eE",9)
m(k,"geN","eO",24)
m(k,"geL","eM",24)
m(k,"geQ","eR",9)
m(k,"geU","eV",9)
m(k,"geH","eI",9)
m(k,"geS","eT",9)
m(k,"geF","eG",9)
m(k,"geW","eX",32)
m(k,"geY","eZ",8)
m(k,"gf6","f7",16)
m(k,"gf2","f3",16)
m(k,"gf4","f5",16)
l(V.a1.prototype,"gk","b7",17)
l(V.o.prototype,"gk","b7",17)
l(V.b_.prototype,"gk","b7",17)
p(k=U.bw.prototype,"gaI",0,0,null,["$1","$0"],["R","a9"],6,0)
o(k,"gev","ew",25)
o(k,"gf0","f1",25)
p(k=U.cJ.prototype,"gaI",0,0,null,["$1","$0"],["R","a9"],6,0)
m(k,"gbI","bJ",18)
m(k,"gbK","bL",18)
m(k,"gbM","bN",18)
p(k=U.cK.prototype,"gaI",0,0,null,["$1","$0"],["R","a9"],6,0)
m(k,"gbI","bJ",5)
m(k,"gbK","bL",5)
m(k,"gbM","bN",5)
m(k,"gel","em",5)
m(k,"gen","eo",5)
m(k,"gfu","fv",5)
m(k,"gfs","ft",5)
m(k,"gfp","fq",5)
m(U.cL.prototype,"geq","er",5)
p(k=M.dA.prototype,"gan",0,0,null,["$1","$0"],["as","dJ"],6,0)
o(k,"gez","eA",12)
o(k,"geB","eC",12)
m(k=O.dG.prototype,"gfk","fl",2)
p(k,"gfH",0,1,null,["$2$color","$1"],["cT","fI"],44,0)
m(k,"gfD","fE",2)
m(k,"ges","eu",2)
m(k,"ge_","e0",2)
m(k,"gfn","fo",2)
m(k,"gfB","fC",2)
m(k,"gee","ef",2)
m(k,"geg","eh",2)
m(k,"gec","ed",2)
m(k,"gei","ej",2)
m(k,"ge3","e4",2)
m(k,"gfz","fA",2)
m(k,"gfF","fG",2)
m(k,"gdY","dZ",2)
m(k,"gdV","dW",2)
m(k,"gdX","cA",27)
m(k,"gdN","dO",2)
m(k,"gdP","cw",27)
p(X.e5.prototype,"gcv",0,0,null,["$1","$0"],["aE","dM"],6,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.R,null)
q(P.R,[H.l5,J.a,J.ag,P.J,P.cS,P.e,H.bD,P.dI,H.ce,H.eE,H.c7,H.iA,H.i6,H.fq,H.bs,P.Y,H.hW,H.dQ,H.dL,H.aq,H.f2,P.d3,P.bP,P.bQ,P.eN,P.em,P.en,P.ju,P.d9,P.jh,P.cR,P.m,P.fE,P.cq,P.ee,P.dt,P.jt,P.js,P.U,P.ba,P.e4,P.cG,P.f_,P.hp,P.a6,P.a0,P.bk,P.iQ,P.fk,W.h8,W.l1,W.lf,W.K,W.cf,P.jl,P.fi,K.fS,K.dE,K.X,L.ej,L.et,L.eu,L.iw,O.bt,O.cr,E.h_,E.bu,E.br,E.bI,E.jd,E.ib,E.es,Z.eL,Z.j8,Z.dr,Z.ds,Z.ch,Z.cN,D.h1,D.cd,D.T,X.c5,X.dO,X.hU,X.i_,X.a4,X.i4,X.ix,X.eI,V.ah,V.C,V.hi,V.dT,V.H,V.D,V.ab,V.ea,V.cB,V.a1,V.o,V.b_,U.cJ,U.cK,U.cL,M.dA,A.fU,A.fV,A.iD,A.iK,F.an,F.hm,F.bB,F.hV,F.cx,F.a_,F.cE,F.cF,F.bK,F.ad,F.p,F.ae,F.ak,F.j3,F.j4,F.j5,F.b0,O.is,X.iq,X.e5,V.h2,V.i9,V.ii])
q(J.a,[J.dJ,J.ck,J.aS,J.av,J.bA,J.bc,H.cs,H.W,W.d,W.fR,W.b8,W.aB,W.F,W.eS,W.am,W.hb,W.hc,W.eU,W.cb,W.eW,W.hd,W.f,W.f0,W.aC,W.hr,W.f4,W.cg,W.hZ,W.i1,W.f8,W.f9,W.aE,W.fa,W.fc,W.aF,W.fg,W.fj,W.aH,W.fl,W.aI,W.fr,W.ar,W.fw,W.iu,W.aJ,W.fy,W.iy,W.iV,W.fF,W.fH,W.fJ,W.fL,W.fN,P.aT,P.f6,P.aW,P.fe,P.i7,P.fs,P.aZ,P.fA,P.fW,P.eO,P.cC,P.fo])
q(J.aS,[J.e6,J.bL,J.aD])
r(J.dM,J.av)
q(J.bA,[J.cj,J.dK])
q(P.J,[H.cl,P.ex,H.dN,H.eD,H.ec,H.eY,P.dn,P.e1,P.az,P.eF,P.eC,P.ek,P.dv,P.dx])
r(P.cn,P.cS)
q(P.cn,[H.bM,W.eQ,W.eP,P.dC])
r(H.P,H.bM)
q(P.e,[H.h,H.be,H.cO,P.ci])
r(H.cc,H.be)
q(P.dI,[H.dS,H.eM])
r(H.c8,H.c7)
r(H.cw,P.ex)
q(H.bs,[H.ir,H.hT,H.jW,H.jX,H.jY,P.ja,P.j9,P.jb,P.jc,P.jp,P.jo,P.jF,P.jj,P.jk,P.hX,P.i0,P.iZ,P.iY,P.he,P.hf,P.iU,P.iR,P.iS,P.iT,P.jr,P.jq,P.jz,P.jA,P.jB,W.i2,W.i3,W.ig,W.io,W.je,P.jm,P.jn,P.jx,P.jG,P.hn,P.ho,P.fX,E.ic,E.id,E.ie,E.it,D.hk,D.hl,F.jv,F.jO,F.jI,F.jK,F.jL,F.jM,F.k1,F.kX,F.kW,F.kY,F.k0,F.jJ,F.jU,F.jT,F.ih,F.j7,F.j6,F.j0,F.j1,O.hF,O.hG,O.hQ,O.hP,O.hR,O.hS,O.hL,O.hE,O.hw,O.hH,O.hK,O.hA,O.hB,O.hz,O.hC,O.hx,O.hy,O.hI,O.hJ,O.hM,O.hN,O.hO,O.hD,O.hu,O.hv,O.ht,O.hs,V.h3,V.kV,V.ia,V.ik,V.ij,Z.k6,Z.k7,Z.k8,Z.kj,Z.ku,Z.kF,Z.kO,Z.kP,Z.kQ,Z.kR,Z.kS,Z.k9,Z.ka,Z.kb,Z.kc,Z.kd,Z.ke,Z.kT,Z.kf,Z.kg,Z.kh,Z.ki,Z.k5,Z.kk,Z.kl,Z.km,Z.kn,Z.ko,Z.kp,Z.k4,Z.kq,Z.kr,Z.ks,Z.kt,Z.kv,Z.kw,Z.kx,Z.k3,Z.ky,Z.kz,Z.kA,Z.kB,Z.k2,Z.kC,Z.kD,Z.kE,Z.kG,Z.kH,Z.kI,Z.kJ,Z.kK,Z.kL,Z.kM,Z.kN])
q(H.ir,[H.im,H.c2])
r(P.cp,P.Y)
r(H.ap,P.cp)
r(H.cm,H.h)
r(H.bH,H.W)
q(H.bH,[H.cU,H.cW])
r(H.cV,H.cU)
r(H.bg,H.cV)
r(H.cX,H.cW)
r(H.ct,H.cX)
q(H.ct,[H.dX,H.dY,H.dZ,H.e_,H.e0,H.cu,H.bh])
r(H.d4,H.eY)
r(P.d0,P.ci)
r(P.ji,P.ju)
r(P.cY,P.d9)
r(P.cQ,P.cY)
r(P.d7,P.cq)
r(P.bN,P.d7)
q(P.dt,[P.fY,P.hh])
r(P.dw,P.en)
q(P.dw,[P.fZ,P.j_,P.iX])
r(P.iW,P.hh)
q(P.az,[P.cA,P.dF])
r(P.eT,P.bk)
q(W.d,[W.r,W.dB,W.bE,W.aw,W.cZ,W.ax,W.aj,W.d1,W.eK,W.bO,P.dq,P.aQ])
q(W.r,[W.I,W.au])
q(W.I,[W.j,P.i])
q(W.j,[W.dl,W.dm,W.b9,W.dD,W.bx,W.ed,W.aY])
r(W.h7,W.aB)
r(W.c9,W.eS)
q(W.am,[W.h9,W.ha])
r(W.eV,W.eU)
r(W.ca,W.eV)
r(W.eX,W.eW)
r(W.dz,W.eX)
r(W.ao,W.b8)
r(W.f1,W.f0)
r(W.bv,W.f1)
r(W.f5,W.f4)
r(W.bb,W.f5)
r(W.aL,W.f)
q(W.aL,[W.bd,W.ai,W.bi])
r(W.dU,W.f8)
r(W.dV,W.f9)
r(W.fb,W.fa)
r(W.dW,W.fb)
r(W.fd,W.fc)
r(W.cv,W.fd)
r(W.fh,W.fg)
r(W.e7,W.fh)
r(W.eb,W.fj)
r(W.d_,W.cZ)
r(W.eg,W.d_)
r(W.fm,W.fl)
r(W.eh,W.fm)
r(W.el,W.fr)
r(W.fx,W.fw)
r(W.eq,W.fx)
r(W.d2,W.d1)
r(W.er,W.d2)
r(W.fz,W.fy)
r(W.ev,W.fz)
r(W.b1,W.ai)
r(W.fG,W.fF)
r(W.eR,W.fG)
r(W.cP,W.cb)
r(W.fI,W.fH)
r(W.f3,W.fI)
r(W.fK,W.fJ)
r(W.cT,W.fK)
r(W.fM,W.fL)
r(W.fn,W.fM)
r(W.fO,W.fN)
r(W.fv,W.fO)
r(W.eZ,P.em)
r(P.fu,P.jl)
r(P.ac,P.fi)
r(P.f7,P.f6)
r(P.dP,P.f7)
r(P.ff,P.fe)
r(P.e2,P.ff)
r(P.ft,P.fs)
r(P.eo,P.ft)
r(P.fB,P.fA)
r(P.ew,P.fB)
r(P.dp,P.eO)
r(P.e3,P.aQ)
r(P.fp,P.fo)
r(P.ei,P.fp)
q(K.dE,[K.aV,L.iz])
q(E.h_,[Z.c4,A.cD])
q(D.T,[D.by,D.bz,D.x,X.e8])
q(X.e8,[X.co,X.bF,X.bG,X.cH])
q(D.h1,[U.h5,U.a5])
r(U.c6,U.a5)
r(U.bw,O.bt)
r(A.dH,A.cD)
q(A.iD,[A.iE,A.iH,A.iI,A.iJ,A.iF,A.ey,A.iG,A.ez,A.eA,A.iL,A.iM,A.eB,A.iN,A.iO])
r(F.il,F.hm)
r(F.iC,F.hV)
r(F.cM,F.j3)
r(F.i8,F.j4)
q(F.j5,[F.j2,F.i5])
r(O.dG,O.is)
r(X.hq,X.iq)
s(H.bM,H.eE)
s(H.cU,P.m)
s(H.cV,H.ce)
s(H.cW,P.m)
s(H.cX,H.ce)
s(P.cS,P.m)
s(P.d7,P.fE)
s(P.d9,P.ee)
s(W.eS,W.h8)
s(W.eU,P.m)
s(W.eV,W.K)
s(W.eW,P.m)
s(W.eX,W.K)
s(W.f0,P.m)
s(W.f1,W.K)
s(W.f4,P.m)
s(W.f5,W.K)
s(W.f8,P.Y)
s(W.f9,P.Y)
s(W.fa,P.m)
s(W.fb,W.K)
s(W.fc,P.m)
s(W.fd,W.K)
s(W.fg,P.m)
s(W.fh,W.K)
s(W.fj,P.Y)
s(W.cZ,P.m)
s(W.d_,W.K)
s(W.fl,P.m)
s(W.fm,W.K)
s(W.fr,P.Y)
s(W.fw,P.m)
s(W.fx,W.K)
s(W.d1,P.m)
s(W.d2,W.K)
s(W.fy,P.m)
s(W.fz,W.K)
s(W.fF,P.m)
s(W.fG,W.K)
s(W.fH,P.m)
s(W.fI,W.K)
s(W.fJ,P.m)
s(W.fK,W.K)
s(W.fL,P.m)
s(W.fM,W.K)
s(W.fN,P.m)
s(W.fO,W.K)
s(P.f6,P.m)
s(P.f7,W.K)
s(P.fe,P.m)
s(P.ff,W.K)
s(P.fs,P.m)
s(P.ft,W.K)
s(P.fA,P.m)
s(P.fB,W.K)
s(P.eO,P.Y)
s(P.fo,P.m)
s(P.fp,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",y:"double",a2:"num",n:"String",bl:"bool",a6:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(bl)","a_(a_)","~(an)","~(ad)","~(T)","~([T?])","~(ad,y,y)","~(f)","~(ai)","y(y,y)","~(n,@)","~(k,e<bu>)","~(~())","a6()","~(@,@)","~(bi)","y()","~(T?)","y(y)","@()","~(cI,n,k)","~(~(T))","n(k)","~(bd)","~(k,e<a5?>)","D(y)","a_(la)","G<n,n>(G<n,n>,n)","~(@)","bl(r)","I(r)","~(b1)","a6(@,@)","~(n,k)","a6(@)","~(n[@])","n(d)","k(k,k)","~(n,n?)","~(R?,R?)","c4(k)","@(@,n)","@(n)","a_(a_{color:C?})","a6(~())","~(n,n)","~(ad,ad)","~(bB)","a6(y,y,y)","ad(y,y,y)","~(iv)","@(@)","~(a_)","k(@,@)","cI(@,@)","~(a2)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oM(v.typeUniverse,JSON.parse('{"e6":"aS","bL":"aS","aD":"aS","q_":"f","qb":"f","q1":"aQ","q0":"d","qj":"d","qm":"d","pZ":"i","qd":"i","q2":"j","qg":"j","qe":"r","qa":"r","qM":"aj","q6":"aL","q3":"au","qn":"au","ql":"ai","qf":"bb","q7":"F","q8":"ar","qi":"bg","qh":"W","dJ":{"bl":[]},"aS":{"lS":[]},"av":{"l":["1"],"h":["1"],"e":["1"]},"dM":{"l":["1"],"h":["1"],"e":["1"]},"bA":{"y":[],"a2":[]},"cj":{"y":[],"k":[],"a2":[]},"dK":{"y":[],"a2":[]},"bc":{"n":[]},"cl":{"J":[]},"P":{"l":["k"],"h":["k"],"e":["k"],"m.E":"k"},"h":{"e":["1"]},"be":{"e":["2"]},"cc":{"h":["2"],"e":["2"]},"cO":{"e":["1"]},"bM":{"l":["1"],"h":["1"],"e":["1"]},"c7":{"G":["1","2"]},"c8":{"G":["1","2"]},"cw":{"J":[]},"dN":{"J":[]},"eD":{"J":[]},"ec":{"J":[]},"ap":{"G":["1","2"],"Y.V":"2"},"cm":{"h":["1"],"e":["1"]},"dL":{"m3":[]},"bH":{"u":["1"],"W":[]},"bg":{"u":["y"],"l":["y"],"W":[],"h":["y"],"e":["y"],"m.E":"y"},"ct":{"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"]},"dX":{"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"],"m.E":"k"},"dY":{"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"],"m.E":"k"},"dZ":{"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"],"m.E":"k"},"e_":{"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"],"m.E":"k"},"e0":{"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"],"m.E":"k"},"cu":{"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"],"m.E":"k"},"bh":{"cI":[],"u":["k"],"l":["k"],"W":[],"h":["k"],"e":["k"],"m.E":"k"},"eY":{"J":[]},"d4":{"J":[]},"d3":{"iv":[]},"d0":{"e":["1"]},"cQ":{"h":["1"],"e":["1"]},"ci":{"e":["1"]},"cn":{"l":["1"],"h":["1"],"e":["1"]},"cp":{"G":["1","2"]},"Y":{"G":["1","2"]},"cq":{"G":["1","2"]},"bN":{"G":["1","2"]},"cY":{"h":["1"],"e":["1"]},"y":{"a2":[]},"k":{"a2":[]},"l":{"h":["1"],"e":["1"]},"dn":{"J":[]},"ex":{"J":[]},"e1":{"J":[]},"az":{"J":[]},"cA":{"J":[]},"dF":{"J":[]},"eF":{"J":[]},"eC":{"J":[]},"ek":{"J":[]},"dv":{"J":[]},"e4":{"J":[]},"cG":{"J":[]},"dx":{"J":[]},"bk":{"eG":[]},"fk":{"eG":[]},"eT":{"eG":[]},"I":{"r":[],"d":[]},"ao":{"b8":[]},"bd":{"f":[]},"ai":{"f":[]},"r":{"d":[]},"aw":{"d":[]},"ax":{"d":[]},"aj":{"d":[]},"bi":{"f":[]},"aL":{"f":[]},"b1":{"ai":[],"f":[]},"j":{"I":[],"r":[],"d":[]},"dl":{"I":[],"r":[],"d":[]},"dm":{"I":[],"r":[],"d":[]},"b9":{"I":[],"r":[],"d":[]},"au":{"r":[],"d":[]},"ca":{"l":["ac<a2>"],"u":["ac<a2>"],"h":["ac<a2>"],"e":["ac<a2>"],"m.E":"ac<a2>"},"cb":{"ac":["a2"]},"dz":{"l":["n"],"u":["n"],"h":["n"],"e":["n"],"m.E":"n"},"eQ":{"l":["I"],"h":["I"],"e":["I"],"m.E":"I"},"bv":{"l":["ao"],"u":["ao"],"h":["ao"],"e":["ao"],"m.E":"ao"},"dB":{"d":[]},"dD":{"I":[],"r":[],"d":[]},"bb":{"l":["r"],"u":["r"],"h":["r"],"e":["r"],"m.E":"r"},"bx":{"I":[],"r":[],"d":[]},"bE":{"d":[]},"dU":{"G":["n","@"],"Y.V":"@"},"dV":{"G":["n","@"],"Y.V":"@"},"dW":{"l":["aE"],"u":["aE"],"h":["aE"],"e":["aE"],"m.E":"aE"},"eP":{"l":["r"],"h":["r"],"e":["r"],"m.E":"r"},"cv":{"l":["r"],"u":["r"],"h":["r"],"e":["r"],"m.E":"r"},"e7":{"l":["aF"],"u":["aF"],"h":["aF"],"e":["aF"],"m.E":"aF"},"eb":{"G":["n","@"],"Y.V":"@"},"ed":{"I":[],"r":[],"d":[]},"eg":{"l":["aw"],"u":["aw"],"d":[],"h":["aw"],"e":["aw"],"m.E":"aw"},"eh":{"l":["aH"],"u":["aH"],"h":["aH"],"e":["aH"],"m.E":"aH"},"el":{"G":["n","n"],"Y.V":"n"},"aY":{"I":[],"r":[],"d":[]},"eq":{"l":["aj"],"u":["aj"],"h":["aj"],"e":["aj"],"m.E":"aj"},"er":{"l":["ax"],"u":["ax"],"d":[],"h":["ax"],"e":["ax"],"m.E":"ax"},"ev":{"l":["aJ"],"u":["aJ"],"h":["aJ"],"e":["aJ"],"m.E":"aJ"},"eK":{"d":[]},"bO":{"d":[]},"eR":{"l":["F"],"u":["F"],"h":["F"],"e":["F"],"m.E":"F"},"cP":{"ac":["a2"]},"f3":{"l":["aC?"],"u":["aC?"],"h":["aC?"],"e":["aC?"],"m.E":"aC?"},"cT":{"l":["r"],"u":["r"],"h":["r"],"e":["r"],"m.E":"r"},"fn":{"l":["aI"],"u":["aI"],"h":["aI"],"e":["aI"],"m.E":"aI"},"fv":{"l":["ar"],"u":["ar"],"h":["ar"],"e":["ar"],"m.E":"ar"},"dC":{"l":["I"],"h":["I"],"e":["I"],"m.E":"I"},"ac":{"fi":["1"]},"dP":{"l":["aT"],"h":["aT"],"e":["aT"],"m.E":"aT"},"e2":{"l":["aW"],"h":["aW"],"e":["aW"],"m.E":"aW"},"eo":{"l":["n"],"h":["n"],"e":["n"],"m.E":"n"},"i":{"I":[],"r":[],"d":[]},"ew":{"l":["aZ"],"h":["aZ"],"e":["aZ"],"m.E":"aZ"},"dp":{"G":["n","@"],"Y.V":"@"},"dq":{"d":[]},"aQ":{"d":[]},"e3":{"d":[]},"ei":{"l":["G<@,@>"],"h":["G<@,@>"],"e":["G<@,@>"],"m.E":"G<@,@>"},"bt":{"e":["1"]},"by":{"T":[]},"bz":{"T":[]},"x":{"T":[]},"co":{"T":[]},"bF":{"T":[]},"bG":{"T":[]},"e8":{"T":[]},"cH":{"T":[]},"c6":{"a5":[]},"bw":{"a5":[],"e":["a5?"]},"cJ":{"a5":[]},"cK":{"a5":[]},"cL":{"a5":[]},"dH":{"cD":[]},"a_":{"la":[]},"cI":{"l":["k"],"h":["k"],"e":["k"]}}'))
H.oL(v.typeUniverse,JSON.parse('{"av":1,"dM":1,"ag":1,"h":1,"bD":1,"be":2,"cc":2,"dS":2,"cO":1,"eM":1,"ce":1,"eE":1,"bM":1,"c7":2,"cm":1,"dQ":1,"bH":1,"bQ":1,"d0":1,"em":1,"en":2,"cR":1,"ci":1,"cn":1,"m":1,"cp":2,"Y":2,"fE":2,"cq":2,"ee":1,"cY":1,"cS":1,"d7":2,"d9":1,"dt":2,"dw":2,"e":1,"l":1,"dI":1,"eZ":1,"K":1,"cf":1,"bt":1,"by":1,"bz":1,"x":1}'))
var u={j:"May not create a face with a first vertex which is not attached to a shape.",i:"May not create a face with vertices attached to different shapes.",g:"May not create a line with a start vertex which is not attached to a shape.",a:"May not create a line with vertices attached to different shapes.",p:"Must initialize the shader prior to getting the program."}
var t=(function rtii(){var s=H.mW
return{d:s("b8"),D:s("dr"),E:s("b9"),U:s("h<@>"),h:s("I"),C:s("J"),B:s("f"),L:s("ao"),I:s("bv"),Y:s("qc"),s:s("cg"),r:s("bx"),b:s("av<@>"),T:s("ck"),m:s("lS"),g:s("aD"),p:s("u<@>"),J:s("ap<k,bl>"),j:s("l<@>"),G:s("co"),f:s("G<@,@>"),M:s("bE"),Z:s("bF"),O:s("bG"),o:s("cs"),t:s("W"),c:s("bh"),P:s("a6"),K:s("R"),q:s("ac<a2>"),V:s("m3"),k:s("cD"),N:s("n"),a:s("aY"),W:s("iv"),e:s("et"),l:s("cH"),n:s("ey"),u:s("ez"),F:s("eA"),v:s("eB"),w:s("bL"),Q:s("bN<n,n>"),R:s("eG"),y:s("bl"),i:s("y"),z:s("@"),S:s("k"),A:s("0&*"),_:s("R*"),x:s("lP<a6>?"),X:s("R?"),ba:s("cC?"),aJ:s("ej?"),aX:s("eu?"),H:s("a2")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.b9.prototype
C.K=J.a.prototype
C.b=J.av.prototype
C.c=J.cj.prototype
C.L=J.ck.prototype
C.d=J.bA.prototype
C.a=J.bc.prototype
C.M=J.aD.prototype
C.R=H.bh.prototype
C.v=J.e6.prototype
C.n=J.bL.prototype
C.w=W.b1.prototype
C.x=W.bO.prototype
C.y=new E.br("Browser.chrome")
C.o=new E.br("Browser.firefox")
C.p=new E.br("Browser.edge")
C.z=new E.br("Browser.other")
C.Y=new P.fZ()
C.A=new P.fY()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.H=new P.e4()
C.e=new P.iW()
C.I=new P.j_()
C.f=new P.ji()
C.m=new P.ba(0)
C.J=new P.ba(5e6)
C.i=s([0,0,32776,33792,1,10240,0,0])
C.j=s([0,0,65490,45055,65535,34815,65534,18431])
C.k=s([0,0,26624,1023,65534,2047,65534,2047])
C.O=s([0,0,32722,12287,65534,34815,65534,18431])
C.P=s([0,0,65498,45055,65535,34815,65534,18431])
C.h=s([0,0,24576,1023,65534,34815,65534,18431])
C.t=s([0,0,32754,11263,65534,34815,65534,18431])
C.u=s([0,0,65490,12287,65535,34815,65534,18431])
C.N=s([])
C.Q=new H.c8(0,{},C.N,H.mW("c8<n,n>"))
C.S=new E.bI("OperatingSystem.windows")
C.T=new E.bI("OperatingSystem.mac")
C.U=new E.bI("OperatingSystem.linux")
C.V=new E.bI("OperatingSystem.other")
C.W=new P.iX(!1)
C.X=new P.bP(null,2)})();(function staticFields(){$.jf=null
$.aA=0
$.c3=null
$.lG=null
$.mY=null
$.mR=null
$.n6=null
$.jP=null
$.k_=null
$.ly=null
$.bS=null
$.dc=null
$.dd=null
$.ls=!1
$.ay=C.f
$.af=[]
$.lO=null
$.lV=null
$.V=null
$.lW=null
$.lX=null
$.m5=null
$.m7=null
$.bj=null
$.mp=null
$.mm=null
$.mn=null
$.mo=null
$.ml=null
$.mr=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"q9","nd",function(){return H.pH("_$dart_dartClosure")})
s($,"qo","nf",function(){return H.aK(H.iB({
toString:function(){return"$receiver$"}}))})
s($,"qp","ng",function(){return H.aK(H.iB({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qq","nh",function(){return H.aK(H.iB(null))})
s($,"qr","ni",function(){return H.aK(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qu","nl",function(){return H.aK(H.iB(void 0))})
s($,"qv","nm",function(){return H.aK(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qt","nk",function(){return H.aK(H.mg(null))})
s($,"qs","nj",function(){return H.aK(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"qx","no",function(){return H.aK(H.mg(void 0))})
s($,"qw","nn",function(){return H.aK(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"qN","lC",function(){return P.op()})
s($,"qy","np",function(){return new P.iZ().$0()})
s($,"qz","nq",function(){return new P.iY().$0()})
s($,"qO","nu",function(){return new Int8Array(H.jC([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2]))})
s($,"qQ","nv",function(){return P.o8("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"r2","nw",function(){return P.p7()})
s($,"qG","nt",function(){return Z.at(0)})
s($,"qA","nr",function(){return Z.at(511)})
s($,"qI","bq",function(){return Z.at(1)})
s($,"qH","bp",function(){return Z.at(2)})
s($,"qC","bo",function(){return Z.at(4)})
s($,"qJ","bZ",function(){return Z.at(8)})
s($,"qK","c_",function(){return Z.at(16)})
s($,"qD","bY",function(){return Z.at(32)})
s($,"qE","di",function(){return Z.at(64)})
s($,"qF","ns",function(){return Z.at(96)})
s($,"qL","c0",function(){return Z.at(128)})
s($,"qB","bX",function(){return Z.at(256)})
s($,"q5","nc",function(){return new V.hi()})
r($,"q4","B",function(){return $.nc()})
r($,"qk","ne",function(){var q,p,o,n,m=V.l9(),l=$.mn
if(l==null)l=$.mn=V.on(0,1,0)
q=V.mq().D()
p=l.al(q).D()
o=q.al(p)
n=V.oo(m)
return V.aU(p.a,o.a,q.a,p.ar(0).a5(n),p.b,o.b,q.b,o.ar(0).a5(n),p.c,o.c,q.c,q.ar(0).a5(n),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cs,DataView:H.W,ArrayBufferView:H.W,Float32Array:H.bg,Float64Array:H.bg,Int16Array:H.dX,Int32Array:H.dY,Int8Array:H.dZ,Uint16Array:H.e_,Uint32Array:H.e0,Uint8ClampedArray:H.cu,CanvasPixelArray:H.cu,Uint8Array:H.bh,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLBodyElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,AccessibleNodeList:W.fR,HTMLAnchorElement:W.dl,HTMLAreaElement:W.dm,Blob:W.b8,HTMLCanvasElement:W.b9,CDATASection:W.au,CharacterData:W.au,Comment:W.au,ProcessingInstruction:W.au,Text:W.au,CSSPerspective:W.h7,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.c9,MSStyleCSSProperties:W.c9,CSS2Properties:W.c9,CSSImageValue:W.am,CSSKeywordValue:W.am,CSSNumericValue:W.am,CSSPositionValue:W.am,CSSResourceValue:W.am,CSSUnitValue:W.am,CSSURLImageValue:W.am,CSSStyleValue:W.am,CSSMatrixComponent:W.aB,CSSRotation:W.aB,CSSScale:W.aB,CSSSkew:W.aB,CSSTranslation:W.aB,CSSTransformComponent:W.aB,CSSTransformValue:W.h9,CSSUnparsedValue:W.ha,DataTransferItemList:W.hb,DOMException:W.hc,ClientRectList:W.ca,DOMRectList:W.ca,DOMRectReadOnly:W.cb,DOMStringList:W.dz,DOMTokenList:W.hd,Element:W.I,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ao,FileList:W.bv,FileWriter:W.dB,HTMLFormElement:W.dD,Gamepad:W.aC,History:W.hr,HTMLCollection:W.bb,HTMLFormControlsCollection:W.bb,HTMLOptionsCollection:W.bb,ImageData:W.cg,HTMLInputElement:W.bx,KeyboardEvent:W.bd,Location:W.hZ,MediaList:W.i1,MessagePort:W.bE,MIDIInputMap:W.dU,MIDIOutputMap:W.dV,MimeType:W.aE,MimeTypeArray:W.dW,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cv,RadioNodeList:W.cv,Plugin:W.aF,PluginArray:W.e7,RTCStatsReport:W.eb,HTMLSelectElement:W.ed,SourceBuffer:W.aw,SourceBufferList:W.eg,SpeechGrammar:W.aH,SpeechGrammarList:W.eh,SpeechRecognitionResult:W.aI,Storage:W.el,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableCellElement:W.aY,HTMLTableDataCellElement:W.aY,HTMLTableHeaderCellElement:W.aY,TextTrack:W.ax,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.eq,TextTrackList:W.er,TimeRanges:W.iu,Touch:W.aJ,TouchEvent:W.bi,TouchList:W.ev,TrackDefaultList:W.iy,CompositionEvent:W.aL,FocusEvent:W.aL,TextEvent:W.aL,UIEvent:W.aL,URL:W.iV,VideoTrackList:W.eK,WheelEvent:W.b1,Window:W.bO,DOMWindow:W.bO,CSSRuleList:W.eR,ClientRect:W.cP,DOMRect:W.cP,GamepadList:W.f3,NamedNodeMap:W.cT,MozNamedAttrMap:W.cT,SpeechRecognitionResultList:W.fn,StyleSheetList:W.fv,SVGLength:P.aT,SVGLengthList:P.dP,SVGNumber:P.aW,SVGNumberList:P.e2,SVGPointList:P.i7,SVGStringList:P.eo,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGScriptElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGTransform:P.aZ,SVGTransformList:P.ew,AudioBuffer:P.fW,AudioParamMap:P.dp,AudioTrackList:P.dq,AudioContext:P.aQ,webkitAudioContext:P.aQ,BaseAudioContext:P.aQ,OfflineAudioContext:P.e3,WebGL2RenderingContext:P.cC,SQLResultSetRowList:P.ei})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Z.pP
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
