/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
var type=self.data.type,bin=self.data.bin,hashOpts=self.data.hashOpts;if(self.res={},"md5"===type){let e=new self.SparkMD5.ArrayBuffer;e.append(bin),self.res.hash=e.end()}else{let e=new jsSHA("SHA"+(5===type.length?type:"-"+type).toUpperCase(),"ARRAYBUFFER"),s={};"ke128"===type?s.shakeLen=hashOpts.shake128len:"ke256"===type&&(s.shakeLen=hashOpts.shake256len),e.update(bin),self.res.hash=e.getHash("HEX",s)}
//# sourceMappingURL=../sourcemaps/worker/calcfilehash.js.map
