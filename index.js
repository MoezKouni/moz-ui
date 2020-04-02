function Button(options){
    let btn = document.createElement('button')
    if(options.type === 'gradient-blue'){
        btn.className = options.type
        btn.style.backgroundImage = "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)"
        btn.innerHTML = options.text    
    }else if(options.type === 'gradient-oragne'){
        btn.className = options.type
        btn.style.backgroundImage = "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)"
        btn.innerHTML = options.text
    }else{
        btn.className = options.type
        btn.style.backgroundImage = "linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%)"
        btn.innerHTML = options.text
    }
}

module.exports.Button = Button