#!/usr/bin/env sh
find csrc.nist.gov -name "SHA3-*.txt" -o -name "SHAKE*_*.txt" | parallel ./scripts/extract_sha3.py
