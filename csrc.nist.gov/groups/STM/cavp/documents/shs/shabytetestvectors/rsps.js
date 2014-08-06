func testShaByteKats() {
  var sha;


  sha = new goog.crypt.Sha1();

  msg = goog.crypt.hexToByteArray(
      '00');
  assertTrue(msg.length == 0);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'da39a3ee5e6b4b0d3255bfef95601890afd80709',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '36');
  assertTrue(msg.length == 8);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c1dfd96eea8cc2b62785275bca38ac261256e278',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '195a');
  assertTrue(msg.length == 16);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0a1c2d555bbe431ad6288af5a54f93e0449c9232',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'df4bd2');
  assertTrue(msg.length == 24);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bf36ed5d74727dfd5d7854ec6b1d49468d8ee8aa',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '549e959e');
  assertTrue(msg.length == 32);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b78bae6d14338ffccfd5d5b5674a275f6ef9c717',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f7fb1be205');
  assertTrue(msg.length == 40);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '60b7d5bb560a1acf6fa45721bd0abb419a841a89',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c0e5abeaea63');
  assertTrue(msg.length == 48);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a6d338459780c08363090fd8fc7d28dc80e8e01f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '63bfc1ed7f78ab');
  assertTrue(msg.length == 56);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '860328d80509500c1783169ebf0ba0c4b94da5e5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7e3d7b3eada98866');
  assertTrue(msg.length == 64);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '24a2c34b976305277ce58c2f42d5092031572520',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9e61e55d9ed37b1c20');
  assertTrue(msg.length == 72);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '411ccee1f6e3677df12698411eb09d3ff580af97',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9777cf90dd7c7e863506');
  assertTrue(msg.length == 80);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '05c915b5ed4e4c4afffc202961f3174371e90b5c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4eb08c9e683c94bea00dfa');
  assertTrue(msg.length == 88);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'af320b42d7785ca6c8dd220463be23a2d2cb5afc',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0938f2e2ebb64f8af8bbfc91');
  assertTrue(msg.length == 96);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9f4e66b6ceea40dcf4b9166c28f1c88474141da9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '74c9996d14e87d3e6cbea7029d');
  assertTrue(msg.length == 104);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e6c4363c0852951991057f40de27ec0890466f01',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '51dca5c0f8e5d49596f32d3eb874');
  assertTrue(msg.length == 112);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '046a7b396c01379a684a894558779b07d8c7da20',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3a36ea49684820a2adc7fc4175ba78');
  assertTrue(msg.length == 120);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd58a262ee7b6577c07228e71ae9b3e04c8abcda9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3552694cdf663fd94b224747ac406aaf');
  assertTrue(msg.length == 128);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a150de927454202d94e656de4c7c0ca691de955d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f216a1cbde2446b1edf41e93481d33e2ed');
  assertTrue(msg.length == 136);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '35a4b39fef560e7ea61246676e1b7e13d587be30',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a3cf714bf112647e727e8cfd46499acd35a6');
  assertTrue(msg.length == 144);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7ce69b1acdce52ea7dbd382531fa1a83df13cae7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '148de640f3c11591a6f8c5c48632c5fb79d3b7');
  assertTrue(msg.length == 152);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b47be2c64124fa9a124a887af9551a74354ca411',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '63a3cc83fd1ec1b6680e9974a0514e1a9ecebb6a');
  assertTrue(msg.length == 160);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8bb8c0d815a9c68a1d2910f39d942603d807fbcc',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '875a90909a8afc92fb7070047e9d081ec92f3d08b8');
  assertTrue(msg.length == 168);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b486f87fb833ebf0328393128646a6f6e660fcb1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '444b25f9c9259dc217772cc4478c44b6feff62353673');
  assertTrue(msg.length == 176);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '76159368f99dece30aadcfb9b7b41dab33688858',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '487351c8a5f440e4d03386483d5fe7bb669d41adcbfdb7');
  assertTrue(msg.length == 184);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'dbc1cb575ce6aeb9dc4ebf0f843ba8aeb1451e89',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '46b061ef132b87f6d3b0ee2462f67d910977da20aed13705');
  assertTrue(msg.length == 192);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd7a98289679005eb930ab75efd8f650f991ee952',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3842b6137bb9d27f3ca5bafe5bbb62858344fe4ba5c41589a5');
  assertTrue(msg.length == 200);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fda26fa9b4874ab701ed0bb64d134f89b9c4cc50',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '44d91d3d465a4111462ba0c7ec223da6735f4f5200453cf132c3');
  assertTrue(msg.length == 208);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c2ff7ccde143c8f0601f6974b1903eb8d5741b6e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cce73f2eabcb52f785d5a6df63c0a105f34a91ca237fe534ee399d');
  assertTrue(msg.length == 216);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '643c9dc20a929608f6caa9709d843ca6fa7a76f4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '664e6e7946839203037a65a12174b244de8cbc6ec3f578967a84f9ce');
  assertTrue(msg.length == 224);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '509ef787343d5b5a269229b961b96241864a3d74',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9597f714b2e45e3399a7f02aec44921bd78be0fefee0c5e9b499488f6e');
  assertTrue(msg.length == 232);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b61ce538f1a1e6c90432b233d7af5b6524ebfbe3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '75c5ad1f3cbd22e8a95fc3b089526788fb4ebceed3e7d4443da6e081a35e');
  assertTrue(msg.length == 240);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5b7b94076b2fc20d6adb82479e6b28d07c902b75',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dd245bffe6a638806667768360a95d0574e1a0bd0d18329fdb915ca484ac0d');
  assertTrue(msg.length == 248);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6066db99fc358952cf7fb0ec4d89cb0158ed91d7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0321794b739418c24e7c2e565274791c4be749752ad234ed56cb0a6347430c6b');
  assertTrue(msg.length == 256);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b89962c94d60f6a332fd60f6f07d4f032a586b76',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4c3dcf95c2f0b5258c651fcd1d51bd10425d6203067d0748d37d1340d9ddda7d' +
      'b3');
  assertTrue(msg.length == 264);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '17bda899c13d35413d2546212bcd8a93ceb0657b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b8d12582d25b45290a6e1bb95da429befcfdbf5b4dd41cdf3311d6988fa17cec' +
      '0723');
  assertTrue(msg.length == 272);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'badcdd53fdc144b8bf2cc1e64d10f676eebe66ed',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6fda97527a662552be15efaeba32a3aea4ed449abb5c1ed8d9bfff544708a425' +
      'd69b72');
  assertTrue(msg.length == 280);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '01b4646180f1f6d2e06bbe22c20e50030322673a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '09fa2792acbb2417e8ed269041cc03c77006466e6e7ae002cf3f1af551e8ce0b' +
      'b506d705');
  assertTrue(msg.length == 288);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '10016dc3a2719f9034ffcc689426d28292c42fc9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5efa2987da0baf0a54d8d728792bcfa707a15798dc66743754406914d1cfe370' +
      '9b1374eaeb');
  assertTrue(msg.length == 296);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9f42fa2bce6ef021d93c6b2d902273797e426535',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2836de99c0f641cd55e89f5af76638947b8227377ef88bfba662e5682babc1ec' +
      '96c6992bc9a0');
  assertTrue(msg.length == 304);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cdf48bacbff6f6152515323f9b43a286e0cb8113',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '42143a2b9e1d0b354df3264d08f7b602f54aad922a3d63006d097f683dc11b90' +
      '178423bff2f7fe');
  assertTrue(msg.length == 312);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b88fb75274b9b0fd57c0045988cfcef6c3ce6554',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'eb60c28ad8aeda807d69ebc87552024ad8aca68204f1bcd29dc5a81dd228b591' +
      'e2efb7c4df75ef03');
  assertTrue(msg.length == 320);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c06d3a6a12d9e8db62e8cff40ca23820d61d8aa7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7de4ba85ec54747cdc42b1f23546b7e490e31280f066e52fac117fd3b0792e4d' +
      'e62d5843ee98c72015');
  assertTrue(msg.length == 328);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6e40f9e83a4be93874bc97cdebb8da6889ae2c7a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e70653637bc5e388ccd8dc44e5eace36f7398f2bac993042b9bc2f4fb3b0ee7e' +
      '23a96439dc01134b8c7d');
  assertTrue(msg.length == 336);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3efc940c312ef0dfd4e1143812248db89542f6a5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dd37bc9f0b3a4788f9b54966f252174c8ce487cbe59c53c22b81bf77621a7ce7' +
      '616dcb5b1e2ee63c2c309b');
  assertTrue(msg.length == 344);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a0cf03f7badd0c3c3c4ea3717f5a4fb7e67b2e56',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5f485c637ae30b1e30497f0fb7ec364e13c906e2813daa34161b7ac4a4fd7a1b' +
      'ddd79601bbd22cef1f57cbc7');
  assertTrue(msg.length == 352);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a544e06f1a07ceb175a51d6d9c0111b3e15e9859',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f6c237fb3cfe95ec8414cc16d203b4874e644cc9a543465cad2dc563488a659e' +
      '8a2e7c981e2a9f22e5e868ffe1');
  assertTrue(msg.length == 360);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '199d986ed991b99a071f450c6b1121a727e8c735',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'da7ab3291553c659873c95913768953c6e526d3a26590898c0ade89ff56fbd11' +
      '0f1436af590b17fed49f8c4b2b1e');
  assertTrue(msg.length == 368);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '33bac6104b0ad6128d091b5d5e2999099c9f05de',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8cfa5fd56ee239ca47737591cba103e41a18acf8e8d257b0dbe8851134a81ff6' +
      'b2e97104b39b76e19da256a17ce52d');
  assertTrue(msg.length == 376);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '76d7db6e18c1f4ae225ce8ccc93c8f9a0dfeb969',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '57e89659d878f360af6de45a9a5e372ef40c384988e82640a3d5e4b76d2ef181' +
      '780b9a099ac06ef0f8a7f3f764209720');
  assertTrue(msg.length == 384);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f652f3b1549f16710c7402895911e2b86a9b2aee',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b91e64235dbd234eea2ae14a92a173ebe835347239cff8b02074416f55c6b60d' +
      'c6ced06ae9f8d705505f0d617e4b29aef9');
  assertTrue(msg.length == 392);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '63faebb807f32be708cf00fc35519991dc4e7f68',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e42a67362a581e8cf3d847502215755d7ad425ca030c4360b0f7ef513e698026' +
      '5f61c9fa18dd9ce668f38dbc2a1ef8f83cd6');
  assertTrue(msg.length == 400);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0e6730bc4a0e9322ea205f4edfff1fffda26af0a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '634db92c22010e1cbf1e1623923180406c515272209a8acc42de05cc2e96a1e9' +
      '4c1f9f6b93234b7f4c55de8b1961a3bf352259');
  assertTrue(msg.length == 408);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b61a3a6f42e8e6604b93196c43c9e84d5359e6fe',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cc6ca3a8cb391cd8a5aff1faa7b3ffbdd21a5a3ce66cfaddbfe8b179e4c860be' +
      '5ec66bd2c6de6a39a25622f9f2fcb3fc05af12b5');
  assertTrue(msg.length == 416);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '32d979ca1b3ed0ed8c890d99ec6dd85e6c16abf4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7c0e6a0d35f8ac854c7245ebc73693731bbbc3e6fab644466de27bb522fcb993' +
      '07126ae718fe8f00742e6e5cb7a687c88447cbc961');
  assertTrue(msg.length == 424);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6f18190bd2d02fc93bce64756575cea36d08b1c3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c5581d40b331e24003901bd6bf244aca9e9601b9d81252bb38048642731f1146' +
      'b8a4c69f88e148b2c8f8c14f15e1d6da57b2daa9991e');
  assertTrue(msg.length == 432);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '68f525feea1d8dbe0117e417ca46708d18d7629a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ec6b4a88713df27c0f2d02e738b69db43abda3921317259c864c1c386e9a5a3f' +
      '533dc05f3beeb2bec2aac8e06db4c6cb3cddcf697e03d5');
  assertTrue(msg.length == 440);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a7272e2308622ff7a339460adc61efd0ea8dabdc',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0321736beba578e90abc1a90aa56157d871618f6de0d764cc8c91e06c68ecd3b' +
      '9de3824064503384db67beb7fe012232dacaef93a000fba7');
  assertTrue(msg.length == 448);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'aef843b86916c16f66c84d83a6005d23fd005c9e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd0a249a97b5f1486721a50d4c4ab3f5d674a0e29925d5bf2678ef6d8d521e456' +
      'bd84aa755328c83fc890837726a8e7877b570dba39579aabdd');
  assertTrue(msg.length == 456);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'be2cd6f380969be59cde2dff5e848a44e7880bd6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c32138531118f08c7dcc292428ad20b45ab27d9517a18445f38b8f0c2795bcdf' +
      'e3ffe384e65ecbf74d2c9d0da88398575326074904c1709ba072');
  assertTrue(msg.length == 464);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e5eb4543deee8f6a5287845af8b593a95a9749a1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b0f4cfb939ea785eabb7e7ca7c476cdd9b227f015d905368ba00ae96b9aaf720' +
      '297491b3921267576b72c8f58d577617e844f9f0759b399c6b064c');
  assertTrue(msg.length == 472);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '534c850448dd486787b62bdec2d4a0b140a1b170',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'bd02e51b0cf2c2b8d204a026b41a66fbfc2ac37ee9411fc449c8d1194a0792a2' +
      '8ee731407dfc89b6dfc2b10faa27723a184afef8fd83def858a32d3f');
  assertTrue(msg.length == 480);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6fbfa6e4edce4cc85a845bf0d228dc39acefc2fa',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e33146b83e4bb671392218da9a77f8d9f5974147182fb95ba662cb66011989c1' +
      '6d9af104735d6f79841aa4d1df276615b50108df8a29dbc9de31f4260d');
  assertTrue(msg.length == 488);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '018872691d9b04e8220e09187df5bc5fa6257cd9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '411c13c75073c1e2d4b1ecf13139ba9656cd35c14201f1c7c6f0eeb58d2dbfe3' +
      '5bfdeccc92c3961cfabb590bc1eb77eac15732fb0275798680e0c7292e50');
  assertTrue(msg.length == 496);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd98d512a35572f8bd20de62e9510cc21145c5bf4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f2c76ef617fa2bfc8a4d6bcbb15fe88436fdc2165d3074629579079d4d5b86f5' +
      '081ab177b4c3f530376c9c924cbd421a8daf8830d0940c4fb7589865830699');
  assertTrue(msg.length == 504);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9f3ea255f6af95c5454e55d7354cabb45352ea0b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '45927e32ddf801caf35e18e7b5078b7f5435278212ec6bb99df884f49b327c64' +
      '86feae46ba187dc1cc9145121e1492e6b06e9007394dc33b7748f86ac3207cfe');
  assertTrue(msg.length == 512);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a70cfbfe7563dd0e665c7c6715a96a8d756950c0',
      sha.digest());

  sha = new goog.crypt.Sha224();

  msg = goog.crypt.hexToByteArray(
      '00');
  assertTrue(msg.length == 0);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '84');
  assertTrue(msg.length == 8);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3cd36921df5d6963e73739cf4d20211e2d8877c19cff087ade9d0e3a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5c7b');
  assertTrue(msg.length == 16);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'daff9bce685eb831f97fc1225b03c275a6c112e2d6e76f5faf7a36e6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '51ca3d');
  assertTrue(msg.length == 24);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2c8959023515476e38388abb43599a29876b4b33d56adc06032de3a2',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6084347e');
  assertTrue(msg.length == 32);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ae57c0a6d49739ba338adfa53bdae063e5c09122b77604780a8eeaa3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '493e14623c');
  assertTrue(msg.length == 40);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7f631f295e024e74552083245ca8f988a3fb65680ae97c3040d2e65c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd729d8cd1631');
  assertTrue(msg.length == 48);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '342e8e6b23c1c6a54910631f098e08e836259c57e49c1b1d023d166d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cbf2061e10faa5');
  assertTrue(msg.length == 56);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3aa702b1b66dc57d7aec3ccdbdfbd88592d7520f843ba5d0fa481168',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5f77b3664823c33e');
  assertTrue(msg.length == 64);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bdf21ff325f754157ccf417f4855360a72e8fd117d28c8fe7da3ea38',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '10713b894de4a734c0');
  assertTrue(msg.length == 72);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '03842600c86f5cd60c3a2147a067cb962a05303c3488b05cb45327bd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '006470d57dad9893dc03');
  assertTrue(msg.length == 80);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c90026cda5ad24115059c62ae9add57793ade445d4742273288bbce7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6f29ca274190400720bba2');
  assertTrue(msg.length == 88);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ac53157947aa4b2a19089182382a4363d182dd8e4ca79cd8571390be',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '17e8556176fcca2addbdde29');
  assertTrue(msg.length == 96);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cc6ad0488db0222066f740557b5758a19b30372b302332295d8c3aff',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dbf163601db9a122a4026824de');
  assertTrue(msg.length == 104);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9849845f4e47e1ece9a1c1e01a0d896ffea61c6c8894a75a11ce5f49',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5e1ef2ad86ceaf5439fe87d2ec9b');
  assertTrue(msg.length == 112);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '223c5d5d4a0116b32cea044f9af0fe44babea1c5ab201502591bcd5f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '65f3b9866fb8002b53cfaf806f702f');
  assertTrue(msg.length == 120);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b1e0806a218d593821fde8e9eacc44ab5287c32209a94f011ab66b75',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b776708ffb91b3515ac46598ab9fa796');
  assertTrue(msg.length == 128);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '427311b1d7ab2488791c4deeb4251d783fe5f9806bfdfb5188c5443d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a4bc10b1a62c96d459fbaf3a5aa3face73');
  assertTrue(msg.length == 136);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd7e6634723ac25cb1879bdb1508da05313530419013fe255967a39e1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9e8f3c6645c1749b55c50d2018ce40dc2427');
  assertTrue(msg.length == 144);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2f5a583bf588c8988a572d128a95bea5ef1b66780a7d4be9c29efc31',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2db6d207c0b7d9117f24d78ee59abf2f316978');
  assertTrue(msg.length == 152);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '35681fce28307cae19522c23cbd4a77969347f7d8ee4a3088ba90ada',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3df5e7f399f6dd61a12a9d4e9464fc4997c1f37b');
  assertTrue(msg.length == 160);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a3e68076e30751085a843a6cbfbf0f3dee63d9c4219c914372e50b28',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '65781d018f27ca0c72a9fa9ab4648ed369646dd3ce');
  assertTrue(msg.length == 168);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd15ef0d872d02da6427b8d0349dea2f204e67133b7365b4b150efc3c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'af48eeddd93fee69d1bd7de428a63986011d10945eaf');
  assertTrue(msg.length == 176);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b89d428ee42e397cf11029ecbb27baddd036c8938f51c8ab56b875ac',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'df2bf0d5f9c994ac69d78baa0d512eceb74d8a047531c1');
  assertTrue(msg.length == 184);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'db8e1ce68c8c6b84d6db755c2b8bf54f3c4b081a881efcddaf303294',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '48d2f20955ea2d13433c20bc0404eb2e6ad79ed28f7cb4c0');
  assertTrue(msg.length == 192);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3617cc3179f8b59adce181eebeed5e2763f62650949224a67e53694b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '218f74a42d3a47ef3b806601fba024b078cbff4e4b85772e0e');
  assertTrue(msg.length == 200);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b5f40b95dcc363b97e9d00b67c5d7c37f17ab563297d2d67a4df20c9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ef55b1e797000b04fcdb9b3021b09327e3b4e269d20cabdf418f');
  assertTrue(msg.length == 208);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '827b223d51240c2e3271c534c19c5637b6fe10083e85bcf06761ef21',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '96df4387dc2c40297043bea36483f65e4eb1e07e93359cb7e68610');
  assertTrue(msg.length == 216);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '98e430a63fcdedafc9419010f7f59a4d816a45b4f973beb62530ff8c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3ec0aa8d30d5ed825b77dc7095f421b1e608158797a377ff8bed641b');
  assertTrue(msg.length == 224);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3108321eb7ff857f6aae69101b937f32a51ea279a6c14ba5232ac8c1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8b0239712039f077ce323b35f4e306787b9b35270096e57735cff45d84');
  assertTrue(msg.length == 232);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a5c740d3ce46bb2e0a048488f2b0605c6d0ca0ea2f382d043d13db97',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '044be30167a9758c46c727921dc4eb4e0dcb965623423e6fdd44e7a4ea52');
  assertTrue(msg.length == 240);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6eb78313c743ea8769d8340f284dda6ded64a1db64392f21abb82c5c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '57f6118bacce47ecc31ce8b0c083d3c9219e0dbe9e4fbea154537c41231acc');
  assertTrue(msg.length == 248);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0dbb53c866d63af44c222c76c825df0e379dcedfb958db03b6fd29a5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'fe1f0fb02c9011f4c8c5905934ed15136771737ce31c5859e67f235fe594f5f6');
  assertTrue(msg.length == 256);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bbeaacc632c2a3db2a9b47f157ab54aa27776c6e74cf0bcaa91b06d5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '14fb01ae9d6015ecb3e56d6ecdfa4bc0533186adf8457f5e4a5c57c687895f3d' +
      'b3');
  assertTrue(msg.length == 264);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '178272c7d7cc71b15074c27e3b7997d4a3ba99626986a1a16cf30030',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ff6c49712f044f4063c14125c0cdfba18ed8b7138453768a45dfa2d82a05f1e8' +
      '4227');
  assertTrue(msg.length == 272);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '403284c888a7280bc8bfc25f0c34182cd378306a21a1404d4e1c40cf',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f900bd7e0117247f97c8fc7a665c76a35f571c3366571d6c4a3ee5d7fb93f1d1' +
      'f726e2');
  assertTrue(msg.length == 280);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '48235b9820d66d8885faabf6a9ede63ba2a21b6177e987a33242373e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '42d38188ac49440cfefb77db975e083e6b22348c4c67f0f8692e88ad140d861d' +
      'c828d595');
  assertTrue(msg.length == 288);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '615344f890e5bcf71b5efe39de1fc942ba1fe30dd9e9146adb6a41bf',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '74fdd7d958b8ae7c2c3c5cff4266dfb2b3b842c9f59ecbbcaff575edcbcda08c' +
      'cd6e08b764');
  assertTrue(msg.length == 296);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '66d7d6c54fc7775a0ba845ba3e11719fa535b9289f20b098c5f7a342',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '934416dd0581e22f2bfbece7bb64afe820451fa21342df7e6f9fb37c4103381a' +
      '1f7cd379bcc4');
  assertTrue(msg.length == 304);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fae8f1aa22def4dbaa814c5b0babdec43394951792c937050d2963a6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '102401c84a716ae72579c6ae79c359ea309ffd95abffae4c61884c03c9e99df7' +
      '7b6c92e492cacb');
  assertTrue(msg.length == 312);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8f34812d57a16ef8a51ad987660c5f8623e0fa9d89846e28d46d14d9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '79bc8fb60f85d15a2386566e3e7314df284533085add1c7bb6ead3ff760c86d5' +
      '633a66404761b544');
  assertTrue(msg.length == 320);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '65c54014cfa30f0bc27d1c6efa96ae8481f4c2505bff272956eab0df',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'db3121ea71294983b185207a9d8de3e484a66c0431bf07c962eb82977c4f834b' +
      '7c3f1e7931a4a7f7a9');
  assertTrue(msg.length == 328);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9316d2f021c2913d63a7e66924c87c161c3cfde0ea7ba07f54772862',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0dd51aa660c5cb4b7f78c46852c1db8707ab451c1367b6187388c8bb3873a1aa' +
      '4210d0414cc6792a29a7');
  assertTrue(msg.length == 336);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '31989e7a62a5132a5070d77250d8904bb82d457dc63469d06b50185e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '487fd2e5b694b7071d3789a258a51e8604dc0d3e8f5d62f39131968e602abe1d' +
      'df6b0278962a512408b553');
  assertTrue(msg.length == 344);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e798683438284626d710877d9eea3a0e02f349fc43acb7f9f8f9e81c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '11183bdebfef58e4da5b1cb73be0d30b20da304d8659d921da2e270fd1462679' +
      '9537e4d12119e809ee97004a');
  assertTrue(msg.length == 352);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '96870657d6cb668be3995aa8bd31df77840d1d1915d72482e83b6b2c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a239de5c8e2644e8f030d94d98f1a30664e6fd961dc2977a9c08be5c31d8de89' +
      '450945a53d79299ea2a1edde7f');
  assertTrue(msg.length == 360);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e99743d4fd26c8800c36a67b6762247c29da6b62794123c59de06dc0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '917c4577aa6b0f9df49999fc1c958cb09b7fd5fc80be949670f03545eb27dcae' +
      'd052076b24f96f5e0f2e2f4527c0');
  assertTrue(msg.length == 368);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7ecd693d4d9cf43929464698efa0bac33c2e1424f816edc769260978',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c3f1e735a6741aa481ad577a98dbac1f03cc80ea0dae1b94db2369ed4e93facd' +
      '29c64e4e77b25038279120bdfa3715');
  assertTrue(msg.length == 376);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '86f0d89d8e14fd8b6606412d71a7a54a347b304ea5d49c208f2266ab',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'de4fbfd553cdf37019f25afa82dc6b9970f4bb1ebbc37f80d3084c88a70722cd' +
      'c523a9e3c2afbad0dc0221bfdec9a2f9');
  assertTrue(msg.length == 384);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4c5262acb4a2a44eaa9bc6757024fb202ef4d5a7a16fa37252a422b5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'db2e2eb636610cf42e9b33433acce1b3b925949f297dd83199f45d2861d64cd9' +
      '10c2db74a60b2089045e22cba0a536137d');
  assertTrue(msg.length == 392);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '16bf4e45bcdc60447c68dcb30e6b08f55ce9f4124a29cf1f9a9d065d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a8e729d336d5d6ac50e1e22f0b193b66e26042fc6459214129875e740ab2b142' +
      '918c138aaf941863ad3b7e6065450613b273');
  assertTrue(msg.length == 400);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '452bf2e5ebfc4e451cc434bc09e2a10032eed0b7627cf55e7e5ed0e2',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd05317d4b535f9d10f739d0c2dedf3ffb090c1ad9d205089b1346693f58273c4' +
      '925c0face57ba45ad6fc687c66a88fc78878be');
  assertTrue(msg.length == 408);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4f03c439e097b51b00e314f675937c4d911505859fb7ab16adc65e44',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '26bb4ed4f0424c60fe4212ff8c955e89e2f553a7d7701be59416d2089af59fa1' +
      '074724e214e919b1e30f33fb78374b4b055bbc9b');
  assertTrue(msg.length == 416);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e7c899e27009d4dc77c2d300f191b757e52c9e7eac4b023bfab2b52a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f015ec83944f03292463c4345fdb1c26d1ea07645facbc9520ae244b6eb191e5' +
      '3dabadb4ac0fb15cda4ed77dfb9e1193abfafb1b81');
  assertTrue(msg.length == 424);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '459e40b3fbd612912f0217c60099379ce077cd02505871b0c9c14e7a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0786706f680c27b792d054faa63f499a8e6b5ddb90502946235bf74c022d772c' +
      '809cb4171bfa4791539aca1abd91900e53ba93ca0efd');
  assertTrue(msg.length == 432);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fadebab7c3d0fb8e97e429b79083087735e4ab385a789521260ef3ad',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '445e8698eeb8accbaac4ffa7d934fffd16014a430ef70f3a9174c6cfe96d1e3f' +
      '6ab1377f4a7212dbb30146dd17d9f470c4dffc45b8e871');
  assertTrue(msg.length == 440);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4c7ae028c0fe61f2a9cada61fae30685b77f04c6442576e912af9fa6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '52839f2f0853a30df14ec897a1914c685c1ac21470d00654c8c37663bfb65fa7' +
      '32dbb694d9dd09ced723b48d8f545846ba168988b61cc724');
  assertTrue(msg.length == 448);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2f755a57674b49d5c25cb37348f35b6fd2de2552c749f2645ba63d20',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5fe8c2072d8900287ccaf07f3f66b0c22acd3e0bb91d9573754e19e373ac3527' +
      '1d8b43443436ac0c162850ef3d7f281409ad29a9bf716c77d1');
  assertTrue(msg.length == 456);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '42909757f6e229f69f04cc7a863c4e70e48c7c3575057b455c959775',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e8064d83f3d643af8718c87e3ccd6a9733685eac61d572a22ab943f232fcb04f' +
      '70858e8984449db14a76bb7eaf2458efc3ed2a32100622c52b7f');
  assertTrue(msg.length == 464);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '1a1d8ed54cb45c97bc970754b43eb93d9eabde4c7b07f76ad82d8ede',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '87c9a517e28d1bb54ad20fca76460efd894d7786e68ee8d746b2f68208682157' +
      'c8ad06cc324ad7a3189e09c6c39d4c768719c0a49a41669f2767d5');
  assertTrue(msg.length == 472);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '605977cf87b9b309bbddaaa64e528ace66b04df9f72c0e7ec88be1da',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '59fdac3b6b32039291801c7d6f46ede8d26dc5b7a192e007116739b617569f25' +
      '23680b3c0b6631af453e55805aa760c6970833ac06963bbc9dbd455e');
  assertTrue(msg.length == 480);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e9f0cb1dc8337e906385892f2348a8ba4412318ecad9b96e3711531f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '30350a4df0b58ff49c0fa09e426fcd7007b290c760c825c1855d9b0023b82caa' +
      '51e3cab4c60cfa61492be50568e5ac0f6db0fd468e39e4536403e3809f');
  assertTrue(msg.length == 488);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '776cc6636c02408fbf65ace73ae80017108b917c16c5a912fd860241',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ef797a0d43c30b4fe1014bdb9420879c2ff845d27e73d55a7df22930c8ece732' +
      '53d8bb265b4ef2ff9c69455cc56ff25229b4126bb7bb26ee2c9ff36187b1');
  assertTrue(msg.length == 496);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f5b9ffb102affac352a4a535a00f89b06c268cf4881d712668906025',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '716944de41710c29b659be10480bb25a351a39e577ee30e8f422d57cf62ad95b' +
      'da39b6e70c61426e33fd84aca84cc7912d5eee45dc34076a5d2323a15c7964');
  assertTrue(msg.length == 504);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '61645ac748db567ac862796b8d06a47afebfa2e1783d5c5f3bcd81e2',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a3310ba064be2e14ad32276e18cd0310c933a6e650c3c754d0243c6c61207865' +
      'b4b65248f66a08edf6e0832689a9dc3a2e5d2095eeea50bd862bac88c8bd318d');
  assertTrue(msg.length == 512);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b2a5586d9cbf0baa999157b4af06d88ae08d7c9faab4bc1a96829d65',
      sha.digest());

  sha = new goog.crypt.Sha256();

  msg = goog.crypt.hexToByteArray(
      '00');
  assertTrue(msg.length == 0);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd3');
  assertTrue(msg.length == 8);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '28969cdfa74a12c82f3bad960b0b000aca2ac329deea5c2328ebc6f2ba9802c1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '11af');
  assertTrue(msg.length == 16);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5ca7133fa735326081558ac312c620eeca9970d1e70a4b95533d956f072d1f98',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b4190e');
  assertTrue(msg.length == 24);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'dff2e73091f6c05e528896c4c831b9448653dc2ff043528f6769437bc7b975c2',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '74ba2521');
  assertTrue(msg.length == 32);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b16aa56be3880d18cd41e68384cf1ec8c17680c45a02b1575dc1518923ae8b0e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c299209682');
  assertTrue(msg.length == 40);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f0887fe961c9cd3beab957e8222494abb969b1ce4c6557976df8b0f6d20e9166',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e1dc724d5621');
  assertTrue(msg.length == 48);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'eca0a060b489636225b4fa64d267dabbe44273067ac679f20820bddc6b6a90ac',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '06e076f5a442d5');
  assertTrue(msg.length == 56);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3fd877e27450e6bbd5d74bb82f9870c64c66e109418baa8e6bbcff355e287926',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5738c929c4f4ccb6');
  assertTrue(msg.length == 64);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '963bb88f27f512777aab6c8b1a02c70ec0ad651d428f870036e1917120fb48bf',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3334c58075d3f4139e');
  assertTrue(msg.length == 72);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '078da3d77ed43bd3037a433fd0341855023793f9afd08b4b08ea1e5597ceef20',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '74cb9381d89f5aa73368');
  assertTrue(msg.length == 80);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '73d6fad1caaa75b43b21733561fd3958bdc555194a037c2addec19dc2d7a52bd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '76ed24a0f40a41221ebfcf');
  assertTrue(msg.length == 88);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '044cef802901932e46dc46b2545e6c99c0fc323a0ed99b081bda4216857f38ac',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9baf69cba317f422fe26a9a0');
  assertTrue(msg.length == 96);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fe56287cd657e4afc50dba7a3a54c2a6324b886becdcd1fae473b769e551a09b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '68511cdb2dbbf3530d7fb61cbc');
  assertTrue(msg.length == 104);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'af53430466715e99a602fc9f5945719b04dd24267e6a98471f7a7869bd3b4313',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'af397a8b8dd73ab702ce8e53aa9f');
  assertTrue(msg.length == 112);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd189498a3463b18e846b8ab1b41583b0b7efc789dad8a7fb885bbf8fb5b45c5c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '294af4802e5e925eb1c6cc9c724f09');
  assertTrue(msg.length == 120);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'dcbaf335360de853b9cddfdafb90fa75567d0d3d58af8db9d764113aef570125',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0a27847cdc98bd6f62220b046edd762b');
  assertTrue(msg.length == 128);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '80c25ec1600587e7f28b18b1b18e3cdc89928e39cab3bc25e4d4a4c139bcedc4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1b503fb9a73b16ada3fcf1042623ae7610');
  assertTrue(msg.length == 136);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd5c30315f72ed05fe519a1bf75ab5fd0ffec5ac1acb0daf66b6b769598594509',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '59eb45bbbeb054b0b97334d53580ce03f699');
  assertTrue(msg.length == 144);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '32c38c54189f2357e96bd77eb00c2b9c341ebebacc2945f97804f59a93238288',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '58e5a3259cb0b6d12c83f723379e35fd298b60');
  assertTrue(msg.length == 152);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9b5b37816de8fcdf3ec10b745428708df8f391c550ea6746b2cafe019c2b6ace',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c1ef39cee58e78f6fcdc12e058b7f902acd1a93b');
  assertTrue(msg.length == 160);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6dd52b0d8b48cc8146cebd0216fbf5f6ef7eeafc0ff2ff9d1422d6345555a142',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9cab7d7dcaec98cb3ac6c64dd5d4470d0b103a810c');
  assertTrue(msg.length == 168);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '44d34809fc60d1fcafa7f37b794d1d3a765dd0d23194ebbe340f013f0c39b613',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ea157c02ebaf1b22de221b53f2353936d2359d1e1c97');
  assertTrue(msg.length == 176);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9df5c16a3f580406f07d96149303d8c408869b32053b726cf3defd241e484957',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'da999bc1f9c7acff32828a73e672d0a492f6ee895c6867');
  assertTrue(msg.length == 184);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '672b54e43f41ee77584bdf8bf854d97b6252c918f7ea2d26bc4097ea53a88f10',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '47991301156d1d977c0338efbcad41004133aefbca6bcf7e');
  assertTrue(msg.length == 192);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'feeb4b2b59fec8fdb1e55194a493d8c871757b5723675e93d3ac034b380b7fc9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2e7ea84da4bc4d7cfb463e3f2c8647057afff3fbececa1d200');
  assertTrue(msg.length == 200);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '76e3acbc718836f2df8ad2d0d2d76f0cfa5fea0986be918f10bcee730df441b9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '47c770eb4549b6eff6381d62e9beb464cd98d341cc1c09981a7a');
  assertTrue(msg.length == 208);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6733809c73e53666c735b3bd3daf87ebc77c72756150a616a194108d71231272',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ac4c26d8b43b8579d8f61c9807026e83e9b586e1159bd43b851937');
  assertTrue(msg.length == 216);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0e6e3c143c3a5f7f38505ed6adc9b48c18edf6dedf11635f6e8f9ac73c39fe9e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0777fc1e1ca47304c2e265692838109e26aab9e5c4ae4e8600df4b1f');
  assertTrue(msg.length == 224);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ffb4fc03e054f8ecbc31470fc023bedcd4a406b9dd56c71da1b660dcc4842c65',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1a57251c431d4e6c2e06d65246a296915071a531425ecf255989422a66');
  assertTrue(msg.length == 232);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c644612cd326b38b1c6813b1daded34448805aef317c35f548dfb4a0d74b8106',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9b245fdad9baeb890d9c0d0eff816efb4ca138610bc7d78cb1a801ed3273');
  assertTrue(msg.length == 240);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c0e29eeeb0d3a7707947e623cdc7d1899adc70dd7861205ea5e5813954fb7957',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '95a765809caf30ada90ad6d61c2b4b30250df0a7ce23b7753c9187f4319ce2');
  assertTrue(msg.length == 248);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a4139b74b102cf1e2fce229a6cd84c87501f50afa4c80feacf7d8cf5ed94f042',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '09fc1accc230a205e4a208e64a8f204291f581a12756392da4b8c0cf5ef02b95');
  assertTrue(msg.length == 256);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4f44c1c7fbebb6f9601829f3897bfd650c56fa07844be76489076356ac1886a4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0546f7b8682b5b95fd32385faf25854cb3f7b40cc8fa229fbd52b16934aab388' +
      'a7');
  assertTrue(msg.length == 264);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b31ad3cd02b10db282b3576c059b746fb24ca6f09fef69402dc90ece7421cbb7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b12db4a1025529b3b7b1e45c6dbc7baa8897a0576e66f64bf3f8236113a6276e' +
      'e77d');
  assertTrue(msg.length == 272);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '1c38bf6bbfd32292d67d1d651fd9d5b623b6ec1e854406223f51d0df46968712',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e68cb6d8c1866c0a71e7313f83dc11a5809cf5cfbeed1a587ce9c2c92e022abc' +
      '1644bb');
  assertTrue(msg.length == 280);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c2684c0dbb85c232b6da4fb5147dd0624429ec7e657991edd95eda37a587269e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4e3d8ac36d61d9e51480831155b253b37969fe7ef49db3b39926f3a00b69a367' +
      '74366000');
  assertTrue(msg.length == 288);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bf9d5e5b5393053f055b380baed7e792ae85ad37c0ada5fd4519542ccc461cf3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '03b264be51e4b941864f9b70b4c958f5355aac294b4b87cb037f11f85f07eb57' +
      'b3f0b89550');
  assertTrue(msg.length == 296);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd1f8bd684001ac5a4b67bbf79f87de524d2da99ac014dec3e4187728f4557471',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd0fefd96787c65ffa7f910d6d0ada63d64d5c4679960e7f06aeb8c70dfef954f' +
      '8e39efdb629b');
  assertTrue(msg.length == 304);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '49ba38db85c2796f85ffd57dd5ec337007414528ae33935b102d16a6b91ba6c1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b7c79d7e5f1eeccdfedf0e7bf43e730d447e607d8d1489823d09e11201a0b125' +
      '8039e7bd4875b1');
  assertTrue(msg.length == 312);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '725e6f8d888ebaf908b7692259ab8839c3248edd22ca115bb13e025808654700',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '64cd363ecce05fdfda2486d011a3db95b5206a19d3054046819dd0d36783955d' +
      '7e5bf8ba18bf738a');
  assertTrue(msg.length == 320);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '32caef024f84e97c30b4a7b9d04b678b3d8a6eb2259dff5b7f7c011f090845f8',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6ac6c63d618eaf00d91c5e2807e83c093912b8e202f78e139703498a79c6067f' +
      '54497c6127a23910a6');
  assertTrue(msg.length == 328);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4bb33e7c6916e08a9b3ed6bcef790aaaee0dcf2e7a01afb056182dea2dad7d63',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd26826db9baeaa892691b68900b96163208e806a1da077429e454fa011840951' +
      'a031327e605ab82ecce2');
  assertTrue(msg.length == 336);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3ac7ac6bed82fdc8cd15b746f0ee7489158192c238f371c1883c9fe90b3e2831',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3f7a059b65d6cb0249204aac10b9f1a4ac9e5868adebbe935a9eb5b9019e1c93' +
      '8bfc4e5c5378997a3947f2');
  assertTrue(msg.length == 344);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bfce809534eefe871273964d32f091fe756c71a7f512ef5f2300bcd57f699e74',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '60ffcb23d6b88e485b920af81d1083f6291d06ac8ca3a965b85914bc2add4054' +
      '4a027fca936bbde8f359051c');
  assertTrue(msg.length == 352);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '1d26f3e04f89b4eaa9dbed9231bb051eef2e8311ad26fe53d0bf0b821eaf7567',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9ecd07b684bb9e0e6692e320cec4510ca79fcdb3a2212c26d90df65db33e692d' +
      '073cc174840db797504e482eef');
  assertTrue(msg.length == 360);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0ffeb644a49e787ccc6970fe29705a4f4c2bfcfe7d19741c158333ff6982cc9c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9d64de7161895884e7fa3d6e9eb996e7ebe511b01fe19cd4a6b3322e80aaf52b' +
      'f6447ed1854e71001f4d54f8931d');
  assertTrue(msg.length == 368);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd048ee1524014adf9a56e60a388277de194c694cc787fc5a1b554ea9f07abfdf',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c4ad3c5e78d917ecb0cbbcd1c481fc2aaf232f7e289779f40e504cc309662ee9' +
      '6fecbd20647ef00e46199fbc482f46');
  assertTrue(msg.length == 376);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '50dbf40066f8d270484ee2ef6632282dfa300a85a8530eceeb0e04275e1c1efd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4eef5107459bddf8f24fc7656fd4896da8711db50400c0164847f692b886ce8d' +
      '7f4d67395090b3534efd7b0d298da34b');
  assertTrue(msg.length == 384);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7c5d14ed83dab875ac25ce7feed6ef837d58e79dc601fb3c1fca48d4464e8b83',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '047d2758e7c2c9623f9bdb93b6597c5e84a0cd34e610014bcb25b49ed05c7e35' +
      '6e98c7a672c3dddcaeb84317ef614d342f');
  assertTrue(msg.length == 392);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7d53eccd03da37bf58c1962a8f0f708a5c5c447f6a7e9e26137c169d5bdd82e4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3d83df37172c81afd0de115139fbf4390c22e098c5af4c5ab4852406510bc0e6' +
      'cf741769f44430c5270fdae0cb849d71cbab');
  assertTrue(msg.length == 400);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '99dc772e91ea02d9e421d552d61901016b9fd4ad2df4a8212c1ec5ba13893ab2',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '33fd9bc17e2b271fa04c6b93c0bdeae98654a7682d31d9b4dab7e6f32cd58f2f' +
      '148a68fbe7a88c5ab1d88edccddeb30ab21e5e');
  assertTrue(msg.length == 408);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cefdae1a3d75e792e8698d5e71f177cc761314e9ad5df9602c6e60ae65c4c267',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '77a879cfa11d7fcac7a8282cc38a43dcf37643cc909837213bd6fd95d956b219' +
      'a1406cbe73c52cd56c600e55b75bc37ea69641bc');
  assertTrue(msg.length == 416);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c99d64fa4dadd4bc8a389531c68b4590c6df0b9099c4d583bc00889fb7b98008',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '45a3e6b86527f20b4537f5af96cfc5ad8777a2dde6cf7511886c5590ece24fc6' +
      '1b226739d207dabfe32ba6efd9ff4cd5db1bd5ead3');
  assertTrue(msg.length == 424);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4d12a849047c6acd4b2eee6be35fa9051b02d21d50d419543008c1d82c427072',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '25362a4b9d74bde6128c4fdc672305900947bc3ada9d9d316ebcf1667ad43631' +
      '89937251f149c72e064a48608d940b7574b17fefc0df');
  assertTrue(msg.length == 432);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f8e4ccab6c979229f6066cc0cb0cfa81bb21447c16c68773be7e558e9f9d798d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3ebfb06db8c38d5ba037f1363e118550aad94606e26835a01af05078533cc25f' +
      '2f39573c04b632f62f68c294ab31f2a3e2a1a0d8c2be51');
  assertTrue(msg.length == 440);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6595a2ef537a69ba8583dfbf7f5bec0ab1f93ce4c8ee1916eff44a93af5749c4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2d52447d1244d2ebc28650e7b05654bad35b3a68eedc7f8515306b496d75f3e7' +
      '3385dd1b002625024b81a02f2fd6dffb6e6d561cb7d0bd7a');
  assertTrue(msg.length == 448);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cfb88d6faf2de3a69d36195acec2e255e2af2b7d933997f348e09f6ce5758360',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4cace422e4a015a75492b3b3bbfbdf3758eaff4fe504b46a26c90dacc119fa90' +
      '50f603d2b58b398cad6d6d9fa922a154d9e0bc4389968274b0');
  assertTrue(msg.length == 456);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4d54b2d284a6794581224e08f675541c8feab6eefa3ac1cfe5da4e03e62f72e4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8620b86fbcaace4ff3c2921b8466ddd7bacae07eefef693cf17762dcabb89a84' +
      '010fc9a0fb76ce1c26593ad637a61253f224d1b14a05addccabe');
  assertTrue(msg.length == 464);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'dba490256c9720c54c612a5bd1ef573cd51dc12b3e7bd8c6db2eabe0aacb846b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd1be3f13febafefc14414d9fb7f693db16dc1ae270c5b647d80da8583587c1ad' +
      '8cb8cb01824324411ca5ace3ca22e179a4ff4986f3f21190f3d7f3');
  assertTrue(msg.length == 472);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '02804978eba6e1de65afdbc6a6091ed6b1ecee51e8bff40646a251de6678b7ef',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f499cc3f6e3cf7c312ffdfba61b1260c37129c1afb391047193367b7b2edeb57' +
      '9253e51d62ba6d911e7b818ccae1553f6146ea780f78e2219f629309');
  assertTrue(msg.length == 480);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0b66c8b4fefebc8dc7da0bbedc1114f228aa63c37d5c30e91ab500f3eadfcec5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6dd6efd6f6caa63b729aa8186e308bc1bda06307c05a2c0ae5a3684e6e460811' +
      '748690dc2b58775967cfcc645fd82064b1279fdca771803db9dca0ff53');
  assertTrue(msg.length == 488);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c464a7bf6d180de4f744bb2fe5dc27a3f681334ffd54a9814650e60260a478e3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6511a2242ddb273178e19a82c57c85cb05a6887ff2014cf1a31cb9ba5df1695a' +
      'adb25c22b3c5ed51c10d047d256b8e3442842ae4e6c525f8d7a5a944af2a');
  assertTrue(msg.length == 496);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd6859c0b5a0b66376a24f56b2ab104286ed0078634ba19112ace0d6d60a9c1ae',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e2f76e97606a872e317439f1a03fcd92e632e5bd4e7cbc4e97f1afc19a16fde9' +
      '2d77cbe546416b51640cddb92af996534dfd81edb17c4424cf1ac4d75aceeb');
  assertTrue(msg.length == 504);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '18041bd4665083001fba8c5411d2d748e8abbfdcdfd9218cb02b68a78e7d4c23',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5a86b737eaea8ee976a0a24da63e7ed7eefad18a101c1211e2b3650c5187c2a8' +
      'a650547208251f6d4237e661c7bf4c77f335390394c37fa1a9f9be836ac28509');
  assertTrue(msg.length == 512);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '42e61e174fbb3897d6dd6cef3dd2802fe67b331953b06114a65c772859dfc1aa',
      sha.digest());

  sha = new goog.crypt.Sha384();

  msg = goog.crypt.hexToByteArray(
      '00');
  assertTrue(msg.length == 0);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da' +
      '274edebfe76f65fbd51ad2f14898b95b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c5');
  assertTrue(msg.length == 8);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b52b72da75d0666379e20f9b4a79c33a329a01f06a2fb7865c9062a28c1de860' +
      'ba432edfd86b4cb1cb8a75b46076e3b1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6ece');
  assertTrue(msg.length == 16);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '53d4773da50d8be4145d8f3a7098ff3691a554a29ae6f652cc7121eb8bc96fd2' +
      '210e06ae2fa2a36c4b3b3497341e70f0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1fa4d5');
  assertTrue(msg.length == 24);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e4ca4663dff189541cd026dcc056626419028774666f5b379b99f4887c7237bd' +
      'bd3bea46d5388be0efc2d4b7989ab2c4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '50e3853d');
  assertTrue(msg.length == 32);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '936a3c3991716ba4c413bc03de20f5ce1c63703b3a5bdb6ab558c9ff70d537e4' +
      '6eb4a15d9f2c85e68d8678de5682695e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4b5fab61e0');
  assertTrue(msg.length == 40);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fb390aa5b70b068a54d6d5127df6a6227becc4d6f891fd3f6068b917a883c9b6' +
      '6f318fddb6384d10be8c7af0d3132f03',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dad95a4b4d37');
  assertTrue(msg.length == 48);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3a2b40f453925bc3ce17d640757ee0e899390b4a8d984d0297c1bae6b60b9f26' +
      '03bf71c323fd171011372335e5702e40',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '121835fe3700b7');
  assertTrue(msg.length == 56);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7bd06a94acba7beb3c5a9b9e8769c3da6691c482d78b1e5c7619b36630eba4e5' +
      '96d11c410a4c87006f4716b6f17bb9a0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'de60275bdafce4b1');
  assertTrue(msg.length == 64);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a3d861d866c1362423eb21c6bec8e44b74ce993c55baa2b6640567560ebecdae' +
      'da07183dbbbd95e0f522caee5ddbdaf0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8d45a55d5ce1f928e6');
  assertTrue(msg.length == 72);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'de76683575a050e2eb5ef95ee201f82416478a1d14bf3d96d1fd4efd52b1a28f' +
      'ed8dfee1830070001dc102a21f761d20',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5c7dde9b3894d73cefe1');
  assertTrue(msg.length == 80);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f31b22115fa7178e78223e06aae870547ab93c6eb3c3910b0ee16e6106db5593' +
      '5d6c0eb820132a2078ece1067efc81c3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '967fa34c07e4945a77051a');
  assertTrue(msg.length == 88);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f8f24d81c4f8f23ecb42d76ed5d2b34c9cbc1f0a97234d1114804b5999759f31' +
      '31c741d5768cc928163503c5f55f594b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2209112ee779bf6d95711105');
  assertTrue(msg.length == 96);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '09c54bf533a26c7447caa5783db2ec7ef5e55752da7f2a2c4e360982a94ec1ca' +
      '2cb6a157d34eed28de978b4145e17ebc',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '20442e1c3f3c88919c39978b78');
  assertTrue(msg.length == 104);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '50bc95b036e0f54d833032a80d45c2ac38b3d29e9c7f72a2eb14781e9241d2a4' +
      'b8e8dba6ee6f4c9e46a758d5712dbd39',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4d43702be4f0530319555d7f1a33');
  assertTrue(msg.length == 112);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '83c8f0bb762801eb26cc5115abebb657c18ff811de500b32b7a568a220a287e9' +
      '00b6c75224fe7429169fbd534cb588e1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5e2a79a544af85f150f7a9d209fd44');
  assertTrue(msg.length == 120);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8051ebc9cabb052cabe07e4023e2140808b77d25b07b96d2e3c22393f71b116c' +
      '1a1e41bf62e57f73ff67871da7c93cf9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e1bb967b5d379a4aa39050274d09bd93');
  assertTrue(msg.length == 128);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3b04f96965ad2fbabd4df25d5d8c95589d069c312ee48539090b2d7b495d2446' +
      'c31eb2b8f8ffb3012bdce065323d9f48',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'bb84a014cd17cc232c98ae8b0709917e9d');
  assertTrue(msg.length == 136);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '85227ae057f2082adf178cae996449100b6a3119e4c415a99e25be6ef20ba8c0' +
      'eae818d60f71c5c83ff2d4c59aa75263',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c3411a0592f1f4fa698815238997db356418');
  assertTrue(msg.length == 144);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '233ac44170d9f452a1a0231622030b15c104ff8ecaa3fccdb9e9e5031fd5b422' +
      '0186a8edd032849c8b93dc183a5c8627',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e831b739e8eb9f787f63c0bb071ddcc9f44cab');
  assertTrue(msg.length == 152);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '91722d4b7aecc211bb8a5480c6855f3b71be4647e1dde0380c23afaa03f45c64' +
      '2606a24506e0317bf51506a483de28ac',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b8a7bbccde46e85f1223237d9353b78c3b19727b');
  assertTrue(msg.length == 160);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '28ba69dc05e6e29de91924114d6c9fc7612f6d2a68b07fa001df059bcf98f7aa' +
      '85389caeb966eaa299c79fe1fd1e40e3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cf391b8aabec6f81288c8b7b92843be23d2e847574');
  assertTrue(msg.length == 168);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '121e5ef697df491a53d7bae121416aa653d759a37db9d0b993031b18a0ef160e' +
      'd98842a291e1ba2cea8b998bc5eee0b1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9d65d88bffed764c286f34894f991600d1a67d622382');
  assertTrue(msg.length == 176);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '84b6e0d6a45329daf47a793418ed5dbde01336b4b9468bb69e5da61c42b691e6' +
      '794e6ed0e8fb1b8e7d4cd3cbaadc520a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'bab6ea46fb717f73f0628132a2b96be383774f1e5d8b6d');
  assertTrue(msg.length == 184);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e969aca1b50e928cad29a0d756457f6de8d7a4e589fd41e53a1e758c3b20f9b8' +
      '1b36bf098a49102fbf869651ca9a98b5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8853b00e869764adb527a07b073c85a24e6c208ba47eef4e');
  assertTrue(msg.length == 192);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '09ad44e85ac190e2d1c3ceb4efbea10ded34d0de961fe4ee268132c48e38660e' +
      '6cf585bfffb8f7b00b0fad1514312b63',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '71fe1ba5d299495d2a56039c64032ec6263d437f55e3f5bedb');
  assertTrue(msg.length == 200);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b41a5d3b4af6d4b9c349e0788538e9a0311086894df7b72cf5aaf4091a7e039e' +
      '4e89cc77a123474e6d1bac438e5e9f88',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4ebe07d03c93e849b4bbfe9f2d2294bf6ccab457f76d3f99cb64');
  assertTrue(msg.length == 208);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'beba464d7065185587fad89bfcea9635bf0ab775c3eb8c147b5b2bd8601db6db' +
      'a0590b50dd1068733f20dc68e004a090',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '918ac0a97ec1632908489e5242ba284bc811aa7197242cf7226fcd');
  assertTrue(msg.length == 216);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c4baf6397a4c6e26492b63a4aab7dffdd0051d8f51938ac24cfd8dae2f7afed1' +
      'a4aa2430d7aeb0be2a72b21a6c50198c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '97477f7272d8a89e38e796c533e9f8a8ae4c92ccaa5d907ed26a1a15');
  assertTrue(msg.length == 224);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd1ad524ebe908d7c5aff50e6cb780fd3a70e87c914a36b93c4e35f5b2cb03850' +
      'b122b480ef8587d4a44f22467f4c480c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '718e0cfe1386cb1421b4799b15788b862bf03a8072bb30d02303888032');
  assertTrue(msg.length == 232);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6d8b8a5bc7ea365ea07f11d3b12e95872a9633684752495cc431636caf1b273a' +
      '35321044af31c974d8575d38711f56c6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd3b07f0fd5d4cd3188aead8dc8338de42056e2e8487eca51ec37ef2daf27');
  assertTrue(msg.length == 240);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'adcc2e954c91db3db2d71d0dee1f030e723bee1a23816fe003ac5dc862a0872e' +
      'f51ff386c18be6ebcaa493f32d1195b9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '695b9efe1809abd5d44eae957ddf9c2cd3c75fae2f522855712a07c639c0b9');
  assertTrue(msg.length == 248);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3bb95d164d94595a1187f77fc26c280ffbb08e74ec7947aa3e5b38bec7c6f811' +
      '5c4d880788c2402dbb3e5b94afd130ee',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'be01e520e69f04174ccf95455b1c81445298264d9adc4958574a52843d95b8ba');
  assertTrue(msg.length == 256);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c5cf54b8e3105b1c7bf7a43754d915b0947f28b6dc94a019182929b5c848e114' +
      '41c9e4e90c7449f4c3cd12954f0f5d99',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '98ef7301f957d73d4e821d5873e8a9b5970fbd219d5cf74ec2291b8381181391' +
      'b4');
  assertTrue(msg.length == 264);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b2564bbb159c3aeadbae0e4a4437f7c5111020e9ad0f4eb508147a961ac22a01' +
      'e1a26df046b14ee5e8a49d9ed22b8cd1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '873ba7f8b71517ec50297b21cf94cdb7a58abbb8829206f0d3f328ff8a6939ac' +
      '1d1d');
  assertTrue(msg.length == 272);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7405fdd557d2b5d4f65e9e85f508d3791495f1820d37cabfc8dbb74d7b41df86' +
      '13d995c612d378dd88337e00951d0280',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e3bd4bc3a60cddd26c20aa86364bd44f4a07f3302825ad0ac127881de4eafbcc' +
      'f988cb');
  assertTrue(msg.length == 280);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '199d5423a0e26438f4cea0081a89e0b6c84ca93f7c3120c8104b51c6edc04e0f' +
      '6a203bb77d59973a7411a0efbe93a09d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8716e4b86deff9da2a8ed55baa43582a7586ec9cd38ac3a933156158cd8e5b78' +
      '87585e91');
  assertTrue(msg.length == 288);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0d2306d9c0a8ce57bc7869b439376c07ce352a41d86ab6cf4a5654cccd5c724f' +
      'e1b62b2c1101c986222f5264ab3fdd66',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f8a503aaa25ef2cea25e31930c3a90db468cd3a862f4a93aab5de2777e82dc90' +
      '5cb03ee23c');
  assertTrue(msg.length == 296);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '773ee958fe93dfd1b73af24d27ddce33144a9249d5a671682a56df30d0bbf92b' +
      '9327130022075185d396de752959304f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '669025175ea917cdd7a71ff4ec0c45bf1246d2a6f031c00b71de701e17939bfe' +
      '92128b21911e');
  assertTrue(msg.length == 304);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9ff6be3f02c7c5d0206f4b944c0843cb68bea8f9b7c8cc0b729503db5005c7cd' +
      '5cb14e3457d8f5eabf733fca9084f16b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b35fb2262edfa14938a0fba03eb2a25d377974b11f556491a781d0ba2b3c0ff3' +
      'e42749925fef8b');
  assertTrue(msg.length == 312);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '835b05a4bf00c2594c3c8c13da6c273a0d9efdea0da72b71b19d326bf5ce968c' +
      '2e577a7d99fc0f985afd23b46423129d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9d86b45df8d7dae0cf6b0bc208666ee1163a39e6116d6d240c9dc1c3a3c1db1d' +
      'd3b1c6680fe9a196');
  assertTrue(msg.length == 320);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a84c469c24696f81d7df4ee8cd76aa584f8c9960eaa9908d3e3ebc5eea7d0b50' +
      'afdded39deb94fd59323a21a6539e93f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '414f5619f6dfd45853bbabd224cc305d77350ad253358910a74f3a4381a9b866' +
      '80b3c4068c089849c4');
  assertTrue(msg.length == 328);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '848d481e3bbf5dd726f625cf6a444d995b36262c9f80d583b77accf1707e3f49' +
      'bb3dc480a560694d769aa1ce65d69428',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e2658324821ae7b0faa0cdd63ee9efb9fcbe82092d04696feb3da92c82521dfd' +
      'c98f6b41b3ef365d219a');
  assertTrue(msg.length == 336);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3ea5d0799f1a4dcab9149a40ab74bec9c8d76d8e392c1e63e080ddec2ec535f8' +
      '0be9f00927be281ec97ac0c882bb0bbf',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7e80271bb5f2cc7ddae4158658e4e8d06e04a39385da0ecac1cb8e91d68a9bd2' +
      '1ddb7320e79d10e3110758');
  assertTrue(msg.length == 344);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fa00bc0359a642dcb3559656094eb2fd4f63bc57f0d34abff26df5c54cc63dbe' +
      'b4eac75905296e7fb69f871e134083f6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '43d2828e86f7856b78c66cfa3d602387c290975afd021a8b76af0918069cac35' +
      'dec45de3cc52edc4ba14432e');
  assertTrue(msg.length == 352);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6c9e367e066032ce47ba2575565932002cc786f533c5551656abfe7391e7dcb5' +
      'f9d9e047adace23d32f8acedfd0cafc5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3f49bb645cced7530b8b82e6cf07fbf670f7ef0ba0583d16debafc639bdfbfc9' +
      '9b8417249f7f5a05410aa3a71f');
  assertTrue(msg.length == 360);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2b301a14647a67429cc3e7da02c4093a739640f7b47a305251d2855e75e09e60' +
      'e262b279a073077d1fb6d0f04788f2b8',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '31aac06a59b74bf478617c1637fa6c5593df168b8d58b1e923bf3e3d80e55d71' +
      '70b16454160ab29ee1f7412ebc05');
  assertTrue(msg.length == 368);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ddd245c9b29ceac60506fb6bd6e8037889cb73d6ecc669fd129060a8a8f58971' +
      'ac572d3ec9b44404f81381d0fd35a649',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c10b2852054d8034e07906c7fce3ce99402321a648bb881f13fb276afc224c6a' +
      'ecc64800cd767ed2429db94b95a9c3');
  assertTrue(msg.length == 376);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a44640fb4ce6dfd4a10290a0aecdb453054a9b54f2583e97bb7dc2b005e5fa2b' +
      '4fda17b1f75902f51c18c0caad35833c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b1eeef324b499f19eba322215fe3ce19c9f000b698d2b2dab7145015046cc86d' +
      '049ee15ad59dcd1564f30112e06444cb');
  assertTrue(msg.length == 384);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '38742d18bfa6e918b888d68d1034e61f65dec0759172c2dbf08cf1e132b217ea' +
      'f4ec29e15db7f4b07e08a70cc5662012',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '790dbba09965c9774dd60a32e010c50d6d518968a220141dc33e7410f2da6c08' +
      'ad0419bd9864d5327d2c5c44914b2e83f9');
  assertTrue(msg.length == 392);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9174958bc8f4ed4731eced999bea2f63032f52bc8c46bcd903232f3fbc5046f0' +
      'd6c203d43a078b822fc05101404f2635',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f7b577f1396b23c27eb637e53d3d92460270b001cc612fd3b4d68bcdd09c2d50' +
      '571ea4350636324cc2428a087e7bd8785f82');
  assertTrue(msg.length == 400);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '80afe111e44ad9aff9e39c4cf9e6b4c520072b4550e62b1740160a04f8d53061' +
      '2dc098917a556b44977d0e73df518bee',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7370d9b453936955b9c9d336f4b283237986232de007bf412fb426ff5b4093c8' +
      '0c428c19a12e0b187484dc6d5f4746537fb1ed');
  assertTrue(msg.length == 408);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6cd29159820d34e5706dd867e6363758d312660d4daca8d2abf677f234746e97' +
      'a0a6224eb054066a0b74e18c70965368',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e8620170f0f39328bdf8888148cfd17730f314ea68d8fea02d16d98a3cca6148' +
      '4139d3ee92b748091dc841dda08483f1184025ce');
  assertTrue(msg.length == 416);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '29c408a6a5045f397b56dfb5292c7c16028c63f068e699b86a891ff8501208ec' +
      '9398dbaf463c00f39af7b2cbe45bac15',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '75d4216bad77943bfe82be216157843b0da0fd16eeee847153a00b43e707b2ff' +
      'e2c898168081f0bdb3af58f214cf67b920c385aca1');
  assertTrue(msg.length == 424);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0170357385a20865a8d30c2df39406903ff88c7f70fa1a7a5aaa86711d64046c' +
      '432a1b139668ae5abed637d1dc4107b7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2fa90c2210e3096caed122b74eb9559977120e5d9a97eeb3f99bcba6c19cf8cf' +
      '791ac6c8a0a94ae49246611dace7f24eb05673a36b3e');
  assertTrue(msg.length == 432);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6c2ced3fae94dbd92f4170b63f1ff6fcd8194f60937b22b4f3c95fc9e104b771' +
      '48f9bc6c16a890de86d9ef1554c96fa0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a8de55170c6dc0d80de32f508bf49b7046aeea4b975a511b5ea3dc853bfa4b1e' +
      '0138202d6785f6b3017914a86f824288d586dc0e8bc924');
  assertTrue(msg.length == 440);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2bc3b10c148200f7919b57afe1d7db773ffd235e04fec6897dd94f13ad9c437e' +
      'f50900a40937f82a39daf2aa2b3dfd68',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'accd9d05fb7ef3043470836137554af117440b3ccca7a280285494f90dfaea60' +
      'dcbf40b230271932cd3875b1d3dca60d38865ff874180efa');
  assertTrue(msg.length == 448);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b9e02df93e9254180d6a15288d77088b5a5ce517644109b4e2532be315f08dee' +
      '43491608a1127dcdf69397406e23d231',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '32b835c180cc4006c11a61c65b03c099510e1d4f0a94b63d54bd6bd5a8ab207a' +
      'b0f4639206564edc3fa6af03280a67744f68106dc51ee35723');
  assertTrue(msg.length == 456);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'df97a1c5dda6f9dde749f213e429db84f0dcd481d43bf58e6142968d629ecf05' +
      'b262830a7dac87f67f4383975f3e821d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9409f9efadbf190b253367629f8f368c9d5ac262e94ab86f3559f9a1fe1a9b44' +
      'b64e313121b34d43001c430bedc62fc586ea398acd8f17c7cfa2');
  assertTrue(msg.length == 464);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e1a69388ee6b6d234108ec29402cd0afd74957d990c7bdb544cf11e8eb2ccd17' +
      '0b6b5a74431be70364d7a31b926ff53c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '289586baf8daced50db14c936529a0a6438eb5da8d3d469172b6a06f4ff3a956' +
      'd4f9219563ac285cb8e70074cfcc152c02593a97733c36f4a9e97f');
  assertTrue(msg.length == 472);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '509e996c1e11611c243021b8b78f2ad90c5a9263bbf35910db7c8ec102aa7c51' +
      '8066fff8ce88562fec2cd6dfe04056ae',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '156530cd6ed3baf1fd7232c7ff204f3c7d4d106016afa3bdff3786e84843ec55' +
      '6115626fdc84b2e874f1074e4f7d53e08079ee9fd01f80a8be7f20c0');
  assertTrue(msg.length == 480);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7b8a598029ca0ed475a72c0644ac81c63d72fd51305dada07b0ab4a29e47422f' +
      '59e12643179269ca3d7d10446b372b2c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '30655a6b5a5965db992e7248d24141055e988d726abb8e729dc5c21ffcbaedbc' +
      '0b1b5fea35b8751f6ec6625517312fff2234014176269b60959723787c');
  assertTrue(msg.length == 488);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cfaf443e95deeb3cc1910771a2c0692a54b18b3633dc5414e71ae08877f08048' +
      '18f67f7196c52e26b762dd12bb7a86ca',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '345c3c022e20144e135604078762ef5c8a8f038cf1b1d6a91709b59dd068396a' +
      '9e971ab628f74886e765384a23607c1a1e6e973f8fbb0ff55104c46f5db3');
  assertTrue(msg.length == 496);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bfb1d5ee3a0b629058ecc521c706c2f9241c48cda3dcfdba660a2601d832a7a8' +
      '72a2bb840f3b98d21c37e28f9041a5b2',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0b94a0f43a92408963a59ded01a9338283a6ff1bfbacd9051a0104445c7f041e' +
      '8037afde3b5a87d22d5a4796144cbc944091d6cc47b5ffd1f997ab1496ca31');
  assertTrue(msg.length == 504);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '07a045c9590e9901d0598e604c4649554a823de996fa438cc81a634344eeb98e' +
      '5f3c0c234ba30e2285a4d7ab568f2610',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '93035d3a13ae1b06dd033e764aca0124961da79c366c6c756bc4bcc11850a3a8' +
      'd120854f34290fff7c8d6d83531dbdd1e81cc4ed4246e00bd4113ef451334daa');
  assertTrue(msg.length == 512);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8d46cc84b6c2deb206aa5c861798798751a26ee74b1daf3a557c41aebd65adc0' +
      '27559f7cd92b255b374c83bd55568b45',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'bfb94dfbe0d9a509b78d164a722050054dad91c9a8e260545d037eb450321aac' +
      '48ed4459fdd8a41572bd6c9c84d18b6ec339247482cc3ee52a1bbd6bd4ae9182' +
      '16');
  assertTrue(msg.length == 520);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '13af0be02986ea3176e8c65534ec9f32c23b53c93a73b15c26b9ecbd8a1181ae' +
      '184a372e9f5e0596cd6606849aeae8e0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1c8924a16fa7c602aff5ee961798bd44fe53798bf44c3d6b0d13ef837de07377' +
      '651c1e94ed236eb79349f86ac31ba151a7e711c5407e65beb63824f6ec39754b' +
      '58f3');
  assertTrue(msg.length == 528);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5be6482851ddafde582f2804071a702ae39bacb688741b7c37bbae99821ce4d3' +
      'f47d5b097fd8eefa0ef9248a34f5d3ce',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '184215145da49db417e8bdd573d6282de073e674c3dea86b6c78591d4947f565' +
      '5a9d9eb0e5f4ed046b1d8642da9aefa80448a299504160a1b000c9b4d3c62ab6' +
      '9b3d96');
  assertTrue(msg.length == 536);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8995cd7fc0956e124075440686beece17a6256b282e7988a0c998f790e3995c9' +
      '74383179893477bcc32d1f114129b496',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ca7a63adf41f4da33142910c967706b5c8a093350eb3e6d3aabe69a46a2872f4' +
      '7a39bbe77cdc1160daa450225b0e8e36f506978ce3ac9ae5f75721ef30da46b2' +
      '8f07242c');
  assertTrue(msg.length == 544);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b89cc12b11e3afa58908580c47b25407abbf584f8e8d4b5631e9f450464c7e53' +
      'cfd7e9f9d3cf35e587a6f02957ce4c28',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1da41a0af202b079521deb6109e312c2ade48544d2b498c07e91a102dd4650ce' +
      '354f3f201b3ecab8e85e21d667959b43d08f4e90fa18dca2ccca8f6ff5e9a902' +
      'dc8bf5c5da');
  assertTrue(msg.length == 552);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5c297e20c307aab7f325939fd4e2883b034fd547f1dd17fb6b97ade8b148e06e' +
      'bbf3ff60cbf469e4933d5f48f0166cb7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dece42c8849be40c78b8de6da96c2a8d7e940545b9f3f39aa1ca03ec60a85471' +
      'aa84d8e29f095874f331b90a4c157da9eb048d2c8fd235399672707366c766f1' +
      '0bb833f02183');
  assertTrue(msg.length == 560);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bb509e33e9ffcc4c01233146226ee9364cdac5658132460a76edf617a035b197' +
      'c86434ee889438581458102618769382',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '952008ebdedd480449bb96a025576c5f617bbb8307958a010767e0d736ffe5a1' +
      '96ea4467d8a5d3ba1f5476ff07b6410ae659dcef520a2c14e3902f8b399a289f' +
      '41f5fdadb502dd');
  assertTrue(msg.length == 568);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9b63d9145bc714a8253dcdb8341b2f5714eb58b9d4b22ce45aae07f51297a3dc' +
      '9c5b691a8a3cd438dc5bd18be400af21',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '100132c315bfc9c4fb93023f5d3500d7208a68acb4d2c63096232c361a161c4c' +
      '67c0a74bc3e4d72c11664b1d970321d405401924b3a0f6ce2b1a2899e7caa9a5' +
      '5ce725fc37f55d6a');
  assertTrue(msg.length == 576);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b6ca04467ed3e623dba36f2e0248cefbe134cf555fdc14731175eaaf08e244ab' +
      '0b15fca2f173a0ec98feaf359fb84a11',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '99cba4019f5478789e674e08fe5d6ceadd698b0757ca39c605457c22c3d3b8ff' +
      'b797d2be8f12960f099a5606b908d47207b2636a779948282de3661bb08b1b37' +
      'ee576590800a492730');
  assertTrue(msg.length == 584);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e5378c7c251ae96f0359a30b3134fd77d61d0db68c42a1a2aac293195a596df4' +
      '2f677e6cb98abec90d6722baac63fc86',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'bb327a0bcb2574df47080e8c0d8a45ee1c0424ae0414dc0a9b8717d9f27d8ac9' +
      '87c7c9ecbc946073884d1fb96dbdb583aa758186b16fa429dbf15b8d5bb48cca' +
      '71469e7ce0ad8e7fa14d');
  assertTrue(msg.length == 592);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0f75e65ff8494ae28d9a0a2e65959653275fc34b2fa27b9e10faafff07c45add' +
      'ef3b8f25953d5a2e54e31ebe6d429d26',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7fd9eeb5ff368040d299fd17a943b21d65deb2eccf6128d18a33eb1746935389' +
      '35374c32c333a867821dba08636f20022c2ce01826c7b7e41640ad186f90ed0a' +
      'c647d47086744867e5c54b');
  assertTrue(msg.length == 600);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '007251a2a577add048b1edc79d96c7df8fd5b5fa0d7264f122e4cb54c50bc316' +
      'a8bc5f4f9dfd4469e29e9b030f563a6d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7ca9e369e82186984d5fc729e111a7e5d8ec19c5d74e13b5ab22e4993b05c88e' +
      'bba6ba72237389a6e0722e12c96c5d6a54515ab00ad80efb38665a76e831abab' +
      '0fa5cf020807078441585de5');
  assertTrue(msg.length == 608);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3ee8c4184de9ceaecd0d3aea16271835f3d45c873358c93a515539c38e819414' +
      'ea63b08d0a109346793d5e0f703125eb',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5b4d945d55dea22e37821ec396476a4bfb617d2f392ad93afe67bcfda9cd9b72' +
      '5bc4ccdf516a83fd71dbff5a22b005fc61c58e471240bd2193ce13539730e632' +
      '32f70f80308be48dab7266a1dd');
  assertTrue(msg.length == 616);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'df82d242e4cdc2eb40bf3db6a56e1aa0a66e553f1914bedc65c8cc6ad9564b6e' +
      '85df59f4c443cbe4e0aee05986f7d690',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e865f4a42bbbd0b73fe275b8ab90d3a9fb74ec5070192d38f60efef9564498b9' +
      'adb716f31d50cf77c20ae4b2e85515307bb8d95fbeb9ad964001ac550dbc60cf' +
      '213fd8a522edfaf54e5b1b93b2b2');
  assertTrue(msg.length == 624);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '091fa9ae2184e2268ef9ef23c7c809efad244536e00aa9e8b3a6c228d90e31da' +
      '051b40f268a13bd6f62e69c91ae8cd2d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1d408c7b68e168f41bb46f9b2e9c8b04f968e4080252546814cc1cb2917dd569' +
      '0886a9600a09c2673aec0329a4daf655508b06fc1646ef3bb3a472191d964db2' +
      '14a96a96fa89576ce4c4f6dbf1d176');
  assertTrue(msg.length == 632);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7e23472c03431925f3b4559d886e8d5d837b3d39b8efe1b7a91e61a13810c4db' +
      'c2439634d7c6ababfc66e9b18e6541db',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '54ae030a4e27a05c1ea4a12e69c67544af9b4044cf157dc8cebbe8b2d49f9bc0' +
      '779077603c90c5c55b891d3ac33b87b65e79e1b19695813718191b3bd8b7e42d' +
      '5583f7cf1e60f84495b8f869f3719969');
  assertTrue(msg.length == 640);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cb65f823585773cb8802b6339182f13752a82864c898b445be5a11a969657ac2' +
      'dc4a3bbeb87ac0abb232a2b124171096',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f73cd386f73d0c6ade05771b33117117c602e52693f05b47e90032eacc39295f' +
      '9793258fe6512eeab291baa0be222e143295a28e8697e42fa27ec02b44217f32' +
      'a1edae2f4f35213562ca37b6d6cc5ef72d');
  assertTrue(msg.length == 648);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f665c4d17a83d65a7ff16bfce279b58558250d76af68b8eb943753e411a57ceb' +
      '31c1a131e54bcb7672584416e3d5719e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1d259612e6867e7d788c71d03c5136864ad6d84f24eaf913a34e69333116f812' +
      '395288d4dcee6665e6d7dabd005ffc6327e3ca305cab78569d1107a115e619fc' +
      '90110436317925066726774d1da3639c31a6');
  assertTrue(msg.length == 656);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5dcf512e2b93d6ecdf7c3304534554ea79d22392e59bbe90df21e978c9fa3b34' +
      'ff82e6dcfe8fe2236aa4af4e662e2a9d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'da8734414c45fc1d5a75a3cbacadb1bfb523d6fc391f882d0db0eef21f9ffd78' +
      'b6a1e14cfad09e71b65cf7b05d7e8f2f4bae4e454e16068d65465639c729cfa9' +
      '2738563d37edc9676b7be604ffbc68ec3b6b72');
  assertTrue(msg.length == 664);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8b328a31adf67dc7aeb864a359628410d5814a2f0cc683303f61432ce32177e1' +
      'f538feead7e5000343916c7042f8b3cd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b228c75903d80fbc6d1cf629ff1d14a92ec4bf0e121fd97bd306ed265efe7a5d' +
      '5c5d8fc764af98ed6f5978f88d7cd8bcd71cbef6a58261d201de3cb15b316128' +
      '7e6a104cc2cf882d839f1da0d3f68b426cf08ab9');
  assertTrue(msg.length == 672);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fc92ba4eac9a1bf120a7b6c2cc30335b9615b1a98e55d14854ff872966e71040' +
      '737401c6bc08db5842ceace14cb7e7ea',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c90d473a6fd30be9a98bf442a9ad65a697d4629c33cd517dbbed02710fa8ee99' +
      '1360bc8e557b0a0bf0b869e6b0c3a9457607580edec3859f2060c9c0340289d5' +
      '3a5d755918ca54876599045a86a9bcb8163795ea8c');
  assertTrue(msg.length == 680);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '807582b2520e990cfb74367343268b9148b2519b9e7cd9182edb3db9ae7afebe' +
      'dfe8ca118130e2ef9d31af9081da8222',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6df8c5c28d1728975a0b766cd7de63bbe7f48c3db3e6fd5a4b8df6e3905cef03' +
      '51f3d973b4f2a7eed80b0de5b85c877353fb9e930ad2679149ad4cbe69910e68' +
      'd5500b096c5abdbf27d684fcfcf1a57f02769283d5a0');
  assertTrue(msg.length == 688);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7bda57d21a4434aada6758e282e612a4c0f41b242f9c790804d5bee25b81a821' +
      'dc6f2a0ba56f1b3704802c9a6e153d85',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2cfc76f88cb6fb90927b69526ad5f03d6bd335f4f75b52b6a3c21e8f989ab0d0' +
      '3acb1ebe07e68a87c1b5607acf17d976e10ac4a3d30a8561d49a5e7ec720edac' +
      'e9f5f632b4bd63e104f4894a79caad2e1c31c736453485');
  assertTrue(msg.length == 696);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e16670ea837c259e418d3c0e1eaad4948c3457e15b1573056e24da25bff5c66b' +
      '7e95d24c6bc1b8d6c2b812f64adc9553',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3f05108c2f33d39b3aa9e73efbad4b011b4e9e9fba409b7611e7e03956b2f3e5' +
      'e0aa86f68c4bfada5f9223a66d574b08f9dd797cdda8f3c32d8e01921711f487' +
      '0dec676027ecc56fc2010b496e95cfbf071c820f21edf25b');
  assertTrue(msg.length == 704);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b272bab680f3ab27de72d94df384323f8555f1d17facd2588ac8648def2451f8' +
      '2f9b99c05ead8316fd181a2cfb97483a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1ffbe1aff0a1e7fa3e68be31a74612a1519b59397e7007ef61fc015f316d55b5' +
      '7be528cebcc2f09a2f22e3c5e4a6ae9612776b17ae87cd763c1a9eabe6846c5b' +
      'cb347ffc99f10e3b5e64b29a9bd71a5e9b3c01a802715de2a9');
  assertTrue(msg.length == 712);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f08bda9d6762607519d53fecb0bffbfd3ff2924854833a759d631e910c42ca86' +
      '741fc2e290af42e94b94898609b91390',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f755d6b5642378f2847893901d9aa91c54a4b7abb97c5c7184063e8f1e97aa2d' +
      'e4ad7ac927dd3cce770c906921e2d298f67cf9844e61bf104db803b265b86b82' +
      '1c5f4d901067d07b38764e3f6c95fd4f28e3cfe48d8a9694a8f3');
  assertTrue(msg.length == 720);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f85e98ea054455242280854e97c4ed399b85ee7bc5c5fc3d62910a76f3a9600c' +
      '3d904c832b70b58d7d998db8dc978135',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '773577f3a642c4f13b1cb1f4103e9f6b2da86268a52f449cbb174c8349e3c0dc' +
      '636ce85c373115a337eee26f7b70ba1060a79a1c76fd186399e6a5255db80f83' +
      'b0be4a34ba876f7908840553ead380f3195507729d067ac2ee8eb4');
  assertTrue(msg.length == 728);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cc27869cd7e63695d19082446b068b77dde4e8604f8c0e9ce20a1b71aa9eff14' +
      '60f32d5a54476275bdee8e7621491f46',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '651589927e17e1aef780690f3100a377f0179b18b31fd5b4418c84038573fc55' +
      '9b496a782beec3dcf6e9faf5aef676e10bbec34b1be5888fda49b91e02890d25' +
      '24c5b369f8a54175f29dedf8156fff690cf186ec77104a798315033b');
  assertTrue(msg.length == 736);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'da846042fb908eee5f5defd1055ff3e57103708278d379a8681f58bedc6ef896' +
      '70b9f957c4e0edcaa42dfd8cd49df6ea',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '678652600eee42580f73623412e9c011cc02dec4d4cc1b79b27b6f9939695bf2' +
      '185b2012ab0630f317d2e2de95dd69890e430783e99d7ed121c7c8da9ae70780' +
      'b5aabf9022d1435cf5ed6da6fc6692c050c2b5f22b24fb1cf9135f9cb2');
  assertTrue(msg.length == 744);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8a6ae41c9bccc16eac4860bd5fa91205a86fbfd09692578f7f36b3c135d96f9e' +
      '9001c192dbeda975f7375bd43a23ba68',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '416d3fb7b401fa5e78cd96d479d8860df147eef03adf13fce1c61131fb89cc2e' +
      'bc63289745bd7db9bef14571a55318496572dbe52b9b349ef59f406cecd68909' +
      'f364325380bb75f3aa62503c84f47a55aa6b9c9b199ebe414409ff3964cd');
  assertTrue(msg.length == 752);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c5f20542e0c0ac1eb433de6229fe5baccfd4502e2c2275439385efda6374a1d0' +
      'fc50cd9bba4233d470ad91a3356ea315',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6f09e876c0b83c9934ffb777f006338c5142a31375e9b21cfea9a7de12998c4e' +
      'a6708ff1fdf5a8ee6bb67c675ffd8209a10064e2d758a8734eb48f07f7cf3d43' +
      'b09f1bfdc5d07a52b77079f23cec28bf863bed97c859276df7f7129fce71eb');
  assertTrue(msg.length == 760);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b3c968f3025f87dbd5cd3d364bf673e62827c35889532431becd87cfbe2cc75b' +
      '7ef45696d19cd3452d0e7c2b69d09544',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0dc2b226b3431c69a76addc018fcbda22bd72c8ff01ed6549596798bd950f361' +
      'c489a09c95cee2dcfd6401208ae6368d6630026b417cc4718ccb8b42e8872937' +
      'de66895fd09142c42f066bf0ef3ab2b03803a8185fb65fc7148c376ddd4bf58a');
  assertTrue(msg.length == 768);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'aa645a4f8f602411260ace24d381f3f5dff0000c246343eb528e3dd027cd7438' +
      '15737906ac5c74ea83c2755e56b99509',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8dc71c84c8772753c86ab6afd80e8d1df9b0d7e8d69ebe67fa883a82412c2673' +
      '8c3399cab95573b4d3c4367c85c81852d5a6564c0fc7caaafe16c05e62aa06cc' +
      '9fa542ceb35c88fb6ab82c29d5dcd530f807d3f1c3bcb3974421101d1aa6ac11' +
      '2d');
  assertTrue(msg.length == 776);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '12239813097124e6248e7dbec985a6a25f622b1d07295cfcfbaff33b847df7fd' +
      '94265e439fa535f3becbdb576922ac41',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3df3edd9fc93be9960b5a632e2847b30b10187c8f83de5b45fcb2e3ed475569a' +
      '8b2ed0784348f9dacce7b323c6b65071abd8b32d1022b1e12787bd4989d3c5ac' +
      '329d576ccd7608dd336716532e9b4c7f825826fb2e343623ef85c6270619bf5e' +
      '3b27');
  assertTrue(msg.length == 784);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f36590f5211a9cf84eeb0a3b2e5dc1164e813191cda7cb883f3f4a074605ce67' +
      '80cf2f1a105658706fbd2829db8a2a58',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ced0ec6500cb891e6433d104ba5b1c1ebca397f3a5eeeaa0f0561729621ea50d' +
      '4ae7ff1d0827178dccd84e4ca06d9891a90adbb7a9f4994ac947cf6296e71d2f' +
      '49b826d64b123a7bf86f339fa4679caddbdf19cfed7d0206aa5f527a6b0cc00f' +
      '52aa2b');
  assertTrue(msg.length == 792);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c2c2d7d65d0b9108648e3233d15fc4e4cb62ed8fee9cdd18ab44b8486e2100fb' +
      'e45ddcf74f46c15eb77fb1c893c12202',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'afa4a2c4fbaffe838dd149c78ea7851ea9396304b41806a093a90aae59c0c5bd' +
      'b170cc9a7d22b90cbce52cc1b105108942df20c29ef3a913223b915e7ebc98ef' +
      '135adefaa0f0a6441ea05920e868ce9d1ff6c8fe4dbec06a4849e5e55ad0627f' +
      '9e09dfcb');
  assertTrue(msg.length == 800);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cf6ef91d8567414f5c7f0b1f4ad09a976afc7c8327a382fca90f5a136b19be33' +
      '100a664390a377f8d8a3015fb882125b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '00f65a485bfd381113d6e79bf9e0d5e518c891988c073ba198ac3a20f25c2c81' +
      '619723e88a3c0ed3075075fbbafb6a7b61d3bc336a5e6d6f08d166c4861e6a3b' +
      'dc2e49b2806b567e7e821a55cb674a6cd699f7dc61a7054a8ff3dec73eb667f5' +
      '9644346be2');
  assertTrue(msg.length == 808);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '809c6b5d41da7cd10df90b02b193ac7d40cf2e46c139e9dbd208a988da2b2500' +
      '2cdbad1db2ecc1322da20b7d054e5fe6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b9ce382e1e82a873cc444248a3008c2cf64d18759057abe8f91c9d87f5dc83aa' +
      '4eca0c51d30829b9a1d2712da1fac31f52942d77c9f20c2bf6d3751028d7d4f0' +
      'd336d3dc92b27ec368caa4444b3180c1e37e98b58f25e647a9a6361f0b04cf78' +
      'd17955766168');
  assertTrue(msg.length == 816);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '18cd10b3ea907b3770e8eb91c974666e2da2525afe7020b872b3ec6689e5e1cd' +
      '0059dd4fd49ce44d75dc4c8430c322d6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6778d82f3a98eecdfac55ddeebc52476a070094fbd65831801fdd60f837d80d2' +
      '3b90d472c5f4e5ca6273a50f40154ea8fb94013f6310ad18800433a1d379c84b' +
      'df799a99e8c7b676fbcd29cc2ed66552297de7a6e565179bb42b70d48299e092' +
      '5a1d72ca2c792a');
  assertTrue(msg.length == 824);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '71f08d9333df5cb885fd23d6cbb1db84f9b55908d069df50fa4795cc713a1843' +
      '9bcab8daca078356f5c75a619f2f8782',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ba3a54a77d7c2b8ccec6d53136cd48827c87acdd1cd86ad1f56e862642ea2e1d' +
      'cb4093f85d60f7bd77160738462e6c3fd3dd9d3a7c5cf7e2a1d60f489f844719' +
      '02179f21f656ce0fff089278ea14441e04e7af71891622565f44c428044728fc' +
      'c686212a32a5d809');
  assertTrue(msg.length == 832);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3cc154f0542d8e3cacf9d79f231416816178a7ef2275fb257a48a2f763ffa2e1' +
      '5a33c27b970a416a057925aa0412d268',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7eec4f4f491b4eeaeb1cdbdb95e9511c2872372bf64a1f61cda1cd8032729c8b' +
      'eafd1edabf78036d80023c814ad8606106cb4e7f33f214c3e69c0f230e885474' +
      'fd594f7f2444aa581e0c70ebf13073d89063eb81a43c5f608b2fc99fa1bcf5e2' +
      'bfe62a6802e70c52ce');
  assertTrue(msg.length == 840);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2f8c5682a07438043e55f0b7759fe7eea5d9bdfc8b0f89800ebcf777bc05a941' +
      'ea7f3cac45d4659de0f505d814590b6b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f3715b9e3ddd7862e15ee87aa23f1aaa0580591e55cff3fee9b49b42aa0c0cc8' +
      'cfb8efa3eb96ffb72ab06b83d7b47b3d22a5772421cfc51214005150edf532af' +
      '10138ad45758add459908601eccc3703e810002a2e4c6202e98d84281475d55d' +
      '3de9f3d98809cce1f665');
  assertTrue(msg.length == 848);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '04e7d55b0eb4bc3d3a21cfd2941dbb4dc44706588967186b40da54902aeea97b' +
      '262c97f75e37ebe3cd60a804e7b9feca',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dfd7d792e162bf7a889109550a0fc4c415232af0c0d72dcbc2595299e1a1c2ae' +
      'ae549f7970e994c15e0ab02f113d740d38c32a4d8ec079cd099d37d954ab7ef2' +
      '800902cdf7c7a19fb14b3c98aaf4c6ad93fe9a9bc7a61229828e55ad4d6270d1' +
      'bdbca9975d450f9be91e56');
  assertTrue(msg.length == 856);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '08e5ef57d0c2aa23edfc75cfae39e6bc1a43b5db08b2e27bc9823114edf76036' +
      '7db9cf3cd9c3779755f6d39e219b7079',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ffbc7c47f52e69f5c667f4ed578b46ff4592048f789081f3fb39321d0aa4627a' +
      '6d4f261905649410a53a301c231fa787ae55c04f615a8f84196cecf2844d2300' +
      '7b44edd892649fc8ed10a2e855bf23fe8afd0b9edbb33296f5a7cf89f94634d9' +
      'd1a2b8cac3b7f4e546f2329b');
  assertTrue(msg.length == 864);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'be10c7baf94608408a0accfbc8ce95e159d08d8ca75dd6c273f935947a7ec346' +
      '3e10a58d3ceaa0b2198b0887a3a24a29',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a39f202d866e8e96765fbb53b6772537dec043322f4a7475247036d7495c9878' +
      '50cef2a46218d3fab36e3bcd595c0aca5e98b9db14fa484ca8c9772dfa3839f7' +
      'ac3066727a50b0d5c933d82f82f1220720e8063f08bc283f199c8a4f85c70043' +
      'df4fe55e751d0d71df36fa43d8');
  assertTrue(msg.length == 872);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3b2664ccb555a1b1f3ec996860146ea75ef7f3bd62028a19c26f63339399f427' +
      '5a07f3c064d34766ebe8e4dd532f6629',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b2c8261853e2218dfa135cb5387810352b8962e94e9fdc8695b41e7dba6ad122' +
      'd14fdd0d2360dcc039ccce8b37fa0ead6ccc85bc26261d47cbaa78b925c6e380' +
      'fef1856fed31dc616fe16b2039b1ac85cdee4ce04c0497998b41321868db08e3' +
      '5f358606585e0bb8c3da9a3be7a6');
  assertTrue(msg.length == 880);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '45b286f49fd05c45c921b7bfdbe2cb024441c372e07394dcccae0de834cd541f' +
      '13a79dbb3e5078896e88438542bd2f12',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a04f390a9cc2effad05db80d9076a8d4b6cc8bba97b27b423670b290b8e69c2b' +
      '187230011c1481ac88d090f39154659494db5e410851c6e8b2b8a93717cae760' +
      '37e0881978124fe7e1a0929d8891491f4e99646cc94062dc82411fa66130eda4' +
      '6560e75b98048236439465125e737b');
  assertTrue(msg.length == 888);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e7089d72945cef851e689b4409cfb63d135f0b5cdfb0dac6c3a292dd70371ab4' +
      'b79da1997d7992906ac7213502662920',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f419494c3c6d0727b3395a483a2167182a7252f4fd099c2d4b71b053f94bb8b3' +
      'adf3b51e8460cfec084ce9415c95798fbae4975c208c544645b54c44d2b97f2e' +
      'cfce5c805be61f5ba1d35dcc07afdd51a87baa990506668cf710e18be9b0ebf9' +
      '43f366fa29c69f7a6616de72a3353b66');
  assertTrue(msg.length == 896);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'aead8688c58c6ba4e9cadb4756b465dce0fb06f1cfaa478197f2ea89414e47e9' +
      '572034adfed160703c79b82b3fd7ab78',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'aaf7584d53006cbf2d2040e51b7feebd2bbf1e9f6d817cd8062a6a9680e7f104' +
      '64eefeb50b07cb46b14b9b3fcb2caa3b9ab664490115d5919456613bf172b58c' +
      '5388fd52646a5783535b88212717ef605314b70b8a085024d4ab1fcbe2be7460' +
      '9e4cbdec0730fabd3cd77151d647a3767b');
  assertTrue(msg.length == 904);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e6e79d8c61d0ea9fc70dd4dec1fa432849c3396e717b170badbd87a4c7974efc' +
      '590ab8c1183a6232beff14534f004b02',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a467f77369730201f2812204fd63ad0d2757be580d937dfeb221a06b21ed3213' +
      '531d936152a0c1f09f0ad5fed19fd11e80ad982c61203e86b2508279d91d99fa' +
      '483e2e97a3d6a6ad2548a8da404dddb58344f4bdc1c9ea907088885e4f532d9c' +
      '4c73cdfda43c3a9e4ce5a2809096593cfac1');
  assertTrue(msg.length == 912);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5a7508c2cc096bf65a4d4d337aea22008edb9a3bae869f94e09fb526a52c3368' +
      'e9b28576fb950f078b7e43b5562120e6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '01abc90e9180fc9bb8ea67a405073ed6848bf33048076566476c55836bcb19d3' +
      'e55e9400c5cc657bc7a95f1d703c390f5a8687e7cd7fe9138ea3837bfcadad62' +
      '58a3eb8d65121fa8319bfde532aec0e694961bddd2b673f284124be5781100f4' +
      '0381b6ff99db92ea9cc82a4372e53924dac398');
  assertTrue(msg.length == 920);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '96b209d7cb2c2033b38350744767fa5c253e1bfdb99fe8418bff83804df02248' +
      '140fe3b77b0bfd4a79b51f70405a434b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b555d99056362bfc2bac2a1bbb71ba112d644e50b82b015e5a1ce3d9cd5e90b8' +
      'b74b08d32119baa62abae251fc0015e400051ada4ecafce3681e5de727c20d47' +
      'f5cadc663d46ac682022ca396a4b7ed1c413e0b72bd7eec4a0dfdc2a2185abb5' +
      'd99afd50940528ca75ad89daeb9a1b61e15747f0');
  assertTrue(msg.length == 928);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'abd39f79d72c6cd2e8e130f3603032fe3cef4177c3563930096df1f10b87e79c' +
      'd4e2059cf1b9f8252184bb26f659a5da',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '14fb01ae9d6015ecb3e56d6ecdfa4bc0533186adf8457f5e4a5c57c687895f3d' +
      'b395d06ae7ffbd67ec41452009550dfc1878eec0df2eeab09e8665f7e59f9148' +
      'a86b2bc695b36521a55b2302f2e869aac83f14d6feafc9e587322c3c44f052ea' +
      '1c0578884f84f56307bc6dde31ba48118a0f62b6fd');
  assertTrue(msg.length == 936);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fc9b9a95a8ce1c157720cb63101a7594df24f4cc74baf735b0ccf6abb925478a' +
      'd507cd048d30cde1c788806f43ed3a81',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '11ae0cbfee7bb3df90ce585f09b9cf8ff5bea69a68eeb6c22553f8ed118c9a61' +
      'e7b752cc2c94f38766e63e1b891dfa05b23347b617d42fde3ec17eea6e76d3cb' +
      '640bf8fa46586fb9dd5c4d9bfee04c4649571b781709f848ad7081afb6e2c746' +
      'f071a551251050fd5df72ee65248ecdc24f2cbe74ed5');
  assertTrue(msg.length == 944);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3214b5feec925059149fa852e3ae285a6eb377df926504e2f824572a3aebd205' +
      '0a20144e7bede7e7fe238ee83e69f72c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a5c4a47a04f4714269d5d922ba4694060aa2df49193720c819fac93bb8787ec5' +
      '5a107ac9a6602f0045fd2cc8e66744bf863ced91eeabe60e7d2c1d80276ecf3b' +
      'be91f1757096cf589214f3569c2c48bd74be7f8befddb28395814780a47c180a' +
      '58b0d0276a7e9873d682f473e27de7275c925ede23b6cc');
  assertTrue(msg.length == 952);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6bd9e1303579d815f58e8c6c9855850133251778a632f7b312c4b3163b29b5ef' +
      '6cb9511a08a31a237d9a7604afbfa056',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '75264774af69ec7ee3125e205bd6d1cb8fdb22f7ea6dbe72d1f2c0f7e2205902' +
      '796d75e379c79b11498615c21c9f52b8761a885eecc69d132b2b48c63bc074c3' +
      '055ee5cc13f51d6c987e8188b030b837e8f754d40122b451f15b28cd2bdd5769' +
      '20e1de5806593a36d8e1e89b9ef3caefee5acd80b3e9c9d1');
  assertTrue(msg.length == 960);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ffa9e4e856d06227c1ccb959be558309cc10633173f4b66ceb382923b52b9150' +
      'acfb08a7393500477a6ee4425a827e76',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '791a36d748695e62db5003a8ad367df1f051c1ac6a21d711823e8e069b546e3f' +
      'a06ceeaae06de70a1de249e1dffd0d940edc6acac00c4c15504c02d4b0933658' +
      '005423455f00023b01cdc5b681b6083379c24595518a47c654f5e1a10947df10' +
      'c05a3d716b2a973faf98e1ee3b675816598bb8d4c2a3b06eb7');
  assertTrue(msg.length == 968);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f8d33369680524ed6c6a716d4c502de3eac891f340f40e82e37501be1a90fb61' +
      'd26e5daafe92bc6ef5ec0ae431168842',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '74cd86bbed14d895301d8a54b2956b1c5cd1451eebab620b978d4ecef2cbdf7a' +
      '14367381f5ee79281a773337740fb9f5853f4253c4b19f684341081d8f561b2a' +
      'd773224151099588da90e04dddd565f67596c536d64c5b87e9480ad436013975' +
      '07ad1b61ca0e349fb88f19feb48f770676fd562ee8259f50d0c9');
  assertTrue(msg.length == 976);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '73ee8d29c30821dcdfa4441639f037fb6ba3a9ca596dc43428043785756608f6' +
      '207d80b7f78e573174fb9dfd42f0b8cd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '46612e1a4d016c41700a3b5ccb38323353bd8da5b9942c9c9212df40b4bee06b' +
      'e362a15dad62c8b2924d789168b2d325fe35bd5100e1e29f1ac0fa7a60a94c9e' +
      'ee5a70cccbc75ac214b1946a5679cb523b378d5c690751b7a7a3b80d413712fe' +
      'ae7024ce71d6295a3d5d16515c3622a052eb862ebdab81ca7fe3a0');
  assertTrue(msg.length == 984);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cac13a3784225be03d526f9abc1eb50a762e72c0e01172a15d578801089e5c9f' +
      '26e53cc00ff755909453e2964d7df838',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1a857c1f105d068ceab0b1e12494890ec196362a48b0200a0d75d712b18fb14b' +
      'ec6bb5b68a33b7e0b4fdc5b77142c29c6d9151b9f884f59551f476e5256986a6' +
      '53d4a468f28141ed954721f2cd02054df0438738194545ed70234173ac4988b7' +
      'd62812de4f2feada14f68e3b41bc9948d4139f4fb4da5939f26c0261');
  assertTrue(msg.length == 992);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b75d92b5cd3772846f7b68064a3567ae43e5010099f2b649f35087e7592aeec1' +
      '76646fc8c2629288944261cd35b5fcba',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9d36818d0c5a008be7904d1917aa3eccb5ef4f38cecb8c4e63c4b2e9b4b091a3' +
      'bf25b4ed0332445f894c2a4c258b749afa17fad03cdd41713a869f899ba9a085' +
      'e73fa9474a58db7a950d3a2386b60f79495d8bf73e72acaffdbf65e1989ff9cc' +
      '206ba8c46a368d8512bac7c7c191d713aca949d45df297b1b6594a1a33');
  assertTrue(msg.length == 1000);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a88da844579f3e3725d00daa8e1e287da4bfbb2d931ebe8d3b16021154be5033' +
      '41d6371d382ada744f86f5bbb56cdcfa',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4ae50ed626ee60dc5ea556e3ce0d3c18b9e6225b5620814e8b9621acf8f939dd' +
      '370ad9c7620d85e6d67a229f37f517d1b580acae8df0b5c9d29d756f6d5ebd3b' +
      '63b554e556469b5b4f8e7113bad1559fb254ca827fcd00425d18b0be7f2b48c2' +
      '544c48d90982ec624f490be65e893fa93ac9467f35a0a8e1b56d9a403748');
  assertTrue(msg.length == 1008);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f8cd943f429333c7c8d30a8576827f92c92ae18e0dbcae770601b79687bccf8c' +
      '23e9e589dfeb45c3b9bcafdd545e45e7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dbed7612448d46cbe0a384d1c93233f02ffd1c984ba765299518656d3723b766' +
      'c1658d4b1e7047cdc729459e366ef9349efc40cbd990f2a9a24db7a5045e1dea' +
      '12dce8f9d9f2aaed933f93031e7b8959ac5e7bf6bbbdf30b48f7eb783f8fe292' +
      '371a2f245c5c94b4acae160767a20ce7c0ea7723d97691d8eedda9efd1fe2d');
  assertTrue(msg.length == 1016);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'fb531a1ed181c732311e56f4b56ed91dcacc0dd6bf1eb4a44be6f87dd7cb1ef9' +
      'dfb0310f4a79eaaa3f32bf3914d8624e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3bf52cc5ee86b9a0190f390a5c0366a560b557000dbe5115fd9ee11630a62769' +
      '011575f15881198f227876e8fe685a6939bc8b89fd48a34ec5e71e131462b288' +
      '6794dffa68ccc6d564733e67ffef25e627c6f4b5460796e3bce67bf58ca6e8e5' +
      '55bc916a8531697ac948b90dc8616f25101db90b50c3d3dbc9e21e42ff387187');
  assertTrue(msg.length == 1024);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '12b6cb35eda92ee37356ddee77781a17b3d90e563824a984faffc6fdd1693bd7' +
      '626039635563cfc3b9a2b00f9c65eefd',
      sha.digest());

  sha = new goog.crypt.Sha512();

  msg = goog.crypt.hexToByteArray(
      '00');
  assertTrue(msg.length == 0);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce' +
      '47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '21');
  assertTrue(msg.length == 8);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3831a6a6155e509dee59a7f451eb35324d8f8f2df6e3708894740f98fdee2388' +
      '9f4de5adb0c5010dfb555cda77c8ab5dc902094c52de3278f35a75ebc25f093a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9083');
  assertTrue(msg.length == 16);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '55586ebba48768aeb323655ab6f4298fc9f670964fc2e5f2731e34dfa4b0c09e' +
      '6e1e12e3d7286b3145c61c2047fb1a2a1297f36da64160b31fa4c8c2cddd2fb4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0a55db');
  assertTrue(msg.length == 24);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7952585e5330cb247d72bae696fc8a6b0f7d0804577e347d99bc1b11e52f3849' +
      '85a428449382306a89261ae143c2f3fb613804ab20b42dc097e5bf4a96ef919b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '23be86d5');
  assertTrue(msg.length == 32);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '76d42c8eadea35a69990c63a762f330614a4699977f058adb988f406fb0be8f2' +
      'ea3dce3a2bbd1d827b70b9b299ae6f9e5058ee97b50bd4922d6d37ddc761f8eb',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'eb0ca946c1');
  assertTrue(msg.length == 40);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd39ecedfe6e705a821aee4f58bfc489c3d9433eb4ac1b03a97e321a2586b40dd' +
      '0522f40fa5aef36afff591a78c916bfc6d1ca515c4983dd8695b1ec7951d723e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '38667f39277b');
  assertTrue(msg.length == 48);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '85708b8ff05d974d6af0801c152b95f5fa5c06af9a35230c5bea2752f031f9bd' +
      '84bd844717b3add308a70dc777f90813c20b47b16385664eefc88449f04f2131',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b39f71aaa8a108');
  assertTrue(msg.length == 56);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '258b8efa05b4a06b1e63c7a3f925c5ef11fa03e3d47d631bf4d474983783d8c0' +
      'b09449009e842fc9fa15de586c67cf8955a17d790b20f41dadf67ee8cdcdfce6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6f8d58b7cab1888c');
  assertTrue(msg.length == 64);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a3941def2803c8dfc08f20c06ba7e9a332ae0c67e47ae57365c243ef40059b11' +
      'be22c91da6a80c2cff0742a8f4bcd941bdee0b861ec872b215433ce8dcf3c031',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '162b0cf9b3750f9438');
  assertTrue(msg.length == 72);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ade217305dc34392aa4b8e57f64f5a3afdd27f1fa969a9a2608353f82b95cfb4' +
      'ae84598d01575a578a1068a59b34b5045ff6d5299c5cb7ee17180701b2d1d695',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'bad7c618f45be207975e');
  assertTrue(msg.length == 80);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5886828959d1f82254068be0bd14b6a88f59f534061fb20376a0541052dd3635' +
      'edf3c6f0ca3d08775e13525df9333a2113c0b2af76515887529910b6c793c8a5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6213e10a4420e0d9b77037');
  assertTrue(msg.length == 88);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9982dc2a04dff165567f276fd463efef2b369fa2fbca8cee31ce0de8a79a2eb0' +
      'b53e437f7d9d1f41c71d725cabb949b513075bad1740c9eefbf6a5c6633400c7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6332c3c2a0a625a61df71858');
  assertTrue(msg.length == 96);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9d60375d9858d9f2416fb86fa0a2189ee4213e8710314fd1ebed0fd158b043e6' +
      'e7c9a76d62c6ba1e1d411a730902309ec676dd491433c6ef66c8f116233d6ce7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f47be3a2b019d1beededf5b80c');
  assertTrue(msg.length == 104);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b94292625caa28c7be24a0997eb7328062a76d9b529c0f1d568f850df6d569b5' +
      'e84df07e9e246be232033ffac3adf2d18f92ab9dacfc0ecf08aff7145f0b833b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b1715f782ff02c6b88937f054116');
  assertTrue(msg.length == 112);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ee1a56ee78182ec41d2c3ab33d4c41871d437c5c1ca060ee9e219cb83689b4e5' +
      'a4174dfdab5d1d1096a31a7c8d3abda75c1b5e6da97e1814901c505b0bc07f25',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9bcd5262868cd9c8a96c9e82987f03');
  assertTrue(msg.length == 120);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2e07662a001b9755ae922c8e8a95756db5341dc0f2e62ae1cf827038f33ce055' +
      'f63ad5c00b65391428434ddc01e5535e7fecbf53db66d93099b8e0b7e44e4b25',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cd67bd4054aaa3baa0db178ce232fd5a');
  assertTrue(msg.length == 128);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0d8521f8f2f3900332d1a1a55c60ba81d04d28dfe8c504b6328ae787925fe018' +
      '8f2ba91c3a9f0c1653c4bf0ada356455ea36fd31f8e73e3951cad4ebba8c6e04',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6ba004fd176791efb381b862e298c67b08');
  assertTrue(msg.length == 136);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '112e19144a9c51a223a002b977459920e38afd4ca610bd1c532349e9fa7c0d50' +
      '3215c01ad70e1b2ac5133cf2d10c9e8c1a4c9405f291da2dc45f706761c5e8fe',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c6a170936568651020edfe15df8012acda8d');
  assertTrue(msg.length == 144);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c36c100cdb6c8c45b072f18256d63a66c9843acb4d07de62e0600711d4fbe64c' +
      '8cf314ec3457c90308147cb7ac7e4d073ba10f0ced78ea724a474b32dae71231',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '61be0c9f5cf62745c7da47c104597194db245c');
  assertTrue(msg.length == 152);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b379249a3ca5f14c29456710114ba6f6136b34c3fc9f6fb91b59d491af782d6b' +
      '237eb71aaffdd38079461cf690a46d9a4ddd602d19808ab6235d1d8aa01e8200',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e07056d4f7277bc548099577720a581eec94141d');
  assertTrue(msg.length == 160);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '59f1856303ff165e2ab5683dddeb6e8ad81f15bb578579b999eb5746680f22cf' +
      'ec6dba741e591ca4d9e53904837701b374be74bbc0847a92179ac2b67496d807',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '67ebda0a3573a9a58751d4169e10c7e8663febb3a8');
  assertTrue(msg.length == 168);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '13963f81cfabfca71de4739fd24a10ce3897bba1d716907fc0a28490c192a7fc' +
      '3ccb8db1f91af7a2d250d6617f0dfd1519d221d618a02e3e3fa9041cf35ed1ea',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '63e09db99eb4cd6238677859a567df313c8520d845b4');
  assertTrue(msg.length == 176);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9083e5348b08eb9810b2d15781d8265845410de54fe61750d4b93853690649ad' +
      'c6e72490bc2b7c365e2390573d9414becc0939719e0cb78eca6b2c80c2fda920',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f3e06b4bd79e380a65cb679a98ccd732563cc5ebe892e2');
  assertTrue(msg.length == 184);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6b315f106b07c59eedc5ab1df813b3c0b903060e7217cc010e9070278512a885' +
      '008dac8b2472a521e77835a7f4deadc1d591aa23b624b69948a99bb60121c54e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '16b17074d3e3d97557f9ed77d920b4b1bff4e845b345a922');
  assertTrue(msg.length == 192);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6884134582a760046433abcbd53db8ff1a89995862f305b887020f6da6c7b903' +
      'a314721e972bf438483f452a8b09596298a576c903c91df4a414c7bd20fd1d07',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3edf93251349d22806bed25345fd5c190aac96d6cdb2d758b8');
  assertTrue(msg.length == 200);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '299e0daf6605e5b0c30e1ec8bb98e7a3bd7b33b388bdb457452dab509594406c' +
      '8e7b841e6f4e75c8d6fbd614d5eb9e56c359bfafb4285754787ab72b46dd33f0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b2d5a14f01e6b778888c562a059ec819ad89992d16a09f7a54b4');
  assertTrue(msg.length == 208);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ab2e7d745d8ad393439af2a3fbc9cdc25510d4a04e78b526e12b1c0be3b22966' +
      '872ebe652e2f46ed5c5acecd2f233a9175dd295ebeb3a0706fc66fa1b137042b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '844b66f12ba0c5f9e92731f571539d1eef332e1549a49dbfa4c6de');
  assertTrue(msg.length == 216);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c3f9c5781925774783ae9d839772d7513dfcea8c5af8da262c196f9fe80135b2' +
      'b0c8c6ca0a1604e0a3460247620de20b299f2db7871982d27c2176ae5fa7ad65',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '6b6cc692d39860b1f30203653e25d09c01e6a8043c1a9cb8b249a41e');
  assertTrue(msg.length == 224);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2e5263d9a4f21b210e0e161ed39df44102864325788647261a6e70ea4b1ee0ab' +
      'b57b57499bc82158d82336dd53f1ef4464c6a08126e138b2cc0892f765f6af85',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ab1fc9ee845eeb205ec13725daf1fb1f5d50629b14ea9a2235a9350a88');
  assertTrue(msg.length == 232);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '72d188a9df5f3b00057bca22c92c0f8228422d974302d22d4b322e7a6c8fc3b2' +
      'b50ec74c6842781f29f7075c3d4bd065878648846c39bb3e4e2692c0f053f7ed',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '594ed82acfc03c0e359cc560b8e4b85f6ee77ee59a70023c2b3d5b3285b2');
  assertTrue(msg.length == 240);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5ef322cb4014ecbb713a13659612a222225984d31c187debc4459ba7901f03da' +
      'c775400acfe3510b306b79894fb0e8437b412150c9193ee5a2164306ebb78301',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f2c66efbf2a76c5b041860ea576103cd8c6b25e50eca9ff6a2fa88083fe9ac');
  assertTrue(msg.length == 248);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7978f93ef7ed02c4a24abecba124d14dd214e1492ff1e168304c0eab89637da0' +
      'f7a569c43dc4562bdb9404a018b6314fe0eebaccfb25ba76506aa7e9dcd956a7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8ccb08d2a1a282aa8cc99902ecaf0f67a9f21cffe28005cb27fcf129e963f99d');
  assertTrue(msg.length == 256);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4551def2f9127386eea8d4dae1ea8d8e49b2add0509f27ccbce7d9e950ac7db0' +
      '1d5bca579c271b9f2d806730d88f58252fd0c2587851c3ac8a0e72b4e1dc0da6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9f8c49320af9370cd3db20e9b50d3eaa59a6232d7a86fb7d472f124508d7968b' +
      '05');
  assertTrue(msg.length == 264);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '81b002f15c4d48be8517f7ed89df302fb1435c9435efefed58f3eb8ea1191062' +
      '3f1eb9028a66e02121a7f08a7c604226f2324f483e91548dbbd2c441ab704ce5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4ab9aa069475e54b25e5688a52dd4acd134169c858105f01a0a1b134c72d4af5' +
      '1f8e');
  assertTrue(msg.length == 272);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '48ba5a63aba7e7bd8e420475331125a947928c67fdb00f65c4080d9a0b99c067' +
      '2424e76a1ba6bd76dfe492c730f6f9adccaee7bb11571aadb31f6bb628cfa933',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f0c1d3407de92ef7421e42df5c9ab31d2ec0a750a9522869cbe4cabd66908d58' +
      '23ec04');
  assertTrue(msg.length == 280);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9e75c5bca2c2af1d7739787f46e1d981c4f98e493d0724b5252c2fbae3c52671' +
      '9f1d27e6ccd0d705240281e8fbf3db75b9b3205c1413436d3b5d140004b8cca1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ae8c9f8fb41b519b6d943833fe1c32d1c4292fb1ddf1dbe2eb227d9e14d31ed7' +
      '4ebaef12');
  assertTrue(msg.length == 288);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '042f9fd0a4ed3d9fec3655ae11011c6f2bc7e457e8812b6d8be2cd45fc6c432a' +
      '94558c88f22c01439618865e8e49e509c448b342ca914b120344aaf7bcbdca18',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'da39fb86237f00303844e61fc6cfe779e42af53349839590bcd2f0e4cbbc279e' +
      'c0b7e885d1');
  assertTrue(msg.length == 296);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ecb43de8c233a731b38e30c5696f8876761b7ea72efe283fd07bedf20029f47c' +
      '6d2a4427823e100fb087abaf22d7eff42a951c97c3dd05f48a20163fa4367cba',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3e7271d2070ef095394620c4b016576c150f34bea60784613a0f660d7fa5ae56' +
      '872b88c58398');
  assertTrue(msg.length == 304);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8154d0da634ab2266061acc123acb407650ffe9164a22de3fe29bf05393b2aec' +
      'e92cf4db00ea5b4341c31ddb7de151683c8a71b5a44d5c3175790feac67d18ee',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '311fb67f6a0784bb01a2d5a3f3092c407a9d3322319dff9a79f894291c5fac37' +
      '319fb408402e18');
  assertTrue(msg.length == 312);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '1870fe913abb0a4b4f53b6581ae18322cd05328514556607f3f4d7b6a2ac8e91' +
      '85d94d947d8b9c88e0efa66d89b59f7439c75fdadd1816f7412306ab2b59d664',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '7651ab491b8fa86f969d42977d09df5f8bee3e5899180b52c968b0db057a6f02' +
      'a886ad617a84915a');
  assertTrue(msg.length == 320);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f35e50e2e02b8781345f8ceb2198f068ba103476f715cfb487a452882c9f0de0' +
      'c720b2a088a39d06a8a6b64ce4d6470dfeadc4f65ae06672c057e29f14c4daf9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dbe5db685ed7cb848c094524c1723519d49dc66ef9fe6d57e6862a6435750bfa' +
      '0a70f104f5d396e61a');
  assertTrue(msg.length == 328);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2fa6e5b2c443a68050f093e7fb713bd6b18f6274c061ed61d79bf0688a61dba1' +
      '940bcc30998276860943ab038902896d0fbf59b88b07c80de927037097150c40',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9fa83e96b2a6df23fb372895015678e0b2c9cd18a8542c3eaa2c435a76ae4dc9' +
      'bd5136d970daff933acf');
  assertTrue(msg.length == 336);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3a2c0ec88a3e5347cf0ea9c078838300ef7356f9a6c342063277c106b880a00e' +
      'd2be205c13064097bd372fde38007bc306561eb4e74bba2bb20bd354aa690ca6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8a5a45e398bac1d9b896b5a2b4e3566b91d80ad20c977ea7450ff2efb521d82f' +
      '65019ee762e0c85c6cc841');
  assertTrue(msg.length == 344);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3c704620f4066d79c1ff67752980f39ef3d9c1023fa5a213a5265376b14a1516' +
      '6ffe069b51df7710d8907fef9406bf375d502ce086ac82aff17229aaa7a5a334',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '49cfffdaf4d031e33b1d28a447450545f6c4293b38d5afbcb9883976c014f080' +
      '576ec691ac1bff70b742efab');
  assertTrue(msg.length == 352);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8bcc4f1ea2b7862ef1591bfa73916665de8faf65439ddf5cc1be43cebfd5f60f' +
      '205e835a2b186b675b041258c5cff42669316ce25b46a2f4d4218e102f0f5d6f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2ff845d85efbc4fa5637e9448d950496f19d8d57da99b7bd3df7474822f0a790' +
      '586736416714e364c6e1fae04e');
  assertTrue(msg.length == 360);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '236f6f4ed6e858c02d51787e60c578f731f694f8e52b5df4ecd5b04dff14c78e' +
      '56bad1028d6f626c29d85aeee151a2a2846d3eed5cfafa9854a69fea8af6d04a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cfca05fd893c0f005f5ff796f4da19ba27a1e729956b8b715e67ce4b2d2a382a' +
      '72ec7814f2f507b1825209a20fcc');
  assertTrue(msg.length == 368);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd80969284a4565add4dad6ab9b3bdf53446142f84aaf92d4b23dd22ee7241e6c' +
      '81489ac8b246edcb6df9bd7b23d91a0c517f546feba4ed5790a2be6e165c1709',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cfc425759a9c36bb9f4b32eed7767af6566f68ded0adeae25c7a70ca78ec0977' +
      '4d16c8bc357f6d6f7bd441bf62d942');
  assertTrue(msg.length == 376);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b587a785cdf455cc9c544e756c1e306300aa3c59f8725012e68ab4d54020b6d2' +
      '27a164d9f83c905e86f8cebeef708a69f976d6e7b18b9bf78e9b98cc4a5cd1b6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '097c9db919515242c99d973acb1dc4ed482768f974eb83b465f9f6c825033720' +
      '06e4490835e2ec8f92301130bfb790b2');
  assertTrue(msg.length == 384);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ff5a376f938e73014caef7fe3962944a7230d020b7087869ebe7ec70302721cd' +
      '06fcdc981c893a425d05e2f99fe198e4db50a088aee2bf1263212110efed422c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '77e73d387e7bc80419ebf5482b61d5255caf819fb59251ff6a384e75f601ea02' +
      '6d83ef950ed0b67518fb99dee0d8aaef1f');
  assertTrue(msg.length == 392);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c4c89cd882ec945cc888fb9a0127d35e585ecc14a75e4b5b3d8330538d22da28' +
      'cf6af1ebec96dc247f109cd2aaab9756e6946a3d80db8363a4da3e6ddbb510a1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '317e5d9ac73ed0633fa18ebebbca7909ec3a5ef790478f9c38cacec44f196d89' +
      '5835b425774483043341381e7af2d383e51a');
  assertTrue(msg.length == 400);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b10bb04491b9c0c334709b407cda1d503efb6b63ee944f2d366b6855e6e63e5b' +
      '80115be4be7ff63edecdfb5923792e68123976d79212b3884dec2179d1fcf382',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '209461f20666a346fedf4a530f41a6fa280c43665767be923bc1d80bbcb8c9f8' +
      'f93ad75782ea2689c8c5d211d2053b993145a0');
  assertTrue(msg.length == 408);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '67b7a328d9444056a52ca2f695c5d3f3baafb625a14fb32eee8ff26a40ccb296' +
      'bec1771a826b55f7ddb6170d4caf7795b612448e66a0f19356fe505927149b47',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5d61aa45c446f3bf93604b0511313b4e2f306d6b046fbd94797b926746836f2e' +
      '1dbdc56124060c6ca9c911b1122192d112420827');
  assertTrue(msg.length == 416);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'd3931bde2bde8271ed18ca0b9148b12f6f16161e637e376fc961f65bc33bcacf' +
      '2f6addf26a3eaa81b196653cc37e8a739ec5b3df870d8c38c8f28691c22a39bb',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9288c795bb0b86c0419d9c5637dcc37b39bfa18d441e3fbfca75bc0306e5432e' +
      '8e7b3a5627b5bc7fdc424a77520abdff566e7f2bb8');
  assertTrue(msg.length == 424);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e363d0e95d8cd18c384016ebeed6d99c4fa2768e2bd58fca019c5108b9cde1cb' +
      '46f3f884028a55ce282ec310a10037faa1b16b4a6a669957f0b00f350bbd63d0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '780427dc164b2f69b8c7d569266f461e2d30c88c4cd6057fb030a6cf636f24e3' +
      'c0d0db742a7b6193fdaa15eec50dfb4fae6ec7653c91');
  assertTrue(msg.length == 432);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '2964b009fb1bf996de12e030b9d6e0608ae8b9dbf2acfb9beb76fc5361cc104e' +
      'e85c2a46fb7b4cee90848312da302de49afe61c546477e2b25d223d5e3d33560',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ec2a92e47f692b53c1355475c71ceff0b0952a8b3541b2938270247d44e7c5cc' +
      '04e17236b353da028674eab4047d89ec5dad868cfd91ce');
  assertTrue(msg.length == 440);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c83aca6147bfcbbc72c377efa8d53654ba0830c5a6a89e1d2a19b713e68fb534' +
      '640deb833ca512247166dd273b5897e57d526f88eef58f6ff97baee0b4ee5644',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c99e31ad4e23ac68e15e605d0b02437f8147c44f5445a55b68a10905276cce86' +
      '76481c33e8cd3efe322bb13fe0107bb546ccbec7b8b38d10');
  assertTrue(msg.length == 448);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '52992d45a88221d972958e9f2854adaa9a21d2bf7051e1f1019ae78004da50c5' +
      'b55c144a02afffe539d753949a2b056534f5b4c21f248a05baa52a6c38c7f5dd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9aa3e8ad92777dfeb121a646ce2e918d1e12b30754bc09470d6da4af6cc9642b' +
      '012f041ff046569d4fd8d0dccfe448e59feefc908d9ad5af6f');
  assertTrue(msg.length == 456);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '994d1cda4de40aff4713237cf9f78f7033af83369ac9c64e504091ea2f1caff6' +
      'c5152d6a0c5608f82886c0093b3d7fbadd49dfd1f9e0f85accf23bc7dad48904',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5842512c37312511a3d8ae41f5801df60cd682d58b4a997342b6e717e94006c2' +
      '14813e6c63e75591f957a7ec301779838bec8ae3ed7febad0805');
  assertTrue(msg.length == 464);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9763c43331ad0eb279d704c5f6e97e02da8724115026827f889e9fcda21f60fd' +
      '230894ab35abb719890f3afa51afd31bc6852183b9c51059910af460abd2474d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ca14e2ea2f37c78f78ef280f58707ec549a31a94361073e37701bfe503e4c01e' +
      'e1f2e123e00e81a188f08fa050825709128a9b66bb8ae6ea47e41d');
  assertTrue(msg.length == 472);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4600e022a02258739f67fdd367cc1e662631fb087918768352062b9b3c8de8db' +
      'ca0e9ec751b91f284694fbddb8d325c0637bccb21dd2efa92e48dbab2e5e9c26',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '647629c779b24c1e76f41744aba17159487532a0156a7d8264db50d645e9595f' +
      'f81e0c96a850f2aa56c844c613a4b892727a9bfc3d3e20386766f805');
  assertTrue(msg.length == 480);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5bc842fc2d3b7eb31d2d3044df3ec32af114feaa7cfc27ebc8630f46ab6f0c54' +
      '3f59b812e776e5303861d17da3f1f16097641f3b808d4d5cb3e483946409746c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1c5dc0d1dd2e4c717635ff3e9b67caf957aec0f8f63c1b1e221e800a4c14848f' +
      '4ea06e644e5d3e1de592ef5a8007fa3f07171b24bd07578d68963e5cb1');
  assertTrue(msg.length == 488);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'cbf1ea86fa5b3dbf67be82fac41e84cccd0d296c757169b37837d273ccc015ee' +
      'cd102b9ce1cff68fdc7f05d22f2b774734f62ded54c8ee0bf57a5a82010d74f5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8a555e75477d065b3af7e615475f37c0a667f73a4c7af5e4a69f28a68d9f4434' +
      '776a8f90eab7f1d137eb4b22643c0a0d6a16fcfaa1bd62f2783546a9695f');
  assertTrue(msg.length == 496);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c088e4a3d7da2f6f99a8f3f717361108872b8ffef921b383c24b8061d4e7c27f' +
      'c56f4f20dc8f952a14043c5650b5a9e777c49c41cfeb3f2de97ee2e16b2c3924',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ebb3e2ad7803508ba46e81e220b1cff33ea8381504110e9f8092ef085afef84d' +
      'b0d436931d085d0e1b06bd218cf571c79338da31a83b4cb1ec6c06d6b98768');
  assertTrue(msg.length == 504);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f33428d8fc67aa2cc1adcb2822f37f29cbd72abff68190483e415824f0bcecd4' +
      '47cb4f05a9c47031b9c50e0411c552f31cd04c30cea2bc64bcf825a5f8a66028',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c1ca70ae1279ba0b918157558b4920d6b7fba8a06be515170f202fafd36fb7f7' +
      '9d69fad745dba6150568db1e2b728504113eeac34f527fc82f2200b462ecbf5d');
  assertTrue(msg.length == 512);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '046e46623912b3932b8d662ab42583423843206301b58bf20ab6d76fd47f1cbb' +
      'cf421df536ecd7e56db5354e7e0f98822d2129c197f6f0f222b8ec5231f3967d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd3ddddf805b1678a02e39200f6440047acbb062e4a2f046a3ca7f1dd6eb03a18' +
      'be00cd1eb158706a64af5834c68cf7f105b415194605222c99a2cbf72c50cb14' +
      'bf');
  assertTrue(msg.length == 520);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'bae7c5d590bf25a493d8f48b8b4638ccb10541c67996e47287b984322009d27d' +
      '1348f3ef2999f5ee0d38e112cd5a807a57830cdc318a1181e6c4653cdb8cf122',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8e8ef8aa336b3b98894c3126c71878910618838c00ac8590173c91749972ff3d' +
      '42a61137029ad74501684f75e1b8d1d74336aa908c44082ae9eb162e901867f5' +
      '4905');
  assertTrue(msg.length == 528);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '41672931558a93762522b1d55389ecf1b8c0feb8b88f4587fbd417ca809055b0' +
      'cb630d8bea133ab7f6cf1f21c6b35e2e25c0d19583258808e6c23e1a75336103',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '52761e1dac0eaea898e0b07cd24f4b2e6bb7bc200ea4b0528842f17b87154559' +
      'a2ea94459a0e480ae0bdf9f757dd4a335aed0e510138b024a04ed1d591b43232' +
      '34dbd5');
  assertTrue(msg.length == 536);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b826fe80494e19c51b42f2582b2d080ba6b90512f35f2db67dd7fd5ee532eaa1' +
      '6498afba08b4996cbcfdf8d1a2df6b1da939e8265115a48aefa42f38205db436',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3804ebc43cbea80c2bd7e4fda5c5515500cd2d2b846a1378dbf218d5c3771386' +
      '06eb3cb8ac88f9076f6ff4436f90717427c9df1ba052acbbe4585e98b6e8e0bf' +
      '800f1946');
  assertTrue(msg.length == 544);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '17dd6d87bc6773051e52047fd444996afa8124b0483fe121877f98553448772b' +
      'd0e7751fc655e9cc2d29830211015d310f191474ca6adc0477a187c03b8fe252',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2249d698c4d807a8e7b4de21c485738959a0d67e5d2ca6f77983dfccb5dbf479' +
      '31261e1f1537f3cbca253afb6bf4fe5e7672e1dcc860b3d6c8d243afe2d9758b' +
      '375e955692');
  assertTrue(msg.length == 552);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6af44563fc468d51182f6c3be58d45932af1d985c6f283976c91a9ff421f383f' +
      'e21dc7322f397ccead583e26b3e3fda067976a7f34665df25a2ced7b4b09cdec',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '32a9c17033658c54f22c7135ddfc879de94d79593ef2dc7d3041bfa872738389' +
      '864eeda27801794ccc4ff1fcb5ef3fc48833801d6fe959e3627f8ea1536ad00f' +
      'a9c7d7d9f043');
  assertTrue(msg.length == 560);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6a47699dd3ada2f11bc4ea42072b06cc20857bf164497df1285400c250f5848b' +
      '6f71957dbdc845f5daeab913036661f69387893fc2d61c25fa59b9d85b19f401',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3d65f69a590a5baaabcd274fe3ef9e88920ffc7adf05c16d7b0f4d18d72bac1e' +
      '94c3b3d83b8f4c552eb80e9fde3911403f8b000579816f02e1716fd627946031' +
      'd0af0793e7f3e1');
  assertTrue(msg.length == 568);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ffb2d9450943c24b5933c24812459b75d3d9f380344c9bc06fa3e17ee448eca2' +
      'f98ff79f7e2235ccd9f9a8176f68a2254bbc9b834d6ac8d2bfdbc1597c432c9f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '76ff8b20a18cf104f6cdb65e2ba8f66ecf844af7e85e8ef2da19e8848a16052e' +
      'c405a644dafb5ca08ec48f97327ac52c0e56218402c72a9a6dc1cf344d58a716' +
      'a78d7d7529680bae');
  assertTrue(msg.length == 576);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f8858144c6d709dd0689a526a548a43f17494950ba2ac20544799e8ea27201d7' +
      '8bce5b921e29a7b4029278e68341ef2a0ca4ba3894566b3c8f8950e3e545a689',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ca88dddfc876a12f45f19562bc9ca250f43267ab251a7f345c3c022e20144e13' +
      '5604078762ef5c8a8f038cf1b1d6a91709b59dd068396a9e971ab628f74886e7' +
      '65384a23607c1a1e6e');
  assertTrue(msg.length == 584);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4f3d9eeef349ca51a7e419af1686f42795abde58a85335ce68d496e81e4436a8' +
      '0a61dc143a4300008c23a3e71f4ba98743195a3694a8d02fee11bd314569abc0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0a78b16b4026f7ec063db4e7b77c42a298e524e268093c5038853e217dcd65f6' +
      '6428650165fca06a1b4c9cf1537fb5d463630ff3bd71cf32c3538b1fdda3fed5' +
      'c9f601203319b7e1869a');
  assertTrue(msg.length == 592);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6095c3df5b9db7ce524d76123f77421ce888b86a477ae8c6db1d0be8d326d22c' +
      '852915ab03c0c81a5b7ac71e2c14e74bda17a78d2b10585fa214f6546eb710a0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '20f10ef9a0e6128675340171cd248df30b586557620b615ca39a00db534315a9' +
      '012dbdbfd6a994986eb829dbe6cdaf3a37d4f59ac27298742c8f777b6b12677f' +
      '21eb289129579868705f27');
  assertTrue(msg.length == 600);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b4ead3f860eabbd36c770d66c7356f8107acd1485c7c94178c2eaabd50266d76' +
      '45d009972586ef83ed43ed92882137df5117b88f35231b894ec1741ae7501145',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '995c8f747ea418f7d63aba2260b34ac3c7dceebb78438ca4b1f982b7db9798ec' +
      '1a7f32622264cb024c0d9e60e955a6e1d677c923518851990a459b767d0f13cd' +
      '803460f61870db3391b44693');
  assertTrue(msg.length == 608);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a00a601edeaca83041dc452d438a8de549594e25d843c2cf60a0e009fb92d87a' +
      'be28a72690ab657c8d35b43cd02d22ec0755de229d1f922fa6ca18a6d6c2aaae',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0feb23c7e4a19bcbd70bd300d76ec9045d696f8c9687f49ec4154400e231d2f0' +
      '862495150cf250b6f12f172a7d130f8fa5d175bf2f25e280172ccdfb32795170' +
      '1165302728a619aa2f242631c9');
  assertTrue(msg.length == 616);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'eeb6dee30c119fb1e1eb5c15ff2b32d8b9c7464a4e4cc6815cd251a6bae29b49' +
      '961dd5c2fa9c44a9b142ca062c7072cbf3db04299b767789040196bf0c06aa76',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'ac59a110623f1a64666f160ed32926676cb5be25dd9d962f441951b0efcb5d6a' +
      '67ac1a4eae473e49c6257860728853ff415c5e8ec76a8a462ecfd343eeac22da' +
      'd820722c597332fbfd94ebbd32c6');
  assertTrue(msg.length == 624);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f65ea942ae0a47e73b02b1442e5b26083db79307f64dd34a039c476faf18d5c5' +
      '14bb77a2c412a6074a7afc326ea66c74e5705fe2abbabf274333325a15b61fd9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9e3e1077e1333a1fb1aa633ccf2f746588ad426489ea08dff5511438b5f4c0b1' +
      '10d1a4d47b540a12b21ea2aa070578ccfa5c22fe0b743ec0cc621c6b3a03b75f' +
      '4d3eea5dce89e03269afcd9603d0db');
  assertTrue(msg.length == 632);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '4b5c5df80c344c12388c723856cd06965b2190af652480476747dc2195ea3716' +
      'f87c1762359583a5f31522f83f7833bec30f1f47d14540417dd463f5d258cd4a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e881e3284c79d8f5237e699e4fbca84090c664bb53229f58cb0842b0436710c9' +
      'b329d98191b8f030e9c1df89b03858c1569c6ff49a7c07c4a23a8a434b0fde13' +
      'be4f94cb44ee629d5b44d336090d3de6');
  assertTrue(msg.length == 640);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '147d8071c7871ef9256cff32aa63ea031404fa5ee4ec09c56afdd5da919b0cc8' +
      '4a9d35d142c417715203316011cc620cd6855bb117063a5e52867facc680d5f4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'e58521098911503de84311387d375c25929e6e55076eb6934fd8f2b1bb7b9667' +
      'fbd76d5ee204828769a341b1f716da5bdfece6c62a9f4d4f988267fce1f56155' +
      '40dbe375324eef607c910d976b45a5ea5f');
  assertTrue(msg.length == 648);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f97ba056fa41f43b8e1987072a09e828c71c5ff6ad4e37f9ab6b89e2a078933d' +
      'd23052fa72c6615b613904259e9ff9b55ef7b923b89bc8752f6babddd256e117',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3796cf51b8726652a4204733b8fbb047cf00fb91a9837e22ec22b1a268f88e2c' +
      '9f133e5f8527f1b184830e07c3458c83a8ca9f9d9c6998760e610668ba0f22e2' +
      '2b656a737e978b246a17840b7dc4091da85f');
  assertTrue(msg.length == 656);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c8a466199acbcbc93f2ce042968508c046901631e3118a2d0bf39a9b42b4197a' +
      '379b3a86cdeca9df2de1a3eb71b79ae9bf2d6575eadf1878029c4093133f54d3',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9af608d031ccf309d7273c607a8e5e36840d449b55db5b13f03aeb9af49fa7e7' +
      'cf1383ee2ed9c5a8b7515f16fb1c7c84a681590bf90f56597b844db5ebee223d' +
      '78109b72350772f7c72ea996603e1e84f2ba5f');
  assertTrue(msg.length == 664);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f0ded9495b4f64cac585be8a737cfa14247a4a81cdf7f01ebcb134ace71f5a83' +
      'df2cd72e7773fea1e82beae17e13857372792c8231e2ab9fbeb633e399d5f0ae',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd0df1bdf1df6203241722fb9c9c1cf7405017497ae154538ccf9224ad752e6ce' +
      '1d4ae948639aca70cfe86b2b06543cb9914ebd3085aa3e2963f6e9b93d0b03a3' +
      '1ae26fcb9ca974eee016c091a6fcac37b21cc1d7');
  assertTrue(msg.length == 672);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c2da3ea3c8a3fd88a5bc5dea2bc076f861abedefae5a5fbd941ddfd1c41cc331' +
      '2eb2dc826c2c0f65414fe72ebee447d2f9b1a6a56302660d1f86632ee80a175f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '8cbc9480553acef7bcdba9716ea8d66b4131780917de2b0b048045fcb32b5cac' +
      '054808e1fce6e94ad851ecb47fe6cb802225d3551e08ea122093d0078dada564' +
      '212eacf1d6394e0007cc62a1d595ab14ca08a284bc');
  assertTrue(msg.length == 680);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '63b39b88ceb848188b37316e04560e75a5340ab8d417932d231c997e892b41da' +
      'a69d9fe3e9a14dd19ccfbbfa01488c208e7b946cfaf16ca2b1bf7c8d8da4e6b2',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '38f184448f3cf82a54cafc556aff336f23f9149e612134b3fc00c8a56455653d' +
      '88640b12f69062b8432c4335ad8f7ab4ff66cb7eb54f332561a36f024d92c3e2' +
      '6276f4fd48619628cff88e4b8e85cf14ca4767ed990d');
  assertTrue(msg.length == 688);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '9a49265fc641c59f1a91872cdae490d3da73c0c60fd59648e1d17dba1a647a5b' +
      '95629392bb4ff5163d1a3cb45427c1437a3b2e1d9f030c0a8bcc5ed22da9e2ed',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '70900618b1e9e9db62296fb6c6590c9f10b0a632765c489c887f1ab7c0779176' +
      '5a62e38465e1be281b1d396c6e080b7ee3e6fa56a30b9799d0e629be153ee76f' +
      '81bc6a3295aa61489bfa87d53a8ad24248a6ede0dfcfe9');
  assertTrue(msg.length == 696);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '1c8c3357ff1f8d6ac4defb3af462a73e09159e3a20c6506edd8cd3052df941c8' +
      '1f68c5fbb893912619e28640977fe8eaae8e9d5d4e7d5f132552cefab4540bac',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4e6ddae0d805afcd10a055bce584c848d050fb29fe8f1c64b18e1abfe46b6578' +
      '2e6ff536e89d8d40928b41ed7371365c8080a9647f7532ce6c6d4ac21cfb0c80' +
      '20783851ec9a7dbc3948f8fca7adf8b2a78c04d898d31ff6');
  assertTrue(msg.length == 704);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '5c2f996c779b91b3c4639311f54fabbdde7e2212b53dbae4828c8399588fc00d' +
      '3b2ae60918aaaf6bb48bc757e52b2bcea84f5d15bf4ec25d5519fb54f6f26e1b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '696825f6d6ea8173ec47d0959a401c4ddf69f8f08ddd678a4d2ff976e3a4372b' +
      'b39f4159845cb63585e1d4108d32e12fa7c5c9d7ce3508a7f53aca2b4bd951ad' +
      'bcd8984ebb7536563f5884c90bc5023b3316f7e4dc6958f743');
  assertTrue(msg.length == 712);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3ce940ca96b00011375daa95c65f66907d69b3eb3b8d779e6fc971afcc05e990' +
      'bc4c541f434590f6b18b68c080d0f24475a3e764e9cb85343301314ee2fb661e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '79ecdfd47a29a74220a52819ce4589747f2b30b364d0852cce52f91e4f0f48e6' +
      '1c72fa76b60d3002cae89dfc5519d3430b95c098fa4678516b5e355109ea9b37' +
      '45aa41d6f8206ee64ae720f8d44653b001057f2eba7f63cd42f9');
  assertTrue(msg.length == 720);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ba3d0fe04470f4cf8f08c46d82ae3afd1caea8c13bebbe026b5c1777aa59860a' +
      'f2e3da7751844e0be24072af48bc8a6fd77678aaee04e08f63395f5c8a465763',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9263fe75e8f6c7d5d642e2ca6a6eea4f44e9a0f249513ed79c9409ffca5526ca' +
      '4491aebb1382057cc7c36722b0b6c3b15123cde312214f25353abfe30bca1705' +
      '68a8e1ba5408917403a01834080ab607c56a10d0265082498fe0b6');
  assertTrue(msg.length == 728);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7736d7a7fc1eb05857ce7d88abfffa87f58c670bfdfc0a8031f60f379e4b6ad9' +
      '4ac8f13ffe28c697809b5cfac7f13be01e7496a85237c4025539051fb2e32fb6',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '78c17bfe0e02eb526d1a44a1ac127be082181452b625394bd6dc093a2cb432e6' +
      'ee59c2f8b5503aba30dae41e1a1c6702697c99b2c94e94af48b00caf53b2e0e4' +
      'e1bbee81ee282c7b2b35f58cf421a07e828d57a6622626af25835399');
  assertTrue(msg.length == 736);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'b56b6e343166328523e0d1693e5174da643ae83cf69c85a7b3c3bee247b77b84' +
      '702069d9e6b4cab03bf17fe612009bf4239683ca78ca7e876aca7d07603ba714',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '298bb304a920f960447d8fd38b061bf8fe4ac1f871d8a0feb4549feb72ca694a' +
      '5a41b6867d94cd5af77d468ad2f315d127b6c41a862800f3985e573e03774029' +
      '8e2c5c6186a9fb83609be2d49f8b4c31f96a2e49b56dbf09571b38587f');
  assertTrue(msg.length == 744);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '34e3878627904ffbbbd85266cc973c34f931e3cab5d4c31f841c553dd69f8483' +
      '8206067df4f9f3b9102001be19267151e673f5c2d4c2f8438a6999a0a325487d',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a3cf714bf112647e727e8cfd46499acd35a640dd393ddd263cd85cf6225f5989' +
      '0a0686dad1c54eb8d809b81c08a98dba131bbdd6fce8ff59d95db824d8831ea4' +
      '80529da739227a6e0f62b603b38c35cdc2581f614a31879b8be54aeefaa0');
  assertTrue(msg.length == 752);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6f230ae4903ddbef0ba384c2e3506eab318bfd1a46ea76099f65a3fd529c91bc' +
      '2865b9fd943e346de64626b8529f9db1377bf2c5e0129c66b50c6a5cfb364b3a',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '0a427ae55ef3a7e6044a08cf6128cbaaabfd776c4e9374708f2ece246fd73603' +
      'd2f54ac3e01d16cfac2bdaf713920d66e8f0a3d54ee68cff64267d5528cdf2f2' +
      '95f474d10f81173e0143488ac53fc503c444ed23dec63a080ce90c2443dba8');
  assertTrue(msg.length == 760);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'f6bbe5d0cf13ddf41c1436748a5d1ccae2948547b452c2171c7c8e8b66c6ae4d' +
      'e3c0e8b2962bcb60d3de3608479f80e455c9024d9716c38f6f1206861ab1eaac',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2cbbb87511f4948efec3a61b511ededb1dda8b6ecfc0210c11e43a77ee32dc2e' +
      '374afae4268e3d30427804868232a966b56006d3214037076bf6a265b72135af' +
      '0fb2ef7909fea2dea412f7717446b276ff153753662b4d4148c02347e3259169');
  assertTrue(msg.length == 768);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '76897b87a8a1cf835c434f6d391c9e5227351af9d3e20a3389c796b98b424281' +
      'a59068d9c8d567ec2bebc435b0126b059e2d86394a9854d6611e1c922f385496',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '2b23324c9992f60a7fc010159a03cb9a2b290df4fa6a82359b9af602f0a403a5' +
      'ef33ed5da5b2caf87b77e6a4b93b650348ce2a7dbc08f8da9203d710b587ba59' +
      '47c65e899f4a759f8e2b049ae7850a8e3e2962f6ef93ea4c631de5d78e729ec5' +
      'bc');
  assertTrue(msg.length == 776);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3beea0b373ed09cf1c919c51d86d642c9125e0ee81698dc4cbadf02e9e6925ef' +
      'b562fd9b87301a6377ca192be79c4118deabc450b54639000c2e312945451fb5',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '4022f930c7033b00d986c65ff6bbbdf9ebd0e58c52844ff658df3893c3202dc5' +
      '33f873d4a7f5a5f944419fb5528c9b6788479a1e891306acae7995fc06db70a5' +
      '9baa95bef7da79f5e793f2db7f2a55825e4fdb4a34884af881ded1089fd53345' +
      '02a2');
  assertTrue(msg.length == 784);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0358775bbb733ccc49e78f544aeee512370d480d0e13c7e8d5c444c423e59214' +
      '6b45fdb91a1b694d35e36b60e4bc8397fca8bb9790e619339778b9cd1abe3fe9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '1cb77ba43ce77e236b9fc925f589b1c070780a84f99e8f50c1ff846ac92599cf' +
      'e91612c8178325bee642a34f4dffdba2aa2ebcf7064339829b26f27993e1106c' +
      '139c70d578cc05f0e1a777cceddb10a2c67fd9675e4a009df8037d6eeb38f5fb' +
      'a233df');
  assertTrue(msg.length == 792);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6502f46551a3fab3a96428fb97801d7a4aa2f17fef6603238df84e17c74309ed' +
      '3d9489c8b16a9384ee634a3f86d0b3ba9a4dbc9c51ec8bd4bf8d61de6d3d87d7',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '52167de2d6c502d99fa10c27b2ab6203bdebc2cafbbfdef15872a43dd610c236' +
      '2f796ad9bcb5528d95870058fa454453f1e6065b315d410a3f2650e5d71e69d7' +
      '8d9767dfb4accc057fd2069266b0f180cb319e30ded7535bbe52d24be151de4b' +
      'b598fc5c');
  assertTrue(msg.length == 800);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '25cb3ed3983a91b4cf37a65193916c5e3e211b63e943e2f7b50a85d349a463b9' +
      '41aad33eff16561bdfdc92fda06a4e1d94b162de48f06d3c626940b31020925f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'cede6697d422ddaa78e2d55ae080b8b9e9356c69bc558201a2d4b0b3190a812c' +
      '27b34bbcee3a62b781378b1bf636b372bcbae1fa2f816a046a0a649a5c555c64' +
      '1fea4ccd841cc761f38f777972f8c91b0324e71c333ce787f04741439bf087ef' +
      '5e895011c0');
  assertTrue(msg.length == 808);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '0be42a25d77ac6ad995c6be48e783380bad25a61732f87cefb0cce1a769cd690' +
      '81f494a1a12d657664ef2b4d9c41f2ee83f6e9a84327d8756af9f985595e7d3b',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '56d18d3e2e496440d0a5c9e1bcb464faf5bc70a8b562124f5fc9e9deb5fee654' +
      '4b945e833b8b5d131b773ecb2cdd780cd4e1bb9e4f1e3cb0a1d64d19cf4b30e4' +
      '4e6c2d0cbcb4e284ce50db7a8a8062ddb63f981d9026c532bf8eeddf8af5a438' +
      '48a32262178c');
  assertTrue(msg.length == 816);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '982dc61c91a93770582eee8025aa55da8e9edb966bf5cf70d4a6534c0d53a278' +
      '9a8c4fb65b7fed478cda02ed1e0d198d85c5c735b2417c5fab5d34e969fc8e7e',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '25a7320dfaec5af65da4d0f8688e29e8e95532ecc16679ea8aff0f407d898db6' +
      '922855b0e8901aa9681aa3dca617cb440764cdc7293fbeaf7f585b593c2b0531' +
      '738e0ade7c8626b9995f4a84d9fc9b593d6bbee01abc53c5be14bf6956fd2fd8' +
      '1000dafc7c7686');
  assertTrue(msg.length == 824);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '749c928c3d5510925bfe98659025b0ed7c01acd4d59a9bf1c54863a088091771' +
      'dc9d407bdbf83b0f44b0902e10349ba79c84d0981d5e8c4f5c733a117fed0790',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '3d7177b28ffd916e7e0634895833ba0bd9e0653df2cc4202c811536a005aec85' +
      '3a505e75db55d3c7107579041099e382a1feac80dde65d72368e909ab85f56d8' +
      '8e68d7c3c80c38f85bf8c2b36959409cc34ba8e3ad94fe8ee1927612d672d921' +
      '41a329c4dd8a88a9');
  assertTrue(msg.length == 832);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '14a331508cd7d94fcce56a66bf65f20870a281c8442f8dbd4c2371454a2b66f8' +
      'd0994a0b67692e771efc6a5e0b887acae7d6f4ec7338e1aa89f2abc7034c4e4c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c033e4a512297caecdbead892b11a9f7007af9a74bcab89e0bd4ffdd542ca03e' +
      'a12e17a06c42bd43fc5f3f757fce4f6f5831997abac3f95676e1ebdb11ca43e1' +
      '1aa31e5ebabe18ce8d1bbfd8b02f482e1ce581b532e307e6960eb97441506c2e' +
      'd299e1282523f41527');
  assertTrue(msg.length == 840);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '95ac9b7d22aa458921874c4b4331e7d64761853217c3f83c601abcbccd7e2eaa' +
      '6ca6ce9a22ebcfe5046d52f8a09097f043ab8bc59243fd770090bb432c3155e9',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '69fff0f1a3dbfb36e32f025819fa99ea9a0edaef73145bf7fcd05d8bb0a646cb' +
      '3b5d5256d524856acfd2e44d6b72e4ebf1ff23c0ff6c56f821e782d5a15f7052' +
      'a1445b06668eeb4af700679ee7ae26496fbd4640c06aa149964dfd6011df835a' +
      'c13b73c8ff21151e8440');
  assertTrue(msg.length == 848);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '45d4daa652558d1c12beb0f5662c712f325b4c802fc6eb9ee039c949d002bb78' +
      '6f1a732712be941f9c5c79b3e5c43064d63a38578e5a54ee526acb735b9ad45f',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'b2c439c97ab7c63736b3796324d68eeb7a471ed142bd9622684167d61234fff8' +
      '2f93f907537a909bc2e75a4bcbc133cf57197662c1af746ae8b81e5b83de05d9' +
      'b589851de25d3c99c004c1dfb12d93bf50d450af49c428716f5b90ef088e3b6a' +
      '6b2c46d3ce67b379599018');
  assertTrue(msg.length == 856);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c48ec83be5fa669e6ec8db90aca9676cfe2ec0d5e8e7a2431687bb953c0a300b' +
      'e3db4075cca3bac4dfa4d971baf0fa1aff46639db4b238856ff36d1dfcd520f1',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c016f522f26b7470e922b9a287e6d45f6c28813b68c1457e36d9ba266708272f' +
      '9cbc5411f8db9d8bd5a9449fb6eb0cde7d4d03e5df019f2814a90ceed377c59d' +
      '7d92623899bcb0268033073559d4d8de488686cbe3d67796e6df6ad4276d0b52' +
      'cc62c49ebb58d7c95287aa6c');
  assertTrue(msg.length == 864);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '7402f1a99b47e102b3b73140c6771b07ee6c33b3715e9c4027c441bee40511b7' +
      '35d95e508baea78da26fded9b7038e9a53defa58448aba40dc1e62d7ec592107',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a766b2a7ef916721f4677b67dbc65ef9b4d1bda1ad4e53fc854b023644082215' +
      '2a111939e5ab2ba207719472b63fd4f4a54f4bde44a205d334a2d72cfe05abf8' +
      '04f41841b86d36920be6b0b529331ac163a985556c84511ec986439f83e1d731' +
      '1f57d848cfa02df9ea0cf6b99a');
  assertTrue(msg.length == 872);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'ddd60f93a3babc78299cf763e7919d45ac6f479700e1adb05ab137acdf89c152' +
      '1ecb9dfeacd091e58ca57a1db964a9c3cd1fa39192cc1e9f734caa1c5fa62975',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '10f2be77a4055771a67007cd8630e3230e38288499cb160380290174d66da574' +
      '55b6baaa9785c84c8a663de41ed3bd544055b9170cec43cb3eb120eceaba1fe3' +
      '6e3eaa3fa4f99b425cd2519f09bc0282bada52d14ce625b1ded3b24d86b1dad3' +
      '42d2b7be322b775b04fc6b86afb4');
  assertTrue(msg.length == 880);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a872fa33d463b3343cec57c20c66979c33e1ad067bfc703454696aab5dd0003b' +
      'c194318f4a8ebbc74503feb7211a472dadee991efe3e38f21a1310f8a76eac80',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '324533e685f1852e358eea8ea8b81c288b3f3beb1f2bc2b8d3fdbac318382e3d' +
      '7120de30c9c237aa0a34831deb1e5e060a7969cd3a9742ec1e64b354f7eb290c' +
      'ba1c681c66cc7ea994fdf5614f604d1a2718aab581c1c94931b1387e4b7dc736' +
      '35bf3a7301174075fa70a9227d85d3');
  assertTrue(msg.length == 888);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3b26c5170729d0814153becb95f1b65cd42f9a6d0649d914e4f69d938b5e9dc0' +
      '41cd0f5c8da0b484d7c7bc7b1bdefb08fe8b1bfedc81109345bc9e9a399feedf',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '518985977ee21d2bf622a20567124fcbf11c72df805365835ab3c041f4a9cd8a' +
      '0ad63c9dee1018aa21a9fa3720f47dc48006f1aa3dba544950f87e627f369bc2' +
      '793ede21223274492cceb77be7eea50e5a509059929a16d33a9f54796cde5770' +
      'c74bd3ecc25318503f1a41976407aff2');
  assertTrue(msg.length == 896);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'c00926a374cde55b8fbd77f50da1363da19744d3f464e07ce31794c5a61b6f9c' +
      '85689fa1cfe136553527fd876be91673c2cac2dd157b2defea360851b6d92cf4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '9159767275ba6f79cbb3d58c0108339d8c6a41138991ab7aa58b14793b545b04' +
      'bda61dd255127b12cc501d5aaad476e09fa14aec21626e8d57b7d08c36cdb79e' +
      'ea314bdd77e65779a0b54eab08c48ceb976adf631f4246a33f7ef896887ea8b5' +
      'dfa2087a225c8c180f8970696101fc283b');
  assertTrue(msg.length == 904);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3cd3380a90868de17dee4bd4d7f90d7512696f0a92b2d089240d61a9d20cd3af' +
      '094c78bf466c2d404dd2f662ec5f4a299be2adeadf627b98e50e1c072b769d62',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'fe2d8ae200e6657fdc7494af5a12b2ae940348f1f983f0ba98febbe99c80d115' +
      '126d57dbf37296765ebb5990256696588b3851d54c8fbe7ade98a6faf7c20b5e' +
      '4f730f54a7f912ca0ac31bbb53d17949ef69aa0de40c7bab12a871a9b90f6881' +
      '3ca87af4256422a268f4a1d8ec3aa1a947fd');
  assertTrue(msg.length == 912);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8025a8608df0f6a01c34cdec012d4cb25852e1b100b68172fc4e86ac8b7126b6' +
      '4859cb9e767a7e59060989cedbd925afc475ca7369bd43f85ae590e224e036dd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'dc28484ebfd293d62ac759d5754bdf502423e4d419fa79020805134b2ce3dff7' +
      '38c7556c91d810adbad8dd210f041296b73c2185d4646c97fc0a5b69ed49ac8c' +
      '7ced0bd1cfd7e3c3cca47374d189247da6811a40b0ab097067ed4ad40ade2e47' +
      '91e39204e398b3204971445822a1be0dd93af8');
  assertTrue(msg.length == 920);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '615115d2e8b62e345adaa4bdb95395a3b4fe27d71c4a111b86c1841463c5f03d' +
      '6b20d164a39948ab08ae060720d05c10f6022e5c8caf2fa3bca2e04d9c539ded',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '5af8c0f26db4e99b47ec2e4a01a786e77899e46d464ac337f175027b61aef314' +
      '9848af849d76ac39b9b0910fe6594817859e55974fa167518ed72d088dae6b41' +
      '4d744d477974fb719c626da792f981233de24b7579d8acca510a266d73c0ee8e' +
      'e1424343eaf6ffcc59c86c1becce5894072c6c11');
  assertTrue(msg.length == 928);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '09da284d5b6556508be54c8ab6c97bbd472995c6bbd585917ecdb54ea9167208' +
      'daaa070a7b2b7d8e93ce1315f0d1ef8d69667429c44dc5ee1499de57b229a398',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '49cd0ba0df5bb3f43f68464e3e83e9cbd5d5ee077ffa5591e30f939cb30c93f7' +
      'd454fb3fbf8bb05327a89c08dc4baf1eef50237317a405775357f1e0d1f31d9f' +
      '0f0d98124019d47bf18363b1ecfbfe155c10cbc83300e01bc9ce0347c596b35f' +
      '411e6d8229ad2855e42022b0373ade98663c6d6e9c');
  assertTrue(msg.length == 936);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '30cbf0679a97c871574d2fc05d7aa760c6bc8a864b7d246c39b9e812f9b7ff7b' +
      '4ef5197dd5b69493306688b8564de1ad47d75505c913ba6a78788f8caf5788bd',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'a8a37dfc083ad2f47fff468738bf8b728eb7f1907e427fa15cb4424bc685e55e' +
      'd7b2825c9c60b839ccc2fe5fb33e36f570cb8661609e630bda05ee641d938428' +
      '867d90e00744a4aad494c93c5f6d1327878078590cdce1e647c9820818f46764' +
      '1fcd508e2f2ebfd0ff3d4f272393478f3b9e6f806b43');
  assertTrue(msg.length == 944);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '8e1c91729be8eb40226f6c58a029380ef7edb9dc166a5c3cdbcefe90bd30d85c' +
      'b7c4b248e66abf0a3a4c842281299bef6db88858d9e5ab5244f70b7969e1c072',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '36af17595494ef793c42f48410246df07d05936a918afe74cd005e537c586b28' +
      '43701f5df8952242b74586f83339b48f4ba3a66bdeb457ecdf61784eac6765cd' +
      '9b8c570dd628dbba6ae5836b9ac3dbcd795f9efdb8742a35bca232abf36eb3b6' +
      '698b2933965802277ba953a6edcacaf330c1e4e8c7d45f');
  assertTrue(msg.length == 952);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '158bfc348a30b4fabbe355a7d44bdc2122a4c850444c03f289003ce01bfc1ebf' +
      '3ecc0febb6a8ff523d25db7681b05bdce048d11943ab476c1967cf6556c4a120',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '42d66edc5f22e0c13c25504c5101a5d172d2db7209e461efa323c0bfaed27e5f' +
      '808042ea9c3838ea31f9b76de465225ccfbd0c09ca0d9f07e9a43e3e46c7693e' +
      '00a7e1d483900ddb0a629d5563456dbbf299ac91f92c3d3c17b05d180e6c87c6' +
      'c93194c39d90273fcf4a482c56084f95e34c04311fa80438');
  assertTrue(msg.length == 960);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '061afb119a3c60876e04c10f12ad0f4b977593dc5a2d21096a57e7d3f7d4d44f' +
      'def934b2c17d7530674e4f4a1c176dbdcc54811a22e1b8712e4192fc2d4bf8e8',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'f91bb2e1a9c4cd96bf250426b3a6afd9b87ac51e93254d2dae3b16ec686ba80f' +
      'b0bd7a84d218660e9007593075bc4f4c66567f0c7a5fd2010c999a8a0efa81f8' +
      '9ff5bfefe0fb910f0442e6d4a7c55bbb618c69a79a2ddd82a0938927f6fe3a80' +
      'f04beaeb7c7636e3435d12dcf1c6bb6ed0a4edb69c9657fa93');
  assertTrue(msg.length == 968);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6e692c8c694ee0a3565f37a299e0006b85ab4a821b20e76798220229f656efc6' +
      'a20211a4e7e4ed77facde0d70e4d5d95bc8ed1d7a56d8df1446d562f044b344c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'd1eb961ca6a8f67c49b61e4d3ceaa2a1de6f0ea927b132bf987abdaa725b0e1e' +
      '274e46830e99a2f75af608964df0dff9a99024fc6839bac5acd10202f921ac71' +
      'a27fcda681aa3109ebf5f21ee3a849098ea3a551e844fae4b48b5c5bb97ccc80' +
      '2bc5520d68a14cb7e5fc056b67d889d876efb82d0e9a9a2499f1');
  assertTrue(msg.length == 976);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '39b2c76ec207120de4b320c7fe069e602c9c38f257596da7369395e87eb64b3a' +
      'cff988c1839ac269d5012c093f9edd4b7cabf13bdea7d42e969ab108269c6ab0',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'adf2263200f376886ba7b6f5e4411d5f07f7d9d101590c73ace114bafbcb0fdc' +
      '99269e87cd2cead2a1cfe5744394d333aba408a07e21f30233b65b907472e9e3' +
      'c7d6e7aa6d2c47a08a1be7bb877913a6b5604c723384478911c339e3b5fe527c' +
      '7e288705a89c95d970b443347897e79f6c522bafe62b11ef8f3135');
  assertTrue(msg.length == 984);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '3c23d2d8cf4db6ac6a42e27208180f37668bef5ee0a3f879483c8e604e7f4258' +
      '3f202037b8d242c04a87345b8be6dc8b121d6484b9edad0d73c894c1288f5cae',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '18e75b47d898ac629c48e80dbfb75dae1e1700b771165eccdb18d628bfc4063d' +
      'd6c3839a7ec4cd1255c4821b078cd174647b320bb685541d517c579f6b8e3cdd' +
      '2e109a610c7a921653b204ad018d0340d9938735b60262662016767e1d8824a6' +
      '4954086229c0e3b5bd9ad88c54c1dc5aa4e768ff1a9470ee6f6e998f');
  assertTrue(msg.length == 992);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '01c756b7c20b5f95fd2b079ab6a50f28b946fb16266b07c6060945dc4fe9e0d2' +
      '79c5b1505b9ec7d8f8f3c9ebf0c5ee9365aec08cf278d65b64daeccc19d3cbf4',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c2963342cfaa88ccd102a258e6d629f6b0d367dd55116502ca4451ea523623bc' +
      '4175819a0648df3168e8ea8f10ed27354807d76e02ee1fdf1c9c655ee2b9fd08' +
      'd557058dabdf8dcf964bfcacc996ae173971e26ea038d407c824260d06c2848a' +
      '04a488c4c456dbcde2939e561ab908c4097b508638d6cda556465c9cc5');
  assertTrue(msg.length == 1000);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a4d2f59393a5fea612c3c745f4bb9f41aaf3a3ce1679aa8afc1a62baa4ed4528' +
      '19418c8ae1a1e658757976692390fc43d4decf7d855cd8b498b6dc60cae05a90',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      '85360c3d4257d9878e2f5c16d3cd7d0747df3d231e1a8f63fddc69b3b1101af7' +
      '2153de4c8154b090c9815f2466e0e4f02f3af3a89a7fd04e306664f93e5490d4' +
      'ce7fc169d553c520ae15dd02c7c613c39b4acd00e0c9a3c501566e52cecea11f' +
      '7303dd1da61abf3f2532fd396047b1887255f4b256c0afcf58f3ae48c947');
  assertTrue(msg.length == 1008);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'e8352ddcac59e377ea0f9c32bbb43dfd1b6c829fad1954240c41b7c45b0b09db' +
      '11064b64e2442a96f6530aac2c4abf3beb1eae77f2bce4efe88fee1a70cf5423',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'c13e6ca3abb893aa5f82c4a8ef754460628af6b75af02168f45b72f8f09e45ed' +
      '127c203bc7bb80ff0c7bd96f8cc6d8110868eb2cfc01037d8058992a6cf2effc' +
      'bfe498c842e53a2e68a793867968ba18efc4a78b21cdf6a11e5de821dcabab14' +
      '921ddb33625d48a13baffad6fe8272dbdf4433bd0f7b813c981269c388f001');
  assertTrue(msg.length == 1016);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      '6e56f77f6883d0bd4face8b8d557f144661989f66d51b1fe4b8fc7124d66d9d2' +
      '0218616fea1bcf86c08d63bf8f2f21845a3e519083b937e70aa7c358310b5a7c',
      sha.digest());

  msg = goog.crypt.hexToByteArray(
      'fd2203e467574e834ab07c9097ae164532f24be1eb5d88f1af7748ceff0d2c67' +
      'a21f4e4097f9d3bb4e9fbf97186e0db6db0100230a52b453d421f8ab9c9a6043' +
      'aa3295ea20d2f06a2f37470d8a99075f1b8a8336f6228cf08b5942fc1fb4299c' +
      '7d2480e8e82bce175540bdfad7752bc95b577f229515394f3ae5cec870a4b2f8');
  assertTrue(msg.length == 1024);
  sha.reset();
  sha.update(msg);
  assertArrayEquals(
      'a21b1077d52b27ac545af63b32746c6e3c51cb0cb9f281eb9f3580a6d4996d5c' +
      '9917d2a6e484627a9d5a06fa1b25327a9d710e027387fc3e07d7c4d14c6086cc',
      sha.digest());

}
