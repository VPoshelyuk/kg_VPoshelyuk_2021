// Question: Determine whether a one-to-one character mapping 
// exists from one string, s1, to another string, s2. 
// For example, given s1 = abc and s2 = bcd, print "true" into 
// stdout since we can map each character in "abc" to a character in "bcd". 
// Given s1 = foo and s2 = bar, print "false" 
// since the character ‘o’ cannot map to two characters. 
// But given s1 = bar and s2 = foo, print "true" since each 
// character in "bar" can be mapped to a character in "foo". 

const myArgs = process.argv.slice(2)

const oneToOneMapping = (s1, s2) => {
    if(s1.length === 0) return "true"
    if(s1.length > s2.length || s2.length === 0) return "false"
    let check = {}
    for(let i = 0; i < s1.length; i++){
        if(!check[s1[i]]) check[s1[i]] = s2[i]
        else if(check[s1[i]] !== s2[i]) return "false"
    }
    return "true"
}

if(myArgs.length === 2)console.log(oneToOneMapping.apply(null, myArgs))
else console.log("Wrong number of arguments!")

module.exports = oneToOneMapping

