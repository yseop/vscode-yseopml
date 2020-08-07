/*
 * Note: The purpose of this file is to provide code examples that are syntactically correct,
 * even if it won't compile because some symbols, objects, functions… don't exist.
 */

function Patate::getCityName()
--> return ""
;


Person ALBERT_EINSTEIN
--> birthday 'd:1879-03-14'

//NOTE_AK : usage d'un objet inline NlgRepresentant avec []
--> i18nName_fr	-> NlgRepresentant
				--> referential [	"Albert Enstein",
									"Alberta Enstein"
								]
				--> anaphor		PERSONAL_PRONOUN
			;

//NOTE_AK : usage d'un objet inline et donc enchassement par le businessObjectEditor
--> address		-> Address
				--> zipCode "33000"

				//NOTE_AK ; double enchassement
				--> city	-> City
							--> name	"Vienne"
							--> country	"Autriche"
							;
				;

;

Person CEDRIC_V
//NOTE_AK : usage d'un objet inline NlgRepresentant avec {}
--> i18nName_fr	-> NlgRepresentant
				--> referential {	"Cédric V.",
									"Cedrick V."
								 }
				--> anaphor		PERSONAL_PRONOUN
			;
;

City LYON
--> name	"Lyon"
--> country	"France"
;

	Address SHELDON_COOPER_ADDRESS
	--> zipCode "69000"
	--> city	LYON
	;

//NOTE_AK : usage d'un TextGranule inline (premiere syntaxe) en valeur de champ
Person SHELDON_COOPER
--> i18nName_fr	\( Sheldon \value("Cooper") \)
--> address		SHELDON_COOPER_ADDRESS
;

Person MARIE_CURIE

//NOTE_AK : usage d'un MultilingualExpression
--> firstName	-> MultilingualExpression

				//NOTE_AK : usage d'un TextGranule inline (seconde syntaxe) en valeur de champ
                // zone mal gérée à cause de la condition en plein milieu
				--> fr		-> TextGranule
								\(	Marie fr \)

							//NOTE_AK : usage d'une condition
							--> condition	LYON.name == "Lyon"
							; // fin de zone mal gérée

				--> en		"Marie en"
				--> en_US	"Marie en_US"
				--> defaultValue	"Marie Default"
				;

//NOTE_AK : usage d'un identifier ajoute a un objet inline
--> address		-> Address MARIE_CURIE_ADDRESS
				--> zipCode "69010"
				--> city	LYON
				;

;

//NOTE_AK : premier usage de l'operateur synonym
Person ALEXANDRE_G
--> i18nName_fr	synonym{	"Alexandre G.",
							"Alexander"
						}
;

//NOTE_AK : usage d'un complete
complete ALEXANDRE_G
--> address		-> Address
				--> zipCode "75012"
				--> city	-> City
							--> name	"Paris"
							--> country	"France"
							;
				;
--> colleague ALBERT_EINSTEIN
;

List	PIERRE_D_NAMES
--> values	"Pierre D.",
			"Pierre"
;

//NOTE_AK : usage d'un extends
Person PIERRE_D extends ALEXANDRE_G

    //NOTE_AK : second usage de l'operateur synonym
    --> i18nName_fr	synonym(PIERRE_D_NAMES)

    //NOTE_AK : usage de l'operateur ==>
    ==> colleague MARIE_CURIE
;


Function patate(Object o, String s, {} args)
--> documentation """
Documented function with:

# coucou

- *@param* `o` An Object.
- *@param* `s` A String.

*@return* the value `12`
"""
--> local ComplexType complexType
--> domains Integer
--> action {
	complexType.returnValue = \( \noSpace|\noSpace\setStartOfSentence(true) \value(mySentence, _ALL : \(\noSpace|\noSpace\setStartOfSentence(true) \resetReferences\) )   .\);
	return 12;
}
;

function function_name
args{}
--> action {
    if (value == true) {
        foreach(_var, coll) {
            switch(_var) {
                case(case_a) : {
                }
                case(case_b) : {

                }
                case(case_c) : {

                }
                default: {

                }
            }
        }
    }
};
