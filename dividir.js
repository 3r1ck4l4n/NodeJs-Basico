const dividir=(numero1, numero2)=>{
    if(numero2===0){
        return "No se puede dividir entre cero";
    }else{
        return numero1/numero2;
    }
};


module.exports = dividir;