const people = [{
    id : 1,name : 'john'
},{
    id : 2,name : 'peter'
},{
    id : 3,name : 'susan'
},{
    id : 4,name : 'micheal'
}];

const idCheck = people.find((eachobj)=>{
    return eachobj.id === 1;
})
console.log(idCheck);