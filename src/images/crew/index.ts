// @index('./*.*', (f, _) => `import ${_.camelCase(f.name)} from "${f.path}${f.ext}";`)
import humza from "./humza.jpeg";
import kenny from "./kenny.jpeg";
import logan from "./logan.jpeg";
import savaughn from "./savaughn.jpeg";
import zach from "./zach.jpeg";
import zec from "./zec.jpeg";
// @endindex

export const crewImages = {
  // @index('./*.*', (f, _) => `${f.name},`)
  humza,
  kenny,
  logan,
  savaughn,
  zach,
  zec,
  // @endindex
};
