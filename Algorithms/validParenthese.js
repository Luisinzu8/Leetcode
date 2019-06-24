// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

var isValid = function(s) { // 100 ms runtime
    var stack = [],
        i;
    s = s.split("");

    for( i = 0; i < s.length; i++ ){
        switch( s[i] ){
            case "(":
                stack.unshift( ")" );
                break;
            case "[":
                stack.unshift( "]" );
                break;
            case "{":
                stack.unshift( "}" );
                break;
            default:
                if( stack.shift() !== s[i] )
                    return false;
                break;
        }
    }

    if( stack.length === 0 ) return true;
    return false;
};

// --------------------------------------------------------

var isValid = function(s) {
    var stack = [];
    s = s.split("");

    for(var i = 0; i < s.length; i++){
        if(s[i] === "("){
            stack.unshift(")");
        }else if(s[i] === "["){
            stack.unshift("]");
        }else if(s[i] === "{"){
            stack.unshift("}");
        }else if(stack.shift() !== s[i]){
            return false;
        }
    }

    if(stack.length === 0) return true;
    return false;
};