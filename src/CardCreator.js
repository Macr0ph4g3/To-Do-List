//This creates a new ToDo item



function cardCreator(object) {
    object.forEach( (element, index) => {
        console.log(index)
        
        // This outputs both the key's name and the values of said key
        for (const [key, value] of Object.entries(element)) {
            // if (value == "test") {
            //     console.log('No')
            // }
            console.log(`${key}: ${value}`);
          }
              });
}

export default cardCreator