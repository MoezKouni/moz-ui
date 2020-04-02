function Button({type, text}){
    if(type === 'gradient-blue'){
        return(
            <button style="background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)">
                {text}
            </button>
        )
    }else if(type === 'gradient-oragne'){
        return(
            <button style="background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)">
                {text}
            </button>
        )
    }else{
        return(
            <button style="background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%)">
                {text}
            </button>
        )
    }
}

module.exports.Button = Button