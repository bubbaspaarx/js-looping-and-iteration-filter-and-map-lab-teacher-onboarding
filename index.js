// Code your solution here:
driversWithRevenueOver = (array, revenue) => array.filter(driver => driver.revenue > revenue)

driverNamesWithRevenueOver = (array, revenue) => driversWithRevenueOver(array, revenue).map(driver => driver.name)

exactMatch = (array, obj) => array.filter(driver => driver[Object.keys(obj)[0]] == Object.values(obj)[0])

exactMatchToList = (array, obj) => array.filter(driver => driver[Object.keys(obj)[0]] == Object.values(obj)[0]).map(driver => driver.name)
