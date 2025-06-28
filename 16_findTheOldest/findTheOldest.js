const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const editPeople = people.map(function(obj) {
        if ("yearOfDeath" in obj) {
            return {name: obj.name, years: obj.yearOfDeath - obj.yearOfBirth};
        }else {
            return {name: obj.name, years: currentYear - obj.yearOfBirth};
        }
    })
    const oldest = editPeople.reduce((prev, curr) => {
        if (prev.years > curr.years) {
            return prev;
        } else {
            return curr;
        }
    })
    
    return oldest;
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
