//task 1


const interval = (ms)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },ms)
    })

}
// log

const logItems = async(item , ms)=>{

    await interval(ms);
    console.log(item);
}

const iterateWithAsyncAwait=async(tab)=> {
    
    for(let i=0; i < tab.length; i++) {
      await logItems(tab[i],1000)
    }
}



iterateWithAsyncAwait([10,5,8,17]);

async function waitCall() {

    let tab = [];
    await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
     return res.json()
    })
    .then((res)=>{
        tab = [...res , ...tab]
    })
     
   console.log(tab);
  }
  waitCall()

//task 2 and 3

async function waitCall() {

    let tab = [];
    await fetch("https://jsonplaceholder.typicode.om/todos")
    .then((res)=>{
     return res.json()
    })
    .then((res)=>{
        tab = [...res , ...tab]
    })
     
   console.log(tab);
  }
  waitCall().catch((error)=>{
    console.error(error)
  })

// task 3 part 2

const msg1 = () => {return promise = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("le premier message");
      }, 1000);})}

const msg2 = () => {return promise = new Promise((resolve)=>{
        setTimeout(() => {
            resolve("le 2 message");
          }, 1000);})}
          
const msg3 = () => {return promise = new Promise((resolve)=>{
            setTimeout(() => {
                resolve("le 3 message");
              }, 1000);})}

const chainedAsyncFunctions= async function(){
    const a = await msg1() ;
    console.log(a);
    const b = await msg2() ;
    console.log(b);
    const c = await msg3() ;
    
console.log(c);

    
}
chainedAsyncFunctions() ;

//ex : 4

const concurrentRequests= async ()=>{

    let data1=  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
     return res.json()
    })
    .then((res)=>{
     return res
   })
    
   let data2=  await fetch("https://jsonplaceholder.typicode.com/todos")
   .then((res)=>{
    return res.json()
   })
   .then((res)=>{
    return res
  })

  Promise.all([data1,data2])
 .then((values)=>{
    console.log(values);
 })
 .catch((err)=>{
    console.error(err)
 })
}

concurrentRequests()

// ex : 5

let urls =['https://jsonplaceholder.typicode.com/users','https://jsonplaceholder.typicode.com/todos'] ;

const parallelCalls = async(urls) => {
    try {
        const promises = urls.map(url => fetch(url)) ;
        const responses = await Promise.all(promises) ;
        const data = await Promise.all(responses.map(response => response.json()))
        return data}
        catch (error){
            throw new Error(`${error}`)
        }
    }
    parallelCalls(urls).then(data=> {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    }) ;
