import React from 'react'
import { FaFacebook } from 'react-icons/fa'

function Map() {
    //Useful Array

    // Array Find
    // let arr = [
    //     {letter: 'a'},
    //     {letter: 'b'},
    //     {letter: 'c'}
    // ]
    // arr.find(value => value === 'a');
    // console.log(arr);
    
    // arr.find(value => { 
    //     if(value === 'a'){
    //         console.log(arr);
    //     }
    // })

    // Array Filter
    // const items = [
    //     {name: 'Bike', price: 100},
    //     {name: 'TV', price: 200},
    //     {name: 'Album', price: 10},
    //     {name: 'Book', price: 5},
    //     {name: 'Phone', price: 5000},
    //     {name: 'Computer', price: 1000},
    //     {name: 'Keyboard', price: 25}
    // ]
    // const filteredItem = items.filter(item => {
    //     return item.price <= 100;
    // })
    // console.log(filteredItem);

    // Map Array 
    // can run every single inside an array
    // const items = [ 
    //     {name: 'Bike', price: 100},
    //     {name: 'TV', price: 200},
    //     {name: 'Album', price: 10},
    //     {name: 'Book', price: 5},
    //     {name: 'Phone', price: 5000},
    //     {name: 'Computer', price: 1000},
    //     {name: 'Keyboard', price: 25}
    // ]
    // const itemsMap = items.map(item => {
    //     return item.name
    // })
    // console.log(itemsMap);

    // Challenge1 
    // const nums = [1,2,3,4,5]
    // const numsAnswer = nums.map(num => { 
    //   return num * num;
    // })
    // console.log(numsAnswer)
    
    // Challenge 2
    // const names = ['alice', 'bob', 'charlie', 'danielle']
    // const upperCase = names.map(name => { 
    //   return name[0].toUpperCase() + name.slice(1);
    // })
    // console.log(upperCase);

    // Challenge 3
    // const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']
    // const wrapPokemon = pokemon.map(wrap => `<p>${wrap}</p>`)
    // console.log(wrapPokemon);


    // Find() Array
    //  const items = [
    //     {name: 'Bike', price: 100},
    //     {name: 'TV', price: 200},
    //     {name: 'Album', price: 10},
    //     {name: 'Book', price: 5},
    //     {name: 'Phone', price: 5000},
    //     {name: 'Computer', price: 1000},
    //     {name: 'Keyboard', price: 25}
    // ]
    // const foundItems = items.find(item => { 
    //     return item.name === 'Bike';
    // })
    // console.log(foundItems);

    // Foreach
    // const items = [
    //     {name: 'Bike', price: 100},
    //     {name: 'TV', price: 200},
    //     {name: 'Album', price: 10},
    //     {name: 'Book', price: 5},
    //     {name: 'Phone', price: 5000},
    //     {name: 'Computer', price: 1000},
    //     {name: 'Keyboard', price: 25}
    // ]
    // items.forEach(item => { 
    //     console.log(item.name);
    // })

    // Some
    // Anything in less than 100 is inexpensive 
    // Kinakailangan lang ay sakop siya ng value
    // return true or false
    // const items = [
    //     {name: 'Bike', price: 100},
    //     {name: 'TV', price: 200},
    //     {name: 'Album', price: 10},
    //     {name: 'Book', price: 5},
    //     {name: 'Phone', price: 5000},
    //     {name: 'Computer', price: 1000},
    //     {name: 'Keyboard', price: 25}
    // ]
    // const hasInexpensiveItems = items.some(item => { 
    //     return item.price <= 100;
    // })
    // console.log(hasInexpensiveItems);


    // Every 
    //Kailangan sakop niya lahat ng value or masmataas siya dapat para mag true 
    // const items = [
    //     {name: 'Bike', price: 100},
    //     {name: 'TV', price: 200},
    //     {name: 'Album', price: 10},
    //     {name: 'Book', price: 5},
    //     {name: 'Phone', price: 5000},
    //     {name: 'Computer', price: 1000},
    //     {name: 'Keyboard', price: 25}
    // ]
    // const hasInexpensiveItems = items.every(item => { 
    //     return item.price <= 1000;
    // })
    // console.log(hasInexpensiveItems);

    // Reduce
    // const items = [
    //     {name: 'Bike', price: 100},
    //     {name: 'TV', price: 200},
    //     {name: 'Album', price: 10},
    //     {name: 'Book', price: 5},
    //     {name: 'Phone', price: 500},
    //     {name: 'Computer', price: 1000},
    //     {name: 'Keyboard', price: 25}
    // ]
    // const total = items.reduce((currentTotal, item) => { // It consist two parameters
    //     return item.price + currentTotal;   //currentTotal is the previous iteration of array
    //                                         // item siya ang nagkuha ng lahat nang value sa items 
    // }, 0) // Start total zero
    // //  0 is the currentTotal
    // console.log(total);

    // Includes
    // const items = [1,2,3,4,5]
    // const IncludesTwo = items.includes(2)
    // console.log(IncludesTwo)

  return (
    <div>
    </div>
  )
}

export default Map
