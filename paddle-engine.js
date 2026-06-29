var Vo=Object.defineProperty;var yy=(e,t,r)=>t in e?Vo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ct=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Go=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}};var Hi=(e,t)=>{for(var r in t)Vo(e,r,{get:t[r],enumerable:!0})};var he=(e,t,r)=>yy(e,typeof t!="symbol"?t+"":t,r);var Ym={};Hi(Ym,{BLANK_INDEX:()=>Xm,MIN_CROP_WIDTH:()=>rr,UNK_TOKEN:()=>Zm,ctcGreedyDecode:()=>Qm,decodeResults:()=>qa});function Qm(e,t,r,i){let n=i.length,a=n-1,s="",o=-1,l=0,d=0;for(let c=0;c<t;c++){let f=c*r,y=e[f]??-1/0,_=0;for(let b=1;b<r;b++){let S=e[f+b]??-1/0;S>y&&(y=S,_=b)}if(_===Xm||_===o){o=_;continue}if(_>=0&&_<n){let b=i[_]??"";_===a?b!==Zm&&(s+=" ",l+=y,d++):(s+=b,l+=y,d++)}o=_}let h=d>0?l/d:0;return{text:s,confidence:h}}function qa(e,t,r,i=!1){let n=e.data,a=e.dims,s=a[1],o=a[2]??r;if(!t)return{text:"",confidence:0};let l=t;return t.length===o-1?l=["",...t]:o!==t.length&&i&&console.warn(`Warning: Model output classes (${o}) does not match dictionary length (${t.length}).
 Consider using our model & dictionary catalogue at https://github.com/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models.`),Qm(n,s,o,l)}var Xm,Zm,rr,zr=Go(()=>{Xm=0,Zm="<unk>",rr=8});var eg={};Hi(eg,{createImageTensor:()=>Jm,createImageTensorFromCanvas:()=>Ga,preprocessImage:()=>Va});async function Va(e,t,r,i){let n=e.width,a=e.height;if(a===0||n===0)throw new Error(`Crop dimensions are zero: ${n}x${a}`);let s=n/a,o=Math.max(rr,Math.round(t*s));if(r){let h=new r.ImageProcessor(e);try{return h.resize({width:o,height:t}),{imageTensor:Ga(h.toCanvas(),o,t),tensorWidth:o,tensorHeight:t}}finally{h.destroy()}}let l=i(e).resize({width:o,height:t});return{imageTensor:Jm(l,o,t),tensorWidth:o,tensorHeight:t}}function Jm(e,t,r){let i=e.toCanvas();return Ga(i,t,r)}function Ga(e,t,r){let a=e.getContext("2d").getImageData(0,0,t,r).data,s=r*t,o=new Float32Array(3*s),l=1/127.5;for(let d=0,h=0;d<s;d++,h+=4)o[d]=(a[h]??0)*l-1;return o.copyWithin(s,0,s),o.copyWithin(s*2,0,s),o}var Fa=Go(()=>{zr()});var re="https://media.githubusercontent.com/media/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models/main",Se="https://raw.githubusercontent.com/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models/main",ji={detection:`${re}/detection/ort/PP-OCRv6_small_det.ort`,recognition:`${re}/recognition/ort/PP-OCRv6_small_rec.ort`,charactersDictionary:`${Se}/recognition/ppocrv6_dict.txt`},Fo={detection:`${re}/detection/ort/PP-OCRv6_medium_det.ort`,recognition:`${re}/recognition/ort/PP-OCRv6_medium_rec.ort`,charactersDictionary:`${Se}/recognition/ppocrv6_dict.txt`},Ho={detection:`${re}/detection/ort/PP-OCRv6_tiny_det.ort`,recognition:`${re}/recognition/ort/PP-OCRv6_tiny_rec.ort`,charactersDictionary:`${Se}/recognition/ppocrv6_tiny_dict.txt`},jo={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.ort`,recognition:`${re}/recognition/multi/en/v5/en_PP-OCRv5_mobile_rec_infer.ort`,charactersDictionary:`${Se}/recognition/multi/en/v5/ppocrv5_en_dict.txt`},Ko={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.ort`,recognition:`${re}/recognition/multi/en/v5/en_PP-OCRv5_mobile_rec_infer_int8.ort`,charactersDictionary:`${Se}/recognition/multi/en/v5/ppocrv5_en_dict.txt`},Xo={detection:`${re}/detection/PP-OCRv5_server_det_infer.onnx`,recognition:`${re}/recognition/PP-OCRv5_server_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/ppocrv5_dict.txt`},Zo={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/ppocrv5_dict.txt`},Qo={detection:`${re}/detection/PP-OCRv5_server_det_infer.onnx`,recognition:`${re}/recognition/PP-OCRv5_server_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/ppocrv5_dict.txt`},Yo={detection:`${re}/detection/PP-OCRv4_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/en/v4/en_PP-OCRv4_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/en/v4/en_dict.txt`},Jo={detection:`${re}/detection/PP-OCRv4_mobile_det_infer.onnx`,recognition:`${re}/recognition/PP-OCRv4_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/ppocrv4_dict.txt`},eu={detection:`${re}/detection/PP-OCRv4_server_det_infer.onnx`,recognition:`${re}/recognition/PP-OCRv4_server_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/ppocrv4_dict.txt`},tu={detection:`${re}/detection/PP-OCRv4_server_det_infer.onnx`,recognition:`${re}/recognition/PP-OCRv4_server_rec_doc_infer.onnx`,charactersDictionary:`${Se}/recognition/ppocrv4_doc_dict.txt`},ru={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/PP-OCRv3_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/ppocrv3_dict.txt`},iu={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/japan/v3/japan_PP-OCRv3_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/japan/v3/japan_dict.txt`},nu={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/arabic/v5/arabic_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/arabic/v5/ppocrv5_arabic_dict.txt`},au={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/cyrillic/v5/cyrillic_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/cyrillic/v5/ppocrv5_cyrillic_dict.txt`},su={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/devanagari/v5/devanagari_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/devanagari/v5/ppocrv5_devanagari_dict.txt`},ou={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/el/v5/el_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/el/v5/ppocrv5_el_dict.txt`},uu={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/eslav/v5/eslav_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/eslav/v5/ppocrv5_eslav_dict.txt`},lu={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/korean/v5/korean_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/korean/v5/ppocrv5_korean_dict.txt`},du={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/latin/v5/latin_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/latin/v5/ppocrv5_latin_dict.txt`},pu={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/ta/v5/ta_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/ta/v5/ppocrv5_ta_dict.txt`},cu={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/te/v5/te_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/te/v5/ppocrv5_te_dict.txt`},hu={detection:`${re}/detection/PP-OCRv5_mobile_det_infer.onnx`,recognition:`${re}/recognition/multi/th/v5/th_PP-OCRv5_mobile_rec_infer.onnx`,charactersDictionary:`${Se}/recognition/multi/th/v5/ppocrv5_th_dict.txt`},fu=ji,gt=fu,Ki={"v6-small":ji,"v6-medium":Fo,"v6-tiny":Ho,"v5-en-mobile":jo,"v5-en-mobile-int8":Ko,"v5-en-server":Xo,"v5-mobile":Zo,"v5-server":Qo,"v5-arabic-mobile":nu,"v5-cyrillic-mobile":au,"v5-devanagari-mobile":su,"v5-greek-mobile":ou,"v5-eslav-mobile":uu,"v5-korean-mobile":lu,"v5-latin-mobile":du,"v5-tamil-mobile":pu,"v5-telugu-mobile":cu,"v5-thai-mobile":hu,"v4-en-mobile":Yo,"v4-mobile":Jo,"v4-server":eu,"v4-server-doc":tu,"v3-mobile":ru,"v3-japanese-mobile":iu};var Tr={};Hi(Tr,{InferenceSession:()=>da,TRACE:()=>Sr,TRACE_EVENT_BEGIN:()=>wt,TRACE_EVENT_END:()=>$t,TRACE_FUNC_BEGIN:()=>et,TRACE_FUNC_END:()=>Ge,Tensor:()=>Je,default:()=>P0,env:()=>ye,registerBackend:()=>Pt});var ua=Object.defineProperty,by=Object.getOwnPropertyDescriptor,wy=Object.getOwnPropertyNames,$y=Object.prototype.hasOwnProperty,vy=(e=>typeof Ct<"u"?Ct:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof Ct<"u"?Ct:t)[r]}):e)(function(e){if(typeof Ct<"u")return Ct.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),Qt=(e,t)=>{for(var r in t)ua(e,r,{get:t[r],enumerable:!0})},xy=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of wy(t))!$y.call(e,n)&&n!==r&&ua(e,n,{get:()=>t[n],enumerable:!(i=by(t,n))||i.enumerable});return e},xr=e=>xy(ua({},"__esModule",{value:!0}),e),ur,_t,Pt,mu,Kp,Xp=L(()=>{"use strict";ur=new Map,_t=[],Pt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=ur.get(e);if(i===void 0)ur.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=_t.indexOf(e);n!==-1&&_t.splice(n,1);for(let a=0;a<_t.length;a++)if(ur.get(_t[a]).priority<=r){_t.splice(a,0,e);return}_t.push(e)}return}throw new TypeError("not a valid backend")},mu=async e=>{let t=ur.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Kp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?_t:r,n,a=[],s=new Set;for(let l of i){let d=await mu(l);typeof d=="string"?a.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Sy=L(()=>{"use strict";Xp()}),Zp,Ey=L(()=>{"use strict";Zp="1.26.0"}),Xi,Ae,Qp=L(()=>{"use strict";Ey(),Xi="warning",Ae={wasm:{},webgl:{},webgpu:{},versions:{common:Zp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Xi=e}},get logLevel(){return Xi}},Object.defineProperty(Ae,"logLevel",{enumerable:!0})}),ye,Ty=L(()=>{"use strict";Qp(),ye=Ae}),Yp,Jp,Iy=L(()=>{"use strict";Yp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let h=a*n,c=0,f=h,y=h*2,_=-1;s==="RGBA"?(c=0,f=h,y=h*2,_=h*3):s==="RGB"?(c=0,f=h,y=h*2):s==="RBG"&&(c=0,y=h,f=h*2);for(let b=0;b<a;b++)for(let S=0;S<n;S++){let x=(e.data[c++]-d[0])*l[0],w=(e.data[f++]-d[1])*l[1],T=(e.data[y++]-d[2])*l[2],E=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+x+","+w+","+T+","+E+")",i.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Jp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,h;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let c=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,y=0,_=1,b=2,S=3,x=0,w=c,T=c*2,E=-1;o==="RGBA"?(x=0,w=c,T=c*2,E=c*3):o==="RGB"?(x=0,w=c,T=c*2):o==="RBG"&&(x=0,T=c,w=c*2),i=r.createImageData(n,a);for(let k=0;k<a*n;y+=f,_+=f,b+=f,S+=f,k++)i.data[y]=(e.data[x++]-h[0])*d[0],i.data[_]=(e.data[w++]-h[1])*d[1],i.data[b]=(e.data[T++]-h[2])*d[2],i.data[S]=E===-1?255:(e.data[E++]-h[3])*d[3]}else throw new Error("Can not access image data");return i}}),Fr,ec,tc,rc,ic,nc,ky=L(()=>{"use strict";la(),Fr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,h=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),c=4,f=0,y=1,_=2,b=3,S=0,x=d,w=d*2,T=-1;o==="RGB"&&(c=3,f=0,y=1,_=2,b=-1),l==="RGBA"?T=d*3:l==="RBG"?(S=0,w=d,x=d*2):l==="BGR"&&(w=0,x=d,S=d*2);for(let E=0;E<d;E++,f+=c,_+=c,y+=c,b+=c)h[S++]=(e[f]+s[0])/a[0],h[x++]=(e[y]+s[1])/a[1],h[w++]=(e[_]+s[2])/a[2],T!==-1&&b!==-1&&(h[T++]=(e[b]+s[3])/a[3]);return l==="RGBA"?new Le("float32",h,[1,4,r,i]):new Le("float32",h,[1,3,r,i])},ec=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let f=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=y}else o.tensorFormat="RGBA",o.height=f,o.width=y;c.drawImage(e,0,0),s=c.getImageData(0,0,y,f).data}else throw new Error("Can not access image data")}else if(i){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=c,t!==void 0){let f=l();f.width=c,f.height=h;let y=d(f);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let f=e.height,y=e.width;return c.drawImage(e,0,0,y,f),s=c.getImageData(0,0,y,f).data,o.height=f,o.width=y,Fr(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let f=l(),y=d(f);if(!e||!y)return c();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{f.width=_.width,f.height=_.height,y.drawImage(_,0,0,f.width,f.height);let b=y.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,h(Fr(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Fr(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},tc=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new Le({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},rc=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Le({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},ic=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Le({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},nc=(e,t,r)=>new Le({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Mt,yr,Zi,ac,Cy=L(()=>{"use strict";Mt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),yr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Zi=!1,ac=()=>{if(!Zi){Zi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Mt.set("int64",BigInt64Array),yr.set(BigInt64Array,"int64")),t&&(Mt.set("uint64",BigUint64Array),yr.set(BigUint64Array,"uint64")),i?(Mt.set("float16",r),yr.set(r,"float16")):Mt.set("float16",Uint16Array)}}}),sc,oc,zy=L(()=>{"use strict";la(),sc=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},oc=(e,t)=>{switch(e.location){case"cpu":return new Le(e.type,e.data,t);case"cpu-pinned":return new Le({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Le({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Le({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Le({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Le,la=L(()=>{"use strict";Iy(),ky(),Cy(),zy(),Le=class{constructor(e,t,r){ac();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=Mt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Mt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=yr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=sc(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return ec(e,t)}static fromTexture(e,t){return tc(e,t)}static fromGpuBuffer(e,t){return rc(e,t)}static fromMLTensor(e,t){return ic(e,t)}static fromPinnedBuffer(e,t,r){return nc(e,t,r)}toDataURL(e){return Yp(this,e)}toImageData(e){return Jp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return oc(this,e)}}}),Je,uc=L(()=>{"use strict";la(),Je=Le}),Sr,Qi,et,Ge,wt,$t,lc=L(()=>{"use strict";Qp(),Sr=(e,t)=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.timeStamp(`${e}::ORT::${t}`)},Qi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Sr("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},et=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||Qi("BEGIN",e)},Ge=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||Qi("END",e)},wt=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.time(`ORT::${e}`)},$t=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.timeEnd(`ORT::${e}`)}}),dc,Oy=L(()=>{"use strict";Xp(),uc(),lc(),dc=class pc{constructor(t){this.handler=t}async run(t,r,i){et(),wt("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof Je||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Je)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(r);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let f=r[c];(f===null||f instanceof Je)&&(d=!0,s=!1,n[c]=f)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,a),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let h=o[d];h instanceof Je?l[d]=h:l[d]=new Je(h.type,h.data,h.dims)}return $t("InferenceSession.run"),Ge(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){et(),wt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,f=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(f=t.byteLength-c,typeof i=="number"){if(f=i,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||c+f>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await Kp(s),d=await o.createInferenceSessionHandler(a,l);return $t("InferenceSession.create"),Ge(),new pc(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),da,Ay=L(()=>{"use strict";Oy(),da=dc}),Ry=L(()=>{"use strict"}),Dy=L(()=>{"use strict"}),My=L(()=>{"use strict"}),By=L(()=>{"use strict"}),cc={};Qt(cc,{InferenceSession:()=>da,TRACE:()=>Sr,TRACE_EVENT_BEGIN:()=>wt,TRACE_EVENT_END:()=>$t,TRACE_FUNC_BEGIN:()=>et,TRACE_FUNC_END:()=>Ge,Tensor:()=>Je,env:()=>ye,registerBackend:()=>Pt});var Fe=L(()=>{"use strict";Sy(),Ty(),Ay(),uc(),Ry(),Dy(),lc(),My(),By()}),pa=L(()=>{"use strict"}),hc={};Qt(hc,{default:()=>fc});var Yi,Ji,fc,Ny=L(()=>{"use strict";wm(),qt(),ca(),Yi="ort-wasm-proxy-worker",Ji=globalThis.self?.name===Yi,Ji&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":ha(r.wasm).then(()=>{za(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;Oa(n,i).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:i}=r,n=ci(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;Aa(i,n).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":Ra(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:a,outputIndices:s,options:o}=r;Da(i,n,a,s,new Array(s.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Ba([...a,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Ma(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),fc=Ji?null:e=>new Worker(e??Pe,{type:"module",name:Yi})}),mc={};Qt(mc,{default:()=>gc});async function gu(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(u,p)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Xc||(t.Xc=new Map)).set(u,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=u=>async(...p)=>{try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:p[0],errors:[]},m=await u(...p);if(t.Yc!==g)throw Error("Session mismatch");t.dd?.flush();let v=g.errors;if(0<v.length){let I=await Promise.all(v);if(I=I.filter(O=>O),0<I.length)throw Error(I.join(`
`))}return m}finally{t.Yc=null}};t.jsepInit=(u,p)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let g=t.dd;t.jsepRegisterBuffer=(m,v,I,O)=>g.registerBuffer(m,v,I,O),t.jsepGetBuffer=m=>g.getBuffer(m),t.jsepCreateDownloader=(m,v,I)=>g.createDownloader(m,v,I),t.jsepOnCreateSession=m=>{g.onCreateSession(m)},t.jsepOnReleaseSession=m=>{g.onReleaseSession(m)},t.jsepOnRunStart=m=>g.onRunStart(m),t.Id=(m,v)=>{g.upload(m,v)}}else if(u==="webnn"){let g=p[0];[t.Wd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=m=>g.onRunStart(m),t.webnnOnRunEnd=g.onRunEnd.bind(g),t.webnnOnReleaseSession=m=>{g.onReleaseSession(m)},t.webnnCreateMLTensorDownloader=(m,v)=>g.createMLTensorDownloader(m,v),t.webnnRegisterMLTensor=(m,v,I,O)=>g.registerMLTensor(m,v,I,O),t.webnnCreateMLContext=m=>g.createMLContext(m),t.webnnRegisterMLConstant=(m,v,I,O,D,q)=>g.registerMLConstant(m,v,I,O,D,t.Xc,q),t.webnnRegisterGraphInput=g.registerGraphInput.bind(g),t.webnnIsGraphInput=g.isGraphInput.bind(g),t.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),t.webnnIsGraphOutput=g.isGraphOutput.bind(g),t.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),t.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let s=()=>{let u=p=>(...g)=>{let m=rt;return g=p(...g),rt!=m?new Promise((v,I)=>{Ri={resolve:v,reject:I}}):g};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=u(t[p])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var o,l,d=(u,p)=>{throw p},h=import.meta.url,c="";if(r||i){try{c=new URL(".",h).href}catch{}i&&(l=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async u=>{if(z(u))return new Promise((g,m)=>{var v=new XMLHttpRequest;v.open("GET",u,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?g(v.response):m(v.status)},v.onerror=m,v.send(null)});var p=await fetch(u,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var f,y,_,b,S,x,w=console.log.bind(console),T=console.error.bind(console),E=w,k=T,C=!1,z=u=>u.startsWith("file://");function $(){ct.buffer!=V.buffer&&X()}if(n){let u=function(p){try{var g=p.data,m=g.Sc;if(m==="load"){let v=[];self.onmessage=I=>v.push(I),x=()=>{postMessage({Sc:"loaded"});for(let I of v)u(I);self.onmessage=u};for(let I of g.xd)t[I]&&!t[I].proxy||(t[I]=(...O)=>{postMessage({Sc:"callHandler",wd:I,args:O})},I=="print"&&(E=t[I]),I=="printErr"&&(k=t[I]));ct=g.Od,X(),y=g.Pd,Ee(),Gr()}else if(m==="run"){(function(v){var I=($(),U)[v+52>>>2>>>0];v=($(),U)[v+56>>>2>>>0],Ys(I,I-v),ue(I)})(g.Rc),Pi(g.Rc,0,0,1,0,0),Ja(),zi(g.Rc),N||(Hs(),N=!0);try{ug(g.Md,g.bd)}catch(v){if(v!="unwind")throw v}}else g.target!=="setimmediate"&&(m==="checkMailbox"?N&&Nr():m&&(k(`worker: received unknown command ${m}`),k(g)))}catch(v){throw js(),v}};var B=u,N=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=u}var V,W,F,ne,A,U,J,te,Q,se,P,Y=!1;function X(){var u=ct.buffer;t.HEAP8=V=new Int8Array(u),F=new Int16Array(u),t.HEAPU8=W=new Uint8Array(u),ne=new Uint16Array(u),t.HEAP32=A=new Int32Array(u),t.HEAPU32=U=new Uint32Array(u),J=new Float32Array(u),te=new Float64Array(u),Q=new BigInt64Array(u),se=new BigUint64Array(u)}function H(){Y=!0,n?x():st.sb()}function ve(u){throw k(u="Aborted("+u+")"),C=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),S?.(u),u}function De(){return{a:{ma:R_,gb:A_,g:lg,J:dg,f:pg,o:cg,h:hg,ha:fg,b:mg,T:gg,Ha:as,n:_g,$:ls,Xa:ds,Da:ps,Fa:cs,Ya:hs,Va:fs,Oa:ms,Ua:gs,ka:_s,Ea:ys,Ba:bs,Wa:ws,Ca:$s,bb:yg,ea:wg,wa:$g,ua:xg,da:Eg,O:Tg,H:Ig,va:kg,_:Mg,xa:Bg,Ra:Ng,za:Lg,Ia:Ug,sa:Wg,fa:qg,Qa:zi,_a:Vg,R:jg,r:Yg,c:ki,hb:Jg,y:e_,M:t_,D:r_,l:i_,s:Cs,ib:n_,I:a_,S:s_,j:o_,u:u_,q:l_,k:d_,La:p_,Ma:c_,Na:h_,Ja:Rs,Ka:Ds,ta:Ms,db:m_,ab:y_,v:b_,aa:w_,ga:$_,$a:g_,W:v_,Za:x_,Aa:S_,F:f_,U:E_,la:qr,ya:I_,fb:T_,eb:k_,Sa:Ls,Ta:Us,Ga:xi,V:Ws,ja:qs,Pa:Vs,ia:Gs,kb:my,na:dy,lb:fy,oa:ly,G:ey,d:N_,t:M_,w:D_,A:j_,mb:sy,K:Q_,x:U_,pa:oy,Y:py,ba:ay,nb:ny,ob:iy,P:K_,qa:ry,pb:ty,N:Y_,Z:uy,e:B_,B:L_,m:P_,jb:gy,p:q_,z:V_,C:W_,E:G_,L:X_,qb:J_,Q:cy,ca:Z_,X:hy,rb:H_,ra:F_,i:z_,a:ct,cb:vi}}}async function Ee(){function u(m,v){var I=st=m.exports;m={};for(let[O,D]of Object.entries(I))typeof D=="function"?(I=Gg(D),m[O]=I):m[O]=D;return st=m,st=(function(){var O=st,D=G=>oe=>G(oe)>>>0,q=G=>()=>G()>>>0;return(O=Object.assign({},O)).tb=D(O.tb),O.Xb=q(O.Xb),O.Zb=D(O.Zb),O.lc=D(O.lc),O.mc=q(O.mc),O.qc=D(O.qc),O})(),Qa.push(st._b),Fs=(m=st).tb,Hs=m.ub,t._OrtInit=m.vb,t._OrtGetLastError=m.wb,t._OrtCreateSessionOptions=m.xb,t._OrtAppendExecutionProvider=m.yb,t._OrtAddFreeDimensionOverride=m.zb,t._OrtAddSessionConfigEntry=m.Ab,t._OrtReleaseSessionOptions=m.Bb,t._OrtCreateSession=m.Cb,t._OrtReleaseSession=m.Db,t._OrtGetInputOutputCount=m.Eb,t._OrtGetInputOutputMetadata=m.Fb,t._OrtFree=m.Gb,t._OrtCreateTensor=m.Hb,t._OrtGetTensorData=m.Ib,t._OrtReleaseTensor=m.Jb,t._OrtCreateRunOptions=m.Kb,t._OrtAddRunConfigEntry=m.Lb,t._OrtReleaseRunOptions=m.Mb,t._OrtCreateBinding=m.Nb,t._OrtBindInput=m.Ob,t._OrtBindOutput=m.Pb,t._OrtClearBoundOutputs=m.Qb,t._OrtReleaseBinding=m.Rb,t._OrtRunWithBinding=m.Sb,t._OrtRun=m.Tb,t._OrtEndProfiling=m.Ub,t._JsepOutput=m.Vb,t._JsepGetNodeName=m.Wb,Vr=m.Xb,it=t._free=m.Yb,sr=t._malloc=m.Zb,Pi=m.ac,js=m.bc,Ks=m.cc,Xs=m.dc,Li=m.ec,Zs=m.fc,Qs=m.gc,de=m.hc,or=m.ic,Ys=m.jc,ue=m.kc,Ui=m.lc,le=m.mc,Js=m.nc,Wi=m.oc,eo=m.pc,to=m.qc,ro=m.rc,qi=m.sc,io=m.tc,no=m.uc,ao=m.vc,so=m.wc,oo=m.xc,uo=m.yc,lo=m.zc,po=m.Ac,co=m.Bc,ho=m.Cc,fo=m.Dc,mo=m.Ec,go=m.Fc,_o=m.Gc,yo=m.Hc,bo=m.Ic,wo=m.Jc,$o=m.Kc,vo=m.Lc,xo=m.Mc,So=m.Nc,Eo=m.Pc,To=m.Qc,Io=m.$c,ko=m.ad,Co=m.fd,zo=m.jd,Oo=m.kd,Ao=m.ld,Ro=m.md,Do=m.nd,Mo=m.od,Bo=m.pd,No=m.qd,Po=m.vd,Lo=m.Sd,Uo=m.Td,Wo=m.Ud,qo=m.Vd,y=v,st}var p,g=De();return t.instantiateWasm?new Promise(m=>{t.instantiateWasm(g,(v,I)=>{m(u(v,I))})}):n?u(new WebAssembly.Instance(y,De()),y):(P??(P=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href),p=await(async function(m){var v=P;if(!f&&!z(v))try{var I=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,m)}catch(O){k(`wasm streaming compile failed: ${O}`),k("falling back to ArrayBuffer instantiation")}return(async function(O,D){try{var q=await(async function(G){if(!f)try{var oe=await o(G);return new Uint8Array(oe)}catch{}if(G==P&&f)G=new Uint8Array(f);else{if(!l)throw"both async and sync fetching of the wasm failed";G=l(G)}return G})(O);return await WebAssembly.instantiate(q,D)}catch(G){k(`failed to asynchronously prepare wasm: ${G}`),ve(G)}})(v,m)})(g),u(p.instance,p.module))}class Oe{constructor(p){he(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var _e=u=>{u.terminate(),u.onmessage=()=>{}},Te=[],Ne=0,Et=null,Ar=u=>{pt.length==0&&(ts(),es(pt[0]));var p=pt.pop();if(!p)return 6;nr.push(p),Tt[u.Rc]=p,p.Rc=u.Rc;var g={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return p.postMessage(g,u.rd),0},dt=0,xe=(u,p,...g)=>{var m,v=16*g.length,I=le(),O=Ui(v),D=O>>>3;for(m of g)typeof m=="bigint"?(($(),Q)[D++>>>0]=1n,($(),Q)[D++>>>0]=m):(($(),Q)[D++>>>0]=0n,($(),te)[D++>>>0]=m);return u=Ks(u,0,v,O,p),ue(I),u};function vi(u){if(n)return xe(0,1,u);if(_=u,!(0<dt)){for(var p of nr)_e(p);for(p of pt)_e(p);pt=[],nr=[],Tt={},C=!0}d(0,new Oe(u))}function Za(u){if(n)return xe(1,0,u);xi(u)}var xi=u=>{if(_=u,n)throw Za(u),"unwind";vi(u)},pt=[],nr=[],Qa=[],Tt={},Ya=u=>{var p=u.Rc;delete Tt[p],pt.push(u),nr.splice(nr.indexOf(u),1),u.Rc=0,Xs(p)};function Ja(){Qa.forEach(u=>u())}var es=u=>new Promise(p=>{u.onmessage=v=>{var I=v.data;if(v=I.Sc,I.Zc&&I.Zc!=Vr()){var O=Tt[I.Zc];O?O.postMessage(I,I.rd):k(`Internal error! Worker sent a message "${v}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else v==="checkMailbox"?Nr():v==="spawnThread"?Ar(I):v==="cleanupThread"?Br(()=>{Ya(Tt[I.Nd])}):v==="loaded"?(u.loaded=!0,p(u)):I.target==="setimmediate"?u.postMessage(I):v==="uncaughtException"?u.onerror(I.error):v==="callHandler"?t[I.wd](...I.args):v&&k(`worker sent an unknown command ${v}`)},u.onerror=v=>{throw k(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var g,m=[];for(g of[])t.propertyIsEnumerable(g)&&m.push(g);u.postMessage({Sc:"load",xd:m,Od:ct,Pd:y})});function ts(){var u=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});pt.push(u)}var ct,ug=(u,p)=>{dt=0,u=qi(u,p),0<dt?_=u:Li(u)},Rr=[],Dr=0;function lg(u){var p=new Si(u>>>=0);return($(),V)[p.Tc+12>>>0]==0&&(rs(p,!0),Dr--),is(p,!1),Rr.push(p),to(u)}var Ft=0,dg=()=>{de(0,0);var u=Rr.pop();Js(u.cd),Ft=0};function rs(u,p){p=p?1:0,($(),V)[u.Tc+12>>>0]=p}function is(u,p){p=p?1:0,($(),V)[u.Tc+13>>>0]=p}class Si{constructor(p){this.cd=p,this.Tc=p-24}}var Ei=u=>{var p=Ft;if(!p)return or(0),0;var g=new Si(p);($(),U)[g.Tc+16>>>2>>>0]=p;var m=($(),U)[g.Tc+4>>>2>>>0];if(!m)return or(0),p;for(var v of u){if(v===0||v===m)break;if(eo(v,m,g.Tc+16))return or(v),p}return or(m),p};function pg(){return Ei([])}function cg(u){return Ei([u>>>0])}function hg(u,p,g,m){return Ei([u>>>0,p>>>0,g>>>0,m>>>0])}var fg=()=>{var u=Rr.pop();u||ve("no exception to throw");var p=u.cd;throw($(),V)[u.Tc+13>>>0]==0&&(Rr.push(u),is(u,!0),rs(u,!1),Dr++),Wi(p),Ft=p};function mg(u,p,g){var m=new Si(u>>>=0);throw p>>>=0,g>>>=0,($(),U)[m.Tc+16>>>2>>>0]=0,($(),U)[m.Tc+4>>>2>>>0]=p,($(),U)[m.Tc+8>>>2>>>0]=g,Wi(u),Dr++,Ft=u}var gg=()=>Dr;function ns(u,p,g,m){return n?xe(2,1,u,p,g,m):as(u,p,g,m)}function as(u,p,g,m){if(u>>>=0,p>>>=0,g>>>=0,m>>>=0,!globalThis.SharedArrayBuffer)return 6;var v=[];return n&&v.length===0?ns(u,p,g,m):(u={Ld:g,Rc:u,bd:m,rd:v},n?(u.Sc="spawnThread",postMessage(u,v),0):Ar(u))}function _g(u){throw Ft||(Ft=u>>>0),Ft}var ss=globalThis.TextDecoder&&new TextDecoder,os=(u,p,g,m)=>{if(g=p+g,m)return g;for(;u[p]&&!(p>=g);)++p;return p},us=(u,p=0,g,m)=>{if(16<(g=os(u,p>>>=0,g,m))-p&&u.buffer&&ss)return ss.decode(u.buffer instanceof ArrayBuffer?u.subarray(p,g):u.slice(p,g));for(m="";p<g;){var v=u[p++];if(128&v){var I=63&u[p++];if((224&v)==192)m+=String.fromCharCode((31&v)<<6|I);else{var O=63&u[p++];65536>(v=(240&v)==224?(15&v)<<12|I<<6|O:(7&v)<<18|I<<12|O<<6|63&u[p++])?m+=String.fromCharCode(v):(v-=65536,m+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else m+=String.fromCharCode(v)}return m},Ce=(u,p,g)=>(u>>>=0)?us(($(),W),u,p,g):"";function ls(u,p,g){return n?xe(3,1,u,p,g):0}function ds(u,p){if(n)return xe(4,1,u,p)}function ps(u,p){if(n)return xe(5,1,u,p)}function cs(u,p,g){if(n)return xe(6,1,u,p,g)}function hs(u,p,g){return n?xe(7,1,u,p,g):0}function fs(u,p){if(n)return xe(8,1,u,p)}function ms(u,p,g){if(n)return xe(9,1,u,p,g)}function gs(u,p,g,m){if(n)return xe(10,1,u,p,g,m)}function _s(u,p,g,m){if(n)return xe(11,1,u,p,g,m)}function ys(u,p,g,m){if(n)return xe(12,1,u,p,g,m)}function bs(u){if(n)return xe(13,1,u)}function ws(u,p){if(n)return xe(14,1,u,p)}function $s(u,p,g){if(n)return xe(15,1,u,p,g)}var yg=()=>ve(""),tt=u=>{u>>>=0;for(var p="";;){var g=($(),W)[u++>>>0];if(!g)return p;p+=String.fromCharCode(g)}},Ti={},Ii={},bg={},Ht=class extends Error{constructor(u){super(u),this.name="BindingError"}};function at(u,p,g={}){return(function(m,v,I={}){var O=v.name;if(!m)throw new Ht(`type "${O}" must have a positive integer typeid pointer`);if(Ii.hasOwnProperty(m)){if(I.yd)return;throw new Ht(`Cannot register type '${O}' twice`)}Ii[m]=v,delete bg[m],Ti.hasOwnProperty(m)&&(v=Ti[m],delete Ti[m],v.forEach(D=>D()))})(u,p,g)}var vs=(u,p,g)=>{switch(p){case 1:return g?m=>($(),V)[m>>>0]:m=>($(),W)[m>>>0];case 2:return g?m=>($(),F)[m>>>1>>>0]:m=>($(),ne)[m>>>1>>>0];case 4:return g?m=>($(),A)[m>>>2>>>0]:m=>($(),U)[m>>>2>>>0];case 8:return g?m=>($(),Q)[m>>>3>>>0]:m=>($(),se)[m>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${u}`)}};function wg(u,p,g,m,v){u>>>=0,g>>>=0,p=tt(p>>>0);let I=O=>O;if(m=m===0n){let O=8*g;I=D=>BigInt.asUintN(O,D),v=I(v)}at(u,{name:p,Oc:I,Vc:(O,D)=>(typeof D=="number"&&(D=BigInt(D)),D),Uc:vs(p,g,!m),Wc:null})}function $g(u,p,g,m){at(u>>>=0,{name:p=tt(p>>>0),Oc:function(v){return!!v},Vc:function(v,I){return I?g:m},Uc:function(v){return this.Oc(($(),W)[v>>>0])},Wc:null})}var xs=[],It=[0,1,,1,null,1,!0,1,!1,1];function ki(u){9<(u>>>=0)&&--It[u+1]==0&&(It[u]=void 0,xs.push(u))}var qe=u=>{if(!u)throw new Ht(`Cannot use deleted val. handle = ${u}`);return It[u]},He=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=xs.pop()||It.length;return It[p]=u,It[p+1]=1,p}};function Ci(u){return this.Oc(($(),U)[u>>>2>>>0])}var vg={name:"emscripten::val",Oc:u=>{var p=qe(u);return ki(u),p},Vc:(u,p)=>He(p),Uc:Ci,Wc:null};function xg(u){return at(u>>>0,vg)}var Sg=(u,p)=>{switch(p){case 4:return function(g){return this.Oc(($(),J)[g>>>2>>>0])};case 8:return function(g){return this.Oc(($(),te)[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${u}`)}};function Eg(u,p,g){g>>>=0,at(u>>>=0,{name:p=tt(p>>>0),Oc:m=>m,Vc:(m,v)=>v,Uc:Sg(p,g),Wc:null})}function Tg(u,p,g,m,v){u>>>=0,g>>>=0,p=tt(p>>>0);let I=D=>D;if(m===0){var O=32-8*g;I=D=>D<<O>>>O,v=I(v)}at(u,{name:p,Oc:I,Vc:(D,q)=>q,Uc:vs(p,g,m!==0),Wc:null})}function Ig(u,p,g){function m(I){var O=($(),U)[I>>>2>>>0];return I=($(),U)[I+4>>>2>>>0],new v(($(),V).buffer,I,O)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];at(u>>>=0,{name:g=tt(g>>>0),Oc:m,Uc:m},{yd:!0})}var ht=(u,p,g)=>{var m=($(),W);if(p>>>=0,0<g){var v=p;g=p+g-1;for(var I=0;I<u.length;++I){var O=u.codePointAt(I);if(127>=O){if(p>=g)break;m[p++>>>0]=O}else if(2047>=O){if(p+1>=g)break;m[p++>>>0]=192|O>>6,m[p++>>>0]=128|63&O}else if(65535>=O){if(p+2>=g)break;m[p++>>>0]=224|O>>12,m[p++>>>0]=128|O>>6&63,m[p++>>>0]=128|63&O}else{if(p+3>=g)break;m[p++>>>0]=240|O>>18,m[p++>>>0]=128|O>>12&63,m[p++>>>0]=128|O>>6&63,m[p++>>>0]=128|63&O,I++}}m[p>>>0]=0,u=p-v}else u=0;return u},Mr=u=>{for(var p=0,g=0;g<u.length;++g){var m=u.charCodeAt(g);127>=m?p++:2047>=m?p+=2:55296<=m&&57343>=m?(p+=4,++g):p+=3}return p};function kg(u,p){at(u>>>=0,{name:p=tt(p>>>0),Oc(g){var m=($(),U)[g>>>2>>>0];return m=Ce(g+4,m,!0),it(g),m},Vc(g,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var v=typeof m=="string";if(!(v||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new Ht("Cannot pass non-string to std::string");var I=v?Mr(m):m.length,O=sr(4+I+1),D=O+4;return($(),U)[O>>>2>>>0]=I,v?ht(m,D,I+1):($(),W).set(m,D>>>0),g!==null&&g.push(it,O),O},Uc:Ci,Wc(g){it(g)}})}var Ss=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Cg=(u,p,g)=>{if(u>>>=1,16<(p=os(($(),ne),u,p/2,g))-u&&Ss)return Ss.decode(($(),ne).slice(u,p));for(g="";u<p;++u){var m=($(),ne)[u>>>0];g+=String.fromCharCode(m)}return g},zg=(u,p,g)=>{if(g??(g=2147483647),2>g)return 0;var m=p;g=(g-=2)<2*u.length?g/2:u.length;for(var v=0;v<g;++v){var I=u.charCodeAt(v);($(),F)[p>>>1>>>0]=I,p+=2}return($(),F)[p>>>1>>>0]=0,p-m},Og=u=>2*u.length,Ag=(u,p,g)=>{var m="";u>>>=2;for(var v=0;!(v>=p/4);v++){var I=($(),U)[u+v>>>0];if(!I&&!g)break;m+=String.fromCodePoint(I)}return m},Rg=(u,p,g)=>{if(p>>>=0,g??(g=2147483647),4>g)return 0;var m=p;g=m+g-4;for(var v=0;v<u.length;++v){var I=u.codePointAt(v);if(65535<I&&v++,($(),A)[p>>>2>>>0]=I,(p+=4)+4>g)break}return($(),A)[p>>>2>>>0]=0,p-m},Dg=u=>{for(var p=0,g=0;g<u.length;++g)65535<u.codePointAt(g)&&g++,p+=4;return p};function Mg(u,p,g){if(u>>>=0,p>>>=0,g=tt(g>>>=0),p===2)var m=Cg,v=zg,I=Og;else m=Ag,v=Rg,I=Dg;at(u,{name:g,Oc:O=>{var D=($(),U)[O>>>2>>>0];return D=m(O+4,D*p,!0),it(O),D},Vc:(O,D)=>{if(typeof D!="string")throw new Ht(`Cannot pass non-string to C++ string type ${g}`);var q=I(D),G=sr(4+q+p);return($(),U)[G>>>2>>>0]=q/p,v(D,G+4,q+p),O!==null&&O.push(it,G),G},Uc:Ci,Wc(O){it(O)}})}function Bg(u,p){at(u>>>=0,{zd:!0,name:p=tt(p>>>0),Oc:()=>{},Vc:()=>{}})}function Ng(u){Pi(u>>>0,!i,1,!r,131072,!1),Ja()}var Br=u=>{if(!C)try{if(u(),!(0<dt))try{n?Vr()&&Li(_):xi(_)}catch(p){p instanceof Oe||p=="unwind"||d(0,p)}}catch(p){p instanceof Oe||p=="unwind"||d(0,p)}},Pg=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function zi(u){u>>>=0,Pg||(Atomics.waitAsync(($(),A),u>>>2,u).value.then(Nr),u+=128,Atomics.store(($(),A),u>>>2,1))}var Nr=()=>Br(()=>{var u=Vr();u&&(zi(u),Qs())});function Lg(u,p){(u>>>=0)==p>>>0?setTimeout(Nr):n?postMessage({Zc:u,Sc:"checkMailbox"}):(u=Tt[u])&&u.postMessage({Sc:"checkMailbox"})}var Oi=[];function Ug(u,p,g,m,v){for(p>>>=0,v>>>=0,Oi.length=0,g=v>>>3,m=v+m>>>3;g<m;){var I;I=($(),Q)[g++>>>0]?($(),Q)[g++>>>0]:($(),te)[g++>>>0],Oi.push(I)}return(p?Vi[p]:O_[u])(...Oi)}var Wg=()=>{dt=0};function qg(u){u>>>=0,n?postMessage({Sc:"cleanupThread",Nd:u}):Ya(Tt[u])}function Vg(u){}var Pr=u=>{try{u()}catch(p){ve(p)}};function Gg(u){var p=(...g)=>{Lr.push(u);try{return u(...g)}finally{C||(Lr.pop(),rt&&ft===1&&Lr.length===0&&(ft=0,dt+=1,Pr(Uo),typeof Fibers<"u"&&Fibers.Zd()))}};return Is.set(u,p),p}var ft=0,rt=null,Es=0,Lr=[],Ai=new Map,Ts=new Map,Is=new Map,Fg=0,Ri=null,Hg=[],ks=u=>(function(p){if(!C){if(ft===0){var g=!1,m=!1;p((v=0)=>{if(!C&&(Es=v,g=!0,m)){ft=2,Pr(()=>Wo(rt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),v=!1;try{var I=(function(){var q=($(),A)[rt+8>>>2>>>0];return q=Ts.get(q),q=Is.get(q),--dt,q()})()}catch(q){I=q,v=!0}var O=!1;if(!rt){var D=Ri;D&&(Ri=null,(v?D.reject:D.resolve)(I),O=!0)}if(v&&!O)throw I}}),m=!0,g||(ft=1,rt=(function(){var v=sr(65548),I=v+12;if(($(),U)[v>>>2>>>0]=I,($(),U)[v+4>>>2>>>0]=I+65536,I=Lr[0],!Ai.has(I)){var O=Fg++;Ai.set(I,O),Ts.set(O,I)}return I=Ai.get(I),($(),A)[v+8>>>2>>>0]=I,v})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Pr(()=>Lo(rt)))}else ft===2?(ft=0,Pr(qo),it(rt),rt=null,Hg.forEach(Br)):ve(`invalid state: ${ft}`);return Es}})(p=>{u().then(p)});function jg(u){return u>>>=0,ks(async()=>{var p=await qe(u);return He(p)})}var Di=[],Kg=u=>{var p=Di.length;return Di.push(u),p},Xg=(u,p)=>{for(var g=Array(u),m=0;m<u;++m){var v=m,I=($(),U)[p+4*m>>>2>>>0],O=Ii[I];if(O===void 0)throw u=`parameter ${m}`,I=Fs(I),p=tt(I),it(I),new Ht(`${u} has unknown type ${p}`);g[v]=O}return g},Zg=(u,p,g)=>{var m=[];return u=u(m,g),m.length&&(($(),U)[p>>>2>>>0]=He(m)),u},Qg={},Ur=u=>{var p=Qg[u];return p===void 0?tt(u):p};function Yg(u,p,g){var[m,...v]=Xg(u,p>>>0);p=m.Vc.bind(m);var I=v.map(q=>q.Uc.bind(q));u--;var O={toValue:qe};switch(u=I.map((q,G)=>{var oe=`argFromPtr${G}`;return O[oe]=q,`${oe}(args${G?"+"+8*G:""})`}),g){case 0:var D="toValue(handle)";break;case 2:D="new (toValue(handle))";break;case 3:D="";break;case 1:O.getStringOrSymbol=Ur,D="toValue(handle)[getStringOrSymbol(methodName)]"}return D+=`(${u})`,m.zd||(O.toReturnWire=p,O.emval_returnValue=Zg,D=`return emval_returnValue(toReturnWire, destructorsRef, ${D})`),D=`return function (handle, methodName, destructorsRef, args) {
  ${D}
  }`,g=new Function(Object.keys(O),D)(...Object.values(O)),D=`methodCaller<(${v.map(q=>q.name)}) => ${m.name}>`,Kg(Object.defineProperty(g,"name",{value:D}))}function Jg(u,p){return p>>>=0,(u=qe(u>>>0))==qe(p)}function e_(u){return(u>>>=0)?(u=Ur(u),He(globalThis[u])):He(globalThis)}function t_(u){return u=Ur(u>>>0),He(t[u])}function r_(u,p){return p>>>=0,u=qe(u>>>0),p=qe(p),He(u[p])}function i_(u){9<(u>>>=0)&&(It[u+1]+=1)}function Cs(u,p,g,m,v){return Di[u>>>0](p>>>0,g>>>0,m>>>0,v>>>0)}function n_(u,p,g,m,v){return Cs(u>>>0,p>>>0,g>>>0,m>>>0,v>>>0)}function a_(){return He([])}function s_(u){u=qe(u>>>0);for(var p=Array(u.length),g=0;g<u.length;g++)p[g]=u[g];return He(p)}function o_(u){return He(Ur(u>>>0))}function u_(){return He({})}function l_(u){for(var p=qe(u>>>=0);p.length;){var g=p.pop();p.pop()(g)}ki(u)}function d_(u,p,g){p>>>=0,g>>>=0,u=qe(u>>>0),p=qe(p),g=qe(g),u[p]=g}function p_(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),A)[p>>>2>>>0]=u.getUTCSeconds(),($(),A)[p+4>>>2>>>0]=u.getUTCMinutes(),($(),A)[p+8>>>2>>>0]=u.getUTCHours(),($(),A)[p+12>>>2>>>0]=u.getUTCDate(),($(),A)[p+16>>>2>>>0]=u.getUTCMonth(),($(),A)[p+20>>>2>>>0]=u.getUTCFullYear()-1900,($(),A)[p+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),A)[p+28>>>2>>>0]=u}var zs=u=>u%4==0&&(u%100!=0||u%400==0),Os=[0,31,60,91,121,152,182,213,244,274,305,335],As=[0,31,59,90,120,151,181,212,243,273,304,334];function c_(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),A)[p>>>2>>>0]=u.getSeconds(),($(),A)[p+4>>>2>>>0]=u.getMinutes(),($(),A)[p+8>>>2>>>0]=u.getHours(),($(),A)[p+12>>>2>>>0]=u.getDate(),($(),A)[p+16>>>2>>>0]=u.getMonth(),($(),A)[p+20>>>2>>>0]=u.getFullYear()-1900,($(),A)[p+24>>>2>>>0]=u.getDay();var g=(zs(u.getFullYear())?Os:As)[u.getMonth()]+u.getDate()-1|0;($(),A)[p+28>>>2>>>0]=g,($(),A)[p+36>>>2>>>0]=-60*u.getTimezoneOffset(),g=new Date(u.getFullYear(),6,1).getTimezoneOffset();var m=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(g!=m&&u.getTimezoneOffset()==Math.min(m,g)),($(),A)[p+32>>>2>>>0]=u}function h_(u){u>>>=0;var p=new Date(($(),A)[u+20>>>2>>>0]+1900,($(),A)[u+16>>>2>>>0],($(),A)[u+12>>>2>>>0],($(),A)[u+8>>>2>>>0],($(),A)[u+4>>>2>>>0],($(),A)[u>>>2>>>0],0),g=($(),A)[u+32>>>2>>>0],m=p.getTimezoneOffset(),v=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),O=Math.min(I,v);return 0>g?($(),A)[u+32>>>2>>>0]=+(v!=I&&O==m):0<g!=(O==m)&&(v=Math.max(I,v),p.setTime(p.getTime()+6e4*((0<g?O:v)-m))),($(),A)[u+24>>>2>>>0]=p.getDay(),g=(zs(p.getFullYear())?Os:As)[p.getMonth()]+p.getDate()-1|0,($(),A)[u+28>>>2>>>0]=g,($(),A)[u>>>2>>>0]=p.getSeconds(),($(),A)[u+4>>>2>>>0]=p.getMinutes(),($(),A)[u+8>>>2>>>0]=p.getHours(),($(),A)[u+12>>>2>>>0]=p.getDate(),($(),A)[u+16>>>2>>>0]=p.getMonth(),($(),A)[u+20>>>2>>>0]=p.getYear(),u=p.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Rs(u,p,g,m,v,I,O){return n?xe(16,1,u,p,g,m,v,I,O):-52}function Ds(u,p,g,m,v,I){if(n)return xe(17,1,u,p,g,m,v,I)}var ar={},f_=()=>performance.timeOrigin+performance.now();function Ms(u,p){if(n)return xe(18,1,u,p);if(ar[u]&&(clearTimeout(ar[u].id),delete ar[u]),!p)return 0;var g=setTimeout(()=>{delete ar[u],Br(()=>Zs(u,performance.timeOrigin+performance.now()))},p);return ar[u]={id:g,Yd:p},0}function m_(u,p,g,m){u>>>=0,p>>>=0,g>>>=0,m>>>=0;var v=new Date().getFullYear(),I=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var O=Math.max(I,v);($(),U)[u>>>2>>>0]=60*O,($(),A)[p>>>2>>>0]=+(I!=v),u=(p=D=>{var q=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(I),p=p(v),v<I?(ht(u,g,17),ht(p,m,17)):(ht(u,m,17),ht(p,g,17))}var g_=()=>Date.now(),__=1;function y_(u,p,g){if(g>>>=0,!(0<=u&&3>=u))return 28;if(u===0)u=Date.now();else{if(!__)return 52;u=performance.timeOrigin+performance.now()}return u=Math.round(1e6*u),($(),Q)[g>>>3>>>0]=BigInt(u),0}var Mi=[],Bs=(u,p)=>{Mi.length=0;for(var g;g=($(),W)[u++>>>0];){var m=g!=105;p+=(m&=g!=112)&&p%8?4:0,Mi.push(g==112?($(),U)[p>>>2>>>0]:g==106?($(),Q)[p>>>3>>>0]:g==105?($(),A)[p>>>2>>>0]:($(),te)[p>>>3>>>0]),p+=m?8:4}return Mi};function b_(u,p,g){return u>>>=0,p=Bs(p>>>0,g>>>0),Vi[u](...p)}function w_(u,p,g){return u>>>=0,p=Bs(p>>>0,g>>>0),Vi[u](...p)}var $_=()=>{};function v_(u,p){return k(Ce(u>>>0,p>>>0))}var x_=()=>{throw dt+=1,"unwind"};function S_(){return 4294901760}var E_=()=>navigator.hardwareConcurrency,kt={},Wr=u=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+p[1]:0},Ns=u=>{for(var p of u)(u=Wr(p))&&(kt[u]=p)};function T_(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Ns(u),kt.gd=Wr(u[3]),kt.Jd=u,kt.gd}function qr(u){if(!(u=kt[u>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(u))u=p[1];else{if(!(p=/^(.+?)@/.exec(u)))return 0;u=p[1]}it(qr.hd??0),p=Mr(u)+1;var g=sr(p);return g&&ht(u,g,p),qr.hd=g,qr.hd}function I_(u){u>>>=0;var p=($(),W).length;if(u<=p||4294901760<u)return!1;for(var g=1;4>=g;g*=2){var m=p*(1+.2/g);m=Math.min(m,u+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(u,m)/65536))-ct.buffer.byteLength+65535)/65536|0;try{ct.grow(m),X();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}function k_(u,p,g){if(u>>>=0,p>>>=0,kt.gd==u)var m=kt.Jd;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),Ns(m);for(var v=3;m[v]&&Wr(m[v])!=u;)++v;for(u=0;u<g&&m[u+v];++u)($(),A)[p+4*u>>>2>>>0]=Wr(m[u+v]);return u}var Bi,Ni={},Ps=()=>{if(!Bi){var u,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in Ni)Ni[u]===void 0?delete p[u]:p[u]=Ni[u];var g=[];for(u in p)g.push(`${u}=${p[u]}`);Bi=g}return Bi};function Ls(u,p){if(n)return xe(19,1,u,p);u>>>=0,p>>>=0;var g,m=0,v=0;for(g of Ps()){var I=p+m;($(),U)[u+v>>>2>>>0]=I,m+=ht(g,I,1/0)+1,v+=4}return 0}function Us(u,p){if(n)return xe(20,1,u,p);u>>>=0,p>>>=0;var g=Ps();for(var m of(($(),U)[u>>>2>>>0]=g.length,u=0,g))u+=Mr(m)+1;return($(),U)[p>>>2>>>0]=u,0}function Ws(u){return n?xe(21,1,u):52}function qs(u,p,g,m){return n?xe(22,1,u,p,g,m):52}function Vs(u,p,g,m){return n?xe(23,1,u,p,g,m):70}var C_=[null,[],[]];function Gs(u,p,g,m){if(n)return xe(24,1,u,p,g,m);p>>>=0,g>>>=0,m>>>=0;for(var v=0,I=0;I<g;I++){var O=($(),U)[p>>>2>>>0],D=($(),U)[p+4>>>2>>>0];p+=8;for(var q=0;q<D;q++){var G=u,oe=($(),W)[O+q>>>0],ce=C_[G];oe===0||oe===10?((G===1?E:k)(us(ce)),ce.length=0):ce.push(oe)}v+=D}return($(),U)[m>>>2>>>0]=v,0}function z_(u){return u>>>0}n||(function(){for(var u=t.numThreads-1;u--;)ts();Te.push(async()=>{var p=(async function(){if(!n)return Promise.all(pt.map(es))})();Ne++,await p,--Ne==0&&Et&&(p=Et,Et=null,p())})})(),n||(ct=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),X()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>le(),t.stackRestore=u=>ue(u),t.stackAlloc=u=>Ui(u),t.setValue=function(u,p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":($(),V)[u>>>0]=p;break;case"i16":($(),F)[u>>>1>>>0]=p;break;case"i32":($(),A)[u>>>2>>>0]=p;break;case"i64":($(),Q)[u>>>3>>>0]=BigInt(p);break;case"float":($(),J)[u>>>2>>>0]=p;break;case"double":($(),te)[u>>>3>>>0]=p;break;case"*":($(),U)[u>>>2>>>0]=p;break;default:ve(`invalid type for setValue: ${g}`)}},t.getValue=function(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),V)[u>>>0];case"i16":return($(),F)[u>>>1>>>0];case"i32":return($(),A)[u>>>2>>>0];case"i64":return($(),Q)[u>>>3>>>0];case"float":return($(),J)[u>>>2>>>0];case"double":return($(),te)[u>>>3>>>0];case"*":return($(),U)[u>>>2>>>0];default:ve(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Ce,t.stringToUTF8=ht,t.lengthBytesUTF8=Mr;var Fs,Hs,Vr,it,sr,Pi,js,Ks,Xs,Li,Zs,Qs,de,or,Ys,ue,Ui,le,Js,Wi,eo,to,ro,qi,io,no,ao,so,oo,uo,lo,po,co,ho,fo,mo,go,_o,yo,bo,wo,$o,vo,xo,So,Eo,To,Io,ko,Co,zo,Oo,Ao,Ro,Do,Mo,Bo,No,Po,Lo,Uo,Wo,qo,st,O_=[vi,Za,ns,ls,ds,ps,cs,hs,fs,ms,gs,_s,ys,bs,ws,$s,Rs,Ds,Ms,Ls,Us,Ws,qs,Vs,Gs],Vi={973212:(u,p,g,m,v)=>{if(t===void 0||!t.Xc)return 1;if((u=Ce(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Xc.get(u)))return 2;if(p=Number(p>>>0),g=Number(g>>>0),m=Number(m>>>0),p+g>u.byteLength)return 3;try{let I=u.subarray(p,p+g);switch(v){case 0:($(),W).set(I,m>>>0);break;case 1:t.Qd?t.Qd(m,I):t.Id(m,I);break;default:return 4}return 0}catch{return 4}},974036:(u,p,g)=>{t.td(u,($(),W).subarray(p>>>0,p+g>>>0))},974100:()=>t.Wd(),974142:u=>{t.sd(u)},974179:()=>{t.Bd()},974210:()=>{t.Cd()},974239:()=>{t.Gd()},974264:u=>t.Ad(u),974297:u=>t.Ed(u),974329:(u,p,g)=>{t.ed(Number(u),Number(p),Number(g),!0)},974392:(u,p,g)=>{t.ed(Number(u),Number(p),Number(g))},974449:()=>typeof wasmOffsetConverter<"u",974506:u=>{t.$b("Abs",u,void 0)},974557:u=>{t.$b("Neg",u,void 0)},974608:u=>{t.$b("Floor",u,void 0)},974661:u=>{t.$b("Ceil",u,void 0)},974713:u=>{t.$b("Reciprocal",u,void 0)},974771:u=>{t.$b("Sqrt",u,void 0)},974823:u=>{t.$b("Exp",u,void 0)},974874:u=>{t.$b("Erf",u,void 0)},974925:u=>{t.$b("Sigmoid",u,void 0)},974980:(u,p,g)=>{t.$b("HardSigmoid",u,{alpha:p,beta:g})},975059:u=>{t.$b("Log",u,void 0)},975110:u=>{t.$b("Sin",u,void 0)},975161:u=>{t.$b("Cos",u,void 0)},975212:u=>{t.$b("Tan",u,void 0)},975263:u=>{t.$b("Asin",u,void 0)},975315:u=>{t.$b("Acos",u,void 0)},975367:u=>{t.$b("Atan",u,void 0)},975419:u=>{t.$b("Sinh",u,void 0)},975471:u=>{t.$b("Cosh",u,void 0)},975523:u=>{t.$b("Asinh",u,void 0)},975576:u=>{t.$b("Acosh",u,void 0)},975629:u=>{t.$b("Atanh",u,void 0)},975682:u=>{t.$b("Tanh",u,void 0)},975734:u=>{t.$b("Not",u,void 0)},975785:(u,p,g)=>{t.$b("Clip",u,{min:p,max:g})},975854:u=>{t.$b("Clip",u,void 0)},975906:(u,p)=>{t.$b("Elu",u,{alpha:p})},975964:u=>{t.$b("Gelu",u,void 0)},976016:u=>{t.$b("Relu",u,void 0)},976068:(u,p)=>{t.$b("LeakyRelu",u,{alpha:p})},976132:(u,p)=>{t.$b("ThresholdedRelu",u,{alpha:p})},976202:(u,p)=>{t.$b("Cast",u,{to:p})},976260:u=>{t.$b("Add",u,void 0)},976311:u=>{t.$b("Sub",u,void 0)},976362:u=>{t.$b("Mul",u,void 0)},976413:u=>{t.$b("Div",u,void 0)},976464:u=>{t.$b("Pow",u,void 0)},976515:u=>{t.$b("Equal",u,void 0)},976568:u=>{t.$b("Greater",u,void 0)},976623:u=>{t.$b("GreaterOrEqual",u,void 0)},976685:u=>{t.$b("Less",u,void 0)},976737:u=>{t.$b("LessOrEqual",u,void 0)},976796:(u,p,g,m,v)=>{t.$b("ReduceMean",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},976971:(u,p,g,m,v)=>{t.$b("ReduceMax",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},977145:(u,p,g,m,v)=>{t.$b("ReduceMin",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},977319:(u,p,g,m,v)=>{t.$b("ReduceProd",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},977494:(u,p,g,m,v)=>{t.$b("ReduceSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},977668:(u,p,g,m,v)=>{t.$b("ReduceL1",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},977841:(u,p,g,m,v)=>{t.$b("ReduceL2",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},978014:(u,p,g,m,v)=>{t.$b("ReduceLogSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},978191:(u,p,g,m,v)=>{t.$b("ReduceSumSquare",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},978371:(u,p,g,m,v)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},978551:u=>{t.$b("Where",u,void 0)},978604:(u,p,g)=>{t.$b("Transpose",u,{perm:p?Array.from(($(),A).subarray(Number(p)>>>0,Number(g)>>>0)):[]})},978728:(u,p,g,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:Ce(g),format:m?"NHWC":"NCHW"})},978861:(u,p,g,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:Ce(g),format:m?"NHWC":"NCHW"})},978994:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e,mt)=>{t.$b("ConvTranspose",u,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[v],pads:[I,O],strides:[D],wIsConst:()=>!!($(),V)[G>>>0],outputPadding:oe?Array.from(($(),A).subarray(Number(oe)>>>0,Number(ce)>>>0)):[],outputShape:be?Array.from(($(),A).subarray(Number(be)>>>0,Number($e)>>>0)):[],activation:Ce(mt)})},979427:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e)=>{t.$b("ConvTranspose",u,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),A).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),A).subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(($(),A).subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(($(),A).subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!($(),V)[q>>>0],outputPadding:G?Array.from(($(),A).subarray(Number(G)>>>0,Number(oe)>>>0)):[],outputShape:ce?Array.from(($(),A).subarray(Number(ce)>>>0,Number(be)>>>0)):[],activation:Ce($e)})},980088:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e,mt)=>{t.$b("ConvTranspose",u,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[v],pads:[I,O],strides:[D],wIsConst:()=>!!($(),V)[G>>>0],outputPadding:oe?Array.from(($(),A).subarray(Number(oe)>>>0,Number(ce)>>>0)):[],outputShape:be?Array.from(($(),A).subarray(Number(be)>>>0,Number($e)>>>0)):[],activation:Ce(mt)})},980521:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e)=>{t.$b("ConvTranspose",u,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),A).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),A).subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(($(),A).subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(($(),A).subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!($(),V)[q>>>0],outputPadding:G?Array.from(($(),A).subarray(Number(G)>>>0,Number(oe)>>>0)):[],outputShape:ce?Array.from(($(),A).subarray(Number(ce)>>>0,Number(be)>>>0)):[],activation:Ce($e)})},981182:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},981273:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e)=>{t.$b("AveragePool",u,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:v,dilations:I?Array.from(($(),A).subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(($(),A).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from(($(),A).subarray(Number(G)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),A).subarray(Number(ce)>>>0,Number(be)>>>0)):[]})},981752:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},981843:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e)=>{t.$b("AveragePool",u,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:v,dilations:I?Array.from(($(),A).subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(($(),A).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from(($(),A).subarray(Number(G)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),A).subarray(Number(ce)>>>0,Number(be)>>>0)):[]})},982322:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},982409:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e)=>{t.$b("MaxPool",u,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:v,dilations:I?Array.from(($(),A).subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(($(),A).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from(($(),A).subarray(Number(G)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),A).subarray(Number(ce)>>>0,Number(be)>>>0)):[]})},982884:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},982971:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e)=>{t.$b("MaxPool",u,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:v,dilations:I?Array.from(($(),A).subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(($(),A).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from(($(),A).subarray(Number(G)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),A).subarray(Number(ce)>>>0,Number(be)>>>0)):[]})},983446:(u,p,g,m,v)=>{t.$b("Gemm",u,{alpha:p,beta:g,transA:m,transB:v})},983550:u=>{t.$b("MatMul",u,void 0)},983604:(u,p,g,m)=>{t.$b("ArgMax",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},983712:(u,p,g,m)=>{t.$b("ArgMin",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},983820:(u,p)=>{t.$b("Softmax",u,{axis:p})},983883:(u,p)=>{t.$b("Concat",u,{axis:p})},983943:(u,p,g,m,v)=>{t.$b("Split",u,{axis:p,numOutputs:g,splitSizes:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},984099:u=>{t.$b("Expand",u,void 0)},984153:(u,p)=>{t.$b("Gather",u,{axis:Number(p)})},984224:(u,p)=>{t.$b("GatherElements",u,{axis:Number(p)})},984303:(u,p)=>{t.$b("GatherND",u,{batch_dims:Number(p)})},984382:(u,p,g,m,v,I,O,D,q,G,oe)=>{t.$b("Resize",u,{antialias:p,axes:g?Array.from(($(),A).subarray(Number(g)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Ce(v),cubicCoeffA:I,excludeOutside:O,extrapolationValue:D,keepAspectRatioPolicy:Ce(q),mode:Ce(G),nearestMode:Ce(oe)})},984744:(u,p,g,m,v,I,O)=>{t.$b("Slice",u,{starts:p?Array.from(($(),A).subarray(Number(p)>>>0,Number(g)>>>0)):[],ends:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[],axes:I?Array.from(($(),A).subarray(Number(I)>>>0,Number(O)>>>0)):[]})},985008:u=>{t.$b("Tile",u,void 0)},985060:(u,p,g)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},985174:(u,p,g)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},985288:u=>{t.$b("Range",u,void 0)},985341:(u,p)=>{t.$b("Einsum",u,{equation:Ce(p)})},985422:(u,p,g,m,v)=>{t.$b("Pad",u,{mode:p,value:g,pads:m?Array.from(($(),A).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},985565:(u,p,g,m,v,I)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!v,trainingMode:!!m,format:I?"NHWC":"NCHW"})},985734:(u,p,g,m,v,I)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!v,trainingMode:!!m,format:I?"NHWC":"NCHW"})},985903:(u,p,g)=>{t.$b("CumSum",u,{exclusive:Number(p),reverse:Number(g)})},986e3:(u,p,g)=>{t.$b("DequantizeLinear",u,{axis:p,blockSize:g})},986090:(u,p,g,m,v)=>{t.$b("GridSample",u,{align_corners:p,mode:Ce(g),padding_mode:Ce(m),format:v?"NHWC":"NCHW"})},986260:(u,p,g,m,v)=>{t.$b("GridSample",u,{align_corners:p,mode:Ce(g),padding_mode:Ce(m),format:v?"NHWC":"NCHW"})},986430:(u,p)=>{t.$b("ScatterND",u,{reduction:Ce(p)})},986515:(u,p,g,m,v,I,O,D,q)=>{t.$b("Attention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:v,doRotary:I,qkvHiddenSizes:O?Array.from(($(),A).subarray(Number(D)>>>0,Number(D)+O>>>0)):[],pastPresentShareBuffer:!!q})},986787:u=>{t.$b("BiasAdd",u,void 0)},986842:u=>{t.$b("BiasSplitGelu",u,void 0)},986903:u=>{t.$b("FastGelu",u,void 0)},986959:(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e,mt,Gi)=>{t.$b("Conv",u,{format:ce?"NHWC":"NCHW",auto_pad:p,dilations:g?Array.from(($(),A).subarray(Number(g)>>>0,Number(m)>>>0)):[],group:v,kernel_shape:I?Array.from(($(),A).subarray(Number(I)>>>0,Number(O)>>>0)):[],pads:D?Array.from(($(),A).subarray(Number(D)>>>0,Number(q)>>>0)):[],strides:G?Array.from(($(),A).subarray(Number(G)>>>0,Number(oe)>>>0)):[],w_is_const:()=>!!($(),V)[Number(be)>>>0],activation:Ce($e),activation_params:mt?Array.from(($(),J).subarray(Number(mt)>>>0,Number(Gi)>>>0)):[]})},987543:u=>{t.$b("Gelu",u,void 0)},987595:(u,p,g,m,v,I,O,D,q)=>{t.$b("GroupQueryAttention",u,{numHeads:p,kvNumHeads:g,scale:m,softcap:v,doRotary:I,rotaryInterleaved:O,smoothSoftmax:D,localWindowSize:q})},987812:(u,p,g,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},987923:(u,p,g,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},988034:(u,p,g,m,v,I)=>{t.$b("MatMulNBits",u,{k:p,n:g,accuracyLevel:m,bits:v,blockSize:I})},988161:(u,p,g,m,v,I)=>{t.$b("MultiHeadAttention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:v,doRotary:I})},988320:(u,p)=>{t.$b("QuickGelu",u,{alpha:p})},988384:(u,p,g,m,v)=>{t.$b("RotaryEmbedding",u,{interleaved:!!p,numHeads:g,rotaryEmbeddingDim:m,scale:v})},988523:(u,p,g)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},988625:(u,p,g)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},988727:(u,p,g,m)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:p,quantizeAxis:g,blockSize:m})},988848:u=>{t.Fd(u)},988882:(u,p)=>t.Hd(Number(u),Number(p),t.Yc.Kd,t.Yc.errors)};function A_(u,p,g){return ks(async()=>{await t.Dd(Number(u),Number(p),Number(g))})}function R_(){return typeof wasmOffsetConverter<"u"}function D_(u,p,g,m){var v=le();try{return po(u,p,g,m)}catch(I){if(ue(v),I!==I+0)throw I;de(1,0)}}function M_(u,p,g){var m=le();try{return so(u,p,g)}catch(v){if(ue(m),v!==v+0)throw v;de(1,0)}}function B_(u){var p=le();try{io(u)}catch(g){if(ue(p),g!==g+0)throw g;de(1,0)}}function N_(u,p){var g=le();try{return qi(u,p)}catch(m){if(ue(g),m!==m+0)throw m;de(1,0)}}function P_(u,p,g){var m=le();try{ro(u,p,g)}catch(v){if(ue(m),v!==v+0)throw v;de(1,0)}}function L_(u,p){var g=le();try{co(u,p)}catch(m){if(ue(g),m!==m+0)throw m;de(1,0)}}function U_(u,p,g,m,v,I,O){var D=le();try{return uo(u,p,g,m,v,I,O)}catch(q){if(ue(D),q!==q+0)throw q;de(1,0)}}function W_(u,p,g,m,v,I){var O=le();try{no(u,p,g,m,v,I)}catch(D){if(ue(O),D!==D+0)throw D;de(1,0)}}function q_(u,p,g,m){var v=le();try{lo(u,p,g,m)}catch(I){if(ue(v),I!==I+0)throw I;de(1,0)}}function V_(u,p,g,m,v){var I=le();try{ao(u,p,g,m,v)}catch(O){if(ue(I),O!==O+0)throw O;de(1,0)}}function G_(u,p,g,m,v,I,O){var D=le();try{fo(u,p,g,m,v,I,O)}catch(q){if(ue(D),q!==q+0)throw q;de(1,0)}}function F_(u,p,g,m,v,I,O){var D=le();try{mo(u,p,g,m,v,I,O)}catch(q){if(ue(D),q!==q+0)throw q;de(1,0)}}function H_(u,p,g,m,v,I,O,D){var q=le();try{bo(u,p,g,m,v,I,O,D)}catch(G){if(ue(q),G!==G+0)throw G;de(1,0)}}function j_(u,p,g,m,v){var I=le();try{return ho(u,p,g,m,v)}catch(O){if(ue(I),O!==O+0)throw O;de(1,0)}}function K_(u,p,g){var m=le();try{return wo(u,p,g)}catch(v){if(ue(m),v!==v+0)throw v;de(1,0)}}function X_(u,p,g,m,v,I,O,D){var q=le();try{$o(u,p,g,m,v,I,O,D)}catch(G){if(ue(q),G!==G+0)throw G;de(1,0)}}function Z_(u,p,g,m,v,I,O,D,q,G,oe,ce){var be=le();try{go(u,p,g,m,v,I,O,D,q,G,oe,ce)}catch($e){if(ue(be),$e!==$e+0)throw $e;de(1,0)}}function Q_(u,p,g,m,v,I){var O=le();try{return _o(u,p,g,m,v,I)}catch(D){if(ue(O),D!==D+0)throw D;de(1,0)}}function Y_(u,p,g){var m=le();try{return vo(u,p,g)}catch(v){if(ue(m),v!==v+0)throw v;return de(1,0),0n}}function J_(u,p,g,m,v,I,O,D,q){var G=le();try{oo(u,p,g,m,v,I,O,D,q)}catch(oe){if(ue(G),oe!==oe+0)throw oe;de(1,0)}}function ey(u){var p=le();try{return xo(u)}catch(g){if(ue(p),g!==g+0)throw g;de(1,0)}}function ty(u,p){var g=le();try{return Po(u,p)}catch(m){if(ue(g),m!==m+0)throw m;return de(1,0),0n}}function ry(u){var p=le();try{return So(u)}catch(g){if(ue(p),g!==g+0)throw g;return de(1,0),0n}}function iy(u,p,g,m){var v=le();try{return zo(u,p,g,m)}catch(I){if(ue(v),I!==I+0)throw I;de(1,0)}}function ny(u,p,g,m,v){var I=le();try{return Oo(u,p,g,m,v)}catch(O){if(ue(I),O!==O+0)throw O;de(1,0)}}function ay(u,p,g,m,v,I){var O=le();try{return Ao(u,p,g,m,v,I)}catch(D){if(ue(O),D!==D+0)throw D;de(1,0)}}function sy(u,p,g,m,v,I){var O=le();try{return Ro(u,p,g,m,v,I)}catch(D){if(ue(O),D!==D+0)throw D;de(1,0)}}function oy(u,p,g,m,v,I,O,D){var q=le();try{return yo(u,p,g,m,v,I,O,D)}catch(G){if(ue(q),G!==G+0)throw G;de(1,0)}}function uy(u,p,g,m,v){var I=le();try{return Do(u,p,g,m,v)}catch(O){if(ue(I),O!==O+0)throw O;return de(1,0),0n}}function ly(u,p,g,m){var v=le();try{return Mo(u,p,g,m)}catch(I){if(ue(v),I!==I+0)throw I;de(1,0)}}function dy(u,p,g,m){var v=le();try{return Bo(u,p,g,m)}catch(I){if(ue(v),I!==I+0)throw I;de(1,0)}}function py(u,p,g,m,v,I,O,D,q,G,oe,ce){var be=le();try{return No(u,p,g,m,v,I,O,D,q,G,oe,ce)}catch($e){if(ue(be),$e!==$e+0)throw $e;de(1,0)}}function cy(u,p,g,m,v,I,O,D,q,G,oe){var ce=le();try{ko(u,p,g,m,v,I,O,D,q,G,oe)}catch(be){if(ue(ce),be!==be+0)throw be;de(1,0)}}function hy(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e,mt,Gi){var _y=le();try{Co(u,p,g,m,v,I,O,D,q,G,oe,ce,be,$e,mt,Gi)}catch(Fi){if(ue(_y),Fi!==Fi+0)throw Fi;de(1,0)}}function fy(u,p,g){var m=le();try{return Eo(u,p,g)}catch(v){if(ue(m),v!==v+0)throw v;de(1,0)}}function my(u,p,g){var m=le();try{return To(u,p,g)}catch(v){if(ue(m),v!==v+0)throw v;de(1,0)}}function gy(u,p,g,m){var v=le();try{Io(u,p,g,m)}catch(I){if(ue(v),I!==I+0)throw I;de(1,0)}}function Gr(){if(0<Ne)Et=Gr;else if(n)b?.(t),H();else{for(var u=Te;0<u.length;)u.shift()(t);0<Ne?Et=Gr:(t.calledRun=!0,C||(H(),b?.(t)))}}return n||(st=await Ee(),Gr()),t.PTR_SIZE=4,Y?t:new Promise((u,p)=>{b=u,S=p})}var gc,_u,Py=L(()=>{"use strict";gc=gu,_u=globalThis.self?.name?.startsWith("em-pthread"),_u&&gu()}),en,Hn,yu,Pe,_c,Hr,bu,wu,tn,$u,rn,yc,nn,bc,ca=L(()=>{"use strict";pa(),en=typeof location>"u"?void 0:location.origin,Hn=import.meta.url>"file:"&&import.meta.url<"file;",yu=()=>{if(Hn){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,en).href}return import.meta.url},Pe=yu(),_c=()=>{if(Pe&&!Pe.startsWith("blob:"))return Pe.substring(0,Pe.lastIndexOf("/")+1)},Hr=(e,t)=>{try{let r=t??Pe;return(r?new URL(e,r):new URL(e)).origin===en}catch{return!1}},bu=(e,t)=>{let r=t??Pe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},wu=(e,t)=>`${t??"./"}${e}`,tn=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$u=async e=>(await import(e)).default,rn=(Ny(),xr(hc)).default,yc=async()=>{if(!Pe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Hr(Pe))return[void 0,rn()];let e=await tn(Pe);return[e,rn(e)]},nn=(Py(),xr(mc)).default,bc=async(e,t,r,i)=>{let n=nn&&!(e||t);if(n)if(Pe)n=Hr(Pe)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,nn];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??bu(a,t),o=r&&s&&!Hr(s,t),l=o?await tn(s):s??wu(a,t);return[o?l:void 0,await $u(l)]}}}),an,jr,lr,sn,vu,xu,Su,ha,we,qt=L(()=>{"use strict";ca(),jr=!1,lr=!1,sn=!1,vu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},xu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Su=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ha=async e=>{if(jr)return Promise.resolve();if(lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(sn)throw new Error("previous call to 'initializeWebAssembly()' failed.");lr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Su())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!xu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=vu();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n?.mjs,o=s?.href??s,l=n?.wasm,d=l?.href??l,h=e.wasmBinary,[c,f]=await bc(o,a,r>1,!!h||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,S)=>{let x={numThreads:r};if(h)x.wasmBinary=h,x.locateFile=w=>w;else if(d||a)x.locateFile=w=>d??a+w;else if(o&&o.indexOf("blob:")!==0)x.locateFile=w=>new URL(w,o).href;else if(c){let w=_c();w&&(x.locateFile=T=>w+T)}f(x).then(w=>{lr=!1,jr=!0,an=w,b(),c&&URL.revokeObjectURL(c)},w=>{lr=!1,sn=!0,S(w)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},we=()=>{if(jr&&an)return an;throw new Error("WebAssembly is not initialized yet.")}}),Ye,si,ge,fa=L(()=>{"use strict";qt(),Ye=(e,t)=>{let r=we(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},si=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")si(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ge=e=>{let t=we(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),wc,Ly=L(()=>{"use strict";qt(),fa(),wc=e=>{let t=we(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Ye(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&ge("Can't create run options."),e?.extra!==void 0&&si(e.extra,"",new WeakSet,(s,o)=>{let l=Ye(s,i),d=Ye(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&ge(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Eu,Tu,Iu,zt,ku,$c,Uy=L(()=>{"use strict";qt(),fa(),Eu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Tu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Iu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},zt=(e,t,r,i)=>{let n=Ye(t,i),a=Ye(r,i);we()._OrtAddSessionConfigEntry(e,n,a)!==0&&ge(`Can't set a session config entry: ${t} - ${r}.`)},ku=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",zt(e,"session.disable_quant_qdq","1",r),zt(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let c=n?.deviceType;c&&zt(e,"deviceType",c,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let c=n;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);zt(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Ye(a,r),l=s.length,d=0,h=0;if(l>0){d=we()._malloc(l*we().PTR_SIZE),r.push(d),h=we()._malloc(l*we().PTR_SIZE),r.push(h);for(let c=0;c<l;c++)we().setValue(d+c*we().PTR_SIZE,s[c][0],"*"),we().setValue(h+c*we().PTR_SIZE,s[c][1],"*")}await we()._OrtAppendExecutionProvider(e,o,d,h,l)!==0&&ge(`Can't append execution provider: ${a}.`)}},$c=async e=>{let t=we(),r=0,i=[],n=e||{};Iu(n);try{let a=Eu(n.graphOptimizationLevel??"all"),s=Tu(n.executionMode??"sequential"),o=typeof n.logId=="string"?Ye(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof n.optimizedModelFilePath=="string"?Ye(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,l,d,h),r===0&&ge("Can't create session options."),n.executionProviders&&await ku(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);zt(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[c,f]of Object.entries(n.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let y=Ye(c,i);t._OrtAddFreeDimensionOverride(r,y,f)!==0&&ge(`Can't set a free dimension override: ${c} - ${f}.`)}return n.extra!==void 0&&si(n.extra,"",new WeakSet,(c,f)=>{zt(r,c,f,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),Bt,ut,Nt,hi,oi,ma,ga,jn,ee=L(()=>{"use strict";Bt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ut=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Nt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},hi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},oi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ma=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ga=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",jn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),_a,vc=L(()=>{"use strict";pa(),_a=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Cu,zu,Ou,Au,ya,Ru,pe,lt=L(()=>{"use strict";ee(),Cu=["V","I","W","E","F"],zu=(e,t)=>{console.log(`[${Cu[e]},${new Date().toISOString()}]${t}`)},ya=(e,t)=>{Ou=e,Au=t},Ru=(e,t)=>{let r=oi(e),i=oi(Ou);r>=i&&zu(r,typeof t=="function"?t():t)},pe=(...e)=>{Au&&Ru(...e)}}),Du,Xt,R,ui,xc,Sc,Ec,ie=L(()=>{"use strict";Du=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Xt=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=Du.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let l=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(l!==d&&l>1&&d>1)return;let h=Math.max(l,d);if(l&&d)s[a-o]=Math.max(l,d);else{if(h>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class ni{static size(t){return ni.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ni.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ni.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},ui=class br{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)br.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return br.computeShapeHelper(t,r,l,i,n,a,s,o),l}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return br.computeShapeHelper(!1,t,l,i,n,a,s,o),l}static computeShapeHelper(t,r,i,n,a,s,o,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(br.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,a,s,o,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),a[o]=h-a[s],Math.floor((t+h-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/r+1)}},xc=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Xt.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Sc=-34028234663852886e22,Ec=34028234663852886e22}),ba,Tc=L(()=>{"use strict";ee(),ba=(e,t)=>new(hi(t))(e)}),on,Kn,un,Mu,ln,Bu,dn,pn,cn,Nu,Ic,Wy=L(()=>{"use strict";ee(),lt(),on=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Kn=(e,t)=>{if(t==="int32")return e;let r=on.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(hi(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let l=a[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},un=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Mu=1,ln=()=>Mu++,Bu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),dn=(e,t)=>{let r=on.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},pn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return dn(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=un(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},cn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=Bu.get(t),!s||a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==dn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Kn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?un(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Nu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ln();return this.tensorTrackersById.set(e,new cn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=ln(),s=new pn({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new cn(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let c=this.freeTensors.splice(d,1)[0];return c.sessionId=e,c}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new pn({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ic=(...e)=>new Nu(...e)}),dr,Pu,kc,qy=L(()=>{"use strict";ee(),qt(),Tc(),Wy(),lt(),dr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Pu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},kc=class{constructor(e){this.tensorManager=Ic(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ya(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Pu(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=dr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=dr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!we().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return ba(r,t)}}registerMLTensor(e,t,r,i){let n=dr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=a.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,h;switch(n.dataType){case"float32":h=new Float32Array(d);break;case"float16":h=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":h=new Int32Array(d);break;case"uint32":h=new Uint32Array(d);break;case"int64":if(s){let c=Kn(new Uint8Array(d),"int64");h=new Int32Array(c.buffer),n.dataType="int32"}else h=new BigInt64Array(d);break;case"uint64":h=new BigUint64Array(d);break;case"int8":h=new Int8Array(d);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return pe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=dr.get(Bt(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),wa=L(()=>{"use strict"}),hn,Kr,Xr,Lu,Uu,fn,Xn,Wu,Cc,Vy=L(()=>{"use strict";lt(),wa(),hn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Kr=[],Xr=e=>Math.ceil(Number(e)/16)*16,Lu=e=>{for(let t=0;t<Kr.length;t++){let r=Kr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Uu=1,fn=()=>Uu++,Xn=async(e,t,r,i)=>{let n=Xr(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},Wu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of hn)Kr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Xr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Xr(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=fn();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Lu(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:fn(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Xn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=hn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Cc=(...e)=>new Wu(...e)}),qu,me,ke=L(()=>{"use strict";qu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},me=e=>new qu(e)}),Zt,Zr,ze,Me,Z,Ie,Zn,Kt,vt,K,pr,M,j,zc,$a,Vu,Oc,ae=L(()=>{"use strict";ee(),ie(),Zt=64,Zr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ze=(e,t=1)=>{let r=Zr(e,t);return typeof r=="string"?r:r[0]},Me=(e,t=1)=>{let r=Zr(e,t);return typeof r=="string"?r:r[1]},Z=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},Ie=e=>e%4===0?4:e%2===0?2:1,Zn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Kt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,vt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,K=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,pr=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Zr(t,n),h=typeof d=="string"?d:d[1],c=typeof d=="string"?d:d[0],f={indices:l,value:h,storage:c,tensor:t},y=P=>typeof P=="string"?P:`${P}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=a?"uniforms.":"",S=`${b}${e}_shape`,x=`${b}${e}_strides`,w="";for(let P=0;P<s-1;P++)w+=`
    let dim${P} = current / ${K(x,P,s)};
    let rest${P} = current % ${K(x,P,s)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;w+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${w}
    return indices;
  }`,E=P=>(_.offsetToIndices=!0,s<2?P:`o2i_${e}(${P})`),k=[];if(s>=2)for(let P=s-1;P>=0;P--)k.push(`${K(x,P,s)} * (indices[${P}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,z=P=>(_.indicesToOffset=!0,s<2?P:`i2o_${e}(${P})`),$=(...P)=>s===0?"0u":`${f.indices}(${P.map(y).join(",")})`,B=(P,Y)=>s<2?`${P}`:`${K(P,Y,s)}`,N=(P,Y,X)=>s<2?`${P}=${X};`:`${K(P,Y,s)}=${X};`,V={},W=(P,Y)=>{_.broadcastedIndicesToOffset=!0;let X=`${Y.name}broadcastedIndicesTo${e}Offset`;if(X in V)return`${X}(${P})`;let H=[];for(let ve=s-1;ve>=0;ve--){let De=Y.indicesGet("outputIndices",ve+Y.rank-s);H.push(`${B(x,ve)} * (${De} % ${B(S,ve)})`)}return V[X]=`fn ${X}(outputIndices: ${Y.type.indices}) -> u32 {
             return ${H.length>0?H.join("+"):"0u"};
           }`,`${X}(${P})`},F=(P,Y)=>(()=>{if(f.storage===f.value)return`${e}[${P}]=${Y};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${Y}), select(0u, 0xFFFFFFFFu, ${Y} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${Y}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Y}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),ne=P=>(()=>{if(f.storage===f.value)return`${e}[${P}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${P}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${P}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${h} {
    return ${ne(`i2o_${e}(indices)`)};
  }`,U=s<2?"":(()=>{let P=o.map(X=>`d${X}: u32`).join(", "),Y=o.map(X=>`d${X}`).join(", ");return`
  fn get_${e}(${P}) -> ${h} {
    return get_${e}ByIndices(${$(Y)});
  }`})(),J=(...P)=>{if(P.length!==s)throw new Error(`indices length must be ${s}`);let Y=P.map(y).join(",");return s===0?ne("0u"):s===1?ne(Y[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${Y})`)},te=P=>s<2?ne(P):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${P})`),Q=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${h}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,se=s<2?"":(()=>{let P=o.map(X=>`d${X}: u32`).join(", "),Y=o.map(X=>`d${X}`).join(", ");return`
  fn set_${e}(${P}, value: ${h}) {
    set_${e}ByIndices(${$(Y)}, value);
  }`})();return{impl:()=>{let P=[],Y=!1;return _.offsetToIndices&&(P.push(T),Y=!0),_.indicesToOffset&&(P.push(C),Y=!0),_.broadcastedIndicesToOffset&&(Object.values(V).forEach(X=>P.push(X)),Y=!0),_.set&&(P.push(se),Y=!0),_.setByIndices&&(P.push(Q),Y=!0),_.get&&(P.push(U),Y=!0),_.getByIndices&&(P.push(A),Y=!0),!a&&Y&&P.unshift(`const ${S} = ${f.indices}(${r.join(",")});`,`const ${x} = ${f.indices}(${R.computeStrides(r).join(",")});`),P.join(`
`)},type:f,offsetToIndices:E,indicesToOffset:z,broadcastedIndicesToOffset:W,indices:$,indicesGet:B,indicesSet:N,set:(...P)=>{if(P.length!==s+1)throw new Error(`indices length must be ${s}`);let Y=P[s];if(typeof Y!="string")throw new Error("value must be string");let X=P.slice(0,s).map(y).join(",");return s===0?F("0u",Y):s===1?F(X[0],Y):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${X}, ${Y})`)},setByOffset:F,setByIndices:(P,Y)=>s<2?F(P,Y):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${Y});`),get:J,getByOffset:ne,getByIndices:te,usage:i,name:e,strides:x,shape:S,rank:s}},M=(e,t,r,i=1)=>pr(e,t,r,"input",i),j=(e,t,r,i=1)=>pr(e,t,r,"output",i),zc=(e,t,r)=>pr(e,t,r,"atomicOutput",1),$a=(e,t,r,i=1)=>pr(e,t,r,"internal",i),Vu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Zt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Oc=(e,t)=>new Vu(e,t)}),Gu,mn,Fu,Hu,ju,Ku,Ue,Ac,Rc,xt=L(()=>{"use strict";ee(),ie(),ke(),ae(),Gu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},mn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Fu=(e,t)=>R.sortBasedOnPerm(e,mn(e.length,t)),Hu=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},ju=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},Ku=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ue=(e,t)=>{let r=e.dataType,i=e.dims.length,n=mn(i,t),a=Fu(e.dims,n),s=e.dims,o=a,l=i<2||Ku(n,e.dims),d;if(l)return d=_=>{let b=M("input",r,s,4),S=j("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:h,newPerm:c}=ju(e.dims,n),f=R.areEqual(c,[2,3,1]),y=R.areEqual(c,[3,1,2]);if(h.length===2||f||y){s=f?[h[0],h[1]*h[2]]:y?[h[0]*h[1],h[2]]:h,o=[s[1],s[0]];let _=16;return d=b=>{let S=M("a",r,s.length),x=j("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:b},...Z(s,o)]}},getShaderSource:d}}return d=_=>{let b=M("a",r,s.length),S=j("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}

  ${Hu(n,i,b,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Z(s,o)]}},getShaderSource:d}},Ac=(e,t)=>{Gu(e.inputs,t.perm),e.compute(Ue(e.inputs[0],t.perm))},Rc=e=>me({perm:e.perm})}),Xu,Zu,Qu,Yu,Ju,el,tl,rl,il,nl,je,Dc,Mc,Bc,Nc,Pc,Lc,Uc,Wc,qc,Vc,Gy=L(()=>{"use strict";ee(),ie(),ae(),va(),xt(),Xu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Zu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Qu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Yu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ju=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},el=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},tl=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},rl=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},il=(e,t)=>{let r=[];if(!rl(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},nl=(e,t,r,i,n,a,s)=>{let o=r[0].dims,l=R.size(a),d=R.size(s),h=M("_A",r[0].dataType,o),c=j("output",n,a),f=64;l===1&&(f=256);let y=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Qu[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Xu[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Zu[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${i==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Yu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},je=(e,t,r,i)=>{let n=e.inputs.length===1?r:Qn(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((y,_)=>_));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=il(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ue(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Ju(o.length,l.dims.length));let[h,c]=el(l.dims,o),f=h;n.keepDims&&(f=tl(h,s)),e.compute(nl(t,n.cacheKey,[l],i,e.inputs[0].dataType,f,c),{inputs:[l]})},Dc=(e,t)=>{je(e,"ReduceMeanShared",t,"mean")},Mc=(e,t)=>{je(e,"ReduceL1Shared",t,"l1")},Bc=(e,t)=>{je(e,"ReduceL2Shared",t,"l2")},Nc=(e,t)=>{je(e,"ReduceLogSumExpShared",t,"logSumExp")},Pc=(e,t)=>{je(e,"ReduceMaxShared",t,"max")},Lc=(e,t)=>{je(e,"ReduceMinShared",t,"min")},Uc=(e,t)=>{je(e,"ReduceProdShared",t,"prod")},Wc=(e,t)=>{je(e,"ReduceSumShared",t,"sum")},qc=(e,t)=>{je(e,"ReduceSumSquareShared",t,"sumSquare")},Vc=(e,t)=>{je(e,"ReduceLogSumShared",t,"logSum")}}),Ke,al,li,Qn,Xe,sl,ol,ul,ll,dl,pl,cl,hl,fl,ml,Ze,Gc,Fc,Hc,jc,Kc,Xc,Zc,Qc,Yc,Jc,va=L(()=>{"use strict";ee(),ie(),ke(),ae(),Gy(),Ke=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},al=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],li=(e,t,r,i,n,a,s=!1,o=!1)=>{let l=[],d=r[0].dims,h=d.length,c=R.normalizeAxes(n,h),f=!o&&c.length===0;d.forEach((b,S)=>{f||c.indexOf(S)>=0?s&&l.push(1):l.push(b)});let y=l.length,_=R.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],x=M("_A",r[0].dataType,h),w=j("output",a,y),T=i(x,w,c),E=T[2];for(let k=0,C=0;k<h;k++)f||c.indexOf(k)>=0?(s&&C++,E=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
                  ${T[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${x.indicesSet("input_indices",k,`j${k}`)}
                  ${E}
                }`):(S.push(`${x.indicesSet("input_indices",k,w.indicesGet("output_indices",C))};`),C++);return`

        ${b.registerUniform("output_size","u32").declareVariables(x,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${E}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Z(d,l)]})}},Qn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),me({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Xe=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:Qn(n,r);e.compute(li(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?al:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},sl=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},ol=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ul=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ll=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},dl=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},pl=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},cl=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},hl=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},fl=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ml=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ze=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},Gc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):Dc(e,t)},Fc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ol(e,t):Mc(e,t)},Hc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ul(e,t):Bc(e,t)},jc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ll(e,t):Nc(e,t)},Kc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dl(e,t):Pc(e,t)},Xc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cl(e,t):Lc(e,t)},Zc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hl(e,t):Uc(e,t)},Qc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):Wc(e,t)},Yc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):qc(e,t)},Jc=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sl(e,t):Vc(e,t)}}),gn,eh,th,Yn,Fy=L(()=>{"use strict";ee(),ke(),va(),gn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},eh=(e,t)=>{gn(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(li("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},th=(e,t)=>{gn(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(li("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Yn=e=>me(e)}),gl,Qr,_l,yl,bl,Er,wl,rh,xa=L(()=>{"use strict";ee(),ie(),wa(),ae(),gl=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],h=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=n.dims[0]/3,f=c,y=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(c!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==c+f+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(f!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let S=_+b,x=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:x,inputHiddenSize:h,hiddenSize:c,vHiddenSize:y,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Qr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,_l=(e,t,r,i,n,a,s,o)=>{let l=Ie(s?1:a),d=64,h=a/l;h<d&&(d=32);let c=Math.ceil(a/l/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:h},{type:12,data:c}],y=ze(e.dataType,l),_=Me(1,l),b=["type"];s&&b.push("type"),o&&b.push("type");let S=x=>{let w=j("x",e.dataType,e.dims,l),T=[w],E=s?M("seq_lens",s.dataType,s.dims):void 0;E&&T.push(E);let k=o?M("total_sequence_length_input",o.dataType,o.dims):void 0;k&&T.push(k);let C=Me(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${x.registerUniforms(z).declareVariables(...T)}
  ${x.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Qr(E,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:f})}},yl=(e,t,r,i,n,a,s,o,l)=>{let d=s+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,d],c=e>1&&i,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=c?[a.batchSize,f,d,a.headSize]:void 0,_=a.nReps?a.nReps:1,b=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=Ie(a.headSize),x=a.headSize/S,w=12,T={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},E=[{type:12,data:a.sequenceLength},{type:12,data:x},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],k=c&&i&&R.size(i.dims)>0,C=["type","type"];k&&C.push("type"),n&&C.push("type"),o&&C.push("type"),l&&C.push("type");let z=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&z.push({dims:y,dataType:t.dataType,gpuDataType:0});let $=B=>{let N=M("q",t.dataType,t.dims,S),V=M("key",r.dataType,r.dims,S),W=[N,V];if(k){let Q=M("past_key",i.dataType,i.dims,S);W.push(Q)}n&&W.push(M("attention_bias",n.dataType,n.dims));let F=o?M("seq_lens",o.dataType,o.dims):void 0;F&&W.push(F);let ne=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;ne&&W.push(ne);let A=j("output",t.dataType,h),U=[A];c&&U.push(j("present_key",t.dataType,y,S));let J=Me(1,S),te=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${N.type.storage}, ${w*w}>;
  ${B.registerUniforms(te).declareVariables(...W,...U)}
  ${B.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Qr(F,ne,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${k&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${A.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:E}),getShaderSource:$}},bl=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let l=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,h=n.vHiddenSize*d,c=e>1&&i,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=c?[n.batchSize,f,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,h],b=12,S={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},x=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=c&&i&&R.size(i.dims)>0,T=["type","type"];w&&T.push("type"),s&&T.push("type"),o&&T.push("type");let E=[{dims:_,dataType:t.dataType,gpuDataType:0}];c&&E.push({dims:y,dataType:t.dataType,gpuDataType:0});let k=C=>{let z=M("probs",t.dataType,t.dims),$=M("v",r.dataType,r.dims),B=[z,$];w&&B.push(M("past_value",i.dataType,i.dims));let N=s?M("seq_lens",s.dataType,s.dims):void 0;s&&B.push(N);let V=o?M("total_sequence_length_input",o.dataType,o.dims):void 0;o&&B.push(V);let W=[j("output",t.dataType,_)];c&&W.push(j("present_value",t.dataType,y));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${z.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${z.type.value}, ${b*b}>;
  ${C.registerUniforms(F).declareVariables(...B,...W)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Qr(N,V,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:E,dispatchGroup:S,programUniforms:x}),getShaderSource:k}},Er=(e,t,r,i,n,a,s,o,l,d,h=void 0,c=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),y=f>1?s:void 0,_=f>1?o:void 0,b=f>1?d.pastSequenceLength:0,S=b+d.kvSequenceLength,x=l&&R.size(l.dims)>0?l:void 0,w=[t,r];y&&R.size(y.dims)>0&&w.push(y),x&&w.push(x),h&&w.push(h),c&&w.push(c);let T=e.compute(yl(f,t,r,y,x,d,b,h,c),{inputs:w,outputs:f>1?[-1,1]:[-1]})[0];e.compute(_l(T,d.batchSize,d.numHeads,b,d.sequenceLength,S,h,c),{inputs:h&&c?[T,h,c]:[T],outputs:[]});let E=[T,i];_&&R.size(_.dims)>0&&E.push(_),h&&E.push(h),c&&E.push(c),e.compute(bl(f,T,i,_,d,b,h,c),{inputs:E,outputs:f>1?[0,2]:[0]})},wl=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let f=j("output_q",l[0].dataType,r),y=j("output_k",l[0].dataType,r),_=j("output_v",l[0].dataType,r),b=M("input",l[0].dataType,l[0].dims),S=M("weight",l[1].dataType,l[1].dims),x=M("bias",l[2].dataType,l[2].dims),w=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(b,S,x,f,y,_)}
  ${c.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},rh=(e,t)=>{let r=gl(e.inputs,t),[i,n,a]=wl(e,r);return Er(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),$l,vl,xl,ih,Hy=L(()=>{"use strict";Fe(),ee(),ie(),ke(),ae(),$l=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},vl=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?Ie(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,l=R.size(a)/s,d=i,h=d?a.length:a,c=M("x",e[0].dataType,e[0].dims,s),f=M("scale",e[1].dataType,e[1].dims,o),y=M("bias",e[2].dataType,e[2].dims,o),_=M("inputMean",e[3].dataType,e[3].dims,o),b=M("inputVar",e[4].dataType,e[4].dims,o),S=j("y",e[0].dataType,h,s),x=()=>{let T="";if(i)T=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let E=1;E<f.rank;E++)T+=`cIndices[${E}] = outputIndices[${E}];`;T+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(c,f,y,_,b,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Z(a)]:[{type:12,data:l}]})}},xl=e=>me(e),ih=(e,t)=>{let{inputs:r,outputCount:i}=e,n=xl({...t,outputCount:i});if(ye.webgpu.validateInputContent&&$l(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(vl(r,n))}}),Sl,El,nh,jy=L(()=>{"use strict";ie(),ae(),Sl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},El=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,a=M("input",n,t,4),s=M("bias",n,[r],4),o=M("residual",n,t,4),l=j("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},nh=e=>{Sl(e.inputs),e.compute(El(e.inputs))}}),Tl,fe,ah,sh,oh,uh,lh,dh,ph,ch,hh,Il,fh,mh,gh,_h,wr,yh,ai,bh,wh,$h,vh,xh,Sh,Eh,Th,Ih,kh,Ch,zh,Oh,Ah,Rh,Dh,_n,Mh,Jn,ea,Bh,Nh,Ph,kl,Cl,Lh,Sa=L(()=>{"use strict";ee(),ie(),ke(),ae(),Tl=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=M("inputData",r,[o],4),h=j("outputData",i,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(d,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},fe=(e,t,r,i,n,a=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Tl(d,R.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},ah=e=>{e.compute(fe(e.inputs[0],"Abs","abs"))},sh=e=>{e.compute(fe(e.inputs[0],"Acos","acos"))},oh=e=>{e.compute(fe(e.inputs[0],"Acosh","acosh"))},uh=e=>{e.compute(fe(e.inputs[0],"Asin","asin"))},lh=e=>{e.compute(fe(e.inputs[0],"Asinh","asinh"))},dh=e=>{e.compute(fe(e.inputs[0],"Atan","atan"))},ph=e=>{e.compute(fe(e.inputs[0],"Atanh","atanh"))},ch=e=>me(e),hh=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Il=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return me({min:t,max:r})},fh=(e,t)=>{let r=t||Il(e.inputs),i=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},mh=e=>{e.compute(fe(e.inputs[0],"Ceil","ceil"))},gh=e=>{e.compute(fe(e.inputs[0],"Cos","cos"))},_h=e=>{e.compute(fe(e.inputs[0],"Cosh","cosh"))},wr=e=>me(e),yh=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ai=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,bh=e=>{let t=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ai(t)))},wh=e=>{e.compute(fe(e.inputs[0],"Exp","exp"))},$h=e=>{e.compute(fe(e.inputs[0],"Floor","floor"))},vh=e=>{let t=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ai(t)))},xh=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Sh=e=>{e.compute(fe(e.inputs[0],"Not",t=>`!${t}`))},Eh=e=>{e.compute(fe(e.inputs[0],"Neg",t=>`-${t}`))},Th=e=>{e.compute(fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ih=e=>{let t=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},kh=e=>{e.compute(fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ch=e=>me(e),zh=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Oh=e=>{e.compute(fe(e.inputs[0],"Sin","sin"))},Ah=e=>{e.compute(fe(e.inputs[0],"Sinh","sinh"))},Rh=e=>{e.compute(fe(e.inputs[0],"Sqrt","sqrt"))},Dh=e=>{e.compute(fe(e.inputs[0],"Tan","tan"))},_n=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Mh=e=>{e.compute(fe(e.inputs[0],"Tanh",_n))},Jn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${_n("v")};
}
`,ea=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Bh=e=>{let t=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"FastGelu",ea,Jn(t),void 0,e.inputs[0].dataType))},Nh=(e,t)=>{let r=Me(e.inputs[0].dataType);return e.compute(fe(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Ph=e=>{e.compute(fe(e.inputs[0],"Log","log"))},kl=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Cl=e=>`quick_gelu_impl(${e})`,Lh=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"QuickGelu",Cl,kl(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),zl,Ol,Uh,Ky=L(()=>{"use strict";ie(),ae(),Sa(),zl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ol=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),n=j("output",e[0].dataType,t,4),a=R.size(t)/4,s=ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${ai(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Uh=e=>{zl(e.inputs),e.compute(Ol(e.inputs))}}),Al,Rl,Qe,Wh,qh,Vh,Gh,Fh,Hh,jh,Kh,Xh,Zh,Xy=L(()=>{"use strict";ee(),ie(),ae(),Al=(e,t,r,i,n,a,s,o,l,d,h,c)=>{let f,y;typeof o=="string"?f=y=(w,T)=>`${o}((${w}),(${T}))`:typeof o=="function"?f=y=o:(f=o.scalar,y=o.vector);let _=j("outputData",h,i.length,4),b=M("aData",l,t.length,4),S=M("bData",d,r.length,4),x;if(n)if(a){let w=R.size(t)===1,T=R.size(r)===1,E=t.length>0&&t[t.length-1]%4===0,k=r.length>0&&r[r.length-1]%4===0;w||T?x=_.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):x=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(s||E?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||k?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,E,k="")=>{let C=`aData[indexA${E}][componentA${E}]`,z=`bData[indexB${E}][componentB${E}]`;return`
            let outputIndices${E} = ${_.offsetToIndices(`global_idx * 4u + ${E}u`)};
            let offsetA${E} = ${b.broadcastedIndicesToOffset(`outputIndices${E}`,_)};
            let offsetB${E} = ${S.broadcastedIndicesToOffset(`outputIndices${E}`,_)};
            let indexA${E} = offsetA${E} / 4u;
            let indexB${E} = offsetB${E} / 4u;
            let componentA${E} = offsetA${E} % 4u;
            let componentB${E} = offsetB${E} % 4u;
            ${T}[${E}] = ${k}(${f(C,z)});
          `};h===9?x=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,_)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Rl=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),d=!R.areEqual(o,l),h=o,c=R.size(o),f=!1,y=!1,_=[d];if(d){let b=Xt.calcShape(o,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");h=b.slice(),c=R.size(h);let S=R.size(o)===1,x=R.size(l)===1,w=o.length>0&&o[o.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push(x),_.push(w),_.push(T);let E=1;for(let k=1;k<h.length;k++){let C=o[o.length-k],z=l[l.length-k];if(C===z)E*=C;else break}E%4===0?(y=!0,f=!0):(S||x||w||T)&&(f=!0)}else f=!0;return _.push(f),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Al(b,o,l,h,f,d,y,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:h,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(h)/4)},...Z(o,l,h)]})}},Qe=(e,t,r,i,n,a)=>{e.compute(Rl(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},Wh=e=>{Qe(e,"Add",(t,r)=>`${t}+${r}`)},qh=e=>{Qe(e,"Div",(t,r)=>`${t}/${r}`)},Vh=e=>{Qe(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Gh=e=>{Qe(e,"Mul",(t,r)=>`${t}*${r}`)},Fh=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Qe(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Hh=e=>{Qe(e,"Sub",(t,r)=>`${t}-${r}`)},jh=e=>{Qe(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Kh=e=>{Qe(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Xh=e=>{Qe(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Zh=e=>{Qe(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Dl,Ml,Bl,Nl,Qh,Yh,Zy=L(()=>{"use strict";ee(),ie(),ke(),ae(),Dl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Ml=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Bl=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Nl=(e,t,r,i)=>{let n=R.size(r),a=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],h=[{type:12,data:n}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],a[b]=o,d.push(e[b].dims.length),s[b]=M(`input${b}`,i,d[b]),l.push("rank"),h.push({type:12,data:a[b]});for(let b=0;b<e.length;++b)h.push(...Z(e[b].dims));h.push(...Z(r));let c=j("output",i,r.length),f=c.indicesGet("indices",t),y=Array.from(Array(a.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...s,c)})()}

  ${Ml(a.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${y});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Bl(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h}),getShaderSource:_}},Qh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);Dl(r,n);let a=i.slice();a[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(o=>R.size(o.dims)>0);e.compute(Nl(s,n,a,r[0].dataType),{inputs:s})},Yh=e=>me({axis:e.axis})}),Lt,Ut,Wt,Ea,Vt=L(()=>{"use strict";ee(),ie(),Lt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ut=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Wt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ea=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Sc,Ec];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Re,Jh,Ta=L(()=>{"use strict";Re=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Jh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ef,Qy=L(()=>{"use strict";ef=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),vr,Ia,ka=L(()=>{"use strict";ee(),ie(),ae(),Vt(),vr=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${K(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,K(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Ia=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],h=s[s.length-1],c=Ie(d),f=Ie(h),y=Ie(l),_=R.size(r)/c/y,b=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),x=[R.size(S),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:h}];Ut(t,w),w.push(...Z(S,s,o)),b&&w.push(...Z(e[2].dims)),w.push(...Z(x));let T=E=>{let k=$a("batch_dims",e[0].dataType,S.length),C=M("a",e[0].dataType,s.length,f),z=M("b",e[1].dataType,o.length,c),$=j("output",e[0].dataType,x.length,c),B=ze($.type.tensor),N=Lt(t,$.type.value,B),V=[C,z],W="";if(b){let A=n?c:1;V.push(M("bias",e[2].dataType,e[2].dims.length,A)),W=`${n?`value += bias[col / ${A}];`:`value += ${$.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Wt(t,F);let ne=()=>{let A=`var a_data: ${C.type.value};`;for(let U=0;U<f;U++)A+=`
              let b_data${U} = b[(b_offset + (k + ${U}) * uniforms.N + col) / ${c}];`;for(let U=0;U<y;U++){A+=`a_data = a[(a_offset + (row + ${U}) * uniforms.K + k) / ${f}];`;for(let J=0;J<f;J++)A+=`
            values[${U}] = fma(${z.type.value}(a_data${f===1?"":`[${J}]`}), b_data${J}, values[${U}]);
`}return A};return`
  ${E.registerUniforms(F).registerInternalVariables(k).declareVariables(...V,$)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${vr("a_indices",C,C.rank-2,k.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${vr("b_indices",z,z.rank-2,k.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${ne()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${W}
      ${N}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${f};${y};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T}}}),Pl,Ll,ta,yn,Ul,ra,Wl,di,Ca=L(()=>{"use strict";ee(),ie(),ae(),Vt(),ka(),Ta(),Pl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ll=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ta=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],h=n?l:a,c=n?a:l,f=h/t[0],y=a/t[1];if(!((n&&f===4&&e[1]===4||!n&&(f===3||f===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${h/f}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Pl(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ll(n,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},yn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ul=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ra=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],h=e[0]*t[0],c=n?d:a,f=n?a:d;if(!(f%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let y=f/t[1],_=c/t[0],b=a/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${yn(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${yn(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ul(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Wl=(e,t,r,i,n=!1)=>{let[a,s,o,l]=i,d=ze(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Re(e,d)} {
      var value = ${Re(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${vr("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Re(e,d)} {
      var value = ${Re(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${vr("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Re(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Re(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},di=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),c=R.size(h),f=s[s.length-2],y=s[s.length-1],_=o[o.length-1],b=y%4===0&&_%4===0,S=f<=8?[4,1,1]:[4,4,1],x=[8,8,1],w=[Math.ceil(_/x[0]/S[0]),Math.ceil(f/x[1]/S[1]),Math.ceil(c/x[2]/S[2])],T=b?4:1,E=[...l,f,y/T],k=E.length,C=[...d,y,_/T],z=C.length,$=[c,f,_/T],B=[{type:6,data:f},{type:6,data:_},{type:6,data:y}];Ut(t,B),B.push(...Z(h,E,C));let N=["rank","rank"],V=e.length>2;V&&(B.push(...Z(e[2].dims)),N.push("rank")),B.push(...Z($));let W=F=>{let ne=h.length,A=$a("batchDims",e[0].dataType,ne,1),U=ze(e[0].dataType),J=M("a",e[0].dataType,k,T),te=M("b",e[1].dataType,z,T),Q=j("result",e[0].dataType,$.length,T),se=[J,te];if(V){let ve=n?T:1;se.push(M("bias",e[2].dataType,e[2].dims.length,ve))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Wt(t,P);let Y=ze(Q.type.tensor),X=Lt(t,Q.type.value,Y),H=Wl(T,V,X,[A,J,te,Q],n);return`
  ${F.registerUniforms(P).registerInternalVariables(A).declareVariables(...se,Q)}
  ${H}
  ${b?ta(S,x,U,A):ra(S,x,U,A)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${n}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:B}),getShaderSource:W}}}),ql,tf,Yy=L(()=>{"use strict";ee(),lt(),ae(),Vt(),Ta(),Qy(),Ca(),ql=(e,t,r,i,n=!1,a,s=4,o=4,l=4,d="f32")=>{let h=B=>{switch(B){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${B} is not supported.`)}},c=B=>{switch(B){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${B} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",x=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Re(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(s)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Re(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Re(s,d)}(0.0);`,E=e?i&&r?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${Re(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${Re(o,d)}(0.0);`,k=Re(l,d),C=Re(e?s:o,d),z=Re(e?o:s,d),$=Lt(a,k,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:E}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?E:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Jh(n)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},tf=(e,t,r,i,n,a,s,o,l)=>{let d=t.format==="NHWC",h=d?e[0].dims[3]:e[0].dims[1],c=r[0],f=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(h%4===0||h%3===0)&&_%4===0,S=d?_:f*y,x=d?f*y:_,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],E=[Math.ceil(S/w[0]/T[0]),Math.ceil(x/w[1]/T[1]),Math.ceil(c/w[2]/T[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${E}`);let k=b?d&&h%4!==0?3:4:1,C=w[1]*T[1],z=w[0]*T[0],$=Math.max(w[0]*k,w[1]),B=i%C===0,N=n%z===0,V=a%$===0,W=b?[k,4,4]:[1,1,1],F=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ut(t,F),F.push(...Z(e[0].dims,e[1].dims));let ne=["rank","rank"];s&&(F.push(...Z(e[2].dims)),ne.push("rank")),F.push(...Z(r));let A=U=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Wt(t,J);let te=b?4:1,Q=ze(e[0].dataType),se=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${Q}>`:Q}) {
        result[flatIndex] = ${b?`vec4<${Q}>`:Q}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${Q}>`:Q}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,P=M("x",e[0].dataType,e[0].dims.length,k===3?1:k),Y=M("w",e[1].dataType,e[1].dims.length,te),X=[P,Y],H=j("result",e[0].dataType,r.length,te);if(s){let ve=M("bias",e[2].dataType,e[2].dims.length,te);X.push(ve),se+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${Q}>`:Q} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${ef("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${U.registerUniforms(J).declareVariables(...X,H)}
        ${se}
        ${ql(d,B,N,V,s,t,W[0],W[1],W[2],Q)}
        ${b?ta(T,w,Q,void 0,!d,$):ra(T,w,Q,void 0,!d,$,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${b};${B};${N};${V};${C};${z};${$}`,inputDependencies:ne},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:F}),getShaderSource:A}}}),Vl,bn,cr,Gl,wn,Fl,rf,nf,Jy=L(()=>{"use strict";ee(),lt(),ie(),ae(),Vt(),Ta(),Vl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},bn=e=>typeof e=="number"?[e,e,e]:e,cr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Gl=(e,t,r,i=1)=>{let n=cr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},wn=(e,t,r,i,n)=>{n==null&&(n=Gl(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},Fl=(e,t,r,i,n,a,s,o,l,d)=>{let h,c,f,y;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=wn([t,r,i,1],[o,l,d],1,[n,a,s],e);c=_[0],f=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,S,x)=>b===x[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=wn([t,r,i,1],[o,l,d],1,[n,a,s],e[0]);c=_[0],f=_[1],y=_[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/n),f=Math.ceil(r/a),y=Math.ceil(i/s);let _=(c-1)*n+o-t,b=(f-1)*a+l-r,S=(y-1)*s+d-i,x=Math.floor(_/2),w=_-x,T=Math.floor(b/2),E=b-T,k=Math.floor(S/2),C=S-k;h={top:T,bottom:E,left:k,right:C,front:x,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:f,outWidth:y}},rf=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,l,d,h,c;if(s==="channelsLast")[o,l,d,h,c]=e;else if(s==="channelsFirst")[o,c,l,d,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,y,_,b]=t,[S,x,w]=bn(r),[T,E,k]=bn(i),C=cr(y,T),z=cr(_,E),$=cr(b,k),{padInfo:B,outDepth:N,outHeight:V,outWidth:W}=Fl(n,l,d,h,S,x,w,C,z,$),F=a?f*c:f,ne=[0,0,0,0,0];return s==="channelsFirst"?ne=[o,F,N,V,W]:s==="channelsLast"&&(ne=[o,N,V,W,F]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:h,inChannels:c,outDepth:N,outHeight:V,outWidth:W,outChannels:F,padInfo:B,strideDepth:S,strideHeight:x,strideWidth:w,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:z,effectiveFilterWidth:$,dilationDepth:T,dilationHeight:E,dilationWidth:k,inShape:e,outShape:ne,filterShape:t}},nf=(e,t,r,i,n,a)=>{let s=a==="channelsLast",o=s?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],h={x:r.map((w,T)=>T)},c=[Math.ceil(Vl(h.x.map(w=>r[w]))/d[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let f=l?s&&o%4!==0?3:4:1,y=R.size(r),_=[{type:12,data:y},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Ut(t,_),_.push(...Z(e[0].dims,e[1].dims));let b=["rank","rank"],S=e.length===3;S&&(_.push(...Z(e[2].dims)),b.push("rank")),_.push(...Z(r));let x=w=>{let T=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Wt(t,T);let E=l?4:1,k=ze(e[0].dataType),C=M("x",e[0].dataType,e[0].dims.length,f===3?1:f),z=M("W",e[1].dataType,e[1].dims.length,E),$=[C,z],B=j("result",e[0].dataType,r.length,E),N="";if(S){let F=M("bias",e[2].dataType,e[2].dims.length,E);$.push(F),N+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${k}>`:k} {
          return bias[${s?K("coords",4,5):K("coords",1,5)}${l?"/ 4":""}];
        }`}let V=Re(f,k),W=Lt(t,V,k);return`
            ${N}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
          ${w.registerUniforms(T).declareVariables(...$,B)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${B.offsetToIndices("global_idx")};
              let batch = ${K("coords",0,C.rank)};
              let d2 = ${s?K("coords",C.rank-1,C.rank):K("coords",1,C.rank)};
              let xFRCCorner = vec3<u32>(${s?K("coords",1,C.rank):K("coords",2,C.rank)},
              ${s?K("coords",2,C.rank):K("coords",3,C.rank)},
              ${s?K("coords",3,C.rank):K("coords",4,C.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?K("uniforms.x_shape",1,C.rank):K("uniforms.x_shape",2,C.rank)};
              let xShapeZ = ${s?K("uniforms.x_shape",2,C.rank):K("uniforms.x_shape",3,C.rank)};
              let xShapeW = ${s?K("uniforms.x_shape",3,C.rank):K("uniforms.x_shape",4,C.rank)};
              let xShapeU = ${s?K("uniforms.x_shape",4,C.rank):K("uniforms.x_shape",1,C.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${W}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${S}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:_}),getShaderSource:x}}}),af,sf,e0=L(()=>{"use strict";ee(),ie(),ae(),Vt(),af=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],h=d/t.group,c=l&&h>=4?Ie(d):1,f=R.size(r)/c,y=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Ut(t,y),y.push(...Z(s,[o[0],o[1],o[2],o[3]/c]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...Z([r[0],r[1],r[2],r[3]/c]));let b=S=>{let x=j("output",e[0].dataType,r.length,c),w=ze(x.type.tensor),T=Lt(t,x.type.value,w),E=M("x",e[0].dataType,s.length),k=M("w",e[1].dataType,o.length,c),C=[E,k];n&&C.push(M("b",e[2].dataType,e[2].dims,c));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Wt(t,z);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${E.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${k.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${E.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${k.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...C,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${$}
    ${a}
    ${T}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:b}},sf=(e,t,r,i)=>{let n=e.length>2,a=Ie(r[3]),s=Ie(r[2]),o=R.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[r[0],r[1],r[2],r[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ut(t,c),c.push(...Z(l,d,h));let f=(s-1)*t.strides[1]+d[1],y=_=>{let b=j("output",e[0].dataType,h.length,a),S=ze(b.type.tensor),x=Lt(t,b.type.value,S),w=M("x",e[0].dataType,l.length,a),T=M("w",e[1].dataType,d.length,a),E=[w,T];n&&E.push(M("b",e[2].dataType,e[2].dims,a));let k=n?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Wt(t,C),`
  ${_.registerUniforms(C).declareVariables(...E,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${f}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${k}
      ${x}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:y}}}),Hl,Yr,jl,Jr,ia,$n,Kl,Xl,na,t0=L(()=>{"use strict";ie(),Yy(),Jy(),Ca(),e0(),Vt(),ka(),xt(),Hl=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),l=o.length,d=t[0],h=t.slice(2).map((f,y)=>f+(f-1)*(r[y]-1)),c=o.map((f,y)=>f+i[y]+i[y+l]).map((f,y)=>Math.floor((f-h[y]+n[y])/n[y]));return c.splice(0,0,s),c.splice(a?3:1,0,d),c},Yr=[2,3,1,0],jl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Jr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();ui.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},ia=e=>{let t=Ea(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},$n=(e,t,r,i)=>{let n=r.format==="NHWC",a=Hl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let C=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(Ue(t[1],Yr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),C.push(z)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(sf(C,r,a,i),{inputs:C}):e.compute(af(C,r,a,i),{inputs:C});return}let s=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],h=t[1].dims[2],c=t[1].dims[3],f=a[n?1:2],y=a[n?2:3],_=a[n?3:1],b=n&&h===o&&c===l&&r.pads[0]===0&&r.pads[1]===0;if(b||h===1&&c===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=a[0],z,$,B,N=[];if(n){let F=e.kernelCustomData.wT??e.compute(Ue(t[1],Yr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),b){let ne=o*l*d;z=t[0].reshape([1,C,ne]),$=F.reshape([1,ne,_]),B=[1,C,_]}else z=t[0].reshape([C,o*l,d]),$=F.reshape([1,d,_]),B=[C,f*y,_];N.push(z),N.push($)}else z=t[0].reshape([C,d,o*l]),$=t[1].reshape([1,_,d]),B=[C,_,f*y],N.push($),N.push(z);s&&N.push(t[2]);let V=B[2],W=N[0].dims[N[0].dims.length-1];V<8&&W<8?e.compute(Ia(N,r,a,B,n,i),{inputs:N}):e.compute(di(N,r,a,B,n,i),{inputs:N});return}let S=!0,x=e.kernelCustomData.wT??e.compute(Ue(t[1],Yr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let w=[t[0],x];s&&w.push(t[2]);let T=n?f*y:_,E=n?_:f*y,k=h*c*d;e.compute(tf(w,r,a,T,E,k,s,S,i),{inputs:w})},Kl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Jr({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);$n(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Xl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Jr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=rf(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(nf(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},na=(e,t)=>{if(jl(e.inputs,t),e.inputs[0].dims.length===3)Kl(e,t);else if(e.inputs[0].dims.length===5)Xl(e,e.inputs,t);else{let r=Jr(t,e.inputs);$n(e,e.inputs,r)}}}),of,r0=L(()=>{"use strict";ee(),lt(),ie(),ae(),of=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],h=a?Ie(l):1,c=a&&d===1&&l>=4,f=c?Math.floor(l/4)*4:Math.floor(l/h)*h,y=l-f,_=a?Ie(d):1,b=a?d===1?h:_:1,S=R.size(n)/_,x=[Math.ceil(S/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],E=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],k=[t.dilations[0],t.dilations[1]],C=[E[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),E[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:T},{type:12,data:E},{type:12,data:k},{type:12,data:C},{type:6,data:z},{type:12,data:f},{type:12,data:l},{type:12,data:d},...Z(e[0].dims,e[1].dims)];i&&($.push(...Z(e[2].dims)),w.push("rank")),$.push(...Z(n));let B=N=>{let V=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:E.length},{name:"dilations",type:"u32",length:E.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=ze(e[0].dataType),F=a?1:2,ne=a?2:3,A=a?3:1,U=M("W",e[1].dataType,e[1].dims.length,b),J=M("Dy",e[0].dataType,e[0].dims.length,h),te=[J,U];i&&te.push(M("bias",e[2].dataType,[n[A]].length,_));let Q=j("result",e[0].dataType,n.length,_),se=()=>{let X="";if(c)h===4?X+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${U.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?X+=`
          dotProd = dotProd + dot(vec4<${W}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${W}>(${U.getByOffset("w_offset")}, ${U.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(X+=`
          dotProd = dotProd + dot(vec4<${W}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${W}>(${U.getByOffset("w_offset")}, ${U.getByOffset("w_offset + 1u")}, ${U.getByOffset("w_offset + 2u")}, ${U.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(X+=`
                  let xValue = ${a?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):J.get("batch","inputChannel","idyR","idyC")};
        `,h===1)X+=`
          let w_offset = ${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${U.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let H=0;H<h;H++)X+=`
            let wValue${H} = ${U.getByOffset(`${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${H}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${H}] * wValue${H};`;return X},P=()=>{if(y===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let X="";if(h===1){X+="dotProd = dotProd";for(let H=0;H<y;H++)X+=`
            + ${J.getByOffset(`x_offset + ${H}`)} * ${U.getByOffset(`w_offset + ${H}`)}`;X+=";"}else if(h===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);X+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${U.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return X},Y=`
            let outputIndices = ${Q.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${Q.indicesGet("outputIndices",0)};
            let d1 = ${Q.indicesGet("outputIndices",A)};
            let r = ${Q.indicesGet("outputIndices",F)};
            let c = ${Q.indicesGet("outputIndices",ne)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${W}(dyRCorner) + ${W}(wR)) / ${W}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${W}(uniforms.Dy_shape[${F}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${W}(dyCCorner) + ${W}(wC)) / ${W}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${W}(uniforms.Dy_shape[${ne}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${U.indicesToOffset(`${U.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${se()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${Q.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(V).declareVariables(...te,Q)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${b}${_}${c}${y}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:B}}}),Zl,Ql,Yl,vn,uf,Jl,xn,ed,lf,i0=L(()=>{"use strict";r0(),Vt(),xt(),Zl=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,Ql=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},Yl=(e,t,r,i,n,a,s,o,l,d)=>{let h=e.length-2,c=d.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let f=e[0],y=t[o?3:1]*n;for(let _=0,b=e.length-h-(o?1:0);_<h;++_,++b){let S=e[b],x=c?S*s[_]:d[_],w=Zl(S,s[_],a[_],t[b],r[_],x);Ql(w,i,a,_,_+h),c&&d.push(s[_]*(S-1)+l[_]+(t[b]-1)*r[_]+1-a[_]-a[_+h])}d.splice(0,0,f),d.splice(o?3:1,0,y)},vn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,f)=>c*f,1)===0){r.length=0;for(let c=2;c<t[1].dims.length;++c)r.push(t[1].dims[c])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}let d=e.strides.slice();if(d.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;d=new Array(c).fill(1)}Yl(o,r,l,e.autoPad,e.group,n,d,i,s,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:d}),h},uf=e=>{let t=Ea(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:h,outputShape:c,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Jl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},xn=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Ue(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(of(a,r,i),{inputs:a})},ed=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=vn({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);xn(e,i,d,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},lf=(e,t)=>{if(Jl(e.inputs,t),e.inputs[0].dims.length===3)ed(e,t);else{let r=vn(t,e.inputs);xn(e,e.inputs,r)}}}),td,df,pf,n0=L(()=>{"use strict";ee(),ie(),ke(),ae(),td=(e,t,r,i)=>{let n=R.size(t),a=t.length,s=M("input",e,a),o=j("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,a),h=c=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=K("uniforms.input_shape","uniforms.axis",a),_=i.reverse?f+(i.exclusive?" + 1":""):"0",b=i.reverse?y:f+(i.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...Z(t,t)]}),getShaderSource:h}},df=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(td(i,r,n,t),{inputs:[0]})},pf=e=>{let t=e.exclusive===1,r=e.reverse===1;return me({exclusive:t,reverse:r})}}),rd,id,nd,cf,hf,a0=L(()=>{"use strict";ee(),ie(),ke(),ae(),rd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},id=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},nd=(e,t)=>{let r,i,n,a,s,o,l=t.format==="NHWC",d=t.blocksize,h=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=h?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),f=c.dims.length,y=e.dataType,_=M("a",y,f),b=j("output",y,f),S=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(_,b)}

  ${id(o,f,_,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let w=l?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],T=R.size(w),E=c.dims,k=R.sortBasedOnPerm(E,o);return{outputs:[{dims:w,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...Z(E,k)]}},getShaderSource:S}},cf=(e,t)=>{rd(e.inputs),e.compute(nd(e.inputs[0],t))},hf=e=>me({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ei,hr,Sn,ad,sd,od,ud,En,ld,ff,mf,s0=L(()=>{"use strict";ee(),ie(),ke(),ae(),ei="[a-zA-Z]|\\.\\.\\.",hr="("+ei+")+",Sn="^"+hr+"$",ad="("+hr+",)*"+hr,sd="^"+ad+"$",od=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},ud=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(sd)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let s=e[a].dims.slice();if(!n.match(RegExp(Sn)))throw new Error("Invalid LHS term");let o=this.processTerm(n,!0,s,a);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(hr)))throw new Error("Invalid RHS");i.match(RegExp(ei,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(Sn))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(ei,"g")),d=new od(i);return l?.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=n-l.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,c+y),this.addSymbol(_,r[o++],i)}}else d.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[o++],i)}),d}},En=e=>e+"_max",ld=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,h)=>M(`input${h}`,t,d)),a=R.size(i),s=j("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let h=[],c="var prod = 1.0;",f="var sum = 0.0;",y="sum += prod;",_=[],b=[],S=[],x=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((E,k)=>{if(r.rhs.symbolToIndices.has(k)){let C=r.rhs.symbolToIndices.get(k)?.[0];C!==void 0&&r.lhs.forEach((z,$)=>{if(E.inputIndices.includes($)){let B=z.symbolToIndices.get(k);if(B===void 0)throw new Error("Invalid symbol error");B.forEach(N=>{h.push(`${n[$].indicesSet(`input${$}Indices`,N,s.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,z)=>{if(E.inputIndices.includes(z)){let $=C.symbolToIndices.get(k);if($===void 0)throw new Error("Invalid symbol error");$.forEach(B=>{_.push(`${n[z].indicesSet(`input${z}Indices`,B,`${k}`)}`)}),x.push(`prod *= ${n[z].getByIndices(`input${z}Indices`)};`)}}),b.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${En(k)}; ${k}++) {`),S.push("}")});let T=w?[...h,`let sum = ${n.map((E,k)=>E.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...h,f,...b,..._,c,...x,y,...S];return`
            ${d.registerUniforms(o.map(E=>({name:`${En(E)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((E,k)=>`var input${k}Indices: ${n[k].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(c=>r.symbolToInfo.has(c)).map(c=>({type:12,data:r.symbolToInfo.get(c)?.dimValue||0}));d.push({type:12,data:a});let h=e.map((c,f)=>[...Z(c)]).reduce((c,f)=>c.concat(f),d);return h.push(...Z(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:l}},ff=(e,t)=>{let r=new ud(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(ld(n,e.inputs[0].dataType,r,i))},mf=e=>{let t=e.equation.replace(/\s+/g,"");return me({equation:t})}}),dd,Tn,pd,cd,gf,o0=L(()=>{"use strict";ee(),ie(),ae(),dd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Tn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},pd=(e,t)=>e.length>t.length?Tn(e,t):Tn(t,e),cd=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=pd(t,r),n=e[0].dataType,a=n===9||R.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/o),d=c=>{let f=M("input",n,t.length,s),y=j("output",n,i.length,o),_;if(n===9){let b=(S,x,w="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${f.broadcastedIndicesToOffset(`outputIndices${x}`,y)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${S}[${x}] = ${w}(${f.getByOffset(`index${x}`)}[component${x}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(f,y)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},h=[{type:12,data:l},...Z(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},gf=e=>{dd(e.inputs),e.compute(cd(e.inputs),{inputs:[0]})}}),hd,_f,u0=L(()=>{"use strict";ee(),ie(),ae(),Sa(),hd=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,a=s=>{let o=M("x",t,[1],4),l=M("bias",t,[1],4),d=j("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,f=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(o,l,d)}

    ${Jn(Me(t))}

    ${s.mainStart(Zt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ea("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Zt/4)}})}},_f=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?Bh(e):e.compute(hd(e.inputs))}}),fd,md,yf,bf,l0=L(()=>{"use strict";ee(),ie(),ke(),ae(),fd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},md=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/l),h=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...Z(e[0].dims,e[1].dims,s)],c=f=>{let y=M("data",e[0].dataType,e[0].dims.length,l),_=M("inputIndices",e[1].dataType,e[1].dims.length),b=j("output",e[0].dataType,s.length,l),S=w=>{let T=i.length,E=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let k=0;k<T;k++)E+=`${T>1?`indicesIndices${w}[${k}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${k}]`:`outputIndices${w}`};`;E+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let k=0,C=0;k<n;k++)k===a?(E+=`${n>1?`dataIndices${w}[${k}]`:`dataIndices${w}`} = u32(idx${w});`,C+=T):(E+=`${n>1?`dataIndices${w}[${k}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${C}]`:`outputIndices${w}`};`,C++);return E},x;if(e[0].dataType===9){let w=(T,E,k="")=>`
          let outputIndices${E} = ${b.offsetToIndices(`outputOffset + ${E}u`)};
          ${S(E)};
          let offset${E} = ${y.indicesToOffset(`dataIndices${E}`)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${T}[${E}] = ${k}(${y.getByOffset(`index${E}`)}[component${E}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:c}},yf=e=>me({axis:e.axis}),bf=(e,t)=>{let r=e.inputs;fd(r),e.compute(md(e.inputs,t))}}),gd,wf,$f,d0=L(()=>{"use strict";ee(),ie(),ae(),gd=(e,t,r,i,n,a,s,o,l)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],h=[a];d.push(...Z(t.dims,h));let c=f=>{let y=M("indices_data",t.dataType,t.dims.length),_=j("input_slice_offsets_data",12,1,1),b=[y,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(S).declareVariables(...b)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},wf=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),l=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),h=R.sizeFromDimension(i,t.batchDims),c=o/d,f=new Array(s),y=l;for(let E=0;E<s;++E)f[s-1-E]=y,y*=i[t.batchDims+s-1-E];let _=gd(e,r[1],f,t.batchDims,i,o,c,h,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(i.slice(b)),x=R.size(S),w=[{type:12,data:x},{type:12,data:l},...Z(r[0].dims,_.dims,S)],T=E=>{let k=M("data",r[0].dataType,r[0].dims.length),C=M("slice_offsets",12,_.dims.length),z=j("output",r[0].dataType,S.length);return`
          ${E.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,C,z)}
            ${E.mainStart()}
            ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],_]})},$f=e=>({batchDims:e.batch_dims,cacheKey:""})}),_d,yd,vf,xf,p0=L(()=>{"use strict";ee(),ie(),ke(),ae(),_d=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/i)===a.dims[l]:o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,l)=>o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},yd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.gatherAxis,n),s=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let l=R.size(o),d=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...Z(...e.map((y,_)=>y.dims),o)],f=y=>{let _=M("data",e[0].dataType,e[0].dims.length),b=M("inputIndices",e[1].dataType,e[1].dims.length),S=M("scales",e[2].dataType,e[2].dims.length),x=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=j("output",d,o.length),T=[_,b,S];x&&T.push(x);let E=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(E).declareVariables(...T,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Me(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:f}},vf=(e,t)=>{let r=e.inputs;_d(r,t),e.compute(yd(e.inputs,t))},xf=e=>me({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),bd,wd,Sf,Ef,c0=L(()=>{"use strict";ee(),ie(),ke(),ae(),bd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},wd=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,n),l=r[o],d=a.slice(0),h=R.size(d),c=M("input",i,n),f=M("indicesInput",s,a.length),y=j("output",i,d.length),_=[{type:12,data:h},{type:6,data:l},{type:12,data:o}];return _.push(...Z(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,f,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Sf=e=>me({axis:e.axis}),Ef=(e,t)=>{let r=e.inputs;bd(r),e.compute(wd(e.inputs,t))}}),$d,vd,Tf,If,h0=L(()=>{"use strict";ee(),ie(),ae(),$d=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},vd=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=xc.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),h=Math.ceil(n/l),c=!0,f=R.size(o),y=[{type:12,data:c?d:f},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...Z(e[2].dims)),_.push("rank")),y.push(...Z(o));let b=x=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",E=M("a",e[0].dataType,e[0].dims),k=M("b",e[1].dataType,e[1].dims),C=E.type.value,z=null,$=[E,k];e.length===3&&(z=M("c",e[2].dataType,e[2].dims.length),$.push(z));let B=j("output",e[0].dataType,o.length);$.push(B);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(N).declareVariables(...$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",B)}; value += ${C}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=x=>{let w=M("a",e[0].dataType,e[0].dims),T=M("b",e[1].dataType,e[1].dims),E=null,k=[w,T];e.length===3&&(E=M("c",e[2].dataType,e[2].dims.length),k.push(E));let C=j("output",e[0].dataType,o.length);k.push(C);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",B="";t.transA&&t.transB?(B=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(B=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(B=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(B=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(z).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${x.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${B}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${N}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*h},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:b}},Tf=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},If=(e,t)=>{$d(e.inputs),e.compute(vd(e.inputs,t))}}),nt,ot,Ot,At,xd,Sd,Ed,Td,Id,kd,Cd,zd,kf,Cf,f0=L(()=>{"use strict";ee(),ie(),ke(),ae(),[nt,ot,Ot,At]=[0,1,2,3],xd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Sd=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Ed=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Td=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Id=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,kd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${nt}] = batch;
     indices[${ot}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ot}] = u32(r);
            indices[${At}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ot}] = u32(clamp(r, 0, H - 1));
          indices[${At}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ot}] = gs_reflect(r, border[1], border[3]);
          indices[${At}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Cd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${nt}], indices[${ot}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${nt}], indices[${ot}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${nt}], indices[${ot}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${nt}], indices[${ot}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${nt}], indices[${ot}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${nt}], indices[${ot}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,zd=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=M("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[nt,ot,Ot,At]=[0,3,1,2]);let s=j("output",e[0].dataType,a.length),o=r.type.value,l=R.size(a),d=[{type:12,data:l},...Z(e[0].dims,i,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Sd}
  ${Ed(o)}
  ${Td(t)}
  ${Id(t)}
  ${kd(r,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ot}]);
      let W_in = i32(uniforms.x_shape[${At}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${nt}], indices[${Ot}], indices[${At}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Cd(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let f=R.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:h}},kf=(e,t)=>{xd(e.inputs),e.compute(zd(e.inputs,t))},Cf=e=>me({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Be,Od,zf,In,Ad,$r,Of,Af=L(()=>{"use strict";ee(),ie(),ke(),wa(),xa(),ae(),xt(),Be=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Od=(e,t)=>{let r=e[0],i=Be(e,1),n=Be(e,2),a=Be(e,3),s=Be(e,4),o=Be(e,5),l=Be(e,6),d=Be(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],c=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=c,_=0,b=0,S=Math.floor(f/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+y,T=0;if(s&&R.size(s.dims)>0){T=8;let z=s.dims;throw z.length===1?z[0]===h?T=1:z[0]===3*h+2&&(T=3):z.length===2&&z[0]===h&&z[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let E=!1,k=f;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],E=!0}}let C=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:S,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:C,passPastInKv:E,qkvFormat:x}},zf=e=>me({...e}),In=me({perm:[0,2,1,3]}),Ad=(e,t,r,i,n,a,s)=>{let o=[i,n,a],l=R.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],h=c=>{let f=j("qkv_with_bias",t.dataType,o),y=M("qkv",t.dataType,o),_=M("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(b).declareVariables(y,_,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},$r=(e,t,r,i,n,a,s,o)=>{let l=a;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Ad(e,a,s,t,i,r*n,o),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Ue(l,In.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Ue(l,In.perm),{inputs:[l],outputs:[-1]})[0]},Of=(e,t)=>{let r=Od(e.inputs,t),i=e.inputs[0],n=Be(e.inputs,1),a=Be(e.inputs,2),s=Be(e.inputs,3),o=Be(e.inputs,4),l=Be(e.inputs,5),d=Be(e.inputs,6),h=Be(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let c=n&&a&&n.dims.length===4&&a.dims.length===4,f=$r(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(c)return Er(e,f,n,a,o,void 0,d,h,l,r);if(!n||!a)throw new Error("key and value must be provided");let y=$r(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=$r(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Er(e,f,y,_,o,void 0,d,h,l,r)}}),Rd,Dd,Md,Bd,aa,Rf,Df,Mf=L(()=>{"use strict";ee(),ie(),ke(),ae(),Rd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Dd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),me({numOutputs:i,axis:t.axis,splitSizes:r})},Md=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${K("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Bd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},aa=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=M("input",n,r.length),l=new Array(t.numOutputs),d=[],h=[],c=0,f=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){c+=t.splitSizes[_],l[_]=c;let b=r.slice();b[a]=t.splitSizes[_],h.push(b),s[_]=j(`output${_}`,n,b.length),d.push({dims:h[_],dataType:e[0].dataType})}f.push({type:12,data:l},...Z(r,...h));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${Md(l.length)}
  ${Bd(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${K("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f})}},Rf=(e,t)=>{Rd(e.inputs);let r=e.inputs.length===1?t:Dd(e.inputs,t);e.compute(aa(e.inputs,r),{inputs:[0]})},Df=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return me({axis:t,numOutputs:i,splitSizes:r})}}),Nd,pi,Bf,Nf=L(()=>{"use strict";ee(),ie(),ke(),ae(),Nd=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],h=n.dims[0],c=R.sizeFromDimension(r.dims,1)/d,f=o===0?n.dims[1]*2:c/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},pi=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,h=e[2].dims[1],c=n===0?h*2:d/i,f=new Array(s,l,d/c,c-h),y=R.computeStrides(f),_=[{type:1,data:a},{type:12,data:f},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[o,d,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,l*c,1]}):[],...Z(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let x=M("input",e[0].dataType,e[0].dims.length),w=M("position_ids",e[1].dataType,e[1].dims.length),T=M("cos_cache",e[2].dataType,e[2].dims.length),E=M("sin_cache",e[3].dataType,e[3].dims.length),k=j("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(x,w,T,E,k)}

        ${S.mainStart(Zt)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",j("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:me({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(f)/Zt)},programUniforms:_})}},Bf=(e,t)=>{Nd(e.inputs,t),e.compute(pi(e.inputs,t))}}),Pd,Ld,kn,Ud,Pf,m0=L(()=>{"use strict";ke(),ee(),xa(),Af(),Mf(),xt(),Nf(),ae(),Pd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],h=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],c=d,f=0,y=!i||i.dims.length===0,_=Math.floor(y?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);y&&(h=_*t.numHeads);let b=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if(b&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');c=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let w=0,T=!1,E=t.kvNumHeads?_*t.kvNumHeads:h;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(c!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=n.dims[2]}else{if(c!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=n.dims[1]*n.dims[3],T=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=k.dims.reduce((z,$)=>z*$,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let z=0;z<k.dims.length;z++)if(k.dims[z]!==1&&k.dims[z]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${z}] = ${k.dims[z]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:_,vHeadSize:Math.floor(E/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:x}},Ld=me({perm:[0,2,1,3]}),kn=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Ue(i,Ld.perm),{inputs:[i],outputs:[-1]})[0]),i},Ud=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=h=>{let c=M("seq_lens",r.dataType,r.dims),f=M("total_seq_lens",i.dataType,i.dims),y=j("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(_).declareVariables(c,f,y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Pf=(e,t)=>{let r=Pd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=me({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[f,y,_]=!n&&!a?e.compute(aa([i],c),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],b,S;if(t.doRotary){let E=e.compute(Ud(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],k=e.inputs[7],C=e.inputs[8],z=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),$=[f,E,k,C],B=[-1];b=e.compute(pi($,z),{inputs:$,outputs:B})[0],$.splice(0,1,y);let N=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(pi($,N),{inputs:$,outputs:B})[0]}let x=$r(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:f,void 0,0),w=kn(e,t.doRotary?S:y,r),T=kn(e,_,r);Er(e,x,w,T,void 0,void 0,s,o,void 0,r,l,d)}}),Cn,Wd,qd,Lf,g0=L(()=>{"use strict";ee(),ie(),xt(),ae(),Cn=(e,t,r,i,n,a,s,o)=>{let l=Ie(a),d=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,c=n*s,f=64;c===1&&(f=256);let y=[n,s,a/l],_=[n,s,2],b=["rank","type","type"],S=[];S.push(...Z(y,_));let x=w=>{let T=M("x",t.dataType,3,l),E=M("scale",r.dataType,r.dims),k=M("bias",i.dataType,i.dims),C=j("output",1,3,2),z=[T,E,k,C];return`
  var<workgroup> workgroup_shared : array<${h}, ${f}>;
  const workgroup_size = ${f}u;
  ${w.declareVariables(...z)}
  ${w.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${vt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${vt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${f}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:c},programUniforms:S}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},Wd=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],l=R.sizeFromDimension(i,a),d=Ie(l),h=R.size(n)/d,c=Cn(e,t[0],t[1],t[2],s,l,o,r.epsilon),f=[s,o,l/d],y=[s,o],_=["type","none"],b=S=>{let x=M("x",t[0].dataType,f.length,d),w=M("scale_shift",1,y.length,2),T=j("output",t[0].dataType,f.length,d),E=[x,w,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...E)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...Z(f,y,f)]}),getShaderSource:b},{inputs:[t[0],c]})},qd=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=R.sizeFromDimension(i,1)/s,l=Ie(s),d=R.size(n)/l,h=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],c=["type","type"],f=!1,y=[0,i.length-1];for(let x=0;x<i.length-2;x++)f=f||i[x+1]!==1,y.push(x+1);f=f&&i[i.length-1]!==1;let _=f?e.compute(Ue(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,w)=>i[y[w]])),b=Cn(e,_,t[1],t[2],a,o,s,r.epsilon),S=x=>{let w=ze(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,E=z=>{let $=z===0?"x":"y",B=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${B}(scale.${$}))`;case 2:return`vec2<${w}>(${B}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${B}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},k=M("input",t[0].dataType,t[0].dims,l),C=j("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${E(0)}, ${E(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:S},{inputs:[t[0],b]})},Lf=(e,t)=>{t.format==="NHWC"?qd(e,e.inputs,t):Wd(e,e.inputs,t)}}),Vd,Gd,Uf,_0=L(()=>{"use strict";ee(),ie(),ae(),Vd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Gd=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,l=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,l),h=R.sizeFromDimension(n,l),c=R.size(a.dims),f=s?R.size(s.dims):0;if(c!==h||s&&f!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${f}`);let y=[];for(let k=0;k<n.length;++k)k<l?y.push(n[k]):y.push(1);let _=Ie(h),b=["type","type"],S=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/_)},{type:1,data:t.epsilon}];s&&b.push("type");let x=r>1,w=r>2,T=k=>{let C=ze(e[0].dataType),z=[M("x",e[0].dataType,e[0].dims,_),M("scale",a.dataType,a.dims,_)];s&&z.push(M("bias",s.dataType,s.dims,_)),z.push(j("output",e[0].dataType,o,_)),x&&z.push(j("mean_data_output",1,y)),w&&z.push(j("inv_std_output",1,y));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms($).declareVariables(...z)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Zn("f32",_)};
    var mean_square_vector = ${Zn("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Kt(C,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vt("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Kt(C,_,"x[j + offset]")};
      let f32scale = ${Kt(C,_,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Kt(C,_,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},E=[{dims:o,dataType:e[0].dataType}];return x&&E.push({dims:y,dataType:1}),w&&E.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:T}},Uf=(e,t)=>{Vd(e.inputs),e.compute(Gd(e.inputs,t,e.outputCount))}}),Fd,Wf,y0=L(()=>{"use strict";ie(),ka(),Ca(),Fd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Wf=e=>{Fd(e.inputs);let t=Xt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Ia(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,a,r],h=[o,l];e.compute(di(h,{activation:""},t,d),{inputs:h})}else e.compute(di(e.inputs,{activation:""},t))}}}),Hd,jd,Kd,qf,Vf,b0=L(()=>{"use strict";ee(),ie(),ke(),ae(),Hd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},jd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,h=e[0].dataType,c=Ie(t.k),f=Ie(d),y=Ie(s),_=o.concat([n,s]),b=n>1&&s/y%2===0?2:1,S=R.size(_)/y/b,x=64,w=[],T=[l,n,a/c],E=R.convertShape(e[1].dims).slice();E.splice(-1,1,d/f),w.push(...Z(T)),w.push(...Z(E)),w.push(...Z(e[2].dims)),e.length===4&&w.push(...Z(R.convertShape(e[3].dims)));let k=[l,n,s/y];w.push(...Z(k));let C=z=>{let $=T.length,B=M("a",e[0].dataType,$,c),N=M("b",12,E.length,f),V=M("scales",e[2].dataType,e[2].dims.length),W=[B,N,V],F=e.length===4?M("zero_points",12,e[3].dims.length):void 0;F&&W.push(F);let ne=k.length,A=j("output",e[0].dataType,ne,y),U=ze(e[0].dataType),J=(()=>{switch(c){case 1:return`array<${U}, 8>`;case 2:return`mat4x2<${U}>`;case 4:return`mat2x4<${U}>`;default:throw new Error(`${c}-component is not supported.`)}})(),te=Math.floor(32/t.bits),Q=Math.floor(te/8),se=()=>{let X="";for(let H=0;H<Q;H++){let ve=H*t.bits*4,De=ve+t.bits;X+=`
          // reuse a data (pass ${H})
            var input_offset${H>0?H:""} = ${H===0?B.indicesToOffset(`${B.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${H>0?H:""}: ${J};
            for (var j${H>0?H:""}: u32 = 0; j${H>0?H:""} < ${8/c}; j${H>0?H:""}++) {
              a_data${H>0?H:""}[j${H>0?H:""}] = ${B.getByOffset(`input_offset${H>0?H:""}`)};
              input_offset${H>0?H:""}++;
            }
          `;for(let Ee=0;Ee<y*b;Ee++)X+=`
            b_value = ${f===1?`b${Ee}_data`:`b${Ee}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${H*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ve}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${De}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Oe,_e)=>`${U}(b_value_lower[${_e}]), ${U}(b_value_upper[${_e}])`).join(", ")});
            b_dequantized_values = ${c===1?`${J}(${Array.from({length:8},(Oe,_e)=>`(b_quantized_values[${_e}] - ${F?`zero_point${Ee}`:"zero_point"}) * scale${Ee}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${F?`zero_point${Ee}`:"zero_point"}`).join(",")})) * scale${Ee};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Ee/y)}]${y>1?`[${Ee%y}]`:""} += ${Array.from({length:8/c},(Oe,_e)=>`${c===1?`a_data${H>0?H:""}[${_e}] * b_dequantized_values[${_e}]`:`dot(a_data${H>0?H:""}[${_e}], b_dequantized_values[${_e}])`}`).join(" + ")};
          `}return X},P=()=>{let X=`
            var col_index = col * ${y};
            ${F?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${U}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let H=0;H<y*b;H++)X+=`
            let scale${H} = ${V.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${H} = ${U}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return X},Y=()=>{let X=`col_index = col * ${y};`;for(let H=0;H<y*b;H++)X+=`
            let b${H}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return X+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,X};return`
        var<workgroup> workgroup_shared: array<${A.type.value}, ${b*x}>;
        ${z.declareVariables(...W,A)}
        ${z.mainStart([x,1,1])}
          let output_indices = ${A.offsetToIndices(`(global_idx / ${x}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${P()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${Y()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${se()}
                word_offset += ${te/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${A.type.value} = ${A.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${A.setByIndices(`${A.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${f};${y};${b};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:h}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:C}},Kd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,h=e[0].dataType,c=Ie(t.k),f=Ie(d),y=o.concat([n,s]),_=128,b=s%8===0?8:s%4===0?4:1,S=_/b,x=Math.floor(32/t.bits),w=S*f*x,T=w/c,E=w/t.blockSize,k=R.size(y)/b,C=[],z=[l,n,a/c],$=R.convertShape(e[1].dims).slice();$.splice(-1,1,d/f),C.push(...Z(z)),C.push(...Z($)),C.push(...Z(e[2].dims)),e.length===4&&C.push(...Z(R.convertShape(e[3].dims)));let B=[l,n,s];C.push(...Z(B));let N=V=>{let W=z.length,F=M("a",e[0].dataType,W,c),ne=M("b",12,$.length,f),A=M("scales",e[2].dataType,e[2].dims.length),U=[F,ne,A],J=e.length===4?M("zero_points",12,e[3].dims.length):void 0;J&&U.push(J);let te=B.length,Q=j("output",e[0].dataType,te),se=ze(e[0].dataType),P=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${F.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${Q.type.value}, ${S}>, ${b}>;
        ${V.declareVariables(...U,Q)}
        ${V.mainStart([S,b,1])}
          let output_indices = ${Q.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${E} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${F.getByIndices(`${F.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${F.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${E} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${se}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${se}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${A.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ne.getByIndices(`${ne.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let Y=Math.floor(x/8),X="";for(let H=0;H<Y;H++){let ve=H*t.bits*4,De=ve+t.bits;X+=`
              ${P()}
              {${t.bits===2?`
                let half_word = b_value >> ${H*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ve}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${De}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${se}>(${Array.from({length:4},(Ee,Oe)=>`${se}(b_value_lower[${Oe}]), ${se}(b_value_upper[${Oe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${se}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ee,Oe)=>`${`dot(a_data${Oe}, b_dequantized_values[${Oe}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return X})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${Q.type.value} = ${Q.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Q.setByIndices(`${Q.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${f};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:N}},qf=(e,t)=>{Hd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Kd(e.inputs,t)):e.compute(jd(e.inputs,t))},Vf=e=>me(e)}),Xd,Zd,Qd,Yd,Jd,ep,tp,rp,Gf,w0=L(()=>{"use strict";ee(),ie(),ae(),Xd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Zd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${K("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${K("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Qd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${K("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${K("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${K("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Yd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${K("uniforms.x_shape",n,t)})) {
                  k = i32(${K("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${K("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Jd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${K("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${K("uniforms.x_shape",n,t)})) {
                  k -= i32(${K("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${K("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ep=(e,t,r)=>{switch(r.mode){case 0:return Zd(e,t,r.pads.length);case 1:return Qd(e,t,r.pads.length);case 2:return Yd(e,t,r.pads.length);case 3:return Jd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},tp=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...Z(e[0].dims,r));let o=["rank"],l=d=>{let h=j("output",e[0].dataType,r.length),c=M("x",e[0].dataType,i.length),f=c.type.value,y=ep(h,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(_).declareVariables(c,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:l}},rp=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)a[Number(o[l])]=Number(r[l]),a[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>a[Number(l)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},Gf=(e,t)=>{Xd(e.inputs);let r=rp(e.inputs,t);e.compute(tp(e.inputs,r),{inputs:[0]})}}),fr,zn,On,An,Rn,ip,np,Dn,Mn,Ff,Hf,Bn,jf,Kf,Nn,Xf,Zf,Qf,Yf,$0=L(()=>{"use strict";Fe(),ee(),ie(),ae(),fr=e=>{if(ye.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},zn=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();ui.adjustPoolAttributes(r,n,s,o,l,d);let h=ui.computePoolOutputShape(r,n,o,l,s,d,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let f=h.slice();return f.push(f.splice(1,1)[0]),[c,i?f:h]},On=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(d+h);a.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];f=!!(b+S),a.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,h)=>d+h);return[a,s,!!l,!1,!1]}},An=(e,t,r,i,n,a,s,o,l,d,h,c)=>{let f=n.format==="NHWC",y=t.type.value,_=j("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",S="",x="",w=r-(f?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let T=r-(f?3:2);c?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${o});
              var pad = 0;
              ${S}
              ${b}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,S=n.pads.length,x="";return d?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${K("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${K("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${K("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${K("uniforms.pads","j - 2u",S)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},Rn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ip=e=>`${Rn(e)};${e.countIncludePad}`,np=e=>`${Rn(e)};${e.storageOrder};${e.dilations}`,Dn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Mn=(e,t,r,i)=>{let[n,a]=zn(t,i,r),s=M("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,c,f,y,_]=On(a,n);h.push(...Z(t.dims,a));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${f};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:h}),getShaderSource:S=>An(S,s,t.dims.length,a.length,n,l,d,0,c,f,y,_)}},Ff=e=>{let t=e.count_include_pad!==0,r=Dn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:ip(i)}},Hf=(e,t)=>{fr(e.inputs),e.compute(Mn("AveragePool",e.inputs[0],!1,t))},Bn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},jf=e=>{let t=e.format;return{format:t,...Bn,cacheKey:t}},Kf=(e,t)=>{fr(e.inputs),e.compute(Mn("GlobalAveragePool",e.inputs[0],!0,t))},Nn=(e,t,r,i)=>{let[n,a]=zn(t,i,r),s=`
      value = max(x_val, value);
    `,o="",l=M("x",t.dataType,t.dims.length),d=["rank"],[h,c,f,y,_]=On(a,n);return h.push(...Z(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${f};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:h}),getShaderSource:b=>An(b,l,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,c,f,y,_)}},Xf=(e,t)=>{fr(e.inputs),e.compute(Nn("MaxPool",e.inputs[0],!1,t))},Zf=e=>{let t=e.storage_order,r=e.dilations,i=Dn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:np(n)}},Qf=e=>{let t=e.format;return{format:t,...Bn,cacheKey:t}},Yf=(e,t)=>{fr(e.inputs),e.compute(Nn("GlobalMaxPool",e.inputs[0],!0,t))}}),ap,sp,Jf,em,v0=L(()=>{"use strict";ee(),ie(),ke(),ae(),ap=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},sp=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),l=i===3||i===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,f=c?l?[Math.ceil(R.size(c.dims)/4)]:c.dims:void 0,y=h.length===0||h.length===1&&h[0]===1,_=y===!1&&h.length===1,b=Ie(o),S=y&&(!l||b===4),x=S?b:1,w=S&&!l?b:1,T=M("input",l?12:i,d.length,w),E=M("scale",s,h.length),k=c?M("zero_point",l?12:i,f.length):void 0,C=j("output",s,a.length,x),z=[T,E];k&&z.push(k);let $=[d,h];c&&$.push(f);let B=[{type:12,data:o/x},{type:12,data:r},{type:12,data:t.blockSize},...Z(...$,a)],N=V=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${V.registerUniforms(W).declareVariables(...z,C)}
      ${V.mainStart()}
          ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${E.getByOffset("0")}`:_?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${E.getByOffset("scale_index")};`:`
            var scale_indices: ${E.type.indices} = output_indices;
            let index = ${E.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${E.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${E.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${k?y?l?`
                let zero_point_input = ${k.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${k.getByOffset("0")}`:_?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${E.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/x/64),y:1,z:1},programUniforms:B})}},Jf=(e,t)=>{ap(e.inputs,t),e.compute(sp(e.inputs,t))},em=e=>me({axis:e.axis,blockSize:e.blockSize})}),op,up,tm,x0=L(()=>{"use strict";Fe(),ee(),ae(),op=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},up=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...Z(a)],l=d=>{let h=j("output",i,a.length),c=h.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${d.registerUniforms(f).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},tm=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ye.webgpu.validateInputContent&&op(t,r,i),e.compute(up(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),lp,dp,rm,im,S0=L(()=>{"use strict";ee(),ie(),ke(),ae(),lp=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},dp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],l=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...Z(e[1].dims,e[2].dims,n)],h=c=>{let f=M("indices",e[1].dataType,e[1].dims.length),y=M("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?zc("output",e[0].dataType,n.length):j("output",e[0].dataType,n.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,y,_)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${lp(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:h}},rm=e=>me({reduction:e.reduction}),im=(e,t)=>{e.compute(dp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),pp,cp,hp,Pn,fp,mp,gp,_p,yp,bp,wp,$p,Ln,vp,xp,Sp,Ep,Tp,nm,am,E0=L(()=>{"use strict";ee(),ie(),ke(),ae(),pp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},cp=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},hp=(e,t,r,i,n,a)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");pp(i,t),t.axes.length>0&&cp(i,t.axes,d).forEach((h,c)=>i[c]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>n.push(Number(h))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Pn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,fp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Pn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Pn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",mp=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",gp=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},_p=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},yp=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},bp=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${K("uniforms.scales","i",i)};
        var roi_low = ${K("uniforms.roi","i",n)};
        var roi_hi = ${K("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${K("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,wp=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${K("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${K("uniforms.roi","i",a)};
          var roi_hi = ${K("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${K("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,$p=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${K("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ln=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",vp=(e,t,r,i,n)=>{let[a,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Ln(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},xp=(e,t,r,i,n,a,s,o,l,d)=>{let h=r.length===2,c=!0,[f,y]=h?[0,1]:c?[2,3]:[1,2],_=e.type.value,b=S=>{let x=S===f?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[S]},
        ${i[S]}, ${r[S]}, ${a[S]}, ${a[S]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[S]} - 1))) {
          return ${l};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${_} = originalIdx + ${_}(i);
          if (${x} < 0 || ${x} >= ${r[S]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${x} = max(0, min(${x}, ${r[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${x})`)};
          data[i + 1] = ${S===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${b(f)};
    ${b(y)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Sp=(e,t,r,i,n)=>{let[a,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Ln(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${s}];
      var height:${h} = originalIndices[${o}];
      var width:${h} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ep=(e,t,r,i,n,a)=>{let s=e.dims,o=gp(a,t.axes,s.length),l=_p(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,T)=>w===0?1:l[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=yp(s,d,t)));let h=j("output",e.dataType,l.length),c=M("input",e.dataType,s.length),f=R.size(l),y=s.length===l.length&&s.every((w,T)=>w===l[T]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=c.type.value,x=w=>`
      ${y?"":`
      ${fp(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${$p(c,s)};
              ${mp(t.nearestMode,r,S)};
              ${wp(c,h,s,l,d.length,o.length,_)};
              `;case"linear":return`
              ${bp(h,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${vp(c,h,s,_,b)}`;if(s.length===3||s.length===5)return`${Sp(c,h,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${xp(c,h,s,l,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(c,h)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...Z(s,l)]})}},Tp=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},nm=(e,t)=>{let r=[],i=[],n=[],a=Tp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");hp(e.inputs,t,a,r,i,n),e.compute(Ep(e.inputs[0],t,a,r,i,n),{inputs:[0]})},am=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return me({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),Ip,kp,sm,T0=L(()=>{"use strict";ee(),ie(),ae(),Ip=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},kp=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=R.size(a),o=a,l=s,d=a.slice(-1)[0],h=i?a.slice(0,-1).concat(1):[],c=!n&&e.length>3,f=e.length>4,y=i&&r>1,_=i&&r>2,b=r>3,S=64,x=Ie(d),w=[{type:12,data:l},{type:12,data:x},{type:12,data:d},{type:1,data:t.epsilon}],T=k=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[M("x",e[0].dataType,e[0].dims,x),M("skip",e[1].dataType,e[1].dims,x),M("gamma",e[2].dataType,e[2].dims,x)];c&&z.push(M("beta",e[3].dataType,e[3].dims,x)),f&&z.push(M("bias",e[4].dataType,e[4].dims,x)),z.push(j("output",e[0].dataType,o,x)),y&&z.push(j("mean_output",1,h)),_&&z.push(j("inv_std_output",1,h)),b&&z.push(j("input_skip_bias_sum",e[0].dataType,o,x));let $=ze(e[0].dataType),B=ze(1,x);return`

      ${k.registerUniforms(C).declareVariables(...z)}
      var<workgroup> sum_shared : array<${B}, ${S}>;
      var<workgroup> sum_squared_shared : array<${B}, ${S}>;

      ${k.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Kt($,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${vt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${vt("square_sum",x)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},E=[{dims:o,dataType:e[0].dataType}];return r>1&&E.push({dims:h,dataType:1}),r>2&&E.push({dims:h,dataType:1}),r>3&&E.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${y};${_};${b}`,inputDependencies:e.map((k,C)=>"type")},getShaderSource:T,getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},sm=(e,t)=>{Ip(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(kp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Cp,mr,zp,Un,Op,Ap,om,um,I0=L(()=>{"use strict";ee(),ie(),ke(),ae(),Cp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},mr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},zp=(e,t)=>{if(e.length>1){let r=mr(e,1),i=mr(e,2),n=mr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),me({starts:r,ends:i,axes:n})}else return t},Un=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},Op=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${K("uniforms.input_shape","i",r.length)};
            let steps_i = ${K("uniforms.steps","i",r.length)};
            let signs_i = ${K("uniforms.signs","i",r.length)};
            let starts_i = ${K("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Ap=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=mr(e,4);a.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((x,w)=>Un(x,w,r,n,a)),o=t.ends.map((x,w)=>Un(x,w,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let x=0;x<r.length;++x)n.includes(x)||(s.splice(x,0,0),o.splice(x,0,r[x]),a.splice(x,0,1));let l=a.map(x=>Math.sign(x));a.forEach((x,w,T)=>{if(x<0){let E=(o[w]-s[w])/x,k=s[w],C=k+E*a[w];s[w]=C,o[w]=k,T[w]=-x}});let d=r.slice(0);n.forEach((x,w)=>{d[x]=Math.ceil((o[x]-s[x])/a[x])});let h={dims:d,dataType:e[0].dataType},c=j("output",e[0].dataType,d.length),f=M("input",e[0].dataType,e[0].dims.length),y=R.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],b=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:a},...Z(e[0].dims,d)],S=x=>`
      ${x.registerUniforms(_).declareVariables(f,c)}
        ${Op(f,c,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},om=(e,t)=>{Cp(e.inputs,t);let r=zp(e.inputs,t);e.compute(Ap(e.inputs,r),{inputs:[0]})},um=e=>{let t=e.starts,r=e.ends,i=e.axes;return me({starts:t,ends:r,axes:i})}}),Rp,Dp,lm,dm,k0=L(()=>{"use strict";ee(),ie(),ke(),xt(),ae(),Rp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Dp=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),a=i.length,s=R.normalizeAxis(t.axis,a),o=s<i.length-1,l,d=[];o?(d=Array.from({length:a},(z,$)=>$),d[s]=a-1,d[a-1]=s,l=e.compute(Ue(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,c=h[a-1],f=n/c,y=Ie(c),_=c/y,b=64;f===1&&(b=256);let S=(z,$)=>$===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:$===2?`max(${z}.x, ${z}.y)`:$===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,x=M("x",l.dataType,l.dims,y),w=j("result",l.dataType,l.dims,y),T=x.type.value,E=ze(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,k=z=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(x,w)}
      ${z.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${E}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${S("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${vt("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:_}]}),getShaderSource:k},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Ue(C,d),{inputs:[C]})},lm=(e,t)=>{Rp(e.inputs),Dp(e,t)},dm=e=>me({axis:e.axis})}),Wn,Mp,Bp,Np,pm,C0=L(()=>{"use strict";ee(),ie(),ae(),Wn=e=>Array.from(e.getBigInt64Array(),Number),Mp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Wn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Bp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Np=(e,t)=>{let r=e[0].dims,i=t??Wn(e[1]),n=Bp(r,i),a=R.size(n),s=e[0].dataType,o=M("input",s,r.length),l=j("output",s,n.length),d=h=>`
      const inputShape = ${o.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(o,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...Z(e[0].dims,n)]}),getShaderSource:d}},pm=e=>{Mp(e.inputs),e.compute(Np(e.inputs),{inputs:[0]})}}),Pp,Lp,cm,z0=L(()=>{"use strict";ee(),ie(),ae(),Pp=(e,t,r,i,n)=>{let a=j("output_data",n,r.length,4),s=M("a_data",t[1].dataType,t[1].dims.length,4),o=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),d,h=(c,f,y)=>`select(${f}, ${c}, ${y})`;if(!i)d=a.setByOffset("global_idx",h(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let c=(f,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,x=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${a.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_b${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${f}[${y}] = ${_}(${h(b,S,x)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Lp=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,o=R.size(t);if(a){let d=Xt.calcShape(Xt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Pp(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Z(i,t,r,s)]})}},cm=e=>{e.compute(Lp(e.inputs))}}),hm,O0=L(()=>{"use strict";Fy(),xa(),Hy(),jy(),Ky(),Xy(),Zy(),t0(),i0(),n0(),a0(),s0(),o0(),u0(),l0(),d0(),p0(),c0(),h0(),f0(),m0(),g0(),_0(),y0(),b0(),Af(),w0(),$0(),v0(),x0(),S0(),va(),E0(),Nf(),T0(),I0(),k0(),Mf(),C0(),xt(),Sa(),z0(),hm=new Map([["Abs",[ah]],["Acos",[sh]],["Acosh",[oh]],["Add",[Wh]],["ArgMax",[th,Yn]],["ArgMin",[eh,Yn]],["Asin",[uh]],["Asinh",[lh]],["Atan",[dh]],["Atanh",[ph]],["Attention",[rh]],["AveragePool",[Hf,Ff]],["BatchNormalization",[ih]],["BiasAdd",[nh]],["BiasSplitGelu",[Uh]],["Cast",[hh,ch]],["Ceil",[mh]],["Clip",[fh]],["Concat",[Qh,Yh]],["Conv",[na,ia]],["ConvTranspose",[lf,uf]],["Cos",[gh]],["Cosh",[_h]],["CumSum",[df,pf]],["DepthToSpace",[cf,hf]],["DequantizeLinear",[Jf,em]],["Div",[qh]],["Einsum",[ff,mf]],["Elu",[yh,wr]],["Equal",[Vh]],["Erf",[bh]],["Exp",[wh]],["Expand",[gf]],["FastGelu",[_f]],["Floor",[$h]],["FusedConv",[na,ia]],["Gather",[bf,yf]],["GatherElements",[Ef,Sf]],["GatherBlockQuantized",[vf,xf]],["GatherND",[wf,$f]],["Gelu",[vh]],["Gemm",[If,Tf]],["GlobalAveragePool",[Kf,jf]],["GlobalMaxPool",[Yf,Qf]],["Greater",[jh]],["GreaterOrEqual",[Xh]],["GridSample",[kf,Cf]],["GroupQueryAttention",[Pf]],["HardSigmoid",[zh,Ch]],["InstanceNormalization",[Lf]],["LayerNormalization",[Uf]],["LeakyRelu",[xh,wr]],["Less",[Kh]],["LessOrEqual",[Zh]],["Log",[Ph]],["MatMul",[Wf]],["MatMulNBits",[qf,Vf]],["MaxPool",[Xf,Zf]],["Mul",[Gh]],["MultiHeadAttention",[Of,zf]],["Neg",[Eh]],["Not",[Sh]],["Pad",[Gf]],["Pow",[Fh]],["QuickGelu",[Lh,wr]],["Range",[tm]],["Reciprocal",[Th]],["ReduceMin",[Xc]],["ReduceMean",[Gc]],["ReduceMax",[Kc]],["ReduceSum",[Qc]],["ReduceProd",[Zc]],["ReduceL1",[Fc]],["ReduceL2",[Hc]],["ReduceLogSum",[Jc]],["ReduceLogSumExp",[jc]],["ReduceSumSquare",[Yc]],["Relu",[Ih]],["Resize",[nm,am]],["RotaryEmbedding",[Bf]],["ScatterND",[im,rm]],["Sigmoid",[kh]],["Sin",[Oh]],["Sinh",[Ah]],["Slice",[om,um]],["SkipLayerNormalization",[sm]],["Split",[Rf,Df]],["Sqrt",[Rh]],["Softmax",[lm,dm]],["Sub",[Hh]],["Tan",[Dh]],["Tanh",[Mh]],["ThresholdedRelu",[Nh,wr]],["Tile",[pm]],["Transpose",[Ac,Rc]],["Where",[cm]]])}),fm,A0=L(()=>{"use strict";Fe(),lt(),ae(),fm=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){et(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ge(e.programInfo.name)}dispose(){}build(e,t){et(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=Oc(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Ge(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),mm={};Qt(mm,{WebGpuBackend:()=>gm});var Up,Wp,qp,gm,R0=L(()=>{"use strict";Fe(),ee(),lt(),Tc(),Vy(),O0(),A0(),Up=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Wp=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Up(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},qp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},gm=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=a=>t.features.has(a)&&r.push(a)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new qp(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Cc(this),this.programManager=new fm(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ya(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;et(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],a=n.kernelId,s=this.kernels.get(a),o=s.kernelType,l=s.kernelName,d=n.programName,h=n.inputTensorViews,c=n.outputTensorViews,f=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let _=Number(f-this.queryTimeBase),b=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(S=>({dims:S.dims,dataType:ut(S.dataType)})),outputsMetadata:c.map(S=>({dims:S.dims,dataType:ut(S.dataType)})),kernelId:a,kernelType:o,kernelName:l,programName:d,startTime:_,endTime:b});else{let S="";h.forEach((w,T)=>{S+=`input[${T}]: [${w.dims}] | ${ut(w.dataType)}, `});let x="";c.forEach((w,T)=>{x+=`output[${T}]: [${w.dims}] | ${ut(w.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${l}|${d}" ${S}${x}start time: ${_} ns, execution time: ${b-_} ns`)}Sr("GPU",`${d}::${f}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ge()}run(e,t,r,i,n,a){et(e.name);let s=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let E=this.gpuDataManager.get(T);if(!E)throw new Error(`no GPU data for input: ${T}`);s.push(E)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),h=r.length===0?o.map((w,T)=>T):r;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let c=[],f=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(h[w])||h[w]<-3||h[w]>=a)throw new Error(`Invalid output index: ${h[w]}`);if(h[w]===-3)continue;let T=h[w]===-1,E=h[w]===-2,k=T||E?n(o[w].dataType,o[w].dims):i(h[w],o[w].dataType,o[w].dims);if(c.push(k),k.data===0)continue;let C=this.gpuDataManager.get(k.data);if(!C)throw new Error(`no GPU data for output: ${k.data}`);if(T&&this.temporaryData.push(C),E){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(C)}f.push(C)}if(s.length!==t.length||f.length!==c.length){if(f.length===0)return Ge(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let w=0,T=[];d.forEach(z=>{let $=typeof z.data=="number"?[z.data]:z.data;if($.length===0)return;let B=z.type===10?2:4,N,V;z.type===10?(V=$.length>4?16:$.length>2?8:$.length*B,N=$.length>4?16:B*$.length):(V=$.length<=2?$.length*B:16,N=16),w=Math.ceil(w/V)*V,T.push(w);let W=z.type===10?8:4;w+=$.length>4?Math.ceil($.length/W)*N:$.length*B});let E=16;w=Math.ceil(w/E)*E;let k=new ArrayBuffer(w);d.forEach((z,$)=>{let B=T[$],N=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(k,B,N.length).set(N);else if(z.type===12)new Uint32Array(k,B,N.length).set(N);else if(z.type===10)new Uint16Array(k,B,N.length).set(N);else if(z.type===1)new Float32Array(k,B,N.length).set(N);else throw new Error(`Unsupported uniform type: ${ut(z.type)}`)});let C=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,k,0,w),this.gpuDataManager.release(C.id),y={offset:0,size:w,buffer:C.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,S=Wp(e,t,b),x=this.programManager.getArtifact(S);if(x||(x=this.programManager.build(e,_),this.programManager.setArtifact(S,x),pe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&x.uniformVariablesInfo){if(d.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${d.length} in program "${x.programInfo.name}".`);for(let w=0;w<d.length;w++){let T=d[w],E=T.type,k=typeof T.data=="number"?1:T.data.length,[C,z]=x.uniformVariablesInfo[w];if(E!==C||k!==z)throw new Error(`Uniform variable ${w} mismatch: expect type ${C} with size ${z}, got type ${E} with size ${k} in program "${x.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(x,s,f,_,y),Ge(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=hm.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Xn(this,e,t);return ba(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),_m={};Qt(_m,{init:()=>ym});var ti,Vp,ym,D0=L(()=>{"use strict";ee(),lt(),ie(),qy(),ti=class bm{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new bm(this.module,this.dataType,this.data,t)}},Vp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*n++,a)),h=Number(e.getValue(i*n++,"*")),c=Number(e.getValue(i*n++,a)),f=[];for(let y=0;y<c;y++)f.push(Number(e.getValue(i*n++,a)));o.push(new ti(e,d,h,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],n=(s,o,l)=>new ti(this.module,o,this.output(s,l),l),a=(s,o)=>{let l=Nt(s,o);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new ti(this.module,s,d,o)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},ym=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(R0(),xr(mm)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,h=!1)=>{if(h)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),c)}},async(o,l,d)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,h)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let c=new Vp(t,s,Number(l));return s.computeKernel(Number(o),c,h)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new kc(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,l,d,h)=>a.ensureTensor(s,o,l,d,h),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),Gp,za,Oa,yt,Fp,qn,ci,Aa,Ra,Vn,Da,Ma,Ba,wm=L(()=>{"use strict";Fe(),Ly(),Uy(),ee(),qt(),fa(),vc(),Gp=(e,t)=>{we()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},za=async e=>{Gp(e.wasm.numThreads,oi(e.logLevel))},Oa=async(e,t)=>{we().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(D0(),xr(_m)).init;t==="webgpu"&&await i("webgpu",we(),e,r),t==="webnn"&&await i("webnn",we(),e)}},yt=new Map,Fp=e=>{let t=we(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&ge("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},qn=(e,t)=>{let r=we(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&ge("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let d=r.HEAPU32[n/4+1],h=[];for(let c=0;c<d;c++){let f=Number(r.getValue(n+8+c*a,"*"));h.push(f!==0?r.UTF8ToString(f):Number(r.getValue(n+8+(c+d)*a,"*")))}return[o,l,h]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},ci=e=>{let t=we(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Aa=async(e,t)=>{let r,i,n=we();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ci(e);let a=0,s=0,o=0,l=[],d=[],h=[];try{if([s,l]=await $c(t),t?.externalData&&n.mountExternalData){let E=[];for(let k of t.externalData){let C=typeof k=="string"?k:k.path;E.push(_a(typeof k=="string"?k:k.data).then(z=>{n.mountExternalData(C,z)}))}await Promise.all(E)}for(let E of t?.executionProviders??[])if((typeof E=="string"?E:E.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof E!="string"){let k=E,C=k?.context,z=k?.gpuDevice,$=k?.deviceType,B=k?.powerPreference;C?n.currentContext=C:z?n.currentContext=await n.webnnCreateMLContext(z):n.currentContext=await n.webnnCreateMLContext({deviceType:$,powerPreference:B})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),n.webgpuOnCreateSession?.(a),a===0&&ge("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[c,f]=Fp(a),y=!!t?.enableGraphCapture,_=[],b=[],S=[],x=[],w=[];for(let E=0;E<c;E++){let[k,C,z]=qn(a,E);k===0&&ge("Can't get an input name."),d.push(k);let $=n.UTF8ToString(k);_.push($),S.push(C===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:ut(C),shape:z})}for(let E=0;E<f;E++){let[k,C,z]=qn(a,E+c);k===0&&ge("Can't get an output name."),h.push(k);let $=n.UTF8ToString(k);b.push($),x.push(C===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:ut(C),shape:z});{if(y&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let B=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[$]??"cpu",N=n.webnnIsGraphOutput;if(B==="cpu"&&N&&N(a,$)){w.push("ml-tensor-cpu-output");continue}if(B!=="cpu"&&B!=="cpu-pinned"&&B!=="gpu-buffer"&&B!=="ml-tensor")throw new Error(`Not supported preferred output location: ${B}.`);if(y&&B!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${B}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(B)}}let T=null;return w.some(E=>E==="gpu-buffer"||E==="ml-tensor"||E==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&ge("Can't create IO binding."),T={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(E=>E==="ml-tensor-cpu-output"?"ml-tensor":E).map(E=>jn(E))}),yt.set(a,[a,d,h,T,y,!1]),[a,_,b,S,x]}catch(c){throw d.forEach(f=>n._OrtFree(f)),h.forEach(f=>n._OrtFree(f)),o!==0&&n._OrtReleaseBinding(o)!==0&&ge("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&ge("Can't release session."),c}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&ge("Can't release session options."),l.forEach(c=>n._free(c)),n.unmountExternalData?.()}},Ra=e=>{let t=we(),r=yt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ge("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(l=>t._OrtFree(l)),a.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&ge("Can't release session."),yt.delete(e)},Vn=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=we(),l=o.PTR_SIZE,d=e[0],h=e[1],c=e[3],f=c,y,_;if(d==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let x=e[2].gpuBuffer;_=Nt(Bt(d),h);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=w(i,a,x,_)}}else if(c==="ml-tensor"){let x=e[2].mlTensor;_=Nt(Bt(d),h);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=w(i,x,Bt(d),h)}else{let x=e[2];if(Array.isArray(x)){_=l*x.length,y=o._malloc(_),r.push(y);for(let w=0;w<x.length;w++){if(typeof x[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(y+w*l,Ye(x[w],r),"*")}}else{let w=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&w&&T){let E=o.UTF8ToString(n);if(w(i,E)||T(i,E)){let k=Bt(d);_=Nt(k,h),f="ml-tensor";let C=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!C||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await C(i,k,h);z($,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),y=$}else _=x.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}else _=x.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}}let b=o.stackSave(),S=o.stackAlloc(4*h.length);try{h.forEach((w,T)=>o.setValue(S+T*l,w,l===4?"i32":"i64"));let x=o._OrtCreateTensor(Bt(d),y,_,S,h.length,jn(f));x===0&&ge(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(x)}finally{o.stackRestore(b)}},Da=async(e,t,r,i,n,a)=>{let s=we(),o=s.PTR_SIZE,l=yt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],h=l[1],c=l[2],f=l[3],y=l[4],_=l[5],b=t.length,S=i.length,x=0,w=[],T=[],E=[],k=[],C=[],z=s.stackSave(),$=s.stackAlloc(b*o),B=s.stackAlloc(b*o),N=s.stackAlloc(S*o),V=s.stackAlloc(S*o);try{[x,w]=wc(a),wt("wasm prepareInputOutputTensor");for(let A=0;A<b;A++)await Vn(r[A],T,k,e,h[t[A]],t[A],y);for(let A=0;A<S;A++)await Vn(n[A],E,k,e,c[i[A]],b+i[A],y);$t("wasm prepareInputOutputTensor");for(let A=0;A<b;A++)s.setValue($+A*o,T[A],"*"),s.setValue(B+A*o,h[t[A]],"*");for(let A=0;A<S;A++)s.setValue(N+A*o,E[A],"*"),s.setValue(V+A*o,c[i[A]],"*");if(f&&!_){let{handle:A,outputPreferredLocations:U,outputPreferredLocationsEncoded:J}=f;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);wt("wasm bindInputsOutputs");for(let te=0;te<b;te++){let Q=t[te];await s._OrtBindInput(A,h[Q],T[te])!==0&&ge(`Can't bind input[${te}] for session=${e}.`)}for(let te=0;te<S;te++){let Q=i[te];n[te]?.[3]?(C.push(E[te]),s._OrtBindOutput(A,c[Q],E[te],0)!==0&&ge(`Can't bind pre-allocated output[${te}] for session=${e}.`)):s._OrtBindOutput(A,c[Q],0,J[Q])!==0&&ge(`Can't bind output[${te}] to ${U[te]} for session=${e}.`)}$t("wasm bindInputsOutputs"),yt.set(e,[d,h,c,f,y,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let W;f?W=await s._OrtRunWithBinding(d,f.handle,S,N,x):W=await s._OrtRun(d,B,$,b,V,S,N,x),W!==0&&ge("failed to call OrtRun().");let F=[],ne=[];wt("wasm ProcessOutputTensor");for(let A=0;A<S;A++){let U=Number(s.getValue(N+A*o,"*"));if(U===E[A]||C.includes(E[A])){F.push(n[A]),U!==E[A]&&s._OrtReleaseTensor(U)!==0&&ge("Can't release tensor.");continue}let J=s.stackSave(),te=s.stackAlloc(4*o),Q=!1,se,P=0;try{s._OrtGetTensorData(U,te,te+o,te+2*o,te+3*o)!==0&&ge(`Can't access output tensor data on index ${A}.`);let Y=o===4?"i32":"i64",X=Number(s.getValue(te,Y));P=s.getValue(te+o,"*");let H=s.getValue(te+o*2,"*"),ve=Number(s.getValue(te+o*3,Y)),De=[];for(let _e=0;_e<ve;_e++)De.push(Number(s.getValue(H+_e*o,Y)));s._OrtFree(H)!==0&&ge("Can't free memory for tensor dims.");let Ee=De.reduce((_e,Te)=>_e*Te,1);se=ut(X);let Oe=f?.outputPreferredLocations[i[A]];if(se==="string"){if(Oe==="gpu-buffer"||Oe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let _e=[];for(let Te=0;Te<Ee;Te++){let Ne=s.getValue(P+Te*o,"*"),Et=s.getValue(P+(Te+1)*o,"*"),Ar=Te===Ee-1?void 0:Et-Ne;_e.push(s.UTF8ToString(Ne,Ar))}F.push([se,De,_e,"cpu"])}else if(Oe==="gpu-buffer"&&Ee>0){let _e=s.jsepGetBuffer;if(!_e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Te=_e(P),Ne=Nt(X,Ee);if(Ne===void 0||!ma(se))throw new Error(`Unsupported data type: ${se}`);Q=!0,F.push([se,De,{gpuBuffer:Te,download:s.jsepCreateDownloader(Te,Ne,se),dispose:()=>{s._OrtReleaseTensor(U)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(Oe==="ml-tensor"&&Ee>0){let _e=s.webnnEnsureTensor,Te=s.webnnIsGraphInputOutputTypeSupported;if(!_e||!Te)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Nt(X,Ee)===void 0||!ga(se))throw new Error(`Unsupported data type: ${se}`);if(!Te(e,se,!1))throw new Error(`preferredLocation "ml-tensor" for ${se} output is not supported by current WebNN Context.`);let Ne=await _e(e,P,X,De,!1);Q=!0,F.push([se,De,{mlTensor:Ne,download:s.webnnCreateMLTensorDownloader(P,se),dispose:()=>{s.webnnReleaseTensorId(P),s._OrtReleaseTensor(U)}},"ml-tensor"])}else if(Oe==="ml-tensor-cpu-output"&&Ee>0){let _e=s.webnnCreateMLTensorDownloader(P,se)(),Te=F.length;Q=!0,ne.push((async()=>{let Ne=[Te,await _e];return s.webnnReleaseTensorId(P),s._OrtReleaseTensor(U),Ne})()),F.push([se,De,[],"cpu"])}else{let _e=hi(se),Te=new _e(Ee);new Uint8Array(Te.buffer,Te.byteOffset,Te.byteLength).set(s.HEAPU8.subarray(P,P+Te.byteLength)),F.push([se,De,Te,"cpu"])}}finally{s.stackRestore(J),se==="string"&&P&&s._free(P),Q||s._OrtReleaseTensor(U)}}f&&!y&&(s._OrtClearBoundOutputs(f.handle)!==0&&ge("Can't clear bound outputs."),yt.set(e,[d,h,c,f,y,!1]));for(let[A,U]of await Promise.all(ne))F[A][2]=U;return $t("wasm ProcessOutputTensor"),F}finally{s.webnnOnRunEnd?.(d),s.stackRestore(z),T.forEach(W=>s._OrtReleaseTensor(W)),E.forEach(W=>s._OrtReleaseTensor(W)),k.forEach(W=>s._free(W)),x!==0&&s._OrtReleaseRunOptions(x),w.forEach(W=>s._free(W))}},Ma=e=>{let t=we(),r=yt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&ge("Can't get an profile file name."),t._OrtFree(n)},Ba=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),bt,Ve,jt,gr,_r,ri,Gn,ii,Rt,Dt,Hp,$m,vm,xm,Sm,Em,Tm,Im,km=L(()=>{"use strict";Fe(),wm(),qt(),ca(),bt=()=>!!ye.wasm.proxy&&typeof document<"u",jt=!1,gr=!1,_r=!1,ii=new Map,Rt=(e,t)=>{let r=ii.get(e);r?r.push(t):ii.set(e,[t])},Dt=()=>{if(jt||!gr||_r||!Ve)throw new Error("worker not ready")},Hp=e=>{switch(e.data.type){case"init-wasm":jt=!1,e.data.err?(_r=!0,Gn[1](e.data.err)):(gr=!0,Gn[0]()),ri&&(URL.revokeObjectURL(ri),ri=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ii.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},$m=async()=>{if(!gr){if(jt)throw new Error("multiple calls to 'initWasm()' detected.");if(_r)throw new Error("previous call to 'initWasm()' failed.");if(jt=!0,bt())return new Promise((e,t)=>{Ve?.terminate(),yc().then(([r,i])=>{try{Ve=i,Ve.onerror=a=>t(a),Ve.onmessage=Hp,Gn=[e,t];let n={type:"init-wasm",in:ye};!n.in.wasm.wasmPaths&&(r||Hn)&&(n.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Ve.postMessage(n),ri=r}catch(n){t(n)}},t)});try{await ha(ye.wasm),await za(ye),gr=!0}catch(e){throw _r=!0,e}finally{jt=!1}}},vm=async e=>{if(bt())return Dt(),new Promise((t,r)=>{Rt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ye}};Ve.postMessage(i)});await Oa(ye,e)},xm=async e=>bt()?(Dt(),new Promise((t,r)=>{Rt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ve.postMessage(i,[e.buffer])})):ci(e),Sm=async(e,t)=>{if(bt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Dt(),new Promise((r,i)=>{Rt("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ve.postMessage(n,a)})}else return Aa(e,t)},Em=async e=>{if(bt())return Dt(),new Promise((t,r)=>{Rt("release",[t,r]);let i={type:"release",in:e};Ve.postMessage(i)});Ra(e)},Tm=async(e,t,r,i,n,a)=>{if(bt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Dt(),new Promise((s,o)=>{Rt("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};Ve.postMessage(d,Ba(l))})}else return Da(e,t,r,i,n,a)},Im=async e=>{if(bt())return Dt(),new Promise((t,r)=>{Rt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ve.postMessage(i)});Ma(e)}}),Fn,jp,Cm,M0=L(()=>{"use strict";Fe(),km(),ee(),pa(),vc(),Fn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jp=e=>{switch(e[3]){case"cpu":return new Je(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ma(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Je.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!ga(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Je.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Cm=class{async fetchModelAndCopyToWasmMemory(e){return xm(await _a(e))}async loadModel(e,t){et();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Sm(r,t),Ge()}async dispose(){return Em(this.sessionId)}async run(e,t,r){et();let i=[],n=[];Object.entries(e).forEach(c=>{let f=c[0],y=c[1],_=this.inputNames.indexOf(f);if(_===-1)throw new Error(`invalid input '${f}'`);i.push(y),n.push(_)});let a=[],s=[];Object.entries(t).forEach(c=>{let f=c[0],y=c[1],_=this.outputNames.indexOf(f);if(_===-1)throw new Error(`invalid output '${f}'`);a.push(y),s.push(_)});let o=i.map((c,f)=>Fn(c,()=>`input "${this.inputNames[n[f]]}"`)),l=a.map((c,f)=>c?Fn(c,()=>`output "${this.outputNames[s[f]]}"`):null),d=await Tm(this.sessionId,n,o,s,l,r),h={};for(let c=0;c<d.length;c++)h[this.outputNames[s[c]]]=a[c]??jp(d[c]);return Ge(),h}startProfiling(){}endProfiling(){Im(this.sessionId)}}}),zm={};Qt(zm,{OnnxruntimeWebAssemblyBackend:()=>oa,initializeFlags:()=>sa,wasmBackend:()=>Om});var sa,oa,Om,B0=L(()=>{"use strict";Fe(),km(),M0(),sa=()=>{(typeof ye.wasm.initTimeout!="number"||ye.wasm.initTimeout<0)&&(ye.wasm.initTimeout=0);let e=ye.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ye.wasm.simd=!1),typeof ye.wasm.proxy!="boolean"&&(ye.wasm.proxy=!1),typeof ye.wasm.trace!="boolean"&&(ye.wasm.trace=!1),typeof ye.wasm.numThreads!="number"||!Number.isInteger(ye.wasm.numThreads)||ye.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ye.wasm.numThreads=1;else{let t=typeof navigator>"u"?vy("node:os").cpus().length:navigator.hardwareConcurrency;ye.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},oa=class{async init(e){sa(),await $m(),await vm(e)}async createInferenceSessionHandler(e,t){let r=new Cm;return await r.loadModel(e,t),r}},Om=new oa});Fe();Fe();Fe();var N0="1.26.0",P0=cc;{let e=(B0(),xr(zm)).wasmBackend;Pt("webgpu",e,5),Pt("webnn",e,5),Pt("cpu",e,10),Pt("wasm",e,10)}Object.defineProperty(ye.versions,"web",{value:N0,enumerable:!0});var Yt={verbose:!1,debug:!1,debugFolder:"out"},fi={mean:[.485,.456,.406],stdDeviation:[.229,.224,.225],maxSideLength:640,minimumAreaThreshold:50,paddingVertical:.4,paddingHorizontal:.6},mi={imageHeight:48,strategy:"per-box",crossLineWidthFactor:1,charactersDictionary:[]},L0={executionProviders:["cpu"],graphOptimizationLevel:"all",enableCpuMemArena:!0,enableMemPattern:!0,executionMode:"sequential",interOpNumThreads:0,intraOpNumThreads:0},Am="opencv",Rm={engine:Am},Ir={model:{},detection:fi,recognition:mi,debugging:Yt,session:L0,processing:Rm};function _i(e,...t){if(!t.length)return e;let r=t.shift();if(gi(e)&&gi(r)){for(let i in r)if(Object.prototype.hasOwnProperty.call(r,i)){if(i==="__proto__"||i==="constructor"||i==="prototype")continue;let n=r[i],a=e[i];gi(n)?((!a||!gi(a))&&(e[i]={}),_i(e[i],n)):n!==void 0&&(e[i]=n)}}return _i(e,...t)}async function Dm(e,t={}){let{timeoutMs:r=3e5,retries:i=2}=t,n;for(let a=0;a<=i;a++)try{let s=await fetch(e,{signal:AbortSignal.timeout(r)});if(!s.ok)throw new Error(`HTTP ${s.status} ${s.statusText}`);return await s.arrayBuffer()}catch(s){n=s,a<i&&await new Promise(o=>setTimeout(o,500*(a+1)))}throw new Error(`Failed to fetch ${e} after ${i+1} attempt(s): ${String(n)}`)}function kr(e){return(typeof e=="string"?e:new TextDecoder("utf-8").decode(e)).split(/\r?\n/)}function gi(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)&&!ArrayBuffer.isView(e)}function Mm(e){return e.reason instanceof Error?e.reason:new DOMException("The batch operation was aborted.","AbortError")}function U0(e){if(Symbol.asyncIterator in e)return e[Symbol.asyncIterator]();let t=e[Symbol.iterator]();return{next:()=>Promise.resolve(t.next()),return:r=>Promise.resolve(t.return?.(r)??{done:!0,value:void 0})}}async function Na(e,t,r,i){let{settle:n,signal:a}=t,s=Math.max(1,Math.floor(t.concurrency));if(a?.aborted)throw Mm(a);let o=0,l=0,d=!1,h=!1,c,f=Array.isArray(e)?e:null,y=f?null:U0(e),_=Promise.resolve(),b=async()=>{let w=_,T;_=new Promise(E=>{T=E}),await w;try{return await y.next()}finally{T()}},S=()=>{d=!0};a?.addEventListener("abort",S,{once:!0});let x=async()=>{for(;!d;){let w,T;if(f){if(o>=f.length)return;T=o++,w=f[T]}else{let E=await b();if(E.done||d)return;T=o++,w=E.value}try{let E=await r(w,T);if(d)return;i({index:T,status:"fulfilled",value:E})}catch(E){if(n)i({index:T,status:"rejected",reason:E});else{d=!0,h=!0,c=E;return}}finally{l++,t.onProgress?.(l,t.total)}}};try{await Promise.all(Array.from({length:s},()=>x()))}finally{a?.removeEventListener("abort",S),await y?.return?.()}if(a?.aborted)throw Mm(a);if(h)throw c}function Bm(){let e=[],t=null,r=!1,i=null,n=()=>{let a=t;t=null,a?.()};return{push(a){e.push(a),n()},close(){r=!0,n()},fail(a){i={error:a},r=!0,n()},async*drain(){for(;;){for(;e.length>0;)yield e.shift();if(i)throw i.error;if(r)return;await new Promise(a=>{t=a})}}}}var Cr=class{constructor(t=10){he(this,"cache",new Map);he(this,"maxSize");this.maxSize=t}get(t){let r=this.cache.get(t);if(r!==void 0)return this.cache.delete(t),this.cache.set(t,r),r}set(t,r){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){let i=this.cache.keys().next().value;i!==void 0&&this.cache.delete(i)}this.cache.set(t,r)}clear(){this.cache.clear()}static generateKey(t){let r=new Uint8Array(t),i=Math.min(r.length,1024),n=0;for(let a=0;a<i;a++)n=(n<<5)-n+r[a],n=n&n;return`${n}_${r.length}`}},Pa=new Cr;var yi=class{constructor(t,r){he(this,"options",Ir);he(this,"detectionSession",null);he(this,"recognitionSession",null);he(this,"detector",null);he(this,"recognitor",null);he(this,"platform");this.platform=t,this.options=_i({},Ir,r),this.options.session=this.options.session||Ir.session}log(t){this.options.debugging?.verbose&&console.log(`[PaddleOcrService:Base] ${t}`)}async recognize(t,r){(!this.detector||!this.recognitor)&&await this.initSessions();try{let i;if(typeof t=="string"){if(!t.startsWith("http")&&!t.startsWith("/"))throw new Error("Invalid image string format. Must be an HTTP URL, an absolute path, ArrayBuffer, or Canvas");i=await this.platform.loadResource(t,t)}else if(t instanceof ArrayBuffer)i=t;else if(typeof t.toBuffer=="function"){let y=t.toBuffer("image/png");i=y.buffer.slice(y.byteOffset,y.byteOffset+y.byteLength)}else{let f=t,b=f.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,f.width,f.height).data;i=b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength)}let n=Cr.generateKey(i);if(!r?.noCache&&!r?.dictionary){let f=Pa.get(n);if(f)return this.log("Using cached OCR result"),r?.flatten?{text:f.text,results:f.lines?f.lines.flat():f.results??[],confidence:f.confidence}:f}let a=[],s=typeof t=="string"||t instanceof ArrayBuffer?await this.platform.canvas.prepareCanvas(i):t;if(a=await this.detector.run(s),a.length===0)return r?.flatten?{text:"",results:[],confidence:0}:{text:"",lines:[],confidence:0};let o=this.options.recognition?.charactersDictionary;if(r?.dictionary){let f="";if(typeof r.dictionary=="string"){let y=await this.platform.loadResource(r.dictionary,r.dictionary);f=new TextDecoder("utf-8").decode(y)}else f=new TextDecoder("utf-8").decode(r.dictionary);o=kr(f)}let l=r?.strategy??this.options.recognition?.strategy??"per-line",d=await this.recognitor.run(s,a,o,l),h=this.groupResultsByLine(d),c=r?.flatten?this.flattenResults(d):h;return!r?.noCache&&!r?.dictionary&&Pa.set(n,c),c}catch(i){let n=i instanceof Error?i:new Error(String(i));throw console.error("recognize: error",n.message,n.stack),i}}async batchRecognize(t,r){let i=r?.settle??!1,n=[];return await Na(t,{concurrency:this.resolveConcurrency(r?.concurrency),settle:i,signal:r?.signal,onProgress:r?.onProgress,total:Array.isArray(t)?t.length:void 0},a=>this.recognize(a,r),a=>{n[a.index]=a}),i?n:n.map(a=>a.status==="fulfilled"?a.value:void 0)}async*batchRecognizeStream(t,r){let i=Bm(),n=(async()=>{try{await Na(t,{concurrency:this.resolveConcurrency(r?.concurrency),settle:r?.settle??!1,signal:r?.signal,onProgress:r?.onProgress,total:Array.isArray(t)?t.length:void 0},a=>this.recognize(a,r),a=>i.push(a)),i.close()}catch(a){i.fail(a)}})();yield*i.drain(),await n}resolveConcurrency(t){return typeof t=="number"&&t>0?Math.floor(t):(this.options.session?.executionProviders??[]).some(n=>{let a=(typeof n=="string"?n:n.name).toLowerCase();return a!=="cpu"&&a!=="wasm"})?1:4}flattenResults(t){if(t.length===0)return{text:"",results:[],confidence:0};let r=t.map(n=>n.text).join(" "),i=t.reduce((n,a)=>n+a.confidence,0)/t.length;return{text:r,results:t,confidence:i}}groupResultsByLine(t){if(t.length===0)return{text:"",lines:[],confidence:0};let r=[],i=[],n=t[0];if(!n)return{text:"",lines:[],confidence:0};let a=n.box.y,s=n.box.height;for(let h of t){let{box:c}=h;Math.abs(c.y-a)<s/2?(i.push(h),s=(s*(i.length-1)+c.height)/i.length):(i.sort((f,y)=>f.box.x-y.box.x),r.push(i),i=[h],a=c.y,s=c.height)}i.length>0&&(i.sort((h,c)=>h.box.x-c.box.x),r.push(i));let o=r.map(h=>h.map(c=>c.text).join(" ")).join(`
`),l=r.reduce((h,c)=>h+c.reduce((f,y)=>f+y.confidence,0),0),d=r.reduce((h,c)=>h+c.length,0);return{text:o,lines:r,confidence:d>0?l/d:0}}};var Nm=new Set(["cpu","wasm"]);function W0(e){return typeof e=="string"?e:e.name}async function Pm(e,t,r,i,n){let a=r??{};try{return await e.InferenceSession.create(t,a)}catch(s){let l=(a.executionProviders??[]).map(W0);if(l.every(_=>Nm.has(_))||l.length===0)throw s;let c=l.find(_=>Nm.has(_))??(l.includes("wasm")?"wasm":"cpu"),f=s instanceof Error?s.message:String(s);i(`executionProviders=${JSON.stringify(l)} failed (${f}); falling back to ["${c}"].`);let y={...a,executionProviders:[c]};return n?.(y),e.InferenceSession.create(t,y)}}function Lm(e,t,r){let i=e,n=t,a=1;return Math.max(n,i)>r&&(a=r/(n>i?n:i),i=Math.round(i*a),n=Math.round(n*a)),{width:i,height:n,ratio:a}}function q0(e,t,r,i,n){let a=Math.round(e.height*i),s=Math.round(e.height*n),o=e.x-s,l=e.y-a;o=Math.max(0,o),l=Math.max(0,l);let d=Math.min(t,e.x+e.width+s),h=Math.min(r,e.y+e.height+a),c=d-o,f=h-l;return{x:o,y:l,width:c,height:f}}function V0(e,t,r,i){let n=e.x/t,a=e.y/t,s=e.width/t,o=e.height/t,l=Math.max(0,Math.round(n)),d=Math.max(0,Math.round(a)),h=Math.min(r-l,Math.round(s)),c=Math.min(i-d,Math.round(o));return{x:l,y:d,width:h,height:c}}function Um(e,t,r,i,n,a,s,o,l){let d=[];return e.iterate(h=>{let c=e.getRect(h);if(c.width*c.height<=s)return;let f=q0(c,t,r,o,l),y=V0(f,i,n,a);y.width>5&&y.height>5&&d.push(y)}),d}function Wm(e,t,r){let i=[];for(let n of e){let{bbox:a}=n,s={x:Math.max(0,a.x0),y:Math.max(0,a.y0),width:a.x1-a.x0,height:a.y1-a.y0};s.x+s.width>t&&(s.width=t-s.x),s.y+s.height>r&&(s.height=r-s.y),s.width>5&&s.height>5&&i.push(s)}return i}var G0=3;function qm(e,t,r,i,n){let o=e.getContext("2d").getImageData(0,0,t,r).data,l=r*t,d=new Float32Array(G0*l),h=i[0]??.485,c=i[1]??.456,f=i[2]??.406,y=n[0]??.229,_=n[1]??.224,b=n[2]??.225,S=1/(255*y),x=1/(255*_),w=1/(255*b),T=h/y,E=c/_,k=f/b,C=l,z=l*2;for(let $=0,B=0;$<l;$++,B+=4){let N=o[B],V=o[B+1],W=o[B+2];d[$]=N*S-T,d[C+$]=V*x-E,d[z+$]=W*w-k}return d}function Vm(e,t,r,i){let n=i(t,r),a=n.getContext("2d"),s=a.createImageData(t,r),o=s.data,l=t*r;for(let d=0;d<l;d++){let h=e[d]||0,c=Math.round(h*255),f=d*4;o[f]=c,o[f+1]=c,o[f+2]=c,o[f+3]=255}return a.putImageData(s,0,0),n}var bi=class{constructor(t,r,i={},n={},a="opencv"){he(this,"options");he(this,"debugging");he(this,"session");he(this,"platform");he(this,"engine");he(this,"lastDetectionCanvas",null);this.platform=t,this.session=r,this.options={...fi,...i},this.debugging={...Yt,...n},a==="opencv"&&!this.platform.imageProcessor?this.engine="canvas-native":this.engine=a}log(t){this.debugging.verbose&&console.log(`[DetectionService] ${t}`)}async run(t){this.log("Starting text detection process");try{let r;this.platform.isCanvas(t)?r=t:this.engine==="opencv"&&this.platform.imageProcessor?r=await this.platform.imageProcessor.prepareCanvas(t):r=await this.platform.canvas.prepareCanvas(t);let i=await this.preprocessDetection(r),n=await this.runInference(i.tensor,i.width,i.height);if(!n)return console.error("Text detection failed (output tensor is null)"),[];let a=this.postprocessDetection(n,i);return this.debugging.debug&&this.debugging.debugFolder&&this.lastDetectionCanvas&&(await this.debugDetectionCanvas(this.lastDetectionCanvas,i.width,i.height),await this.debugDetectedBoxes(r,a)),this.log(`Detected ${a.length} text boxes in image`),a}catch(r){return console.error("Error during text detection:",r instanceof Error?r.message:String(r)),[]}}async preprocessDetection(t){let{width:r,height:i}=t,n=this.options.maxSideLength??640,{width:a,height:s,ratio:o}=Lm(r,i,n),l=Math.ceil(a/32)*32,d=Math.ceil(s/32)*32,h=this.platform.createCanvas(l,d);h.getContext("2d").drawImage(t,0,0,r,i,0,0,a,s);let f=this.options.mean??[.485,.456,.406],y=this.options.stdDeviation??[.229,.224,.225],_=qm(h,l,d,f,y);return this.log(`Detection preprocessed: original(${r}x${i}), model_input(${l}x${d}), resize_ratio: ${o.toFixed(4)}, engine: ${this.engine}`),{tensor:_,width:l,height:d,resizeRatio:o,originalWidth:r,originalHeight:i}}async runInference(t,r,i){let n;try{this.log("Running detection inference..."),n=new this.platform.ort.Tensor("float32",t,[1,3,i,r]);let a={x:n},o=(await this.session.run(a))[this.session.outputNames[0]||"sigmoid_0.tmp_0"];return this.log("Detection inference complete!"),o?o.data:(console.error(`Output tensor ${this.session.outputNames[0]} not found in detection results`),null)}catch(a){throw console.error("Error during model inference:",a instanceof Error?a.message:String(a)),a}finally{n?.dispose()}}postprocessDetection(t,r,i=this.options.minimumAreaThreshold??50,n=this.options.paddingVertical||.4,a=this.options.paddingHorizontal||.6){this.log("Post-processing detection results...");let{width:s,height:o,resizeRatio:l,originalWidth:d,originalHeight:h}=r,c=Vm(t,s,o,this.platform.createCanvas.bind(this.platform));return this.lastDetectionCanvas=c,this.engine==="opencv"&&this.platform.imageProcessor?this.postprocessWithOpenCV(c,s,o,l,d,h,i,n,a):this.postprocessWithCanvasNative(c,l,d,h,i,n,a)}postprocessWithOpenCV(t,r,i,n,a,s,o,l,d){let h=this.platform.imageProcessor,c=new h.ImageProcessor(t);try{c.grayscale().convert({rtype:h.cv.CV_8UC1});let f=new h.Contours(c.toMat(),{mode:h.cv.RETR_LIST,method:h.cv.CHAIN_APPROX_SIMPLE}),y=Um(f,r,i,n,a,s,o,l,d);return f.destroy(),this.log(`Found ${y.length} potential text boxes (opencv)`),y}finally{c.destroy()}}postprocessWithCanvasNative(t,r,i,n,a,s,o){let d=this.platform.canvas.createProcessor(t).grayscale().threshold({thresh:127}).findRegions({foreground:"light",minArea:a,thresh:0,padding:{vertical:s,horizontal:o},scale:1/r}),h=Wm(d,i,n);return this.log(`Found ${h.length} potential text boxes (canvas-native)`),h}async debugDetectionCanvas(t,r,i){let n=this.debugging.debugFolder??"";await this.platform.saveDebugImage(t,"detection-debug",n),this.log(`Probability map visualized and saved to: ${n}`)}async debugDetectedBoxes(t,r){let i=this.platform.isCanvas(t)?t:await this.platform.canvas.prepareCanvas(t),n=i.getContext("2d");for(let s of r){let{x:o,y:l,width:d,height:h}=s;this.platform.canvas.getToolkit().drawLine({ctx:n,x:o,y:l,width:d,height:h})}let a=this.debugging.debugFolder??"";await this.platform.saveDebugImage(i,"boxes-debug",a),this.log(`Boxes visualized and saved to: ${a}`)}};var La=null;function Ua(e){La=e}function We(){if(!La)throw new Error('No canvas platform registered. Import "ppu-ocv" (Node), "ppu-ocv/web" (browser), "ppu-ocv/canvas" (Node canvas-only), "ppu-ocv/canvas-web" (browser canvas-only), or "ppu-ocv/canvas-mobile" (React Native / Skia) to auto-register.');return La}function Gm(e){return typeof e=="object"&&e!==null&&typeof e.getContext=="function"&&typeof e.width=="number"&&typeof e.height=="number"}var wi={createCanvas(e,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(e,t);if(typeof document<"u"){let r=document.createElement("canvas");return r.width=e,r.height=t,r}throw new Error("No canvas implementation available in this environment.")},async loadImage(e){let t;if(e instanceof ArrayBuffer)t=new Blob([e]);else if(typeof e=="string")t=await(await fetch(e)).blob();else throw new Error("loadImage: unsupported source type");let r=await createImageBitmap(t),i=wi.createCanvas(r.width,r.height);return i.getContext("2d").drawImage(r,0,0),r.close(),i},isCanvas(e){return typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas}};var Gt=class Gt{constructor(){he(this,"step",0)}static getInstance(){return Gt._baseInstance||(Gt._baseInstance=new Gt),Gt._baseInstance}crop(t){let{bbox:r,canvas:i}=t,n=We().createCanvas(r.x1-r.x0,r.y1-r.y0);return n.getContext("2d").drawImage(i,r.x0,r.y0,r.x1-r.x0,r.y1-r.y0,0,0,n.width,n.height),n}isDirty(t){let{canvas:r,threshold:i=127.5,majorColorThreshold:n=.97}=t,a=0,s=0,o=this.crop({bbox:{x0:r.width*.1,y0:r.height*.1,x1:r.width*.9,y1:r.height*.9},canvas:r}),d=o.getContext("2d").getImageData(0,0,o.width,o.height).data;for(let c=0;c<d.length;c+=4){let f=d[c],y=d[c+1],_=d[c+2];f>=i&&y>=i&&_>=i?a++:s++}return Math.max(a,s)/(s+a)<n}drawLine(t){let{ctx:r,x:i,y:n,width:a,height:s,lineWidth:o=2,color:l="blue"}=t;r.beginPath(),r.strokeStyle=l,r.lineWidth=o,r.strokeRect(i,n,a,s),r.closePath()}drawContour(t){let{ctx:r,contour:i,strokeStyle:n="red",lineWidth:a=2}=t,s=i.data32S;if(!(s.length<4)){r.strokeStyle=n,r.lineWidth=a,r.beginPath(),r.moveTo(s[0]??0,s[1]??0);for(let o=2;o<s.length;o+=2)r.lineTo(s[o]??0,s[o+1]??0);r.closePath(),r.stroke()}}};he(Gt,"_baseInstance",null);var Jt=Gt;async function Fm(e){return Gm(e)?e:We().loadImage(e)}async function Hm(e){if(e instanceof ArrayBuffer)return e;if(typeof e.toBuffer=="function"){let a=e.toBuffer("image/png"),s=new ArrayBuffer(a.byteLength);return new Uint8Array(s).set(new Uint8Array(a)),s}let t=e.toBlob;if(typeof t=="function")return(await new Promise((s,o)=>{t.call(e,l=>l?s(l):o(new Error("toBlob returned null")),"image/png")})).arrayBuffer();if(typeof e.convertToBlob=="function")return(await e.convertToBlob({type:"image/png"})).arrayBuffer();if(typeof e.toDataURL=="function"){let s=e.toDataURL("image/png").replace(/^data:image\/png;base64,/,""),o=atob(s),l=new ArrayBuffer(o.length),d=new Uint8Array(l);for(let h=0;h<o.length;h++)d[h]=o.charCodeAt(h);return l}let i=e.getContext("2d").getImageData(0,0,e.width,e.height),n=new ArrayBuffer(i.data.byteLength);return new Uint8Array(n).set(new Uint8Array(i.data.buffer,i.data.byteOffset,i.data.byteLength)),n}function jm(e,t,r,i={}){let{foreground:n="light",thresh:a=127,minArea:s=1,maxArea:o=1/0,padding:l,scale:d=1}=i,h=new Uint8Array(t*r),c=[],f=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],y=_=>{let b=e[_]??0;return n==="light"?b>a:b<=a};for(let _=0;_<r;_++)for(let b=0;b<t;b++){let S=_*t+b;if(h[S]||(h[S]=1,!y(S*4)))continue;let x=[S],w=b,T=b,E=_,k=_,C=0;for(;x.length>0;){let z=x.pop();if(z===void 0)break;C++;let $=z%t,B=(z-$)/t;$<w?w=$:$>T&&(T=$),B<E?E=B:B>k&&(k=B);for(let[N,V]of f){let W=$+N,F=B+V;if(W<0||W>=t||F<0||F>=r)continue;let ne=F*t+W;h[ne]||(h[ne]=1,y(ne*4)&&x.push(ne))}}if(C>=s&&C<=o){let z=w,$=E,B=T+1,N=k+1;if(l){let V=N-$,W=Math.round(V*(l.vertical??0)),F=Math.round(V*(l.horizontal??0));z=Math.max(0,z-F),$=Math.max(0,$-W),B=Math.min(t,B+F),N=Math.min(r,N+W)}d!==1&&(z=Math.max(0,Math.round(z*d)),$=Math.max(0,Math.round($*d)),B=Math.round(B*d),N=Math.round(N*d)),c.push({bbox:{x0:z,y0:$,x1:B,y1:N},area:C})}}return c}var er=class{constructor(t){he(this,"_canvas");this._canvas=t}get width(){return this._canvas.width}get height(){return this._canvas.height}resize(t){let{width:r,height:i}=t,n=We().createCanvas(r,i);return n.getContext("2d").drawImage(this._canvas,0,0,r,i),this._canvas=n,this}grayscale(){let{width:t,height:r}=this._canvas,i=this._canvas.getContext("2d").getImageData(0,0,t,r),n=i.data;for(let s=0;s<n.length;s+=4){let o=Math.round(.299*(n[s]??0)+.587*(n[s+1]??0)+.114*(n[s+2]??0));n[s]=o,n[s+1]=o,n[s+2]=o}let a=We().createCanvas(t,r);return a.getContext("2d").putImageData(i,0,0),this._canvas=a,this}convert(t={}){let{alpha:r=1,beta:i=0}=t;if(r===1&&i===0)return this;let{width:n,height:a}=this._canvas,s=this._canvas.getContext("2d").getImageData(0,0,n,a),o=s.data;for(let d=0;d<o.length;d+=4)o[d]=Math.round((o[d]??0)*r+i),o[d+1]=Math.round((o[d+1]??0)*r+i),o[d+2]=Math.round((o[d+2]??0)*r+i);let l=We().createCanvas(n,a);return l.getContext("2d").putImageData(s,0,0),this._canvas=l,this}invert(){let{width:t,height:r}=this._canvas,i=this._canvas.getContext("2d").getImageData(0,0,t,r),n=i.data;for(let s=0;s<n.length;s+=4)n[s]=255-(n[s]??0),n[s+1]=255-(n[s+1]??0),n[s+2]=255-(n[s+2]??0);let a=We().createCanvas(t,r);return a.getContext("2d").putImageData(i,0,0),this._canvas=a,this}threshold(t={}){let{thresh:r=127,maxValue:i=255}=t,{width:n,height:a}=this._canvas,s=this._canvas.getContext("2d").getImageData(0,0,n,a),o=s.data;for(let d=0;d<o.length;d+=4){let c=(o[d]===o[d+1]&&o[d+1]===o[d+2]?o[d]??0:Math.round(.299*(o[d]??0)+.587*(o[d+1]??0)+.114*(o[d+2]??0)))>r?i:0;o[d]=c,o[d+1]=c,o[d+2]=c}let l=We().createCanvas(n,a);return l.getContext("2d").putImageData(s,0,0),this._canvas=l,this}border(t={}){let{size:r=10,color:i="white"}=t,{width:n,height:a}=this._canvas,s=We().createCanvas(n+r*2,a+r*2),o=s.getContext("2d");return o.fillStyle=i,o.fillRect(0,0,s.width,s.height),o.drawImage(this._canvas,r,r),this._canvas=s,this}rotate(t){let{angle:r,cx:i=this._canvas.width/2,cy:n=this._canvas.height/2}=t;if(r===0)return this;let{width:a,height:s}=this._canvas,o=We().createCanvas(a,s),l=o.getContext("2d");return l.save(),l.translate(i,n),l.rotate(-r*Math.PI/180),l.drawImage(this._canvas,-i,-n),l.restore(),this._canvas=o,this}findRegions(t={}){let{width:r,height:i}=this._canvas,n=this._canvas.getContext("2d").getImageData(0,0,r,i).data;return jm(n,r,i,t)}toCanvas(){return this._canvas}static async prepareCanvas(t){return Fm(t)}static async prepareBuffer(t){return Hm(t)}};Ua(wi);var St=class{constructor(){he(this,"pathSeparator","/");he(this,"ort",Tr);he(this,"canvas",{prepareCanvas:t=>er.prepareCanvas(t),createProcessor:t=>new er(t),getToolkit:()=>Jt.getInstance()})}createCanvas(t,r){let i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d",{willReadFrequently:!0}),i}isCanvas(t){return!!(t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas||t&&typeof t.getContext=="function")}async loadResource(t,r){if(t instanceof ArrayBuffer)return t;let i=typeof t=="string"?t:r,n=await fetch(i);if(!n.ok)throw new Error(`Failed to fetch resource from ${i}`);return n.arrayBuffer()}async saveDebugImage(t,r,i){return Promise.resolve()}};typeof window<"u"&&!ye.wasm.wasmPaths&&(ye.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.26.0/dist/");async function Km(){if(typeof navigator>"u")return!1;let e=navigator;if(!e.gpu||typeof e.gpu.requestAdapter!="function")return!1;try{let t=await e.gpu.requestAdapter();return t!=null}catch{return!1}}async function Wa(){return await Km()?["webgpu","wasm"]:["wasm"]}var tr=class extends bi{constructor(t,r={},i={}){super(new St,t,r,i,"canvas-native")}};zr();zr();Fa();function Ha(e){if(e.length===0)return[];let t=[...e].sort((o,l)=>o.box.y-l.box.y||o.box.x-l.box.x),r=[],i=t[0];if(!i)return[];let n=[i],a=i.box.height,s=i.box.height;for(let o=1;o<t.length;o++){let l=t[o],d=t[o-1];if(!l||!d)continue;let h=Math.abs(l.box.y-d.box.y),c=s*.5;h<=c?(n.push(l),a+=l.box.height,s=a/n.length):(n.sort((f,y)=>f.box.x-y.box.x),r.push(n),n=[l],a=l.box.height,s=l.box.height)}return n.length>0&&(n.sort((o,l)=>o.box.x-l.box.x),r.push(n)),r}function ja(e,t,r,i){let n=Math.min(...t.map(_=>_.box.x)),a=Math.min(...t.map(_=>_.box.y)),s=Math.max(...t.map(_=>_.box.x+_.box.width)),o=Math.max(...t.map(_=>_.box.y+_.box.height)),l={x:n,y:a,width:s-n,height:o-a},d=o-a,h=t.reduce((_,b)=>_+Math.round(b.box.width*(d/b.box.height)),0),c=r(h,d),f=c.getContext("2d"),y=0;for(let{box:_}of t){let b=i.getToolkit().crop({bbox:{x0:_.x,y0:_.y,x1:_.x+_.width,y1:_.y+_.height},canvas:e}),S=d/_.height,x=Math.round(_.width*S);f.drawImage(b,0,0,_.width,_.height,y,0,x,d),y+=x}return{mergedCanvas:c,mergedBox:l}}function tg(e,t){if(t.length===1)return[e];let r=t.reduce((o,l)=>o+l,0),i=[...e],n=i.length>0?r/i.length:0,a=[],s=0;for(let o=0;o<t.length;o++){let l=o<t.length-1?Math.round((t[o]??0)/n):i.length-s,d=Math.min(s+l,i.length);a.push(i.slice(s,d).join("")),s=d}return a}function rg(e,t,r,i){let n=[...e].sort((o,l)=>t(l)-t(o)),a=[],s=[];for(let o of n){let l=!1;for(let d=0;d<a.length;d++){let h=a[d],c=s[d];if(h===void 0||c===void 0)continue;let f=i*h.length;if(c+f+t(o)<=r){h.push(o),s[d]=c+t(o),l=!0;break}}l||(a.push([o]),s.push(t(o)))}return a}function ig(e,t,r){if(e.length===1){let o=e[0];return[{text:t.trim(),box:o?.box??{x:0,y:0,width:0,height:0},confidence:r}]}let i=t.trim().split(/\s+/).filter(o=>o.length>0),n=e.reduce((o,l)=>o+l.box.width,0),a=[],s=0;for(let{box:o}of e){if(s>=i.length){a.push({text:"",box:o,confidence:r});continue}let l=o.width/n,d=Math.max(1,Math.round(i.length*l)),h=Math.min(s+d,i.length);a.push({text:i.slice(s,h).join(" "),box:o,confidence:r}),s=h}return a}function ng(e,t,r){return r.getToolkit().crop({bbox:{x0:t.x,y0:t.y,x1:t.x+t.width,y1:t.y+t.height},canvas:e})}async function Ka(e,t,r){let i=t.options.imageHeight??48,n=t.engine==="opencv"?t.platform.imageProcessor:void 0,{imageTensor:a,tensorWidth:s,tensorHeight:o}=await Va(e,i,n,t.platform.canvas.createProcessor.bind(t.platform.canvas)),l;try{l=new t.platform.ort.Tensor("float32",a,[1,3,o,s]);let d=await t.runInference(l),h=r??t.options.charactersDictionary??[];return qa(d,h,s,t.debugging.verbose)}finally{l?.dispose()}}function Xa(e){return[...e].sort((t,r)=>Math.abs(t.box.y-r.box.y)<(t.box.height+r.box.height)/4?t.box.x-r.box.x:t.box.y-r.box.y)}async function ag(e,t,r,i,n){let a=r.debugging.debugFolder?`${r.debugging.debugFolder}${r.platform.pathSeparator}crops`:"";if(r.debugging.debug&&a){let o=r.platform.canvas.getToolkit();"clearOutput"in o&&typeof o.clearOutput=="function"&&o.clearOutput(a)}let s=[];for(let{box:o,index:l}of t){let d=await i(e,o,l,t.length,a,n);d!==null&&s.push(d)}return Xa(s)}async function sg(e,t,r,i){let n=Ha(t),a=[];for(let s of n)if(s.length===1){let o=s[0];if(!o)continue;let{box:l}=o,d=ng(e,l,r.platform.canvas),{text:h,confidence:c}=await Ka(d,r,i);a.push({text:h,box:l,confidence:c})}else{let{mergedCanvas:o}=ja(e,s,r.platform.createCanvas.bind(r.platform),r.platform.canvas),{text:l,confidence:d}=await Ka(o,r,i),h=s.reduce((f,y)=>f+y.box.width,0),c=l.trim().split(/\s+/).filter(f=>f.length>0);if(c.length===0||s.length===0)for(let{box:f}of s)a.push({text:l,box:f,confidence:d});else if(c.length>=s.length){let f=0;for(let y=0;y<s.length;y++){let _=s[y];if(!_)continue;let b=_.box.width/h,S=Math.max(1,Math.round(c.length*b)),x=Math.min(f+S,c.length);a.push({text:c.slice(f,x).join(" "),box:_.box,confidence:d}),f=x}if(f<c.length){let y=a[a.length-1];y&&(y.text+=` ${c.slice(f).join(" ")}`)}}else{for(let{box:f}of s.slice(0,c.length))a.push({text:c.shift()??"",box:f,confidence:d});for(let{box:f}of s.slice(c.length))a.push({text:"",box:f,confidence:d})}}return Xa(a)}async function og(e,t,r,i){let n=Ha(t),a=r.options.imageHeight??48,s=20,o=[];for(let _ of n)if(_.length===1){let b=_[0];if(!b)continue;o.push({canvas:ng(e,b.box,r.platform.canvas),boxes:_})}else{let{mergedCanvas:b}=ja(e,_,r.platform.createCanvas.bind(r.platform),r.platform.canvas);o.push({canvas:b,boxes:_})}let l=o.map(({canvas:_,boxes:b},S)=>{let x=_.width/_.height,w=Math.max(rr,Math.round(a*x));return{canvas:_,boxes:b,resizedWidth:w,originalHeight:_.height,index:S}}),d=Math.max(...l.map(_=>_.resizedWidth)),h=r.options.crossLineWidthFactor??1.5,c=Math.round(d*h),f=rg(l,_=>_.resizedWidth,c,s),y=[];for(let _ of f){let b=[..._].sort((N,V)=>N.index-V.index),S=Math.max(...b.map(N=>N.originalHeight)),x=b.map(N=>{if(N.originalHeight>=S)return N.resizedWidth;let V=S/N.originalHeight;return Math.max(rr,Math.round(N.resizedWidth*V))}),T=x.reduce((N,V)=>N+V,0)+s*(b.length-1),E=r.platform.createCanvas(T,a),k=E.getContext("2d");k.fillStyle="white",k.fillRect(0,0,T,a);let C=0;for(let N=0;N<b.length;N++){let V=b[N],W=x[N];V===void 0||W===void 0||(k.drawImage(V.canvas,0,0,V.canvas.width,V.canvas.height,C,0,W,a),C+=W,N<b.length-1&&(C+=s))}let{text:z,confidence:$}=await Ka(E,r,i),B=tg(z,x);for(let N=0;N<b.length;N++){let V=b[N];V&&y.push(...ig(V.boxes,B[N]??"",$))}}return Xa(y)}var $i=class{constructor(t,r,i={},n={},a="opencv"){he(this,"options");he(this,"debugging");he(this,"session");he(this,"platform");he(this,"engine");this.platform=t,this.session=r,this.options={...mi,...i},this.debugging={...Yt,...n},a==="opencv"&&!this.platform.imageProcessor?this.engine="canvas-native":this.engine=a}log(t){this.debugging.verbose&&console.log(`[RecognitionService] ${t}`)}async run(t,r,i,n="per-line"){this.log("Starting text recognition process");try{let a;this.platform.isCanvas(t)?a=t:this.engine==="opencv"&&this.platform.imageProcessor?a=await this.platform.imageProcessor.prepareCanvas(t):a=await this.platform.canvas.prepareCanvas(t);let s=this.filterValidBoxes(r);if(s.length===0)return[];let o=this.buildContext();switch(n){case"cross-line":return og(a,s,o,i);case"per-line":return sg(a,s,o,i);default:return ag(a,s,o,(l,d,h,c,f,y)=>this.processBox(l,d,h,c,f,y),i)}}catch(a){return console.error("Error during text recognition:",a instanceof Error?a.message:String(a)),[]}}buildContext(){return{platform:this.platform,options:this.options,debugging:this.debugging,engine:this.engine,runInference:t=>this.runInference(t)}}filterValidBoxes(t){return t.map((r,i)=>({box:r,index:i})).filter(({box:r,index:i})=>this.isValidBox(r,i))}async processBox(t,r,i,n,a,s){let o=Date.now();try{let l=this.platform.canvas.getToolkit().crop({bbox:{x0:r.x,y0:r.y,x1:r.x+r.width,y1:r.y+r.height},canvas:t}),d=this.buildContext(),{text:h,confidence:c}=await this.recognizeTextViaContext(l,d,s);if(this.debugging.debug&&a){await this.platform.saveDebugImage(l,`crop_${String(i).padStart(3,"0")}.png`,a);let f=Date.now()-o;this.log(`Box ${i+1}/${n}: [x:${r.x}, y:${r.y}, w:${r.width}, h:${r.height}]
	 \u2192 "${h}" (processed in ${f}ms)
`)}return{text:h,box:r,confidence:c}}catch(l){let d=l instanceof Error?l:new Error(String(l));return console.error(`Error processing box ${i+1}: ${d.message}`,d.stack),null}}async recognizeTextViaContext(t,r,i){let{preprocessImage:n}=await Promise.resolve().then(()=>(Fa(),eg)),{decodeResults:a}=await Promise.resolve().then(()=>(zr(),Ym)),s=r.options.imageHeight??48,o=r.engine==="opencv"?r.platform.imageProcessor:void 0,{imageTensor:l,tensorWidth:d,tensorHeight:h}=await n(t,s,o,r.platform.canvas.createProcessor.bind(r.platform.canvas)),c;try{c=new r.platform.ort.Tensor("float32",l,[1,3,h,d]);let f=await r.runInference(c),y=i??r.options.charactersDictionary??[];return a(f,y,d,this.debugging.verbose)}finally{c?.dispose()}}isValidBox(t,r){return t.width<=0||t.height<=0?(console.warn(`Skipping invalid box ${r+1}: w=${t.width}, h=${t.height}`),!1):!0}async runInference(t){let r={x:t},i=await this.session.run(r),n=Object.keys(i)[0],a=n?i[n]:void 0;if(!a)throw new Error(`Recognition output tensor '${n}' not found. Available keys: ${Object.keys(i)}`);return a}};var ir=class extends $i{constructor(t,r={},i={}){super(new St,t,r,i,"canvas-native")}};var F0={graphOptimizationLevel:"all"},Or=class extends yi{constructor(t){super(new St,t),(this.options.session===void 0||Object.keys(this.options.session).length===0)&&(this.options.session=F0)}async initSessions(){throw new Error("Initialization is handled proactively in PaddleOcrService. Call initialize() instead.")}async _loadResource(t,r){if(t instanceof ArrayBuffer)return this.log("Loading resource from ArrayBuffer"),t;let i=typeof t=="string"?t:r;return this.log(`Fetching resource from URL: ${i}`),Dm(i)}async _resolveSessionExecutionProviders(){let t=this.options.session??{};if(t.executionProviders&&t.executionProviders.length>0){this.log(`Using user-provided executionProviders: ${JSON.stringify(t.executionProviders)}`);return}let r=await Wa();this.options.session={...t,executionProviders:r},this.log(`Resolved executionProviders: ${JSON.stringify(r)}`)}async _createSession(t){return Pm(Tr,t,this.options.session,r=>console.warn(`[PaddleOcrService] ${r}`),r=>this.options.session=r)}async initialize(){try{this.log("Initializing PaddleOcrService (Web)..."),await this._resolveSessionExecutionProviders();let[t,r,i]=await Promise.all([this._loadResource(this.options.model?.detection,gt.detection),this._loadResource(this.options.model?.recognition,gt.recognition),this._loadResource(this.options.model?.charactersDictionary,gt.charactersDictionary)]),[n,a]=await Promise.all([this._createSession(new Uint8Array(t)),this._createSession(new Uint8Array(r))]);this.detectionSession=n,this.recognitionSession=a,this.options.model&&(this.options.model.detection=t),this.options.model&&(this.options.model.recognition=r),this.log(`Detection ONNX model loaded successfully
	input: ${n.inputNames}
	output: ${n.outputNames}`),this.log(`Recognition ONNX model loaded successfully
	input: ${a.inputNames}
	output: ${a.outputNames}`);let s=kr(i);if(s.length===0)throw new Error("Character dictionary is empty or could not be loaded.");this.options.model&&(this.options.model.charactersDictionary=i),this.options.recognition&&(this.options.recognition.charactersDictionary=s),this.log(`Character dictionary loaded with ${s.length} entries.`),this.detector=new tr(n,this.options.detection,this.options.debugging),this.recognitor=new ir(a,this.options.recognition,this.options.debugging),this.options.model&&(this.options.model.detection=void 0),this.options.model&&(this.options.model.recognition=void 0)}catch(t){throw console.error("Failed to initialize PaddleOcrService Web:",t),t}}isInitialized(){return this.detectionSession!==null&&this.recognitionSession!==null}async changeDetectionModel(t){this.log("Changing detection model...");let r=await this._loadResource(t,gt.detection);await this.detectionSession?.release(),this.detectionSession=await this._createSession(new Uint8Array(r)),this.detector=new tr(this.detectionSession,this.options.detection,this.options.debugging),this.options.model&&(this.options.model.detection=r),this.log("Detection model changed successfully.")}async changeRecognitionModel(t){this.log("Changing recognition model...");let r=await this._loadResource(t,gt.recognition);await this.recognitionSession?.release(),this.recognitionSession=await this._createSession(new Uint8Array(r)),this.recognitor=new ir(this.recognitionSession,this.options.recognition,this.options.debugging),this.options.model&&(this.options.model.recognition=r),this.log("Recognition model changed successfully.")}async changeTextDictionary(t){this.log("Changing text dictionary...");let r=await this._loadResource(t,gt.charactersDictionary),i=kr(r);if(i.length===0)throw new Error("Character dictionary is empty or could not be loaded.");this.options.model&&(this.options.model.charactersDictionary=r),this.options.recognition&&(this.options.recognition.charactersDictionary=i),this.log(`Character dictionary changed successfully with ${i.length} entries.`)}async recognize(t,r){return super.recognize(t,r)}async destroy(){await this.detectionSession?.release(),await this.recognitionSession?.release(),this.detectionSession=null,this.recognitionSession=null,this.detector=null,this.recognitor=null}};window.PPUOCR={PaddleOcrService:Or,MODEL_PRESETS:Ki};
/*! Bundled license information:

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.26.0
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
