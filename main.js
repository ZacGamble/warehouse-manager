let packages = [
    {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs'}, 
    {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk'}, 
    {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147'}, 
    {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145'}, 
    {heavy: true, priority: true, fragile: true, to: 'Brittany'}, 
    {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz'}, 
    {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367'}]

let renderedPackages = []
const isPriority = packages.filter(package => package.priority)
const isFragile = packages.filter(package => package.fragile)

function startProgram(){
    renderedPackages = JSON.parse(JSON.stringify(packages))
    const index = Math.floor(Math.random() * (renderedPackages.length -1))
    console.log(index);
    renderedPackages[index].missing = true;
    drawAllPackages();
}

// function heavyButton(){
//     let lostPackage = renderedPackages.find(p => p.missing)
//    packages = packages.filter(package => package.heavy == lostPackage.heavy)
//     drawAllPackages()
// }

// function priorityButton(){
//     let lostPackage = renderedPackages.find(p => p.missing)
//     packages = packages.filter(package => package.priority == lostPackage.priority)
//     drawAllPackages()
// }

// function fragileButton(){
//     let lostPackage = renderedPackages.find(p => p.missing)
//     packages = packages.filter(package => package.fragile == lostPackage.fragile)
//     drawAllPackages()
// }

function drawAllPackages(){
    let template = ''
    for (let i = 0; i < packages.length; i++) {
        const package = packages[i];
        template +=
        `
        <div class="col-3 p-3">
        <div class="card d-flex flex-column pack" onclick="assume('${package.to}')">
        <img class="img-fluid box-crop" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYglWFfaIbmphzRCaNvzcHeoT2V3iFetcexQ&usqp=CAU" 
        alt="">
        <span>Heavy: ${package.heavy}</span>
        <span>Priority: ${package.priority}</span>
        <span>Fragile: ${package.fragile}</span>
        <span>Tracking #: ${package.trackingNumber}</span>
        </div>
        </div>
        `  
        console.log();
    }
    document.getElementById('box-row').innerHTML = template
}

function checkBox(attribute){
    let lostPackage = renderedPackages.find(p => p.missing)
    packages = packages.filter(p => p[attribute] === lostPackage[attribute])
    // document.getElementById(attribute).disabled = true
    drawAllPackages()
}

function assume(owner){
    let lostPackage = renderedPackages.find(p => p.missing)
    if (lostPackage.to == owner){
        alert('You Found It!')
     } else{
         alert("Not it.")
    }
}
function resetProgram() {
    packages = [
        {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs'}, 
        {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk'}, 
        {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147'}, 
        {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145'}, 
        {heavy: true, priority: true, fragile: true, to: 'Brittany'}, 
        {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz'}, 
        {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367'}]
    drawAllPackages()
    console.log(renderedPackages);

}


drawAllPackages();

startProgram();

