let yourName = document.querySelector("#yourName");
let cadList = [];


function cad( ) {
    if( yourName.value !== '') {
        console.log("conglatulations");
        saveCad( );
    } else {
        console.log("error")
    }
}


function saveCad( ) {
    let mainContainer = document.querySelector(".main-container");
    cadList.push(yourName.value);
    console.log(cadList);
    
    mainContainer.innerHTML = `
        <div class="log-container">

            <h1 class="login-title">Login</h1>

            <div class="inputs container text-center">

                        <div class="row">
                            <label for="logName">Name</label>
                            <input type="text" id="logName" placeholder="write your name here" class="p-3">
                        </div>
                        
                        <div class="row mt-2">
                            <button onclick="logar( )">entrar</button>
                        </div>

                        <div class="row mt-2">
                        <button onclick="backToCad()"> Cadastrar </button>
                        </div>
                    </div>

        </div>
    `

}

function backToCad( ) {
    let mainContainer = document.querySelector(".main-container");
    
    mainContainer.innerHTML = `
            <div class="cad-container">
                <div class="container">
                    <h1 class="text-center cad-title">Cadastre-se</h1>


                    <div class="inputs container text-center">
                        <div class="row">
                            <label for="yourName">Name</label>
                            <input type="text" id="yourName" placeholder="write your name here" class="p-3">
                        </div>
                        <div class="row mt-2">
                            <button onclick="cad( )">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
    `
}


function logar( ) {
    let logName = document.querySelector("#logName");
    for( let i = 0; i < cadList.length; i++ ) {
        
        if ( logName.value !== '' && cadList.includes(logName.value)) {
            resultFinal( );
    
        } else {
            console.log("error");
        }

    }

}


function resultFinal( ) {
    console.log("conglatulations");
}