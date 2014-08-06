#!/usr/bin/env python
from __future__ import division, print_function

from more_itertools import chunked
import re

RSP_RE = re.compile("Len = (?P<len>[0-9]+)\n"
                    "Msg = (?P<msg>[0-9a-f]+)\n"
                    "MD = (?P<md>[0-9a-f]+)\n")

def ssplit(s, length=64):
  return ' +\n      '.join('"' + ''.join(chunk) + '"' for chunk in chunked(s, length))

print("func testShaByteKats() {\n"
      "  var sha;\n\n")
for sha in ['Sha1', 'Sha224', 'Sha256', 'Sha384', 'Sha512']:
  s = open('./{}ShortMsg.rsp'.format(sha.upper()), 'rb').read().replace('\r\n', '\n')
  #s = open('./{}LongMsg.rsp'.format(sha.upper()), 'rb').read().replace('\r\n', '\n')

  print('''\
  sha = new goog.crypt.{sha}();
'''.format(sha=sha))
  T = '''\
  msg = goog.crypt.hexToByteArray(
      {msg});
  assertTrue(msg.length == {length});
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      {md},
      sha.digest());
'''

  for length, msg, md in RSP_RE.findall(s):
    print(T.format(length=length, msg=ssplit(msg), md=ssplit(md)))
print("}")
