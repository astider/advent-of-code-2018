const list = [
  '#1 @ 7,589: 24x11',
  '#2 @ 846,110: 28x22',
  '#3 @ 940,313: 27x11',
  '#4 @ 457,400: 27x27',
  '#5 @ 762,971: 13x21',
  '#6 @ 703,27: 3x9',
  '#7 @ 154,903: 13x12',
  '#8 @ 404,604: 18x17',
  '#9 @ 339,668: 17x25',
  '#10 @ 293,931: 14x20',
  '#11 @ 733,923: 29x22',
  '#12 @ 512,502: 13x15',
  '#13 @ 562,173: 14x28',
  '#14 @ 79,942: 17x19',
  '#15 @ 264,48: 14x23',
  '#16 @ 891,581: 13x21',
  '#17 @ 621,54: 11x18',
  '#18 @ 939,527: 18x29',
  '#19 @ 568,858: 20x16',
  '#20 @ 147,56: 29x22',
  '#21 @ 945,933: 27x26',
  '#22 @ 749,595: 21x27',
  '#23 @ 770,380: 26x27',
  '#24 @ 35,926: 23x17',
  '#25 @ 746,212: 20x23',
  '#26 @ 877,590: 27x27',
  '#27 @ 32,740: 10x19',
  '#28 @ 710,879: 13x16',
  '#29 @ 460,47: 16x10',
  '#30 @ 190,0: 18x27',
  '#31 @ 824,675: 12x28',
  '#32 @ 607,394: 21x17',
  '#33 @ 586,395: 16x20',
  '#34 @ 833,489: 23x16',
  '#35 @ 587,155: 19x23',
  '#36 @ 9,186: 13x23',
  '#37 @ 961,422: 20x18',
  '#38 @ 509,875: 18x22',
  '#39 @ 900,811: 11x23',
  '#40 @ 323,485: 10x13',
  '#41 @ 153,704: 18x29',
  '#42 @ 390,268: 21x25',
  '#43 @ 15,267: 23x20',
  '#44 @ 764,871: 21x16',
  '#45 @ 546,111: 17x26',
  '#46 @ 325,154: 16x22',
  '#47 @ 282,5: 23x11',
  '#48 @ 22,924: 12x25',
  '#49 @ 629,218: 29x28',
  '#50 @ 639,184: 23x17',
  '#51 @ 229,922: 23x13',
  '#52 @ 631,900: 22x13',
  '#53 @ 77,717: 17x25',
  '#54 @ 755,892: 10x28',
  '#55 @ 268,217: 16x17',
  '#56 @ 184,31: 16x27',
  '#57 @ 795,495: 15x19',
  '#58 @ 28,494: 18x11',
  '#59 @ 252,907: 25x16',
  '#60 @ 308,950: 20x26',
  '#61 @ 497,889: 27x20',
  '#62 @ 270,920: 17x12',
  '#63 @ 594,804: 13x21',
  '#64 @ 572,182: 19x21',
  '#65 @ 373,353: 22x17',
  '#66 @ 905,674: 14x10',
  '#67 @ 899,315: 29x27',
  '#68 @ 930,549: 16x11',
  '#69 @ 267,173: 18x25',
  '#70 @ 697,145: 24x20',
  '#71 @ 660,416: 15x25',
  '#72 @ 515,930: 20x24',
  '#73 @ 427,408: 20x17',
  '#74 @ 41,937: 18x18',
  '#75 @ 733,669: 22x26',
  '#76 @ 49,631: 28x23',
  '#77 @ 457,952: 19x22',
  '#78 @ 27,963: 28x19',
  '#79 @ 202,231: 21x10',
  '#80 @ 352,147: 10x25',
  '#81 @ 472,560: 27x16',
  '#82 @ 302,247: 11x18',
  '#83 @ 303,847: 28x13',
  '#84 @ 954,397: 12x17',
  '#85 @ 234,508: 21x19',
  '#86 @ 436,4: 27x22',
  '#87 @ 14,276: 18x19',
  '#88 @ 722,757: 23x10',
  '#89 @ 842,24: 28x13',
  '#90 @ 890,962: 29x11',
  '#91 @ 310,0: 12x18',
  '#92 @ 492,248: 14x19',
  '#93 @ 518,370: 11x16',
  '#94 @ 647,902: 20x14',
  '#95 @ 107,76: 12x23',
  '#96 @ 878,768: 22x13',
  '#97 @ 539,534: 29x16',
  '#98 @ 31,479: 18x19',
  '#99 @ 571,765: 15x15',
  '#100 @ 254,233: 15x14',
  '#101 @ 526,441: 25x23',
  '#102 @ 543,343: 16x11',
  '#103 @ 840,507: 22x11',
  '#104 @ 544,538: 19x13',
  '#105 @ 9,471: 11x17',
  '#106 @ 803,498: 15x26',
  '#107 @ 926,882: 16x16',
  '#108 @ 239,67: 16x21',
  '#109 @ 402,330: 14x14',
  '#110 @ 673,598: 29x10',
  '#111 @ 448,402: 19x13',
  '#112 @ 179,484: 29x21',
  '#113 @ 403,600: 22x12',
  '#114 @ 835,729: 27x16',
  '#115 @ 739,178: 14x26',
  '#116 @ 276,43: 18x16',
  '#117 @ 864,892: 26x11',
  '#118 @ 586,398: 13x25',
  '#119 @ 232,855: 12x23',
  '#120 @ 838,929: 27x20',
  '#121 @ 254,877: 18x17',
  '#122 @ 258,718: 14x23',
  '#123 @ 269,453: 13x20',
  '#124 @ 755,823: 19x25',
  '#125 @ 462,749: 22x10',
  '#126 @ 839,0: 28x11',
  '#127 @ 680,745: 23x19',
  '#128 @ 886,763: 12x20',
  '#129 @ 285,712: 25x12',
  '#130 @ 573,522: 27x13',
  '#131 @ 808,871: 27x22',
  '#132 @ 310,13: 10x15',
  '#133 @ 305,659: 21x28',
  '#134 @ 301,294: 28x26',
  '#135 @ 607,793: 26x11',
  '#136 @ 949,112: 21x28',
  '#137 @ 8,933: 17x16',
  '#138 @ 721,880: 10x18',
  '#139 @ 542,858: 26x17',
  '#140 @ 37,464: 21x26',
  '#141 @ 348,827: 29x26',
  '#142 @ 97,388: 15x13',
  '#143 @ 258,461: 23x18',
  '#144 @ 431,625: 11x20',
  '#145 @ 650,721: 27x18',
  '#146 @ 721,537: 25x22',
  '#147 @ 770,939: 22x14',
  '#148 @ 108,653: 27x20',
  '#149 @ 816,79: 12x11',
  '#150 @ 579,237: 10x15',
  '#151 @ 279,604: 10x12',
  '#152 @ 288,170: 17x26',
  '#153 @ 279,75: 24x13',
  '#154 @ 249,792: 20x21',
  '#155 @ 934,195: 27x21',
  '#156 @ 676,909: 18x25',
  '#157 @ 525,261: 21x18',
  '#158 @ 602,28: 28x28',
  '#159 @ 290,699: 13x18',
  '#160 @ 544,304: 24x26',
  '#161 @ 3,53: 20x17',
  '#162 @ 924,62: 14x16',
  '#163 @ 700,923: 25x16',
  '#164 @ 742,375: 29x26',
  '#165 @ 92,87: 23x14',
  '#166 @ 709,933: 24x20',
  '#167 @ 638,702: 11x16',
  '#168 @ 485,336: 19x14',
  '#169 @ 689,547: 10x15',
  '#170 @ 834,262: 16x23',
  '#171 @ 561,442: 26x28',
  '#172 @ 122,638: 4x5',
  '#173 @ 40,741: 10x23',
  '#174 @ 527,583: 22x20',
  '#175 @ 799,397: 28x21',
  '#176 @ 242,698: 23x28',
  '#177 @ 896,581: 16x29',
  '#178 @ 927,264: 26x22',
  '#179 @ 750,49: 24x21',
  '#180 @ 768,416: 25x19',
  '#181 @ 397,61: 19x11',
  '#182 @ 117,669: 28x12',
  '#183 @ 32,544: 15x22',
  '#184 @ 359,935: 7x11',
  '#185 @ 37,151: 24x27',
  '#186 @ 291,63: 14x20',
  '#187 @ 802,562: 27x21',
  '#188 @ 366,91: 22x22',
  '#189 @ 429,204: 16x27',
  '#190 @ 851,750: 11x14',
  '#191 @ 376,107: 29x12',
  '#192 @ 106,244: 14x18',
  '#193 @ 850,312: 26x18',
  '#194 @ 35,951: 18x17',
  '#195 @ 100,849: 26x20',
  '#196 @ 759,962: 13x17',
  '#197 @ 800,945: 18x14',
  '#198 @ 648,406: 29x17',
  '#199 @ 202,739: 23x28',
  '#200 @ 739,44: 29x28',
  '#201 @ 548,595: 29x27',
  '#202 @ 929,50: 23x19',
  '#203 @ 704,923: 25x24',
  '#204 @ 385,540: 12x18',
  '#205 @ 524,47: 13x25',
  '#206 @ 299,739: 10x29',
  '#207 @ 523,51: 15x13',
  '#208 @ 486,508: 26x15',
  '#209 @ 959,389: 16x10',
  '#210 @ 406,943: 27x17',
  '#211 @ 42,775: 14x25',
  '#212 @ 652,177: 22x21',
  '#213 @ 714,471: 16x11',
  '#214 @ 560,624: 29x23',
  '#215 @ 491,44: 25x21',
  '#216 @ 207,85: 15x14',
  '#217 @ 568,418: 22x24',
  '#218 @ 270,43: 29x17',
  '#219 @ 412,947: 13x28',
  '#220 @ 965,290: 18x15',
  '#221 @ 570,310: 13x26',
  '#222 @ 198,9: 18x19',
  '#223 @ 868,738: 22x17',
  '#224 @ 12,319: 13x14',
  '#225 @ 243,824: 14x13',
  '#226 @ 69,72: 16x22',
  '#227 @ 448,195: 29x18',
  '#228 @ 722,313: 22x16',
  '#229 @ 167,526: 11x11',
  '#230 @ 775,289: 25x14',
  '#231 @ 301,375: 15x16',
  '#232 @ 136,660: 12x18',
  '#233 @ 700,250: 23x28',
  '#234 @ 234,491: 28x29',
  '#235 @ 844,135: 20x20',
  '#236 @ 246,532: 13x19',
  '#237 @ 801,392: 21x15',
  '#238 @ 913,50: 13x14',
  '#239 @ 104,793: 26x15',
  '#240 @ 828,617: 16x10',
  '#241 @ 232,392: 26x15',
  '#242 @ 832,129: 24x10',
  '#243 @ 305,231: 25x18',
  '#244 @ 48,174: 25x13',
  '#245 @ 830,308: 14x28',
  '#246 @ 254,717: 23x27',
  '#247 @ 548,717: 20x28',
  '#248 @ 681,444: 21x15',
  '#249 @ 790,117: 11x13',
  '#250 @ 126,343: 26x14',
  '#251 @ 34,650: 25x27',
  '#252 @ 518,897: 18x14',
  '#253 @ 908,148: 21x27',
  '#254 @ 404,595: 18x20',
  '#255 @ 316,617: 21x18',
  '#256 @ 52,482: 12x29',
  '#257 @ 416,383: 25x10',
  '#258 @ 768,250: 24x19',
  '#259 @ 758,827: 20x21',
  '#260 @ 851,406: 22x20',
  '#261 @ 327,1: 27x24',
  '#262 @ 338,961: 21x26',
  '#263 @ 867,876: 27x25',
  '#264 @ 685,791: 18x15',
  '#265 @ 407,312: 20x18',
  '#266 @ 149,475: 12x19',
  '#267 @ 472,415: 10x10',
  '#268 @ 974,285: 16x25',
  '#269 @ 753,645: 26x22',
  '#270 @ 676,178: 16x22',
  '#271 @ 522,370: 19x18',
  '#272 @ 623,824: 18x14',
  '#273 @ 967,96: 19x25',
  '#274 @ 458,945: 17x11',
  '#275 @ 775,382: 15x6',
  '#276 @ 620,40: 16x22',
  '#277 @ 911,222: 17x25',
  '#278 @ 575,801: 28x17',
  '#279 @ 523,821: 19x13',
  '#280 @ 618,611: 12x24',
  '#281 @ 286,762: 20x19',
  '#282 @ 252,965: 12x17',
  '#283 @ 306,480: 10x28',
  '#284 @ 407,623: 12x22',
  '#285 @ 299,556: 15x26',
  '#286 @ 841,32: 23x15',
  '#287 @ 445,352: 18x17',
  '#288 @ 359,215: 21x26',
  '#289 @ 607,799: 29x11',
  '#290 @ 7,592: 16x23',
  '#291 @ 693,145: 24x22',
  '#292 @ 814,963: 14x17',
  '#293 @ 619,732: 18x26',
  '#294 @ 277,182: 23x12',
  '#295 @ 312,905: 7x3',
  '#296 @ 723,387: 23x28',
  '#297 @ 487,965: 12x15',
  '#298 @ 274,35: 24x17',
  '#299 @ 690,432: 14x16',
  '#300 @ 140,240: 11x17',
  '#301 @ 841,739: 16x17',
  '#302 @ 48,58: 11x27',
  '#303 @ 81,511: 26x11',
  '#304 @ 100,902: 20x11',
  '#305 @ 137,402: 15x15',
  '#306 @ 556,186: 16x13',
  '#307 @ 918,462: 28x11',
  '#308 @ 266,631: 25x11',
  '#309 @ 121,2: 27x19',
  '#310 @ 783,300: 17x17',
  '#311 @ 41,557: 26x23',
  '#312 @ 896,448: 22x28',
  '#313 @ 691,802: 15x26',
  '#314 @ 532,49: 23x13',
  '#315 @ 641,34: 14x7',
  '#316 @ 227,77: 21x28',
  '#317 @ 480,358: 16x19',
  '#318 @ 766,192: 17x14',
  '#319 @ 334,818: 16x28',
  '#320 @ 218,161: 29x22',
  '#321 @ 317,265: 23x15',
  '#322 @ 78,136: 12x19',
  '#323 @ 101,70: 20x26',
  '#324 @ 467,79: 14x28',
  '#325 @ 177,47: 24x13',
  '#326 @ 233,512: 16x13',
  '#327 @ 126,798: 24x17',
  '#328 @ 585,74: 23x10',
  '#329 @ 712,141: 29x12',
  '#330 @ 243,502: 13x22',
  '#331 @ 899,548: 19x26',
  '#332 @ 742,470: 28x15',
  '#333 @ 469,836: 12x12',
  '#334 @ 296,884: 11x22',
  '#335 @ 616,747: 23x10',
  '#336 @ 433,304: 26x21',
  '#337 @ 891,16: 10x11',
  '#338 @ 842,446: 10x13',
  '#339 @ 403,628: 29x26',
  '#340 @ 502,102: 19x28',
  '#341 @ 962,386: 22x18',
  '#342 @ 191,932: 22x25',
  '#343 @ 45,662: 27x12',
  '#344 @ 390,398: 23x24',
  '#345 @ 537,191: 13x15',
  '#346 @ 722,542: 19x10',
  '#347 @ 701,688: 18x26',
  '#348 @ 392,284: 16x17',
  '#349 @ 44,10: 24x19',
  '#350 @ 295,80: 27x21',
  '#351 @ 216,326: 12x14',
  '#352 @ 321,793: 23x13',
  '#353 @ 569,899: 25x27',
  '#354 @ 248,871: 21x25',
  '#355 @ 476,867: 12x15',
  '#356 @ 678,328: 19x15',
  '#357 @ 153,587: 28x10',
  '#358 @ 977,91: 16x13',
  '#359 @ 400,488: 19x17',
  '#360 @ 11,965: 28x22',
  '#361 @ 803,860: 28x19',
  '#362 @ 290,418: 15x27',
  '#363 @ 210,105: 12x10',
  '#364 @ 258,941: 18x14',
  '#365 @ 915,246: 29x12',
  '#366 @ 48,654: 18x21',
  '#367 @ 340,129: 11x21',
  '#368 @ 758,71: 10x18',
  '#369 @ 847,737: 16x22',
  '#370 @ 605,164: 13x24',
  '#371 @ 551,131: 25x16',
  '#372 @ 440,71: 22x28',
  '#373 @ 514,599: 29x10',
  '#374 @ 362,703: 26x22',
  '#375 @ 143,117: 13x12',
  '#376 @ 663,900: 20x29',
  '#377 @ 661,663: 23x19',
  '#378 @ 480,72: 25x23',
  '#379 @ 728,184: 24x24',
  '#380 @ 865,1: 21x12',
  '#381 @ 703,405: 27x16',
  '#382 @ 435,870: 14x15',
  '#383 @ 899,453: 21x14',
  '#384 @ 571,980: 16x17',
  '#385 @ 907,582: 16x16',
  '#386 @ 885,2: 18x21',
  '#387 @ 6,786: 28x22',
  '#388 @ 688,693: 22x17',
  '#389 @ 101,724: 11x23',
  '#390 @ 8,978: 24x12',
  '#391 @ 38,863: 27x23',
  '#392 @ 504,824: 25x15',
  '#393 @ 960,240: 15x16',
  '#394 @ 170,700: 13x19',
  '#395 @ 690,419: 19x12',
  '#396 @ 245,867: 15x25',
  '#397 @ 476,525: 15x28',
  '#398 @ 486,432: 26x11',
  '#399 @ 765,417: 27x18',
  '#400 @ 246,618: 26x21',
  '#401 @ 327,38: 19x21',
  '#402 @ 220,243: 28x25',
  '#403 @ 7,738: 28x24',
  '#404 @ 978,792: 19x21',
  '#405 @ 471,64: 16x27',
  '#406 @ 305,57: 20x11',
  '#407 @ 285,306: 18x25',
  '#408 @ 121,219: 15x20',
  '#409 @ 52,164: 10x20',
  '#410 @ 836,864: 10x16',
  '#411 @ 30,737: 16x27',
  '#412 @ 227,385: 15x27',
  '#413 @ 278,26: 28x18',
  '#414 @ 429,240: 29x24',
  '#415 @ 543,30: 11x18',
  '#416 @ 155,715: 21x28',
  '#417 @ 804,378: 24x21',
  '#418 @ 712,902: 24x13',
  '#419 @ 814,577: 25x18',
  '#420 @ 249,98: 13x10',
  '#421 @ 481,31: 20x22',
  '#422 @ 804,409: 16x24',
  '#423 @ 354,922: 24x29',
  '#424 @ 834,274: 17x27',
  '#425 @ 470,940: 15x28',
  '#426 @ 78,870: 24x18',
  '#427 @ 970,156: 23x18',
  '#428 @ 466,417: 10x27',
  '#429 @ 822,448: 24x20',
  '#430 @ 455,797: 14x25',
  '#431 @ 172,645: 15x11',
  '#432 @ 857,132: 20x16',
  '#433 @ 752,154: 12x27',
  '#434 @ 614,555: 21x21',
  '#435 @ 176,858: 18x19',
  '#436 @ 978,210: 21x15',
  '#437 @ 142,311: 24x13',
  '#438 @ 76,701: 16x17',
  '#439 @ 268,205: 26x17',
  '#440 @ 975,591: 13x13',
  '#441 @ 964,857: 12x20',
  '#442 @ 548,530: 12x13',
  '#443 @ 488,327: 15x25',
  '#444 @ 27,776: 17x16',
  '#445 @ 549,860: 26x27',
  '#446 @ 586,714: 25x15',
  '#447 @ 4,24: 21x20',
  '#448 @ 125,599: 25x25',
  '#449 @ 200,638: 25x14',
  '#450 @ 294,2: 18x25',
  '#451 @ 317,784: 20x13',
  '#452 @ 548,660: 17x21',
  '#453 @ 691,559: 17x25',
  '#454 @ 765,683: 14x24',
  '#455 @ 287,192: 24x13',
  '#456 @ 135,326: 10x15',
  '#457 @ 97,301: 20x25',
  '#458 @ 824,834: 29x25',
  '#459 @ 794,421: 29x12',
  '#460 @ 719,385: 26x13',
  '#461 @ 568,788: 11x23',
  '#462 @ 452,243: 17x19',
  '#463 @ 40,138: 21x12',
  '#464 @ 674,115: 19x24',
  '#465 @ 180,99: 13x12',
  '#466 @ 498,228: 27x13',
  '#467 @ 604,2: 11x16',
  '#468 @ 582,446: 26x20',
  '#469 @ 704,882: 26x19',
  '#470 @ 887,565: 11x16',
  '#471 @ 822,972: 18x24',
  '#472 @ 868,349: 17x14',
  '#473 @ 610,6: 26x15',
  '#474 @ 111,225: 15x10',
  '#475 @ 647,906: 22x10',
  '#476 @ 819,209: 15x18',
  '#477 @ 776,106: 16x15',
  '#478 @ 645,960: 24x21',
  '#479 @ 916,116: 23x22',
  '#480 @ 946,84: 18x26',
  '#481 @ 971,388: 17x14',
  '#482 @ 292,492: 17x15',
  '#483 @ 848,39: 15x19',
  '#484 @ 928,296: 22x25',
  '#485 @ 828,731: 10x21',
  '#486 @ 328,392: 26x28',
  '#487 @ 370,57: 20x11',
  '#488 @ 165,873: 17x10',
  '#489 @ 456,404: 14x20',
  '#490 @ 9,350: 19x28',
  '#491 @ 405,54: 28x15',
  '#492 @ 938,104: 16x16',
  '#493 @ 128,254: 19x26',
  '#494 @ 831,40: 11x20',
  '#495 @ 592,802: 19x26',
  '#496 @ 979,128: 20x29',
  '#497 @ 166,883: 13x25',
  '#498 @ 329,28: 21x21',
  '#499 @ 926,109: 23x10',
  '#500 @ 899,270: 17x27',
  '#501 @ 533,830: 26x20',
  '#502 @ 336,873: 19x17',
  '#503 @ 315,301: 15x10',
  '#504 @ 204,25: 19x17',
  '#505 @ 620,813: 24x12',
  '#506 @ 739,481: 21x16',
  '#507 @ 191,808: 17x19',
  '#508 @ 317,631: 27x17',
  '#509 @ 508,894: 29x13',
  '#510 @ 481,582: 16x25',
  '#511 @ 872,160: 19x24',
  '#512 @ 782,119: 14x15',
  '#513 @ 851,122: 20x10',
  '#514 @ 811,526: 27x28',
  '#515 @ 712,917: 16x29',
  '#516 @ 897,955: 20x14',
  '#517 @ 259,828: 22x25',
  '#518 @ 249,41: 21x24',
  '#519 @ 650,909: 13x3',
  '#520 @ 302,910: 21x27',
  '#521 @ 467,193: 19x11',
  '#522 @ 600,382: 15x17',
  '#523 @ 260,189: 12x21',
  '#524 @ 821,138: 28x18',
  '#525 @ 748,878: 19x15',
  '#526 @ 351,11: 28x14',
  '#527 @ 112,766: 28x20',
  '#528 @ 591,310: 17x19',
  '#529 @ 726,14: 16x11',
  '#530 @ 930,449: 29x19',
  '#531 @ 30,219: 28x12',
  '#532 @ 430,710: 23x29',
  '#533 @ 574,95: 27x29',
  '#534 @ 807,808: 10x14',
  '#535 @ 534,785: 13x10',
  '#536 @ 401,262: 23x13',
  '#537 @ 659,257: 28x19',
  '#538 @ 35,64: 29x24',
  '#539 @ 569,123: 10x14',
  '#540 @ 32,429: 22x11',
  '#541 @ 179,87: 21x28',
  '#542 @ 652,150: 22x17',
  '#543 @ 328,464: 23x25',
  '#544 @ 806,605: 25x11',
  '#545 @ 684,914: 18x17',
  '#546 @ 105,80: 28x11',
  '#547 @ 134,797: 19x23',
  '#548 @ 850,505: 14x24',
  '#549 @ 390,612: 29x29',
  '#550 @ 478,201: 22x28',
  '#551 @ 419,708: 13x24',
  '#552 @ 670,425: 12x28',
  '#553 @ 541,923: 24x15',
  '#554 @ 157,433: 28x15',
  '#555 @ 801,76: 25x17',
  '#556 @ 603,955: 15x10',
  '#557 @ 285,52: 10x29',
  '#558 @ 359,635: 22x18',
  '#559 @ 720,943: 26x16',
  '#560 @ 921,56: 23x27',
  '#561 @ 331,37: 12x15',
  '#562 @ 417,484: 29x14',
  '#563 @ 648,30: 26x23',
  '#564 @ 392,301: 22x18',
  '#565 @ 562,763: 13x11',
  '#566 @ 460,608: 23x14',
  '#567 @ 370,732: 23x19',
  '#568 @ 499,532: 12x29',
  '#569 @ 7,29: 7x11',
  '#570 @ 690,317: 12x15',
  '#571 @ 769,954: 10x20',
  '#572 @ 29,947: 26x27',
  '#573 @ 206,815: 18x16',
  '#574 @ 314,279: 16x29',
  '#575 @ 471,449: 23x21',
  '#576 @ 49,920: 19x28',
  '#577 @ 202,396: 29x10',
  '#578 @ 241,571: 21x26',
  '#579 @ 596,129: 13x28',
  '#580 @ 457,927: 14x22',
  '#581 @ 584,915: 11x20',
  '#582 @ 417,458: 27x19',
  '#583 @ 721,311: 22x21',
  '#584 @ 503,21: 23x28',
  '#585 @ 826,538: 29x25',
  '#586 @ 773,512: 25x12',
  '#587 @ 479,444: 13x20',
  '#588 @ 109,68: 22x22',
  '#589 @ 886,743: 19x17',
  '#590 @ 304,439: 22x11',
  '#591 @ 91,236: 10x19',
  '#592 @ 939,935: 11x18',
  '#593 @ 929,569: 17x29',
  '#594 @ 611,790: 22x26',
  '#595 @ 637,720: 20x23',
  '#596 @ 944,774: 20x22',
  '#597 @ 915,873: 23x20',
  '#598 @ 215,496: 27x16',
  '#599 @ 939,744: 22x28',
  '#600 @ 100,312: 18x24',
  '#601 @ 721,850: 27x17',
  '#602 @ 890,518: 18x13',
  '#603 @ 554,715: 25x28',
  '#604 @ 813,599: 24x25',
  '#605 @ 300,831: 26x29',
  '#606 @ 814,396: 28x19',
  '#607 @ 665,655: 22x26',
  '#608 @ 734,601: 15x15',
  '#609 @ 622,777: 27x26',
  '#610 @ 209,403: 15x11',
  '#611 @ 303,769: 27x21',
  '#612 @ 156,462: 17x13',
  '#613 @ 289,482: 28x25',
  '#614 @ 317,58: 13x27',
  '#615 @ 184,91: 7x16',
  '#616 @ 262,668: 21x27',
  '#617 @ 359,697: 16x19',
  '#618 @ 169,551: 23x13',
  '#619 @ 17,760: 17x28',
  '#620 @ 983,664: 14x11',
  '#621 @ 502,531: 15x10',
  '#622 @ 558,864: 13x14',
  '#623 @ 217,645: 14x16',
  '#624 @ 704,320: 11x13',
  '#625 @ 927,918: 18x13',
  '#626 @ 199,822: 24x23',
  '#627 @ 304,701: 11x19',
  '#628 @ 183,19: 21x21',
  '#629 @ 643,963: 12x25',
  '#630 @ 684,629: 10x21',
  '#631 @ 593,395: 16x11',
  '#632 @ 275,869: 22x20',
  '#633 @ 712,243: 20x24',
  '#634 @ 754,197: 13x18',
  '#635 @ 682,896: 12x20',
  '#636 @ 313,435: 21x16',
  '#637 @ 127,861: 21x19',
  '#638 @ 935,322: 18x16',
  '#639 @ 610,359: 17x29',
  '#640 @ 400,491: 8x12',
  '#641 @ 970,719: 11x16',
  '#642 @ 817,1: 10x18',
  '#643 @ 910,574: 28x15',
  '#644 @ 2,485: 13x28',
  '#645 @ 795,193: 27x21',
  '#646 @ 980,206: 17x11',
  '#647 @ 169,579: 14x16',
  '#648 @ 84,35: 26x18',
  '#649 @ 972,590: 10x14',
  '#650 @ 802,600: 13x19',
  '#651 @ 553,284: 29x21',
  '#652 @ 821,685: 11x23',
  '#653 @ 681,550: 14x23',
  '#654 @ 145,161: 24x11',
  '#655 @ 753,680: 16x17',
  '#656 @ 323,964: 24x26',
  '#657 @ 874,66: 10x29',
  '#658 @ 19,966: 28x29',
  '#659 @ 13,290: 12x25',
  '#660 @ 139,301: 11x27',
  '#661 @ 169,851: 16x12',
  '#662 @ 587,286: 13x14',
  '#663 @ 480,371: 12x20',
  '#664 @ 795,404: 18x26',
  '#665 @ 751,876: 28x10',
  '#666 @ 544,193: 15x24',
  '#667 @ 354,872: 24x22',
  '#668 @ 0,470: 28x25',
  '#669 @ 144,342: 16x15',
  '#670 @ 392,485: 23x23',
  '#671 @ 537,507: 17x27',
  '#672 @ 9,85: 29x12',
  '#673 @ 748,196: 24x25',
  '#674 @ 615,234: 15x16',
  '#675 @ 903,255: 26x26',
  '#676 @ 889,590: 17x26',
  '#677 @ 153,904: 19x24',
  '#678 @ 210,750: 16x13',
  '#679 @ 475,37: 10x14',
  '#680 @ 662,709: 22x23',
  '#681 @ 198,91: 13x19',
  '#682 @ 809,335: 28x13',
  '#683 @ 606,26: 24x18',
  '#684 @ 64,924: 29x28',
  '#685 @ 278,762: 9x16',
  '#686 @ 96,18: 28x18',
  '#687 @ 92,238: 24x21',
  '#688 @ 459,793: 21x27',
  '#689 @ 538,602: 12x24',
  '#690 @ 746,931: 17x24',
  '#691 @ 856,3: 27x13',
  '#692 @ 604,592: 27x25',
  '#693 @ 757,639: 12x28',
  '#694 @ 461,467: 16x10',
  '#695 @ 490,343: 12x11',
  '#696 @ 357,141: 15x29',
  '#697 @ 725,196: 15x14',
  '#698 @ 244,582: 25x18',
  '#699 @ 93,60: 22x12',
  '#700 @ 707,430: 14x19',
  '#701 @ 294,437: 17x26',
  '#702 @ 631,390: 25x20',
  '#703 @ 224,600: 22x14',
  '#704 @ 825,730: 23x12',
  '#705 @ 84,519: 23x19',
  '#706 @ 307,681: 10x16',
  '#707 @ 165,556: 14x24',
  '#708 @ 572,333: 21x18',
  '#709 @ 261,858: 17x24',
  '#710 @ 144,114: 19x12',
  '#711 @ 251,230: 19x19',
  '#712 @ 569,344: 20x10',
  '#713 @ 279,326: 15x20',
  '#714 @ 626,396: 12x27',
  '#715 @ 200,88: 11x29',
  '#716 @ 40,777: 24x13',
  '#717 @ 241,903: 15x25',
  '#718 @ 532,284: 24x20',
  '#719 @ 774,358: 14x21',
  '#720 @ 339,389: 24x26',
  '#721 @ 8,52: 15x15',
  '#722 @ 465,554: 24x19',
  '#723 @ 196,138: 3x16',
  '#724 @ 50,662: 20x13',
  '#725 @ 105,781: 12x25',
  '#726 @ 291,383: 18x22',
  '#727 @ 843,346: 28x11',
  '#728 @ 226,543: 18x26',
  '#729 @ 125,218: 21x27',
  '#730 @ 647,163: 29x14',
  '#731 @ 340,158: 14x17',
  '#732 @ 349,215: 29x12',
  '#733 @ 62,16: 24x28',
  '#734 @ 353,643: 17x15',
  '#735 @ 599,5: 12x27',
  '#736 @ 529,901: 11x21',
  '#737 @ 437,380: 26x10',
  '#738 @ 607,701: 12x20',
  '#739 @ 110,898: 12x24',
  '#740 @ 308,902: 16x10',
  '#741 @ 25,937: 5x4',
  '#742 @ 22,227: 24x27',
  '#743 @ 332,274: 24x11',
  '#744 @ 480,65: 29x23',
  '#745 @ 526,268: 14x19',
  '#746 @ 618,63: 27x25',
  '#747 @ 139,223: 22x27',
  '#748 @ 917,563: 20x20',
  '#749 @ 284,635: 21x22',
  '#750 @ 457,831: 18x26',
  '#751 @ 166,605: 22x12',
  '#752 @ 544,492: 27x15',
  '#753 @ 304,916: 12x11',
  '#754 @ 866,225: 17x26',
  '#755 @ 222,598: 11x17',
  '#756 @ 371,135: 16x15',
  '#757 @ 964,95: 17x18',
  '#758 @ 730,841: 23x28',
  '#759 @ 869,78: 15x21',
  '#760 @ 214,334: 26x14',
  '#761 @ 9,44: 18x20',
  '#762 @ 231,205: 17x28',
  '#763 @ 614,573: 19x21',
  '#764 @ 619,441: 16x19',
  '#765 @ 37,95: 22x19',
  '#766 @ 18,851: 26x27',
  '#767 @ 331,509: 19x17',
  '#768 @ 526,38: 14x29',
  '#769 @ 538,630: 14x23',
  '#770 @ 792,6: 26x10',
  '#771 @ 47,81: 15x22',
  '#772 @ 555,622: 15x23',
  '#773 @ 672,175: 18x22',
  '#774 @ 11,771: 13x17',
  '#775 @ 689,310: 29x16',
  '#776 @ 850,396: 19x19',
  '#777 @ 481,872: 15x11',
  '#778 @ 308,812: 27x29',
  '#779 @ 963,862: 13x12',
  '#780 @ 581,292: 10x17',
  '#781 @ 56,518: 25x13',
  '#782 @ 117,621: 17x15',
  '#783 @ 565,314: 29x23',
  '#784 @ 113,608: 12x17',
  '#785 @ 323,674: 20x26',
  '#786 @ 302,566: 11x21',
  '#787 @ 189,756: 22x20',
  '#788 @ 790,945: 26x18',
  '#789 @ 118,13: 10x27',
  '#790 @ 120,633: 10x15',
  '#791 @ 687,734: 29x28',
  '#792 @ 941,596: 14x17',
  '#793 @ 462,366: 10x19',
  '#794 @ 668,724: 26x27',
  '#795 @ 263,320: 21x27',
  '#796 @ 532,118: 19x26',
  '#797 @ 98,30: 19x10',
  '#798 @ 319,140: 26x16',
  '#799 @ 888,779: 27x19',
  '#800 @ 544,112: 27x25',
  '#801 @ 206,765: 12x16',
  '#802 @ 557,328: 20x11',
  '#803 @ 185,853: 16x13',
  '#804 @ 659,141: 15x21',
  '#805 @ 901,661: 12x17',
  '#806 @ 708,387: 17x21',
  '#807 @ 540,891: 21x21',
  '#808 @ 235,135: 11x12',
  '#809 @ 890,185: 16x11',
  '#810 @ 440,67: 24x22',
  '#811 @ 133,488: 20x21',
  '#812 @ 650,419: 18x10',
  '#813 @ 826,34: 24x17',
  '#814 @ 838,570: 26x19',
  '#815 @ 360,937: 15x14',
  '#816 @ 29,505: 18x27',
  '#817 @ 27,782: 18x11',
  '#818 @ 367,460: 28x11',
  '#819 @ 540,731: 25x20',
  '#820 @ 222,135: 16x11',
  '#821 @ 740,347: 15x29',
  '#822 @ 420,362: 28x19',
  '#823 @ 389,57: 15x24',
  '#824 @ 178,296: 24x14',
  '#825 @ 326,22: 13x16',
  '#826 @ 887,300: 23x28',
  '#827 @ 619,952: 27x14',
  '#828 @ 221,229: 21x27',
  '#829 @ 203,235: 21x17',
  '#830 @ 183,943: 17x25',
  '#831 @ 877,773: 20x24',
  '#832 @ 971,586: 19x15',
  '#833 @ 410,264: 21x19',
  '#834 @ 558,665: 28x21',
  '#835 @ 910,441: 20x23',
  '#836 @ 703,131: 16x26',
  '#837 @ 859,710: 18x21',
  '#838 @ 889,450: 17x20',
  '#839 @ 769,573: 10x18',
  '#840 @ 794,13: 19x20',
  '#841 @ 559,121: 21x10',
  '#842 @ 952,139: 13x11',
  '#843 @ 617,479: 19x19',
  '#844 @ 525,843: 18x11',
  '#845 @ 264,685: 27x18',
  '#846 @ 820,854: 29x15',
  '#847 @ 570,534: 10x27',
  '#848 @ 555,968: 21x25',
  '#849 @ 924,862: 25x14',
  '#850 @ 428,379: 26x19',
  '#851 @ 722,749: 16x16',
  '#852 @ 281,588: 14x26',
  '#853 @ 845,855: 23x16',
  '#854 @ 88,364: 17x25',
  '#855 @ 335,268: 21x17',
  '#856 @ 964,170: 10x25',
  '#857 @ 800,591: 10x28',
  '#858 @ 881,85: 16x25',
  '#859 @ 86,959: 10x12',
  '#860 @ 804,569: 24x12',
  '#861 @ 482,316: 25x25',
  '#862 @ 780,929: 20x12',
  '#863 @ 740,64: 15x27',
  '#864 @ 238,809: 13x22',
  '#865 @ 484,22: 25x18',
  '#866 @ 498,603: 29x26',
  '#867 @ 301,823: 19x10',
  '#868 @ 527,910: 10x28',
  '#869 @ 280,888: 19x24',
  '#870 @ 247,627: 20x11',
  '#871 @ 101,72: 23x26',
  '#872 @ 240,27: 23x28',
  '#873 @ 959,613: 28x23',
  '#874 @ 812,147: 11x27',
  '#875 @ 710,432: 6x14',
  '#876 @ 235,144: 28x20',
  '#877 @ 428,868: 26x24',
  '#878 @ 620,481: 3x13',
  '#879 @ 751,606: 14x10',
  '#880 @ 214,185: 20x29',
  '#881 @ 53,825: 27x11',
  '#882 @ 633,923: 29x20',
  '#883 @ 306,397: 20x14',
  '#884 @ 58,520: 29x14',
  '#885 @ 452,802: 22x13',
  '#886 @ 747,663: 22x12',
  '#887 @ 554,529: 15x28',
  '#888 @ 198,951: 28x25',
  '#889 @ 611,943: 17x25',
  '#890 @ 853,222: 26x16',
  '#891 @ 289,845: 29x20',
  '#892 @ 502,883: 11x20',
  '#893 @ 563,477: 26x19',
  '#894 @ 893,841: 27x17',
  '#895 @ 937,915: 16x10',
  '#896 @ 183,611: 23x23',
  '#897 @ 626,428: 20x21',
  '#898 @ 59,130: 26x14',
  '#899 @ 397,601: 27x28',
  '#900 @ 930,851: 16x10',
  '#901 @ 459,442: 27x23',
  '#902 @ 586,115: 18x21',
  '#903 @ 273,197: 12x23',
  '#904 @ 126,952: 10x20',
  '#905 @ 162,447: 27x22',
  '#906 @ 213,517: 23x24',
  '#907 @ 492,550: 21x15',
  '#908 @ 917,569: 17x21',
  '#909 @ 903,460: 12x29',
  '#910 @ 288,853: 19x19',
  '#911 @ 954,599: 25x17',
  '#912 @ 477,622: 27x12',
  '#913 @ 235,405: 15x17',
  '#914 @ 671,134: 14x21',
  '#915 @ 483,183: 17x11',
  '#916 @ 157,870: 10x18',
  '#917 @ 410,587: 15x28',
  '#918 @ 41,81: 11x20',
  '#919 @ 205,144: 25x10',
  '#920 @ 550,904: 20x17',
  '#921 @ 555,717: 24x29',
  '#922 @ 56,568: 16x15',
  '#923 @ 680,712: 26x21',
  '#924 @ 58,669: 17x16',
  '#925 @ 429,307: 23x11',
  '#926 @ 325,521: 10x16',
  '#927 @ 759,585: 22x16',
  '#928 @ 974,623: 11x19',
  '#929 @ 280,438: 29x27',
  '#930 @ 368,219: 13x17',
  '#931 @ 273,191: 26x15',
  '#932 @ 615,81: 23x18',
  '#933 @ 149,439: 22x27',
  '#934 @ 176,87: 28x27',
  '#935 @ 480,335: 19x12',
  '#936 @ 579,413: 14x24',
  '#937 @ 453,537: 26x17',
  '#938 @ 168,524: 17x20',
  '#939 @ 617,397: 14x18',
  '#940 @ 534,513: 14x14',
  '#941 @ 438,201: 13x11',
  '#942 @ 691,945: 27x14',
  '#943 @ 581,838: 10x16',
  '#944 @ 424,301: 28x27',
  '#945 @ 110,320: 28x16',
  '#946 @ 34,374: 15x14',
  '#947 @ 586,896: 27x28',
  '#948 @ 653,385: 25x15',
  '#949 @ 543,196: 19x17',
  '#950 @ 879,599: 15x21',
  '#951 @ 765,86: 16x25',
  '#952 @ 720,479: 20x29',
  '#953 @ 396,135: 20x13',
  '#954 @ 898,445: 29x29',
  '#955 @ 570,811: 27x17',
  '#956 @ 313,135: 15x20',
  '#957 @ 730,687: 24x23',
  '#958 @ 109,410: 19x22',
  '#959 @ 219,579: 28x16',
  '#960 @ 950,274: 17x15',
  '#961 @ 499,261: 29x21',
  '#962 @ 307,247: 27x14',
  '#963 @ 15,268: 20x16',
  '#964 @ 193,131: 23x27',
  '#965 @ 253,202: 17x27',
  '#966 @ 275,741: 14x15',
  '#967 @ 659,170: 26x19',
  '#968 @ 116,222: 10x26',
  '#969 @ 647,239: 27x25',
  '#970 @ 717,911: 28x16',
  '#971 @ 379,323: 24x11',
  '#972 @ 330,125: 15x18',
  '#973 @ 761,508: 15x13',
  '#974 @ 440,396: 22x10',
  '#975 @ 380,328: 25x14',
  '#976 @ 296,958: 16x16',
  '#977 @ 933,304: 16x21',
  '#978 @ 281,506: 12x12',
  '#979 @ 706,473: 28x28',
  '#980 @ 74,410: 19x14',
  '#981 @ 880,700: 19x18',
  '#982 @ 525,66: 28x26',
  '#983 @ 977,614: 10x22',
  '#984 @ 144,214: 22x15',
  '#985 @ 693,213: 14x28',
  '#986 @ 469,134: 24x24',
  '#987 @ 788,499: 23x18',
  '#988 @ 540,788: 17x13',
  '#989 @ 659,257: 18x17',
  '#990 @ 203,508: 23x21',
  '#991 @ 387,606: 26x16',
  '#992 @ 881,568: 17x20',
  '#993 @ 577,912: 15x17',
  '#994 @ 670,527: 29x15',
  '#995 @ 763,112: 22x24',
  '#996 @ 72,859: 13x17',
  '#997 @ 863,51: 10x29',
  '#998 @ 581,77: 11x20',
  '#999 @ 135,875: 10x21',
  '#1000 @ 772,688: 22x10',
  '#1001 @ 800,502: 23x18',
  '#1002 @ 49,433: 15x28',
  '#1003 @ 39,618: 20x25',
  '#1004 @ 313,372: 26x12',
  '#1005 @ 247,943: 24x15',
  '#1006 @ 853,706: 14x22',
  '#1007 @ 464,942: 27x23',
  '#1008 @ 273,760: 21x23',
  '#1009 @ 817,465: 21x27',
  '#1010 @ 797,492: 11x27',
  '#1011 @ 510,437: 11x18',
  '#1012 @ 394,644: 15x10',
  '#1013 @ 564,847: 29x16',
  '#1014 @ 809,364: 27x27',
  '#1015 @ 816,11: 16x23',
  '#1016 @ 237,800: 20x21',
  '#1017 @ 424,304: 17x28',
  '#1018 @ 527,829: 27x18',
  '#1019 @ 623,805: 27x26',
  '#1020 @ 473,960: 20x10',
  '#1021 @ 493,952: 15x17',
  '#1022 @ 43,739: 17x15',
  '#1023 @ 286,914: 28x22',
  '#1024 @ 145,721: 29x25',
  '#1025 @ 272,193: 29x27',
  '#1026 @ 57,570: 13x17',
  '#1027 @ 53,609: 20x15',
  '#1028 @ 936,855: 11x27',
  '#1029 @ 300,915: 26x17',
  '#1030 @ 497,353: 18x21',
  '#1031 @ 775,239: 26x11',
  '#1032 @ 328,257: 21x23',
  '#1033 @ 354,504: 13x27',
  '#1034 @ 70,829: 16x11',
  '#1035 @ 166,643: 27x22',
  '#1036 @ 17,274: 18x14',
  '#1037 @ 353,353: 26x12',
  '#1038 @ 318,796: 23x13',
  '#1039 @ 941,765: 27x28',
  '#1040 @ 62,709: 21x24',
  '#1041 @ 218,144: 22x19',
  '#1042 @ 544,802: 25x18',
  '#1043 @ 27,674: 26x27',
  '#1044 @ 665,359: 23x25',
  '#1045 @ 746,595: 12x14',
  '#1046 @ 894,756: 29x24',
  '#1047 @ 356,136: 23x22',
  '#1048 @ 482,937: 15x29',
  '#1049 @ 334,653: 17x24',
  '#1050 @ 640,951: 14x24',
  '#1051 @ 762,198: 25x20',
  '#1052 @ 106,732: 20x27',
  '#1053 @ 903,807: 13x29',
  '#1054 @ 700,22: 11x21',
  '#1055 @ 302,629: 21x21',
  '#1056 @ 626,686: 15x21',
  '#1057 @ 213,242: 26x19',
  '#1058 @ 294,920: 27x20',
  '#1059 @ 771,94: 28x11',
  '#1060 @ 563,619: 12x20',
  '#1061 @ 38,493: 14x19',
  '#1062 @ 735,472: 12x19',
  '#1063 @ 476,530: 14x22',
  '#1064 @ 786,220: 12x27',
  '#1065 @ 587,573: 28x13',
  '#1066 @ 396,395: 27x22',
  '#1067 @ 66,694: 14x11',
  '#1068 @ 18,940: 13x24',
  '#1069 @ 294,241: 29x28',
  '#1070 @ 465,905: 18x23',
  '#1071 @ 431,411: 19x23',
  '#1072 @ 827,577: 13x15',
  '#1073 @ 332,799: 29x11',
  '#1074 @ 963,252: 25x22',
  '#1075 @ 132,597: 25x21',
  '#1076 @ 544,815: 20x17',
  '#1077 @ 862,1: 17x17',
  '#1078 @ 391,490: 27x28',
  '#1079 @ 3,403: 11x10',
  '#1080 @ 73,326: 29x17',
  '#1081 @ 960,390: 14x16',
  '#1082 @ 698,932: 17x24',
  '#1083 @ 348,37: 26x27',
  '#1084 @ 99,420: 14x14',
  '#1085 @ 218,969: 10x18',
  '#1086 @ 602,235: 27x25',
  '#1087 @ 248,666: 15x15',
  '#1088 @ 533,25: 29x11',
  '#1089 @ 546,930: 16x13',
  '#1090 @ 101,858: 23x24',
  '#1091 @ 854,559: 24x13',
  '#1092 @ 535,693: 22x28',
  '#1093 @ 208,197: 24x20',
  '#1094 @ 455,5: 15x14',
  '#1095 @ 408,498: 23x26',
  '#1096 @ 175,535: 21x16',
  '#1097 @ 275,330: 25x13',
  '#1098 @ 241,907: 18x12',
  '#1099 @ 9,385: 15x24',
  '#1100 @ 179,882: 11x24',
  '#1101 @ 207,204: 22x19',
  '#1102 @ 831,290: 12x18',
  '#1103 @ 131,434: 25x25',
  '#1104 @ 427,63: 14x10',
  '#1105 @ 99,192: 14x11',
  '#1106 @ 917,769: 28x13',
  '#1107 @ 440,374: 23x12',
  '#1108 @ 128,78: 20x25',
  '#1109 @ 273,837: 25x12',
  '#1110 @ 342,224: 15x11',
  '#1111 @ 468,507: 25x29',
  '#1112 @ 687,539: 27x23',
  '#1113 @ 948,399: 20x16',
  '#1114 @ 281,446: 23x26',
  '#1115 @ 19,332: 17x21',
  '#1116 @ 445,803: 29x24',
  '#1117 @ 152,913: 21x14',
  '#1118 @ 655,928: 13x11',
  '#1119 @ 705,880: 29x22',
  '#1120 @ 958,206: 29x19',
  '#1121 @ 260,922: 24x18',
  '#1122 @ 191,59: 12x13',
  '#1123 @ 816,940: 29x14',
  '#1124 @ 16,276: 13x20',
  '#1125 @ 283,865: 22x21',
  '#1126 @ 479,639: 22x11',
  '#1127 @ 197,493: 24x22',
  '#1128 @ 481,433: 11x11',
  '#1129 @ 458,77: 25x19',
  '#1130 @ 68,236: 17x18',
  '#1131 @ 544,625: 22x19',
  '#1132 @ 662,329: 29x11',
  '#1133 @ 256,462: 11x26',
  '#1134 @ 827,517: 12x24',
  '#1135 @ 541,51: 7x8',
  '#1136 @ 957,428: 23x20',
  '#1137 @ 122,658: 26x27',
  '#1138 @ 797,958: 22x16',
  '#1139 @ 616,726: 25x19',
  '#1140 @ 117,781: 15x29',
  '#1141 @ 289,37: 22x10',
  '#1142 @ 458,799: 15x15',
  '#1143 @ 577,555: 26x22',
  '#1144 @ 394,540: 12x23',
  '#1145 @ 182,865: 10x14',
  '#1146 @ 973,143: 21x14',
  '#1147 @ 791,482: 28x22',
  '#1148 @ 980,784: 12x19',
  '#1149 @ 578,235: 10x13',
  '#1150 @ 338,595: 25x10',
  '#1151 @ 811,871: 13x10',
  '#1152 @ 957,151: 20x26',
  '#1153 @ 94,235: 16x22',
  '#1154 @ 395,93: 20x23',
  '#1155 @ 600,165: 28x11',
  '#1156 @ 177,99: 11x10',
  '#1157 @ 633,275: 24x21',
  '#1158 @ 663,308: 11x29',
  '#1159 @ 900,539: 11x16',
  '#1160 @ 241,526: 19x27',
  '#1161 @ 829,851: 10x23',
  '#1162 @ 767,963: 18x14',
  '#1163 @ 515,434: 28x26',
  '#1164 @ 553,350: 11x10',
  '#1165 @ 243,581: 13x16',
  '#1166 @ 595,346: 27x24',
  '#1167 @ 357,15: 17x12',
  '#1168 @ 855,326: 12x12',
  '#1169 @ 361,583: 11x17',
  '#1170 @ 180,293: 26x24',
  '#1171 @ 41,953: 8x4',
  '#1172 @ 78,603: 19x14',
  '#1173 @ 105,90: 10x15',
  '#1174 @ 743,460: 25x23',
  '#1175 @ 490,948: 17x11',
  '#1176 @ 170,701: 28x15',
  '#1177 @ 16,281: 13x17',
  '#1178 @ 148,858: 10x14',
  '#1179 @ 41,880: 19x12',
  '#1180 @ 272,851: 26x10',
  '#1181 @ 534,526: 16x17',
  '#1182 @ 681,607: 16x25',
  '#1183 @ 750,61: 24x29',
  '#1184 @ 560,534: 14x14',
  '#1185 @ 923,862: 20x27',
  '#1186 @ 63,391: 27x23',
  '#1187 @ 368,313: 15x16',
  '#1188 @ 613,788: 11x17',
  '#1189 @ 118,950: 24x26',
  '#1190 @ 107,18: 24x11',
  '#1191 @ 420,609: 24x19',
  '#1192 @ 889,528: 15x19',
  '#1193 @ 600,322: 11x26',
  '#1194 @ 223,750: 10x14',
  '#1195 @ 93,37: 16x23',
  '#1196 @ 238,387: 25x14',
  '#1197 @ 590,746: 28x16',
  '#1198 @ 290,189: 24x18',
  '#1199 @ 776,253: 19x18',
  '#1200 @ 268,196: 17x12',
  '#1201 @ 589,73: 29x25',
  '#1202 @ 836,47: 28x11',
  '#1203 @ 446,902: 28x14',
  '#1204 @ 97,174: 13x25',
  '#1205 @ 781,208: 22x28',
  '#1206 @ 967,631: 16x10',
  '#1207 @ 55,867: 28x15',
  '#1208 @ 675,926: 28x14',
  '#1209 @ 592,567: 26x26',
  '#1210 @ 570,605: 28x21',
  '#1211 @ 376,525: 19x10',
  '#1212 @ 501,930: 21x29',
  '#1213 @ 166,50: 19x23',
  '#1214 @ 278,63: 14x19',
  '#1215 @ 767,356: 11x10',
  '#1216 @ 445,811: 20x28',
  '#1217 @ 496,96: 13x14',
  '#1218 @ 359,512: 10x26',
  '#1219 @ 772,380: 25x12',
  '#1220 @ 133,65: 27x27',
  '#1221 @ 921,56: 25x26',
  '#1222 @ 584,752: 27x16',
  '#1223 @ 107,18: 17x15',
  '#1224 @ 615,290: 20x24',
  '#1225 @ 618,243: 14x20',
  '#1226 @ 919,279: 18x15',
  '#1227 @ 871,766: 20x14',
  '#1228 @ 655,391: 13x24',
  '#1229 @ 548,134: 12x13',
  '#1230 @ 265,49: 16x24',
  '#1231 @ 973,156: 14x18',
  '#1232 @ 892,194: 10x15',
  '#1233 @ 726,460: 18x16',
  '#1234 @ 476,943: 12x20',
  '#1235 @ 213,516: 17x11',
  '#1236 @ 122,4: 21x12',
  '#1237 @ 37,387: 14x28',
  '#1238 @ 621,449: 13x23',
  '#1239 @ 951,95: 22x19',
  '#1240 @ 33,176: 16x25',
  '#1241 @ 671,594: 21x17',
  '#1242 @ 433,409: 12x23',
  '#1243 @ 798,974: 25x23',
  '#1244 @ 219,140: 29x17',
  '#1245 @ 592,166: 24x24',
  '#1246 @ 480,525: 21x25',
  '#1247 @ 877,707: 14x16',
  '#1248 @ 495,260: 4x3',
  '#1249 @ 808,386: 29x27',
  '#1250 @ 922,39: 26x22',
  '#1251 @ 482,744: 19x21',
  '#1252 @ 5,204: 14x15',
  '#1253 @ 781,935: 25x26',
  '#1254 @ 484,964: 29x13',
  '#1255 @ 971,714: 22x29',
  '#1256 @ 73,77: 6x13',
  '#1257 @ 133,399: 25x18',
  '#1258 @ 603,792: 10x23',
  '#1259 @ 862,153: 23x24',
  '#1260 @ 932,105: 21x21',
  '#1261 @ 585,566: 11x25',
  '#1262 @ 0,55: 23x11',
  '#1263 @ 158,704: 17x18',
  '#1264 @ 86,152: 14x26',
  '#1265 @ 814,199: 26x18',
  '#1266 @ 856,340: 16x29',
  '#1267 @ 460,203: 24x16',
  '#1268 @ 887,848: 13x14',
  '#1269 @ 420,469: 11x16',
  '#1270 @ 723,372: 22x14',
  '#1271 @ 70,333: 11x15',
  '#1272 @ 790,425: 28x20',
  '#1273 @ 242,134: 28x28',
  '#1274 @ 812,148: 22x17',
  '#1275 @ 70,241: 11x5',
  '#1276 @ 144,145: 25x25',
  '#1277 @ 691,227: 23x28',
  '#1278 @ 384,444: 24x17',
  '#1279 @ 9,273: 28x19',
  '#1280 @ 544,815: 22x19',
  '#1281 @ 662,316: 17x16',
  '#1282 @ 408,118: 13x22',
  '#1283 @ 124,75: 17x23',
  '#1284 @ 748,76: 20x24',
  '#1285 @ 906,144: 17x12',
  '#1286 @ 253,979: 29x12',
  '#1287 @ 310,70: 18x20',
  '#1288 @ 928,277: 24x27',
  '#1289 @ 627,445: 26x15',
  '#1290 @ 260,308: 22x16',
  '#1291 @ 696,308: 23x26',
  '#1292 @ 964,451: 24x25',
  '#1293 @ 745,401: 17x11',
  '#1294 @ 791,800: 23x25',
  '#1295 @ 810,563: 10x11',
  '#1296 @ 309,432: 13x18',
  '#1297 @ 797,928: 15x22',
  '#1298 @ 333,657: 28x12',
  '#1299 @ 284,8: 14x4',
  '#1300 @ 142,213: 28x27',
  '#1301 @ 238,298: 27x15',
  '#1302 @ 407,915: 24x27',
  '#1303 @ 674,418: 21x23',
  '#1304 @ 819,206: 28x11',
  '#1305 @ 487,624: 13x20',
  '#1306 @ 211,739: 20x20',
  '#1307 @ 821,621: 19x14',
  '#1308 @ 646,47: 16x23',
  '#1309 @ 223,535: 17x27',
  '#1310 @ 110,49: 20x12',
  '#1311 @ 20,331: 23x20',
  '#1312 @ 112,79: 23x22',
  '#1313 @ 466,409: 25x13',
  '#1314 @ 817,256: 27x26',
  '#1315 @ 507,836: 16x26',
  '#1316 @ 453,937: 26x26',
  '#1317 @ 182,794: 25x27',
  '#1318 @ 963,654: 28x17',
  '#1319 @ 505,506: 25x14',
  '#1320 @ 223,287: 16x26',
  '#1321 @ 976,585: 18x10',
  '#1322 @ 929,107: 10x21',
  '#1323 @ 281,186: 16x28',
  '#1324 @ 381,115: 20x11',
  '#1325 @ 294,778: 22x11',
  '#1326 @ 490,122: 21x21',
  '#1327 @ 643,51: 11x18',
  '#1328 @ 666,411: 20x22',
  '#1329 @ 0,492: 25x29',
  '#1330 @ 430,402: 28x24',
  '#1331 @ 310,26: 23x21',
  '#1332 @ 639,32: 22x12',
  '#1333 @ 88,591: 25x17',
  '#1334 @ 387,922: 23x26',
  '#1335 @ 864,328: 19x22',
  '#1336 @ 619,40: 13x27',
  '#1337 @ 668,242: 12x16',
  '#1338 @ 692,541: 14x25',
  '#1339 @ 70,622: 28x10',
  '#1340 @ 285,639: 18x14',
  '#1341 @ 124,437: 17x23',
  '#1342 @ 169,532: 19x19',
  '#1343 @ 613,398: 12x28',
  '#1344 @ 486,529: 19x12',
  '#1345 @ 205,233: 22x10',
  '#1346 @ 479,602: 11x18',
  '#1347 @ 636,795: 13x14',
  '#1348 @ 739,15: 10x17',
  '#1349 @ 86,23: 14x18',
  '#1350 @ 464,91: 10x26',
  '#1351 @ 245,863: 15x27',
  '#1352 @ 292,806: 10x22',
  '#1353 @ 370,944: 26x15',
  '#1354 @ 465,730: 24x23',
  '#1355 @ 357,529: 28x16',
  '#1356 @ 648,364: 18x10',
  '#1357 @ 761,391: 22x25',
  '#1358 @ 958,466: 22x16',
  '#1359 @ 196,92: 17x14',
  '#1360 @ 246,101: 13x13',
  '#1361 @ 446,616: 19x10',
  '#1362 @ 448,743: 15x21',
  '#1363 @ 352,821: 24x16',
  '#1364 @ 239,846: 25x15',
  '#1365 @ 651,286: 23x19',
  '#1366 @ 578,332: 26x20',
  '#1367 @ 537,717: 22x22',
  '#1368 @ 67,963: 29x26',
  '#1369 @ 975,202: 17x12',
  '#1370 @ 670,280: 18x18',
  '#1371 @ 527,462: 15x14',
  '#1372 @ 951,190: 25x12',
  '#1373 @ 130,274: 15x26'
];

const processed = list.map(data => {
  const split = data.split(" ");
  const pad = split[2].split(",");
  const size = split[3].split("x");
  return {
    left: Number(pad[0]),
    top: Number(pad[1].split(':')[0]),
    width: Number(size[0]),
    height: Number(size[1])
  }
});

const _fabric = new Array(1000).fill(0);
const fabric = _fabric.map(m => new Array(1000).fill(0));

let sum = 0;

const common = processed.reduce((acc, data) => {
  const left = data.left;
  const top = data.top;
  const width = left + data.width;
  const height = top + data.height;
  for (let i = left; i < width; i++) {
    for (let j = top; j < height; j++) {
      acc[i][j] = acc[i][j] + 1;
    }
  }
  return acc;
}, fabric);

for (let i = 0; i < common.length; i++) {
  for (let j = 0; j < common[i].length; j++) {
    if (common[i][j] > 1) {
      sum++;
    }
  }
}

console.log(sum);