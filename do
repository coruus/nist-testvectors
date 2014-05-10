#!/usr/bin/env sh
wget --version >> tool_versions_used &&
parallel --version >> tool_versions_used &&
./scripts/get_pdfs.sh &&
./scripts/extract_text.sh &&
./scripts/hash_csrc.sh &&
./scripts/extract_sha3.sh
