let yourName = document.querySelector("#yourName");
let errorBox = document.querySelector(".error-box");
let cadList = [];


function cad( ) {
    if( yourName.value !== '') {
        console.log("conglatulations");
        saveCad( );
    } else {
        errorBox.innerHTML = `preencha os dados e tente novamente`;
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
                        <p class="text-center error-box"></p>
                    </div>                        


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
                    <div class="row">
                        <p class="text-center error-box"></p>
                    </div>

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
    let errorBox = document.querySelector(".error-box");
    let logName = document.querySelector("#logName");
    for( let i = 0; i < cadList.length; i++ ) {
        
        if ( logName.value !== '' && cadList.includes(logName.value)) {
            resultFinal( );
    
        } else {
            errorBox.innerHTML = `Usuário não encontrado`;
        }

    }

}


function resultFinal( ) {
    let errorBox = document.querySelector(".error-box");
    errorBox.innerHTML = `vc está logado`;
    console.log("conglatulations");
}