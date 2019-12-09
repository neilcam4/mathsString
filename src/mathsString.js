function mathsString(input){
    let array = input.split(" ")
    if(array[1] == '+'){
        let answer = parseInt(array[0]) + parseInt(array[2])
        return [input, answer]
    }else if(array[1] == '-'){
        let answer = parseInt(array[0]) - parseInt(array[2])
        return [input, answer]
    } else if(array[1] == 'x'){
        let answer = parseInt(array[0]) * parseInt(array[2])
        return [input, answer]
    } else if(array[1] == '/'){
        let answer = parseInt(array[0]) / parseInt(array[2])
        return [input, answer]
    }
    
}