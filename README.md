***SPLASH***
-Header[ nav,  ]
-Body [ desc, logo
    ( login / sign up bar ) ]
-Footer [ credits, contact, about ]

***SEARCH***
-Header []
-Body [ (desc, Logo ) ( api switch, search for API, build tree chart, set / change node / save tree ) ( search articles / save articles / ... ) ( compile project articles and proceed to analyser ) ]
-Footer []

You will be able to search for articles, save articles, concatenate saved articles, and analyse the text.

all items may be saved in the project, local storage for sure, think about how to use cloud.


APIs:(
    doaj.org
    legal?
    Focused scientific?
    News?
    P.D. literature?
)


Non targeted:(   
   Graphemes, count, variety [bar plot]
   Morphemes, count, variety [bar plot]
)

Targeted:(
	Grapheme target : {
		count occurence: integer
		list parent morphemes: array of strings [bar plot, occurence vs name]
		list parent sentences: array of strings [bar plot, occurence vs name; word tree]
	}
	Morpheme target : {
		count occurence, list ocurrences: integer, string list [bar plot, occurence vs variety]
		count pre-/-suff -ixed occurences: string [bar plot, occurence vs variety]
		list parent sentences: array of strings [bar plot, occurence vs variety; tree plot]
	}
	Clause target: {
		ocurrences: integer, sentences: string array [tree plot]
}
	Sentence target: {
		ocurrences: integer
}
)
