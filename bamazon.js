var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "root",

    database: "bamazonDB"
}); 

connection.connect(function(err){
    // if (err) throw err;
    console.log("WELCOME TO BAMAZON!");
    runStore()
});

function runStore() {
    // if (err) throw err;
    connection.query("SELECT * FROM products", function(err, res) {
        // if (err) throw err;
        for (var i = 0; i < res.length; i++) {
        console.log("Product ID: " + res[i].item_id + " Product Name: " + res[i].product_name + " Individual Product Price: " + res[i].item_price);
        }
        buyingPrompt();
    });
}

function buyingPrompt(){
    inquirer
        .prompt({
            name: "buying",
            type: "input",
            message: "Please enter the Product ID of the product you would like yo purchase from the list."
        })
        .then(function(answer) {

        var query = connection.query("SELECT item_id FROM products", function(err, res){
            // console.log(res[i]);
            var userInput = answer
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id);
            console.log(answer);
            
        }

        });

        })
}
