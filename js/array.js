const fruits = ['banana', 'apply', 'orange']
const vegetables = ['onion', 'potato', 'tomato']
const nonVeg = ['chicken', 'mutton', 'eggs']
const food = ['biryani', 'puri', 'bhujiya']

// NOTE: array.concat() is a array method which is join two arrays
// It will not change the value of any array instead it will make new one.
// We can more than one array with ONE array (Ex: 3)
fruits.concat(vegetables) // :1
vegetables.concat(fruits) // :2
fruits.concat(vegetables, nonVeg) // :3

// ARRAY MWTHODS (RELATED TO CHANGING VALUES)
// 1: array.push() => add to end
// 2: array.pop() => remove from end
// 3: array.shift() => remove from start
// 4: array.shift() => add to start
food.push('END CONTENT') // ['biryani', 'puri', 'bhujiya', 'END CONTENT']
food.pop() // ['biryani', 'puri', 'bhujiya']
food.shift() // ['puri', 'bhujiya']
food.unshift("START CONTENT") // ['biryani', 'puri', 'bhujiya']

// MORE ARRAY METHODS 
// 1: concat => merge arrays
// 2: includes => look for a value
// 3: indexOf => just like str.indexOf
// 4: join => creates a string from array
// 5: reverse => reverse an array
// 6: slice => copy portion of an array
// 7: aplice => remove/replace elements
// 8: sort => sorts an arrat
console.log(food.includes('puri')) // return true 
console.log(food.includes('puri sabji')) // return false 
console.log(food.includes('asbdf')) // return false 
console.log(food.indexOf('puri')) // return 1
if (food.includes('puri')) {
	console.log('CONGO, YOU GOT IT...<3')
}
