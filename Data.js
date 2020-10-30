class Data {
     
    constructor (){
    this._data = new Date();
    this._dia = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
    this._mes = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    this._ano = this._data.getFullYear();
    this._horas = this._data.getHours();
    this._minutos = this._data.getMinutes();
    this._segundos = this._data.getSeconds();
    this._horaDeAgora;
    this._respAgora;
    this._msg = this._msg;
    this._data01;
    this._data02;
    this._dataLimite;
    this._dataInicio;
    this._diferencaData=[];
    this.ImprimeHora();
    }
   
    initialize(){
       
    }

    get RespAgora() {
        return this._respAgora;
    }

    get Horas(){
        return this._horas;
    }
    SHoras(){
        let hora = new Date()
        this._horas = hora.getHours();
    }
    get Minutos(){
        return this._minutos;
    }
    SMinutos(){
        let hora = new Date()
        this._minutos = hora.getMinutes();
    }
    get Segundos(){
        return this._segundos;
    }
    SSegundos(){
        let hora = new Date()
        this._segundos = hora.getSeconds();
    }

    get HoraDeAgora(){
        return this._horadeagora;
    }
    set HoraDeAgora(value){
        this._horadeagora=new Date();
    }
    get Data01(){
        return this._data01;
    }
    set Data01(value){
        this._data01=value;
    }

    get Data02(){
        return this._data02;
    }
    set Data02(value){
        this._data02=value;
    }

    set DataInicio(value){
        this._dataInicio=value;
    }
    get DataInicio(){
        return this._dataInicio;
    }
    get DataLimite(){
        return this._dataLimite;
    }

    DataLimite(valueAno,valueMes,valueDia){
        if (this.DataInicio!='') {
        this._dataLimite=new Date(this.DataInicio.getFullYear()+valueAno,this.DataInicio.getMonth()+valueMes,
                                  this.DataInicio.getDate()+valueDia);
                                }
    }

    Saudacao() {

        if (this._horas < 12 && this._horas > 5) { this._msg = "Bom dia!"; } else
        if (this._horas < 18 && this._horas > 12) { this._msg = "Boa Tarde!"; } else { this._msg = "Boa Noite"; }
        return this._msg;
    }

    Formatohora() {
        this.SHoras();
        this.SMinutos();
        this.SSegundos();
        if (this._horas < 10) { this._horas = "0" + this._horas; }
        if (this._minutos < 10) { this._minutos = "0" + this._minutos; }
        if (this._segundos < 10) { this._segundos = "0" + this._segundos; }
        this._respAgora=(this._horas + ":" + this._minutos + ":" + this._segundos);
        $('#hora').text(`${tempo.Saudacao()} são:${this.RespAgora}`);
        this.RespAgora;
    }

    ImprimeHora(){       
            setInterval(()=>{
            this.Formatohora();
            },1000);
    }
      
    ImprimeData () {

        return (this._dia[this._data.getDay()] + ", " + this._data.getDate() + " de " + this._mes[this._data.getMonth()] + " de " + this._data.getFullYear());
    }
 
   


    //r = data 2 - data 1
    SubtracaoData(value01,value02)
    {
        let millisegundos,segundos,minutos,horas,dias,meses,anos
        millisegundos=value02-value01;
        segundos=millisegundos/1000;
        minutos=segundos/60;
        horas=minutos/60;
        dias=horas/24;
        meses=dias/30;
        anos=meses/12;
                                                 //Array de respostas
        this._diferencaData.push(millisegundos); // 0
        this._diferencaData.push(segundos);      // 1
        this._diferencaData.push(minutos);       // 2
        this._diferencaData.push(horas);         // 3
        this._diferencaData.push(dias);          // 4
        this._diferencaData.push(meses);         // 5
        this._diferencaData.push(anos);         // 5

    }


}