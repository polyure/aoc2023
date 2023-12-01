import * as fs from 'fs';
var file = fs.readFileSync('input.txt', 'utf8');

var text_by_line = split_into_list(file);
var sum = find_integers(text_by_line);


function sum_first_and_last(list_of_integers: any) {
    var summa = list_of_integers[0] + list_of_integers[list_of_integers.length-1];
    return summa
}

function split_into_list(file: any) {
    var text_by_line = file.split("\n")
    return text_by_line
}

function replace_strings(list: any) {
    const writtenNumbers: { [key: string]: string } = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
    };

    return list.map((input: string) => writtenNumbers[input.toLowerCase()] || input);
}

function find_integers(text_by_line: any) {
    var sum = 0
    for (var line of text_by_line) {
        var integers = Array.from(line.matchAll(/(?<=(\d|one|two|three|four|five|six|seven|eight|nine|zero))/g), (match: any) => match[1])
        var replaced_integers = replace_strings(integers);
        var first_plus_last = sum_first_and_last(replaced_integers)
        sum += +first_plus_last
    }
    console.log(sum)
}