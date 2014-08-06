# NIST textvectors

NIST provides testvectors through (at least) two different processes.
["Crypto Toolkit"](http://csrc.nist.gov/groups/ST/toolkit/) test vectors 
are generally those published during publicatin of a standard. [CAVP](http://csrc.nist.gov/groups/STM/cavp/)
(Cryptographic Algorithm Validation Program) test vectors
are generated for the use of labs that check FIPS-compliance.

This repo contains both, in the same place.


## NIST Crypto Toolkit test-vectors in text

NIST CSRC's Crypto Toolkit helpfully provides test vectors as PDFs.

This repository contains scripts to automate pulling out the test
vectors and dumping them to text files. (And, eventually, parsing
them into useful formats.)

Currently, only the FIPS-202 (draft) test-vectors for the SHA-3 and
SHAKE functions are *parsed*; C initializers are dumped for them in
the `fips202` directory.

### Note

The only official source for test vectors is the
[Crypto Toolkit](http://csrc.nist.gov/groups/ST/toolkit/examples.html).
This repository is not endorsed by NIST.

### Reproducing

#### Dependencies

POSIX-compatible environment and Python >= 2.7.

On OSX/Homebrew, just do:

    brew install wget parallel
    pip install -r requirements.txt

On Ubuntu, do:

    sudo apt-get install wget parallel python-pip
    sudo pip install more_itertools

(But note that Ubuntu 12.04 uses a very old parallel; you'll
need to insert a wrapper in your path that invokes
`parallel --gnu`.)

Or manually install the packages:
  - [wget](http://www.gnu.org/software/wget/)
  - [parallel](http://www.gnu.org/software/parallel/)
  - [more_itertools](https://github.com/erikrose/more-itertools)

You also need either `sha512sum` or `shasum` installed.

Package versions recommended:
  - wget >= 1.15
  - parallel >= 20140322
  - more_itertools >= 2.2

#### Running

To reproduce, have the dependencies in `dependencies.txt` in your
`PATH` and do:
      ./do

(The full set of PDFs this will pull is 78M.)

## Contributing

Pull requests welcome.

Please email me AND file an issue if a parsed test-vector is incorrect.

Let me know if there is an output format which would be more useful
for you.

Approximate guidelines for contributions:
  - Minimal dependencies
  - Shell scripts: no bashisms; only POSIX utilities called with
    POSIX parameters, wget, or parallel
  - Python scripts: Python3-clean
