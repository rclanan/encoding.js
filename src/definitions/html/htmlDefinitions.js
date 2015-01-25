'use strict';

var characterToEntityMap = [{
		names : ["Tab"],
		decimalCode : 9,
		hexadecimalCode : "x00009"
	}, {
		names : ["NewLine"],
		decimalCode : 10,
		hexadecimalCode : "x0000A"
	}, {
		names : ["excl"],
		decimalCode : 33,
		hexadecimalCode : "x00021"
	}, {
		names : ["quot", "QUOT"],
		decimalCode : 34,
		hexadecimalCode : "x00022"
	}, {
		names : ["num"],
		decimalCode : 35,
		hexadecimalCode : "x00023"
	}, {
		names : ["dollar"],
		decimalCode : 36,
		hexadecimalCode : "x00024"
	}, {
		names : ["percnt"],
		decimalCode : 37,
		hexadecimalCode : "x00025"
	}, {
		names : ["amp", "AMP"],
		decimalCode : 38,
		hexadecimalCode : "x00026"
	}, {
		names : ["apos"],
		decimalCode : 39,
		hexadecimalCode : "x00027"
	}, {
		names : ["lpar"],
		decimalCode : 40,
		hexadecimalCode : "x00028"
	}, {
		names : ["rpar"],
		decimalCode : 41,
		hexadecimalCode : "x00029"
	}, {
		names : ["ast", "midast"],
		decimalCode : 42,
		hexadecimalCode : "x0002A"
	}, {
		names : ["plus"],
		decimalCode : 43,
		hexadecimalCode : "x0002B"
	}, {
		names : ["comma"],
		decimalCode : 44,
		hexadecimalCode : "x0002C"
	}, {
		names : ["period"],
		decimalCode : 46,
		hexadecimalCode : "x0002E"
	}, {
		names : ["sol"],
		decimalCode : 47,
		hexadecimalCode : "x0002F"
	}, {
		names : ["colon"],
		decimalCode : 58,
		hexadecimalCode : "x0003A"
	}, {
		names : ["semi"],
		decimalCode : 59,
		hexadecimalCode : "x0003B"
	}, {
		names : ["lt", "LT"],
		decimalCode : 60,
		hexadecimalCode : "x0003C"
	}, {
		names : ["equals"],
		decimalCode : 61,
		hexadecimalCode : "x0003D"
	}, {
		names : ["gt", "GT"],
		decimalCode : 62,
		hexadecimalCode : "x0003E"
	}, {
		names : ["quest"],
		decimalCode : 63,
		hexadecimalCode : "x0003F"
	}, {
		names : ["commat"],
		decimalCode : 64,
		hexadecimalCode : "x00040"
	}, {
		names : ["lsqb", "lbrack"],
		decimalCode : 91,
		hexadecimalCode : "x0005B"
	}, {
		names : ["bsol"],
		decimalCode : 92,
		hexadecimalCode : "x0005C"
	}, {
		names : ["rsqb", "rbrack"],
		decimalCode : 93,
		hexadecimalCode : "x0005D"
	}, {
		names : ["Hat"],
		decimalCode : 94,
		hexadecimalCode : "x0005E"
	}, {
		names : ["lowbar"],
		decimalCode : 95,
		hexadecimalCode : "x0005F"
	}, {
		names : ["grave", "DiacriticalGrave"],
		decimalCode : 96,
		hexadecimalCode : "x00060"
	}, {
		names : ["lcub", "lbrace"],
		decimalCode : 123,
		hexadecimalCode : "x0007B"
	}, {
		names : ["verbar", "vert", "VerticalLine"],
		decimalCode : 124,
		hexadecimalCode : "x0007C"
	}, {
		names : ["rcub", "rbrace"],
		decimalCode : 125,
		hexadecimalCode : "x0007D"
	}, {
		names : ["nbsp", "NonBreakingSpace"],
		decimalCode : 160,
		hexadecimalCode : "x000A0"
	}, {
		names : ["iexcl"],
		decimalCode : 161,
		hexadecimalCode : "x000A1"
	}, {
		names : ["cent"],
		decimalCode : 162,
		hexadecimalCode : "x000A2"
	}, {
		names : ["pound"],
		decimalCode : 163,
		hexadecimalCode : "x000A3"
	}, {
		names : ["curren"],
		decimalCode : 164,
		hexadecimalCode : "x000A4"
	}, {
		names : ["yen"],
		decimalCode : 165,
		hexadecimalCode : "x000A5"
	}, {
		names : ["brvbar"],
		decimalCode : 166,
		hexadecimalCode : "x000A6"
	}, {
		names : ["sect"],
		decimalCode : 167,
		hexadecimalCode : "x000A7"
	}, {
		names : ["Dot", "die", "DoubleDot", "uml"],
		decimalCode : 168,
		hexadecimalCode : "x000A8"
	}, {
		names : ["copy", "COPY"],
		decimalCode : 169,
		hexadecimalCode : "x000A9"
	}, {
		names : ["ordf"],
		decimalCode : 170,
		hexadecimalCode : "x000AA"
	}, {
		names : ["laquo"],
		decimalCode : 171,
		hexadecimalCode : "x000AB"
	}, {
		names : ["not"],
		decimalCode : 172,
		hexadecimalCode : "x000AC"
	}, {
		names : ["shy"],
		decimalCode : 173,
		hexadecimalCode : "x000AD"
	}, {
		names : ["reg", "circledR", "REG"],
		decimalCode : 174,
		hexadecimalCode : "x000AE"
	}, {
		names : ["macr", "OverBar", "strns"],
		decimalCode : 175,
		hexadecimalCode : "x000AF"
	}, {
		names : ["deg"],
		decimalCode : 176,
		hexadecimalCode : "x000B0"
	}, {
		names : ["plusmn", "pm", "PlusMinus"],
		decimalCode : 177,
		hexadecimalCode : "x000B1"
	}, {
		names : ["sup2"],
		decimalCode : 178,
		hexadecimalCode : "x000B2"
	}, {
		names : ["sup3"],
		decimalCode : 179,
		hexadecimalCode : "x000B3"
	}, {
		names : ["acute", "DiacriticalAcute"],
		decimalCode : 180,
		hexadecimalCode : "x000B4"
	}, {
		names : ["micro"],
		decimalCode : 181,
		hexadecimalCode : "x000B5"
	}, {
		names : ["para"],
		decimalCode : 182,
		hexadecimalCode : "x000B6"
	}, {
		names : ["middot", "centerdot", "CenterDot"],
		decimalCode : 183,
		hexadecimalCode : "x000B7"
	}, {
		names : ["cedil", "Cedilla"],
		decimalCode : 184,
		hexadecimalCode : "x000B8"
	}, {
		names : ["sup1"],
		decimalCode : 185,
		hexadecimalCode : "x000B9"
	}, {
		names : ["ordm"],
		decimalCode : 186,
		hexadecimalCode : "x000BA"
	}, {
		names : ["raquo"],
		decimalCode : 187,
		hexadecimalCode : "x000BB"
	}, {
		names : ["frac14"],
		decimalCode : 188,
		hexadecimalCode : "x000BC"
	}, {
		names : ["frac12", "half"],
		decimalCode : 189,
		hexadecimalCode : "x000BD"
	}, {
		names : ["frac34"],
		decimalCode : 190,
		hexadecimalCode : "x000BE"
	}, {
		names : ["iquest"],
		decimalCode : 191,
		hexadecimalCode : "x000BF"
	}, {
		names : ["Agrave"],
		decimalCode : 192,
		hexadecimalCode : "x000C0"
	}, {
		names : ["Aacute"],
		decimalCode : 193,
		hexadecimalCode : "x000C1"
	}, {
		names : ["Acirc"],
		decimalCode : 194,
		hexadecimalCode : "x000C2"
	}, {
		names : ["Atilde"],
		decimalCode : 195,
		hexadecimalCode : "x000C3"
	}, {
		names : ["Auml"],
		decimalCode : 196,
		hexadecimalCode : "x000C4"
	}, {
		names : ["Aring"],
		decimalCode : 197,
		hexadecimalCode : "x000C5"
	}, {
		names : ["AElig"],
		decimalCode : 198,
		hexadecimalCode : "x000C6"
	}, {
		names : ["Ccedil"],
		decimalCode : 199,
		hexadecimalCode : "x000C7"
	}, {
		names : ["Egrave"],
		decimalCode : 200,
		hexadecimalCode : "x000C8"
	}, {
		names : ["Eacute"],
		decimalCode : 201,
		hexadecimalCode : "x000C9"
	}, {
		names : ["Ecirc"],
		decimalCode : 202,
		hexadecimalCode : "x000CA"
	}, {
		names : ["Euml"],
		decimalCode : 203,
		hexadecimalCode : "x000CB"
	}, {
		names : ["Igrave"],
		decimalCode : 204,
		hexadecimalCode : "x000CC"
	}, {
		names : ["Iacute"],
		decimalCode : 205,
		hexadecimalCode : "x000CD"
	}, {
		names : ["Icirc"],
		decimalCode : 206,
		hexadecimalCode : "x000CE"
	}, {
		names : ["Iuml"],
		decimalCode : 207,
		hexadecimalCode : "x000CF"
	}, {
		names : ["ETH"],
		decimalCode : 208,
		hexadecimalCode : "x000D0"
	}, {
		names : ["Ntilde"],
		decimalCode : 209,
		hexadecimalCode : "x000D1"
	}, {
		names : ["Ograve"],
		decimalCode : 210,
		hexadecimalCode : "x000D2"
	}, {
		names : ["Oacute"],
		decimalCode : 211,
		hexadecimalCode : "x000D3"
	}, {
		names : ["Ocirc"],
		decimalCode : 212,
		hexadecimalCode : "x000D4"
	}, {
		names : ["Otilde"],
		decimalCode : 213,
		hexadecimalCode : "x000D5"
	}, {
		names : ["Ouml"],
		decimalCode : 214,
		hexadecimalCode : "x000D6"
	}, {
		names : ["times"],
		decimalCode : 215,
		hexadecimalCode : "x000D7"
	}, {
		names : ["Oslash"],
		decimalCode : 216,
		hexadecimalCode : "x000D8"
	}, {
		names : ["Ugrave"],
		decimalCode : 217,
		hexadecimalCode : "x000D9"
	}, {
		names : ["Uacute"],
		decimalCode : 218,
		hexadecimalCode : "x000DA"
	}, {
		names : ["Ucirc"],
		decimalCode : 219,
		hexadecimalCode : "x000DB"
	}, {
		names : ["Uuml"],
		decimalCode : 220,
		hexadecimalCode : "x000DC"
	}, {
		names : ["Yacute"],
		decimalCode : 221,
		hexadecimalCode : "x000DD"
	}, {
		names : ["THORN"],
		decimalCode : 222,
		hexadecimalCode : "x000DE"
	}, {
		names : ["szlig"],
		decimalCode : 223,
		hexadecimalCode : "x000DF"
	}, {
		names : ["agrave"],
		decimalCode : 224,
		hexadecimalCode : "x000E0"
	}, {
		names : ["aacute"],
		decimalCode : 225,
		hexadecimalCode : "x000E1"
	}, {
		names : ["acirc"],
		decimalCode : 226,
		hexadecimalCode : "x000E2"
	}, {
		names : ["atilde"],
		decimalCode : 227,
		hexadecimalCode : "x000E3"
	}, {
		names : ["auml"],
		decimalCode : 228,
		hexadecimalCode : "x000E4"
	}, {
		names : ["aring"],
		decimalCode : 229,
		hexadecimalCode : "x000E5"
	}, {
		names : ["aelig"],
		decimalCode : 230,
		hexadecimalCode : "x000E6"
	}, {
		names : ["ccedil"],
		decimalCode : 231,
		hexadecimalCode : "x000E7"
	}, {
		names : ["egrave"],
		decimalCode : 232,
		hexadecimalCode : "x000E8"
	}, {
		names : ["eacute"],
		decimalCode : 233,
		hexadecimalCode : "x000E9"
	}, {
		names : ["ecirc"],
		decimalCode : 234,
		hexadecimalCode : "x000EA"
	}, {
		names : ["euml"],
		decimalCode : 235,
		hexadecimalCode : "x000EB"
	}, {
		names : ["igrave"],
		decimalCode : 236,
		hexadecimalCode : "x000EC"
	}, {
		names : ["iacute"],
		decimalCode : 237,
		hexadecimalCode : "x000ED"
	}, {
		names : ["icirc"],
		decimalCode : 238,
		hexadecimalCode : "x000EE"
	}, {
		names : ["iuml"],
		decimalCode : 239,
		hexadecimalCode : "x000EF"
	}, {
		names : ["eth"],
		decimalCode : 240,
		hexadecimalCode : "x000F0"
	}, {
		names : ["ntilde"],
		decimalCode : 241,
		hexadecimalCode : "x000F1"
	}, {
		names : ["ograve"],
		decimalCode : 242,
		hexadecimalCode : "x000F2"
	}, {
		names : ["oacute"],
		decimalCode : 243,
		hexadecimalCode : "x000F3"
	}, {
		names : ["ocirc"],
		decimalCode : 244,
		hexadecimalCode : "x000F4"
	}, {
		names : ["otilde"],
		decimalCode : 245,
		hexadecimalCode : "x000F5"
	}, {
		names : ["ouml"],
		decimalCode : 246,
		hexadecimalCode : "x000F6"
	}, {
		names : ["divide", "div"],
		decimalCode : 247,
		hexadecimalCode : "x000F7"
	}, {
		names : ["oslash"],
		decimalCode : 248,
		hexadecimalCode : "x000F8"
	}, {
		names : ["ugrave"],
		decimalCode : 249,
		hexadecimalCode : "x000F9"
	}, {
		names : ["uacute"],
		decimalCode : 250,
		hexadecimalCode : "x000FA"
	}, {
		names : ["ucirc"],
		decimalCode : 251,
		hexadecimalCode : "x000FB"
	}, {
		names : ["uuml"],
		decimalCode : 252,
		hexadecimalCode : "x000FC"
	}, {
		names : ["yacute"],
		decimalCode : 253,
		hexadecimalCode : "x000FD"
	}, {
		names : ["thorn"],
		decimalCode : 254,
		hexadecimalCode : "x000FE"
	}, {
		names : ["yuml"],
		decimalCode : 255,
		hexadecimalCode : "x000FF"
	}, {
		names : ["Amacr"],
		decimalCode : 256,
		hexadecimalCode : "x00100"
	}, {
		names : ["amacr"],
		decimalCode : 257,
		hexadecimalCode : "x00101"
	}, {
		names : ["Abreve"],
		decimalCode : 258,
		hexadecimalCode : "x00102"
	}, {
		names : ["abreve"],
		decimalCode : 259,
		hexadecimalCode : "x00103"
	}, {
		names : ["Aogon"],
		decimalCode : 260,
		hexadecimalCode : "x00104"
	}, {
		names : ["aogon"],
		decimalCode : 261,
		hexadecimalCode : "x00105"
	}, {
		names : ["Cacute"],
		decimalCode : 262,
		hexadecimalCode : "x00106"
	}, {
		names : ["cacute"],
		decimalCode : 263,
		hexadecimalCode : "x00107"
	}, {
		names : ["Ccirc"],
		decimalCode : 264,
		hexadecimalCode : "x00108"
	}, {
		names : ["ccirc"],
		decimalCode : 265,
		hexadecimalCode : "x00109"
	}, {
		names : ["Cdot"],
		decimalCode : 266,
		hexadecimalCode : "x0010A"
	}, {
		names : ["cdot"],
		decimalCode : 267,
		hexadecimalCode : "x0010B"
	}, {
		names : ["Ccaron"],
		decimalCode : 268,
		hexadecimalCode : "x0010C"
	}, {
		names : ["ccaron"],
		decimalCode : 269,
		hexadecimalCode : "x0010D"
	}, {
		names : ["Dcaron"],
		decimalCode : 270,
		hexadecimalCode : "x0010E"
	}, {
		names : ["dcaron"],
		decimalCode : 271,
		hexadecimalCode : "x0010F"
	}, {
		names : ["Dstrok"],
		decimalCode : 272,
		hexadecimalCode : "x00110"
	}, {
		names : ["dstrok"],
		decimalCode : 273,
		hexadecimalCode : "x00111"
	}, {
		names : ["Emacr"],
		decimalCode : 274,
		hexadecimalCode : "x00112"
	}, {
		names : ["emacr"],
		decimalCode : 275,
		hexadecimalCode : "x00113"
	}, {
		names : ["Edot"],
		decimalCode : 278,
		hexadecimalCode : "x00116"
	}, {
		names : ["edot"],
		decimalCode : 279,
		hexadecimalCode : "x00117"
	}, {
		names : ["Eogon"],
		decimalCode : 280,
		hexadecimalCode : "x00118"
	}, {
		names : ["eogon"],
		decimalCode : 281,
		hexadecimalCode : "x00119"
	}, {
		names : ["Ecaron"],
		decimalCode : 282,
		hexadecimalCode : "x0011A"
	}, {
		names : ["ecaron"],
		decimalCode : 283,
		hexadecimalCode : "x0011B"
	}, {
		names : ["Gcirc"],
		decimalCode : 284,
		hexadecimalCode : "x0011C"
	}, {
		names : ["gcirc"],
		decimalCode : 285,
		hexadecimalCode : "x0011D"
	}, {
		names : ["Gbreve"],
		decimalCode : 286,
		hexadecimalCode : "x0011E"
	}, {
		names : ["gbreve"],
		decimalCode : 287,
		hexadecimalCode : "x0011F"
	}, {
		names : ["Gdot"],
		decimalCode : 288,
		hexadecimalCode : "x00120"
	}, {
		names : ["gdot"],
		decimalCode : 289,
		hexadecimalCode : "x00121"
	}, {
		names : ["Gcedil"],
		decimalCode : 290,
		hexadecimalCode : "x00122"
	}, {
		names : ["Hcirc"],
		decimalCode : 292,
		hexadecimalCode : "x00124"
	}, {
		names : ["hcirc"],
		decimalCode : 293,
		hexadecimalCode : "x00125"
	}, {
		names : ["Hstrok"],
		decimalCode : 294,
		hexadecimalCode : "x00126"
	}, {
		names : ["hstrok"],
		decimalCode : 295,
		hexadecimalCode : "x00127"
	}, {
		names : ["Itilde"],
		decimalCode : 296,
		hexadecimalCode : "x00128"
	}, {
		names : ["itilde"],
		decimalCode : 297,
		hexadecimalCode : "x00129"
	}, {
		names : ["Imacr"],
		decimalCode : 298,
		hexadecimalCode : "x0012A"
	}, {
		names : ["imacr"],
		decimalCode : 299,
		hexadecimalCode : "x0012B"
	}, {
		names : ["Iogon"],
		decimalCode : 302,
		hexadecimalCode : "x0012E"
	}, {
		names : ["iogon"],
		decimalCode : 303,
		hexadecimalCode : "x0012F"
	}, {
		names : ["Idot"],
		decimalCode : 304,
		hexadecimalCode : "x00130"
	}, {
		names : ["imath", "inodot"],
		decimalCode : 305,
		hexadecimalCode : "x00131"
	}, {
		names : ["IJlig"],
		decimalCode : 306,
		hexadecimalCode : "x00132"
	}, {
		names : ["ijlig"],
		decimalCode : 307,
		hexadecimalCode : "x00133"
	}, {
		names : ["Jcirc"],
		decimalCode : 308,
		hexadecimalCode : "x00134"
	}, {
		names : ["jcirc"],
		decimalCode : 309,
		hexadecimalCode : "x00135"
	}, {
		names : ["Kcedil"],
		decimalCode : 310,
		hexadecimalCode : "x00136"
	}, {
		names : ["kcedil"],
		decimalCode : 311,
		hexadecimalCode : "x00137"
	}, {
		names : ["kgreen"],
		decimalCode : 312,
		hexadecimalCode : "x00138"
	}, {
		names : ["Lacute"],
		decimalCode : 313,
		hexadecimalCode : "x00139"
	}, {
		names : ["lacute"],
		decimalCode : 314,
		hexadecimalCode : "x0013A"
	}, {
		names : ["Lcedil"],
		decimalCode : 315,
		hexadecimalCode : "x0013B"
	}, {
		names : ["lcedil"],
		decimalCode : 316,
		hexadecimalCode : "x0013C"
	}, {
		names : ["Lcaron"],
		decimalCode : 317,
		hexadecimalCode : "x0013D"
	}, {
		names : ["lcaron"],
		decimalCode : 318,
		hexadecimalCode : "x0013E"
	}, {
		names : ["Lmidot"],
		decimalCode : 319,
		hexadecimalCode : "x0013F"
	}, {
		names : ["lmidot"],
		decimalCode : 320,
		hexadecimalCode : "x00140"
	}, {
		names : ["Lstrok"],
		decimalCode : 321,
		hexadecimalCode : "x00141"
	}, {
		names : ["lstrok"],
		decimalCode : 322,
		hexadecimalCode : "x00142"
	}, {
		names : ["Nacute"],
		decimalCode : 323,
		hexadecimalCode : "x00143"
	}, {
		names : ["nacute"],
		decimalCode : 324,
		hexadecimalCode : "x00144"
	}, {
		names : ["Ncedil"],
		decimalCode : 325,
		hexadecimalCode : "x00145"
	}, {
		names : ["ncedil"],
		decimalCode : 326,
		hexadecimalCode : "x00146"
	}, {
		names : ["Ncaron"],
		decimalCode : 327,
		hexadecimalCode : "x00147"
	}, {
		names : ["ncaron"],
		decimalCode : 328,
		hexadecimalCode : "x00148"
	}, {
		names : ["napos"],
		decimalCode : 329,
		hexadecimalCode : "x00149"
	}, {
		names : ["ENG"],
		decimalCode : 330,
		hexadecimalCode : "x0014A"
	}, {
		names : ["eng"],
		decimalCode : 331,
		hexadecimalCode : "x0014B"
	}, {
		names : ["Omacr"],
		decimalCode : 332,
		hexadecimalCode : "x0014C"
	}, {
		names : ["omacr"],
		decimalCode : 333,
		hexadecimalCode : "x0014D"
	}, {
		names : ["Odblac"],
		decimalCode : 336,
		hexadecimalCode : "x00150"
	}, {
		names : ["odblac"],
		decimalCode : 337,
		hexadecimalCode : "x00151"
	}, {
		names : ["OElig"],
		decimalCode : 338,
		hexadecimalCode : "x00152"
	}, {
		names : ["oelig"],
		decimalCode : 339,
		hexadecimalCode : "x00153"
	}, {
		names : ["Racute"],
		decimalCode : 340,
		hexadecimalCode : "x00154"
	}, {
		names : ["racute"],
		decimalCode : 341,
		hexadecimalCode : "x00155"
	}, {
		names : ["Rcedil"],
		decimalCode : 342,
		hexadecimalCode : "x00156"
	}, {
		names : ["rcedil"],
		decimalCode : 343,
		hexadecimalCode : "x00157"
	}, {
		names : ["Rcaron"],
		decimalCode : 344,
		hexadecimalCode : "x00158"
	}, {
		names : ["rcaron"],
		decimalCode : 345,
		hexadecimalCode : "x00159"
	}, {
		names : ["Sacute"],
		decimalCode : 346,
		hexadecimalCode : "x0015A"
	}, {
		names : ["sacute"],
		decimalCode : 347,
		hexadecimalCode : "x0015B"
	}, {
		names : ["Scirc"],
		decimalCode : 348,
		hexadecimalCode : "x0015C"
	}, {
		names : ["scirc"],
		decimalCode : 349,
		hexadecimalCode : "x0015D"
	}, {
		names : ["Scedil"],
		decimalCode : 350,
		hexadecimalCode : "x0015E"
	}, {
		names : ["scedil"],
		decimalCode : 351,
		hexadecimalCode : "x0015F"
	}, {
		names : ["Scaron"],
		decimalCode : 352,
		hexadecimalCode : "x00160"
	}, {
		names : ["scaron"],
		decimalCode : 353,
		hexadecimalCode : "x00161"
	}, {
		names : ["Tcedil"],
		decimalCode : 354,
		hexadecimalCode : "x00162"
	}, {
		names : ["tcedil"],
		decimalCode : 355,
		hexadecimalCode : "x00163"
	}, {
		names : ["Tcaron"],
		decimalCode : 356,
		hexadecimalCode : "x00164"
	}, {
		names : ["tcaron"],
		decimalCode : 357,
		hexadecimalCode : "x00165"
	}, {
		names : ["Tstrok"],
		decimalCode : 358,
		hexadecimalCode : "x00166"
	}, {
		names : ["tstrok"],
		decimalCode : 359,
		hexadecimalCode : "x00167"
	}, {
		names : ["Utilde"],
		decimalCode : 360,
		hexadecimalCode : "x00168"
	}, {
		names : ["utilde"],
		decimalCode : 361,
		hexadecimalCode : "x00169"
	}, {
		names : ["Umacr"],
		decimalCode : 362,
		hexadecimalCode : "x0016A"
	}, {
		names : ["umacr"],
		decimalCode : 363,
		hexadecimalCode : "x0016B"
	}, {
		names : ["Ubreve"],
		decimalCode : 364,
		hexadecimalCode : "x0016C"
	}, {
		names : ["ubreve"],
		decimalCode : 365,
		hexadecimalCode : "x0016D"
	}, {
		names : ["Uring"],
		decimalCode : 366,
		hexadecimalCode : "x0016E"
	}, {
		names : ["uring"],
		decimalCode : 367,
		hexadecimalCode : "x0016F"
	}, {
		names : ["Udblac"],
		decimalCode : 368,
		hexadecimalCode : "x00170"
	}, {
		names : ["udblac"],
		decimalCode : 369,
		hexadecimalCode : "x00171"
	}, {
		names : ["Uogon"],
		decimalCode : 370,
		hexadecimalCode : "x00172"
	}, {
		names : ["uogon"],
		decimalCode : 371,
		hexadecimalCode : "x00173"
	}, {
		names : ["Wcirc"],
		decimalCode : 372,
		hexadecimalCode : "x00174"
	}, {
		names : ["wcirc"],
		decimalCode : 373,
		hexadecimalCode : "x00175"
	}, {
		names : ["Ycirc"],
		decimalCode : 374,
		hexadecimalCode : "x00176"
	}, {
		names : ["ycirc"],
		decimalCode : 375,
		hexadecimalCode : "x00177"
	}, {
		names : ["Yuml"],
		decimalCode : 376,
		hexadecimalCode : "x00178"
	}, {
		names : ["Zacute"],
		decimalCode : 377,
		hexadecimalCode : "x00179"
	}, {
		names : ["zacute"],
		decimalCode : 378,
		hexadecimalCode : "x0017A"
	}, {
		names : ["Zdot"],
		decimalCode : 379,
		hexadecimalCode : "x0017B"
	}, {
		names : ["zdot"],
		decimalCode : 380,
		hexadecimalCode : "x0017C"
	}, {
		names : ["Zcaron"],
		decimalCode : 381,
		hexadecimalCode : "x0017D"
	}, {
		names : ["zcaron"],
		decimalCode : 382,
		hexadecimalCode : "x0017E"
	}, {
		names : ["fnof"],
		decimalCode : 402,
		hexadecimalCode : "x00192"
	}, {
		names : ["imped"],
		decimalCode : 437,
		hexadecimalCode : "x001B5"
	}, {
		names : ["gacute"],
		decimalCode : 501,
		hexadecimalCode : "x001F5"
	}, {
		names : ["jmath"],
		decimalCode : 567,
		hexadecimalCode : "x00237"
	}, {
		names : ["circ"],
		decimalCode : 710,
		hexadecimalCode : "x002C6"
	}, {
		names : ["caron", "Hacek"],
		decimalCode : 711,
		hexadecimalCode : "x002C7"
	}, {
		names : ["breve", "Breve"],
		decimalCode : 728,
		hexadecimalCode : "x002D8"
	}, {
		names : ["dot", "DiacriticalDot"],
		decimalCode : 729,
		hexadecimalCode : "x002D9"
	}, {
		names : ["ring"],
		decimalCode : 730,
		hexadecimalCode : "x002DA"
	}, {
		names : ["ogon"],
		decimalCode : 731,
		hexadecimalCode : "x002DB"
	}, {
		names : ["tilde", "DiacriticalTilde"],
		decimalCode : 732,
		hexadecimalCode : "x002DC"
	}, {
		names : ["dblac", "DiacriticalDoubleAcute"],
		decimalCode : 733,
		hexadecimalCode : "x002DD"
	}, {
		names : ["DownBreve"],
		decimalCode : 785,
		hexadecimalCode : "x00311"
	}, {
		names : ["UnderBar"],
		decimalCode : 818,
		hexadecimalCode : "x00332"
	}, {
		names : ["Alpha"],
		decimalCode : 913,
		hexadecimalCode : "x00391"
	}, {
		names : ["Beta"],
		decimalCode : 914,
		hexadecimalCode : "x00392"
	}, {
		names : ["Gamma"],
		decimalCode : 915,
		hexadecimalCode : "x00393"
	}, {
		names : ["Delta"],
		decimalCode : 916,
		hexadecimalCode : "x00394"
	}, {
		names : ["Epsilon"],
		decimalCode : 917,
		hexadecimalCode : "x00395"
	}, {
		names : ["Zeta"],
		decimalCode : 918,
		hexadecimalCode : "x00396"
	}, {
		names : ["Eta"],
		decimalCode : 919,
		hexadecimalCode : "x00397"
	}, {
		names : ["Theta"],
		decimalCode : 920,
		hexadecimalCode : "x00398"
	}, {
		names : ["Iota"],
		decimalCode : 921,
		hexadecimalCode : "x00399"
	}, {
		names : ["Kappa"],
		decimalCode : 922,
		hexadecimalCode : "x0039A"
	}, {
		names : ["Lambda"],
		decimalCode : 923,
		hexadecimalCode : "x0039B"
	}, {
		names : ["Mu"],
		decimalCode : 924,
		hexadecimalCode : "x0039C"
	}, {
		names : ["Nu"],
		decimalCode : 925,
		hexadecimalCode : "x0039D"
	}, {
		names : ["Xi"],
		decimalCode : 926,
		hexadecimalCode : "x0039E"
	}, {
		names : ["Omicron"],
		decimalCode : 927,
		hexadecimalCode : "x0039F"
	}, {
		names : ["Pi"],
		decimalCode : 928,
		hexadecimalCode : "x003A0"
	}, {
		names : ["Rho"],
		decimalCode : 929,
		hexadecimalCode : "x003A1"
	}, {
		names : ["Sigma"],
		decimalCode : 931,
		hexadecimalCode : "x003A3"
	}, {
		names : ["Tau"],
		decimalCode : 932,
		hexadecimalCode : "x003A4"
	}, {
		names : ["Upsilon"],
		decimalCode : 933,
		hexadecimalCode : "x003A5"
	}, {
		names : ["Phi"],
		decimalCode : 934,
		hexadecimalCode : "x003A6"
	}, {
		names : ["Chi"],
		decimalCode : 935,
		hexadecimalCode : "x003A7"
	}, {
		names : ["Psi"],
		decimalCode : 936,
		hexadecimalCode : "x003A8"
	}, {
		names : ["Omega"],
		decimalCode : 937,
		hexadecimalCode : "x003A9"
	}, {
		names : ["alpha"],
		decimalCode : 945,
		hexadecimalCode : "x003B1"
	}, {
		names : ["beta"],
		decimalCode : 946,
		hexadecimalCode : "x003B2"
	}, {
		names : ["gamma"],
		decimalCode : 947,
		hexadecimalCode : "x003B3"
	}, {
		names : ["delta"],
		decimalCode : 948,
		hexadecimalCode : "x003B4"
	}, {
		names : ["epsiv", "varepsilon", "epsilon"],
		decimalCode : 949,
		hexadecimalCode : "x003B5"
	}, {
		names : ["zeta"],
		decimalCode : 950,
		hexadecimalCode : "x003B6"
	}, {
		names : ["eta"],
		decimalCode : 951,
		hexadecimalCode : "x003B7"
	}, {
		names : ["theta"],
		decimalCode : 952,
		hexadecimalCode : "x003B8"
	}, {
		names : ["iota"],
		decimalCode : 953,
		hexadecimalCode : "x003B9"
	}, {
		names : ["kappa"],
		decimalCode : 954,
		hexadecimalCode : "x003BA"
	}, {
		names : ["lambda"],
		decimalCode : 955,
		hexadecimalCode : "x003BB"
	}, {
		names : ["mu"],
		decimalCode : 956,
		hexadecimalCode : "x003BC"
	}, {
		names : ["nu"],
		decimalCode : 957,
		hexadecimalCode : "x003BD"
	}, {
		names : ["xi"],
		decimalCode : 958,
		hexadecimalCode : "x003BE"
	}, {
		names : ["omicron"],
		decimalCode : 959,
		hexadecimalCode : "x003BF"
	}, {
		names : ["pi"],
		decimalCode : 960,
		hexadecimalCode : "x003C0"
	}, {
		names : ["rho"],
		decimalCode : 961,
		hexadecimalCode : "x003C1"
	}, {
		names : ["sigmav", "varsigma", "sigmaf"],
		decimalCode : 962,
		hexadecimalCode : "x003C2"
	}, {
		names : ["sigma"],
		decimalCode : 963,
		hexadecimalCode : "x003C3"
	}, {
		names : ["tau"],
		decimalCode : 964,
		hexadecimalCode : "x003C4"
	}, {
		names : ["upsi", "upsilon"],
		decimalCode : 965,
		hexadecimalCode : "x003C5"
	}, {
		names : ["phi", "phiv", "varphi"],
		decimalCode : 966,
		hexadecimalCode : "x003C6"
	}, {
		names : ["chi"],
		decimalCode : 967,
		hexadecimalCode : "x003C7"
	}, {
		names : ["psi"],
		decimalCode : 968,
		hexadecimalCode : "x003C8"
	}, {
		names : ["omega"],
		decimalCode : 969,
		hexadecimalCode : "x003C9"
	}, {
		names : ["thetav", "vartheta", "thetasym"],
		decimalCode : 977,
		hexadecimalCode : "x003D1"
	}, {
		names : ["Upsi", "upsih"],
		decimalCode : 978,
		hexadecimalCode : "x003D2"
	}, {
		names : ["straightphi"],
		decimalCode : 981,
		hexadecimalCode : "x003D5"
	}, {
		names : ["piv", "varpi"],
		decimalCode : 982,
		hexadecimalCode : "x003D6"
	}, {
		names : ["Gammad"],
		decimalCode : 988,
		hexadecimalCode : "x003DC"
	}, {
		names : ["gammad", "digamma"],
		decimalCode : 989,
		hexadecimalCode : "x003DD"
	}, {
		names : ["kappav", "varkappa"],
		decimalCode : 1008,
		hexadecimalCode : "x003F0"
	}, {
		names : ["rhov", "varrho"],
		decimalCode : 1009,
		hexadecimalCode : "x003F1"
	}, {
		names : ["epsi", "straightepsilon"],
		decimalCode : 1013,
		hexadecimalCode : "x003F5"
	}, {
		names : ["bepsi", "backepsilon"],
		decimalCode : 1014,
		hexadecimalCode : "x003F6"
	}, {
		names : ["IOcy"],
		decimalCode : 1025,
		hexadecimalCode : "x00401"
	}, {
		names : ["DJcy"],
		decimalCode : 1026,
		hexadecimalCode : "x00402"
	}, {
		names : ["GJcy"],
		decimalCode : 1027,
		hexadecimalCode : "x00403"
	}, {
		names : ["Jukcy"],
		decimalCode : 1028,
		hexadecimalCode : "x00404"
	}, {
		names : ["DScy"],
		decimalCode : 1029,
		hexadecimalCode : "x00405"
	}, {
		names : ["Iukcy"],
		decimalCode : 1030,
		hexadecimalCode : "x00406"
	}, {
		names : ["YIcy"],
		decimalCode : 1031,
		hexadecimalCode : "x00407"
	}, {
		names : ["Jsercy"],
		decimalCode : 1032,
		hexadecimalCode : "x00408"
	}, {
		names : ["LJcy"],
		decimalCode : 1033,
		hexadecimalCode : "x00409"
	}, {
		names : ["NJcy"],
		decimalCode : 1034,
		hexadecimalCode : "x0040A"
	}, {
		names : ["TSHcy"],
		decimalCode : 1035,
		hexadecimalCode : "x0040B"
	}, {
		names : ["KJcy"],
		decimalCode : 1036,
		hexadecimalCode : "x0040C"
	}, {
		names : ["Ubrcy"],
		decimalCode : 1038,
		hexadecimalCode : "x0040E"
	}, {
		names : ["DZcy"],
		decimalCode : 1039,
		hexadecimalCode : "x0040F"
	}, {
		names : ["Acy"],
		decimalCode : 1040,
		hexadecimalCode : "x00410"
	}, {
		names : ["Bcy"],
		decimalCode : 1041,
		hexadecimalCode : "x00411"
	}, {
		names : ["Vcy"],
		decimalCode : 1042,
		hexadecimalCode : "x00412"
	}, {
		names : ["Gcy"],
		decimalCode : 1043,
		hexadecimalCode : "x00413"
	}, {
		names : ["Dcy"],
		decimalCode : 1044,
		hexadecimalCode : "x00414"
	}, {
		names : ["IEcy"],
		decimalCode : 1045,
		hexadecimalCode : "x00415"
	}, {
		names : ["ZHcy"],
		decimalCode : 1046,
		hexadecimalCode : "x00416"
	}, {
		names : ["Zcy"],
		decimalCode : 1047,
		hexadecimalCode : "x00417"
	}, {
		names : ["Icy"],
		decimalCode : 1048,
		hexadecimalCode : "x00418"
	}, {
		names : ["Jcy"],
		decimalCode : 1049,
		hexadecimalCode : "x00419"
	}, {
		names : ["Kcy"],
		decimalCode : 1050,
		hexadecimalCode : "x0041A"
	}, {
		names : ["Lcy"],
		decimalCode : 1051,
		hexadecimalCode : "x0041B"
	}, {
		names : ["Mcy"],
		decimalCode : 1052,
		hexadecimalCode : "x0041C"
	}, {
		names : ["Ncy"],
		decimalCode : 1053,
		hexadecimalCode : "x0041D"
	}, {
		names : ["Ocy"],
		decimalCode : 1054,
		hexadecimalCode : "x0041E"
	}, {
		names : ["Pcy"],
		decimalCode : 1055,
		hexadecimalCode : "x0041F"
	}, {
		names : ["Rcy"],
		decimalCode : 1056,
		hexadecimalCode : "x00420"
	}, {
		names : ["Scy"],
		decimalCode : 1057,
		hexadecimalCode : "x00421"
	}, {
		names : ["Tcy"],
		decimalCode : 1058,
		hexadecimalCode : "x00422"
	}, {
		names : ["Ucy"],
		decimalCode : 1059,
		hexadecimalCode : "x00423"
	}, {
		names : ["Fcy"],
		decimalCode : 1060,
		hexadecimalCode : "x00424"
	}, {
		names : ["KHcy"],
		decimalCode : 1061,
		hexadecimalCode : "x00425"
	}, {
		names : ["TScy"],
		decimalCode : 1062,
		hexadecimalCode : "x00426"
	}, {
		names : ["CHcy"],
		decimalCode : 1063,
		hexadecimalCode : "x00427"
	}, {
		names : ["SHcy"],
		decimalCode : 1064,
		hexadecimalCode : "x00428"
	}, {
		names : ["SHCHcy"],
		decimalCode : 1065,
		hexadecimalCode : "x00429"
	}, {
		names : ["HARDcy"],
		decimalCode : 1066,
		hexadecimalCode : "x0042A"
	}, {
		names : ["Ycy"],
		decimalCode : 1067,
		hexadecimalCode : "x0042B"
	}, {
		names : ["SOFTcy"],
		decimalCode : 1068,
		hexadecimalCode : "x0042C"
	}, {
		names : ["Ecy"],
		decimalCode : 1069,
		hexadecimalCode : "x0042D"
	}, {
		names : ["YUcy"],
		decimalCode : 1070,
		hexadecimalCode : "x0042E"
	}, {
		names : ["YAcy"],
		decimalCode : 1071,
		hexadecimalCode : "x0042F"
	}, {
		names : ["acy"],
		decimalCode : 1072,
		hexadecimalCode : "x00430"
	}, {
		names : ["bcy"],
		decimalCode : 1073,
		hexadecimalCode : "x00431"
	}, {
		names : ["vcy"],
		decimalCode : 1074,
		hexadecimalCode : "x00432"
	}, {
		names : ["gcy"],
		decimalCode : 1075,
		hexadecimalCode : "x00433"
	}, {
		names : ["dcy"],
		decimalCode : 1076,
		hexadecimalCode : "x00434"
	}, {
		names : ["iecy"],
		decimalCode : 1077,
		hexadecimalCode : "x00435"
	}, {
		names : ["zhcy"],
		decimalCode : 1078,
		hexadecimalCode : "x00436"
	}, {
		names : ["zcy"],
		decimalCode : 1079,
		hexadecimalCode : "x00437"
	}, {
		names : ["icy"],
		decimalCode : 1080,
		hexadecimalCode : "x00438"
	}, {
		names : ["jcy"],
		decimalCode : 1081,
		hexadecimalCode : "x00439"
	}, {
		names : ["kcy"],
		decimalCode : 1082,
		hexadecimalCode : "x0043A"
	}, {
		names : ["lcy"],
		decimalCode : 1083,
		hexadecimalCode : "x0043B"
	}, {
		names : ["mcy"],
		decimalCode : 1084,
		hexadecimalCode : "x0043C"
	}, {
		names : ["ncy"],
		decimalCode : 1085,
		hexadecimalCode : "x0043D"
	}, {
		names : ["ocy"],
		decimalCode : 1086,
		hexadecimalCode : "x0043E"
	}, {
		names : ["pcy"],
		decimalCode : 1087,
		hexadecimalCode : "x0043F"
	}, {
		names : ["rcy"],
		decimalCode : 1088,
		hexadecimalCode : "x00440"
	}, {
		names : ["scy"],
		decimalCode : 1089,
		hexadecimalCode : "x00441"
	}, {
		names : ["tcy"],
		decimalCode : 1090,
		hexadecimalCode : "x00442"
	}, {
		names : ["ucy"],
		decimalCode : 1091,
		hexadecimalCode : "x00443"
	}, {
		names : ["fcy"],
		decimalCode : 1092,
		hexadecimalCode : "x00444"
	}, {
		names : ["khcy"],
		decimalCode : 1093,
		hexadecimalCode : "x00445"
	}, {
		names : ["tscy"],
		decimalCode : 1094,
		hexadecimalCode : "x00446"
	}, {
		names : ["chcy"],
		decimalCode : 1095,
		hexadecimalCode : "x00447"
	}, {
		names : ["shcy"],
		decimalCode : 1096,
		hexadecimalCode : "x00448"
	}, {
		names : ["shchcy"],
		decimalCode : 1097,
		hexadecimalCode : "x00449"
	}, {
		names : ["hardcy"],
		decimalCode : 1098,
		hexadecimalCode : "x0044A"
	}, {
		names : ["ycy"],
		decimalCode : 1099,
		hexadecimalCode : "x0044B"
	}, {
		names : ["softcy"],
		decimalCode : 1100,
		hexadecimalCode : "x0044C"
	}, {
		names : ["ecy"],
		decimalCode : 1101,
		hexadecimalCode : "x0044D"
	}, {
		names : ["yucy"],
		decimalCode : 1102,
		hexadecimalCode : "x0044E"
	}, {
		names : ["yacy"],
		decimalCode : 1103,
		hexadecimalCode : "x0044F"
	}, {
		names : ["iocy"],
		decimalCode : 1105,
		hexadecimalCode : "x00451"
	}, {
		names : ["djcy"],
		decimalCode : 1106,
		hexadecimalCode : "x00452"
	}, {
		names : ["gjcy"],
		decimalCode : 1107,
		hexadecimalCode : "x00453"
	}, {
		names : ["jukcy"],
		decimalCode : 1108,
		hexadecimalCode : "x00454"
	}, {
		names : ["dscy"],
		decimalCode : 1109,
		hexadecimalCode : "x00455"
	}, {
		names : ["iukcy"],
		decimalCode : 1110,
		hexadecimalCode : "x00456"
	}, {
		names : ["yicy"],
		decimalCode : 1111,
		hexadecimalCode : "x00457"
	}, {
		names : ["jsercy"],
		decimalCode : 1112,
		hexadecimalCode : "x00458"
	}, {
		names : ["ljcy"],
		decimalCode : 1113,
		hexadecimalCode : "x00459"
	}, {
		names : ["njcy"],
		decimalCode : 1114,
		hexadecimalCode : "x0045A"
	}, {
		names : ["tshcy"],
		decimalCode : 1115,
		hexadecimalCode : "x0045B"
	}, {
		names : ["kjcy"],
		decimalCode : 1116,
		hexadecimalCode : "x0045C"
	}, {
		names : ["ubrcy"],
		decimalCode : 1118,
		hexadecimalCode : "x0045E"
	}, {
		names : ["dzcy"],
		decimalCode : 1119,
		hexadecimalCode : "x0045F"
	}, {
		names : ["ensp"],
		decimalCode : 8194,
		hexadecimalCode : "x02002"
	}, {
		names : ["emsp"],
		decimalCode : 8195,
		hexadecimalCode : "x02003"
	}, {
		names : ["emsp13"],
		decimalCode : 8196,
		hexadecimalCode : "x02004"
	}, {
		names : ["emsp14"],
		decimalCode : 8197,
		hexadecimalCode : "x02005"
	}, {
		names : ["numsp"],
		decimalCode : 8199,
		hexadecimalCode : "x02007"
	}, {
		names : ["puncsp"],
		decimalCode : 8200,
		hexadecimalCode : "x02008"
	}, {
		names : ["thinsp", "ThinSpace"],
		decimalCode : 8201,
		hexadecimalCode : "x02009"
	}, {
		names : ["hairsp", "VeryThinSpace"],
		decimalCode : 8202,
		hexadecimalCode : "x0200A"
	}, {
		names : ["ZeroWidthSpace", "NegativeVeryThinSpace", "NegativeThinSpace", "NegativeMediumSpace", "NegativeThickSpace"],
		decimalCode : 8203,
		hexadecimalCode : "x0200B"
	}, {
		names : ["zwnj"],
		decimalCode : 8204,
		hexadecimalCode : "x0200C"
	}, {
		names : ["zwj"],
		decimalCode : 8205,
		hexadecimalCode : "x0200D"
	}, {
		names : ["lrm"],
		decimalCode : 8206,
		hexadecimalCode : "x0200E"
	}, {
		names : ["rlm"],
		decimalCode : 8207,
		hexadecimalCode : "x0200F"
	}, {
		names : ["hyphen", "dash"],
		decimalCode : 8208,
		hexadecimalCode : "x02010"
	}, {
		names : ["ndash"],
		decimalCode : 8211,
		hexadecimalCode : "x02013"
	}, {
		names : ["mdash"],
		decimalCode : 8212,
		hexadecimalCode : "x02014"
	}, {
		names : ["horbar"],
		decimalCode : 8213,
		hexadecimalCode : "x02015"
	}, {
		names : ["Verbar", "Vert"],
		decimalCode : 8214,
		hexadecimalCode : "x02016"
	}, {
		names : ["lsquo", "OpenCurlyQuote"],
		decimalCode : 8216,
		hexadecimalCode : "x02018"
	}, {
		names : ["rsquo", "rsquor", "CloseCurlyQuote"],
		decimalCode : 8217,
		hexadecimalCode : "x02019"
	}, {
		names : ["lsquor", "sbquo"],
		decimalCode : 8218,
		hexadecimalCode : "x0201A"
	}, {
		names : ["ldquo", "OpenCurlyDoubleQuote"],
		decimalCode : 8220,
		hexadecimalCode : "x0201C"
	}, {
		names : ["rdquo", "rdquor", "CloseCurlyDoubleQuote"],
		decimalCode : 8221,
		hexadecimalCode : "x0201D"
	}, {
		names : ["ldquor", "bdquo"],
		decimalCode : 8222,
		hexadecimalCode : "x0201E"
	}, {
		names : ["dagger"],
		decimalCode : 8224,
		hexadecimalCode : "x02020"
	}, {
		names : ["Dagger", "ddagger"],
		decimalCode : 8225,
		hexadecimalCode : "x02021"
	}, {
		names : ["bull", "bullet"],
		decimalCode : 8226,
		hexadecimalCode : "x02022"
	}, {
		names : ["nldr"],
		decimalCode : 8229,
		hexadecimalCode : "x02025"
	}, {
		names : ["hellip", "mldr"],
		decimalCode : 8230,
		hexadecimalCode : "x02026"
	}, {
		names : ["permil"],
		decimalCode : 8240,
		hexadecimalCode : "x02030"
	}, {
		names : ["pertenk"],
		decimalCode : 8241,
		hexadecimalCode : "x02031"
	}, {
		names : ["prime"],
		decimalCode : 8242,
		hexadecimalCode : "x02032"
	}, {
		names : ["Prime"],
		decimalCode : 8243,
		hexadecimalCode : "x02033"
	}, {
		names : ["tprime"],
		decimalCode : 8244,
		hexadecimalCode : "x02034"
	}, {
		names : ["bprime", "backprime"],
		decimalCode : 8245,
		hexadecimalCode : "x02035"
	}, {
		names : ["lsaquo"],
		decimalCode : 8249,
		hexadecimalCode : "x02039"
	}, {
		names : ["rsaquo"],
		decimalCode : 8250,
		hexadecimalCode : "x0203A"
	}, {
		names : ["oline"],
		decimalCode : 8254,
		hexadecimalCode : "x0203E"
	}, {
		names : ["caret"],
		decimalCode : 8257,
		hexadecimalCode : "x02041"
	}, {
		names : ["hybull"],
		decimalCode : 8259,
		hexadecimalCode : "x02043"
	}, {
		names : ["frasl"],
		decimalCode : 8260,
		hexadecimalCode : "x02044"
	}, {
		names : ["bsemi"],
		decimalCode : 8271,
		hexadecimalCode : "x0204F"
	}, {
		names : ["qprime"],
		decimalCode : 8279,
		hexadecimalCode : "x02057"
	}, {
		names : ["MediumSpace"],
		decimalCode : 8287,
		hexadecimalCode : "x0205F"
	}, {
		names : ["NoBreak"],
		decimalCode : 8288,
		hexadecimalCode : "x02060"
	}, {
		names : ["ApplyFunction", "af"],
		decimalCode : 8289,
		hexadecimalCode : "x02061"
	}, {
		names : ["InvisibleTimes", "it"],
		decimalCode : 8290,
		hexadecimalCode : "x02062"
	}, {
		names : ["InvisibleComma", "ic"],
		decimalCode : 8291,
		hexadecimalCode : "x02063"
	}, {
		names : ["euro"],
		decimalCode : 8364,
		hexadecimalCode : "x020AC"
	}, {
		names : ["tdot", "TripleDot"],
		decimalCode : 8411,
		hexadecimalCode : "x020DB"
	}, {
		names : ["DotDot"],
		decimalCode : 8412,
		hexadecimalCode : "x020DC"
	}, {
		names : ["Copf", "complexes"],
		decimalCode : 8450,
		hexadecimalCode : "x02102"
	}, {
		names : ["incare"],
		decimalCode : 8453,
		hexadecimalCode : "x02105"
	}, {
		names : ["gscr"],
		decimalCode : 8458,
		hexadecimalCode : "x0210A"
	}, {
		names : ["hamilt", "HilbertSpace", "Hscr"],
		decimalCode : 8459,
		hexadecimalCode : "x0210B"
	}, {
		names : ["Hfr", "Poincareplane"],
		decimalCode : 8460,
		hexadecimalCode : "x0210C"
	}, {
		names : ["quaternions", "Hopf"],
		decimalCode : 8461,
		hexadecimalCode : "x0210D"
	}, {
		names : ["planckh"],
		decimalCode : 8462,
		hexadecimalCode : "x0210E"
	}, {
		names : ["planck", "hbar", "plankv", "hslash"],
		decimalCode : 8463,
		hexadecimalCode : "x0210F"
	}, {
		names : ["Iscr", "imagline"],
		decimalCode : 8464,
		hexadecimalCode : "x02110"
	}, {
		names : ["image", "Im", "imagpart", "Ifr"],
		decimalCode : 8465,
		hexadecimalCode : "x02111"
	}, {
		names : ["Lscr", "lagran", "Laplacetrf"],
		decimalCode : 8466,
		hexadecimalCode : "x02112"
	}, {
		names : ["ell"],
		decimalCode : 8467,
		hexadecimalCode : "x02113"
	}, {
		names : ["Nopf", "naturals"],
		decimalCode : 8469,
		hexadecimalCode : "x02115"
	}, {
		names : ["numero"],
		decimalCode : 8470,
		hexadecimalCode : "x02116"
	}, {
		names : ["copysr"],
		decimalCode : 8471,
		hexadecimalCode : "x02117"
	}, {
		names : ["weierp", "wp"],
		decimalCode : 8472,
		hexadecimalCode : "x02118"
	}, {
		names : ["Popf", "primes"],
		decimalCode : 8473,
		hexadecimalCode : "x02119"
	}, {
		names : ["rationals", "Qopf"],
		decimalCode : 8474,
		hexadecimalCode : "x0211A"
	}, {
		names : ["Rscr", "realine"],
		decimalCode : 8475,
		hexadecimalCode : "x0211B"
	}, {
		names : ["real", "Re", "realpart", "Rfr"],
		decimalCode : 8476,
		hexadecimalCode : "x0211C"
	}, {
		names : ["reals", "Ropf"],
		decimalCode : 8477,
		hexadecimalCode : "x0211D"
	}, {
		names : ["rx"],
		decimalCode : 8478,
		hexadecimalCode : "x0211E"
	}, {
		names : ["trade", "TRADE"],
		decimalCode : 8482,
		hexadecimalCode : "x02122"
	}, {
		names : ["integers", "Zopf"],
		decimalCode : 8484,
		hexadecimalCode : "x02124"
	}, {
		names : ["ohm"],
		decimalCode : 8486,
		hexadecimalCode : "x02126"
	}, {
		names : ["mho"],
		decimalCode : 8487,
		hexadecimalCode : "x02127"
	}, {
		names : ["Zfr", "zeetrf"],
		decimalCode : 8488,
		hexadecimalCode : "x02128"
	}, {
		names : ["iiota"],
		decimalCode : 8489,
		hexadecimalCode : "x02129"
	}, {
		names : ["angst"],
		decimalCode : 8491,
		hexadecimalCode : "x0212B"
	}, {
		names : ["bernou", "Bernoullis", "Bscr"],
		decimalCode : 8492,
		hexadecimalCode : "x0212C"
	}, {
		names : ["Cfr", "Cayleys"],
		decimalCode : 8493,
		hexadecimalCode : "x0212D"
	}, {
		names : ["escr"],
		decimalCode : 8495,
		hexadecimalCode : "x0212F"
	}, {
		names : ["Escr", "expectation"],
		decimalCode : 8496,
		hexadecimalCode : "x02130"
	}, {
		names : ["Fscr", "Fouriertrf"],
		decimalCode : 8497,
		hexadecimalCode : "x02131"
	}, {
		names : ["phmmat", "Mellintrf", "Mscr"],
		decimalCode : 8499,
		hexadecimalCode : "x02133"
	}, {
		names : ["order", "orderof", "oscr"],
		decimalCode : 8500,
		hexadecimalCode : "x02134"
	}, {
		names : ["alefsym", "aleph"],
		decimalCode : 8501,
		hexadecimalCode : "x02135"
	}, {
		names : ["beth"],
		decimalCode : 8502,
		hexadecimalCode : "x02136"
	}, {
		names : ["gimel"],
		decimalCode : 8503,
		hexadecimalCode : "x02137"
	}, {
		names : ["daleth"],
		decimalCode : 8504,
		hexadecimalCode : "x02138"
	}, {
		names : ["CapitalDifferentialD", "DD"],
		decimalCode : 8517,
		hexadecimalCode : "x02145"
	}, {
		names : ["DifferentialD", "dd"],
		decimalCode : 8518,
		hexadecimalCode : "x02146"
	}, {
		names : ["ExponentialE", "exponentiale", "ee"],
		decimalCode : 8519,
		hexadecimalCode : "x02147"
	}, {
		names : ["ImaginaryI", "ii"],
		decimalCode : 8520,
		hexadecimalCode : "x02148"
	}, {
		names : ["frac13"],
		decimalCode : 8531,
		hexadecimalCode : "x02153"
	}, {
		names : ["frac23"],
		decimalCode : 8532,
		hexadecimalCode : "x02154"
	}, {
		names : ["frac15"],
		decimalCode : 8533,
		hexadecimalCode : "x02155"
	}, {
		names : ["frac25"],
		decimalCode : 8534,
		hexadecimalCode : "x02156"
	}, {
		names : ["frac35"],
		decimalCode : 8535,
		hexadecimalCode : "x02157"
	}, {
		names : ["frac45"],
		decimalCode : 8536,
		hexadecimalCode : "x02158"
	}, {
		names : ["frac16"],
		decimalCode : 8537,
		hexadecimalCode : "x02159"
	}, {
		names : ["frac56"],
		decimalCode : 8538,
		hexadecimalCode : "x0215A"
	}, {
		names : ["frac18"],
		decimalCode : 8539,
		hexadecimalCode : "x0215B"
	}, {
		names : ["frac38"],
		decimalCode : 8540,
		hexadecimalCode : "x0215C"
	}, {
		names : ["frac58"],
		decimalCode : 8541,
		hexadecimalCode : "x0215D"
	}, {
		names : ["frac78"],
		decimalCode : 8542,
		hexadecimalCode : "x0215E"
	}, {
		names : ["larr", "leftarrow", "LeftArrow", "slarr", "ShortLeftArrow"],
		decimalCode : 8592,
		hexadecimalCode : "x02190"
	}, {
		names : ["uarr", "uparrow", "UpArrow", "ShortUpArrow"],
		decimalCode : 8593,
		hexadecimalCode : "x02191"
	}, {
		names : ["rarr", "rightarrow", "RightArrow", "srarr", "ShortRightArrow"],
		decimalCode : 8594,
		hexadecimalCode : "x02192"
	}, {
		names : ["darr", "downarrow", "DownArrow", "ShortDownArrow"],
		decimalCode : 8595,
		hexadecimalCode : "x02193"
	}, {
		names : ["harr", "leftrightarrow", "LeftRightArrow"],
		decimalCode : 8596,
		hexadecimalCode : "x02194"
	}, {
		names : ["varr", "updownarrow", "UpDownArrow"],
		decimalCode : 8597,
		hexadecimalCode : "x02195"
	}, {
		names : ["nwarr", "UpperLeftArrow", "nwarrow"],
		decimalCode : 8598,
		hexadecimalCode : "x02196"
	}, {
		names : ["nearr", "UpperRightArrow", "nearrow"],
		decimalCode : 8599,
		hexadecimalCode : "x02197"
	}, {
		names : ["searr", "searrow", "LowerRightArrow"],
		decimalCode : 8600,
		hexadecimalCode : "x02198"
	}, {
		names : ["swarr", "swarrow", "LowerLeftArrow"],
		decimalCode : 8601,
		hexadecimalCode : "x02199"
	}, {
		names : ["nlarr", "nleftarrow"],
		decimalCode : 8602,
		hexadecimalCode : "x0219A"
	}, {
		names : ["nrarr", "nrightarrow"],
		decimalCode : 8603,
		hexadecimalCode : "x0219B"
	}, {
		names : ["rarrw", "rightsquigarrow"],
		decimalCode : 8605,
		hexadecimalCode : "x0219D"
	}, {
		names : ["Larr", "twoheadleftarrow"],
		decimalCode : 8606,
		hexadecimalCode : "x0219E"
	}, {
		names : ["Uarr"],
		decimalCode : 8607,
		hexadecimalCode : "x0219F"
	}, {
		names : ["Rarr", "twoheadrightarrow"],
		decimalCode : 8608,
		hexadecimalCode : "x021A0"
	}, {
		names : ["Darr"],
		decimalCode : 8609,
		hexadecimalCode : "x021A1"
	}, {
		names : ["larrtl", "leftarrowtail"],
		decimalCode : 8610,
		hexadecimalCode : "x021A2"
	}, {
		names : ["rarrtl", "rightarrowtail"],
		decimalCode : 8611,
		hexadecimalCode : "x021A3"
	}, {
		names : ["LeftTeeArrow", "mapstoleft"],
		decimalCode : 8612,
		hexadecimalCode : "x021A4"
	}, {
		names : ["UpTeeArrow", "mapstoup"],
		decimalCode : 8613,
		hexadecimalCode : "x021A5"
	}, {
		names : ["map", "RightTeeArrow", "mapsto"],
		decimalCode : 8614,
		hexadecimalCode : "x021A6"
	}, {
		names : ["DownTeeArrow", "mapstodown"],
		decimalCode : 8615,
		hexadecimalCode : "x021A7"
	}, {
		names : ["larrhk", "hookleftarrow"],
		decimalCode : 8617,
		hexadecimalCode : "x021A9"
	}, {
		names : ["rarrhk", "hookrightarrow"],
		decimalCode : 8618,
		hexadecimalCode : "x021AA"
	}, {
		names : ["larrlp", "looparrowleft"],
		decimalCode : 8619,
		hexadecimalCode : "x021AB"
	}, {
		names : ["rarrlp", "looparrowright"],
		decimalCode : 8620,
		hexadecimalCode : "x021AC"
	}, {
		names : ["harrw", "leftrightsquigarrow"],
		decimalCode : 8621,
		hexadecimalCode : "x021AD"
	}, {
		names : ["nharr", "nleftrightarrow"],
		decimalCode : 8622,
		hexadecimalCode : "x021AE"
	}, {
		names : ["lsh", "Lsh"],
		decimalCode : 8624,
		hexadecimalCode : "x021B0"
	}, {
		names : ["rsh", "Rsh"],
		decimalCode : 8625,
		hexadecimalCode : "x021B1"
	}, {
		names : ["ldsh"],
		decimalCode : 8626,
		hexadecimalCode : "x021B2"
	}, {
		names : ["rdsh"],
		decimalCode : 8627,
		hexadecimalCode : "x021B3"
	}, {
		names : ["crarr"],
		decimalCode : 8629,
		hexadecimalCode : "x021B5"
	}, {
		names : ["cularr", "curvearrowleft"],
		decimalCode : 8630,
		hexadecimalCode : "x021B6"
	}, {
		names : ["curarr", "curvearrowright"],
		decimalCode : 8631,
		hexadecimalCode : "x021B7"
	}, {
		names : ["olarr", "circlearrowleft"],
		decimalCode : 8634,
		hexadecimalCode : "x021BA"
	}, {
		names : ["orarr", "circlearrowright"],
		decimalCode : 8635,
		hexadecimalCode : "x021BB"
	}, {
		names : ["lharu", "LeftVector", "leftharpoonup"],
		decimalCode : 8636,
		hexadecimalCode : "x021BC"
	}, {
		names : ["lhard", "leftharpoondown", "DownLeftVector"],
		decimalCode : 8637,
		hexadecimalCode : "x021BD"
	}, {
		names : ["uharr", "upharpoonright", "RightUpVector"],
		decimalCode : 8638,
		hexadecimalCode : "x021BE"
	}, {
		names : ["uharl", "upharpoonleft", "LeftUpVector"],
		decimalCode : 8639,
		hexadecimalCode : "x021BF"
	}, {
		names : ["rharu", "RightVector", "rightharpoonup"],
		decimalCode : 8640,
		hexadecimalCode : "x021C0"
	}, {
		names : ["rhard", "rightharpoondown", "DownRightVector"],
		decimalCode : 8641,
		hexadecimalCode : "x021C1"
	}, {
		names : ["dharr", "RightDownVector", "downharpoonright"],
		decimalCode : 8642,
		hexadecimalCode : "x021C2"
	}, {
		names : ["dharl", "LeftDownVector", "downharpoonleft"],
		decimalCode : 8643,
		hexadecimalCode : "x021C3"
	}, {
		names : ["rlarr", "rightleftarrows", "RightArrowLeftArrow"],
		decimalCode : 8644,
		hexadecimalCode : "x021C4"
	}, {
		names : ["udarr", "UpArrowDownArrow"],
		decimalCode : 8645,
		hexadecimalCode : "x021C5"
	}, {
		names : ["lrarr", "leftrightarrows", "LeftArrowRightArrow"],
		decimalCode : 8646,
		hexadecimalCode : "x021C6"
	}, {
		names : ["llarr", "leftleftarrows"],
		decimalCode : 8647,
		hexadecimalCode : "x021C7"
	}, {
		names : ["uuarr", "upuparrows"],
		decimalCode : 8648,
		hexadecimalCode : "x021C8"
	}, {
		names : ["rrarr", "rightrightarrows"],
		decimalCode : 8649,
		hexadecimalCode : "x021C9"
	}, {
		names : ["ddarr", "downdownarrows"],
		decimalCode : 8650,
		hexadecimalCode : "x021CA"
	}, {
		names : ["lrhar", "ReverseEquilibrium", "leftrightharpoons"],
		decimalCode : 8651,
		hexadecimalCode : "x021CB"
	}, {
		names : ["rlhar", "rightleftharpoons", "Equilibrium"],
		decimalCode : 8652,
		hexadecimalCode : "x021CC"
	}, {
		names : ["nlArr", "nLeftarrow"],
		decimalCode : 8653,
		hexadecimalCode : "x021CD"
	}, {
		names : ["nhArr", "nLeftrightarrow"],
		decimalCode : 8654,
		hexadecimalCode : "x021CE"
	}, {
		names : ["nrArr", "nRightarrow"],
		decimalCode : 8655,
		hexadecimalCode : "x021CF"
	}, {
		names : ["lArr", "Leftarrow", "DoubleLeftArrow"],
		decimalCode : 8656,
		hexadecimalCode : "x021D0"
	}, {
		names : ["uArr", "Uparrow", "DoubleUpArrow"],
		decimalCode : 8657,
		hexadecimalCode : "x021D1"
	}, {
		names : ["rArr", "Rightarrow", "Implies", "DoubleRightArrow"],
		decimalCode : 8658,
		hexadecimalCode : "x021D2"
	}, {
		names : ["dArr", "Downarrow", "DoubleDownArrow"],
		decimalCode : 8659,
		hexadecimalCode : "x021D3"
	}, {
		names : ["hArr", "Leftrightarrow", "DoubleLeftRightArrow", "iff"],
		decimalCode : 8660,
		hexadecimalCode : "x021D4"
	}, {
		names : ["vArr", "Updownarrow", "DoubleUpDownArrow"],
		decimalCode : 8661,
		hexadecimalCode : "x021D5"
	}, {
		names : ["nwArr"],
		decimalCode : 8662,
		hexadecimalCode : "x021D6"
	}, {
		names : ["neArr"],
		decimalCode : 8663,
		hexadecimalCode : "x021D7"
	}, {
		names : ["seArr"],
		decimalCode : 8664,
		hexadecimalCode : "x021D8"
	}, {
		names : ["swArr"],
		decimalCode : 8665,
		hexadecimalCode : "x021D9"
	}, {
		names : ["lAarr", "Lleftarrow"],
		decimalCode : 8666,
		hexadecimalCode : "x021DA"
	}, {
		names : ["rAarr", "Rrightarrow"],
		decimalCode : 8667,
		hexadecimalCode : "x021DB"
	}, {
		names : ["zigrarr"],
		decimalCode : 8669,
		hexadecimalCode : "x021DD"
	}, {
		names : ["larrb", "LeftArrowBar"],
		decimalCode : 8676,
		hexadecimalCode : "x021E4"
	}, {
		names : ["rarrb", "RightArrowBar"],
		decimalCode : 8677,
		hexadecimalCode : "x021E5"
	}, {
		names : ["duarr", "DownArrowUpArrow"],
		decimalCode : 8693,
		hexadecimalCode : "x021F5"
	}, {
		names : ["loarr"],
		decimalCode : 8701,
		hexadecimalCode : "x021FD"
	}, {
		names : ["roarr"],
		decimalCode : 8702,
		hexadecimalCode : "x021FE"
	}, {
		names : ["hoarr"],
		decimalCode : 8703,
		hexadecimalCode : "x021FF"
	}, {
		names : ["forall", "ForAll"],
		decimalCode : 8704,
		hexadecimalCode : "x02200"
	}, {
		names : ["comp", "complement"],
		decimalCode : 8705,
		hexadecimalCode : "x02201"
	}, {
		names : ["part", "PartialD"],
		decimalCode : 8706,
		hexadecimalCode : "x02202"
	}, {
		names : ["exist", "Exists"],
		decimalCode : 8707,
		hexadecimalCode : "x02203"
	}, {
		names : ["nexist", "NotExists", "nexists"],
		decimalCode : 8708,
		hexadecimalCode : "x02204"
	}, {
		names : ["empty", "emptyset", "emptyv", "varnothing"],
		decimalCode : 8709,
		hexadecimalCode : "x02205"
	}, {
		names : ["nabla", "Del"],
		decimalCode : 8711,
		hexadecimalCode : "x02207"
	}, {
		names : ["isin", "isinv", "Element", "in"],
		decimalCode : 8712,
		hexadecimalCode : "x02208"
	}, {
		names : ["notin", "NotElement", "notinva"],
		decimalCode : 8713,
		hexadecimalCode : "x02209"
	}, {
		names : ["niv", "ReverseElement", "ni", "SuchThat"],
		decimalCode : 8715,
		hexadecimalCode : "x0220B"
	}, {
		names : ["notni", "notniva", "NotReverseElement"],
		decimalCode : 8716,
		hexadecimalCode : "x0220C"
	}, {
		names : ["prod", "Product"],
		decimalCode : 8719,
		hexadecimalCode : "x0220F"
	}, {
		names : ["coprod", "Coproduct"],
		decimalCode : 8720,
		hexadecimalCode : "x02210"
	}, {
		names : ["sum", "Sum"],
		decimalCode : 8721,
		hexadecimalCode : "x02211"
	}, {
		names : ["minus"],
		decimalCode : 8722,
		hexadecimalCode : "x02212"
	}, {
		names : ["mnplus", "mp", "MinusPlus"],
		decimalCode : 8723,
		hexadecimalCode : "x02213"
	}, {
		names : ["plusdo", "dotplus"],
		decimalCode : 8724,
		hexadecimalCode : "x02214"
	}, {
		names : ["setmn", "setminus", "Backslash", "ssetmn", "smallsetminus"],
		decimalCode : 8726,
		hexadecimalCode : "x02216"
	}, {
		names : ["lowast"],
		decimalCode : 8727,
		hexadecimalCode : "x02217"
	}, {
		names : ["compfn", "SmallCircle"],
		decimalCode : 8728,
		hexadecimalCode : "x02218"
	}, {
		names : ["radic", "Sqrt"],
		decimalCode : 8730,
		hexadecimalCode : "x0221A"
	}, {
		names : ["prop", "propto", "Proportional", "vprop", "varpropto"],
		decimalCode : 8733,
		hexadecimalCode : "x0221D"
	}, {
		names : ["infin"],
		decimalCode : 8734,
		hexadecimalCode : "x0221E"
	}, {
		names : ["angrt"],
		decimalCode : 8735,
		hexadecimalCode : "x0221F"
	}, {
		names : ["ang", "angle"],
		decimalCode : 8736,
		hexadecimalCode : "x02220"
	}, {
		names : ["angmsd", "measuredangle"],
		decimalCode : 8737,
		hexadecimalCode : "x02221"
	}, {
		names : ["angsph"],
		decimalCode : 8738,
		hexadecimalCode : "x02222"
	}, {
		names : ["mid", "VerticalBar", "smid", "shortmid"],
		decimalCode : 8739,
		hexadecimalCode : "x02223"
	}, {
		names : ["nmid", "NotVerticalBar", "nsmid", "nshortmid"],
		decimalCode : 8740,
		hexadecimalCode : "x02224"
	}, {
		names : ["par", "parallel", "DoubleVerticalBar", "spar", "shortparallel"],
		decimalCode : 8741,
		hexadecimalCode : "x02225"
	}, {
		names : ["npar", "nparallel", "NotDoubleVerticalBar", "nspar", "nshortparallel"],
		decimalCode : 8742,
		hexadecimalCode : "x02226"
	}, {
		names : ["and", "wedge"],
		decimalCode : 8743,
		hexadecimalCode : "x02227"
	}, {
		names : ["or", "vee"],
		decimalCode : 8744,
		hexadecimalCode : "x02228"
	}, {
		names : ["cap"],
		decimalCode : 8745,
		hexadecimalCode : "x02229"
	}, {
		names : ["cup"],
		decimalCode : 8746,
		hexadecimalCode : "x0222A"
	}, {
		names : ["int", "Integral"],
		decimalCode : 8747,
		hexadecimalCode : "x0222B"
	}, {
		names : ["Int"],
		decimalCode : 8748,
		hexadecimalCode : "x0222C"
	}, {
		names : ["tint", "iiint"],
		decimalCode : 8749,
		hexadecimalCode : "x0222D"
	}, {
		names : ["conint", "oint", "ContourIntegral"],
		decimalCode : 8750,
		hexadecimalCode : "x0222E"
	}, {
		names : ["Conint", "DoubleContourIntegral"],
		decimalCode : 8751,
		hexadecimalCode : "x0222F"
	}, {
		names : ["Cconint"],
		decimalCode : 8752,
		hexadecimalCode : "x02230"
	}, {
		names : ["cwint"],
		decimalCode : 8753,
		hexadecimalCode : "x02231"
	}, {
		names : ["cwconint", "ClockwiseContourIntegral"],
		decimalCode : 8754,
		hexadecimalCode : "x02232"
	}, {
		names : ["awconint", "CounterClockwiseContourIntegral"],
		decimalCode : 8755,
		hexadecimalCode : "x02233"
	}, {
		names : ["there4", "therefore", "Therefore"],
		decimalCode : 8756,
		hexadecimalCode : "x02234"
	}, {
		names : ["becaus", "because", "Because"],
		decimalCode : 8757,
		hexadecimalCode : "x02235"
	}, {
		names : ["ratio"],
		decimalCode : 8758,
		hexadecimalCode : "x02236"
	}, {
		names : ["Colon", "Proportion"],
		decimalCode : 8759,
		hexadecimalCode : "x02237"
	}, {
		names : ["minusd", "dotminus"],
		decimalCode : 8760,
		hexadecimalCode : "x02238"
	}, {
		names : ["mDDot"],
		decimalCode : 8762,
		hexadecimalCode : "x0223A"
	}, {
		names : ["homtht"],
		decimalCode : 8763,
		hexadecimalCode : "x0223B"
	}, {
		names : ["sim", "Tilde", "thksim", "thicksim"],
		decimalCode : 8764,
		hexadecimalCode : "x0223C"
	}, {
		names : ["bsim", "backsim"],
		decimalCode : 8765,
		hexadecimalCode : "x0223D"
	}, {
		names : ["ac", "mstpos"],
		decimalCode : 8766,
		hexadecimalCode : "x0223E"
	}, {
		names : ["acd"],
		decimalCode : 8767,
		hexadecimalCode : "x0223F"
	}, {
		names : ["wreath", "VerticalTilde", "wr"],
		decimalCode : 8768,
		hexadecimalCode : "x02240"
	}, {
		names : ["nsim", "NotTilde"],
		decimalCode : 8769,
		hexadecimalCode : "x02241"
	}, {
		names : ["esim", "EqualTilde", "eqsim"],
		decimalCode : 8770,
		hexadecimalCode : "x02242"
	}, {
		names : ["sime", "TildeEqual", "simeq"],
		decimalCode : 8771,
		hexadecimalCode : "x02243"
	}, {
		names : ["nsime", "nsimeq", "NotTildeEqual"],
		decimalCode : 8772,
		hexadecimalCode : "x02244"
	}, {
		names : ["cong", "TildeFullEqual"],
		decimalCode : 8773,
		hexadecimalCode : "x02245"
	}, {
		names : ["simne"],
		decimalCode : 8774,
		hexadecimalCode : "x02246"
	}, {
		names : ["ncong", "NotTildeFullEqual"],
		decimalCode : 8775,
		hexadecimalCode : "x02247"
	}, {
		names : ["asymp", "ap", "TildeTilde", "approx", "thkap", "thickapprox"],
		decimalCode : 8776,
		hexadecimalCode : "x02248"
	}, {
		names : ["nap", "NotTildeTilde", "napprox"],
		decimalCode : 8777,
		hexadecimalCode : "x02249"
	}, {
		names : ["ape", "approxeq"],
		decimalCode : 8778,
		hexadecimalCode : "x0224A"
	}, {
		names : ["apid"],
		decimalCode : 8779,
		hexadecimalCode : "x0224B"
	}, {
		names : ["bcong", "backcong"],
		decimalCode : 8780,
		hexadecimalCode : "x0224C"
	}, {
		names : ["asympeq", "CupCap"],
		decimalCode : 8781,
		hexadecimalCode : "x0224D"
	}, {
		names : ["bump", "HumpDownHump", "Bumpeq"],
		decimalCode : 8782,
		hexadecimalCode : "x0224E"
	}, {
		names : ["bumpe", "HumpEqual", "bumpeq"],
		decimalCode : 8783,
		hexadecimalCode : "x0224F"
	}, {
		names : ["esdot", "DotEqual", "doteq"],
		decimalCode : 8784,
		hexadecimalCode : "x02250"
	}, {
		names : ["eDot", "doteqdot"],
		decimalCode : 8785,
		hexadecimalCode : "x02251"
	}, {
		names : ["efDot", "fallingdotseq"],
		decimalCode : 8786,
		hexadecimalCode : "x02252"
	}, {
		names : ["erDot", "risingdotseq"],
		decimalCode : 8787,
		hexadecimalCode : "x02253"
	}, {
		names : ["colone", "coloneq", "Assign"],
		decimalCode : 8788,
		hexadecimalCode : "x02254"
	}, {
		names : ["ecolon", "eqcolon"],
		decimalCode : 8789,
		hexadecimalCode : "x02255"
	}, {
		names : ["ecir", "eqcirc"],
		decimalCode : 8790,
		hexadecimalCode : "x02256"
	}, {
		names : ["cire", "circeq"],
		decimalCode : 8791,
		hexadecimalCode : "x02257"
	}, {
		names : ["wedgeq"],
		decimalCode : 8793,
		hexadecimalCode : "x02259"
	}, {
		names : ["veeeq"],
		decimalCode : 8794,
		hexadecimalCode : "x0225A"
	}, {
		names : ["trie", "triangleq"],
		decimalCode : 8796,
		hexadecimalCode : "x0225C"
	}, {
		names : ["equest", "questeq"],
		decimalCode : 8799,
		hexadecimalCode : "x0225F"
	}, {
		names : ["ne", "NotEqual"],
		decimalCode : 8800,
		hexadecimalCode : "x02260"
	}, {
		names : ["equiv", "Congruent"],
		decimalCode : 8801,
		hexadecimalCode : "x02261"
	}, {
		names : ["nequiv", "NotCongruent"],
		decimalCode : 8802,
		hexadecimalCode : "x02262"
	}, {
		names : ["le", "leq"],
		decimalCode : 8804,
		hexadecimalCode : "x02264"
	}, {
		names : ["ge", "GreaterEqual", "geq"],
		decimalCode : 8805,
		hexadecimalCode : "x02265"
	}, {
		names : ["lE", "LessFullEqual", "leqq"],
		decimalCode : 8806,
		hexadecimalCode : "x02266"
	}, {
		names : ["gE", "GreaterFullEqual", "geqq"],
		decimalCode : 8807,
		hexadecimalCode : "x02267"
	}, {
		names : ["lnE", "lneqq"],
		decimalCode : 8808,
		hexadecimalCode : "x02268"
	}, {
		names : ["gnE", "gneqq"],
		decimalCode : 8809,
		hexadecimalCode : "x02269"
	}, {
		names : ["Lt", "NestedLessLess", "ll"],
		decimalCode : 8810,
		hexadecimalCode : "x0226A"
	}, {
		names : ["Gt", "NestedGreaterGreater", "gg"],
		decimalCode : 8811,
		hexadecimalCode : "x0226B"
	}, {
		names : ["twixt", "between"],
		decimalCode : 8812,
		hexadecimalCode : "x0226C"
	}, {
		names : ["NotCupCap"],
		decimalCode : 8813,
		hexadecimalCode : "x0226D"
	}, {
		names : ["nlt", "NotLess", "nless"],
		decimalCode : 8814,
		hexadecimalCode : "x0226E"
	}, {
		names : ["ngt", "NotGreater", "ngtr"],
		decimalCode : 8815,
		hexadecimalCode : "x0226F"
	}, {
		names : ["nle", "NotLessEqual", "nleq"],
		decimalCode : 8816,
		hexadecimalCode : "x02270"
	}, {
		names : ["nge", "NotGreaterEqual", "ngeq"],
		decimalCode : 8817,
		hexadecimalCode : "x02271"
	}, {
		names : ["lsim", "LessTilde", "lesssim"],
		decimalCode : 8818,
		hexadecimalCode : "x02272"
	}, {
		names : ["gsim", "gtrsim", "GreaterTilde"],
		decimalCode : 8819,
		hexadecimalCode : "x02273"
	}, {
		names : ["nlsim", "NotLessTilde"],
		decimalCode : 8820,
		hexadecimalCode : "x02274"
	}, {
		names : ["ngsim", "NotGreaterTilde"],
		decimalCode : 8821,
		hexadecimalCode : "x02275"
	}, {
		names : ["lg", "lessgtr", "LessGreater"],
		decimalCode : 8822,
		hexadecimalCode : "x02276"
	}, {
		names : ["gl", "gtrless", "GreaterLess"],
		decimalCode : 8823,
		hexadecimalCode : "x02277"
	}, {
		names : ["ntlg", "NotLessGreater"],
		decimalCode : 8824,
		hexadecimalCode : "x02278"
	}, {
		names : ["ntgl", "NotGreaterLess"],
		decimalCode : 8825,
		hexadecimalCode : "x02279"
	}, {
		names : ["pr", "Precedes", "prec"],
		decimalCode : 8826,
		hexadecimalCode : "x0227A"
	}, {
		names : ["sc", "Succeeds", "succ"],
		decimalCode : 8827,
		hexadecimalCode : "x0227B"
	}, {
		names : ["prcue", "PrecedesSlantEqual", "preccurlyeq"],
		decimalCode : 8828,
		hexadecimalCode : "x0227C"
	}, {
		names : ["sccue", "SucceedsSlantEqual", "succcurlyeq"],
		decimalCode : 8829,
		hexadecimalCode : "x0227D"
	}, {
		names : ["prsim", "precsim", "PrecedesTilde"],
		decimalCode : 8830,
		hexadecimalCode : "x0227E"
	}, {
		names : ["scsim", "succsim", "SucceedsTilde"],
		decimalCode : 8831,
		hexadecimalCode : "x0227F"
	}, {
		names : ["npr", "nprec", "NotPrecedes"],
		decimalCode : 8832,
		hexadecimalCode : "x02280"
	}, {
		names : ["nsc", "nsucc", "NotSucceeds"],
		decimalCode : 8833,
		hexadecimalCode : "x02281"
	}, {
		names : ["sub", "subset"],
		decimalCode : 8834,
		hexadecimalCode : "x02282"
	}, {
		names : ["sup", "supset", "Superset"],
		decimalCode : 8835,
		hexadecimalCode : "x02283"
	}, {
		names : ["nsub"],
		decimalCode : 8836,
		hexadecimalCode : "x02284"
	}, {
		names : ["nsup"],
		decimalCode : 8837,
		hexadecimalCode : "x02285"
	}, {
		names : ["sube", "SubsetEqual", "subseteq"],
		decimalCode : 8838,
		hexadecimalCode : "x02286"
	}, {
		names : ["supe", "supseteq", "SupersetEqual"],
		decimalCode : 8839,
		hexadecimalCode : "x02287"
	}, {
		names : ["nsube", "nsubseteq", "NotSubsetEqual"],
		decimalCode : 8840,
		hexadecimalCode : "x02288"
	}, {
		names : ["nsupe", "nsupseteq", "NotSupersetEqual"],
		decimalCode : 8841,
		hexadecimalCode : "x02289"
	}, {
		names : ["subne", "subsetneq"],
		decimalCode : 8842,
		hexadecimalCode : "x0228A"
	}, {
		names : ["supne", "supsetneq"],
		decimalCode : 8843,
		hexadecimalCode : "x0228B"
	}, {
		names : ["cupdot"],
		decimalCode : 8845,
		hexadecimalCode : "x0228D"
	}, {
		names : ["uplus", "UnionPlus"],
		decimalCode : 8846,
		hexadecimalCode : "x0228E"
	}, {
		names : ["sqsub", "SquareSubset", "sqsubset"],
		decimalCode : 8847,
		hexadecimalCode : "x0228F"
	}, {
		names : ["sqsup", "SquareSuperset", "sqsupset"],
		decimalCode : 8848,
		hexadecimalCode : "x02290"
	}, {
		names : ["sqsube", "SquareSubsetEqual", "sqsubseteq"],
		decimalCode : 8849,
		hexadecimalCode : "x02291"
	}, {
		names : ["sqsupe", "SquareSupersetEqual", "sqsupseteq"],
		decimalCode : 8850,
		hexadecimalCode : "x02292"
	}, {
		names : ["sqcap", "SquareIntersection"],
		decimalCode : 8851,
		hexadecimalCode : "x02293"
	}, {
		names : ["sqcup", "SquareUnion"],
		decimalCode : 8852,
		hexadecimalCode : "x02294"
	}, {
		names : ["oplus", "CirclePlus"],
		decimalCode : 8853,
		hexadecimalCode : "x02295"
	}, {
		names : ["ominus", "CircleMinus"],
		decimalCode : 8854,
		hexadecimalCode : "x02296"
	}, {
		names : ["otimes", "CircleTimes"],
		decimalCode : 8855,
		hexadecimalCode : "x02297"
	}, {
		names : ["osol"],
		decimalCode : 8856,
		hexadecimalCode : "x02298"
	}, {
		names : ["odot", "CircleDot"],
		decimalCode : 8857,
		hexadecimalCode : "x02299"
	}, {
		names : ["ocir", "circledcirc"],
		decimalCode : 8858,
		hexadecimalCode : "x0229A"
	}, {
		names : ["oast", "circledast"],
		decimalCode : 8859,
		hexadecimalCode : "x0229B"
	}, {
		names : ["odash", "circleddash"],
		decimalCode : 8861,
		hexadecimalCode : "x0229D"
	}, {
		names : ["plusb", "boxplus"],
		decimalCode : 8862,
		hexadecimalCode : "x0229E"
	}, {
		names : ["minusb", "boxminus"],
		decimalCode : 8863,
		hexadecimalCode : "x0229F"
	}, {
		names : ["timesb", "boxtimes"],
		decimalCode : 8864,
		hexadecimalCode : "x022A0"
	}, {
		names : ["sdotb", "dotsquare"],
		decimalCode : 8865,
		hexadecimalCode : "x022A1"
	}, {
		names : ["vdash", "RightTee"],
		decimalCode : 8866,
		hexadecimalCode : "x022A2"
	}, {
		names : ["dashv", "LeftTee"],
		decimalCode : 8867,
		hexadecimalCode : "x022A3"
	}, {
		names : ["top", "DownTee"],
		decimalCode : 8868,
		hexadecimalCode : "x022A4"
	}, {
		names : ["bottom", "bot", "perp", "UpTee"],
		decimalCode : 8869,
		hexadecimalCode : "x022A5"
	}, {
		names : ["models"],
		decimalCode : 8871,
		hexadecimalCode : "x022A7"
	}, {
		names : ["vDash", "DoubleRightTee"],
		decimalCode : 8872,
		hexadecimalCode : "x022A8"
	}, {
		names : ["Vdash"],
		decimalCode : 8873,
		hexadecimalCode : "x022A9"
	}, {
		names : ["Vvdash"],
		decimalCode : 8874,
		hexadecimalCode : "x022AA"
	}, {
		names : ["VDash"],
		decimalCode : 8875,
		hexadecimalCode : "x022AB"
	}, {
		names : ["nvdash"],
		decimalCode : 8876,
		hexadecimalCode : "x022AC"
	}, {
		names : ["nvDash"],
		decimalCode : 8877,
		hexadecimalCode : "x022AD"
	}, {
		names : ["nVdash"],
		decimalCode : 8878,
		hexadecimalCode : "x022AE"
	}, {
		names : ["nVDash"],
		decimalCode : 8879,
		hexadecimalCode : "x022AF"
	}, {
		names : ["prurel"],
		decimalCode : 8880,
		hexadecimalCode : "x022B0"
	}, {
		names : ["vltri", "vartriangleleft", "LeftTriangle"],
		decimalCode : 8882,
		hexadecimalCode : "x022B2"
	}, {
		names : ["vrtri", "vartriangleright", "RightTriangle"],
		decimalCode : 8883,
		hexadecimalCode : "x022B3"
	}, {
		names : ["ltrie", "trianglelefteq", "LeftTriangleEqual"],
		decimalCode : 8884,
		hexadecimalCode : "x022B4"
	}, {
		names : ["rtrie", "trianglerighteq", "RightTriangleEqual"],
		decimalCode : 8885,
		hexadecimalCode : "x022B5"
	}, {
		names : ["origof"],
		decimalCode : 8886,
		hexadecimalCode : "x022B6"
	}, {
		names : ["imof"],
		decimalCode : 8887,
		hexadecimalCode : "x022B7"
	}, {
		names : ["mumap", "multimap"],
		decimalCode : 8888,
		hexadecimalCode : "x022B8"
	}, {
		names : ["hercon"],
		decimalCode : 8889,
		hexadecimalCode : "x022B9"
	}, {
		names : ["intcal", "intercal"],
		decimalCode : 8890,
		hexadecimalCode : "x022BA"
	}, {
		names : ["veebar"],
		decimalCode : 8891,
		hexadecimalCode : "x022BB"
	}, {
		names : ["barvee"],
		decimalCode : 8893,
		hexadecimalCode : "x022BD"
	}, {
		names : ["angrtvb"],
		decimalCode : 8894,
		hexadecimalCode : "x022BE"
	}, {
		names : ["lrtri"],
		decimalCode : 8895,
		hexadecimalCode : "x022BF"
	}, {
		names : ["xwedge", "Wedge", "bigwedge"],
		decimalCode : 8896,
		hexadecimalCode : "x022C0"
	}, {
		names : ["xvee", "Vee", "bigvee"],
		decimalCode : 8897,
		hexadecimalCode : "x022C1"
	}, {
		names : ["xcap", "Intersection", "bigcap"],
		decimalCode : 8898,
		hexadecimalCode : "x022C2"
	}, {
		names : ["xcup", "Union", "bigcup"],
		decimalCode : 8899,
		hexadecimalCode : "x022C3"
	}, {
		names : ["diam", "diamond", "Diamond"],
		decimalCode : 8900,
		hexadecimalCode : "x022C4"
	}, {
		names : ["sdot"],
		decimalCode : 8901,
		hexadecimalCode : "x022C5"
	}, {
		names : ["sstarf", "Star"],
		decimalCode : 8902,
		hexadecimalCode : "x022C6"
	}, {
		names : ["divonx", "divideontimes"],
		decimalCode : 8903,
		hexadecimalCode : "x022C7"
	}, {
		names : ["bowtie"],
		decimalCode : 8904,
		hexadecimalCode : "x022C8"
	}, {
		names : ["ltimes"],
		decimalCode : 8905,
		hexadecimalCode : "x022C9"
	}, {
		names : ["rtimes"],
		decimalCode : 8906,
		hexadecimalCode : "x022CA"
	}, {
		names : ["lthree", "leftthreetimes"],
		decimalCode : 8907,
		hexadecimalCode : "x022CB"
	}, {
		names : ["rthree", "rightthreetimes"],
		decimalCode : 8908,
		hexadecimalCode : "x022CC"
	}, {
		names : ["bsime", "backsimeq"],
		decimalCode : 8909,
		hexadecimalCode : "x022CD"
	}, {
		names : ["cuvee", "curlyvee"],
		decimalCode : 8910,
		hexadecimalCode : "x022CE"
	}, {
		names : ["cuwed", "curlywedge"],
		decimalCode : 8911,
		hexadecimalCode : "x022CF"
	}, {
		names : ["Sub", "Subset"],
		decimalCode : 8912,
		hexadecimalCode : "x022D0"
	}, {
		names : ["Sup", "Supset"],
		decimalCode : 8913,
		hexadecimalCode : "x022D1"
	}, {
		names : ["Cap"],
		decimalCode : 8914,
		hexadecimalCode : "x022D2"
	}, {
		names : ["Cup"],
		decimalCode : 8915,
		hexadecimalCode : "x022D3"
	}, {
		names : ["fork", "pitchfork"],
		decimalCode : 8916,
		hexadecimalCode : "x022D4"
	}, {
		names : ["epar"],
		decimalCode : 8917,
		hexadecimalCode : "x022D5"
	}, {
		names : ["ltdot", "lessdot"],
		decimalCode : 8918,
		hexadecimalCode : "x022D6"
	}, {
		names : ["gtdot", "gtrdot"],
		decimalCode : 8919,
		hexadecimalCode : "x022D7"
	}, {
		names : ["Ll"],
		decimalCode : 8920,
		hexadecimalCode : "x022D8"
	}, {
		names : ["Gg", "ggg"],
		decimalCode : 8921,
		hexadecimalCode : "x022D9"
	}, {
		names : ["leg", "LessEqualGreater", "lesseqgtr"],
		decimalCode : 8922,
		hexadecimalCode : "x022DA"
	}, {
		names : ["gel", "gtreqless", "GreaterEqualLess"],
		decimalCode : 8923,
		hexadecimalCode : "x022DB"
	}, {
		names : ["cuepr", "curlyeqprec"],
		decimalCode : 8926,
		hexadecimalCode : "x022DE"
	}, {
		names : ["cuesc", "curlyeqsucc"],
		decimalCode : 8927,
		hexadecimalCode : "x022DF"
	}, {
		names : ["nprcue", "NotPrecedesSlantEqual"],
		decimalCode : 8928,
		hexadecimalCode : "x022E0"
	}, {
		names : ["nsccue", "NotSucceedsSlantEqual"],
		decimalCode : 8929,
		hexadecimalCode : "x022E1"
	}, {
		names : ["nsqsube", "NotSquareSubsetEqual"],
		decimalCode : 8930,
		hexadecimalCode : "x022E2"
	}, {
		names : ["nsqsupe", "NotSquareSupersetEqual"],
		decimalCode : 8931,
		hexadecimalCode : "x022E3"
	}, {
		names : ["lnsim"],
		decimalCode : 8934,
		hexadecimalCode : "x022E6"
	}, {
		names : ["gnsim"],
		decimalCode : 8935,
		hexadecimalCode : "x022E7"
	}, {
		names : ["prnsim", "precnsim"],
		decimalCode : 8936,
		hexadecimalCode : "x022E8"
	}, {
		names : ["scnsim", "succnsim"],
		decimalCode : 8937,
		hexadecimalCode : "x022E9"
	}, {
		names : ["nltri", "ntriangleleft", "NotLeftTriangle"],
		decimalCode : 8938,
		hexadecimalCode : "x022EA"
	}, {
		names : ["nrtri", "ntriangleright", "NotRightTriangle"],
		decimalCode : 8939,
		hexadecimalCode : "x022EB"
	}, {
		names : ["nltrie", "ntrianglelefteq", "NotLeftTriangleEqual"],
		decimalCode : 8940,
		hexadecimalCode : "x022EC"
	}, {
		names : ["nrtrie", "ntrianglerighteq", "NotRightTriangleEqual"],
		decimalCode : 8941,
		hexadecimalCode : "x022ED"
	}, {
		names : ["vellip"],
		decimalCode : 8942,
		hexadecimalCode : "x022EE"
	}, {
		names : ["ctdot"],
		decimalCode : 8943,
		hexadecimalCode : "x022EF"
	}, {
		names : ["utdot"],
		decimalCode : 8944,
		hexadecimalCode : "x022F0"
	}, {
		names : ["dtdot"],
		decimalCode : 8945,
		hexadecimalCode : "x022F1"
	}, {
		names : ["disin"],
		decimalCode : 8946,
		hexadecimalCode : "x022F2"
	}, {
		names : ["isinsv"],
		decimalCode : 8947,
		hexadecimalCode : "x022F3"
	}, {
		names : ["isins"],
		decimalCode : 8948,
		hexadecimalCode : "x022F4"
	}, {
		names : ["isindot"],
		decimalCode : 8949,
		hexadecimalCode : "x022F5"
	}, {
		names : ["notinvc"],
		decimalCode : 8950,
		hexadecimalCode : "x022F6"
	}, {
		names : ["notinvb"],
		decimalCode : 8951,
		hexadecimalCode : "x022F7"
	}, {
		names : ["isinE"],
		decimalCode : 8953,
		hexadecimalCode : "x022F9"
	}, {
		names : ["nisd"],
		decimalCode : 8954,
		hexadecimalCode : "x022FA"
	}, {
		names : ["xnis"],
		decimalCode : 8955,
		hexadecimalCode : "x022FB"
	}, {
		names : ["nis"],
		decimalCode : 8956,
		hexadecimalCode : "x022FC"
	}, {
		names : ["notnivc"],
		decimalCode : 8957,
		hexadecimalCode : "x022FD"
	}, {
		names : ["notnivb"],
		decimalCode : 8958,
		hexadecimalCode : "x022FE"
	}, {
		names : ["barwed", "barwedge"],
		decimalCode : 8965,
		hexadecimalCode : "x02305"
	}, {
		names : ["Barwed", "doublebarwedge"],
		decimalCode : 8966,
		hexadecimalCode : "x02306"
	}, {
		names : ["lceil", "LeftCeiling"],
		decimalCode : 8968,
		hexadecimalCode : "x02308"
	}, {
		names : ["rceil", "RightCeiling"],
		decimalCode : 8969,
		hexadecimalCode : "x02309"
	}, {
		names : ["lfloor", "LeftFloor"],
		decimalCode : 8970,
		hexadecimalCode : "x0230A"
	}, {
		names : ["rfloor", "RightFloor"],
		decimalCode : 8971,
		hexadecimalCode : "x0230B"
	}, {
		names : ["drcrop"],
		decimalCode : 8972,
		hexadecimalCode : "x0230C"
	}, {
		names : ["dlcrop"],
		decimalCode : 8973,
		hexadecimalCode : "x0230D"
	}, {
		names : ["urcrop"],
		decimalCode : 8974,
		hexadecimalCode : "x0230E"
	}, {
		names : ["ulcrop"],
		decimalCode : 8975,
		hexadecimalCode : "x0230F"
	}, {
		names : ["bnot"],
		decimalCode : 8976,
		hexadecimalCode : "x02310"
	}, {
		names : ["profline"],
		decimalCode : 8978,
		hexadecimalCode : "x02312"
	}, {
		names : ["profsurf"],
		decimalCode : 8979,
		hexadecimalCode : "x02313"
	}, {
		names : ["telrec"],
		decimalCode : 8981,
		hexadecimalCode : "x02315"
	}, {
		names : ["target"],
		decimalCode : 8982,
		hexadecimalCode : "x02316"
	}, {
		names : ["ulcorn", "ulcorner"],
		decimalCode : 8988,
		hexadecimalCode : "x0231C"
	}, {
		names : ["urcorn", "urcorner"],
		decimalCode : 8989,
		hexadecimalCode : "x0231D"
	}, {
		names : ["dlcorn", "llcorner"],
		decimalCode : 8990,
		hexadecimalCode : "x0231E"
	}, {
		names : ["drcorn", "lrcorner"],
		decimalCode : 8991,
		hexadecimalCode : "x0231F"
	}, {
		names : ["frown", "sfrown"],
		decimalCode : 8994,
		hexadecimalCode : "x02322"
	}, {
		names : ["smile", "ssmile"],
		decimalCode : 8995,
		hexadecimalCode : "x02323"
	}, {
		names : ["cylcty"],
		decimalCode : 9005,
		hexadecimalCode : "x0232D"
	}, {
		names : ["profalar"],
		decimalCode : 9006,
		hexadecimalCode : "x0232E"
	}, {
		names : ["topbot"],
		decimalCode : 9014,
		hexadecimalCode : "x02336"
	}, {
		names : ["ovbar"],
		decimalCode : 9021,
		hexadecimalCode : "x0233D"
	}, {
		names : ["solbar"],
		decimalCode : 9023,
		hexadecimalCode : "x0233F"
	}, {
		names : ["angzarr"],
		decimalCode : 9084,
		hexadecimalCode : "x0237C"
	}, {
		names : ["lmoust", "lmoustache"],
		decimalCode : 9136,
		hexadecimalCode : "x023B0"
	}, {
		names : ["rmoust", "rmoustache"],
		decimalCode : 9137,
		hexadecimalCode : "x023B1"
	}, {
		names : ["tbrk", "OverBracket"],
		decimalCode : 9140,
		hexadecimalCode : "x023B4"
	}, {
		names : ["bbrk", "UnderBracket"],
		decimalCode : 9141,
		hexadecimalCode : "x023B5"
	}, {
		names : ["bbrktbrk"],
		decimalCode : 9142,
		hexadecimalCode : "x023B6"
	}, {
		names : ["OverParenthesis"],
		decimalCode : 9180,
		hexadecimalCode : "x023DC"
	}, {
		names : ["UnderParenthesis"],
		decimalCode : 9181,
		hexadecimalCode : "x023DD"
	}, {
		names : ["OverBrace"],
		decimalCode : 9182,
		hexadecimalCode : "x023DE"
	}, {
		names : ["UnderBrace"],
		decimalCode : 9183,
		hexadecimalCode : "x023DF"
	}, {
		names : ["trpezium"],
		decimalCode : 9186,
		hexadecimalCode : "x023E2"
	}, {
		names : ["elinters"],
		decimalCode : 9191,
		hexadecimalCode : "x023E7"
	}, {
		names : ["blank"],
		decimalCode : 9251,
		hexadecimalCode : "x02423"
	}, {
		names : ["oS", "circledS"],
		decimalCode : 9416,
		hexadecimalCode : "x024C8"
	}, {
		names : ["boxh", "HorizontalLine"],
		decimalCode : 9472,
		hexadecimalCode : "x02500"
	}, {
		names : ["boxv"],
		decimalCode : 9474,
		hexadecimalCode : "x02502"
	}, {
		names : ["boxdr"],
		decimalCode : 9484,
		hexadecimalCode : "x0250C"
	}, {
		names : ["boxdl"],
		decimalCode : 9488,
		hexadecimalCode : "x02510"
	}, {
		names : ["boxur"],
		decimalCode : 9492,
		hexadecimalCode : "x02514"
	}, {
		names : ["boxul"],
		decimalCode : 9496,
		hexadecimalCode : "x02518"
	}, {
		names : ["boxvr"],
		decimalCode : 9500,
		hexadecimalCode : "x0251C"
	}, {
		names : ["boxvl"],
		decimalCode : 9508,
		hexadecimalCode : "x02524"
	}, {
		names : ["boxhd"],
		decimalCode : 9516,
		hexadecimalCode : "x0252C"
	}, {
		names : ["boxhu"],
		decimalCode : 9524,
		hexadecimalCode : "x02534"
	}, {
		names : ["boxvh"],
		decimalCode : 9532,
		hexadecimalCode : "x0253C"
	}, {
		names : ["boxH"],
		decimalCode : 9552,
		hexadecimalCode : "x02550"
	}, {
		names : ["boxV"],
		decimalCode : 9553,
		hexadecimalCode : "x02551"
	}, {
		names : ["boxdR"],
		decimalCode : 9554,
		hexadecimalCode : "x02552"
	}, {
		names : ["boxDr"],
		decimalCode : 9555,
		hexadecimalCode : "x02553"
	}, {
		names : ["boxDR"],
		decimalCode : 9556,
		hexadecimalCode : "x02554"
	}, {
		names : ["boxdL"],
		decimalCode : 9557,
		hexadecimalCode : "x02555"
	}, {
		names : ["boxDl"],
		decimalCode : 9558,
		hexadecimalCode : "x02556"
	}, {
		names : ["boxDL"],
		decimalCode : 9559,
		hexadecimalCode : "x02557"
	}, {
		names : ["boxuR"],
		decimalCode : 9560,
		hexadecimalCode : "x02558"
	}, {
		names : ["boxUr"],
		decimalCode : 9561,
		hexadecimalCode : "x02559"
	}, {
		names : ["boxUR"],
		decimalCode : 9562,
		hexadecimalCode : "x0255A"
	}, {
		names : ["boxuL"],
		decimalCode : 9563,
		hexadecimalCode : "x0255B"
	}, {
		names : ["boxUl"],
		decimalCode : 9564,
		hexadecimalCode : "x0255C"
	}, {
		names : ["boxUL"],
		decimalCode : 9565,
		hexadecimalCode : "x0255D"
	}, {
		names : ["boxvR"],
		decimalCode : 9566,
		hexadecimalCode : "x0255E"
	}, {
		names : ["boxVr"],
		decimalCode : 9567,
		hexadecimalCode : "x0255F"
	}, {
		names : ["boxVR"],
		decimalCode : 9568,
		hexadecimalCode : "x02560"
	}, {
		names : ["boxvL"],
		decimalCode : 9569,
		hexadecimalCode : "x02561"
	}, {
		names : ["boxVl"],
		decimalCode : 9570,
		hexadecimalCode : "x02562"
	}, {
		names : ["boxVL"],
		decimalCode : 9571,
		hexadecimalCode : "x02563"
	}, {
		names : ["boxHd"],
		decimalCode : 9572,
		hexadecimalCode : "x02564"
	}, {
		names : ["boxhD"],
		decimalCode : 9573,
		hexadecimalCode : "x02565"
	}, {
		names : ["boxHD"],
		decimalCode : 9574,
		hexadecimalCode : "x02566"
	}, {
		names : ["boxHu"],
		decimalCode : 9575,
		hexadecimalCode : "x02567"
	}, {
		names : ["boxhU"],
		decimalCode : 9576,
		hexadecimalCode : "x02568"
	}, {
		names : ["boxHU"],
		decimalCode : 9577,
		hexadecimalCode : "x02569"
	}, {
		names : ["boxvH"],
		decimalCode : 9578,
		hexadecimalCode : "x0256A"
	}, {
		names : ["boxVh"],
		decimalCode : 9579,
		hexadecimalCode : "x0256B"
	}, {
		names : ["boxVH"],
		decimalCode : 9580,
		hexadecimalCode : "x0256C"
	}, {
		names : ["uhblk"],
		decimalCode : 9600,
		hexadecimalCode : "x02580"
	}, {
		names : ["lhblk"],
		decimalCode : 9604,
		hexadecimalCode : "x02584"
	}, {
		names : ["block"],
		decimalCode : 9608,
		hexadecimalCode : "x02588"
	}, {
		names : ["blk14"],
		decimalCode : 9617,
		hexadecimalCode : "x02591"
	}, {
		names : ["blk12"],
		decimalCode : 9618,
		hexadecimalCode : "x02592"
	}, {
		names : ["blk34"],
		decimalCode : 9619,
		hexadecimalCode : "x02593"
	}, {
		names : ["squ", "square", "Square"],
		decimalCode : 9633,
		hexadecimalCode : "x025A1"
	}, {
		names : ["squf", "squarf", "blacksquare", "FilledVerySmallSquare"],
		decimalCode : 9642,
		hexadecimalCode : "x025AA"
	}, {
		names : ["EmptyVerySmallSquare"],
		decimalCode : 9643,
		hexadecimalCode : "x025AB"
	}, {
		names : ["rect"],
		decimalCode : 9645,
		hexadecimalCode : "x025AD"
	}, {
		names : ["marker"],
		decimalCode : 9646,
		hexadecimalCode : "x025AE"
	}, {
		names : ["fltns"],
		decimalCode : 9649,
		hexadecimalCode : "x025B1"
	}, {
		names : ["xutri", "bigtriangleup"],
		decimalCode : 9651,
		hexadecimalCode : "x025B3"
	}, {
		names : ["utrif", "blacktriangle"],
		decimalCode : 9652,
		hexadecimalCode : "x025B4"
	}, {
		names : ["utri", "triangle"],
		decimalCode : 9653,
		hexadecimalCode : "x025B5"
	}, {
		names : ["rtrif", "blacktriangleright"],
		decimalCode : 9656,
		hexadecimalCode : "x025B8"
	}, {
		names : ["rtri", "triangleright"],
		decimalCode : 9657,
		hexadecimalCode : "x025B9"
	}, {
		names : ["xdtri", "bigtriangledown"],
		decimalCode : 9661,
		hexadecimalCode : "x025BD"
	}, {
		names : ["dtrif", "blacktriangledown"],
		decimalCode : 9662,
		hexadecimalCode : "x025BE"
	}, {
		names : ["dtri", "triangledown"],
		decimalCode : 9663,
		hexadecimalCode : "x025BF"
	}, {
		names : ["ltrif", "blacktriangleleft"],
		decimalCode : 9666,
		hexadecimalCode : "x025C2"
	}, {
		names : ["ltri", "triangleleft"],
		decimalCode : 9667,
		hexadecimalCode : "x025C3"
	}, {
		names : ["loz", "lozenge"],
		decimalCode : 9674,
		hexadecimalCode : "x025CA"
	}, {
		names : ["cir"],
		decimalCode : 9675,
		hexadecimalCode : "x025CB"
	}, {
		names : ["tridot"],
		decimalCode : 9708,
		hexadecimalCode : "x025EC"
	}, {
		names : ["xcirc", "bigcirc"],
		decimalCode : 9711,
		hexadecimalCode : "x025EF"
	}, {
		names : ["ultri"],
		decimalCode : 9720,
		hexadecimalCode : "x025F8"
	}, {
		names : ["urtri"],
		decimalCode : 9721,
		hexadecimalCode : "x025F9"
	}, {
		names : ["lltri"],
		decimalCode : 9722,
		hexadecimalCode : "x025FA"
	}, {
		names : ["EmptySmallSquare"],
		decimalCode : 9723,
		hexadecimalCode : "x025FB"
	}, {
		names : ["FilledSmallSquare"],
		decimalCode : 9724,
		hexadecimalCode : "x025FC"
	}, {
		names : ["starf", "bigstar"],
		decimalCode : 9733,
		hexadecimalCode : "x02605"
	}, {
		names : ["star"],
		decimalCode : 9734,
		hexadecimalCode : "x02606"
	}, {
		names : ["phone"],
		decimalCode : 9742,
		hexadecimalCode : "x0260E"
	}, {
		names : ["female"],
		decimalCode : 9792,
		hexadecimalCode : "x02640"
	}, {
		names : ["male"],
		decimalCode : 9794,
		hexadecimalCode : "x02642"
	}, {
		names : ["spades", "spadesuit"],
		decimalCode : 9824,
		hexadecimalCode : "x02660"
	}, {
		names : ["clubs", "clubsuit"],
		decimalCode : 9827,
		hexadecimalCode : "x02663"
	}, {
		names : ["hearts", "heartsuit"],
		decimalCode : 9829,
		hexadecimalCode : "x02665"
	}, {
		names : ["diams", "diamondsuit"],
		decimalCode : 9830,
		hexadecimalCode : "x02666"
	}, {
		names : ["sung"],
		decimalCode : 9834,
		hexadecimalCode : "x0266A"
	}, {
		names : ["flat"],
		decimalCode : 9837,
		hexadecimalCode : "x0266D"
	}, {
		names : ["natur", "natural"],
		decimalCode : 9838,
		hexadecimalCode : "x0266E"
	}, {
		names : ["sharp"],
		decimalCode : 9839,
		hexadecimalCode : "x0266F"
	}, {
		names : ["check", "checkmark"],
		decimalCode : 10003,
		hexadecimalCode : "x02713"
	}, {
		names : ["cross"],
		decimalCode : 10007,
		hexadecimalCode : "x02717"
	}, {
		names : ["malt", "maltese"],
		decimalCode : 10016,
		hexadecimalCode : "x02720"
	}, {
		names : ["sext"],
		decimalCode : 10038,
		hexadecimalCode : "x02736"
	}, {
		names : ["VerticalSeparator"],
		decimalCode : 10072,
		hexadecimalCode : "x02758"
	}, {
		names : ["lbbrk"],
		decimalCode : 10098,
		hexadecimalCode : "x02772"
	}, {
		names : ["rbbrk"],
		decimalCode : 10099,
		hexadecimalCode : "x02773"
	}, {
		names : ["lobrk", "LeftDoubleBracket"],
		decimalCode : 10214,
		hexadecimalCode : "x027E6"
	}, {
		names : ["robrk", "RightDoubleBracket"],
		decimalCode : 10215,
		hexadecimalCode : "x027E7"
	}, {
		names : ["lang", "LeftAngleBracket", "langle"],
		decimalCode : 10216,
		hexadecimalCode : "x027E8"
	}, {
		names : ["rang", "RightAngleBracket", "rangle"],
		decimalCode : 10217,
		hexadecimalCode : "x027E9"
	}, {
		names : ["Lang"],
		decimalCode : 10218,
		hexadecimalCode : "x027EA"
	}, {
		names : ["Rang"],
		decimalCode : 10219,
		hexadecimalCode : "x027EB"
	}, {
		names : ["loang"],
		decimalCode : 10220,
		hexadecimalCode : "x027EC"
	}, {
		names : ["roang"],
		decimalCode : 10221,
		hexadecimalCode : "x027ED"
	}, {
		names : ["xlarr", "longleftarrow", "LongLeftArrow"],
		decimalCode : 10229,
		hexadecimalCode : "x027F5"
	}, {
		names : ["xrarr", "longrightarrow", "LongRightArrow"],
		decimalCode : 10230,
		hexadecimalCode : "x027F6"
	}, {
		names : ["xharr", "longleftrightarrow", "LongLeftRightArrow"],
		decimalCode : 10231,
		hexadecimalCode : "x027F7"
	}, {
		names : ["xlArr", "Longleftarrow", "DoubleLongLeftArrow"],
		decimalCode : 10232,
		hexadecimalCode : "x027F8"
	}, {
		names : ["xrArr", "Longrightarrow", "DoubleLongRightArrow"],
		decimalCode : 10233,
		hexadecimalCode : "x027F9"
	}, {
		names : ["xhArr", "Longleftrightarrow", "DoubleLongLeftRightArrow"],
		decimalCode : 10234,
		hexadecimalCode : "x027FA"
	}, {
		names : ["xmap", "longmapsto"],
		decimalCode : 10236,
		hexadecimalCode : "x027FC"
	}, {
		names : ["dzigrarr"],
		decimalCode : 10239,
		hexadecimalCode : "x027FF"
	}, {
		names : ["nvlArr"],
		decimalCode : 10498,
		hexadecimalCode : "x02902"
	}, {
		names : ["nvrArr"],
		decimalCode : 10499,
		hexadecimalCode : "x02903"
	}, {
		names : ["nvHarr"],
		decimalCode : 10500,
		hexadecimalCode : "x02904"
	}, {
		names : ["Map"],
		decimalCode : 10501,
		hexadecimalCode : "x02905"
	}, {
		names : ["lbarr"],
		decimalCode : 10508,
		hexadecimalCode : "x0290C"
	}, {
		names : ["rbarr", "bkarow"],
		decimalCode : 10509,
		hexadecimalCode : "x0290D"
	}, {
		names : ["lBarr"],
		decimalCode : 10510,
		hexadecimalCode : "x0290E"
	}, {
		names : ["rBarr", "dbkarow"],
		decimalCode : 10511,
		hexadecimalCode : "x0290F"
	}, {
		names : ["RBarr", "drbkarow"],
		decimalCode : 10512,
		hexadecimalCode : "x02910"
	}, {
		names : ["DDotrahd"],
		decimalCode : 10513,
		hexadecimalCode : "x02911"
	}, {
		names : ["UpArrowBar"],
		decimalCode : 10514,
		hexadecimalCode : "x02912"
	}, {
		names : ["DownArrowBar"],
		decimalCode : 10515,
		hexadecimalCode : "x02913"
	}, {
		names : ["Rarrtl"],
		decimalCode : 10518,
		hexadecimalCode : "x02916"
	}, {
		names : ["latail"],
		decimalCode : 10521,
		hexadecimalCode : "x02919"
	}, {
		names : ["ratail"],
		decimalCode : 10522,
		hexadecimalCode : "x0291A"
	}, {
		names : ["lAtail"],
		decimalCode : 10523,
		hexadecimalCode : "x0291B"
	}, {
		names : ["rAtail"],
		decimalCode : 10524,
		hexadecimalCode : "x0291C"
	}, {
		names : ["larrfs"],
		decimalCode : 10525,
		hexadecimalCode : "x0291D"
	}, {
		names : ["rarrfs"],
		decimalCode : 10526,
		hexadecimalCode : "x0291E"
	}, {
		names : ["larrbfs"],
		decimalCode : 10527,
		hexadecimalCode : "x0291F"
	}, {
		names : ["rarrbfs"],
		decimalCode : 10528,
		hexadecimalCode : "x02920"
	}, {
		names : ["nwarhk"],
		decimalCode : 10531,
		hexadecimalCode : "x02923"
	}, {
		names : ["nearhk"],
		decimalCode : 10532,
		hexadecimalCode : "x02924"
	}, {
		names : ["searhk", "hksearow"],
		decimalCode : 10533,
		hexadecimalCode : "x02925"
	}, {
		names : ["swarhk", "hkswarow"],
		decimalCode : 10534,
		hexadecimalCode : "x02926"
	}, {
		names : ["nwnear"],
		decimalCode : 10535,
		hexadecimalCode : "x02927"
	}, {
		names : ["nesear", "toea"],
		decimalCode : 10536,
		hexadecimalCode : "x02928"
	}, {
		names : ["seswar", "tosa"],
		decimalCode : 10537,
		hexadecimalCode : "x02929"
	}, {
		names : ["swnwar"],
		decimalCode : 10538,
		hexadecimalCode : "x0292A"
	}, {
		names : ["rarrc"],
		decimalCode : 10547,
		hexadecimalCode : "x02933"
	}, {
		names : ["cudarrr"],
		decimalCode : 10549,
		hexadecimalCode : "x02935"
	}, {
		names : ["ldca"],
		decimalCode : 10550,
		hexadecimalCode : "x02936"
	}, {
		names : ["rdca"],
		decimalCode : 10551,
		hexadecimalCode : "x02937"
	}, {
		names : ["cudarrl"],
		decimalCode : 10552,
		hexadecimalCode : "x02938"
	}, {
		names : ["larrpl"],
		decimalCode : 10553,
		hexadecimalCode : "x02939"
	}, {
		names : ["curarrm"],
		decimalCode : 10556,
		hexadecimalCode : "x0293C"
	}, {
		names : ["cularrp"],
		decimalCode : 10557,
		hexadecimalCode : "x0293D"
	}, {
		names : ["rarrpl"],
		decimalCode : 10565,
		hexadecimalCode : "x02945"
	}, {
		names : ["harrcir"],
		decimalCode : 10568,
		hexadecimalCode : "x02948"
	}, {
		names : ["Uarrocir"],
		decimalCode : 10569,
		hexadecimalCode : "x02949"
	}, {
		names : ["lurdshar"],
		decimalCode : 10570,
		hexadecimalCode : "x0294A"
	}, {
		names : ["ldrushar"],
		decimalCode : 10571,
		hexadecimalCode : "x0294B"
	}, {
		names : ["LeftRightVector"],
		decimalCode : 10574,
		hexadecimalCode : "x0294E"
	}, {
		names : ["RightUpDownVector"],
		decimalCode : 10575,
		hexadecimalCode : "x0294F"
	}, {
		names : ["DownLeftRightVector"],
		decimalCode : 10576,
		hexadecimalCode : "x02950"
	}, {
		names : ["LeftUpDownVector"],
		decimalCode : 10577,
		hexadecimalCode : "x02951"
	}, {
		names : ["LeftVectorBar"],
		decimalCode : 10578,
		hexadecimalCode : "x02952"
	}, {
		names : ["RightVectorBar"],
		decimalCode : 10579,
		hexadecimalCode : "x02953"
	}, {
		names : ["RightUpVectorBar"],
		decimalCode : 10580,
		hexadecimalCode : "x02954"
	}, {
		names : ["RightDownVectorBar"],
		decimalCode : 10581,
		hexadecimalCode : "x02955"
	}, {
		names : ["DownLeftVectorBar"],
		decimalCode : 10582,
		hexadecimalCode : "x02956"
	}, {
		names : ["DownRightVectorBar"],
		decimalCode : 10583,
		hexadecimalCode : "x02957"
	}, {
		names : ["LeftUpVectorBar"],
		decimalCode : 10584,
		hexadecimalCode : "x02958"
	}, {
		names : ["LeftDownVectorBar"],
		decimalCode : 10585,
		hexadecimalCode : "x02959"
	}, {
		names : ["LeftTeeVector"],
		decimalCode : 10586,
		hexadecimalCode : "x0295A"
	}, {
		names : ["RightTeeVector"],
		decimalCode : 10587,
		hexadecimalCode : "x0295B"
	}, {
		names : ["RightUpTeeVector"],
		decimalCode : 10588,
		hexadecimalCode : "x0295C"
	}, {
		names : ["RightDownTeeVector"],
		decimalCode : 10589,
		hexadecimalCode : "x0295D"
	}, {
		names : ["DownLeftTeeVector"],
		decimalCode : 10590,
		hexadecimalCode : "x0295E"
	}, {
		names : ["DownRightTeeVector"],
		decimalCode : 10591,
		hexadecimalCode : "x0295F"
	}, {
		names : ["LeftUpTeeVector"],
		decimalCode : 10592,
		hexadecimalCode : "x02960"
	}, {
		names : ["LeftDownTeeVector"],
		decimalCode : 10593,
		hexadecimalCode : "x02961"
	}, {
		names : ["lHar"],
		decimalCode : 10594,
		hexadecimalCode : "x02962"
	}, {
		names : ["uHar"],
		decimalCode : 10595,
		hexadecimalCode : "x02963"
	}, {
		names : ["rHar"],
		decimalCode : 10596,
		hexadecimalCode : "x02964"
	}, {
		names : ["dHar"],
		decimalCode : 10597,
		hexadecimalCode : "x02965"
	}, {
		names : ["luruhar"],
		decimalCode : 10598,
		hexadecimalCode : "x02966"
	}, {
		names : ["ldrdhar"],
		decimalCode : 10599,
		hexadecimalCode : "x02967"
	}, {
		names : ["ruluhar"],
		decimalCode : 10600,
		hexadecimalCode : "x02968"
	}, {
		names : ["rdldhar"],
		decimalCode : 10601,
		hexadecimalCode : "x02969"
	}, {
		names : ["lharul"],
		decimalCode : 10602,
		hexadecimalCode : "x0296A"
	}, {
		names : ["llhard"],
		decimalCode : 10603,
		hexadecimalCode : "x0296B"
	}, {
		names : ["rharul"],
		decimalCode : 10604,
		hexadecimalCode : "x0296C"
	}, {
		names : ["lrhard"],
		decimalCode : 10605,
		hexadecimalCode : "x0296D"
	}, {
		names : ["udhar", "UpEquilibrium"],
		decimalCode : 10606,
		hexadecimalCode : "x0296E"
	}, {
		names : ["duhar", "ReverseUpEquilibrium"],
		decimalCode : 10607,
		hexadecimalCode : "x0296F"
	}, {
		names : ["RoundImplies"],
		decimalCode : 10608,
		hexadecimalCode : "x02970"
	}, {
		names : ["erarr"],
		decimalCode : 10609,
		hexadecimalCode : "x02971"
	}, {
		names : ["simrarr"],
		decimalCode : 10610,
		hexadecimalCode : "x02972"
	}, {
		names : ["larrsim"],
		decimalCode : 10611,
		hexadecimalCode : "x02973"
	}, {
		names : ["rarrsim"],
		decimalCode : 10612,
		hexadecimalCode : "x02974"
	}, {
		names : ["rarrap"],
		decimalCode : 10613,
		hexadecimalCode : "x02975"
	}, {
		names : ["ltlarr"],
		decimalCode : 10614,
		hexadecimalCode : "x02976"
	}, {
		names : ["gtrarr"],
		decimalCode : 10616,
		hexadecimalCode : "x02978"
	}, {
		names : ["subrarr"],
		decimalCode : 10617,
		hexadecimalCode : "x02979"
	}, {
		names : ["suplarr"],
		decimalCode : 10619,
		hexadecimalCode : "x0297B"
	}, {
		names : ["lfisht"],
		decimalCode : 10620,
		hexadecimalCode : "x0297C"
	}, {
		names : ["rfisht"],
		decimalCode : 10621,
		hexadecimalCode : "x0297D"
	}, {
		names : ["ufisht"],
		decimalCode : 10622,
		hexadecimalCode : "x0297E"
	}, {
		names : ["dfisht"],
		decimalCode : 10623,
		hexadecimalCode : "x0297F"
	}, {
		names : ["lopar"],
		decimalCode : 10629,
		hexadecimalCode : "x02985"
	}, {
		names : ["ropar"],
		decimalCode : 10630,
		hexadecimalCode : "x02986"
	}, {
		names : ["lbrke"],
		decimalCode : 10635,
		hexadecimalCode : "x0298B"
	}, {
		names : ["rbrke"],
		decimalCode : 10636,
		hexadecimalCode : "x0298C"
	}, {
		names : ["lbrkslu"],
		decimalCode : 10637,
		hexadecimalCode : "x0298D"
	}, {
		names : ["rbrksld"],
		decimalCode : 10638,
		hexadecimalCode : "x0298E"
	}, {
		names : ["lbrksld"],
		decimalCode : 10639,
		hexadecimalCode : "x0298F"
	}, {
		names : ["rbrkslu"],
		decimalCode : 10640,
		hexadecimalCode : "x02990"
	}, {
		names : ["langd"],
		decimalCode : 10641,
		hexadecimalCode : "x02991"
	}, {
		names : ["rangd"],
		decimalCode : 10642,
		hexadecimalCode : "x02992"
	}, {
		names : ["lparlt"],
		decimalCode : 10643,
		hexadecimalCode : "x02993"
	}, {
		names : ["rpargt"],
		decimalCode : 10644,
		hexadecimalCode : "x02994"
	}, {
		names : ["gtlPar"],
		decimalCode : 10645,
		hexadecimalCode : "x02995"
	}, {
		names : ["ltrPar"],
		decimalCode : 10646,
		hexadecimalCode : "x02996"
	}, {
		names : ["vzigzag"],
		decimalCode : 10650,
		hexadecimalCode : "x0299A"
	}, {
		names : ["vangrt"],
		decimalCode : 10652,
		hexadecimalCode : "x0299C"
	}, {
		names : ["angrtvbd"],
		decimalCode : 10653,
		hexadecimalCode : "x0299D"
	}, {
		names : ["ange"],
		decimalCode : 10660,
		hexadecimalCode : "x029A4"
	}, {
		names : ["range"],
		decimalCode : 10661,
		hexadecimalCode : "x029A5"
	}, {
		names : ["dwangle"],
		decimalCode : 10662,
		hexadecimalCode : "x029A6"
	}, {
		names : ["uwangle"],
		decimalCode : 10663,
		hexadecimalCode : "x029A7"
	}, {
		names : ["angmsdaa"],
		decimalCode : 10664,
		hexadecimalCode : "x029A8"
	}, {
		names : ["angmsdab"],
		decimalCode : 10665,
		hexadecimalCode : "x029A9"
	}, {
		names : ["angmsdac"],
		decimalCode : 10666,
		hexadecimalCode : "x029AA"
	}, {
		names : ["angmsdad"],
		decimalCode : 10667,
		hexadecimalCode : "x029AB"
	}, {
		names : ["angmsdae"],
		decimalCode : 10668,
		hexadecimalCode : "x029AC"
	}, {
		names : ["angmsdaf"],
		decimalCode : 10669,
		hexadecimalCode : "x029AD"
	}, {
		names : ["angmsdag"],
		decimalCode : 10670,
		hexadecimalCode : "x029AE"
	}, {
		names : ["angmsdah"],
		decimalCode : 10671,
		hexadecimalCode : "x029AF"
	}, {
		names : ["bemptyv"],
		decimalCode : 10672,
		hexadecimalCode : "x029B0"
	}, {
		names : ["demptyv"],
		decimalCode : 10673,
		hexadecimalCode : "x029B1"
	}, {
		names : ["cemptyv"],
		decimalCode : 10674,
		hexadecimalCode : "x029B2"
	}, {
		names : ["raemptyv"],
		decimalCode : 10675,
		hexadecimalCode : "x029B3"
	}, {
		names : ["laemptyv"],
		decimalCode : 10676,
		hexadecimalCode : "x029B4"
	}, {
		names : ["ohbar"],
		decimalCode : 10677,
		hexadecimalCode : "x029B5"
	}, {
		names : ["omid"],
		decimalCode : 10678,
		hexadecimalCode : "x029B6"
	}, {
		names : ["opar"],
		decimalCode : 10679,
		hexadecimalCode : "x029B7"
	}, {
		names : ["operp"],
		decimalCode : 10681,
		hexadecimalCode : "x029B9"
	}, {
		names : ["olcross"],
		decimalCode : 10683,
		hexadecimalCode : "x029BB"
	}, {
		names : ["odsold"],
		decimalCode : 10684,
		hexadecimalCode : "x029BC"
	}, {
		names : ["olcir"],
		decimalCode : 10686,
		hexadecimalCode : "x029BE"
	}, {
		names : ["ofcir"],
		decimalCode : 10687,
		hexadecimalCode : "x029BF"
	}, {
		names : ["olt"],
		decimalCode : 10688,
		hexadecimalCode : "x029C0"
	}, {
		names : ["ogt"],
		decimalCode : 10689,
		hexadecimalCode : "x029C1"
	}, {
		names : ["cirscir"],
		decimalCode : 10690,
		hexadecimalCode : "x029C2"
	}, {
		names : ["cirE"],
		decimalCode : 10691,
		hexadecimalCode : "x029C3"
	}, {
		names : ["solb"],
		decimalCode : 10692,
		hexadecimalCode : "x029C4"
	}, {
		names : ["bsolb"],
		decimalCode : 10693,
		hexadecimalCode : "x029C5"
	}, {
		names : ["boxbox"],
		decimalCode : 10697,
		hexadecimalCode : "x029C9"
	}, {
		names : ["trisb"],
		decimalCode : 10701,
		hexadecimalCode : "x029CD"
	}, {
		names : ["rtriltri"],
		decimalCode : 10702,
		hexadecimalCode : "x029CE"
	}, {
		names : ["LeftTriangleBar"],
		decimalCode : 10703,
		hexadecimalCode : "x029CF"
	}, {
		names : ["RightTriangleBar"],
		decimalCode : 10704,
		hexadecimalCode : "x029D0"
	}, {
		names : ["race"],
		decimalCode : 10714,
		hexadecimalCode : "x029DA"
	}, {
		names : ["iinfin"],
		decimalCode : 10716,
		hexadecimalCode : "x029DC"
	}, {
		names : ["infintie"],
		decimalCode : 10717,
		hexadecimalCode : "x029DD"
	}, {
		names : ["nvinfin"],
		decimalCode : 10718,
		hexadecimalCode : "x029DE"
	}, {
		names : ["eparsl"],
		decimalCode : 10723,
		hexadecimalCode : "x029E3"
	}, {
		names : ["smeparsl"],
		decimalCode : 10724,
		hexadecimalCode : "x029E4"
	}, {
		names : ["eqvparsl"],
		decimalCode : 10725,
		hexadecimalCode : "x029E5"
	}, {
		names : ["lozf", "blacklozenge"],
		decimalCode : 10731,
		hexadecimalCode : "x029EB"
	}, {
		names : ["RuleDelayed"],
		decimalCode : 10740,
		hexadecimalCode : "x029F4"
	}, {
		names : ["dsol"],
		decimalCode : 10742,
		hexadecimalCode : "x029F6"
	}, {
		names : ["xodot", "bigodot"],
		decimalCode : 10752,
		hexadecimalCode : "x02A00"
	}, {
		names : ["xoplus", "bigoplus"],
		decimalCode : 10753,
		hexadecimalCode : "x02A01"
	}, {
		names : ["xotime", "bigotimes"],
		decimalCode : 10754,
		hexadecimalCode : "x02A02"
	}, {
		names : ["xuplus", "biguplus"],
		decimalCode : 10756,
		hexadecimalCode : "x02A04"
	}, {
		names : ["xsqcup", "bigsqcup"],
		decimalCode : 10758,
		hexadecimalCode : "x02A06"
	}, {
		names : ["qint", "iiiint"],
		decimalCode : 10764,
		hexadecimalCode : "x02A0C"
	}, {
		names : ["fpartint"],
		decimalCode : 10765,
		hexadecimalCode : "x02A0D"
	}, {
		names : ["cirfnint"],
		decimalCode : 10768,
		hexadecimalCode : "x02A10"
	}, {
		names : ["awint"],
		decimalCode : 10769,
		hexadecimalCode : "x02A11"
	}, {
		names : ["rppolint"],
		decimalCode : 10770,
		hexadecimalCode : "x02A12"
	}, {
		names : ["scpolint"],
		decimalCode : 10771,
		hexadecimalCode : "x02A13"
	}, {
		names : ["npolint"],
		decimalCode : 10772,
		hexadecimalCode : "x02A14"
	}, {
		names : ["pointint"],
		decimalCode : 10773,
		hexadecimalCode : "x02A15"
	}, {
		names : ["quatint"],
		decimalCode : 10774,
		hexadecimalCode : "x02A16"
	}, {
		names : ["intlarhk"],
		decimalCode : 10775,
		hexadecimalCode : "x02A17"
	}, {
		names : ["pluscir"],
		decimalCode : 10786,
		hexadecimalCode : "x02A22"
	}, {
		names : ["plusacir"],
		decimalCode : 10787,
		hexadecimalCode : "x02A23"
	}, {
		names : ["simplus"],
		decimalCode : 10788,
		hexadecimalCode : "x02A24"
	}, {
		names : ["plusdu"],
		decimalCode : 10789,
		hexadecimalCode : "x02A25"
	}, {
		names : ["plussim"],
		decimalCode : 10790,
		hexadecimalCode : "x02A26"
	}, {
		names : ["plustwo"],
		decimalCode : 10791,
		hexadecimalCode : "x02A27"
	}, {
		names : ["mcomma"],
		decimalCode : 10793,
		hexadecimalCode : "x02A29"
	}, {
		names : ["minusdu"],
		decimalCode : 10794,
		hexadecimalCode : "x02A2A"
	}, {
		names : ["loplus"],
		decimalCode : 10797,
		hexadecimalCode : "x02A2D"
	}, {
		names : ["roplus"],
		decimalCode : 10798,
		hexadecimalCode : "x02A2E"
	}, {
		names : ["Cross"],
		decimalCode : 10799,
		hexadecimalCode : "x02A2F"
	}, {
		names : ["timesd"],
		decimalCode : 10800,
		hexadecimalCode : "x02A30"
	}, {
		names : ["timesbar"],
		decimalCode : 10801,
		hexadecimalCode : "x02A31"
	}, {
		names : ["smashp"],
		decimalCode : 10803,
		hexadecimalCode : "x02A33"
	}, {
		names : ["lotimes"],
		decimalCode : 10804,
		hexadecimalCode : "x02A34"
	}, {
		names : ["rotimes"],
		decimalCode : 10805,
		hexadecimalCode : "x02A35"
	}, {
		names : ["otimesas"],
		decimalCode : 10806,
		hexadecimalCode : "x02A36"
	}, {
		names : ["Otimes"],
		decimalCode : 10807,
		hexadecimalCode : "x02A37"
	}, {
		names : ["odiv"],
		decimalCode : 10808,
		hexadecimalCode : "x02A38"
	}, {
		names : ["triplus"],
		decimalCode : 10809,
		hexadecimalCode : "x02A39"
	}, {
		names : ["triminus"],
		decimalCode : 10810,
		hexadecimalCode : "x02A3A"
	}, {
		names : ["tritime"],
		decimalCode : 10811,
		hexadecimalCode : "x02A3B"
	}, {
		names : ["iprod", "intprod"],
		decimalCode : 10812,
		hexadecimalCode : "x02A3C"
	}, {
		names : ["amalg"],
		decimalCode : 10815,
		hexadecimalCode : "x02A3F"
	}, {
		names : ["capdot"],
		decimalCode : 10816,
		hexadecimalCode : "x02A40"
	}, {
		names : ["ncup"],
		decimalCode : 10818,
		hexadecimalCode : "x02A42"
	}, {
		names : ["ncap"],
		decimalCode : 10819,
		hexadecimalCode : "x02A43"
	}, {
		names : ["capand"],
		decimalCode : 10820,
		hexadecimalCode : "x02A44"
	}, {
		names : ["cupor"],
		decimalCode : 10821,
		hexadecimalCode : "x02A45"
	}, {
		names : ["cupcap"],
		decimalCode : 10822,
		hexadecimalCode : "x02A46"
	}, {
		names : ["capcup"],
		decimalCode : 10823,
		hexadecimalCode : "x02A47"
	}, {
		names : ["cupbrcap"],
		decimalCode : 10824,
		hexadecimalCode : "x02A48"
	}, {
		names : ["capbrcup"],
		decimalCode : 10825,
		hexadecimalCode : "x02A49"
	}, {
		names : ["cupcup"],
		decimalCode : 10826,
		hexadecimalCode : "x02A4A"
	}, {
		names : ["capcap"],
		decimalCode : 10827,
		hexadecimalCode : "x02A4B"
	}, {
		names : ["ccups"],
		decimalCode : 10828,
		hexadecimalCode : "x02A4C"
	}, {
		names : ["ccaps"],
		decimalCode : 10829,
		hexadecimalCode : "x02A4D"
	}, {
		names : ["ccupssm"],
		decimalCode : 10832,
		hexadecimalCode : "x02A50"
	}, {
		names : ["And"],
		decimalCode : 10835,
		hexadecimalCode : "x02A53"
	}, {
		names : ["Or"],
		decimalCode : 10836,
		hexadecimalCode : "x02A54"
	}, {
		names : ["andand"],
		decimalCode : 10837,
		hexadecimalCode : "x02A55"
	}, {
		names : ["oror"],
		decimalCode : 10838,
		hexadecimalCode : "x02A56"
	}, {
		names : ["orslope"],
		decimalCode : 10839,
		hexadecimalCode : "x02A57"
	}, {
		names : ["andslope"],
		decimalCode : 10840,
		hexadecimalCode : "x02A58"
	}, {
		names : ["andv"],
		decimalCode : 10842,
		hexadecimalCode : "x02A5A"
	}, {
		names : ["orv"],
		decimalCode : 10843,
		hexadecimalCode : "x02A5B"
	}, {
		names : ["andd"],
		decimalCode : 10844,
		hexadecimalCode : "x02A5C"
	}, {
		names : ["ord"],
		decimalCode : 10845,
		hexadecimalCode : "x02A5D"
	}, {
		names : ["wedbar"],
		decimalCode : 10847,
		hexadecimalCode : "x02A5F"
	}, {
		names : ["sdote"],
		decimalCode : 10854,
		hexadecimalCode : "x02A66"
	}, {
		names : ["simdot"],
		decimalCode : 10858,
		hexadecimalCode : "x02A6A"
	}, {
		names : ["congdot"],
		decimalCode : 10861,
		hexadecimalCode : "x02A6D"
	}, {
		names : ["easter"],
		decimalCode : 10862,
		hexadecimalCode : "x02A6E"
	}, {
		names : ["apacir"],
		decimalCode : 10863,
		hexadecimalCode : "x02A6F"
	}, {
		names : ["apE"],
		decimalCode : 10864,
		hexadecimalCode : "x02A70"
	}, {
		names : ["eplus"],
		decimalCode : 10865,
		hexadecimalCode : "x02A71"
	}, {
		names : ["pluse"],
		decimalCode : 10866,
		hexadecimalCode : "x02A72"
	}, {
		names : ["Esim"],
		decimalCode : 10867,
		hexadecimalCode : "x02A73"
	}, {
		names : ["Colone"],
		decimalCode : 10868,
		hexadecimalCode : "x02A74"
	}, {
		names : ["Equal"],
		decimalCode : 10869,
		hexadecimalCode : "x02A75"
	}, {
		names : ["eDDot", "ddotseq"],
		decimalCode : 10871,
		hexadecimalCode : "x02A77"
	}, {
		names : ["equivDD"],
		decimalCode : 10872,
		hexadecimalCode : "x02A78"
	}, {
		names : ["ltcir"],
		decimalCode : 10873,
		hexadecimalCode : "x02A79"
	}, {
		names : ["gtcir"],
		decimalCode : 10874,
		hexadecimalCode : "x02A7A"
	}, {
		names : ["ltquest"],
		decimalCode : 10875,
		hexadecimalCode : "x02A7B"
	}, {
		names : ["gtquest"],
		decimalCode : 10876,
		hexadecimalCode : "x02A7C"
	}, {
		names : ["les", "LessSlantEqual", "leqslant"],
		decimalCode : 10877,
		hexadecimalCode : "x02A7D"
	}, {
		names : ["ges", "GreaterSlantEqual", "geqslant"],
		decimalCode : 10878,
		hexadecimalCode : "x02A7E"
	}, {
		names : ["lesdot"],
		decimalCode : 10879,
		hexadecimalCode : "x02A7F"
	}, {
		names : ["gesdot"],
		decimalCode : 10880,
		hexadecimalCode : "x02A80"
	}, {
		names : ["lesdoto"],
		decimalCode : 10881,
		hexadecimalCode : "x02A81"
	}, {
		names : ["gesdoto"],
		decimalCode : 10882,
		hexadecimalCode : "x02A82"
	}, {
		names : ["lesdotor"],
		decimalCode : 10883,
		hexadecimalCode : "x02A83"
	}, {
		names : ["gesdotol"],
		decimalCode : 10884,
		hexadecimalCode : "x02A84"
	}, {
		names : ["lap", "lessapprox"],
		decimalCode : 10885,
		hexadecimalCode : "x02A85"
	}, {
		names : ["gap", "gtrapprox"],
		decimalCode : 10886,
		hexadecimalCode : "x02A86"
	}, {
		names : ["lne", "lneq"],
		decimalCode : 10887,
		hexadecimalCode : "x02A87"
	}, {
		names : ["gne", "gneq"],
		decimalCode : 10888,
		hexadecimalCode : "x02A88"
	}, {
		names : ["lnap", "lnapprox"],
		decimalCode : 10889,
		hexadecimalCode : "x02A89"
	}, {
		names : ["gnap", "gnapprox"],
		decimalCode : 10890,
		hexadecimalCode : "x02A8A"
	}, {
		names : ["lEg", "lesseqqgtr"],
		decimalCode : 10891,
		hexadecimalCode : "x02A8B"
	}, {
		names : ["gEl", "gtreqqless"],
		decimalCode : 10892,
		hexadecimalCode : "x02A8C"
	}, {
		names : ["lsime"],
		decimalCode : 10893,
		hexadecimalCode : "x02A8D"
	}, {
		names : ["gsime"],
		decimalCode : 10894,
		hexadecimalCode : "x02A8E"
	}, {
		names : ["lsimg"],
		decimalCode : 10895,
		hexadecimalCode : "x02A8F"
	}, {
		names : ["gsiml"],
		decimalCode : 10896,
		hexadecimalCode : "x02A90"
	}, {
		names : ["lgE"],
		decimalCode : 10897,
		hexadecimalCode : "x02A91"
	}, {
		names : ["glE"],
		decimalCode : 10898,
		hexadecimalCode : "x02A92"
	}, {
		names : ["lesges"],
		decimalCode : 10899,
		hexadecimalCode : "x02A93"
	}, {
		names : ["gesles"],
		decimalCode : 10900,
		hexadecimalCode : "x02A94"
	}, {
		names : ["els", "eqslantless"],
		decimalCode : 10901,
		hexadecimalCode : "x02A95"
	}, {
		names : ["egs", "eqslantgtr"],
		decimalCode : 10902,
		hexadecimalCode : "x02A96"
	}, {
		names : ["elsdot"],
		decimalCode : 10903,
		hexadecimalCode : "x02A97"
	}, {
		names : ["egsdot"],
		decimalCode : 10904,
		hexadecimalCode : "x02A98"
	}, {
		names : ["el"],
		decimalCode : 10905,
		hexadecimalCode : "x02A99"
	}, {
		names : ["eg"],
		decimalCode : 10906,
		hexadecimalCode : "x02A9A"
	}, {
		names : ["siml"],
		decimalCode : 10909,
		hexadecimalCode : "x02A9D"
	}, {
		names : ["simg"],
		decimalCode : 10910,
		hexadecimalCode : "x02A9E"
	}, {
		names : ["simlE"],
		decimalCode : 10911,
		hexadecimalCode : "x02A9F"
	}, {
		names : ["simgE"],
		decimalCode : 10912,
		hexadecimalCode : "x02AA0"
	}, {
		names : ["LessLess"],
		decimalCode : 10913,
		hexadecimalCode : "x02AA1"
	}, {
		names : ["GreaterGreater"],
		decimalCode : 10914,
		hexadecimalCode : "x02AA2"
	}, {
		names : ["glj"],
		decimalCode : 10916,
		hexadecimalCode : "x02AA4"
	}, {
		names : ["gla"],
		decimalCode : 10917,
		hexadecimalCode : "x02AA5"
	}, {
		names : ["ltcc"],
		decimalCode : 10918,
		hexadecimalCode : "x02AA6"
	}, {
		names : ["gtcc"],
		decimalCode : 10919,
		hexadecimalCode : "x02AA7"
	}, {
		names : ["lescc"],
		decimalCode : 10920,
		hexadecimalCode : "x02AA8"
	}, {
		names : ["gescc"],
		decimalCode : 10921,
		hexadecimalCode : "x02AA9"
	}, {
		names : ["smt"],
		decimalCode : 10922,
		hexadecimalCode : "x02AAA"
	}, {
		names : ["lat"],
		decimalCode : 10923,
		hexadecimalCode : "x02AAB"
	}, {
		names : ["smte"],
		decimalCode : 10924,
		hexadecimalCode : "x02AAC"
	}, {
		names : ["late"],
		decimalCode : 10925,
		hexadecimalCode : "x02AAD"
	}, {
		names : ["bumpE"],
		decimalCode : 10926,
		hexadecimalCode : "x02AAE"
	}, {
		names : ["pre", "preceq", "PrecedesEqual"],
		decimalCode : 10927,
		hexadecimalCode : "x02AAF"
	}, {
		names : ["sce", "succeq", "SucceedsEqual"],
		decimalCode : 10928,
		hexadecimalCode : "x02AB0"
	}, {
		names : ["prE"],
		decimalCode : 10931,
		hexadecimalCode : "x02AB3"
	}, {
		names : ["scE"],
		decimalCode : 10932,
		hexadecimalCode : "x02AB4"
	}, {
		names : ["prnE", "precneqq"],
		decimalCode : 10933,
		hexadecimalCode : "x02AB5"
	}, {
		names : ["scnE", "succneqq"],
		decimalCode : 10934,
		hexadecimalCode : "x02AB6"
	}, {
		names : ["prap", "precapprox"],
		decimalCode : 10935,
		hexadecimalCode : "x02AB7"
	}, {
		names : ["scap", "succapprox"],
		decimalCode : 10936,
		hexadecimalCode : "x02AB8"
	}, {
		names : ["prnap", "precnapprox"],
		decimalCode : 10937,
		hexadecimalCode : "x02AB9"
	}, {
		names : ["scnap", "succnapprox"],
		decimalCode : 10938,
		hexadecimalCode : "x02ABA"
	}, {
		names : ["Pr"],
		decimalCode : 10939,
		hexadecimalCode : "x02ABB"
	}, {
		names : ["Sc"],
		decimalCode : 10940,
		hexadecimalCode : "x02ABC"
	}, {
		names : ["subdot"],
		decimalCode : 10941,
		hexadecimalCode : "x02ABD"
	}, {
		names : ["supdot"],
		decimalCode : 10942,
		hexadecimalCode : "x02ABE"
	}, {
		names : ["subplus"],
		decimalCode : 10943,
		hexadecimalCode : "x02ABF"
	}, {
		names : ["supplus"],
		decimalCode : 10944,
		hexadecimalCode : "x02AC0"
	}, {
		names : ["submult"],
		decimalCode : 10945,
		hexadecimalCode : "x02AC1"
	}, {
		names : ["supmult"],
		decimalCode : 10946,
		hexadecimalCode : "x02AC2"
	}, {
		names : ["subedot"],
		decimalCode : 10947,
		hexadecimalCode : "x02AC3"
	}, {
		names : ["supedot"],
		decimalCode : 10948,
		hexadecimalCode : "x02AC4"
	}, {
		names : ["subE", "subseteqq"],
		decimalCode : 10949,
		hexadecimalCode : "x02AC5"
	}, {
		names : ["supE", "supseteqq"],
		decimalCode : 10950,
		hexadecimalCode : "x02AC6"
	}, {
		names : ["subsim"],
		decimalCode : 10951,
		hexadecimalCode : "x02AC7"
	}, {
		names : ["supsim"],
		decimalCode : 10952,
		hexadecimalCode : "x02AC8"
	}, {
		names : ["subnE", "subsetneqq"],
		decimalCode : 10955,
		hexadecimalCode : "x02ACB"
	}, {
		names : ["supnE", "supsetneqq"],
		decimalCode : 10956,
		hexadecimalCode : "x02ACC"
	}, {
		names : ["csub"],
		decimalCode : 10959,
		hexadecimalCode : "x02ACF"
	}, {
		names : ["csup"],
		decimalCode : 10960,
		hexadecimalCode : "x02AD0"
	}, {
		names : ["csube"],
		decimalCode : 10961,
		hexadecimalCode : "x02AD1"
	}, {
		names : ["csupe"],
		decimalCode : 10962,
		hexadecimalCode : "x02AD2"
	}, {
		names : ["subsup"],
		decimalCode : 10963,
		hexadecimalCode : "x02AD3"
	}, {
		names : ["supsub"],
		decimalCode : 10964,
		hexadecimalCode : "x02AD4"
	}, {
		names : ["subsub"],
		decimalCode : 10965,
		hexadecimalCode : "x02AD5"
	}, {
		names : ["supsup"],
		decimalCode : 10966,
		hexadecimalCode : "x02AD6"
	}, {
		names : ["suphsub"],
		decimalCode : 10967,
		hexadecimalCode : "x02AD7"
	}, {
		names : ["supdsub"],
		decimalCode : 10968,
		hexadecimalCode : "x02AD8"
	}, {
		names : ["forkv"],
		decimalCode : 10969,
		hexadecimalCode : "x02AD9"
	}, {
		names : ["topfork"],
		decimalCode : 10970,
		hexadecimalCode : "x02ADA"
	}, {
		names : ["mlcp"],
		decimalCode : 10971,
		hexadecimalCode : "x02ADB"
	}, {
		names : ["Dashv", "DoubleLeftTee"],
		decimalCode : 10980,
		hexadecimalCode : "x02AE4"
	}, {
		names : ["Vdashl"],
		decimalCode : 10982,
		hexadecimalCode : "x02AE6"
	}, {
		names : ["Barv"],
		decimalCode : 10983,
		hexadecimalCode : "x02AE7"
	}, {
		names : ["vBar"],
		decimalCode : 10984,
		hexadecimalCode : "x02AE8"
	}, {
		names : ["vBarv"],
		decimalCode : 10985,
		hexadecimalCode : "x02AE9"
	}, {
		names : ["Vbar"],
		decimalCode : 10987,
		hexadecimalCode : "x02AEB"
	}, {
		names : ["Not"],
		decimalCode : 10988,
		hexadecimalCode : "x02AEC"
	}, {
		names : ["bNot"],
		decimalCode : 10989,
		hexadecimalCode : "x02AED"
	}, {
		names : ["rnmid"],
		decimalCode : 10990,
		hexadecimalCode : "x02AEE"
	}, {
		names : ["cirmid"],
		decimalCode : 10991,
		hexadecimalCode : "x02AEF"
	}, {
		names : ["midcir"],
		decimalCode : 10992,
		hexadecimalCode : "x02AF0"
	}, {
		names : ["topcir"],
		decimalCode : 10993,
		hexadecimalCode : "x02AF1"
	}, {
		names : ["nhpar"],
		decimalCode : 10994,
		hexadecimalCode : "x02AF2"
	}, {
		names : ["parsim"],
		decimalCode : 10995,
		hexadecimalCode : "x02AF3"
	}, {
		names : ["parsl"],
		decimalCode : 11005,
		hexadecimalCode : "x02AFD"
	}, {
		names : ["fflig"],
		decimalCode : 64256,
		hexadecimalCode : "x0FB00"
	}, {
		names : ["filig"],
		decimalCode : 64257,
		hexadecimalCode : "x0FB01"
	}, {
		names : ["fllig"],
		decimalCode : 64258,
		hexadecimalCode : "x0FB02"
	}, {
		names : ["ffilig"],
		decimalCode : 64259,
		hexadecimalCode : "x0FB03"
	}, {
		names : ["ffllig"],
		decimalCode : 64260,
		hexadecimalCode : "x0FB04"
	}, {
		names : ["Ascr"],
		decimalCode : 119964,
		hexadecimalCode : "x1D49C"
	}, {
		names : ["Cscr"],
		decimalCode : 119966,
		hexadecimalCode : "x1D49E"
	}, {
		names : ["Dscr"],
		decimalCode : 119967,
		hexadecimalCode : "x1D49F"
	}, {
		names : ["Gscr"],
		decimalCode : 119970,
		hexadecimalCode : "x1D4A2"
	}, {
		names : ["Jscr"],
		decimalCode : 119973,
		hexadecimalCode : "x1D4A5"
	}, {
		names : ["Kscr"],
		decimalCode : 119974,
		hexadecimalCode : "x1D4A6"
	}, {
		names : ["Nscr"],
		decimalCode : 119977,
		hexadecimalCode : "x1D4A9"
	}, {
		names : ["Oscr"],
		decimalCode : 119978,
		hexadecimalCode : "x1D4AA"
	}, {
		names : ["Pscr"],
		decimalCode : 119979,
		hexadecimalCode : "x1D4AB"
	}, {
		names : ["Qscr"],
		decimalCode : 119980,
		hexadecimalCode : "x1D4AC"
	}, {
		names : ["Sscr"],
		decimalCode : 119982,
		hexadecimalCode : "x1D4AE"
	}, {
		names : ["Tscr"],
		decimalCode : 119983,
		hexadecimalCode : "x1D4AF"
	}, {
		names : ["Uscr"],
		decimalCode : 119984,
		hexadecimalCode : "x1D4B0"
	}, {
		names : ["Vscr"],
		decimalCode : 119985,
		hexadecimalCode : "x1D4B1"
	}, {
		names : ["Wscr"],
		decimalCode : 119986,
		hexadecimalCode : "x1D4B2"
	}, {
		names : ["Xscr"],
		decimalCode : 119987,
		hexadecimalCode : "x1D4B3"
	}, {
		names : ["Yscr"],
		decimalCode : 119988,
		hexadecimalCode : "x1D4B4"
	}, {
		names : ["Zscr"],
		decimalCode : 119989,
		hexadecimalCode : "x1D4B5"
	}, {
		names : ["ascr"],
		decimalCode : 119990,
		hexadecimalCode : "x1D4B6"
	}, {
		names : ["bscr"],
		decimalCode : 119991,
		hexadecimalCode : "x1D4B7"
	}, {
		names : ["cscr"],
		decimalCode : 119992,
		hexadecimalCode : "x1D4B8"
	}, {
		names : ["dscr"],
		decimalCode : 119993,
		hexadecimalCode : "x1D4B9"
	}, {
		names : ["fscr"],
		decimalCode : 119995,
		hexadecimalCode : "x1D4BB"
	}, {
		names : ["hscr"],
		decimalCode : 119997,
		hexadecimalCode : "x1D4BD"
	}, {
		names : ["iscr"],
		decimalCode : 119998,
		hexadecimalCode : "x1D4BE"
	}, {
		names : ["jscr"],
		decimalCode : 119999,
		hexadecimalCode : "x1D4BF"
	}, {
		names : ["kscr"],
		decimalCode : 120000,
		hexadecimalCode : "x1D4C0"
	}, {
		names : ["lscr"],
		decimalCode : 120001,
		hexadecimalCode : "x1D4C1"
	}, {
		names : ["mscr"],
		decimalCode : 120002,
		hexadecimalCode : "x1D4C2"
	}, {
		names : ["nscr"],
		decimalCode : 120003,
		hexadecimalCode : "x1D4C3"
	}, {
		names : ["pscr"],
		decimalCode : 120005,
		hexadecimalCode : "x1D4C5"
	}, {
		names : ["qscr"],
		decimalCode : 120006,
		hexadecimalCode : "x1D4C6"
	}, {
		names : ["rscr"],
		decimalCode : 120007,
		hexadecimalCode : "x1D4C7"
	}, {
		names : ["sscr"],
		decimalCode : 120008,
		hexadecimalCode : "x1D4C8"
	}, {
		names : ["tscr"],
		decimalCode : 120009,
		hexadecimalCode : "x1D4C9"
	}, {
		names : ["uscr"],
		decimalCode : 120010,
		hexadecimalCode : "x1D4CA"
	}, {
		names : ["vscr"],
		decimalCode : 120011,
		hexadecimalCode : "x1D4CB"
	}, {
		names : ["wscr"],
		decimalCode : 120012,
		hexadecimalCode : "x1D4CC"
	}, {
		names : ["xscr"],
		decimalCode : 120013,
		hexadecimalCode : "x1D4CD"
	}, {
		names : ["yscr"],
		decimalCode : 120014,
		hexadecimalCode : "x1D4CE"
	}, {
		names : ["zscr"],
		decimalCode : 120015,
		hexadecimalCode : "x1D4CF"
	}, {
		names : ["Afr"],
		decimalCode : 120068,
		hexadecimalCode : "x1D504"
	}, {
		names : ["Bfr"],
		decimalCode : 120069,
		hexadecimalCode : "x1D505"
	}, {
		names : ["Dfr"],
		decimalCode : 120071,
		hexadecimalCode : "x1D507"
	}, {
		names : ["Efr"],
		decimalCode : 120072,
		hexadecimalCode : "x1D508"
	}, {
		names : ["Ffr"],
		decimalCode : 120073,
		hexadecimalCode : "x1D509"
	}, {
		names : ["Gfr"],
		decimalCode : 120074,
		hexadecimalCode : "x1D50A"
	}, {
		names : ["Jfr"],
		decimalCode : 120077,
		hexadecimalCode : "x1D50D"
	}, {
		names : ["Kfr"],
		decimalCode : 120078,
		hexadecimalCode : "x1D50E"
	}, {
		names : ["Lfr"],
		decimalCode : 120079,
		hexadecimalCode : "x1D50F"
	}, {
		names : ["Mfr"],
		decimalCode : 120080,
		hexadecimalCode : "x1D510"
	}, {
		names : ["Nfr"],
		decimalCode : 120081,
		hexadecimalCode : "x1D511"
	}, {
		names : ["Ofr"],
		decimalCode : 120082,
		hexadecimalCode : "x1D512"
	}, {
		names : ["Pfr"],
		decimalCode : 120083,
		hexadecimalCode : "x1D513"
	}, {
		names : ["Qfr"],
		decimalCode : 120084,
		hexadecimalCode : "x1D514"
	}, {
		names : ["Sfr"],
		decimalCode : 120086,
		hexadecimalCode : "x1D516"
	}, {
		names : ["Tfr"],
		decimalCode : 120087,
		hexadecimalCode : "x1D517"
	}, {
		names : ["Ufr"],
		decimalCode : 120088,
		hexadecimalCode : "x1D518"
	}, {
		names : ["Vfr"],
		decimalCode : 120089,
		hexadecimalCode : "x1D519"
	}, {
		names : ["Wfr"],
		decimalCode : 120090,
		hexadecimalCode : "x1D51A"
	}, {
		names : ["Xfr"],
		decimalCode : 120091,
		hexadecimalCode : "x1D51B"
	}, {
		names : ["Yfr"],
		decimalCode : 120092,
		hexadecimalCode : "x1D51C"
	}, {
		names : ["afr"],
		decimalCode : 120094,
		hexadecimalCode : "x1D51E"
	}, {
		names : ["bfr"],
		decimalCode : 120095,
		hexadecimalCode : "x1D51F"
	}, {
		names : ["cfr"],
		decimalCode : 120096,
		hexadecimalCode : "x1D520"
	}, {
		names : ["dfr"],
		decimalCode : 120097,
		hexadecimalCode : "x1D521"
	}, {
		names : ["efr"],
		decimalCode : 120098,
		hexadecimalCode : "x1D522"
	}, {
		names : ["ffr"],
		decimalCode : 120099,
		hexadecimalCode : "x1D523"
	}, {
		names : ["gfr"],
		decimalCode : 120100,
		hexadecimalCode : "x1D524"
	}, {
		names : ["hfr"],
		decimalCode : 120101,
		hexadecimalCode : "x1D525"
	}, {
		names : ["ifr"],
		decimalCode : 120102,
		hexadecimalCode : "x1D526"
	}, {
		names : ["jfr"],
		decimalCode : 120103,
		hexadecimalCode : "x1D527"
	}, {
		names : ["kfr"],
		decimalCode : 120104,
		hexadecimalCode : "x1D528"
	}, {
		names : ["lfr"],
		decimalCode : 120105,
		hexadecimalCode : "x1D529"
	}, {
		names : ["mfr"],
		decimalCode : 120106,
		hexadecimalCode : "x1D52A"
	}, {
		names : ["nfr"],
		decimalCode : 120107,
		hexadecimalCode : "x1D52B"
	}, {
		names : ["ofr"],
		decimalCode : 120108,
		hexadecimalCode : "x1D52C"
	}, {
		names : ["pfr"],
		decimalCode : 120109,
		hexadecimalCode : "x1D52D"
	}, {
		names : ["qfr"],
		decimalCode : 120110,
		hexadecimalCode : "x1D52E"
	}, {
		names : ["rfr"],
		decimalCode : 120111,
		hexadecimalCode : "x1D52F"
	}, {
		names : ["sfr"],
		decimalCode : 120112,
		hexadecimalCode : "x1D530"
	}, {
		names : ["tfr"],
		decimalCode : 120113,
		hexadecimalCode : "x1D531"
	}, {
		names : ["ufr"],
		decimalCode : 120114,
		hexadecimalCode : "x1D532"
	}, {
		names : ["vfr"],
		decimalCode : 120115,
		hexadecimalCode : "x1D533"
	}, {
		names : ["wfr"],
		decimalCode : 120116,
		hexadecimalCode : "x1D534"
	}, {
		names : ["xfr"],
		decimalCode : 120117,
		hexadecimalCode : "x1D535"
	}, {
		names : ["yfr"],
		decimalCode : 120118,
		hexadecimalCode : "x1D536"
	}, {
		names : ["zfr"],
		decimalCode : 120119,
		hexadecimalCode : "x1D537"
	}, {
		names : ["Aopf"],
		decimalCode : 120120,
		hexadecimalCode : "x1D538"
	}, {
		names : ["Bopf"],
		decimalCode : 120121,
		hexadecimalCode : "x1D539"
	}, {
		names : ["Dopf"],
		decimalCode : 120123,
		hexadecimalCode : "x1D53B"
	}, {
		names : ["Eopf"],
		decimalCode : 120124,
		hexadecimalCode : "x1D53C"
	}, {
		names : ["Fopf"],
		decimalCode : 120125,
		hexadecimalCode : "x1D53D"
	}, {
		names : ["Gopf"],
		decimalCode : 120126,
		hexadecimalCode : "x1D53E"
	}, {
		names : ["Iopf"],
		decimalCode : 120128,
		hexadecimalCode : "x1D540"
	}, {
		names : ["Jopf"],
		decimalCode : 120129,
		hexadecimalCode : "x1D541"
	}, {
		names : ["Kopf"],
		decimalCode : 120130,
		hexadecimalCode : "x1D542"
	}, {
		names : ["Lopf"],
		decimalCode : 120131,
		hexadecimalCode : "x1D543"
	}, {
		names : ["Mopf"],
		decimalCode : 120132,
		hexadecimalCode : "x1D544"
	}, {
		names : ["Oopf"],
		decimalCode : 120134,
		hexadecimalCode : "x1D546"
	}, {
		names : ["Sopf"],
		decimalCode : 120138,
		hexadecimalCode : "x1D54A"
	}, {
		names : ["Topf"],
		decimalCode : 120139,
		hexadecimalCode : "x1D54B"
	}, {
		names : ["Uopf"],
		decimalCode : 120140,
		hexadecimalCode : "x1D54C"
	}, {
		names : ["Vopf"],
		decimalCode : 120141,
		hexadecimalCode : "x1D54D"
	}, {
		names : ["Wopf"],
		decimalCode : 120142,
		hexadecimalCode : "x1D54E"
	}, {
		names : ["Xopf"],
		decimalCode : 120143,
		hexadecimalCode : "x1D54F"
	}, {
		names : ["Yopf"],
		decimalCode : 120144,
		hexadecimalCode : "x1D550"
	}, {
		names : ["aopf"],
		decimalCode : 120146,
		hexadecimalCode : "x1D552"
	}, {
		names : ["bopf"],
		decimalCode : 120147,
		hexadecimalCode : "x1D553"
	}, {
		names : ["copf"],
		decimalCode : 120148,
		hexadecimalCode : "x1D554"
	}, {
		names : ["dopf"],
		decimalCode : 120149,
		hexadecimalCode : "x1D555"
	}, {
		names : ["eopf"],
		decimalCode : 120150,
		hexadecimalCode : "x1D556"
	}, {
		names : ["fopf"],
		decimalCode : 120151,
		hexadecimalCode : "x1D557"
	}, {
		names : ["gopf"],
		decimalCode : 120152,
		hexadecimalCode : "x1D558"
	}, {
		names : ["hopf"],
		decimalCode : 120153,
		hexadecimalCode : "x1D559"
	}, {
		names : ["iopf"],
		decimalCode : 120154,
		hexadecimalCode : "x1D55A"
	}, {
		names : ["jopf"],
		decimalCode : 120155,
		hexadecimalCode : "x1D55B"
	}, {
		names : ["kopf"],
		decimalCode : 120156,
		hexadecimalCode : "x1D55C"
	}, {
		names : ["lopf"],
		decimalCode : 120157,
		hexadecimalCode : "x1D55D"
	}, {
		names : ["mopf"],
		decimalCode : 120158,
		hexadecimalCode : "x1D55E"
	}, {
		names : ["nopf"],
		decimalCode : 120159,
		hexadecimalCode : "x1D55F"
	}, {
		names : ["oopf"],
		decimalCode : 120160,
		hexadecimalCode : "x1D560"
	}, {
		names : ["popf"],
		decimalCode : 120161,
		hexadecimalCode : "x1D561"
	}, {
		names : ["qopf"],
		decimalCode : 120162,
		hexadecimalCode : "x1D562"
	}, {
		names : ["ropf"],
		decimalCode : 120163,
		hexadecimalCode : "x1D563"
	}, {
		names : ["sopf"],
		decimalCode : 120164,
		hexadecimalCode : "x1D564"
	}, {
		names : ["topf"],
		decimalCode : 120165,
		hexadecimalCode : "x1D565"
	}, {
		names : ["uopf"],
		decimalCode : 120166,
		hexadecimalCode : "x1D566"
	}, {
		names : ["vopf"],
		decimalCode : 120167,
		hexadecimalCode : "x1D567"
	}, {
		names : ["wopf"],
		decimalCode : 120168,
		hexadecimalCode : "x1D568"
	}, {
		names : ["xopf"],
		decimalCode : 120169,
		hexadecimalCode : "x1D569"
	}, {
		names : ["yopf"],
		decimalCode : 120170,
		hexadecimalCode : "x1D56A"
	}, {
		names : ["zopf"],
		decimalCode : 120171,
		hexadecimalCode : "x1D56B"
	}
];

module.exports = {
	characterToEntityMap: characterToEntityMap
};
