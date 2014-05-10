#!/usr/bin/env sh
find csrc.nist.gov -iname "*.pdf" | parallel pdftotext -raw -nopgbrk {}
