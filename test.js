const test = require('tape')
const vihash = require('.')

/*
  values confirmed with:

 2008  mkdir test
 2009  mkdir test/data
 2010  cat -n > test/data/empty
 2011  echo -n > test/data/empty
 2012  echo -n 'a' > test/data/a
 2013  echo -n 'b' > test/data/b
 2014  echo -n 'hello' > test/data/hello
 2015  sha256sum < test/data/empty | tr -d - | hex -d | base64url
 2016  sha256sum < test/data/a | tr -d - | hex -d | base64url
 2017  sha256sum < test/data/b | tr -d - | hex -d | base64url
 2018  sha256sum < test/data/hello | tr -d - | hex -d | base64url
*/

test(t => {
  t.equal(vihash(''), 'sha256-47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=')
  t.equal(vihash('a'), 'sha256-ypeBEsobvcr6wjGzmiPcTaeG7_gUfE5yuYB3ha_uSLs=')
  t.equal(vihash('b'), 'sha256-PiPoFgA5WUoziU9lZOGxNIu9egCI1CxKy3PurtWcAJ0=')
  t.equal(vihash('hello'), 'sha256-LPJNul-wow4m6DsqxbninhsWHlwfp0JecwQzYpOLmCQ=')
  t.end()
})
