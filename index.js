const logDriverNames = function (drivers) {
  drivers.forEach(function(drivers) {
    console.log(drivers.name)
  })
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(drivers) {
    if (hometown === drivers.hometown) {
    console.log(drivers.name)
    }
  })
}


const driversByRevenue = function(drivers) {
  // drivers.sort(function(a, b) {
  //   return a.revenue - b.revenue
  // })
  // drivers.forEach(function(drivers) {
  //   console.log(drivers.name)
  //  })

}
drivers.sort(function(a, b) {
  return a.revenue - b.revenue
})

// const driversByRevenue = function(drivers) {
//     drivers.sort(function(a, b) {
//       return a.revenue - b.revenue
//       return drivers.name
//     })



  // drivers.sort(function(a,b) {
  //   return a.revenue>b.revenue
  //   console.log(drivers.revenue)
  // })
  // console.log(drivers.name)


//   drivers.sort(function(a, b) {
//     return a.revenue > b.revenue
//     console.log(drivers.name)
// })}




// const driversByRevenue = function(drivers.sort()) {
//   drivers.sort(function(a,b) {
//     // const names = [drivers.names];
//     // drivers.revenue = revenue
//     // drivers.sort()
// // non-destructive
//   return a.localeCompare(b)
//     console.log(drivers.name)
//  })
// }


  //
  // drivers.sort(function(drivers) {
  //
  //   console.log(drivers.name)
  //
  // })





// const driversByName = function() {
//
//   // function nondestructivelyUpdateObject(obj, key, value) {
//   //   const newObj = { ...obj };
//   //
//   //   newObj[key] = value;
//   //
//   //   return newObj;
//   // }
// }
//
// const totalRevenue = function() {
//
// }
//
// const averageRevenue = function() {
//
// }
