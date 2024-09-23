// functn introductn, returns name of user

function introduction(name){
    return `Hi, my name is ${name}.`
}


//functn introductionWithLanguage, returns name of user, with language 

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//functn introductionWithLanguageOptional, returns optianal name, default language as Javascript

function introductionWithLanguageOptional(name, language="JavaScript"){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//functn introductionWithLanguageOptional, returns default name Gracie, default language as Javascript

function introductionWithLanguageOptional(name="Gracie", language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

