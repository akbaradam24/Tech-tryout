/*
create function to determine the given expression is correct or not
expression will be string of open bracket nor close bracket e.g ({[[()]]})
your function should determine the expression is it correct or not
examples:
({[]}) => true
([][]{})=> true
({)(]){[} => false
[)()] => false
*/

function isExpression(string) {
    let stack = []
    let obj = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for(let i = 0; i < string.length; i++) {
        if(string[i] == '[' || string[i] == '{' || string[i] == '(') {
            stack.push(string[i])
        } else {
            let answ = stack.pop()
            if(string[i] != obj[answ]) {
                return false
            }
        }
    }

    return stack.length == 0
}

let string = '{[)](}'

console.log(isExpression(string))