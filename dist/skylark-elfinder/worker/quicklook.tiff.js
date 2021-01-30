/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
var data=self.data;data.memory&&Tiff.initialize({TOTAL_MEMORY:data.memory});var tiff=new Tiff({buffer:data.data}),image=tiff.readRGBAImage();self.res={image:image,width:tiff.width(),height:tiff.height()};
//# sourceMappingURL=../sourcemaps/worker/quicklook.tiff.js.map
