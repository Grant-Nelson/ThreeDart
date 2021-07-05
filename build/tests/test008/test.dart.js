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
a[c]=function(){a[c]=function(){H.p3(b)}
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
if(a[b]!==s)H.p4(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kC(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kg:function kg(){},
ki:function(a){return new H.cs("Field '"+a+"' has been assigned during initialization.")},
jP:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ih:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ni:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
oE:function(a,b,c){return a},
mY:function(a,b){if(t.U.b(a))return new H.cj(a,b)
return new H.bg(a,b)},
kd:function(){return new P.bS("No element")},
mQ:function(){return new P.bS("Too many elements")},
ng:function(a,b){H.es(a,0,J.aC(a)-1,b)},
es:function(a,b,c,d){if(c-b<=32)H.nf(a,b,c,d)
else H.ne(a,b,c,d)},
nf:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.br(a);s<=c;++s){q=r.i(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.aa()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.i(a,n))
p=n}r.m(a,p,q)}},
ne:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.ab(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.ab(a4+a5,2),f=g-j,e=g+j,d=J.br(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aa()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.i(a3,a4))
d.m(a3,e,d.i(a3,a5))
r=a4+1
q=a5-1
if(J.T(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.i(a3,p)
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
H.es(a3,a4,r-2,a6)
H.es(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.T(a6.$2(d.i(a3,r),b),0);)++r
for(;J.T(a6.$2(d.i(a3,q),a0),0);)--q
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
break}}H.es(a3,r,q,a6)}else H.es(a3,r,q,a6)},
cs:function cs(a){this.a=a},
l:function l(a){this.a=a},
h:function h(){},
cw:function cw(){},
aT:function aT(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bg:function bg(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=null
this.b=a
this.c=b},
cB:function cB(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
cm:function cm(){},
eT:function eT(){},
bU:function bU(){},
mI:function(){throw H.b(P.v("Cannot modify unmodifiable Map"))},
m6:function(a){var s,r=H.m5(a)
if(r!=null)return r
s="minified:"+a
return s},
m0:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
r:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c7(a)
return s},
cJ:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
l5:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a2(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.B(q,o)|32)>r)return n}return parseInt(a,b)},
cK:function(a){return H.n_(a)},
n_:function(a){var s,r,q,p
if(a instanceof P.N)return H.ah(H.bs(a),null)
if(J.dr(a)===C.S||t.cr.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ah(H.bs(a),null)},
n0:function(){if(!!self.location)return self.location.href
return null},
l4:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
n8:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.y)(a),++r){q=a[r]
if(!H.jH(q))throw H.b(H.dq(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aD(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.dq(q))}return H.l4(p)},
l6:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jH(q))throw H.b(H.dq(q))
if(q<0)throw H.b(H.dq(q))
if(q>65535)return H.n8(a)}return H.l4(a)},
n9:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ak:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aD(s,10)|55296)>>>0,s&1023|56320)}}throw H.b(P.a2(a,0,1114111,null,null))},
bO:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n7:function(a){var s=H.bO(a).getFullYear()+0
return s},
n5:function(a){var s=H.bO(a).getMonth()+1
return s},
n1:function(a){var s=H.bO(a).getDate()+0
return s},
n2:function(a){var s=H.bO(a).getHours()+0
return s},
n4:function(a){var s=H.bO(a).getMinutes()+0
return s},
n6:function(a){var s=H.bO(a).getSeconds()+0
return s},
n3:function(a){var s=H.bO(a).getMilliseconds()+0
return s},
oR:function(a){throw H.b(H.dq(a))},
d:function(a,b){if(a==null)J.aC(a)
throw H.b(H.c4(a,b))},
c4:function(a,b){var s,r="index"
if(!H.jH(b))return new P.aq(!0,b,r,null)
s=J.aC(a)
if(b<0||b>=s)return P.I(b,a,r,null,s)
return P.em(b,r)},
oI:function(a,b,c){if(a>c)return P.a2(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a2(b,a,c,"end",null)
return new P.aq(!0,b,"end",null)},
dq:function(a){return new P.aq(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.ec()
s=new Error()
s.dartException=a
r=H.p5
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
p5:function(){return J.c7(this.dartException)},
H:function(a){throw H.b(a)},
y:function(a){throw H.b(P.as(a))},
aI:function(a){var s,r,q,p,o,n
a=H.m3(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iC:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
li:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kh:function(a,b){var s=b==null,r=s?null:b.method
return new H.dZ(a,r,s?null:b.receiver)},
ad:function(a){if(a==null)return new H.hZ(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bt(a,a.dartException)
return H.oA(a)},
bt:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aD(r,16)&8191)===10)switch(q){case 438:return H.bt(a,H.kh(H.r(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.r(s)+" (Error "+q+")"
return H.bt(a,new H.cI(p,e))}}if(a instanceof TypeError){o=$.ma()
n=$.mb()
m=$.mc()
l=$.md()
k=$.mg()
j=$.mh()
i=$.mf()
$.me()
h=$.mj()
g=$.mi()
f=o.a9(s)
if(f!=null)return H.bt(a,H.kh(s,f))
else{f=n.a9(s)
if(f!=null){f.method="call"
return H.bt(a,H.kh(s,f))}else{f=m.a9(s)
if(f==null){f=l.a9(s)
if(f==null){f=k.a9(s)
if(f==null){f=j.a9(s)
if(f==null){f=i.a9(s)
if(f==null){f=l.a9(s)
if(f==null){f=h.a9(s)
if(f==null){f=g.a9(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bt(a,new H.cI(s,f==null?e:f.method))}}return H.bt(a,new H.eS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cO()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bt(a,new P.aq(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cO()
return a},
kD:function(a){var s
if(a==null)return new H.fG(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fG(a)},
oK:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
oV:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.B("Unsupported number of arguments for wrapped closure"))},
c3:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oV)
a.$identity=s
return s},
mH:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ex().constructor.prototype):Object.create(new H.bw(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aD
if(typeof r!=="number")return r.R()
$.aD=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kR(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mD(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kR(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mD:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lZ,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.mB:H.mA
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
mE:function(a,b,c,d){var s=H.kQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kR:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mG(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mE(r,!p,s,b)
if(r===0){p=$.aD
if(typeof p!=="number")return p.R()
$.aD=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c8
return new Function(p+(o==null?$.c8=H.hj("self"):o)+";return "+n+"."+H.r(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aD
if(typeof p!=="number")return p.R()
$.aD=p+1
m+=p
p="return function("+m+"){return this."
o=$.c8
return new Function(p+(o==null?$.c8=H.hj("self"):o)+"."+H.r(s)+"("+m+");}")()},
mF:function(a,b,c,d){var s=H.kQ,r=H.mC
switch(b?-1:a){case 0:throw H.b(new H.ep("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mG:function(a,b){var s,r,q,p,o,n,m,l=$.c8
if(l==null)l=$.c8=H.hj("self")
s=$.kP
if(s==null)s=$.kP=H.hj("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.mF(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.r(r)+"(this."+s+");"
n=$.aD
if(typeof n!=="number")return n.R()
$.aD=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.r(r)+"(this."+s+", "+m+");"
n=$.aD
if(typeof n!=="number")return n.R()
$.aD=n+1
return new Function(o+n+"}")()},
kC:function(a,b,c,d,e,f,g){return H.mH(a,b,c,d,!!e,!!f,g)},
mA:function(a,b){return H.fV(v.typeUniverse,H.bs(a.a),b)},
mB:function(a,b){return H.fV(v.typeUniverse,H.bs(a.c),b)},
kQ:function(a){return a.a},
mC:function(a){return a.c},
hj:function(a){var s,r,q,p=new H.bw("self","target","receiver","name"),o=J.kf(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bu("Field name "+a+" not found."))},
p3:function(a){throw H.b(new P.dH(a))},
oN:function(a){return v.getIsolateTag(a)},
p4:function(a){return H.H(new H.cs(a))},
qc:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oX:function(a){var s,r,q,p,o,n=$.lY.$1(a),m=$.jK[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jT[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lU.$2(a,n)
if(q!=null){m=$.jK[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jT[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.k5(s)
$.jK[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jT[n]=s
return s}if(p==="-"){o=H.k5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.m1(a,s)
if(p==="*")throw H.b(P.iQ(n))
if(v.leafTags[n]===true){o=H.k5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.m1(a,s)},
m1:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kF(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k5:function(a){return J.kF(a,!1,null,!!a.$iu)},
oZ:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.k5(s)
else return J.kF(s,c,null,null)},
oT:function(){if(!0===$.kE)return
$.kE=!0
H.oU()},
oU:function(){var s,r,q,p,o,n,m,l
$.jK=Object.create(null)
$.jT=Object.create(null)
H.oS()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.m2.$1(o)
if(n!=null){m=H.oZ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oS:function(){var s,r,q,p,o,n,m=C.H()
m=H.c2(C.I,H.c2(C.J,H.c2(C.u,H.c2(C.u,H.c2(C.K,H.c2(C.L,H.c2(C.M(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lY=new H.jQ(p)
$.lU=new H.jR(o)
$.m2=new H.jS(n)},
c2:function(a,b){return a(b)||b},
mU:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.Z("Illegal RegExp pattern ("+String(n)+")",a,null))},
m4:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
oJ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kI:function(a,b,c){var s=H.p1(a,b,c)
return s},
p1:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m3(b),'g'),H.oJ(c))},
cd:function cd(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iB:function iB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cI:function cI(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a){this.a=a},
hZ:function hZ(a){this.a=a},
fG:function fG(a){this.a=a
this.b=null},
bb:function bb(){},
eF:function eF(){},
ex:function ex(){},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ep:function ep(a){this.a=a},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hK:function hK(a){this.a=a},
hN:function hN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ct:function ct(a){this.a=a},
e1:function e1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
dX:function dX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jF:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.br(a)
r=s.gk(a)
q=P.cx(r,null,!1)
for(p=0;p<s.gk(a);++p){o=s.i(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.c4(b,a))},
o8:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.oI(a,b,c))
return b},
cD:function cD(){},
R:function R(){},
bM:function bM(){},
bi:function bi(){},
cE:function cE(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
cF:function cF(){},
bj:function bj(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
lc:function(a,b){var s=b.c
return s==null?b.c=H.ks(a,b.z,!0):s},
lb:function(a,b){var s=b.c
return s==null?b.c=H.dg(a,"kY",[b.z]):s},
ld:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ld(a.z)
return s===11||s===12},
nc:function(a){return a.cy},
lX:function(a){return H.kt(v.typeUniverse,a,!1)},
b1:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.lC(a,r,!0)
case 7:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.ks(a,r,!0)
case 8:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.lB(a,r,!0)
case 9:q=b.Q
p=H.dp(a,q,a0,a1)
if(p===q)return b
return H.dg(a,b.z,p)
case 10:o=b.z
n=H.b1(a,o,a0,a1)
m=b.Q
l=H.dp(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kq(a,n,l)
case 11:k=b.z
j=H.b1(a,k,a0,a1)
i=b.Q
h=H.ox(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lA(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dp(a,g,a0,a1)
o=b.z
n=H.b1(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kr(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hb("Attempted to substitute unexpected RTI kind "+c))}},
dp:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b1(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
oy:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b1(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
ox:function(a,b,c,d){var s,r=b.a,q=H.dp(a,r,c,d),p=b.b,o=H.dp(a,p,c,d),n=b.c,m=H.oy(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fi()
s.a=q
s.b=o
s.c=m
return s},
qe:function(a,b){a[v.arrayRti]=b
return a},
oF:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lZ(s)
return a.$S()}return null},
m_:function(a,b){var s
if(H.ld(b))if(a instanceof H.bb){s=H.oF(a)
if(s!=null)return s}return H.bs(a)},
bs:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.ky(a)}if(Array.isArray(a))return H.lL(a)
return H.ky(J.dr(a))},
lL:function(a){var s=a[v.arrayRti],r=t.u
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Y:function(a){var s=a.$ti
return s!=null?s:H.ky(a)},
ky:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.og(a,s)},
og:function(a,b){var s=a instanceof H.bb?a.__proto__.__proto__.constructor:b,r=H.nR(v.typeUniverse,s.name)
b.$ccache=r
return r},
lZ:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kt(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
of:function(a){var s,r,q,p=this
if(p===t.K)return H.dl(p,a,H.ok)
if(!H.aL(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dl(p,a,H.on)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jH
else if(r===t.i||r===t.H)q=H.oj
else if(r===t.N)q=H.ol
else q=r===t.cB?H.jG:null
if(q!=null)return H.dl(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.oW)){p.r="$i"+s
return H.dl(p,a,H.om)}}else if(s===7)return H.dl(p,a,H.od)
return H.dl(p,a,H.ob)},
dl:function(a,b,c){a.b=c
return a.b(b)},
oe:function(a){var s,r=this,q=H.oa
if(!H.aL(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.o7
else if(r===t.K)q=H.o6
else{s=H.ds(r)
if(s)q=H.oc}r.a=q
return r.a(a)},
kB:function(a){var s,r=a.y
if(!H.aL(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kB(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ob:function(a){var s=this
if(a==null)return H.kB(s)
return H.L(v.typeUniverse,H.m_(a,s),null,s,null)},
od:function(a){if(a==null)return!0
return this.z.b(a)},
om:function(a){var s,r=this
if(a==null)return H.kB(r)
s=r.r
if(a instanceof P.N)return!!a[s]
return!!J.dr(a)[s]},
oa:function(a){var s,r=this
if(a==null){s=H.ds(r)
if(s)return a}else if(r.b(a))return a
H.lO(a,r)},
oc:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lO(a,s)},
lO:function(a,b){throw H.b(H.nH(H.lt(a,H.m_(a,b),H.ah(b,null))))},
lt:function(a,b,c){var s=P.hA(a),r=H.ah(b==null?H.bs(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nH:function(a){return new H.de("TypeError: "+a)},
a4:function(a,b){return new H.de("TypeError: "+H.lt(a,null,b))},
ok:function(a){return a!=null},
o6:function(a){if(a!=null)return a
throw H.b(H.a4(a,"Object"))},
on:function(a){return!0},
o7:function(a){return a},
jG:function(a){return!0===a||!1===a},
lM:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a4(a,"bool"))},
q0:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a4(a,"bool"))},
q_:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a4(a,"bool?"))},
q1:function(a){if(typeof a=="number")return a
throw H.b(H.a4(a,"double"))},
q3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a4(a,"double"))},
q2:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a4(a,"double?"))},
jH:function(a){return typeof a=="number"&&Math.floor(a)===a},
jz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a4(a,"int"))},
q5:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a4(a,"int"))},
q4:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a4(a,"int?"))},
oj:function(a){return typeof a=="number"},
q6:function(a){if(typeof a=="number")return a
throw H.b(H.a4(a,"num"))},
q8:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a4(a,"num"))},
q7:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a4(a,"num?"))},
ol:function(a){return typeof a=="string"},
jA:function(a){if(typeof a=="string")return a
throw H.b(H.a4(a,"String"))},
qa:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a4(a,"String"))},
q9:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a4(a,"String?"))},
ot:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ah(a[q],b)
return s},
lP:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.R(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ah(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ah(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ah(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ah(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ah(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ah:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ah(a.z,b)
return s}if(l===7){r=a.z
s=H.ah(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ah(a.z,b)+">"
if(l===9){p=H.oz(a.z)
o=a.Q
return o.length!==0?p+("<"+H.ot(o,b)+">"):p}if(l===11)return H.lP(a,b,null)
if(l===12)return H.lP(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
oz:function(a){var s,r=H.m5(a)
if(r!=null)return r
s="minified:"+a
return s},
lD:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nR:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kt(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dh(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dg(a,b,q)
n[b]=o
return o}else return m},
nP:function(a,b){return H.lK(a.tR,b)},
nO:function(a,b){return H.lK(a.eT,b)},
kt:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.ly(H.lw(a,null,b,c))
r.set(b,s)
return s},
fV:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.ly(H.lw(a,b,c,!0))
q.set(c,r)
return r},
nQ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kq(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b0:function(a,b){b.a=H.oe
b.b=H.of
return b},
dh:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.al(null,null)
s.y=b
s.cy=c
r=H.b0(a,s)
a.eC.set(c,r)
return r},
lC:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nM(a,b,r,c)
a.eC.set(r,s)
return s},
nM:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aL(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.al(null,null)
q.y=6
q.z=b
q.cy=c
return H.b0(a,q)},
ks:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nL(a,b,r,c)
a.eC.set(r,s)
return s},
nL:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aL(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ds(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ds(q.z))return q
else return H.lc(a,b)}}p=new H.al(null,null)
p.y=7
p.z=b
p.cy=c
return H.b0(a,p)},
lB:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nJ(a,b,r,c)
a.eC.set(r,s)
return s},
nJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aL(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dg(a,"kY",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.al(null,null)
q.y=8
q.z=b
q.cy=c
return H.b0(a,q)},
nN:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.al(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b0(a,s)
a.eC.set(q,r)
return r},
fU:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nI:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dg:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fU(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.al(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b0(a,r)
a.eC.set(p,q)
return q},
kq:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fU(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.al(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b0(a,o)
a.eC.set(q,n)
return n},
lA:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fU(m)
if(j>0){s=l>0?",":""
r=H.fU(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nI(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.al(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b0(a,o)
a.eC.set(q,r)
return r},
kr:function(a,b,c,d){var s,r=b.cy+("<"+H.fU(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nK(a,b,c,r,d)
a.eC.set(r,s)
return s},
nK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b1(a,b,r,0)
m=H.dp(a,c,r,0)
return H.kr(a,n,m,c!==m)}}l=new H.al(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b0(a,l)},
lw:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ly:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.nB(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lx(a,r,h,g,!1)
else if(q===46)r=H.lx(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b_(a.u,a.e,g.pop()))
break
case 94:g.push(H.nN(a.u,g.pop()))
break
case 35:g.push(H.dh(a.u,5,"#"))
break
case 64:g.push(H.dh(a.u,2,"@"))
break
case 126:g.push(H.dh(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kp(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dg(p,n,o))
else{m=H.b_(p,a.e,n)
switch(m.y){case 11:g.push(H.kr(p,m,o,a.n))
break
default:g.push(H.kq(p,m,o))
break}}break
case 38:H.nC(a,g)
break
case 42:p=a.u
g.push(H.lC(p,H.b_(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.ks(p,H.b_(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lB(p,H.b_(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fi()
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
H.kp(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.lA(p,H.b_(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kp(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.nE(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b_(a.u,a.e,i)},
nB:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lx:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lD(s,o.z)[p]
if(n==null)H.H('No "'+p+'" in "'+H.nc(o)+'"')
d.push(H.fV(s,o,n))}else d.push(p)
return m},
nC:function(a,b){var s=b.pop()
if(0===s){b.push(H.dh(a.u,1,"0&"))
return}if(1===s){b.push(H.dh(a.u,4,"1&"))
return}throw H.b(P.hb("Unexpected extended operation "+H.r(s)))},
b_:function(a,b,c){if(typeof c=="string")return H.dg(a,c,a.sEA)
else if(typeof c=="number")return H.nD(a,b,c)
else return c},
kp:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b_(a,b,c[s])},
nE:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b_(a,b,c[s])},
nD:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hb("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hb("Bad index "+c+" for "+b.h(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aL(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aL(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.L(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.L(a,b.z,c,d,e)
if(r===6)return H.L(a,b.z,c,d,e)
return r!==7}if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=H.lc(a,d)
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.lb(a,b),c,d,e)}if(r===7){s=H.L(a,t.P,c,d,e)
return s&&H.L(a,b.z,c,d,e)}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.lb(a,d),e)}if(p===7){s=H.L(a,b,c,t.P,e)
return s||H.L(a,b,c,d.z,e)}if(q)return!1
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.lQ(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.lQ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oi(a,b,c,d,e)}return!1},
lQ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.L(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.L(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oi:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lD(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fV(a,b,l[p]),c,r[p],e))return!1
return!0},
ds:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aL(a))if(r!==7)if(!(r===6&&H.ds(a.z)))s=r===8&&H.ds(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oW:function(a){var s
if(!H.aL(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aL:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lK:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
al:function al(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fi:function fi(){this.c=this.b=this.a=null},
fd:function fd(){},
de:function de(a){this.a=a},
m5:function(a){return v.mangledGlobalNames[a]},
p_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jM:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kE==null){H.oT()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.iQ("Return interceptor for "+H.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jd
if(o==null)o=$.jd=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.oX(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){o=$.jd
if(o==null)o=$.jd=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
mR:function(a){if(a<0||a>4294967295)throw H.b(P.a2(a,0,4294967295,"length",null))
return J.mS(new Array(a))},
ke:function(a){if(a<0)throw H.b(P.bu("Length must be a non-negative integer: "+a))
return new Array(a)},
mS:function(a){return J.kf(a)},
kf:function(a){a.fixed$length=Array
return a},
mT:function(a,b){return J.mv(a,b)},
dr:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.dW.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.cr.prototype
if(typeof a=="boolean")return J.dV.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.N)return a
return J.jM(a)},
br:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.N)return a
return J.jM(a)},
h7:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.N)return a
return J.jM(a)},
oL:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bm.prototype
return a},
oM:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bm.prototype
return a},
ap:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.N)return a
return J.jM(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dr(a).q(a,b)},
kK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.br(a).i(a,b)},
k7:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m0(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.h7(a).m(a,b,c)},
mt:function(a,b,c){return J.ap(a).eF(a,b,c)},
mu:function(a,b,c,d){return J.ap(a).eY(a,b,c,d)},
mv:function(a,b){return J.oL(a).aG(a,b)},
h9:function(a,b){return J.h7(a).D(a,b)},
dv:function(a,b){return J.h7(a).E(a,b)},
mw:function(a){return J.ap(a).gac(a)},
kL:function(a){return J.ap(a).gan(a)},
mx:function(a){return J.ap(a).gcJ(a)},
k8:function(a){return J.dr(a).gC(a)},
aB:function(a){return J.h7(a).gL(a)},
aC:function(a){return J.br(a).gk(a)},
kM:function(a){return J.h7(a).fJ(a)},
my:function(a,b){return J.ap(a).fM(a,b)},
mz:function(a){return J.oM(a).fV(a)},
c7:function(a){return J.dr(a).h(a)},
a:function a(){},
dV:function dV(){},
cr:function cr(){},
aR:function aR(){},
eh:function eh(){},
bm:function bm(){},
aG:function aG(){},
au:function au(){},
dY:function dY(){},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bH:function bH(){},
cq:function cq(){},
dW:function dW(){},
aQ:function aQ(){}},P={
nq:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.oB()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c3(new P.j8(q),1)).observe(s,{childList:true})
return new P.j7(q,s,r)}else if(self.setImmediate!=null)return P.oC()
return P.oD()},
nr:function(a){self.scheduleImmediate(H.c3(new P.j9(a),0))},
ns:function(a){self.setImmediate(H.c3(new P.ja(a),0))},
nt:function(a){P.kl(C.m,a)},
kl:function(a,b){var s=C.c.ab(a.a,1000)
return P.nF(s<0?0:s,b)},
lh:function(a,b){var s=C.c.ab(a.a,1000)
return P.nG(s<0?0:s,b)},
nF:function(a,b){var s=new P.dd()
s.dz(a,b)
return s},
nG:function(a,b){var s=new P.dd()
s.dA(a,b)
return s},
pY:function(a){return new P.c_(a,1)},
ny:function(){return C.a5},
nz:function(a){return new P.c_(a,3)},
op:function(a){return new P.da(a)},
oq:function(){var s,r
for(s=$.c1;s!=null;s=$.c1){$.dn=null
r=s.b
$.c1=r
if(r==null)$.dm=null
s.a.$0()}},
ow:function(){$.kz=!0
try{P.oq()}finally{$.dn=null
$.kz=!1
if($.c1!=null)$.kJ().$1(P.lV())}},
ou:function(a){var s=new P.f1(a),r=$.dm
if(r==null){$.c1=$.dm=s
if(!$.kz)$.kJ().$1(P.lV())}else $.dm=r.b=s},
ov:function(a){var s,r,q,p=$.c1
if(p==null){P.ou(a)
$.dn=$.dm
return}s=new P.f1(a)
r=$.dn
if(r==null){s.b=p
$.c1=$.dn=s}else{q=r.b
s.b=q
$.dn=r.b=s
if(q==null)$.dm=s}},
lg:function(a,b){var s=$.aA
if(s===C.f)return P.kl(a,b)
return P.kl(a,s.f1(b))},
nk:function(a,b){var s=$.aA
if(s===C.f)return P.lh(a,b)
return P.lh(a,s.cG(b,t.ae))},
lR:function(a,b,c,d,e){P.ov(new P.jI(d,e))},
or:function(a,b,c,d){var s,r=$.aA
if(r===c)return d.$0()
$.aA=c
s=r
try{r=d.$0()
return r}finally{$.aA=s}},
os:function(a,b,c,d,e){var s,r=$.aA
if(r===c)return d.$1(e)
$.aA=c
s=r
try{r=d.$1(e)
return r}finally{$.aA=s}},
j8:function j8(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
dd:function dd(){this.c=0},
jr:function jr(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b){this.a=a
this.b=b},
bp:function bp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
da:function da(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
ez:function ez(){},
eA:function eA(){},
jy:function jy(){},
jI:function jI(a,b){this.a=a
this.b=b},
jg:function jg(){},
jh:function jh(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function(a,b){return new H.aj(a.a1("@<0>").bq(b).a1("aj<1,2>"))},
mW:function(a,b,c){return H.oK(a,new H.aj(b.a1("@<0>").bq(c).a1("aj<1,2>")))},
bI:function(a,b){return new H.aj(a.a1("@<0>").bq(b).a1("aj<1,2>"))},
cu:function(a){return new P.cZ(a.a1("cZ<0>"))},
ko:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nA:function(a,b){var s=new P.d_(a,b)
s.c=a.e
return s},
mP:function(a,b,c){var s,r
if(P.kA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.ab.push(a)
try{P.oo(a,s)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}r=P.le(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kc:function(a,b,c){var s,r
if(P.kA(a))return b+"..."+c
s=new P.U(b)
$.ab.push(a)
try{r=s
r.a=P.le(r.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kA:function(a){var s,r
for(s=$.ab.length,r=0;r<s;++r)if(a===$.ab[r])return!0
return!1},
oo:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.r(l.gA(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gA(l);++j
if(!l.u()){if(j<=4){b.push(H.r(p))
return}r=H.r(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA(l);++j
for(;l.u();p=o,o=n){n=l.gA(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.r(p)
r=H.r(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
l0:function(a,b,c){var s=P.mV(b,c)
a.E(0,new P.hO(s,b,c))
return s},
l1:function(a,b){var s,r,q=P.cu(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.y)(a),++r)q.n(0,b.a(a[r]))
return q},
kj:function(a){var s,r={}
if(P.kA(a))return"{...}"
s=new P.U("")
try{$.ab.push(a)
s.a+="{"
r.a=!0
J.dv(a,new P.hS(r,s))
s.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cZ:function cZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jf:function jf(a){this.a=a
this.c=this.b=null},
d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cp:function cp(){},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(){},
q:function q(){},
cz:function cz(){},
hS:function hS(a,b){this.a=a
this.b=b},
Q:function Q(){},
fW:function fW(){},
cA:function cA(){},
bV:function bV(a,b){this.a=a
this.$ti=b},
er:function er(){},
d6:function d6(){},
d0:function d0(){},
di:function di(){},
dk:function dk(){},
nn:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.no(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
no:function(a,b,c,d){var s=a?$.ml():$.mk()
if(s==null)return null
if(0===c&&d===b.length)return P.lm(s,b)
return P.lm(s,b.subarray(c,P.aW(c,d,b.length)))},
lm:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ad(r)}return null},
kO:function(a,b,c,d,e,f){if(C.c.b5(f,4)!==0)throw H.b(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.Z("Invalid base64 padding, more than two '=' characters",a,b))},
o5:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
o4:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.br(a),r=0;r<p;++r){q=s.i(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
j0:function j0(){},
j_:function j_(){},
hg:function hg(){},
hh:function hh(){},
dE:function dE(){},
dG:function dG(){},
hy:function hy(){},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hI:function hI(a){this.a=a},
iY:function iY(){},
j1:function j1(){},
jw:function jw(a){this.b=0
this.c=a},
iZ:function iZ(a){this.a=a},
jv:function jv(a){this.a=a
this.b=16
this.c=0},
h8:function(a,b){var s=H.l5(a,b)
if(s!=null)return s
throw H.b(P.Z(a,null,null))},
mM:function(a){if(a instanceof H.bb)return a.h(0)
return"Instance of '"+H.cK(a)+"'"},
cx:function(a,b,c){var s,r=c?J.ke(a):J.mR(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hP:function(a,b){var s,r=[]
for(s=J.aB(a);s.u();)r.push(s.gA(s))
if(b)return r
return J.kf(r)},
mX:function(a,b){var s,r,q=J.ke(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
eC:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.aW(b,c,r)
return H.l6(b>0||c<r?s.slice(b,c):s)}if(t.l.b(a))return H.n9(a,b,P.aW(b,c,a.length))
return P.nh(a,b,c)},
nh:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a2(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a2(c,b,a.length,o,o))
r=J.aB(a)
for(q=0;q<b;++q)if(!r.u())throw H.b(P.a2(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gA(r))
else for(q=b;q<c;++q){if(!r.u())throw H.b(P.a2(c,b,q,o,o))
p.push(r.gA(r))}return H.l6(p)},
na:function(a){return new H.dX(a,H.mU(a,!1,!0,!1,!1,!1))},
le:function(a,b,c){var s=J.aB(b)
if(!s.u())return a
if(c.length===0){do a+=H.r(s.gA(s))
while(s.u())}else{a+=H.r(s.gA(s))
for(;s.u();)a=a+c+H.r(s.gA(s))}return a},
iT:function(){var s=H.n0()
if(s!=null)return P.nm(s)
throw H.b(P.v("'Uri.base' is not supported"))},
ju:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mr().b
s=s.test(b)}else s=!1
if(s)return b
r=c.gff().bS(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ak(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mJ:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dJ:function(a){if(a>=10)return""+a
return"0"+a},
kT:function(a){return new P.bc(1000*a)},
hA:function(a){if(typeof a=="number"||H.jG(a)||null==a)return J.c7(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mM(a)},
hb:function(a){return new P.dy(a)},
bu:function(a){return new P.aq(!1,null,null,a)},
em:function(a,b){return new P.cL(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cL(b,c,!0,a,d,"Invalid value")},
aW:function(a,b,c){if(0>a||a>c)throw H.b(P.a2(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.a2(b,a,c,"end",null))
return b}return c},
l7:function(a,b){if(a<0)throw H.b(P.a2(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.aC(b):e
return new P.dS(s,!0,a,c,"Index out of range")},
v:function(a){return new P.eU(a)},
iQ:function(a){return new P.eR(a)},
kk:function(a){return new P.bS(a)},
as:function(a){return new P.dF(a)},
B:function(a){return new P.ff(a)},
Z:function(a,b,c){return new P.hF(a,b,c)},
kH:function(a){H.p_(a)},
nm:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.B(a5,4)^58)*3|C.a.B(a5,0)^100|C.a.B(a5,1)^97|C.a.B(a5,2)^116|C.a.B(a5,3)^97)>>>0
if(s===0)return P.lj(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gde()
else if(s===32)return P.lj(C.a.t(a5,5,a4),0,a3).gde()}r=P.cx(8,0,!1)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.lS(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.lS(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.Z(a5,"..",n)))h=m>n+2&&C.a.Z(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.Z(a5,"file",0)){if(p<=0){if(!C.a.Z(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.t(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.aJ(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.Z(a5,"http",0)){if(i&&o+3===n&&C.a.Z(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.aJ(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.Z(a5,"https",0)){if(i&&o+4===n&&C.a.Z(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.aJ(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.t(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.fA(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.nZ(a5,0,q)
else{if(q===0)P.c0(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.o_(a5,d,p-1):""
b=P.nW(a5,p,o,!1)
i=o+1
if(i<n){a=H.l5(C.a.t(a5,i,n),a3)
a0=P.nY(a==null?H.H(P.Z("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.nX(a5,n,m,a3,j,b!=null)
a2=m<l?P.kv(a5,m+1,l,a3):a3
return new P.bq(j,c,b,a0,a1,a2,l<a4?P.nV(a5,l+1,a4):a3)},
ll:function(a){var s=t.N
return C.b.fk(a.split("&"),P.bI(s,s),new P.iW(C.e))},
nl:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iS(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.N(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.h8(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.h8(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
lk:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.iU(a),c=new P.iV(d,a)
if(a.length<2)d.$1("address is too short")
s=[]
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.N(a,r)
if(n===58){if(r===b){++r
if(C.a.N(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gah(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.nl(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aD(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
lE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c0:function(a,b,c){throw H.b(P.Z(c,a,b))},
nY:function(a,b){if(a!=null&&a===P.lE(b))return null
return a},
nW:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.N(a,b)===91){s=c-1
if(C.a.N(a,s)!==93)P.c0(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.nT(a,r,s)
if(q<s){p=q+1
o=P.lJ(a,C.a.Z(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lk(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.N(a,n)===58){q=C.a.bd(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.lJ(a,C.a.Z(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lk(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.o1(a,b,c)},
nT:function(a,b,c){var s=C.a.bd(a,"%",b)
return s>=b&&s<c?s:c},
lJ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.U(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.N(a,s)
if(p===37){o=P.kw(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.U("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.c0(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.U("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.N(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
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
o1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.N(a,s)
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
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.U("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.c0(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.N(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
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
nZ:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lG(C.a.B(a,b)))P.c0(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.B(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.c0(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.nS(r?a.toLowerCase():a)},
nS:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o_:function(a,b,c){return P.dj(a,b,c,C.X,!1)},
nX:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dj(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.S(s,"/"))s="/"+s
return P.o0(s,e,f)},
o0:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.S(a,"/"))return P.o2(a,!s||c)
return P.o3(a)},
kv:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bu("Both query and queryParameters specified"))
return P.dj(a,b,c,C.k,!0)}if(d==null)return null
s=new P.U("")
r.a=""
d.E(0,new P.js(new P.jt(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
nV:function(a,b,c){return P.dj(a,b,c,C.k,!0)},
kw:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.N(a,b+1)
r=C.a.N(a,n)
q=H.jP(s)
p=H.jP(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aD(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ak(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
ku:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.B(k,a>>>4)
s[2]=C.a.B(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.eN(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.B(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.B(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.eC(s,0,null)},
dj:function(a,b,c,d,e){var s=P.lI(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
lI:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.N(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kw(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.c0(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.N(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ku(o)}}if(p==null){p=new P.U("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.r(m)
if(typeof l!=="number")return H.oR(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
lH:function(a){if(C.a.S(a,"."))return!0
return C.a.cQ(a,"/.")!==-1},
o3:function(a){var s,r,q,p,o,n,m
if(!P.lH(a))return a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.T(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.l(s,"/")},
o2:function(a,b){var s,r,q,p,o,n
if(!P.lH(a))return!b?P.lF(a):a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gah(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gah(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.lF(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.l(s,"/")},
lF:function(a){var s,r,q,p=a.length
if(p>=2&&P.lG(C.a.B(a,0)))for(s=1;s<p;++s){r=C.a.B(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.au(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
nU:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.B(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bu("Invalid URL encoding"))}}return s},
kx:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.B(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.l(C.a.t(a,b,c))}else{p=[]
for(q=a.length,o=b;o<c;++o){r=C.a.B(a,o)
if(r>127)throw H.b(P.bu("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bu("Truncated URI"))
p.push(P.nU(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.bS(p)},
lG:function(a){var s=a|32
return 97<=s&&s<=122},
lj:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=[b-1]
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.B(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.Z(k,a,r))}}if(q<0&&r>b)throw H.b(P.Z(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.B(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gah(j)
if(p!==44||r!==n+7||!C.a.Z(a,"base64",n+1))throw H.b(P.Z("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.G.ft(0,a,m,s)
else{l=P.lI(a,m,s,C.k,!0)
if(l!=null)a=C.a.aJ(a,m,s,l)}return new P.iR(a,j,c)},
o9:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=new Array(22)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jC(h)
q=new P.jD()
p=new P.jE()
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
lS:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.ms()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.B(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
P:function P(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=a},
hu:function hu(){},
hv:function hv(){},
E:function E(){},
dy:function dy(a){this.a=a},
eN:function eN(){},
ec:function ec(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dS:function dS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eU:function eU(a){this.a=a},
eR:function eR(a){this.a=a},
bS:function bS(a){this.a=a},
dF:function dF(a){this.a=a},
ef:function ef(){},
cO:function cO(){},
dH:function dH(a){this.a=a},
ff:function ff(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
dU:function dU(){},
a8:function a8(){},
N:function N(){},
U:function U(a){this.a=a},
iW:function iW(a){this.a=a},
iS:function iS(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
bq:function bq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jt:function jt(a,b){this.a=a
this.b=b},
js:function js(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a){this.a=a},
jD:function jD(){},
jE:function jE(){},
fA:function fA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
f7:function f7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
oH:function(a){var s,r,q,p
if(t.I.b(a)){s=J.mx(a)
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
return new P.df(r,q,p)},
oG:function(a){if(a instanceof P.df)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var s,r,q,p,o
if(a==null)return null
s=P.bI(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.y)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
lN:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jG(a))return a
if(t.f.b(a))return P.lW(a)
if(t.j.b(a)){s=[]
J.dv(a,new P.jB(s))
a=s}return a},
lW:function(a){var s={}
J.dv(a,new P.jJ(s))
return s},
jm:function jm(){},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
jJ:function jJ(a){this.a=a},
fK:function fK(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
hD:function hD(){},
hE:function hE(){},
fy:function fy(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
e0:function e0(){},
aV:function aV(){},
ed:function ed(){},
i_:function i_(){},
bQ:function bQ(){},
eB:function eB(){},
i:function i(){},
aY:function aY(){},
eM:function eM(){},
fm:function fm(){},
fn:function fn(){},
fu:function fu(){},
fv:function fv(){},
fI:function fI(){},
fJ:function fJ(){},
fS:function fS(){},
fT:function fT(){},
he:function he(){},
dz:function dz(){},
hf:function hf(a){this.a=a},
dA:function dA(){},
aN:function aN(){},
ee:function ee(){},
f3:function f3(){},
bP:function bP(){},
ev:function ev(){},
fE:function fE(){},
fF:function fF(){}},W={
kN:function(){var s=document.createElement("a")
s.toString
return s},
k9:function(){var s=document.createElement("canvas")
s.toString
return s},
mL:function(a,b,c){var s=document.body
s.toString
s=new H.bo(new W.a3(C.p.a7(s,a,b,c)),new W.hw())
return t.h.a(s.gat(s))},
hx:function(a){return"wheel"},
ck:function(a){var s,r,q="element tag unavailable"
try{s=J.ap(a)
s.gda(a)
q=s.gda(a)}catch(r){H.ad(r)}return q},
kZ:function(a){var s=document.createElement("img")
s.toString
if(a!=null)s.src=a
return s},
mO:function(a){var s,r=document.createElement("input"),q=t.r.a(r)
try{q.type=a}catch(s){H.ad(s)}return q},
je:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lv:function(a,b,c,d){var s=W.je(W.je(W.je(W.je(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
S:function(a,b,c,d){var s=new W.fe(a,b,c==null?null:W.lT(new W.jc(c),t.B),!1)
s.eV()
return s},
lu:function(a){var s=W.kN(),r=window
s=new W.bZ(new W.jj(s,r.location))
s.du(a)
return s},
nw:function(a,b,c,d){return!0},
nx:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
lz:function(){var s=t.N
s=new W.fN(P.l1(C.z,s),P.cu(s),P.cu(s),P.cu(s),null)
s.dw(null,new H.cB(C.z,new W.jp()),["TEMPLATE"],null)
return s},
lT:function(a,b){var s=$.aA
if(s===C.f)return a
return s.cG(a,b)},
p:function p(){},
ha:function ha(){},
dw:function dw(){},
dx:function dx(){},
bv:function bv(){},
b8:function b8(){},
b9:function b9(){},
ba:function ba(){},
cb:function cb(){},
ar:function ar(){},
hn:function hn(){},
A:function A(){},
cf:function cf(){},
ho:function ho(){},
ai:function ai(){},
aF:function aF(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
cg:function cg(){},
hs:function hs(){},
ch:function ch(){},
ci:function ci(){},
dK:function dK(){},
ht:function ht(){},
f4:function f4(a,b){this.a=a
this.b=b},
w:function w(){},
hw:function hw(){},
f:function f(){},
c:function c(){},
ae:function ae(){},
bB:function bB(){},
dM:function dM(){},
dO:function dO(){},
at:function at(){},
hH:function hH(){},
bd:function bd(){},
be:function be(){},
bD:function bD(){},
bE:function bE(){},
bf:function bf(){},
hQ:function hQ(){},
hT:function hT(){},
bJ:function bJ(){},
e4:function e4(){},
hU:function hU(a){this.a=a},
e5:function e5(){},
hV:function hV(a){this.a=a},
av:function av(){},
e6:function e6(){},
af:function af(){},
a3:function a3(a){this.a=a},
n:function n(){},
cG:function cG(){},
aw:function aw(){},
ej:function ej(){},
eo:function eo(){},
i7:function i7(a){this.a=a},
eq:function eq(){},
am:function am(){},
et:function et(){},
ax:function ax(){},
eu:function eu(){},
ay:function ay(){},
ey:function ey(){},
ig:function ig(a){this.a=a},
ag:function ag(){},
aX:function aX(){},
cP:function cP(){},
eD:function eD(){},
eE:function eE(){},
bT:function bT(){},
an:function an(){},
aa:function aa(){},
eG:function eG(){},
eH:function eH(){},
iu:function iu(){},
az:function az(){},
bl:function bl(){},
eL:function eL(){},
iz:function iz(){},
aJ:function aJ(){},
iX:function iX(){},
eZ:function eZ(){},
aZ:function aZ(){},
bX:function bX(){},
bY:function bY(){},
f5:function f5(){},
cX:function cX(){},
fj:function fj(){},
d1:function d1(){},
fD:function fD(){},
fL:function fL(){},
f2:function f2(){},
fc:function fc(a){this.a=a},
kb:function kb(a,b){this.a=a
this.$ti=b},
fe:function fe(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jc:function jc(a){this.a=a},
kn:function kn(a){this.$ti=a},
bZ:function bZ(a){this.a=a},
G:function G(){},
cH:function cH(a){this.a=a},
hY:function hY(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(){},
jk:function jk(){},
jl:function jl(){},
fN:function fN(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jp:function jp(){},
fM:function fM(){},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jj:function jj(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a
this.b=0},
jx:function jx(a){this.a=a},
f6:function f6(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fw:function fw(){},
fx:function fx(){},
fz:function fz(){},
d8:function d8(){},
d9:function d9(){},
fB:function fB(){},
fC:function fC(){},
fH:function fH(){},
fO:function fO(){},
fP:function fP(){},
db:function db(){},
dc:function dc(){},
fQ:function fQ(){},
fR:function fR(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){}},K={
J:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.B("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.B(a,0)
r=C.a.B(b,0)
if(s>r){q=r
r=s
s=q}return new K.i2(s,r)},
aM:function aM(){},
dQ:function dQ(){},
a7:function a7(a){this.a=a},
i2:function i2(a,b){this.a=a
this.b=b},
o:function o(a){this.a=a}},L={
ix:function(){var s=t.N
return new L.iw(P.bI(s,t.aJ),P.bI(s,t.aX),P.cu(s))},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(a,b){this.b=a
this.c=b},
iw:function iw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iA:function iA(a,b){this.b=a
this.c=!1
this.a=b}},O={
kS:function(){return new O.by([])},
by:function by(a){this.a=a
this.c=this.b=null},
cC:function cC(a){this.a=a
this.b=null},
ij:function ij(){}},E={
kW:function(){var s=O.kS(),r=new E.bA(s)
s.bm(r.gfu(),r.gfz())
r.scc(0,null)
r.sdc(null)
r.saZ(null)
return r},
nu:function(){var s=window.navigator.vendor
s.toString
if(C.a.F(s,"Google"))return C.E
s=window.navigator.userAgent
s.toString
if(C.a.F(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.F(s,"Trident")||C.a.F(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.F(s,"Microsoft"))return C.r
return C.F},
nv:function(){var s=window.navigator.appVersion
s.toString
if(C.a.F(s,"Win"))return C.a_
if(C.a.F(s,"Mac"))return C.a0
if(C.a.F(s,"Linux"))return C.a1
return C.a2},
nb:function(a,b){var s
Date.now()
s=new E.i3(a,new P.P(Date.now(),!1),new P.P(Date.now(),!1),new O.cC([]),new O.cC([]),new O.cC([]),[null],P.bI(t.N,t.v))
s.ds(a,b)
return s},
nj:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.lf(a,!0,!0,!0,!1)
s=W.k9()
r=s.style
r.width="100%"
r.height="100%"
J.kL(a).n(0,s)
return E.lf(s,!0,!0,!0,!1)},
lf:function(a,b,c,d,e){var s,r,q,p,o,n,m="mousemove",l=t.z,k=t.ba.a(C.i.ca(a,"webgl2",P.mW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],l,l)))
if(k==null)throw H.b(P.B("Failed to get the rendering context for WebGL."))
s=E.nb(k,a)
l=H.jz(k.getParameter(3379))
H.jz(k.getParameter(34076))
r=[]
q=$.kX
if(q==null){p=E.nu()
E.nv()
q=$.kX=new E.jb(p)}o=new X.eW(a,r,q.a===C.q?0.16666666666666666:0.005555555555555556)
n=document
n.toString
r.push(W.S(n,"contextmenu",o.ge6(),!1))
r.push(W.S(a,"focus",o.gec(),!1))
r.push(W.S(a,"blur",o.ge0(),!1))
r.push(W.S(n,"keyup",o.geg(),!1))
r.push(W.S(n,"keydown",o.gee(),!1))
r.push(W.S(a,"mousedown",o.gej(),!1))
r.push(W.S(a,"mouseup",o.gen(),!1))
r.push(W.S(a,m,o.gel(),!1))
W.hx(a)
W.hx(a)
r.push(W.S(a,W.hx(a),o.gep(),!1))
r.push(W.S(n,m,o.ge8(),!1))
r.push(W.S(n,"mouseup",o.gea(),!1))
r.push(W.S(n,"pointerlockchange",o.ger(),!1))
r.push(W.S(a,"touchstart",o.geB(),!1))
r.push(W.S(a,"touchend",o.gex(),!1))
r.push(W.S(a,"touchmove",o.gez(),!1))
l=new E.eI(a,s,new T.ir(k,l),o,new P.P(Date.now(),!1))
l.cs()
return l},
hi:function hi(){},
bA:function bA(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bx:function bx(a){this.b=a},
bN:function bN(a){this.b=a},
jb:function jb(a){this.a=a},
i3:function i3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.y=0
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
eI:function eI(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
it:function it(a){this.a=a}},Z={
ls:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.jF(c)),35044)
a.bindBuffer(b,null)
return new Z.f_(b,s)},
ao:function(a){return new Z.cW(a)},
f_:function f_(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j6:function j6(a){this.a=a},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.a=a}},D={
K:function(){return new D.cl()},
hk:function hk(){},
cl:function cl(){var _=this
_.c=_.b=_.a=null
_.d=0},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
O:function O(){},
bF:function bF(){},
bG:function bG(){},
C:function C(a,b,c){this.c=a
this.d=b
this.e=c}},X={ca:function ca(a,b){this.a=a
this.b=b},e_:function e_(a,b){this.a=a
this.b=b},hL:function hL(a,b){this.c=a
this.d=b},cy:function cy(a,b,c){this.x=a
this.c=b
this.d=c},hR:function hR(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},bK:function bK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},hW:function hW(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bL:function bL(a,b,c){this.x=a
this.c=b
this.d=c},el:function el(){},cQ:function cQ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iy:function iy(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eW:function eW(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
mN:function(a){var s=new V.bz(0,0,0,1),r=$.la
if(r==null){r=V.l9(0,0,1,1)
$.la=r}return new X.hG(s,r)},
hG:function hG(a,b){this.a=a
this.r=b
this.x=null},
eg:function eg(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
ii:function ii(){}},V={
p6:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.b5(a-b,s)
return(a<0?a+s:a)+b},
x:function(a,b,c){$.F().toString
return C.a.ae(C.d.c7(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
jL:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=c+b+1,r=0,q=0;q<4;++q){p=a[q]
$.F().toString
o=C.a.ae(C.d.c7(Math.abs(p-0)<1e-9?0:p,b),s)
r=Math.max(r,o.length)
l.push(o)}for(s=l.length,n=s-1;n>=0;--n,s=m){if(n>=s)return H.d(l,n)
s=C.a.ae(l[n],r)
m=l.length
if(n>=m)return H.d(l,n)
l[n]=s}return l},
kG:function(a){return C.d.fS(Math.pow(2,C.d.bW(Math.log(a)/Math.log(2))))},
bh:function(){var s=$.l2
return s==null?$.l2=V.aU(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aU:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.e3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mZ:function(a,b,c){return new V.bk(a,b,c)},
l9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.en(a,b,c,d)},
eX:function(){var s=$.lq
return s==null?$.lq=new V.X(0,0,0):s},
ln:function(a,b,c){return new V.X(a,b,c)},
np:function(a){return new V.X(a.a,a.b,a.c)},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(){},
e3:function e3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
p0:function(a){P.nk(C.Q,new V.k6(a))},
nd:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.b(P.B("The html document body was null."))
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
W.S(n,"scroll",new V.id(s),!1)
return new V.ib(o)},
aE:function aE(){},
k6:function k6(a){this.a=a},
dI:function dI(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dP:function dP(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dR:function dR(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ei:function ei(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a
this.b=null},
id:function id(a){this.a=a},
ic:function ic(a){this.a=a},
ie:function ie(a){this.a=a},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(){}},U={
hm:function(){return new U.hl()},
hl:function hl(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cc:function cc(a){this.a=a
this.b=null},
bC:function bC(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a0:function a0(){},
cS:function cS(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cT:function cT(a,b,c,d,e){var _=this
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
cU:function cU(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={dL:function dL(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
km:function(a,b,c,d,e){var s=new A.iF([],a,c,e)
s.f=d
s.e=P.cx(d,0,!1)
return s},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a){this.a=a},
cM:function cM(){},
iD:function iD(){},
iM:function iM(a){this.a=a},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eO:function eO(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
eP:function eP(a,b,c){this.a=a
this.c=b
this.d=c},
eQ:function eQ(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oO:function(a,b){return F.p2(b,a,new F.jN(new F.jO()))},
p2:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.b(P.B("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.b(P.B("Must have 1 or more divisions of the height for a surface."))
s=new F.i8()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.D(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.cD(new V.bz(n,0,0,1),new V.a1(p,1))
c.$3(m,p,0)
r.push(m.bT(null))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.D(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cD(new V.bz(h,g,f,1),new V.a1(p,k))
c.$3(m,p,l)
r.push(m.bT(null))}}s.gV().eZ(a+1,b+1,r)
return s},
lr:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cV()
h=$.mm()
s=$.b5()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b4().a)!==0)q.r=e
if((r&$.b3().a)!==0)q.x=b
if((r&$.b6().a)!==0)q.y=f
if((r&$.c6().a)!==0)q.z=g
if((r&$.mn().a)!==0)q.Q=c
if((r&$.b7().a)!==0)q.ch=i
if((r&$.c5().a)!==0)q.cx=a
return q},
jO:function jO(){},
jN:function jN(a){this.a=a},
aP:function aP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(){this.b=this.a=null},
i8:function i8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cN:function cN(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
i9:function i9(a){this.b=a},
cV:function cV(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j5:function j5(a){this.a=a},
j4:function j4(a){this.a=a},
D:function D(a,b){this.a=a
this.b=!1
this.c=b},
bW:function bW(a,b,c){this.b=a
this.c=b
this.d=c},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.b=a
this.c=b}},T={ik:function ik(){},il:function il(){},iq:function iq(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},ir:function ir(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},is:function is(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oY:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2="bumpMaps",a3="modifiers",a4=V.nd("Test 008"),a5=W.k9()
a5.className="pageLargeCanvas"
a5.id=a1
a4.a.appendChild(a5).toString
a4.cE(["A custom shader for testing and fixing the normal distortion ","equation used for bump maps. This displays the normal vectors ","across a surface."])
a4.eX(["bumpMaps","scalars"])
a4.cE(["\xab[Back to Tests|../]"])
s=document
r=s.getElementById(a1)
if(r==null)H.H(P.B("Failed to find an element with the identifier, testCanvas."))
q=E.nj(r,!0,!0,!0,!1)
p=F.oO(50,50)
o=p.e
if(o!=null)++o.d
p.gV().bQ()
p.gar().bQ()
o=p.e
if(o!=null)o.b2(0)
o=p.e
if(o!=null)++o.d
p.gV().bO()
p.gar().bO()
o=p.e
if(o!=null)o.b2(0)
p.gV().fK()
for(n=p.gar().c.length-1;n>=0;--n){o=p.a
o=(o==null?p.a=new F.D(p,[]):o).c
if(n>=o.length)return H.d(o,n)
m=o[n]
m.sdg(0,0)
l=m.f5()
l.sdg(0,1)
o=p.a;(o==null?p.a=new F.D(p,[]):o).n(0,l)
o=p.c
o=(o==null?p.c=new F.bR(p,[]):o).a
k=o.a;(k==null?o.a=new F.D(o,[]):k).n(0,m)
k=o.a;(k==null?o.a=new F.D(o,[]):k).n(0,l)
o=new F.hM()
k=m.a
if(k==null)H.H(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(k!=l.a)H.H(P.B("May not create a line with vertices attached to different shapes."))
o.a=m
k=m.c;(k==null?m.c=new F.eY([],[]):k).b.push(o)
o.b=l
k=l.c;(k==null?l.c=new F.eY([],[]):k).c.push(o)
k=o.a
if(k!=null){k=k.a
if(k!=null){j=k.c;(j==null?k.c=new F.bR(k,[]):j).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}}i=new T.dD()
i.sa3(0.5)
h=E.kW()
h.scc(0,p)
h.sdc(i)
g=E.kW()
g.y.n(0,h)
o=new U.bC(V.bh(),[])
o.bm(o.gdZ(),o.gev())
k=q.x
j=U.hm()
f=U.hm()
e=$.bn
if(e==null)e=$.bn=new V.W(0,0)
e=new U.cT(j,f,new X.a_(!1,!1,!1),e,V.bh())
j.sc9(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sa2(0,0)
j.sc0(100)
j.sP(0)
j.sbU(0.5)
d=e.gaB()
j.gv().n(0,d)
f.sc9(0,!0)
f.sc_(6.283185307179586)
f.sc1(0)
f.sa2(0,0)
f.sc0(100)
f.sP(0)
f.sbU(0.5)
f.gv().n(0,d)
j=new X.a_(!1,!1,!1)
if(!e.d.q(0,j)){c=e.d
e.d=j
e.K(new D.C(a3,c,j))}if(!e.r){e.r=!0
e.K(new D.C("invertY",!1,!0))}e.aU(k)
o.n(0,e)
U.hm()
if($.bn==null)$.bn=new V.W(0,0)
V.bh()
j=U.hm()
f=$.bn
if(f==null)f=$.bn=new V.W(0,0)
f=new U.cS(j,new X.a_(!1,!1,!1),f,V.bh())
j.sc9(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sa2(0,0)
j.sc0(100)
j.sP(0)
j.sbU(0.2)
j.gv().n(0,f.gaB())
j=new X.a_(!0,!1,!1)
if(!f.c.q(0,j)){c=f.c
f.c=j
f.K(new D.C(a3,c,j))}f.aU(k)
o.n(0,f)
j=new X.a_(!1,!1,!1)
f=new U.cU(j,V.bh())
e=new X.a_(!1,!1,!1)
if(!j.q(0,e)){f.b=e
f.K(new D.C(a3,j,e))}f.aU(k)
o.n(0,f)
g.saZ(o)
o=O.kS()
k=new M.dL(o)
o.bm(k.ge2(),k.ge4())
b=X.mN(null)
a=new X.eg(1.0471975511965976,0.1)
a.saZ(null)
j=a.c
$.F().toString
if(!(Math.abs(j-1.0471975511965976)<1e-9)){a.c=1.0471975511965976
a.ay(new D.C("fov",j,1.0471975511965976))}j=a.d
$.F().toString
if(!(Math.abs(j-0.1)<1e-9)){a.d=0.1
a.ay(new D.C("near",j,0.1))}j=a.e
$.F().toString
if(!(Math.abs(j-2000)<1e-9)){a.e=2000
a.ay(new D.C("far",j,2000))}j=k.b
if(j!==a){if(j!=null)j.gv().M(0,k.gaw())
c=k.b
k.b=a
a.gv().n(0,k.gaw())
k.ax(new D.C("camera",c,k.b))}j=k.c
if(j!==b){if(j!=null)j.gv().M(0,k.gaw())
c=k.c
k.c=b
b.gv().n(0,k.gaw())
k.ax(new D.C("target",c,k.c))}o.n(0,g)
o=k.b
if(o!=null){a0=V.aU(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
j=V.bh()
f=new U.cc(j)
if(!j.q(0,a0))f.a=a0
o.saZ(f)}o=q.d
if(o!==k){if(o!=null)o.gv().M(0,q.gce())
q.d=k
k.gv().n(0,q.gce())
q.cf()}r=s.getElementById(a2)
if(r==null)H.H(P.B("Failed to find bumpMaps for Texture2DGroup"))
o=new V.im(a2,!0,r,new T.jU(i,q))
o.a0(0,"../resources/BumpMap1.png",!0)
o.n(0,"../resources/BumpMap2.png")
o.n(0,"../resources/BumpMap3.png")
o.n(0,"../resources/BumpMap4.png")
o.n(0,"../resources/BumpMap5.png")
o.n(0,"../resources/ScrewBumpMap.png")
o.n(0,"../resources/CtrlPnlBumpMap.png")
r=s.getElementById("scalars")
if(r==null)H.H(P.B("Failed to find scalars for RadioGroup"))
s=new V.i0("scalars",!0,r)
s.a0(0,"0.1",new T.jV(i))
s.a0(0,"0.2",new T.jW(i))
s.a0(0,"0.3",new T.jY(i))
s.a0(0,"0.4",new T.jZ(i))
s.cB(0,"0.5",new T.k_(i),!0)
s.a0(0,"0.6",new T.k0(i))
s.a0(0,"0.7",new T.k1(i))
s.a0(0,"0.8",new T.k2(i))
s.a0(0,"0.9",new T.k3(i))
s.a0(0,"1.0",new T.k4(i))
s=q.Q
if(s==null)s=q.Q=D.K()
o=s.b
s=o==null?s.b=[]:o
s.push(new T.jX(a4,i))
V.p0(q)},
dC:function dC(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
dD:function dD(){var _=this
_.b=_.a=null
_.c=1
_.d=null},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
jX:function jX(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gC:function(a){return H.cJ(a)},
h:function(a){return"Instance of '"+H.cK(a)+"'"}}
J.dV.prototype={
h:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iac:1}
J.cr.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gC:function(a){return 0}}
J.aR.prototype={
gC:function(a){return 0},
h:function(a){return String(a)},
$il_:1}
J.eh.prototype={}
J.bm.prototype={}
J.aG.prototype={
h:function(a){var s=a[$.m8()]
if(s==null)return this.dn(a)
return"JavaScript function for "+J.c7(s)},
$ico:1}
J.au.prototype={
M:function(a,b){var s
if(!!a.fixed$length)H.H(P.v("remove"))
for(s=0;s<a.length;++s)if(J.T(a[s],b)){a.splice(s,1)
return!0}return!1},
a6:function(a,b){if(!!a.fixed$length)H.H(P.v("addAll"))
this.dD(a,b)
return},
dD:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.as(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.as(a))}},
l:function(a,b){var s,r,q=a.length,p=P.cx(q,"",!1)
for(s=0;s<a.length;++s){r=H.r(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
fp:function(a){return this.l(a,"")},
fj:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.as(a))}return s},
fk:function(a,b,c){return this.fj(a,b,c,t.z)},
fi:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.as(a))}throw H.b(H.kd())},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gah:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.kd())},
cF:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.as(a))}return!1},
F:function(a,b){var s
for(s=0;s<a.length;++s)if(J.T(a[s],b))return!0
return!1},
h:function(a){return P.kc(a,"[","]")},
gL:function(a){return new J.a6(a,a.length)},
gC:function(a){return H.cJ(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.H(P.v("set length"))
if(b>a.length)H.lL(a).c.a(null)
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.b(H.c4(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.H(P.v("indexed set"))
if(b>=a.length||b<0)throw H.b(H.c4(a,b))
a[b]=c},
$it:1,
$ih:1,
$ie:1,
$im:1}
J.dY.prototype={}
J.a6.prototype={
gA:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.y(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bH.prototype={
aG:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbf(b)
if(this.gbf(a)===s)return 0
if(this.gbf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbf:function(a){return a===0?1/a<0:a<0},
fS:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.v(""+a+".toInt()"))},
bW:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.v(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.v(""+a+".round()"))},
c7:function(a,b){var s
if(b>20)throw H.b(P.a2(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbf(a))return"-"+s
return s},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
b5:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dr:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cu(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.cu(a,b)},
cu:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.v("Result of truncating division is "+H.r(s)+": "+H.r(a)+" ~/ "+b))},
aD:function(a,b){var s
if(a>0)s=this.ct(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eN:function(a,b){if(b<0)throw H.b(H.dq(b))
return this.ct(a,b)},
ct:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iV:1}
J.cq.prototype={$ij:1}
J.dW.prototype={}
J.aQ.prototype={
N:function(a,b){if(b<0)throw H.b(H.c4(a,b))
if(b>=a.length)H.H(H.c4(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(b>=a.length)throw H.b(H.c4(a,b))
return a.charCodeAt(b)},
R:function(a,b){return a+b},
aJ:function(a,b,c,d){var s=P.aW(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
Z:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a2(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S:function(a,b){return this.Z(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.em(b,null))
if(b>c)throw H.b(P.em(b,null))
if(c>a.length)throw H.b(P.em(c,null))
return a.substring(b,c)},
au:function(a,b){return this.t(a,b,null)},
fV:function(a){return a.toLowerCase()},
O:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.N)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ae:function(a,b){var s=b-a.length
if(s<=0)return a
return this.O(" ",s)+a},
bd:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a2(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cQ:function(a,b){return this.bd(a,b,0)},
f3:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a2(c,0,s,null,null))
return H.m4(a,b,c)},
F:function(a,b){return this.f3(a,b,0)},
aG:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
h:function(a){return a},
gC:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk:function(a){return a.length},
$it:1,
$ik:1}
H.cs.prototype={
h:function(a){var s="LateInitializationError: "+this.a
return s}}
H.l.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.a.N(this.a,b)}}
H.h.prototype={}
H.cw.prototype={
gL:function(a){return new H.aT(this,this.gk(this))},
bk:function(a,b){return this.dm(0,b)}}
H.aT.prototype={
gA:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.br(q),o=p.gk(q)
if(r.b!==o)throw H.b(P.as(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
H.bg.prototype={
gL:function(a){return new H.e2(J.aB(this.a),this.b)},
gk:function(a){return J.aC(this.a)},
D:function(a,b){return this.b.$1(J.h9(this.a,b))}}
H.cj.prototype={$ih:1}
H.e2.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gA(r))
return!0}s.a=null
return!1},
gA:function(a){return H.Y(this).Q[1].a(this.a)}}
H.cB.prototype={
gk:function(a){return J.aC(this.a)},
D:function(a,b){return this.b.$1(J.h9(this.a,b))}}
H.bo.prototype={
gL:function(a){return new H.f0(J.aB(this.a),this.b)}}
H.f0.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gA(s)))return!0
return!1},
gA:function(a){var s=this.a
return s.gA(s)}}
H.cm.prototype={}
H.eT.prototype={
m:function(a,b,c){throw H.b(P.v("Cannot modify an unmodifiable list"))}}
H.bU.prototype={}
H.cd.prototype={
h:function(a){return P.kj(this)},
m:function(a,b,c){H.mI()},
$iz:1}
H.ce.prototype={
gk:function(a){return this.a},
bR:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bR(0,b))return null
return this.cp(b)},
cp:function(a){return this.b[a]},
E:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cp(q))}}}
H.iB.prototype={
a9:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cI.prototype={
h:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dZ.prototype={
h:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eS.prototype={
h:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hZ.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fG.prototype={
h:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bb.prototype={
h:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.m6(r==null?"unknown":r)+"'"},
$ico:1,
gfZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eF.prototype={}
H.ex.prototype={
h:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.m6(s)+"'"}}
H.bw.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bw))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gC:function(a){var s,r=this.c
if(r==null)s=H.cJ(this.a)
else s=typeof r!=="object"?J.k8(r):H.cJ(r)
return(s^H.cJ(this.b))>>>0},
h:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.r(this.d)+"' of "+("Instance of '"+H.cK(s)+"'")}}
H.ep.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aj.prototype={
gk:function(a){return this.a},
gbe:function(a){return this.a===0},
gT:function(a){return new H.ct(this)},
gfY:function(a){return H.mY(this.gT(this),new H.hK(this))},
bR:function(a,b){var s=this.b
if(s==null)return!1
return this.dL(s,b)},
i:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b8(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b8(p,b)
q=r==null?n:r.b
return q}else return o.fn(b)},
fn:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cq(p,q.cR(a))
r=q.cS(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cj(s==null?q.b=q.bG():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cj(r==null?q.c=q.bG():r,b,c)}else q.fo(b,c)},
fo:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bG()
s=p.cR(a)
r=p.cq(o,s)
if(r==null)p.bJ(o,s,[p.bH(a,b)])
else{q=p.cS(r,a)
if(q>=0)r[q].b=b
else r.push(p.bH(a,b))}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.as(s))
r=r.c}},
cj:function(a,b,c){var s=this.b8(a,b)
if(s==null)this.bJ(a,b,this.bH(b,c))
else s.b=c},
dW:function(){this.r=this.r+1&67108863},
bH:function(a,b){var s,r=this,q=new H.hN(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.dW()
return q},
cR:function(a){return J.k8(a)&0x3ffffff},
cS:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1},
h:function(a){return P.kj(this)},
b8:function(a,b){return a[b]},
cq:function(a,b){return a[b]},
bJ:function(a,b,c){a[b]=c},
dP:function(a,b){delete a[b]},
dL:function(a,b){return this.b8(a,b)!=null},
bG:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bJ(r,s,r)
this.dP(r,s)
return r}}
H.hK.prototype={
$1:function(a){var s=this.a
return H.Y(s).Q[1].a(s.i(0,a))},
$S:function(){return H.Y(this.a).a1("2(1)")}}
H.hN.prototype={}
H.ct.prototype={
gk:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.e1(s,s.r)
r.c=s.e
return r}}
H.e1.prototype={
gA:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.as(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jQ.prototype={
$1:function(a){return this.a(a)},
$S:30}
H.jR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:50}
H.dX.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$il8:1}
H.cD.prototype={$icD:1}
H.R.prototype={$iR:1}
H.bM.prototype={
gk:function(a){return a.length},
$it:1,
$iu:1}
H.bi.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$im:1}
H.cE.prototype={
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$im:1}
H.e7.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.e8.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.e9.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.ea.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.eb.prototype={
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.cF.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.bj.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
$ibj:1,
$icR:1}
H.d2.prototype={}
H.d3.prototype={}
H.d4.prototype={}
H.d5.prototype={}
H.al.prototype={
a1:function(a){return H.fV(v.typeUniverse,this,a)},
bq:function(a){return H.nQ(v.typeUniverse,this,a)}}
H.fi.prototype={}
H.fd.prototype={
h:function(a){return this.a}}
H.de.prototype={}
P.j8.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:34}
P.j7.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
P.j9.prototype={
$0:function(){this.a.$0()},
$S:12}
P.ja.prototype={
$0:function(){this.a.$0()},
$S:12}
P.dd.prototype={
dz:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c3(new P.jr(this,b),0),a)
else throw H.b(P.v("`setTimeout()` not found."))},
dA:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c3(new P.jq(this,a,Date.now(),b),0),a)
else throw H.b(P.v("Periodic timer."))},
$iiv:1}
P.jr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.jq.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dr(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.c_.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.r(this.a)+")"}}
P.bp.prototype={
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
if(r instanceof P.c_){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aB(s)
if(o instanceof P.bp){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.da.prototype={
gL:function(a){return new P.bp(this.a())}}
P.f1.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.jy.prototype={}
P.jI.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.h(0)
throw s},
$S:0}
P.jg.prototype={
fO:function(a){var s,r,q,p=null
try{if(C.f===$.aA){a.$0()
return}P.or(p,p,this,a)}catch(q){s=H.ad(q)
r=H.kD(q)
P.lR(p,p,this,s,r)}},
fP:function(a,b){var s,r,q,p=null
try{if(C.f===$.aA){a.$1(b)
return}P.os(p,p,this,a,b)}catch(q){s=H.ad(q)
r=H.kD(q)
P.lR(p,p,this,s,r)}},
fQ:function(a,b){return this.fP(a,b,t.z)},
f1:function(a){return new P.jh(this,a)},
cG:function(a,b){return new P.ji(this,a,b)}}
P.jh.prototype={
$0:function(){return this.a.fO(this.b)},
$S:0}
P.ji.prototype={
$1:function(a){return this.a.fQ(this.b,a)},
$S:function(){return this.c.a1("~(0)")}}
P.cZ.prototype={
gL:function(a){var s=new P.d_(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
F:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dK(b)
return r}},
dK:function(a){var s=this.d
if(s==null)return!1
return this.bx(s[this.bt(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cl(s==null?q.b=P.ko():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cl(r==null?q.c=P.ko():r,b)}else return q.dC(0,b)},
dC:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.ko()
s=q.bt(b)
r=p[s]
if(r==null)p[s]=[q.bs(b)]
else{if(q.bx(r,b)>=0)return!1
r.push(q.bs(b))}return!0},
M:function(a,b){if((b&1073741823)===b)return this.eE(this.c,b)
else return this.eD(0,b)},
eD:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bt(b)
r=n[s]
q=o.bx(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cz(p)
return!0},
cl:function(a,b){if(a[b]!=null)return!1
a[b]=this.bs(b)
return!0},
eE:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cz(s)
delete a[b]
return!0},
cm:function(){this.r=this.r+1&1073741823},
bs:function(a){var s,r=this,q=new P.jf(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cm()
return q},
cz:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cm()},
bt:function(a){return J.k8(a)&1073741823},
bx:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
P.jf.prototype={}
P.d_.prototype={
gA:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.as(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cp.prototype={}
P.hO.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:8}
P.cv.prototype={$ih:1,$ie:1,$im:1}
P.q.prototype={
gL:function(a){return new H.aT(a,this.gk(a))},
D:function(a,b){return this.i(a,b)},
E:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.i(a,s))
if(r!==this.gk(a))throw H.b(P.as(a))}},
gbe:function(a){return this.gk(a)===0},
fU:function(a,b){var s,r,q,p,o=this
if(o.gbe(a)){s=J.ke(0)
return s}r=o.i(a,0)
q=P.cx(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.i(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
fT:function(a){return this.fU(a,!0)},
fg:function(a,b,c,d){var s
H.bs(a).a1("q.E").a(d)
P.aW(b,c,this.gk(a))
for(s=b;s<c;++s)this.m(a,s,d)},
h:function(a){return P.kc(a,"[","]")}}
P.cz.prototype={}
P.hS.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.r(a)
r.a=s+": "
r.a+=H.r(b)},
$S:44}
P.Q.prototype={
E:function(a,b){var s,r,q
for(s=J.aB(this.gT(a)),r=H.bs(a).a1("Q.V");s.u();){q=s.gA(s)
b.$2(q,r.a(this.i(a,q)))}},
gk:function(a){return J.aC(this.gT(a))},
h:function(a){return P.kj(a)},
$iz:1}
P.fW.prototype={
m:function(a,b,c){throw H.b(P.v("Cannot modify unmodifiable map"))}}
P.cA.prototype={
i:function(a,b){return J.kK(this.a,b)},
m:function(a,b,c){J.k7(this.a,b,c)},
E:function(a,b){J.dv(this.a,b)},
gk:function(a){return J.aC(this.a)},
h:function(a){return J.c7(this.a)},
$iz:1}
P.bV.prototype={}
P.er.prototype={
a6:function(a,b){var s
for(s=J.aB(b);s.u();)this.n(0,s.gA(s))},
h:function(a){return P.kc(this,"{","}")},
D:function(a,b){var s,r,q,p,o="index"
H.oE(b,o,t.S)
P.l7(b,o)
for(s=P.nA(this,this.r),r=H.Y(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.I(b,this,o,null,q))}}
P.d6.prototype={$ih:1,$ie:1}
P.d0.prototype={}
P.di.prototype={}
P.dk.prototype={}
P.j0.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ad(r)}return null},
$S:13}
P.j_.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ad(r)}return null},
$S:13}
P.hg.prototype={
ft:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.aW(a3,a4,a2.length)
s=$.mp()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.B(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.jP(C.a.B(a2,k))
g=H.jP(C.a.B(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.N("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.U("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.ak(j)
p=k
continue}}throw H.b(P.Z("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.kO(a2,m,a4,n,l,d)
else{b=C.c.b5(d-1,4)+1
if(b===1)throw H.b(P.Z(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.aJ(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.kO(a2,m,a4,n,l,a)
else{b=C.c.b5(a,4)
if(b===1)throw H.b(P.Z(a0,a2,a4))
if(b>1)a2=C.a.aJ(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hh.prototype={}
P.dE.prototype={}
P.dG.prototype={}
P.hy.prototype={}
P.hJ.prototype={
h:function(a){return this.a}}
P.hI.prototype={
dM:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.U("")
if(o>b)n.a+=C.a.t(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.t(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.iY.prototype={
gff:function(){return C.O}}
P.j1.prototype={
bS:function(a){var s,r,q,p=P.aW(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jw(r)
if(q.dR(a,0,p)!==p){C.a.N(a,p-1)
q.bL()}return new Uint8Array(r.subarray(0,H.o8(0,q.b,s)))}}
P.jw.prototype={
bL:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
eW:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bL()
return!1}},
dR:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.N(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.B(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.eW(p,C.a.B(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bL()}else if(p<=2047){o=l.b
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
P.iZ.prototype={
bS:function(a){var s=this.a,r=P.nn(s,a,0,null)
if(r!=null)return r
return new P.jv(s).f4(a,0,null,!0)}}
P.jv.prototype={
f4:function(a,b,c,d){var s,r,q,p,o=this,n=P.aW(b,c,J.aC(a))
if(b===n)return""
s=P.o4(a,b,n)
r=o.bu(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.o5(q)
o.b=0
throw H.b(P.Z(p,a,b+o.c))}return r},
bu:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.ab(b+c,2)
r=q.bu(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bu(a,s,c,d)}return q.f9(a,b,c,d)},
f9:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.U(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.B("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.B(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ak(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ak(j)
break
case 65:g.a+=H.ak(j);--f
break
default:p=g.a+=H.ak(j)
g.a=p+H.ak(j)
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
g.a+=H.ak(a[l])}else g.a+=P.eC(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ak(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.P.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a&&!0},
aG:function(a,b){return C.c.aG(this.a,b.a)},
gC:function(a){var s=this.a
return(s^C.c.aD(s,30))&1073741823},
h:function(a){var s=this,r=P.mJ(H.n7(s)),q=P.dJ(H.n5(s)),p=P.dJ(H.n1(s)),o=P.dJ(H.n2(s)),n=P.dJ(H.n4(s)),m=P.dJ(H.n6(s)),l=P.mK(H.n3(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bc.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bc&&this.a===b.a},
gC:function(a){return C.c.gC(this.a)},
aG:function(a,b){return C.c.aG(this.a,b.a)},
h:function(a){var s,r,q,p=new P.hv(),o=this.a
if(o<0)return"-"+new P.bc(0-o).h(0)
s=p.$1(C.c.ab(o,6e7)%60)
r=p.$1(C.c.ab(o,1e6)%60)
q=new P.hu().$1(o%1e6)
return""+C.c.ab(o,36e8)+":"+s+":"+r+"."+q}}
P.hu.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.hv.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.E.prototype={}
P.dy.prototype={
h:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hA(s)
return"Assertion failed"}}
P.eN.prototype={}
P.ec.prototype={
h:function(a){return"Throw of null."}}
P.aq.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
h:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbw()+o+m
if(!q.a)return l
s=q.gbv()
r=P.hA(q.b)
return l+s+": "+r}}
P.cL.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.r(q):""
else if(q==null)s=": Not greater than or equal to "+H.r(r)
else if(q>r)s=": Not in inclusive range "+H.r(r)+".."+H.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.r(r)
return s}}
P.dS.prototype={
gbw:function(){return"RangeError"},
gbv:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.eU.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.eR.prototype={
h:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bS.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dF.prototype={
h:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hA(s)+"."}}
P.ef.prototype={
h:function(a){return"Out of Memory"},
$iE:1}
P.cO.prototype={
h:function(a){return"Stack Overflow"},
$iE:1}
P.dH.prototype={
h:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.ff.prototype={
h:function(a){return"Exception: "+this.a}}
P.hF.prototype={
h:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.B(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.N(d,o)
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
return f+j+h+i+"\n"+C.a.O(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.r(e)+")"):f}}
P.e.prototype={
bk:function(a,b){return new H.bo(this,b)},
gk:function(a){var s,r=this.gL(this)
for(s=0;r.u();)++s
return s},
gat:function(a){var s,r=this.gL(this)
if(!r.u())throw H.b(H.kd())
s=r.gA(r)
if(r.u())throw H.b(H.mQ())
return s},
D:function(a,b){var s,r,q
P.l7(b,"index")
for(s=this.gL(this),r=0;s.u();){q=s.gA(s)
if(b===r)return q;++r}throw H.b(P.I(b,this,"index",null,r))},
h:function(a){return P.mP(this,"(",")")}}
P.dU.prototype={}
P.a8.prototype={
gC:function(a){return P.N.prototype.gC.call(C.T,this)},
h:function(a){return"null"}}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gC:function(a){return H.cJ(this)},
h:function(a){return"Instance of '"+H.cK(this)+"'"},
toString:function(){return this.h(this)}}
P.U.prototype={
gk:function(a){return this.a.length},
h:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iW.prototype={
$2:function(a,b){var s,r,q,p=C.a.cQ(b,"=")
if(p===-1){if(b!=="")J.k7(a,P.kx(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.au(b,p+1)
q=this.a
J.k7(a,P.kx(s,0,s.length,q,!0),P.kx(r,0,r.length,q,!0))}return a},
$S:40}
P.iS.prototype={
$2:function(a,b){throw H.b(P.Z("Illegal IPv4 address, "+a,this.a,b))},
$S:39}
P.iU.prototype={
$2:function(a,b){throw H.b(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:38}
P.iV.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.h8(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:37}
P.bq.prototype={
gba:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.r(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.H(H.ki("_text"))}return o},
gC:function(a){var s=this,r=s.z
if(r==null){r=C.a.gC(s.gba())
if(s.z==null)s.z=r
else r=H.H(H.ki("hashCode"))}return r},
gb1:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.bV(P.ll(r==null?"":r),t.Q)
if(s.Q==null)s.Q=r
else r=H.H(H.ki("queryParameters"))}return r},
gdf:function(){return this.b},
gbX:function(a){var s=this.c
if(s==null)return""
if(C.a.S(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbh:function(a){var s=this.d
return s==null?P.lE(this.a):s},
gc4:function(a){var s=this.f
return s==null?"":s},
gcL:function(){var s=this.r
return s==null?"":s},
c5:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.S(s,"/"))s="/"+s
q=s
p=P.kv(null,0,0,b)
return new P.bq(n,l,j,k,q,p,o.r)},
gcM:function(){return this.c!=null},
gcP:function(){return this.f!=null},
gcN:function(){return this.r!=null},
h:function(a){return this.gba()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.k.b(b))if(q.a===b.gbl())if(q.c!=null===b.gcM())if(q.b===b.gdf())if(q.gbX(q)===b.gbX(b))if(q.gbh(q)===b.gbh(b))if(q.e===b.gd3(b)){s=q.f
r=s==null
if(!r===b.gcP()){if(r)s=""
if(s===b.gc4(b)){s=q.r
r=s==null
if(!r===b.gcN()){if(r)s=""
s=s===b.gcL()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ieV:1,
gbl:function(){return this.a},
gd3:function(a){return this.e}}
P.jt.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ju(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ju(C.h,b,C.e,!0)}},
$S:35}
P.js.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aB(b),r=this.a;s.u();)r.$2(a,s.gA(s))},
$S:5}
P.iR.prototype={
gde:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bd(s,"?",m)
q=s.length
if(r>=0){p=P.dj(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.f7("data","",n,n,P.dj(s,m,q,C.y,!1),p,n)}return m},
h:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jC.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.Z.fg(s,0,96,b)
return s},
$S:33}
P.jD.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.B(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:21}
P.jE.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.B(b,0),r=C.a.B(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:21}
P.fA.prototype={
gcM:function(){return this.c>0},
gcO:function(){return this.c>0&&this.d+1<this.e},
gcP:function(){return this.f<this.r},
gcN:function(){return this.r<this.a.length},
gbl:function(){var s=this.x
return s==null?this.x=this.dJ():s},
dJ:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.S(r.a,"http"))return"http"
if(q===5&&C.a.S(r.a,"https"))return"https"
if(s&&C.a.S(r.a,"file"))return"file"
if(q===7&&C.a.S(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
gdf:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gbX:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbh:function(a){var s,r=this
if(r.gcO())return P.h8(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.S(r.a,"http"))return 80
if(s===5&&C.a.S(r.a,"https"))return 443
return 0},
gd3:function(a){return C.a.t(this.a,this.e,this.f)},
gc4:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gcL:function(){var s=this.r,r=this.a
return s<r.length?C.a.au(r,s+1):""},
gb1:function(){var s=this
if(s.f>=s.r)return C.Y
return new P.bV(P.ll(s.gc4(s)),t.Q)},
c5:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbl(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gcO()?n.gbh(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.S(r,"/"))r="/"+r
p=P.kv(m,0,0,b)
q=n.r
o=q<j.length?C.a.au(j,q+1):m
return new P.bq(l,i,s,h,r,p,o)},
gC:function(a){var s=this.y
return s==null?this.y=C.a.gC(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.h(0)},
h:function(a){return this.a},
$ieV:1}
P.f7.prototype={}
W.p.prototype={}
W.ha.prototype={
gk:function(a){return a.length}}
W.dw.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.dx.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.bv.prototype={$ibv:1}
W.b8.prototype={$ib8:1}
W.b9.prototype={$ib9:1}
W.ba.prototype={
ca:function(a,b,c){if(c!=null)return a.getContext(b,P.lW(c))
return a.getContext(b)},
di:function(a,b){return this.ca(a,b,null)},
$iba:1}
W.cb.prototype={$icb:1}
W.ar.prototype={
gk:function(a){return a.length}}
W.hn.prototype={
gk:function(a){return a.length}}
W.A.prototype={$iA:1}
W.cf.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.ho.prototype={}
W.ai.prototype={}
W.aF.prototype={}
W.hp.prototype={
gk:function(a){return a.length}}
W.hq.prototype={
gk:function(a){return a.length}}
W.hr.prototype={
gk:function(a){return a.length}}
W.cg.prototype={}
W.hs.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.ch.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.ci.prototype={
h:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
return r+H.r(s)+") "+H.r(this.gas(a))+" x "+H.r(this.gao(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.ap(b)
if(s===r.gbg(b)){s=a.top
s.toString
s=s===r.gbj(b)&&this.gas(a)===r.gas(b)&&this.gao(a)===r.gao(b)}else s=!1}else s=!1
return s},
gC:function(a){var s,r=a.left
r.toString
r=C.d.gC(r)
s=a.top
s.toString
return W.lv(r,C.d.gC(s),C.d.gC(this.gas(a)),C.d.gC(this.gao(a)))},
gcH:function(a){var s=a.bottom
s.toString
return s},
gcr:function(a){return a.height},
gao:function(a){var s=this.gcr(a)
s.toString
return s},
gbg:function(a){var s=a.left
s.toString
return s},
gd9:function(a){var s=a.right
s.toString
return s},
gbj:function(a){var s=a.top
s.toString
return s},
gcA:function(a){return a.width},
gas:function(a){var s=this.gcA(a)
s.toString
return s},
$ia5:1}
W.dK.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.ht.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.f4.prototype={
gbe:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
i:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gL:function(a){var s=this.fT(this)
return new J.a6(s,s.length)}}
W.w.prototype={
gac:function(a){return new W.fc(a)},
gan:function(a){var s=a.children
s.toString
return new W.f4(a,s)},
gcI:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a5(p,s,r,q,t.q)},
h:function(a){var s=a.localName
s.toString
return s},
a7:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kV
if(s==null){s=[]
r=new W.cH(s)
s.push(W.lu(null))
s.push(W.lz())
$.kV=r
d=r}else d=s
s=$.kU
if(s==null){s=new W.fX(d)
$.kU=s
c=s}else{s.a=d
c=s}}if($.aO==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aO=r
r=r.createRange()
r.toString
$.ka=r
r=$.aO.createElement("base")
t.y.a(r)
s=s.baseURI
s.toString
r.href=s
$.aO.head.appendChild(r).toString}s=$.aO
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aO
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aO.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.F(C.W,s)}else s=!1
if(s){$.ka.selectNodeContents(q)
s=$.ka
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aO.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aO.body)J.kM(q)
c.cb(p)
document.adoptNode(p).toString
return p},
f7:function(a,b,c){return this.a7(a,b,c,null)},
dj:function(a,b){var s
a.textContent=null
s=a.appendChild(this.a7(a,b,null,null))
s.toString},
gda:function(a){var s=a.tagName
s.toString
return s},
$iw:1}
W.hw.prototype={
$1:function(a){return t.h.b(a)},
$S:20}
W.f.prototype={$if:1}
W.c.prototype={
eY:function(a,b,c,d){if(c!=null)this.dE(a,b,c,!1)},
dE:function(a,b,c,d){return a.addEventListener(b,H.c3(c,1),!1)},
$ic:1}
W.ae.prototype={$iae:1}
W.bB.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1,
$ibB:1}
W.dM.prototype={
gk:function(a){return a.length}}
W.dO.prototype={
gk:function(a){return a.length}}
W.at.prototype={$iat:1}
W.hH.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.bd.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.be.prototype={
gcJ:function(a){var s=a.data
s.toString
return s},
$ibe:1}
W.bD.prototype={$ibD:1}
W.bE.prototype={$ibE:1}
W.bf.prototype={$ibf:1}
W.hQ.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.hT.prototype={
gk:function(a){return a.length}}
W.bJ.prototype={$ibJ:1}
W.e4.prototype={
i:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
gT:function(a){var s=[]
this.E(a,new W.hU(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Not supported"))},
$iz:1}
W.hU.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.e5.prototype={
i:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
gT:function(a){var s=[]
this.E(a,new W.hV(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Not supported"))},
$iz:1}
W.hV.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.av.prototype={$iav:1}
W.e6.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.af.prototype={$iaf:1}
W.a3.prototype={
gat:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.kk("No elements"))
if(r>1)throw H.b(P.kk("More than one element"))
s=s.firstChild
s.toString
return s},
a6:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gL:function(a){var s=this.a.childNodes
return new W.cn(s,s.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.n.prototype={
fJ:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
fM:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mt(s,b,a)}catch(q){H.ad(q)}return a},
h:function(a){var s=a.nodeValue
return s==null?this.dl(a):s},
eF:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$in:1}
W.cG.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.aw.prototype={
gk:function(a){return a.length},
$iaw:1}
W.ej.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.eo.prototype={
i:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
gT:function(a){var s=[]
this.E(a,new W.i7(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Not supported"))},
$iz:1}
W.i7.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eq.prototype={
gk:function(a){return a.length}}
W.am.prototype={$iam:1}
W.et.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.ax.prototype={$iax:1}
W.eu.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.ay.prototype={
gk:function(a){return a.length},
$iay:1}
W.ey.prototype={
i:function(a,b){return a.getItem(H.jA(b))},
m:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gT:function(a){var s=[]
this.E(a,new W.ig(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$iz:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:29}
W.ag.prototype={$iag:1}
W.aX.prototype={$iaX:1}
W.cP.prototype={
a7:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bo(a,b,c,d)
s=W.mL("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a3(r).a6(0,new W.a3(s))
return r}}
W.eD.prototype={
a7:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bo(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a3(C.B.a7(r,b,c,d))
r=new W.a3(r.gat(r))
new W.a3(s).a6(0,new W.a3(r.gat(r)))
return s}}
W.eE.prototype={
a7:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bo(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a3(C.B.a7(r,b,c,d))
new W.a3(s).a6(0,new W.a3(r.gat(r)))
return s}}
W.bT.prototype={$ibT:1}
W.an.prototype={$ian:1}
W.aa.prototype={$iaa:1}
W.eG.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.eH.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.iu.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.az.prototype={$iaz:1}
W.bl.prototype={$ibl:1}
W.eL.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.iz.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={}
W.iX.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.eZ.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={
gfb:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.v("deltaY is not supported"))},
gfa:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.v("deltaX is not supported"))},
$iaZ:1}
W.bX.prototype={
eG:function(a,b){var s=a.requestAnimationFrame(H.c3(b,1))
s.toString
return s},
dQ:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bY.prototype={$ibY:1}
W.f5.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.cX.prototype={
h:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
s=r+H.r(s)+") "
r=a.width
r.toString
r=s+H.r(r)+" x "
s=a.height
s.toString
return r+H.r(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.ap(b)
if(s===r.gbg(b)){s=a.top
s.toString
if(s===r.gbj(b)){s=a.width
s.toString
if(s===r.gas(b)){s=a.height
s.toString
r=s===r.gao(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gC:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gC(p)
s=a.top
s.toString
s=C.d.gC(s)
r=a.width
r.toString
r=C.d.gC(r)
q=a.height
q.toString
return W.lv(p,s,r,C.d.gC(q))},
gcr:function(a){return a.height},
gao:function(a){var s=a.height
s.toString
return s},
gcA:function(a){return a.width},
gas:function(a){var s=a.width
s.toString
return s}}
W.fj.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.d1.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.fD.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.fL.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ih:1,
$iu:1,
$ie:1,
$im:1}
W.f2.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.gT(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p]
b.$2(o,H.jA(q.getAttribute(o)))}},
gT:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.d(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.fc.prototype={
i:function(a,b){return this.a.getAttribute(H.jA(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gk:function(a){return this.gT(this).length}}
W.kb.prototype={}
W.fe.prototype={
eV:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mu(s,this.c,r,!1)}}}
W.jc.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.kn.prototype={}
W.bZ.prototype={
du:function(a){var s
if($.cY.gbe($.cY)){for(s=0;s<262;++s)$.cY.m(0,C.V[s],W.oP())
for(s=0;s<12;++s)$.cY.m(0,C.n[s],W.oQ())}},
aE:function(a){return $.mq().F(0,W.ck(a))},
ag:function(a,b,c){var s=$.cY.i(0,W.ck(a)+"::"+b)
if(s==null)s=$.cY.i(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaH:1}
W.G.prototype={
gL:function(a){return new W.cn(a,this.gk(a))}}
W.cH.prototype={
aE:function(a){return C.b.cF(this.a,new W.hY(a))},
ag:function(a,b,c){return C.b.cF(this.a,new W.hX(a,b,c))},
$iaH:1}
W.hY.prototype={
$1:function(a){return a.aE(this.a)},
$S:22}
W.hX.prototype={
$1:function(a){return a.ag(this.a,this.b,this.c)},
$S:22}
W.d7.prototype={
dw:function(a,b,c,d){var s,r,q
this.a.a6(0,c)
s=b.bk(0,new W.jk())
r=b.bk(0,new W.jl())
this.b.a6(0,s)
q=this.c
q.a6(0,C.v)
q.a6(0,r)},
aE:function(a){return this.a.F(0,W.ck(a))},
ag:function(a,b,c){var s=this,r=W.ck(a),q=s.c
if(q.F(0,r+"::"+b))return s.d.f_(c)
else if(q.F(0,"*::"+b))return s.d.f_(c)
else{q=s.b
if(q.F(0,r+"::"+b))return!0
else if(q.F(0,"*::"+b))return!0
else if(q.F(0,r+"::*"))return!0
else if(q.F(0,"*::*"))return!0}return!1},
$iaH:1}
W.jk.prototype={
$1:function(a){return!C.b.F(C.n,a)},
$S:23}
W.jl.prototype={
$1:function(a){return C.b.F(C.n,a)},
$S:23}
W.fN.prototype={
ag:function(a,b,c){if(this.dq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.jp.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:24}
W.fM.prototype={
aE:function(a){var s
if(t.V.b(a))return!1
s=t.w.b(a)
if(s&&W.ck(a)==="foreignObject")return!1
if(s)return!0
return!1},
ag:function(a,b,c){if(b==="is"||C.a.S(b,"on"))return!1
return this.aE(a)},
$iaH:1}
W.cn.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kK(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gA:function(a){return H.Y(this).c.a(this.d)}}
W.jj.prototype={}
W.fX.prototype={
cb:function(a){var s,r=new W.jx(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
aS:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.kM(a)
else b.removeChild(a).toString},
eJ:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.mw(a)
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
o=p}l=o}catch(n){H.ad(n)}r="element unprintable"
try{r=J.c7(a)}catch(n){H.ad(n)}try{q=W.ck(a)
this.eI(a,b,l,r,q,k,j)}catch(n){if(H.ad(n) instanceof P.aq)throw n
else{this.aS(a,b)
p=window
p.toString
p="Removing corrupted element "+H.r(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
eI:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aS(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aE(a)){m.aS(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.r(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.ag(a,"is",g)){m.aS(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.gT(f).slice(0)
for(p=f.gT(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.mz(o)
H.jA(o)
if(!r.ag(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.r(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.W.b(a)){s=a.content
s.toString
m.cb(s)}}}
W.jx.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.eJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.aS(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.kk("Corrupt HTML")
throw H.b(n)}}catch(p){H.ad(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:25}
W.f6.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fz.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fH.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
P.jm.prototype={
bV:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
b4:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.jG(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.P)return new Date(a.a)
if(t.M.b(a))throw H.b(P.iQ("structured clone of RegExp"))
if(t.L.b(a))return a
if(t.d.b(a))return a
if(t.s.b(a))return a
if(t.I.b(a))return a
if(t.o.b(a)||t.c.b(a)||t.F.b(a))return a
if(t.f.b(a)){s=n.bV(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.dv(a,new P.jn(m,n))
return m.a}if(t.j.b(a)){s=n.bV(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.f6(a,s)}if(t.m.b(a)){s=n.bV(a)
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
n.fl(a,new P.jo(m,n))
return m.b}throw H.b(P.iQ("structured clone of other type"))},
f6:function(a,b){var s,r,q=J.br(a),p=q.gk(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.b4(q.i(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.jn.prototype={
$2:function(a,b){this.a.a[a]=this.b.b4(b)},
$S:8}
P.jo.prototype={
$2:function(a,b){this.a.b[a]=this.b.b4(b)},
$S:52}
P.df.prototype={$ibe:1,
gcJ:function(a){return this.a}}
P.jB.prototype={
$1:function(a){this.a.push(P.lN(a))},
$S:27}
P.jJ.prototype={
$2:function(a,b){this.a[a]=P.lN(b)},
$S:8}
P.fK.prototype={
fl:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.dN.prototype={
gaQ:function(){return new H.bg(new H.bo(this.b,new P.hD()),new P.hE())},
E:function(a,b){C.b.E(P.hP(this.gaQ(),!1),b)},
m:function(a,b,c){var s=this.gaQ()
J.my(s.b.$1(J.h9(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.aC(this.gaQ().a)},
i:function(a,b){var s=this.gaQ()
return s.b.$1(J.h9(s.a,b))},
gL:function(a){var s=P.hP(this.gaQ(),!1)
return new J.a6(s,s.length)}}
P.hD.prototype={
$1:function(a){return t.h.b(a)},
$S:20}
P.hE.prototype={
$1:function(a){return t.h.a(a)},
$S:28}
P.fy.prototype={
gd9:function(a){return this.$ti.c.a(this.a+this.c)},
gcH:function(a){return this.$ti.c.a(this.b+this.d)},
h:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.ap(b)
if(s===r.gbg(b)){q=o.b
if(q===r.gbj(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gd9(b)&&p.a(q+o.d)===r.gcH(b)}else s=!1}else s=!1}else s=!1
return s},
gC:function(a){var s=this,r=s.a,q=C.c.gC(r),p=s.b,o=C.c.gC(p),n=s.$ti.c
r=C.c.gC(n.a(r+s.c))
p=C.c.gC(n.a(p+s.d))
return H.ni(H.ih(H.ih(H.ih(H.ih(0,q),o),r),p))}}
P.a5.prototype={
gbg:function(a){return this.a},
gbj:function(a){return this.b},
gas:function(a){return this.c},
gao:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.e0.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$im:1}
P.aV.prototype={$iaV:1}
P.ed.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$im:1}
P.i_.prototype={
gk:function(a){return a.length}}
P.bQ.prototype={$ibQ:1}
P.eB.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$im:1}
P.i.prototype={
gan:function(a){return new P.dN(a,new W.a3(a))},
a7:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.lu(null))
o.push(W.lz())
o.push(new W.fM())
c=new W.fX(new W.cH(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.f7(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a3(q)
p=r.gat(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ii:1}
P.aY.prototype={$iaY:1}
P.eM.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$im:1}
P.fm.prototype={}
P.fn.prototype={}
P.fu.prototype={}
P.fv.prototype={}
P.fI.prototype={}
P.fJ.prototype={}
P.fS.prototype={}
P.fT.prototype={}
P.he.prototype={
gk:function(a){return a.length}}
P.dz.prototype={
i:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
gT:function(a){var s=[]
this.E(a,new P.hf(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Not supported"))},
$iz:1}
P.hf.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dA.prototype={
gk:function(a){return a.length}}
P.aN.prototype={}
P.ee.prototype={
gk:function(a){return a.length}}
P.f3.prototype={}
P.bP.prototype={
fR:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.oG(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bu("Incorrect number or type of arguments"))},
$ibP:1}
P.ev.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=P.b2(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$im:1}
P.fE.prototype={}
P.fF.prototype={}
K.aM.prototype={
ap:function(a,b){return!0},
h:function(a){return"all"}}
K.dQ.prototype={
ap:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)if(s[q].ap(0,b))return!0
return!1},
h:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.h(0)}return q}}
K.a7.prototype={
ap:function(a,b){return!this.dk(0,b)},
h:function(a){return"!["+this.bp(0)+"]"}}
K.i2.prototype={
ap:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var s=H.ak(this.a),r=H.ak(this.b)
return s+".."+r}}
K.o.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.B("May not create a Set with zero characters."))
s=new H.aj(t.J)
for(r=new H.aT(a,a.gk(a)),q=H.Y(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.hP(s.gT(s),!0)
if(!!p.immutable$list)H.H(P.v("sort"))
H.ng(p,J.oh())
this.a=p},
ap:function(a,b){return C.b.F(this.a,b)},
h:function(a){return P.eC(this.a,0,null)}}
L.ew.prototype={
l:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iA(this.a.j(0,b),[])
s.push(p)
return p},
fh:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
if(p.ap(0,a))return p}return null},
h:function(a){return this.b},
cw:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.F(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.gT(s)}s=J.aB(s==null?[]:s)
for(;s.u();){r=s.gA(s)
l+="\n"
q=m.d
p=q==null?null:q.c.i(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.F(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.y)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bp(0))}return l.charCodeAt(0)==0?l:l}}
L.eJ.prototype={
h:function(a){var s=H.kI(this.b,"\n","\\n"),r=H.kI(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eK.prototype={
aq:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.y)(c),++q)r.m(0,c[q],b)},
h:function(a){return this.b}}
L.iw.prototype={
j:function(a,b){var s=this.a,r=s.i(0,b)
if(r==null){r=new L.ew(this,b,[])
s.m(0,b,r)}return r},
J:function(a){var s,r=this.b,q=r.i(0,a)
if(q==null){s=t.N
q=new L.eK(a,P.bI(s,s))
r.m(0,a,q)}return q},
c8:function(a){return this.fW(a)},
fW:function(a){var s=this
return P.op(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$c8(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.Y(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a1.length
if(h!==0){if(!!a1.fixed$length)H.H(P.v("removeAt"))
if(0>=h)H.H(P.em(0,null))
g=a1.splice(0,1)[0]}else{if(!r.u()){q=3
break}g=n.a(r.d)}a0.push(g);++k
h=c==null
f=h?null:c.fh(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.eC(a0,0,null)
throw H.b(P.B("Untokenizable string [state: "+H.r(h?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.H(P.v("removeRange"))
P.aW(0,i,a0.length)
a0.splice(0,i-0)
C.b.a6(a1,a0)
a0=[]
b=[]
c=s.d
q=!m.F(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(g)
c=f.b
h=c.d
if(h!=null){e=P.eC(b,0,null)
h=c.d
if(h==null)l=null
else{d=h.c.i(0,e)
h=new L.eJ(d==null?h.b:d,e,k)
l=h}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.F(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.ny()
case 1:return P.nz(o)}}},t.aR)},
h:function(a){var s,r=new P.U(""),q=this.d
if(q!=null)r.a=""+(q.cw()+"\n")
for(q=this.a,q=q.gfY(q),q=q.gL(q);q.u();){s=q.gA(q)
if(s!=this.d)r.a+=H.r(s==null?null:s.cw())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.iA.prototype={
h:function(a){return this.b.b+": "+this.bp(0)}}
O.by.prototype={
bm:function(a,b){this.b=null
this.c=a},
eu:function(a){return!0},
dt:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.a6(s,s.length)},
D:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r
this.eu([b])
s=this.a
r=s.length
s.push(b)
this.dt(r,[b])},
$ie:1}
O.cC.prototype={
gk:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.K():s},
av:function(){var s=this.b
return s==null?null:s.I(null)},
gaY:function(a){var s=this.a
if(s.length>0)return C.b.gah(s)
else return V.bh()},
d6:function(a){this.a.push(a)
this.av()},
c3:function(){var s=this.a
if(s.length>0){s.pop()
this.av()}}}
E.hi.prototype={}
E.bA.prototype={
ck:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.a6(s,s.length),r=H.Y(s).c;s.u();){q=r.a(s.d)
if(q.f==null)q.ck()}},
scc:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().M(0,s.gcZ())
if(b!=null)b.gv().n(0,s.gcZ())
s.ad(new D.C("shape",r,b))}},
sdc:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gv().M(0,s.gd0())
if(a!=null)a.gv().n(0,s.gd0())
s.ck()
s.ad(new D.C("technique",r,a))}},
saZ:function(a){var s,r,q=this
if(!J.T(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().M(0,q.gcX())
if(a!=null)a.gv().n(0,q.gcX())
r=q.r
q.ad(new D.C("mover",s,r))}},
aL:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aM(0,b,q)
if(!J.T(o,q.x)){s=q.x
q.x=o
q.ad(new D.C("matrix",s,o))}for(p=q.y.a,p=new J.a6(p,p.length),r=H.Y(p).c;p.u();)r.a(p.d).aL(0,b)},
aI:function(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="Bumpy Debugging Shader",h="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n",g=a.dx,f=k.x,e=g.a
if(f==null)e.push(g.gaY(g))
else e.push(f.O(0,g.gaY(g)))
g.av()
a.d7(k.f)
s=C.b.gah(a.dy)
if(k.d!=null)if(s!=null){r=s.a
if(r==null){f=a.fr
r=f.i(0,i)
if(r==null){e=a.a
r=new T.dC(e,i)
r.c=h
r.d="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"
q=r.co(h,35633)
p=r.co(r.d,35632)
o=e.createProgram()
o.toString
r.e=o
e.attachShader(r.gak(),q)
e.attachShader(r.gak(),p)
e.linkProgram(r.gak())
if(!H.lM(e.getProgramParameter(r.gak(),35714))){n=e.getProgramInfoLog(r.gak())
if(n==null)n="undefined log error"
e.deleteProgram(r.e)
H.H(P.B("Failed to link shader: "+n))}r.eK()
r.eM()
r.x=r.gac(r).i(0,"posAttr")
r.y=r.gac(r).i(0,"normAttr")
r.z=r.gac(r).i(0,"binmAttr")
r.Q=r.gac(r).i(0,"txtAttr")
r.ch=r.gac(r).i(0,"weightAttr")
r.cx=t.G.a(r.gb3().i(0,"bumpTxt"))
e=t.aw
r.cy=e.a(r.gb3().i(0,"objMat"))
r.db=e.a(r.gb3().i(0,"viewMat"))
r.dx=e.a(r.gb3().i(0,"projMat"))
r.dy=t.n.a(r.gb3().i(0,"offsetScalar"))
if(f.bR(0,i))H.H(P.B('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
f.m(0,i,r)}r=s.a=r}if(k.e==null){f=k.c
if(f==null)f=j
else{e=$.b5()
o=$.b4()
o=f.f2(new Z.j6(a.a),new Z.cW(e.a|o.a|$.b3().a|$.b6().a|$.b7().a))
f=o}if(f==null)f=j
else{e=f.aW($.b5())
if(e!=null){o=r.x
o=o==null?j:o.c
e.e=o==null?0:o}e=f.aW($.b4())
if(e!=null){o=r.y
o=o==null?j:o.c
e.e=o==null?1:o}e=f.aW($.b3())
if(e!=null){o=r.z
o=o==null?j:o.c
e.e=o==null?2:o}e=f.aW($.b6())
if(e!=null){o=r.Q
o=o==null?j:o.c
e.e=o==null?3:o}e=f.aW($.b7())
if(e!=null){o=r.ch
o=o==null?j:o.c
e.e=o==null?4:o}}k.e=f}m=s.b
if(m!=null){m.a=0
f=a.a
f.useProgram(r.e)
r.gac(r).fe()
e=r.cx
if(e!=null){o=m.d
l=e.a
e=e.d
if(!o)l.uniform1i(e,0)
else l.uniform1i(e,m.a)}e=a.cy
e=e.gaY(e)
o=r.dx
if(o!=null)o.bn(e.c6(0,!0))
e=a.db
e=e.gaY(e)
o=r.db
if(o!=null)o.bn(e.c6(0,!0))
e=g.gaY(g)
o=r.cy
if(o!=null)o.bn(e.c6(0,!0))
e=s.c
o=r.dy
if(o!=null)o.a.uniform1f(o.d,e)
if(!m.c&&m.d){m.c=!0
f.activeTexture(33984+m.a)
f.bindTexture(3553,m.b)}e=k.e
if(e instanceof Z.dB){e.bM(a)
e.aI(a)
e.fX(a)}else k.e=null
f.useProgram(j)
r.gac(r).fc()
if(m.c){m.c=!1
f.activeTexture(33984+m.a)
f.bindTexture(3553,j)}}}for(f=k.y.a,f=new J.a6(f,f.length),e=H.Y(f).c;f.u();)e.a(f.d).aI(a)
a.d5()
g.c3()},
ad:function(a){var s=this.z
return s==null?null:s.I(a)},
Y:function(){return this.ad(null)},
d_:function(a){this.e=null
this.ad(a)},
fC:function(){return this.d_(null)},
d1:function(a){return this.ad(a)},
fD:function(){return this.d1(null)},
cY:function(a){return this.ad(a)},
fB:function(){return this.cY(null)},
cW:function(a){return this.ad(a)},
fw:function(){return this.cW(null)},
fv:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcV(),q=0;q<b.length;b.length===s||(0,H.y)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.cl()
n=o.a;(n==null?o.a=[]:n).push(r)}this.Y()},
fA:function(a,b){var s,r
for(s=b.gL(b),r=this.gcV();s.u();)s.gA(s).gv().M(0,r)
this.Y()},
h:function(a){return"Unnamed entity"}}
E.bx.prototype={
h:function(a){return this.b}}
E.bN.prototype={
h:function(a){return this.b}}
E.jb.prototype={}
E.i3.prototype={
ds:function(a,b){var s=this
s.cy.gv().n(0,new E.i4(s))
s.db.gv().n(0,new E.i5(s))
s.dx.gv().n(0,new E.i6(s))},
d7:function(a){var s=this.dy
return s.push(a==null?C.b.gah(s):a)},
d5:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.i4.prototype={
$1:function(a){},
$S:1}
E.i5.prototype={
$1:function(a){},
$S:1}
E.i6.prototype={
$1:function(a){},
$S:1}
E.eI.prototype={
cg:function(a){this.d8()},
cf:function(){return this.cg(null)},
gfm:function(){var s,r=this,q=Date.now(),p=C.c.ab(P.kT(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.P(q,!1)
return s/p},
cs:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bW(r*o)
r=s.clientHeight
r.toString
p=C.d.bW(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.lg(C.m,this.gfN())}},
d8:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.D.dQ(s)
r=W.lT(new E.it(this),t.H)
r.toString
C.D.eG(s,r)}},
fL:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cs()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.P(p,!1)
q.y=P.kT(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.av()
p=q.db
C.b.sk(p.a,0)
p.av()
p=q.dx
C.b.sk(p.a,0)
p.av()
p=q.dy
C.b.sk(p,0)
p.push(null)
m.aI(q)}q=n.Q
if(q!=null)q.I(null)}catch(o){s=H.ad(o)
r=H.kD(o)
P.kH("Error: "+H.r(s))
P.kH("Stack: "+H.r(r))
throw H.b(s)}}}
E.it.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fL()}},
$S:32}
Z.f_.prototype={}
Z.c9.prototype={
bM:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ad(q)
r=P.B('Failed to bind buffer attribute "'+p.a.h(0)+'": '+H.r(s))
throw H.b(r)}},
h:function(a){var s=this
return"["+s.a.h(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.j6.prototype={}
Z.dB.prototype={
aW:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bM:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].bM(a)}},
fX:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aI:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
h:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cK(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){n=s[q]
o.push("["+n.a.h(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.l(m,", ")+"\nAttrs:   "+C.b.l(o,", ")}}
Z.dT.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cK(this.c)+"'")+"]"}}
Z.cW.prototype={
gcd:function(a){var s=this.a,r=(s&$.b5().a)!==0?3:0
if((s&$.b4().a)!==0)r+=3
if((s&$.b3().a)!==0)r+=3
if((s&$.b6().a)!==0)r+=2
if((s&$.c6().a)!==0)r+=3
if((s&$.dt().a)!==0)r+=3
if((s&$.du().a)!==0)r+=4
if((s&$.b7().a)!==0)++r
return(s&$.c5().a)!==0?r+4:r},
f0:function(a){var s,r=$.b5(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b3()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b6()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c6()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.du()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b7()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c5()
if((q&r.a)!==0)if(s===a)return r
return $.mo()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cW))return!1
return this.a===b.a},
h:function(a){var s=[],r=this.a
if((r&$.b5().a)!==0)s.push("Pos")
if((r&$.b4().a)!==0)s.push("Norm")
if((r&$.b3().a)!==0)s.push("Binm")
if((r&$.b6().a)!==0)s.push("Txt2D")
if((r&$.c6().a)!==0)s.push("TxtCube")
if((r&$.dt().a)!==0)s.push("Clr3")
if((r&$.du().a)!==0)s.push("Clr4")
if((r&$.b7().a)!==0)s.push("Weight")
if((r&$.c5().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.l(s,"|")}}
D.hk.prototype={}
D.cl.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
M:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.F(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.M(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.F(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.M(p,b)
s=p===!0||s}return s},
I:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.O():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.E(P.hP(p,!0),new D.hB(s))
r=q.b
if(r!=null){q.b=[]
C.b.E(r,new D.hC(s))}return!0},
fd:function(){return this.I(null)},
b2:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.I(s)}}}}
D.hB.prototype={
$1:function(a){a.$1(this.a)},
$S:19}
D.hC.prototype={
$1:function(a){a.$1(this.a)},
$S:19}
D.O.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.C.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.r(this.d)+" => "+H.r(this.e)}}
X.ca.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ca))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.e_.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e_))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.hL.prototype={}
X.cy.prototype={}
X.hR.prototype={
aP:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a1(o.a+b.a,o.b+b.b)
o=q.a.gaF()
s=$.a9
if(s==null)s=$.a9=new V.a1(0,0)
r=q.x
q.z=new P.P(p,!1)
q.x=n
return new X.bK(a,s,r,o,n)},
c2:function(a,b){this.r=a.a
return!1},
b0:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
b_:function(a,b){var s=this.d
if(s==null)return!1
s.I(this.aP(a,b))
return!0},
fH:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaF()
r=this.x
Date.now()
q.I(new X.bL(new V.W(a.a,a.b),s,r))
return!0},
ei:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.I(new X.cy(c,q.a.gaF(),b))
q.y=new P.P(s,!1)
s=$.a9
q.x=s==null?$.a9=new V.a1(0,0):s}}
X.a_.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a_))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
h:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.l(s,"+")}}
X.bK.prototype={}
X.hW.prototype={
by:function(a,b,c){var s=this,r=new P.P(Date.now(),!1),q=s.a.gaF(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bK(a,p,o,q,b)},
c2:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.I(this.by(a,b,!0))
return!0},
b0:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.I(r.by(a,b,!0))
return!0},
b_:function(a,b){var s=this.d
if(s==null)return!1
s.I(this.by(a,b,!1))
return!0},
fI:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaF()
Date.now()
r.I(new X.bL(new V.W(a.a,a.b),s,b))
return!0},
gcK:function(){var s=this.b
return s==null?this.b=D.K():s},
gdd:function(){var s=this.c
return s==null?this.c=D.K():s},
gcU:function(){var s=this.d
return s==null?this.d=D.K():s}}
X.bL.prototype={}
X.el.prototype={}
X.cQ.prototype={}
X.iy.prototype={
aP:function(a,b){var s,r,q,p,o=this,n=new P.P(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a9
if(r==null){r=new V.a1(0,0)
$.a9=r
s=r}else s=r}r=o.a.gaF()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cQ(q,p,r,s)},
fG:function(a){var s=this.b
if(s==null)return!1
s.I(this.aP(a,!0))
return!0},
fE:function(a){var s=this.c
if(s==null)return!1
s.I(this.aP(a,!0))
return!0},
fF:function(a){var s=this.d
if(s==null)return!1
s.I(this.aP(a,!1))
return!0}}
X.eW.prototype={
gaH:function(a){var s=this.b
return s==null?this.b=new X.hL(new X.a_(!1,!1,!1),P.cu(t.S)):s},
gX:function(){var s,r=this.c
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.a1(0,0)
s=r}else s=r
r=this.c=new X.hW(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
ga8:function(){var s=this.d
if(s==null){s=$.a9
if(s==null)s=$.a9=new V.a1(0,0)
s=this.d=new X.hR(this,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return s},
gaK:function(){var s,r=this.e
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.a1(0,0)
s=r}else s=r
r=this.e=new X.iy(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gaF:function(){var s=this.a
return V.l9(0,0,C.i.gcI(s).c,C.i.gcI(s).d)},
cn:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.e_(p,new X.a_(s,r,q))},
aC:function(a){var s,r,q=this.gaH(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a_(p,s,r)},
bK:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaH(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a_(s,r===!0,q===!0)},
al:function(a){var s,r,q,p
if(a==null){s=$.a9
return s==null?$.a9=new V.a1(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a1(r-p,q-s)},
aR:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.W(r,s)},
bI:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.y)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.af(n)
m=o.pageY
m.toString
C.d.af(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.af(l)
l=o.pageY
l.toString
l=C.d.af(l)
k=j.top
k.toString
s.push(new V.a1(n-m,l-k))}return s},
aj:function(a){var s,r,q,p
if(a==null)return new X.ca(0,new X.a_(!1,!1,!1))
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
return new X.ca(s,new X.a_(r,q,p))},
bz:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
ed:function(a){return this.f=!0},
e1:function(a){return this.f=!1},
e7:function(a){if(this.f&&this.bz(a))a.preventDefault()},
eh:function(a){var s,r,q=this
if(!q.f)return
s=q.cn(a)
r=q.gaH(q)
r.c=s.b
r.d.n(0,s.a)},
ef:function(a){var s,r,q=this
if(!q.f)return
s=q.cn(a)
r=q.gaH(q)
r.c=s.b
r.d.M(0,s.a)},
ek:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aC(a)
if(p.x){s=p.aj(a)
r=p.aR(a)
if(p.ga8().c2(s,r))a.preventDefault()
return}s=p.aj(a)
q=p.al(a)
if(p.gX().c2(s,q))a.preventDefault()},
eo:function(a){var s,r,q,p=this
p.aC(a)
s=p.aj(a)
if(p.x){r=p.aR(a)
if(p.ga8().b0(s,r))a.preventDefault()
return}q=p.al(a)
if(p.gX().b0(s,q))a.preventDefault()},
eb:function(a){var s,r,q,p=this
if(!p.bz(a)){p.aC(a)
s=p.aj(a)
if(p.x){r=p.aR(a)
if(p.ga8().b0(s,r))a.preventDefault()
return}q=p.al(a)
if(p.gX().b0(s,q))a.preventDefault()}},
em:function(a){var s,r,q,p=this
p.aC(a)
s=p.aj(a)
if(p.x){r=p.aR(a)
if(p.ga8().b_(s,r))a.preventDefault()
return}q=p.al(a)
if(p.gX().b_(s,q))a.preventDefault()},
e9:function(a){var s,r,q,p=this
if(!p.bz(a)){p.aC(a)
s=p.aj(a)
if(p.x){r=p.aR(a)
if(p.ga8().b_(s,r))a.preventDefault()
return}q=p.al(a)
if(p.gX().b_(s,q))a.preventDefault()}},
eq:function(a){var s,r,q=this
q.aC(a)
s=new V.W(C.C.gfa(a),C.C.gfb(a)).O(0,q.Q)
if(q.x){if(q.ga8().fH(s))a.preventDefault()
return}r=q.al(a)
if(q.gX().fI(s,r))a.preventDefault()},
es:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aj(q.y)
r=q.al(q.y)
q.ga8().ei(s,r,p)}},
eC:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bK(a)
s=r.bI(a)
if(r.gaK().fG(s))a.preventDefault()},
ey:function(a){var s
this.bK(a)
s=this.bI(a)
if(this.gaK().fE(s))a.preventDefault()},
eA:function(a){var s
this.bK(a)
s=this.bI(a)
if(this.gaK().fF(s))a.preventDefault()}}
V.bz.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bz))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.hz.prototype={}
V.e3.prototype={
c6:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
O:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aU(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e3))return!1
s=b.a
$.F().toString
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
G:function(a){var s,r,q,p,o,n=this,m=V.jL([n.a,n.e,n.y,n.cx],3,0),l=V.jL([n.b,n.f,n.z,n.cy],3,0),k=V.jL([n.c,n.r,n.Q,n.db],3,0),j=V.jL([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
w:function(){return this.G("")}}
V.a1.prototype={
a4:function(a){return new V.W(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
w:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.bk.prototype={
aO:function(a,b){return new V.bk(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bk))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
w:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.ek.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ek))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.en.prototype={
gai:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.en))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.W.prototype={
bY:function(a){return Math.sqrt(this.W(this))},
W:function(a){return this.a*a.a+this.b*a.b},
O:function(a,b){return new V.W(this.a*b,this.b*b)},
a5:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.bn
return s==null?$.bn=new V.W(0,0):s}return new V.W(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.X.prototype={
bY:function(a){return Math.sqrt(this.W(this))},
W:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
U:function(){var s=this,r=Math.sqrt(s.W(s))
if(r===1)return s
return s.a5(0,r)},
aV:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.X(s*r-q*p,q*o-n*r,n*p-s*o)},
R:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
aN:function(a){return new V.X(-this.a,-this.b,-this.c)},
a5:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.eX()
return new V.X(this.a/b,this.b/b,this.c/b)},
cT:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
w:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
U.hl.prototype={
br:function(a){var s=V.p6(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
K:function(a){var s=this.y
return s==null?null:s.I(a)},
sc9:function(a,b){},
sc_:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.br(s)}r.K(new D.C("maximumLocation",q,r.b))}},
sc1:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.br(s)}r.K(new D.C("minimumLocation",q,r.c))}},
sa2:function(a,b){var s,r=this
b=r.br(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.K(new D.C("location",s,b))}},
sc0:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.K(new D.C("maximumVelocity",p,a))}},
sP:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.K(new D.C("velocity",r,a))}},
sbU:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.K(new D.C("dampening",s,a))}},
aL:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa2(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sP(s)}}}
U.cc.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.K():s},
aM:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
return this.a.q(0,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bC.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.K():s},
K:function(a){var s=this.e
return s==null?null:s.I(a)},
a_:function(){return this.K(null)},
e_:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaB(),q=0;q<b.length;b.length===s||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.gv()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.K(new D.bF())},
ew:function(a,b){var s,r
for(s=b.gL(b),r=this.gaB();s.u();)s.gA(s).gv().M(0,r)
this.K(new D.bG())},
aM:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a6(o,o.length),n=H.Y(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.aM(0,b,c)
s=s==null?q:q.O(0,s)}}p.f=s==null?V.bh():s
o=p.e
if(o!=null)o.b2(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bC))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.T(o,q[p]))return!1}return!0},
h:function(a){return"Group"},
$ia0:1}
U.a0.prototype={}
U.cS.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.K():s},
K:function(a){var s=this.cy
return s==null?null:s.I(a)},
a_:function(){return this.K(null)},
aU:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gX().gcK().n(0,s.gbA())
a.gX().gcU().n(0,s.gbC())
a.gX().gdd().n(0,s.gbE())
return!0},
bB:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gaH(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bD:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a4(a.d)
if(s.W(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa2(0,-a.y.a4(r).O(0,2).a5(0,s.gai()).a*2.5+p.z)
q.sP(0)
p.Q=a.z.a4(r).O(0,2).a5(0,s.gai())
p.a_()},
bF:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.W(s)>0.0001){r.b.sP(r.Q.a*10*2.5)
r.a_()}},
aM:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aL(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aU(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia0:1}
U.cT.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.K():s},
K:function(a){var s=this.fx
return s==null?null:s.I(a)},
a_:function(){return this.K(null)},
aU:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gX().gcK().n(0,q.gbA())
a.gX().gcU().n(0,q.gbC())
a.gX().gdd().n(0,q.gbE())
s=a.ga8()
r=s.f
s=r==null?s.f=D.K():r
s.n(0,q.gdS())
s=a.ga8()
r=s.d
s=r==null?s.d=D.K():r
s.n(0,q.gdU())
s=a.gaK()
r=s.b
s=r==null?s.b=D.K():r
s.n(0,q.geT())
s=a.gaK()
r=s.d
s=r==null?s.d=D.K():r
s.n(0,q.geR())
s=a.gaK()
r=s.c
s=r==null?s.c=D.K():r
s.n(0,q.geP())
return!0},
aA:function(a){var s=a.b
if(this.r)s=-s
return new V.W(a.a,s)},
bB:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bD:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a4(a.d)
if(s.W(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aA(a.y.a4(r).O(0,2).a5(0,s.gai()))
p=n.c
p.sa2(0,-q.a*2.5+n.cy)
o=n.b
o.sa2(0,-q.b*2.5+n.db)
o.sP(0)
p.sP(0)
n.dx=n.aA(a.z.a4(r).O(0,2).a5(0,s.gai()))
n.a_()},
bF:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.W(s)>0.0001){r.c.sP(-r.dx.a*10*2.5)
r.b.sP(-r.dx.b*10*2.5)
r.a_()}},
dT:function(a){var s=this
if(t.D.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
dV:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aA(a.y.a4(r).O(0,2).a5(0,s.gai()))
p=n.c
p.sa2(0,-q.a*2.5+n.cy)
o=n.b
o.sa2(0,-q.b*2.5+n.db)
o.sP(0)
p.sP(0)
n.dx=n.aA(a.z.a4(r).O(0,2).a5(0,s.gai()))
n.a_()},
eU:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eS:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a4(a.d)
if(s.W(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aA(a.y.a4(r).O(0,2).a5(0,s.gai()))
p=n.c
p.sa2(0,-q.a*2.5+n.cy)
o=n.b
o.sa2(0,-q.b*2.5+n.db)
o.sP(0)
p.sP(0)
n.dx=n.aA(a.z.a4(r).O(0,2).a5(0,s.gai()))
n.a_()},
eQ:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.W(s)>0.0001){r.c.sP(-r.dx.a*10*2.5)
r.b.sP(-r.dx.b*10*2.5)
r.a_()}},
aM:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aL(0,s)
n=p.b
n.aL(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aU(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.O(0,V.aU(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia0:1}
U.cU.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.K():s},
K:function(a){var s=this.r
return s==null?null:s.I(a)},
aU:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gX()
r=s.e
s=r==null?s.e=D.K():r
r=this.gdX()
s.n(0,r)
s=a.ga8()
q=s.e;(q==null?s.e=D.K():q).n(0,r)
return!0},
dY:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gaH(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.K(new D.C("zoom",r,q))}},
aM:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aU(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia0:1}
M.dL.prototype={
ax:function(a){var s=this.y
return s==null?null:s.I(a)},
dv:function(){return this.ax(null)},
e3:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaw(),q=0;q<b.length;b.length===s||(0,H.y)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.cl()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ax(new D.bF())},
e5:function(a,b){var s,r
for(s=b.gL(b),r=this.gaw();s.u();)s.gA(s).gv().M(0,r)
this.ax(new D.bG())},
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
aI:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.d7(d.d)
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
n=C.d.af(o.a*q)
m=C.d.af(o.b*p)
l=C.d.af(o.c*q)
a.c=l
o=C.d.af(o.d*p)
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
a.cy.d6(g)
f=$.m9()
e=s.b
if(e!=null)f=e.a.O(0,f)
a.db.d6(f)}for(s=d.e.a,r=new J.a6(s,s.length),o=H.Y(r).c;r.u();)o.a(r.d).aL(0,a)
for(s=new J.a6(s,s.length),r=H.Y(s).c;s.u();)r.a(s.d).aI(a)
if(d.b!=null){a.cy.c3()
a.db.c3()}a.d5()}}
A.hc.prototype={}
A.hd.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fe:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fc:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.cM.prototype={
gac:function(a){var s=this.f
if(s==null)throw H.b(P.B("Must initialize the shader prior to getting the attributes."))
return s},
gb3:function(){var s=this.r
if(s==null)throw H.b(P.B("Must initialize the shader prior to getting the uniforms."))
return s},
gak:function(){var s=this.e
if(s==null)throw H.b(P.B(u.d))
return s},
co:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lM(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.B('Error compiling shader "'+H.r(q)+'": '+s))}return q},
eK:function(){var s,r,q,p,o=this,n=u.d,m=[],l=o.a,k=H.jz(l.getProgramParameter(o.gak(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.H(P.B(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.H(P.B(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.hc(l,q,p))}o.f=new A.hd(m)},
eM:function(){var s,r,q,p,o,n,m=this,l=u.d,k=[],j=m.a,i=H.jz(j.getProgramParameter(m.gak(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.H(P.B(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.H(P.B(l))
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
k.push(m.f8(o,n,q,p))}m.r=new A.iM(k)},
az:function(a,b,c){var s=this.a
if(a===1)return new A.iE(s,b,c)
else return A.km(s,this.e,b,a,c)},
dN:function(a,b,c){var s=this.a
if(a===1)return new A.eQ(s,b,c)
else return A.km(s,this.e,b,a,c)},
dO:function(a,b,c){var s=this.a
if(a===1)return new A.iP(s,b,c)
else return A.km(s,this.e,b,a,c)},
bb:function(a,b){return new P.ff(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
f8:function(a,b,c,d){var s=this
switch(a){case 5120:return s.az(b,c,d)
case 5121:return s.az(b,c,d)
case 5122:return s.az(b,c,d)
case 5123:return s.az(b,c,d)
case 5124:return s.az(b,c,d)
case 5125:return s.az(b,c,d)
case 5126:return new A.eO(s.a,c,d)
case 35664:return new A.iG(s.a,c,d)
case 35665:return new A.iI(s.a,c,d)
case 35666:return new A.iK(s.a,c,d)
case 35667:return new A.iH(s.a,c,d)
case 35668:return new A.iJ(s.a,c,d)
case 35669:return new A.iL(s.a,c,d)
case 35674:return new A.iN(s.a,c,d)
case 35675:return new A.iO(s.a,c,d)
case 35676:return new A.eP(s.a,c,d)
case 35678:return s.dN(b,c,d)
case 35680:return s.dO(b,c,d)
case 35670:throw H.b(s.bb("BOOL",c))
case 35671:throw H.b(s.bb("BOOL_VEC2",c))
case 35672:throw H.b(s.bb("BOOL_VEC3",c))
case 35673:throw H.b(s.bb("BOOL_VEC4",c))
default:throw H.b(P.B("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.iD.prototype={}
A.iM.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
h:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.y)(s),++p)q+=s[p].h(0)+"\n"
return q}}
A.iE.prototype={
h:function(a){return"Uniform1i: "+this.c}}
A.iH.prototype={
h:function(a){return"Uniform2i: "+this.c}}
A.iJ.prototype={
h:function(a){return"Uniform3i: "+this.c}}
A.iL.prototype={
h:function(a){return"Uniform4i: "+this.c}}
A.iF.prototype={
h:function(a){return"Uniform1iv: "+this.c}}
A.eO.prototype={
h:function(a){return"Uniform1f: "+this.c}}
A.iG.prototype={
h:function(a){return"Uniform2f: "+this.c}}
A.iI.prototype={
h:function(a){return"Uniform3f: "+this.c}}
A.iK.prototype={
h:function(a){return"Uniform4f: "+this.c}}
A.iN.prototype={
h:function(a){return"Uniform1Mat2 "+this.c}}
A.iO.prototype={
h:function(a){return"UniformMat3: "+this.c}}
A.eP.prototype={
bn:function(a){var s=new Float32Array(H.jF(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
h:function(a){return"UniformMat4: "+this.c}}
A.eQ.prototype={
h:function(a){return"UniformSampler2D: "+this.c}}
A.iP.prototype={
h:function(a){return"UniformSamplerCube: "+this.c}}
F.jO.prototype={
$2:function(a,b){return 0},
$S:41}
F.jN.prototype={
$3:function(a,b,c){var s,r=b*2-1,q=c*2-1,p=new V.bk(r,q,this.a.$2(b,c))
if(!J.T(a.f,p)){a.f=p
p=a.a
if(p!=null)p.Y()}p=new V.X(r,q,1).U()
if(!J.T(a.z,p)){a.z=p
p=a.a
if(p!=null)p.Y()}p=1-b
s=1-c
s=new V.ek(b*c,2+p*c,4+b*s,6+p*s)
if(!J.T(a.cx,s)){a.cx=s
p=a.a
if(p!=null)p.Y()}},
$S:42}
F.aP.prototype={
b7:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.b(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.b(P.B("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.gV().b.push(s)
s.b=b
b.gV().c.push(s)
s.c=c
c.gV().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gV().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}},
dG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.eX()
if(n!=null)q=q.R(0,n)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.cT())return p
return q.U()},
dI:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aO(0,n)
q=new V.X(o.a,o.b,o.c).U()
o=r.aO(0,n)
return q.aV(new V.X(o.a,o.b,o.c).U()).U()},
bP:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.dG()
if(s==null){s=q.dI()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
dF:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.eX()
if(n!=null)q=q.R(0,n)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.cT())return p
return q.U()},
dH:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aO(0,e)
o=new V.X(j.a,j.b,j.c).U()
if(q.a-r.a<0)o=o.aN(0)}else{n=(j-s.b)/p
j=b.aO(0,e)
j=new V.bk(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aO(0,h)
o=new V.X(j.a,j.b,j.c).U()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aN(0)}m=l.d
if(m!=null){m=m.U()
o=m.aV(o).U().aV(m).U()}return o},
bN:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.dF()
if(s==null){s=q.dH()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.w()},
G:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gaX(p)
p=a+C.a.ae(C.c.h(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gaX(o)
p=p+C.a.ae(C.c.h(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gaX(o)
s=p+C.a.ae(C.c.h(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.G("")}}
F.hM.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.w()},
G:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gaX(s)
s=a+C.a.ae(C.c.h(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gaX(r)
return s+C.a.ae(C.c.h(r==null?-1:r),0)},
w:function(){return this.G("")}}
F.i8.prototype={
gar:function(){var s=this.a
return s==null?this.a=new F.D(this,[]):s},
gd4:function(a){var s=this.b
return s==null?this.b=new F.i9([]):s},
gbZ:function(a){var s=this.c
return s==null?this.c=new F.bR(this,[]):s},
gV:function(){var s=this.d
return s==null?this.d=new F.cN(this,[]):s},
gv:function(){var s=this.e
return s==null?this.e=D.K():s},
f2:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=34962,d={},c=g.gar().c.length,b=a1.a,a=(b&$.b5().a)!==0?1:0
if((b&$.b4().a)!==0)++a
if((b&$.b3().a)!==0)++a
if((b&$.b6().a)!==0)++a
if((b&$.c6().a)!==0)++a
if((b&$.dt().a)!==0)++a
if((b&$.du().a)!==0)++a
if((b&$.b7().a)!==0)++a
if((b&$.c5().a)!==0)++a
s=a1.gcd(a1)
r=P.cx(c*s,0,!1)
d.a=0
q=P.mX(a,new F.ia(d,g,a1,s*4,c,s,r))
b=a0.a
p=b.createBuffer()
p.toString
b.bindBuffer(e,p)
b.bufferData(e,new Float32Array(H.jF(r)),35044)
b.bindBuffer(e,f)
o=new Z.dB(new Z.f_(e,p),[],q)
g.gd4(g)
if(g.gbZ(g).b.length!==0){n=[]
m=0
while(!0){p=g.c
if(p==null){p=g.c=new F.bR(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
k=p[m]
p=k.a
if(p==null)p=f
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.D(l,[]):j).am()}p=p.e}n.push(p==null?0:p)
p=k.b
if(p==null)p=f
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.D(l,[]):j).am()}p=p.e}n.push(p==null?0:p);++m}i=Z.ls(b,34963,n)
o.b.push(new Z.dT(1,n.length,i))}if(g.gV().b.length!==0){n=[]
m=0
while(!0){p=g.d
if(p==null){p=g.d=new F.cN(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
h=p[m]
p=h.a
if(p==null)p=f
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.D(l,[]):j).am()}p=p.e}n.push(p==null?0:p)
p=h.b
if(p==null)p=f
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.D(l,[]):j).am()}p=p.e}n.push(p==null?0:p)
p=h.c
if(p==null)p=f
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.D(l,[]):j).am()}p=p.e}n.push(p==null?0:p);++m}i=Z.ls(b,34963,n)
o.b.push(new Z.dT(4,n.length,i))}return o},
h:function(a){var s=this,r=[]
if(s.gar().c.length!==0){r.push("Vertices:")
r.push(s.gar().G("   "))}s.gd4(s)
if(s.gbZ(s).b.length!==0){r.push("Lines:")
r.push(s.gbZ(s).G("   "))}if(s.gV().b.length!==0){r.push("Faces:")
r.push(s.gV().G("   "))}return C.b.l(r,"\n")},
Y:function(){var s=this.e
return s==null?null:s.I(null)}}
F.ia.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.f0(a),f=g.gcd(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.D(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].fq(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c9(g,f,d*4,h.d)},
$S:43}
F.cN.prototype={
eZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.D(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,h)
f=new F.aP()
f.b7(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,g)
f=new F.aP()
f.b7(k,h,g)
e.push(f)}else{(l==null?s.a=new F.D(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,g)
f=new F.aP()
f.b7(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,g)
l=s.a;(l==null?s.a=new F.D(s,[]):l).n(0,k)
f=new F.aP()
f.b7(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gk:function(a){return this.b.length},
fK:function(){var s,r,q,p,o
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
p=q.a
o=p==null
if(!(o||q.b==null||q.c==null)){if(!o){p=p.a
if(p!=null){o=p.d
C.b.M((o==null?p.d=new F.cN(p,[]):o).b,q)}}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.I(null)}}}p=q.a
if(p!=null){o=p.d
C.b.M((o==null?p.d=new F.bW([],[],[]):o).b,q)}q.a=null
p=q.b
if(p!=null){o=p.d
C.b.M((o==null?p.d=new F.bW([],[],[]):o).c,q)}q.b=null
p=q.c
if(p!=null){o=p.d
C.b.M((o==null?p.d=new F.bW([],[],[]):o).d,q)}q.c=null}C.b.sk(s,0)},
bQ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.y)(s),++p)if(!s[p].bP())q=!1
return q},
bO:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.y)(s),++p)if(!s[p].bN())q=!1
return q},
h:function(a){return this.w()},
G:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].G(a))
return C.b.l(p,"\n")},
w:function(){return this.G("")}}
F.bR.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.w()},
G:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].G(a+(""+s+". ")))}return C.b.l(r,"\n")},
w:function(){return this.G("")}}
F.i9.prototype={
gk:function(a){return 0},
h:function(a){return this.w()},
G:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].G(a))
return C.b.l(q,"\n")},
w:function(){return this.G("")}}
F.cV.prototype={
bT:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.lr(s.cx,p,m,r,q,o,n,a,l)},
f5:function(){return this.bT(null)},
gV:function(){var s=this.d
return s==null?this.d=new F.bW([],[],[]):s},
gaX:function(a){var s=this.a
if(s!=null)s.gar().am()
return this.e},
sdg:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.Y()}},
fq:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.b5())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.b4())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.q(0,$.b3())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.q(0,$.b6())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.q(0,$.c6())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.dt())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.q(0,$.du())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.q(0,$.b7()))return[o.ch]
else if(a.q(0,$.c5())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
bP:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.eX()
p.gV().E(0,new F.j5(o))
p.r=o.a.U()
if(r){s.Y()
o=s.e
if(o!=null)o.b2(0)}return!0},
bN:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.eX()
p.gV().E(0,new F.j4(o))
p.x=o.a.U()
if(r){s.Y()
o=s.e
if(o!=null)o.b2(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.w()},
G:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.a.ae(C.c.h(q.e),0))
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
n.push(V.x(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.l(n,", ")
return a+"{"+r+"}"},
w:function(){return this.G("")}}
F.j5.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.R(0,r)}},
$S:6}
F.j4.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.R(0,r)}},
$S:6}
F.D.prototype={
am:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.B("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Y()
return!0},
cD:function(a,b){var s=null,r=F.lr(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
gk:function(a){return this.c.length},
bQ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].bP()
return!0},
bO:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].bN()
return!0},
h:function(a){return this.w()},
G:function(a){var s,r,q,p
this.am()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.y)(r),++p)s.push(r[p].G(a))
return C.b.l(s,"\n")},
w:function(){return this.G("")}}
F.bW.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){var s=this
C.b.E(s.b,b)
C.b.E(s.c,new F.j2(s,b))
C.b.E(s.d,new F.j3(s,b))},
h:function(a){return this.w()},
w:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].G(""))
return C.b.l(p,"\n")}}
F.j2.prototype={
$1:function(a){if(!J.T(a.a,this.a))this.b.$1(a)},
$S:6}
F.j3.prototype={
$1:function(a){var s=this.a
if(!J.T(a.a,s)&&!J.T(a.b,s))this.b.$1(a)},
$S:6}
F.eY.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.w()},
w:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].G(""))
return C.b.l(p,"\n")}}
O.ij.prototype={}
T.ik.prototype={}
T.il.prototype={}
T.iq.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.K():s}}
T.ir.prototype={
fs:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.kZ(a)
r=new T.iq(o)
W.S(s,"load",new T.is(this,r,s,!1,o,!1,!1),!1)
return r},
eH:function(a,b,c){var s,r,q,p,o,n
b=V.kG(b)
s=a.width
r=V.kG(s==null?512:s)
s=a.height
q=V.kG(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.k9()
p.width=r
p.height=q
o=t.b.a(C.i.di(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.oH(o.getImageData(0,0,s,n==null?512:n))}}}
T.is.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.eH(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.a3.fR(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.fd()}++s.e},
$S:4}
X.hG.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.K():s}}
X.eg.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.K():s},
ay:function(a){var s=this.f
return s==null?null:s.I(a)},
dB:function(){return this.ay(null)},
saZ:function(a){var s,r,q=this
if(!J.T(q.b,a)){s=q.b
if(s!=null)s.gv().M(0,q.gci())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gci())
q.ay(new D.C("mover",r,q.b))}}}
X.ii.prototype={}
V.aE.prototype={
b6:function(a){this.b=new P.hI(C.R)
this.c=null
this.d=[]},
H:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.dM(p,0,p.length)
m=n==null?p:n
m=H.kI(m," ","&nbsp;")
C.P.dj(o,m)
m=o.style
m.color=b
C.b.gah(l.d).push(o)}},
d2:function(a,b){var s,r,q,p=this
p.d=[]
s=C.b.l(b,"\n")
r=p.c
if(r==null)r=p.c=p.bc()
if(r!=null)for(q=new H.l(s),q=new P.bp(r.c8(new H.aT(q,q.gk(q))).a());q.u();)p.bi(q.gA(q))}}
V.k6.prototype={
$1:function(a){var s=C.d.c7(this.a.gfm(),2)
if(s!=="0.00")P.kH(s+" fps")},
$S:45}
V.dI.prototype={
bi:function(a){var s=this
switch(a.a){case"Class":s.H(a.b,"#551")
break
case"Comment":s.H(a.b,"#777")
break
case"Id":s.H(a.b,"#111")
break
case"Num":s.H(a.b,"#191")
break
case"Reserved":s.H(a.b,"#119")
break
case"String":s.H(a.b,"#171")
break
case"Symbol":s.H(a.b,"#616")
break
case"Type":s.H(a.b,"#B11")
break
case"Whitespace":s.H(a.b,"#111")
break}},
bc:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.ix()
a2.d=a2.j(0,q)
s=a2.j(0,q).l(0,p)
r=new K.o([])
r.p(new H.l("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=a2.j(0,p).l(0,p)
r=new K.o([])
r.p(new H.l("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
a2.j(0,q).l(0,o).a.push(K.J("0","9"))
a2.j(0,o).l(0,o).a.push(K.J("0","9"))
s=a2.j(0,o).l(0,n)
r=new K.o([])
r.p(new H.l("."))
s.a.push(r)
a2.j(0,n).l(0,m).a.push(K.J("0","9"))
a2.j(0,m).l(0,m).a.push(K.J("0","9"))
r=a2.j(0,q).l(0,l)
s=new K.o([])
s.p(new H.l(k))
r.a.push(s)
s=a2.j(0,l).l(0,l)
r=new K.o([])
r.p(new H.l(k))
s.a.push(r)
r=a2.j(0,q).l(0,j)
s=new K.o([])
s.p(new H.l('"'))
r.a.push(s)
s=a2.j(0,j).l(0,i)
r=new K.o([])
r.p(new H.l('"'))
s.a.push(r)
r=a2.j(0,j).l(0,h)
s=new K.o([])
s.p(new H.l("\\"))
r.a.push(s)
s=a2.j(0,h).l(0,j)
r=new K.o([])
r.p(new H.l('"'))
s.a.push(r)
a2.j(0,j).l(0,j).a.push(new K.aM())
r=a2.j(0,q).l(0,g)
s=new K.o([])
s.p(new H.l("'"))
r.a.push(s)
s=a2.j(0,g).l(0,f)
r=new K.o([])
r.p(new H.l("'"))
s.a.push(r)
r=a2.j(0,g).l(0,e)
s=new K.o([])
s.p(new H.l("\\"))
r.a.push(s)
s=a2.j(0,e).l(0,g)
r=new K.o([])
r.p(new H.l("'"))
s.a.push(r)
a2.j(0,g).l(0,g).a.push(new K.aM())
r=a2.j(0,q).l(0,d)
s=new K.o([])
s.p(new H.l("/"))
r.a.push(s)
s=a2.j(0,d).l(0,c)
r=new K.o([])
r.p(new H.l("/"))
s.a.push(r)
r=a2.j(0,c).l(0,b)
s=new K.o([])
s.p(new H.l("\n"))
r.a.push(s)
s=[]
a2.j(0,c).l(0,c).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l("\n"))
s.push(r)
r=a2.j(0,d).l(0,a)
s=new K.o([])
s.p(new H.l("*"))
r.a.push(s)
s=a2.j(0,a).l(0,a0)
r=new K.o([])
r.p(new H.l("*"))
s.a.push(r)
r=[]
a2.j(0,a0).l(0,a).a.push(new K.a7(r))
s=new K.o([])
s.p(new H.l("*"))
r.push(s)
s=a2.j(0,a0).l(0,b)
r=new K.o([])
r.p(new H.l("/"))
s.a.push(r)
r=a2.j(0,q).l(0,a1)
s=new K.o([])
s.p(new H.l(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).l(0,a1)
r=new K.o([])
r.p(new H.l(" \n\t"))
s.a.push(r)
r=a2.j(0,o)
r.d=r.a.J("Num")
r=a2.j(0,m)
r.d=r.a.J("Num")
r=a2.j(0,l)
r.d=r.a.J("Symbol")
r=a2.j(0,i)
r.d=r.a.J("String")
r=a2.j(0,f)
r.d=r.a.J("String")
r=a2.j(0,b)
r.d=r.a.J(c)
r=a2.j(0,a1)
r.d=r.a.J(a1)
r=a2.j(0,p)
r=r.d=r.a.J(p)
r.aq(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aq(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aq(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dP.prototype={
bi:function(a){var s=this
switch(a.a){case"Builtin":s.H(a.b,"#411")
break
case"Comment":s.H(a.b,"#777")
break
case"Id":s.H(a.b,"#111")
break
case"Num":s.H(a.b,"#191")
break
case"Preprocess":s.H(a.b,"#737")
break
case"Reserved":s.H(a.b,"#119")
break
case"Symbol":s.H(a.b,"#611")
break
case"Type":s.H(a.b,"#171")
break
case"Whitespace":s.H(a.b,"#111")
break}},
bc:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.ix()
d.d=d.j(0,q)
s=d.j(0,q).l(0,p)
r=new K.o([])
r.p(new H.l("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=d.j(0,p).l(0,p)
r=new K.o([])
r.p(new H.l("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
d.j(0,q).l(0,o).a.push(K.J("0","9"))
d.j(0,o).l(0,o).a.push(K.J("0","9"))
s=d.j(0,o).l(0,n)
r=new K.o([])
r.p(new H.l("."))
s.a.push(r)
d.j(0,n).l(0,m).a.push(K.J("0","9"))
d.j(0,m).l(0,m).a.push(K.J("0","9"))
r=d.j(0,q).l(0,l)
s=new K.o([])
s.p(new H.l(k))
r.a.push(s)
s=d.j(0,l).l(0,l)
r=new K.o([])
r.p(new H.l(k))
s.a.push(r)
r=d.j(0,q).l(0,j)
s=new K.o([])
s.p(new H.l("/"))
r.a.push(s)
s=d.j(0,j).l(0,i)
r=new K.o([])
r.p(new H.l("/"))
s.a.push(r)
d.j(0,j).l(0,l).a.push(new K.aM())
r=d.j(0,i).l(0,h)
s=new K.o([])
s.p(new H.l("\n"))
r.a.push(s)
s=[]
d.j(0,i).l(0,i).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l("\n"))
s.push(r)
r=d.j(0,q).l(0,g)
s=new K.o([])
s.p(new H.l("#"))
r.a.push(s)
s=[]
d.j(0,g).l(0,g).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l("\n"))
s.push(r)
r=d.j(0,g).l(0,f)
s=new K.o([])
s.p(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).l(0,e)
r=new K.o([])
r.p(new H.l(" \n\t"))
s.a.push(r)
r=d.j(0,e).l(0,e)
s=new K.o([])
s.p(new H.l(" \n\t"))
r.a.push(s)
s=d.j(0,o)
s.d=s.a.J("Num")
s=d.j(0,m)
s.d=s.a.J("Num")
s=d.j(0,l)
s.d=s.a.J("Symbol")
s=d.j(0,h)
s.d=s.a.J(i)
s=d.j(0,f)
s.d=s.a.J(g)
s=d.j(0,e)
s.d=s.a.J(e)
s=d.j(0,p)
s=s.d=s.a.J(p)
s.aq(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aq(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aq(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dR.prototype={
bi:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.H(a.b,"#911")
s.H("=",r)
break
case"Id":s.H(a.b,r)
break
case"Other":s.H(a.b,r)
break
case"Reserved":s.H(a.b,"#119")
break
case"String":s.H(a.b,"#171")
break
case"Symbol":s.H(a.b,"#616")
break}},
bc:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.ix()
j.d=j.j(0,q)
s=j.j(0,q).l(0,p)
r=new K.o([])
r.p(new H.l("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,p).l(0,p)
r=new K.o([])
r.p(new H.l("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,p).l(0,o)
r=new K.o([])
r.p(new H.l("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).l(0,n)
r=new K.o([])
r.p(new H.l("</\\-!>="))
s.a.push(r)
r=j.j(0,n).l(0,n)
s=new K.o([])
s.p(new H.l("</\\-!>="))
r.a.push(s)
s=j.j(0,q).l(0,m)
r=new K.o([])
r.p(new H.l('"'))
s.a.push(r)
r=j.j(0,m).l(0,l)
s=new K.o([])
s.p(new H.l('"'))
r.a.push(s)
s=j.j(0,m).l(0,"EscStr")
r=new K.o([])
r.p(new H.l("\\"))
s.a.push(r)
r=j.j(0,"EscStr").l(0,m)
s=new K.o([])
s.p(new H.l('"'))
r.a.push(s)
j.j(0,m).l(0,m).a.push(new K.aM())
j.j(0,q).l(0,k).a.push(new K.aM())
s=[]
j.j(0,k).l(0,k).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l('</\\-!>=_"'))
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,n)
s.d=s.a.J("Symbol")
s=j.j(0,l)
s.d=s.a.J("String")
s=j.j(0,p)
r=s.a.J(p)
s.d=r
r.aq(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.J(o)
r=j.j(0,k)
r.d=r.a.J(k)
return j}}
V.ei.prototype={
d2:function(a,b){this.d=[]
this.H(C.b.l(b,"\n"),"#111")},
bi:function(a){},
bc:function(){return null}}
V.i0.prototype={
cB:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.iT().gb1().i(0,k)
if(j==null)if(d){c.$0()
l.aT(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.ap(p)
o.gan(p).n(0,q)
n=W.mO("radio")
n.checked=s
n.name=k
W.S(n,"change",new V.i1(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gan(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
a0:function(a,b,c){return this.cB(a,b,c,!1)},
aT:function(a){var s,r,q=P.iT(),p=t.N,o=P.l0(q.gb1(),p,p)
o.m(0,this.a,a)
s=q.c5(0,o)
p=window.history
p.toString
r=s.gba()
p.replaceState(new P.fK([],[]).b4(""),"",r)}}
V.i1.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.aT(s.d)}},
$S:4}
V.ib.prototype={
cE:function(a){var s,r,q,p,o,n,m=this.eL(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.l(C.b.fp(a)),s=new P.bp(m.c8(new H.aT(s,s.gk(s))).a());s.u();){r=s.gA(s)
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
if(H.m4(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ju(C.w,r,C.e,!1)
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
dh:function(a){var s,r,q,p=new V.dI("dart",[])
p.b6("dart")
s=new V.dP("glsl",[])
s.b6("glsl")
r=new V.dR("html",[])
r.b6("html")
q=C.b.fi([p,s,r],new V.ie(a))
if(q!=null)return q
p=new V.ei("plain",[])
p.b6("plain")
return p},
cC:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.S(q,"+")){b2[r]=C.a.au(q,1)
a8.push(1)
s=!0}else if(C.a.S(q,"-")){b2[r]=C.a.au(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dh(b0)
p.d2(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.ju(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.kN()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.y)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.y)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gL(q);a4.u();)b.appendChild(a4.gA(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
eX:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
for(p=0;p<2;++p){o=l.createElement("div")
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
eL:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.ix()
h.d=h.j(0,q)
s=h.j(0,q).l(0,p)
r=new K.o([])
r.p(new H.l("*"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,p).l(0,p).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l("*"))
s.push(r)
r=h.j(0,p).l(0,"BoldEnd")
s=new K.o([])
s.p(new H.l("*"))
r.a.push(s)
r.c=!0
r=h.j(0,q).l(0,o)
s=new K.o([])
s.p(new H.l("_"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,o).l(0,o).a.push(new K.a7(r))
s=new K.o([])
s.p(new H.l("_"))
r.push(s)
s=h.j(0,o).l(0,n)
r=new K.o([])
r.p(new H.l("_"))
s.a.push(r)
s.c=!0
s=h.j(0,q).l(0,m)
r=new K.o([])
r.p(new H.l("`"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,m).l(0,m).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l("`"))
s.push(r)
r=h.j(0,m).l(0,"CodeEnd")
s=new K.o([])
s.p(new H.l("`"))
r.a.push(s)
r.c=!0
r=h.j(0,q).l(0,l)
s=new K.o([])
s.p(new H.l("["))
r.a.push(s)
r.c=!0
r=h.j(0,l).l(0,k)
s=new K.o([])
s.p(new H.l("|"))
r.a.push(s)
s=h.j(0,l).l(0,j)
r=new K.o([])
r.p(new H.l("]"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,l).l(0,l).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l("|]"))
s.push(r)
r=h.j(0,k).l(0,j)
s=new K.o([])
s.p(new H.l("]"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,k).l(0,k).a.push(new K.a7(r))
s=new K.o([])
s.p(new H.l("|]"))
r.push(s)
h.j(0,q).l(0,i).a.push(new K.aM())
s=[]
h.j(0,i).l(0,i).a.push(new K.a7(s))
r=new K.o([])
r.p(new H.l("*_`["))
s.push(r)
r=h.j(0,"BoldEnd")
r.d=r.a.J(p)
r=h.j(0,n)
r.d=r.a.J(o)
r=h.j(0,"CodeEnd")
r.d=r.a.J(m)
r=h.j(0,j)
r.d=r.a.J("Link")
r=h.j(0,i)
r.d=r.a.J(i)
return this.b=h}}
V.id.prototype={
$1:function(a){P.lg(C.m,new V.ic(this.a))},
$S:4}
V.ic.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.af(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.r(-0.01*s)+"px"
q.top=r},
$S:0}
V.ie.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:46}
V.im.prototype={
a0:function(a,b,c){var s,r,q,p,o,n,m=this,l=W.kZ(null)
l.src=b
l.width=64
l.height=64
s=l.style
s.border="solid 2px white"
s=m.c
r=J.ap(s)
q=r.gan(s)
p=q.gk(q)
W.S(l,"click",new V.ip(m,l,b,p),!1)
r.gan(s).n(0,l)
s=r.gan(s)
r=document.createElement("br")
r.toString
s.n(0,r)
o=P.iT().gb1().i(0,m.a)
if(o==null){m.aT(p)
n=c}else n=P.h8(o,null)===p
if(n)l.click()},
n:function(a,b){return this.a0(a,b,!1)},
aT:function(a){var s,r,q=P.iT(),p=t.N,o=P.l0(q.gb1(),p,p)
o.m(0,this.a,""+a)
s=q.c5(0,o)
p=window.history
p.toString
r=s.gba()
p.replaceState(new P.fK([],[]).b4(""),"",r)}}
V.ip.prototype={
$1:function(a){var s=this,r=s.a,q=J.kL(r.c)
q.E(q,new V.io())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.aT(s.d)},
$S:3}
V.io.prototype={
$1:function(a){var s
if(t.R.b(a)){s=a.style
s.border="solid 2px white"}},
$S:47}
T.dC.prototype={}
T.dD.prototype={
gv:function(){var s=this.d
return s==null?this.d=D.K():s},
b9:function(a){var s=this.d
return s==null?null:s.I(a)},
eO:function(){return this.b9(null)},
sa3:function(a){var s=this.c
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.b9(new D.C("offsetScalar",s,a))}}}
T.jU.prototype={
$1:function(a){var s,r=this.a,q=this.b.f.fs(a),p=r.b
if(p!==q){if(p!=null)p.gv().M(0,r.gcv())
s=r.b
r.b=q
q.gv().n(0,r.gcv())
r.b9(new D.C("bumpyTexture",s,r.b))}},
$S:48}
T.jV.prototype={
$0:function(){this.a.sa3(0.1)},
$S:0}
T.jW.prototype={
$0:function(){this.a.sa3(0.2)},
$S:0}
T.jY.prototype={
$0:function(){this.a.sa3(0.3)},
$S:0}
T.jZ.prototype={
$0:function(){this.a.sa3(0.4)},
$S:0}
T.k_.prototype={
$0:function(){this.a.sa3(0.5)},
$S:0}
T.k0.prototype={
$0:function(){this.a.sa3(0.6)},
$S:0}
T.k1.prototype={
$0:function(){this.a.sa3(0.7)},
$S:0}
T.k2.prototype={
$0:function(){this.a.sa3(0.8)},
$S:0}
T.k3.prototype={
$0:function(){this.a.sa3(0.9)},
$S:0}
T.k4.prototype={
$0:function(){this.a.sa3(1)},
$S:0}
T.jX.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
q=q==null?null:q.c
s.cC("Vertex Shader","glsl",0,(q==null?"":q).split("\n"))
r=r.a
r=r==null?null:r.d
s.cC("Fragment Shader","glsl",0,(r==null?"":r).split("\n"))},
$S:1};(function aliases(){var s=J.a.prototype
s.dl=s.h
s=J.aR.prototype
s.dn=s.h
s=P.e.prototype
s.dm=s.bk
s=W.w.prototype
s.bo=s.a7
s=W.d7.prototype
s.dq=s.ag
s=K.dQ.prototype
s.dk=s.ap
s.bp=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"oh","mT",49)
r(P,"oB","nr",9)
r(P,"oC","ns",9)
r(P,"oD","nt",9)
q(P,"lV","ow",0)
r(W,"qd","hx",51)
p(W,"oP",4,null,["$4"],["nw"],18,0)
p(W,"oQ",4,null,["$4"],["nx"],18,0)
var j
o(j=E.bA.prototype,"gcZ",0,0,null,["$1","$0"],["d_","fC"],2,0)
o(j,"gd0",0,0,null,["$1","$0"],["d1","fD"],2,0)
o(j,"gcX",0,0,null,["$1","$0"],["cY","fB"],2,0)
o(j,"gcV",0,0,null,["$1","$0"],["cW","fw"],2,0)
n(j,"gfu","fv",7)
n(j,"gfz","fA",7)
o(j=E.eI.prototype,"gce",0,0,null,["$1","$0"],["cg","cf"],2,0)
m(j,"gfN","d8",0)
l(j=X.eW.prototype,"gec","ed",4)
l(j,"ge0","e1",4)
l(j,"ge6","e7",3)
l(j,"geg","eh",17)
l(j,"gee","ef",17)
l(j,"gej","ek",3)
l(j,"gen","eo",3)
l(j,"gea","eb",3)
l(j,"gel","em",3)
l(j,"ge8","e9",3)
l(j,"gep","eq",36)
l(j,"ger","es",4)
l(j,"geB","eC",11)
l(j,"gex","ey",11)
l(j,"gez","eA",11)
k(V.W.prototype,"gk","bY",16)
k(V.X.prototype,"gk","bY",16)
o(j=U.bC.prototype,"gaB",0,0,null,["$1","$0"],["K","a_"],2,0)
n(j,"gdZ","e_",15)
n(j,"gev","ew",15)
o(j=U.cS.prototype,"gaB",0,0,null,["$1","$0"],["K","a_"],2,0)
l(j,"gbA","bB",10)
l(j,"gbC","bD",10)
l(j,"gbE","bF",10)
o(j=U.cT.prototype,"gaB",0,0,null,["$1","$0"],["K","a_"],2,0)
l(j,"gbA","bB",1)
l(j,"gbC","bD",1)
l(j,"gbE","bF",1)
l(j,"gdS","dT",1)
l(j,"gdU","dV",1)
l(j,"geT","eU",1)
l(j,"geR","eS",1)
l(j,"geP","eQ",1)
l(U.cU.prototype,"gdX","dY",1)
o(j=M.dL.prototype,"gaw",0,0,null,["$1","$0"],["ax","dv"],2,0)
n(j,"ge2","e3",7)
n(j,"ge4","e5",7)
o(X.eg.prototype,"gci",0,0,null,["$1","$0"],["ay","dB"],2,0)
o(T.dD.prototype,"gcv",0,0,null,["$1","$0"],["b9","eO"],2,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.kg,J.a,J.a6,P.E,P.d0,P.e,H.aT,P.dU,H.cm,H.eT,H.cd,H.iB,H.hZ,H.fG,H.bb,P.Q,H.hN,H.e1,H.dX,H.al,H.fi,P.dd,P.c_,P.bp,P.f1,P.ez,P.eA,P.jy,P.dk,P.jf,P.d_,P.q,P.fW,P.cA,P.er,P.dE,P.hJ,P.jw,P.jv,P.P,P.bc,P.ef,P.cO,P.ff,P.hF,P.a8,P.U,P.bq,P.iR,P.fA,W.ho,W.kb,W.kn,W.bZ,W.G,W.cH,W.d7,W.fM,W.cn,W.jj,W.fX,P.jm,P.df,P.fy,K.aM,K.dQ,K.i2,K.o,L.ew,L.eJ,L.eK,L.iw,O.by,O.cC,E.hi,E.bA,E.bx,E.bN,E.jb,E.i3,E.eI,Z.f_,Z.j6,Z.dB,Z.dT,Z.cW,D.hk,D.cl,D.O,X.ca,X.e_,X.hL,X.hR,X.a_,X.hW,X.iy,X.eW,V.bz,V.hz,V.e3,V.a1,V.bk,V.ek,V.en,V.W,V.X,U.cS,U.cT,U.cU,M.dL,A.hc,A.hd,A.iD,A.iM,F.aP,F.hM,F.i8,F.cN,F.bR,F.i9,F.cV,F.D,F.bW,F.eY,O.ij,T.ir,X.ii,X.eg,V.aE,V.i0,V.ib,V.im])
q(J.a,[J.dV,J.cr,J.aR,J.au,J.bH,J.aQ,H.cD,H.R,W.c,W.ha,W.b8,W.cb,W.aF,W.A,W.f6,W.ai,W.hr,W.hs,W.f8,W.ci,W.fa,W.ht,W.f,W.fg,W.at,W.hH,W.fk,W.be,W.hQ,W.hT,W.fo,W.fp,W.av,W.fq,W.fs,W.aw,W.fw,W.fz,W.ax,W.fB,W.ay,W.fH,W.ag,W.fO,W.iu,W.az,W.fQ,W.iz,W.iX,W.fY,W.h_,W.h1,W.h3,W.h5,P.aS,P.fm,P.aV,P.fu,P.i_,P.fI,P.aY,P.fS,P.he,P.f3,P.bP,P.fE])
q(J.aR,[J.eh,J.bm,J.aG])
r(J.dY,J.au)
q(J.bH,[J.cq,J.dW])
q(P.E,[H.cs,P.eN,H.dZ,H.eS,H.ep,H.fd,P.dy,P.ec,P.aq,P.eU,P.eR,P.bS,P.dF,P.dH])
r(P.cv,P.d0)
q(P.cv,[H.bU,W.f4,W.a3,P.dN])
r(H.l,H.bU)
q(P.e,[H.h,H.bg,H.bo,P.cp])
q(H.h,[H.cw,H.ct])
r(H.cj,H.bg)
q(P.dU,[H.e2,H.f0])
r(H.cB,H.cw)
r(H.ce,H.cd)
r(H.cI,P.eN)
q(H.bb,[H.eF,H.hK,H.jQ,H.jR,H.jS,P.j8,P.j7,P.j9,P.ja,P.jr,P.jq,P.jI,P.jh,P.ji,P.hO,P.hS,P.j0,P.j_,P.hu,P.hv,P.iW,P.iS,P.iU,P.iV,P.jt,P.js,P.jC,P.jD,P.jE,W.hw,W.hU,W.hV,W.i7,W.ig,W.jc,W.hY,W.hX,W.jk,W.jl,W.jp,W.jx,P.jn,P.jo,P.jB,P.jJ,P.hD,P.hE,P.hf,E.i4,E.i5,E.i6,E.it,D.hB,D.hC,F.jO,F.jN,F.ia,F.j5,F.j4,F.j2,F.j3,T.is,V.k6,V.i1,V.id,V.ic,V.ie,V.ip,V.io,T.jU,T.jV,T.jW,T.jY,T.jZ,T.k_,T.k0,T.k1,T.k2,T.k3,T.k4,T.jX])
q(H.eF,[H.ex,H.bw])
r(P.cz,P.Q)
q(P.cz,[H.aj,W.f2])
r(H.bM,H.R)
q(H.bM,[H.d2,H.d4])
r(H.d3,H.d2)
r(H.bi,H.d3)
r(H.d5,H.d4)
r(H.cE,H.d5)
q(H.cE,[H.e7,H.e8,H.e9,H.ea,H.eb,H.cF,H.bj])
r(H.de,H.fd)
r(P.da,P.cp)
r(P.jg,P.jy)
r(P.d6,P.dk)
r(P.cZ,P.d6)
r(P.di,P.cA)
r(P.bV,P.di)
q(P.dE,[P.hg,P.hy])
r(P.dG,P.eA)
q(P.dG,[P.hh,P.hI,P.j1,P.iZ])
r(P.iY,P.hy)
q(P.aq,[P.cL,P.dS])
r(P.f7,P.bq)
q(W.c,[W.n,W.dM,W.bJ,W.am,W.d8,W.an,W.aa,W.db,W.eZ,W.bX,P.dA,P.aN])
q(W.n,[W.w,W.ar,W.bY])
q(W.w,[W.p,P.i])
q(W.p,[W.dw,W.dx,W.bv,W.b9,W.ba,W.cg,W.dO,W.bD,W.bE,W.eq,W.aX,W.cP,W.eD,W.eE,W.bT])
r(W.hn,W.aF)
r(W.cf,W.f6)
q(W.ai,[W.hp,W.hq])
r(W.f9,W.f8)
r(W.ch,W.f9)
r(W.fb,W.fa)
r(W.dK,W.fb)
r(W.ae,W.b8)
r(W.fh,W.fg)
r(W.bB,W.fh)
r(W.fl,W.fk)
r(W.bd,W.fl)
r(W.aJ,W.f)
q(W.aJ,[W.bf,W.af,W.bl])
r(W.e4,W.fo)
r(W.e5,W.fp)
r(W.fr,W.fq)
r(W.e6,W.fr)
r(W.ft,W.fs)
r(W.cG,W.ft)
r(W.fx,W.fw)
r(W.ej,W.fx)
r(W.eo,W.fz)
r(W.d9,W.d8)
r(W.et,W.d9)
r(W.fC,W.fB)
r(W.eu,W.fC)
r(W.ey,W.fH)
r(W.fP,W.fO)
r(W.eG,W.fP)
r(W.dc,W.db)
r(W.eH,W.dc)
r(W.fR,W.fQ)
r(W.eL,W.fR)
r(W.aZ,W.af)
r(W.fZ,W.fY)
r(W.f5,W.fZ)
r(W.cX,W.ci)
r(W.h0,W.h_)
r(W.fj,W.h0)
r(W.h2,W.h1)
r(W.d1,W.h2)
r(W.h4,W.h3)
r(W.fD,W.h4)
r(W.h6,W.h5)
r(W.fL,W.h6)
r(W.fc,W.f2)
r(W.fe,P.ez)
r(W.fN,W.d7)
r(P.fK,P.jm)
r(P.a5,P.fy)
r(P.fn,P.fm)
r(P.e0,P.fn)
r(P.fv,P.fu)
r(P.ed,P.fv)
r(P.bQ,P.i)
r(P.fJ,P.fI)
r(P.eB,P.fJ)
r(P.fT,P.fS)
r(P.eM,P.fT)
r(P.dz,P.f3)
r(P.ee,P.aN)
r(P.fF,P.fE)
r(P.ev,P.fF)
q(K.dQ,[K.a7,L.iA])
q(E.hi,[Z.c9,A.cM,T.ik])
q(D.O,[D.bF,D.bG,D.C,X.el])
q(X.el,[X.cy,X.bK,X.bL,X.cQ])
q(D.hk,[U.hl,U.a0])
r(U.cc,U.a0)
r(U.bC,O.by)
q(A.iD,[A.iE,A.iH,A.iJ,A.iL,A.iF,A.eO,A.iG,A.iI,A.iK,A.iN,A.iO,A.eP,A.eQ,A.iP])
r(T.il,T.ik)
r(T.iq,T.il)
r(X.hG,X.ii)
q(V.aE,[V.dI,V.dP,V.dR,V.ei])
r(T.dC,A.cM)
r(T.dD,O.ij)
s(H.bU,H.eT)
s(H.d2,P.q)
s(H.d3,H.cm)
s(H.d4,P.q)
s(H.d5,H.cm)
s(P.d0,P.q)
s(P.di,P.fW)
s(P.dk,P.er)
s(W.f6,W.ho)
s(W.f8,P.q)
s(W.f9,W.G)
s(W.fa,P.q)
s(W.fb,W.G)
s(W.fg,P.q)
s(W.fh,W.G)
s(W.fk,P.q)
s(W.fl,W.G)
s(W.fo,P.Q)
s(W.fp,P.Q)
s(W.fq,P.q)
s(W.fr,W.G)
s(W.fs,P.q)
s(W.ft,W.G)
s(W.fw,P.q)
s(W.fx,W.G)
s(W.fz,P.Q)
s(W.d8,P.q)
s(W.d9,W.G)
s(W.fB,P.q)
s(W.fC,W.G)
s(W.fH,P.Q)
s(W.fO,P.q)
s(W.fP,W.G)
s(W.db,P.q)
s(W.dc,W.G)
s(W.fQ,P.q)
s(W.fR,W.G)
s(W.fY,P.q)
s(W.fZ,W.G)
s(W.h_,P.q)
s(W.h0,W.G)
s(W.h1,P.q)
s(W.h2,W.G)
s(W.h3,P.q)
s(W.h4,W.G)
s(W.h5,P.q)
s(W.h6,W.G)
s(P.fm,P.q)
s(P.fn,W.G)
s(P.fu,P.q)
s(P.fv,W.G)
s(P.fI,P.q)
s(P.fJ,W.G)
s(P.fS,P.q)
s(P.fT,W.G)
s(P.f3,P.Q)
s(P.fE,P.q)
s(P.fF,W.G)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",M:"double",V:"num",k:"String",ac:"bool",a8:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(O)","~([O?])","~(af)","~(f)","~(k,@)","~(aP)","~(j,e<bA>)","~(@,@)","~(~())","~(O?)","~(bl)","a8()","@()","k(j)","~(j,e<a0?>)","M()","~(bf)","ac(w,k,k,bZ)","~(~(O))","ac(n)","~(cR,k,j)","ac(aH)","ac(k)","k(k)","~(n,n?)","a8(~())","~(@)","w(n)","~(k,k)","@(@)","@(@,k)","~(V)","cR(@,@)","a8(@)","~(k,k?)","~(aZ)","j(j,j)","~(k[@])","~(k,j)","z<k,k>(z<k,k>,k)","M(M,M)","~(cV,M,M)","c9(j)","~(N?,N?)","~(iv)","ac(aE?)","~(w)","~(k)","j(@,@)","@(k)","k(c)","a8(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nP(v.typeUniverse,JSON.parse('{"eh":"aR","bm":"aR","aG":"aR","p8":"f","pk":"f","pa":"aN","p9":"c","pr":"c","pu":"c","p7":"i","pl":"i","pb":"p","po":"p","pm":"n","pj":"n","pU":"aa","pf":"aJ","pc":"ar","pv":"ar","pt":"af","pn":"bd","pg":"A","ph":"ag","pq":"bi","pp":"R","dV":{"ac":[]},"aR":{"l_":[]},"au":{"m":["1"],"h":["1"],"e":["1"],"t":["1"]},"dY":{"m":["1"],"h":["1"],"e":["1"],"t":["1"]},"bH":{"M":[],"V":[]},"cq":{"M":[],"j":[],"V":[]},"dW":{"M":[],"V":[]},"aQ":{"k":[],"t":["@"]},"cs":{"E":[]},"l":{"m":["j"],"h":["j"],"e":["j"],"q.E":"j"},"h":{"e":["1"]},"cw":{"h":["1"],"e":["1"]},"bg":{"e":["2"]},"cj":{"h":["2"],"e":["2"]},"cB":{"h":["2"],"e":["2"]},"bo":{"e":["1"]},"bU":{"m":["1"],"h":["1"],"e":["1"]},"cd":{"z":["1","2"]},"ce":{"z":["1","2"]},"cI":{"E":[]},"dZ":{"E":[]},"eS":{"E":[]},"bb":{"co":[]},"eF":{"co":[]},"ex":{"co":[]},"bw":{"co":[]},"ep":{"E":[]},"aj":{"z":["1","2"],"Q.V":"2"},"ct":{"h":["1"],"e":["1"]},"dX":{"l8":[]},"bM":{"u":["1"],"R":[],"t":["1"]},"bi":{"u":["M"],"m":["M"],"R":[],"h":["M"],"t":["M"],"e":["M"],"q.E":"M"},"cE":{"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"]},"e7":{"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"],"q.E":"j"},"e8":{"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"],"q.E":"j"},"e9":{"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"],"q.E":"j"},"ea":{"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"],"q.E":"j"},"eb":{"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"],"q.E":"j"},"cF":{"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"],"q.E":"j"},"bj":{"cR":[],"u":["j"],"m":["j"],"R":[],"h":["j"],"t":["j"],"e":["j"],"q.E":"j"},"fd":{"E":[]},"de":{"E":[]},"dd":{"iv":[]},"da":{"e":["1"]},"cZ":{"h":["1"],"e":["1"]},"cp":{"e":["1"]},"cv":{"m":["1"],"h":["1"],"e":["1"]},"cz":{"z":["1","2"]},"Q":{"z":["1","2"]},"cA":{"z":["1","2"]},"bV":{"z":["1","2"]},"d6":{"h":["1"],"e":["1"]},"M":{"V":[]},"j":{"V":[]},"m":{"h":["1"],"e":["1"]},"dy":{"E":[]},"eN":{"E":[]},"ec":{"E":[]},"aq":{"E":[]},"cL":{"E":[]},"dS":{"E":[]},"eU":{"E":[]},"eR":{"E":[]},"bS":{"E":[]},"dF":{"E":[]},"ef":{"E":[]},"cO":{"E":[]},"dH":{"E":[]},"bq":{"eV":[]},"fA":{"eV":[]},"f7":{"eV":[]},"w":{"n":[],"c":[]},"ae":{"b8":[]},"bf":{"f":[]},"af":{"f":[]},"n":{"c":[]},"am":{"c":[]},"an":{"c":[]},"aa":{"c":[]},"bl":{"f":[]},"aJ":{"f":[]},"aZ":{"af":[],"f":[]},"bZ":{"aH":[]},"p":{"w":[],"n":[],"c":[]},"dw":{"w":[],"n":[],"c":[]},"dx":{"w":[],"n":[],"c":[]},"bv":{"w":[],"n":[],"c":[]},"b9":{"w":[],"n":[],"c":[]},"ba":{"w":[],"n":[],"c":[]},"ar":{"n":[],"c":[]},"cg":{"w":[],"n":[],"c":[]},"ch":{"m":["a5<V>"],"u":["a5<V>"],"h":["a5<V>"],"e":["a5<V>"],"t":["a5<V>"],"q.E":"a5<V>"},"ci":{"a5":["V"]},"dK":{"m":["k"],"u":["k"],"h":["k"],"e":["k"],"t":["k"],"q.E":"k"},"f4":{"m":["w"],"h":["w"],"e":["w"],"q.E":"w"},"bB":{"m":["ae"],"u":["ae"],"h":["ae"],"e":["ae"],"t":["ae"],"q.E":"ae"},"dM":{"c":[]},"dO":{"w":[],"n":[],"c":[]},"bd":{"m":["n"],"u":["n"],"h":["n"],"e":["n"],"t":["n"],"q.E":"n"},"bD":{"w":[],"n":[],"c":[]},"bE":{"w":[],"n":[],"c":[]},"bJ":{"c":[]},"e4":{"z":["k","@"],"Q.V":"@"},"e5":{"z":["k","@"],"Q.V":"@"},"e6":{"m":["av"],"u":["av"],"h":["av"],"e":["av"],"t":["av"],"q.E":"av"},"a3":{"m":["n"],"h":["n"],"e":["n"],"q.E":"n"},"cG":{"m":["n"],"u":["n"],"h":["n"],"e":["n"],"t":["n"],"q.E":"n"},"ej":{"m":["aw"],"u":["aw"],"h":["aw"],"e":["aw"],"t":["aw"],"q.E":"aw"},"eo":{"z":["k","@"],"Q.V":"@"},"eq":{"w":[],"n":[],"c":[]},"et":{"m":["am"],"u":["am"],"c":[],"h":["am"],"e":["am"],"t":["am"],"q.E":"am"},"eu":{"m":["ax"],"u":["ax"],"h":["ax"],"e":["ax"],"t":["ax"],"q.E":"ax"},"ey":{"z":["k","k"],"Q.V":"k"},"aX":{"w":[],"n":[],"c":[]},"cP":{"w":[],"n":[],"c":[]},"eD":{"w":[],"n":[],"c":[]},"eE":{"w":[],"n":[],"c":[]},"bT":{"w":[],"n":[],"c":[]},"eG":{"m":["aa"],"u":["aa"],"h":["aa"],"e":["aa"],"t":["aa"],"q.E":"aa"},"eH":{"m":["an"],"u":["an"],"c":[],"h":["an"],"e":["an"],"t":["an"],"q.E":"an"},"eL":{"m":["az"],"u":["az"],"h":["az"],"e":["az"],"t":["az"],"q.E":"az"},"eZ":{"c":[]},"bX":{"c":[]},"bY":{"n":[],"c":[]},"f5":{"m":["A"],"u":["A"],"h":["A"],"e":["A"],"t":["A"],"q.E":"A"},"cX":{"a5":["V"]},"fj":{"m":["at?"],"u":["at?"],"h":["at?"],"e":["at?"],"t":["at?"],"q.E":"at?"},"d1":{"m":["n"],"u":["n"],"h":["n"],"e":["n"],"t":["n"],"q.E":"n"},"fD":{"m":["ay"],"u":["ay"],"h":["ay"],"e":["ay"],"t":["ay"],"q.E":"ay"},"fL":{"m":["ag"],"u":["ag"],"h":["ag"],"e":["ag"],"t":["ag"],"q.E":"ag"},"f2":{"z":["k","k"]},"fc":{"z":["k","k"],"Q.V":"k"},"cH":{"aH":[]},"d7":{"aH":[]},"fN":{"aH":[]},"fM":{"aH":[]},"df":{"be":[]},"dN":{"m":["w"],"h":["w"],"e":["w"],"q.E":"w"},"a5":{"fy":["1"]},"e0":{"m":["aS"],"h":["aS"],"e":["aS"],"q.E":"aS"},"ed":{"m":["aV"],"h":["aV"],"e":["aV"],"q.E":"aV"},"bQ":{"i":[],"w":[],"n":[],"c":[]},"eB":{"m":["k"],"h":["k"],"e":["k"],"q.E":"k"},"i":{"w":[],"n":[],"c":[]},"eM":{"m":["aY"],"h":["aY"],"e":["aY"],"q.E":"aY"},"dz":{"z":["k","@"],"Q.V":"@"},"dA":{"c":[]},"aN":{"c":[]},"ee":{"c":[]},"ev":{"m":["z<@,@>"],"h":["z<@,@>"],"e":["z<@,@>"],"q.E":"z<@,@>"},"by":{"e":["1"]},"bF":{"O":[]},"bG":{"O":[]},"C":{"O":[]},"cy":{"O":[]},"bK":{"O":[]},"bL":{"O":[]},"el":{"O":[]},"cQ":{"O":[]},"cc":{"a0":[]},"bC":{"a0":[],"e":["a0?"]},"cS":{"a0":[]},"cT":{"a0":[]},"cU":{"a0":[]},"dI":{"aE":[]},"dP":{"aE":[]},"dR":{"aE":[]},"ei":{"aE":[]},"dC":{"cM":[]},"cR":{"m":["j"],"h":["j"],"e":["j"]}}'))
H.nO(v.typeUniverse,JSON.parse('{"au":1,"dY":1,"a6":1,"h":1,"cw":1,"aT":1,"bg":2,"cj":2,"e2":2,"cB":2,"bo":1,"f0":1,"cm":1,"eT":1,"bU":1,"cd":2,"ct":1,"e1":1,"bM":1,"bp":1,"da":1,"ez":1,"eA":2,"d_":1,"cp":1,"cv":1,"q":1,"cz":2,"Q":2,"fW":2,"cA":2,"er":1,"d6":1,"d0":1,"di":2,"dk":1,"dE":2,"dG":2,"e":1,"m":1,"dU":1,"fe":1,"G":1,"cn":1,"by":1,"bF":1,"bG":1,"C":1}'))
var u={d:"Must initialize the shader prior to getting the program."}
var t=(function rtii(){var s=H.lX
return{y:s("bv"),d:s("b8"),t:s("b9"),E:s("ba"),b:s("cb"),U:s("h<@>"),h:s("w"),C:s("E"),B:s("f"),L:s("ae"),s:s("bB"),Y:s("co"),I:s("be"),R:s("bD"),r:s("bE"),u:s("au<@>"),e:s("t<@>"),T:s("cr"),m:s("l_"),g:s("aG"),p:s("u<@>"),J:s("aj<j,ac>"),j:s("m<@>"),D:s("cy"),f:s("z<@,@>"),F:s("bJ"),Z:s("bK"),O:s("bL"),o:s("cD"),c:s("R"),l:s("bj"),P:s("a8"),K:s("N"),q:s("a5<V>"),M:s("l8"),V:s("bQ"),v:s("cM"),N:s("k"),w:s("i"),a:s("aX"),W:s("bT"),ae:s("iv"),aR:s("eJ"),aM:s("cQ"),n:s("eO"),aw:s("eP"),G:s("eQ"),cr:s("bm"),Q:s("bV<k,k>"),k:s("eV"),x:s("bY"),cB:s("ac"),i:s("M"),z:s("@"),S:s("j"),A:s("0&*"),_:s("N*"),bc:s("kY<a8>?"),X:s("N?"),ba:s("bP?"),aJ:s("ew?"),aX:s("eK?"),H:s("V")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.b9.prototype
C.i=W.ba.prototype
C.P=W.cg.prototype
C.S=J.a.prototype
C.b=J.au.prototype
C.c=J.cq.prototype
C.T=J.cr.prototype
C.d=J.bH.prototype
C.a=J.aQ.prototype
C.U=J.aG.prototype
C.Z=H.bj.prototype
C.A=J.eh.prototype
C.a3=P.bP.prototype
C.B=W.cP.prototype
C.o=J.bm.prototype
C.C=W.aZ.prototype
C.D=W.bX.prototype
C.E=new E.bx("Browser.chrome")
C.q=new E.bx("Browser.firefox")
C.r=new E.bx("Browser.edge")
C.F=new E.bx("Browser.other")
C.a6=new P.hh()
C.G=new P.hg()
C.t=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.N=new P.ef()
C.e=new P.iY()
C.O=new P.j1()
C.f=new P.jg()
C.m=new P.bc(0)
C.Q=new P.bc(5e6)
C.R=new P.hJ("element",!1,!1,!1)
C.j=s([0,0,32776,33792,1,10240,0,0])
C.V=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.k=s([0,0,65490,45055,65535,34815,65534,18431])
C.l=s([0,0,26624,1023,65534,2047,65534,2047])
C.W=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.v=s([])
C.X=s([0,0,32722,12287,65534,34815,65534,18431])
C.w=s([0,0,65498,45055,65535,34815,65534,18431])
C.h=s([0,0,24576,1023,65534,34815,65534,18431])
C.x=s([0,0,32754,11263,65534,34815,65534,18431])
C.y=s([0,0,65490,12287,65535,34815,65534,18431])
C.z=s(["bind","if","ref","repeat","syntax"])
C.n=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.Y=new H.ce(0,{},C.v,H.lX("ce<k,k>"))
C.a_=new E.bN("OperatingSystem.windows")
C.a0=new E.bN("OperatingSystem.mac")
C.a1=new E.bN("OperatingSystem.linux")
C.a2=new E.bN("OperatingSystem.other")
C.a4=new P.iZ(!1)
C.a5=new P.c_(null,2)})();(function staticFields(){$.jd=null
$.aD=0
$.c8=null
$.kP=null
$.lY=null
$.lU=null
$.m2=null
$.jK=null
$.jT=null
$.kE=null
$.c1=null
$.dm=null
$.dn=null
$.kz=!1
$.aA=C.f
$.ab=[]
$.aO=null
$.ka=null
$.kV=null
$.kU=null
$.cY=P.bI(t.N,t.Y)
$.kX=null
$.l2=null
$.a9=null
$.l3=null
$.la=null
$.bn=null
$.lq=null
$.lp=null
$.lo=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pi","m8",function(){return H.oN("_$dart_dartClosure")})
s($,"pw","ma",function(){return H.aI(H.iC({
toString:function(){return"$receiver$"}}))})
s($,"px","mb",function(){return H.aI(H.iC({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"py","mc",function(){return H.aI(H.iC(null))})
s($,"pz","md",function(){return H.aI(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pC","mg",function(){return H.aI(H.iC(void 0))})
s($,"pD","mh",function(){return H.aI(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pB","mf",function(){return H.aI(H.li(null))})
s($,"pA","me",function(){return H.aI(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"pF","mj",function(){return H.aI(H.li(void 0))})
s($,"pE","mi",function(){return H.aI(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"pV","kJ",function(){return P.nq()})
s($,"pG","mk",function(){return new P.j0().$0()})
s($,"pH","ml",function(){return new P.j_().$0()})
s($,"pW","mp",function(){return new Int8Array(H.jF([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2]))})
s($,"pZ","mr",function(){return P.na("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qb","ms",function(){return P.o9()})
s($,"pX","mq",function(){return P.l1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"pO","mo",function(){return Z.ao(0)})
s($,"pI","mm",function(){return Z.ao(511)})
s($,"pQ","b5",function(){return Z.ao(1)})
s($,"pP","b4",function(){return Z.ao(2)})
s($,"pK","b3",function(){return Z.ao(4)})
s($,"pR","b6",function(){return Z.ao(8)})
s($,"pS","c6",function(){return Z.ao(16)})
s($,"pL","dt",function(){return Z.ao(32)})
s($,"pM","du",function(){return Z.ao(64)})
s($,"pN","mn",function(){return Z.ao(96)})
s($,"pT","b7",function(){return Z.ao(128)})
s($,"pJ","c5",function(){return Z.ao(256)})
s($,"pe","m7",function(){return new V.hz()})
r($,"pd","F",function(){return $.m7()})
r($,"ps","m9",function(){var q,p,o,n,m,l,k=$.l3
if(k==null)k=$.l3=V.mZ(0,0,0)
q=$.lp
if(q==null)q=$.lp=V.ln(0,1,0)
p=$.lo
o=(p==null?$.lo=V.ln(0,0,-1):p).U()
n=q.aV(o).U()
m=o.aV(n)
l=V.np(k)
return V.aU(n.a,m.a,o.a,n.aN(0).W(l),n.b,m.b,o.b,m.aN(0).W(l),n.c,m.c,o.c,o.aN(0).W(l),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cD,DataView:H.R,ArrayBufferView:H.R,Float32Array:H.bi,Float64Array:H.bi,Int16Array:H.e7,Int32Array:H.e8,Int8Array:H.e9,Uint16Array:H.ea,Uint32Array:H.eb,Uint8ClampedArray:H.cF,CanvasPixelArray:H.cF,Uint8Array:H.bj,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.ha,HTMLAnchorElement:W.dw,HTMLAreaElement:W.dx,HTMLBaseElement:W.bv,Blob:W.b8,HTMLBodyElement:W.b9,HTMLCanvasElement:W.ba,CanvasRenderingContext2D:W.cb,CDATASection:W.ar,CharacterData:W.ar,Comment:W.ar,ProcessingInstruction:W.ar,Text:W.ar,CSSPerspective:W.hn,CSSCharsetRule:W.A,CSSConditionRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.cf,MSStyleCSSProperties:W.cf,CSS2Properties:W.cf,CSSImageValue:W.ai,CSSKeywordValue:W.ai,CSSNumericValue:W.ai,CSSPositionValue:W.ai,CSSResourceValue:W.ai,CSSUnitValue:W.ai,CSSURLImageValue:W.ai,CSSStyleValue:W.ai,CSSMatrixComponent:W.aF,CSSRotation:W.aF,CSSScale:W.aF,CSSSkew:W.aF,CSSTranslation:W.aF,CSSTransformComponent:W.aF,CSSTransformValue:W.hp,CSSUnparsedValue:W.hq,DataTransferItemList:W.hr,HTMLDivElement:W.cg,DOMException:W.hs,ClientRectList:W.ch,DOMRectList:W.ch,DOMRectReadOnly:W.ci,DOMStringList:W.dK,DOMTokenList:W.ht,Element:W.w,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.ae,FileList:W.bB,FileWriter:W.dM,HTMLFormElement:W.dO,Gamepad:W.at,History:W.hH,HTMLCollection:W.bd,HTMLFormControlsCollection:W.bd,HTMLOptionsCollection:W.bd,ImageData:W.be,HTMLImageElement:W.bD,HTMLInputElement:W.bE,KeyboardEvent:W.bf,Location:W.hQ,MediaList:W.hT,MessagePort:W.bJ,MIDIInputMap:W.e4,MIDIOutputMap:W.e5,MimeType:W.av,MimeTypeArray:W.e6,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.n,DocumentFragment:W.n,HTMLDocument:W.n,ShadowRoot:W.n,XMLDocument:W.n,DocumentType:W.n,Node:W.n,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.aw,PluginArray:W.ej,RTCStatsReport:W.eo,HTMLSelectElement:W.eq,SourceBuffer:W.am,SourceBufferList:W.et,SpeechGrammar:W.ax,SpeechGrammarList:W.eu,SpeechRecognitionResult:W.ay,Storage:W.ey,CSSStyleSheet:W.ag,StyleSheet:W.ag,HTMLTableCellElement:W.aX,HTMLTableDataCellElement:W.aX,HTMLTableHeaderCellElement:W.aX,HTMLTableElement:W.cP,HTMLTableRowElement:W.eD,HTMLTableSectionElement:W.eE,HTMLTemplateElement:W.bT,TextTrack:W.an,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.eG,TextTrackList:W.eH,TimeRanges:W.iu,Touch:W.az,TouchEvent:W.bl,TouchList:W.eL,TrackDefaultList:W.iz,CompositionEvent:W.aJ,FocusEvent:W.aJ,TextEvent:W.aJ,UIEvent:W.aJ,URL:W.iX,VideoTrackList:W.eZ,WheelEvent:W.aZ,Window:W.bX,DOMWindow:W.bX,Attr:W.bY,CSSRuleList:W.f5,ClientRect:W.cX,DOMRect:W.cX,GamepadList:W.fj,NamedNodeMap:W.d1,MozNamedAttrMap:W.d1,SpeechRecognitionResultList:W.fD,StyleSheetList:W.fL,SVGLength:P.aS,SVGLengthList:P.e0,SVGNumber:P.aV,SVGNumberList:P.ed,SVGPointList:P.i_,SVGScriptElement:P.bQ,SVGStringList:P.eB,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aY,SVGTransformList:P.eM,AudioBuffer:P.he,AudioParamMap:P.dz,AudioTrackList:P.dA,AudioContext:P.aN,webkitAudioContext:P.aN,BaseAudioContext:P.aN,OfflineAudioContext:P.ee,WebGL2RenderingContext:P.bP,SQLResultSetRowList:P.ev})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.bi.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=T.oY
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
