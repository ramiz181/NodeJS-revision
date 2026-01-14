const sessionIdToUserMap = new Map() // hash map

export function setUser(id, user) {
    sessionIdToUserMap.set(id, user)
    // e.g  "userId123" points this user ==> { name: "Ramiz", role: "admin" }
}

export function getUser(id) {
    return sessionIdToUserMap.get(id)

    // Receives id
    // Calls .get(id)
    // Searches Map for the key
    // Returns:
    // the stored value if found
    // undefined if not found

}





// Map ==> key value pair
// Why using Map instead of normal JS object
// ==> Objects were not primarily designed for data storage

// Object = "thing with properties"
// Map = "data table (dictionary)"

// Code:
// const obj = {}
// obj[123] = "A"
// obj[{ x: 1 }] = "B"
// console.log(obj)

// Output:
// {
//   "123": "A",
//   "[object Object]": "B"
// }

// "[object Object]"    ====>  reason   =====>    Objects FORCE keys to be strings


// COde:
// const map = new Map()

// map.set(123, "A")
// map.set({ x: 1 }, "B")
// map.set("toString", "C")

// Output:
// stores as it is:

// Map(3) {123 => 'A', {…} => 'B', 'toString' => 'C'}
//         ||

// { 123 => "A" }
// key:123
// value:"A"
// { Object => "B" }
// key:{ x: 1 }
// value:"B"

// { "toString" => "C" }
// key:"toString"
// value:"C"

