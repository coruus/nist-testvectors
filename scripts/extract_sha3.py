#!/usr/bin/env python
from __future__ import division, print_function

import re
import sys

from more_itertools import grouper

def parse_state(state):
  vals = []
  lasti = -1
  for qword in state.strip().split('\n'):
    x, y, val = STATE_QWORD.match(qword).groups()
    i = int(x) + int(y) * 5
    if i != lasti + 1:
        raise Exception("Out of order")
    else:
        lasti = i
    vals.append(val)
  return vals


def parse_msg(msg):
  if msg == '(empty message)':
      pass

def state_cinit(name, vals):
    return ('static const uint64_t {name}[25] = {{ {vals} }};\n'
            .format(name=name, vals=', '.join('UINT64_C(0x{})'.format(val) for val in vals)))


def state_python(vals):
    return ('[['
            + '],\n ['.join(', '.join(val[i] for i in range(y, y + 5))
                            for y in range(0, 25, 5))
            + ']]')

def hash_cinit(name, hash_):
  length = len(hash_) // 2
  return ('uint8_t {name}_digest[{length}] = {{ {bytes} }};\n'
          .format(length=length, name=name,
                  bytes=', '.join(('0x' + ''.join(byte)) for byte in grouper(2, hash_))))


MSG = re.compile("Msg as bit string\n(.*)\n")
STATE_IN = re.compile(r"Xor'd state \(as lanes of integers\)\n((.*\n){25})")
STATE_OUT = re.compile(r"State \(as lanes of integers\)\n((.*\n){25})")
HASH = re.compile(r"Hash val is\n(.*)", flags=re.DOTALL)

STATE_QWORD = re.compile(r"\[([0-5]), ([0-5])\] = (.*)")


def parse_kattxt(filename):
  with open(filename) as f:
    s = f.read()
  msg = MSG.search(s).group(1)
  state_in = parse_state(STATE_IN.search(s).group(1))
  state_out = parse_state(STATE_OUT.search(s).group(1))

  hash_ = HASH.search(s).group(1).replace(' ', '').replace('\n', '')

  testname = filename.split('/')[-1].split('.')[0]
  with open('fips202/' + testname + '.h', 'wb') as f:
      f.write(state_cinit('{}_in'.format(testname), state_in))
      f.write(state_cinit('{}_out'.format(testname), state_out))
      f.write(hash_cinit(testname, hash_))

if __name__ == '__main__':
  for filename in sys.argv[1:]:
      parse_kattxt(filename)
