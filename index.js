const readline = require('readline-sync')

function start(){
    const content = {}
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question("Digite um termo da Wikipedia: ")
    }
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes)
        const selectPrefixText = prefixes[selectPrefixIndex]

        return selectPrefixText
        
    }

}

start()