import * as pdf from 'html-pdf'
import * as input from 'readline-sync'

var html:string = input.question('Insira seu html: ')
pdf.create(html).toFile('./results/result.pdf', function(err, resp){
    if(err){
        console.log("Falhou" + err);
    }else{
        console.log(resp);
    }

});
