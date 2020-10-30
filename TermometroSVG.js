class Termometro{
    /*
    Criado por Frederick Marques fredeckri@gmail.com
    import o jquery versão 3.5 ou superior para funcionamento da classe
    */
    constructor(id){ //SVG já parametrizado só inserir na página o objeto
        
        this._elemento='div';
        this._id=`#${id}`;
        this._valueSoma=20; //altere aqui o termometro
        this._valueSubtracao=20; //altere aqui o termometro
        this._temperatura=50; //caso queira alterar o valor padrão altere aqui até 380!
        this._width='50';
        this._height='100'; //0 0 200.35355 632.53125 --- //100 -200 100 1000 
        this._svgTermometro=`                                                                   
        <?xml version="1.0" encoding="UTF-8"?>
                    <svg id='${id}' width="${this._width}px" height="${this._height}px" viewBox="0 0 200.35355 632.53125" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <linearGradient id="b" x1="601.54" x2="600.22" y1="803.81" y2="411.16" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0033cc" offset="0"/>
                    <stop stop-color="#f7ff00" offset=".34246"/>
                    <stop stop-color="#ff6600" offset=".61953"/>
                    <stop stop-color="#f00" offset="1"/>
                    </linearGradient>
                    <radialGradient id="a" cx="581.71" cy="790.63" r="39.374" gradientTransform="matrix(.5207 -.29138 .3072 .5369 35.938 535.6)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" offset="0"/>
                    <stop stop-color="#fff" stop-opacity="0" offset="1"/>
                    </radialGradient>
                    </defs>
                    <!--iserir se estiver no limite-->
                    <g stroke-width="0"><path id="topTermometro" d="m49.3 63a40 43 0 1 1 114.3 0"  fill="none"/></g> 
                    <!--iserir se estiver no limite-->
                    <g transform="translate(-259.65 -264.84)">
                    <g transform="translate(-232.16 4.7662)">
                    
                        <path id="corpoTermometro" d="m541.25 347.62v365.47c0 1.5319 0.10158 3.0304 0.21875 4.5312-22.689 17.218-37.344 44.477-37.344 75.156 0 52.073 42.209 94.281 94.281 94.281s94.281-42.209 94.281-94.281c0-30.676-14.659-57.938-37.344-75.156 0.11717-1.5008 0.1875-2.9993 0.1875-4.5312v-${this._temperatura}.41h-111.88c-0.81045 0-1.6042-0.0294-2.4062-0.0625z" fill="url(#b)"/>
                                                                       
                        <g stroke-width="1"><path d="M500 50a45 450 0 1 1 90 0" stroke="#EBEDF8"/>
                        <path class="progress" d="M500 50a45 450 0 1 1 90 0" stroke="#00ca9d" fill="blue" stroke-dasharray="142" stroke-dashoffset="142"/></g>
                    <path transform="matrix(2.0769 0 0 2.1372 -644.96 -906.11)" d="m616.08 788.61a34.374 33.713 0 1 1 -68.747 0 34.374 33.713 0 1 1 68.747 0z" fill="url(#a)"/>
      
                </g>
                              
                    <path d="m365.72 269.83c-31.657 0-57.156 25.468-57.156 57.125v391.44c0 1.5319 0.10158 3.0304 0.21875 4.5312-22.689 17.218-37.344 44.477-37.344 75.156 0 52.073 42.209 94.281 94.281 94.281s94.281-42.209 94.281-94.281c0-30.676-14.659-57.938-37.344-75.156 0.11717-1.5008 0.1875-2.9993 0.1875-4.5312v-391.44c0-31.657-25.468-57.125-57.125-57.125z" fill="none" stroke="#000" stroke-linejoin="bevel" stroke-width="10"/>
                    
                    <path d="m321.9 712.36h87.642" fill="none" stroke="#000" stroke-width="10"/>
                    <path d="m321.9 618.17h87.642" fill="none" stroke="#000" stroke-width="10"/>
                    <path d="m321.9 523.97h87.642" fill="none" stroke="#000" stroke-width="10"/>
                    <path d="m321.9 429.77h87.642" fill="none" stroke="#000" stroke-width="10"/>
                    <path d="m321.9 335.57h87.642" fill="none" stroke="#000" stroke-width="10"/>
                    
                    </g>
                    
                    </svg>
        `;

    }  
   
    get Id(){return `${this._id}`;}
    set Id(value){
        this._id=`'#${value}'`;
    }

    get Temperatura(){return this._temperatura;}
    set Temperatura(value){
        this._temperatura=value;
    }
    
    get SvgTermometro(){
        return this._svgTermometro;
    }
       
    get Css() {return this._css[0];}
    //get BackgroundColor() {return this._css[0]["background-color"];}

    get Width(){return this._width}
    set Width(value){
        $(this.Id).css('width',`${value}px`);
    }

    get Height(){return this._height;}
    set Height(value){
        $(this.Id).css('height',`${value}px`);
    }
    get ValueSoma(){return this._valueSoma;}
    get ValueSubtracao(){return this._valueSubtracao;}
    
    get Type(){return this._type;}
    set Type(value){
        this._type=`${value}`;
    }
   
    VerificaTermometro(value)
        {
        if ((this.Temperatura)>=390)
            {
                $('#topTermometro')
                .css('fill', 'red')              
            }                              
            else
            {
                $('#topTermometro')
                .css('fill', 'none')        
            }
        } 
    AlteraTermometro()
        {
        this.VerificaTermometro();
        $('#corpoTermometro')
        .attr('d',
            `m541.25 347.62v365.47c0 1.5319 0.10158 3.0304 0.21875 4.5312-22.689 17.218-37.344 44.477-37.344 75.156 0 52.073 42.209 94.281 94.281 94.281s94.281-42.209 94.281-94.281c0-30.676-14.659-57.938-37.344-75.156 0.11717-1.5008 0.1875-2.9993 0.1875-4.5312v-${this.Temperatura}.41h-111.88c-0.81045 0-1.6042-0.0294-2.4062-0.0625z`); 
            
        }    
    AumentaTermometro(){   
        if (this.Temperatura>=390)
        {
            this.Temperatura=390;
            this.AlteraTermometro();
        }
        else
        {
        this.Temperatura=this.Temperatura+10;      
            $('#topTermometro')
            .css('fill', 'none')    
            this.AlteraTermometro();
        }
    }
    DiminuiTermometro(){
        if (this.Temperatura<=0)
        {
            this.Temperatura=0;
            
        }
        else
        {
        this.Temperatura=this.Temperatura-10; 
        this.AlteraTermometro();
        }
    }

    SetTemperatura(value){
        if (value>=390)
        {
            this.Temperatura=390;
            this.AlteraTermometro();
        }
        
        if (value<=0)
        {
            this.Temperatura=0;
            this.AlteraTermometro();
        }
        if ((value>0) && (value<390))
        {
            this.Temperatura=value;      
            $('#topTermometro')
            .css('fill', 'none')    
            this.AlteraTermometro();
        }     
    }

}

