const test = require('tape')
const vihash = require('.')
const fs = require('fs')

/*
  values confirmed with:

mkdir test
mkdir test/data
cat -n > test/data/empty
echo -n > test/data/empty
echo -n 'a' > test/data/a
echo -n 'b' > test/data/b
echo -n 'hello' > test/data/hello
echo 'with newline' > test/data/with_newline
# evenlonger is written by this code
sha256sum < test/data/empty | tr -d - | hex -d | base64url
sha256sum < test/data/a | tr -d - | hex -d | base64url
sha256sum < test/data/b | tr -d - | hex -d | base64url
sha256sum < test/data/hello | tr -d - | hex -d | base64url
sha256sum < test/data/with_newline | tr -d - | hex -d | base64url
sha256sum < test/data/evenlonger | tr -d - | hex -d | base64url

*/

test(t => {
  t.equal(vihash(''), 'sha256-47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=')
  t.equal(vihash('a'), 'sha256-ypeBEsobvcr6wjGzmiPcTaeG7_gUfE5yuYB3ha_uSLs=')
  t.equal(vihash('b'), 'sha256-PiPoFgA5WUoziU9lZOGxNIu9egCI1CxKy3PurtWcAJ0=')
  t.equal(vihash('hello'), 'sha256-LPJNul-wow4m6DsqxbninhsWHlwfp0JecwQzYpOLmCQ=')
  t.equal(vihash('with newline\n'), 'sha256-xyQkJKfIinZ8qwBd9zAWDbW7654STmDT4TepvHsnDkk=')
  const k = `even
longer with newlines
and maybe some unicode?
☃

♡

♫

¯\_(ツ)_/¯
`
  fs.writeFileSync('test/data/evenlonger', k, 'utf8')
  t.equal(vihash(k),'sha256-30Ah3lP6UaO6UhrnJIYNGwtkoZ97vpFU5jCv0azZi18=')
  t.end()
})
