function Button({type, text}){
    let btn = document.createElement('button')
    if(type === 'gradient-blue'){
        btn.className = type
        btn.style.backgroundImage = "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)"
        btn.innerHTML = text    
    }else if(type === 'gradient-oragne'){
        btn.className = type
        btn.style.backgroundImage = "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)"
        btn.innerHTML = text
    }else{
        btn.className = type
        btn.style.backgroundImage = "linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%)"
        btn.innerHTML = text
    }
}

module.exports.Button = Button