#!/usr/bin/env sh
sha512sum=$(which gsha512sum || which sha512sum || echo -n "shasum -a 512")
find csrc.nist.gov -name "*.pdf" -o '(' -name "*.txt" -a '!' -name robots.txt ')' |
  parallel "${sha512sum} {}" |
  sort -f -k 2 > csrc.nist.gov.SHA512SUMS
