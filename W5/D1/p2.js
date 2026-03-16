const items = {
    item1:"laptop",
    item2:"server",
    item3:"cloudAPI"

};
for( const [key,itemName] of Object.entries(items)){
    console.log(`${key}: ${itemName}`);
}